(define-coordinates (up x y z) R3-rect)
(define Jz (- (* x d/dy) (* y d/dx)))
(define Jx (- (* y d/dz) (* z d/dy)))
(define Jy (- (* z d/dx) (* x d/dz)))

(((+ (commutator Jx Jy) Jz) g) R3-rect-point)
;; 0

(((+ (commutator Jy Jz) Jx) g) R3-rect-point)
;; 0

(((+ (commutator Jz Jx) Jy) g) R3-rect-point)
;; 0
