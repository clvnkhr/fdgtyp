goog.provide('emmy.mechanics.routhian');
emmy.mechanics.routhian.Lagrangian__GT_Routhian = (function emmy$mechanics$routhian$Lagrangian__GT_Routhian(Lagrangian){
return (function (p__59483){
var vec__59485 = p__59483;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59485,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59485,(1),null);
var vec__59488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59485,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59488,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59488,(1),null);
var L = (function emmy$mechanics$routhian$Lagrangian__GT_Routhian_$_L(vy){
var G__59495 = emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0))], 0));
return (Lagrangian.cljs$core$IFn$_invoke$arity$1 ? Lagrangian.cljs$core$IFn$_invoke$arity$1(G__59495) : Lagrangian.call(null,G__59495));
});
var fexpr__59496 = emmy.mechanics.hamilton.Legendre_transform_procedure(L);
return (fexpr__59496.cljs$core$IFn$_invoke$arity$1 ? fexpr__59496.cljs$core$IFn$_invoke$arity$1(py) : fexpr__59496.call(null,py));
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
var G__59596 = arguments.length;
switch (G__59596) {
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
return (function (p__59597){
var vec__59598 = p__59597;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59598,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59598,(1),null);
var vec__59601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59598,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59601,(0),null);
var s = vec__59598;
var minus_P = (function (){var fexpr__59604 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59604.cljs$core$IFn$_invoke$arity$1 ? fexpr__59604.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59604.call(null,R));
})();
var minus_F = (function (){var fexpr__59606 = (function (){var fexpr__59607 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59607.cljs$core$IFn$_invoke$arity$1 ? fexpr__59607.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59607.call(null,R));
})();
return (fexpr__59606.cljs$core$IFn$_invoke$arity$1 ? fexpr__59606.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59606.call(null,s));
})();
var vy = (function (){var fexpr__59609 = (function (){var fexpr__59610 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59610.cljs$core$IFn$_invoke$arity$1 ? fexpr__59610.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59610.call(null,R));
})();
return (fexpr__59609.cljs$core$IFn$_invoke$arity$1 ? fexpr__59609.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59609.call(null,s));
})();
var pyd = emmy.generic._.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__59612 = (function (){var fexpr__59613 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59613.cljs$core$IFn$_invoke$arity$1 ? fexpr__59613.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59613.call(null,R));
})();
return (fexpr__59612.cljs$core$IFn$_invoke$arity$1 ? fexpr__59612.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59612.call(null,s));
})());
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0)),emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(vx,(function (){var fexpr__59615 = (function (){var fexpr__59616 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59616.cljs$core$IFn$_invoke$arity$1 ? fexpr__59616.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59616.call(null,minus_P));
})();
return (fexpr__59615.cljs$core$IFn$_invoke$arity$1 ? fexpr__59615.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59615.call(null,s));
})(),vx),emmy.generic._.cljs$core$IFn$_invoke$arity$2(minus_F,emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__59618 = (function (){var fexpr__59619 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((0)) : emmy.calculus.derivative.partial.call(null,(0)));
return (fexpr__59619.cljs$core$IFn$_invoke$arity$1 ? fexpr__59619.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59619.call(null,minus_P));
})();
return (fexpr__59618.cljs$core$IFn$_invoke$arity$1 ? fexpr__59618.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59618.call(null,s));
})(),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59621 = (function (){var fexpr__59622 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59622.cljs$core$IFn$_invoke$arity$1 ? fexpr__59622.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59622.call(null,minus_P));
})();
return (fexpr__59621.cljs$core$IFn$_invoke$arity$1 ? fexpr__59621.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59621.call(null,s));
})(),vx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59624 = (function (){var fexpr__59625 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59625.cljs$core$IFn$_invoke$arity$1 ? fexpr__59625.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59625.call(null,minus_P));
})();
return (fexpr__59624.cljs$core$IFn$_invoke$arity$1 ? fexpr__59624.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59624.call(null,s));
})(),vy),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59627 = (function (){var fexpr__59628 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59628.cljs$core$IFn$_invoke$arity$1 ? fexpr__59628.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59628.call(null,minus_P));
})();
return (fexpr__59627.cljs$core$IFn$_invoke$arity$1 ? fexpr__59627.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59627.call(null,s));
})(),pyd)], 0)))),pyd], 0))], 0));
});
}));

(emmy.mechanics.routhian.Routhian__GT_state_derivative.cljs$core$IFn$_invoke$arity$2 = (function (R,dissipation_fn){
return (function (p__59629){
var vec__59630 = p__59629;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59630,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59630,(1),null);
var vec__59633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59630,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59633,(0),null);
var s = vec__59630;
var minus_P = (function (){var fexpr__59636 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59636.cljs$core$IFn$_invoke$arity$1 ? fexpr__59636.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59636.call(null,R));
})();
var minus_F = (function (){var fexpr__59638 = (function (){var fexpr__59639 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59639.cljs$core$IFn$_invoke$arity$1 ? fexpr__59639.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59639.call(null,R));
})();
return (fexpr__59638.cljs$core$IFn$_invoke$arity$1 ? fexpr__59638.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59638.call(null,s));
})();
var vy = (function (){var fexpr__59641 = (function (){var fexpr__59642 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59642.cljs$core$IFn$_invoke$arity$1 ? fexpr__59642.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59642.call(null,R));
})();
return (fexpr__59641.cljs$core$IFn$_invoke$arity$1 ? fexpr__59641.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59641.call(null,s));
})();
var L_state = emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0))], 0));
var minus_F0 = (function (){var fexpr__59644 = (function (){var fexpr__59645 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59645.cljs$core$IFn$_invoke$arity$1 ? fexpr__59645.cljs$core$IFn$_invoke$arity$1(dissipation_fn) : fexpr__59645.call(null,dissipation_fn));
})();
return (fexpr__59644.cljs$core$IFn$_invoke$arity$1 ? fexpr__59644.cljs$core$IFn$_invoke$arity$1(L_state) : fexpr__59644.call(null,L_state));
})();
var minus_F1 = (function (){var fexpr__59647 = (function (){var fexpr__59648 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59648.cljs$core$IFn$_invoke$arity$1 ? fexpr__59648.cljs$core$IFn$_invoke$arity$1(dissipation_fn) : fexpr__59648.call(null,dissipation_fn));
})();
return (fexpr__59647.cljs$core$IFn$_invoke$arity$1 ? fexpr__59647.cljs$core$IFn$_invoke$arity$1(L_state) : fexpr__59647.call(null,L_state));
})();
var pyd = emmy.generic._.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59650 = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((-1),(function (){var fexpr__59651 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59651.cljs$core$IFn$_invoke$arity$1 ? fexpr__59651.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59651.call(null,R));
})());
return (fexpr__59650.cljs$core$IFn$_invoke$arity$1 ? fexpr__59650.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59650.call(null,s));
})(),minus_F1);
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0)),emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(vx,(function (){var fexpr__59653 = (function (){var fexpr__59654 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59654.cljs$core$IFn$_invoke$arity$1 ? fexpr__59654.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59654.call(null,minus_P));
})();
return (fexpr__59653.cljs$core$IFn$_invoke$arity$1 ? fexpr__59653.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59653.call(null,s));
})(),vx),emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._.cljs$core$IFn$_invoke$arity$2(minus_F,emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__59656 = (function (){var fexpr__59657 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((0)) : emmy.calculus.derivative.partial.call(null,(0)));
return (fexpr__59657.cljs$core$IFn$_invoke$arity$1 ? fexpr__59657.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59657.call(null,minus_P));
})();
return (fexpr__59656.cljs$core$IFn$_invoke$arity$1 ? fexpr__59656.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59656.call(null,s));
})(),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59659 = (function (){var fexpr__59660 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59660.cljs$core$IFn$_invoke$arity$1 ? fexpr__59660.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59660.call(null,minus_P));
})();
return (fexpr__59659.cljs$core$IFn$_invoke$arity$1 ? fexpr__59659.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59659.call(null,s));
})(),vx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59662 = (function (){var fexpr__59663 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59663.cljs$core$IFn$_invoke$arity$1 ? fexpr__59663.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59663.call(null,minus_P));
})();
return (fexpr__59662.cljs$core$IFn$_invoke$arity$1 ? fexpr__59662.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59662.call(null,s));
})(),vy),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59665 = (function (){var fexpr__59666 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59666.cljs$core$IFn$_invoke$arity$1 ? fexpr__59666.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59666.call(null,minus_P));
})();
return (fexpr__59665.cljs$core$IFn$_invoke$arity$1 ? fexpr__59665.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59665.call(null,s));
})(),pyd)], 0))),minus_F0)),pyd], 0))], 0));
});
}));

(emmy.mechanics.routhian.Routhian__GT_state_derivative.cljs$lang$maxFixedArity = 2);

emmy.mechanics.routhian.Lagrangian_state__GT_Routhian_state = (function emmy$mechanics$routhian$Lagrangian_state__GT_Routhian_state(L){
return (function (p__59667){
var vec__59668 = p__59667;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59668,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59668,(1),null);
var vec__59671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59668,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59671,(0),null);
var s = vec__59668;
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59675 = (function (){var fexpr__59676 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((2)) : emmy.calculus.derivative.partial.call(null,(2)));
return (fexpr__59676.cljs$core$IFn$_invoke$arity$1 ? fexpr__59676.cljs$core$IFn$_invoke$arity$1(L) : fexpr__59676.call(null,L));
})();
return (fexpr__59675.cljs$core$IFn$_invoke$arity$1 ? fexpr__59675.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59675.call(null,s));
})(),(1));
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,py], 0))], 0));
});
});
emmy.mechanics.routhian.Routhian_state__GT_Lagrangian_state = (function emmy$mechanics$routhian$Routhian_state__GT_Lagrangian_state(R){
return (function (p__59677){
var vec__59678 = p__59677;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59678,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59678,(1),null);
var vec__59681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59678,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59681,(0),null);
var s = vec__59678;
var vy = cljs.core.nth.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59685 = (function (){var fexpr__59686 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((2)) : emmy.calculus.derivative.partial.call(null,(2)));
return (fexpr__59686.cljs$core$IFn$_invoke$arity$1 ? fexpr__59686.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59686.call(null,R));
})();
return (fexpr__59685.cljs$core$IFn$_invoke$arity$1 ? fexpr__59685.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59685.call(null,s));
})(),(1));
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0))], 0));
});
});

//# sourceMappingURL=emmy.mechanics.routhian.js.map
