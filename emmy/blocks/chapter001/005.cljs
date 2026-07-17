(defn Lsphere [m R] (compose (Lfree m) (F->C (sphere->R3 R))))
