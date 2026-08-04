goog.provide('emmy.calculus.hodge_star');
emmy.calculus.hodge_star.Gram_Schmidt = (function emmy$calculus$hodge_star$Gram_Schmidt(vector_basis,metric){
var make_positive = (function emmy$calculus$hodge_star$Gram_Schmidt_$_make_positive(x){
return emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.generic.square.cljs$core$IFn$_invoke$arity$1(x));
});
var normalize = (function emmy$calculus$hodge_star$Gram_Schmidt_$_normalize(v){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(make_positive((metric.cljs$core$IFn$_invoke$arity$2 ? metric.cljs$core$IFn$_invoke$arity$2(v,v) : metric.call(null,v,v))))),v);
});
var vects = cljs.core.flatten(vector_basis);
var e0 = normalize(cljs.core.first(vects));
var ins = cljs.core.rest(vects);
var outs = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e0], null);
while(true){
if(cljs.core.empty_QMARK_(ins)){
return emmy.structure.down_STAR_(outs);
} else {
var G__48488 = cljs.core.rest(ins);
var G__48489 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(outs,normalize(emmy.generic._.cljs$core$IFn$_invoke$arity$2(cljs.core.first(ins),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(emmy.generic._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ins,outs,vects,e0){
return (function (outv){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var G__48445 = cljs.core.first(ins);
var G__48446 = outv;
return (metric.cljs$core$IFn$_invoke$arity$2 ? metric.cljs$core$IFn$_invoke$arity$2(G__48445,G__48446) : metric.call(null,G__48445,G__48446));
})(),outv);
});})(ins,outs,vects,e0))
,outs)))));
ins = G__48488;
outs = G__48489;
continue;
}
break;
}
});
emmy.calculus.hodge_star.orthonormalize = (function emmy$calculus$hodge_star$orthonormalize(basis,metric,coordinate_system){
var ovb = emmy.calculus.hodge_star.Gram_Schmidt(emmy.calculus.basis.basis__GT_vector_basis(basis),metric);
return emmy.calculus.basis.make_basis(ovb,emmy.calculus.basis.vector_basis__GT_dual(ovb,coordinate_system));
});
/**
 * Returns a new list containing all elements in `l1` not present in `l2`.
 *   Duplicates are allowed in the return value.
 */
emmy.calculus.hodge_star.list_difference = (function emmy$calculus$hodge_star$list_difference(l1,l2){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,l2),l1);
});
/**
 * Takes a `metric` and a `spec` and returns the [Hodge star
 *   operator](https://en.wikipedia.org/wiki/Hodge_star_operator) (actually just a
 *   function, but I suspect this should be a proper operator!)
 * 
 *   `spec` may be:
 * 
 *   - a coordinate system with an orthonormal basis
 *   - an orthonormal basis
 *   - a basis
 * 
 *   if the spec is a basis that needs to be orthonormalized, the optional
 *   `:orthonormalize?` keyword argument must be a coordinate system.
 */
emmy.calculus.hodge_star.Hodge_star = (function emmy$calculus$hodge_star$Hodge_star(var_args){
var args__5903__auto__ = [];
var len__5897__auto___48492 = arguments.length;
var i__5898__auto___48493 = (0);
while(true){
if((i__5898__auto___48493 < len__5897__auto___48492)){
args__5903__auto__.push((arguments[i__5898__auto___48493]));

var G__48498 = (i__5898__auto___48493 + (1));
i__5898__auto___48493 = G__48498;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return emmy.calculus.hodge_star.Hodge_star.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(emmy.calculus.hodge_star.Hodge_star.cljs$core$IFn$_invoke$arity$variadic = (function (metric,spec,p__48461){
var map__48462 = p__48461;
var map__48462__$1 = cljs.core.__destructure_map(map__48462);
var orthonormalize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48462__$1,new cljs.core.Keyword(null,"orthonormalize?","orthonormalize?",-11872752),false);
var basis = ((emmy.calculus.basis.basis_QMARK_(spec))?(cljs.core.truth_(orthonormalize_QMARK_)?emmy.calculus.hodge_star.orthonormalize(spec,metric,orthonormalize_QMARK_):spec):(cljs.core.truth_(orthonormalize_QMARK_)?emmy.calculus.hodge_star.orthonormalize(emmy.calculus.basis.coordinate_system__GT_basis(spec),metric,spec):emmy.calculus.basis.coordinate_system__GT_basis(spec)));
var on_vector_basis = cljs.core.flatten(emmy.calculus.basis.basis__GT_vector_basis(basis));
var on_oneform_basis = cljs.core.flatten(emmy.calculus.basis.basis__GT_oneform_basis(basis));
var basis_check = emmy.matrix.by_rows_STAR_(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ei){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ej){
return (metric.cljs$core$IFn$_invoke$arity$2 ? metric.cljs$core$IFn$_invoke$arity$2(ei,ej) : metric.call(null,ei,ej));
}),on_vector_basis);
}),on_vector_basis));
var bsigns = emmy.matrix.diagonal(basis_check);
return (function emmy$calculus$hodge_star$the_star(pform_field){
if(((emmy.function$.function_QMARK_(pform_field)) || (emmy.calculus.form_field.form_field_QMARK_(pform_field)))){
} else {
throw (new Error("Assert failed: (or (f/function? pform-field) (ff/form-field? pform-field))"));
}

var p = emmy.calculus.form_field.get_rank(pform_field);
if((p === (0))){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(pform_field,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(emmy.calculus.form_field.wedge,on_oneform_basis));
} else {
var pvect_basis_lists = emmy.util.permute.combinations(on_vector_basis,p);
var coeffs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (pvect){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pform_field,pvect);
}),pvect_basis_lists);
var pform_basis_lists = emmy.util.permute.combinations(on_oneform_basis,p);
var n_p_COLON_form_basis_lists = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (onefbl){
return emmy.calculus.hodge_star.list_difference(on_oneform_basis,onefbl);
}),pform_basis_lists);
var n_p_COLON_basis = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n_p_COLON_basis_list){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(emmy.calculus.form_field.wedge,n_p_COLON_basis_list);
}),n_p_COLON_form_basis_lists);
var signs = cljs.core.map.cljs$core$IFn$_invoke$arity$4((function (bsign_list,p_COLON_basis_list,n_p_COLON_basis_list){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_,bsign_list),emmy.util.permute.permutation_parity.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p_COLON_basis_list,n_p_COLON_basis_list),on_oneform_basis));
}),emmy.util.permute.combinations(bsigns,p),pform_basis_lists,n_p_COLON_form_basis_lists);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(emmy.generic._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$4(emmy.generic._STAR_,signs,coeffs,n_p_COLON_basis));
}
});
}));

(emmy.calculus.hodge_star.Hodge_star.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(emmy.calculus.hodge_star.Hodge_star.cljs$lang$applyTo = (function (seq48457){
var G__48458 = cljs.core.first(seq48457);
var seq48457__$1 = cljs.core.next(seq48457);
var G__48459 = cljs.core.first(seq48457__$1);
var seq48457__$2 = cljs.core.next(seq48457__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48458,G__48459,seq48457__$2);
}));


//# sourceMappingURL=emmy.calculus.hodge_star.js.map
