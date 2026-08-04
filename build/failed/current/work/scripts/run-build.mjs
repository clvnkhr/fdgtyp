#!/usr/bin/env node

import { cpSync, createWriteStream, existsSync, lstatSync, mkdirSync, readFileSync, realpathSync, renameSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
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

// Keep the isolated workspace understandable: copy only source/configuration
// consumed by Make recipes. Generated inputs for partial builds are layered in
// separately below from the latest successful build.
const buildInputPaths = [
  "Makefile",
  "deps.edn",
  "scripts",
  "fdg-book/scheme/org",
  "fdg-book/clojure/org",
  "fdg-book/fdg_book.pdf",
  "typ/assets",
  "typ/fdg-lib",
  "typ/templates",
  "typ/Scheme.sublime-syntax",
  "typ/fdg-scheme.tmTheme",
  "typ/index.typ",
  "typ/lib.typ",
  "emmy-runner/deps.edn",
  "emmy-runner/package.json",
  "emmy-runner/package-lock.json",
  "emmy-runner/shadow-cljs.edn",
  "emmy-runner/src",
  "emmy-runner/public/.nojekyll",
  "emmy-runner/public/index.html",
  "emmy-runner/public/style.css",
];

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
for (const relative of buildInputPaths) {
  const source = path.join(root, relative);
  if (!existsSync(source)) throw new Error(`Missing required build input: ${relative}`);
  const destination = path.join(workDir, relative);
  mkdirSync(path.dirname(destination), { recursive: true });
  cpSync(source, destination, { recursive: true });
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

function archiveDirectory(source, archive) {
  const temporary = `${archive}.tmp-${process.pid}`;
  try {
    execFileSync("tar", ["-czf", temporary, "-C", source, "."], {
      stdio: "inherit",
    });
    renameSync(temporary, archive);
    rmSync(source, { recursive: true, force: true });
  } catch (error) {
    rmSync(temporary, { force: true });
    throw error;
  }
}

function rotateRetainedRuns(directory) {
  const current = path.join(directory, "current");
  const previous1 = path.join(directory, "previous-1.tar.gz");
  const previous2 = path.join(directory, "previous-2.tar.gz");
  const previous1Metadata = path.join(directory, "previous-1.json");
  const previous2Metadata = path.join(directory, "previous-2.json");
  rmSync(previous2, { force: true });
  rmSync(previous2Metadata, { force: true });
  if (existsSync(previous1)) renameSync(previous1, previous2);
  if (existsSync(previous1Metadata)) {
    const metadata = JSON.parse(readFileSync(previous1Metadata, "utf8"));
    writeFileSync(previous2Metadata, JSON.stringify({
      ...metadata,
      archive: path.basename(previous2),
    }, null, 2) + "\n");
    rmSync(previous1Metadata, { force: true });
  }
  if (existsSync(current)) {
    const metadataTemporary = `${previous1Metadata}.tmp-${process.pid}`;
    const metadata = JSON.parse(readFileSync(path.join(current, "run.json"), "utf8"));
    writeFileSync(metadataTemporary, JSON.stringify({
      ...metadata,
      artifacts: null,
      workspace: null,
      archive: path.basename(previous1),
    }, null, 2) + "\n");
    try {
      archiveDirectory(current, previous1);
      renameSync(metadataTemporary, previous1Metadata);
    } catch (error) {
      rmSync(metadataTemporary, { force: true });
      throw error;
    }
  }
}

function promoteCurrent() {
  const historyDir = path.join(buildDir, "history");
  const currentDir = path.join(buildDir, "current");
  const currentRunDir = path.join(historyDir, "current");
  mkdirSync(historyDir, { recursive: true });

  // Accept the earlier timestamped layout during the first promotion after an
  // upgrade. The committed tree itself uses the static current slot.
  if (!existsSync(currentRunDir) && existsSync(currentDir)) {
    if (lstatSync(currentDir).isSymbolicLink()) {
      const legacyRunDir = path.dirname(realpathSync(currentDir));
      renameSync(legacyRunDir, currentRunDir);
    } else {
      renameSync(currentDir, currentRunDir);
    }
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

  rotateRetainedRuns(historyDir);
  renameSync(runDir, currentRunDir);
  rmSync(currentDir, { recursive: true, force: true });
  symlinkSync(path.join("history", "current", "artifacts"), currentDir, "dir");

  return currentRunDir;
}

function retainFailure() {
  const failedDir = path.join(buildDir, "failed");
  const currentFailureDir = path.join(failedDir, "current");
  mkdirSync(failedDir, { recursive: true });
  rotateRetainedRuns(failedDir);
  renameSync(runDir, currentFailureDir);
  return currentFailureDir;
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
    workspace: path.join(buildDir, "history", "current", "work"),
  });
  // Promotion occurs only after a successful build. Static slot names make
  // successive generated trees directly comparable in Git.
  promoteCurrent();
  console.log(`FDG build artifacts: ${path.join(buildDir, "current")}`);
} catch (error) {
  finish("failed", { workspace: path.join(buildDir, "failed", "current", "work") });
  const failureDir = retainFailure();
  console.error(`FDG failed build retained: ${failureDir}`);
  throw error;
}
