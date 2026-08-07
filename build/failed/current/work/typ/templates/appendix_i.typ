// Project-authored source and edition change log.
// Keep this ledger reader-facing; implementation evidence remains in typ/audit.typ.
#import "../lib.typ": fdg-chapter

#fdg-chapter("Source and Edition Change Log", numbered: true, eq-prefix: "I", ref-label: "chap-appendix-i")[
This appendix is the complete maintained ledger of durable differences between the pinned Org snapshot, the published PDF, and the Typst editions in this repository. Every entry has a stable identifier. A change is recorded here only when it is implemented in the converter, an authored Typst source file, an authored ClojureScript/Emmy source file, or a documented build policy. The vendored Org snapshot remains unchanged; source corrections are applied to a temporary conversion copy.

The ledger is exhaustive for the maintained change surface. The audit's explicitly unchecked comparison work is not silently converted into a claimed correction: it remains an open audit item in `typ/audit.typ`.

== Conversion contract <sec-I.1>

- *I-001 — Pinned-source protection.* `scripts/convert-org-to-typst.mjs` verifies checksums for every vendored Org file before conversion and fails if the upstream snapshot has been edited.
- *I-002 — Temporary source copy.* All normalization and fidelity repairs operate on a temporary source copy; no file under `fdg-book/scheme/org/` is rewritten.
- *I-003 — Raw evaluator results.* Org `:results value raw` output is attached to the preceding Scheme listing as result comments before Pandoc conversion, so cached values are not mistaken for a second executable listing.
- *I-004 — Bare Scheme forms.* Bare parenthesized Scheme listings and slash-delimited displayed results are wrapped as explicit Scheme source blocks; slash-delimited results become comments.
- *I-005 — Stable code records.* Each extracted listing receives a stable chapter/ordinal identifier and is emitted to the generated codeblock records used by the book and runner.
- *I-006 — Subheadings.* Org headings below the level that Pandoc preserves are marked before conversion and restored as visible Typst subheadings.
- *I-007 — Display-math normalization.* Imported `equation`, `align`, `aligned`, and `split` environments have wrapper commands, labels, duplicate rows, and unsupported alignment artifacts normalized before Typst rendering.
- *I-008 — Footnote display boundary.* Main-text displays receive equation labels; displays in the Org footnote section do not consume the main equation counter unless the published source explicitly labels them.
- *I-009 — Published unnumbered displays.* Chapter 7's published unnumbered derivation rows, code-result arrays, and intermediate displays are excluded from the generated equation sequence.
- *I-010 — Citation mapping.* Numeric Org citations are mapped to the seeded bibliography keys, preserving the published citation order used by the generated references.
- *I-011 — Equation and property references.* Numeric equation, property, section, appendix, range, and list references are rewritten to Typst labels and references; generic parenthesized equation references become one Typst reference wrapper.
- *I-012 — Page-reference mapping.* Stable section and content labels replace hard-coded internal page references so references follow the A4 reflow and edition-specific pagination.
- *I-013 — Figure insertion.* The converter inserts the eight imported published figure PDFs at their corresponding prose anchors and keeps their captions adjacent to the assets.
- *I-014 — Typst math cleanup.* The final math pass normalizes inverse powers, operators, vector notation, wedge notation, spacing, delimiters, and generated line-break markers to the Typst math vocabulary used by this project.

== Source/PDF fidelity corrections <sec-I.2>

- *I-015 — Chapter 1 transition.* The sentence introducing the coordinate-writing listing is restored after the cached Cartan result, matching the published prose sequence.
- *I-016 — Chapter 2 heading.* The manifold-functions heading is rendered with the published spelling *Independent*.
- *I-017 — Appendix B, equation B.7.* The selector result is `I_0(s)=t`, matching the published equation.
- *I-018 — Appendix B, equation B.10.* The left side is `AC`, matching the published tensor name.
- *I-019 — Appendix B phase-space result.* The cached phase-space tuple uses `(down p_x p_y)` rather than two unlabelled momentum symbols.
- *I-020 — Appendix B tuple syntax.* The malformed tuple form `(up_x y)` is rendered as `(up x y)`.
- *I-021 — Appendix C, equation C.1.* The second term uses the second vector argument `v` in `g T(v, omega)`.
- *I-022 — Appendix C, equation C.10.* The primed Riemann component is placed on the left side of the transformation equation.
- *I-023 — Chapter 7 state advancer.* The extra grouping around `sphere-Cartan` is removed from the cached state-advancer listing.
- *I-024 — Chapter 9, equation 9.24.* The missing metric display is restored with the Newtonian-limit expression shown in the published book.
- *I-025 — Chapter 9, equation 9.25.* The missing second-order position equation is restored after the Newtonian-limit prose.
- *I-026 — Chapter 9, equation 9.26.* The missing Einstein equation is restored before the explanation of `R_(mu nu)`.
- *I-027 — Chapter 10, equation 10.3.* The gradient equation is rendered as `grad(f) = g^sharp(df)` without the trailing duplicate differential fragment.
- *I-028 — Chapter 10, equation 10.6.* The second curl component is attached to `dy`, matching the published coordinate basis.
- *I-029 — Chapter 11 code closure.* The unmatched closing parenthesis in the `make-4tuple` listing is removed.
- *I-030 — Chapter 11, equations 11.1–11.5.* The five introductory Maxwell and charge-conservation equations are restored from the published PDF.
- *I-031 — Chapter 11, equations 11.6–11.10.* The divergence, corrected Ampère, wave, and inhomogeneous wave equations are restored from the published PDF.
- *I-032 — Chapter 11, equations 11.11–11.14.* The Lorentz-force, scalar wave, interval, and light-cone equations are restored from the published PDF.
- *I-033 — Chapter 11, equations 11.20–11.21.* The transformed wave equation and invariant-length condition are restored from the published PDF.
- *I-034 — Chapter 11 Lorentz-coordinate display.* The two-coordinate transformation is separated into the two published rows with the correct punctuation.
- *I-035 — Chapter 11 Lorentz constraints.* The three constraints on `p`, `q`, `r`, and `s` are separated and punctuated as displayed in the published PDF.
- *I-036 — Chapter 11 boost display.* The four-coordinate boost transformation is separated into the four published rows.
- *I-037 — Chapter 11 vector decomposition.* The parallel/perpendicular decomposition is rendered with norm notation and separate rows.
- *I-038 — Chapter 11 general boost.* The general vector boost is rendered as a two-row display with its dot product and inverse-rotation terms intact.
- *I-039 — Chapter 1 internal references.* References that formerly named Chapter 7 directly target Section 7.10, preserving the current section granularity.
- *I-040 — Prologue citation.* The Papert reference is attached to the bibliography key used by the generated bibliography instead of remaining a broken numeric prose citation.

== Source text, code, and math normalization <sec-I.3>

The following entries enumerate every current literal repair in the shared Org normalization layer. They are applied to the generated copy and are not general claims about the upstream project.

- *I-041 — Psi subscript.* The malformed `psi_a` command is restored.
- *I-042 — Indexed `M`.* The extra closing brace in `M_i` is removed.
- *I-043 — Real-vector space exponent.* The extra closing brace in `mathsf{R}^n` is removed.
- *I-044 — `m` math delimiters.* Two malformed `mathsf{m}` forms are converted to valid math markup.
- *I-045 — Scalar `n` math.* The escaped line-break form is reduced to the scalar `n`.
- *I-046 — French title accent.* The title *Les Misérables* receives its correct accent.
- *I-047 — Euler–Lagrange spelling.* The joined word is rendered as *Euler-Lagrange*.
- *I-048 — Manifold `R^5` prose.* The `R^5` expression is placed inside one valid math span.
- *I-049 — Lagrangian capitalization.* The sentence beginning “This Lagrangian” uses the published capitalization.
- *I-050 — Longitude spacing.* The first longitude prose uses `90◦ E` spacing.
- *I-051 — Hard-hyphen removal for direction.* The line-break hyphen in *direction* is removed.
- *I-052 — Hard-hyphen removal for derivatives.* Both one-line and split-line forms of *derivatives* are joined.
- *I-053 — Hard-hyphen removal for components.* Both one-line and split-line forms of *components* are joined.
- *I-054 — Coordinate-system identifier.* The Chapter 6 identifier is `coordinate-system-at`.
- *I-055 — Pullback identifier.* Whitespace inside `pullback` is removed wherever the Org import split the identifier.
- *I-056 — Reference-coordinate phrase.* The damaged coordinate phrase is normalized to `ref coords`.
- *I-057 — Sine-longitude phrase.* The damaged trigonometric identifier is normalized to `sin long`.
- *I-058 — Longitude-momentum identifier.* The split identifier is normalized to `longp`.
- *I-059 — Pullback parameter case.* The pullback parameter is `f-on-M`.
- *I-060 — Assume spelling.* The prose uses *assume*.
- *I-061 — Comma spacing.* The prose uses `However, if`.
- *I-062 — Symmetric connection.* The lower Christoffel indices on the right side are swapped to express symmetry.
- *I-063 — Function-map prose.* The sentence uses “functions that map”.
- *I-064 — Stray sentence punctuation.* The period before the coordinate-functions sentence is removed.
- *I-065 — Function/math spacing.* The phrase “function `f` at” has a valid prose/math boundary.
- *I-066 — Mapping sentence punctuation.* The period after `m = mu(n)` is restored before the following sentence.
- *I-067 — `mathsf{N}` delimiters.* The malformed math span is repaired.
- *I-068 — Primed-coordinate line.* The `x'` and `chi'` expression is kept on one math line with its comma.
- *I-069 — Basis coefficient index.* The basis formula uses `X_k(f)` rather than an unindexed `X(f)`.
- *I-070 — First inverse-map derivative.* The derivative of `f` is written with `(chi')^(-1)`.
- *I-071 — Coordinate-change inverse.* The two Jacobian factors use inverse maps with exponent `-1`.
- *I-072 — Vector-component transformation.* The transformed component formula uses the inverse Jacobian.
- *I-073 — Vector-field display.* The two-component vector-field formula is compacted into one valid math display.
- *I-074 — Area-form display.* `A = dx wedge dy` is compacted into one valid math display.
- *I-075 — Euler operator display.* The malformed `E[L]` expression is rendered as `mathbf(E)[L]`.
- *I-076 — Differential delimiters.* The `dx` and `dy` phrase uses complete math spans.
- *I-077 — Metric punctuation.* The period after `g` is outside the math command.
- *I-078 — `u` delimiter.* The malformed closing bracket after `u` is replaced by a brace.
- *I-079 — `w` delimiter.* The malformed closing bracket after `w` is replaced by a brace.
- *I-080 — Basis-set braces.* The set of basis vectors uses explicit left and right braces.
- *I-081 — Metric-index brace.* The `g^(ij)` exponent is closed correctly.
- *I-082 — Epsilon subscript.* The epsilon subscript receives its missing closing brace and math delimiter.
- *I-083 — Prime command.* The misspelled prime command is restored.
- *I-084 — Einstein spelling.* The author's name is rendered as *Einstein*.
- *I-085 — TeX command.* The TeX name is rendered with `mathrm` rather than an unsupported macro.
- *I-086 — Ellipsis command.* Imported `ldots` is normalized to the supported centered ellipsis.
- *I-087 — Half factor.* The imported fraction is normalized to `frac(1, 2)`.
- *I-088 — Negative thin-space commands.* Unsupported `!` spacing commands are removed.
- *I-089 — Curve derivative delimiters.* The `D(chi compose gamma)(t)` expression has balanced math delimiters.
- *I-090 — Summation braces.* The `d_l^i` and `d_k^i` summands lose imported grouping braces that break Typst parsing.
- *I-091 — Summation continuation.* The `d_k^i(m) c_j^k(m)` row is made into one valid summand.
- *I-092 — Lorentz quadratic form.* The duplicated `xi^2` term is corrected to `xi^1`.
- *I-093 — Parallel-vector notation.* The imported vertical-bar notation is rendered as bold `xi` parallel notation.
- *I-094 — Inverse curvature argument.* The malformed `R^(=1)` is rendered as `R^(-1)`.
- *I-095 — Four-tuple identifier.* The four-tuple constructor is normalized to `make-4tuple`.
- *I-096 — Curvature equality.* The stray backslash before the equality sign is removed.
- *I-097 — Curvature-vector equality.* The missing equality sign before the omega vector is restored.
- *I-098 — Exponential delimiter.* The extra brace in the exponential identity is removed.

== Imported setup and executable-claim repairs <sec-I.4>

- *I-099 — Division spacing.* A digit immediately following a Scheme division operator receives the required separator.
- *I-100 — Fake vector field.* The Chapter 6 call uses `make-fake-vector-field`.
- *I-101 — R2 point closure.* The `R2-rect-point` definition has one balanced closing parenthesis.
- *I-102 — SR basis setup.* The Chapter 10 setup defines `SR-basis` from `SR`.
- *I-103 — Spherical basis setup.* The spherical coordinate declaration is emitted before `S2-basis` is used.
- *I-104 — Spherical one-form setup.* The Chapter 8 setup defines the omega one-form field and the manifold function used by the torsion listing.
- *I-105 — Force setup.* `eta-inverse` is defined before the `Force` listing uses it.
- *I-106 — Pullback function closure.* The imported `coordinatize` listing closes its inner expression at the correct level.
- *I-107 — Euler-angle setup.* The SO3 listing receives the Euler coordinate system, coordinates, point, scalar function, and three frame-vector definitions it uses.
- *I-108 — Differential dual result.* The cached result of `dx(d/dx)` is corrected to `1`.
- *I-109 — Spelling and operator repairs.* `illlustrate`, `basis->1form-basis`, `metric basis`, and the `T_ij` tensor identifier are normalized.
- *I-110 — Newton metric setup.* The spacetime coordinates and `spacetime-rect-basis` are defined before the Newton metric.
- *I-111 — Schwarzschild connection setup.* The Schwarzschild Cartan form is built before the geodesic residual function.
- *I-112 — Newton potential binding.* `V` is bound once and passed to the Newton connection.
- *I-113 — Base-frame setup.* The `home` frame is defined before the special-relativistic frame `A`.
- *I-114 — Errata energy result.* The complete three-term cached value is retained instead of only its leading term.
- *I-115 — Spherical manifold family.* Generated code uses the valid `S^2-type` manifold family.
- *I-116 — Polar-Cartan operator.* The polar-Cartan listing calls `circular`, the operator defined by the surrounding source.
- *I-117 — Errata code names.* Generated errata annotations retain the historical source forms while the corrected generated code uses the repaired names.

== Equation layout and counter changes <sec-I.5>

- *I-118 — Chapter 2 equation split.* Equations 2.6 and 2.7 are separated into two displays instead of being merged with prose.
- *I-119 — Appendix A general forms.* The operator, lambda, cond, if, and let templates are rendered as Scheme code blocks rather than malformed centered math.
- *I-120 — Chapter 3 footnote equation.* The 3.3 footnote is prose plus an inline equation, not a nested code block with a second equation label.
- *I-121 — Chapter 4 equation 4.1.* The short two-equality display is kept on one line.
- *I-122 — Chapter 4 equation 4.6.* The `c_j^k(m)` product is kept with the equality row.
- *I-123 — Chapter 4 equation 4.9.* The second equality is not forced onto a new source line.
- *I-124 — Chapter 4 equation 4.19.* The Jacobian equality is compacted.
- *I-125 — Chapter 4 equation 4.29.* The spherical-basis equality is compacted.
- *I-126 — Chapter 4 equation 4.34.* The long bracket calculation uses an aligned continuation marker rather than a crowded plus row.
- *I-127 — Chapter 4 equation 4.35.* The coefficient identity is compacted and its minus term remains on the same equality.
- *I-128 — Chapter 4 equation 4.38.* The closing parenthesis is kept inside the displayed summand.
- *I-129 — Chapter 4 exponential identity.* The product of exponentials is compacted without changing its commutator term.
- *I-130 — Chapter 4 equations 4.40–4.42.* The short flow identities are compacted into the available width.
- *I-131 — Chapter 5 equation 5.24.* The commutator is `[v_i, v_j]`, the first summation stays on the equality row, and continuation rows use `&quad`.
- *I-132 — Chapter 5 equation 5.34.* Boundary-integral terms use explicit `+` and `-` continuation markers.
- *I-133 — Chapter 7 equation 7.41.* The display's unnecessary leading break and oversized delimiter wrapper are removed.
- *I-134 — Chapter 7 equation 7.59.* Repeated summand parentheses are retained where required by the displayed algebra, and the first equality remains aligned.
- *I-135 — Chapter 7 equation labels 7.77–7.79.* The geodesic displays receive the published labels after the preceding unnumbered display is suppressed.
- *I-136 — Chapter 8 equation 8.2.* The short curvature definition is compacted.
- *I-137 — Chapter 8 equation 8.16.* The covariant-derivative display begins with its equality and uses aligned continuation rows.
- *I-138 — Chapter 8 equation 8.18.* The short torsion display is compacted.
- *I-139 — Chapter 10 compact display set.* Displays 10.1, 10.2, 10.5–10.11, and 10.19–10.26 use the available width and avoid unnecessary source breaks.
- *I-140 — Chapter 10 operator alignment.* Displays 10.3, 10.7, and 10.10 keep their left-hand operator and first equality on the same aligned row.
- *I-141 — Equation counter reset.* Each chapter and numbered appendix resets the equation counter at its wrapper.
- *I-142 — Footnote counter reset.* Each chapter and numbered appendix resets the footnote counter at its wrapper.
- *I-143 — Figure counter reset.* Each chapter and numbered appendix resets the figure counter at its wrapper.
- *I-144 — Footnote-only labels.* The generated sequence excludes the footnote-only labels 3.58, 3.59, 5.40, 7.83, 7.84, 8.33, and 8.34.
- *I-145 — Generated equation sequences.* Regression locks the contiguous sequences 1.1–1.6, 2.1–2.7, 3.1–3.57, 4.1–4.44, 5.1–5.39, 6.1–6.28, 7.1–7.79, 8.1–8.32, 9.1–9.32, 10.1–10.28, 11.1–11.43, B.1–B.35, and C.1–C.11.
- *I-146 — Chapter footnote counts.* Regression locks the generated counts for the Prologue, Chapters 1–11, Appendices A–C, and the project-authored appendices.

== ClojureScript and Emmy edition transformations <sec-I.6>

- *I-147 — Appendix D source.* Appendix D is derived from Appendix A with ClojureScript language names, ClojureScript code syntax, Emmy terminology, and D-section labels.
- *I-148 — Appendix E source.* Appendix E is derived from Appendix B with ClojureScript function terminology, Emmy notation, and E-section labels.
- *I-149 — Appendix F source.* Appendix F is derived from Appendix C with Emmy tensor terminology and F-section labels.
- *I-150 — ClojureScript renderer.* Derived appendices use the ClojureScript code renderer and `lang: "clojure"` blocks.
- *I-151 — Editorial derivation notes.* Derived appendices receive a visible note identifying their Scheme source appendix and Emmy translation.
- *I-152 — Appendix-wide references.* Source appendix labels, equation labels, appendix references, and cross-references are changed from A/B/C to D/E/F as appropriate.
- *I-153 — Scheme implementation vocabulary.* `Scmutils` and its lower-case form become `Emmy` in the translated appendices.
- *I-154 — Procedure vocabulary.* Scheme procedure and program wording becomes ClojureScript function and program wording.
- *I-155 — Scheme system vocabulary.* Scheme system, symbol, vector, and selector wording becomes ClojureScript wording.
- *I-156 — Scheme language description.* The Scheme language paragraph becomes a ClojureScript/Emmy description with the JavaScript compilation context.
- *I-157 — Appendix D language introduction.* The elementary Scheme introduction is replaced by an introduction to the ClojureScript forms used by this edition.
- *I-158 — Appendix D function terminology.* Procedure calls, definitions, lambda expressions, recursive procedures, and the `define` construct become function calls, definitions, function expressions, recursive functions, and `def`.
- *I-159 — Appendix D collections.* The pair/list discussion is replaced by persistent ClojureScript sequences and Emmy `up`/`down` structures.
- *I-160 — Appendix D selectors.* `list-ref` and `vector-ref` become `nth`; `car` and `cdr` become `first` and `rest`; Emmy structures use `ref`.
- *I-161 — Appendix D equality.* The equality form becomes `=`.
- *I-162 — Appendix D booleans.* `#t` and `#f` become `true` and `false`.
- *I-163 — Appendix D authored names section.* The appendix adds the scopes and roles of `def`, `fn`, `defn`, `let`, and `letfn`.
- *I-164 — Appendix D parameter vectors.* Function parameters are documented as vectors, including the variadic `&` marker.
- *I-165 — Appendix D conditional syntax.* The final `cond` predicate is documented as the `:else` keyword, with ClojureScript's alternating predicate/consequent syntax.
- *I-166 — Appendix D collection semantics.* The appendix states that ClojureScript collections are immutable and that Emmy structures are not ordinary ClojureScript vectors.
- *I-167 — Appendix D cheat-sheet global values.* The cheat sheet records `(define x value)` to `(def x value)`.
- *I-168 — Appendix D cheat-sheet global functions.* The cheat sheet records `(define (f x) body)` to `(defn f [x] body)`.
- *I-169 — Appendix D cheat-sheet anonymous functions.* The cheat sheet records `(lambda (x) body)` to `(fn [x] body)`.
- *I-170 — Appendix D cheat-sheet function values.* The cheat sheet records a named lambda value to a named `fn` value.
- *I-171 — Appendix D cheat-sheet local values.* The cheat sheet records Scheme `let` bindings to ClojureScript binding vectors.
- *I-172 — Appendix D cheat-sheet sequential local values.* The cheat sheet records `let*` sequencing through ordered ClojureScript `let` bindings.
- *I-173 — Appendix D cheat-sheet local functions.* The cheat sheet records local Scheme definitions to `letfn`.
- *I-174 — Appendix D cheat-sheet named loops.* The cheat sheet records named Scheme loops to `loop` and `recur`.
- *I-175 — Appendix D cheat-sheet sequencing.* The cheat sheet records `begin` to `do`.
- *I-176 — Appendix D cheat-sheet conditionals.* The cheat sheet records Scheme `if`/`cond` clauses to ClojureScript `if`/`:else` forms.
- *I-177 — Appendix D cheat-sheet booleans.* The cheat sheet records Scheme boolean literals to ClojureScript boolean literals.
- *I-178 — Appendix D cheat-sheet falsey values.* The cheat sheet records Scheme's false-only truth rule and ClojureScript's `false`/`nil` falsey rule.
- *I-179 — Appendix D cheat-sheet exact ratios.* The cheat sheet records `1/2` to `(/ 1 2)` and preserves exact arithmetic.
- *I-180 — Appendix D cheat-sheet vectors.* The cheat sheet records Scheme vector literals to ClojureScript vector literals.
- *I-181 — Appendix D cheat-sheet empty lists.* The cheat sheet records the empty-list form and ClojureScript's list constructor alternative.
- *I-182 — Appendix D cheat-sheet equality.* The cheat sheet records `eq?` to `=`.
- *I-183 — Appendix D cheat-sheet indexed selection.* The cheat sheet records list/vector selection to `nth` and Emmy `ref`.
- *I-184 — Appendix D cheat-sheet sequence selectors.* The cheat sheet records `car`/`cdr` to `first`/`rest`.
- *I-185 — Appendix D cheat-sheet variadic parameters.* The cheat sheet records dotted Scheme parameters to a ClojureScript parameter vector containing `&`.
- *I-186 — Appendix D cheat-sheet quotation.* The cheat sheet records quotation and keyword self-evaluation.
- *I-187 — Appendix D cheat-sheet function application.* The cheat sheet records identical call syntax and notes vector-based parameter and binding lists.
- *I-188 — Appendix E composition wording.* Function composition is described with ClojureScript functions rather than Scheme procedures.
- *I-189 — Appendix E arithmetic wording.* The `g` construction is described as a ClojureScript function.
- *I-190 — Appendix E cached simplification.* The interactive printer description is replaced by cached runner output, explicit `simplify`, and Appendix G guidance.
- *I-191 — Appendix E literal functions.* `literal-function` is described as constructing a symbolic function with a declared signature.
- *I-192 — Appendix E multiple arguments.* The Scheme-specific paragraph becomes a ClojureScript/Emmy distinction.
- *I-193 — Appendix E selector vocabulary.* `component` and `ref` are described as functions.
- *I-194 — Appendix E derivative vocabulary.* Derivatives of functions are described with ClojureScript function terminology.
- *I-195 — Appendix E exercise labels.* Exercises B.1 and B.2 become E.1 and E.2.
- *I-196 — Appendix F tensor test.* The tensor test is described as taking an Emmy/ClojureScript function.

== Project-authored material and execution records <sec-I.7>

- *I-197 — ClojureScript preface.* The ClojureScript editions add an authored preface describing provenance, repository variants, the runner, translation confidence, artwork, and update date.
- *I-198 — Appendix D.* The project adds the ClojureScript language appendix.
- *I-199 — Appendix E.* The project adds the Emmy notation appendix.
- *I-200 — Appendix F.* The project adds the Emmy tensors appendix.
- *I-201 — Appendix G.* The project adds the runner, generated block records, sequential chapter sessions, browser controls, smoke checks, captured results, exact symbolic checks, and clean-project instructions.
- *I-202 — Appendix H.* The project adds the generated edition-specific prose table; its 23 records are listed individually in Appendix H and repeated by location below.
- *I-203 — Appendix I.* The project adds this source-and-edition ledger.
- *I-204 — Annotated errata.* The project adds the upstream errata as end matter and marks the fourteen repairs listed in the annotated-errata section.
- *I-205 — Generated code artifacts.* Each Scheme block has a durable `.scm` record; each translated block has a durable `.cljs` record; the runner manifest records order, heading, source location, definitions, top-level forms, and run status.
- *I-206 — Browser and smoke execution.* The project adds an SCI browser runner, a compiled Node smoke runner, chapter-session execution, result capture, and regression assertions.
- *I-207 — Expensive symbolic checks.* The project adds exact intermediate-identity checks for the Chapter 7 Legendre transform, Chapter 11 boost covariance, Appendix F tensor linearity, and Appendix F coordinate-change calculation.
- *I-208 — Edition gating.* Appendices D–I and the ClojureScript preface appear only in the ClojureScript and combined editions.
- *I-209 — Manifest registration.* The generated source manifest includes Appendices D–I with their display titles.

== Annotated errata corrections <sec-I.8>

These are the individual errata markers currently annotated as corrected in the generated errata section.

- *I-210 — Chapter 1 Cartan order.* The generated Chapter 1 setup places the Cartan definition before the geodesic residual listing that uses it.
- *I-211 — Chapter 6 manifold family.* The generated `S2` definition uses `S^2-type`.
- *I-212 — Chapter 7 circular operator.* The generated polar-Cartan listing uses `circular`.
- *I-213 — Chapter 7 S2-Christoffel coordinates.* The generated setup installs `S2-spherical` before `S2-Christoffel` is used.
- *I-214 — Chapter 7 sphere manifold family.* The generated `sphere` definition uses `S^2-type`.
- *I-215 — Chapter 8 spherical coordinates.* The generated setup installs `S2-spherical`.
- *I-216 — Chapter 8 omega field.* The generated setup defines the omega one-form field.
- *I-217 — Chapter 8 torsion function.* The generated setup defines the `f` manifold function used by the torsion listing.
- *I-218 — Chapter 9 spacetime basis.* The generated setup defines `spacetime-rect` and `spacetime-rect-basis`.
- *I-219 — Chapter 9 Newton potential.* The generated setup binds `V` before passing it to `Newton-metric`.
- *I-220 — Chapter 9 returned value.* The generated result preserves all terms reported by the upstream erratum.
- *I-221 — Chapter 10 SR basis.* The generated setup defines `SR-basis` before the last section listing uses it.
- *I-222 — Chapter 10 eta inverse.* The generated setup defines `eta-inverse` before `Force` uses it.
- *I-223 — Chapter 10 base frame.* The generated setup includes the `home` frame definition before constructing frame `A`.

== Edition-specific prose records <sec-I.9>

Appendix H is the generated page-linked record of every edition-aware prose replacement. The following list is the complete replacement set, in converter order.

- *I-224 — Prologue functional-derivative reference.* Scheme points to Appendix B; ClojureScript points to Appendix E; the combined edition names both.
- *I-225 — Prologue language footnote.* Scheme describes Scheme and Scmutils; ClojureScript describes ClojureScript and Emmy; the combined edition describes both pairs.
- *I-226 — Prologue closing references.* Scheme points to Appendices A/B; ClojureScript points to D/E; the combined edition names both pairs.
- *I-227 — Prologue Lagrange-equations terminology.* Scheme uses procedure terminology; ClojureScript uses function terminology; the combined edition names both function forms.
- *I-228 — Prologue Lagrange-equations result.* The result description is rewritten for function-valued ClojureScript code in the translated edition.
- *I-229 — Chapter 1 functional-notation reference.* The appendix reference changes from B to E for ClojureScript and names B/E in the combined edition.
- *I-230 — Chapter 1 `Lfree` footnote.* The procedure/function wording and language appendix reference change by edition.
- *I-231 — Chapter 1 `sphere->R3`.* Procedure becomes function in ClojureScript and both names appear in the combined edition.
- *I-232 — Chapter 1 `F->C` terminology.* Procedure becomes function in ClojureScript and both names appear in the combined edition.
- *I-233 — Chapter 1 literal metric footnote.* `literal-metric`, quoted symbol wording, and notation appendix references change by edition.
- *I-234 — Chapter 1 real-line coordinate setup.* Scheme uses `d/dt`; ClojureScript uses `d:dt`; the combined edition names both.
- *I-235 — Chapter 2 structured derivative reference.* The tuple appendix reference changes from B to E by edition.
- *I-236 — Chapter 6 real-line coordinate footnote.* The coordinate-vector-field name changes from `d/dt` to `d:dt` in ClojureScript.
- *I-237 — Chapter 7 tensor footnote reference.* The tensor appendix reference changes from C to F by edition.
- *I-238 — Chapter 7 tensor-transformation reference.* The tensor appendix reference changes from C to F by edition.
- *I-239 — Chapter 7 recursive-map description.* Scheme describes `s:map/r`; ClojureScript describes Emmy `mapr`; the combined edition names both.
- *I-240 — Chapter 7 `F->C` footnote.* Procedure becomes function in ClojureScript and both names appear in the combined edition.
- *I-241 — Chapter 8 cyclic-sum terminology.* Procedure becomes function in ClojureScript and generic function wording is used in the combined edition.
- *I-242 — Chapter 8 Bianchi terminology.* Scheme programs become ClojureScript programs or executable programs by edition.
- *I-243 — Chapter 8 tensor-definition reference.* The tensor appendix reference changes from C to F by edition.
- *I-244 — Chapter 9 Einstein-tensor reference.* The tensor appendix reference changes from C to F by edition.
- *I-245 — Errata `rules.scm` note.* The translated editions explain Emmy's replacement role and point to Appendix G; the Scheme edition retains the Scheme note.
- *I-246 — Errata expensive simplification note.* The translated editions identify the cached Emmy check; the Scheme edition retains the scmutils performance wording.

== Presentation and policy changes <sec-I.10>

- *I-247 — Paper size.* The Typst editions use A4 page geometry, with repository margins and regenerated pagination; they do not imitate the published PDF's trim size.
- *I-248 — Paragraph indentation.* Paragraphs after the first paragraph of a section use a `1.5em` first-line indent; the first paragraph remains unindented.
- *I-249 — Typography.* The Typst editions use New Computer Modern, project-defined leading, justified paragraphs, and tracked justification limits.
- *I-250 — Running heads.* Odd and even pages use mirrored running heads with the current section title and page number.
- *I-251 — Code presentation.* Scheme and ClojureScript listings use project syntax highlighting, language tags, stable anchors, and edition-aware rendering.
- *I-252 — Cover.* The project uses an authored plotted cover rather than the published cover artwork.
- *I-253 — Figures.* The project uses imported figure PDFs at the eight preserved figure anchors and maintains a separate CeTZ redraw collection for selected figures.
- *I-254 — Front matter.* The project-authored title material includes the current license, sales contact, CIP spacing, print-line spacing, `dc23` punctuation, and right-aligned control number treatment.
- *I-255 — Contents and index.* Contents, cross-references, page references, and index locators are regenerated from Typst labels and the current edition's pagination.
- *I-256 — End-matter order.* The current book places errata, references, and the generated index after the main text and appendices.
- *I-257 — Combined edition.* The combined edition retains the Scheme material and adds the translated ClojureScript material and edition-specific prose branches.
- *I-258 — Source-of-truth policy.* Durable changes belong in the converter, authored Typst library, authored translation, or runner source; generated `typ/content/` files are refreshable outputs.
- *I-259 — Regression policy.* Source/PDF repairs, edition gates, counter behavior, generated labels, and required appendix records are checked by the repository regression scripts.

== Maintenance rule <sec-I.11>

When a new Org/PDF disagreement or source-derived project change is found, add the next identifier here with its source location, generated location, current form, target form, and reason. Add or update a regression assertion when the change is mechanically testable. If the discrepancy is still under comparison, record it in the unchecked inventory in `typ/audit.typ` instead of presenting it as a completed correction.
]
