#!/usr/bin/env node

import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { execFileSync } from "node:child_process";
import path from "node:path";

const root = process.cwd();
const contentDir = path.join(root, "typ", "content");
const figuresDir = path.join(root, "typ", "assets", "figures");
const orgDir = path.join(root, "fdg-book", "scheme", "org");

const convertedOrgFiles = [
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

const expectedContentFiles = convertedOrgFiles
  .map(file => file.replace(/\.org$/, ".typ"))
  .sort();

const expectedFigures = [
  "fig-2-1.pdf",
  "fig-2-2.pdf",
  "fig-2-3.pdf",
  "fig-4-1.pdf",
  "fig-4-2.pdf",
  "fig-5-1.pdf",
  "fig-6-1.pdf",
  "fig-7-1.pdf",
];

function normalize(text) {
  return text
    .replace(/\s+/g, " ")
    .trim();
}

function readContentFile(file) {
  return readFileSync(path.join(contentDir, file), "utf8");
}

function readTyp(file) {
  return normalize(readContentFile(file));
}

function readTypFile(file) {
  return readFileSync(path.join(root, "typ", file), "utf8");
}

function stripTypstProtected(text) {
  return text.replace(/```[\s\S]*?```|`[^`\n]*`|\$[^$\n]*\$/g, "");
}

function lineNumberAt(text, index) {
  return text.slice(0, index).split("\n").length;
}

function describeMatch(file, text, match) {
  return `${file}:${lineNumberAt(text, match.index)}: ${match[0].slice(0, 120)}`;
}

function matchAll(regex, text) {
  return [...text.matchAll(regex)];
}

function stripCodeAndRawSpans(text) {
  return text.replace(/```[\s\S]*?(?:```(?:\])?|$)|`[^`\n]*`|#raw\(lang:"scheme", "[^"]*"\)/g, "");
}

function stripCodeRawAndMath(text) {
  return stripCodeAndRawSpans(text).replace(/\$[\s\S]*?\$/g, "");
}

function parseBibKeys() {
  const bib = readTypFile("references.bib");
  return new Set(matchAll(/@\w+\{([^,\s]+),/g, bib).map(match => match[1]));
}

const contentFiles = readdirSync(contentDir)
  .filter(file => file.endsWith(".typ"))
  .sort();

const contentByFile = new Map(contentFiles.map(file => [file, readContentFile(file)]));

const allContent = contentFiles
  .map(file => `\n--- ${file} ---\n${contentByFile.get(file)}`)
  .join("\n");
const allContentNormalized = normalize(allContent);
const allProseContent = stripCodeRawAndMath(allContent);

const assertions = [
  {
    file: "preface.typ",
    contains: [
      "This is like trying to read Les Misérables while struggling with French grammar.",
      "#emph[Turtle Geometry] @abelson1980turtle",
      "@papert1980mindstorms",
    ],
    excludes: [
      "Les Mis´erables",
      "\\[2\\]",
      "\\[13\\]",
    ],
  },
  {
    file: "prologue.typ",
    contains: [
      "A mechanical system is described by a Lagrangian function of the system state (time, coordinates, and velocities).",
      "its derivative (also a function of time) into the coordinate and velocity arguments",
      "Note that we can flexibly manipulate representations of mathematical functions. (See Appendices @chap-appendix-a and @chap-appendix-b.)",
      "$ frac(d, d t) (lr(frac(partial L (t\\,q\\,dot(q)), partial dot(q))|)_(q=w (t) \\\n dot(q) = frac(d w (t), d t))) - lr(frac(partial L (t\\,q\\,dot(q)), partial q)|)_(q=w (t) \\\n dot(q) = frac(d w (t), d t)) = 0 . $",
      "$ (D f) (t)= frac(d, d x) f (x)|_(x=t) . $",
      "A formal description of Scheme can be obtained in @ieee1991scheme. You can get the software from @fdg-software.",
      "An informal description of Scheme can be found in Appendix @chap-appendix-a. The use of Scheme to represent mathematical objects can be found in Appendix @chap-appendix-b.",
    ],
    excludes: [
      "```scheme (time, coordinates, and velocities).",
      "```scheme (also a function of time)",
      "```scheme (See Appendices A and B.)",
      "partial dot(q))|_(q=w",
      "partial q)|_(q=w",
      "\\[10\\]",
      "\\[21\\]",
      "Appendices A and B",
      "Appendix A. The use of Scheme",
    ],
  },
  {
    file: "chapter001.typ",
    contains: [
      "Euler-Lagrange equations",
      "embedding space. (The $hat(z)$ axis goes through the North Pole, and the Equator is in the plane $z = 0$.)",
      "(define Cartan (Christoffel->Cartan (metric->Christoffel-2 the-metric (coordinate-system->basis R2-rect))))",
      "This analysis will work for any number of dimensions (but will take your computer longer in higher dimensions, because the complexity increases).",
      "$ sans(d) theta (sans(v))= dot(theta) \\\n sans(d) phi.alt (sans(v))= dot(phi.alt)\\, $",
      "```scheme\n((Lsphere 'm 'R)\n (up 't (up 'theta 'phi) (up 'thetadot 'phidot)))\n\n#|\n(+ (* 1/2 (expt R 2) m (expt phidot 2) (expt (sin theta) 2))\n   (* 1/2 (expt R 2) m (expt thetadot 2)))\n|#\n```",
      "So, to work with coordinates we write:",
      "Galileo Galilei @galilei1623assayer",
      "equation @1.1",
      "Section #fdg-ref-page(<sec-2.1>).)",
      "Appendix @chap-appendix-b",
    ],
    excludes: [
      "EulerLagrange",
      "<<Cartan>>",
      "#| Cartan |#",
      "```scheme (We know that this may be unfamiliar notation",
      "```scheme (but will take your computer longer in higher dimensions",
      "```\n#|\n(+ (* 1/2 (expt R 2) m (expt phidot 2)",
      "dot (theta)",
      "dot (phi.alt)",
      "\\[8\\]",
      "equation (1.1)",
      "Section 2.1",
      "Appendix B",
    ],
  },
  {
    file: "chapter002.typ",
    contains: [
      "== #emph[Manifold Functions Are Coordinate Independent]",
      "Given a coordinate system `coordsys` for a patch on a manifold the procedure that implements the function $chi$ that gives coordinates for a point is (`chart coordsys`).",
      "where `R2->R` is a signature for functions that map an up structure of two reals to a real:",
      "(define f (compose (literal-function 'f-rect R2->R) R2-rect-chi))",
      "(define R2-rect-point (R2-rect-chi-inverse (up 'x0 'y0)))",
      "We can work with the coordinate functions in a natural manner",
      "the 180° meridian",
      "equation $ r = 2 a (1 + cos(theta)). $",
      "formula for the cardioid $ (x^2 + y^2 - 2 a x)^2= 4 a^2 (x^2 + y^2). $",
      "(1826--1866), who made major contributions to geometry.",
    ],
    excludes: [
      "Indepenedent",
      "functions hat map",
      "(define R2-rect-point (R2-rect-chi-inverse (up 'x0 'y0))))",
      ". We can work with the coordinate functions",
      "180^compose",
      "c o s",
      "x^(+) y^2",
      "```scheme (~chart coordsys~).",
      "```scheme (1826",
    ],
  },
  {
    file: "chapter003.typ",
    contains: [
      "D (sans(f) compose (chi')^(-1)) (chi' (sans(m)))",
      "D (chi' compose chi^(-1)) (x)=(D (chi compose (chi')^(-1)) (x'))^(-1)",
      "b (x)= D (chi compose (chi')^(-1)) (x')b'(x')",
      "(D (chi compose (chi')^(-1)) (chi' (sans(m))))^(-1)",
      "The vector field is an operator that takes a real-valued manifold function and a manifold point and produces a number.",
      "== Coordinate-Basis One-Form Fields <sec-3.5>",
    ],
    excludes: [
      "chi'(sans(m)))))",
      "D (sans(f) ?(chi')",
      "chi^1",
      "^(\"\"^1)",
      "function\\$f\\$at",
    ],
  },
  {
    file: "chapter004.typ",
    contains: [
      "sum_k sans(X)_k (sans(f))sans(c)_j^k",
      "tilde(sans(e))^i (sans(v))= sum_l sans(d)_l^i tilde(sans(X))^l (sans(v))",
      "sum_k sans(d)_k^i (sans(m))\\ sans(c)_j^k (sans(m)).",
      "equations @4.29 -- @4.31",
    ],
    excludes: [
      "sum_k sans(X) (sans(f))sans(c)_j^k",
      "sum_l {sans(d)_l^i",
      "equations 4.29",
    ],
  },
  {
    file: "chapter005.typ",
    contains: [
      "and $sans(v) = sans(v)^0 partial\\/partial sans(x) + sans(v)^1 partial\\/partial sans(y),$ which is given by",
      "$sans(A) = sans(d) sans(x) \"∧\" sans(d) sans(y).$",
      "Here we extract $sans(d) sans(x)$ and $sans(d) sans(y)$ from #raw(lang:\"scheme\", \"R2-rect-basis\")",
    ],
    excludes: [
      "$v = v^{0}{∂}/{∂x} + v^{1}{∂}/{∂y},$",
      "$A = dx ∧ dy.$",
      "Here we extract $sans(d)$sans(x)$",
    ],
  },
  {
    file: "chapter006.typ",
    contains: [
      "Let $μ$ be a map from points $sans(n)$ in the manifold $sans(N)$ to points $sans(m)$ in the manifold $sans(M)$.",
      "at points $sans(m) = mu (sans(n))$.",
      "$ sans(v)_mu (sans(f))= sans(v) (sans(f))compose mu\\, $ <6.1>",
      "Note that $sans(v)_mu (sans(f))$ is a function on $sans(N)$, not $sans(M)$:",
      "$ sans(v)_mu (sans(f)) (sans(n))= sans(v) (sans(f)) (mu (sans(n))). $ <6.2>",
      "only value that is ever passed as `m` is `(mu:N->M n)`.",
      "If we were defining $sans(u)$ as a vector field we would need the inverse of $μ$",
    ],
    excludes: [
      "Let μ be a map",
      "$mathsf{N}$",
      "$sans(m) = mu (sans(n). The",
      "sans(v)_mu(sans(f))",
      "only value that is ever passed as m is (mu:N-\\>M n).",
      "inverse of μ",
      "mathsf{u]",
    ],
  },
  {
    file: "chapter007.typ",
    contains: [
      "(cal(D)_(sans(v)) sans(f))sans(g) .",
      "Introduce $B$ to make the dependence of $A$s on $sans(v)$ explicit:",
      "$ A_j^i (delta)= B_j^i (sans(v)) (delta). $",
      "equations @7.18 - @7.21",
      "@sussman2001sicm, section 1.6.3",
      "See Appendix @chap-appendix-c",
    ],
    excludes: [
      "sans(g .)",
      "\\$A\\$s",
      "equations 7.18",
      "\\[19\\]",
      "See Appendix C",
    ],
  },
  {
    file: "chapter008.typ",
    contains: [
      "$ cal(R) (bold(omega)\\,sans(u)\\,sans(v)\\,sans(w)) =\\\n bold(omega) ((cal(R) (sans(w) \\, sans(v))) (sans(u)))\\, $",
      "This computes the same operator as the traditional Riemann curvature operator:",
    ],
    excludes: [
      ")bold(omega)",
      "cal(R) (bold(omega)\\,sans(u)\\,sans(v)\\,sans(w))bold(omega)",
    ],
  },
  {
    file: "chapter009.typ",
    contains: [
      "The Lagrange equations are $upright(bold(E))[L]compose Gamma[q]= 0$.",
      "$ bold(E)[L_2]= D_t partial_2 L_2 - partial_1 L_2\\, $",
      "Section @sec-7.4",
    ],
    excludes: [
      "$upright(bold(E))$[L]",
      "\\$#strong[E]\\$",
      "Section 7.4",
    ],
  },
  {
    file: "chapter011.typ",
    contains: [
      "By analogy, Einstein noticed that Maxwell\\'s equations were inconsistent with Galilean relativity.",
      "$ curl arrow(B) = frac(4 pi, c) arrow(I). $",
      "$ curl arrow(B) = frac(4 pi, c) arrow(I). $ <11.3>",
      "$ Lap arrow(E) - frac(1, c^2) frac(partial^2 arrow(E), partial t^2) = 4 pi lr(grad rho + frac(1, c^2) arrow(I)). $",
      "$ frac(partial^2 phi.alt (u), partial x^2) + frac(partial^2 phi.alt (u), partial y^2) + frac(partial^2 phi.alt (u), partial z^2) - frac(1, c^2) frac(partial^2 phi.alt (u), partial t^2) = 0. $",
      "$ length_u (xi) = sqrt((Delta x)^2 + (Delta y)^2 + (Delta z)^2 - (c Delta t)^2), $",
      "$ f (xi)= -(xi^0)^2+(xi^1)^2+(xi^2)^2+(xi^3)^2\\, $",
      "$ xi^0 = p (xi')^0 + q (xi')^1 \\\\\nxi^1 = r (xi')^0 + s (xi')^1. $",
      "the origin of the primed system moves with velocity $v = beta c$ along the $hat(x)$-axis",
      "where $beta = norm(bold(beta))$, the magnitude of $bold(beta)$, and",
      "(make-4tuple (* gamma (+ xi-p-time beta-dot-xi-p))",
      "Note that $(cal(R) (R))^(-1) = cal(R) (R^(-1))$.",
    ],
    excludes: [
      "Einsten",
      "(xi^2)^2+(xi^2)^2",
      "xi^1 = r (xi')^0+ s (xi')^1. $",
      "bar.v.double",
      "make-4-tuple",
      "R^(= 1)",
      "v = βc along the ˆx-axis",
      "\\<11.1\\>",
      "$ \"curl\"",
      "$ \"grad\"",
      "$ \"Lap\"",
      "$ \"length\"",
    ],
  },
  {
    file: "appendix_a.typ",
    contains: [
      "Given conditionals and definitions, we can write recursive procedures. For example, to compute the $n$th factorial number we may write:",
    ],
    excludes: [
      "\\$n\\$th",
    ],
  },
  {
    file: "appendix_b.typ",
    contains: [
      "A component of an up tuple is usually identified by a superscript.",
      "$ p v = p_0 v^0 + p_1 v^1 + p_2 v^2 . $ <B.8>",
      "Higher-order derivatives are described by exponentiating the derivative operator. Thus the $n$th derivative of a function $f$ is notated as $D^n f$.",
      "using #TeX, and then these decorations turn into superscripts and subscripts.",
      "equations @B.4 and @B.5",
    ],
    excludes: [
      "\\$n\\$th",
      "\\TeX",
      "equations (B.4)",
    ],
  },
  {
    file: "references.typ",
    contains: [
      "#bibliography(\"../references.bib\", title: none, full: true, style: \"ieee\")",
    ],
    excludes: [
      "#fdg-chapter(\"References\", numbered: false, eq-prefix: \"0\")[ ]",
      "\\[1\\] Harold Abelson",
    ],
  },
];

const typFileAssertions = [
  {
    file: "lib.typ",
    contains: [
      '#import "fdg-lib/basics.typ": *',
      '#import "fdg-lib/layout.typ": *',
      '#import "fdg-lib/chapter.typ": *',
    ],
  },
  {
    file: "fdg-lib/layout.typ",
    contains: [
      "syntaxes: \"../Scheme.sublime-syntax\"",
      "theme: \"../fdg-scheme.tmTheme\"",
      "tab-size: 2",
      "show raw.where(block: false): it =>",
      "show raw.where(block: true): it =>",
    ],
  },
  {
    file: "fdg-lib/refs.typ",
    contains: [
      '#let fdg-page-ref(target) = ref(target, supplement: "page", form: "page")',
      "#let fdg-ref(target) = ref(target)",
    ],
  },
  {
    file: "Scheme.sublime-syntax",
    contains: [
      "name: Scheme",
      "scope: source.scheme",
      "scope: keyword.declaration.scheme",
      "scope: support.function.scheme",
      "scope: meta.comment.expression.scheme",
    ],
  },
  {
    file: "fdg-scheme.tmTheme",
    contains: [
      "<string>FDG Scheme Light</string>",
      "<string>meta.comment.expression, meta.comment.eof, meta.comment</string>",
      "<string>keyword.syntax, keyword.quasisyntax, keyword.unsyntax, keyword.unsyntax-splicing, keyword.control.syntax, meta.syntax, meta.quasisyntax, meta.unsyntax, meta.unsyntax-splicing</string>",
      "<string>support.function.scheme, primitive.function.scheme</string>",
      "<string>entity.name.function.scheme, meta.named-let.scheme entity.name.function.scheme</string>",
      "<string>symbol.quoted.scheme, constant.symbol.literal.scheme</string>",
    ],
  },
  {
    file: "references.bib",
    contains: [
      "@book{abelson1996sicp,",
      "  title = {Structure and Interpretation of Computer Programs},",
      "@book{misner1973gravitation,",
      "  title = {Gravitation},",
      "@misc{fdg-software,",
      "  url = {https://groups.csail.mit.edu/mac/users/gjs/6946/linux-install.htm},",
    ],
  },
];

const globalExcludes = [
  "\\$",
  "[fn:",
  "#block[",
  "lang:\"verbatim\"",
  "zws",
  "eq.not",
  "dots.h",
  "m a t h s f",
  "$mathsf",
  "?(",
  "mathsf{u]",
  "mathsf{w]",
  "g^{ij{",
  "M_{i}}",
  "\\rime",
  "times.circle",
  "chi'(sans(m)))))",
  "sans(g .)",
  "Les Mis´erables",
  "Indepenedent",
  "functions hat map",
  "EulerLagrange",
  "<<Cartan>>",
  "180^compose",
  "c o s",
  "x^(+) y^2",
  "$A = dx ∧ dy.$",
  "$v = v^{0}{∂}/{∂x}",
  ")bold(omega)",
  "Einsten",
  "bar.v.double",
  "make-4-tuple",
  "R^(= 1)",
  "$ \"curl\"",
  "$ \"grad\"",
  "$ \"Lap\"",
  "$ \"length\"",
  "<eq:op-transform>",
  "dot (",
  "Section 2.1",
  "Section 7.4",
  "section 9.3",
  "See Appendix C",
  "Appendices A and B",
  "bb (",
  "binom (",
  "sans (",
  "scale (",
  "FDGBREAK",
  "\\operatorname{FDGBREAK}",
  "_(m i n)",
  "_(m a x)",
  "make-fake-vector-field counterfeits",
  "from R2-rect-basis",
  "with S2-Riemann",
  "The s:map/r procedure",
  "operator (F-Lie phi)",
  "F-\\>directional-derivative",
  "give covariant-derivative an extra argument",
];

const globalRegexExcludes = [
  {
    name: "empty display math",
    regex: /^\$\s*\$/m,
  },
  {
    name: "cached result placeholder code block",
    regex: /```(?:scheme)?\s*#\| [^|\n]+ \|#\s*```/,
  },
  {
    name: "unlabelled result comment block split from Scheme block",
    regex: /```\s*#\|/,
  },
  {
    name: "prose parenthetical trapped in Scheme block",
    regex: /```scheme\s+\((?:time|also|The|We know|See|but will|and perhaps|formerly)\b/,
  },
  {
    name: "double-labelled equation",
    regex: /<[^>\n]+>\s+<[A-Z0-9]+\.\d+>/,
  },
  {
    name: "escaped equation label",
    regex: /\\<[A-Z0-9]+\.\d+\\>/,
  },
  {
    name: "escaped numeric citation",
    regex: /\\\[(?:[1-9]|1\d|2[01])\\\]/,
  },
  {
    name: "plain parenthesized equation reference",
    regex: /\b[Ee]quations?\s+\((?:[A-C]|\d+)\.\d+/,
  },
  {
    name: "subscripted parenthesized expression applied without spacing",
    regex: /\)_[A-Za-z0-9.]+\(/,
  },
  {
    name: "parenthesized subscript applied without spacing",
    regex: /\)_\([^)]*\)\(/,
  },
  {
    name: "superscripted parenthesized expression applied without spacing",
    regex: /\)\^[A-Za-z0-9.]+\(/,
  },
  {
    name: "LaTeX-style Typst subscript or superscript braces",
    regex: /[\^_]\{[^{}\n]+\}/,
  },
  {
    name: "primed parenthesized expression applied without spacing",
    regex: /\)'(?:_[A-Za-z0-9.]+)?\(/,
  },
  {
    name: "primed symbol applied without spacing",
    regex: /\b[A-Za-z][A-Za-z0-9.]+'(?:_[A-Za-z0-9.]+)?\(/,
  },
];

const globalProseRegexExcludes = [
  {
    name: "bare standalone Greek symbol in prose",
    regex: /(^|[^\p{L}\p{N}_$])\p{Script=Greek}s?(?=$|[^\p{L}\p{N}_])/u,
  },
];

const pdfTextAssertions = [
  {
    file: "main.pdf",
    contains: [
      "An explanation of functional derivatives is in Appendix B, page",
      "See Appendix B for an introduction to tuple arithmetic",
      "See Appendix C for a definition of tensors.",
      "A Scheme",
      "A.1 Procedure Calls",
      "B Our Notation",
      "References",
    ],
    excludes: [
      "Appendix B , page",
      "Appendix C: References",
      "Appendix Appendix",
      "See Appendix 14",
    ],
  },
];

let failures = 0;

function fail(message, detail) {
  failures += 1;
  console.error(message);
  if (detail) console.error(`  ${detail}`);
}

function readPdfText(file) {
  const pdfPath = path.join(root, "typ", file);
  if (!existsSync(pdfPath)) {
    fail(`Missing PDF for text regression checks: typ/${file}`);
    return "";
  }

  try {
    return normalize(execFileSync("pdftotext", [pdfPath, "-"], {
      encoding: "utf8",
      maxBuffer: 128 * 1024 * 1024,
    }));
  } catch (error) {
    fail(
      `Unable to extract PDF text from typ/${file}:`,
      error instanceof Error ? error.message : String(error),
    );
    return "";
  }
}

for (const assertion of assertions) {
  const text = readTyp(assertion.file);

  for (const expected of assertion.contains ?? []) {
    if (!text.includes(normalize(expected))) {
      fail(`Missing expected text in ${assertion.file}:`, expected);
    }
  }

  for (const rejected of assertion.excludes ?? []) {
    if (text.includes(normalize(rejected))) {
      fail(`Found rejected text in ${assertion.file}:`, rejected);
    }
  }
}

for (const assertion of typFileAssertions) {
  const text = normalize(readTypFile(assertion.file));

  for (const expected of assertion.contains ?? []) {
    if (!text.includes(normalize(expected))) {
      fail(`Missing expected text in typ/${assertion.file}:`, expected);
    }
  }

  for (const rejected of assertion.excludes ?? []) {
    if (text.includes(normalize(rejected))) {
      fail(`Found rejected text in typ/${assertion.file}:`, rejected);
    }
  }
}

for (const assertion of pdfTextAssertions) {
  const text = readPdfText(assertion.file);

  for (const expected of assertion.contains ?? []) {
    if (!text.includes(normalize(expected))) {
      fail(`Missing expected text in typ/${assertion.file}:`, expected);
    }
  }

  for (const rejected of assertion.excludes ?? []) {
    if (text.includes(normalize(rejected))) {
      fail(`Found rejected text in typ/${assertion.file}:`, rejected);
    }
  }
}

for (const rejected of globalExcludes) {
  if (allContentNormalized.includes(normalize(rejected))) {
    fail("Found globally rejected text:", rejected);
  }
}

for (const { name, regex } of globalRegexExcludes) {
  if (regex.test(allContent)) {
    fail(`Found globally rejected pattern: ${name}`, regex.toString());
  }
}

for (const { name, regex } of globalProseRegexExcludes) {
  if (regex.test(allProseContent)) {
    fail(`Found globally rejected prose pattern: ${name}`, regex.toString());
  }
}

const expectedSet = new Set(expectedContentFiles);
const actualSet = new Set(contentFiles);
for (const file of expectedContentFiles) {
  if (!actualSet.has(file)) fail("Missing generated content file:", file);
}
for (const file of contentFiles) {
  if (!expectedSet.has(file)) fail("Unexpected generated content file:", file);
}
for (const file of convertedOrgFiles) {
  if (!existsSync(path.join(orgDir, file))) {
    fail("Configured Org input does not exist:", file);
  }
}

for (const file of contentFiles) {
  const text = contentByFile.get(file);
  const stem = file.replace(/\.typ$/, "");
  const expectedSource = `// Generated from ../../fdg-book/scheme/org/${stem}.org.`;
  if (!text.startsWith(expectedSource)) {
    fail(`Generated source header mismatch in ${file}:`, expectedSource);
  }
  if (!text.includes("// Re-run scripts/convert-org-to-typst.mjs to refresh.")) {
    fail(`Missing regeneration header in ${file}`);
  }
  const importLine = '#import "../lib.typ": fdg-chapter, fdg-figure, fdg-page-ref, fdg-ref-page, curl, grad, Lap, div, length, TeX, LaTeX';
  if (!text.includes(importLine)) {
    fail(`Missing standard content import in ${file}`);
  }
  const chapterCalls = matchAll(/#fdg-chapter\(/g, text);
  if (chapterCalls.length !== 1) {
    fail(`Expected exactly one fdg-chapter call in ${file}:`, String(chapterCalls.length));
  }
  if (!text.trimEnd().endsWith("]")) {
    fail(`Generated content file does not end with closing chapter bracket: ${file}`);
  }
}

const codeBlockHazards = [
  { name: "Org footnote marker in Scheme block", regex: /\[fn:/ },
  { name: "Org directive in Scheme block", regex: /^#\+/m },
  { name: "LaTeX environment in Scheme block", regex: /\\(?:begin|end)\{/ },
  { name: "Typst raw call inside Scheme block", regex: /#raw\(/ },
  { name: "Typst figure call inside Scheme block", regex: /#fdg-figure|#figure/ },
  { name: "TODO marker in Scheme block", regex: /\b(?:TODO|MISSING|FIXME)\b/ },
];

for (const file of contentFiles) {
  const text = contentByFile.get(file);
  const lines = text.split("\n");
  let inBlock = false;
  let startLine = 0;
  let block = [];

  lines.forEach((line, index) => {
    const lineNo = index + 1;
    if (!inBlock) {
      if (line.startsWith("```scheme")) {
        if (line !== "```scheme") {
          fail(`Scheme block opener has trailing content in ${file}:${lineNo}`, line);
        }
        inBlock = true;
        startLine = lineNo;
        block = [];
      } else if (line.startsWith("```")) {
        fail(`Non-Scheme raw block opener in ${file}:${lineNo}`, line);
      }
      return;
    }

    if (/^```(?:\].*)?$/.test(line)) {
      const blockText = block.join("\n");
      for (const { name, regex } of codeBlockHazards) {
        if (regex.test(blockText)) {
          fail(`Found ${name} in Scheme block starting ${file}:${startLine}`, regex.toString());
        }
      }
      inBlock = false;
      return;
    }

    block.push(line);
  });

  if (inBlock) {
    fail(`Unclosed Scheme block in ${file}:${startLine}`);
  }
}

for (const file of contentFiles) {
  const text = contentByFile.get(file);
  const unprotected = stripCodeAndRawSpans(text);
  const dollars = matchAll(/(?<!\\)\$/g, unprotected);
  if (dollars.length % 2 !== 0) {
    fail(`Unbalanced Typst math dollars in ${file}:`, String(dollars.length));
  }
  for (const match of matchAll(/#raw\((?!lang:"scheme")/g, text)) {
    fail("Raw span missing Scheme language:", describeMatch(file, text, match));
  }
}

const expectedMathLineBreaks = [
  { file: "chapter005.typ", label: "5.2", minBreaks: 2, minAlignedEquals: 2 },
  { file: "chapter005.typ", label: "5.4", minBreaks: 5, minAlignedEquals: 5 },
  { file: "chapter005.typ", label: "5.10", minBreaks: 2, minAlignedEquals: 2 },
  { file: "chapter005.typ", label: "5.24", minBreaks: 2, minAlignedEquals: 1 },
  { file: "chapter005.typ", label: "5.30", minBreaks: 3, minAlignedEquals: 3 },
  { file: "chapter005.typ", label: "5.34", minBreaks: 4, minAlignedEquals: 4 },
  { file: "chapter007.typ", label: "7.41", minBreaks: 1 },
];

for (const { file, label, minBreaks, minAlignedEquals = 0 } of expectedMathLineBreaks) {
  const text = contentByFile.get(file);
  const match = text.match(new RegExp(`\\$([\\s\\S]*?)\\$ <${label.replace(".", "\\.")}>`));
  if (!match) {
    fail(`Missing expected math display ${label} in ${file}`);
    continue;
  }
  const breaks = matchAll(/\\\n/g, match[1]).length;
  if (breaks < minBreaks) {
    fail(`Math display ${label} lost source line breaks in ${file}:`, `${breaks} found, expected at least ${minBreaks}`);
  }
  const alignedEquals = matchAll(/\\\n\s*&=/g, match[1]).length;
  if (alignedEquals < minAlignedEquals) {
    fail(`Math display ${label} lost aligned equals in ${file}:`, `${alignedEquals} found, expected at least ${minAlignedEquals}`);
  }
}

function findMathCallLinebreaks(math, names = new Set(["mat", "vec"])) {
  const offenders = [];

  for (let index = 0; index < math.length;) {
    const call = math.slice(index).match(/^([A-Za-z][A-Za-z0-9.]*)\(/);
    if (!call || !names.has(call[1])) {
      index += 1;
      continue;
    }

    const name = call[1];
    const openIndex = index + name.length;
    let depth = 0;
    let closeIndex = -1;

    for (let cursor = openIndex; cursor < math.length; cursor += 1) {
      if (math[cursor] === "(") depth += 1;
      if (math[cursor] === ")") {
        depth -= 1;
        if (depth === 0) {
          closeIndex = cursor;
          break;
        }
      }
    }

    if (closeIndex === -1) {
      index += 1;
      continue;
    }

    const callText = math.slice(index, closeIndex + 1);
    if (/\\\n/.test(callText)) offenders.push(callText.slice(0, 120));
    offenders.push(...findMathCallLinebreaks(math.slice(openIndex + 1, closeIndex), names));
    index = closeIndex + 1;
  }

  return offenders;
}

for (const file of contentFiles) {
  const text = contentByFile.get(file);
  for (const match of matchAll(/\$([\s\S]*?)\$/g, text)) {
    for (const offender of findMathCallLinebreaks(match[1])) {
      fail(`Found ignored linebreak inside vec/mat in ${file}:`, offender);
    }
  }
}

const figureUses = [];
for (const file of contentFiles) {
  const text = contentByFile.get(file);
  for (const match of matchAll(/#fdg-figure\(image\("\.\.\/assets\/figures\/([^"]+)", width: ([^)]+)\), \[([\s\S]*?)\]\)/g, text)) {
    figureUses.push({ file, asset: match[1], width: match[2], caption: match[3] });
  }
  for (const match of matchAll(/#align\(center\)\[#image|#figure\(image\("\.\.\/assets\/figures\//g, text)) {
    fail("Found legacy figure/image insertion:", describeMatch(file, text, match));
  }
}

for (const asset of expectedFigures) {
  const uses = figureUses.filter(use => use.asset === asset);
  if (uses.length !== 1) {
    fail(`Expected exactly one use of ${asset}:`, String(uses.length));
  }
  const assetPath = path.join(figuresDir, asset);
  if (!existsSync(assetPath)) {
    fail("Missing cropped figure asset:", asset);
  } else if (statSync(assetPath).size < 10_000) {
    fail("Cropped figure asset is suspiciously small:", `${asset} (${statSync(assetPath).size} bytes)`);
  }
}
for (const use of figureUses) {
  if (!expectedFigures.includes(use.asset)) {
    fail("Unexpected figure asset used:", `${use.file}: ${use.asset}`);
  }
  if (use.width !== "49.2%") {
    fail("Unexpected figure width:", `${use.file}: ${use.asset} width ${use.width}`);
  }
  if (!use.caption.trim()) {
    fail("Empty figure caption:", `${use.file}: ${use.asset}`);
  }
  if (/^Figure\s+\d/.test(use.caption.trim())) {
    fail("Figure caption includes its own number:", `${use.file}: ${use.asset}`);
  }
}

const bibKeys = parseBibKeys();
const definedLabels = new Set();
const definedLabelLocations = new Map();
for (const file of contentFiles) {
  const text = contentByFile.get(file);
  for (const match of matchAll(/(?<!\()<([A-Za-z0-9_.-]+)>/g, text)) {
    const label = match[1];
    const lineStart = text.lastIndexOf("\n", match.index) + 1;
    const beforeMatchOnLine = text.slice(lineStart, match.index);
    if (/#(?:fdg-page-ref|fdg-ref|fdg-ref-page)\([^)]*$/.test(beforeMatchOnLine)) continue;
    const location = describeMatch(file, text, match);
    if (definedLabelLocations.has(label)) {
      fail("Duplicate Typst label:", `${label}\n  first: ${definedLabelLocations.get(label)}\n  again: ${location}`);
    }
    definedLabels.add(label);
    definedLabelLocations.set(label, location);
  }
  for (const match of matchAll(/ref-label: "([^"]+)"/g, text)) {
    const label = match[1];
    if (label === "") continue;
    const location = describeMatch(file, text, match);
    if (definedLabelLocations.has(label)) {
      fail("Duplicate Typst label:", `${label}\n  first: ${definedLabelLocations.get(label)}\n  again: ${location}`);
    }
    definedLabels.add(label);
    definedLabelLocations.set(label, location);
  }
}

for (const file of contentFiles) {
  const text = stripCodeAndRawSpans(contentByFile.get(file));
  for (const match of matchAll(/#(?:fdg-page-ref|fdg-ref|fdg-ref-page)\(<([A-Za-z0-9_.-]+)>/g, text)) {
    if (!definedLabels.has(match[1])) {
      fail("Reference helper targets missing label:", describeMatch(file, text, match));
    }
  }
  for (const match of matchAll(/@([A-Za-z0-9](?:[A-Za-z0-9_.-]*[A-Za-z0-9])?)/g, text)) {
    const key = match[1];
    if (!definedLabels.has(key) && !bibKeys.has(key)) {
      fail("Typst reference/citation has no matching label or bibliography key:", describeMatch(file, text, match));
    }
  }
}

if (failures > 0) {
  console.error(`\n${failures} Typst regression assertion(s) failed.`);
  process.exit(1);
}

console.log(
  `Typst regression assertions passed (` +
    [
      `targeted files: ${assertions.length}`,
      `PDF text files: ${pdfTextAssertions.length}`,
      `generated files: ${contentFiles.length}`,
      `global checks: ${globalExcludes.length + globalRegexExcludes.length + globalProseRegexExcludes.length}`,
      `figures: ${figureUses.length}`,
      `labels: ${definedLabels.size}`,
      `bibliography keys: ${bibKeys.size}`,
    ].join(", ") +
    ").",
);
