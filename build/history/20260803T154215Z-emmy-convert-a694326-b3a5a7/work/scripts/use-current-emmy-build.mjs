#!/usr/bin/env node

import { cpSync, existsSync, lstatSync, readFileSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const generated = path.join(root, "emmy-runner", "public", "generated");
const artifactCurrent = path.join(root, "build", "current", "emmy-generated");
const legacyCurrent = path.join(root, "build", "current", "work", "emmy-runner", "public", "generated");
const current = existsSync(artifactCurrent) ? artifactCurrent : legacyCurrent;

if (!existsSync(current)) {
  if (existsSync(generated)) {
    console.log("Using generated Emmy files from the active build workspace.");
    process.exit(0);
  }
  throw new Error("No generated Emmy files are available. Run `make emmy-convert` first.");
}

const manifestPath = path.join(current, "blocks.json");
const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
if (!Array.isArray(manifest) || manifest.length === 0) {
  throw new Error(`Current Emmy manifest is empty: ${manifestPath}`);
}

if (existsSync(generated) || lstatExists(generated)) rmSync(generated, { recursive: true, force: true });
cpSync(current, generated, { recursive: true });
console.log(`Copied ${manifest.length} Emmy blocks from ${current}`);

function lstatExists(file) {
  try {
    lstatSync(file);
    return true;
  } catch (error) {
    if (error.code === "ENOENT") return false;
    throw error;
  }
}
