goog.provide('emmy.calculus.form_field');
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("emmy.calculus.form-field","oneform-field","emmy.calculus.form-field/oneform-field",790058519),new cljs.core.Keyword("emmy.calculus.form-field","form-field","emmy.calculus.form-field/form-field",1983687851));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("emmy.calculus.form-field","form-field","emmy.calculus.form-field/form-field",1983687851),new cljs.core.Keyword("emmy.operator","operator","emmy.operator/operator",1412891316));
/**
 * Returns a form field that returns, for any supplied vector field `vf`, a
 *   manifold function [[manifold/zero-manifold-function]] that maps every input
 *   manifold `point` to the scalar value 0.
 */
emmy.calculus.form_field.ff_COLON_zero = (function emmy$calculus$form_field$ff_COLON_zero(_){
return emmy.calculus.manifold.zero_manifold_function;
});
/**
 * Returns the rank of the supplied differential form `f`. Functions are treated
 *   as differential forms of rank 0.
 * 
 *   Throws for any non differential form supplied.
 */
emmy.calculus.form_field.get_rank = (function emmy$calculus$form_field$get_rank(f){
if(emmy.operator.operator_QMARK_(f)){
var or__5162__auto__ = new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(emmy.operator.context(f));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.util.illegal((""+"operator, but not a differential form: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)));
}
} else {
if(emmy.function$.function_QMARK_(f)){
return (0);
} else {
return emmy.util.illegal((""+"not a differential form: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)));

}
}
});
/**
 * Returns true if the supplied `f` is a form field operator, false otherwise.
 */
emmy.calculus.form_field.form_field_QMARK_ = (function emmy$calculus$form_field$form_field_QMARK_(ff){
var and__5160__auto__ = emmy.operator.operator_QMARK_(ff);
if(and__5160__auto__){
var subtype = new cljs.core.Keyword(null,"subtype","subtype",-2092672993).cljs$core$IFn$_invoke$arity$1(emmy.operator.context(ff));
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(subtype,new cljs.core.Keyword("emmy.calculus.form-field","form-field","emmy.calculus.form-field/form-field",1983687851));
} else {
return and__5160__auto__;
}
});
/**
 * Returns true if the supplied `f` is an [form field of rank
 *   n](https://en.wikipedia.org/wiki/Differential_form), false otherwise.
 * 
 *   A form-field of rank n is an operator that takes n vector fields to a
 *   real-valued function on the manifold.
 */
emmy.calculus.form_field.nform_field_QMARK_ = (function emmy$calculus$form_field$nform_field_QMARK_(f,n){
return ((emmy.calculus.form_field.form_field_QMARK_(f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,emmy.calculus.form_field.get_rank(f))));
});
/**
 * Returns true if the supplied `f` is
 *   a [One-form](https://en.wikipedia.org/wiki/One-form), false
 *   otherwise.
 * 
 *   A [One-form](https://en.wikipedia.org/wiki/One-form) takes a single vector
 *   field to a real-valued function on the manifold.
 */
emmy.calculus.form_field.oneform_field_QMARK_ = (function emmy$calculus$form_field$oneform_field_QMARK_(f){
return emmy.calculus.form_field.nform_field_QMARK_(f,(1));
});
/**
 * Given some form field `op`, returns a form field with the same context and
 *   its procedure replaced by `ff:zero`.
 * 
 *   The returned form field responds `true` to `g/zero?`.
 */
emmy.calculus.form_field.ff_COLON_zero_like = (function emmy$calculus$form_field$ff_COLON_zero_like(op){
if(emmy.calculus.form_field.form_field_QMARK_(op)){
} else {
throw (new Error("Assert failed: (form-field? op)"));
}

return emmy.operator.make_operator.cljs$core$IFn$_invoke$arity$3(emmy.calculus.form_field.ff_COLON_zero,new cljs.core.Symbol(null,"ff:zero","ff:zero",628755951,null),emmy.operator.context(op));
});
/**
 * Returns true if the supplied form field `op` is a form field with a procedure
 *   equal to `ff:zero`, false otherwise.
 */
emmy.calculus.form_field.ff_COLON_zero_QMARK_ = (function emmy$calculus$form_field$ff_COLON_zero_QMARK_(op){
return ((emmy.calculus.form_field.form_field_QMARK_(op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.operator.procedure(op),emmy.calculus.form_field.ff_COLON_zero)));
});
var one_like = (function emmy$calculus$form_field$one_like(_){
return emmy.util.unsupported("form fields don't have an identity.");
});
var id_like = (function emmy$calculus$form_field$id_like(_){
return emmy.util.unsupported("form fields don't have a multiplicative identity.");
});
var identity_QMARK_ = (function emmy$calculus$form_field$identity_QMARK_(_){
return false;
});
var defaults_47447 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"zero?","zero?",-1314772630),emmy.calculus.form_field.ff_COLON_zero_QMARK_,new cljs.core.Keyword(null,"zero-like","zero-like",1759410522),emmy.calculus.form_field.ff_COLON_zero_like,new cljs.core.Keyword(null,"one-like","one-like",887133720),one_like,new cljs.core.Keyword(null,"identity?","identity?",1589858878),identity_QMARK_,new cljs.core.Keyword(null,"identity-like","identity-like",-98546347),id_like], null);
emmy.calculus.form_field.ff_context = (function emmy$calculus$form_field$ff_context(m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults_47447,m], 0));
});
/**
 * Accepts a function `f` and an optional symbolic `name`, and returns an n-form
 *   field, i.e., a subtype of [[emmy.operator/Operator]].
 * 
 *   `f` should be a function from n vector field arguments to a smooth real-valued
 *   function `g` of a manifold.
 * 
 *   If `n` is 0, the function will be called immediately and its return value
 *   returned.
 */
emmy.calculus.form_field.procedure__GT_nform_field = (function emmy$calculus$form_field$procedure__GT_nform_field(var_args){
var G__47400 = arguments.length;
switch (G__47400) {
case 2:
return emmy.calculus.form_field.procedure__GT_nform_field.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return emmy.calculus.form_field.procedure__GT_nform_field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.calculus.form_field.procedure__GT_nform_field.cljs$core$IFn$_invoke$arity$2 = (function (f,n){
return emmy.calculus.form_field.procedure__GT_nform_field.cljs$core$IFn$_invoke$arity$3(f,n,new cljs.core.Symbol(null,"unnamed-nform-field","unnamed-nform-field",1835726242,null));
}));

(emmy.calculus.form_field.procedure__GT_nform_field.cljs$core$IFn$_invoke$arity$3 = (function (f,n,name){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(0))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
var args = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,new cljs.core.Keyword("emmy.calculus.vector-field","vector-field","emmy.calculus.vector-field/vector-field",739612763)));
return emmy.operator.make_operator.cljs$core$IFn$_invoke$arity$3(f,name,emmy.calculus.form_field.ff_context(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"subtype","subtype",-2092672993),new cljs.core.Keyword("emmy.calculus.form-field","form-field","emmy.calculus.form-field/form-field",1983687851),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),n], null),new cljs.core.Keyword(null,"rank","rank",-1706728502),n,new cljs.core.Keyword(null,"arguments","arguments",-1182834456),args], null)));
}
}));

(emmy.calculus.form_field.procedure__GT_nform_field.cljs$lang$maxFixedArity = 3);

/**
 * Accepts a function `f` and an optional symbolic `name`, and returns a one-form
 *   field, i.e., a subtype of [[emmy.operator/Operator]].
 * 
 *   `f` should be a function from a vector field to a smooth real-valued function
 *   `g` of a manifold.
 */
emmy.calculus.form_field.procedure__GT_oneform_field = (function emmy$calculus$form_field$procedure__GT_oneform_field(var_args){
var G__47402 = arguments.length;
switch (G__47402) {
case 1:
return emmy.calculus.form_field.procedure__GT_oneform_field.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.calculus.form_field.procedure__GT_oneform_field.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.calculus.form_field.procedure__GT_oneform_field.cljs$core$IFn$_invoke$arity$1 = (function (f){
var name = new cljs.core.Symbol(null,"unnamed-1form-field","unnamed-1form-field",-518922876,null);
return emmy.calculus.form_field.procedure__GT_oneform_field.cljs$core$IFn$_invoke$arity$2(f,name);
}));

(emmy.calculus.form_field.procedure__GT_oneform_field.cljs$core$IFn$_invoke$arity$2 = (function (f,name){
return emmy.operator.make_operator.cljs$core$IFn$_invoke$arity$3(f,name,emmy.calculus.form_field.ff_context(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"subtype","subtype",-2092672993),new cljs.core.Keyword("emmy.calculus.form-field","oneform-field","emmy.calculus.form-field/oneform-field",790058519),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"rank","rank",-1706728502),(1),new cljs.core.Keyword(null,"arguments","arguments",-1182834456),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.calculus.vector-field","vector-field","emmy.calculus.vector-field/vector-field",739612763)], null)], null)));
}));

(emmy.calculus.form_field.procedure__GT_oneform_field.cljs$lang$maxFixedArity = 2);

/**
 * Takes:
 * 
 *   - a `down` tuple of `components` of the one-form field relative to
 *  `coordinate-system`
 *   - the `coordinate-system`
 * 
 *   And returns a procedure (not yet an operator!) that takes a structure of vector fields
 *   and produces a new structure of functions of manifold points.
 */
emmy.calculus.form_field.oneform_field_procedure = (function emmy$calculus$form_field$oneform_field_procedure(components,coordinate_system){
return (function (vf_components){
return emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (vf){
if(emmy.calculus.vector_field.vector_field_QMARK_(vf)){
} else {
throw (new Error("Assert failed: (vf/vector-field? vf)"));
}

return emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(components,emmy.calculus.vector_field.vector_field__GT_components(vf,coordinate_system)),emmy.calculus.manifold.chart(coordinate_system)], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vf_components], 0));
});
});
/**
 * Takes:
 * 
 *   - a `down` tuple of `components` of the one-form field relative to
 *  `coordinate-system`
 *   - the `coordinate-system`
 * 
 *   And returns a full one-form field.
 * 
 *   A one-field field is an operator that takes a vector field to a real-valued
 *   function on the manifold.
 */
emmy.calculus.form_field.components__GT_oneform_field = (function emmy$calculus$form_field$components__GT_oneform_field(var_args){
var G__47405 = arguments.length;
switch (G__47405) {
case 2:
return emmy.calculus.form_field.components__GT_oneform_field.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return emmy.calculus.form_field.components__GT_oneform_field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.calculus.form_field.components__GT_oneform_field.cljs$core$IFn$_invoke$arity$2 = (function (components,coordinate_system){
var name = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"oneform-field","oneform-field",119367957,null),null,(1),null)),(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(components),null,(1),null)))));
return emmy.calculus.form_field.components__GT_oneform_field.cljs$core$IFn$_invoke$arity$3(components,coordinate_system,name);
}));

(emmy.calculus.form_field.components__GT_oneform_field.cljs$core$IFn$_invoke$arity$3 = (function (components,coordinate_system,name){
return emmy.calculus.form_field.procedure__GT_oneform_field.cljs$core$IFn$_invoke$arity$2(emmy.calculus.form_field.oneform_field_procedure(components,coordinate_system),name);
}));

(emmy.calculus.form_field.components__GT_oneform_field.cljs$lang$maxFixedArity = 3);

/**
 * Given a one-form field `form` and a `coordinate-system`, returns a function
 *   from the coordinate representation of a manifold point to a coordinate
 *   representation of the coordinatized components of the form field at that
 *   point.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (let-coordinates [[x y] R2-rect]
 *  (let [f (literal-oneform-field 'f R2-rect)]
 *    ((oneform-field->components f R2-rect)
 *     (up 'x0 'y0))))
 * 
 *   ;;=> (down (f_0 (up x0 y0))
 *   ;;         (f_1 (up x0 y0)))
 *   ```
 */
emmy.calculus.form_field.oneform_field__GT_components = (function emmy$calculus$form_field$oneform_field__GT_components(form,coordinate_system){
if(emmy.calculus.form_field.form_field_QMARK_(form)){
} else {
throw (new Error("Assert failed: (form-field? form)"));
}

var basis = emmy.calculus.vector_field.coordinate_system__GT_vector_basis(coordinate_system);
return emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(form.cljs$core$IFn$_invoke$arity$1 ? form.cljs$core$IFn$_invoke$arity$1(basis) : form.call(null,basis)),emmy.calculus.manifold.point(coordinate_system)], 0));
});
/**
 * Given a symbolic name `sym` and a `coordinate-system`, returns a one-form field
 *   consisting of literal real-valued functions from the coordinate system's
 *   dimension for each coordinate component.
 * 
 *   These functions are passed to [[components->oneform-field]], along with the
 *   supplied `coordinate-system` and symbolic name `sym`.
 * 
 *   For coordinate systems of dimension 1, `literal-form-field`'s component
 *   functions will accept a single non-structural argument.
 */
emmy.calculus.form_field.literal_oneform_field = (function emmy$calculus$form_field$literal_oneform_field(name,coordinate_system){
var n = new cljs.core.Keyword(null,"dimension","dimension",543254198).cljs$core$IFn$_invoke$arity$1(emmy.calculus.manifold.manifold(coordinate_system));
var domain = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(1)))?(0):emmy.structure.up_STAR_(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,(0))));
var range = emmy.structure.down_STAR_(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,(0)));
return emmy.calculus.form_field.components__GT_oneform_field.cljs$core$IFn$_invoke$arity$3(emmy.abstract$.function$.literal_function.cljs$core$IFn$_invoke$arity$3(name,domain,range),coordinate_system,name);
});
emmy.calculus.form_field.coordinate_basis_oneform_field_procedure = (function emmy$calculus$form_field$coordinate_basis_oneform_field_procedure(var_args){
var args__5903__auto__ = [];
var len__5897__auto___47451 = arguments.length;
var i__5898__auto___47452 = (0);
while(true){
if((i__5898__auto___47452 < len__5897__auto___47451)){
args__5903__auto__.push((arguments[i__5898__auto___47452]));

var G__47453 = (i__5898__auto___47452 + (1));
i__5898__auto___47452 = G__47453;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return emmy.calculus.form_field.coordinate_basis_oneform_field_procedure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(emmy.calculus.form_field.coordinate_basis_oneform_field_procedure.cljs$core$IFn$_invoke$arity$variadic = (function (coordinate_system,indices){
return (function (vf_structure){
var internal = (function emmy$calculus$form_field$internal(vf){
if(emmy.calculus.vector_field.vector_field_QMARK_(vf)){
} else {
throw (new Error("Assert failed: (vf/vector-field? vf)"));
}

var G__47409 = emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(emmy.structure.component,indices),emmy.calculus.manifold.chart(coordinate_system)], 0));
return (vf.cljs$core$IFn$_invoke$arity$1 ? vf.cljs$core$IFn$_invoke$arity$1(G__47409) : vf.call(null,G__47409));
});
return emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic(internal,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vf_structure], 0));
});
}));

(emmy.calculus.form_field.coordinate_basis_oneform_field_procedure.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(emmy.calculus.form_field.coordinate_basis_oneform_field_procedure.cljs$lang$applyTo = (function (seq47406){
var G__47407 = cljs.core.first(seq47406);
var seq47406__$1 = cljs.core.next(seq47406);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47407,seq47406__$1);
}));

/**
 * Given some `coordinate-system`, a symbolic `name` and a sequence of indices
 *   into the structure of the coordinate system's representation, returns a
 *   one-form field.
 * 
 *   The returned one-form field at each structural spot takes a vector field and
 *   returns a function that takes the directional derivative in that coordinate's
 *   direction using the vector field.
 */
emmy.calculus.form_field.coordinate_basis_oneform_field = (function emmy$calculus$form_field$coordinate_basis_oneform_field(var_args){
var args__5903__auto__ = [];
var len__5897__auto___47454 = arguments.length;
var i__5898__auto___47455 = (0);
while(true){
if((i__5898__auto___47455 < len__5897__auto___47454)){
args__5903__auto__.push((arguments[i__5898__auto___47455]));

var G__47456 = (i__5898__auto___47455 + (1));
i__5898__auto___47455 = G__47456;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return emmy.calculus.form_field.coordinate_basis_oneform_field.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(emmy.calculus.form_field.coordinate_basis_oneform_field.cljs$core$IFn$_invoke$arity$variadic = (function (coordinate_system,name,indices){
var ofp = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(emmy.calculus.form_field.coordinate_basis_oneform_field_procedure,coordinate_system,indices);
return emmy.calculus.form_field.procedure__GT_oneform_field.cljs$core$IFn$_invoke$arity$2(emmy.function$.memoize(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(emmy.function$.memoize,ofp)),name);
}));

(emmy.calculus.form_field.coordinate_basis_oneform_field.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(emmy.calculus.form_field.coordinate_basis_oneform_field.cljs$lang$applyTo = (function (seq47410){
var G__47411 = cljs.core.first(seq47410);
var seq47410__$1 = cljs.core.next(seq47410);
var G__47412 = cljs.core.first(seq47410__$1);
var seq47410__$2 = cljs.core.next(seq47410__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47411,G__47412,seq47410__$2);
}));

/**
 * From the name of a coordinate, produce the name of the coordinate basis
 *   one-form field (as a symbol)
 */
emmy.calculus.form_field.coordinate_name__GT_ff_name = (function emmy$calculus$form_field$coordinate_name__GT_ff_name(n){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1("d")+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)));
});
/**
 * Given some `coordinate-system`, returns a structure of
 *   `coordinate-basis-oneform-field` instances.
 * 
 *   The one-form field at each structural spot takes a vector field and returns a
 *   function that takes the directional derivative in that coordinate's direction
 *   using the vector field.
 * 
 *   When applied as a function, the structure behaves equivalently to
 * 
 *   ```clojure
 *   (coordinate-basis-oneform-field <coordinate-system> 'ignored-name)
 *   ```
 * 
 *   With no indices supplied.
 */
emmy.calculus.form_field.coordinate_system__GT_oneform_basis = (function emmy$calculus$form_field$coordinate_system__GT_oneform_basis(coordinate_system){
return emmy.structure.map_chain((function (c_name,chain,_){
var ff_name = emmy.calculus.form_field.coordinate_name__GT_ff_name(c_name);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(emmy.calculus.form_field.coordinate_basis_oneform_field,coordinate_system,ff_name,chain);
}),emmy.calculus.manifold.coordinate_prototype(coordinate_system));
});
/**
 * Given a structure of `components` functions defined on manifold points and and
 *   a matching `oneform-basis` (of identical structure),
 * 
 *   Returns a new one-form field that
 * 
 *   - passes its vector-field argument to `oneform-basis`, returning a new
 *  equivalent structure with each slot populated by functions from a manifold
 *  point to the directional derivative (using the vector field) in that
 *  coordinate direction
 * 
 *   - contracts the result of that operation with the result of applying each
 *  component in `components` to the manifold point.
 * 
 *   NOTE:
 *   - This is for any basis, not just a coordinate basis
 *   - The `components` are evaluated at a manifold point, not its coordinates
 *   - Given a dual basis, you can retrieve the original components
 *  with [[oneform-field->basis-components]]
 */
emmy.calculus.form_field.basis_components__GT_oneform_field = (function emmy$calculus$form_field$basis_components__GT_oneform_field(components,oneform_basis){
return emmy.calculus.form_field.procedure__GT_oneform_field.cljs$core$IFn$_invoke$arity$1((function (vf){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(components,(oneform_basis.cljs$core$IFn$_invoke$arity$1 ? oneform_basis.cljs$core$IFn$_invoke$arity$1(vf) : oneform_basis.call(null,vf)));
}));
});
/**
 * Given a structure `w` of and a vector field basis `vector-basis`, returns a new
 *   structure generated by applying the full vector basis to each element of `w`.
 * 
 *   Here's an example of how to use this function to round trip a structure of
 *   basis components:
 * 
 *   ```clojure
 *   (let [vb    (vf/coordinate-system->vector-basis coordsys)
 *      basis (coordinate-system->oneform-basis coordsys)
 *      components (down d:dx d:dy)]
 *  (= components
 *     (-> components
 *         (basis-components->oneform-field basis)
 *         (oneform-field->basis-components vb))))
 *   ```
 */
emmy.calculus.form_field.oneform_field__GT_basis_components = (function emmy$calculus$form_field$oneform_field__GT_basis_components(w,vector_basis){
return emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic(w,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_basis], 0));
});
/**
 * One of the two incompatible definitions of differential.
 * 
 *   This differential is a special case of exterior derivative. The other one
 *   lives at [[map/differential]].
 */
emmy.calculus.form_field.function__GT_oneform_field = (function emmy$calculus$form_field$function__GT_oneform_field(f){
if(emmy.function$.function_QMARK_(f)){
} else {
throw (new Error("Assert failed: (f/function? f)"));
}

var op = (function (vf_structure){
return emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (vf){
if(emmy.calculus.vector_field.vector_field_QMARK_(vf)){
} else {
throw (new Error("Assert failed: (vf/vector-field? vf)"));
}

return (function (m){
var fexpr__47413 = (vf.cljs$core$IFn$_invoke$arity$1 ? vf.cljs$core$IFn$_invoke$arity$1(f) : vf.call(null,f));
return (fexpr__47413.cljs$core$IFn$_invoke$arity$1 ? fexpr__47413.cljs$core$IFn$_invoke$arity$1(m) : fexpr__47413.call(null,m));
});
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vf_structure], 0));
});
var name = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"d","d",-682293345,null),null,(1),null)),(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(f),null,(1),null)))));
return emmy.calculus.form_field.procedure__GT_oneform_field.cljs$core$IFn$_invoke$arity$2(op,name);
});
/**
 * Alias for [[function->oneform-field]].
 *   One of the two incompatible definitions of differential.
 * 
 *   This differential is a special case of exterior derivative. The other one
 *   lives at [[map/differential]].
 */
emmy.calculus.form_field.differential_of_function = emmy.calculus.form_field.function__GT_oneform_field;
/**
 * Binary and unary cases of the wedge product.
 */
emmy.calculus.form_field.wedge2 = (function emmy$calculus$form_field$wedge2(var_args){
var G__47415 = arguments.length;
switch (G__47415) {
case 1:
return emmy.calculus.form_field.wedge2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.calculus.form_field.wedge2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.calculus.form_field.wedge2.cljs$core$IFn$_invoke$arity$1 = (function (form1){
return form1;
}));

(emmy.calculus.form_field.wedge2.cljs$core$IFn$_invoke$arity$2 = (function (form1,form2){
var n1 = emmy.calculus.form_field.get_rank(form1);
var n2 = emmy.calculus.form_field.get_rank(form2);
if((((n1 === (0))) || ((n2 === (0))))){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(form1,form2);
} else {
var n = (n1 + n2);
var k = ((1) / (emmy.special.factorial.factorial(n1) * emmy.special.factorial.factorial(n2)));
var w = (function() { 
var G__47458__delegate = function (args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),n)){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"Wrong number of args to wedge product: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))+" vs required "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)))+"\n"+"(= (count args) n)")));
}

return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(emmy.generic._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (permutation,parity){
var vec__47416 = cljs.core.split_at(n1,permutation);
var a1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47416,(0),null);
var a2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47416,(1),null);
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(parity,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(form1,a1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(form2,a2)], 0));
}),emmy.util.permute.permutation_sequence(args),cljs.core.cycle(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null)))));
};
var G__47458 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47459__i = 0, G__47459__a = new Array(arguments.length -  0);
while (G__47459__i < G__47459__a.length) {G__47459__a[G__47459__i] = arguments[G__47459__i + 0]; ++G__47459__i;}
  args = new cljs.core.IndexedSeq(G__47459__a,0,null);
} 
return G__47458__delegate.call(this,args);};
G__47458.cljs$lang$maxFixedArity = 0;
G__47458.cljs$lang$applyTo = (function (arglist__47460){
var args = cljs.core.seq(arglist__47460);
return G__47458__delegate(args);
});
G__47458.cljs$core$IFn$_invoke$arity$variadic = G__47458__delegate;
return G__47458;
})()
;
var name = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"wedge","wedge",868448626,null),null,(1),null)),(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(form1),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(form2),null,(1),null))], 0))));
return emmy.calculus.form_field.procedure__GT_nform_field.cljs$core$IFn$_invoke$arity$3(w,n,name);
}
}));

(emmy.calculus.form_field.wedge2.cljs$lang$maxFixedArity = 2);

/**
 * Computes the wedge product of the sequence `fs` of one-forms.
 * 
 *   Higher rank forms can be constructed from one-forms by wedging them together.
 *   This antisymmetric tensor product is computed as a determinant. The purpose of
 *   this is to allow us to use the construction dx^dy to compute the area
 *   described by the vectors that are given to it.
 * 
 *   See Spivak p275 v1 of 'Differential Geometry' to see the correct definition.
 *   The key is that the wedge of the coordinate basis forms had better be the
 *   volume element.
 */
emmy.calculus.form_field.wedge = (function emmy$calculus$form_field$wedge(var_args){
var G__47422 = arguments.length;
switch (G__47422) {
case 0:
return emmy.calculus.form_field.wedge.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return emmy.calculus.form_field.wedge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___47462 = arguments.length;
var i__5898__auto___47463 = (0);
while(true){
if((i__5898__auto___47463 < len__5897__auto___47462)){
args_arr__5922__auto__.push((arguments[i__5898__auto___47463]));

var G__47464 = (i__5898__auto___47463 + (1));
i__5898__auto___47463 = G__47464;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((1) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((1)),(0),null)):null);
return emmy.calculus.form_field.wedge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5923__auto__);

}
});

(emmy.calculus.form_field.wedge.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.constantly((1));
}));

(emmy.calculus.form_field.wedge.cljs$core$IFn$_invoke$arity$1 = (function (f){
return f;
}));

(emmy.calculus.form_field.wedge.cljs$core$IFn$_invoke$arity$variadic = (function (f,fs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (r,l){
return emmy.calculus.form_field.wedge2.cljs$core$IFn$_invoke$arity$2(l,r);
}),cljs.core.reverse(cljs.core.cons(f,fs)));
}));

/** @this {Function} */
(emmy.calculus.form_field.wedge.cljs$lang$applyTo = (function (seq47420){
var G__47421 = cljs.core.first(seq47420);
var seq47420__$1 = cljs.core.next(seq47420);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47421,seq47420__$1);
}));

(emmy.calculus.form_field.wedge.cljs$lang$maxFixedArity = (1));

emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.calculus.form-field","form-field","emmy.calculus.form-field/form-field",1983687851),new cljs.core.Keyword("emmy.calculus.form-field","form-field","emmy.calculus.form-field/form-field",1983687851)], null),(function (a,b){
return emmy.calculus.form_field.wedge2.cljs$core$IFn$_invoke$arity$2(a,b);
}));
/**
 * Returns the alternation of the supplied differential `form`.
 */
emmy.calculus.form_field.Alt = (function emmy$calculus$form_field$Alt(form){
var n = emmy.calculus.form_field.get_rank(form);
if((n === (0))){
return form;
} else {
var alternation = (function() { 
var emmy$calculus$form_field$Alt_$_alternation__delegate = function (args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),n)){
} else {
throw (new Error((""+"Assert failed: "+"Wrong number of args to alternation"+"\n"+"(= (count args) n)")));
}

return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(((1) / emmy.special.factorial.factorial(n)),(function (){var G__47424 = cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (permutation,parity){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(parity,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(form,permutation));
}),emmy.util.permute.permutation_sequence(args),cljs.core.cycle(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null)));
return (emmy.util.aggregate.generic_sum.cljs$core$IFn$_invoke$arity$1 ? emmy.util.aggregate.generic_sum.cljs$core$IFn$_invoke$arity$1(G__47424) : emmy.util.aggregate.generic_sum.call(null,G__47424));
})());
};
var emmy$calculus$form_field$Alt_$_alternation = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47465__i = 0, G__47465__a = new Array(arguments.length -  0);
while (G__47465__i < G__47465__a.length) {G__47465__a[G__47465__i] = arguments[G__47465__i + 0]; ++G__47465__i;}
  args = new cljs.core.IndexedSeq(G__47465__a,0,null);
} 
return emmy$calculus$form_field$Alt_$_alternation__delegate.call(this,args);};
emmy$calculus$form_field$Alt_$_alternation.cljs$lang$maxFixedArity = 0;
emmy$calculus$form_field$Alt_$_alternation.cljs$lang$applyTo = (function (arglist__47466){
var args = cljs.core.seq(arglist__47466);
return emmy$calculus$form_field$Alt_$_alternation__delegate(args);
});
emmy$calculus$form_field$Alt_$_alternation.cljs$core$IFn$_invoke$arity$variadic = emmy$calculus$form_field$Alt_$_alternation__delegate;
return emmy$calculus$form_field$Alt_$_alternation;
})()
;
return emmy.calculus.form_field.procedure__GT_nform_field.cljs$core$IFn$_invoke$arity$3(alternation,n,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"Alt","Alt",-1183702663,null),null,(1),null)),(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(form),null,(1),null))))));
}
});
emmy.calculus.form_field.tensor_product2 = (function emmy$calculus$form_field$tensor_product2(var_args){
var G__47426 = arguments.length;
switch (G__47426) {
case 1:
return emmy.calculus.form_field.tensor_product2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.calculus.form_field.tensor_product2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.calculus.form_field.tensor_product2.cljs$core$IFn$_invoke$arity$1 = (function (t1){
return t1;
}));

(emmy.calculus.form_field.tensor_product2.cljs$core$IFn$_invoke$arity$2 = (function (t1,t2){
var n1 = emmy.calculus.form_field.get_rank(t1);
var n2 = emmy.calculus.form_field.get_rank(t2);
if((((n1 === (0))) || ((n2 === (0))))){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(t1,t2);
} else {
var n = (n1 + n2);
var tp = (function() { 
var G__47468__delegate = function (args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),n)){
} else {
throw (new Error((""+"Assert failed: "+"Wrong number of args to tensor product"+"\n"+"(= (count args) n)")));
}

var vec__47427 = cljs.core.split_at(n1,args);
var a1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47427,(0),null);
var a2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47427,(1),null);
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(t1,a1),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(t2,a2));
};
var G__47468 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47469__i = 0, G__47469__a = new Array(arguments.length -  0);
while (G__47469__i < G__47469__a.length) {G__47469__a[G__47469__i] = arguments[G__47469__i + 0]; ++G__47469__i;}
  args = new cljs.core.IndexedSeq(G__47469__a,0,null);
} 
return G__47468__delegate.call(this,args);};
G__47468.cljs$lang$maxFixedArity = 0;
G__47468.cljs$lang$applyTo = (function (arglist__47470){
var args = cljs.core.seq(arglist__47470);
return G__47468__delegate(args);
});
G__47468.cljs$core$IFn$_invoke$arity$variadic = G__47468__delegate;
return G__47468;
})()
;
return emmy.calculus.form_field.procedure__GT_nform_field.cljs$core$IFn$_invoke$arity$3(tp,n,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"tensor-product","tensor-product",553408668,null),null,(1),null)),(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(t1),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(t2),null,(1),null))], 0)))));
}
}));

(emmy.calculus.form_field.tensor_product2.cljs$lang$maxFixedArity = 2);

emmy.calculus.form_field.w2 = (function emmy$calculus$form_field$w2(var_args){
var G__47431 = arguments.length;
switch (G__47431) {
case 1:
return emmy.calculus.form_field.w2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.calculus.form_field.w2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.calculus.form_field.w2.cljs$core$IFn$_invoke$arity$1 = (function (form1){
return form1;
}));

(emmy.calculus.form_field.w2.cljs$core$IFn$_invoke$arity$2 = (function (form1,form2){
var n1 = emmy.calculus.form_field.get_rank(form1);
var n2 = emmy.calculus.form_field.get_rank(form2);
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((emmy.special.factorial.factorial((n1 + n2)) / (emmy.special.factorial.factorial(n1) * emmy.special.factorial.factorial(n2))),emmy.calculus.form_field.Alt(emmy.calculus.form_field.tensor_product2.cljs$core$IFn$_invoke$arity$2(form1,form2)));
}));

(emmy.calculus.form_field.w2.cljs$lang$maxFixedArity = 2);

/**
 * Alternative definition of [[wedge]] in terms of alternation.
 */
emmy.calculus.form_field.alt_wedge = (function emmy$calculus$form_field$alt_wedge(var_args){
var args__5903__auto__ = [];
var len__5897__auto___47472 = arguments.length;
var i__5898__auto___47473 = (0);
while(true){
if((i__5898__auto___47473 < len__5897__auto___47472)){
args__5903__auto__.push((arguments[i__5898__auto___47473]));

var G__47474 = (i__5898__auto___47473 + (1));
i__5898__auto___47473 = G__47474;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return emmy.calculus.form_field.alt_wedge.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(emmy.calculus.form_field.alt_wedge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(emmy.calculus.form_field.w2,cljs.core.constantly((1)),args);
}));

(emmy.calculus.form_field.alt_wedge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(emmy.calculus.form_field.alt_wedge.cljs$lang$applyTo = (function (seq47432){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47432));
}));

emmy.calculus.form_field.exterior_derivative_procedure = (function emmy$calculus$form_field$exterior_derivative_procedure(kform){
var k = emmy.calculus.form_field.get_rank(kform);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,(0))){
return (emmy.calculus.form_field.differential_of_function.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.form_field.differential_of_function.cljs$core$IFn$_invoke$arity$1(kform) : emmy.calculus.form_field.differential_of_function.call(null,kform));
} else {
var without = (function (p1__47433_SHARP_,p2__47434_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2(p1__47433_SHARP_,p2__47434_SHARP_),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((p1__47433_SHARP_ + (1)),p2__47434_SHARP_));
});
var k_PLUS_1form = (function() { 
var G__47481__delegate = function (vectors){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(vectors),(k + (1)))){
} else {
throw (new Error("Assert failed: (= (count vectors) (inc k))"));
}

return (function (point){
var n = new cljs.core.Keyword(null,"dimension","dimension",543254198).cljs$core$IFn$_invoke$arity$1(emmy.calculus.manifold.point__GT_manifold(point));
if((k < n)){
var G__47435 = (function (i){
var rest = without(i,vectors);
return emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(((cljs.core.even_QMARK_(i))?(1):(-1)),(function (){var fexpr__47440 = (function (){var G__47442 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(kform,rest);
var fexpr__47441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vectors,i);
return (fexpr__47441.cljs$core$IFn$_invoke$arity$1 ? fexpr__47441.cljs$core$IFn$_invoke$arity$1(G__47442) : fexpr__47441.call(null,G__47442));
})();
return (fexpr__47440.cljs$core$IFn$_invoke$arity$1 ? fexpr__47440.cljs$core$IFn$_invoke$arity$1(point) : fexpr__47440.call(null,point));
})()),(function (){var G__47443 = (function (j){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(((cljs.core.even_QMARK_((i + j)))?(1):(-1)),(function (){var fexpr__47446 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(kform,cljs.core.cons(emmy.operator.commutator(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vectors,i),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vectors,j)),without((j - (1)),rest)));
return (fexpr__47446.cljs$core$IFn$_invoke$arity$1 ? fexpr__47446.cljs$core$IFn$_invoke$arity$1(point) : fexpr__47446.call(null,point));
})());
});
var G__47444 = (i + (1));
var G__47445 = (k + (1));
return (emmy.util.aggregate.generic_sum.cljs$core$IFn$_invoke$arity$3 ? emmy.util.aggregate.generic_sum.cljs$core$IFn$_invoke$arity$3(G__47443,G__47444,G__47445) : emmy.util.aggregate.generic_sum.call(null,G__47443,G__47444,G__47445));
})());
});
var G__47436 = (0);
var G__47437 = (k + (1));
return (emmy.util.aggregate.generic_sum.cljs$core$IFn$_invoke$arity$3 ? emmy.util.aggregate.generic_sum.cljs$core$IFn$_invoke$arity$3(G__47435,G__47436,G__47437) : emmy.util.aggregate.generic_sum.call(null,G__47435,G__47436,G__47437));
} else {
return (0);
}
});
};
var G__47481 = function (var_args){
var vectors = null;
if (arguments.length > 0) {
var G__47482__i = 0, G__47482__a = new Array(arguments.length -  0);
while (G__47482__i < G__47482__a.length) {G__47482__a[G__47482__i] = arguments[G__47482__i + 0]; ++G__47482__i;}
  vectors = new cljs.core.IndexedSeq(G__47482__a,0,null);
} 
return G__47481__delegate.call(this,vectors);};
G__47481.cljs$lang$maxFixedArity = 0;
G__47481.cljs$lang$applyTo = (function (arglist__47483){
var vectors = cljs.core.seq(arglist__47483);
return G__47481__delegate(vectors);
});
G__47481.cljs$core$IFn$_invoke$arity$variadic = G__47481__delegate;
return G__47481;
})()
;
return emmy.calculus.form_field.procedure__GT_nform_field.cljs$core$IFn$_invoke$arity$3(k_PLUS_1form,(k + (1)),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"d","d",-682293345,null),null,(1),null)),(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(kform),null,(1),null))))));
}
});
emmy.calculus.form_field.exterior_derivative = emmy.operator.make_operator.cljs$core$IFn$_invoke$arity$2(emmy.calculus.form_field.exterior_derivative_procedure,new cljs.core.Symbol(null,"d","d",-682293345,null));
emmy.calculus.form_field.d = emmy.calculus.form_field.exterior_derivative;

//# sourceMappingURL=emmy.calculus.form_field.js.map
