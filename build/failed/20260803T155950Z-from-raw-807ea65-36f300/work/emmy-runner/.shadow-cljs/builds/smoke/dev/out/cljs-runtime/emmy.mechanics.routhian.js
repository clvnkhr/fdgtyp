goog.provide('emmy.mechanics.routhian');
emmy.mechanics.routhian.Lagrangian__GT_Routhian = (function emmy$mechanics$routhian$Lagrangian__GT_Routhian(Lagrangian){
return (function (p__59483){
var vec__59484 = p__59483;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59484,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59484,(1),null);
var vec__59487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59484,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59487,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59487,(1),null);
var L = (function emmy$mechanics$routhian$Lagrangian__GT_Routhian_$_L(vy){
var G__59491 = emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0))], 0));
return (Lagrangian.cljs$core$IFn$_invoke$arity$1 ? Lagrangian.cljs$core$IFn$_invoke$arity$1(G__59491) : Lagrangian.call(null,G__59491));
});
var fexpr__59492 = emmy.mechanics.hamilton.Legendre_transform_procedure(L);
return (fexpr__59492.cljs$core$IFn$_invoke$arity$1 ? fexpr__59492.cljs$core$IFn$_invoke$arity$1(py) : fexpr__59492.call(null,py));
});
});
emmy.mechanics.routhian.Routh_equations = (function emmy$mechanics$routhian$Routh_equations(Routhian){
return (function (x,y,py){
return (function (t){
var L = (function emmy$mechanics$routhian$Routh_equations_$_L(p__59507){
var vec__59508 = p__59507;
var tau = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59508,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59508,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59508,(2),null);
var G__59511 = emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tau,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([q,(y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tau) : y.call(null,tau))], 0)),emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v,(py.cljs$core$IFn$_invoke$arity$1 ? py.cljs$core$IFn$_invoke$arity$1(tau) : py.call(null,tau))], 0))], 0));
return (Routhian.cljs$core$IFn$_invoke$arity$1 ? Routhian.cljs$core$IFn$_invoke$arity$1(G__59511) : Routhian.call(null,G__59511));
});
var H = (function emmy$mechanics$routhian$Routh_equations_$_H(p__59512){
var vec__59513 = p__59512;
var tau = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59513,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59513,(1),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59513,(2),null);
var G__59516 = emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tau,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tau) : x.call(null,tau)),q], 0)),emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__59517 = (emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(x) : emmy.calculus.derivative.D.call(null,x));
return (fexpr__59517.cljs$core$IFn$_invoke$arity$1 ? fexpr__59517.cljs$core$IFn$_invoke$arity$1(tau) : fexpr__59517.call(null,tau));
})(),p], 0))], 0));
return (Routhian.cljs$core$IFn$_invoke$arity$1 ? Routhian.cljs$core$IFn$_invoke$arity$1(G__59516) : Routhian.call(null,G__59516));
});
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__59520 = (function (){var fexpr__59521 = emmy.mechanics.lagrange.Lagrange_equations.cljs$core$IFn$_invoke$arity$1(L);
return (fexpr__59521.cljs$core$IFn$_invoke$arity$1 ? fexpr__59521.cljs$core$IFn$_invoke$arity$1(x) : fexpr__59521.call(null,x));
})();
return (fexpr__59520.cljs$core$IFn$_invoke$arity$1 ? fexpr__59520.cljs$core$IFn$_invoke$arity$1(t) : fexpr__59520.call(null,t));
})(),(function (){var fexpr__59522 = emmy.mechanics.hamilton.Hamilton_equations(H)(y,py);
return (fexpr__59522.cljs$core$IFn$_invoke$arity$1 ? fexpr__59522.cljs$core$IFn$_invoke$arity$1(t) : fexpr__59522.call(null,t));
})()], 0));
});
});
});
emmy.mechanics.routhian.Routhian__GT_acceleration = (function emmy$mechanics$routhian$Routhian__GT_acceleration(var_args){
var G__59524 = arguments.length;
switch (G__59524) {
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
return (function (p__59525){
var vec__59526 = p__59525;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59526,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59526,(1),null);
var vec__59529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59526,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59529,(0),null);
var s = vec__59526;
var minus_P = (function (){var fexpr__59532 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59532.cljs$core$IFn$_invoke$arity$1 ? fexpr__59532.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59532.call(null,R));
})();
var minus_F = (function (){var fexpr__59534 = (function (){var fexpr__59535 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59535.cljs$core$IFn$_invoke$arity$1 ? fexpr__59535.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59535.call(null,R));
})();
return (fexpr__59534.cljs$core$IFn$_invoke$arity$1 ? fexpr__59534.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59534.call(null,s));
})();
var vy = (function (){var fexpr__59537 = (function (){var fexpr__59538 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59538.cljs$core$IFn$_invoke$arity$1 ? fexpr__59538.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59538.call(null,R));
})();
return (fexpr__59537.cljs$core$IFn$_invoke$arity$1 ? fexpr__59537.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59537.call(null,s));
})();
var pyd = (function (){var fexpr__59540 = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((-1),(function (){var fexpr__59541 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59541.cljs$core$IFn$_invoke$arity$1 ? fexpr__59541.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59541.call(null,R));
})());
return (fexpr__59540.cljs$core$IFn$_invoke$arity$1 ? fexpr__59540.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59540.call(null,s));
})();
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(vx,(function (){var fexpr__59543 = (function (){var fexpr__59544 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59544.cljs$core$IFn$_invoke$arity$1 ? fexpr__59544.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59544.call(null,minus_P));
})();
return (fexpr__59543.cljs$core$IFn$_invoke$arity$1 ? fexpr__59543.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59543.call(null,s));
})(),vx),emmy.generic._.cljs$core$IFn$_invoke$arity$2(minus_F,emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__59546 = (function (){var fexpr__59547 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((0)) : emmy.calculus.derivative.partial.call(null,(0)));
return (fexpr__59547.cljs$core$IFn$_invoke$arity$1 ? fexpr__59547.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59547.call(null,minus_P));
})();
return (fexpr__59546.cljs$core$IFn$_invoke$arity$1 ? fexpr__59546.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59546.call(null,s));
})(),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59549 = (function (){var fexpr__59550 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59550.cljs$core$IFn$_invoke$arity$1 ? fexpr__59550.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59550.call(null,minus_P));
})();
return (fexpr__59549.cljs$core$IFn$_invoke$arity$1 ? fexpr__59549.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59549.call(null,s));
})(),vx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59552 = (function (){var fexpr__59553 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59553.cljs$core$IFn$_invoke$arity$1 ? fexpr__59553.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59553.call(null,minus_P));
})();
return (fexpr__59552.cljs$core$IFn$_invoke$arity$1 ? fexpr__59552.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59552.call(null,s));
})(),vy),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59555 = (function (){var fexpr__59556 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59556.cljs$core$IFn$_invoke$arity$1 ? fexpr__59556.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59556.call(null,minus_P));
})();
return (fexpr__59555.cljs$core$IFn$_invoke$arity$1 ? fexpr__59555.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59555.call(null,s));
})(),pyd)], 0))));
});
}));

(emmy.mechanics.routhian.Routhian__GT_acceleration.cljs$core$IFn$_invoke$arity$2 = (function (R,dissipation_fn){
return (function (p__59557){
var vec__59558 = p__59557;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59558,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59558,(1),null);
var vec__59561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59558,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59561,(0),null);
var s = vec__59558;
var minus_P = (function (){var fexpr__59564 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59564.cljs$core$IFn$_invoke$arity$1 ? fexpr__59564.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59564.call(null,R));
})();
var minus_F = (function (){var fexpr__59566 = (function (){var fexpr__59567 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59567.cljs$core$IFn$_invoke$arity$1 ? fexpr__59567.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59567.call(null,R));
})();
return (fexpr__59566.cljs$core$IFn$_invoke$arity$1 ? fexpr__59566.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59566.call(null,s));
})();
var vy = (function (){var fexpr__59569 = (function (){var fexpr__59570 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59570.cljs$core$IFn$_invoke$arity$1 ? fexpr__59570.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59570.call(null,R));
})();
return (fexpr__59569.cljs$core$IFn$_invoke$arity$1 ? fexpr__59569.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59569.call(null,s));
})();
var L_state = emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0))], 0));
var minus_F0 = (function (){var fexpr__59572 = (function (){var fexpr__59573 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59573.cljs$core$IFn$_invoke$arity$1 ? fexpr__59573.cljs$core$IFn$_invoke$arity$1(dissipation_fn) : fexpr__59573.call(null,dissipation_fn));
})();
return (fexpr__59572.cljs$core$IFn$_invoke$arity$1 ? fexpr__59572.cljs$core$IFn$_invoke$arity$1(L_state) : fexpr__59572.call(null,L_state));
})();
var minus_F1 = (function (){var fexpr__59575 = (function (){var fexpr__59576 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59576.cljs$core$IFn$_invoke$arity$1 ? fexpr__59576.cljs$core$IFn$_invoke$arity$1(dissipation_fn) : fexpr__59576.call(null,dissipation_fn));
})();
return (fexpr__59575.cljs$core$IFn$_invoke$arity$1 ? fexpr__59575.cljs$core$IFn$_invoke$arity$1(L_state) : fexpr__59575.call(null,L_state));
})();
var pyd = emmy.generic._.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59578 = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((-1),(function (){var fexpr__59579 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59579.cljs$core$IFn$_invoke$arity$1 ? fexpr__59579.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59579.call(null,R));
})());
return (fexpr__59578.cljs$core$IFn$_invoke$arity$1 ? fexpr__59578.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59578.call(null,s));
})(),minus_F1);
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(vx,(function (){var fexpr__59581 = (function (){var fexpr__59582 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59582.cljs$core$IFn$_invoke$arity$1 ? fexpr__59582.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59582.call(null,minus_P));
})();
return (fexpr__59581.cljs$core$IFn$_invoke$arity$1 ? fexpr__59581.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59581.call(null,s));
})(),vx),emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._.cljs$core$IFn$_invoke$arity$2(minus_F,emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__59584 = (function (){var fexpr__59585 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((0)) : emmy.calculus.derivative.partial.call(null,(0)));
return (fexpr__59585.cljs$core$IFn$_invoke$arity$1 ? fexpr__59585.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59585.call(null,minus_P));
})();
return (fexpr__59584.cljs$core$IFn$_invoke$arity$1 ? fexpr__59584.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59584.call(null,s));
})(),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59587 = (function (){var fexpr__59588 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59588.cljs$core$IFn$_invoke$arity$1 ? fexpr__59588.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59588.call(null,minus_P));
})();
return (fexpr__59587.cljs$core$IFn$_invoke$arity$1 ? fexpr__59587.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59587.call(null,s));
})(),vx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59590 = (function (){var fexpr__59591 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59591.cljs$core$IFn$_invoke$arity$1 ? fexpr__59591.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59591.call(null,minus_P));
})();
return (fexpr__59590.cljs$core$IFn$_invoke$arity$1 ? fexpr__59590.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59590.call(null,s));
})(),vy),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59593 = (function (){var fexpr__59594 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59594.cljs$core$IFn$_invoke$arity$1 ? fexpr__59594.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59594.call(null,minus_P));
})();
return (fexpr__59593.cljs$core$IFn$_invoke$arity$1 ? fexpr__59593.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59593.call(null,s));
})(),pyd)], 0))),minus_F0));
});
}));

(emmy.mechanics.routhian.Routhian__GT_acceleration.cljs$lang$maxFixedArity = 2);

emmy.mechanics.routhian.Routhian__GT_state_derivative = (function emmy$mechanics$routhian$Routhian__GT_state_derivative(var_args){
var G__59598 = arguments.length;
switch (G__59598) {
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
return (function (p__59604){
var vec__59606 = p__59604;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59606,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59606,(1),null);
var vec__59609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59606,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59609,(0),null);
var s = vec__59606;
var minus_P = (function (){var fexpr__59612 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59612.cljs$core$IFn$_invoke$arity$1 ? fexpr__59612.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59612.call(null,R));
})();
var minus_F = (function (){var fexpr__59618 = (function (){var fexpr__59619 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59619.cljs$core$IFn$_invoke$arity$1 ? fexpr__59619.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59619.call(null,R));
})();
return (fexpr__59618.cljs$core$IFn$_invoke$arity$1 ? fexpr__59618.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59618.call(null,s));
})();
var vy = (function (){var fexpr__59621 = (function (){var fexpr__59622 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59622.cljs$core$IFn$_invoke$arity$1 ? fexpr__59622.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59622.call(null,R));
})();
return (fexpr__59621.cljs$core$IFn$_invoke$arity$1 ? fexpr__59621.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59621.call(null,s));
})();
var pyd = emmy.generic._.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__59624 = (function (){var fexpr__59625 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59625.cljs$core$IFn$_invoke$arity$1 ? fexpr__59625.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59625.call(null,R));
})();
return (fexpr__59624.cljs$core$IFn$_invoke$arity$1 ? fexpr__59624.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59624.call(null,s));
})());
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0)),emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(vx,(function (){var fexpr__59628 = (function (){var fexpr__59629 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59629.cljs$core$IFn$_invoke$arity$1 ? fexpr__59629.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59629.call(null,minus_P));
})();
return (fexpr__59628.cljs$core$IFn$_invoke$arity$1 ? fexpr__59628.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59628.call(null,s));
})(),vx),emmy.generic._.cljs$core$IFn$_invoke$arity$2(minus_F,emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__59631 = (function (){var fexpr__59632 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((0)) : emmy.calculus.derivative.partial.call(null,(0)));
return (fexpr__59632.cljs$core$IFn$_invoke$arity$1 ? fexpr__59632.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59632.call(null,minus_P));
})();
return (fexpr__59631.cljs$core$IFn$_invoke$arity$1 ? fexpr__59631.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59631.call(null,s));
})(),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59634 = (function (){var fexpr__59635 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59635.cljs$core$IFn$_invoke$arity$1 ? fexpr__59635.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59635.call(null,minus_P));
})();
return (fexpr__59634.cljs$core$IFn$_invoke$arity$1 ? fexpr__59634.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59634.call(null,s));
})(),vx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59637 = (function (){var fexpr__59638 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59638.cljs$core$IFn$_invoke$arity$1 ? fexpr__59638.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59638.call(null,minus_P));
})();
return (fexpr__59637.cljs$core$IFn$_invoke$arity$1 ? fexpr__59637.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59637.call(null,s));
})(),vy),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59640 = (function (){var fexpr__59641 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59641.cljs$core$IFn$_invoke$arity$1 ? fexpr__59641.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59641.call(null,minus_P));
})();
return (fexpr__59640.cljs$core$IFn$_invoke$arity$1 ? fexpr__59640.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59640.call(null,s));
})(),pyd)], 0)))),pyd], 0))], 0));
});
}));

(emmy.mechanics.routhian.Routhian__GT_state_derivative.cljs$core$IFn$_invoke$arity$2 = (function (R,dissipation_fn){
return (function (p__59642){
var vec__59643 = p__59642;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59643,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59643,(1),null);
var vec__59646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59643,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59646,(0),null);
var s = vec__59643;
var minus_P = (function (){var fexpr__59649 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59649.cljs$core$IFn$_invoke$arity$1 ? fexpr__59649.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59649.call(null,R));
})();
var minus_F = (function (){var fexpr__59651 = (function (){var fexpr__59653 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59653.cljs$core$IFn$_invoke$arity$1 ? fexpr__59653.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59653.call(null,R));
})();
return (fexpr__59651.cljs$core$IFn$_invoke$arity$1 ? fexpr__59651.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59651.call(null,s));
})();
var vy = (function (){var fexpr__59655 = (function (){var fexpr__59656 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59656.cljs$core$IFn$_invoke$arity$1 ? fexpr__59656.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59656.call(null,R));
})();
return (fexpr__59655.cljs$core$IFn$_invoke$arity$1 ? fexpr__59655.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59655.call(null,s));
})();
var L_state = emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0))], 0));
var minus_F0 = (function (){var fexpr__59658 = (function (){var fexpr__59659 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59659.cljs$core$IFn$_invoke$arity$1 ? fexpr__59659.cljs$core$IFn$_invoke$arity$1(dissipation_fn) : fexpr__59659.call(null,dissipation_fn));
})();
return (fexpr__59658.cljs$core$IFn$_invoke$arity$1 ? fexpr__59658.cljs$core$IFn$_invoke$arity$1(L_state) : fexpr__59658.call(null,L_state));
})();
var minus_F1 = (function (){var fexpr__59661 = (function (){var fexpr__59662 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59662.cljs$core$IFn$_invoke$arity$1 ? fexpr__59662.cljs$core$IFn$_invoke$arity$1(dissipation_fn) : fexpr__59662.call(null,dissipation_fn));
})();
return (fexpr__59661.cljs$core$IFn$_invoke$arity$1 ? fexpr__59661.cljs$core$IFn$_invoke$arity$1(L_state) : fexpr__59661.call(null,L_state));
})();
var pyd = emmy.generic._.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59666 = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((-1),(function (){var fexpr__59667 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59667.cljs$core$IFn$_invoke$arity$1 ? fexpr__59667.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59667.call(null,R));
})());
return (fexpr__59666.cljs$core$IFn$_invoke$arity$1 ? fexpr__59666.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59666.call(null,s));
})(),minus_F1);
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0)),emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(vx,(function (){var fexpr__59669 = (function (){var fexpr__59670 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59670.cljs$core$IFn$_invoke$arity$1 ? fexpr__59670.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59670.call(null,minus_P));
})();
return (fexpr__59669.cljs$core$IFn$_invoke$arity$1 ? fexpr__59669.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59669.call(null,s));
})(),vx),emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._.cljs$core$IFn$_invoke$arity$2(minus_F,emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__59673 = (function (){var fexpr__59674 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((0)) : emmy.calculus.derivative.partial.call(null,(0)));
return (fexpr__59674.cljs$core$IFn$_invoke$arity$1 ? fexpr__59674.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59674.call(null,minus_P));
})();
return (fexpr__59673.cljs$core$IFn$_invoke$arity$1 ? fexpr__59673.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59673.call(null,s));
})(),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59678 = (function (){var fexpr__59681 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59681.cljs$core$IFn$_invoke$arity$1 ? fexpr__59681.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59681.call(null,minus_P));
})();
return (fexpr__59678.cljs$core$IFn$_invoke$arity$1 ? fexpr__59678.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59678.call(null,s));
})(),vx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59683 = (function (){var fexpr__59684 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59684.cljs$core$IFn$_invoke$arity$1 ? fexpr__59684.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59684.call(null,minus_P));
})();
return (fexpr__59683.cljs$core$IFn$_invoke$arity$1 ? fexpr__59683.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59683.call(null,s));
})(),vy),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59686 = (function (){var fexpr__59687 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59687.cljs$core$IFn$_invoke$arity$1 ? fexpr__59687.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59687.call(null,minus_P));
})();
return (fexpr__59686.cljs$core$IFn$_invoke$arity$1 ? fexpr__59686.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59686.call(null,s));
})(),pyd)], 0))),minus_F0)),pyd], 0))], 0));
});
}));

(emmy.mechanics.routhian.Routhian__GT_state_derivative.cljs$lang$maxFixedArity = 2);

emmy.mechanics.routhian.Lagrangian_state__GT_Routhian_state = (function emmy$mechanics$routhian$Lagrangian_state__GT_Routhian_state(L){
return (function (p__59688){
var vec__59689 = p__59688;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59689,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59689,(1),null);
var vec__59692 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59689,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59692,(0),null);
var s = vec__59689;
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59696 = (function (){var fexpr__59697 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((2)) : emmy.calculus.derivative.partial.call(null,(2)));
return (fexpr__59697.cljs$core$IFn$_invoke$arity$1 ? fexpr__59697.cljs$core$IFn$_invoke$arity$1(L) : fexpr__59697.call(null,L));
})();
return (fexpr__59696.cljs$core$IFn$_invoke$arity$1 ? fexpr__59696.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59696.call(null,s));
})(),(1));
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,py], 0))], 0));
});
});
emmy.mechanics.routhian.Routhian_state__GT_Lagrangian_state = (function emmy$mechanics$routhian$Routhian_state__GT_Lagrangian_state(R){
return (function (p__59700){
var vec__59701 = p__59700;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59701,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59701,(1),null);
var vec__59704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59701,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59704,(0),null);
var s = vec__59701;
var vy = cljs.core.nth.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59708 = (function (){var fexpr__59709 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((2)) : emmy.calculus.derivative.partial.call(null,(2)));
return (fexpr__59709.cljs$core$IFn$_invoke$arity$1 ? fexpr__59709.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59709.call(null,R));
})();
return (fexpr__59708.cljs$core$IFn$_invoke$arity$1 ? fexpr__59708.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59708.call(null,s));
})(),(1));
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0))], 0));
});
});

//# sourceMappingURL=emmy.mechanics.routhian.js.map
