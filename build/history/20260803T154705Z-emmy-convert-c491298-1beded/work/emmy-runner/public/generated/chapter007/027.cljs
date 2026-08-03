(def sphere (make-manifold S2-type 2 3))

(def S2-spherical (coordinate-system-at sphere :spherical :north-pole))

(def S2-basis (coordinate-system->basis S2-spherical))

(define-coordinates (up theta phi) S2-spherical)
