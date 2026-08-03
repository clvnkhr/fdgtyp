# Text to adapt for the ClojureScript and combined editions

This is the post-appendix version of `cljs-text-edits.md`. It describes the
current generated book rather than the earlier plan to replace the Scheme
appendices in place.

The Org sources remain immutable. Files in `typ/content/` are generated and are
useful for locating text, but durable wording changes should be implemented in
`scripts/convert-org-to-typst.mjs`, in a template under `typ/templates/`, or in
an edition-aware helper under `typ/fdg-lib/`.

Line numbers below describe the current generated files and will move. Section
labels, code-block identifiers, and quoted opening phrases are the durable
identifiers.

## Current edition structure

The edition value is `"scheme"`, `"clojure"`, or `"both"`.

- Chapters 1–11, the Prologue, and Errata use `#fdg-code-block(id)`.
  - Scheme renders the corresponding `.scm` block.
  - ClojureScript renders the corresponding `.cljs` block.
  - Both renders the Scheme and ClojureScript blocks together.
- Appendices A–C remain the original Scheme appendices and deliberately use
  `#fdg-scheme-code-block`.
- Appendices D–F are generated ClojureScript counterparts:
  - D: ClojureScript, derived from Appendix A.
  - E: Our Notation in Emmy, derived from Appendix B.
  - F: Tensors in Emmy, derived from Appendix C.
- Appendix G documents the Emmy runner and is already ClojureScript-specific.
- The ClojureScript preface and Appendices D–G are included only when the
  edition is `"clojure"` or `"both"`.

Consequently, the work remaining is primarily prose and inline-code adaptation.
The displayed block selection itself is already edition-aware.

## How to add conditional prose

`fdg-edition-select` is exported by `typ/lib.typ` and reads the contextual
edition state established by `fdg-book`.

### Replace Scheme wording in ClojureScript and both editions

Use one revised wording for both non-Scheme editions. Supplying `both`
explicitly prevents the default behavior from concatenating the Scheme and
ClojureScript alternatives:

```typ
#fdg-edition-select(
  scheme: [The programs in this book are written in Scheme.],
  clojure: [The programs in this edition are written in ClojureScript using Emmy.],
  both: [The programs in this edition are presented in Scheme and ClojureScript using Emmy.],
)
```

If the same wording is correct for ClojureScript and both:

```typ
#let emmy-wording = [The translated examples use ClojureScript and Emmy.]
#fdg-edition-select(
  scheme: none,
  clojure: emmy-wording,
  both: emmy-wording,
)
```

### Add a paragraph only to ClojureScript and both editions

```typ
#let cljs-addition = [
  Emmy evaluates this expression with generic arithmetic.
]
#fdg-edition-select(
  scheme: none,
  clojure: cljs-addition,
  both: cljs-addition,
)
```

### Add a footnote only to ClojureScript and both editions

Keep the `footnote` inside the selected content so the Scheme edition neither
prints nor numbers it:

```typ
#let cljs-footnote = [
  #footnote[In Emmy this operation is provided by #raw(lang: "clojure", "mapr").]
]
#fdg-edition-select(
  scheme: none,
  clojure: cljs-footnote,
  both: cljs-footnote,
)
```

Do not put `#footnote[...]` around an edition selector that can return `none`;
that would leave an empty numbered footnote in the Scheme edition.

### Replace an inline identifier

Until an edition-aware inline-code helper is added, select the complete `raw`
element, including its language:

```typ
#fdg-edition-select(
  scheme: raw(lang: "scheme", "s:map/r"),
  clojure: raw(lang: "clojure", "mapr"),
  both: [#raw(lang: "scheme", "s:map/r") / #raw(lang: "clojure", "mapr")],
)
```

The combined form should usually show both spellings only when the difference
is itself useful. In ordinary explanatory prose, prefer an edition-neutral name
or one shared spelling rather than making every sentence bilingual.

## Edition-aware appendix references

Shared chapters currently inherit references to the original Scheme appendices.
Adapting the surrounding sentence is not sufficient: references must also lead
CLJS readers to the corresponding CLJS-flavoured appendix.

Use this mapping:

| Subject | Scheme target | ClojureScript target |
| --- | --- | --- |
| Language introduction | Appendix A, `@chap-appendix-a` | Appendix D, `@chap-appendix-d` |
| Mathematical notation and runtime conventions | Appendix B, `@chap-appendix-b` | Appendix E, `@chap-appendix-e` |
| Tensor examples | Appendix C, `@chap-appendix-c` | Appendix F, `@chap-appendix-f` |
| Running and checking examples | no direct Scheme counterpart | Appendix G, `@chap-appendix-g` |

Branch both the wording and the reference:

```typ
#fdg-edition-select(
  scheme: [See Appendix @chap-appendix-a.],
  clojure: [See Appendix @chap-appendix-d.],
  both: [
    See Appendix @chap-appendix-a for Scheme and
    Appendix @chap-appendix-d for ClojureScript.
  ],
)
```

For the combined edition, choose deliberately between:

- referencing both appendices when the reader may be looking at either source
  form;
- referencing only D–G when the note is specifically about the translated
  ClojureScript/Emmy implementation;
- referencing only A–C when discussing the original Scheme text historically.

Do not mechanically rewrite every `@chap-appendix-a`, `-b`, or `-c`. First
classify whether the reference is instructional, implementation-specific, or
historical. Add regression checks ensuring that CLJS instructional prose does
not point only to A–C.

## Durable implementation strategy

Generated content imports a fixed helper list. If prose overlays use
`fdg-edition-select`, add it to the generated import in
`scripts/convert-org-to-typst.mjs`; do not hand-edit every generated import.

Prefer converter transformations keyed by a durable source phrase or a section
label. Each transformation should:

1. require exactly one match;
2. fail conversion if the source phrase disappears or changes unexpectedly;
3. emit the complete Typst edition branch;
4. be covered by `scripts/assert-typst-regressions.mjs`.

Do not perform a global Scheme-to-ClojureScript word replacement. Historical
claims, mathematical uses of “procedure,” and descriptions of the original
scmutils implementation must remain distinguishable from instructions about
the active edition.

## Highest-priority shared-text edits

These passages occur in shared chapters, so their current Scheme-only wording
appears beside ClojureScript blocks in the ClojureScript and combined editions.

### Prologue

- Around line 42, the functional-derivative footnote currently points to
  Appendix B, section B.4. Its ClojureScript target should be Appendix E,
  section E.4; branch both the chapter and page target.
- `typ/content/prologue.typ:62`, footnote beginning “The programs in this book
  are written in Scheme, a dialect of Lisp.”
  - Scheme: preserve the original footnote and references to Appendices A and B.
  - ClojureScript: describe ClojureScript, Emmy, Appendix D, Appendix E, and the
    runner in Appendix G.
  - Both: explain that both source forms are printed; refer to A–B for Scheme
    and D–G for ClojureScript/Emmy.
- Around lines 71–81, decide whether “procedure” is mathematical vocabulary or
  a language claim. Keep the term where the original abstraction is being
  discussed; use “function” only where the sentence describes ClojureScript.
- Inline examples in this passage must select translated syntax, not merely
  change their syntax-highlighting language.
- Around line 132, “See Appendices A and B” should point to D and E in the
  ClojureScript edition and name both pairs in the combined edition.

### Chapter 1

- Around line 25, the functional-notation footnote should point to Appendix E
  rather than Appendix B in the ClojureScript edition.
- Around line 31, replace the footnote directing all readers to the informal
  Scheme appendix:
  - Scheme → Appendix A.
  - ClojureScript → Appendix D.
  - Both → both appendices.
- Around lines 129–131, adapt the definition example and the explanation of
  quoted symbols. Its notation reference should point to Appendix E in the
  ClojureScript edition rather than Appendix B.
- Around lines 163–170, verify quoted-symbol, point, chart, and
  `literal-manifold-map` spellings against the emitted `.cljs` block, and
  branch any Appendix B references to Appendix E.
- Around lines 222–226, replace the inline `define-coordinates` setup with the
  actual Emmy setup used by the translated listing.

### Chapter 6

- Around line 101, the footnote containing
  `(define-coordinates t R1-rect)` must select the ClojureScript/Emmy form in
  ClojureScript and both editions.
- Audit nearby prose uses of “procedure” only where they assert a property of
  the implementation rather than name the mathematical procedure.

### Chapter 7

- Around line 600, branch `s:map/r` to Emmy’s `mapr` and explain any semantic
  difference that matters for the example.
- Audit prose mentions of `F->directional-derivative`, `F->C`,
  `procedure->1form-field`, and other identifiers against the corresponding
  `.cljs` blocks.
- Around line 959, the `F->C` footnote should use edition-appropriate
  terminology and highlighting even if the identifier is unchanged.

### Chapter 8

- Around line 607, change “most easily described as a Scheme procedure” to an
  edition-aware description.
- Around line 666, adapt the Bianchi footnote’s “Scheme programs.”
- Earlier prose describing `Riemann-curvature` and related returned procedures
  should be reviewed for function terminology, but should not be changed
  mechanically.

## ClojureScript appendix cleanup

The old guide called for replacing Appendices A–C. That structural work is now
complete through Appendices D–F. The remaining task is to make D–F genuine
ClojureScript/Emmy prose rather than mechanically translated copies.

### Appendix D: ClojureScript

Appendix D already uses the `.cljs` examples and has a ClojureScript title. It
still needs a coherent language tutorial rewrite:

- procedure calls → function calls where describing ClojureScript;
- `lambda` → `fn`, including vector parameter lists;
- `define` and definition sugar → `def`, `defn`, `fn`, `let`, and `letfn`;
- named `let` → the actual `loop`/`recur` or `letfn` form used by the example;
- `cond`/`else` → ClojureScript `cond`/`:else`;
- lists, seqs, vectors, `cons`, indexed lookup, selectors, and the empty list;
- symbols, quotation, equality, `true`, `false`, and `nil`;
- the distinction between ClojureScript collections and Emmy structures.

The D.9 cheat sheet now exists and should be used to keep terminology and
examples consistent with the tutorial sections.

### Appendix E: Our Notation in Emmy

Appendix E already uses `.cljs` blocks, but several copied claims remain
Scheme- or scmutils-specific:

- opening discussion formerly saying “In Scheme we can write this as”;
- default printer and automatic simplification behavior;
- `print-expression` versus the runner’s result capture;
- literal-function signature syntax;
- tuple constructors, `component`, `ref`, and zero-based selectors;
- the stale sentence “Scheme comes in handy here” around current line 327;
- prose about explicit choices and multi-argument functions;
- remaining “procedure” terminology where the subject is a ClojureScript
  function.

Check every semantic claim against Emmy and Appendix G rather than applying
another lexical substitution.

### Appendix F: Tensors in Emmy

Appendix F already renders the translated tensor examples. Around current line
83, change the copied description of `tensor-test` from a “procedure” to an
Emmy/ClojureScript function. Audit the remainder for claims about evaluation,
simplification, or data representation that differ from Appendix C.

### Appendix G: Running the Emmy Examples

Appendix G is authored as ClojureScript-specific text and should not receive
Scheme/CLJS sentence substitutions. Keep it synchronized with:

- `emmy-runner/src/fdg/runner.cljs`;
- `emmy-runner/src/fdg/smoke.cljs`;
- `scripts/run-emmy-smoke.mjs`;
- the current expensive symbolic rewrites in
  `scripts/convert-scheme-to-emmy.mjs`.

## Errata

Errata describes both historical book behavior and current executable behavior,
so it needs case-by-case branches:

- References to original scmutils behavior should remain in the Scheme edition.
- ClojureScript and both editions may add an Emmy result or compatibility note;
  they should not silently rewrite the historical report.
- The mention of `rules.scm` is specific to scmutils. Add an Emmy note rather
  than pretending that Emmy has the same configuration file.
- The phrase “the Clojure port” near current line 273 should name Emmy.
- Inline Errata code already uses `fdg-code-block`, but surrounding inline
  `#raw(lang:"scheme", ...)` fragments are not edition-aware and must be audited.

## Historical mentions to preserve

- The acknowledgements in `typ/content/preface.typ` describe the Scheme
  community, the creation of scmutils, and the authors’ historical work. Keep
  them in all editions. A ClojureScript-only editorial footnote may be added,
  but the source acknowledgement should not be rewritten.
- Bibliography entries for Scheme, SICP, and scmutils remain valid.
- Mentions of Lisp history, lambda calculus, or the original implementation
  remain when historically relevant.
- Appendices A–C intentionally remain Scheme material in the ClojureScript and
  combined books; do not edition-branch their prose. Their ClojureScript
  counterparts are D–F.

## Mechanical work still required

- Add `fdg-edition-select` to the standard generated content import before
  emitting overlays that call it.
- Add an edition-aware inline-code helper if repeated raw-code branches become
  noisy. It must select both spelling and syntax language; changing only
  `lang:` is insufficient.
- Ensure conditional footnotes are absent, not empty, in the Scheme edition.
- Add regression assertions for the presence of each branch and the absence of
  leaked Scheme-only wording in ClojureScript-specific appendices.
- Audit shared `@chap-appendix-a`, `@chap-appendix-b`, and
  `@chap-appendix-c` references. Instructional references in the ClojureScript
  edition should resolve to D, E, and F respectively; combined-edition wording
  should identify both targets when both are relevant.
- Do not edit `typ/manifest.typ` to rename Appendix A. The manifest now
  correctly lists A–C as Scheme appendices and D–G as the added ClojureScript
  material.

## Validation after each batch

Regenerate once the converter changes are in place:

```sh
make raw
```

Then compile all three editions without rerunning the Emmy pipeline:

```sh
make just-pdf
```

Check at least:

- Scheme contains no ClojureScript-only paragraph or empty conditional
  footnote.
- ClojureScript uses the revised prose and `.cljs` listings.
- Both uses combined wording where supplied and does not duplicate replacement
  paragraphs accidentally.
- Cross-references point to A–C for Scheme material and D–G for the
  ClojureScript/Emmy counterparts.
- Footnote numbering remains continuous in each edition independently.
