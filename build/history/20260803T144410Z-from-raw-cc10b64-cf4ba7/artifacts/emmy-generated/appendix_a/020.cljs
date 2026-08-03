(first a-list)
;; => 6

(rest a-list)
;; => (946 8 356 12 620)

(first (rest a-list))
;; => 946

(def another-list (cons 32 (rest a-list)))

another-list
;; => (32 946 8 356 12 620)

(first (rest another-list))
;; => 946
