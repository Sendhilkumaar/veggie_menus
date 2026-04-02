import csv
import json
import logging
from pathlib import Path
import requests
from urllib.parse import urljoin, urlparse
from bs4 import BeautifulSoup

CONFIG_FILE = Path(__file__).resolve().parent / "config" / "get_menu_pages_config.json"
if not CONFIG_FILE.exists():
    raise FileNotFoundError(f"Config file not found: {CONFIG_FILE}")

with open(CONFIG_FILE, "r", encoding="utf-8") as f:
    CONFIG = json.load(f)


def _get_config(key, default=None):
    return CONFIG.get(key, default)

log_dir = Path(_get_config("log_dir", "backend/logs"))
log_dir.mkdir(parents=True, exist_ok=True)

log_file = log_dir / "get_menu_pages.log"

logging.basicConfig(
    level=getattr(logging, _get_config("logging", {}).get("level", "INFO"), logging.INFO),
    format=_get_config("logging", {}).get("format", "%(asctime)s %(levelname)s %(message)s"),
    handlers=[
        logging.FileHandler(log_file, encoding="utf-8"),
        logging.StreamHandler()
    ]
)

logger = logging.getLogger(__name__)


def get_menu_pages(input_file=None):
    if not input_file:
        input_file = _get_config("input_file")
    if not input_file:
        raise ValueError("input_file must be provided either via args or config")

    """
    Read input file, extract website URLs, find pages with 'menu' in the name,
    and list original and menu page URLs.

    Supports CSV input (with a header containing 'website') or JSON list of dicts.
    """
    results = []
    
    if input_file.lower().endswith('.csv'):
        with open(input_file, 'r', encoding='utf-8', newline='') as f:
            reader = csv.DictReader(f)
            for item in reader:
                if not item.get('website'):
                    continue
                results.extend(_find_menu_pages_for_url(item['website']))
        return results

    with open(input_file, 'r', encoding='utf-8') as f:
        data = json.load(f)

    for item in data:
        if 'website' not in item:
            continue
        results.extend(_find_menu_pages_for_url(item['website']))

    return results


def _find_menu_pages_for_url(original_url):
    results = []
    try:
        response = requests.get(original_url, timeout=5)
        response.raise_for_status()
        soup = BeautifulSoup(response.content, 'html.parser')

        for link in soup.find_all('a', href=True):
            href = link['href']
            full_url = urljoin(original_url, href)
            if 'menu' in full_url.lower():
                results.append({'original_url': original_url, 'menu_url': full_url})

    except Exception as e:
        logger.error("Error processing %s: %s", original_url, e)

    return results

def write_menu_pages_to_csv(menu_pages, output_file):
    """Write a list of menu page dicts to a CSV file."""
    import csv

    fieldnames = ["original_url", "menu_url"]
    seen = set()
    unique_results = []

    for item in menu_pages:
        key = (item.get("original_url", ""), item.get("menu_url", ""))
        if key in seen:
            continue
        seen.add(key)
        unique_results.append(item)

    with open(output_file, "w", encoding="utf-8", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        for item in unique_results:
            writer.writerow({
                "original_url": item.get("original_url", ""),
                "menu_url": item.get("menu_url", ""),
            })


if __name__ == "__main__":
    cfg_output_dir = Path(_get_config("output_dir", "backend/file_storage"))
    cfg_output_dir.mkdir(parents=True, exist_ok=True)

    input_file = _get_config("input_file")
    output_name = _get_config("output_file", "menu_pages.csv")
    output_file = cfg_output_dir / output_name

    menu_pages = get_menu_pages(input_file)
    write_menu_pages_to_csv(menu_pages, output_file)

    logger.info("Wrote %d menu link(s) to %s", len(menu_pages), output_file)
    for item in menu_pages:
        logger.info("Original: %s", item['original_url'])
        logger.info("Menu URL: %s", item['menu_url'])

