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

function typstMarkupEscape(text) {
  return text
    .replaceAll("\\", "\\\\")
    .replaceAll("[", "\\[")
    .replaceAll("]", "\\]")
    .replaceAll("$", "\\$")
    .replaceAll("#", "\\#");
}

function escapeRegex(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function chapterDisplayTitle(title) {
  return title.replace(/^Chapter\s+\d+:\s*/, "");
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

function normalizeDollarMath(source) {
  return source.replace(/\$\$([\s\S]*?)\$\$/g, (_match, math) => {
    const normalized = math
      .replace(/\\begin\{(?:aligned|split)\}/g, "")
      .replace(/\\end\{(?:aligned|split)\}/g, "")
      .replace(/\\nonumber/g, "")
      .replace(/&/g, "")
      .replace(/\\\\\s*/g, " ")
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
    .replace(/(\)|\])(?=\()/g, "$1 ");
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
    .replace(/_\(([^)]*?)\s*=\s*([^)]*?)\)/g, "_($1=$2)")
    .replace(
      "cal(R) (bold(omega)\\,sans(u)\\,sans(v)\\,sans(w))bold(omega)",
      "cal(R) (bold(omega)\\,sans(u)\\,sans(v)\\,sans(w)) = bold(omega)",
    )
    .replace(/\)\s*!=/g, ") !=")
    .replace(/\)\s*equiv/g, ") \"≡\"")
    .replace(/\s+=\s+/g, " = ");

  cleaned = cleaned.replace(
    /^\s*\(D f\)\(t\)\s*=\s*frac\(d, d x\)\s*f\(x\)\|_\(x=t\)\s*\.\s*$/,
    " lr( (D f)(t) = frac(d, d x) f(x) |)_(x=t) ",
  );

  return spaceMathApplications(cleaned).replace(
    "frac(d, d t) (frac(partial L (t\\,q\\,dot(q)), partial dot(q))|_(q=w (t) dot(q) = frac(d w (t), d t))) - frac(partial L (t\\,q\\,dot(q)), partial q)|_(q=w (t)dot(q) = frac(d w (t), d t)) = 0 .",
    "frac(d, d t) (lr(frac(partial L (t\\,q\\,dot(q)), partial dot(q))|)_(q=w (t) \\\n dot(q) = frac(d w (t), d t))) - lr(frac(partial L (t\\,q\\,dot(q)), partial q)|)_(q=w (t) \\\n dot(q) = frac(d w (t), d t)) = 0 .",
  );
}

function cleanTypstOutput(body) {
  return body.replace(/\\\$([^$\n]+?)\\\$/g, (_match, math) => {
    return `$${cleanTypstMath(math)}$`;
  })
    .replace(/(?<!\\)\$([^$\n]+?)(?<!\\)\$/g, (_match, math) => {
    return `$${cleanTypstMath(math)}$`;
  })
    .replace(/^=== ([a-z])\.\n/gm, "#strong[$1.]\n")
    .replace(/^== Metric Music\n/gm, "#heading(level: 2, numbering: none)[Metric Music]\n")
    .replace(/^#block\[\n([\s\S]*?)^\]\n?/gm, (_match, inner) => `${inner.trimEnd()}\n`)
    .replace(/^\$\s*\$\n?/gm, "")
    .replace(/```(?:scheme)?\n#\| [^|\n]+ \|#\n```\n?/g, "")
    .replaceAll(
      "```scheme\n<<Cartan>>\n```",
      "```scheme\n(define Cartan\n  (Christoffel->Cartan\n   (metric->Christoffel-2 the-metric\n         (coordinate-system->basis R2-rect))))\n```",
    )
    .replace(/\\#\|\n\n```scheme\n([\s\S]*?)\n\|#\n```\n?/g, "```scheme\n$1\n```\n")
    .replace(/(```scheme\n[\s\S]*?\n```)/g, block => block.replaceAll("’", "'"))
    .replace(/`([^`\n]+)`/g, (_match, code) => `\`${code.replaceAll("’", "'")}\``)
    .replace(/\\<([A-Z0-9]+\.\d+)\\>/g, "<$1>")
    .replaceAll("Les Mis´erables", "Les Misérables")
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
    .replace(/\)\s*!=/g, ") !=")
    .replace(/\)\s*equiv/g, ") \"≡\"")
    .replaceAll("dots.h.c", "dots.c")
    .replaceAll("dots.h", "dots")
    .replaceAll("^komega", "^k omega")
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
    .replace(/(#scale\([^)]*\)\[[^\]]+\])\(/g, "$1 (");
}

function figurePdf(file, width = "92%") {
  return `#align(center)[#image("../assets/figures/${file}", width: ${width})]`;
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
  if (stem === "chapter009") return repairChapter9(body);
  if (stem === "chapter011") return repairChapter11(body);
  return body;
}

function renderReferenceInline(text) {
  const tokens = /(\[\[([^\]]+)\]\]|\/([^/]+)\/)/g;
  let output = "";
  let offset = 0;

  for (const match of text.matchAll(tokens)) {
    output += typstMarkupEscape(text.slice(offset, match.index));
    if (match[2]) {
      const url = match[2];
      output += `#link(${JSON.stringify(url)})[${typstMarkupEscape(url)}]`;
    } else {
      output += `#emph[${typstMarkupEscape(match[3])}]`;
    }
    offset = match.index + match[0].length;
  }

  return output + typstMarkupEscape(text.slice(offset));
}

function convertReferencesOrg(source) {
  const body = source
    .split("\n")
    .filter(line => !line.startsWith("#+"))
    .join("\n");
  const entries = [];
  const starts = [...body.matchAll(/^\[(\d+)\]\s+/gm)];

  for (let index = 0; index < starts.length; index += 1) {
    const match = starts[index];
    const next = starts[index + 1];
    const number = match[1];
    const start = match.index + match[0].length;
    const end = next?.index ?? body.length;
    const text = body.slice(start, end).replace(/\s+/g, " ").trim();
    entries.push(`\\[${number}\\] ${renderReferenceInline(text)}`);
  }

  return entries.join("\n\n");
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
    ? convertReferencesOrg(originalSource)
    : cleanTypstOutput(execFileSync(
      "pandoc",
      ["--from=org", "--to=typst", "--wrap=none", tempInput],
      { encoding: "utf8", maxBuffer: 128 * 1024 * 1024 },
    ));

  const title = readTitle(file);
  const displayTitle = chapterDisplayTitle(title);
  const numbered = isNumberedChapter(title, stem);
  const bodyWithoutLabels = body
    .replace(/^<[A-Za-z0-9_.:-]+>\n/gm, "")
    .replace(/^= Footnotes\n/gm, "");
  const bodyWithoutDuplicateTitle = bodyWithoutLabels.replace(
    new RegExp(`^= ${escapeRegex(title)}\\n+`),
    "",
  );
  const bodyWithFigures = insertFigurePdfs(stem, bodyWithoutDuplicateTitle);
  const bodyWithChapterRepairs = applyChapterRepairs(stem, bodyWithFigures);

  const content = [
    `// Generated from ../../fdg-book/scheme/org/${file}.`,
    `// Re-run scripts/convert-org-to-typst.mjs to refresh.`,
    `#import "../lib.typ": fdg-chapter, curl, grad, Lap, div, length`,
    "",
    `#fdg-chapter(${JSON.stringify(typstEscape(displayTitle))}, numbered: ${numbered}, eq-prefix: ${JSON.stringify(equationLabelPrefix(stem) ?? "0")})[`,
    bodyWithChapterRepairs.trimEnd(),
    "]",
    "",
  ].join("\n");

  writeFileSync(path.join(contentDir, `${stem}.typ`), content);
  return { stem, title };
}

mkdirSync(contentDir, { recursive: true });
const chapters = files.map(convert);

const includes = chapters
  .map(({ stem }) => `#include "content/${stem}.typ"`)
  .join("\n");

writeFileSync(
  path.join(typDir, "main.typ"),
  `// Generated by ../scripts/convert-org-to-typst.mjs.\n`
    + `// Edit typ/lib.typ for presentation; edit the converter for structural changes.\n\n`
    + `#import "lib.typ": *\n\n`
    + `#show: fdg-book\n\n`
    + `#fdg-title-page()\n\n`
    + `#outline(title: "Contents")\n`
    + `#pagebreak()\n\n`
    + `${includes}\n`,
);

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
