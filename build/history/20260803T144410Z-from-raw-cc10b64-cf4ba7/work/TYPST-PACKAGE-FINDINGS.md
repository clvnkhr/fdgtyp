# Typst Package Findings

Notes from a quick Typst Universe pass on packages that could simplify this
conversion or improve the generated book.

## Strong Candidates

- `physica`: Scientific/math helpers for operators, derivatives, vectors,
  tensors, matrices, and related notation. This could replace some local
  operator shims such as `curl`, `grad`, `Lap`, and `div`.
- `codly`: Richer code block presentation, including configurable styling,
  line numbers, annotations, and references. This is a good fit for the many
  Scheme examples.
- `numbly`: Heading-numbering helpers. Potentially useful for appendix,
  exercise, and section numbering cleanup, though it does not replace equation
  labelling directly.

## Possible Later

- `lemming`: Theorem/proof-style environments that behave like native
  elements. A possible fit if exercises become semantic blocks instead of
  headings.
- `ctheorems` / `great-theorems`: Established theorem-like environment
  packages with counters and references.
- `rich-counters`: Useful if we need counters that inherit from headings or
  other counters.
- `cetz` / `fletcher`: Drawing and diagram packages. Worth revisiting if PDF
  figure crops are not good enough and we decide to redraw figures.
- `showybox`: Decorative boxes. Could be useful for exercises or remarks, but
  should be used lightly to keep the book design restrained.

Current recommendation: try `physica` first if we want more canonical math
operators, then `codly` for code listings.
