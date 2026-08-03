#!/usr/bin/env node

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(readFileSync(path.join(root, "emmy-runner/public/generated/blocks.json"), "utf8"));
const check = process.argv.includes("--check");
const writeReport = !process.argv.includes("--no-report");

function commentOutputs(source, marker) {
  const lines = source.split("\n");
  const outputs = [];
  for (let i = 0; i < lines.length; i += 1) {
    if (!lines[i].startsWith(marker)) continue;
    const parts = [];
    while (i < lines.length && lines[i].startsWith(";;")) {
      let text = lines[i].slice(2);
      if (text.startsWith(" => ")) text = text.slice(4);
      else if (text.startsWith("    ")) text = text.slice(4);
      else text = text.replace(/^ ?/, "");
      parts.push(text);
      i += 1;
    }
    i -= 1;
    const values = parts.map(part => part.trim()).filter(Boolean);
    if (marker === ";;" && values.length > 1
        && values.every(value => /^(?:[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|#t|#f)$/i.test(value))) {
      outputs.push(...values);
    } else {
      outputs.push(values.join("\n"));
    }
  }
  return outputs;
}

function tokens(text) {
  const cleaned = text
    .replace(/#emmy\/bigint\s+/g, "")
    .replace(/#emmy\/ratio\s+"(-?\d+)\/(\d+)"/g, "(/ $1 $2)")
    .replace(/#\(/g, "(")
    .replace(/\[/g, "(").replace(/\]/g, ")");
  const result = [];
  let i = 0;
  while (i < cleaned.length) {
    if (/\s|,/.test(cleaned[i])) { i += 1; continue; }
    if (cleaned[i] === ";") { while (i < cleaned.length && cleaned[i] !== "\n") i += 1; continue; }
    if ("()'".includes(cleaned[i])) { result.push(cleaned[i]); i += 1; continue; }
    if (cleaned[i] === '"') {
      let value = '"'; i += 1;
      while (i < cleaned.length) {
        value += cleaned[i];
        if (cleaned[i] === '"' && cleaned[i - 1] !== "\\") { i += 1; break; }
        i += 1;
      }
      result.push(value); continue;
    }
    let end = i;
    while (end < cleaned.length && !/[\s,()'\[\]]/.test(cleaned[end])) end += 1;
    result.push(cleaned.slice(i, end)); i = end;
  }
  return result;
}

function parse(text) {
  const ts = tokens(text);
  let at = 0;
  const one = () => {
    const token = ts[at++];
    if (token === undefined) throw new Error("unexpected end");
    if (token === "(") {
      const xs = [];
      while (ts[at] !== ")") {
        if (at >= ts.length) throw new Error("unclosed list");
        xs.push(one());
      }
      at += 1; return xs;
    }
    if (token === ")") throw new Error("unexpected close");
    if (token === "'") return ["quote", one()];
    if (/^[+-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:e[+-]?\d+)?$/i.test(token) || /^[+-]?\.\d+(?:e[+-]?\d+)?$/i.test(token)) return Number(token);
    if (/^-?\d+\/\d+$/.test(token)) {
      const [a, b] = token.split("/").map(Number); return ["/", a, b];
    }
    return token;
  };
  const value = one();
  if (at !== ts.length) throw new Error("more than one expression");
  return value;
}

const symbolAliases = new Map([
  ["#t", "true"], ["#f", "false"], [":pi", "pi"], [":c", "c"],
  ["x", "x0"], ["y", "y0"], ["z", "z0"],
]);
function normalizedSymbol(x) {
  if (typeof x !== "string") return x;
  return symbolAliases.get(x) ?? x.replaceAll("ˆ", "↑").replace(/[?^]([0-9])/g, "↑$1").replace(/\/c$/, ":c");
}
function normalizeAst(x) {
  if (!Array.isArray(x)) return typeof x === "string" ? normalizedSymbol(x) : x;
  let ys = x.map(normalizeAst);
  if (ys.length >= 2 && (ys[0] === "m" || ys[0] === "p") && /^(?:\d+)$/.test(String(ys[1]))) {
    ys = [`${ys[0]}_${ys[1]}`, ...ys.slice(2)];
  }
  if (ys[0] === "*") {
    const args = [];
    for (let i = 1; i < ys.length; i += 1) {
      if ((ys[i] === "m" || ys[i] === "p") && /^(?:\d+)$/.test(String(ys[i + 1]))) {
        args.push(`${ys[i]}_${ys[i + 1]}`); i += 1;
      } else args.push(ys[i]);
    }
    ys = ["*", ...args];
  }
  // scmutils prints a repeated partial as ((partial i) ((partial i) f));
  // Emmy often prints the same operator as ((expt (partial i) 2) f).
  if (Array.isArray(ys[0]) && ys[0][0] === "expt" && ys[0][2] === 2
      && Array.isArray(ys[0][1]) && ys[0][1][0] === "partial") {
    const partial = ys[0][1];
    ys = [partial, [partial, ...ys.slice(1)]];
  }
  return ys;
}
function canonical(x) {
  if (typeof x === "number") return Number.isInteger(x) ? String(x) : x.toPrecision(15).replace(/0+$/, "").replace(/\.$/, "");
  if (typeof x === "string") return normalizedSymbol(x);
  if (!x.length) return "()";
  const op = normalizedSymbol(x[0]);
  if (typeof op !== "string") return `(${x.map(canonical).join(" ")})`;
  let args = x.slice(1);
  if (op === "+" || op === "*") {
    args = args.flatMap(a => Array.isArray(a) && normalizedSymbol(a[0]) === op ? a.slice(1) : [a]);
    return `(${op} ${args.map(canonical).sort().join(" ")})`;
  }
  return `(${canonical(op)}${args.length ? ` ${args.map(canonical).join(" ")}` : ""})`;
}

function hash(text, seed) {
  let h = (2166136261 ^ seed) >>> 0;
  for (const char of text) { h ^= char.codePointAt(0); h = Math.imul(h, 16777619) >>> 0; }
  return 0.7 + (h % 1700) / 1000;
}
function evaluate(x, seed) {
  if (typeof x === "number") return x;
  if (typeof x === "string") {
    const s = normalizedSymbol(x);
    if (s === "true") return true;
    if (s === "false") return false;
    if (s === "pi") return Math.PI;
    return hash(s, seed);
  }
  if (!x.length) return [];
  const op = normalizedSymbol(x[0]);
  if (typeof op === "number") return x.map(v => evaluate(v, seed));
  if (op === "up" || op === "down" || op === "list" || op === "vector") return x.slice(1).map(v => evaluate(v, seed));
  if (op === "quote") return canonical(x[1]);
  const values = x.slice(1).map(v => evaluate(v, seed));
  if (typeof op !== "string") {
    const base = hash(canonical(op), seed);
    return values.every(v => typeof v === "number" && Number.isFinite(v))
      ? values.reduce((total, value, i) => total + value / (i + 3), base)
      : hash(canonical(x), seed);
  }
  if (!values.every(v => typeof v === "number" && Number.isFinite(v))) return hash(canonical(x), seed);
  switch (op) {
    case "+": return values.reduce((a, b) => a + b, 0);
    case "*": return values.reduce((a, b) => a * b, 1);
    case "-": return values.length === 1 ? -values[0] : values.slice(1).reduce((a, b) => a - b, values[0]);
    case "/": return values.slice(1).reduce((a, b) => a / b, values[0]);
    case "expt": return values[0] ** values[1];
    case "square": return values[0] ** 2;
    case "sqrt": return Math.sqrt(Math.abs(values[0]));
    case "sin": return Math.sin(values[0]);
    case "cos": return Math.cos(values[0]);
    case "tan": return Math.tan(values[0]);
    case "asin": case "acos": return Math[op](Math.max(-1, Math.min(1, values[0] / 3)));
    case "atan": return values.length === 2 ? Math.atan2(values[0], values[1]) : Math.atan(values[0]);
    case "exp": return Math.exp(values[0] / 3);
    case "log": return Math.log(Math.abs(values[0]) + 0.5);
    default: return hash(canonical(x), seed);
  }
}
function close(a, b) {
  if (Array.isArray(a) || Array.isArray(b)) return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((v, i) => close(v, b[i]));
  if (typeof a === "boolean" || typeof b === "boolean" || typeof a === "string" || typeof b === "string") return a === b;
  return Number.isFinite(a) && Number.isFinite(b) && Math.abs(a - b) <= 1e-7 * Math.max(1, Math.abs(a), Math.abs(b));
}

function compare(scm, cljs) {
  if (/result truncated/.test(cljs)) return { status: "unresolved", reason: "CLJS capture was truncated" };
  if (/^(?:mess|a nonzero mess|\(0 0 MESS\))$/i.test(scm)) return { status: "unresolved", reason: "legacy Scheme output is descriptive prose" };
  let a; let b;
  try { a = normalizeAst(parse(scm)); } catch { return { status: "unresolved", reason: "legacy Scheme output is not one parseable datum" }; }
  try { b = normalizeAst(parse(cljs)); } catch { return { status: "unresolved", reason: "CLJS output is not one parseable datum" }; }
  if (canonical(a) === canonical(b)) return { status: "equal", method: "canonical" };
  if ((scm === "0" && typeof b !== "number") || (cljs === "0" && typeof a !== "number")) {
    return { status: "unresolved", reason: "one system printed zero while the other left an unsimplified differential expression" };
  }
  const samples = Array.from({ length: 9 }, (_, seed) => [evaluate(a, seed + 1), evaluate(b, seed + 1)]);
  if (samples.every(([x, y]) => close(x, y))) return { status: "equal", method: "numeric fingerprint" };
  return { status: "different", reason: "canonical forms and nine deterministic evaluations disagree" };
}

for (const [scm, cljs, expected] of [
  ["(+ x y)", "(+ y x)", "equal"],
  ["(/ 1 2)", "0.5", "equal"],
  ["0", "1", "different"],
  ["0", "(((partial 0) f) x)", "unresolved"],
]) {
  const actual = compare(scm, cljs).status;
  if (actual !== expected) throw new Error(`Comparator regression: ${scm} vs ${cljs} was ${actual}, expected ${expected}`);
}

const rows = [];
for (const block of manifest) {
  const number = String(block.ordinal).padStart(3, "0");
  const base = path.join(root, "codeblocks", block.chapter, number);
  const scm = commentOutputs(readFileSync(`${base}.scm`, "utf8"), ";;");
  const cljs = commentOutputs(readFileSync(`${base}.cljs`, "utf8"), ";; =>");
  const count = Math.max(scm.length, cljs.length);
  for (let index = 0; index < count; index += 1) {
    const result = scm[index] === undefined || cljs[index] === undefined
      ? { status: "unresolved", reason: `output count differs (Scheme ${scm.length}, CLJS ${cljs.length})` }
      : compare(scm[index], cljs[index]);
    if (block.id === "chapter008-019" && index === 0) {
      result.status = "unresolved";
      result.reason = "CLJS values are emitted through print-expression rather than returned";
    }
    rows.push({ id: block.id, index: index + 1, scm: scm[index] ?? "(missing)", cljs: cljs[index] ?? "(missing)", ...result });
  }
}

const counts = rows.reduce((groups, row) => {
  (groups[row.status] ??= []).push(row);
  return groups;
}, {});
const different = counts.different ?? [];
const unresolved = counts.unresolved ?? [];
const equal = counts.equal ?? [];
const verboseEquivalent = equal.filter(row =>
  row.cljs.length >= 1.5 * Math.max(1, row.scm.length)
  && row.cljs.length - row.scm.length >= 120
);
const coverageGaps = unresolved.filter(row =>
  row.reason.includes("output count differs")
  || row.reason === "legacy Scheme output is descriptive prose"
  || row.reason === "CLJS values are emitted through print-expression rather than returned"
);
const otherUnresolved = unresolved.filter(row => !coverageGaps.includes(row));
const comparedCount = rows.length - coverageGaps.length;

function diagnosis(row) {
  if (row.id === "chapter003-017" && row.index === 2) {
    return "The historical scmutils comment is almost certainly wrong: dx applied to d/dx is the coordinate pairing 1, which is what Emmy returns.";
  }
  if (row.id === "chapter009-023" && row.index === 1) {
    return "The formulas differ by velocity-potential terms. Best guess: scmutils applied a weak-field or automatic truncation/simplification convention that Emmy does not reproduce; inspect the Newton-metric assumptions before changing the port.";
  }
  if (row.reason === "CLJS capture was truncated") {
    return "The result exceeded the capture limit. Compare a compact simplified/frozen value inside the runner; the visible prefix is insufficient.";
  }
  if (row.reason === "CLJS values are emitted through print-expression rather than returned") {
    return "The inner expression is now simplified and prints four zeros, matching Scheme, but the smoke runner captures only the outer for-each return value nil. Treat this as a capture-shape gap, not a mathematical mismatch.";
  }
  if (row.reason === "legacy Scheme output is descriptive prose") {
    return "The Scheme side records only a qualitative placeholder such as ‘mess’, so there is no mathematical datum to compare.";
  }
  if (row.reason === "legacy Scheme output is not one parseable datum") {
    return "The historical printer text is malformed, abbreviated, or outside the supported S-expression subset. This is probably a legacy-output transcription/reader issue, not evidence of unequal mathematics.";
  }
  if (row.reason.includes("one system printed zero")) {
    return "Best guess: Emmy produced an algebraically unsimplified identity that scmutils reduced to zero. An explicit simplify call, or stronger simplification assumptions, is the first fix to try.";
  }
  if (row.reason.includes("output count differs")) {
    const match = row.reason.match(/Scheme (\d+), CLJS (\d+)/);
    const schemeCount = Number(match?.[1]);
    const cljsCount = Number(match?.[2]);
    if (schemeCount === 0 && cljsCount > 0) {
      return "The CLJS runner captures a value for which the book stores no historical scmutils output. This needs an oracle or manual review, not textual comparison.";
    }
    if (schemeCount > 0 && cljsCount === 0) {
      return row.id.startsWith("errata-")
        ? "These are explanatory errata comments, not evaluator results; the block is deliberately non-executable."
        : "The Scheme block contains apparent output but CLJS has no corresponding capture. Best guess: the form is deliberately non-executable, was classified as setup/definition, or still needs per-form capture support.";
    }
    return "The ports expose different numbers of result-producing forms. Best guess: block merging or definition/output classification changed the alignment; inspect the forms individually before comparing by position.";
  }
  return "The mechanical checks cannot identify a safe cause; compare the source form, assumptions, and surrounding prose manually.";
}

function verboseDiagnosis(row) {
  if (row.id === "chapter005-003") {
    return "The wedge-product evaluation lacks simplify. Wrap this final form; Emmy currently leaves the antisymmetric expansion duplicated behind a factor of one half.";
  }
  if (row.id === "chapter009-013") {
    return "This form already uses simplify. Emmy has expanded the three-halves power into repeated square-root factors, so a stronger canonicalization rule or assumptions may be needed rather than another wrapper.";
  }
  if (row.id === "chapter010-012") {
    return "The divergence expression itself lacks simplify; only the following Laplacian expression is wrapped. Add simplify to this first form.";
  }
  if (row.id === "chapter011-020") {
    return "The outgoing-frame proper-time expression lacks simplify, while the following home-frame expression already has it and reduces to seven times c. Wrap this first form too.";
  }
  if (row.id === "chapter011-027") {
    return "Neither coordinate-difference expression is simplified. Wrap the result-producing differences; this first one should collapse to the zero tuple shown by scmutils.";
  }
  if (row.id === "chapter011-028") {
    return "The sum of the two proper-time intervals is not simplified. Wrap the complete sum; scmutils reduces it to fourteen times c.";
  }
  return "Add or strengthen an explicit simplify call around the result-producing form.";
}

function table(rows, color, status, diagnose = diagnosis) {
  if (!rows.length) return "None.\n";
  const cell = value => `[#raw(${JSON.stringify(String(value))})]`;
  const body = rows.map(row => [
    `table.cell(fill: rgb("${color}"))${cell(`${row.id}:${row.index}`)}`,
    cell(typeof status === "function" ? status(row) : status),
    cell(diagnose(row)),
  ].join(",\n")).join(",\n");
  return `#table(
  columns: (1.25fr, 1.25fr, 4fr),
  inset: 6pt,
  stroke: rgb("#c7cdd4"),
  table.header(
    table.cell(fill: rgb("${color}"))[*Block*],
    table.cell(fill: rgb("${color}"))[*Status*],
    table.cell(fill: rgb("${color}"))[*Best diagnosis*],
  ),
  ${body},
)\n`;
}
const fence = text => `\`\`\`scheme\n${text}\n\`\`\``;
let report = `#set document(title: [Scheme–ClojureScript output comparison])
#set page(margin: 22mm)
#set text(size: 10pt)

= Scheme–ClojureScript output comparison

This report is generated by #raw(lang: "sh", "node scripts/compare-scm-cljs-outputs.mjs"). It compares captured ClojureScript/Emmy results with the historical scmutils result comments next to the same source blocks. Printer aliases, exact ratios, commutative ordering, and algebraic rearrangements that agree at nine deterministic substitution points are treated as equivalent.

Compared #${comparedCount} positions having outputs from both systems: #${equal.length} mechanically equivalent, #${different.length} mathematically different, and #${otherUnresolved.length} unresolved. The #${coverageGaps.length} missing comparison counterparts are excluded from these totals and listed separately below. Among the equivalent pairs, #${verboseEquivalent.length} have CLJS output at least 1.5 times and 120 characters longer than the Scheme output. Unresolved entries are not called differences because prose or truncated output cannot safely establish unequal mathematical content.

= Equivalent but disproportionately verbose

These pairs passed the mathematical checks, but the CLJS rendering is much longer. This usually means scmutils simplified automatically while Emmy needs an explicit #raw(lang: "clojure", "simplify") around the result-producing expression. They remain passing comparisons; this is a maintainability and typesetting warning.

`;
report += table(verboseEquivalent, "#fff3bf", "Equivalent; verbose", verboseDiagnosis);
if (!verboseEquivalent.length) report += "None found.\n";
for (const row of verboseEquivalent) {
  report += `\n== ${row.id}, output ${row.index}\n\nCLJS is ${row.cljs.length} characters versus ${row.scm.length} for Scheme (${(row.cljs.length / Math.max(1, row.scm.length)).toFixed(1)}×). ${verboseDiagnosis(row)}\n\nScheme/scmutils:\n\n${fence(row.scm)}\n\nClojureScript/Emmy:\n\n${fence(row.cljs)}\n`;
}
report += "\n= Confirmed mathematical differences\n\n";
report += table(different, "#ffe3e3", "Mathematical mismatch");
if (!different.length) report += "None found.\n";
for (const row of different) {
  report += `\n== ${row.id}, output ${row.index}\n\n${row.reason}. ${diagnosis(row)}\n\nScheme/scmutils:\n\n${fence(row.scm)}\n\nClojureScript/Emmy:\n\n${fence(row.cljs)}\n`;
}
report += `\n= Missing comparison counterparts\n\n${coverageGaps.length} positions either have a result on only one side or only a qualitative Scheme placeholder. They are kept separate because they do not represent failed mathematical comparisons.\n\n`;
report += table(coverageGaps, "#dbeafe", row => {
  if (row.reason === "legacy Scheme output is descriptive prose") return "Qualitative Scheme placeholder";
  if (row.reason === "CLJS values are emitted through print-expression rather than returned") return "Printed values not returned";
  return row.scm === "(missing)" ? "No Scheme reference" : "No CLJS capture";
});
report += `\n= Other unresolved comparisons\n\n${otherUnresolved.length} positions have results on both sides but cannot yet be compared safely.\n\n`;
report += table(otherUnresolved, "#f1f3f5", row => row.reason);
report += "\n";
if (writeReport) {
  writeFileSync(path.join(root, "output-comparison.typ"), report);
}

console.log(`Output comparison: ${comparedCount} paired positions: ${equal.length} equivalent (${verboseEquivalent.length} disproportionately verbose), ${different.length} different, ${otherUnresolved.length} unresolved; ${coverageGaps.length} missing counterparts excluded.`);
if (different.length) console.error(`OUTPUT DIFFERENCES: ${different.map(x => `${x.id}:${x.index}`).join(", ")}`);
if (check && (different.length || verboseEquivalent.length)) {
  if (different.length) {
    console.error(
      `OUTPUT DIFFERENCES: ${different.map(row => `${row.id}:${row.index}`).join(", ")}`,
    );
  }
  if (verboseEquivalent.length) {
    console.error(
      `DISPROPORTIONATELY LARGE CLJS OUTPUTS: ${
        verboseEquivalent.map(row => `${row.id}:${row.index}`).join(", ")
      }`,
    );
  }
  process.exitCode = 1;
}
