(define (Lfree s)
(* 1/2 (square (velocity s))))

(define (sphere->R3 s)
(let ((q (coordinate s)))
(let ((theta (ref q 0)) (phi (ref q 1)))
(up (* (sin theta) (cos phi))
(* (sin theta) (sin phi))
(cos theta)))))

(define Lsphere
(compose Lfree (F->C sphere->R3)))
