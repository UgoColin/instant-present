#!/usr/bin/env bash

set -euo pipefail

APP_ROOT="/var/www/instant-present"
APP_DIR="$APP_ROOT/app"
SHARED_DIR="$APP_ROOT/shared"
BACKUP_DIR="$SHARED_DIR/backups"
MEDIA_DIR="$SHARED_DIR/media"
ENV_FILE="$SHARED_DIR/.env"

mkdir -p "$APP_DIR" "$MEDIA_DIR" "$BACKUP_DIR"

if [ ! -f "$ENV_FILE" ]; then
  echo "Missing required environment file: $ENV_FILE" >&2
  exit 1
fi

ln -sfn "$ENV_FILE" "$APP_DIR/.env"
ln -sfn "$MEDIA_DIR" "$APP_DIR/media"

cd "$APP_DIR"

npm ci --include=dev
npx pm2 stop instant-present || true
npm run ensure:globals
npm run generate:importmap
rm -rf .next
npm run build
npx pm2 startOrReload ecosystem.config.cjs --env production
npx pm2 save
