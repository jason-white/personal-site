#!/bin/zsh

# Loop through each folder in the current directory
for folder in */; do
  # Define the path to the index.md file
  index_file="${folder}index.md"

  # Check if index.md exists and delete it
  if [[ -f $index_file ]]; then
    rm "$index_file"
    echo "Removed ${index_file}"
  else
    echo "No index.md found in ${folder}"
  fi
done
