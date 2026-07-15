#!/bin/sh

set -eu

RACKET_VERSION=8.18
ROOT=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
TOOLS_DIR="$ROOT/.tools"
RACKET_DIR="$TOOLS_DIR/racket"
RACKET_USER_DIR="$TOOLS_DIR/racket-user"

case "$(uname -s):$(uname -m)" in
  Darwin:arm64)
    ARCHIVE="racket-minimal-$RACKET_VERSION-aarch64-macosx-cs.tgz"
    SHA256="d59d2021577f3ae2dd31c1058ace38043e7e660726c49081781550d81c32fcf1"
    ;;
  Darwin:x86_64)
    ARCHIVE="racket-minimal-$RACKET_VERSION-x86_64-macosx-cs.tgz"
    SHA256="f4c2205c00155d63c8d568007b6edc64a7913fd75e4dda504c62f496ed681b9e"
    ;;
  Linux:x86_64)
    ARCHIVE="racket-minimal-$RACKET_VERSION-x86_64-linux-buster-cs.tgz"
    SHA256="6e11834543578d38731dbee0e4679fd55056d029ad0ae4ac42235f469285f1c4"
    ;;
  Linux:aarch64|Linux:arm64)
    ARCHIVE="racket-minimal-$RACKET_VERSION-aarch64-linux-buster-cs.tgz"
    SHA256="2013bea2e866bf634a82bad41adac9c555c297248551e35ee09782d0f59d051c"
    ;;
  *)
    echo "Unsupported platform: $(uname -s) $(uname -m)" >&2
    exit 1
    ;;
esac

if [ -x "$RACKET_DIR/bin/raco" ] && \
   env PLTUSERHOME="$RACKET_USER_DIR" "$RACKET_DIR/bin/raco" fmt --help >/dev/null 2>&1; then
  echo "Repo-local Racket $RACKET_VERSION and raco fmt are already installed in $TOOLS_DIR."
  exit 0
fi

DOWNLOAD_URL="https://download.racket-lang.org/releases/$RACKET_VERSION/installers/$ARCHIVE"
TEMP_DIR=$(mktemp -d "${TMPDIR:-/tmp}/fdgtyp-racket.XXXXXX")
trap 'rm -rf "$TEMP_DIR"' EXIT HUP INT TERM

echo "Downloading Minimal Racket $RACKET_VERSION..."
curl --fail --location --retry 3 "$DOWNLOAD_URL" --output "$TEMP_DIR/$ARCHIVE"

ACTUAL_SHA256=$(shasum -a 256 "$TEMP_DIR/$ARCHIVE" | awk '{print $1}')
if [ "$ACTUAL_SHA256" != "$SHA256" ]; then
  echo "Checksum mismatch for $ARCHIVE" >&2
  echo "Expected: $SHA256" >&2
  echo "Actual:   $ACTUAL_SHA256" >&2
  exit 1
fi

mkdir -p "$TOOLS_DIR" "$RACKET_USER_DIR"
if [ -e "$RACKET_DIR" ]; then
  echo "$RACKET_DIR already exists but does not contain a working raco fmt." >&2
  echo "Move it aside or remove it, then rerun this installer." >&2
  exit 1
fi

tar -xzf "$TEMP_DIR/$ARCHIVE" -C "$TOOLS_DIR"

echo "Installing fmt into the repo-local Racket package scope..."
env PLTUSERHOME="$RACKET_USER_DIR" \
  "$RACKET_DIR/bin/raco" pkg install --auto --no-docs fmt

env PLTUSERHOME="$RACKET_USER_DIR" "$RACKET_DIR/bin/raco" fmt --help >/dev/null
echo "Installed Racket and raco fmt in $TOOLS_DIR."
