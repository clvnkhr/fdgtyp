goog.provide('emmy.mechanics.routhian');
emmy.mechanics.routhian.Lagrangian__GT_Routhian = (function emmy$mechanics$routhian$Lagrangian__GT_Routhian(Lagrangian){
return (function (p__59510){
var vec__59511 = p__59510;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59511,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59511,(1),null);
var vec__59514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59511,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59514,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59514,(1),null);
var L = (function emmy$mechanics$routhian$Lagrangian__GT_Routhian_$_L(vy){
var G__59518 = emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0))], 0));
return (Lagrangian.cljs$core$IFn$_invoke$arity$1 ? Lagrangian.cljs$core$IFn$_invoke$arity$1(G__59518) : Lagrangian.call(null,G__59518));
});
var fexpr__59519 = emmy.mechanics.hamilton.Legendre_transform_procedure(L);
return (fexpr__59519.cljs$core$IFn$_invoke$arity$1 ? fexpr__59519.cljs$core$IFn$_invoke$arity$1(py) : fexpr__59519.call(null,py));
});
});
emmy.mechanics.routhian.Routh_equations = (function emmy$mechanics$routhian$Routh_equations(Routhian){
return (function (x,y,py){
return (function (t){
var L = (function emmy$mechanics$routhian$Routh_equations_$_L(p__59531){
var vec__59532 = p__59531;
var tau = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59532,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59532,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59532,(2),null);
var G__59535 = emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tau,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([q,(y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tau) : y.call(null,tau))], 0)),emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v,(py.cljs$core$IFn$_invoke$arity$1 ? py.cljs$core$IFn$_invoke$arity$1(tau) : py.call(null,tau))], 0))], 0));
return (Routhian.cljs$core$IFn$_invoke$arity$1 ? Routhian.cljs$core$IFn$_invoke$arity$1(G__59535) : Routhian.call(null,G__59535));
});
var H = (function emmy$mechanics$routhian$Routh_equations_$_H(p__59536){
var vec__59537 = p__59536;
var tau = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59537,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59537,(1),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59537,(2),null);
var G__59540 = emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tau,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tau) : x.call(null,tau)),q], 0)),emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__59541 = (emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(x) : emmy.calculus.derivative.D.call(null,x));
return (fexpr__59541.cljs$core$IFn$_invoke$arity$1 ? fexpr__59541.cljs$core$IFn$_invoke$arity$1(tau) : fexpr__59541.call(null,tau));
})(),p], 0))], 0));
return (Routhian.cljs$core$IFn$_invoke$arity$1 ? Routhian.cljs$core$IFn$_invoke$arity$1(G__59540) : Routhian.call(null,G__59540));
});
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__59543 = (function (){var fexpr__59544 = emmy.mechanics.lagrange.Lagrange_equations.cljs$core$IFn$_invoke$arity$1(L);
return (fexpr__59544.cljs$core$IFn$_invoke$arity$1 ? fexpr__59544.cljs$core$IFn$_invoke$arity$1(x) : fexpr__59544.call(null,x));
})();
return (fexpr__59543.cljs$core$IFn$_invoke$arity$1 ? fexpr__59543.cljs$core$IFn$_invoke$arity$1(t) : fexpr__59543.call(null,t));
})(),(function (){var fexpr__59545 = emmy.mechanics.hamilton.Hamilton_equations(H)(y,py);
return (fexpr__59545.cljs$core$IFn$_invoke$arity$1 ? fexpr__59545.cljs$core$IFn$_invoke$arity$1(t) : fexpr__59545.call(null,t));
})()], 0));
});
});
});
emmy.mechanics.routhian.Routhian__GT_acceleration = (function emmy$mechanics$routhian$Routhian__GT_acceleration(var_args){
var G__59547 = arguments.length;
switch (G__59547) {
case 1:
return emmy.mechanics.routhian.Routhian__GT_acceleration.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.mechanics.routhian.Routhian__GT_acceleration.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.mechanics.routhian.Routhian__GT_acceleration.cljs$core$IFn$_invoke$arity$1 = (function (R){
return (function (p__59548){
var vec__59549 = p__59548;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59549,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59549,(1),null);
var vec__59552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59549,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59552,(0),null);
var s = vec__59549;
var minus_P = (function (){var fexpr__59555 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59555.cljs$core$IFn$_invoke$arity$1 ? fexpr__59555.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59555.call(null,R));
})();
var minus_F = (function (){var fexpr__59557 = (function (){var fexpr__59558 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59558.cljs$core$IFn$_invoke$arity$1 ? fexpr__59558.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59558.call(null,R));
})();
return (fexpr__59557.cljs$core$IFn$_invoke$arity$1 ? fexpr__59557.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59557.call(null,s));
})();
var vy = (function (){var fexpr__59560 = (function (){var fexpr__59561 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59561.cljs$core$IFn$_invoke$arity$1 ? fexpr__59561.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59561.call(null,R));
})();
return (fexpr__59560.cljs$core$IFn$_invoke$arity$1 ? fexpr__59560.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59560.call(null,s));
})();
var pyd = (function (){var fexpr__59563 = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((-1),(function (){var fexpr__59564 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59564.cljs$core$IFn$_invoke$arity$1 ? fexpr__59564.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59564.call(null,R));
})());
return (fexpr__59563.cljs$core$IFn$_invoke$arity$1 ? fexpr__59563.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59563.call(null,s));
})();
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(vx,(function (){var fexpr__59566 = (function (){var fexpr__59567 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59567.cljs$core$IFn$_invoke$arity$1 ? fexpr__59567.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59567.call(null,minus_P));
})();
return (fexpr__59566.cljs$core$IFn$_invoke$arity$1 ? fexpr__59566.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59566.call(null,s));
})(),vx),emmy.generic._.cljs$core$IFn$_invoke$arity$2(minus_F,emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__59569 = (function (){var fexpr__59570 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((0)) : emmy.calculus.derivative.partial.call(null,(0)));
return (fexpr__59570.cljs$core$IFn$_invoke$arity$1 ? fexpr__59570.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59570.call(null,minus_P));
})();
return (fexpr__59569.cljs$core$IFn$_invoke$arity$1 ? fexpr__59569.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59569.call(null,s));
})(),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59572 = (function (){var fexpr__59573 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59573.cljs$core$IFn$_invoke$arity$1 ? fexpr__59573.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59573.call(null,minus_P));
})();
return (fexpr__59572.cljs$core$IFn$_invoke$arity$1 ? fexpr__59572.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59572.call(null,s));
})(),vx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59575 = (function (){var fexpr__59576 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59576.cljs$core$IFn$_invoke$arity$1 ? fexpr__59576.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59576.call(null,minus_P));
})();
return (fexpr__59575.cljs$core$IFn$_invoke$arity$1 ? fexpr__59575.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59575.call(null,s));
})(),vy),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59578 = (function (){var fexpr__59582 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59582.cljs$core$IFn$_invoke$arity$1 ? fexpr__59582.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59582.call(null,minus_P));
})();
return (fexpr__59578.cljs$core$IFn$_invoke$arity$1 ? fexpr__59578.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59578.call(null,s));
})(),pyd)], 0))));
});
}));

(emmy.mechanics.routhian.Routhian__GT_acceleration.cljs$core$IFn$_invoke$arity$2 = (function (R,dissipation_fn){
return (function (p__59583){
var vec__59584 = p__59583;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59584,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59584,(1),null);
var vec__59587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59584,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59587,(0),null);
var s = vec__59584;
var minus_P = (function (){var fexpr__59590 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59590.cljs$core$IFn$_invoke$arity$1 ? fexpr__59590.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59590.call(null,R));
})();
var minus_F = (function (){var fexpr__59592 = (function (){var fexpr__59593 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59593.cljs$core$IFn$_invoke$arity$1 ? fexpr__59593.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59593.call(null,R));
})();
return (fexpr__59592.cljs$core$IFn$_invoke$arity$1 ? fexpr__59592.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59592.call(null,s));
})();
var vy = (function (){var fexpr__59595 = (function (){var fexpr__59596 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59596.cljs$core$IFn$_invoke$arity$1 ? fexpr__59596.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59596.call(null,R));
})();
return (fexpr__59595.cljs$core$IFn$_invoke$arity$1 ? fexpr__59595.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59595.call(null,s));
})();
var L_state = emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0))], 0));
var minus_F0 = (function (){var fexpr__59598 = (function (){var fexpr__59599 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59599.cljs$core$IFn$_invoke$arity$1 ? fexpr__59599.cljs$core$IFn$_invoke$arity$1(dissipation_fn) : fexpr__59599.call(null,dissipation_fn));
})();
return (fexpr__59598.cljs$core$IFn$_invoke$arity$1 ? fexpr__59598.cljs$core$IFn$_invoke$arity$1(L_state) : fexpr__59598.call(null,L_state));
})();
var minus_F1 = (function (){var fexpr__59601 = (function (){var fexpr__59602 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59602.cljs$core$IFn$_invoke$arity$1 ? fexpr__59602.cljs$core$IFn$_invoke$arity$1(dissipation_fn) : fexpr__59602.call(null,dissipation_fn));
})();
return (fexpr__59601.cljs$core$IFn$_invoke$arity$1 ? fexpr__59601.cljs$core$IFn$_invoke$arity$1(L_state) : fexpr__59601.call(null,L_state));
})();
var pyd = emmy.generic._.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59604 = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((-1),(function (){var fexpr__59605 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59605.cljs$core$IFn$_invoke$arity$1 ? fexpr__59605.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59605.call(null,R));
})());
return (fexpr__59604.cljs$core$IFn$_invoke$arity$1 ? fexpr__59604.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59604.call(null,s));
})(),minus_F1);
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(vx,(function (){var fexpr__59607 = (function (){var fexpr__59608 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59608.cljs$core$IFn$_invoke$arity$1 ? fexpr__59608.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59608.call(null,minus_P));
})();
return (fexpr__59607.cljs$core$IFn$_invoke$arity$1 ? fexpr__59607.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59607.call(null,s));
})(),vx),emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._.cljs$core$IFn$_invoke$arity$2(minus_F,emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__59610 = (function (){var fexpr__59611 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((0)) : emmy.calculus.derivative.partial.call(null,(0)));
return (fexpr__59611.cljs$core$IFn$_invoke$arity$1 ? fexpr__59611.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59611.call(null,minus_P));
})();
return (fexpr__59610.cljs$core$IFn$_invoke$arity$1 ? fexpr__59610.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59610.call(null,s));
})(),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59613 = (function (){var fexpr__59614 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59614.cljs$core$IFn$_invoke$arity$1 ? fexpr__59614.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59614.call(null,minus_P));
})();
return (fexpr__59613.cljs$core$IFn$_invoke$arity$1 ? fexpr__59613.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59613.call(null,s));
})(),vx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59616 = (function (){var fexpr__59617 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59617.cljs$core$IFn$_invoke$arity$1 ? fexpr__59617.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59617.call(null,minus_P));
})();
return (fexpr__59616.cljs$core$IFn$_invoke$arity$1 ? fexpr__59616.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59616.call(null,s));
})(),vy),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59619 = (function (){var fexpr__59620 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59620.cljs$core$IFn$_invoke$arity$1 ? fexpr__59620.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59620.call(null,minus_P));
})();
return (fexpr__59619.cljs$core$IFn$_invoke$arity$1 ? fexpr__59619.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59619.call(null,s));
})(),pyd)], 0))),minus_F0));
});
}));

(emmy.mechanics.routhian.Routhian__GT_acceleration.cljs$lang$maxFixedArity = 2);

emmy.mechanics.routhian.Routhian__GT_state_derivative = (function emmy$mechanics$routhian$Routhian__GT_state_derivative(var_args){
var G__59622 = arguments.length;
switch (G__59622) {
case 1:
return emmy.mechanics.routhian.Routhian__GT_state_derivative.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.mechanics.routhian.Routhian__GT_state_derivative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.mechanics.routhian.Routhian__GT_state_derivative.cljs$core$IFn$_invoke$arity$1 = (function (R){
return (function (p__59623){
var vec__59624 = p__59623;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59624,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59624,(1),null);
var vec__59627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59624,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59627,(0),null);
var s = vec__59624;
var minus_P = (function (){var fexpr__59630 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59630.cljs$core$IFn$_invoke$arity$1 ? fexpr__59630.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59630.call(null,R));
})();
var minus_F = (function (){var fexpr__59632 = (function (){var fexpr__59633 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59633.cljs$core$IFn$_invoke$arity$1 ? fexpr__59633.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59633.call(null,R));
})();
return (fexpr__59632.cljs$core$IFn$_invoke$arity$1 ? fexpr__59632.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59632.call(null,s));
})();
var vy = (function (){var fexpr__59635 = (function (){var fexpr__59636 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59636.cljs$core$IFn$_invoke$arity$1 ? fexpr__59636.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59636.call(null,R));
})();
return (fexpr__59635.cljs$core$IFn$_invoke$arity$1 ? fexpr__59635.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59635.call(null,s));
})();
var pyd = emmy.generic._.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__59638 = (function (){var fexpr__59639 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59639.cljs$core$IFn$_invoke$arity$1 ? fexpr__59639.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59639.call(null,R));
})();
return (fexpr__59638.cljs$core$IFn$_invoke$arity$1 ? fexpr__59638.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59638.call(null,s));
})());
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0)),emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(vx,(function (){var fexpr__59641 = (function (){var fexpr__59642 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59642.cljs$core$IFn$_invoke$arity$1 ? fexpr__59642.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59642.call(null,minus_P));
})();
return (fexpr__59641.cljs$core$IFn$_invoke$arity$1 ? fexpr__59641.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59641.call(null,s));
})(),vx),emmy.generic._.cljs$core$IFn$_invoke$arity$2(minus_F,emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__59644 = (function (){var fexpr__59645 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((0)) : emmy.calculus.derivative.partial.call(null,(0)));
return (fexpr__59645.cljs$core$IFn$_invoke$arity$1 ? fexpr__59645.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59645.call(null,minus_P));
})();
return (fexpr__59644.cljs$core$IFn$_invoke$arity$1 ? fexpr__59644.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59644.call(null,s));
})(),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59647 = (function (){var fexpr__59648 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59648.cljs$core$IFn$_invoke$arity$1 ? fexpr__59648.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59648.call(null,minus_P));
})();
return (fexpr__59647.cljs$core$IFn$_invoke$arity$1 ? fexpr__59647.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59647.call(null,s));
})(),vx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59650 = (function (){var fexpr__59651 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59651.cljs$core$IFn$_invoke$arity$1 ? fexpr__59651.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59651.call(null,minus_P));
})();
return (fexpr__59650.cljs$core$IFn$_invoke$arity$1 ? fexpr__59650.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59650.call(null,s));
})(),vy),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59653 = (function (){var fexpr__59654 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59654.cljs$core$IFn$_invoke$arity$1 ? fexpr__59654.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59654.call(null,minus_P));
})();
return (fexpr__59653.cljs$core$IFn$_invoke$arity$1 ? fexpr__59653.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59653.call(null,s));
})(),pyd)], 0)))),pyd], 0))], 0));
});
}));

(emmy.mechanics.routhian.Routhian__GT_state_derivative.cljs$core$IFn$_invoke$arity$2 = (function (R,dissipation_fn){
return (function (p__59655){
var vec__59656 = p__59655;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59656,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59656,(1),null);
var vec__59659 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59656,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59659,(0),null);
var s = vec__59656;
var minus_P = (function (){var fexpr__59662 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59662.cljs$core$IFn$_invoke$arity$1 ? fexpr__59662.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59662.call(null,R));
})();
var minus_F = (function (){var fexpr__59664 = (function (){var fexpr__59665 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59665.cljs$core$IFn$_invoke$arity$1 ? fexpr__59665.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59665.call(null,R));
})();
return (fexpr__59664.cljs$core$IFn$_invoke$arity$1 ? fexpr__59664.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59664.call(null,s));
})();
var vy = (function (){var fexpr__59667 = (function (){var fexpr__59668 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59668.cljs$core$IFn$_invoke$arity$1 ? fexpr__59668.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59668.call(null,R));
})();
return (fexpr__59667.cljs$core$IFn$_invoke$arity$1 ? fexpr__59667.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59667.call(null,s));
})();
var L_state = emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0))], 0));
var minus_F0 = (function (){var fexpr__59670 = (function (){var fexpr__59671 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59671.cljs$core$IFn$_invoke$arity$1 ? fexpr__59671.cljs$core$IFn$_invoke$arity$1(dissipation_fn) : fexpr__59671.call(null,dissipation_fn));
})();
return (fexpr__59670.cljs$core$IFn$_invoke$arity$1 ? fexpr__59670.cljs$core$IFn$_invoke$arity$1(L_state) : fexpr__59670.call(null,L_state));
})();
var minus_F1 = (function (){var fexpr__59673 = (function (){var fexpr__59674 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59674.cljs$core$IFn$_invoke$arity$1 ? fexpr__59674.cljs$core$IFn$_invoke$arity$1(dissipation_fn) : fexpr__59674.call(null,dissipation_fn));
})();
return (fexpr__59673.cljs$core$IFn$_invoke$arity$1 ? fexpr__59673.cljs$core$IFn$_invoke$arity$1(L_state) : fexpr__59673.call(null,L_state));
})();
var pyd = emmy.generic._.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59676 = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((-1),(function (){var fexpr__59677 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59677.cljs$core$IFn$_invoke$arity$1 ? fexpr__59677.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59677.call(null,R));
})());
return (fexpr__59676.cljs$core$IFn$_invoke$arity$1 ? fexpr__59676.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59676.call(null,s));
})(),minus_F1);
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0)),emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(vx,(function (){var fexpr__59679 = (function (){var fexpr__59680 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59680.cljs$core$IFn$_invoke$arity$1 ? fexpr__59680.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59680.call(null,minus_P));
})();
return (fexpr__59679.cljs$core$IFn$_invoke$arity$1 ? fexpr__59679.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59679.call(null,s));
})(),vx),emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._.cljs$core$IFn$_invoke$arity$2(minus_F,emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__59682 = (function (){var fexpr__59683 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((0)) : emmy.calculus.derivative.partial.call(null,(0)));
return (fexpr__59683.cljs$core$IFn$_invoke$arity$1 ? fexpr__59683.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59683.call(null,minus_P));
})();
return (fexpr__59682.cljs$core$IFn$_invoke$arity$1 ? fexpr__59682.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59682.call(null,s));
})(),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59685 = (function (){var fexpr__59686 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59686.cljs$core$IFn$_invoke$arity$1 ? fexpr__59686.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59686.call(null,minus_P));
})();
return (fexpr__59685.cljs$core$IFn$_invoke$arity$1 ? fexpr__59685.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59685.call(null,s));
})(),vx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59688 = (function (){var fexpr__59689 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59689.cljs$core$IFn$_invoke$arity$1 ? fexpr__59689.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59689.call(null,minus_P));
})();
return (fexpr__59688.cljs$core$IFn$_invoke$arity$1 ? fexpr__59688.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59688.call(null,s));
})(),vy),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59691 = (function (){var fexpr__59692 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59692.cljs$core$IFn$_invoke$arity$1 ? fexpr__59692.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59692.call(null,minus_P));
})();
return (fexpr__59691.cljs$core$IFn$_invoke$arity$1 ? fexpr__59691.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59691.call(null,s));
})(),pyd)], 0))),minus_F0)),pyd], 0))], 0));
});
}));

(emmy.mechanics.routhian.Routhian__GT_state_derivative.cljs$lang$maxFixedArity = 2);

emmy.mechanics.routhian.Lagrangian_state__GT_Routhian_state = (function emmy$mechanics$routhian$Lagrangian_state__GT_Routhian_state(L){
return (function (p__59693){
var vec__59694 = p__59693;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59694,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59694,(1),null);
var vec__59697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59694,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59697,(0),null);
var s = vec__59694;
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59701 = (function (){var fexpr__59702 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((2)) : emmy.calculus.derivative.partial.call(null,(2)));
return (fexpr__59702.cljs$core$IFn$_invoke$arity$1 ? fexpr__59702.cljs$core$IFn$_invoke$arity$1(L) : fexpr__59702.call(null,L));
})();
return (fexpr__59701.cljs$core$IFn$_invoke$arity$1 ? fexpr__59701.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59701.call(null,s));
})(),(1));
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,py], 0))], 0));
});
});
emmy.mechanics.routhian.Routhian_state__GT_Lagrangian_state = (function emmy$mechanics$routhian$Routhian_state__GT_Lagrangian_state(R){
return (function (p__59703){
var vec__59704 = p__59703;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59704,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59704,(1),null);
var vec__59707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59704,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59707,(0),null);
var s = vec__59704;
var vy = cljs.core.nth.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59711 = (function (){var fexpr__59713 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((2)) : emmy.calculus.derivative.partial.call(null,(2)));
return (fexpr__59713.cljs$core$IFn$_invoke$arity$1 ? fexpr__59713.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59713.call(null,R));
})();
return (fexpr__59711.cljs$core$IFn$_invoke$arity$1 ? fexpr__59711.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59711.call(null,s));
})(),(1));
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0))], 0));
});
});

//# sourceMappingURL=emmy.mechanics.routhian.js.map
