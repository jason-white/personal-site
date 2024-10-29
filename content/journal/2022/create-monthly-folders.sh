#!/bin/zsh

# Loop from 1 to 12 to create folders named 01 to 12
for month in {01..12}; do
  mkdir -p "$month"
  echo "Created folder: $month"
done

echo "All monthly folders created."
