goog.provide('emmy.numerical.quadrature.milne');
/**
 * Returns a (lazy) sequence of successively refined estimates of the integral of
 *   `f` over the open interval $(a, b)$ using [Milne's
 *   rule](https://en.wikipedia.org/wiki/Newton%E2%80%93Cotes_formulas#Open_Newton%E2%80%93Cotes_formulas).
 * 
 *   Milne's rule is equivalent to the midpoint method subject to one refinement of
 *   Richardson extrapolation.
 * 
 *   Returns estimates with $n, 2n, 4n, ...$ slices, geometrically increasing by a
 *   factor of 2 with each estimate.
 * 
 *   ## Optional arguments:
 * 
 *   If supplied, `:n` (default 1) specifies the initial number of slices to use.
 * 
 *   NOTE: the Midpoint method is able to reuse function evaluations as its windows
 *   narrow _only_ when increasing the number of integration slices by 3. Milne's
 *   method increases the number of slices geometrically by a factor of 2 each
 *   time, so it will never hit the incremental path. You may want to memoize your
 *   function before calling [[milne-sequence]].
 */
emmy.numerical.quadrature.milne.milne_sequence = (function emmy$numerical$quadrature$milne$milne_sequence(var_args){
var G__56969 = arguments.length;
switch (G__56969) {
case 3:
return emmy.numerical.quadrature.milne.milne_sequence.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return emmy.numerical.quadrature.milne.milne_sequence.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.numerical.quadrature.milne.milne_sequence.cljs$core$IFn$_invoke$arity$3 = (function (f,a,b){
return emmy.numerical.quadrature.milne.milne_sequence.cljs$core$IFn$_invoke$arity$4(f,a,b,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),(1)], null));
}));

(emmy.numerical.quadrature.milne.milne_sequence.cljs$core$IFn$_invoke$arity$4 = (function (f,a,b,p__56992){
var map__56994 = p__56992;
var map__56994__$1 = cljs.core.__destructure_map(map__56994);
var opts = map__56994__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56994__$1,new cljs.core.Keyword(null,"n","n",562130025),(1));
if(typeof n === 'number'){
} else {
throw (new Error("Assert failed: (number? n)"));
}

return emmy.polynomial.richardson.richardson_column.cljs$core$IFn$_invoke$arity$5(emmy.numerical.quadrature.midpoint.midpoint_sequence.cljs$core$IFn$_invoke$arity$4(f,a,b,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"n","n",562130025),emmy.util.stream.powers.cljs$core$IFn$_invoke$arity$2((2),n))),(1),(2),(2),(2));
}));

(emmy.numerical.quadrature.milne.milne_sequence.cljs$lang$maxFixedArity = 4);

/**
 * Returns an estimate of the integral of `f` over the open interval $(a, b)$
 *   using [Milne's
 *   rule](https://en.wikipedia.org/wiki/Newton%E2%80%93Cotes_formulas#Open_Newton%E2%80%93Cotes_formulas)
 *   with $1, 2, 4 ... 2^n$ windows for each estimate.
 * 
 *   Optionally accepts `opts`, a dict of optional arguments. All of these get
 *   passed on to `us/seq-limit` to configure convergence checking.
 * 
 *   See [[milne-sequence]] for more information about Milne's rule, caveats that
 *   might apply when using this integration method and information on the optional
 *   args in `opts` that customize this function's behavior.
 */
emmy.numerical.quadrature.milne.integral = emmy.numerical.quadrature.common.make_integrator_fn(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.first,emmy.numerical.quadrature.milne.milne_sequence),emmy.numerical.quadrature.milne.milne_sequence);

//# sourceMappingURL=emmy.numerical.quadrature.milne.js.map
