TYPST ?= typst

.DEFAULT_GOAL := from-raw

.PHONY: from-raw from-raw-scheme from-raw-cljs from-raw-both raw figure-pdfs prepare \
	emmy-blocks compare-outputs emmy-runner just-pdf draft book scheme cljs both \
	scheme-draft scheme-book cljs-draft cljs-book both-draft both-book \
	scheme-draft-pdf scheme-book-pdf cljs-draft-pdf cljs-book-pdf \
	both-draft-pdf both-book-pdf

from-raw: raw
	$(MAKE) draft book

from-raw-scheme: raw
	$(MAKE) scheme

from-raw-cljs: raw
	$(MAKE) cljs

from-raw-both: raw
	$(MAKE) both

raw:
	node scripts/convert-org-to-typst.mjs

figure-pdfs:
	node scripts/extract-figure-pdfs.mjs

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
	node scripts/compare-scm-cljs-outputs.mjs --check

compare-outputs: emmy-blocks
	$(TYPST) compile --root . output-comparison.typ output-comparison.pdf

emmy-runner: emmy-blocks
	cd emmy-runner && clojure -M:shadow-cljs watch app

just-pdf: scheme-book-pdf cljs-book-pdf both-book-pdf

draft: scheme-draft cljs-draft both-draft

book: scheme-book cljs-book both-book

scheme: scheme-draft scheme-book

cljs: cljs-draft cljs-book

both: both-draft both-book

scheme-draft: prepare
	$(MAKE) scheme-draft-pdf

scheme-book: prepare
	$(MAKE) scheme-book-pdf

cljs-draft: prepare
	$(MAKE) cljs-draft-pdf

cljs-book: prepare
	$(MAKE) cljs-book-pdf

both-draft: prepare
	$(MAKE) both-draft-pdf

both-book: prepare
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
