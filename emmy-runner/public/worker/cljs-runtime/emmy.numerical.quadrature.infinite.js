import "./cljs_env.js";
import "./cljs.core.js";
import "./cljs.core.match.js";
import "./emmy.numerical.quadrature.common.js";
import "./emmy.numerical.quadrature.substitute.js";
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
var map__76119 = emmy.numerical.quadrature.infinite.fill_defaults(opts);
var map__76119__$1 = cljs.core.__destructure_map(map__76119);
var opts__$1 = map__76119__$1;
var infinite_breakpoint = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76119__$1,new cljs.core.Keyword(null,"infinite-breakpoint","infinite-breakpoint",1403428770));
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
var ocr_76130 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
try{if(((cljs.core.vector_QMARK_(ocr_76130)) && ((cljs.core.count(ocr_76130) === 2)))){
try{var ocr_76130_0__76147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_76130,(0));
if((ocr_76130_0__76147 === -Infinity)){
try{var ocr_76130_1__76148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_76130,(1));
if((ocr_76130_1__76148 === -Infinity)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"converged?","converged?",1779059976),true,new cljs.core.Keyword(null,"terms-checked","terms-checked",1046419519),(0),new cljs.core.Keyword(null,"result","result",1415092211),0.0], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e76180){if((e76180 instanceof Error)){
var e__36207__auto__ = e76180;
if((e__36207__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36207__auto__;
}
} else {
throw e76180;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e76150){if((e76150 instanceof Error)){
var e__36207__auto__ = e76150;
if((e__36207__auto__ === cljs.core.match.backtrack)){
try{var ocr_76130_0__76147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_76130,(0));
if((ocr_76130_0__76147 === Infinity)){
try{var ocr_76130_1__76148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_76130,(1));
if((ocr_76130_1__76148 === Infinity)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"converged?","converged?",1779059976),true,new cljs.core.Keyword(null,"terms-checked","terms-checked",1046419519),(0),new cljs.core.Keyword(null,"result","result",1415092211),0.0], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e76179){if((e76179 instanceof Error)){
var e__36207__auto____$1 = e76179;
if((e__36207__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36207__auto____$1;
}
} else {
throw e76179;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e76151){if((e76151 instanceof Error)){
var e__36207__auto____$1 = e76151;
if((e__36207__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_76130_0__76147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_76130,(0));
if((ocr_76130_0__76147 === -Infinity)){
try{var ocr_76130_1__76148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_76130,(1));
if((ocr_76130_1__76148 === -Infinity)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(emmy$numerical$quadrature$infinite$improper_$_rec.cljs$core$IFn$_invoke$arity$4(f,b,a,opts__$1),new cljs.core.Keyword(null,"result","result",1415092211),cljs.core._);
} else {
throw cljs.core.match.backtrack;

}
}catch (e76177){if((e76177 instanceof Error)){
var e__36207__auto____$2 = e76177;
if((e__36207__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36207__auto____$2;
}
} else {
throw e76177;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e76152){if((e76152 instanceof Error)){
var e__36207__auto____$2 = e76152;
if((e__36207__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_76130_0__76147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_76130,(0));
if((ocr_76130_0__76147 === Infinity)){
try{var ocr_76130_1__76148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_76130,(1));
if((ocr_76130_1__76148 === Infinity)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(emmy$numerical$quadrature$infinite$improper_$_rec.cljs$core$IFn$_invoke$arity$4(f,b,a,opts__$1),new cljs.core.Keyword(null,"result","result",1415092211),cljs.core._);
} else {
throw cljs.core.match.backtrack;

}
}catch (e76176){if((e76176 instanceof Error)){
var e__36207__auto____$3 = e76176;
if((e__36207__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36207__auto____$3;
}
} else {
throw e76176;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e76153){if((e76153 instanceof Error)){
var e__36207__auto____$3 = e76153;
if((e__36207__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_76130_0__76147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_76130,(0));
if((ocr_76130_0__76147 === -Infinity)){
try{var ocr_76130_1__76148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_76130,(1));
if((ocr_76130_1__76148 === Infinity)){
var _inf__GT_l = inf_integrate(a,l_break,emmy.numerical.quadrature.common.open_closed);
var l__GT_r = integrate(l_break,r_break,emmy.numerical.quadrature.common.closed);
var r__GT__PLUS_inf = inf_integrate(r_break,b,emmy.numerical.quadrature.common.closed_open);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"converged?","converged?",1779059976),true,new cljs.core.Keyword(null,"result","result",1415092211),((_inf__GT_l + l__GT_r) + r__GT__PLUS_inf)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e76166){if((e76166 instanceof Error)){
var e__36207__auto____$4 = e76166;
if((e__36207__auto____$4 === cljs.core.match.backtrack)){
if((b <= l_break)){
return inf_integrate(a,b,ab_interval);
} else {
var _inf__GT_l = inf_integrate(a,l_break,emmy.numerical.quadrature.common.open_closed);
var l__GT_b = integrate(l_break,b,emmy.numerical.quadrature.common.close_l(ab_interval));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"converged?","converged?",1779059976),true,new cljs.core.Keyword(null,"result","result",1415092211),(_inf__GT_l + l__GT_b)], null);
}
} else {
throw e__36207__auto____$4;
}
} else {
throw e76166;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e76154){if((e76154 instanceof Error)){
var e__36207__auto____$4 = e76154;
if((e__36207__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_76130_1__76148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_76130,(1));
if((ocr_76130_1__76148 === Infinity)){
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
}catch (e76155){if((e76155 instanceof Error)){
var e__36207__auto____$5 = e76155;
if((e__36207__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36207__auto____$5;
}
} else {
throw e76155;

}
}} else {
throw e__36207__auto____$4;
}
} else {
throw e76154;

}
}} else {
throw e__36207__auto____$3;
}
} else {
throw e76153;

}
}} else {
throw e__36207__auto____$2;
}
} else {
throw e76152;

}
}} else {
throw e__36207__auto____$1;
}
} else {
throw e76151;

}
}} else {
throw e__36207__auto__;
}
} else {
throw e76150;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e76149){if((e76149 instanceof Error)){
var e__36207__auto__ = e76149;
if((e__36207__auto__ === cljs.core.match.backtrack)){
return (integrator.cljs$core$IFn$_invoke$arity$4 ? integrator.cljs$core$IFn$_invoke$arity$4(f,a,b,opts__$1) : integrator.call(null,f,a,b,opts__$1));
} else {
throw e__36207__auto__;
}
} else {
throw e76149;

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
