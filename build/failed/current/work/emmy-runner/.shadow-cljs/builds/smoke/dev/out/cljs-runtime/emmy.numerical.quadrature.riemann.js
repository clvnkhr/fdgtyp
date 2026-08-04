goog.provide('emmy.numerical.quadrature.riemann');
/**
 * Takes:
 * 
 *   - `area-fn`, a function of the left and right endpoints of some integration
 *   slice
 *   - definite integration bounds `a` and `b`
 * 
 *   and returns a function of `n`, the number of slices to use for an integration
 *   estimate.
 * 
 *   `area-fn` should return an estimate of the area under some curve between the
 *   `l` and `r` bounds it receives.
 */
emmy.numerical.quadrature.riemann.windowed_sum = (function emmy$numerical$quadrature$riemann$windowed_sum(area_fn,a,b){
return (function (n){
var width = ((b - a) / n);
var grid_points = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.range.cljs$core$IFn$_invoke$arity$3(a,b,width),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [b], null));
return emmy.util.aggregate.sum.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(area_fn,grid_points,cljs.core.rest(grid_points)));
});
});
emmy.numerical.quadrature.riemann.left_sum_STAR_ = (function emmy$numerical$quadrature$riemann$left_sum_STAR_(f,a,b){
return emmy.numerical.quadrature.riemann.windowed_sum((function (l,r){
return ((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(l) : f.call(null,l)) * (r - l));
}),a,b);
});
/**
 * Returns a function of `n`, some number of slices of the total integration
 *   range, that returns an estimate for the definite integral of $f$ over the
 *   range $[a, b)$ using a left Riemann sum.
 */
emmy.numerical.quadrature.riemann.left_sum = (function emmy$numerical$quadrature$riemann$left_sum(f,a,b){
var width = (b - a);
return (function (n){
var h = (width / n);
var fx = (function (i){
var G__55930 = (a + (i * h));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__55930) : f.call(null,G__55930));
});
return (h * emmy.util.aggregate.sum.cljs$core$IFn$_invoke$arity$3(fx,(0),n));
});
});
emmy.numerical.quadrature.riemann.right_sum_STAR_ = (function emmy$numerical$quadrature$riemann$right_sum_STAR_(f,a,b){
return emmy.numerical.quadrature.riemann.windowed_sum((function (l,r){
return ((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(r) : f.call(null,r)) * (r - l));
}),a,b);
});
/**
 * Returns a function of `n`, some number of slices of the total integration
 *   range, that returns an estimate for the definite integral of $f$ over the
 *   range $(a, b]$ using a right Riemann sum.
 */
emmy.numerical.quadrature.riemann.right_sum = (function emmy$numerical$quadrature$riemann$right_sum(f,a,b){
var width = (b - a);
return (function (n){
var h = (width / n);
var start = (a + h);
var fx = (function (i){
var G__55935 = (start + (i * h));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__55935) : f.call(null,G__55935));
});
return (h * emmy.util.aggregate.sum.cljs$core$IFn$_invoke$arity$3(fx,(0),n));
});
});
/**
 * Returns an estimate for the definite integral of $f$ over the range $[a, b]$
 *   using an upper Riemann sum.
 * 
 *   This function may or may not make an evaluation at the endpoints $a$ or $b$,
 *   depending on whether or not the function is increasing or decreasing at the
 *   endpoints.
 */
emmy.numerical.quadrature.riemann.upper_sum = (function emmy$numerical$quadrature$riemann$upper_sum(f,a,b){
return emmy.numerical.quadrature.riemann.windowed_sum((function (l,r){
return ((r - l) * cljs.core.max.cljs$core$IFn$_invoke$arity$2((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(l) : f.call(null,l)),(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(r) : f.call(null,r))));
}),a,b);
});
/**
 * Returns an estimate for the definite integral of $f$ over the range $[a, b]$
 *   using a lower Riemann sum.
 * 
 *   This function may or may not make an evaluation at the endpoints $a$ or $b$,
 *   depending on whether or not the function is increasing or decreasing at the
 *   endpoints.
 */
emmy.numerical.quadrature.riemann.lower_sum = (function emmy$numerical$quadrature$riemann$lower_sum(f,a,b){
return emmy.numerical.quadrature.riemann.windowed_sum((function (l,r){
return ((r - l) * cljs.core.min.cljs$core$IFn$_invoke$arity$2((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(l) : f.call(null,l)),(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(r) : f.call(null,r))));
}),a,b);
});
/**
 * NOTE - this is only appropriate for Richardson-accelerating sequences with t=2,
 *   p=q=1.
 * 
 *   This only applies to the Riemann sequences in this namespace!
 */
emmy.numerical.quadrature.riemann.accelerate = (function emmy$numerical$quadrature$riemann$accelerate(estimate_seq,p__55949){
var map__55950 = p__55949;
var map__55950__$1 = cljs.core.__destructure_map(map__55950);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55950__$1,new cljs.core.Keyword(null,"n","n",562130025),(1));
var accelerate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55950__$1,new cljs.core.Keyword(null,"accelerate?","accelerate?",-29657518));
if(cljs.core.truth_((function (){var and__5160__auto__ = accelerate_QMARK_;
if(cljs.core.truth_(and__5160__auto__)){
return typeof n === 'number';
} else {
return and__5160__auto__;
}
})())){
return emmy.polynomial.richardson.richardson_sequence.cljs$core$IFn$_invoke$arity$4(estimate_seq,(2),(1),(1));
} else {
return estimate_seq;
}
});
/**
 * Returns a function of `n`, some number of slices of the total integration
 *   range, that returns an estimate for the definite integral of $f$ over the
 *   range $(a, b)$ using midpoint estimates.
 */
emmy.numerical.quadrature.riemann.midpoint_sum = (function emmy$numerical$quadrature$riemann$midpoint_sum(f,a,b){
var width = (b - a);
return (function (n){
var h = (width / n);
var offset = (a + (h / 2.0));
var fx = (function (i){
var G__55961 = (offset + (i * h));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__55961) : f.call(null,G__55961));
});
return (h * emmy.util.aggregate.sum.cljs$core$IFn$_invoke$arity$3(fx,(0),n));
});
});
/**
 * Returns a function of:
 * 
 *   - `Sn`: a sum estimate for `n` partitions, and
 *   - `n`: the number of partitions
 * 
 *   And returns a new estimate for $S_{2n}$ by sampling the midpoints of each
 *   slice. This incremental update rule is valid for left and right Riemann sums,
 *   as well as the midpoint method.
 */
emmy.numerical.quadrature.riemann.Sn__GT_S2n = (function emmy$numerical$quadrature$riemann$Sn__GT_S2n(f,a,b){
var midpoints = emmy.numerical.quadrature.riemann.midpoint_sum(f,a,b);
return (function (Sn,n){
return ((Sn + midpoints(n)) / 2.0);
});
});
emmy.numerical.quadrature.riemann.left_sequence_STAR_ = (function emmy$numerical$quadrature$riemann$left_sequence_STAR_(f,a,b,n0){
var first_S = emmy.numerical.quadrature.riemann.left_sum(f,a,b)(n0);
var steps = emmy.util.stream.powers.cljs$core$IFn$_invoke$arity$2((2),n0);
return cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(emmy.numerical.quadrature.riemann.Sn__GT_S2n(f,a,b),first_S,steps);
});
/**
 * Accepts:
 * 
 *   - `S-fn`: a function of `n` that generates a numerical integral estimate from
 *   `n` slices of some region, and
 *   - `next-S-fn`: a function of (previous estimate, previous `n`) => new estimate
 *   - `factor`: the factor by which `n` increases for successive estimates
 *   - `n0`: the initial `n` to pass to `S-fn`
 * 
 *   The new estimate returned b `next-S-fn` should be of `factor * n` slices.
 */
emmy.numerical.quadrature.riemann.geometric_estimate_seq = (function emmy$numerical$quadrature$riemann$geometric_estimate_seq(S_fn,next_S_fn,factor,n0){
var first_S = (S_fn.cljs$core$IFn$_invoke$arity$1 ? S_fn.cljs$core$IFn$_invoke$arity$1(n0) : S_fn.call(null,n0));
var steps = emmy.util.stream.powers.cljs$core$IFn$_invoke$arity$2(factor,n0);
return cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(next_S_fn,first_S,steps);
});
/**
 * Returns a (lazy) sequence of successively refined estimates of the integral of
 *   `f` over the closed-open interval $a, b$ by taking left-Riemann sums with
 * 
 *   n0, 2n0, 4n0, ...
 * 
 *   slices.
 */
emmy.numerical.quadrature.riemann.left_sequence_STAR__STAR_ = (function emmy$numerical$quadrature$riemann$left_sequence_STAR__STAR_(var_args){
var G__55971 = arguments.length;
switch (G__55971) {
case 3:
return emmy.numerical.quadrature.riemann.left_sequence_STAR__STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return emmy.numerical.quadrature.riemann.left_sequence_STAR__STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.numerical.quadrature.riemann.left_sequence_STAR__STAR_.cljs$core$IFn$_invoke$arity$3 = (function (f,a,b){
return emmy.numerical.quadrature.riemann.left_sequence_STAR__STAR_.cljs$core$IFn$_invoke$arity$4(f,a,b,(1));
}));

(emmy.numerical.quadrature.riemann.left_sequence_STAR__STAR_.cljs$core$IFn$_invoke$arity$4 = (function (f,a,b,n0){
return emmy.numerical.quadrature.riemann.geometric_estimate_seq(emmy.numerical.quadrature.riemann.left_sum(f,a,b),emmy.numerical.quadrature.riemann.Sn__GT_S2n(f,a,b),(2),n0);
}));

(emmy.numerical.quadrature.riemann.left_sequence_STAR__STAR_.cljs$lang$maxFixedArity = 4);

/**
 * Accepts:
 * 
 *   - `S-fn`: a function of `n` that generates a numerical integral estimate from
 *   `n` slices of some region, and
 *   - `next-S-fn`: a function of (previous estimate, previous `n`) => new estimate
 *   - `factor`: the factor by which `next-S-fn` increases `n` in its returned estimate
 *   - `n-seq`: a monotonically increasing sequence of `n` slices to use.
 * 
 *   Returns a sequence of estimates of returned by either function for each `n` in
 *   `n-seq`. Internally decides whether or not to use `S-fn` or `next-S-fn` to
 *   generate successive estimates.
 */
emmy.numerical.quadrature.riemann.general_estimate_seq = (function emmy$numerical$quadrature$riemann$general_estimate_seq(S_fn,next_S_fn,factor,n_seq){
var f = (function (p__55974,n){
var vec__55975 = p__55974;
var cache = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55975,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55975,(1),null);
var Sn = (((cljs.core.rem(n,factor) === (0)))?(function (){var prev = cljs.core.quot(n,factor);
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,prev);
if(cljs.core.truth_(temp__5823__auto__)){
var S_prev = temp__5823__auto__;
return (next_S_fn.cljs$core$IFn$_invoke$arity$2 ? next_S_fn.cljs$core$IFn$_invoke$arity$2(S_prev,prev) : next_S_fn.call(null,S_prev,prev));
} else {
return (S_fn.cljs$core$IFn$_invoke$arity$1 ? S_fn.cljs$core$IFn$_invoke$arity$1(n) : S_fn.call(null,n));
}
})():(S_fn.cljs$core$IFn$_invoke$arity$1 ? S_fn.cljs$core$IFn$_invoke$arity$1(n) : S_fn.call(null,n)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,n,Sn),Sn], null);
});
return cljs.core.rest(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,null], null),n_seq)));
});
/**
 * Function that generalizes the ability to create successively-refined estimates
 *   of an integral, given:
 * 
 *   - `S-fn`: a function of `n` that generates a numerical integral estimate from
 *   `n` slices of some region, and
 *   - `next-S-fn`: a function of (previous estimate, previous `n`) => new estimate
 *   - `factor`: the factor by which `next-S-fn` increases `n` in its returned estimate
 *   - `n`: EITHER a number, or a monotonically increasing sequence of `n` slices to use.
 * 
 *   If `n` is a sequence, returns a (lazy) sequence of estimates generated for
 *   each entry in `n`.
 * 
 *   If `n` is a number, returns a lazy sequence of estimates generated for each
 *   entry in a geometrically increasing series of inputs $n, n(factor),
 *   n(factor^2), ....$
 * 
 *   Internally decides whether or not to use `S-fn` or `next-S-fn` to generate
 *   successive estimates.
 */
emmy.numerical.quadrature.riemann.incrementalize = (function emmy$numerical$quadrature$riemann$incrementalize(S_fn,next_S_fn,factor,n){
var f = ((typeof n === 'number')?emmy.numerical.quadrature.riemann.geometric_estimate_seq:emmy.numerical.quadrature.riemann.general_estimate_seq);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(S_fn,next_S_fn,factor,n) : f.call(null,S_fn,next_S_fn,factor,n));
});
/**
 * Returns a (lazy) sequence of successively refined estimates of the integral of
 *   `f` over the closed-open interval $a, b$ by taking left-Riemann sums.
 * 
 *   ### Optional Arguments
 * 
 *   `:n`: If `n` is a number, returns estimates with $n, 2n, 4n, ...$ slices,
 *   geometrically increasing by a factor of 2 with each estimate.
 * 
 *   If `n` is a sequence, the resulting sequence will hold an estimate for each
 *   integer number of slices in that sequence.
 * 
 *   `:accelerate?`: if supplied (and `n` is a number), attempts to accelerate
 *   convergence using Richardson extrapolation. If `n` is a sequence this option
 *   is ignored.
 */
emmy.numerical.quadrature.riemann.left_sequence = (function emmy$numerical$quadrature$riemann$left_sequence(var_args){
var G__55992 = arguments.length;
switch (G__55992) {
case 3:
return emmy.numerical.quadrature.riemann.left_sequence.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return emmy.numerical.quadrature.riemann.left_sequence.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.numerical.quadrature.riemann.left_sequence.cljs$core$IFn$_invoke$arity$3 = (function (f,a,b){
return emmy.numerical.quadrature.riemann.left_sequence.cljs$core$IFn$_invoke$arity$4(f,a,b,cljs.core.PersistentArrayMap.EMPTY);
}));

(emmy.numerical.quadrature.riemann.left_sequence.cljs$core$IFn$_invoke$arity$4 = (function (f,a,b,opts){
var S = emmy.numerical.quadrature.riemann.left_sum(f,a,b);
var next_S = emmy.numerical.quadrature.riemann.Sn__GT_S2n(f,a,b);
return emmy.numerical.quadrature.riemann.accelerate(emmy.numerical.quadrature.riemann.incrementalize(S,next_S,(2),new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$2(opts,(1))),opts);
}));

(emmy.numerical.quadrature.riemann.left_sequence.cljs$lang$maxFixedArity = 4);

/**
 * Returns a (lazy) sequence of successively refined estimates of the integral of
 *   `f` over the closed-open interval $a, b$ by taking right-Riemann sums.
 * 
 *   ### Optional Arguments
 * 
 *   `:n`: If `n` is a number, returns estimates with $n, 2n, 4n, ...$ slices,
 *   geometrically increasing by a factor of 2 with each estimate.
 * 
 *   If `n` is a sequence, the resulting sequence will hold an estimate for each
 *   integer number of slices in that sequence.
 * 
 *   `:accelerate?`: if supplied (and `n` is a number), attempts to accelerate
 *   convergence using Richardson extrapolation. If `n` is a sequence this option
 *   is ignored.
 */
emmy.numerical.quadrature.riemann.right_sequence = (function emmy$numerical$quadrature$riemann$right_sequence(var_args){
var G__56009 = arguments.length;
switch (G__56009) {
case 3:
return emmy.numerical.quadrature.riemann.right_sequence.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return emmy.numerical.quadrature.riemann.right_sequence.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.numerical.quadrature.riemann.right_sequence.cljs$core$IFn$_invoke$arity$3 = (function (f,a,b){
return emmy.numerical.quadrature.riemann.right_sequence.cljs$core$IFn$_invoke$arity$4(f,a,b,cljs.core.PersistentArrayMap.EMPTY);
}));

(emmy.numerical.quadrature.riemann.right_sequence.cljs$core$IFn$_invoke$arity$4 = (function (f,a,b,opts){
var S = emmy.numerical.quadrature.riemann.right_sum(f,a,b);
var next_S = emmy.numerical.quadrature.riemann.Sn__GT_S2n(f,a,b);
return emmy.numerical.quadrature.riemann.accelerate(emmy.numerical.quadrature.riemann.incrementalize(S,next_S,(2),new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$2(opts,(1))),opts);
}));

(emmy.numerical.quadrature.riemann.right_sequence.cljs$lang$maxFixedArity = 4);

/**
 * Returns a (lazy) sequence of successively refined estimates of the integral of
 *   `f` over the closed interval $(a, b)$ by taking lower-Riemann sums.
 * 
 *   ### Optional Arguments
 * 
 *   `:n`: If `n` is a number, returns estimates with $n, 2n, 4n, ...$ slices,
 *   geometrically increasing by a factor of 2 with each estimate.
 * 
 *   If `n` is a sequence, the resulting sequence will hold an estimate for each
 *   integer number of slices in that sequence.
 * 
 *   `:accelerate?`: if supplied (and `n` is a number), attempts to accelerate
 *   convergence using Richardson extrapolation. If `n` is a sequence this option
 *   is ignored.
 */
emmy.numerical.quadrature.riemann.lower_sequence = (function emmy$numerical$quadrature$riemann$lower_sequence(var_args){
var G__56021 = arguments.length;
switch (G__56021) {
case 3:
return emmy.numerical.quadrature.riemann.lower_sequence.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return emmy.numerical.quadrature.riemann.lower_sequence.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.numerical.quadrature.riemann.lower_sequence.cljs$core$IFn$_invoke$arity$3 = (function (f,a,b){
return emmy.numerical.quadrature.riemann.lower_sequence.cljs$core$IFn$_invoke$arity$4(f,a,b,cljs.core.PersistentArrayMap.EMPTY);
}));

(emmy.numerical.quadrature.riemann.lower_sequence.cljs$core$IFn$_invoke$arity$4 = (function (f,a,b,p__56039){
var map__56040 = p__56039;
var map__56040__$1 = cljs.core.__destructure_map(map__56040);
var opts = map__56040__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56040__$1,new cljs.core.Keyword(null,"n","n",562130025),(1));
var n_seq = ((typeof n === 'number')?emmy.util.stream.powers.cljs$core$IFn$_invoke$arity$2((2),n):n);
return emmy.numerical.quadrature.riemann.accelerate(cljs.core.map.cljs$core$IFn$_invoke$arity$2(emmy.numerical.quadrature.riemann.lower_sum(f,a,b),n_seq),opts);
}));

(emmy.numerical.quadrature.riemann.lower_sequence.cljs$lang$maxFixedArity = 4);

/**
 * Returns a (lazy) sequence of successively refined estimates of the integral of
 *   `f` over the closed interval $(a, b)$ by taking upper-Riemann sums.
 * 
 *   ### Optional Arguments
 * 
 *   `:n`: If `n` is a number, returns estimates with $n, 2n, 4n, ...$ slices,
 *   geometrically increasing by a factor of 2 with each estimate.
 * 
 *   If `n` is a sequence, the resulting sequence will hold an estimate for each
 *   integer number of slices in that sequence.
 * 
 *   `:accelerate?`: if supplied (and `n` is a number), attempts to accelerate
 *   convergence using Richardson extrapolation. If `n` is a sequence this option
 *   is ignored.
 */
emmy.numerical.quadrature.riemann.upper_sequence = (function emmy$numerical$quadrature$riemann$upper_sequence(var_args){
var G__56068 = arguments.length;
switch (G__56068) {
case 3:
return emmy.numerical.quadrature.riemann.upper_sequence.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return emmy.numerical.quadrature.riemann.upper_sequence.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.numerical.quadrature.riemann.upper_sequence.cljs$core$IFn$_invoke$arity$3 = (function (f,a,b){
return emmy.numerical.quadrature.riemann.upper_sequence.cljs$core$IFn$_invoke$arity$4(f,a,b,cljs.core.PersistentArrayMap.EMPTY);
}));

(emmy.numerical.quadrature.riemann.upper_sequence.cljs$core$IFn$_invoke$arity$4 = (function (f,a,b,p__56071){
var map__56072 = p__56071;
var map__56072__$1 = cljs.core.__destructure_map(map__56072);
var opts = map__56072__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56072__$1,new cljs.core.Keyword(null,"n","n",562130025),(1));
var n_seq = ((typeof n === 'number')?emmy.util.stream.powers.cljs$core$IFn$_invoke$arity$2((2),n):n);
return emmy.numerical.quadrature.riemann.accelerate(cljs.core.map.cljs$core$IFn$_invoke$arity$2(emmy.numerical.quadrature.riemann.upper_sum(f,a,b),n_seq),opts);
}));

(emmy.numerical.quadrature.riemann.upper_sequence.cljs$lang$maxFixedArity = 4);

/**
 * Returns an estimate of the integral of `f` across the closed-open interval $a,
 *   b$ using a left-Riemann sum with $1, 2, 4 ... 2^n$ windows for each estimate.
 * 
 *   Optionally accepts `opts`, a dict of optional arguments. All of these get
 *   passed on to `us/seq-limit` to configure convergence checking.
 * 
 *   See `left-sequence` for information on the optional args in `opts` that
 *   customize this function's behavior.
 */
emmy.numerical.quadrature.riemann.left_integral = emmy.numerical.quadrature.common.make_integrator_fn((function (f,a,b){
return ((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(a) : f.call(null,a)) * (b - a));
}),emmy.numerical.quadrature.riemann.left_sequence);
/**
 * Returns an estimate of the integral of `f` across the closed-open interval $a,
 *   b$ using a right-Riemann sum with $1, 2, 4 ... 2^n$ windows for each estimate.
 * 
 *   Optionally accepts `opts`, a dict of optional arguments. All of these get
 *   passed on to `us/seq-limit` to configure convergence checking.
 * 
 *   See `right-sequence` for information on the optional args in `opts` that
 *   customize this function's behavior.
 */
emmy.numerical.quadrature.riemann.right_integral = emmy.numerical.quadrature.common.make_integrator_fn((function (f,a,b){
return ((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(b) : f.call(null,b)) * (b - a));
}),emmy.numerical.quadrature.riemann.right_sequence);
/**
 * Returns an estimate of the integral of `f` across the closed-open interval $a,
 *   b$ using a lower-Riemann sum with $1, 2, 4 ... 2^n$ windows for each estimate.
 * 
 *   Optionally accepts `opts`, a dict of optional arguments. All of these get
 *   passed on to `us/seq-limit` to configure convergence checking.
 * 
 *   See `lower-sequence` for information on the optional args in `opts` that
 *   customize this function's behavior.
 */
emmy.numerical.quadrature.riemann.lower_integral = emmy.numerical.quadrature.common.make_integrator_fn((function (f,a,b){
return (cljs.core.min.cljs$core$IFn$_invoke$arity$2((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(a) : f.call(null,a)),(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(b) : f.call(null,b))) * (b - a));
}),emmy.numerical.quadrature.riemann.lower_sequence);
/**
 * Returns an estimate of the integral of `f` across the closed-open interval $a,
 *   b$ using an upper-Riemann sum with $1, 2, 4 ... 2^n$ windows for each estimate.
 * 
 *   Optionally accepts `opts`, a dict of optional arguments. All of these get
 *   passed on to `us/seq-limit` to configure convergence checking.
 * 
 *   See `upper-sequence` for information on the optional args in `opts` that
 *   customize this function's behavior.
 */
emmy.numerical.quadrature.riemann.upper_integral = emmy.numerical.quadrature.common.make_integrator_fn((function (f,a,b){
return (cljs.core.max.cljs$core$IFn$_invoke$arity$2((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(a) : f.call(null,a)),(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(b) : f.call(null,b))) * (b - a));
}),emmy.numerical.quadrature.riemann.upper_sequence);

//# sourceMappingURL=emmy.numerical.quadrature.riemann.js.map
