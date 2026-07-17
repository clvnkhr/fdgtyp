;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (((coordinate-system->oneform-basis R2-polar) (literal-vector-field 'b R2-rect))
            ((point R2-rect) (up 'x0 'y0))))
;; => (up (/ (+ (* x0 (b↑0 (up x0 y0))) (* y0 (b↑1 (up x0 y0)))) (sqrt (+ (expt x0 2) (expt y0 2)))) (/ (+ (* x0 (b↑1 (up x0 y0))) (* -1 y0 (b↑0 (up x0 y0)))) (+ (expt x0 2) (expt y0 2))))
