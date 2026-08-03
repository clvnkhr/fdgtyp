# Text to adapt for the ClojureScript edition

This inventory refers to the generated files in `typ/content/`. The Org files
remain immutable. ClojureScript wording should be supplied by edition-aware
overlays in the Org-to-Typst converter. Line numbers will move when the book is
regenerated, so section labels and quoted phrases are the durable identifiers.

## Whole-section replacement

### Appendix A: Scheme

All of `typ/content/appendix_a.typ` is a Scheme language tutorial and needs a
ClojureScript counterpart, including its title, opening IEEE quotation,
citations, examples, outputs, and footnotes.

- Lines 5–14: title, Scheme quotation, IEEE/SICP references, and introduction.
- Section A.1, lines 16–35: procedure-call syntax and Scheme output convention.
- Section A.2, lines 37–60: `lambda` syntax; ClojureScript needs `fn` and vector
  parameter lists.
- Section A.3, lines 62–115: `define`, procedure-definition sugar, higher-order
  procedures, and nested Scheme definitions; use `def`, `defn`, `fn`, and the
  appropriate lexical form.
- Section A.4, lines 117–154: `cond`, `else`, and `if`; syntax and general-form
  templates need ClojureScript forms (`:else` in particular).
- Section A.5, lines 156–171: recursive procedure definitions.
- Section A.6, lines 173–213: `let` and named `let`; named `let` needs a
  ClojureScript loop/recur or `letfn` explanation.
- Section A.7, lines 215–282: Scheme lists, pairs, `list-ref`, `cons`, `car`,
  `cdr`, Scheme vectors, `vector-ref`, predicates, the empty list, and structural
  sharing. This needs a careful ClojureScript collections rewrite, not merely
  renamed functions.
- Section A.8, lines 284–303: Scheme symbols, quotation, `eq?`, `#t`, and `#f`;
  replace with ClojureScript symbols, quote, equality, `true`, and `false`.

The Appendix A cross-reference label should remain stable so other chapters can
refer to the edition-specific language appendix.

## Paragraph-level replacements

### Prologue

- `typ/content/prologue.typ:62`: the long footnote beginning “The programs in
  this book are written in Scheme, a dialect of Lisp.” Replace the language,
  rationale, Appendix A/B descriptions, formal-language reference, software
  source, and runner instructions with ClojureScript/Emmy information.
- Lines 71–81: the repeated term “procedure” is understandable but should become
  “function” in the CLJS edition. Inline examples must select their CLJS forms.

### Chapter 1

- `typ/content/chapter001.typ:31`: replace the footnote directing readers to an
  “informal description of the Scheme programming language” with the CLJS
  appendix wording.
- Lines 129–131: the inline `(define m ...)` example and the explanation of
  quoted symbols require the generated CLJS spellings.
- Lines 163–170: quoted-symbol and literal-map examples need CLJS spellings.
- Lines 222–226: the inline `define-coordinates` setup and names such as `d/dt`
  must match the actual Emmy compatibility API used by the generated block.

### Chapter 6

- `typ/content/chapter006.typ:101`: the inline
  `(define-coordinates t R1-rect)` setup must use the CLJS form.

### Chapter 7

- `typ/content/chapter007.typ:600`: `s:map/r` is scmutils-specific. The CLJS
  edition should name and explain the Emmy equivalent (`mapr`).
- Any prose naming `F->directional-derivative`, `F->C`, or other identifiers
  should display the identifier actually emitted by the transpiler if it differs.

### Chapter 8

- `typ/content/chapter008.typ:607`: change “most easily described as a Scheme
  procedure” to a ClojureScript/Emmy function.
- `typ/content/chapter008.typ:666`: change “Scheme programs” in the Bianchi
  footnote to “ClojureScript programs” or edition-neutral “programs.”

### Appendix B: The Scmutils/Emmy language of mathematics

Appendix B is mathematically reusable, but the following prose is explicitly
Scheme- or runtime-specific and needs an edition branch:

- Lines 18–25: one-to-one correspondence with Scheme, IEEE citation, and “In
  Scheme we can write this as.” Introduce ClojureScript plus Emmy instead.
- Lines 37–69: “procedure” terminology can become “function”; examples must use
  CLJS definitions.
- Lines 73–81: Scheme-symbol defaults, quote syntax, default printer,
  `print-expression`, and automatic simplification. Emmy does not always simplify
  at the same point, so this needs semantic rewriting rather than substitution.
- Lines 89–112: literal-function construction and function-signature syntax;
  verify quoted type expressions against the actual Emmy examples.
- Lines 125–180: tuple constructors and selectors. Keep Emmy concepts but use
  the CLJS identifiers emitted in the blocks.
- Line 139: claims about caret and underline characters being Scheme symbol
  constituents; rewrite for ClojureScript reader-valid symbols and the names we
  normalize during conversion.
- Line 145: “In Scheme this is written.”
- Lines 237–277: “The Scheme procedure ... `D`” and “constructed and used in
  Scheme.” Replace Scheme terminology while retaining the Emmy operator model.
- Line 328: “Scheme comes in handy here.”
- Line 369: “In Scheme we must make explicit choices.”
- Line 401: “In Scheme we can write.”
- Line 432: “In Scheme:”.

### Appendix C

- `typ/content/appendix_c.typ:84`: `tensor-test`, `T`, and “procedure” should be
  rendered using the CLJS edition and called a function.

## Errata text

The Errata chapter discusses the original implementation and therefore needs
case-by-case treatment, not a global Scheme-to-Emmy replacement.

- Lines 10, 73, 152, and 162 explicitly discuss `scmutils`; retain the original
  statement in the Scheme edition and add/replace it with the verified Emmy
  behavior in the CLJS edition.
- Line 162 also names `rules.scm`, which is not an Emmy configuration file.
- Line 273 already compares scmutils with “the Clojure port”; update that phrase
  to Emmy and preserve the comparison.
- All inline code throughout Errata (roughly lines 7–275) must select CLJS syntax
  in the CLJS edition even where the surrounding prose is language-neutral.

## Historical mentions that should remain

- `typ/content/preface.typ:13`: acknowledgements of the Scheme community,
  Scheme programming, and the history of Scmutils are historical source text,
  not instructions for the reader. Preserve them in both editions, optionally
  adding a short editorial note about the Emmy port.
- Bibliography entries for the IEEE Scheme standard, SICP, and original Scmutils
  material remain valid citations even if Appendix A is replaced.
- Mentions of lambda calculus or Lisp history may remain when historically
  relevant; only claims that the current examples are Scheme need changing.

## Mechanical edition-aware rendering

These are not prose rewrites, but must be fixed at the same time:

- Every `#raw(lang:"scheme", ...)` in generated content currently hard-codes
  Scheme highlighting. Add an edition-aware inline-code helper that selects the
  language and, where necessary, the translated spelling.
- `typ/manifest.typ:16` hard-codes “Appendix A: Scheme”; make the displayed title
  edition-aware.
- Generated source comments such as “Generated from .../scheme/org/...” and the
  manifest comment do not appear in the PDF and need not vary.
- Do not globally replace “procedure” with “function.” Much of the mathematical
  prose deliberately uses the original book’s procedure vocabulary, and some
  historical passages should remain unchanged. Branch only the passages above
  and any sentence whose claim depends on Scheme syntax or runtime behavior.
