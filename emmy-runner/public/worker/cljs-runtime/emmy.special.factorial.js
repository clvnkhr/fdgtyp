import "./cljs_env.js";
import "./cljs.core.js";
import "./emmy.util.js";
import "./emmy.generic.js";
import "./emmy.numbers.js";
import "./emmy.util.def.js";
import "./emmy.value.js";
goog.provide('emmy.special.factorial');
/**
 * If `x` is a fixed-precision integer, returns a [[emmy.util/bigint]]
 *   version of `x`. Else, acts as identity.
 * 
 *   This is useful in cases where you may want to multiply `x` by other large
 *   numbers, but don't want to try and convert something that can't overflow,
 *   like a symbol, into `bigint`.
 */
emmy.special.factorial.__GT_bigint = (function emmy$special$factorial$__GT_bigint(x){
if(cljs.core.int_QMARK_(x)){
return emmy.util.bigint(x);
} else {
return x;
}
});
/**
 * Returns the factorial of `n`, i.e., the product of 1 to `n` (inclusive).
 * 
 *   [[factorial]] will return a platform-specific [[emmy.util/bigint]] given
 *   some `n` that causes integer overflow.
 */
emmy.special.factorial.factorial = (function emmy$special$factorial$factorial(n){
if(emmy.value.native_integral_QMARK_(n)){
} else {
throw (new Error("Assert failed: (v/native-integral? n)"));
}

if((n >= (0))){
} else {
throw (new Error("Assert failed: (>= n 0)"));
}

var elems = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(n + (1)));
if((n < (19))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,elems);
} else {
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(emmy.util.bigint),emmy.generic._STAR_,elems);
}
});
if((typeof emmy !== 'undefined') && (typeof emmy.special !== 'undefined') && (typeof emmy.special.factorial !== 'undefined') && (typeof emmy.special.factorial.falling_factorial !== 'undefined')){
} else {
/**
 * generic falling-factorial.
 * 
 * Returns the [falling
 *   factorial](https://en.wikipedia.org/wiki/Falling_and_rising_factorials), of
 *   `a` to the `b`, defined as the polynomial
 * 
 *   $$(a)_b = a^{\underline{b}} = a(a - 1)(a - 2) \cdots (a - b - 1)$$
 * 
 *   Given a negative `b`, `([[falling-factorial]] a b)` is equivalent
 *   to `(invert ([[rising-factorial]] (inc a) (- b)))`, or `##Inf` if the
 *   denominator evaluates to 0.
 * 
 *   The coefficients that appear in the expansions of [[falling-factorial]] called
 *   with a symbolic first argument and positive integral second argument are the
 *   Stirling numbers of the first kind (see [[stirling-first-kind]]).
 */
emmy.special.factorial.falling_factorial = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__67667 = cljs.core.get_global_hierarchy;
return (fexpr__67667.cljs$core$IFn$_invoke$arity$0 ? fexpr__67667.cljs$core$IFn$_invoke$arity$0() : fexpr__67667.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.special.factorial","falling-factorial"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.special.factorial.falling_factorial.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__33671__auto__){
var fexpr__67668 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"falling-factorial","falling-factorial",1649395235,null)], null);
return (fexpr__67668.cljs$core$IFn$_invoke$arity$1 ? fexpr__67668.cljs$core$IFn$_invoke$arity$1(k__33671__auto__) : fexpr__67668.call(null,k__33671__auto__));
}));
/**
 * Alias for [[falling-factorial]].
 */
emmy.special.factorial.factorial_power = emmy.special.factorial.falling_factorial;
emmy.special.factorial.falling_factorial.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x,n){
if(emmy.value.native_integral_QMARK_(n)){
} else {
throw (new Error("Assert failed: (v/native-integral? n)"));
}

if((n === (0))){
return (1);
} else {
if((n < (0))){
var denom = (function (){var G__67672 = emmy.generic.add.cljs$core$IFn$_invoke$arity$2(x,(1));
var G__67673 = emmy.generic._.cljs$core$IFn$_invoke$arity$1(n);
return (emmy.special.factorial.rising_factorial.cljs$core$IFn$_invoke$arity$2 ? emmy.special.factorial.rising_factorial.cljs$core$IFn$_invoke$arity$2(G__67672,G__67673) : emmy.special.factorial.rising_factorial.call(null,G__67672,G__67673));
})();
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(denom))){
return Infinity;
} else {
return emmy.generic.invert.cljs$core$IFn$_invoke$arity$1(denom);
}
} else {
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__67671_SHARP_){
return emmy.generic.add.cljs$core$IFn$_invoke$arity$2(x,emmy.generic._.cljs$core$IFn$_invoke$arity$1(p1__67671_SHARP_));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(emmy.special.factorial.__GT_bigint)),emmy.generic._STAR_,cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));

}
}
}));
emmy.special.factorial.falling_factorial.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","native-integral","emmy.value/native-integral",-1286161061),new cljs.core.Keyword("emmy.value","native-integral","emmy.value/native-integral",-1286161061)], null),(function (x,n){
if((n === (0))){
return (1);
} else {
if((n < (0))){
var denom = (function (){var G__67676 = (x + (1));
var G__67677 = (- n);
return (emmy.special.factorial.rising_factorial.cljs$core$IFn$_invoke$arity$2 ? emmy.special.factorial.rising_factorial.cljs$core$IFn$_invoke$arity$2(G__67676,G__67677) : emmy.special.factorial.rising_factorial.call(null,G__67676,G__67677));
})();
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(denom))){
return Infinity;
} else {
return emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),denom);
}
} else {
var elems = cljs.core.range.cljs$core$IFn$_invoke$arity$3(x,(x - n),(-1));
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(emmy.util.bigint),emmy.generic._STAR_,elems);

}
}
}));
if((typeof emmy !== 'undefined') && (typeof emmy.special !== 'undefined') && (typeof emmy.special.factorial !== 'undefined') && (typeof emmy.special.factorial.rising_factorial !== 'undefined')){
} else {
/**
 * generic rising-factorial.
 * 
 * Returns the [rising
 *   factorial](https://en.wikipedia.org/wiki/Falling_and_rising_factorials), of
 *   `a` to the `b`, defined as the polynomial
 * 
 *   $$(a)^b = a^{\overline{b}} = a(a + 1)(a + 2) \cdots (a + b - 1)$$
 * 
 *   Given a negative `b`, `([[rising-factorial]] a b)` is equivalent
 *   to `(invert ([[falling-factorial]] (dec a) (- b)))`, or `##Inf` if the
 *   denominator evaluates to 0.
 */
emmy.special.factorial.rising_factorial = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__67684 = cljs.core.get_global_hierarchy;
return (fexpr__67684.cljs$core$IFn$_invoke$arity$0 ? fexpr__67684.cljs$core$IFn$_invoke$arity$0() : fexpr__67684.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("emmy.special.factorial","rising-factorial"),emmy.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

emmy.special.factorial.rising_factorial.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__33671__auto__){
var fexpr__67685 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"rising-factorial","rising-factorial",-1445656103,null)], null);
return (fexpr__67685.cljs$core$IFn$_invoke$arity$1 ? fexpr__67685.cljs$core$IFn$_invoke$arity$1(k__33671__auto__) : fexpr__67685.call(null,k__33671__auto__));
}));
/**
 * Alias for [[rising-factorial]].
 */
emmy.special.factorial.pochhammer = emmy.special.factorial.rising_factorial;
emmy.special.factorial.rising_factorial.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x,n){
if(emmy.value.native_integral_QMARK_(n)){
} else {
throw (new Error("Assert failed: (v/native-integral? n)"));
}

if((n === (0))){
return (1);
} else {
if((n < (0))){
var denom = emmy.special.factorial.falling_factorial.cljs$core$IFn$_invoke$arity$2(emmy.generic.sub.cljs$core$IFn$_invoke$arity$2(x,(1)),emmy.generic._.cljs$core$IFn$_invoke$arity$1(n));
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(denom))){
return Infinity;
} else {
return emmy.generic.invert.cljs$core$IFn$_invoke$arity$1(denom);
}
} else {
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__67687_SHARP_){
return emmy.generic.add.cljs$core$IFn$_invoke$arity$2(x,p1__67687_SHARP_);
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(emmy.special.factorial.__GT_bigint)),emmy.generic._STAR_,cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));

}
}
}));
emmy.special.factorial.rising_factorial.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","native-integral","emmy.value/native-integral",-1286161061),new cljs.core.Keyword("emmy.value","native-integral","emmy.value/native-integral",-1286161061)], null),(function (x,n){
if((n === (0))){
return (1);
} else {
if((n < (0))){
var denom = emmy.special.factorial.falling_factorial.cljs$core$IFn$_invoke$arity$2((x - (1)),(- n));
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(denom))){
return Infinity;
} else {
return emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),denom);
}
} else {
var elems = cljs.core.range.cljs$core$IFn$_invoke$arity$2(x,(x + n));
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(emmy.util.bigint),emmy.generic._STAR_,elems);

}
}
}));
/**
 * Returns the product of the positive integers up to `n` that are congruent
 *   to `(mod n k)`.
 * 
 *   When `k` equals 1, equivalent to `([[factorial]] n)`.
 * 
 *   See the [Wikipedia page on generalizations
 *   of [[double-factorial]]](https://en.wikipedia.org/wiki/Double_factorial#Generalizations)
 *   for more detail.
 * 
 *   If you need to extend [[multi-factorial]] to negative `n` or `k`, that page
 *   has suggestions for generalization.
 */
emmy.special.factorial.multi_factorial = (function emmy$special$factorial$multi_factorial(n,k){
if(emmy.value.native_integral_QMARK_(n)){
} else {
throw (new Error("Assert failed: (v/native-integral? n)"));
}

if(emmy.value.native_integral_QMARK_(k)){
} else {
throw (new Error("Assert failed: (v/native-integral? k)"));
}

if((n >= (0))){
} else {
throw (new Error("Assert failed: (>= n 0)"));
}

if((k > (0))){
} else {
throw (new Error("Assert failed: (> k 0)"));
}

var elems = cljs.core.range.cljs$core$IFn$_invoke$arity$3(n,(0),(- k));
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(emmy.util.bigint),emmy.generic._STAR_,elems);
});
/**
 * Returns the product of all integers from 1 up to `n` that have the same
 *   parity (odd or even) as `n`.
 * 
 *   `([[double-factorial]] 0)` is defined as an empty product and equal to 1.
 * 
 *   [[double-factorial]] with argument `n` is equivalent to `([[multi-factorial]]
 *   n 2)`, but slightly more general in that it can handle negative values of
 *   `n`.
 * 
 *   If `n` is negative and even, returns `##Inf`.
 * 
 *   If `n` is negative and odd, returns `(/ (double-factorial (+ n 2)) (+ n 2))`.
 * 
 *   For justification, see the [Wikipedia page on the extension of double
 *   factorial to negative
 *   arguments](https://en.wikipedia.org/wiki/Double_factorial#Negative_arguments).
 */
emmy.special.factorial.double_factorial = (function emmy$special$factorial$double_factorial(n){
if(emmy.value.native_integral_QMARK_(n)){
} else {
throw (new Error("Assert failed: (v/native-integral? n)"));
}

if((n === (0))){
return (1);
} else {
if((n > (0))){
return emmy.special.factorial.multi_factorial(n,(2));
} else {
if(cljs.core.even_QMARK_(n)){
return Infinity;
} else {
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2((function (){var G__67710 = (n + (2));
return (emmy.special.factorial.double_factorial.cljs$core$IFn$_invoke$arity$1 ? emmy.special.factorial.double_factorial.cljs$core$IFn$_invoke$arity$1(G__67710) : emmy.special.factorial.double_factorial.call(null,G__67710));
})(),(n + (2)));

}
}
}
});
/**
 * Returns the number of permutations of `n` objects in which no object appears in
 *   its original position. (Each of these permutations is called
 *   a ['derangement'](https://en.wikipedia.org/wiki/Derangement) of the set.)
 * 
 *   ## References
 * 
 *   - [Subfactorial page at Wolfram Mathworld](https://mathworld.wolfram.com/Subfactorial.html)
 *   - John Cook, [Variations on Factorial](https://www.johndcook.com/blog/2010/09/21/variations-on-factorial/)
 *   - John Cook, [Subfactorial](https://www.johndcook.com/blog/2010/04/06/subfactorial/)
 *   - ['Derangement' on Wikipedia](https://en.wikipedia.org/wiki/Derangement)
 */
emmy.special.factorial.subfactorial = (function emmy$special$factorial$subfactorial(n){
if((n === (0))){
return (1);
} else {
var nf_div_e = emmy.generic.div.cljs$core$IFn$_invoke$arity$2(emmy.special.factorial.factorial(n),Math.E);
return emmy.generic.floor.cljs$core$IFn$_invoke$arity$1(emmy.generic.add.cljs$core$IFn$_invoke$arity$2(0.5,nf_div_e));
}
});
var mul_67769 = emmy.generic._STAR_;
var div_67770 = emmy.generic._SLASH_;
/**
 * Returns the [binomial
 *   coefficient](https://en.wikipedia.org/wiki/Binomial_coefficient), i.e., the
 *   coefficient of the $x^k$ term in the polynomial expansion of the binomial
 *   power $(1 + x)^n$.
 * 
 *   This quantity is sometimes pronounced "n choose k".
 * 
 *   For negative `n` or `k`, [[binomial-coefficient]] matches the behavior
 *   provided by Mathematica, described at [this
 *   page](https://mathworld.wolfram.com/BinomialCoefficient.html). Given negative
 *   `n`, returns
 * 
 *   ```clj
 *   ;; for k >= 0
 *   (* (expt -1 k)
 *   (binomial-coefficient (+ (- n) k -1) k))
 * 
 *   ;; for k >= 0
 *   (* (expt -1 (- n k))
 *   (binomial-coefficient (+ (- k) -1) (- n k)))
 * 
 *   ;; otherwise:
 *   0
 *   ```
 */
emmy.special.factorial.binomial_coefficient = (function emmy$special$factorial$binomial_coefficient(n,k){
if(emmy.value.native_integral_QMARK_(n)){
} else {
throw (new Error("Assert failed: (v/native-integral? n)"));
}

if(emmy.value.native_integral_QMARK_(k)){
} else {
throw (new Error("Assert failed: (v/native-integral? k)"));
}

if((k === (0))){
return (1);
} else {
if((n < (0))){
if((k > (0))){
var G__67711 = ((cljs.core.even_QMARK_(k))?(1):(-1));
var G__67712 = (function (){var G__67713 = (((- n) + k) + (-1));
var G__67714 = k;
return (emmy.special.factorial.binomial_coefficient.cljs$core$IFn$_invoke$arity$2 ? emmy.special.factorial.binomial_coefficient.cljs$core$IFn$_invoke$arity$2(G__67713,G__67714) : emmy.special.factorial.binomial_coefficient.call(null,G__67713,G__67714));
})();
return (mul_67769.cljs$core$IFn$_invoke$arity$2 ? mul_67769.cljs$core$IFn$_invoke$arity$2(G__67711,G__67712) : mul_67769.call(null,G__67711,G__67712));
} else {
if((k <= n)){
var n_k = (n - k);
var G__67715 = ((cljs.core.even_QMARK_(n_k))?(1):(-1));
var G__67716 = (function (){var G__67717 = ((- k) - (1));
var G__67718 = n_k;
return (emmy.special.factorial.binomial_coefficient.cljs$core$IFn$_invoke$arity$2 ? emmy.special.factorial.binomial_coefficient.cljs$core$IFn$_invoke$arity$2(G__67717,G__67718) : emmy.special.factorial.binomial_coefficient.call(null,G__67717,G__67718));
})();
return (mul_67769.cljs$core$IFn$_invoke$arity$2 ? mul_67769.cljs$core$IFn$_invoke$arity$2(G__67715,G__67716) : mul_67769.call(null,G__67715,G__67716));
} else {
return (0);

}
}
} else {
if((k < (0))){
return (0);
} else {
if((k > n)){
return (0);
} else {
var k__$1 = cljs.core.min.cljs$core$IFn$_invoke$arity$2(k,(n - k));
var G__67720 = emmy.special.factorial.falling_factorial.cljs$core$IFn$_invoke$arity$2(n,k__$1);
var G__67721 = emmy.special.factorial.factorial(k__$1);
return (div_67770.cljs$core$IFn$_invoke$arity$2 ? div_67770.cljs$core$IFn$_invoke$arity$2(G__67720,G__67721) : div_67770.call(null,G__67720,G__67721));

}
}
}
}
});
var add_67772 = emmy.generic._PLUS_;
var mul_67773 = emmy.generic._STAR_;
/**
 * Given `n` and `k`, returns the number of permutations of `n` elements which
 *   contain exactly `k` [permutation
 *   cycles](https://mathworld.wolfram.com/PermutationCycle.html). This is called
 *   the [Stirling number s(n, k) of the first
 *   kind](https://en.wikipedia.org/wiki/Stirling_numbers_of_the_first_kind).
 * 
 *   By default, returns the [signed Stirling number of the first
 *   kind](https://en.wikipedia.org/wiki/Stirling_numbers_of_the_first_kind#Signs).
 *   Pass the `:unsigned? true` keyword option to retrieve the signed Stirling
 *   number. (Or take the absolute value of the result...)
 * 
 *   ```clj
 *   (stirling-first-kind 13 2)
 *   ;;=> -1486442880
 * 
 *   (stirling-first-kind 13 2 :unsigned? true)
 *   ;;=> 1486442880
 *   ```
 */
emmy.special.factorial.stirling_first_kind = (function emmy$special$factorial$stirling_first_kind(var_args){
var args__5903__auto__ = [];
var len__5897__auto___67774 = arguments.length;
var i__5898__auto___67775 = (0);
while(true){
if((i__5898__auto___67775 < len__5897__auto___67774)){
args__5903__auto__.push((arguments[i__5898__auto___67775]));

var G__67776 = (i__5898__auto___67775 + (1));
i__5898__auto___67775 = G__67776;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return emmy.special.factorial.stirling_first_kind.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(emmy.special.factorial.stirling_first_kind.cljs$core$IFn$_invoke$arity$variadic = (function (n,k,p__67729){
var map__67730 = p__67729;
var map__67730__$1 = cljs.core.__destructure_map(map__67730);
var unsigned_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67730__$1,new cljs.core.Keyword(null,"unsigned?","unsigned?",-502764154));
if(emmy.value.native_integral_QMARK_(n)){
} else {
throw (new Error("Assert failed: (v/native-integral? n)"));
}

if(emmy.value.native_integral_QMARK_(k)){
} else {
throw (new Error("Assert failed: (v/native-integral? k)"));
}

if(((0) <= k)){
} else {
throw (new Error("Assert failed: (<= 0 k)"));
}

if(((0) <= n)){
} else {
throw (new Error("Assert failed: (<= 0 n)"));
}

var rec = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var rec_STAR_ = (function (n__$1,k__$1){
if((n__$1 === (0))){
if((k__$1 === (0))){
return (1);
} else {
return (0);
}
} else {
var n_1 = (n__$1 - (1));
var factor = (cljs.core.truth_(unsigned_QMARK_)?n_1:(- n_1));
if((factor === (0))){
var G__67735 = n_1;
var G__67736 = (k__$1 - (1));
var fexpr__67734 = cljs.core.deref(rec);
return (fexpr__67734.cljs$core$IFn$_invoke$arity$2 ? fexpr__67734.cljs$core$IFn$_invoke$arity$2(G__67735,G__67736) : fexpr__67734.call(null,G__67735,G__67736));
} else {
var G__67737 = (function (){var G__67740 = n_1;
var G__67741 = (k__$1 - (1));
var fexpr__67739 = cljs.core.deref(rec);
return (fexpr__67739.cljs$core$IFn$_invoke$arity$2 ? fexpr__67739.cljs$core$IFn$_invoke$arity$2(G__67740,G__67741) : fexpr__67739.call(null,G__67740,G__67741));
})();
var G__67738 = (function (){var G__67742 = factor;
var G__67743 = emmy.util.bigint((function (){var fexpr__67744 = cljs.core.deref(rec);
return (fexpr__67744.cljs$core$IFn$_invoke$arity$2 ? fexpr__67744.cljs$core$IFn$_invoke$arity$2(n_1,k__$1) : fexpr__67744.call(null,n_1,k__$1));
})());
return (mul_67773.cljs$core$IFn$_invoke$arity$2 ? mul_67773.cljs$core$IFn$_invoke$arity$2(G__67742,G__67743) : mul_67773.call(null,G__67742,G__67743));
})();
return (add_67772.cljs$core$IFn$_invoke$arity$2 ? add_67772.cljs$core$IFn$_invoke$arity$2(G__67737,G__67738) : add_67772.call(null,G__67737,G__67738));
}
}
});
cljs.core.reset_BANG_(rec,cljs.core.memoize(rec_STAR_));

if((k === (0))){
if((n === (0))){
return (1);
} else {
return (0);
}
} else {
if((k > n)){
return (0);
} else {
var fexpr__67745 = cljs.core.deref(rec);
return (fexpr__67745.cljs$core$IFn$_invoke$arity$2 ? fexpr__67745.cljs$core$IFn$_invoke$arity$2(n,k) : fexpr__67745.call(null,n,k));

}
}
}));

(emmy.special.factorial.stirling_first_kind.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(emmy.special.factorial.stirling_first_kind.cljs$lang$applyTo = (function (seq67726){
var G__67727 = cljs.core.first(seq67726);
var seq67726__$1 = cljs.core.next(seq67726);
var G__67728 = cljs.core.first(seq67726__$1);
var seq67726__$2 = cljs.core.next(seq67726__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67727,G__67728,seq67726__$2);
}));


/**
 * Returns $S(n,k)$, the number of ways to partition a set of `n` objects into `k`
 *   non-empty subsets.
 * 
 *   This is called a [Stirling number of the second
 *   kind](https://en.wikipedia.org/wiki/Stirling_numbers_of_the_second_kind).
 */
emmy.special.factorial.stirling_second_kind = (function emmy$special$factorial$stirling_second_kind(n,k){
if(emmy.value.native_integral_QMARK_(n)){
} else {
throw (new Error("Assert failed: (v/native-integral? n)"));
}

if(emmy.value.native_integral_QMARK_(k)){
} else {
throw (new Error("Assert failed: (v/native-integral? k)"));
}

if(((0) <= k)){
} else {
throw (new Error("Assert failed: (<= 0 k)"));
}

if(((0) <= n)){
} else {
throw (new Error("Assert failed: (<= 0 n)"));
}

var rec = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var rec_STAR_ = (function (n__$1,k__$1){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k__$1,(1))){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n__$1,k__$1)){
return (1);
} else {
var n_1 = (n__$1 - (1));
var G__67751 = (function (){var G__67753 = k__$1;
var G__67754 = emmy.util.bigint((function (){var fexpr__67755 = cljs.core.deref(rec);
return (fexpr__67755.cljs$core$IFn$_invoke$arity$2 ? fexpr__67755.cljs$core$IFn$_invoke$arity$2(n_1,k__$1) : fexpr__67755.call(null,n_1,k__$1));
})());
return (mul_67773.cljs$core$IFn$_invoke$arity$2 ? mul_67773.cljs$core$IFn$_invoke$arity$2(G__67753,G__67754) : mul_67773.call(null,G__67753,G__67754));
})();
var G__67752 = (function (){var G__67758 = n_1;
var G__67759 = (k__$1 - (1));
var fexpr__67757 = cljs.core.deref(rec);
return (fexpr__67757.cljs$core$IFn$_invoke$arity$2 ? fexpr__67757.cljs$core$IFn$_invoke$arity$2(G__67758,G__67759) : fexpr__67757.call(null,G__67758,G__67759));
})();
return (add_67772.cljs$core$IFn$_invoke$arity$2 ? add_67772.cljs$core$IFn$_invoke$arity$2(G__67751,G__67752) : add_67772.call(null,G__67751,G__67752));

}
}
});
cljs.core.reset_BANG_(rec,cljs.core.memoize(rec_STAR_));

if((k === (0))){
if((n === (0))){
return (1);
} else {
return (0);
}
} else {
if((k > n)){
return (0);
} else {
var fexpr__67760 = cljs.core.deref(rec);
return (fexpr__67760.cljs$core$IFn$_invoke$arity$2 ? fexpr__67760.cljs$core$IFn$_invoke$arity$2(n,k) : fexpr__67760.call(null,n,k));

}
}
});

/**
 * Returns the `n`th [Bell number](https://en.wikipedia.org/wiki/Bell_number), i.e.,
 *   the number of ways a set of `n` elements can be partitioned into nonempty
 *   subsets.
 * 
 *   The `n`th Bell number is denoted $B_n$.
 */
emmy.special.factorial.bell = (function emmy$special$factorial$bell(n){
if((n >= (0))){
} else {
throw (new Error("Assert failed: (>= n 0)"));
}

var xform = cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__67725_SHARP_){
return emmy.special.factorial.stirling_second_kind(n,p1__67725_SHARP_);
}));
var ks = cljs.core.range.cljs$core$IFn$_invoke$arity$1((n + (1)));
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(xform,add_67772,ks);
});

//# sourceMappingURL=emmy.special.factorial.js.map
