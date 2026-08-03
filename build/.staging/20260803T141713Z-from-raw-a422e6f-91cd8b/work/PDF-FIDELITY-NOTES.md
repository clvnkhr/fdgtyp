# PDF Fidelity Notes

## Spotchecks

- 2026-07-02: Spotchecked one published-PDF page from each generated chapter
  and appendix against the Typst conversion. The pass found and fixed:
  - Chapter 4 equation 4.3: restored the missing `X_k` subscript from the
    published PDF.
  - Chapter 7 equation 7.9: moved the period out of `mathsf{g}` so the final
    factor renders as `g`, followed by punctuation.
- 2026-07-02: More thorough pass through the preface, prologue, chapter 1, and
  chapter 2. Compared the published PDF pages in that range against the
  generated Typst and inspected the low-match pages directly. The pass found
  and fixed:
  - Prologue/chapter 1/chapter 2: prevented wrapped parenthetical prose from
    being misclassified as Scheme blocks.
  - Chapter 1: expanded the `Cartan` noweb placeholder and removed standalone
    cached-result placeholder blocks that are not in the published PDF.
  - Chapter 2: fixed source/PDF drift in the coordinate-independence section:
    heading spelling, `functions that map`, missing/extra Scheme parens, and
    the stray leading period before "We can work...".
  - Chapter 2: repaired the cardioid formulas and the latitude-longitude
    degree marker.
- 2026-07-02: Thorough pass through chapter 11 against the published PDF text.
  The Org source has empty equation environments for equations 11.1-11.14 and
  11.20-11.21, so those displays are reconstructed from the PDF during
  conversion. The pass also fixed `Einsten`, the repeated `xi^2` term in the
  Lorentz interval, collapsed aligned Lorentz displays, `bar.v.double` norm
  notation, `make-4-tuple`, and `R^(= 1)`.

Lower-priority differences to revisit later:

- The published source PDF includes an index near the end. The current Typst
  conversion is generated from the Org sources, which do not include that index.
- Some wording/capitalization differs between the Org sources and the published
  PDF, so a fully faithful PDF recreation may require patching from the PDF text
  or another canonical source.
