#!/usr/bin/env node

import { cpSync, existsSync, lstatSync, readlinkSync, rmSync, symlinkSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const generated = path.join(root, "emmy-runner", "public", "generated");
const current = path.join(root, "build", "current", "work", "emmy-runner", "public", "generated");
const relativeCurrent = path.relative(path.dirname(generated), current);

if (!existsSync(current)) {
  if (existsSync(generated)) {
    console.log("Using generated Emmy files from the active build workspace.");
    process.exit(0);
  }
  throw new Error("No generated Emmy files are available. Run `make emmy-convert` first.");
}

if (existsSync(generated) || lstatExists(generated)) {
  const alreadyCurrent = lstatSync(generated).isSymbolicLink()
    && readlinkSync(generated) === relativeCurrent;
  if (alreadyCurrent) {
    console.log("Emmy runner already uses build/current generated files.");
    process.exit(0);
  }
  rmSync(generated, { recursive: true, force: true });
}

if (process.env.CI) {
  cpSync(current, generated, { recursive: true });
} else {
  symlinkSync(relativeCurrent, generated, "dir");
}
console.log(`Emmy runner generated files: ${current}`);

function lstatExists(file) {
  try {
    lstatSync(file);
    return true;
  } catch (error) {
    if (error.code === "ENOENT") return false;
    throw error;
  }
}
