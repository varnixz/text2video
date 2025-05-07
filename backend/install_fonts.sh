#!/bin/bash

# Create a local fonts directory
mkdir -p ~/.fonts

# Download Arial font (example uses Liberation Sans as a free alternative)
wget -q https://github.com/liberationfonts/liberation-fonts/files/6418984/liberation-fonts-ttf-2.1.4.tar.gz
tar -xf liberation-fonts-ttf-2.1.4.tar.gz
cp liberation-fonts-ttf-2.1.4/*.ttf ~/.fonts/

# Refresh font cache
fc-cache -f -v

# Cleanup
rm -rf liberation-fonts-ttf-2.1.4*

echo "Fonts installed successfully!"