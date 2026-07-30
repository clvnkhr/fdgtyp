(define sphere (make-manifold S^2-type 2 3))
(define S2-spherical
(coordinate-system-at 'spherical 'north-pole sphere))
(define S2-basis
(coordinate-system->basis S2-spherical))
(define-coordinates (up theta phi) S2-spherical)
