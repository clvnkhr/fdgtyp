import "./cljs_env.js";
import "./cljs.core.js";
import "./emmy.env.js";
goog.provide('fdg.slow_checks');
fdg.slow_checks.sum2 = (function fdg$slow_checks$sum2(f){
var G__78687 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((0)) : f.call(null,(0)));
var G__78688 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((1)) : f.call(null,(1)));
return (emmy.env._PLUS_.cljs$core$IFn$_invoke$arity$2 ? emmy.env._PLUS_.cljs$core$IFn$_invoke$arity$2(G__78687,G__78688) : emmy.env._PLUS_.call(null,G__78687,G__78688));
});
/**
 * Exact north-pole stereographic coordinates in a native Emmy function.
 */
fdg.slow_checks.spherical__GT_stereographic = (function fdg$slow_checks$spherical__GT_stereographic(p__78689){
var vec__78690 = p__78689;
var theta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78690,(0),null);
var phi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78690,(1),null);
var scale = (function (){var G__78693 = emmy.env.sin.cljs$core$IFn$_invoke$arity$1(theta);
var G__78694 = (function (){var G__78695 = (1);
var G__78696 = emmy.env.cos.cljs$core$IFn$_invoke$arity$1(theta);
return (emmy.env._.cljs$core$IFn$_invoke$arity$2 ? emmy.env._.cljs$core$IFn$_invoke$arity$2(G__78695,G__78696) : emmy.env._.call(null,G__78695,G__78696));
})();
return (emmy.env._SLASH_.cljs$core$IFn$_invoke$arity$2 ? emmy.env._SLASH_.cljs$core$IFn$_invoke$arity$2(G__78693,G__78694) : emmy.env._SLASH_.call(null,G__78693,G__78694));
})();
var G__78697 = (function (){var G__78699 = scale;
var G__78700 = emmy.env.cos.cljs$core$IFn$_invoke$arity$1(phi);
return (emmy.env._STAR_.cljs$core$IFn$_invoke$arity$2 ? emmy.env._STAR_.cljs$core$IFn$_invoke$arity$2(G__78699,G__78700) : emmy.env._STAR_.call(null,G__78699,G__78700));
})();
var G__78698 = (function (){var G__78701 = scale;
var G__78702 = emmy.env.sin.cljs$core$IFn$_invoke$arity$1(phi);
return (emmy.env._STAR_.cljs$core$IFn$_invoke$arity$2 ? emmy.env._STAR_.cljs$core$IFn$_invoke$arity$2(G__78701,G__78702) : emmy.env._STAR_.call(null,G__78701,G__78702));
})();
return (emmy.env.up.cljs$core$IFn$_invoke$arity$2 ? emmy.env.up.cljs$core$IFn$_invoke$arity$2(G__78697,G__78698) : emmy.env.up.call(null,G__78697,G__78698));
});
fdg.slow_checks.old_term = (function fdg$slow_checks$old_term(old_symbols,J,i,b,c){
return emmy.env.simplify.cljs$core$IFn$_invoke$arity$1(fdg.slow_checks.sum2((function (j){
return emmy.env.simplify.cljs$core$IFn$_invoke$arity$1(fdg.slow_checks.sum2((function (k){
return emmy.env.simplify.cljs$core$IFn$_invoke$arity$1((function (){var G__78703 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_symbols,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,k,i], null));
var G__78704 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(J,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,j], null));
var G__78705 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(J,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,k], null));
return (emmy.env._STAR_.cljs$core$IFn$_invoke$arity$3 ? emmy.env._STAR_.cljs$core$IFn$_invoke$arity$3(G__78703,G__78704,G__78705) : emmy.env._STAR_.call(null,G__78703,G__78704,G__78705));
})());
})));
})));
});
fdg.slow_checks.transformed_coefficient = (function fdg$slow_checks$transformed_coefficient(old_symbols,J,J_inverse,dJ,b,c,a){
return emmy.env.simplify.cljs$core$IFn$_invoke$arity$1(fdg.slow_checks.sum2((function (i){
return emmy.env.simplify.cljs$core$IFn$_invoke$arity$1((function (){var G__78708 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(J_inverse,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,a], null));
var G__78709 = emmy.env.simplify.cljs$core$IFn$_invoke$arity$1((function (){var G__78711 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dJ,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c,i], null));
var G__78712 = fdg.slow_checks.old_term(old_symbols,J,i,b,c);
return (emmy.env._PLUS_.cljs$core$IFn$_invoke$arity$2 ? emmy.env._PLUS_.cljs$core$IFn$_invoke$arity$2(G__78711,G__78712) : emmy.env._PLUS_.call(null,G__78711,G__78712));
})());
return (emmy.env._STAR_.cljs$core$IFn$_invoke$arity$2 ? emmy.env._STAR_.cljs$core$IFn$_invoke$arity$2(G__78708,G__78709) : emmy.env._STAR_.call(null,G__78708,G__78709));
})());
})));
});
fdg.slow_checks.transform_symbols = (function fdg$slow_checks$transform_symbols(old_symbols,q){
var J = (function (){var G__78723 = emmy.env.simplify;
var G__78724 = (function (){var fexpr__78728 = (emmy.env.D.cljs$core$IFn$_invoke$arity$1 ? emmy.env.D.cljs$core$IFn$_invoke$arity$1(fdg.slow_checks.spherical__GT_stereographic) : emmy.env.D.call(null,fdg.slow_checks.spherical__GT_stereographic));
return (fexpr__78728.cljs$core$IFn$_invoke$arity$1 ? fexpr__78728.cljs$core$IFn$_invoke$arity$1(q) : fexpr__78728.call(null,q));
})();
return (emmy.env.mapr.cljs$core$IFn$_invoke$arity$2 ? emmy.env.mapr.cljs$core$IFn$_invoke$arity$2(G__78723,G__78724) : emmy.env.mapr.call(null,G__78723,G__78724));
})();
var J_inverse = (function (){var G__78731 = emmy.env.simplify;
var G__78732 = emmy.env.invert.cljs$core$IFn$_invoke$arity$1(J);
return (emmy.env.mapr.cljs$core$IFn$_invoke$arity$2 ? emmy.env.mapr.cljs$core$IFn$_invoke$arity$2(G__78731,G__78732) : emmy.env.mapr.call(null,G__78731,G__78732));
})();
var dJ = (function (){var G__78734 = emmy.env.simplify;
var G__78735 = (function (){var fexpr__78737 = (function (){var G__78738 = (emmy.env.D.cljs$core$IFn$_invoke$arity$1 ? emmy.env.D.cljs$core$IFn$_invoke$arity$1(fdg.slow_checks.spherical__GT_stereographic) : emmy.env.D.call(null,fdg.slow_checks.spherical__GT_stereographic));
return (emmy.env.D.cljs$core$IFn$_invoke$arity$1 ? emmy.env.D.cljs$core$IFn$_invoke$arity$1(G__78738) : emmy.env.D.call(null,G__78738));
})();
return (fexpr__78737.cljs$core$IFn$_invoke$arity$1 ? fexpr__78737.cljs$core$IFn$_invoke$arity$1(q) : fexpr__78737.call(null,q));
})();
return (emmy.env.mapr.cljs$core$IFn$_invoke$arity$2 ? emmy.env.mapr.cljs$core$IFn$_invoke$arity$2(G__78734,G__78735) : emmy.env.mapr.call(null,G__78734,G__78735));
})();
var gamma = (function (b,c,a){
return fdg.slow_checks.transformed_coefficient(old_symbols,J,J_inverse,dJ,b,c,a);
});
var G__78739 = (function (){var G__78741 = (function (){var G__78743 = gamma((0),(0),(0));
var G__78744 = gamma((0),(0),(1));
return (emmy.env.up.cljs$core$IFn$_invoke$arity$2 ? emmy.env.up.cljs$core$IFn$_invoke$arity$2(G__78743,G__78744) : emmy.env.up.call(null,G__78743,G__78744));
})();
var G__78742 = (function (){var G__78745 = gamma((0),(1),(0));
var G__78746 = gamma((0),(1),(1));
return (emmy.env.up.cljs$core$IFn$_invoke$arity$2 ? emmy.env.up.cljs$core$IFn$_invoke$arity$2(G__78745,G__78746) : emmy.env.up.call(null,G__78745,G__78746));
})();
return (emmy.env.down.cljs$core$IFn$_invoke$arity$2 ? emmy.env.down.cljs$core$IFn$_invoke$arity$2(G__78741,G__78742) : emmy.env.down.call(null,G__78741,G__78742));
})();
var G__78740 = (function (){var G__78747 = (function (){var G__78749 = gamma((1),(0),(0));
var G__78750 = gamma((1),(0),(1));
return (emmy.env.up.cljs$core$IFn$_invoke$arity$2 ? emmy.env.up.cljs$core$IFn$_invoke$arity$2(G__78749,G__78750) : emmy.env.up.call(null,G__78749,G__78750));
})();
var G__78748 = (function (){var G__78751 = gamma((1),(1),(0));
var G__78752 = gamma((1),(1),(1));
return (emmy.env.up.cljs$core$IFn$_invoke$arity$2 ? emmy.env.up.cljs$core$IFn$_invoke$arity$2(G__78751,G__78752) : emmy.env.up.call(null,G__78751,G__78752));
})();
return (emmy.env.down.cljs$core$IFn$_invoke$arity$2 ? emmy.env.down.cljs$core$IFn$_invoke$arity$2(G__78747,G__78748) : emmy.env.down.call(null,G__78747,G__78748));
})();
return (emmy.env.down.cljs$core$IFn$_invoke$arity$2 ? emmy.env.down.cljs$core$IFn$_invoke$arity$2(G__78739,G__78740) : emmy.env.down.call(null,G__78739,G__78740));
});
/**
 * Apply the exact 2D Christoffel coordinate-transformation law, simplifying
 *   each contraction before assembling the next one.
 */
fdg.slow_checks.transform_stereographic_Christoffel_to_spherical = (function fdg$slow_checks$transform_stereographic_Christoffel_to_spherical(stereographic_symbols,spherical_coordinates){
return fdg.slow_checks.transform_symbols(stereographic_symbols,spherical_coordinates);
});

//# sourceMappingURL=fdg.slow_checks.js.map
