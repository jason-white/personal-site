#!/bin/zsh

# Loop through each folder in the current directory
for folder in */; do
  # Extract the folder name, removing the trailing slash
  folder_name="${folder%/}"

  # Use a regex to match the date and get the title part of the folder name
  if [[ $folder_name =~ ^[0-9]{4}-[0-9]{2}-[0-9]{2}_(.*)$ ]]; then
    # Capture the title part after the date
    title="${match[1]}"

    # Define the original and new file paths
    original_file="${folder}index.md"
    new_file="${folder}${title}.md"

    # Check if index.md exists and make the copy
    if [[ -f $original_file ]]; then
      cp "$original_file" "$new_file"
      echo "Created ${new_file} from ${original_file}"
    else
      echo "No index.md found in ${folder}"
    fi
  else
    echo "Skipping folder ${folder_name} (does not match expected pattern)"
  fi
done
