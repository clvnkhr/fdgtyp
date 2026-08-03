goog.provide('emmy.calculus.vector_field');
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("emmy.calculus.vector-field","vector-field","emmy.calculus.vector-field/vector-field",739612763),new cljs.core.Keyword("emmy.operator","operator","emmy.operator/operator",1412891316));

/**
 * Returns true if the supplied argument `vf` is a vector field operator, false
 *   otherwise.
 */
emmy.calculus.vector_field.vector_field_QMARK_ = (function emmy$calculus$vector_field$vector_field_QMARK_(vf){
return ((emmy.operator.operator_QMARK_(vf)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"subtype","subtype",-2092672993).cljs$core$IFn$_invoke$arity$1(emmy.operator.context(vf)),new cljs.core.Keyword("emmy.calculus.vector-field","vector-field","emmy.calculus.vector-field/vector-field",739612763))));
});
/**
 * Accepts a function `f` and an optional symbolic `name`, and returns a vector
 *   field, i.e., a subtype of [[emmy.operator/Operator]].
 * 
 *   `f` should be a function from a smooth real-valued function `g` of a manifold
 *   to a new function on the manifold which computes the directional derivative of
 *   `g` at each point of the manifold.
 */
emmy.calculus.vector_field.procedure__GT_vector_field = (function emmy$calculus$vector_field$procedure__GT_vector_field(var_args){
var G__47361 = arguments.length;
switch (G__47361) {
case 1:
return emmy.calculus.vector_field.procedure__GT_vector_field.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.calculus.vector_field.procedure__GT_vector_field.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.calculus.vector_field.procedure__GT_vector_field.cljs$core$IFn$_invoke$arity$1 = (function (f){
return emmy.calculus.vector_field.procedure__GT_vector_field.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.Symbol(null,"unnamed-vector-field","unnamed-vector-field",293891395,null));
}));

(emmy.calculus.vector_field.procedure__GT_vector_field.cljs$core$IFn$_invoke$arity$2 = (function (f,name){
var context = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"subtype","subtype",-2092672993),new cljs.core.Keyword("emmy.calculus.vector-field","vector-field","emmy.calculus.vector-field/vector-field",739612763),new cljs.core.Keyword(null,"zero?","zero?",-1314772630),emmy.calculus.vector_field.vf_COLON_zero_QMARK_,new cljs.core.Keyword(null,"zero-like","zero-like",1759410522),emmy.calculus.vector_field.vf_COLON_zero_like,new cljs.core.Keyword(null,"arguments","arguments",-1182834456),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","function","emmy.value/function",-1238426744)], null)], null);
return emmy.operator.make_operator.cljs$core$IFn$_invoke$arity$3(f,name,context);
}));

(emmy.calculus.vector_field.procedure__GT_vector_field.cljs$lang$maxFixedArity = 2);

/**
 * Takes:
 * 
 *   - an `up` tuple, `components`, of the functions that each return the
 *  corresponding component of the vector field relative to `coordinate-system`
 *   - the `coordinate-system`
 * 
 *   And returns a procedure (not yet an operator!) that takes a smooth real-valued
 *   function of manifold points and produces a NEW function that computes the
 *   directional derivative of the given function at each point of the manifold.
 */
emmy.calculus.vector_field.vector_field_procedure = (function emmy$calculus$vector_field$vector_field_procedure(component_fns,coordinate_system){
return (function (f){
return emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var G__47365 = emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f,emmy.calculus.manifold.point(coordinate_system)], 0));
return (emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(G__47365) : emmy.calculus.derivative.D.call(null,G__47365));
})(),component_fns),emmy.calculus.manifold.chart(coordinate_system)], 0));
});
});
/**
 * Takes:
 * 
 *   - an `up` tuple of the functions that each return the corresponding component
 *   of the vector field relative `coordinate-system`
 *   - the `coordinate-system`
 *   - optionally, a symbolic name for the vector field operator
 * 
 *   And returns a vector field.
 * 
 *   A vector field is an operator that takes a smooth real-valued function of
 *   manifold points and produces a NEW function that computes the directional
 *   derivative of the given function at each point of the manifold.
 */
emmy.calculus.vector_field.components__GT_vector_field = (function emmy$calculus$vector_field$components__GT_vector_field(var_args){
var G__47367 = arguments.length;
switch (G__47367) {
case 2:
return emmy.calculus.vector_field.components__GT_vector_field.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return emmy.calculus.vector_field.components__GT_vector_field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.calculus.vector_field.components__GT_vector_field.cljs$core$IFn$_invoke$arity$2 = (function (components,coordinate_system){
var name = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"vector-field","vector-field",1291054264,null),null,(1),null)),(new cljs.core.List(null,components,null,(1),null)))));
return emmy.calculus.vector_field.components__GT_vector_field.cljs$core$IFn$_invoke$arity$3(components,coordinate_system,name);
}));

(emmy.calculus.vector_field.components__GT_vector_field.cljs$core$IFn$_invoke$arity$3 = (function (components,coordinate_system,name){
var vfp = emmy.calculus.vector_field.vector_field_procedure(components,coordinate_system);
return emmy.calculus.vector_field.procedure__GT_vector_field.cljs$core$IFn$_invoke$arity$2(emmy.function$.memoize(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(emmy.function$.memoize,vfp)),name);
}));

(emmy.calculus.vector_field.components__GT_vector_field.cljs$lang$maxFixedArity = 3);

/**
 * Given a vector field `vf` and a `coordinate-system`, returns a function from
 *   the coordinate representation of a manifold point to a coordinate
 *   representation of the coordinatized components of the vector field at that
 *   point.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (let-coordinates [[x y] R2-rect]
 *  (let [f (literal-vector-field 'f R2-rect)]
 *      ((vector-field->components f R2-rect)
 *       (up 'x0 'y0))))
 * 
 *   ;;=> (up (f↑0 (up x0 y0))
 *   ;;       (f↑1 (up x0 y0)))
 *   ```
 */
emmy.calculus.vector_field.vector_field__GT_components = (function emmy$calculus$vector_field$vector_field__GT_components(vf,coordinate_system){
if(emmy.calculus.vector_field.vector_field_QMARK_(vf)){
} else {
throw (new Error("Assert failed: (vector-field? vf)"));
}

return emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__47368 = emmy.calculus.manifold.chart(coordinate_system);
return (vf.cljs$core$IFn$_invoke$arity$1 ? vf.cljs$core$IFn$_invoke$arity$1(G__47368) : vf.call(null,G__47368));
})(),emmy.calculus.manifold.point(coordinate_system)], 0));
});
/**
 * Returns a vector field that returns, for any supplied function `f`, a manifold
 *   function [[manifold/zero-manifold-function]] that maps every input manifold
 *   `point` to the scalar value 0.
 */
emmy.calculus.vector_field.vf_COLON_zero = (function emmy$calculus$vector_field$vf_COLON_zero(_){
return emmy.calculus.manifold.zero_manifold_function;
});
/**
 * Given some vector field `vf`, returns a vector field with the same context and
 *   its procedure replaced by `vf:zero`.
 * 
 *   The returned vector field responds `true` to `g/zero?`.
 */
emmy.calculus.vector_field.vf_COLON_zero_like = (function emmy$calculus$vector_field$vf_COLON_zero_like(vf){
if(emmy.calculus.vector_field.vector_field_QMARK_(vf)){
} else {
throw (new Error("Assert failed: (vector-field? vf)"));
}

return emmy.operator.make_operator.cljs$core$IFn$_invoke$arity$3(emmy.calculus.vector_field.vf_COLON_zero,new cljs.core.Symbol(null,"vf:zero","vf:zero",-742903868,null),emmy.operator.context(vf));
});
/**
 * Returns true if the supplied vector field `vf` is a vector field with a
 *   procedure equal to `vf:zero`, false otherwise.
 */
emmy.calculus.vector_field.vf_COLON_zero_QMARK_ = (function emmy$calculus$vector_field$vf_COLON_zero_QMARK_(op){
return ((emmy.calculus.vector_field.vector_field_QMARK_(op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.operator.procedure(op),emmy.calculus.vector_field.vf_COLON_zero)));
});
/**
 * Given a symbolic name `sym` and a `coordinate-system`, returns a vector field
 *   consisting of literal real-valued functions from the coordinate system's
 *   dimension for each coordinate component.
 * 
 *   These functions are passed to [[components->vector-field]], along with the
 *   supplied `coordinate-system` and symbolic name `sym`.
 * 
 *   For coordinate systems of dimension 1, `literal-vector-field`'s component
 *   functions will accept a single non-structural argument.
 */
emmy.calculus.vector_field.literal_vector_field = (function emmy$calculus$vector_field$literal_vector_field(sym,coordinate_system){
var n = new cljs.core.Keyword(null,"dimension","dimension",543254198).cljs$core$IFn$_invoke$arity$1(emmy.calculus.manifold.manifold(coordinate_system));
var domain = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(1)))?(0):emmy.structure.up_STAR_(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,(0))));
var range = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(1)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null):domain);
return emmy.calculus.vector_field.components__GT_vector_field.cljs$core$IFn$_invoke$arity$3(emmy.abstract$.function$.literal_function.cljs$core$IFn$_invoke$arity$3(sym,domain,range),coordinate_system,sym);
});
emmy.calculus.vector_field.coordinate_basis_vector_field_procedure = (function emmy$calculus$vector_field$coordinate_basis_vector_field_procedure(var_args){
var args__5903__auto__ = [];
var len__5897__auto___47389 = arguments.length;
var i__5898__auto___47390 = (0);
while(true){
if((i__5898__auto___47390 < len__5897__auto___47389)){
args__5903__auto__.push((arguments[i__5898__auto___47390]));

var G__47391 = (i__5898__auto___47390 + (1));
i__5898__auto___47390 = G__47391;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return emmy.calculus.vector_field.coordinate_basis_vector_field_procedure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(emmy.calculus.vector_field.coordinate_basis_vector_field_procedure.cljs$core$IFn$_invoke$arity$variadic = (function (coordinate_system,indices){
return (function (f){
return emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__47373 = emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f,emmy.calculus.manifold.point(coordinate_system)], 0));
var fexpr__47372 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(emmy.calculus.derivative.partial,indices);
return (fexpr__47372.cljs$core$IFn$_invoke$arity$1 ? fexpr__47372.cljs$core$IFn$_invoke$arity$1(G__47373) : fexpr__47372.call(null,G__47373));
})(),emmy.calculus.manifold.chart(coordinate_system)], 0));
});
}));

(emmy.calculus.vector_field.coordinate_basis_vector_field_procedure.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(emmy.calculus.vector_field.coordinate_basis_vector_field_procedure.cljs$lang$applyTo = (function (seq47370){
var G__47371 = cljs.core.first(seq47370);
var seq47370__$1 = cljs.core.next(seq47370);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47371,seq47370__$1);
}));

/**
 * Given some `coordinate-system`, a symbolic `name` and a sequence of indices
 *   into the structure of the coordinate system's representation,
 * 
 *   returns a vector field that takes a function and returns a new function that
 *   computes the partial derivative of that function with respect to the supplied
 *   `indices` into `coordinate-system`.
 * 
 *   To compute the full Jacobian, pass no indices.
 */
emmy.calculus.vector_field.coordinate_basis_vector_field = (function emmy$calculus$vector_field$coordinate_basis_vector_field(var_args){
var args__5903__auto__ = [];
var len__5897__auto___47392 = arguments.length;
var i__5898__auto___47393 = (0);
while(true){
if((i__5898__auto___47393 < len__5897__auto___47392)){
args__5903__auto__.push((arguments[i__5898__auto___47393]));

var G__47394 = (i__5898__auto___47393 + (1));
i__5898__auto___47393 = G__47394;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return emmy.calculus.vector_field.coordinate_basis_vector_field.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(emmy.calculus.vector_field.coordinate_basis_vector_field.cljs$core$IFn$_invoke$arity$variadic = (function (coordinate_system,name,indices){
var vfp = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(emmy.calculus.vector_field.coordinate_basis_vector_field_procedure,coordinate_system,indices);
return emmy.calculus.vector_field.procedure__GT_vector_field.cljs$core$IFn$_invoke$arity$2(emmy.function$.memoize(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(emmy.function$.memoize,vfp)),name);
}));

(emmy.calculus.vector_field.coordinate_basis_vector_field.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(emmy.calculus.vector_field.coordinate_basis_vector_field.cljs$lang$applyTo = (function (seq47374){
var G__47375 = cljs.core.first(seq47374);
var seq47374__$1 = cljs.core.next(seq47374);
var G__47376 = cljs.core.first(seq47374__$1);
var seq47374__$2 = cljs.core.next(seq47374__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47375,G__47376,seq47374__$2);
}));

/**
 * From the name `n` of a coordinate, produce the name of the coordinate basis
 *   vector field (as a symbol)
 */
emmy.calculus.vector_field.coordinate_name__GT_vf_name = (function emmy$calculus$vector_field$coordinate_name__GT_vf_name(n){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((""+"d:d"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)));
});
/**
 * Given some `coordinate-system`, returns a structure of
 *   `coordinate-basis-vector-field` instances. The vector field at each structural
 *   spot takes a function and computes its directional derivative with respect to
 *   that coordinate.
 * 
 *   When applied as a function, the structure behaves equivalently to
 * 
 *   ```clojure
 *   (coordinate-basis-vector-field <coordinate-system> 'ignored-name)
 *   ```
 * 
 *   With no indices supplied.
 */
emmy.calculus.vector_field.coordinate_system__GT_vector_basis = (function emmy$calculus$vector_field$coordinate_system__GT_vector_basis(coordinate_system){
return emmy.structure.transpose(emmy.structure.map_chain((function (c_name,chain,_){
var vf_name = emmy.calculus.vector_field.coordinate_name__GT_vf_name(c_name);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(emmy.calculus.vector_field.coordinate_basis_vector_field,coordinate_system,vf_name,chain);
}),emmy.calculus.manifold.coordinate_prototype(coordinate_system)));
});
/**
 * Given a structure of `components` and and a matching `vector-basis` (of
 *   identical structure with orientations flipped), returns a new vector field
 *   generated contracting by these two structures together.
 * 
 *   The returned vector field passes its input function to the operator generated
 *   by this contraction.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (let-coordinates [[x y] R2-rect]
 *  (basis-components->vector-field
 *   (up x y)
 *   (coordinate-system->vector-basis R2-rect)))
 *   ;; => (+ (* x d:dx) (* y d:dy))
 *   ```
 * 
 *   NOTE:
 *   - This is for any basis, not just a coordinate basis
 *   - The `components` are evaluated at a manifold point, not its coordinates
 *   - Given a dual basis, you can retrieve the original components
 *  with [[vector-field->basis-components]]
 */
emmy.calculus.vector_field.basis_components__GT_vector_field = (function emmy$calculus$vector_field$basis_components__GT_vector_field(components,vector_basis){
if(emmy.structure.compatible_for_contraction_QMARK_(components,vector_basis)){
} else {
throw (new Error("Assert failed: (s/compatible-for-contraction? components vector-basis)"));
}

var op = (function (f){
var applied = (vector_basis.cljs$core$IFn$_invoke$arity$1 ? vector_basis.cljs$core$IFn$_invoke$arity$1(f) : vector_basis.call(null,f));
return (function (point){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((applied.cljs$core$IFn$_invoke$arity$1 ? applied.cljs$core$IFn$_invoke$arity$1(point) : applied.call(null,point)),(components.cljs$core$IFn$_invoke$arity$1 ? components.cljs$core$IFn$_invoke$arity$1(point) : components.call(null,point)));
});
});
var name = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (component,basis_element){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),null,(1),null)),(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(component),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(basis_element),null,(1),null))], 0))));
}),cljs.core.flatten(components),cljs.core.flatten(vector_basis)))));
return emmy.calculus.vector_field.procedure__GT_vector_field.cljs$core$IFn$_invoke$arity$2(op,name);
});
/**
 * Given a vector field `vf` generated from [[basis-components->vector-field]] and
 *   a dual basis, returns the original basis components.
 * 
 *   NOTE: You can generate a dual basis with [[basis/vector-basis->dual-basis]].
 * 
 *   Here's an example of how to use this function to round trip a structure of
 *   basis components:
 * 
 *   ```clojure
 *   (let [basis (coordinate-system->vector-basis coordsys)
 *      dual  (basis/vector-basis->dual basis coordsys)]
 *  (= basis-components
 *     (-> basis-components
 *         (basis-components->vector-field basis)
 *         (vector-field->basis-components dual))))
 *   ```
 */
emmy.calculus.vector_field.vector_field__GT_basis_components = (function emmy$calculus$vector_field$vector_field__GT_basis_components(vf,dual_basis){
return emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (w){
return (w.cljs$core$IFn$_invoke$arity$1 ? w.cljs$core$IFn$_invoke$arity$1(vf) : w.call(null,vf));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dual_basis], 0));
});
/**
 * Returns an operator that acts as a coordinate version of the supplied vector
 *   field `vf` with respect to `coordinate-system`.
 * 
 *   The returned operator takes a function and returns a new function that takes
 *   directional derivatives of coordinate representations of manifold points, with
 *   respect to `coordinate-system`.
 */
emmy.calculus.vector_field.coordinatize = (function emmy$calculus$vector_field$coordinatize(vf,coordinate_system){
var coordinatized_v = (function emmy$calculus$vector_field$coordinatize_$_coordinatized_v(f){
return (function (x){
var b = emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__47381 = emmy.calculus.manifold.chart(coordinate_system);
return (vf.cljs$core$IFn$_invoke$arity$1 ? vf.cljs$core$IFn$_invoke$arity$1(G__47381) : vf.call(null,G__47381));
})(),emmy.calculus.manifold.point(coordinate_system)], 0));
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__47382 = (emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(f) : emmy.calculus.derivative.D.call(null,f));
return (fexpr__47382.cljs$core$IFn$_invoke$arity$1 ? fexpr__47382.cljs$core$IFn$_invoke$arity$1(x) : fexpr__47382.call(null,x));
})(),(b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(x) : b.call(null,x)));
});
});
return emmy.operator.make_operator.cljs$core$IFn$_invoke$arity$2(coordinatized_v,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"coordinatized","coordinatized",1447215710,null),null,(1),null)),(new cljs.core.List(null,emmy.operator.name(vf),null,(1),null))))));
});
/**
 * We can use the coordinatized vector field to build an evolution along an
 *   integral curve.
 * 
 *   NOTE: I don't see how this has anything to do with [[coordinatize]]!
 */
emmy.calculus.vector_field.evolution = (function emmy$calculus$vector_field$evolution(order){
return (function (delta_t,vector_field){
return (function (manifold_fn){
return (function (manifold_point){
return emmy.series.sum((function (){var fexpr__47385 = (function (){var fexpr__47386 = emmy.generic.exp.cljs$core$IFn$_invoke$arity$1(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(delta_t,vector_field));
return (fexpr__47386.cljs$core$IFn$_invoke$arity$1 ? fexpr__47386.cljs$core$IFn$_invoke$arity$1(manifold_fn) : fexpr__47386.call(null,manifold_fn));
})();
return (fexpr__47385.cljs$core$IFn$_invoke$arity$1 ? fexpr__47385.cljs$core$IFn$_invoke$arity$1(manifold_point) : fexpr__47385.call(null,manifold_point));
})(),order);
});
});
});
});

//# sourceMappingURL=emmy.calculus.vector_field.js.map
