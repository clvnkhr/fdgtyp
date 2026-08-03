goog.provide('emmy.modint');

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {emmy.value.IKind}
 * @implements {cljs.core.IPrintWithWriter}
*/
emmy.modint.ModInt = (function (i,m){
this.i = i;
this.m = m;
this.cljs$lang$protocol_mask$partition0$ = 2149580800;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(emmy.modint.ModInt.prototype.emmy$value$IKind$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.modint.ModInt.prototype.emmy$value$IKind$kind$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973);
}));

(emmy.modint.ModInt.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
return (emmy.modint.mod_COLON__EQ_.cljs$core$IFn$_invoke$arity$2 ? emmy.modint.mod_COLON__EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1,that) : emmy.modint.mod_COLON__EQ_.call(null,this$__$1,that));
}));

(emmy.modint.ModInt.prototype.toString = (function (){
var self__ = this;
var _ = this;
return (""+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.i)+" mod "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.m)+"]");
}));

(emmy.modint.ModInt.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,_){
var self__ = this;
var x__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#object[emmy.modint.ModInt \"",x__$1.toString(),"\"]"], 0));
}));

(emmy.modint.ModInt.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)], null);
}));

(emmy.modint.ModInt.cljs$lang$type = true);

(emmy.modint.ModInt.cljs$lang$ctorStr = "emmy.modint/ModInt");

(emmy.modint.ModInt.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"emmy.modint/ModInt");
}));

/**
 * Positional factory function for emmy.modint/ModInt.
 */
emmy.modint.__GT_ModInt = (function emmy$modint$__GT_ModInt(i,m){
return (new emmy.modint.ModInt(i,m));
});

/**
 * Returns true if `x` is an instance of [[ModInt]], false otherwise.
 */
emmy.modint.modint_QMARK_ = (function emmy$modint$modint_QMARK_(x){
return (x instanceof emmy.modint.ModInt);
});
emmy.modint.residue = (function emmy$modint$residue(x){
return x.i;
});
emmy.modint.modulus = (function emmy$modint$modulus(x){
return x.m;
});
emmy.modint.mod_COLON__EQ_ = (function emmy$modint$mod_COLON__EQ_(this$,that){
if(emmy.modint.modint_QMARK_(that)){
var and__5160__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.modint.modulus(this$),emmy.modint.modulus(that));
if(and__5160__auto__){
return emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.modint.residue(this$),emmy.modint.residue(that));
} else {
return and__5160__auto__;
}
} else {
if(emmy.value.number_QMARK_(that)){
return emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.modint.residue(this$),emmy.generic.modulo.cljs$core$IFn$_invoke$arity$2(that,emmy.modint.modulus(this$)));
} else {
return false;

}
}
});
/**
 * Returns an instance of [[ModInt]] that represents integer `i` with integral
 *   modulus `m`.
 */
emmy.modint.make = (function emmy$modint$make(i,m){
if(emmy.value.integral_QMARK_(i)){
} else {
throw (new Error("Assert failed: (v/integral? i)"));
}

if(emmy.value.integral_QMARK_(m)){
} else {
throw (new Error("Assert failed: (v/integral? m)"));
}

return emmy.modint.__GT_ModInt(emmy.generic.modulo.cljs$core$IFn$_invoke$arity$2(i,m),m);
});
emmy.modint.modular_binop = (function emmy$modint$modular_binop(op){
return (function (a,b){
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.modint.modulus(a),emmy.modint.modulus(b))))){
return emmy.util.arithmetic_ex("unequal moduli");
} else {
return emmy.modint.make((function (){var G__32608 = emmy.modint.residue(a);
var G__32609 = emmy.modint.residue(b);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__32608,G__32609) : op.call(null,G__32608,G__32609));
})(),emmy.modint.modulus(a));
}
});
});
/**
 * Modular inverse. JVM implementation uses the native BigInt implementation.
 */
emmy.modint.invert = (function emmy$modint$invert(var_args){
var G__32617 = arguments.length;
switch (G__32617) {
case 1:
return emmy.modint.invert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.modint.invert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.modint.invert.cljs$core$IFn$_invoke$arity$1 = (function (m){
return emmy.modint.invert.cljs$core$IFn$_invoke$arity$2(emmy.modint.residue(m),emmy.modint.modulus(m));
}));

(emmy.modint.invert.cljs$core$IFn$_invoke$arity$2 = (function (i,modulus){
var vec__32621 = emmy.euclid.extended_gcd(i,modulus);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32621,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32621,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32621,(2),null);
if((g < (2))){
return emmy.modint.make(a,modulus);
} else {
return emmy.util.arithmetic_ex((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)+" is not invertible mod "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(modulus)));
}
}));

(emmy.modint.invert.cljs$lang$maxFixedArity = 2);

/**
 * Modular exponentiation, more efficient on the JVM.
 */
emmy.modint.mod_expt = (function emmy$modint$mod_expt(base,pow,modulus){
return emmy.modint.__GT_ModInt(Number(emmy.generic.modulo.cljs$core$IFn$_invoke$arity$2(emmy.generic.expt.cljs$core$IFn$_invoke$arity$2(emmy.util.bigint(base),emmy.util.bigint(pow)),modulus)),modulus);
});
/**
 * [Chinese Remainder Algorithm](https://en.wikipedia.org/wiki/Chinese_remainder_theorem).
 * 
 *   Accepts a sequence of [[ModInt]] instances (where the `modulus` of
 *   all [[ModInt]] instances are relatively prime), and returns a [[ModInt]] `x`
 *   such that `(residue input) == (mod x (modulus input))`.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (let [a1 (m/make 2 5)
 *      a2 (m/make 3 13)]
 *  [(= 42 (chinese-remainder a1 a2))
 *   (= (residue a1) (mod cr (modulus a1)))
 *   (= (residue a2) (mod cr (modulus a2)))])
 *   ;;=> [true true true]
 *   ```
 */
emmy.modint.chinese_remainder = (function emmy$modint$chinese_remainder(var_args){
var args__5903__auto__ = [];
var len__5897__auto___32812 = arguments.length;
var i__5898__auto___32813 = (0);
while(true){
if((i__5898__auto___32813 < len__5897__auto___32812)){
args__5903__auto__.push((arguments[i__5898__auto___32813]));

var G__32814 = (i__5898__auto___32813 + (1));
i__5898__auto___32813 = G__32814;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return emmy.modint.chinese_remainder.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(emmy.modint.chinese_remainder.cljs$core$IFn$_invoke$arity$variadic = (function (modints){
var prod = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(emmy.modint.modulus),emmy.generic._STAR_,modints);
var xform = cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (mi){
var i = emmy.modint.residue(mi);
var m = emmy.modint.modulus(mi);
var c = emmy.generic.quotient.cljs$core$IFn$_invoke$arity$2(prod,m);
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(i,c,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.modint.residue(emmy.modint.invert.cljs$core$IFn$_invoke$arity$2(c,m))], 0));
}));
return emmy.generic.modulo.cljs$core$IFn$_invoke$arity$2(cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(xform,emmy.generic._PLUS_,modints),prod);
}));

(emmy.modint.chinese_remainder.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(emmy.modint.chinese_remainder.cljs$lang$applyTo = (function (seq32629){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32629));
}));

emmy.modint.add = emmy.modint.modular_binop(emmy.generic.add);
emmy.modint.sub = emmy.modint.modular_binop(emmy.generic.sub);
emmy.modint.mul = emmy.modint.modular_binop(emmy.generic.mul);
emmy.modint.remainder = emmy.modint.modular_binop(emmy.generic.remainder);
emmy.modint.modulo = emmy.modint.modular_binop(emmy.generic.modulo);
emmy.modint.div = (function emmy$modint$div(a,b){
return emmy.modint.mul(a,emmy.modint.invert.cljs$core$IFn$_invoke$arity$1(b));
});
emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","number","emmy.value/number",547788979),new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (l,r){
return emmy.modint.mod_COLON__EQ_(r,l);
}));
emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973),new cljs.core.Keyword("emmy.value","number","emmy.value/number",547788979)], null),(function (l,r){
return emmy.modint.mod_COLON__EQ_(l,r);
}));
emmy.generic.zero_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a){
return emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(a.i);
}));
emmy.generic.one_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a){
return emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(a.i);
}));
emmy.generic.identity_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a){
return emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(a.i);
}));
emmy.generic.zero_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a){
return (new emmy.modint.ModInt(emmy.generic.zero_like.cljs$core$IFn$_invoke$arity$1(a.i),a.m));
}));
emmy.generic.one_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a){
return (new emmy.modint.ModInt(emmy.generic.one_like.cljs$core$IFn$_invoke$arity$1(a.i),a.m));
}));
emmy.generic.identity_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a){
return (new emmy.modint.ModInt(emmy.generic.one_like.cljs$core$IFn$_invoke$arity$1(a.i),a.m));
}));
emmy.generic.freeze.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"modint","modint",-1355832379,null),(new cljs.core.List(null,a.i,(new cljs.core.List(null,a.m,null,(1),null)),(2),null)),(3),null));
}));
emmy.generic.exact_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (_){
return true;
}));
emmy.generic.integer_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a){
return a.i;
}));
emmy.generic.fractional_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (_){
return (0);
}));
emmy.generic.floor.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a){
return a;
}));
emmy.generic.ceiling.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a){
return a;
}));
emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973),new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a,b){
return emmy.modint.add(a,b);
}));
emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973),new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a,b){
return emmy.modint.mul(a,b);
}));
emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973),new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a,b){
return emmy.modint.div(a,b);
}));
emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973),new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a,b){
return emmy.modint.sub(a,b);
}));
emmy.generic.negate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a){
return emmy.modint.make(emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(emmy.modint.residue(a)),emmy.modint.modulus(a));
}));
emmy.generic.invert.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a){
return emmy.modint.invert.cljs$core$IFn$_invoke$arity$1(a);
}));
emmy.generic.magnitude.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a){
return emmy.generic.modulo.cljs$core$IFn$_invoke$arity$2(emmy.modint.residue(a),emmy.modint.modulus(a));
}));
emmy.generic.abs.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a){
var i = emmy.modint.residue(a);
if(cljs.core.truth_(emmy.generic.negative_QMARK_.cljs$core$IFn$_invoke$arity$1(i))){
return emmy.modint.make(i,emmy.modint.modulus(a));
} else {
return a;
}
}));
emmy.generic.quotient.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973),new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a,b){
return emmy.modint.mul(a,emmy.modint.invert.cljs$core$IFn$_invoke$arity$1(b));
}));
emmy.generic.remainder.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973),new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a,b){
return emmy.modint.remainder(a,b);
}));
emmy.generic.modulo.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973),new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a,b){
return emmy.modint.modulo(a,b);
}));
emmy.generic.exact_divide.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973),new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a,b){
return emmy.modint.mul(a,emmy.modint.invert.cljs$core$IFn$_invoke$arity$1(b));
}));
emmy.generic.negative_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a){
return emmy.generic.negative_QMARK_.cljs$core$IFn$_invoke$arity$1(emmy.modint.residue(a));
}));
emmy.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786),new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a,b){
return emmy.modint.mod_expt(a,emmy.modint.residue(b),emmy.modint.modulus(b));
}));
emmy.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973),new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786)], null),(function (a,b){
return emmy.modint.mod_expt(emmy.modint.residue(a),b,emmy.modint.modulus(a));
}));
emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973),new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a,b){
return emmy.modint.div(b,a);
}));
emmy.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973),new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a,b){
return emmy.modint.div(a,b);
}));
var seq__32704_32838 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.generic.add,emmy.generic.mul,emmy.generic.sub], null));
var chunk__32705_32839 = null;
var count__32706_32840 = (0);
var i__32707_32841 = (0);
while(true){
if((i__32707_32841 < count__32706_32840)){
var op_32842 = chunk__32705_32839.cljs$core$IIndexed$_nth$arity$2(null,i__32707_32841);
op_32842.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786),new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),((function (seq__32704_32838,chunk__32705_32839,count__32706_32840,i__32707_32841,op_32842){
return (function (a,b){
return emmy.modint.make((function (){var G__32735 = a;
var G__32736 = emmy.modint.residue(b);
return (op_32842.cljs$core$IFn$_invoke$arity$2 ? op_32842.cljs$core$IFn$_invoke$arity$2(G__32735,G__32736) : op_32842.call(null,G__32735,G__32736));
})(),emmy.modint.modulus(b));
});})(seq__32704_32838,chunk__32705_32839,count__32706_32840,i__32707_32841,op_32842))
);

op_32842.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973),new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786)], null),((function (seq__32704_32838,chunk__32705_32839,count__32706_32840,i__32707_32841,op_32842){
return (function (a,b){
return emmy.modint.make((function (){var G__32740 = emmy.modint.residue(a);
var G__32741 = b;
return (op_32842.cljs$core$IFn$_invoke$arity$2 ? op_32842.cljs$core$IFn$_invoke$arity$2(G__32740,G__32741) : op_32842.call(null,G__32740,G__32741));
})(),emmy.modint.modulus(a));
});})(seq__32704_32838,chunk__32705_32839,count__32706_32840,i__32707_32841,op_32842))
);


var G__32846 = seq__32704_32838;
var G__32847 = chunk__32705_32839;
var G__32848 = count__32706_32840;
var G__32849 = (i__32707_32841 + (1));
seq__32704_32838 = G__32846;
chunk__32705_32839 = G__32847;
count__32706_32840 = G__32848;
i__32707_32841 = G__32849;
continue;
} else {
var temp__5825__auto___32850 = cljs.core.seq(seq__32704_32838);
if(temp__5825__auto___32850){
var seq__32704_32851__$1 = temp__5825__auto___32850;
if(cljs.core.chunked_seq_QMARK_(seq__32704_32851__$1)){
var c__5694__auto___32852 = cljs.core.chunk_first(seq__32704_32851__$1);
var G__32853 = cljs.core.chunk_rest(seq__32704_32851__$1);
var G__32854 = c__5694__auto___32852;
var G__32855 = cljs.core.count(c__5694__auto___32852);
var G__32856 = (0);
seq__32704_32838 = G__32853;
chunk__32705_32839 = G__32854;
count__32706_32840 = G__32855;
i__32707_32841 = G__32856;
continue;
} else {
var op_32858 = cljs.core.first(seq__32704_32851__$1);
op_32858.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786),new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),((function (seq__32704_32838,chunk__32705_32839,count__32706_32840,i__32707_32841,op_32858,seq__32704_32851__$1,temp__5825__auto___32850){
return (function (a,b){
return emmy.modint.make((function (){var G__32744 = a;
var G__32745 = emmy.modint.residue(b);
return (op_32858.cljs$core$IFn$_invoke$arity$2 ? op_32858.cljs$core$IFn$_invoke$arity$2(G__32744,G__32745) : op_32858.call(null,G__32744,G__32745));
})(),emmy.modint.modulus(b));
});})(seq__32704_32838,chunk__32705_32839,count__32706_32840,i__32707_32841,op_32858,seq__32704_32851__$1,temp__5825__auto___32850))
);

op_32858.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973),new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786)], null),((function (seq__32704_32838,chunk__32705_32839,count__32706_32840,i__32707_32841,op_32858,seq__32704_32851__$1,temp__5825__auto___32850){
return (function (a,b){
return emmy.modint.make((function (){var G__32746 = emmy.modint.residue(a);
var G__32747 = b;
return (op_32858.cljs$core$IFn$_invoke$arity$2 ? op_32858.cljs$core$IFn$_invoke$arity$2(G__32746,G__32747) : op_32858.call(null,G__32746,G__32747));
})(),emmy.modint.modulus(a));
});})(seq__32704_32838,chunk__32705_32839,count__32706_32840,i__32707_32841,op_32858,seq__32704_32851__$1,temp__5825__auto___32850))
);


var G__32860 = cljs.core.next(seq__32704_32851__$1);
var G__32861 = null;
var G__32862 = (0);
var G__32863 = (0);
seq__32704_32838 = G__32860;
chunk__32705_32839 = G__32861;
count__32706_32840 = G__32862;
i__32707_32841 = G__32863;
continue;
}
} else {
}
}
break;
}
var seq__32748_32864 = cljs.core.seq(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.generic.div,emmy.generic.solve_linear,emmy.generic.solve_linear_right,emmy.generic.quotient,emmy.generic.remainder,emmy.generic.exact_divide], null));
var chunk__32749_32865 = null;
var count__32750_32866 = (0);
var i__32751_32867 = (0);
while(true){
if((i__32751_32867 < count__32750_32866)){
var op_32868 = chunk__32749_32865.cljs$core$IIndexed$_nth$arity$2(null,i__32751_32867);
op_32868.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786),new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),((function (seq__32748_32864,chunk__32749_32865,count__32750_32866,i__32751_32867,op_32868){
return (function (a,b){
var G__32766 = emmy.modint.make(a,emmy.modint.modulus(b));
var G__32767 = b;
return (op_32868.cljs$core$IFn$_invoke$arity$2 ? op_32868.cljs$core$IFn$_invoke$arity$2(G__32766,G__32767) : op_32868.call(null,G__32766,G__32767));
});})(seq__32748_32864,chunk__32749_32865,count__32750_32866,i__32751_32867,op_32868))
);

op_32868.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973),new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786)], null),((function (seq__32748_32864,chunk__32749_32865,count__32750_32866,i__32751_32867,op_32868){
return (function (a,b){
var G__32775 = a;
var G__32776 = emmy.modint.make(b,emmy.modint.modulus(a));
return (op_32868.cljs$core$IFn$_invoke$arity$2 ? op_32868.cljs$core$IFn$_invoke$arity$2(G__32775,G__32776) : op_32868.call(null,G__32775,G__32776));
});})(seq__32748_32864,chunk__32749_32865,count__32750_32866,i__32751_32867,op_32868))
);


var G__32869 = seq__32748_32864;
var G__32870 = chunk__32749_32865;
var G__32871 = count__32750_32866;
var G__32872 = (i__32751_32867 + (1));
seq__32748_32864 = G__32869;
chunk__32749_32865 = G__32870;
count__32750_32866 = G__32871;
i__32751_32867 = G__32872;
continue;
} else {
var temp__5825__auto___32875 = cljs.core.seq(seq__32748_32864);
if(temp__5825__auto___32875){
var seq__32748_32876__$1 = temp__5825__auto___32875;
if(cljs.core.chunked_seq_QMARK_(seq__32748_32876__$1)){
var c__5694__auto___32877 = cljs.core.chunk_first(seq__32748_32876__$1);
var G__32881 = cljs.core.chunk_rest(seq__32748_32876__$1);
var G__32882 = c__5694__auto___32877;
var G__32883 = cljs.core.count(c__5694__auto___32877);
var G__32884 = (0);
seq__32748_32864 = G__32881;
chunk__32749_32865 = G__32882;
count__32750_32866 = G__32883;
i__32751_32867 = G__32884;
continue;
} else {
var op_32885 = cljs.core.first(seq__32748_32876__$1);
op_32885.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786),new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),((function (seq__32748_32864,chunk__32749_32865,count__32750_32866,i__32751_32867,op_32885,seq__32748_32876__$1,temp__5825__auto___32875){
return (function (a,b){
var G__32781 = emmy.modint.make(a,emmy.modint.modulus(b));
var G__32782 = b;
return (op_32885.cljs$core$IFn$_invoke$arity$2 ? op_32885.cljs$core$IFn$_invoke$arity$2(G__32781,G__32782) : op_32885.call(null,G__32781,G__32782));
});})(seq__32748_32864,chunk__32749_32865,count__32750_32866,i__32751_32867,op_32885,seq__32748_32876__$1,temp__5825__auto___32875))
);

op_32885.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973),new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786)], null),((function (seq__32748_32864,chunk__32749_32865,count__32750_32866,i__32751_32867,op_32885,seq__32748_32876__$1,temp__5825__auto___32875){
return (function (a,b){
var G__32784 = a;
var G__32785 = emmy.modint.make(b,emmy.modint.modulus(a));
return (op_32885.cljs$core$IFn$_invoke$arity$2 ? op_32885.cljs$core$IFn$_invoke$arity$2(G__32784,G__32785) : op_32885.call(null,G__32784,G__32785));
});})(seq__32748_32864,chunk__32749_32865,count__32750_32866,i__32751_32867,op_32885,seq__32748_32876__$1,temp__5825__auto___32875))
);


var G__32889 = cljs.core.next(seq__32748_32876__$1);
var G__32890 = null;
var G__32891 = (0);
var G__32892 = (0);
seq__32748_32864 = G__32889;
chunk__32749_32865 = G__32890;
count__32750_32866 = G__32891;
i__32751_32867 = G__32892;
continue;
}
} else {
}
}
break;
}

//# sourceMappingURL=emmy.modint.js.map
