# Porting the FDG examples to Emmy

This document covers block-level porting policy. For artifact ownership,
isolated-build behavior, runner data flow, validation, and deployment, see
[ARCHITECTURE.md](ARCHITECTURE.md).

The goal is an executable ClojureScript edition of every substantive Scheme
example in *Functional Differential Geometry*. Emmy is a reimplementation of
scmutils, not a Scheme interpreter, so success means preserving the mathematics
and observable results rather than preserving source spelling or printed forms.

The vendored Org files under `fdg-book/scheme/org/` are immutable upstream
sources. Never fix or annotate them. Source repairs remain the responsibility of
`scripts/convert-org-to-typst.mjs`; durable Emmy-specific work belongs in
`scripts/convert-scheme-to-emmy.mjs` or, for reusable API compatibility, under
`emmy-runner/src/`. Root `codeblocks/` is a generated mirror and is not copied
into a normal isolated Make run.

## Generated block workspace

The supported workflow is `make emmy-convert` or `make emmy-refresh`, which
runs in an isolated workspace and promotes successful output. The direct
commands below are low-level converter development tools; they write disposable
generated mirrors in the source checkout and do not by themselves update the
promoted build:

To regenerate the editable block workspace, run:

```sh
node scripts/convert-org-to-typst.mjs
node scripts/convert-scheme-to-emmy.mjs
```

The Emmy converter runs zprint 1.3.0 over every editable and browser-served
`.cljs` block. The formatter is pinned by the root `deps.edn`; its 100-column
output is the only stage allowed to make line-breaking decisions. The mechanical
Scheme translator emits flat forms and does not insert layout newlines of its
own. Captured `;; =>` comments are deliberately excluded from reformatting. To
format or check files directly, run:

```sh
clojure -M:format-emmy codeblocks emmy-runner/public/generated
clojure -M:format-emmy --check codeblocks emmy-runner/public/generated
```

The converter extracts the Scheme blocks into stable, chapter-scoped pairs:

```text
codeblocks/chapter003/012.scm   immutable comparison snapshot
codeblocks/chapter003/012.cljs  editable Emmy port
```

It also creates `emmy-runner/public/generated/blocks.json`, which records the
chapter, section, original Org line, source hash, and browser URL for each
block. Existing `.cljs` files are preserved when their Scheme source hash is
unchanged. `--force` deliberately regenerates them and should only be used when
discarding manual work is intended.

Chapter 1 is special: the upstream `mentat-collective/fdg-book` repository
already contains 22 corresponding Clojure examples. The extractor uses these as
the initial ports. They are valuable precedents, but still need
testing against current Emmy and conversion from Clojure-only constructs if a
block is not accepted by ClojureScript.

For the remaining chapters, the script performs conservative syntactic changes
such as `define` to `def`/`defn`, `lambda` to `fn`, and Scheme binding lists to
Clojure vectors. Parseable-looking output is not evidence that a block is
mathematically correct.

Numeric Scheme ratios are translated to explicit Emmy division forms (`4/3`
becomes `(/ 4 3)`). ClojureScript otherwise reads a ratio literal into an
inexact JavaScript number before Emmy's generic arithmetic can see it.

Two Appendix A demonstrations need narrower numeric compatibility repairs. The
book's recursive factorial promotes its multiplicand with `bigint`, since Scheme
integers grow automatically while JavaScript numbers do not. The sphere example
keeps its common `pi` factor symbolic and explicitly simplifies the result, so
the factor cancels before Emmy's numerical value of pi introduces rounding.

Within a successful build workspace, a `.scm` file is the clean generated-Typst
snapshot and its neighboring `.cljs` file is the preserved working port. The
next isolated build layers those promoted artifacts before conversion,
allowing unchanged-source ports to survive. A durable correction should still
be encoded as a reviewed converter rule (or a reusable compatibility helper),
because the root generated mirror is disposable.

The generated Typst files are now the immediate source of the `.scm` files:
the Org converter retains each repaired Scheme block in a non-rendered Typst
source comment, and `convert-scheme-to-emmy.mjs` extracts `codeblocks/` from
those comments. The rendered book reads the neighboring files rather than an
embedded copy. Scheme is the default edition; build the ClojureScript edition
with `make cljs-draft` or `make cljs-book`. `make draft` and `make book`
produce Scheme, ClojureScript, and combined-edition PDFs. The centralized Typst
edition selector accepts `code=both` for the combined edition.
Do not add generated headers, status comments, or bookkeeping comments. Comments
that introduce the source code are preserved from Scheme. Trailing `;; =>`
comments are reserved for output produced by running that exact ClojureScript
block under Emmy and retained for use in the book. Never copy the historical
Scheme result into the `.cljs` file.

## `fdg.compat`

Recurring differences between scmutils and Emmy belong in
`emmy-runner/src/fdg/compat.cljs`. Use this namespace for small, documented
compatibility adapters when all of the following are true:

1. the same difference occurs, or is expected to occur, in multiple examples;
2. the adapter has one clear scmutils meaning;
3. implementing it does not hide a mathematical difference or an Emmy defect.

Do not turn `fdg.compat` into a copy of scmutils. Prefer Emmy's public API and
idiomatic structures. A one-off spelling change stays in its block. A missing
general mathematical operation should become an Emmy issue or contribution,
with only a temporary compatibility implementation here.

## Sequential conversion pipeline

Work in dependency order: prologue, Chapters 1 through 11, then Appendices B and
C. Appendix A describes Scheme and normally needs editorial treatment rather
than executable conversion.

For each chapter:

1. Regenerate the Typst book and block manifest.
2. Open the runner and select the next block that has not been manually checked.
3. Compare its `.scm` snapshot, the surrounding book text, and its `.cljs` port.
4. Run all preceding blocks in the chapter, then the selected block. Examples
   often depend on earlier definitions.
5. Prototype syntax, API, destructuring, simplification, and expected-value
   changes against the generated `.cljs` block, then encode the durable fix in
   the converter or compatibility layer.
6. If a reusable mismatch appears, add the smallest justified adapter to
   `fdg.compat` and document it there.
7. Regenerate or retain the successful `.cljs` port from its authored rule, then
   rerun the entire chapter from a fresh SCI context.
8. Before completing a chapter, compare important results with scmutils. Accept
   algebraically equivalent forms; add explicit simplification only when the
   surrounding text depends on the normalized result.

A chapter is complete when every intended executable `.cljs` block succeeds in
a fresh sequential run, deliberate non-executable pseudocode has been removed
from the runnable set, and any compatibility additions have focused tests.

The full-manifest smoke also simplifies and freezes selected results, then
checks them against their counterparts in Emmy's `test/emmy/fdg` suite. The
current oracle covers the direct Chapter 1 and Chapter 2 correspondences. Add
further entries to `emmy-runner/src/fdg/fdg_oracle.cljs` only where a generated
book block has a clear counterpart in Emmy's suite; execution-only coverage
remains useful but is not a mathematical regression test. The Chapter 1
expectations record ClojureScript's numeric `0.5` in place of the suite's quoted
symbolic `(/ 1 2)`; this is an explicit language-level adaptation, not a
mathematical discrepancy.

To refresh trailing return-value comments for every block whose final top-level
form is an expression, compile the smoke runner and invoke its explicit capture
mode. A block may define helpers first; the final expression is still captured:

```sh
cd emmy-runner
clojure -M:shadow-cljs compile smoke
node target/smoke.js --capture-results
node target/smoke.js --capture-results --chapter=chapter008
```

Capture mode runs each requested chapter from a fresh context and stages every
updated comment in memory. Only a successful chapter run replaces its previous
`;; =>` comments in `codeblocks/` and the browser's served copies. Results
longer than 20,000 characters retain their first 200
characters followed by an explicit truncation marker and total size, instead of
making a source block megabytes long; inspect those values in the web runner
when needed. A normal smoke invocation verifies the examples without writing.

The Make targets separate mutation from checking:

```sh
make emmy-convert  # regenerate blocks and manifest (writes)
make smoke-emmy    # run existing blocks without changing result comments
make capture-emmy  # refresh result comments (the smoke default; writes)
make emmy-check    # compile, smoke-test, and validate existing generated state
make emmy-refresh  # convert, capture, format, and validate (writes)
```

`make emmy-blocks` remains an alias for `make emmy-refresh`. `make test-emmy`
is a read-only check of the existing generated state. Direct use of
`scripts/run-emmy-smoke.mjs` captures results by default; pass
`--no-capture-results` only when a read-only run is intended.

## Running the browser debugger

After `make emmy-refresh` (or when checked-in generated blocks are current),
start the runner with:

```sh
make runner-dev
```

Open <http://localhost:8080>. The runner evaluates code with SCI plus Emmy. The
primary action resets the session and runs every earlier block in the chapter
before the selected block. This is the reliable test for examples with
accumulated definitions. A secondary action evaluates only the editor contents
in the current session for quick iteration.

The first build downloads ClojureScript, Shadow CLJS, SCI, and Emmy. Pin changes
in `emmy-runner/deps.edn` deliberately: a dependency update requires rerunning
all completed chapters because symbolic normalization and supported operations
may change.
