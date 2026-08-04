goog.provide('emmy.mechanics.routhian');
emmy.mechanics.routhian.Lagrangian__GT_Routhian = (function emmy$mechanics$routhian$Lagrangian__GT_Routhian(Lagrangian){
return (function (p__59475){
var vec__59476 = p__59475;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59476,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59476,(1),null);
var vec__59479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59476,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59479,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59479,(1),null);
var L = (function emmy$mechanics$routhian$Lagrangian__GT_Routhian_$_L(vy){
var G__59483 = emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0))], 0));
return (Lagrangian.cljs$core$IFn$_invoke$arity$1 ? Lagrangian.cljs$core$IFn$_invoke$arity$1(G__59483) : Lagrangian.call(null,G__59483));
});
var fexpr__59484 = emmy.mechanics.hamilton.Legendre_transform_procedure(L);
return (fexpr__59484.cljs$core$IFn$_invoke$arity$1 ? fexpr__59484.cljs$core$IFn$_invoke$arity$1(py) : fexpr__59484.call(null,py));
});
});
emmy.mechanics.routhian.Routh_equations = (function emmy$mechanics$routhian$Routh_equations(Routhian){
return (function (x,y,py){
return (function (t){
var L = (function emmy$mechanics$routhian$Routh_equations_$_L(p__59496){
var vec__59497 = p__59496;
var tau = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59497,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59497,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59497,(2),null);
var G__59500 = emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tau,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([q,(y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tau) : y.call(null,tau))], 0)),emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v,(py.cljs$core$IFn$_invoke$arity$1 ? py.cljs$core$IFn$_invoke$arity$1(tau) : py.call(null,tau))], 0))], 0));
return (Routhian.cljs$core$IFn$_invoke$arity$1 ? Routhian.cljs$core$IFn$_invoke$arity$1(G__59500) : Routhian.call(null,G__59500));
});
var H = (function emmy$mechanics$routhian$Routh_equations_$_H(p__59501){
var vec__59502 = p__59501;
var tau = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59502,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59502,(1),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59502,(2),null);
var G__59505 = emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tau,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tau) : x.call(null,tau)),q], 0)),emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__59506 = (emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(x) : emmy.calculus.derivative.D.call(null,x));
return (fexpr__59506.cljs$core$IFn$_invoke$arity$1 ? fexpr__59506.cljs$core$IFn$_invoke$arity$1(tau) : fexpr__59506.call(null,tau));
})(),p], 0))], 0));
return (Routhian.cljs$core$IFn$_invoke$arity$1 ? Routhian.cljs$core$IFn$_invoke$arity$1(G__59505) : Routhian.call(null,G__59505));
});
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__59508 = (function (){var fexpr__59509 = emmy.mechanics.lagrange.Lagrange_equations.cljs$core$IFn$_invoke$arity$1(L);
return (fexpr__59509.cljs$core$IFn$_invoke$arity$1 ? fexpr__59509.cljs$core$IFn$_invoke$arity$1(x) : fexpr__59509.call(null,x));
})();
return (fexpr__59508.cljs$core$IFn$_invoke$arity$1 ? fexpr__59508.cljs$core$IFn$_invoke$arity$1(t) : fexpr__59508.call(null,t));
})(),(function (){var fexpr__59510 = emmy.mechanics.hamilton.Hamilton_equations(H)(y,py);
return (fexpr__59510.cljs$core$IFn$_invoke$arity$1 ? fexpr__59510.cljs$core$IFn$_invoke$arity$1(t) : fexpr__59510.call(null,t));
})()], 0));
});
});
});
emmy.mechanics.routhian.Routhian__GT_acceleration = (function emmy$mechanics$routhian$Routhian__GT_acceleration(var_args){
var G__59512 = arguments.length;
switch (G__59512) {
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
return (function (p__59513){
var vec__59514 = p__59513;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59514,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59514,(1),null);
var vec__59517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59514,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59517,(0),null);
var s = vec__59514;
var minus_P = (function (){var fexpr__59520 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59520.cljs$core$IFn$_invoke$arity$1 ? fexpr__59520.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59520.call(null,R));
})();
var minus_F = (function (){var fexpr__59522 = (function (){var fexpr__59523 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59523.cljs$core$IFn$_invoke$arity$1 ? fexpr__59523.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59523.call(null,R));
})();
return (fexpr__59522.cljs$core$IFn$_invoke$arity$1 ? fexpr__59522.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59522.call(null,s));
})();
var vy = (function (){var fexpr__59525 = (function (){var fexpr__59526 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59526.cljs$core$IFn$_invoke$arity$1 ? fexpr__59526.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59526.call(null,R));
})();
return (fexpr__59525.cljs$core$IFn$_invoke$arity$1 ? fexpr__59525.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59525.call(null,s));
})();
var pyd = (function (){var fexpr__59528 = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((-1),(function (){var fexpr__59529 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59529.cljs$core$IFn$_invoke$arity$1 ? fexpr__59529.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59529.call(null,R));
})());
return (fexpr__59528.cljs$core$IFn$_invoke$arity$1 ? fexpr__59528.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59528.call(null,s));
})();
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(vx,(function (){var fexpr__59531 = (function (){var fexpr__59533 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59533.cljs$core$IFn$_invoke$arity$1 ? fexpr__59533.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59533.call(null,minus_P));
})();
return (fexpr__59531.cljs$core$IFn$_invoke$arity$1 ? fexpr__59531.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59531.call(null,s));
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
var minus_F1 = (function (){var fexpr__59567 = (function (){var fexpr__59568 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59568.cljs$core$IFn$_invoke$arity$1 ? fexpr__59568.cljs$core$IFn$_invoke$arity$1(dissipation_fn) : fexpr__59568.call(null,dissipation_fn));
})();
return (fexpr__59567.cljs$core$IFn$_invoke$arity$1 ? fexpr__59567.cljs$core$IFn$_invoke$arity$1(L_state) : fexpr__59567.call(null,L_state));
})();
var pyd = emmy.generic._.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59570 = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((-1),(function (){var fexpr__59571 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59571.cljs$core$IFn$_invoke$arity$1 ? fexpr__59571.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59571.call(null,R));
})());
return (fexpr__59570.cljs$core$IFn$_invoke$arity$1 ? fexpr__59570.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59570.call(null,s));
})(),minus_F1);
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(vx,(function (){var fexpr__59573 = (function (){var fexpr__59574 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59574.cljs$core$IFn$_invoke$arity$1 ? fexpr__59574.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59574.call(null,minus_P));
})();
return (fexpr__59573.cljs$core$IFn$_invoke$arity$1 ? fexpr__59573.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59573.call(null,s));
})(),vx),emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._.cljs$core$IFn$_invoke$arity$2(minus_F,emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__59576 = (function (){var fexpr__59577 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((0)) : emmy.calculus.derivative.partial.call(null,(0)));
return (fexpr__59577.cljs$core$IFn$_invoke$arity$1 ? fexpr__59577.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59577.call(null,minus_P));
})();
return (fexpr__59576.cljs$core$IFn$_invoke$arity$1 ? fexpr__59576.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59576.call(null,s));
})(),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59579 = (function (){var fexpr__59580 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59580.cljs$core$IFn$_invoke$arity$1 ? fexpr__59580.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59580.call(null,minus_P));
})();
return (fexpr__59579.cljs$core$IFn$_invoke$arity$1 ? fexpr__59579.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59579.call(null,s));
})(),vx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59582 = (function (){var fexpr__59583 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59583.cljs$core$IFn$_invoke$arity$1 ? fexpr__59583.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59583.call(null,minus_P));
})();
return (fexpr__59582.cljs$core$IFn$_invoke$arity$1 ? fexpr__59582.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59582.call(null,s));
})(),vy),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59585 = (function (){var fexpr__59586 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59586.cljs$core$IFn$_invoke$arity$1 ? fexpr__59586.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59586.call(null,minus_P));
})();
return (fexpr__59585.cljs$core$IFn$_invoke$arity$1 ? fexpr__59585.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59585.call(null,s));
})(),pyd)], 0))),minus_F0));
});
}));

(emmy.mechanics.routhian.Routhian__GT_acceleration.cljs$lang$maxFixedArity = 2);

emmy.mechanics.routhian.Routhian__GT_state_derivative = (function emmy$mechanics$routhian$Routhian__GT_state_derivative(var_args){
var G__59588 = arguments.length;
switch (G__59588) {
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
return (function (p__59589){
var vec__59591 = p__59589;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59591,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59591,(1),null);
var vec__59595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59591,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59595,(0),null);
var s = vec__59591;
var minus_P = (function (){var fexpr__59598 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59598.cljs$core$IFn$_invoke$arity$1 ? fexpr__59598.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59598.call(null,R));
})();
var minus_F = (function (){var fexpr__59600 = (function (){var fexpr__59601 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59601.cljs$core$IFn$_invoke$arity$1 ? fexpr__59601.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59601.call(null,R));
})();
return (fexpr__59600.cljs$core$IFn$_invoke$arity$1 ? fexpr__59600.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59600.call(null,s));
})();
var vy = (function (){var fexpr__59603 = (function (){var fexpr__59604 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59604.cljs$core$IFn$_invoke$arity$1 ? fexpr__59604.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59604.call(null,R));
})();
return (fexpr__59603.cljs$core$IFn$_invoke$arity$1 ? fexpr__59603.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59603.call(null,s));
})();
var pyd = emmy.generic._.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__59606 = (function (){var fexpr__59607 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59607.cljs$core$IFn$_invoke$arity$1 ? fexpr__59607.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59607.call(null,R));
})();
return (fexpr__59606.cljs$core$IFn$_invoke$arity$1 ? fexpr__59606.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59606.call(null,s));
})());
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0)),emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(vx,(function (){var fexpr__59609 = (function (){var fexpr__59611 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59611.cljs$core$IFn$_invoke$arity$1 ? fexpr__59611.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59611.call(null,minus_P));
})();
return (fexpr__59609.cljs$core$IFn$_invoke$arity$1 ? fexpr__59609.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59609.call(null,s));
})(),vx),emmy.generic._.cljs$core$IFn$_invoke$arity$2(minus_F,emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__59614 = (function (){var fexpr__59615 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((0)) : emmy.calculus.derivative.partial.call(null,(0)));
return (fexpr__59615.cljs$core$IFn$_invoke$arity$1 ? fexpr__59615.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59615.call(null,minus_P));
})();
return (fexpr__59614.cljs$core$IFn$_invoke$arity$1 ? fexpr__59614.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59614.call(null,s));
})(),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59617 = (function (){var fexpr__59618 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59618.cljs$core$IFn$_invoke$arity$1 ? fexpr__59618.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59618.call(null,minus_P));
})();
return (fexpr__59617.cljs$core$IFn$_invoke$arity$1 ? fexpr__59617.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59617.call(null,s));
})(),vx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59620 = (function (){var fexpr__59621 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59621.cljs$core$IFn$_invoke$arity$1 ? fexpr__59621.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59621.call(null,minus_P));
})();
return (fexpr__59620.cljs$core$IFn$_invoke$arity$1 ? fexpr__59620.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59620.call(null,s));
})(),vy),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59623 = (function (){var fexpr__59624 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59624.cljs$core$IFn$_invoke$arity$1 ? fexpr__59624.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59624.call(null,minus_P));
})();
return (fexpr__59623.cljs$core$IFn$_invoke$arity$1 ? fexpr__59623.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59623.call(null,s));
})(),pyd)], 0)))),pyd], 0))], 0));
});
}));

(emmy.mechanics.routhian.Routhian__GT_state_derivative.cljs$core$IFn$_invoke$arity$2 = (function (R,dissipation_fn){
return (function (p__59625){
var vec__59626 = p__59625;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59626,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59626,(1),null);
var vec__59629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59626,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59629,(0),null);
var s = vec__59626;
var minus_P = (function (){var fexpr__59632 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59632.cljs$core$IFn$_invoke$arity$1 ? fexpr__59632.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59632.call(null,R));
})();
var minus_F = (function (){var fexpr__59634 = (function (){var fexpr__59635 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__59635.cljs$core$IFn$_invoke$arity$1 ? fexpr__59635.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59635.call(null,R));
})();
return (fexpr__59634.cljs$core$IFn$_invoke$arity$1 ? fexpr__59634.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59634.call(null,s));
})();
var vy = (function (){var fexpr__59637 = (function (){var fexpr__59638 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59638.cljs$core$IFn$_invoke$arity$1 ? fexpr__59638.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59638.call(null,R));
})();
return (fexpr__59637.cljs$core$IFn$_invoke$arity$1 ? fexpr__59637.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59637.call(null,s));
})();
var L_state = emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0))], 0));
var minus_F0 = (function (){var fexpr__59640 = (function (){var fexpr__59641 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59641.cljs$core$IFn$_invoke$arity$1 ? fexpr__59641.cljs$core$IFn$_invoke$arity$1(dissipation_fn) : fexpr__59641.call(null,dissipation_fn));
})();
return (fexpr__59640.cljs$core$IFn$_invoke$arity$1 ? fexpr__59640.cljs$core$IFn$_invoke$arity$1(L_state) : fexpr__59640.call(null,L_state));
})();
var minus_F1 = (function (){var fexpr__59643 = (function (){var fexpr__59644 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__59644.cljs$core$IFn$_invoke$arity$1 ? fexpr__59644.cljs$core$IFn$_invoke$arity$1(dissipation_fn) : fexpr__59644.call(null,dissipation_fn));
})();
return (fexpr__59643.cljs$core$IFn$_invoke$arity$1 ? fexpr__59643.cljs$core$IFn$_invoke$arity$1(L_state) : fexpr__59643.call(null,L_state));
})();
var pyd = emmy.generic._.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59646 = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((-1),(function (){var fexpr__59647 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__59647.cljs$core$IFn$_invoke$arity$1 ? fexpr__59647.cljs$core$IFn$_invoke$arity$1(R) : fexpr__59647.call(null,R));
})());
return (fexpr__59646.cljs$core$IFn$_invoke$arity$1 ? fexpr__59646.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59646.call(null,s));
})(),minus_F1);
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0)),emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(vx,(function (){var fexpr__59652 = (function (){var fexpr__59653 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__59653.cljs$core$IFn$_invoke$arity$1 ? fexpr__59653.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__59653.call(null,minus_P));
})();
return (fexpr__59652.cljs$core$IFn$_invoke$arity$1 ? fexpr__59652.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59652.call(null,s));
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
