#!/usr/bin/env bash

set -euo pipefail

# ------------------------------------------------------------
# Configuration: COMPLETE THESE VALUES BEFORE FIRST USE
# ------------------------------------------------------------
REMOTE_HOST="76.13.41.184"
REMOTE_PORT="22"
REMOTE_USER="deploy"
REMOTE_APP_ROOT="/var/www/instant-present"
REMOTE_PM2_APP_NAME="instant-present"

LOCAL_DB_PATH="./instant-present.db"
LOCAL_MEDIA_DIR="./media"
SYNC_MEDIA="no"

# Optional: set to "yes" if you also want to run the content/schema
# safety scripts on the server after uploading the database.
RUN_REMOTE_SYNC_STEPS="no"

# ------------------------------------------------------------
# Internal paths
# ------------------------------------------------------------
REMOTE_SHARED_DIR="$REMOTE_APP_ROOT/shared"
REMOTE_APP_DIR="$REMOTE_APP_ROOT/app"
REMOTE_DB_PATH="$REMOTE_SHARED_DIR/instant-present.db"
REMOTE_MEDIA_DIR="$REMOTE_SHARED_DIR/media"
REMOTE_BACKUP_DIR="$REMOTE_SHARED_DIR/backups"
REMOTE_TMP_DB_PATH="/tmp/instant-present.db.upload"

require_value() {
  local name="$1"
  local value="$2"

  if [[ -z "$value" || "$value" == "A_COMPLETER" ]]; then
    echo "Missing required configuration: $name" >&2
    exit 1
  fi
}

require_local_path() {
  local path="$1"
  local label="$2"

  if [[ ! -e "$path" ]]; then
    echo "Missing $label: $path" >&2
    exit 1
  fi
}

run_remote() {
  ssh -p "$REMOTE_PORT" "$REMOTE_USER@$REMOTE_HOST" "$@"
}

require_value "REMOTE_HOST" "$REMOTE_HOST"
require_value "REMOTE_PORT" "$REMOTE_PORT"
require_value "REMOTE_USER" "$REMOTE_USER"
require_value "REMOTE_APP_ROOT" "$REMOTE_APP_ROOT"
require_value "REMOTE_PM2_APP_NAME" "$REMOTE_PM2_APP_NAME"
require_local_path "$LOCAL_DB_PATH" "local database"

if [[ "$SYNC_MEDIA" == "yes" ]]; then
  require_local_path "$LOCAL_MEDIA_DIR" "local media directory"
fi

echo "==> Checking SSH access"
run_remote "echo Connected to \$(hostname)"

echo "==> Preparing remote backup directory"
run_remote "mkdir -p '$REMOTE_BACKUP_DIR' '$REMOTE_MEDIA_DIR'"

echo "==> Stopping PM2 app"
run_remote "cd '$REMOTE_APP_DIR' && npx pm2 stop '$REMOTE_PM2_APP_NAME' || true"

echo "==> Backing up production database"
run_remote "if [ -f '$REMOTE_DB_PATH' ]; then cp '$REMOTE_DB_PATH' '$REMOTE_BACKUP_DIR/instant-present.db.backup-\$(date +%Y%m%d-%H%M%S)'; fi"

echo "==> Uploading local database"
scp -P "$REMOTE_PORT" "$LOCAL_DB_PATH" "$REMOTE_USER@$REMOTE_HOST:$REMOTE_TMP_DB_PATH"

echo "==> Installing uploaded database on server"
run_remote "mv '$REMOTE_TMP_DB_PATH' '$REMOTE_DB_PATH' && ln -sfn '$REMOTE_DB_PATH' '$REMOTE_APP_DIR/instant-present.db' && chmod 664 '$REMOTE_DB_PATH'"

if [[ "$SYNC_MEDIA" == "yes" ]]; then
  echo "==> Syncing local media"
  rsync -av --delete -e "ssh -p $REMOTE_PORT" "$LOCAL_MEDIA_DIR/" "$REMOTE_USER@$REMOTE_HOST:$REMOTE_MEDIA_DIR/"
fi

if [[ "$RUN_REMOTE_SYNC_STEPS" == "yes" ]]; then
  echo "==> Running remote repair/sync steps"
  run_remote "cd '$REMOTE_APP_DIR' && npm run repair:sqlite-globals && npm run ensure:globals && npm run sync:default-content"
fi

echo "==> Restarting PM2 app"
run_remote "cd '$REMOTE_APP_DIR' && npx pm2 startOrReload ecosystem.config.cjs --env production && npx pm2 save"

echo "==> Done"
echo "Open the site and /admin to verify the content."
