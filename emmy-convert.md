# Porting the FDG examples to Emmy

The goal is an executable ClojureScript edition of every substantive Scheme
example in *Functional Differential Geometry*. Emmy is a reimplementation of
scmutils, not a Scheme interpreter, so success means preserving the mathematics
and observable results rather than preserving source spelling or printed forms.

The vendored Org files under `fdg-book/scheme/org/` are immutable upstream
sources. Never fix or annotate them. Source repairs remain the responsibility of
`scripts/convert-org-to-typst.mjs`; Emmy-specific work belongs under `emmy/`.

## Generated block workspace

Run:

```sh
node scripts/convert-org-to-typst.mjs
node scripts/convert-scheme-to-emmy.mjs
```

The Emmy converter runs zprint 1.3.0 over every editable and browser-served
`.cljs` block. The formatter is pinned by the root `deps.edn`; its 120-column
output is the only stage allowed to make line-breaking decisions. The mechanical
Scheme translator emits flat forms and does not insert layout newlines of its
own. Captured `;; =>` comments are deliberately excluded from reformatting. To
format or check files directly, run:

```sh
clojure -M:format-emmy emmy/blocks emmy-runner/public/generated
clojure -M:format-emmy --check emmy/blocks emmy-runner/public/generated
```

The second command extracts the Scheme blocks into stable, chapter-scoped pairs:

```text
emmy/blocks/chapter003/012.scm   immutable comparison snapshot
emmy/blocks/chapter003/012.cljs  editable Emmy port
```

It also creates `emmy-runner/public/generated/manifest.json`, which records the
chapter, section, original Org line, source hash, and browser URL for each
block. Existing `.cljs` files are preserved. `--force` deliberately
regenerates them and should only be used when discarding manual work is intended.

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

The files themselves are the conversion state. A `.scm` file is the clean
upstream snapshot and its neighboring `.cljs` file is the clean working port.
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
5. Correct syntax, API names, destructuring, simplification boundaries, and
   expected values in the `.cljs` file only.
6. If a reusable mismatch appears, add the smallest justified adapter to
   `fdg.compat` and document it there.
7. Keep the successful port in its `.cljs` file and rerun the entire chapter
   from a fresh SCI context.
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

Capture mode runs each chapter from a fresh context and stages every updated
comment in memory. Only after the entire requested run succeeds does it replace
the previous `;; =>` comments in `emmy/blocks/` and the browser's served copies;
a failure leaves all files unchanged. Results longer than 20,000 characters retain their first 200
characters followed by an explicit truncation marker and total size, instead of
making a source block megabytes long; inspect those values in the web runner
when needed. A normal smoke invocation verifies the examples without writing.

`make emmy-blocks` performs conversion, compiles the smoke runner, captures all
results transactionally, and runs the consistency checks. It is the complete
start-to-finish build for the Emmy ports.

## Running the browser debugger

First regenerate the blocks, then:

```sh
cd emmy-runner
clojure -M:shadow-cljs watch app
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
