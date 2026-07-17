(defn f
  [radius]
  ;; Keep pi symbolic so the common factor cancels before numerical evaluation.
  (let [pi 'pi] (let [area (* 4 pi (square radius)) volume (* (/ 4 3) pi (cube radius))] (/ volume area))))

;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (f 3))
;; => 1
