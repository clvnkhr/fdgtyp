(define S2-Christoffel
(make-Christoffel
(let ((zero (lambda (point) 0)))
(down (down (up zero zero)
(up zero (/ 1 (tan theta))))
(down (up zero (/ 1 (tan theta)))
(up (-  (* (sin theta) (cos theta))) zero))))
S2-basis))

(define sphere-Cartan (Christoffel->Cartan S2-Christoffel))
