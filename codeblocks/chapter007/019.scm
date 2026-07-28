(define R2-rect-Christoffel
(make-Christoffel
(let ((zero (lambda (m) 0)))
(down (down (up zero zero)
(up zero zero))
(down (up zero zero)
(up zero zero))))
R2-rect-basis))
