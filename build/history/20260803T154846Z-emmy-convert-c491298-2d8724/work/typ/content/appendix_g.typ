#import "../lib.typ": fdg-chapter, fdg-page-ref

#fdg-chapter("Running the Emmy Examples", numbered: true, eq-prefix: "G", ref-label: "chap-appendix-g")[
The ClojureScript listings in this edition are executable programs using #link("https://emmy.mentat.org")[Emmy], a computer algebra and mathematical physics library in the scmutils tradition. This appendix describes the runner supplied with this book, the intended workflow for checking and modifying examples, and the smaller setup needed to run an example in a clean ClojureScript project.

== What the Book Runner Does <sec-G.1>

The runner has two related execution paths. The browser interface uses #raw(lang:"clojure", "emmy.sci") and the Small Clojure Interpreter (SCI) to evaluate source text interactively. The smoke runner is compiled by shadow-cljs as a Node.js program and uses the same SCI environment to check every runnable block without manual interaction. In both cases Emmy's public environment is installed in a session namespace together with the small adapters in #raw(lang:"clojure", "fdg.compat").

The converter writes each example to a stable pair of files:

```text
codeblocks/chapter006/003.scm
codeblocks/chapter006/003.cljs
```

The #raw(lang:"clojure", ".scm") file is the clean Scheme snapshot extracted from the generated book. The neighboring #raw(lang:"clojure", ".cljs") file is the ClojureScript/Emmy port. The files are the durable conversion state; the browser editor is a temporary scratch editor and does not save changes.

The converter also creates #raw(lang:"clojure", "emmy-runner/public/generated/blocks.json"). For each block the manifest records its chapter, order, heading, source location, definitions, top-level forms, and whether it is an executable example. The runner uses this information to reproduce the order in which a reader encounters definitions.

Examples are grouped into chapter sessions. A block may use names introduced by an earlier block in the same chapter, so evaluating an arbitrary listing in isolation is not generally equivalent to following the book. Each chapter starts in a fresh context. Before it runs a block, the runner handles definitions that intentionally replace names supplied by #raw(lang:"clojure", "emmy.env") and declares mutually dependent definitions from the same listing.

== Preparing and Starting the Runner <sec-G.2>

From the root of this repository, generate and check the ClojureScript blocks with

```sh
make emmy-blocks
```

This converts the blocks, compiles the Node smoke program, executes the runnable manifest, captures results, formats the generated ClojureScript, and runs conversion assertions. To start the browser interface, use

```sh
make emmy-runner
```

Then open #link("http://localhost:8080")[http://localhost:8080]. The first compilation can take longer because Clojure and JavaScript dependencies must be downloaded. Leave the command running while using the page; shadow-cljs watches the source and reloads the application after changes.

The browser has three actions:

- *Run through this block* resets the context and executes the runnable blocks from the beginning of the selected chapter through the selected block. This is the normal and most reliable way to check a book example.
- *Run editor only* evaluates only the text currently in the editor, preserving the existing session. Use this for a small experiment after running through the required setup. It is not evidence that the block works from a clean chapter context.
- *Reset context* discards all definitions made during the current session and reinstalls Emmy and #raw(lang:"clojure", "fdg.compat").

A setup listing that replaces the historical Scheme #raw(lang:"clojure", "load") form is installed by the runner and is not evaluated as an ordinary example. If a successful expression returns #raw(lang:"clojure", "nil"), the interface says that no output was produced; otherwise it prints the returned value. Errors identify the block at which sequential execution stopped. Compare that block's #raw(lang:"clojure", ".cljs") file with its #raw(lang:"clojure", ".scm") neighbor and with the surrounding text.

For a lasting correction, edit the file under #raw(lang:"clojure", "codeblocks/") or, preferably, implement a recurring translation issue in the appropriate converter or compatibility layer. Rerunning the conversion copies the durable block into the browser's generated directory. Do not edit #raw(lang:"clojure", "emmy-runner/public/generated/") directly.

== Automated Runs and Captured Results <sec-G.3>

The compiled smoke program can be invoked directly:

```sh
cd emmy-runner
clojure -M:shadow-cljs compile smoke
node target/smoke.js
```

Useful options are

```sh
node target/smoke.js --verbose
node target/smoke.js --chapter=chapter008
node target/smoke.js --through=chapter008-024
node target/smoke.js --capture-results
```

#raw(lang:"clojure", "--chapter") limits execution to one chapter, #raw(lang:"clojure", "--through") stops at a manifest identifier, and #raw(lang:"clojure", "--verbose") prints each block as it begins. Capture mode writes returned values immediately after the corresponding top-level expressions as #raw(lang:"clojure", ";; =>") comments. Very large results are represented by a short prefix, an omission marker, and their full character count; inspect such a value interactively when the complete expression is needed.

The smoke runner continues after an individual block failure so that one invocation reports all known failures. It prints a consolidated summary and returns a nonzero exit status. The book build is configured to continue far enough to produce PDFs even when the Emmy stage reports problems, but a successful PDF build does not mean the ClojureScript checks passed: the Emmy summary must also be clean.

Selected results are additionally simplified, frozen into stable data, and compared with corresponding cases from Emmy's FDG test suite. These oracle checks detect mathematical regressions; ordinary successful execution only establishes that a block is accepted and runs to completion.

=== Exact checks for expensive symbolic blocks

Some scmutils calculations are mathematically modest but create very large intermediate expressions in Emmy. The runner does not replace these calculations with floating-point samples. Instead, the converter rewrites the affected listing into smaller exact identities whose conjunction proves the original result. In the checks that call #raw(lang:"clojure", "verified-zero"), a nonzero component fails the block. The tensor-linearity listing instead returns its simplified residuals; its captured result records that all four were zero in the most recent run.

Four listings currently use this treatment:

- In Chapter 7 (#fdg-page-ref(label("code-chapter007-040"))), Emmy's generic Legendre transform is evaluated at a fully symbolic phase-space state and checked against the closed-form Hamiltonian. The following listing differentiates that exact closed form. This avoids repeatedly differentiating through the generic transform while still checking that the transform produced the function being differentiated.
- In Chapter 11 (#fdg-page-ref(label("code-chapter011-008"))), boost covariance is reduced directly from the definition of #raw(lang:"clojure", "general-boost") to the three rotation facts it uses: preservation of the boost vector's squared norm, preservation of the relevant dot product, and application of the inverse rotation. All three are checked for the complete symbolic Euler rotation.
- In Appendix F's tensor-linearity check (#fdg-page-ref(label("cljs-code-appendix_c-001"))), the four residuals are simplified independently before being assembled. Its cached #raw(lang:"clojure", ";; => (up 0 0 0 0)") comment records the zero result returned by the most recent captured run, although this listing does not call #raw(lang:"clojure", "verified-zero").
- In Appendix F's coordinate-change check (#fdg-page-ref(label("cljs-code-appendix_c-004"))), both Christoffel tables are derived symbolically from the exact spherical and stereographic metric-component matrices. Each derived table is checked against its closed form, after which the stereographic table is transformed component by component and compared with the spherical table. Simplifying each two-dimensional contraction before assembling the next prevents the generic arbitrary-field calculation from producing a multi-megabyte intermediate expression.

The displayed Appendix F coordinate-change listing contains the coordinate bases, both Emmy-derived Christoffel tables, the closed stereographic table, the explicit stereographic coordinate formula, and both sets of exact residuals. Its only compiled operation is #raw(lang:"clojure", "transform-stereographic-Christoffel-to-spherical"), defined in #raw(lang:"clojure", "fdg.slow-checks") and re-exported by #raw(lang:"clojure", "fdg.compat"). That helper differentiates the same factored coordinate formula to obtain its Jacobian and Hessian and performs the repeated two-dimensional contractions.

Compilation is faster here because SCI interprets each nested generic arithmetic operation and represents functions defined in evaluated source as #raw(lang:"clojure", "MetaFn") wrappers. Emmy's differentiation and structure dispatch operate directly on ordinary ClojureScript functions in the compiled helper, and the JavaScript engine can optimize the repeated small contractions. The helper still uses Emmy's #raw(lang:"clojure", "D"), generic arithmetic, and #raw(lang:"clojure", "simplify"); it changes the execution boundary, not the algebra. Keeping only that contraction kernel compiled makes the proof readable in the book while avoiding the pathological arbitrary-field expansion. For auditability, the converter copies the exact compiled #raw(lang:"clojure", "fdg.slow-checks") source into the displayed #raw(lang:"clojure", ".cljs") listing as comments immediately before its use.

When another block exceeds its chapter watchdog, first factor the mathematical claim into exact intermediate identities and simplify each component at the earliest useful point. Keep the original generic operation in at least one symbolic comparison, as in Chapter 7, or derive both sides from Emmy's native objects, as in Appendix F. A numerical sample is useful for diagnosis but is not a substitute for the checked book result.

== Running a Repository Block Manually <sec-G.4>

For most investigations, use the browser's *Run through this block* action. If a normal compiled ClojureScript program is preferable, start from the relevant #raw(lang:"clojure", ".cljs") file and include every definition on which it depends. These dependencies are usually the preceding listings in the same chapter. A block that uses names from #raw(lang:"clojure", "fdg.compat") also needs that namespace from this repository.

Captured #raw(lang:"clojure", ";; =>") lines are comments and may remain in the copied source. They document previous output but are not assertions. Print a value explicitly with #raw(lang:"clojure", "println") and usually pass symbolic results through #raw(lang:"clojure", "simplify") and #raw(lang:"clojure", "freeze") before printing:

```clojure
(println (pr-str (freeze (simplify expression))))
```

Do not replace exact ratios such as #raw(lang:"clojure", "(/ 1 2)") with JavaScript decimals unless a numerical approximation is intended. Emmy's generic arithmetic sees the explicit division and can retain exact symbolic structure.

== A Clean ClojureScript and Emmy Project <sec-G.5>

The reproducible route is to use the versions pinned by this repository. The following minimal Node-target project uses the same Emmy commit, ClojureScript compiler, shadow-cljs version, and JavaScript numerical dependencies as the book runner.

Install a Java JDK, the Clojure CLI, and Node.js with npm. The current official Clojure instructions are at #link("https://clojure.org/guides/install_clojure")[clojure.org/guides/install_clojure]. On macOS, the documented Homebrew command is

```sh
brew install clojure/tools/clojure
```

On Linux and other systems, follow the official installer instructions rather than copying a versioned installer command from this book. Confirm the tools before continuing:

```sh
java --version
clojure --version
node --version
npm --version
```

Create a project:

```sh
mkdir -p fdg-emmy-demo/src/demo
cd fdg-emmy-demo
```

Create #raw(lang:"clojure", "deps.edn") with

```clojure
{:paths ["src"]
 :deps {io.github.mentat-collective/emmy
        {:git/sha "5a2e1470087d41ec43e73d661bfceb941a6e8870"}}
 :aliases
 {:shadow-cljs
  {:extra-deps
   {thheller/shadow-cljs {:mvn/version "2.20.14"}
    org.clojure/clojurescript {:mvn/version "1.11.60"}}
   :main-opts ["-m" "shadow.cljs.devtools.cli"]}}}
```

Create #raw(lang:"clojure", "package.json") with the JavaScript dependencies required by this Emmy revision:

```json
{
  "private": true,
  "dependencies": {
    "fraction.js": "4.2.1",
    "odex": "3.0.0-rc.4"
  }
}
```

Create #raw(lang:"clojure", "shadow-cljs.edn"):

```clojure
{:deps true
 :builds
 {:app
  {:target :node-script
   :output-to "target/main.js"
   :main demo.main/main}}}
```

Finally, create #raw(lang:"clojure", "src/demo/main.cljs"):

```clojure
(ns demo.main
  (:refer-clojure :exclude [*])
  (:require [emmy.env :refer [* D freeze simplify]]))

(defn cube [x]
  (* x x x))

(defn main []
  (println
   (pr-str
    (freeze
     (simplify
      ((D cube) 'x))))))
```

Install the npm dependencies, compile, and run:

```sh
npm install
clojure -M:shadow-cljs compile app
node target/main.js
```

The program differentiates the function #raw(lang:"clojure", "cube") symbolically and prints its simplified result. Replace the body of #raw(lang:"clojure", "main") with a self-contained book example, then copy any earlier definitions it needs. ClojureScript does not support #raw(lang:"clojure", ":refer :all") in an #raw(lang:"clojure", "ns") declaration, so explicitly add every Emmy name used by the copied example to the #raw(lang:"clojure", ":refer") vector. If an Emmy generic operation has the same name as an operation in #raw(lang:"clojure", "cljs.core"), add that name to #raw(lang:"clojure", ":refer-clojure :exclude") as shown for #raw(lang:"clojure", "*"). This ensures that symbolic values reach Emmy's generic operation rather than the narrower JavaScript operation.

For an independently maintained project, consult the installation instructions at #link("https://emmy.mentat.org")[emmy.mentat.org] and the #link("https://shadow-cljs.github.io/docs/UsersGuide.html")[shadow-cljs User's Guide], then choose and record current dependency versions. For reproducing this book, retain the pinned files above and the repository's #raw(lang:"clojure", "package-lock.json").
]
