;; Prove that Emmy's generic Legendre transform agrees with the equivalent
;; closed form at a fully symbolic state. The following example differentiates
;; the closed form, avoiding a much slower differentiation through the generic
;; transform while retaining an exact symbolic check.
(def Hsphere
  (let [via-Legendre (Lagrangian->Hamiltonian Lsphere)
        closed-form (fn [[_ [theta _] [p-theta p-phi]]]
                      (* (/ 1 2) (+ (square p-theta) (/ (square p-phi) (square (sin theta))))))
        symbolic-state (up 't (up 'theta 'phi) (down 'p_theta 'p_phi))
        residual (simplify (- (via-Legendre symbolic-state) (closed-form symbolic-state)))]
    (verified-zero closed-form (up residual))))
