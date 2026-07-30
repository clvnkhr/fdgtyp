#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdirSync, mkdtempSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { normalizeImportedOrgSource } from "./normalize-org-source.mjs";

const root = process.cwd();
const orgDir = path.join(root, "fdg-book", "scheme", "org");
const typDir = path.join(root, "typ");
const contentDir = path.join(typDir, "content");
const orgSourceChecksums = JSON.parse(
  readFileSync(new URL("./org-source-checksums.json", import.meta.url), "utf8"),
);

function assertOrgSourcesUntouched() {
  const actualFiles = readdirSync(orgDir)
    .filter(file => file.endsWith(".org"))
    .sort();
  const expectedFiles = Object.keys(orgSourceChecksums).sort();
  const added = actualFiles.filter(file => !expectedFiles.includes(file));
  const removed = expectedFiles.filter(file => !actualFiles.includes(file));
  const modified = actualFiles
    .filter(file => expectedFiles.includes(file))
    .filter(file => {
      const source = readFileSync(path.join(orgDir, file));
      const checksum = createHash("sha256").update(source).digest("hex");
      return checksum !== orgSourceChecksums[file];
    });

  if (added.length === 0 && removed.length === 0 && modified.length === 0) return;

  const details = [
    ...added.map(file => `  added: ${file}`),
    ...removed.map(file => `  removed: ${file}`),
    ...modified.map(file => `  modified: ${file}`),
  ].join("\n");
  throw new Error(
    `Vendored Org sources differ from the pinned upstream snapshot:\n${details}\n`
      + "Keep source fixes in convert-org-to-typst.mjs and restore scheme/org from mentat-collective/fdg-book.",
  );
}

assertOrgSourcesUntouched();

const files = [
  "preface.org",
  "prologue.org",
  "chapter001.org",
  "chapter002.org",
  "chapter003.org",
  "chapter004.org",
  "chapter005.org",
  "chapter006.org",
  "chapter007.org",
  "chapter008.org",
  "chapter009.org",
  "chapter010.org",
  "chapter011.org",
  "appendix_a.org",
  "appendix_b.org",
  "appendix_c.org",
  "references.org",
  "errata.org",
];

function readTitle(file) {
  const source = readFileSync(path.join(orgDir, file), "utf8");
  const explicit = source.match(/^#\+title:\s*(.+)$/im);
  if (explicit) return explicit[1].trim();

  const heading = source.match(/^\*\s+(.+)$/m);
  if (heading) return heading[1].trim();

  return file.replace(/\.org$/, "").replaceAll("_", " ");
}

function typstEscape(text) {
  return text
    .replaceAll("\\", "\\\\")
    .replaceAll('"', '\\"')
    .replaceAll("$", "\\$")
    .replaceAll("#", "\\#");
}

function escapeRegex(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function replaceExactlyOnce(source, search, replacement, description) {
  const matches = typeof search === "string"
    ? source.split(search).length - 1
    : [...source.matchAll(new RegExp(search.source, search.flags.includes("g") ? search.flags : `${search.flags}g`))].length;
  if (matches !== 1) {
    throw new Error(`${description}: expected exactly one match, found ${matches}`);
  }
  return source.replace(search, replacement);
}

function chapterDisplayTitle(title) {
  return title
    .replace(/^Chapter\s+\d+:\s*/, "")
    .replace(/^Appendix\s+[A-Z]:\s*/, "");
}

function isNumberedChapter(title, stem) {
  return /^chapter\d+$/.test(stem)
    || /^appendix_[a-z]$/.test(stem)
    || /^Chapter\s+\d+:\s+/.test(title)
    || /^Appendix\s+[A-Z]:\s+/.test(title);
}

function equationLabelPrefix(stem) {
  if (!stem) return null;

  const chapter = stem.match(/^chapter0*(\d+)$/);
  if (chapter) return String(Number(chapter[1]));

  const appendix = stem.match(/^appendix_([a-z])$/);
  if (appendix) return appendix[1].toUpperCase();

  return null;
}

function chapterLabel(stem) {
  const chapter = stem.match(/^chapter0*(\d+)$/);
  if (chapter) return `chap-${Number(chapter[1])}`;

  const appendix = stem.match(/^appendix_([a-z])$/);
  if (appendix) return `chap-appendix-${appendix[1]}`;

  return null;
}

function collectSectionLabels() {
  const labels = new Set();

  for (const file of files) {
    const stem = file.replace(/\.org$/, "");
    const prefix = equationLabelPrefix(stem);
    if (!prefix) continue;

    const counters = [];
    const source = readFileSync(path.join(orgDir, file), "utf8");
    for (const line of source.split("\n")) {
      const heading = line.match(/^(\*+)\s+(.+)$/);
      if (!heading || heading[1].length < 2) continue;

      const depth = heading[1].length - 1;
      counters.length = depth;
      counters[depth - 1] = (counters[depth - 1] ?? 0) + 1;
      for (let index = 0; index < depth - 1; index += 1) {
        counters[index] ??= 1;
      }
      labels.add(`${prefix}.${counters.slice(0, depth).join(".")}`);
    }
  }

  return labels;
}

const sectionLabels = collectSectionLabels();

function normalizeDollarMath(source) {
  return source.replace(/\$\$([\s\S]*?)\$\$/g, (_match, math) => {
    const normalized = math
      .replace(/\\begin\{(?:aligned|split)\}/g, "")
      .replace(/\\end\{(?:aligned|split)\}/g, "")
      .replace(/\\nonumber/g, "")
      .replace(/&/g, "")
      .replace(/\\\\\s*/g, " \\operatorname{FDGBREAK} ")
      .replace(/\s+/g, " ")
      .trim();
    return `$$${normalized}$$`;
  });
}

function suppressPublishedEquationNumber(stem, math) {
  if (stem !== "chapter007") return false;

  return (
    (
      math.includes("\\nabla_{\\mathsf{v}}(\\tau(\\mathsf{w}))") &&
      math.includes("\\tau(\\nabla_{\\mathsf{v}}\\mathsf{w})") &&
      math.includes("\\nabla_{\\mathsf{v}}\\mathsf{w})")
    ) ||
    math.includes("Du^{0}(\\tau)=\\sin(\\alpha(\\tau))\\cos(\\alpha(\\tau))D\\beta(\\tau)u^{1}(\\tau)") ||
    math.includes("\\left(\\begin{array}{c}") ||
    math.includes("\\left[\\begin{array}{c}")
  );
}

function normalizeLatexDisplayEnvironments(source, stem) {
  const labelPrefix = equationLabelPrefix(stem);
  let equationIndex = 0;

  return source.replace(
    /\\begin\{(equation\*?|align\*?)\}([\s\S]*?)\\end\{\1\}/g,
    (_match, env, math) => {
      const seenAlignLines = new Set();
      const trimmed = math
        .replace(/\\label\{[^}]+\}/g, "")
        // Some imported align environments repeat an equation once with and
        // once without `\\nonumber`. Remove exact repeated equation rows.
        .split(/(?<=\\\\)\s*\n|\n/)
        .filter(line => {
          const key = line.replace(/\\nonumber/g, "").replace(/\\\\\s*$/, "").replace(/\s+/g, " ").trim();
          if (!key || !line.includes("&=")) return true;
          if (seenAlignLines.has(key)) return false;
          seenAlignLines.add(key);
          return true;
        })
        .join("\n")
        .trim();
      const numbered = !env.endsWith("*") && labelPrefix && !suppressPublishedEquationNumber(stem, trimmed);
      const label = numbered ? `<${labelPrefix}.${equationIndex += 1}>` : "";
      if (!trimmed) return "";
      return label ? `$$${trimmed}$$\n${label}` : `$$${trimmed}$$`;
    },
  );
}

function normalizeLatexDisplaysWithFootnotes(source, stem) {
  const footnotes = source.match(/^\* Footnotes/m);
  if (!footnotes) return normalizeLatexDisplayEnvironments(source, stem);

  const main = source.slice(0, footnotes.index);
  const notes = source.slice(footnotes.index);
  return normalizeLatexDisplayEnvironments(main, stem)
    + normalizeLatexDisplayEnvironments(notes, null);
}

function wrapBareSchemeBlocks(source) {
  const lines = source.split("\n");
  const output = [];
  let inOrgBlock = false;
  const proseParenStart = /^\((?:~|equation|in English translation|and perhaps|time|also|The|We know|See|but will|formerly|\d{4})\b/;

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    if (/^\s*#\+begin_/i.test(line)) inOrgBlock = true;
    if (/^\s*#\+end_/i.test(line)) {
      inOrgBlock = false;
      output.push(line);
      continue;
    }

    if (!inOrgBlock && line.startsWith("(") && !proseParenStart.test(line)) {
      const block = [];
      while (index < lines.length && lines[index].trim() !== "") {
        const blockLine = lines[index].replaceAll("’", "'");
        // The source uses /.../ lines for displayed evaluator output. Within
        // a Scheme example these are results, not executable expressions.
        block.push(blockLine.startsWith("/")
          ? `;; ${blockLine.slice(1, blockLine.endsWith("/") ? -1 : undefined)}`
          : blockLine);
        index += 1;
      }
      output.push("#+begin_src scheme", ...block, "#+end_src");
      if (index < lines.length) output.push(lines[index]);
      continue;
    }

    output.push(line);
  }

  return output.join("\n");
}

function applyPdfFidelitySourceRepairs(source, stem) {
  // These repairs are derived from the published PDF. Keep them here rather
  // than editing the vendored Org snapshot.
  if (stem === "chapter001") {
    return source.replace(
      /(: \(up \(q\^0 t\) \(q\^1 t\)\)\n: \|#\n)(\n#\+begin_src scheme\n\(define coordinate-path)/,
      "$1\nSo, to work with coordinates we write:\n\n$2",
    );
  }

  if (stem === "appendix_b") {
    return source
      .replaceAll("I_0(s) &= y \\\\", "I_0(s) &= t \\\\")
      .replaceAll("AB = [AC_0, AC_1, AC_2].", "AC = [AC_0, AC_1, AC_2].")
      // Correct inconsistent phase-space tuples in displayed evaluator output
      // while preserving the vendored Org source verbatim.
      .replaceAll(
        ";; (H (up t (up x y) (down p x p y)))",
        ";; (H (up t (up x y) (down p_x p_y)))",
      )
      .replaceAll("(up_x y)", "(up x y)");
  }

  if (stem === "appendix_c") {
    return source
      .replaceAll(
        "+ \\mathsf{g} \\mathsf{T}(\\mathsf{u}, \\boldsymbol{\\omega})",
        "+ \\mathsf{g} \\mathsf{T}(\\mathsf{v}, \\boldsymbol{\\omega})",
      )
      .replaceAll(
        "\\mathsf{R}_{jkl}^i = \\sum_{mnpq}{\\mathsf{J}_m^i \\mathsf{R}_{npq}^m \\mathsf{K}_j^n \\mathsf{K}_k^p \\mathsf{K}_l^q}.",
        "\\mathsf{R}_{jkl}^{\\prime i} = \\sum_{mnpq}{\\mathsf{J}_m^i \\mathsf{R}_{npq}^m \\mathsf{K}_j^n \\mathsf{K}_k^p \\mathsf{K}_l^q}.",
      );
  }

  if (stem === "chapter010") {
    return source
      .replaceAll(
        "\\operatorname{grad}(\\mathsf{f}) = g^\\sharp(\\mathsf{df})\n(df)",
        "\\operatorname{grad}(\\mathsf{f}) = g^\\sharp(\\mathsf{df})",
      )
      .replaceAll(
        "- \\frac{\\partial\\theta_z}{\\partial\\mathsf{x}} \\right) \\mathsf{dx} \\\\",
        "- \\frac{\\partial\\theta_z}{\\partial\\mathsf{x}} \\right) \\mathsf{dy} \\\\",
      );
  }

  if (stem === "chapter007") {
    return source.replaceAll(
      "((state-advancer (g (tilted-path 1) (sphere-Cartan))",
      "((state-advancer (g (tilted-path 1) sphere-Cartan))",
    );
  }

  if (stem === "chapter011") {
    return source.replaceAll(
      "(make-4tuple 'ct (up 'x 'y 'z)))))\n;; 0",
      "(make-4tuple 'ct (up 'x 'y 'z))))\n;; 0",
    );
  }

  return source;
}

function normalizeOrgSource(source, stem) {
  const repairedSource = applyPdfFidelitySourceRepairs(normalizeImportedOrgSource(source, stem), stem);
  return wrapBareSchemeBlocks(normalizeDollarMath(normalizeLatexDisplaysWithFootnotes(repairedSource, stem)))
    // Pandoc emits Org headings below level three as plain paragraphs in
    // Typst. Mark them here so the cleanup pass can preserve them as visible
    // subheadings without changing their source hierarchy/section labels.
    .replace(/^\*{4,}\s+(.+)$/gm, "FDGSUBHEADING $1")
    // Clear typos and unsupported macros in the imported Org math. These are
    // applied to a temporary source copy so the subtree remains pristine.
    .replaceAll("\\psia", "\\psi_a")
    .replaceAll("M_{i}}", "M_i")
    .replaceAll("\\mathsf{R}^{n}}", "\\mathsf{R}^{n}")
    .replaceAll("\\mathsf`m`", "\\mathsf{m}")
    .replaceAll("\\mathsf{m}gt", "\\mathsf{m}")
    .replaceAll("$\\n$", "$n$")
    .replaceAll("Les Mis´erables", "Les Misérables")
    .replaceAll("EulerLagrange", "Euler-Lagrange")
    .replaceAll("Indepenedent", "Independent")
    .replaceAll("on the manifold Rh $\\mathbb{R}^5$", "on the manifold $\\mathbb{R}^5$")
    .replaceAll("Papert\n[13].", "Papert @papert1980mindstorms.")
    .replaceAll("this lagrangian is implemented by", "This Lagrangian is implemented by")
    .replaceAll("90◦E meridian", "90◦ E meridian")
    .replaceAll("di- rection", "direction")
    .replaceAll("deriva- tives", "derivatives")
    .replaceAll("com- ponents", "components")
    .replaceAll("deriva-\ntives", "derivatives")
    .replaceAll("com-\n   ponents", "components")
    .replaceAll("(coordinate-system at 'spherical 'north-pole S2)", "(coordinate-system-at 'spherical 'north-pole S2)")
    // Repair recurring whitespace/transcription damage in Scheme identifiers.
    .replace(/\(pull\s+back(?=\s)/g, "(pullback")
    .replace(/\bred(?=\s+coords\b)/g, "ref")
    .replace(/\bref\s+coord(?=\s)/g, "ref coords")
    .replace(/\bsign(?=\s+long\b)/g, "sin")
    .replace(/\blong\s+p\b/g, "longp")
    .replaceAll("(define ((pullback-function mu:N->M) f-on-m)", "(define ((pullback-function mu:N->M) f-on-M)")
    .replaceAll("We can asume without loss of generality", "We can assume without loss of generality")
    .replaceAll("However , if", "However, if")
    .replaceAll("\\Gamma_{jk}^i = \\Gamma_{jk}^i", "\\Gamma_{jk}^i = \\Gamma_{kj}^i")
    .replaceAll("functions hat map", "functions that map")
    .replaceAll("\n. We can work with the coordinate functions", "\nWe can work with the coordinate functions")
    .replaceAll("function$\\mathsf{f}$at", "function $\\mathsf{f}$ at")
    .replaceAll("$\\mathsf{m} = \\mu(\\mathsf{n}). The", "$\\mathsf{m} = \\mu(\\mathsf{n})$. The")
    .replaceAll("$mathsf{N}$", "$\\mathsf{N}$")
    .replaceAll("$x\\prime =\n\\chi\\prime (\\mathsf{m}),", "$x\\prime = \\chi\\prime (\\mathsf{m})$,")
    .replaceAll("\\mathsf{e}_j(\\mathsf{f}) = \\sum_k {\\mathsf{X}(\\mathsf{f}) \\mathsf{c}_j^k},", "\\mathsf{e}_j(\\mathsf{f}) = \\sum_k \\mathsf{X}_k(\\mathsf{f}) \\mathsf{c}_j^k,")
    .replaceAll("D(\\mathsf{f} ? (\\chi')^{^1})", "D(\\mathsf{f} \\circ (\\chi')^{-1})")
    .replaceAll("D(\\chi' \\circ \\chi^{1})(x) = (D(\\chi \\circ (\\chi')^{1})(x'))^{1}", "D(\\chi' \\circ \\chi^{-1})(x) = (D(\\chi \\circ (\\chi')^{-1})(x'))^{-1}")
    .replaceAll("b(x) = D(\\chi \\circ (\\chi')^{1})(x') b'(x')", "b(x) = D(\\chi \\circ (\\chi')^{-1})(x') b'(x')")
    .replaceAll("$\\mathsf{v} =\n{\\mathsf{v}^{0}{\\partial}/{\\partial\\mathsf{x}} +\n\\mathsf{v}^{1}}{\\partial}/{\\partial\\mathsf{y}},$", "$\\mathsf{v} = \\mathsf{v}^{0}{\\partial}/{\\partial\\mathsf{x}} + \\mathsf{v}^{1}{\\partial}/{\\partial\\mathsf{y}},$")
    .replaceAll("$\\mathsf{A} =\n\\mathsf{d}\\mathsf{x} \\wedge \\mathsf{d}\\mathsf{y}.$", "$\\mathsf{A} = \\mathsf{d}\\mathsf{x} \\wedge \\mathsf{d}\\mathsf{y}.$")
    .replaceAll("$\\mathbf{E}$[L] \\circ \\Gamma[q] = 0", "$\\mathbf{E}[L] \\circ \\Gamma[q] = 0$")
    .replaceAll("$\\mathsf{d}$\\mathsf{x}$ and $\\mathsf{d}\\mathsf{y}$", "$\\mathsf{d}\\mathsf{x}$ and $\\mathsf{d}\\mathsf{y}$")
    .replaceAll("\\mathsf{g.}", "\\mathsf{g}.")
    .replaceAll("\\mathsf{u]", "\\mathsf{u}")
    .replaceAll("\\mathsf{w]", "\\mathsf{w}")
    .replaceAll("\\set{\\mathsf{e}_{i}}", "\\left\\{\\mathsf{e}_{i}\\right\\}")
    .replaceAll("g^{ij{", "g^{ij}")
    .replaceAll("\\epsilon_{j_0\n\\ldots j_{n-1}$", "\\epsilon_{j_0\n\\ldots j_{n-1}}$")
    .replaceAll("\\rime", "\\prime")
    .replaceAll("Einsten", "Einstein")
    .replaceAll("\\TeX", "\\mathrm{TeX}")
    .replaceAll("\\ldots", "\\cdots")
    .replaceAll("{{1}\\over {2}}", "\\frac{1}{2}")
    .replaceAll("\\!", "")
    .replaceAll("D(\\chi \\circ \\gamma$)(t)", "D(\\chi \\circ \\gamma)(t)")
    .replaceAll("\\mathsf`m`", "\\mathsf{m}")
    .replaceAll("\\sum_l {\\mathsf{d}_l^i \\tilde{\\mathsf{X}}^l(\\mathsf{v}),", "\\sum_l \\mathsf{d}_l^i \\tilde{\\mathsf{X}}^l(\\mathsf{v}),")
    .replaceAll("\\sum_k {\\mathsf{d}_k^i", "\\sum_k \\mathsf{d}_k^i")
    .replace(/\\sum_k \{\\mathsf\{d\}_k\^i\(\\mathsf\{m\}\)\s*\\\\+\s*\\mathsf\{c\}_j\^k\(\\mathsf\{m\}\)\./g, "\\sum_k \\mathsf{d}_k^i(\\mathsf{m}) \\mathsf{c}_j^k(\\mathsf{m}).")
    .replaceAll("f(\\xi) = -(\\xi^0)^2 + (\\xi^2)^2 + (\\xi^2)^2 + (\\xi^3)^2", "f(\\xi) = -(\\xi^0)^2 + (\\xi^1)^2 + (\\xi^2)^2 + (\\xi^3)^2")
    .replaceAll("\\xi^{\\Vert}", "\\boldsymbol{\\xi}^\\parallel")
    .replaceAll("\\mathcal{R}(R^{=1})", "\\mathcal{R}(R^{-1})")
    .replaceAll("(make-4-tuple", "(make-4tuple")
    .replaceAll("\\mathcal{R}(\\mathsf{w}, \\mathsf{v}) \\=", "\\mathcal{R}(\\mathsf{w}, \\mathsf{v}) =")
    .replaceAll(
      "\\mathcal{R}(\\boldsymbol{\\omega}, \\mathsf{u}, \\mathsf{v}, \\mathsf{w}) \\\n\\boldsymbol{\\omega}",
      "\\mathcal{R}(\\boldsymbol{\\omega}, \\mathsf{u}, \\mathsf{v}, \\mathsf{w}) = \\boldsymbol{\\omega}",
    )
    .replaceAll("\\left(e^{-\\epsilon L_{g_w}} I}\\right)", "\\left(e^{-\\epsilon L_{g_w}} I\\right)");
}

const typstMathFunctions = new Set([
  "abs",
  "arrow",
  "bb",
  "binom",
  "bold",
  "cal",
  "ceil",
  "cos",
  "cosh",
  "ddot",
  "det",
  "dim",
  "dot",
  "exp",
  "floor",
  "frac",
  "frak",
  "h",
  "hat",
  "italic",
  "lim",
  "ln",
  "log",
  "lr",
  "macron",
  "mat",
  "mono",
  "norm",
  "root",
  "sans",
  "scale",
  "sin",
  "sinh",
  "sqrt",
  "sum",
  "tan",
  "tanh",
  "tilde",
  "upright",
  "vec",
]);

function spaceMathApplications(math) {
  return math
    .replace(
      /\b([A-Za-z][A-Za-z0-9.]*)(_[A-Za-z0-9.]+|_\([^)]*\))?(\^[A-Za-z0-9.]+|\^\([^)]*\))?\(/g,
      (match, name, sub = "", sup = "") => {
        if (typstMathFunctions.has(name)) return match;
        return `${name}${sub}${sup} (`;
      },
    )
    .replace(
      /\b([A-Za-z][A-Za-z0-9.]+'+)(_[A-Za-z0-9.]+|_\([^)]*\))?(\^[A-Za-z0-9.]+|\^\([^)]*\))?\(/g,
      (_match, name, sub = "", sup = "") => `${name}${sub}${sup} (`,
    )
    .replace(
      /((?:\)|\])'+(?:_[A-Za-z0-9.]+|_\([^)]*\))?(?:\^[A-Za-z0-9.]+|\^\([^)]*\))?)(?=\()/g,
      "$1 ",
    )
    .replace(
      /((?:\)|\])(?:(?:_[A-Za-z0-9.]+|_\([^)]*\))(?:\^[A-Za-z0-9.]+|\^\([^)]*\))?|(?:\^[A-Za-z0-9.]+|\^\([^)]*\))))(?=\()/g,
      "$1 ",
    )
    .replace(/(\)|\])(?=\()/g, "$1 ");
}

function commaSeparateMathCallLinebreaks(math, names = new Set(["mat", "vec"])) {
  let output = "";

  for (let index = 0; index < math.length;) {
    const call = math.slice(index).match(/^([A-Za-z][A-Za-z0-9.]*)\(/);
    if (!call || !names.has(call[1])) {
      output += math[index];
      index += 1;
      continue;
    }

    const name = call[1];
    const openIndex = index + name.length;
    let depth = 0;
    let closeIndex = -1;

    for (let cursor = openIndex; cursor < math.length; cursor += 1) {
      const char = math[cursor];
      if (char === "(") depth += 1;
      if (char === ")") {
        depth -= 1;
        if (depth === 0) {
          closeIndex = cursor;
          break;
        }
      }
    }

    if (closeIndex === -1) {
      output += math[index];
      index += 1;
      continue;
    }

    const inner = math.slice(openIndex + 1, closeIndex);
    const cleanedInner = commaSeparateMathCallLinebreaks(inner, names)
      .replace(/\\\n\s*/g, ", ");
    output += `${name}(${cleanedInner})`;
    index = closeIndex + 1;
  }

  return output;
}

function cleanTypstMath(math) {
  let cleaned = math
    .replaceAll("zws^(-) 1", "^(-1)")
    .replaceAll("zws^(-1)", "^(-1)")
    .replace(/\^\(-\s*1\)/g, "^(-1)")
    .replace(/\s+\^/g, "^")
    .replace(/\\([()[\]|])/g, "$1")
    .replaceAll("times.circle", "\"⊗\"")
    .replaceAll("\"curl\"", "curl")
    .replaceAll("\"grad\"", "grad")
    .replaceAll("\"Lap\"", "Lap")
    .replaceAll("\"div\"", "div")
    .replaceAll("\"length\"", "length")
    .replaceAll("dots.h.c", "dots.c")
    .replaceAll("dots.h", "dots")
    .replaceAll("eq.not", "!=")
    .replaceAll("^komega", "^k omega")
    .replaceAll("c o s", "cos")
    .replaceAll("x^(+) y^2", "x^2 + y^2")
    .replace(/\bwedge\b/g, "\"∧\"")
    .replaceAll("A = dx ∧ dy.", "sans(A) = sans(d) sans(x) \"∧\" sans(d) sans(y).")
    .replaceAll("v = v^{0}{∂}/{∂x} + v^{1}{∂}/{∂y},", "sans(v) = sans(v)^0 partial\\/partial sans(x) + sans(v)^1 partial\\/partial sans(y),")
    .replaceAll("sans(g .)", "sans(g).")
    .replace(/\(\s+/g, "(")
    .replace(/\s+\)/g, ")")
    .replace(/\[\s+/g, "[")
    .replace(/\s+\]/g, "]")
    .replace(/_\((m i n|m a x)\)/g, (_match, word) => `_"${word.replaceAll(" ", "")}"`)
    .replace(/_\(([^)]*?)\s*=\s*([^)]*?)\)/g, "_($1=$2)")
    .replace(
      "cal(R) (bold(omega)\\,sans(u)\\,sans(v)\\,sans(w))bold(omega)",
      "cal(R) (bold(omega)\\,sans(u)\\,sans(v)\\,sans(w)) = bold(omega)",
    )
    .replace(
      "cal(R) (bold(omega)\\,sans(u)\\,sans(v)\\,sans(w))\"FDGBREAK\" bold(omega)",
      "cal(R) (bold(omega)\\,sans(u)\\,sans(v)\\,sans(w)) = \"FDGBREAK\" bold(omega)",
    )
    .replace(/\)\s*!=/g, ") !=")
    .replace(/\)\s*equiv/g, ") \"≡\"")
    .replace(/\s+=\s+/g, " = ");

  cleaned = cleaned.replace(
    /^\s*\(D f\)\(t\)\s*=\s*frac\(d, d x\)\s*f\(x\)\|_\(x=t\)\s*\.\s*$/,
    " lr( (D f)(t) = frac(d, d x) f(x) |)_(x=t) ",
  );

  let previousAlignmentBreakEnd = 0;
  const finalized = spaceMathApplications(cleaned)
    .replace(/\s+,/g, ",")
    .replace(/\)(\^\d+)sans\(/g, ")$1 sans(")
    .replace(/(\)\^\d+)(?=sans\()/g, "$1 ")
    .replace(/(\)\^[A-Za-z0-9.]+)(?=sans\()/g, "$1 ")
    .replace(/(bb|binom|sans|scale)\s+\(/g, "$1(")
    .replace(/\)(\^\d+)sans\(/g, ")$1 sans(")
    .replace(/\bsum_([A-Za-z0-9]+)\(/g, "sum_$1 (")
    // A break before the first `&=` can merely separate a long left-hand side
    // from its equals sign. Join that continuation, but preserve a break once
    // the current row already has an alignment point.
    .replace(/"FDGBREAK"\s*=/g, (_match, offset, whole) => {
      const currentRow = whole.slice(previousAlignmentBreakEnd, offset);
      previousAlignmentBreakEnd = offset + '"FDGBREAK"'.length;
      return /(?<![<>!])=/.test(currentRow) ? "\\\n &=" : " &=";
    })
    .replaceAll("\"FDGBREAK\"", "\\\n")
    .replace(/\\\n\s+([+-])/g, "\\\n &quad $1")
    .replace(/,\s*&quad\s+([+-])/g, ", $1")
    .replace(/\\\\(?=\n)/g, "\\")
    .replace(
    "frac(d, d t) (frac(partial L (t\\,q\\,dot(q)), partial dot(q))|_(q=w (t) dot(q) = frac(d w (t), d t))) - frac(partial L (t\\,q\\,dot(q)), partial q)|_(q=w (t)dot(q) = frac(d w (t), d t)) = 0 .",
    "frac(d, d t) (lr(frac(partial L (t\\,q\\,dot(q)), partial dot(q))|)_(q=w (t) \\\n dot(q) = frac(d w (t), d t))) - lr(frac(partial L (t\\,q\\,dot(q)), partial q)|)_(q=w (t) \\\n dot(q) = frac(d w (t), d t)) = 0 .",
  )
    .replace(
    "frac(d, d t) (frac(partial L (t\\,q\\,dot(q)), partial dot(q))|_(q=w (t)\"FDGBREAK\" dot(q) = frac(d w (t), d t))) - frac(partial L (t\\,q\\,dot(q)), partial q)|_(q=w (t)\"FDGBREAK\" dot(q) = frac(d w (t), d t)) = 0 .",
    "frac(d, d t) (lr(frac(partial L (t\\,q\\,dot(q)), partial dot(q))|)_(q=w (t) \"FDGBREAK\" dot(q) = frac(d w (t), d t))) - lr(frac(partial L (t\\,q\\,dot(q)), partial q)|)_(q=w (t) \"FDGBREAK\" dot(q) = frac(d w (t), d t)) = 0 .",
  );

  return compactShortSingleEqualsDisplay(commaSeparateMathCallLinebreaks(finalized)
    .replace(/,\s*&quad\s+([+-])/g, ", $1")
    .replace(/\s+,/g, ","));
}

function compactShortSingleEqualsDisplay(math) {
  if (!/\\\n/.test(math)) return math;

  const equals = [...math.matchAll(/(?<![<>!])=/g)].length;
  if (equals !== 1) return math;

  const compact = math
    .replace(/\\\n\s*&quad\s*/g, " ")
    .replace(/\\\n\s*/g, " ")
    .replace(/\s+/g, " ")
    .replace(/\(\s+/g, "(")
    .replace(/\s+\)/g, ")")
    .trim();

  return compact.length <= 220 ? ` ${compact} ` : math;
}

function normalizeMultilineMath(body) {
  return body.replace(/\$([^$]*\\\n[^$]*)\$/g, (display, math) => {
    const lines = math.split(/\\\n/);
    let depth = 0;
    const equalsPositions = lines.map(line => {
      let equalsAt = -1;
      for (let index = 0; index < line.length; index += 1) {
        const char = line[index];
        if ("([{".includes(char)) depth += 1;
        else if (")]}".includes(char)) depth = Math.max(0, depth - 1);
        else if (equalsAt < 0 && char === "=" && depth === 0 && !"<>!".includes(line[index - 1] ?? "")) equalsAt = index;
      }
      return equalsAt;
    });
    const equationLines = equalsPositions.filter(index => index >= 0);

    // A short two-line derivation reads better on one line and lets Typst size
    // delimiters naturally. Longer systems retain line breaks and align on =.
    if (lines.length === 2) {
      const compact = math.replace(/\\\n\s*&?(?:quad\s+)?/g, " ").replace(/\s+/g, " ").trim();
      if (compact.length <= 220) return `$ ${compact} $`;
    }

    if (equationLines.length < 2) return display;
    const aligned = lines.map((line, lineIndex) => {
      const equalsAt = equalsPositions[lineIndex];
      if (equalsAt < 0 || line[equalsAt - 1] === "&") return line;
      return `${line.slice(0, equalsAt).trimEnd()} &= ${line.slice(equalsAt + 1).trimStart()}`;
    }).join("\\\n");
    return `$${aligned}$`;
  });
}

function normalizeCollapsedLetteredLists(body) {
  return body.replace(/^a\. ([^\n]+)$/gm, (line, content) => {
    const items = content.split(/;\s+([b-z])\.\s+/);
    if (items.length < 3) return line;

    const bodies = [items[0]];
    for (let index = 1; index < items.length; index += 2) {
      const expectedLetter = String.fromCharCode(97 + bodies.length);
      if (items[index] !== expectedLetter || !items[index + 1]) return line;
      bodies.push(items[index + 1]);
    }
    return `#enum(numbering: "a.")${bodies.map(item => `[${item}]`).join("")}`;
  });
}

function removeRedundantScaledDelimiters(body) {
  return body.replace(
    /#scale\([^\n]*?\)\[\(\]([^\n]*?)#scale\([^\n]*?\)\[\)\]/g,
    (_match, inner) => `(${inner})`,
  );
}

function mathifyBareGreekInProse(body) {
  const protectedSpan = /(```[\s\S]*?```|`[^`\n]*`|\$[\s\S]*?\$)/g;
  return body
    .split(protectedSpan)
    .map(part => {
      protectedSpan.lastIndex = 0;
      if (!part || protectedSpan.test(part)) return part;
      protectedSpan.lastIndex = 0;
      return part.replace(
        /(^|[^\p{L}\p{N}_$])(\p{Script=Greek})(s?)(?=$|[^\p{L}\p{N}_])/gu,
        (_match, prefix, symbol, plural) => `${prefix}$${symbol}$${plural}`,
      );
    })
    .join("");
}

function repairInlineCodeTranspilation(body) {
  const repaired = body
    .replaceAll(
      '#raw(lang:"scheme", "square in the Scmutils system. In Scmutils, =square")',
      '#raw(lang:"scheme", "square") in the Scmutils system. In Scmutils, #raw(lang:"scheme", "square")',
    )
    .replaceAll(
      '#raw(lang:"scheme", "r and =omega")',
      '#raw(lang:"scheme", "r") and #raw(lang:"scheme", "omega")',
    )
    .replaceAll(
      '#raw(lang:"scheme", "rho is the energy density, and =p")',
      '#raw(lang:"scheme", "rho") is the energy density, and #raw(lang:"scheme", "p")',
    );

  const protectedSpan = /(```[\s\S]*?```|`[^`\n]*`|\$[\s\S]*?\$|#raw\(lang:"scheme", "[^"]*"\))/g;
  return repaired
    .split(protectedSpan)
    .map(part => {
      protectedSpan.lastIndex = 0;
      if (!part || protectedSpan.test(part)) return part;
      protectedSpan.lastIndex = 0;
      return part.replace(
        /(?<![=#])=([A-Za-z][A-Za-z0-9_:+*/<>!?-]*)(?=$|[\s.,;:)])/g,
        (_match, code) => `#raw(lang:"scheme", "${code}")`,
      );
    })
    .join("");
}

const bareSchemeIdentifiers = [
  "make-fake-vector-field",
  "covariant-derivative",
  "R2-rect-basis",
  "S2-Riemann",
  "s:map/r",
  "F-Lie",
];

function rawifyBareSchemeIdentifiers(body) {
  const protectedSpan = /(```[\s\S]*?```|`[^`\n]*`|\$[\s\S]*?\$|#raw\(lang:"scheme", "[^"]*"\))/g;
  return body
    .split(protectedSpan)
    .map(part => {
      protectedSpan.lastIndex = 0;
      if (!part || protectedSpan.test(part)) return part;
      protectedSpan.lastIndex = 0;

      let updated = part;
      for (const identifier of bareSchemeIdentifiers) {
        const pattern = new RegExp(
          `(?<![A-Za-z0-9_#-])${escapeRegex(identifier)}(?![A-Za-z0-9_-])`,
          "g",
        );
        updated = updated.replace(pattern, `#raw(lang:"scheme", "${identifier}")`);
      }
      return updated
        // Pandoc escapes `>` in prose. Tokens containing Scheme's `->` are
        // procedure names, not prose punctuation, so render them as code.
        .replace(
          /(?<![A-Za-z0-9_#-])([A-Za-z][A-Za-z0-9_:+*/!?-]*-\\>[A-Za-z0-9_:+*/!?-]+)(?![A-Za-z0-9_-])/g,
          (_match, identifier) => `#raw(lang:"scheme", "${identifier.replace("-\\>", "->")}")`,
        )
        .replace(
          /(?<![A-Za-z0-9_#-])F-\\>directional-derivative(?![A-Za-z0-9_-])/g,
          '#raw(lang:"scheme", "F->directional-derivative")',
        )
        .replace(
          /\(#raw\(lang:"scheme", "F-Lie"\) phi\)/g,
          '#raw(lang:"scheme", "(F-Lie phi)")',
        );
    })
    .join("");
}

function cleanTypstOutput(body) {
  return mathifyBareGreekInProse(rawifyBareSchemeIdentifiers(repairInlineCodeTranspilation(body.replace(/\\\$([^$\n]+?)\\\$/g, (_match, math) => {
    return `$${cleanTypstMath(math)}$`;
  })
    .replace(/(?<!\\)\$([^$\n]+?)(?<!\\)\$/g, (_match, math) => {
    return `$${cleanTypstMath(math)}$`;
  })
    .replace(/^=== ([a-z])\.\n/gm, "#strong[$1.]\n")
    .replace(/^FDGSUBHEADING (.+)$/gm, "=== $1")
    .replace(/\\~([^~\n]+)\\~/g, (_match, code) => `#raw(lang:"scheme", "${code}")`)
    .replace(/^== Metric Music\n/gm, "#heading(level: 2, numbering: none)[Metric Music]\n")
    .replace(/^Coordinate-Basis One-Form Fields\n/gm, "== Coordinate-Basis One-Form Fields <sec-3.5>\n")
    .replace(/^#block\[\n([\s\S]*?)^\]\n?/gm, (_match, inner) => `${inner.trimEnd()}\n`)
    .replace(/^\$\s*\$\n?/gm, "")
    .replace(/```(?:scheme)?\n#\| [^|\n]+ \|#\n```\n?/g, "")
    .replace(
      /#footnote\[The analogous recovery of coefficient tuples from vector fields is equation\s+```scheme\s+\(@3\.3\):[\s\S]*?```\]/g,
      "#footnote[The analogous recovery of coefficient tuples from vector fields is equation @3.3: $b^i_(chi, sans(v)) = sans(v)(chi^i) compose chi^(-1)$.]",
    )
    .replace(
      /```scheme\n\(see Chapter 9\)\. However, for orthonormal rectangular coordinates in\n\$\\mathrm\{R\}\^\{3\}\$ we can interpret the integrands in terms of forms\.\n```/g,
      "(see Chapter 9). However, for orthonormal rectangular coordinates in $upright(R)^3$ we can interpret the integrands in terms of forms.",
    )
    .replaceAll(
      "```scheme\n<<Cartan>>\n```",
      "```scheme\n(define Cartan\n  (Christoffel->Cartan\n   (metric->Christoffel-2 the-metric\n         (coordinate-system->basis R2-rect))))\n```",
    )
    .replace(
      /```scheme\n([\s\S]*?)\n```\n\n```\n(#\|[\s\S]*?\|#)\n```/g,
      (_match, code, result) => `\`\`\`scheme\n${code}\n\n${result}\n\`\`\``,
    )
    .replace(/\\#\|\n\n```scheme\n([\s\S]*?)\n\|#\n```\n?/g, "```scheme\n$1\n```\n")
    .replace(/(```scheme\n[\s\S]*?\n```)/g, block => block.replaceAll("’", "'"))
    .replace(/`([^`\n]+)`/g, (_match, code) => `\`${code.replaceAll("’", "'")}\``)
    .replace(/\\<([A-Z0-9]+\.\d+)\\>/g, "<$1>")
    .replaceAll("Les Mis´erables", "Les Misérables")
    .replaceAll('lang:"verbatim"', 'lang:"scheme"')
    .replaceAll("$upright(T e X)$", "#TeX")
    .replaceAll(
      `$ frac(d, d t) (frac(partial L (t\\,q\\,dot(q)), partial dot(q))|_(q=w (t) \\
 dot(q) = frac(d w (t), d t))) - frac(partial L (t\\,q\\,dot(q)), partial q)|_(q=w (t)\\
 dot(q) = frac(d w (t), d t)) = 0 . $`,
      `$ frac(d, d t) (lr(frac(partial L (t\\,q\\,dot(q)), partial dot(q))|)_(q=w (t) \\
 dot(q) = frac(d w (t), d t))) - lr(frac(partial L (t\\,q\\,dot(q)), partial q)|)_(q=w (t) \\
 dot(q) = frac(d w (t), d t)) = 0 . $`,
    )
    .replaceAll(
      "only value that is ever passed as m is (mu:N-\\>M n).",
      "only value that is ever passed as `m` is `(mu:N->M n)`.",
    )
    .replaceAll("\"curl\"", "curl")
    .replaceAll("\"grad\"", "grad")
    .replaceAll("\"Lap\"", "Lap")
    .replaceAll("\"div\"", "div")
    .replaceAll("\"length\"", "length")
    .replaceAll("\\[fn:1\\]", "")
    .replaceAll("[fn:1]", "")
    .replaceAll("chi'(sans(m) g t)", "chi'(sans(m))")
    .replaceAll(
      "cal(R) (bold(omega)\\,sans(u)\\,sans(v)\\,sans(w))bold(omega)",
      "cal(R) (bold(omega)\\,sans(u)\\,sans(v)\\,sans(w)) = bold(omega)",
    )
    .replaceAll(
      "cal(R) (bold(omega)\\,sans(u)\\,sans(v)\\,sans(w))\\\n bold(omega)",
      "cal(R) (bold(omega)\\,sans(u)\\,sans(v)\\,sans(w)) =\\\n bold(omega)",
    )
    .replace(/\)\s*!=/g, ") !=")
    .replace(/\)\s*equiv/g, ") \"≡\"")
    .replace(/(bb|binom|sans|scale)\s+\(/g, "$1(")
    .replaceAll("dots.h.c", "dots.c")
    .replaceAll("dots.h", "dots")
    .replaceAll("^komega", "^k omega")
    .replaceAll("/i/th argument", "$i$th argument")
    .replace(/#strong\[#strong\[([^\]\n]+)\]\]/g, "#strong[$1]")
    .replaceAll("(literal function", "(literal-function")
    .replaceAll("(literal-manifold function", "(literal-manifold-function")
    .replaceAll("sans(() sans(", "sans(v) (sans(")
    .replaceAll("u_(() x)", "u_i (x)")
    .replaceAll("sum_k sans(X) (sans(f))sans(c)_j^k", "sum_k sans(X)_k(sans(f))sans(c)_j^k")
    .replaceAll("$v = v^{0}{∂}/{∂x} + v^{1}{∂}/{∂y},$", "$sans(v) = sans(v)^0 partial\\/partial sans(x) + sans(v)^1 partial\\/partial sans(y),$")
    .replaceAll("$A = dx ∧ dy.$", "$sans(A) = sans(d) sans(x) \"∧\" sans(d) sans(y).$")
    .replaceAll(
      "$ sans(d) theta (sans(v))= dot(theta) sans(d) phi.alt (sans(v))= dot(phi.alt)\\, $",
      "$ sans(d) theta (sans(v))= dot(theta) \\\n sans(d) phi.alt (sans(v))= dot(phi.alt)\\, $",
    )
    .replaceAll("[)](", "[)] (")
    .replaceAll("[(](", "[(] (")
    .replaceAll("$180^compose$", "180°")
    .replaceAll("$z = 0$\\.)", "$z = 0$.)")
    .replace(/(#scale\([^)]*\)\[[^\]]+\])\(/g, "$1 ("))));
}

const figureCaptions = {
  "fig-2-1.pdf": "Here there are two overlapping coordinate patches that are the domains of the two coordinate functions $chi$ and $chi'$. It is possible to represent manifold points in the overlap using either coordinate system. The coordinate transformation from $chi'$ coordinates to $chi$ coordinates is just the composition $chi compose chi'^(-1)$.",
  "fig-2-2.pdf": "The coordinate function $chi$ maps points on the manifold in the coordinate patch to a tuple of coordinates. A function $f$ on the manifold $M$ can be represented in coordinates by a function $f_chi = f compose chi^(-1)$.",
  "fig-2-3.pdf": "For each point on the sphere (except for its north pole) a line is drawn from the north pole through the point and extending to the equatorial plane. The corresponding point on the plane is where the line intersects the plane. The rectangular coordinates of this point on the plane are the Riemann coordinates of the point on the sphere. The points on the plane can also be specified with polar coordinates $(rho, theta)$ and the points on the sphere are specified both by Riemann coordinates and the traditional colatitude and longitude $(phi, lambda)$.",
  "fig-4-1.pdf": "Let arrows $e_0$ and $e_1$ depict the vectors of a basis vector field at a particular point. Then the foliations shown by the parallel lines depict the dual basis one-form fields at that point. The dotted lines represent the field $tilde(e)^0$ and the dashed lines represent the field $tilde(e)^1$. The spacings of the lines are $1/3$ unit. That the vectors pierce three of the lines representing their duals and do not pierce any of the lines representing the other basis elements is one way to see the relationship $tilde(e)^i (e_j)(m) = delta^i_j$.",
  "fig-4-2.pdf": "The commutator of two vector fields computes the residual of a small loop following their integral curves.",
  "fig-5-1.pdf": "The area of the parallelogram in the $(x, y)$ coordinate plane is given by $A(u, v)(m)$.",
  "fig-6-1.pdf": "The vector field $v$ on $M$ is indicated by arrows. The solid arrows are $v_mu$, the restricted vector field over the map $mu$. The vector field over the map is restricted to the image of $N$ in $M$.",
  "fig-7-1.pdf": "If $v$ and $v'$ are \"arrow\" representations of vectors in the circular field and we parallel-transport $v$ in the $partial slash partial x$ direction, then the difference between $v'$ and the parallel transport of $v$ is in the $partial slash partial y$ direction.",
};

function figurePdf(file, width = "49.2%") {
  const caption = figureCaptions[file];
  if (!caption) throw new Error(`Missing caption for figure asset ${file}`);
  const figureName = file.replace(/\.pdf$/, "");
  return `#fdg-figure(fdg-cetz-figure(${JSON.stringify(figureName)}), [${caption}])\n\n`;
}

function normalizeTypstSubsupBraces(body) {
  const protectedSpan = /(```[\s\S]*?```|`[^`\n]*`|#raw\(lang:"scheme", "[^"]*"\))/g;
  return body
    .split(protectedSpan)
    .map(part => {
      protectedSpan.lastIndex = 0;
      if (!part || protectedSpan.test(part)) return part;
      protectedSpan.lastIndex = 0;
      return part.replace(/([_^])\{([^{}\n]+)\}/g, "$1($2)");
    })
    .join("");
}

function insertFigurePdfs(stem, body) {
  const replacements = {
    chapter002: [
      [
        "(see figure 2.1).",
        `(see figure 2.1).\n\n${figurePdf("fig-2-1.pdf")}`,
      ],
      [
        "(see figure 2.2):",
        `(see figure 2.2):\n\n${figurePdf("fig-2-2.pdf")}`,
      ],
      [
        "(See figure 2.3.)",
        `(See figure 2.3.)\n\n${figurePdf("fig-2-3.pdf")}`,
      ],
    ],
    chapter004: [
      [
        /TODO add Figure 4\.1 with this caption:[^\n]+/g,
        figurePdf("fig-4-1.pdf"),
      ],
      [
        "This result is illustrated in figure 4.2.",
        `This result is illustrated in figure 4.2.\n\n${figurePdf("fig-4-2.pdf")}`,
      ],
    ],
    chapter005: [
      [
        "An example two-form (see figure 5.1)",
        `${figurePdf("fig-5-1.pdf")}\n\nAn example two-form (see figure 5.1)`,
      ],
    ],
    chapter006: [
      [
        "as illustrated in figure 6.1.",
        `as illustrated in figure 6.1.\n\n${figurePdf("fig-6-1.pdf")}`,
      ],
    ],
    chapter007: [
      [
        "(See figure 7.1.)",
        `(See figure 7.1.)\n\n${figurePdf("fig-7-1.pdf")}`,
      ],
    ],
  };

  let result = body;
  for (const [from, to] of replacements[stem] ?? []) {
    result = result.replace(from, to);
  }
  return result.replace(/(#align\(center\)\[#image\([^\n]+\)\])\s+/g, "$1\n\n");
}

function repairChapter11(body) {
  let result = body;
  const insertions = [
    [
      "This is Carl Friedrich Gauss\\'s law for electrostatics:",
      "$ div arrow(E) = 4 pi rho. $ <11.1>",
    ],
    [
      "This is Gauss\\'s law for magnetostatics:",
      "$ div arrow(B) = 0. $ <11.2>",
    ],
    [
      "Hans Christian Oersted and quantified by André-Marie Ampère:",
      "$ curl arrow(B) = frac(4 pi, c) arrow(I). $ <11.3>",
    ],
    [
      "electric fields are produced by moving magnetic fields:",
      "$ curl arrow(E) = - frac(1, c) frac(partial arrow(B), partial t). $ <11.4>",
    ],
    [
      "Benjamin Franklin was the first to understand that electrical charges are conserved:",
      "$ div arrow(I) + frac(partial rho, partial t) = 0. $ <11.5>",
    ],
    [
      "take the divergence of equation (11.3) we get",
      "$ div curl arrow(B) = 0 = frac(4 pi, c) div arrow(I), $ <11.6>",
    ],
    [
      "equation (11.3) to read",
      "$ curl arrow(B) = frac(1, c) frac(partial arrow(E), partial t) + frac(4 pi, c) arrow(I). $ <11.7>",
    ],
    [
      "Maxwell proceeded by taking the curl of equation (11.4) to get",
      "$ curl curl arrow(E) = - frac(1, c) frac(partial, partial t) curl arrow(B). $ <11.8>",
    ],
    [
      "Expanding the left-hand side",
      "$ grad div arrow(E) - Lap arrow(E) = - frac(1, c) frac(partial curl arrow(B), partial t), $ <11.9>",
    ],
    [
      "the inhomogeneous wave equation:",
      "$ Lap arrow(E) - frac(1, c^2) frac(partial^2 arrow(E), partial t^2) = 4 pi lr(grad rho + frac(1, c^2) arrow(I)). $ <11.10>",
    ],
    [
      "in an electromagnetic field:",
      "$ arrow(F) = q arrow(E) + frac(q, c) arrow(v) times arrow(B). $ <11.11>",
    ],
    [
      "the homogeneous linear wave equation is",
      "$ frac(partial^2 phi.alt (u), partial x^2) + frac(partial^2 phi.alt (u), partial y^2) + frac(partial^2 phi.alt (u), partial z^2) - frac(1, c^2) frac(partial^2 phi.alt (u), partial t^2) = 0. $ <11.12>",
    ],
    [
      "incremental tuple in position and time $xi =(Delta t\\,Delta x\\,Delta y\\,Delta z)$ we have#footnote[Here the length is independent of the spacetime point specified by $u$. In General Relativity we find that the metric, and thus the length function needs to vary with the point in spacetime.]",
      "$ length_u (xi) = sqrt((Delta x)^2 + (Delta y)^2 + (Delta z)^2 - (c Delta t)^2), $ <11.13>",
    ],
    [
      "then the light cones are the hypersurfaces, for which",
      "$ length_u (Delta t, Delta x, Delta y, Delta z) = 0. $ <11.14>",
    ],
    [
      "Then $psi$ will satisfy the wave equation",
      "$ frac(partial^2 psi (u'), partial (x')^2) + frac(partial^2 psi (u'), partial (y')^2) + frac(partial^2 psi (u'), partial (z')^2) - frac(1, c^2) frac(partial^2 psi (u'), partial (t')^2) = 0, $ <11.20>",
    ],
    [
      "if and only if",
      "$ length_(u') (xi') = length_(A (u')) (D A xi') = length_u (xi). $ <11.21>",
    ],
  ];

  for (const [marker, math] of insertions) {
    result = result.replace(marker, `${marker}\n\n${math}`);
  }

  return result
    .replaceAll("$ xi^0 = p (xi')^0+ q (xi')^1xi^1 = r (xi')^0+ s (xi')^1. $", "$ xi^0 = p (xi')^0 + q (xi')^1 \\\\\nxi^1 = r (xi')^0 + s (xi')^1. $")
    .replaceAll("$ xi^0 = p (xi')^0+ q (xi')^1\\\n xi^1 = r (xi')^0+ s (xi')^1. $", "$ xi^0 = p (xi')^0 + q (xi')^1 \\\\\nxi^1 = r (xi')^0 + s (xi')^1. $")
    .replaceAll("$ p^2 - r^2 = 1\\,p q - r s = 0\\,q^2 - s^2 = - 1 . $", "$ p^2 - r^2 = 1, \\\\\np q - r s = 0, \\\\\nq^2 - s^2 = -1. $")
    .replaceAll("$ xi^0 = gamma (beta) ((xi')^0 + beta (xi')^1) xi^1 = gamma (beta) (beta (xi')^0 + (xi')^1) . $", "$ xi^0 = gamma (beta) ((xi')^0 + beta (xi')^1) \\\\\nxi^1 = gamma (beta) (beta (xi')^0 + (xi')^1). $")
    .replaceAll("$ xi^0 = gamma (beta) ((xi')^0 + beta (xi')^1) xi^1 = gamma (beta) (beta (xi')^0 + (xi')^1) xi^2 =(xi')^2xi^3 =(xi')^3. $", "$ xi^0 = gamma (beta) ((xi')^0 + beta (xi')^1) \\\\\nxi^1 = gamma (beta) (beta (xi')^0 + (xi')^1) \\\\\nxi^2 = (xi')^2 \\\\\nxi^3 = (xi')^3. $")
    .replaceAll("$beta = lr(bar.v.double bold(beta) bar.v.double)$", "$beta = norm(bold(beta))$")
    .replaceAll("$ xi^0 = gamma (beta) ((xi')^0 + beta | (bold(xi))^parallel |)\\,|bold(xi)^parallel|= gamma (beta) (beta (xi')^0 + | (bold(xi))^parallel |)\\,bold(xi)^perp = (bold(xi)')^perp . $", "$ xi^0 = gamma (beta) ((xi')^0 + beta norm((bold(xi))^parallel)) \\\\\nnorm(bold(xi)^parallel) = gamma (beta) (beta (xi')^0 + norm((bold(xi))^parallel)) \\\\\nbold(xi)^perp = (bold(xi)')^perp. $")
    .replaceAll("$ xi^0 = gamma (beta) ((xi')^0 + bold(beta) dot.op bold(xi)) bold(xi) = gamma (beta) (bold(beta) (xi')^0 + bold(xi)' + frac(gamma (beta)- 1, beta^2) bold(beta) (bold(beta) dot.op bold(xi)))\\, $", "$ xi^0 = gamma (beta) ((xi')^0 + bold(beta) dot.op bold(xi)) \\\\\nbold(xi) = gamma (beta) (bold(beta) (xi')^0 + bold(xi)' + frac(gamma (beta) - 1, beta^2) bold(beta) (bold(beta) dot.op bold(xi))). $")
    .replaceAll("the origin of the primed system moves with velocity v = βc along the ˆx-axis", "the origin of the primed system moves with velocity $v = beta c$ along the $hat(x)$-axis")
    .replaceAll("$ cal(R) (R)compose B (bold(beta))= B (R (bold(beta))) compose cal(R) (R). $", "$ cal(R) (R) compose B (bold(beta)) = B (R (bold(beta))) compose cal(R) (R). $")
    .replaceAll("$ Lambda = B (bold(beta))cal(R) . $", "$ Lambda = B (bold(beta)) cal(R). $");
}

function repairChapter1(body) {
  return body
    .replaceAll(
    "When you get to the Pole note that the stick is perpendicular to the line you inscribed in the ice. But you started with that stick parallel to that line and you kept the stick pointing in the same direction on the Earth throughout your walk --- how did it change orientation?",
    "When you get to the Pole note that the stick is perpendicular to the line you inscribed in the ice. But you started with that stick parallel to that line and you kept the stick pointing in the same direction on the Earth throughout your walk --- how did it change orientation?<intro-parallel-transport>",
    )
    .replaceAll(
      "We will explain this in depth in Chapter 7.",
      "We will explain this in depth in Section #fdg-ref-page(<sec-7.10>).",
    )
    .replaceAll(
      "we will explain it in Chapter 7.",
      "we will explain it in Section #fdg-ref-page(<sec-7.10>).",
    );
}

function repairPrologue(body) {
  return body
    .replaceAll("Papert \\@papert1980mindstorms", "Papert @papert1980mindstorms")
    .replaceAll(
      "By thinking computationally we have reformulated the Lagrange equations into a form that is explicit enough to specify a computation. We could convert it into a program for any symbolic manipulation program because it tells us #emph[how] to manipulate expressions to compute the residuals of Lagrange's equations for a purported solution path.#footnote",
      "By thinking computationally we have reformulated the Lagrange equations into a form that is explicit enough to specify a computation. We could convert it into a program for any symbolic manipulation program because it tells us #emph[how] to manipulate expressions to compute the residuals of Lagrange's equations for a purported solution path.<prologue-residuals>#footnote",
    );
}

function repairAppendixA(body) {
  return body
    .replaceAll(
      '$ (quad italic("operator") quad italic("operand-1") quad dots.c quad italic("operand-n") quad) $',
      "```scheme\n(operator operand-1 ... operand-n)\n```",
    )
    .replaceAll(
      '$ mono("(lambda") quad italic("formal-parameters") quad italic("body") mono(")") $',
      "```scheme\n(lambda formal-parameters body)\n```",
    )
    .replaceAll(
      '$ mono("(cond ") mono("(") italic("predicate-1") quad italic("consequent-1") mono(")") \\\n dots.c \\\n mono("(") italic("predicate-n") quad italic("consequent-n") mono("))") $',
      "```scheme\n(cond (predicate-1 consequent-1)\n      ...\n      (predicate-n consequent-n))\n```",
    )
    .replaceAll(
      '$ mono("(if") quad italic("predicate") quad italic("consequent") quad italic("alternative") mono(")") $',
      "```scheme\n(if predicate consequent alternative)\n```",
    )
    .replaceAll(
      '$ mono("(let (") mono("(") italic("variable-1") quad italic("expression-1") mono(")") \\\n dots.c \\\n mono("(") italic("variable-n") quad italic("expression-n") mono("))") \\\n #h(2em) italic("body") mono(")") $',
      "```scheme\n(let ((variable-1 expression-1)\n      ...\n      (variable-n expression-n))\n  body)\n```",
    );
}

function repairChapter2(body) {
  return body.replaceAll(
    "and the manifold function $sans(f)$ is represented in coordinates by a function $f$ that takes a pair of real numbers and produces a real number $ f : sans(R)^2 arrow.r sans(R) f :(x\\,y)arrow.r f (x\\,y). $ <2.6> We define our manifold function $ sans(f) : sans(M) arrow.r sans(R) sans(f) : sans(m) arrow.r (f compose chi) (sans(m)). $ <2.7>",
    "and the manifold function $sans(f)$ is represented in coordinates by a function $f$ that takes a pair of real numbers and produces a real number\n\n$ f : sans(R)^2 arrow.r sans(R) \\\nf :(x\\,y) arrow.r f (x\\,y). $ <2.6>\n\nWe define our manifold function\n\n$ sans(f) : sans(M) arrow.r sans(R) \\\nsans(f) : sans(m) arrow.r (f compose chi) (sans(m)). $ <2.7>",
  );
}

function repairChapter3(body) {
  return body
    .replace(
      /#footnote\[The analogous recovery of coefficient tuples from vector fields is equation\s+```scheme\s+\(@3\.3\):[\s\S]*?```\]/,
      "#footnote[The analogous recovery of coefficient tuples from vector fields is equation @3.3: $b^i_(chi, sans(v)) = sans(v)(chi^i) compose chi^(-1)$.]",
    )
    // The vendored source closes `coordinatize` before its final expression.
    .replace("(* ((D f) x) (b x)))))\n(make-operator coordinatized-v))", "(* ((D f) x) (b x))))\n  (make-operator coordinatized-v))");
}

function repairChapter4(body) {
  return body
    .replaceAll(
      "$ tilde(sans(e))^i (sans(e)_j) (sans(m))= delta_j^i = sum_k sans(d)_k^i (sans(m))\\\n sans(c)_j^k (sans(m)). $ <4.6>",
      "$ tilde(sans(e))^i (sans(e)_j) (sans(m))= delta_j^i = sum_k sans(d)_k^i (sans(m)) sans(c)_j^k (sans(m)). $ <4.6>",
    )
    .replaceAll(
      "$ sans(v) (sans(f))= sum_i sans(e)_i (sans(f))sans(b)^i \\\n &= sum_i sans(e')_j (sans(f))sans(b')^j . $ <4.9>",
      "$ sans(v) (sans(f))= sum_i sans(e)_i (sans(f))sans(b)^i = sum_i sans(e')_j (sans(f))sans(b')^j . $ <4.9>",
    )
    .replaceAll(
      "$ sans(v) (sans(f))= sum_i sans(e)_i (sans(f))sans(b)^i  &= sum_i sans(e')_j (sans(f))sans(b')^j . $ <4.9>",
      "$ sans(v) (sans(f))= sum_i sans(e)_i (sans(f))sans(b)^i = sum_i sans(e')_j (sans(f))sans(b')^j . $ <4.9>",
    )
    .replaceAll(
      "$ sans(v) (sans(f)) (sans(m))= sans(e) (sans(f)) (sans(m))\\\n sans(b) (sans(m))= \\\n sum_i sans(e)_i (sans(f)) (sans(m))sans(b)^i (sans(m))\\, $ <4.1>",
      "$ sans(v) (sans(f)) (sans(m))= sans(e) (sans(f)) (sans(m)) sans(b) (sans(m))= sum_i sans(e)_i (sans(f)) (sans(m))sans(b)^i (sans(m))\\, $ <4.1>",
    )
    .replaceAll(
      "$ sans(a)_i = bold(omega) (sans(e)_i)= sum_j sans(a)'_j tilde(sans(e))^(' j) (sans(e)_i)\\\n &= sum_j sans(a)'_j sans(J)_i^j $ <4.19>",
      "$ sans(a)_i = bold(omega) (sans(e)_i)= sum_j sans(a)'_j tilde(sans(e))^(' j) (sans(e)_i) = sum_j sans(a)'_j sans(J)_i^j $ <4.19>",
    )
    .replaceAll(
      "$ sans(a)_i = bold(omega) (sans(e)_i)= sum_j sans(a)'_j tilde(sans(e))^(' j) (sans(e)_i) &= sum_j sans(a)'_j sans(J)_i^j $ <4.19>",
      "$ sans(a)_i = bold(omega) (sans(e)_i)= sum_j sans(a)'_j tilde(sans(e))^(' j) (sans(e)_i) = sum_j sans(a)'_j sans(J)_i^j $ <4.19>",
    )
    .replaceAll(
      "$ sans(e)_x = a frac(partial, partial theta) + b frac(partial, partial phi.alt) + c frac(partial, partial psi) \\\n &= cos phi.alt frac(partial, partial theta) - frac(sin phi.alt cos theta, sin theta) frac(partial, partial phi.alt) + frac(sin phi.alt, sin theta) frac(partial, partial psi) . $ <4.29>",
      "$ sans(e)_x = a frac(partial, partial theta) + b frac(partial, partial phi.alt) + c frac(partial, partial psi) = cos phi.alt frac(partial, partial theta) - frac(sin phi.alt cos theta, sin theta) frac(partial, partial phi.alt) + frac(sin phi.alt, sin theta) frac(partial, partial psi) . $ <4.29>",
    )
    .replaceAll(
      "$ sans(e)_x = a frac(partial, partial theta) + b frac(partial, partial phi.alt) + c frac(partial, partial psi)  &= cos phi.alt frac(partial, partial theta) - frac(sin phi.alt cos theta, sin theta) frac(partial, partial phi.alt) + frac(sin phi.alt, sin theta) frac(partial, partial psi) . $ <4.29>",
      "$ sans(e)_x = a frac(partial, partial theta) + b frac(partial, partial phi.alt) + c frac(partial, partial psi) = cos phi.alt frac(partial, partial theta) - frac(sin phi.alt cos theta, sin theta) frac(partial, partial phi.alt) + frac(sin phi.alt, sin theta) frac(partial, partial psi) . $ <4.29>",
    )
    .replaceAll(
      "$ [sans(u)\\,sans(v)] (sans(f))= sans(u) (sans(v) (sans(f)))- sans(v) (sans(u) (sans(f))) &= sans(u) (sum_i sans(X)_i (sans(f)) sans(c)^i) - sans(v) (sum_j sans(X)_j (sans(f)) sans(b)^j) \\\n &= sum_j sans(X)_j (sum_i sans(X)_i (sans(f)) sans(c)^i) sans(b)^j - sum_i sans(X)_i (sum_j sans(X)_j (sans(f)) sans(b)^j) sans(c)^i \\\n &= sum_(i j) [sans(X)_j \\, sans(X)_i] (sans(f))sans(c)^i sans(med b)^j \\\n + sum_i sans(X)_i (sans(f))sum_j (sans(X)_j (sans(c)^i) sans(b)^j - sans(X)_j (sans(med b)^i) sans(c)^j) \\\n &= sum_i sans(X)_i (sans(f))sans(a)^i\\, $ <4.34>",
      "$ [sans(u)\\,sans(v)] (sans(f))= sans(u) (sans(v) (sans(f)))- sans(v) (sans(u) (sans(f))) &= sans(u) (sum_i sans(X)_i (sans(f)) sans(c)^i) - sans(v) (sum_j sans(X)_j (sans(f)) sans(b)^j) \\\n &= sum_j sans(X)_j (sum_i sans(X)_i (sans(f)) sans(c)^i) sans(b)^j - sum_i sans(X)_i (sum_j sans(X)_j (sans(f)) sans(b)^j) sans(c)^i \\\n &= sum_(i j) [sans(X)_j \\, sans(X)_i] (sans(f))sans(c)^i sans(med b)^j \\\n &+ sum_i sans(X)_i (sans(f))sum_j (sans(X)_j (sans(c)^i) sans(b)^j - sans(X)_j (sans(med b)^i) sans(c)^j) \\\n &= sum_i sans(X)_i (sans(f))sans(a)^i\\, $ <4.34>",
    )
    .replaceAll(
      "$ sans(a)^i = sum_j (sans(X)_j (sans(c)^i) sans(b)^j \\\n - sans(X)_j (sans(b)^i) sans(c)^j)  &= sans(u) (sans(c)^i) - sans(v) (sans(b)^i) . $ <4.35>",
      "$ sans(a)^i = sum_j (sans(X)_j (sans(c)^i) sans(b)^j - sans(X)_j (sans(b)^i) sans(c)^j) = sans(u) (sans(c)^i) - sans(v) (sans(b)^i) . $ <4.35>",
    )
    .replaceAll(
      "$ sans(a)^i = sum_j (sans(X)_j (sans(c)^i) sans(b)^j \\\n &- sans(X)_j (sans(b)^i) sans(c)^j)  &= sans(u) (sans(c)^i) - sans(v) (sans(b)^i) . $ <4.35>",
      "$ sans(a)^i = sum_j (sans(X)_j (sans(c)^i) sans(b)^j - sans(X)_j (sans(b)^i) sans(c)^j) = sans(u) (sans(c)^i) - sans(v) (sans(b)^i) . $ <4.35>",
    )
    .replaceAll(
      "$ sans(a)^i = sum_j (sans(X)_j (sans(c)^i) sans(b)^j \\\n &quad - sans(X)_j (sans(b)^i) sans(c)^j)  &= sans(u) (sans(c)^i) - sans(v) (sans(b)^i) . $ <4.35>",
      "$ sans(a)^i = sum_j (sans(X)_j (sans(c)^i) sans(b)^j - sans(X)_j (sans(b)^i) sans(c)^j) = sans(u) (sans(c)^i) - sans(v) (sans(b)^i) . $ <4.35>",
    )
    .replaceAll(
      "$ [sans(u)\\,sans(v)] (sans(f))= sum_k sans(e)_k (sans(f)) (\\\n sans(u) (sans(c)^k) - sans(v) (sans(b)^k) + sum_(i j) sans(c)^i sans(b)^j sans(d)_(j i)^k \\\n) $ <4.38>",
      "$ [sans(u)\\,sans(v)] (sans(f))= sum_k sans(e)_k (sans(f)) (sans(u) (sans(c)^k) - sans(v) (sans(b)^k) + sum_(i j) sans(c)^i sans(b)^j sans(d)_(j i)^k) $ <4.38>",
    )
    .replaceAll(
      "$ e^A e^B e^(- A) e^(- B)  &= (1 + A + A^2 / 2 + dots.c) (1 + B + B^2 / 2 + dots.c) \\\n times (1 - A + A^2 / 2 + dots.c) (1 - B + B^2 / 2 + dots.c) \\\n &= 1 +[A\\,B]+ dots.c\\, $",
      "$ e^A e^B e^(- A) e^(- B)  &= (1 + A + A^2 / 2 + dots.c) (1 + B + B^2 / 2 + dots.c) times (1 - A + A^2 / 2 + dots.c) (1 - B + B^2 / 2 + dots.c) \\\n &= 1 +[A\\,B]+ dots.c\\, $",
    )
    .replaceAll(
      "$ (e^(t sans(v))) (sans(m)) \\\n &= (sans(f) compose phi.alt_t^(sans(v))) (sans(m)) . $ <4.40>",
      "$ (e^(t sans(v))) (sans(m)) = (sans(f) compose phi.alt_t^(sans(v))) (sans(m)) . $ <4.40>",
    )
    .replaceAll(
      "$ (e^(t sans(v))) (sans(m))  &= (sans(f) compose phi.alt_t^(sans(v))) (sans(m)) . $ <4.40>",
      "$ (e^(t sans(v))) (sans(m)) = (sans(f) compose phi.alt_t^(sans(v))) (sans(m)) . $ <4.40>",
    )
    .replaceAll(
      "$ (e^(s sans(w)) e^(t sans(v))) (sans(m)) \\\n &= (sans(f) compose phi.alt_t^(sans(v)) compose phi.alt_s^(sans(w))) (sans(m)) . $ <4.41>",
      "$ (e^(s sans(w)) e^(t sans(v))) (sans(m)) = (sans(f) compose phi.alt_t^(sans(v)) compose phi.alt_s^(sans(w))) (sans(m)) . $ <4.41>",
    )
    .replaceAll(
      "$ (e^(s sans(w)) e^(t sans(v))) (sans(m))  &= (sans(f) compose phi.alt_t^(sans(v)) compose phi.alt_s^(sans(w))) (sans(m)) . $ <4.41>",
      "$ (e^(s sans(w)) e^(t sans(v))) (sans(m)) = (sans(f) compose phi.alt_t^(sans(v)) compose phi.alt_s^(sans(w))) (sans(m)) . $ <4.41>",
    )
    .replaceAll(
      "$ (e^(epsilon.alt sans(v)) e^(epsilon.alt sans(w)) \\\n e^(- epsilon.alt sans(v)) e^(- epsilon.alt sans(w)) sans(f)) (sans(m)) . $ <4.42>",
      "$ (e^(epsilon.alt sans(v)) e^(epsilon.alt sans(w)) e^(- epsilon.alt sans(v)) e^(- epsilon.alt sans(w)) sans(f)) (sans(m)) . $ <4.42>",
    );
}

function repairChapter5(body) {
  return body
    .replaceAll(
      "$ sans(d) omega (sans(v)_0\\,dots.c\\,sans(v)_k)\\\n &= sum_(i=0)^k {((- 1)^i sans(v)_i (omega (sans(v)_0 \\, dots.c \\, sans(v)_(i - 1) \\, sans(v)_(i + 1) \\, dots.c \\, sans(v)_k)) + \\\n sum_(j=i + 1)^k (- 1)^(i + j) omega (sans(v)_i \\, sans(v)_j] \\, sans(v)_0 \\, dots.c \\, sans(v)_(i - 1) \\, sans(v)_(i + 1) \\, dots.c \\, sans(v)_(j - 1) \\, sans(v)_(j + 1) \\, dots.c \\, sans(v)_k))} . $ <5.24>",
      "$ sans(d) omega (sans(v)_0\\,dots.c\\,sans(v)_k) &= sum_(i=0)^k \\\n &quad {((- 1)^i sans(v)_i (omega (sans(v)_0 \\, dots.c \\, sans(v)_(i - 1) \\, sans(v)_(i + 1) \\, dots.c \\, sans(v)_k))\\\n &quad + sum_(j=i + 1)^k (- 1)^(i + j) omega ([sans(v)_i\\,sans(v)_j] \\, sans(v)_0 \\, dots.c \\, sans(v)_(i - 1) \\, sans(v)_(i + 1) \\, dots.c \\, sans(v)_(j - 1) \\, sans(v)_(j + 1) \\, dots.c \\, sans(v)_k))} . $ <5.24>",
    )
    .replaceAll(
      "$ sans(d) omega (sans(v)_0\\,dots.c\\,sans(v)_k) &= sum_(i=0)^k {((- 1)^i sans(v)_i (omega (sans(v)_0 \\, dots.c \\, sans(v)_(i - 1) \\, sans(v)_(i + 1) \\, dots.c \\, sans(v)_k)) + \\\n sum_(j=i + 1)^k (- 1)^(i + j) omega (sans(v)_i \\, sans(v)_j] \\, sans(v)_0 \\, dots.c \\, sans(v)_(i - 1) \\, sans(v)_(i + 1) \\, dots.c \\, sans(v)_(j - 1) \\, sans(v)_(j + 1) \\, dots.c \\, sans(v)_k))} . $ <5.24>",
      "$ sans(d) omega (sans(v)_0\\,dots.c\\,sans(v)_k) &= sum_(i=0)^k \\\n &quad {((- 1)^i sans(v)_i (omega (sans(v)_0 \\, dots.c \\, sans(v)_(i - 1) \\, sans(v)_(i + 1) \\, dots.c \\, sans(v)_k))\\\n &quad + sum_(j=i + 1)^k (- 1)^(i + j) omega ([sans(v)_i\\,sans(v)_j] \\, sans(v)_0 \\, dots.c \\, sans(v)_(i - 1) \\, sans(v)_(i + 1) \\, dots.c \\, sans(v)_(j - 1) \\, sans(v)_(j + 1) \\, dots.c \\, sans(v)_k))} . $ <5.24>",
    )
    .replaceAll(
      "$ integral_(chi (sans(P))) sans(d) omega (partial\\/partial sans(x)\\,partial\\/partial sans(y))compose chi^(-1)  &= integral_(x_\"min\")^(x_\"max\") ((omega (partial\\/partial sans(x)))compose chi^(-1)) (x\\,y_\"min\")d x \\\n integral_(y_\"min\")^(y_\"max\") ((omega (partial\\/partial sans(y))compose chi^(-1)) (x_\"max\"\\,y)d y \\\n &- integral_(x_\"min\")^(x_\"max\") ((omega (partial\\/partial sans(x)))compose chi^(-1)) (x\\,y_\"max\")d x \\\n &- integral_(y_\"min\")^(y_\"max\") ((omega (partial\\/partial sans(y)))compose chi^(-1)) (x_\"min\"\\,y)d y \\\n &= integral_(partial sans(P)) omega\\, $ <5.34>",
      "$ integral_(chi (sans(P))) sans(d) omega (partial\\/partial sans(x)\\,partial\\/partial sans(y))compose chi^(-1) &= integral_(x_\"min\")^(x_\"max\") ((omega (partial\\/partial sans(x)))compose chi^(-1)) (x\\,y_\"min\")d x \\\n &quad + integral_(y_\"min\")^(y_\"max\") ((omega (partial\\/partial sans(y)))compose chi^(-1)) (x_\"max\"\\,y)d y \\\n &quad - integral_(x_\"min\")^(x_\"max\") ((omega (partial\\/partial sans(x)))compose chi^(-1)) (x\\,y_\"max\")d x \\\n &quad - integral_(y_\"min\")^(y_\"max\") ((omega (partial\\/partial sans(y)))compose chi^(-1)) (x_\"min\"\\,y)d y \\\n &= integral_(partial sans(P)) omega\\, $ <5.34>",
    )
    .replaceAll(
      "$ integral_(chi (sans(P))) sans(d) omega (partial\\/partial sans(x)\\,partial\\/partial sans(y))compose chi^(-1)  &= integral_(x_\"min\")^(x_\"max\") ((omega (partial\\/partial sans(x)))compose chi^(-1)) (x\\,y_\"min\")d x \\\n integral_(y_\"min\")^(y_\"max\") ((omega (partial\\/partial sans(y))compose chi^(-1)) (x_\"max\"\\,y)d y \\\n &quad - integral_(x_\"min\")^(x_\"max\") ((omega (partial\\/partial sans(x)))compose chi^(-1)) (x\\,y_\"max\")d x \\\n &quad - integral_(y_\"min\")^(y_\"max\") ((omega (partial\\/partial sans(y)))compose chi^(-1)) (x_\"min\"\\,y)d y \\\n &= integral_(partial sans(P)) omega\\, $ <5.34>",
      "$ integral_(chi (sans(P))) sans(d) omega (partial\\/partial sans(x)\\,partial\\/partial sans(y))compose chi^(-1) &= integral_(x_\"min\")^(x_\"max\") ((omega (partial\\/partial sans(x)))compose chi^(-1)) (x\\,y_\"min\")d x \\\n &quad + integral_(y_\"min\")^(y_\"max\") ((omega (partial\\/partial sans(y)))compose chi^(-1)) (x_\"max\"\\,y)d y \\\n &quad - integral_(x_\"min\")^(x_\"max\") ((omega (partial\\/partial sans(x)))compose chi^(-1)) (x\\,y_\"max\")d x \\\n &quad - integral_(y_\"min\")^(y_\"max\") ((omega (partial\\/partial sans(y)))compose chi^(-1)) (x_\"min\"\\,y)d y \\\n &= integral_(partial sans(P)) omega\\, $ <5.34>",
    );
}

function repairChapter7(body) {
  return body
    .replaceAll(
      "sum_k pi.alt_k^j (sans(v)) sans(w)^k",
      "sum_k (pi.alt_k^j (sans(v)) sans(w)^k)",
    )
    .replaceAll(
      "sum_k pi.alt_k^j (sans(v)) tilde(sans(e))^k",
      "sum_k (pi.alt_k^j (sans(v)) tilde(sans(e))^k)",
    )
    .replaceAll(
      "$ D g (delta)= \\\n sum_(i j) #scale(x: 120%, y: 120%)[(] A_j^i (delta) ((sans(v) (sans(u)^j))compose phi.alt_(- delta)^(sans(v)))sans(e)_i (sans(f))- D A_j^i (delta) (sans(u)^j compose phi.alt_(- delta)^(sans(v)))sans(e)_i (sans(f))#scale(x: 120%, y: 120%)[)] (sans(m)). $ <7.41>",
      "$ D g (delta)= sum_(i j) #scale(x: 120%, y: 120%)[(] A_j^i (delta) ((sans(v) (sans(u)^j))compose phi.alt_(- delta)^(sans(v)))sans(e)_i (sans(f))- D A_j^i (delta) (sans(u)^j compose phi.alt_(- delta)^(sans(v)))sans(e)_i (sans(f))#scale(x: 120%, y: 120%)[)] (sans(m)). $ <7.41>",
    )
    .replaceAll(
      "$ nabla_(sans(v)) (tau (sans(w)))= sans(v) (sum_j tau_j sans(w)^j)  &= sum_j(sans(v) (tau_j)sans(w)^j + tau_j sans(v) (sans(w)^j))\\\n &= sum_j (sans(v) (tau_j) sans(w)^j + tau_j (tilde(sans(e))^j (nabla_(sans(v)) sans(w)) - sum_k pi.alt_k^j (sans(v)) sans(w)^k)) \\\n &= sum_j (sans(v) (tau_j) sans(w)^j - tau_j sum_k pi.alt_k^j (sans(v)) sans(w)^k) + tau (nabla_(sans(v)) sans(w))\\\n &= sum_j (sans(v) (tau_j) tilde(sans(e))^j - tau_j sum_k pi.alt_k^j (sans(v)) tilde(sans(e))^k) (sans(w))+ tau (nabla_(sans(v)) sans(w)). $ <7.59>",
      "$ nabla_(sans(v)) (tau (sans(w)))= sans(v) (sum_j tau_j sans(w)^j)  &= sum_j(sans(v) (tau_j)sans(w)^j + tau_j sans(v) (sans(w)^j))\\\n &= sum_j (sans(v) (tau_j) sans(w)^j + tau_j (tilde(sans(e))^j (nabla_(sans(v)) sans(w)) - sum_k (pi.alt_k^j (sans(v)) sans(w)^k))) \\\n &= sum_j (sans(v) (tau_j) sans(w)^j - tau_j sum_k (pi.alt_k^j (sans(v)) sans(w)^k)) + tau (nabla_(sans(v)) sans(w))\\\n &= sum_j (sans(v) (tau_j) tilde(sans(e))^j - tau_j sum_k (pi.alt_k^j (sans(v)) tilde(sans(e))^k)) (sans(w))+ tau (nabla_(sans(v)) sans(w)). $ <7.59>",
    )
    .replaceAll(
      "$ nabla_(sans(v)) (tau (sans(w)))= sans(v) (sum_j tau_j sans(w)^j)  &= sum_j (sans(v) (tau_j)sans(w)^j + tau_j sans(v) (sans(w)^j))\\\n &= sum_j (sans(v) (tau_j) sans(w)^j + tau_j (tilde(sans(e))^j (nabla_(sans(v)) sans(w)) - sum_k pi.alt_k^j (sans(v)) sans(w)^k)) \\\n &= sum_j (sans(v) (tau_j) sans(w)^j - tau_j sum_k pi.alt_k^j (sans(v)) sans(w)^k) + tau (nabla_(sans(v)) sans(w))\\\n &= sum_j (sans(v) (tau_j) tilde(sans(e))^j - tau_j sum_k pi.alt_k^j (sans(v)) tilde(sans(e))^k) (sans(w))+ tau (nabla_(sans(v)) sans(w)). $ <7.59>",
      "$ nabla_(sans(v)) (tau (sans(w)))= sans(v) (sum_j tau_j sans(w)^j)  &= sum_j (sans(v) (tau_j)sans(w)^j + tau_j sans(v) (sans(w)^j))\\\n &= sum_j (sans(v) (tau_j) sans(w)^j + tau_j (tilde(sans(e))^j (nabla_(sans(v)) sans(w)) - sum_k (pi.alt_k^j (sans(v)) sans(w)^k))) \\\n &= sum_j (sans(v) (tau_j) sans(w)^j - tau_j sum_k (pi.alt_k^j (sans(v)) sans(w)^k)) + tau (nabla_(sans(v)) sans(w))\\\n &= sum_j (sans(v) (tau_j) tilde(sans(e))^j - tau_j sum_k (pi.alt_k^j (sans(v)) tilde(sans(e))^k)) (sans(w))+ tau (nabla_(sans(v)) sans(w)). $ <7.59>",
    )
    .replaceAll(
      "$ nabla_(sans(v)) (tau (sans(w)))= sans(v) (sum_j tau_j sans(w)^j)  &= sum_j (sans(v) (tau_j)sans(w)^j + tau_j sans(v) (sans(w)^j))\\\n &= sum_j (sans(v) (tau_j) sans(w)^j + tau_j (tilde(sans(e))^j (nabla_(sans(v)) sans(w)) - sum_k pi.alt_k^j (sans(v)) sans(w)^k)) \\\n &= sum_j (sans(v) (tau_j) sans(w)^j - tau_j sum_k pi.alt_k^j (sans(v)) sans(w)^k) + tau (nabla_(sans(v)) sans(w))\\\n &= sum_j (sans(v) (tau_j) tilde(sans(e))^j - tau_j sum_k pi.alt_k^j (sans(v)) tilde(sans(e))^k) (sans(w))+ tau (nabla_(sans(v)) sans(w)). $",
      "$ nabla_(sans(v)) (tau (sans(w)))= sans(v) (sum_j tau_j sans(w)^j)  &= sum_j (sans(v) (tau_j)sans(w)^j + tau_j sans(v) (sans(w)^j))\\\n &= sum_j (sans(v) (tau_j) sans(w)^j + tau_j (tilde(sans(e))^j (nabla_(sans(v)) sans(w)) - sum_k (pi.alt_k^j (sans(v)) sans(w)^k))) \\\n &= sum_j (sans(v) (tau_j) sans(w)^j - tau_j sum_k (pi.alt_k^j (sans(v)) sans(w)^k)) + tau (nabla_(sans(v)) sans(w))\\\n &= sum_j (sans(v) (tau_j) tilde(sans(e))^j - tau_j sum_k (pi.alt_k^j (sans(v)) tilde(sans(e))^k)) (sans(w))+ tau (nabla_(sans(v)) sans(w)). $",
    )
    .replaceAll(
      "$ nabla_(sans(v)) sans(v) = 0\\, $",
      "$ nabla_(sans(v)) sans(v) = 0\\, $ <7.77>",
    )
    .replaceAll(
      "$ nabla_(partial\\/partial sans(t))^gamma d gamma (partial\\/partial sans(t))= 0 . $ <7.77>",
      "$ nabla_(partial\\/partial sans(t))^gamma d gamma (partial\\/partial sans(t))= 0 . $ <7.78>",
    )
    .replaceAll(
      "$ D^2 sigma^i (t)+ sum_(j k) Gamma_(j k)^i (gamma (t))D sigma^j (t)D sigma^k (t)= 0\\, $ <7.78>",
      "$ D^2 sigma^i (t)+ sum_(j k) Gamma_(j k)^i (gamma (t))D sigma^j (t)D sigma^k (t)= 0\\, $ <7.79>",
    );
}

function repairChapter8(body) {
  return body
    .replaceAll(
      "$ cal(R) (bold(omega)\\,sans(u)\\,sans(v)\\,sans(w)) =\\\n bold(omega) ((cal(R) (sans(w) \\, sans(v))) (sans(u)))\\, $ <8.2>",
      "$ cal(R) (bold(omega)\\,sans(u)\\,sans(v)\\,sans(w)) = bold(omega) ((cal(R) (sans(w) \\, sans(v))) (sans(u)))\\, $ <8.2>",
    )
    .replaceAll(
      "$ cal(R) (bold(omega)\\,sans(u)\\,sans(v)\\,sans(w)) =\\\nbold(omega) ((cal(R) (sans(w) \\, sans(v))) (sans(u)))\\, $ <8.2>",
      "$ cal(R) (bold(omega)\\,sans(u)\\,sans(v)\\,sans(w)) = bold(omega) ((cal(R) (sans(w) \\, sans(v))) (sans(u)))\\, $ <8.2>",
    )
    .replaceAll(
      "$ nabla_(sans(v)) sans(u) (sans(f))= sum_i sans(e)_i (sans(f)) (sans(v) (tilde(sans(e))^i (sans(u))) \\\n &quad + sum_j pi.alt_j^i (sans(v)) tilde(sans(e))^j (sans(u)))  &= sans(e) (sans(f)) (sans(v) (tilde(sans(e)) (sans(u)))\\\n &quad + pi.alt (sans(v))tilde(sans(e)) (sans(u)))\\, $ <8.16>",
      "$ nabla_(sans(v)) sans(u) (sans(f)) &= sum_i sans(e)_i (sans(f)) (sans(v) (tilde(sans(e))^i (sans(u))) \\\n &quad + sum_j pi.alt_j^i (sans(v)) tilde(sans(e))^j (sans(u))) \\\n &= sans(e) (sans(f)) (sans(v) (tilde(sans(e)) (sans(u))) \\\n &quad + pi.alt (sans(v))tilde(sans(e)) (sans(u)))\\, $ <8.16>",
    )
    .replaceAll(
      "$ nabla_([sans(w)\\,sans(v)]) sans(u) = sans(e) {[sans(w) \\, sans(v)] tilde(sans(e)) (sans(u)) \\\n &quad + pi.alt ([sans(w) \\, sans(v)]) tilde(sans(e)) (u)} . $ <8.18>",
      "$ nabla_([sans(w)\\,sans(v)]) sans(u) = sans(e) {[sans(w) \\, sans(v)] tilde(sans(e)) (sans(u)) + pi.alt ([sans(w) \\, sans(v)]) tilde(sans(e)) (u)} . $ <8.18>",
    );
}

function repairChapter9(body) {
  return body
    .replaceAll(
      "\n <9.24>\n",
      "\n$ sans(g) (sans(v)_1, sans(v)_2) = - c^2 lr(1 + frac(2 V, c^2)) sans(d) sans(t) (sans(v)_1) sans(d) sans(t) (sans(v)_2) + sans(d) sans(x) (sans(v)_1) sans(d) sans(x) (sans(v)_2) + sans(d) sans(y) (sans(v)_1) sans(d) sans(y) (sans(v)_2) + sans(d) sans(z) (sans(v)_1) sans(d) sans(z) (sans(v)_2) $ <9.24>\n",
    )
    .replaceAll(
      "are Newton\\'s equations to lowest order in $V\\/c^2$:",
      "are Newton\\'s equations to lowest order in $V\\/c^2$:\n\n$ D^2 arrow(x) (t) = - grad V (arrow(x) (t)). $ <9.25>",
    )
    .replaceAll(
      "The equations are traditionally written\n\nwhere $R_(mu nu)$",
      "The equations are traditionally written\n\n$ R_(mu nu) - 1 / 2 R g_(mu nu) + Lambda g_(mu nu) = frac(8 pi G, c^4) T_(mu nu) $ <9.26>\n\nwhere $R_(mu nu)$",
    );
}

function repairChapter10(body) {
  return body
    .replaceAll(
      String.raw`$ (sans(g)^(*) bold(omega))_(j_p dots.c j_(n - 1)) \
 #h(2em) = sum_(i_0 dots.c i_(p - 1) j_0 dots.c j_(p - 1)) frac(1, p !) \
 omega_(i_0 dots.c i_(p - 1)) g^(i_0 j_0) dots.c g^(i_(p - 1) j_(p - 1)) epsilon.alt_(j_0 dots.c j_(n - 1)) $ <10.1>`,
      String.raw`$ (sans(g)^(*) bold(omega))_(j_p dots.c j_(n - 1)) = sum_(i_0 dots.c i_(p - 1) j_0 dots.c j_(p - 1)) frac(1, p !) omega_(i_0 dots.c i_(p - 1)) g^(i_0 j_0) dots.c g^(i_(p - 1) j_(p - 1)) epsilon.alt_(j_0 dots.c j_(n - 1)) $ <10.1>`,
    )
    .replaceAll(
      String.raw`$ sans(d f) = (frac(partial, partial sans(x)) sans(f)) sans(d x) \
 + (frac(partial, partial sans(y)) sans(f)) sans(d y) \
 + (frac(partial, partial sans(z)) sans(f)) sans(d z) . $ <10.2>`,
      String.raw`$ sans(d f) = (frac(partial, partial sans(x)) sans(f)) sans(d x) + (frac(partial, partial sans(y)) sans(f)) sans(d y) + (frac(partial, partial sans(z)) sans(f)) sans(d z) . $ <10.2>`,
    )
    .replaceAll(
      String.raw`$ sans(d) theta = (frac(partial theta_z, partial sans(y)) \
 - frac(partial theta_y, partial sans(z))) sans(d y) and sans(d z) \
 + (frac(partial theta_x, partial sans(z)) \
 - frac(partial theta_z, partial sans(x))) sans(d z) and sans(d x) \
 + (frac(partial theta_y, partial sans(x)) \
 - frac(partial theta_x, partial sans(y))) sans(d x) and sans(d y) . $ <10.5>`,
      String.raw`$ sans(d) theta = (frac(partial theta_z, partial sans(y)) - frac(partial theta_y, partial sans(z))) sans(d y) and sans(d z) + (frac(partial theta_x, partial sans(z)) - frac(partial theta_z, partial sans(x))) sans(d z) and sans(d x) + (frac(partial theta_y, partial sans(x)) - frac(partial theta_x, partial sans(y))) sans(d x) and sans(d y) . $ <10.5>`,
    )
    .replaceAll(
      String.raw`$ g^(*) (sans(d) theta) = (frac(partial theta_z, partial sans(y)) \
 - frac(partial theta_y, partial sans(z))) sans(d x) \
 + (frac(partial theta_x, partial sans(z)) \
 - frac(partial theta_z, partial sans(x))) sans(d y) \
 + (frac(partial theta_y, partial sans(x)) \
 - frac(partial theta_x, partial sans(y))) sans(d z) . $ <10.6>`,
      String.raw`$ g^(*) (sans(d) theta) = (frac(partial theta_z, partial sans(y)) - frac(partial theta_y, partial sans(z))) sans(d x) + (frac(partial theta_x, partial sans(z)) - frac(partial theta_z, partial sans(x))) sans(d y) + (frac(partial theta_y, partial sans(x)) - frac(partial theta_x, partial sans(y))) sans(d z) . $ <10.6>`,
    )
    .replaceAll(
      String.raw`$ sans(d) (g^(*) theta)= (\
 frac(partial theta_x, partial sans(x)) \
 + frac(partial theta_y, partial sans(y)) \
 + frac(partial theta_z, partial sans(z)) \
) sans(d x) and sans(d y) and sans(d z) . $ <10.8>`,
      String.raw`$ sans(d) (g^(*) theta)= (frac(partial theta_x, partial sans(x)) + frac(partial theta_y, partial sans(y)) + frac(partial theta_z, partial sans(z))) sans(d x) and sans(d y) and sans(d z) . $ <10.8>`,
    )
    .replaceAll(
      String.raw`$ g^(*) sans(d) (g^(*) theta)= \
 frac(partial theta_x, partial sans(x)) \
 + frac(partial theta_y, partial sans(y)) \
 + frac(partial theta_z, partial sans(z)) . $ <10.9>`,
      String.raw`$ g^(*) sans(d) (g^(*) theta)= frac(partial theta_x, partial sans(x)) + frac(partial theta_y, partial sans(y)) + frac(partial theta_z, partial sans(z)) . $ <10.9>`,
    )
    .replaceAll(
      String.raw`$ sans(g) (sans(u)\,sans(v))= \
 - c^2 sans(d t) (sans(u))thin sans(d t) (sans(v))\
 + sans(d x) (sans(u))thin sans(d x) (sans(v))\
 + sans(d y) (sans(u))thin sans(d y) (sans(v))\
 + sans(d z) (sans(u))thin sans(d z) (sans(v)). $ <10.11>`,
      String.raw`$ sans(g) (sans(u)\,sans(v)) = - c^2 sans(d t) (sans(u))thin sans(d t) (sans(v)) + sans(d x) (sans(u))thin sans(d x) (sans(v)) + sans(d y) (sans(u))thin sans(d y) (sans(v)) + sans(d z) (sans(u))thin sans(d z) (sans(v)). $ <10.11>`,
    )
    .replaceAll(
      String.raw`$ frac(partial B_x, partial x) \
 + frac(partial B_y, partial y) \
 + frac(partial B_z, partial z) = 0 $ <10.19>`,
      String.raw`$ frac(partial B_x, partial x) + frac(partial B_y, partial y) + frac(partial B_z, partial z) = 0 $ <10.19>`,
    )
    .replaceAll(
      String.raw`$ frac(partial E_z, partial y) \
 - frac(partial E_y, partial z) \
 &= 1 / c frac(partial B_x, partial t)\, $ <10.20>`,
      String.raw`$ frac(partial E_z, partial y) - frac(partial E_y, partial z) = 1 / c frac(partial B_x, partial t)\, $ <10.20>`,
    )
    .replaceAll(
      String.raw`$ frac(partial E_x, partial z) \
 - frac(partial E_z, partial x) \
 &= 1 / c frac(partial B_y, partial t)\, $ <10.21>`,
      String.raw`$ frac(partial E_x, partial z) - frac(partial E_z, partial x) = 1 / c frac(partial B_y, partial t)\, $ <10.21>`,
    )
    .replaceAll(
      String.raw`$ frac(partial E_y, partial x) \
 - frac(partial E_x, partial y) \
 &= 1 / c frac(partial B_z, partial t) . $ <10.22>`,
      String.raw`$ frac(partial E_y, partial x) - frac(partial E_x, partial y) = 1 / c frac(partial B_z, partial t) . $ <10.22>`,
    )
    .replaceAll(
      String.raw`$ frac(partial E_x, partial x) \
 + frac(partial E_y, partial y) \
 + frac(partial E_z, partial z) = 4 pi rho . $ <10.23>`,
      String.raw`$ frac(partial E_x, partial x) + frac(partial E_y, partial y) + frac(partial E_z, partial z) = 4 pi rho . $ <10.23>`,
    )
    .replaceAll(
      String.raw`$ frac(partial B_y, partial z) \
 - frac(partial B_z, partial y) \
 &= - 1 / c frac(partial E_x, partial t) - frac(4 pi, c) I_x\, $ <10.24>`,
      String.raw`$ frac(partial B_y, partial z) - frac(partial B_z, partial y) = - 1 / c frac(partial E_x, partial t) - frac(4 pi, c) I_x\, $ <10.24>`,
    )
    .replaceAll(
      String.raw`$ frac(partial B_z, partial x) \
 - frac(partial B_x, partial z) \
 &= - 1 / c frac(partial E_y, partial t) - frac(4 pi, c) I_y\, $ <10.25>`,
      String.raw`$ frac(partial B_z, partial x) - frac(partial B_x, partial z) = - 1 / c frac(partial E_y, partial t) - frac(4 pi, c) I_y\, $ <10.25>`,
    )
    .replaceAll(
      String.raw`$ frac(partial B_x, partial y) \
 - frac(partial B_y, partial x) \
 &= - 1 / c frac(partial E_z, partial t) - frac(4 pi, c) I_z . $ <10.26>`,
      String.raw`$ frac(partial B_x, partial y) - frac(partial B_y, partial x) = - 1 / c frac(partial E_z, partial t) - frac(4 pi, c) I_z . $ <10.26>`,
    )
    .replaceAll(
      String.raw`$ frac(partial E_z, partial y) \
 - frac(partial E_y, partial z)  &= 1 / c frac(partial B_x, partial t)\, $ <10.20>`,
      String.raw`$ frac(partial E_z, partial y) - frac(partial E_y, partial z) = 1 / c frac(partial B_x, partial t)\, $ <10.20>`,
    )
    .replaceAll(
      String.raw`$ frac(partial E_x, partial z) \
 - frac(partial E_z, partial x)  &= 1 / c frac(partial B_y, partial t)\, $ <10.21>`,
      String.raw`$ frac(partial E_x, partial z) - frac(partial E_z, partial x) = 1 / c frac(partial B_y, partial t)\, $ <10.21>`,
    )
    .replaceAll(
      String.raw`$ frac(partial E_y, partial x) \
 - frac(partial E_x, partial y)  &= 1 / c frac(partial B_z, partial t) . $ <10.22>`,
      String.raw`$ frac(partial E_y, partial x) - frac(partial E_x, partial y) = 1 / c frac(partial B_z, partial t) . $ <10.22>`,
    )
    .replaceAll(
      String.raw`$ frac(partial B_y, partial z) \
 - frac(partial B_z, partial y)  &= - 1 / c frac(partial E_x, partial t) - frac(4 pi, c) I_x\, $ <10.24>`,
      String.raw`$ frac(partial B_y, partial z) - frac(partial B_z, partial y) = - 1 / c frac(partial E_x, partial t) - frac(4 pi, c) I_x\, $ <10.24>`,
    )
    .replaceAll(
      String.raw`$ frac(partial B_z, partial x) \
 - frac(partial B_x, partial z)  &= - 1 / c frac(partial E_y, partial t) - frac(4 pi, c) I_y\, $ <10.25>`,
      String.raw`$ frac(partial B_z, partial x) - frac(partial B_x, partial z) = - 1 / c frac(partial E_y, partial t) - frac(4 pi, c) I_y\, $ <10.25>`,
    )
    .replaceAll(
      String.raw`$ frac(partial B_x, partial y) \
 - frac(partial B_y, partial x)  &= - 1 / c frac(partial E_z, partial t) - frac(4 pi, c) I_z . $ <10.26>`,
      String.raw`$ frac(partial B_x, partial y) - frac(partial B_y, partial x) = - 1 / c frac(partial E_z, partial t) - frac(4 pi, c) I_z . $ <10.26>`,
    )
    .replaceAll(
      String.raw`$ curl (sans(v))\
 &= g^sharp (g^(*) (sans(d) (g^flat (sans(v)))))\, $ <10.7>`,
      String.raw`$ curl (sans(v)) &= g^sharp (g^(*) (sans(d) (g^flat (sans(v)))))\, $ <10.7>`,
    )
    .replaceAll(
      String.raw`$ div (sans(v))\
 &= g^(*) (sans(d) (g^(*) (g^flat (sans(v))))) . $ <10.10>`,
      String.raw`$ div (sans(v)) &= g^(*) (sans(d) (g^(*) (g^flat (sans(v))))) . $ <10.10>`,
    )
    .replace(
      /\$ curl \(sans\(v\)\)\\\n\s*&= g\^sharp \(g\^\(\*\) \(sans\(d\) \(g\^flat \(sans\(v\)\)\)\)\)\\, \$ <10\.7>/g,
      String.raw`$ curl (sans(v)) &= g^sharp (g^(*) (sans(d) (g^flat (sans(v)))))\, $ <10.7>`,
    )
    .replace(
      /\$ div \(sans\(v\)\)\\\n\s*&= g\^\(\*\) \(sans\(d\) \(g\^\(\*\) \(g\^flat \(sans\(v\)\)\)\)\) \. \$ <10\.10>/g,
      String.raw`$ div (sans(v)) &= g^(*) (sans(d) (g^(*) (g^flat (sans(v))))) . $ <10.10>`,
    )
    .replaceAll(
      String.raw`$ grad (sans(f))= g^sharp (sans(d f)) $ <10.3>`,
      String.raw`$ grad (sans(f)) &= g^sharp (sans(d f)) $ <10.3>`,
    );
}

function replaceDisplayByLabel(body, label, replacement) {
  const lines = body.split("\n");
  const targetSuffix = `$ <${label}>`;

  for (let start = 0; start < lines.length; start += 1) {
    if (!lines[start].startsWith("$")) continue;

    for (let end = start; end < lines.length; end += 1) {
      if (lines[end].endsWith(targetSuffix)) {
        lines.splice(start, end - start + 1, ...replacement.split("\n"));
        return lines.join("\n");
      }
      if (end > start && lines[end].trim() === "") break;
    }
  }

  return body;
}

function compactChapter10AuditedDisplays(body) {
  const replacements = {
    "10.2": String.raw`$ sans(d f) = (frac(partial, partial sans(x)) sans(f)) sans(d x) + (frac(partial, partial sans(y)) sans(f)) sans(d y) + (frac(partial, partial sans(z)) sans(f)) sans(d z) . $ <10.2>`,
    "10.5": String.raw`$ sans(d) theta = (frac(partial theta_z, partial sans(y)) - frac(partial theta_y, partial sans(z))) sans(d y) and sans(d z) + (frac(partial theta_x, partial sans(z)) - frac(partial theta_z, partial sans(x))) sans(d z) and sans(d x) + (frac(partial theta_y, partial sans(x)) - frac(partial theta_x, partial sans(y))) sans(d x) and sans(d y) . $ <10.5>`,
    "10.6": String.raw`$ g^(*) (sans(d) theta) = (frac(partial theta_z, partial sans(y)) - frac(partial theta_y, partial sans(z))) sans(d x) + (frac(partial theta_x, partial sans(z)) - frac(partial theta_z, partial sans(x))) sans(d y) + (frac(partial theta_y, partial sans(x)) - frac(partial theta_x, partial sans(y))) sans(d z) . $ <10.6>`,
    "10.8": String.raw`$ sans(d) (g^(*) theta)= (frac(partial theta_x, partial sans(x)) + frac(partial theta_y, partial sans(y)) + frac(partial theta_z, partial sans(z))) sans(d x) and sans(d y) and sans(d z) . $ <10.8>`,
    "10.9": String.raw`$ g^(*) sans(d) (g^(*) theta)= frac(partial theta_x, partial sans(x)) + frac(partial theta_y, partial sans(y)) + frac(partial theta_z, partial sans(z)) . $ <10.9>`,
    "10.11": String.raw`$ sans(g) (sans(u)\,sans(v)) = - c^2 sans(d t) (sans(u))thin sans(d t) (sans(v)) + sans(d x) (sans(u))thin sans(d x) (sans(v)) + sans(d y) (sans(u))thin sans(d y) (sans(v)) + sans(d z) (sans(u))thin sans(d z) (sans(v)). $ <10.11>`,
    "10.19": String.raw`$ frac(partial B_x, partial x) + frac(partial B_y, partial y) + frac(partial B_z, partial z) = 0 $ <10.19>`,
    "10.20": String.raw`$ frac(partial E_z, partial y) - frac(partial E_y, partial z) = 1 / c frac(partial B_x, partial t)\, $ <10.20>`,
    "10.21": String.raw`$ frac(partial E_x, partial z) - frac(partial E_z, partial x) = 1 / c frac(partial B_y, partial t)\, $ <10.21>`,
    "10.22": String.raw`$ frac(partial E_y, partial x) - frac(partial E_x, partial y) = 1 / c frac(partial B_z, partial t) . $ <10.22>`,
    "10.23": String.raw`$ frac(partial E_x, partial x) + frac(partial E_y, partial y) + frac(partial E_z, partial z) = 4 pi rho . $ <10.23>`,
    "10.24": String.raw`$ frac(partial B_y, partial z) - frac(partial B_z, partial y) = - 1 / c frac(partial E_x, partial t) - frac(4 pi, c) I_x\, $ <10.24>`,
    "10.25": String.raw`$ frac(partial B_z, partial x) - frac(partial B_x, partial z) = - 1 / c frac(partial E_y, partial t) - frac(4 pi, c) I_y\, $ <10.25>`,
    "10.26": String.raw`$ frac(partial B_x, partial y) - frac(partial B_y, partial x) = - 1 / c frac(partial E_z, partial t) - frac(4 pi, c) I_z . $ <10.26>`,
  };

  let repaired = body;
  for (const [label, replacement] of Object.entries(replacements)) {
    repaired = replaceDisplayByLabel(repaired, label, replacement);
  }
  return repaired;
}

function applyChapterRepairs(stem, body) {
  if (stem === "prologue") return repairPrologue(body);
  if (stem === "appendix_a") return repairAppendixA(body);
  if (stem === "chapter001") return repairChapter1(body);
  if (stem === "chapter002") return repairChapter2(body);
  if (stem === "chapter003") return repairChapter3(body);
  if (stem === "chapter004") return repairChapter4(body);
  if (stem === "chapter005") return repairChapter5(body);
  if (stem === "chapter007") return repairChapter7(body);
  if (stem === "chapter008") return repairChapter8(body);
  if (stem === "chapter009") return repairChapter9(body);
  if (stem === "chapter011") return repairChapter11(body);
  return body;
}

const editionAwareProseEdits = [];

function applyEditionAwareProse(stem, body) {
  let edited = body;
  const replace = (search, replacement, description) => {
    const label = `cljs-text-edit-${stem}-${description}`
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    editionAwareProseEdits.push({ stem, description, label });
    const anchor = `#metadata(${JSON.stringify(`${stem}: ${description}`)})#label(${JSON.stringify(label)})`;
    edited = replaceExactlyOnce(
      edited,
      search,
      `${anchor}${replacement}`,
      `${stem}: ${description}`,
    );
  };

  if (stem === "prologue") {
    replace(
      "An explanation of functional derivatives is in Appendix #fdg-ref-page(<chap-appendix-b>, page-target: <sec-B.4>).",
      `#fdg-edition-select(
  scheme: [An explanation of functional derivatives is in Appendix #fdg-ref-page(<chap-appendix-b>, page-target: <sec-B.4>).],
  clojure: [An explanation of functional derivatives is in Appendix #fdg-ref-page(<chap-appendix-e>, page-target: <sec-E.4>).],
  both: [Explanations of functional derivatives are in Appendix #fdg-ref-page(<chap-appendix-b>, page-target: <sec-B.4>) for Scheme and Appendix #fdg-ref-page(<chap-appendix-e>, page-target: <sec-E.4>) for ClojureScript/Emmy.],
)`,
      "functional-derivative appendix reference",
    );
    replace(
      "The programs in this book are written in Scheme, a dialect of Lisp. The details of the language are not germane to the points being made. What is important is that it is mechanically interpretable, and thus unambiguous. In this book we require that the mathematical expressions be explicit enough that they can be expressed as computer programs. Scheme is chosen because it is easy to write programs that manipulate representations of mathematical functions. An informal description of Scheme can be found in Appendix @chap-appendix-a. The use of Scheme to represent mathematical objects can be found in Appendix @chap-appendix-b. A formal description of Scheme can be obtained in @ieee1991scheme. You can get the software from @fdg-software.",
      `#fdg-edition-select(
  scheme: [The programs in this book are written in Scheme, a dialect of Lisp. The details of the language are not germane to the points being made. What is important is that it is mechanically interpretable, and thus unambiguous. In this book we require that the mathematical expressions be explicit enough that they can be expressed as computer programs. Scheme is chosen because it is easy to write programs that manipulate representations of mathematical functions. An informal description of Scheme can be found in Appendix @chap-appendix-a. The use of Scheme to represent mathematical objects can be found in Appendix @chap-appendix-b. A formal description of Scheme can be obtained in @ieee1991scheme. You can get the software from @fdg-software.],
  clojure: [The programs in this edition are written in ClojureScript and use Emmy for generic arithmetic and symbolic mathematics. The details of the language are not germane to the points being made; what matters is that the expressions are mechanically interpretable and therefore unambiguous. Appendix @chap-appendix-d introduces the ClojureScript forms used here, Appendix @chap-appendix-e explains the Emmy notation, and Appendix @chap-appendix-g explains how the examples are run and checked.],
  both: [This edition prints the original Scheme programs together with their ClojureScript/Emmy translations. The details of either language are not germane to the points being made; what matters is that the expressions are mechanically interpretable and therefore unambiguous. Appendices @chap-appendix-a and @chap-appendix-b introduce Scheme and its mathematical notation; Appendices @chap-appendix-d and @chap-appendix-e give the ClojureScript/Emmy counterparts, and Appendix @chap-appendix-g explains how the translated examples are run and checked.],
)`,
      "language footnote",
    );
    replace(
      "Note that we can flexibly manipulate representations of mathematical functions. (See Appendices @chap-appendix-a and @chap-appendix-b.)",
      `Note that we can flexibly manipulate representations of mathematical functions. #fdg-edition-select(
  scheme: [(See Appendices @chap-appendix-a and @chap-appendix-b.)],
  clojure: [(See Appendices @chap-appendix-d and @chap-appendix-e.)],
  both: [(See Appendices @chap-appendix-a and @chap-appendix-b for Scheme, and Appendices @chap-appendix-d and @chap-appendix-e for ClojureScript/Emmy.)],
)`,
      "closing appendix references",
    );
    replace(
      `In the Lagrange equations procedure the parameter #raw(lang:"scheme", "Lagrangian") is a procedure that implements the Lagrangian. The derivatives of the Lagrangian, for example #raw(lang:"scheme", "((partial 2) Lagrangian)"), are also procedures. The state-space path procedure #raw(lang:"scheme", "(Gamma w)") is constructed from the configuration-space path procedure #raw(lang:"scheme", "w") by the procedure #raw(lang:"scheme", "Gamma"):`,
      `#fdg-edition-select(
  scheme: [In the Lagrange equations procedure the parameter #raw(lang:"scheme", "Lagrangian") is a procedure that implements the Lagrangian. The derivatives of the Lagrangian, for example #raw(lang:"scheme", "((partial 2) Lagrangian)"), are also procedures. The state-space path procedure #raw(lang:"scheme", "(Gamma w)") is constructed from the configuration-space path procedure #raw(lang:"scheme", "w") by the procedure #raw(lang:"scheme", "Gamma"):],
  clojure: [In #raw(lang:"clojure", "Lagrange-equations"), the parameter #raw(lang:"clojure", "Lagrangian") is a function implementing the Lagrangian. Its derivatives, for example #raw(lang:"clojure", "((partial 2) Lagrangian)"), are also functions. The state-space path #raw(lang:"clojure", "(Gamma w)") is constructed from the configuration-space path #raw(lang:"clojure", "w") by #raw(lang:"clojure", "Gamma"):],
  both: [In #raw(lang:"scheme", "Lagrange-equations") / #raw(lang:"clojure", "Lagrange-equations"), #raw(lang:"scheme", "Lagrangian") is a function implementing the Lagrangian. Its derivatives are functions too, and #raw(lang:"scheme", "Gamma") constructs the state-space path from #raw(lang:"scheme", "w"):],
)`,
      "Lagrange-equations function terminology",
    );
    replace(
      `The result of applying the #raw(lang:"scheme", "Lagrange-equations") procedure to a procedure #raw(lang:"scheme", "Lagrangian") that implements a Lagrangian function is a procedure that takes a configuration-space path procedure #raw(lang:"scheme", "w") and returns a procedure that gives the residual of the Lagrange equations for that path at a time.`,
      `#fdg-edition-select(
  scheme: [The result of applying the #raw(lang:"scheme", "Lagrange-equations") procedure to a procedure #raw(lang:"scheme", "Lagrangian") that implements a Lagrangian function is a procedure that takes a configuration-space path procedure #raw(lang:"scheme", "w") and returns a procedure that gives the residual of the Lagrange equations for that path at a time.],
  clojure: [Applying #raw(lang:"clojure", "Lagrange-equations") to a Lagrangian function produces a function that accepts a configuration-space path #raw(lang:"clojure", "w") and returns a function giving the residual of the Lagrange equations at a time.],
  both: [Applying #raw(lang:"scheme", "Lagrange-equations") / #raw(lang:"clojure", "Lagrange-equations") to a Lagrangian function produces a function that accepts a configuration-space path and returns a function giving the residual of the Lagrange equations at a time.],
)`,
      "Lagrange-equations result terminology",
    );
  }

  if (stem === "chapter001") {
    replace(
      "More details can be found in Appendix @chap-appendix-b",
      `#fdg-edition-select(
  scheme: [More details can be found in Appendix @chap-appendix-b],
  clojure: [More details can be found in Appendix @chap-appendix-e],
  both: [More details can be found in Appendix @chap-appendix-b for Scheme and Appendix @chap-appendix-e for ClojureScript/Emmy],
)`,
      "functional-notation appendix reference",
    );
    replace(
      "The procedure #raw(lang:\"scheme\", \"Lfree\") implements the free Lagrangian:#footnote[An informal description of the Scheme programming language can be found in Appendix @chap-appendix-a.]",
      `#fdg-edition-select(
  scheme: [The procedure #raw(lang:"scheme", "Lfree") implements the free Lagrangian:#footnote[An informal description of the Scheme programming language can be found in Appendix @chap-appendix-a.]],
  clojure: [The function #raw(lang:"clojure", "Lfree") implements the free Lagrangian:#footnote[The ClojureScript forms used in this edition are introduced in Appendix @chap-appendix-d.]],
  both: [The function #raw(lang:"scheme", "Lfree") / #raw(lang:"clojure", "Lfree") implements the free Lagrangian:#footnote[See Appendix @chap-appendix-a for Scheme and Appendix @chap-appendix-d for ClojureScript.]],
)`,
      "Lfree language and appendix footnote",
    );
    replace(
      `For a sphere of radius R the procedure #raw(lang:"scheme", "sphere->R3") implements the transformation of coordinates`,
      `For a sphere of radius R #fdg-edition-select(
  scheme: [the procedure #raw(lang:"scheme", "sphere->R3")],
  clojure: [the function #raw(lang:"clojure", "sphere->R3")],
  both: [the function #raw(lang:"scheme", "sphere->R3") / #raw(lang:"clojure", "sphere->R3")],
) implements the transformation of coordinates`,
      "sphere->R3 terminology",
    );
    replace(
      `The procedure #raw(lang:"scheme", "F->C") implements the derivation of a transformation of states from a coordinate transformation:`,
      `#fdg-edition-select(
  scheme: [The procedure #raw(lang:"scheme", "F->C") implements the derivation of a transformation of states from a coordinate transformation:],
  clojure: [The function #raw(lang:"clojure", "F->C") implements the derivation of a transformation of states from a coordinate transformation:],
  both: [The #raw(lang:"scheme", "F->C") / #raw(lang:"clojure", "F->C") function implements the derivation of a transformation of states from a coordinate transformation:],
)`,
      "F->C terminology",
    );
    replace(
      "Let\\'s make a general metric on a 2-dimensional real manifold:#footnote[The procedure #raw(lang:\"scheme\", \"literal-metric\") provides a metric. It is a general symmetric function of two vector fields, with literal functions of the coordinates of the manifold points for its coefficients in the given coordinate system. The quoted symbol #raw(lang:\"scheme\", \"'g\") is used to make the names of the literal coefficient functions. Literal functions are discussed in Appendix @chap-appendix-b.]",
      `Let's make a general metric on a 2-dimensional real manifold:#footnote[#fdg-edition-select(
  scheme: [The procedure #raw(lang:"scheme", "literal-metric") provides a metric. It is a general symmetric function of two vector fields, with literal functions of the coordinates of the manifold points for its coefficients in the given coordinate system. The quoted symbol #raw(lang:"scheme", "'g") is used to make the names of the literal coefficient functions. Literal functions are discussed in Appendix @chap-appendix-b.],
  clojure: [The function #raw(lang:"clojure", "literal-metric") provides a metric. It is a general symmetric function of two vector fields, with literal functions of the coordinates of the manifold points for its coefficients in the given coordinate system. The quoted symbol #raw(lang:"clojure", "'g") names the literal coefficient functions. Literal functions are discussed in Appendix @chap-appendix-e.],
  both: [The function #raw(lang:"scheme", "literal-metric") / #raw(lang:"clojure", "literal-metric") provides a metric. The quoted symbol #raw(lang:"scheme", "'g") names its literal coefficient functions. See Appendix @chap-appendix-b for Scheme notation and Appendix @chap-appendix-e for Emmy notation.],
)]`,
      "literal metric footnote",
    );
    replace(
      `We established #raw(lang:"scheme", "t") as a coordinate function on the rectangular coordinates of the real line by

\`(define-coordinates t R1-rect)\`

This had the effect of also defining #raw(lang:"scheme", "d/dt") as a coordinate vector field and #raw(lang:"scheme", "dt") as a one-form field on the real line.`,
      `#fdg-edition-select(
  scheme: [We established #raw(lang:"scheme", "t") as a coordinate function on the rectangular coordinates of the real line by #raw(lang:"scheme", "(define-coordinates t R1-rect)"). This also defined #raw(lang:"scheme", "d/dt") as a coordinate vector field and #raw(lang:"scheme", "dt") as a one-form field on the real line.],
  clojure: [The Emmy setup establishes the real-line coordinate objects with #raw(lang:"clojure", "(define-coordinates t R1-rect)"). The translated code uses #raw(lang:"clojure", "d:dt") for the coordinate vector field and #raw(lang:"clojure", "dt") for the one-form field.],
  both: [The setup #raw(lang:"scheme", "(define-coordinates t R1-rect)") establishes the real-line coordinate objects. Scheme names the coordinate vector field #raw(lang:"scheme", "d/dt"); the translated ClojureScript uses #raw(lang:"clojure", "d:dt"). Both use #raw(lang:"scheme", "dt") for the one-form field.],
)`,
      "real-line coordinate setup",
    );
  }

  if (stem === "chapter006") {
    replace(
      `We execute #raw(lang:"scheme", "(define-coordinates t R1-rect)") to make #raw(lang:"scheme", "t") the coordinate function of the real line.`,
      `#fdg-edition-select(
  scheme: [We execute #raw(lang:"scheme", "(define-coordinates t R1-rect)") to make #raw(lang:"scheme", "t") the coordinate function of the real line.],
  clojure: [We execute #raw(lang:"clojure", "(define-coordinates t R1-rect)") to establish the real-line coordinate objects; the translated code names its coordinate vector field #raw(lang:"clojure", "d:dt").],
  both: [We execute #raw(lang:"scheme", "(define-coordinates t R1-rect)") to establish the real-line coordinate objects. Scheme names the coordinate vector field #raw(lang:"scheme", "d/dt"), while the translated ClojureScript names it #raw(lang:"clojure", "d:dt").],
)`,
      "real-line coordinate footnote",
    );
  }

  if (stem === "chapter002") {
    replace(
      "See Appendix @chap-appendix-b for an introduction to tuple arithmetic and a discussion of derivatives of functions with structured input or output.",
      `#fdg-edition-select(
  scheme: [See Appendix @chap-appendix-b for an introduction to tuple arithmetic and a discussion of derivatives of functions with structured input or output.],
  clojure: [See Appendix @chap-appendix-e for an introduction to Emmy structures and a discussion of derivatives of functions with structured input or output.],
  both: [See Appendix @chap-appendix-b for the Scheme account of tuple arithmetic and Appendix @chap-appendix-e for the corresponding Emmy account.],
)`,
      "structured derivative appendix reference",
    );
  }

  if (stem === "chapter007") {
    replace(
      "The action on functions, vector fields, and one-form fields suffices to define the action on all tensor fields. See Appendix @chap-appendix-c.",
      `The action on functions, vector fields, and one-form fields suffices to define the action on all tensor fields. #fdg-edition-select(
  scheme: [See Appendix @chap-appendix-c.],
  clojure: [See Appendix @chap-appendix-f.],
  both: [See Appendix @chap-appendix-c for Scheme and Appendix @chap-appendix-f for Emmy.],
)`,
      "tensor footnote appendix reference",
    );
    replace(
      "Thus $pi.alt$ is not a tensor field. See Appendix @chap-appendix-c.",
      `Thus $pi.alt$ is not a tensor field. #fdg-edition-select(
  scheme: [See Appendix @chap-appendix-c.],
  clojure: [See Appendix @chap-appendix-f.],
  both: [See Appendix @chap-appendix-c for Scheme and Appendix @chap-appendix-f for Emmy.],
)`,
      "tensor transformation appendix reference",
    );
    replace(
      `The #raw(lang:"scheme", "s:map/r") procedure constructs a tuple of the same shape as its second argument whose elements are the result of applying the first argument to the corresponding elements of the second argument.`,
      `#fdg-edition-select(
  scheme: [The #raw(lang:"scheme", "s:map/r") procedure constructs a tuple of the same shape as its second argument whose elements are the result of applying the first argument to the corresponding elements of the second argument.],
  clojure: [Emmy's #raw(lang:"clojure", "mapr") function recursively maps its first argument over the Emmy structure supplied as its second argument, preserving that structure's shape.],
  both: [Scheme's #raw(lang:"scheme", "s:map/r") and Emmy's #raw(lang:"clojure", "mapr") recursively apply the first argument across the second argument while preserving its structure.],
)`,
      "recursive map description",
    );
    replace(
      "The procedure #raw(lang:\"scheme\", \"F->C\") takes a coordinate transformation and produces a corresponding transformation of Lagrangian state.",
      `#fdg-edition-select(
  scheme: [The procedure #raw(lang:"scheme", "F->C") takes a coordinate transformation and produces a corresponding transformation of Lagrangian state.],
  clojure: [The function #raw(lang:"clojure", "F->C") takes a coordinate transformation and produces a corresponding transformation of Lagrangian state.],
  both: [The #raw(lang:"scheme", "F->C") / #raw(lang:"clojure", "F->C") function takes a coordinate transformation and produces a corresponding transformation of Lagrangian state.],
)`,
      "F->C footnote",
    );
  }

  if (stem === "chapter008") {
    replace(
      "The Bianchi identities are defined in terms of a cyclic-summation operator, which is most easily described as a Scheme procedure:",
      `#fdg-edition-select(
  scheme: [The Bianchi identities are defined in terms of a cyclic-summation operator, which is most easily described as a Scheme procedure:],
  clojure: [The Bianchi identities are defined in terms of a cyclic-summation operator, which is most easily described as a ClojureScript function:],
  both: [The Bianchi identities are defined in terms of a cyclic-summation operator, which is most easily described as a function:],
)`,
      "cyclic-sum terminology",
    );
    replace(
      "The Bianchi identities are much nastier to write in traditional mathematical notation than as Scheme programs.",
      `#fdg-edition-select(
  scheme: [The Bianchi identities are much nastier to write in traditional mathematical notation than as Scheme programs.],
  clojure: [The Bianchi identities are much nastier to write in traditional mathematical notation than as ClojureScript programs.],
  both: [The Bianchi identities are much nastier to write in traditional mathematical notation than as executable programs.],
)`,
      "Bianchi footnote terminology",
    );
    replace(
      "See Appendix @chap-appendix-c for a definition of tensors.",
      `#fdg-edition-select(
  scheme: [See Appendix @chap-appendix-c for a definition of tensors.],
  clojure: [See Appendix @chap-appendix-f for a definition of tensors in Emmy.],
  both: [See Appendix @chap-appendix-c for the Scheme account of tensors and Appendix @chap-appendix-f for the Emmy account.],
)`,
      "tensor definition appendix reference",
    );
  }

  if (stem === "chapter009") {
    replace(
      "see Appendix @chap-appendix-c",
      `#fdg-edition-select(
  scheme: [see Appendix @chap-appendix-c],
  clojure: [see Appendix @chap-appendix-f],
  both: [see Appendix @chap-appendix-c for Scheme and Appendix @chap-appendix-f for Emmy],
)`,
      "Einstein tensor appendix reference",
    );
  }

  if (stem === "errata") {
    replace(
      "I can\\'t see a setting in #raw(lang:\"scheme\", \"rules.scm\") that would allow this, but I haven\\'t looked at the full set of rules in a while…",
      `I can't see a setting in #raw(lang:"scheme", "rules.scm") that would allow this, but I haven't looked at the full set of rules in a while… #fdg-edition-select(
  scheme: none,
  clojure: [Emmy has no corresponding #raw(lang:"scheme", "rules.scm") file; translated examples use Emmy's simplifier and explicit cached checks as described in Appendix @chap-appendix-g.],
  both: [For the translated examples, Emmy has no corresponding #raw(lang:"scheme", "rules.scm") file; they use Emmy's simplifier and explicit cached checks as described in Appendix @chap-appendix-g.],
)`,
      "rules.scm Emmy note",
    );
    replace(
      /Page 178: This is not necessarily a \\"bug\\", but simplifying the expression produced by the form at the top of the page is extremely slow on my machine, in both #raw\(lang:"scheme", "scmutils"\) and the Clojure port\. Could be a regression\? I have not been able to get the computation to complete, and GCD times out\./,
      `#fdg-edition-select(
  scheme: [Page 178: This is not necessarily a "bug", but simplifying the expression produced by the form at the top of the page is extremely slow on my machine in #raw(lang:"scheme", "scmutils"). Could be a regression? I have not been able to get the computation to complete, and GCD times out.],
  clojure: [Page 178: This symbolic simplification is also an expensive check in Emmy. Appendix @chap-appendix-g identifies the cached check and its result.],
  both: [Page 178: This symbolic simplification is expensive in both #raw(lang:"scheme", "scmutils") and Emmy. Appendix @chap-appendix-g identifies the translated cached check and its result.],
)`,
      "expensive simplification Emmy wording",
    );
  }

  return edited;
}

function annotateErrata(body) {
  let annotated = `This section is an annotated version of the errata maintained by #link("https://github.com/mentat-collective/fdg-book")[#raw(lang:"scheme", "mentat-collective/fdg-book")]. Notes marked “Corrected in this edition” identify issues already repaired in the generated text or code.\n\n${body}`;
  const corrected = " #emph[Status: Corrected in this edition.]";
  const annotations = [
    "Be careful to flip evaluation order of these two listings.",
    "instead of #raw(lang:\"scheme\", \"S^2-type\"):",
    "Page 103: I believe the code listing at the end of the page subs in #raw(lang:\"scheme\", \"J\") where #raw(lang:\"scheme\", \"circular\") belongs.",
    "Page 107: the definition of #raw(lang:\"scheme\", \"S2-Christoffel\") will not work without #raw(lang:\"scheme\", \"S2-spherical\") coordinates installed:",
    "Page 107: The definition of #raw(lang:\"scheme\", \"sphere\") references the nonexistent #raw(lang:\"scheme\", \"S^2\") manifold family instead of the correct #raw(lang:\"scheme\", \"S^2-type\").",
    "Page 116: The code beginning here requires the #raw(lang:\"scheme\", \"S2-spherical\") coordinate system:",
    "It would be nice to add this definition to the setup in footnote 8:",
    "This can be fixed by adding the following to footnote 8\\'s setup instructions:",
    "#raw(lang:\"scheme\", \"spacetime-rect-basis\") is also used in the first code block on this page without definition:",
    "and should be explicitly defined like so:",
    "Maybe the shown value is meant to be just the leading term, but this is worth explaining.",
    "Page 159: the setup block should define #raw(lang:\"scheme\", \"SR-basis\"), as it is used in the last example of the section, on page 160:",
    "Page 165: In the definition of #raw(lang:\"scheme\", \"Force\"), #raw(lang:\"scheme\", \"eta-inverse\") is not defined, so the following two code examples (and, presumably, exercise 10.1b) will not run!",
    "I would recommend including one of the following definitions as setup:",
  ];
  for (const marker of annotations) {
    annotated = replaceExactlyOnce(
      annotated,
      marker,
      `${marker}${corrected}`,
      `errata annotation: ${marker.slice(0, 48)}`,
    );
  }
  return annotated;
}

function mergeConsecutiveRawBlocks(body) {
  let previous;
  let merged = body;
  do {
    previous = merged;
    merged = merged.replace(
      /^```([A-Za-z0-9_-]+)\n([\s\S]*?)\n```\n[ \t]*\n```\1\n([\s\S]*?)\n```$/gm,
      "```$1\n$2\n\n$3\n```",
    );
  } while (merged !== previous);
  return merged;
}

function replaceInternalPageRefs(stem, body) {
  if (stem === "errata") return body;

  return body
    .replaceAll(
      "Appendix @chap-appendix-b, page 202",
      "Appendix #fdg-ref-page(<chap-appendix-b>, page-target: <sec-B.4>)",
    )
    .replaceAll(
      "Section @sec-2.1, page 13",
      "Section #fdg-ref-page(<sec-2.1>)",
    )
    .replaceAll(
      "see page 27.",
      "see #fdg-page-ref(<sec-2.4>).",
    )
    .replaceAll(
      "Introduction, page 1",
      "Introduction, #fdg-page-ref(<intro-parallel-transport>)",
    )
    .replaceAll(
      "on page 1 and on page 93",
      "on #fdg-page-ref(<intro-parallel-transport>) and #fdg-page-ref(<sec-7.16>)",
    )
    .replaceAll(
      "defined on page 107",
      "defined in Section #fdg-ref-page(<sec-7.16>)",
    )
    .replaceAll(
      "defined on page 198",
      "defined in Section #fdg-ref-page(<sec-B.2>)",
    )
    .replaceAll(
      "as described on page 6",
      "as described in Section #fdg-ref-page(<sec-1.2>)",
    )
    .replaceAll(
      "see page xvi.",
      "see #fdg-page-ref(<prologue-residuals>).",
    )
    .replaceAll(
      "defined on page 144",
      "defined in Section #fdg-ref-page(<sec-9.3.4>)",
    )
    .replaceAll(
      "Schwarzschild spacetime (page 147)",
      "Schwarzschild spacetime (Section #fdg-ref-page(<sec-9.4.2>))",
    );
}

function addSectionLabels(stem, body) {
  const prefix = equationLabelPrefix(stem);
  if (!prefix) return body;

  const counters = [];
  return body.replace(/^(={2,6})\s+(.+)$/gm, (match, marks, title) => {
    if (/<sec-[^>]+>\s*$/.test(title)) return match;

    const depth = marks.length - 1;
    counters.length = depth;
    counters[depth - 1] = (counters[depth - 1] ?? 0) + 1;
    for (let index = 0; index < depth - 1; index += 1) {
      counters[index] ??= 1;
    }

    const number = `${prefix}.${counters.slice(0, depth).join(".")}`;
    return `${marks} ${title} <sec-${number}>`;
  });
}

const bibliographyEntries = [
  {
    type: "book",
    key: "abelson1996sicp",
    fields: {
      author: "Harold Abelson and Gerald Jay Sussman and Julie Sussman",
      title: "Structure and Interpretation of Computer Programs",
      publisher: "MIT Press",
      address: "Cambridge, MA",
      year: "1996",
    },
  },
  {
    type: "book",
    key: "abelson1980turtle",
    fields: {
      author: "Harold Abelson and Andrea deSessa",
      title: "Turtle Geometry",
      publisher: "MIT Press",
      address: "Cambridge, MA",
      year: "1980",
    },
  },
  {
    type: "book",
    key: "bishop1968tensor",
    fields: {
      author: "R. L. Bishop and S. I. Goldberg",
      title: "Tensor Analysis on Manifolds",
      publisher: "MacMillan",
      address: "New York",
      year: "1968",
    },
  },
  {
    type: "book",
    key: "carroll2003spacetime",
    fields: {
      author: "S. Carroll",
      title: "Spacetime and Geometry: An Introduction to General Relativity",
      publisher: "Benjamin Cummings",
      year: "2003",
    },
  },
  {
    type: "book",
    key: "church1941calculi",
    fields: {
      author: "Alonzo Church",
      title: "The Calculi of Lambda-Conversion",
      publisher: "Princeton University Press",
      year: "1941",
    },
  },
  {
    type: "book",
    key: "flanders1963forms",
    fields: {
      author: "Harley Flanders",
      title: "Differential Forms with Applications to the Physical Sciences",
      publisher: "Academic Press",
      address: "New York",
      year: "1963",
      note: "Dover, New York, 1989",
    },
  },
  {
    type: "book",
    key: "frankel1997geometry",
    fields: {
      author: "Theodore Frankel",
      title: "The Geometry of Physics",
      publisher: "Cambridge University Press",
      year: "1997",
    },
  },
  {
    type: "book",
    key: "galilei1623assayer",
    fields: {
      author: "Galileo Galilei",
      title: "Il Saggiatore (The Assayer)",
      year: "1623",
    },
  },
  {
    type: "book",
    key: "hawking1973large",
    fields: {
      author: "S. W. Hawking and G. F. R. Ellis",
      title: "The Large Scale Structure of Space-Time",
      publisher: "Cambridge University Press",
      year: "1973",
    },
  },
  {
    type: "manual",
    key: "ieee1991scheme",
    fields: {
      title: "IEEE Standard for the Scheme Programming Language",
      organization: "Institute of Electrical and Electronic Engineers, Inc.",
      year: "1991",
      note: "IEEE Std 1178-1990",
    },
  },
  {
    type: "book",
    key: "misner1973gravitation",
    fields: {
      author: "Charles W. Misner and Kip S. Thorne and John Archibald Wheeler",
      title: "Gravitation",
      publisher: "W. H. Freeman {and} Company",
      address: "San Francisco",
      year: "1973",
    },
  },
  {
    type: "book",
    key: "pais1982subtle",
    fields: {
      author: "Abraham Pais",
      title: "Subtle is the Lord: The Science and the Life of Albert Einstein",
      publisher: "Oxford University Press",
      address: "Oxford, UK",
      year: "1982",
    },
  },
  {
    type: "book",
    key: "papert1980mindstorms",
    fields: {
      author: "Seymour A. Papert",
      title: "Mindstorms: Children, Computers, and Powerful Ideas",
      publisher: "Basic Books",
      year: "1980",
    },
  },
  {
    type: "book",
    key: "schutz1985first",
    fields: {
      author: "B. Schutz",
      title: "A First Course in General Relativity",
      publisher: "Cambridge University Press",
      year: "1985",
    },
  },
  {
    type: "book",
    key: "singer1967topology",
    fields: {
      author: "I. M. Singer and John A. Thorpe",
      title: "Lecture Notes on Elementary Topology and Geometry",
      publisher: "Scott, Foresman {and} Company",
      address: "Glenview, Illinois",
      year: "1967",
    },
  },
  {
    type: "book",
    key: "spivak1970comprehensive",
    fields: {
      author: "Michael Spivak",
      title: "A Comprehensive Introduction to Differential Geometry",
      publisher: "Publish or Perish",
      address: "Houston, Texas",
      year: "1970",
    },
  },
  {
    type: "book",
    key: "spivak1965calculus",
    fields: {
      author: "Michael Spivak",
      title: "Calculus on Manifolds",
      publisher: "W. A. Benjamin",
      address: "New York, NY",
      year: "1965",
    },
  },
  {
    type: "techreport",
    key: "sussman2002role",
    fields: {
      author: "Gerald Jay Sussman and Jack Wisdom",
      title: "The Role of Programming in the Formulation of Ideas",
      institution: "Artificial Intelligence Laboratory",
      number: "AIM-2002-018",
      month: "November",
      year: "2002",
    },
  },
  {
    type: "book",
    key: "sussman2001sicm",
    fields: {
      author: "Gerald Jay Sussman and Jack Wisdom and Meinhard E. Mayer",
      title: "Structure and Interpretation of Classical Mechanics",
      publisher: "MIT Press",
      address: "Cambridge, MA",
      year: "2001",
    },
  },
  {
    type: "book",
    key: "wald1984general",
    fields: {
      author: "Robert M. Wald",
      title: "General Relativity",
      publisher: "University of Chicago Press",
      year: "1984",
    },
  },
  {
    type: "misc",
    key: "fdg-software",
    fields: {
      title: "Free software",
      url: "https://groups.csail.mit.edu/mac/users/gjs/6946/linux-install.htm",
    },
  },
];

const citationKeyByNumber = new Map(
  bibliographyEntries.map((entry, index) => [String(index + 1), entry.key]),
);

function bibEscape(value) {
  return value.replaceAll("\\", "\\\\");
}

function renderBibtex(entries) {
  return entries.map(entry => {
    const fields = Object.entries(entry.fields)
      .map(([name, value]) => `  ${name} = {${bibEscape(value)}},`)
      .join("\n");
    return `@${entry.type}{${entry.key},\n${fields}\n}`;
  }).join("\n\n") + "\n";
}

function replaceCitationsAndEquationRefs(body) {
  return body
    .replace(/\\\[(\d+)\\\]/g, (match, number) => {
      const key = citationKeyByNumber.get(number);
      return key ? `@${key}` : match;
    })
    .replace(/\b([Ss]ections?)\s+((?:[A-C]|\d+)\.\d+(?:\.\d+)?)/g, (match, noun, number) => {
      return sectionLabels.has(number) ? `${noun} @sec-${number}` : match;
    })
    .replace(/Appendices A and B/g, "Appendices @chap-appendix-a and @chap-appendix-b")
    .replace(/Appendices A, B, and C/g, "Appendices @chap-appendix-a, @chap-appendix-b, and @chap-appendix-c")
    .replace(/\bAppendix A\b/g, "Appendix @chap-appendix-a")
    .replace(/\bAppendix B\b/g, "Appendix @chap-appendix-b")
    .replace(/\bAppendix C\b/g, "Appendix @chap-appendix-c")
    .replace(
      /\b(equations?|Equations?|Eqs?\.)\s+\(((?:[A-C]|\d+)\.\d+)(--|[-–])((?:[A-C]|\d+)\.)?(\d+)\)/g,
      (_match, noun, start, dash, endPrefix = "", endLast) => {
        const implicitPrefix = start.match(/^((?:[A-C]|\d+)\.)/)?.[1] ?? "";
        return `${noun} @${start} ${dash} @${endPrefix || implicitPrefix}${endLast}`;
      },
    )
    .replace(
      /\b(equations?|Equations?|Eqs?\.)\s+((?:[A-C]|\d+)\.\d+)(--|[-–])((?:[A-C]|\d+)\.)?(\d+)/g,
      (_match, noun, start, dash, endPrefix = "", endLast) => {
        const implicitPrefix = start.match(/^((?:[A-C]|\d+)\.)/)?.[1] ?? "";
        return `${noun} @${start} ${dash} @${endPrefix || implicitPrefix}${endLast}`;
      },
    )
    .replace(
      /\b(equations?|Equations?|Eqs?\.)\s+\(((?:[A-C]|\d+)\.\d+(?:,\s*(?:[A-C]|\d+)\.\d+)+)\)/g,
      (_match, noun, list) => `${noun} ${list.split(/,\s*/).map(number => `@${number}`).join(", ")}`,
    )
    .replace(/\b(equations?|Equations?|Eqs?\.)\s+\(((?:[A-C]|\d+)\.\d+)\)/g, "$1 @$2")
    .replace(/\b(equations?|Equations?|Eqs?\.)\s+((?:[A-C]|\d+)\.\d+)/g, "$1 @$2")
    .replace(/\b(property|Property|properties|Properties)\s+\(((?:[A-C]|\d+)\.\d+)\)/g, "$1 @$2")
    .replace(/\b(and|or)\s+\(((?:[A-C]|\d+)\.\d+)\)/g, "$1 @$2")
    .replace(/\(((?:[A-C]|\d+)\.\d+)\)/g, (_match, number) => `#ref(<${number}>)`)
    .replace(
      /#footnote\[The analogous recovery of coefficient tuples from vector fields is equation\s+```scheme\s+#ref\(<3\.3>\):[\s\S]*?```\]/g,
      "#footnote[The analogous recovery of coefficient tuples from vector fields is equation @3.3: $b^i_(chi, sans(v)) = sans(v)(chi^i) compose chi^(-1)$.]",
    )
    .replace(/@((?:[A-C]|\d+)\.\d+)(--|[-–])@((?:[A-C]|\d+)\.\d+)/g, "@$1 $2 @$3")
    .replace(
      /\((see equations|defined in equations|equations) (@(?:[A-C]|\d+)\.\d+ (?:--|[-–]) @(?:[A-C]|\d+)\.\d+)(?=\s+(?:that|have)\b|,)/g,
      "($1 $2)",
    );
}

// Pandoc escapes prose quotation marks as `\"`. In Typst markup that
// backslash is printed, while ordinary `"` characters are paired
// typographically. Remove the prose-only escape without changing quoted
// strings in math, source code, or generated raw-code calls.
function unescapeTypstProseQuotes(body) {
  const protectedSpan = /(```[\s\S]*?```|`[^`\n]*`|\$[\s\S]*?\$|\/\*[\s\S]*?\*\/|#raw\(\s*(?:lang:"(?:\\.|[^"\\])*"\s*,\s*)?"(?:\\.|[^"\\])*"\s*\))/g;
  return body
    .split(protectedSpan)
    .map(part => {
      protectedSpan.lastIndex = 0;
      if (!part || protectedSpan.test(part)) return part;
      protectedSpan.lastIndex = 0;
      return part.replaceAll(String.raw`\"`, '"');
    })
    .join("");
}

function wrapEmbeddedSchemeBlocks(body, stem) {
  let ordinal = 0;
  return body.replace(/```scheme\n[\s\S]*?\n```/g, source => {
    ordinal += 1;
    let executableOrdinal = ordinal;
    const code = source.slice("```scheme\n".length, -"\n```".length);
    // The printed discussion introduces the geodesic residual immediately
    // before showing how Cartan is computed. Execute those two blocks in the
    // dependency order while leaving their printed positions untouched.
    if (stem === "chapter001" && code.includes("(define geodesic-equation-residuals")) executableOrdinal = 16;
    if (stem === "chapter001" && code.includes("(define Cartan")) executableOrdinal = 15;
    const number = String(executableOrdinal).padStart(3, "0");
    const id = `${stem}/${number}`;
    if (code.includes("*/")) throw new Error(`Scheme block ${id} cannot be embedded in a Typst comment`);
    return `/* fdg-code-source: ${id}\n${code}\nfdg-code-source-end */\n#fdg-code-block("${id}")`;
  });
}

function convert(file) {
  const input = path.join(orgDir, file);
  const stem = file.replace(/\.org$/, "");
  const tempDir = mkdtempSync(path.join(os.tmpdir(), "fdg-org-"));
  const tempInput = path.join(tempDir, file);
  const originalSource = readFileSync(input, "utf8");
  const source = normalizeOrgSource(originalSource
    // The Org sources use a bare backslash at the end of some TeX display lines
    // as a line-break marker. Pandoc's TeX parser expects the LaTeX spelling.
    .replace(/(?<!\\)\\\n/g, "\\\\\n"), stem);
  writeFileSync(tempInput, source);
  const body = stem === "references"
    ? '#bibliography("../references.bib", title: none, full: true, style: "ieee")'
    : normalizeCollapsedLetteredLists(cleanTypstOutput(execFileSync(
      "pandoc",
      ["--from=org", "--to=typst", "--wrap=none", tempInput],
      { encoding: "utf8", maxBuffer: 128 * 1024 * 1024 },
    )));

  const title = readTitle(file);
  const displayTitle = chapterDisplayTitle(title);
  const numbered = isNumberedChapter(title, stem);
  const bodyWithoutLabels = body
    .replace(/^<[^>\n]+>\n/gm, "")
    .replace(/^= Footnotes\n/gm, "");
  const bodyWithoutDuplicateTitle = bodyWithoutLabels.replace(
    new RegExp(`^= ${escapeRegex(title)}\\n+`),
    "",
  );
  const bodyWithSectionLabels = addSectionLabels(stem, bodyWithoutDuplicateTitle);
  const bodyWithFigures = insertFigurePdfs(stem, bodyWithSectionLabels);
  const bodyWithChapterRepairs = applyChapterRepairs(stem, bodyWithFigures);
  const bodyWithMergedRawBlocks = mergeConsecutiveRawBlocks(bodyWithChapterRepairs);
  const bodyWithPostMergeRepairs = stem === "chapter003" ? repairChapter3(bodyWithMergedRawBlocks) : bodyWithMergedRawBlocks;
  const bodyWithRefs = replaceCitationsAndEquationRefs(bodyWithPostMergeRepairs);
  const bodyWithPageRefs = replaceInternalPageRefs(stem, bodyWithRefs);
  const bodyWithTypstLinebreaks = bodyWithPageRefs.replace(/\\\\(?=\n)/g, "\\");
  const bodyWithFinalRepairs = stem === "chapter003"
    ? repairChapter3(bodyWithTypstLinebreaks)
    : stem === "chapter010"
      ? compactChapter10AuditedDisplays(repairChapter10(bodyWithTypstLinebreaks))
      : bodyWithTypstLinebreaks;
  const bodyWithTypstMathRepairs = normalizeTypstSubsupBraces(bodyWithFinalRepairs);
  const bodyWithPostMathRepairs = stem === "chapter010"
    ? compactChapter10AuditedDisplays(repairChapter10(bodyWithTypstMathRepairs))
    : bodyWithTypstMathRepairs;
  const bodyWithEditionAwareProse = applyEditionAwareProse(stem, bodyWithPostMathRepairs);
  const bodyWithErrataAnnotations = stem === "errata"
    ? annotateErrata(bodyWithEditionAwareProse)
    : bodyWithEditionAwareProse;
  const bodyWithNormalizedDisplays = wrapEmbeddedSchemeBlocks(
    unescapeTypstProseQuotes(removeRedundantScaledDelimiters(
      normalizeMultilineMath(bodyWithErrataAnnotations),
    )),
    stem,
  );

  let content = [
    `// Generated from ../../fdg-book/scheme/org/${file}.`,
    `// Re-run scripts/convert-org-to-typst.mjs to refresh.`,
    `#import "../lib.typ": fdg-chapter, fdg-code-block, fdg-edition-select, fdg-figure, fdg-cetz-figure, fdg-page-ref, fdg-ref-page, curl, grad, Lap, div, length, TeX, LaTeX`,
    "",
    `#fdg-chapter(${JSON.stringify(typstEscape(displayTitle))}, numbered: ${numbered}, eq-prefix: ${JSON.stringify(equationLabelPrefix(stem) ?? "0")}, ref-label: ${JSON.stringify(chapterLabel(stem) ?? "")})[`,
    bodyWithNormalizedDisplays.trimEnd(),
    "]",
    "",
  ].join("\n");

  if (["appendix_a", "appendix_b", "appendix_c"].includes(stem)) {
    content = content
      .replace("fdg-code-block,", "fdg-code-block, fdg-scheme-code-block,")
      .replaceAll("#fdg-code-block(", "#fdg-scheme-code-block(");
  }

  writeFileSync(path.join(contentDir, `${stem}.typ`), content);
  return { stem, title };
}

mkdirSync(contentDir, { recursive: true });
const chapters = files.map(convert);

function cljsAppendix(sourceStem, targetStem, sourceLetter, targetLetter, title) {
  let source = readFileSync(path.join(contentDir, `${sourceStem}.typ`), "utf8");
  source = source
    .replace(/^\/\/ Generated[^\n]*\n\/\/ Re-run[^\n]*\n/, "")
    .replaceAll("fdg-scheme-code-block", "fdg-cljs-code-block")
    .replace(/fdg-code-block/g, "fdg-cljs-code-block")
    .replace(
      /#fdg-chapter\("[^"]+", numbered: true, eq-prefix: "[A-C]", ref-label: "chap-appendix-[a-c]"\)\[/,
      `#fdg-chapter(${JSON.stringify(title)}, numbered: true, eq-prefix: ${JSON.stringify(targetLetter)}, ref-label: ${JSON.stringify(`chap-appendix-${targetLetter.toLowerCase()}`)})[\n#block(inset: (left: 1em), stroke: (left: 2pt + gray))[#emph[Editorial note: This appendix is derived from Appendix ${sourceLetter}; its examples have been translated to ClojureScript using Emmy, while the original wording has been retained wherever possible.]]`,
    )
    .replaceAll(`sec-${sourceLetter}.`, `sec-${targetLetter}.`)
    .replaceAll(`<${sourceLetter}.`, `<${targetLetter}.`)
    .replaceAll(`@${sourceLetter}.`, `@${targetLetter}.`)
    .replaceAll('lang:"scheme"', 'lang:"clojure"')
    .replaceAll("Scmutils", "Emmy")
    .replaceAll("scmutils", "Emmy")
    .replaceAll("Scheme procedures", "ClojureScript functions")
    .replaceAll("Scheme procedure", "ClojureScript function")
    .replaceAll("Scheme programs", "ClojureScript programs")
    .replaceAll("Scheme program", "ClojureScript program")
    .replaceAll("Scheme system", "ClojureScript system")
    .replaceAll("Scheme symbols", "ClojureScript symbols")
    .replaceAll("Scheme symbol", "ClojureScript symbol")
    .replaceAll("Scheme vectors", "ClojureScript vectors")
    .replaceAll("Scheme vector", "ClojureScript vector")
    .replaceAll("In Scheme", "In ClojureScript")
    .replaceAll("in Scheme", "in ClojureScript")
    .replaceAll("the computer language #emph[Scheme] @ieee1991scheme", "ClojureScript with the Emmy computer algebra library")
    .replaceAll("Scheme is based on", "ClojureScript is a Lisp and is based on")
    .replaceAll("Scheme online documentation", "ClojureScript documentation")
    .replaceAll("Scheme does not care", "ClojureScript does not care")
    .replaceAll("All selectors in Scheme", "All selectors in ClojureScript")
    .replaceAll("Scheme is a dialect of Lisp", "ClojureScript is a dialect of Clojure and a member of the Lisp family");

  if (sourceStem === "appendix_a") {
    source = source
      .replace('Programming languages should be designed not by piling feature on top of feature, but by removing the weaknesses and restrictions that make additional features appear necessary. Scheme demonstrates that a very small number of rules for forming expressions, with no restrictions on how they are composed, suffice to form a practical and efficient programming language that is flexible enough to support most of the major programming paradigms in use today.\n\nIEEE Standard for the Scheme Programming Language @ieee1991scheme, p. 3',
        'ClojureScript is a dialect of Clojure that compiles to JavaScript and retains Clojure’s emphasis on immutable data and functional programming. Emmy supplies the generic arithmetic and symbolic mathematics used by the examples in this edition.')
      .replace(/Here we give an elementary introduction to Scheme\.[\s\S]*?@abelson1996sicp\./,
        "Here we give an elementary introduction to the ClojureScript forms used in this book. For a fuller introduction, see the ClojureScript language documentation.")
      .replace("Scheme is a simple programming language", "ClojureScript is a programming language")
      .replaceAll("Procedure Calls", "Function Calls")
      .replaceAll("procedure call", "function call")
      .replaceAll("Procedure definitions", "Function definitions")
      .replaceAll("procedures", "functions")
      .replaceAll("procedure", "function")
      .replaceAll("Lambda Expressions", "Function Expressions")
      .replaceAll("$lambda$-expressions", "#raw(lang:\"clojure\", \"fn\") expressions")
      .replaceAll("$lambda$-expression", "#raw(lang:\"clojure\", \"fn\") expression")
      .replaceAll("the define construct", "the #raw(lang:\"clojure\", \"def\") construct")
      .replaceAll("Recursive Procedures", "Recursive Functions")
      .replaceAll("Lists are built from pairs.", "ClojureScript lists are persistent sequential collections.")
      .replace(/A pair is made using the constructor[\s\S]*?Thus,\n/, "The functions #raw(lang:\"clojure\", \"first\") and #raw(lang:\"clojure\", \"rest\") select the first element and the remaining sequence. Thus,\n")
      .replaceAll('#raw(lang:"clojure", "list-ref")', '#raw(lang:"clojure", "nth")')
      .replaceAll('#raw(lang:"clojure", "vector-ref")', '#raw(lang:"clojure", "nth")')
      .replaceAll('#raw(lang:"clojure", "car")', '#raw(lang:"clojure", "first")')
      .replaceAll('#raw(lang:"clojure", "cdr")', '#raw(lang:"clojure", "rest")')
      .replaceAll('#raw(lang:"clojure", "eq?")', '#raw(lang:"clojure", "=")')
      .replaceAll('#raw(lang:"clojure", "#t")', '#raw(lang:"clojure", "true")')
      .replaceAll('#raw(lang:"clojure", "#f")', '#raw(lang:"clojure", "false")');

    source = replaceExactlyOnce(
      source,
      'Function definitions may be expressed more conveniently using "syntactic sugar."',
      `=== Names, functions, and local bindings

ClojureScript uses several related forms where Scheme uses #raw(lang:"clojure", "define"), #raw(lang:"clojure", "lambda"), and local definitions. Their different scopes are important:

- #raw(lang:"clojure", "def") gives a name to a value in the current namespace. The value may be a number, a function, or any other object. Thus #raw(lang:"clojure", "(def pi 3.14159)") defines a global name.
- #raw(lang:"clojure", "fn") constructs a function value. Its parameters are written in a vector: #raw(lang:"clojure", "(fn [x] (* x x))"). An #raw(lang:"clojure", "fn") may be anonymous, or it may be stored in a name using #raw(lang:"clojure", "def").
- #raw(lang:"clojure", "defn") is convenient syntax for a #raw(lang:"clojure", "def") whose value is an #raw(lang:"clojure", "fn"). For example, #raw(lang:"clojure", "(defn square [x] (* x x))") is essentially #raw(lang:"clojure", "(def square (fn [x] (* x x)))"). Use #raw(lang:"clojure", "defn") for a named, namespace-level function and #raw(lang:"clojure", "def") for other namespace-level values.
- #raw(lang:"clojure", "let") introduces local names and values. Its binding vector alternates names and expressions: #raw(lang:"clojure", "(let [x 3 y 4] (sqrt (+ (square x) (square y))))"). These names exist only in the body of the #raw(lang:"clojure", "let").
- #raw(lang:"clojure", "letfn") introduces local function names. Unlike ordinary #raw(lang:"clojure", "let") bindings, the functions may refer to themselves and to one another, so #raw(lang:"clojure", "letfn") is the direct translation for recursive or mutually dependent internal Scheme function definitions.

The names introduced by #raw(lang:"clojure", "def") and #raw(lang:"clojure", "defn") persist in the namespace. The names introduced by #raw(lang:"clojure", "let"), #raw(lang:"clojure", "letfn"), and function parameter vectors are lexical and disappear outside their bodies.

Function definitions may be expressed more conveniently using "syntactic sugar."`,
      "appendix_d: names and bindings introduction",
    );

    source = replaceExactlyOnce(
      source,
      "where #emph[formal-parameters] is a list of symbols that will be the names of the arguments to the function and #emph[body] is an expression that may refer to the formal parameters.",
      "where #emph[formal-parameters] is a vector of symbols naming the function arguments and #emph[body] is an expression that may refer to them. For a variadic function the parameter vector contains #raw(lang:\"clojure\", \"&\") before the name that receives the remaining arguments.",
      "appendix_d: fn parameter vectors",
    );
    source = replaceExactlyOnce(
      source,
      "For convenience there is a special predicate expression #raw(lang:\"clojure\", \"else\") that can be used as the predicate in the last clause of a #raw(lang:\"clojure\", \"cond\").",
      "For convenience the keyword #raw(lang:\"clojure\", \":else\") can be used as the predicate in the last clause of a #raw(lang:\"clojure\", \"cond\"). ClojureScript clauses are written as alternating predicate and consequent expressions, without an extra pair of parentheses around each clause.",
      "appendix_d: cond else",
    );
    source = replaceExactlyOnce(
      source,
      "Data can be glued together to form compound data structures. A list is a data structure in which the elements are linked sequentially. A ClojureScript vector is a data structure in which the elements are packed in a linear array. New elements can be added to lists, but to access the $n$th element of a list takes computing time proportional to $n$. By contrast a ClojureScript vector is of fixed length, and its elements can be accessed in constant time. All data structures in this book are implemented as combinations of lists and ClojureScript vectors. Compound data objects are constructed from components by functions called constructors and the components are accessed by selectors.",
      "Data can be glued together to form persistent compound values. ClojureScript lists and other sequences support sequential traversal; vectors support efficient indexed lookup with #raw(lang:\"clojure\", \"nth\"). Both are immutable values, and operations that add or replace elements produce new collections. The mathematical #raw(lang:\"clojure\", \"up\") and #raw(lang:\"clojure\", \"down\") values used throughout this book are Emmy structures, not ordinary ClojureScript vectors: use Emmy's generic arithmetic and #raw(lang:\"clojure\", \"ref\") when working with their components.",
      "appendix_d: collections and Emmy structures",
    );
    source = source
      .replaceAll("Vectors are simpler than lists.", "Vectors provide convenient literals and indexed access.")
      .replaceAll("== Scheme–ClojureScript Cheat Sheet", "== Scheme–ClojureScript Cheat Sheet");

    const cheatSheet = `

#pagebreak()
== Scheme–ClojureScript Cheat Sheet <sec-D.9>

The following correspondences cover the language forms used most often in this book. They describe syntax; Emmy supplies the mathematical operations used by the examples.

#text(size: 8.6pt)[
  #table(
    columns: (1.05fr, 1.55fr, 1.75fr),
    inset: (x: 5pt, y: 4pt),
    align: left + top,
    stroke: (x, y) => (bottom: 0.35pt + rgb("#aaa")),
    fill: (x, y) => if y == 0 { rgb("#e8eceb") },
    table.header(
      repeat: true,
      [*Form*],
      [*Scheme*],
      [*ClojureScript*],
    ),
    [Global value],
    [#raw(lang:"clojure", "(define x value)")],
    [#raw(lang:"clojure", "(def x value)")],
    [Global function],
    [#raw(lang:"clojure", "(define (f x) body)")],
    [#raw(lang:"clojure", "(defn f [x] body)")],
    [Anonymous function],
    [#raw(lang:"clojure", "(lambda (x) body)")],
    [#raw(lang:"clojure", "(fn [x] body)")],
    [Function stored as a value],
    [#raw(lang:"clojure", "(define f (lambda (x) body))")],
    [#raw(lang:"clojure", "(def f (fn [x] body))")],
    [Local values],
    [#raw(lang:"clojure", "(let ((x a) (y b)) body)")],
    [#raw(lang:"clojure", "(let [x a y b] body)")],
    [Sequential local values],
    [#raw(lang:"clojure", "(let* ((x 2) (y (+ x 1))) y)")],
    [#raw(lang:"clojure", "(let [x 2 y (+ x 1)] y)")],
    [Local functions],
    [#raw(lang:"clojure", "(let () (define (f x) ...) (f 3))")],
    [#raw(lang:"clojure", "(letfn [(f [x] ...)] (f 3))")],
    [Named local loop],
    [#raw(lang:"clojure", "(let loop ((x 3)) ... (loop ...))")],
    [#raw(lang:"clojure", "(loop [x 3] ... (recur ...))")],
    [Expression sequence],
    [#raw(lang:"clojure", "(begin (display x) x)")],
    [#raw(lang:"clojure", "(do (println x) x)")],
    [Conditional],
    [#raw(lang:"clojure", "(if p a b)"); #raw(lang:"clojure", "(cond (p a) (else b))")],
    [#raw(lang:"clojure", "(if p a b)"); #raw(lang:"clojure", "(cond p a :else b)")],
    [Boolean literals],
    [#raw(lang:"clojure", "#t") and #raw(lang:"clojure", "#f")],
    [#raw(lang:"clojure", "true") and #raw(lang:"clojure", "false")],
    [Falsey values],
    [Only #raw(lang:"clojure", "#f"), as in #raw(lang:"clojure", "(if '() 'yes 'no)") → #raw(lang:"clojure", "yes")],
    [#raw(lang:"clojure", "false") and #raw(lang:"clojure", "nil"), as in #raw(lang:"clojure", "(if nil :yes :no)") → #raw(lang:"clojure", ":no")],
    [Exact ratio],
    [#raw(lang:"clojure", "1/2")],
    [#raw(lang:"clojure", "(/ 1 2)"); do not replace exact arithmetic with #raw(lang:"clojure", "0.5")],
    [Vector literal],
    [#raw(lang:"clojure", "#(a b c)")],
    [#raw(lang:"clojure", "[a b c]")],
    [Empty list],
    [#raw(lang:"clojure", "'()")],
    [#raw(lang:"clojure", "'()") or #raw(lang:"clojure", "(list)")],
    [Equality in these examples],
    [#raw(lang:"clojure", "(eq? a b)")],
    [#raw(lang:"clojure", "(= a b)")],
    [Indexed selection],
    [#raw(lang:"clojure", "(list-ref xs 1)") or #raw(lang:"clojure", "(vector-ref xs 1)")],
    [#raw(lang:"clojure", "(nth xs 1)"); use #raw(lang:"clojure", "(ref s 1)") for Emmy structures],
    [Sequence selectors],
    [#raw(lang:"clojure", "(car xs)") and #raw(lang:"clojure", "(cdr xs)")],
    [#raw(lang:"clojure", "(first xs)") and #raw(lang:"clojure", "(rest xs)")],
    [Variadic parameters],
    [#raw(lang:"clojure", "(lambda args body)") or a dotted parameter list],
    [#raw(lang:"clojure", "(fn [& args] body)")],
    [Quotation],
    [#raw(lang:"clojure", "'(a b)")],
    [#raw(lang:"clojure", "'(a b)"); keywords such as #raw(lang:"clojure", ":else") evaluate to themselves],
    [Function application],
    [#raw(lang:"clojure", "(f x y)")],
    [#raw(lang:"clojure", "(f x y)"); parameter and binding lists use vectors],
  )
]
`;
    source = source.replace(/\n\]\s*$/, `${cheatSheet}\n]`);
  }

  if (sourceStem === "appendix_b") {
    source = replaceExactlyOnce(
      source,
      "A procedure #raw(lang:\"clojure\", \"h\") that computes the cube of the sine of its argument may be defined by composing the procedures #raw(lang:\"clojure\", \"cube\") and #raw(lang:\"clojure\", \"sin\"):",
      "A function #raw(lang:\"clojure\", \"h\") that computes the cube of the sine of its argument may be defined by composing the functions #raw(lang:\"clojure\", \"cube\") and #raw(lang:\"clojure\", \"sin\"):",
      "appendix_e: composition terminology",
    );
    source = replaceExactlyOnce(
      source,
      "A procedure #raw(lang:\"clojure\", \"g\") that multiplies the cube of its argument by the sine of its argument is",
      "A function #raw(lang:\"clojure\", \"g\") that multiplies the cube of its argument by the sine of its argument is",
      "appendix_e: arithmetic terminology",
    );
    source = replaceExactlyOnce(
      source,
      "The default printer simplifies the expression,#footnote[The procedure #raw(lang:\"clojure\", \"print-expression\") can be used in a program to print a simplified version of an expression. The default printer in the user interface incorporates the simplifier.] and displays it in a readable form.",
      "The cached runner output records the value returned by each example. Emmy simplifies many symbolic results during generic arithmetic, and examples may call #raw(lang:\"clojure\", \"simplify\") explicitly when normalization is required.#footnote[Appendix @chap-appendix-g explains result capture, cached output, and explicit checks. The runner does not rely on scmutils' interactive #raw(lang:\"scheme\", \"print-expression\") printer.]",
      "appendix_e: runner and simplification",
    );
    source = replaceExactlyOnce(
      source,
      "The procedure #raw(lang:\"clojure\", \"literal-function\") makes a procedure that acts as a function having no properties other than its name.",
      "The function #raw(lang:\"clojure\", \"literal-function\") constructs a symbolic function having no properties other than its name and declared signature.",
      "appendix_e: literal function terminology",
    );
    source = replaceExactlyOnce(
      source,
      "Scheme comes in handy here:",
      "ClojureScript and Emmy make the distinction explicit:",
      "appendix_e: multiple argument wording",
    );
    source = source
      .replaceAll("The procedure #raw(lang:\"clojure\", \"component\") is the general selector procedure", "The function #raw(lang:\"clojure\", \"component\") is the general selector")
      .replaceAll("the selector procedure #raw(lang:\"clojure\", \"ref\")", "the selector function #raw(lang:\"clojure\", \"ref\")")
      .replaceAll("The procedure #raw(lang:\"clojure\", \"ref\")", "The function #raw(lang:\"clojure\", \"ref\")")
      .replaceAll("The derivative of the #raw(lang:\"clojure\", \"sin\") procedure is a procedure", "The derivative of the #raw(lang:\"clojure\", \"sin\") function is a function")
      .replaceAll("as procedures in several ways", "as ClojureScript functions in several ways")
      .replaceAll("the procedure arguments", "the ClojureScript function arguments")
      .replaceAll("requires the procedures to build", "requires the functions to build")
      .replaceAll("we may define procedures that implement", "we may define functions that implement")
      .replaceAll("Exercise B.1", "Exercise E.1")
      .replaceAll("exercise B.1", "exercise E.1")
      .replaceAll("Exercise B.2", "Exercise E.2");
  }

  if (sourceStem === "appendix_c") {
    source = replaceExactlyOnce(
      source,
      "takes the procedure #raw(lang:\"clojure\", \"T\") to be tested",
      "takes the Emmy/ClojureScript function #raw(lang:\"clojure\", \"T\") to be tested",
      "appendix_f: tensor-test terminology",
    );
  }
  writeFileSync(path.join(contentDir, `${targetStem}.typ`), source);
  return { stem: targetStem, title: `Appendix ${targetLetter}: ${title}` };
}

const cljsAppendices = [
  cljsAppendix("appendix_a", "appendix_d", "A", "D", "ClojureScript"),
  cljsAppendix("appendix_b", "appendix_e", "B", "E", "Our Notation in Emmy"),
  cljsAppendix("appendix_c", "appendix_f", "C", "F", "Tensors in Emmy"),
];
const appendixG = { stem: "appendix_g", title: "Appendix G: Running the Emmy Examples" };
const editionAwareLocationNames = {
  prologue: "Prologue",
  chapter001: "Chapter 1",
  chapter002: "Chapter 2",
  chapter006: "Chapter 6",
  chapter007: "Chapter 7",
  chapter008: "Chapter 8",
  chapter009: "Chapter 9",
  errata: "Errata",
};
const editionAwareProseRecord = `
#import "../lib.typ": fdg-chapter, fdg-page-ref

#fdg-chapter("Edition-specific Prose Record", numbered: true, eq-prefix: "H", ref-label: "chap-appendix-h")[
This table is generated from the converter's edition-aware prose replacements. Each row identifies text for which the ClojureScript edition or the combined edition prints a variant of the Scheme wording. The page links are resolved from labels placed directly at the modified text, so they follow pagination changes automatically.

#text(size: 8.6pt)[
  #table(
    columns: (0.85fr, 0.7fr, 2.45fr),
    inset: (x: 5pt, y: 4pt),
    align: left + top,
    stroke: (x, y) => (bottom: 0.35pt + rgb("#aaa")),
    fill: (x, y) => if y == 0 { rgb("#e8eceb") },
    table.header(
      repeat: true,
      [*Location*],
      [*Page*],
      [*Edition-specific change*],
    ),
${editionAwareProseEdits.map(({ stem, description, label }) => [
    `    [${editionAwareLocationNames[stem] ?? stem}],`,
    `    [#fdg-page-ref(label(${JSON.stringify(label)}))],`,
    `    [${description}],`,
  ].join("\n")).join("\n")}
  )
]
]
`;
writeFileSync(
  path.join(contentDir, "appendix_g.typ"),
  readFileSync(path.join(typDir, "templates", "appendix_g.typ"), "utf8"),
);
const appendixH = { stem: "appendix_h", title: "Appendix H: Edition-specific Prose Record" };
writeFileSync(path.join(contentDir, "appendix_h.typ"), editionAwareProseRecord);

const indexedIncludes = chapters
  .filter(({ stem }) => !["errata", "references"].includes(stem))
  .map(({ stem }) => {
    const include = `  #include "content/${stem}.typ"`;
    if (stem === "preface") {
      return [
        '  #if code-edition in ("clojure", "both") [',
        '    #include "content/preface_cljs.typ"',
        "  ]",
        include,
      ].join("\n");
    }
    if (stem === "appendix_a") {
      return [
        "  #[",
        "    #counter(heading).update(0)",
        "    #set heading(numbering: \"A.1\", supplement: [Appendix])",
        `    #include "content/${stem}.typ"`,
      ].join("\n");
    }
    if (stem === "appendix_b") return `    #include "content/${stem}.typ"`;
    if (stem === "appendix_c") {
      return [
        `    #include "content/${stem}.typ"`,
        '    #if code-edition in ("clojure", "both") [',
        '      #include "content/appendix_d.typ"',
        '      #include "content/appendix_e.typ"',
        '      #include "content/appendix_f.typ"',
        '      #include "content/appendix_g.typ"',
        '      #include "content/appendix_h.typ"',
        "    ]",
        "  ]",
      ].join("\n");
    }
    if (stem !== "chapter001") return include;
    return [
      "  #pagebreak()",
      "  #set page(numbering: \"1\")",
      "  #counter(page).update(1)",
      include,
    ].join("\n");
  })
  .join("\n");
const errataInclude = '#include "content/errata.typ"';
const referencesInclude = '#include "content/references.typ"';

writeFileSync(
  path.join(typDir, "main.typ"),
  `// Generated by ../scripts/convert-org-to-typst.mjs.\n`
    + `// Edit typ/lib.typ for presentation; edit the converter for structural changes.\n\n`
    + `#import "lib.typ": *\n`
    + `#import "index.typ": fdg-indexed-body, fdg-index-page\n\n`
    + `// For a manual test, replace this line with:\n`
    + `// #let code-edition = "clojure" // "scheme", "clojure", or "both"\n`
    + `#let code-edition = sys.inputs.at("code", default: "scheme")\n`
    + `#show: fdg-book.with(code-edition: code-edition)\n\n`
    + `#fdg-title-page(\n`
    + `  seed: fdg-seed-bibliography-order(),\n`
    + `  code-edition: code-edition,\n`
    + `)\n\n`
    + `#set page(numbering: "i")\n`
    + `\n`
    + `#outline(title: "Contents")\n`
    + `#pagebreak()\n\n`
    + `#fdg-indexed-body[\n`
    + `${indexedIncludes}\n`
    + `  ${errataInclude}\n`
    + `  ${referencesInclude}\n`
    + `]\n\n`
    + `#set page(numbering: "1")\n`
    + `#fdg-index-page()\n`,
);

writeFileSync(path.join(typDir, "references.bib"), renderBibtex(bibliographyEntries));

writeFileSync(
  path.join(typDir, "manifest.typ"),
  `// Generated input manifest for the Scheme Org source files.\n`
    + `#let fdg-source-files = (\n`
    + [...chapters, ...cljsAppendices, appendixG, appendixH]
      .map(({ stem, title }) => `  (file: "content/${stem}.typ", title: ${JSON.stringify(typstEscape(title))}),`)
      .join("\n")
    + `\n)\n`,
);

console.log(`Converted ${chapters.length} Org files into ${path.relative(root, contentDir)}.`);
