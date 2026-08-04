(define (make-4tuple ct space)
  (up ct (ref space 0) (ref space 1) (ref space 2)))

(define (4tuple->ct v) (ref v 0))
(define (4tuple->space v)
  (up (ref v 1) (ref v 2) (ref v 3)))
