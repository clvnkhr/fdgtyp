goog.provide('emmy.mechanics.routhian');
emmy.mechanics.routhian.Lagrangian__GT_Routhian = (function emmy$mechanics$routhian$Lagrangian__GT_Routhian(Lagrangian){
return (function (p__59480){
var vec__59481 = p__59480;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59481,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59481,(1),null);
var vec__59484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59481,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59484,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59484,(1),null);
var L = (function emmy$mechanics$routhian$Lagrangian__GT_Routhian_$_L(vy){
var G__59489 = emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0))], 0));
return (Lagrangian.cljs$core$IFn$_invoke$arity$1 ? Lagrangian.cljs$core$IFn$_invoke$arity$1(G__59489) : Lagrangian.call(null,G__59489));
});
var fexpr__59491 = emmy.mechanics.hamilton.Legendre_transform_procedure(L);
return (fexpr__59491.cljs$core$IFn$_invoke$arity$1 ? fexpr__59491.cljs$core$IFn$_invoke$arity$1(py) : fexpr__59491.call(null,py));
});
});
emmy.mechanics.routhian.Routh_equations = (function emmy$mechanics$routhian$Routh_equations(Routhian){
return (function (x,y,py){
return (function (t){
var L = (function emmy$mechanics$routhian$Routh_equations_$_L(p__59511){
var vec__59512 = p__59511;
var tau = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59512,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59512,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59512,(2),null);
var G__59515 = emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tau,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([q,(y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tau) : y.call(null,tau))], 0)),emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v,(py.cljs$core$IFn$_invoke$arity$1 ? py.cljs$core$IFn$_invoke$arity$1(tau) : py.call(null,tau))], 0))], 0));
return (Routhian.cljs$core$IFn$_invoke$arity$1 ? Routhian.cljs$core$IFn$_invoke$arity$1(G__59515) : Routhian.call(null,G__59515));
});
var H = (function emmy$mechanics$routhian$Routh_equations_$_H(p__59516){
var vec__59517 = p__59516;
var tau = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59517,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59517,(1),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59517,(2),null);
var G__59520 = emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tau,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tau) : x.call(null,tau)),q], 0)),emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__59521 = (emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(x) : emmy.calculus.derivative.D.call(null,x));
return (fexpr__59521.cljs$core$IFn$_invoke$arity$1 ? fexpr__59521.cljs$core$IFn$_invoke$arity$1(tau) : fexpr__59521.call(null,tau));
})(),p], 0))], 0));
return (Routhian.cljs$core$IFn$_invoke$arity$1 ? Routhian.cljs$core$IFn$_invoke$arity$1(G__59520) : Routhian.call(null,G__59520));
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
var G__59533 = arguments.length;
switch (G__59533) {
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
return (function (p__59538){
var vec__59539 = p__59538;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59539,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59539,(1),null);
var vec__59542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59539,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59542,(0),null);
var s = vec__59539;
var minus_P = (function (){var fexpr__59547 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59547.cljs$core$IFn$_invoke$arity$1 ? fexpr__59547.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59547.call(null,R));
})();
var minus_F = (function (){var fexpr__59551 = (function (){var fexpr__59552 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59552.cljs$core$IFn$_invoke$arity$1 ? fexpr__59552.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59552.call(null,R));
})();
return (fexpr__59551.cljs$core$IFn$_invoke$arity$1 ? fexpr__59551.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59551.call(null,s));
})();
var vy = (function (){var fexpr__59554 = (function (){var fexpr__59555 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59555.cljs$core$IFn$_invoke$arity$1 ? fexpr__59555.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59555.call(null,R));
})();
return (fexpr__59554.cljs$core$IFn$_invoke$arity$1 ? fexpr__59554.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59554.call(null,s));
})();
var pyd = (function (){var fexpr__59557 = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((-1),(function (){var fexpr__59558 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59558.cljs$core$IFn$_invoke$arity$1 ? fexpr__59558.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59558.call(null,R));
})());
return (fexpr__59557.cljs$core$IFn$_invoke$arity$1 ? fexpr__59557.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59557.call(null,s));
})();
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(vx,(function (){var fexpr__59560 = (function (){var fexpr__59561 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59561.cljs$core$IFn$_invoke$arity$1 ? fexpr__59561.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59561.call(null,minus_P));
})();
return (fexpr__59560.cljs$core$IFn$_invoke$arity$1 ? fexpr__59560.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59560.call(null,s));
})(),vx),emmy.generic._.cljs$core$IFn$_invoke$arity$2(minus_F,emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__59563 = (function (){var fexpr__59564 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((0)) : emmy.calculus.derivative.partial.call(null,(0)));
return (fexpr__59564.cljs$core$IFn$_invoke$arity$1 ? fexpr__59564.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59564.call(null,minus_P));
})();
return (fexpr__59563.cljs$core$IFn$_invoke$arity$1 ? fexpr__59563.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59563.call(null,s));
})(),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59566 = (function (){var fexpr__59567 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59567.cljs$core$IFn$_invoke$arity$1 ? fexpr__59567.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59567.call(null,minus_P));
})();
return (fexpr__59566.cljs$core$IFn$_invoke$arity$1 ? fexpr__59566.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59566.call(null,s));
})(),vx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59569 = (function (){var fexpr__59570 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59570.cljs$core$IFn$_invoke$arity$1 ? fexpr__59570.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59570.call(null,minus_P));
})();
return (fexpr__59569.cljs$core$IFn$_invoke$arity$1 ? fexpr__59569.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59569.call(null,s));
})(),vy),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59572 = (function (){var fexpr__59573 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59573.cljs$core$IFn$_invoke$arity$1 ? fexpr__59573.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59573.call(null,minus_P));
})();
return (fexpr__59572.cljs$core$IFn$_invoke$arity$1 ? fexpr__59572.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59572.call(null,s));
})(),pyd)], 0))));
});
}));

(emmy.mechanics.routhian.Routhian__GT_acceleration.cljs$core$IFn$_invoke$arity$2 = (function (R,dissipation_fn){
return (function (p__59574){
var vec__59575 = p__59574;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59575,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59575,(1),null);
var vec__59578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59575,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59578,(0),null);
var s = vec__59575;
var minus_P = (function (){var fexpr__59585 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59585.cljs$core$IFn$_invoke$arity$1 ? fexpr__59585.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59585.call(null,R));
})();
var minus_F = (function (){var fexpr__59587 = (function (){var fexpr__59588 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59588.cljs$core$IFn$_invoke$arity$1 ? fexpr__59588.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59588.call(null,R));
})();
return (fexpr__59587.cljs$core$IFn$_invoke$arity$1 ? fexpr__59587.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59587.call(null,s));
})();
var vy = (function (){var fexpr__59590 = (function (){var fexpr__59591 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59591.cljs$core$IFn$_invoke$arity$1 ? fexpr__59591.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59591.call(null,R));
})();
return (fexpr__59590.cljs$core$IFn$_invoke$arity$1 ? fexpr__59590.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59590.call(null,s));
})();
var L_state = emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0))], 0));
var minus_F0 = (function (){var fexpr__59593 = (function (){var fexpr__59594 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59594.cljs$core$IFn$_invoke$arity$1 ? fexpr__59594.cljs$core$IFn$_invoke$arity$1(dissipation_fn) : fexpr__59594.call(null,dissipation_fn));
})();
return (fexpr__59593.cljs$core$IFn$_invoke$arity$1 ? fexpr__59593.cljs$core$IFn$_invoke$arity$1(L_state) : fexpr__59593.call(null,L_state));
})();
var minus_F1 = (function (){var fexpr__59596 = (function (){var fexpr__59597 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59597.cljs$core$IFn$_invoke$arity$1 ? fexpr__59597.cljs$core$IFn$_invoke$arity$1(dissipation_fn) : fexpr__59597.call(null,dissipation_fn));
})();
return (fexpr__59596.cljs$core$IFn$_invoke$arity$1 ? fexpr__59596.cljs$core$IFn$_invoke$arity$1(L_state) : fexpr__59596.call(null,L_state));
})();
var pyd = emmy.generic._.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59599 = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((-1),(function (){var fexpr__59600 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59600.cljs$core$IFn$_invoke$arity$1 ? fexpr__59600.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59600.call(null,R));
})());
return (fexpr__59599.cljs$core$IFn$_invoke$arity$1 ? fexpr__59599.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59599.call(null,s));
})(),minus_F1);
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(vx,(function (){var fexpr__59602 = (function (){var fexpr__59603 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59603.cljs$core$IFn$_invoke$arity$1 ? fexpr__59603.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59603.call(null,minus_P));
})();
return (fexpr__59602.cljs$core$IFn$_invoke$arity$1 ? fexpr__59602.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59602.call(null,s));
})(),vx),emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._.cljs$core$IFn$_invoke$arity$2(minus_F,emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__59605 = (function (){var fexpr__59606 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((0)) : emmy.calculus.derivative.partial.call(null,(0)));
return (fexpr__59606.cljs$core$IFn$_invoke$arity$1 ? fexpr__59606.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59606.call(null,minus_P));
})();
return (fexpr__59605.cljs$core$IFn$_invoke$arity$1 ? fexpr__59605.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59605.call(null,s));
})(),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59608 = (function (){var fexpr__59609 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59609.cljs$core$IFn$_invoke$arity$1 ? fexpr__59609.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59609.call(null,minus_P));
})();
return (fexpr__59608.cljs$core$IFn$_invoke$arity$1 ? fexpr__59608.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59608.call(null,s));
})(),vx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59611 = (function (){var fexpr__59613 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59613.cljs$core$IFn$_invoke$arity$1 ? fexpr__59613.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59613.call(null,minus_P));
})();
return (fexpr__59611.cljs$core$IFn$_invoke$arity$1 ? fexpr__59611.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59611.call(null,s));
})(),vy),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59616 = (function (){var fexpr__59617 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59617.cljs$core$IFn$_invoke$arity$1 ? fexpr__59617.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59617.call(null,minus_P));
})();
return (fexpr__59616.cljs$core$IFn$_invoke$arity$1 ? fexpr__59616.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59616.call(null,s));
})(),pyd)], 0))),minus_F0));
});
}));

(emmy.mechanics.routhian.Routhian__GT_acceleration.cljs$lang$maxFixedArity = 2);

emmy.mechanics.routhian.Routhian__GT_state_derivative = (function emmy$mechanics$routhian$Routhian__GT_state_derivative(var_args){
var G__59619 = arguments.length;
switch (G__59619) {
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
return (function (p__59620){
var vec__59621 = p__59620;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59621,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59621,(1),null);
var vec__59624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59621,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59624,(0),null);
var s = vec__59621;
var minus_P = (function (){var fexpr__59627 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59627.cljs$core$IFn$_invoke$arity$1 ? fexpr__59627.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59627.call(null,R));
})();
var minus_F = (function (){var fexpr__59629 = (function (){var fexpr__59630 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59630.cljs$core$IFn$_invoke$arity$1 ? fexpr__59630.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59630.call(null,R));
})();
return (fexpr__59629.cljs$core$IFn$_invoke$arity$1 ? fexpr__59629.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59629.call(null,s));
})();
var vy = (function (){var fexpr__59632 = (function (){var fexpr__59633 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59633.cljs$core$IFn$_invoke$arity$1 ? fexpr__59633.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59633.call(null,R));
})();
return (fexpr__59632.cljs$core$IFn$_invoke$arity$1 ? fexpr__59632.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59632.call(null,s));
})();
var pyd = emmy.generic._.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__59635 = (function (){var fexpr__59636 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59636.cljs$core$IFn$_invoke$arity$1 ? fexpr__59636.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59636.call(null,R));
})();
return (fexpr__59635.cljs$core$IFn$_invoke$arity$1 ? fexpr__59635.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59635.call(null,s));
})());
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0)),emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(vx,(function (){var fexpr__59638 = (function (){var fexpr__59639 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59639.cljs$core$IFn$_invoke$arity$1 ? fexpr__59639.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59639.call(null,minus_P));
})();
return (fexpr__59638.cljs$core$IFn$_invoke$arity$1 ? fexpr__59638.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59638.call(null,s));
})(),vx),emmy.generic._.cljs$core$IFn$_invoke$arity$2(minus_F,emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__59641 = (function (){var fexpr__59642 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((0)) : emmy.calculus.derivative.partial.call(null,(0)));
return (fexpr__59642.cljs$core$IFn$_invoke$arity$1 ? fexpr__59642.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59642.call(null,minus_P));
})();
return (fexpr__59641.cljs$core$IFn$_invoke$arity$1 ? fexpr__59641.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59641.call(null,s));
})(),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59644 = (function (){var fexpr__59645 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59645.cljs$core$IFn$_invoke$arity$1 ? fexpr__59645.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59645.call(null,minus_P));
})();
return (fexpr__59644.cljs$core$IFn$_invoke$arity$1 ? fexpr__59644.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59644.call(null,s));
})(),vx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59647 = (function (){var fexpr__59648 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59648.cljs$core$IFn$_invoke$arity$1 ? fexpr__59648.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59648.call(null,minus_P));
})();
return (fexpr__59647.cljs$core$IFn$_invoke$arity$1 ? fexpr__59647.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59647.call(null,s));
})(),vy),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59650 = (function (){var fexpr__59651 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59651.cljs$core$IFn$_invoke$arity$1 ? fexpr__59651.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59651.call(null,minus_P));
})();
return (fexpr__59650.cljs$core$IFn$_invoke$arity$1 ? fexpr__59650.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59650.call(null,s));
})(),pyd)], 0)))),pyd], 0))], 0));
});
}));

(emmy.mechanics.routhian.Routhian__GT_state_derivative.cljs$core$IFn$_invoke$arity$2 = (function (R,dissipation_fn){
return (function (p__59652){
var vec__59653 = p__59652;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59653,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59653,(1),null);
var vec__59656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59653,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59656,(0),null);
var s = vec__59653;
var minus_P = (function (){var fexpr__59659 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59659.cljs$core$IFn$_invoke$arity$1 ? fexpr__59659.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59659.call(null,R));
})();
var minus_F = (function (){var fexpr__59661 = (function (){var fexpr__59662 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59662.cljs$core$IFn$_invoke$arity$1 ? fexpr__59662.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59662.call(null,R));
})();
return (fexpr__59661.cljs$core$IFn$_invoke$arity$1 ? fexpr__59661.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59661.call(null,s));
})();
var vy = (function (){var fexpr__59664 = (function (){var fexpr__59665 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59665.cljs$core$IFn$_invoke$arity$1 ? fexpr__59665.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59665.call(null,R));
})();
return (fexpr__59664.cljs$core$IFn$_invoke$arity$1 ? fexpr__59664.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59664.call(null,s));
})();
var L_state = emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0))], 0));
var minus_F0 = (function (){var fexpr__59669 = (function (){var fexpr__59670 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59670.cljs$core$IFn$_invoke$arity$1 ? fexpr__59670.cljs$core$IFn$_invoke$arity$1(dissipation_fn) : fexpr__59670.call(null,dissipation_fn));
})();
return (fexpr__59669.cljs$core$IFn$_invoke$arity$1 ? fexpr__59669.cljs$core$IFn$_invoke$arity$1(L_state) : fexpr__59669.call(null,L_state));
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
var vy = cljs.core.nth.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59711 = (function (){var fexpr__59712 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((2)) : emmy.calculus.derivative.partial.call(null,(2)));
return (fexpr__59712.cljs$core$IFn$_invoke$arity$1 ? fexpr__59712.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59712.call(null,R));
})();
return (fexpr__59711.cljs$core$IFn$_invoke$arity$1 ? fexpr__59711.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59711.call(null,s));
})(),(1));
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0))], 0));
});
});

//# sourceMappingURL=emmy.mechanics.routhian.js.map
