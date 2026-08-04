goog.provide('emmy.complex');
/**
 * A [[Complex]] value equal to 0 (south pole on the Riemann Sphere).
 */
emmy.complex.ZERO = emmy.complex.impl.ZERO;
/**
 * A [[Complex]] value equal to 1.
 */
emmy.complex.ONE = emmy.complex.impl.ONE;
/**
 * A [[Complex]] value equal to `i`.
 */
emmy.complex.I = emmy.complex.impl.I;
/**
 * A [[Complex]] value equal to `-i`.
 */
emmy.complex._I = emmy.complex.impl._I;
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869),new cljs.core.Keyword("emmy.value","number","emmy.value/number",547788979));
/**
 * Returns a [[Complex]] number with the supplied real part `re` and imaginary
 *   part `im`. `im` defaults to 0.
 */
emmy.complex.complex = (function emmy$complex$complex(var_args){
var G__28169 = arguments.length;
switch (G__28169) {
case 1:
return emmy.complex.complex.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.complex.complex.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.complex.complex.cljs$core$IFn$_invoke$arity$1 = (function (c){
if(typeof c === 'string'){
return emmy.complex.impl.parse(c);
} else {
if(cljs.core.vector_QMARK_(c)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(c),(2))){
} else {
throw (new Error("Assert failed: (= (count c) 2)"));
}

var vec__28175 = c;
var re = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28175,(0),null);
var im = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28175,(1),null);
return emmy.complex.impl.__GT_Complex(re,im);
} else {
return emmy.complex.impl.__GT_Complex(c,(0));

}
}
}));

(emmy.complex.complex.cljs$core$IFn$_invoke$arity$2 = (function (re,im){
return emmy.complex.impl.__GT_Complex(re,im);
}));

(emmy.complex.complex.cljs$lang$maxFixedArity = 2);

/**
 * Used as a [data reader](https://www.clojurescript.org/guides/reader#_clojurescript_compilation).
 *   In Clojure, we could get away with just using the constructor above, but in
 *   ClojureScript we need to act as a macro to delay evaluation of the constructor.
 */
emmy.complex.parse_complex = (function emmy$complex$parse_complex(c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("emmy.complex","complex","emmy.complex/complex",754489658,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
});
/**
 * Returns true if `a` is an instance of [[Complex]], false otherwise.
 */
emmy.complex.complex_QMARK_ = (function emmy$complex$complex_QMARK_(a){
return (a instanceof emmy.complex.impl.Complex);
});
emmy.complex.real = (function emmy$complex$real(z){
return emmy.complex.impl.real(z);
});
emmy.complex.imaginary = (function emmy$complex$imaginary(z){
return emmy.complex.impl.imaginary(z);
});
/**
 * Generates a [Gaussian integer](https://en.wikipedia.org/wiki/Gaussian_integer)
 *   from the complex number `z` by rounding the real and imaginary components of
 *   `z` to their nearest integral values. (Note: the use of cast-to-double is
 * unfortunate here, as complex numbers can now contain exact fractions, and
 * we'd want a nearest integer generic function for those)
 */
emmy.complex.round = (function emmy$complex$round(z){
if(emmy.complex.complex_QMARK_(z)){
return emmy.complex.complex.cljs$core$IFn$_invoke$arity$2(emmy.util.int$(Math.round(emmy.util.double$(emmy.complex.real(z)))),emmy.util.int$(Math.round(emmy.util.double$(emmy.complex.imaginary(z)))));
} else {
if(emmy.value.native_integral_QMARK_(z)){
return z;
} else {
return Math.round(emmy.util.double$(z));

}
}
});
/**
 * Returns a complex or real number with a positive real component. (i.e., either z
 *   or (* -1 z)), whichever number has a positive real component.
 */
emmy.complex.abs_real = (function emmy$complex$abs_real(z){
if(emmy.complex.complex_QMARK_(z)){
if(cljs.core.truth_(emmy.generic.negative_QMARK_.cljs$core$IFn$_invoke$arity$1(emmy.complex.real(z)))){
return emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(z);
} else {
return z;
}
} else {
if(emmy.value.real_QMARK_(z)){
return emmy.generic.abs.cljs$core$IFn$_invoke$arity$1(z);
} else {
return emmy.util.illegal("not supported!");

}
}
});
/**
 * Returns the complex gcd of two complex numbers using the euclidean algorithm.
 * 
 *   For more details on the algorithm, see [this post on Ask Dr
 *   Math](https://web.archive.org/web/20190720160400/http://mathforum.org/library/drmath/view/67068.html).
 * 
 *   NOTE that the GCD of two complex numbers is determined up to a factor of ±1
 *   and ±i.
 */
emmy.complex.gcd = (function emmy$complex$gcd(l,r){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(l))){
return r;
} else {
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(r))){
return l;
} else {
if(cljs.core.truth_(emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(l,r))){
return emmy.complex.abs_real(l);
} else {
if(cljs.core.not((function (){var and__5160__auto__ = emmy.generic.exact_QMARK_.cljs$core$IFn$_invoke$arity$1(l);
if(cljs.core.truth_(and__5160__auto__)){
return emmy.generic.exact_QMARK_.cljs$core$IFn$_invoke$arity$1(r);
} else {
return and__5160__auto__;
}
})())){
return emmy.util.illegal("gcd can only be computed for gaussian integers.");
} else {
var vec__28182 = (((emmy.generic.magnitude.cljs$core$IFn$_invoke$arity$1(l) > emmy.generic.magnitude.cljs$core$IFn$_invoke$arity$1(r)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,r], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,l], null));
var l__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28182,(0),null);
var r__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28182,(1),null);
var a = l__$1;
var b = r__$1;
while(true){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(b))){
return emmy.complex.abs_real(a);
} else {
var G__28253 = b;
var G__28254 = emmy.generic.sub.cljs$core$IFn$_invoke$arity$2(a,emmy.generic.mul.cljs$core$IFn$_invoke$arity$2(emmy.complex.round(emmy.generic.div.cljs$core$IFn$_invoke$arity$2(a,b)),b));
a = G__28253;
b = G__28254;
continue;
}
break;
}

}
}
}
}
});
emmy.generic.zero_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (z){
return emmy.complex.impl.zero_QMARK_(z);
}));
emmy.generic.one_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (c){
var and__5160__auto__ = emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(emmy.complex.real(c));
if(cljs.core.truth_(and__5160__auto__)){
return emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(emmy.complex.imaginary(c));
} else {
return and__5160__auto__;
}
}));
emmy.generic.identity_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (c){
return emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(c);
}));
emmy.generic.zero_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (c){
return emmy.complex.impl.zero_like(c);
}));
emmy.generic.one_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (c){
return emmy.complex.impl.one_like(c);
}));
emmy.generic.identity_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (c){
return emmy.complex.impl.one_like(c);
}));
emmy.generic.freeze.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (c){
var re = emmy.complex.real(c);
var im = emmy.complex.imaginary(c);
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(im))){
return re;
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"complex","complex",-1238824944,null),(new cljs.core.List(null,re,(new cljs.core.List(null,im,null,(1),null)),(2),null)),(3),null));
}
}));
emmy.generic.exact_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (c){
var and__5160__auto__ = emmy.generic.exact_QMARK_.cljs$core$IFn$_invoke$arity$1(emmy.complex.real(c));
if(cljs.core.truth_(and__5160__auto__)){
return emmy.generic.exact_QMARK_.cljs$core$IFn$_invoke$arity$1(emmy.complex.imaginary(c));
} else {
return and__5160__auto__;
}
}));
emmy.generic.gcd.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869),new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (a,b){
return emmy.complex.gcd(a,b);
}));
emmy.generic.gcd.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869),new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (a,b){
return emmy.complex.gcd(a,b);
}));
emmy.generic.gcd.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404),new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (a,b){
return emmy.complex.gcd(a,b);
}));
emmy.generic.make_rectangular.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404),new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (re,im){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(im))){
return re;
} else {
return emmy.complex.complex.cljs$core$IFn$_invoke$arity$2(re,im);
}
}));
emmy.generic.make_polar.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404),new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (radius,angle){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(radius))){
return radius;
} else {
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(angle))){
return radius;
} else {
return emmy.complex.complex.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(radius,emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(angle)),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(radius,emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(angle)));

}
}
}));
emmy.generic.real_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (a){
return emmy.complex.real(a);
}));
emmy.generic.imag_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (a){
return emmy.complex.imaginary(a);
}));
emmy.generic.magnitude.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (z){
return emmy.complex.impl.abs(z);
}));
emmy.generic.angle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (z){
return emmy.complex.impl.arg(z);
}));
emmy.generic.conjugate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (z){
return emmy.complex.impl.conjugate(z);
}));
emmy.generic.dot_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869),new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (a,b){
return emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.complex.real(a),emmy.complex.real(b)),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.complex.imaginary(a),emmy.complex.imaginary(b)));
}));
emmy.generic.dot_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869),new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (a,b){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.complex.real(a),b);
}));
emmy.generic.dot_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404),new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (a,b){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(a,emmy.complex.real(b));
}));
emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869),new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (a,b){
return emmy.complex.impl.equal_QMARK_(a,b);
}));
emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869),new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (a,n){
var and__5160__auto__ = emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(emmy.complex.imaginary(a));
if(cljs.core.truth_(and__5160__auto__)){
return emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.complex.real(a),n);
} else {
return and__5160__auto__;
}
}));
emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404),new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (n,a){
var and__5160__auto__ = emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(emmy.complex.imaginary(a));
if(cljs.core.truth_(and__5160__auto__)){
return emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(n,emmy.complex.real(a));
} else {
return and__5160__auto__;
}
}));
emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869),new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (a,b){
return emmy.complex.impl.add(a,b);
}));
emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869),new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (a,n){
return emmy.complex.impl.add(a,emmy.complex.complex.cljs$core$IFn$_invoke$arity$1(n));
}));
emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404),new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (n,a){
return emmy.complex.impl.add(emmy.complex.complex.cljs$core$IFn$_invoke$arity$1(n),a);
}));
emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869),new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (a,b){
return emmy.complex.impl.sub(a,b);
}));
emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869),new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (a,n){
return emmy.complex.impl.sub(a,emmy.complex.complex.cljs$core$IFn$_invoke$arity$1(n));
}));
emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404),new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (n,a){
return emmy.complex.impl.sub(emmy.complex.complex.cljs$core$IFn$_invoke$arity$1(n),a);
}));
emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869),new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (a,b){
return emmy.complex.impl.mul(a,b);
}));
emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869),new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (a,n){
return emmy.complex.impl.mul(a,emmy.complex.complex.cljs$core$IFn$_invoke$arity$1(n));
}));
emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404),new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (n,a){
return emmy.complex.impl.mul(emmy.complex.complex.cljs$core$IFn$_invoke$arity$1(n),a);
}));
emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869),new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (a,b){
return emmy.complex.impl.div(a,b);
}));
emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869),new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (a,n){
return emmy.complex.impl.div(a,emmy.complex.complex.cljs$core$IFn$_invoke$arity$1(n));
}));
emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404),new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (n,a){
return emmy.complex.impl.div(emmy.complex.complex.cljs$core$IFn$_invoke$arity$1(n),a);
}));
emmy.generic.invert.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (z){
return emmy.complex.impl.inverse(z);
}));
emmy.generic.negate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (z){
return emmy.complex.impl.neg(z);
}));
emmy.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869),new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (w,z){
return emmy.complex.impl.pow(w,z);
}));
emmy.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869),new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404)], null),(function (z,r){
return emmy.complex.impl.pow(z,emmy.complex.complex.cljs$core$IFn$_invoke$arity$1(r));
}));
emmy.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","real","emmy.value/real",-1508349404),new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (r,z){
return emmy.complex.impl.pow(emmy.complex.complex.cljs$core$IFn$_invoke$arity$1(r),z);
}));
emmy.generic.square.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (z){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(z,z);
}));
emmy.generic.cube.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (z){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(z,z,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([z], 0));
}));
emmy.generic.abs.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (z){
return emmy.complex.impl.abs(z);
}));
emmy.generic.exp.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (z){
return emmy.complex.impl.exp(z);
}));
emmy.generic.log.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (z){
return emmy.complex.impl.log(z);
}));
emmy.generic.sqrt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (z){
return emmy.complex.impl.sqrt(z);
}));
emmy.generic.sin.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (z){
return emmy.complex.impl.sin(z);
}));
emmy.generic.cos.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (z){
return emmy.complex.impl.cos(z);
}));
emmy.generic.tan.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (z){
return emmy.complex.impl.tan(z);
}));
emmy.generic.sec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (z){
return emmy.complex.impl.sec(z);
}));
emmy.generic.csc.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (z){
return emmy.complex.impl.csc(z);
}));
emmy.generic.cot.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (z){
return emmy.complex.impl.cot(z);
}));
emmy.generic.asin.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (z){
return emmy.complex.impl.asin(z);
}));
emmy.generic.acos.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (z){
return emmy.complex.impl.acos(z);
}));
emmy.generic.atan.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (z){
return emmy.complex.impl.atan(z);
}));
emmy.generic.acsc.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (z){
return emmy.complex.impl.acsc(z);
}));
emmy.generic.asec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (z){
return emmy.complex.impl.asec(z);
}));
emmy.generic.acot.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (z){
return emmy.complex.impl.acot(z);
}));
emmy.generic.asinh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (z){
return emmy.complex.impl.asinh(z);
}));
emmy.generic.acosh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (z){
return emmy.complex.impl.acosh(z);
}));
emmy.generic.atanh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (z){
return emmy.complex.impl.atanh(z);
}));
emmy.generic.asech.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (z){
return emmy.complex.impl.asech(z);
}));
emmy.generic.acsch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (z){
return emmy.complex.impl.acsch(z);
}));
emmy.generic.acoth.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (z){
return emmy.complex.impl.acoth(z);
}));
emmy.generic.floor.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (z){
return emmy.complex.impl.floor.cljs$core$IFn$_invoke$arity$1(z);
}));
emmy.generic.ceiling.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (z){
return emmy.complex.impl.ceil.cljs$core$IFn$_invoke$arity$1(z);
}));
emmy.generic.cosh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (z){
return emmy.complex.impl.cosh(z);
}));
emmy.generic.sinh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (z){
return emmy.complex.impl.sinh(z);
}));
emmy.generic.tanh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (z){
return emmy.complex.impl.tanh(z);
}));
emmy.generic.sech.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (z){
return emmy.complex.impl.sech(z);
}));
emmy.generic.csch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (z){
return emmy.complex.impl.csch(z);
}));
emmy.generic.coth.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (z){
return emmy.complex.impl.coth(z);
}));
emmy.generic.integer_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (a){
var re = emmy.generic.integer_part.cljs$core$IFn$_invoke$arity$1(emmy.complex.real(a));
var im = emmy.generic.integer_part.cljs$core$IFn$_invoke$arity$1(emmy.complex.imaginary(a));
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(im))){
return re;
} else {
return emmy.complex.complex.cljs$core$IFn$_invoke$arity$2(re,im);
}
}));
emmy.generic.fractional_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (a){
var re = emmy.generic.fractional_part.cljs$core$IFn$_invoke$arity$1(emmy.complex.real(a));
var im = emmy.generic.fractional_part.cljs$core$IFn$_invoke$arity$1(emmy.complex.imaginary(a));
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(im))){
return re;
} else {
return emmy.complex.complex.cljs$core$IFn$_invoke$arity$2(re,im);
}
}));
emmy.generic.negative_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (a){
var and__5160__auto__ = emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(emmy.complex.imaginary(a));
if(cljs.core.truth_(and__5160__auto__)){
return emmy.generic.negative_QMARK_.cljs$core$IFn$_invoke$arity$1(emmy.complex.real(a));
} else {
return and__5160__auto__;
}
}));
emmy.generic.infinite_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869)], null),(function (a){
var or__5162__auto__ = emmy.generic.infinite_QMARK_.cljs$core$IFn$_invoke$arity$1(emmy.complex.real(a));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.generic.infinite_QMARK_.cljs$core$IFn$_invoke$arity$1(emmy.complex.imaginary(a));
}
}));

//# sourceMappingURL=emmy.complex.js.map
