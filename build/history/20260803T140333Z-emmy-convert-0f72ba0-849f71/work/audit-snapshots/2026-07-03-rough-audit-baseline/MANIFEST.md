# FDG Audit Snapshot: 2026-07-03 Rough Audit Baseline

Purpose: preserve the rendered state that the rough audit cited before any fix pass or polished-audit rewrite can reflow `fdg-book.pdf`.

## Repository State

- Snapshot date: 2026-07-03
- Git HEAD: `6cb615bc4e14759678b0e7720efbbedbc8748a92`
- Dirty files at snapshot time:
  - `M typ/audit.pdf`
  - `M typ/audit.typ`
  - `?? audit-snapshots/`

## Captured Artifacts

- `fdg-book.pdf`
  - Creator: Typst 0.15.0
  - Pages: 170
  - Page size: 612 x 792 pts (letter)
- `audit.pdf`
  - Copied from `typ/audit.pdf`
  - Creator: Typst 0.15.0
  - Pages: 32
  - Page size: 612 x 792 pts (letter)
- `audit.typ`
  - Copied from `typ/audit.typ`
- `audit-rough.pdf`
  - Archived rough audit PDF, moved here from `typ/audit-rough.pdf` after the polished audit was created.
  - Pages: 32
  - Page size: 612 x 792 pts (letter)
- `audit-rough.typ`
  - Archived rough audit source, moved here from `typ/audit-rough.typ` after the polished audit was created.
- `published-fdg_book.pdf`
  - Copied from `fdg-book/fdg_book.pdf`

## Raster Evidence

- `rasters/current-index-p163.png`
- `rasters/current-errata-p166.png`
- `rasters/published-index-p240.png`
- `rasters/current-appendix-b-p152.png`
- `rasters/published-appendix-b-p220.png`

## Build And Evidence Commands

```text
typst compile typ/audit.typ typ/audit.pdf
node scripts/assert-typst-regressions.mjs
pdfinfo fdg-book.pdf
pdfinfo typ/audit.pdf
pdftoppm -f 163 -singlefile -png -r 130 fdg-book.pdf audit-snapshots/2026-07-03-rough-audit-baseline/rasters/current-index-p163
pdftoppm -f 166 -singlefile -png -r 130 fdg-book.pdf audit-snapshots/2026-07-03-rough-audit-baseline/rasters/current-errata-p166
pdftoppm -f 240 -singlefile -png -r 130 fdg-book/fdg_book.pdf audit-snapshots/2026-07-03-rough-audit-baseline/rasters/published-index-p240
pdftoppm -f 152 -singlefile -png -r 130 fdg-book.pdf audit-snapshots/2026-07-03-rough-audit-baseline/rasters/current-appendix-b-p152
pdftoppm -f 220 -singlefile -png -r 130 fdg-book/fdg_book.pdf audit-snapshots/2026-07-03-rough-audit-baseline/rasters/published-appendix-b-p220
```

## Interpretation Rule

Any rough-audit row that cites a bare `current physical page N` should be interpreted as referring to this snapshot unless a later row explicitly says it was reverified after a fix.

The canonical rough audit files for this snapshot are `audit-rough.typ` and `audit-rough.pdf`. The older `audit.typ` and `audit.pdf` files are the original copied baseline names from the moment the snapshot was first created.
