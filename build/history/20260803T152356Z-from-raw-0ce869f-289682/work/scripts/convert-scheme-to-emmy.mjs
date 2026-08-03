#!/usr/bin/env node

import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const typContentDir = path.join(root, "typ", "content");
const clojureDir = path.join(root, "fdg-book", "clojure", "org");
const outputDir = path.join(root, "codeblocks");
const publicDir = path.join(root, "emmy-runner", "public", "generated");
const force = process.argv.includes("--force");

const explicitSimplifyIds = new Set([
  "chapter001-005", "chapter001-017",
  "chapter003-008", "chapter003-009", "chapter003-018", "chapter003-024", "chapter003-025",
  "chapter004-003", "chapter004-004", "chapter004-006", "chapter004-007", "chapter004-008",
  "chapter004-010", "chapter004-011", "chapter004-012", "chapter004-013", "chapter004-014", "chapter004-015",
  "chapter005-006", "chapter005-007", "chapter005-009", "chapter005-010", "chapter005-013", "chapter005-014", "chapter005-016",
  "chapter006-016",
  // These have no parseable scmutils result comment, but the historical
  // sources show coordinate-invariance identities. Their raw Emmy expansions
  // are enormous; simplify the displayed final expression just as scmutils
  // did. (The Ch. 9 stability determinant was also tried, but full simplify
  // does not finish within the smoke-test bound.)
  "chapter007-003", "chapter007-012", "chapter007-026",
  "chapter003-020",
  "chapter008-003", "chapter008-012", "chapter008-022", "chapter008-023", "chapter008-025", "chapter008-026",
  "chapter008-032", "chapter008-034", "chapter008-036",
  "chapter009-005", "chapter009-006", "chapter009-008", "chapter009-010", "chapter009-011",
  "chapter009-014", "chapter009-015", "chapter009-023",
  "chapter010-009", "chapter010-011", "chapter010-012", "chapter010-016", "chapter010-020", "chapter010-024",
  "chapter010-027", "chapter010-028", "chapter010-029", "chapter010-030", "chapter010-031", "chapter010-032",
  "chapter010-033", "chapter010-034", "chapter010-036", "chapter010-038", "chapter010-040", "chapter010-041",
  "chapter011-005", "chapter011-013", "chapter011-018", "chapter011-020", "chapter011-021",
  "chapter011-023", "chapter011-024", "chapter011-026", "chapter011-029", "chapter011-030", "chapter011-031",
  "chapter011-032", "chapter011-034",
  "appendix_a-015",
  "appendix_b-007", "appendix_b-019", "appendix_b-020", "appendix_b-033",
]);

// These blocks have more than one result-producing form, or need simplification
// on a non-final form. scmutils simplified each displayed result automatically;
// wrap every corresponding CLJS expression rather than only the block's tail.
const explicitSimplifyAllResultIds = new Set([
  "chapter003-016", "chapter003-019",
  "chapter004-010", "chapter004-012",
  "chapter005-003", "chapter005-004", "chapter005-008", "chapter005-011",
  "chapter007-041",
  "chapter008-010", "chapter008-012", "chapter008-013", "chapter008-024",
  "chapter009-009", "chapter009-012",
  "chapter010-012", "chapter010-022",
  "chapter011-020", "chapter011-027", "chapter011-028",
  "appendix_b-006",
]);

// These displayed verification fragments depend on setup that the converted
// prose describes but does not expose as an earlier runnable block.
const nonExecutableIds = new Set([
  "chapter007-006", "chapter007-007", "chapter007-008", "chapter007-009",
  "chapter007-025",
  "chapter008-017",
  // Symbolic Bianchi expansions are valid interactive examples, but are too
  // expensive for the deterministic every-build smoke pass.
  "chapter008-035", "chapter008-037", "chapter008-038",
  // This is the compact expected result of the preceding Ricci calculation,
  // printed by scmutils as a separate source block in the book.
  "chapter009-020",
]);

// Reading order and execution order differ here: the text displays the
// geodesic residual before introducing the Cartan coefficients it uses.
const prerequisiteIds = new Map([
  ["chapter001-015", ["chapter001-016"]],
]);

const files = [
  "prologue.org",
  ...Array.from({ length: 11 }, (_, i) => `chapter${String(i + 1).padStart(3, "0")}.org`),
  "appendix_a.org",
  "appendix_b.org",
  "appendix_c.org",
  "errata.org",
];

function hash(text) {
  return createHash("sha256").update(text).digest("hex");
}

function normalizeClojureBlockComments(source) {
  return source.replace(/#\|([\s\S]*?)\|#/g, (_match, comment) => comment
    .trim()
    .split("\n")
    .map(line => `;; ${line}`.trimEnd())
    .join("\n"));
}

function stripCapturedResults(source) {
  return source.replace(/^;; =>[^\n]*(?:\n;;[^\n]*)*\n?/gm, "");
}

const inlineZeroResultIds = new Set([
  "chapter003-020", "chapter005-009", "chapter005-014",
  "chapter007-003", "chapter007-006", "chapter007-007", "chapter007-008",
  "chapter007-009", "chapter007-012", "chapter007-026",
]);

function correctMalformedSchemeOutputs(source, id) {
  // A handful of early Org examples put the displayed zero result inside the
  // source block as a bare final form. That is prose output, not a second
  // expression to evaluate. Keep it as a Scheme result comment so it remains
  // available to the comparison audit without becoming ClojureScript code.
  if (inlineZeroResultIds.has(id)) {
    source = source.replace(/\n\s*0\s*$/, "\n;; 0");
  }
  switch (id) {
    case "chapter003-016":
      return source.replace(/(;;\s+r)\)\)\s*$/, "$1)))");
    case "chapter006-009":
      return source.replace(/(;;\s+\(up \(\(D theta\) t0\) \(\(D phi\) t0\))\)\)\s*$/, "$1)");
    case "chapter007-031":
      return source
        .replace(";; (up + (* -1", ";; (up (+ (* -1")
        .replace(";; (sign (alpha tau))))", ";; (sin (alpha tau))))");
    case "chapter007-034":
      return source.replace(";; up 1.5707963267948957", ";; (up 1.5707963267948957");
    default:
      return source;
  }
}

function preserveKnownCachedResult(source, id) {
  if (!inlineZeroResultIds.has(id) || /\n;; => 0\s*$/.test(source)) return source;
  return `${source.trimEnd()}\n;; => 0`;
}

function extractBlocks(source, language) {
  const lines = source.split("\n");
  const blocks = [];
  let heading = "Front matter";

  for (let i = 0; i < lines.length; i += 1) {
    const headingMatch = lines[i].match(/^\s*\*+\s+(?:COMMENT\s+)?(.+)$/);
    if (headingMatch) heading = headingMatch[1].trim();

    const start = lines[i].match(new RegExp(`^\\s*#\\+begin_src\\s+${language}(?:\\s+.*)?$`, "i"));
    if (!start) continue;
    const firstLine = i + 2;
    const body = [];
    i += 1;
    while (i < lines.length && !/^\s*#\+end_src\)?\s*$/i.test(lines[i])) {
      body.push(lines[i]);
      i += 1;
    }
    blocks.push({ code: body.join("\n").trim().replaceAll("’", "'"), heading, firstLine });
  }
  return blocks;
}

function extractTypstSchemeBlocks(source, stem) {
  const blocks = [];
  const pattern = /\/\* fdg-code-source: ([^\s/]+)\/(\d{3})\n([\s\S]*?)\nfdg-code-source-end \*\//g;
  for (const match of source.matchAll(pattern)) {
    if (match[1] !== stem) throw new Error(`mismatched code block id ${match[1]} in ${stem}`);
    const prefix = source.slice(0, match.index);
    const heading = [...prefix.matchAll(/^=+\s+(.+)$/gm)].at(-1)?.[1]?.trim() ?? "Front matter";
    blocks.push({
      code: match[3].trim().replaceAll("’", "'"),
      heading,
      firstLine: prefix.split("\n").length,
      number: match[2],
    });
  }
  return blocks;
}

function expandNowebReferences(source) {
  const lines = source.split("\n");
  const named = new Map();
  for (let i = 0; i < lines.length; i += 1) {
    const match = lines[i].match(/^\s*#\+name:\s*(\S+)\s*$/i);
    if (!match) continue;
    let start = i + 1;
    while (start < lines.length && !/^\s*#\+begin_src\b/i.test(lines[start])) start += 1;
    if (start === lines.length) continue;
    const body = [];
    for (let j = start + 1; j < lines.length && !/^\s*#\+end_src\)?\s*$/i.test(lines[j]); j += 1) {
      body.push(lines[j]);
    }
    named.set(match[1], body.join("\n").trim());
  }
  return source.replace(/<<([^>]+)>>/g, (reference, name) => named.get(name) ?? reference);
}

function tokenize(source) {
  const tokens = [];
  for (let i = 0; i < source.length;) {
    const c = source[i];
    if (/\s|,/.test(c)) { i += 1; continue; }
    if (c === ";") {
      while (i < source.length && source[i] !== "\n") i += 1;
      continue;
    }
    if (c === "(" || c === ")" || c === "'" || c === "`") {
      tokens.push(c); i += 1; continue;
    }
    if (c === "\"") {
      let value = c; i += 1;
      while (i < source.length) {
        value += source[i];
        if (source[i] === "\\" && i + 1 < source.length) {
          i += 1; value += source[i];
        } else if (source[i] === "\"") { i += 1; break; }
        i += 1;
      }
      tokens.push(value); continue;
    }
    let value = "";
    while (i < source.length && !/[\s,()'`;]/.test(source[i])) {
      value += source[i]; i += 1;
    }
    if (value) tokens.push(value);
  }
  return tokens;
}

function parseForms(source) {
  const tokens = tokenize(source);
  let cursor = 0;
  function read() {
    const token = tokens[cursor++];
    if (token === "(") {
      const items = [];
      while (cursor < tokens.length && tokens[cursor] !== ")") items.push(read());
      if (tokens[cursor++] !== ")") throw new Error("unclosed list");
      return { type: "list", items };
    }
    if (token === "'" || token === "`") return { type: "prefix", prefix: token, value: read() };
    if (token === ")" || token === undefined) throw new Error(`unexpected token ${token}`);
    return { type: "atom", value: token };
  }
  const forms = [];
  while (cursor < tokens.length) forms.push(read());
  return forms;
}

const atom = value => ({ type: "atom", value });
const list = items => ({ type: "list", items });
const vector = items => ({ type: "vector", items });
const atomValue = node => node?.type === "atom" ? node.value : null;

function transformBody(nodes) {
  const first = nodes[0];
  if (first?.type === "list" && atomValue(first.items[0]) === "define"
      && first.items[1]?.type === "atom") {
    return [list([
      atom("let"),
      vector([transform(first.items[1]), transform(first.items[2])]),
      ...transformBody(nodes.slice(1)),
    ])];
  }
  const bindings = [];
  let cursor = 0;
  while (cursor < nodes.length) {
    const candidate = nodes[cursor];
    if (candidate?.type !== "list" || atomValue(candidate.items[0]) !== "define"
        || candidate.items[1]?.type !== "list") break;
    const converted = transform(candidate);
    if (atomValue(converted.items[0]) !== "defn") break;
    bindings.push(list(converted.items.slice(1)));
    cursor += 1;
  }
  if (bindings.length === 0) return nodes.map(transform);
  return [list([
    atom("letfn"), vector(bindings), ...nodes.slice(cursor).map(transform),
  ])];
}

function transform(node) {
  if (node.type === "atom") {
    const piRatio = node.value.match(/^:?pi\/(\d+)$/);
    if (piRatio) return list([atom("/"), atom("pi"), atom(piRatio[1])]);
    const ratio = node.value.match(/^(-?\d+)\/(\d+)$/);
    if (ratio) return list([atom("/"), atom(ratio[1]), atom(ratio[2])]);
    if (node.value === "#t") return atom("true");
    if (node.value === "#f") return atom("false");
    const mapped = node.value
      .replace(/^:(c|pi|G)$/, "'$1")
      .replace(/^->tex$/, "->tex-equation")
      .replace(/1form/g, "oneform")
      .replace(/4tuple/g, "four-tuple")
      .replace(/4-tuple/g, "four-tuple")
      .replace(/^4velocity/, "four-velocity")
      .replace(/^4-current$/, "four-current")
      .replace(/^(add-v|v|va|vb)\/c(s)?$/, "$1:c$2")
      .replace(/^s:map\/r$/, "mapr")
      .replace(/^frame-maker$/, "legacy-frame-maker")
      .replace(/^v-on-m$/, "v-on-M")
      .replace(/^list-ref$/, "nth")
      .replace(/^metric:invert$/, "invert")
      .replace(/^vector-ref$/, "nth")
      .replace(/^car$/, "first")
      .replace(/^cdr$/, "rest")
      .replace(/^eq\?$/, "=")
      .replace(/^R\^n$/, "Rn")
      .replace(/^S\^2$/, "S2-type")
      .replace(/^S\^2-type$/, "S2-type")
      .replace(/^1form$/, "oneform")
      .replace(/\^-1(?=:|$)/g, "-inverse")
      .replace(/\^(\d+)/g, "↑$1")
      .replace(/^e\^([xyz])$/, "e-$1")
      .replace(/\^([A-Za-z])/g, "↑$1")
      .replace(/^d\/dtau$/, "d:dtau")
      .replace(/^d\/d(.+)$/, "d:d$1")
      .replaceAll("literal-1form-field", "literal-oneform-field")
      .replaceAll("procedure->1form-field", "procedure->oneform-field");
    return atom(mapped);
  }
  if (node.type === "prefix") {
    if (node.prefix === "'" && node.value?.type === "atom"
        && /^-?\d+\/\d+$/.test(node.value.value)) {
      return transform(node.value);
    }
    if (node.prefix === "'" && node.value?.type === "atom"
        && /^:(c|pi|G)$/.test(node.value.value)) {
      return { ...node, value: atom(node.value.value.slice(1)) };
    }
    return { ...node, value: transform(node.value) };
  }
  if (node.type === "vector") return vector(node.items.map(transform));

  const [head, target, ...body] = node.items;
  const op = atomValue(head);
  if ((op === "coordinate-system-at" || (op === "coordinate-system" && atomValue(target) === "at"))) {
    const args = op === "coordinate-system-at" ? [target, ...body] : body;
    if (args.length === 3) {
      const [name, patch, manifold] = args;
      const keyword = value => value?.type === "prefix" && value.prefix === "'" && value.value?.type === "atom"
        ? atom(`:${value.value.value}`)
        : transform(value);
      return list([atom("coordinate-system-at"), transform(manifold), keyword(name), keyword(patch)]);
    }
  }
  if (op === "pullback" && atomValue(target) === "function") {
    return list([atom("pullback-function"), ...body.map(transform)]);
  }
  if (op === "pull" && atomValue(target) === "back") {
    return list([atom("pullback"), ...body.map(transform)]);
  }
  if (op === "literal" && atomValue(target) === "function") {
    return list([atom("literal-function"), ...body.map(transform)]);
  }
  if (op === "literal-function" && target?.type === "prefix" && target.prefix === "'"
      && target.value?.type === "atom" && body.length === 2 && /^\d+$/.test(atomValue(body[0]) ?? "")) {
    return list([
      atom("literal-function"),
      { type: "prefix", prefix: "'", value: atom(`${target.value.value}_${body[0].value}`) },
      transform(body[1]),
    ]);
  }
  if (op === "define" && target?.type === "atom"
      && ["spacetime", "spacetime-rect", "spacetime-sphere"].includes(target.value)) {
    return list([atom("show"), transform(target)]);
  }
  if (op === "define" && target?.type === "atom") {
    return list([atom("def"), transform(target), ...body.map(transform)]);
  }
  if (op === "define" && target?.type === "list") {
    const signature = node => {
      const [callee, ...args] = node.items;
      if (callee?.type === "atom") return { name: callee, layers: [args] };
      if (callee?.type !== "list") return null;
      const inner = signature(callee);
      return inner && { name: inner.name, layers: [...inner.layers, args] };
    };
    const parsed = signature(target);
    if (parsed) {
      let expressions = transformBody(body);
      for (let i = parsed.layers.length - 1; i >= 1; i -= 1) {
        expressions = [list([
          atom("fn"), vector(parsed.layers[i].map(transform)), ...expressions,
        ])];
      }
      return list([
        atom("defn"), transform(parsed.name), vector(parsed.layers[0].map(transform)), ...expressions,
      ]);
    }
  }
  if (op === "lambda") {
    const args = target?.type === "list"
      ? target.items
      : target?.type === "atom" ? [atom("&"), target] : [];
    return list([atom("fn"), vector(args.map(transform)), ...transformBody(body)]);
  }
  if (op === "let" && target?.type === "atom" && body[0]?.type === "list") {
    const bindings = body[0].items;
    const names = bindings.map(binding => transform(binding.items[0]));
    const values = bindings.map(binding => transform(binding.items[1]));
    const fnBinding = list([
      transform(target), vector(names), ...body.slice(1).map(transform),
    ]);
    return list([
      atom("letfn"), vector([fnBinding]), list([transform(target), ...values]),
    ]);
  }
  if ((op === "let" || op === "let*" || op === "fluid-let") && target?.type === "list") {
    const bindings = target.items.flatMap(binding => {
      if (binding.type !== "list" || binding.items.length < 2) return [transform(binding)];
      return [transform(binding.items[0]), transform(binding.items[1])];
    });
    return list([atom(op === "let*" ? "let" : op), vector(bindings), ...transformBody(body)]);
  }
  if (op === "begin") return list([atom("do"), ...node.items.slice(1).map(transform)]);
  if (op === "->") {
    return { type: "prefix", prefix: "'", value: list(node.items.map(transform)) };
  }
  if (op === "cond") {
    const clauses = node.items.slice(1).flatMap(clause => {
      if (clause.type !== "list" || clause.items.length < 2) return [transform(clause)];
      const [test, ...expressions] = clause.items;
      const result = expressions.length === 1
        ? transform(expressions[0])
        : list([atom("do"), ...expressions.map(transform)]);
      return [atomValue(test) === "else" ? atom(":else") : transform(test), result];
    });
    return list([atom("cond"), ...clauses]);
  }
  if (op === "submatrix" && body.length === 4
      && /^\d+$/.test(atomValue(body[1]) ?? "")
      && /^\d+$/.test(atomValue(body[3]) ?? "")) {
    // scmutils treats the two upper bounds as exclusive; Emmy's submatrix
    // treats them as inclusive.
    return list([
      atom("submatrix"), transform(target), transform(body[0]),
      atom(String(Number(atomValue(body[1])) - 1)), transform(body[2]),
      atom(String(Number(atomValue(body[3])) - 1)),
    ]);
  }
  return list(node.items.map(transform));
}

// Translation chooses syntax, not layout. Emit each form flat and leave every
// line-breaking decision to the zprint pass at the end of conversion.
function render(node) {
  if (node.type === "atom") return node.value;
  if (node.type === "prefix") return `${node.prefix}${render(node.value)}`;
  const open = node.type === "vector" ? "[" : "(";
  const close = node.type === "vector" ? "]" : ")";
  return `${open}${node.items.map(render).join(" ")}${close}`;
}

function mechanicalTranslation(source, id) {
  if (/^\s*\(load\s+"[^"]+"\)\s*$/s.test(source)) {
    return `(ns fdg.session (:refer-clojure :exclude [+ - * / = compare zero? ref partial numerator denominator]) (:require [emmy.env :refer :all] [fdg.compat :refer :all]))`;
  }
  if (/<<[^>]+>>/.test(source)) {
    return `(throw (js/Error. "${id}: resolve the Org noweb reference before running"))`;
  }
  try {
    return parseForms(source).map(form => render(transform(form))).join(" ");
  } catch (error) {
    let repaired = source.replace(/;[^\n]*$/gm, "").trimEnd();
    while (repaired.endsWith(")")) {
      repaired = repaired.slice(0, -1).trimEnd();
      try {
        return parseForms(repaired).map(form => render(transform(form))).join("\n\n");
      } catch (retryError) {
        if (!String(retryError.message).includes("unexpected token )")) break;
      }
    }
    return `(throw (js/Error. "${id}: mechanical conversion failed; port this block manually"))`;
  }
}

function leadingSchemeComments(source) {
  const comments = [];
  for (const line of source.split("\n")) {
    if (/^\s*$/.test(line) && comments.length === 0) continue;
    const match = line.match(/^\s*;+(?:\s?(.*))?$/);
    if (!match) break;
    comments.push(`;;${match[1] ? ` ${match[1]}` : ""}`);
  }
  return comments.join("\n");
}

function preserveLeadingSchemeComments(source, translated) {
  const comments = leadingSchemeComments(source);
  if (!comments || translated.startsWith(comments)) return translated;
  return `${comments}\n${translated}`;
}

function removeLeadingNamespace(source) {
  if (!/^\s*\(ns\s/.test(source)) return source;
  const start = source.indexOf("(");
  let depth = 0;
  let inString = false;
  let escaped = false;
  for (let i = start; i < source.length; i += 1) {
    const char = source[i];
    if (inString) {
      if (escaped) escaped = false;
      else if (char === "\\") escaped = true;
      else if (char === '"') inString = false;
      continue;
    }
    if (char === '"') inString = true;
    else if (char === "(") depth += 1;
    else if (char === ")" && --depth === 0) return source.slice(i + 1).trim();
  }
  return source;
}

function stripClojureComments(source) {
  return source
    .replace(/\(fn\s+\[\]\s+\(fn\s+\[n\]/g, "(fn [& vectors-over-map]\n        (fn [n]")
    .replace(/(?<![A-Za-z0-9_-]):(c|pi|G)\b/g, "'$1")
    .split("\n")
    .map(line => line.replace(/\s+;.*$/, ""))
    .filter(line => !/^\s*;/.test(line))
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function topLevelDefinitions(source) {
  const definitions = [];
  const code = stripClojureComments(stripCapturedResults(source));
  // Ports are inspected before zprint runs, so adjacent top-level forms may be
  // separated by spaces rather than newlines. Nested Scheme definitions have
  // already been converted to let/letfn and cannot be mistaken for these.
  for (const match of code.matchAll(/\(defn?\s+([^\s\[\]()]+)/g)) {
    definitions.push(match[1]);
  }
  return [...new Set(definitions)];
}

function topLevelForms(source) {
  const forms = [];
  let start = -1;
  let depth = 0;
  let inString = false;
  let escaped = false;
  let inComment = false;
  for (let i = 0; i < source.length; i += 1) {
    const char = source[i];
    if (inComment) {
      if (char === "\n") inComment = false;
      continue;
    }
    if (inString) {
      if (escaped) escaped = false;
      else if (char === "\\") escaped = true;
      else if (char === '"') inString = false;
      continue;
    }
    if (char === ";") {
      if (depth === 0 && start >= 0) {
        forms.push(source.slice(start, i).trim());
        start = -1;
      }
      inComment = true;
      continue;
    }
    if (depth === 0 && start < 0 && !/\s/.test(char)) start = i;
    if (char === '"') { inString = true; continue; }
    if (char === "(") {
      depth += 1;
    } else if (char === ")" && depth > 0) {
      depth -= 1;
      if (depth === 0 && start >= 0) {
        forms.push(source.slice(start, i + 1));
        start = -1;
      }
    } else if (depth === 0 && start >= 0 && /\s/.test(char)) {
      const atom = source.slice(start, i).trim();
      if (atom) forms.push(atom);
      start = -1;
    }
  }
  if (depth === 0 && start >= 0) {
    const atom = source.slice(start).trim();
    if (atom) forms.push(atom);
  }
  return forms;
}

function ensureExplicitSimplify(source, id) {
  if (!explicitSimplifyIds.has(id)) return source;
  const code = stripCapturedResults(source);
  const codeEnd = source.length;
  let start = -1;
  let finalStart = -1;
  let finalEnd = -1;
  let depth = 0;
  let inString = false;
  let escaped = false;
  let inComment = false;
  for (let i = 0; i < code.length; i += 1) {
    const char = code[i];
    if (inComment) { if (char === "\n") inComment = false; continue; }
    if (inString) {
      if (escaped) escaped = false;
      else if (char === "\\") escaped = true;
      else if (char === '"') inString = false;
      continue;
    }
    if (char === ";") { inComment = true; continue; }
    if (char === '"') { inString = true; continue; }
    if (char === "(") { if (depth === 0) start = i; depth += 1; }
    else if (char === ")" && depth > 0 && --depth === 0) {
      finalStart = start;
      finalEnd = i + 1;
    }
  }
  if (finalStart < 0) return source;
  const form = code.slice(finalStart, finalEnd);
  const wrappedDefinition = form.match(
    /^\(simplify\s+(\((?:def\w*|declare|define-coordinates|in-ns|ns)\b[\s\S]*\))\)$/,
  );
  if (wrappedDefinition) {
    const prefix = code.slice(0, finalStart).trimEnd().replace(
      /\n*;; scmutils simplified this result automatically; Emmy requires an explicit call\.$/,
      "",
    );
    const between = code.slice(finalEnd).trimEnd();
    return `${prefix}${prefix ? "\n" : ""}${wrappedDefinition[1]}${between ? `\n${between}` : ""}`;
  }
  if (/^\(simplify\b/.test(form)) return source;
  if (/^\((?:def\w*|declare|define-coordinates|in-ns|ns)\b/.test(form)) {
    return source;
  }
  let prefix = code.slice(0, finalStart).trimEnd();
  if (["chapter008-037", "chapter008-039", "chapter008-040"].includes(id)
      && prefix.endsWith("'")) {
    prefix = prefix.slice(0, -1).trimEnd();
  }
  const between = code.slice(finalEnd).trimEnd();
  const comment = ";; scmutils simplified this result automatically; Emmy requires an explicit call.";
  const rewritten = `${prefix}\n\n${comment}\n(simplify ${form})${between ? `\n${between}` : ""}`;
  return rewritten;
}

function ensureExplicitSimplifyAllResults(source, id) {
  if (!explicitSimplifyAllResultIds.has(id)) return source;
  let rewritten = stripCapturedResults(source);
  const forms = topLevelForms(rewritten);
  let cursor = rewritten.length;
  for (const form of [...forms].reverse()) {
    if (!form.startsWith("(") || /^\((?:def\w*|declare|define-coordinates|in-ns|ns|simplify)\b/.test(form)) continue;
    const at = rewritten.lastIndexOf(form, cursor);
    if (at < 0) throw new Error(`Could not locate result form for explicit simplify in ${id}`);
    rewritten = `${rewritten.slice(0, at)}(simplify ${form})${rewritten.slice(at + form.length)}`;
    cursor = at;
  }
  return rewritten;
}

function positionSimplifyExplanation(source, id) {
  if (!explicitSimplifyAllResultIds.has(id)) return source;
  const comment = ";; scmutils simplified this result automatically; Emmy requires an explicit call.";
  if (!source.includes(comment)) return source;
  const withoutComment = source.replace(`${comment}\n`, "").replace(`\n${comment}`, "");
  const firstSimplify = withoutComment.indexOf("(simplify ");
  if (firstSimplify < 0) return source;
  return `${withoutComment.slice(0, firstSimplify)}${comment}\n${withoutComment.slice(firstSimplify)}`;
}

function capturesResult(source) {
  const code = stripCapturedResults(source).trim();
  const finalList = topLevelForms(code).at(-1);
  // If text follows the final parenthesized form, that text is itself a
  // top-level expression (for example the bare `a-vector` in appendix A).
  if (!finalList || !code.endsWith(finalList)) return Boolean(code);
  return !/^\((?:def\w*|declare|define-coordinates|in-ns|ns)\b/.test(finalList);
}

function commentClojureSource(source) {
  return source.trimEnd().split("\n").map(line => `;; ${line}`).join("\n");
}

function applyReviewedCorrections(source, id) {
  if (id === "chapter002-016") {
    return `(x (R2-rect-chi-inverse (up 'x0 'y0)))

(x (R2-polar-chi-inverse (up 'r0 'theta0)))

(r (R2-polar-chi-inverse (up 'r0 'theta0)))

(r (R2-rect-chi-inverse (up 'x0 'y0)))

(theta (R2-rect-chi-inverse (up 'x0 'y0)))`;
  }
  if (id === "chapter009-013") {
    return `(defn L1 [state] (sqrt (square (velocity state))))

;; Emmy expands speed²^(3/2) into speed² sqrt(speed²). Cancel that common
;; denominator before simplifying the numerators, then put the compact common
;; denominator back so the displayed result remains readable.
(let [x (literal-function 'x)
      y (literal-function 'y)
      equations (((Lagrange-equations L1) (up x y)) 't)
      speed2 (+ (square ((D x) 't)) (square ((D y) 't)))
      denominator (* speed2 (sqrt speed2))]
  (/ (simplify (* equations denominator)) denominator))`;
  }
  if (id === "chapter007-040") {
    return `;; Prove that Emmy's generic Legendre transform agrees with the equivalent
;; closed form at a fully symbolic state. The following example differentiates
;; the closed form, avoiding a much slower differentiation through the generic
;; transform while retaining an exact symbolic check.
(def Hsphere
  (let [via-Legendre (Lagrangian->Hamiltonian Lsphere)
        closed-form
        (fn [[_ [theta _] [p-theta p-phi]]]
          (* (/ 1 2)
             (+ (square p-theta)
                (/ (square p-phi) (square (sin theta))))))
        symbolic-state (up 't (up 'theta 'phi) (down 'p_theta 'p_phi))
        residual
        (simplify
         (- (via-Legendre symbolic-state)
            (closed-form symbolic-state)))]
    (verified-zero closed-form (up residual))))`;
  }
  if (id === "chapter011-008") {
    return `;; In the formula for general-boost, rotation covariance reduces exactly
;; to preservation of beta's norm, preservation of beta dot x, and application
;; of the inverse rotation. Check those three identities symbolically for the
;; full Euler rotation instead of constructing the enormous expanded boost.
(let [beta (up 'bx 'by 'bz)
      x (up 'x 'y 'z)
      R (compose (rotate-x 'theta) (rotate-y 'phi) (rotate-z 'psi))
      R-inverse (compose (rotate-z (- 'psi)) (rotate-y (- 'phi)) (rotate-x (- 'theta)))
      checks (up (simplify (- (square (R beta)) (square beta)))
                 (simplify (- (dot-product (R beta) (R x))
                              (dot-product beta x)))
                 (simplify (- (R-inverse (R x)) x)))]
  (verified-zero (up 0 0 0 0) checks))`;
  }
  if (id === "appendix_c-001") {
    return `;; Simplify each tensor-linearity component before assembling the result;
;; simplifying the combined expansion creates a multi-megabyte intermediate.
(let [cs R3-rect
      u (literal-vector-field 'u-coord cs)
      v (literal-vector-field 'v-coord cs)
      w (literal-vector-field 'w-coord cs)
      x (literal-vector-field 'x-coord cs)
      omega (literal-oneform-field 'omega-coord cs)
      nu (literal-oneform-field 'nu-coord cs)
      f (literal-manifold-function 'f-coord cs)
      g (literal-manifold-function 'g-coord cs)
      nabla (covariant-derivative (literal-Cartan 'G cs))
      m (typical-point cs)
      F (Riemann nabla)]
  (mapr (fn [component] (freeze (simplify (component m))))
        (up (- (F (+ (* f omega) (* g nu)) u v w)
               (+ (* f (F omega u v w)) (* g (F nu u v w))))
            (- (F omega (+ (* f u) (* g x)) v w)
               (+ (* f (F omega u v w)) (* g (F omega x v w))))
            (- (F omega v (+ (* f u) (* g x)) w)
               (+ (* f (F omega v u w)) (* g (F omega v x w))))
            (- (F omega v w (+ (* f u) (* g x)))
               (+ (* f (F omega v w u)) (* g (F omega v w x)))))))`;
  }
  if (id === "appendix_c-004") {
    return `(defn F [nabla] (fn [omega u v] (omega ((nabla u) v))))

;; Emmy's generic symbolic chart conversion introduces inverse trigonometric
;; functions and square roots before simplifying them away. Verify the same
;; statement exactly, component by component. Everything below remains visible
;; in the book except the repeated 2-by-2 transformation contraction, which is
;; compiled so SCI does not wrap its differentiable function as a MetaFn.
;;
;; Exact compiled helper source used below:
${commentClojureSource(readFileSync(
  path.join(root, "emmy-runner", "src", "fdg", "slow_checks.cljs"),
  "utf8",
))}
(let [q (up 'theta 'phi)
      spherical-basis (coordinate-system->basis S2-spherical)
      stereographic-basis (coordinate-system->basis S2-stereographic)
      Gamma-for
      (fn [coordinate-system basis coordinates]
        (let [metric (coordinate-system->metric coordinate-system)
              christoffel (metric->Christoffel-2 metric basis)
              symbols (Christoffel->symbols christoffel)]
          (mapr simplify
                (symbols ((point coordinate-system) coordinates)))))
      Gamma-sphere
      (Gamma-for S2-spherical spherical-basis q)
      Gamma-stereo
      (fn [[x y]]
        (let [d (+ 1 (square x) (square y))
              minus-x (/ (* -2 x) d)
              plus-x (/ (* 2 x) d)
              minus-y (/ (* -2 y) d)
              plus-y (/ (* 2 y) d)]
          (down
           (down (up minus-x plus-y)
                 (up minus-y minus-x))
           (down (up minus-y minus-x)
                 (up plus-x minus-y)))))
      Gamma-derived
      (Gamma-for
       S2-stereographic
       stereographic-basis
       (up 'x 'y))
      residuals
      (fn [actual expected]
        (mapr
         (fn [a e] (freeze (simplify (- a e))))
         actual
         expected))
      derivation
      (residuals
       Gamma-derived
       (Gamma-stereo (up 'x 'y)))
      scale (/ (sin 'theta) (- 1 (cos 'theta)))
      xy
      (up (* scale (cos 'phi))
          (* scale (sin 'phi)))
      Gamma-transformed
      (transform-stereographic-Christoffel-to-spherical
       (Gamma-stereo xy)
       q)
      transformation
      (residuals Gamma-transformed Gamma-sphere)]
  (verified-zero
   0
   (up derivation transformation)))`;
  }
  if (id === "chapter008-019") {
    return `(for-each
 (fn [x]
   (for-each
    (fn [y]
      (print-expression
       (simplify
        ((((torsion-vector (covariant-derivative sphere-Cartan))
           x y)
          (literal-manifold-function 'f S2-spherical))
         ((point S2-spherical) (up 'theta0 'phi0))))))
    (list d:dtheta d:dphi)))
 (list d:dtheta d:dphi))`;
  }
  // Scheme permits successive definitions of the same procedure with
  // different arities. ClojureScript requires those arities in one defn.
  if (id === "chapter010-004") {
    return `(defn divergence
  ([metric orthonormal-basis]
   (let [star (Hodge-star metric orthonormal-basis)
         flat (lower metric)]
     (compose star d star flat)))
  ([Cartan]
   (fn [v]
     (fn [point]
       (let [basis (Cartan->basis Cartan)
             nabla (covariant-derivative Cartan)]
         (contract (fn [ei wi] ((wi ((nabla ei) v)) point)) basis))))))`;
  }
  // These final forms are printed results in the Scheme source, not another
  // expression for the reader to evaluate.
  if (id === "appendix_b-019") {
    const marker = "(down (((partial 0) g) x y)";
    const markerAt = source.lastIndexOf(marker);
    if (markerAt < 0) return source;
    const simplifyAt = source.lastIndexOf("(simplify", markerAt);
    const commentAt = source.lastIndexOf(";; scmutils", markerAt);
    const resultStart = commentAt >= 0 ? commentAt : simplifyAt >= 0 ? simplifyAt : markerAt;
    return `${source.slice(0, resultStart).trimEnd()}\n`;
  }
  if (id === "appendix_b-023") {
    const resultStart = source.indexOf("(up (* -1 (sin t))");
    return resultStart < 0 ? source : `${source.slice(0, resultStart).trimEnd()}\n`;
  }
  if (id === "appendix_a-013") {
    return source.replace("(* n (factorial (- n 1)))", "(* (bigint n) (factorial (- n 1)))");
  }
  if (id === "appendix_a-015") {
    if (source.includes("Keep pi symbolic so the common factor cancels")) return source;
    return source
      .replace("(defn f [radius]", "(defn f [radius]\n  ;; Keep pi symbolic so the common factor cancels before numerical evaluation.\n  (let [pi 'pi]\n   ")
      .replace(/\n\n\(f 3\)/, ")\n\n(f 3)");
  }
  return source;
}

function migratePort(source) {
  return rewriteNumericRatios(source)
    .replace(/\(\(legacy-frame-maker\s+base-frame-point\s+base-frame-chart\)\s+'([^\s()]+)\s+'([^\s()]+)\)/g,
             "(base-frame-maker '$1 '$2)")
    .replace(/\(pull\s+back\s+/g, "(pullback ")
    .replace(/\(pullback\s+function\s+/g, "(pullback-function ")
    .replace(/\(literal\s+function\s+/g, "(literal-function ")
    .replace(/\(fn\s+\[\]\s+\(apply([\s\S]*?)vectors-on-N\)\)/g,
             "(fn [& vectors-on-N]\n        (apply$1vectors-on-N))")
    .replace(/\(coordinate-system(?:-at| at)\s+'([^\s()]+)\s+'([^\s()]+)\s+([^\s()]+)\)/g,
             "(coordinate-system-at $3 :$1 :$2)")
    .replace(/\(fn\s+\[\]\s+\(fn\s+\[n\]/g, "(fn [& vectors-over-map]\n        (fn [n]")
    .replace(/(?<![A-Za-z0-9_-]):(c|pi|G)\b/g, "'$1")
    .replace(/\b1form/g, "oneform")
    .replace(/\bS(?:\^|↑)2-type\b/g, "S2-type")
    .replace(/\be(?:\^|↑)([xyz])\b/g, "e-$1")
    .replace(/\^([A-Za-z])/g, "↑$1")
    .replace(/\b(?:4tuple|fourtuple)/g, "four-tuple")
    .replace(/\b4-tuple/g, "four-tuple")
    .replace(/\b(?:4velocity|fourvelocity)/g, "four-velocity")
    .replace(/\b4-current/g, "four-current")
    .replace(/\b(add-v|v|va|vb)\/c(s)?\b/g, "$1:c$2")
    .replace(/\bs:map\/r\b/g, "mapr")
    .replace(/\bbase-legacy-frame-maker\b/g, "base-frame-maker")
    .replace(/\blegacy-legacy-frame-maker\b/g, "legacy-frame-maker")
    .replace(/(?<!legacy-)(?<!base-)\bframe-maker\b/g, "legacy-frame-maker")
    .replace(/\bv-on-m\b/g, "v-on-M")
    .replace(/\blist-ref\b/g, "nth")
    .replace(/\bvector-ref\b/g, "nth")
    .replace(/\bcar\b/g, "first")
    .replace(/\bcdr\b/g, "rest")
    .replace(/eq\?/g, "=")
    .replace(/\bmetric:invert\b/g, "invert");
}

function rewriteNumericRatios(source) {
  let output = "";
  let code = "";
  let inString = false;
  let escaped = false;
  let inComment = false;
  const flush = () => {
    output += code.replace(
      /(?<![A-Za-z0-9_:.↑^-])(-?\d+)\/(\d+)(?![A-Za-z0-9_:.↑/-])/g,
      "(/ $1 $2)",
    );
    code = "";
  };
  for (const char of source) {
    if (inComment) {
      output += char;
      if (char === "\n") inComment = false;
      continue;
    }
    if (inString) {
      output += char;
      if (escaped) escaped = false;
      else if (char === "\\") escaped = true;
      else if (char === '"') inString = false;
      continue;
    }
    if (char === ";") {
      flush();
      output += char;
      inComment = true;
    } else if (char === '"') {
      flush();
      output += char;
      inString = true;
    } else {
      code += char;
    }
  }
  flush();
  return output;
}

const previousManifestPath = path.join(publicDir, "blocks.json");
const previousPorts = new Map();
if (existsSync(previousManifestPath)) {
  for (const block of JSON.parse(readFileSync(previousManifestPath, "utf8"))) {
    const ordinal = String(block.ordinal).padStart(3, "0");
    const cljsPath = path.join(outputDir, block.chapter, `${ordinal}.cljs`);
    if (existsSync(cljsPath)) previousPorts.set(block.sourceHash, readFileSync(cljsPath, "utf8"));
  }
}

rmSync(outputDir, { recursive: true, force: true });
mkdirSync(outputDir, { recursive: true });
rmSync(publicDir, { recursive: true, force: true });
mkdirSync(publicDir, { recursive: true });

const manifest = [];
for (const file of files) {
  const stem = file.replace(/\.org$/, "");
  const typPath = path.join(typContentDir, `${stem}.typ`);
  if (!existsSync(typPath)) continue;
  const blocks = extractTypstSchemeBlocks(readFileSync(typPath, "utf8"), stem);
  const clojurePath = path.join(clojureDir, file);
  const upstream = existsSync(clojurePath)
    ? extractBlocks(expandNowebReferences(readFileSync(clojurePath, "utf8")), "clojure")
    : [];
  const chapterDir = path.join(outputDir, stem);
  const publicChapterDir = path.join(publicDir, stem);
  mkdirSync(chapterDir, { recursive: true });
  mkdirSync(publicChapterDir, { recursive: true });

  blocks.forEach((block, index) => {
    const number = block.number;
    const id = `${stem}-${number}`;
    const sourceHash = hash(block.code);
    const sourceFile = path.join(chapterDir, `${number}.scm`);
    const cljsFile = path.join(chapterDir, `${number}.cljs`);
    const hasUpstreamPort = upstream.length === blocks.length && upstream[index]?.code;
    writeFileSync(sourceFile, `${correctMalformedSchemeOutputs(block.code, id)}\n`);

    if (!force && previousPorts.has(sourceHash)
        && !previousPorts.get(sourceHash).includes("mechanical conversion failed")) {
      writeFileSync(
        cljsFile,
        preserveLeadingSchemeComments(block.code, migratePort(previousPorts.get(sourceHash))),
      );
    } else {
      const translated = hasUpstreamPort
        ? stripClojureComments(
            removeLeadingNamespace(upstream[index].code.replaceAll("sicmutils.env", "emmy.env"))
              .replaceAll("e/", ""),
          )
        : mechanicalTranslation(block.code, id);
      const withComments = preserveLeadingSchemeComments(block.code, translated);
      writeFileSync(cljsFile, withComments ? `${withComments}\n` : "");
    }

    // A cached port may predate a source-level correction. Apply the same
    // narrowly scoped cleanup here as well, so cache reuse can never restore
    // a displayed Scheme result as executable ClojureScript.
    const corrected = applyReviewedCorrections(
      correctMalformedSchemeOutputs(
        normalizeClojureBlockComments(readFileSync(cljsFile, "utf8")),
        id,
      )
        .replaceAll("basis->1-form-basis", "basis->oneform-basis")
        .replaceAll("s:sigma/r", "sumr")
        .replace(/'?pi\/(\d+)/g, "(/ pi $1)"),
      id,
    );
    const simplified = positionSimplifyExplanation(
      ensureExplicitSimplifyAllResults(ensureExplicitSimplify(corrected, id), id),
      id,
    );
    writeFileSync(cljsFile, preserveKnownCachedResult(simplified, id));
    const cljs = readFileSync(cljsFile, "utf8");
    const executable = stem !== "errata" && !nonExecutableIds.has(id)
      && !block.code.includes("series:for-each print-expression")
      && (stem !== "appendix_a" || !/(?:\.\.\.|operand-[\w-]+|formal-parameters|predicate(?:-[\w-]+)?|consequent(?:-[\w-]+)?|alternative|variable-[\w-]+|expression-[\w-]+|\bbody\b)/.test(block.code));
    const publicRelative = `${stem}/${number}.cljs`;
    writeFileSync(path.join(publicDir, publicRelative), cljs);
    manifest.push({
      id,
      chapter: stem,
      ordinal: Number(number),
      heading: block.heading,
      typLine: block.firstLine,
      sourceHash,
      backgroundSetup: /^\s*\(load\s+"[^"]+"\)\s*$/s.test(block.code),
      prerequisiteIds: prerequisiteIds.get(id) ?? [],
      definitions: topLevelDefinitions(cljs),
      capturesResult: capturesResult(cljs),
      executable,
      forms: topLevelForms(cljs).map(code => ({
        code,
        capturesResult: !/^\((?:def\w*|declare|define-coordinates|in-ns|ns)\b/.test(code),
      })),
      codePath: `generated/${publicRelative}`,
      sourcePath: path.relative(root, typPath),
    });
  });
}

execFileSync(
  "clojure",
  ["-M:format-emmy", outputDir, publicDir],
  { cwd: root, stdio: "inherit" },
);
for (const block of manifest) {
  const ordinal = String(block.ordinal).padStart(3, "0");
  const formatted = readFileSync(path.join(outputDir, block.chapter, `${ordinal}.cljs`), "utf8");
  block.forms = topLevelForms(formatted).map(code => ({
    code,
    capturesResult: !/^\((?:def\w*|declare|define-coordinates|in-ns|ns)\b/.test(code),
  }));
}
writeFileSync(path.join(publicDir, "blocks.json"), `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Prepared ${manifest.length} Emmy blocks in ${path.relative(root, outputDir)}.`);
console.log(`${manifest.filter(x => x.chapter === "chapter001").length} blocks use the upstream Chapter 1 port.`);
console.log(`${manifest.filter(x => x.chapter !== "chapter001").length} blocks need semantic review.`);
