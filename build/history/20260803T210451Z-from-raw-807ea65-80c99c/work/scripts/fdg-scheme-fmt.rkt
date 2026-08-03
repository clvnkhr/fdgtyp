#lang racket/base

(provide the-formatter-map)
(require fmt/params)

;; The book targets MIT/GNU Scheme, where square brackets are not aliases for
;; parentheses. Preserve the source delimiter shapes instead of applying
;; Racket's bracket conventions.
(current-adjust-paren-shape #f)

(define (the-formatter-map _form)
  #f)
