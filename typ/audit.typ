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
  [Footnotes], [#bug], [Published footnote numbering is a fidelity requirement. Current global Typst numbering drifts from published chapter/appendix numbering.],
  [Equations], [#bug], [Several source/PDF math drifts are known. Equation counter drift also breaks downstream references.],
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
  [Book body prose/math/code], [Published PDF first, Org second], [When Org and PDF differ, classify as source drift. Repair in converter or source according to the fix policy below.],
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
  [Org source], [The Org is clearly wrong, the correction belongs upstream, and regeneration should preserve it. Example: source math drift such as Appendix C equation C.1.],
  [Converter], [A class of Org patterns needs systematic conversion or generated Typst needs stable repairs after regeneration. Example: manual equation alignment markers, double-parenthesized equation references, and PDF-derived reconstruction rules.],
  [Typst helper/lib], [The content is correct but presentation/counters/layout are wrong across many generated files. Example: footnote numbering and figure rendering.],
  [Generated Typst], [Only for temporary diagnosis. Avoid direct generated-file fixes unless they are immediately moved into Org/converter/helper code.],
  [Audit only], [The issue is accepted styling, project policy, or a warning that should not alter the book.],
)

Every fix should add or update a regression when the behavior can be checked cheaply.

== Priority Repair Queue

#table(
  columns: (0.45in, 0.85in, 1.4in, auto),
  stroke: 0.4pt,
  inset: 4pt,
  [Pri], [Status], [Issue], [Repair direction and evidence],
  [P0], [#bug], [Footnote numbering], [Published footnote numbering is required. Current Typst footnotes continue globally; examples include Appendix A first note rendering as 108 instead of 1. Repair likely belongs in `typ/fdg-lib` footnote/chapter handling. Recheck chapter 8 because footnote display equations currently perturb equation numbering and references.],
  [P0], [#bug], [Equation counter drift], [Chapter 8 display equations inside footnotes cause later equation numbers/references to drift; Appendix C currently says torsion is equation (8.23) while published says 8.21. Fix shared counter behavior before local cross-reference patches. Evidence: rough entries C5-012 and C7-012.],
  [P1], [#drift], [Appendix B equation B.7], [Published page 220 has `I_0(s)=t`; Org `fdg-book/scheme/org/appendix_b.org:244-253` and generated `typ/content/appendix_b.typ:143-151` render `I_0(s)=y`. Repair from PDF.],
  [P1], [#drift], [Appendix B equation B.10], [Published page 222 labels the product `AC`; Org `appendix_b.org:338-343` and generated `appendix_b.typ:199-201` label the left side `AB`. Repair from PDF.],
  [P1], [#drift], [Appendix C equation C.1], [Published page 232 has second term `g T(v, omega)`; Org `appendix_c.org:19-22` and generated `appendix_c.typ:8-14` repeat `u`. Repair in Org or converter with explicit PDF-derived note.],
  [P1], [#drift], [Appendix C equation C.10], [Published page 234 has primed Riemann component on the left; Org `appendix_c.org:129-133` and generated `appendix_c.typ:79-81` put the unprimed component there. Repair with nearby C.8-C.10 notation in mind.],
  [P1], [#bug], [Chapter 10 equations 10.3 and 10.6], [Equation 10.3 has a sign/formula mismatch against published page 175. Equation 10.6 needs both formula repair and manual converter-side alignment characters to match the PDF. Evidence: rough entries C6-006 to C6-009.],
  [P1], [#bug], [Chapter 11 double equation references], [Current page 131 renders `((11.11))`; generated `typ/content/chapter011.typ:68` inherits already-parenthesized source. Fix reference rewriting in `scripts/convert-org-to-typst.mjs:1160-1196` rather than patching one file.],
  [P2], [#bug], [Index note and symbol entries], [Published index page 240 says procedure definition locators are italic and `n` marks footnotes. Current page 163 says generated entries include procedure definitions and lacks the opening symbol-entry block. Fix `typ/index.typ:13-390` or document limitations explicitly.],
  [P2], [#bug], [Copyright/CIP front matter], [Known visual details still need repair: missing CC BY-NC-SA banner; `special_sales@mitpress.mit.edu` raw/monospace; extra vertical space before Library of Congress line; indent before `p. cm.`; wider print-line spacing; em dash before `dc23`; right-align `2012042107`. Source: `typ/fdg-lib/title.typ:40-69`.],
  [P2], [#partial], [References formatting], [Numbering/order now match samples via seeded bibliography order. Exhaustively compare all callouts and all 21 bibliography entries; decide whether IEEE-style formatting is acceptable.],
  [P3], [#partial], [Errata wording/code], [Keep errata as project-added, but adjust low-confidence wording and fix suggested code names. `literal-oneform-field` should be `literal-1form-field`; suggested literal symbols should be quoted.],
  [P3], [#partial], [Figures], [Current PDF crops are visually serviceable but create text-layer extraction artifacts. Plan CeTZ redraws figure by figure after content-critical fixes.],
)

== Complete Actionable Inventory

This table reconciles the rough audit against this polished audit. Every rough row marked `BUG`, `SOURCE-DRIFT`, or `PDF-REPAIR` should appear here, even when it is lower priority or already covered by a broader repair theme.

#table(
  columns: (0.75in, 0.85in, 1.3in, auto),
  stroke: 0.4pt,
  inset: 3.5pt,
  [Rough ID], [Status], [Area], [Action],
  [C1-010], [#bug], [Front matter], [Add missing CC BY-NC-SA banner/mark near the license paragraph in `typ/fdg-lib/title.typ:43`.],
  [C1-011], [#bug], [Front matter], [Render only `special_sales@mitpress.mit.edu` as raw/monospace; keep `creativecommons.org` in main text font.],
  [C1-013], [#bug], [Front matter], [Increase vertical space before `Library of Congress Cataloging-in-Publication Data`.],
  [C1-014], [#bug], [Front matter], [Indent the `p. cm.` line in CIP data.],
  [C1-015], [#bug], [Front matter], [Increase spacing in the final `10 9 8 7 6 5 4 3 2 1` print line.],
  [C1-016], [#bug], [Front matter], [Use an em dash before `dc23`.],
  [C1-017], [#bug], [Front matter], [Right-align `2012042107`.],
  [C2-003], [#bug], [References], [Current IEEE bibliography style does not match published prose; prototype manual visible bibliography or custom renderer.],
  [C2-004], [#bug], [References], [Restore published author phrasing, including `with Julie Sussman` and `with Meinhard E. Mayer`.],
  [C2-005], [#bug], [References], [Entry [6] must render the Dover/New York/1989 note.],
  [C2-006], [#bug], [References], [Entry [10] must render IEEE organization and standard number.],
  [C2-007], [#bug], [References], [Entry [18] must use published memo wording: `Artificial Intelligence Laboratory memo AIM-2002-018, November 2002.`],
  [C2-008], [#bug], [References], [Entry [21] must use published prose `Free software is available at:` followed by URL.],
  [C2-009], [#bug], [References], [Book entries should follow published publisher/address/year order rather than current IEEE ordering.],
  [C2 entry matrix], [#bug], [References], [All 21 entries remain individually actionable for prose/style comparison: [1]-[21] in rough lines C2 matrix.],
  [C3-005], [#bug], [Prologue], [Preserve Papert citation `[13]` inside prologue footnote; likely converter citation handling inside footnotes.],
  [C3-006], [#drift], [Prologue], [Compare and possibly repair lowercase `this lagrangian` source drift against published prose.],
  [C3-008], [#bug], [Chapter 1], [Normalize `90°/90◦ E` degree glyph and spacing in longitude prose.],
  [C3-010], [#bug], [Chapter 1], [Fix chapter 1 footnote numbering as part of global published-footnote policy.],
  [C4-003], [#bug], [Chapter 3], [Remove literal hyphenation artifacts such as `di- rection`, `deriva- tives`, and `com- ponents` via converter cleanup.],
  [C4-004], [#bug], [Chapter 3], [Fix chapter 3 footnote numbering as part of global published-footnote policy.],
  [C4-005], [#bug], [Chapter 3], [Fix equation-reference drift and double-parentheses near one-form discussion; published target is `(3.41)`, not `((3.43))`.],
  [C4-007], [#bug], [Chapter 4], [Repair equation 4.6 layout so `c_j^k(m)` stays with the main displayed equation before the number.],
  [C4-008], [#bug], [Chapter 4], [Recheck/fix references to equations 3.40/3.41 after chapter 3 equation label repair.],
  [C4-014], [#bug], [Chapter 5], [Prevent footnote display equations from advancing visible body equation numbers.],
  [C4-015], [#drift], [Chapter 5], [Repair equation 5.24 commutator term `omega([v_i, v_j], ...)` and add manual converter-side alignment chars.],
  [C5-004], [#drift], [Chapter 6], [Repair `make fake-vector-field` to `make-fake-vector-field`.],
  [C5-005], [#drift], [Chapter 6], [Repair `coordinate-system at` to `coordinate-system-at`.],
  [C5-006], [#drift], [Chapter 6], [Repair pullback parameter mismatch `f-on-m` vs `f-on-M`.],
  [C5-007], [#drift], [Chapter 7], [Repair prose typo `asume` to `assume`.],
  [C5-012], [#bug], [Chapter 8], [Fix footnote display-equation counter drift that shifts body equations 8.10-8.12.],
  [C5-013], [#drift], [Chapter 8], [Repair `However ,` to `However,`.],
  [C5-014], [#drift], [Chapter 8], [Repair symmetric-connection condition to show lower indices swapped on the right: `Gamma^i_jk = Gamma^i_kj`.],
  [C6-006], [#repair], [Chapter 10], [Preserve converter repairs for malformed Hodge-dual source text around `g^{ij}` and epsilon subscript.],
  [C6-007], [#drift], [Chapter 10], [Repair equation 10.3 so `grad(f) = g^sharp(df)` has no trailing `(df)`.],
  [C6-008], [#bug], [Chapter 10], [Improve equations 10.5-10.6 display layout with manual alignment/line-break repair.],
  [C6-009], [#drift], [Chapter 10], [Repair equation 10.6 second curl component basis form from `dx` to published `dy`.],
  [C6-011], [#repair], [Chapter 11], [Preserve PDF-derived reconstructions for equations 11.1-11.14 and 11.20-11.21.],
  [C6-012], [#repair], [Chapter 11], [Preserve intentional `Einsten` to `Einstein` repair.],
  [C6-013], [#repair], [Chapter 11], [Preserve Lorentz interval repair from repeated `xi^2` to `xi^1`.],
  [C6-014], [#bug], [Chapter 11], [Fix double-parenthesized equation reference `((11.11))`.],
  [C6-015], [#repair], [Chapter 11], [Preserve code repairs for `make-4tuple`, `R^(-1)`, and norm notation.],
  [C7-004], [#bug], [Appendix A], [Fix appendix footnote numbering as part of global published-footnote policy.],
  [C7-006], [#drift], [Appendix B], [Repair equation B.7 selector result to `I_0(s)=t`.],
  [C7-007], [#drift], [Appendix B], [Repair equation B.10 left side to `AC`.],
  [C7-010], [#drift], [Appendix C], [Repair equation C.1 second term to `g T(v, omega)`.],
  [C7-011], [#drift], [Appendix C], [Repair equation C.10 primed/unprimed left side.],
  [C7-012], [#bug], [Appendix C], [Recheck torsion reference after chapter 8 equation-counter fix; do not patch locally first.],
  [C8-005], [#bug], [Index], [Fix index explanatory note and procedure-definition locator policy.],
  [C8-006], [#bug], [Index], [Add/restore published opening symbol and notation index entries.],
  [C8-008], [#bug], [Index], [Reduce/generated index granularity or document policy; current entries are too mechanical versus curated published index.],
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

Evidence:

```text
pdftotext -f 1 -l 10 fdg-book/fdg_book.pdf -
pdftotext -f 1 -l 10 fdg-book.pdf -
nl -ba typ/fdg-lib/title.typ | sed -n '35,75p'
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

Status: #bug.

Published footnote numbering is a fidelity requirement. Current numbering is global across the book. This creates visible mismatches in appendices and likely in chapters. More importantly, chapter 8 footnote display equations affect equation counters and corrupt downstream references.

Repair direction:

- Inspect `typ/fdg-lib/chapter.typ`, `typ/fdg-lib/refs.typ`, and any footnote show rules.
- Decide whether footnotes reset per chapter/appendix or follow the exact published pattern.
- Ensure display equations inside footnotes do not consume main equation numbers unless the published PDF does.
- After fixing, recheck Appendix C torsion reference to equation 8.21.

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
  [B.7], [`appendix_b.org:244-253`; `appendix_b.typ:143-151`], [Use published page 220: `I_0(s)=t`, not `y`.],
  [B.10], [`appendix_b.org:338-343`; `appendix_b.typ:199-201`], [Use published page 222: left side `AC`, not `AB`.],
  [C.1], [`appendix_c.org:19-22`; `appendix_c.typ:8-14`], [Use published page 232: second term should contain `v`, not repeated `u`.],
  [C.10], [`appendix_c.org:129-133`; `appendix_c.typ:79-81`], [Use published page 234: primed component belongs on the left side.],
  [10.3], [`chapter010.org:56-60`; `chapter010.typ:25-29`], [Visual PDF check found sign/formula mismatch. Reopen with published page 175 before patching.],
  [10.6], [`chapter010.org:101-124`; `chapter010.typ:46-62`], [Second curl component should be on `dy`; also requires manual converter-side alignment chars.],
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
  [Footnotes], [First footnote number per chapter/appendix; no main equation counter increments from footnote-only display equations unless published does so.],
  [Equation drift], [Text assertions for B.7, B.10, C.1, C.10, 10.3, and 10.6 after fixes.],
  [References/crossrefs], [No double-parenthesized equation references such as `((11.11))`.],
  [Figures], [All 8 figure assets or future CeTZ figures are present; generated captions do not duplicate visibly.],
  [Index], [Index note matches chosen policy; representative symbol entries exist; representative code entries exist.],
  [Errata], [Errata generated source uses `literal-1form-field`, quoted literal symbols, and expected chapter headings.],
)

== Work Plan

Recommended order:

1. Preserve snapshot before every fix pass.
2. Fix counter infrastructure first: footnotes and equation numbering.
3. Fix high-confidence source/PDF math drift: B.7, B.10, C.1, C.10, 10.3, 10.6.
4. Fix converter-level reference rewriting, including double-parenthesized equation refs.
5. Re-audit references formatting and all citation callouts.
6. Polish front matter details.
7. Clean errata wording and run executable errata verification.
8. Rework index policy/implementation.
9. Start CeTZ figure migration after content-critical issues are stable.

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
