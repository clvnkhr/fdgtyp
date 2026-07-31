import "./cljs_env.js";
import "./cljs.core.js";
import "./emmy.expression.js";
import "./emmy.generic.js";
import "./emmy.numsymb.js";
import "./emmy.util.js";
import "./emmy.value.js";
goog.provide('emmy.expression.analyze');
/**
 * Exponential expressions with non-integer exponents must become kernels, because
 *   they cannot become polynomial exponentials.
 * 
 *   To disable this guard, bind this variable to `false`.
 */
emmy.expression.analyze._STAR_inhibit_expt_simplify_STAR_ = true;
/**
 * Returns
 *   a [Comparator](https://docs.oracle.com/javase/8/docs/api/java/util/Comparator.html)
 *   function taking account of the input variable set `var-set` in the following
 *   way:
 * 
 *   If both inputs to the comparator are in `var-set,` or both are not, then the
 *   results are as `clojure.core/compare` would return. But if one is in `var-set`
 *   and the other is not, then the other will always compare greater.
 * 
 *   In this way, expressions produced by the simplifier will have simple variables
 *   sorted earlier than expressions involving those variables.
 */
emmy.expression.analyze.make_vcompare = (function emmy$expression$analyze$make_vcompare(var_set){
return (function (v,w){
if(cljs.core.truth_((var_set.cljs$core$IFn$_invoke$arity$1 ? var_set.cljs$core$IFn$_invoke$arity$1(v) : var_set.call(null,v)))){
if(cljs.core.truth_((var_set.cljs$core$IFn$_invoke$arity$1 ? var_set.cljs$core$IFn$_invoke$arity$1(w) : var_set.call(null,w)))){
return cljs.core.compare(v,w);
} else {
return (-1);
}
} else {
if(cljs.core.truth_((var_set.cljs$core$IFn$_invoke$arity$1 ? var_set.cljs$core$IFn$_invoke$arity$1(w) : var_set.call(null,w)))){
return (1);
} else {
return cljs.core.compare(v,w);

}
}
});
});
/**
 * Called with no arguments, produces a function mapping a string prefix
 * to a generated symbol with a four-digit suffix which increments
 * with each call, providing a stream of unique symbols. If the returned
 * function is called without arguments, a default prefix of "_" is
 * used (but see below).
 * 
 * May be called with one integer argument to set the size of the
 * suffix field in digits.
 * 
 * Supplying yet one more string argument changes the default prefix.
 * ```
 * (def g (monotonic-symbol-generator))
 * (take 5 (repeatedly #(g "a")))
 * (take 5 (repeatedly g))
 * ;; (a0000 a0001 a0002 a0003 a0004)
 * ;; (_0005 _0006 _0007 _0008 _0009)
 * 
 * 
 * (def h (monotonic-symbol-generator 2))
 * (take 5 (repeatedly #(h "b")))
 * (take 5 (repeatedly h))
 * ;; (b00 b01 b02 b03 b04)
 * ;; (_05 _06 _07 _08 _09)
 * 
 * (def j (monotonic-symbol-generator 3 "x"))
 * (take 5 (repeatedly #(j "a")))
 * (take 5 (repeatedly j))
 * ;; (a000 a001 a002 a003 a004)
 * ;; (x005 x006 x007 x008 x009)
 * ```
 * 
 */
emmy.expression.analyze.monotonic_symbol_generator = (function emmy$expression$analyze$monotonic_symbol_generator(var_args){
var G__69213 = arguments.length;
switch (G__69213) {
case 0:
return emmy.expression.analyze.monotonic_symbol_generator.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return emmy.expression.analyze.monotonic_symbol_generator.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.expression.analyze.monotonic_symbol_generator.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.expression.analyze.monotonic_symbol_generator.cljs$core$IFn$_invoke$arity$0 = (function (){
return emmy.expression.analyze.monotonic_symbol_generator.cljs$core$IFn$_invoke$arity$2((4),"_");
}));

(emmy.expression.analyze.monotonic_symbol_generator.cljs$core$IFn$_invoke$arity$1 = (function (size){
return emmy.expression.analyze.monotonic_symbol_generator.cljs$core$IFn$_invoke$arity$2(size,"_");
}));

(emmy.expression.analyze.monotonic_symbol_generator.cljs$core$IFn$_invoke$arity$2 = (function (size,prefix){
var i = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
return (function() {
var emmy$expression$analyze$g = null;
var emmy$expression$analyze$g__0 = (function (){
return emmy$expression$analyze$g.cljs$core$IFn$_invoke$arity$1(prefix);
});
var emmy$expression$analyze$g__1 = (function (prefix__$1){
var n = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(i,cljs.core.inc)));
var s = ((n).length);
var d = (size - s);
if((d < (0))){
emmy.util.illegal_state((""+"Symbol generator of width "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)+" exhausted"));
} else {
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix__$1)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(d,"0"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n], 0))));
});
emmy$expression$analyze$g = function(prefix__$1){
switch(arguments.length){
case 0:
return emmy$expression$analyze$g__0.call(this);
case 1:
return emmy$expression$analyze$g__1.call(this,prefix__$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
emmy$expression$analyze$g.cljs$core$IFn$_invoke$arity$0 = emmy$expression$analyze$g__0;
emmy$expression$analyze$g.cljs$core$IFn$_invoke$arity$1 = emmy$expression$analyze$g__1;
return emmy$expression$analyze$g;
})()
}));

(emmy.expression.analyze.monotonic_symbol_generator.cljs$lang$maxFixedArity = 2);


/**
 * [[ICanonicalize]] captures the methods exposed by a Emmy analyzer backend.
 * @interface
 */
emmy.expression.analyze.ICanonicalize = function(){};

var emmy$expression$analyze$ICanonicalize$expression__GT_$dyn_69298 = (function() {
var G__69299 = null;
var G__69299__3 = (function (analyzer,x,continue$){
var x__5519__auto__ = (((analyzer == null))?null:analyzer);
var m__5520__auto__ = (emmy.expression.analyze.expression__GT_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(analyzer,x,continue$) : m__5520__auto__.call(null,analyzer,x,continue$));
} else {
var m__5518__auto__ = (emmy.expression.analyze.expression__GT_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(analyzer,x,continue$) : m__5518__auto__.call(null,analyzer,x,continue$));
} else {
throw cljs.core.missing_protocol("ICanonicalize.expression->",analyzer);
}
}
});
var G__69299__4 = (function (analyzer,x,continue$,compare_fn){
var x__5519__auto__ = (((analyzer == null))?null:analyzer);
var m__5520__auto__ = (emmy.expression.analyze.expression__GT_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$4(analyzer,x,continue$,compare_fn) : m__5520__auto__.call(null,analyzer,x,continue$,compare_fn));
} else {
var m__5518__auto__ = (emmy.expression.analyze.expression__GT_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$4(analyzer,x,continue$,compare_fn) : m__5518__auto__.call(null,analyzer,x,continue$,compare_fn));
} else {
throw cljs.core.missing_protocol("ICanonicalize.expression->",analyzer);
}
}
});
G__69299 = function(analyzer,x,continue$,compare_fn){
switch(arguments.length){
case 3:
return G__69299__3.call(this,analyzer,x,continue$);
case 4:
return G__69299__4.call(this,analyzer,x,continue$,compare_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__69299.cljs$core$IFn$_invoke$arity$3 = G__69299__3;
G__69299.cljs$core$IFn$_invoke$arity$4 = G__69299__4;
return G__69299;
})()
;
/**
 * Invokes `continue` with two arguments:
 * 
 *   - A version of `x` converted to the canonical form represented by `analyzer`
 *   - A (sorted by `compare-fn`) sequence of variables found in `x`.
 * 
 *   `compare-fn` is used to sort variables. Defaults
 *   to [[clojure.core/compare]].
 */
emmy.expression.analyze.expression__GT_ = (function emmy$expression$analyze$expression__GT_(var_args){
var G__69219 = arguments.length;
switch (G__69219) {
case 3:
return emmy.expression.analyze.expression__GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return emmy.expression.analyze.expression__GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.expression.analyze.expression__GT_.cljs$core$IFn$_invoke$arity$3 = (function (analyzer,x,continue$){
if((((!((analyzer == null)))) && ((!((analyzer.emmy$expression$analyze$ICanonicalize$expression__GT_$arity$3 == null)))))){
return analyzer.emmy$expression$analyze$ICanonicalize$expression__GT_$arity$3(analyzer,x,continue$);
} else {
return emmy$expression$analyze$ICanonicalize$expression__GT_$dyn_69298(analyzer,x,continue$);
}
}));

(emmy.expression.analyze.expression__GT_.cljs$core$IFn$_invoke$arity$4 = (function (analyzer,x,continue$,compare_fn){
if((((!((analyzer == null)))) && ((!((analyzer.emmy$expression$analyze$ICanonicalize$expression__GT_$arity$4 == null)))))){
return analyzer.emmy$expression$analyze$ICanonicalize$expression__GT_$arity$4(analyzer,x,continue$,compare_fn);
} else {
return emmy$expression$analyze$ICanonicalize$expression__GT_$dyn_69298(analyzer,x,continue$,compare_fn);
}
}));

(emmy.expression.analyze.expression__GT_.cljs$lang$maxFixedArity = 4);


var emmy$expression$analyze$ICanonicalize$__GT_expression$dyn_69306 = (function (analyzer,b,variables){
var x__5519__auto__ = (((analyzer == null))?null:analyzer);
var m__5520__auto__ = (emmy.expression.analyze.__GT_expression[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(analyzer,b,variables) : m__5520__auto__.call(null,analyzer,b,variables));
} else {
var m__5518__auto__ = (emmy.expression.analyze.__GT_expression["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(analyzer,b,variables) : m__5518__auto__.call(null,analyzer,b,variables));
} else {
throw cljs.core.missing_protocol("ICanonicalize.->expression",analyzer);
}
}
});
/**
 * Convert a canonical form `b` back to S-expression form.
 * 
 *  Each [[ICanonicalize]] instance uses `variables` in different ways. The
 *  `variables` sequence is typically obtained from the continuation invoked
 *  by [[expression->]], so these functions are complementary.
 */
emmy.expression.analyze.__GT_expression = (function emmy$expression$analyze$__GT_expression(analyzer,b,variables){
if((((!((analyzer == null)))) && ((!((analyzer.emmy$expression$analyze$ICanonicalize$__GT_expression$arity$3 == null)))))){
return analyzer.emmy$expression$analyze$ICanonicalize$__GT_expression$arity$3(analyzer,b,variables);
} else {
return emmy$expression$analyze$ICanonicalize$__GT_expression$dyn_69306(analyzer,b,variables);
}
});

var emmy$expression$analyze$ICanonicalize$known_operation_QMARK_$dyn_69308 = (function (analyzer,x){
var x__5519__auto__ = (((analyzer == null))?null:analyzer);
var m__5520__auto__ = (emmy.expression.analyze.known_operation_QMARK_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(analyzer,x) : m__5520__auto__.call(null,analyzer,x));
} else {
var m__5518__auto__ = (emmy.expression.analyze.known_operation_QMARK_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(analyzer,x) : m__5518__auto__.call(null,analyzer,x));
} else {
throw cljs.core.missing_protocol("ICanonicalize.known-operation?",analyzer);
}
}
});
/**
 * Returns true if the symbolic operation `x` is considered fundamental by
 *  `analyzer`, false otherwise.
 */
emmy.expression.analyze.known_operation_QMARK_ = (function emmy$expression$analyze$known_operation_QMARK_(analyzer,x){
if((((!((analyzer == null)))) && ((!((analyzer.emmy$expression$analyze$ICanonicalize$known_operation_QMARK_$arity$2 == null)))))){
return analyzer.emmy$expression$analyze$ICanonicalize$known_operation_QMARK_$arity$2(analyzer,x);
} else {
return emmy$expression$analyze$ICanonicalize$known_operation_QMARK_$dyn_69308(analyzer,x);
}
});

/**
 * Make-analyzer takes an analyzer `backend` (which implements [[ICanonicalize]])
 *   and returns a dictionary with the apparatus necessary to prepare expressions
 *   for analysis by replacing subexpressions formed from operations unknown to the
 *   analyzer with generated symbols, and backsubstituting after analysis is
 *   complete.
 * 
 *   For example, in the case of polynomial canonical form, we would replace a
 *   subexpression like `(sin x)` with a gensym, before entry, since the `sin`
 *   operation is not available to the polynomial canonicalizer, and restore it
 *   afterwards.
 */
emmy.expression.analyze.make_analyzer = (function emmy$expression$analyze$make_analyzer(var_args){
var G__69224 = arguments.length;
switch (G__69224) {
case 1:
return emmy.expression.analyze.make_analyzer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.expression.analyze.make_analyzer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.expression.analyze.make_analyzer.cljs$core$IFn$_invoke$arity$1 = (function (backend){
return emmy.expression.analyze.make_analyzer.cljs$core$IFn$_invoke$arity$2(backend,emmy.expression.analyze.monotonic_symbol_generator.cljs$core$IFn$_invoke$arity$2((16),"-g-"));
}));

(emmy.expression.analyze.make_analyzer.cljs$core$IFn$_invoke$arity$2 = (function (backend,symbol_generator){
var ref = cljs.core.atom;
var alter = cljs.core.swap_BANG_;
var ref_set = cljs.core.reset_BANG_;
var expr__GT_var = (function (){var G__69227 = cljs.core.PersistentArrayMap.EMPTY;
return (ref.cljs$core$IFn$_invoke$arity$1 ? ref.cljs$core$IFn$_invoke$arity$1(G__69227) : ref.call(null,G__69227));
})();
var var__GT_expr = (function (){var G__69228 = cljs.core.PersistentArrayMap.EMPTY;
return (ref.cljs$core$IFn$_invoke$arity$1 ? ref.cljs$core$IFn$_invoke$arity$1(G__69228) : ref.call(null,G__69228));
})();
var compare_fn = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.compare);
var add_symbol_BANG_ = (function emmy$expression$analyze$add_symbol_BANG_(expr){
if(cljs.core.truth_(unquoted_list_QMARK_(expr))){
var expr_k = emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(expr);
return cljs.core.identity((function (){var temp__5823__auto__ = (function (){var fexpr__69256 = cljs.core.deref(expr__GT_var);
return (fexpr__69256.cljs$core$IFn$_invoke$arity$1 ? fexpr__69256.cljs$core$IFn$_invoke$arity$1(expr_k) : fexpr__69256.call(null,expr_k));
})();
if(cljs.core.truth_(temp__5823__auto__)){
var existing_expr = temp__5823__auto__;
return existing_expr;
} else {
var var$ = (symbol_generator.cljs$core$IFn$_invoke$arity$0 ? symbol_generator.cljs$core$IFn$_invoke$arity$0() : symbol_generator.call(null));
(alter.cljs$core$IFn$_invoke$arity$4 ? alter.cljs$core$IFn$_invoke$arity$4(expr__GT_var,cljs.core.assoc,expr_k,var$) : alter.call(null,expr__GT_var,cljs.core.assoc,expr_k,var$));

(alter.cljs$core$IFn$_invoke$arity$4 ? alter.cljs$core$IFn$_invoke$arity$4(var__GT_expr,cljs.core.assoc,var$,expr) : alter.call(null,var__GT_expr,cljs.core.assoc,var$,expr));

return var$;
}
})());
} else {
return expr;
}
});
var analyze = (function emmy$expression$analyze$analyze(expr){
var vcompare_69313 = emmy.expression.analyze.make_vcompare(emmy.expression.variables_in(expr));
cljs.core.reset_BANG_(compare_fn,vcompare_69313);

return ianalyze(expr);
});
var v_compare = (function emmy$expression$analyze$v_compare(v1,v2){
var fexpr__69258 = cljs.core.deref(compare_fn);
return (fexpr__69258.cljs$core$IFn$_invoke$arity$2 ? fexpr__69258.cljs$core$IFn$_invoke$arity$2(v1,v2) : fexpr__69258.call(null,v1,v2));
});
var ianalyze = (function emmy$expression$analyze$ianalyze(expr){
if(cljs.core.truth_(unquoted_list_QMARK_(expr))){
var analyzed_expr = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(emmy$expression$analyze$ianalyze,expr));
if(cljs.core.truth_((function (){var and__5160__auto__ = emmy.expression.analyze.known_operation_QMARK_(backend,(emmy.numsymb.operator.cljs$core$IFn$_invoke$arity$1 ? emmy.numsymb.operator.cljs$core$IFn$_invoke$arity$1(analyzed_expr) : emmy.numsymb.operator.call(null,analyzed_expr)));
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.not((function (){var and__5160__auto____$1 = emmy.expression.analyze._STAR_inhibit_expt_simplify_STAR_;
if(cljs.core.truth_(and__5160__auto____$1)){
var and__5160__auto____$2 = emmy.numsymb.expt_QMARK_(analyzed_expr);
if(cljs.core.truth_(and__5160__auto____$2)){
return (!(emmy.value.integral_QMARK_(cljs.core.second((emmy.numsymb.operands.cljs$core$IFn$_invoke$arity$1 ? emmy.numsymb.operands.cljs$core$IFn$_invoke$arity$1(analyzed_expr) : emmy.numsymb.operands.call(null,analyzed_expr))))));
} else {
return and__5160__auto____$2;
}
} else {
return and__5160__auto____$1;
}
})());
} else {
return and__5160__auto__;
}
})())){
return analyzed_expr;
} else {
var temp__5823__auto__ = (function (){var fexpr__69260 = cljs.core.deref(expr__GT_var);
return (fexpr__69260.cljs$core$IFn$_invoke$arity$1 ? fexpr__69260.cljs$core$IFn$_invoke$arity$1(analyzed_expr) : fexpr__69260.call(null,analyzed_expr));
})();
if(cljs.core.truth_(temp__5823__auto__)){
var existing_expr = temp__5823__auto__;
return existing_expr;
} else {
return new_kernels(analyzed_expr);
}
}
} else {
return expr;
}
});
var unquoted_list_QMARK_ = (function emmy$expression$analyze$unquoted_list_QMARK_(expr){
return ((cljs.core.sequential_QMARK_(expr)) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(expr),new cljs.core.Symbol(null,"quote","quote",1377916282,null))))));
});
var new_analysis_BANG_ = (function emmy$expression$analyze$new_analysis_BANG_(){
cljs.core.reset_BANG_(compare_fn,cljs.core.compare);

var G__69262_69314 = expr__GT_var;
var G__69263_69315 = cljs.core.PersistentArrayMap.EMPTY;
(ref_set.cljs$core$IFn$_invoke$arity$2 ? ref_set.cljs$core$IFn$_invoke$arity$2(G__69262_69314,G__69263_69315) : ref_set.call(null,G__69262_69314,G__69263_69315));

var G__69264_69316 = var__GT_expr;
var G__69265_69317 = cljs.core.PersistentArrayMap.EMPTY;
(ref_set.cljs$core$IFn$_invoke$arity$2 ? ref_set.cljs$core$IFn$_invoke$arity$2(G__69264_69316,G__69265_69317) : ref_set.call(null,G__69264_69316,G__69265_69317));

return null;
});
var base_simplify = (function emmy$expression$analyze$base_simplify(expr){
if(cljs.core.truth_(unquoted_list_QMARK_(expr))){
return emmy.expression.analyze.expression__GT_(backend,expr,(function (p1__69221_SHARP_,p2__69222_SHARP_){
return emmy.expression.analyze.__GT_expression(backend,p1__69221_SHARP_,p2__69222_SHARP_);
}),v_compare);
} else {
return expr;
}
});
var simplify = (function emmy$expression$analyze$simplify(expr){
new_analysis_BANG_();

return simplify_expression(emmy.expression.expression_of(expr));
});
var analyze_expression = (function emmy$expression$analyze$analyze_expression(expr){
var _STAR_incremental_simplifier_STAR__orig_val__69268 = emmy.numsymb._STAR_incremental_simplifier_STAR_;
var _STAR_incremental_simplifier_STAR__temp_val__69269 = false;
(emmy.numsymb._STAR_incremental_simplifier_STAR_ = _STAR_incremental_simplifier_STAR__temp_val__69269);

try{return base_simplify(analyze(expr));
}finally {(emmy.numsymb._STAR_incremental_simplifier_STAR_ = _STAR_incremental_simplifier_STAR__orig_val__69268);
}});
var simplify_expression = (function emmy$expression$analyze$simplify_expression(expr){
return backsubstitute(analyze_expression(expr));
});
var add_symbols_BANG_ = (function emmy$expression$analyze$add_symbols_BANG_(expr){
var new$ = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(add_symbol_BANG_,expr));
return add_symbol_BANG_(new$);
});
var new_kernels = (function emmy$expression$analyze$new_kernels(expr){
var simplified_expr = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base_simplify,expr));
var op = (emmy.numsymb.operator.cljs$core$IFn$_invoke$arity$1 ? emmy.numsymb.operator.cljs$core$IFn$_invoke$arity$1(simplified_expr) : emmy.numsymb.operator.call(null,simplified_expr));
var temp__5823__auto__ = emmy.numsymb.symbolic_operator(op);
if(cljs.core.truth_(temp__5823__auto__)){
var v = temp__5823__auto__;
var w = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(v,(emmy.numsymb.operands.cljs$core$IFn$_invoke$arity$1 ? emmy.numsymb.operands.cljs$core$IFn$_invoke$arity$1(simplified_expr) : emmy.numsymb.operands.call(null,simplified_expr)));
if(((cljs.core.sequential_QMARK_(w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((emmy.numsymb.operator.cljs$core$IFn$_invoke$arity$1 ? emmy.numsymb.operator.cljs$core$IFn$_invoke$arity$1(w) : emmy.numsymb.operator.call(null,w)),op)))){
return add_symbols_BANG_(w);
} else {
return ianalyze(w);
}
} else {
return add_symbols_BANG_(simplified_expr);
}
});
var backsubstitute = (function emmy$expression$analyze$backsubstitute(expr){
if(cljs.core.sequential_QMARK_(expr)){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(emmy$expression$analyze$backsubstitute,expr));
} else {
if((expr instanceof cljs.core.Symbol)){
var temp__5823__auto__ = (function (){var fexpr__69271 = cljs.core.deref(var__GT_expr);
return (fexpr__69271.cljs$core$IFn$_invoke$arity$1 ? fexpr__69271.cljs$core$IFn$_invoke$arity$1(expr) : fexpr__69271.call(null,expr));
})();
if(cljs.core.truth_(temp__5823__auto__)){
var w = temp__5823__auto__;
return emmy$expression$analyze$backsubstitute(w);
} else {
return expr;
}
} else {
return expr;

}
}
});
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"simplify","simplify",-599213465),(function (expr){
if(emmy.expression.literal_QMARK_(expr)){
return emmy.expression.fmap(simplify,expr);
} else {
return simplify(expr);
}
}),new cljs.core.Keyword(null,"simplify-expression","simplify-expression",-473287731),(function (expr){
if(emmy.expression.literal_QMARK_(expr)){
return emmy.expression.fmap(simplify_expression,expr);
} else {
return simplify_expression(expr);
}
}),new cljs.core.Keyword(null,"initializer","initializer",-2068366756),new_analysis_BANG_,new cljs.core.Keyword(null,"analyze-expression","analyze-expression",870894091),analyze_expression,new cljs.core.Keyword(null,"get-var->expr","get-var->expr",201158735),(function (){
return cljs.core.deref(var__GT_expr);
}),new cljs.core.Keyword(null,"get-expr->var","get-expr->var",-224197397),(function (){
return cljs.core.deref(expr__GT_var);
})], null);
}));

(emmy.expression.analyze.make_analyzer.cljs$lang$maxFixedArity = 2);

/**
 * Given an `analyzer` instance created with [[make-analyzer]], returns a
 *   simplifier (a function of S-expression => simplified S-expression) that will
 *   reset its internal symbolic bindings at every invocation.
 * 
 *   Equivalent to:
 * 
 *   ```clojure
 *   (let [new-analysis! (initializer analyzer)
 *      simplify (expression-simplifier analyzer)]
 *  (fn [expr]
 *    (new-analysis!)
 *    (simplify expr)))
 *   ```
 * 
 *   See [[expression-simplifier]] for a version that will assign the same symbol
 *   to every expression it sees more than once.
 */
emmy.expression.analyze.default_simplifier = (function emmy$expression$analyze$default_simplifier(analyzer){
return new cljs.core.Keyword(null,"simplify","simplify",-599213465).cljs$core$IFn$_invoke$arity$1(analyzer);
});
/**
 * Given an `analyzer` instance created with [[make-analyzer]], returns a
 *   simplifier (a function of S-expression => simplified S-expression) that will
 *   NOT reset its internal symbolic bindings across invocations.
 * 
 *   This can be useful if the analyzer backend has any sort of memoization or
 *   caching of expressions.
 * 
 *   Pass `analyzer` to [[initializer]] to create a function that, when called,
 *   will explicitly reset the internal cache:
 * 
 *   ```clojure
 *   (def reset-analyzer! (initializer analyzer))
 *   (def simplify (expression-simplifier analyzer))
 * 
 *   (reset-analyzer!)
 *   (simplify <expr>)
 *   ```
 * 
 *   See [[default-simplifier]] for a version that will reset its internal variable
 *   assignment cache at each invocation.
 */
emmy.expression.analyze.expression_simplifier = (function emmy$expression$analyze$expression_simplifier(analyzer){
return new cljs.core.Keyword(null,"simplify-expression","simplify-expression",-473287731).cljs$core$IFn$_invoke$arity$1(analyzer);
});
/**
 * Given an `analyzer` instance created with [[make-analyzer]], returns a function
 *   of no arguments that, when called, will reset the analyzer's internal caches
 *   of symbol => subexpression and subexpression => symbol.
 */
emmy.expression.analyze.initializer = (function emmy$expression$analyze$initializer(analyzer){
return new cljs.core.Keyword(null,"initializer","initializer",-2068366756).cljs$core$IFn$_invoke$arity$1(analyzer);
});
/**
 * Given an `analyzer` instance created with [[make-analyzer]], returns a function
 *   that will take a symbolic expression, and return a simplified expression with
 *   any subexpression NOT supported by the analyzer backend replaced by a
 *   generated symbol.
 * 
 *   Any replaced subexpression will map to the SAME symbol over repeated
 *   invocations, unless you call the resetting function generated by passing
 *   `analyzer` to [[initializer]].
 * 
 *   For example:
 * 
 *   ```clojure
 *   (let [a  (poly-analyzer)
 *      ea (expression-analyzer a)]
 *  (ea '(+ x x x (sin x) (sin x))))
 *   ;;=> (+ (* 3 x) (* 2 -s-0000000000000000))
 *   ```
 */
emmy.expression.analyze.expression_analyzer = (function emmy$expression$analyze$expression_analyzer(analyzer){
return new cljs.core.Keyword(null,"analyze-expression","analyze-expression",870894091).cljs$core$IFn$_invoke$arity$1(analyzer);
});
/**
 * Given an `analyzer` instance created with [[make-analyzer]], returns a function
 *   of no arguments that, when called, will return the analyzer's current map of
 *   generated symbol => subexpression.
 * 
 *   Call the no-argument function returned by passing `analyzer`
 *   to [[initializer]] to reset the table.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (def a (poly-analyzer))
 *   (def ea (expression-analyzer a))
 * 
 *   (def get-tables (auxiliary-variable-fetcher a))
 *   (def reset-tables! (initializer a))
 * 
 *   (ea '(+ x x x (sin x) (sin x)))
 *   ;;=> (+ (* 3 x) (* 2 -s-0000000000000000))
 * 
 *   (get-tables)
 *   ;;=> {'-s-0000000000000000 '(sin x)}
 * 
 *   (reset-tables!)
 *   (get-tables)
 *   ;;=> {}
 *   ```
 */
emmy.expression.analyze.auxiliary_variable_fetcher = (function emmy$expression$analyze$auxiliary_variable_fetcher(analyzer){
return new cljs.core.Keyword(null,"get-var->expr","get-var->expr",201158735).cljs$core$IFn$_invoke$arity$1(analyzer);
});

//# sourceMappingURL=emmy.expression.analyze.js.map
