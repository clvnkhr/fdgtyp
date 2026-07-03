TYPST ?= typst

.PHONY: draft book all

draft:
	$(TYPST) compile typ/main.typ typ/main.pdf

book:
	$(TYPST) compile --input draft=false typ/main.typ fdg-book.pdf

all: draft book
