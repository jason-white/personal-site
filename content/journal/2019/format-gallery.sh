#!/bin/zsh

# Loop through all folders in the current directory
for dir in */; do
  # Find all markdown files in each folder
  find "$dir" -type f -name "*.md" | while IFS= read -r file; do
    echo "Processing $file..."

    # Use awk to process the file line by line
    awk '
      # Define regex for lines to delete and format
      /^images:$/ { next }
      /^image[0-9]+:$/ { next }
      /^width:$/ { next }
      /^height:$/ { next }

      # Match lines that start with "image:" and format them
      /^image: / {
        # Capture the image file name (assuming it comes after "image: ")
        match($0, /^image: *"?([^"]+)"?/, arr)
        if (arr[1] != "") {
          print "- image: " arr[1]
        }
        next
      }

      # For all other lines, print as-is
      { print }
    ' "$file" > "$file.tmp" && mv "$file.tmp" "$file"

  done
done
