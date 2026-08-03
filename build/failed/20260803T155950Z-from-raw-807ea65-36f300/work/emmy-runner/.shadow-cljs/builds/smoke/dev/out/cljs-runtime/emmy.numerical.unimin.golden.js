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
emmy.numerical.unimin.golden.shrink_interval = (function emmy$numerical$unimin$golden$shrink_interval(f,p__48986,p__48987,p__48988,p__48989){
var vec__49014 = p__48986;
var xa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49014,(0),null);
var a = vec__49014;
var vec__49017 = p__48987;
var xl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49017,(0),null);
var fl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49017,(1),null);
var l = vec__49017;
var vec__49020 = p__48988;
var xr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49020,(0),null);
var fr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49020,(1),null);
var r = vec__49020;
var vec__49023 = p__48989;
var xb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49023,(0),null);
var b = vec__49023;
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
var G__49147__delegate = function (rest__48963_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._LT_,rest__48963_SHARP_);
};
var G__49147 = function (var_args){
var rest__48963_SHARP_ = null;
if (arguments.length > 0) {
var G__49148__i = 0, G__49148__a = new Array(arguments.length -  0);
while (G__49148__i < G__49148__a.length) {G__49148__a[G__49148__i] = arguments[G__49148__i + 0]; ++G__49148__i;}
  rest__48963_SHARP_ = new cljs.core.IndexedSeq(G__49148__a,0,null);
} 
return G__49147__delegate.call(this,rest__48963_SHARP_);};
G__49147.cljs$lang$maxFixedArity = 0;
G__49147.cljs$lang$applyTo = (function (arglist__49149){
var rest__48963_SHARP_ = cljs.core.seq(arglist__49149);
return G__49147__delegate(rest__48963_SHARP_);
});
G__49147.cljs$core$IFn$_invoke$arity$variadic = G__49147__delegate;
return G__49147;
})()
)){
} else {
throw (new Error("Assert failed: (fn* [& rest__48963#] (apply < rest__48963#))"));
}

return _PERCENT_;
});
/**
 * Default selection function for the best possible point. This function chooses
 *   the point out of (a, l, r, b) with the minimum function value.
 */
emmy.numerical.unimin.golden.best_of = (function emmy$numerical$unimin$golden$best_of(var_args){
var args__5903__auto__ = [];
var len__5897__auto___49151 = arguments.length;
var i__5898__auto___49152 = (0);
while(true){
if((i__5898__auto___49152 < len__5897__auto___49151)){
args__5903__auto__.push((arguments[i__5898__auto___49152]));

var G__49153 = (i__5898__auto___49152 + (1));
i__5898__auto___49152 = G__49153;
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
(emmy.numerical.unimin.golden.best_of.cljs$lang$applyTo = (function (seq49057){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49057));
}));

/**
 * Returns a function that returns true if the max interior value is within
 *   `epsilon` of the smallest bound, false otherwise.
 */
emmy.numerical.unimin.golden.fn_tolerance_fn = (function emmy$numerical$unimin$golden$fn_tolerance_fn(epsilon){
var close_QMARK_ = emmy.value.within(epsilon);
return (function (p__49076,p__49077,p__49078,p__49079,_){
var vec__49081 = p__49076;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49081,(0),null);
var fa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49081,(1),null);
var vec__49084 = p__49077;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49084,(0),null);
var fl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49084,(1),null);
var vec__49087 = p__49078;
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49087,(0),null);
var fr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49087,(1),null);
var vec__49090 = p__49079;
var ___$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49090,(0),null);
var fb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49090,(1),null);
return close_QMARK_(cljs.core.max.cljs$core$IFn$_invoke$arity$2(fa,fb),cljs.core.min.cljs$core$IFn$_invoke$arity$2(fl,fr));
});
});
/**
 * Returns a fn that returns true if the coordinates of the outer bounds are
 *   within `epsilon` absolute distance, false otherwise.
 */
emmy.numerical.unimin.golden.arg_tolerance_fn = (function emmy$numerical$unimin$golden$arg_tolerance_fn(epsilon){
var close_QMARK_ = emmy.value.within(epsilon);
return (function (p__49100,_,___$1,p__49101,___$2){
var vec__49102 = p__49100;
var xa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49102,(0),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49102,(1),null);
var vec__49105 = p__49101;
var xb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49105,(0),null);
var ___$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49105,(1),null);
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
emmy.numerical.unimin.golden.convergence_fn = (function emmy$numerical$unimin$golden$convergence_fn(p__49109){
var map__49110 = p__49109;
var map__49110__$1 = cljs.core.__destructure_map(map__49110);
var converged_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49110__$1,new cljs.core.Keyword(null,"converged?","converged?",1779059976));
var fn_tolerance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49110__$1,new cljs.core.Keyword(null,"fn-tolerance","fn-tolerance",-1445606164));
var arg_tolerance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49110__$1,new cljs.core.Keyword(null,"arg-tolerance","arg-tolerance",1681183780));
return (function() { 
var G__49154__delegate = function (args){
return cljs.core.some((function (p1__49108_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(p1__49108_SHARP_,args);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__5162__auto__ = converged_QMARK_;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.constantly(false);
}
})(),emmy.numerical.unimin.golden.arg_tolerance_fn(arg_tolerance),emmy.numerical.unimin.golden.fn_tolerance_fn(fn_tolerance)], null));
};
var G__49154 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49155__i = 0, G__49155__a = new Array(arguments.length -  0);
while (G__49155__i < G__49155__a.length) {G__49155__a[G__49155__i] = arguments[G__49155__i + 0]; ++G__49155__i;}
  args = new cljs.core.IndexedSeq(G__49155__a,0,null);
} 
return G__49154__delegate.call(this,args);};
G__49154.cljs$lang$maxFixedArity = 0;
G__49154.cljs$lang$applyTo = (function (arglist__49156){
var args = cljs.core.seq(arglist__49156);
return G__49154__delegate(args);
});
G__49154.cljs$core$IFn$_invoke$arity$variadic = G__49154__delegate;
return G__49154;
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
emmy.numerical.unimin.golden.stop_fn = (function emmy$numerical$unimin$golden$stop_fn(p__49112){
var map__49113 = p__49112;
var map__49113__$1 = cljs.core.__destructure_map(map__49113);
var maxiter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49113__$1,new cljs.core.Keyword(null,"maxiter","maxiter",-1867223754));
var maxfun = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49113__$1,new cljs.core.Keyword(null,"maxfun","maxfun",-50301814));
var fn_counter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49113__$1,new cljs.core.Keyword(null,"fn-counter","fn-counter",-1395388762));
return (function() { 
var G__49157__delegate = function (args){
return cljs.core.some((function (p1__49111_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(p1__49111_SHARP_,args);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function() { 
var G__49158__delegate = function (_){
return (cljs.core.deref(fn_counter) > maxfun);
};
var G__49158 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__49159__i = 0, G__49159__a = new Array(arguments.length -  0);
while (G__49159__i < G__49159__a.length) {G__49159__a[G__49159__i] = arguments[G__49159__i + 0]; ++G__49159__i;}
  _ = new cljs.core.IndexedSeq(G__49159__a,0,null);
} 
return G__49158__delegate.call(this,_);};
G__49158.cljs$lang$maxFixedArity = 0;
G__49158.cljs$lang$applyTo = (function (arglist__49160){
var _ = cljs.core.seq(arglist__49160);
return G__49158__delegate(_);
});
G__49158.cljs$core$IFn$_invoke$arity$variadic = G__49158__delegate;
return G__49158;
})()
,emmy.numerical.unimin.golden.counter_fn(maxiter)], null));
};
var G__49157 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49161__i = 0, G__49161__a = new Array(arguments.length -  0);
while (G__49161__i < G__49161__a.length) {G__49161__a[G__49161__i] = arguments[G__49161__i + 0]; ++G__49161__i;}
  args = new cljs.core.IndexedSeq(G__49161__a,0,null);
} 
return G__49157__delegate.call(this,args);};
G__49157.cljs$lang$maxFixedArity = 0;
G__49157.cljs$lang$applyTo = (function (arglist__49162){
var args = cljs.core.seq(arglist__49162);
return G__49157__delegate(args);
});
G__49157.cljs$core$IFn$_invoke$arity$variadic = G__49157__delegate;
return G__49157;
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
var G__49115 = arguments.length;
switch (G__49115) {
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

(emmy.numerical.unimin.golden.golden_section_min.cljs$core$IFn$_invoke$arity$4 = (function (f,xa,xb,p__49116){
var map__49117 = p__49116;
var map__49117__$1 = cljs.core.__destructure_map(map__49117);
var opts = map__49117__$1;
var choose = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49117__$1,new cljs.core.Keyword(null,"choose","choose",1680203305),emmy.numerical.unimin.golden.best_of);
var callback = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49117__$1,new cljs.core.Keyword(null,"callback","callback",-705136228),cljs.core.constantly(null));
var vec__49118 = emmy.util.counted.cljs$core$IFn$_invoke$arity$1(f);
var fn_counter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49118,(0),null);
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49118,(1),null);
var vec__49121 = ((cljs.core.vector_QMARK_(xa))?xa:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xa,(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(xa) : f__$1.call(null,xa))], null));
var xa__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49121,(0),null);
var a = vec__49121;
var vec__49124 = ((cljs.core.vector_QMARK_(xb))?xb:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xb,(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(xb) : f__$1.call(null,xb))], null));
var xb__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49124,(0),null);
var b = vec__49124;
var opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"maxfun","maxfun",-50301814),(1000),new cljs.core.Keyword(null,"maxiter","maxiter",-1867223754),(1000),new cljs.core.Keyword(null,"fn-tolerance","fn-tolerance",-1445606164),1.0E-8,new cljs.core.Keyword(null,"arg-tolerance","arg-tolerance",1681183780),1.0E-8,new cljs.core.Keyword(null,"fn-counter","fn-counter",-1395388762),fn_counter], null),opts], 0));
var xl = emmy.numerical.unimin.golden.golden_cut(xb__$1,xa__$1);
var xr = emmy.numerical.unimin.golden.golden_cut(xa__$1,xb__$1);
var convergence_QMARK_ = emmy.numerical.unimin.golden.convergence_fn(opts__$1);
var stop_QMARK_ = emmy.numerical.unimin.golden.stop_fn(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,new cljs.core.Keyword(null,"fn-counter","fn-counter",-1395388762),fn_counter));
var G__49130 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xl,(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(xl) : f__$1.call(null,xl))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xr,(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(xr) : f__$1.call(null,xr))], null),b], null);
var vec__49131 = G__49130;
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49131,(0),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49131,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49131,(2),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49131,(3),null);
var iteration = (0);
var G__49130__$1 = G__49130;
var iteration__$1 = iteration;
while(true){
var vec__49137 = G__49130__$1;
var a__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49137,(0),null);
var l__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49137,(1),null);
var r__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49137,(2),null);
var b__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49137,(3),null);
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
var vec__49140 = (choose.cljs$core$IFn$_invoke$arity$4 ? choose.cljs$core$IFn$_invoke$arity$4(a__$2,l__$1,r__$1,b__$2) : choose.call(null,a__$2,l__$1,r__$1,b__$2));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49140,(0),null);
var fx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49140,(1),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"result","result",1415092211),x,new cljs.core.Keyword(null,"value","value",305978217),fx,new cljs.core.Keyword(null,"converged?","converged?",1779059976),cljs.core.boolean$(converged_QMARK_),new cljs.core.Keyword(null,"iterations","iterations",-1402710890),iteration__$2,new cljs.core.Keyword(null,"fncalls","fncalls",-71376182),cljs.core.deref(fn_counter)], null);
} else {
var G__49165 = emmy.numerical.unimin.golden.shrink_interval(f__$1,a__$2,l__$1,r__$1,b__$2);
var G__49166 = (iteration__$2 + (1));
G__49130__$1 = G__49165;
iteration__$1 = G__49166;
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
var G__49144 = arguments.length;
switch (G__49144) {
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
