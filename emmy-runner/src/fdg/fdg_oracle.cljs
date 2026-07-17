(ns fdg.fdg-oracle)

;; A deliberately small bridge to Emmy's FDG regression suite. The expected
;; forms below correspond to the p4 and p7 assertions in emmy/fdg/ch1_test.cljc
;; at the Emmy revision pinned in deps.edn. The converter spells Scheme ratios
;; as explicit Emmy division, preserving the suite's exact symbolic `(/ 1 2)`.
(def expected-frozen-results
  {"chapter001-006"
   '(+ (* (/ 1 2) (expt R 2) m (expt phidot 2) (expt (sin theta) 2))
       (* (/ 1 2) (expt R 2) m (expt thetadot 2)))

   "chapter001-012"
   '(+ (* (/ 1 2) m (expt vx 2) (g_00 (up x y)))
       (* m vx vy (g_01 (up x y)))
       (* (/ 1 2) m (expt vy 2) (g_11 (up x y))))

   "chapter001-014" '(up (q↑0 t) (q↑1 t))
   "chapter001-016" '(up (q↑0 t) (q↑1 t))
   "chapter001-022" '(down 0 0)

   "chapter002-005"
   '(up (sqrt (+ (expt x0 2) (expt y0 2)))
        (atan y0 x0))

   "chapter002-006"
   '(up (* r0 (cos theta0))
        (* r0 (sin theta0)))

   "chapter002-007"
   '(down (up (cos theta0)
              (sin theta0))
          (up (* -1 r0 (sin theta0))
              (* r0 (cos theta0))))

   "chapter002-012" '(f-rect (up x0 y0))
   "chapter002-013" '(f-rect (up x0 y0))
   "chapter002-015" 'x0
   "chapter002-016" '(* r0 (cos theta0))
   "chapter002-017" 'r0
   "chapter002-018" '(sqrt (+ (expt x0 2) (expt y0 2)))
   "chapter002-019" '(atan y0 x0)

   "chapter002-020"
   '(+ (expt x0 3)
       (* x0 (expt y0 2))
       (expt y0 3))

   "chapter002-021"
   '(+ (* (expt r0 3) (expt (sin theta0) 3))
       (* (expt r0 3) (cos theta0)))

   "chapter002-022"
   '(/ (+ (* -2 a x)
          (* -2 a (sqrt (+ (expt x 2) (expt y 2))))
          (expt x 2)
          (expt y 2))
       (sqrt (+ (expt x 2) (expt y 2))))

   "chapter002-023"
   '(up (acos (/ (+ (expt rho 2) -1)
                 (+ (expt rho 2) 1)))
        theta)})

(defn assert-result! [block-id actual]
  (when-let [expected (get expected-frozen-results block-id)]
    (when-not (= expected actual)
      (throw
       (js/Error.
        (str "Emmy FDG oracle mismatch at " block-id
             "\nExpected: " (pr-str expected)
             "\nActual:   " (pr-str actual)))))))
