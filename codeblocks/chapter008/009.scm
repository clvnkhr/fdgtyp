(define (L v)
  (define ((l h) state)
    (* ((D h) state) ((g v) state)))
  (make-operator l))
