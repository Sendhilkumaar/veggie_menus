import csv
import json
import logging
from pathlib import Path
import re
import requests
from bs4 import BeautifulSoup

CONFIG_FILE = Path(__file__).resolve().parent / "config" / "get_menu_items_config.json"
if not CONFIG_FILE.exists():
    raise FileNotFoundError(f"Config file not found: {CONFIG_FILE}")

with open(CONFIG_FILE, "r", encoding="utf-8") as f:
    CONFIG = json.load(f)


def _get_config(key, default=None):
    return CONFIG.get(key, default)


def setup_logger():
    log_dir = Path(_get_config("log_dir", "backend/logs"))
    log_dir.mkdir(parents=True, exist_ok=True)

    log_file = log_dir / "get_menu_items.log"

    level_name = str(_get_config("logging", {}).get("level", "INFO")).upper()
    level = getattr(logging, level_name, logging.INFO)
    fmt = _get_config("logging", {}).get("format", "%(asctime)s %(levelname)s %(message)s")

    logger = logging.getLogger("get_menu_items")
    logger.setLevel(level)

    # avoid duplicate handlers on repeated imports or runs in same process
    if not logger.handlers:
        fh = logging.FileHandler(log_file, encoding="utf-8")
        fh.setLevel(level)
        fh.setFormatter(logging.Formatter(fmt))

        ch = logging.StreamHandler()
        ch.setLevel(level)
        ch.setFormatter(logging.Formatter(fmt))

        logger.addHandler(fh)
        logger.addHandler(ch)

    return logger


logger = setup_logger()


def load_menu_pages(csv_path):
    results = []
    csv_file = Path(csv_path)
    if not csv_file.exists():
        logger.error("Menu pages CSV not found: %s", csv_file)
        return results

    with open(csv_file, "r", encoding="utf-8", newline="") as f:
        reader = csv.DictReader(f)
        for row in reader:
            original_url = row.get("original_url")
            menu_url = row.get("menu_url")
            if not menu_url:
                continue
            results.append({"original_url": original_url, "menu_url": menu_url})

    logger.info("Loaded %d menu page rows from %s", len(results), csv_file)
    return results


def parse_menu_items_from_soup(soup):
    items = []

    # candidate menu item containers
    selectors = [
        "div.menu-item",
        "li.menu-item",
        "div.item",
        "li.item",
        "div.menu-entry",
        "li.menu-entry",
        "article.menu-item",
    ]

    elements = []
    for selector in selectors:
        elements.extend(soup.select(selector))

    if not elements:
        # fallback: any <li> having menu-specific words
        for li in soup.find_all("li"):
            text = li.get_text(" ", strip=True).lower()
            if "menu" in text or "dish" in text:
                elements.append(li)

    for el in elements:
        name = None
        description = None
        price = None

        # name heuristics
        for name_sel in ["h1", "h2", "h3", "h4", ".name", ".title", "strong"]:
            node = el.select_one(name_sel)
            if node and node.get_text(strip=True):
                name = node.get_text(strip=True)
                break

        if not name:
            text = el.get_text(" ", strip=True)
            lines = [l.strip() for l in text.split("\n") if l.strip()]
            if lines:
                name = lines[0]

        # description heuristics
        desc_node = el.select_one(".description, .desc, p")
        if desc_node:
            description = desc_node.get_text(" ", strip=True)

        # price heuristics in container or text
        text_all = el.get_text(" ", strip=True)
        price_match = re.search(r"\$\s*\d+[\.,]?\d*", text_all)
        if price_match:
            price = price_match.group(0)

        if not any([name, description, price]):
            continue

        items.append({
            "name": name or "",
            "description": description or "",
            "price": price or "",
        })

    return items


def fetch_menu_items_for_url(original_url, menu_url, timeout):
    found = []
    try:
        logger.info("Fetching menu URL: %s", menu_url)
        resp = requests.get(menu_url, timeout=timeout, headers={"User-Agent": "veggie_menus/1.0"})
        resp.raise_for_status()
        soup = BeautifulSoup(resp.content, "html.parser")
        found = parse_menu_items_from_soup(soup)
        if not found:
            logger.warning("No menu items detected for %s", menu_url)
        return [{"original_url": original_url, "menu_url": menu_url, "name": i["name"], "description": i["description"], "price": i["price"]} for i in found]

    except requests.RequestException as e:
        logger.error("Error fetching %s: %s", menu_url, e)
        return []
    except Exception as e:
        logger.exception("Unexpected error parsing %s", menu_url)
        return []


def dedupe_menu_items(items):
    seen = set()
    unique = []
    for item in items:
        key = (item.get("original_url"), item.get("menu_url"), item.get("name"), item.get("price"))
        if key in seen:
            continue
        seen.add(key)
        unique.append(item)
    return unique


def write_menu_items_to_json(menu_items, output_json):
    out_path = Path(output_json)
    out_path.parent.mkdir(parents=True, exist_ok=True)
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(menu_items, f, indent=2, ensure_ascii=False)
    logger.info("Wrote %d menu item records to %s", len(menu_items), out_path)


def main():
    csv_path = _get_config("menu_pages_csv")
    if not csv_path:
        raise ValueError("menu_pages_csv must be set in config")

    output_dir = Path(_get_config("output_dir", "backend/file_storage"))
    output_dir.mkdir(parents=True, exist_ok=True)

    output_file_name = _get_config("output_file", "08540_menu_items.json")
    output_json = output_dir / output_file_name

    timeout = _get_config("request_timeout", 10)

    menu_pages = load_menu_pages(csv_path)
    all_items = []
    for row in menu_pages:
        original_url = row.get("original_url")
        menu_url = row.get("menu_url")
        if not menu_url:
            continue
        items = fetch_menu_items_for_url(original_url, menu_url, timeout)
        all_items.extend(items)

    unique_items = dedupe_menu_items(all_items)
    write_menu_items_to_json(unique_items, output_json)


if __name__ == "__main__":
    main()
