goog.provide('fdg.slow_checks');
fdg.slow_checks.sum2 = (function fdg$slow_checks$sum2(f){
var G__65056 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((0)) : f.call(null,(0)));
var G__65057 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((1)) : f.call(null,(1)));
return (emmy.env._PLUS_.cljs$core$IFn$_invoke$arity$2 ? emmy.env._PLUS_.cljs$core$IFn$_invoke$arity$2(G__65056,G__65057) : emmy.env._PLUS_.call(null,G__65056,G__65057));
});
/**
 * Exact north-pole stereographic coordinates in a native Emmy function.
 */
fdg.slow_checks.spherical__GT_stereographic = (function fdg$slow_checks$spherical__GT_stereographic(p__65061){
var vec__65062 = p__65061;
var theta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65062,(0),null);
var phi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65062,(1),null);
var scale = (function (){var G__65065 = emmy.env.sin.cljs$core$IFn$_invoke$arity$1(theta);
var G__65066 = (function (){var G__65067 = (1);
var G__65068 = emmy.env.cos.cljs$core$IFn$_invoke$arity$1(theta);
return (emmy.env._.cljs$core$IFn$_invoke$arity$2 ? emmy.env._.cljs$core$IFn$_invoke$arity$2(G__65067,G__65068) : emmy.env._.call(null,G__65067,G__65068));
})();
return (emmy.env._SLASH_.cljs$core$IFn$_invoke$arity$2 ? emmy.env._SLASH_.cljs$core$IFn$_invoke$arity$2(G__65065,G__65066) : emmy.env._SLASH_.call(null,G__65065,G__65066));
})();
var G__65069 = (function (){var G__65071 = scale;
var G__65072 = emmy.env.cos.cljs$core$IFn$_invoke$arity$1(phi);
return (emmy.env._STAR_.cljs$core$IFn$_invoke$arity$2 ? emmy.env._STAR_.cljs$core$IFn$_invoke$arity$2(G__65071,G__65072) : emmy.env._STAR_.call(null,G__65071,G__65072));
})();
var G__65070 = (function (){var G__65073 = scale;
var G__65074 = emmy.env.sin.cljs$core$IFn$_invoke$arity$1(phi);
return (emmy.env._STAR_.cljs$core$IFn$_invoke$arity$2 ? emmy.env._STAR_.cljs$core$IFn$_invoke$arity$2(G__65073,G__65074) : emmy.env._STAR_.call(null,G__65073,G__65074));
})();
return (emmy.env.up.cljs$core$IFn$_invoke$arity$2 ? emmy.env.up.cljs$core$IFn$_invoke$arity$2(G__65069,G__65070) : emmy.env.up.call(null,G__65069,G__65070));
});
fdg.slow_checks.old_term = (function fdg$slow_checks$old_term(old_symbols,J,i,b,c){
return emmy.env.simplify.cljs$core$IFn$_invoke$arity$1(fdg.slow_checks.sum2((function (j){
return emmy.env.simplify.cljs$core$IFn$_invoke$arity$1(fdg.slow_checks.sum2((function (k){
return emmy.env.simplify.cljs$core$IFn$_invoke$arity$1((function (){var G__65075 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_symbols,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,k,i], null));
var G__65076 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(J,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,j], null));
var G__65077 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(J,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,k], null));
return (emmy.env._STAR_.cljs$core$IFn$_invoke$arity$3 ? emmy.env._STAR_.cljs$core$IFn$_invoke$arity$3(G__65075,G__65076,G__65077) : emmy.env._STAR_.call(null,G__65075,G__65076,G__65077));
})());
})));
})));
});
fdg.slow_checks.transformed_coefficient = (function fdg$slow_checks$transformed_coefficient(old_symbols,J,J_inverse,dJ,b,c,a){
return emmy.env.simplify.cljs$core$IFn$_invoke$arity$1(fdg.slow_checks.sum2((function (i){
return emmy.env.simplify.cljs$core$IFn$_invoke$arity$1((function (){var G__65081 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(J_inverse,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,a], null));
var G__65082 = emmy.env.simplify.cljs$core$IFn$_invoke$arity$1((function (){var G__65083 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dJ,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c,i], null));
var G__65084 = fdg.slow_checks.old_term(old_symbols,J,i,b,c);
return (emmy.env._PLUS_.cljs$core$IFn$_invoke$arity$2 ? emmy.env._PLUS_.cljs$core$IFn$_invoke$arity$2(G__65083,G__65084) : emmy.env._PLUS_.call(null,G__65083,G__65084));
})());
return (emmy.env._STAR_.cljs$core$IFn$_invoke$arity$2 ? emmy.env._STAR_.cljs$core$IFn$_invoke$arity$2(G__65081,G__65082) : emmy.env._STAR_.call(null,G__65081,G__65082));
})());
})));
});
fdg.slow_checks.transform_symbols = (function fdg$slow_checks$transform_symbols(old_symbols,q){
var J = (function (){var G__65085 = emmy.env.simplify;
var G__65086 = (function (){var fexpr__65087 = (emmy.env.D.cljs$core$IFn$_invoke$arity$1 ? emmy.env.D.cljs$core$IFn$_invoke$arity$1(fdg.slow_checks.spherical__GT_stereographic) : emmy.env.D.call(null,fdg.slow_checks.spherical__GT_stereographic));
return (fexpr__65087.cljs$core$IFn$_invoke$arity$1 ? fexpr__65087.cljs$core$IFn$_invoke$arity$1(q) : fexpr__65087.call(null,q));
})();
return (emmy.env.mapr.cljs$core$IFn$_invoke$arity$2 ? emmy.env.mapr.cljs$core$IFn$_invoke$arity$2(G__65085,G__65086) : emmy.env.mapr.call(null,G__65085,G__65086));
})();
var J_inverse = (function (){var G__65088 = emmy.env.simplify;
var G__65089 = emmy.env.invert.cljs$core$IFn$_invoke$arity$1(J);
return (emmy.env.mapr.cljs$core$IFn$_invoke$arity$2 ? emmy.env.mapr.cljs$core$IFn$_invoke$arity$2(G__65088,G__65089) : emmy.env.mapr.call(null,G__65088,G__65089));
})();
var dJ = (function (){var G__65090 = emmy.env.simplify;
var G__65091 = (function (){var fexpr__65093 = (function (){var G__65094 = (emmy.env.D.cljs$core$IFn$_invoke$arity$1 ? emmy.env.D.cljs$core$IFn$_invoke$arity$1(fdg.slow_checks.spherical__GT_stereographic) : emmy.env.D.call(null,fdg.slow_checks.spherical__GT_stereographic));
return (emmy.env.D.cljs$core$IFn$_invoke$arity$1 ? emmy.env.D.cljs$core$IFn$_invoke$arity$1(G__65094) : emmy.env.D.call(null,G__65094));
})();
return (fexpr__65093.cljs$core$IFn$_invoke$arity$1 ? fexpr__65093.cljs$core$IFn$_invoke$arity$1(q) : fexpr__65093.call(null,q));
})();
return (emmy.env.mapr.cljs$core$IFn$_invoke$arity$2 ? emmy.env.mapr.cljs$core$IFn$_invoke$arity$2(G__65090,G__65091) : emmy.env.mapr.call(null,G__65090,G__65091));
})();
var gamma = (function (b,c,a){
return fdg.slow_checks.transformed_coefficient(old_symbols,J,J_inverse,dJ,b,c,a);
});
var G__65095 = (function (){var G__65097 = (function (){var G__65099 = gamma((0),(0),(0));
var G__65100 = gamma((0),(0),(1));
return (emmy.env.up.cljs$core$IFn$_invoke$arity$2 ? emmy.env.up.cljs$core$IFn$_invoke$arity$2(G__65099,G__65100) : emmy.env.up.call(null,G__65099,G__65100));
})();
var G__65098 = (function (){var G__65101 = gamma((0),(1),(0));
var G__65102 = gamma((0),(1),(1));
return (emmy.env.up.cljs$core$IFn$_invoke$arity$2 ? emmy.env.up.cljs$core$IFn$_invoke$arity$2(G__65101,G__65102) : emmy.env.up.call(null,G__65101,G__65102));
})();
return (emmy.env.down.cljs$core$IFn$_invoke$arity$2 ? emmy.env.down.cljs$core$IFn$_invoke$arity$2(G__65097,G__65098) : emmy.env.down.call(null,G__65097,G__65098));
})();
var G__65096 = (function (){var G__65103 = (function (){var G__65105 = gamma((1),(0),(0));
var G__65106 = gamma((1),(0),(1));
return (emmy.env.up.cljs$core$IFn$_invoke$arity$2 ? emmy.env.up.cljs$core$IFn$_invoke$arity$2(G__65105,G__65106) : emmy.env.up.call(null,G__65105,G__65106));
})();
var G__65104 = (function (){var G__65107 = gamma((1),(1),(0));
var G__65108 = gamma((1),(1),(1));
return (emmy.env.up.cljs$core$IFn$_invoke$arity$2 ? emmy.env.up.cljs$core$IFn$_invoke$arity$2(G__65107,G__65108) : emmy.env.up.call(null,G__65107,G__65108));
})();
return (emmy.env.down.cljs$core$IFn$_invoke$arity$2 ? emmy.env.down.cljs$core$IFn$_invoke$arity$2(G__65103,G__65104) : emmy.env.down.call(null,G__65103,G__65104));
})();
return (emmy.env.down.cljs$core$IFn$_invoke$arity$2 ? emmy.env.down.cljs$core$IFn$_invoke$arity$2(G__65095,G__65096) : emmy.env.down.call(null,G__65095,G__65096));
});
/**
 * Apply the exact 2D Christoffel coordinate-transformation law, simplifying
 *   each contraction before assembling the next one.
 */
fdg.slow_checks.transform_stereographic_Christoffel_to_spherical = (function fdg$slow_checks$transform_stereographic_Christoffel_to_spherical(stereographic_symbols,spherical_coordinates){
return fdg.slow_checks.transform_symbols(stereographic_symbols,spherical_coordinates);
});

//# sourceMappingURL=fdg.slow_checks.js.map
