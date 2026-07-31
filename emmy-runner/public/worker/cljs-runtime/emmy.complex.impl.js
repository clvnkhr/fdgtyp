import "./cljs_env.js";
import "./cljs.core.js";
import "./emmy.generic.js";
import "./emmy.util.js";
import "./emmy.value.js";
goog.provide('emmy.complex.impl');


/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {emmy.value.Numerical}
 * @implements {emmy.value.IKind}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {emmy.value.INumericTower}
*/
emmy.complex.impl.Complex = (function (re,im){
this.re = re;
this.im = im;
this.cljs$lang$protocol_mask$partition0$ = 2149580800;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(emmy.complex.impl.Complex.prototype.emmy$value$IKind$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.complex.impl.Complex.prototype.emmy$value$IKind$kind$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword("emmy.complex","complex","emmy.complex/complex",-886041869);
}));

(emmy.complex.impl.Complex.prototype.emmy$value$INumericTower$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.complex.impl.Complex.prototype.emmy$value$Numerical$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.complex.impl.Complex.prototype.emmy$value$Numerical$numerical_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(emmy.complex.impl.Complex.prototype.toString = (function (){
var self__ = this;
var a = this;
return (emmy.complex.impl.__GT_string.cljs$core$IFn$_invoke$arity$1 ? emmy.complex.impl.__GT_string.cljs$core$IFn$_invoke$arity$1(a) : emmy.complex.impl.__GT_string.call(null,a));
}));

(emmy.complex.impl.Complex.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (a,b){
var self__ = this;
var a__$1 = this;
return (emmy.complex.impl.equal_QMARK_.cljs$core$IFn$_invoke$arity$2 ? emmy.complex.impl.equal_QMARK_.cljs$core$IFn$_invoke$arity$2(a__$1,b) : emmy.complex.impl.equal_QMARK_.call(null,a__$1,b));
}));

(emmy.complex.impl.Complex.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (z,writer,_){
var self__ = this;
var z__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(emmy.complex.impl.__GT_string.cljs$core$IFn$_invoke$arity$1 ? emmy.complex.impl.__GT_string.cljs$core$IFn$_invoke$arity$1(z__$1) : emmy.complex.impl.__GT_string.call(null,z__$1))], 0));
}));

(emmy.complex.impl.Complex.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"im","im",506870084,null)], null);
}));

(emmy.complex.impl.Complex.cljs$lang$type = true);

(emmy.complex.impl.Complex.cljs$lang$ctorStr = "emmy.complex.impl/Complex");

(emmy.complex.impl.Complex.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"emmy.complex.impl/Complex");
}));

/**
 * Positional factory function for emmy.complex.impl/Complex.
 */
emmy.complex.impl.__GT_Complex = (function emmy$complex$impl$__GT_Complex(re,im){
return (new emmy.complex.impl.Complex(re,im));
});

emmy.complex.impl.__GT_string = (function emmy$complex$impl$__GT_string(c){
return (""+"#emmy/complex "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.re,c.im], null)));
});
emmy.complex.impl.ZERO = (new emmy.complex.impl.Complex((0),(0)));
emmy.complex.impl.ONE = (new emmy.complex.impl.Complex((1),(0)));
emmy.complex.impl.I = (new emmy.complex.impl.Complex((0),(1)));
emmy.complex.impl._I = (new emmy.complex.impl.Complex((0),(-1)));
emmy.complex.impl.INFINITY = (new emmy.complex.impl.Complex(Infinity,Infinity));
emmy.complex.impl.NAN = (new emmy.complex.impl.Complex(NaN,NaN));
emmy.complex.impl.LN2 = Math.log((2));
emmy.complex.impl.PI_COLON_2 = (Math.PI / (2));
emmy.complex.impl.PI_COLON_4 = (Math.PI / (4));
/**
 * Returns true if the supplied complex number `z` is equal to the value `w`. The
 *   rules for [[eq]] are as follows:
 * 
 * - If `w` is complex, returns true if all coefficients match, false
 *   otherwise
 * 
 * - If `w` is sequential with a count of 2, it's interpreted as complex in the
 *   obvious way
 * 
 *   Else, if `z` is a [[real?]] complex number, returns true if the real component of
 *   `z` is [[emmy.value/=]] to `w`, false otherwise.
 */
emmy.complex.impl.equal_QMARK_ = (function emmy$complex$impl$equal_QMARK_(z,w){
var r = z.re;
var i = z.im;
if((w instanceof emmy.complex.impl.Complex)){
var and__5160__auto__ = emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(r,w.re);
if(cljs.core.truth_(and__5160__auto__)){
return emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(i,w.im);
} else {
return and__5160__auto__;
}
} else {
if(emmy.value.real_QMARK_(w)){
var and__5160__auto__ = emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(i);
if(cljs.core.truth_(and__5160__auto__)){
return emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(r,w);
} else {
return and__5160__auto__;
}
} else {
return emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(z,w);

}
}
});
/**
 * Determines whether or not a complex number is at the zero pole of the
 *   Riemann sphere.
 */
emmy.complex.impl.zero_QMARK_ = (function emmy$complex$impl$zero_QMARK_(z){
var and__5160__auto__ = emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(z.re);
if(cljs.core.truth_(and__5160__auto__)){
return emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(z.im);
} else {
return and__5160__auto__;
}
});
/**
 * Determines whether a complex number is not on the Riemann sphere.
 */
emmy.complex.impl.nan_QMARK_ = (function emmy$complex$impl$nan_QMARK_(z){
var or__5162__auto__ = emmy.util.nan_QMARK_(z.re);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.util.nan_QMARK_(z.im);
}
});
/**
 * For the origin of these constants, see the related material
 * in [[emmy.series-test/cos-1-square-terms]].
 */
emmy.complex.impl.cos_1_square_terms = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [4.779477332387385E-14,-1.147074559772972E-11,2.08767569878681E-9,-2.755731922398589E-7,2.48015873015873E-5,-0.001388888888888889,0.04166666666666667,-0.5,0.0], null);
/**
 * Computes $\cos(x)-1$ using Taylor series if $|x|\le{\pi\over 4}$),
 * otherwise just subtracts one from `(Math/cos x)`. Doing the latter
 * when x is small squanders significant digits.
 */
emmy.complex.impl.cos_1 = (function emmy$complex$impl$cos_1(x){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(x))){
return emmy.generic.zero_like.cljs$core$IFn$_invoke$arity$1(x);
} else {
if((emmy.generic.abs.cljs$core$IFn$_invoke$arity$1(x) > emmy.complex.impl.PI_COLON_4)){
return (Math.cos(x) - (1));
} else {
var xx = (x * x);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (a,b){
return ((a * xx) + b);
}),emmy.complex.impl.cos_1_square_terms);

}
}
});
emmy.complex.impl.real = (function emmy$complex$impl$real(z){
return z.re;
});
emmy.complex.impl.imaginary = (function emmy$complex$impl$imaginary(z){
return z.im;
});
/**
 * Calculate the magnitude of the complex number.
 *   The implementation tactic used here (pre-dividing by the greater
 *   of the components) comes from the GNU ISO C++ standard library.
 */
emmy.complex.impl.abs = (function emmy$complex$impl$abs(z){
var x = z.re;
var y = z.im;
var s = cljs.core.max.cljs$core$IFn$_invoke$arity$2(emmy.generic.abs.cljs$core$IFn$_invoke$arity$1(x),emmy.generic.abs.cljs$core$IFn$_invoke$arity$1(y));
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(s))){
return s;
} else {
var x__$1 = emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(x,s);
var y__$1 = emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(y,s);
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(s,emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic.square.cljs$core$IFn$_invoke$arity$1(x__$1),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(y__$1))));
}
});
/**
 * Regular expression used to parse complex numbers
 */
emmy.complex.impl.complex_re = /([+-]?\d+(\.\d*)?([Ee][+-]?\d+)?)(\s?([+-])?\s?([+-]?\d+(\.\d*)?([Ee][+-]?\d+)?)[Ii])?/;
/**
 * Parse a complex number. We expect one or two floating point numbers.
 *   If two, they must be separated by a sign (perhaps surrounded by at most
 *   one space, the second number followed by I or i. Example: 1.2-3.4i)
 */
emmy.complex.impl.parse = (function emmy$complex$impl$parse(s){
var temp__5823__auto__ = cljs.core.re_matches(emmy.complex.impl.complex_re,s);
if(cljs.core.truth_(temp__5823__auto__)){
var vec__66369 = temp__5823__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66369,(0),null);
var re = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66369,(1),null);
var re_frac = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66369,(2),null);
var re_expt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66369,(3),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66369,(4),null);
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66369,(5),null);
var im = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66369,(6),null);
var im_frac = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66369,(7),null);
var im_expt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66369,(8),null);
return emmy.complex.impl.__GT_Complex((function (){var fexpr__66375 = (cljs.core.truth_((function (){var or__5162__auto__ = re_frac;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return re_expt;
}
})())?emmy.util.parse_double:emmy.util.parse_int);
return (fexpr__66375.cljs$core$IFn$_invoke$arity$1 ? fexpr__66375.cljs$core$IFn$_invoke$arity$1(re) : fexpr__66375.call(null,re));
})(),(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sign,"-"))?(-1):(1)) * (cljs.core.truth_(im)?(function (){var fexpr__66376 = (cljs.core.truth_((function (){var or__5162__auto__ = im_frac;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return im_expt;
}
})())?emmy.util.parse_double:emmy.util.parse_int);
return (fexpr__66376.cljs$core$IFn$_invoke$arity$1 ? fexpr__66376.cljs$core$IFn$_invoke$arity$1(im) : fexpr__66376.call(null,im));
})():(0))));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid complex number",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),s], null));
}
});
/**
 * Compute the complex sum.
 */
emmy.complex.impl.add = (function emmy$complex$impl$add(l,r){
return emmy.complex.impl.__GT_Complex(emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(l.re,r.re),emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(l.im,r.im));
});
/**
 * Compute the complex difference.
 */
emmy.complex.impl.sub = (function emmy$complex$impl$sub(l,r){
return emmy.complex.impl.__GT_Complex(emmy.generic._.cljs$core$IFn$_invoke$arity$2(l.re,r.re),emmy.generic._.cljs$core$IFn$_invoke$arity$2(l.im,r.im));
});
/**
 * Compute the complex product.
 */
emmy.complex.impl.mul = (function emmy$complex$impl$mul(l,r){
if(cljs.core.truth_((function (){var or__5162__auto__ = (function (){var and__5160__auto__ = emmy.generic.infinite_QMARK_.cljs$core$IFn$_invoke$arity$1(l);
if(cljs.core.truth_(and__5160__auto__)){
return emmy.complex.impl.zero_QMARK_(r);
} else {
return and__5160__auto__;
}
})();
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var and__5160__auto__ = emmy.complex.impl.zero_QMARK_(l);
if(cljs.core.truth_(and__5160__auto__)){
return emmy.generic.infinite_QMARK_.cljs$core$IFn$_invoke$arity$1(r);
} else {
return and__5160__auto__;
}
}
})())){
return emmy.complex.impl.NAN;
} else {
if(cljs.core.truth_((function (){var or__5162__auto__ = emmy.generic.infinite_QMARK_.cljs$core$IFn$_invoke$arity$1(l);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.generic.infinite_QMARK_.cljs$core$IFn$_invoke$arity$1(r);
}
})())){
return emmy.complex.impl.INFINITY;
} else {
var a = l.re;
var b = l.im;
var c = r.re;
var d = r.im;
if(cljs.core.truth_((function (){var and__5160__auto__ = emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.truth_(and__5160__auto__)){
return emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(d);
} else {
return and__5160__auto__;
}
})())){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(a,c);
} else {
return emmy.complex.impl.__GT_Complex(emmy.generic._.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(a,c),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(b,d)),emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(a,d),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(b,c)));
}

}
}
});
/**
 * Compute the complex quotient.
 */
emmy.complex.impl.div = (function emmy$complex$impl$div(l,r){
if(cljs.core.truth_((function (){var or__5162__auto__ = (function (){var and__5160__auto__ = emmy.complex.impl.zero_QMARK_(l);
if(cljs.core.truth_(and__5160__auto__)){
return emmy.complex.impl.zero_QMARK_(r);
} else {
return and__5160__auto__;
}
})();
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var and__5160__auto__ = emmy.generic.infinite_QMARK_.cljs$core$IFn$_invoke$arity$1(l);
if(cljs.core.truth_(and__5160__auto__)){
return emmy.generic.infinite_QMARK_.cljs$core$IFn$_invoke$arity$1(r);
} else {
return and__5160__auto__;
}
}
})())){
return emmy.complex.impl.NAN;
} else {
if(cljs.core.truth_((function (){var or__5162__auto__ = emmy.generic.infinite_QMARK_.cljs$core$IFn$_invoke$arity$1(l);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.complex.impl.zero_QMARK_(r);
}
})())){
return emmy.complex.impl.INFINITY;
} else {
if(cljs.core.truth_((function (){var or__5162__auto__ = emmy.complex.impl.zero_QMARK_(l);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.generic.infinite_QMARK_.cljs$core$IFn$_invoke$arity$1(r);
}
})())){
return emmy.complex.impl.ZERO;
} else {
var a = l.re;
var b = l.im;
var c = r.re;
var d = r.im;
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(d))){
return emmy.complex.impl.__GT_Complex(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(a,c),emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(b,c));
} else {
if((emmy.generic.abs.cljs$core$IFn$_invoke$arity$1(c) < emmy.generic.abs.cljs$core$IFn$_invoke$arity$1(d))){
var x = emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(c,d);
var t = emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(c,x),d);
return emmy.complex.impl.__GT_Complex(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(a,x),b),t),emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic._.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(b,x),a),t));
} else {
var x = emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(d,c);
var t = emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(d,x),c);
return emmy.complex.impl.__GT_Complex(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(a,emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(b,x)),t),emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic._.cljs$core$IFn$_invoke$arity$2(b,emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(a,x)),t));

}
}

}
}
}
});
/**
 * Calculate the power of two complex numbers. 0 to any power is
 * zero, unless that power has an imaginary component, in which case NaN.
 * Integral powers of the imaginary unit are treated exactly; everything
 * else uses logarithms.
 */
emmy.complex.impl.pow = (function emmy$complex$impl$pow(l,r){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(l))){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(r.im))){
return l;
} else {
return emmy.complex.impl.NAN;
}
} else {
if(cljs.core.truth_((function (){var and__5160__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.complex.impl.I,l);
if(and__5160__auto__){
var and__5160__auto____$1 = emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(r.im);
if(cljs.core.truth_(and__5160__auto____$1)){
return emmy.value.integral_QMARK_(r.re);
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
})())){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),emmy.complex.impl.I,(-1),emmy.complex.impl._I], null),cljs.core.mod(r.re,(4)));
} else {
return emmy.generic.exp.cljs$core$IFn$_invoke$arity$1(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r,emmy.generic.log.cljs$core$IFn$_invoke$arity$1(l)));

}
}
});
/**
 * Calculate the complex square root
 */
emmy.complex.impl.sqrt = (function emmy$complex$impl$sqrt(z){
var a = z.re;
var age0 = (a >= (0));
var b = z.im;
if(cljs.core.truth_((function (){var and__5160__auto__ = emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.truth_(and__5160__auto__)){
return age0;
} else {
return and__5160__auto__;
}
})())){
return emmy.complex.impl.__GT_Complex(emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(a),(0));
} else {
var r = emmy.generic.abs.cljs$core$IFn$_invoke$arity$1(z);
var re = ((age0)?emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(r,a))),(2)):emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic.abs.cljs$core$IFn$_invoke$arity$1(b),emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),emmy.generic._.cljs$core$IFn$_invoke$arity$2(r,a)))));
var im = ((age0)?emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic.abs.cljs$core$IFn$_invoke$arity$1(b),emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(r,a)))):emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),emmy.generic._.cljs$core$IFn$_invoke$arity$2(r,a))),(2)));
return emmy.complex.impl.__GT_Complex(re,(cljs.core.truth_(emmy.generic.negative_QMARK_.cljs$core$IFn$_invoke$arity$1(b))?emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(im):im));
}
});
/**
 * Calculate the complex exponential.
 */
emmy.complex.impl.exp = (function emmy$complex$impl$exp(z){
var ea = emmy.generic.exp.cljs$core$IFn$_invoke$arity$1(z.re);
var b = z.im;
return emmy.complex.impl.__GT_Complex(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(ea,emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(b)),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(ea,emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(b)));
});
/**
 * Calculate the complex exponent and subtracts one.
 *   This may be more accurate than `(- (exp z) 1)` if
 *   `z` is small.
 */
emmy.complex.impl.exp_1 = (function emmy$complex$impl$exp_1(z){
var a = z.re;
var b = z.im;
return emmy.complex.impl.__GT_Complex(((Math.expm1(a) * Math.cos(b)) + emmy.complex.impl.cos_1(b)),(Math.exp(a) * Math.sin(b)));
});
/**
 * Calculate the angle of the complex number.
 */
emmy.complex.impl.arg = (function emmy$complex$impl$arg(z){
return emmy.generic.atan.cljs$core$IFn$_invoke$arity$2(z.im,z.re);
});
/**
 * Calculate complex the natural log.
 */
emmy.complex.impl.log = (function emmy$complex$impl$log(z){
return emmy.complex.impl.__GT_Complex(emmy.generic.log.cljs$core$IFn$_invoke$arity$1(emmy.complex.impl.abs(z)),emmy.complex.impl.arg(z));
});
/**
 * Calculate the complex sine.
 */
emmy.complex.impl.sin = (function emmy$complex$impl$sin(z){
var a = z.re;
var b = z.im;
return emmy.complex.impl.__GT_Complex(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(a),emmy.generic.cosh.cljs$core$IFn$_invoke$arity$1(b)),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(a),emmy.generic.sinh.cljs$core$IFn$_invoke$arity$1(b)));
});
emmy.complex.impl.cos = (function emmy$complex$impl$cos(z){
var a = z.re;
var b = z.im;
return emmy.complex.impl.__GT_Complex(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(a),emmy.generic.cosh.cljs$core$IFn$_invoke$arity$1(b)),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic((-1),emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(a),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic.sinh.cljs$core$IFn$_invoke$arity$1(b)], 0)));
});
emmy.complex.impl.tan = (function emmy$complex$impl$tan(z){
var a = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),z.re);
var b = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),z.im);
var d = emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(a),emmy.generic.cosh.cljs$core$IFn$_invoke$arity$1(b));
return emmy.complex.impl.__GT_Complex(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(a),d),emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic.sinh.cljs$core$IFn$_invoke$arity$1(b),d));
});
emmy.complex.impl.cot = (function emmy$complex$impl$cot(z){
var a = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),z.re);
var b = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),z.im);
var d = emmy.generic._.cljs$core$IFn$_invoke$arity$2(emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(a),emmy.generic.cosh.cljs$core$IFn$_invoke$arity$1(b));
return emmy.complex.impl.__GT_Complex(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(a)),d),emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic.sinh.cljs$core$IFn$_invoke$arity$1(b),d));
});
emmy.complex.impl.sec = (function emmy$complex$impl$sec(z){
var a = z.re;
var b = z.im;
var d = emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic.cosh.cljs$core$IFn$_invoke$arity$1(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),b)),emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),a))),(2));
return emmy.complex.impl.__GT_Complex(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(a),emmy.generic.cosh.cljs$core$IFn$_invoke$arity$1(b)),d),emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(a),emmy.generic.sinh.cljs$core$IFn$_invoke$arity$1(b)),d));
});
emmy.complex.impl.csc = (function emmy$complex$impl$csc(z){
var a = z.re;
var b = z.im;
var d = emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic._.cljs$core$IFn$_invoke$arity$2(emmy.generic.cosh.cljs$core$IFn$_invoke$arity$1(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),b)),emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),a))),(2));
return emmy.complex.impl.__GT_Complex(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(a),emmy.generic.cosh.cljs$core$IFn$_invoke$arity$1(b)),d),emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic((-1),emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(a),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic.sinh.cljs$core$IFn$_invoke$arity$1(b)], 0)),d));
});
/**
 * Calculate the complex arc sine
 */
emmy.complex.impl.asin = (function emmy$complex$impl$asin(z){
var a = z.re;
var b = z.im;
var t1 = emmy.complex.impl.sqrt(emmy.complex.impl.__GT_Complex(emmy.generic._.cljs$core$IFn$_invoke$arity$variadic(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(b,b),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(a,a),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(-1)], 0)),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic((-2),a,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([b], 0))));
var t2 = emmy.complex.impl.log(emmy.complex.impl.__GT_Complex(emmy.generic._.cljs$core$IFn$_invoke$arity$2(t1.re,b),emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(t1.im,a)));
return emmy.complex.impl.__GT_Complex(t2.im,emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(t2.re));
});
/**
 * Calculate the complex arc cosine
 */
emmy.complex.impl.acos = (function emmy$complex$impl$acos(z){
var a = z.re;
var b = z.im;
var t1 = emmy.complex.impl.sqrt(emmy.complex.impl.__GT_Complex(emmy.generic._.cljs$core$IFn$_invoke$arity$variadic(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(b,b),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(a,a),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(-1)], 0)),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic((-2),a,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([b], 0))));
var t2 = emmy.complex.impl.log(emmy.complex.impl.__GT_Complex(emmy.generic._.cljs$core$IFn$_invoke$arity$2(t1.re,b),emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(t1.im,a)));
return emmy.complex.impl.__GT_Complex((emmy.complex.impl.PI_COLON_2 - t2.im),t2.re);
});
/**
 * Calculate the complex arctangent
 */
emmy.complex.impl.atan = (function emmy$complex$impl$atan(z){
var a = z.re;
var b = z.im;
if(cljs.core.truth_((function (){var and__5160__auto__ = emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(a);
if(cljs.core.truth_(and__5160__auto__)){
return emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(b);
} else {
return and__5160__auto__;
}
})())){
return emmy.complex.impl.__GT_Complex((0),Infinity);
} else {
if(cljs.core.truth_((function (){var and__5160__auto__ = emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(a);
if(cljs.core.truth_(and__5160__auto__)){
return emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(b));
} else {
return and__5160__auto__;
}
})())){
return emmy.complex.impl.__GT_Complex((0),-Infinity);
} else {
var d = emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(a,a),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(emmy.generic._.cljs$core$IFn$_invoke$arity$2((1),b)));
var t1 = emmy.complex.impl.log(emmy.complex.impl.__GT_Complex(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic._.cljs$core$IFn$_invoke$arity$variadic((1),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(b),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic.square.cljs$core$IFn$_invoke$arity$1(a)], 0)),d),emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((-2),a),d)));
return emmy.complex.impl.__GT_Complex(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(t1.im,(-2)),emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(t1.re,(2)));

}
}
});
/**
 * Calculate the complex arc cotangent.
 */
emmy.complex.impl.acot = (function emmy$complex$impl$acot(z){
var a = z.re;
var b = z.im;
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(b))){
return emmy.complex.impl.__GT_Complex(emmy.generic.atan.cljs$core$IFn$_invoke$arity$2((1),a),(0));
} else {
var d = emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic.square.cljs$core$IFn$_invoke$arity$1(a),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(b));
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(d))){
return emmy.complex.impl.atan(emmy.complex.impl.__GT_Complex((cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(a))?(0):emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(a,(0))),(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(b))?(0):emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(b),(0)))));
} else {
return emmy.complex.impl.atan(emmy.complex.impl.__GT_Complex(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(a,d),emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(b),d)));
}
}
});
/**
 * Calculate the complex arc secant.
 */
emmy.complex.impl.asec = (function emmy$complex$impl$asec(z){
if(cljs.core.truth_(emmy.complex.impl.zero_QMARK_(z))){
return emmy.complex.impl.__GT_Complex((0),Infinity);
} else {
var a = z.re;
var b = z.im;
var d = emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic.square.cljs$core$IFn$_invoke$arity$1(a),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(b));
return emmy.complex.impl.acos(emmy.complex.impl.__GT_Complex(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(a,d),emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(b),d)));
}
});
/**
 * Compute the complex arc cosecant.
 */
emmy.complex.impl.acsc = (function emmy$complex$impl$acsc(z){
if(cljs.core.truth_(emmy.complex.impl.zero_QMARK_(z))){
return emmy.complex.impl.__GT_Complex(emmy.complex.impl.PI_COLON_2,Infinity);
} else {
var a = z.re;
var b = z.im;
var d = emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic.square.cljs$core$IFn$_invoke$arity$1(a),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(b));
return emmy.complex.impl.asin(emmy.complex.impl.__GT_Complex(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(a,d),emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(b),d)));
}
});
/**
 * Calculate the complex hyperbolic sine
 */
emmy.complex.impl.sinh = (function emmy$complex$impl$sinh(z){
var a = z.re;
var b = z.im;
return emmy.complex.impl.__GT_Complex(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.generic.sinh.cljs$core$IFn$_invoke$arity$1(a),emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(b)),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.generic.cosh.cljs$core$IFn$_invoke$arity$1(a),emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(b)));
});
/**
 * Calculate the complex hyperbolic cosine
 */
emmy.complex.impl.cosh = (function emmy$complex$impl$cosh(z){
var a = z.re;
var b = z.im;
return emmy.complex.impl.__GT_Complex(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.generic.cosh.cljs$core$IFn$_invoke$arity$1(a),emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(b)),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.generic.sinh.cljs$core$IFn$_invoke$arity$1(a),emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(b)));
});
/**
 * Caclulate the complex hyperbolic tangent
 */
emmy.complex.impl.tanh = (function emmy$complex$impl$tanh(z){
var a = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),z.re);
var b = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),z.im);
var d = emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic.cosh.cljs$core$IFn$_invoke$arity$1(a),emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(b));
return emmy.complex.impl.__GT_Complex(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic.sinh.cljs$core$IFn$_invoke$arity$1(a),d),emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(b),d));
});
/**
 * Calculate the complex hyperbolic cotangent
 */
emmy.complex.impl.coth = (function emmy$complex$impl$coth(z){
var a = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),z.re);
var b = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),z.im);
var d = emmy.generic._.cljs$core$IFn$_invoke$arity$2(emmy.generic.cosh.cljs$core$IFn$_invoke$arity$1(a),emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(b));
return emmy.complex.impl.__GT_Complex(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic.sinh.cljs$core$IFn$_invoke$arity$1(a),d),emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(b)),d));
});
/**
 * Compute the complex hyperbolic cosecant.
 */
emmy.complex.impl.csch = (function emmy$complex$impl$csch(z){
var a = z.re;
var b = z.im;
var d = emmy.generic._.cljs$core$IFn$_invoke$arity$2(emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),b)),emmy.generic.cosh.cljs$core$IFn$_invoke$arity$1(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),a)));
return emmy.complex.impl.__GT_Complex(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic((-2),emmy.generic.sinh.cljs$core$IFn$_invoke$arity$1(a),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(b)], 0)),d),emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic((2),emmy.generic.cosh.cljs$core$IFn$_invoke$arity$1(a),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(b)], 0)),d));
});
/**
 * Calculate the complex hyperbolic secant.
 */
emmy.complex.impl.sech = (function emmy$complex$impl$sech(z){
var a = z.re;
var b = z.im;
var d = emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),b)),emmy.generic.cosh.cljs$core$IFn$_invoke$arity$1(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),a)));
return emmy.complex.impl.__GT_Complex(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic((2),emmy.generic.cosh.cljs$core$IFn$_invoke$arity$1(a),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(b)], 0)),d),emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic((-2),emmy.generic.sinh.cljs$core$IFn$_invoke$arity$1(a),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(b)], 0)),d));
});
/**
 * Calculate the arc hyperbolic sine.
 */
emmy.complex.impl.asinh = (function emmy$complex$impl$asinh(z){
var t = emmy.complex.impl.asin(emmy.complex.impl.__GT_Complex(z.im,emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(z.re)));
return emmy.complex.impl.__GT_Complex(emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(t.im),t.re);
});
/**
 * Compute the complex arc hyperbolic cosine
 */
emmy.complex.impl.acosh = (function emmy$complex$impl$acosh(z){
var a = emmy.complex.impl.acos(z);
var ra = a.re;
var ia = a.im;
if((ia < (0))){
return emmy.complex.impl.__GT_Complex((- ia),ra);
} else {
return emmy.complex.impl.__GT_Complex(ia,(- ra));
}
});
/**
 * Calculate the complex hyperbolic tangent.
 */
emmy.complex.impl.atanh = (function emmy$complex$impl$atanh(z){
var a = z.re;
var b = z.im;
var noIM = (function (){var and__5160__auto__ = (a > (1));
if(and__5160__auto__){
return emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(b);
} else {
return and__5160__auto__;
}
})();
var om = emmy.generic._.cljs$core$IFn$_invoke$arity$2((1),a);
var op = emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2((1),a);
var d = emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic.square.cljs$core$IFn$_invoke$arity$1(om),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(b));
var x = (cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(d))?emmy.complex.impl.__GT_Complex((((a === (-1)))?(0):emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(a,(0))),(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(b))?(0):emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(b,(0)))):emmy.complex.impl.__GT_Complex(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic._.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(op,om),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(b)),d),emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(b,om),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(op,b)),d)));
return emmy.complex.impl.__GT_Complex(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic.log.cljs$core$IFn$_invoke$arity$1(emmy.complex.impl.abs(x)),(2)),emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.complex.impl.arg(x),(cljs.core.truth_(noIM)?(-2):(2))));
});
/**
 * Calculate the complex arc hyperbolic cotangent.
 */
emmy.complex.impl.acoth = (function emmy$complex$impl$acoth(z){
if(cljs.core.truth_(emmy.complex.impl.zero_QMARK_(z))){
return emmy.complex.impl.__GT_Complex((0),emmy.complex.impl.PI_COLON_2);
} else {
var a = z.re;
var b = z.im;
var d = emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic.square.cljs$core$IFn$_invoke$arity$1(a),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(b));
return emmy.complex.impl.atanh(emmy.complex.impl.__GT_Complex(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(a,d),emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(b),d)));
}
});
/**
 * Calculate the complex arc hyperbolic cosecant.
 */
emmy.complex.impl.acsch = (function emmy$complex$impl$acsch(z){
var a = z.re;
var b = z.im;
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(b))){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(a))){
return emmy.complex.impl.__GT_Complex(Infinity,(0));
} else {
return emmy.complex.impl.__GT_Complex(emmy.generic.log.cljs$core$IFn$_invoke$arity$1(emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(a,emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic.square.cljs$core$IFn$_invoke$arity$1(a),(1))))),(0));
}
} else {
var d = emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic.square.cljs$core$IFn$_invoke$arity$1(a),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(b));
return emmy.complex.impl.asinh(emmy.complex.impl.__GT_Complex(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(a,d),emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(b),d)));
}
});
/**
 * Calculate the complex arc hyperbolic secant.
 */
emmy.complex.impl.asech = (function emmy$complex$impl$asech(z){
if(cljs.core.truth_(emmy.complex.impl.zero_QMARK_(z))){
return emmy.complex.impl.INFINITY;
} else {
var a = z.re;
var b = z.im;
var d = emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic.square.cljs$core$IFn$_invoke$arity$1(a),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(b));
return emmy.complex.impl.acosh(emmy.complex.impl.__GT_Complex(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(a,d),emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(b),d)));
}
});
/**
 * Calculate the complex inverse 1/z
 */
emmy.complex.impl.inverse = (function emmy$complex$impl$inverse(z){
if(cljs.core.truth_(emmy.complex.impl.zero_QMARK_(z))){
return emmy.complex.impl.INFINITY;
} else {
if(cljs.core.truth_(emmy.generic.infinite_QMARK_.cljs$core$IFn$_invoke$arity$1(z))){
return emmy.complex.impl.ZERO;
} else {
var a = z.re;
var b = z.im;
var d = emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(a,a),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(b,b));
return emmy.complex.impl.__GT_Complex(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(a,d),emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(b),d));

}
}
});
/**
 * Returns the complex conjugate
 */
emmy.complex.impl.conjugate = (function emmy$complex$impl$conjugate(z){
return emmy.complex.impl.__GT_Complex(z.re,emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(z.im));
});
/**
 * Gets the negated complex number
 */
emmy.complex.impl.neg = (function emmy$complex$impl$neg(z){
return emmy.complex.impl.__GT_Complex(emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(z.re),emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(z.im));
});
/**
 * Ceils the actual complex number
 */
emmy.complex.impl.ceil = (function emmy$complex$impl$ceil(var_args){
var G__66476 = arguments.length;
switch (G__66476) {
case 1:
return emmy.complex.impl.ceil.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.complex.impl.ceil.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.complex.impl.ceil.cljs$core$IFn$_invoke$arity$1 = (function (z){
return emmy.complex.impl.ceil.cljs$core$IFn$_invoke$arity$2(z,(0));
}));

(emmy.complex.impl.ceil.cljs$core$IFn$_invoke$arity$2 = (function (z,places){
var places__$1 = Math.pow((10),places);
return emmy.complex.impl.__GT_Complex((Math.ceil((z.re * places__$1)) / places__$1),(Math.ceil((z.im * places__$1)) / places__$1));
}));

(emmy.complex.impl.ceil.cljs$lang$maxFixedArity = 2);

/**
 * Floors the actual complex number
 */
emmy.complex.impl.floor = (function emmy$complex$impl$floor(var_args){
var G__66501 = arguments.length;
switch (G__66501) {
case 1:
return emmy.complex.impl.floor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.complex.impl.floor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.complex.impl.floor.cljs$core$IFn$_invoke$arity$1 = (function (z){
return emmy.complex.impl.floor.cljs$core$IFn$_invoke$arity$2(z,(0));
}));

(emmy.complex.impl.floor.cljs$core$IFn$_invoke$arity$2 = (function (z,places){
var places__$1 = Math.pow((10),places);
return emmy.complex.impl.__GT_Complex((Math.floor((z.re * places__$1)) / places__$1),(Math.floor((z.im * places__$1)) / places__$1));
}));

(emmy.complex.impl.floor.cljs$lang$maxFixedArity = 2);

/**
 * Constructs an identity-like complex number of the same kind as the example
 */
emmy.complex.impl.one_like = (function emmy$complex$impl$one_like(c){
return emmy.complex.impl.__GT_Complex(emmy.generic.one_like.cljs$core$IFn$_invoke$arity$1(c.re),emmy.generic.zero_like.cljs$core$IFn$_invoke$arity$1(c.im));
});
/**
 * Constructs an identity-like complex number of the same kind as the example
 */
emmy.complex.impl.zero_like = (function emmy$complex$impl$zero_like(c){
return emmy.complex.impl.__GT_Complex(emmy.generic.zero_like.cljs$core$IFn$_invoke$arity$1(c.re),emmy.generic.zero_like.cljs$core$IFn$_invoke$arity$1(c.im));
});

//# sourceMappingURL=emmy.complex.impl.js.map
