#!/bin/bash
set -euo pipefail

SUPPORT_DIR="$HOME/Library/Application Support/Jarvis Demo"
TARGET="$SUPPORT_DIR/app/public/app.js"
LAUNCH_SH="$SUPPORT_DIR/launch.sh"
HOTFIX_URL="https://raw.githubusercontent.com/JT5D/jarvis-releases/main/hotfix/voice-hotfix.mjs"
TMP_DIR=$(mktemp -d "${TMPDIR:-/tmp}/jarvis-voice-hotfix.XXXXXX")
trap 'rm -rf "$TMP_DIR"' EXIT

if [ "$(uname -s)" != "Darwin" ]; then
  echo "Jarvis voice hotfix requires macOS."
  exit 1
fi

if [ ! -f "$TARGET" ]; then
  echo "Jarvis is not installed at the expected location. Install Jarvis first, then run this fix."
  exit 1
fi

NODE_BIN=""
if [ -f "$LAUNCH_SH" ]; then
  NODE_BIN=$(sed -n 's/^NODE="\(.*\)"$/\1/p' "$LAUNCH_SH" | head -1)
fi
if [ -z "$NODE_BIN" ] || [ ! -x "$NODE_BIN" ]; then
  NODE_BIN=$(command -v node || true)
fi
if [ -z "$NODE_BIN" ] || [ ! -x "$NODE_BIN" ]; then
  echo "Could not find the Node runtime installed with Jarvis. Re-run the Jarvis installer first."
  exit 1
fi

echo "Downloading the Jarvis voice repair..."
curl --proto '=https' --tlsv1.2 --fail --location --silent --show-error \
  "$HOTFIX_URL" -o "$TMP_DIR/voice-hotfix.mjs"

"$NODE_BIN" "$TMP_DIR/voice-hotfix.mjs" "$TARGET"

# Static files are served with no-store, so reopening Jarvis loads the repaired client immediately.
if [ -d "$HOME/Applications/Jarvis Demo.app" ]; then
  open "$HOME/Applications/Jarvis Demo.app"
else
  open "http://127.0.0.1:48715"
fi

echo
echo "Done. Jarvis has been reopened with the voice repair."
echo "Press Start voice and say: What should I focus on first?"
