#!/usr/bin/env node

import { existsSync, readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import path from "node:path";

const root = process.cwd();
const manifestPath = path.join(root, "emmy-runner", "public", "generated", "blocks.json");
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
const boundedRunnerSource = readFileSync(
  path.join(root, "scripts", "run-emmy-smoke.mjs"),
  "utf8",
);
const smokeSource = readFileSync(
  path.join(root, "emmy-runner", "src", "fdg", "smoke.cljs"),
  "utf8",
);
const runnerSource = readFileSync(
  path.join(root, "emmy-runner", "src", "fdg", "runner.cljs"),
  "utf8",
);
const workerSource = readFileSync(
  path.join(root, "emmy-runner", "src", "fdg", "worker.cljs"),
  "utf8",
);
const outputSource = readFileSync(
  path.join(root, "emmy-runner", "src", "fdg", "output.cljs"),
  "utf8",
);
const styleSource = readFileSync(
  path.join(root, "emmy-runner", "public", "style.css"),
  "utf8",
);
const shadowConfig = readFileSync(
  path.join(root, "emmy-runner", "shadow-cljs.edn"),
  "utf8",
);
if (!formatterSource.includes(':width 100')
    || !formatterSource.includes('zprint-file-str source "emmy.cljs" options')
    || !formatterSource.includes('(defn format-source-once [source]')
    || !formatterSource.includes('(= formatted current) current')) {
  throw new Error("The Emmy formatter must pass its 100-column options to zprint");
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
if (!converterSource.includes('id === "appendix_a-015"')
    || !converterSource.includes('(* (bigint n) (factorial (- n 1)))')) {
  throw new Error("The book's recursive factorial must retain exact integer arithmetic in ClojureScript");
}
if (!converterSource.includes('id === "appendix_a-016"')
    || !converterSource.includes("(let [pi 'pi")) {
  throw new Error("Appendix A's common pi factor must cancel symbolically before numerical evaluation");
}
if (!boundedRunnerSource.includes("spawnSync(")
    || !boundedRunnerSource.includes("timeout: timeoutMs")
    || !boundedRunnerSource.includes("120_000")) {
  throw new Error("The Emmy smoke pass must isolate chapters behind a bounded watchdog");
}
if (!smokeSource.includes("(defn locate-form")
    || !smokeSource.includes("(clojure.string/join \"\\\\s+\")")) {
  throw new Error("Captured results must tolerate formatter whitespace changes");
}
if (!outputSource.includes('(if (fn? value)') || !outputSource.includes('"<function>"')) {
  throw new Error("Captured function values must not expose SCI implementation objects");
}
if (!workerSource.includes("(:backgroundSetup block)")
    || !workerSource.includes("(not (:executable block))")) {
  throw new Error("The web runner must not evaluate cached, non-executable Scheme output");
}
if (!runnerSource.includes('(remove :capturesResult)')
    || !runnerSource.includes('(definition-block? %)')
    || !workerSource.includes('(and (not selected?) (every? :capturesResult (:forms block)))')) {
  throw new Error("Run-through must replay only definition forms from blocks before the selected example");
}
if (!runnerSource.includes('fdg.emmy.runner.selection.v1')
    || !runnerSource.includes('(defn saved-selection')
    || !runnerSource.includes('(defn persist-selection!')
    || !runnerSource.includes('(defn restore-selection')
    || !runnerSource.includes('js/localStorage')) {
  throw new Error("The runner must persist and restore the selected chapter and codeblock");
}
if (!workerSource.includes('["fdg.session" "emmy.env" "fdg.compat"]')
    || !workerSource.includes('(symbol % token)')
    || !workerSource.includes('(defn runtime-type')
    || !workerSource.includes(':definition (when (= namespace "fdg.session")')
    || !workerSource.includes('(defn object-shape')
    || !workerSource.includes('(def max-definition-length 12000)')
    || !workerSource.includes('(defn discovered-definition-sources')
    || !workerSource.includes('(defn top-level-forms')) {
  throw new Error("Hover inspection must retain definitions and expose safe runtime metadata");
}
if (!runnerSource.includes('(when (:type info)')
    || !runnerSource.includes(':definition info')
    || !runnerSource.includes('definition-preview')
    || runnerSource.includes('ns-select')
    || !runnerSource.includes('namespace-panel')
    || !styleSource.includes('flex: 1 1 auto;')
    || !styleSource.includes('overflow: auto;\n  border-top: 1px solid var(--border);')
    || !styleSource.includes('overflow: hidden;\n}')
    || !styleSource.includes('.namespace-panel { flex: none;')
    || !styleSource.includes('overflow: visible;')) {
  throw new Error("The inspector must expose runtime type and user-definition source without overlapping its namespace panel");
}
if (!runnerSource.includes('(js/Worker. "worker/main.js"')
    || !runnerSource.includes('#js {:type "module"}')
    || !runnerSource.includes('(.-lineWrapping EditorView)')
    || !runnerSource.includes('(tooltips #js {:parent (.-body js/document) :position "fixed"})')
    || !runnerSource.includes(':positionInfo completion-info-position')
    || runnerSource.includes("(eval-session! @context code)")) {
  throw new Error("The runner must keep evaluation off-thread, wrap long lines, and keep editor popups outside clipping frames");
}
if (!shadowConfig.includes(":worker\n  {:target :esm\n   :runtime :custom")) {
  throw new Error("The evaluation worker must use Shadow's custom ESM runtime, not its document-dependent browser bootstrap");
}
if (runnerSource.includes("(.isConnected")) {
  throw new Error("DOM isConnected is a boolean property and must not be invoked as a function");
}
execFileSync(
  "clojure",
  ["-M:format-emmy", "--check", "codeblocks", "emmy-runner/public/generated"],
  { cwd: root, stdio: "inherit" },
);
const ids = new Set();
function capturedResultInsideForm(source) {
  let depth = 0;
  let inString = false;
  let escaped = false;
  for (const line of source.split("\n")) {
    if (/^\s*;; =>/.test(line) && depth > 0) return true;
    for (let index = 0; index < line.length; index += 1) {
      const char = line[index];
      if (inString) {
        if (escaped) escaped = false;
        else if (char === "\\") escaped = true;
        else if (char === '"') inString = false;
      } else if (char === '"') {
        inString = true;
      } else if (char === ";") {
        break;
      } else if (char === "(") {
        depth += 1;
      } else if (char === ")") {
        depth -= 1;
      }
    }
  }
  return false;
}
for (const block of manifest) {
  if (ids.has(block.id)) throw new Error(`Duplicate block ID: ${block.id}`);
  ids.add(block.id);
  const ordinal = String(block.ordinal).padStart(3, "0");
  const editable = path.join(root, "codeblocks", block.chapter, `${ordinal}.cljs`);
  const source = path.join(root, "codeblocks", block.chapter, `${ordinal}.scm`);
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

for (const id of ["chapter007-006", "chapter007-007", "chapter007-008", "chapter007-009"]) {
  const block = manifest.find(candidate => candidate.id === id);
  if (!block || block.executable !== true
      || block.prerequisiteIds.length !== 1
      || block.prerequisiteIds[0] !== "chapter007-043") {
    throw new Error(`${id} must execute after its chapter007-043 footnote setup`);
  }
  const ordinal = String(block.ordinal).padStart(3, "0");
  const cljs = readFileSync(path.join(root, "codeblocks", block.chapter, `${ordinal}.cljs`), "utf8");
  if (!/^\(simplify\s/.test(cljs)) {
    throw new Error(`${id} must explicitly simplify its differential-form identity`);
  }
}

for (const id of ["chapter007-025", "chapter008-017", "chapter009-020"]) {
  const block = manifest.find(candidate => candidate.id === id);
  if (!block?.executable || block.smokeEligible !== true) {
    throw new Error(`${id} must remain an executable smoke-tested ClojureScript example`);
  }
}
{
  const block = manifest.find(candidate => candidate.id === "chapter007-025");
  const ordinal = String(block.ordinal).padStart(3, "0");
  const cljs = readFileSync(path.join(root, "codeblocks", block.chapter, `${ordinal}.cljs`), "utf8");
  if (!/^\(simplify\s/.test(cljs)) {
    throw new Error("chapter007-025 must explicitly simplify its covariant-derivative result");
  }
}

const pseudosphereCoefficients = readFileSync(
  path.join(root, "codeblocks", "chapter008", "017.cljs"),
  "utf8",
);
if (!pseudosphereCoefficients.startsWith("(let [t 't]")) {
  throw new Error("chapter008-017 must bind its symbolic pseudosphere coordinate");
}

const newtonLaplacian = readFileSync(
  path.join(root, "codeblocks", "chapter009", "020.cljs"),
  "utf8",
);
const newtonLaplacianSource = newtonLaplacian.replace(
  /^;; =>[^\n]*(?:\n;;[^\n]*)*/gm,
  "",
);
if ((newtonLaplacianSource.match(/\(up 'x 'y 'z\)/g) ?? []).length !== 3
    || /^;;[^\n]*\(up 'x 'y 'z\)/m.test(newtonLaplacian)) {
  throw new Error("chapter009-020 must use symbolic coordinates for Emmy differentiation");
}

for (const id of ["chapter003-010", "chapter007-011", "chapter008-035", "chapter008-037", "chapter008-038"]) {
  const block = manifest.find(candidate => candidate.id === id);
  if (!block?.executable || block.smokeEligible !== false) {
    throw new Error(`${id} must remain browser-executable but excluded from deterministic smoke tests`);
  }
}

const coordinateCurvatureChecks = readFileSync(
  path.join(root, "codeblocks", "chapter008", "012.cljs"),
  "utf8",
);
const simplifyExplanation = ";; scmutils simplified this result automatically; Emmy requires an explicit call.";
if ((coordinateCurvatureChecks.match(/^\(simplify /gm) ?? []).length !== 1
    || (coordinateCurvatureChecks.match(/^\(polynomially-verified-zero /gm) ?? []).length !== 1
    || (coordinateCurvatureChecks.match(/^;; scmutils simplified/gm) ?? []).length !== 1
    || coordinateCurvatureChecks.indexOf(simplifyExplanation)
       > coordinateCurvatureChecks.indexOf("(simplify ")) {
  throw new Error("chapter008-012 must explain its two explicit verification calls once, before both checks");
}
const chapter11BaseFrame = readFileSync(
  path.join(root, "codeblocks", "chapter011", "011.cljs"),
  "utf8",
);
if (!chapter11BaseFrame.includes("(base-frame-maker 'home 'home)")
    || chapter11BaseFrame.includes("base-frame-point")
    || chapter11BaseFrame.includes("base-frame-chart")) {
  throw new Error("Chapter 11 must construct its base frame with Emmy's public base-frame-maker");
}

const chapter1 = manifest.filter(block => block.chapter === "chapter001");
if (chapter1.length !== 17) {
  throw new Error("Expected all 17 displayed Chapter 1 blocks to be extracted from Typst");
}
if (chapter1.map(block => block.ordinal).join(",") !== Array.from(
  { length: 17 },
  (_, index) => index + 1,
).join(",")) {
  throw new Error("Chapter 1 blocks must remain in display order in the runner manifest");
}
const chapter1GeodesicResidual = chapter1.find(block => block.id === "chapter001-015");
if (!chapter1GeodesicResidual?.definitions.includes("geodesic-equation-residuals")
    || chapter1GeodesicResidual.prerequisiteIds.join(",") !== "chapter001-016") {
  throw new Error("Chapter 1's geodesic residual must execute after its displayed Cartan prerequisite");
}
const chapter1Cartan = chapter1.find(block => block.id === "chapter001-016");
if (!chapter1Cartan?.definitions.includes("Cartan") || chapter1Cartan.capturesResult) {
  throw new Error("Chapter 1's Cartan block must remain a definition-only block");
}
const firstChapterBlock = readFileSync(path.join(root, "codeblocks", "chapter001", "001.cljs"), "utf8");
if (firstChapterBlock.includes("(ns ") || !firstChapterBlock.includes("defn Lfree")) {
  throw new Error("The first displayed Chapter 1 example must be the portable Lfree definition");
}
const chapter1Residual = readFileSync(
  path.join(root, "codeblocks", "chapter001", "017.cljs"),
  "utf8",
);
if (!chapter1Residual.includes("(simplify (- Lagrange-residuals")
    || chapter1Residual.includes("(simplify (down 0 0))")
    || (chapter1Residual.match(/^\(down 0 0\)$/gm) ?? []).length > 0) {
  throw new Error(
    "Chapter 1's residual expression must be simplified; its cached (down 0 0) result must not be executed",
  );
}
const chapter6Block = manifest.find(block => {
  const ordinal = String(block.ordinal).padStart(3, "0");
  return block.chapter === "chapter006"
    && readFileSync(path.join(root, "codeblocks", block.chapter, `${ordinal}.scm`), "utf8")
      .includes("make-fake-vector-field");
});
if (!chapter6Block) throw new Error("Missing Chapter 6 make-fake-vector-field block");
const chapter6Ordinal = String(chapter6Block.ordinal).padStart(3, "0");
const chapter6Source = readFileSync(path.join(root, "codeblocks", "chapter006", `${chapter6Ordinal}.scm`), "utf8");
const chapter6Port = readFileSync(path.join(root, "codeblocks", "chapter006", `${chapter6Ordinal}.cljs`), "utf8");
if (chapter6Source.includes("(make fake-vector-field")
    || !chapter6Source.includes("(make-fake-vector-field V-over-mu n)")
    || !chapter6Port.includes("(make-fake-vector-field V-over-mu n)")) {
  throw new Error("Org normalization must repair the Chapter 6 make-fake-vector-field call before Emmy conversion");
}
for (const message of ["No output was produced.", "Result:\\n"]) {
  if (!runnerSource.includes(message)) {
    throw new Error(`The web runner is missing its result-state message: ${message}`);
  }
}
const newtonMetric = readFileSync(path.join(root, "codeblocks", "chapter009", "019.cljs"), "utf8");
if (!newtonMetric.includes("(letfn") || newtonMetric.includes("''c")) {
  throw new Error("Nested Scheme definitions must stay lexical and quoted constants must not be double-quoted");
}
const stabilityDeterminant = readFileSync(path.join(root, "codeblocks", "chapter009", "029.cljs"), "utf8");
if (!stabilityDeterminant.includes(" 0 2 0 2)")) {
  throw new Error("scmutils exclusive submatrix bounds must become Emmy inclusive bounds");
}
const sphereLagrangeEquations = readFileSync(path.join(root, "codeblocks", "chapter007", "039.cljs"), "utf8");
if (!sphereLagrangeEquations.includes("(simplify (show-expression")
    || sphereLagrangeEquations.includes("<result truncated:")) {
  throw new Error("chapter007-039 must simplify the displayed equations instead of caching a huge truncated expansion");
}
const divergence = readFileSync(path.join(root, "codeblocks", "chapter010", "004.cljs"), "utf8");
if (!divergence.includes("([metric orthonormal-basis]") || !divergence.includes("([Cartan]")) {
  throw new Error("Repeated Scheme divergence definitions must retain both ClojureScript arities");
}
for (const id of ["appendix_b-019", "appendix_b-023"]) {
  const block = manifest.find(candidate => candidate.id === id);
  if (!block?.executable) throw new Error(`${id} should remain an executable example`);
}
const structuredDerivatives = readFileSync(path.join(root, "codeblocks", "appendix_b", "019.cljs"), "utf8");
if ((structuredDerivatives.match(/^\(simplify\b/gm) ?? []).length !== 3
    || !/\(simplify\s+\(\(D g\) 'x 'y\)\)/s.test(structuredDerivatives)
    || !/\(simplify\s+\(\(D h\) \(up 'x 'y\)\)\)/s.test(structuredDerivatives)) {
  throw new Error("appendix_b-019 must retain all three executable structured-derivative examples");
}
const exactFactorial = readFileSync(path.join(root, "codeblocks", "appendix_a", "015.cljs"), "utf8");
if (!exactFactorial.includes("(* (bigint n) (factorial (- n 1)))")) {
  throw new Error("appendix_a-015 must use bigint multiplication so 40! remains exact");
}
const symbolicPiCancellation = readFileSync(path.join(root, "codeblocks", "appendix_a", "016.cljs"), "utf8");
if (!symbolicPiCancellation.includes("(simplify (f 3))")
    || !symbolicPiCancellation.includes(";; => 1")) {
  throw new Error("appendix_a-016 must simplify the symbolic common pi factor to exactly 1");
}
if (manifest.some(block => block.chapter === "errata" && block.executable)) {
  throw new Error("Context-dependent errata fragments must not run as standalone examples");
}
const appendixVector = manifest.find(block => {
  if (block.chapter !== "appendix_a") return false;
  const ordinal = String(block.ordinal).padStart(3, "0");
  return readFileSync(path.join(root, "codeblocks", block.chapter, `${ordinal}.scm`), "utf8")
    .includes("(define a-vector");
});
if (!appendixVector?.capturesResult) {
  throw new Error("A trailing bare-symbol expression must be captured after definitions");
}
if (!appendixVector.forms.some(form => form.code === "a-vector" && form.capturesResult)) {
  throw new Error("A bare-symbol expression must be represented as a capturable manifest form");
}
for (const block of manifest) {
  const ordinal = String(block.ordinal).padStart(3, "0");
  const code = readFileSync(path.join(root, "codeblocks", block.chapter, `${ordinal}.cljs`), "utf8");
  const scheme = readFileSync(path.join(root, "codeblocks", block.chapter, `${ordinal}.scm`), "utf8");
  if (/\(\/\d/.test(code) || /\(\/\d/.test(scheme)) {
    throw new Error(`${block.id} contains a malformed division operator such as /1`);
  }
  if (/(?<![\w-])pi\/\d/.test(code)) {
    throw new Error(`${block.id} contains an invalid ClojureScript pi ratio symbol`);
  }
  if (code.includes('#emmy/ratio "')) {
    throw new Error(`${block.id} exposes Emmy's tagged ratio representation instead of explicit division`);
  }
  if (code.includes("#object")) {
    throw new Error(`${block.id} exposes an internal ClojureScript object representation`);
  }
  if (/^;; => nil$/m.test(code)) {
    throw new Error(`${block.id} captures a side-effecting form's meaningless nil return value`);
  }
  if (/^;; FDG Emmy block|^;; source-sha256:|^;; status:/m.test(code)) {
    throw new Error(`${block.id} contains generated metadata comments`);
  }
  if (/^\(simplify \((?:def\w*|declare|define-coordinates|in-ns|ns)\b/m.test(code)) {
    throw new Error(`${block.id} incorrectly simplifies a definition or namespace form`);
  }
  if (/^;; => #'fdg\.session\//m.test(code)) {
    throw new Error(`${block.id} incorrectly captures a definition Var as mathematical output`);
  }
  if (capturedResultInsideForm(code)) {
    throw new Error(`${block.id} contains a captured result comment inside an executable form`);
  }
  const capturedCount = [...code.matchAll(/^;; =>/gm)].length;
  const expectedCapturedCount = block.forms.filter(form => form.capturesResult).length;
  if (capturedCount > expectedCapturedCount) {
    throw new Error(
      `${block.id} has ${capturedCount} captured results; expected ${expectedCapturedCount}`,
    );
  }
}

{
  const block = manifest.find(candidate => candidate.id === "chapter008-019");
  const code = readFileSync(path.join(root, "codeblocks/chapter008/019.cljs"), "utf8");
  if (block?.forms.some(form => form.capturesResult) || /^;; =>/m.test(code)) {
    throw new Error("chapter008-019 must execute its print loop without capturing the loop's nil return value");
  }
}

{
  const block = manifest.find(candidate => candidate.id === "chapter009-024");
  const code = readFileSync(path.join(root, "codeblocks/chapter009/024.cljs"), "utf8");
  if (block?.definitions.join(",") !== "spacetime,spacetime-rect,spacetime-sphere"
      || code.includes("(show ")) {
    throw new Error("chapter009-024 must retain its three spacetime definitions");
  }
}

const appendixArithmetic = readFileSync(path.join(root, "codeblocks", "appendix_a", "001.cljs"), "utf8");
if ([...appendixArithmetic.matchAll(/^;; => 3\.14$/gm)].length !== 2) {
  throw new Error("Appendix A block 001 must capture both top-level arithmetic results in place");
}

const mergedCoordinateExamples = manifest.find(block => block.id === "chapter002-016");
if (mergedCoordinateExamples?.forms.length !== 5
    || !mergedCoordinateExamples.forms.at(-1)?.code.startsWith("(theta ")) {
  throw new Error("Chapter 2's merged coordinate examples must retain all five result forms");
}

const appendixCConnectionCheck = manifest.find(block => block.id === "appendix_c-004");
if (appendixCConnectionCheck?.definitions.includes(
  "transform-stereographic-Christoffel-to-spherical",
)) {
  throw new Error("Commented compiled helper source must not shadow its fdg.compat implementation");
}

const boundedSlowBlocks = new Map([
  ["chapter007/040.cljs", [
    "via-Legendre",
    "symbolic-state",
    "verified-zero",
    "closed-form",
  ]],
  ["chapter007/041.cljs", ["phase-space-derivative", ";; => (up 1"]],
  ["chapter011/008.cljs", [
    "preservation of beta's norm",
    "dot-product",
    "R-inverse",
    "verified-zero",
    ";; => (up 0 0 0 0)",
  ]],
  ["appendix_c/001.cljs", ["mapr (fn [component]", ";; => (up 0 0 0 0)"]],
  ["appendix_c/004.cljs", [
    "component by component",
    "Exact compiled helper source used below",
    ";; (ns fdg.slow-checks",
    "Christoffel->symbols",
    "Gamma-stereo",
    "derivation",
    "transform-stereographic-Christoffel-to-spherical",
    "transformation",
    "verified-zero",
    ";; => 0",
  ]],
]);
for (const [relative, required] of boundedSlowBlocks) {
  const code = readFileSync(path.join(root, "codeblocks", relative), "utf8");
  for (const text of required) {
    if (!code.includes(text)) {
      throw new Error(`${relative} lost its bounded slow-block evaluation or captured result`);
    }
  }
}

const exactSlowChecks = readFileSync(
  path.join(root, "emmy-runner", "src", "fdg", "slow_checks.cljs"),
  "utf8",
);
for (const required of [
  "sum2",
  "old-term",
  "transformed-coefficient",
  "transform-symbols",
  "spherical->stereographic",
  "(e/D (e/D spherical->stereographic))",
  "transform-stereographic-Christoffel-to-spherical",
]) {
  if (!exactSlowChecks.includes(required)) {
    throw new Error(`Appendix C exact slow-check helper lost ${required}`);
  }
}
if (/verified-near-zero|1e-\d|Math\.abs/.test(exactSlowChecks)) {
  throw new Error("Appendix C slow-check helper must remain an exact symbolic check");
}
const commentedExactSlowChecks = exactSlowChecks
  .trimEnd()
  .split("\n")
  .map(line => line ? `;; ${line}` : ";;")
  .join("\n");
const displayedAppendixCCheck = readFileSync(
  path.join(root, "codeblocks", "appendix_c", "004.cljs"),
  "utf8",
);
if (!displayedAppendixCCheck.includes(commentedExactSlowChecks)) {
  throw new Error("Every line of the compiled Appendix C helper must appear as comments in its displayed .cljs");
}

const formattedMultilineResult = readFileSync(
  path.join(root, "codeblocks", "chapter007", "041.cljs"),
  "utf8",
);
if (!formattedMultilineResult.includes(";; => (up 1\n;;        (up")) {
  throw new Error("Captured compound values must be structurally formatted across comment lines");
}

const allResultSimplifyIds = [
  "chapter003-016", "chapter003-019",
  "chapter004-010", "chapter004-012",
  "chapter005-003", "chapter005-004", "chapter005-008", "chapter005-011",
  "chapter007-041",
  "chapter008-010", "chapter008-012", "chapter008-013", "chapter008-024",
  "chapter009-009", "chapter009-012",
  "chapter010-012", "chapter010-022",
  "chapter011-020", "chapter011-027", "chapter011-028",
  "appendix_b-006",
];
for (const id of allResultSimplifyIds) {
  const block = manifest.find(candidate => candidate.id === id);
  if (!block) throw new Error(`Missing explicit-simplify regression block ${id}`);
  const unsimplified = block.forms.filter(form => form.capturesResult
    && !/^\((?:simplify|polynomially-verified-zero)\s/.test(form.code));
  if (unsimplified.length) {
    throw new Error(`${id} must wrap every result-producing form in simplify`);
  }
}
const boundedPolarCurvature = manifest.find(block => block.id === "chapter008-012");
if (!boundedPolarCurvature?.forms.some(form =>
  form.code === "(polynomially-verified-zero (test R2-polar general-Cartan-2))")) {
  throw new Error("chapter008-012 must avoid unbounded rational GCD simplification for its polar check");
}
const printedTorsion = readFileSync(path.join(root, "codeblocks/chapter008/019.cljs"), "utf8");
if (!/\(print-expression\s+\(simplify/.test(printedTorsion)) {
  throw new Error("chapter008-019 must simplify each value passed to print-expression");
}
const correctedSchemeOutputs = new Map([
  ["chapter003-016", /;;\s+r\)\)\)\s*$/],
  ["chapter006-009", /;; \(up \(\(D theta\) t0\) \(\(D phi\) t0\)\)\s*$/],
  ["chapter007-031", /;; \(up \(\+/],
  ["chapter007-034", /;; \(up 1\.5707963267948957/],
]);
for (const [id, expected] of correctedSchemeOutputs) {
  const block = manifest.find(candidate => candidate.id === id);
  const ordinal = String(block.ordinal).padStart(3, "0");
  const scheme = readFileSync(path.join(root, "codeblocks", block.chapter, `${ordinal}.scm`), "utf8");
  if (!expected.test(scheme)) throw new Error(`${id} lost its corrected parseable Scheme output`);
}

// Historical Org sources occasionally put a displayed zero on its own final
// line inside a Scheme source block. The converter must retain it only as a
// comment, never as an extra ClojureScript expression.
const inlineZeroResultIds = [
  "chapter003-020", "chapter005-009", "chapter005-014",
  "chapter007-003", "chapter007-006", "chapter007-007", "chapter007-008",
  "chapter007-009", "chapter007-012", "chapter007-026",
];
for (const id of inlineZeroResultIds) {
  const block = manifest.find(candidate => candidate.id === id);
  if (!block) throw new Error(`Missing inline-result regression block ${id}`);
  const ordinal = String(block.ordinal).padStart(3, "0");
  const scheme = readFileSync(path.join(root, "codeblocks", block.chapter, `${ordinal}.scm`), "utf8");
  const cljs = readFileSync(path.join(root, "codeblocks", block.chapter, `${ordinal}.cljs`), "utf8");
  if (/\n\s*0\s*$/.test(scheme)) {
    throw new Error(`${id} retains a bare cached Scheme result as executable source`);
  }
  if (!/\n;; 0\s*$/.test(scheme)) {
    throw new Error(`${id} lost its cached Scheme result comment`);
  }
  if (/\n\s*0\s*$/.test(cljs)) {
    throw new Error(`${id} propagated a cached Scheme result into executable ClojureScript`);
  }
  if (!/\n;; => 0\s*$/.test(cljs)) {
    const captured = cljs.match(/\n;; => ([^\n]*)/)?.[1] ?? "<missing>";
    throw new Error(`${id} expected captured ClojureScript result 0, got ${captured}`);
  }
}
if (/\(sign \(alpha tau\)\)/.test(readFileSync(path.join(root, "codeblocks/chapter007/031.scm"), "utf8"))) {
  throw new Error("chapter007-031 must use sin, not the transcribed sign typo");
}

console.log(`Emmy conversion manifest is consistent (${manifest.length} blocks).`);
