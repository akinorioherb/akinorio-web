#!/bin/zsh
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
nvm use 20 --silent
cd /Users/ichinoseshougo/claude/akinorio-marketing-hq/akinorio-web
exec npm run dev
