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

function normalizeLatexDisplayEnvironments(source, stem) {
  const labelPrefix = equationLabelPrefix(stem);
  let equationIndex = 0;

  return source.replace(
    /\\begin\{(equation\*?|align\*?)\}([\s\S]*?)\\end\{\1\}/g,
    (_match, env, math) => {
      const trimmed = math.replace(/\\label\{[^}]+\}/g, "").trim();
      const numbered = !env.endsWith("*") && labelPrefix;
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

function normalizeOrgSource(source, stem) {
  return wrapBareSchemeBlocks(normalizeDollarMath(normalizeLatexDisplayEnvironments(source, stem)))
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

  const finalized = spaceMathApplications(cleaned)
    .replace(/\s+,/g, ",")
    .replace(/\)(\^\d+)sans\(/g, ")$1 sans(")
    .replace(/(\)\^\d+)(?=sans\()/g, "$1 ")
    .replace(/(\)\^[A-Za-z0-9.]+)(?=sans\()/g, "$1 ")
    .replace(/(bb|binom|sans|scale)\s+\(/g, "$1(")
    .replace(/\)(\^\d+)sans\(/g, ")$1 sans(")
    .replace(/"FDGBREAK"\s*=/g, "\\\n &=")
    .replaceAll("\"FDGBREAK\"", "\\\n")
    .replace(
    "frac(d, d t) (frac(partial L (t\\,q\\,dot(q)), partial dot(q))|_(q=w (t) dot(q) = frac(d w (t), d t))) - frac(partial L (t\\,q\\,dot(q)), partial q)|_(q=w (t)dot(q) = frac(d w (t), d t)) = 0 .",
    "frac(d, d t) (lr(frac(partial L (t\\,q\\,dot(q)), partial dot(q))|)_(q=w (t) \\\n dot(q) = frac(d w (t), d t))) - lr(frac(partial L (t\\,q\\,dot(q)), partial q)|)_(q=w (t) \\\n dot(q) = frac(d w (t), d t)) = 0 .",
  )
    .replace(
    "frac(d, d t) (frac(partial L (t\\,q\\,dot(q)), partial dot(q))|_(q=w (t)\"FDGBREAK\" dot(q) = frac(d w (t), d t))) - frac(partial L (t\\,q\\,dot(q)), partial q)|_(q=w (t)\"FDGBREAK\" dot(q) = frac(d w (t), d t)) = 0 .",
    "frac(d, d t) (lr(frac(partial L (t\\,q\\,dot(q)), partial dot(q))|)_(q=w (t) \"FDGBREAK\" dot(q) = frac(d w (t), d t))) - lr(frac(partial L (t\\,q\\,dot(q)), partial q)|)_(q=w (t) \"FDGBREAK\" dot(q) = frac(d w (t), d t)) = 0 .",
  );

  return commaSeparateMathCallLinebreaks(finalized).replace(/\s+,/g, ",");
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
  return body.replaceAll(
    "By thinking computationally we have reformulated the Lagrange equations into a form that is explicit enough to specify a computation. We could convert it into a program for any symbolic manipulation program because it tells us #emph[how] to manipulate expressions to compute the residuals of Lagrange's equations for a purported solution path.#footnote",
    "By thinking computationally we have reformulated the Lagrange equations into a form that is explicit enough to specify a computation. We could convert it into a program for any symbolic manipulation program because it tells us #emph[how] to manipulate expressions to compute the residuals of Lagrange's equations for a purported solution path.<prologue-residuals>#footnote",
  );
}

function repairChapter2(body) {
  return body.replaceAll(
    "and the manifold function $sans(f)$ is represented in coordinates by a function $f$ that takes a pair of real numbers and produces a real number $ f : sans(R)^2 arrow.r sans(R) f :(x\\,y)arrow.r f (x\\,y). $ <2.6> We define our manifold function $ sans(f) : sans(M) arrow.r sans(R) sans(f) : sans(m) arrow.r (f compose chi) (sans(m)). $ <2.7>",
    "and the manifold function $sans(f)$ is represented in coordinates by a function $f$ that takes a pair of real numbers and produces a real number\n\n$ f : sans(R)^2 arrow.r sans(R) \\\nf :(x\\,y) arrow.r f (x\\,y). $ <2.6>\n\nWe define our manifold function\n\n$ sans(f) : sans(M) arrow.r sans(R) \\\nsans(f) : sans(m) arrow.r (f compose chi) (sans(m)). $ <2.7>",
  );
}

function repairChapter3(body) {
  return body.replace(
    /#footnote\[The analogous recovery of coefficient tuples from vector fields is equation\s+```scheme\s+\(@3\.3\):[\s\S]*?```\]/,
    "#footnote[The analogous recovery of coefficient tuples from vector fields is equation @3.3: $b^i_(chi, sans(v)) = sans(v)(chi^i) compose chi^(-1)$.]",
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

function applyChapterRepairs(stem, body) {
  if (stem === "prologue") return repairPrologue(body);
  if (stem === "chapter001") return repairChapter1(body);
  if (stem === "chapter002") return repairChapter2(body);
  if (stem === "chapter003") return repairChapter3(body);
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
    .replace(/\(((?:[A-C]|\d+)\.\d+)\)/g, "(@$1)")
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
  const bodyWithFinalRepairs = stem === "chapter003" ? repairChapter3(bodyWithPageRefs) : bodyWithPageRefs;
  const bodyWithTypstMathRepairs = normalizeTypstSubsupBraces(bodyWithFinalRepairs);

  const content = [
    `// Generated from ../../fdg-book/scheme/org/${file}.`,
    `// Re-run scripts/convert-org-to-typst.mjs to refresh.`,
    `#import "../lib.typ": fdg-chapter, fdg-figure, fdg-page-ref, fdg-ref-page, curl, grad, Lap, div, length, TeX, LaTeX`,
    "",
    `#fdg-chapter(${JSON.stringify(typstEscape(displayTitle))}, numbered: ${numbered}, eq-prefix: ${JSON.stringify(equationLabelPrefix(stem) ?? "0")}, ref-label: ${JSON.stringify(chapterLabel(stem) ?? "")})[`,
    bodyWithTypstMathRepairs.trimEnd(),
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
