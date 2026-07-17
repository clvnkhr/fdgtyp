;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (let [g (Newton-metric 'M 'G 'c V)]
            (let [T_ij ((drop2 g spacetime-rect-basis) (Tdust 'rho))]
              (let [T ((trace2down g spacetime-rect-basis) T_ij)]
                ((- (T_ij d:dt d:dt) (* (/ 1 2) T (g d:dt d:dt))) ((point spacetime-rect) (up 't 'x 'y 'z)))))))
;; => (+ (* #emmy/ratio "1/2" (expt c 4) rho) (* #emmy/bigint 2 (expt c 2) rho (V (up x y z))) (* #emmy/bigint 2 rho (expt (V (up x y z)) 2)))
