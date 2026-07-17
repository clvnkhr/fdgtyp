(define Euler-angles (coordinate-system-at 'Euler 'Euler-patch SO3))
(define-coordinates (up theta phi psi) Euler-angles)
(define SO3-point ((point Euler-angles) (up 'theta 'phi 'psi)))
(define f (literal-manifold-function 'f-Euler Euler-angles))

(define e_x
  (+ (* (cos phi) d/dtheta)
     (* -1 (/ (* (sin phi) (cos theta)) (sin theta)) d/dphi)
     (* (/ (sin phi) (sin theta)) d/dpsi)))
(define e_y
  (+ (/ (* (cos phi) (cos theta) d/dphi) (sin theta))
     (* (sin phi) d/dtheta)
     (* -1 (/ (cos phi) (sin theta)) d/dpsi)))
(define e_z d/dphi)

(((+ (commutator e_x e_y) e_z) f) SO3-point)
;; 0
