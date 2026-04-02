"""
Script to mark food items in menu data.
Adds an 'is_food' field to each item in 08540_menu_items.json
"""

import json
import logging
import logging.handlers
import os
import argparse
from pathlib import Path
from typing import List, Dict, Any


class FoodItemMarker:
    """Class to mark food items in menu data"""
    
    def __init__(self, config_file: str):
        """Initialize the marker with configuration
        
        Args:
            config_file: Path to the configuration JSON file
        """
        self.config = self._load_config(config_file)
        self.logger = self._setup_logger()
        self.food_flag_set = set()

    @staticmethod
    def _normalize_text(value: Any) -> str:
        """Return normalized text used for matching and heuristics."""
        return str(value or "").strip()

    def _get_js_variable_name(self) -> str:
        """Return the JS variable that stores menu arrays."""
        return str(self.config.get('js_variable_name', 'menus')).strip() or 'menus'
        
    def _load_config(self, config_file: str) -> Dict[str, Any]:
        """Load configuration from JSON file
        
        Args:
            config_file: Path to config JSON file
            
        Returns:
            Configuration dictionary
        """
        try:
            with open(config_file, 'r', encoding='utf-8') as f:
                config = json.load(f)
            return config
        except FileNotFoundError:
            raise FileNotFoundError(f"Configuration file not found: {config_file}")
        except json.JSONDecodeError as e:
            raise ValueError(f"Invalid JSON in configuration file: {e}")
    
    def _setup_logger(self) -> logging.Logger:
        """Setup logger with file and console handlers
        
        Returns:
            Configured logger instance
        """
        logger = logging.getLogger(__name__)
        
        # Clear existing handlers
        logger.handlers.clear()
        
        # Set log level
        log_level = self.config.get('logging', {}).get('level', 'INFO')
        logger.setLevel(getattr(logging, log_level))
        
        # Create logs directory if it doesn't exist
        log_dir = Path(self.config['log_dir'])
        log_dir.mkdir(parents=True, exist_ok=True)
        
        # File handler
        log_file = log_dir / self.config['log_file']
        file_handler = logging.FileHandler(log_file, encoding='utf-8')
        file_handler.setLevel(getattr(logging, log_level))
        
        # Format
        log_format = self.config.get('logging', {}).get('format', '%(asctime)s - %(levelname)s - %(message)s')
        formatter = logging.Formatter(log_format)
        file_handler.setFormatter(formatter)
        
        logger.addHandler(file_handler)
        
        return logger
    
    def _load_food_flag_reference(self) -> None:
        """Load the food flag reference to identify good items"""
        try:
            food_flag_file = self.config['food_flag_reference']
            if not os.path.exists(food_flag_file):
                self.logger.warning(f"Food flag reference file not found: {food_flag_file}")
                return
            
            with open(food_flag_file, 'r', encoding='utf-8') as f:
                food_flags = json.load(f)
            
            # Build a set of good food item names for quick lookup
            for item in food_flags:
                if item.get('good', False):
                    # Store description as key since it's more reliable than name
                    description = self._normalize_text(item.get('description'))
                    name = self._normalize_text(item.get('name'))
                    if description:
                        self.food_flag_set.add(description.lower())
                    if name:
                        self.food_flag_set.add(name.lower())
            
            self.logger.info(f"Loaded {len(self.food_flag_set)} good food items from reference file")
        except json.JSONDecodeError as e:
            self.logger.error(f"Error parsing food flag reference file: {e}")
        except Exception as e:
            self.logger.error(f"Error loading food flag reference: {e}")
    
    def _is_food_item(self, item: Dict[str, Any]) -> bool:
        """Determine if an item is a food item
        
        Args:
            item: Menu item dictionary
            
        Returns:
            True if item is a food item, False otherwise
        """
        # Check if item is in food flag reference
        use_reference = self.config.get('food_detection', {}).get('use_food_flag_reference', True)
        description = self._normalize_text(item.get('description'))
        name = self._normalize_text(item.get('name') or item.get('item'))
        price = self._normalize_text(item.get('price'))

        if use_reference and self.food_flag_set:
            if description.lower() in self.food_flag_set or name.lower() in self.food_flag_set:
                return True
        
        # Check if item has meaningful description and/or price
        check_description = self.config.get('food_detection', {}).get('check_description_length', True)
        min_desc_length = self.config.get('food_detection', {}).get('min_description_length', 5)
        
        # A food item should have either:
        # 1. A meaningful description (longer than min length)
        # 2. A price value
        # 3. A name that's not just "Menu"
        
        has_description = len(description) >= min_desc_length
        has_price = len(price) > 0 and price.lower() != ''
        has_meaningful_name = name.lower() not in {'menu', 'menu page', ''}
        
        is_food = has_description or has_price or has_meaningful_name
        
        return is_food
    
    def _extract_js_array_block(self, content: str, variable_name: str) -> tuple[int, int, str]:
        """Extract array literal assigned to a JS const variable."""
        marker = f"const {variable_name}"
        marker_idx = content.find(marker)
        if marker_idx < 0:
            raise ValueError(f"Variable '{variable_name}' not found in JS file")

        equal_idx = content.find("=", marker_idx)
        if equal_idx < 0:
            raise ValueError(f"Assignment for variable '{variable_name}' not found")

        array_start = content.find("[", equal_idx)
        if array_start < 0:
            raise ValueError(f"Array value for variable '{variable_name}' not found")

        in_string = False
        escape = False
        quote_char = ""
        depth = 0
        array_end = -1

        for idx in range(array_start, len(content)):
            char = content[idx]

            if in_string:
                if escape:
                    escape = False
                elif char == "\\":
                    escape = True
                elif char == quote_char:
                    in_string = False
                continue

            if char in {'"', "'"}:
                in_string = True
                quote_char = char
                continue

            if char == "[":
                depth += 1
            elif char == "]":
                depth -= 1
                if depth == 0:
                    array_end = idx
                    break

        if array_end < 0:
            raise ValueError(f"Could not find closing bracket for '{variable_name}' array")

        return array_start, array_end, content[array_start:array_end + 1]

    def _process_json_file(self, input_file: str, output_file: str) -> None:
        """Process JSON menu items and add is_food field."""
        try:
            with open(input_file, 'r', encoding='utf-8') as f:
                menu_items = json.load(f)
            self.logger.info(f"Loaded {len(menu_items)} items from {input_file}")
        except json.JSONDecodeError as e:
            self.logger.error(f"Error parsing input file: {e}")
            raise

        food_count = 0
        non_food_count = 0

        for item in menu_items:
            is_food = self._is_food_item(item)
            item['is_food'] = is_food
            if is_food:
                food_count += 1
            else:
                non_food_count += 1

        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(menu_items, f, indent=2, ensure_ascii=False)

        self.logger.info(f"Marked items: {food_count} as food, {non_food_count} as non-food")
        self.logger.info(f"Successfully wrote {len(menu_items)} items to {output_file}")

    def _process_js_file(self, input_file: str, output_file: str) -> None:
        """Process JS file that contains const menus = [...]."""
        with open(input_file, 'r', encoding='utf-8') as f:
            js_content = f.read()

        js_variable_name = self._get_js_variable_name()
        start, end, menus_array_text = self._extract_js_array_block(js_content, js_variable_name)
        menus = json.loads(menus_array_text)

        food_count = 0
        non_food_count = 0
        item_count = 0

        for menu in menus:
            for item in menu.get('items', []):
                is_food = self._is_food_item(item)
                item['is_food'] = is_food
                item_count += 1
                if is_food:
                    food_count += 1
                else:
                    non_food_count += 1

        updated_menus_text = json.dumps(menus, indent=2, ensure_ascii=False)
        updated_content = js_content[:start] + updated_menus_text + js_content[end + 1:]

        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(updated_content)

        self.logger.info(
            f"Processed JS menus: {item_count} items; {food_count} food, {non_food_count} non-food"
        )
        self.logger.info(f"Successfully wrote updated JS file to {output_file}")

    def process_menu_items(self, input_file_override: str | None = None, output_file_override: str | None = None) -> None:
        """Process menu items and add is_food field."""
        self.logger.info("Starting food item marking process")
        
        # Load food flag reference
        self._load_food_flag_reference()
        
        # Load input file
        input_file = (
            input_file_override
            or self.config.get('default_input_file')
            or self.config['input_file']
        )
        if not os.path.exists(input_file):
            self.logger.error(f"Input file not found: {input_file}")
            raise FileNotFoundError(f"Input file not found: {input_file}")
        
        # Write output file
        if output_file_override:
            output_file = Path(output_file_override)
        else:
            # For JS inputs, output behavior can be controlled by config.
            if str(input_file).lower().endswith('.js'):
                output_mode = str(self.config.get('default_output_mode', 'in_place')).lower()
                if output_mode == 'config_output':
                    output_dir = Path(self.config['output_dir'])
                    output_dir.mkdir(parents=True, exist_ok=True)
                    output_file = output_dir / self.config['output_file']
                else:
                    output_file = Path(input_file)
            else:
                output_dir = Path(self.config['output_dir'])
                output_dir.mkdir(parents=True, exist_ok=True)
                output_file = output_dir / self.config['output_file']

        output_file.parent.mkdir(parents=True, exist_ok=True)

        if str(output_file) == str(input_file):
            self.logger.info(f"No output file provided; updating input file in place: {input_file}")

        try:
            if str(input_file).lower().endswith('.js'):
                self._process_js_file(input_file, str(output_file))
            else:
                self._process_json_file(input_file, str(output_file))
        except Exception as e:
            self.logger.error(f"Error writing output file: {e}")
            raise
        
        self.logger.info("Food item marking process completed successfully")


def main():
    """Main entry point"""
    config_file = "backend/config/mark_food_items_config.json"
    parser = argparse.ArgumentParser(description="Mark menu entries as food or non-food.")
    parser.add_argument(
        "--input-file",
        "-i",
        help="Input file path. Supports JSON arrays or JS files containing const menus = [...].",
    )
    parser.add_argument(
        "--output-file",
        "-o",
        help="Output file path. If omitted, config default output behavior is used.",
    )
    args = parser.parse_args()
    
    try:
        marker = FoodItemMarker(config_file)
        marker.process_menu_items(args.input_file, args.output_file)
    except Exception as e:
        logging.getLogger(__name__).error(f"Error: {e}")
        exit(1)


if __name__ == "__main__":
    main()
