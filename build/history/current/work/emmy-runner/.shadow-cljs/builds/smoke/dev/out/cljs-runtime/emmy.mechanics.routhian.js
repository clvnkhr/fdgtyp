goog.provide('emmy.mechanics.routhian');
emmy.mechanics.routhian.Lagrangian__GT_Routhian = (function emmy$mechanics$routhian$Lagrangian__GT_Routhian(Lagrangian){
return (function (p__59479){
var vec__59480 = p__59479;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59480,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59480,(1),null);
var vec__59483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59480,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59483,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59483,(1),null);
var L = (function emmy$mechanics$routhian$Lagrangian__GT_Routhian_$_L(vy){
var G__59487 = emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0))], 0));
return (Lagrangian.cljs$core$IFn$_invoke$arity$1 ? Lagrangian.cljs$core$IFn$_invoke$arity$1(G__59487) : Lagrangian.call(null,G__59487));
});
var fexpr__59488 = emmy.mechanics.hamilton.Legendre_transform_procedure(L);
return (fexpr__59488.cljs$core$IFn$_invoke$arity$1 ? fexpr__59488.cljs$core$IFn$_invoke$arity$1(py) : fexpr__59488.call(null,py));
});
});
emmy.mechanics.routhian.Routh_equations = (function emmy$mechanics$routhian$Routh_equations(Routhian){
return (function (x,y,py){
return (function (t){
var L = (function emmy$mechanics$routhian$Routh_equations_$_L(p__59500){
var vec__59501 = p__59500;
var tau = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59501,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59501,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59501,(2),null);
var G__59504 = emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tau,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([q,(y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tau) : y.call(null,tau))], 0)),emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v,(py.cljs$core$IFn$_invoke$arity$1 ? py.cljs$core$IFn$_invoke$arity$1(tau) : py.call(null,tau))], 0))], 0));
return (Routhian.cljs$core$IFn$_invoke$arity$1 ? Routhian.cljs$core$IFn$_invoke$arity$1(G__59504) : Routhian.call(null,G__59504));
});
var H = (function emmy$mechanics$routhian$Routh_equations_$_H(p__59505){
var vec__59506 = p__59505;
var tau = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59506,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59506,(1),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59506,(2),null);
var G__59509 = emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tau,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tau) : x.call(null,tau)),q], 0)),emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__59510 = (emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(x) : emmy.calculus.derivative.D.call(null,x));
return (fexpr__59510.cljs$core$IFn$_invoke$arity$1 ? fexpr__59510.cljs$core$IFn$_invoke$arity$1(tau) : fexpr__59510.call(null,tau));
})(),p], 0))], 0));
return (Routhian.cljs$core$IFn$_invoke$arity$1 ? Routhian.cljs$core$IFn$_invoke$arity$1(G__59509) : Routhian.call(null,G__59509));
});
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__59512 = (function (){var fexpr__59513 = emmy.mechanics.lagrange.Lagrange_equations.cljs$core$IFn$_invoke$arity$1(L);
return (fexpr__59513.cljs$core$IFn$_invoke$arity$1 ? fexpr__59513.cljs$core$IFn$_invoke$arity$1(x) : fexpr__59513.call(null,x));
})();
return (fexpr__59512.cljs$core$IFn$_invoke$arity$1 ? fexpr__59512.cljs$core$IFn$_invoke$arity$1(t) : fexpr__59512.call(null,t));
})(),(function (){var fexpr__59514 = emmy.mechanics.hamilton.Hamilton_equations(H)(y,py);
return (fexpr__59514.cljs$core$IFn$_invoke$arity$1 ? fexpr__59514.cljs$core$IFn$_invoke$arity$1(t) : fexpr__59514.call(null,t));
})()], 0));
});
});
});
emmy.mechanics.routhian.Routhian__GT_acceleration = (function emmy$mechanics$routhian$Routhian__GT_acceleration(var_args){
var G__59516 = arguments.length;
switch (G__59516) {
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
return (function (p__59517){
var vec__59518 = p__59517;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59518,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59518,(1),null);
var vec__59521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59518,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59521,(0),null);
var s = vec__59518;
var minus_P = (function (){var fexpr__59524 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59524.cljs$core$IFn$_invoke$arity$1 ? fexpr__59524.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59524.call(null,R));
})();
var minus_F = (function (){var fexpr__59526 = (function (){var fexpr__59527 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59527.cljs$core$IFn$_invoke$arity$1 ? fexpr__59527.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59527.call(null,R));
})();
return (fexpr__59526.cljs$core$IFn$_invoke$arity$1 ? fexpr__59526.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59526.call(null,s));
})();
var vy = (function (){var fexpr__59529 = (function (){var fexpr__59530 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59530.cljs$core$IFn$_invoke$arity$1 ? fexpr__59530.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59530.call(null,R));
})();
return (fexpr__59529.cljs$core$IFn$_invoke$arity$1 ? fexpr__59529.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59529.call(null,s));
})();
var pyd = (function (){var fexpr__59532 = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((-1),(function (){var fexpr__59533 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59533.cljs$core$IFn$_invoke$arity$1 ? fexpr__59533.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59533.call(null,R));
})());
return (fexpr__59532.cljs$core$IFn$_invoke$arity$1 ? fexpr__59532.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59532.call(null,s));
})();
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(vx,(function (){var fexpr__59535 = (function (){var fexpr__59536 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59536.cljs$core$IFn$_invoke$arity$1 ? fexpr__59536.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59536.call(null,minus_P));
})();
return (fexpr__59535.cljs$core$IFn$_invoke$arity$1 ? fexpr__59535.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59535.call(null,s));
})(),vx),emmy.generic._.cljs$core$IFn$_invoke$arity$2(minus_F,emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__59538 = (function (){var fexpr__59539 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((0)) : emmy.calculus.derivative.partial.call(null,(0)));
return (fexpr__59539.cljs$core$IFn$_invoke$arity$1 ? fexpr__59539.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59539.call(null,minus_P));
})();
return (fexpr__59538.cljs$core$IFn$_invoke$arity$1 ? fexpr__59538.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59538.call(null,s));
})(),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59541 = (function (){var fexpr__59542 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59542.cljs$core$IFn$_invoke$arity$1 ? fexpr__59542.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59542.call(null,minus_P));
})();
return (fexpr__59541.cljs$core$IFn$_invoke$arity$1 ? fexpr__59541.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59541.call(null,s));
})(),vx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59544 = (function (){var fexpr__59545 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59545.cljs$core$IFn$_invoke$arity$1 ? fexpr__59545.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59545.call(null,minus_P));
})();
return (fexpr__59544.cljs$core$IFn$_invoke$arity$1 ? fexpr__59544.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59544.call(null,s));
})(),vy),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59547 = (function (){var fexpr__59548 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59548.cljs$core$IFn$_invoke$arity$1 ? fexpr__59548.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59548.call(null,minus_P));
})();
return (fexpr__59547.cljs$core$IFn$_invoke$arity$1 ? fexpr__59547.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59547.call(null,s));
})(),pyd)], 0))));
});
}));

(emmy.mechanics.routhian.Routhian__GT_acceleration.cljs$core$IFn$_invoke$arity$2 = (function (R,dissipation_fn){
return (function (p__59549){
var vec__59550 = p__59549;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59550,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59550,(1),null);
var vec__59553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59550,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59553,(0),null);
var s = vec__59550;
var minus_P = (function (){var fexpr__59556 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59556.cljs$core$IFn$_invoke$arity$1 ? fexpr__59556.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59556.call(null,R));
})();
var minus_F = (function (){var fexpr__59558 = (function (){var fexpr__59559 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59559.cljs$core$IFn$_invoke$arity$1 ? fexpr__59559.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59559.call(null,R));
})();
return (fexpr__59558.cljs$core$IFn$_invoke$arity$1 ? fexpr__59558.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59558.call(null,s));
})();
var vy = (function (){var fexpr__59561 = (function (){var fexpr__59562 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59562.cljs$core$IFn$_invoke$arity$1 ? fexpr__59562.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59562.call(null,R));
})();
return (fexpr__59561.cljs$core$IFn$_invoke$arity$1 ? fexpr__59561.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59561.call(null,s));
})();
var L_state = emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0))], 0));
var minus_F0 = (function (){var fexpr__59564 = (function (){var fexpr__59565 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59565.cljs$core$IFn$_invoke$arity$1 ? fexpr__59565.cljs$core$IFn$_invoke$arity$1(dissipation_fn) : fexpr__59565.call(null,dissipation_fn));
})();
return (fexpr__59564.cljs$core$IFn$_invoke$arity$1 ? fexpr__59564.cljs$core$IFn$_invoke$arity$1(L_state) : fexpr__59564.call(null,L_state));
})();
var minus_F1 = (function (){var fexpr__59570 = (function (){var fexpr__59571 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59571.cljs$core$IFn$_invoke$arity$1 ? fexpr__59571.cljs$core$IFn$_invoke$arity$1(dissipation_fn) : fexpr__59571.call(null,dissipation_fn));
})();
return (fexpr__59570.cljs$core$IFn$_invoke$arity$1 ? fexpr__59570.cljs$core$IFn$_invoke$arity$1(L_state) : fexpr__59570.call(null,L_state));
})();
var pyd = emmy.generic._.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59573 = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((-1),(function (){var fexpr__59574 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59574.cljs$core$IFn$_invoke$arity$1 ? fexpr__59574.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59574.call(null,R));
})());
return (fexpr__59573.cljs$core$IFn$_invoke$arity$1 ? fexpr__59573.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59573.call(null,s));
})(),minus_F1);
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(vx,(function (){var fexpr__59576 = (function (){var fexpr__59577 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59577.cljs$core$IFn$_invoke$arity$1 ? fexpr__59577.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59577.call(null,minus_P));
})();
return (fexpr__59576.cljs$core$IFn$_invoke$arity$1 ? fexpr__59576.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59576.call(null,s));
})(),vx),emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._.cljs$core$IFn$_invoke$arity$2(minus_F,emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__59579 = (function (){var fexpr__59580 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((0)) : emmy.calculus.derivative.partial.call(null,(0)));
return (fexpr__59580.cljs$core$IFn$_invoke$arity$1 ? fexpr__59580.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59580.call(null,minus_P));
})();
return (fexpr__59579.cljs$core$IFn$_invoke$arity$1 ? fexpr__59579.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59579.call(null,s));
})(),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59582 = (function (){var fexpr__59583 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59583.cljs$core$IFn$_invoke$arity$1 ? fexpr__59583.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59583.call(null,minus_P));
})();
return (fexpr__59582.cljs$core$IFn$_invoke$arity$1 ? fexpr__59582.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59582.call(null,s));
})(),vx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59585 = (function (){var fexpr__59586 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59586.cljs$core$IFn$_invoke$arity$1 ? fexpr__59586.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59586.call(null,minus_P));
})();
return (fexpr__59585.cljs$core$IFn$_invoke$arity$1 ? fexpr__59585.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59585.call(null,s));
})(),vy),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59588 = (function (){var fexpr__59589 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59589.cljs$core$IFn$_invoke$arity$1 ? fexpr__59589.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59589.call(null,minus_P));
})();
return (fexpr__59588.cljs$core$IFn$_invoke$arity$1 ? fexpr__59588.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59588.call(null,s));
})(),pyd)], 0))),minus_F0));
});
}));

(emmy.mechanics.routhian.Routhian__GT_acceleration.cljs$lang$maxFixedArity = 2);

emmy.mechanics.routhian.Routhian__GT_state_derivative = (function emmy$mechanics$routhian$Routhian__GT_state_derivative(var_args){
var G__59591 = arguments.length;
switch (G__59591) {
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
return (function (p__59592){
var vec__59593 = p__59592;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59593,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59593,(1),null);
var vec__59596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59593,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59596,(0),null);
var s = vec__59593;
var minus_P = (function (){var fexpr__59599 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59599.cljs$core$IFn$_invoke$arity$1 ? fexpr__59599.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59599.call(null,R));
})();
var minus_F = (function (){var fexpr__59601 = (function (){var fexpr__59602 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59602.cljs$core$IFn$_invoke$arity$1 ? fexpr__59602.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59602.call(null,R));
})();
return (fexpr__59601.cljs$core$IFn$_invoke$arity$1 ? fexpr__59601.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59601.call(null,s));
})();
var vy = (function (){var fexpr__59604 = (function (){var fexpr__59605 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59605.cljs$core$IFn$_invoke$arity$1 ? fexpr__59605.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59605.call(null,R));
})();
return (fexpr__59604.cljs$core$IFn$_invoke$arity$1 ? fexpr__59604.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59604.call(null,s));
})();
var pyd = emmy.generic._.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__59607 = (function (){var fexpr__59608 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59608.cljs$core$IFn$_invoke$arity$1 ? fexpr__59608.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59608.call(null,R));
})();
return (fexpr__59607.cljs$core$IFn$_invoke$arity$1 ? fexpr__59607.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59607.call(null,s));
})());
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0)),emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(vx,(function (){var fexpr__59610 = (function (){var fexpr__59611 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59611.cljs$core$IFn$_invoke$arity$1 ? fexpr__59611.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59611.call(null,minus_P));
})();
return (fexpr__59610.cljs$core$IFn$_invoke$arity$1 ? fexpr__59610.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59610.call(null,s));
})(),vx),emmy.generic._.cljs$core$IFn$_invoke$arity$2(minus_F,emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__59613 = (function (){var fexpr__59614 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((0)) : emmy.calculus.derivative.partial.call(null,(0)));
return (fexpr__59614.cljs$core$IFn$_invoke$arity$1 ? fexpr__59614.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59614.call(null,minus_P));
})();
return (fexpr__59613.cljs$core$IFn$_invoke$arity$1 ? fexpr__59613.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59613.call(null,s));
})(),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59616 = (function (){var fexpr__59617 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59617.cljs$core$IFn$_invoke$arity$1 ? fexpr__59617.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59617.call(null,minus_P));
})();
return (fexpr__59616.cljs$core$IFn$_invoke$arity$1 ? fexpr__59616.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59616.call(null,s));
})(),vx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59619 = (function (){var fexpr__59620 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59620.cljs$core$IFn$_invoke$arity$1 ? fexpr__59620.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59620.call(null,minus_P));
})();
return (fexpr__59619.cljs$core$IFn$_invoke$arity$1 ? fexpr__59619.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59619.call(null,s));
})(),vy),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59622 = (function (){var fexpr__59623 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59623.cljs$core$IFn$_invoke$arity$1 ? fexpr__59623.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59623.call(null,minus_P));
})();
return (fexpr__59622.cljs$core$IFn$_invoke$arity$1 ? fexpr__59622.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59622.call(null,s));
})(),pyd)], 0)))),pyd], 0))], 0));
});
}));

(emmy.mechanics.routhian.Routhian__GT_state_derivative.cljs$core$IFn$_invoke$arity$2 = (function (R,dissipation_fn){
return (function (p__59624){
var vec__59625 = p__59624;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59625,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59625,(1),null);
var vec__59628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59625,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59628,(0),null);
var s = vec__59625;
var minus_P = (function (){var fexpr__59631 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59631.cljs$core$IFn$_invoke$arity$1 ? fexpr__59631.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59631.call(null,R));
})();
var minus_F = (function (){var fexpr__59633 = (function (){var fexpr__59634 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59634.cljs$core$IFn$_invoke$arity$1 ? fexpr__59634.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59634.call(null,R));
})();
return (fexpr__59633.cljs$core$IFn$_invoke$arity$1 ? fexpr__59633.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59633.call(null,s));
})();
var vy = (function (){var fexpr__59636 = (function (){var fexpr__59637 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59637.cljs$core$IFn$_invoke$arity$1 ? fexpr__59637.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59637.call(null,R));
})();
return (fexpr__59636.cljs$core$IFn$_invoke$arity$1 ? fexpr__59636.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59636.call(null,s));
})();
var L_state = emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0))], 0));
var minus_F0 = (function (){var fexpr__59639 = (function (){var fexpr__59640 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59640.cljs$core$IFn$_invoke$arity$1 ? fexpr__59640.cljs$core$IFn$_invoke$arity$1(dissipation_fn) : fexpr__59640.call(null,dissipation_fn));
})();
return (fexpr__59639.cljs$core$IFn$_invoke$arity$1 ? fexpr__59639.cljs$core$IFn$_invoke$arity$1(L_state) : fexpr__59639.call(null,L_state));
})();
var minus_F1 = (function (){var fexpr__59642 = (function (){var fexpr__59643 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59643.cljs$core$IFn$_invoke$arity$1 ? fexpr__59643.cljs$core$IFn$_invoke$arity$1(dissipation_fn) : fexpr__59643.call(null,dissipation_fn));
})();
return (fexpr__59642.cljs$core$IFn$_invoke$arity$1 ? fexpr__59642.cljs$core$IFn$_invoke$arity$1(L_state) : fexpr__59642.call(null,L_state));
})();
var pyd = emmy.generic._.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59645 = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((-1),(function (){var fexpr__59646 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59646.cljs$core$IFn$_invoke$arity$1 ? fexpr__59646.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59646.call(null,R));
})());
return (fexpr__59645.cljs$core$IFn$_invoke$arity$1 ? fexpr__59645.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59645.call(null,s));
})(),minus_F1);
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0)),emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(vx,(function (){var fexpr__59648 = (function (){var fexpr__59649 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59649.cljs$core$IFn$_invoke$arity$1 ? fexpr__59649.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59649.call(null,minus_P));
})();
return (fexpr__59648.cljs$core$IFn$_invoke$arity$1 ? fexpr__59648.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59648.call(null,s));
})(),vx),emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._.cljs$core$IFn$_invoke$arity$2(minus_F,emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__59651 = (function (){var fexpr__59652 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((0)) : emmy.calculus.derivative.partial.call(null,(0)));
return (fexpr__59652.cljs$core$IFn$_invoke$arity$1 ? fexpr__59652.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59652.call(null,minus_P));
})();
return (fexpr__59651.cljs$core$IFn$_invoke$arity$1 ? fexpr__59651.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59651.call(null,s));
})(),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59654 = (function (){var fexpr__59655 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59655.cljs$core$IFn$_invoke$arity$1 ? fexpr__59655.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59655.call(null,minus_P));
})();
return (fexpr__59654.cljs$core$IFn$_invoke$arity$1 ? fexpr__59654.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59654.call(null,s));
})(),vx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59657 = (function (){var fexpr__59658 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59658.cljs$core$IFn$_invoke$arity$1 ? fexpr__59658.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59658.call(null,minus_P));
})();
return (fexpr__59657.cljs$core$IFn$_invoke$arity$1 ? fexpr__59657.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59657.call(null,s));
})(),vy),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59660 = (function (){var fexpr__59661 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59661.cljs$core$IFn$_invoke$arity$1 ? fexpr__59661.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59661.call(null,minus_P));
})();
return (fexpr__59660.cljs$core$IFn$_invoke$arity$1 ? fexpr__59660.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59660.call(null,s));
})(),pyd)], 0))),minus_F0)),pyd], 0))], 0));
});
}));

(emmy.mechanics.routhian.Routhian__GT_state_derivative.cljs$lang$maxFixedArity = 2);

emmy.mechanics.routhian.Lagrangian_state__GT_Routhian_state = (function emmy$mechanics$routhian$Lagrangian_state__GT_Routhian_state(L){
return (function (p__59662){
var vec__59663 = p__59662;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59663,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59663,(1),null);
var vec__59666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59663,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59666,(0),null);
var s = vec__59663;
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59670 = (function (){var fexpr__59671 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((2)) : emmy.calculus.derivative.partial.call(null,(2)));
return (fexpr__59671.cljs$core$IFn$_invoke$arity$1 ? fexpr__59671.cljs$core$IFn$_invoke$arity$1(L) : fexpr__59671.call(null,L));
})();
return (fexpr__59670.cljs$core$IFn$_invoke$arity$1 ? fexpr__59670.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59670.call(null,s));
})(),(1));
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,py], 0))], 0));
});
});
emmy.mechanics.routhian.Routhian_state__GT_Lagrangian_state = (function emmy$mechanics$routhian$Routhian_state__GT_Lagrangian_state(R){
return (function (p__59672){
var vec__59673 = p__59672;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59673,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59673,(1),null);
var vec__59676 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59673,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59676,(0),null);
var s = vec__59673;
var vy = cljs.core.nth.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59680 = (function (){var fexpr__59681 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((2)) : emmy.calculus.derivative.partial.call(null,(2)));
return (fexpr__59681.cljs$core$IFn$_invoke$arity$1 ? fexpr__59681.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59681.call(null,R));
})();
return (fexpr__59680.cljs$core$IFn$_invoke$arity$1 ? fexpr__59680.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59680.call(null,s));
})(),(1));
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0))], 0));
});
});

//# sourceMappingURL=emmy.mechanics.routhian.js.map
