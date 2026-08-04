#!/usr/bin/env node

import {
  existsSync,
  lstatSync,
  mkdirSync,
  readFileSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const authoredRunnerPaths = [
  "emmy-runner/deps.edn",
  "emmy-runner/package.json",
  "emmy-runner/package-lock.json",
  "emmy-runner/shadow-cljs.edn",
  "emmy-runner/src",
  "emmy-runner/public/.nojekyll",
  "emmy-runner/public/index.html",
  "emmy-runner/public/style.css",
];

const transientRunnerPaths = [
  "emmy-runner/.cpcache",
  "emmy-runner/.shadow-cljs",
  "emmy-runner/node_modules",
  "emmy-runner/target",
  "emmy-runner/public/js",
  "emmy-runner/public/worker",
];

function replaceWithRelativeLink(destination, source) {
  if (!existsSync(source)) {
    throw new Error(`Cannot link missing runner source: ${source}`);
  }
  rmSync(destination, { recursive: true, force: true });
  mkdirSync(path.dirname(destination), { recursive: true });
  const target = path.relative(path.dirname(destination), source);
  const type = lstatSync(source).isDirectory() ? "dir" : "file";
  symlinkSync(target, destination, type);
}

/**
 * Reduce a retained build's runner workspace to a thin overlay.
 *
 * The live build uses private copies so compilation cannot write into the
 * source checkout. Once execution has finished, those unchanged authored
 * inputs can point back to the root runner, while compiler caches and bundles
 * are discarded. Successful generated data points sideways to the promoted
 * artifact instead of being retained twice.
 */
export function compactBuildRunner({ root, runDir, linkGeneratedArtifact = false }) {
  const workDir = path.join(runDir, "work");
  const runnerDir = path.join(workDir, "emmy-runner");
  if (!existsSync(runnerDir)) return;

  for (const relative of transientRunnerPaths) {
    rmSync(path.join(workDir, relative), { recursive: true, force: true });
  }

  for (const relative of authoredRunnerPaths) {
    replaceWithRelativeLink(path.join(workDir, relative), path.join(root, relative));
  }

  if (linkGeneratedArtifact) {
    const generated = path.join(runnerDir, "public", "generated");
    const artifact = path.join(runDir, "artifacts", "emmy-generated");
    if (existsSync(artifact)) replaceWithRelativeLink(generated, artifact);
  }

  for (const metadataPath of [
    path.join(runDir, "run.json"),
    path.join(runDir, "artifacts", "run.json"),
  ]) {
    if (!existsSync(metadataPath)) continue;
    const metadata = JSON.parse(readFileSync(metadataPath, "utf8"));
    writeFileSync(metadataPath, `${JSON.stringify({
      ...metadata,
      workspaceLayout: "linked-runner-v1",
    }, null, 2)}\n`);
  }
}

const invokedPath = process.argv[1] ? path.resolve(process.argv[1]) : null;
if (invokedPath === fileURLToPath(import.meta.url)) {
  const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
  const requestedRun = process.argv[2];
  if (!requestedRun) {
    throw new Error("Usage: node scripts/compact-build-runner.mjs <retained-run-directory>");
  }
  const runDir = path.resolve(repositoryRoot, requestedRun);
  compactBuildRunner({
    root: repositoryRoot,
    runDir,
    linkGeneratedArtifact: existsSync(path.join(runDir, "artifacts", "emmy-generated")),
  });
  console.log(`Compacted retained runner workspace: ${runDir}`);
}
