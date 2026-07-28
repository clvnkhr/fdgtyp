(defn F [nabla] (fn [omega u v] (omega ((nabla u) v))))

;; Emmy's generic symbolic chart conversion introduces inverse trigonometric
;; functions and square roots before simplifying them away. Verify the same
;; statement exactly, component by component. Everything below remains visible
;; in the book except the repeated 2-by-2 transformation contraction, which is
;; compiled so SCI does not wrap its differentiable function as a MetaFn.
;;
;; Exact compiled helper source used below:
;; (ns fdg.slow-checks
;;   (:refer-clojure :exclude [+ - * /])
;;   (:require [emmy.env :as e]))
;;
;; (defn- sum2 [f] (e/+ (f 0) (f 1)))
;;
;; (defn spherical->stereographic
;;   "Exact north-pole stereographic coordinates in a native Emmy function."
;;   [[theta phi]]
;;   (let [scale (e// (e/sin theta) (e/- 1 (e/cos theta)))]
;;     (e/up (e/* scale (e/cos phi))
;;           (e/* scale (e/sin phi)))))
;;
;; (defn- old-term
;;   [old-symbols J i b c]
;;   (e/simplify
;;    (sum2
;;     (fn [j]
;;       (e/simplify
;;        (sum2
;;         (fn [k]
;;           (e/simplify
;;            (e/* (get-in old-symbols [j k i])
;;                 (get-in J [b j])
;;                 (get-in J [c k]))))))))))
;;
;; (defn- transformed-coefficient
;;   [old-symbols J J-inverse dJ b c a]
;;   (e/simplify
;;    (sum2
;;     (fn [i]
;;       (e/simplify
;;        (e/* (get-in J-inverse [i a])
;;             (e/simplify
;;              (e/+ (get-in dJ [b c i])
;;                   (old-term old-symbols J i b c)))))))))
;;
;; (defn- transform-symbols
;;   [old-symbols q]
;;   (let [J (e/mapr e/simplify ((e/D spherical->stereographic) q))
;;         J-inverse (e/mapr e/simplify (e/invert J))
;;         dJ (e/mapr e/simplify ((e/D (e/D spherical->stereographic)) q))
;;         gamma (fn [b c a]
;;                 (transformed-coefficient
;;                  old-symbols J J-inverse dJ b c a))]
;;     (e/down
;;      (e/down
;;       (e/up (gamma 0 0 0) (gamma 0 0 1))
;;       (e/up (gamma 0 1 0) (gamma 0 1 1)))
;;      (e/down
;;       (e/up (gamma 1 0 0) (gamma 1 0 1))
;;       (e/up (gamma 1 1 0) (gamma 1 1 1))))))
;;
;; (defn transform-stereographic-Christoffel-to-spherical
;;   "Apply the exact 2D Christoffel coordinate-transformation law, simplifying
;;   each contraction before assembling the next one."
;;   [stereographic-symbols spherical-coordinates]
;;   (transform-symbols stereographic-symbols spherical-coordinates))
(let [q (up 'theta 'phi)
      spherical-basis (coordinate-system->basis S2-spherical)
      stereographic-basis (coordinate-system->basis S2-stereographic)
      Gamma-for (fn [coordinate-system basis coordinates]
                  (let [metric (coordinate-system->metric coordinate-system)
                        christoffel (metric->Christoffel-2 metric basis)
                        symbols (Christoffel->symbols christoffel)]
                    (mapr simplify (symbols ((point coordinate-system) coordinates)))))
      Gamma-sphere (Gamma-for S2-spherical spherical-basis q)
      Gamma-stereo (fn [[x y]]
                     (let [d (+ 1 (square x) (square y))
                           minus-x (/ (* -2 x) d)
                           plus-x (/ (* 2 x) d)
                           minus-y (/ (* -2 y) d)
                           plus-y (/ (* 2 y) d)]
                       (down (down (up minus-x plus-y) (up minus-y minus-x))
                             (down (up minus-y minus-x) (up plus-x minus-y)))))
      Gamma-derived (Gamma-for S2-stereographic stereographic-basis (up 'x 'y))
      residuals (fn [actual expected] (mapr (fn [a e] (freeze (simplify (- a e)))) actual expected))
      derivation (residuals Gamma-derived (Gamma-stereo (up 'x 'y)))
      scale (/ (sin 'theta) (- 1 (cos 'theta)))
      xy (up (* scale (cos 'phi)) (* scale (sin 'phi)))
      Gamma-transformed (transform-stereographic-Christoffel-to-spherical (Gamma-stereo xy) q)
      transformation (residuals Gamma-transformed Gamma-sphere)]
  (verified-zero 0 (up derivation transformation)))
;; => 0
