// FDG fidelity audit, polished repair-focused edition.
// Created from the sequential rough audit on 2026-07-03.
// Rough notes preserved in audit-snapshots/2026-07-03-rough-audit-baseline/.

#set document(
  title: "FDG Fidelity Audit",
  author: "fdgtyp audit",
)
#set page(paper: "us-letter", margin: (x: 0.72in, y: 0.72in))
#set text(font: "New Computer Modern", size: 10pt)
#set par(justify: true, leading: 0.56em)
#show heading: set block(above: 1.05em, below: 0.45em)
#show raw.where(block: true): set block(
  fill: rgb("#f7f7f2"),
  inset: 7pt,
  radius: 3pt,
  width: 100%,
)

#let tag(label, fill) = box(
  fill: fill,
  stroke: rgb("#555555"),
  inset: (x: 4pt, y: 2pt),
  radius: 2pt,
)[#text(size: 7pt, weight: "bold")[#label]]

#let exact = tag("EXACT", rgb("#cfead6"))
#let partial = tag("PARTIAL", rgb("#fff4c2"))
#let accepted = tag("ACCEPTED", rgb("#dbe9ff"))
#let bug = tag("BUG", rgb("#ffc6c6"))
#let drift = tag("SOURCE-DRIFT", rgb("#ffd8b5"))
#let repair = tag("PDF-REPAIR", rgb("#e7d9ff"))
#let added = tag("PROJECT-ADDED", rgb("#d7f3ee"))
#let todo = tag("TODO", rgb("#eeeeee"))
#let high = tag("HIGH", rgb("#ffd0c2"))
#let med = tag("MEDIUM", rgb("#fff0b5"))
#let low = tag("LOW", rgb("#e5f1ff"))

= FDG Fidelity Audit

This is the polished audit for the FDG Typst conversion. It replaces the sequential working notes as the main planning document while preserving those notes at:

- `audit-snapshots/2026-07-03-rough-audit-baseline/audit-rough.typ`
- `audit-snapshots/2026-07-03-rough-audit-baseline/audit-rough.pdf`

The main purpose is to guide fixes efficiently. It focuses on known issues, where to repair them, what target each region should follow, and what evidence must be preserved as the PDFs reflow.

Source provenance note: `fdg-book/` is treated as a hard-copied vendored source tree, not a moving subtree dependency. Its import details and update policy are recorded in `fdg-book/PROVENANCE.md`.

== Contents

#outline(title: none, depth: 2)

== Executive Summary

#table(
  columns: (1.25in, 1.2in, auto),
  stroke: 0.4pt,
  inset: 4pt,
  [Area], [Status], [Decision],
  [Layout], [#accepted], [US-letter layout is intentional. Page-for-page reproduction of the published PDF is not a goal. Audit content loss, bad breaks, obscured text, and incorrect counters instead.],
  [References], [#partial], [Reference numbering is seeded to match the published PDF. Remaining work is formatting and every callout/entry check.],
  [Footnotes], [#exact], [Footnote numbering resets per chapter/appendix. Generated footnote counts are locked for every chapter/appendix, and PDF checks match published examples. Footnote display equations no longer consume main equation numbers.],
  [Equations], [#bug], [Several source/PDF math drifts are known. The former footnote-display counter drift is fixed and guarded by regressions.],
  [Code/results], [#partial], [Many code blocks are present; executable verification remains incomplete, especially errata claims and high-density chapters.],
  [Figures], [#partial], [Imported PDF crops are acceptable for now but should probably be redrawn in CeTZ over time.],
  [Index], [#bug], [Generated index exists but differs from the published index in symbol entries, locator semantics, and explanatory note.],
  [Errata], [#added], [Intentional project end matter. Needs wording/code cleanup and executable verification for uncertain claims.],
)

== Canonical Targets

Use the right target before filing or fixing a mismatch.

#table(
  columns: (1.35in, 1.55in, auto),
  stroke: 0.4pt,
  inset: 4pt,
  [Region], [Canonical target], [Notes],
  [Vendored source], [`fdg-book/` hard copy], [`fdg-book/PROVENANCE.md` records the subtree import commits and freezes this directory as ordinary tracked repo content. Do not refresh from upstream during fidelity work without a new snapshot and reviewed diff.],
  [Book body prose/math/code], [Published PDF first, Org second], [When Org and PDF differ, classify as source drift. Repair through converter-side PDF-fidelity rules or Typst project code; leave the vendored Org source unchanged.],
  [Bibliography numbering], [Published PDF], [Numbering/order should match published references. Formatting is still under review.],
  [Footnote numbering], [Published PDF], [Published numbering is now a fidelity requirement. This affects chapter and appendix references.],
  [Layout geometry], [Project policy], [Letter paper is intentional; only audit readability/content effects.],
  [Chapter 11 reconstructed equations], [Published PDF], [Org has empty equation environments in several places. These are intentional PDF-derived repairs.],
  [Errata], [Org errata plus executable checks], [Errata is not in the published PDF. Review it as project end matter.],
  [Index], [Hybrid], [Compare vocabulary/grouping/styling against published index. Exact locators are not required while pagination differs.],
  [Figures], [Published visual target, Typst-native future], [Current assets are PDF crops. Future direction is CeTZ redraws with controlled text layers.],
)

== Evidence Preservation

The first audit snapshot has been created:

```text
audit-snapshots/2026-07-03-rough-audit-baseline/
```

It contains the current `fdg-book.pdf`, the rough audit PDF/source, the published PDF copy, representative raster evidence, and `MANIFEST.md`. Any rough-audit citation of `current physical page N` should be interpreted as referring to that snapshot unless a later row explicitly re-verifies the page after fixes.

Before each fix pass:

1. Snapshot the current rendered PDFs and any raster evidence pages.
2. Record `git rev-parse HEAD`, dirty status, build commands, and PDF metadata.
3. Fix the issue.
4. Rebuild `fdg-book.pdf` and `typ/audit.pdf`.
5. Add post-fix verification without deleting the old evidence trail.

Evidence commands used for the baseline snapshot:

```text
typst compile audit-snapshots/2026-07-03-rough-audit-baseline/audit-rough.typ audit-snapshots/2026-07-03-rough-audit-baseline/audit-rough.pdf
node scripts/assert-typst-regressions.mjs
pdfinfo fdg-book.pdf
pdfinfo audit-snapshots/2026-07-03-rough-audit-baseline/audit-rough.pdf
pdftoppm -f 163 -singlefile -png -r 130 fdg-book.pdf audit-snapshots/2026-07-03-rough-audit-baseline/rasters/current-index-p163
pdftoppm -f 166 -singlefile -png -r 130 fdg-book.pdf audit-snapshots/2026-07-03-rough-audit-baseline/rasters/current-errata-p166
pdftoppm -f 240 -singlefile -png -r 130 fdg-book/fdg_book.pdf audit-snapshots/2026-07-03-rough-audit-baseline/rasters/published-index-p240
pdftoppm -f 152 -singlefile -png -r 130 fdg-book.pdf audit-snapshots/2026-07-03-rough-audit-baseline/rasters/current-appendix-b-p152
pdftoppm -f 220 -singlefile -png -r 130 fdg-book/fdg_book.pdf audit-snapshots/2026-07-03-rough-audit-baseline/rasters/published-appendix-b-p220
```

== Fix Policy

#table(
  columns: (1.3in, auto),
  stroke: 0.4pt,
  inset: 4pt,
  [Fix site], [Use when],
  [Converter], [A class of Org patterns needs systematic conversion or generated Typst needs stable repairs after regeneration. Example: manual equation alignment markers, double-parenthesized equation references, and PDF-derived reconstruction rules.],
  [Typst helper/lib], [The content is correct but presentation/counters/layout are wrong across many generated files. Example: footnote numbering and figure rendering.],
  [Generated Typst], [Only for temporary diagnosis. Avoid direct generated-file fixes unless they are immediately moved into converter or Typst helper code.],
  [Audit only], [The issue is accepted styling, project policy, or a warning that should not alter the book.],
)

Every fix should add or update a regression when the behavior can be checked cheaply.

Status discipline: `#exact` means the specific actionable item is closed, not merely that a related formula or source string changed. For visual/layout items, source assertions alone are not enough; keep the item `#partial` until the rendered PDF has been visually checked or raster-compared against the chosen target.

== Priority Repair Queue

#table(
  columns: (0.62in, 0.45in, 0.85in, 1.25in, auto),
  stroke: 0.4pt,
  inset: 4pt,
  [ID], [Pri], [Status], [Issue], [Repair direction and evidence],
  [Q-001], [P0], [#exact], [Footnote numbering], [Implemented on 2026-07-03 by resetting `counter(footnote)` in `typ/fdg-lib/chapter.typ`. Exhaustive generated footnote counts are locked in regression tests for every chapter/appendix, and PDF checks match published examples: chapter 1 starts at footnote 1, chapter 11 starts at footnote 1, and Appendix A's `car`/`cdr` note is 7 rather than the former global 108.],
  [Q-002], [P0], [#exact], [Equation counter drift], [Fixed on 2026-07-03 by routing Org normalization through the footnote-aware display converter and chapter-specific published-number suppressions. Footnote-only display equations now remain unlabelled, Chapter 7's published unnumbered displays no longer consume labels, and all numbered chapters/appendices are regression-locked to exact generated equation-label counts and contiguous sequences. Verified chapter 5 equations 5.22-5.24, chapter 8 equations 8.10-8.12, Appendix C torsion reference to 8.21, and Chapter 7 labels 7.59--7.79.],
  [Q-003], [P1], [#exact], [Appendix B equation B.7], [Fixed on 2026-07-03 by converter-side PDF-fidelity repair: `I_0(s)=t`, matching published page 220. The vendored Org snapshot remains unchanged; regeneration and regression lock the corrected generated equation.],
  [Q-004], [P1], [#exact], [Appendix B equation B.10], [Fixed on 2026-07-03 by converter-side PDF-fidelity repair: left side is `AC`, matching published page 222. The vendored Org snapshot remains unchanged; regeneration and regression lock the corrected generated equation.],
  [Q-005], [P1], [#exact], [Appendix C equation C.1], [Fixed on 2026-07-03 by converter-side PDF-fidelity repair: second term is `g T(v, omega)`, matching published page 232. The vendored Org snapshot remains unchanged; regeneration and regression lock the corrected generated equation.],
  [Q-006], [P1], [#exact], [Appendix C equation C.10], [Fixed on 2026-07-03 by converter-side PDF-fidelity repair: primed Riemann component is on the left, matching published page 234. The vendored Org snapshot remains unchanged; regeneration and regression lock the corrected generated equation.],
  [Q-007], [P1], [#exact], [Chapter 10 equations 10.3 and 10.6], [Fixed on 2026-07-03 by converter-side PDF-fidelity repair, leaving the vendored Org snapshot unchanged. Equation 10.3 now renders `grad(f)=g^sharp(df)` without the trailing `(df)`. Equation 10.6 now puts the second component on `dy`, matching published page 155/175. Regression locks corrected generated formulas and rejects old forms.],
  [Q-008], [P1], [#exact], [Double equation references], [Fixed on 2026-07-03 in converter reference rewriting. Generic parenthesized numeric refs now become inline `#ref(<...>)` calls, so Typst renders a single parenthesized equation number. Verified chapter 11 Lorentz-force reference renders `(11.11)`, not `((11.11))`; regression rejects generated `(@...)` wrappers and PDF `((11.11))`.],
  [Q-009], [P2], [#bug], [Index note and symbol entries], [Published index page 240 says procedure definition locators are italic and `n` marks footnotes. Current page 163 says generated entries include procedure definitions and lacks the opening symbol-entry block. Fix `typ/index.typ:13-390` or document limitations explicitly.],
  [Q-010], [P2], [#partial], [Copyright/CIP front matter], [Implemented on 2026-07-03 in `typ/fdg-lib/title.typ`: CC BY-NC-SA banner placeholder, raw/monospace `special_sales@mitpress.mit.edu`, extra vertical space before Library of Congress line, `p. cm.` indentation, wider print-line spacing, em dash before `dc23`, and right-aligned `2012042107`. Regression locks source forms. Remaining work is visual fine-tuning of the banner against the published graphic.],
  [Q-015], [P2], [#exact], [Small text/code drift batch], [Fixed on 2026-07-03 by converter-side repairs and locked with regression: prologue Papert citation and `This Lagrangian`, chapter 1 `90◦ E`, chapter 3 hard hyphenation cleanup, chapter 6 Scheme names, chapter 7 `assume`, chapter 8 comma and symmetric-connection formula. Vendored Org remains unchanged.],
  [Q-016], [P2], [#exact], [Chapter 4/5 formula display repairs], [Fixed on 2026-07-03 by converter-side generated-Typst repairs. Chapter 4 now uses available width for short displays instead of preserving unnecessary source line breaks: 4.1, 4.6, 4.9, 4.19, 4.29, 4.40, 4.41, and 4.42 render without avoidable forced breaks. Equation 5.24 uses the bracketed commutator `[v_i, v_j]` and keeps the first summation on the `&=` row, using our wider layout instead of copying the published break immediately after the equals sign. Visual raster checks confirm the intended display shapes within accepted page-geometry differences. Regression locks corrected generated forms and rejects old forms.],
  [Q-017], [P1], [#exact], [Chapter 10 numbered-display line breaks], [Fixed on 2026-07-03 by converter-side generated-display repairs. Visual raster checks of rebuilt `fdg-book.pdf` printed pages 103-113 confirm Chapter 10 numbered displays 10.1-10.28 now use available page width and no longer preserve avoidable narrow-source line breaks. In particular, 10.1, 10.5, 10.6, and 10.11 render on one line; grad/curl/div definitions 10.3, 10.7, and 10.10 use `&=` alignment markers. Repaired displays include 10.1, 10.2, 10.5-10.11, and 10.19-10.26; 10.4, 10.12-10.18, 10.27, and 10.28 were checked and left as acceptable. This exact status is for numbered-display linebreak/layout only; full Chapter 10 code/prose/semantic audit remains under C6-016.],
  [Q-018], [P1], [#exact], [Equation linebreak policy], [Fixed on 2026-07-03 in converter math cleanup and targeted display repairs. Generated display math no longer uses the bad pattern `lhs \` then `&= rhs` for the first equality; the first aligned equality must keep material on both sides as `lhs &= rhs`. Continuation rows beginning with `+` or `-` now use `&quad +` / `&quad -` rather than crowding the equals column. Short labelled displays with exactly one equals sign are compacted when they fit, preventing unnecessary breaks such as 4.38, 7.41, 7.53, 8.2, 8.18, and similar short forms. Regression guards all three policies.],
  [Q-019], [P2], [#exact], [Appendix A general-form templates], [Fixed on 2026-07-03 by converter-side Appendix A repair. The procedure-call template in A.1 and the lambda, cond, if, and let general-form templates in A.2, A.4, and A.6 now generate as `scheme` code blocks rather than centered math/`mono(...)` displays. Regression locks the code-block forms and rejects the old math-template fragments.],
  [Q-011], [P2], [#partial], [References formatting], [Numbering/order now match samples via seeded bibliography order. Exhaustively compare all callouts and all 21 bibliography entries; decide whether IEEE-style formatting is acceptable.],
  [Q-012], [P3], [#partial], [Cover art tuning], [Fine-tune the custom cover in `typ/fdg-lib/cover.typ`: the particle trajectory should run against the edge of the potential wells rather than floating too far inside/away from them. A 3D diagram/scene could be considered if it communicates the geometry cleanly, but this is low priority compared with content/counter fixes.],
  [Q-013], [P3], [#partial], [Errata wording/code], [Keep errata as project-added, but adjust low-confidence wording and fix suggested code names. `literal-oneform-field` should be `literal-1form-field`; suggested literal symbols should be quoted.],
  [Q-014], [P3], [#partial], [Figures], [Current PDF crops are visually serviceable but create text-layer extraction artifacts. Plan CeTZ redraws figure by figure after content-critical fixes.],
)

== Fix Log

=== 2026-07-03 15:00 BST Q-001 Footnote Numbering

Status: #exact.

The chapter wrapper now resets `counter(footnote)` beside the existing equation and figure counter resets. This changes the policy from one global Typst footnote sequence to a per-chapter/per-appendix sequence. Exhaustive generated-footnote counts are now locked in `scripts/assert-typst-regressions.mjs` for every chapter and appendix, and representative PDF checks match the published PDF.

Locked generated counts:

```text
Prologue 6; Chapter 1 8; Chapter 2 10; Chapter 3 12; Chapter 4 8; Chapter 5 10;
Chapter 6 7; Chapter 7 19; Chapter 8 9; Chapter 9 8; Chapter 10 4; Chapter 11 6;
Appendix A 8; Appendix B 3; Preface, Appendix C, References, Errata 0.
```

Verification:

```text
make all
node scripts/assert-typst-regressions.mjs
pdftotext fdg-book.pdf - | sed -n '586,594p'
pdftotext fdg-book.pdf - | sed -n '9182,9191p'
pdftotext fdg-book.pdf - | sed -n '10225,10234p'
```

Regression coverage added in `scripts/assert-typst-regressions.mjs` for every generated chapter/appendix footnote count, plus PDF examples for chapter 1 footnote 1, chapter 11 footnote 1, and Appendix A footnote 7.

=== 2026-07-03 15:10 BST Q-002 Footnote Display Equations

Status: #exact for main equation counters. Published footnote numbering is fixed under Q-001.

The converter now calls `normalizeLatexDisplaysWithFootnotes` from `normalizeOrgSource` in `scripts/convert-org-to-typst.mjs`. This preserves labels in body equations but suppresses generated labels in the Org `* Footnotes` section. Regeneration removed footnote-only equation labels `<3.58>`, `<3.59>`, `<5.40>`, `<7.83>`, `<7.84>`, `<8.33>`, and `<8.34>` from the generated Typst.

Verification:

```text
node scripts/convert-org-to-typst.mjs
make all
node scripts/assert-typst-regressions.mjs
pdftotext fdg-book.pdf - | rg -n '\(5\.22\)|\(5\.23\)|\(5\.24\)|\(5\.40\)'
pdftotext fdg-book.pdf - | rg -n '\(8\.10\)|\(8\.11\)|\(8\.12\)|\(8\.33\)|\(8\.34\)'
pdftotext fdg-book.pdf - | rg -n 'torsion \(see equation \(8\.21\)\)|torsion \(see equation \(8\.23\)\)'
```

Regression coverage added in `scripts/assert-typst-regressions.mjs` for the chapter 5 and chapter 8 footnote-only labels that caused the observed drift. Future work can add a broader global assertion once intentional labelled footnote equations, if any, have been ruled out exhaustively.

=== 2026-07-03 18:05 BST Estimated Q-002 Chapter 7 Published Equation Labels

Status: #exact.

Chapter 7 had a subtler equation-counter drift than the footnote-only case: the generated source had labelled intermediate/code-result displays that the published PDF leaves unnumbered. The converter now suppresses those published-unnumbered displays while preserving the real published labels:

- the one-form covariant-derivative derivation immediately before published 7.59 is unnumbered;
- the scalar-transport `D u^0` line before published 7.74 is unnumbered, while `D u^1` carries 7.74;
- the footnote geodesic equation `nabla_(sans(v)) sans(v) = 0` carries published label 7.77;
- the two main geodesic displays carry 7.78 and 7.79;
- later code-result arrays remain unnumbered, matching the published PDF.

Regression coverage now includes exact generated equation-label sequence checks for all numbered chapters and appendices B/C. Each section must have the expected count and a contiguous ordered sequence:

```text
Chapter 1: 1.1--1.6      Chapter 2: 2.1--2.7      Chapter 3: 3.1--3.57
Chapter 4: 4.1--4.44     Chapter 5: 5.1--5.39     Chapter 6: 6.1--6.28
Chapter 7: 7.1--7.79     Chapter 8: 8.1--8.32     Chapter 9: 9.1--9.32
Chapter 10: 10.1--10.28  Chapter 11: 11.1--11.43
Appendix B: B.1--B.35    Appendix C: C.1--C.11
```

This is stronger than the earlier maximum-label/global-label check because it counts actual generated equation labels only, not references such as `#ref(<7.59>)`, and it fails on missing, duplicated, shifted, or out-of-order equation labels. The regression output's `labels: ...` value remains a broad Typst label uniqueness/reference inventory, not an equation-count guarantee; the relevant line is now `equation-label sections: 13`.

Verification:

```text
node scripts/convert-org-to-typst.mjs
make book
node scripts/assert-typst-regressions.mjs
```

=== 2026-07-03 15:25 BST Q-003--Q-006 Appendix B/C Source Drift

Status: #exact.

Four high-confidence source/PDF drift items were corrected by converter-side PDF-fidelity repairs and regenerated. The vendored Org snapshot is intentionally left unchanged, so these repairs remain explicit, auditable conversion policy:

- Q-003 / B.7: `I_0(s)=t`, not `y`.
- Q-004 / B.10: `AC = [AC_0, AC_1, AC_2]`, not `AB = ...`.
- Q-005 / C.1: second linearity term uses `g T(v, omega)`, not repeated `u`.
- Q-006 / C.10: the primed Riemann component is on the left side.

Verification:

```text
node scripts/convert-org-to-typst.mjs
make all
node scripts/assert-typst-regressions.mjs
```

Regression coverage added in `scripts/assert-typst-regressions.mjs` for the corrected generated Appendix B/C equations and the old rejected forms.

=== 2026-07-03 15:35 BST Q-008 Double Equation References

Status: #exact.

The generic converter rule for already-parenthesized equation references now emits explicit inline refs, `#ref(<label>)`, rather than literal parentheses around an `@label`. This avoids Typst rendering a parenthesized ref inside another pair of literal parentheses. A post-reference repair preserves the known chapter 3 footnote around equation 3.3 as prose instead of a raw block.

Verification:

```text
node scripts/convert-org-to-typst.mjs
make all
node scripts/assert-typst-regressions.mjs
pdftotext fdg-book.pdf - | rg -n '\(\([A-C0-9]+\.[0-9]+\)\)|\(11\.11\)|Lorentz force'
```

Regression coverage added in `scripts/assert-typst-regressions.mjs` to reject generated `(@11.11)`-style wrappers and rendered PDF text `((11.11))`.

=== 2026-07-03 15:45 BST Q-007 Chapter 10 Equation Drift

Status: #exact.

Two Chapter 10 math drifts were corrected by converter-side PDF-fidelity repairs and regenerated. The vendored Org snapshot is intentionally left unchanged:

- 10.3: the traditional gradient vector field is `grad(f)=g^sharp(df)`; the stray trailing `(df)` was removed.
- 10.6: the second component of `g^*(d theta)` is on `dy`; the old source repeated `dx`.

Verification:

```text
node scripts/convert-org-to-typst.mjs
make all
node scripts/assert-typst-regressions.mjs
pdftotext fdg-book.pdf - | sed -n '8178,8270p'
```

Regression coverage added in `scripts/assert-typst-regressions.mjs` for the corrected 10.3 formula and the corrected 10.6 `dy` component, with excludes for the old forms.

=== 2026-07-03 15:55 BST Side Fix: Literal Double Backslash

Status: #exact.

One generated Typst line in Chapter 11 preserved a LaTeX `\\` linebreak marker literally. It appeared in `typ/content/chapter011.typ` at the display for equation 11.26 and rendered visibly in `typ/main.pdf` page 133 text extraction as a stray backslash between the two component equations. This was verified as an unintended conversion artifact.

The fix is converter-side only: final generated book content now collapses doubled Typst linebreak markers before a newline to the single Typst linebreak marker. The vendored Org snapshot remains unchanged.

Verification:

```text
node scripts/convert-org-to-typst.mjs
node scripts/assert-typst-regressions.mjs
rg -n -F '\\' typ/content
```

Regression coverage added in `scripts/assert-typst-regressions.mjs` with a strict generated-content count: expected literal double-backslash sequences are zero unless explicitly documented in `expectedGeneratedDoubleBackslashCounts`.

=== 2026-07-03 16:20 BST Q-015 Small Text/Code Drift Batch

Status: #exact.

A batch of high-confidence textual and Scheme-name drift items was corrected through converter-side normalization, leaving the vendored Org snapshot unchanged:

- C3-005: prologue Papert footnote now cites `@papert1980mindstorms` instead of dropping the published `[13]` reference.
- C3-006: harmonic-oscillator prose now reads `This Lagrangian is implemented by`, matching the published capitalization.
- C3-008: chapter 1 meridian prose now preserves the published `90◦ E` spacing for the first occurrence while retaining `90°E` in the second.
- C4-003: chapter 3 hard hyphenation artifacts are removed from generated text where our layout no longer uses the published line breaks.
- C5-004: chapter 6 code now uses `make-fake-vector-field`.
- C5-005: chapter 6 code now uses `coordinate-system-at`.
- C5-006: chapter 6 pullback helper now uses `f-on-M`.
- C5-007: chapter 7 prose now says `assume`.
- C5-013: chapter 8 prose now says `However,`.
- C5-014: chapter 8 symmetric-connection prose now shows `Gamma^i_jk = Gamma^i_kj`, matching the published PDF.

Verification:

```text
node scripts/convert-org-to-typst.mjs
node scripts/assert-typst-regressions.mjs
make book
make draft
```

Regression coverage added in `scripts/assert-typst-regressions.mjs` with positive and negative generated-content assertions for every item above.

=== 2026-07-03 16:35 BST Q-010 Front-Matter Detail Pass

Status: #partial.

The known front-matter detail cluster was implemented in `typ/fdg-lib/title.typ`: CC BY-NC-SA banner placeholder, raw/monospace `special_sales@mitpress.mit.edu`, increased vertical space before `Library of Congress Cataloging-in-Publication Data`, indentation before `p. cm.`, wider spacing in the print-number line, em dash before `dc23`, and right alignment for `2012042107`.

The CC banner is intentionally marked partial until visually compared against the published mark; the current implementation records and displays the missing banner content but may need replacement with a closer icon/bitmap treatment.

Verification:

```text
node scripts/assert-typst-regressions.mjs
make book
make draft
```

Regression coverage added in `scripts/assert-typst-regressions.mjs` for the Typst source forms that are cheap to lock.

=== 2026-07-03 16:50 BST Q-016 Chapter 4/5 Formula Display Repairs

Status: #exact.

Two remaining chapter-level formula/display issues were corrected with converter-side generated-Typst repairs:

- C4-007 / equation 4.6: `sum_k d_k^i(m)c_j^k(m)` now stays together in the same display expression instead of forcing `c_j^k(m)` onto a new generated line.
- C4-018 / equation 4.9: the two equivalent basis expansions now render as a single display line; the previous forced break placed the equation number awkwardly between the two halves despite enough horizontal space.
- C4-019 / Chapter 4 short-display pass: equations 4.1, 4.19, 4.29, 4.40, 4.41, and 4.42 no longer preserve avoidable source line breaks. True multi-step derivations such as 4.5, 4.33, 4.34, 4.35, 4.38, and the three-line commutator list 4.39 remain multi-line.
- C4-015 / equation 5.24: the commutator argument now appears as `[v_i, v_j]`; the display uses `&= sum_(i=0)^k ...` so the first summation stays with the aligned equals row. This intentionally uses our wider layout rather than copying the published break immediately after `=`.

Verification:

```text
node scripts/convert-org-to-typst.mjs
node scripts/assert-typst-regressions.mjs
make book
make draft
pdftoppm -f 42 -l 56 -png -r 150 fdg-book.pdf /private/tmp/fdg-q016-exact-current
pdftoppm -f 43 -singlefile -png -r 150 fdg-book.pdf /private/tmp/fdg-ch4-49-singleline-p43
pdftoppm -f 41 -l 51 -png -r 150 fdg-book.pdf /private/tmp/fdg-ch4-break-audit-pass2
pdftoppm -f 64 -l 83 -png -r 150 fdg-book/fdg_book.pdf /private/tmp/fdg-q016-published-target
```

Regression coverage added in `scripts/assert-typst-regressions.mjs` for the corrected equation 4.6 and 5.24 generated forms, with excludes for the old linebreak and malformed commutator argument.

Rendered PDF checks:

- Equation 4.6: current `fdg-book.pdf` physical page 42 / printed page 28; published `fdg-book/fdg_book.pdf` physical page 64 / printed page 43. The product `d_k^i(m)c_j^k(m)` is on one line before the equation number.
- Equation 4.9: current `fdg-book.pdf` physical page 43 / printed page 29. The full equality renders on one line, which is preferred for our wider layout.
- Chapter 4 short displays: current `fdg-book.pdf` physical pages 41, 44, 45, and 48 confirm that 4.1, 4.19, 4.29, 4.40, 4.41, and 4.42 render without the previous avoidable breaks.
- Equation 5.24: current `fdg-book.pdf` physical page 56 / printed page 42; published `fdg-book/fdg_book.pdf` physical page 83 / printed page 62. The bracketed commutator is correct. The layout intentionally differs from the published narrow measure by keeping the first summation on the `&=` row.

=== 2026-07-03 17:05 BST Estimated Q-017 Chapter 10 Numbered Display Line Breaks

Status: #exact for Chapter 10 numbered-display linebreak/layout.

The converter now applies Chapter 10 generated-display repairs after Typst linebreak normalization and after subscript/superscript normalization. The repair keeps the vendored Org snapshot unchanged and rewrites the generated Typst display shapes to use the wider current book measure instead of preserving avoidable line breaks from the narrower published source.

The visual pass checked numbered displays 10.1-10.28 on rebuilt `fdg-book.pdf` printed pages 103-113. The repaired displays are 10.1, 10.2, 10.5-10.11, and 10.19-10.26. The refinement pass specifically forces 10.1, 10.5, 10.6, and 10.11 to single generated lines and restores `&=` alignment markers for the grad/curl/div definitions 10.3, 10.7, and 10.10. Displays 10.4, 10.12-10.18, 10.27, and 10.28 were checked and left as acceptable/compact. Equation-content repairs for 10.3 and 10.6 are tracked separately under Q-007/C6-007/C6-009.

Scope of exact claim:

- Exact: generated numbered-display linebreak/layout in `typ/content/chapter010.typ` for equations 10.1-10.28.
- Exact: rebuilt visual pages `fdg-book.pdf` printed pages 103-113 no longer show the bad vertical stacks or avoidable narrow-source line breaks seen before the repair; printed pages 103, 104, and 107 visually confirm the single-line displays for 10.1, 10.5, 10.6, and 10.11.
- Not claimed: code/result block layout, prose line wrapping, or semantic correctness of every Chapter 10 equation; those remain under C6-016.

Verification:

```text
node scripts/convert-org-to-typst.mjs
make book
node scripts/assert-typst-regressions.mjs
pdftoppm -f 117 -l 128 -png -r 120 fdg-book.pdf /private/tmp/fdg-ch10-current-pass3
pdftoppm -f 117 -l 121 -png -r 150 fdg-book.pdf /private/tmp/fdg-ch10-singleline-check
pdftoppm -f 174 -l 185 -png -r 120 fdg-book/fdg_book.pdf /private/tmp/fdg-ch10-published
```

Regression coverage added in `scripts/assert-typst-regressions.mjs` for compact generated forms of 10.1, 10.2, 10.5-10.11, and 10.19-10.26, with rejects for the old unnecessary linebreak starts. The regression now locks 10.1, 10.5, 10.6, and 10.11 as one generated line and locks `&=` markers for 10.3, 10.7, and 10.10.

=== 2026-07-03 17:30 BST Estimated Q-018 First Aligned Equals Linebreaks

Status: #exact for the generated first-aligned-equals pattern.

The converter's `FDGBREAK =` normalization now distinguishes the first aligned equality in a math expression from later continuation equalities. The first aligned equality is emitted as `lhs &= rhs`, so the display row has material on both sides of the equals sign. Later aligned equalities remain eligible for continuation rows of the form `\` then `&= ...`, which is correct for genuine multi-line derivations.

This fixes the repeated bad pattern seen in equations such as chapter 3 equations 3.5, 3.6, and 3.7, where generated Typst had a left-hand side on one row and placed the first `&=` at the start of the next row. Equation 5.24 was also brought into the same policy: the first summation now stays on the `&=` row, with the second summation on the following `&quad` continuation row.

The same pass now covers continuation operators and short one-equals displays. If a continuation row starts with `+` or `-`, the converter emits `&quad +` or `&quad -` so the operator is offset from the equals alignment column. If a labelled display has exactly one equals sign and its compact form is short enough, forced source linebreaks are removed. Concrete repairs in this batch include 4.34 (`&quad +` continuation), 4.35 and 4.38 single-line displays, the Chapter 4 commutator footnote `times` row, 5.34 aligned boundary-integral rows, 7.41 and 7.53 single-line displays, 7.59 parenthesized inner `sum_k (...)` terms, and Chapter 8 displays 8.2, 8.16, and 8.18.

Scope of exact claim:

- Exact: generated Typst no longer contains a display beginning with a non-aligned first row followed immediately by `&=`.
- Exact: generated Typst no longer contains continuation rows beginning with bare `+`/`-` or tight `&+`/`&-`; continuation operators use `&quad`.
- Exact: short labelled displays under the regression threshold with exactly one equals sign do not retain forced linebreaks.
- Exact: chapter 3 examples 3.5 and 3.6 were visually spot-checked in rebuilt `fdg-book.pdf` and now have populated first rows with aligned continuation rows.
- Not claimed: every mathematical formula in every chapter has received a semantic audit; this is a display-shape invariant and regression guard.

Verification:

```text
node scripts/convert-org-to-typst.mjs
node scripts/assert-typst-regressions.mjs
make book
pdftoppm -f 28 -l 36 -png -r 150 fdg-book.pdf /private/tmp/fdg-ch3-alignment-pass
```

Regression coverage added in `scripts/assert-typst-regressions.mjs`: any generated display matching a first-row break immediately followed by `&=` fails the audit suite; continuation rows with bare `+`/`-` or `&+`/`&-` fail; `vec`/`mat` calls reject leaked `&quad`; short labelled one-equals displays fail if they keep forced linebreaks.

=== 2026-07-03 23:03 BST Q-019 Appendix A General-Form Templates

Status: #exact.

Appendix A's syntactic-template displays are Scheme forms, not mathematical equations. The converter now rewrites the generated Typst for the procedure-call template in A.1 and the explicit "general form" templates for `lambda`, `cond`, `if`, and `let` into `scheme` code blocks:

```text
(operator operand-1 ... operand-n)
(lambda formal-parameters body)
(cond (predicate-1 consequent-1)
      ...
      (predicate-n consequent-n))
(if predicate consequent alternative)
(let ((variable-1 expression-1)
      ...
      (variable-n expression-n))
  body)
```

The vendored Org source remains unchanged. Regression coverage locks these five generated code blocks in `appendix_a.typ` and rejects the old `italic(...)` / `mono(...)` math-template fragments.

== Complete Actionable Inventory

This table reconciles the rough audit against this polished audit. Every rough row marked `BUG`, `SOURCE-DRIFT`, or `PDF-REPAIR` should appear here, even when it is lower priority or already covered by a broader repair theme.

#table(
  columns: (0.75in, 0.85in, 1.3in, auto),
  stroke: 0.4pt,
  inset: 3.5pt,
  [Rough ID], [Status], [Area], [Action],
  [C1-010], [#partial], [Front matter], [Added a CC BY-NC-SA banner placeholder near the license paragraph in `typ/fdg-lib/title.typ`; visually compare/refine against the published graphic.],
  [C1-011], [#exact], [Front matter], [Implemented: only `special_sales@mitpress.mit.edu` is raw/monospace; `creativecommons.org` remains main text.],
  [C1-013], [#partial], [Front matter], [Implemented in source: increased vertical space before `Library of Congress Cataloging-in-Publication Data`; still needs visual PDF check.],
  [C1-014], [#partial], [Front matter], [Implemented in source: indented the `p. cm.` line in CIP data; still needs visual PDF check.],
  [C1-015], [#partial], [Front matter], [Implemented in source: increased spacing in the final `10 9 8 7 6 5 4 3 2 1` print line; still needs visual PDF check.],
  [C1-016], [#exact], [Front matter], [Implemented: em dash before `dc23`.],
  [C1-017], [#partial], [Front matter], [Implemented in source: right-aligned `2012042107`; still needs visual PDF check.],
  [Cover art], [#partial], [Front matter], [Fine-tune the custom cover art in `typ/fdg-lib/cover.typ`: the particle trajectory should run against the edge of the wells. Optional 3D diagram exploration is allowed but low priority.],
  [C2-003], [#bug], [References], [Current IEEE bibliography style does not match published prose; prototype manual visible bibliography or custom renderer.],
  [C2-004], [#bug], [References], [Restore published author phrasing, including `with Julie Sussman` and `with Meinhard E. Mayer`.],
  [C2-005], [#bug], [References], [Entry [6] must render the Dover/New York/1989 note.],
  [C2-006], [#bug], [References], [Entry [10] must render IEEE organization and standard number.],
  [C2-007], [#bug], [References], [Entry [18] must use published memo wording: `Artificial Intelligence Laboratory memo AIM-2002-018, November 2002.`],
  [C2-008], [#bug], [References], [Entry [21] must use published prose `Free software is available at:` followed by URL.],
  [C2-009], [#bug], [References], [Book entries should follow published publisher/address/year order rather than current IEEE ordering.],
  [C2 entry matrix], [#bug], [References], [All 21 entries remain individually actionable for prose/style comparison: [1]-[21] in rough lines C2 matrix.],
  [C3-005], [#exact], [Prologue], [Fixed: Papert citation preserved as `@papert1980mindstorms` inside prologue footnote.],
  [C3-006], [#exact], [Prologue], [Fixed: published capitalization `This Lagrangian` restored by converter.],
  [C3-008], [#exact], [Chapter 1], [Fixed: first longitude prose uses published `90◦ E` spacing and second retains `90°E`.],
  [C3-010], [#exact], [Chapter 1], [Implemented counter reset; chapter 1 has 8 generated footnotes locked by regression, and the first rendered footnote is 1.],
  [C4-003], [#exact], [Chapter 3], [Fixed: converter removes hard hyphenation artifacts such as `di- rection`, `deriva- tives`, and `com- ponents` where our layout no longer needs the published line-break hyphens.],
  [C4-004], [#exact], [Chapter 3], [Implemented counter reset; chapter 3 has 12 generated footnotes locked by regression.],
  [C4-005], [#exact], [Chapter 3], [Fixed by Q-008 converter reference rewrite; dual relationship now targets 3.41 without double parentheses, and the nearby 3.3 footnote remains prose.],
  [C4-007], [#exact], [Chapter 4], [Fixed: equation 4.6 keeps `c_j^k(m)` with the main generated display before the number; visual raster check confirms the rendered display shape.],
  [C4-008], [#exact], [Chapter 4], [Rechecked after Q-008; references to equations 3.40/3.41 are generated as proper refs without double-parenthesized wrappers.],
  [C4-018], [#exact], [Chapter 4], [Fixed: equation 4.9 now renders as one line instead of breaking immediately before the second equality. Regression rejects the old forced linebreak.],
  [C4-019], [#exact], [Chapter 4], [Fixed: unnecessary short-display breaks removed from equations 4.1, 4.19, 4.29, 4.40, 4.41, and 4.42. Regression rejects the old forced linebreaks; visual raster check confirms rendered pages.],
  [Q-018], [#exact], [Generated equations], [Fixed generator-wide linebreak policy: displays may not emit `lhs \` followed immediately by `&= rhs`; first aligned equality must be `lhs &= rhs`; continuation `+`/`-` rows use `&quad`; short one-equals displays are compacted when they fit. Regression scans generated content for these patterns.],
  [C4-014], [#exact], [Chapter 5], [Fixed: the rank-zero footnote display equation is unlabelled after regeneration, and body equations render as 5.22-5.24 in sequence.],
  [C4-015], [#exact], [Chapter 5], [Fixed: equation 5.24 commutator term is `omega([v_i, v_j], ...)`; generated display uses `&= sum_(i=0)^k ...` and keeps the first summation with the equals row, intentionally using our wider layout rather than copying the published post-equals break.],
  [C5-004], [#exact], [Chapter 6], [Fixed: `make fake-vector-field` to `make-fake-vector-field`.],
  [C5-005], [#exact], [Chapter 6], [Fixed: `coordinate-system at` to `coordinate-system-at`.],
  [C5-006], [#exact], [Chapter 6], [Fixed: pullback parameter mismatch `f-on-m` vs `f-on-M`.],
  [C5-007], [#exact], [Chapter 7], [Fixed: prose typo `asume` to `assume`.],
  [C5-012], [#exact], [Chapter 8], [Fixed: parallel-transport footnote display equations are unlabelled after regeneration, and body equations render as 8.10-8.12.],
  [C5-013], [#exact], [Chapter 8], [Fixed: `However ,` to `However,`.],
  [C5-014], [#exact], [Chapter 8], [Fixed: symmetric-connection condition shows lower indices swapped on the right: `Gamma^i_jk = Gamma^i_kj`.],
  [C6-006], [#repair], [Chapter 10], [Preserve converter repairs for malformed Hodge-dual source text around `g^{ij}` and epsilon subscript.],
  [C6-007], [#exact], [Chapter 10], [Fixed equation 10.3 so `grad(f) = g^sharp(df)` has no trailing `(df)`; regression locks generated output.],
  [C6-008], [#exact], [Chapter 10], [Fixed for the audited equations 10.5-10.6 display cluster as part of Q-017: generated Typst now uses compact two-line display shaping, and rebuilt raster checks of `fdg-book.pdf` printed page 104 confirm the former vertical stacks are gone.],
  [C6-009], [#exact], [Chapter 10], [Fixed equation 10.6 second curl component basis form from `dx` to published `dy`; regression locks generated output.],
  [C6-017], [#exact], [Queue Q-017], [Fixed for Chapter 10 numbered-display linebreak/layout: displays 10.1-10.28 were visually checked on rebuilt printed pages 103-113. Converter repairs compact 10.1, 10.2, 10.5-10.11, and 10.19-10.26; already compact displays 10.3, 10.4, 10.12-10.18, 10.27, and 10.28 were left unchanged. Regression locks representative compact generated forms and rejects the old unnecessary linebreak starts. Full Chapter 10 code/prose/semantic audit remains open under C6-016.],
  [C6-011], [#repair], [Chapter 11], [Preserve PDF-derived reconstructions for equations 11.1-11.14 and 11.20-11.21.],
  [C6-012], [#repair], [Chapter 11], [Preserve intentional `Einsten` to `Einstein` repair.],
  [C6-013], [#repair], [Chapter 11], [Preserve Lorentz interval repair from repeated `xi^2` to `xi^1`.],
  [C6-014], [#exact], [Chapter 11], [Fixed double-parenthesized equation reference; Lorentz-force prose now renders `(11.11)`, not `((11.11))`.],
  [C6-015], [#repair], [Chapter 11], [Preserve code repairs for `make-4tuple`, `R^(-1)`, and norm notation.],
  [C7-004], [#exact], [Appendix A], [Implemented counter reset; Appendix A has 8 generated footnotes locked by regression, and the `car`/`cdr` note now renders as 7 rather than former global 108.],
  [C7-006], [#exact], [Appendix B], [Fixed equation B.7 selector result to `I_0(s)=t`; regression locks generated output.],
  [C7-007], [#exact], [Appendix B], [Fixed equation B.10 left side to `AC`; regression locks generated output.],
  [C7-010], [#exact], [Appendix C], [Fixed equation C.1 second term to `g T(v, omega)`; regression locks generated output.],
  [C7-011], [#exact], [Appendix C], [Fixed equation C.10 primed/unprimed left side; regression locks generated output.],
  [C7-012], [#exact], [Appendix C], [Verified after the chapter 8 counter fix: Appendix C now refers to torsion as equation 8.21, matching the published target.],
  [C8-005], [#bug], [Index], [Fix index explanatory note and procedure-definition locator policy.],
  [C8-006], [#bug], [Index], [Add/restore published opening symbol and notation index entries.],
  [C8-008], [#bug], [Index], [Reduce/generated index granularity or document policy; current entries are too mechanical versus curated published index.],
)

== Rough Audit Carry-Forward Check

The rough audit snapshot at `audit-snapshots/2026-07-03-rough-audit-baseline/audit-rough.typ` was rechecked against this polished audit. Mechanical reconciliation found 124 rough audit IDs. Every rough row marked `BUG`, `SOURCE-DRIFT`, `PDF-DERIVED-REPAIR`, or `UNCHECKED` is represented above in the priority queue, complete actionable inventory, or unchecked inventory.

The rough IDs not repeated as individual queue/action rows are non-actionable context, accepted policy, or preservation notes. They are intentionally carried forward through the region findings, preservation policy, and exhaustive-work markers below:

#table(
  columns: (1.8in, auto),
  stroke: 0.4pt,
  inset: 3.5pt,
  [Rough IDs], [Carry-forward disposition],
  [`C1-001`--`C1-009`, `C1-012`], [Front-matter metadata, layout policy, title/contents/index/errata policy, and LaTeX logo preservation are carried by Executive Status, Front Matter, and Settled Decisions.],
  [`C2-001`, `C2-002`, `C2-F02`--`C2-F04`], [Reference order/citation seeding and manual-bibliography prototype notes are carried by References and Citations, Q-011, and the regression wishlist.],
  [`C3-001`--`C3-004`, `C3-007`, `C3-009`, `C3-011`--`C3-013`], [Preface/prologue/chapter 1-2 structure and preservation repairs are carried by Known Findings to Preserve, Code Blocks and Executable Claims, and the C3 unchecked exhaustive marker. Preserve the Cartan noweb repair, chapter 2 `180°` footnote conversion, `Independent` heading, `functions that map`, and cardioid formula repairs during regeneration.],
  [`C4-001`, `C4-002`, `C4-006`, `C4-009`--`C4-013`, `C4-016`], [Chapters 3-5 structure, figure text-layer caveats, exercise coverage, Stokes citation, and the equation 4.3 `X_k` repair are carried by Known Findings to Preserve, Figures, References, and C4-017.],
  [`C5-001`--`C5-003`, `C5-008`--`C5-011`, `C5-015`], [Chapters 6-8 structure, figure caveats, equation 7.9 punctuation repair, equation 7.14 fragility note, and chapter 8 torsion errata policy are carried by Figures, Errata, Known Findings to Preserve, and C5-016.],
  [`C6-001`--`C6-005`, `C6-010`], [Chapters 9-11 structure and representative equation coverage are carried by Equations and Source Drift plus C6-016. Chapter 10 line-break repair remains explicit under Q-017/C6-017.],
  [`C7-001`--`C7-003`, `C7-005`, `C7-008`, `C7-009`, `C7-013`], [Appendix structure, Appendix B matrix-display openness, and Appendix C code/result samples are carried by Code Blocks and Executable Claims plus C7-014.],
  [`C8-001`--`C8-004`, `C8-007`, `C8-009`--`C8-013`], [Index/errata policy, generation architecture, code-entry styling, errata structure/conversion/content samples, and end-matter ordering are carried by Index, Errata, and C8-014.],
)

== Unchecked Inventory

These are the explicit rough-audit `UNCHECKED` items and completion markers. They are not necessarily defects; they are the remaining audit surface.

#table(
  columns: (0.75in, 1.55in, auto),
  stroke: 0.4pt,
  inset: 3.5pt,
  [Rough ID], [Area], [Unchecked work],
  [C2-010], [References], [Visually verify title styling/italics in the bibliography; `pdftotext` cannot decide this.],
  [C2-F01], [References], [Prototype/evaluate custom CSL or bibliography-style route.],
  [C2-F05], [References], [Prototype recommended manual visible `fdg-published-bibliography()` plus hidden bibliography for citation resolution.],
  [C3-014], [Chapter 2 figures], [Raster-compare figures 2-1, 2-2, and 2-3 for placement, scale, caption punctuation, and adjacency.],
  [C3-015], [Preface/prologue/chapters 1-2], [Complete normalized section-level text diffs for every paragraph, footnote, equation, Scheme block, result block, exercise, figure caption, and cross-reference.],
  [C4-017], [Chapters 3-5], [Check every equation number/reference target, all footnote numbers/text, all Scheme blocks/results, all exercises, all figure visual crops/captions, and normalized paragraph text.],
  [C5-016], [Chapters 6-8], [Check every equation number/reference target, all published footnote numbers/text, every Scheme block/result, all exercises, all citations, all section-title line breaks, and figure scaling.],
  [C6-016], [Chapters 9-11], [Check every equation symbol and alignment, all code/result blocks, all footnote numbers/text, all citations, every cross-reference, and all exercises.],
  [C7-014], [Appendices A-C], [Check every Scheme block/result pair, all footnote text and numbering, every equation symbol/alignment, all appendix citations, and all appendix cross-references back into the main text.],
  [C8-014], [Index/errata], [Check every published index term/subterm, alphabetical/symbol sort order, every code/procedure locator, footnote `n` locators, procedure-definition italic locators, every errata sentence, and every errata code block.],
)

== Region Findings

=== Front Matter

Status: #partial with accepted layout differences.

Accepted:

- US-letter layout and custom cover/title treatment are intentional.
- Errata as end matter is intentional.
- `typ/main.pdf` and `fdg-book.pdf` should differ only by cover/index material.

Actionable details:

- Add the CC BY-NC-SA banner.
- Render `special_sales@mitpress.mit.edu` in raw/monospace.
- Keep `creativecommons.org` in main text font.
- Keep stylistic LaTeX baseline offsets.
- Add vertical space before `Library of Congress Cataloging-in-Publication Data`.
- Add indent before `p. cm.`.
- Increase spacing in the `10 9 8 7 6 5 4 3 2 1` print line.
- Use an em dash before `dc23`.
- Right-align `2012042107`.
- Fine-tune the custom cover art in `typ/fdg-lib/cover.typ`: the particle trajectory should run against the edge of the potential wells. Consider a 3D diagram/scene only if it improves the geometric reading without becoming a distraction; this is low priority.
- Add a final visual QA pass for cover/title/end-matter variants after content-critical fixes, because subjective polish issues such as cover trajectory placement are easy to miss in text extraction.

Evidence:

```text
pdftotext -f 1 -l 10 fdg-book/fdg_book.pdf -
pdftotext -f 1 -l 10 fdg-book.pdf -
nl -ba typ/fdg-lib/title.typ | sed -n '35,75p'
nl -ba typ/fdg-lib/cover.typ | sed -n '1,120p'
```

=== References And Citations

Status: #partial.

The reference-number problem has been mostly addressed by seeding bibliography order. Published references begin with SICP as [1], and current samples now match the important callouts. Remaining work is a complete callout/entry audit and a style decision for generated IEEE formatting.

Evidence:

```text
pdftotext -f 230 -l 239 fdg-book/fdg_book.pdf -
pdftotext -f 160 -l 162 fdg-book.pdf -
nl -ba typ/fdg-lib/refs.typ | sed -n '1,180p'
nl -ba typ/content/references.typ | sed -n '1,80p'
```

Regression wishlist:

- Assert SICP is [1].
- Assert Turtle Geometry is [2].
- Assert Scheme standard is [10].
- Assert Spivak is [17].
- Add one text assertion per chapter with citations once numbering is stable.

=== Footnotes And Counters

Status: #exact.

Published footnote numbering is a fidelity requirement. Current implementation resets footnotes per chapter/appendix, generated footnote counts are locked for every chapter/appendix, and PDF checks match published examples. The former chapter 8 footnote display-equation counter drift is fixed under Q-002.

Preservation direction:

- Preserve the chapter/appendix footnote reset in `typ/fdg-lib/chapter.typ`.
- Preserve generated footnote-count assertions for every converted content file.
- Preserve the footnote-aware display-equation conversion path so footnote-only displays do not consume main equation numbers unless the published PDF does.
- Keep Appendix C torsion reference to equation 8.21 covered by regression.

Evidence:

```text
pdftotext -f 143 -l 145 fdg-book.pdf -
pdftotext -f 206 -l 208 fdg-book/fdg_book.pdf -
pdftotext -f 159 -l 161 fdg-book.pdf -
pdftotext -f 232 -l 236 fdg-book/fdg_book.pdf -
rg -n 'footnote|counter|equation' typ/fdg-lib typ/lib.typ scripts/convert-org-to-typst.mjs
```

=== Equations And Source Drift

Status: #bug and #drift.

Highest-confidence PDF/source math mismatches:

#table(
  columns: (1.15in, 1.3in, auto),
  stroke: 0.4pt,
  inset: 4pt,
  [Item], [Source anchors], [Repair note],
  [B.7], [`appendix_b.org:244-253`; `appendix_b.typ:143-151`], [#exact. Fixed to published page 220: `I_0(s)=t`, not `y`.],
  [B.10], [`appendix_b.org:338-343`; `appendix_b.typ:199-201`], [#exact. Fixed to published page 222: left side `AC`, not `AB`.],
  [C.1], [`appendix_c.org:19-22`; `appendix_c.typ:8-14`], [#exact. Fixed to published page 232: second term contains `v`, not repeated `u`.],
  [C.10], [`appendix_c.org:129-133`; `appendix_c.typ:79-81`], [#exact. Fixed to published page 234: primed component belongs on the left side.],
  [10.3], [`chapter010.org:56-60`; `chapter010.typ:25-29`], [#exact. Fixed to published page 155/175: no trailing `(df)`.],
  [10.6], [`chapter010.org:101-124`; `chapter010.typ:46-62`], [#exact. Fixed to published page 155/175: second curl component is on `dy`.],
)

Evidence:

```text
pdftotext -f 152 -l 153 fdg-book.pdf -
pdftotext -f 220 -l 222 fdg-book/fdg_book.pdf -
pdftotext -f 159 -l 161 fdg-book.pdf -
pdftotext -f 232 -l 236 fdg-book/fdg_book.pdf -
pdftotext -f 117 -l 119 fdg-book.pdf -
pdftotext -f 174 -l 176 fdg-book/fdg_book.pdf -
```

=== Code Blocks And Executable Claims

Status: #partial.

The audit has many text/visual checks, but code/result fidelity needs executable verification. Errata items in particular should be categorized as one of:

- hard runtime bug
- chapter-isolation setup dependency
- version-sensitive scmutils behavior
- mathematical/source error
- optional explanatory note

Executable verification plan:

1. Pin the scmutils version or commit used for testing.
2. Record the Scheme preload/setup file for each chapter.
3. Run errata claims as independent transcripts.
4. Store transcripts in an audit evidence directory.
5. Promote high-confidence behaviors into regression tests where feasible.

Errata review highlights:

- Keep hard runtime issues such as `S^2` vs `S^2-type`, missing `R2-rect-point`, missing `V`, missing `SR-basis`, and undefined `eta-inverse`.
- Rewrite `Cartan` order as historical if current Org now defines the block before use.
- Rewrite `literal-oneform-field` to `literal-1form-field`.
- Quote suggested literal symbols: use `'omega` and `'f`.
- Verify `the-ether` against the installed scmutils library before claiming it as the preferred `home` definition.

Evidence:

```text
nl -ba fdg-book/scheme/org/errata.org | sed -n '1,340p'
rg -n 'literal-oneform-field|literal-1form-field|eta-inverse|S\\^2|S\\^2-type|the-ether|home' fdg-book typ
```

=== Figures

Status: #partial.

Current Typst uses imported PDF assets:

```text
typ/assets/figures/fig-2-1.pdf
typ/assets/figures/fig-2-2.pdf
typ/assets/figures/fig-2-3.pdf
typ/assets/figures/fig-4-1.pdf
typ/assets/figures/fig-4-2.pdf
typ/assets/figures/fig-5-1.pdf
typ/assets/figures/fig-6-1.pdf
typ/assets/figures/fig-7-1.pdf
```

These are visually useful, but they cause text-layer artifacts in `pdftotext` because embedded figure text is extracted alongside generated captions. The likely long-term direction is CeTZ redraws so figure geometry, labels, text layers, and captions are native Typst source.

CeTZ migration plan:

#table(
  columns: (1.0in, 1.1in, auto),
  stroke: 0.4pt,
  inset: 4pt,
  [Figure], [Priority], [Plan],
  [2.1-2.3], [#med], [Audit first; redraw once chapter 2 text/equations are stable.],
  [4.1-4.2], [#med], [Good candidates for CeTZ because they are geometric basis/dual-basis diagrams.],
  [5.1], [#med], [Redraw after integration section fidelity is stable.],
  [6.1], [#low], [Keep crop unless visual mismatch appears.],
  [7.1], [#med], [Likely useful CeTZ candidate because it supports covariant-derivative intuition.],
)

Evidence:

```text
rg -n 'fdg-figure|fig-' typ/content typ/fdg-lib/figures.typ
pdftoppm -f 41 -singlefile -png -r 130 fdg-book.pdf /tmp/fdg-current-p41
pdftoppm -f 54 -singlefile -png -r 130 fdg-book.pdf /tmp/fdg-current-p54
pdftoppm -f 82 -singlefile -png -r 130 fdg-book.pdf /tmp/fdg-current-p82
```

=== Index

Status: #bug.

Comparison policy: exact page locators do not need to match while geometry differs. Compare vocabulary, grouping/subentries, ordering, symbol/code styling, footnote `n` locators, and procedure-definition locator styling.

Known gaps:

- Published index opens with symbol and notation entries before A. Current generated index starts with section `4`, then A/B/C.
- Published note says procedure definition pages are italic and `n` marks footnotes. Current note says procedure definition pages are included with generated entries.
- Current generated entries are broader and more mechanical for common code terms such as `define`, `down`, `compose`, and `differential`.

Repair direction:

- Inspect `typ/index.typ:13-390`.
- Determine whether `in-dexter` can style definition locators or whether a manual/custom index layer is needed.
- Add explicit symbol entries or a manual prelude if generated matching cannot cover the published opening block.

Evidence:

```text
nl -ba typ/index.typ | sed -n '1,430p'
pdftotext -f 163 -l 165 fdg-book.pdf -
pdftotext -f 240 -l 249 fdg-book/fdg_book.pdf -
pdftoppm -f 163 -singlefile -png -r 130 fdg-book.pdf /tmp/fdg-current-index-p163
pdftoppm -f 240 -singlefile -png -r 130 fdg-book/fdg_book.pdf /tmp/fdg-published-index-p240
```

=== Errata

Status: #added and #partial.

Errata is intentional project end matter, included after the generated index. It should be compared against `fdg-book/scheme/org/errata.org`, generated `typ/content/errata.typ`, and executable scmutils behavior, not against the published PDF.

Items to change before treating errata as polished:

#table(
  columns: (1.35in, 0.65in, auto),
  stroke: 0.4pt,
  inset: 4pt,
  [Item], [Score], [Action],
  [`Cartan` order], [3/5], [Current Org defines the named block before `geodesic-equation-residuals`; make this historical/published-order wording or remove for current source.],
  [`omega` definition], [3/5], [Change `literal-oneform-field` to `literal-1form-field` and quote `'omega`.],
  [`f` definition], [5/5], [Keep but quote `'f`.],
  [`S^2` issues], [5/5], [Keep; likely hard runtime bugs.],
  [`J` vs `circular`], [5/5], [Keep; local source defines `circular`, then later calls `J`. Also inspect nearby `d/x`.],
  [Simplifier/performance notes], [2-3/5], [Keep only with scmutils version, machine, timeout, and transcript.],
  [`home`/`the-ether`], [3/5], [Verify `the-ether` in installed scmutils before asserting.],
)

Evidence:

```text
nl -ba fdg-book/scheme/org/errata.org | sed -n '1,340p'
nl -ba typ/content/errata.typ | sed -n '1,280p'
pdftotext -f 166 -l 170 fdg-book.pdf -
```

== Regression Wishlist

#table(
  columns: (1.35in, auto),
  stroke: 0.4pt,
  inset: 4pt,
  [Area], [Assertions to add],
  [References], [Reference order and selected callouts for [1], [2], [10], [17].],
  [Footnotes], [Preserve exhaustive per-file generated footnote counts and PDF examples for chapter/appendix resets; no main equation counter increments from footnote-only display equations unless published does so.],
  [Equation drift], [#exact for queued B.7, B.10, C.1, C.10, 10.3, and 10.6 formula drifts; continue semantic math checks during exhaustive chapter passes.],
  [References/crossrefs], [#exact for known double-parenthesized equation refs: regression rejects generated `(@...)` wrappers and PDF `((11.11))`. Continue checking semantic target correctness during exhaustive chapter passes.],
  [Figures], [All 8 figure assets or future CeTZ figures are present; generated captions do not duplicate visibly.],
  [Cover], [Cover trajectory touches/reads against the edge of the wells; any optional 3D version is visually checked across desktop/PDF export and retained only if clearer than the 2D cover.],
  [Index], [Index note matches chosen policy; representative symbol entries exist; representative code entries exist.],
  [Errata], [Errata generated source uses `literal-1form-field`, quoted literal symbols, and expected chapter headings.],
)

== Work Plan

Recommended order:

1. Preserve snapshot before every fix pass.
2. Fix counter infrastructure first: footnotes and equation numbering.
3. Continue semantic math audit. Queued high-confidence formula drifts B.7, B.10, C.1, C.10, 10.3, and 10.6 are exact.
4. Continue semantic cross-reference audit. Converter-level double-parenthesized equation refs are fixed under Q-008.
5. Re-audit references formatting and all citation callouts.
6. Polish front matter details.
7. Fine-tune cover art and run a final visual QA pass for cover/title/end-matter variants.
8. Clean errata wording and run executable errata verification.
9. Rework index policy/implementation.
10. Start CeTZ figure migration after content-critical issues are stable.

== Commit Trail

The rough audit recorded the historical trail through:

```text
693bae8 2026-07-03 cleanup
9512cbe 2026-07-03 draft as default + makefile
413cbff 2026-07-02 fixes
a1006ad 2026-07-02 fmt
c9e554f 2026-07-02 add license, typos
cfa1f68 2026-07-02 Merge commit 'e1481748...' as 'fdg-book'
e148174 2026-07-02 Squashed 'fdg-book/' content from commit 9beb699
9edbac7 2026-07-02 Initial commit
```

This polished audit was created at HEAD:

```text
6cb615bc4e14759678b0e7720efbbedbc8748a92
```
