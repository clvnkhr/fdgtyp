#!/usr/bin/env node

import { appendFileSync } from "node:fs";
import { spawnSync } from "node:child_process";

const startedAt = new Date();
const started = process.hrtime.bigint();
const shell = process.env.FDG_REAL_SHELL || "/bin/sh";
const result = spawnSync(shell, process.argv.slice(2), { stdio: "inherit" });
const elapsedMs = Number(process.hrtime.bigint() - started) / 1e6;
const commandIndex = process.argv.indexOf("-c");
const command = (commandIndex >= 0 ? process.argv[commandIndex + 1] : process.argv.slice(2).join(" "))
  .replace(/\s+/g, " ")
  .trim();
const status = result.error ? "error" : (result.status === 0 ? "ok" : `exit ${result.status}`);
const timing = `[make-step] ${startedAt.toISOString()} ${elapsedMs.toFixed(1)} ms (${status}) ${command}\n`;

if (process.env.FDG_BUILD_LOG) appendFileSync(process.env.FDG_BUILD_LOG, timing);
if (result.error) {
  console.error(result.error.message);
  process.exitCode = 1;
} else if (result.signal) {
  process.kill(process.pid, result.signal);
} else {
  process.exitCode = result.status ?? 1;
}
