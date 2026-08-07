// Human-editable preface for the ClojureScript and combined editions.
// This file is intentionally authored outside the generated typ/content tree.
#import "../lib.typ": fdg-chapter

#fdg-chapter(
  "Preface to the Merely ClojureScript Edition",
  numbered: false,
  eq-prefix: "0",
  ref-label: "",
)[
  This edition of the book is a vibe-coded monstrosity created by a mathematician who can program predominantly in Python but not (yet?) in Scheme or Clojure(Script). Starting from #link("https://www.github.com/mentat-collective/fdg-book", "mentat-collective/fdg-book"), ChatGPT 5.5 (and later ChatGPT 5.6) was used to create the PDF you are currently reading.

  This book can be found in the Github repository #link("https://github.com/clvnkhr/fdgtyp/actions", "clvnkhr/fdgtyp"). In this repository, one will also find the variant versions (Scheme only, ClojureScript, and both Scheme and ClojureScript), a copy of the org version, the code that produces variant books version, and a companion web-runner that can run the ClojureScript codeblocks in the book. This companion runner exists as a Github page at #link("https://clvnkhr.github.io/fdgtyp/", "https://clvnkhr.github.io/fdgtyp/") and can be run locally - see the emmy-runner folder.

  There was no attempt made at matching the pagination or style of the original PDF book.

  On the codeblocks: the `.scm` codeblocks are updated after an has 'audited' them. But I did not run any .scm code. The level of trust should be tempered against the following: my LLM(s) have read the code, and have converted the code to ClojureScript (i.e. there is a somewhat ad-hoc script that does this), and have 'audited' the ClojureScript code to compile and do what the surrounding text says it should do. This has led to discovering some errors in the original `.scm` codeblocks, such as outputs that were not commented out, typos in function names, or incorrectly saved outputs.
  The ClojureScript blocks compile and their outputs match the (audited) Scheme output comments. There were some changes that we had to put in to get to this point - apart from changing ```scheme 1/2``` to ```clojure (/ 1 2)``` to avoid Javascript computing as floats, we needed to manually add calls to ```clojure simplify``` to get outputs closer to scmutils' outputs. Also, we (the AI, really) had to write a small compatability layer (`emmy-runner/src/fdg/compat.cljs`) to get closer to scmutils' behavior.

  I also (got the AI to) redo the diagrams and the cover page. The cover page is a real plot of trajectories, but is not a perfect recreation as I ran out of time to improve it further.

  A comment on why this is a 'mere' translation. The name is a direct reference to #link("https://github.com/merely-true/merely-true", "merely-true/merely-true"), which is a "Lean project for AI generated mathematics, with very permissive rules about what can be contributed." Although there seem to be other projects now in this vein, such as Mathlib's #link("https://x.com/AlexKontorovich/status/2059317816960987602", "Formal Frontier") and the #link("https://github.com/TauCetiProject/TauCeti", "TauCeti Project"), they have avoided the beautifully evocative adjective 'merely'. For the Lean community, AI contributions are at time of writing just not good enough for inclusion into the main mathlib project, even though they do certify correctness to the same extent. The merely-true project was meant as a suitable dumping ground for these less-than-stellar AI contributions. So it is for us, that I would not dare to call this a properly vetted translation, for I do not personally have the skills, and surely the result is inferior as a result. Yet AI has allowed me to convert the org and pdf book into a Typst book with ClojureScript codeblocks. The codeblocks all compile, and the book compiles. The diagrams are redone in Typst/#link("https://cetz-package.github.io/", "CetZ"). And now I am excited to read the book, and begin to learn some ClojureScript (and perhaps some differential geometry).

  Last updated: 5th August 2026.

  The page you just read is my sole human contribution in the book.

  Calvin
]
