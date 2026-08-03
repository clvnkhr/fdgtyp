goog.provide('emmy.numerical.quadrature.infinite');
/**
 * Populates the supplied `opts` dictionary with defaults required by
 *   `evaluate-infinite-integral`.
 */
emmy.numerical.quadrature.infinite.fill_defaults = (function emmy$numerical$quadrature$infinite$fill_defaults(opts){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"infinite-breakpoint","infinite-breakpoint",1403428770),(1)], null),opts], 0));
});
/**
 * Accepts:
 * 
 *   - An `integrator` (function of `f`, `a`, `b` and `opts`)
 *   - `a` and `b`, the endpoints of an integration interval, and
 *   - (optionally) `opts`, a dict of integrator-configuring options
 * 
 *   And returns a new integrator that's able to handle infinite endpoints. (If you
 *   don't specify `##-Inf` or `##Inf`, the returned integrator will fall through
 *   to the original `integrator` implementation.)
 * 
 *   All `opts` will be passed through to the supplied `integrator`.
 * 
 *   ## Optional arguments relevant to `improper`:
 * 
 *   `:infinite-breakpoint`: If either `a` or `b` is equal to `##Inf` or `##-Inf`,
 *   this function will internally perform a change of variables on the regions
 *   from:
 * 
 *   ```
 *   (:infinite-breakpoint opts) => ##Inf
 *   ```
 * 
 *   or
 * 
 *   ```
 *   ##-Inf => (- (:infinite-breakpoint opts))
 *   ```
 * 
 *   using $u(t) = {1 \over t}$, as described in the `infinitize` method of
 *   `substitute.cljc`. This has the effect of mapping the infinite endpoint to an
 *   open interval endpoint of 0.
 * 
 *   Where should you choose the breakpoint? According to Press in Numerical
 *   Recipes, section 4.4: "At a sufficiently large positive value so that the
 *   function funk is at least beginning to approach its asymptotic decrease to
 *   zero value at infinity."
 * 
 *   References:
 * 
 *   - Press, Numerical Recipes (p138), [Section 4.4](http://phys.uri.edu/nigh/NumRec/bookfpdf/f4-4.pdf)
 */
emmy.numerical.quadrature.infinite.improper = (function emmy$numerical$quadrature$infinite$improper(integrator){
return (function() {
var emmy$numerical$quadrature$infinite$improper_$_rec = null;
var emmy$numerical$quadrature$infinite$improper_$_rec__3 = (function (f,a,b){
return emmy$numerical$quadrature$infinite$improper_$_rec.cljs$core$IFn$_invoke$arity$4(f,a,b,cljs.core.PersistentArrayMap.EMPTY);
});
var emmy$numerical$quadrature$infinite$improper_$_rec__4 = (function (f,a,b,opts){
var map__56805 = emmy.numerical.quadrature.infinite.fill_defaults(opts);
var map__56805__$1 = cljs.core.__destructure_map(map__56805);
var opts__$1 = map__56805__$1;
var infinite_breakpoint = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56805__$1,new cljs.core.Keyword(null,"infinite-breakpoint","infinite-breakpoint",1403428770));
var call = (function (integrate,l,r,interval){
var m = emmy.numerical.quadrature.common.with_interval(opts__$1,interval);
var result = (integrate.cljs$core$IFn$_invoke$arity$4 ? integrate.cljs$core$IFn$_invoke$arity$4(f,l,r,m) : integrate.call(null,f,l,r,m));
return new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(result);
});
var ab_interval = emmy.numerical.quadrature.common.interval(opts__$1);
var integrate = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(call,integrator);
var inf_integrate = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(call,emmy.numerical.quadrature.substitute.infinitize(integrator));
var r_break = Math.abs(infinite_breakpoint);
var l_break = (- r_break);
var ocr_56820 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
try{if(((cljs.core.vector_QMARK_(ocr_56820)) && ((cljs.core.count(ocr_56820) === 2)))){
try{var ocr_56820_0__56873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56820,(0));
if((ocr_56820_0__56873 === -Infinity)){
try{var ocr_56820_1__56874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56820,(1));
if((ocr_56820_1__56874 === -Infinity)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"converged?","converged?",1779059976),true,new cljs.core.Keyword(null,"terms-checked","terms-checked",1046419519),(0),new cljs.core.Keyword(null,"result","result",1415092211),0.0], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56996){if((e56996 instanceof Error)){
var e__31472__auto__ = e56996;
if((e__31472__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__31472__auto__;
}
} else {
throw e56996;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56948){if((e56948 instanceof Error)){
var e__31472__auto__ = e56948;
if((e__31472__auto__ === cljs.core.match.backtrack)){
try{var ocr_56820_0__56873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56820,(0));
if((ocr_56820_0__56873 === Infinity)){
try{var ocr_56820_1__56874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56820,(1));
if((ocr_56820_1__56874 === Infinity)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"converged?","converged?",1779059976),true,new cljs.core.Keyword(null,"terms-checked","terms-checked",1046419519),(0),new cljs.core.Keyword(null,"result","result",1415092211),0.0], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56993){if((e56993 instanceof Error)){
var e__31472__auto____$1 = e56993;
if((e__31472__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__31472__auto____$1;
}
} else {
throw e56993;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56951){if((e56951 instanceof Error)){
var e__31472__auto____$1 = e56951;
if((e__31472__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_56820_0__56873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56820,(0));
if((ocr_56820_0__56873 === -Infinity)){
try{var ocr_56820_1__56874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56820,(1));
if((ocr_56820_1__56874 === -Infinity)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(emmy$numerical$quadrature$infinite$improper_$_rec.cljs$core$IFn$_invoke$arity$4(f,b,a,opts__$1),new cljs.core.Keyword(null,"result","result",1415092211),cljs.core._);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56990){if((e56990 instanceof Error)){
var e__31472__auto____$2 = e56990;
if((e__31472__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__31472__auto____$2;
}
} else {
throw e56990;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56964){if((e56964 instanceof Error)){
var e__31472__auto____$2 = e56964;
if((e__31472__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_56820_0__56873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56820,(0));
if((ocr_56820_0__56873 === Infinity)){
try{var ocr_56820_1__56874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56820,(1));
if((ocr_56820_1__56874 === Infinity)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(emmy$numerical$quadrature$infinite$improper_$_rec.cljs$core$IFn$_invoke$arity$4(f,b,a,opts__$1),new cljs.core.Keyword(null,"result","result",1415092211),cljs.core._);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56989){if((e56989 instanceof Error)){
var e__31472__auto____$3 = e56989;
if((e__31472__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__31472__auto____$3;
}
} else {
throw e56989;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56965){if((e56965 instanceof Error)){
var e__31472__auto____$3 = e56965;
if((e__31472__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_56820_0__56873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56820,(0));
if((ocr_56820_0__56873 === -Infinity)){
try{var ocr_56820_1__56874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56820,(1));
if((ocr_56820_1__56874 === Infinity)){
var _inf__GT_l = inf_integrate(a,l_break,emmy.numerical.quadrature.common.open_closed);
var l__GT_r = integrate(l_break,r_break,emmy.numerical.quadrature.common.closed);
var r__GT__PLUS_inf = inf_integrate(r_break,b,emmy.numerical.quadrature.common.closed_open);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"converged?","converged?",1779059976),true,new cljs.core.Keyword(null,"result","result",1415092211),((_inf__GT_l + l__GT_r) + r__GT__PLUS_inf)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56972){if((e56972 instanceof Error)){
var e__31472__auto____$4 = e56972;
if((e__31472__auto____$4 === cljs.core.match.backtrack)){
if((b <= l_break)){
return inf_integrate(a,b,ab_interval);
} else {
var _inf__GT_l = inf_integrate(a,l_break,emmy.numerical.quadrature.common.open_closed);
var l__GT_b = integrate(l_break,b,emmy.numerical.quadrature.common.close_l(ab_interval));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"converged?","converged?",1779059976),true,new cljs.core.Keyword(null,"result","result",1415092211),(_inf__GT_l + l__GT_b)], null);
}
} else {
throw e__31472__auto____$4;
}
} else {
throw e56972;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56966){if((e56966 instanceof Error)){
var e__31472__auto____$4 = e56966;
if((e__31472__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_56820_1__56874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56820,(1));
if((ocr_56820_1__56874 === Infinity)){
if((a >= r_break)){
return inf_integrate(a,b,ab_interval);
} else {
var a__GT_r = integrate(a,r_break,emmy.numerical.quadrature.common.close_r(ab_interval));
var r__GT__PLUS_inf = inf_integrate(r_break,b,emmy.numerical.quadrature.common.closed_open);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"converged?","converged?",1779059976),true,new cljs.core.Keyword(null,"result","result",1415092211),(a__GT_r + r__GT__PLUS_inf)], null);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e56967){if((e56967 instanceof Error)){
var e__31472__auto____$5 = e56967;
if((e__31472__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__31472__auto____$5;
}
} else {
throw e56967;

}
}} else {
throw e__31472__auto____$4;
}
} else {
throw e56966;

}
}} else {
throw e__31472__auto____$3;
}
} else {
throw e56965;

}
}} else {
throw e__31472__auto____$2;
}
} else {
throw e56964;

}
}} else {
throw e__31472__auto____$1;
}
} else {
throw e56951;

}
}} else {
throw e__31472__auto__;
}
} else {
throw e56948;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56933){if((e56933 instanceof Error)){
var e__31472__auto__ = e56933;
if((e__31472__auto__ === cljs.core.match.backtrack)){
return (integrator.cljs$core$IFn$_invoke$arity$4 ? integrator.cljs$core$IFn$_invoke$arity$4(f,a,b,opts__$1) : integrator.call(null,f,a,b,opts__$1));
} else {
throw e__31472__auto__;
}
} else {
throw e56933;

}
}});
emmy$numerical$quadrature$infinite$improper_$_rec = function(f,a,b,opts){
switch(arguments.length){
case 3:
return emmy$numerical$quadrature$infinite$improper_$_rec__3.call(this,f,a,b);
case 4:
return emmy$numerical$quadrature$infinite$improper_$_rec__4.call(this,f,a,b,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
emmy$numerical$quadrature$infinite$improper_$_rec.cljs$core$IFn$_invoke$arity$3 = emmy$numerical$quadrature$infinite$improper_$_rec__3;
emmy$numerical$quadrature$infinite$improper_$_rec.cljs$core$IFn$_invoke$arity$4 = emmy$numerical$quadrature$infinite$improper_$_rec__4;
return emmy$numerical$quadrature$infinite$improper_$_rec;
})()
});

//# sourceMappingURL=emmy.numerical.quadrature.infinite.js.map
