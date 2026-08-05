#!/usr/bin/env node

import assert from "node:assert/strict";
import {
  cpSync,
  existsSync,
  lstatSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  readlinkSync,
  realpathSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { syncBuildToRoot } from "./sync-build-to-root.mjs";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const fixtureRoot = mkdtempSync(path.join(os.tmpdir(), "fdg-runner-retention-"));

function write(relative, contents = "fixture\n") {
  const destination = path.join(fixtureRoot, relative);
  mkdirSync(path.dirname(destination), { recursive: true });
  writeFileSync(destination, contents);
}

function runBuild(target, id, expectSuccess = true) {
  const result = spawnSync(process.execPath, ["scripts/run-build.mjs", target], {
    cwd: fixtureRoot,
    encoding: "utf8",
    env: { ...process.env, FDG_RUN_ID: id },
  });
  if (expectSuccess && result.status !== 0) {
    throw new Error(`${target} failed:\n${result.stdout}\n${result.stderr}`);
  }
  if (!expectSuccess && result.status === 0) {
    throw new Error(`${target} unexpectedly succeeded`);
  }
}

function assertSourceLink(runDir, relative) {
  const retained = path.join(runDir, "work", relative);
  assert.equal(lstatSync(retained).isSymbolicLink(), true, `${relative} should be a symlink`);
  assert.equal(path.isAbsolute(readlinkSync(retained)), false, `${relative} link should be relative`);
  assert.equal(realpathSync(retained), realpathSync(path.join(fixtureRoot, relative)));
}

try {
  cpSync(path.join(projectRoot, "scripts"), path.join(fixtureRoot, "scripts"), {
    recursive: true,
  });

  for (const relative of [
    "fdg-book/scheme/org",
    "fdg-book/clojure/org",
    "typ/assets",
    "typ/fdg-lib",
    "typ/templates",
    "emmy-runner/src/fdg",
    "emmy-runner/public",
  ]) {
    mkdirSync(path.join(fixtureRoot, relative), { recursive: true });
  }

  for (const relative of [
    "deps.edn",
    "fdg-book/fdg_book.pdf",
    "typ/Scheme.sublime-syntax",
    "typ/fdg-scheme.tmTheme",
    "typ/index.typ",
    "typ/lib.typ",
    "emmy-runner/deps.edn",
    "emmy-runner/package.json",
    "emmy-runner/package-lock.json",
    "emmy-runner/shadow-cljs.edn",
    "emmy-runner/public/.nojekyll",
    "emmy-runner/public/index.html",
    "emmy-runner/public/style.css",
    "emmy-runner/src/fdg/smoke.cljs",
  ]) {
    write(relative);
  }

  write("Makefile", [
    ".PHONY: fixture fixture-reuse fixture-fail",
    "fixture:",
    "\tnode scripts/create-retention-fixture.mjs first",
    "fixture-reuse:",
    "\tnode scripts/create-retention-fixture.mjs reuse",
    "fixture-fail:",
    "\tnode scripts/create-retention-fixture.mjs failed",
    "\tfalse",
    "",
  ].join("\n"));

  write("scripts/create-retention-fixture.mjs", `
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
const mode = process.argv[2];
const required = "emmy-runner/public/generated/blocks.json";
if (mode === "reuse" && !existsSync(required)) {
  throw new Error("previous generated artifact was not layered into this run");
}
for (const relative of [
  "emmy-runner/.shadow-cljs/builds/smoke",
  "emmy-runner/.cpcache",
  "emmy-runner/target",
  "emmy-runner/public/js",
  "emmy-runner/public/worker",
  "emmy-runner/public/generated/chapter001",
  "codeblocks/chapter001",
  "typ/content",
]) mkdirSync(relative, { recursive: true });
for (const relative of [
  "emmy-runner/.shadow-cljs/builds/smoke/cache",
  "emmy-runner/.cpcache/basis",
  "emmy-runner/target/smoke.js",
  "emmy-runner/public/js/main.js",
  "emmy-runner/public/worker/main.js",
]) writeFileSync(relative, "transient\\n");
writeFileSync(required, JSON.stringify([{id: "chapter001-001", mode}]) + "\\n");
writeFileSync("emmy-runner/public/generated/chapter001/001.cljs", "(+ 1 2) ;; " + mode + "\\n");
writeFileSync("codeblocks/chapter001/001.cljs", "(+ 1 2) ;; " + mode + "\\n");
writeFileSync("codeblocks/chapter001/001.scm", "(+ 1 2)\\n");
writeFileSync("typ/content/chapter001.typ", "Chapter " + mode + "\\n");
writeFileSync("typ/main.typ", "Main " + mode + "\\n");
writeFileSync("typ/manifest.typ", "Manifest " + mode + "\\n");
writeFileSync("typ/references.bib", "References " + mode + "\\n");
writeFileSync("fdg-book.pdf", "PDF " + mode + "\\n");
`);

  write("output-comparison.typ", "stale root mirror\n");
  write("typ/fdg-lib/preface_cljs.typ", "Preface source\n");
  runBuild("fixture", "first");

  const successfulRun = path.join(fixtureRoot, "build", "history", "current");
  for (const relative of [
    "emmy-runner/deps.edn",
    "emmy-runner/package.json",
    "emmy-runner/package-lock.json",
    "emmy-runner/shadow-cljs.edn",
    "emmy-runner/src",
    "emmy-runner/public/.nojekyll",
    "emmy-runner/public/index.html",
    "emmy-runner/public/style.css",
  ]) assertSourceLink(successfulRun, relative);

  const retainedGenerated = path.join(
    successfulRun,
    "work",
    "emmy-runner",
    "public",
    "generated",
  );
  assert.equal(lstatSync(retainedGenerated).isSymbolicLink(), true);
  assert.equal(
    realpathSync(retainedGenerated),
    realpathSync(path.join(successfulRun, "artifacts", "emmy-generated")),
  );

  for (const relative of [
    "emmy-runner/.shadow-cljs",
    "emmy-runner/.cpcache",
    "emmy-runner/node_modules",
    "emmy-runner/target",
    "emmy-runner/public/js",
    "emmy-runner/public/worker",
  ]) assert.equal(existsSync(path.join(successfulRun, "work", relative)), false);

  assert.equal(
    JSON.parse(readFileSync(path.join(successfulRun, "run.json"), "utf8")).workspaceLayout,
    "linked-runner-v1",
  );
  assert.equal(
    JSON.parse(readFileSync(path.join(successfulRun, "run.json"), "utf8")).rootMirrors,
    "synchronized-on-promotion",
  );
  assert.equal(
    JSON.parse(readFileSync(path.join(successfulRun, "artifacts", "run.json"), "utf8")).rootMirrors,
    "synchronized-on-promotion",
  );
  assert.equal(readFileSync(path.join(fixtureRoot, "typ", "main.typ"), "utf8"), "Main first\n");
  assert.equal(
    readFileSync(path.join(successfulRun, "work", "typ", "fdg-lib", "preface_cljs.typ"), "utf8"),
    "Preface source\n",
  );
  assert.equal(readFileSync(path.join(fixtureRoot, "fdg-book.pdf"), "utf8"), "PDF first\n");
  assert.equal(
    readFileSync(path.join(fixtureRoot, "emmy-runner", "public", "generated", "chapter001", "001.cljs"), "utf8"),
    "(+ 1 2) ;; first\n",
  );
  assert.equal(
    lstatSync(path.join(fixtureRoot, "emmy-runner", "public", "generated")).isDirectory(),
    true,
  );
  assert.equal(existsSync(path.join(fixtureRoot, "output-comparison.typ")), false);

  // Prove that the next run layers generated state from artifacts rather than
  // relying on the retained workspace's convenience link.
  rmSync(retainedGenerated, { recursive: true, force: true });
  write("typ/fdg-lib/preface_cljs.typ", "Preface edited\n");
  runBuild("fixture-reuse", "second");
  assert.equal(readFileSync(path.join(fixtureRoot, "typ", "main.typ"), "utf8"), "Main reuse\n");
  assert.equal(
    readFileSync(path.join(fixtureRoot, "typ", "fdg-lib", "preface_cljs.typ"), "utf8"),
    "Preface edited\n",
  );

  const archive = path.join(fixtureRoot, "build", "history", "previous-1.tar.gz");
  const archiveListing = spawnSync("tar", ["-tzf", archive], { encoding: "utf8" });
  assert.equal(archiveListing.status, 0, archiveListing.stderr);
  assert.doesNotMatch(archiveListing.stdout, /\.shadow-cljs|\.cpcache|\/target\//);
  const verboseArchiveListing = spawnSync("tar", ["-tvzf", archive], { encoding: "utf8" });
  assert.equal(verboseArchiveListing.status, 0, verboseArchiveListing.stderr);
  assert.match(verboseArchiveListing.stdout, /work\/emmy-runner\/src -> \.\.\/\.\.\/\.\.\/\.\.\/\.\.\/emmy-runner\/src/);

  runBuild("fixture-fail", "failed", false);
  const failedRun = path.join(fixtureRoot, "build", "failed", "current");
  assertSourceLink(failedRun, "emmy-runner/src");
  assert.equal(existsSync(path.join(failedRun, "work", "emmy-runner", ".shadow-cljs")), false);
  assert.equal(
    lstatSync(path.join(failedRun, "work", "emmy-runner", "public", "generated")).isDirectory(),
    true,
  );
  assert.equal(readFileSync(path.join(fixtureRoot, "typ", "main.typ"), "utf8"), "Main reuse\n");
  assert.equal(
    readFileSync(path.join(fixtureRoot, "emmy-runner", "public", "generated", "chapter001", "001.cljs"), "utf8"),
    "(+ 1 2) ;; reuse\n",
  );

  const rollbackRoot = path.join(fixtureRoot, "rollback-case");
  const rollbackArtifacts = path.join(rollbackRoot, "artifacts");
  mkdirSync(path.join(rollbackRoot, "codeblocks"), { recursive: true });
  writeFileSync(path.join(rollbackRoot, "codeblocks", "value"), "old\n");
  mkdirSync(path.join(rollbackArtifacts, "codeblocks"), { recursive: true });
  writeFileSync(path.join(rollbackArtifacts, "codeblocks", "value"), "new\n");
  mkdirSync(path.join(rollbackArtifacts, "emmy-generated"), { recursive: true });
  writeFileSync(path.join(rollbackArtifacts, "emmy-generated", "blocks.json"), "[]\n");
  writeFileSync(path.join(rollbackRoot, "emmy-runner"), "blocks destination parent\n");
  assert.throws(() => syncBuildToRoot({
    root: rollbackRoot,
    artifactsDir: rollbackArtifacts,
  }));
  assert.equal(readFileSync(path.join(rollbackRoot, "codeblocks", "value"), "utf8"), "old\n");

  console.log("Build retention and root synchronization passed.");
} finally {
  rmSync(fixtureRoot, { recursive: true, force: true });
}
