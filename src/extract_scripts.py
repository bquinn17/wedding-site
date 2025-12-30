#!/usr/bin/env python3
"""
Script to extract inline JavaScript and CSS from HTML file into separate files.
Processes all <script> and <style> tags throughout the document without src/href attributes.
"""

import os
from pathlib import Path
from bs4 import BeautifulSoup


def extract_inline_scripts(html_file, js_output_dir='assets/js/lib', css_output_dir='assets/css/lib'):
    """
    Extract inline scripts and styles from HTML file to separate JS and CSS files.

    Args:
        html_file: Path to the HTML file to process
        js_output_dir: Directory where JS files will be saved
        css_output_dir: Directory where CSS files will be saved
    """
    # Read the HTML file
    print(f"Reading {html_file}...")
    with open(html_file, 'r', encoding='utf-8') as f:
        html_content = f.read()

    # Parse with BeautifulSoup
    print("Parsing HTML...")
    soup = BeautifulSoup(html_content, 'html.parser')

    # Find all script tags throughout the document
    all_scripts = soup.find_all('script')
    print(f"Found {len(all_scripts)} script tags")

    # Filter for inline scripts (no src attribute)
    inline_scripts = [script for script in all_scripts
                     if not script.get('src')]

    print(f"Found {len(inline_scripts)} inline script tags (without src attribute)")

    # Find all style tags throughout the document
    all_styles = soup.find_all('style')
    print(f"Found {len(all_styles)} style tags")

    all_extracted_files = []
    html_modified = False

    # Process inline scripts
    if inline_scripts:
        # Create output directory
        js_output_path = Path(js_output_dir)
        js_output_path.mkdir(parents=True, exist_ok=True)
        print(f"\nCreated directory: {js_output_path}")

        # Extract each inline script
        print("\nProcessing inline scripts...")
        i = 1
        for script in inline_scripts:
            # Get all text content from the script tag
            script_content = script.get_text()

            # Skip empty scripts
            if not script_content.strip():
                print(f"  Skipping empty script #{i}")
                continue

            # Generate filename
            filename = f"script_{i}.js"
            file_path = js_output_path / filename
            relative_path = f"{js_output_dir}/{filename}"

            # Check if file already exists (allows script to be resumed)
            while file_path.exists():
                print(f"  Skipping script #{i} -> {file_path} (already exists)")
                i += 1
                filename = f"script_{i}.js"
                file_path = js_output_path / filename
                relative_path = f"{js_output_dir}/{filename}"

            # Write the script content to file
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(script_content)

            print(f"  Extracted script #{i} -> {file_path} ({len(script_content)} bytes)")
            all_extracted_files.append(str(file_path))

            # Replace inline script with src reference
            script.clear()  # Clear all inline content
            script['src'] = relative_path  # Add src attribute
            print(f"  Updated HTML tag to reference {relative_path}")

            html_modified = True
            i += 1

    # Process inline styles
    if all_styles:
        # Create output directory
        css_output_path = Path(css_output_dir)
        css_output_path.mkdir(parents=True, exist_ok=True)
        print(f"\nCreated directory: {css_output_path}")

        # Extract each inline style
        print("\nProcessing inline styles...")
        i = 1
        for style in all_styles:
            # Get all text content from the style tag
            style_content = style.get_text()

            # Skip empty styles
            if not style_content.strip():
                print(f"  Skipping empty style #{i}")
                continue

            # Generate filename
            filename = f"style_{i}.css"
            file_path = css_output_path / filename
            relative_path = f"{css_output_dir}/{filename}"

            # Check if file already exists (allows script to be resumed)
            while file_path.exists():
                print(f"  Skipping style #{i} -> {file_path} (already exists)")
                i += 1
                filename = f"style_{i}.css"
                file_path = css_output_path / filename
                relative_path = f"{css_output_dir}/{filename}"

            # Write the style content to file
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(style_content)

            print(f"  Extracted style #{i} -> {file_path} ({len(style_content)} bytes)")
            all_extracted_files.append(str(file_path))

            # Replace inline style with link reference
            link = soup.new_tag('link', rel='stylesheet', href=relative_path)
            style.replace_with(link)
            print(f"  Replaced style tag with link to {relative_path}")

            html_modified = True
            i += 1

    # Write the modified HTML back to file
    if html_modified:
        print(f"\nWriting modified HTML back to {html_file}...")
        with open(html_file, 'w', encoding='utf-8') as f:
            f.write(str(soup))
        print("HTML file updated with external references")

    if all_extracted_files:
        print(f"\nSuccessfully extracted {len(all_extracted_files)} files")
        print("\nExtracted files:")
        for file in all_extracted_files:
            print(f"  - {file}")
    else:
        print("\nNo inline scripts or styles to extract.")


if __name__ == '__main__':
    # Configuration
    HTML_FILE = 'wedding_invite.html'
    JS_OUTPUT_DIR = '../assets/js/lib'
    CSS_OUTPUT_DIR = '../assets/css/lib'

    # Check if HTML file exists
    if not os.path.exists(HTML_FILE):
        print(f"Error: {HTML_FILE} not found in current directory")
        exit(1)

    # Extract scripts and styles
    extract_inline_scripts(HTML_FILE, JS_OUTPUT_DIR, CSS_OUTPUT_DIR)
    print("\nDone!")