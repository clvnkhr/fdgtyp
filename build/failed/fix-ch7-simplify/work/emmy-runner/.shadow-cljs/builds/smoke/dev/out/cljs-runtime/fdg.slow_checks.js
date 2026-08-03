goog.provide('fdg.slow_checks');
fdg.slow_checks.sum2 = (function fdg$slow_checks$sum2(f){
var G__65039 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((0)) : f.call(null,(0)));
var G__65040 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((1)) : f.call(null,(1)));
return (emmy.env._PLUS_.cljs$core$IFn$_invoke$arity$2 ? emmy.env._PLUS_.cljs$core$IFn$_invoke$arity$2(G__65039,G__65040) : emmy.env._PLUS_.call(null,G__65039,G__65040));
});
/**
 * Exact north-pole stereographic coordinates in a native Emmy function.
 */
fdg.slow_checks.spherical__GT_stereographic = (function fdg$slow_checks$spherical__GT_stereographic(p__65042){
var vec__65043 = p__65042;
var theta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65043,(0),null);
var phi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65043,(1),null);
var scale = (function (){var G__65046 = emmy.env.sin.cljs$core$IFn$_invoke$arity$1(theta);
var G__65047 = (function (){var G__65048 = (1);
var G__65049 = emmy.env.cos.cljs$core$IFn$_invoke$arity$1(theta);
return (emmy.env._.cljs$core$IFn$_invoke$arity$2 ? emmy.env._.cljs$core$IFn$_invoke$arity$2(G__65048,G__65049) : emmy.env._.call(null,G__65048,G__65049));
})();
return (emmy.env._SLASH_.cljs$core$IFn$_invoke$arity$2 ? emmy.env._SLASH_.cljs$core$IFn$_invoke$arity$2(G__65046,G__65047) : emmy.env._SLASH_.call(null,G__65046,G__65047));
})();
var G__65050 = (function (){var G__65052 = scale;
var G__65053 = emmy.env.cos.cljs$core$IFn$_invoke$arity$1(phi);
return (emmy.env._STAR_.cljs$core$IFn$_invoke$arity$2 ? emmy.env._STAR_.cljs$core$IFn$_invoke$arity$2(G__65052,G__65053) : emmy.env._STAR_.call(null,G__65052,G__65053));
})();
var G__65051 = (function (){var G__65054 = scale;
var G__65055 = emmy.env.sin.cljs$core$IFn$_invoke$arity$1(phi);
return (emmy.env._STAR_.cljs$core$IFn$_invoke$arity$2 ? emmy.env._STAR_.cljs$core$IFn$_invoke$arity$2(G__65054,G__65055) : emmy.env._STAR_.call(null,G__65054,G__65055));
})();
return (emmy.env.up.cljs$core$IFn$_invoke$arity$2 ? emmy.env.up.cljs$core$IFn$_invoke$arity$2(G__65050,G__65051) : emmy.env.up.call(null,G__65050,G__65051));
});
fdg.slow_checks.old_term = (function fdg$slow_checks$old_term(old_symbols,J,i,b,c){
return emmy.env.simplify.cljs$core$IFn$_invoke$arity$1(fdg.slow_checks.sum2((function (j){
return emmy.env.simplify.cljs$core$IFn$_invoke$arity$1(fdg.slow_checks.sum2((function (k){
return emmy.env.simplify.cljs$core$IFn$_invoke$arity$1((function (){var G__65059 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_symbols,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,k,i], null));
var G__65060 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(J,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,j], null));
var G__65061 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(J,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,k], null));
return (emmy.env._STAR_.cljs$core$IFn$_invoke$arity$3 ? emmy.env._STAR_.cljs$core$IFn$_invoke$arity$3(G__65059,G__65060,G__65061) : emmy.env._STAR_.call(null,G__65059,G__65060,G__65061));
})());
})));
})));
});
fdg.slow_checks.transformed_coefficient = (function fdg$slow_checks$transformed_coefficient(old_symbols,J,J_inverse,dJ,b,c,a){
return emmy.env.simplify.cljs$core$IFn$_invoke$arity$1(fdg.slow_checks.sum2((function (i){
return emmy.env.simplify.cljs$core$IFn$_invoke$arity$1((function (){var G__65065 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(J_inverse,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,a], null));
var G__65066 = emmy.env.simplify.cljs$core$IFn$_invoke$arity$1((function (){var G__65067 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dJ,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c,i], null));
var G__65068 = fdg.slow_checks.old_term(old_symbols,J,i,b,c);
return (emmy.env._PLUS_.cljs$core$IFn$_invoke$arity$2 ? emmy.env._PLUS_.cljs$core$IFn$_invoke$arity$2(G__65067,G__65068) : emmy.env._PLUS_.call(null,G__65067,G__65068));
})());
return (emmy.env._STAR_.cljs$core$IFn$_invoke$arity$2 ? emmy.env._STAR_.cljs$core$IFn$_invoke$arity$2(G__65065,G__65066) : emmy.env._STAR_.call(null,G__65065,G__65066));
})());
})));
});
fdg.slow_checks.transform_symbols = (function fdg$slow_checks$transform_symbols(old_symbols,q){
var J = (function (){var G__65072 = emmy.env.simplify;
var G__65073 = (function (){var fexpr__65074 = (emmy.env.D.cljs$core$IFn$_invoke$arity$1 ? emmy.env.D.cljs$core$IFn$_invoke$arity$1(fdg.slow_checks.spherical__GT_stereographic) : emmy.env.D.call(null,fdg.slow_checks.spherical__GT_stereographic));
return (fexpr__65074.cljs$core$IFn$_invoke$arity$1 ? fexpr__65074.cljs$core$IFn$_invoke$arity$1(q) : fexpr__65074.call(null,q));
})();
return (emmy.env.mapr.cljs$core$IFn$_invoke$arity$2 ? emmy.env.mapr.cljs$core$IFn$_invoke$arity$2(G__65072,G__65073) : emmy.env.mapr.call(null,G__65072,G__65073));
})();
var J_inverse = (function (){var G__65075 = emmy.env.simplify;
var G__65076 = emmy.env.invert.cljs$core$IFn$_invoke$arity$1(J);
return (emmy.env.mapr.cljs$core$IFn$_invoke$arity$2 ? emmy.env.mapr.cljs$core$IFn$_invoke$arity$2(G__65075,G__65076) : emmy.env.mapr.call(null,G__65075,G__65076));
})();
var dJ = (function (){var G__65077 = emmy.env.simplify;
var G__65078 = (function (){var fexpr__65080 = (function (){var G__65081 = (emmy.env.D.cljs$core$IFn$_invoke$arity$1 ? emmy.env.D.cljs$core$IFn$_invoke$arity$1(fdg.slow_checks.spherical__GT_stereographic) : emmy.env.D.call(null,fdg.slow_checks.spherical__GT_stereographic));
return (emmy.env.D.cljs$core$IFn$_invoke$arity$1 ? emmy.env.D.cljs$core$IFn$_invoke$arity$1(G__65081) : emmy.env.D.call(null,G__65081));
})();
return (fexpr__65080.cljs$core$IFn$_invoke$arity$1 ? fexpr__65080.cljs$core$IFn$_invoke$arity$1(q) : fexpr__65080.call(null,q));
})();
return (emmy.env.mapr.cljs$core$IFn$_invoke$arity$2 ? emmy.env.mapr.cljs$core$IFn$_invoke$arity$2(G__65077,G__65078) : emmy.env.mapr.call(null,G__65077,G__65078));
})();
var gamma = (function (b,c,a){
return fdg.slow_checks.transformed_coefficient(old_symbols,J,J_inverse,dJ,b,c,a);
});
var G__65086 = (function (){var G__65088 = (function (){var G__65090 = gamma((0),(0),(0));
var G__65091 = gamma((0),(0),(1));
return (emmy.env.up.cljs$core$IFn$_invoke$arity$2 ? emmy.env.up.cljs$core$IFn$_invoke$arity$2(G__65090,G__65091) : emmy.env.up.call(null,G__65090,G__65091));
})();
var G__65089 = (function (){var G__65092 = gamma((0),(1),(0));
var G__65093 = gamma((0),(1),(1));
return (emmy.env.up.cljs$core$IFn$_invoke$arity$2 ? emmy.env.up.cljs$core$IFn$_invoke$arity$2(G__65092,G__65093) : emmy.env.up.call(null,G__65092,G__65093));
})();
return (emmy.env.down.cljs$core$IFn$_invoke$arity$2 ? emmy.env.down.cljs$core$IFn$_invoke$arity$2(G__65088,G__65089) : emmy.env.down.call(null,G__65088,G__65089));
})();
var G__65087 = (function (){var G__65094 = (function (){var G__65096 = gamma((1),(0),(0));
var G__65097 = gamma((1),(0),(1));
return (emmy.env.up.cljs$core$IFn$_invoke$arity$2 ? emmy.env.up.cljs$core$IFn$_invoke$arity$2(G__65096,G__65097) : emmy.env.up.call(null,G__65096,G__65097));
})();
var G__65095 = (function (){var G__65098 = gamma((1),(1),(0));
var G__65099 = gamma((1),(1),(1));
return (emmy.env.up.cljs$core$IFn$_invoke$arity$2 ? emmy.env.up.cljs$core$IFn$_invoke$arity$2(G__65098,G__65099) : emmy.env.up.call(null,G__65098,G__65099));
})();
return (emmy.env.down.cljs$core$IFn$_invoke$arity$2 ? emmy.env.down.cljs$core$IFn$_invoke$arity$2(G__65094,G__65095) : emmy.env.down.call(null,G__65094,G__65095));
})();
return (emmy.env.down.cljs$core$IFn$_invoke$arity$2 ? emmy.env.down.cljs$core$IFn$_invoke$arity$2(G__65086,G__65087) : emmy.env.down.call(null,G__65086,G__65087));
});
/**
 * Apply the exact 2D Christoffel coordinate-transformation law, simplifying
 *   each contraction before assembling the next one.
 */
fdg.slow_checks.transform_stereographic_Christoffel_to_spherical = (function fdg$slow_checks$transform_stereographic_Christoffel_to_spherical(stereographic_symbols,spherical_coordinates){
return fdg.slow_checks.transform_symbols(stereographic_symbols,spherical_coordinates);
});

//# sourceMappingURL=fdg.slow_checks.js.map
