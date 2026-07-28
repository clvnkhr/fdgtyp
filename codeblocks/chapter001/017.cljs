(def metric-components (metric->components the-metric (coordinate-system->basis R2-rect)))

(- Lagrange-residuals (* (* 'm (metric-components (gamma ((point R1-rect) 't)))) geodesic-equation-residuals))
;; => (down (- (- (+ (* (+ (* (g_00 (up (q↑0 t) (q↑1 t))) (/ 1 2) m) (* (/ 1 2) m
;;    (g_00 (up (q↑0 t) (q↑1 t))))) (((expt D 2) q↑0) t)) (* (+ (* (/ 1 2) m ((D
;;    q↑1) t) (((partial 1) g_01) (up (q↑0 t) (q↑1 t)))) (* (+ (* (/ 1 2) m ((D
;;    q↑0) t)) (* (/ 1 2) m ((D q↑0) t))) (((partial 1) g_00) (up (q↑0 t) (q↑1
;;    t)))) (* (/ 1 2) m ((D q↑1) t) (((partial 1) g_01) (up (q↑0 t) (q↑1 t)))))
;;    ((D q↑1) t)) (* (+ (* (/ 1 2) m ((D q↑1) t) (((partial 0) g_01) (up (q↑0 t)
;;    (q↑1 t)))) (* (+ (* (/ 1 2) m ((D q↑0) t)) (* (/ 1 2) m ((D q↑0) t)))
;;    (((partial 0) g_00) (up (q↑0 t) (q↑1 t)))) (* (/ 1 2) m ((D q↑1) t)
;;    (((partial 0) g_01) (up (q↑0 t) (q↑1 t))))) ((D q↑0) t)) (* (+ (* (/ 1 2) m
;;    (g_01 (up (q↑0 t) (q↑1 t)))) (* (g_01 (up (q↑0 t) (q↑1 t))) (/ 1 2) m))
;;    (((expt D 2) q↑1) t))) (+ (* (/ 1 2) m ((D q↑1) t) ((D q↑1) t) (((partial 0)
;;    g_11) (up (q↑0 t) (q↑1 t)))) (* (/ 1 2) m ((D q↑1) t) ((D q↑0) t) (((partial
;;    0) g_01) (up (q↑0 t) (q↑1 t)))) (* (/ 1 2) m ((D q↑0) t) ((D q↑1) t)
;;    (((partial 0) g_01) (up (q↑0 t) (q↑1 t)))) (* (/ 1 2) m ((D q↑0) t) ((D q↑0)
;;    t) (((partial 0) g_00) (up (q↑0 t) (q↑1 t)))))) (+ (* m (g_00 (up (q↑0 t)
;;    (q↑1 t))) (+ (((expt D 2) q↑0) t) (* (+ (* (+ (* (/ (g_11 (up (q↑0 t) (q↑1
;;    t))) (- (* (g_00 (up (q↑0 t) (q↑1 t))) (g_11 (up (q↑0 t) (q↑1 t)))) (* (g_01
;;    (up (q↑0 t) (q↑1 t))) (g_01 (up (q↑0 t) (q↑1 t)))))) (/ 1 2) (- (+
;;    (((partial 0) g_00) (up (q↑0 t) (q↑1 t))) (((partial 0) g_00) (up (q↑0 t)
;;    (q↑1 t)))) (((partial 0) g_00) (up (q↑0 t) (q↑1 t))))) (* (/ (g_01 (up (q↑0
;;    t) (q↑1 t))) (- (- (* (g_00 (up (q↑0 t) (q↑1 t))) (g_11 (up (q↑0 t) (q↑1
;;    t)))) (* (g_01 (up (q↑0 t) (q↑1 t))) (g_01 (up (q↑0 t) (q↑1 t))))))) (/ 1 2)
;;    (- (+ (((partial 0) g_01) (up (q↑0 t) (q↑1 t))) (((partial 0) g_01) (up (q↑0
;;    t) (q↑1 t)))) (((partial 1) g_00) (up (q↑0 t) (q↑1 t)))))) ((D q↑0) t)) (*
;;    (+ (* (/ (g_11 (up (q↑0 t) (q↑1 t))) (- (* (g_00 (up (q↑0 t) (q↑1 t))) (g_11
;;    (up (q↑0 t) (q↑1 t)))) (* (g_01 (up (q↑0 t) (q↑1 t))) (g_01 (up (q↑0 t) (q↑1
;;    t)))))) (/ 1 2) (- (+ (((partial 1) g_00) (up (q↑0 t) (q↑1 t))) (((partial
;;    0) g_01) (up (q↑0 t) (q↑1 t)))) (((partial 0) g_01) (up (q↑0 t) (q↑1 t)))))
;;    (* (/ (g_01 (up (q↑0 t) (q↑1 t))) (- (- (* (g_00 (up (q↑0 t) (q↑1 t))) (g_11
;;    (up (q↑0 t) (q↑1 t)))) (* (g_01 (up (q↑0 t) (q↑1 t))) (g_01 (up (q↑0 t) (q↑1
;;    t))))))) (/ 1 2) (- (+ (((partial 1) g_01) (up (q↑0 t) (q↑1 t))) (((partial
;;    0) g_11) (up (q↑0 t) (q↑1 t)))) (((partial 1) g_01) (up (q↑0 t) (q↑1 t))))))
;;    ((D q↑1) t))) ((D q↑0) t)) (* (+ (* (+ (* (/ (g_11 (up (q↑0 t) (q↑1 t))) (-
;;    (* (g_00 (up (q↑0 t) (q↑1 t))) (g_11 (up (q↑0 t) (q↑1 t)))) (* (g_01 (up
;;    (q↑0 t) (q↑1 t))) (g_01 (up (q↑0 t) (q↑1 t)))))) (/ 1 2) (- (+ (((partial 0)
;;    g_01) (up (q↑0 t) (q↑1 t))) (((partial 1) g_00) (up (q↑0 t) (q↑1 t))))
;;    (((partial 0) g_01) (up (q↑0 t) (q↑1 t))))) (* (/ (g_01 (up (q↑0 t) (q↑1
;;    t))) (- (- (* (g_00 (up (q↑0 t) (q↑1 t))) (g_11 (up (q↑0 t) (q↑1 t)))) (*
;;    (g_01 (up (q↑0 t) (q↑1 t))) (g_01 (up (q↑0 t) (q↑1 t))))))) (/ 1 2) (- (+
;;    (((partial 0) g_11) (up (q↑0 t) (q↑1 t))) (((partial 1) g_01) (up (q↑0 t)
;;    (q↑1 t)))) (((partial 1) g_01) (up (q↑0 t) (q↑1 t)))))) ((D q↑0) t)) (* (+
;;    (* (/ (g_11 (up (q↑0 t) (q↑1 t))) (- (* (g_00 (up (q↑0 t) (q↑1 t))) (g_11
;;    (up (q↑0 t) (q↑1 t)))) (* (g_01 (up (q↑0 t) (q↑1 t))) (g_01 (up (q↑0 t) (q↑1
;;    t)))))) (/ 1 2) (- (+ (((partial 1) g_01) (up (q↑0 t) (q↑1 t))) (((partial
;;    1) g_01) (up (q↑0 t) (q↑1 t)))) (((partial 0) g_11) (up (q↑0 t) (q↑1 t)))))
;;    (* (/ (g_01 (up (q↑0 t) (q↑1 t))) (- (- (* (g_00 (up (q↑0 t) (q↑1 t))) (g_11
;;    (up (q↑0 t) (q↑1 t)))) (* (g_01 (up (q↑0 t) (q↑1 t))) (g_01 (up (q↑0 t) (q↑1
;;    t))))))) (/ 1 2) (- (+ (((partial 1) g_11) (up (q↑0 t) (q↑1 t))) (((partial
;;    1) g_11) (up (q↑0 t) (q↑1 t)))) (((partial 1) g_11) (up (q↑0 t) (q↑1 t))))))
;;    ((D q↑1) t))) ((D q↑1) t)))) (* m (g_01 (up (q↑0 t) (q↑1 t))) (+ (((expt D
;;    2) q↑1) t) (* (+ (* (+ (* (/ (g_01 (up (q↑0 t) (q↑1 t))) (- (- (* (g_00 (up
;;    (q↑0 t) (q↑1 t))) (g_11 (up (q↑0 t) (q↑1 t)))) (* (g_01 (up (q↑0 t) (q↑1
;;    t))) (g_01 (up (q↑0 t) (q↑1 t))))))) (/ 1 2) (- (+ (((partial 0) g_00) (up
;;    (q↑0 t) (q↑1 t))) (((partial 0) g_00) (up (q↑0 t) (q↑1 t)))) (((partial 0)
;;    g_00) (up (q↑0 t) (q↑1 t))))) (* (/ (g_00 (up (q↑0 t) (q↑1 t))) (- (* (g_00
;;    (up (q↑0 t) (q↑1 t))) (g_11 (up (q↑0 t) (q↑1 t)))) (* (g_01 (up (q↑0 t) (q↑1
;;    t))) (g_01 (up (q↑0 t) (q↑1 t)))))) (/ 1 2) (- (+ (((partial 0) g_01) (up
;;    (q↑0 t) (q↑1 t))) (((partial 0) g_01) (up (q↑0 t) (q↑1 t)))) (((partial 1)
;;    g_00) (up (q↑0 t) (q↑1 t)))))) ((D q↑0) t)) (* (+ (* (/ (g_01 (up (q↑0 t)
;;    (q↑1 t))) (- (- (* (g_00 (up (q↑0 t) (q↑1 t))) (g_11 (up (q↑0 t) (q↑1 t))))
;;    (* (g_01 (up (q↑0 t) (q↑1 t))) (g_01 (up (q↑0 t) (q↑1 t))))))) (/ 1 2) (- (+
;;    (((partial 1) g_00) (up (q↑0 t) (q↑1 t))) (((partial 0) g_01) (up (q↑0 t)
;;    (q↑1 t)))) (((partial 0) g_01) (up (q↑0 t) (q↑1 t))))) (* (/ (g_00 (up (q↑0
;;    t) (q↑1 t))) (- (* (g_00 (up (q↑0 t) (q↑1 t))) (g_11 (up (q↑0 t) (q↑1 t))))
;;    (* (g_01 (up (q↑0 t) (q↑1 t))) (g_01 (up (q↑0 t) (q↑1 t)))))) (/ 1 2) (- (+
;;    (((partial 1) g_01) (up (q↑0 t) (q↑1 t))) (((partial 0) g_11) (up (q↑0 t)
;;    (q↑1 t)))) (((partial 1) g_01) (up (q↑0 t) (q↑1 t)))))) ((D q↑1) t))) ((D
;;    q↑0) t)) (* (+ (* (+ (* (/ (g_01 (up (q↑0 t) (q↑1 t))) (- (- (* (g_00 (up
;;    (q↑0 t) (q↑1 t))) (g_11 (up (q↑0 t) (q↑1 t)))) (* (g_01 (up (q↑0 t) (q↑1
;;    t))) (g_01 (up (q↑0 t) (q↑1 t))))))) (/ 1 2) (- (+ (((partial 0) g_01) (up
;;    (q↑0 t) (q↑1 t))) (((partial 1) g_00) (up (q↑0 t) (q↑1 t)))) (((partial 0)
;;    g_01) (up (q↑0 t) (q↑1 t))))) (* (/ (g_00 (up (q↑0 t) (q↑1 t))) (- (* (g_00
;;    (up (q↑0 t) (q↑1 t))) (g_11 (up (q↑0 t) (q↑1 t)))) (* (g_01 (up (q↑0 t) (q↑1
;;    t))) (g_01 (up (q↑0 t) (q↑1 t)))))) (/ 1 2) (- (+ (((partial 0) g_11) (up
;;    (q↑0 t) (q↑1 t))) (((partial 1) g_01) (up (q↑0 t) (q↑1 t)))) (((partial 1)
;;    g_01) (up (q↑0 t) (q↑1 t)))))) ((D q↑0) t)) (* (+ (* (/ (g_01 (up (q↑0 t)
;;    (q↑1 t))) (- (- (* (g_00 (up (q↑0 t) (q↑1 t))) (g_11 (up (q↑0 t) (q↑1 t))))
;;    (* (g_01 (up (q↑0 t) (q↑1 t))) (g_01 (up (q↑0 t) (q↑1 t))))))) (/ 1 2) (- (+
;;    (((partial 1) g_01) (up (q↑0 t) (q↑1 t))) (((partial 1) g_01) (up (q↑0 t)
;;    (q↑1 t)))) (((partial 0) g_11) (up (q↑0 t) (q↑1 t))))) (* (/ (g_00 (up (q↑0
;;    t) (q↑1 t))) (- (* (g_00 (up (q↑0 t) (q↑1 t))) (g_11 (up (q↑0 t) (q↑1 t))))
;;    (* (g_01 (up (q↑0 t) (q↑1 t))) (g_01 (up (q↑0 t) (q↑1 t)))))) (/ 1 2) (- (+
;;    (((partial 1) g_11) (up (q↑0 t) (q↑1 t))) (((partial 1) g_11) (up (q↑0 t)
;;    (q↑1 t)))) (((partial 1) g_11) (up (q↑0 t) (q↑1 t)))))) ((D q↑1) t))) ((D
;;    q↑1) t)))))) (- (- (+ (* (+ (* (g_11 (up (q↑0 t) (q↑1 t))) (/ 1 2) m) (* (/
;;    1 2) m (g_11 (up (q↑0 t) (q↑1 t))))) (((expt D 2) q↑1) t)) (* (+ (* (g_01
;;    (up (q↑0 t) (q↑1 t))) (/ 1 2) m) (* (/ 1 2) m (g_01 (up (q↑0 t) (q↑1 t)))))
;;    (((expt D 2) q↑0) t)) (* (+ (* (/ 1 2) m ((D q↑0) t) (((partial 1) g_01) (up
;;    (q↑0 t) (q↑1 t)))) (* (+ (* (/ 1 2) m ((D q↑1) t)) (* (/ 1 2) m ((D q↑1)
;;    t))) (((partial 1) g_11) (up (q↑0 t) (q↑1 t)))) (* (/ 1 2) m ((D q↑0) t)
;;    (((partial 1) g_01) (up (q↑0 t) (q↑1 t))))) ((D q↑1) t)) (* (+ (* (/ 1 2) m
;;    ((D q↑0) t) (((partial 0) g_01) (up (q↑0 t) (q↑1 t)))) (* (+ (* (/ 1 2) m
;;    ((D q↑1) t)) (* (/ 1 2) m ((D q↑1) t))) (((partial 0) g_11) (up (q↑0 t) (q↑1
;;    t)))) (* (/ 1 2) m ((D q↑0) t) (((partial 0) g_01) (up (q↑0 t) (q↑1 t)))))
;;    ((D q↑0) t))) (+ (* (/ 1 2) m ((D q↑1) t) ((D q↑1) t) (((partial 1) g_11)
;;    (up (q↑0 t) (q↑1 t)))) (* (/ 1 2) m ((D q↑1) t) ((D q↑0) t) (((partial 1)
;;    g_01) (up (q↑0 t) (q↑1 t)))) (* (/ 1 2) m ((D q↑0) t) ((D q↑1) t) (((partial
;;    1) g_01) (up (q↑0 t) (q↑1 t)))) (* (/ 1 2) m ((D q↑0) t) ((D q↑0) t)
;;    (((partial 1) g_00) (up (q↑0 t) (q↑1 t)))))) (+ (* m (g_01 (up (q↑0 t) (q↑1
;;    t))) (+ (((expt D 2) q↑0) t) (* (+ (* (+ (* (/ (g_11 (up (q↑0 t) (q↑1 t)))
;;    (- (* (g_00 (up (q↑0 t) (q↑1 t))) (g_11 (up (q↑0 t) (q↑1 t)))) (* (g_01 (up
;;    (q↑0 t) (q↑1 t))) (g_01 (up (q↑0 t) (q↑1 t)))))) (/ 1 2) (- (+ (((partial 0)
;;    g_00) (up (q↑0 t) (q↑1 t))) (((partial 0) g_00) (up (q↑0 t) (q↑1 t))))
;;    (((partial 0) g_00) (up (q↑0 t) (q↑1 t))))) (* (/ (g_01 (up (q↑0 t) (q↑1
;;    t))) (- (- (* (g_00 (up (q↑0 t) (q↑1 t))) (g_11 (up (q↑0 t) (q↑1 t)))) (*
;;    (g_01 (up (q↑0 t) (q↑1 t))) (g_01 (up (q↑0 t) (q↑1 t))))))) (/ 1 2) (- (+
;;    (((partial 0) g_01) (up (q↑0 t) (q↑1 t))) (((partial 0) g_01) (up (q↑0 t)
;;    (q↑1 t)))) (((partial 1) g_00) (up (q↑0 t) (q↑1 t)))))) ((D q↑0) t)) (* (+
;;    (* (/ (g_11 (up (q↑0 t) (q↑1 t))) (- (* (g_00 (up (q↑0 t) (q↑1 t))) (g_11
;;    (up (q↑0 t) (q↑1 t)))) (* (g_01 (up (q↑0 t) (q↑1 t))) (g_01 (up (q↑0 t) (q↑1
;;    t)))))) (/ 1 2) (- (+ (((partial 1) g_00) (up (q↑0 t) (q↑1 t))) (((partial
;;    0) g_01) (up (q↑0 t) (q↑1 t)))) (((partial 0) g_01) (up (q↑0 t) (q↑1 t)))))
;;    (* (/ (g_01 (up (q↑0 t) (q↑1 t))) (- (- (* (g_00 (up (q↑0 t) (q↑1 t))) (g_11
;;    (up (q↑0 t) (q↑1 t)))) (* (g_01 (up (q↑0 t) (q↑1 t))) (g_01 (up (q↑0 t) (q↑1
;;    t))))))) (/ 1 2) (- (+ (((partial 1) g_01) (up (q↑0 t) (q↑1 t))) (((partial
;;    0) g_11) (up (q↑0 t) (q↑1 t)))) (((partial 1) g_01) (up (q↑0 t) (q↑1 t))))))
;;    ((D q↑1) t))) ((D q↑0) t)) (* (+ (* (+ (* (/ (g_11 (up (q↑0 t) (q↑1 t))) (-
;;    (* (g_00 (up (q↑0 t) (q↑1 t))) (g_11 (up (q↑0 t) (q↑1 t)))) (* (g_01 (up
;;    (q↑0 t) (q↑1 t))) (g_01 (up (q↑0 t) (q↑1 t)))))) (/ 1 2) (- (+ (((partial 0)
;;    g_01) (up (q↑0 t) (q↑1 t))) (((partial 1) g_00) (up (q↑0 t) (q↑1 t))))
;;    (((partial 0) g_01) (up (q↑0 t) (q↑1 t))))) (* (/ (g_01 (up (q↑0 t) (q↑1
;;    t))) (- (- (* (g_00 (up (q↑0 t) (q↑1 t))) (g_11 (up (q↑0 t) (q↑1 t)))) (*
;;    (g_01 (up (q↑0 t) (q↑1 t))) (g_01 (up (q↑0 t) (q↑1 t))))))) (/ 1 2) (- (+
;;    (((partial 0) g_11) (up (q↑0 t) (q↑1 t))) (((partial 1) g_01) (up (q↑0 t)
;;    (q↑1 t)))) (((partial 1) g_01) (up (q↑0 t) (q↑1 t)))))) ((D q↑0) t)) (* (+
;;    (* (/ (g_11 (up (q↑0 t) (q↑1 t))) (- (* (g_00 (up (q↑0 t) (q↑1 t))) (g_11
;;    (up (q↑0 t) (q↑1 t)))) (* (g_01 (up (q↑0 t) (q↑1 t))) (g_01 (up (q↑0 t) (q↑1
;;    t)))))) (/ 1 2) (- (+ (((partial 1) g_01) (up (q↑0 t) (q↑1 t))) (((partial
;;    1) g_01) (up (q↑0 t) (q↑1 t)))) (((partial 0) g_11) (up (q↑0 t) (q↑1 t)))))
;;    (* (/ (g_01 (up (q↑0 t) (q↑1 t))) (- (- (* (g_00 (up (q↑0 t) (q↑1 t))) (g_11
;;    (up (q↑0 t) (q↑1 t)))) (* (g_01 (up (q↑0 t) (q↑1 t))) (g_01 (up (q↑0 t) (q↑1
;;    t))))))) (/ 1 2) (- (+ (((partial 1) g_11) (up (q↑0 t) (q↑1 t))) (((partial
;;    1) g_11) (up (q↑0 t) (q↑1 t)))) (((partial 1) g_11) (up (q↑0 t) (q↑1 t))))))
;;    ((D q↑1) t))) ((D q↑1) t)))) (* m (g_11 (up (q↑0 t) (q↑1 t))) (+ (((expt D
;;    2) q↑1) t) (* (+ (* (+ (* (/ (g_01 (up (q↑0 t) (q↑1 t))) (- (- (* (g_00 (up
;;    (q↑0 t) (q↑1 t))) (g_11 (up (q↑0 t) (q↑1 t)))) (* (g_01 (up (q↑0 t) (q↑1
;;    t))) (g_01 (up (q↑0 t) (q↑1 t))))))) (/ 1 2) (- (+ (((partial 0) g_00) (up
;;    (q↑0 t) (q↑1 t))) (((partial 0) g_00) (up (q↑0 t) (q↑1 t)))) (((partial 0)
;;    g_00) (up (q↑0 t) (q↑1 t))))) (* (/ (g_00 (up (q↑0 t) (q↑1 t))) (- (* (g_00
;;    (up (q↑0 t) (q↑1 t))) (g_11 (up (q↑0 t) (q↑1 t)))) (* (g_01 (up (q↑0 t) (q↑1
;;    t))) (g_01 (up (q↑0 t) (q↑1 t)))))) (/ 1 2) (- (+ (((partial 0) g_01) (up
;;    (q↑0 t) (q↑1 t))) (((partial 0) g_01) (up (q↑0 t) (q↑1 t)))) (((partial 1)
;;    g_00) (up (q↑0 t) (q↑1 t)))))) ((D q↑0) t)) (* (+ (* (/ (g_01 (up (q↑0 t)
;;    (q↑1 t))) (- (- (* (g_00 (up (q↑0 t) (q↑1 t))) (g_11 (up (q↑0 t) (q↑1 t))))
;;    (* (g_01 (up (q↑0 t) (q↑1 t))) (g_01 (up (q↑0 t) (q↑1 t))))))) (/ 1 2) (- (+
;;    (((partial 1) g_00) (up (q↑0 t) (q↑1 t))) (((partial 0) g_01) (up (q↑0 t)
;;    (q↑1 t)))) (((partial 0) g_01) (up (q↑0 t) (q↑1 t))))) (* (/ (g_00 (up (q↑0
;;    t) (q↑1 t))) (- (* (g_00 (up (q↑0 t) (q↑1 t))) (g_11 (up (q↑0 t) (q↑1 t))))
;;    (* (g_01 (up (q↑0 t) (q↑1 t))) (g_01 (up (q↑0 t) (q↑1 t)))))) (/ 1 2) (- (+
;;    (((partial 1) g_01) (up (q↑0 t) (q↑1 t))) (((partial 0) g_11) (up (q↑0 t)
;;    (q↑1 t)))) (((partial 1) g_01) (up (q↑0 t) (q↑1 t)))))) ((D q↑1) t))) ((D
;;    q↑0) t)) (* (+ (* (+ (* (/ (g_01 (up (q↑0 t) (q↑1 t))) (- (- (* (g_00 (up
;;    (q↑0 t) (q↑1 t))) (g_11 (up (q↑0 t) (q↑1 t)))) (* (g_01 (up (q↑0 t) (q↑1
;;    t))) (g_01 (up (q↑0 t) (q↑1 t))))))) (/ 1 2) (- (+ (((partial 0) g_01) (up
;;    (q↑0 t) (q↑1 t))) (((partial 1) g_00) (up (q↑0 t) (q↑1 t)))) (((partial 0)
;;    g_01) (up (q↑0 t) (q↑1 t))))) (* (/ (g_00 (up (q↑0 t) (q↑1 t))) (- (* (g_00
;;    (up (q↑0 t) (q↑1 t))) (g_11 (up (q↑0 t) (q↑1 t)))) (* (g_01 (up (q↑0 t) (q↑1
;;    t))) (g_01 (up (q↑0 t) (q↑1 t)))))) (/ 1 2) (- (+ (((partial 0) g_11) (up
;;    (q↑0 t) (q↑1 t))) (((partial 1) g_01) (up (q↑0 t) (q↑1 t)))) (((partial 1)
;;    g_01) (up (q↑0 t) (q↑1 t)))))) ((D q↑0) t)) (* (+ (* (/ (g_01 (up (q↑0 t)
;;    (q↑1 t))) (- (- (* (g_00 (up (q↑0 t) (q↑1 t))) (g_11 (up (q↑0 t) (q↑1 t))))
;;    (* (g_01 (up (q↑0 t) (q↑1 t))) (g_01 (up (q↑0 t) (q↑1 t))))))) (/ 1 2) (- (+
;;    (((partial 1) g_01) (up (q↑0 t) (q↑1 t))) (((partial 1) g_01) (up (q↑0 t)
;;    (q↑1 t)))) (((partial 0) g_11) (up (q↑0 t) (q↑1 t))))) (* (/ (g_00 (up (q↑0
;;    t) (q↑1 t))) (- (* (g_00 (up (q↑0 t) (q↑1 t))) (g_11 (up (q↑0 t) (q↑1 t))))
;;    (* (g_01 (up (q↑0 t) (q↑1 t))) (g_01 (up (q↑0 t) (q↑1 t)))))) (/ 1 2) (- (+
;;    (((partial 1) g_11) (up (q↑0 t) (q↑1 t))) (((partial 1) g_11) (up (q↑0 t)
;;    (q↑1 t)))) (((partial 1) g_11) (up (q↑0 t) (q↑1 t)))))) ((D q↑1) t))) ((D
;;    q↑1) t)))))))

(down 0 0)
;; => (down 0 0)
