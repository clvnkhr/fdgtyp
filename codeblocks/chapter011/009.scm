(define ((coordinates->event ancestor-frame this-frame
                             boost-direction v/c origin)
         coords)
  ((point ancestor-frame)
   (make-SR-coordinates ancestor-frame
                        (+ ((general-boost2 boost-direction v/c) coords)
                           origin))))

(define ((event->coordinates ancestor-frame this-frame
                             boost-direction v/c origin)
         event)
  (make-SR-coordinates this-frame
                       ((general-boost2 (- boost-direction) v/c)
                        (- ((chart ancestor-frame) event) origin))))
