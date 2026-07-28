(simplify (let [U (literal-vector-field 'U-rect R2-rect)
                V (literal-vector-field 'V-rect R2-rect)
                W (literal-vector-field 'W-rect R2-rect)
                nabla (covariant-derivative general-Cartan-2)
                sigma (up 'sigma0 'sigma1)]
            (let [m (Chi-inverse sigma)]
              (let [s (make-state sigma ((U Chi) m))]
                (- (((commutator (L W) (L V)) U-select) s) ((((commutator (nabla W) (nabla V)) U) Chi) m))))))
;; => (up (+ (* 2 (U-rect↑1 (up sigma0 sigma1)) (W-rect↑1 (up sigma0 sigma1))
;;    (Gamma_11↑0 (up sigma0 sigma1)) (Gamma_00↑0 (up sigma0 sigma1)) (V-rect↑0
;;    (up sigma0 sigma1))) (* -2 (U-rect↑1 (up sigma0 sigma1)) (W-rect↑1 (up
;;    sigma0 sigma1)) (Gamma_11↑0 (up sigma0 sigma1)) (V-rect↑0 (up sigma0
;;    sigma1)) (Gamma_01↑1 (up sigma0 sigma1))) (* -2 (U-rect↑1 (up sigma0
;;    sigma1)) (W-rect↑1 (up sigma0 sigma1)) (V-rect↑0 (up sigma0 sigma1))
;;    (Gamma_10↑0 (up sigma0 sigma1)) (Gamma_01↑0 (up sigma0 sigma1))) (* 2
;;    (U-rect↑1 (up sigma0 sigma1)) (W-rect↑1 (up sigma0 sigma1)) (V-rect↑0 (up
;;    sigma0 sigma1)) (Gamma_01↑0 (up sigma0 sigma1)) (Gamma_11↑1 (up sigma0
;;    sigma1))) (* -2 (U-rect↑1 (up sigma0 sigma1)) (Gamma_11↑0 (up sigma0
;;    sigma1)) (Gamma_00↑0 (up sigma0 sigma1)) (W-rect↑0 (up sigma0 sigma1))
;;    (V-rect↑1 (up sigma0 sigma1))) (* 2 (U-rect↑1 (up sigma0 sigma1))
;;    (Gamma_11↑0 (up sigma0 sigma1)) (Gamma_01↑1 (up sigma0 sigma1)) (W-rect↑0
;;    (up sigma0 sigma1)) (V-rect↑1 (up sigma0 sigma1))) (* 2 (U-rect↑1 (up sigma0
;;    sigma1)) (Gamma_10↑0 (up sigma0 sigma1)) (Gamma_01↑0 (up sigma0 sigma1))
;;    (W-rect↑0 (up sigma0 sigma1)) (V-rect↑1 (up sigma0 sigma1))) (* -2 (U-rect↑1
;;    (up sigma0 sigma1)) (Gamma_01↑0 (up sigma0 sigma1)) (Gamma_11↑1 (up sigma0
;;    sigma1)) (W-rect↑0 (up sigma0 sigma1)) (V-rect↑1 (up sigma0 sigma1))) (* -2
;;    (W-rect↑1 (up sigma0 sigma1)) (Gamma_11↑0 (up sigma0 sigma1)) (V-rect↑0 (up
;;    sigma0 sigma1)) (U-rect↑0 (up sigma0 sigma1)) (Gamma_00↑1 (up sigma0
;;    sigma1))) (* 2 (W-rect↑1 (up sigma0 sigma1)) (V-rect↑0 (up sigma0 sigma1))
;;    (Gamma_01↑0 (up sigma0 sigma1)) (U-rect↑0 (up sigma0 sigma1)) (Gamma_10↑1
;;    (up sigma0 sigma1))) (* 2 (Gamma_11↑0 (up sigma0 sigma1)) (W-rect↑0 (up
;;    sigma0 sigma1)) (V-rect↑1 (up sigma0 sigma1)) (U-rect↑0 (up sigma0 sigma1))
;;    (Gamma_00↑1 (up sigma0 sigma1))) (* -2 (Gamma_01↑0 (up sigma0 sigma1))
;;    (W-rect↑0 (up sigma0 sigma1)) (V-rect↑1 (up sigma0 sigma1)) (U-rect↑0 (up
;;    sigma0 sigma1)) (Gamma_10↑1 (up sigma0 sigma1))) (* -2 (U-rect↑1 (up sigma0
;;    sigma1)) (W-rect↑1 (up sigma0 sigma1)) (Gamma_11↑0 (up sigma0 sigma1))
;;    (((partial 1) V-rect↑1) (up sigma0 sigma1))) (* 2 (U-rect↑1 (up sigma0
;;    sigma1)) (W-rect↑1 (up sigma0 sigma1)) (V-rect↑0 (up sigma0 sigma1))
;;    (((partial 0) Gamma_11↑0) (up sigma0 sigma1))) (* -2 (U-rect↑1 (up sigma0
;;    sigma1)) (W-rect↑1 (up sigma0 sigma1)) (V-rect↑0 (up sigma0 sigma1))
;;    (((partial 1) Gamma_01↑0) (up sigma0 sigma1))) (* -2 (U-rect↑1 (up sigma0
;;    sigma1)) (W-rect↑1 (up sigma0 sigma1)) (Gamma_01↑0 (up sigma0 sigma1))
;;    (((partial 1) V-rect↑0) (up sigma0 sigma1))) (* 2 (U-rect↑1 (up sigma0
;;    sigma1)) (Gamma_11↑0 (up sigma0 sigma1)) (V-rect↑0 (up sigma0 sigma1))
;;    (((partial 0) W-rect↑1) (up sigma0 sigma1))) (* -2 (U-rect↑1 (up sigma0
;;    sigma1)) (Gamma_11↑0 (up sigma0 sigma1)) (W-rect↑0 (up sigma0 sigma1))
;;    (((partial 0) V-rect↑1) (up sigma0 sigma1))) (* 2 (U-rect↑1 (up sigma0
;;    sigma1)) (Gamma_11↑0 (up sigma0 sigma1)) (V-rect↑1 (up sigma0 sigma1))
;;    (((partial 1) W-rect↑1) (up sigma0 sigma1))) (* 2 (U-rect↑1 (up sigma0
;;    sigma1)) (V-rect↑0 (up sigma0 sigma1)) (Gamma_01↑0 (up sigma0 sigma1))
;;    (((partial 0) W-rect↑0) (up sigma0 sigma1))) (* -2 (U-rect↑1 (up sigma0
;;    sigma1)) (Gamma_01↑0 (up sigma0 sigma1)) (W-rect↑0 (up sigma0 sigma1))
;;    (((partial 0) V-rect↑0) (up sigma0 sigma1))) (* 2 (U-rect↑1 (up sigma0
;;    sigma1)) (Gamma_01↑0 (up sigma0 sigma1)) (V-rect↑1 (up sigma0 sigma1))
;;    (((partial 1) W-rect↑0) (up sigma0 sigma1))) (* -2 (U-rect↑1 (up sigma0
;;    sigma1)) (W-rect↑0 (up sigma0 sigma1)) (V-rect↑1 (up sigma0 sigma1))
;;    (((partial 0) Gamma_11↑0) (up sigma0 sigma1))) (* 2 (U-rect↑1 (up sigma0
;;    sigma1)) (W-rect↑0 (up sigma0 sigma1)) (V-rect↑1 (up sigma0 sigma1))
;;    (((partial 1) Gamma_01↑0) (up sigma0 sigma1))) (* -2 (W-rect↑1 (up sigma0
;;    sigma1)) (Gamma_00↑0 (up sigma0 sigma1)) (U-rect↑0 (up sigma0 sigma1))
;;    (((partial 1) V-rect↑0) (up sigma0 sigma1))) (* 2 (W-rect↑1 (up sigma0
;;    sigma1)) (V-rect↑0 (up sigma0 sigma1)) (U-rect↑0 (up sigma0 sigma1))
;;    (((partial 0) Gamma_10↑0) (up sigma0 sigma1))) (* -2 (W-rect↑1 (up sigma0
;;    sigma1)) (V-rect↑0 (up sigma0 sigma1)) (U-rect↑0 (up sigma0 sigma1))
;;    (((partial 1) Gamma_00↑0) (up sigma0 sigma1))) (* -2 (W-rect↑1 (up sigma0
;;    sigma1)) (Gamma_10↑0 (up sigma0 sigma1)) (U-rect↑0 (up sigma0 sigma1))
;;    (((partial 1) V-rect↑1) (up sigma0 sigma1))) (* 2 (Gamma_00↑0 (up sigma0
;;    sigma1)) (V-rect↑0 (up sigma0 sigma1)) (U-rect↑0 (up sigma0 sigma1))
;;    (((partial 0) W-rect↑0) (up sigma0 sigma1))) (* -2 (Gamma_00↑0 (up sigma0
;;    sigma1)) (W-rect↑0 (up sigma0 sigma1)) (U-rect↑0 (up sigma0 sigma1))
;;    (((partial 0) V-rect↑0) (up sigma0 sigma1))) (* 2 (Gamma_00↑0 (up sigma0
;;    sigma1)) (V-rect↑1 (up sigma0 sigma1)) (U-rect↑0 (up sigma0 sigma1))
;;    (((partial 1) W-rect↑0) (up sigma0 sigma1))) (* 2 (V-rect↑0 (up sigma0
;;    sigma1)) (Gamma_10↑0 (up sigma0 sigma1)) (U-rect↑0 (up sigma0 sigma1))
;;    (((partial 0) W-rect↑1) (up sigma0 sigma1))) (* -2 (Gamma_10↑0 (up sigma0
;;    sigma1)) (W-rect↑0 (up sigma0 sigma1)) (U-rect↑0 (up sigma0 sigma1))
;;    (((partial 0) V-rect↑1) (up sigma0 sigma1))) (* 2 (Gamma_10↑0 (up sigma0
;;    sigma1)) (V-rect↑1 (up sigma0 sigma1)) (U-rect↑0 (up sigma0 sigma1))
;;    (((partial 1) W-rect↑1) (up sigma0 sigma1))) (* -2 (W-rect↑0 (up sigma0
;;    sigma1)) (V-rect↑1 (up sigma0 sigma1)) (U-rect↑0 (up sigma0 sigma1))
;;    (((partial 0) Gamma_10↑0) (up sigma0 sigma1))) (* 2 (W-rect↑0 (up sigma0
;;    sigma1)) (V-rect↑1 (up sigma0 sigma1)) (U-rect↑0 (up sigma0 sigma1))
;;    (((partial 1) Gamma_00↑0) (up sigma0 sigma1))) (* -1 (W-rect↑1 (up sigma0
;;    sigma1)) (((partial 1) V-rect↑1) (up sigma0 sigma1)) (((partial 1) U-rect↑0)
;;    (up sigma0 sigma1))) (* -1 (W-rect↑1 (up sigma0 sigma1)) (((partial 1)
;;    V-rect↑0) (up sigma0 sigma1)) (((partial 0) U-rect↑0) (up sigma0 sigma1)))
;;    (* (V-rect↑0 (up sigma0 sigma1)) (((partial 0) W-rect↑1) (up sigma0 sigma1))
;;    (((partial 1) U-rect↑0) (up sigma0 sigma1))) (* (V-rect↑0 (up sigma0
;;    sigma1)) (((partial 0) W-rect↑0) (up sigma0 sigma1)) (((partial 0) U-rect↑0)
;;    (up sigma0 sigma1))) (* -1 (W-rect↑0 (up sigma0 sigma1)) (((partial 0)
;;    V-rect↑1) (up sigma0 sigma1)) (((partial 1) U-rect↑0) (up sigma0 sigma1)))
;;    (* -1 (W-rect↑0 (up sigma0 sigma1)) (((partial 0) V-rect↑0) (up sigma0
;;    sigma1)) (((partial 0) U-rect↑0) (up sigma0 sigma1))) (* (V-rect↑1 (up
;;    sigma0 sigma1)) (((partial 1) W-rect↑1) (up sigma0 sigma1)) (((partial 1)
;;    U-rect↑0) (up sigma0 sigma1))) (* (V-rect↑1 (up sigma0 sigma1)) (((partial
;;    1) W-rect↑0) (up sigma0 sigma1)) (((partial 0) U-rect↑0) (up sigma0
;;    sigma1)))) (+ (* 2 (U-rect↑1 (up sigma0 sigma1)) (W-rect↑1 (up sigma0
;;    sigma1)) (Gamma_11↑0 (up sigma0 sigma1)) (V-rect↑0 (up sigma0 sigma1))
;;    (Gamma_00↑1 (up sigma0 sigma1))) (* -2 (U-rect↑1 (up sigma0 sigma1))
;;    (W-rect↑1 (up sigma0 sigma1)) (V-rect↑0 (up sigma0 sigma1)) (Gamma_01↑0 (up
;;    sigma0 sigma1)) (Gamma_10↑1 (up sigma0 sigma1))) (* -2 (U-rect↑1 (up sigma0
;;    sigma1)) (Gamma_11↑0 (up sigma0 sigma1)) (W-rect↑0 (up sigma0 sigma1))
;;    (V-rect↑1 (up sigma0 sigma1)) (Gamma_00↑1 (up sigma0 sigma1))) (* 2
;;    (U-rect↑1 (up sigma0 sigma1)) (Gamma_01↑0 (up sigma0 sigma1)) (W-rect↑0 (up
;;    sigma0 sigma1)) (V-rect↑1 (up sigma0 sigma1)) (Gamma_10↑1 (up sigma0
;;    sigma1))) (* -2 (W-rect↑1 (up sigma0 sigma1)) (Gamma_00↑0 (up sigma0
;;    sigma1)) (V-rect↑0 (up sigma0 sigma1)) (U-rect↑0 (up sigma0 sigma1))
;;    (Gamma_10↑1 (up sigma0 sigma1))) (* 2 (W-rect↑1 (up sigma0 sigma1))
;;    (V-rect↑0 (up sigma0 sigma1)) (Gamma_01↑1 (up sigma0 sigma1)) (U-rect↑0 (up
;;    sigma0 sigma1)) (Gamma_10↑1 (up sigma0 sigma1))) (* 2 (W-rect↑1 (up sigma0
;;    sigma1)) (V-rect↑0 (up sigma0 sigma1)) (Gamma_10↑0 (up sigma0 sigma1))
;;    (U-rect↑0 (up sigma0 sigma1)) (Gamma_00↑1 (up sigma0 sigma1))) (* -2
;;    (W-rect↑1 (up sigma0 sigma1)) (V-rect↑0 (up sigma0 sigma1)) (Gamma_11↑1 (up
;;    sigma0 sigma1)) (U-rect↑0 (up sigma0 sigma1)) (Gamma_00↑1 (up sigma0
;;    sigma1))) (* 2 (Gamma_00↑0 (up sigma0 sigma1)) (W-rect↑0 (up sigma0 sigma1))
;;    (V-rect↑1 (up sigma0 sigma1)) (U-rect↑0 (up sigma0 sigma1)) (Gamma_10↑1 (up
;;    sigma0 sigma1))) (* -2 (Gamma_01↑1 (up sigma0 sigma1)) (W-rect↑0 (up sigma0
;;    sigma1)) (V-rect↑1 (up sigma0 sigma1)) (U-rect↑0 (up sigma0 sigma1))
;;    (Gamma_10↑1 (up sigma0 sigma1))) (* -2 (Gamma_10↑0 (up sigma0 sigma1))
;;    (W-rect↑0 (up sigma0 sigma1)) (V-rect↑1 (up sigma0 sigma1)) (U-rect↑0 (up
;;    sigma0 sigma1)) (Gamma_00↑1 (up sigma0 sigma1))) (* 2 (Gamma_11↑1 (up sigma0
;;    sigma1)) (W-rect↑0 (up sigma0 sigma1)) (V-rect↑1 (up sigma0 sigma1))
;;    (U-rect↑0 (up sigma0 sigma1)) (Gamma_00↑1 (up sigma0 sigma1))) (* 2
;;    (U-rect↑1 (up sigma0 sigma1)) (W-rect↑1 (up sigma0 sigma1)) (V-rect↑0 (up
;;    sigma0 sigma1)) (((partial 0) Gamma_11↑1) (up sigma0 sigma1))) (* -2
;;    (U-rect↑1 (up sigma0 sigma1)) (W-rect↑1 (up sigma0 sigma1)) (V-rect↑0 (up
;;    sigma0 sigma1)) (((partial 1) Gamma_01↑1) (up sigma0 sigma1))) (* -2
;;    (U-rect↑1 (up sigma0 sigma1)) (W-rect↑1 (up sigma0 sigma1)) (Gamma_01↑1 (up
;;    sigma0 sigma1)) (((partial 1) V-rect↑0) (up sigma0 sigma1))) (* -2 (U-rect↑1
;;    (up sigma0 sigma1)) (W-rect↑1 (up sigma0 sigma1)) (Gamma_11↑1 (up sigma0
;;    sigma1)) (((partial 1) V-rect↑1) (up sigma0 sigma1))) (* 2 (U-rect↑1 (up
;;    sigma0 sigma1)) (V-rect↑0 (up sigma0 sigma1)) (Gamma_01↑1 (up sigma0
;;    sigma1)) (((partial 0) W-rect↑0) (up sigma0 sigma1))) (* 2 (U-rect↑1 (up
;;    sigma0 sigma1)) (V-rect↑0 (up sigma0 sigma1)) (Gamma_11↑1 (up sigma0
;;    sigma1)) (((partial 0) W-rect↑1) (up sigma0 sigma1))) (* -2 (U-rect↑1 (up
;;    sigma0 sigma1)) (Gamma_01↑1 (up sigma0 sigma1)) (W-rect↑0 (up sigma0
;;    sigma1)) (((partial 0) V-rect↑0) (up sigma0 sigma1))) (* 2 (U-rect↑1 (up
;;    sigma0 sigma1)) (Gamma_01↑1 (up sigma0 sigma1)) (V-rect↑1 (up sigma0
;;    sigma1)) (((partial 1) W-rect↑0) (up sigma0 sigma1))) (* -2 (U-rect↑1 (up
;;    sigma0 sigma1)) (Gamma_11↑1 (up sigma0 sigma1)) (W-rect↑0 (up sigma0
;;    sigma1)) (((partial 0) V-rect↑1) (up sigma0 sigma1))) (* 2 (U-rect↑1 (up
;;    sigma0 sigma1)) (Gamma_11↑1 (up sigma0 sigma1)) (V-rect↑1 (up sigma0
;;    sigma1)) (((partial 1) W-rect↑1) (up sigma0 sigma1))) (* -2 (U-rect↑1 (up
;;    sigma0 sigma1)) (W-rect↑0 (up sigma0 sigma1)) (V-rect↑1 (up sigma0 sigma1))
;;    (((partial 0) Gamma_11↑1) (up sigma0 sigma1))) (* 2 (U-rect↑1 (up sigma0
;;    sigma1)) (W-rect↑0 (up sigma0 sigma1)) (V-rect↑1 (up sigma0 sigma1))
;;    (((partial 1) Gamma_01↑1) (up sigma0 sigma1))) (* 2 (W-rect↑1 (up sigma0
;;    sigma1)) (V-rect↑0 (up sigma0 sigma1)) (U-rect↑0 (up sigma0 sigma1))
;;    (((partial 0) Gamma_10↑1) (up sigma0 sigma1))) (* -2 (W-rect↑1 (up sigma0
;;    sigma1)) (V-rect↑0 (up sigma0 sigma1)) (U-rect↑0 (up sigma0 sigma1))
;;    (((partial 1) Gamma_00↑1) (up sigma0 sigma1))) (* -2 (W-rect↑1 (up sigma0
;;    sigma1)) (U-rect↑0 (up sigma0 sigma1)) (Gamma_00↑1 (up sigma0 sigma1))
;;    (((partial 1) V-rect↑0) (up sigma0 sigma1))) (* -2 (W-rect↑1 (up sigma0
;;    sigma1)) (U-rect↑0 (up sigma0 sigma1)) (Gamma_10↑1 (up sigma0 sigma1))
;;    (((partial 1) V-rect↑1) (up sigma0 sigma1))) (* 2 (V-rect↑0 (up sigma0
;;    sigma1)) (U-rect↑0 (up sigma0 sigma1)) (Gamma_00↑1 (up sigma0 sigma1))
;;    (((partial 0) W-rect↑0) (up sigma0 sigma1))) (* 2 (V-rect↑0 (up sigma0
;;    sigma1)) (U-rect↑0 (up sigma0 sigma1)) (Gamma_10↑1 (up sigma0 sigma1))
;;    (((partial 0) W-rect↑1) (up sigma0 sigma1))) (* -2 (W-rect↑0 (up sigma0
;;    sigma1)) (V-rect↑1 (up sigma0 sigma1)) (U-rect↑0 (up sigma0 sigma1))
;;    (((partial 0) Gamma_10↑1) (up sigma0 sigma1))) (* 2 (W-rect↑0 (up sigma0
;;    sigma1)) (V-rect↑1 (up sigma0 sigma1)) (U-rect↑0 (up sigma0 sigma1))
;;    (((partial 1) Gamma_00↑1) (up sigma0 sigma1))) (* -2 (W-rect↑0 (up sigma0
;;    sigma1)) (U-rect↑0 (up sigma0 sigma1)) (Gamma_00↑1 (up sigma0 sigma1))
;;    (((partial 0) V-rect↑0) (up sigma0 sigma1))) (* -2 (W-rect↑0 (up sigma0
;;    sigma1)) (U-rect↑0 (up sigma0 sigma1)) (Gamma_10↑1 (up sigma0 sigma1))
;;    (((partial 0) V-rect↑1) (up sigma0 sigma1))) (* 2 (V-rect↑1 (up sigma0
;;    sigma1)) (U-rect↑0 (up sigma0 sigma1)) (Gamma_00↑1 (up sigma0 sigma1))
;;    (((partial 1) W-rect↑0) (up sigma0 sigma1))) (* 2 (V-rect↑1 (up sigma0
;;    sigma1)) (U-rect↑0 (up sigma0 sigma1)) (Gamma_10↑1 (up sigma0 sigma1))
;;    (((partial 1) W-rect↑1) (up sigma0 sigma1))) (* -1 (W-rect↑1 (up sigma0
;;    sigma1)) (((partial 1) V-rect↑1) (up sigma0 sigma1)) (((partial 1) U-rect↑1)
;;    (up sigma0 sigma1))) (* -1 (W-rect↑1 (up sigma0 sigma1)) (((partial 1)
;;    V-rect↑0) (up sigma0 sigma1)) (((partial 0) U-rect↑1) (up sigma0 sigma1)))
;;    (* (V-rect↑0 (up sigma0 sigma1)) (((partial 0) W-rect↑1) (up sigma0 sigma1))
;;    (((partial 1) U-rect↑1) (up sigma0 sigma1))) (* (V-rect↑0 (up sigma0
;;    sigma1)) (((partial 0) W-rect↑0) (up sigma0 sigma1)) (((partial 0) U-rect↑1)
;;    (up sigma0 sigma1))) (* -1 (W-rect↑0 (up sigma0 sigma1)) (((partial 0)
;;    V-rect↑1) (up sigma0 sigma1)) (((partial 1) U-rect↑1) (up sigma0 sigma1)))
;;    (* -1 (W-rect↑0 (up sigma0 sigma1)) (((partial 0) V-rect↑0) (up sigma0
;;    sigma1)) (((partial 0) U-rect↑1) (up sigma0 sigma1))) (* (V-rect↑1 (up
;;    sigma0 sigma1)) (((partial 1) W-rect↑1) (up sigma0 sigma1)) (((partial 1)
;;    U-rect↑1) (up sigma0 sigma1))) (* (V-rect↑1 (up sigma0 sigma1)) (((partial
;;    1) W-rect↑0) (up sigma0 sigma1)) (((partial 0) U-rect↑1) (up sigma0
;;    sigma1)))))
