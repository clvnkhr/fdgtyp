import "./cljs_env.js";
import "./cljs.core.js";
import "./clojure.set.js";
import "./emmy.complex.js";
import "./emmy.expression.js";
import "./emmy.generic.js";
import "./emmy.numsymb.js";
import "./emmy.pattern.match.js";
import "./emmy.pattern.rule.js";
import "./emmy.util.logic.js";
import "./emmy.value.js";
goog.provide('emmy.simplify.rules');
/**
 * If true, allows the following simplification to proceed:
 * 
 *   ```clojure
 *   (log (exp x)) => x.
 *   ```
 * 
 *   Because `exp(i*x) == exp(i*(x+n*2pi))` for all integral `n`, this setting can
 *   confuse `x` with `x+n*2pi`.
 */
emmy.simplify.rules._STAR_log_exp_simplify_QMARK__STAR_ = true;
/**
 * Allows `(x^a)^b => x^(a*b)`.
 * 
 *   This is dangerous, because a root can be gained or lost:
 * 
 *   ```
 *   x = (x^(1/2))^2 != ((x^2)^1/2)=+-x
 *   ```
 */
emmy.simplify.rules._STAR_exponent_product_simplify_QMARK__STAR_ = true;
/**
 *  Traditionally, `sqrt(x)` is the positive square root, but `x^(1/2)` is both
 *   positive and negative roots.
 * 
 *   Setting [[*expt-half->sqrt?*]] to `true` maps `x^(1/2)` to `sqrt(x)`,
 *   potentially losing a root.
 */
emmy.simplify.rules._STAR_expt_half__GT_sqrt_QMARK__STAR_ = true;
/**
 * If x is real, then `(sqrt (square x)) = (abs x)`.
 * 
 *   Setting [[*sqrt-expt-simplify?*]] to `true` allows `(sqrt (square x)) = x`,
 *   potentially causing a problem if `x` is in fact negative.
 */
emmy.simplify.rules._STAR_sqrt_expt_simplify_QMARK__STAR_ = true;
/**
 * If `x` and `y` are real and non-negative, then
 * 
 *   ```
 *   (* (sqrt x) (sqrt y)) = (sqrt (* x y))
 *   ```
 * 
 *   This is not true for negative factors. Setting [[*sqrt-factor-simplify?*]] to
 *   true enables this simplification, causing a problem if `x` or `y` are in fact
 *   negative.
 */
emmy.simplify.rules._STAR_sqrt_factor_simplify_QMARK__STAR_ = true;
/**
 * When `true`, allows:
 * 
 *   ```
 *   (atan y x) => (atan (/ y d) (/ x d))
 *   ```
 * 
 *   where `d=(gcd x y)`.
 * 
 *   This is fine if `d` is a number (Numeric `gcd` is always positive), but may lose
 *   quadrant information if `d` is a symbolic expression that can be negative for
 *   some values of its variables.
 */
emmy.simplify.rules._STAR_aggressive_atan_simplify_QMARK__STAR_ = true;
/**
 * When `true`, allows trigonometric inverse functions to simplify:
 * 
 *   ```
 *   (asin (sin x)) => x
 *   ```
 * 
 *   Because trigonometric functions like `sin` and `cos` are cyclic, this can lose
 *   multi-value info (as with [[*log-exp-simplify*]]).
 */
emmy.simplify.rules._STAR_inverse_simplify_QMARK__STAR_ = true;
/**
 * When `true`, allows arguments of `sin`, `cos` and `tan` that are
 *   rational multiples of `'pi` to be reduced. See [[trig:special]] for these
 *   rules.
 */
emmy.simplify.rules._STAR_sin_cos_simplify_QMARK__STAR_ = true;
/**
 * When `true`, enables the half-angle reductions described in [[half-angle]].
 * 
 *   Note from GJS: 'Sign of result is hairy!'
 */
emmy.simplify.rules._STAR_half_angle_simplify_QMARK__STAR_ = true;
/**
 * When true, allows commutation of partial derivatives so that partial
 *   derivatives appear in order.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (((* (partial 2 1) (partial 1 1)) FF) (up t (up x y) (down p_x p_y)))
 *   ```
 * 
 *   Since the partial indices in the outer derivative are lexically greater than
 *   those of the inner, we canonicalize by swapping the order:
 * 
 *   ```clojure
 *   (((* (partial 1 1) (partial 2 1)) FF) (up t (up x y) (down p_x p_y)))
 *   ```
 * 
 *   When the components selected by the partials are unstructured (e.g. real),
 *   this is okay due to the 'equality of mixed partials'.
 */
emmy.simplify.rules._STAR_commute_partials_QMARK__STAR_ = true;
/**
 * When `true`, allows division through the numerator by numbers in the
 *   denominator:
 * 
 *   ```
 *   (/ (+ (* 4 x) 5) 3) => (+ (* 4/3 x) 5/3)
 *   ```
 * 
 *   This setting is `true` by default.
 */
emmy.simplify.rules._STAR_divide_numbers_through_simplify_QMARK__STAR_ = true;
/**
 * Transforms products of trig functions into functions of sums of angles.
 * 
 *   For example:
 * 
 *   ```
 *   (* (sin x) (cos y))
 *   ;;=>
 *   (+ (* 1/2 (sin (+ x y)))
 *  (* 1/2 (sin (+ x (* -1 y)))) )
 *   ```
 */
emmy.simplify.rules._STAR_trig_product_to_sum_simplify_QMARK__STAR_ = false;
emmy.simplify.rules.negative_number_QMARK_ = (function emmy$simplify$rules$negative_number_QMARK_(x){
var and__5160__auto__ = emmy.value.number_QMARK_(x);
if(and__5160__auto__){
return emmy.generic.negative_QMARK_.cljs$core$IFn$_invoke$arity$1(x);
} else {
return and__5160__auto__;
}
});
/**
 * Returns true if `z` is a complex number with nonzero imaginary part and zero
 *   real part, false otherwise.
 */
emmy.simplify.rules.imaginary_number_QMARK_ = (function emmy$simplify$rules$imaginary_number_QMARK_(z){
var and__5160__auto__ = emmy.complex.complex_QMARK_(z);
if(and__5160__auto__){
var and__5160__auto____$1 = cljs.core.not(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(z));
if(and__5160__auto____$1){
return emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(emmy.generic.real_part.cljs$core$IFn$_invoke$arity$1(z));
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
});
/**
 * Returns true if `z` is a complex number with nonzero real AND imaginary parts,
 *   false otherwise.
 */
emmy.simplify.rules.complex_number_QMARK_ = (function emmy$simplify$rules$complex_number_QMARK_(z){
return ((emmy.complex.complex_QMARK_(z)) && (((cljs.core.not(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(emmy.generic.real_part.cljs$core$IFn$_invoke$arity$1(z)))) && (cljs.core.not(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(emmy.generic.imag_part.cljs$core$IFn$_invoke$arity$1(z)))))));
});
/**
 * Returns true if `z` is an imaginary number with an integral (or VERY close to
 *   integral) imaginary part, false otherwise.
 */
emmy.simplify.rules.imaginary_integer_QMARK_ = (function emmy$simplify$rules$imaginary_integer_QMARK_(z){
var and__5160__auto__ = emmy.simplify.rules.imaginary_number_QMARK_(z);
if(cljs.core.truth_(and__5160__auto__)){
return emmy.generic.almost_integral_QMARK_(emmy.generic.imag_part.cljs$core$IFn$_invoke$arity$1(z));
} else {
return and__5160__auto__;
}
});
emmy.simplify.rules.not_integral_QMARK_ = (function emmy$simplify$rules$not_integral_QMARK_(x){
return (!(emmy.value.integral_QMARK_(x)));
});
emmy.simplify.rules.even_QMARK_ = (function emmy$simplify$rules$even_QMARK_(x){
return emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(emmy.generic.modulo.cljs$core$IFn$_invoke$arity$2(x,(2)));
});
emmy.simplify.rules.odd_QMARK_ = (function emmy$simplify$rules$odd_QMARK_(x){
return emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(emmy.generic.modulo.cljs$core$IFn$_invoke$arity$2(x,(2)));
});
emmy.simplify.rules.even_integer_QMARK_ = (function emmy$simplify$rules$even_integer_QMARK_(x){
var and__5160__auto__ = emmy.value.integral_QMARK_(x);
if(and__5160__auto__){
return emmy.simplify.rules.even_QMARK_(x);
} else {
return and__5160__auto__;
}
});
emmy.simplify.rules.odd_integer_QMARK_ = (function emmy$simplify$rules$odd_integer_QMARK_(x){
var and__5160__auto__ = emmy.value.integral_QMARK_(x);
if(and__5160__auto__){
return emmy.simplify.rules.odd_QMARK_(x);
} else {
return and__5160__auto__;
}
});
emmy.simplify.rules.odd_positive_integer_QMARK_ = (function emmy$simplify$rules$odd_positive_integer_QMARK_(x){
var and__5160__auto__ = emmy.simplify.rules.odd_integer_QMARK_(x);
if(cljs.core.truth_(and__5160__auto__)){
return (x > (2));
} else {
return and__5160__auto__;
}
});
emmy.simplify.rules.more_than_two_QMARK_ = (function emmy$simplify$rules$more_than_two_QMARK_(x){
return ((emmy.value.number_QMARK_(x)) && ((x > (2))));
});
emmy.simplify.rules.at_least_two_QMARK_ = (function emmy$simplify$rules$at_least_two_QMARK_(x){
return ((emmy.value.number_QMARK_(x)) && ((x >= (2))));
});
/**
 * Takes a sequence `ops` of operator symbols like `'+`, `'*` and returns a rule
 *   that strips these operations off of unary applications.
 * 
 *   ```clojure
 *   (let [rule (unary-elimination '+ '*)
 *      f    (rule-simplifier rule)]
 *  (f '(+ x y (* z) (+ a))))
 *   ;;=> (+ x y z a)
 *   ```
 */
emmy.simplify.rules.unary_elimination = (function emmy$simplify$rules$unary_elimination(var_args){
var args__5903__auto__ = [];
var len__5897__auto___70334 = arguments.length;
var i__5898__auto___70335 = (0);
while(true){
if((i__5898__auto___70335 < len__5897__auto___70334)){
args__5903__auto__.push((arguments[i__5898__auto___70335]));

var G__70336 = (i__5898__auto___70335 + (1));
i__5898__auto___70335 = G__70336;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return emmy.simplify.rules.unary_elimination.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(emmy.simplify.rules.unary_elimination.cljs$core$IFn$_invoke$arity$variadic = (function (ops){
var op_set = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,ops);
return emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,op_set,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69225){
var r__39308__auto__ = (function (){var fexpr__69226 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69226.cljs$core$IFn$_invoke$arity$1 ? fexpr__69226.cljs$core$IFn$_invoke$arity$1(G__69225) : fexpr__69226.call(null,G__69225));
})();
var or__5162__auto__ = r__39308__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
}))], 0));
}));

(emmy.simplify.rules.unary_elimination.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(emmy.simplify.rules.unary_elimination.cljs$lang$applyTo = (function (seq69220){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69220));
}));

/**
 * Takes an operator symbol `op` and an identity element `constant` and returns a
 *   rule that eliminates instances of `constant` inside any-arity forms like
 * 
 *   ```clojure
 *   (<op> ,,,args,,,)
 *   ```
 */
emmy.simplify.rules.constant_elimination = (function emmy$simplify$rules$constant_elimination(op,constant){
return emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,op,(new cljs.core.List(null,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69230){
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [op], null),(function (p__69231){
var map__69232 = p__69231;
var map__69232__$1 = cljs.core.__destructure_map(map__69232);
var xs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69232__$1,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null));
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([constant]),xs);
})(G__69230)));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
}))], 0));
});
/**
 * Takes an operator symbol `op` and an identity element `constant` and returns a
 *   rule that turns binary forms with `constant` on either side into `constant`.
 * 
 *   This rule is useful for commutative annihilators like:
 * 
 *   ```clojure
 *   (* 0 <anything>) => 0
 *   (and false <anything>) => false
 *   (or true <anything>) => true
 *   ```
 */
emmy.simplify.rules.constant_promotion = (function emmy$simplify$rules$constant_promotion(op,constant){
return emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,op,(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,constant,null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__69234){
var r__39308__auto__ = constant;
var or__5162__auto__ = r__39308__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,op,(new cljs.core.List(null,constant,(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__69236){
var r__39308__auto__ = constant;
var or__5162__auto__ = r__39308__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
}))], 0));
});
/**
 * Takes any number of operator symbols `ops` like `'+`, `'*` and returns a rule
 *   that collapses nested applications of each operation into a single
 *   sequence. (The associative property lets us strip parentheses.)
 * 
 *   ```clojure
 *   (let [rule (associative '+ '*)
 *      f    (rule-simplifier rule)]
 *  (= (+ x y z a (* b c d) cake face)
 *     (f '(+ x (+ y (+ z a) (* b (* c d))
 *                 (+ cake face))))))
 *   ```
 */
emmy.simplify.rules.associative = (function emmy$simplify$rules$associative(var_args){
var args__5903__auto__ = [];
var len__5897__auto___70338 = arguments.length;
var i__5898__auto___70339 = (0);
while(true){
if((i__5898__auto___70339 < len__5897__auto___70338)){
args__5903__auto__.push((arguments[i__5898__auto___70339]));

var G__70340 = (i__5898__auto___70339 + (1));
i__5898__auto___70339 = G__70340;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return emmy.simplify.rules.associative.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(emmy.simplify.rules.associative.cljs$core$IFn$_invoke$arity$variadic = (function (ops){
var op_set = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,ops);
var flatten = (function (op){
return emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,op,(new cljs.core.List(null,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69245){
var r__39308__auto__ = cljs.core.vec((function (){var fexpr__69247 = new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null);
return (fexpr__69247.cljs$core$IFn$_invoke$arity$1 ? fexpr__69247.cljs$core$IFn$_invoke$arity$1(G__69245) : fexpr__69247.call(null,G__69245));
})());
var or__5162__auto__ = r__39308__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"?x","?x",-555096650,null),emmy.pattern.rule._EQ__GT_),(function (G__69248){
var r__39308__auto__ = cljs.core.vec(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__69249 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69249.cljs$core$IFn$_invoke$arity$1 ? fexpr__69249.cljs$core$IFn$_invoke$arity$1(G__69248) : fexpr__69249.call(null,G__69248));
})()], null));
var or__5162__auto__ = r__39308__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
}))], 0));
});
return emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,op_set,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??c","??c",1219586074,null),null,(1),null)),(2),null)),(3),null)),(4),null)),emmy.pattern.rule._EQ__GT_),(function (G__69250){
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__69251 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__69251.cljs$core$IFn$_invoke$arity$1 ? fexpr__69251.cljs$core$IFn$_invoke$arity$1(G__69250) : fexpr__69251.call(null,G__69250));
})()], null),(function (){var fexpr__69252 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__69252.cljs$core$IFn$_invoke$arity$1 ? fexpr__69252.cljs$core$IFn$_invoke$arity$1(G__69250) : fexpr__69252.call(null,G__69250));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__69254){
var map__69255 = p__69254;
var map__69255__$1 = cljs.core.__destructure_map(map__69255);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69255__$1,new cljs.core.Symbol(null,"?op","?op",-135731883,null));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69255__$1,new cljs.core.Symbol(null,"??b","??b",254504576,null));
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69255__$1,new cljs.core.Symbol(null,"??c","??c",1219586074,null));
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(flatten(op),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.concat.cljs$core$IFn$_invoke$arity$2(b,c)], 0));
})(G__69250)], 0)));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
}))], 0));
}));

(emmy.simplify.rules.associative.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(emmy.simplify.rules.associative.cljs$lang$applyTo = (function (seq69239){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69239));
}));

/**
 * Takes any number of operator symbols `ops` like `'+`, `'*` and returns a rule
 *   that sorts the argument list of any multiple-arity call to any of the supplied
 *   operators. Sorting is accomplished with [[emmy.expression/sort]].
 * 
 *   For example:
 * 
 *   ```clojure
 *   (let [rule (commutative '* '+)]
 *  (= '(* 2 3 a b c (+ c a b))
 *     (rule '(* c a b (+ c a b) 3 2))))
 *   ```
 */
emmy.simplify.rules.commutative = (function emmy$simplify$rules$commutative(var_args){
var args__5903__auto__ = [];
var len__5897__auto___70341 = arguments.length;
var i__5898__auto___70342 = (0);
while(true){
if((i__5898__auto___70342 < len__5897__auto___70341)){
args__5903__auto__.push((arguments[i__5898__auto___70342]));

var G__70343 = (i__5898__auto___70342 + (1));
i__5898__auto___70342 = G__70343;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return emmy.simplify.rules.commutative.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(emmy.simplify.rules.commutative.cljs$core$IFn$_invoke$arity$variadic = (function (ops){
var op_set = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,ops);
return emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,op_set,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69261){
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__69266 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__69266.cljs$core$IFn$_invoke$arity$1 ? fexpr__69266.cljs$core$IFn$_invoke$arity$1(G__69261) : fexpr__69266.call(null,G__69261));
})()], null),(function (p1__69257_SHARP_){
return emmy.expression.sort((function (){var G__69267 = new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null);
return (p1__69257_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__69257_SHARP_.cljs$core$IFn$_invoke$arity$1(G__69267) : p1__69257_SHARP_.call(null,G__69267));
})());
})(G__69261)));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
}))], 0));
}));

(emmy.simplify.rules.commutative.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(emmy.simplify.rules.commutative.cljs$lang$applyTo = (function (seq69259){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69259));
}));

/**
 * Returns a simplifier that will remove consecutive duplicate arguments to any
 *   of the operations supplied as `ops`. Acts as identity otherwise.
 * 
 *   ```clojure
 *   (let [rule (idempotent 'and)]
 *  (= '(and a b c d)
 *     (rule '(and a b b c c c d))))
 *   ```
 */
emmy.simplify.rules.idempotent = (function emmy$simplify$rules$idempotent(var_args){
var args__5903__auto__ = [];
var len__5897__auto___70344 = arguments.length;
var i__5898__auto___70345 = (0);
while(true){
if((i__5898__auto___70345 < len__5897__auto___70344)){
args__5903__auto__.push((arguments[i__5898__auto___70345]));

var G__70346 = (i__5898__auto___70345 + (1));
i__5898__auto___70345 = G__70346;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return emmy.simplify.rules.idempotent.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(emmy.simplify.rules.idempotent.cljs$core$IFn$_invoke$arity$variadic = (function (ops){
var op_set = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,ops);
return emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,op_set,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??pre","??pre",-1767241378,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??post","??post",1092296697,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),emmy.pattern.rule._EQ__GT_),(function (G__69272){
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__69273 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__69273.cljs$core$IFn$_invoke$arity$1 ? fexpr__69273.cljs$core$IFn$_invoke$arity$1(G__69272) : fexpr__69273.call(null,G__69272));
})()], null),(function (m){
return cljs.core.dedupe.cljs$core$IFn$_invoke$arity$1((function (){var G__69274 = m;
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__69275 = new cljs.core.Symbol(null,"??pre","??pre",-1767241378,null);
return (fexpr__69275.cljs$core$IFn$_invoke$arity$1 ? fexpr__69275.cljs$core$IFn$_invoke$arity$1(G__69274) : fexpr__69275.call(null,G__69274));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__69276 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69276.cljs$core$IFn$_invoke$arity$1 ? fexpr__69276.cljs$core$IFn$_invoke$arity$1(G__69274) : fexpr__69276.call(null,G__69274));
})()], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__69277 = new cljs.core.Symbol(null,"??post","??post",1092296697,null);
return (fexpr__69277.cljs$core$IFn$_invoke$arity$1 ? fexpr__69277.cljs$core$IFn$_invoke$arity$1(G__69274) : fexpr__69277.call(null,G__69274));
})()], 0)));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})());
})(G__69272)));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
}))], 0));
}));

(emmy.simplify.rules.idempotent.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(emmy.simplify.rules.idempotent.cljs$lang$applyTo = (function (seq69270){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69270));
}));

/**
 * Set of rules that collect adjacent products, exponents and nested exponents
 *   into exponent terms.
 */
emmy.simplify.rules.exponent_contract = emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.value.integral_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?m","?m",896026745,null),(new cljs.core.List(null,emmy.value.integral_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__69282){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__69283 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__69283.cljs$core$IFn$_invoke$arity$1 ? fexpr__69283.cljs$core$IFn$_invoke$arity$1(G__69282) : fexpr__69283.call(null,G__69282));
})(),(function (p1__69278_SHARP_){
return emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2((function (){var G__69284 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__69278_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__69278_SHARP_.cljs$core$IFn$_invoke$arity$1(G__69284) : p1__69278_SHARP_.call(null,G__69284));
})(),(function (){var G__69285 = new cljs.core.Symbol(null,"?m","?m",896026745,null);
return (p1__69278_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__69278_SHARP_.cljs$core$IFn$_invoke$arity$1(G__69285) : p1__69278_SHARP_.call(null,G__69285));
})());
})(G__69282)], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??pre","??pre",-1767241378,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.value.integral_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?m","?m",896026745,null),(new cljs.core.List(null,emmy.value.integral_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??post","??post",1092296697,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),emmy.pattern.rule._EQ__GT_),(function (G__69286){
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__69287 = new cljs.core.Symbol(null,"??pre","??pre",-1767241378,null);
return (fexpr__69287.cljs$core$IFn$_invoke$arity$1 ? fexpr__69287.cljs$core$IFn$_invoke$arity$1(G__69286) : fexpr__69287.call(null,G__69286));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__69288 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__69288.cljs$core$IFn$_invoke$arity$1 ? fexpr__69288.cljs$core$IFn$_invoke$arity$1(G__69286) : fexpr__69288.call(null,G__69286));
})(),(function (p1__69279_SHARP_){
return emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2((function (){var G__69289 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__69279_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__69279_SHARP_.cljs$core$IFn$_invoke$arity$1(G__69289) : p1__69279_SHARP_.call(null,G__69289));
})(),(function (){var G__69290 = new cljs.core.Symbol(null,"?m","?m",896026745,null);
return (p1__69279_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__69279_SHARP_.cljs$core$IFn$_invoke$arity$1(G__69290) : p1__69279_SHARP_.call(null,G__69290));
})());
})(G__69286)], null))], null),(function (){var fexpr__69291 = new cljs.core.Symbol(null,"??post","??post",1092296697,null);
return (fexpr__69291.cljs$core$IFn$_invoke$arity$1 ? fexpr__69291.cljs$core$IFn$_invoke$arity$1(G__69286) : fexpr__69291.call(null,G__69286));
})()], 0)));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??pre","??pre",-1767241378,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.value.integral_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??post","??post",1092296697,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),emmy.pattern.rule._EQ__GT_),(function (G__69293){
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__69294 = new cljs.core.Symbol(null,"??pre","??pre",-1767241378,null);
return (fexpr__69294.cljs$core$IFn$_invoke$arity$1 ? fexpr__69294.cljs$core$IFn$_invoke$arity$1(G__69293) : fexpr__69294.call(null,G__69293));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__69295 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__69295.cljs$core$IFn$_invoke$arity$1 ? fexpr__69295.cljs$core$IFn$_invoke$arity$1(G__69293) : fexpr__69295.call(null,G__69293));
})(),(function (p1__69280_SHARP_){
return emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2((function (){var G__69296 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__69280_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__69280_SHARP_.cljs$core$IFn$_invoke$arity$1(G__69296) : p1__69280_SHARP_.call(null,G__69296));
})(),(1));
})(G__69293)], null))], null),(function (){var fexpr__69297 = new cljs.core.Symbol(null,"??post","??post",1092296697,null);
return (fexpr__69297.cljs$core$IFn$_invoke$arity$1 ? fexpr__69297.cljs$core$IFn$_invoke$arity$1(G__69293) : fexpr__69297.call(null,G__69293));
})()], 0)));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??pre","??pre",-1767241378,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.value.integral_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??post","??post",1092296697,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),emmy.pattern.rule._EQ__GT_),(function (G__69300){
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__69301 = new cljs.core.Symbol(null,"??pre","??pre",-1767241378,null);
return (fexpr__69301.cljs$core$IFn$_invoke$arity$1 ? fexpr__69301.cljs$core$IFn$_invoke$arity$1(G__69300) : fexpr__69301.call(null,G__69300));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__69302 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__69302.cljs$core$IFn$_invoke$arity$1 ? fexpr__69302.cljs$core$IFn$_invoke$arity$1(G__69300) : fexpr__69302.call(null,G__69300));
})(),(function (p1__69281_SHARP_){
return emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2((function (){var G__69304 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__69281_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__69281_SHARP_.cljs$core$IFn$_invoke$arity$1(G__69304) : p1__69281_SHARP_.call(null,G__69304));
})(),(1));
})(G__69300)], null))], null),(function (){var fexpr__69305 = new cljs.core.Symbol(null,"??post","??post",1092296697,null);
return (fexpr__69305.cljs$core$IFn$_invoke$arity$1 ? fexpr__69305.cljs$core$IFn$_invoke$arity$1(G__69300) : fexpr__69305.call(null,G__69300));
})()], 0)));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??pre","??pre",-1767241378,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??post","??post",1092296697,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),emmy.pattern.rule._EQ__GT_),(function (G__69307){
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__69310 = new cljs.core.Symbol(null,"??pre","??pre",-1767241378,null);
return (fexpr__69310.cljs$core$IFn$_invoke$arity$1 ? fexpr__69310.cljs$core$IFn$_invoke$arity$1(G__69307) : fexpr__69310.call(null,G__69307));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__69311 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__69311.cljs$core$IFn$_invoke$arity$1 ? fexpr__69311.cljs$core$IFn$_invoke$arity$1(G__69307) : fexpr__69311.call(null,G__69307));
})(),(2)], null))], null),(function (){var fexpr__69312 = new cljs.core.Symbol(null,"??post","??post",1092296697,null);
return (fexpr__69312.cljs$core$IFn$_invoke$arity$1 ? fexpr__69312.cljs$core$IFn$_invoke$arity$1(G__69307) : fexpr__69312.call(null,G__69307));
})()], 0)));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
}))], 0));
/**
 * Returns a rule simplifier that attempts to simplify nested exp and log forms.
 * 
 *   You can tune the behavior of this simplifier with [[*log-exp-simplify?*]]
 *   and [[*sqrt-expt-simplify?*]].
 * 
 *   NOTE: [[logexp]] returns a `rule-simplifier`, which memoizes its traversal
 *   through the supplied expression. This means that if you try to
 *   customize [[logexp]] with dynamic binding variables AFTER passing an
 *   expression into it, you may get a memoized result which used the previous
 *   dynamic binding.
 * 
 *   This is a problem we should address!
 */
emmy.simplify.rules.logexp = (function emmy$simplify$rules$logexp(simplify){
return emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.value.integral_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69318){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__69319 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69319.cljs$core$IFn$_invoke$arity$1 ? fexpr__69319.cljs$core$IFn$_invoke$arity$1(G__69318) : fexpr__69319.call(null,G__69318));
})(),(function (){var fexpr__69320 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__69320.cljs$core$IFn$_invoke$arity$1 ? fexpr__69320.cljs$core$IFn$_invoke$arity$1(G__69318) : fexpr__69320.call(null,G__69318));
})()], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69321){
var r__39308__auto__ = (function (){var fexpr__69322 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69322.cljs$core$IFn$_invoke$arity$1 ? fexpr__69322.cljs$core$IFn$_invoke$arity$1(G__69321) : fexpr__69322.call(null,G__69321));
})();
var or__5162__auto__ = r__39308__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.guard((function (_){
return emmy.simplify.rules._STAR_log_exp_simplify_QMARK__STAR_;
}),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null))),(function (p__69323){
var map__69324 = p__69323;
var map__69324__$1 = cljs.core.__destructure_map(map__69324);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69324__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
var and__5160__auto__ = emmy.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),xs], null))], null)),xs], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})(),new cljs.core.Symbol(null,"logexp1","logexp1",-1360132001,null));
if(cljs.core.truth_(and__5160__auto__)){
return x;
} else {
return and__5160__auto__;
}
}))),emmy.pattern.rule.guard((function (_){
return emmy.simplify.rules._STAR_sqrt_expt_simplify_QMARK__STAR_;
}),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null))),(function (p__69325){
var map__69326 = p__69325;
var map__69326__$1 = cljs.core.__destructure_map(map__69326);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69326__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
var and__5160__auto__ = emmy.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),xs], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),xs,(2)], null))], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})(),new cljs.core.Symbol(null,"logexp2","logexp2",-1768907713,null));
if(cljs.core.truth_(and__5160__auto__)){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),x,(2)], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
} else {
return and__5160__auto__;
}
}))),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69327){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),(function (){var fexpr__69328 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69328.cljs$core$IFn$_invoke$arity$1 ? fexpr__69328.cljs$core$IFn$_invoke$arity$1(G__69327) : fexpr__69328.call(null,G__69327));
})()], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
}))], 0))], 0));
});
/**
 * Rule simplifier for forms that contain `magnitude` entries.
 */
emmy.simplify.rules.magnitude = emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.value.real_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69331){
var r__39308__auto__ = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(emmy.generic.magnitude,new cljs.core.Symbol(null,"?n","?n",-2053238410,null))(G__69331);
var or__5162__auto__ = r__39308__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69332){
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (p__69333){
var map__69334 = p__69333;
var map__69334__$1 = cljs.core.__destructure_map(map__69334);
var xs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69334__$1,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__69329_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),(new cljs.core.List(null,p1__69329_SHARP_,null,(1),null)),(2),null));
}),xs);
})(G__69332)));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(1),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69335){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),(function (){var fexpr__69336 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69336.cljs$core$IFn$_invoke$arity$1 ? fexpr__69336.cljs$core$IFn$_invoke$arity$1(G__69335) : fexpr__69336.call(null,G__69335));
})()], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.simplify.rules.even_integer_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69337){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__69338 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69338.cljs$core$IFn$_invoke$arity$1 ? fexpr__69338.cljs$core$IFn$_invoke$arity$1(G__69337) : fexpr__69338.call(null,G__69337));
})(),(function (){var fexpr__69339 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__69339.cljs$core$IFn$_invoke$arity$1 ? fexpr__69339.cljs$core$IFn$_invoke$arity$1(G__69337) : fexpr__69339.call(null,G__69337));
})()], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.value.integral_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69340){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),(function (){var fexpr__69341 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69341.cljs$core$IFn$_invoke$arity$1 ? fexpr__69341.cljs$core$IFn$_invoke$arity$1(G__69340) : fexpr__69341.call(null,G__69340));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__69342 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69342.cljs$core$IFn$_invoke$arity$1 ? fexpr__69342.cljs$core$IFn$_invoke$arity$1(G__69340) : fexpr__69342.call(null,G__69340));
})(),(function (p1__69330_SHARP_){
return emmy.generic._.cljs$core$IFn$_invoke$arity$2((function (){var G__69343 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__69330_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__69330_SHARP_.cljs$core$IFn$_invoke$arity$1(G__69343) : p1__69330_SHARP_.call(null,G__69343));
})(),(1));
})(G__69340)], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
}))], 0))], 0));
/**
 * Simplifications for various exponent forms (assuming commutative multiplication).
 * 
 *   NOTE that we have some similarities to [[exponent-contract]] above - that
 *   function works for non-commutative multiplication - AND that this needs a new
 *   name.
 */
emmy.simplify.rules.miscsimp = (function emmy$simplify$rules$miscsimp(simplify){
var sym_COLON__STAR_ = emmy.numsymb.symbolic_operator(new cljs.core.Symbol(null,"*","*",345799209,null));
return emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,(0),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__69345){
var r__39308__auto__ = (1);
var or__5162__auto__ = r__39308__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(1),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__69346){
var r__39308__auto__ = (function (){var fexpr__69347 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69347.cljs$core$IFn$_invoke$arity$1 ? fexpr__69347.cljs$core$IFn$_invoke$arity$1(G__69346) : fexpr__69347.call(null,G__69346));
})();
var or__5162__auto__ = r__39308__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,emmy.complex.I,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.value.integral_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__69348){
var r__39308__auto__ = (function (p1__69344_SHARP_){
var G__69350 = cljs.core.mod((function (){var G__69351 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__69344_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__69344_SHARP_.cljs$core$IFn$_invoke$arity$1(G__69351) : p1__69344_SHARP_.call(null,G__69351));
})(),(4));
var fexpr__69349 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),emmy.complex.I,(-1),emmy.generic._.cljs$core$IFn$_invoke$arity$1(emmy.complex.I)], null);
return (fexpr__69349.cljs$core$IFn$_invoke$arity$1 ? fexpr__69349.cljs$core$IFn$_invoke$arity$1(G__69350) : fexpr__69349.call(null,G__69350));
})(G__69348);
var or__5162__auto__ = r__39308__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?a","?a",1314302913,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?b","?b",1575118075,null),null,(1),null)),(2),null)),(3),null)),(function (p__69352){
var map__69353 = p__69352;
var map__69353__$1 = cljs.core.__destructure_map(map__69353);
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69353__$1,new cljs.core.Symbol(null,"?a","?a",1314302913,null));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69353__$1,new cljs.core.Symbol(null,"?b","?b",1575118075,null));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69353__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var as = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(a) : simplify.call(null,a));
var bs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(b) : simplify.call(null,b));
if(cljs.core.truth_((function (){var or__5162__auto__ = ((emmy.value.integral_QMARK_(as)) && (emmy.value.integral_QMARK_(bs)));
if(or__5162__auto__){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = (function (){var and__5160__auto__ = emmy.simplify.rules.even_integer_QMARK_(bs);
if(cljs.core.truth_(and__5160__auto__)){
return emmy.value.integral_QMARK_((function (){var G__69354 = (sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2(as,bs) : sym_COLON__STAR_.call(null,as,bs));
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__69354) : simplify.call(null,G__69354));
})());
} else {
return and__5160__auto__;
}
})();
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
var and__5160__auto__ = emmy.simplify.rules._STAR_exponent_product_simplify_QMARK__STAR_;
if(cljs.core.truth_(and__5160__auto__)){
return emmy.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),x,as], null)),bs], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),x,(sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2(as,bs) : sym_COLON__STAR_.call(null,as,bs))], null))], null));
var or__5162__auto____$2 = r__39308__auto__;
if(or__5162__auto____$2){
return or__5162__auto____$2;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})(),new cljs.core.Symbol(null,"exponent-product","exponent-product",134982023,null));
} else {
return and__5160__auto__;
}
}
}
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"?ab","?ab",-380882607,null),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(a,b)], null);
} else {
return null;
}
})),(function (G__69355){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__69356 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69356.cljs$core$IFn$_invoke$arity$1 ? fexpr__69356.cljs$core$IFn$_invoke$arity$1(G__69355) : fexpr__69356.call(null,G__69355));
})(),(function (){var fexpr__69357 = new cljs.core.Symbol(null,"?ab","?ab",-380882607,null);
return (fexpr__69357.cljs$core$IFn$_invoke$arity$1 ? fexpr__69357.cljs$core$IFn$_invoke$arity$1(G__69355) : fexpr__69357.call(null,G__69355));
})()], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(1),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(function (_){
return emmy.simplify.rules._STAR_expt_half__GT_sqrt_QMARK__STAR_;
})),(function (G__69358){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__69359 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69359.cljs$core$IFn$_invoke$arity$1 ? fexpr__69359.cljs$core$IFn$_invoke$arity$1(G__69358) : fexpr__69359.call(null,G__69358));
})()], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs1*","??fs1*",1798735663,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs2","??fs2",1129791247,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs3","??fs3",1216174751,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),emmy.pattern.rule._EQ__GT_),(function (G__69360){
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__69361 = new cljs.core.Symbol(null,"??fs1","??fs1",-1584583474,null);
return (fexpr__69361.cljs$core$IFn$_invoke$arity$1 ? fexpr__69361.cljs$core$IFn$_invoke$arity$1(G__69360) : fexpr__69361.call(null,G__69360));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__69362 = new cljs.core.Symbol(null,"??fs2","??fs2",1129791247,null);
return (fexpr__69362.cljs$core$IFn$_invoke$arity$1 ? fexpr__69362.cljs$core$IFn$_invoke$arity$1(G__69360) : fexpr__69362.call(null,G__69360));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__69363 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69363.cljs$core$IFn$_invoke$arity$1 ? fexpr__69363.cljs$core$IFn$_invoke$arity$1(G__69360) : fexpr__69363.call(null,G__69360));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(function (){var fexpr__69364 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__69364.cljs$core$IFn$_invoke$arity$1 ? fexpr__69364.cljs$core$IFn$_invoke$arity$1(G__69360) : fexpr__69364.call(null,G__69360));
})()], null))], null))], null),(function (){var fexpr__69365 = new cljs.core.Symbol(null,"??fs3","??fs3",1216174751,null);
return (fexpr__69365.cljs$core$IFn$_invoke$arity$1 ? fexpr__69365.cljs$core$IFn$_invoke$arity$1(G__69360) : fexpr__69365.call(null,G__69360));
})()], 0)));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs1","??fs1",-1584583474,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs2","??fs2",1129791247,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs3","??fs3",1216174751,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),emmy.pattern.rule._EQ__GT_),(function (G__69366){
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__69367 = new cljs.core.Symbol(null,"??fs1","??fs1",-1584583474,null);
return (fexpr__69367.cljs$core$IFn$_invoke$arity$1 ? fexpr__69367.cljs$core$IFn$_invoke$arity$1(G__69366) : fexpr__69367.call(null,G__69366));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__69368 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69368.cljs$core$IFn$_invoke$arity$1 ? fexpr__69368.cljs$core$IFn$_invoke$arity$1(G__69366) : fexpr__69368.call(null,G__69366));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(function (){var fexpr__69369 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__69369.cljs$core$IFn$_invoke$arity$1 ? fexpr__69369.cljs$core$IFn$_invoke$arity$1(G__69366) : fexpr__69369.call(null,G__69366));
})()], null))], null))], null),(function (){var fexpr__69370 = new cljs.core.Symbol(null,"??fs2","??fs2",1129791247,null);
return (fexpr__69370.cljs$core$IFn$_invoke$arity$1 ? fexpr__69370.cljs$core$IFn$_invoke$arity$1(G__69366) : fexpr__69370.call(null,G__69366));
})(),(function (){var fexpr__69371 = new cljs.core.Symbol(null,"??fs3","??fs3",1216174751,null);
return (fexpr__69371.cljs$core$IFn$_invoke$arity$1 ? fexpr__69371.cljs$core$IFn$_invoke$arity$1(G__69366) : fexpr__69371.call(null,G__69366));
})()], 0)));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs1","??fs1",-1584583474,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y1","?y1",1237029156,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs2","??fs2",1129791247,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y2","?y2",731715171,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs3","??fs3",1216174751,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),emmy.pattern.rule._EQ__GT_),(function (G__69372){
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__69373 = new cljs.core.Symbol(null,"??fs1","??fs1",-1584583474,null);
return (fexpr__69373.cljs$core$IFn$_invoke$arity$1 ? fexpr__69373.cljs$core$IFn$_invoke$arity$1(G__69372) : fexpr__69373.call(null,G__69372));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__69374 = new cljs.core.Symbol(null,"??fs2","??fs2",1129791247,null);
return (fexpr__69374.cljs$core$IFn$_invoke$arity$1 ? fexpr__69374.cljs$core$IFn$_invoke$arity$1(G__69372) : fexpr__69374.call(null,G__69372));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__69375 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69375.cljs$core$IFn$_invoke$arity$1 ? fexpr__69375.cljs$core$IFn$_invoke$arity$1(G__69372) : fexpr__69375.call(null,G__69372));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__69376 = new cljs.core.Symbol(null,"?y1","?y1",1237029156,null);
return (fexpr__69376.cljs$core$IFn$_invoke$arity$1 ? fexpr__69376.cljs$core$IFn$_invoke$arity$1(G__69372) : fexpr__69376.call(null,G__69372));
})(),(function (){var fexpr__69377 = new cljs.core.Symbol(null,"?y2","?y2",731715171,null);
return (fexpr__69377.cljs$core$IFn$_invoke$arity$1 ? fexpr__69377.cljs$core$IFn$_invoke$arity$1(G__69372) : fexpr__69377.call(null,G__69372));
})()], null))], null))], null),(function (){var fexpr__69378 = new cljs.core.Symbol(null,"??fs3","??fs3",1216174751,null);
return (fexpr__69378.cljs$core$IFn$_invoke$arity$1 ? fexpr__69378.cljs$core$IFn$_invoke$arity$1(G__69372) : fexpr__69378.call(null,G__69372));
})()], 0)));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
}))], 0))], 0));
});
emmy.simplify.rules.simplify_square_roots = (function emmy$simplify$rules$simplify_square_roots(simplify){
return emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.simplify.rules.even_integer_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__69381){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__69382 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69382.cljs$core$IFn$_invoke$arity$1 ? fexpr__69382.cljs$core$IFn$_invoke$arity$1(G__69381) : fexpr__69382.call(null,G__69381));
})(),(function (p1__69379_SHARP_){
return emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((function (){var G__69383 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__69379_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__69379_SHARP_.cljs$core$IFn$_invoke$arity$1(G__69383) : p1__69379_SHARP_.call(null,G__69383));
})(),(2));
})(G__69381)], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.guard((function (_){
return emmy.simplify.rules._STAR_sqrt_expt_simplify_QMARK__STAR_;
}),emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.simplify.rules.even_integer_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(function (p__69384){
var map__69385 = p__69384;
var map__69385__$1 = cljs.core.__destructure_map(map__69385);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69385__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69385__$1,new cljs.core.Symbol(null,"?n","?n",-2053238410,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
var half_n = emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(n,(2));
if(cljs.core.truth_(emmy.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),xs,n], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),xs,half_n], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})(),new cljs.core.Symbol(null,"simsqrt1","simsqrt1",-1069513157,null)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"?new-n","?new-n",-1095502685,null),half_n], null);
} else {
return null;
}
})),(function (G__69386){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__69387 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69387.cljs$core$IFn$_invoke$arity$1 ? fexpr__69387.cljs$core$IFn$_invoke$arity$1(G__69386) : fexpr__69387.call(null,G__69386));
})(),(function (){var fexpr__69388 = new cljs.core.Symbol(null,"?new-n","?new-n",-1095502685,null);
return (fexpr__69388.cljs$core$IFn$_invoke$arity$1 ? fexpr__69388.cljs$core$IFn$_invoke$arity$1(G__69386) : fexpr__69388.call(null,G__69386));
})()], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.simplify.rules.odd_positive_integer_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(function (p__69389){
var map__69390 = p__69389;
var map__69390__$1 = cljs.core.__destructure_map(map__69390);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69390__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69390__$1,new cljs.core.Symbol(null,"?n","?n",-2053238410,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
var half_dec_n = emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic._.cljs$core$IFn$_invoke$arity$2(n,(1)),(2));
if(cljs.core.truth_(emmy.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),xs,n], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),xs,half_dec_n], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})(),new cljs.core.Symbol(null,"simsqrt2","simsqrt2",-1794028771,null)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"?new-n","?new-n",-1095502685,null),half_dec_n], null);
} else {
return null;
}
})),(function (G__69391){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__69392 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69392.cljs$core$IFn$_invoke$arity$1 ? fexpr__69392.cljs$core$IFn$_invoke$arity$1(G__69391) : fexpr__69392.call(null,G__69391));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__69393 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69393.cljs$core$IFn$_invoke$arity$1 ? fexpr__69393.cljs$core$IFn$_invoke$arity$1(G__69391) : fexpr__69393.call(null,G__69391));
})(),(function (){var fexpr__69394 = new cljs.core.Symbol(null,"?new-n","?new-n",-1095502685,null);
return (fexpr__69394.cljs$core$IFn$_invoke$arity$1 ? fexpr__69394.cljs$core$IFn$_invoke$arity$1(G__69391) : fexpr__69394.call(null,G__69391));
})()], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
}))], 0)))], 0)),emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.simplify.rules.odd_integer_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__69395){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__69396 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69396.cljs$core$IFn$_invoke$arity$1 ? fexpr__69396.cljs$core$IFn$_invoke$arity$1(G__69395) : fexpr__69396.call(null,G__69395));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__69397 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69397.cljs$core$IFn$_invoke$arity$1 ? fexpr__69397.cljs$core$IFn$_invoke$arity$1(G__69395) : fexpr__69397.call(null,G__69395));
})(),(function (p1__69380_SHARP_){
return emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic._.cljs$core$IFn$_invoke$arity$2((function (){var G__69398 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__69380_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__69380_SHARP_.cljs$core$IFn$_invoke$arity$1(G__69398) : p1__69380_SHARP_.call(null,G__69398));
})(),(1)),(2));
})(G__69395)], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__69399){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__69400 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69400.cljs$core$IFn$_invoke$arity$1 ? fexpr__69400.cljs$core$IFn$_invoke$arity$1(G__69399) : fexpr__69400.call(null,G__69399));
})()], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__69401){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__69402 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69402.cljs$core$IFn$_invoke$arity$1 ? fexpr__69402.cljs$core$IFn$_invoke$arity$1(G__69401) : fexpr__69402.call(null,G__69401));
})()], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??u","??u",788654559,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??v","??v",2028946795,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__69403){
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__69404 = new cljs.core.Symbol(null,"??u","??u",788654559,null);
return (fexpr__69404.cljs$core$IFn$_invoke$arity$1 ? fexpr__69404.cljs$core$IFn$_invoke$arity$1(G__69403) : fexpr__69404.call(null,G__69403));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__69405 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69405.cljs$core$IFn$_invoke$arity$1 ? fexpr__69405.cljs$core$IFn$_invoke$arity$1(G__69403) : fexpr__69405.call(null,G__69403));
})()], null))], null),(function (){var fexpr__69406 = new cljs.core.Symbol(null,"??v","??v",2028946795,null);
return (fexpr__69406.cljs$core$IFn$_invoke$arity$1 ? fexpr__69406.cljs$core$IFn$_invoke$arity$1(G__69403) : fexpr__69406.call(null,G__69403));
})()], 0)));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??u","??u",788654559,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??v","??v",2028946795,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__69407){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__69408 = new cljs.core.Symbol(null,"??u","??u",788654559,null);
return (fexpr__69408.cljs$core$IFn$_invoke$arity$1 ? fexpr__69408.cljs$core$IFn$_invoke$arity$1(G__69407) : fexpr__69408.call(null,G__69407));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__69409 = new cljs.core.Symbol(null,"??v","??v",2028946795,null);
return (fexpr__69409.cljs$core$IFn$_invoke$arity$1 ? fexpr__69409.cljs$core$IFn$_invoke$arity$1(G__69407) : fexpr__69409.call(null,G__69407));
})()], 0))),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__69410 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69410.cljs$core$IFn$_invoke$arity$1 ? fexpr__69410.cljs$core$IFn$_invoke$arity$1(G__69407) : fexpr__69410.call(null,G__69407));
})()], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??u","??u",788654559,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??v","??v",2028946795,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__69411){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__69412 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69412.cljs$core$IFn$_invoke$arity$1 ? fexpr__69412.cljs$core$IFn$_invoke$arity$1(G__69411) : fexpr__69412.call(null,G__69411));
})()], null)),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__69413 = new cljs.core.Symbol(null,"??u","??u",788654559,null);
return (fexpr__69413.cljs$core$IFn$_invoke$arity$1 ? fexpr__69413.cljs$core$IFn$_invoke$arity$1(G__69411) : fexpr__69413.call(null,G__69411));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__69414 = new cljs.core.Symbol(null,"??v","??v",2028946795,null);
return (fexpr__69414.cljs$core$IFn$_invoke$arity$1 ? fexpr__69414.cljs$core$IFn$_invoke$arity$1(G__69411) : fexpr__69414.call(null,G__69411));
})()], 0)))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??u","??u",788654559,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??v","??v",2028946795,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__69415){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__69416 = new cljs.core.Symbol(null,"??u","??u",788654559,null);
return (fexpr__69416.cljs$core$IFn$_invoke$arity$1 ? fexpr__69416.cljs$core$IFn$_invoke$arity$1(G__69415) : fexpr__69416.call(null,G__69415));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__69417 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69417.cljs$core$IFn$_invoke$arity$1 ? fexpr__69417.cljs$core$IFn$_invoke$arity$1(G__69415) : fexpr__69417.call(null,G__69415));
})()], null))], null),(function (){var fexpr__69418 = new cljs.core.Symbol(null,"??v","??v",2028946795,null);
return (fexpr__69418.cljs$core$IFn$_invoke$arity$1 ? fexpr__69418.cljs$core$IFn$_invoke$arity$1(G__69415) : fexpr__69418.call(null,G__69415));
})()], 0)))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??p","??p",1112654910,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??q","??q",253374785,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??u","??u",788654559,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??v","??v",2028946795,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__69419){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__69420 = new cljs.core.Symbol(null,"??p","??p",1112654910,null);
return (fexpr__69420.cljs$core$IFn$_invoke$arity$1 ? fexpr__69420.cljs$core$IFn$_invoke$arity$1(G__69419) : fexpr__69420.call(null,G__69419));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__69421 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69421.cljs$core$IFn$_invoke$arity$1 ? fexpr__69421.cljs$core$IFn$_invoke$arity$1(G__69419) : fexpr__69421.call(null,G__69419));
})()], null))], null),(function (){var fexpr__69422 = new cljs.core.Symbol(null,"??q","??q",253374785,null);
return (fexpr__69422.cljs$core$IFn$_invoke$arity$1 ? fexpr__69422.cljs$core$IFn$_invoke$arity$1(G__69419) : fexpr__69422.call(null,G__69419));
})()], 0))),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__69423 = new cljs.core.Symbol(null,"??u","??u",788654559,null);
return (fexpr__69423.cljs$core$IFn$_invoke$arity$1 ? fexpr__69423.cljs$core$IFn$_invoke$arity$1(G__69419) : fexpr__69423.call(null,G__69419));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__69424 = new cljs.core.Symbol(null,"??v","??v",2028946795,null);
return (fexpr__69424.cljs$core$IFn$_invoke$arity$1 ? fexpr__69424.cljs$core$IFn$_invoke$arity$1(G__69419) : fexpr__69424.call(null,G__69419));
})()], 0)))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??p","??p",1112654910,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??q","??q",253374785,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??u","??u",788654559,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??v","??v",2028946795,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__69425){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__69426 = new cljs.core.Symbol(null,"??p","??p",1112654910,null);
return (fexpr__69426.cljs$core$IFn$_invoke$arity$1 ? fexpr__69426.cljs$core$IFn$_invoke$arity$1(G__69425) : fexpr__69426.call(null,G__69425));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__69427 = new cljs.core.Symbol(null,"??q","??q",253374785,null);
return (fexpr__69427.cljs$core$IFn$_invoke$arity$1 ? fexpr__69427.cljs$core$IFn$_invoke$arity$1(G__69425) : fexpr__69427.call(null,G__69425));
})()], 0))),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__69428 = new cljs.core.Symbol(null,"??u","??u",788654559,null);
return (fexpr__69428.cljs$core$IFn$_invoke$arity$1 ? fexpr__69428.cljs$core$IFn$_invoke$arity$1(G__69425) : fexpr__69428.call(null,G__69425));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__69429 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69429.cljs$core$IFn$_invoke$arity$1 ? fexpr__69429.cljs$core$IFn$_invoke$arity$1(G__69425) : fexpr__69429.call(null,G__69425));
})()], null))], null),(function (){var fexpr__69430 = new cljs.core.Symbol(null,"??v","??v",2028946795,null);
return (fexpr__69430.cljs$core$IFn$_invoke$arity$1 ? fexpr__69430.cljs$core$IFn$_invoke$arity$1(G__69425) : fexpr__69430.call(null,G__69425));
})()], 0)))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
}))], 0))], 0));
});
/**
 * Takes one or two simplified expressions `x` and `y` and a symbolic identifier
 *   `id` and registers an assumption that both sides are non-negative.
 * 
 *   Returns the conjuction of both assumptions in the two argument case, or the
 *   single assumption in the one-argument case.
 */
emmy.simplify.rules.non_negative_factors_BANG_ = (function emmy$simplify$rules$non_negative_factors_BANG_(var_args){
var G__69432 = arguments.length;
switch (G__69432) {
case 2:
return emmy.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return emmy.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,id){
return emmy.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"non-negative?","non-negative?",1248641804,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),id,(function (){
return false;
}));
}));

(emmy.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,id){
return ((emmy.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"non-negative?","non-negative?",1248641804,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),id,(function (){
return false;
}))) && (emmy.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"non-negative?","non-negative?",1248641804,null),null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),id,(function (){
return false;
}))));
}));

(emmy.simplify.rules.non_negative_factors_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Returns a rule simplifier that distributes the radical sign across products and
 *   quotients. The companion rule [[sqrt-contract]] reassembles what remains.
 * 
 *   NOTE that doing this may allow equal subexpressions within the radicals to
 *   cancel in various ways.
 * 
 *   Turn this simplifier on and off with [[*sqrt-factor-simplify?*]].
 */
emmy.simplify.rules.sqrt_expand = (function emmy$simplify$rules$sqrt_expand(simplify){
var pred = (function emmy$simplify$rules$sqrt_expand_$_pred(label){
return (function (p__69435){
var map__69436 = p__69435;
var map__69436__$1 = cljs.core.__destructure_map(map__69436);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69436__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69436__$1,new cljs.core.Symbol(null,"?y","?y",-1454470631,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
var ys = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(y) : simplify.call(null,y));
if(cljs.core.truth_(emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(xs,ys))){
return emmy.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$2(xs,label);
} else {
return emmy.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$3(xs,ys,label);
}
});
});
return emmy.pattern.rule.attempt(emmy.pattern.rule.guard((function (_){
return emmy.simplify.rules._STAR_sqrt_factor_simplify_QMARK__STAR_;
}),emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pred(new cljs.core.Symbol(null,"e1","e1",-732861271,null))),(function (G__69437){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__69438 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69438.cljs$core$IFn$_invoke$arity$1 ? fexpr__69438.cljs$core$IFn$_invoke$arity$1(G__69437) : fexpr__69438.call(null,G__69437));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__69439 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__69439.cljs$core$IFn$_invoke$arity$1 ? fexpr__69439.cljs$core$IFn$_invoke$arity$1(G__69437) : fexpr__69439.call(null,G__69437));
})()], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??ys","??ys",1180811471,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),pred(new cljs.core.Symbol(null,"e2","e2",1288255343,null))),(function (G__69440){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__69441 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69441.cljs$core$IFn$_invoke$arity$1 ? fexpr__69441.cljs$core$IFn$_invoke$arity$1(G__69440) : fexpr__69441.call(null,G__69440));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__69442 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__69442.cljs$core$IFn$_invoke$arity$1 ? fexpr__69442.cljs$core$IFn$_invoke$arity$1(G__69440) : fexpr__69442.call(null,G__69440));
})()], null),(function (){var fexpr__69443 = new cljs.core.Symbol(null,"??ys","??ys",1180811471,null);
return (fexpr__69443.cljs$core$IFn$_invoke$arity$1 ? fexpr__69443.cljs$core$IFn$_invoke$arity$1(G__69440) : fexpr__69443.call(null,G__69440));
})()))], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pred(new cljs.core.Symbol(null,"e3","e3",980159791,null))),(function (G__69444){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__69445 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69445.cljs$core$IFn$_invoke$arity$1 ? fexpr__69445.cljs$core$IFn$_invoke$arity$1(G__69444) : fexpr__69445.call(null,G__69444));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__69446 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__69446.cljs$core$IFn$_invoke$arity$1 ? fexpr__69446.cljs$core$IFn$_invoke$arity$1(G__69444) : fexpr__69446.call(null,G__69444));
})()], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??ys","??ys",1180811471,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),pred(new cljs.core.Symbol(null,"e4","e4",-714258248,null))),(function (G__69447){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__69448 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69448.cljs$core$IFn$_invoke$arity$1 ? fexpr__69448.cljs$core$IFn$_invoke$arity$1(G__69447) : fexpr__69448.call(null,G__69447));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__69449 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__69449.cljs$core$IFn$_invoke$arity$1 ? fexpr__69449.cljs$core$IFn$_invoke$arity$1(G__69447) : fexpr__69449.call(null,G__69447));
})()], null),(function (){var fexpr__69450 = new cljs.core.Symbol(null,"??ys","??ys",1180811471,null);
return (fexpr__69450.cljs$core$IFn$_invoke$arity$1 ? fexpr__69450.cljs$core$IFn$_invoke$arity$1(G__69447) : fexpr__69450.call(null,G__69447));
})()))], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
}))], 0))], 0))));
});
emmy.simplify.rules.sqrt_contract = (function emmy$simplify$rules$sqrt_contract(simplify){
return emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??c","??c",1219586074,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null))),(function (p__69451){
var map__69452 = p__69451;
var map__69452__$1 = cljs.core.__destructure_map(map__69452);
var m = map__69452__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69452__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69452__$1,new cljs.core.Symbol(null,"?y","?y",-1454470631,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
var ys = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(y) : simplify.call(null,y));
if(cljs.core.truth_(emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(xs,ys))){
var and__5160__auto__ = emmy.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$2(xs,new cljs.core.Symbol(null,"c1","c1",-1521904966,null));
if(and__5160__auto__){
var G__69453 = m;
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__69454 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__69454.cljs$core$IFn$_invoke$arity$1 ? fexpr__69454.cljs$core$IFn$_invoke$arity$1(G__69453) : fexpr__69454.call(null,G__69453));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs], null),(function (){var fexpr__69455 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__69455.cljs$core$IFn$_invoke$arity$1 ? fexpr__69455.cljs$core$IFn$_invoke$arity$1(G__69453) : fexpr__69455.call(null,G__69453));
})(),(function (){var fexpr__69456 = new cljs.core.Symbol(null,"??c","??c",1219586074,null);
return (fexpr__69456.cljs$core$IFn$_invoke$arity$1 ? fexpr__69456.cljs$core$IFn$_invoke$arity$1(G__69453) : fexpr__69456.call(null,G__69453));
})()], 0)));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
} else {
return and__5160__auto__;
}
} else {
var and__5160__auto__ = emmy.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$3(xs,ys,new cljs.core.Symbol(null,"c1","c1",-1521904966,null));
if(and__5160__auto__){
var G__69457 = m;
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__69458 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__69458.cljs$core$IFn$_invoke$arity$1 ? fexpr__69458.cljs$core$IFn$_invoke$arity$1(G__69457) : fexpr__69458.call(null,G__69457));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),xs,ys], null))], null))], null),(function (){var fexpr__69459 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__69459.cljs$core$IFn$_invoke$arity$1 ? fexpr__69459.cljs$core$IFn$_invoke$arity$1(G__69457) : fexpr__69459.call(null,G__69457));
})(),(function (){var fexpr__69460 = new cljs.core.Symbol(null,"??c","??c",1219586074,null);
return (fexpr__69460.cljs$core$IFn$_invoke$arity$1 ? fexpr__69460.cljs$core$IFn$_invoke$arity$1(G__69457) : fexpr__69460.call(null,G__69457));
})()], 0)));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
} else {
return and__5160__auto__;
}
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null))),(function (p__69461){
var map__69462 = p__69461;
var map__69462__$1 = cljs.core.__destructure_map(map__69462);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69462__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69462__$1,new cljs.core.Symbol(null,"?y","?y",-1454470631,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
var ys = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(y) : simplify.call(null,y));
if(cljs.core.truth_(emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(xs,ys))){
var and__5160__auto__ = emmy.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$2(xs,new cljs.core.Symbol(null,"c2","c2",78651156,null));
if(and__5160__auto__){
return (1);
} else {
return and__5160__auto__;
}
} else {
var and__5160__auto__ = emmy.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$3(xs,ys,new cljs.core.Symbol(null,"c2","c2",78651156,null));
if(and__5160__auto__){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),xs,ys], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
} else {
return and__5160__auto__;
}
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null))),(function (p__69463){
var map__69464 = p__69463;
var map__69464__$1 = cljs.core.__destructure_map(map__69464);
var m = map__69464__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69464__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69464__$1,new cljs.core.Symbol(null,"?y","?y",-1454470631,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
var ys = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(y) : simplify.call(null,y));
if(cljs.core.truth_(emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(xs,ys))){
var and__5160__auto__ = emmy.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$2(xs,new cljs.core.Symbol(null,"c3","c3",468715789,null));
if(and__5160__auto__){
var G__69465 = m;
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__69466 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__69466.cljs$core$IFn$_invoke$arity$1 ? fexpr__69466.cljs$core$IFn$_invoke$arity$1(G__69465) : fexpr__69466.call(null,G__69465));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__69467 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__69467.cljs$core$IFn$_invoke$arity$1 ? fexpr__69467.cljs$core$IFn$_invoke$arity$1(G__69465) : fexpr__69467.call(null,G__69465));
})()], 0)));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
} else {
return and__5160__auto__;
}
} else {
var and__5160__auto__ = emmy.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$3(xs,ys,new cljs.core.Symbol(null,"c3","c3",468715789,null));
if(and__5160__auto__){
var G__69468 = m;
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__69469 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__69469.cljs$core$IFn$_invoke$arity$1 ? fexpr__69469.cljs$core$IFn$_invoke$arity$1(G__69468) : fexpr__69469.call(null,G__69468));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),xs,ys], null))], null))], null),(function (){var fexpr__69470 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__69470.cljs$core$IFn$_invoke$arity$1 ? fexpr__69470.cljs$core$IFn$_invoke$arity$1(G__69468) : fexpr__69470.call(null,G__69468));
})()], 0)));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
} else {
return and__5160__auto__;
}
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),(3),null))),(function (p__69471){
var map__69472 = p__69471;
var map__69472__$1 = cljs.core.__destructure_map(map__69472);
var m = map__69472__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69472__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69472__$1,new cljs.core.Symbol(null,"?y","?y",-1454470631,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
var ys = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(y) : simplify.call(null,y));
if(cljs.core.truth_(emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(xs,ys))){
var and__5160__auto__ = emmy.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$2(xs,new cljs.core.Symbol(null,"c4","c4",-1626390159,null));
if(and__5160__auto__){
var G__69473 = m;
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__69474 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__69474.cljs$core$IFn$_invoke$arity$1 ? fexpr__69474.cljs$core$IFn$_invoke$arity$1(G__69473) : fexpr__69474.call(null,G__69473));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__69475 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__69475.cljs$core$IFn$_invoke$arity$1 ? fexpr__69475.cljs$core$IFn$_invoke$arity$1(G__69473) : fexpr__69475.call(null,G__69473));
})()], 0)))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
} else {
return and__5160__auto__;
}
} else {
var and__5160__auto__ = emmy.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$3(xs,ys,new cljs.core.Symbol(null,"c4","c4",-1626390159,null));
if(and__5160__auto__){
var G__69476 = m;
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),xs,ys], null))], null)),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__69477 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__69477.cljs$core$IFn$_invoke$arity$1 ? fexpr__69477.cljs$core$IFn$_invoke$arity$1(G__69476) : fexpr__69477.call(null,G__69476));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__69478 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__69478.cljs$core$IFn$_invoke$arity$1 ? fexpr__69478.cljs$core$IFn$_invoke$arity$1(G__69476) : fexpr__69478.call(null,G__69476));
})()], 0)))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
} else {
return and__5160__auto__;
}
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??c","??c",1219586074,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??d","??d",-581862453,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),(3),null))),(function (p__69479){
var map__69480 = p__69479;
var map__69480__$1 = cljs.core.__destructure_map(map__69480);
var m = map__69480__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69480__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69480__$1,new cljs.core.Symbol(null,"?y","?y",-1454470631,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
var ys = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(y) : simplify.call(null,y));
if(cljs.core.truth_(emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(xs,ys))){
var and__5160__auto__ = emmy.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$2(xs,new cljs.core.Symbol(null,"c5","c5",1025457982,null));
if(and__5160__auto__){
var G__69481 = m;
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__69482 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__69482.cljs$core$IFn$_invoke$arity$1 ? fexpr__69482.cljs$core$IFn$_invoke$arity$1(G__69481) : fexpr__69482.call(null,G__69481));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__69483 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__69483.cljs$core$IFn$_invoke$arity$1 ? fexpr__69483.cljs$core$IFn$_invoke$arity$1(G__69481) : fexpr__69483.call(null,G__69481));
})()], 0))),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__69484 = new cljs.core.Symbol(null,"??c","??c",1219586074,null);
return (fexpr__69484.cljs$core$IFn$_invoke$arity$1 ? fexpr__69484.cljs$core$IFn$_invoke$arity$1(G__69481) : fexpr__69484.call(null,G__69481));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__69485 = new cljs.core.Symbol(null,"??d","??d",-581862453,null);
return (fexpr__69485.cljs$core$IFn$_invoke$arity$1 ? fexpr__69485.cljs$core$IFn$_invoke$arity$1(G__69481) : fexpr__69485.call(null,G__69481));
})()], 0)))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
} else {
return and__5160__auto__;
}
} else {
var and__5160__auto__ = emmy.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$3(xs,ys,new cljs.core.Symbol(null,"c5","c5",1025457982,null));
if(and__5160__auto__){
var G__69486 = m;
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__69487 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__69487.cljs$core$IFn$_invoke$arity$1 ? fexpr__69487.cljs$core$IFn$_invoke$arity$1(G__69486) : fexpr__69487.call(null,G__69486));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),xs,ys], null))], null))], null),(function (){var fexpr__69488 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__69488.cljs$core$IFn$_invoke$arity$1 ? fexpr__69488.cljs$core$IFn$_invoke$arity$1(G__69486) : fexpr__69488.call(null,G__69486));
})()], 0))),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__69489 = new cljs.core.Symbol(null,"??c","??c",1219586074,null);
return (fexpr__69489.cljs$core$IFn$_invoke$arity$1 ? fexpr__69489.cljs$core$IFn$_invoke$arity$1(G__69486) : fexpr__69489.call(null,G__69486));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__69490 = new cljs.core.Symbol(null,"??d","??d",-581862453,null);
return (fexpr__69490.cljs$core$IFn$_invoke$arity$1 ? fexpr__69490.cljs$core$IFn$_invoke$arity$1(G__69486) : fexpr__69490.call(null,G__69486));
})()], 0)))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
} else {
return and__5160__auto__;
}
}
}))], 0))], 0));
});
emmy.simplify.rules.specfun__GT_logexp = (function (){var two_i = emmy.complex.complex.cljs$core$IFn$_invoke$arity$2(0.0,2.0);
return emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69491){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),(function (){var fexpr__69492 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69492.cljs$core$IFn$_invoke$arity$1 ? fexpr__69492.cljs$core$IFn$_invoke$arity$1(G__69491) : fexpr__69492.call(null,G__69491));
})()], null))], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?z","?z",711595547,null),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69493){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.complex.I,(function (){var fexpr__69494 = new cljs.core.Symbol(null,"?z","?z",711595547,null);
return (fexpr__69494.cljs$core$IFn$_invoke$arity$1 ? fexpr__69494.cljs$core$IFn$_invoke$arity$1(G__69493) : fexpr__69494.call(null,G__69493));
})()], null))], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.complex.I,(function (){var fexpr__69495 = new cljs.core.Symbol(null,"?z","?z",711595547,null);
return (fexpr__69495.cljs$core$IFn$_invoke$arity$1 ? fexpr__69495.cljs$core$IFn$_invoke$arity$1(G__69493) : fexpr__69495.call(null,G__69493));
})()], null))], null))], null))], null)),two_i], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"asin","asin",-904130570,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?z","?z",711595547,null),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69496){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.generic._.cljs$core$IFn$_invoke$arity$1(emmy.complex.I),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.complex.I,(function (){var fexpr__69497 = new cljs.core.Symbol(null,"?z","?z",711595547,null);
return (fexpr__69497.cljs$core$IFn$_invoke$arity$1 ? fexpr__69497.cljs$core$IFn$_invoke$arity$1(G__69496) : fexpr__69497.call(null,G__69496));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__69498 = new cljs.core.Symbol(null,"?z","?z",711595547,null);
return (fexpr__69498.cljs$core$IFn$_invoke$arity$1 ? fexpr__69498.cljs$core$IFn$_invoke$arity$1(G__69496) : fexpr__69498.call(null,G__69496));
})(),(2)], null))], null))], null))], null))], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"acos","acos",353741763,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?z","?z",711595547,null),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69499){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.generic._.cljs$core$IFn$_invoke$arity$1(emmy.complex.I),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__69500 = new cljs.core.Symbol(null,"?z","?z",711595547,null);
return (fexpr__69500.cljs$core$IFn$_invoke$arity$1 ? fexpr__69500.cljs$core$IFn$_invoke$arity$1(G__69499) : fexpr__69500.call(null,G__69499));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.complex.I,cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__69501 = new cljs.core.Symbol(null,"?z","?z",711595547,null);
return (fexpr__69501.cljs$core$IFn$_invoke$arity$1 ? fexpr__69501.cljs$core$IFn$_invoke$arity$1(G__69499) : fexpr__69501.call(null,G__69499));
})(),(2)], null))], null))], null))], null))], null))], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sinh","sinh",-990423302,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?u","?u",749886731,null),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69502){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (){var fexpr__69503 = new cljs.core.Symbol(null,"?u","?u",749886731,null);
return (fexpr__69503.cljs$core$IFn$_invoke$arity$1 ? fexpr__69503.cljs$core$IFn$_invoke$arity$1(G__69502) : fexpr__69503.call(null,G__69502));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(-1),(function (){var fexpr__69504 = new cljs.core.Symbol(null,"?u","?u",749886731,null);
return (fexpr__69504.cljs$core$IFn$_invoke$arity$1 ? fexpr__69504.cljs$core$IFn$_invoke$arity$1(G__69502) : fexpr__69504.call(null,G__69502));
})()], null))], null))], null)),(2)], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?u","?u",749886731,null),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69505){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (){var fexpr__69506 = new cljs.core.Symbol(null,"?u","?u",749886731,null);
return (fexpr__69506.cljs$core$IFn$_invoke$arity$1 ? fexpr__69506.cljs$core$IFn$_invoke$arity$1(G__69505) : fexpr__69506.call(null,G__69505));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(-1),(function (){var fexpr__69507 = new cljs.core.Symbol(null,"?u","?u",749886731,null);
return (fexpr__69507.cljs$core$IFn$_invoke$arity$1 ? fexpr__69507.cljs$core$IFn$_invoke$arity$1(G__69505) : fexpr__69507.call(null,G__69505));
})()], null))], null))], null)),(2)], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),(new cljs.core.List(null,emmy.simplify.rules.not_integral_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__69508){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__69509 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__69509.cljs$core$IFn$_invoke$arity$1 ? fexpr__69509.cljs$core$IFn$_invoke$arity$1(G__69508) : fexpr__69509.call(null,G__69508));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),(function (){var fexpr__69510 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69510.cljs$core$IFn$_invoke$arity$1 ? fexpr__69510.cljs$core$IFn$_invoke$arity$1(G__69508) : fexpr__69510.call(null,G__69508));
})()], null))], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
}))], 0))], 0));
})();
emmy.simplify.rules.logexp__GT_specfun = emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(-1),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69511){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__69512 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69512.cljs$core$IFn$_invoke$arity$1 ? fexpr__69512.cljs$core$IFn$_invoke$arity$1(G__69511) : fexpr__69512.call(null,G__69511));
})(),(-1)], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(1),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69513){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__69514 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69514.cljs$core$IFn$_invoke$arity$1 ? fexpr__69514.cljs$core$IFn$_invoke$arity$1(G__69513) : fexpr__69514.call(null,G__69513));
})()], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(-1),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69515){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__69516 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69516.cljs$core$IFn$_invoke$arity$1 ? fexpr__69516.cljs$core$IFn$_invoke$arity$1(G__69515) : fexpr__69516.call(null,G__69515));
})()], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(3),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69517){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__69518 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69518.cljs$core$IFn$_invoke$arity$1 ? fexpr__69518.cljs$core$IFn$_invoke$arity$1(G__69517) : fexpr__69518.call(null,G__69517));
})()], null)),(3)], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(-3),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69519){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__69520 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69520.cljs$core$IFn$_invoke$arity$1 ? fexpr__69520.cljs$core$IFn$_invoke$arity$1(G__69519) : fexpr__69520.call(null,G__69519));
})()], null)),(-3)], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??n1","??n1",-1325838299,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??n2","??n2",-1403574689,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69521){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__69522 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69522.cljs$core$IFn$_invoke$arity$1 ? fexpr__69522.cljs$core$IFn$_invoke$arity$1(G__69521) : fexpr__69522.call(null,G__69521));
})(),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__69523 = new cljs.core.Symbol(null,"??n1","??n1",-1325838299,null);
return (fexpr__69523.cljs$core$IFn$_invoke$arity$1 ? fexpr__69523.cljs$core$IFn$_invoke$arity$1(G__69521) : fexpr__69523.call(null,G__69521));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__69524 = new cljs.core.Symbol(null,"??n2","??n2",-1403574689,null);
return (fexpr__69524.cljs$core$IFn$_invoke$arity$1 ? fexpr__69524.cljs$core$IFn$_invoke$arity$1(G__69521) : fexpr__69524.call(null,G__69521));
})()], 0)))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
}))], 0))], 0));
emmy.simplify.rules.log_contract = (function emmy$simplify$rules$log_contract(simplify){
return emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x1","??x1",-1923305193,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x2","?x2",1502785613,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x3","??x3",-411077265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x4","?x4",94899597,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x5","??x5",1822045235,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),emmy.pattern.rule._EQ__GT_),(function (G__69525){
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null)], null),(function (){var fexpr__69526 = new cljs.core.Symbol(null,"??x1","??x1",-1923305193,null);
return (fexpr__69526.cljs$core$IFn$_invoke$arity$1 ? fexpr__69526.cljs$core$IFn$_invoke$arity$1(G__69525) : fexpr__69526.call(null,G__69525));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__69527 = new cljs.core.Symbol(null,"??x3","??x3",-411077265,null);
return (fexpr__69527.cljs$core$IFn$_invoke$arity$1 ? fexpr__69527.cljs$core$IFn$_invoke$arity$1(G__69525) : fexpr__69527.call(null,G__69525));
})(),(function (){var fexpr__69528 = new cljs.core.Symbol(null,"??x5","??x5",1822045235,null);
return (fexpr__69528.cljs$core$IFn$_invoke$arity$1 ? fexpr__69528.cljs$core$IFn$_invoke$arity$1(G__69525) : fexpr__69528.call(null,G__69525));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__69529 = new cljs.core.Symbol(null,"?x2","?x2",1502785613,null);
return (fexpr__69529.cljs$core$IFn$_invoke$arity$1 ? fexpr__69529.cljs$core$IFn$_invoke$arity$1(G__69525) : fexpr__69529.call(null,G__69525));
})(),(function (){var fexpr__69530 = new cljs.core.Symbol(null,"?x4","?x4",94899597,null);
return (fexpr__69530.cljs$core$IFn$_invoke$arity$1 ? fexpr__69530.cljs$core$IFn$_invoke$arity$1(G__69525) : fexpr__69530.call(null,G__69525));
})()], null))], null))], null)], 0)));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"-","-",-471816912,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__69531){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(function (){var fexpr__69532 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69532.cljs$core$IFn$_invoke$arity$1 ? fexpr__69532.cljs$core$IFn$_invoke$arity$1(G__69531) : fexpr__69532.call(null,G__69531));
})(),(function (){var fexpr__69533 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__69533.cljs$core$IFn$_invoke$arity$1 ? fexpr__69533.cljs$core$IFn$_invoke$arity$1(G__69531) : fexpr__69533.call(null,G__69531));
})()], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x1","??x1",-1923305193,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f1","??f1",-1548442439,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f2","??f2",745277317,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x2","??x2",169445330,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f3","??f3",-1809203400,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f4","??f4",1817370441,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x3","??x3",-411077265,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),(function (m){
var s1 = (function (){var G__69534 = (function (){var G__69535 = m;
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__69536 = new cljs.core.Symbol(null,"??f1","??f1",-1548442439,null);
return (fexpr__69536.cljs$core$IFn$_invoke$arity$1 ? fexpr__69536.cljs$core$IFn$_invoke$arity$1(G__69535) : fexpr__69536.call(null,G__69535));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__69537 = new cljs.core.Symbol(null,"??f2","??f2",745277317,null);
return (fexpr__69537.cljs$core$IFn$_invoke$arity$1 ? fexpr__69537.cljs$core$IFn$_invoke$arity$1(G__69535) : fexpr__69537.call(null,G__69535));
})()], 0)));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__69534) : simplify.call(null,G__69534));
})();
var s2 = (function (){var G__69538 = (function (){var G__69539 = m;
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__69540 = new cljs.core.Symbol(null,"??f3","??f3",-1809203400,null);
return (fexpr__69540.cljs$core$IFn$_invoke$arity$1 ? fexpr__69540.cljs$core$IFn$_invoke$arity$1(G__69539) : fexpr__69540.call(null,G__69539));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__69541 = new cljs.core.Symbol(null,"??f4","??f4",1817370441,null);
return (fexpr__69541.cljs$core$IFn$_invoke$arity$1 ? fexpr__69541.cljs$core$IFn$_invoke$arity$1(G__69539) : fexpr__69541.call(null,G__69539));
})()], 0)));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__69538) : simplify.call(null,G__69538));
})();
if(cljs.core.truth_(emmy.generic.exact_zero_QMARK_((function (){var G__69542 = (new cljs.core.List(null,new cljs.core.Symbol(null,"-","-",-471816912,null),(new cljs.core.List(null,s1,(new cljs.core.List(null,s2,null,(1),null)),(2),null)),(3),null));
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__69542) : simplify.call(null,G__69542));
})()))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"?s1","?s1",-1174751069,null),s1], null);
} else {
return null;
}
})),(function (G__69543){
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__69544 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69544.cljs$core$IFn$_invoke$arity$1 ? fexpr__69544.cljs$core$IFn$_invoke$arity$1(G__69543) : fexpr__69544.call(null,G__69543));
})(),(function (){var fexpr__69545 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__69545.cljs$core$IFn$_invoke$arity$1 ? fexpr__69545.cljs$core$IFn$_invoke$arity$1(G__69543) : fexpr__69545.call(null,G__69543));
})()], null))], null)),(function (){var fexpr__69546 = new cljs.core.Symbol(null,"?s1","?s1",-1174751069,null);
return (fexpr__69546.cljs$core$IFn$_invoke$arity$1 ? fexpr__69546.cljs$core$IFn$_invoke$arity$1(G__69543) : fexpr__69546.call(null,G__69543));
})()], null))], null),(function (){var fexpr__69547 = new cljs.core.Symbol(null,"??x1","??x1",-1923305193,null);
return (fexpr__69547.cljs$core$IFn$_invoke$arity$1 ? fexpr__69547.cljs$core$IFn$_invoke$arity$1(G__69543) : fexpr__69547.call(null,G__69543));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__69548 = new cljs.core.Symbol(null,"??x2","??x2",169445330,null);
return (fexpr__69548.cljs$core$IFn$_invoke$arity$1 ? fexpr__69548.cljs$core$IFn$_invoke$arity$1(G__69543) : fexpr__69548.call(null,G__69543));
})(),(function (){var fexpr__69549 = new cljs.core.Symbol(null,"??x3","??x3",-411077265,null);
return (fexpr__69549.cljs$core$IFn$_invoke$arity$1 ? fexpr__69549.cljs$core$IFn$_invoke$arity$1(G__69543) : fexpr__69549.call(null,G__69543));
})()], 0)));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
}))], 0))], 0));
});
emmy.simplify.rules.log_expand = emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x1","?x1",697080023,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x2","?x2",1502785613,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69550){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),(function (){var fexpr__69551 = new cljs.core.Symbol(null,"?x1","?x1",697080023,null);
return (fexpr__69551.cljs$core$IFn$_invoke$arity$1 ? fexpr__69551.cljs$core$IFn$_invoke$arity$1(G__69550) : fexpr__69551.call(null,G__69550));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__69552 = new cljs.core.Symbol(null,"?x2","?x2",1502785613,null);
return (fexpr__69552.cljs$core$IFn$_invoke$arity$1 ? fexpr__69552.cljs$core$IFn$_invoke$arity$1(G__69550) : fexpr__69552.call(null,G__69550));
})()], null),(function (){var fexpr__69553 = new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null);
return (fexpr__69553.cljs$core$IFn$_invoke$arity$1 ? fexpr__69553.cljs$core$IFn$_invoke$arity$1(G__69550) : fexpr__69553.call(null,G__69550));
})()))], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x1","?x1",697080023,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x2","?x2",1502785613,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69554){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),(function (){var fexpr__69555 = new cljs.core.Symbol(null,"?x1","?x1",697080023,null);
return (fexpr__69555.cljs$core$IFn$_invoke$arity$1 ? fexpr__69555.cljs$core$IFn$_invoke$arity$1(G__69554) : fexpr__69555.call(null,G__69554));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),(function (){var fexpr__69556 = new cljs.core.Symbol(null,"?x2","?x2",1502785613,null);
return (fexpr__69556.cljs$core$IFn$_invoke$arity$1 ? fexpr__69556.cljs$core$IFn$_invoke$arity$1(G__69554) : fexpr__69556.call(null,G__69554));
})()], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?e","?e",-1194391683,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69557){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__69558 = new cljs.core.Symbol(null,"?e","?e",-1194391683,null);
return (fexpr__69558.cljs$core$IFn$_invoke$arity$1 ? fexpr__69558.cljs$core$IFn$_invoke$arity$1(G__69557) : fexpr__69558.call(null,G__69557));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),(function (){var fexpr__69559 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69559.cljs$core$IFn$_invoke$arity$1 ? fexpr__69559.cljs$core$IFn$_invoke$arity$1(G__69557) : fexpr__69559.call(null,G__69557));
})()], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
}))], 0))], 0));
emmy.simplify.rules.log_extra = emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.value.integral_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f1","??f1",-1548442439,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f2","??f2",745277317,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),emmy.pattern.rule._EQ__GT_),(function (G__69560){
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__69561 = new cljs.core.Symbol(null,"??f1","??f1",-1548442439,null);
return (fexpr__69561.cljs$core$IFn$_invoke$arity$1 ? fexpr__69561.cljs$core$IFn$_invoke$arity$1(G__69560) : fexpr__69561.call(null,G__69560));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__69562 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69562.cljs$core$IFn$_invoke$arity$1 ? fexpr__69562.cljs$core$IFn$_invoke$arity$1(G__69560) : fexpr__69562.call(null,G__69560));
})(),(function (){var fexpr__69563 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__69563.cljs$core$IFn$_invoke$arity$1 ? fexpr__69563.cljs$core$IFn$_invoke$arity$1(G__69560) : fexpr__69563.call(null,G__69560));
})()], null))], null))], null),(function (){var fexpr__69564 = new cljs.core.Symbol(null,"??f2","??f2",745277317,null);
return (fexpr__69564.cljs$core$IFn$_invoke$arity$1 ? fexpr__69564.cljs$core$IFn$_invoke$arity$1(G__69560) : fexpr__69564.call(null,G__69560));
})()], 0)));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
}))], 0))], 0));
emmy.simplify.rules.canonicalize_partials = emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??i","??i",-474049037,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??j","??j",1098328567,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69565){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__69566 = new cljs.core.Symbol(null,"??i","??i",-474049037,null);
return (fexpr__69566.cljs$core$IFn$_invoke$arity$1 ? fexpr__69566.cljs$core$IFn$_invoke$arity$1(G__69565) : fexpr__69566.call(null,G__69565));
})())),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__69567 = new cljs.core.Symbol(null,"??j","??j",1098328567,null);
return (fexpr__69567.cljs$core$IFn$_invoke$arity$1 ? fexpr__69567.cljs$core$IFn$_invoke$arity$1(G__69565) : fexpr__69567.call(null,G__69565));
})()))], null)),(function (){var fexpr__69568 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__69568.cljs$core$IFn$_invoke$arity$1 ? fexpr__69568.cljs$core$IFn$_invoke$arity$1(G__69565) : fexpr__69568.call(null,G__69565));
})()], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??i","??i",-474049037,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??j","??j",1098328567,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??more","??more",-1836200365,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69569){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__69570 = new cljs.core.Symbol(null,"??i","??i",-474049037,null);
return (fexpr__69570.cljs$core$IFn$_invoke$arity$1 ? fexpr__69570.cljs$core$IFn$_invoke$arity$1(G__69569) : fexpr__69570.call(null,G__69569));
})())),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__69571 = new cljs.core.Symbol(null,"??j","??j",1098328567,null);
return (fexpr__69571.cljs$core$IFn$_invoke$arity$1 ? fexpr__69571.cljs$core$IFn$_invoke$arity$1(G__69569) : fexpr__69571.call(null,G__69569));
})()))], null),(function (){var fexpr__69572 = new cljs.core.Symbol(null,"??more","??more",-1836200365,null);
return (fexpr__69572.cljs$core$IFn$_invoke$arity$1 ? fexpr__69572.cljs$core$IFn$_invoke$arity$1(G__69569) : fexpr__69572.call(null,G__69569));
})())),(function (){var fexpr__69573 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__69573.cljs$core$IFn$_invoke$arity$1 ? fexpr__69573.cljs$core$IFn$_invoke$arity$1(G__69569) : fexpr__69573.call(null,G__69569));
})()], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??i","??i",-474049037,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??j","??j",1098328567,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69574){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__69575 = new cljs.core.Symbol(null,"??i","??i",-474049037,null);
return (fexpr__69575.cljs$core$IFn$_invoke$arity$1 ? fexpr__69575.cljs$core$IFn$_invoke$arity$1(G__69574) : fexpr__69575.call(null,G__69574));
})())),(function (){var fexpr__69576 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__69576.cljs$core$IFn$_invoke$arity$1 ? fexpr__69576.cljs$core$IFn$_invoke$arity$1(G__69574) : fexpr__69576.call(null,G__69574));
})()], null)),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__69577 = new cljs.core.Symbol(null,"??j","??j",1098328567,null);
return (fexpr__69577.cljs$core$IFn$_invoke$arity$1 ? fexpr__69577.cljs$core$IFn$_invoke$arity$1(G__69574) : fexpr__69577.call(null,G__69574));
})()))], null)),(function (){var fexpr__69578 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__69578.cljs$core$IFn$_invoke$arity$1 ? fexpr__69578.cljs$core$IFn$_invoke$arity$1(G__69574) : fexpr__69578.call(null,G__69574));
})()], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??i","??i",-474049037,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??j","??j",1098328567,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69579){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__69580 = new cljs.core.Symbol(null,"??i","??i",-474049037,null);
return (fexpr__69580.cljs$core$IFn$_invoke$arity$1 ? fexpr__69580.cljs$core$IFn$_invoke$arity$1(G__69579) : fexpr__69580.call(null,G__69579));
})())),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__69581 = new cljs.core.Symbol(null,"??j","??j",1098328567,null);
return (fexpr__69581.cljs$core$IFn$_invoke$arity$1 ? fexpr__69581.cljs$core$IFn$_invoke$arity$1(G__69579) : fexpr__69581.call(null,G__69579));
})())),(function (){var fexpr__69582 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__69582.cljs$core$IFn$_invoke$arity$1 ? fexpr__69582.cljs$core$IFn$_invoke$arity$1(G__69579) : fexpr__69582.call(null,G__69579));
})()], null))], null)),(function (){var fexpr__69583 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__69583.cljs$core$IFn$_invoke$arity$1 ? fexpr__69583.cljs$core$IFn$_invoke$arity$1(G__69579) : fexpr__69583.call(null,G__69579));
})()], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??i","??i",-474049037,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??j","??j",1098328567,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?m","?m",896026745,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69584){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__69585 = new cljs.core.Symbol(null,"??i","??i",-474049037,null);
return (fexpr__69585.cljs$core$IFn$_invoke$arity$1 ? fexpr__69585.cljs$core$IFn$_invoke$arity$1(G__69584) : fexpr__69585.call(null,G__69584));
})())),(function (){var fexpr__69586 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__69586.cljs$core$IFn$_invoke$arity$1 ? fexpr__69586.cljs$core$IFn$_invoke$arity$1(G__69584) : fexpr__69586.call(null,G__69584));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__69587 = new cljs.core.Symbol(null,"??j","??j",1098328567,null);
return (fexpr__69587.cljs$core$IFn$_invoke$arity$1 ? fexpr__69587.cljs$core$IFn$_invoke$arity$1(G__69584) : fexpr__69587.call(null,G__69584));
})())),(function (){var fexpr__69588 = new cljs.core.Symbol(null,"?m","?m",896026745,null);
return (fexpr__69588.cljs$core$IFn$_invoke$arity$1 ? fexpr__69588.cljs$core$IFn$_invoke$arity$1(G__69584) : fexpr__69588.call(null,G__69584));
})()], null))], null)),(function (){var fexpr__69589 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__69589.cljs$core$IFn$_invoke$arity$1 ? fexpr__69589.cljs$core$IFn$_invoke$arity$1(G__69584) : fexpr__69589.call(null,G__69584));
})()], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??i","??i",-474049037,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??j","??j",1098328567,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??more","??more",-1836200365,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69590){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__69591 = new cljs.core.Symbol(null,"??i","??i",-474049037,null);
return (fexpr__69591.cljs$core$IFn$_invoke$arity$1 ? fexpr__69591.cljs$core$IFn$_invoke$arity$1(G__69590) : fexpr__69591.call(null,G__69590));
})())),(function (){var fexpr__69592 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__69592.cljs$core$IFn$_invoke$arity$1 ? fexpr__69592.cljs$core$IFn$_invoke$arity$1(G__69590) : fexpr__69592.call(null,G__69590));
})()], null)),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__69593 = new cljs.core.Symbol(null,"??j","??j",1098328567,null);
return (fexpr__69593.cljs$core$IFn$_invoke$arity$1 ? fexpr__69593.cljs$core$IFn$_invoke$arity$1(G__69590) : fexpr__69593.call(null,G__69590));
})()))], null),(function (){var fexpr__69594 = new cljs.core.Symbol(null,"??more","??more",-1836200365,null);
return (fexpr__69594.cljs$core$IFn$_invoke$arity$1 ? fexpr__69594.cljs$core$IFn$_invoke$arity$1(G__69590) : fexpr__69594.call(null,G__69590));
})())),(function (){var fexpr__69595 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__69595.cljs$core$IFn$_invoke$arity$1 ? fexpr__69595.cljs$core$IFn$_invoke$arity$1(G__69590) : fexpr__69595.call(null,G__69590));
})()], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??i","??i",-474049037,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??j","??j",1098328567,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?m","?m",896026745,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??more","??more",-1836200365,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69596){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__69597 = new cljs.core.Symbol(null,"??i","??i",-474049037,null);
return (fexpr__69597.cljs$core$IFn$_invoke$arity$1 ? fexpr__69597.cljs$core$IFn$_invoke$arity$1(G__69596) : fexpr__69597.call(null,G__69596));
})())),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__69598 = new cljs.core.Symbol(null,"??j","??j",1098328567,null);
return (fexpr__69598.cljs$core$IFn$_invoke$arity$1 ? fexpr__69598.cljs$core$IFn$_invoke$arity$1(G__69596) : fexpr__69598.call(null,G__69596));
})())),(function (){var fexpr__69599 = new cljs.core.Symbol(null,"?m","?m",896026745,null);
return (fexpr__69599.cljs$core$IFn$_invoke$arity$1 ? fexpr__69599.cljs$core$IFn$_invoke$arity$1(G__69596) : fexpr__69599.call(null,G__69596));
})()], null))], null),(function (){var fexpr__69600 = new cljs.core.Symbol(null,"??more","??more",-1836200365,null);
return (fexpr__69600.cljs$core$IFn$_invoke$arity$1 ? fexpr__69600.cljs$core$IFn$_invoke$arity$1(G__69596) : fexpr__69600.call(null,G__69596));
})())),(function (){var fexpr__69601 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__69601.cljs$core$IFn$_invoke$arity$1 ? fexpr__69601.cljs$core$IFn$_invoke$arity$1(G__69596) : fexpr__69601.call(null,G__69596));
})()], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??i","??i",-474049037,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??j","??j",1098328567,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?m","?m",896026745,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??more","??more",-1836200365,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69602){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__69603 = new cljs.core.Symbol(null,"??i","??i",-474049037,null);
return (fexpr__69603.cljs$core$IFn$_invoke$arity$1 ? fexpr__69603.cljs$core$IFn$_invoke$arity$1(G__69602) : fexpr__69603.call(null,G__69602));
})())),(function (){var fexpr__69604 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__69604.cljs$core$IFn$_invoke$arity$1 ? fexpr__69604.cljs$core$IFn$_invoke$arity$1(G__69602) : fexpr__69604.call(null,G__69602));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__69605 = new cljs.core.Symbol(null,"??j","??j",1098328567,null);
return (fexpr__69605.cljs$core$IFn$_invoke$arity$1 ? fexpr__69605.cljs$core$IFn$_invoke$arity$1(G__69602) : fexpr__69605.call(null,G__69602));
})())),(function (){var fexpr__69606 = new cljs.core.Symbol(null,"?m","?m",896026745,null);
return (fexpr__69606.cljs$core$IFn$_invoke$arity$1 ? fexpr__69606.cljs$core$IFn$_invoke$arity$1(G__69602) : fexpr__69606.call(null,G__69602));
})()], null))], null),(function (){var fexpr__69607 = new cljs.core.Symbol(null,"??more","??more",-1836200365,null);
return (fexpr__69607.cljs$core$IFn$_invoke$arity$1 ? fexpr__69607.cljs$core$IFn$_invoke$arity$1(G__69602) : fexpr__69607.call(null,G__69602));
})())),(function (){var fexpr__69608 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__69608.cljs$core$IFn$_invoke$arity$1 ? fexpr__69608.cljs$core$IFn$_invoke$arity$1(G__69602) : fexpr__69608.call(null,G__69602));
})()], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
}))], 0)),emmy.pattern.rule.guard((function (_){
return emmy.simplify.rules._STAR_commute_partials_QMARK__STAR_;
}),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??i","??i",-474049037,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??ys","??ys",1180811471,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??j","??j",1098328567,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??zs","??zs",1863806627,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??args","??args",-2100991912,null),null,(1),null)),(2),null)),(function (p__69609){
var map__69610 = p__69609;
var map__69610__$1 = cljs.core.__destructure_map(map__69610);
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69610__$1,new cljs.core.Symbol(null,"??i","??i",-474049037,null));
var j = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69610__$1,new cljs.core.Symbol(null,"??j","??j",1098328567,null));
return (cljs.core.compare(cljs.core.vec(i),cljs.core.vec(j)) > (0));
})),(function (G__69611){
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__69612 = new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null);
return (fexpr__69612.cljs$core$IFn$_invoke$arity$1 ? fexpr__69612.cljs$core$IFn$_invoke$arity$1(G__69611) : fexpr__69612.call(null,G__69611));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__69613 = new cljs.core.Symbol(null,"??j","??j",1098328567,null);
return (fexpr__69613.cljs$core$IFn$_invoke$arity$1 ? fexpr__69613.cljs$core$IFn$_invoke$arity$1(G__69611) : fexpr__69613.call(null,G__69611));
})()))], null),(function (){var fexpr__69614 = new cljs.core.Symbol(null,"??ys","??ys",1180811471,null);
return (fexpr__69614.cljs$core$IFn$_invoke$arity$1 ? fexpr__69614.cljs$core$IFn$_invoke$arity$1(G__69611) : fexpr__69614.call(null,G__69611));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__69615 = new cljs.core.Symbol(null,"??i","??i",-474049037,null);
return (fexpr__69615.cljs$core$IFn$_invoke$arity$1 ? fexpr__69615.cljs$core$IFn$_invoke$arity$1(G__69611) : fexpr__69615.call(null,G__69611));
})()))], null),(function (){var fexpr__69616 = new cljs.core.Symbol(null,"??zs","??zs",1863806627,null);
return (fexpr__69616.cljs$core$IFn$_invoke$arity$1 ? fexpr__69616.cljs$core$IFn$_invoke$arity$1(G__69611) : fexpr__69616.call(null,G__69611));
})()], 0))),(function (){var fexpr__69617 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__69617.cljs$core$IFn$_invoke$arity$1 ? fexpr__69617.cljs$core$IFn$_invoke$arity$1(G__69611) : fexpr__69617.call(null,G__69611));
})()], null))], null),(function (){var fexpr__69618 = new cljs.core.Symbol(null,"??args","??args",-2100991912,null);
return (fexpr__69618.cljs$core$IFn$_invoke$arity$1 ? fexpr__69618.cljs$core$IFn$_invoke$arity$1(G__69611) : fexpr__69618.call(null,G__69611));
})()));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})))], 0));
emmy.simplify.rules.trig__GT_sincos = emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69619){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__69620 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69620.cljs$core$IFn$_invoke$arity$1 ? fexpr__69620.cljs$core$IFn$_invoke$arity$1(G__69619) : fexpr__69620.call(null,G__69619));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__69621 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69621.cljs$core$IFn$_invoke$arity$1 ? fexpr__69621.cljs$core$IFn$_invoke$arity$1(G__69619) : fexpr__69621.call(null,G__69619));
})()], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cot","cot",-1635649012,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69622){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__69623 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69623.cljs$core$IFn$_invoke$arity$1 ? fexpr__69623.cljs$core$IFn$_invoke$arity$1(G__69622) : fexpr__69623.call(null,G__69622));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__69624 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69624.cljs$core$IFn$_invoke$arity$1 ? fexpr__69624.cljs$core$IFn$_invoke$arity$1(G__69622) : fexpr__69624.call(null,G__69622));
})()], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sec","sec",60154974,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69625){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__69626 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69626.cljs$core$IFn$_invoke$arity$1 ? fexpr__69626.cljs$core$IFn$_invoke$arity$1(G__69625) : fexpr__69626.call(null,G__69625));
})()], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"csc","csc",-427853492,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69627){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__69628 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69628.cljs$core$IFn$_invoke$arity$1 ? fexpr__69628.cljs$core$IFn$_invoke$arity$1(G__69627) : fexpr__69628.call(null,G__69627));
})()], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69629){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(function (){var fexpr__69630 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__69630.cljs$core$IFn$_invoke$arity$1 ? fexpr__69630.cljs$core$IFn$_invoke$arity$1(G__69629) : fexpr__69630.call(null,G__69629));
})(),(function (){var fexpr__69631 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69631.cljs$core$IFn$_invoke$arity$1 ? fexpr__69631.cljs$core$IFn$_invoke$arity$1(G__69629) : fexpr__69631.call(null,G__69629));
})()], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69632){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(function (){var fexpr__69633 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__69633.cljs$core$IFn$_invoke$arity$1 ? fexpr__69633.cljs$core$IFn$_invoke$arity$1(G__69632) : fexpr__69633.call(null,G__69632));
})(),(1)], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
}))], 0))], 0));
emmy.simplify.rules.sincos__GT_trig = emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__69634){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(function (){var fexpr__69635 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69635.cljs$core$IFn$_invoke$arity$1 ? fexpr__69635.cljs$core$IFn$_invoke$arity$1(G__69634) : fexpr__69635.call(null,G__69634));
})()], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??n1","??n1",-1325838299,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??n2","??n2",-1403574689,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__69636){
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__69637 = new cljs.core.Symbol(null,"??n1","??n1",-1325838299,null);
return (fexpr__69637.cljs$core$IFn$_invoke$arity$1 ? fexpr__69637.cljs$core$IFn$_invoke$arity$1(G__69636) : fexpr__69637.call(null,G__69636));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(function (){var fexpr__69638 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69638.cljs$core$IFn$_invoke$arity$1 ? fexpr__69638.cljs$core$IFn$_invoke$arity$1(G__69636) : fexpr__69638.call(null,G__69636));
})()], null))], null),(function (){var fexpr__69639 = new cljs.core.Symbol(null,"??n2","??n2",-1403574689,null);
return (fexpr__69639.cljs$core$IFn$_invoke$arity$1 ? fexpr__69639.cljs$core$IFn$_invoke$arity$1(G__69636) : fexpr__69639.call(null,G__69636));
})()], 0)));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??d1","??d1",1286203826,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??d2","??d2",525254907,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__69640){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(function (){var fexpr__69641 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69641.cljs$core$IFn$_invoke$arity$1 ? fexpr__69641.cljs$core$IFn$_invoke$arity$1(G__69640) : fexpr__69641.call(null,G__69640));
})()], null)),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__69642 = new cljs.core.Symbol(null,"??d1","??d1",1286203826,null);
return (fexpr__69642.cljs$core$IFn$_invoke$arity$1 ? fexpr__69642.cljs$core$IFn$_invoke$arity$1(G__69640) : fexpr__69642.call(null,G__69640));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__69643 = new cljs.core.Symbol(null,"??d2","??d2",525254907,null);
return (fexpr__69643.cljs$core$IFn$_invoke$arity$1 ? fexpr__69643.cljs$core$IFn$_invoke$arity$1(G__69640) : fexpr__69643.call(null,G__69640));
})()], 0)))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??n1","??n1",-1325838299,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??n2","??n2",-1403574689,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??d1","??d1",1286203826,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??d2","??d2",525254907,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__69644){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__69645 = new cljs.core.Symbol(null,"??n1","??n1",-1325838299,null);
return (fexpr__69645.cljs$core$IFn$_invoke$arity$1 ? fexpr__69645.cljs$core$IFn$_invoke$arity$1(G__69644) : fexpr__69645.call(null,G__69644));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(function (){var fexpr__69646 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69646.cljs$core$IFn$_invoke$arity$1 ? fexpr__69646.cljs$core$IFn$_invoke$arity$1(G__69644) : fexpr__69646.call(null,G__69644));
})()], null))], null),(function (){var fexpr__69647 = new cljs.core.Symbol(null,"??n2","??n2",-1403574689,null);
return (fexpr__69647.cljs$core$IFn$_invoke$arity$1 ? fexpr__69647.cljs$core$IFn$_invoke$arity$1(G__69644) : fexpr__69647.call(null,G__69644));
})()], 0))),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__69648 = new cljs.core.Symbol(null,"??d1","??d1",1286203826,null);
return (fexpr__69648.cljs$core$IFn$_invoke$arity$1 ? fexpr__69648.cljs$core$IFn$_invoke$arity$1(G__69644) : fexpr__69648.call(null,G__69644));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__69649 = new cljs.core.Symbol(null,"??d2","??d2",525254907,null);
return (fexpr__69649.cljs$core$IFn$_invoke$arity$1 ? fexpr__69649.cljs$core$IFn$_invoke$arity$1(G__69644) : fexpr__69649.call(null,G__69644));
})()], 0)))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
}))], 0))], 0));
emmy.simplify.rules.triginv = (function emmy$simplify$rules$triginv(simplify){
return emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var sym_COLON_atan = emmy.numsymb.symbolic_operator(new cljs.core.Symbol(null,"atan","atan",-1026550135,null));
return emmy.pattern.rule.guard((function (_){
return emmy.simplify.rules._STAR_aggressive_atan_simplify_QMARK__STAR_;
}),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(3),null))),(function (p__69650){
var map__69651 = p__69650;
var map__69651__$1 = cljs.core.__destructure_map(map__69651);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69651__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69651__$1,new cljs.core.Symbol(null,"?y","?y",-1454470631,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
var ys = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(y) : simplify.call(null,y));
if(cljs.core.truth_(emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(ys,xs))){
if(emmy.value.number_QMARK_(ys)){
if(cljs.core.truth_(emmy.generic.negative_QMARK_.cljs$core$IFn$_invoke$arity$1(ys))){
return cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),(3),new cljs.core.Symbol(null,"pi","pi",176774184,null)),(4)));
} else {
return cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(4));
}
} else {
var and__5160__auto__ = emmy.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"positive?","positive?",1455224686,null),(new cljs.core.List(null,xs,null,(1),null)),(2),null)),new cljs.core.Symbol(null,"aggressive-atan-1","aggressive-atan-1",-730258103,null));
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(4));
} else {
return and__5160__auto__;
}
}
} else {
if(((emmy.value.number_QMARK_(ys)) && (emmy.value.number_QMARK_(xs)))){
return (sym_COLON_atan.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_atan.cljs$core$IFn$_invoke$arity$2(ys,xs) : sym_COLON_atan.call(null,ys,xs));
} else {
var s = (function (){var G__69652 = (new cljs.core.List(null,new cljs.core.Symbol(null,"gcd","gcd",1659909537,null),(new cljs.core.List(null,ys,(new cljs.core.List(null,xs,null,(1),null)),(2),null)),(3),null));
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__69652) : simplify.call(null,G__69652));
})();
if(cljs.core.truth_(emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(s))){
return null;
} else {
var and__5160__auto__ = emmy.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"positive?","positive?",1455224686,null),(new cljs.core.List(null,s,null,(1),null)),(2),null)),new cljs.core.Symbol(null,"aggressive-atan-2","aggressive-atan-2",-628426094,null));
if(cljs.core.truth_(and__5160__auto__)){
var yv = (function (){var G__69653 = (new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,ys,(new cljs.core.List(null,s,null,(1),null)),(2),null)),(3),null));
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__69653) : simplify.call(null,G__69653));
})();
var xv = (function (){var G__69654 = (new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,xs,(new cljs.core.List(null,s,null,(1),null)),(2),null)),(3),null));
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__69654) : simplify.call(null,G__69654));
})();
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atan","atan",-1026550135,null),yv,xv], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
} else {
return and__5160__auto__;
}
}
}
}
})));
})(),emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"asin","asin",-904130570,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69655){
var r__39308__auto__ = (function (){var fexpr__69656 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69656.cljs$core$IFn$_invoke$arity$1 ? fexpr__69656.cljs$core$IFn$_invoke$arity$1(G__69655) : fexpr__69656.call(null,G__69655));
})();
var or__5162__auto__ = r__39308__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"acos","acos",353741763,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69657){
var r__39308__auto__ = (function (){var fexpr__69658 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69658.cljs$core$IFn$_invoke$arity$1 ? fexpr__69658.cljs$core$IFn$_invoke$arity$1(G__69657) : fexpr__69658.call(null,G__69657));
})();
var or__5162__auto__ = r__39308__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69659){
var r__39308__auto__ = (function (){var fexpr__69660 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69660.cljs$core$IFn$_invoke$arity$1 ? fexpr__69660.cljs$core$IFn$_invoke$arity$1(G__69659) : fexpr__69660.call(null,G__69659));
})();
var or__5162__auto__ = r__39308__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"acos","acos",353741763,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69661){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__69662 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69662.cljs$core$IFn$_invoke$arity$1 ? fexpr__69662.cljs$core$IFn$_invoke$arity$1(G__69661) : fexpr__69662.call(null,G__69661));
})(),(2)], null))], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"asin","asin",-904130570,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69663){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__69664 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__69664.cljs$core$IFn$_invoke$arity$1 ? fexpr__69664.cljs$core$IFn$_invoke$arity$1(G__69663) : fexpr__69664.call(null,G__69663));
})(),(2)], null))], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"asin","asin",-904130570,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69665){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(function (){var fexpr__69666 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__69666.cljs$core$IFn$_invoke$arity$1 ? fexpr__69666.cljs$core$IFn$_invoke$arity$1(G__69665) : fexpr__69666.call(null,G__69665));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__69667 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__69667.cljs$core$IFn$_invoke$arity$1 ? fexpr__69667.cljs$core$IFn$_invoke$arity$1(G__69665) : fexpr__69667.call(null,G__69665));
})(),(2)], null))], null))], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"acos","acos",353741763,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69668){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__69669 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69669.cljs$core$IFn$_invoke$arity$1 ? fexpr__69669.cljs$core$IFn$_invoke$arity$1(G__69668) : fexpr__69669.call(null,G__69668));
})(),(2)], null))], null))], null)),(function (){var fexpr__69670 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69670.cljs$core$IFn$_invoke$arity$1 ? fexpr__69670.cljs$core$IFn$_invoke$arity$1(G__69668) : fexpr__69670.call(null,G__69668));
})()], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?a","?a",1314302913,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?b","?b",1575118075,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69671){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(function (){var fexpr__69672 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__69672.cljs$core$IFn$_invoke$arity$1 ? fexpr__69672.cljs$core$IFn$_invoke$arity$1(G__69671) : fexpr__69672.call(null,G__69671));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__69673 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__69673.cljs$core$IFn$_invoke$arity$1 ? fexpr__69673.cljs$core$IFn$_invoke$arity$1(G__69671) : fexpr__69673.call(null,G__69671));
})(),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__69674 = new cljs.core.Symbol(null,"?b","?b",1575118075,null);
return (fexpr__69674.cljs$core$IFn$_invoke$arity$1 ? fexpr__69674.cljs$core$IFn$_invoke$arity$1(G__69671) : fexpr__69674.call(null,G__69671));
})(),(2)], null))], null))], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?a","?a",1314302913,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?b","?b",1575118075,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69675){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(function (){var fexpr__69676 = new cljs.core.Symbol(null,"?b","?b",1575118075,null);
return (fexpr__69676.cljs$core$IFn$_invoke$arity$1 ? fexpr__69676.cljs$core$IFn$_invoke$arity$1(G__69675) : fexpr__69676.call(null,G__69675));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__69677 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__69677.cljs$core$IFn$_invoke$arity$1 ? fexpr__69677.cljs$core$IFn$_invoke$arity$1(G__69675) : fexpr__69677.call(null,G__69675));
})(),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__69678 = new cljs.core.Symbol(null,"?b","?b",1575118075,null);
return (fexpr__69678.cljs$core$IFn$_invoke$arity$1 ? fexpr__69678.cljs$core$IFn$_invoke$arity$1(G__69675) : fexpr__69678.call(null,G__69675));
})(),(2)], null))], null))], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
}))], 0)),emmy.pattern.rule.guard((function (_){
return emmy.simplify.rules._STAR_inverse_simplify_QMARK__STAR_;
}),emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"asin","asin",-904130570,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(function (p__69679){
var map__69680 = p__69679;
var map__69680__$1 = cljs.core.__destructure_map(map__69680);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69680__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
return emmy.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"asin","asin",-904130570,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),xs], null))], null)),xs], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})(),new cljs.core.Symbol(null,"asin-sin","asin-sin",1881703610,null));
})),(function (G__69681){
var r__39308__auto__ = (function (){var fexpr__69682 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69682.cljs$core$IFn$_invoke$arity$1 ? fexpr__69682.cljs$core$IFn$_invoke$arity$1(G__69681) : fexpr__69682.call(null,G__69681));
})();
var or__5162__auto__ = r__39308__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"acos","acos",353741763,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(function (p__69683){
var map__69684 = p__69683;
var map__69684__$1 = cljs.core.__destructure_map(map__69684);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69684__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
return emmy.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"acos","acos",353741763,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),xs], null))], null)),xs], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})(),new cljs.core.Symbol(null,"acos-cos","acos-cos",-652558231,null));
})),(function (G__69685){
var r__39308__auto__ = (function (){var fexpr__69686 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69686.cljs$core$IFn$_invoke$arity$1 ? fexpr__69686.cljs$core$IFn$_invoke$arity$1(G__69685) : fexpr__69686.call(null,G__69685));
})();
var or__5162__auto__ = r__39308__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(function (p__69687){
var map__69688 = p__69687;
var map__69688__$1 = cljs.core.__destructure_map(map__69688);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69688__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
return emmy.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atan","atan",-1026550135,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tan","tan",-1380825876,null),xs], null))], null)),xs], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})(),new cljs.core.Symbol(null,"atan-tan","atan-tan",-478846145,null));
})),(function (G__69689){
var r__39308__auto__ = (function (){var fexpr__69690 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69690.cljs$core$IFn$_invoke$arity$1 ? fexpr__69690.cljs$core$IFn$_invoke$arity$1(G__69689) : fexpr__69690.call(null,G__69689));
})();
var or__5162__auto__ = r__39308__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),(function (p__69691){
var map__69692 = p__69691;
var map__69692__$1 = cljs.core.__destructure_map(map__69692);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69692__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
return emmy.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atan","atan",-1026550135,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),xs], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),xs], null))], null)),xs], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})(),new cljs.core.Symbol(null,"atan-sin-cos","atan-sin-cos",-761958387,null));
})),(function (G__69693){
var r__39308__auto__ = (function (){var fexpr__69694 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69694.cljs$core$IFn$_invoke$arity$1 ? fexpr__69694.cljs$core$IFn$_invoke$arity$1(G__69693) : fexpr__69694.call(null,G__69693));
})();
var or__5162__auto__ = r__39308__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"asin","asin",-904130570,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(function (p__69695){
var map__69696 = p__69695;
var map__69696__$1 = cljs.core.__destructure_map(map__69696);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69696__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
return emmy.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"asin","asin",-904130570,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),xs], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),new cljs.core.Symbol(null,"pi","pi",176774184,null)], null)),xs], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})(),new cljs.core.Symbol(null,"asin-cos","asin-cos",-28391344,null));
})),(function (G__69697){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),new cljs.core.Symbol(null,"pi","pi",176774184,null)], null)),(function (){var fexpr__69698 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69698.cljs$core$IFn$_invoke$arity$1 ? fexpr__69698.cljs$core$IFn$_invoke$arity$1(G__69697) : fexpr__69698.call(null,G__69697));
})()], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"acos","acos",353741763,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(function (p__69699){
var map__69700 = p__69699;
var map__69700__$1 = cljs.core.__destructure_map(map__69700);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69700__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
return emmy.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"acos","acos",353741763,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),xs], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),new cljs.core.Symbol(null,"pi","pi",176774184,null)], null)),xs], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})(),new cljs.core.Symbol(null,"acos-sin","acos-sin",1513257305,null));
})),(function (G__69701){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),new cljs.core.Symbol(null,"pi","pi",176774184,null)], null)),(function (){var fexpr__69702 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69702.cljs$core$IFn$_invoke$arity$1 ? fexpr__69702.cljs$core$IFn$_invoke$arity$1(G__69701) : fexpr__69702.call(null,G__69701));
})()], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
}))], 0)))], 0));
});
/**
 * TODO consolidate the symbolic checkers here with the constructor
 *   simplifications in [[trig:special]]. 
 */
emmy.simplify.rules.trig_COLON_special = (function emmy$simplify$rules$trig_COLON_special(simplify){
var sym_COLON__PLUS_ = emmy.numsymb.symbolic_operator(new cljs.core.Symbol(null,"+","+",-740910886,null));
var sym_COLON__ = emmy.numsymb.symbolic_operator(new cljs.core.Symbol(null,"-","-",-471816912,null));
var sym_COLON__STAR_ = emmy.numsymb.symbolic_operator(new cljs.core.Symbol(null,"*","*",345799209,null));
var sym_COLON_div = emmy.numsymb.symbolic_operator(new cljs.core.Symbol(null,"/","/",-1371932971,null));
var zero_mod_pi_QMARK_ = (function emmy$simplify$rules$trig_COLON_special_$_zero_mod_pi_QMARK_(x){
var or__5162__auto__ = (new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"-pi","-pi",-613600448,null),null,new cljs.core.Symbol(null,"pi","pi",176774184,null),null,new cljs.core.Symbol(null,"two-pi","two-pi",1398792117,null),null,new cljs.core.Symbol(null,"-two-pi","-two-pi",-50550974,null),null], null), null).cljs$core$IFn$_invoke$arity$1 ? new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"-pi","-pi",-613600448,null),null,new cljs.core.Symbol(null,"pi","pi",176774184,null),null,new cljs.core.Symbol(null,"two-pi","two-pi",1398792117,null),null,new cljs.core.Symbol(null,"-two-pi","-two-pi",-50550974,null),null], null), null).cljs$core$IFn$_invoke$arity$1(x) : new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"-pi","-pi",-613600448,null),null,new cljs.core.Symbol(null,"pi","pi",176774184,null),null,new cljs.core.Symbol(null,"two-pi","two-pi",1398792117,null),null,new cljs.core.Symbol(null,"-two-pi","-two-pi",-50550974,null),null], null), null).call(null,x));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.value.integral_QMARK_((function (){var G__69757 = (function (){var G__69758 = x;
var G__69759 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__69758,G__69759) : sym_COLON_div.call(null,G__69758,G__69759));
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__69757) : simplify.call(null,G__69757));
})());
}
});
var pi_over_2_mod_2pi_QMARK_ = (function emmy$simplify$rules$trig_COLON_special_$_pi_over_2_mod_2pi_QMARK_(x){
var or__5162__auto__ = (new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"pi-over-2","pi-over-2",515246065,null),null], null), null).cljs$core$IFn$_invoke$arity$1 ? new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"pi-over-2","pi-over-2",515246065,null),null], null), null).cljs$core$IFn$_invoke$arity$1(x) : new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"pi-over-2","pi-over-2",515246065,null),null], null), null).call(null,x));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.value.integral_QMARK_((function (){var G__69760 = (function (){var G__69761 = (function (){var G__69763 = x;
var G__69764 = (function (){var G__69765 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
var G__69766 = (2);
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__69765,G__69766) : sym_COLON_div.call(null,G__69765,G__69766));
})();
return (sym_COLON__.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__.cljs$core$IFn$_invoke$arity$2(G__69763,G__69764) : sym_COLON__.call(null,G__69763,G__69764));
})();
var G__69762 = (function (){var G__69767 = (2);
var G__69768 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
return (sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2(G__69767,G__69768) : sym_COLON__STAR_.call(null,G__69767,G__69768));
})();
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__69761,G__69762) : sym_COLON_div.call(null,G__69761,G__69762));
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__69760) : simplify.call(null,G__69760));
})());
}
});
var _pi_over_2_mod_2pi_QMARK_ = (function emmy$simplify$rules$trig_COLON_special_$__pi_over_2_mod_2pi_QMARK_(x){
var or__5162__auto__ = (new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"-pi-over-2","-pi-over-2",-1344612268,null),null], null), null).cljs$core$IFn$_invoke$arity$1 ? new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"-pi-over-2","-pi-over-2",-1344612268,null),null], null), null).cljs$core$IFn$_invoke$arity$1(x) : new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"-pi-over-2","-pi-over-2",-1344612268,null),null], null), null).call(null,x));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.value.integral_QMARK_((function (){var G__69769 = (function (){var G__69770 = (function (){var G__69772 = x;
var G__69773 = (function (){var G__69774 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
var G__69775 = (2);
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__69774,G__69775) : sym_COLON_div.call(null,G__69774,G__69775));
})();
return (sym_COLON__PLUS_.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__PLUS_.cljs$core$IFn$_invoke$arity$2(G__69772,G__69773) : sym_COLON__PLUS_.call(null,G__69772,G__69773));
})();
var G__69771 = (function (){var G__69776 = (2);
var G__69777 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
return (sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2(G__69776,G__69777) : sym_COLON__STAR_.call(null,G__69776,G__69777));
})();
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__69770,G__69771) : sym_COLON_div.call(null,G__69770,G__69771));
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__69769) : simplify.call(null,G__69769));
})());
}
});
var pi_over_2_mod_pi_QMARK_ = (function emmy$simplify$rules$trig_COLON_special_$_pi_over_2_mod_pi_QMARK_(x){
var or__5162__auto__ = (new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"pi-over-2","pi-over-2",515246065,null),null,new cljs.core.Symbol(null,"-pi-over-2","-pi-over-2",-1344612268,null),null], null), null).cljs$core$IFn$_invoke$arity$1 ? new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"pi-over-2","pi-over-2",515246065,null),null,new cljs.core.Symbol(null,"-pi-over-2","-pi-over-2",-1344612268,null),null], null), null).cljs$core$IFn$_invoke$arity$1(x) : new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"pi-over-2","pi-over-2",515246065,null),null,new cljs.core.Symbol(null,"-pi-over-2","-pi-over-2",-1344612268,null),null], null), null).call(null,x));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.value.integral_QMARK_((function (){var G__69778 = (function (){var G__69779 = (function (){var G__69781 = x;
var G__69782 = (function (){var G__69783 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
var G__69784 = (2);
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__69783,G__69784) : sym_COLON_div.call(null,G__69783,G__69784));
})();
return (sym_COLON__.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__.cljs$core$IFn$_invoke$arity$2(G__69781,G__69782) : sym_COLON__.call(null,G__69781,G__69782));
})();
var G__69780 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__69779,G__69780) : sym_COLON_div.call(null,G__69779,G__69780));
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__69778) : simplify.call(null,G__69778));
})());
}
});
var zero_mod_2pi_QMARK_ = (function emmy$simplify$rules$trig_COLON_special_$_zero_mod_2pi_QMARK_(x){
var or__5162__auto__ = (new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"two-pi","two-pi",1398792117,null),null,new cljs.core.Symbol(null,"-two-pi","-two-pi",-50550974,null),null], null), null).cljs$core$IFn$_invoke$arity$1 ? new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"two-pi","two-pi",1398792117,null),null,new cljs.core.Symbol(null,"-two-pi","-two-pi",-50550974,null),null], null), null).cljs$core$IFn$_invoke$arity$1(x) : new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"two-pi","two-pi",1398792117,null),null,new cljs.core.Symbol(null,"-two-pi","-two-pi",-50550974,null),null], null), null).call(null,x));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.value.integral_QMARK_((function (){var G__69785 = (function (){var G__69786 = x;
var G__69787 = (function (){var G__69788 = (2);
var G__69789 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
return (sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2(G__69788,G__69789) : sym_COLON__STAR_.call(null,G__69788,G__69789));
})();
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__69786,G__69787) : sym_COLON_div.call(null,G__69786,G__69787));
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__69785) : simplify.call(null,G__69785));
})());
}
});
var pi_mod_2pi_QMARK_ = (function emmy$simplify$rules$trig_COLON_special_$_pi_mod_2pi_QMARK_(x){
var or__5162__auto__ = (new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"-pi","-pi",-613600448,null),null,new cljs.core.Symbol(null,"pi","pi",176774184,null),null], null), null).cljs$core$IFn$_invoke$arity$1 ? new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"-pi","-pi",-613600448,null),null,new cljs.core.Symbol(null,"pi","pi",176774184,null),null], null), null).cljs$core$IFn$_invoke$arity$1(x) : new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"-pi","-pi",-613600448,null),null,new cljs.core.Symbol(null,"pi","pi",176774184,null),null], null), null).call(null,x));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.value.integral_QMARK_((function (){var G__69790 = (function (){var G__69791 = (function (){var G__69793 = x;
var G__69794 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
return (sym_COLON__.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__.cljs$core$IFn$_invoke$arity$2(G__69793,G__69794) : sym_COLON__.call(null,G__69793,G__69794));
})();
var G__69792 = (function (){var G__69795 = (2);
var G__69796 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
return (sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2(G__69795,G__69796) : sym_COLON__STAR_.call(null,G__69795,G__69796));
})();
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__69791,G__69792) : sym_COLON_div.call(null,G__69791,G__69792));
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__69790) : simplify.call(null,G__69790));
})());
}
});
var pi_over_4_mod_pi_QMARK_ = (function emmy$simplify$rules$trig_COLON_special_$_pi_over_4_mod_pi_QMARK_(x){
var or__5162__auto__ = (new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"+pi-over-4","+pi-over-4",-1289502545,null),null,new cljs.core.Symbol(null,"pi-over-4","pi-over-4",1610173659,null),null], null), null).cljs$core$IFn$_invoke$arity$1 ? new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"+pi-over-4","+pi-over-4",-1289502545,null),null,new cljs.core.Symbol(null,"pi-over-4","pi-over-4",1610173659,null),null], null), null).cljs$core$IFn$_invoke$arity$1(x) : new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"+pi-over-4","+pi-over-4",-1289502545,null),null,new cljs.core.Symbol(null,"pi-over-4","pi-over-4",1610173659,null),null], null), null).call(null,x));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.value.integral_QMARK_((function (){var G__69797 = (function (){var G__69798 = (function (){var G__69800 = x;
var G__69801 = (function (){var G__69802 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
var G__69803 = (4);
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__69802,G__69803) : sym_COLON_div.call(null,G__69802,G__69803));
})();
return (sym_COLON__.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__.cljs$core$IFn$_invoke$arity$2(G__69800,G__69801) : sym_COLON__.call(null,G__69800,G__69801));
})();
var G__69799 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__69798,G__69799) : sym_COLON_div.call(null,G__69798,G__69799));
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__69797) : simplify.call(null,G__69797));
})());
}
});
var _pi_over_4_mod_pi_QMARK_ = (function emmy$simplify$rules$trig_COLON_special_$__pi_over_4_mod_pi_QMARK_(x){
var or__5162__auto__ = (new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"-pi-over-4","-pi-over-4",-640936368,null),null], null), null).cljs$core$IFn$_invoke$arity$1 ? new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"-pi-over-4","-pi-over-4",-640936368,null),null], null), null).cljs$core$IFn$_invoke$arity$1(x) : new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"-pi-over-4","-pi-over-4",-640936368,null),null], null), null).call(null,x));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.value.integral_QMARK_((function (){var G__69804 = (function (){var G__69805 = (function (){var G__69807 = x;
var G__69808 = (function (){var G__69809 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
var G__69810 = (4);
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__69809,G__69810) : sym_COLON_div.call(null,G__69809,G__69810));
})();
return (sym_COLON__PLUS_.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__PLUS_.cljs$core$IFn$_invoke$arity$2(G__69807,G__69808) : sym_COLON__PLUS_.call(null,G__69807,G__69808));
})();
var G__69806 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__69805,G__69806) : sym_COLON_div.call(null,G__69805,G__69806));
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__69804) : simplify.call(null,G__69804));
})());
}
});
return emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,zero_mod_pi_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69811){
var r__39308__auto__ = (0);
var or__5162__auto__ = r__39308__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,pi_over_2_mod_2pi_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69812){
var r__39308__auto__ = (1);
var or__5162__auto__ = r__39308__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,_pi_over_2_mod_2pi_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69813){
var r__39308__auto__ = (-1);
var or__5162__auto__ = r__39308__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,pi_over_2_mod_pi_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69814){
var r__39308__auto__ = (0);
var or__5162__auto__ = r__39308__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,zero_mod_2pi_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69815){
var r__39308__auto__ = (1);
var or__5162__auto__ = r__39308__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,pi_mod_2pi_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69816){
var r__39308__auto__ = (-1);
var or__5162__auto__ = r__39308__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,zero_mod_pi_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69817){
var r__39308__auto__ = (0);
var or__5162__auto__ = r__39308__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,pi_over_4_mod_pi_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69818){
var r__39308__auto__ = (1);
var or__5162__auto__ = r__39308__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,_pi_over_4_mod_pi_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69819){
var r__39308__auto__ = (-1);
var or__5162__auto__ = r__39308__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
}))], 0))], 0));
});
/**
 * `sin` is odd, and `cos` is even. we canonicalize by moving the sign out of the
 *   first term of the argument.
 */
emmy.simplify.rules.angular_parity = emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.simplify.rules.negative_number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69826){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (p1__69820_SHARP_){
return (- (function (){var G__69827 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__69820_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__69820_SHARP_.cljs$core$IFn$_invoke$arity$1(G__69827) : p1__69820_SHARP_.call(null,G__69827));
})());
})(G__69826)], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.simplify.rules.negative_number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x","??x",-1924511736,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69828){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__69821_SHARP_){
return (- (function (){var G__69829 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__69821_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__69821_SHARP_.cljs$core$IFn$_invoke$arity$1(G__69829) : p1__69821_SHARP_.call(null,G__69829));
})());
})(G__69828)], null),(function (){var fexpr__69830 = new cljs.core.Symbol(null,"??x","??x",-1924511736,null);
return (fexpr__69830.cljs$core$IFn$_invoke$arity$1 ? fexpr__69830.cljs$core$IFn$_invoke$arity$1(G__69828) : fexpr__69830.call(null,G__69828));
})()))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.simplify.rules.negative_number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x","??x",-1924511736,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y","??y",-1087769442,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69831){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__69822_SHARP_){
return (- (function (){var G__69832 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__69822_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__69822_SHARP_.cljs$core$IFn$_invoke$arity$1(G__69832) : p1__69822_SHARP_.call(null,G__69832));
})());
})(G__69831)], null),(function (){var fexpr__69833 = new cljs.core.Symbol(null,"??x","??x",-1924511736,null);
return (fexpr__69833.cljs$core$IFn$_invoke$arity$1 ? fexpr__69833.cljs$core$IFn$_invoke$arity$1(G__69831) : fexpr__69833.call(null,G__69831));
})()))], null),(function (){var fexpr__69834 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__69834.cljs$core$IFn$_invoke$arity$1 ? fexpr__69834.cljs$core$IFn$_invoke$arity$1(G__69831) : fexpr__69834.call(null,G__69831));
})()))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.simplify.rules.negative_number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69835){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (p1__69823_SHARP_){
return (- (function (){var G__69836 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__69823_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__69823_SHARP_.cljs$core$IFn$_invoke$arity$1(G__69836) : p1__69823_SHARP_.call(null,G__69836));
})());
})(G__69835)], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.simplify.rules.negative_number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x","??x",-1924511736,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69837){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__69824_SHARP_){
return (- (function (){var G__69838 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__69824_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__69824_SHARP_.cljs$core$IFn$_invoke$arity$1(G__69838) : p1__69824_SHARP_.call(null,G__69838));
})());
})(G__69837)], null),(function (){var fexpr__69839 = new cljs.core.Symbol(null,"??x","??x",-1924511736,null);
return (fexpr__69839.cljs$core$IFn$_invoke$arity$1 ? fexpr__69839.cljs$core$IFn$_invoke$arity$1(G__69837) : fexpr__69839.call(null,G__69837));
})()))], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.simplify.rules.negative_number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x","??x",-1924511736,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y","??y",-1087769442,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69840){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__69825_SHARP_){
return (- (function (){var G__69841 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__69825_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__69825_SHARP_.cljs$core$IFn$_invoke$arity$1(G__69841) : p1__69825_SHARP_.call(null,G__69841));
})());
})(G__69840)], null),(function (){var fexpr__69842 = new cljs.core.Symbol(null,"??x","??x",-1924511736,null);
return (fexpr__69842.cljs$core$IFn$_invoke$arity$1 ? fexpr__69842.cljs$core$IFn$_invoke$arity$1(G__69840) : fexpr__69842.call(null,G__69840));
})()))], null),(function (){var fexpr__69843 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__69843.cljs$core$IFn$_invoke$arity$1 ? fexpr__69843.cljs$core$IFn$_invoke$arity$1(G__69840) : fexpr__69843.call(null,G__69840));
})()))], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
}))], 0))], 0));
emmy.simplify.rules.expand_multiangle = (function (){var exact_integer_GT_3_QMARK_ = (function emmy$simplify$rules$exact_integer_GT_3_QMARK_(x){
var and__5160__auto__ = emmy.value.integral_QMARK_(x);
if(and__5160__auto__){
var and__5160__auto____$1 = emmy.generic.exact_QMARK_.cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(and__5160__auto____$1)){
return (x > (3));
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
});
return emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(2),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y","??y",-1087769442,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69848){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(2),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__69849 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69849.cljs$core$IFn$_invoke$arity$1 ? fexpr__69849.cljs$core$IFn$_invoke$arity$1(G__69848) : fexpr__69849.call(null,G__69848));
})()], null),(function (){var fexpr__69850 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__69850.cljs$core$IFn$_invoke$arity$1 ? fexpr__69850.cljs$core$IFn$_invoke$arity$1(G__69848) : fexpr__69850.call(null,G__69848));
})()))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__69851 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69851.cljs$core$IFn$_invoke$arity$1 ? fexpr__69851.cljs$core$IFn$_invoke$arity$1(G__69848) : fexpr__69851.call(null,G__69848));
})()], null),(function (){var fexpr__69852 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__69852.cljs$core$IFn$_invoke$arity$1 ? fexpr__69852.cljs$core$IFn$_invoke$arity$1(G__69848) : fexpr__69852.call(null,G__69848));
})()))], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(2),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y","??y",-1087769442,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69853){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(2),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__69854 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69854.cljs$core$IFn$_invoke$arity$1 ? fexpr__69854.cljs$core$IFn$_invoke$arity$1(G__69853) : fexpr__69854.call(null,G__69853));
})()], null),(function (){var fexpr__69855 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__69855.cljs$core$IFn$_invoke$arity$1 ? fexpr__69855.cljs$core$IFn$_invoke$arity$1(G__69853) : fexpr__69855.call(null,G__69853));
})()))], null)),(2)], null))], null)),(1)], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(3),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y","??y",-1087769442,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69856){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(3),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__69857 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69857.cljs$core$IFn$_invoke$arity$1 ? fexpr__69857.cljs$core$IFn$_invoke$arity$1(G__69856) : fexpr__69857.call(null,G__69856));
})()], null),(function (){var fexpr__69858 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__69858.cljs$core$IFn$_invoke$arity$1 ? fexpr__69858.cljs$core$IFn$_invoke$arity$1(G__69856) : fexpr__69858.call(null,G__69856));
})()))], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(-4),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__69859 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69859.cljs$core$IFn$_invoke$arity$1 ? fexpr__69859.cljs$core$IFn$_invoke$arity$1(G__69856) : fexpr__69859.call(null,G__69856));
})()], null),(function (){var fexpr__69860 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__69860.cljs$core$IFn$_invoke$arity$1 ? fexpr__69860.cljs$core$IFn$_invoke$arity$1(G__69856) : fexpr__69860.call(null,G__69856));
})()))], null)),(3)], null))], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(3),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y","??y",-1087769442,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69861){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(4),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__69862 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69862.cljs$core$IFn$_invoke$arity$1 ? fexpr__69862.cljs$core$IFn$_invoke$arity$1(G__69861) : fexpr__69862.call(null,G__69861));
})()], null),(function (){var fexpr__69863 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__69863.cljs$core$IFn$_invoke$arity$1 ? fexpr__69863.cljs$core$IFn$_invoke$arity$1(G__69861) : fexpr__69863.call(null,G__69861));
})()))], null)),(3)], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(-3),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__69864 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69864.cljs$core$IFn$_invoke$arity$1 ? fexpr__69864.cljs$core$IFn$_invoke$arity$1(G__69861) : fexpr__69864.call(null,G__69861));
})()], null),(function (){var fexpr__69865 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__69865.cljs$core$IFn$_invoke$arity$1 ? fexpr__69865.cljs$core$IFn$_invoke$arity$1(G__69861) : fexpr__69865.call(null,G__69861));
})()))], null))], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"n","n",-2092305744,null),(new cljs.core.List(null,exact_integer_GT_3_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs","??fs",-1640556976,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69866){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__69844_SHARP_){
return emmy.generic._.cljs$core$IFn$_invoke$arity$2((function (){var G__69867 = new cljs.core.Symbol(null,"n","n",-2092305744,null);
return (p1__69844_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__69844_SHARP_.cljs$core$IFn$_invoke$arity$1(G__69867) : p1__69844_SHARP_.call(null,G__69867));
})(),(1));
})(G__69866),(function (){var fexpr__69868 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__69868.cljs$core$IFn$_invoke$arity$1 ? fexpr__69868.cljs$core$IFn$_invoke$arity$1(G__69866) : fexpr__69868.call(null,G__69866));
})()], null),(function (){var fexpr__69869 = new cljs.core.Symbol(null,"??fs","??fs",-1640556976,null);
return (fexpr__69869.cljs$core$IFn$_invoke$arity$1 ? fexpr__69869.cljs$core$IFn$_invoke$arity$1(G__69866) : fexpr__69869.call(null,G__69866));
})()))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__69870 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__69870.cljs$core$IFn$_invoke$arity$1 ? fexpr__69870.cljs$core$IFn$_invoke$arity$1(G__69866) : fexpr__69870.call(null,G__69866));
})()], null),(function (){var fexpr__69871 = new cljs.core.Symbol(null,"??fs","??fs",-1640556976,null);
return (fexpr__69871.cljs$core$IFn$_invoke$arity$1 ? fexpr__69871.cljs$core$IFn$_invoke$arity$1(G__69866) : fexpr__69871.call(null,G__69866));
})()))], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__69845_SHARP_){
return emmy.generic._.cljs$core$IFn$_invoke$arity$2((function (){var G__69872 = new cljs.core.Symbol(null,"n","n",-2092305744,null);
return (p1__69845_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__69845_SHARP_.cljs$core$IFn$_invoke$arity$1(G__69872) : p1__69845_SHARP_.call(null,G__69872));
})(),(1));
})(G__69866),(function (){var fexpr__69873 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__69873.cljs$core$IFn$_invoke$arity$1 ? fexpr__69873.cljs$core$IFn$_invoke$arity$1(G__69866) : fexpr__69873.call(null,G__69866));
})()], null),(function (){var fexpr__69874 = new cljs.core.Symbol(null,"??fs","??fs",-1640556976,null);
return (fexpr__69874.cljs$core$IFn$_invoke$arity$1 ? fexpr__69874.cljs$core$IFn$_invoke$arity$1(G__69866) : fexpr__69874.call(null,G__69866));
})()))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__69875 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__69875.cljs$core$IFn$_invoke$arity$1 ? fexpr__69875.cljs$core$IFn$_invoke$arity$1(G__69866) : fexpr__69875.call(null,G__69866));
})()], null),(function (){var fexpr__69876 = new cljs.core.Symbol(null,"??fs","??fs",-1640556976,null);
return (fexpr__69876.cljs$core$IFn$_invoke$arity$1 ? fexpr__69876.cljs$core$IFn$_invoke$arity$1(G__69866) : fexpr__69876.call(null,G__69866));
})()))], null))], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??ys","??ys",1180811471,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69877){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__69878 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69878.cljs$core$IFn$_invoke$arity$1 ? fexpr__69878.cljs$core$IFn$_invoke$arity$1(G__69877) : fexpr__69878.call(null,G__69877));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__69879 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__69879.cljs$core$IFn$_invoke$arity$1 ? fexpr__69879.cljs$core$IFn$_invoke$arity$1(G__69877) : fexpr__69879.call(null,G__69877));
})()], null),(function (){var fexpr__69880 = new cljs.core.Symbol(null,"??ys","??ys",1180811471,null);
return (fexpr__69880.cljs$core$IFn$_invoke$arity$1 ? fexpr__69880.cljs$core$IFn$_invoke$arity$1(G__69877) : fexpr__69880.call(null,G__69877));
})()))], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__69881 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69881.cljs$core$IFn$_invoke$arity$1 ? fexpr__69881.cljs$core$IFn$_invoke$arity$1(G__69877) : fexpr__69881.call(null,G__69877));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__69882 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__69882.cljs$core$IFn$_invoke$arity$1 ? fexpr__69882.cljs$core$IFn$_invoke$arity$1(G__69877) : fexpr__69882.call(null,G__69877));
})()], null),(function (){var fexpr__69883 = new cljs.core.Symbol(null,"??ys","??ys",1180811471,null);
return (fexpr__69883.cljs$core$IFn$_invoke$arity$1 ? fexpr__69883.cljs$core$IFn$_invoke$arity$1(G__69877) : fexpr__69883.call(null,G__69877));
})()))], null))], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"n","n",-2092305744,null),(new cljs.core.List(null,exact_integer_GT_3_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs","??fs",-1640556976,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69884){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__69846_SHARP_){
return emmy.generic._.cljs$core$IFn$_invoke$arity$2((function (){var G__69885 = new cljs.core.Symbol(null,"n","n",-2092305744,null);
return (p1__69846_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__69846_SHARP_.cljs$core$IFn$_invoke$arity$1(G__69885) : p1__69846_SHARP_.call(null,G__69885));
})(),(1));
})(G__69884),(function (){var fexpr__69886 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__69886.cljs$core$IFn$_invoke$arity$1 ? fexpr__69886.cljs$core$IFn$_invoke$arity$1(G__69884) : fexpr__69886.call(null,G__69884));
})()], null),(function (){var fexpr__69887 = new cljs.core.Symbol(null,"??fs","??fs",-1640556976,null);
return (fexpr__69887.cljs$core$IFn$_invoke$arity$1 ? fexpr__69887.cljs$core$IFn$_invoke$arity$1(G__69884) : fexpr__69887.call(null,G__69884));
})()))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__69888 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__69888.cljs$core$IFn$_invoke$arity$1 ? fexpr__69888.cljs$core$IFn$_invoke$arity$1(G__69884) : fexpr__69888.call(null,G__69884));
})()], null),(function (){var fexpr__69889 = new cljs.core.Symbol(null,"??fs","??fs",-1640556976,null);
return (fexpr__69889.cljs$core$IFn$_invoke$arity$1 ? fexpr__69889.cljs$core$IFn$_invoke$arity$1(G__69884) : fexpr__69889.call(null,G__69884));
})()))], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__69847_SHARP_){
return emmy.generic._.cljs$core$IFn$_invoke$arity$2((function (){var G__69890 = new cljs.core.Symbol(null,"n","n",-2092305744,null);
return (p1__69847_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__69847_SHARP_.cljs$core$IFn$_invoke$arity$1(G__69890) : p1__69847_SHARP_.call(null,G__69890));
})(),(1));
})(G__69884),(function (){var fexpr__69891 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__69891.cljs$core$IFn$_invoke$arity$1 ? fexpr__69891.cljs$core$IFn$_invoke$arity$1(G__69884) : fexpr__69891.call(null,G__69884));
})()], null),(function (){var fexpr__69892 = new cljs.core.Symbol(null,"??fs","??fs",-1640556976,null);
return (fexpr__69892.cljs$core$IFn$_invoke$arity$1 ? fexpr__69892.cljs$core$IFn$_invoke$arity$1(G__69884) : fexpr__69892.call(null,G__69884));
})()))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__69893 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__69893.cljs$core$IFn$_invoke$arity$1 ? fexpr__69893.cljs$core$IFn$_invoke$arity$1(G__69884) : fexpr__69893.call(null,G__69884));
})()], null),(function (){var fexpr__69894 = new cljs.core.Symbol(null,"??fs","??fs",-1640556976,null);
return (fexpr__69894.cljs$core$IFn$_invoke$arity$1 ? fexpr__69894.cljs$core$IFn$_invoke$arity$1(G__69884) : fexpr__69894.call(null,G__69884));
})()))], null))], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??ys","??ys",1180811471,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__69895){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__69896 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69896.cljs$core$IFn$_invoke$arity$1 ? fexpr__69896.cljs$core$IFn$_invoke$arity$1(G__69895) : fexpr__69896.call(null,G__69895));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__69897 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__69897.cljs$core$IFn$_invoke$arity$1 ? fexpr__69897.cljs$core$IFn$_invoke$arity$1(G__69895) : fexpr__69897.call(null,G__69895));
})()], null),(function (){var fexpr__69898 = new cljs.core.Symbol(null,"??ys","??ys",1180811471,null);
return (fexpr__69898.cljs$core$IFn$_invoke$arity$1 ? fexpr__69898.cljs$core$IFn$_invoke$arity$1(G__69895) : fexpr__69898.call(null,G__69895));
})()))], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__69899 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69899.cljs$core$IFn$_invoke$arity$1 ? fexpr__69899.cljs$core$IFn$_invoke$arity$1(G__69895) : fexpr__69899.call(null,G__69895));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__69900 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__69900.cljs$core$IFn$_invoke$arity$1 ? fexpr__69900.cljs$core$IFn$_invoke$arity$1(G__69895) : fexpr__69900.call(null,G__69895));
})()], null),(function (){var fexpr__69901 = new cljs.core.Symbol(null,"??ys","??ys",1180811471,null);
return (fexpr__69901.cljs$core$IFn$_invoke$arity$1 ? fexpr__69901.cljs$core$IFn$_invoke$arity$1(G__69895) : fexpr__69901.call(null,G__69895));
})()))], null))], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
}))], 0))], 0));
})();
emmy.simplify.rules.trig_COLON_sum__GT_product = emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??c","??c",1219586074,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),emmy.pattern.rule._EQ__GT_),(function (G__69902){
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(2),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__69903 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69903.cljs$core$IFn$_invoke$arity$1 ? fexpr__69903.cljs$core$IFn$_invoke$arity$1(G__69902) : fexpr__69903.call(null,G__69902));
})(),(function (){var fexpr__69904 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__69904.cljs$core$IFn$_invoke$arity$1 ? fexpr__69904.cljs$core$IFn$_invoke$arity$1(G__69902) : fexpr__69904.call(null,G__69902));
})()], null)),(2)], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__69905 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69905.cljs$core$IFn$_invoke$arity$1 ? fexpr__69905.cljs$core$IFn$_invoke$arity$1(G__69902) : fexpr__69905.call(null,G__69902));
})(),(function (){var fexpr__69906 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__69906.cljs$core$IFn$_invoke$arity$1 ? fexpr__69906.cljs$core$IFn$_invoke$arity$1(G__69902) : fexpr__69906.call(null,G__69902));
})()], null)),(2)], null))], null))], null))], null),(function (){var fexpr__69907 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__69907.cljs$core$IFn$_invoke$arity$1 ? fexpr__69907.cljs$core$IFn$_invoke$arity$1(G__69902) : fexpr__69907.call(null,G__69902));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__69908 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__69908.cljs$core$IFn$_invoke$arity$1 ? fexpr__69908.cljs$core$IFn$_invoke$arity$1(G__69902) : fexpr__69908.call(null,G__69902));
})(),(function (){var fexpr__69909 = new cljs.core.Symbol(null,"??c","??c",1219586074,null);
return (fexpr__69909.cljs$core$IFn$_invoke$arity$1 ? fexpr__69909.cljs$core$IFn$_invoke$arity$1(G__69902) : fexpr__69909.call(null,G__69902));
})()], 0)));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(-1),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??c","??c",1219586074,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),emmy.pattern.rule._EQ__GT_),(function (G__69910){
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(2),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__69911 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69911.cljs$core$IFn$_invoke$arity$1 ? fexpr__69911.cljs$core$IFn$_invoke$arity$1(G__69910) : fexpr__69911.call(null,G__69910));
})(),(function (){var fexpr__69912 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__69912.cljs$core$IFn$_invoke$arity$1 ? fexpr__69912.cljs$core$IFn$_invoke$arity$1(G__69910) : fexpr__69912.call(null,G__69910));
})()], null)),(2)], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__69913 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69913.cljs$core$IFn$_invoke$arity$1 ? fexpr__69913.cljs$core$IFn$_invoke$arity$1(G__69910) : fexpr__69913.call(null,G__69910));
})(),(function (){var fexpr__69914 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__69914.cljs$core$IFn$_invoke$arity$1 ? fexpr__69914.cljs$core$IFn$_invoke$arity$1(G__69910) : fexpr__69914.call(null,G__69910));
})()], null)),(2)], null))], null))], null))], null),(function (){var fexpr__69915 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__69915.cljs$core$IFn$_invoke$arity$1 ? fexpr__69915.cljs$core$IFn$_invoke$arity$1(G__69910) : fexpr__69915.call(null,G__69910));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__69916 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__69916.cljs$core$IFn$_invoke$arity$1 ? fexpr__69916.cljs$core$IFn$_invoke$arity$1(G__69910) : fexpr__69916.call(null,G__69910));
})(),(function (){var fexpr__69917 = new cljs.core.Symbol(null,"??c","??c",1219586074,null);
return (fexpr__69917.cljs$core$IFn$_invoke$arity$1 ? fexpr__69917.cljs$core$IFn$_invoke$arity$1(G__69910) : fexpr__69917.call(null,G__69910));
})()], 0)));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(-1),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??c","??c",1219586074,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),emmy.pattern.rule._EQ__GT_),(function (G__69918){
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(2),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__69919 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69919.cljs$core$IFn$_invoke$arity$1 ? fexpr__69919.cljs$core$IFn$_invoke$arity$1(G__69918) : fexpr__69919.call(null,G__69918));
})(),(function (){var fexpr__69920 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__69920.cljs$core$IFn$_invoke$arity$1 ? fexpr__69920.cljs$core$IFn$_invoke$arity$1(G__69918) : fexpr__69920.call(null,G__69918));
})()], null)),(2)], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__69921 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69921.cljs$core$IFn$_invoke$arity$1 ? fexpr__69921.cljs$core$IFn$_invoke$arity$1(G__69918) : fexpr__69921.call(null,G__69918));
})(),(function (){var fexpr__69922 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__69922.cljs$core$IFn$_invoke$arity$1 ? fexpr__69922.cljs$core$IFn$_invoke$arity$1(G__69918) : fexpr__69922.call(null,G__69918));
})()], null)),(2)], null))], null))], null))], null),(function (){var fexpr__69923 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__69923.cljs$core$IFn$_invoke$arity$1 ? fexpr__69923.cljs$core$IFn$_invoke$arity$1(G__69918) : fexpr__69923.call(null,G__69918));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__69924 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__69924.cljs$core$IFn$_invoke$arity$1 ? fexpr__69924.cljs$core$IFn$_invoke$arity$1(G__69918) : fexpr__69924.call(null,G__69918));
})(),(function (){var fexpr__69925 = new cljs.core.Symbol(null,"??c","??c",1219586074,null);
return (fexpr__69925.cljs$core$IFn$_invoke$arity$1 ? fexpr__69925.cljs$core$IFn$_invoke$arity$1(G__69918) : fexpr__69925.call(null,G__69918));
})()], 0)));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??c","??c",1219586074,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),emmy.pattern.rule._EQ__GT_),(function (G__69926){
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(2),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__69927 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69927.cljs$core$IFn$_invoke$arity$1 ? fexpr__69927.cljs$core$IFn$_invoke$arity$1(G__69926) : fexpr__69927.call(null,G__69926));
})(),(function (){var fexpr__69928 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__69928.cljs$core$IFn$_invoke$arity$1 ? fexpr__69928.cljs$core$IFn$_invoke$arity$1(G__69926) : fexpr__69928.call(null,G__69926));
})()], null)),(2)], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__69929 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69929.cljs$core$IFn$_invoke$arity$1 ? fexpr__69929.cljs$core$IFn$_invoke$arity$1(G__69926) : fexpr__69929.call(null,G__69926));
})(),(function (){var fexpr__69930 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__69930.cljs$core$IFn$_invoke$arity$1 ? fexpr__69930.cljs$core$IFn$_invoke$arity$1(G__69926) : fexpr__69930.call(null,G__69926));
})()], null)),(2)], null))], null))], null))], null),(function (){var fexpr__69931 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__69931.cljs$core$IFn$_invoke$arity$1 ? fexpr__69931.cljs$core$IFn$_invoke$arity$1(G__69926) : fexpr__69931.call(null,G__69926));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__69932 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__69932.cljs$core$IFn$_invoke$arity$1 ? fexpr__69932.cljs$core$IFn$_invoke$arity$1(G__69926) : fexpr__69932.call(null,G__69926));
})(),(function (){var fexpr__69933 = new cljs.core.Symbol(null,"??c","??c",1219586074,null);
return (fexpr__69933.cljs$core$IFn$_invoke$arity$1 ? fexpr__69933.cljs$core$IFn$_invoke$arity$1(G__69926) : fexpr__69933.call(null,G__69926));
})()], 0)));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(-1),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??c","??c",1219586074,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),emmy.pattern.rule._EQ__GT_),(function (G__69934){
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(-2),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__69935 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69935.cljs$core$IFn$_invoke$arity$1 ? fexpr__69935.cljs$core$IFn$_invoke$arity$1(G__69934) : fexpr__69935.call(null,G__69934));
})(),(function (){var fexpr__69936 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__69936.cljs$core$IFn$_invoke$arity$1 ? fexpr__69936.cljs$core$IFn$_invoke$arity$1(G__69934) : fexpr__69936.call(null,G__69934));
})()], null)),(2)], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__69937 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69937.cljs$core$IFn$_invoke$arity$1 ? fexpr__69937.cljs$core$IFn$_invoke$arity$1(G__69934) : fexpr__69937.call(null,G__69934));
})(),(function (){var fexpr__69938 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__69938.cljs$core$IFn$_invoke$arity$1 ? fexpr__69938.cljs$core$IFn$_invoke$arity$1(G__69934) : fexpr__69938.call(null,G__69934));
})()], null)),(2)], null))], null))], null))], null),(function (){var fexpr__69939 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__69939.cljs$core$IFn$_invoke$arity$1 ? fexpr__69939.cljs$core$IFn$_invoke$arity$1(G__69934) : fexpr__69939.call(null,G__69934));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__69940 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__69940.cljs$core$IFn$_invoke$arity$1 ? fexpr__69940.cljs$core$IFn$_invoke$arity$1(G__69934) : fexpr__69940.call(null,G__69934));
})(),(function (){var fexpr__69941 = new cljs.core.Symbol(null,"??c","??c",1219586074,null);
return (fexpr__69941.cljs$core$IFn$_invoke$arity$1 ? fexpr__69941.cljs$core$IFn$_invoke$arity$1(G__69934) : fexpr__69941.call(null,G__69934));
})()], 0)));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(-1),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??c","??c",1219586074,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),emmy.pattern.rule._EQ__GT_),(function (G__69942){
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(-2),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__69943 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69943.cljs$core$IFn$_invoke$arity$1 ? fexpr__69943.cljs$core$IFn$_invoke$arity$1(G__69942) : fexpr__69943.call(null,G__69942));
})(),(function (){var fexpr__69944 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__69944.cljs$core$IFn$_invoke$arity$1 ? fexpr__69944.cljs$core$IFn$_invoke$arity$1(G__69942) : fexpr__69944.call(null,G__69942));
})()], null)),(2)], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__69945 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69945.cljs$core$IFn$_invoke$arity$1 ? fexpr__69945.cljs$core$IFn$_invoke$arity$1(G__69942) : fexpr__69945.call(null,G__69942));
})(),(function (){var fexpr__69946 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__69946.cljs$core$IFn$_invoke$arity$1 ? fexpr__69946.cljs$core$IFn$_invoke$arity$1(G__69942) : fexpr__69946.call(null,G__69942));
})()], null)),(2)], null))], null))], null))], null),(function (){var fexpr__69947 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__69947.cljs$core$IFn$_invoke$arity$1 ? fexpr__69947.cljs$core$IFn$_invoke$arity$1(G__69942) : fexpr__69947.call(null,G__69942));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__69948 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__69948.cljs$core$IFn$_invoke$arity$1 ? fexpr__69948.cljs$core$IFn$_invoke$arity$1(G__69942) : fexpr__69948.call(null,G__69942));
})(),(function (){var fexpr__69949 = new cljs.core.Symbol(null,"??c","??c",1219586074,null);
return (fexpr__69949.cljs$core$IFn$_invoke$arity$1 ? fexpr__69949.cljs$core$IFn$_invoke$arity$1(G__69942) : fexpr__69949.call(null,G__69942));
})()], 0)));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
}))], 0))], 0));
emmy.simplify.rules.trig_COLON_product__GT_sum = emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??u","??u",788654559,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??v","??v",2028946795,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??w","??w",1245275022,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),emmy.pattern.rule._EQ__GT_),(function (G__69950){
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__69951 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69951.cljs$core$IFn$_invoke$arity$1 ? fexpr__69951.cljs$core$IFn$_invoke$arity$1(G__69950) : fexpr__69951.call(null,G__69950));
})(),(function (){var fexpr__69952 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__69952.cljs$core$IFn$_invoke$arity$1 ? fexpr__69952.cljs$core$IFn$_invoke$arity$1(G__69950) : fexpr__69952.call(null,G__69950));
})()], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__69953 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69953.cljs$core$IFn$_invoke$arity$1 ? fexpr__69953.cljs$core$IFn$_invoke$arity$1(G__69950) : fexpr__69953.call(null,G__69950));
})(),(function (){var fexpr__69954 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__69954.cljs$core$IFn$_invoke$arity$1 ? fexpr__69954.cljs$core$IFn$_invoke$arity$1(G__69950) : fexpr__69954.call(null,G__69950));
})()], null))], null))], null))], null),(function (){var fexpr__69955 = new cljs.core.Symbol(null,"??u","??u",788654559,null);
return (fexpr__69955.cljs$core$IFn$_invoke$arity$1 ? fexpr__69955.cljs$core$IFn$_invoke$arity$1(G__69950) : fexpr__69955.call(null,G__69950));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__69956 = new cljs.core.Symbol(null,"??v","??v",2028946795,null);
return (fexpr__69956.cljs$core$IFn$_invoke$arity$1 ? fexpr__69956.cljs$core$IFn$_invoke$arity$1(G__69950) : fexpr__69956.call(null,G__69950));
})(),(function (){var fexpr__69957 = new cljs.core.Symbol(null,"??w","??w",1245275022,null);
return (fexpr__69957.cljs$core$IFn$_invoke$arity$1 ? fexpr__69957.cljs$core$IFn$_invoke$arity$1(G__69950) : fexpr__69957.call(null,G__69950));
})()], 0)));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??u","??u",788654559,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??v","??v",2028946795,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??w","??w",1245275022,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),emmy.pattern.rule._EQ__GT_),(function (G__69958){
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__69959 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69959.cljs$core$IFn$_invoke$arity$1 ? fexpr__69959.cljs$core$IFn$_invoke$arity$1(G__69958) : fexpr__69959.call(null,G__69958));
})(),(function (){var fexpr__69960 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__69960.cljs$core$IFn$_invoke$arity$1 ? fexpr__69960.cljs$core$IFn$_invoke$arity$1(G__69958) : fexpr__69960.call(null,G__69958));
})()], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__69961 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69961.cljs$core$IFn$_invoke$arity$1 ? fexpr__69961.cljs$core$IFn$_invoke$arity$1(G__69958) : fexpr__69961.call(null,G__69958));
})(),(function (){var fexpr__69962 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__69962.cljs$core$IFn$_invoke$arity$1 ? fexpr__69962.cljs$core$IFn$_invoke$arity$1(G__69958) : fexpr__69962.call(null,G__69958));
})()], null))], null))], null))], null),(function (){var fexpr__69963 = new cljs.core.Symbol(null,"??u","??u",788654559,null);
return (fexpr__69963.cljs$core$IFn$_invoke$arity$1 ? fexpr__69963.cljs$core$IFn$_invoke$arity$1(G__69958) : fexpr__69963.call(null,G__69958));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__69964 = new cljs.core.Symbol(null,"??v","??v",2028946795,null);
return (fexpr__69964.cljs$core$IFn$_invoke$arity$1 ? fexpr__69964.cljs$core$IFn$_invoke$arity$1(G__69958) : fexpr__69964.call(null,G__69958));
})(),(function (){var fexpr__69965 = new cljs.core.Symbol(null,"??w","??w",1245275022,null);
return (fexpr__69965.cljs$core$IFn$_invoke$arity$1 ? fexpr__69965.cljs$core$IFn$_invoke$arity$1(G__69958) : fexpr__69965.call(null,G__69958));
})()], 0)));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??u","??u",788654559,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??v","??v",2028946795,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??w","??w",1245275022,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),emmy.pattern.rule._EQ__GT_),(function (G__69966){
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__69967 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69967.cljs$core$IFn$_invoke$arity$1 ? fexpr__69967.cljs$core$IFn$_invoke$arity$1(G__69966) : fexpr__69967.call(null,G__69966));
})(),(function (){var fexpr__69968 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__69968.cljs$core$IFn$_invoke$arity$1 ? fexpr__69968.cljs$core$IFn$_invoke$arity$1(G__69966) : fexpr__69968.call(null,G__69966));
})()], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__69969 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69969.cljs$core$IFn$_invoke$arity$1 ? fexpr__69969.cljs$core$IFn$_invoke$arity$1(G__69966) : fexpr__69969.call(null,G__69966));
})(),(function (){var fexpr__69970 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__69970.cljs$core$IFn$_invoke$arity$1 ? fexpr__69970.cljs$core$IFn$_invoke$arity$1(G__69966) : fexpr__69970.call(null,G__69966));
})()], null))], null))], null))], null),(function (){var fexpr__69971 = new cljs.core.Symbol(null,"??u","??u",788654559,null);
return (fexpr__69971.cljs$core$IFn$_invoke$arity$1 ? fexpr__69971.cljs$core$IFn$_invoke$arity$1(G__69966) : fexpr__69971.call(null,G__69966));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__69972 = new cljs.core.Symbol(null,"??v","??v",2028946795,null);
return (fexpr__69972.cljs$core$IFn$_invoke$arity$1 ? fexpr__69972.cljs$core$IFn$_invoke$arity$1(G__69966) : fexpr__69972.call(null,G__69966));
})(),(function (){var fexpr__69973 = new cljs.core.Symbol(null,"??w","??w",1245275022,null);
return (fexpr__69973.cljs$core$IFn$_invoke$arity$1 ? fexpr__69973.cljs$core$IFn$_invoke$arity$1(G__69966) : fexpr__69973.call(null,G__69966));
})()], 0)));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??u","??u",788654559,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??v","??v",2028946795,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??w","??w",1245275022,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),emmy.pattern.rule._EQ__GT_),(function (G__69974){
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__69975 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69975.cljs$core$IFn$_invoke$arity$1 ? fexpr__69975.cljs$core$IFn$_invoke$arity$1(G__69974) : fexpr__69975.call(null,G__69974));
})(),(function (){var fexpr__69976 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__69976.cljs$core$IFn$_invoke$arity$1 ? fexpr__69976.cljs$core$IFn$_invoke$arity$1(G__69974) : fexpr__69976.call(null,G__69974));
})()], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__69977 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69977.cljs$core$IFn$_invoke$arity$1 ? fexpr__69977.cljs$core$IFn$_invoke$arity$1(G__69974) : fexpr__69977.call(null,G__69974));
})(),(function (){var fexpr__69978 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__69978.cljs$core$IFn$_invoke$arity$1 ? fexpr__69978.cljs$core$IFn$_invoke$arity$1(G__69974) : fexpr__69978.call(null,G__69974));
})()], null))], null))], null))], null),(function (){var fexpr__69979 = new cljs.core.Symbol(null,"??u","??u",788654559,null);
return (fexpr__69979.cljs$core$IFn$_invoke$arity$1 ? fexpr__69979.cljs$core$IFn$_invoke$arity$1(G__69974) : fexpr__69979.call(null,G__69974));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__69980 = new cljs.core.Symbol(null,"??v","??v",2028946795,null);
return (fexpr__69980.cljs$core$IFn$_invoke$arity$1 ? fexpr__69980.cljs$core$IFn$_invoke$arity$1(G__69974) : fexpr__69980.call(null,G__69974));
})(),(function (){var fexpr__69981 = new cljs.core.Symbol(null,"??w","??w",1245275022,null);
return (fexpr__69981.cljs$core$IFn$_invoke$arity$1 ? fexpr__69981.cljs$core$IFn$_invoke$arity$1(G__69974) : fexpr__69981.call(null,G__69974));
})()], 0)));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
}))], 0))], 0));
emmy.simplify.rules.contract_expt_trig = (function (){var exact_integer_GT_1_QMARK_ = (function emmy$simplify$rules$exact_integer_GT_1_QMARK_(x){
var and__5160__auto__ = emmy.value.integral_QMARK_(x);
if(and__5160__auto__){
var and__5160__auto____$1 = emmy.generic.exact_QMARK_.cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(and__5160__auto____$1)){
return (x > (1));
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
});
return emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,exact_integer_GT_1_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__69984){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__69985 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69985.cljs$core$IFn$_invoke$arity$1 ? fexpr__69985.cljs$core$IFn$_invoke$arity$1(G__69984) : fexpr__69985.call(null,G__69984));
})()], null)),(function (p1__69982_SHARP_){
return ((function (){var G__69986 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__69982_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__69982_SHARP_.cljs$core$IFn$_invoke$arity$1(G__69986) : p1__69982_SHARP_.call(null,G__69986));
})() - (2));
})(G__69984)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(2),(function (){var fexpr__69987 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69987.cljs$core$IFn$_invoke$arity$1 ? fexpr__69987.cljs$core$IFn$_invoke$arity$1(G__69984) : fexpr__69987.call(null,G__69984));
})()], null))], null))], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,exact_integer_GT_1_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__69988){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__69989 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69989.cljs$core$IFn$_invoke$arity$1 ? fexpr__69989.cljs$core$IFn$_invoke$arity$1(G__69988) : fexpr__69989.call(null,G__69988));
})()], null)),(function (p1__69983_SHARP_){
return ((function (){var G__69990 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__69983_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__69983_SHARP_.cljs$core$IFn$_invoke$arity$1(G__69990) : p1__69983_SHARP_.call(null,G__69990));
})() - (2));
})(G__69988)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(2),(function (){var fexpr__69991 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69991.cljs$core$IFn$_invoke$arity$1 ? fexpr__69991.cljs$core$IFn$_invoke$arity$1(G__69988) : fexpr__69991.call(null,G__69988));
})()], null))], null))], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
}))], 0))], 0));
})();
emmy.simplify.rules.half_angle = (function emmy$simplify$rules$half_angle(simplify){
var sin_half_angle_formula = (function emmy$simplify$rules$half_angle_$_sin_half_angle_formula(theta){
var thetas = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(theta) : simplify.call(null,theta));
var and__5160__auto__ = emmy.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"non-negative?","non-negative?",1248641804,null),cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(2),new cljs.core.Symbol(null,"pi","pi",176774184,null)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(-1),thetas], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(4),new cljs.core.Symbol(null,"pi","pi",176774184,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"floor","floor",-772394748,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),thetas,cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(4),new cljs.core.Symbol(null,"pi","pi",176774184,null)], null))], null))], null))], null))], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})(),new cljs.core.Symbol(null,"sin-half-angle-formula","sin-half-angle-formula",1943828750,null));
if(cljs.core.truth_(and__5160__auto__)){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),theta], null))], null)),(2)], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
} else {
return and__5160__auto__;
}
});
var cos_half_angle_formula = (function emmy$simplify$rules$half_angle_$_cos_half_angle_formula(theta){
var thetas = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(theta) : simplify.call(null,theta));
var and__5160__auto__ = emmy.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"non-negative?","non-negative?",1248641804,null),cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),thetas,cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(4),new cljs.core.Symbol(null,"pi","pi",176774184,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"floor","floor",-772394748,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),thetas], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(4),new cljs.core.Symbol(null,"pi","pi",176774184,null)], null))], null))], null))], null))], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})(),new cljs.core.Symbol(null,"cos-half-angle-formula","cos-half-angle-formula",-1744663300,null));
if(cljs.core.truth_(and__5160__auto__)){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),theta], null))], null)),(2)], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
} else {
return and__5160__auto__;
}
});
return emmy.pattern.rule.attempt(emmy.pattern.rule.guard((function (_){
return emmy.simplify.rules._STAR_half_angle_simplify_QMARK__STAR_;
}),emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(1),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y","??y",-1087769442,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null))),(function (p1__69992_SHARP_){
return sin_half_angle_formula((function (){var G__69996 = p1__69992_SHARP_;
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__69997 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__69997.cljs$core$IFn$_invoke$arity$1 ? fexpr__69997.cljs$core$IFn$_invoke$arity$1(G__69996) : fexpr__69997.call(null,G__69996));
})()], null),(function (){var fexpr__69998 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__69998.cljs$core$IFn$_invoke$arity$1 ? fexpr__69998.cljs$core$IFn$_invoke$arity$1(G__69996) : fexpr__69998.call(null,G__69996));
})()));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})());
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null))),(function (p1__69993_SHARP_){
return sin_half_angle_formula((function (){var G__69999 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (p1__69993_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__69993_SHARP_.cljs$core$IFn$_invoke$arity$1(G__69999) : p1__69993_SHARP_.call(null,G__69999));
})());
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(1),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y","??y",-1087769442,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null))),(function (p1__69994_SHARP_){
return cos_half_angle_formula((function (){var G__70000 = p1__69994_SHARP_;
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__70001 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__70001.cljs$core$IFn$_invoke$arity$1 ? fexpr__70001.cljs$core$IFn$_invoke$arity$1(G__70000) : fexpr__70001.call(null,G__70000));
})()], null),(function (){var fexpr__70002 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__70002.cljs$core$IFn$_invoke$arity$1 ? fexpr__70002.cljs$core$IFn$_invoke$arity$1(G__70000) : fexpr__70002.call(null,G__70000));
})()));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})());
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null))),(function (p1__69995_SHARP_){
return cos_half_angle_formula((function (){var G__70003 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (p1__69995_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__69995_SHARP_.cljs$core$IFn$_invoke$arity$1(G__70003) : p1__69995_SHARP_.call(null,G__70003));
})());
}))], 0))], 0))));
});
emmy.simplify.rules.sin_sq__GT_cos_sq = emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.simplify.rules.at_least_two_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__70005){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__70006 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__70006.cljs$core$IFn$_invoke$arity$1 ? fexpr__70006.cljs$core$IFn$_invoke$arity$1(G__70005) : fexpr__70006.call(null,G__70005));
})()], null)),(function (p1__70004_SHARP_){
return ((function (){var G__70007 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__70004_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__70004_SHARP_.cljs$core$IFn$_invoke$arity$1(G__70007) : p1__70004_SHARP_.call(null,G__70007));
})() - (2));
})(G__70005)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__70008 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__70008.cljs$core$IFn$_invoke$arity$1 ? fexpr__70008.cljs$core$IFn$_invoke$arity$1(G__70005) : fexpr__70008.call(null,G__70005));
})()], null)),(2)], null))], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
}))], 0))], 0));
emmy.simplify.rules.cos_sq__GT_sin_sq = emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.simplify.rules.at_least_two_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__70010){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__70011 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__70011.cljs$core$IFn$_invoke$arity$1 ? fexpr__70011.cljs$core$IFn$_invoke$arity$1(G__70010) : fexpr__70011.call(null,G__70010));
})()], null)),(function (p1__70009_SHARP_){
return ((function (){var G__70012 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__70009_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__70009_SHARP_.cljs$core$IFn$_invoke$arity$1(G__70012) : p1__70009_SHARP_.call(null,G__70012));
})() - (2));
})(G__70010)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__70013 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__70013.cljs$core$IFn$_invoke$arity$1 ? fexpr__70013.cljs$core$IFn$_invoke$arity$1(G__70010) : fexpr__70013.call(null,G__70010));
})()], null)),(2)], null))], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
}))], 0))], 0));
emmy.simplify.rules.split_high_degree_sincos = (function (){var remaining = (function emmy$simplify$rules$remaining(p__70022){
var map__70023 = p__70022;
var map__70023__$1 = cljs.core.__destructure_map(map__70023);
var m = map__70023__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70023__$1,new cljs.core.Symbol(null,"?n","?n",-2053238410,null));
var n_2 = emmy.generic._.cljs$core$IFn$_invoke$arity$2(n,(2));
if(cljs.core.truth_(emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(n_2))){
var G__70024 = m;
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__70025 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__70025.cljs$core$IFn$_invoke$arity$1 ? fexpr__70025.cljs$core$IFn$_invoke$arity$1(G__70024) : fexpr__70025.call(null,G__70024));
})(),(function (){var fexpr__70026 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__70026.cljs$core$IFn$_invoke$arity$1 ? fexpr__70026.cljs$core$IFn$_invoke$arity$1(G__70024) : fexpr__70026.call(null,G__70024));
})()], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
} else {
var G__70027 = m;
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__70028 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__70028.cljs$core$IFn$_invoke$arity$1 ? fexpr__70028.cljs$core$IFn$_invoke$arity$1(G__70027) : fexpr__70028.call(null,G__70027));
})(),(function (){var fexpr__70029 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__70029.cljs$core$IFn$_invoke$arity$1 ? fexpr__70029.cljs$core$IFn$_invoke$arity$1(G__70027) : fexpr__70029.call(null,G__70027));
})()], null)),n_2], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
}
});
return emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f1","??f1",-1548442439,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),null], null), null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.simplify.rules.more_than_two_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f2","??f2",745277317,null),null,(1),null)),(2),null)),(3),null)),(4),null)),emmy.pattern.rule._EQ__GT_),(function (G__70030){
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__70031 = new cljs.core.Symbol(null,"??f1","??f1",-1548442439,null);
return (fexpr__70031.cljs$core$IFn$_invoke$arity$1 ? fexpr__70031.cljs$core$IFn$_invoke$arity$1(G__70030) : fexpr__70031.call(null,G__70030));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__70032 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__70032.cljs$core$IFn$_invoke$arity$1 ? fexpr__70032.cljs$core$IFn$_invoke$arity$1(G__70030) : fexpr__70032.call(null,G__70030));
})(),(function (){var fexpr__70033 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__70033.cljs$core$IFn$_invoke$arity$1 ? fexpr__70033.cljs$core$IFn$_invoke$arity$1(G__70030) : fexpr__70033.call(null,G__70030));
})()], null)),(2)], null)),remaining(G__70030)], null),(function (){var fexpr__70034 = new cljs.core.Symbol(null,"??f2","??f2",745277317,null);
return (fexpr__70034.cljs$core$IFn$_invoke$arity$1 ? fexpr__70034.cljs$core$IFn$_invoke$arity$1(G__70030) : fexpr__70034.call(null,G__70030));
})()], 0)));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a1","??a1",2070706636,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),null], null), null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.simplify.rules.more_than_two_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a2","??a2",-73012434,null),null,(1),null)),(2),null)),(3),null)),(4),null)),emmy.pattern.rule._EQ__GT_),(function (G__70035){
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null)], null),(function (){var fexpr__70036 = new cljs.core.Symbol(null,"??a1","??a1",2070706636,null);
return (fexpr__70036.cljs$core$IFn$_invoke$arity$1 ? fexpr__70036.cljs$core$IFn$_invoke$arity$1(G__70035) : fexpr__70036.call(null,G__70035));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__70037 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__70037.cljs$core$IFn$_invoke$arity$1 ? fexpr__70037.cljs$core$IFn$_invoke$arity$1(G__70035) : fexpr__70037.call(null,G__70035));
})(),(function (){var fexpr__70038 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__70038.cljs$core$IFn$_invoke$arity$1 ? fexpr__70038.cljs$core$IFn$_invoke$arity$1(G__70035) : fexpr__70038.call(null,G__70035));
})()], null)),(2)], null)),remaining(G__70035)], null))], null),(function (){var fexpr__70039 = new cljs.core.Symbol(null,"??a2","??a2",-73012434,null);
return (fexpr__70039.cljs$core$IFn$_invoke$arity$1 ? fexpr__70039.cljs$core$IFn$_invoke$arity$1(G__70035) : fexpr__70039.call(null,G__70035));
})()], 0)));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
}))], 0))], 0));
})();
emmy.simplify.rules.flush_obvious_ones = (function emmy$simplify$rules$flush_obvious_ones(simplify){
var _QMARK_op = emmy.pattern.match.bind.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"?op","?op",-135731883,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),null], null), null));
var _QMARK_flipped = emmy.pattern.match.or.cljs$core$IFn$_invoke$arity$variadic(emmy.pattern.match.and.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.match.frame_predicate((function (p1__70040_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var G__70042 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (p1__70040_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__70040_SHARP_.cljs$core$IFn$_invoke$arity$1(G__70042) : p1__70040_SHARP_.call(null,G__70042));
})());
}))], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.match.and.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.match.frame_predicate((function (p1__70041_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var G__70043 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (p1__70041_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__70041_SHARP_.cljs$core$IFn$_invoke$arity$1(G__70043) : p1__70041_SHARP_.call(null,G__70043));
})());
}))], 0))], 0));
var pred = (function emmy$simplify$rules$flush_obvious_ones_$_pred(m){
var s1 = (function (){var G__70053 = (function (){var G__70054 = m;
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__70055 = new cljs.core.Symbol(null,"??f1","??f1",-1548442439,null);
return (fexpr__70055.cljs$core$IFn$_invoke$arity$1 ? fexpr__70055.cljs$core$IFn$_invoke$arity$1(G__70054) : fexpr__70055.call(null,G__70054));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__70056 = new cljs.core.Symbol(null,"??f2","??f2",745277317,null);
return (fexpr__70056.cljs$core$IFn$_invoke$arity$1 ? fexpr__70056.cljs$core$IFn$_invoke$arity$1(G__70054) : fexpr__70056.call(null,G__70054));
})()], 0)));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__70053) : simplify.call(null,G__70053));
})();
var s2 = (function (){var G__70057 = (function (){var G__70058 = m;
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__70059 = new cljs.core.Symbol(null,"??f3","??f3",-1809203400,null);
return (fexpr__70059.cljs$core$IFn$_invoke$arity$1 ? fexpr__70059.cljs$core$IFn$_invoke$arity$1(G__70058) : fexpr__70059.call(null,G__70058));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__70060 = new cljs.core.Symbol(null,"??f4","??f4",1817370441,null);
return (fexpr__70060.cljs$core$IFn$_invoke$arity$1 ? fexpr__70060.cljs$core$IFn$_invoke$arity$1(G__70058) : fexpr__70060.call(null,G__70058));
})()], 0)));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__70057) : simplify.call(null,G__70057));
})();
if(cljs.core.truth_(emmy.generic.exact_zero_QMARK_((function (){var G__70061 = (new cljs.core.List(null,new cljs.core.Symbol(null,"-","-",-471816912,null),(new cljs.core.List(null,s1,(new cljs.core.List(null,s2,null,(1),null)),(2),null)),(3),null));
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__70061) : simplify.call(null,G__70061));
})()))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"?s1","?s1",-1174751069,null),s1], null);
} else {
return null;
}
});
return emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a1","??a1",2070706636,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,_QMARK_op,(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a2","??a2",-73012434,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,_QMARK_flipped,(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),emmy.pattern.rule._EQ__GT_),(function (G__70062){
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(1)], null),(function (){var fexpr__70063 = new cljs.core.Symbol(null,"??a1","??a1",2070706636,null);
return (fexpr__70063.cljs$core$IFn$_invoke$arity$1 ? fexpr__70063.cljs$core$IFn$_invoke$arity$1(G__70062) : fexpr__70063.call(null,G__70062));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__70064 = new cljs.core.Symbol(null,"??a2","??a2",-73012434,null);
return (fexpr__70064.cljs$core$IFn$_invoke$arity$1 ? fexpr__70064.cljs$core$IFn$_invoke$arity$1(G__70062) : fexpr__70064.call(null,G__70062));
})(),(function (){var fexpr__70065 = new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null);
return (fexpr__70065.cljs$core$IFn$_invoke$arity$1 ? fexpr__70065.cljs$core$IFn$_invoke$arity$1(G__70062) : fexpr__70065.call(null,G__70062));
})()], 0)));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a1","??a1",2070706636,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f1","??f1",-1548442439,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,_QMARK_op,(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f2","??f2",745277317,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a2","??a2",-73012434,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f3","??f3",-1809203400,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,_QMARK_flipped,(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f4","??f4",1817370441,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pred),(function (G__70066){
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null)], null),(function (){var fexpr__70067 = new cljs.core.Symbol(null,"??a1","??a1",2070706636,null);
return (fexpr__70067.cljs$core$IFn$_invoke$arity$1 ? fexpr__70067.cljs$core$IFn$_invoke$arity$1(G__70066) : fexpr__70067.call(null,G__70066));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__70068 = new cljs.core.Symbol(null,"??a2","??a2",-73012434,null);
return (fexpr__70068.cljs$core$IFn$_invoke$arity$1 ? fexpr__70068.cljs$core$IFn$_invoke$arity$1(G__70066) : fexpr__70068.call(null,G__70066));
})(),(function (){var fexpr__70069 = new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null);
return (fexpr__70069.cljs$core$IFn$_invoke$arity$1 ? fexpr__70069.cljs$core$IFn$_invoke$arity$1(G__70066) : fexpr__70069.call(null,G__70066));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__70070 = new cljs.core.Symbol(null,"?s1","?s1",-1174751069,null);
return (fexpr__70070.cljs$core$IFn$_invoke$arity$1 ? fexpr__70070.cljs$core$IFn$_invoke$arity$1(G__70066) : fexpr__70070.call(null,G__70066));
})()], null)], 0)));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
}))], 0))], 0));
});
emmy.simplify.rules.sincos_flush_ones = (function emmy$simplify$rules$sincos_flush_ones(simplify){
return emmy.pattern.rule.pipe.cljs$core$IFn$_invoke$arity$variadic(emmy.simplify.rules.split_high_degree_sincos,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.simplify.rules.flush_obvious_ones(simplify)], 0));
});
emmy.simplify.rules.sincos_random = (function emmy$simplify$rules$sincos_random(simplify){
var simplifies_to_zero_QMARK_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(emmy.generic.numeric_zero_QMARK_,simplify);
var ops = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),null], null), null);
var flip = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),new cljs.core.Symbol(null,"sin","sin",1721439389,null),new cljs.core.Symbol(null,"sin","sin",1721439389,null),new cljs.core.Symbol(null,"cos","cos",-1452677493,null)], null);
return emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var pred = (function emmy$simplify$rules$sincos_random_$_pred(p__70077){
var map__70078 = p__70077;
var map__70078__$1 = cljs.core.__destructure_map(map__70078);
var m = map__70078__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70078__$1,new cljs.core.Symbol(null,"?n","?n",-2053238410,null));
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70078__$1,new cljs.core.Symbol(null,"?op","?op",-135731883,null));
if(cljs.core.truth_(simplifies_to_zero_QMARK_((function (){var G__70079 = m;
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__70080 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__70080.cljs$core$IFn$_invoke$arity$1 ? fexpr__70080.cljs$core$IFn$_invoke$arity$1(G__70079) : fexpr__70080.call(null,G__70079));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__70081 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__70081.cljs$core$IFn$_invoke$arity$1 ? fexpr__70081.cljs$core$IFn$_invoke$arity$1(G__70079) : fexpr__70081.call(null,G__70079));
})(),(function (){var fexpr__70082 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__70082.cljs$core$IFn$_invoke$arity$1 ? fexpr__70082.cljs$core$IFn$_invoke$arity$1(G__70079) : fexpr__70082.call(null,G__70079));
})()], null)),emmy.generic._.cljs$core$IFn$_invoke$arity$2(n,(2))], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})()))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"?other-op","?other-op",-881473313,null),(flip.cljs$core$IFn$_invoke$arity$1 ? flip.cljs$core$IFn$_invoke$arity$1(op) : flip.call(null,op))], null);
} else {
return null;
}
});
return emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a1","??a1",2070706636,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?a","?a",1314302913,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a2","??a2",-73012434,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,ops,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.simplify.rules.at_least_two_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pred),(function (G__70083){
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null)], null),(function (){var fexpr__70084 = new cljs.core.Symbol(null,"??a1","??a1",2070706636,null);
return (fexpr__70084.cljs$core$IFn$_invoke$arity$1 ? fexpr__70084.cljs$core$IFn$_invoke$arity$1(G__70083) : fexpr__70084.call(null,G__70083));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__70085 = new cljs.core.Symbol(null,"??a2","??a2",-73012434,null);
return (fexpr__70085.cljs$core$IFn$_invoke$arity$1 ? fexpr__70085.cljs$core$IFn$_invoke$arity$1(G__70083) : fexpr__70085.call(null,G__70083));
})(),(function (){var fexpr__70086 = new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null);
return (fexpr__70086.cljs$core$IFn$_invoke$arity$1 ? fexpr__70086.cljs$core$IFn$_invoke$arity$1(G__70083) : fexpr__70086.call(null,G__70083));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__70087 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__70087.cljs$core$IFn$_invoke$arity$1 ? fexpr__70087.cljs$core$IFn$_invoke$arity$1(G__70083) : fexpr__70087.call(null,G__70083));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__70088 = new cljs.core.Symbol(null,"?other-op","?other-op",-881473313,null);
return (fexpr__70088.cljs$core$IFn$_invoke$arity$1 ? fexpr__70088.cljs$core$IFn$_invoke$arity$1(G__70083) : fexpr__70088.call(null,G__70083));
})(),(function (){var fexpr__70089 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__70089.cljs$core$IFn$_invoke$arity$1 ? fexpr__70089.cljs$core$IFn$_invoke$arity$1(G__70083) : fexpr__70089.call(null,G__70083));
})()], null)),(2)], null))], null))], null)], 0)));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a1","??a1",2070706636,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,ops,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.simplify.rules.at_least_two_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a2","??a2",-73012434,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?a","?a",1314302913,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pred),(function (G__70090){
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null)], null),(function (){var fexpr__70091 = new cljs.core.Symbol(null,"??a1","??a1",2070706636,null);
return (fexpr__70091.cljs$core$IFn$_invoke$arity$1 ? fexpr__70091.cljs$core$IFn$_invoke$arity$1(G__70090) : fexpr__70091.call(null,G__70090));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__70092 = new cljs.core.Symbol(null,"??a2","??a2",-73012434,null);
return (fexpr__70092.cljs$core$IFn$_invoke$arity$1 ? fexpr__70092.cljs$core$IFn$_invoke$arity$1(G__70090) : fexpr__70092.call(null,G__70090));
})(),(function (){var fexpr__70093 = new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null);
return (fexpr__70093.cljs$core$IFn$_invoke$arity$1 ? fexpr__70093.cljs$core$IFn$_invoke$arity$1(G__70090) : fexpr__70093.call(null,G__70090));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__70094 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__70094.cljs$core$IFn$_invoke$arity$1 ? fexpr__70094.cljs$core$IFn$_invoke$arity$1(G__70090) : fexpr__70094.call(null,G__70090));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__70095 = new cljs.core.Symbol(null,"?other-op","?other-op",-881473313,null);
return (fexpr__70095.cljs$core$IFn$_invoke$arity$1 ? fexpr__70095.cljs$core$IFn$_invoke$arity$1(G__70090) : fexpr__70095.call(null,G__70090));
})(),(function (){var fexpr__70096 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__70096.cljs$core$IFn$_invoke$arity$1 ? fexpr__70096.cljs$core$IFn$_invoke$arity$1(G__70090) : fexpr__70096.call(null,G__70090));
})()], null)),(2)], null))], null))], null)], 0)));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
}))], 0));
})(),(function (){var pred = (function emmy$simplify$rules$sincos_random_$_pred(p__70105){
var map__70106 = p__70105;
var map__70106__$1 = cljs.core.__destructure_map(map__70106);
var m = map__70106__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70106__$1,new cljs.core.Symbol(null,"?n","?n",-2053238410,null));
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70106__$1,new cljs.core.Symbol(null,"?op","?op",-135731883,null));
if(cljs.core.truth_(simplifies_to_zero_QMARK_((function (){var G__70107 = m;
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__70108 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__70108.cljs$core$IFn$_invoke$arity$1 ? fexpr__70108.cljs$core$IFn$_invoke$arity$1(G__70107) : fexpr__70108.call(null,G__70107));
})(),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__70109 = new cljs.core.Symbol(null,"??b1","??b1",-1771260238,null);
return (fexpr__70109.cljs$core$IFn$_invoke$arity$1 ? fexpr__70109.cljs$core$IFn$_invoke$arity$1(G__70107) : fexpr__70109.call(null,G__70107));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__70110 = new cljs.core.Symbol(null,"??b2","??b2",1805392567,null);
return (fexpr__70110.cljs$core$IFn$_invoke$arity$1 ? fexpr__70110.cljs$core$IFn$_invoke$arity$1(G__70107) : fexpr__70110.call(null,G__70107));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__70111 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__70111.cljs$core$IFn$_invoke$arity$1 ? fexpr__70111.cljs$core$IFn$_invoke$arity$1(G__70107) : fexpr__70111.call(null,G__70107));
})(),(function (){var fexpr__70112 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__70112.cljs$core$IFn$_invoke$arity$1 ? fexpr__70112.cljs$core$IFn$_invoke$arity$1(G__70107) : fexpr__70112.call(null,G__70107));
})()], null)),emmy.generic._.cljs$core$IFn$_invoke$arity$2(n,(2))], null))], null)], 0)))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})()))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"?other-op","?other-op",-881473313,null),(flip.cljs$core$IFn$_invoke$arity$1 ? flip.cljs$core$IFn$_invoke$arity$1(op) : flip.call(null,op))], null);
} else {
return null;
}
});
return emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a1","??a1",2070706636,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?a","?a",1314302913,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a2","??a2",-73012434,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b1","??b1",-1771260238,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,ops,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.simplify.rules.at_least_two_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b2","??b2",1805392567,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pred),(function (G__70113){
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null)], null),(function (){var fexpr__70114 = new cljs.core.Symbol(null,"??a1","??a1",2070706636,null);
return (fexpr__70114.cljs$core$IFn$_invoke$arity$1 ? fexpr__70114.cljs$core$IFn$_invoke$arity$1(G__70113) : fexpr__70114.call(null,G__70113));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__70115 = new cljs.core.Symbol(null,"??a2","??a2",-73012434,null);
return (fexpr__70115.cljs$core$IFn$_invoke$arity$1 ? fexpr__70115.cljs$core$IFn$_invoke$arity$1(G__70113) : fexpr__70115.call(null,G__70113));
})(),(function (){var fexpr__70116 = new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null);
return (fexpr__70116.cljs$core$IFn$_invoke$arity$1 ? fexpr__70116.cljs$core$IFn$_invoke$arity$1(G__70113) : fexpr__70116.call(null,G__70113));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__70117 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__70117.cljs$core$IFn$_invoke$arity$1 ? fexpr__70117.cljs$core$IFn$_invoke$arity$1(G__70113) : fexpr__70117.call(null,G__70113));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__70118 = new cljs.core.Symbol(null,"?other-op","?other-op",-881473313,null);
return (fexpr__70118.cljs$core$IFn$_invoke$arity$1 ? fexpr__70118.cljs$core$IFn$_invoke$arity$1(G__70113) : fexpr__70118.call(null,G__70113));
})(),(function (){var fexpr__70119 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__70119.cljs$core$IFn$_invoke$arity$1 ? fexpr__70119.cljs$core$IFn$_invoke$arity$1(G__70113) : fexpr__70119.call(null,G__70113));
})()], null)),(2)], null))], null))], null)], 0)));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a1","??a1",2070706636,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b1","??b1",-1771260238,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,ops,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.simplify.rules.at_least_two_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b2","??b2",1805392567,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a2","??a2",-73012434,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?a","?a",1314302913,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pred),(function (G__70120){
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null)], null),(function (){var fexpr__70121 = new cljs.core.Symbol(null,"??a1","??a1",2070706636,null);
return (fexpr__70121.cljs$core$IFn$_invoke$arity$1 ? fexpr__70121.cljs$core$IFn$_invoke$arity$1(G__70120) : fexpr__70121.call(null,G__70120));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__70122 = new cljs.core.Symbol(null,"??a2","??a2",-73012434,null);
return (fexpr__70122.cljs$core$IFn$_invoke$arity$1 ? fexpr__70122.cljs$core$IFn$_invoke$arity$1(G__70120) : fexpr__70122.call(null,G__70120));
})(),(function (){var fexpr__70123 = new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null);
return (fexpr__70123.cljs$core$IFn$_invoke$arity$1 ? fexpr__70123.cljs$core$IFn$_invoke$arity$1(G__70120) : fexpr__70123.call(null,G__70120));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__70124 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__70124.cljs$core$IFn$_invoke$arity$1 ? fexpr__70124.cljs$core$IFn$_invoke$arity$1(G__70120) : fexpr__70124.call(null,G__70120));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__70125 = new cljs.core.Symbol(null,"?other-op","?other-op",-881473313,null);
return (fexpr__70125.cljs$core$IFn$_invoke$arity$1 ? fexpr__70125.cljs$core$IFn$_invoke$arity$1(G__70120) : fexpr__70125.call(null,G__70120));
})(),(function (){var fexpr__70126 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__70126.cljs$core$IFn$_invoke$arity$1 ? fexpr__70126.cljs$core$IFn$_invoke$arity$1(G__70120) : fexpr__70126.call(null,G__70120));
})()], null)),(2)], null))], null))], null)], 0)));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
}))], 0));
})()], 0));
});
emmy.simplify.rules.sincos__GT_exp1 = (function (){var _I = emmy.generic._.cljs$core$IFn$_invoke$arity$1(emmy.complex.I);
return emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__70127){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.complex.I,(function (){var fexpr__70128 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__70128.cljs$core$IFn$_invoke$arity$1 ? fexpr__70128.cljs$core$IFn$_invoke$arity$1(G__70127) : fexpr__70128.call(null,G__70127));
})()], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),_I,(function (){var fexpr__70129 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__70129.cljs$core$IFn$_invoke$arity$1 ? fexpr__70129.cljs$core$IFn$_invoke$arity$1(G__70127) : fexpr__70129.call(null,G__70127));
})()], null))], null))], null)),emmy.complex.complex.cljs$core$IFn$_invoke$arity$2(0.0,2.0)], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__70130){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.complex.I,(function (){var fexpr__70131 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__70131.cljs$core$IFn$_invoke$arity$1 ? fexpr__70131.cljs$core$IFn$_invoke$arity$1(G__70130) : fexpr__70131.call(null,G__70130));
})()], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),_I,(function (){var fexpr__70132 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__70132.cljs$core$IFn$_invoke$arity$1 ? fexpr__70132.cljs$core$IFn$_invoke$arity$1(G__70130) : fexpr__70132.call(null,G__70130));
})()], null))], null))], null)),(2)], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
}))], 0))], 0));
})();
emmy.simplify.rules.sincos__GT_exp2 = emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__70133){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.complex.I,(function (){var fexpr__70134 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__70134.cljs$core$IFn$_invoke$arity$1 ? fexpr__70134.cljs$core$IFn$_invoke$arity$1(G__70133) : fexpr__70134.call(null,G__70133));
})()], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.complex.I,(function (){var fexpr__70135 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__70135.cljs$core$IFn$_invoke$arity$1 ? fexpr__70135.cljs$core$IFn$_invoke$arity$1(G__70133) : fexpr__70135.call(null,G__70133));
})()], null))], null))], null))], null)),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),emmy.complex.I)], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__70136){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.complex.I,(function (){var fexpr__70137 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__70137.cljs$core$IFn$_invoke$arity$1 ? fexpr__70137.cljs$core$IFn$_invoke$arity$1(G__70136) : fexpr__70137.call(null,G__70136));
})()], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.complex.I,(function (){var fexpr__70138 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__70138.cljs$core$IFn$_invoke$arity$1 ? fexpr__70138.cljs$core$IFn$_invoke$arity$1(G__70136) : fexpr__70138.call(null,G__70136));
})()], null))], null))], null))], null)),(2)], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
}))], 0))], 0));
emmy.simplify.rules.exp__GT_sincos = (function (){var positive_QMARK_ = (function emmy$simplify$rules$positive_QMARK_(x){
return cljs.core.not((function (){var or__5162__auto__ = emmy.generic.negative_QMARK_.cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(x);
}
})());
});
var pos_pred = (function emmy$simplify$rules$pos_pred(m){
var im = emmy.generic.imag_part.cljs$core$IFn$_invoke$arity$1((function (){var G__70154 = new cljs.core.Symbol(null,"?c1","?c1",-268581185,null);
return (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(G__70154) : m.call(null,G__70154));
})());
if(cljs.core.truth_(positive_QMARK_(im))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"?im","?im",120320525,null),im], null);
} else {
return null;
}
});
var neg_pred = (function emmy$simplify$rules$neg_pred(m){
var im = emmy.generic.imag_part.cljs$core$IFn$_invoke$arity$1((function (){var G__70155 = new cljs.core.Symbol(null,"?c1","?c1",-268581185,null);
return (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(G__70155) : m.call(null,G__70155));
})());
if(cljs.core.truth_(emmy.generic.negative_QMARK_.cljs$core$IFn$_invoke$arity$1(im))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"?im","?im",120320525,null),im], null);
} else {
return null;
}
});
return emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?c1","?c1",-268581185,null),(new cljs.core.List(null,emmy.simplify.rules.imaginary_number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pos_pred),(function (G__70156){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__70157 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__70157.cljs$core$IFn$_invoke$arity$1 ? fexpr__70157.cljs$core$IFn$_invoke$arity$1(G__70156) : fexpr__70157.call(null,G__70156));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.complex.I,cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__70158 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__70158.cljs$core$IFn$_invoke$arity$1 ? fexpr__70158.cljs$core$IFn$_invoke$arity$1(G__70156) : fexpr__70158.call(null,G__70156));
})()], null))], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?c1","?c1",-268581185,null),(new cljs.core.List(null,emmy.simplify.rules.imaginary_number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),neg_pred),(function (G__70159){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (p1__70139_SHARP_){
return (- (function (){var G__70160 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (p1__70139_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__70139_SHARP_.cljs$core$IFn$_invoke$arity$1(G__70160) : p1__70139_SHARP_.call(null,G__70160));
})());
})(G__70159)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.generic._.cljs$core$IFn$_invoke$arity$1(emmy.complex.I),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (p1__70140_SHARP_){
return (- (function (){var G__70161 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (p1__70140_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__70140_SHARP_.cljs$core$IFn$_invoke$arity$1(G__70161) : p1__70140_SHARP_.call(null,G__70161));
})());
})(G__70159)], null))], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?c1","?c1",-268581185,null),(new cljs.core.List(null,emmy.simplify.rules.imaginary_number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f","??f",-94026515,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pos_pred),(function (G__70162){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__70163 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__70163.cljs$core$IFn$_invoke$arity$1 ? fexpr__70163.cljs$core$IFn$_invoke$arity$1(G__70162) : fexpr__70163.call(null,G__70162));
})()], null),(function (){var fexpr__70164 = new cljs.core.Symbol(null,"??f","??f",-94026515,null);
return (fexpr__70164.cljs$core$IFn$_invoke$arity$1 ? fexpr__70164.cljs$core$IFn$_invoke$arity$1(G__70162) : fexpr__70164.call(null,G__70162));
})()))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.complex.I,cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__70165 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__70165.cljs$core$IFn$_invoke$arity$1 ? fexpr__70165.cljs$core$IFn$_invoke$arity$1(G__70162) : fexpr__70165.call(null,G__70162));
})()], null),(function (){var fexpr__70166 = new cljs.core.Symbol(null,"??f","??f",-94026515,null);
return (fexpr__70166.cljs$core$IFn$_invoke$arity$1 ? fexpr__70166.cljs$core$IFn$_invoke$arity$1(G__70162) : fexpr__70166.call(null,G__70162));
})()))], null))], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?c1","?c1",-268581185,null),(new cljs.core.List(null,emmy.simplify.rules.imaginary_number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f","??f",-94026515,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),neg_pred),(function (G__70167){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (p1__70141_SHARP_){
return emmy.generic.real_part.cljs$core$IFn$_invoke$arity$1((function (){var G__70168 = new cljs.core.Symbol(null,"?c1","?c1",-268581185,null);
return (p1__70141_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__70141_SHARP_.cljs$core$IFn$_invoke$arity$1(G__70168) : p1__70141_SHARP_.call(null,G__70168));
})());
})(G__70167)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__70142_SHARP_){
return (- (function (){var G__70169 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (p1__70142_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__70142_SHARP_.cljs$core$IFn$_invoke$arity$1(G__70169) : p1__70142_SHARP_.call(null,G__70169));
})());
})(G__70167)], null),(function (){var fexpr__70170 = new cljs.core.Symbol(null,"??f","??f",-94026515,null);
return (fexpr__70170.cljs$core$IFn$_invoke$arity$1 ? fexpr__70170.cljs$core$IFn$_invoke$arity$1(G__70167) : fexpr__70170.call(null,G__70167));
})()))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.generic._.cljs$core$IFn$_invoke$arity$1(emmy.complex.I),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__70143_SHARP_){
return (- (function (){var G__70171 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (p1__70143_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__70143_SHARP_.cljs$core$IFn$_invoke$arity$1(G__70171) : p1__70143_SHARP_.call(null,G__70171));
})());
})(G__70167)], null),(function (){var fexpr__70172 = new cljs.core.Symbol(null,"??f","??f",-94026515,null);
return (fexpr__70172.cljs$core$IFn$_invoke$arity$1 ? fexpr__70172.cljs$core$IFn$_invoke$arity$1(G__70167) : fexpr__70172.call(null,G__70167));
})()))], null))], null))], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?c1","?c1",-268581185,null),(new cljs.core.List(null,emmy.simplify.rules.complex_number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pos_pred),(function (G__70173){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (p1__70144_SHARP_){
return emmy.generic.real_part.cljs$core$IFn$_invoke$arity$1((function (){var G__70174 = new cljs.core.Symbol(null,"?c1","?c1",-268581185,null);
return (p1__70144_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__70144_SHARP_.cljs$core$IFn$_invoke$arity$1(G__70174) : p1__70144_SHARP_.call(null,G__70174));
})());
})(G__70173)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__70175 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__70175.cljs$core$IFn$_invoke$arity$1 ? fexpr__70175.cljs$core$IFn$_invoke$arity$1(G__70173) : fexpr__70175.call(null,G__70173));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.complex.I,cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__70176 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__70176.cljs$core$IFn$_invoke$arity$1 ? fexpr__70176.cljs$core$IFn$_invoke$arity$1(G__70173) : fexpr__70176.call(null,G__70173));
})()], null))], null))], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?c1","?c1",-268581185,null),(new cljs.core.List(null,emmy.simplify.rules.complex_number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),neg_pred),(function (G__70177){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (p1__70145_SHARP_){
return emmy.generic.real_part.cljs$core$IFn$_invoke$arity$1((function (){var G__70178 = new cljs.core.Symbol(null,"?c1","?c1",-268581185,null);
return (p1__70145_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__70145_SHARP_.cljs$core$IFn$_invoke$arity$1(G__70178) : p1__70145_SHARP_.call(null,G__70178));
})());
})(G__70177)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (p1__70146_SHARP_){
return (- (function (){var G__70179 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (p1__70146_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__70146_SHARP_.cljs$core$IFn$_invoke$arity$1(G__70179) : p1__70146_SHARP_.call(null,G__70179));
})());
})(G__70177)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.generic._.cljs$core$IFn$_invoke$arity$1(emmy.complex.I),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (p1__70147_SHARP_){
return (- (function (){var G__70180 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (p1__70147_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__70147_SHARP_.cljs$core$IFn$_invoke$arity$1(G__70180) : p1__70147_SHARP_.call(null,G__70180));
})());
})(G__70177)], null))], null))], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?c1","?c1",-268581185,null),(new cljs.core.List(null,emmy.simplify.rules.complex_number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f","??f",-94026515,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pos_pred),(function (G__70181){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (p1__70148_SHARP_){
return emmy.generic.real_part.cljs$core$IFn$_invoke$arity$1((function (){var G__70182 = new cljs.core.Symbol(null,"?c1","?c1",-268581185,null);
return (p1__70148_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__70148_SHARP_.cljs$core$IFn$_invoke$arity$1(G__70182) : p1__70148_SHARP_.call(null,G__70182));
})());
})(G__70181)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__70183 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__70183.cljs$core$IFn$_invoke$arity$1 ? fexpr__70183.cljs$core$IFn$_invoke$arity$1(G__70181) : fexpr__70183.call(null,G__70181));
})()], null),(function (){var fexpr__70184 = new cljs.core.Symbol(null,"??f","??f",-94026515,null);
return (fexpr__70184.cljs$core$IFn$_invoke$arity$1 ? fexpr__70184.cljs$core$IFn$_invoke$arity$1(G__70181) : fexpr__70184.call(null,G__70181));
})()))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.complex.I,cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__70185 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__70185.cljs$core$IFn$_invoke$arity$1 ? fexpr__70185.cljs$core$IFn$_invoke$arity$1(G__70181) : fexpr__70185.call(null,G__70181));
})()], null),(function (){var fexpr__70186 = new cljs.core.Symbol(null,"??f","??f",-94026515,null);
return (fexpr__70186.cljs$core$IFn$_invoke$arity$1 ? fexpr__70186.cljs$core$IFn$_invoke$arity$1(G__70181) : fexpr__70186.call(null,G__70181));
})()))], null))], null))], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?c1","?c1",-268581185,null),(new cljs.core.List(null,emmy.simplify.rules.complex_number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f","??f",-94026515,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),neg_pred),(function (G__70187){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (p1__70149_SHARP_){
return emmy.generic.real_part.cljs$core$IFn$_invoke$arity$1((function (){var G__70188 = new cljs.core.Symbol(null,"?c1","?c1",-268581185,null);
return (p1__70149_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__70149_SHARP_.cljs$core$IFn$_invoke$arity$1(G__70188) : p1__70149_SHARP_.call(null,G__70188));
})());
})(G__70187)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__70150_SHARP_){
return (- (function (){var G__70189 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (p1__70150_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__70150_SHARP_.cljs$core$IFn$_invoke$arity$1(G__70189) : p1__70150_SHARP_.call(null,G__70189));
})());
})(G__70187)], null),(function (){var fexpr__70190 = new cljs.core.Symbol(null,"??f","??f",-94026515,null);
return (fexpr__70190.cljs$core$IFn$_invoke$arity$1 ? fexpr__70190.cljs$core$IFn$_invoke$arity$1(G__70187) : fexpr__70190.call(null,G__70187));
})()))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.generic._.cljs$core$IFn$_invoke$arity$1(emmy.complex.I),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__70151_SHARP_){
return (- (function (){var G__70191 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (p1__70151_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__70151_SHARP_.cljs$core$IFn$_invoke$arity$1(G__70191) : p1__70151_SHARP_.call(null,G__70191));
})());
})(G__70187)], null),(function (){var fexpr__70192 = new cljs.core.Symbol(null,"??f","??f",-94026515,null);
return (fexpr__70192.cljs$core$IFn$_invoke$arity$1 ? fexpr__70192.cljs$core$IFn$_invoke$arity$1(G__70187) : fexpr__70192.call(null,G__70187));
})()))], null))], null))], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
}))], 0))], 0));
})();
emmy.simplify.rules.exp_contract = emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x1","??x1",-1923305193,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x2","?x2",1502785613,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x3","??x3",-411077265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x4","?x4",94899597,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x5","??x5",1822045235,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),emmy.pattern.rule._EQ__GT_),(function (G__70193){
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__70194 = new cljs.core.Symbol(null,"??x1","??x1",-1923305193,null);
return (fexpr__70194.cljs$core$IFn$_invoke$arity$1 ? fexpr__70194.cljs$core$IFn$_invoke$arity$1(G__70193) : fexpr__70194.call(null,G__70193));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__70195 = new cljs.core.Symbol(null,"??x3","??x3",-411077265,null);
return (fexpr__70195.cljs$core$IFn$_invoke$arity$1 ? fexpr__70195.cljs$core$IFn$_invoke$arity$1(G__70193) : fexpr__70195.call(null,G__70193));
})(),(function (){var fexpr__70196 = new cljs.core.Symbol(null,"??x5","??x5",1822045235,null);
return (fexpr__70196.cljs$core$IFn$_invoke$arity$1 ? fexpr__70196.cljs$core$IFn$_invoke$arity$1(G__70193) : fexpr__70196.call(null,G__70193));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__70197 = new cljs.core.Symbol(null,"?x2","?x2",1502785613,null);
return (fexpr__70197.cljs$core$IFn$_invoke$arity$1 ? fexpr__70197.cljs$core$IFn$_invoke$arity$1(G__70193) : fexpr__70197.call(null,G__70193));
})(),(function (){var fexpr__70198 = new cljs.core.Symbol(null,"?x4","?x4",94899597,null);
return (fexpr__70198.cljs$core$IFn$_invoke$arity$1 ? fexpr__70198.cljs$core$IFn$_invoke$arity$1(G__70193) : fexpr__70198.call(null,G__70193));
})()], null))], null))], null)], 0)));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?p","?p",-10896580,null),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__70199){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__70200 = new cljs.core.Symbol(null,"?p","?p",-10896580,null);
return (fexpr__70200.cljs$core$IFn$_invoke$arity$1 ? fexpr__70200.cljs$core$IFn$_invoke$arity$1(G__70199) : fexpr__70200.call(null,G__70199));
})(),(function (){var fexpr__70201 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__70201.cljs$core$IFn$_invoke$arity$1 ? fexpr__70201.cljs$core$IFn$_invoke$arity$1(G__70199) : fexpr__70201.call(null,G__70199));
})()], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__70202){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__70203 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__70203.cljs$core$IFn$_invoke$arity$1 ? fexpr__70203.cljs$core$IFn$_invoke$arity$1(G__70202) : fexpr__70203.call(null,G__70202));
})(),(function (){var fexpr__70204 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__70204.cljs$core$IFn$_invoke$arity$1 ? fexpr__70204.cljs$core$IFn$_invoke$arity$1(G__70202) : fexpr__70204.call(null,G__70202));
})()], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x1","??x1",-1923305193,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x2","??x2",169445330,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__70205){
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__70206 = new cljs.core.Symbol(null,"??x1","??x1",-1923305193,null);
return (fexpr__70206.cljs$core$IFn$_invoke$arity$1 ? fexpr__70206.cljs$core$IFn$_invoke$arity$1(G__70205) : fexpr__70206.call(null,G__70205));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__70207 = new cljs.core.Symbol(null,"??x2","??x2",169445330,null);
return (fexpr__70207.cljs$core$IFn$_invoke$arity$1 ? fexpr__70207.cljs$core$IFn$_invoke$arity$1(G__70205) : fexpr__70207.call(null,G__70205));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__70208 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__70208.cljs$core$IFn$_invoke$arity$1 ? fexpr__70208.cljs$core$IFn$_invoke$arity$1(G__70205) : fexpr__70208.call(null,G__70205));
})(),(function (){var fexpr__70209 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__70209.cljs$core$IFn$_invoke$arity$1 ? fexpr__70209.cljs$core$IFn$_invoke$arity$1(G__70205) : fexpr__70209.call(null,G__70205));
})()], null))], null))], null)], 0)));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y1","??y1",-1969315695,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y2","??y2",-796250797,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__70210){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__70211 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__70211.cljs$core$IFn$_invoke$arity$1 ? fexpr__70211.cljs$core$IFn$_invoke$arity$1(G__70210) : fexpr__70211.call(null,G__70210));
})(),(function (){var fexpr__70212 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__70212.cljs$core$IFn$_invoke$arity$1 ? fexpr__70212.cljs$core$IFn$_invoke$arity$1(G__70210) : fexpr__70212.call(null,G__70210));
})()], null))], null)),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__70213 = new cljs.core.Symbol(null,"??y1","??y1",-1969315695,null);
return (fexpr__70213.cljs$core$IFn$_invoke$arity$1 ? fexpr__70213.cljs$core$IFn$_invoke$arity$1(G__70210) : fexpr__70213.call(null,G__70210));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__70214 = new cljs.core.Symbol(null,"??y2","??y2",-796250797,null);
return (fexpr__70214.cljs$core$IFn$_invoke$arity$1 ? fexpr__70214.cljs$core$IFn$_invoke$arity$1(G__70210) : fexpr__70214.call(null,G__70210));
})()], 0)))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x1","??x1",-1923305193,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x2","??x2",169445330,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y1","??y1",-1969315695,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y2","??y2",-796250797,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__70215){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__70216 = new cljs.core.Symbol(null,"??x1","??x1",-1923305193,null);
return (fexpr__70216.cljs$core$IFn$_invoke$arity$1 ? fexpr__70216.cljs$core$IFn$_invoke$arity$1(G__70215) : fexpr__70216.call(null,G__70215));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__70217 = new cljs.core.Symbol(null,"??x2","??x2",169445330,null);
return (fexpr__70217.cljs$core$IFn$_invoke$arity$1 ? fexpr__70217.cljs$core$IFn$_invoke$arity$1(G__70215) : fexpr__70217.call(null,G__70215));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__70218 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__70218.cljs$core$IFn$_invoke$arity$1 ? fexpr__70218.cljs$core$IFn$_invoke$arity$1(G__70215) : fexpr__70218.call(null,G__70215));
})(),(function (){var fexpr__70219 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__70219.cljs$core$IFn$_invoke$arity$1 ? fexpr__70219.cljs$core$IFn$_invoke$arity$1(G__70215) : fexpr__70219.call(null,G__70215));
})()], null))], null))], null)], 0))),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__70220 = new cljs.core.Symbol(null,"??y1","??y1",-1969315695,null);
return (fexpr__70220.cljs$core$IFn$_invoke$arity$1 ? fexpr__70220.cljs$core$IFn$_invoke$arity$1(G__70215) : fexpr__70220.call(null,G__70215));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__70221 = new cljs.core.Symbol(null,"??y2","??y2",-796250797,null);
return (fexpr__70221.cljs$core$IFn$_invoke$arity$1 ? fexpr__70221.cljs$core$IFn$_invoke$arity$1(G__70215) : fexpr__70221.call(null,G__70215));
})()], 0)))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
}))], 0))], 0));
emmy.simplify.rules.exp_expand = (function (){var exact_integer_QMARK_ = (function (x){
var and__5160__auto__ = emmy.value.integral_QMARK_(x);
if(and__5160__auto__){
return emmy.generic.exact_QMARK_.cljs$core$IFn$_invoke$arity$1(x);
} else {
return and__5160__auto__;
}
});
return emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-","-",-471816912,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x1","?x1",697080023,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__70233){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (){var fexpr__70234 = new cljs.core.Symbol(null,"?x1","?x1",697080023,null);
return (fexpr__70234.cljs$core$IFn$_invoke$arity$1 ? fexpr__70234.cljs$core$IFn$_invoke$arity$1(G__70233) : fexpr__70234.call(null,G__70233));
})()], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-","-",-471816912,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x1","?x1",697080023,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x2","?x2",1502785613,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__70235){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (){var fexpr__70236 = new cljs.core.Symbol(null,"?x1","?x1",697080023,null);
return (fexpr__70236.cljs$core$IFn$_invoke$arity$1 ? fexpr__70236.cljs$core$IFn$_invoke$arity$1(G__70235) : fexpr__70236.call(null,G__70235));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (){var fexpr__70237 = new cljs.core.Symbol(null,"?x2","?x2",1502785613,null);
return (fexpr__70237.cljs$core$IFn$_invoke$arity$1 ? fexpr__70237.cljs$core$IFn$_invoke$arity$1(G__70235) : fexpr__70237.call(null,G__70235));
})()], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x1","?x1",697080023,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x2","?x2",1502785613,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__70238){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (){var fexpr__70239 = new cljs.core.Symbol(null,"?x1","?x1",697080023,null);
return (fexpr__70239.cljs$core$IFn$_invoke$arity$1 ? fexpr__70239.cljs$core$IFn$_invoke$arity$1(G__70238) : fexpr__70239.call(null,G__70238));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__70240 = new cljs.core.Symbol(null,"?x2","?x2",1502785613,null);
return (fexpr__70240.cljs$core$IFn$_invoke$arity$1 ? fexpr__70240.cljs$core$IFn$_invoke$arity$1(G__70238) : fexpr__70240.call(null,G__70238));
})()], null),(function (){var fexpr__70241 = new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null);
return (fexpr__70241.cljs$core$IFn$_invoke$arity$1 ? fexpr__70241.cljs$core$IFn$_invoke$arity$1(G__70238) : fexpr__70241.call(null,G__70238));
})()))], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,emmy.simplify.rules.imaginary_integer_QMARK_,(new cljs.core.List(null,(function (p1__70222_SHARP_){
return (emmy.generic.imag_part.cljs$core$IFn$_invoke$arity$1(p1__70222_SHARP_) > (1));
}),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??factors","??factors",1906330792,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__70242){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.complex.I], null),(function (){var fexpr__70243 = new cljs.core.Symbol(null,"??factors","??factors",1906330792,null);
return (fexpr__70243.cljs$core$IFn$_invoke$arity$1 ? fexpr__70243.cljs$core$IFn$_invoke$arity$1(G__70242) : fexpr__70243.call(null,G__70242));
})()))], null)),(function (p1__70223_SHARP_){
return emmy.generic.imag_part.cljs$core$IFn$_invoke$arity$1((function (){var G__70244 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (p1__70223_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__70223_SHARP_.cljs$core$IFn$_invoke$arity$1(G__70244) : p1__70223_SHARP_.call(null,G__70244));
})());
})(G__70242)], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,emmy.simplify.rules.imaginary_integer_QMARK_,(new cljs.core.List(null,(function (p1__70224_SHARP_){
return (emmy.generic.imag_part.cljs$core$IFn$_invoke$arity$1(p1__70224_SHARP_) < (-1));
}),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??factors","??factors",1906330792,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__70245){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.generic._.cljs$core$IFn$_invoke$arity$1(emmy.complex.I)], null),(function (){var fexpr__70246 = new cljs.core.Symbol(null,"??factors","??factors",1906330792,null);
return (fexpr__70246.cljs$core$IFn$_invoke$arity$1 ? fexpr__70246.cljs$core$IFn$_invoke$arity$1(G__70245) : fexpr__70246.call(null,G__70245));
})()))], null)),(function (p1__70225_SHARP_){
return emmy.generic._.cljs$core$IFn$_invoke$arity$1(emmy.generic.imag_part.cljs$core$IFn$_invoke$arity$1((function (){var G__70247 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (p1__70225_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__70225_SHARP_.cljs$core$IFn$_invoke$arity$1(G__70247) : p1__70225_SHARP_.call(null,G__70247));
})()));
})(G__70245)], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,exact_integer_QMARK_,(new cljs.core.List(null,(function (p1__70226_SHARP_){
return (p1__70226_SHARP_ > (1));
}),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??factors","??factors",1906330792,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__70248){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__70249 = new cljs.core.Symbol(null,"??factors","??factors",1906330792,null);
return (fexpr__70249.cljs$core$IFn$_invoke$arity$1 ? fexpr__70249.cljs$core$IFn$_invoke$arity$1(G__70248) : fexpr__70249.call(null,G__70248));
})()))], null)),(function (){var fexpr__70250 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__70250.cljs$core$IFn$_invoke$arity$1 ? fexpr__70250.cljs$core$IFn$_invoke$arity$1(G__70248) : fexpr__70250.call(null,G__70248));
})()], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,exact_integer_QMARK_,(new cljs.core.List(null,(function (p1__70227_SHARP_){
return (p1__70227_SHARP_ < (-1));
}),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??factors","??factors",1906330792,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__70251){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(-1)], null),(function (){var fexpr__70252 = new cljs.core.Symbol(null,"??factors","??factors",1906330792,null);
return (fexpr__70252.cljs$core$IFn$_invoke$arity$1 ? fexpr__70252.cljs$core$IFn$_invoke$arity$1(G__70251) : fexpr__70252.call(null,G__70251));
})()))], null)),(function (p1__70228_SHARP_){
return (- (function (){var G__70253 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__70228_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__70228_SHARP_.cljs$core$IFn$_invoke$arity$1(G__70253) : p1__70228_SHARP_.call(null,G__70253));
})());
})(G__70251)], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,emmy.simplify.rules.complex_number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__70254){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (p1__70229_SHARP_){
return emmy.generic.real_part.cljs$core$IFn$_invoke$arity$1((function (){var G__70255 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (p1__70229_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__70229_SHARP_.cljs$core$IFn$_invoke$arity$1(G__70255) : p1__70229_SHARP_.call(null,G__70255));
})());
})(G__70254)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (p1__70230_SHARP_){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.generic.imag_part.cljs$core$IFn$_invoke$arity$1((function (){var G__70256 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (p1__70230_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__70230_SHARP_.cljs$core$IFn$_invoke$arity$1(G__70256) : p1__70230_SHARP_.call(null,G__70256));
})()),(cljs.core.unquote.cljs$core$IFn$_invoke$arity$1 ? cljs.core.unquote.cljs$core$IFn$_invoke$arity$1(emmy.complex.I) : cljs.core.unquote.call(null,emmy.complex.I)));
})(G__70254)], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,emmy.simplify.rules.complex_number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??factors","??factors",1906330792,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__70257){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__70231_SHARP_){
return emmy.generic.real_part.cljs$core$IFn$_invoke$arity$1((function (){var G__70258 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (p1__70231_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__70231_SHARP_.cljs$core$IFn$_invoke$arity$1(G__70258) : p1__70231_SHARP_.call(null,G__70258));
})());
})(G__70257)], null),(function (){var fexpr__70259 = new cljs.core.Symbol(null,"??factors","??factors",1906330792,null);
return (fexpr__70259.cljs$core$IFn$_invoke$arity$1 ? fexpr__70259.cljs$core$IFn$_invoke$arity$1(G__70257) : fexpr__70259.call(null,G__70257));
})()))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__70232_SHARP_){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.generic.imag_part.cljs$core$IFn$_invoke$arity$1((function (){var G__70260 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (p1__70232_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__70232_SHARP_.cljs$core$IFn$_invoke$arity$1(G__70260) : p1__70232_SHARP_.call(null,G__70260));
})()),(cljs.core.unquote.cljs$core$IFn$_invoke$arity$1 ? cljs.core.unquote.cljs$core$IFn$_invoke$arity$1(emmy.complex.I) : cljs.core.unquote.call(null,emmy.complex.I)));
})(G__70257)], null),(function (){var fexpr__70261 = new cljs.core.Symbol(null,"??factors","??factors",1906330792,null);
return (fexpr__70261.cljs$core$IFn$_invoke$arity$1 ? fexpr__70261.cljs$core$IFn$_invoke$arity$1(G__70257) : fexpr__70261.call(null,G__70257));
})()))], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
}))], 0))], 0));
})();
emmy.simplify.rules.complex_trig = emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,emmy.complex.I,null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__70262){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null),(1)], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?z","?z",711595547,null),(new cljs.core.List(null,emmy.complex.I,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__70263){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null),(function (){var fexpr__70264 = new cljs.core.Symbol(null,"?z","?z",711595547,null);
return (fexpr__70264.cljs$core$IFn$_invoke$arity$1 ? fexpr__70264.cljs$core$IFn$_invoke$arity$1(G__70263) : fexpr__70264.call(null,G__70263));
})()], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,emmy.complex.I,(new cljs.core.List(null,new cljs.core.Symbol(null,"?z","?z",711595547,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__70265){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null),(function (){var fexpr__70266 = new cljs.core.Symbol(null,"?z","?z",711595547,null);
return (fexpr__70266.cljs$core$IFn$_invoke$arity$1 ? fexpr__70266.cljs$core$IFn$_invoke$arity$1(G__70265) : fexpr__70266.call(null,G__70265));
})()], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null),(new cljs.core.List(null,emmy.complex.I,(new cljs.core.List(null,new cljs.core.Symbol(null,"??ys","??ys",1180811471,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__70267){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__70268 = new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null);
return (fexpr__70268.cljs$core$IFn$_invoke$arity$1 ? fexpr__70268.cljs$core$IFn$_invoke$arity$1(G__70267) : fexpr__70268.call(null,G__70267));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__70269 = new cljs.core.Symbol(null,"??ys","??ys",1180811471,null);
return (fexpr__70269.cljs$core$IFn$_invoke$arity$1 ? fexpr__70269.cljs$core$IFn$_invoke$arity$1(G__70267) : fexpr__70269.call(null,G__70267));
})()], 0)))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,emmy.complex.I,null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__70270){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.complex.I,cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sinh","sinh",-990423302,null),(1)], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?z","?z",711595547,null),(new cljs.core.List(null,emmy.complex.I,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__70271){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.complex.I,cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sinh","sinh",-990423302,null),(function (){var fexpr__70272 = new cljs.core.Symbol(null,"?z","?z",711595547,null);
return (fexpr__70272.cljs$core$IFn$_invoke$arity$1 ? fexpr__70272.cljs$core$IFn$_invoke$arity$1(G__70271) : fexpr__70272.call(null,G__70271));
})()], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,emmy.complex.I,(new cljs.core.List(null,new cljs.core.Symbol(null,"?z","?z",711595547,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__70273){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.complex.I,cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sinh","sinh",-990423302,null),(function (){var fexpr__70274 = new cljs.core.Symbol(null,"?z","?z",711595547,null);
return (fexpr__70274.cljs$core$IFn$_invoke$arity$1 ? fexpr__70274.cljs$core$IFn$_invoke$arity$1(G__70273) : fexpr__70274.call(null,G__70273));
})()], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null),(new cljs.core.List(null,emmy.complex.I,(new cljs.core.List(null,new cljs.core.Symbol(null,"??ys","??ys",1180811471,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__70275){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.complex.I,cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sinh","sinh",-990423302,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__70276 = new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null);
return (fexpr__70276.cljs$core$IFn$_invoke$arity$1 ? fexpr__70276.cljs$core$IFn$_invoke$arity$1(G__70275) : fexpr__70276.call(null,G__70275));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__70277 = new cljs.core.Symbol(null,"??ys","??ys",1180811471,null);
return (fexpr__70277.cljs$core$IFn$_invoke$arity$1 ? fexpr__70277.cljs$core$IFn$_invoke$arity$1(G__70275) : fexpr__70277.call(null,G__70275));
})()], 0)))], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
}))], 0))], 0));
emmy.simplify.rules.complex_rules = (function (){var ctor = cljs.core.list(new cljs.core.Symbol(null,"?","?",-62633706,null),new cljs.core.Symbol(null,"?op","?op",-135731883,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"make-rectangular","make-rectangular",-1494662174,null),"null",new cljs.core.Symbol(null,"complex","complex",-1238824944,null),"null"], null), null));
return emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,ctor,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?theta","?theta",-893896091,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?theta","?theta",-893896091,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__70278){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.complex.I,(function (){var fexpr__70279 = new cljs.core.Symbol(null,"?theta","?theta",-893896091,null);
return (fexpr__70279.cljs$core$IFn$_invoke$arity$1 ? fexpr__70279.cljs$core$IFn$_invoke$arity$1(G__70278) : fexpr__70279.call(null,G__70278));
})()], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"real-part","real-part",-2001752061,null),(new cljs.core.List(null,(new cljs.core.List(null,ctor,(new cljs.core.List(null,new cljs.core.Symbol(null,"?re","?re",118270068,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__70280){
var r__39308__auto__ = (function (){var fexpr__70281 = new cljs.core.Symbol(null,"?re","?re",118270068,null);
return (fexpr__70281.cljs$core$IFn$_invoke$arity$1 ? fexpr__70281.cljs$core$IFn$_invoke$arity$1(G__70280) : fexpr__70281.call(null,G__70280));
})();
var or__5162__auto__ = r__39308__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"imag-part","imag-part",2028041294,null),(new cljs.core.List(null,(new cljs.core.List(null,ctor,(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?im","?im",120320525,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__70282){
var r__39308__auto__ = (function (){var fexpr__70283 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__70283.cljs$core$IFn$_invoke$arity$1 ? fexpr__70283.cljs$core$IFn$_invoke$arity$1(G__70282) : fexpr__70283.call(null,G__70282));
})();
var or__5162__auto__ = r__39308__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),(new cljs.core.List(null,(new cljs.core.List(null,ctor,(new cljs.core.List(null,new cljs.core.Symbol(null,"?re","?re",118270068,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?im","?im",120320525,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__70284){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__70285 = new cljs.core.Symbol(null,"?re","?re",118270068,null);
return (fexpr__70285.cljs$core$IFn$_invoke$arity$1 ? fexpr__70285.cljs$core$IFn$_invoke$arity$1(G__70284) : fexpr__70285.call(null,G__70284));
})(),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__70286 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__70286.cljs$core$IFn$_invoke$arity$1 ? fexpr__70286.cljs$core$IFn$_invoke$arity$1(G__70284) : fexpr__70286.call(null,G__70284));
})(),(2)], null))], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"angle","angle",-1032341515,null),(new cljs.core.List(null,(new cljs.core.List(null,ctor,(new cljs.core.List(null,new cljs.core.Symbol(null,"?re","?re",118270068,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?im","?im",120320525,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__70287){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(function (){var fexpr__70288 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__70288.cljs$core$IFn$_invoke$arity$1 ? fexpr__70288.cljs$core$IFn$_invoke$arity$1(G__70287) : fexpr__70288.call(null,G__70287));
})(),(function (){var fexpr__70289 = new cljs.core.Symbol(null,"?re","?re",118270068,null);
return (fexpr__70289.cljs$core$IFn$_invoke$arity$1 ? fexpr__70289.cljs$core$IFn$_invoke$arity$1(G__70287) : fexpr__70289.call(null,G__70287));
})()], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"real-part","real-part",-2001752061,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"make-polar","make-polar",2147326621,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?m","?m",896026745,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?a","?a",1314302913,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__70290){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__70291 = new cljs.core.Symbol(null,"?m","?m",896026745,null);
return (fexpr__70291.cljs$core$IFn$_invoke$arity$1 ? fexpr__70291.cljs$core$IFn$_invoke$arity$1(G__70290) : fexpr__70291.call(null,G__70290));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__70292 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__70292.cljs$core$IFn$_invoke$arity$1 ? fexpr__70292.cljs$core$IFn$_invoke$arity$1(G__70290) : fexpr__70292.call(null,G__70290));
})()], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"imag-part","imag-part",2028041294,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"make-polar","make-polar",2147326621,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?m","?m",896026745,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?a","?a",1314302913,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__70293){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__70294 = new cljs.core.Symbol(null,"?m","?m",896026745,null);
return (fexpr__70294.cljs$core$IFn$_invoke$arity$1 ? fexpr__70294.cljs$core$IFn$_invoke$arity$1(G__70293) : fexpr__70294.call(null,G__70293));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__70295 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__70295.cljs$core$IFn$_invoke$arity$1 ? fexpr__70295.cljs$core$IFn$_invoke$arity$1(G__70293) : fexpr__70295.call(null,G__70293));
})()], null))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"make-polar","make-polar",2147326621,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?m","?m",896026745,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__70296){
var r__39308__auto__ = (function (){var fexpr__70297 = new cljs.core.Symbol(null,"?m","?m",896026745,null);
return (fexpr__70297.cljs$core$IFn$_invoke$arity$1 ? fexpr__70297.cljs$core$IFn$_invoke$arity$1(G__70296) : fexpr__70297.call(null,G__70296));
})();
var or__5162__auto__ = r__39308__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"angle","angle",-1032341515,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"make-polar","make-polar",2147326621,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?a","?a",1314302913,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__70298){
var r__39308__auto__ = (function (){var fexpr__70299 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__70299.cljs$core$IFn$_invoke$arity$1 ? fexpr__70299.cljs$core$IFn$_invoke$arity$1(G__70298) : fexpr__70299.call(null,G__70298));
})();
var or__5162__auto__ = r__39308__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
}))], 0))], 0));
})();
emmy.simplify.rules.divide_numbers_through = emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(1),(new cljs.core.List(null,new cljs.core.Symbol(null,"?factor","?factor",598737740,null),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__70303){
var r__39308__auto__ = (function (){var fexpr__70304 = new cljs.core.Symbol(null,"?factor","?factor",598737740,null);
return (fexpr__70304.cljs$core$IFn$_invoke$arity$1 ? fexpr__70304.cljs$core$IFn$_invoke$arity$1(G__70303) : fexpr__70304.call(null,G__70303));
})();
var or__5162__auto__ = r__39308__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(1),(new cljs.core.List(null,new cljs.core.Symbol(null,"??factors","??factors",1906330792,null),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__70305){
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__70306 = new cljs.core.Symbol(null,"??factors","??factors",1906330792,null);
return (fexpr__70306.cljs$core$IFn$_invoke$arity$1 ? fexpr__70306.cljs$core$IFn$_invoke$arity$1(G__70305) : fexpr__70306.call(null,G__70305));
})()));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.value.number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?d","?d",-1851543854,null),(new cljs.core.List(null,emmy.value.number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__70307){
var r__39308__auto__ = (function (p__70308){
var map__70309 = p__70308;
var map__70309__$1 = cljs.core.__destructure_map(map__70309);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70309__$1,new cljs.core.Symbol(null,"?n","?n",-2053238410,null));
var d = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70309__$1,new cljs.core.Symbol(null,"?d","?d",-1851543854,null));
return emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(n,d);
})(G__70307);
var or__5162__auto__ = r__39308__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??terms","??terms",1737460425,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?d","?d",-1851543854,null),(new cljs.core.List(null,emmy.value.number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__70310){
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null)], null),(function (p1__70300_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
var G__70311 = p1__70300_SHARP_;
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),n,(function (){var fexpr__70312 = new cljs.core.Symbol(null,"?d","?d",-1851543854,null);
return (fexpr__70312.cljs$core$IFn$_invoke$arity$1 ? fexpr__70312.cljs$core$IFn$_invoke$arity$1(G__70311) : fexpr__70312.call(null,G__70311));
})()], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
}),(function (){var G__70313 = new cljs.core.Symbol(null,"??terms","??terms",1737460425,null);
return (p1__70300_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__70300_SHARP_.cljs$core$IFn$_invoke$arity$1(G__70313) : p1__70300_SHARP_.call(null,G__70313));
})());
})(G__70310)));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.value.number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??factors","??factors",1906330792,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?d","?d",-1851543854,null),(new cljs.core.List(null,emmy.value.number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__70314){
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p__70315){
var map__70316 = p__70315;
var map__70316__$1 = cljs.core.__destructure_map(map__70316);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70316__$1,new cljs.core.Symbol(null,"?n","?n",-2053238410,null));
var d = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70316__$1,new cljs.core.Symbol(null,"?d","?d",-1851543854,null));
return emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(n,d);
})(G__70314)], null),(function (){var fexpr__70317 = new cljs.core.Symbol(null,"??factors","??factors",1906330792,null);
return (fexpr__70317.cljs$core$IFn$_invoke$arity$1 ? fexpr__70317.cljs$core$IFn$_invoke$arity$1(G__70314) : fexpr__70317.call(null,G__70314));
})()));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??factors","??factors",1906330792,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?d","?d",-1851543854,null),(new cljs.core.List(null,emmy.value.number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__70318){
var r__39308__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__70301_SHARP_){
return emmy.generic.invert.cljs$core$IFn$_invoke$arity$1((function (){var G__70319 = new cljs.core.Symbol(null,"?d","?d",-1851543854,null);
return (p1__70301_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__70301_SHARP_.cljs$core$IFn$_invoke$arity$1(G__70319) : p1__70301_SHARP_.call(null,G__70319));
})());
})(G__70318)], null),(function (){var fexpr__70320 = new cljs.core.Symbol(null,"??factors","??factors",1906330792,null);
return (fexpr__70320.cljs$core$IFn$_invoke$arity$1 ? fexpr__70320.cljs$core$IFn$_invoke$arity$1(G__70318) : fexpr__70320.call(null,G__70318));
})()));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?d","?d",-1851543854,null),(new cljs.core.List(null,emmy.value.number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?factor","?factor",598737740,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__70321){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(function (){var fexpr__70322 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__70322.cljs$core$IFn$_invoke$arity$1 ? fexpr__70322.cljs$core$IFn$_invoke$arity$1(G__70321) : fexpr__70322.call(null,G__70321));
})(),(function (){var fexpr__70323 = new cljs.core.Symbol(null,"?d","?d",-1851543854,null);
return (fexpr__70323.cljs$core$IFn$_invoke$arity$1 ? fexpr__70323.cljs$core$IFn$_invoke$arity$1(G__70321) : fexpr__70323.call(null,G__70321));
})()], null)),(function (){var fexpr__70324 = new cljs.core.Symbol(null,"?factor","?factor",598737740,null);
return (fexpr__70324.cljs$core$IFn$_invoke$arity$1 ? fexpr__70324.cljs$core$IFn$_invoke$arity$1(G__70321) : fexpr__70324.call(null,G__70321));
})()], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?d","?d",-1851543854,null),(new cljs.core.List(null,emmy.value.number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??factors","??factors",1906330792,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__70325){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(function (){var fexpr__70326 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__70326.cljs$core$IFn$_invoke$arity$1 ? fexpr__70326.cljs$core$IFn$_invoke$arity$1(G__70325) : fexpr__70326.call(null,G__70325));
})(),(function (){var fexpr__70327 = new cljs.core.Symbol(null,"?d","?d",-1851543854,null);
return (fexpr__70327.cljs$core$IFn$_invoke$arity$1 ? fexpr__70327.cljs$core$IFn$_invoke$arity$1(G__70325) : fexpr__70327.call(null,G__70325));
})()], null)),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__70328 = new cljs.core.Symbol(null,"??factors","??factors",1906330792,null);
return (fexpr__70328.cljs$core$IFn$_invoke$arity$1 ? fexpr__70328.cljs$core$IFn$_invoke$arity$1(G__70325) : fexpr__70328.call(null,G__70325));
})()))], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?d","?d",-1851543854,null),(new cljs.core.List(null,emmy.value.number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__70329){
var r__39308__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__70302_SHARP_){
return emmy.generic.invert.cljs$core$IFn$_invoke$arity$1((function (){var G__70330 = new cljs.core.Symbol(null,"?d","?d",-1851543854,null);
return (p1__70302_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__70302_SHARP_.cljs$core$IFn$_invoke$arity$1(G__70330) : p1__70302_SHARP_.call(null,G__70330));
})());
})(G__70329),(function (){var fexpr__70331 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__70331.cljs$core$IFn$_invoke$arity$1 ? fexpr__70331.cljs$core$IFn$_invoke$arity$1(G__70329) : fexpr__70331.call(null,G__70329));
})()], null));
var or__5162__auto__ = r__39308__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__39308__auto__);
}
}))], 0))], 0));
emmy.simplify.rules.occurs_in_QMARK_ = (function emmy$simplify$rules$occurs_in_QMARK_(syms,all){
return cljs.core.boolean$(cljs.core.seq(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(syms,all)));
});
/**
 * Returns a rule simplifier of rules that are almost always helpful.
 */
emmy.simplify.rules.universal_reductions = (function emmy$simplify$rules$universal_reductions(simplify){
var misc = emmy.simplify.rules.miscsimp(simplify);
var le = emmy.simplify.rules.logexp(simplify);
var st = emmy.simplify.rules.trig_COLON_special(simplify);
var ti = emmy.simplify.rules.triginv(simplify);
var sim_root = emmy.simplify.rules.simplify_square_roots(simplify);
return (function (expr){
var syms = emmy.expression.variables_in(expr);
var sincos_QMARK_ = emmy.simplify.rules.occurs_in_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),null], null), null),syms);
var invtrig_QMARK_ = emmy.simplify.rules.occurs_in_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"atan","atan",-1026550135,null),null,new cljs.core.Symbol(null,"acos","acos",353741763,null),null,new cljs.core.Symbol(null,"asin","asin",-904130570,null),null], null), null),syms);
var logexp_QMARK_ = emmy.simplify.rules.occurs_in_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"log","log",45015523,null),null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),null], null), null),syms);
var sqrt_QMARK_ = cljs.core.contains_QMARK_(syms,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null));
var mag_QMARK_ = cljs.core.contains_QMARK_(syms,new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null));
var expr_SINGLEQUOTE_ = (function (){var G__70332 = (misc.cljs$core$IFn$_invoke$arity$1 ? misc.cljs$core$IFn$_invoke$arity$1(expr) : misc.call(null,expr));
var G__70332__$1 = ((logexp_QMARK_)?(le.cljs$core$IFn$_invoke$arity$1 ? le.cljs$core$IFn$_invoke$arity$1(G__70332) : le.call(null,G__70332)):G__70332);
var G__70332__$2 = ((mag_QMARK_)?(emmy.simplify.rules.magnitude.cljs$core$IFn$_invoke$arity$1 ? emmy.simplify.rules.magnitude.cljs$core$IFn$_invoke$arity$1(G__70332__$1) : emmy.simplify.rules.magnitude.call(null,G__70332__$1)):G__70332__$1);
var G__70332__$3 = ((invtrig_QMARK_)?(ti.cljs$core$IFn$_invoke$arity$1 ? ti.cljs$core$IFn$_invoke$arity$1(G__70332__$2) : ti.call(null,G__70332__$2)):G__70332__$2);
if(cljs.core.truth_((function (){var and__5160__auto__ = sincos_QMARK_;
if(and__5160__auto__){
return emmy.simplify.rules._STAR_sin_cos_simplify_QMARK__STAR_;
} else {
return and__5160__auto__;
}
})())){
return (st.cljs$core$IFn$_invoke$arity$1 ? st.cljs$core$IFn$_invoke$arity$1(G__70332__$3) : st.call(null,G__70332__$3));
} else {
return G__70332__$3;
}
})();
if(((sincos_QMARK_) && (invtrig_QMARK_))){
var G__70333 = (ti.cljs$core$IFn$_invoke$arity$1 ? ti.cljs$core$IFn$_invoke$arity$1(expr_SINGLEQUOTE_) : ti.call(null,expr_SINGLEQUOTE_));
return (sim_root.cljs$core$IFn$_invoke$arity$1 ? sim_root.cljs$core$IFn$_invoke$arity$1(G__70333) : sim_root.call(null,G__70333));
} else {
if(sqrt_QMARK_){
return (sim_root.cljs$core$IFn$_invoke$arity$1 ? sim_root.cljs$core$IFn$_invoke$arity$1(expr_SINGLEQUOTE_) : sim_root.call(null,expr_SINGLEQUOTE_));
} else {
return expr_SINGLEQUOTE_;

}
}
});
});

//# sourceMappingURL=emmy.simplify.rules.js.map
