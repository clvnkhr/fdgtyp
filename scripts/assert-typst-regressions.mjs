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

const expectedFootnoteCounts = {
  "preface.typ": 0,
  "prologue.typ": 6,
  "chapter001.typ": 8,
  "chapter002.typ": 10,
  "chapter003.typ": 12,
  "chapter004.typ": 8,
  "chapter005.typ": 10,
  "chapter006.typ": 7,
  "chapter007.typ": 19,
  "chapter008.typ": 9,
  "chapter009.typ": 8,
  "chapter010.typ": 4,
  "chapter011.typ": 6,
  "appendix_a.typ": 8,
  "appendix_b.typ": 3,
  "appendix_c.typ": 0,
  "references.typ": 0,
  "errata.typ": 0,
};

const expectedGeneratedDoubleBackslashCounts = {};

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
const expectedEquationLabelCounts = {
  "chapter001.typ": { prefix: "1", count: 6 },
  "chapter002.typ": { prefix: "2", count: 7 },
  "chapter003.typ": { prefix: "3", count: 57 },
  "chapter004.typ": { prefix: "4", count: 44 },
  "chapter005.typ": { prefix: "5", count: 39 },
  "chapter006.typ": { prefix: "6", count: 28 },
  "chapter007.typ": { prefix: "7", count: 79 },
  "chapter008.typ": { prefix: "8", count: 32 },
  "chapter009.typ": { prefix: "9", count: 32 },
  "chapter010.typ": { prefix: "10", count: 28 },
  "chapter011.typ": { prefix: "11", count: 43 },
  "appendix_b.typ": { prefix: "B", count: 35 },
  "appendix_c.typ": { prefix: "C", count: 11 },
};

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
      "can be found in Papert @papert1980mindstorms.",
      "This Lagrangian is implemented by",
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
      "can be found in Papert]",
      "Papert \\@papert1980mindstorms",
      "this lagrangian is implemented by",
    ],
  },
  {
    file: "chapter001.typ",
    contains: [
      "Euler-Lagrange equations",
      "embedding space. (The $hat(z)$ axis goes through the North Pole, and the Equator is in the plane $z = 0$.)",
      "(define Cartan (Christoffel->Cartan (metric->Christoffel-2 the-metric (coordinate-system->basis R2-rect))))",
      "This analysis will work for any number of dimensions (but will take your computer longer in higher dimensions, because the complexity increases).",
      "$ sans(d) theta (sans(v))= dot(theta) sans(d) phi.alt (sans(v))= dot(phi.alt)\\, $",
      'subscripted #raw(lang:"scheme", "g")s',
      "```scheme\n((Lsphere 'm 'R)\n (up 't (up 'theta 'phi) (up 'thetadot 'phidot)))\n\n#|\n(+ (* 1/2 (expt R 2) m (expt phidot 2) (expt (sin theta) 2))\n   (* 1/2 (expt R 2) m (expt thetadot 2)))\n|#\n```",
      "So, to work with coordinates we write:",
      "Galileo Galilei @galilei1623assayer",
      "equation @1.1",
      "Section #fdg-ref-page(<sec-2.1>).)",
      "Appendix @chap-appendix-b",
      "90◦ E meridian",
      "90°E meridian",
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
      "90◦E meridian",
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
      "=== Coordinate-Basis One-Form Fields <sec-3.4.3>",
      "=== Not All One-Form Fields Are Differentials <sec-3.4.4>",
      "=== Coordinate Transformations <sec-3.4.5>",
      "particular direction in the configuration space",
      "directional derivatives of manifold functions",
      "corresponding components",
    ],
    excludes: [
      "chi'(sans(m)))))",
      "D (sans(f) ?(chi')",
      "chi^1",
      "^(\"\"^1)",
      "function\\$f\\$at",
      "di- rection",
      "deriva- tives",
      "com- ponents",
    ],
  },
  {
    file: "chapter004.typ",
    contains: [
      "sum_k sans(X)_k (sans(f))sans(c)_j^k",
      "$ sans(v) (sans(f)) (sans(m))= sans(e) (sans(f)) (sans(m)) sans(b) (sans(m))= sum_i sans(e)_i (sans(f)) (sans(m))sans(b)^i (sans(m))\\, $ <4.1>",
      "tilde(sans(e))^i (sans(v))= sum_l sans(d)_l^i tilde(sans(X))^l (sans(v))",
      "sum_k sans(d)_k^i (sans(m)) sans(c)_j^k (sans(m)).",
      "$ sans(v) (sans(f))= sum_i sans(e)_i (sans(f))sans(b)^i = sum_i sans(e')_j (sans(f))sans(b')^j . $ <4.9>",
      "$ sans(a)_i = bold(omega) (sans(e)_i)= sum_j sans(a)'_j tilde(sans(e))^(' j) (sans(e)_i) = sum_j sans(a)'_j sans(J)_i^j $ <4.19>",
      "$ sans(e)_x = a frac(partial, partial theta) + b frac(partial, partial phi.alt) + c frac(partial, partial psi) = cos phi.alt frac(partial, partial theta) - frac(sin phi.alt cos theta, sin theta) frac(partial, partial phi.alt) + frac(sin phi.alt, sin theta) frac(partial, partial psi) . $ <4.29>",
      "&quad + sum_i sans(X)_i (sans(f))sum_j",
      "$ sans(a)^i &= sum_j (sans(X)_j (sans(c)^i) sans(b)^j \\",
      "&= sans(u) (sans(c)^i) - sans(v) (sans(b)^i) . $ <4.35>",
      "$ [sans(u)\\,sans(v)] (sans(f))= sum_k sans(e)_k (sans(f)) (sans(u) (sans(c)^k) - sans(v) (sans(b)^k) + sum_(i j) sans(c)^i sans(b)^j sans(d)_(j i)^k) $ <4.38>",
      "$ (e^(t sans(v))) (sans(m)) = (sans(f) compose phi.alt_t^(sans(v))) (sans(m)) . $ <4.40>",
      "$ (e^(s sans(w)) e^(t sans(v))) (sans(m)) = (sans(f) compose phi.alt_t^(sans(v)) compose phi.alt_s^(sans(w))) (sans(m)) . $ <4.41>",
      "$ (e^(epsilon.alt sans(v)) e^(epsilon.alt sans(w)) e^(- epsilon.alt sans(v)) e^(- epsilon.alt sans(w)) sans(f)) (sans(m)) . $ <4.42>",
      "(1 + B + B^2 / 2 + dots.c) times (1 - A + A^2 / 2 + dots.c)",
      "equations @4.29 -- @4.31",
    ],
    excludes: [
      "sum_k sans(X) (sans(f))sans(c)_j^k",
      "sans(e) (sans(f)) (sans(m))\\\n sans(b) (sans(m))= \\",
      "sum_l {sans(d)_l^i",
      "sum_k sans(d)_k^i (sans(m))\\\n sans(c)_j^k (sans(m)).",
      "$ sans(v) (sans(f))= sum_i sans(e)_i (sans(f))sans(b)^i \\\n &= sum_i sans(e')_j",
      "tilde(sans(e))^(' j) (sans(e)_i)\\\n &= sum_j sans(a)'_j sans(J)_i^j",
      "$ sans(e)_x = a frac(partial, partial theta) + b frac(partial, partial phi.alt) + c frac(partial, partial psi) \\\n &=",
      "$ sans(a)^i = sum_j (sans(X)_j (sans(c)^i) sans(b)^j \\\n",
      "$ [sans(u)\\,sans(v)] (sans(f))= sum_k sans(e)_k (sans(f)) (\\\n",
      "$ (e^(t sans(v))) (sans(m)) \\\n &=",
      "$ (e^(s sans(w)) e^(t sans(v))) (sans(m)) \\\n &=",
      "$ (e^(epsilon.alt sans(v)) e^(epsilon.alt sans(w)) \\\n e^(- epsilon.alt sans(v))",
      "equations 4.29",
    ],
  },
  {
    file: "chapter005.typ",
    contains: [
      "and $sans(v) = sans(v)^0 partial\\/partial sans(x) + sans(v)^1 partial\\/partial sans(y),$ which is given by",
      "$sans(A) = sans(d) sans(x) \"∧\" sans(d) sans(y).$",
      "Here we extract $sans(d) sans(x)$ and $sans(d) sans(y)$ from #raw(lang:\"scheme\", \"R2-rect-basis\")",
      "$ sans(d) omega (sans(v)_0\\,dots.c\\,sans(v)_k) &= sum_(i=0)^k",
      "$ sans(d) omega (sans(v)_0\\,dots.c\\,sans(v)_k) &= sum_(i=0)^k \\\n &quad",
      "omega ([sans(v)_i\\,sans(v)_j]",
      "&quad + sum_(j=i + 1)^k",
      "$ integral_(chi (sans(P))) sans(d) omega (partial\\/partial sans(x)\\,partial\\/partial sans(y))compose chi^(-1) &= integral_(x_\"min\")^(x_\"max\")",
      "&quad + integral_(y_\"min\")^(y_\"max\")",
    ],
    excludes: [
      "$v = v^{0}{∂}/{∂x} + v^{1}{∂}/{∂y},$",
      "$A = dx ∧ dy.$",
      "Here we extract $sans(d)$sans(x)$",
      "$ sans(d) omega (sans(v)_0\\,dots.c\\,sans(v)_k) =\\\n &quad",
      "$ sans(d) omega (sans(v)_0\\,dots.c\\,sans(v)_k)\\\n &=",
      "omega (sans(v)_i \\, sans(v)_j]",
      "\n integral_(y_\"min\")^(y_\"max\") ((omega (partial\\/partial sans(y))compose chi^(-1))",
      "<5.40>",
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
      "(make-fake-vector-field V-over-mu n)",
      "(coordinate-system-at 'spherical 'north-pole S2)",
      "(define ((pullback-function mu:N->M) f-on-M)",
    ],
    excludes: [
      "Let μ be a map",
      "$mathsf{N}$",
      "$sans(m) = mu (sans(n). The",
      "sans(v)_mu(sans(f))",
      "only value that is ever passed as m is (mu:N-\\>M n).",
      "inverse of μ",
      "mathsf{u]",
      "(make fake-vector-field V-over-mu n)",
      "(coordinate-system at 'spherical 'north-pole S2)",
      "(define ((pullback-function mu:N->M) f-on-m)",
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
      "We can assume without loss of generality",
      "$ nabla_(sans(v)) sans(u) (sans(f))= sum_i (sans(v) (sans(u)^i)sans(e)_i",
      "$ D g (delta)= sum_(i j) ( A_j^i (delta)",
      "sum_k (pi.alt_k^j (sans(v)) sans(w)^k)",
      "sum_k (pi.alt_k^j (sans(v)) tilde(sans(e))^k)",
      "$ nabla_(sans(v)) (tau)= sum_k (sans(v) (tau_k) - sum_j tau_j pi.alt_k^j (sans(v))) tilde(sans(e))^k\\, $ <7.59>",
      "$ nabla_(sans(v)) (tau (sans(u)))=(nabla_(sans(v)) tau) (sans(u))+ tau (nabla_(sans(v)) sans(u)). $ <7.60>",
      "$ sans(e) (sans(f))= sans(e)' (sans(f))sans(J) . $ <7.61>",
      "$ D u^1 (tau)= - frac(cos(alpha (tau)), sin(alpha (tau))) (D beta (tau)u^0 (tau)+ D alpha (tau)u^1 (tau)). $ <7.74>",
      "$ D u (tau)= f (sigma (tau)\\,D sigma (tau))u (tau)\\, $ <7.75>",
      "$ g (s (t))= D s (t)=(1\\,D u (t))\\, $ <7.76>",
      "$ nabla_(sans(v)) sans(v) = 0\\, $ <7.77>",
      "$ nabla_(partial\\/partial sans(t))^gamma d gamma (partial\\/partial sans(t))= 0 . $ <7.78>",
      "$ D^2 sigma^i (t)+ sum_(j k) Gamma_(j k)^i (gamma (t))D sigma^j (t)D sigma^k (t)= 0\\, $ <7.79>",
    ],
    excludes: [
      "sans(g .)",
      "\\$A\\$s",
      "equations 7.18",
      "\\[19\\]",
      "See Appendix C",
      "We can asume without loss of generality",
      "sum_i(sans(v) (sans(u)^i)",
      "$ D g (delta)= \\\n",
      "sum_k pi.alt_k^j (sans(v)) sans(w)^k",
      "sum_k pi.alt_k^j (sans(v)) tilde(sans(e))^k",
      "$ D u^0 (tau)= sin(alpha (tau))cos(alpha (tau))D beta (tau)u^1 (tau)\\, $ <7.74>",
      "<7.80>",
      "<7.81>",
      "<7.82>",
    ],
  },
  {
    file: "chapter008.typ",
    contains: [
      "This computes the same operator as the traditional Riemann curvature operator:",
      "However, if $sans(w)$ and $sans(v)$ do not commute",
      "$Gamma_(j k)^i = Gamma_(k j)^i$",
      "$ cal(R) (bold(omega)\\,sans(u)\\,sans(v)\\,sans(w)) = bold(omega) ((cal(R) (sans(w) \\, sans(v))) (sans(u)))\\, $ <8.2>",
      "$ nabla_(sans(v)) sans(u) (sans(f)) &= sum_i sans(e)_i (sans(f))",
      "&quad + sum_j pi.alt_j^i (sans(v)) tilde(sans(e))^j (sans(u)))",
      "$ nabla_([sans(w)\\,sans(v)]) sans(u) = sans(e) {[sans(w) \\, sans(v)] tilde(sans(e)) (sans(u)) + pi.alt ([sans(w) \\, sans(v)]) tilde(sans(e)) (u)} . $ <8.18>",
    ],
    excludes: [
      ")bold(omega)",
      "cal(R) (bold(omega)\\,sans(u)\\,sans(v)\\,sans(w))bold(omega)",
      "$ cal(R) (bold(omega)\\,sans(u)\\,sans(v)\\,sans(w)) =\\\n",
      "<8.33>",
      "<8.34>",
      "However , if",
      "$Gamma_(j k)^i = Gamma_(j k)^i$",
      "$ nabla_([sans(w)\\,sans(v)]) sans(u) = sans(e) {[sans(w) \\, sans(v)] tilde(sans(e)) (sans(u)) \\\n",
    ],
  },
  {
    file: "chapter009.typ",
    contains: [
      "The Lagrange equations are $upright(bold(E))[L]compose Gamma[q]= 0$.",
      "$ bold(E)[L_2]= D_t partial_2 L_2 - partial_1 L_2\\, $",
      "Section @sec-7.4",
      "```scheme\n(determinant\n (submatrix (((* (partial 1) (partial 0))\n              geodesic-equation+X-residuals)\n             0\n             (up 0 0 0))\n            0 3 0 3))\n```",
    ],
    excludes: [
      "$upright(bold(E))$[L]",
      "\\$#strong[E]\\$",
      "Section 7.4",
    ],
  },
  {
    file: "chapter010.typ",
    contains: [
      "$ (sans(g)^(*) bold(omega))_(j_p dots.c j_(n - 1)) = sum_(i_0 dots.c i_(p - 1) j_0 dots.c j_(p - 1)) frac(1, p !) omega_(i_0 dots.c i_(p - 1)) g^(i_0 j_0) dots.c g^(i_(p - 1) j_(p - 1)) epsilon.alt_(j_0 dots.c j_(n - 1)) $ <10.1>",
      "$ sans(d f) = (frac(partial, partial sans(x)) sans(f)) sans(d x) + (frac(partial, partial sans(y)) sans(f)) sans(d y) + (frac(partial, partial sans(z)) sans(f)) sans(d z) . $ <10.2>",
      "$ grad (sans(f)) &= g^sharp (sans(d f)) $ <10.3>",
      "- frac(partial theta_z, partial sans(x))) sans(d y) +",
      "$ sans(d) theta = (frac(partial theta_z, partial sans(y)) - frac(partial theta_y, partial sans(z))) sans(d y) and sans(d z) + (frac(partial theta_x, partial sans(z)) - frac(partial theta_z, partial sans(x))) sans(d z) and sans(d x) + (frac(partial theta_y, partial sans(x)) - frac(partial theta_x, partial sans(y))) sans(d x) and sans(d y) . $ <10.5>",
      "$ g^(*) (sans(d) theta) = (frac(partial theta_z, partial sans(y)) - frac(partial theta_y, partial sans(z))) sans(d x) + (frac(partial theta_x, partial sans(z)) - frac(partial theta_z, partial sans(x))) sans(d y) + (frac(partial theta_y, partial sans(x)) - frac(partial theta_x, partial sans(y))) sans(d z) . $ <10.6>",
      "$ curl (sans(v)) &= g^sharp (g^(*) (sans(d) (g^flat (sans(v)))))\\, $ <10.7>",
      "$ sans(d) (g^(*) theta)= (frac(partial theta_x, partial sans(x)) + frac(partial theta_y, partial sans(y)) + frac(partial theta_z, partial sans(z))) sans(d x) and sans(d y) and sans(d z) . $ <10.8>",
      "$ g^(*) sans(d) (g^(*) theta)= frac(partial theta_x, partial sans(x)) + frac(partial theta_y, partial sans(y)) + frac(partial theta_z, partial sans(z)) . $ <10.9>",
      "$ div (sans(v)) &= g^(*) (sans(d) (g^(*) (g^flat (sans(v))))) . $ <10.10>",
      "$ sans(g) (sans(u)\\,sans(v)) = - c^2 sans(d t) (sans(u))thin sans(d t) (sans(v)) + sans(d x) (sans(u))thin sans(d x) (sans(v)) + sans(d y) (sans(u))thin sans(d y) (sans(v)) + sans(d z) (sans(u))thin sans(d z) (sans(v)). $ <10.11>",
      "$ frac(partial B_x, partial x) + frac(partial B_y, partial y) + frac(partial B_z, partial z) = 0 $ <10.19>",
      "$ frac(partial E_z, partial y) - frac(partial E_y, partial z) = 1 / c frac(partial B_x, partial t)\\, $ <10.20>",
      "$ frac(partial E_x, partial z) - frac(partial E_z, partial x) = 1 / c frac(partial B_y, partial t)\\, $ <10.21>",
      "$ frac(partial E_y, partial x) - frac(partial E_x, partial y) = 1 / c frac(partial B_z, partial t) . $ <10.22>",
      "$ frac(partial E_x, partial x) + frac(partial E_y, partial y) + frac(partial E_z, partial z) = 4 pi rho . $ <10.23>",
      "$ frac(partial B_y, partial z) - frac(partial B_z, partial y) = - 1 / c frac(partial E_x, partial t) - frac(4 pi, c) I_x\\, $ <10.24>",
      "$ frac(partial B_z, partial x) - frac(partial B_x, partial z) = - 1 / c frac(partial E_y, partial t) - frac(4 pi, c) I_y\\, $ <10.25>",
      "$ frac(partial B_x, partial y) - frac(partial B_y, partial x) = - 1 / c frac(partial E_z, partial t) - frac(4 pi, c) I_z . $ <10.26>",
    ],
    excludes: [
      "$ (sans(g)^(*) bold(omega))_(j_p dots.c j_(n - 1)) \\",
      "frac(1, p !) \\",
      "$ sans(d f) = (frac(partial, partial sans(x)) sans(f)) sans(d x) \\",
      "$ grad (sans(f))= g^sharp (sans(d f)) $ <10.3>",
      "$ grad (sans(f))= g^sharp (sans(d f)) (d f) $ <10.3>",
      "- frac(partial theta_z, partial sans(x))) sans(d x) \\",
      "$ sans(d) theta = (frac(partial theta_z, partial sans(y)) \\",
      "$ g^(*) (sans(d) theta) = (frac(partial theta_z, partial sans(y)) \\",
      "sans(d x) and sans(d z) \\",
      "$ curl (sans(v)) = g^sharp",
      "$ sans(d) (g^(*) theta)= (\\",
      "$ g^(*) sans(d) (g^(*) theta)= \\",
      "$ div (sans(v)) = g^(*)",
      "$ sans(g) (sans(u)\\,sans(v))= \\",
      "$ sans(g) (sans(u)\\,sans(v)) = - c^2 sans(d t) (sans(u))thin sans(d t) (sans(v)) + sans(d x) (sans(u))thin sans(d x) (sans(v)) \\",
      "$ frac(partial B_x, partial x) \\",
      "$ frac(partial E_z, partial y) \\",
      "$ frac(partial E_x, partial z) \\",
      "$ frac(partial E_y, partial x) \\",
      "$ frac(partial E_x, partial x) \\",
      "$ frac(partial B_y, partial z) \\",
      "$ frac(partial B_z, partial x) \\",
      "$ frac(partial B_x, partial y) \\",
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
      "$ xi^0 = p (xi')^0 + q (xi')^1 xi^1 = r (xi')^0 + s (xi')^1. $",
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
      "```scheme\n(operator operand-1 ... operand-n)\n```",
      "```scheme\n(lambda formal-parameters body)\n```",
      "```scheme\n(cond\n  (predicate-1 consequent-1) ...\n  (predicate-n consequent-n))\n```",
      "```scheme\n(if predicate consequent alternative)\n```",
      "```scheme\n(let ((variable-1 expression-1) ...\n      (variable-n expression-n))\n  body)\n```",
    ],
    excludes: [
      "\\$n\\$th",
      'italic("operator")',
      'mono("(lambda")',
      'mono("(cond ")',
      'mono("(if")',
      'mono("(let (")',
    ],
  },
  {
    file: "appendix_b.typ",
    contains: [
      "A component of an up tuple is usually identified by a superscript.",
      "I_0 (s) &= t",
      "$ p v = p_0 v^0 + p_1 v^1 + p_2 v^2 . $ <B.8>",
      "$ A C =[A C_0\\,A C_1\\,A C_2]. $ <B.10>",
      "Higher-order derivatives are described by exponentiating the derivative operator. Thus the $n$th derivative of a function $f$ is notated as $D^n f$.",
      "using #TeX, and then these decorations turn into superscripts and subscripts.",
      "equations @B.4 and @B.5",
    ],
    excludes: [
      "\\$n\\$th",
      "\\TeX",
      "equations (B.4)",
      "I_0 (s)= y",
      "$ A B =[A C_0\\,A C_1\\,A C_2]. $ <B.10>",
    ],
  },
  {
    file: "appendix_c.typ",
    contains: [
      "sans(g) sans(T) (sans(v)\\,bold(omega)) $ <C.1>",
      "$ sans(R)_(j k l)^(' i) = sum_(m n p q) sans(J)_m^i sans(R)_(n p q)^m sans(K)_j^n sans(K)_k^p sans(K)_l^q . $ <C.10>",
    ],
    excludes: [
      "sans(g) sans(T) (sans(u)\\,bold(omega)) $ <C.1>",
      "$ sans(R)_(j k l)^i = sum_(m n p q) sans(J)_m^i sans(R)_(n p q)^m sans(K)_j^n sans(K)_k^p sans(K)_l^q . $ <C.10>",
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
      "#let fdg-reference-order = (",
      "#let fdg-seed-bibliography-order() = box(width: 0pt, height: 0pt)[",
      "<abelson1996sicp>",
      "<fdg-software>",
    ],
  },
  {
    file: "fdg-lib/title.typ",
    contains: [
      "CC BY-NC-SA",
      '#raw("special_sales@mitpress.mit.edu")',
      "#v(1.6em)",
      "#h(1.2em)p. cm.",
      "516.3'6—dc23",
      "#align(right)[2012042107]",
      "10 #h(0.35em) 9 #h(0.35em) 8",
    ],
    excludes: [
      "special\\_sales\\@mitpress.mit.edu",
      "516.3'6--dc23",
      "10 9 8 7 6 5 4 3 2 1",
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
    name: "multiple alignment points on one math row",
    regex: /\$[^$\n]*&=[^$\n]*&=/,
  },
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
    name: "literal parenthesized Typst equation ref",
    regex: /\(@(?:[A-C]|\d+)\.\d+\)/,
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
      "1 It is customary to shorten \"Euler-Lagrange equations\" to \"Lagrange equations.\"",
      "1 The quote is from Pais [12], p. 131.",
      "7 These names are accidents of history.",
    ],
    excludes: [
      "Appendix B , page",
      "Appendix C: References",
      "Appendix Appendix",
      "See Appendix 14",
      "108 These names are accidents of history.",
      "((11.11))",
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
  const actualDoubleBackslashes = matchAll(/\\\\/g, text).length;
  const expectedDoubleBackslashes = expectedGeneratedDoubleBackslashCounts[file] ?? 0;
  if (actualDoubleBackslashes !== expectedDoubleBackslashes) {
    fail(
      `Unexpected literal double-backslash count in ${file}:`,
      `${actualDoubleBackslashes} found, expected ${expectedDoubleBackslashes}`,
    );
  }
  const expectedFootnotes = expectedFootnoteCounts[file];
  if (expectedFootnotes === undefined) {
    fail(`Missing expected footnote count configuration for ${file}`);
  } else {
    const actualFootnotes = matchAll(/#footnote\[/g, text).length;
    if (actualFootnotes !== expectedFootnotes) {
      fail(`Unexpected footnote count in ${file}:`, `${actualFootnotes} found, expected ${expectedFootnotes}`);
    }
  }
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
  for (const match of matchAll(/\$[^\n&$]*\\\n\s*&=/g, text)) {
    fail("Math display breaks immediately before its first aligned equals:", describeMatch(file, text, match));
  }
  for (const match of matchAll(/\\\n\s+[+-]/g, text)) {
    fail("Math continuation row starts with an unaligned operator:", describeMatch(file, text, match));
  }
  for (const match of matchAll(/\\\n\s*&[+-]/g, text)) {
    fail("Math continuation operator should use &quad spacing:", describeMatch(file, text, match));
  }
  for (const match of matchAll(/\b(?:vec|mat)\([^$\n]*&quad/g, text)) {
    fail("Alignment spacing leaked inside a vec/mat call:", describeMatch(file, text, match));
  }
}

function displayByLabel(text, label) {
  const lines = text.split("\n");
  const targetSuffix = `$ <${label}>`;

  for (let start = 0; start < lines.length; start += 1) {
    if (!lines[start].startsWith("$")) continue;

    for (let end = start; end < lines.length; end += 1) {
      if (lines[end].endsWith(targetSuffix)) {
        return lines.slice(start, end + 1).join("\n");
      }
      if (end > start && lines[end].trim() === "") break;
    }
  }

  return null;
}

function labelledDisplays(text) {
  const lines = text.split("\n");
  const displays = [];

  for (let start = 0; start < lines.length; start += 1) {
    if (!lines[start].startsWith("$")) continue;

    for (let end = start; end < lines.length; end += 1) {
      const label = lines[end].match(/\$ <([^>]+)>$/)?.[1];
      if (label) {
        displays.push({
          label,
          text: lines.slice(start, end + 1).join("\n"),
        });
        start = end;
        break;
      }
      if (end > start && lines[end].trim() === "") break;
    }
  }

  return displays;
}

function equationLabels(text) {
  return matchAll(/\$\s*<((?:\d+|[BC])\.\d+)>/g, text).map(match => match[1]);
}

for (const file of contentFiles) {
  const text = contentByFile.get(file);
  for (const display of labelledDisplays(text)) {
    const breaks = matchAll(/\\\n/g, display.text).length;
    if (breaks === 0) continue;

    const equals = matchAll(/(?<![<>!])=/g, display.text).length;
    const compactLength = display.text.replace(/\s+/g, " ").length;
    if (equals === 1 && compactLength < 220) {
      fail(
        "Short single-equals display should not have forced linebreaks:",
        `${file}:${display.label}: ${compactLength} chars`,
      );
    }
  }
}

const expectedMathLineBreaks = [
  { file: "chapter005.typ", label: "5.4", minBreaks: 4, minAlignedEquals: 4 },
  { file: "chapter005.typ", label: "5.10", minBreaks: 1, minAlignedEquals: 1 },
  { file: "chapter005.typ", label: "5.24", minBreaks: 2 },
  { file: "chapter005.typ", label: "5.30", minBreaks: 2, minAlignedEquals: 2 },
  { file: "chapter005.typ", label: "5.34", minBreaks: 4, minAlignedEquals: 1 },
];

for (const { file, label, minBreaks, minAlignedEquals = 0 } of expectedMathLineBreaks) {
  const text = contentByFile.get(file);
  const display = displayByLabel(text, label);
  if (!display) {
    fail(`Missing expected math display ${label} in ${file}`);
    continue;
  }
  const breaks = matchAll(/\\\n/g, display).length;
  if (breaks < minBreaks) {
    fail(`Math display ${label} lost source line breaks in ${file}:`, `${breaks} found, expected at least ${minBreaks}`);
  }
  const alignedEquals = matchAll(/\\\n\s*&=/g, display).length;
  if (alignedEquals < minAlignedEquals) {
    fail(`Math display ${label} lost aligned equals in ${file}:`, `${alignedEquals} found, expected at least ${minAlignedEquals}`);
  }
}

const expectedSingleLineDisplays = [
  { file: "chapter004.typ", label: "4.38" },
  { file: "chapter007.typ", label: "7.53" },
  { file: "chapter007.typ", label: "7.41" },
  { file: "chapter008.typ", label: "8.18" },
];

for (const { file, label } of expectedSingleLineDisplays) {
  const text = contentByFile.get(file);
  const display = displayByLabel(text, label);
  if (!display) {
    fail(`Missing expected math display ${label} in ${file}`);
    continue;
  }
  if (/\\\n/.test(display)) {
    fail(`Math display ${label} should be a single generated line in ${file}:`, display);
  }
}

{
  for (const [file, { prefix, count }] of Object.entries(expectedEquationLabelCounts)) {
    const labels = equationLabels(contentByFile.get(file)).filter(label => label.startsWith(`${prefix}.`));
    const expectedLabels = Array.from({ length: count }, (_, index) => `${prefix}.${index + 1}`);
    if (labels.length !== expectedLabels.length) {
      fail(
        "Published equation label count changed:",
        `${file}: ${labels.length} found, expected ${expectedLabels.length}`,
      );
    }
    for (let index = 0; index < expectedLabels.length; index += 1) {
      if (labels[index] !== expectedLabels[index]) {
        fail(
          "Published equation label sequence changed:",
          `${file} position ${index + 1}: found ${labels[index] ?? "missing"}, expected ${expectedLabels[index]}`,
        );
        break;
      }
    }
  }

  const checkedFiles = Object.keys(expectedEquationLabelCounts).length;
  if (checkedFiles !== 13) {
    fail(
      "Unexpected number of equation-label sections checked:",
      `${checkedFiles} found, expected 13`,
    );
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
      `equation-label sections: ${Object.keys(expectedEquationLabelCounts).length}`,
      `figures: ${figureUses.length}`,
      `labels: ${definedLabels.size}`,
      `bibliography keys: ${bibKeys.size}`,
    ].join(", ") +
    ").",
);
