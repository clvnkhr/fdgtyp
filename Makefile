TYPST ?= typst

.DEFAULT_GOAL := from-raw

.PHONY: from-raw from-raw-scheme from-raw-cljs raw prepare emmy-blocks compare-outputs emmy-runner \
	draft book scheme cljs scheme-draft scheme-book cljs-draft cljs-book

from-raw: raw
	$(MAKE) draft book

from-raw-scheme: raw
	$(MAKE) scheme

from-raw-cljs: raw
	$(MAKE) cljs

raw:
	node scripts/extract-figure-pdfs.mjs
	node scripts/convert-org-to-typst.mjs

prepare: emmy-blocks
	./scripts/install-racket-fmt.sh
	node scripts/format-scheme-blocks.mjs
	node scripts/assert-typst-regressions.mjs

emmy-blocks:
	cd emmy-runner && clojure -M:shadow-cljs compile smoke
	node scripts/convert-scheme-to-emmy.mjs
	-node scripts/run-emmy-smoke.mjs
	-clojure -M:format-emmy codeblocks emmy-runner/public/generated
	-node scripts/assert-emmy-conversion.mjs
	node scripts/compare-scm-cljs-outputs.mjs

compare-outputs: emmy-blocks
	$(TYPST) compile --root . output-comparison.typ output-comparison.pdf

emmy-runner: emmy-blocks
	cd emmy-runner && clojure -M:shadow-cljs watch app

draft: scheme-draft cljs-draft

book: scheme-book cljs-book

scheme: scheme-draft scheme-book

cljs: cljs-draft cljs-book

scheme-draft: prepare
	$(TYPST) compile --root . --input code=scheme typ/main.typ typ/main.pdf

scheme-book: prepare
	$(TYPST) compile --root . --input draft=false --input code=scheme typ/main.typ fdg-book.pdf

cljs-draft: prepare
	$(TYPST) compile --root . --input code=clojure typ/main.typ typ/main-cljs.pdf

cljs-book: prepare
	$(TYPST) compile --root . --input draft=false --input code=clojure typ/main.typ fdg-book-cljs.pdf
