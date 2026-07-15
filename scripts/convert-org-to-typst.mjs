#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";

const root = process.cwd();
const orgDir = path.join(root, "fdg-book", "scheme", "org");
const typDir = path.join(root, "typ");
const contentDir = path.join(typDir, "content");

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
      const trimmed = math.replace(/\\label\{[^}]+\}/g, "").trim();
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
        block.push(lines[index].replaceAll("’", "'"));
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
  if (stem === "appendix_b") {
    return source
      .replaceAll("I_0(s) &= y \\\\", "I_0(s) &= t \\\\")
      .replaceAll("AB = [AC_0, AC_1, AC_2].", "AC = [AC_0, AC_1, AC_2].");
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

  return source;
}

function normalizeOrgSource(source, stem) {
  const repairedSource = applyPdfFidelitySourceRepairs(source, stem);
  return wrapBareSchemeBlocks(normalizeDollarMath(normalizeLatexDisplaysWithFootnotes(repairedSource, stem)))
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
    .replaceAll("Papert\n[13].", "Papert @papert1980mindstorms.")
    .replaceAll("this lagrangian is implemented by", "This Lagrangian is implemented by")
    .replaceAll("90◦E meridian", "90◦ E meridian")
    .replaceAll("di- rection", "direction")
    .replaceAll("deriva- tives", "derivatives")
    .replaceAll("com- ponents", "components")
    .replaceAll("deriva-\ntives", "derivatives")
    .replaceAll("com-\n   ponents", "components")
    .replaceAll("(make fake-vector-field V-over-mu n)", "(make-fake-vector-field V-over-mu n)")
    .replaceAll("(coordinate-system at 'spherical 'north-pole S2)", "(coordinate-system-at 'spherical 'north-pole S2)")
    .replaceAll("(define ((pullback-function mu:N->M) f-on-m)", "(define ((pullback-function mu:N->M) f-on-M)")
    .replaceAll("We can asume without loss of generality", "We can assume without loss of generality")
    .replaceAll("However , if", "However, if")
    .replaceAll("\\Gamma_{jk}^i = \\Gamma_{jk}^i", "\\Gamma_{jk}^i = \\Gamma_{kj}^i")
    .replaceAll("functions hat map", "functions that map")
    .replaceAll("(compose (literal-function 'f-rect R2->R) R2-rect-chi)", "(compose (literal-function 'f-rect R2->R) R2-rect-chi))")
    .replaceAll("(define R2-rect-point (R2-rect-chi-inverse (up 'x0 'y0))))", "(define R2-rect-point (R2-rect-chi-inverse (up 'x0 'y0)))")
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

  let alignedBreakCount = 0;
  const finalized = spaceMathApplications(cleaned)
    .replace(/\s+,/g, ",")
    .replace(/\)(\^\d+)sans\(/g, ")$1 sans(")
    .replace(/(\)\^\d+)(?=sans\()/g, "$1 ")
    .replace(/(\)\^[A-Za-z0-9.]+)(?=sans\()/g, "$1 ")
    .replace(/(bb|binom|sans|scale)\s+\(/g, "$1(")
    .replace(/\)(\^\d+)sans\(/g, ")$1 sans(")
    .replace(/\bsum_([A-Za-z0-9]+)\(/g, "sum_$1 (")
    .replace(/"FDGBREAK"\s*=/g, () => {
      alignedBreakCount += 1;
      return alignedBreakCount === 1 ? " &=" : "\\\n &=";
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
  "fig-2-1.pdf": "Here there are two overlapping coordinate patches that are the domains of the two coordinate functions $chi$ and $chi'$. It is possible to represent manifold points in the overlap using either coordinate system. The coordinate transformation from $chi'$ coordinates to $chi$ coordinates is just the composition $chi circle chi'^(-1)$.",
  "fig-2-2.pdf": "The coordinate function $chi$ maps points on the manifold in the coordinate patch to a tuple of coordinates. A function $f$ on the manifold $M$ can be represented in coordinates by a function $f_chi = f circle chi^(-1)$.",
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
  return `#fdg-figure(image("../assets/figures/${file}", width: ${width}), [${caption}])\n\n`;
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
    : cleanTypstOutput(execFileSync(
      "pandoc",
      ["--from=org", "--to=typst", "--wrap=none", tempInput],
      { encoding: "utf8", maxBuffer: 128 * 1024 * 1024 },
    ));

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

  const content = [
    `// Generated from ../../fdg-book/scheme/org/${file}.`,
    `// Re-run scripts/convert-org-to-typst.mjs to refresh.`,
    `#import "../lib.typ": fdg-chapter, fdg-figure, fdg-page-ref, fdg-ref-page, curl, grad, Lap, div, length, TeX, LaTeX`,
    "",
    `#fdg-chapter(${JSON.stringify(typstEscape(displayTitle))}, numbered: ${numbered}, eq-prefix: ${JSON.stringify(equationLabelPrefix(stem) ?? "0")}, ref-label: ${JSON.stringify(chapterLabel(stem) ?? "")})[`,
    bodyWithPostMathRepairs.trimEnd(),
    "]",
    "",
  ].join("\n");

  writeFileSync(path.join(contentDir, `${stem}.typ`), content);
  return { stem, title };
}

mkdirSync(contentDir, { recursive: true });
const chapters = files.map(convert);

const indexedIncludes = chapters
  .filter(({ stem }) => stem !== "errata")
  .map(({ stem }) => {
    const include = `  #include "content/${stem}.typ"`;
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

writeFileSync(
  path.join(typDir, "main.typ"),
  `// Generated by ../scripts/convert-org-to-typst.mjs.\n`
    + `// Edit typ/lib.typ for presentation; edit the converter for structural changes.\n\n`
    + `#import "lib.typ": *\n`
    + `#import "index.typ": fdg-indexed-body, fdg-index-page\n\n`
    + `#show: fdg-book\n\n`
    + `#fdg-title-page(seed: fdg-seed-bibliography-order())\n\n`
    + `#set page(numbering: "i")\n`
    + `\n`
    + `#outline(title: "Contents")\n`
    + `#pagebreak()\n\n`
    + `#fdg-indexed-body[\n`
    + `${indexedIncludes}\n`
    + `]\n\n`
    + `#set page(numbering: "1")\n`
    + `#fdg-index-page()\n\n`
    + `${errataInclude}\n`,
);

writeFileSync(path.join(typDir, "references.bib"), renderBibtex(bibliographyEntries));

writeFileSync(
  path.join(typDir, "manifest.typ"),
  `// Generated input manifest for the Scheme Org source files.\n`
    + `#let fdg-source-files = (\n`
    + chapters
      .map(({ stem, title }) => `  (file: "content/${stem}.typ", title: ${JSON.stringify(typstEscape(title))}),`)
      .join("\n")
    + `\n)\n`,
);

console.log(`Converted ${chapters.length} Org files into ${path.relative(root, contentDir)}.`);
