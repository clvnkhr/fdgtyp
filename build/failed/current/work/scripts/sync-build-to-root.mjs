#!/usr/bin/env node

import {
  cpSync,
  existsSync,
  lstatSync,
  mkdirSync,
  renameSync,
  rmSync,
} from "node:fs";
import path from "node:path";
import { randomBytes } from "node:crypto";
import { fileURLToPath } from "node:url";

export const generatedArtifactMappings = [
  { workspace: "codeblocks", artifact: "codeblocks", root: "codeblocks" },
  {
    workspace: "emmy-runner/public/generated",
    artifact: "emmy-generated",
    root: "emmy-runner/public/generated",
  },
  { workspace: "typ/content", artifact: "typ/content", root: "typ/content" },
  { workspace: "typ/main.typ", artifact: "typ/main.typ", root: "typ/main.typ" },
  { workspace: "typ/manifest.typ", artifact: "typ/manifest.typ", root: "typ/manifest.typ" },
  { workspace: "typ/references.bib", artifact: "typ/references.bib", root: "typ/references.bib" },
  { workspace: "typ/main.pdf", artifact: "typ/main.pdf", root: "typ/main.pdf" },
  { workspace: "typ/main-cljs.pdf", artifact: "typ/main-cljs.pdf", root: "typ/main-cljs.pdf" },
  { workspace: "typ/main-both.pdf", artifact: "typ/main-both.pdf", root: "typ/main-both.pdf" },
  { workspace: "typ/audit.pdf", artifact: "typ/audit.pdf", root: "typ/audit.pdf" },
  { workspace: "fdg-book.pdf", artifact: "fdg-book.pdf", root: "fdg-book.pdf" },
  { workspace: "fdg-book-cljs.pdf", artifact: "fdg-book-cljs.pdf", root: "fdg-book-cljs.pdf" },
  { workspace: "fdg-book-both.pdf", artifact: "fdg-book-both.pdf", root: "fdg-book-both.pdf" },
  {
    workspace: "output-comparison.typ",
    artifact: "output-comparison.typ",
    root: "output-comparison.typ",
  },
  {
    workspace: "output-comparison.pdf",
    artifact: "output-comparison.pdf",
    root: "output-comparison.pdf",
  },
];

export const generatedRelativePaths = generatedArtifactMappings.map(({ workspace }) => workspace);

export function artifactRelativePath(workspacePath) {
  const mapping = generatedArtifactMappings.find(({ workspace }) => workspace === workspacePath);
  if (!mapping) throw new Error(`Unknown generated workspace path: ${workspacePath}`);
  return mapping.artifact;
}

function lstatExists(file) {
  try {
    lstatSync(file);
    return true;
  } catch (error) {
    if (error.code === "ENOENT") return false;
    throw error;
  }
}

/**
 * Replace every generated root mirror with the corresponding promoted
 * artifact. All sources are prepared before any root path changes. If an
 * installation step fails, already-installed paths are rolled back.
 *
 * A missing artifact deliberately removes its root mirror. This prevents a
 * partial target from leaving an output at root that is not part of the
 * promoted artifact set.
 */
export function syncBuildToRoot({ root, artifactsDir }) {
  const transactionDir = path.join(
    root,
    "build",
    ".root-sync",
    `${process.pid}-${randomBytes(4).toString("hex")}`,
  );
  const preparedDir = path.join(transactionDir, "prepared");
  const backupDir = path.join(transactionDir, "backup");
  mkdirSync(preparedDir, { recursive: true });
  mkdirSync(backupDir, { recursive: true });

  const operations = generatedArtifactMappings.map((mapping, index) => {
    const source = path.join(artifactsDir, mapping.artifact);
    const prepared = path.join(preparedDir, String(index));
    if (existsSync(source)) cpSync(source, prepared, { recursive: true });
    return {
      ...mapping,
      destination: path.join(root, mapping.root),
      prepared,
      backup: path.join(backupDir, String(index)),
      hadDestination: false,
      installed: false,
    };
  });

  try {
    for (const operation of operations) {
      mkdirSync(path.dirname(operation.destination), { recursive: true });
      if (lstatExists(operation.destination)) {
        renameSync(operation.destination, operation.backup);
        operation.hadDestination = true;
      }
      if (existsSync(operation.prepared)) {
        renameSync(operation.prepared, operation.destination);
        operation.installed = true;
      }
    }
  } catch (error) {
    const rollbackErrors = [];
    for (const operation of [...operations].reverse()) {
      try {
        if (operation.installed && lstatExists(operation.destination)) {
          rmSync(operation.destination, { recursive: true, force: true });
        }
        if (operation.hadDestination && lstatExists(operation.backup)) {
          renameSync(operation.backup, operation.destination);
        }
      } catch (rollbackError) {
        rollbackErrors.push(rollbackError.message);
      }
    }
    if (rollbackErrors.length > 0) {
      error.message += `\nRoot mirror rollback errors:\n${rollbackErrors.join("\n")}`;
    }
    throw error;
  } finally {
    rmSync(transactionDir, { recursive: true, force: true });
  }

  return operations.filter(({ installed }) => installed).map(({ root: destination }) => destination);
}

const invokedPath = process.argv[1] ? path.resolve(process.argv[1]) : null;
if (invokedPath === fileURLToPath(import.meta.url)) {
  const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
  const requestedArtifacts = process.argv[2]
    ? path.resolve(repositoryRoot, process.argv[2])
    : path.join(repositoryRoot, "build", "current");
  if (!existsSync(requestedArtifacts)) {
    throw new Error(`Build artifacts do not exist: ${requestedArtifacts}`);
  }
  const synchronized = syncBuildToRoot({
    root: repositoryRoot,
    artifactsDir: requestedArtifacts,
  });
  console.log(`Synchronized ${synchronized.length} generated root paths from ${requestedArtifacts}`);
}
