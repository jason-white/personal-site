#!/bin/zsh

# Base directory containing the markdown files
journal_dir="./journal"

# Find and iterate over all markdown files (*.md) within the journal folder and its subdirectories
find $journal_dir -type f -name "*.md" | while read file; do
  # Process the 'img' URL: remove the Cloudinary base URL and version number, leaving only the directory and filename
  sed -i '' -E 's#(img: "https://res\.cloudinary\.com/dpmsynxig/image/upload/[^/]+/v[0-9]+)(.*")#image: "\2#g' "$file"

  # Remove the 'thumbnail' line entirely
  # sed -i '' '/thumbnail:/d' "$file"

  echo "Processed: $file"
done

echo "All markdown files have been processed."
