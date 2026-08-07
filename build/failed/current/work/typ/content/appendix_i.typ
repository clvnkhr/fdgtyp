// Project-authored source and edition change log.
// Keep this summary reader-facing; detailed evidence remains in typ/audit.typ.
#import "../lib.typ": fdg-chapter

#fdg-chapter("Source and Edition Change Log", numbered: true, eq-prefix: "I", ref-label: "chap-appendix-i")[
This is a living record of reader-visible changes between the pinned Org source, the published PDF, and the Typst editions in this repository. It is not a claim that every difference is an error correction: each entry identifies whether the current text follows the published PDF, translates the book into ClojureScript, adds project material, or changes presentation.

The primary comparison sources are `fdg-book/scheme/org/`, `fdg-book/fdg_book.pdf`, and the generated files under `typ/content/`. The Org checkout is kept as a historical source. Durable corrections belong in the Org-to-Typst converter or an authored Typst library, and should be accompanied by a regression assertion when practical.

== Source/PDF disagreements <sec-I.1>

- *I-001 — Chapter 2 heading.* The Org source contains a misspelling; the current reader-facing text says *Independent*, following the published PDF.
- *I-002 — Appendix B, equation B.7.* The Org source uses the wrong selector result; the current generated equation uses `t`, matching the published PDF.
- *I-003 — Appendix B, equation B.10.* The Org source has a mismatched tensor name on the left; the current equation uses `AC`, as in the published PDF.
- *I-004 — Appendix C, equation C.1.* The current equation uses the second vector argument in the second term, correcting the source's repeated first argument.
- *I-005 — Appendix C, equation C.10.* The primed Riemann component is placed on the left, matching the published PDF rather than the source's reversed form.
- *I-006 — Chapter 10, equations 10.3 and 10.6.* The current text removes an extra differential fragment from the gradient equation and places the second curl component on the published coordinate basis.
- *I-007 — Chapter 11 equations.* Several equation environments are empty or incomplete in the Org source; the current generated text preserves the equations reconstructed from the published PDF.
- *I-008 — Small text and code repairs.* Examples include `make-fake-vector-field`, `coordinate-system-at`, `assume`, corrected punctuation, and the symmetric-connection condition with the lower indices in the published order.

== Project additions and translations <sec-I.2>

- *I-009 — ClojureScript and Emmy.* The original book presents Scheme and Scmutils examples. The ClojureScript editions translate the examples to ClojureScript using Emmy, with edition-aware prose and separate captured outputs.
- *I-010 — New appendices.* The ClojureScript editions add Appendix D (ClojureScript), Appendices E and F (Emmy notation and tensors), and Appendix G (the executable runner). These have no counterpart in the published PDF.
- *I-011 — Errata.* The current book includes an annotated version of the repository's errata after the appendices. It is project end matter and is not part of the published PDF.
- *I-012 — Interactive execution.* The current repository includes a browser runner, a Node smoke runner, stable block identifiers, and captured ClojureScript results. These are reproducibility tools rather than part of the original book.

== Presentation changes <sec-I.3>

- *I-013 — Reflow.* The Typst editions use A4 pages and regenerated contents, references, and index entries. Pagination and line breaks are intentionally not page-for-page copies of the published PDF.
- *I-014 — Figures and cover.* The current project uses a new plotted cover and selected CeTZ redraws, compared against the original figure PDFs.
- *I-015 — Edition record.* Appendix H records prose that changes between the Scheme and ClojureScript editions, so those changes are visible instead of being hidden in converter rules.

== How to extend this log <sec-I.4>

For a new entry, record the stable identifier, the Org or PDF location, the current Typst location, the old and new forms, and the reason for the change. Use *source/PDF correction* when the published PDF is the fidelity target, *translation* for Scheme-to-ClojureScript or Emmy changes, *project addition* for new material, and *presentation* for layout or artwork decisions. If the change affects generated content, put the implementation in the converter or authored library and add a regression check rather than editing only `typ/content/`.
]
