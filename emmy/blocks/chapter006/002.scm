(define ((form-field->form-field-over-map mu:N->M) w-on-M)
  (define (make-fake-vector-field V-over-mu n)
    (define ((u f) m)
      ((V-over-mu f) n))
    (procedure->vector-field u))
  (procedure->nform-field
   (lambda vectors-over-map
     (lambda (n)
       ((apply w-on-M
               (map (lambda (V-over-mu)
                      (make-fake-vector-field V-over-mu n))
                    vectors-over-map))
        (mu:N->M n))))
   (get-rank w-on-M)))
