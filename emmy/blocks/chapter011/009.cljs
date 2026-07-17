(defn coordinates->event
  [ancestor-frame this-frame boost-direction v:c origin]
  (fn [coords]
    ((point ancestor-frame)
      (make-SR-coordinates ancestor-frame (+ ((general-boost2 boost-direction v:c) coords) origin)))))

(defn event->coordinates
  [ancestor-frame this-frame boost-direction v:c origin]
  (fn [event]
    (make-SR-coordinates this-frame
                         ((general-boost2 (- boost-direction) v:c) (- ((chart ancestor-frame) event) origin)))))
