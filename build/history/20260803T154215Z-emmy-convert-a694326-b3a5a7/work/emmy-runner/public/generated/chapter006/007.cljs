(def S2-basis-over-mu (basis->basis-over-map mu S2-basis))

(def h (literal-manifold-function 'h-spherical S2-spherical))

(((basis->vector-basis S2-basis-over-mu) h) ((point R1-rect) 't0))
;; => (down (((partial 0) h-spherical) (up (theta t0) (phi t0)))
;;          (((partial 1) h-spherical) (up (theta t0) (phi t0))))
