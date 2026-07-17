(let [U (literal-vector-field 'U-rect R2-rect)
      V (literal-vector-field 'V-rect R2-rect)
      W (literal-vector-field 'W-rect R2-rect)
      nabla (covariant-derivative general-Cartan-2)
      sigma (up 'sigma0 'sigma1)]
  (let [m (Chi-inverse sigma)]
    (let [s (make-state sigma ((U Chi) m))]
      (- (((commutator (L W) (L V)) U-select) s) ((((commutator (nabla W) (nabla V)) U) Chi) m)))))
;; => (up (- (- (+ (* (+ (* (U-rect↑1 (up sigma0 sigma1)) -1 (V-rect↑1 (up sigma0 sigma1)) (((partial 0) Gamma_11↑0) (up sigma0 sigma1))) (* (U-rect↑1 (up sigma0 sigma1)) -1 (V-rect↑0 (up sigma0 sigma1)) ((... <result truncated: 28740 characters total; inspect in the web runner>
