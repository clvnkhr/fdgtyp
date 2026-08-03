#!/usr/bin/env node

import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, renameSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import path from "node:path";
import { randomBytes } from "node:crypto";

const root = process.cwd();
const target = process.argv[2];
if (!target) throw new Error("Usage: node scripts/run-build.mjs <make-target>");

function gitShortRevision() {
  try {
    return execFileSync("git", ["rev-parse", "--short", "HEAD"], {
      cwd: root,
      encoding: "utf8",
    }).trim();
  } catch {
    return "no-git";
  }
}

function timestamp() {
  return new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
}

const runId = process.env.FDG_RUN_ID
  ?? `${timestamp()}-${target}-${gitShortRevision()}-${randomBytes(3).toString("hex")}`;
if (!/^[A-Za-z0-9][A-Za-z0-9._-]*$/.test(runId)) {
  throw new Error(`Invalid FDG_RUN_ID: ${runId}`);
}

const buildDir = path.join(root, "build");
const stagingDir = path.join(buildDir, ".staging", runId);
const runDir = stagingDir;
const workDir = path.join(runDir, "work");
if (existsSync(runDir)) {
  throw new Error(`Build staging directory already exists: ${runDir}\nChoose a new FDG_RUN_ID or omit it.`);
}

const ignoredRelativeRoots = new Set([
  ".git",
  ".tools",
  "build",
  "emmy-runner/node_modules",
  "emmy-runner/.shadow-cljs",
  "emmy-runner/public/generated",
  "emmy-runner/public/js",
  "emmy-runner/public/worker",
  "codeblocks",
  "typ/content",
  "typ/main.typ",
  "typ/manifest.typ",
  "typ/references.bib",
  "typ/main.pdf",
  "typ/main-cljs.pdf",
  "typ/main-both.pdf",
  "typ/audit.pdf",
  "fdg-book.pdf",
  "fdg-book-cljs.pdf",
  "fdg-book-both.pdf",
  "output-comparison.typ",
  "output-comparison.pdf",
]);

const generatedRelativePaths = [
  "codeblocks",
  "emmy-runner/public/generated",
  "typ/content",
  "typ/main.typ",
  "typ/manifest.typ",
  "typ/references.bib",
  "typ/main.pdf",
  "typ/main-cljs.pdf",
  "typ/main-both.pdf",
  "typ/audit.pdf",
  "fdg-book.pdf",
  "fdg-book-cljs.pdf",
  "fdg-book-both.pdf",
  "output-comparison.typ",
  "output-comparison.pdf",
];

function shouldCopy(source) {
  const relative = path.relative(root, source);
  if (!relative) return true;
  return ![...ignoredRelativeRoots].some(ignored => relative === ignored || relative.startsWith(`${ignored}${path.sep}`));
}

mkdirSync(runDir, { recursive: true });
writeFileSync(path.join(runDir, "run.json"), JSON.stringify({
  id: runId,
  target,
  source: root,
  revision: gitShortRevision(),
  startedAt: new Date().toISOString(),
  status: "running",
}, null, 2) + "\n");

mkdirSync(workDir, { recursive: true });
// Copy entries individually: Node refuses a single recursive copy into any
// descendant of its source, even when that descendant is excluded by filter.
for (const entry of readdirSync(root)) {
  const source = path.join(root, entry);
  if (!shouldCopy(source)) continue;
  cpSync(source, path.join(workDir, entry), { recursive: true, filter: shouldCopy });
}
// Partial workflows (for example `just-pdf`) reuse the latest successful
// generated state. A complete `make` regenerates these paths in staging.
const previousWorkDir = path.join(buildDir, "current", "work");
if (existsSync(previousWorkDir)) {
  for (const relative of generatedRelativePaths) {
    const source = path.join(previousWorkDir, relative);
    if (!existsSync(source)) continue;
    const destination = path.join(workDir, relative);
    mkdirSync(path.dirname(destination), { recursive: true });
    cpSync(source, destination, { recursive: true });
  }
}
for (const relative of [".tools", "emmy-runner/node_modules"]) {
  const source = path.join(root, relative);
  const destination = path.join(workDir, relative);
  if (existsSync(source)) {
    mkdirSync(path.dirname(destination), { recursive: true });
    symlinkSync(source, destination, "dir");
  }
}

const manifestPath = path.join(runDir, "run.json");
const finish = (status, extra = {}) => writeFileSync(manifestPath, JSON.stringify({
  ...JSON.parse(readFileSync(manifestPath, "utf8")),
  ...extra,
  finishedAt: new Date().toISOString(),
  status,
}, null, 2) + "\n");

console.log(`FDG build run: ${runDir}`);
try {
  execFileSync("make", ["FDG_IN_RUN=1", target], {
    cwd: workDir,
    stdio: "inherit",
    env: { ...process.env, FDG_IN_RUN: "1" },
  });
  const currentDir = path.join(buildDir, "current");
  finish("succeeded", { workspace: path.join(currentDir, "work") });
  // Promotion occurs only after a successful build. The prior successful run
  // is the sole disposable target, so failed builds never disturb it.
  rmSync(currentDir, { recursive: true, force: true });
  renameSync(runDir, currentDir);
  console.log(`FDG build artifacts: ${path.join(currentDir, "work")}`);
} catch (error) {
  finish("failed", { workspace: workDir });
  rmSync(runDir, { recursive: true, force: true });
  throw error;
}
