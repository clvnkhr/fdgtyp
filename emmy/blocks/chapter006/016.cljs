;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (((- ((pullback mu) (d theta)) (d ((pullback mu) theta))) X Y) ((point R2-rect) (up 'x0 'y0))))
;; => 0
