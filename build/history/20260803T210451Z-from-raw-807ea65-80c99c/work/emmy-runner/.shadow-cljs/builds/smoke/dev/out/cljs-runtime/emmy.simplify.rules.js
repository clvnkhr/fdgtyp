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
var len__5897__auto___38020 = arguments.length;
var i__5898__auto___38021 = (0);
while(true){
if((i__5898__auto___38021 < len__5897__auto___38020)){
args__5903__auto__.push((arguments[i__5898__auto___38021]));

var G__38022 = (i__5898__auto___38021 + (1));
i__5898__auto___38021 = G__38022;
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
return emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,op_set,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__36907){
var r__36231__auto__ = (function (){var fexpr__36908 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__36908.cljs$core$IFn$_invoke$arity$1 ? fexpr__36908.cljs$core$IFn$_invoke$arity$1(G__36907) : fexpr__36908.call(null,G__36907));
})();
var or__5162__auto__ = r__36231__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
}))], 0));
}));

(emmy.simplify.rules.unary_elimination.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(emmy.simplify.rules.unary_elimination.cljs$lang$applyTo = (function (seq36902){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36902));
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
return emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,op,(new cljs.core.List(null,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__36910){
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [op], null),(function (p__36913){
var map__36914 = p__36913;
var map__36914__$1 = cljs.core.__destructure_map(map__36914);
var xs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36914__$1,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null));
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([constant]),xs);
})(G__36910)));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
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
return emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,op,(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,constant,null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__36918){
var r__36231__auto__ = constant;
var or__5162__auto__ = r__36231__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,op,(new cljs.core.List(null,constant,(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__36919){
var r__36231__auto__ = constant;
var or__5162__auto__ = r__36231__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
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
var len__5897__auto___38023 = arguments.length;
var i__5898__auto___38024 = (0);
while(true){
if((i__5898__auto___38024 < len__5897__auto___38023)){
args__5903__auto__.push((arguments[i__5898__auto___38024]));

var G__38025 = (i__5898__auto___38024 + (1));
i__5898__auto___38024 = G__38025;
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
return emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,op,(new cljs.core.List(null,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__36930){
var r__36231__auto__ = cljs.core.vec((function (){var fexpr__36931 = new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null);
return (fexpr__36931.cljs$core$IFn$_invoke$arity$1 ? fexpr__36931.cljs$core$IFn$_invoke$arity$1(G__36930) : fexpr__36931.call(null,G__36930));
})());
var or__5162__auto__ = r__36231__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"?x","?x",-555096650,null),emmy.pattern.rule._EQ__GT_),(function (G__36932){
var r__36231__auto__ = cljs.core.vec(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__36933 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__36933.cljs$core$IFn$_invoke$arity$1 ? fexpr__36933.cljs$core$IFn$_invoke$arity$1(G__36932) : fexpr__36933.call(null,G__36932));
})()], null));
var or__5162__auto__ = r__36231__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
}))], 0));
});
return emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,op_set,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??c","??c",1219586074,null),null,(1),null)),(2),null)),(3),null)),(4),null)),emmy.pattern.rule._EQ__GT_),(function (G__36936){
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__36937 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__36937.cljs$core$IFn$_invoke$arity$1 ? fexpr__36937.cljs$core$IFn$_invoke$arity$1(G__36936) : fexpr__36937.call(null,G__36936));
})()], null),(function (){var fexpr__36938 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__36938.cljs$core$IFn$_invoke$arity$1 ? fexpr__36938.cljs$core$IFn$_invoke$arity$1(G__36936) : fexpr__36938.call(null,G__36936));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__36939){
var map__36940 = p__36939;
var map__36940__$1 = cljs.core.__destructure_map(map__36940);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36940__$1,new cljs.core.Symbol(null,"?op","?op",-135731883,null));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36940__$1,new cljs.core.Symbol(null,"??b","??b",254504576,null));
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36940__$1,new cljs.core.Symbol(null,"??c","??c",1219586074,null));
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(flatten(op),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.concat.cljs$core$IFn$_invoke$arity$2(b,c)], 0));
})(G__36936)], 0)));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
}))], 0));
}));

(emmy.simplify.rules.associative.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(emmy.simplify.rules.associative.cljs$lang$applyTo = (function (seq36920){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36920));
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
var len__5897__auto___38026 = arguments.length;
var i__5898__auto___38027 = (0);
while(true){
if((i__5898__auto___38027 < len__5897__auto___38026)){
args__5903__auto__.push((arguments[i__5898__auto___38027]));

var G__38028 = (i__5898__auto___38027 + (1));
i__5898__auto___38027 = G__38028;
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
return emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,op_set,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__36951){
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__36952 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__36952.cljs$core$IFn$_invoke$arity$1 ? fexpr__36952.cljs$core$IFn$_invoke$arity$1(G__36951) : fexpr__36952.call(null,G__36951));
})()], null),(function (p1__36942_SHARP_){
return emmy.expression.sort((function (){var G__36953 = new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null);
return (p1__36942_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__36942_SHARP_.cljs$core$IFn$_invoke$arity$1(G__36953) : p1__36942_SHARP_.call(null,G__36953));
})());
})(G__36951)));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
}))], 0));
}));

(emmy.simplify.rules.commutative.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(emmy.simplify.rules.commutative.cljs$lang$applyTo = (function (seq36944){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36944));
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
var len__5897__auto___38029 = arguments.length;
var i__5898__auto___38030 = (0);
while(true){
if((i__5898__auto___38030 < len__5897__auto___38029)){
args__5903__auto__.push((arguments[i__5898__auto___38030]));

var G__38031 = (i__5898__auto___38030 + (1));
i__5898__auto___38030 = G__38031;
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
return emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,op_set,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??pre","??pre",-1767241378,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??post","??post",1092296697,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),emmy.pattern.rule._EQ__GT_),(function (G__36956){
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__36957 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__36957.cljs$core$IFn$_invoke$arity$1 ? fexpr__36957.cljs$core$IFn$_invoke$arity$1(G__36956) : fexpr__36957.call(null,G__36956));
})()], null),(function (m){
return cljs.core.dedupe.cljs$core$IFn$_invoke$arity$1((function (){var G__36958 = m;
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__36959 = new cljs.core.Symbol(null,"??pre","??pre",-1767241378,null);
return (fexpr__36959.cljs$core$IFn$_invoke$arity$1 ? fexpr__36959.cljs$core$IFn$_invoke$arity$1(G__36958) : fexpr__36959.call(null,G__36958));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__36960 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__36960.cljs$core$IFn$_invoke$arity$1 ? fexpr__36960.cljs$core$IFn$_invoke$arity$1(G__36958) : fexpr__36960.call(null,G__36958));
})()], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__36961 = new cljs.core.Symbol(null,"??post","??post",1092296697,null);
return (fexpr__36961.cljs$core$IFn$_invoke$arity$1 ? fexpr__36961.cljs$core$IFn$_invoke$arity$1(G__36958) : fexpr__36961.call(null,G__36958));
})()], 0)));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})());
})(G__36956)));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
}))], 0));
}));

(emmy.simplify.rules.idempotent.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(emmy.simplify.rules.idempotent.cljs$lang$applyTo = (function (seq36955){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36955));
}));

/**
 * Set of rules that collect adjacent products, exponents and nested exponents
 *   into exponent terms.
 */
emmy.simplify.rules.exponent_contract = emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.value.integral_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?m","?m",896026745,null),(new cljs.core.List(null,emmy.value.integral_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__36966){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__36968 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__36968.cljs$core$IFn$_invoke$arity$1 ? fexpr__36968.cljs$core$IFn$_invoke$arity$1(G__36966) : fexpr__36968.call(null,G__36966));
})(),(function (p1__36962_SHARP_){
return emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2((function (){var G__36969 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__36962_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__36962_SHARP_.cljs$core$IFn$_invoke$arity$1(G__36969) : p1__36962_SHARP_.call(null,G__36969));
})(),(function (){var G__36970 = new cljs.core.Symbol(null,"?m","?m",896026745,null);
return (p1__36962_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__36962_SHARP_.cljs$core$IFn$_invoke$arity$1(G__36970) : p1__36962_SHARP_.call(null,G__36970));
})());
})(G__36966)], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??pre","??pre",-1767241378,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.value.integral_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?m","?m",896026745,null),(new cljs.core.List(null,emmy.value.integral_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??post","??post",1092296697,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),emmy.pattern.rule._EQ__GT_),(function (G__36973){
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__36974 = new cljs.core.Symbol(null,"??pre","??pre",-1767241378,null);
return (fexpr__36974.cljs$core$IFn$_invoke$arity$1 ? fexpr__36974.cljs$core$IFn$_invoke$arity$1(G__36973) : fexpr__36974.call(null,G__36973));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__36975 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__36975.cljs$core$IFn$_invoke$arity$1 ? fexpr__36975.cljs$core$IFn$_invoke$arity$1(G__36973) : fexpr__36975.call(null,G__36973));
})(),(function (p1__36963_SHARP_){
return emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2((function (){var G__36976 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__36963_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__36963_SHARP_.cljs$core$IFn$_invoke$arity$1(G__36976) : p1__36963_SHARP_.call(null,G__36976));
})(),(function (){var G__36977 = new cljs.core.Symbol(null,"?m","?m",896026745,null);
return (p1__36963_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__36963_SHARP_.cljs$core$IFn$_invoke$arity$1(G__36977) : p1__36963_SHARP_.call(null,G__36977));
})());
})(G__36973)], null))], null),(function (){var fexpr__36978 = new cljs.core.Symbol(null,"??post","??post",1092296697,null);
return (fexpr__36978.cljs$core$IFn$_invoke$arity$1 ? fexpr__36978.cljs$core$IFn$_invoke$arity$1(G__36973) : fexpr__36978.call(null,G__36973));
})()], 0)));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??pre","??pre",-1767241378,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.value.integral_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??post","??post",1092296697,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),emmy.pattern.rule._EQ__GT_),(function (G__36981){
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__36982 = new cljs.core.Symbol(null,"??pre","??pre",-1767241378,null);
return (fexpr__36982.cljs$core$IFn$_invoke$arity$1 ? fexpr__36982.cljs$core$IFn$_invoke$arity$1(G__36981) : fexpr__36982.call(null,G__36981));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__36983 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__36983.cljs$core$IFn$_invoke$arity$1 ? fexpr__36983.cljs$core$IFn$_invoke$arity$1(G__36981) : fexpr__36983.call(null,G__36981));
})(),(function (p1__36964_SHARP_){
return emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2((function (){var G__36984 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__36964_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__36964_SHARP_.cljs$core$IFn$_invoke$arity$1(G__36984) : p1__36964_SHARP_.call(null,G__36984));
})(),(1));
})(G__36981)], null))], null),(function (){var fexpr__36986 = new cljs.core.Symbol(null,"??post","??post",1092296697,null);
return (fexpr__36986.cljs$core$IFn$_invoke$arity$1 ? fexpr__36986.cljs$core$IFn$_invoke$arity$1(G__36981) : fexpr__36986.call(null,G__36981));
})()], 0)));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??pre","??pre",-1767241378,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.value.integral_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??post","??post",1092296697,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),emmy.pattern.rule._EQ__GT_),(function (G__36987){
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__36989 = new cljs.core.Symbol(null,"??pre","??pre",-1767241378,null);
return (fexpr__36989.cljs$core$IFn$_invoke$arity$1 ? fexpr__36989.cljs$core$IFn$_invoke$arity$1(G__36987) : fexpr__36989.call(null,G__36987));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__36990 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__36990.cljs$core$IFn$_invoke$arity$1 ? fexpr__36990.cljs$core$IFn$_invoke$arity$1(G__36987) : fexpr__36990.call(null,G__36987));
})(),(function (p1__36965_SHARP_){
return emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2((function (){var G__36991 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__36965_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__36965_SHARP_.cljs$core$IFn$_invoke$arity$1(G__36991) : p1__36965_SHARP_.call(null,G__36991));
})(),(1));
})(G__36987)], null))], null),(function (){var fexpr__36992 = new cljs.core.Symbol(null,"??post","??post",1092296697,null);
return (fexpr__36992.cljs$core$IFn$_invoke$arity$1 ? fexpr__36992.cljs$core$IFn$_invoke$arity$1(G__36987) : fexpr__36992.call(null,G__36987));
})()], 0)));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??pre","??pre",-1767241378,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??post","??post",1092296697,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),emmy.pattern.rule._EQ__GT_),(function (G__36994){
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__36995 = new cljs.core.Symbol(null,"??pre","??pre",-1767241378,null);
return (fexpr__36995.cljs$core$IFn$_invoke$arity$1 ? fexpr__36995.cljs$core$IFn$_invoke$arity$1(G__36994) : fexpr__36995.call(null,G__36994));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__36996 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__36996.cljs$core$IFn$_invoke$arity$1 ? fexpr__36996.cljs$core$IFn$_invoke$arity$1(G__36994) : fexpr__36996.call(null,G__36994));
})(),(2)], null))], null),(function (){var fexpr__36997 = new cljs.core.Symbol(null,"??post","??post",1092296697,null);
return (fexpr__36997.cljs$core$IFn$_invoke$arity$1 ? fexpr__36997.cljs$core$IFn$_invoke$arity$1(G__36994) : fexpr__36997.call(null,G__36994));
})()], 0)));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
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
return emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.value.integral_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37002){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__37003 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37003.cljs$core$IFn$_invoke$arity$1 ? fexpr__37003.cljs$core$IFn$_invoke$arity$1(G__37002) : fexpr__37003.call(null,G__37002));
})(),(function (){var fexpr__37004 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__37004.cljs$core$IFn$_invoke$arity$1 ? fexpr__37004.cljs$core$IFn$_invoke$arity$1(G__37002) : fexpr__37004.call(null,G__37002));
})()], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37005){
var r__36231__auto__ = (function (){var fexpr__37006 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37006.cljs$core$IFn$_invoke$arity$1 ? fexpr__37006.cljs$core$IFn$_invoke$arity$1(G__37005) : fexpr__37006.call(null,G__37005));
})();
var or__5162__auto__ = r__36231__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.guard((function (_){
return emmy.simplify.rules._STAR_log_exp_simplify_QMARK__STAR_;
}),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null))),(function (p__37007){
var map__37008 = p__37007;
var map__37008__$1 = cljs.core.__destructure_map(map__37008);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37008__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
var and__5160__auto__ = emmy.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),xs], null))], null)),xs], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})(),new cljs.core.Symbol(null,"logexp1","logexp1",-1360132001,null));
if(cljs.core.truth_(and__5160__auto__)){
return x;
} else {
return and__5160__auto__;
}
}))),emmy.pattern.rule.guard((function (_){
return emmy.simplify.rules._STAR_sqrt_expt_simplify_QMARK__STAR_;
}),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null))),(function (p__37009){
var map__37010 = p__37009;
var map__37010__$1 = cljs.core.__destructure_map(map__37010);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37010__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
var and__5160__auto__ = emmy.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),xs], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),xs,(2)], null))], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})(),new cljs.core.Symbol(null,"logexp2","logexp2",-1768907713,null));
if(cljs.core.truth_(and__5160__auto__)){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),x,(2)], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
} else {
return and__5160__auto__;
}
}))),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37011){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),(function (){var fexpr__37012 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37012.cljs$core$IFn$_invoke$arity$1 ? fexpr__37012.cljs$core$IFn$_invoke$arity$1(G__37011) : fexpr__37012.call(null,G__37011));
})()], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
}))], 0))], 0));
});
/**
 * Rule simplifier for forms that contain `magnitude` entries.
 */
emmy.simplify.rules.magnitude = emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.value.real_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37015){
var r__36231__auto__ = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(emmy.generic.magnitude,new cljs.core.Symbol(null,"?n","?n",-2053238410,null))(G__37015);
var or__5162__auto__ = r__36231__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37016){
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (p__37017){
var map__37018 = p__37017;
var map__37018__$1 = cljs.core.__destructure_map(map__37018);
var xs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37018__$1,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37013_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),(new cljs.core.List(null,p1__37013_SHARP_,null,(1),null)),(2),null));
}),xs);
})(G__37016)));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(1),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37019){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),(function (){var fexpr__37020 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37020.cljs$core$IFn$_invoke$arity$1 ? fexpr__37020.cljs$core$IFn$_invoke$arity$1(G__37019) : fexpr__37020.call(null,G__37019));
})()], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.simplify.rules.even_integer_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37021){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__37022 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37022.cljs$core$IFn$_invoke$arity$1 ? fexpr__37022.cljs$core$IFn$_invoke$arity$1(G__37021) : fexpr__37022.call(null,G__37021));
})(),(function (){var fexpr__37023 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__37023.cljs$core$IFn$_invoke$arity$1 ? fexpr__37023.cljs$core$IFn$_invoke$arity$1(G__37021) : fexpr__37023.call(null,G__37021));
})()], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.value.integral_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37024){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),(function (){var fexpr__37025 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37025.cljs$core$IFn$_invoke$arity$1 ? fexpr__37025.cljs$core$IFn$_invoke$arity$1(G__37024) : fexpr__37025.call(null,G__37024));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__37026 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37026.cljs$core$IFn$_invoke$arity$1 ? fexpr__37026.cljs$core$IFn$_invoke$arity$1(G__37024) : fexpr__37026.call(null,G__37024));
})(),(function (p1__37014_SHARP_){
return emmy.generic._.cljs$core$IFn$_invoke$arity$2((function (){var G__37027 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__37014_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37014_SHARP_.cljs$core$IFn$_invoke$arity$1(G__37027) : p1__37014_SHARP_.call(null,G__37027));
})(),(1));
})(G__37024)], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
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
return emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,(0),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__37029){
var r__36231__auto__ = (1);
var or__5162__auto__ = r__36231__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(1),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__37030){
var r__36231__auto__ = (function (){var fexpr__37031 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37031.cljs$core$IFn$_invoke$arity$1 ? fexpr__37031.cljs$core$IFn$_invoke$arity$1(G__37030) : fexpr__37031.call(null,G__37030));
})();
var or__5162__auto__ = r__36231__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,emmy.complex.I,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.value.integral_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__37032){
var r__36231__auto__ = (function (p1__37028_SHARP_){
var G__37034 = cljs.core.mod((function (){var G__37035 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__37028_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37028_SHARP_.cljs$core$IFn$_invoke$arity$1(G__37035) : p1__37028_SHARP_.call(null,G__37035));
})(),(4));
var fexpr__37033 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),emmy.complex.I,(-1),emmy.generic._.cljs$core$IFn$_invoke$arity$1(emmy.complex.I)], null);
return (fexpr__37033.cljs$core$IFn$_invoke$arity$1 ? fexpr__37033.cljs$core$IFn$_invoke$arity$1(G__37034) : fexpr__37033.call(null,G__37034));
})(G__37032);
var or__5162__auto__ = r__36231__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?a","?a",1314302913,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?b","?b",1575118075,null),null,(1),null)),(2),null)),(3),null)),(function (p__37036){
var map__37037 = p__37036;
var map__37037__$1 = cljs.core.__destructure_map(map__37037);
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37037__$1,new cljs.core.Symbol(null,"?a","?a",1314302913,null));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37037__$1,new cljs.core.Symbol(null,"?b","?b",1575118075,null));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37037__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var as = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(a) : simplify.call(null,a));
var bs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(b) : simplify.call(null,b));
if(cljs.core.truth_((function (){var or__5162__auto__ = ((emmy.value.integral_QMARK_(as)) && (emmy.value.integral_QMARK_(bs)));
if(or__5162__auto__){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = (function (){var and__5160__auto__ = emmy.simplify.rules.even_integer_QMARK_(bs);
if(cljs.core.truth_(and__5160__auto__)){
return emmy.value.integral_QMARK_((function (){var G__37038 = (sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2(as,bs) : sym_COLON__STAR_.call(null,as,bs));
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__37038) : simplify.call(null,G__37038));
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
return emmy.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),x,as], null)),bs], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),x,(sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2(as,bs) : sym_COLON__STAR_.call(null,as,bs))], null))], null));
var or__5162__auto____$2 = r__36231__auto__;
if(or__5162__auto____$2){
return or__5162__auto____$2;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
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
})),(function (G__37039){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__37040 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37040.cljs$core$IFn$_invoke$arity$1 ? fexpr__37040.cljs$core$IFn$_invoke$arity$1(G__37039) : fexpr__37040.call(null,G__37039));
})(),(function (){var fexpr__37041 = new cljs.core.Symbol(null,"?ab","?ab",-380882607,null);
return (fexpr__37041.cljs$core$IFn$_invoke$arity$1 ? fexpr__37041.cljs$core$IFn$_invoke$arity$1(G__37039) : fexpr__37041.call(null,G__37039));
})()], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(1),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(function (_){
return emmy.simplify.rules._STAR_expt_half__GT_sqrt_QMARK__STAR_;
})),(function (G__37042){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__37043 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37043.cljs$core$IFn$_invoke$arity$1 ? fexpr__37043.cljs$core$IFn$_invoke$arity$1(G__37042) : fexpr__37043.call(null,G__37042));
})()], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs1*","??fs1*",1798735663,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs2","??fs2",1129791247,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs3","??fs3",1216174751,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),emmy.pattern.rule._EQ__GT_),(function (G__37044){
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__37045 = new cljs.core.Symbol(null,"??fs1","??fs1",-1584583474,null);
return (fexpr__37045.cljs$core$IFn$_invoke$arity$1 ? fexpr__37045.cljs$core$IFn$_invoke$arity$1(G__37044) : fexpr__37045.call(null,G__37044));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__37046 = new cljs.core.Symbol(null,"??fs2","??fs2",1129791247,null);
return (fexpr__37046.cljs$core$IFn$_invoke$arity$1 ? fexpr__37046.cljs$core$IFn$_invoke$arity$1(G__37044) : fexpr__37046.call(null,G__37044));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__37047 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37047.cljs$core$IFn$_invoke$arity$1 ? fexpr__37047.cljs$core$IFn$_invoke$arity$1(G__37044) : fexpr__37047.call(null,G__37044));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(function (){var fexpr__37048 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__37048.cljs$core$IFn$_invoke$arity$1 ? fexpr__37048.cljs$core$IFn$_invoke$arity$1(G__37044) : fexpr__37048.call(null,G__37044));
})()], null))], null))], null),(function (){var fexpr__37049 = new cljs.core.Symbol(null,"??fs3","??fs3",1216174751,null);
return (fexpr__37049.cljs$core$IFn$_invoke$arity$1 ? fexpr__37049.cljs$core$IFn$_invoke$arity$1(G__37044) : fexpr__37049.call(null,G__37044));
})()], 0)));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs1","??fs1",-1584583474,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs2","??fs2",1129791247,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs3","??fs3",1216174751,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),emmy.pattern.rule._EQ__GT_),(function (G__37050){
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__37051 = new cljs.core.Symbol(null,"??fs1","??fs1",-1584583474,null);
return (fexpr__37051.cljs$core$IFn$_invoke$arity$1 ? fexpr__37051.cljs$core$IFn$_invoke$arity$1(G__37050) : fexpr__37051.call(null,G__37050));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__37052 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37052.cljs$core$IFn$_invoke$arity$1 ? fexpr__37052.cljs$core$IFn$_invoke$arity$1(G__37050) : fexpr__37052.call(null,G__37050));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(function (){var fexpr__37053 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__37053.cljs$core$IFn$_invoke$arity$1 ? fexpr__37053.cljs$core$IFn$_invoke$arity$1(G__37050) : fexpr__37053.call(null,G__37050));
})()], null))], null))], null),(function (){var fexpr__37054 = new cljs.core.Symbol(null,"??fs2","??fs2",1129791247,null);
return (fexpr__37054.cljs$core$IFn$_invoke$arity$1 ? fexpr__37054.cljs$core$IFn$_invoke$arity$1(G__37050) : fexpr__37054.call(null,G__37050));
})(),(function (){var fexpr__37055 = new cljs.core.Symbol(null,"??fs3","??fs3",1216174751,null);
return (fexpr__37055.cljs$core$IFn$_invoke$arity$1 ? fexpr__37055.cljs$core$IFn$_invoke$arity$1(G__37050) : fexpr__37055.call(null,G__37050));
})()], 0)));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs1","??fs1",-1584583474,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y1","?y1",1237029156,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs2","??fs2",1129791247,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y2","?y2",731715171,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs3","??fs3",1216174751,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),emmy.pattern.rule._EQ__GT_),(function (G__37056){
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__37057 = new cljs.core.Symbol(null,"??fs1","??fs1",-1584583474,null);
return (fexpr__37057.cljs$core$IFn$_invoke$arity$1 ? fexpr__37057.cljs$core$IFn$_invoke$arity$1(G__37056) : fexpr__37057.call(null,G__37056));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__37058 = new cljs.core.Symbol(null,"??fs2","??fs2",1129791247,null);
return (fexpr__37058.cljs$core$IFn$_invoke$arity$1 ? fexpr__37058.cljs$core$IFn$_invoke$arity$1(G__37056) : fexpr__37058.call(null,G__37056));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__37059 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37059.cljs$core$IFn$_invoke$arity$1 ? fexpr__37059.cljs$core$IFn$_invoke$arity$1(G__37056) : fexpr__37059.call(null,G__37056));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__37060 = new cljs.core.Symbol(null,"?y1","?y1",1237029156,null);
return (fexpr__37060.cljs$core$IFn$_invoke$arity$1 ? fexpr__37060.cljs$core$IFn$_invoke$arity$1(G__37056) : fexpr__37060.call(null,G__37056));
})(),(function (){var fexpr__37061 = new cljs.core.Symbol(null,"?y2","?y2",731715171,null);
return (fexpr__37061.cljs$core$IFn$_invoke$arity$1 ? fexpr__37061.cljs$core$IFn$_invoke$arity$1(G__37056) : fexpr__37061.call(null,G__37056));
})()], null))], null))], null),(function (){var fexpr__37062 = new cljs.core.Symbol(null,"??fs3","??fs3",1216174751,null);
return (fexpr__37062.cljs$core$IFn$_invoke$arity$1 ? fexpr__37062.cljs$core$IFn$_invoke$arity$1(G__37056) : fexpr__37062.call(null,G__37056));
})()], 0)));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
}))], 0))], 0));
});
emmy.simplify.rules.simplify_square_roots = (function emmy$simplify$rules$simplify_square_roots(simplify){
return emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.simplify.rules.even_integer_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__37065){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__37066 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37066.cljs$core$IFn$_invoke$arity$1 ? fexpr__37066.cljs$core$IFn$_invoke$arity$1(G__37065) : fexpr__37066.call(null,G__37065));
})(),(function (p1__37063_SHARP_){
return emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((function (){var G__37067 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__37063_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37063_SHARP_.cljs$core$IFn$_invoke$arity$1(G__37067) : p1__37063_SHARP_.call(null,G__37067));
})(),(2));
})(G__37065)], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.guard((function (_){
return emmy.simplify.rules._STAR_sqrt_expt_simplify_QMARK__STAR_;
}),emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.simplify.rules.even_integer_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(function (p__37068){
var map__37069 = p__37068;
var map__37069__$1 = cljs.core.__destructure_map(map__37069);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37069__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37069__$1,new cljs.core.Symbol(null,"?n","?n",-2053238410,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
var half_n = emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(n,(2));
if(cljs.core.truth_(emmy.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),xs,n], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),xs,half_n], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})(),new cljs.core.Symbol(null,"simsqrt1","simsqrt1",-1069513157,null)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"?new-n","?new-n",-1095502685,null),half_n], null);
} else {
return null;
}
})),(function (G__37070){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__37071 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37071.cljs$core$IFn$_invoke$arity$1 ? fexpr__37071.cljs$core$IFn$_invoke$arity$1(G__37070) : fexpr__37071.call(null,G__37070));
})(),(function (){var fexpr__37072 = new cljs.core.Symbol(null,"?new-n","?new-n",-1095502685,null);
return (fexpr__37072.cljs$core$IFn$_invoke$arity$1 ? fexpr__37072.cljs$core$IFn$_invoke$arity$1(G__37070) : fexpr__37072.call(null,G__37070));
})()], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.simplify.rules.odd_positive_integer_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(function (p__37073){
var map__37074 = p__37073;
var map__37074__$1 = cljs.core.__destructure_map(map__37074);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37074__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37074__$1,new cljs.core.Symbol(null,"?n","?n",-2053238410,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
var half_dec_n = emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic._.cljs$core$IFn$_invoke$arity$2(n,(1)),(2));
if(cljs.core.truth_(emmy.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),xs,n], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),xs,half_dec_n], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})(),new cljs.core.Symbol(null,"simsqrt2","simsqrt2",-1794028771,null)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"?new-n","?new-n",-1095502685,null),half_dec_n], null);
} else {
return null;
}
})),(function (G__37075){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__37076 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37076.cljs$core$IFn$_invoke$arity$1 ? fexpr__37076.cljs$core$IFn$_invoke$arity$1(G__37075) : fexpr__37076.call(null,G__37075));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__37077 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37077.cljs$core$IFn$_invoke$arity$1 ? fexpr__37077.cljs$core$IFn$_invoke$arity$1(G__37075) : fexpr__37077.call(null,G__37075));
})(),(function (){var fexpr__37078 = new cljs.core.Symbol(null,"?new-n","?new-n",-1095502685,null);
return (fexpr__37078.cljs$core$IFn$_invoke$arity$1 ? fexpr__37078.cljs$core$IFn$_invoke$arity$1(G__37075) : fexpr__37078.call(null,G__37075));
})()], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
}))], 0)))], 0)),emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.simplify.rules.odd_integer_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__37079){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__37080 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37080.cljs$core$IFn$_invoke$arity$1 ? fexpr__37080.cljs$core$IFn$_invoke$arity$1(G__37079) : fexpr__37080.call(null,G__37079));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__37081 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37081.cljs$core$IFn$_invoke$arity$1 ? fexpr__37081.cljs$core$IFn$_invoke$arity$1(G__37079) : fexpr__37081.call(null,G__37079));
})(),(function (p1__37064_SHARP_){
return emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic._.cljs$core$IFn$_invoke$arity$2((function (){var G__37082 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__37064_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37064_SHARP_.cljs$core$IFn$_invoke$arity$1(G__37082) : p1__37064_SHARP_.call(null,G__37082));
})(),(1)),(2));
})(G__37079)], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__37083){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__37084 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37084.cljs$core$IFn$_invoke$arity$1 ? fexpr__37084.cljs$core$IFn$_invoke$arity$1(G__37083) : fexpr__37084.call(null,G__37083));
})()], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__37085){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__37086 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37086.cljs$core$IFn$_invoke$arity$1 ? fexpr__37086.cljs$core$IFn$_invoke$arity$1(G__37085) : fexpr__37086.call(null,G__37085));
})()], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??u","??u",788654559,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??v","??v",2028946795,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__37087){
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__37088 = new cljs.core.Symbol(null,"??u","??u",788654559,null);
return (fexpr__37088.cljs$core$IFn$_invoke$arity$1 ? fexpr__37088.cljs$core$IFn$_invoke$arity$1(G__37087) : fexpr__37088.call(null,G__37087));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__37089 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37089.cljs$core$IFn$_invoke$arity$1 ? fexpr__37089.cljs$core$IFn$_invoke$arity$1(G__37087) : fexpr__37089.call(null,G__37087));
})()], null))], null),(function (){var fexpr__37090 = new cljs.core.Symbol(null,"??v","??v",2028946795,null);
return (fexpr__37090.cljs$core$IFn$_invoke$arity$1 ? fexpr__37090.cljs$core$IFn$_invoke$arity$1(G__37087) : fexpr__37090.call(null,G__37087));
})()], 0)));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??u","??u",788654559,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??v","??v",2028946795,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__37091){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__37092 = new cljs.core.Symbol(null,"??u","??u",788654559,null);
return (fexpr__37092.cljs$core$IFn$_invoke$arity$1 ? fexpr__37092.cljs$core$IFn$_invoke$arity$1(G__37091) : fexpr__37092.call(null,G__37091));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__37093 = new cljs.core.Symbol(null,"??v","??v",2028946795,null);
return (fexpr__37093.cljs$core$IFn$_invoke$arity$1 ? fexpr__37093.cljs$core$IFn$_invoke$arity$1(G__37091) : fexpr__37093.call(null,G__37091));
})()], 0))),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__37094 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37094.cljs$core$IFn$_invoke$arity$1 ? fexpr__37094.cljs$core$IFn$_invoke$arity$1(G__37091) : fexpr__37094.call(null,G__37091));
})()], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??u","??u",788654559,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??v","??v",2028946795,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__37095){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__37096 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37096.cljs$core$IFn$_invoke$arity$1 ? fexpr__37096.cljs$core$IFn$_invoke$arity$1(G__37095) : fexpr__37096.call(null,G__37095));
})()], null)),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__37097 = new cljs.core.Symbol(null,"??u","??u",788654559,null);
return (fexpr__37097.cljs$core$IFn$_invoke$arity$1 ? fexpr__37097.cljs$core$IFn$_invoke$arity$1(G__37095) : fexpr__37097.call(null,G__37095));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__37098 = new cljs.core.Symbol(null,"??v","??v",2028946795,null);
return (fexpr__37098.cljs$core$IFn$_invoke$arity$1 ? fexpr__37098.cljs$core$IFn$_invoke$arity$1(G__37095) : fexpr__37098.call(null,G__37095));
})()], 0)))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??u","??u",788654559,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??v","??v",2028946795,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__37099){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__37100 = new cljs.core.Symbol(null,"??u","??u",788654559,null);
return (fexpr__37100.cljs$core$IFn$_invoke$arity$1 ? fexpr__37100.cljs$core$IFn$_invoke$arity$1(G__37099) : fexpr__37100.call(null,G__37099));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__37101 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37101.cljs$core$IFn$_invoke$arity$1 ? fexpr__37101.cljs$core$IFn$_invoke$arity$1(G__37099) : fexpr__37101.call(null,G__37099));
})()], null))], null),(function (){var fexpr__37102 = new cljs.core.Symbol(null,"??v","??v",2028946795,null);
return (fexpr__37102.cljs$core$IFn$_invoke$arity$1 ? fexpr__37102.cljs$core$IFn$_invoke$arity$1(G__37099) : fexpr__37102.call(null,G__37099));
})()], 0)))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??p","??p",1112654910,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??q","??q",253374785,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??u","??u",788654559,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??v","??v",2028946795,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__37103){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__37104 = new cljs.core.Symbol(null,"??p","??p",1112654910,null);
return (fexpr__37104.cljs$core$IFn$_invoke$arity$1 ? fexpr__37104.cljs$core$IFn$_invoke$arity$1(G__37103) : fexpr__37104.call(null,G__37103));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__37105 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37105.cljs$core$IFn$_invoke$arity$1 ? fexpr__37105.cljs$core$IFn$_invoke$arity$1(G__37103) : fexpr__37105.call(null,G__37103));
})()], null))], null),(function (){var fexpr__37106 = new cljs.core.Symbol(null,"??q","??q",253374785,null);
return (fexpr__37106.cljs$core$IFn$_invoke$arity$1 ? fexpr__37106.cljs$core$IFn$_invoke$arity$1(G__37103) : fexpr__37106.call(null,G__37103));
})()], 0))),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__37107 = new cljs.core.Symbol(null,"??u","??u",788654559,null);
return (fexpr__37107.cljs$core$IFn$_invoke$arity$1 ? fexpr__37107.cljs$core$IFn$_invoke$arity$1(G__37103) : fexpr__37107.call(null,G__37103));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__37108 = new cljs.core.Symbol(null,"??v","??v",2028946795,null);
return (fexpr__37108.cljs$core$IFn$_invoke$arity$1 ? fexpr__37108.cljs$core$IFn$_invoke$arity$1(G__37103) : fexpr__37108.call(null,G__37103));
})()], 0)))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??p","??p",1112654910,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??q","??q",253374785,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??u","??u",788654559,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??v","??v",2028946795,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__37109){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__37110 = new cljs.core.Symbol(null,"??p","??p",1112654910,null);
return (fexpr__37110.cljs$core$IFn$_invoke$arity$1 ? fexpr__37110.cljs$core$IFn$_invoke$arity$1(G__37109) : fexpr__37110.call(null,G__37109));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__37111 = new cljs.core.Symbol(null,"??q","??q",253374785,null);
return (fexpr__37111.cljs$core$IFn$_invoke$arity$1 ? fexpr__37111.cljs$core$IFn$_invoke$arity$1(G__37109) : fexpr__37111.call(null,G__37109));
})()], 0))),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__37112 = new cljs.core.Symbol(null,"??u","??u",788654559,null);
return (fexpr__37112.cljs$core$IFn$_invoke$arity$1 ? fexpr__37112.cljs$core$IFn$_invoke$arity$1(G__37109) : fexpr__37112.call(null,G__37109));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__37113 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37113.cljs$core$IFn$_invoke$arity$1 ? fexpr__37113.cljs$core$IFn$_invoke$arity$1(G__37109) : fexpr__37113.call(null,G__37109));
})()], null))], null),(function (){var fexpr__37114 = new cljs.core.Symbol(null,"??v","??v",2028946795,null);
return (fexpr__37114.cljs$core$IFn$_invoke$arity$1 ? fexpr__37114.cljs$core$IFn$_invoke$arity$1(G__37109) : fexpr__37114.call(null,G__37109));
})()], 0)))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
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
var G__37116 = arguments.length;
switch (G__37116) {
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
return (function (p__37119){
var map__37120 = p__37119;
var map__37120__$1 = cljs.core.__destructure_map(map__37120);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37120__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37120__$1,new cljs.core.Symbol(null,"?y","?y",-1454470631,null));
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
}),emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pred(new cljs.core.Symbol(null,"e1","e1",-732861271,null))),(function (G__37121){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__37122 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37122.cljs$core$IFn$_invoke$arity$1 ? fexpr__37122.cljs$core$IFn$_invoke$arity$1(G__37121) : fexpr__37122.call(null,G__37121));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__37123 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__37123.cljs$core$IFn$_invoke$arity$1 ? fexpr__37123.cljs$core$IFn$_invoke$arity$1(G__37121) : fexpr__37123.call(null,G__37121));
})()], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??ys","??ys",1180811471,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),pred(new cljs.core.Symbol(null,"e2","e2",1288255343,null))),(function (G__37124){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__37125 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37125.cljs$core$IFn$_invoke$arity$1 ? fexpr__37125.cljs$core$IFn$_invoke$arity$1(G__37124) : fexpr__37125.call(null,G__37124));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__37126 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__37126.cljs$core$IFn$_invoke$arity$1 ? fexpr__37126.cljs$core$IFn$_invoke$arity$1(G__37124) : fexpr__37126.call(null,G__37124));
})()], null),(function (){var fexpr__37127 = new cljs.core.Symbol(null,"??ys","??ys",1180811471,null);
return (fexpr__37127.cljs$core$IFn$_invoke$arity$1 ? fexpr__37127.cljs$core$IFn$_invoke$arity$1(G__37124) : fexpr__37127.call(null,G__37124));
})()))], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pred(new cljs.core.Symbol(null,"e3","e3",980159791,null))),(function (G__37128){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__37129 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37129.cljs$core$IFn$_invoke$arity$1 ? fexpr__37129.cljs$core$IFn$_invoke$arity$1(G__37128) : fexpr__37129.call(null,G__37128));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__37130 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__37130.cljs$core$IFn$_invoke$arity$1 ? fexpr__37130.cljs$core$IFn$_invoke$arity$1(G__37128) : fexpr__37130.call(null,G__37128));
})()], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??ys","??ys",1180811471,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),pred(new cljs.core.Symbol(null,"e4","e4",-714258248,null))),(function (G__37131){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__37132 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37132.cljs$core$IFn$_invoke$arity$1 ? fexpr__37132.cljs$core$IFn$_invoke$arity$1(G__37131) : fexpr__37132.call(null,G__37131));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__37133 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__37133.cljs$core$IFn$_invoke$arity$1 ? fexpr__37133.cljs$core$IFn$_invoke$arity$1(G__37131) : fexpr__37133.call(null,G__37131));
})()], null),(function (){var fexpr__37134 = new cljs.core.Symbol(null,"??ys","??ys",1180811471,null);
return (fexpr__37134.cljs$core$IFn$_invoke$arity$1 ? fexpr__37134.cljs$core$IFn$_invoke$arity$1(G__37131) : fexpr__37134.call(null,G__37131));
})()))], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
}))], 0))], 0))));
});
emmy.simplify.rules.sqrt_contract = (function emmy$simplify$rules$sqrt_contract(simplify){
return emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??c","??c",1219586074,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null))),(function (p__37135){
var map__37136 = p__37135;
var map__37136__$1 = cljs.core.__destructure_map(map__37136);
var m = map__37136__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37136__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37136__$1,new cljs.core.Symbol(null,"?y","?y",-1454470631,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
var ys = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(y) : simplify.call(null,y));
if(cljs.core.truth_(emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(xs,ys))){
var and__5160__auto__ = emmy.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$2(xs,new cljs.core.Symbol(null,"c1","c1",-1521904966,null));
if(and__5160__auto__){
var G__37137 = m;
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__37138 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__37138.cljs$core$IFn$_invoke$arity$1 ? fexpr__37138.cljs$core$IFn$_invoke$arity$1(G__37137) : fexpr__37138.call(null,G__37137));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs], null),(function (){var fexpr__37139 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__37139.cljs$core$IFn$_invoke$arity$1 ? fexpr__37139.cljs$core$IFn$_invoke$arity$1(G__37137) : fexpr__37139.call(null,G__37137));
})(),(function (){var fexpr__37140 = new cljs.core.Symbol(null,"??c","??c",1219586074,null);
return (fexpr__37140.cljs$core$IFn$_invoke$arity$1 ? fexpr__37140.cljs$core$IFn$_invoke$arity$1(G__37137) : fexpr__37140.call(null,G__37137));
})()], 0)));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
} else {
return and__5160__auto__;
}
} else {
var and__5160__auto__ = emmy.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$3(xs,ys,new cljs.core.Symbol(null,"c1","c1",-1521904966,null));
if(and__5160__auto__){
var G__37141 = m;
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__37142 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__37142.cljs$core$IFn$_invoke$arity$1 ? fexpr__37142.cljs$core$IFn$_invoke$arity$1(G__37141) : fexpr__37142.call(null,G__37141));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),xs,ys], null))], null))], null),(function (){var fexpr__37143 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__37143.cljs$core$IFn$_invoke$arity$1 ? fexpr__37143.cljs$core$IFn$_invoke$arity$1(G__37141) : fexpr__37143.call(null,G__37141));
})(),(function (){var fexpr__37144 = new cljs.core.Symbol(null,"??c","??c",1219586074,null);
return (fexpr__37144.cljs$core$IFn$_invoke$arity$1 ? fexpr__37144.cljs$core$IFn$_invoke$arity$1(G__37141) : fexpr__37144.call(null,G__37141));
})()], 0)));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
} else {
return and__5160__auto__;
}
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null))),(function (p__37145){
var map__37146 = p__37145;
var map__37146__$1 = cljs.core.__destructure_map(map__37146);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37146__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37146__$1,new cljs.core.Symbol(null,"?y","?y",-1454470631,null));
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
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),xs,ys], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
} else {
return and__5160__auto__;
}
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null))),(function (p__37147){
var map__37148 = p__37147;
var map__37148__$1 = cljs.core.__destructure_map(map__37148);
var m = map__37148__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37148__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37148__$1,new cljs.core.Symbol(null,"?y","?y",-1454470631,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
var ys = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(y) : simplify.call(null,y));
if(cljs.core.truth_(emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(xs,ys))){
var and__5160__auto__ = emmy.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$2(xs,new cljs.core.Symbol(null,"c3","c3",468715789,null));
if(and__5160__auto__){
var G__37149 = m;
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__37150 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__37150.cljs$core$IFn$_invoke$arity$1 ? fexpr__37150.cljs$core$IFn$_invoke$arity$1(G__37149) : fexpr__37150.call(null,G__37149));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__37151 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__37151.cljs$core$IFn$_invoke$arity$1 ? fexpr__37151.cljs$core$IFn$_invoke$arity$1(G__37149) : fexpr__37151.call(null,G__37149));
})()], 0)));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
} else {
return and__5160__auto__;
}
} else {
var and__5160__auto__ = emmy.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$3(xs,ys,new cljs.core.Symbol(null,"c3","c3",468715789,null));
if(and__5160__auto__){
var G__37152 = m;
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__37153 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__37153.cljs$core$IFn$_invoke$arity$1 ? fexpr__37153.cljs$core$IFn$_invoke$arity$1(G__37152) : fexpr__37153.call(null,G__37152));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),xs,ys], null))], null))], null),(function (){var fexpr__37154 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__37154.cljs$core$IFn$_invoke$arity$1 ? fexpr__37154.cljs$core$IFn$_invoke$arity$1(G__37152) : fexpr__37154.call(null,G__37152));
})()], 0)));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
} else {
return and__5160__auto__;
}
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),(3),null))),(function (p__37155){
var map__37156 = p__37155;
var map__37156__$1 = cljs.core.__destructure_map(map__37156);
var m = map__37156__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37156__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37156__$1,new cljs.core.Symbol(null,"?y","?y",-1454470631,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
var ys = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(y) : simplify.call(null,y));
if(cljs.core.truth_(emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(xs,ys))){
var and__5160__auto__ = emmy.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$2(xs,new cljs.core.Symbol(null,"c4","c4",-1626390159,null));
if(and__5160__auto__){
var G__37157 = m;
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__37158 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__37158.cljs$core$IFn$_invoke$arity$1 ? fexpr__37158.cljs$core$IFn$_invoke$arity$1(G__37157) : fexpr__37158.call(null,G__37157));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__37159 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__37159.cljs$core$IFn$_invoke$arity$1 ? fexpr__37159.cljs$core$IFn$_invoke$arity$1(G__37157) : fexpr__37159.call(null,G__37157));
})()], 0)))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
} else {
return and__5160__auto__;
}
} else {
var and__5160__auto__ = emmy.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$3(xs,ys,new cljs.core.Symbol(null,"c4","c4",-1626390159,null));
if(and__5160__auto__){
var G__37160 = m;
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),xs,ys], null))], null)),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__37161 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__37161.cljs$core$IFn$_invoke$arity$1 ? fexpr__37161.cljs$core$IFn$_invoke$arity$1(G__37160) : fexpr__37161.call(null,G__37160));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__37162 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__37162.cljs$core$IFn$_invoke$arity$1 ? fexpr__37162.cljs$core$IFn$_invoke$arity$1(G__37160) : fexpr__37162.call(null,G__37160));
})()], 0)))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
} else {
return and__5160__auto__;
}
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??c","??c",1219586074,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??d","??d",-581862453,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),(3),null))),(function (p__37163){
var map__37164 = p__37163;
var map__37164__$1 = cljs.core.__destructure_map(map__37164);
var m = map__37164__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37164__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37164__$1,new cljs.core.Symbol(null,"?y","?y",-1454470631,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
var ys = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(y) : simplify.call(null,y));
if(cljs.core.truth_(emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(xs,ys))){
var and__5160__auto__ = emmy.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$2(xs,new cljs.core.Symbol(null,"c5","c5",1025457982,null));
if(and__5160__auto__){
var G__37165 = m;
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__37166 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__37166.cljs$core$IFn$_invoke$arity$1 ? fexpr__37166.cljs$core$IFn$_invoke$arity$1(G__37165) : fexpr__37166.call(null,G__37165));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__37167 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__37167.cljs$core$IFn$_invoke$arity$1 ? fexpr__37167.cljs$core$IFn$_invoke$arity$1(G__37165) : fexpr__37167.call(null,G__37165));
})()], 0))),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__37168 = new cljs.core.Symbol(null,"??c","??c",1219586074,null);
return (fexpr__37168.cljs$core$IFn$_invoke$arity$1 ? fexpr__37168.cljs$core$IFn$_invoke$arity$1(G__37165) : fexpr__37168.call(null,G__37165));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__37169 = new cljs.core.Symbol(null,"??d","??d",-581862453,null);
return (fexpr__37169.cljs$core$IFn$_invoke$arity$1 ? fexpr__37169.cljs$core$IFn$_invoke$arity$1(G__37165) : fexpr__37169.call(null,G__37165));
})()], 0)))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
} else {
return and__5160__auto__;
}
} else {
var and__5160__auto__ = emmy.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$3(xs,ys,new cljs.core.Symbol(null,"c5","c5",1025457982,null));
if(and__5160__auto__){
var G__37170 = m;
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__37171 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__37171.cljs$core$IFn$_invoke$arity$1 ? fexpr__37171.cljs$core$IFn$_invoke$arity$1(G__37170) : fexpr__37171.call(null,G__37170));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),xs,ys], null))], null))], null),(function (){var fexpr__37172 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__37172.cljs$core$IFn$_invoke$arity$1 ? fexpr__37172.cljs$core$IFn$_invoke$arity$1(G__37170) : fexpr__37172.call(null,G__37170));
})()], 0))),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__37173 = new cljs.core.Symbol(null,"??c","??c",1219586074,null);
return (fexpr__37173.cljs$core$IFn$_invoke$arity$1 ? fexpr__37173.cljs$core$IFn$_invoke$arity$1(G__37170) : fexpr__37173.call(null,G__37170));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__37174 = new cljs.core.Symbol(null,"??d","??d",-581862453,null);
return (fexpr__37174.cljs$core$IFn$_invoke$arity$1 ? fexpr__37174.cljs$core$IFn$_invoke$arity$1(G__37170) : fexpr__37174.call(null,G__37170));
})()], 0)))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
} else {
return and__5160__auto__;
}
}
}))], 0))], 0));
});
emmy.simplify.rules.specfun__GT_logexp = (function (){var two_i = emmy.complex.complex.cljs$core$IFn$_invoke$arity$2(0.0,2.0);
return emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37175){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),(function (){var fexpr__37176 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37176.cljs$core$IFn$_invoke$arity$1 ? fexpr__37176.cljs$core$IFn$_invoke$arity$1(G__37175) : fexpr__37176.call(null,G__37175));
})()], null))], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?z","?z",711595547,null),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37177){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.complex.I,(function (){var fexpr__37178 = new cljs.core.Symbol(null,"?z","?z",711595547,null);
return (fexpr__37178.cljs$core$IFn$_invoke$arity$1 ? fexpr__37178.cljs$core$IFn$_invoke$arity$1(G__37177) : fexpr__37178.call(null,G__37177));
})()], null))], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.complex.I,(function (){var fexpr__37179 = new cljs.core.Symbol(null,"?z","?z",711595547,null);
return (fexpr__37179.cljs$core$IFn$_invoke$arity$1 ? fexpr__37179.cljs$core$IFn$_invoke$arity$1(G__37177) : fexpr__37179.call(null,G__37177));
})()], null))], null))], null))], null)),two_i], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"asin","asin",-904130570,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?z","?z",711595547,null),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37180){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.generic._.cljs$core$IFn$_invoke$arity$1(emmy.complex.I),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.complex.I,(function (){var fexpr__37181 = new cljs.core.Symbol(null,"?z","?z",711595547,null);
return (fexpr__37181.cljs$core$IFn$_invoke$arity$1 ? fexpr__37181.cljs$core$IFn$_invoke$arity$1(G__37180) : fexpr__37181.call(null,G__37180));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__37182 = new cljs.core.Symbol(null,"?z","?z",711595547,null);
return (fexpr__37182.cljs$core$IFn$_invoke$arity$1 ? fexpr__37182.cljs$core$IFn$_invoke$arity$1(G__37180) : fexpr__37182.call(null,G__37180));
})(),(2)], null))], null))], null))], null))], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"acos","acos",353741763,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?z","?z",711595547,null),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37183){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.generic._.cljs$core$IFn$_invoke$arity$1(emmy.complex.I),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__37184 = new cljs.core.Symbol(null,"?z","?z",711595547,null);
return (fexpr__37184.cljs$core$IFn$_invoke$arity$1 ? fexpr__37184.cljs$core$IFn$_invoke$arity$1(G__37183) : fexpr__37184.call(null,G__37183));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.complex.I,cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__37185 = new cljs.core.Symbol(null,"?z","?z",711595547,null);
return (fexpr__37185.cljs$core$IFn$_invoke$arity$1 ? fexpr__37185.cljs$core$IFn$_invoke$arity$1(G__37183) : fexpr__37185.call(null,G__37183));
})(),(2)], null))], null))], null))], null))], null))], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sinh","sinh",-990423302,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?u","?u",749886731,null),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37186){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (){var fexpr__37187 = new cljs.core.Symbol(null,"?u","?u",749886731,null);
return (fexpr__37187.cljs$core$IFn$_invoke$arity$1 ? fexpr__37187.cljs$core$IFn$_invoke$arity$1(G__37186) : fexpr__37187.call(null,G__37186));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(-1),(function (){var fexpr__37188 = new cljs.core.Symbol(null,"?u","?u",749886731,null);
return (fexpr__37188.cljs$core$IFn$_invoke$arity$1 ? fexpr__37188.cljs$core$IFn$_invoke$arity$1(G__37186) : fexpr__37188.call(null,G__37186));
})()], null))], null))], null)),(2)], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?u","?u",749886731,null),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37189){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (){var fexpr__37190 = new cljs.core.Symbol(null,"?u","?u",749886731,null);
return (fexpr__37190.cljs$core$IFn$_invoke$arity$1 ? fexpr__37190.cljs$core$IFn$_invoke$arity$1(G__37189) : fexpr__37190.call(null,G__37189));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(-1),(function (){var fexpr__37191 = new cljs.core.Symbol(null,"?u","?u",749886731,null);
return (fexpr__37191.cljs$core$IFn$_invoke$arity$1 ? fexpr__37191.cljs$core$IFn$_invoke$arity$1(G__37189) : fexpr__37191.call(null,G__37189));
})()], null))], null))], null)),(2)], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),(new cljs.core.List(null,emmy.simplify.rules.not_integral_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__37192){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__37193 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__37193.cljs$core$IFn$_invoke$arity$1 ? fexpr__37193.cljs$core$IFn$_invoke$arity$1(G__37192) : fexpr__37193.call(null,G__37192));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),(function (){var fexpr__37194 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37194.cljs$core$IFn$_invoke$arity$1 ? fexpr__37194.cljs$core$IFn$_invoke$arity$1(G__37192) : fexpr__37194.call(null,G__37192));
})()], null))], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
}))], 0))], 0));
})();
emmy.simplify.rules.logexp__GT_specfun = emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(-1),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37195){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__37196 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37196.cljs$core$IFn$_invoke$arity$1 ? fexpr__37196.cljs$core$IFn$_invoke$arity$1(G__37195) : fexpr__37196.call(null,G__37195));
})(),(-1)], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(1),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37197){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__37198 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37198.cljs$core$IFn$_invoke$arity$1 ? fexpr__37198.cljs$core$IFn$_invoke$arity$1(G__37197) : fexpr__37198.call(null,G__37197));
})()], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(-1),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37199){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__37200 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37200.cljs$core$IFn$_invoke$arity$1 ? fexpr__37200.cljs$core$IFn$_invoke$arity$1(G__37199) : fexpr__37200.call(null,G__37199));
})()], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(3),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37201){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__37202 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37202.cljs$core$IFn$_invoke$arity$1 ? fexpr__37202.cljs$core$IFn$_invoke$arity$1(G__37201) : fexpr__37202.call(null,G__37201));
})()], null)),(3)], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(-3),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37203){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__37204 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37204.cljs$core$IFn$_invoke$arity$1 ? fexpr__37204.cljs$core$IFn$_invoke$arity$1(G__37203) : fexpr__37204.call(null,G__37203));
})()], null)),(-3)], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??n1","??n1",-1325838299,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??n2","??n2",-1403574689,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37205){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__37206 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37206.cljs$core$IFn$_invoke$arity$1 ? fexpr__37206.cljs$core$IFn$_invoke$arity$1(G__37205) : fexpr__37206.call(null,G__37205));
})(),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__37207 = new cljs.core.Symbol(null,"??n1","??n1",-1325838299,null);
return (fexpr__37207.cljs$core$IFn$_invoke$arity$1 ? fexpr__37207.cljs$core$IFn$_invoke$arity$1(G__37205) : fexpr__37207.call(null,G__37205));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__37208 = new cljs.core.Symbol(null,"??n2","??n2",-1403574689,null);
return (fexpr__37208.cljs$core$IFn$_invoke$arity$1 ? fexpr__37208.cljs$core$IFn$_invoke$arity$1(G__37205) : fexpr__37208.call(null,G__37205));
})()], 0)))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
}))], 0))], 0));
emmy.simplify.rules.log_contract = (function emmy$simplify$rules$log_contract(simplify){
return emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x1","??x1",-1923305193,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x2","?x2",1502785613,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x3","??x3",-411077265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x4","?x4",94899597,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x5","??x5",1822045235,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),emmy.pattern.rule._EQ__GT_),(function (G__37209){
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null)], null),(function (){var fexpr__37210 = new cljs.core.Symbol(null,"??x1","??x1",-1923305193,null);
return (fexpr__37210.cljs$core$IFn$_invoke$arity$1 ? fexpr__37210.cljs$core$IFn$_invoke$arity$1(G__37209) : fexpr__37210.call(null,G__37209));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__37211 = new cljs.core.Symbol(null,"??x3","??x3",-411077265,null);
return (fexpr__37211.cljs$core$IFn$_invoke$arity$1 ? fexpr__37211.cljs$core$IFn$_invoke$arity$1(G__37209) : fexpr__37211.call(null,G__37209));
})(),(function (){var fexpr__37212 = new cljs.core.Symbol(null,"??x5","??x5",1822045235,null);
return (fexpr__37212.cljs$core$IFn$_invoke$arity$1 ? fexpr__37212.cljs$core$IFn$_invoke$arity$1(G__37209) : fexpr__37212.call(null,G__37209));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__37213 = new cljs.core.Symbol(null,"?x2","?x2",1502785613,null);
return (fexpr__37213.cljs$core$IFn$_invoke$arity$1 ? fexpr__37213.cljs$core$IFn$_invoke$arity$1(G__37209) : fexpr__37213.call(null,G__37209));
})(),(function (){var fexpr__37214 = new cljs.core.Symbol(null,"?x4","?x4",94899597,null);
return (fexpr__37214.cljs$core$IFn$_invoke$arity$1 ? fexpr__37214.cljs$core$IFn$_invoke$arity$1(G__37209) : fexpr__37214.call(null,G__37209));
})()], null))], null))], null)], 0)));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"-","-",-471816912,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__37215){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(function (){var fexpr__37216 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37216.cljs$core$IFn$_invoke$arity$1 ? fexpr__37216.cljs$core$IFn$_invoke$arity$1(G__37215) : fexpr__37216.call(null,G__37215));
})(),(function (){var fexpr__37217 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__37217.cljs$core$IFn$_invoke$arity$1 ? fexpr__37217.cljs$core$IFn$_invoke$arity$1(G__37215) : fexpr__37217.call(null,G__37215));
})()], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x1","??x1",-1923305193,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f1","??f1",-1548442439,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f2","??f2",745277317,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x2","??x2",169445330,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f3","??f3",-1809203400,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f4","??f4",1817370441,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x3","??x3",-411077265,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),(function (m){
var s1 = (function (){var G__37218 = (function (){var G__37219 = m;
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__37220 = new cljs.core.Symbol(null,"??f1","??f1",-1548442439,null);
return (fexpr__37220.cljs$core$IFn$_invoke$arity$1 ? fexpr__37220.cljs$core$IFn$_invoke$arity$1(G__37219) : fexpr__37220.call(null,G__37219));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__37221 = new cljs.core.Symbol(null,"??f2","??f2",745277317,null);
return (fexpr__37221.cljs$core$IFn$_invoke$arity$1 ? fexpr__37221.cljs$core$IFn$_invoke$arity$1(G__37219) : fexpr__37221.call(null,G__37219));
})()], 0)));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__37218) : simplify.call(null,G__37218));
})();
var s2 = (function (){var G__37222 = (function (){var G__37223 = m;
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__37224 = new cljs.core.Symbol(null,"??f3","??f3",-1809203400,null);
return (fexpr__37224.cljs$core$IFn$_invoke$arity$1 ? fexpr__37224.cljs$core$IFn$_invoke$arity$1(G__37223) : fexpr__37224.call(null,G__37223));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__37225 = new cljs.core.Symbol(null,"??f4","??f4",1817370441,null);
return (fexpr__37225.cljs$core$IFn$_invoke$arity$1 ? fexpr__37225.cljs$core$IFn$_invoke$arity$1(G__37223) : fexpr__37225.call(null,G__37223));
})()], 0)));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__37222) : simplify.call(null,G__37222));
})();
if(cljs.core.truth_(emmy.generic.exact_zero_QMARK_((function (){var G__37226 = (new cljs.core.List(null,new cljs.core.Symbol(null,"-","-",-471816912,null),(new cljs.core.List(null,s1,(new cljs.core.List(null,s2,null,(1),null)),(2),null)),(3),null));
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__37226) : simplify.call(null,G__37226));
})()))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"?s1","?s1",-1174751069,null),s1], null);
} else {
return null;
}
})),(function (G__37227){
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__37228 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37228.cljs$core$IFn$_invoke$arity$1 ? fexpr__37228.cljs$core$IFn$_invoke$arity$1(G__37227) : fexpr__37228.call(null,G__37227));
})(),(function (){var fexpr__37229 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__37229.cljs$core$IFn$_invoke$arity$1 ? fexpr__37229.cljs$core$IFn$_invoke$arity$1(G__37227) : fexpr__37229.call(null,G__37227));
})()], null))], null)),(function (){var fexpr__37230 = new cljs.core.Symbol(null,"?s1","?s1",-1174751069,null);
return (fexpr__37230.cljs$core$IFn$_invoke$arity$1 ? fexpr__37230.cljs$core$IFn$_invoke$arity$1(G__37227) : fexpr__37230.call(null,G__37227));
})()], null))], null),(function (){var fexpr__37231 = new cljs.core.Symbol(null,"??x1","??x1",-1923305193,null);
return (fexpr__37231.cljs$core$IFn$_invoke$arity$1 ? fexpr__37231.cljs$core$IFn$_invoke$arity$1(G__37227) : fexpr__37231.call(null,G__37227));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__37232 = new cljs.core.Symbol(null,"??x2","??x2",169445330,null);
return (fexpr__37232.cljs$core$IFn$_invoke$arity$1 ? fexpr__37232.cljs$core$IFn$_invoke$arity$1(G__37227) : fexpr__37232.call(null,G__37227));
})(),(function (){var fexpr__37233 = new cljs.core.Symbol(null,"??x3","??x3",-411077265,null);
return (fexpr__37233.cljs$core$IFn$_invoke$arity$1 ? fexpr__37233.cljs$core$IFn$_invoke$arity$1(G__37227) : fexpr__37233.call(null,G__37227));
})()], 0)));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
}))], 0))], 0));
});
emmy.simplify.rules.log_expand = emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x1","?x1",697080023,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x2","?x2",1502785613,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37234){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),(function (){var fexpr__37235 = new cljs.core.Symbol(null,"?x1","?x1",697080023,null);
return (fexpr__37235.cljs$core$IFn$_invoke$arity$1 ? fexpr__37235.cljs$core$IFn$_invoke$arity$1(G__37234) : fexpr__37235.call(null,G__37234));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__37236 = new cljs.core.Symbol(null,"?x2","?x2",1502785613,null);
return (fexpr__37236.cljs$core$IFn$_invoke$arity$1 ? fexpr__37236.cljs$core$IFn$_invoke$arity$1(G__37234) : fexpr__37236.call(null,G__37234));
})()], null),(function (){var fexpr__37237 = new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null);
return (fexpr__37237.cljs$core$IFn$_invoke$arity$1 ? fexpr__37237.cljs$core$IFn$_invoke$arity$1(G__37234) : fexpr__37237.call(null,G__37234));
})()))], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x1","?x1",697080023,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x2","?x2",1502785613,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37238){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),(function (){var fexpr__37239 = new cljs.core.Symbol(null,"?x1","?x1",697080023,null);
return (fexpr__37239.cljs$core$IFn$_invoke$arity$1 ? fexpr__37239.cljs$core$IFn$_invoke$arity$1(G__37238) : fexpr__37239.call(null,G__37238));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),(function (){var fexpr__37240 = new cljs.core.Symbol(null,"?x2","?x2",1502785613,null);
return (fexpr__37240.cljs$core$IFn$_invoke$arity$1 ? fexpr__37240.cljs$core$IFn$_invoke$arity$1(G__37238) : fexpr__37240.call(null,G__37238));
})()], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?e","?e",-1194391683,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37241){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__37242 = new cljs.core.Symbol(null,"?e","?e",-1194391683,null);
return (fexpr__37242.cljs$core$IFn$_invoke$arity$1 ? fexpr__37242.cljs$core$IFn$_invoke$arity$1(G__37241) : fexpr__37242.call(null,G__37241));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),(function (){var fexpr__37243 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37243.cljs$core$IFn$_invoke$arity$1 ? fexpr__37243.cljs$core$IFn$_invoke$arity$1(G__37241) : fexpr__37243.call(null,G__37241));
})()], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
}))], 0))], 0));
emmy.simplify.rules.log_extra = emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.value.integral_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f1","??f1",-1548442439,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f2","??f2",745277317,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),emmy.pattern.rule._EQ__GT_),(function (G__37244){
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__37245 = new cljs.core.Symbol(null,"??f1","??f1",-1548442439,null);
return (fexpr__37245.cljs$core$IFn$_invoke$arity$1 ? fexpr__37245.cljs$core$IFn$_invoke$arity$1(G__37244) : fexpr__37245.call(null,G__37244));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__37246 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37246.cljs$core$IFn$_invoke$arity$1 ? fexpr__37246.cljs$core$IFn$_invoke$arity$1(G__37244) : fexpr__37246.call(null,G__37244));
})(),(function (){var fexpr__37247 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__37247.cljs$core$IFn$_invoke$arity$1 ? fexpr__37247.cljs$core$IFn$_invoke$arity$1(G__37244) : fexpr__37247.call(null,G__37244));
})()], null))], null))], null),(function (){var fexpr__37248 = new cljs.core.Symbol(null,"??f2","??f2",745277317,null);
return (fexpr__37248.cljs$core$IFn$_invoke$arity$1 ? fexpr__37248.cljs$core$IFn$_invoke$arity$1(G__37244) : fexpr__37248.call(null,G__37244));
})()], 0)));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
}))], 0))], 0));
emmy.simplify.rules.canonicalize_partials = emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??i","??i",-474049037,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??j","??j",1098328567,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37249){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__37250 = new cljs.core.Symbol(null,"??i","??i",-474049037,null);
return (fexpr__37250.cljs$core$IFn$_invoke$arity$1 ? fexpr__37250.cljs$core$IFn$_invoke$arity$1(G__37249) : fexpr__37250.call(null,G__37249));
})())),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__37251 = new cljs.core.Symbol(null,"??j","??j",1098328567,null);
return (fexpr__37251.cljs$core$IFn$_invoke$arity$1 ? fexpr__37251.cljs$core$IFn$_invoke$arity$1(G__37249) : fexpr__37251.call(null,G__37249));
})()))], null)),(function (){var fexpr__37252 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__37252.cljs$core$IFn$_invoke$arity$1 ? fexpr__37252.cljs$core$IFn$_invoke$arity$1(G__37249) : fexpr__37252.call(null,G__37249));
})()], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??i","??i",-474049037,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??j","??j",1098328567,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??more","??more",-1836200365,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37253){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__37254 = new cljs.core.Symbol(null,"??i","??i",-474049037,null);
return (fexpr__37254.cljs$core$IFn$_invoke$arity$1 ? fexpr__37254.cljs$core$IFn$_invoke$arity$1(G__37253) : fexpr__37254.call(null,G__37253));
})())),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__37255 = new cljs.core.Symbol(null,"??j","??j",1098328567,null);
return (fexpr__37255.cljs$core$IFn$_invoke$arity$1 ? fexpr__37255.cljs$core$IFn$_invoke$arity$1(G__37253) : fexpr__37255.call(null,G__37253));
})()))], null),(function (){var fexpr__37256 = new cljs.core.Symbol(null,"??more","??more",-1836200365,null);
return (fexpr__37256.cljs$core$IFn$_invoke$arity$1 ? fexpr__37256.cljs$core$IFn$_invoke$arity$1(G__37253) : fexpr__37256.call(null,G__37253));
})())),(function (){var fexpr__37257 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__37257.cljs$core$IFn$_invoke$arity$1 ? fexpr__37257.cljs$core$IFn$_invoke$arity$1(G__37253) : fexpr__37257.call(null,G__37253));
})()], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??i","??i",-474049037,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??j","??j",1098328567,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37258){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__37259 = new cljs.core.Symbol(null,"??i","??i",-474049037,null);
return (fexpr__37259.cljs$core$IFn$_invoke$arity$1 ? fexpr__37259.cljs$core$IFn$_invoke$arity$1(G__37258) : fexpr__37259.call(null,G__37258));
})())),(function (){var fexpr__37260 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__37260.cljs$core$IFn$_invoke$arity$1 ? fexpr__37260.cljs$core$IFn$_invoke$arity$1(G__37258) : fexpr__37260.call(null,G__37258));
})()], null)),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__37261 = new cljs.core.Symbol(null,"??j","??j",1098328567,null);
return (fexpr__37261.cljs$core$IFn$_invoke$arity$1 ? fexpr__37261.cljs$core$IFn$_invoke$arity$1(G__37258) : fexpr__37261.call(null,G__37258));
})()))], null)),(function (){var fexpr__37262 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__37262.cljs$core$IFn$_invoke$arity$1 ? fexpr__37262.cljs$core$IFn$_invoke$arity$1(G__37258) : fexpr__37262.call(null,G__37258));
})()], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??i","??i",-474049037,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??j","??j",1098328567,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37263){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__37264 = new cljs.core.Symbol(null,"??i","??i",-474049037,null);
return (fexpr__37264.cljs$core$IFn$_invoke$arity$1 ? fexpr__37264.cljs$core$IFn$_invoke$arity$1(G__37263) : fexpr__37264.call(null,G__37263));
})())),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__37265 = new cljs.core.Symbol(null,"??j","??j",1098328567,null);
return (fexpr__37265.cljs$core$IFn$_invoke$arity$1 ? fexpr__37265.cljs$core$IFn$_invoke$arity$1(G__37263) : fexpr__37265.call(null,G__37263));
})())),(function (){var fexpr__37266 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__37266.cljs$core$IFn$_invoke$arity$1 ? fexpr__37266.cljs$core$IFn$_invoke$arity$1(G__37263) : fexpr__37266.call(null,G__37263));
})()], null))], null)),(function (){var fexpr__37267 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__37267.cljs$core$IFn$_invoke$arity$1 ? fexpr__37267.cljs$core$IFn$_invoke$arity$1(G__37263) : fexpr__37267.call(null,G__37263));
})()], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??i","??i",-474049037,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??j","??j",1098328567,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?m","?m",896026745,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37268){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__37269 = new cljs.core.Symbol(null,"??i","??i",-474049037,null);
return (fexpr__37269.cljs$core$IFn$_invoke$arity$1 ? fexpr__37269.cljs$core$IFn$_invoke$arity$1(G__37268) : fexpr__37269.call(null,G__37268));
})())),(function (){var fexpr__37270 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__37270.cljs$core$IFn$_invoke$arity$1 ? fexpr__37270.cljs$core$IFn$_invoke$arity$1(G__37268) : fexpr__37270.call(null,G__37268));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__37271 = new cljs.core.Symbol(null,"??j","??j",1098328567,null);
return (fexpr__37271.cljs$core$IFn$_invoke$arity$1 ? fexpr__37271.cljs$core$IFn$_invoke$arity$1(G__37268) : fexpr__37271.call(null,G__37268));
})())),(function (){var fexpr__37272 = new cljs.core.Symbol(null,"?m","?m",896026745,null);
return (fexpr__37272.cljs$core$IFn$_invoke$arity$1 ? fexpr__37272.cljs$core$IFn$_invoke$arity$1(G__37268) : fexpr__37272.call(null,G__37268));
})()], null))], null)),(function (){var fexpr__37273 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__37273.cljs$core$IFn$_invoke$arity$1 ? fexpr__37273.cljs$core$IFn$_invoke$arity$1(G__37268) : fexpr__37273.call(null,G__37268));
})()], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??i","??i",-474049037,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??j","??j",1098328567,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??more","??more",-1836200365,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37274){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__37275 = new cljs.core.Symbol(null,"??i","??i",-474049037,null);
return (fexpr__37275.cljs$core$IFn$_invoke$arity$1 ? fexpr__37275.cljs$core$IFn$_invoke$arity$1(G__37274) : fexpr__37275.call(null,G__37274));
})())),(function (){var fexpr__37276 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__37276.cljs$core$IFn$_invoke$arity$1 ? fexpr__37276.cljs$core$IFn$_invoke$arity$1(G__37274) : fexpr__37276.call(null,G__37274));
})()], null)),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__37277 = new cljs.core.Symbol(null,"??j","??j",1098328567,null);
return (fexpr__37277.cljs$core$IFn$_invoke$arity$1 ? fexpr__37277.cljs$core$IFn$_invoke$arity$1(G__37274) : fexpr__37277.call(null,G__37274));
})()))], null),(function (){var fexpr__37278 = new cljs.core.Symbol(null,"??more","??more",-1836200365,null);
return (fexpr__37278.cljs$core$IFn$_invoke$arity$1 ? fexpr__37278.cljs$core$IFn$_invoke$arity$1(G__37274) : fexpr__37278.call(null,G__37274));
})())),(function (){var fexpr__37279 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__37279.cljs$core$IFn$_invoke$arity$1 ? fexpr__37279.cljs$core$IFn$_invoke$arity$1(G__37274) : fexpr__37279.call(null,G__37274));
})()], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??i","??i",-474049037,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??j","??j",1098328567,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?m","?m",896026745,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??more","??more",-1836200365,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37280){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__37281 = new cljs.core.Symbol(null,"??i","??i",-474049037,null);
return (fexpr__37281.cljs$core$IFn$_invoke$arity$1 ? fexpr__37281.cljs$core$IFn$_invoke$arity$1(G__37280) : fexpr__37281.call(null,G__37280));
})())),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__37282 = new cljs.core.Symbol(null,"??j","??j",1098328567,null);
return (fexpr__37282.cljs$core$IFn$_invoke$arity$1 ? fexpr__37282.cljs$core$IFn$_invoke$arity$1(G__37280) : fexpr__37282.call(null,G__37280));
})())),(function (){var fexpr__37283 = new cljs.core.Symbol(null,"?m","?m",896026745,null);
return (fexpr__37283.cljs$core$IFn$_invoke$arity$1 ? fexpr__37283.cljs$core$IFn$_invoke$arity$1(G__37280) : fexpr__37283.call(null,G__37280));
})()], null))], null),(function (){var fexpr__37284 = new cljs.core.Symbol(null,"??more","??more",-1836200365,null);
return (fexpr__37284.cljs$core$IFn$_invoke$arity$1 ? fexpr__37284.cljs$core$IFn$_invoke$arity$1(G__37280) : fexpr__37284.call(null,G__37280));
})())),(function (){var fexpr__37285 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__37285.cljs$core$IFn$_invoke$arity$1 ? fexpr__37285.cljs$core$IFn$_invoke$arity$1(G__37280) : fexpr__37285.call(null,G__37280));
})()], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??i","??i",-474049037,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??j","??j",1098328567,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?m","?m",896026745,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??more","??more",-1836200365,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37286){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__37287 = new cljs.core.Symbol(null,"??i","??i",-474049037,null);
return (fexpr__37287.cljs$core$IFn$_invoke$arity$1 ? fexpr__37287.cljs$core$IFn$_invoke$arity$1(G__37286) : fexpr__37287.call(null,G__37286));
})())),(function (){var fexpr__37288 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__37288.cljs$core$IFn$_invoke$arity$1 ? fexpr__37288.cljs$core$IFn$_invoke$arity$1(G__37286) : fexpr__37288.call(null,G__37286));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__37289 = new cljs.core.Symbol(null,"??j","??j",1098328567,null);
return (fexpr__37289.cljs$core$IFn$_invoke$arity$1 ? fexpr__37289.cljs$core$IFn$_invoke$arity$1(G__37286) : fexpr__37289.call(null,G__37286));
})())),(function (){var fexpr__37290 = new cljs.core.Symbol(null,"?m","?m",896026745,null);
return (fexpr__37290.cljs$core$IFn$_invoke$arity$1 ? fexpr__37290.cljs$core$IFn$_invoke$arity$1(G__37286) : fexpr__37290.call(null,G__37286));
})()], null))], null),(function (){var fexpr__37291 = new cljs.core.Symbol(null,"??more","??more",-1836200365,null);
return (fexpr__37291.cljs$core$IFn$_invoke$arity$1 ? fexpr__37291.cljs$core$IFn$_invoke$arity$1(G__37286) : fexpr__37291.call(null,G__37286));
})())),(function (){var fexpr__37292 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__37292.cljs$core$IFn$_invoke$arity$1 ? fexpr__37292.cljs$core$IFn$_invoke$arity$1(G__37286) : fexpr__37292.call(null,G__37286));
})()], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
}))], 0)),emmy.pattern.rule.guard((function (_){
return emmy.simplify.rules._STAR_commute_partials_QMARK__STAR_;
}),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??i","??i",-474049037,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??ys","??ys",1180811471,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??j","??j",1098328567,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??zs","??zs",1863806627,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??args","??args",-2100991912,null),null,(1),null)),(2),null)),(function (p__37293){
var map__37294 = p__37293;
var map__37294__$1 = cljs.core.__destructure_map(map__37294);
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37294__$1,new cljs.core.Symbol(null,"??i","??i",-474049037,null));
var j = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37294__$1,new cljs.core.Symbol(null,"??j","??j",1098328567,null));
return (cljs.core.compare(cljs.core.vec(i),cljs.core.vec(j)) > (0));
})),(function (G__37295){
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__37296 = new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null);
return (fexpr__37296.cljs$core$IFn$_invoke$arity$1 ? fexpr__37296.cljs$core$IFn$_invoke$arity$1(G__37295) : fexpr__37296.call(null,G__37295));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__37297 = new cljs.core.Symbol(null,"??j","??j",1098328567,null);
return (fexpr__37297.cljs$core$IFn$_invoke$arity$1 ? fexpr__37297.cljs$core$IFn$_invoke$arity$1(G__37295) : fexpr__37297.call(null,G__37295));
})()))], null),(function (){var fexpr__37298 = new cljs.core.Symbol(null,"??ys","??ys",1180811471,null);
return (fexpr__37298.cljs$core$IFn$_invoke$arity$1 ? fexpr__37298.cljs$core$IFn$_invoke$arity$1(G__37295) : fexpr__37298.call(null,G__37295));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__37299 = new cljs.core.Symbol(null,"??i","??i",-474049037,null);
return (fexpr__37299.cljs$core$IFn$_invoke$arity$1 ? fexpr__37299.cljs$core$IFn$_invoke$arity$1(G__37295) : fexpr__37299.call(null,G__37295));
})()))], null),(function (){var fexpr__37300 = new cljs.core.Symbol(null,"??zs","??zs",1863806627,null);
return (fexpr__37300.cljs$core$IFn$_invoke$arity$1 ? fexpr__37300.cljs$core$IFn$_invoke$arity$1(G__37295) : fexpr__37300.call(null,G__37295));
})()], 0))),(function (){var fexpr__37301 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__37301.cljs$core$IFn$_invoke$arity$1 ? fexpr__37301.cljs$core$IFn$_invoke$arity$1(G__37295) : fexpr__37301.call(null,G__37295));
})()], null))], null),(function (){var fexpr__37302 = new cljs.core.Symbol(null,"??args","??args",-2100991912,null);
return (fexpr__37302.cljs$core$IFn$_invoke$arity$1 ? fexpr__37302.cljs$core$IFn$_invoke$arity$1(G__37295) : fexpr__37302.call(null,G__37295));
})()));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})))], 0));
emmy.simplify.rules.trig__GT_sincos = emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37303){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__37304 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37304.cljs$core$IFn$_invoke$arity$1 ? fexpr__37304.cljs$core$IFn$_invoke$arity$1(G__37303) : fexpr__37304.call(null,G__37303));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__37305 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37305.cljs$core$IFn$_invoke$arity$1 ? fexpr__37305.cljs$core$IFn$_invoke$arity$1(G__37303) : fexpr__37305.call(null,G__37303));
})()], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cot","cot",-1635649012,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37306){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__37307 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37307.cljs$core$IFn$_invoke$arity$1 ? fexpr__37307.cljs$core$IFn$_invoke$arity$1(G__37306) : fexpr__37307.call(null,G__37306));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__37308 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37308.cljs$core$IFn$_invoke$arity$1 ? fexpr__37308.cljs$core$IFn$_invoke$arity$1(G__37306) : fexpr__37308.call(null,G__37306));
})()], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sec","sec",60154974,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37309){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__37310 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37310.cljs$core$IFn$_invoke$arity$1 ? fexpr__37310.cljs$core$IFn$_invoke$arity$1(G__37309) : fexpr__37310.call(null,G__37309));
})()], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"csc","csc",-427853492,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37311){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__37312 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37312.cljs$core$IFn$_invoke$arity$1 ? fexpr__37312.cljs$core$IFn$_invoke$arity$1(G__37311) : fexpr__37312.call(null,G__37311));
})()], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37313){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(function (){var fexpr__37314 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__37314.cljs$core$IFn$_invoke$arity$1 ? fexpr__37314.cljs$core$IFn$_invoke$arity$1(G__37313) : fexpr__37314.call(null,G__37313));
})(),(function (){var fexpr__37315 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37315.cljs$core$IFn$_invoke$arity$1 ? fexpr__37315.cljs$core$IFn$_invoke$arity$1(G__37313) : fexpr__37315.call(null,G__37313));
})()], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37316){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(function (){var fexpr__37317 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__37317.cljs$core$IFn$_invoke$arity$1 ? fexpr__37317.cljs$core$IFn$_invoke$arity$1(G__37316) : fexpr__37317.call(null,G__37316));
})(),(1)], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
}))], 0))], 0));
emmy.simplify.rules.sincos__GT_trig = emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__37318){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(function (){var fexpr__37319 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37319.cljs$core$IFn$_invoke$arity$1 ? fexpr__37319.cljs$core$IFn$_invoke$arity$1(G__37318) : fexpr__37319.call(null,G__37318));
})()], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??n1","??n1",-1325838299,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??n2","??n2",-1403574689,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__37320){
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__37321 = new cljs.core.Symbol(null,"??n1","??n1",-1325838299,null);
return (fexpr__37321.cljs$core$IFn$_invoke$arity$1 ? fexpr__37321.cljs$core$IFn$_invoke$arity$1(G__37320) : fexpr__37321.call(null,G__37320));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(function (){var fexpr__37322 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37322.cljs$core$IFn$_invoke$arity$1 ? fexpr__37322.cljs$core$IFn$_invoke$arity$1(G__37320) : fexpr__37322.call(null,G__37320));
})()], null))], null),(function (){var fexpr__37323 = new cljs.core.Symbol(null,"??n2","??n2",-1403574689,null);
return (fexpr__37323.cljs$core$IFn$_invoke$arity$1 ? fexpr__37323.cljs$core$IFn$_invoke$arity$1(G__37320) : fexpr__37323.call(null,G__37320));
})()], 0)));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??d1","??d1",1286203826,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??d2","??d2",525254907,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__37324){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(function (){var fexpr__37325 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37325.cljs$core$IFn$_invoke$arity$1 ? fexpr__37325.cljs$core$IFn$_invoke$arity$1(G__37324) : fexpr__37325.call(null,G__37324));
})()], null)),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__37326 = new cljs.core.Symbol(null,"??d1","??d1",1286203826,null);
return (fexpr__37326.cljs$core$IFn$_invoke$arity$1 ? fexpr__37326.cljs$core$IFn$_invoke$arity$1(G__37324) : fexpr__37326.call(null,G__37324));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__37327 = new cljs.core.Symbol(null,"??d2","??d2",525254907,null);
return (fexpr__37327.cljs$core$IFn$_invoke$arity$1 ? fexpr__37327.cljs$core$IFn$_invoke$arity$1(G__37324) : fexpr__37327.call(null,G__37324));
})()], 0)))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??n1","??n1",-1325838299,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??n2","??n2",-1403574689,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??d1","??d1",1286203826,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??d2","??d2",525254907,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__37328){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__37329 = new cljs.core.Symbol(null,"??n1","??n1",-1325838299,null);
return (fexpr__37329.cljs$core$IFn$_invoke$arity$1 ? fexpr__37329.cljs$core$IFn$_invoke$arity$1(G__37328) : fexpr__37329.call(null,G__37328));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(function (){var fexpr__37330 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37330.cljs$core$IFn$_invoke$arity$1 ? fexpr__37330.cljs$core$IFn$_invoke$arity$1(G__37328) : fexpr__37330.call(null,G__37328));
})()], null))], null),(function (){var fexpr__37331 = new cljs.core.Symbol(null,"??n2","??n2",-1403574689,null);
return (fexpr__37331.cljs$core$IFn$_invoke$arity$1 ? fexpr__37331.cljs$core$IFn$_invoke$arity$1(G__37328) : fexpr__37331.call(null,G__37328));
})()], 0))),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__37332 = new cljs.core.Symbol(null,"??d1","??d1",1286203826,null);
return (fexpr__37332.cljs$core$IFn$_invoke$arity$1 ? fexpr__37332.cljs$core$IFn$_invoke$arity$1(G__37328) : fexpr__37332.call(null,G__37328));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__37333 = new cljs.core.Symbol(null,"??d2","??d2",525254907,null);
return (fexpr__37333.cljs$core$IFn$_invoke$arity$1 ? fexpr__37333.cljs$core$IFn$_invoke$arity$1(G__37328) : fexpr__37333.call(null,G__37328));
})()], 0)))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
}))], 0))], 0));
emmy.simplify.rules.triginv = (function emmy$simplify$rules$triginv(simplify){
return emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var sym_COLON_atan = emmy.numsymb.symbolic_operator(new cljs.core.Symbol(null,"atan","atan",-1026550135,null));
return emmy.pattern.rule.guard((function (_){
return emmy.simplify.rules._STAR_aggressive_atan_simplify_QMARK__STAR_;
}),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(3),null))),(function (p__37334){
var map__37335 = p__37334;
var map__37335__$1 = cljs.core.__destructure_map(map__37335);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37335__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37335__$1,new cljs.core.Symbol(null,"?y","?y",-1454470631,null));
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
var s = (function (){var G__37336 = (new cljs.core.List(null,new cljs.core.Symbol(null,"gcd","gcd",1659909537,null),(new cljs.core.List(null,ys,(new cljs.core.List(null,xs,null,(1),null)),(2),null)),(3),null));
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__37336) : simplify.call(null,G__37336));
})();
if(cljs.core.truth_(emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(s))){
return null;
} else {
var and__5160__auto__ = emmy.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"positive?","positive?",1455224686,null),(new cljs.core.List(null,s,null,(1),null)),(2),null)),new cljs.core.Symbol(null,"aggressive-atan-2","aggressive-atan-2",-628426094,null));
if(cljs.core.truth_(and__5160__auto__)){
var yv = (function (){var G__37337 = (new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,ys,(new cljs.core.List(null,s,null,(1),null)),(2),null)),(3),null));
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__37337) : simplify.call(null,G__37337));
})();
var xv = (function (){var G__37338 = (new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,xs,(new cljs.core.List(null,s,null,(1),null)),(2),null)),(3),null));
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__37338) : simplify.call(null,G__37338));
})();
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atan","atan",-1026550135,null),yv,xv], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
} else {
return and__5160__auto__;
}
}
}
}
})));
})(),emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"asin","asin",-904130570,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37339){
var r__36231__auto__ = (function (){var fexpr__37340 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37340.cljs$core$IFn$_invoke$arity$1 ? fexpr__37340.cljs$core$IFn$_invoke$arity$1(G__37339) : fexpr__37340.call(null,G__37339));
})();
var or__5162__auto__ = r__36231__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"acos","acos",353741763,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37341){
var r__36231__auto__ = (function (){var fexpr__37342 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37342.cljs$core$IFn$_invoke$arity$1 ? fexpr__37342.cljs$core$IFn$_invoke$arity$1(G__37341) : fexpr__37342.call(null,G__37341));
})();
var or__5162__auto__ = r__36231__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37343){
var r__36231__auto__ = (function (){var fexpr__37344 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37344.cljs$core$IFn$_invoke$arity$1 ? fexpr__37344.cljs$core$IFn$_invoke$arity$1(G__37343) : fexpr__37344.call(null,G__37343));
})();
var or__5162__auto__ = r__36231__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"acos","acos",353741763,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37345){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__37346 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37346.cljs$core$IFn$_invoke$arity$1 ? fexpr__37346.cljs$core$IFn$_invoke$arity$1(G__37345) : fexpr__37346.call(null,G__37345));
})(),(2)], null))], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"asin","asin",-904130570,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37347){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__37348 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__37348.cljs$core$IFn$_invoke$arity$1 ? fexpr__37348.cljs$core$IFn$_invoke$arity$1(G__37347) : fexpr__37348.call(null,G__37347));
})(),(2)], null))], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"asin","asin",-904130570,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37349){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(function (){var fexpr__37350 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__37350.cljs$core$IFn$_invoke$arity$1 ? fexpr__37350.cljs$core$IFn$_invoke$arity$1(G__37349) : fexpr__37350.call(null,G__37349));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__37351 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__37351.cljs$core$IFn$_invoke$arity$1 ? fexpr__37351.cljs$core$IFn$_invoke$arity$1(G__37349) : fexpr__37351.call(null,G__37349));
})(),(2)], null))], null))], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"acos","acos",353741763,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37352){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__37353 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37353.cljs$core$IFn$_invoke$arity$1 ? fexpr__37353.cljs$core$IFn$_invoke$arity$1(G__37352) : fexpr__37353.call(null,G__37352));
})(),(2)], null))], null))], null)),(function (){var fexpr__37354 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37354.cljs$core$IFn$_invoke$arity$1 ? fexpr__37354.cljs$core$IFn$_invoke$arity$1(G__37352) : fexpr__37354.call(null,G__37352));
})()], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?a","?a",1314302913,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?b","?b",1575118075,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37355){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(function (){var fexpr__37356 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__37356.cljs$core$IFn$_invoke$arity$1 ? fexpr__37356.cljs$core$IFn$_invoke$arity$1(G__37355) : fexpr__37356.call(null,G__37355));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__37357 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__37357.cljs$core$IFn$_invoke$arity$1 ? fexpr__37357.cljs$core$IFn$_invoke$arity$1(G__37355) : fexpr__37357.call(null,G__37355));
})(),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__37358 = new cljs.core.Symbol(null,"?b","?b",1575118075,null);
return (fexpr__37358.cljs$core$IFn$_invoke$arity$1 ? fexpr__37358.cljs$core$IFn$_invoke$arity$1(G__37355) : fexpr__37358.call(null,G__37355));
})(),(2)], null))], null))], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?a","?a",1314302913,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?b","?b",1575118075,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37359){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(function (){var fexpr__37360 = new cljs.core.Symbol(null,"?b","?b",1575118075,null);
return (fexpr__37360.cljs$core$IFn$_invoke$arity$1 ? fexpr__37360.cljs$core$IFn$_invoke$arity$1(G__37359) : fexpr__37360.call(null,G__37359));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__37361 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__37361.cljs$core$IFn$_invoke$arity$1 ? fexpr__37361.cljs$core$IFn$_invoke$arity$1(G__37359) : fexpr__37361.call(null,G__37359));
})(),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__37362 = new cljs.core.Symbol(null,"?b","?b",1575118075,null);
return (fexpr__37362.cljs$core$IFn$_invoke$arity$1 ? fexpr__37362.cljs$core$IFn$_invoke$arity$1(G__37359) : fexpr__37362.call(null,G__37359));
})(),(2)], null))], null))], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
}))], 0)),emmy.pattern.rule.guard((function (_){
return emmy.simplify.rules._STAR_inverse_simplify_QMARK__STAR_;
}),emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"asin","asin",-904130570,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(function (p__37363){
var map__37364 = p__37363;
var map__37364__$1 = cljs.core.__destructure_map(map__37364);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37364__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
return emmy.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"asin","asin",-904130570,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),xs], null))], null)),xs], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})(),new cljs.core.Symbol(null,"asin-sin","asin-sin",1881703610,null));
})),(function (G__37365){
var r__36231__auto__ = (function (){var fexpr__37366 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37366.cljs$core$IFn$_invoke$arity$1 ? fexpr__37366.cljs$core$IFn$_invoke$arity$1(G__37365) : fexpr__37366.call(null,G__37365));
})();
var or__5162__auto__ = r__36231__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"acos","acos",353741763,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(function (p__37367){
var map__37368 = p__37367;
var map__37368__$1 = cljs.core.__destructure_map(map__37368);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37368__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
return emmy.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"acos","acos",353741763,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),xs], null))], null)),xs], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})(),new cljs.core.Symbol(null,"acos-cos","acos-cos",-652558231,null));
})),(function (G__37369){
var r__36231__auto__ = (function (){var fexpr__37370 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37370.cljs$core$IFn$_invoke$arity$1 ? fexpr__37370.cljs$core$IFn$_invoke$arity$1(G__37369) : fexpr__37370.call(null,G__37369));
})();
var or__5162__auto__ = r__36231__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(function (p__37371){
var map__37372 = p__37371;
var map__37372__$1 = cljs.core.__destructure_map(map__37372);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37372__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
return emmy.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atan","atan",-1026550135,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tan","tan",-1380825876,null),xs], null))], null)),xs], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})(),new cljs.core.Symbol(null,"atan-tan","atan-tan",-478846145,null));
})),(function (G__37373){
var r__36231__auto__ = (function (){var fexpr__37374 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37374.cljs$core$IFn$_invoke$arity$1 ? fexpr__37374.cljs$core$IFn$_invoke$arity$1(G__37373) : fexpr__37374.call(null,G__37373));
})();
var or__5162__auto__ = r__36231__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),(function (p__37375){
var map__37376 = p__37375;
var map__37376__$1 = cljs.core.__destructure_map(map__37376);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37376__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
return emmy.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atan","atan",-1026550135,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),xs], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),xs], null))], null)),xs], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})(),new cljs.core.Symbol(null,"atan-sin-cos","atan-sin-cos",-761958387,null));
})),(function (G__37377){
var r__36231__auto__ = (function (){var fexpr__37378 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37378.cljs$core$IFn$_invoke$arity$1 ? fexpr__37378.cljs$core$IFn$_invoke$arity$1(G__37377) : fexpr__37378.call(null,G__37377));
})();
var or__5162__auto__ = r__36231__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"asin","asin",-904130570,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(function (p__37379){
var map__37380 = p__37379;
var map__37380__$1 = cljs.core.__destructure_map(map__37380);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37380__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
return emmy.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"asin","asin",-904130570,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),xs], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),new cljs.core.Symbol(null,"pi","pi",176774184,null)], null)),xs], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})(),new cljs.core.Symbol(null,"asin-cos","asin-cos",-28391344,null));
})),(function (G__37381){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),new cljs.core.Symbol(null,"pi","pi",176774184,null)], null)),(function (){var fexpr__37382 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37382.cljs$core$IFn$_invoke$arity$1 ? fexpr__37382.cljs$core$IFn$_invoke$arity$1(G__37381) : fexpr__37382.call(null,G__37381));
})()], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"acos","acos",353741763,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(function (p__37383){
var map__37384 = p__37383;
var map__37384__$1 = cljs.core.__destructure_map(map__37384);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37384__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
return emmy.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"acos","acos",353741763,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),xs], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),new cljs.core.Symbol(null,"pi","pi",176774184,null)], null)),xs], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})(),new cljs.core.Symbol(null,"acos-sin","acos-sin",1513257305,null));
})),(function (G__37385){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),new cljs.core.Symbol(null,"pi","pi",176774184,null)], null)),(function (){var fexpr__37386 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37386.cljs$core$IFn$_invoke$arity$1 ? fexpr__37386.cljs$core$IFn$_invoke$arity$1(G__37385) : fexpr__37386.call(null,G__37385));
})()], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
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
return emmy.value.integral_QMARK_((function (){var G__37441 = (function (){var G__37442 = x;
var G__37443 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__37442,G__37443) : sym_COLON_div.call(null,G__37442,G__37443));
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__37441) : simplify.call(null,G__37441));
})());
}
});
var pi_over_2_mod_2pi_QMARK_ = (function emmy$simplify$rules$trig_COLON_special_$_pi_over_2_mod_2pi_QMARK_(x){
var or__5162__auto__ = (new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"pi-over-2","pi-over-2",515246065,null),null], null), null).cljs$core$IFn$_invoke$arity$1 ? new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"pi-over-2","pi-over-2",515246065,null),null], null), null).cljs$core$IFn$_invoke$arity$1(x) : new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"pi-over-2","pi-over-2",515246065,null),null], null), null).call(null,x));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.value.integral_QMARK_((function (){var G__37444 = (function (){var G__37445 = (function (){var G__37447 = x;
var G__37448 = (function (){var G__37449 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
var G__37450 = (2);
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__37449,G__37450) : sym_COLON_div.call(null,G__37449,G__37450));
})();
return (sym_COLON__.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__.cljs$core$IFn$_invoke$arity$2(G__37447,G__37448) : sym_COLON__.call(null,G__37447,G__37448));
})();
var G__37446 = (function (){var G__37451 = (2);
var G__37452 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
return (sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2(G__37451,G__37452) : sym_COLON__STAR_.call(null,G__37451,G__37452));
})();
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__37445,G__37446) : sym_COLON_div.call(null,G__37445,G__37446));
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__37444) : simplify.call(null,G__37444));
})());
}
});
var _pi_over_2_mod_2pi_QMARK_ = (function emmy$simplify$rules$trig_COLON_special_$__pi_over_2_mod_2pi_QMARK_(x){
var or__5162__auto__ = (new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"-pi-over-2","-pi-over-2",-1344612268,null),null], null), null).cljs$core$IFn$_invoke$arity$1 ? new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"-pi-over-2","-pi-over-2",-1344612268,null),null], null), null).cljs$core$IFn$_invoke$arity$1(x) : new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"-pi-over-2","-pi-over-2",-1344612268,null),null], null), null).call(null,x));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.value.integral_QMARK_((function (){var G__37453 = (function (){var G__37454 = (function (){var G__37456 = x;
var G__37457 = (function (){var G__37458 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
var G__37459 = (2);
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__37458,G__37459) : sym_COLON_div.call(null,G__37458,G__37459));
})();
return (sym_COLON__PLUS_.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__PLUS_.cljs$core$IFn$_invoke$arity$2(G__37456,G__37457) : sym_COLON__PLUS_.call(null,G__37456,G__37457));
})();
var G__37455 = (function (){var G__37460 = (2);
var G__37461 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
return (sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2(G__37460,G__37461) : sym_COLON__STAR_.call(null,G__37460,G__37461));
})();
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__37454,G__37455) : sym_COLON_div.call(null,G__37454,G__37455));
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__37453) : simplify.call(null,G__37453));
})());
}
});
var pi_over_2_mod_pi_QMARK_ = (function emmy$simplify$rules$trig_COLON_special_$_pi_over_2_mod_pi_QMARK_(x){
var or__5162__auto__ = (new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"pi-over-2","pi-over-2",515246065,null),null,new cljs.core.Symbol(null,"-pi-over-2","-pi-over-2",-1344612268,null),null], null), null).cljs$core$IFn$_invoke$arity$1 ? new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"pi-over-2","pi-over-2",515246065,null),null,new cljs.core.Symbol(null,"-pi-over-2","-pi-over-2",-1344612268,null),null], null), null).cljs$core$IFn$_invoke$arity$1(x) : new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"pi-over-2","pi-over-2",515246065,null),null,new cljs.core.Symbol(null,"-pi-over-2","-pi-over-2",-1344612268,null),null], null), null).call(null,x));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.value.integral_QMARK_((function (){var G__37462 = (function (){var G__37463 = (function (){var G__37465 = x;
var G__37466 = (function (){var G__37467 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
var G__37468 = (2);
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__37467,G__37468) : sym_COLON_div.call(null,G__37467,G__37468));
})();
return (sym_COLON__.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__.cljs$core$IFn$_invoke$arity$2(G__37465,G__37466) : sym_COLON__.call(null,G__37465,G__37466));
})();
var G__37464 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__37463,G__37464) : sym_COLON_div.call(null,G__37463,G__37464));
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__37462) : simplify.call(null,G__37462));
})());
}
});
var zero_mod_2pi_QMARK_ = (function emmy$simplify$rules$trig_COLON_special_$_zero_mod_2pi_QMARK_(x){
var or__5162__auto__ = (new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"two-pi","two-pi",1398792117,null),null,new cljs.core.Symbol(null,"-two-pi","-two-pi",-50550974,null),null], null), null).cljs$core$IFn$_invoke$arity$1 ? new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"two-pi","two-pi",1398792117,null),null,new cljs.core.Symbol(null,"-two-pi","-two-pi",-50550974,null),null], null), null).cljs$core$IFn$_invoke$arity$1(x) : new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"two-pi","two-pi",1398792117,null),null,new cljs.core.Symbol(null,"-two-pi","-two-pi",-50550974,null),null], null), null).call(null,x));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.value.integral_QMARK_((function (){var G__37469 = (function (){var G__37470 = x;
var G__37471 = (function (){var G__37472 = (2);
var G__37473 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
return (sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2(G__37472,G__37473) : sym_COLON__STAR_.call(null,G__37472,G__37473));
})();
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__37470,G__37471) : sym_COLON_div.call(null,G__37470,G__37471));
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__37469) : simplify.call(null,G__37469));
})());
}
});
var pi_mod_2pi_QMARK_ = (function emmy$simplify$rules$trig_COLON_special_$_pi_mod_2pi_QMARK_(x){
var or__5162__auto__ = (new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"-pi","-pi",-613600448,null),null,new cljs.core.Symbol(null,"pi","pi",176774184,null),null], null), null).cljs$core$IFn$_invoke$arity$1 ? new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"-pi","-pi",-613600448,null),null,new cljs.core.Symbol(null,"pi","pi",176774184,null),null], null), null).cljs$core$IFn$_invoke$arity$1(x) : new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"-pi","-pi",-613600448,null),null,new cljs.core.Symbol(null,"pi","pi",176774184,null),null], null), null).call(null,x));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.value.integral_QMARK_((function (){var G__37474 = (function (){var G__37475 = (function (){var G__37477 = x;
var G__37478 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
return (sym_COLON__.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__.cljs$core$IFn$_invoke$arity$2(G__37477,G__37478) : sym_COLON__.call(null,G__37477,G__37478));
})();
var G__37476 = (function (){var G__37479 = (2);
var G__37480 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
return (sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2(G__37479,G__37480) : sym_COLON__STAR_.call(null,G__37479,G__37480));
})();
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__37475,G__37476) : sym_COLON_div.call(null,G__37475,G__37476));
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__37474) : simplify.call(null,G__37474));
})());
}
});
var pi_over_4_mod_pi_QMARK_ = (function emmy$simplify$rules$trig_COLON_special_$_pi_over_4_mod_pi_QMARK_(x){
var or__5162__auto__ = (new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"+pi-over-4","+pi-over-4",-1289502545,null),null,new cljs.core.Symbol(null,"pi-over-4","pi-over-4",1610173659,null),null], null), null).cljs$core$IFn$_invoke$arity$1 ? new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"+pi-over-4","+pi-over-4",-1289502545,null),null,new cljs.core.Symbol(null,"pi-over-4","pi-over-4",1610173659,null),null], null), null).cljs$core$IFn$_invoke$arity$1(x) : new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"+pi-over-4","+pi-over-4",-1289502545,null),null,new cljs.core.Symbol(null,"pi-over-4","pi-over-4",1610173659,null),null], null), null).call(null,x));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.value.integral_QMARK_((function (){var G__37481 = (function (){var G__37482 = (function (){var G__37484 = x;
var G__37485 = (function (){var G__37486 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
var G__37487 = (4);
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__37486,G__37487) : sym_COLON_div.call(null,G__37486,G__37487));
})();
return (sym_COLON__.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__.cljs$core$IFn$_invoke$arity$2(G__37484,G__37485) : sym_COLON__.call(null,G__37484,G__37485));
})();
var G__37483 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__37482,G__37483) : sym_COLON_div.call(null,G__37482,G__37483));
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__37481) : simplify.call(null,G__37481));
})());
}
});
var _pi_over_4_mod_pi_QMARK_ = (function emmy$simplify$rules$trig_COLON_special_$__pi_over_4_mod_pi_QMARK_(x){
var or__5162__auto__ = (new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"-pi-over-4","-pi-over-4",-640936368,null),null], null), null).cljs$core$IFn$_invoke$arity$1 ? new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"-pi-over-4","-pi-over-4",-640936368,null),null], null), null).cljs$core$IFn$_invoke$arity$1(x) : new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"-pi-over-4","-pi-over-4",-640936368,null),null], null), null).call(null,x));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.value.integral_QMARK_((function (){var G__37488 = (function (){var G__37489 = (function (){var G__37491 = x;
var G__37492 = (function (){var G__37493 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
var G__37494 = (4);
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__37493,G__37494) : sym_COLON_div.call(null,G__37493,G__37494));
})();
return (sym_COLON__PLUS_.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__PLUS_.cljs$core$IFn$_invoke$arity$2(G__37491,G__37492) : sym_COLON__PLUS_.call(null,G__37491,G__37492));
})();
var G__37490 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__37489,G__37490) : sym_COLON_div.call(null,G__37489,G__37490));
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__37488) : simplify.call(null,G__37488));
})());
}
});
return emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,zero_mod_pi_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37495){
var r__36231__auto__ = (0);
var or__5162__auto__ = r__36231__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,pi_over_2_mod_2pi_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37496){
var r__36231__auto__ = (1);
var or__5162__auto__ = r__36231__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,_pi_over_2_mod_2pi_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37497){
var r__36231__auto__ = (-1);
var or__5162__auto__ = r__36231__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,pi_over_2_mod_pi_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37498){
var r__36231__auto__ = (0);
var or__5162__auto__ = r__36231__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,zero_mod_2pi_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37499){
var r__36231__auto__ = (1);
var or__5162__auto__ = r__36231__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,pi_mod_2pi_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37500){
var r__36231__auto__ = (-1);
var or__5162__auto__ = r__36231__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,zero_mod_pi_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37501){
var r__36231__auto__ = (0);
var or__5162__auto__ = r__36231__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,pi_over_4_mod_pi_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37502){
var r__36231__auto__ = (1);
var or__5162__auto__ = r__36231__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,_pi_over_4_mod_pi_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37503){
var r__36231__auto__ = (-1);
var or__5162__auto__ = r__36231__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
}))], 0))], 0));
});
/**
 * `sin` is odd, and `cos` is even. we canonicalize by moving the sign out of the
 *   first term of the argument.
 */
emmy.simplify.rules.angular_parity = emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.simplify.rules.negative_number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37510){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (p1__37504_SHARP_){
return (- (function (){var G__37511 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__37504_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37504_SHARP_.cljs$core$IFn$_invoke$arity$1(G__37511) : p1__37504_SHARP_.call(null,G__37511));
})());
})(G__37510)], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.simplify.rules.negative_number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x","??x",-1924511736,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37512){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__37505_SHARP_){
return (- (function (){var G__37513 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__37505_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37505_SHARP_.cljs$core$IFn$_invoke$arity$1(G__37513) : p1__37505_SHARP_.call(null,G__37513));
})());
})(G__37512)], null),(function (){var fexpr__37514 = new cljs.core.Symbol(null,"??x","??x",-1924511736,null);
return (fexpr__37514.cljs$core$IFn$_invoke$arity$1 ? fexpr__37514.cljs$core$IFn$_invoke$arity$1(G__37512) : fexpr__37514.call(null,G__37512));
})()))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.simplify.rules.negative_number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x","??x",-1924511736,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y","??y",-1087769442,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37515){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__37506_SHARP_){
return (- (function (){var G__37516 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__37506_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37506_SHARP_.cljs$core$IFn$_invoke$arity$1(G__37516) : p1__37506_SHARP_.call(null,G__37516));
})());
})(G__37515)], null),(function (){var fexpr__37517 = new cljs.core.Symbol(null,"??x","??x",-1924511736,null);
return (fexpr__37517.cljs$core$IFn$_invoke$arity$1 ? fexpr__37517.cljs$core$IFn$_invoke$arity$1(G__37515) : fexpr__37517.call(null,G__37515));
})()))], null),(function (){var fexpr__37518 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__37518.cljs$core$IFn$_invoke$arity$1 ? fexpr__37518.cljs$core$IFn$_invoke$arity$1(G__37515) : fexpr__37518.call(null,G__37515));
})()))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.simplify.rules.negative_number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37519){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (p1__37507_SHARP_){
return (- (function (){var G__37520 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__37507_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37507_SHARP_.cljs$core$IFn$_invoke$arity$1(G__37520) : p1__37507_SHARP_.call(null,G__37520));
})());
})(G__37519)], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.simplify.rules.negative_number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x","??x",-1924511736,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37521){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__37508_SHARP_){
return (- (function (){var G__37522 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__37508_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37508_SHARP_.cljs$core$IFn$_invoke$arity$1(G__37522) : p1__37508_SHARP_.call(null,G__37522));
})());
})(G__37521)], null),(function (){var fexpr__37523 = new cljs.core.Symbol(null,"??x","??x",-1924511736,null);
return (fexpr__37523.cljs$core$IFn$_invoke$arity$1 ? fexpr__37523.cljs$core$IFn$_invoke$arity$1(G__37521) : fexpr__37523.call(null,G__37521));
})()))], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.simplify.rules.negative_number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x","??x",-1924511736,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y","??y",-1087769442,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37524){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__37509_SHARP_){
return (- (function (){var G__37525 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__37509_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37509_SHARP_.cljs$core$IFn$_invoke$arity$1(G__37525) : p1__37509_SHARP_.call(null,G__37525));
})());
})(G__37524)], null),(function (){var fexpr__37526 = new cljs.core.Symbol(null,"??x","??x",-1924511736,null);
return (fexpr__37526.cljs$core$IFn$_invoke$arity$1 ? fexpr__37526.cljs$core$IFn$_invoke$arity$1(G__37524) : fexpr__37526.call(null,G__37524));
})()))], null),(function (){var fexpr__37527 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__37527.cljs$core$IFn$_invoke$arity$1 ? fexpr__37527.cljs$core$IFn$_invoke$arity$1(G__37524) : fexpr__37527.call(null,G__37524));
})()))], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
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
return emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(2),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y","??y",-1087769442,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37532){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(2),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__37533 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37533.cljs$core$IFn$_invoke$arity$1 ? fexpr__37533.cljs$core$IFn$_invoke$arity$1(G__37532) : fexpr__37533.call(null,G__37532));
})()], null),(function (){var fexpr__37534 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__37534.cljs$core$IFn$_invoke$arity$1 ? fexpr__37534.cljs$core$IFn$_invoke$arity$1(G__37532) : fexpr__37534.call(null,G__37532));
})()))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__37535 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37535.cljs$core$IFn$_invoke$arity$1 ? fexpr__37535.cljs$core$IFn$_invoke$arity$1(G__37532) : fexpr__37535.call(null,G__37532));
})()], null),(function (){var fexpr__37536 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__37536.cljs$core$IFn$_invoke$arity$1 ? fexpr__37536.cljs$core$IFn$_invoke$arity$1(G__37532) : fexpr__37536.call(null,G__37532));
})()))], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(2),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y","??y",-1087769442,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37537){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(2),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__37538 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37538.cljs$core$IFn$_invoke$arity$1 ? fexpr__37538.cljs$core$IFn$_invoke$arity$1(G__37537) : fexpr__37538.call(null,G__37537));
})()], null),(function (){var fexpr__37539 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__37539.cljs$core$IFn$_invoke$arity$1 ? fexpr__37539.cljs$core$IFn$_invoke$arity$1(G__37537) : fexpr__37539.call(null,G__37537));
})()))], null)),(2)], null))], null)),(1)], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(3),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y","??y",-1087769442,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37540){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(3),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__37541 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37541.cljs$core$IFn$_invoke$arity$1 ? fexpr__37541.cljs$core$IFn$_invoke$arity$1(G__37540) : fexpr__37541.call(null,G__37540));
})()], null),(function (){var fexpr__37542 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__37542.cljs$core$IFn$_invoke$arity$1 ? fexpr__37542.cljs$core$IFn$_invoke$arity$1(G__37540) : fexpr__37542.call(null,G__37540));
})()))], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(-4),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__37543 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37543.cljs$core$IFn$_invoke$arity$1 ? fexpr__37543.cljs$core$IFn$_invoke$arity$1(G__37540) : fexpr__37543.call(null,G__37540));
})()], null),(function (){var fexpr__37544 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__37544.cljs$core$IFn$_invoke$arity$1 ? fexpr__37544.cljs$core$IFn$_invoke$arity$1(G__37540) : fexpr__37544.call(null,G__37540));
})()))], null)),(3)], null))], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(3),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y","??y",-1087769442,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37545){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(4),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__37546 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37546.cljs$core$IFn$_invoke$arity$1 ? fexpr__37546.cljs$core$IFn$_invoke$arity$1(G__37545) : fexpr__37546.call(null,G__37545));
})()], null),(function (){var fexpr__37547 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__37547.cljs$core$IFn$_invoke$arity$1 ? fexpr__37547.cljs$core$IFn$_invoke$arity$1(G__37545) : fexpr__37547.call(null,G__37545));
})()))], null)),(3)], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(-3),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__37548 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37548.cljs$core$IFn$_invoke$arity$1 ? fexpr__37548.cljs$core$IFn$_invoke$arity$1(G__37545) : fexpr__37548.call(null,G__37545));
})()], null),(function (){var fexpr__37549 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__37549.cljs$core$IFn$_invoke$arity$1 ? fexpr__37549.cljs$core$IFn$_invoke$arity$1(G__37545) : fexpr__37549.call(null,G__37545));
})()))], null))], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"n","n",-2092305744,null),(new cljs.core.List(null,exact_integer_GT_3_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs","??fs",-1640556976,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37550){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__37528_SHARP_){
return emmy.generic._.cljs$core$IFn$_invoke$arity$2((function (){var G__37551 = new cljs.core.Symbol(null,"n","n",-2092305744,null);
return (p1__37528_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37528_SHARP_.cljs$core$IFn$_invoke$arity$1(G__37551) : p1__37528_SHARP_.call(null,G__37551));
})(),(1));
})(G__37550),(function (){var fexpr__37552 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__37552.cljs$core$IFn$_invoke$arity$1 ? fexpr__37552.cljs$core$IFn$_invoke$arity$1(G__37550) : fexpr__37552.call(null,G__37550));
})()], null),(function (){var fexpr__37553 = new cljs.core.Symbol(null,"??fs","??fs",-1640556976,null);
return (fexpr__37553.cljs$core$IFn$_invoke$arity$1 ? fexpr__37553.cljs$core$IFn$_invoke$arity$1(G__37550) : fexpr__37553.call(null,G__37550));
})()))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__37554 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__37554.cljs$core$IFn$_invoke$arity$1 ? fexpr__37554.cljs$core$IFn$_invoke$arity$1(G__37550) : fexpr__37554.call(null,G__37550));
})()], null),(function (){var fexpr__37555 = new cljs.core.Symbol(null,"??fs","??fs",-1640556976,null);
return (fexpr__37555.cljs$core$IFn$_invoke$arity$1 ? fexpr__37555.cljs$core$IFn$_invoke$arity$1(G__37550) : fexpr__37555.call(null,G__37550));
})()))], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__37529_SHARP_){
return emmy.generic._.cljs$core$IFn$_invoke$arity$2((function (){var G__37556 = new cljs.core.Symbol(null,"n","n",-2092305744,null);
return (p1__37529_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37529_SHARP_.cljs$core$IFn$_invoke$arity$1(G__37556) : p1__37529_SHARP_.call(null,G__37556));
})(),(1));
})(G__37550),(function (){var fexpr__37557 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__37557.cljs$core$IFn$_invoke$arity$1 ? fexpr__37557.cljs$core$IFn$_invoke$arity$1(G__37550) : fexpr__37557.call(null,G__37550));
})()], null),(function (){var fexpr__37558 = new cljs.core.Symbol(null,"??fs","??fs",-1640556976,null);
return (fexpr__37558.cljs$core$IFn$_invoke$arity$1 ? fexpr__37558.cljs$core$IFn$_invoke$arity$1(G__37550) : fexpr__37558.call(null,G__37550));
})()))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__37559 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__37559.cljs$core$IFn$_invoke$arity$1 ? fexpr__37559.cljs$core$IFn$_invoke$arity$1(G__37550) : fexpr__37559.call(null,G__37550));
})()], null),(function (){var fexpr__37560 = new cljs.core.Symbol(null,"??fs","??fs",-1640556976,null);
return (fexpr__37560.cljs$core$IFn$_invoke$arity$1 ? fexpr__37560.cljs$core$IFn$_invoke$arity$1(G__37550) : fexpr__37560.call(null,G__37550));
})()))], null))], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??ys","??ys",1180811471,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37561){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__37562 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37562.cljs$core$IFn$_invoke$arity$1 ? fexpr__37562.cljs$core$IFn$_invoke$arity$1(G__37561) : fexpr__37562.call(null,G__37561));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__37563 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__37563.cljs$core$IFn$_invoke$arity$1 ? fexpr__37563.cljs$core$IFn$_invoke$arity$1(G__37561) : fexpr__37563.call(null,G__37561));
})()], null),(function (){var fexpr__37564 = new cljs.core.Symbol(null,"??ys","??ys",1180811471,null);
return (fexpr__37564.cljs$core$IFn$_invoke$arity$1 ? fexpr__37564.cljs$core$IFn$_invoke$arity$1(G__37561) : fexpr__37564.call(null,G__37561));
})()))], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__37565 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37565.cljs$core$IFn$_invoke$arity$1 ? fexpr__37565.cljs$core$IFn$_invoke$arity$1(G__37561) : fexpr__37565.call(null,G__37561));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__37566 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__37566.cljs$core$IFn$_invoke$arity$1 ? fexpr__37566.cljs$core$IFn$_invoke$arity$1(G__37561) : fexpr__37566.call(null,G__37561));
})()], null),(function (){var fexpr__37567 = new cljs.core.Symbol(null,"??ys","??ys",1180811471,null);
return (fexpr__37567.cljs$core$IFn$_invoke$arity$1 ? fexpr__37567.cljs$core$IFn$_invoke$arity$1(G__37561) : fexpr__37567.call(null,G__37561));
})()))], null))], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"n","n",-2092305744,null),(new cljs.core.List(null,exact_integer_GT_3_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs","??fs",-1640556976,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37568){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__37530_SHARP_){
return emmy.generic._.cljs$core$IFn$_invoke$arity$2((function (){var G__37569 = new cljs.core.Symbol(null,"n","n",-2092305744,null);
return (p1__37530_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37530_SHARP_.cljs$core$IFn$_invoke$arity$1(G__37569) : p1__37530_SHARP_.call(null,G__37569));
})(),(1));
})(G__37568),(function (){var fexpr__37570 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__37570.cljs$core$IFn$_invoke$arity$1 ? fexpr__37570.cljs$core$IFn$_invoke$arity$1(G__37568) : fexpr__37570.call(null,G__37568));
})()], null),(function (){var fexpr__37571 = new cljs.core.Symbol(null,"??fs","??fs",-1640556976,null);
return (fexpr__37571.cljs$core$IFn$_invoke$arity$1 ? fexpr__37571.cljs$core$IFn$_invoke$arity$1(G__37568) : fexpr__37571.call(null,G__37568));
})()))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__37572 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__37572.cljs$core$IFn$_invoke$arity$1 ? fexpr__37572.cljs$core$IFn$_invoke$arity$1(G__37568) : fexpr__37572.call(null,G__37568));
})()], null),(function (){var fexpr__37573 = new cljs.core.Symbol(null,"??fs","??fs",-1640556976,null);
return (fexpr__37573.cljs$core$IFn$_invoke$arity$1 ? fexpr__37573.cljs$core$IFn$_invoke$arity$1(G__37568) : fexpr__37573.call(null,G__37568));
})()))], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__37531_SHARP_){
return emmy.generic._.cljs$core$IFn$_invoke$arity$2((function (){var G__37574 = new cljs.core.Symbol(null,"n","n",-2092305744,null);
return (p1__37531_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37531_SHARP_.cljs$core$IFn$_invoke$arity$1(G__37574) : p1__37531_SHARP_.call(null,G__37574));
})(),(1));
})(G__37568),(function (){var fexpr__37575 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__37575.cljs$core$IFn$_invoke$arity$1 ? fexpr__37575.cljs$core$IFn$_invoke$arity$1(G__37568) : fexpr__37575.call(null,G__37568));
})()], null),(function (){var fexpr__37576 = new cljs.core.Symbol(null,"??fs","??fs",-1640556976,null);
return (fexpr__37576.cljs$core$IFn$_invoke$arity$1 ? fexpr__37576.cljs$core$IFn$_invoke$arity$1(G__37568) : fexpr__37576.call(null,G__37568));
})()))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__37577 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__37577.cljs$core$IFn$_invoke$arity$1 ? fexpr__37577.cljs$core$IFn$_invoke$arity$1(G__37568) : fexpr__37577.call(null,G__37568));
})()], null),(function (){var fexpr__37578 = new cljs.core.Symbol(null,"??fs","??fs",-1640556976,null);
return (fexpr__37578.cljs$core$IFn$_invoke$arity$1 ? fexpr__37578.cljs$core$IFn$_invoke$arity$1(G__37568) : fexpr__37578.call(null,G__37568));
})()))], null))], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??ys","??ys",1180811471,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37579){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__37580 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37580.cljs$core$IFn$_invoke$arity$1 ? fexpr__37580.cljs$core$IFn$_invoke$arity$1(G__37579) : fexpr__37580.call(null,G__37579));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__37581 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__37581.cljs$core$IFn$_invoke$arity$1 ? fexpr__37581.cljs$core$IFn$_invoke$arity$1(G__37579) : fexpr__37581.call(null,G__37579));
})()], null),(function (){var fexpr__37582 = new cljs.core.Symbol(null,"??ys","??ys",1180811471,null);
return (fexpr__37582.cljs$core$IFn$_invoke$arity$1 ? fexpr__37582.cljs$core$IFn$_invoke$arity$1(G__37579) : fexpr__37582.call(null,G__37579));
})()))], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__37583 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37583.cljs$core$IFn$_invoke$arity$1 ? fexpr__37583.cljs$core$IFn$_invoke$arity$1(G__37579) : fexpr__37583.call(null,G__37579));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__37584 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__37584.cljs$core$IFn$_invoke$arity$1 ? fexpr__37584.cljs$core$IFn$_invoke$arity$1(G__37579) : fexpr__37584.call(null,G__37579));
})()], null),(function (){var fexpr__37585 = new cljs.core.Symbol(null,"??ys","??ys",1180811471,null);
return (fexpr__37585.cljs$core$IFn$_invoke$arity$1 ? fexpr__37585.cljs$core$IFn$_invoke$arity$1(G__37579) : fexpr__37585.call(null,G__37579));
})()))], null))], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
}))], 0))], 0));
})();
emmy.simplify.rules.trig_COLON_sum__GT_product = emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??c","??c",1219586074,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),emmy.pattern.rule._EQ__GT_),(function (G__37586){
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(2),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__37587 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37587.cljs$core$IFn$_invoke$arity$1 ? fexpr__37587.cljs$core$IFn$_invoke$arity$1(G__37586) : fexpr__37587.call(null,G__37586));
})(),(function (){var fexpr__37588 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__37588.cljs$core$IFn$_invoke$arity$1 ? fexpr__37588.cljs$core$IFn$_invoke$arity$1(G__37586) : fexpr__37588.call(null,G__37586));
})()], null)),(2)], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__37589 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37589.cljs$core$IFn$_invoke$arity$1 ? fexpr__37589.cljs$core$IFn$_invoke$arity$1(G__37586) : fexpr__37589.call(null,G__37586));
})(),(function (){var fexpr__37590 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__37590.cljs$core$IFn$_invoke$arity$1 ? fexpr__37590.cljs$core$IFn$_invoke$arity$1(G__37586) : fexpr__37590.call(null,G__37586));
})()], null)),(2)], null))], null))], null))], null),(function (){var fexpr__37591 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__37591.cljs$core$IFn$_invoke$arity$1 ? fexpr__37591.cljs$core$IFn$_invoke$arity$1(G__37586) : fexpr__37591.call(null,G__37586));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__37592 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__37592.cljs$core$IFn$_invoke$arity$1 ? fexpr__37592.cljs$core$IFn$_invoke$arity$1(G__37586) : fexpr__37592.call(null,G__37586));
})(),(function (){var fexpr__37593 = new cljs.core.Symbol(null,"??c","??c",1219586074,null);
return (fexpr__37593.cljs$core$IFn$_invoke$arity$1 ? fexpr__37593.cljs$core$IFn$_invoke$arity$1(G__37586) : fexpr__37593.call(null,G__37586));
})()], 0)));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(-1),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??c","??c",1219586074,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),emmy.pattern.rule._EQ__GT_),(function (G__37594){
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(2),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__37595 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37595.cljs$core$IFn$_invoke$arity$1 ? fexpr__37595.cljs$core$IFn$_invoke$arity$1(G__37594) : fexpr__37595.call(null,G__37594));
})(),(function (){var fexpr__37596 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__37596.cljs$core$IFn$_invoke$arity$1 ? fexpr__37596.cljs$core$IFn$_invoke$arity$1(G__37594) : fexpr__37596.call(null,G__37594));
})()], null)),(2)], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__37597 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37597.cljs$core$IFn$_invoke$arity$1 ? fexpr__37597.cljs$core$IFn$_invoke$arity$1(G__37594) : fexpr__37597.call(null,G__37594));
})(),(function (){var fexpr__37598 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__37598.cljs$core$IFn$_invoke$arity$1 ? fexpr__37598.cljs$core$IFn$_invoke$arity$1(G__37594) : fexpr__37598.call(null,G__37594));
})()], null)),(2)], null))], null))], null))], null),(function (){var fexpr__37599 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__37599.cljs$core$IFn$_invoke$arity$1 ? fexpr__37599.cljs$core$IFn$_invoke$arity$1(G__37594) : fexpr__37599.call(null,G__37594));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__37600 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__37600.cljs$core$IFn$_invoke$arity$1 ? fexpr__37600.cljs$core$IFn$_invoke$arity$1(G__37594) : fexpr__37600.call(null,G__37594));
})(),(function (){var fexpr__37601 = new cljs.core.Symbol(null,"??c","??c",1219586074,null);
return (fexpr__37601.cljs$core$IFn$_invoke$arity$1 ? fexpr__37601.cljs$core$IFn$_invoke$arity$1(G__37594) : fexpr__37601.call(null,G__37594));
})()], 0)));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(-1),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??c","??c",1219586074,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),emmy.pattern.rule._EQ__GT_),(function (G__37602){
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(2),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__37603 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37603.cljs$core$IFn$_invoke$arity$1 ? fexpr__37603.cljs$core$IFn$_invoke$arity$1(G__37602) : fexpr__37603.call(null,G__37602));
})(),(function (){var fexpr__37604 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__37604.cljs$core$IFn$_invoke$arity$1 ? fexpr__37604.cljs$core$IFn$_invoke$arity$1(G__37602) : fexpr__37604.call(null,G__37602));
})()], null)),(2)], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__37605 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37605.cljs$core$IFn$_invoke$arity$1 ? fexpr__37605.cljs$core$IFn$_invoke$arity$1(G__37602) : fexpr__37605.call(null,G__37602));
})(),(function (){var fexpr__37606 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__37606.cljs$core$IFn$_invoke$arity$1 ? fexpr__37606.cljs$core$IFn$_invoke$arity$1(G__37602) : fexpr__37606.call(null,G__37602));
})()], null)),(2)], null))], null))], null))], null),(function (){var fexpr__37607 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__37607.cljs$core$IFn$_invoke$arity$1 ? fexpr__37607.cljs$core$IFn$_invoke$arity$1(G__37602) : fexpr__37607.call(null,G__37602));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__37608 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__37608.cljs$core$IFn$_invoke$arity$1 ? fexpr__37608.cljs$core$IFn$_invoke$arity$1(G__37602) : fexpr__37608.call(null,G__37602));
})(),(function (){var fexpr__37609 = new cljs.core.Symbol(null,"??c","??c",1219586074,null);
return (fexpr__37609.cljs$core$IFn$_invoke$arity$1 ? fexpr__37609.cljs$core$IFn$_invoke$arity$1(G__37602) : fexpr__37609.call(null,G__37602));
})()], 0)));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??c","??c",1219586074,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),emmy.pattern.rule._EQ__GT_),(function (G__37610){
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(2),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__37611 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37611.cljs$core$IFn$_invoke$arity$1 ? fexpr__37611.cljs$core$IFn$_invoke$arity$1(G__37610) : fexpr__37611.call(null,G__37610));
})(),(function (){var fexpr__37612 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__37612.cljs$core$IFn$_invoke$arity$1 ? fexpr__37612.cljs$core$IFn$_invoke$arity$1(G__37610) : fexpr__37612.call(null,G__37610));
})()], null)),(2)], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__37613 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37613.cljs$core$IFn$_invoke$arity$1 ? fexpr__37613.cljs$core$IFn$_invoke$arity$1(G__37610) : fexpr__37613.call(null,G__37610));
})(),(function (){var fexpr__37614 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__37614.cljs$core$IFn$_invoke$arity$1 ? fexpr__37614.cljs$core$IFn$_invoke$arity$1(G__37610) : fexpr__37614.call(null,G__37610));
})()], null)),(2)], null))], null))], null))], null),(function (){var fexpr__37615 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__37615.cljs$core$IFn$_invoke$arity$1 ? fexpr__37615.cljs$core$IFn$_invoke$arity$1(G__37610) : fexpr__37615.call(null,G__37610));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__37616 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__37616.cljs$core$IFn$_invoke$arity$1 ? fexpr__37616.cljs$core$IFn$_invoke$arity$1(G__37610) : fexpr__37616.call(null,G__37610));
})(),(function (){var fexpr__37617 = new cljs.core.Symbol(null,"??c","??c",1219586074,null);
return (fexpr__37617.cljs$core$IFn$_invoke$arity$1 ? fexpr__37617.cljs$core$IFn$_invoke$arity$1(G__37610) : fexpr__37617.call(null,G__37610));
})()], 0)));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(-1),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??c","??c",1219586074,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),emmy.pattern.rule._EQ__GT_),(function (G__37618){
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(-2),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__37619 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37619.cljs$core$IFn$_invoke$arity$1 ? fexpr__37619.cljs$core$IFn$_invoke$arity$1(G__37618) : fexpr__37619.call(null,G__37618));
})(),(function (){var fexpr__37620 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__37620.cljs$core$IFn$_invoke$arity$1 ? fexpr__37620.cljs$core$IFn$_invoke$arity$1(G__37618) : fexpr__37620.call(null,G__37618));
})()], null)),(2)], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__37621 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37621.cljs$core$IFn$_invoke$arity$1 ? fexpr__37621.cljs$core$IFn$_invoke$arity$1(G__37618) : fexpr__37621.call(null,G__37618));
})(),(function (){var fexpr__37622 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__37622.cljs$core$IFn$_invoke$arity$1 ? fexpr__37622.cljs$core$IFn$_invoke$arity$1(G__37618) : fexpr__37622.call(null,G__37618));
})()], null)),(2)], null))], null))], null))], null),(function (){var fexpr__37623 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__37623.cljs$core$IFn$_invoke$arity$1 ? fexpr__37623.cljs$core$IFn$_invoke$arity$1(G__37618) : fexpr__37623.call(null,G__37618));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__37624 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__37624.cljs$core$IFn$_invoke$arity$1 ? fexpr__37624.cljs$core$IFn$_invoke$arity$1(G__37618) : fexpr__37624.call(null,G__37618));
})(),(function (){var fexpr__37625 = new cljs.core.Symbol(null,"??c","??c",1219586074,null);
return (fexpr__37625.cljs$core$IFn$_invoke$arity$1 ? fexpr__37625.cljs$core$IFn$_invoke$arity$1(G__37618) : fexpr__37625.call(null,G__37618));
})()], 0)));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(-1),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??c","??c",1219586074,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),emmy.pattern.rule._EQ__GT_),(function (G__37626){
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(-2),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__37627 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37627.cljs$core$IFn$_invoke$arity$1 ? fexpr__37627.cljs$core$IFn$_invoke$arity$1(G__37626) : fexpr__37627.call(null,G__37626));
})(),(function (){var fexpr__37628 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__37628.cljs$core$IFn$_invoke$arity$1 ? fexpr__37628.cljs$core$IFn$_invoke$arity$1(G__37626) : fexpr__37628.call(null,G__37626));
})()], null)),(2)], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__37629 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37629.cljs$core$IFn$_invoke$arity$1 ? fexpr__37629.cljs$core$IFn$_invoke$arity$1(G__37626) : fexpr__37629.call(null,G__37626));
})(),(function (){var fexpr__37630 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__37630.cljs$core$IFn$_invoke$arity$1 ? fexpr__37630.cljs$core$IFn$_invoke$arity$1(G__37626) : fexpr__37630.call(null,G__37626));
})()], null)),(2)], null))], null))], null))], null),(function (){var fexpr__37631 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__37631.cljs$core$IFn$_invoke$arity$1 ? fexpr__37631.cljs$core$IFn$_invoke$arity$1(G__37626) : fexpr__37631.call(null,G__37626));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__37632 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__37632.cljs$core$IFn$_invoke$arity$1 ? fexpr__37632.cljs$core$IFn$_invoke$arity$1(G__37626) : fexpr__37632.call(null,G__37626));
})(),(function (){var fexpr__37633 = new cljs.core.Symbol(null,"??c","??c",1219586074,null);
return (fexpr__37633.cljs$core$IFn$_invoke$arity$1 ? fexpr__37633.cljs$core$IFn$_invoke$arity$1(G__37626) : fexpr__37633.call(null,G__37626));
})()], 0)));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
}))], 0))], 0));
emmy.simplify.rules.trig_COLON_product__GT_sum = emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??u","??u",788654559,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??v","??v",2028946795,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??w","??w",1245275022,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),emmy.pattern.rule._EQ__GT_),(function (G__37634){
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__37635 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37635.cljs$core$IFn$_invoke$arity$1 ? fexpr__37635.cljs$core$IFn$_invoke$arity$1(G__37634) : fexpr__37635.call(null,G__37634));
})(),(function (){var fexpr__37636 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__37636.cljs$core$IFn$_invoke$arity$1 ? fexpr__37636.cljs$core$IFn$_invoke$arity$1(G__37634) : fexpr__37636.call(null,G__37634));
})()], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__37637 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37637.cljs$core$IFn$_invoke$arity$1 ? fexpr__37637.cljs$core$IFn$_invoke$arity$1(G__37634) : fexpr__37637.call(null,G__37634));
})(),(function (){var fexpr__37638 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__37638.cljs$core$IFn$_invoke$arity$1 ? fexpr__37638.cljs$core$IFn$_invoke$arity$1(G__37634) : fexpr__37638.call(null,G__37634));
})()], null))], null))], null))], null),(function (){var fexpr__37639 = new cljs.core.Symbol(null,"??u","??u",788654559,null);
return (fexpr__37639.cljs$core$IFn$_invoke$arity$1 ? fexpr__37639.cljs$core$IFn$_invoke$arity$1(G__37634) : fexpr__37639.call(null,G__37634));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__37640 = new cljs.core.Symbol(null,"??v","??v",2028946795,null);
return (fexpr__37640.cljs$core$IFn$_invoke$arity$1 ? fexpr__37640.cljs$core$IFn$_invoke$arity$1(G__37634) : fexpr__37640.call(null,G__37634));
})(),(function (){var fexpr__37641 = new cljs.core.Symbol(null,"??w","??w",1245275022,null);
return (fexpr__37641.cljs$core$IFn$_invoke$arity$1 ? fexpr__37641.cljs$core$IFn$_invoke$arity$1(G__37634) : fexpr__37641.call(null,G__37634));
})()], 0)));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??u","??u",788654559,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??v","??v",2028946795,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??w","??w",1245275022,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),emmy.pattern.rule._EQ__GT_),(function (G__37642){
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__37643 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37643.cljs$core$IFn$_invoke$arity$1 ? fexpr__37643.cljs$core$IFn$_invoke$arity$1(G__37642) : fexpr__37643.call(null,G__37642));
})(),(function (){var fexpr__37644 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__37644.cljs$core$IFn$_invoke$arity$1 ? fexpr__37644.cljs$core$IFn$_invoke$arity$1(G__37642) : fexpr__37644.call(null,G__37642));
})()], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__37645 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37645.cljs$core$IFn$_invoke$arity$1 ? fexpr__37645.cljs$core$IFn$_invoke$arity$1(G__37642) : fexpr__37645.call(null,G__37642));
})(),(function (){var fexpr__37646 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__37646.cljs$core$IFn$_invoke$arity$1 ? fexpr__37646.cljs$core$IFn$_invoke$arity$1(G__37642) : fexpr__37646.call(null,G__37642));
})()], null))], null))], null))], null),(function (){var fexpr__37647 = new cljs.core.Symbol(null,"??u","??u",788654559,null);
return (fexpr__37647.cljs$core$IFn$_invoke$arity$1 ? fexpr__37647.cljs$core$IFn$_invoke$arity$1(G__37642) : fexpr__37647.call(null,G__37642));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__37648 = new cljs.core.Symbol(null,"??v","??v",2028946795,null);
return (fexpr__37648.cljs$core$IFn$_invoke$arity$1 ? fexpr__37648.cljs$core$IFn$_invoke$arity$1(G__37642) : fexpr__37648.call(null,G__37642));
})(),(function (){var fexpr__37649 = new cljs.core.Symbol(null,"??w","??w",1245275022,null);
return (fexpr__37649.cljs$core$IFn$_invoke$arity$1 ? fexpr__37649.cljs$core$IFn$_invoke$arity$1(G__37642) : fexpr__37649.call(null,G__37642));
})()], 0)));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??u","??u",788654559,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??v","??v",2028946795,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??w","??w",1245275022,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),emmy.pattern.rule._EQ__GT_),(function (G__37650){
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__37651 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37651.cljs$core$IFn$_invoke$arity$1 ? fexpr__37651.cljs$core$IFn$_invoke$arity$1(G__37650) : fexpr__37651.call(null,G__37650));
})(),(function (){var fexpr__37652 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__37652.cljs$core$IFn$_invoke$arity$1 ? fexpr__37652.cljs$core$IFn$_invoke$arity$1(G__37650) : fexpr__37652.call(null,G__37650));
})()], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__37653 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37653.cljs$core$IFn$_invoke$arity$1 ? fexpr__37653.cljs$core$IFn$_invoke$arity$1(G__37650) : fexpr__37653.call(null,G__37650));
})(),(function (){var fexpr__37654 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__37654.cljs$core$IFn$_invoke$arity$1 ? fexpr__37654.cljs$core$IFn$_invoke$arity$1(G__37650) : fexpr__37654.call(null,G__37650));
})()], null))], null))], null))], null),(function (){var fexpr__37655 = new cljs.core.Symbol(null,"??u","??u",788654559,null);
return (fexpr__37655.cljs$core$IFn$_invoke$arity$1 ? fexpr__37655.cljs$core$IFn$_invoke$arity$1(G__37650) : fexpr__37655.call(null,G__37650));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__37656 = new cljs.core.Symbol(null,"??v","??v",2028946795,null);
return (fexpr__37656.cljs$core$IFn$_invoke$arity$1 ? fexpr__37656.cljs$core$IFn$_invoke$arity$1(G__37650) : fexpr__37656.call(null,G__37650));
})(),(function (){var fexpr__37657 = new cljs.core.Symbol(null,"??w","??w",1245275022,null);
return (fexpr__37657.cljs$core$IFn$_invoke$arity$1 ? fexpr__37657.cljs$core$IFn$_invoke$arity$1(G__37650) : fexpr__37657.call(null,G__37650));
})()], 0)));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??u","??u",788654559,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??v","??v",2028946795,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??w","??w",1245275022,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),emmy.pattern.rule._EQ__GT_),(function (G__37658){
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__37659 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37659.cljs$core$IFn$_invoke$arity$1 ? fexpr__37659.cljs$core$IFn$_invoke$arity$1(G__37658) : fexpr__37659.call(null,G__37658));
})(),(function (){var fexpr__37660 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__37660.cljs$core$IFn$_invoke$arity$1 ? fexpr__37660.cljs$core$IFn$_invoke$arity$1(G__37658) : fexpr__37660.call(null,G__37658));
})()], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__37661 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37661.cljs$core$IFn$_invoke$arity$1 ? fexpr__37661.cljs$core$IFn$_invoke$arity$1(G__37658) : fexpr__37661.call(null,G__37658));
})(),(function (){var fexpr__37662 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__37662.cljs$core$IFn$_invoke$arity$1 ? fexpr__37662.cljs$core$IFn$_invoke$arity$1(G__37658) : fexpr__37662.call(null,G__37658));
})()], null))], null))], null))], null),(function (){var fexpr__37663 = new cljs.core.Symbol(null,"??u","??u",788654559,null);
return (fexpr__37663.cljs$core$IFn$_invoke$arity$1 ? fexpr__37663.cljs$core$IFn$_invoke$arity$1(G__37658) : fexpr__37663.call(null,G__37658));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__37664 = new cljs.core.Symbol(null,"??v","??v",2028946795,null);
return (fexpr__37664.cljs$core$IFn$_invoke$arity$1 ? fexpr__37664.cljs$core$IFn$_invoke$arity$1(G__37658) : fexpr__37664.call(null,G__37658));
})(),(function (){var fexpr__37665 = new cljs.core.Symbol(null,"??w","??w",1245275022,null);
return (fexpr__37665.cljs$core$IFn$_invoke$arity$1 ? fexpr__37665.cljs$core$IFn$_invoke$arity$1(G__37658) : fexpr__37665.call(null,G__37658));
})()], 0)));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
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
return emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,exact_integer_GT_1_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__37668){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__37669 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37669.cljs$core$IFn$_invoke$arity$1 ? fexpr__37669.cljs$core$IFn$_invoke$arity$1(G__37668) : fexpr__37669.call(null,G__37668));
})()], null)),(function (p1__37666_SHARP_){
return ((function (){var G__37670 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__37666_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37666_SHARP_.cljs$core$IFn$_invoke$arity$1(G__37670) : p1__37666_SHARP_.call(null,G__37670));
})() - (2));
})(G__37668)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(2),(function (){var fexpr__37671 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37671.cljs$core$IFn$_invoke$arity$1 ? fexpr__37671.cljs$core$IFn$_invoke$arity$1(G__37668) : fexpr__37671.call(null,G__37668));
})()], null))], null))], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,exact_integer_GT_1_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__37672){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__37673 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37673.cljs$core$IFn$_invoke$arity$1 ? fexpr__37673.cljs$core$IFn$_invoke$arity$1(G__37672) : fexpr__37673.call(null,G__37672));
})()], null)),(function (p1__37667_SHARP_){
return ((function (){var G__37674 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__37667_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37667_SHARP_.cljs$core$IFn$_invoke$arity$1(G__37674) : p1__37667_SHARP_.call(null,G__37674));
})() - (2));
})(G__37672)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(2),(function (){var fexpr__37675 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37675.cljs$core$IFn$_invoke$arity$1 ? fexpr__37675.cljs$core$IFn$_invoke$arity$1(G__37672) : fexpr__37675.call(null,G__37672));
})()], null))], null))], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
}))], 0))], 0));
})();
emmy.simplify.rules.half_angle = (function emmy$simplify$rules$half_angle(simplify){
var sin_half_angle_formula = (function emmy$simplify$rules$half_angle_$_sin_half_angle_formula(theta){
var thetas = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(theta) : simplify.call(null,theta));
var and__5160__auto__ = emmy.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"non-negative?","non-negative?",1248641804,null),cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(2),new cljs.core.Symbol(null,"pi","pi",176774184,null)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(-1),thetas], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(4),new cljs.core.Symbol(null,"pi","pi",176774184,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"floor","floor",-772394748,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),thetas,cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(4),new cljs.core.Symbol(null,"pi","pi",176774184,null)], null))], null))], null))], null))], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})(),new cljs.core.Symbol(null,"sin-half-angle-formula","sin-half-angle-formula",1943828750,null));
if(cljs.core.truth_(and__5160__auto__)){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),theta], null))], null)),(2)], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
} else {
return and__5160__auto__;
}
});
var cos_half_angle_formula = (function emmy$simplify$rules$half_angle_$_cos_half_angle_formula(theta){
var thetas = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(theta) : simplify.call(null,theta));
var and__5160__auto__ = emmy.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"non-negative?","non-negative?",1248641804,null),cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),thetas,cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(4),new cljs.core.Symbol(null,"pi","pi",176774184,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"floor","floor",-772394748,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),thetas], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(4),new cljs.core.Symbol(null,"pi","pi",176774184,null)], null))], null))], null))], null))], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})(),new cljs.core.Symbol(null,"cos-half-angle-formula","cos-half-angle-formula",-1744663300,null));
if(cljs.core.truth_(and__5160__auto__)){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),theta], null))], null)),(2)], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
} else {
return and__5160__auto__;
}
});
return emmy.pattern.rule.attempt(emmy.pattern.rule.guard((function (_){
return emmy.simplify.rules._STAR_half_angle_simplify_QMARK__STAR_;
}),emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(1),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y","??y",-1087769442,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null))),(function (p1__37676_SHARP_){
return sin_half_angle_formula((function (){var G__37680 = p1__37676_SHARP_;
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__37681 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37681.cljs$core$IFn$_invoke$arity$1 ? fexpr__37681.cljs$core$IFn$_invoke$arity$1(G__37680) : fexpr__37681.call(null,G__37680));
})()], null),(function (){var fexpr__37682 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__37682.cljs$core$IFn$_invoke$arity$1 ? fexpr__37682.cljs$core$IFn$_invoke$arity$1(G__37680) : fexpr__37682.call(null,G__37680));
})()));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})());
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null))),(function (p1__37677_SHARP_){
return sin_half_angle_formula((function (){var G__37683 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (p1__37677_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37677_SHARP_.cljs$core$IFn$_invoke$arity$1(G__37683) : p1__37677_SHARP_.call(null,G__37683));
})());
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(1),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y","??y",-1087769442,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null))),(function (p1__37678_SHARP_){
return cos_half_angle_formula((function (){var G__37684 = p1__37678_SHARP_;
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__37685 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37685.cljs$core$IFn$_invoke$arity$1 ? fexpr__37685.cljs$core$IFn$_invoke$arity$1(G__37684) : fexpr__37685.call(null,G__37684));
})()], null),(function (){var fexpr__37686 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__37686.cljs$core$IFn$_invoke$arity$1 ? fexpr__37686.cljs$core$IFn$_invoke$arity$1(G__37684) : fexpr__37686.call(null,G__37684));
})()));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})());
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null))),(function (p1__37679_SHARP_){
return cos_half_angle_formula((function (){var G__37687 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (p1__37679_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37679_SHARP_.cljs$core$IFn$_invoke$arity$1(G__37687) : p1__37679_SHARP_.call(null,G__37687));
})());
}))], 0))], 0))));
});
emmy.simplify.rules.sin_sq__GT_cos_sq = emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.simplify.rules.at_least_two_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__37689){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__37690 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37690.cljs$core$IFn$_invoke$arity$1 ? fexpr__37690.cljs$core$IFn$_invoke$arity$1(G__37689) : fexpr__37690.call(null,G__37689));
})()], null)),(function (p1__37688_SHARP_){
return ((function (){var G__37691 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__37688_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37688_SHARP_.cljs$core$IFn$_invoke$arity$1(G__37691) : p1__37688_SHARP_.call(null,G__37691));
})() - (2));
})(G__37689)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__37692 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37692.cljs$core$IFn$_invoke$arity$1 ? fexpr__37692.cljs$core$IFn$_invoke$arity$1(G__37689) : fexpr__37692.call(null,G__37689));
})()], null)),(2)], null))], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
}))], 0))], 0));
emmy.simplify.rules.cos_sq__GT_sin_sq = emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.simplify.rules.at_least_two_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__37694){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__37695 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37695.cljs$core$IFn$_invoke$arity$1 ? fexpr__37695.cljs$core$IFn$_invoke$arity$1(G__37694) : fexpr__37695.call(null,G__37694));
})()], null)),(function (p1__37693_SHARP_){
return ((function (){var G__37696 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__37693_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37693_SHARP_.cljs$core$IFn$_invoke$arity$1(G__37696) : p1__37693_SHARP_.call(null,G__37696));
})() - (2));
})(G__37694)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__37697 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37697.cljs$core$IFn$_invoke$arity$1 ? fexpr__37697.cljs$core$IFn$_invoke$arity$1(G__37694) : fexpr__37697.call(null,G__37694));
})()], null)),(2)], null))], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
}))], 0))], 0));
emmy.simplify.rules.split_high_degree_sincos = (function (){var remaining = (function emmy$simplify$rules$remaining(p__37706){
var map__37707 = p__37706;
var map__37707__$1 = cljs.core.__destructure_map(map__37707);
var m = map__37707__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37707__$1,new cljs.core.Symbol(null,"?n","?n",-2053238410,null));
var n_2 = emmy.generic._.cljs$core$IFn$_invoke$arity$2(n,(2));
if(cljs.core.truth_(emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(n_2))){
var G__37708 = m;
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__37709 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__37709.cljs$core$IFn$_invoke$arity$1 ? fexpr__37709.cljs$core$IFn$_invoke$arity$1(G__37708) : fexpr__37709.call(null,G__37708));
})(),(function (){var fexpr__37710 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37710.cljs$core$IFn$_invoke$arity$1 ? fexpr__37710.cljs$core$IFn$_invoke$arity$1(G__37708) : fexpr__37710.call(null,G__37708));
})()], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
} else {
var G__37711 = m;
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__37712 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__37712.cljs$core$IFn$_invoke$arity$1 ? fexpr__37712.cljs$core$IFn$_invoke$arity$1(G__37711) : fexpr__37712.call(null,G__37711));
})(),(function (){var fexpr__37713 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37713.cljs$core$IFn$_invoke$arity$1 ? fexpr__37713.cljs$core$IFn$_invoke$arity$1(G__37711) : fexpr__37713.call(null,G__37711));
})()], null)),n_2], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
}
});
return emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f1","??f1",-1548442439,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),null], null), null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.simplify.rules.more_than_two_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f2","??f2",745277317,null),null,(1),null)),(2),null)),(3),null)),(4),null)),emmy.pattern.rule._EQ__GT_),(function (G__37714){
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__37715 = new cljs.core.Symbol(null,"??f1","??f1",-1548442439,null);
return (fexpr__37715.cljs$core$IFn$_invoke$arity$1 ? fexpr__37715.cljs$core$IFn$_invoke$arity$1(G__37714) : fexpr__37715.call(null,G__37714));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__37716 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__37716.cljs$core$IFn$_invoke$arity$1 ? fexpr__37716.cljs$core$IFn$_invoke$arity$1(G__37714) : fexpr__37716.call(null,G__37714));
})(),(function (){var fexpr__37717 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37717.cljs$core$IFn$_invoke$arity$1 ? fexpr__37717.cljs$core$IFn$_invoke$arity$1(G__37714) : fexpr__37717.call(null,G__37714));
})()], null)),(2)], null)),remaining(G__37714)], null),(function (){var fexpr__37718 = new cljs.core.Symbol(null,"??f2","??f2",745277317,null);
return (fexpr__37718.cljs$core$IFn$_invoke$arity$1 ? fexpr__37718.cljs$core$IFn$_invoke$arity$1(G__37714) : fexpr__37718.call(null,G__37714));
})()], 0)));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a1","??a1",2070706636,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),null], null), null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.simplify.rules.more_than_two_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a2","??a2",-73012434,null),null,(1),null)),(2),null)),(3),null)),(4),null)),emmy.pattern.rule._EQ__GT_),(function (G__37719){
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null)], null),(function (){var fexpr__37720 = new cljs.core.Symbol(null,"??a1","??a1",2070706636,null);
return (fexpr__37720.cljs$core$IFn$_invoke$arity$1 ? fexpr__37720.cljs$core$IFn$_invoke$arity$1(G__37719) : fexpr__37720.call(null,G__37719));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__37721 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__37721.cljs$core$IFn$_invoke$arity$1 ? fexpr__37721.cljs$core$IFn$_invoke$arity$1(G__37719) : fexpr__37721.call(null,G__37719));
})(),(function (){var fexpr__37722 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37722.cljs$core$IFn$_invoke$arity$1 ? fexpr__37722.cljs$core$IFn$_invoke$arity$1(G__37719) : fexpr__37722.call(null,G__37719));
})()], null)),(2)], null)),remaining(G__37719)], null))], null),(function (){var fexpr__37723 = new cljs.core.Symbol(null,"??a2","??a2",-73012434,null);
return (fexpr__37723.cljs$core$IFn$_invoke$arity$1 ? fexpr__37723.cljs$core$IFn$_invoke$arity$1(G__37719) : fexpr__37723.call(null,G__37719));
})()], 0)));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
}))], 0))], 0));
})();
emmy.simplify.rules.flush_obvious_ones = (function emmy$simplify$rules$flush_obvious_ones(simplify){
var _QMARK_op = emmy.pattern.match.bind.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"?op","?op",-135731883,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),null], null), null));
var _QMARK_flipped = emmy.pattern.match.or.cljs$core$IFn$_invoke$arity$variadic(emmy.pattern.match.and.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.match.frame_predicate((function (p1__37724_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var G__37726 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (p1__37724_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37724_SHARP_.cljs$core$IFn$_invoke$arity$1(G__37726) : p1__37724_SHARP_.call(null,G__37726));
})());
}))], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.match.and.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.match.frame_predicate((function (p1__37725_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var G__37727 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (p1__37725_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37725_SHARP_.cljs$core$IFn$_invoke$arity$1(G__37727) : p1__37725_SHARP_.call(null,G__37727));
})());
}))], 0))], 0));
var pred = (function emmy$simplify$rules$flush_obvious_ones_$_pred(m){
var s1 = (function (){var G__37737 = (function (){var G__37738 = m;
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__37739 = new cljs.core.Symbol(null,"??f1","??f1",-1548442439,null);
return (fexpr__37739.cljs$core$IFn$_invoke$arity$1 ? fexpr__37739.cljs$core$IFn$_invoke$arity$1(G__37738) : fexpr__37739.call(null,G__37738));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__37740 = new cljs.core.Symbol(null,"??f2","??f2",745277317,null);
return (fexpr__37740.cljs$core$IFn$_invoke$arity$1 ? fexpr__37740.cljs$core$IFn$_invoke$arity$1(G__37738) : fexpr__37740.call(null,G__37738));
})()], 0)));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__37737) : simplify.call(null,G__37737));
})();
var s2 = (function (){var G__37741 = (function (){var G__37742 = m;
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__37743 = new cljs.core.Symbol(null,"??f3","??f3",-1809203400,null);
return (fexpr__37743.cljs$core$IFn$_invoke$arity$1 ? fexpr__37743.cljs$core$IFn$_invoke$arity$1(G__37742) : fexpr__37743.call(null,G__37742));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__37744 = new cljs.core.Symbol(null,"??f4","??f4",1817370441,null);
return (fexpr__37744.cljs$core$IFn$_invoke$arity$1 ? fexpr__37744.cljs$core$IFn$_invoke$arity$1(G__37742) : fexpr__37744.call(null,G__37742));
})()], 0)));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__37741) : simplify.call(null,G__37741));
})();
if(cljs.core.truth_(emmy.generic.exact_zero_QMARK_((function (){var G__37745 = (new cljs.core.List(null,new cljs.core.Symbol(null,"-","-",-471816912,null),(new cljs.core.List(null,s1,(new cljs.core.List(null,s2,null,(1),null)),(2),null)),(3),null));
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__37745) : simplify.call(null,G__37745));
})()))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"?s1","?s1",-1174751069,null),s1], null);
} else {
return null;
}
});
return emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a1","??a1",2070706636,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,_QMARK_op,(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a2","??a2",-73012434,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,_QMARK_flipped,(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),emmy.pattern.rule._EQ__GT_),(function (G__37746){
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(1)], null),(function (){var fexpr__37747 = new cljs.core.Symbol(null,"??a1","??a1",2070706636,null);
return (fexpr__37747.cljs$core$IFn$_invoke$arity$1 ? fexpr__37747.cljs$core$IFn$_invoke$arity$1(G__37746) : fexpr__37747.call(null,G__37746));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__37748 = new cljs.core.Symbol(null,"??a2","??a2",-73012434,null);
return (fexpr__37748.cljs$core$IFn$_invoke$arity$1 ? fexpr__37748.cljs$core$IFn$_invoke$arity$1(G__37746) : fexpr__37748.call(null,G__37746));
})(),(function (){var fexpr__37749 = new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null);
return (fexpr__37749.cljs$core$IFn$_invoke$arity$1 ? fexpr__37749.cljs$core$IFn$_invoke$arity$1(G__37746) : fexpr__37749.call(null,G__37746));
})()], 0)));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a1","??a1",2070706636,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f1","??f1",-1548442439,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,_QMARK_op,(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f2","??f2",745277317,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a2","??a2",-73012434,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f3","??f3",-1809203400,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,_QMARK_flipped,(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f4","??f4",1817370441,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pred),(function (G__37750){
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null)], null),(function (){var fexpr__37751 = new cljs.core.Symbol(null,"??a1","??a1",2070706636,null);
return (fexpr__37751.cljs$core$IFn$_invoke$arity$1 ? fexpr__37751.cljs$core$IFn$_invoke$arity$1(G__37750) : fexpr__37751.call(null,G__37750));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__37752 = new cljs.core.Symbol(null,"??a2","??a2",-73012434,null);
return (fexpr__37752.cljs$core$IFn$_invoke$arity$1 ? fexpr__37752.cljs$core$IFn$_invoke$arity$1(G__37750) : fexpr__37752.call(null,G__37750));
})(),(function (){var fexpr__37753 = new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null);
return (fexpr__37753.cljs$core$IFn$_invoke$arity$1 ? fexpr__37753.cljs$core$IFn$_invoke$arity$1(G__37750) : fexpr__37753.call(null,G__37750));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__37754 = new cljs.core.Symbol(null,"?s1","?s1",-1174751069,null);
return (fexpr__37754.cljs$core$IFn$_invoke$arity$1 ? fexpr__37754.cljs$core$IFn$_invoke$arity$1(G__37750) : fexpr__37754.call(null,G__37750));
})()], null)], 0)));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
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
return emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var pred = (function emmy$simplify$rules$sincos_random_$_pred(p__37761){
var map__37762 = p__37761;
var map__37762__$1 = cljs.core.__destructure_map(map__37762);
var m = map__37762__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37762__$1,new cljs.core.Symbol(null,"?n","?n",-2053238410,null));
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37762__$1,new cljs.core.Symbol(null,"?op","?op",-135731883,null));
if(cljs.core.truth_(simplifies_to_zero_QMARK_((function (){var G__37763 = m;
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__37764 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__37764.cljs$core$IFn$_invoke$arity$1 ? fexpr__37764.cljs$core$IFn$_invoke$arity$1(G__37763) : fexpr__37764.call(null,G__37763));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__37765 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__37765.cljs$core$IFn$_invoke$arity$1 ? fexpr__37765.cljs$core$IFn$_invoke$arity$1(G__37763) : fexpr__37765.call(null,G__37763));
})(),(function (){var fexpr__37766 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37766.cljs$core$IFn$_invoke$arity$1 ? fexpr__37766.cljs$core$IFn$_invoke$arity$1(G__37763) : fexpr__37766.call(null,G__37763));
})()], null)),emmy.generic._.cljs$core$IFn$_invoke$arity$2(n,(2))], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})()))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"?other-op","?other-op",-881473313,null),(flip.cljs$core$IFn$_invoke$arity$1 ? flip.cljs$core$IFn$_invoke$arity$1(op) : flip.call(null,op))], null);
} else {
return null;
}
});
return emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a1","??a1",2070706636,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?a","?a",1314302913,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a2","??a2",-73012434,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,ops,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.simplify.rules.at_least_two_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pred),(function (G__37767){
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null)], null),(function (){var fexpr__37768 = new cljs.core.Symbol(null,"??a1","??a1",2070706636,null);
return (fexpr__37768.cljs$core$IFn$_invoke$arity$1 ? fexpr__37768.cljs$core$IFn$_invoke$arity$1(G__37767) : fexpr__37768.call(null,G__37767));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__37769 = new cljs.core.Symbol(null,"??a2","??a2",-73012434,null);
return (fexpr__37769.cljs$core$IFn$_invoke$arity$1 ? fexpr__37769.cljs$core$IFn$_invoke$arity$1(G__37767) : fexpr__37769.call(null,G__37767));
})(),(function (){var fexpr__37770 = new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null);
return (fexpr__37770.cljs$core$IFn$_invoke$arity$1 ? fexpr__37770.cljs$core$IFn$_invoke$arity$1(G__37767) : fexpr__37770.call(null,G__37767));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__37771 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__37771.cljs$core$IFn$_invoke$arity$1 ? fexpr__37771.cljs$core$IFn$_invoke$arity$1(G__37767) : fexpr__37771.call(null,G__37767));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__37772 = new cljs.core.Symbol(null,"?other-op","?other-op",-881473313,null);
return (fexpr__37772.cljs$core$IFn$_invoke$arity$1 ? fexpr__37772.cljs$core$IFn$_invoke$arity$1(G__37767) : fexpr__37772.call(null,G__37767));
})(),(function (){var fexpr__37773 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37773.cljs$core$IFn$_invoke$arity$1 ? fexpr__37773.cljs$core$IFn$_invoke$arity$1(G__37767) : fexpr__37773.call(null,G__37767));
})()], null)),(2)], null))], null))], null)], 0)));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a1","??a1",2070706636,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,ops,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.simplify.rules.at_least_two_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a2","??a2",-73012434,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?a","?a",1314302913,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pred),(function (G__37774){
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null)], null),(function (){var fexpr__37775 = new cljs.core.Symbol(null,"??a1","??a1",2070706636,null);
return (fexpr__37775.cljs$core$IFn$_invoke$arity$1 ? fexpr__37775.cljs$core$IFn$_invoke$arity$1(G__37774) : fexpr__37775.call(null,G__37774));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__37776 = new cljs.core.Symbol(null,"??a2","??a2",-73012434,null);
return (fexpr__37776.cljs$core$IFn$_invoke$arity$1 ? fexpr__37776.cljs$core$IFn$_invoke$arity$1(G__37774) : fexpr__37776.call(null,G__37774));
})(),(function (){var fexpr__37777 = new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null);
return (fexpr__37777.cljs$core$IFn$_invoke$arity$1 ? fexpr__37777.cljs$core$IFn$_invoke$arity$1(G__37774) : fexpr__37777.call(null,G__37774));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__37778 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__37778.cljs$core$IFn$_invoke$arity$1 ? fexpr__37778.cljs$core$IFn$_invoke$arity$1(G__37774) : fexpr__37778.call(null,G__37774));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__37779 = new cljs.core.Symbol(null,"?other-op","?other-op",-881473313,null);
return (fexpr__37779.cljs$core$IFn$_invoke$arity$1 ? fexpr__37779.cljs$core$IFn$_invoke$arity$1(G__37774) : fexpr__37779.call(null,G__37774));
})(),(function (){var fexpr__37780 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37780.cljs$core$IFn$_invoke$arity$1 ? fexpr__37780.cljs$core$IFn$_invoke$arity$1(G__37774) : fexpr__37780.call(null,G__37774));
})()], null)),(2)], null))], null))], null)], 0)));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
}))], 0));
})(),(function (){var pred = (function emmy$simplify$rules$sincos_random_$_pred(p__37789){
var map__37790 = p__37789;
var map__37790__$1 = cljs.core.__destructure_map(map__37790);
var m = map__37790__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37790__$1,new cljs.core.Symbol(null,"?n","?n",-2053238410,null));
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37790__$1,new cljs.core.Symbol(null,"?op","?op",-135731883,null));
if(cljs.core.truth_(simplifies_to_zero_QMARK_((function (){var G__37791 = m;
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__37792 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__37792.cljs$core$IFn$_invoke$arity$1 ? fexpr__37792.cljs$core$IFn$_invoke$arity$1(G__37791) : fexpr__37792.call(null,G__37791));
})(),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__37793 = new cljs.core.Symbol(null,"??b1","??b1",-1771260238,null);
return (fexpr__37793.cljs$core$IFn$_invoke$arity$1 ? fexpr__37793.cljs$core$IFn$_invoke$arity$1(G__37791) : fexpr__37793.call(null,G__37791));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__37794 = new cljs.core.Symbol(null,"??b2","??b2",1805392567,null);
return (fexpr__37794.cljs$core$IFn$_invoke$arity$1 ? fexpr__37794.cljs$core$IFn$_invoke$arity$1(G__37791) : fexpr__37794.call(null,G__37791));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__37795 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__37795.cljs$core$IFn$_invoke$arity$1 ? fexpr__37795.cljs$core$IFn$_invoke$arity$1(G__37791) : fexpr__37795.call(null,G__37791));
})(),(function (){var fexpr__37796 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37796.cljs$core$IFn$_invoke$arity$1 ? fexpr__37796.cljs$core$IFn$_invoke$arity$1(G__37791) : fexpr__37796.call(null,G__37791));
})()], null)),emmy.generic._.cljs$core$IFn$_invoke$arity$2(n,(2))], null))], null)], 0)))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})()))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"?other-op","?other-op",-881473313,null),(flip.cljs$core$IFn$_invoke$arity$1 ? flip.cljs$core$IFn$_invoke$arity$1(op) : flip.call(null,op))], null);
} else {
return null;
}
});
return emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a1","??a1",2070706636,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?a","?a",1314302913,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a2","??a2",-73012434,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b1","??b1",-1771260238,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,ops,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.simplify.rules.at_least_two_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b2","??b2",1805392567,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pred),(function (G__37797){
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null)], null),(function (){var fexpr__37798 = new cljs.core.Symbol(null,"??a1","??a1",2070706636,null);
return (fexpr__37798.cljs$core$IFn$_invoke$arity$1 ? fexpr__37798.cljs$core$IFn$_invoke$arity$1(G__37797) : fexpr__37798.call(null,G__37797));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__37799 = new cljs.core.Symbol(null,"??a2","??a2",-73012434,null);
return (fexpr__37799.cljs$core$IFn$_invoke$arity$1 ? fexpr__37799.cljs$core$IFn$_invoke$arity$1(G__37797) : fexpr__37799.call(null,G__37797));
})(),(function (){var fexpr__37800 = new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null);
return (fexpr__37800.cljs$core$IFn$_invoke$arity$1 ? fexpr__37800.cljs$core$IFn$_invoke$arity$1(G__37797) : fexpr__37800.call(null,G__37797));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__37801 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__37801.cljs$core$IFn$_invoke$arity$1 ? fexpr__37801.cljs$core$IFn$_invoke$arity$1(G__37797) : fexpr__37801.call(null,G__37797));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__37802 = new cljs.core.Symbol(null,"?other-op","?other-op",-881473313,null);
return (fexpr__37802.cljs$core$IFn$_invoke$arity$1 ? fexpr__37802.cljs$core$IFn$_invoke$arity$1(G__37797) : fexpr__37802.call(null,G__37797));
})(),(function (){var fexpr__37803 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37803.cljs$core$IFn$_invoke$arity$1 ? fexpr__37803.cljs$core$IFn$_invoke$arity$1(G__37797) : fexpr__37803.call(null,G__37797));
})()], null)),(2)], null))], null))], null)], 0)));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a1","??a1",2070706636,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b1","??b1",-1771260238,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,ops,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.simplify.rules.at_least_two_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b2","??b2",1805392567,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a2","??a2",-73012434,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?a","?a",1314302913,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pred),(function (G__37804){
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null)], null),(function (){var fexpr__37805 = new cljs.core.Symbol(null,"??a1","??a1",2070706636,null);
return (fexpr__37805.cljs$core$IFn$_invoke$arity$1 ? fexpr__37805.cljs$core$IFn$_invoke$arity$1(G__37804) : fexpr__37805.call(null,G__37804));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__37806 = new cljs.core.Symbol(null,"??a2","??a2",-73012434,null);
return (fexpr__37806.cljs$core$IFn$_invoke$arity$1 ? fexpr__37806.cljs$core$IFn$_invoke$arity$1(G__37804) : fexpr__37806.call(null,G__37804));
})(),(function (){var fexpr__37807 = new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null);
return (fexpr__37807.cljs$core$IFn$_invoke$arity$1 ? fexpr__37807.cljs$core$IFn$_invoke$arity$1(G__37804) : fexpr__37807.call(null,G__37804));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__37808 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__37808.cljs$core$IFn$_invoke$arity$1 ? fexpr__37808.cljs$core$IFn$_invoke$arity$1(G__37804) : fexpr__37808.call(null,G__37804));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__37809 = new cljs.core.Symbol(null,"?other-op","?other-op",-881473313,null);
return (fexpr__37809.cljs$core$IFn$_invoke$arity$1 ? fexpr__37809.cljs$core$IFn$_invoke$arity$1(G__37804) : fexpr__37809.call(null,G__37804));
})(),(function (){var fexpr__37810 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37810.cljs$core$IFn$_invoke$arity$1 ? fexpr__37810.cljs$core$IFn$_invoke$arity$1(G__37804) : fexpr__37810.call(null,G__37804));
})()], null)),(2)], null))], null))], null)], 0)));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
}))], 0));
})()], 0));
});
emmy.simplify.rules.sincos__GT_exp1 = (function (){var _I = emmy.generic._.cljs$core$IFn$_invoke$arity$1(emmy.complex.I);
return emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37811){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.complex.I,(function (){var fexpr__37812 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37812.cljs$core$IFn$_invoke$arity$1 ? fexpr__37812.cljs$core$IFn$_invoke$arity$1(G__37811) : fexpr__37812.call(null,G__37811));
})()], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),_I,(function (){var fexpr__37813 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37813.cljs$core$IFn$_invoke$arity$1 ? fexpr__37813.cljs$core$IFn$_invoke$arity$1(G__37811) : fexpr__37813.call(null,G__37811));
})()], null))], null))], null)),emmy.complex.complex.cljs$core$IFn$_invoke$arity$2(0.0,2.0)], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37814){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.complex.I,(function (){var fexpr__37815 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37815.cljs$core$IFn$_invoke$arity$1 ? fexpr__37815.cljs$core$IFn$_invoke$arity$1(G__37814) : fexpr__37815.call(null,G__37814));
})()], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),_I,(function (){var fexpr__37816 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37816.cljs$core$IFn$_invoke$arity$1 ? fexpr__37816.cljs$core$IFn$_invoke$arity$1(G__37814) : fexpr__37816.call(null,G__37814));
})()], null))], null))], null)),(2)], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
}))], 0))], 0));
})();
emmy.simplify.rules.sincos__GT_exp2 = emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37817){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.complex.I,(function (){var fexpr__37818 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37818.cljs$core$IFn$_invoke$arity$1 ? fexpr__37818.cljs$core$IFn$_invoke$arity$1(G__37817) : fexpr__37818.call(null,G__37817));
})()], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.complex.I,(function (){var fexpr__37819 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37819.cljs$core$IFn$_invoke$arity$1 ? fexpr__37819.cljs$core$IFn$_invoke$arity$1(G__37817) : fexpr__37819.call(null,G__37817));
})()], null))], null))], null))], null)),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),emmy.complex.I)], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37820){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.complex.I,(function (){var fexpr__37821 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37821.cljs$core$IFn$_invoke$arity$1 ? fexpr__37821.cljs$core$IFn$_invoke$arity$1(G__37820) : fexpr__37821.call(null,G__37820));
})()], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.complex.I,(function (){var fexpr__37822 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37822.cljs$core$IFn$_invoke$arity$1 ? fexpr__37822.cljs$core$IFn$_invoke$arity$1(G__37820) : fexpr__37822.call(null,G__37820));
})()], null))], null))], null))], null)),(2)], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
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
var im = emmy.generic.imag_part.cljs$core$IFn$_invoke$arity$1((function (){var G__37838 = new cljs.core.Symbol(null,"?c1","?c1",-268581185,null);
return (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(G__37838) : m.call(null,G__37838));
})());
if(cljs.core.truth_(positive_QMARK_(im))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"?im","?im",120320525,null),im], null);
} else {
return null;
}
});
var neg_pred = (function emmy$simplify$rules$neg_pred(m){
var im = emmy.generic.imag_part.cljs$core$IFn$_invoke$arity$1((function (){var G__37839 = new cljs.core.Symbol(null,"?c1","?c1",-268581185,null);
return (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(G__37839) : m.call(null,G__37839));
})());
if(cljs.core.truth_(emmy.generic.negative_QMARK_.cljs$core$IFn$_invoke$arity$1(im))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"?im","?im",120320525,null),im], null);
} else {
return null;
}
});
return emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?c1","?c1",-268581185,null),(new cljs.core.List(null,emmy.simplify.rules.imaginary_number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pos_pred),(function (G__37840){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__37841 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__37841.cljs$core$IFn$_invoke$arity$1 ? fexpr__37841.cljs$core$IFn$_invoke$arity$1(G__37840) : fexpr__37841.call(null,G__37840));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.complex.I,cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__37842 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__37842.cljs$core$IFn$_invoke$arity$1 ? fexpr__37842.cljs$core$IFn$_invoke$arity$1(G__37840) : fexpr__37842.call(null,G__37840));
})()], null))], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?c1","?c1",-268581185,null),(new cljs.core.List(null,emmy.simplify.rules.imaginary_number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),neg_pred),(function (G__37843){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (p1__37823_SHARP_){
return (- (function (){var G__37844 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (p1__37823_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37823_SHARP_.cljs$core$IFn$_invoke$arity$1(G__37844) : p1__37823_SHARP_.call(null,G__37844));
})());
})(G__37843)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.generic._.cljs$core$IFn$_invoke$arity$1(emmy.complex.I),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (p1__37824_SHARP_){
return (- (function (){var G__37845 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (p1__37824_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37824_SHARP_.cljs$core$IFn$_invoke$arity$1(G__37845) : p1__37824_SHARP_.call(null,G__37845));
})());
})(G__37843)], null))], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?c1","?c1",-268581185,null),(new cljs.core.List(null,emmy.simplify.rules.imaginary_number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f","??f",-94026515,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pos_pred),(function (G__37846){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__37847 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__37847.cljs$core$IFn$_invoke$arity$1 ? fexpr__37847.cljs$core$IFn$_invoke$arity$1(G__37846) : fexpr__37847.call(null,G__37846));
})()], null),(function (){var fexpr__37848 = new cljs.core.Symbol(null,"??f","??f",-94026515,null);
return (fexpr__37848.cljs$core$IFn$_invoke$arity$1 ? fexpr__37848.cljs$core$IFn$_invoke$arity$1(G__37846) : fexpr__37848.call(null,G__37846));
})()))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.complex.I,cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__37849 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__37849.cljs$core$IFn$_invoke$arity$1 ? fexpr__37849.cljs$core$IFn$_invoke$arity$1(G__37846) : fexpr__37849.call(null,G__37846));
})()], null),(function (){var fexpr__37850 = new cljs.core.Symbol(null,"??f","??f",-94026515,null);
return (fexpr__37850.cljs$core$IFn$_invoke$arity$1 ? fexpr__37850.cljs$core$IFn$_invoke$arity$1(G__37846) : fexpr__37850.call(null,G__37846));
})()))], null))], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?c1","?c1",-268581185,null),(new cljs.core.List(null,emmy.simplify.rules.imaginary_number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f","??f",-94026515,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),neg_pred),(function (G__37851){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (p1__37825_SHARP_){
return emmy.generic.real_part.cljs$core$IFn$_invoke$arity$1((function (){var G__37852 = new cljs.core.Symbol(null,"?c1","?c1",-268581185,null);
return (p1__37825_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37825_SHARP_.cljs$core$IFn$_invoke$arity$1(G__37852) : p1__37825_SHARP_.call(null,G__37852));
})());
})(G__37851)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__37826_SHARP_){
return (- (function (){var G__37853 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (p1__37826_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37826_SHARP_.cljs$core$IFn$_invoke$arity$1(G__37853) : p1__37826_SHARP_.call(null,G__37853));
})());
})(G__37851)], null),(function (){var fexpr__37854 = new cljs.core.Symbol(null,"??f","??f",-94026515,null);
return (fexpr__37854.cljs$core$IFn$_invoke$arity$1 ? fexpr__37854.cljs$core$IFn$_invoke$arity$1(G__37851) : fexpr__37854.call(null,G__37851));
})()))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.generic._.cljs$core$IFn$_invoke$arity$1(emmy.complex.I),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__37827_SHARP_){
return (- (function (){var G__37855 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (p1__37827_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37827_SHARP_.cljs$core$IFn$_invoke$arity$1(G__37855) : p1__37827_SHARP_.call(null,G__37855));
})());
})(G__37851)], null),(function (){var fexpr__37856 = new cljs.core.Symbol(null,"??f","??f",-94026515,null);
return (fexpr__37856.cljs$core$IFn$_invoke$arity$1 ? fexpr__37856.cljs$core$IFn$_invoke$arity$1(G__37851) : fexpr__37856.call(null,G__37851));
})()))], null))], null))], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?c1","?c1",-268581185,null),(new cljs.core.List(null,emmy.simplify.rules.complex_number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pos_pred),(function (G__37857){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (p1__37828_SHARP_){
return emmy.generic.real_part.cljs$core$IFn$_invoke$arity$1((function (){var G__37858 = new cljs.core.Symbol(null,"?c1","?c1",-268581185,null);
return (p1__37828_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37828_SHARP_.cljs$core$IFn$_invoke$arity$1(G__37858) : p1__37828_SHARP_.call(null,G__37858));
})());
})(G__37857)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__37859 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__37859.cljs$core$IFn$_invoke$arity$1 ? fexpr__37859.cljs$core$IFn$_invoke$arity$1(G__37857) : fexpr__37859.call(null,G__37857));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.complex.I,cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__37860 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__37860.cljs$core$IFn$_invoke$arity$1 ? fexpr__37860.cljs$core$IFn$_invoke$arity$1(G__37857) : fexpr__37860.call(null,G__37857));
})()], null))], null))], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?c1","?c1",-268581185,null),(new cljs.core.List(null,emmy.simplify.rules.complex_number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),neg_pred),(function (G__37861){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (p1__37829_SHARP_){
return emmy.generic.real_part.cljs$core$IFn$_invoke$arity$1((function (){var G__37862 = new cljs.core.Symbol(null,"?c1","?c1",-268581185,null);
return (p1__37829_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37829_SHARP_.cljs$core$IFn$_invoke$arity$1(G__37862) : p1__37829_SHARP_.call(null,G__37862));
})());
})(G__37861)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (p1__37830_SHARP_){
return (- (function (){var G__37863 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (p1__37830_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37830_SHARP_.cljs$core$IFn$_invoke$arity$1(G__37863) : p1__37830_SHARP_.call(null,G__37863));
})());
})(G__37861)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.generic._.cljs$core$IFn$_invoke$arity$1(emmy.complex.I),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (p1__37831_SHARP_){
return (- (function (){var G__37864 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (p1__37831_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37831_SHARP_.cljs$core$IFn$_invoke$arity$1(G__37864) : p1__37831_SHARP_.call(null,G__37864));
})());
})(G__37861)], null))], null))], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?c1","?c1",-268581185,null),(new cljs.core.List(null,emmy.simplify.rules.complex_number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f","??f",-94026515,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pos_pred),(function (G__37865){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (p1__37832_SHARP_){
return emmy.generic.real_part.cljs$core$IFn$_invoke$arity$1((function (){var G__37866 = new cljs.core.Symbol(null,"?c1","?c1",-268581185,null);
return (p1__37832_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37832_SHARP_.cljs$core$IFn$_invoke$arity$1(G__37866) : p1__37832_SHARP_.call(null,G__37866));
})());
})(G__37865)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__37867 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__37867.cljs$core$IFn$_invoke$arity$1 ? fexpr__37867.cljs$core$IFn$_invoke$arity$1(G__37865) : fexpr__37867.call(null,G__37865));
})()], null),(function (){var fexpr__37868 = new cljs.core.Symbol(null,"??f","??f",-94026515,null);
return (fexpr__37868.cljs$core$IFn$_invoke$arity$1 ? fexpr__37868.cljs$core$IFn$_invoke$arity$1(G__37865) : fexpr__37868.call(null,G__37865));
})()))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.complex.I,cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__37869 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__37869.cljs$core$IFn$_invoke$arity$1 ? fexpr__37869.cljs$core$IFn$_invoke$arity$1(G__37865) : fexpr__37869.call(null,G__37865));
})()], null),(function (){var fexpr__37870 = new cljs.core.Symbol(null,"??f","??f",-94026515,null);
return (fexpr__37870.cljs$core$IFn$_invoke$arity$1 ? fexpr__37870.cljs$core$IFn$_invoke$arity$1(G__37865) : fexpr__37870.call(null,G__37865));
})()))], null))], null))], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?c1","?c1",-268581185,null),(new cljs.core.List(null,emmy.simplify.rules.complex_number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f","??f",-94026515,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),neg_pred),(function (G__37871){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (p1__37833_SHARP_){
return emmy.generic.real_part.cljs$core$IFn$_invoke$arity$1((function (){var G__37872 = new cljs.core.Symbol(null,"?c1","?c1",-268581185,null);
return (p1__37833_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37833_SHARP_.cljs$core$IFn$_invoke$arity$1(G__37872) : p1__37833_SHARP_.call(null,G__37872));
})());
})(G__37871)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__37834_SHARP_){
return (- (function (){var G__37873 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (p1__37834_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37834_SHARP_.cljs$core$IFn$_invoke$arity$1(G__37873) : p1__37834_SHARP_.call(null,G__37873));
})());
})(G__37871)], null),(function (){var fexpr__37874 = new cljs.core.Symbol(null,"??f","??f",-94026515,null);
return (fexpr__37874.cljs$core$IFn$_invoke$arity$1 ? fexpr__37874.cljs$core$IFn$_invoke$arity$1(G__37871) : fexpr__37874.call(null,G__37871));
})()))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.generic._.cljs$core$IFn$_invoke$arity$1(emmy.complex.I),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__37835_SHARP_){
return (- (function (){var G__37875 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (p1__37835_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37835_SHARP_.cljs$core$IFn$_invoke$arity$1(G__37875) : p1__37835_SHARP_.call(null,G__37875));
})());
})(G__37871)], null),(function (){var fexpr__37876 = new cljs.core.Symbol(null,"??f","??f",-94026515,null);
return (fexpr__37876.cljs$core$IFn$_invoke$arity$1 ? fexpr__37876.cljs$core$IFn$_invoke$arity$1(G__37871) : fexpr__37876.call(null,G__37871));
})()))], null))], null))], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
}))], 0))], 0));
})();
emmy.simplify.rules.exp_contract = emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x1","??x1",-1923305193,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x2","?x2",1502785613,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x3","??x3",-411077265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x4","?x4",94899597,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x5","??x5",1822045235,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),emmy.pattern.rule._EQ__GT_),(function (G__37877){
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__37878 = new cljs.core.Symbol(null,"??x1","??x1",-1923305193,null);
return (fexpr__37878.cljs$core$IFn$_invoke$arity$1 ? fexpr__37878.cljs$core$IFn$_invoke$arity$1(G__37877) : fexpr__37878.call(null,G__37877));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__37879 = new cljs.core.Symbol(null,"??x3","??x3",-411077265,null);
return (fexpr__37879.cljs$core$IFn$_invoke$arity$1 ? fexpr__37879.cljs$core$IFn$_invoke$arity$1(G__37877) : fexpr__37879.call(null,G__37877));
})(),(function (){var fexpr__37880 = new cljs.core.Symbol(null,"??x5","??x5",1822045235,null);
return (fexpr__37880.cljs$core$IFn$_invoke$arity$1 ? fexpr__37880.cljs$core$IFn$_invoke$arity$1(G__37877) : fexpr__37880.call(null,G__37877));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__37881 = new cljs.core.Symbol(null,"?x2","?x2",1502785613,null);
return (fexpr__37881.cljs$core$IFn$_invoke$arity$1 ? fexpr__37881.cljs$core$IFn$_invoke$arity$1(G__37877) : fexpr__37881.call(null,G__37877));
})(),(function (){var fexpr__37882 = new cljs.core.Symbol(null,"?x4","?x4",94899597,null);
return (fexpr__37882.cljs$core$IFn$_invoke$arity$1 ? fexpr__37882.cljs$core$IFn$_invoke$arity$1(G__37877) : fexpr__37882.call(null,G__37877));
})()], null))], null))], null)], 0)));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?p","?p",-10896580,null),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__37883){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__37884 = new cljs.core.Symbol(null,"?p","?p",-10896580,null);
return (fexpr__37884.cljs$core$IFn$_invoke$arity$1 ? fexpr__37884.cljs$core$IFn$_invoke$arity$1(G__37883) : fexpr__37884.call(null,G__37883));
})(),(function (){var fexpr__37885 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37885.cljs$core$IFn$_invoke$arity$1 ? fexpr__37885.cljs$core$IFn$_invoke$arity$1(G__37883) : fexpr__37885.call(null,G__37883));
})()], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__37886){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__37887 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37887.cljs$core$IFn$_invoke$arity$1 ? fexpr__37887.cljs$core$IFn$_invoke$arity$1(G__37886) : fexpr__37887.call(null,G__37886));
})(),(function (){var fexpr__37888 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__37888.cljs$core$IFn$_invoke$arity$1 ? fexpr__37888.cljs$core$IFn$_invoke$arity$1(G__37886) : fexpr__37888.call(null,G__37886));
})()], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x1","??x1",-1923305193,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x2","??x2",169445330,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__37889){
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__37890 = new cljs.core.Symbol(null,"??x1","??x1",-1923305193,null);
return (fexpr__37890.cljs$core$IFn$_invoke$arity$1 ? fexpr__37890.cljs$core$IFn$_invoke$arity$1(G__37889) : fexpr__37890.call(null,G__37889));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__37891 = new cljs.core.Symbol(null,"??x2","??x2",169445330,null);
return (fexpr__37891.cljs$core$IFn$_invoke$arity$1 ? fexpr__37891.cljs$core$IFn$_invoke$arity$1(G__37889) : fexpr__37891.call(null,G__37889));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__37892 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37892.cljs$core$IFn$_invoke$arity$1 ? fexpr__37892.cljs$core$IFn$_invoke$arity$1(G__37889) : fexpr__37892.call(null,G__37889));
})(),(function (){var fexpr__37893 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__37893.cljs$core$IFn$_invoke$arity$1 ? fexpr__37893.cljs$core$IFn$_invoke$arity$1(G__37889) : fexpr__37893.call(null,G__37889));
})()], null))], null))], null)], 0)));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y1","??y1",-1969315695,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y2","??y2",-796250797,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__37894){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__37895 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37895.cljs$core$IFn$_invoke$arity$1 ? fexpr__37895.cljs$core$IFn$_invoke$arity$1(G__37894) : fexpr__37895.call(null,G__37894));
})(),(function (){var fexpr__37896 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__37896.cljs$core$IFn$_invoke$arity$1 ? fexpr__37896.cljs$core$IFn$_invoke$arity$1(G__37894) : fexpr__37896.call(null,G__37894));
})()], null))], null)),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__37897 = new cljs.core.Symbol(null,"??y1","??y1",-1969315695,null);
return (fexpr__37897.cljs$core$IFn$_invoke$arity$1 ? fexpr__37897.cljs$core$IFn$_invoke$arity$1(G__37894) : fexpr__37897.call(null,G__37894));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__37898 = new cljs.core.Symbol(null,"??y2","??y2",-796250797,null);
return (fexpr__37898.cljs$core$IFn$_invoke$arity$1 ? fexpr__37898.cljs$core$IFn$_invoke$arity$1(G__37894) : fexpr__37898.call(null,G__37894));
})()], 0)))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x1","??x1",-1923305193,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x2","??x2",169445330,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y1","??y1",-1969315695,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y2","??y2",-796250797,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__37899){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__37900 = new cljs.core.Symbol(null,"??x1","??x1",-1923305193,null);
return (fexpr__37900.cljs$core$IFn$_invoke$arity$1 ? fexpr__37900.cljs$core$IFn$_invoke$arity$1(G__37899) : fexpr__37900.call(null,G__37899));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__37901 = new cljs.core.Symbol(null,"??x2","??x2",169445330,null);
return (fexpr__37901.cljs$core$IFn$_invoke$arity$1 ? fexpr__37901.cljs$core$IFn$_invoke$arity$1(G__37899) : fexpr__37901.call(null,G__37899));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__37902 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__37902.cljs$core$IFn$_invoke$arity$1 ? fexpr__37902.cljs$core$IFn$_invoke$arity$1(G__37899) : fexpr__37902.call(null,G__37899));
})(),(function (){var fexpr__37903 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__37903.cljs$core$IFn$_invoke$arity$1 ? fexpr__37903.cljs$core$IFn$_invoke$arity$1(G__37899) : fexpr__37903.call(null,G__37899));
})()], null))], null))], null)], 0))),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__37904 = new cljs.core.Symbol(null,"??y1","??y1",-1969315695,null);
return (fexpr__37904.cljs$core$IFn$_invoke$arity$1 ? fexpr__37904.cljs$core$IFn$_invoke$arity$1(G__37899) : fexpr__37904.call(null,G__37899));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__37905 = new cljs.core.Symbol(null,"??y2","??y2",-796250797,null);
return (fexpr__37905.cljs$core$IFn$_invoke$arity$1 ? fexpr__37905.cljs$core$IFn$_invoke$arity$1(G__37899) : fexpr__37905.call(null,G__37899));
})()], 0)))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
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
return emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-","-",-471816912,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x1","?x1",697080023,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37917){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (){var fexpr__37918 = new cljs.core.Symbol(null,"?x1","?x1",697080023,null);
return (fexpr__37918.cljs$core$IFn$_invoke$arity$1 ? fexpr__37918.cljs$core$IFn$_invoke$arity$1(G__37917) : fexpr__37918.call(null,G__37917));
})()], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-","-",-471816912,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x1","?x1",697080023,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x2","?x2",1502785613,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37919){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (){var fexpr__37920 = new cljs.core.Symbol(null,"?x1","?x1",697080023,null);
return (fexpr__37920.cljs$core$IFn$_invoke$arity$1 ? fexpr__37920.cljs$core$IFn$_invoke$arity$1(G__37919) : fexpr__37920.call(null,G__37919));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (){var fexpr__37921 = new cljs.core.Symbol(null,"?x2","?x2",1502785613,null);
return (fexpr__37921.cljs$core$IFn$_invoke$arity$1 ? fexpr__37921.cljs$core$IFn$_invoke$arity$1(G__37919) : fexpr__37921.call(null,G__37919));
})()], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x1","?x1",697080023,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x2","?x2",1502785613,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37922){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (){var fexpr__37923 = new cljs.core.Symbol(null,"?x1","?x1",697080023,null);
return (fexpr__37923.cljs$core$IFn$_invoke$arity$1 ? fexpr__37923.cljs$core$IFn$_invoke$arity$1(G__37922) : fexpr__37923.call(null,G__37922));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__37924 = new cljs.core.Symbol(null,"?x2","?x2",1502785613,null);
return (fexpr__37924.cljs$core$IFn$_invoke$arity$1 ? fexpr__37924.cljs$core$IFn$_invoke$arity$1(G__37922) : fexpr__37924.call(null,G__37922));
})()], null),(function (){var fexpr__37925 = new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null);
return (fexpr__37925.cljs$core$IFn$_invoke$arity$1 ? fexpr__37925.cljs$core$IFn$_invoke$arity$1(G__37922) : fexpr__37925.call(null,G__37922));
})()))], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,emmy.simplify.rules.imaginary_integer_QMARK_,(new cljs.core.List(null,(function (p1__37906_SHARP_){
return (emmy.generic.imag_part.cljs$core$IFn$_invoke$arity$1(p1__37906_SHARP_) > (1));
}),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??factors","??factors",1906330792,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37926){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.complex.I], null),(function (){var fexpr__37927 = new cljs.core.Symbol(null,"??factors","??factors",1906330792,null);
return (fexpr__37927.cljs$core$IFn$_invoke$arity$1 ? fexpr__37927.cljs$core$IFn$_invoke$arity$1(G__37926) : fexpr__37927.call(null,G__37926));
})()))], null)),(function (p1__37907_SHARP_){
return emmy.generic.imag_part.cljs$core$IFn$_invoke$arity$1((function (){var G__37928 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (p1__37907_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37907_SHARP_.cljs$core$IFn$_invoke$arity$1(G__37928) : p1__37907_SHARP_.call(null,G__37928));
})());
})(G__37926)], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,emmy.simplify.rules.imaginary_integer_QMARK_,(new cljs.core.List(null,(function (p1__37908_SHARP_){
return (emmy.generic.imag_part.cljs$core$IFn$_invoke$arity$1(p1__37908_SHARP_) < (-1));
}),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??factors","??factors",1906330792,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37929){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.generic._.cljs$core$IFn$_invoke$arity$1(emmy.complex.I)], null),(function (){var fexpr__37930 = new cljs.core.Symbol(null,"??factors","??factors",1906330792,null);
return (fexpr__37930.cljs$core$IFn$_invoke$arity$1 ? fexpr__37930.cljs$core$IFn$_invoke$arity$1(G__37929) : fexpr__37930.call(null,G__37929));
})()))], null)),(function (p1__37909_SHARP_){
return emmy.generic._.cljs$core$IFn$_invoke$arity$1(emmy.generic.imag_part.cljs$core$IFn$_invoke$arity$1((function (){var G__37931 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (p1__37909_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37909_SHARP_.cljs$core$IFn$_invoke$arity$1(G__37931) : p1__37909_SHARP_.call(null,G__37931));
})()));
})(G__37929)], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,exact_integer_QMARK_,(new cljs.core.List(null,(function (p1__37910_SHARP_){
return (p1__37910_SHARP_ > (1));
}),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??factors","??factors",1906330792,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37932){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__37933 = new cljs.core.Symbol(null,"??factors","??factors",1906330792,null);
return (fexpr__37933.cljs$core$IFn$_invoke$arity$1 ? fexpr__37933.cljs$core$IFn$_invoke$arity$1(G__37932) : fexpr__37933.call(null,G__37932));
})()))], null)),(function (){var fexpr__37934 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__37934.cljs$core$IFn$_invoke$arity$1 ? fexpr__37934.cljs$core$IFn$_invoke$arity$1(G__37932) : fexpr__37934.call(null,G__37932));
})()], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,exact_integer_QMARK_,(new cljs.core.List(null,(function (p1__37911_SHARP_){
return (p1__37911_SHARP_ < (-1));
}),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??factors","??factors",1906330792,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37935){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(-1)], null),(function (){var fexpr__37936 = new cljs.core.Symbol(null,"??factors","??factors",1906330792,null);
return (fexpr__37936.cljs$core$IFn$_invoke$arity$1 ? fexpr__37936.cljs$core$IFn$_invoke$arity$1(G__37935) : fexpr__37936.call(null,G__37935));
})()))], null)),(function (p1__37912_SHARP_){
return (- (function (){var G__37937 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__37912_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37912_SHARP_.cljs$core$IFn$_invoke$arity$1(G__37937) : p1__37912_SHARP_.call(null,G__37937));
})());
})(G__37935)], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,emmy.simplify.rules.complex_number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37938){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (p1__37913_SHARP_){
return emmy.generic.real_part.cljs$core$IFn$_invoke$arity$1((function (){var G__37939 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (p1__37913_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37913_SHARP_.cljs$core$IFn$_invoke$arity$1(G__37939) : p1__37913_SHARP_.call(null,G__37939));
})());
})(G__37938)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (p1__37914_SHARP_){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.generic.imag_part.cljs$core$IFn$_invoke$arity$1((function (){var G__37940 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (p1__37914_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37914_SHARP_.cljs$core$IFn$_invoke$arity$1(G__37940) : p1__37914_SHARP_.call(null,G__37940));
})()),(cljs.core.unquote.cljs$core$IFn$_invoke$arity$1 ? cljs.core.unquote.cljs$core$IFn$_invoke$arity$1(emmy.complex.I) : cljs.core.unquote.call(null,emmy.complex.I)));
})(G__37938)], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,emmy.simplify.rules.complex_number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??factors","??factors",1906330792,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37941){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__37915_SHARP_){
return emmy.generic.real_part.cljs$core$IFn$_invoke$arity$1((function (){var G__37942 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (p1__37915_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37915_SHARP_.cljs$core$IFn$_invoke$arity$1(G__37942) : p1__37915_SHARP_.call(null,G__37942));
})());
})(G__37941)], null),(function (){var fexpr__37943 = new cljs.core.Symbol(null,"??factors","??factors",1906330792,null);
return (fexpr__37943.cljs$core$IFn$_invoke$arity$1 ? fexpr__37943.cljs$core$IFn$_invoke$arity$1(G__37941) : fexpr__37943.call(null,G__37941));
})()))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__37916_SHARP_){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.generic.imag_part.cljs$core$IFn$_invoke$arity$1((function (){var G__37944 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (p1__37916_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37916_SHARP_.cljs$core$IFn$_invoke$arity$1(G__37944) : p1__37916_SHARP_.call(null,G__37944));
})()),(cljs.core.unquote.cljs$core$IFn$_invoke$arity$1 ? cljs.core.unquote.cljs$core$IFn$_invoke$arity$1(emmy.complex.I) : cljs.core.unquote.call(null,emmy.complex.I)));
})(G__37941)], null),(function (){var fexpr__37945 = new cljs.core.Symbol(null,"??factors","??factors",1906330792,null);
return (fexpr__37945.cljs$core$IFn$_invoke$arity$1 ? fexpr__37945.cljs$core$IFn$_invoke$arity$1(G__37941) : fexpr__37945.call(null,G__37941));
})()))], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
}))], 0))], 0));
})();
emmy.simplify.rules.complex_trig = emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,emmy.complex.I,null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37946){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null),(1)], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?z","?z",711595547,null),(new cljs.core.List(null,emmy.complex.I,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37947){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null),(function (){var fexpr__37948 = new cljs.core.Symbol(null,"?z","?z",711595547,null);
return (fexpr__37948.cljs$core$IFn$_invoke$arity$1 ? fexpr__37948.cljs$core$IFn$_invoke$arity$1(G__37947) : fexpr__37948.call(null,G__37947));
})()], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,emmy.complex.I,(new cljs.core.List(null,new cljs.core.Symbol(null,"?z","?z",711595547,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37949){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null),(function (){var fexpr__37950 = new cljs.core.Symbol(null,"?z","?z",711595547,null);
return (fexpr__37950.cljs$core$IFn$_invoke$arity$1 ? fexpr__37950.cljs$core$IFn$_invoke$arity$1(G__37949) : fexpr__37950.call(null,G__37949));
})()], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null),(new cljs.core.List(null,emmy.complex.I,(new cljs.core.List(null,new cljs.core.Symbol(null,"??ys","??ys",1180811471,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37951){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__37952 = new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null);
return (fexpr__37952.cljs$core$IFn$_invoke$arity$1 ? fexpr__37952.cljs$core$IFn$_invoke$arity$1(G__37951) : fexpr__37952.call(null,G__37951));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__37953 = new cljs.core.Symbol(null,"??ys","??ys",1180811471,null);
return (fexpr__37953.cljs$core$IFn$_invoke$arity$1 ? fexpr__37953.cljs$core$IFn$_invoke$arity$1(G__37951) : fexpr__37953.call(null,G__37951));
})()], 0)))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,emmy.complex.I,null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37954){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.complex.I,cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sinh","sinh",-990423302,null),(1)], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?z","?z",711595547,null),(new cljs.core.List(null,emmy.complex.I,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37955){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.complex.I,cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sinh","sinh",-990423302,null),(function (){var fexpr__37956 = new cljs.core.Symbol(null,"?z","?z",711595547,null);
return (fexpr__37956.cljs$core$IFn$_invoke$arity$1 ? fexpr__37956.cljs$core$IFn$_invoke$arity$1(G__37955) : fexpr__37956.call(null,G__37955));
})()], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,emmy.complex.I,(new cljs.core.List(null,new cljs.core.Symbol(null,"?z","?z",711595547,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37957){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.complex.I,cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sinh","sinh",-990423302,null),(function (){var fexpr__37958 = new cljs.core.Symbol(null,"?z","?z",711595547,null);
return (fexpr__37958.cljs$core$IFn$_invoke$arity$1 ? fexpr__37958.cljs$core$IFn$_invoke$arity$1(G__37957) : fexpr__37958.call(null,G__37957));
})()], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null),(new cljs.core.List(null,emmy.complex.I,(new cljs.core.List(null,new cljs.core.Symbol(null,"??ys","??ys",1180811471,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37959){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.complex.I,cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sinh","sinh",-990423302,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__37960 = new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null);
return (fexpr__37960.cljs$core$IFn$_invoke$arity$1 ? fexpr__37960.cljs$core$IFn$_invoke$arity$1(G__37959) : fexpr__37960.call(null,G__37959));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__37961 = new cljs.core.Symbol(null,"??ys","??ys",1180811471,null);
return (fexpr__37961.cljs$core$IFn$_invoke$arity$1 ? fexpr__37961.cljs$core$IFn$_invoke$arity$1(G__37959) : fexpr__37961.call(null,G__37959));
})()], 0)))], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
}))], 0))], 0));
emmy.simplify.rules.complex_rules = (function (){var ctor = cljs.core.list(new cljs.core.Symbol(null,"?","?",-62633706,null),new cljs.core.Symbol(null,"?op","?op",-135731883,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"make-rectangular","make-rectangular",-1494662174,null),"null",new cljs.core.Symbol(null,"complex","complex",-1238824944,null),"null"], null), null));
return emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,ctor,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?theta","?theta",-893896091,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?theta","?theta",-893896091,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__37962){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),emmy.complex.I,(function (){var fexpr__37963 = new cljs.core.Symbol(null,"?theta","?theta",-893896091,null);
return (fexpr__37963.cljs$core$IFn$_invoke$arity$1 ? fexpr__37963.cljs$core$IFn$_invoke$arity$1(G__37962) : fexpr__37963.call(null,G__37962));
})()], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"real-part","real-part",-2001752061,null),(new cljs.core.List(null,(new cljs.core.List(null,ctor,(new cljs.core.List(null,new cljs.core.Symbol(null,"?re","?re",118270068,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37964){
var r__36231__auto__ = (function (){var fexpr__37965 = new cljs.core.Symbol(null,"?re","?re",118270068,null);
return (fexpr__37965.cljs$core$IFn$_invoke$arity$1 ? fexpr__37965.cljs$core$IFn$_invoke$arity$1(G__37964) : fexpr__37965.call(null,G__37964));
})();
var or__5162__auto__ = r__36231__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"imag-part","imag-part",2028041294,null),(new cljs.core.List(null,(new cljs.core.List(null,ctor,(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?im","?im",120320525,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37966){
var r__36231__auto__ = (function (){var fexpr__37967 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__37967.cljs$core$IFn$_invoke$arity$1 ? fexpr__37967.cljs$core$IFn$_invoke$arity$1(G__37966) : fexpr__37967.call(null,G__37966));
})();
var or__5162__auto__ = r__36231__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),(new cljs.core.List(null,(new cljs.core.List(null,ctor,(new cljs.core.List(null,new cljs.core.Symbol(null,"?re","?re",118270068,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?im","?im",120320525,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37968){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__37969 = new cljs.core.Symbol(null,"?re","?re",118270068,null);
return (fexpr__37969.cljs$core$IFn$_invoke$arity$1 ? fexpr__37969.cljs$core$IFn$_invoke$arity$1(G__37968) : fexpr__37969.call(null,G__37968));
})(),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__37970 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__37970.cljs$core$IFn$_invoke$arity$1 ? fexpr__37970.cljs$core$IFn$_invoke$arity$1(G__37968) : fexpr__37970.call(null,G__37968));
})(),(2)], null))], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"angle","angle",-1032341515,null),(new cljs.core.List(null,(new cljs.core.List(null,ctor,(new cljs.core.List(null,new cljs.core.Symbol(null,"?re","?re",118270068,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?im","?im",120320525,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37971){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(function (){var fexpr__37972 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__37972.cljs$core$IFn$_invoke$arity$1 ? fexpr__37972.cljs$core$IFn$_invoke$arity$1(G__37971) : fexpr__37972.call(null,G__37971));
})(),(function (){var fexpr__37973 = new cljs.core.Symbol(null,"?re","?re",118270068,null);
return (fexpr__37973.cljs$core$IFn$_invoke$arity$1 ? fexpr__37973.cljs$core$IFn$_invoke$arity$1(G__37971) : fexpr__37973.call(null,G__37971));
})()], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"real-part","real-part",-2001752061,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"make-polar","make-polar",2147326621,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?m","?m",896026745,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?a","?a",1314302913,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37974){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__37975 = new cljs.core.Symbol(null,"?m","?m",896026745,null);
return (fexpr__37975.cljs$core$IFn$_invoke$arity$1 ? fexpr__37975.cljs$core$IFn$_invoke$arity$1(G__37974) : fexpr__37975.call(null,G__37974));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__37976 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__37976.cljs$core$IFn$_invoke$arity$1 ? fexpr__37976.cljs$core$IFn$_invoke$arity$1(G__37974) : fexpr__37976.call(null,G__37974));
})()], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"imag-part","imag-part",2028041294,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"make-polar","make-polar",2147326621,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?m","?m",896026745,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?a","?a",1314302913,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37977){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__37978 = new cljs.core.Symbol(null,"?m","?m",896026745,null);
return (fexpr__37978.cljs$core$IFn$_invoke$arity$1 ? fexpr__37978.cljs$core$IFn$_invoke$arity$1(G__37977) : fexpr__37978.call(null,G__37977));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__37979 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__37979.cljs$core$IFn$_invoke$arity$1 ? fexpr__37979.cljs$core$IFn$_invoke$arity$1(G__37977) : fexpr__37979.call(null,G__37977));
})()], null))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"make-polar","make-polar",2147326621,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?m","?m",896026745,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37980){
var r__36231__auto__ = (function (){var fexpr__37981 = new cljs.core.Symbol(null,"?m","?m",896026745,null);
return (fexpr__37981.cljs$core$IFn$_invoke$arity$1 ? fexpr__37981.cljs$core$IFn$_invoke$arity$1(G__37980) : fexpr__37981.call(null,G__37980));
})();
var or__5162__auto__ = r__36231__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"angle","angle",-1032341515,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"make-polar","make-polar",2147326621,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?a","?a",1314302913,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),emmy.pattern.rule._EQ__GT_),(function (G__37982){
var r__36231__auto__ = (function (){var fexpr__37983 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__37983.cljs$core$IFn$_invoke$arity$1 ? fexpr__37983.cljs$core$IFn$_invoke$arity$1(G__37982) : fexpr__37983.call(null,G__37982));
})();
var or__5162__auto__ = r__36231__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
}))], 0))], 0));
})();
emmy.simplify.rules.divide_numbers_through = emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(1),(new cljs.core.List(null,new cljs.core.Symbol(null,"?factor","?factor",598737740,null),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__37987){
var r__36231__auto__ = (function (){var fexpr__37988 = new cljs.core.Symbol(null,"?factor","?factor",598737740,null);
return (fexpr__37988.cljs$core$IFn$_invoke$arity$1 ? fexpr__37988.cljs$core$IFn$_invoke$arity$1(G__37987) : fexpr__37988.call(null,G__37987));
})();
var or__5162__auto__ = r__36231__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(1),(new cljs.core.List(null,new cljs.core.Symbol(null,"??factors","??factors",1906330792,null),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__37989){
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__37990 = new cljs.core.Symbol(null,"??factors","??factors",1906330792,null);
return (fexpr__37990.cljs$core$IFn$_invoke$arity$1 ? fexpr__37990.cljs$core$IFn$_invoke$arity$1(G__37989) : fexpr__37990.call(null,G__37989));
})()));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.value.number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?d","?d",-1851543854,null),(new cljs.core.List(null,emmy.value.number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__37991){
var r__36231__auto__ = (function (p__37992){
var map__37993 = p__37992;
var map__37993__$1 = cljs.core.__destructure_map(map__37993);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37993__$1,new cljs.core.Symbol(null,"?n","?n",-2053238410,null));
var d = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37993__$1,new cljs.core.Symbol(null,"?d","?d",-1851543854,null));
return emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(n,d);
})(G__37991);
var or__5162__auto__ = r__36231__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??terms","??terms",1737460425,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?d","?d",-1851543854,null),(new cljs.core.List(null,emmy.value.number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__37994){
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null)], null),(function (p1__37984_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
var G__37995 = p1__37984_SHARP_;
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),n,(function (){var fexpr__37996 = new cljs.core.Symbol(null,"?d","?d",-1851543854,null);
return (fexpr__37996.cljs$core$IFn$_invoke$arity$1 ? fexpr__37996.cljs$core$IFn$_invoke$arity$1(G__37995) : fexpr__37996.call(null,G__37995));
})()], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
}),(function (){var G__37997 = new cljs.core.Symbol(null,"??terms","??terms",1737460425,null);
return (p1__37984_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37984_SHARP_.cljs$core$IFn$_invoke$arity$1(G__37997) : p1__37984_SHARP_.call(null,G__37997));
})());
})(G__37994)));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,emmy.value.number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??factors","??factors",1906330792,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?d","?d",-1851543854,null),(new cljs.core.List(null,emmy.value.number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__37998){
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p__37999){
var map__38000 = p__37999;
var map__38000__$1 = cljs.core.__destructure_map(map__38000);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38000__$1,new cljs.core.Symbol(null,"?n","?n",-2053238410,null));
var d = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38000__$1,new cljs.core.Symbol(null,"?d","?d",-1851543854,null));
return emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(n,d);
})(G__37998)], null),(function (){var fexpr__38001 = new cljs.core.Symbol(null,"??factors","??factors",1906330792,null);
return (fexpr__38001.cljs$core$IFn$_invoke$arity$1 ? fexpr__38001.cljs$core$IFn$_invoke$arity$1(G__37998) : fexpr__38001.call(null,G__37998));
})()));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??factors","??factors",1906330792,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?d","?d",-1851543854,null),(new cljs.core.List(null,emmy.value.number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__38002){
var r__36231__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__37985_SHARP_){
return emmy.generic.invert.cljs$core$IFn$_invoke$arity$1((function (){var G__38003 = new cljs.core.Symbol(null,"?d","?d",-1851543854,null);
return (p1__37985_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37985_SHARP_.cljs$core$IFn$_invoke$arity$1(G__38003) : p1__37985_SHARP_.call(null,G__38003));
})());
})(G__38002)], null),(function (){var fexpr__38004 = new cljs.core.Symbol(null,"??factors","??factors",1906330792,null);
return (fexpr__38004.cljs$core$IFn$_invoke$arity$1 ? fexpr__38004.cljs$core$IFn$_invoke$arity$1(G__38002) : fexpr__38004.call(null,G__38002));
})()));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?d","?d",-1851543854,null),(new cljs.core.List(null,emmy.value.number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?factor","?factor",598737740,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__38005){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(function (){var fexpr__38006 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__38006.cljs$core$IFn$_invoke$arity$1 ? fexpr__38006.cljs$core$IFn$_invoke$arity$1(G__38005) : fexpr__38006.call(null,G__38005));
})(),(function (){var fexpr__38007 = new cljs.core.Symbol(null,"?d","?d",-1851543854,null);
return (fexpr__38007.cljs$core$IFn$_invoke$arity$1 ? fexpr__38007.cljs$core$IFn$_invoke$arity$1(G__38005) : fexpr__38007.call(null,G__38005));
})()], null)),(function (){var fexpr__38008 = new cljs.core.Symbol(null,"?factor","?factor",598737740,null);
return (fexpr__38008.cljs$core$IFn$_invoke$arity$1 ? fexpr__38008.cljs$core$IFn$_invoke$arity$1(G__38005) : fexpr__38008.call(null,G__38005));
})()], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?d","?d",-1851543854,null),(new cljs.core.List(null,emmy.value.number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??factors","??factors",1906330792,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__38009){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(function (){var fexpr__38010 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__38010.cljs$core$IFn$_invoke$arity$1 ? fexpr__38010.cljs$core$IFn$_invoke$arity$1(G__38009) : fexpr__38010.call(null,G__38009));
})(),(function (){var fexpr__38011 = new cljs.core.Symbol(null,"?d","?d",-1851543854,null);
return (fexpr__38011.cljs$core$IFn$_invoke$arity$1 ? fexpr__38011.cljs$core$IFn$_invoke$arity$1(G__38009) : fexpr__38011.call(null,G__38009));
})()], null)),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__38012 = new cljs.core.Symbol(null,"??factors","??factors",1906330792,null);
return (fexpr__38012.cljs$core$IFn$_invoke$arity$1 ? fexpr__38012.cljs$core$IFn$_invoke$arity$1(G__38009) : fexpr__38012.call(null,G__38009));
})()))], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
}
})),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?d","?d",-1851543854,null),(new cljs.core.List(null,emmy.value.number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),emmy.pattern.rule._EQ__GT_),(function (G__38013){
var r__36231__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__37986_SHARP_){
return emmy.generic.invert.cljs$core$IFn$_invoke$arity$1((function (){var G__38014 = new cljs.core.Symbol(null,"?d","?d",-1851543854,null);
return (p1__37986_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37986_SHARP_.cljs$core$IFn$_invoke$arity$1(G__38014) : p1__37986_SHARP_.call(null,G__38014));
})());
})(G__38013),(function (){var fexpr__38015 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__38015.cljs$core$IFn$_invoke$arity$1 ? fexpr__38015.cljs$core$IFn$_invoke$arity$1(G__38013) : fexpr__38015.call(null,G__38013));
})()], null));
var or__5162__auto__ = r__36231__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36231__auto__);
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
var expr_SINGLEQUOTE_ = (function (){var G__38016 = (misc.cljs$core$IFn$_invoke$arity$1 ? misc.cljs$core$IFn$_invoke$arity$1(expr) : misc.call(null,expr));
var G__38016__$1 = ((logexp_QMARK_)?(le.cljs$core$IFn$_invoke$arity$1 ? le.cljs$core$IFn$_invoke$arity$1(G__38016) : le.call(null,G__38016)):G__38016);
var G__38016__$2 = ((mag_QMARK_)?(emmy.simplify.rules.magnitude.cljs$core$IFn$_invoke$arity$1 ? emmy.simplify.rules.magnitude.cljs$core$IFn$_invoke$arity$1(G__38016__$1) : emmy.simplify.rules.magnitude.call(null,G__38016__$1)):G__38016__$1);
var G__38016__$3 = ((invtrig_QMARK_)?(ti.cljs$core$IFn$_invoke$arity$1 ? ti.cljs$core$IFn$_invoke$arity$1(G__38016__$2) : ti.call(null,G__38016__$2)):G__38016__$2);
if(cljs.core.truth_((function (){var and__5160__auto__ = sincos_QMARK_;
if(and__5160__auto__){
return emmy.simplify.rules._STAR_sin_cos_simplify_QMARK__STAR_;
} else {
return and__5160__auto__;
}
})())){
return (st.cljs$core$IFn$_invoke$arity$1 ? st.cljs$core$IFn$_invoke$arity$1(G__38016__$3) : st.call(null,G__38016__$3));
} else {
return G__38016__$3;
}
})();
if(((sincos_QMARK_) && (invtrig_QMARK_))){
var G__38017 = (ti.cljs$core$IFn$_invoke$arity$1 ? ti.cljs$core$IFn$_invoke$arity$1(expr_SINGLEQUOTE_) : ti.call(null,expr_SINGLEQUOTE_));
return (sim_root.cljs$core$IFn$_invoke$arity$1 ? sim_root.cljs$core$IFn$_invoke$arity$1(G__38017) : sim_root.call(null,G__38017));
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
