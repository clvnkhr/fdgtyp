(def e_0 d:dr)

(def e_1 (* (/ 1 r) d:dtheta))

(def e_2 (* (/ 1 (* r (sin theta))) d:dphi))

(def orthonormal-spherical-vector-basis (down e_0 e_1 e_2))

(def orthonormal-spherical-oneform-basis (vector-basis->dual orthonormal-spherical-vector-basis spherical))

(def orthonormal-spherical-basis (make-basis orthonormal-spherical-vector-basis orthonormal-spherical-oneform-basis))
