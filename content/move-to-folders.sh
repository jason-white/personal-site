#!/bin/zsh

# Specify the root directory containing the subdirectories (e.g., "posts")
root_dir="posts"

# Loop through each markdown file in each subdirectory of the root directory
find "$root_dir" -type f -name "*.md" | while read -r file; do
  # Extract the directory and filename
  dir=$(dirname "$file")
  filename=$(basename "$file")

  # Check if the filename matches the date-title format
  if [[ "$filename" =~ ^([0-9]{4}-[0-9]{2}-[0-9]{2})_(.*)\.md$ ]]; then
    # Extract the date and title components
    date="${match[1]}"
    title="${match[2]}"

    # Create a subdirectory within the original directory with the date-title format
    new_dir="${dir}/${date}_${title}"
    mkdir -p "$new_dir"

    # Format the markdown file name to only have the title
    new_filename="${title}.md"

    # Move the markdown file into the new directory with the formatted name
    mv "$file" "$new_dir/$new_filename"

    echo "Moved $file to $new_dir/$new_filename"
  else
    echo "$filename does not match the date-title format."
  fi
done
