(ns fdg.fdg-oracle)

;; A deliberately small bridge to Emmy's FDG regression suite. The expected
;; forms below correspond to the p4 and p7 assertions in emmy/fdg/ch1_test.cljc
;; at the Emmy revision pinned in deps.edn. The converter spells Scheme ratios
;; as explicit Emmy division, preserving the suite's exact symbolic `(/ 1 2)`.
(def expected-frozen-results
  {"chapter001-005"
   '(+ (* (/ 1 2) (expt R 2) m (expt phidot 2) (expt (sin theta) 2))
       (* (/ 1 2) (expt R 2) m (expt thetadot 2)))

   "chapter001-010"
   '(+ (* (/ 1 2) m (expt vx 2) (g_00 (up x y)))
       (* m vx vy (g_01 (up x y)))
       (* (/ 1 2) m (expt vy 2) (g_11 (up x y))))

   "chapter001-012" '(up (q↑0 t) (q↑1 t))
   "chapter001-013" '(up (q↑0 t) (q↑1 t))
   "chapter001-017" '(down 0 0)

   "chapter002-006"
   '(up (sqrt (+ (expt x0 2) (expt y0 2)))
        (atan y0 x0))

   "chapter002-007"
   '(up (* r0 (cos theta0))
        (* r0 (sin theta0)))

   "chapter002-008"
   '(down (up (cos theta0)
              (sin theta0))
          (up (* -1 r0 (sin theta0))
              (* r0 (cos theta0))))

   "chapter002-014" '(f-rect (up x0 y0))
   "chapter002-016" '(atan y0 x0)

   "chapter002-017"
   '(+ (expt x0 3)
       (* x0 (expt y0 2))
       (expt y0 3))

   "chapter002-018"
   '(+ (* (expt r0 3) (expt (sin theta0) 3))
       (* (expt r0 3) (cos theta0)))

   "chapter002-019"
   '(/ (+ (* -2 a x)
          (* -2 a (sqrt (+ (expt x 2) (expt y 2))))
          (expt x 2)
          (expt y 2))
       (sqrt (+ (expt x 2) (expt y 2))))

   "chapter002-020"
   '(up (acos (/ (+ (expt rho 2) -1)
                 (+ (expt rho 2) 1)))
        theta)

   ;; emmy/fdg/ch7_test.cljc, "Exercise 7.1: Hamiltonian Evolution".
   "chapter007-041"
   '(up 1
        (up p_theta (/ p_phi (expt (sin theta) 2)))
        (down (/ (* (expt p_phi 2) (cos theta))
                 (expt (sin theta) 3))
              0))})

(defn assert-result! [block-id actual]
  (when-let [expected (get expected-frozen-results block-id)]
    (when-not (= expected actual)
      (throw
       (js/Error.
        (str "Emmy FDG oracle mismatch at " block-id
             "\nExpected: " (pr-str expected)
             "\nActual:   " (pr-str actual)))))))
