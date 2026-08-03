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
var map__56404 = emmy.numerical.quadrature.infinite.fill_defaults(opts);
var map__56404__$1 = cljs.core.__destructure_map(map__56404);
var opts__$1 = map__56404__$1;
var infinite_breakpoint = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56404__$1,new cljs.core.Keyword(null,"infinite-breakpoint","infinite-breakpoint",1403428770));
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
var ocr_56406 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
try{if(((cljs.core.vector_QMARK_(ocr_56406)) && ((cljs.core.count(ocr_56406) === 2)))){
try{var ocr_56406_0__56441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56406,(0));
if((ocr_56406_0__56441 === -Infinity)){
try{var ocr_56406_1__56445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56406,(1));
if((ocr_56406_1__56445 === -Infinity)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"converged?","converged?",1779059976),true,new cljs.core.Keyword(null,"terms-checked","terms-checked",1046419519),(0),new cljs.core.Keyword(null,"result","result",1415092211),0.0], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56619){if((e56619 instanceof Error)){
var e__31469__auto__ = e56619;
if((e__31469__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__31469__auto__;
}
} else {
throw e56619;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56533){if((e56533 instanceof Error)){
var e__31469__auto__ = e56533;
if((e__31469__auto__ === cljs.core.match.backtrack)){
try{var ocr_56406_0__56441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56406,(0));
if((ocr_56406_0__56441 === Infinity)){
try{var ocr_56406_1__56445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56406,(1));
if((ocr_56406_1__56445 === Infinity)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"converged?","converged?",1779059976),true,new cljs.core.Keyword(null,"terms-checked","terms-checked",1046419519),(0),new cljs.core.Keyword(null,"result","result",1415092211),0.0], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56591){if((e56591 instanceof Error)){
var e__31469__auto____$1 = e56591;
if((e__31469__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__31469__auto____$1;
}
} else {
throw e56591;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56534){if((e56534 instanceof Error)){
var e__31469__auto____$1 = e56534;
if((e__31469__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_56406_0__56441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56406,(0));
if((ocr_56406_0__56441 === -Infinity)){
try{var ocr_56406_1__56445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56406,(1));
if((ocr_56406_1__56445 === -Infinity)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(emmy$numerical$quadrature$infinite$improper_$_rec.cljs$core$IFn$_invoke$arity$4(f,b,a,opts__$1),new cljs.core.Keyword(null,"result","result",1415092211),cljs.core._);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56583){if((e56583 instanceof Error)){
var e__31469__auto____$2 = e56583;
if((e__31469__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__31469__auto____$2;
}
} else {
throw e56583;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56535){if((e56535 instanceof Error)){
var e__31469__auto____$2 = e56535;
if((e__31469__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_56406_0__56441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56406,(0));
if((ocr_56406_0__56441 === Infinity)){
try{var ocr_56406_1__56445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56406,(1));
if((ocr_56406_1__56445 === Infinity)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(emmy$numerical$quadrature$infinite$improper_$_rec.cljs$core$IFn$_invoke$arity$4(f,b,a,opts__$1),new cljs.core.Keyword(null,"result","result",1415092211),cljs.core._);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56567){if((e56567 instanceof Error)){
var e__31469__auto____$3 = e56567;
if((e__31469__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__31469__auto____$3;
}
} else {
throw e56567;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56536){if((e56536 instanceof Error)){
var e__31469__auto____$3 = e56536;
if((e__31469__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_56406_0__56441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56406,(0));
if((ocr_56406_0__56441 === -Infinity)){
try{var ocr_56406_1__56445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56406,(1));
if((ocr_56406_1__56445 === Infinity)){
var _inf__GT_l = inf_integrate(a,l_break,emmy.numerical.quadrature.common.open_closed);
var l__GT_r = integrate(l_break,r_break,emmy.numerical.quadrature.common.closed);
var r__GT__PLUS_inf = inf_integrate(r_break,b,emmy.numerical.quadrature.common.closed_open);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"converged?","converged?",1779059976),true,new cljs.core.Keyword(null,"result","result",1415092211),((_inf__GT_l + l__GT_r) + r__GT__PLUS_inf)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56560){if((e56560 instanceof Error)){
var e__31469__auto____$4 = e56560;
if((e__31469__auto____$4 === cljs.core.match.backtrack)){
if((b <= l_break)){
return inf_integrate(a,b,ab_interval);
} else {
var _inf__GT_l = inf_integrate(a,l_break,emmy.numerical.quadrature.common.open_closed);
var l__GT_b = integrate(l_break,b,emmy.numerical.quadrature.common.close_l(ab_interval));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"converged?","converged?",1779059976),true,new cljs.core.Keyword(null,"result","result",1415092211),(_inf__GT_l + l__GT_b)], null);
}
} else {
throw e__31469__auto____$4;
}
} else {
throw e56560;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56537){if((e56537 instanceof Error)){
var e__31469__auto____$4 = e56537;
if((e__31469__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_56406_1__56445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56406,(1));
if((ocr_56406_1__56445 === Infinity)){
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
}catch (e56539){if((e56539 instanceof Error)){
var e__31469__auto____$5 = e56539;
if((e__31469__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__31469__auto____$5;
}
} else {
throw e56539;

}
}} else {
throw e__31469__auto____$4;
}
} else {
throw e56537;

}
}} else {
throw e__31469__auto____$3;
}
} else {
throw e56536;

}
}} else {
throw e__31469__auto____$2;
}
} else {
throw e56535;

}
}} else {
throw e__31469__auto____$1;
}
} else {
throw e56534;

}
}} else {
throw e__31469__auto__;
}
} else {
throw e56533;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56512){if((e56512 instanceof Error)){
var e__31469__auto__ = e56512;
if((e__31469__auto__ === cljs.core.match.backtrack)){
return (integrator.cljs$core$IFn$_invoke$arity$4 ? integrator.cljs$core$IFn$_invoke$arity$4(f,a,b,opts__$1) : integrator.call(null,f,a,b,opts__$1));
} else {
throw e__31469__auto__;
}
} else {
throw e56512;

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
