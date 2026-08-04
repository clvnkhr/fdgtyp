(define (factorial n)
  (if (= n 0)
      1
      (* n (factorial (- n 1)))))

(factorial 6)
;; 720

(factorial 40)
;; 815915283247897734345611269596115894272000000000
