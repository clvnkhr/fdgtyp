goog.provide('emmy.polynomial.factor');
/**
 * Given a [[Polynomial]] `p`, returns a sequence of factors of in order of
 *   increasing power.
 * 
 *   The first element is a constant factor, the next is a factor with power 1, and
 *   so on.
 */
emmy.polynomial.factor.split_polynomial = (function emmy$polynomial$factor$split_polynomial(p){
var answer = (function emmy$polynomial$factor$split_polynomial_$_answer(tracker,const$){
var final$ = cljs.core.peek(tracker);
if(emmy.value.number_QMARK_(final$)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [final$], null),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(tracker),(1)),(1)));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [const$], null),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(tracker,(1)));
}
});
var m = (0);
var h = p;
var tracker = cljs.core.PersistentVector.EMPTY;
var old_s = p;
var old_m = (1);
while(true){
if(cljs.core.truth_(emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(m))){
return answer(tracker,h);
} else {
var gg = emmy.polynomial.gcd.gcd_Dp(h);
var new_s = emmy.polynomial.evenly_divide(h,(emmy.polynomial.gcd.gcd.cljs$core$IFn$_invoke$arity$2 ? emmy.polynomial.gcd.gcd.cljs$core$IFn$_invoke$arity$2(h,gg) : emmy.polynomial.gcd.gcd.call(null,h,gg)));
var new_m = (emmy.polynomial.gcd.gcd.cljs$core$IFn$_invoke$arity$2 ? emmy.polynomial.gcd.gcd.cljs$core$IFn$_invoke$arity$2(gg,new_s) : emmy.polynomial.gcd.gcd.call(null,gg,new_s));
var facts = emmy.polynomial.evenly_divide(old_s,new_s);
var doublefacts = (emmy.polynomial.gcd.gcd.cljs$core$IFn$_invoke$arity$2 ? emmy.polynomial.gcd.gcd.cljs$core$IFn$_invoke$arity$2(facts,old_m) : emmy.polynomial.gcd.gcd.call(null,facts,old_m));
var singlefacts = emmy.polynomial.evenly_divide(new_s,new_m);
var G__38955 = new_m;
var G__38956 = emmy.polynomial.evenly_divide(h,emmy.polynomial.mul(new_m,new_s));
var G__38957 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(tracker,doublefacts,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([singlefacts], 0));
var G__38958 = new_s;
var G__38959 = new_m;
m = G__38955;
h = G__38956;
tracker = G__38957;
old_s = G__38958;
old_m = G__38959;
continue;
}
break;
}
});
/**
 * Given some sequence of polynomial factors ordered by increasing power,
 *   symbolically evaluates each power and generates a symbolic expression
 *   representing the product of all factors.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (factors->expression ['c 'x 'y 1 'z])
 *   ;;=> (* c x (expt y 2) (expt z 4))
 *   ```
 */
emmy.polynomial.factor.factors__GT_expression = (function emmy$polynomial$factor$factors__GT_expression(factors){
var expt = emmy.numsymb.symbolic_operator(new cljs.core.Symbol(null,"expt","expt",2123850345,null));
return cljs.core.cons(new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,f){
if((i === (0))){
return f;
} else {
return (expt.cljs$core$IFn$_invoke$arity$2 ? expt.cljs$core$IFn$_invoke$arity$2(f,i) : expt.call(null,f,i));
}
}),factors));
});
/**
 * Simplifier that flattens nested products, converts singleton calls like `(* x)
 *   => x`, and squashes no-argument products like `(*)` into a constant `1`.
 */
emmy.polynomial.factor.simplify_product = emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.simplify.rules.associative.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"*","*",345799209,null)], 0)),emmy.simplify.rules.unary_elimination.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"*","*",345799209,null)], 0)),emmy.simplify.rules.constant_elimination(new cljs.core.Symbol(null,"*","*",345799209,null),(1)),emmy.pattern.rule.rule_STAR_(emmy.pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),null,(1),null)),emmy.pattern.rule._EQ__GT_),(function (G__38904){
var r__36234__auto__ = (1);
var or__5162__auto__ = r__36234__auto__;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36234__auto__);
}
}))], 0));
/**
 * Given a polynomial `p`, and a sequence of variables `vars` (one for each
 *   indeterminate in `p`), returns a symbolic expression representing the product
 *   of all factors of `p`.
 * 
 *   Optionally accepts a `simplify` function that will be called on each factor of
 *   exponent 0, 1, 2 etc. Defaults to `identity`.
 */
emmy.polynomial.factor.poly__GT_factored_expression = (function emmy$polynomial$factor$poly__GT_factored_expression(var_args){
var G__38909 = arguments.length;
switch (G__38909) {
case 2:
return emmy.polynomial.factor.poly__GT_factored_expression.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return emmy.polynomial.factor.poly__GT_factored_expression.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.polynomial.factor.poly__GT_factored_expression.cljs$core$IFn$_invoke$arity$2 = (function (p,vars){
return emmy.polynomial.factor.poly__GT_factored_expression.cljs$core$IFn$_invoke$arity$3(p,vars,cljs.core.identity);
}));

(emmy.polynomial.factor.poly__GT_factored_expression.cljs$core$IFn$_invoke$arity$3 = (function (p,vars,simplify){
try{var factors = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (factor){
var G__38914 = emmy.polynomial.__GT_expression(factor,vars);
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__38914) : simplify.call(null,G__38914));
}),emmy.polynomial.factor.split_polynomial(p));
var G__38915 = emmy.polynomial.factor.factors__GT_expression(factors);
return (emmy.polynomial.factor.simplify_product.cljs$core$IFn$_invoke$arity$1 ? emmy.polynomial.factor.simplify_product.cljs$core$IFn$_invoke$arity$1(G__38915) : emmy.polynomial.factor.simplify_product.call(null,G__38915));
}catch (e38911){if((e38911 instanceof Error)){
var _ = e38911;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"emmy.polynomial.factor",null,120,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"Factorization choked! Simplifying the unfactored polynomial.")], null);
}),null)),null,-37723055,null);

var G__38913 = emmy.polynomial.__GT_expression(p,vars);
return (emmy.polynomial.factor.simplify_product.cljs$core$IFn$_invoke$arity$1 ? emmy.polynomial.factor.simplify_product.cljs$core$IFn$_invoke$arity$1(G__38913) : emmy.polynomial.factor.simplify_product.call(null,G__38913));
} else {
throw e38911;

}
}}));

(emmy.polynomial.factor.poly__GT_factored_expression.cljs$lang$maxFixedArity = 3);

/**
 * Given some symbolic expression containing only polynomial operations, returns a
 *   factored version of the expression with basic simplifications applied.
 * 
 *   Optionally accepts a `simplify` function that will be called on each factor of
 *   exponent 0, 1, 2 etc. Defaults to `identity`.
 * 
 *   NOTE prefer [[factor]], as [[factor]] can handle expressions with
 *   non-polynomial operations. The trigonometric functions, for example.
 */
emmy.polynomial.factor.factor_expression = (function emmy$polynomial$factor$factor_expression(var_args){
var G__38919 = arguments.length;
switch (G__38919) {
case 1:
return emmy.polynomial.factor.factor_expression.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.polynomial.factor.factor_expression.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.polynomial.factor.factor_expression.cljs$core$IFn$_invoke$arity$1 = (function (expr){
return emmy.polynomial.factor.factor_expression.cljs$core$IFn$_invoke$arity$2(expr,cljs.core.identity);
}));

(emmy.polynomial.factor.factor_expression.cljs$core$IFn$_invoke$arity$2 = (function (expr,simplify){
var unwrapped = emmy.expression.expression_of(expr);
var cont = (function (p1__38916_SHARP_,p2__38917_SHARP_){
return emmy.polynomial.factor.poly__GT_factored_expression.cljs$core$IFn$_invoke$arity$3(p1__38916_SHARP_,p2__38917_SHARP_,simplify);
});
return emmy.polynomial.expression__GT_.cljs$core$IFn$_invoke$arity$2(unwrapped,cont);
}));

(emmy.polynomial.factor.factor_expression.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {emmy.expression.analyze.ICanonicalize}
 * @implements {cljs.core.IWithMeta}
*/
emmy.polynomial.factor.t_emmy$polynomial$factor38921 = (function (symgen,meta38922){
this.symgen = symgen;
this.meta38922 = meta38922;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(emmy.polynomial.factor.t_emmy$polynomial$factor38921.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38923,meta38922__$1){
var self__ = this;
var _38923__$1 = this;
return (new emmy.polynomial.factor.t_emmy$polynomial$factor38921(self__.symgen,meta38922__$1));
}));

(emmy.polynomial.factor.t_emmy$polynomial$factor38921.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38923){
var self__ = this;
var _38923__$1 = this;
return self__.meta38922;
}));

(emmy.polynomial.factor.t_emmy$polynomial$factor38921.prototype.emmy$expression$analyze$ICanonicalize$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.polynomial.factor.t_emmy$polynomial$factor38921.prototype.emmy$expression$analyze$ICanonicalize$expression__GT_$arity$4 = (function (_,expr,cont,v_compare){
var self__ = this;
var ___$1 = this;
return emmy.polynomial.expression__GT_.cljs$core$IFn$_invoke$arity$3(expr,cont,v_compare);
}));

(emmy.polynomial.factor.t_emmy$polynomial$factor38921.prototype.emmy$expression$analyze$ICanonicalize$__GT_expression$arity$3 = (function (_,p,vars){
var self__ = this;
var ___$1 = this;
return emmy.polynomial.factor.poly__GT_factored_expression.cljs$core$IFn$_invoke$arity$2(p,vars);
}));

(emmy.polynomial.factor.t_emmy$polynomial$factor38921.prototype.emmy$expression$analyze$ICanonicalize$known_operation_QMARK_$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return emmy.polynomial.analyzer.emmy$expression$analyze$ICanonicalize$known_operation_QMARK_$arity$2(null,o);
}));

(emmy.polynomial.factor.t_emmy$polynomial$factor38921.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symgen","symgen",-880919559,null),new cljs.core.Symbol(null,"meta38922","meta38922",-1808726105,null)], null);
}));

(emmy.polynomial.factor.t_emmy$polynomial$factor38921.cljs$lang$type = true);

(emmy.polynomial.factor.t_emmy$polynomial$factor38921.cljs$lang$ctorStr = "emmy.polynomial.factor/t_emmy$polynomial$factor38921");

(emmy.polynomial.factor.t_emmy$polynomial$factor38921.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"emmy.polynomial.factor/t_emmy$polynomial$factor38921");
}));

/**
 * Positional factory function for emmy.polynomial.factor/t_emmy$polynomial$factor38921.
 */
emmy.polynomial.factor.__GT_t_emmy$polynomial$factor38921 = (function emmy$polynomial$factor$__GT_t_emmy$polynomial$factor38921(symgen,meta38922){
return (new emmy.polynomial.factor.t_emmy$polynomial$factor38921(symgen,meta38922));
});


/**
 * Expression analyzer, identical to [[polynomial/analyzer]] except the symbolic
 *   expressions returned are in factored form.
 */
emmy.polynomial.factor.analyzer = (function (){var symgen = emmy.expression.analyze.monotonic_symbol_generator.cljs$core$IFn$_invoke$arity$2((16),"-f-");
return emmy.expression.analyze.make_analyzer.cljs$core$IFn$_invoke$arity$2((new emmy.polynomial.factor.t_emmy$polynomial$factor38921(symgen,cljs.core.PersistentArrayMap.EMPTY)),symgen);
})();
/**
 * Accepts a single symbolic expression and returns a factored version of that
 *   expression.
 * 
 *   Differs from [[factor-expression]] in that it can handle any expression, not
 *   just expressions limited to polynomial operations.
 */
emmy.polynomial.factor.factor = emmy.expression.analyze.default_simplifier(emmy.polynomial.factor.analyzer);
/**
 * Given an unwrapped symbolic expression of the form `(sqrt x)`, returns a new,
 *   unsimplified symbolic expression with any even power removed from underneath
 *   the square root.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (process-sqrt
 *  '(sqrt (* x (expt y 2) (expt z 4))))
 *   ;;=> (* (sqrt x) y (expt z 2))
 *   ```
 */
emmy.polynomial.factor.process_sqrt = (function emmy$polynomial$factor$process_sqrt(expr){
var fact_exp = (function (){var G__38924 = cljs.core.first((emmy.numsymb.operands.cljs$core$IFn$_invoke$arity$1 ? emmy.numsymb.operands.cljs$core$IFn$_invoke$arity$1(expr) : emmy.numsymb.operands.call(null,expr)));
return (emmy.polynomial.factor.factor.cljs$core$IFn$_invoke$arity$1 ? emmy.polynomial.factor.factor.cljs$core$IFn$_invoke$arity$1(G__38924) : emmy.polynomial.factor.factor.call(null,G__38924));
})();
var expt = emmy.numsymb.symbolic_operator(new cljs.core.Symbol(null,"expt","expt",2123850345,null));
var _STAR_ = emmy.numsymb.symbolic_operator(new cljs.core.Symbol(null,"*","*",345799209,null));
var sqrt = emmy.numsymb.symbolic_operator(new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null));
var even_QMARK_ = (function (n){
return ((emmy.value.native_integral_QMARK_(n)) && (cljs.core.even_QMARK_(n)));
});
var factors = (cljs.core.truth_(emmy.numsymb.product_QMARK_(fact_exp))?(emmy.numsymb.operands.cljs$core$IFn$_invoke$arity$1 ? emmy.numsymb.operands.cljs$core$IFn$_invoke$arity$1(fact_exp) : emmy.numsymb.operands.call(null,fact_exp)):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fact_exp], null));
var odds = (1);
var evens = (1);
while(true){
if(cljs.core.empty_QMARK_(factors)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(evens,(1))){
} else {
emmy.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"non-negative?","non-negative?",1248641804,null),null,(1),null)),(new cljs.core.List(null,evens,null,(1),null))))),new cljs.core.Symbol(null,"root-out-squares","root-out-squares",-278750312,null));
}

var G__38940 = (sqrt.cljs$core$IFn$_invoke$arity$1 ? sqrt.cljs$core$IFn$_invoke$arity$1(odds) : sqrt.call(null,odds));
var G__38941 = evens;
return (_STAR_.cljs$core$IFn$_invoke$arity$2 ? _STAR_.cljs$core$IFn$_invoke$arity$2(G__38940,G__38941) : _STAR_.call(null,G__38940,G__38941));
} else {
var vec__38942 = factors;
var seq__38943 = cljs.core.seq(vec__38942);
var first__38944 = cljs.core.first(seq__38943);
var seq__38943__$1 = cljs.core.next(seq__38943);
var f = first__38944;
var more = seq__38943__$1;
if(cljs.core.truth_(emmy.numsymb.expt_QMARK_(f))){
var vec__38945 = (emmy.numsymb.operands.cljs$core$IFn$_invoke$arity$1 ? emmy.numsymb.operands.cljs$core$IFn$_invoke$arity$1(f) : emmy.numsymb.operands.call(null,f));
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38945,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38945,(1),null);
if((!(even_QMARK_(e)))){
var G__38968 = more;
var G__38969 = (_STAR_.cljs$core$IFn$_invoke$arity$2 ? _STAR_.cljs$core$IFn$_invoke$arity$2(f,odds) : _STAR_.call(null,f,odds));
var G__38970 = evens;
factors = G__38968;
odds = G__38969;
evens = G__38970;
continue;
} else {
var G__38971 = more;
var G__38972 = odds;
var G__38973 = (function (){var power = cljs.core.quot(e,(2));
if((power > (1))){
var G__38948 = evens;
var G__38949 = (expt.cljs$core$IFn$_invoke$arity$2 ? expt.cljs$core$IFn$_invoke$arity$2(b,power) : expt.call(null,b,power));
return (_STAR_.cljs$core$IFn$_invoke$arity$2 ? _STAR_.cljs$core$IFn$_invoke$arity$2(G__38948,G__38949) : _STAR_.call(null,G__38948,G__38949));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(power,(1))){
return (_STAR_.cljs$core$IFn$_invoke$arity$2 ? _STAR_.cljs$core$IFn$_invoke$arity$2(evens,b) : _STAR_.call(null,evens,b));
} else {
return evens;

}
}
})();
factors = G__38971;
odds = G__38972;
evens = G__38973;
continue;
}
} else {
var G__38975 = more;
var G__38976 = (_STAR_.cljs$core$IFn$_invoke$arity$2 ? _STAR_.cljs$core$IFn$_invoke$arity$2(f,odds) : _STAR_.call(null,f,odds));
var G__38977 = evens;
factors = G__38975;
odds = G__38976;
evens = G__38977;
continue;
}
}
break;
}
});
/**
 * Given an unwrapped symbolic expression, returns a new symbolic expression with
 *   any perfect square (exponent with an even power) removed from underneath any
 *   `sqrt` that appears in the expression.
 * 
 *   To use [[root-out-squares]] with a wrapped symbolic expression,
 *   use [[emmy.expression/fmap]].
 */
emmy.polynomial.factor.root_out_squares = (function emmy$polynomial$factor$root_out_squares(expr){
return clojure.walk.prewalk((function (t){
if(cljs.core.truth_(emmy.numsymb.sqrt_QMARK_(t))){
return emmy.polynomial.factor.process_sqrt(t);
} else {
return t;
}
}),expr);
});

//# sourceMappingURL=emmy.polynomial.factor.js.map
