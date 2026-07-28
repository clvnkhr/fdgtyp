#import "../lib.typ": fdg-chapter, fdg-cljs-code-block, fdg-cljs-code-block, fdg-figure, fdg-cetz-figure, fdg-page-ref, fdg-ref-page, curl, grad, Lap, div, length, TeX, LaTeX

#fdg-chapter("ClojureScript", numbered: true, eq-prefix: "D", ref-label: "chap-appendix-d")[
#block(inset: (left: 1em), stroke: (left: 2pt + gray))[#emph[Editorial note: This appendix is derived from Appendix A; its examples have been translated to ClojureScript using Emmy, while the original wording has been retained wherever possible.]]
#quote(block: true)[
ClojureScript is a dialect of Clojure that compiles to JavaScript and retains Clojure’s emphasis on immutable data and functional programming. Emmy supplies the generic arithmetic and symbolic mathematics used by the examples in this edition.
]

Here we give an elementary introduction to the ClojureScript forms used in this book. For a fuller introduction, see the ClojureScript language documentation.

ClojureScript is a programming language based on expressions. An expression names a value. For example, the numeral #raw(lang:"clojure", "3.14") names an approximation to a familiar number. There are primitive expressions, such as a numeral, that we directly recognize, and there are compound expressions of several kinds.

== Function Calls <sec-D.1>
A #emph[function call] is a kind of compound expression. A function call is a sequence of expressions delimited by parentheses. The first subexpression in a function call is taken to name a function, and the rest of the subexpressions are taken to name the arguments to that function. The value produced by the function when applied to the given arguments is the value named by the function call. For example,

/* fdg-code-source: appendix_a/001
(+ 1 2.14)
;; 3.14

(+ 1 (* 2 1.07))
;; 3.14
fdg-code-source-end */
#fdg-cljs-code-block("appendix_a/001")

are both compound expressions that name the same number as the numeral #raw(lang:"clojure", "3.14").#footnote[In examples we show the value that would be printed by the ClojureScript system using slanted characters following the input expression.] In these cases the symbols #raw(lang:"clojure", "+") and #raw(lang:"clojure", "*") name functions that add and multiply, respectively. If we replace any subexpression of any expression with an expression that names the same thing as the original subexpression, the thing named by the overall expression remains unchanged. In general, a function call is written

/* fdg-code-source: appendix_a/002
(operator operand-1 ... operand-n)
fdg-code-source-end */
#fdg-cljs-code-block("appendix_a/002")

where #emph[operator] names a function and #emph[operand-i] names the $i$th argument.#footnote[In ClojureScript every parenthesis is essential: you cannot add extra parentheses or remove any.]

== Function Expressions <sec-D.2>
Just as we use numerals to name numbers, we use #raw(lang:"clojure", "fn") expressions to name functions.#footnote[The logician Alonzo Church @church1941calculi invented $lambda$-notation to allow the specification of an anonymous function of a named parameter: $bold(lambda) x[upright("expression in ") x]$. This is read, \"That function of one argument that is obtained by substituting the argument for x in the indicated expression.\"] For example, the function that squares its input can be written:

/* fdg-code-source: appendix_a/003
(lambda (x) (* x x))
fdg-code-source-end */
#fdg-cljs-code-block("appendix_a/003")

This expression can be read: \"The function of one argument, $x$, that multiplies $x$ by $x$\.\" Of course, we can use this expression in any context where a function is needed. For example,

/* fdg-code-source: appendix_a/004
((lambda (x) (* x x)) 4)
;; 16
fdg-code-source-end */
#fdg-cljs-code-block("appendix_a/004")

The general form of a #raw(lang:"clojure", "fn") expression is

/* fdg-code-source: appendix_a/005
(lambda formal-parameters body)
fdg-code-source-end */
#fdg-cljs-code-block("appendix_a/005")

where #emph[formal-parameters] is a list of symbols that will be the names of the arguments to the function and #emph[body] is an expression that may refer to the formal parameters. The value of a function call is the value of the body of the function with the arguments substituted for the formal parameters.

== Definitions <sec-D.3>
We can use the #raw(lang:"clojure", "def") construct to give a name to any object. For example, if we make the definitions#footnote[The definition of #raw(lang:"clojure", "square") given here is not the definition of #raw(lang:"clojure", "square") in the Emmy system. In Emmy, #raw(lang:"clojure", "square") is extended for tuples to mean the sum of the squares of the components of the tuple. However, for arguments that are not tuples the Emmy square does multiply the argument by itself.]

/* fdg-code-source: appendix_a/006
(define pi 3.141592653589793)

(define square (lambda (x) (* x x)))
fdg-code-source-end */
#fdg-cljs-code-block("appendix_a/006")

we can then use the symbols #raw(lang:"clojure", "pi") and #raw(lang:"clojure", "square") wherever the numeral or the #raw(lang:"clojure", "fn") expression could appear. For example, the area of the surface of a sphere of radius 5 meters is

/* fdg-code-source: appendix_a/007
(* 4 pi (square 5))
;; 314.1592653589793
fdg-code-source-end */
#fdg-cljs-code-block("appendix_a/007")

=== Names, functions, and local bindings

ClojureScript uses several related forms where Scheme uses #raw(lang:"clojure", "define"), #raw(lang:"clojure", "lambda"), and local definitions. Their different scopes are important:

- #raw(lang:"clojure", "def") gives a name to a value in the current namespace. The value may be a number, a function, or any other object. Thus #raw(lang:"clojure", "(def pi 3.14159)") defines a global name.
- #raw(lang:"clojure", "fn") constructs a function value. Its parameters are written in a vector: #raw(lang:"clojure", "(fn [x] (* x x))"). An #raw(lang:"clojure", "fn") may be anonymous, or it may be stored in a name using #raw(lang:"clojure", "def").
- #raw(lang:"clojure", "defn") is convenient syntax for a #raw(lang:"clojure", "def") whose value is an #raw(lang:"clojure", "fn"). For example, #raw(lang:"clojure", "(defn square [x] (* x x))") is essentially #raw(lang:"clojure", "(def square (fn [x] (* x x)))"). Use #raw(lang:"clojure", "defn") for a named, namespace-level function and #raw(lang:"clojure", "def") for other namespace-level values.
- #raw(lang:"clojure", "let") introduces local names and values. Its binding vector alternates names and expressions: #raw(lang:"clojure", "(let [x 3 y 4] (sqrt (+ (square x) (square y))))"). These names exist only in the body of the #raw(lang:"clojure", "let").
- #raw(lang:"clojure", "letfn") introduces local function names. Unlike ordinary #raw(lang:"clojure", "let") bindings, the functions may refer to themselves and to one another, so #raw(lang:"clojure", "letfn") is the direct translation for recursive or mutually dependent internal Scheme function definitions.

The names introduced by #raw(lang:"clojure", "def") and #raw(lang:"clojure", "defn") persist in the namespace. The names introduced by #raw(lang:"clojure", "let"), #raw(lang:"clojure", "letfn"), and function parameter vectors are lexical and disappear outside their bodies.

Function definitions may be expressed more conveniently using \"syntactic sugar.\" The squaring function may be defined

/* fdg-code-source: appendix_a/008
(define (square x) (* x x))
fdg-code-source-end */
#fdg-cljs-code-block("appendix_a/008")

which we may read: \"To square #emph[x] multiply #emph[x] by #emph[x]\.\"

In ClojureScript, functions may be passed as arguments and returned as values. For example, it is possible to make a function that implements the mathematical notion of the composition of two functions:#footnote[The examples are indented to help with readability. ClojureScript does not care about extra white space, so we may add as much as we please to make things easier to read.]

/* fdg-code-source: appendix_a/009
(define compose
  (lambda (f g)
    (lambda (x)
      (f (g x)))))

((compose square sin) 2)
;; .826821810431806

(square (sin 2))
;; .826821810431806
fdg-code-source-end */
#fdg-cljs-code-block("appendix_a/009")

Using the syntactic sugar shown above, we can write the definition more conveniently. The following are both equivalent to the definition above:

/* fdg-code-source: appendix_a/010
(define (compose f g)
  (lambda (x)
    (f (g x))))

(define ((compose f g) x)
  (f (g x)))
fdg-code-source-end */
#fdg-cljs-code-block("appendix_a/010")

== Conditionals <sec-D.4>
Conditional expressions may be used to choose among several expressions to produce a value. For example, a function that implements the absolute value function may be written:

/* fdg-code-source: appendix_a/011
(define (abs x)
  (cond ((< x 0) (- x))
        ((= x 0) x)
        ((> x 0) x)))
fdg-code-source-end */
#fdg-cljs-code-block("appendix_a/011")

The conditional #raw(lang:"clojure", "cond") takes a number of clauses. Each clause has a predicate expression, which may be either true or false, and a consequent expression. The value of the #raw(lang:"clojure", "cond") expression is the value of the consequent expression of the first clause for which the corresponding predicate expression is true. The general form of a conditional expression is

/* fdg-code-source: appendix_a/012
(cond (predicate-1 consequent-1)
      ...
      (predicate-n consequent-n))
fdg-code-source-end */
#fdg-cljs-code-block("appendix_a/012")

For convenience there is a special predicate expression #raw(lang:"clojure", "else") that can be used as the predicate in the last clause of a #raw(lang:"clojure", "cond"). The #raw(lang:"clojure", "if") construct provides another way to make a conditional when there is only a binary choice to be made. For example, because we have to do something special only when the argument is negative, we could have defined #raw(lang:"clojure", "abs") as:

/* fdg-code-source: appendix_a/013
(define (abs x)
  (if (< x 0)
      (- x)
      x))
fdg-code-source-end */
#fdg-cljs-code-block("appendix_a/013")

The general form of an #raw(lang:"clojure", "if") expression is

/* fdg-code-source: appendix_a/014
(if predicate consequent alternative)
fdg-code-source-end */
#fdg-cljs-code-block("appendix_a/014")

If the #emph[predicate] is true the value of the #raw(lang:"clojure", "if") expression is the value of the #emph[consequent], otherwise it is the value of the #emph[alternative].

== Recursive Functions <sec-D.5>
Given conditionals and definitions, we can write recursive functions. For example, to compute the $n$th factorial number we may write:

/* fdg-code-source: appendix_a/015
(define (factorial n)
  (if (= n 0)
      1
      (* n (factorial (- n 1)))))

(factorial 6)
;; 720

(factorial 40)
;; 815915283247897734345611269596115894272000000000
fdg-code-source-end */
#fdg-cljs-code-block("appendix_a/015")

== Local Names <sec-D.6>
The #raw(lang:"clojure", "let") expression is used to give names to objects in a local context. For example,

/* fdg-code-source: appendix_a/016
(define (f radius)
  (let ((area (* 4 pi (square radius)))
        (volume (* 4/3 pi (cube radius))))
    (/ volume area)))

(f 3)
;; 1
fdg-code-source-end */
#fdg-cljs-code-block("appendix_a/016")

The general form of a #raw(lang:"clojure", "let") expression is

/* fdg-code-source: appendix_a/017
(let ((variable-1 expression-1)
      ...
      (variable-n expression-n))
  body)
fdg-code-source-end */
#fdg-cljs-code-block("appendix_a/017")

The value of the #raw(lang:"clojure", "let") expression is the value of the #emph[body] expression in the context where the variables #emph[variable-i] have the values of the expressions #emph[expression-i]. The expressions #emph[expression-i] may not refer to any of the variables.

A slight variant of the #raw(lang:"clojure", "let") expression provides a convenient way to express looping constructs. We can write a function that implements an alternative algorithm for computing factorials as follows:

/* fdg-code-source: appendix_a/018
(define (factorial n)
  (let factlp ((count 1) (answer 1))
    (if (> count n)
        answer
        (factlp (+ count 1) (* count answer)))))

(factorial 6)
;; 720
fdg-code-source-end */
#fdg-cljs-code-block("appendix_a/018")

Here, the symbol #raw(lang:"clojure", "factlp") following the #raw(lang:"clojure", "let") is locally defined to be a function that has the variables #raw(lang:"clojure", "count") and #raw(lang:"clojure", "answer") as its formal parameters. It is called the first time with the expressions 1 and 1, initializing the loop. Whenever the function named #raw(lang:"clojure", "factlp") is called later, these variables get new values that are the values of the operand expressions #raw(lang:"clojure", "(+ count 1)") and #raw(lang:"clojure", "(* count answer)").

== Compound Data --- Lists and Vectors <sec-D.7>
Data can be glued together to form compound data structures. A list is a data structure in which the elements are linked sequentially. A ClojureScript vector is a data structure in which the elements are packed in a linear array. New elements can be added to lists, but to access the $n$th element of a list takes computing time proportional to $n$. By contrast a ClojureScript vector is of fixed length, and its elements can be accessed in constant time. All data structures in this book are implemented as combinations of lists and ClojureScript vectors. Compound data objects are constructed from components by functions called constructors and the components are accessed by selectors.

The function #raw(lang:"clojure", "list") is the constructor for lists. The selector #raw(lang:"clojure", "nth") gets an element of the list. All selectors in ClojureScript are zero-based. For example,

/* fdg-code-source: appendix_a/019
(define a-list (list 6 946 8 356 12 620))

a-list
;; (6 946 8 356 12 620)

(list-ref a-list 3)
;; 356

(list-ref a-list 0)
;; 6
fdg-code-source-end */
#fdg-cljs-code-block("appendix_a/019")

ClojureScript lists are persistent sequential collections. The functions #raw(lang:"clojure", "first") and #raw(lang:"clojure", "rest") select the first element and the remaining sequence. Thus,

/* fdg-code-source: appendix_a/020
(car a-list)
;; 6

(cdr a-list)
;; (946 8 356 12 620)

(car (cdr a-list))
;; 946

(define another-list
  (cons 32 (cdr a-list)))

another-list
;; (32 946 8 356 12 620)

(car (cdr another-list))
;; 946
fdg-code-source-end */
#fdg-cljs-code-block("appendix_a/020")

Both #raw(lang:"clojure", "a-list") and #raw(lang:"clojure", "another-list") share the same tail (their #raw(lang:"clojure", "rest")).

There is a predicate #raw(lang:"clojure", "pair?") that is true of pairs and false on all other types of data.

Vectors are simpler than lists. There is a constructor #raw(lang:"clojure", "vector") that can be used to make vectors and a selector #raw(lang:"clojure", "nth") for accessing the elements of a vector:

/* fdg-code-source: appendix_a/021
(define a-vector
  (vector 37 63 49 21 88 56))

a-vector
;; #(37 63 49 21 88 56)

(vector-ref a-vector 3)
;; 21

(vector-ref a-vector 0)
;; 37
fdg-code-source-end */
#fdg-cljs-code-block("appendix_a/021")

Notice that a vector is distinguished from a list on printout by the character $\#$ appearing before the initial parenthesis.

There is a predicate #raw(lang:"clojure", "vector?") that is true of vectors and false for all other types of data.

The elements of lists and vectors may be any kind of data, including numbers, functions, lists, and vectors. Numerous other functions for manipulating list-structured data and vector-structured data can be found in the ClojureScript documentation.

== Symbols <sec-D.8>
Symbols are a very important kind of primitive data type that we use to make programs and algebraic expressions. You probably have noticed that ClojureScript programs look just like lists. In fact, they are lists. Some of the elements of the lists that make up programs are symbols, such as #raw(lang:"clojure", "+") and #raw(lang:"clojure", "vector").#footnote[Symbols may have any number of characters. A symbol may not contain whitespace or a delimiter character, such as parentheses, brackets, quotation marks, comma, or $\#$.] If we are to make programs that can manipulate programs, we need to be able to write an expression that names such a symbol. This is accomplished by the mechanism of #emph[quotation]. The name of the symbol #raw(lang:"clojure", "+") is the expression #raw(lang:"clojure", "'+"), and in general the name of an expression is the expression preceded by a single quote character. Thus the name of the expression #raw(lang:"clojure", "(+ 3 a)") is #raw(lang:"clojure", "'(+ 3 a)").

We can test if two symbols are identical by using the predicate #raw(lang:"clojure", "="). For example, we can write a program to determine if an expression is a sum:

/* fdg-code-source: appendix_a/022
(define (sum? expression)
  (and (pair? expression)
       (eq? (car expression) '+)))
(sum? '(+ 3 a))
;; #t

(sum? '(* 3 a))
;; #f
fdg-code-source-end */
#fdg-cljs-code-block("appendix_a/022")

Here #raw(lang:"clojure", "true") and #raw(lang:"clojure", "false") are the printed representations of the boolean values true and false.

Consider what would happen if we were to leave out the quote in the expression #raw(lang:"clojure", "(sum? '(+ 3 a))"). If the variable #raw(lang:"clojure", "a") had the value 4 we would be asking if 7 is a sum. But what we wanted to know was whether the expression #raw(lang:"clojure", "(+ 3 a)") is a sum. That is why we need the quote.

#pagebreak()
== Scheme–ClojureScript Cheat Sheet <sec-D.9>

The following correspondences cover the language forms used most often in this book. They describe syntax; Emmy supplies the mathematical operations used by the examples.

#text(size: 8.6pt)[
  #table(
    columns: (1.05fr, 1.55fr, 1.75fr),
    inset: (x: 5pt, y: 4pt),
    align: left + top,
    stroke: (x, y) => (bottom: 0.35pt + rgb("#aaa")),
    fill: (x, y) => if y == 0 { rgb("#e8eceb") },
    table.header(
      repeat: true,
      [*Form*],
      [*Scheme*],
      [*ClojureScript*],
    ),
    [Global value],
    [#raw(lang:"clojure", "(define x value)")],
    [#raw(lang:"clojure", "(def x value)")],
    [Global function],
    [#raw(lang:"clojure", "(define (f x) body)")],
    [#raw(lang:"clojure", "(defn f [x] body)")],
    [Anonymous function],
    [#raw(lang:"clojure", "(lambda (x) body)")],
    [#raw(lang:"clojure", "(fn [x] body)")],
    [Function stored as a value],
    [#raw(lang:"clojure", "(define f (lambda (x) body))")],
    [#raw(lang:"clojure", "(def f (fn [x] body))")],
    [Local values],
    [#raw(lang:"clojure", "(let ((x a) (y b)) body)")],
    [#raw(lang:"clojure", "(let [x a y b] body)")],
    [Sequential local values],
    [#raw(lang:"clojure", "let*")],
    [Later bindings in one #raw(lang:"clojure", "let") vector can refer to earlier bindings.],
    [Local functions],
    [Internal #raw(lang:"clojure", "define")],
    [#raw(lang:"clojure", "letfn"), especially for recursive or mutually dependent functions],
    [Named local loop],
    [Named #raw(lang:"clojure", "let")],
    [#raw(lang:"clojure", "loop") with #raw(lang:"clojure", "recur"), or #raw(lang:"clojure", "letfn")],
    [Expression sequence],
    [#raw(lang:"clojure", "begin")],
    [#raw(lang:"clojure", "do"); function and binding bodies already allow several expressions],
    [Conditional],
    [#raw(lang:"clojure", "if"); #raw(lang:"clojure", "cond") with #raw(lang:"clojure", "else")],
    [#raw(lang:"clojure", "if"); #raw(lang:"clojure", "cond") with #raw(lang:"clojure", ":else")],
    [Boolean values],
    [#raw(lang:"clojure", "#t") and #raw(lang:"clojure", "#f")],
    [#raw(lang:"clojure", "true") and #raw(lang:"clojure", "false")],
    [Equality in these examples],
    [#raw(lang:"clojure", "eq?")],
    [#raw(lang:"clojure", "=")],
    [Indexed selection],
    [#raw(lang:"clojure", "list-ref") and #raw(lang:"clojure", "vector-ref")],
    [#raw(lang:"clojure", "nth"); Emmy structures also support #raw(lang:"clojure", "ref")],
    [Sequence selectors],
    [#raw(lang:"clojure", "car") and #raw(lang:"clojure", "cdr")],
    [#raw(lang:"clojure", "first") and #raw(lang:"clojure", "rest")],
    [Variadic parameters],
    [#raw(lang:"clojure", "(lambda args body)") or a dotted parameter list],
    [#raw(lang:"clojure", "&") in the parameter vector, as in #raw(lang:"clojure", "(fn [& args] body)")],
    [Quotation],
    [Reader abbreviation #raw(lang:"clojure", "'expression")],
    [The same abbreviation; keywords such as #raw(lang:"clojure", ":else") evaluate to themselves],
    [Function application],
    [Parenthesized: #raw(lang:"clojure", "(f x y)")],
    [Parenthesized: #raw(lang:"clojure", "(f x y)"); parameters and bindings use vectors],
  )
]

]
