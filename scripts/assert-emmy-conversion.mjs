#!/usr/bin/env node

import { existsSync, readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import path from "node:path";

const root = process.cwd();
const manifestPath = path.join(root, "emmy-runner", "public", "generated", "manifest.json");
if (!existsSync(manifestPath)) {
  throw new Error("Missing Emmy manifest. Run node scripts/convert-scheme-to-emmy.mjs first.");
}

const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
const converterSource = readFileSync(
  path.join(root, "scripts", "convert-scheme-to-emmy.mjs"),
  "utf8",
);
const formatterSource = readFileSync(
  path.join(root, "scripts", "clojure", "fdg", "format_emmy.clj"),
  "utf8",
);
if (!formatterSource.includes(':width 120')
    || !formatterSource.includes('zprint-file-str code "emmy.cljs" options')) {
  throw new Error("The Emmy formatter must pass its 120-column options to zprint");
}
if (!converterSource.includes('node.items.map(render).join(" ")')
    || converterSource.includes("flat.length <= 92")
    || converterSource.includes('join(`\\n${indent}`)')) {
  throw new Error("Scheme-to-Emmy translation must emit flat forms and leave layout to zprint");
}
if (!converterSource.includes("code.matchAll(/\\(defn?\\s+")) {
  throw new Error("Emmy definition discovery must not depend on forms starting on new lines");
}
if (!converterSource.includes('const ratio = node.value.match(/^(-?\\d+)\\/(\\d+)$/)')
    || !converterSource.includes('function rewriteNumericRatios(source)')) {
  throw new Error("Scheme numeric ratios must be converted to explicit Emmy division");
}
if (!converterSource.includes("const explicitSimplifyIds = new Set([")
    || !converterSource.includes("function ensureExplicitSimplify(source, id)")) {
  throw new Error("Reviewed scmutils result blocks must receive explicit Emmy simplification");
}
if (!converterSource.includes('id === "appendix_a-013"')
    || !converterSource.includes('(* (bigint n) (factorial (- n 1)))')) {
  throw new Error("The book's recursive factorial must retain exact integer arithmetic in ClojureScript");
}
if (!converterSource.includes('id === "appendix_a-015"')
    || !converterSource.includes("(let [pi 'pi]")) {
  throw new Error("Appendix A's common pi factor must cancel symbolically before numerical evaluation");
}
execFileSync(
  "clojure",
  ["-M:format-emmy", "--check", "emmy/blocks", "emmy-runner/public/generated"],
  { cwd: root, stdio: "inherit" },
);
const ids = new Set();
for (const block of manifest) {
  if (ids.has(block.id)) throw new Error(`Duplicate block ID: ${block.id}`);
  ids.add(block.id);
  const ordinal = String(block.ordinal).padStart(3, "0");
  const editable = path.join(root, "emmy", "blocks", block.chapter, `${ordinal}.cljs`);
  const source = path.join(root, "emmy", "blocks", block.chapter, `${ordinal}.scm`);
  const served = path.join(root, "emmy-runner", "public", block.codePath);
  for (const file of [editable, source, served]) {
    if (!existsSync(file)) throw new Error(`${block.id} references missing file ${file}`);
  }
  if (readFileSync(editable, "utf8") !== readFileSync(served, "utf8")) {
    throw new Error(`${block.id} browser copy differs from its editable ClojureScript block`);
  }
  if (!Array.isArray(block.definitions)) {
    throw new Error(`${block.id} is missing top-level definition metadata`);
  }
}

for (const expected of ["Lagrange-equations", "F->C"]) {
  if (!manifest.some(block => block.definitions.includes(expected))) {
    throw new Error(`Manifest did not record the book definition ${expected}`);
  }
}

const chapter1 = manifest.filter(block => block.chapter === "chapter001");
if (chapter1.length !== 22) {
  throw new Error("Expected all 22 Chapter 1 blocks to be seeded from the upstream Clojure port");
}
const firstChapterBlock = readFileSync(path.join(root, "emmy", "blocks", "chapter001", "001.cljs"), "utf8");
if (firstChapterBlock.includes("(ns ") || !firstChapterBlock.includes("define-coordinates")) {
  throw new Error("Chapter 1 setup must use the runner's Emmy session namespace");
}
const chapter6Source = readFileSync(path.join(root, "emmy", "blocks", "chapter006", "002.scm"), "utf8");
const chapter6Port = readFileSync(path.join(root, "emmy", "blocks", "chapter006", "002.cljs"), "utf8");
if (chapter6Source.includes("(make fake-vector-field")
    || !chapter6Source.includes("(make-fake-vector-field V-over-mu n)")
    || !chapter6Port.includes("(make-fake-vector-field V-over-mu n)")) {
  throw new Error("Org normalization must repair the Chapter 6 make-fake-vector-field call before Emmy conversion");
}
const runnerSource = readFileSync(path.join(root, "emmy-runner", "src", "fdg", "runner.cljs"), "utf8");
for (const message of ["No output was produced.", "Result:\\n"]) {
  if (!runnerSource.includes(message)) {
    throw new Error(`The web runner is missing its result-state message: ${message}`);
  }
}
const newtonMetric = readFileSync(path.join(root, "emmy", "blocks", "chapter009", "019.cljs"), "utf8");
if (!newtonMetric.includes("(letfn") || newtonMetric.includes("''c")) {
  throw new Error("Nested Scheme definitions must stay lexical and quoted constants must not be double-quoted");
}
const appendixVector = manifest.find(block => block.id === "appendix_a-025");
if (!appendixVector?.capturesResult) {
  throw new Error("A trailing bare-symbol expression must be captured after definitions");
}
for (const block of manifest) {
  const ordinal = String(block.ordinal).padStart(3, "0");
  const code = readFileSync(path.join(root, "emmy", "blocks", block.chapter, `${ordinal}.cljs`), "utf8");
  if (/^;; FDG Emmy block|^;; source-sha256:|^;; status:/m.test(code)) {
    throw new Error(`${block.id} contains generated metadata comments`);
  }
  const captured = code.match(/\n;; =>[^]*$/);
  if (captured && !/^\n;; =>[^\n]*(?:\n;;    [^\n]*)*\n?$/.test(captured[0])) {
    throw new Error(`${block.id} has a malformed captured ClojureScript result`);
  }
  if (block.capturesResult !== Boolean(captured)) {
    throw new Error(
      `${block.id} capture metadata disagrees with its ClojureScript output comment`,
    );
  }
}

console.log(`Emmy conversion manifest is consistent (${manifest.length} blocks).`);
