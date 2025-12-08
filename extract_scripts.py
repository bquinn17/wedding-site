#!/usr/bin/env python3
"""
Script to extract inline JavaScript from HTML file into separate files.
Processes all top-level <script> tags without src attributes.
"""

import os
from pathlib import Path
from bs4 import BeautifulSoup


def extract_inline_scripts(html_file, output_dir='assets/js/lib'):
    """
    Extract inline scripts from HTML file to separate JS files.

    Args:
        html_file: Path to the HTML file to process
        output_dir: Directory where JS files will be saved
    """
    # Read the HTML file
    print(f"Reading {html_file}...")
    with open(html_file, 'r', encoding='utf-8') as f:
        html_content = f.read()

    # Parse with BeautifulSoup
    print("Parsing HTML...")
    soup = BeautifulSoup(html_content, 'html.parser')

    # Find all script tags at the top level (direct children of body/head)
    # You can adjust this to get all scripts by using: soup.find_all('script')
    top_level_scripts = []

    # Get scripts from head
    if soup.head:
        top_level_scripts.extend(soup.head.find_all('script', recursive=False))

    # Get scripts from body
    if soup.body:
        top_level_scripts.extend(soup.body.find_all('script', recursive=False))

    print(f"Found {len(top_level_scripts)} top-level script tags")

    # Filter for inline scripts (no src attribute)
    inline_scripts = [script for script in top_level_scripts
                     if not script.get('src')]

    print(f"Found {len(inline_scripts)} inline script tags (without src attribute)")

    if not inline_scripts:
        print("No inline scripts to extract.")
        return

    # Create output directory
    output_path = Path(output_dir)
    output_path.mkdir(parents=True, exist_ok=True)
    print(f"Created directory: {output_path}")

    # Extract each inline script
    extracted_files = []
    i = 1
    for script in inline_scripts:
        script_content = script.string or ''

        # Skip empty scripts
        if not script_content.strip():
            print(f"  Skipping empty script #{i}")
            continue

        # Generate filename
        filename = f"script_{i}.js"
        file_path = output_path / filename
        relative_path = f"{output_dir}/{filename}"

        # Check if file already exists (allows script to be resumed)
        while file_path.exists():
            print(f"  Skipping script #{i} -> {file_path} (already exists)")
            i += 1
            filename = f"script_{i}.js"
            file_path = output_path / filename
            relative_path = f"{output_dir}/{filename}"

        # Write the script content to file
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(script_content)

        print(f"  Extracted script #{i} -> {file_path} ({len(script_content)} bytes)")
        extracted_files.append(str(file_path))

        # Replace inline script with src reference
        script.string = ''  # Clear the inline content
        script['src'] = relative_path  # Add src attribute
        print(f"  Updated HTML tag to reference {relative_path}")

        i += 1

    # Write the modified HTML back to file
    if extracted_files:
        print(f"\nWriting modified HTML back to {html_file}...")
        with open(html_file, 'w', encoding='utf-8') as f:
            f.write(str(soup))
        print("HTML file updated with script src references")

    print(f"\nSuccessfully extracted {len(extracted_files)} scripts to {output_dir}/")
    print("\nExtracted files:")
    for file in extracted_files:
        print(f"  - {file}")


if __name__ == '__main__':
    # Configuration
    HTML_FILE = 'wedding_invite.html'
    OUTPUT_DIR = 'assets/js/lib'

    # Check if HTML file exists
    if not os.path.exists(HTML_FILE):
        print(f"Error: {HTML_FILE} not found in current directory")
        exit(1)

    # Extract scripts
    extract_inline_scripts(HTML_FILE, OUTPUT_DIR)
    print("\nDone!")