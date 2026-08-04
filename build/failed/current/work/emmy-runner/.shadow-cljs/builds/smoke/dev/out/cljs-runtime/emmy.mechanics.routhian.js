goog.provide('emmy.mechanics.routhian');
emmy.mechanics.routhian.Lagrangian__GT_Routhian = (function emmy$mechanics$routhian$Lagrangian__GT_Routhian(Lagrangian){
return (function (p__59484){
var vec__59485 = p__59484;
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
var L = (function emmy$mechanics$routhian$Routh_equations_$_L(p__59508){
var vec__59509 = p__59508;
var tau = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59509,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59509,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59509,(2),null);
var G__59512 = emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tau,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([q,(y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tau) : y.call(null,tau))], 0)),emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v,(py.cljs$core$IFn$_invoke$arity$1 ? py.cljs$core$IFn$_invoke$arity$1(tau) : py.call(null,tau))], 0))], 0));
return (Routhian.cljs$core$IFn$_invoke$arity$1 ? Routhian.cljs$core$IFn$_invoke$arity$1(G__59512) : Routhian.call(null,G__59512));
});
var H = (function emmy$mechanics$routhian$Routh_equations_$_H(p__59513){
var vec__59514 = p__59513;
var tau = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59514,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59514,(1),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59514,(2),null);
var G__59517 = emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tau,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tau) : x.call(null,tau)),q], 0)),emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__59518 = (emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(x) : emmy.calculus.derivative.D.call(null,x));
return (fexpr__59518.cljs$core$IFn$_invoke$arity$1 ? fexpr__59518.cljs$core$IFn$_invoke$arity$1(tau) : fexpr__59518.call(null,tau));
})(),p], 0))], 0));
return (Routhian.cljs$core$IFn$_invoke$arity$1 ? Routhian.cljs$core$IFn$_invoke$arity$1(G__59517) : Routhian.call(null,G__59517));
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
var G__59532 = arguments.length;
switch (G__59532) {
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
return (function (p__59537){
var vec__59538 = p__59537;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59538,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59538,(1),null);
var vec__59541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59538,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59541,(0),null);
var s = vec__59538;
var minus_P = (function (){var fexpr__59544 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59544.cljs$core$IFn$_invoke$arity$1 ? fexpr__59544.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59544.call(null,R));
})();
var minus_F = (function (){var fexpr__59547 = (function (){var fexpr__59548 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59548.cljs$core$IFn$_invoke$arity$1 ? fexpr__59548.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59548.call(null,R));
})();
return (fexpr__59547.cljs$core$IFn$_invoke$arity$1 ? fexpr__59547.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59547.call(null,s));
})();
var vy = (function (){var fexpr__59551 = (function (){var fexpr__59552 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59552.cljs$core$IFn$_invoke$arity$1 ? fexpr__59552.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59552.call(null,R));
})();
return (fexpr__59551.cljs$core$IFn$_invoke$arity$1 ? fexpr__59551.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59551.call(null,s));
})();
var pyd = (function (){var fexpr__59554 = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((-1),(function (){var fexpr__59555 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59555.cljs$core$IFn$_invoke$arity$1 ? fexpr__59555.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59555.call(null,R));
})());
return (fexpr__59554.cljs$core$IFn$_invoke$arity$1 ? fexpr__59554.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59554.call(null,s));
})();
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(vx,(function (){var fexpr__59557 = (function (){var fexpr__59558 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59558.cljs$core$IFn$_invoke$arity$1 ? fexpr__59558.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59558.call(null,minus_P));
})();
return (fexpr__59557.cljs$core$IFn$_invoke$arity$1 ? fexpr__59557.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59557.call(null,s));
})(),vx),emmy.generic._.cljs$core$IFn$_invoke$arity$2(minus_F,emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__59560 = (function (){var fexpr__59561 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((0)) : emmy.calculus.derivative.partial.call(null,(0)));
return (fexpr__59561.cljs$core$IFn$_invoke$arity$1 ? fexpr__59561.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59561.call(null,minus_P));
})();
return (fexpr__59560.cljs$core$IFn$_invoke$arity$1 ? fexpr__59560.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59560.call(null,s));
})(),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59563 = (function (){var fexpr__59564 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59564.cljs$core$IFn$_invoke$arity$1 ? fexpr__59564.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59564.call(null,minus_P));
})();
return (fexpr__59563.cljs$core$IFn$_invoke$arity$1 ? fexpr__59563.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59563.call(null,s));
})(),vx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59566 = (function (){var fexpr__59567 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59567.cljs$core$IFn$_invoke$arity$1 ? fexpr__59567.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59567.call(null,minus_P));
})();
return (fexpr__59566.cljs$core$IFn$_invoke$arity$1 ? fexpr__59566.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59566.call(null,s));
})(),vy),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59569 = (function (){var fexpr__59570 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59570.cljs$core$IFn$_invoke$arity$1 ? fexpr__59570.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59570.call(null,minus_P));
})();
return (fexpr__59569.cljs$core$IFn$_invoke$arity$1 ? fexpr__59569.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59569.call(null,s));
})(),pyd)], 0))));
});
}));

(emmy.mechanics.routhian.Routhian__GT_acceleration.cljs$core$IFn$_invoke$arity$2 = (function (R,dissipation_fn){
return (function (p__59573){
var vec__59574 = p__59573;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59574,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59574,(1),null);
var vec__59577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59574,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59577,(0),null);
var s = vec__59574;
var minus_P = (function (){var fexpr__59580 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59580.cljs$core$IFn$_invoke$arity$1 ? fexpr__59580.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59580.call(null,R));
})();
var minus_F = (function (){var fexpr__59582 = (function (){var fexpr__59583 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59583.cljs$core$IFn$_invoke$arity$1 ? fexpr__59583.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59583.call(null,R));
})();
return (fexpr__59582.cljs$core$IFn$_invoke$arity$1 ? fexpr__59582.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59582.call(null,s));
})();
var vy = (function (){var fexpr__59585 = (function (){var fexpr__59586 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59586.cljs$core$IFn$_invoke$arity$1 ? fexpr__59586.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59586.call(null,R));
})();
return (fexpr__59585.cljs$core$IFn$_invoke$arity$1 ? fexpr__59585.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59585.call(null,s));
})();
var L_state = emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0))], 0));
var minus_F0 = (function (){var fexpr__59588 = (function (){var fexpr__59589 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59589.cljs$core$IFn$_invoke$arity$1 ? fexpr__59589.cljs$core$IFn$_invoke$arity$1(dissipation_fn) : fexpr__59589.call(null,dissipation_fn));
})();
return (fexpr__59588.cljs$core$IFn$_invoke$arity$1 ? fexpr__59588.cljs$core$IFn$_invoke$arity$1(L_state) : fexpr__59588.call(null,L_state));
})();
var minus_F1 = (function (){var fexpr__59591 = (function (){var fexpr__59592 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59592.cljs$core$IFn$_invoke$arity$1 ? fexpr__59592.cljs$core$IFn$_invoke$arity$1(dissipation_fn) : fexpr__59592.call(null,dissipation_fn));
})();
return (fexpr__59591.cljs$core$IFn$_invoke$arity$1 ? fexpr__59591.cljs$core$IFn$_invoke$arity$1(L_state) : fexpr__59591.call(null,L_state));
})();
var pyd = emmy.generic._.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59594 = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((-1),(function (){var fexpr__59595 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59595.cljs$core$IFn$_invoke$arity$1 ? fexpr__59595.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59595.call(null,R));
})());
return (fexpr__59594.cljs$core$IFn$_invoke$arity$1 ? fexpr__59594.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59594.call(null,s));
})(),minus_F1);
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(vx,(function (){var fexpr__59597 = (function (){var fexpr__59598 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59598.cljs$core$IFn$_invoke$arity$1 ? fexpr__59598.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59598.call(null,minus_P));
})();
return (fexpr__59597.cljs$core$IFn$_invoke$arity$1 ? fexpr__59597.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59597.call(null,s));
})(),vx),emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._.cljs$core$IFn$_invoke$arity$2(minus_F,emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__59600 = (function (){var fexpr__59601 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((0)) : emmy.calculus.derivative.partial.call(null,(0)));
return (fexpr__59601.cljs$core$IFn$_invoke$arity$1 ? fexpr__59601.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59601.call(null,minus_P));
})();
return (fexpr__59600.cljs$core$IFn$_invoke$arity$1 ? fexpr__59600.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59600.call(null,s));
})(),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59603 = (function (){var fexpr__59604 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59604.cljs$core$IFn$_invoke$arity$1 ? fexpr__59604.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59604.call(null,minus_P));
})();
return (fexpr__59603.cljs$core$IFn$_invoke$arity$1 ? fexpr__59603.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59603.call(null,s));
})(),vx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59606 = (function (){var fexpr__59607 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59607.cljs$core$IFn$_invoke$arity$1 ? fexpr__59607.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59607.call(null,minus_P));
})();
return (fexpr__59606.cljs$core$IFn$_invoke$arity$1 ? fexpr__59606.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59606.call(null,s));
})(),vy),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59609 = (function (){var fexpr__59610 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59610.cljs$core$IFn$_invoke$arity$1 ? fexpr__59610.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59610.call(null,minus_P));
})();
return (fexpr__59609.cljs$core$IFn$_invoke$arity$1 ? fexpr__59609.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59609.call(null,s));
})(),pyd)], 0))),minus_F0));
});
}));

(emmy.mechanics.routhian.Routhian__GT_acceleration.cljs$lang$maxFixedArity = 2);

emmy.mechanics.routhian.Routhian__GT_state_derivative = (function emmy$mechanics$routhian$Routhian__GT_state_derivative(var_args){
var G__59615 = arguments.length;
switch (G__59615) {
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
return (function (p__59616){
var vec__59619 = p__59616;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59619,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59619,(1),null);
var vec__59622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59619,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59622,(0),null);
var s = vec__59619;
var minus_P = (function (){var fexpr__59625 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59625.cljs$core$IFn$_invoke$arity$1 ? fexpr__59625.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59625.call(null,R));
})();
var minus_F = (function (){var fexpr__59627 = (function (){var fexpr__59628 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59628.cljs$core$IFn$_invoke$arity$1 ? fexpr__59628.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59628.call(null,R));
})();
return (fexpr__59627.cljs$core$IFn$_invoke$arity$1 ? fexpr__59627.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59627.call(null,s));
})();
var vy = (function (){var fexpr__59630 = (function (){var fexpr__59631 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59631.cljs$core$IFn$_invoke$arity$1 ? fexpr__59631.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59631.call(null,R));
})();
return (fexpr__59630.cljs$core$IFn$_invoke$arity$1 ? fexpr__59630.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59630.call(null,s));
})();
var pyd = emmy.generic._.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__59633 = (function (){var fexpr__59634 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59634.cljs$core$IFn$_invoke$arity$1 ? fexpr__59634.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59634.call(null,R));
})();
return (fexpr__59633.cljs$core$IFn$_invoke$arity$1 ? fexpr__59633.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59633.call(null,s));
})());
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0)),emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(vx,(function (){var fexpr__59636 = (function (){var fexpr__59637 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59637.cljs$core$IFn$_invoke$arity$1 ? fexpr__59637.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59637.call(null,minus_P));
})();
return (fexpr__59636.cljs$core$IFn$_invoke$arity$1 ? fexpr__59636.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59636.call(null,s));
})(),vx),emmy.generic._.cljs$core$IFn$_invoke$arity$2(minus_F,emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__59639 = (function (){var fexpr__59640 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((0)) : emmy.calculus.derivative.partial.call(null,(0)));
return (fexpr__59640.cljs$core$IFn$_invoke$arity$1 ? fexpr__59640.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59640.call(null,minus_P));
})();
return (fexpr__59639.cljs$core$IFn$_invoke$arity$1 ? fexpr__59639.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59639.call(null,s));
})(),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59642 = (function (){var fexpr__59643 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59643.cljs$core$IFn$_invoke$arity$1 ? fexpr__59643.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59643.call(null,minus_P));
})();
return (fexpr__59642.cljs$core$IFn$_invoke$arity$1 ? fexpr__59642.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59642.call(null,s));
})(),vx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59645 = (function (){var fexpr__59646 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59646.cljs$core$IFn$_invoke$arity$1 ? fexpr__59646.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59646.call(null,minus_P));
})();
return (fexpr__59645.cljs$core$IFn$_invoke$arity$1 ? fexpr__59645.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59645.call(null,s));
})(),vy),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59648 = (function (){var fexpr__59649 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59649.cljs$core$IFn$_invoke$arity$1 ? fexpr__59649.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59649.call(null,minus_P));
})();
return (fexpr__59648.cljs$core$IFn$_invoke$arity$1 ? fexpr__59648.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59648.call(null,s));
})(),pyd)], 0)))),pyd], 0))], 0));
});
}));

(emmy.mechanics.routhian.Routhian__GT_state_derivative.cljs$core$IFn$_invoke$arity$2 = (function (R,dissipation_fn){
return (function (p__59650){
var vec__59651 = p__59650;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59651,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59651,(1),null);
var vec__59654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59651,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59654,(0),null);
var s = vec__59651;
var minus_P = (function (){var fexpr__59657 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59657.cljs$core$IFn$_invoke$arity$1 ? fexpr__59657.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59657.call(null,R));
})();
var minus_F = (function (){var fexpr__59659 = (function (){var fexpr__59660 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59660.cljs$core$IFn$_invoke$arity$1 ? fexpr__59660.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59660.call(null,R));
})();
return (fexpr__59659.cljs$core$IFn$_invoke$arity$1 ? fexpr__59659.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59659.call(null,s));
})();
var vy = (function (){var fexpr__59662 = (function (){var fexpr__59663 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59663.cljs$core$IFn$_invoke$arity$1 ? fexpr__59663.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59663.call(null,R));
})();
return (fexpr__59662.cljs$core$IFn$_invoke$arity$1 ? fexpr__59662.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59662.call(null,s));
})();
var L_state = emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0))], 0));
var minus_F0 = (function (){var fexpr__59665 = (function (){var fexpr__59666 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59666.cljs$core$IFn$_invoke$arity$1 ? fexpr__59666.cljs$core$IFn$_invoke$arity$1(dissipation_fn) : fexpr__59666.call(null,dissipation_fn));
})();
return (fexpr__59665.cljs$core$IFn$_invoke$arity$1 ? fexpr__59665.cljs$core$IFn$_invoke$arity$1(L_state) : fexpr__59665.call(null,L_state));
})();
var minus_F1 = (function (){var fexpr__59668 = (function (){var fexpr__59669 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59669.cljs$core$IFn$_invoke$arity$1 ? fexpr__59669.cljs$core$IFn$_invoke$arity$1(dissipation_fn) : fexpr__59669.call(null,dissipation_fn));
})();
return (fexpr__59668.cljs$core$IFn$_invoke$arity$1 ? fexpr__59668.cljs$core$IFn$_invoke$arity$1(L_state) : fexpr__59668.call(null,L_state));
})();
var pyd = emmy.generic._.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59671 = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((-1),(function (){var fexpr__59672 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59672.cljs$core$IFn$_invoke$arity$1 ? fexpr__59672.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59672.call(null,R));
})());
return (fexpr__59671.cljs$core$IFn$_invoke$arity$1 ? fexpr__59671.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59671.call(null,s));
})(),minus_F1);
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0)),emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(vx,(function (){var fexpr__59674 = (function (){var fexpr__59675 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59675.cljs$core$IFn$_invoke$arity$1 ? fexpr__59675.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59675.call(null,minus_P));
})();
return (fexpr__59674.cljs$core$IFn$_invoke$arity$1 ? fexpr__59674.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59674.call(null,s));
})(),vx),emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._.cljs$core$IFn$_invoke$arity$2(minus_F,emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__59679 = (function (){var fexpr__59680 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((0)) : emmy.calculus.derivative.partial.call(null,(0)));
return (fexpr__59680.cljs$core$IFn$_invoke$arity$1 ? fexpr__59680.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59680.call(null,minus_P));
})();
return (fexpr__59679.cljs$core$IFn$_invoke$arity$1 ? fexpr__59679.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59679.call(null,s));
})(),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59682 = (function (){var fexpr__59683 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59683.cljs$core$IFn$_invoke$arity$1 ? fexpr__59683.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59683.call(null,minus_P));
})();
return (fexpr__59682.cljs$core$IFn$_invoke$arity$1 ? fexpr__59682.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59682.call(null,s));
})(),vx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59685 = (function (){var fexpr__59686 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59686.cljs$core$IFn$_invoke$arity$1 ? fexpr__59686.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59686.call(null,minus_P));
})();
return (fexpr__59685.cljs$core$IFn$_invoke$arity$1 ? fexpr__59685.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59685.call(null,s));
})(),vy),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59688 = (function (){var fexpr__59689 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59689.cljs$core$IFn$_invoke$arity$1 ? fexpr__59689.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59689.call(null,minus_P));
})();
return (fexpr__59688.cljs$core$IFn$_invoke$arity$1 ? fexpr__59688.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59688.call(null,s));
})(),pyd)], 0))),minus_F0)),pyd], 0))], 0));
});
}));

(emmy.mechanics.routhian.Routhian__GT_state_derivative.cljs$lang$maxFixedArity = 2);

emmy.mechanics.routhian.Lagrangian_state__GT_Routhian_state = (function emmy$mechanics$routhian$Lagrangian_state__GT_Routhian_state(L){
return (function (p__59690){
var vec__59691 = p__59690;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59691,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59691,(1),null);
var vec__59694 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59691,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59694,(0),null);
var s = vec__59691;
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59698 = (function (){var fexpr__59699 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((2)) : emmy.calculus.derivative.partial.call(null,(2)));
return (fexpr__59699.cljs$core$IFn$_invoke$arity$1 ? fexpr__59699.cljs$core$IFn$_invoke$arity$1(L) : fexpr__59699.call(null,L));
})();
return (fexpr__59698.cljs$core$IFn$_invoke$arity$1 ? fexpr__59698.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59698.call(null,s));
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
var vy = cljs.core.nth.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59711 = (function (){var fexpr__59712 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((2)) : emmy.calculus.derivative.partial.call(null,(2)));
return (fexpr__59712.cljs$core$IFn$_invoke$arity$1 ? fexpr__59712.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59712.call(null,R));
})();
return (fexpr__59711.cljs$core$IFn$_invoke$arity$1 ? fexpr__59711.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59711.call(null,s));
})(),(1));
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0))], 0));
});
});

//# sourceMappingURL=emmy.mechanics.routhian.js.map
