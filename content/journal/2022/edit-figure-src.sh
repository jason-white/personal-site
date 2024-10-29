#!/bin/zsh

# Iterate through all markdown files in subdirectories of the current directory
for file in ./*/*/*.md; do
  # Check if the file exists
  if [[ -f "$file" ]]; then
    # Use sed to replace the src attribute value to keep only the filename, ensuring the closing quote is included
    sed -i '' 's/\(src="\)https:\/\/res\.cloudinary\.com\/[^\/]*\/[^"]*\/\([^\/"]*\)"/\1\2"/' "$file"
    echo "Processed: $file"
  fi
done

echo "All markdown files processed."
