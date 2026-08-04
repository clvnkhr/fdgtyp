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
