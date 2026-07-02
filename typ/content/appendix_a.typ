// Generated from ../../fdg-book/scheme/org/appendix_a.org.
// Re-run scripts/convert-org-to-typst.mjs to refresh.
#import "../lib.typ": fdg-chapter, curl, grad, Lap, div, length

#fdg-chapter("Appendix A: Scheme", numbered: true, eq-prefix: "A", ref-label: "chap-appendix-a")[
#quote(block: true)[
Programming languages should be designed not by piling feature on top of feature, but by removing the weaknesses and restrictions that make additional features appear necessary. Scheme demonstrates that a very small number of rules for forming expressions, with no restrictions on how they are composed, suffice to form a practical and efficient programming language that is flexible enough to support most of the major programming paradigms in use today.

IEEE Standard for the Scheme Programming Language @ieee1991scheme, p. 3
]

Here we give an elementary introduction to Scheme.#footnote[Many of the statements here are valid only assuming that no assignments are used.] For a more precise explanation of the language see the IEEE standard @ieee1991scheme; for a longer introduction see the textbook @abelson1996sicp.

Scheme is a simple programming language based on expressions. An expression names a value. For example, the numeral #raw(lang:"scheme", "3.14") names an approximation to a familiar number. There are primitive expressions, such as a numeral, that we directly recognize, and there are compound expressions of several kinds.

== Procedure Calls <sec-A.1>
A #emph[procedure call] is a kind of compound expression. A procedure call is a sequence of expressions delimited by parentheses. The first subexpression in a procedure call is taken to name a procedure, and the rest of the subexpressions are taken to name the arguments to that procedure. The value produced by the procedure when applied to the given arguments is the value named by the procedure call. For example,

```scheme
(+ 1 2.14)
;; 3.14

(+ 1 (* 2 1.07))
;; 3.14
```

are both compound expressions that name the same number as the numeral #raw(lang:"scheme", "3.14").#footnote[In examples we show the value that would be printed by the Scheme system using slanted characters following the input expression.] In these cases the symbols #raw(lang:"scheme", "+") and #raw(lang:"scheme", "*") name procedures that add and multiply, respectively. If we replace any subexpression of any expression with an expression that names the same thing as the original subexpression, the thing named by the overall expression remains unchanged. In general, a procedure call is written

$ (quad italic("operator") quad italic("operand-1") quad dots.c quad italic("operand-n") quad) $

where #emph[operator] names a procedure and #emph[operand-i] names the /i/th argument.#footnote[In Scheme every parenthesis is essential: you cannot add extra parentheses or remove any.]

== Lambda Expressions <sec-A.2>
Just as we use numerals to name numbers, we use $lambda$-expressions to name procedures.#footnote[The logician Alonzo Church @church1941calculi invented $lambda$-notation to allow the specification of an anonymous function of a named parameter: $bold(lambda) x[upright("expression in ") x]$. This is read, \"That function of one argument that is obtained by substituting the argument for x in the indicated expression.\"] For example, the procedure that squares its input can be written:

```scheme
(lambda (x) (* x x))
```

This expression can be read: \"The procedure of one argument, $x$, that multiplies $x$ by $x$\.\" Of course, we can use this expression in any context where a procedure is needed. For example,

```scheme
((lambda (x) (* x x)) 4)
;; 16
```

The general form of a $lambda$-expression is

$ mono("(lambda") quad italic("formal-parameters") quad italic("body") mono(")") $

where #emph[formal-parameters] is a list of symbols that will be the names of the arguments to the procedure and #emph[body] is an expression that may refer to the formal parameters. The value of a procedure call is the value of the body of the procedure with the arguments substituted for the formal parameters.

== Definitions <sec-A.3>
We can use the define construct to give a name to any object. For example, if we make the definitions#footnote[The definition of #raw(lang:"scheme", "square") given here is not the definition of #raw(lang:"scheme", "square in the Scmutils system. In Scmutils, =square") is extended for tuples to mean the sum of the squares of the components of the tuple. However, for arguments that are not tuples the Scmutils square does multiply the argument by itself.]

```scheme
(define pi 3.141592653589793)

(define square (lambda (x) (* x x)))
```

we can then use the symbols #raw(lang:"scheme", "pi") and =square wherever the numeral or the $lambda$-expression could appear. For example, the area of the surface of a sphere of radius 5 meters is

```scheme
(* 4 pi (square 5))
;; 314.1592653589793
```

Procedure definitions may be expressed more conveniently using \"syntactic sugar.\" The squaring procedure may be defined

```scheme
(define (square x) (* x x))
```

which we may read: \"To square #emph[x] multiply #emph[x] by #emph[x]\.\"

In Scheme, procedures may be passed as arguments and returned as values. For example, it is possible to make a procedure that implements the mathematical notion of the composition of two functions:#footnote[The examples are indented to help with readability. Scheme does not care about extra white space, so we may add as much as we please to make things easier to read.]

```scheme
(define compose
  (lambda (f g)
    (lambda (x)
      (f (g x)))))

((compose square sin) 2)
;; .826821810431806

(square (sin 2))
;; .826821810431806
```

Using the syntactic sugar shown above, we can write the definition more conveniently. The following are both equivalent to the definition above:

```scheme
(define (compose f g)
  (lambda (x)
    (f (g x))))

(define ((compose f g) x)
  (f (g x)))
```

== Conditionals <sec-A.4>
Conditional expressions may be used to choose among several expressions to produce a value. For example, a procedure that implements the absolute value function may be written:

```scheme
(define (abs x)
  (cond ((< x 0) (- x))
        ((= x 0) x)
        ((> x 0) x)))
```

The conditional #raw(lang:"scheme", "cond") takes a number of clauses. Each clause has a predicate expression, which may be either true or false, and a consequent expression. The value of the #raw(lang:"scheme", "cond") expression is the value of the consequent expression of the first clause for which the corresponding predicate expression is true. The general form of a conditional expression is

$ mono("(cond ") mono("(") italic("predicate-1") quad italic("consequent-1") mono(")") dots.c mono("(") italic("predicate-n") quad italic("consequent-n") mono("))") $

For convenience there is a special predicate expression #raw(lang:"scheme", "else") that can be used as the predicate in the last clause of a #raw(lang:"scheme", "cond"). The #raw(lang:"scheme", "if") construct provides another way to make a conditional when there is only a binary choice to be made. For example, because we have to do something special only when the argument is negative, we could have defined #raw(lang:"scheme", "abs") as:

```scheme
(define (abs x)
  (if (< x 0)
      (- x)
      x))
```

The general form of an #raw(lang:"scheme", "if") expression is

$ mono("(if") quad italic("predicate") quad italic("consequent") quad italic("alternative") mono(")") $

If the #emph[predicate] is true the value of the #raw(lang:"scheme", "if") expression is the value of the #emph[consequent], otherwise it is the value of the #emph[alternative].

== Recursive Procedures <sec-A.5>
Given conditionals and definitions, we can write recursive procedures. For example, to compute the $n$th factorial number we may write:

```scheme
(define (factorial n)
  (if (= n 0)
      1
      (* n (factorial (- n 1)))))

(factorial 6)
;; 720

(factorial 40)
;; 815915283247897734345611269596115894272000000000
```

== Local Names <sec-A.6>
The #raw(lang:"scheme", "let") expression is used to give names to objects in a local context. For example,

```scheme
(define (f radius)
  (let ((area (* 4 pi (square radius)))
        (volume (* 4/3 pi (cube radius))))
    (/ volume area)))

(f 3)
;; 1
```

The general form of a #raw(lang:"scheme", "let") expression is

$ mono("(let (") mono("(") italic("variable-1") quad italic("expression-1") mono(")") dots.c mono("(") italic("variable-n") quad italic("expression-n") mono("))") #h(2em) italic("body") mono(")") $

The value of the #raw(lang:"scheme", "let") expression is the value of the #emph[body] expression in the context where the variables #emph[variable-i] have the values of the expressions #emph[expression-i]. The expressions #emph[expression-i] may not refer to any of the variables.

A slight variant of the #raw(lang:"scheme", "let") expression provides a convenient way to express looping constructs. We can write a procedure that implements an alternative algorithm for computing factorials as follows:

```scheme
(define (factorial n)
  (let factlp ((count 1) (answer 1))
    (if (> count n)
        answer
        (factlp (+ count 1) (* count answer)))))

(factorial 6)
;; 720
```

Here, the symbol #raw(lang:"scheme", "factlp") following the #raw(lang:"scheme", "let") is locally defined to be a procedure that has the variables #raw(lang:"scheme", "count") and #raw(lang:"scheme", "answer") as its formal parameters. It is called the first time with the expressions 1 and 1, initializing the loop. Whenever the procedure named #raw(lang:"scheme", "factlp") is called later, these variables get new values that are the values of the operand expressions #raw(lang:"scheme", "(+ count 1)") and #raw(lang:"scheme", "(* count answer)").

== Compound Data --- Lists and Vectors <sec-A.7>
Data can be glued together to form compound data structures. A list is a data structure in which the elements are linked sequentially. A Scheme vector is a data structure in which the elements are packed in a linear array. New elements can be added to lists, but to access the $n$th element of a list takes computing time proportional to $n$. By contrast a Scheme vector is of fixed length, and its elements can be accessed in constant time. All data structures in this book are implemented as combinations of lists and Scheme vectors. Compound data objects are constructed from components by procedures called constructors and the components are accessed by selectors.

The procedure #raw(lang:"scheme", "list") is the constructor for lists. The selector #raw(lang:"scheme", "list-ref") gets an element of the list. All selectors in Scheme are zero-based. For example,

```scheme
(define a-list (list 6 946 8 356 12 620))

a-list
;; (6 946 8 356 12 620)

(list-ref a-list 3)
;; 356

(list-ref a-list 0)
;; 6
```

Lists are built from pairs. A pair is made using the constructor #raw(lang:"scheme", "cons"). The selectors for the two components of the pair are #raw(lang:"scheme", "car") and #raw(lang:"scheme", "cdr") (pronounced \"could-er\").#footnote[These names are accidents of history. They stand for \"Contents of the Address part of Register\" and \"Contents of the Decrement part of Register\" of the IBM 704 computer, which was used for the first implementation of Lisp in the late 1950s. Scheme is a dialect of Lisp.] A list is a chain of pairs, such that the #raw(lang:"scheme", "car") of each pair is the list element and the #raw(lang:"scheme", "cdr") of each pair is the next pair, except for the last #raw(lang:"scheme", "cdr"), which is a distinguishable value called the empty list and is written #raw(lang:"scheme", "()"). Thus,

```scheme
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
```

Both #raw(lang:"scheme", "a-list") and #raw(lang:"scheme", "another-list") share the same tail (their #raw(lang:"scheme", "cdr")).

There is a predicate #raw(lang:"scheme", "pair?") that is true of pairs and false on all other types of data.

Vectors are simpler than lists. There is a constructor #raw(lang:"scheme", "vector") that can be used to make vectors and a selector =vector-ref for accessing the elements of a vector:

```scheme
(define a-vector
  (vector 37 63 49 21 88 56))

a-vector
;; #(37 63 49 21 88 56)

(vector-ref a-vector 3)
;; 21

(vector-ref a-vector 0)
;; 37
```

Notice that a vector is distinguished from a list on printout by the character $\#$ appearing before the initial parenthesis.

There is a predicate #raw(lang:"scheme", "vector?") that is true of vectors and false for all other types of data.

The elements of lists and vectors may be any kind of data, including numbers, procedures, lists, and vectors. Numerous other procedures for manipulating list-structured data and vector-structured data can be found in the Scheme online documentation.

== Symbols <sec-A.8>
Symbols are a very important kind of primitive data type that we use to make programs and algebraic expressions. You probably have noticed that Scheme programs look just like lists. In fact, they are lists. Some of the elements of the lists that make up programs are symbols, such as #raw(lang:"scheme", "+") and #raw(lang:"scheme", "vector").#footnote[Symbols may have any number of characters. A symbol may not contain whitespace or a delimiter character, such as parentheses, brackets, quotation marks, comma, or $\#$.] If we are to make programs that can manipulate programs, we need to be able to write an expression that names such a symbol. This is accomplished by the mechanism of #emph[quotation]. The name of the symbol #raw(lang:"scheme", "+") is the expression #raw(lang:"scheme", "'+"), and in general the name of an expression is the expression preceded by a single quote character. Thus the name of the expression #raw(lang:"scheme", "(+ 3 a)") is #raw(lang:"scheme", "'(+ 3 a)").

We can test if two symbols are identical by using the predicate #raw(lang:"scheme", "eq?"). For example, we can write a program to determine if an expression is a sum:

```scheme
(define (sum? expression)
  (and (pair? expression)
       (eq? (car expression) '+)))
(sum? '(+ 3 a))
;; #t

(sum? '(* 3 a))
;; #f
```

Here #raw(lang:"scheme", "#t") and #raw(lang:"scheme", "#f") are the printed representations of the boolean values true and false.

Consider what would happen if we were to leave out the quote in the expression #raw(lang:"scheme", "(sum? '(+ 3 a))"). If the variable #raw(lang:"scheme", "a") had the value 4 we would be asking if 7 is a sum. But what we wanted to know was whether the expression #raw(lang:"scheme", "(+ 3 a)") is a sum. That is why we need the quote.
]
