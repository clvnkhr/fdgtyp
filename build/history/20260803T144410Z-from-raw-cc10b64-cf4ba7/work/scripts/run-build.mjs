#!/usr/bin/env node

import { cpSync, createWriteStream, existsSync, lstatSync, mkdirSync, readFileSync, readdirSync, realpathSync, renameSync, rmSync, statSync, symlinkSync, writeFileSync } from "node:fs";
import { execFileSync, spawn } from "node:child_process";
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
const logPath = path.join(runDir, "build.log");
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

function artifactRelativePath(relative) {
  return relative === "emmy-runner/public/generated" ? "emmy-generated" : relative;
}

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
  log: "build.log",
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
const currentDir = path.join(buildDir, "current");
const previousWorkDir = existsSync(path.join(currentDir, "work"))
  ? path.join(currentDir, "work")
  : (existsSync(currentDir) ? path.join(path.dirname(realpathSync(currentDir)), "work") : null);
if (previousWorkDir && existsSync(previousWorkDir)) {
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

function existingCurrentId(currentDir) {
  const manifest = path.join(currentDir, "run.json");
  if (!existsSync(manifest)) return `legacy-${Date.now()}`;
  const id = JSON.parse(readFileSync(manifest, "utf8")).id;
  return /^[A-Za-z0-9][A-Za-z0-9._-]*$/.test(id) ? id : `legacy-${Date.now()}`;
}

function pruneToNewest(directory, count) {
  const retained = readdirSync(directory)
    .map(name => ({ name, path: path.join(directory, name), time: statSync(path.join(directory, name)).mtimeMs }))
    .sort((a, b) => b.time - a.time);
  for (const stale of retained.slice(count)) rmSync(stale.path, { recursive: true, force: true });
}

function promoteCurrent() {
  const historyDir = path.join(buildDir, "history");
  const currentDir = path.join(buildDir, "current");
  mkdirSync(historyDir, { recursive: true });

  // Migrate the one-build layout introduced earlier, if present.
  if (existsSync(currentDir) && !lstatSync(currentDir).isSymbolicLink()) {
    const previousDir = path.join(historyDir, existingCurrentId(currentDir));
    if (existsSync(previousDir)) rmSync(previousDir, { recursive: true, force: true });
    renameSync(currentDir, previousDir);
  }

  const artifactsDir = path.join(runDir, "artifacts");
  mkdirSync(artifactsDir, { recursive: true });
  for (const relative of generatedRelativePaths) {
    const source = path.join(workDir, relative);
    if (!existsSync(source)) continue;
    const destination = path.join(artifactsDir, artifactRelativePath(relative));
    mkdirSync(path.dirname(destination), { recursive: true });
    cpSync(source, destination, { recursive: true });
  }
  cpSync(manifestPath, path.join(artifactsDir, "run.json"));
  cpSync(logPath, path.join(artifactsDir, "build.log"));

  const finalDir = path.join(historyDir, runId);
  renameSync(runDir, finalDir);
  rmSync(currentDir, { recursive: true, force: true });
  symlinkSync(path.join("history", runId, "artifacts"), currentDir, "dir");

  pruneToNewest(historyDir, 3);
  return finalDir;
}

function retainFailure() {
  const failedDir = path.join(buildDir, "failed");
  mkdirSync(failedDir, { recursive: true });
  const finalDir = path.join(failedDir, runId);
  if (existsSync(finalDir)) rmSync(finalDir, { recursive: true, force: true });
  renameSync(runDir, finalDir);
  pruneToNewest(failedDir, 3);
  return finalDir;
}

console.log(`FDG build run: ${runDir}`);
try {
  const makeShell = path.join(workDir, "scripts", "timed-make-shell.mjs");
  const log = createWriteStream(logPath, { flags: "a" });
  const exitCode = await new Promise((resolve, reject) => {
    const child = spawn("make", [`SHELL=${makeShell}`, "FDG_IN_RUN=1", target], {
      cwd: workDir,
      stdio: ["inherit", "pipe", "pipe"],
      env: {
        ...process.env,
        FDG_BUILD_LOG: logPath,
        FDG_IN_RUN: "1",
        FDG_REAL_SHELL: "/bin/sh",
      },
    });
    child.stdout.on("data", chunk => {
      process.stdout.write(chunk);
      log.write(chunk);
    });
    child.stderr.on("data", chunk => {
      process.stderr.write(chunk);
      log.write(chunk);
    });
    child.on("error", reject);
    child.on("close", resolve);
  });
  await new Promise((resolve, reject) => log.end(error => error ? reject(error) : resolve()));
  if (exitCode !== 0) throw new Error(`make exited with status ${exitCode}`);
  finish("succeeded", {
    artifacts: path.join(buildDir, "current"),
    workspace: path.join(buildDir, "history", runId, "work"),
  });
  // Promotion occurs only after a successful build. `build/current` points to
  // the latest entry while history retains the three newest successful runs.
  promoteCurrent();
  console.log(`FDG build artifacts: ${path.join(buildDir, "current")}`);
} catch (error) {
  finish("failed", { workspace: workDir });
  const failureDir = retainFailure();
  console.error(`FDG failed build retained: ${failureDir}`);
  throw error;
}
