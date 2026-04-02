#!/usr/bin/env python3
"""list_restaurants.py

CLI: input ZIP code and fetch restaurants via OpenStreetMap (Nominatim + Overpass API).
"""

import sys
import argparse
import csv
import urllib.parse
import urllib.request
import json
import logging
from pathlib import Path

CONFIG_FILE = Path(__file__).resolve().parent / "config" / "list_restaurants_config.json"

if not CONFIG_FILE.exists():
    raise FileNotFoundError(f"Config file not found: {CONFIG_FILE}")

with open(CONFIG_FILE, "r", encoding="utf-8") as f:
    CONFIG = json.load(f)

logger = logging.getLogger(__name__)


def _get_config(key, default=None):
    return CONFIG.get(key, default)


def geocode_zip(zip_code: str, country_code: str | None = None):
    if country_code is None:
        country_code = _get_config("default_country", "us")
    cleaned = zip_code.strip()
    if not cleaned:
        raise ValueError("ZIP code cannot be empty")

    params = {
        "postalcode": cleaned,
        "countrycodes": country_code,
        "format": "json",
        "limit": 1,
        "addressdetails": 1,
    }
    nominatim_url = _get_config("nominatim_url")
    if not nominatim_url:
        raise RuntimeError("Missing nominatim_url in config")

    url = nominatim_url + "?" + urllib.parse.urlencode(params)

    user_agent = _get_config("user_agent", "veggie_menus/1.0")
    timeout = _get_config("geocode_timeout", 30)

    req = urllib.request.Request(url, headers={"User-Agent": user_agent})
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        text = resp.read().decode("utf-8")
        places = json.loads(text)

    if not places:
        raise LookupError(f"Could not geocode ZIP code {cleaned}")

    place = places[0]
    if "boundingbox" not in place or len(place["boundingbox"]) != 4:
        raise LookupError("No bounding box returned from geocoding")

    south, north, west, east = map(float, place["boundingbox"])
    return south, west, north, east


def format_address(tags: dict) -> str:
    components = []
    for key in ["addr:housenumber", "addr:street", "addr:city", "addr:state", "addr:postcode", "addr:country"]:
        value = tags.get(key)
        if value:
            components.append(value)
    return ", ".join(components)


def extract_restaurant_info(el: dict) -> dict | None:
    tags = el.get("tags") or {}
    name = tags.get("name")
    if not name:
        return None

    address = format_address(tags)
    website = tags.get("website") or tags.get("contact:website") or tags.get("url") or ""

    return {
        "name": name,
        "address": address,
        "website": website,
        "cuisine": tags.get("cuisine", ""),
    }


def query_restaurants(bbox):
    south, west, north, east = bbox
    overpass_timeout_sec = _get_config("overpass_timeout", 60)
    overpass_query_timeout = _get_config("overpass_timeout", 30)

    overpass_query = (
        f"[out:json][timeout:{overpass_query_timeout}];"
        "(\n"
        f"  node[\"amenity\"=\"restaurant\"]({south},{west},{north},{east});\n"
        f"  way[\"amenity\"=\"restaurant\"]({south},{west},{north},{east});\n"
        f"  relation[\"amenity\"=\"restaurant\"]({south},{west},{north},{east});\n"
        ");\n"
        "out center tags;"
    )

    data = urllib.parse.urlencode({"data": overpass_query}).encode("utf-8")
    overpass_url = _get_config("overpass_url")
    if not overpass_url:
        raise RuntimeError("Missing overpass_url in config")

    user_agent = _get_config("user_agent", "veggie_menus/1.0")
    req = urllib.request.Request(overpass_url, data=data, headers={"User-Agent": user_agent})

    max_retries = _get_config("overpass_max_retries", 3)
    delay_seconds = _get_config("overpass_retry_delay_seconds", 5)
    last_error = None
    for attempt in range(1, max_retries + 1):
        try:
            with urllib.request.urlopen(req, timeout=overpass_timeout_sec) as resp:
                text = resp.read().decode("utf-8")
                result = json.loads(text)
            break
        except urllib.error.HTTPError as e:
            last_error = e
            logger.warning("Overpass HTTP error (attempt %d/%d): %s %s", attempt, max_retries, e.code, e.reason)
        except urllib.error.URLError as e:
            last_error = e
            logger.warning("Overpass URL error (attempt %d/%d): %s", attempt, max_retries, e.reason)

        if attempt < max_retries:
            import time
            time.sleep(delay_seconds)
    else:
        raise RuntimeError(f"Overpass query failed after {max_retries} attempts: {last_error}")

    restaurants = []
    if "elements" in result:
        for el in result["elements"]:
            info = extract_restaurant_info(el)
            if info is not None:
                restaurants.append(info)

    # dedupe by name + address
    unique = {}
    for r in restaurants:
        key = (r["name"].strip().lower(), r["address"].strip().lower())
        if key not in unique:
            unique[key] = r

    sorted_results = sorted(unique.values(), key=lambda r: r["name"].lower())
    return sorted_results


def list_restaurants_by_zip(zip_code: str):
    bbox = geocode_zip(zip_code)
    return query_restaurants(bbox)


def write_restaurants_to_csv(restaurants, csv_path, requested_zip=None):
    fieldnames = _get_config("csv_fieldnames", ["uniqueId", "name", "address", "cuisine", "website", "zip_code"])
    csv_file = Path(csv_path)

    start_unique_id = 1
    write_header = True
    existing_restaurant_keys = set()

    if csv_file.exists() and csv_file.stat().st_size > 0:
        write_header = False
        with open(csv_file, "r", encoding="utf-8", newline="") as existing_file:
            reader = csv.DictReader(existing_file)
            max_existing_unique_id = 0
            for row in reader:
                value = row.get("uniqueId", "")
                try:
                    max_existing_unique_id = max(max_existing_unique_id, int(value))
                except (TypeError, ValueError):
                    continue
                key = (
                    (row.get("name") or "").strip().lower(),
                    (row.get("address") or "").strip().lower(),
                )
                existing_restaurant_keys.add(key)
            start_unique_id = max_existing_unique_id + 1

    new_restaurants = []
    for r in restaurants:
        key = (
            (r.get("name") or "").strip().lower(),
            (r.get("address") or "").strip().lower(),
        )
        if key in existing_restaurant_keys:
            continue
        new_restaurants.append(r)
        existing_restaurant_keys.add(key)

    if not new_restaurants:
        logger.info("No new restaurants to write for ZIP %s; all fetched restaurants already exist in %s", requested_zip or "", csv_file)
        return 0

    logger.info(
        "Writing CSV in %s mode at %s; assigning uniqueId starting from %d for %d new records (skipped %d duplicates)",
        "append" if not write_header else "create",
        csv_file,
        start_unique_id,
        len(new_restaurants),
        len(restaurants) - len(new_restaurants),
    )

    with open(csv_file, "a", encoding="utf-8", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        if write_header:
            writer.writeheader()
        for unique_id, r in enumerate(new_restaurants, start=start_unique_id):
            row = {
                "uniqueId": unique_id,
                "name": r.get("name", ""),
                "address": r.get("address", ""),
                "cuisine": r.get("cuisine", ""),
                "website": r.get("website", ""),
                "zip_code": requested_zip or "",
            }
            writer.writerow(row)
    return len(new_restaurants)


def main():
    logging_config = _get_config("logging", {})
    level = getattr(logging, logging_config.get("level", "INFO").upper(), logging.INFO)
    fmt = logging_config.get("format", "%(asctime)s %(levelname)s %(message)s")

    log_dir = _get_config("log_dir", "logs")
    log_dir_path = Path(log_dir)
    log_dir_path.mkdir(parents=True, exist_ok=True)

    log_file_path = log_dir_path / f"{Path(__file__).stem}.log"

    logging.basicConfig(level=level, format=fmt)
    file_handler = logging.FileHandler(log_file_path, encoding="utf-8")
    file_handler.setLevel(level)
    file_handler.setFormatter(logging.Formatter(fmt))
    logging.getLogger().addHandler(file_handler)

    parser = argparse.ArgumentParser(description="Fetch restaurants by ZIP code using OpenStreetMap")
    parser.add_argument("zip_code", nargs="?", help="U.S. ZIP code")
    parser.add_argument("--csv", "-c", dest="csv_path", help="Path to output CSV file")
    parser.add_argument("--country", default="us", help="Country code for geocoding (default: us)")
    args = parser.parse_args()

    output_dir = _get_config("output_dir", "output")
    output_dir_path = Path(output_dir)
    output_dir_path.mkdir(parents=True, exist_ok=True)

    if args.zip_code:
        zip_code = args.zip_code
    else:
        zip_code = input("Enter ZIP code: ").strip()

    try:
        restaurants = list_restaurants_by_zip(zip_code)
    except ValueError as e:
        logger.error("Error: %s", e)
        sys.exit(1)

    if restaurants:
        logger.info("Restaurants in ZIP %s:", zip_code)
        for i, r in enumerate(restaurants, start=1):
            logger.info("%d. %s", i, r['name'])
            if r.get("cuisine"):
                logger.info("   cuisine: %s", r['cuisine'])
            if r.get("address"):
                logger.info("   address: %s", r['address'])
            if r.get("website"):
                logger.info("   website: %s", r['website'])

        csv_path = args.csv_path
        if not csv_path:
            csv_path = str(output_dir_path / f"full_list_of_restaurants.csv")

        try:
            written_count = write_restaurants_to_csv(restaurants, csv_path, requested_zip=zip_code)
            logger.info("Saved %d new restaurants to CSV: %s", written_count, csv_path)
        except Exception as e:
            logger.error("Failed to write CSV: %s", e)
    else:
        logger.info("No restaurants found for ZIP code %s.", zip_code)


if __name__ == "__main__":
    main()
