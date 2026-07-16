TYPST ?= typst

.PHONY: draft book all from-raw install-racket-fmt format-scheme check-scheme-format

draft: format-scheme
	$(TYPST) compile typ/main.typ typ/main.pdf

book: format-scheme
	$(TYPST) compile --input draft=false typ/main.typ fdg-book.pdf

all: draft book

from-raw: install-racket-fmt
	node scripts/extract-figure-pdfs.mjs
	node scripts/convert-org-to-typst.mjs
	node scripts/format-scheme-blocks.mjs
	node scripts/assert-typst-regressions.mjs
	$(TYPST) compile --input draft=false typ/main.typ fdg-book.pdf

install-racket-fmt:
	./scripts/install-racket-fmt.sh

format-scheme:
	node scripts/format-scheme-blocks.mjs

check-scheme-format:
	node scripts/format-scheme-blocks.mjs --check
