#!/usr/bin/env bash
# Install Microsoft Core Fonts (Arial)
sudo apt-get update -y
sudo apt-get install -y ttf-mscorefonts-installer
sudo fc-cache -f -v