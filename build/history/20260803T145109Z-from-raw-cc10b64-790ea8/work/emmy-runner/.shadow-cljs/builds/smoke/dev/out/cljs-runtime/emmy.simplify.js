goog.provide('emmy.simplify');
/**
 * Returns a function that invokes f, but catches TimeoutException;
 *   if that exception is caught, then x is returned in lieu of (f x).
 */
emmy.simplify.unless_timeout = (function emmy$simplify$unless_timeout(f){
return (function (x){
try{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
}catch (e39128){if((e39128 instanceof Error)){
var _ = e39128;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"emmy.simplify",null,22,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"simplifier timed out: must have been a complicated expression")], null);
}),null)),null,-2037906775,null);

return x;
} else {
throw e39128;

}
}});
});
/**
 * An analyzer capable of simplifying sums and products, but unable to cancel
 *   across the fraction bar.
 *   NOTE: I think this is fpf:analyzer in the scheme code.
 */
emmy.simplify.poly_analyzer = (function emmy$simplify$poly_analyzer(){
var gensym = emmy.expression.analyze.monotonic_symbol_generator.cljs$core$IFn$_invoke$arity$2((16),"-s-");
return emmy.expression.analyze.make_analyzer.cljs$core$IFn$_invoke$arity$2(emmy.polynomial.analyzer,gensym);
});
/**
 * An analyzer capable of simplifying expressions built out of rational
 *   functions.
 *   NOTE: This is rcf:analyzer.
 */
emmy.simplify.rational_function_analyzer = (function emmy$simplify$rational_function_analyzer(){
var gensym = emmy.expression.analyze.monotonic_symbol_generator.cljs$core$IFn$_invoke$arity$2((16),"-r-");
return emmy.expression.analyze.make_analyzer.cljs$core$IFn$_invoke$arity$2(emmy.rational_function.analyzer,gensym);
});
emmy.simplify._STAR_poly_simplify_STAR_ = cljs.core.memoize(emmy.expression.analyze.expression_simplifier(emmy.simplify.poly_analyzer()));
emmy.simplify._STAR_rf_simplify_STAR_ = emmy.simplify.unless_timeout(cljs.core.memoize(emmy.expression.analyze.expression_simplifier(emmy.simplify.rational_function_analyzer())));
/**
 * Returns the result of executing the supplied `thunk` in an environment where
 *   the [[*rf-simplify*]] and [[*poly-simplify*]] are not memoized.
 */
emmy.simplify.hermetic_simplify_fixture = (function emmy$simplify$hermetic_simplify_fixture(thunk){
var _STAR_rf_simplify_STAR__orig_val__39139 = emmy.simplify._STAR_rf_simplify_STAR_;
var _STAR_poly_simplify_STAR__orig_val__39140 = emmy.simplify._STAR_poly_simplify_STAR_;
var _STAR_rf_simplify_STAR__temp_val__39141 = emmy.simplify.unless_timeout(emmy.expression.analyze.expression_simplifier(emmy.simplify.rational_function_analyzer()));
var _STAR_poly_simplify_STAR__temp_val__39142 = emmy.simplify.unless_timeout(emmy.expression.analyze.expression_simplifier(emmy.simplify.poly_analyzer()));
(emmy.simplify._STAR_rf_simplify_STAR_ = _STAR_rf_simplify_STAR__temp_val__39141);

(emmy.simplify._STAR_poly_simplify_STAR_ = _STAR_poly_simplify_STAR__temp_val__39142);

try{return (thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));
}finally {(emmy.simplify._STAR_poly_simplify_STAR_ = _STAR_poly_simplify_STAR__orig_val__39140);

(emmy.simplify._STAR_rf_simplify_STAR_ = _STAR_rf_simplify_STAR__orig_val__39139);
}});
emmy.simplify.simplify_and_flatten = (function emmy$simplify$simplify_and_flatten(expr){
return emmy.simplify._STAR_poly_simplify_STAR_.call(null,emmy.simplify._STAR_rf_simplify_STAR_.call(null,expr));
});
emmy.simplify.simplify_until_stable = (function emmy$simplify$simplify_until_stable(rule_simplify,canonicalize){
return (function (expr){
while(true){
var new_expr = (rule_simplify.cljs$core$IFn$_invoke$arity$1 ? rule_simplify.cljs$core$IFn$_invoke$arity$1(expr) : rule_simplify.call(null,expr));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expr,new_expr)){
return expr;
} else {
var canonicalized_expr = (canonicalize.cljs$core$IFn$_invoke$arity$1 ? canonicalize.cljs$core$IFn$_invoke$arity$1(new_expr) : canonicalize.call(null,new_expr));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(canonicalized_expr,expr)){
return expr;
} else {
if(cljs.core.truth_(emmy.generic.numeric_zero_QMARK_(emmy.simplify._STAR_poly_simplify_STAR_.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-","-",-471816912,null),(new cljs.core.List(null,expr,(new cljs.core.List(null,canonicalized_expr,null,(1),null)),(2),null)),(3),null)))))){
return canonicalized_expr;
} else {
var G__39173 = canonicalized_expr;
expr = G__39173;
continue;

}
}
}
break;
}
});
});
emmy.simplify.simplify_and_canonicalize = (function emmy$simplify$simplify_and_canonicalize(rule_simplify,canonicalize){
return (function (expr){
var new_expr = (rule_simplify.cljs$core$IFn$_invoke$arity$1 ? rule_simplify.cljs$core$IFn$_invoke$arity$1(expr) : rule_simplify.call(null,expr));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expr,new_expr)){
return expr;
} else {
return (canonicalize.cljs$core$IFn$_invoke$arity$1 ? canonicalize.cljs$core$IFn$_invoke$arity$1(new_expr) : canonicalize.call(null,new_expr));
}
});
});
emmy.simplify.clear_square_roots_of_perfect_squares = emmy.simplify.simplify_and_canonicalize(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(emmy.simplify.rules.universal_reductions(new cljs.core.Var(function(){return emmy.simplify._STAR_rf_simplify_STAR_;},new cljs.core.Symbol("emmy.simplify","*rf-simplify*","emmy.simplify/*rf-simplify*",-1340102255,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"emmy.simplify","emmy.simplify",-490367714,null),new cljs.core.Symbol(null,"*rf-simplify*","*rf-simplify*",-1292516740,null),"emmy/simplify.cljc",29,1,true,47,47,cljs.core.List.EMPTY,null,(cljs.core.truth_(emmy.simplify._STAR_rf_simplify_STAR_)?emmy.simplify._STAR_rf_simplify_STAR_.cljs$lang$test:null)]))),emmy.polynomial.factor.root_out_squares),emmy.simplify.simplify_and_flatten);
/**
 * If the supplied `bool` is true, returns `f`, else returns `identity`.
 */
emmy.simplify.only_if = (function emmy$simplify$only_if(bool,f){
if(cljs.core.truth_(bool)){
return f;
} else {
return cljs.core.identity;
}
});
var universal_reductions_39174 = emmy.simplify.rules.universal_reductions(new cljs.core.Var(function(){return emmy.simplify._STAR_rf_simplify_STAR_;},new cljs.core.Symbol("emmy.simplify","*rf-simplify*","emmy.simplify/*rf-simplify*",-1340102255,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"emmy.simplify","emmy.simplify",-490367714,null),new cljs.core.Symbol(null,"*rf-simplify*","*rf-simplify*",-1292516740,null),"emmy/simplify.cljc",29,1,true,47,47,cljs.core.List.EMPTY,null,(cljs.core.truth_(emmy.simplify._STAR_rf_simplify_STAR_)?emmy.simplify._STAR_rf_simplify_STAR_.cljs$lang$test:null)])));
var sqrt_contract_39175 = emmy.simplify.rules.sqrt_contract(new cljs.core.Var(function(){return emmy.simplify._STAR_rf_simplify_STAR_;},new cljs.core.Symbol("emmy.simplify","*rf-simplify*","emmy.simplify/*rf-simplify*",-1340102255,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"emmy.simplify","emmy.simplify",-490367714,null),new cljs.core.Symbol(null,"*rf-simplify*","*rf-simplify*",-1292516740,null),"emmy/simplify.cljc",29,1,true,47,47,cljs.core.List.EMPTY,null,(cljs.core.truth_(emmy.simplify._STAR_rf_simplify_STAR_)?emmy.simplify._STAR_rf_simplify_STAR_.cljs$lang$test:null)])));
var sqrt_expand_39176 = emmy.simplify.rules.sqrt_expand(new cljs.core.Var(function(){return emmy.simplify._STAR_rf_simplify_STAR_;},new cljs.core.Symbol("emmy.simplify","*rf-simplify*","emmy.simplify/*rf-simplify*",-1340102255,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"emmy.simplify","emmy.simplify",-490367714,null),new cljs.core.Symbol(null,"*rf-simplify*","*rf-simplify*",-1292516740,null),"emmy/simplify.cljc",29,1,true,47,47,cljs.core.List.EMPTY,null,(cljs.core.truth_(emmy.simplify._STAR_rf_simplify_STAR_)?emmy.simplify._STAR_rf_simplify_STAR_.cljs$lang$test:null)])));
var log_contract_39177 = emmy.simplify.rules.log_contract(new cljs.core.Var(function(){return emmy.simplify._STAR_rf_simplify_STAR_;},new cljs.core.Symbol("emmy.simplify","*rf-simplify*","emmy.simplify/*rf-simplify*",-1340102255,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"emmy.simplify","emmy.simplify",-490367714,null),new cljs.core.Symbol(null,"*rf-simplify*","*rf-simplify*",-1292516740,null),"emmy/simplify.cljc",29,1,true,47,47,cljs.core.List.EMPTY,null,(cljs.core.truth_(emmy.simplify._STAR_rf_simplify_STAR_)?emmy.simplify._STAR_rf_simplify_STAR_.cljs$lang$test:null)])));
var sincos_random_39178 = emmy.simplify.rules.sincos_random(new cljs.core.Var(function(){return emmy.simplify._STAR_rf_simplify_STAR_;},new cljs.core.Symbol("emmy.simplify","*rf-simplify*","emmy.simplify/*rf-simplify*",-1340102255,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"emmy.simplify","emmy.simplify",-490367714,null),new cljs.core.Symbol(null,"*rf-simplify*","*rf-simplify*",-1292516740,null),"emmy/simplify.cljc",29,1,true,47,47,cljs.core.List.EMPTY,null,(cljs.core.truth_(emmy.simplify._STAR_rf_simplify_STAR_)?emmy.simplify._STAR_rf_simplify_STAR_.cljs$lang$test:null)])));
var sincos_flush_ones_39179 = emmy.simplify.rules.sincos_flush_ones(new cljs.core.Var(function(){return emmy.simplify._STAR_rf_simplify_STAR_;},new cljs.core.Symbol("emmy.simplify","*rf-simplify*","emmy.simplify/*rf-simplify*",-1340102255,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"emmy.simplify","emmy.simplify",-490367714,null),new cljs.core.Symbol(null,"*rf-simplify*","*rf-simplify*",-1292516740,null),"emmy/simplify.cljc",29,1,true,47,47,cljs.core.List.EMPTY,null,(cljs.core.truth_(emmy.simplify._STAR_rf_simplify_STAR_)?emmy.simplify._STAR_rf_simplify_STAR_.cljs$lang$test:null)])));
/**
 * Simplifies an expression representing a complex number. TODO say more!
 */
emmy.simplify.simplify_expression = (function emmy$simplify$simplify_expression(expr){
var syms = emmy.expression.variables_in(expr);
var sqrt_QMARK_ = emmy.simplify.rules.occurs_in_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),null], null), null),syms);
var full_sqrt_QMARK_ = (function (){var and__5160__auto__ = emmy.simplify.rules._STAR_sqrt_factor_simplify_QMARK__STAR_;
if(cljs.core.truth_(and__5160__auto__)){
return emmy.simplify.rules.occurs_in_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),null], null), null),syms);
} else {
return and__5160__auto__;
}
})();
var logexp_QMARK_ = emmy.simplify.rules.occurs_in_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"log","log",45015523,null),null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),null], null), null),syms);
var trig_QMARK_ = emmy.simplify.rules.occurs_in_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),null,new cljs.core.Symbol(null,"sec","sec",60154974,null),null,new cljs.core.Symbol(null,"cot","cot",-1635649012,null),null,new cljs.core.Symbol(null,"csc","csc",-427853492,null),null], null), null),syms);
var partials_QMARK_ = emmy.simplify.rules.occurs_in_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"partial","partial",1881673272,null),null], null), null),syms);
var simple = cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(emmy.simplify.only_if(emmy.simplify.rules._STAR_divide_numbers_through_simplify_QMARK__STAR_,emmy.simplify.rules.divide_numbers_through),emmy.simplify.only_if(sqrt_QMARK_,emmy.simplify.clear_square_roots_of_perfect_squares),emmy.simplify.only_if(full_sqrt_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(emmy.simplify.simplify_until_stable(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(universal_reductions_39174,sqrt_expand_39176),emmy.simplify.simplify_and_flatten),emmy.simplify.clear_square_roots_of_perfect_squares,emmy.simplify.simplify_until_stable(sqrt_contract_39175,emmy.simplify.simplify_and_flatten))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.simplify.only_if(trig_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(emmy.simplify.simplify_and_canonicalize(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(universal_reductions_39174,emmy.simplify.rules.sincos__GT_trig),emmy.simplify.simplify_and_flatten),emmy.simplify.simplify_and_canonicalize(emmy.simplify.rules.complex_trig,emmy.simplify.simplify_and_flatten),emmy.simplify.simplify_and_canonicalize(emmy.simplify.rules.angular_parity,emmy.simplify.simplify_and_flatten),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.simplify.simplify_until_stable(sincos_random_39178,emmy.simplify.simplify_and_flatten),emmy.simplify.simplify_and_canonicalize(emmy.simplify.rules.sin_sq__GT_cos_sq,emmy.simplify.simplify_and_flatten),emmy.simplify.simplify_and_canonicalize(sincos_flush_ones_39179,emmy.simplify.simplify_and_flatten),emmy.simplify.only_if(emmy.simplify.rules._STAR_trig_product_to_sum_simplify_QMARK__STAR_,emmy.simplify.simplify_and_canonicalize(emmy.simplify.rules.trig_COLON_product__GT_sum,emmy.simplify.simplify_and_flatten)),emmy.simplify.simplify_and_canonicalize(universal_reductions_39174,emmy.simplify.simplify_and_flatten),emmy.simplify.simplify_until_stable(sincos_random_39178,emmy.simplify.simplify_and_flatten),emmy.simplify.simplify_and_canonicalize(emmy.simplify.rules.sin_sq__GT_cos_sq,emmy.simplify.simplify_and_flatten),emmy.simplify.simplify_and_canonicalize(sincos_flush_ones_39179,emmy.simplify.simplify_and_flatten)], 0))),emmy.simplify.only_if(logexp_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(emmy.simplify.simplify_and_canonicalize(universal_reductions_39174,emmy.simplify.simplify_and_flatten),emmy.simplify.simplify_until_stable(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(emmy.simplify.rules.log_expand,emmy.simplify.rules.exp_expand),emmy.simplify.simplify_and_flatten),emmy.simplify.simplify_until_stable(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(log_contract_39177,emmy.simplify.rules.exp_contract),emmy.simplify.simplify_and_flatten))),emmy.simplify.simplify_until_stable(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(universal_reductions_39174,emmy.simplify.only_if(logexp_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(emmy.simplify.rules.log_expand,emmy.simplify.rules.exp_expand)),emmy.simplify.only_if(sqrt_QMARK_,sqrt_expand_39176)),emmy.simplify.simplify_and_flatten),emmy.simplify.only_if(trig_QMARK_,emmy.simplify.simplify_and_canonicalize(emmy.simplify.rules.angular_parity,emmy.simplify.simplify_and_flatten)),emmy.simplify.simplify_and_canonicalize(emmy.simplify.rules.trig__GT_sincos,emmy.simplify.simplify_and_flatten),emmy.simplify.only_if(partials_QMARK_,emmy.simplify.simplify_and_canonicalize(emmy.simplify.rules.canonicalize_partials,emmy.simplify.simplify_and_flatten)),emmy.simplify.simplify_and_flatten], 0));
return simple(expr);
});

//# sourceMappingURL=emmy.simplify.js.map
