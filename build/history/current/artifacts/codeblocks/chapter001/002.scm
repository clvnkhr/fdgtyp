(define ((sphere->R3 R) state)
  (let ((q (coordinate state)))
    (let ((theta (ref q 0)) (phi (ref q 1)))
      (up (* R (sin theta) (cos phi)) ; x
          (* R (sin theta) (sin phi)) ; y
          (* R (cos theta))))))       ; z
