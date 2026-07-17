(define (sum? expression)
  (and (pair? expression)
       (eq? (car expression) '+)))
(sum? '(+ 3 a))
;; #t
