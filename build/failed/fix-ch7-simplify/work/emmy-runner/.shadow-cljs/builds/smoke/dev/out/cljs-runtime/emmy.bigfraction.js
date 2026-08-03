goog.provide('emmy.bigfraction');
goog.scope(function(){
  emmy.bigfraction.goog$module$goog$array = goog.module.get('goog.array');
});
emmy.bigfraction.ZERO = BigInt((0));
emmy.bigfraction.ONE = BigInt((1));
emmy.bigfraction.TEN = BigInt((10));
emmy.bigfraction._ONE = (- emmy.bigfraction.ONE);
/**
 * Returns true if x is a BigInt. There is a similar function in [[emmy.util]],
 * but we prefer that this library avoid that dependency.
 */
emmy.bigfraction.bigint_QMARK_ = (function emmy$bigfraction$bigint_QMARK_(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("bigint",goog.typeOf(x));
});



/**
* @constructor
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IComparable}
*/
emmy.bigfraction.Fraction = (function (n,d){
this.n = n;
this.d = d;
this.cljs$lang$protocol_mask$partition0$ = 4194304;
this.cljs$lang$protocol_mask$partition1$ = 2048;
});
(emmy.bigfraction.Fraction.prototype.valueOf = (function (){
var self__ = this;
var this$ = this;
return (emmy.bigfraction.__GT_real.cljs$core$IFn$_invoke$arity$1 ? emmy.bigfraction.__GT_real.cljs$core$IFn$_invoke$arity$1(this$) : emmy.bigfraction.__GT_real.call(null,this$));
}));

(emmy.bigfraction.Fraction.prototype.toString = (function (){
var self__ = this;
var _ = this;
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.n)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.d));
}));

(emmy.bigfraction.Fraction.prototype.cljs$core$IHash$_hash$arity$1 = (function (x){
var self__ = this;
var x__$1 = this;
return (cljs.core._hash(x__$1.n) ^ cljs.core._hash(x__$1.d));
}));

(emmy.bigfraction.Fraction.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
if((other instanceof emmy.bigfraction.Fraction)){
return (emmy.bigfraction.cmp.cljs$core$IFn$_invoke$arity$2 ? emmy.bigfraction.cmp.cljs$core$IFn$_invoke$arity$2(this$__$1,other) : emmy.bigfraction.cmp.call(null,this$__$1,other));
} else {
if(emmy.bigfraction.bigint_QMARK_(other)){
return cljs.core.compare(self__.n,(self__.d * other));
} else {
var o_value = other.valueOf();
return emmy.bigfraction.goog$module$goog$array.defaultCompare(this$__$1,o_value);

}
}
}));

(emmy.bigfraction.Fraction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","BigInt","js/BigInt",1825326704,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","BigInt","js/BigInt",1825326704,null)], null))], null);
}));

(emmy.bigfraction.Fraction.cljs$lang$type = true);

(emmy.bigfraction.Fraction.cljs$lang$ctorStr = "emmy.bigfraction/Fraction");

(emmy.bigfraction.Fraction.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"emmy.bigfraction/Fraction");
}));

/**
 * Positional factory function for emmy.bigfraction/Fraction.
 */
emmy.bigfraction.__GT_Fraction = (function emmy$bigfraction$__GT_Fraction(n,d){
return (new emmy.bigfraction.Fraction(n,d));
});

emmy.bigfraction.F_ONE = (new emmy.bigfraction.Fraction(emmy.bigfraction.ONE,emmy.bigfraction.ONE));
/**
 * Throws JS exception used to signal an attempt to construct a fraction
 * with zero denominator.
 */
emmy.bigfraction.division_by_zero = (function emmy$bigfraction$division_by_zero(){
throw Error("Fraction with zero denominator");
});
emmy.bigfraction.numerator = (function emmy$bigfraction$numerator(x){
return x.n;
});
emmy.bigfraction.denominator = (function emmy$bigfraction$denominator(x){
return x.d;
});
/**
 * Returns true iff `x` is a zero fraction.
 */
emmy.bigfraction.zero_QMARK_ = (function emmy$bigfraction$zero_QMARK_(x){
var a = x.n;
return (emmy.bigfraction.ZERO === a);
});
/**
 * Returns true iff `x` is a unit fraction.
 */
emmy.bigfraction.one_QMARK_ = (function emmy$bigfraction$one_QMARK_(x){
var a = x.n;
var b = x.d;
return (a === b);
});
emmy.bigfraction.eq = (function emmy$bigfraction$eq(x,y){
var a = x.n;
var b = x.d;
var c = y.n;
var d = y.d;
return (((a === c)) && ((b === d)));
});
/**
 * GCD assuming a and b are BigInts > 0
 */
emmy.bigfraction.bigint_gcd = (function emmy$bigfraction$bigint_gcd(a,b){
var a__$1 = a;
var b__$1 = b;
while(true){
if((b__$1 === emmy.bigfraction.ZERO)){
return a__$1;
} else {
var G__22346 = b__$1;
var G__22347 = (a__$1 % b__$1);
a__$1 = G__22346;
b__$1 = G__22347;
continue;
}
break;
}
});
emmy.bigfraction.bigint_abs = (function emmy$bigfraction$bigint_abs(a){
if((a < (0))){
return (emmy.bigfraction._ONE * a);
} else {
return a;
}
});
/**
 * Create a fraction with unit denominator.
 */
emmy.bigfraction.integer__GT_ = (function emmy$bigfraction$integer__GT_(n){
return emmy.bigfraction.__GT_Fraction(BigInt(n),emmy.bigfraction.ONE);
});
/**
 * Coerce a fraction to real by performing the division
 * in the floating point domain
 */
emmy.bigfraction.__GT_real = (function emmy$bigfraction$__GT_real(q){
return (Number(q.n) / Number(q.d));
});
/**
 * We assume we are given two BigInts, with b > 0. The GCD is divided out, and the
 * sign is carried in the numerator.
 */
emmy.bigfraction.__GT_normal_form = (function emmy$bigfraction$__GT_normal_form(a,b){
if((emmy.bigfraction.ZERO === b)){
emmy.bigfraction.division_by_zero();
} else {
}

var an = (a < (0));
var a__$1 = emmy.bigfraction.bigint_abs(a);
var bn = (b < (0));
var b__$1 = emmy.bigfraction.bigint_abs(b);
var g = emmy.bigfraction.bigint_gcd(a__$1,b__$1);
var neg = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(an,bn);
var abs_c = (a__$1 / g);
var c = ((neg)?(emmy.bigfraction._ONE * abs_c):abs_c);
var d = (b__$1 / g);
return emmy.bigfraction.__GT_Fraction(c,d);
});
/**
 * Produces a fraction in canonical form. Note that the canonical form of an integer is
 * an integer, so if `(one? b)` you just get a.
 */
emmy.bigfraction.make = (function emmy$bigfraction$make(a,b){
var a__$1 = BigInt(a);
var b__$1 = BigInt(b);
if(((0) === b__$1)){
emmy.bigfraction.division_by_zero();
} else {
}

return emmy.bigfraction.__GT_normal_form(a__$1,b__$1);
});
/**
 * Use the `js*` escape clause to get access to the JavaScript `**` operator,
 * which can exponentiate two BigInts exactly.
 */
emmy.bigfraction.js_expt = (function emmy$bigfraction$js_expt(a,b){
return (a ** b);
});
emmy.bigfraction.double_re = /(-?\d+)(\.(\d+))?([Ee]([+-]\d+))?/;
/**
 * Clojure converts the real to BigDecimal and rationalizes from that.
 * The JVM documentation explains that the BigDecimal value will correspond
 * to what would be printed for the double value. We attempt to do the
 * same thing here by converting to a string and converting from there.
 */
emmy.bigfraction.real__GT_ = (function emmy$bigfraction$real__GT_(x){
var s = x.toString();
var temp__5823__auto__ = cljs.core.re_matches(emmy.bigfraction.double_re,s);
if(cljs.core.truth_(temp__5823__auto__)){
var vec__22294 = temp__5823__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22294,(0),null);
var int$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22294,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22294,(2),null);
var frac = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22294,(3),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22294,(4),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22294,(5),null);
var scale = (parseInt((function (){var or__5162__auto__ = exp;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "0";
}
})()) - cljs.core.count((function (){var or__5162__auto__ = frac;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "";
}
})()));
var scale_neg = (scale < (0));
var mantissa = BigInt((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(int$)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frac)));
var exponent = BigInt(emmy.bigfraction.js_expt(emmy.bigfraction.TEN,BigInt(Math.abs(scale))));
if(scale_neg){
return emmy.bigfraction.__GT_normal_form(mantissa,exponent);
} else {
return (new emmy.bigfraction.Fraction((mantissa * exponent),emmy.bigfraction.ONE));
}
} else {
throw Error((""+"Cannot convert "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)+" to ratio."));
}
});
/**
 * Absolute value of the fraction `x`.
 */
emmy.bigfraction.abs = (function emmy$bigfraction$abs(x){
var n = x.n;
var d = x.d;
if((n < (0))){
return emmy.bigfraction.__GT_Fraction((emmy.bigfraction._ONE * n),d);
} else {
return x;
}
});
/**
 * Negation of the fraction `x`.
 */
emmy.bigfraction.neg = (function emmy$bigfraction$neg(x){
var n = x.n;
var d = x.d;
return emmy.bigfraction.__GT_Fraction((emmy.bigfraction._ONE * n),d);
});
/**
 * True if $x<0$.
 */
emmy.bigfraction.neg_QMARK_ = (function emmy$bigfraction$neg_QMARK_(x){
return (x.n < (0));
});
/**
 * Returns the sum of `x` and `y`.
 */
emmy.bigfraction.add = (function emmy$bigfraction$add(x,y){
var a = x.n;
var b = x.d;
var c = y.n;
var d = y.d;
return emmy.bigfraction.__GT_normal_form(((a * d) + (b * c)),(b * d));
});
/**
 * Returns the difference of `x` and `y`.
 */
emmy.bigfraction.sub = (function emmy$bigfraction$sub(x,y){
var a = x.n;
var b = x.d;
var c = y.n;
var d = y.d;
return emmy.bigfraction.__GT_normal_form(((a * d) - (b * c)),(b * d));
});
/**
 * Returns the product of `x` and `y`.
 */
emmy.bigfraction.mul = (function emmy$bigfraction$mul(x,y){
var a = x.n;
var b = x.d;
var c = y.n;
var d = y.d;
return emmy.bigfraction.__GT_normal_form((a * c),(b * d));
});
/**
 * Returns the quotient of `x` and `y`.
 */
emmy.bigfraction.div = (function emmy$bigfraction$div(x,y){
var a = x.n;
var b = x.d;
var c = y.n;
var d = y.d;
return emmy.bigfraction.__GT_normal_form((a * d),(b * c));
});
/**
 * Returns the reciprocal of `x`, but throws if $x=0$.
 */
emmy.bigfraction.invert = (function emmy$bigfraction$invert(x){
var a = x.n;
var b = x.d;
var neg = (a < (0));
if((emmy.bigfraction.ZERO === a)){
emmy.bigfraction.division_by_zero();
} else {
}

if(neg){
return emmy.bigfraction.__GT_Fraction((emmy.bigfraction._ONE * b),(emmy.bigfraction._ONE * a));
} else {
return emmy.bigfraction.__GT_Fraction(b,a);
}
});
/**
 * Compares the fractions `x` and `y`, returning -1, 0, or 1.
 */
emmy.bigfraction.cmp = (function emmy$bigfraction$cmp(x,y){
var a = x.n;
var b = x.d;
var c = y.n;
var d = y.d;
var s = ((a * d) - (b * c));
if((s < (0))){
return (-1);
} else {
if((s > (0))){
return (1);
} else {
return (0);

}
}
});
/**
 * Raises the fraction `x` to the integer power `n`.
 */
emmy.bigfraction.integer_power = (function emmy$bigfraction$integer_power(x,n){
var a = x.n;
var b = x.d;
var N = BigInt(n);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,emmy.bigfraction.ZERO)){
return emmy.bigfraction.F_ONE;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,emmy.bigfraction.ONE)){
return x;
} else {
if((N > emmy.bigfraction.ZERO)){
return emmy.bigfraction.__GT_normal_form(emmy.bigfraction.js_expt(a,N),emmy.bigfraction.js_expt(b,N));
} else {
return emmy.bigfraction.__GT_normal_form(emmy.bigfraction.js_expt(b,(- N)),emmy.bigfraction.js_expt(a,(- N)));

}
}
}
});
/**
 * If the fraction has a unit denominator, return the numerator, else the fraction.
 */
emmy.bigfraction.promote = (function emmy$bigfraction$promote(x){
if((emmy.bigfraction.ONE === x.d)){
return x.n;
} else {
return x;
}
});
/**
 * Ceiling. Result is a BigInt.
 */
emmy.bigfraction.ceil = (function emmy$bigfraction$ceil(x){
var a = x.n;
var b = x.d;
return ((a / b) + (((((a < (0))) || (((a % b) === emmy.bigfraction.ZERO))))?emmy.bigfraction.ZERO:emmy.bigfraction.ONE));
});
/**
 * Floor. Result is a BigInt.
 */
emmy.bigfraction.floor = (function emmy$bigfraction$floor(x){
var a = x.n;
var b = x.d;
return ((a / b) - (((((a > (0))) || (((a % b) === emmy.bigfraction.ZERO))))?emmy.bigfraction.ZERO:emmy.bigfraction.ONE));
});
/**
 * Fractions form a field, so somewhat dubiously the function returns
 * the largest integer N for which $Ny\le x$.
 */
emmy.bigfraction.quotient = (function emmy$bigfraction$quotient(x,y){
var z = emmy.bigfraction.div(x,y);
if(emmy.bigfraction.neg_QMARK_(z)){
return emmy.bigfraction.ceil(z);
} else {
return emmy.bigfraction.floor(z);
}
});
/**
 * If $q$ is `(quotient x y)`, returns $x-qy$.
 */
emmy.bigfraction.remainder = (function emmy$bigfraction$remainder(x,y){
return emmy.bigfraction.sub(x,emmy.bigfraction.mul((new emmy.bigfraction.Fraction(emmy.bigfraction.quotient(x,y),emmy.bigfraction.ONE)),y));
});
emmy.bigfraction.gcd = (function emmy$bigfraction$gcd(x,y){
var a = x.n;
var b = x.d;
var c = y.n;
var d = y.d;
return emmy.bigfraction.abs(emmy.bigfraction.__GT_normal_form((emmy.bigfraction.bigint_gcd(a,c) * emmy.bigfraction.bigint_gcd(b,d)),(b * d)));
});

//# sourceMappingURL=emmy.bigfraction.js.map
