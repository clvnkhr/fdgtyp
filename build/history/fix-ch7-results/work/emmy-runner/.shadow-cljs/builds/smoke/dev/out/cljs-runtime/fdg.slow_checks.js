goog.provide('fdg.slow_checks');
fdg.slow_checks.sum2 = (function fdg$slow_checks$sum2(f){
var G__65073 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((0)) : f.call(null,(0)));
var G__65074 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((1)) : f.call(null,(1)));
return (emmy.env._PLUS_.cljs$core$IFn$_invoke$arity$2 ? emmy.env._PLUS_.cljs$core$IFn$_invoke$arity$2(G__65073,G__65074) : emmy.env._PLUS_.call(null,G__65073,G__65074));
});
/**
 * Exact north-pole stereographic coordinates in a native Emmy function.
 */
fdg.slow_checks.spherical__GT_stereographic = (function fdg$slow_checks$spherical__GT_stereographic(p__65075){
var vec__65076 = p__65075;
var theta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65076,(0),null);
var phi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65076,(1),null);
var scale = (function (){var G__65079 = emmy.env.sin.cljs$core$IFn$_invoke$arity$1(theta);
var G__65080 = (function (){var G__65081 = (1);
var G__65082 = emmy.env.cos.cljs$core$IFn$_invoke$arity$1(theta);
return (emmy.env._.cljs$core$IFn$_invoke$arity$2 ? emmy.env._.cljs$core$IFn$_invoke$arity$2(G__65081,G__65082) : emmy.env._.call(null,G__65081,G__65082));
})();
return (emmy.env._SLASH_.cljs$core$IFn$_invoke$arity$2 ? emmy.env._SLASH_.cljs$core$IFn$_invoke$arity$2(G__65079,G__65080) : emmy.env._SLASH_.call(null,G__65079,G__65080));
})();
var G__65083 = (function (){var G__65085 = scale;
var G__65086 = emmy.env.cos.cljs$core$IFn$_invoke$arity$1(phi);
return (emmy.env._STAR_.cljs$core$IFn$_invoke$arity$2 ? emmy.env._STAR_.cljs$core$IFn$_invoke$arity$2(G__65085,G__65086) : emmy.env._STAR_.call(null,G__65085,G__65086));
})();
var G__65084 = (function (){var G__65087 = scale;
var G__65088 = emmy.env.sin.cljs$core$IFn$_invoke$arity$1(phi);
return (emmy.env._STAR_.cljs$core$IFn$_invoke$arity$2 ? emmy.env._STAR_.cljs$core$IFn$_invoke$arity$2(G__65087,G__65088) : emmy.env._STAR_.call(null,G__65087,G__65088));
})();
return (emmy.env.up.cljs$core$IFn$_invoke$arity$2 ? emmy.env.up.cljs$core$IFn$_invoke$arity$2(G__65083,G__65084) : emmy.env.up.call(null,G__65083,G__65084));
});
fdg.slow_checks.old_term = (function fdg$slow_checks$old_term(old_symbols,J,i,b,c){
return emmy.env.simplify.cljs$core$IFn$_invoke$arity$1(fdg.slow_checks.sum2((function (j){
return emmy.env.simplify.cljs$core$IFn$_invoke$arity$1(fdg.slow_checks.sum2((function (k){
return emmy.env.simplify.cljs$core$IFn$_invoke$arity$1((function (){var G__65089 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_symbols,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,k,i], null));
var G__65090 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(J,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,j], null));
var G__65091 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(J,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,k], null));
return (emmy.env._STAR_.cljs$core$IFn$_invoke$arity$3 ? emmy.env._STAR_.cljs$core$IFn$_invoke$arity$3(G__65089,G__65090,G__65091) : emmy.env._STAR_.call(null,G__65089,G__65090,G__65091));
})());
})));
})));
});
fdg.slow_checks.transformed_coefficient = (function fdg$slow_checks$transformed_coefficient(old_symbols,J,J_inverse,dJ,b,c,a){
return emmy.env.simplify.cljs$core$IFn$_invoke$arity$1(fdg.slow_checks.sum2((function (i){
return emmy.env.simplify.cljs$core$IFn$_invoke$arity$1((function (){var G__65092 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(J_inverse,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,a], null));
var G__65093 = emmy.env.simplify.cljs$core$IFn$_invoke$arity$1((function (){var G__65094 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dJ,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c,i], null));
var G__65095 = fdg.slow_checks.old_term(old_symbols,J,i,b,c);
return (emmy.env._PLUS_.cljs$core$IFn$_invoke$arity$2 ? emmy.env._PLUS_.cljs$core$IFn$_invoke$arity$2(G__65094,G__65095) : emmy.env._PLUS_.call(null,G__65094,G__65095));
})());
return (emmy.env._STAR_.cljs$core$IFn$_invoke$arity$2 ? emmy.env._STAR_.cljs$core$IFn$_invoke$arity$2(G__65092,G__65093) : emmy.env._STAR_.call(null,G__65092,G__65093));
})());
})));
});
fdg.slow_checks.transform_symbols = (function fdg$slow_checks$transform_symbols(old_symbols,q){
var J = (function (){var G__65096 = emmy.env.simplify;
var G__65097 = (function (){var fexpr__65098 = (emmy.env.D.cljs$core$IFn$_invoke$arity$1 ? emmy.env.D.cljs$core$IFn$_invoke$arity$1(fdg.slow_checks.spherical__GT_stereographic) : emmy.env.D.call(null,fdg.slow_checks.spherical__GT_stereographic));
return (fexpr__65098.cljs$core$IFn$_invoke$arity$1 ? fexpr__65098.cljs$core$IFn$_invoke$arity$1(q) : fexpr__65098.call(null,q));
})();
return (emmy.env.mapr.cljs$core$IFn$_invoke$arity$2 ? emmy.env.mapr.cljs$core$IFn$_invoke$arity$2(G__65096,G__65097) : emmy.env.mapr.call(null,G__65096,G__65097));
})();
var J_inverse = (function (){var G__65099 = emmy.env.simplify;
var G__65100 = emmy.env.invert.cljs$core$IFn$_invoke$arity$1(J);
return (emmy.env.mapr.cljs$core$IFn$_invoke$arity$2 ? emmy.env.mapr.cljs$core$IFn$_invoke$arity$2(G__65099,G__65100) : emmy.env.mapr.call(null,G__65099,G__65100));
})();
var dJ = (function (){var G__65101 = emmy.env.simplify;
var G__65102 = (function (){var fexpr__65104 = (function (){var G__65105 = (emmy.env.D.cljs$core$IFn$_invoke$arity$1 ? emmy.env.D.cljs$core$IFn$_invoke$arity$1(fdg.slow_checks.spherical__GT_stereographic) : emmy.env.D.call(null,fdg.slow_checks.spherical__GT_stereographic));
return (emmy.env.D.cljs$core$IFn$_invoke$arity$1 ? emmy.env.D.cljs$core$IFn$_invoke$arity$1(G__65105) : emmy.env.D.call(null,G__65105));
})();
return (fexpr__65104.cljs$core$IFn$_invoke$arity$1 ? fexpr__65104.cljs$core$IFn$_invoke$arity$1(q) : fexpr__65104.call(null,q));
})();
return (emmy.env.mapr.cljs$core$IFn$_invoke$arity$2 ? emmy.env.mapr.cljs$core$IFn$_invoke$arity$2(G__65101,G__65102) : emmy.env.mapr.call(null,G__65101,G__65102));
})();
var gamma = (function (b,c,a){
return fdg.slow_checks.transformed_coefficient(old_symbols,J,J_inverse,dJ,b,c,a);
});
var G__65106 = (function (){var G__65108 = (function (){var G__65110 = gamma((0),(0),(0));
var G__65111 = gamma((0),(0),(1));
return (emmy.env.up.cljs$core$IFn$_invoke$arity$2 ? emmy.env.up.cljs$core$IFn$_invoke$arity$2(G__65110,G__65111) : emmy.env.up.call(null,G__65110,G__65111));
})();
var G__65109 = (function (){var G__65112 = gamma((0),(1),(0));
var G__65113 = gamma((0),(1),(1));
return (emmy.env.up.cljs$core$IFn$_invoke$arity$2 ? emmy.env.up.cljs$core$IFn$_invoke$arity$2(G__65112,G__65113) : emmy.env.up.call(null,G__65112,G__65113));
})();
return (emmy.env.down.cljs$core$IFn$_invoke$arity$2 ? emmy.env.down.cljs$core$IFn$_invoke$arity$2(G__65108,G__65109) : emmy.env.down.call(null,G__65108,G__65109));
})();
var G__65107 = (function (){var G__65114 = (function (){var G__65116 = gamma((1),(0),(0));
var G__65117 = gamma((1),(0),(1));
return (emmy.env.up.cljs$core$IFn$_invoke$arity$2 ? emmy.env.up.cljs$core$IFn$_invoke$arity$2(G__65116,G__65117) : emmy.env.up.call(null,G__65116,G__65117));
})();
var G__65115 = (function (){var G__65118 = gamma((1),(1),(0));
var G__65119 = gamma((1),(1),(1));
return (emmy.env.up.cljs$core$IFn$_invoke$arity$2 ? emmy.env.up.cljs$core$IFn$_invoke$arity$2(G__65118,G__65119) : emmy.env.up.call(null,G__65118,G__65119));
})();
return (emmy.env.down.cljs$core$IFn$_invoke$arity$2 ? emmy.env.down.cljs$core$IFn$_invoke$arity$2(G__65114,G__65115) : emmy.env.down.call(null,G__65114,G__65115));
})();
return (emmy.env.down.cljs$core$IFn$_invoke$arity$2 ? emmy.env.down.cljs$core$IFn$_invoke$arity$2(G__65106,G__65107) : emmy.env.down.call(null,G__65106,G__65107));
});
/**
 * Apply the exact 2D Christoffel coordinate-transformation law, simplifying
 *   each contraction before assembling the next one.
 */
fdg.slow_checks.transform_stereographic_Christoffel_to_spherical = (function fdg$slow_checks$transform_stereographic_Christoffel_to_spherical(stereographic_symbols,spherical_coordinates){
return fdg.slow_checks.transform_symbols(stereographic_symbols,spherical_coordinates);
});

//# sourceMappingURL=fdg.slow_checks.js.map
