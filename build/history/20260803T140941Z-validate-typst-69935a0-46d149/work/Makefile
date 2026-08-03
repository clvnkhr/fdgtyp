# Public targets run inside an isolated, immutable build snapshot. The staged
# Makefile below deliberately retains the existing recipes and paths, so the
# scripts remain black boxes while all of their writes land under build/runs.
ifneq ($(FDG_IN_RUN),1)

.DEFAULT_GOAL := from-raw

RUN_TARGETS := \
	from-raw from-raw-scheme from-raw-cljs from-raw-both raw generate-typst figure-pdfs \
	prepare prepare-typst format-scheme validate-typst validate-pdfs \
	emmy-convert compile-smoke compile-emmy smoke-emmy capture-emmy format-emmy validate-emmy \
	emmy-check emmy-refresh emmy-blocks test-emmy compare-outputs \
	emmy-runner runner-dev runner-build \
	render-draft render-book render-all just-pdf draft book scheme cljs both \
	scheme-draft scheme-book cljs-draft cljs-book both-draft both-book \
	scheme-draft-pdf scheme-book-pdf cljs-draft-pdf cljs-book-pdf \
	both-draft-pdf both-book-pdf

.PHONY: help $(RUN_TARGETS)

help:
	@printf '%s\n' \
	  'FDG build workflows' \
	  '' \
	  '  make                         build all editions in a fresh staging workspace, then promote build/current' \
	  '  make just-pdf                render current generated inputs, then promote build/current' \
	  '  make emmy-refresh            refresh captured results, then promote build/current' \
	  '  make <target> FDG_RUN_ID=x   record a readable identifier in build/current/run.json' \
	  '' \
	  'Outputs are never written into the source checkout; the three latest successful builds are retained.'

$(RUN_TARGETS):
	node scripts/run-build.mjs $@

else

TYPST ?= typst

.DEFAULT_GOAL := from-raw

.PHONY: help \
	from-raw from-raw-scheme from-raw-cljs from-raw-both raw generate-typst figure-pdfs \
	prepare prepare-typst format-scheme validate-typst validate-pdfs \
	emmy-convert compile-smoke compile-emmy smoke-emmy capture-emmy format-emmy validate-emmy \
	emmy-check emmy-refresh emmy-blocks test-emmy compare-outputs \
	emmy-runner runner-dev runner-build \
	render-draft render-book render-all just-pdf draft book scheme cljs both \
	scheme-draft scheme-book cljs-draft cljs-book both-draft both-book \
	scheme-draft-pdf scheme-book-pdf cljs-draft-pdf cljs-book-pdf \
	both-draft-pdf both-book-pdf

help:
	@printf '%s\n' \
	  'FDG build workflows' \
	  '' \
	  '  make                         regenerate sources, refresh Emmy, validate, render all PDFs' \
	  '  make just-pdf                render the three final PDFs from current generated inputs' \
	  '  make scheme-book-pdf         render one PDF only (no regeneration or checks)' \
	  '  make raw                     regenerate Typst from the pinned Org source' \
	  '  make emmy-convert            regenerate Scheme/Emmy blocks and runner manifest' \
	  '  make smoke-emmy              run Emmy examples without writing result comments' \
	  '  make capture-emmy            refresh captured Emmy result comments (writes files)' \
	  '  make emmy-check              compile, smoke-test, and validate existing Emmy blocks' \
	  '  make emmy-refresh            convert, capture, format, and validate Emmy blocks' \
	  '  make runner-dev              watch the browser runner using current generated blocks' \
	  '  make runner-build            make an optimized browser runner bundle' \
	  '  make compare-outputs         refresh Emmy and render the Scheme/CLJS comparison PDF' \
	  '  make figure-pdfs             recreate cropped PDF figure assets (manual/slow)'

from-raw: raw
	$(MAKE) prepare
	$(MAKE) render-all

from-raw-scheme: raw
	$(MAKE) prepare
	$(MAKE) scheme-draft-pdf scheme-book-pdf

from-raw-cljs: raw
	$(MAKE) prepare
	$(MAKE) cljs-draft-pdf cljs-book-pdf

from-raw-both: raw
	$(MAKE) prepare
	$(MAKE) both-draft-pdf both-book-pdf

raw: generate-typst

generate-typst:
	node scripts/convert-org-to-typst.mjs

figure-pdfs:
	node scripts/extract-figure-pdfs.mjs

emmy-convert:
	node scripts/convert-scheme-to-emmy.mjs

# The smoke build is enough for command-line verification. Building the browser
# app and worker is reserved for runner-dev and runner-build.
compile-smoke:
	cd emmy-runner && clojure -M:shadow-cljs compile smoke

compile-emmy: compile-smoke
	cd emmy-runner && clojure -M:shadow-cljs compile worker app

# This is deliberately read-only: it checks the existing captured results
# without refreshing them. Use capture-emmy only when updating those comments
# is intentional.
smoke-emmy: compile-smoke
	node scripts/run-emmy-smoke.mjs --no-capture-results

capture-emmy: compile-smoke
	node scripts/run-emmy-smoke.mjs

format-emmy:
	clojure -M:format-emmy codeblocks emmy-runner/public/generated

validate-emmy:
	node scripts/assert-emmy-conversion.mjs
	node scripts/compare-scm-cljs-outputs.mjs --check --no-report

emmy-check:
	$(MAKE) smoke-emmy
	$(MAKE) validate-emmy

emmy-refresh:
	$(MAKE) emmy-convert
	$(MAKE) capture-emmy
	$(MAKE) format-emmy
	$(MAKE) validate-emmy

# Backwards-compatible names. emmy-blocks is the mutating refresh operation;
# test-emmy is now a check of the current generated state.
emmy-blocks: emmy-refresh

test-emmy: emmy-check

format-scheme:
	./scripts/install-racket-fmt.sh
	node scripts/format-scheme-blocks.mjs

validate-typst:
	node scripts/assert-typst-regressions.mjs --skip-pdf

validate-pdfs:
	node scripts/assert-typst-regressions.mjs --pdf-only

prepare-typst:
	$(MAKE) format-scheme
	$(MAKE) validate-typst

prepare:
	$(MAKE) emmy-refresh
	$(MAKE) prepare-typst

compare-outputs: emmy-refresh
	$(TYPST) compile --root . output-comparison.typ output-comparison.pdf

runner-dev:
	cd emmy-runner && clojure -M:shadow-cljs watch app worker

runner-build:
	cd emmy-runner && npm run build

# Retain the original target for a fresh runner session; runner-dev is the
# quick path when generated blocks are already current.
emmy-runner: emmy-refresh
	$(MAKE) runner-dev

just-pdf: scheme-book-pdf cljs-book-pdf both-book-pdf

render-draft: scheme-draft-pdf cljs-draft-pdf both-draft-pdf

render-book: scheme-book-pdf cljs-book-pdf both-book-pdf

render-all: render-draft render-book
	$(MAKE) validate-pdfs

draft:
	$(MAKE) prepare
	$(MAKE) render-draft

book:
	$(MAKE) prepare
	$(MAKE) render-book

scheme:
	$(MAKE) prepare
	$(MAKE) scheme-draft-pdf scheme-book-pdf

cljs:
	$(MAKE) prepare
	$(MAKE) cljs-draft-pdf cljs-book-pdf

both:
	$(MAKE) prepare
	$(MAKE) both-draft-pdf both-book-pdf

scheme-draft:
	$(MAKE) prepare
	$(MAKE) scheme-draft-pdf

scheme-book:
	$(MAKE) prepare
	$(MAKE) scheme-book-pdf

cljs-draft:
	$(MAKE) prepare
	$(MAKE) cljs-draft-pdf

cljs-book:
	$(MAKE) prepare
	$(MAKE) cljs-book-pdf

both-draft:
	$(MAKE) prepare
	$(MAKE) both-draft-pdf

both-book:
	$(MAKE) prepare
	$(MAKE) both-book-pdf

scheme-draft-pdf:
	$(TYPST) compile --root . --input code=scheme typ/main.typ typ/main.pdf

scheme-book-pdf:
	$(TYPST) compile --root . --input draft=false --input code=scheme typ/main.typ fdg-book.pdf

cljs-draft-pdf:
	$(TYPST) compile --root . --input code=clojure typ/main.typ typ/main-cljs.pdf

cljs-book-pdf:
	$(TYPST) compile --root . --input draft=false --input code=clojure typ/main.typ fdg-book-cljs.pdf

both-draft-pdf:
	$(TYPST) compile --root . --input code=both typ/main.typ typ/main-both.pdf

both-book-pdf:
	$(TYPST) compile --root . --input draft=false --input code=both typ/main.typ fdg-book-both.pdf

endif
