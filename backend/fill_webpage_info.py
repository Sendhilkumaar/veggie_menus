#!/usr/bin/env python3
"""fill_webpage_info.py

Read restaurant CSV and fill missing website field via online search.
"""

import csv
import time
import re
import urllib.parse
import urllib.request
import json
import logging
import argparse
from html.parser import HTMLParser
from pathlib import Path


CONFIG_FILE = Path(__file__).resolve().parent / "config" / "fill_webpage_info_config.json"

if not CONFIG_FILE.exists():
    raise FileNotFoundError(f"Config file not found: {CONFIG_FILE}")

with open(CONFIG_FILE, "r", encoding="utf-8") as f:
    CONFIG = json.load(f)

logger = logging.getLogger(__name__)


def _get_config(key, default=None):
    return CONFIG.get(key, default)


REQUEST_HEADERS = _get_config(
    "request_headers",
    {
        "User-Agent": (
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
            "(KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36"
        ),
        "Accept-Language": "en-US,en;q=0.9",
    },
)

SEARCH_ENGINE_HOSTS = {
    "google.com",
    "www.google.com",
    "bing.com",
    "www.bing.com",
    "duckduckgo.com",
    "www.duckduckgo.com",
}

DIRECTORY_HOSTS = {
    "yelp.com",
    "www.yelp.com",
    "tripadvisor.com",
    "www.tripadvisor.com",
    "doordash.com",
    "www.doordash.com",
    "ubereats.com",
    "www.ubereats.com",
    "grubhub.com",
    "www.grubhub.com",
    "facebook.com",
    "www.facebook.com",
    "instagram.com",
    "www.instagram.com",
}


class _HrefExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []

    def handle_starttag(self, tag, attrs):
        if tag != "a":
            return
        attr_map = dict(attrs)
        href = attr_map.get("href")
        if href:
            self.links.append(href)


def _normalize_csv_key(value):
    if value is None:
        return ""
    return value.replace("\ufeff", "").strip()


def _http_get(url, headers=None, timeout=None):
    if timeout is None:
        timeout = _get_config("request_timeout_seconds", 30)
    req = urllib.request.Request(url, headers=headers or {})
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        return resp.read().decode("utf-8", errors="ignore")


def _extract_links(html):
    parser = _HrefExtractor()
    parser.feed(html)
    return parser.links


def _unwrap_result_url(candidate):
    if not candidate:
        return ""

    if candidate.startswith("//"):
        candidate = "https:" + candidate

    parsed = urllib.parse.urlparse(candidate)
    query_params = urllib.parse.parse_qs(parsed.query)
    host = parsed.netloc.lower()

    if host in {"duckduckgo.com", "www.duckduckgo.com"} and parsed.path.startswith("/l/"):
        unwrapped = query_params.get("uddg", [""])[0]
        if unwrapped:
            return urllib.parse.unquote(unwrapped)

    if host in {"google.com", "www.google.com"} and parsed.path == "/url":
        unwrapped = query_params.get("q", [""])[0]
        if unwrapped:
            return urllib.parse.unquote(unwrapped)

    return candidate


def _is_search_engine_url(url):
    if not url:
        return True

    parsed = urllib.parse.urlparse(url)
    host = parsed.netloc.lower()
    if host.startswith("www."):
        host = host[4:]
    return host in {item.removeprefix("www.") for item in SEARCH_ENGINE_HOSTS}


def _is_candidate_website(url):
    if not url:
        return False

    parsed = urllib.parse.urlparse(url)
    if parsed.scheme not in {"http", "https"}:
        return False
    if not parsed.netloc:
        return False
    if _is_search_engine_url(url):
        return False

    blocked_fragments = [
        "googleadservices.com",
        "accounts.google.com",
        "support.google.com",
        "policies.google.com",
        "/preferences",
        "/advanced_search",
        "bing.com/ck/a",
    ]
    lowered = url.lower()
    return not any(fragment in lowered for fragment in blocked_fragments)


def _normalize_text_for_match(value):
    return re.sub(r"[^a-z0-9]", "", value.lower())


def _score_candidate(url, restaurant_name):
    parsed = urllib.parse.urlparse(url)
    host = parsed.netloc.lower()
    path = parsed.path.lower()
    query = parsed.query.lower()
    normalized_name = _normalize_text_for_match(restaurant_name)
    name_tokens = [token for token in re.findall(r"[a-z0-9]+", restaurant_name.lower()) if len(token) >= 4]

    score = 0

    if host.startswith("www."):
        host = host[4:]

    if host not in DIRECTORY_HOSTS:
        score += 4
    else:
        score -= 3

    if normalized_name and normalized_name in _normalize_text_for_match(host + path):
        score += 6

    if any(token in host for token in name_tokens):
        score += 4

    if any(token in path for token in name_tokens):
        score += 2

    if path in {"/search", "/search/", "/results", "/find"}:
        score -= 6

    if "find_desc=" in query or "search" in query:
        score -= 4

    if parsed.query:
        score -= 1

    return score


def _first_search_result(url, restaurant_name):
    html = _http_get(url, headers=REQUEST_HEADERS)
    candidates = []

    for href in _extract_links(html):
        candidate = _unwrap_result_url(href)
        if _is_candidate_website(candidate):
            candidates.append(candidate)

    if not candidates:
        return ""

    ranked_candidates = sorted(
        candidates,
        key=lambda candidate: _score_candidate(candidate, restaurant_name),
        reverse=True,
    )
    return ranked_candidates[0]


def _build_search_query(name, zip_code):
    business_keyword = _get_config("business_keyword", "restaurant")
    country_keyword = _get_config("country_keyword", "US")
    parts = [name.strip(), business_keyword]
    if zip_code:
        parts.append(str(zip_code).strip())
    parts.append(country_keyword)
    return " ".join(part for part in parts if part)


def search_google_url(name, zip_code):
    query = _build_search_query(name, zip_code)
    params = {"q": query, "hl": "en"}
    url = "https://www.google.com/search?" + urllib.parse.urlencode(params)
    return _first_search_result(url, name)


def search_duckduckgo_url(name, zip_code):
    query = _build_search_query(name, zip_code)
    params = {"q": query, "kl": "us-en"}
    url = "https://html.duckduckgo.com/html/?" + urllib.parse.urlencode(params)
    return _first_search_result(url, name)


def search_bing_url(name, zip_code):
    query = _build_search_query(name, zip_code)
    params = {"q": query}
    url = "https://www.bing.com/search?" + urllib.parse.urlencode(params)
    return _first_search_result(url, name)


def resolve_website(name, zip_code, throttle_seconds=None):
    if throttle_seconds is None:
        throttle_seconds = _get_config("throttle_seconds", 2)

    search_function_map = {
        "duckduckgo": search_duckduckgo_url,
        "bing": search_bing_url,
        "google": search_google_url,
    }
    search_order = _get_config("search_order", ["duckduckgo", "bing", "google"])
    search_functions = [search_function_map[item] for item in search_order if item in search_function_map]

    if not search_functions:
        search_functions = [search_duckduckgo_url, search_bing_url, search_google_url]

    for index, search_func in enumerate(search_functions):
        try:
            site = search_func(name, zip_code)
            if site:
                logger.debug("Resolved website for '%s' via %s: %s", name, search_func.__name__, site)
                return site
        except Exception as exc:
            logger.warning("Search failed for '%s' using %s: %s", name, search_func.__name__, exc)

        if index < len(search_functions) - 1:
            time.sleep(throttle_seconds)

    return ""


def fill_websites(input_csv, output_csv=None, max_updates=None):
    if output_csv is None:
        output_csv = input_csv

    restaurants = []
    with open(input_csv, newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        input_fieldnames = [_normalize_csv_key(field) for field in (reader.fieldnames or [])]
        rows = []
        for raw_row in reader:
            normalized_row = {}
            for key, value in raw_row.items():
                normalized_row[_normalize_csv_key(key)] = value
            rows.append(normalized_row)

    # Preserve incoming schema (including uniqueId) and add expected columns if absent.
    output_fieldnames = list(input_fieldnames)
    for row in rows:
        for key in row.keys():
            if key and key not in output_fieldnames:
                output_fieldnames.append(key)
    for required_field in ["website", "zip_code"]:
        if required_field not in output_fieldnames:
            output_fieldnames.append(required_field)

    updated = 0
    total_missing = sum(1 for r in rows if not r.get("website"))

    for idx, row in enumerate(rows, 1):
        if row.get("website"):
            restaurants.append(row)
            continue

        if max_updates is not None and updated >= max_updates:
            restaurants.append(row)
            continue

        name = row.get("name", "").strip()
        address = row.get("address", "").strip() if row.get("address") else ""
        zip_code = (row.get("zip_code") or "").strip()

        if not zip_code and address:
            # try to find 5-digit ZIP in address
            m = re.search(r"\b\d{5}\b", address)
            if m:
                zip_code = m.group(0)

        if not zip_code and address:
            # fallback to last comma-separated token
            if "," in address:
                zip_code = address.split(",")[-1].strip()

        if not name:
            restaurants.append(row)
            continue

        logger.info("[%d/%d] Searching website for: %s (ZIP: %s)", idx, len(rows), name, zip_code)
        site = resolve_website(name, zip_code)

        if site:
            row["website"] = site
            updated += 1
            logger.info("Found website for '%s': %s", name, site)
        else:
            logger.info("No website found for '%s'", name)

        row["zip_code"] = zip_code
        # Modest delay between rows to reduce request pressure on search engines.
        time.sleep(_get_config("row_delay_seconds", 1))
        restaurants.append(row)

    with open(output_csv, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=output_fieldnames)
        writer.writeheader()
        writer.writerows(restaurants)

    return updated, total_missing


def main():
    logging_config = _get_config("logging", {})
    level = getattr(logging, logging_config.get("level", "INFO").upper(), logging.INFO)
    fmt = logging_config.get("format", "%(asctime)s - %(name)s - %(levelname)s - %(message)s")

    log_dir_path = Path(_get_config("log_dir", "backend/logs"))
    log_dir_path.mkdir(parents=True, exist_ok=True)
    log_file_path = log_dir_path / _get_config("log_file", "fill_webpage_info.log")

    logging.basicConfig(level=level, format=fmt)
    file_handler = logging.FileHandler(log_file_path, encoding="utf-8")
    file_handler.setLevel(level)
    file_handler.setFormatter(logging.Formatter(fmt))
    logging.getLogger().addHandler(file_handler)

    parser = argparse.ArgumentParser(description="Fill missing website URLs in restaurant CSV using search.")
    parser.add_argument("input_csv", nargs="?", default=_get_config("input_file"), help="Input CSV file path")
    parser.add_argument("--output", "-o", help="Output CSV file path (default overrides input)")
    parser.add_argument("--max", type=int, default=None, help="Max missing websites to fill")
    args = parser.parse_args()

    if not args.input_csv:
        raise ValueError("Input CSV is required. Pass it as an argument or set 'input_file' in config.")

    out_file = args.output if args.output else args.input_csv
    updated, missing = fill_websites(args.input_csv, out_file, max_updates=args.max)
    logger.info("Updated %d of %d missing website entries. Output: %s", updated, missing, out_file)


if __name__ == "__main__":
    main()
