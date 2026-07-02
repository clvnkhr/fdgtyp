#!/usr/bin/env node

import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const contentDir = path.join(root, "typ", "content");

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

const contentFiles = readdirSync(contentDir)
  .filter(file => file.endsWith(".typ"))
  .sort();

const allContent = contentFiles
  .map(file => `\n--- ${file} ---\n${readContentFile(file)}`)
  .join("\n");
const allContentNormalized = normalize(allContent);

const assertions = [
  {
    file: "preface.typ",
    contains: [
      "This is like trying to read Les Misérables while struggling with French grammar.",
    ],
    excludes: [
      "Les Mis´erables",
    ],
  },
  {
    file: "prologue.typ",
    contains: [
      "A mechanical system is described by a Lagrangian function of the system state (time, coordinates, and velocities).",
      "its derivative (also a function of time) into the coordinate and velocity arguments",
      "Note that we can flexibly manipulate representations of mathematical functions. (See Appendices A and B.)",
      "$ (D f) (t)= frac(d, d x) f (x)|_(x=t) . $",
    ],
    excludes: [
      "```scheme (time, coordinates, and velocities).",
      "```scheme (also a function of time)",
      "```scheme (See Appendices A and B.)",
    ],
  },
  {
    file: "chapter001.typ",
    contains: [
      "Euler-Lagrange equations",
      "embedding space. (The $hat(z)$ axis goes through the North Pole, and the Equator is in the plane $z = 0$.)",
      "(define Cartan (Christoffel->Cartan (metric->Christoffel-2 the-metric (coordinate-system->basis R2-rect))))",
      "This analysis will work for any number of dimensions (but will take your computer longer in higher dimensions, because the complexity increases).",
    ],
    excludes: [
      "EulerLagrange",
      "<<Cartan>>",
      "#| Cartan |#",
      "```scheme (We know that this may be unfamiliar notation",
      "```scheme (but will take your computer longer in higher dimensions",
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
      "D (sans(f) compose (chi')^(-1)) (chi'(sans(m)))",
      "D (chi' compose chi^(-1)) (x)=(D (chi compose (chi')^(-1)) (x'))^(-1)",
      "b (x)= D (chi compose (chi')^(-1)) (x')b'(x')",
      "(D (chi compose (chi')^(-1)) (chi'(sans(m))))^(-1)",
      "The vector field is an operator that takes a real-valued manifold function and a manifold point and produces a number.",
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
      "sum_k sans(X)_k(sans(f))sans(c)_j^k",
      "tilde(sans(e))^i (sans(v))= sum_l sans(d)_l^i tilde(sans(X))^l (sans(v))",
      "sum_k sans(d)_k^i (sans(m))sans(c)_j^k (sans(m)).",
    ],
    excludes: [
      "sum_k sans(X) (sans(f))sans(c)_j^k",
      "sum_l {sans(d)_l^i",
    ],
  },
  {
    file: "chapter005.typ",
    contains: [
      "and $sans(v) = sans(v)^0 partial\\/partial sans(x) + sans(v)^1 partial\\/partial sans(y),$ which is given by",
      "$sans(A) = sans(d) sans(x) \"∧\" sans(d) sans(y).$",
      "Here we extract $sans(d) sans(x)$ and $sans(d) sans(y)$ from R2-rect-basis",
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
      "Let μ be a map from points $sans(n)$ in the manifold $sans(N)$ to points $sans(m)$ in the manifold $sans(M)$.",
      "at points $sans(m) = mu (sans(n))$.",
      "If we were defining $sans(u)$ as a vector field we would need the inverse of μ",
    ],
    excludes: [
      "$mathsf{N}$",
      "$sans(m) = mu (sans(n). The",
      "mathsf{u]",
    ],
  },
  {
    file: "chapter007.typ",
    contains: [
      "(cal(D)_(sans(v)) sans(f))sans(g) .",
      "Introduce $B$ to make the dependence of $A$s on $sans(v)$ explicit:",
      "$ A_j^i (delta)= B_j^i (sans(v)) (delta). $",
    ],
    excludes: [
      "sans(g .)",
      "\\$A\\$s",
    ],
  },
  {
    file: "chapter008.typ",
    contains: [
      "$ cal(R) (bold(omega)\\,sans(u)\\,sans(v)\\,sans(w)) = bold(omega) ((cal(R) (sans(w) \\, sans(v))) (sans(u)))\\, $",
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
    ],
    excludes: [
      "$upright(bold(E))$[L]",
      "\\$#strong[E]\\$",
    ],
  },
  {
    file: "chapter011.typ",
    contains: [
      "By analogy, Einstein noticed that Maxwell\\'s equations were inconsistent with Galilean relativity.",
      "$ curl arrow(B) = frac(4 pi, c) arrow(I). $",
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
      "Higher-order derivatives are described by exponentiating the derivative operator. Thus the $n$th derivative of a function $f$ is notated as $D^n f$.",
      "using $upright(T e X)$, and then these decorations turn into superscripts and subscripts.",
    ],
    excludes: [
      "\\$n\\$th",
      "\\TeX",
    ],
  },
];

const globalExcludes = [
  "\\$",
  "[fn:",
  "#block[",
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
    name: "prose parenthetical trapped in Scheme block",
    regex: /```scheme\s+\((?:time|also|The|We know|See|but will|and perhaps|formerly)\b/,
  },
];

let failures = 0;

function fail(message, detail) {
  failures += 1;
  console.error(message);
  if (detail) console.error(`  ${detail}`);
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

if (failures > 0) {
  console.error(`\n${failures} Typst regression assertion(s) failed.`);
  process.exit(1);
}

console.log(
  `Typst regression assertions passed (${assertions.length} files, ${globalExcludes.length + globalRegexExcludes.length} global checks).`,
);
