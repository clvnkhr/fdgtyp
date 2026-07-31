import "./cljs_env.js";
import "./cljs.core.js";
import "./emmy.calculus.basis.js";
import "./emmy.calculus.form_field.js";
import "./emmy.calculus.manifold.js";
import "./emmy.calculus.vector_field.js";
import "./emmy.generic.js";
import "./emmy.operator.js";
import "./emmy.structure.js";
import "./emmy.util.js";
import "./emmy.util.aggregate.js";
import "./emmy.util.permute.js";
import "./emmy.value.js";
goog.provide('emmy.calculus.indexed');
/**
 * Takes a function or operator `f` and a metadata (or context) key `k` and
 *   attempts to fetch it from the metadata (or context). Returns `default` if `k`
 *   has no entry.
 */
emmy.calculus.indexed.meta_k = (function emmy$calculus$indexed$meta_k(var_args){
var G__72200 = arguments.length;
switch (G__72200) {
case 2:
return emmy.calculus.indexed.meta_k.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return emmy.calculus.indexed.meta_k.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.calculus.indexed.meta_k.cljs$core$IFn$_invoke$arity$2 = (function (f,k){
return emmy.calculus.indexed.meta_k.cljs$core$IFn$_invoke$arity$3(f,k,null);
}));

(emmy.calculus.indexed.meta_k.cljs$core$IFn$_invoke$arity$3 = (function (f,k,default$){
if(emmy.operator.operator_QMARK_(f)){
var G__72201 = emmy.operator.context(f);
var G__72202 = default$;
return (k.cljs$core$IFn$_invoke$arity$2 ? k.cljs$core$IFn$_invoke$arity$2(G__72201,G__72202) : k.call(null,G__72201,G__72202));
} else {
var G__72203 = cljs.core.meta(f);
var G__72204 = default$;
return (k.cljs$core$IFn$_invoke$arity$2 ? k.cljs$core$IFn$_invoke$arity$2(G__72203,G__72204) : k.call(null,G__72203,G__72204));
}
}));

(emmy.calculus.indexed.meta_k.cljs$lang$maxFixedArity = 3);

/**
 * Returns a copy of `f` with the `k`, `v` pair added to its metadata (if a
 *   function) or context (if an operator).
 */
emmy.calculus.indexed.with_kvs = (function emmy$calculus$indexed$with_kvs(var_args){
var args__5903__auto__ = [];
var len__5897__auto___72272 = arguments.length;
var i__5898__auto___72273 = (0);
while(true){
if((i__5898__auto___72273 < len__5897__auto___72272)){
args__5903__auto__.push((arguments[i__5898__auto___72273]));

var G__72274 = (i__5898__auto___72273 + (1));
i__5898__auto___72273 = G__72274;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return emmy.calculus.indexed.with_kvs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(emmy.calculus.indexed.with_kvs.cljs$core$IFn$_invoke$arity$variadic = (function (f,kvs){
if(emmy.operator.operator_QMARK_(f)){
return emmy.operator.with_context(f,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,emmy.operator.context(f),kvs));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vary_meta,f,cljs.core.assoc,kvs);
}
}));

(emmy.calculus.indexed.with_kvs.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(emmy.calculus.indexed.with_kvs.cljs$lang$applyTo = (function (seq72206){
var G__72207 = cljs.core.first(seq72206);
var seq72206__$1 = cljs.core.next(seq72206);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72207,seq72206__$1);
}));

/**
 * Given an operator or function `f`, returns its registered vector of argument
 *   types, or `[]` if none exist.
 * 
 *   argument types are, for example,
 * 
 *   ```clojure
 *   [::ff/oneform-field ::vf/vector-field ::vf/vector-field]
 *   ```
 * 
 *   for a `Christoffel-2`, which takes one oneform field and two vector fields.
 */
emmy.calculus.indexed.argument_types = (function emmy$calculus$indexed$argument_types(f){
return emmy.calculus.indexed.meta_k.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"arguments","arguments",-1182834456),cljs.core.PersistentVector.EMPTY);
});
/**
 * Returns true if `f` has any argument types registered, false otherwise.
 */
emmy.calculus.indexed.has_argument_types_QMARK_ = (function emmy$calculus$indexed$has_argument_types_QMARK_(f){
return cljs.core.boolean$(cljs.core.seq(emmy.calculus.indexed.argument_types(f)));
});
/**
 * Given some operator or function `f`, returns a copy of `f` with the supplied
 *   argument types `types` registered in its metadata (if a function) or
 *   context (if an operator).
 * 
 *   Retrieve these types with [[argument-types]].
 */
emmy.calculus.indexed.with_argument_types = (function emmy$calculus$indexed$with_argument_types(f,types){
var args = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,types);
return emmy.calculus.indexed.with_kvs.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arguments","arguments",-1182834456),args,new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),cljs.core.count(args)], null)], 0));
});
/**
 * Given an operator or function `f`, returns its registered vector of index
 *   types, or `[]` if none exist.
 * 
 *   index types are, for example,
 * 
 *   ```clojure
 *   ['up 'down 'down]
 *   ```
 * 
 *   for a `Christoffel-2`, which takes one oneform field and two vector fields.
 */
emmy.calculus.indexed.index_types = (function emmy$calculus$indexed$index_types(f){
return emmy.calculus.indexed.meta_k.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"index-types","index-types",1378319778),cljs.core.PersistentVector.EMPTY);
});
/**
 * Returns true if `f` has any index types registered, false otherwise.
 */
emmy.calculus.indexed.has_index_types_QMARK_ = (function emmy$calculus$indexed$has_index_types_QMARK_(f){
return cljs.core.boolean$(cljs.core.seq(emmy.calculus.indexed.index_types(f)));
});
/**
 * Given some operator or function `f`, returns a copy of `f` with the supplied
 *   index types `types` registered in its metadata (if a function) or
 *   context (if an operator).
 * 
 *   Retrieve these types with [[index-types]].
 */
emmy.calculus.indexed.with_index_types = (function emmy$calculus$indexed$with_index_types(f,types){
var v = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,types);
return emmy.calculus.indexed.with_kvs.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"index-types","index-types",1378319778),v,new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),cljs.core.count(v)], null)], 0));
});
/**
 * Returns true if `ts` is a well-formed-enough sequence of argument types to use
 *   for generating an indexed function via [[typed->indexed]], false otherwise.
 * 
 *   Validates that:
 * 
 *   - The sequence of types `ts` is not empty
 *   - every entry in `ts` derives from `::vf/vector-field` or `::ff/oneform-field`
 *   - form fields come before vector fields.
 */
emmy.calculus.indexed.valid_arg_types_QMARK_ = (function emmy$calculus$indexed$valid_arg_types_QMARK_(ts){
var one_ff_QMARK_ = (function emmy$calculus$indexed$valid_arg_types_QMARK__$_one_ff_QMARK_(t){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(t,new cljs.core.Keyword("emmy.calculus.form-field","oneform-field","emmy.calculus.form-field/oneform-field",790058519));
});
var vf_QMARK_ = (function emmy$calculus$indexed$valid_arg_types_QMARK__$_vf_QMARK_(t){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(t,new cljs.core.Keyword("emmy.calculus.vector-field","vector-field","emmy.calculus.vector-field/vector-field",739612763));
});
return ((cljs.core.seq(ts)) && (((cljs.core.every_QMARK_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(one_ff_QMARK_,vf_QMARK_),ts)) && (cljs.core.every_QMARK_(vf_QMARK_,cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(one_ff_QMARK_,ts))))));
});
emmy.calculus.indexed.typed__GT_indexed = (function emmy$calculus$indexed$typed__GT_indexed(f,basis){
var arg_types = emmy.calculus.indexed.argument_types(f);
if(cljs.core.truth_(emmy.calculus.indexed.valid_arg_types_QMARK_(arg_types))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"Invalid arg types: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_types)))+"\n"+"(valid-arg-types? arg-types)")));
}

var vector_basis = emmy.calculus.basis.basis__GT_vector_basis(basis);
var oneform_basis = emmy.calculus.basis.basis__GT_oneform_basis(basis);
var idx_types = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (t){
if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(t,new cljs.core.Keyword("emmy.calculus.vector-field","vector-field","emmy.calculus.vector-field/vector-field",739612763))){
return new cljs.core.Symbol(null,"down","down",-1089190199,null);
} else {
return new cljs.core.Symbol(null,"up","up",1370819414,null);
}
}),arg_types);
return emmy.calculus.indexed.with_index_types((function emmy$calculus$indexed$typed__GT_indexed_$_indexed(indices){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(indices),cljs.core.count(arg_types))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"Indices count doesn't match expected argument types."+"  Indices:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(indices)+", arg-types: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_types)))+"\n"+"(= (count indices) (count arg-types))")));
}

var args = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (t,idx){
if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(t,new cljs.core.Keyword("emmy.calculus.vector-field","vector-field","emmy.calculus.vector-field/vector-field",739612763))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vector_basis,idx);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(oneform_basis,idx);
}
}),arg_types,indices);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}),idx_types);
});
/**
 * Returns true if `ts` is a well-formed-enough sequence of index types to use for
 *   generating a typed function via [[indexed->typed]], false otherwise.
 * 
 *   Validates that:
 * 
 *   - The sequence of types `ts` is not empty
 *   - every entry in `ts` is either the symbol `'up` or `'down`
 *   - all `'up` entries (corresponding to oneform fields) come before `'down`
 *  entries (corresponding to vector fields)
 */
emmy.calculus.indexed.valid_index_types_QMARK_ = (function emmy$calculus$indexed$valid_index_types_QMARK_(ts){
return cljs.core.boolean$(((cljs.core.seq(ts)) && (((cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"up","up",1370819414,null),null,new cljs.core.Symbol(null,"down","down",-1089190199,null),null], null), null),ts)) && (cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"down","down",-1089190199,null),null], null), null),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"up","up",1370819414,null),null], null), null),ts)))))));
});
/**
 * Returns true if:
 * 
 *   - every argument in `args` has a corresponding index type in `index-types`
 *   - every `'up` in `index-types` is aligned with a [[form-field/oneform-field?]]
 *  argument in `args`
 *   - every `'down` in `index-types` is aligned with a [[vector-field/vector-field?]]
 *  argument in `args`
 * 
 *   false otherwise.
 * 
 *   `index-types` is assumed to have passed a [[valid-index-types?]] check.
 */
emmy.calculus.indexed.validate_typed_args_BANG_ = (function emmy$calculus$indexed$validate_typed_args_BANG_(index_types,args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(index_types),cljs.core.count(args))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"The number "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(index_types))+" of index-types doesn't match the number "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))+" of arguments."))+"\n"+"(= (count index-types) (count args))")));
}

if(cljs.core.every_QMARK_(cljs.core.true_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (index_type,arg){
return ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index_type,new cljs.core.Symbol(null,"up","up",1370819414,null))) && (emmy.calculus.form_field.oneform_field_QMARK_(arg)))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index_type,new cljs.core.Symbol(null,"down","down",-1089190199,null))) && (emmy.calculus.vector_field.vector_field_QMARK_(arg)))));
}),index_types,args))){
return null;
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"Args do not match index-types 'up must be paired with oneform-fields and 'down with vector fields."+" Args:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0)))+", indices: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([index_types], 0)))))+"\n"+"(every? true? (map (fn [index-type arg] (or (and (= index-type (quote up)) (ff/oneform-field? arg)) (and (= index-type (quote down)) (vf/vector-field? arg)))) index-types args))")));
}
});
emmy.calculus.indexed.indexed__GT_typed = (function emmy$calculus$indexed$indexed__GT_typed(indexed,basis){
var index_types = emmy.calculus.indexed.index_types(indexed);
if(emmy.calculus.indexed.valid_index_types_QMARK_(index_types)){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"Invalid index types: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index_types)))+"\n"+"(valid-index-types? index-types)")));
}

var vector_basis = emmy.calculus.basis.basis__GT_vector_basis(basis);
var oneform_basis = emmy.calculus.basis.basis__GT_oneform_basis(basis);
var n = emmy.calculus.basis.basis__GT_dimension(basis);
var arg_types = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"up","up",1370819414,null),new cljs.core.Keyword("emmy.calculus.form-field","oneform-field","emmy.calculus.form-field/oneform-field",790058519),new cljs.core.Symbol(null,"down","down",-1089190199,null),new cljs.core.Keyword("emmy.calculus.vector-field","vector-field","emmy.calculus.vector-field/vector-field",739612763)], null),index_types);
return emmy.calculus.indexed.with_argument_types((function() { 
var emmy$calculus$indexed$indexed__GT_typed_$_typed__delegate = function (args){
emmy.calculus.indexed.validate_typed_args_BANG_(index_types,args);

var n_seq = cljs.core.reverse(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
var combos = emmy.util.permute.cartesian_product((function (){var iter__5649__auto__ = (function emmy$calculus$indexed$indexed__GT_typed_$_typed_$_iter__72234(s__72235){
return (new cljs.core.LazySeq(null,(function (){
var s__72235__$1 = s__72235;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__72235__$1);
if(temp__5825__auto__){
var s__72235__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__72235__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__72235__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__72237 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__72236 = (0);
while(true){
if((i__72236 < size__5648__auto__)){
var x = cljs.core._nth(c__5647__auto__,i__72236);
cljs.core.chunk_append(b__72237,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (i__72236,x,c__5647__auto__,size__5648__auto__,b__72237,s__72235__$2,temp__5825__auto__,n_seq,vector_basis,oneform_basis,n,arg_types,index_types){
return (function (i,arg){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,((emmy.calculus.vector_field.vector_field_QMARK_(arg))?(function (){var fexpr__72241 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(oneform_basis,i);
return (fexpr__72241.cljs$core$IFn$_invoke$arity$1 ? fexpr__72241.cljs$core$IFn$_invoke$arity$1(arg) : fexpr__72241.call(null,arg));
})():(function (){var G__72242 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(vector_basis,i);
return (arg.cljs$core$IFn$_invoke$arity$1 ? arg.cljs$core$IFn$_invoke$arity$1(G__72242) : arg.call(null,G__72242));
})())], null);
});})(i__72236,x,c__5647__auto__,size__5648__auto__,b__72237,s__72235__$2,temp__5825__auto__,n_seq,vector_basis,oneform_basis,n,arg_types,index_types))
,n_seq,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(x)));

var G__72275 = (i__72236 + (1));
i__72236 = G__72275;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__72237),emmy$calculus$indexed$indexed__GT_typed_$_typed_$_iter__72234(cljs.core.chunk_rest(s__72235__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__72237),null);
}
} else {
var x = cljs.core.first(s__72235__$2);
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (x,s__72235__$2,temp__5825__auto__,n_seq,vector_basis,oneform_basis,n,arg_types,index_types){
return (function (i,arg){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,((emmy.calculus.vector_field.vector_field_QMARK_(arg))?(function (){var fexpr__72243 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(oneform_basis,i);
return (fexpr__72243.cljs$core$IFn$_invoke$arity$1 ? fexpr__72243.cljs$core$IFn$_invoke$arity$1(arg) : fexpr__72243.call(null,arg));
})():(function (){var G__72244 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(vector_basis,i);
return (arg.cljs$core$IFn$_invoke$arity$1 ? arg.cljs$core$IFn$_invoke$arity$1(G__72244) : arg.call(null,G__72244));
})())], null);
});})(x,s__72235__$2,temp__5825__auto__,n_seq,vector_basis,oneform_basis,n,arg_types,index_types))
,n_seq,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(x)),emmy$calculus$indexed$indexed__GT_typed_$_typed_$_iter__72234(cljs.core.rest(s__72235__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(args);
})());
var G__72245 = (function (){var iter__5649__auto__ = (function emmy$calculus$indexed$indexed__GT_typed_$_typed_$_iter__72246(s__72247){
return (new cljs.core.LazySeq(null,(function (){
var s__72247__$1 = s__72247;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__72247__$1);
if(temp__5825__auto__){
var s__72247__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__72247__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__72247__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__72249 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__72248 = (0);
while(true){
if((i__72248 < size__5648__auto__)){
var combo = cljs.core._nth(c__5647__auto__,i__72248);
var indices = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,combo);
var product_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.peek,combo);
cljs.core.chunk_append(b__72249,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(emmy.generic._STAR_,(indexed.cljs$core$IFn$_invoke$arity$1 ? indexed.cljs$core$IFn$_invoke$arity$1(indices) : indexed.call(null,indices)),cljs.core.reverse(product_args)));

var G__72276 = (i__72248 + (1));
i__72248 = G__72276;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__72249),emmy$calculus$indexed$indexed__GT_typed_$_typed_$_iter__72246(cljs.core.chunk_rest(s__72247__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__72249),null);
}
} else {
var combo = cljs.core.first(s__72247__$2);
var indices = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,combo);
var product_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.peek,combo);
return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(emmy.generic._STAR_,(indexed.cljs$core$IFn$_invoke$arity$1 ? indexed.cljs$core$IFn$_invoke$arity$1(indices) : indexed.call(null,indices)),cljs.core.reverse(product_args)),emmy$calculus$indexed$indexed__GT_typed_$_typed_$_iter__72246(cljs.core.rest(s__72247__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(combos);
})();
return (emmy.util.aggregate.generic_sum.cljs$core$IFn$_invoke$arity$1 ? emmy.util.aggregate.generic_sum.cljs$core$IFn$_invoke$arity$1(G__72245) : emmy.util.aggregate.generic_sum.call(null,G__72245));
};
var emmy$calculus$indexed$indexed__GT_typed_$_typed = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__72277__i = 0, G__72277__a = new Array(arguments.length -  0);
while (G__72277__i < G__72277__a.length) {G__72277__a[G__72277__i] = arguments[G__72277__i + 0]; ++G__72277__i;}
  args = new cljs.core.IndexedSeq(G__72277__a,0,null);
} 
return emmy$calculus$indexed$indexed__GT_typed_$_typed__delegate.call(this,args);};
emmy$calculus$indexed$indexed__GT_typed_$_typed.cljs$lang$maxFixedArity = 0;
emmy$calculus$indexed$indexed__GT_typed_$_typed.cljs$lang$applyTo = (function (arglist__72278){
var args = cljs.core.seq(arglist__72278);
return emmy$calculus$indexed$indexed__GT_typed_$_typed__delegate(args);
});
emmy$calculus$indexed$indexed__GT_typed_$_typed.cljs$core$IFn$_invoke$arity$variadic = emmy$calculus$indexed$indexed__GT_typed_$_typed__delegate;
return emmy$calculus$indexed$indexed__GT_typed_$_typed;
})()
,arg_types);
});
emmy.calculus.indexed.outer_product = (function emmy$calculus$indexed$outer_product(T1,T2){
var i1 = emmy.calculus.indexed.index_types(T1);
var i2 = emmy.calculus.indexed.index_types(T2);
if(cljs.core.seq(i1)){
} else {
throw (new Error((""+"Assert failed: "+"No index types registered for T1!"+"\n"+"(seq i1)")));
}

if(cljs.core.seq(i2)){
} else {
throw (new Error((""+"Assert failed: "+"No index types registered for T2!"+"\n"+"(seq i2)")));
}

var map__72250 = cljs.core.frequencies(i1);
var map__72250__$1 = cljs.core.__destructure_map(map__72250);
var nu1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72250__$1,new cljs.core.Symbol(null,"up","up",1370819414,null));
var nd1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72250__$1,new cljs.core.Symbol(null,"down","down",-1089190199,null));
var map__72251 = cljs.core.frequencies(i2);
var map__72251__$1 = cljs.core.__destructure_map(map__72251);
var nu2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72251__$1,new cljs.core.Symbol(null,"up","up",1370819414,null));
var nd2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72251__$1,new cljs.core.Symbol(null,"down","down",-1089190199,null));
var nup = emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2((function (){var or__5162__auto__ = nu1;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (0);
}
})(),(function (){var or__5162__auto__ = nu2;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (0);
}
})());
var ndp = emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2((function (){var or__5162__auto__ = nd1;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (0);
}
})(),(function (){var or__5162__auto__ = nd2;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (0);
}
})());
var np = emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(nup,ndp);
var n1 = emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(nup,nd1);
var product = (function emmy$calculus$indexed$outer_product_$_product(args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),np)){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"Wrong number of args to outer-product: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))+", expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(np)))+"\n"+"(= (count args) np)")));
}

var argv = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,args);
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var G__72254 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(argv,(0),nu1),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(argv,nup,n1));
return (T1.cljs$core$IFn$_invoke$arity$1 ? T1.cljs$core$IFn$_invoke$arity$1(G__72254) : T1.call(null,G__72254));
})(),(function (){var G__72255 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(argv,nu1,nup),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(argv,n1,np));
return (T2.cljs$core$IFn$_invoke$arity$1 ? T2.cljs$core$IFn$_invoke$arity$1(G__72255) : T2.call(null,G__72255));
})());
});
return emmy.calculus.indexed.with_index_types(product,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(nup,new cljs.core.Symbol(null,"up","up",1370819414,null)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(ndp,new cljs.core.Symbol(null,"down","down",-1089190199,null))));
});
var insertv = (function emmy$calculus$indexed$insertv(coll,i,v){
var l = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(coll,(0),i);
var r = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(coll,i);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.conj,l,v,r);
});
emmy.calculus.indexed.contract = (function emmy$calculus$indexed$contract(T,u,d,n){
var i_types = emmy.calculus.indexed.index_types(T);
if(cljs.core.seq(i_types)){
} else {
throw (new Error((""+"Assert failed: "+"No index types registered for T!"+"\n"+"(seq i-types)")));
}

var map__72256 = cljs.core.frequencies(i_types);
var map__72256__$1 = cljs.core.__destructure_map(map__72256);
var nu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72256__$1,new cljs.core.Symbol(null,"up","up",1370819414,null));
var nd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72256__$1,new cljs.core.Symbol(null,"down","down",-1089190199,null));
if(((((0) <= u)) && ((((u < nu)) && (((((0) <= d)) && ((d < nd)))))))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"Contraction indices "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(u)+", "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(d)+"  not in the correct range. "+"Each must be >= 0 and < the respective number of "+"'up and 'down instances in the index types registered with T. "+"These were "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nu)+" and "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nd)+"."))+"\n"+"(and (<= 0 u) (< u nu) (<= 0 d) (< d nd))")));
}

var nuc = (nu - (1));
var ndc = (nd - (1));
return emmy.calculus.indexed.with_index_types((function emmy$calculus$indexed$contract_$_contraction(args){
var argv = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,args);
var G__72257 = (function (i){
var G__72260 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(insertv(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(argv,(0),nuc),u,i),insertv(cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(argv,nuc),d,i));
return (T.cljs$core$IFn$_invoke$arity$1 ? T.cljs$core$IFn$_invoke$arity$1(G__72260) : T.call(null,G__72260));
});
var G__72258 = (0);
var G__72259 = n;
return (emmy.util.aggregate.generic_sum.cljs$core$IFn$_invoke$arity$3 ? emmy.util.aggregate.generic_sum.cljs$core$IFn$_invoke$arity$3(G__72257,G__72258,G__72259) : emmy.util.aggregate.generic_sum.call(null,G__72257,G__72258,G__72259));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(nuc,new cljs.core.Symbol(null,"up","up",1370819414,null)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(ndc,new cljs.core.Symbol(null,"down","down",-1089190199,null))));
});
emmy.calculus.indexed.typed__GT_structure = (function emmy$calculus$indexed$typed__GT_structure(T,basis){
var vector_basis = emmy.calculus.basis.basis__GT_vector_basis(basis);
var oneform_basis = emmy.calculus.basis.basis__GT_oneform_basis(basis);
var lp = (function emmy$calculus$indexed$typed__GT_structure_$_lp(arg_types,argv){
if(cljs.core.empty_QMARK_(arg_types)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(T,argv);
} else {
var vec__72264 = arg_types;
var seq__72265 = cljs.core.seq(vec__72264);
var first__72266 = cljs.core.first(seq__72265);
var seq__72265__$1 = cljs.core.next(seq__72265);
var t = first__72266;
var ts = seq__72265__$1;
return emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (e){
return emmy$calculus$indexed$typed__GT_structure_$_lp(ts,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(argv,e));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(t,new cljs.core.Keyword("emmy.calculus.vector-field","vector-field","emmy.calculus.vector-field/vector-field",739612763)))?vector_basis:((cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(t,new cljs.core.Keyword("emmy.calculus.form-field","oneform-field","emmy.calculus.form-field/oneform-field",790058519)))?oneform_basis:emmy.util.illegal((""+"Invalid argument type: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t], 0)))+". Every arg must be a vector field or oneform field."))
))], 0));
}
});
return lp(emmy.calculus.indexed.argument_types(T),cljs.core.PersistentVector.EMPTY);
});
emmy.calculus.indexed.structure__GT_typed = (function emmy$calculus$indexed$structure__GT_typed(coeff_functions,basis){
var vector_basis = emmy.calculus.basis.basis__GT_vector_basis(basis);
var oneform_basis = emmy.calculus.basis.basis__GT_oneform_basis(basis);
var arg_types = (function (){var cf = coeff_functions;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if((!(emmy.structure.structure_QMARK_(cf)))){
return acc;
} else {
var shape = (function (){var G__72269 = emmy.structure.orientation(cf);
return (emmy.structure.opposite_orientation.cljs$core$IFn$_invoke$arity$1 ? emmy.structure.opposite_orientation.cljs$core$IFn$_invoke$arity$1(G__72269) : emmy.structure.opposite_orientation.call(null,G__72269));
})();
var t = (function (){var G__72270 = shape;
var G__72270__$1 = (((G__72270 instanceof cljs.core.Keyword))?G__72270.fqn:null);
switch (G__72270__$1) {
case "emmy.structure/up":
return new cljs.core.Keyword("emmy.calculus.vector-field","vector-field","emmy.calculus.vector-field/vector-field",739612763);

break;
case "emmy.structure/down":
return new cljs.core.Keyword("emmy.calculus.form-field","oneform-field","emmy.calculus.form-field/oneform-field",790058519);

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__72270__$1))));

}
})();
var G__72280 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cf,(0));
var G__72281 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,t);
cf = G__72280;
acc = G__72281;
continue;
}
break;
}
})();
return emmy.calculus.indexed.with_argument_types((function() { 
var emmy$calculus$indexed$structure__GT_typed_$_indexed_fn__delegate = function (args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),cljs.core.count(arg_types))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"The number of args "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))+" did not match the expected arity "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(arg_types))+". "+"Please supply args corresponding to the expected types "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_types)+"."))+"\n"+"(= (count args) (count arg-types))")));
}

if(cljs.core.every_QMARK_(cljs.core.true_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (arg,arg_type){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(emmy.value.kind(arg),arg_type);
}),args,arg_types))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"Invalid arguments: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(args)+". "+"Please supply args corresponding to the expected types "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_types)+"."))+"\n"+"(every? true? (map (fn [arg arg-type] (isa? (v/kind arg) arg-type)) args arg-types))")));
}

var lp = (function emmy$calculus$indexed$structure__GT_typed_$_indexed_fn_$_lp(args__$1,arg_types__$1){
if(cljs.core.empty_QMARK_(args__$1)){
return emmy.calculus.manifold.one_manifold_function;
} else {
var arg = cljs.core.first(args__$1);
var arg_type = cljs.core.first(arg_types__$1);
if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(arg_type,new cljs.core.Keyword("emmy.calculus.vector-field","vector-field","emmy.calculus.vector-field/vector-field",739612763))){
return emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (etilde){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((etilde.cljs$core$IFn$_invoke$arity$1 ? etilde.cljs$core$IFn$_invoke$arity$1(arg) : etilde.call(null,arg)),emmy$calculus$indexed$structure__GT_typed_$_indexed_fn_$_lp(cljs.core.rest(args__$1),cljs.core.rest(arg_types__$1)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([oneform_basis], 0));
} else {
if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(arg_type,new cljs.core.Keyword("emmy.calculus.form-field","oneform-field","emmy.calculus.form-field/oneform-field",790058519))){
return emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (e){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((arg.cljs$core$IFn$_invoke$arity$1 ? arg.cljs$core$IFn$_invoke$arity$1(e) : arg.call(null,e)),emmy$calculus$indexed$structure__GT_typed_$_indexed_fn_$_lp(cljs.core.rest(args__$1),cljs.core.rest(arg_types__$1)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_basis], 0));
} else {
return null;
}
}
}
});
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(lp(args,arg_types),coeff_functions);
};
var emmy$calculus$indexed$structure__GT_typed_$_indexed_fn = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__72282__i = 0, G__72282__a = new Array(arguments.length -  0);
while (G__72282__i < G__72282__a.length) {G__72282__a[G__72282__i] = arguments[G__72282__i + 0]; ++G__72282__i;}
  args = new cljs.core.IndexedSeq(G__72282__a,0,null);
} 
return emmy$calculus$indexed$structure__GT_typed_$_indexed_fn__delegate.call(this,args);};
emmy$calculus$indexed$structure__GT_typed_$_indexed_fn.cljs$lang$maxFixedArity = 0;
emmy$calculus$indexed$structure__GT_typed_$_indexed_fn.cljs$lang$applyTo = (function (arglist__72283){
var args = cljs.core.seq(arglist__72283);
return emmy$calculus$indexed$structure__GT_typed_$_indexed_fn__delegate(args);
});
emmy$calculus$indexed$structure__GT_typed_$_indexed_fn.cljs$core$IFn$_invoke$arity$variadic = emmy$calculus$indexed$structure__GT_typed_$_indexed_fn__delegate;
return emmy$calculus$indexed$structure__GT_typed_$_indexed_fn;
})()
,arg_types);
});

//# sourceMappingURL=emmy.calculus.indexed.js.map
