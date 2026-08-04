(defn transform
  [tilt]
  (fn [coords]
    (let [colat (ref coords 0)
          long (ref coords 1)]
      (let [x (* (sin colat) (cos long))
            y (* (sin colat) (sin long))
            z (cos colat)]
        (let [vp ((rotate-x tilt) (up x y z))]
          (let [colatp (acos (ref vp 2)) longp (atan (ref vp 1) (ref vp 0))] (up colatp longp)))))))

(defn tilted-path
  [tilt]
  (letfn [(coords [t] ((transform tilt) (up (/ pi 2) t)))]
    (compose (point S2-spherical) coords (chart R1-rect))))
