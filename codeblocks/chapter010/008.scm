(define e_0 d/dr)

(define e_1 (* (/ 1 r) d/dtheta))

(define e_2 (* (/ 1 (* r (sin theta))) d/dphi))

(define orthonormal-spherical-vector-basis
  (down e_0 e_1 e_2))

(define orthonormal-spherical-1form-basis
  (vector-basis->dual orthonormal-spherical-vector-basis
                      spherical))

(define orthonormal-spherical-basis
  (make-basis orthonormal-spherical-vector-basis
              orthonormal-spherical-1form-basis))
