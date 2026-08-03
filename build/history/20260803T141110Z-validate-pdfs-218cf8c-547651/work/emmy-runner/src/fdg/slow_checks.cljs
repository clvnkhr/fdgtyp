(ns fdg.slow-checks
  (:refer-clojure :exclude [+ - * /])
  (:require [emmy.env :as e]))

(defn- sum2 [f] (e/+ (f 0) (f 1)))

(defn spherical->stereographic
  "Exact north-pole stereographic coordinates in a native Emmy function."
  [[theta phi]]
  (let [scale (e// (e/sin theta) (e/- 1 (e/cos theta)))]
    (e/up (e/* scale (e/cos phi))
          (e/* scale (e/sin phi)))))

(defn- old-term
  [old-symbols J i b c]
  (e/simplify
   (sum2
    (fn [j]
      (e/simplify
       (sum2
        (fn [k]
          (e/simplify
           (e/* (get-in old-symbols [j k i])
                (get-in J [b j])
                (get-in J [c k]))))))))))

(defn- transformed-coefficient
  [old-symbols J J-inverse dJ b c a]
  (e/simplify
   (sum2
    (fn [i]
      (e/simplify
       (e/* (get-in J-inverse [i a])
            (e/simplify
             (e/+ (get-in dJ [b c i])
                  (old-term old-symbols J i b c)))))))))

(defn- transform-symbols
  [old-symbols q]
  (let [J (e/mapr e/simplify ((e/D spherical->stereographic) q))
        J-inverse (e/mapr e/simplify (e/invert J))
        dJ (e/mapr e/simplify ((e/D (e/D spherical->stereographic)) q))
        gamma (fn [b c a]
                (transformed-coefficient
                 old-symbols J J-inverse dJ b c a))]
    (e/down
     (e/down
      (e/up (gamma 0 0 0) (gamma 0 0 1))
      (e/up (gamma 0 1 0) (gamma 0 1 1)))
     (e/down
      (e/up (gamma 1 0 0) (gamma 1 0 1))
      (e/up (gamma 1 1 0) (gamma 1 1 1))))))

(defn transform-stereographic-Christoffel-to-spherical
  "Apply the exact 2D Christoffel coordinate-transformation law, simplifying
  each contraction before assembling the next one."
  [stereographic-symbols spherical-coordinates]
  (transform-symbols stereographic-symbols spherical-coordinates))
