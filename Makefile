TYPST ?= typst

.DEFAULT_GOAL := from-raw

.PHONY: from-raw draft book prepare emmy-blocks emmy-runner

from-raw:
	node scripts/extract-figure-pdfs.mjs
	node scripts/convert-org-to-typst.mjs
	$(MAKE) draft book

prepare: emmy-blocks
	./scripts/install-racket-fmt.sh
	node scripts/format-scheme-blocks.mjs
	node scripts/assert-typst-regressions.mjs

emmy-blocks:
	node scripts/convert-scheme-to-emmy.mjs
	cd emmy-runner && clojure -M:shadow-cljs compile smoke
	cd emmy-runner && node target/smoke.js --capture-results
	node scripts/assert-emmy-conversion.mjs

emmy-runner: emmy-blocks
	cd emmy-runner && clojure -M:shadow-cljs watch app

draft: prepare
	$(TYPST) compile typ/main.typ typ/main.pdf

book: prepare
	$(TYPST) compile --input draft=false typ/main.typ fdg-book.pdf
