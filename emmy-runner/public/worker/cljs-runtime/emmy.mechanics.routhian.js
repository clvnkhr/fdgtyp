import "./cljs_env.js";
import "./cljs.core.js";
import "./emmy.calculus.derivative.js";
import "./emmy.generic.js";
import "./emmy.matrix.js";
import "./emmy.mechanics.hamilton.js";
import "./emmy.mechanics.lagrange.js";
import "./emmy.structure.js";
goog.provide('emmy.mechanics.routhian');
emmy.mechanics.routhian.Lagrangian__GT_Routhian = (function emmy$mechanics$routhian$Lagrangian__GT_Routhian(Lagrangian){
return (function (p__78326){
var vec__78327 = p__78326;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78327,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78327,(1),null);
var vec__78330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78327,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78330,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78330,(1),null);
var L = (function emmy$mechanics$routhian$Lagrangian__GT_Routhian_$_L(vy){
var G__78334 = emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0))], 0));
return (Lagrangian.cljs$core$IFn$_invoke$arity$1 ? Lagrangian.cljs$core$IFn$_invoke$arity$1(G__78334) : Lagrangian.call(null,G__78334));
});
var fexpr__78335 = emmy.mechanics.hamilton.Legendre_transform_procedure(L);
return (fexpr__78335.cljs$core$IFn$_invoke$arity$1 ? fexpr__78335.cljs$core$IFn$_invoke$arity$1(py) : fexpr__78335.call(null,py));
});
});
emmy.mechanics.routhian.Routh_equations = (function emmy$mechanics$routhian$Routh_equations(Routhian){
return (function (x,y,py){
return (function (t){
var L = (function emmy$mechanics$routhian$Routh_equations_$_L(p__78347){
var vec__78348 = p__78347;
var tau = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78348,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78348,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78348,(2),null);
var G__78351 = emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tau,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([q,(y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tau) : y.call(null,tau))], 0)),emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v,(py.cljs$core$IFn$_invoke$arity$1 ? py.cljs$core$IFn$_invoke$arity$1(tau) : py.call(null,tau))], 0))], 0));
return (Routhian.cljs$core$IFn$_invoke$arity$1 ? Routhian.cljs$core$IFn$_invoke$arity$1(G__78351) : Routhian.call(null,G__78351));
});
var H = (function emmy$mechanics$routhian$Routh_equations_$_H(p__78352){
var vec__78353 = p__78352;
var tau = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78353,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78353,(1),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78353,(2),null);
var G__78356 = emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tau,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tau) : x.call(null,tau)),q], 0)),emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__78357 = (emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(x) : emmy.calculus.derivative.D.call(null,x));
return (fexpr__78357.cljs$core$IFn$_invoke$arity$1 ? fexpr__78357.cljs$core$IFn$_invoke$arity$1(tau) : fexpr__78357.call(null,tau));
})(),p], 0))], 0));
return (Routhian.cljs$core$IFn$_invoke$arity$1 ? Routhian.cljs$core$IFn$_invoke$arity$1(G__78356) : Routhian.call(null,G__78356));
});
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__78359 = (function (){var fexpr__78360 = emmy.mechanics.lagrange.Lagrange_equations.cljs$core$IFn$_invoke$arity$1(L);
return (fexpr__78360.cljs$core$IFn$_invoke$arity$1 ? fexpr__78360.cljs$core$IFn$_invoke$arity$1(x) : fexpr__78360.call(null,x));
})();
return (fexpr__78359.cljs$core$IFn$_invoke$arity$1 ? fexpr__78359.cljs$core$IFn$_invoke$arity$1(t) : fexpr__78359.call(null,t));
})(),(function (){var fexpr__78361 = emmy.mechanics.hamilton.Hamilton_equations(H)(y,py);
return (fexpr__78361.cljs$core$IFn$_invoke$arity$1 ? fexpr__78361.cljs$core$IFn$_invoke$arity$1(t) : fexpr__78361.call(null,t));
})()], 0));
});
});
});
emmy.mechanics.routhian.Routhian__GT_acceleration = (function emmy$mechanics$routhian$Routhian__GT_acceleration(var_args){
var G__78363 = arguments.length;
switch (G__78363) {
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
return (function (p__78364){
var vec__78365 = p__78364;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78365,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78365,(1),null);
var vec__78368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78365,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78368,(0),null);
var s = vec__78365;
var minus_P = (function (){var fexpr__78372 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__78372.cljs$core$IFn$_invoke$arity$1 ? fexpr__78372.cljs$core$IFn$_invoke$arity$1(R) : fexpr__78372.call(null,R));
})();
var minus_F = (function (){var fexpr__78374 = (function (){var fexpr__78376 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__78376.cljs$core$IFn$_invoke$arity$1 ? fexpr__78376.cljs$core$IFn$_invoke$arity$1(R) : fexpr__78376.call(null,R));
})();
return (fexpr__78374.cljs$core$IFn$_invoke$arity$1 ? fexpr__78374.cljs$core$IFn$_invoke$arity$1(s) : fexpr__78374.call(null,s));
})();
var vy = (function (){var fexpr__78378 = (function (){var fexpr__78379 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__78379.cljs$core$IFn$_invoke$arity$1 ? fexpr__78379.cljs$core$IFn$_invoke$arity$1(R) : fexpr__78379.call(null,R));
})();
return (fexpr__78378.cljs$core$IFn$_invoke$arity$1 ? fexpr__78378.cljs$core$IFn$_invoke$arity$1(s) : fexpr__78378.call(null,s));
})();
var pyd = (function (){var fexpr__78381 = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((-1),(function (){var fexpr__78382 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__78382.cljs$core$IFn$_invoke$arity$1 ? fexpr__78382.cljs$core$IFn$_invoke$arity$1(R) : fexpr__78382.call(null,R));
})());
return (fexpr__78381.cljs$core$IFn$_invoke$arity$1 ? fexpr__78381.cljs$core$IFn$_invoke$arity$1(s) : fexpr__78381.call(null,s));
})();
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(vx,(function (){var fexpr__78384 = (function (){var fexpr__78385 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__78385.cljs$core$IFn$_invoke$arity$1 ? fexpr__78385.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__78385.call(null,minus_P));
})();
return (fexpr__78384.cljs$core$IFn$_invoke$arity$1 ? fexpr__78384.cljs$core$IFn$_invoke$arity$1(s) : fexpr__78384.call(null,s));
})(),vx),emmy.generic._.cljs$core$IFn$_invoke$arity$2(minus_F,emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__78387 = (function (){var fexpr__78388 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((0)) : emmy.calculus.derivative.partial.call(null,(0)));
return (fexpr__78388.cljs$core$IFn$_invoke$arity$1 ? fexpr__78388.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__78388.call(null,minus_P));
})();
return (fexpr__78387.cljs$core$IFn$_invoke$arity$1 ? fexpr__78387.cljs$core$IFn$_invoke$arity$1(s) : fexpr__78387.call(null,s));
})(),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__78390 = (function (){var fexpr__78391 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__78391.cljs$core$IFn$_invoke$arity$1 ? fexpr__78391.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__78391.call(null,minus_P));
})();
return (fexpr__78390.cljs$core$IFn$_invoke$arity$1 ? fexpr__78390.cljs$core$IFn$_invoke$arity$1(s) : fexpr__78390.call(null,s));
})(),vx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__78393 = (function (){var fexpr__78394 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__78394.cljs$core$IFn$_invoke$arity$1 ? fexpr__78394.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__78394.call(null,minus_P));
})();
return (fexpr__78393.cljs$core$IFn$_invoke$arity$1 ? fexpr__78393.cljs$core$IFn$_invoke$arity$1(s) : fexpr__78393.call(null,s));
})(),vy),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__78396 = (function (){var fexpr__78397 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__78397.cljs$core$IFn$_invoke$arity$1 ? fexpr__78397.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__78397.call(null,minus_P));
})();
return (fexpr__78396.cljs$core$IFn$_invoke$arity$1 ? fexpr__78396.cljs$core$IFn$_invoke$arity$1(s) : fexpr__78396.call(null,s));
})(),pyd)], 0))));
});
}));

(emmy.mechanics.routhian.Routhian__GT_acceleration.cljs$core$IFn$_invoke$arity$2 = (function (R,dissipation_fn){
return (function (p__78398){
var vec__78399 = p__78398;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78399,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78399,(1),null);
var vec__78402 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78399,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78402,(0),null);
var s = vec__78399;
var minus_P = (function (){var fexpr__78405 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__78405.cljs$core$IFn$_invoke$arity$1 ? fexpr__78405.cljs$core$IFn$_invoke$arity$1(R) : fexpr__78405.call(null,R));
})();
var minus_F = (function (){var fexpr__78407 = (function (){var fexpr__78408 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__78408.cljs$core$IFn$_invoke$arity$1 ? fexpr__78408.cljs$core$IFn$_invoke$arity$1(R) : fexpr__78408.call(null,R));
})();
return (fexpr__78407.cljs$core$IFn$_invoke$arity$1 ? fexpr__78407.cljs$core$IFn$_invoke$arity$1(s) : fexpr__78407.call(null,s));
})();
var vy = (function (){var fexpr__78410 = (function (){var fexpr__78411 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__78411.cljs$core$IFn$_invoke$arity$1 ? fexpr__78411.cljs$core$IFn$_invoke$arity$1(R) : fexpr__78411.call(null,R));
})();
return (fexpr__78410.cljs$core$IFn$_invoke$arity$1 ? fexpr__78410.cljs$core$IFn$_invoke$arity$1(s) : fexpr__78410.call(null,s));
})();
var L_state = emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0))], 0));
var minus_F0 = (function (){var fexpr__78413 = (function (){var fexpr__78414 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__78414.cljs$core$IFn$_invoke$arity$1 ? fexpr__78414.cljs$core$IFn$_invoke$arity$1(dissipation_fn) : fexpr__78414.call(null,dissipation_fn));
})();
return (fexpr__78413.cljs$core$IFn$_invoke$arity$1 ? fexpr__78413.cljs$core$IFn$_invoke$arity$1(L_state) : fexpr__78413.call(null,L_state));
})();
var minus_F1 = (function (){var fexpr__78417 = (function (){var fexpr__78418 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__78418.cljs$core$IFn$_invoke$arity$1 ? fexpr__78418.cljs$core$IFn$_invoke$arity$1(dissipation_fn) : fexpr__78418.call(null,dissipation_fn));
})();
return (fexpr__78417.cljs$core$IFn$_invoke$arity$1 ? fexpr__78417.cljs$core$IFn$_invoke$arity$1(L_state) : fexpr__78417.call(null,L_state));
})();
var pyd = emmy.generic._.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__78420 = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((-1),(function (){var fexpr__78421 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__78421.cljs$core$IFn$_invoke$arity$1 ? fexpr__78421.cljs$core$IFn$_invoke$arity$1(R) : fexpr__78421.call(null,R));
})());
return (fexpr__78420.cljs$core$IFn$_invoke$arity$1 ? fexpr__78420.cljs$core$IFn$_invoke$arity$1(s) : fexpr__78420.call(null,s));
})(),minus_F1);
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(vx,(function (){var fexpr__78423 = (function (){var fexpr__78424 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__78424.cljs$core$IFn$_invoke$arity$1 ? fexpr__78424.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__78424.call(null,minus_P));
})();
return (fexpr__78423.cljs$core$IFn$_invoke$arity$1 ? fexpr__78423.cljs$core$IFn$_invoke$arity$1(s) : fexpr__78423.call(null,s));
})(),vx),emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._.cljs$core$IFn$_invoke$arity$2(minus_F,emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__78426 = (function (){var fexpr__78427 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((0)) : emmy.calculus.derivative.partial.call(null,(0)));
return (fexpr__78427.cljs$core$IFn$_invoke$arity$1 ? fexpr__78427.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__78427.call(null,minus_P));
})();
return (fexpr__78426.cljs$core$IFn$_invoke$arity$1 ? fexpr__78426.cljs$core$IFn$_invoke$arity$1(s) : fexpr__78426.call(null,s));
})(),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__78429 = (function (){var fexpr__78430 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__78430.cljs$core$IFn$_invoke$arity$1 ? fexpr__78430.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__78430.call(null,minus_P));
})();
return (fexpr__78429.cljs$core$IFn$_invoke$arity$1 ? fexpr__78429.cljs$core$IFn$_invoke$arity$1(s) : fexpr__78429.call(null,s));
})(),vx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__78432 = (function (){var fexpr__78433 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__78433.cljs$core$IFn$_invoke$arity$1 ? fexpr__78433.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__78433.call(null,minus_P));
})();
return (fexpr__78432.cljs$core$IFn$_invoke$arity$1 ? fexpr__78432.cljs$core$IFn$_invoke$arity$1(s) : fexpr__78432.call(null,s));
})(),vy),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__78435 = (function (){var fexpr__78436 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__78436.cljs$core$IFn$_invoke$arity$1 ? fexpr__78436.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__78436.call(null,minus_P));
})();
return (fexpr__78435.cljs$core$IFn$_invoke$arity$1 ? fexpr__78435.cljs$core$IFn$_invoke$arity$1(s) : fexpr__78435.call(null,s));
})(),pyd)], 0))),minus_F0));
});
}));

(emmy.mechanics.routhian.Routhian__GT_acceleration.cljs$lang$maxFixedArity = 2);

emmy.mechanics.routhian.Routhian__GT_state_derivative = (function emmy$mechanics$routhian$Routhian__GT_state_derivative(var_args){
var G__78438 = arguments.length;
switch (G__78438) {
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
return (function (p__78439){
var vec__78440 = p__78439;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78440,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78440,(1),null);
var vec__78443 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78440,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78443,(0),null);
var s = vec__78440;
var minus_P = (function (){var fexpr__78447 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__78447.cljs$core$IFn$_invoke$arity$1 ? fexpr__78447.cljs$core$IFn$_invoke$arity$1(R) : fexpr__78447.call(null,R));
})();
var minus_F = (function (){var fexpr__78449 = (function (){var fexpr__78450 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__78450.cljs$core$IFn$_invoke$arity$1 ? fexpr__78450.cljs$core$IFn$_invoke$arity$1(R) : fexpr__78450.call(null,R));
})();
return (fexpr__78449.cljs$core$IFn$_invoke$arity$1 ? fexpr__78449.cljs$core$IFn$_invoke$arity$1(s) : fexpr__78449.call(null,s));
})();
var vy = (function (){var fexpr__78453 = (function (){var fexpr__78454 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__78454.cljs$core$IFn$_invoke$arity$1 ? fexpr__78454.cljs$core$IFn$_invoke$arity$1(R) : fexpr__78454.call(null,R));
})();
return (fexpr__78453.cljs$core$IFn$_invoke$arity$1 ? fexpr__78453.cljs$core$IFn$_invoke$arity$1(s) : fexpr__78453.call(null,s));
})();
var pyd = emmy.generic._.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__78456 = (function (){var fexpr__78457 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__78457.cljs$core$IFn$_invoke$arity$1 ? fexpr__78457.cljs$core$IFn$_invoke$arity$1(R) : fexpr__78457.call(null,R));
})();
return (fexpr__78456.cljs$core$IFn$_invoke$arity$1 ? fexpr__78456.cljs$core$IFn$_invoke$arity$1(s) : fexpr__78456.call(null,s));
})());
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0)),emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(vx,(function (){var fexpr__78460 = (function (){var fexpr__78461 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__78461.cljs$core$IFn$_invoke$arity$1 ? fexpr__78461.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__78461.call(null,minus_P));
})();
return (fexpr__78460.cljs$core$IFn$_invoke$arity$1 ? fexpr__78460.cljs$core$IFn$_invoke$arity$1(s) : fexpr__78460.call(null,s));
})(),vx),emmy.generic._.cljs$core$IFn$_invoke$arity$2(minus_F,emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__78467 = (function (){var fexpr__78468 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((0)) : emmy.calculus.derivative.partial.call(null,(0)));
return (fexpr__78468.cljs$core$IFn$_invoke$arity$1 ? fexpr__78468.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__78468.call(null,minus_P));
})();
return (fexpr__78467.cljs$core$IFn$_invoke$arity$1 ? fexpr__78467.cljs$core$IFn$_invoke$arity$1(s) : fexpr__78467.call(null,s));
})(),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__78470 = (function (){var fexpr__78471 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__78471.cljs$core$IFn$_invoke$arity$1 ? fexpr__78471.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__78471.call(null,minus_P));
})();
return (fexpr__78470.cljs$core$IFn$_invoke$arity$1 ? fexpr__78470.cljs$core$IFn$_invoke$arity$1(s) : fexpr__78470.call(null,s));
})(),vx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__78473 = (function (){var fexpr__78474 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__78474.cljs$core$IFn$_invoke$arity$1 ? fexpr__78474.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__78474.call(null,minus_P));
})();
return (fexpr__78473.cljs$core$IFn$_invoke$arity$1 ? fexpr__78473.cljs$core$IFn$_invoke$arity$1(s) : fexpr__78473.call(null,s));
})(),vy),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__78476 = (function (){var fexpr__78477 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__78477.cljs$core$IFn$_invoke$arity$1 ? fexpr__78477.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__78477.call(null,minus_P));
})();
return (fexpr__78476.cljs$core$IFn$_invoke$arity$1 ? fexpr__78476.cljs$core$IFn$_invoke$arity$1(s) : fexpr__78476.call(null,s));
})(),pyd)], 0)))),pyd], 0))], 0));
});
}));

(emmy.mechanics.routhian.Routhian__GT_state_derivative.cljs$core$IFn$_invoke$arity$2 = (function (R,dissipation_fn){
return (function (p__78479){
var vec__78480 = p__78479;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78480,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78480,(1),null);
var vec__78483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78480,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78483,(0),null);
var s = vec__78480;
var minus_P = (function (){var fexpr__78486 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__78486.cljs$core$IFn$_invoke$arity$1 ? fexpr__78486.cljs$core$IFn$_invoke$arity$1(R) : fexpr__78486.call(null,R));
})();
var minus_F = (function (){var fexpr__78488 = (function (){var fexpr__78489 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__78489.cljs$core$IFn$_invoke$arity$1 ? fexpr__78489.cljs$core$IFn$_invoke$arity$1(R) : fexpr__78489.call(null,R));
})();
return (fexpr__78488.cljs$core$IFn$_invoke$arity$1 ? fexpr__78488.cljs$core$IFn$_invoke$arity$1(s) : fexpr__78488.call(null,s));
})();
var vy = (function (){var fexpr__78491 = (function (){var fexpr__78492 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__78492.cljs$core$IFn$_invoke$arity$1 ? fexpr__78492.cljs$core$IFn$_invoke$arity$1(R) : fexpr__78492.call(null,R));
})();
return (fexpr__78491.cljs$core$IFn$_invoke$arity$1 ? fexpr__78491.cljs$core$IFn$_invoke$arity$1(s) : fexpr__78491.call(null,s));
})();
var L_state = emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0))], 0));
var minus_F0 = (function (){var fexpr__78494 = (function (){var fexpr__78495 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__78495.cljs$core$IFn$_invoke$arity$1 ? fexpr__78495.cljs$core$IFn$_invoke$arity$1(dissipation_fn) : fexpr__78495.call(null,dissipation_fn));
})();
return (fexpr__78494.cljs$core$IFn$_invoke$arity$1 ? fexpr__78494.cljs$core$IFn$_invoke$arity$1(L_state) : fexpr__78494.call(null,L_state));
})();
var minus_F1 = (function (){var fexpr__78497 = (function (){var fexpr__78498 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__78498.cljs$core$IFn$_invoke$arity$1 ? fexpr__78498.cljs$core$IFn$_invoke$arity$1(dissipation_fn) : fexpr__78498.call(null,dissipation_fn));
})();
return (fexpr__78497.cljs$core$IFn$_invoke$arity$1 ? fexpr__78497.cljs$core$IFn$_invoke$arity$1(L_state) : fexpr__78497.call(null,L_state));
})();
var pyd = emmy.generic._.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__78500 = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((-1),(function (){var fexpr__78501 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__78501.cljs$core$IFn$_invoke$arity$1 ? fexpr__78501.cljs$core$IFn$_invoke$arity$1(R) : fexpr__78501.call(null,R));
})());
return (fexpr__78500.cljs$core$IFn$_invoke$arity$1 ? fexpr__78500.cljs$core$IFn$_invoke$arity$1(s) : fexpr__78500.call(null,s));
})(),minus_F1);
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0)),emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(vx,(function (){var fexpr__78503 = (function (){var fexpr__78504 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(0)) : emmy.calculus.derivative.partial.call(null,(2),(0)));
return (fexpr__78504.cljs$core$IFn$_invoke$arity$1 ? fexpr__78504.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__78504.call(null,minus_P));
})();
return (fexpr__78503.cljs$core$IFn$_invoke$arity$1 ? fexpr__78503.cljs$core$IFn$_invoke$arity$1(s) : fexpr__78503.call(null,s));
})(),vx),emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._.cljs$core$IFn$_invoke$arity$2(minus_F,emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__78506 = (function (){var fexpr__78507 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((0)) : emmy.calculus.derivative.partial.call(null,(0)));
return (fexpr__78507.cljs$core$IFn$_invoke$arity$1 ? fexpr__78507.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__78507.call(null,minus_P));
})();
return (fexpr__78506.cljs$core$IFn$_invoke$arity$1 ? fexpr__78506.cljs$core$IFn$_invoke$arity$1(s) : fexpr__78506.call(null,s));
})(),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__78509 = (function (){var fexpr__78510 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(0)) : emmy.calculus.derivative.partial.call(null,(1),(0)));
return (fexpr__78510.cljs$core$IFn$_invoke$arity$1 ? fexpr__78510.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__78510.call(null,minus_P));
})();
return (fexpr__78509.cljs$core$IFn$_invoke$arity$1 ? fexpr__78509.cljs$core$IFn$_invoke$arity$1(s) : fexpr__78509.call(null,s));
})(),vx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__78512 = (function (){var fexpr__78513 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((1),(1)) : emmy.calculus.derivative.partial.call(null,(1),(1)));
return (fexpr__78513.cljs$core$IFn$_invoke$arity$1 ? fexpr__78513.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__78513.call(null,minus_P));
})();
return (fexpr__78512.cljs$core$IFn$_invoke$arity$1 ? fexpr__78512.cljs$core$IFn$_invoke$arity$1(s) : fexpr__78512.call(null,s));
})(),vy),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__78515 = (function (){var fexpr__78516 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$2((2),(1)) : emmy.calculus.derivative.partial.call(null,(2),(1)));
return (fexpr__78516.cljs$core$IFn$_invoke$arity$1 ? fexpr__78516.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__78516.call(null,minus_P));
})();
return (fexpr__78515.cljs$core$IFn$_invoke$arity$1 ? fexpr__78515.cljs$core$IFn$_invoke$arity$1(s) : fexpr__78515.call(null,s));
})(),pyd)], 0))),minus_F0)),pyd], 0))], 0));
});
}));

(emmy.mechanics.routhian.Routhian__GT_state_derivative.cljs$lang$maxFixedArity = 2);

emmy.mechanics.routhian.Lagrangian_state__GT_Routhian_state = (function emmy$mechanics$routhian$Lagrangian_state__GT_Routhian_state(L){
return (function (p__78528){
var vec__78535 = p__78528;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78535,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78535,(1),null);
var vec__78538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78535,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78538,(0),null);
var s = vec__78535;
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__78546 = (function (){var fexpr__78547 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((2)) : emmy.calculus.derivative.partial.call(null,(2)));
return (fexpr__78547.cljs$core$IFn$_invoke$arity$1 ? fexpr__78547.cljs$core$IFn$_invoke$arity$1(L) : fexpr__78547.call(null,L));
})();
return (fexpr__78546.cljs$core$IFn$_invoke$arity$1 ? fexpr__78546.cljs$core$IFn$_invoke$arity$1(s) : fexpr__78546.call(null,s));
})(),(1));
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,py], 0))], 0));
});
});
emmy.mechanics.routhian.Routhian_state__GT_Lagrangian_state = (function emmy$mechanics$routhian$Routhian_state__GT_Lagrangian_state(R){
return (function (p__78551){
var vec__78552 = p__78551;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78552,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78552,(1),null);
var vec__78555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78552,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78555,(0),null);
var s = vec__78552;
var vy = cljs.core.nth.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__78562 = (function (){var fexpr__78563 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((2)) : emmy.calculus.derivative.partial.call(null,(2)));
return (fexpr__78563.cljs$core$IFn$_invoke$arity$1 ? fexpr__78563.cljs$core$IFn$_invoke$arity$1(R) : fexpr__78563.call(null,R));
})();
return (fexpr__78562.cljs$core$IFn$_invoke$arity$1 ? fexpr__78562.cljs$core$IFn$_invoke$arity$1(s) : fexpr__78562.call(null,s));
})(),(1));
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0))], 0));
});
});

//# sourceMappingURL=emmy.mechanics.routhian.js.map
