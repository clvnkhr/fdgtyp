(ns fdg.compat
  "Small, reusable scmutils-to-Emmy adapters for the FDG port."
  (:require [emmy.calculus.form-field :as ff]
            [emmy.calculus.manifold :as manifold]
            [emmy.calculus.metric :as metric]
            [emmy.calculus.vector-field :as vf]
            [emmy.env :as e]
            [emmy.mechanics.lagrange :as lagrange]
            [emmy.operator :as operator]))

(def procedure->vector-field vf/procedure->vector-field)
(def procedure->oneform-field ff/procedure->oneform-field)
(def procedure->nform-field ff/procedure->nform-field)
(def get-rank ff/get-rank)
(def invert metric/invert)
(def make-operator operator/make-operator)

(def d:dt
  "Canonical time-coordinate vector field used across chapters."
  (e/coordinate-system->vector-basis e/R1-rect))

(def d:dtau
  "Curve-parameter vector field, kept distinct from spacetime d:dt bindings."
  (e/coordinate-system->vector-basis e/R1-rect))

(defn pair? [value]
  (boolean (and (seq? value) (seq value))))

(defn series:for-each [f series n]
  (doseq [term (take n series)] (f term)))

(defn for-each [f values]
  (doseq [value values] (f value)))

(defn- literal-field [coordsys type]
  (case type
    (scalar function) (e/literal-manifold-function (gensym 'g) coordsys)
    (up vector) (e/literal-vector-field (gensym 'v) coordsys)
    (down oneform one-form) (e/literal-oneform-field (gensym 'omega) coordsys)
    (throw (js/Error. (str "Bad tensor argument type: " type)))))

(defn tensor-test [tensor types coordsys]
  (let [args (mapv #(literal-field coordsys %) types)
        f (literal-field coordsys 'scalar)]
    (mapv
     (fn [i]
       (let [thing (literal-field coordsys (nth types i))]
         (-> ((e/- (apply tensor (assoc args i (e/+ (e/* f (get args i)) thing)))
                    (e/+ (e/* f (apply tensor args))
                         (apply tensor (assoc args i thing))))
              (manifold/typical-point coordsys))
             e/simplify
             e/freeze)))
     (range (count types)))))

(defn- emmy-keyword [value]
  (keyword (if-let [prefix (namespace value)]
             (str prefix "-" (name value))
             (name value))))

(defn patch [patch-name manifold-value]
  (manifold/get-patch manifold-value (emmy-keyword patch-name)))

(defn coordinate-system [system-name patch-value]
  (manifold/coordinate-system-at (:manifold patch-value)
                                 (emmy-keyword system-name)
                                 (:name patch-value)))

(def R2->R '(-> (UP Real Real) Real))
(def Lagrange-explicit lagrange/Lagrangian->acceleration)

(def R2-rect-point ((e/point e/R2-rect) (e/up 'x0 'y0)))
(def Chi-inverse (e/point e/R2-rect))
(def Chi (e/chart e/R2-rect))
(def general-Cartan-2
  (e/Christoffel->Cartan (e/literal-Christoffel-2 'Gamma e/R2-rect)))
(def R3-rect-point ((e/point e/R3-rect) (e/up 'x0 'y0 'z0)))
(def R4-rect-point ((e/point e/R4-rect) (e/up 'x0 'y0 'z0 'w0)))
(def R2-rect-basis (e/coordinate-system->basis e/R2-rect))
(def b-rect ((e/coordinate-system->oneform-basis e/R2-rect)
             (e/literal-vector-field 'b e/R2-rect)))
(def g (e/literal-manifold-function 'g-rect e/R3-rect))

(def d:dx (e/ref (e/coordinate-system->vector-basis e/R2-rect) 0))
(def d:dy (e/ref (e/coordinate-system->vector-basis e/R2-rect) 1))
(def d:dz (e/ref (e/coordinate-system->vector-basis e/R3-rect) 2))
(def dx (e/ref (e/coordinate-system->oneform-basis e/R2-rect) 0))
(def dy (e/ref (e/coordinate-system->oneform-basis e/R2-rect) 1))
(def dz (e/ref (e/coordinate-system->oneform-basis e/R3-rect) 2))

(def d:dtheta (e/ref (e/coordinate-system->vector-basis e/S2-spherical) 0))
(def d:dphi (e/ref (e/coordinate-system->vector-basis e/S2-spherical) 1))
(def dtheta (e/ref (e/coordinate-system->oneform-basis e/S2-spherical) 0))
(def dphi (e/ref (e/coordinate-system->oneform-basis e/S2-spherical) 1))
(defn theta [point] (e/ref ((e/chart e/S2-spherical) point) 0))
(defn phi [point] (e/ref ((e/chart e/S2-spherical) point) 1))
(def S2-basis (e/coordinate-system->basis e/S2-spherical))
(def S2-Christoffel (e/metric->Christoffel-2 metric/S2-metric S2-basis))
(def sphere-Cartan
  (e/Christoffel->Cartan S2-Christoffel))
(def T d:dtheta)
(def U d:dphi)
(def m ((e/point e/S2-spherical) (e/up 'theta0 'phi0)))
(def Cartan sphere-Cartan)
(def nabla (e/covariant-derivative Cartan))
(def omega (e/literal-oneform-field 'omega-rect e/R4-rect))
(def f (e/literal-manifold-function 'f-sphere e/S2-spherical))
(def X (e/literal-vector-field 'X-rect e/R4-rect))
(def Y (e/literal-vector-field 'Y-rect e/R4-rect))
(def Z (e/literal-vector-field 'Z-rect e/R4-rect))
(def V (e/literal-vector-field 'V-rect e/R4-rect))
(def e-x (e/literal-oneform-field 'e↑x e/Euler-angles))
(def e-y (e/literal-oneform-field 'e↑y e/Euler-angles))
(def e-z (e/literal-oneform-field 'e↑z e/Euler-angles))

(def home
  "Base frame assumed, but not defined, by the Chapter 11 text."
  (e/base-frame-maker 'home 'home))

(defn legacy-frame-maker
  "Adapts FDG's variadic scmutils frame-maker protocol to Emmy's parameter-map protocol."
  [coordinates->event event->coordinates]
  (let [make (e/frame-maker
              (fn [ancestor-frame this-frame params]
                (apply coordinates->event ancestor-frame this-frame params))
              (fn [ancestor-frame this-frame params]
                (apply event->coordinates ancestor-frame this-frame params)))]
    (fn [name ancestor-frame & params]
      (make name ancestor-frame params))))

(defn unsupported!
  "Marks a known compatibility gap without allowing a misleading result."
  [block-id explanation]
  (throw (js/Error. (str block-id ": " explanation))))

(defn show
  "Identity helper useful while inspecting intermediate values in SCI."
  [value]
  value)
