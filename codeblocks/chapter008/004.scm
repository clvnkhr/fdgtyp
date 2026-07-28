(define (make-state sigma u) (vector sigma u))

(define (Sigma state) (ref state 0))

(define (U-select state) (ref state 1))
