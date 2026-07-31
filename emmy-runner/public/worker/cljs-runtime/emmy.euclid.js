import "./cljs_env.js";
import "./cljs.core.js";
import "./emmy.generic.js";
import "./emmy.value.js";
goog.provide('emmy.euclid');
/**
 * Returns a vector containing the [greatest common
 *   divisor](https://en.wikipedia.org/wiki/Greatest_common_divisor) and
 *   the [Bézout coefficients](https://en.wikipedia.org/wiki/Bézout%27s_identity)
 *   corresponding to the inputs `a` and `b`.
 * 
 *   For more info, see the Wikipedia article on the [Extended Euclidean
 *   algorithm](http://en.wikipedia.org/wiki/Extended_Euclidean_algorithm).
 */
emmy.euclid.extended_gcd = (function emmy$euclid$extended_gcd(a,b){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(a))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.generic.abs.cljs$core$IFn$_invoke$arity$1(b),(0),(1)], null);
} else {
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(b))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.generic.abs.cljs$core$IFn$_invoke$arity$1(a),(1),(0)], null);
} else {
var s = (0);
var s0 = (1);
var t = (1);
var t0 = (0);
var r = emmy.generic.abs.cljs$core$IFn$_invoke$arity$1(b);
var r0 = emmy.generic.abs.cljs$core$IFn$_invoke$arity$1(a);
while(true){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(r))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r0,s0,t0], null);
} else {
var q = emmy.generic.quotient.cljs$core$IFn$_invoke$arity$2(r0,r);
var G__66341 = emmy.generic._.cljs$core$IFn$_invoke$arity$2(s0,emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(q,s));
var G__66342 = s;
var G__66343 = emmy.generic._.cljs$core$IFn$_invoke$arity$2(t0,emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(q,t));
var G__66344 = t;
var G__66345 = emmy.generic._.cljs$core$IFn$_invoke$arity$2(r0,emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(q,r));
var G__66346 = r;
s = G__66341;
s0 = G__66342;
t = G__66343;
t0 = G__66344;
r = G__66345;
r0 = G__66346;
continue;
}
break;
}

}
}
});
/**
 * Returns the [greatest common
 *   divisor](https://en.wikipedia.org/wiki/Greatest_common_divisor) of the two
 *   inputs `a` and `b`.
 */
emmy.euclid.gcd = (function emmy$euclid$gcd(a,b){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(a))){
return emmy.generic.abs.cljs$core$IFn$_invoke$arity$1(b);
} else {
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(b))){
return emmy.generic.abs.cljs$core$IFn$_invoke$arity$1(a);
} else {
if(cljs.core.truth_((function (){var or__5162__auto__ = emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(a,b);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(a,emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(b));
}
})())){
return emmy.generic.abs.cljs$core$IFn$_invoke$arity$1(a);
} else {
if((!(((emmy.value.integral_QMARK_(a)) && (emmy.value.integral_QMARK_(b)))))){
return (1);
} else {
var a__$1 = emmy.generic.abs.cljs$core$IFn$_invoke$arity$1(a);
var b__$1 = emmy.generic.abs.cljs$core$IFn$_invoke$arity$1(b);
while(true){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(b__$1))){
return a__$1;
} else {
var G__66353 = b__$1;
var G__66354 = emmy.generic.remainder.cljs$core$IFn$_invoke$arity$2(a__$1,b__$1);
a__$1 = G__66353;
b__$1 = G__66354;
continue;
}
break;
}

}
}
}
}
});
emmy.generic.gcd.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (a,b){
return emmy.euclid.gcd(a,b);
}));

//# sourceMappingURL=emmy.euclid.js.map
