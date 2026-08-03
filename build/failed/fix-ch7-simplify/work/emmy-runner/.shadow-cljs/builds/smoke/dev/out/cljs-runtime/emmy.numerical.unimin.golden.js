goog.provide('emmy.numerical.unimin.golden');
/**
 * $\phi$, the golden ratio.
 */
emmy.numerical.unimin.golden.phi = ((emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1((5)) + (1)) / (2));
/**
 * $1 \over \phi$. Multiply by this to scale some distance down to the
 *   larger-sized golden ratio piece.
 */
emmy.numerical.unimin.golden.inv_phi = ((emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1((5)) - (1)) / (2));
/**
 * $1 \over \phi^2$. Scales down twice, compared to [[inv-phi]].
 */
emmy.numerical.unimin.golden.inv_phi2 = ((1) - emmy.numerical.unimin.golden.inv_phi);
/**
 * Returns the point between `from` and `to` that cuts the region between the two
 *   into two sections in golden-ratioed proportion to each other.
 * 
 *   For example, depending on the ordering of `from` and `to`, `x` would be
 *   either:
 * 
 *   ```
 *   from------x1---to
 *   to---x2------from
 *   ```
 * 
 *   Such that `from->x1 / from->to == to->x2 / from->x1`.
 */
emmy.numerical.unimin.golden.golden_cut = (function emmy$numerical$unimin$golden$golden_cut(from,to){
return ((emmy.numerical.unimin.golden.inv_phi2 * from) + (emmy.numerical.unimin.golden.inv_phi * to));
});
/**
 * generate a new point by extending x away from `away-from`. The invariant is
 *   that `x` sits between the new point and `away-from` at the golden ratio
 *   point.
 */
emmy.numerical.unimin.golden.extend_pt = (function emmy$numerical$unimin$golden$extend_pt(x,away_from){
return (x + (emmy.numerical.unimin.golden.phi * (x - away_from)));
});
/**
 * Takes four pairs of test (x, f(x)) and narrows the interval down by choosing
 *   the minimum of `l` or `r` and bracketing around that.
 * 
 *   NOTE there's a guard internally against the items getting out of order; over
 *   many repeated evaluations, the points can get out of whack with the golden
 *   ratio. The slight guard is that we check internally that the interior points
 *   can never get past each other.
 */
emmy.numerical.unimin.golden.shrink_interval = (function emmy$numerical$unimin$golden$shrink_interval(f,p__49006,p__49007,p__49008,p__49009){
var vec__49010 = p__49006;
var xa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49010,(0),null);
var a = vec__49010;
var vec__49013 = p__49007;
var xl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49013,(0),null);
var fl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49013,(1),null);
var l = vec__49013;
var vec__49016 = p__49008;
var xr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49016,(0),null);
var fr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49016,(1),null);
var r = vec__49016;
var vec__49019 = p__49009;
var xb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49019,(0),null);
var b = vec__49019;
if((((xa < xl)) && ((((xl < xr)) && ((xr < xb)))))){
} else {
throw (new Error("Assert failed: (< xa xl xr xb)"));
}

var _PERCENT_ = (((fl < fr))?(function (){var new_l = emmy.numerical.unimin.golden.golden_cut(xr,xa);
if((new_l < xl)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_l,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(new_l) : f.call(null,new_l))], null),l,r], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,l,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_l,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(new_l) : f.call(null,new_l))], null),r], null);
}
})():(function (){var new_r = emmy.numerical.unimin.golden.golden_cut(xl,xb);
if((xr < new_r)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,r,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_r,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(new_r) : f.call(null,new_r))], null),b], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_r,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(new_r) : f.call(null,new_r))], null),r,b], null);
}
})());
if(cljs.core.truth_((function() { 
var G__49106__delegate = function (rest__48995_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._LT_,rest__48995_SHARP_);
};
var G__49106 = function (var_args){
var rest__48995_SHARP_ = null;
if (arguments.length > 0) {
var G__49107__i = 0, G__49107__a = new Array(arguments.length -  0);
while (G__49107__i < G__49107__a.length) {G__49107__a[G__49107__i] = arguments[G__49107__i + 0]; ++G__49107__i;}
  rest__48995_SHARP_ = new cljs.core.IndexedSeq(G__49107__a,0,null);
} 
return G__49106__delegate.call(this,rest__48995_SHARP_);};
G__49106.cljs$lang$maxFixedArity = 0;
G__49106.cljs$lang$applyTo = (function (arglist__49108){
var rest__48995_SHARP_ = cljs.core.seq(arglist__49108);
return G__49106__delegate(rest__48995_SHARP_);
});
G__49106.cljs$core$IFn$_invoke$arity$variadic = G__49106__delegate;
return G__49106;
})()
)){
} else {
throw (new Error("Assert failed: (fn* [& rest__48995#] (apply < rest__48995#))"));
}

return _PERCENT_;
});
/**
 * Default selection function for the best possible point. This function chooses
 *   the point out of (a, l, r, b) with the minimum function value.
 */
emmy.numerical.unimin.golden.best_of = (function emmy$numerical$unimin$golden$best_of(var_args){
var args__5903__auto__ = [];
var len__5897__auto___49109 = arguments.length;
var i__5898__auto___49110 = (0);
while(true){
if((i__5898__auto___49110 < len__5897__auto___49109)){
args__5903__auto__.push((arguments[i__5898__auto___49110]));

var G__49111 = (i__5898__auto___49110 + (1));
i__5898__auto___49110 = G__49111;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return emmy.numerical.unimin.golden.best_of.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(emmy.numerical.unimin.golden.best_of.cljs$core$IFn$_invoke$arity$variadic = (function (pairs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.min_key,cljs.core.second,pairs);
}));

(emmy.numerical.unimin.golden.best_of.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(emmy.numerical.unimin.golden.best_of.cljs$lang$applyTo = (function (seq49024){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49024));
}));

/**
 * Returns a function that returns true if the max interior value is within
 *   `epsilon` of the smallest bound, false otherwise.
 */
emmy.numerical.unimin.golden.fn_tolerance_fn = (function emmy$numerical$unimin$golden$fn_tolerance_fn(epsilon){
var close_QMARK_ = emmy.value.within(epsilon);
return (function (p__49026,p__49027,p__49028,p__49029,_){
var vec__49030 = p__49026;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49030,(0),null);
var fa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49030,(1),null);
var vec__49033 = p__49027;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49033,(0),null);
var fl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49033,(1),null);
var vec__49036 = p__49028;
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49036,(0),null);
var fr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49036,(1),null);
var vec__49039 = p__49029;
var ___$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49039,(0),null);
var fb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49039,(1),null);
return close_QMARK_(cljs.core.max.cljs$core$IFn$_invoke$arity$2(fa,fb),cljs.core.min.cljs$core$IFn$_invoke$arity$2(fl,fr));
});
});
/**
 * Returns a fn that returns true if the coordinates of the outer bounds are
 *   within `epsilon` absolute distance, false otherwise.
 */
emmy.numerical.unimin.golden.arg_tolerance_fn = (function emmy$numerical$unimin$golden$arg_tolerance_fn(epsilon){
var close_QMARK_ = emmy.value.within(epsilon);
return (function (p__49042,_,___$1,p__49043,___$2){
var vec__49044 = p__49042;
var xa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49044,(0),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49044,(1),null);
var vec__49047 = p__49043;
var xb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49047,(0),null);
var ___$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49047,(1),null);
return close_QMARK_(xa,xb);
});
});
/**
 * Returns a fn that returns true if the number of iterations has exceeded
 *   `max-count`, false otherwise. 
 */
emmy.numerical.unimin.golden.counter_fn = (function emmy$numerical$unimin$golden$counter_fn(max_count){
return (function (_,___$1,___$2,___$3,iterations){
return (max_count < iterations);
});
});
/**
 * Returns a fn that returns true if any of the following are true:
 * 
 *   - the max interior value is within `fn-tolerance` of the smallest bound,
 *   - `convergence?` (if supplied) returns true
 *   - the bounds are within `arg-tolerance` absolute distance,
 * 
 *   false otherwise.
 */
emmy.numerical.unimin.golden.convergence_fn = (function emmy$numerical$unimin$golden$convergence_fn(p__49051){
var map__49052 = p__49051;
var map__49052__$1 = cljs.core.__destructure_map(map__49052);
var converged_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49052__$1,new cljs.core.Keyword(null,"converged?","converged?",1779059976));
var fn_tolerance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49052__$1,new cljs.core.Keyword(null,"fn-tolerance","fn-tolerance",-1445606164));
var arg_tolerance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49052__$1,new cljs.core.Keyword(null,"arg-tolerance","arg-tolerance",1681183780));
return (function() { 
var G__49114__delegate = function (args){
return cljs.core.some((function (p1__49050_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(p1__49050_SHARP_,args);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__5162__auto__ = converged_QMARK_;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.constantly(false);
}
})(),emmy.numerical.unimin.golden.arg_tolerance_fn(arg_tolerance),emmy.numerical.unimin.golden.fn_tolerance_fn(fn_tolerance)], null));
};
var G__49114 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49115__i = 0, G__49115__a = new Array(arguments.length -  0);
while (G__49115__i < G__49115__a.length) {G__49115__a[G__49115__i] = arguments[G__49115__i + 0]; ++G__49115__i;}
  args = new cljs.core.IndexedSeq(G__49115__a,0,null);
} 
return G__49114__delegate.call(this,args);};
G__49114.cljs$lang$maxFixedArity = 0;
G__49114.cljs$lang$applyTo = (function (arglist__49116){
var args = cljs.core.seq(arglist__49116);
return G__49114__delegate(args);
});
G__49114.cljs$core$IFn$_invoke$arity$variadic = G__49114__delegate;
return G__49114;
})()
;
});
/**
 * Returns a fn that returns true if any of the following are true::
 * 
 *   - the supplied `fn-counter` atom contains a value > `maxfun`
 *   - the loop has exceeded `maxiter` iterations
 * 
 *   false otherwise.
 *   
 */
emmy.numerical.unimin.golden.stop_fn = (function emmy$numerical$unimin$golden$stop_fn(p__49056){
var map__49057 = p__49056;
var map__49057__$1 = cljs.core.__destructure_map(map__49057);
var maxiter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49057__$1,new cljs.core.Keyword(null,"maxiter","maxiter",-1867223754));
var maxfun = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49057__$1,new cljs.core.Keyword(null,"maxfun","maxfun",-50301814));
var fn_counter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49057__$1,new cljs.core.Keyword(null,"fn-counter","fn-counter",-1395388762));
return (function() { 
var G__49119__delegate = function (args){
return cljs.core.some((function (p1__49053_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(p1__49053_SHARP_,args);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function() { 
var G__49120__delegate = function (_){
return (cljs.core.deref(fn_counter) > maxfun);
};
var G__49120 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__49124__i = 0, G__49124__a = new Array(arguments.length -  0);
while (G__49124__i < G__49124__a.length) {G__49124__a[G__49124__i] = arguments[G__49124__i + 0]; ++G__49124__i;}
  _ = new cljs.core.IndexedSeq(G__49124__a,0,null);
} 
return G__49120__delegate.call(this,_);};
G__49120.cljs$lang$maxFixedArity = 0;
G__49120.cljs$lang$applyTo = (function (arglist__49125){
var _ = cljs.core.seq(arglist__49125);
return G__49120__delegate(_);
});
G__49120.cljs$core$IFn$_invoke$arity$variadic = G__49120__delegate;
return G__49120;
})()
,emmy.numerical.unimin.golden.counter_fn(maxiter)], null));
};
var G__49119 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49126__i = 0, G__49126__a = new Array(arguments.length -  0);
while (G__49126__i < G__49126__a.length) {G__49126__a[G__49126__i] = arguments[G__49126__i + 0]; ++G__49126__i;}
  args = new cljs.core.IndexedSeq(G__49126__a,0,null);
} 
return G__49119__delegate.call(this,args);};
G__49119.cljs$lang$maxFixedArity = 0;
G__49119.cljs$lang$applyTo = (function (arglist__49127){
var args = cljs.core.seq(arglist__49127);
return G__49119__delegate(args);
});
G__49119.cljs$core$IFn$_invoke$arity$variadic = G__49119__delegate;
return G__49119;
})()
;
});
/**
 * Golden Section search attempts to locate the minimum of the supplied function
 *   `f` by evaluating points located at golden-ratioed intervals between the two
 *   starting endpoints `a` and `b`. This method is slow, steady and reliable.
 * 
 *   Supports the following optional keyword arguments:
 * 
 *   `:converged?` is an optional predicate accepting five arguments:
 * 
 *   - `[a fa]`
 *   - `[l fl]`
 *   - `[r fr]`
 *   - `[b fb]`
 *   - `current-iteration`
 * 
 *   If the supplied `fn` returns true, it will signal convergence and the
 *   optimizer will return. Returning false will continue.
 * 
 *   `:choose` is called at the final step of optimization with all 4 points and
 *   their fn values (see the first four arguments to `:converged?`), and returns
 *   the final choice.
 * 
 *   `:callback` receives all 5 arguments on every iteration.
 * 
 *   `:maxiter` Maximum number of iterations allowed for the minimizer. Defaults to
 *   1000.
 * 
 *   `:maxfun` Maximum number of times the function can be evaluated before exiting.
 *   Defaults to 1000.
 * 
 *   `:fn-tolerance` check that the minimal value of any of the checked points is
 *   within the maximum of f(a) or f(b).
 * 
 *   `:arg-tolerance` check that `a` and `b` are within this supplied absolute
 *   distance.
 */
emmy.numerical.unimin.golden.golden_section_min = (function emmy$numerical$unimin$golden$golden_section_min(var_args){
var G__49061 = arguments.length;
switch (G__49061) {
case 3:
return emmy.numerical.unimin.golden.golden_section_min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return emmy.numerical.unimin.golden.golden_section_min.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.numerical.unimin.golden.golden_section_min.cljs$core$IFn$_invoke$arity$3 = (function (f,xa,xb){
return emmy.numerical.unimin.golden.golden_section_min.cljs$core$IFn$_invoke$arity$4(f,xa,xb,cljs.core.PersistentArrayMap.EMPTY);
}));

(emmy.numerical.unimin.golden.golden_section_min.cljs$core$IFn$_invoke$arity$4 = (function (f,xa,xb,p__49065){
var map__49067 = p__49065;
var map__49067__$1 = cljs.core.__destructure_map(map__49067);
var opts = map__49067__$1;
var choose = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49067__$1,new cljs.core.Keyword(null,"choose","choose",1680203305),emmy.numerical.unimin.golden.best_of);
var callback = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49067__$1,new cljs.core.Keyword(null,"callback","callback",-705136228),cljs.core.constantly(null));
var vec__49068 = emmy.util.counted.cljs$core$IFn$_invoke$arity$1(f);
var fn_counter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49068,(0),null);
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49068,(1),null);
var vec__49071 = ((cljs.core.vector_QMARK_(xa))?xa:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xa,(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(xa) : f__$1.call(null,xa))], null));
var xa__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49071,(0),null);
var a = vec__49071;
var vec__49074 = ((cljs.core.vector_QMARK_(xb))?xb:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xb,(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(xb) : f__$1.call(null,xb))], null));
var xb__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49074,(0),null);
var b = vec__49074;
var opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"maxfun","maxfun",-50301814),(1000),new cljs.core.Keyword(null,"maxiter","maxiter",-1867223754),(1000),new cljs.core.Keyword(null,"fn-tolerance","fn-tolerance",-1445606164),1.0E-8,new cljs.core.Keyword(null,"arg-tolerance","arg-tolerance",1681183780),1.0E-8,new cljs.core.Keyword(null,"fn-counter","fn-counter",-1395388762),fn_counter], null),opts], 0));
var xl = emmy.numerical.unimin.golden.golden_cut(xb__$1,xa__$1);
var xr = emmy.numerical.unimin.golden.golden_cut(xa__$1,xb__$1);
var convergence_QMARK_ = emmy.numerical.unimin.golden.convergence_fn(opts__$1);
var stop_QMARK_ = emmy.numerical.unimin.golden.stop_fn(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,new cljs.core.Keyword(null,"fn-counter","fn-counter",-1395388762),fn_counter));
var G__49080 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xl,(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(xl) : f__$1.call(null,xl))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xr,(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(xr) : f__$1.call(null,xr))], null),b], null);
var vec__49082 = G__49080;
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49082,(0),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49082,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49082,(2),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49082,(3),null);
var iteration = (0);
var G__49080__$1 = G__49080;
var iteration__$1 = iteration;
while(true){
var vec__49088 = G__49080__$1;
var a__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49088,(0),null);
var l__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49088,(1),null);
var r__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49088,(2),null);
var b__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49088,(3),null);
var iteration__$2 = iteration__$1;
(callback.cljs$core$IFn$_invoke$arity$5 ? callback.cljs$core$IFn$_invoke$arity$5(a__$2,l__$1,r__$1,b__$2,iteration__$2) : callback.call(null,a__$2,l__$1,r__$1,b__$2,iteration__$2));

var converged_QMARK_ = convergence_QMARK_(a__$2,l__$1,r__$1,b__$2,iteration__$2);
if(cljs.core.truth_((function (){var or__5162__auto__ = converged_QMARK_;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return stop_QMARK_(a__$2,l__$1,r__$1,b__$2,iteration__$2);
}
})())){
var vec__49091 = (choose.cljs$core$IFn$_invoke$arity$4 ? choose.cljs$core$IFn$_invoke$arity$4(a__$2,l__$1,r__$1,b__$2) : choose.call(null,a__$2,l__$1,r__$1,b__$2));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49091,(0),null);
var fx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49091,(1),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"result","result",1415092211),x,new cljs.core.Keyword(null,"value","value",305978217),fx,new cljs.core.Keyword(null,"converged?","converged?",1779059976),cljs.core.boolean$(converged_QMARK_),new cljs.core.Keyword(null,"iterations","iterations",-1402710890),iteration__$2,new cljs.core.Keyword(null,"fncalls","fncalls",-71376182),cljs.core.deref(fn_counter)], null);
} else {
var G__49167 = emmy.numerical.unimin.golden.shrink_interval(f__$1,a__$2,l__$1,r__$1,b__$2);
var G__49168 = (iteration__$2 + (1));
G__49080__$1 = G__49167;
iteration__$1 = G__49168;
continue;
}
break;
}
}));

(emmy.numerical.unimin.golden.golden_section_min.cljs$lang$maxFixedArity = 4);

/**
 * For convenience, we also provide the sister-procedure for finding
 *   the maximum of a unimodal function using the golden section method.
 * 
 *   Negate the function, minimize, negate the result.
 */
emmy.numerical.unimin.golden.golden_section_max = (function emmy$numerical$unimin$golden$golden_section_max(var_args){
var G__49095 = arguments.length;
switch (G__49095) {
case 3:
return emmy.numerical.unimin.golden.golden_section_max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return emmy.numerical.unimin.golden.golden_section_max.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.numerical.unimin.golden.golden_section_max.cljs$core$IFn$_invoke$arity$3 = (function (f,xa,xb){
return emmy.numerical.unimin.golden.golden_section_max.cljs$core$IFn$_invoke$arity$4(f,xa,xb,cljs.core.PersistentArrayMap.EMPTY);
}));

(emmy.numerical.unimin.golden.golden_section_max.cljs$core$IFn$_invoke$arity$4 = (function (f,xa,xb,opts){
var _f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(emmy.generic.negate,f);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(emmy.numerical.unimin.golden.golden_section_min.cljs$core$IFn$_invoke$arity$4(_f,xa,xb,opts),new cljs.core.Keyword(null,"value","value",305978217),emmy.generic.negate);
}));

(emmy.numerical.unimin.golden.golden_section_max.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=emmy.numerical.unimin.golden.js.map
