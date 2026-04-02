"""Build a food-only menu JS database from an existing menu JS file."""

import argparse
import json
import logging
from pathlib import Path
from typing import Any, Dict, List, Tuple


class FoodMenuDbBuilder:
	"""Create db_menu_food.js by filtering menu items with is_food=true."""

	def __init__(self, config_file: str):
		self.config = self._load_config(config_file)
		self.logger = self._setup_logger()

	def _load_config(self, config_file: str) -> Dict[str, Any]:
		"""Load JSON configuration file."""
		with open(config_file, "r", encoding="utf-8") as file:
			return json.load(file)

	def _setup_logger(self) -> logging.Logger:
		"""Configure file logger for this job."""
		logger = logging.getLogger(__name__)
		logger.handlers.clear()

		log_level_name = str(self.config.get("logging", {}).get("level", "INFO"))
		log_level = getattr(logging, log_level_name.upper(), logging.INFO)
		logger.setLevel(log_level)

		log_dir = Path(self.config.get("log_dir", "backend/logs"))
		log_dir.mkdir(parents=True, exist_ok=True)

		log_file = log_dir / str(self.config.get("log_file", "load_main_db.log"))
		handler = logging.FileHandler(log_file, encoding="utf-8")
		handler.setLevel(log_level)

		log_format = self.config.get(
			"logging", {}
		).get("format", "%(asctime)s - %(name)s - %(levelname)s - %(message)s")
		handler.setFormatter(logging.Formatter(log_format))
		logger.addHandler(handler)

		return logger

	@staticmethod
	def _extract_js_array_block(content: str, variable_name: str) -> Tuple[int, int, str]:
		"""Extract the full array literal assigned to a const variable."""
		marker = f"const {variable_name}"
		marker_idx = content.find(marker)
		if marker_idx < 0:
			raise ValueError(f"Variable '{variable_name}' not found in JS file")

		equal_idx = content.find("=", marker_idx)
		if equal_idx < 0:
			raise ValueError(f"Assignment for variable '{variable_name}' not found")

		array_start = content.find("[", equal_idx)
		if array_start < 0:
			raise ValueError(f"Array for variable '{variable_name}' not found")

		in_string = False
		escape = False
		quote_char = ""
		depth = 0
		array_end = -1

		for index in range(array_start, len(content)):
			char = content[index]

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
					array_end = index
					break

		if array_end < 0:
			raise ValueError(f"Could not find closing bracket for '{variable_name}' array")

		return array_start, array_end, content[array_start : array_end + 1]

	@staticmethod
	def _is_food_true(value: Any) -> bool:
		"""Interpret truthy food flags from bool and string values."""
		if isinstance(value, bool):
			return value
		if isinstance(value, str):
			return value.strip().lower() == "true"
		return False

	def _filter_menus(
		self, menus: List[Dict[str, Any]], drop_empty: bool = False
	) -> Tuple[List[Dict[str, Any]], int, int, int, set]:
		"""Keep only menu items that are marked as food.

		Args:
			menus: Original menus list.
			drop_empty: When True, restaurants whose items are all non-food are
			            omitted from the output entirely.

		Returns:
			filtered_menus, total_items, kept_items, dropped_restaurants, dropped_names
		"""
		filtered_menus: List[Dict[str, Any]] = []
		total_items = 0
		kept_items = 0
		dropped_restaurants = 0
		dropped_names: set = set()

		for menu in menus:
			items = menu.get("items", [])
			total_items += len(items)

			filtered_items = [item for item in items if self._is_food_true(item.get("is_food"))]
			kept_items += len(filtered_items)

			if drop_empty and not filtered_items:
				dropped_restaurants += 1
				dropped_names.add(str(menu.get("name", "")))
				continue

			menu_copy = dict(menu)
			menu_copy["items"] = filtered_items
			filtered_menus.append(menu_copy)

		return filtered_menus, total_items, kept_items, dropped_restaurants, dropped_names

	def build_food_db(self, input_file_override: str | None = None, output_file_override: str | None = None) -> None:
		"""Read source JS, filter menus to food items, and write output JS."""
		input_file = Path(input_file_override or self.config["input_file"])
		output_file = Path(output_file_override or self.config["output_file"])
		restaurants_var = str(self.config.get("restaurants_variable", "restaurants"))
		menus_var = str(self.config.get("menus_variable", "menus"))

		self.logger.info("Starting food-only DB generation")
		self.logger.info("Input file: %s", input_file)
		self.logger.info("Output file: %s", output_file)

		if not input_file.exists():
			raise FileNotFoundError(f"Input file not found: {input_file}")

		js_content = input_file.read_text(encoding="utf-8")

		_, _, restaurants_array_text = self._extract_js_array_block(js_content, restaurants_var)
		_, _, menus_array_text = self._extract_js_array_block(js_content, menus_var)

		drop_empty = bool(self.config.get("drop_empty_menus", False))

		menus = json.loads(menus_array_text)
		filtered_menus, total_items, kept_items, dropped_restaurants, dropped_names = self._filter_menus(
			menus, drop_empty=drop_empty
		)

		restaurants = json.loads(restaurants_array_text)
		if drop_empty and dropped_names:
			restaurants = [r for r in restaurants if r.get("name") not in dropped_names]

		output_file.parent.mkdir(parents=True, exist_ok=True)
		output_content = (
			f"const {restaurants_var} = {json.dumps(restaurants, indent=2, ensure_ascii=False)};\n\n"
			f"const {menus_var} = {json.dumps(filtered_menus, indent=2, ensure_ascii=False)};\n"
		)
		output_file.write_text(output_content, encoding="utf-8")

		self.logger.info("Restaurants: %s kept, %s dropped (no food items)", len(restaurants), dropped_restaurants)
		self.logger.info("Total menu items: %s", total_items)
		self.logger.info("Food items kept: %s", kept_items)
		self.logger.info("Non-food items removed: %s", total_items - kept_items)
		if drop_empty:
			self.logger.info("Restaurants dropped (no food items): %s", dropped_restaurants)
		self.logger.info("Food-only DB successfully written")


def main() -> None:
	"""CLI entry point."""
	parser = argparse.ArgumentParser(
		description="Create db_menu_food.js by filtering menu items where is_food is true."
	)
	parser.add_argument(
		"--config",
		"-c",
		default="backend/config/load_main_db_config.json",
		help="Path to config JSON file.",
	)
	parser.add_argument("--input-file", "-i", help="Override input JS file path.")
	parser.add_argument("--output-file", "-o", help="Override output JS file path.")
	args = parser.parse_args()

	try:
		builder = FoodMenuDbBuilder(args.config)
		builder.build_food_db(args.input_file, args.output_file)
	except Exception as exc:
		logging.getLogger(__name__).error("Error: %s", exc)
		raise SystemExit(1) from exc


if __name__ == "__main__":
	main()
