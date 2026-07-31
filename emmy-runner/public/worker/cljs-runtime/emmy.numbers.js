import "./cljs_env.js";
import "./cljs.core.js";
import "./emmy.ratio.js";
import "./emmy.complex.js";
import "./emmy.euclid.js";
import "./emmy.generic.js";
import "./emmy.util.js";
import "./emmy.value.js";
import "./goog.math.long.js";
import "./goog.math.integer.js";
goog.provide('emmy.numbers');
goog.scope(function(){
  emmy.numbers.goog$module$goog$math$Long = goog.module.get('goog.math.Long');
});
emmy.numbers.boolean_type = Boolean;
emmy.generic.zero_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.numbers.boolean_type], null),(function (b){
return cljs.core.not(b);
}));
emmy.generic.one_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.numbers.boolean_type], null),(function (b){
return b;
}));
emmy.generic.identity_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.numbers.boolean_type], null),(function (b){
return b;
}));
emmy.generic.zero_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.numbers.boolean_type], null),(function (_){
return false;
}));
emmy.generic.one_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.numbers.boolean_type], null),(function (_){
return true;
}));
emmy.generic.identity_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.numbers.boolean_type], null),(function (_){
return true;
}));
emmy.generic.zero_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","floating-point","emmy.value/floating-point",919866091)], null),(function (_){
return 0.0;
}));
emmy.generic.one_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","floating-point","emmy.value/floating-point",919866091)], null),(function (_){
return 1.0;
}));
emmy.generic.identity_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","floating-point","emmy.value/floating-point",919866091)], null),(function (_){
return 1.0;
}));
emmy.generic.zero_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (a){
return (a === (0));
}));
emmy.generic.one_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (a){
return ((1) === a);
}));
emmy.generic.identity_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (a){
return ((1) === a);
}));
emmy.generic.zero_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (_){
return (0);
}));
emmy.generic.one_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (_){
return (1);
}));
emmy.generic.identity_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (_){
return (1);
}));
emmy.generic.exact_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786)], null),(function (_){
return true;
}));
emmy.generic.exact_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","floating-point","emmy.value/floating-point",919866091)], null),(function (_){
return false;
}));
emmy.generic.freeze.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (a){
return a;
}));
emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404),new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (a,b){
return (a + b);
}));
emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404),new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (a,b){
return (a * b);
}));
emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404),new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (a,b){
return (a - b);
}));
emmy.generic.negate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (a){
return (- a);
}));
emmy.generic.negative_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (a){
return (a < (0));
}));
emmy.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404),new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (b,x){
if((((b < (0))) && ((!((emmy.generic.fractional_part.cljs$core$IFn$_invoke$arity$1(x) === (0))))))){
return emmy.generic.exp.cljs$core$IFn$_invoke$arity$1(emmy.generic.mul.cljs$core$IFn$_invoke$arity$2(x,emmy.generic.log.cljs$core$IFn$_invoke$arity$1(b)));
} else {
return (emmy.util.compute_expt.cljs$core$IFn$_invoke$arity$2 ? emmy.util.compute_expt.cljs$core$IFn$_invoke$arity$2(b,x) : emmy.util.compute_expt.call(null,b,x));
}
}));
emmy.generic.abs.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (a){
return (emmy.util.compute_abs.cljs$core$IFn$_invoke$arity$1 ? emmy.util.compute_abs.cljs$core$IFn$_invoke$arity$1(a) : emmy.util.compute_abs.call(null,a));
}));
emmy.generic.magnitude.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (a){
return (emmy.util.compute_abs.cljs$core$IFn$_invoke$arity$1 ? emmy.util.compute_abs.cljs$core$IFn$_invoke$arity$1(a) : emmy.util.compute_abs.call(null,a));
}));
emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404),new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (a,b){
return (a / b);
}));
emmy.generic.invert.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (a){
return ((1) / a);
}));
emmy.generic.floor.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (a){
return cljs.core.long$(Math.floor(a));
}));
emmy.generic.ceiling.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (a){
return cljs.core.long$(Math.ceil(a));
}));
emmy.generic.integer_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (a){
return Math.trunc(a);
}));
emmy.generic.infinite_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786)], null),(function (_){
return false;
}));
emmy.generic.infinite_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (a){
return cljs.core.infinite_QMARK_(a);
}));
emmy.generic.real_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (a){
return a;
}));
emmy.generic.imag_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (_){
return (0);
}));
emmy.generic.angle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (a){
if((a < (0))){
return Math.PI;
} else {
return emmy.generic.zero_like.cljs$core$IFn$_invoke$arity$1(a);
}
}));
emmy.generic.conjugate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (a){
return a;
}));
emmy.generic.sinc.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (a){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(a))){
return (1);
} else {
if(cljs.core.truth_(emmy.generic.infinite_QMARK_.cljs$core$IFn$_invoke$arity$1(a))){
return (0);
} else {
return emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(a),a);

}
}
}));
emmy.generic.sin.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (a){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(a))){
return (0);
} else {
return Math.sin(a);
}
}));
emmy.generic.cos.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (a){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(a))){
return (1);
} else {
return Math.cos(a);
}
}));
emmy.generic.tan.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (a){
return Math.tan(a);
}));
emmy.generic.cosh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (a){
return Math.cosh(a);
}));
emmy.generic.sinh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (a){
return Math.sinh(a);
}));
emmy.generic.tanh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (a){
return Math.tanh(a);
}));
emmy.generic.atan.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (a){
return Math.atan(a);
}));
emmy.generic.atan.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404),new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (a,b){
return Math.atan2(a,b);
}));
emmy.generic.asin.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (a){
if((emmy.generic.abs.cljs$core$IFn$_invoke$arity$1(a) > (1))){
return emmy.generic.asin.cljs$core$IFn$_invoke$arity$1(emmy.complex.complex.cljs$core$IFn$_invoke$arity$1(a));
} else {
return Math.asin(a);
}
}));
emmy.generic.acos.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (a){
if((emmy.generic.abs.cljs$core$IFn$_invoke$arity$1(a) > (1))){
return emmy.generic.acos.cljs$core$IFn$_invoke$arity$1(emmy.complex.complex.cljs$core$IFn$_invoke$arity$1(a));
} else {
return Math.acos(a);
}
}));
emmy.generic.acosh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (a){
if((a >= (1))){
return Math.acosh(a);
} else {
return emmy.generic.acosh.cljs$core$IFn$_invoke$arity$1(emmy.complex.complex.cljs$core$IFn$_invoke$arity$1(a));
}
}));

emmy.generic.asinh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (a){
if((a >= (1))){
return Math.asinh(a);
} else {
return emmy.generic.asinh.cljs$core$IFn$_invoke$arity$1(emmy.complex.complex.cljs$core$IFn$_invoke$arity$1(a));
}
}));

emmy.generic.atanh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (a){
if((emmy.generic.abs.cljs$core$IFn$_invoke$arity$1(a) >= (1))){
return emmy.generic.atanh.cljs$core$IFn$_invoke$arity$1(emmy.complex.complex.cljs$core$IFn$_invoke$arity$1(a));
} else {
return Math.atanh(a);
}
}));
emmy.generic.sqrt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (a){
if((a < (0))){
return emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.complex.complex.cljs$core$IFn$_invoke$arity$1(a));
} else {
return (emmy.util.compute_sqrt.cljs$core$IFn$_invoke$arity$1 ? emmy.util.compute_sqrt.cljs$core$IFn$_invoke$arity$1(a) : emmy.util.compute_sqrt.call(null,a));
}
}));
emmy.generic.log.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (a){
if((a < (0))){
return emmy.generic.log.cljs$core$IFn$_invoke$arity$1(emmy.complex.complex.cljs$core$IFn$_invoke$arity$1(a));
} else {
return Math.log(a);
}
}));
emmy.generic.log10.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [Number], null),(function (x){
if((x < (0))){
return emmy.generic.log10.cljs$core$IFn$_invoke$arity$1(emmy.complex.complex.cljs$core$IFn$_invoke$arity$1(x));
} else {
return Math.log10(x);
}
}));
emmy.generic.log2.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [Number], null),(function (x){
if((x < (0))){
return emmy.generic.log2.cljs$core$IFn$_invoke$arity$1(emmy.complex.complex.cljs$core$IFn$_invoke$arity$1(x));
} else {
return Math.log2(x);
}
}));
emmy.generic.exp.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (a){
if((a === (0))){
return (1);
} else {
return Math.exp(a);
}
}));
/**
 * Minimum effort division. If `b` and `a` are equal or of opposite sign,
 *   returns 1 or -1 respectively. If `a` is 1 or -1, returns `b` or `-b`
 *   respectively. Else, returns nil.
 */
emmy.numbers.careful_divide = (function emmy$numbers$careful_divide(b,a){
if(cljs.core.truth_(emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(a,b))){
return emmy.generic.one_like.cljs$core$IFn$_invoke$arity$1(a);
} else {
if(cljs.core.truth_(emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(a,emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(b)))){
return emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(emmy.generic.one_like.cljs$core$IFn$_invoke$arity$1(a));
} else {
if(cljs.core.truth_(emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(a))){
return b;
} else {
if(cljs.core.truth_(emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(a)))){
return emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(b);
} else {
return null;

}
}
}
}
});
emmy.generic.exact_divide.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514),new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (b,a){
var or__5162__auto__ = emmy.numbers.careful_divide(b,a);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.util.illegal((""+"exact-divide not allowed between: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)+", "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)));
}
}));
emmy.generic.quotient.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514),new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (b,a){
var or__5162__auto__ = emmy.numbers.careful_divide(b,a);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.util.illegal((""+"quotient not allowed between: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)+", "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)));
}
}));
/**
 * Checked implementation of g/exact-divide general enough to use for any type
 *   that defines g/remainder and g/quotient.
 */
emmy.numbers.exact_divide = (function emmy$numbers$exact_divide(a,b){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(emmy.generic.remainder.cljs$core$IFn$_invoke$arity$2(a,b)))){
} else {
throw (new Error("Assert failed: (g/zero? (g/remainder a b))"));
}

return emmy.generic.quotient.cljs$core$IFn$_invoke$arity$2(a,b);
});
emmy.generic.exact_divide.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786),new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786)], null),(function (b,a){
return emmy.numbers.exact_divide(b,a);
}));
emmy.generic.integer_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786)], null),(function (a){
return a;
}));
emmy.generic.fractional_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786)], null),(function (_){
return (0);
}));
emmy.generic.floor.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786)], null),(function (a){
return a;
}));
emmy.generic.ceiling.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786)], null),(function (a){
return a;
}));
emmy.generic.quotient.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","native-integral","emmy.value/native-integral",-1286161061),new cljs.core.Keyword("emmy.value","native-integral","emmy.value/native-integral",-1286161061)], null),(function (a,b){
return cljs.core.quot(a,b);
}));
emmy.generic.remainder.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404),new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (a,b){
return cljs.core.rem(a,b);
}));
emmy.generic.modulo.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404),new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (a,b){
return cljs.core.mod(a,b);
}));
var abs = (function emmy$numbers$abs(a){
if((a < (0))){
return (- a);
} else {
return a;
}
});
var bigint_gcd = (function emmy$numbers$bigint_gcd(a,b){
var a__$1 = abs(a);
var b__$1 = abs(b);
while(true){
if((b__$1 == (0))){
return a__$1;
} else {
var G__66839 = b__$1;
var G__66840 = (a__$1 % b__$1);
a__$1 = G__66839;
b__$1 = G__66840;
continue;
}
break;
}
});
emmy.generic.gcd.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","native-integral","emmy.value/native-integral",-1286161061),new cljs.core.Keyword("emmy.value","native-integral","emmy.value/native-integral",-1286161061)], null),(function (a,b){
var a__$1 = abs(a);
var b__$1 = abs(b);
while(true){
if((b__$1 === (0))){
return a__$1;
} else {
var G__66841 = b__$1;
var G__66842 = cljs.core.rem(a__$1,b__$1);
a__$1 = G__66841;
b__$1 = G__66842;
continue;
}
break;
}
}));

emmy.generic.gcd.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt,BigInt], null),(function (a,b){
return bigint_gcd(a,b);
}));

emmy.generic.gcd.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","native-integral","emmy.value/native-integral",-1286161061),BigInt], null),(function (a,b){
return bigint_gcd(BigInt(a),b);
}));

emmy.generic.gcd.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt,new cljs.core.Keyword("emmy.value","native-integral","emmy.value/native-integral",-1286161061)], null),(function (a,b){
return bigint_gcd(a,BigInt(b));
}));

emmy.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","native-integral","emmy.value/native-integral",-1286161061),new cljs.core.Keyword("emmy.value","native-integral","emmy.value/native-integral",-1286161061)], null),(function (a,b){
if((b < (0))){
return emmy.generic.invert.cljs$core$IFn$_invoke$arity$1((function (){var G__66611 = a;
var G__66612 = (- b);
return (emmy.util.compute_expt.cljs$core$IFn$_invoke$arity$2 ? emmy.util.compute_expt.cljs$core$IFn$_invoke$arity$2(G__66611,G__66612) : emmy.util.compute_expt.call(null,G__66611,G__66612));
})());
} else {
return (emmy.util.compute_expt.cljs$core$IFn$_invoke$arity$2 ? emmy.util.compute_expt.cljs$core$IFn$_invoke$arity$2(a,b) : emmy.util.compute_expt.call(null,a,b));
}
}));

emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786),new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786)], null),(function (a,b){
var rem = emmy.generic.remainder.cljs$core$IFn$_invoke$arity$2(a,b);
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(rem))){
return emmy.generic.quotient.cljs$core$IFn$_invoke$arity$2(a,b);
} else {
return emmy.ratio.rationalize.cljs$core$IFn$_invoke$arity$2(a,b);
}
}));

emmy.generic.invert.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786)], null),(function (a){
if(cljs.core.truth_(emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(a))){
return a;
} else {
return emmy.ratio.rationalize.cljs$core$IFn$_invoke$arity$2((1),a);
}
}));
var big_zero_66843 = BigInt((0));
var big_one_66844 = BigInt((1));
emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt,BigInt], null),(function (a,b){
return (a + b);
}));

emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt,BigInt], null),(function (a,b){
return (a * b);
}));

emmy.generic.modulo.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt,BigInt], null),(function (a,b){
return emmy.generic.modulo_default(a,b);
}));

emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt,BigInt], null),(function (a,b){
return (a - b);
}));

emmy.generic.negate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt], null),(function (a){
return (- a);
}));

emmy.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt,BigInt], null),(function (a,b){
if(cljs.core.truth_(emmy.generic.negative_QMARK_.cljs$core$IFn$_invoke$arity$1(b))){
return emmy.generic.invert.cljs$core$IFn$_invoke$arity$1(a ** (- b));
} else {
return a ** b;
}
}));

emmy.generic.zero_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt], null),(function (a){
return (big_zero_66843 == a);
}));

emmy.generic.one_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt], null),(function (a){
return (big_one_66844 == a);
}));

emmy.generic.identity_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt], null),(function (a){
return (big_one_66844 == a);
}));

emmy.generic.zero_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt], null),(function (_){
return big_zero_66843;
}));

emmy.generic.one_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt], null),(function (_){
return big_one_66844;
}));

emmy.generic.identity_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt], null),(function (_){
return big_one_66844;
}));

emmy.generic.exact_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt], null),(function (_){
return true;
}));

emmy.generic.abs.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt], null),(function (a){
if((a < (0))){
return (- a);
} else {
return a;
}
}));

emmy.generic.quotient.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt,BigInt], null),(function (a,b){
return (a / b);
}));

emmy.generic.remainder.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt,BigInt], null),(function (a,b){
return (a % b);
}));

emmy.generic.magnitude.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt], null),(function (a){
if((a < (0))){
return (- a);
} else {
return a;
}
}));

emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt,BigInt], null),(function (a,b){
var rem = (a % b);
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(rem))){
return (a / b);
} else {
return emmy.ratio.rationalize.cljs$core$IFn$_invoke$arity$2(a,b);
}
}));

var seq__66617_66845 = cljs.core.seq(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.generic.add,emmy.generic.mul,emmy.generic.sub,emmy.generic.div,emmy.generic.expt,emmy.generic.modulo,emmy.generic.remainder,emmy.generic.quotient], null));
var chunk__66618_66846 = null;
var count__66619_66847 = (0);
var i__66620_66848 = (0);
while(true){
if((i__66620_66848 < count__66619_66847)){
var op_66850 = chunk__66618_66846.cljs$core$IIndexed$_nth$arity$2(null,i__66620_66848);
op_66850.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt,new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786)], null),((function (seq__66617_66845,chunk__66618_66846,count__66619_66847,i__66620_66848,op_66850,big_zero_66843,big_one_66844){
return (function (a,b){
var G__66640 = a;
var G__66641 = BigInt(b);
return (op_66850.cljs$core$IFn$_invoke$arity$2 ? op_66850.cljs$core$IFn$_invoke$arity$2(G__66640,G__66641) : op_66850.call(null,G__66640,G__66641));
});})(seq__66617_66845,chunk__66618_66846,count__66619_66847,i__66620_66848,op_66850,big_zero_66843,big_one_66844))
);

op_66850.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786),BigInt], null),((function (seq__66617_66845,chunk__66618_66846,count__66619_66847,i__66620_66848,op_66850,big_zero_66843,big_one_66844){
return (function (a,b){
var G__66642 = BigInt(a);
var G__66643 = b;
return (op_66850.cljs$core$IFn$_invoke$arity$2 ? op_66850.cljs$core$IFn$_invoke$arity$2(G__66642,G__66643) : op_66850.call(null,G__66642,G__66643));
});})(seq__66617_66845,chunk__66618_66846,count__66619_66847,i__66620_66848,op_66850,big_zero_66843,big_one_66844))
);

op_66850.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt,new cljs.core.Keyword("emmy.value","floating-point","emmy.value/floating-point",919866091)], null),((function (seq__66617_66845,chunk__66618_66846,count__66619_66847,i__66620_66848,op_66850,big_zero_66843,big_one_66844){
return (function (a,b){
var G__66644 = Number(a);
var G__66645 = b;
return (op_66850.cljs$core$IFn$_invoke$arity$2 ? op_66850.cljs$core$IFn$_invoke$arity$2(G__66644,G__66645) : op_66850.call(null,G__66644,G__66645));
});})(seq__66617_66845,chunk__66618_66846,count__66619_66847,i__66620_66848,op_66850,big_zero_66843,big_one_66844))
);

op_66850.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","floating-point","emmy.value/floating-point",919866091),BigInt], null),((function (seq__66617_66845,chunk__66618_66846,count__66619_66847,i__66620_66848,op_66850,big_zero_66843,big_one_66844){
return (function (a,b){
var G__66646 = a;
var G__66647 = Number(b);
return (op_66850.cljs$core$IFn$_invoke$arity$2 ? op_66850.cljs$core$IFn$_invoke$arity$2(G__66646,G__66647) : op_66850.call(null,G__66646,G__66647));
});})(seq__66617_66845,chunk__66618_66846,count__66619_66847,i__66620_66848,op_66850,big_zero_66843,big_one_66844))
);


var G__66853 = seq__66617_66845;
var G__66854 = chunk__66618_66846;
var G__66855 = count__66619_66847;
var G__66856 = (i__66620_66848 + (1));
seq__66617_66845 = G__66853;
chunk__66618_66846 = G__66854;
count__66619_66847 = G__66855;
i__66620_66848 = G__66856;
continue;
} else {
var temp__5825__auto___66858 = cljs.core.seq(seq__66617_66845);
if(temp__5825__auto___66858){
var seq__66617_66859__$1 = temp__5825__auto___66858;
if(cljs.core.chunked_seq_QMARK_(seq__66617_66859__$1)){
var c__5694__auto___66860 = cljs.core.chunk_first(seq__66617_66859__$1);
var G__66861 = cljs.core.chunk_rest(seq__66617_66859__$1);
var G__66862 = c__5694__auto___66860;
var G__66863 = cljs.core.count(c__5694__auto___66860);
var G__66864 = (0);
seq__66617_66845 = G__66861;
chunk__66618_66846 = G__66862;
count__66619_66847 = G__66863;
i__66620_66848 = G__66864;
continue;
} else {
var op_66865 = cljs.core.first(seq__66617_66859__$1);
op_66865.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt,new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786)], null),((function (seq__66617_66845,chunk__66618_66846,count__66619_66847,i__66620_66848,op_66865,seq__66617_66859__$1,temp__5825__auto___66858,big_zero_66843,big_one_66844){
return (function (a,b){
var G__66651 = a;
var G__66652 = BigInt(b);
return (op_66865.cljs$core$IFn$_invoke$arity$2 ? op_66865.cljs$core$IFn$_invoke$arity$2(G__66651,G__66652) : op_66865.call(null,G__66651,G__66652));
});})(seq__66617_66845,chunk__66618_66846,count__66619_66847,i__66620_66848,op_66865,seq__66617_66859__$1,temp__5825__auto___66858,big_zero_66843,big_one_66844))
);

op_66865.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786),BigInt], null),((function (seq__66617_66845,chunk__66618_66846,count__66619_66847,i__66620_66848,op_66865,seq__66617_66859__$1,temp__5825__auto___66858,big_zero_66843,big_one_66844){
return (function (a,b){
var G__66653 = BigInt(a);
var G__66654 = b;
return (op_66865.cljs$core$IFn$_invoke$arity$2 ? op_66865.cljs$core$IFn$_invoke$arity$2(G__66653,G__66654) : op_66865.call(null,G__66653,G__66654));
});})(seq__66617_66845,chunk__66618_66846,count__66619_66847,i__66620_66848,op_66865,seq__66617_66859__$1,temp__5825__auto___66858,big_zero_66843,big_one_66844))
);

op_66865.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt,new cljs.core.Keyword("emmy.value","floating-point","emmy.value/floating-point",919866091)], null),((function (seq__66617_66845,chunk__66618_66846,count__66619_66847,i__66620_66848,op_66865,seq__66617_66859__$1,temp__5825__auto___66858,big_zero_66843,big_one_66844){
return (function (a,b){
var G__66655 = Number(a);
var G__66656 = b;
return (op_66865.cljs$core$IFn$_invoke$arity$2 ? op_66865.cljs$core$IFn$_invoke$arity$2(G__66655,G__66656) : op_66865.call(null,G__66655,G__66656));
});})(seq__66617_66845,chunk__66618_66846,count__66619_66847,i__66620_66848,op_66865,seq__66617_66859__$1,temp__5825__auto___66858,big_zero_66843,big_one_66844))
);

op_66865.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","floating-point","emmy.value/floating-point",919866091),BigInt], null),((function (seq__66617_66845,chunk__66618_66846,count__66619_66847,i__66620_66848,op_66865,seq__66617_66859__$1,temp__5825__auto___66858,big_zero_66843,big_one_66844){
return (function (a,b){
var G__66657 = a;
var G__66658 = Number(b);
return (op_66865.cljs$core$IFn$_invoke$arity$2 ? op_66865.cljs$core$IFn$_invoke$arity$2(G__66657,G__66658) : op_66865.call(null,G__66657,G__66658));
});})(seq__66617_66845,chunk__66618_66846,count__66619_66847,i__66620_66848,op_66865,seq__66617_66859__$1,temp__5825__auto___66858,big_zero_66843,big_one_66844))
);


var G__66866 = cljs.core.next(seq__66617_66859__$1);
var G__66867 = null;
var G__66868 = (0);
var G__66869 = (0);
seq__66617_66845 = G__66866;
chunk__66618_66846 = G__66867;
count__66619_66847 = G__66868;
i__66620_66848 = G__66869;
continue;
}
} else {
}
}
break;
}

var seq__66659_66870 = cljs.core.seq(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.generic.cos,emmy.generic.sin,emmy.generic.tan,emmy.generic.asin,emmy.generic.acos,emmy.generic.atan,emmy.generic.cosh,emmy.generic.sinh,emmy.generic.tanh,emmy.generic.asinh,emmy.generic.acosh,emmy.generic.acosh,emmy.generic.cot,emmy.generic.sec,emmy.generic.csc,emmy.generic.sech,emmy.generic.csch,emmy.generic.log,emmy.generic.exp,emmy.generic.sqrt], null));
var chunk__66660_66871 = null;
var count__66661_66872 = (0);
var i__66662_66873 = (0);
while(true){
if((i__66662_66873 < count__66661_66872)){
var op_66875 = chunk__66660_66871.cljs$core$IIndexed$_nth$arity$2(null,i__66662_66873);
op_66875.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt], null),((function (seq__66659_66870,chunk__66660_66871,count__66661_66872,i__66662_66873,op_66875,big_zero_66843,big_one_66844){
return (function (a){
var G__66665 = Number(a);
return (op_66875.cljs$core$IFn$_invoke$arity$1 ? op_66875.cljs$core$IFn$_invoke$arity$1(G__66665) : op_66875.call(null,G__66665));
});})(seq__66659_66870,chunk__66660_66871,count__66661_66872,i__66662_66873,op_66875,big_zero_66843,big_one_66844))
);


var G__66879 = seq__66659_66870;
var G__66880 = chunk__66660_66871;
var G__66881 = count__66661_66872;
var G__66882 = (i__66662_66873 + (1));
seq__66659_66870 = G__66879;
chunk__66660_66871 = G__66880;
count__66661_66872 = G__66881;
i__66662_66873 = G__66882;
continue;
} else {
var temp__5825__auto___66883 = cljs.core.seq(seq__66659_66870);
if(temp__5825__auto___66883){
var seq__66659_66886__$1 = temp__5825__auto___66883;
if(cljs.core.chunked_seq_QMARK_(seq__66659_66886__$1)){
var c__5694__auto___66887 = cljs.core.chunk_first(seq__66659_66886__$1);
var G__66888 = cljs.core.chunk_rest(seq__66659_66886__$1);
var G__66889 = c__5694__auto___66887;
var G__66890 = cljs.core.count(c__5694__auto___66887);
var G__66891 = (0);
seq__66659_66870 = G__66888;
chunk__66660_66871 = G__66889;
count__66661_66872 = G__66890;
i__66662_66873 = G__66891;
continue;
} else {
var op_66892 = cljs.core.first(seq__66659_66886__$1);
op_66892.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt], null),((function (seq__66659_66870,chunk__66660_66871,count__66661_66872,i__66662_66873,op_66892,seq__66659_66886__$1,temp__5825__auto___66883,big_zero_66843,big_one_66844){
return (function (a){
var G__66670 = Number(a);
return (op_66892.cljs$core$IFn$_invoke$arity$1 ? op_66892.cljs$core$IFn$_invoke$arity$1(G__66670) : op_66892.call(null,G__66670));
});})(seq__66659_66870,chunk__66660_66871,count__66661_66872,i__66662_66873,op_66892,seq__66659_66886__$1,temp__5825__auto___66883,big_zero_66843,big_one_66844))
);


var G__66893 = cljs.core.next(seq__66659_66886__$1);
var G__66894 = null;
var G__66895 = (0);
var G__66896 = (0);
seq__66659_66870 = G__66893;
chunk__66660_66871 = G__66894;
count__66661_66872 = G__66895;
i__66662_66873 = G__66896;
continue;
}
} else {
}
}
break;
}

emmy.generic.atan.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt,new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (l,r){
return emmy.generic.atan.cljs$core$IFn$_invoke$arity$2(Number(l),r);
}));

emmy.generic.atan.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404),BigInt], null),(function (l,r){
return emmy.generic.atan.cljs$core$IFn$_invoke$arity$2(l,Number(r));
}));

emmy.generic.atan.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt,BigInt], null),(function (l,r){
return emmy.generic.atan.cljs$core$IFn$_invoke$arity$2(Number(l),Number(r));
}));

emmy.generic.exact_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt], null),(function (_){
return true;
}));

emmy.generic.freeze.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt], null),(function (x){
if((emmy.generic.abs.cljs$core$IFn$_invoke$arity$1(x) < Number.MAX_SAFE_INTEGER)){
return Number(x);
} else {
return x;
}
}));

emmy.generic.zero_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer], null),(function (x){
return x.isZero();
}));

emmy.generic.one_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer], null),(function (x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.math.Integer.ONE,x);
}));

emmy.generic.identity_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer], null),(function (x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.math.Integer.ONE,x);
}));

emmy.generic.zero_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer], null),(function (_){
return goog.math.Integer.ZERO;
}));

emmy.generic.one_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer], null),(function (_){
return goog.math.Integer.ONE;
}));

emmy.generic.identity_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer], null),(function (_){
return goog.math.Integer.ONE;
}));

emmy.generic.exact_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer], null),(function (_){
return true;
}));

emmy.generic.freeze.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer], null),(function (x){
return x;
}));

emmy.generic.zero_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.numbers.goog$module$goog$math$Long], null),(function (x){
return x.isZero();
}));

emmy.generic.one_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.numbers.goog$module$goog$math$Long], null),(function (x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.numbers.goog$module$goog$math$Long.getOne(),x);
}));

emmy.generic.identity_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.numbers.goog$module$goog$math$Long], null),(function (x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.numbers.goog$module$goog$math$Long.getOne(),x);
}));

emmy.generic.zero_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.numbers.goog$module$goog$math$Long], null),(function (_){
return emmy.numbers.goog$module$goog$math$Long.getZero();
}));

emmy.generic.one_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.numbers.goog$module$goog$math$Long], null),(function (_){
return emmy.numbers.goog$module$goog$math$Long.getOne();
}));

emmy.generic.identity_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.numbers.goog$module$goog$math$Long], null),(function (_){
return emmy.numbers.goog$module$goog$math$Long.getOne();
}));

emmy.generic.exact_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.numbers.goog$module$goog$math$Long], null),(function (_){
return true;
}));

emmy.generic.freeze.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.numbers.goog$module$goog$math$Long], null),(function (x){
return x;
}));

emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.numbers.goog$module$goog$math$Long,emmy.numbers.goog$module$goog$math$Long], null),(function (a,b){
return a.add(b);
}));

emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.numbers.goog$module$goog$math$Long,emmy.numbers.goog$module$goog$math$Long], null),(function (a,b){
return a.multiply(b);
}));

emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.numbers.goog$module$goog$math$Long,emmy.numbers.goog$module$goog$math$Long], null),(function (a,b){
return a.subtract(b);
}));

emmy.generic.negate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.numbers.goog$module$goog$math$Long], null),(function (a){
return a.negate();
}));

emmy.generic.abs.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.numbers.goog$module$goog$math$Long], null),(function (a){
if(cljs.core.truth_(a.isNegative())){
return a.negate();
} else {
return a;
}
}));

emmy.generic.remainder.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.numbers.goog$module$goog$math$Long,emmy.numbers.goog$module$goog$math$Long], null),(function (a,b){
return a.modulo(b);
}));

emmy.generic.magnitude.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.numbers.goog$module$goog$math$Long], null),(function (a){
if(cljs.core.truth_(a.isNegative())){
return a.negate();
} else {
return a;
}
}));

var long_expt = (function emmy$numbers$long_expt(base,pow){
var n = pow;
var y = emmy.numbers.goog$module$goog$math$Long.getOne();
var z = base;
while(true){
var t = cljs.core.not(n.isOdd());
var n__$1 = n.shiftRight((1));
if(t){
var G__66910 = n__$1;
var G__66911 = y;
var G__66912 = z.multiply(z);
n = G__66910;
y = G__66911;
z = G__66912;
continue;
} else {
if(cljs.core.truth_(n__$1.isZero())){
return z.multiply(y);
} else {
var G__66913 = n__$1;
var G__66914 = z.multiply(y);
var G__66915 = z.multiply(z);
n = G__66913;
y = G__66914;
z = G__66915;
continue;

}
}
break;
}
});
emmy.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.numbers.goog$module$goog$math$Long,emmy.numbers.goog$module$goog$math$Long], null),(function (a,b){
if(cljs.core.truth_(b.isNegative())){
return emmy.generic.invert.cljs$core$IFn$_invoke$arity$1(long_expt(a,b.negate()));
} else {
return long_expt(a,b);
}
}));

var seq__66682_66916 = cljs.core.seq(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.generic.add,emmy.generic.mul,emmy.generic.sub,emmy.generic.gcd,emmy.generic.lcm,emmy.generic.expt,emmy.generic.remainder,emmy.generic.quotient], null));
var chunk__66683_66917 = null;
var count__66684_66918 = (0);
var i__66685_66919 = (0);
while(true){
if((i__66685_66919 < count__66684_66918)){
var op_66920 = chunk__66683_66917.cljs$core$IIndexed$_nth$arity$2(null,i__66685_66919);
op_66920.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.numbers.goog$module$goog$math$Long,new cljs.core.Keyword("emmy.value","native-integral","emmy.value/native-integral",-1286161061)], null),((function (seq__66682_66916,chunk__66683_66917,count__66684_66918,i__66685_66919,op_66920,big_zero_66843,big_one_66844){
return (function (a,b){
var G__66719 = a;
var G__66720 = emmy.numbers.goog$module$goog$math$Long.fromNumber(b);
return (op_66920.cljs$core$IFn$_invoke$arity$2 ? op_66920.cljs$core$IFn$_invoke$arity$2(G__66719,G__66720) : op_66920.call(null,G__66719,G__66720));
});})(seq__66682_66916,chunk__66683_66917,count__66684_66918,i__66685_66919,op_66920,big_zero_66843,big_one_66844))
);

op_66920.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","native-integral","emmy.value/native-integral",-1286161061),emmy.numbers.goog$module$goog$math$Long], null),((function (seq__66682_66916,chunk__66683_66917,count__66684_66918,i__66685_66919,op_66920,big_zero_66843,big_one_66844){
return (function (a,b){
var G__66721 = emmy.numbers.goog$module$goog$math$Long.fromNumber(a);
var G__66722 = b;
return (op_66920.cljs$core$IFn$_invoke$arity$2 ? op_66920.cljs$core$IFn$_invoke$arity$2(G__66721,G__66722) : op_66920.call(null,G__66721,G__66722));
});})(seq__66682_66916,chunk__66683_66917,count__66684_66918,i__66685_66919,op_66920,big_zero_66843,big_one_66844))
);

op_66920.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.numbers.goog$module$goog$math$Long,new cljs.core.Keyword("emmy.value","floating-point","emmy.value/floating-point",919866091)], null),((function (seq__66682_66916,chunk__66683_66917,count__66684_66918,i__66685_66919,op_66920,big_zero_66843,big_one_66844){
return (function (a,b){
var G__66723 = Number(a);
var G__66724 = b;
return (op_66920.cljs$core$IFn$_invoke$arity$2 ? op_66920.cljs$core$IFn$_invoke$arity$2(G__66723,G__66724) : op_66920.call(null,G__66723,G__66724));
});})(seq__66682_66916,chunk__66683_66917,count__66684_66918,i__66685_66919,op_66920,big_zero_66843,big_one_66844))
);

op_66920.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","floating-point","emmy.value/floating-point",919866091),emmy.numbers.goog$module$goog$math$Long], null),((function (seq__66682_66916,chunk__66683_66917,count__66684_66918,i__66685_66919,op_66920,big_zero_66843,big_one_66844){
return (function (a,b){
var G__66725 = a;
var G__66726 = Number(b);
return (op_66920.cljs$core$IFn$_invoke$arity$2 ? op_66920.cljs$core$IFn$_invoke$arity$2(G__66725,G__66726) : op_66920.call(null,G__66725,G__66726));
});})(seq__66682_66916,chunk__66683_66917,count__66684_66918,i__66685_66919,op_66920,big_zero_66843,big_one_66844))
);


var G__66921 = seq__66682_66916;
var G__66922 = chunk__66683_66917;
var G__66923 = count__66684_66918;
var G__66924 = (i__66685_66919 + (1));
seq__66682_66916 = G__66921;
chunk__66683_66917 = G__66922;
count__66684_66918 = G__66923;
i__66685_66919 = G__66924;
continue;
} else {
var temp__5825__auto___66925 = cljs.core.seq(seq__66682_66916);
if(temp__5825__auto___66925){
var seq__66682_66926__$1 = temp__5825__auto___66925;
if(cljs.core.chunked_seq_QMARK_(seq__66682_66926__$1)){
var c__5694__auto___66927 = cljs.core.chunk_first(seq__66682_66926__$1);
var G__66928 = cljs.core.chunk_rest(seq__66682_66926__$1);
var G__66929 = c__5694__auto___66927;
var G__66930 = cljs.core.count(c__5694__auto___66927);
var G__66931 = (0);
seq__66682_66916 = G__66928;
chunk__66683_66917 = G__66929;
count__66684_66918 = G__66930;
i__66685_66919 = G__66931;
continue;
} else {
var op_66932 = cljs.core.first(seq__66682_66926__$1);
op_66932.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.numbers.goog$module$goog$math$Long,new cljs.core.Keyword("emmy.value","native-integral","emmy.value/native-integral",-1286161061)], null),((function (seq__66682_66916,chunk__66683_66917,count__66684_66918,i__66685_66919,op_66932,seq__66682_66926__$1,temp__5825__auto___66925,big_zero_66843,big_one_66844){
return (function (a,b){
var G__66727 = a;
var G__66728 = emmy.numbers.goog$module$goog$math$Long.fromNumber(b);
return (op_66932.cljs$core$IFn$_invoke$arity$2 ? op_66932.cljs$core$IFn$_invoke$arity$2(G__66727,G__66728) : op_66932.call(null,G__66727,G__66728));
});})(seq__66682_66916,chunk__66683_66917,count__66684_66918,i__66685_66919,op_66932,seq__66682_66926__$1,temp__5825__auto___66925,big_zero_66843,big_one_66844))
);

op_66932.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","native-integral","emmy.value/native-integral",-1286161061),emmy.numbers.goog$module$goog$math$Long], null),((function (seq__66682_66916,chunk__66683_66917,count__66684_66918,i__66685_66919,op_66932,seq__66682_66926__$1,temp__5825__auto___66925,big_zero_66843,big_one_66844){
return (function (a,b){
var G__66729 = emmy.numbers.goog$module$goog$math$Long.fromNumber(a);
var G__66730 = b;
return (op_66932.cljs$core$IFn$_invoke$arity$2 ? op_66932.cljs$core$IFn$_invoke$arity$2(G__66729,G__66730) : op_66932.call(null,G__66729,G__66730));
});})(seq__66682_66916,chunk__66683_66917,count__66684_66918,i__66685_66919,op_66932,seq__66682_66926__$1,temp__5825__auto___66925,big_zero_66843,big_one_66844))
);

op_66932.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.numbers.goog$module$goog$math$Long,new cljs.core.Keyword("emmy.value","floating-point","emmy.value/floating-point",919866091)], null),((function (seq__66682_66916,chunk__66683_66917,count__66684_66918,i__66685_66919,op_66932,seq__66682_66926__$1,temp__5825__auto___66925,big_zero_66843,big_one_66844){
return (function (a,b){
var G__66731 = Number(a);
var G__66732 = b;
return (op_66932.cljs$core$IFn$_invoke$arity$2 ? op_66932.cljs$core$IFn$_invoke$arity$2(G__66731,G__66732) : op_66932.call(null,G__66731,G__66732));
});})(seq__66682_66916,chunk__66683_66917,count__66684_66918,i__66685_66919,op_66932,seq__66682_66926__$1,temp__5825__auto___66925,big_zero_66843,big_one_66844))
);

op_66932.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","floating-point","emmy.value/floating-point",919866091),emmy.numbers.goog$module$goog$math$Long], null),((function (seq__66682_66916,chunk__66683_66917,count__66684_66918,i__66685_66919,op_66932,seq__66682_66926__$1,temp__5825__auto___66925,big_zero_66843,big_one_66844){
return (function (a,b){
var G__66733 = a;
var G__66734 = Number(b);
return (op_66932.cljs$core$IFn$_invoke$arity$2 ? op_66932.cljs$core$IFn$_invoke$arity$2(G__66733,G__66734) : op_66932.call(null,G__66733,G__66734));
});})(seq__66682_66916,chunk__66683_66917,count__66684_66918,i__66685_66919,op_66932,seq__66682_66926__$1,temp__5825__auto___66925,big_zero_66843,big_one_66844))
);


var G__66937 = cljs.core.next(seq__66682_66926__$1);
var G__66938 = null;
var G__66939 = (0);
var G__66940 = (0);
seq__66682_66916 = G__66937;
chunk__66683_66917 = G__66938;
count__66684_66918 = G__66939;
i__66685_66919 = G__66940;
continue;
}
} else {
}
}
break;
}

emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer,goog.math.Integer], null),(function (a,b){
return a.add(b);
}));

emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer,goog.math.Integer], null),(function (a,b){
return a.multiply(b);
}));

emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer,goog.math.Integer], null),(function (a,b){
return a.subtract(b);
}));

emmy.generic.negate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer], null),(function (a){
return a.negate();
}));

emmy.generic.abs.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer], null),(function (a){
if(cljs.core.truth_(a.isNegative())){
return a.negate();
} else {
return a;
}
}));

emmy.generic.remainder.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer,goog.math.Integer], null),(function (a,b){
return a.modulo(b);
}));

emmy.generic.magnitude.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer], null),(function (a){
if(cljs.core.truth_(a.isNegative())){
return a.negate();
} else {
return a;
}
}));

var int_expt = (function emmy$numbers$int_expt(base,pow){
var n = pow;
var y = goog.math.Integer.ONE;
var z = base;
while(true){
var t = cljs.core.not(n.isOdd());
var n__$1 = n.shiftRight((1));
if(t){
var G__66950 = n__$1;
var G__66951 = y;
var G__66952 = z.multiply(z);
n = G__66950;
y = G__66951;
z = G__66952;
continue;
} else {
if(cljs.core.truth_(n__$1.isZero())){
return z.multiply(y);
} else {
var G__66953 = n__$1;
var G__66954 = z.multiply(y);
var G__66955 = z.multiply(z);
n = G__66953;
y = G__66954;
z = G__66955;
continue;

}
}
break;
}
});
emmy.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer,goog.math.Integer], null),(function (a,b){
if(cljs.core.truth_(b.isNegative())){
return emmy.generic.invert.cljs$core$IFn$_invoke$arity$1(int_expt(a,b.negate()));
} else {
return int_expt(a,b);
}
}));

var seq__66741_66956 = cljs.core.seq(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.generic.add,emmy.generic.mul,emmy.generic.sub,emmy.generic.gcd,emmy.generic.lcm,emmy.generic.expt,emmy.generic.remainder,emmy.generic.quotient], null));
var chunk__66742_66957 = null;
var count__66743_66958 = (0);
var i__66744_66959 = (0);
while(true){
if((i__66744_66959 < count__66743_66958)){
var op_66960 = chunk__66742_66957.cljs$core$IIndexed$_nth$arity$2(null,i__66744_66959);
op_66960.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer,new cljs.core.Keyword("emmy.value","native-integral","emmy.value/native-integral",-1286161061)], null),((function (seq__66741_66956,chunk__66742_66957,count__66743_66958,i__66744_66959,op_66960,big_zero_66843,big_one_66844){
return (function (a,b){
var G__66776 = a;
var G__66777 = goog.math.Integer.fromNumber(b);
return (op_66960.cljs$core$IFn$_invoke$arity$2 ? op_66960.cljs$core$IFn$_invoke$arity$2(G__66776,G__66777) : op_66960.call(null,G__66776,G__66777));
});})(seq__66741_66956,chunk__66742_66957,count__66743_66958,i__66744_66959,op_66960,big_zero_66843,big_one_66844))
);

op_66960.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","native-integral","emmy.value/native-integral",-1286161061),goog.math.Integer], null),((function (seq__66741_66956,chunk__66742_66957,count__66743_66958,i__66744_66959,op_66960,big_zero_66843,big_one_66844){
return (function (a,b){
var G__66778 = goog.math.Integer.fromNumber(a);
var G__66779 = b;
return (op_66960.cljs$core$IFn$_invoke$arity$2 ? op_66960.cljs$core$IFn$_invoke$arity$2(G__66778,G__66779) : op_66960.call(null,G__66778,G__66779));
});})(seq__66741_66956,chunk__66742_66957,count__66743_66958,i__66744_66959,op_66960,big_zero_66843,big_one_66844))
);

op_66960.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer,new cljs.core.Keyword("emmy.value","floating-point","emmy.value/floating-point",919866091)], null),((function (seq__66741_66956,chunk__66742_66957,count__66743_66958,i__66744_66959,op_66960,big_zero_66843,big_one_66844){
return (function (a,b){
var G__66781 = Number(a);
var G__66782 = b;
return (op_66960.cljs$core$IFn$_invoke$arity$2 ? op_66960.cljs$core$IFn$_invoke$arity$2(G__66781,G__66782) : op_66960.call(null,G__66781,G__66782));
});})(seq__66741_66956,chunk__66742_66957,count__66743_66958,i__66744_66959,op_66960,big_zero_66843,big_one_66844))
);

op_66960.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","floating-point","emmy.value/floating-point",919866091),goog.math.Integer], null),((function (seq__66741_66956,chunk__66742_66957,count__66743_66958,i__66744_66959,op_66960,big_zero_66843,big_one_66844){
return (function (a,b){
var G__66783 = a;
var G__66784 = Number(b);
return (op_66960.cljs$core$IFn$_invoke$arity$2 ? op_66960.cljs$core$IFn$_invoke$arity$2(G__66783,G__66784) : op_66960.call(null,G__66783,G__66784));
});})(seq__66741_66956,chunk__66742_66957,count__66743_66958,i__66744_66959,op_66960,big_zero_66843,big_one_66844))
);

op_66960.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer,emmy.numbers.goog$module$goog$math$Long], null),((function (seq__66741_66956,chunk__66742_66957,count__66743_66958,i__66744_66959,op_66960,big_zero_66843,big_one_66844){
return (function (a,b){
var G__66785 = a;
var G__66786 = goog.math.Integer.fromNumber(b);
return (op_66960.cljs$core$IFn$_invoke$arity$2 ? op_66960.cljs$core$IFn$_invoke$arity$2(G__66785,G__66786) : op_66960.call(null,G__66785,G__66786));
});})(seq__66741_66956,chunk__66742_66957,count__66743_66958,i__66744_66959,op_66960,big_zero_66843,big_one_66844))
);

op_66960.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.numbers.goog$module$goog$math$Long,goog.math.Integer], null),((function (seq__66741_66956,chunk__66742_66957,count__66743_66958,i__66744_66959,op_66960,big_zero_66843,big_one_66844){
return (function (a,b){
var G__66791 = goog.math.Integer.fromNumber(a);
var G__66792 = b;
return (op_66960.cljs$core$IFn$_invoke$arity$2 ? op_66960.cljs$core$IFn$_invoke$arity$2(G__66791,G__66792) : op_66960.call(null,G__66791,G__66792));
});})(seq__66741_66956,chunk__66742_66957,count__66743_66958,i__66744_66959,op_66960,big_zero_66843,big_one_66844))
);


var G__66963 = seq__66741_66956;
var G__66964 = chunk__66742_66957;
var G__66965 = count__66743_66958;
var G__66966 = (i__66744_66959 + (1));
seq__66741_66956 = G__66963;
chunk__66742_66957 = G__66964;
count__66743_66958 = G__66965;
i__66744_66959 = G__66966;
continue;
} else {
var temp__5825__auto___66967 = cljs.core.seq(seq__66741_66956);
if(temp__5825__auto___66967){
var seq__66741_66968__$1 = temp__5825__auto___66967;
if(cljs.core.chunked_seq_QMARK_(seq__66741_66968__$1)){
var c__5694__auto___66969 = cljs.core.chunk_first(seq__66741_66968__$1);
var G__66970 = cljs.core.chunk_rest(seq__66741_66968__$1);
var G__66971 = c__5694__auto___66969;
var G__66972 = cljs.core.count(c__5694__auto___66969);
var G__66973 = (0);
seq__66741_66956 = G__66970;
chunk__66742_66957 = G__66971;
count__66743_66958 = G__66972;
i__66744_66959 = G__66973;
continue;
} else {
var op_66974 = cljs.core.first(seq__66741_66968__$1);
op_66974.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer,new cljs.core.Keyword("emmy.value","native-integral","emmy.value/native-integral",-1286161061)], null),((function (seq__66741_66956,chunk__66742_66957,count__66743_66958,i__66744_66959,op_66974,seq__66741_66968__$1,temp__5825__auto___66967,big_zero_66843,big_one_66844){
return (function (a,b){
var G__66795 = a;
var G__66796 = goog.math.Integer.fromNumber(b);
return (op_66974.cljs$core$IFn$_invoke$arity$2 ? op_66974.cljs$core$IFn$_invoke$arity$2(G__66795,G__66796) : op_66974.call(null,G__66795,G__66796));
});})(seq__66741_66956,chunk__66742_66957,count__66743_66958,i__66744_66959,op_66974,seq__66741_66968__$1,temp__5825__auto___66967,big_zero_66843,big_one_66844))
);

op_66974.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","native-integral","emmy.value/native-integral",-1286161061),goog.math.Integer], null),((function (seq__66741_66956,chunk__66742_66957,count__66743_66958,i__66744_66959,op_66974,seq__66741_66968__$1,temp__5825__auto___66967,big_zero_66843,big_one_66844){
return (function (a,b){
var G__66797 = goog.math.Integer.fromNumber(a);
var G__66798 = b;
return (op_66974.cljs$core$IFn$_invoke$arity$2 ? op_66974.cljs$core$IFn$_invoke$arity$2(G__66797,G__66798) : op_66974.call(null,G__66797,G__66798));
});})(seq__66741_66956,chunk__66742_66957,count__66743_66958,i__66744_66959,op_66974,seq__66741_66968__$1,temp__5825__auto___66967,big_zero_66843,big_one_66844))
);

op_66974.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer,new cljs.core.Keyword("emmy.value","floating-point","emmy.value/floating-point",919866091)], null),((function (seq__66741_66956,chunk__66742_66957,count__66743_66958,i__66744_66959,op_66974,seq__66741_66968__$1,temp__5825__auto___66967,big_zero_66843,big_one_66844){
return (function (a,b){
var G__66799 = Number(a);
var G__66800 = b;
return (op_66974.cljs$core$IFn$_invoke$arity$2 ? op_66974.cljs$core$IFn$_invoke$arity$2(G__66799,G__66800) : op_66974.call(null,G__66799,G__66800));
});})(seq__66741_66956,chunk__66742_66957,count__66743_66958,i__66744_66959,op_66974,seq__66741_66968__$1,temp__5825__auto___66967,big_zero_66843,big_one_66844))
);

op_66974.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","floating-point","emmy.value/floating-point",919866091),goog.math.Integer], null),((function (seq__66741_66956,chunk__66742_66957,count__66743_66958,i__66744_66959,op_66974,seq__66741_66968__$1,temp__5825__auto___66967,big_zero_66843,big_one_66844){
return (function (a,b){
var G__66804 = a;
var G__66805 = Number(b);
return (op_66974.cljs$core$IFn$_invoke$arity$2 ? op_66974.cljs$core$IFn$_invoke$arity$2(G__66804,G__66805) : op_66974.call(null,G__66804,G__66805));
});})(seq__66741_66956,chunk__66742_66957,count__66743_66958,i__66744_66959,op_66974,seq__66741_66968__$1,temp__5825__auto___66967,big_zero_66843,big_one_66844))
);

op_66974.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer,emmy.numbers.goog$module$goog$math$Long], null),((function (seq__66741_66956,chunk__66742_66957,count__66743_66958,i__66744_66959,op_66974,seq__66741_66968__$1,temp__5825__auto___66967,big_zero_66843,big_one_66844){
return (function (a,b){
var G__66809 = a;
var G__66810 = goog.math.Integer.fromNumber(b);
return (op_66974.cljs$core$IFn$_invoke$arity$2 ? op_66974.cljs$core$IFn$_invoke$arity$2(G__66809,G__66810) : op_66974.call(null,G__66809,G__66810));
});})(seq__66741_66956,chunk__66742_66957,count__66743_66958,i__66744_66959,op_66974,seq__66741_66968__$1,temp__5825__auto___66967,big_zero_66843,big_one_66844))
);

op_66974.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.numbers.goog$module$goog$math$Long,goog.math.Integer], null),((function (seq__66741_66956,chunk__66742_66957,count__66743_66958,i__66744_66959,op_66974,seq__66741_66968__$1,temp__5825__auto___66967,big_zero_66843,big_one_66844){
return (function (a,b){
var G__66811 = goog.math.Integer.fromNumber(a);
var G__66812 = b;
return (op_66974.cljs$core$IFn$_invoke$arity$2 ? op_66974.cljs$core$IFn$_invoke$arity$2(G__66811,G__66812) : op_66974.call(null,G__66811,G__66812));
});})(seq__66741_66956,chunk__66742_66957,count__66743_66958,i__66744_66959,op_66974,seq__66741_66968__$1,temp__5825__auto___66967,big_zero_66843,big_one_66844))
);


var G__66976 = cljs.core.next(seq__66741_66968__$1);
var G__66977 = null;
var G__66978 = (0);
var G__66979 = (0);
seq__66741_66956 = G__66976;
chunk__66742_66957 = G__66977;
count__66743_66958 = G__66978;
i__66744_66959 = G__66979;
continue;
}
} else {
}
}
break;
}

emmy.generic.quotient.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.numbers.goog$module$goog$math$Long,emmy.numbers.goog$module$goog$math$Long], null),(function (a,b){
return a.div(b);
}));

emmy.generic.quotient.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer,goog.math.Integer], null),(function (a,b){
return a.divide(b);
}));

//# sourceMappingURL=emmy.numbers.js.map
