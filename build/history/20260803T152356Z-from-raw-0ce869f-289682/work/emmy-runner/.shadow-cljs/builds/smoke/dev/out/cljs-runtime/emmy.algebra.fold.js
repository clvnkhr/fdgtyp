goog.provide('emmy.algebra.fold');
/**
 * Fold-style function. The 2-arity merge operation adds the value `x` into the
 *   accumulating stating using [[emmy.generic/+]].
 * 
 *   - given 0 arguments, returns an accumulator of 0.0
 *   - given a single argument `acc`, acts as identity.
 */
emmy.algebra.fold.generic_sum_fold = (function emmy$algebra$fold$generic_sum_fold(var_args){
var G__28084 = arguments.length;
switch (G__28084) {
case 0:
return emmy.algebra.fold.generic_sum_fold.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return emmy.algebra.fold.generic_sum_fold.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.algebra.fold.generic_sum_fold.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.algebra.fold.generic_sum_fold.cljs$core$IFn$_invoke$arity$0 = (function (){
return 0.0;
}));

(emmy.algebra.fold.generic_sum_fold.cljs$core$IFn$_invoke$arity$1 = (function (acc){
return acc;
}));

(emmy.algebra.fold.generic_sum_fold.cljs$core$IFn$_invoke$arity$2 = (function (acc,x){
return emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(acc,x);
}));

(emmy.algebra.fold.generic_sum_fold.cljs$lang$maxFixedArity = 2);

/**
 * Given
 * 
 *   - a 0-argument fn `init` that returns some "empty" accumulating value
 * 
 *   - a 2-argument fn `fold` of `(accumulator, x) => accumulator` responsible for
 *  merging some value `x` into the ongoing accumulation
 * 
 *   - a 1-argument fn `present` from `accumulator => final-result`
 * 
 *   Returns a function with two arities. The first arity takes a sequence `xs` and
 *   returns the result of accumulating all elements in `xs` using the functions
 *   above, then `present`ing the result.
 * 
 *   The second arity takes a transformation function `f`, an inclusive lower bound
 *   `low` and an exclusive upper bound `high` and returns the result of
 *   accumulating `(map f (range low high))`.
 * 
 *   ## Other Arities
 * 
 *   Given a single argument `fold`, `fold` is passed as each of the 0, 1 and 2
 *   arity arguments.
 * 
 *   Given `fold` and `present`, `fold` is used for the 0 and 2 arity arguments,
 *   `present` for the 1-arity argument.
 */
emmy.algebra.fold.fold__GT_sum_fn = (function emmy$algebra$fold$fold__GT_sum_fn(var_args){
var G__28086 = arguments.length;
switch (G__28086) {
case 1:
return emmy.algebra.fold.fold__GT_sum_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.algebra.fold.fold__GT_sum_fn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return emmy.algebra.fold.fold__GT_sum_fn.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.algebra.fold.fold__GT_sum_fn.cljs$core$IFn$_invoke$arity$1 = (function (fold){
return emmy.algebra.fold.fold__GT_sum_fn.cljs$core$IFn$_invoke$arity$3(fold,fold,fold);
}));

(emmy.algebra.fold.fold__GT_sum_fn.cljs$core$IFn$_invoke$arity$2 = (function (fold,present){
return emmy.algebra.fold.fold__GT_sum_fn.cljs$core$IFn$_invoke$arity$3(fold,fold,present);
}));

(emmy.algebra.fold.fold__GT_sum_fn.cljs$core$IFn$_invoke$arity$3 = (function (init,fold,present){
return (function() {
var G__28222 = null;
var G__28222__1 = (function (xs){
var G__28087 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(fold,(init.cljs$core$IFn$_invoke$arity$0 ? init.cljs$core$IFn$_invoke$arity$0() : init.call(null)),xs);
return (present.cljs$core$IFn$_invoke$arity$1 ? present.cljs$core$IFn$_invoke$arity$1(G__28087) : present.call(null,G__28087));
});
var G__28222__3 = (function (f,low,high){
var xs = cljs.core.range.cljs$core$IFn$_invoke$arity$2(low,high);
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(f),fold,xs);
});
G__28222 = function(f,low,high){
switch(arguments.length){
case 1:
return G__28222__1.call(this,f);
case 3:
return G__28222__3.call(this,f,low,high);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28222.cljs$core$IFn$_invoke$arity$1 = G__28222__1;
G__28222.cljs$core$IFn$_invoke$arity$3 = G__28222__3;
return G__28222;
})()
}));

(emmy.algebra.fold.fold__GT_sum_fn.cljs$lang$maxFixedArity = 3);

/**
 * Given some value `const`, returns a fold that ignores all input and returns
 *   `const` for a call to any of its arities.
 */
emmy.algebra.fold.constant = (function emmy$algebra$fold$constant(const$){
return (function() { 
var G__28223__delegate = function (_){
return const$;
};
var G__28223 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__28224__i = 0, G__28224__a = new Array(arguments.length -  0);
while (G__28224__i < G__28224__a.length) {G__28224__a[G__28224__i] = arguments[G__28224__i + 0]; ++G__28224__i;}
  _ = new cljs.core.IndexedSeq(G__28224__a,0,null);
} 
return G__28223__delegate.call(this,_);};
G__28223.cljs$lang$maxFixedArity = 0;
G__28223.cljs$lang$applyTo = (function (arglist__28225){
var _ = cljs.core.seq(arglist__28225);
return G__28223__delegate(_);
});
G__28223.cljs$core$IFn$_invoke$arity$variadic = G__28223__delegate;
return G__28223;
})()
;
});
/**
 * Given some predicate `pred`, returns a fold that counts the number of items it
 *   encounters that return true when passed to `pred`, false otherwise.
 */
emmy.algebra.fold.count = (function emmy$algebra$fold$count(var_args){
var G__28099 = arguments.length;
switch (G__28099) {
case 0:
return emmy.algebra.fold.count.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return emmy.algebra.fold.count.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.algebra.fold.count.cljs$core$IFn$_invoke$arity$0 = (function (){
return emmy.algebra.fold.count.cljs$core$IFn$_invoke$arity$1((function (_){
return true;
}));
}));

(emmy.algebra.fold.count.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function() {
var G__28227 = null;
var G__28227__0 = (function (){
return (0);
});
var G__28227__1 = (function (acc){
return acc;
});
var G__28227__2 = (function (acc,x){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return (acc + (1));
} else {
return acc;
}
});
G__28227 = function(acc,x){
switch(arguments.length){
case 0:
return G__28227__0.call(this);
case 1:
return G__28227__1.call(this,acc);
case 2:
return G__28227__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28227.cljs$core$IFn$_invoke$arity$0 = G__28227__0;
G__28227.cljs$core$IFn$_invoke$arity$1 = G__28227__1;
G__28227.cljs$core$IFn$_invoke$arity$2 = G__28227__2;
return G__28227;
})()
}));

(emmy.algebra.fold.count.cljs$lang$maxFixedArity = 1);

/**
 * Fold that stores its minimum encountered value in its accumulator, and returns
 *   it when called on to present.
 * 
 *   Accumulation initializes with `nil`.
 */
emmy.algebra.fold.min = (function emmy$algebra$fold$min(var_args){
var G__28108 = arguments.length;
switch (G__28108) {
case 0:
return emmy.algebra.fold.min.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return emmy.algebra.fold.min.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.algebra.fold.min.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.algebra.fold.min.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(emmy.algebra.fold.min.cljs$core$IFn$_invoke$arity$1 = (function (acc){
return acc;
}));

(emmy.algebra.fold.min.cljs$core$IFn$_invoke$arity$2 = (function (acc,x){
if(cljs.core.truth_(acc)){
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(acc,x);
} else {
return x;
}
}));

(emmy.algebra.fold.min.cljs$lang$maxFixedArity = 2);

/**
 * Fold that stores its maximum encountered value in its accumulator, and returns
 *   it when called on to present.
 * 
 *   Accumulation initializes with `nil`.
 */
emmy.algebra.fold.max = (function emmy$algebra$fold$max(var_args){
var G__28118 = arguments.length;
switch (G__28118) {
case 0:
return emmy.algebra.fold.max.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return emmy.algebra.fold.max.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.algebra.fold.max.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.algebra.fold.max.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(emmy.algebra.fold.max.cljs$core$IFn$_invoke$arity$1 = (function (acc){
return acc;
}));

(emmy.algebra.fold.max.cljs$core$IFn$_invoke$arity$2 = (function (acc,x){
if(cljs.core.truth_(acc)){
return cljs.core.max.cljs$core$IFn$_invoke$arity$2(acc,x);
} else {
return x;
}
}));

(emmy.algebra.fold.max.cljs$lang$maxFixedArity = 2);

/**
 * Given some number of `folds`, returns a new fold with the following properties:
 * 
 *   - the accumulator is a vector of the accumulators of each input fold
 *   - each `x` is merged into each accumulator using the appropriate fold
 *   - `present` is called for every entry in the final vector
 * 
 *   Given a single `fold`, acts as identity.
 * 
 *   The no-argument call `(join)` is equivalent to `([[constant]] [])`.
 */
emmy.algebra.fold.join = (function emmy$algebra$fold$join(var_args){
var G__28127 = arguments.length;
switch (G__28127) {
case 0:
return emmy.algebra.fold.join.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return emmy.algebra.fold.join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___28234 = arguments.length;
var i__5898__auto___28235 = (0);
while(true){
if((i__5898__auto___28235 < len__5897__auto___28234)){
args_arr__5922__auto__.push((arguments[i__5898__auto___28235]));

var G__28236 = (i__5898__auto___28235 + (1));
i__5898__auto___28235 = G__28236;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((1) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((1)),(0),null)):null);
return emmy.algebra.fold.join.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5923__auto__);

}
});

(emmy.algebra.fold.join.cljs$core$IFn$_invoke$arity$0 = (function (){
return emmy.algebra.fold.constant(cljs.core.PersistentVector.EMPTY);
}));

(emmy.algebra.fold.join.cljs$core$IFn$_invoke$arity$1 = (function (fold){
return fold;
}));

(emmy.algebra.fold.join.cljs$core$IFn$_invoke$arity$variadic = (function (fold,folds){
var folds__$1 = cljs.core.cons(fold,folds);
return (function() {
var G__28237 = null;
var G__28237__0 = (function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (f){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}),folds__$1);
});
var G__28237__1 = (function (accs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (p1__28122_SHARP_,p2__28123_SHARP_){
return (p1__28122_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__28122_SHARP_.cljs$core$IFn$_invoke$arity$1(p2__28123_SHARP_) : p1__28122_SHARP_.call(null,p2__28123_SHARP_));
}),folds__$1,accs);
});
var G__28237__2 = (function (accs,x){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (f,acc){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(acc,x) : f.call(null,acc,x));
}),folds__$1,accs);
});
G__28237 = function(accs,x){
switch(arguments.length){
case 0:
return G__28237__0.call(this);
case 1:
return G__28237__1.call(this,accs);
case 2:
return G__28237__2.call(this,accs,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28237.cljs$core$IFn$_invoke$arity$0 = G__28237__0;
G__28237.cljs$core$IFn$_invoke$arity$1 = G__28237__1;
G__28237.cljs$core$IFn$_invoke$arity$2 = G__28237__2;
return G__28237;
})()
}));

/** @this {Function} */
(emmy.algebra.fold.join.cljs$lang$applyTo = (function (seq28125){
var G__28126 = cljs.core.first(seq28125);
var seq28125__$1 = cljs.core.next(seq28125);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28126,seq28125__$1);
}));

(emmy.algebra.fold.join.cljs$lang$maxFixedArity = (1));

/**
 * Given
 * 
 *   - a 0-argument fn `init` that returns some "empty" accumulating value
 * 
 *   - a 2-argument fn `fold` of `(accumulator, x) => accumulator` responsible for
 *  merging some value `x` into the ongoing accumulation
 * 
 *   - a 1-argument fn `present` from `accumulator => final-result`
 * 
 *   Returns a function with two arities. The first arity takes a sequence `xs` and
 *   returns a lazy sequence of all intermediate results of the summation. For
 *   example, given [0 1 2 3], the return sequence would be equivalent to:
 * 
 *   ```clj
 *   (def sum-fn (fold->sum-fn init fold present))
 * 
 *   [(sum-fn [0])
 * (sum-fn [0 1])
 * (sum-fn [0 1 2])
 * (sum-fn [0 1 2 3])]
 *   ```
 * 
 *   The second arity takes a transformation function `f`, an inclusive lower bound
 *   `low` and an exclusive upper bound `high` and returns a lazy sequence of all
 *   intermediate results of accumulating `(map f (range low high))`.
 * 
 *   ## Other Arities
 * 
 *   Given a single argument `fold`, `fold` is passed as each of the 0, 1 and 2
 *   arity arguments.
 * 
 *   Given `fold` and `present`, `fold` is used for the 0 and 2 arity arguments,
 *   `present` for the 1-arity argument.
 */
emmy.algebra.fold.fold__GT_scan_fn = (function emmy$algebra$fold$fold__GT_scan_fn(var_args){
var G__28129 = arguments.length;
switch (G__28129) {
case 1:
return emmy.algebra.fold.fold__GT_scan_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.algebra.fold.fold__GT_scan_fn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return emmy.algebra.fold.fold__GT_scan_fn.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.algebra.fold.fold__GT_scan_fn.cljs$core$IFn$_invoke$arity$1 = (function (fold){
return emmy.algebra.fold.fold__GT_scan_fn.cljs$core$IFn$_invoke$arity$3(fold,fold,fold);
}));

(emmy.algebra.fold.fold__GT_scan_fn.cljs$core$IFn$_invoke$arity$2 = (function (fold,present){
return emmy.algebra.fold.fold__GT_scan_fn.cljs$core$IFn$_invoke$arity$3(fold,fold,present);
}));

(emmy.algebra.fold.fold__GT_scan_fn.cljs$core$IFn$_invoke$arity$3 = (function (init,fold,present){
return (function() {
var emmy$algebra$fold$scan = null;
var emmy$algebra$fold$scan__1 = (function (xs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(present,cljs.core.rest(cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(fold,(init.cljs$core$IFn$_invoke$arity$0 ? init.cljs$core$IFn$_invoke$arity$0() : init.call(null)),xs)));
});
var emmy$algebra$fold$scan__3 = (function (f,low,high){
return emmy$algebra$fold$scan.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,cljs.core.range.cljs$core$IFn$_invoke$arity$2(low,high)));
});
emmy$algebra$fold$scan = function(f,low,high){
switch(arguments.length){
case 1:
return emmy$algebra$fold$scan__1.call(this,f);
case 3:
return emmy$algebra$fold$scan__3.call(this,f,low,high);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
emmy$algebra$fold$scan.cljs$core$IFn$_invoke$arity$1 = emmy$algebra$fold$scan__1;
emmy$algebra$fold$scan.cljs$core$IFn$_invoke$arity$3 = emmy$algebra$fold$scan__3;
return emmy$algebra$fold$scan;
})()
}));

(emmy.algebra.fold.fold__GT_scan_fn.cljs$lang$maxFixedArity = 3);

/**
 * Fold that tracks the summation of a sequence of floating point numbers, using
 *   the [Kahan summation
 *   algorithm](https://en.wikipedia.org/wiki/Kahan_summation_algorithm) for
 *   maintaining stability in the face of accumulating floating point errors.
 */
emmy.algebra.fold.kahan = (function emmy$algebra$fold$kahan(var_args){
var G__28131 = arguments.length;
switch (G__28131) {
case 0:
return emmy.algebra.fold.kahan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return emmy.algebra.fold.kahan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.algebra.fold.kahan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.algebra.fold.kahan.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null);
}));

(emmy.algebra.fold.kahan.cljs$core$IFn$_invoke$arity$1 = (function (p__28132){
var vec__28133 = p__28132;
var acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28133,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28133,(1),null);
return acc;
}));

(emmy.algebra.fold.kahan.cljs$core$IFn$_invoke$arity$2 = (function (p__28138,x){
var vec__28139 = p__28138;
var acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28139,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28139,(1),null);
var y = (x - c);
var t = (acc + y);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,((t - acc) - y)], null);
}));

(emmy.algebra.fold.kahan.cljs$lang$maxFixedArity = 2);

/**
 * Implements a fold that tracks the summation of a sequence of floating point
 *   numbers, using Neumaier's improvement to [[kahan]].
 * 
 *   This algorithm is more efficient than [[kahan]], handles a wider range of
 *   cases (adding in numbers larger than the current running sum, for example) and
 *   should be preferred.
 */
emmy.algebra.fold.kahan_babushka_neumaier = (function emmy$algebra$fold$kahan_babushka_neumaier(var_args){
var G__28143 = arguments.length;
switch (G__28143) {
case 0:
return emmy.algebra.fold.kahan_babushka_neumaier.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return emmy.algebra.fold.kahan_babushka_neumaier.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.algebra.fold.kahan_babushka_neumaier.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.algebra.fold.kahan_babushka_neumaier.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null);
}));

(emmy.algebra.fold.kahan_babushka_neumaier.cljs$core$IFn$_invoke$arity$1 = (function (acc){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,acc);
}));

(emmy.algebra.fold.kahan_babushka_neumaier.cljs$core$IFn$_invoke$arity$2 = (function (p__28146,x){
var vec__28148 = p__28146;
var acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28148,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28148,(1),null);
var acc_PLUS_x = (acc + x);
var delta = (((Math.abs(acc) >= Math.abs(x)))?((acc - acc_PLUS_x) + x):((x - acc_PLUS_x) + acc));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc_PLUS_x,(c + delta)], null);
}));

(emmy.algebra.fold.kahan_babushka_neumaier.cljs$lang$maxFixedArity = 2);

/**
 * Alias for [[kahan-babushka-neumaier]].
 */
emmy.algebra.fold.kbn = emmy.algebra.fold.kahan_babushka_neumaier;
/**
 * Implements a fold that tracks the summation of a sequence of floating point
 *   numbers, using a second-order variation of [[kahan-babushka-neumaier]].
 * 
 *   See [this Wikipedia
 *   page](https://en.wikipedia.org/wiki/Kahan_summation_algorithm#Further_enhancements)
 *   for more information.
 * 
 *   This algorithm was proposed by Klein in ['A Generalized Kahan-Babushka
 *   Summation
 *   Algorithm'](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.582.288&rep=rep1&type=pdf),
 *   along with the higher-order versions implemented by [[kbk-n]].
 */
emmy.algebra.fold.kahan_babushka_klein = (function emmy$algebra$fold$kahan_babushka_klein(var_args){
var G__28155 = arguments.length;
switch (G__28155) {
case 0:
return emmy.algebra.fold.kahan_babushka_klein.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return emmy.algebra.fold.kahan_babushka_klein.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.algebra.fold.kahan_babushka_klein.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.algebra.fold.kahan_babushka_klein.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,0.0], null);
}));

(emmy.algebra.fold.kahan_babushka_klein.cljs$core$IFn$_invoke$arity$1 = (function (acc){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,acc);
}));

(emmy.algebra.fold.kahan_babushka_klein.cljs$core$IFn$_invoke$arity$2 = (function (p__28158,x){
var vec__28159 = p__28158;
var acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28159,(0),null);
var cs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28159,(1),null);
var ccs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28159,(2),null);
var acc_PLUS_x = (acc + x);
var delta = (((Math.abs(acc) >= Math.abs(x)))?((acc - acc_PLUS_x) + x):((x - acc_PLUS_x) + acc));
var cs_PLUS_delta = (cs + delta);
var cc = (((Math.abs(cs) >= Math.abs(delta)))?((cs - cs_PLUS_delta) + delta):((delta - cs_PLUS_delta) + cs));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc_PLUS_x,cs_PLUS_delta,(ccs + cc)], null);
}));

(emmy.algebra.fold.kahan_babushka_klein.cljs$lang$maxFixedArity = 2);

/**
 * Takes symbolic variables for
 * 
 *   - `acc`, the accumulating term we're compensating for
 *   - `delta`, the shared symbol used for deltas
 * 
 *   and generates let-binding entries updating `acc` to `(+ acc delta)` and
 *   `delta` to the new compensation amount in `(+ acc delta)`.
 */
emmy.algebra.fold.klein_term = (function emmy$algebra$fold$klein_term(acc,delta){
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"sum__28166__auto__","sum__28166__auto__",-135231477,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","+","cljs.core/+",-342754435,null),null,(1),null)),(new cljs.core.List(null,acc,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,delta,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,delta,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("emmy.util.def","fork","emmy.util.def/fork",1565339133,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"clj","clj",-660495428),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core",">=","cljs.core/>=",350096541,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("java.lang.Math","abs","java.lang.Math/abs",1272698622,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(acc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("java.lang.Math","abs","java.lang.Math/abs",1272698622,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(delta,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"cljs","cljs",1492417629),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core",">=","cljs.core/>=",350096541,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".abs",".abs",1832478636,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Math","js/Math",2033291075,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,acc,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".abs",".abs",1832478636,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Math","js/Math",2033291075,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,delta,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","+","cljs.core/+",-342754435,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),(new cljs.core.List(null,acc,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"sum__28166__auto__","sum__28166__auto__",-135231477,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,delta,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","+","cljs.core/+",-342754435,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),(new cljs.core.List(null,delta,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"sum__28166__auto__","sum__28166__auto__",-135231477,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,acc,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,acc,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"sum__28166__auto__","sum__28166__auto__",-135231477,null),null,(1),null))], 0)))));
});
/**
 * Given some order `n`, generates the function body of a fold implementing `n`-th
 *   order Kahan-Babushka-Klein summation.
 * 
 *   See [[kbk-n]] for more detail.
 */
emmy.algebra.fold.kbk_n_body = (function emmy$algebra$fold$kbk_n_body(n){
var syms = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((n + (1)),cljs.core.gensym));
var prefix = cljs.core.pop(syms);
var final$ = cljs.core.peek(syms);
var delta = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n + (1)),0.0))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"accs__28194__auto__","accs__28194__auto__",1552573950,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",2025430439,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","+","cljs.core/+",-342754435,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"accs__28194__auto__","accs__28194__auto__",1552573950,null),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,syms,null,(1),null)),(new cljs.core.List(null,delta,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__28193_SHARP_){
return emmy.algebra.fold.klein_term(p1__28193_SHARP_,delta);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix], 0)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(prefix,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","+","cljs.core/+",-342754435,null),null,(1),null)),(new cljs.core.List(null,final$,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,delta,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))));
});
/**
 * Given some order `n`, returns a fold implementing `n`-th order
 *   Kahan-Babushka-Klein summation.
 * 
 *   Given `n` == 0, this is identical to a naive sum.
 *   Given `n` == 1, identical to [[kahan-babushka-neumaier]].
 *   Given `n` == 2, identical to [[kahan-babushka-klein]].
 * 
 *   `n` > 2 represent new compensated summation algorithms.
 */
emmy.algebra.fold.kbk_n = (function emmy$algebra$fold$kbk_n(_AMPERSAND_form,_AMPERSAND_env,n){
var _AMPERSAND_env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_env,new cljs.core.Keyword(null,"sci?","sci?",2029704845),true);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),emmy.algebra.fold.kbk_n_body(n))));
});

//# sourceMappingURL=emmy.algebra.fold.js.map
