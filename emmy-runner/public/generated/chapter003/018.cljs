;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (((d (literal-manifold-function 'f-polar R2-polar)) (coordinate-system->vector-basis R2-rect))
            ((point R2-polar) (up 'r 'theta))))
;; => (down (/ (+ (* r (cos theta) (((partial 0) f-polar) (up r theta))) (* -1 (sin theta) (((partial 1) f-polar) (up r theta)))) r) (/ (+ (* r (sin theta) (((partial 0) f-polar) (up r theta))) (* (cos theta) (((partial 1) f-polar) (up r theta)))) r))
