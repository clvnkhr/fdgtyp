(define (contract proc basis)
  (let ((vector-basis (basis->vector-basis basis))
        (1form-basis (basis->1form-basis basis)))
    (s:sigma/r proc
               vector-basis
               1form-basis)))
