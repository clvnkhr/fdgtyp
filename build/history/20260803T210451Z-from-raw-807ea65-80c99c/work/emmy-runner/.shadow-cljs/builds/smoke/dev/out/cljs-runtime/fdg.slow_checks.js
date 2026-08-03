goog.provide('fdg.slow_checks');
fdg.slow_checks.sum2 = (function fdg$slow_checks$sum2(f){
var G__65053 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((0)) : f.call(null,(0)));
var G__65054 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((1)) : f.call(null,(1)));
return (emmy.env._PLUS_.cljs$core$IFn$_invoke$arity$2 ? emmy.env._PLUS_.cljs$core$IFn$_invoke$arity$2(G__65053,G__65054) : emmy.env._PLUS_.call(null,G__65053,G__65054));
});
/**
 * Exact north-pole stereographic coordinates in a native Emmy function.
 */
fdg.slow_checks.spherical__GT_stereographic = (function fdg$slow_checks$spherical__GT_stereographic(p__65055){
var vec__65057 = p__65055;
var theta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65057,(0),null);
var phi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65057,(1),null);
var scale = (function (){var G__65062 = emmy.env.sin.cljs$core$IFn$_invoke$arity$1(theta);
var G__65063 = (function (){var G__65064 = (1);
var G__65065 = emmy.env.cos.cljs$core$IFn$_invoke$arity$1(theta);
return (emmy.env._.cljs$core$IFn$_invoke$arity$2 ? emmy.env._.cljs$core$IFn$_invoke$arity$2(G__65064,G__65065) : emmy.env._.call(null,G__65064,G__65065));
})();
return (emmy.env._SLASH_.cljs$core$IFn$_invoke$arity$2 ? emmy.env._SLASH_.cljs$core$IFn$_invoke$arity$2(G__65062,G__65063) : emmy.env._SLASH_.call(null,G__65062,G__65063));
})();
var G__65066 = (function (){var G__65068 = scale;
var G__65069 = emmy.env.cos.cljs$core$IFn$_invoke$arity$1(phi);
return (emmy.env._STAR_.cljs$core$IFn$_invoke$arity$2 ? emmy.env._STAR_.cljs$core$IFn$_invoke$arity$2(G__65068,G__65069) : emmy.env._STAR_.call(null,G__65068,G__65069));
})();
var G__65067 = (function (){var G__65072 = scale;
var G__65073 = emmy.env.sin.cljs$core$IFn$_invoke$arity$1(phi);
return (emmy.env._STAR_.cljs$core$IFn$_invoke$arity$2 ? emmy.env._STAR_.cljs$core$IFn$_invoke$arity$2(G__65072,G__65073) : emmy.env._STAR_.call(null,G__65072,G__65073));
})();
return (emmy.env.up.cljs$core$IFn$_invoke$arity$2 ? emmy.env.up.cljs$core$IFn$_invoke$arity$2(G__65066,G__65067) : emmy.env.up.call(null,G__65066,G__65067));
});
fdg.slow_checks.old_term = (function fdg$slow_checks$old_term(old_symbols,J,i,b,c){
return emmy.env.simplify.cljs$core$IFn$_invoke$arity$1(fdg.slow_checks.sum2((function (j){
return emmy.env.simplify.cljs$core$IFn$_invoke$arity$1(fdg.slow_checks.sum2((function (k){
return emmy.env.simplify.cljs$core$IFn$_invoke$arity$1((function (){var G__65077 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_symbols,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,k,i], null));
var G__65078 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(J,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,j], null));
var G__65079 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(J,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,k], null));
return (emmy.env._STAR_.cljs$core$IFn$_invoke$arity$3 ? emmy.env._STAR_.cljs$core$IFn$_invoke$arity$3(G__65077,G__65078,G__65079) : emmy.env._STAR_.call(null,G__65077,G__65078,G__65079));
})());
})));
})));
});
fdg.slow_checks.transformed_coefficient = (function fdg$slow_checks$transformed_coefficient(old_symbols,J,J_inverse,dJ,b,c,a){
return emmy.env.simplify.cljs$core$IFn$_invoke$arity$1(fdg.slow_checks.sum2((function (i){
return emmy.env.simplify.cljs$core$IFn$_invoke$arity$1((function (){var G__65086 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(J_inverse,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,a], null));
var G__65087 = emmy.env.simplify.cljs$core$IFn$_invoke$arity$1((function (){var G__65089 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dJ,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c,i], null));
var G__65090 = fdg.slow_checks.old_term(old_symbols,J,i,b,c);
return (emmy.env._PLUS_.cljs$core$IFn$_invoke$arity$2 ? emmy.env._PLUS_.cljs$core$IFn$_invoke$arity$2(G__65089,G__65090) : emmy.env._PLUS_.call(null,G__65089,G__65090));
})());
return (emmy.env._STAR_.cljs$core$IFn$_invoke$arity$2 ? emmy.env._STAR_.cljs$core$IFn$_invoke$arity$2(G__65086,G__65087) : emmy.env._STAR_.call(null,G__65086,G__65087));
})());
})));
});
fdg.slow_checks.transform_symbols = (function fdg$slow_checks$transform_symbols(old_symbols,q){
var J = (function (){var G__65091 = emmy.env.simplify;
var G__65092 = (function (){var fexpr__65093 = (emmy.env.D.cljs$core$IFn$_invoke$arity$1 ? emmy.env.D.cljs$core$IFn$_invoke$arity$1(fdg.slow_checks.spherical__GT_stereographic) : emmy.env.D.call(null,fdg.slow_checks.spherical__GT_stereographic));
return (fexpr__65093.cljs$core$IFn$_invoke$arity$1 ? fexpr__65093.cljs$core$IFn$_invoke$arity$1(q) : fexpr__65093.call(null,q));
})();
return (emmy.env.mapr.cljs$core$IFn$_invoke$arity$2 ? emmy.env.mapr.cljs$core$IFn$_invoke$arity$2(G__65091,G__65092) : emmy.env.mapr.call(null,G__65091,G__65092));
})();
var J_inverse = (function (){var G__65094 = emmy.env.simplify;
var G__65095 = emmy.env.invert.cljs$core$IFn$_invoke$arity$1(J);
return (emmy.env.mapr.cljs$core$IFn$_invoke$arity$2 ? emmy.env.mapr.cljs$core$IFn$_invoke$arity$2(G__65094,G__65095) : emmy.env.mapr.call(null,G__65094,G__65095));
})();
var dJ = (function (){var G__65096 = emmy.env.simplify;
var G__65097 = (function (){var fexpr__65100 = (function (){var G__65102 = (emmy.env.D.cljs$core$IFn$_invoke$arity$1 ? emmy.env.D.cljs$core$IFn$_invoke$arity$1(fdg.slow_checks.spherical__GT_stereographic) : emmy.env.D.call(null,fdg.slow_checks.spherical__GT_stereographic));
return (emmy.env.D.cljs$core$IFn$_invoke$arity$1 ? emmy.env.D.cljs$core$IFn$_invoke$arity$1(G__65102) : emmy.env.D.call(null,G__65102));
})();
return (fexpr__65100.cljs$core$IFn$_invoke$arity$1 ? fexpr__65100.cljs$core$IFn$_invoke$arity$1(q) : fexpr__65100.call(null,q));
})();
return (emmy.env.mapr.cljs$core$IFn$_invoke$arity$2 ? emmy.env.mapr.cljs$core$IFn$_invoke$arity$2(G__65096,G__65097) : emmy.env.mapr.call(null,G__65096,G__65097));
})();
var gamma = (function (b,c,a){
return fdg.slow_checks.transformed_coefficient(old_symbols,J,J_inverse,dJ,b,c,a);
});
var G__65105 = (function (){var G__65107 = (function (){var G__65109 = gamma((0),(0),(0));
var G__65110 = gamma((0),(0),(1));
return (emmy.env.up.cljs$core$IFn$_invoke$arity$2 ? emmy.env.up.cljs$core$IFn$_invoke$arity$2(G__65109,G__65110) : emmy.env.up.call(null,G__65109,G__65110));
})();
var G__65108 = (function (){var G__65111 = gamma((0),(1),(0));
var G__65112 = gamma((0),(1),(1));
return (emmy.env.up.cljs$core$IFn$_invoke$arity$2 ? emmy.env.up.cljs$core$IFn$_invoke$arity$2(G__65111,G__65112) : emmy.env.up.call(null,G__65111,G__65112));
})();
return (emmy.env.down.cljs$core$IFn$_invoke$arity$2 ? emmy.env.down.cljs$core$IFn$_invoke$arity$2(G__65107,G__65108) : emmy.env.down.call(null,G__65107,G__65108));
})();
var G__65106 = (function (){var G__65113 = (function (){var G__65115 = gamma((1),(0),(0));
var G__65116 = gamma((1),(0),(1));
return (emmy.env.up.cljs$core$IFn$_invoke$arity$2 ? emmy.env.up.cljs$core$IFn$_invoke$arity$2(G__65115,G__65116) : emmy.env.up.call(null,G__65115,G__65116));
})();
var G__65114 = (function (){var G__65117 = gamma((1),(1),(0));
var G__65118 = gamma((1),(1),(1));
return (emmy.env.up.cljs$core$IFn$_invoke$arity$2 ? emmy.env.up.cljs$core$IFn$_invoke$arity$2(G__65117,G__65118) : emmy.env.up.call(null,G__65117,G__65118));
})();
return (emmy.env.down.cljs$core$IFn$_invoke$arity$2 ? emmy.env.down.cljs$core$IFn$_invoke$arity$2(G__65113,G__65114) : emmy.env.down.call(null,G__65113,G__65114));
})();
return (emmy.env.down.cljs$core$IFn$_invoke$arity$2 ? emmy.env.down.cljs$core$IFn$_invoke$arity$2(G__65105,G__65106) : emmy.env.down.call(null,G__65105,G__65106));
});
/**
 * Apply the exact 2D Christoffel coordinate-transformation law, simplifying
 *   each contraction before assembling the next one.
 */
fdg.slow_checks.transform_stereographic_Christoffel_to_spherical = (function fdg$slow_checks$transform_stereographic_Christoffel_to_spherical(stereographic_symbols,spherical_coordinates){
return fdg.slow_checks.transform_symbols(stereographic_symbols,spherical_coordinates);
});

//# sourceMappingURL=fdg.slow_checks.js.map
