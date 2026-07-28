#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const runnerDir = path.join(root, "emmy-runner");
const manifest = JSON.parse(
  readFileSync(path.join(runnerDir, "public", "generated", "blocks.json"), "utf8"),
);
const chapters = [...new Set(manifest.map(block => block.chapter))];
const timeoutArgument = process.argv.find(argument => argument.startsWith("--timeout-ms="));
const timeoutMs = Number(timeoutArgument?.slice("--timeout-ms=".length)
  ?? process.env.EMMY_CHAPTER_TIMEOUT_MS
  ?? 120_000);
const verbose = process.argv.includes("--verbose");

if (!Number.isFinite(timeoutMs) || timeoutMs <= 0) {
  throw new Error(`Invalid Emmy chapter timeout: ${timeoutMs}`);
}

const failures = [];
for (const chapter of chapters) {
  const started = Date.now();
  console.log(`\nEMMY CHAPTER: ${chapter} (timeout ${timeoutMs / 1000}s)`);
  const result = spawnSync(
    process.execPath,
    ["target/smoke.js", "--capture-results", `--chapter=${chapter}`,
      ...(verbose ? ["--verbose"] : [])],
    { cwd: runnerDir, stdio: "inherit", timeout: timeoutMs },
  );
  const elapsed = ((Date.now() - started) / 1000).toFixed(2);
  if (result.error?.code === "ETIMEDOUT") {
    failures.push(`${chapter}: timed out after ${elapsed}s`);
    console.error(`EMMY CHAPTER TIMED OUT: ${chapter} after ${elapsed}s`);
  } else if (result.status !== 0) {
    failures.push(`${chapter}: exited ${result.status ?? "without a status"} after ${elapsed}s`);
    console.error(`EMMY CHAPTER FAILED: ${chapter} after ${elapsed}s`);
  } else {
    console.log(`EMMY CHAPTER PASSED: ${chapter} in ${elapsed}s`);
  }
}

if (failures.length) {
  console.error(`\nEMMY RUNNER SUMMARY: ${failures.length} chapter(s) failed:`);
  for (const failure of failures) console.error(`  - ${failure}`);
  process.exitCode = 1;
} else {
  console.log(`\nEMMY RUNNER SUMMARY: all ${chapters.length} chapters passed.`);
}
