export function normalizeImportedOrgSource(source) {
  return source
    .replaceAll(
      "(make fake-vector-field V-over-mu n)",
      "(make-fake-vector-field V-over-mu n)",
    )
    .replaceAll(
      "(compose (literal-function 'f-rect R2->R) R2-rect-chi)",
      "(compose (literal-function 'f-rect R2->R) R2-rect-chi))",
    )
    .replaceAll(
      "(define R2-rect-point (R2-rect-chi-inverse (up 'x0 'y0))))",
      "(define R2-rect-point (R2-rect-chi-inverse (up 'x0 'y0)))",
    )
    .replaceAll(
      "(define SR-vector-basis (coordinate-system->vector-basis SR))",
      "(define SR-vector-basis (coordinate-system->vector-basis SR))\n"
        + "(define SR-basis (coordinate-system->basis SR))",
    )
    .replaceAll(
      "(define (Force charge F 4velocity component)",
      "(define eta-inverse (invert g-Minkowski SR-basis))\n\n"
        + "(define (Force charge F 4velocity component)",
    )
    .replaceAll("((wedge dr dtheta) ab)", "((wedge dr dtheta) a b)")
    .replaceAll("basis-1>form-basis", "basis->1form-basis")
    .replaceAll("literal-manifold function", "literal-manifold-function")
    .replaceAll(
      "             (* ((D f) x) (b x)))))\n       (make-operator coordinatized-v))",
      "             (* ((D f) x) (b x))))\n         (make-operator coordinatized-v))",
    )
    .replaceAll(
      "(define Jz (- (* x d/dy) (* y d/dx)))",
      "(define-coordinates (up x y z) R3-rect)\n"
        + "(define Jz (- (* x d/dy) (* y d/dx)))",
    )
    .replaceAll(
      "(((+ (commutator e x e y) e z) f) SO3-point)",
      "(define Euler-angles (coordinate-system-at 'Euler 'Euler-patch SO3))\n"
        + "(define-coordinates (up theta phi psi) Euler-angles)\n"
        + "(define SO3-point ((point Euler-angles) (up 'theta 'phi 'psi)))\n"
        + "(define f (literal-manifold-function 'f-Euler Euler-angles))\n\n"
        + "(define e_x\n"
        + "  (+ (* (cos phi) d/dtheta)\n"
        + "     (* -1 (/ (* (sin phi) (cos theta)) (sin theta)) d/dphi)\n"
        + "     (* (/ (sin phi) (sin theta)) d/dpsi)))\n"
        + "(define e_y\n"
        + "  (+ (/ (* (cos phi) (cos theta) d/dphi) (sin theta))\n"
        + "     (* (sin phi) d/dtheta)\n"
        + "     (* -1 (/ (cos phi) (sin theta)) d/dpsi)))\n"
        + "(define e_z d/dphi)\n\n"
        + "(((+ (commutator e_x e_y) e_z) f) SO3-point)",
    )
    .replaceAll("(((+ (commutator e y e z) e x) f) SO3-point)",
                "(((+ (commutator e_y e_z) e_x) f) SO3-point)")
    .replaceAll("(((+ (commutator e z e x) e y) f) SO3-point)",
                "(((+ (commutator e_z e_x) e_y) f) SO3-point)")
    .replaceAll("(metric:invert metric-tensor basis)", "(metric:invert metric basis)")
    .replaceAll("(let ((T ij ((drop2 g spacetime-rect-basis) (Tdust 'rho))))",
                "(let ((T_ij ((drop2 g spacetime-rect-basis) (Tdust 'rho))))")
    .replaceAll("(trace2down g spacetime-rect-basis) T ij",
                "(trace2down g spacetime-rect-basis) T_ij")
    .replaceAll("(T ij d/dt d/dt)", "(T_ij d/dt d/dt)")
    .replaceAll(
      "(define (Newton-metric M G c V)",
      "(define-coordinates (up t x y z) spacetime-rect)\n"
        + "(define spacetime-rect-basis (coordinate-system->basis spacetime-rect))\n\n"
        + "(define (Newton-metric M G c V)",
    )
    .replaceAll(
      "(define (geodesic-equation+X-residuals eps X)",
      "(define Cartan\n"
        + "  (Christoffel->Cartan\n"
        + "   (metric->Christoffel-2\n"
        + "    (Schwarzschild-metric 'M 'G ':c)\n"
        + "    (coordinate-system->basis spacetime-sphere))))\n\n"
        + "(define (geodesic-equation+X-residuals eps X)",
    )
    .replaceAll(
      "(define nabla\n  (covariant-derivative\n   (Newton-connection 'M 'G ':c\n                      (literal-function 'V (-> (UP Real Real Real) Real)))))",
      "(define V (literal-function 'V (-> (UP Real Real Real) Real)))\n\n"
        + "(define nabla\n  (covariant-derivative\n   (Newton-connection 'M 'G ':c V)))",
    );
}
