#!/usr/bin/env node

import { spawn } from "node:child_process";
import { existsSync, readdirSync, readFileSync, renameSync, statSync, writeFileSync } from "node:fs";
import { availableParallelism } from "node:os";
import path from "node:path";

const root = process.cwd();
const args = process.argv.slice(2);
const localRaco = path.join(root, ".tools", "racket", "bin", "raco");
const formatter = process.env.SCHEME_FORMATTER || (existsSync(localRaco) ? localRaco : "raco");
// raco fmt passes this value to dynamic-require, which accepts a relative
// module-path string but not an absolute-path string.
const formatterConfig = path.join("scripts", "fdg-scheme-fmt.rkt");
let check = false;
let width = "72";
let jobs = Number.parseInt(process.env.SCHEME_FORMAT_JOBS || availableParallelism(), 10);
const requestedPaths = [];
const skippedBlocks = [];

for (let index = 0; index < args.length; index += 1) {
  const arg = args[index];
  if (arg === "--check") {
    check = true;
  } else if (arg === "--width") {
    width = args[++index];
    if (!width || !/^\d+$/.test(width)) {
      throw new Error("--width must be followed by a non-negative integer");
    }
  } else if (arg === "--jobs" || arg === "-j") {
    jobs = Number.parseInt(args[++index], 10);
    if (!Number.isInteger(jobs) || jobs < 1) {
      throw new Error("--jobs must be followed by a positive integer");
    }
  } else if (arg === "--help" || arg === "-h") {
    console.log(`Usage: scripts/format-scheme-blocks.mjs [--check] [--width N] [--jobs N] [PATH ...]

Formats every fenced Scheme block in the selected .typ files with raco fmt.
PATH defaults to typ/. In normal mode files are replaced atomically; --check
only reports files that would change. Files are processed in parallel.`);
    process.exit(0);
  } else if (arg.startsWith("-")) {
    throw new Error(`unknown option: ${arg}`);
  } else {
    requestedPaths.push(arg);
  }
}

function typFiles(entry) {
  const absolute = path.resolve(root, entry);
  if (!statSync(absolute).isDirectory()) {
    return absolute.endsWith(".typ") ? [absolute] : [];
  }

  return readdirSync(absolute, { withFileTypes: true })
    .flatMap(item => typFiles(path.join(absolute, item.name)))
    .sort();
}

function runFormatter(code) {
  const formatterArgs = path.basename(formatter) === "raco"
    ? ["fmt", "--width", width, "--config", formatterConfig]
    : [];
  return new Promise((resolve, reject) => {
    const child = spawn(formatter, formatterArgs, {
      env: {
        ...process.env,
        PLTUSERHOME: path.join(root, ".tools", "racket-user"),
      },
      stdio: ["pipe", "pipe", "pipe"],
    });
    const stdout = [];
    const stderr = [];

    child.stdout.on("data", chunk => stdout.push(chunk));
    child.stderr.on("data", chunk => stderr.push(chunk));
    child.on("error", reject);
    child.on("close", exitCode => {
      const output = Buffer.concat(stdout).toString("utf8");
      const detail = Buffer.concat(stderr).toString("utf8");
      if (exitCode === 0) resolve(output);
      else reject(Object.assign(new Error(`formatter exited with status ${exitCode}`), { stderr: detail }));
    });
    child.stdin.end(code);
  });
}

async function formatScheme(code, file, blockNumber) {
  try {
    const formatted = (await runFormatter(code)).replace(/\n*$/, "\n");

    // This expression is laid out to expose the 3x3 submatrix operation. The
    // generic formatter treats its arguments as an ordinary procedure call
    // and destroys that visual structure.
    if (formatted.includes("geodesic-equation+X-residuals") && formatted.startsWith("(determinant")) {
      return `(determinant
 (submatrix (((* (partial 1) (partial 0))
              geodesic-equation+X-residuals)
             0
             (up 0 0 0))
            0 3 0 3))
`;
    }

    return formatted;
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error(
        `${formatter} was not found. Run \`make install-racket-fmt\`, or set SCHEME_FORMATTER to a stdin/stdout-compatible formatter.`,
      );
    }
    const detail = error.stderr?.toString().trim();
    skippedBlocks.push({
      blockNumber,
      file: path.relative(root, file),
      reason: detail?.split("\n")[0] || "formatter exited unsuccessfully",
    });
    return code;
  }
}

const files = [...new Set((requestedPaths.length ? requestedPaths : ["typ"]).flatMap(typFiles))];
let blockCount = 0;
const changedFiles = [];
const fencePattern = /^(```scheme[ \t]*\r?\n)([\s\S]*?)^(```)(?=[ \t]*(?:\]|$))/gm;

async function formatFile(file) {
  const source = readFileSync(file, "utf8");
  const matches = [...source.matchAll(fencePattern)];
  const output = [];
  let cursor = 0;

  for (const [index, match] of matches.entries()) {
    const [block, opening, code, closing] = match;
    output.push(source.slice(cursor, match.index));
    output.push(`${opening}${await formatScheme(code, file, index + 1)}${closing}`);
    cursor = match.index + block.length;
  }
  output.push(source.slice(cursor));
  blockCount += matches.length;
  const formatted = output.join("");

  if (formatted !== source) {
    changedFiles.push(path.relative(root, file));
    if (!check) {
      const temporary = `${file}.scheme-format-${process.pid}`;
      writeFileSync(temporary, formatted);
      renameSync(temporary, file);
    }
  }
}

let nextFile = 0;
async function worker() {
  while (nextFile < files.length) {
    const file = files[nextFile];
    nextFile += 1;
    await formatFile(file);
  }
}

await Promise.all(Array.from({ length: Math.min(jobs, files.length) }, worker));
changedFiles.sort();
skippedBlocks.sort((left, right) => left.file.localeCompare(right.file) || left.blockNumber - right.blockNumber);

if (check && changedFiles.length) {
  console.error(`Scheme formatting differs in:\n${changedFiles.map(file => `  ${file}`).join("\n")}`);
  process.exitCode = 1;
} else {
  console.log(
    `${check ? "Checked" : "Formatted"} ${blockCount} Scheme blocks in ${files.length} .typ files${changedFiles.length ? `; ${changedFiles.length} files ${check ? "would change" : "changed"}` : "; no changes"}.`,
  );
}

if (skippedBlocks.length) {
  console.warn(
    `Preserved ${skippedBlocks.length} non-parseable Scheme blocks:\n${skippedBlocks
      .map(({ file, blockNumber, reason }) => `  ${file}:${blockNumber}: ${reason}`)
      .join("\n")}`,
  );
}
