goog.provide('emmy.mechanics.routhian');
emmy.mechanics.routhian.Lagrangian__GT_Routhian = (function emmy$mechanics$routhian$Lagrangian__GT_Routhian(Lagrangian){
return (function (p__59480){
var vec__59485 = p__59480;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59485,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59485,(1),null);
var vec__59488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59485,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59488,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59488,(1),null);
var L = (function emmy$mechanics$routhian$Lagrangian__GT_Routhian_$_L(vy){
var G__59492 = emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0))], 0));
return (Lagrangian.cljs$core$IFn$_invoke$arity$1 ? Lagrangian.cljs$core$IFn$_invoke$arity$1(G__59492) : Lagrangian.call(null,G__59492));
});
var fexpr__59493 = emmy.mechanics.hamilton.Legendre_transform_procedure(L);
return (fexpr__59493.cljs$core$IFn$_invoke$arity$1 ? fexpr__59493.cljs$core$IFn$_invoke$arity$1(py) : fexpr__59493.call(null,py));
});
});
emmy.mechanics.routhian.Routh_equations = (function emmy$mechanics$routhian$Routh_equations(Routhian){
return (function (x,y,py){
return (function (t){
var L = (function emmy$mechanics$routhian$Routh_equations_$_L(p__59505){
var vec__59513 = p__59505;
var tau = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59513,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59513,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59513,(2),null);
var G__59516 = emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tau,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([q,(y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tau) : y.call(null,tau))], 0)),emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v,(py.cljs$core$IFn$_invoke$arity$1 ? py.cljs$core$IFn$_invoke$arity$1(tau) : py.call(null,tau))], 0))], 0));
return (Routhian.cljs$core$IFn$_invoke$arity$1 ? Routhian.cljs$core$IFn$_invoke$arity$1(G__59516) : Routhian.call(null,G__59516));
});
var H = (function emmy$mechanics$routhian$Routh_equations_$_H(p__59517){
var vec__59518 = p__59517;
var tau = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59518,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59518,(1),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59518,(2),null);
var G__59521 = emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tau,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tau) : x.call(null,tau)),q], 0)),emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__59522 = (emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(x) : emmy.calculus.derivative.D.call(null,x));
return (fexpr__59522.cljs$core$IFn$_invoke$arity$1 ? fexpr__59522.cljs$core$IFn$_invoke$arity$1(tau) : fexpr__59522.call(null,tau));
})(),p], 0))], 0));
return (Routhian.cljs$core$IFn$_invoke$arity$1 ? Routhian.cljs$core$IFn$_invoke$arity$1(G__59521) : Routhian.call(null,G__59521));
});
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__59524 = (function (){var fexpr__59525 = emmy.mechanics.lagrange.Lagrange_equations.cljs$core$IFn$_invoke$arity$1(L);
return (fexpr__59525.cljs$core$IFn$_invoke$arity$1 ? fexpr__59525.cljs$core$IFn$_invoke$arity$1(x) : fexpr__59525.call(null,x));
})();
return (fexpr__59524.cljs$core$IFn$_invoke$arity$1 ? fexpr__59524.cljs$core$IFn$_invoke$arity$1(t) : fexpr__59524.call(null,t));
})(),(function (){var fexpr__59526 = emmy.mechanics.hamilton.Hamilton_equations(H)(y,py);
return (fexpr__59526.cljs$core$IFn$_invoke$arity$1 ? fexpr__59526.cljs$core$IFn$_invoke$arity$1(t) : fexpr__59526.call(null,t));
})()], 0));
});
});
});
emmy.mechanics.routhian.Routhian__GT_acceleration = (function emmy$mechanics$routhian$Routhian__GT_acceleration(var_args){
var G__59530 = arguments.length;
switch (G__59530) {
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
return (function (p__59533){
var vec__59534 = p__59533;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59534,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59534,(1),null);
var vec__59537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59534,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59537,(0),null);
var s = vec__59534;
var minus_P = (function (){var fexpr__59540 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59540.cljs$core$IFn$_invoke$arity$1 ? fexpr__59540.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59540.call(null,R));
})();
var minus_F = (function (){var fexpr__59542 = (function (){var fexpr__59543 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59543.cljs$core$IFn$_invoke$arity$1 ? fexpr__59543.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59543.call(null,R));
})();
return (fexpr__59542.cljs$core$IFn$_invoke$arity$1 ? fexpr__59542.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59542.call(null,s));
})();
var vy = (function (){var fexpr__59546 = (function (){var fexpr__59547 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59547.cljs$core$IFn$_invoke$arity$1 ? fexpr__59547.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59547.call(null,R));
})();
return (fexpr__59546.cljs$core$IFn$_invoke$arity$1 ? fexpr__59546.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59546.call(null,s));
})();
var pyd = (function (){var fexpr__59550 = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((-1),(function (){var fexpr__59551 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59551.cljs$core$IFn$_invoke$arity$1 ? fexpr__59551.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59551.call(null,R));
})());
return (fexpr__59550.cljs$core$IFn$_invoke$arity$1 ? fexpr__59550.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59550.call(null,s));
})();
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(vx,(function (){var fexpr__59553 = (function (){var fexpr__59554 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59554.cljs$core$IFn$_invoke$arity$1 ? fexpr__59554.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59554.call(null,minus_P));
})();
return (fexpr__59553.cljs$core$IFn$_invoke$arity$1 ? fexpr__59553.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59553.call(null,s));
})(),vx),emmy.generic._.cljs$core$IFn$_invoke$arity$2(minus_F,emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__59557 = (function (){var fexpr__59558 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((0)) : emmy.calculus.derivative.partial.call(null,(0)));
return (fexpr__59558.cljs$core$IFn$_invoke$arity$1 ? fexpr__59558.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59558.call(null,minus_P));
})();
return (fexpr__59557.cljs$core$IFn$_invoke$arity$1 ? fexpr__59557.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59557.call(null,s));
})(),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59560 = (function (){var fexpr__59561 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59561.cljs$core$IFn$_invoke$arity$1 ? fexpr__59561.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59561.call(null,minus_P));
})();
return (fexpr__59560.cljs$core$IFn$_invoke$arity$1 ? fexpr__59560.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59560.call(null,s));
})(),vx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59564 = (function (){var fexpr__59565 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59565.cljs$core$IFn$_invoke$arity$1 ? fexpr__59565.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59565.call(null,minus_P));
})();
return (fexpr__59564.cljs$core$IFn$_invoke$arity$1 ? fexpr__59564.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59564.call(null,s));
})(),vy),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59567 = (function (){var fexpr__59568 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59568.cljs$core$IFn$_invoke$arity$1 ? fexpr__59568.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59568.call(null,minus_P));
})();
return (fexpr__59567.cljs$core$IFn$_invoke$arity$1 ? fexpr__59567.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59567.call(null,s));
})(),pyd)], 0))));
});
}));

(emmy.mechanics.routhian.Routhian__GT_acceleration.cljs$core$IFn$_invoke$arity$2 = (function (R,dissipation_fn){
return (function (p__59569){
var vec__59570 = p__59569;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59570,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59570,(1),null);
var vec__59573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59570,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59573,(0),null);
var s = vec__59570;
var minus_P = (function (){var fexpr__59576 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59576.cljs$core$IFn$_invoke$arity$1 ? fexpr__59576.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59576.call(null,R));
})();
var minus_F = (function (){var fexpr__59578 = (function (){var fexpr__59579 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59579.cljs$core$IFn$_invoke$arity$1 ? fexpr__59579.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59579.call(null,R));
})();
return (fexpr__59578.cljs$core$IFn$_invoke$arity$1 ? fexpr__59578.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59578.call(null,s));
})();
var vy = (function (){var fexpr__59581 = (function (){var fexpr__59582 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59582.cljs$core$IFn$_invoke$arity$1 ? fexpr__59582.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59582.call(null,R));
})();
return (fexpr__59581.cljs$core$IFn$_invoke$arity$1 ? fexpr__59581.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59581.call(null,s));
})();
var L_state = emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0))], 0));
var minus_F0 = (function (){var fexpr__59584 = (function (){var fexpr__59585 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59585.cljs$core$IFn$_invoke$arity$1 ? fexpr__59585.cljs$core$IFn$_invoke$arity$1(dissipation_fn) : fexpr__59585.call(null,dissipation_fn));
})();
return (fexpr__59584.cljs$core$IFn$_invoke$arity$1 ? fexpr__59584.cljs$core$IFn$_invoke$arity$1(L_state) : fexpr__59584.call(null,L_state));
})();
var minus_F1 = (function (){var fexpr__59588 = (function (){var fexpr__59589 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59589.cljs$core$IFn$_invoke$arity$1 ? fexpr__59589.cljs$core$IFn$_invoke$arity$1(dissipation_fn) : fexpr__59589.call(null,dissipation_fn));
})();
return (fexpr__59588.cljs$core$IFn$_invoke$arity$1 ? fexpr__59588.cljs$core$IFn$_invoke$arity$1(L_state) : fexpr__59588.call(null,L_state));
})();
var pyd = emmy.generic._.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59591 = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((-1),(function (){var fexpr__59592 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59592.cljs$core$IFn$_invoke$arity$1 ? fexpr__59592.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59592.call(null,R));
})());
return (fexpr__59591.cljs$core$IFn$_invoke$arity$1 ? fexpr__59591.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59591.call(null,s));
})(),minus_F1);
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(vx,(function (){var fexpr__59594 = (function (){var fexpr__59595 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59595.cljs$core$IFn$_invoke$arity$1 ? fexpr__59595.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59595.call(null,minus_P));
})();
return (fexpr__59594.cljs$core$IFn$_invoke$arity$1 ? fexpr__59594.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59594.call(null,s));
})(),vx),emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._.cljs$core$IFn$_invoke$arity$2(minus_F,emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__59597 = (function (){var fexpr__59598 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((0)) : emmy.calculus.derivative.partial.call(null,(0)));
return (fexpr__59598.cljs$core$IFn$_invoke$arity$1 ? fexpr__59598.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59598.call(null,minus_P));
})();
return (fexpr__59597.cljs$core$IFn$_invoke$arity$1 ? fexpr__59597.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59597.call(null,s));
})(),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59600 = (function (){var fexpr__59601 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59601.cljs$core$IFn$_invoke$arity$1 ? fexpr__59601.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59601.call(null,minus_P));
})();
return (fexpr__59600.cljs$core$IFn$_invoke$arity$1 ? fexpr__59600.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59600.call(null,s));
})(),vx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59603 = (function (){var fexpr__59604 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59604.cljs$core$IFn$_invoke$arity$1 ? fexpr__59604.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59604.call(null,minus_P));
})();
return (fexpr__59603.cljs$core$IFn$_invoke$arity$1 ? fexpr__59603.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59603.call(null,s));
})(),vy),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59606 = (function (){var fexpr__59607 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59607.cljs$core$IFn$_invoke$arity$1 ? fexpr__59607.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59607.call(null,minus_P));
})();
return (fexpr__59606.cljs$core$IFn$_invoke$arity$1 ? fexpr__59606.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59606.call(null,s));
})(),pyd)], 0))),minus_F0));
});
}));

(emmy.mechanics.routhian.Routhian__GT_acceleration.cljs$lang$maxFixedArity = 2);

emmy.mechanics.routhian.Routhian__GT_state_derivative = (function emmy$mechanics$routhian$Routhian__GT_state_derivative(var_args){
var G__59610 = arguments.length;
switch (G__59610) {
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
return (function (p__59611){
var vec__59612 = p__59611;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59612,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59612,(1),null);
var vec__59615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59612,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59615,(0),null);
var s = vec__59612;
var minus_P = (function (){var fexpr__59618 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59618.cljs$core$IFn$_invoke$arity$1 ? fexpr__59618.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59618.call(null,R));
})();
var minus_F = (function (){var fexpr__59620 = (function (){var fexpr__59621 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59621.cljs$core$IFn$_invoke$arity$1 ? fexpr__59621.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59621.call(null,R));
})();
return (fexpr__59620.cljs$core$IFn$_invoke$arity$1 ? fexpr__59620.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59620.call(null,s));
})();
var vy = (function (){var fexpr__59623 = (function (){var fexpr__59624 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59624.cljs$core$IFn$_invoke$arity$1 ? fexpr__59624.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59624.call(null,R));
})();
return (fexpr__59623.cljs$core$IFn$_invoke$arity$1 ? fexpr__59623.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59623.call(null,s));
})();
var pyd = emmy.generic._.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__59627 = (function (){var fexpr__59629 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59629.cljs$core$IFn$_invoke$arity$1 ? fexpr__59629.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59629.call(null,R));
})();
return (fexpr__59627.cljs$core$IFn$_invoke$arity$1 ? fexpr__59627.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59627.call(null,s));
})());
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0)),emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(vx,(function (){var fexpr__59631 = (function (){var fexpr__59632 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59632.cljs$core$IFn$_invoke$arity$1 ? fexpr__59632.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59632.call(null,minus_P));
})();
return (fexpr__59631.cljs$core$IFn$_invoke$arity$1 ? fexpr__59631.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59631.call(null,s));
})(),vx),emmy.generic._.cljs$core$IFn$_invoke$arity$2(minus_F,emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__59634 = (function (){var fexpr__59635 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((0)) : emmy.calculus.derivative.partial.call(null,(0)));
return (fexpr__59635.cljs$core$IFn$_invoke$arity$1 ? fexpr__59635.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59635.call(null,minus_P));
})();
return (fexpr__59634.cljs$core$IFn$_invoke$arity$1 ? fexpr__59634.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59634.call(null,s));
})(),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59637 = (function (){var fexpr__59638 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59638.cljs$core$IFn$_invoke$arity$1 ? fexpr__59638.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59638.call(null,minus_P));
})();
return (fexpr__59637.cljs$core$IFn$_invoke$arity$1 ? fexpr__59637.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59637.call(null,s));
})(),vx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59640 = (function (){var fexpr__59641 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59641.cljs$core$IFn$_invoke$arity$1 ? fexpr__59641.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59641.call(null,minus_P));
})();
return (fexpr__59640.cljs$core$IFn$_invoke$arity$1 ? fexpr__59640.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59640.call(null,s));
})(),vy),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59643 = (function (){var fexpr__59645 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59645.cljs$core$IFn$_invoke$arity$1 ? fexpr__59645.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59645.call(null,minus_P));
})();
return (fexpr__59643.cljs$core$IFn$_invoke$arity$1 ? fexpr__59643.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59643.call(null,s));
})(),pyd)], 0)))),pyd], 0))], 0));
});
}));

(emmy.mechanics.routhian.Routhian__GT_state_derivative.cljs$core$IFn$_invoke$arity$2 = (function (R,dissipation_fn){
return (function (p__59646){
var vec__59647 = p__59646;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59647,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59647,(1),null);
var vec__59650 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59647,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59650,(0),null);
var s = vec__59647;
var minus_P = (function (){var fexpr__59653 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59653.cljs$core$IFn$_invoke$arity$1 ? fexpr__59653.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59653.call(null,R));
})();
var minus_F = (function (){var fexpr__59655 = (function (){var fexpr__59656 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59656.cljs$core$IFn$_invoke$arity$1 ? fexpr__59656.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59656.call(null,R));
})();
return (fexpr__59655.cljs$core$IFn$_invoke$arity$1 ? fexpr__59655.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59655.call(null,s));
})();
var vy = (function (){var fexpr__59658 = (function (){var fexpr__59659 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59659.cljs$core$IFn$_invoke$arity$1 ? fexpr__59659.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59659.call(null,R));
})();
return (fexpr__59658.cljs$core$IFn$_invoke$arity$1 ? fexpr__59658.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59658.call(null,s));
})();
var L_state = emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0))], 0));
var minus_F0 = (function (){var fexpr__59661 = (function (){var fexpr__59662 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59662.cljs$core$IFn$_invoke$arity$1 ? fexpr__59662.cljs$core$IFn$_invoke$arity$1(dissipation_fn) : fexpr__59662.call(null,dissipation_fn));
})();
return (fexpr__59661.cljs$core$IFn$_invoke$arity$1 ? fexpr__59661.cljs$core$IFn$_invoke$arity$1(L_state) : fexpr__59661.call(null,L_state));
})();
var minus_F1 = (function (){var fexpr__59664 = (function (){var fexpr__59665 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59665.cljs$core$IFn$_invoke$arity$1 ? fexpr__59665.cljs$core$IFn$_invoke$arity$1(dissipation_fn) : fexpr__59665.call(null,dissipation_fn));
})();
return (fexpr__59664.cljs$core$IFn$_invoke$arity$1 ? fexpr__59664.cljs$core$IFn$_invoke$arity$1(L_state) : fexpr__59664.call(null,L_state));
})();
var pyd = emmy.generic._.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59667 = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((-1),(function (){var fexpr__59668 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59668.cljs$core$IFn$_invoke$arity$1 ? fexpr__59668.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59668.call(null,R));
})());
return (fexpr__59667.cljs$core$IFn$_invoke$arity$1 ? fexpr__59667.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59667.call(null,s));
})(),minus_F1);
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0)),emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(vx,(function (){var fexpr__59670 = (function (){var fexpr__59671 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59671.cljs$core$IFn$_invoke$arity$1 ? fexpr__59671.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59671.call(null,minus_P));
})();
return (fexpr__59670.cljs$core$IFn$_invoke$arity$1 ? fexpr__59670.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59670.call(null,s));
})(),vx),emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._.cljs$core$IFn$_invoke$arity$2(minus_F,emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__59673 = (function (){var fexpr__59674 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((0)) : emmy.calculus.derivative.partial.call(null,(0)));
return (fexpr__59674.cljs$core$IFn$_invoke$arity$1 ? fexpr__59674.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59674.call(null,minus_P));
})();
return (fexpr__59673.cljs$core$IFn$_invoke$arity$1 ? fexpr__59673.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59673.call(null,s));
})(),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59676 = (function (){var fexpr__59677 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59677.cljs$core$IFn$_invoke$arity$1 ? fexpr__59677.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59677.call(null,minus_P));
})();
return (fexpr__59676.cljs$core$IFn$_invoke$arity$1 ? fexpr__59676.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59676.call(null,s));
})(),vx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59679 = (function (){var fexpr__59680 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59680.cljs$core$IFn$_invoke$arity$1 ? fexpr__59680.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59680.call(null,minus_P));
})();
return (fexpr__59679.cljs$core$IFn$_invoke$arity$1 ? fexpr__59679.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59679.call(null,s));
})(),vy),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59682 = (function (){var fexpr__59683 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59683.cljs$core$IFn$_invoke$arity$1 ? fexpr__59683.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59683.call(null,minus_P));
})();
return (fexpr__59682.cljs$core$IFn$_invoke$arity$1 ? fexpr__59682.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59682.call(null,s));
})(),pyd)], 0))),minus_F0)),pyd], 0))], 0));
});
}));

(emmy.mechanics.routhian.Routhian__GT_state_derivative.cljs$lang$maxFixedArity = 2);

emmy.mechanics.routhian.Lagrangian_state__GT_Routhian_state = (function emmy$mechanics$routhian$Lagrangian_state__GT_Routhian_state(L){
return (function (p__59686){
var vec__59687 = p__59686;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59687,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59687,(1),null);
var vec__59690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59687,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59690,(0),null);
var s = vec__59687;
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59696 = (function (){var fexpr__59697 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((2)) : emmy.calculus.derivative.partial.call(null,(2)));
return (fexpr__59697.cljs$core$IFn$_invoke$arity$1 ? fexpr__59697.cljs$core$IFn$_invoke$arity$1(L) : fexpr__59697.call(null,L));
})();
return (fexpr__59696.cljs$core$IFn$_invoke$arity$1 ? fexpr__59696.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59696.call(null,s));
})(),(1));
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,py], 0))], 0));
});
});
emmy.mechanics.routhian.Routhian_state__GT_Lagrangian_state = (function emmy$mechanics$routhian$Routhian_state__GT_Lagrangian_state(R){
return (function (p__59698){
var vec__59699 = p__59698;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59699,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59699,(1),null);
var vec__59702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59699,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59702,(0),null);
var s = vec__59699;
var vy = cljs.core.nth.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59706 = (function (){var fexpr__59707 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((2)) : emmy.calculus.derivative.partial.call(null,(2)));
return (fexpr__59707.cljs$core$IFn$_invoke$arity$1 ? fexpr__59707.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59707.call(null,R));
})();
return (fexpr__59706.cljs$core$IFn$_invoke$arity$1 ? fexpr__59706.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59706.call(null,s));
})(),(1));
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0))], 0));
});
});

//# sourceMappingURL=emmy.mechanics.routhian.js.map
