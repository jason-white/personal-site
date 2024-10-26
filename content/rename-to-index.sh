#!/bin/zsh

# Navigate to the root directory (update this if necessary)
cd journal

# Loop through each markdown file in subdirectories of 'journal'
find . -type f -name "*.md" | while read -r file; do
  # Add a missing quote at the beginning of the image property value if needed
  sed -i '' -E 's|^(image: )([^"])|\1"\2|' "$file"
done

