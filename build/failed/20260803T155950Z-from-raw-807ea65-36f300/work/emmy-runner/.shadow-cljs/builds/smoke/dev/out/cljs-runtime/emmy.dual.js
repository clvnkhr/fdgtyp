goog.provide('emmy.dual');

/**
 * @interface
 */
emmy.dual.IPerturbed = function(){};

var emmy$dual$IPerturbed$replace_tag$dyn_30848 = (function (this$,old_tag,new_tag){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (emmy.dual.replace_tag[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(this$,old_tag,new_tag) : m__5520__auto__.call(null,this$,old_tag,new_tag));
} else {
var m__5518__auto__ = (emmy.dual.replace_tag["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(this$,old_tag,new_tag) : m__5518__auto__.call(null,this$,old_tag,new_tag));
} else {
throw cljs.core.missing_protocol("IPerturbed.replace-tag",this$);
}
}
});
/**
 * If `this` is perturbed, Returns a similar object with the perturbation
 *  modified by replacing any appearance of `old-tag` with `new-tag`. Else,
 *  return `this`.
 */
emmy.dual.replace_tag = (function emmy$dual$replace_tag(this$,old_tag,new_tag){
if((((!((this$ == null)))) && ((!((this$.emmy$dual$IPerturbed$replace_tag$arity$3 == null)))))){
return this$.emmy$dual$IPerturbed$replace_tag$arity$3(this$,old_tag,new_tag);
} else {
return emmy$dual$IPerturbed$replace_tag$dyn_30848(this$,old_tag,new_tag);
}
});

var emmy$dual$IPerturbed$extract_tangent$dyn_30852 = (function (this$,tag,mode){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (emmy.dual.extract_tangent[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(this$,tag,mode) : m__5520__auto__.call(null,this$,tag,mode));
} else {
var m__5518__auto__ = (emmy.dual.extract_tangent["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(this$,tag,mode) : m__5518__auto__.call(null,this$,tag,mode));
} else {
throw cljs.core.missing_protocol("IPerturbed.extract-tangent",this$);
}
}
});
/**
 * If `this` is perturbed, return the tangent component paired with the
 *  supplied tag. Else, returns `([[emmy.value/zero-like]] this)`.
 */
emmy.dual.extract_tangent = (function emmy$dual$extract_tangent(this$,tag,mode){
if((((!((this$ == null)))) && ((!((this$.emmy$dual$IPerturbed$extract_tangent$arity$3 == null)))))){
return this$.emmy$dual$IPerturbed$extract_tangent$arity$3(this$,tag,mode);
} else {
return emmy$dual$IPerturbed$extract_tangent$dyn_30852(this$,tag,mode);
}
});

var emmy$dual$IPerturbed$extract_id$dyn_30854 = (function (this$,id){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (emmy.dual.extract_id[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(this$,id) : m__5520__auto__.call(null,this$,id));
} else {
var m__5518__auto__ = (emmy.dual.extract_id["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(this$,id) : m__5518__auto__.call(null,this$,id));
} else {
throw cljs.core.missing_protocol("IPerturbed.extract-id",this$);
}
}
});
/**
 * Given an instance of [[Completed]] (or a container type with [[Completed]]
 *  instances at its leaves) and the `id` of an [[emmy.tape/TapeCell]], returns
 *  the partial derivative associated with that [[emmy.tape/TapeCell]]'s
 *  `id`.
 * 
 *  This function is an internal implementation detail of reverse-mode automatic
 *  differentiation.
 */
emmy.dual.extract_id = (function emmy$dual$extract_id(this$,id){
if((((!((this$ == null)))) && ((!((this$.emmy$dual$IPerturbed$extract_id$arity$2 == null)))))){
return this$.emmy$dual$IPerturbed$extract_id$arity$2(this$,id);
} else {
return emmy$dual$IPerturbed$extract_id$dyn_30854(this$,id);
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {emmy.dual.IPerturbed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
emmy.dual.Completed = (function (id__GT_partial,__meta,__extmap,__hash){
this.id__GT_partial = id__GT_partial;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(emmy.dual.Completed.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(emmy.dual.Completed.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k30482,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__30489 = k30482;
var G__30489__$1 = (((G__30489 instanceof cljs.core.Keyword))?G__30489.fqn:null);
switch (G__30489__$1) {
case "id->partial":
return self__.id__GT_partial;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k30482,else__5472__auto__);

}
}));

(emmy.dual.Completed.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__30492){
var vec__30493 = p__30492;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30493,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30493,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(emmy.dual.Completed.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#emmy.dual.Completed{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id->partial","id->partial",1377489341),self__.id__GT_partial],null))], null),self__.__extmap));
}));

(emmy.dual.Completed.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30481){
var self__ = this;
var G__30481__$1 = this;
return (new cljs.core.RecordIter((0),G__30481__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id->partial","id->partial",1377489341)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(emmy.dual.Completed.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(emmy.dual.Completed.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new emmy.dual.Completed(self__.id__GT_partial,self__.__meta,self__.__extmap,self__.__hash));
}));

(emmy.dual.Completed.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(emmy.dual.Completed.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (coll__5466__auto__){
return (804361140 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
})(this__5465__auto____$1);
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(emmy.dual.Completed.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30483,other30484){
var self__ = this;
var this30483__$1 = this;
return (((!((other30484 == null)))) && ((((this30483__$1.constructor === other30484.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30483__$1.id__GT_partial,other30484.id__GT_partial)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30483__$1.__extmap,other30484.__extmap)))))));
}));

(emmy.dual.Completed.prototype.emmy$dual$IPerturbed$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.dual.Completed.prototype.emmy$dual$IPerturbed$replace_tag$arity$3 = (function (_,old,new$){
var self__ = this;
var ___$1 = this;
return (new emmy.dual.Completed(emmy.dual.replace_tag(self__.id__GT_partial,old,new$),null,null,null));
}));

(emmy.dual.Completed.prototype.emmy$dual$IPerturbed$extract_tangent$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return null;

}));

(emmy.dual.Completed.prototype.emmy$dual$IPerturbed$extract_id$arity$2 = (function (_,id){
var self__ = this;
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.id__GT_partial,id,(0));
}));

(emmy.dual.Completed.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id->partial","id->partial",1377489341),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new emmy.dual.Completed(self__.id__GT_partial,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(emmy.dual.Completed.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k30482){
var self__ = this;
var this__5476__auto____$1 = this;
var G__30529 = k30482;
var G__30529__$1 = (((G__30529 instanceof cljs.core.Keyword))?G__30529.fqn:null);
switch (G__30529__$1) {
case "id->partial":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k30482);

}
}));

(emmy.dual.Completed.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__30481){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__30540 = cljs.core.keyword_identical_QMARK_;
var expr__30541 = k__5478__auto__;
if(cljs.core.truth_((pred__30540.cljs$core$IFn$_invoke$arity$2 ? pred__30540.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id->partial","id->partial",1377489341),expr__30541) : pred__30540.call(null,new cljs.core.Keyword(null,"id->partial","id->partial",1377489341),expr__30541)))){
return (new emmy.dual.Completed(G__30481,self__.__meta,self__.__extmap,null));
} else {
return (new emmy.dual.Completed(self__.id__GT_partial,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__30481),null));
}
}));

(emmy.dual.Completed.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"id->partial","id->partial",1377489341),self__.id__GT_partial,null))], null),self__.__extmap));
}));

(emmy.dual.Completed.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__30481){
var self__ = this;
var this__5468__auto____$1 = this;
return (new emmy.dual.Completed(self__.id__GT_partial,G__30481,self__.__extmap,self__.__hash));
}));

(emmy.dual.Completed.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5475__auto__,(0)),cljs.core._nth(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(emmy.dual.Completed.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id->partial","id->partial",-1276946428,null)], null);
}));

(emmy.dual.Completed.cljs$lang$type = true);

(emmy.dual.Completed.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"emmy.dual/Completed",null,(1),null));
}));

(emmy.dual.Completed.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"emmy.dual/Completed");
}));

/**
 * Positional factory function for emmy.dual/Completed.
 */
emmy.dual.__GT_Completed = (function emmy$dual$__GT_Completed(id__GT_partial){
return (new emmy.dual.Completed(id__GT_partial,null,null,null));
});

/**
 * Factory function for emmy.dual/Completed, taking a map of keywords to field values.
 */
emmy.dual.map__GT_Completed = (function emmy$dual$map__GT_Completed(G__30486){
var extmap__5511__auto__ = (function (){var G__30558 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__30486,new cljs.core.Keyword(null,"id->partial","id->partial",1377489341));
if(cljs.core.record_QMARK_(G__30486)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__30558);
} else {
return G__30558;
}
})();
return (new emmy.dual.Completed(new cljs.core.Keyword(null,"id->partial","id->partial",1377489341).cljs$core$IFn$_invoke$arity$1(G__30486),null,cljs.core.not_empty(extmap__5511__auto__),null));
});

emmy.dual.FORWARD_MODE = new cljs.core.Keyword("emmy.dual","forward","emmy.dual/forward",1374847395);
emmy.dual.REVERSE_MODE = new cljs.core.Keyword("emmy.dual","reverse","emmy.dual/reverse",-1140830856);
emmy.dual.REVERSE_EMPTY = emmy.dual.__GT_Completed(cljs.core.PersistentArrayMap.EMPTY);
emmy.generic.zero_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.dual.Completed], null),(function (_){
return false;
}));
emmy.generic.one_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.dual.Completed], null),(function (_){
return false;
}));
emmy.generic.identity_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.dual.Completed], null),(function (_){
return false;
}));
(emmy.dual.IPerturbed["null"] = true);

(emmy.dual.replace_tag["null"] = (function (_,___$1,___$2){
return null;
}));

(emmy.dual.extract_id["null"] = (function (_,___$1){
return (0);
}));

(emmy.dual.extract_tangent["null"] = (function (_,___$1,mode){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword("emmy.dual","forward","emmy.dual/forward",1374847395))){
return (0);
} else {
return emmy.dual.REVERSE_EMPTY;
}
}));

(emmy.dual.IPerturbed["_"] = true);

(emmy.dual.replace_tag["_"] = (function (this$,_,___$1){
return this$;
}));

(emmy.dual.extract_id["_"] = (function (_,___$1){
return (0);
}));

(emmy.dual.extract_tangent["_"] = (function (this$,_,mode){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword("emmy.dual","forward","emmy.dual/forward",1374847395))){
return emmy.generic.zero_like.cljs$core$IFn$_invoke$arity$1(this$);
} else {
return emmy.dual.REVERSE_EMPTY;
}
}));
var next_tag_30884 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
/**
 * Returns a new, unique tag for use by a perturbation in an automatic
 *   differentiation pass.
 */
emmy.dual.fresh_tag = (function emmy$dual$fresh_tag(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(next_tag_30884,cljs.core.inc);
});
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("emmy.dual","dual","emmy.dual/dual",-433931216),new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514));


/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {emmy.dual.IPerturbed}
 * @implements {emmy.value.IKind}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IComparable}
*/
emmy.dual.Dual = (function (tag,primal,tangent){
this.tag = tag;
this.primal = primal;
this.tangent = tangent;
this.cljs$lang$protocol_mask$partition0$ = 2149580800;
this.cljs$lang$protocol_mask$partition1$ = 2048;
});
(emmy.dual.Dual.prototype.emmy$dual$IPerturbed$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.dual.Dual.prototype.emmy$dual$IPerturbed$replace_tag$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,self__.tag)){
return (new emmy.dual.Dual(new$,self__.primal,self__.tangent));
} else {
return this$__$1;
}
}));

(emmy.dual.Dual.prototype.emmy$dual$IPerturbed$extract_tangent$arity$3 = (function (_,t,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword("emmy.dual","forward","emmy.dual/forward",1374847395))){
return emmy.dual.REVERSE_EMPTY;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,self__.tag)){
return self__.tangent;
} else {
return (0);

}
}
}));

(emmy.dual.Dual.prototype.emmy$value$IKind$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.dual.Dual.prototype.emmy$value$IKind$kind$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword("emmy.dual","dual","emmy.dual/dual",-433931216);
}));

(emmy.dual.Dual.prototype.valueOf = (function (){
var self__ = this;
var _ = this;
return self__.primal.valueOf();
}));

(emmy.dual.Dual.prototype.toString = (function (){
var self__ = this;
var _ = this;
return (""+"#emmy.dual.Dual"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag,new cljs.core.Keyword(null,"primal","primal",-1668271542),self__.primal,new cljs.core.Keyword(null,"tangent","tangent",720915821),self__.tangent], null)));
}));

(emmy.dual.Dual.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (a,b){
var self__ = this;
var a__$1 = this;
return (emmy.dual.equiv.cljs$core$IFn$_invoke$arity$2 ? emmy.dual.equiv.cljs$core$IFn$_invoke$arity$2(a__$1,b) : emmy.dual.equiv.call(null,a__$1,b));
}));

(emmy.dual.Dual.prototype.cljs$core$IComparable$_compare$arity$2 = (function (a,b){
var self__ = this;
var a__$1 = this;
return (emmy.dual.compare.cljs$core$IFn$_invoke$arity$2 ? emmy.dual.compare.cljs$core$IFn$_invoke$arity$2(a__$1,b) : emmy.dual.compare.call(null,a__$1,b));
}));

(emmy.dual.Dual.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,_){
var self__ = this;
var x__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x__$1.toString()], 0));
}));

(emmy.dual.Dual.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"primal","primal",-27740015,null),new cljs.core.Symbol(null,"tangent","tangent",-1933519948,null)], null);
}));

(emmy.dual.Dual.cljs$lang$type = true);

(emmy.dual.Dual.cljs$lang$ctorStr = "emmy.dual/Dual");

(emmy.dual.Dual.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"emmy.dual/Dual");
}));

/**
 * Positional factory function for emmy.dual/Dual.
 */
emmy.dual.__GT_Dual = (function emmy$dual$__GT_Dual(tag,primal,tangent){
return (new emmy.dual.Dual(tag,primal,tangent));
});

/**
 * Returns true if the supplied object is an instance of [[Dual]], false
 *   otherwise.
 */
emmy.dual.dual_QMARK_ = (function emmy$dual$dual_QMARK_(dx){
return (dx instanceof emmy.dual.Dual);
});
/**
 * If `dx` is an instance of [[Dual]] returns the `tag` component. Else, acts
 *   as nil.
 */
emmy.dual.tag = (function emmy$dual$tag(dx){
if(emmy.dual.dual_QMARK_(dx)){
return dx.tag;
} else {
return null;
}
});
/**
 * Returns a pair of the primal and tangent components of the supplied `dx`, with
 *   respect to the supplied `tag`. See the docs for [[primal]]
 *   and [[tangent]] for more details.
 * 
 *   [[primal-tangent-pair]] is equivalent to
 * 
 *   `[([[primal]] dx tag) ([[tangent]] dx tag)]`
 * 
 *   but slightly more efficient if you need both.
 */
emmy.dual.primal_tangent_pair = (function emmy$dual$primal_tangent_pair(var_args){
var G__30640 = arguments.length;
switch (G__30640) {
case 1:
return emmy.dual.primal_tangent_pair.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.dual.primal_tangent_pair.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.dual.primal_tangent_pair.cljs$core$IFn$_invoke$arity$1 = (function (dx){
if(emmy.dual.dual_QMARK_(dx)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx.primal,dx.tangent], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx,(0)], null);
}
}));

(emmy.dual.primal_tangent_pair.cljs$core$IFn$_invoke$arity$2 = (function (dx,t){
if(((emmy.dual.dual_QMARK_(dx)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,emmy.dual.tag(dx))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx.primal,dx.tangent], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx,(0)], null);
}
}));

(emmy.dual.primal_tangent_pair.cljs$lang$maxFixedArity = 2);

/**
 * If `dx` is an instance of [[Dual]] returns the `primal` component. Else, acts
 *   as identity.
 * 
 *   If the optional `tag` is supplied, [[primal-part]] acts as identity
 *   for [[Dual]] instances with a non-matching tag.
 */
emmy.dual.primal = (function emmy$dual$primal(var_args){
var G__30660 = arguments.length;
switch (G__30660) {
case 1:
return emmy.dual.primal.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.dual.primal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.dual.primal.cljs$core$IFn$_invoke$arity$1 = (function (dx){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(emmy.dual.primal_tangent_pair.cljs$core$IFn$_invoke$arity$1(dx),(0));
}));

(emmy.dual.primal.cljs$core$IFn$_invoke$arity$2 = (function (dx,tag){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(emmy.dual.primal_tangent_pair.cljs$core$IFn$_invoke$arity$2(dx,tag),(0));
}));

(emmy.dual.primal.cljs$lang$maxFixedArity = 2);

/**
 * If `dx` is an instance of [[Dual]] returns the `tangent` component. Else, returns 0.
 * 
 *   If the optional `tag` is supplied, [[primal-part]] returns 0 for [[Dual]]
 *   instances with a non-matching tag.
 */
emmy.dual.tangent = (function emmy$dual$tangent(var_args){
var G__30678 = arguments.length;
switch (G__30678) {
case 1:
return emmy.dual.tangent.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.dual.tangent.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.dual.tangent.cljs$core$IFn$_invoke$arity$1 = (function (dx){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(emmy.dual.primal_tangent_pair.cljs$core$IFn$_invoke$arity$1(dx),(1));
}));

(emmy.dual.tangent.cljs$core$IFn$_invoke$arity$2 = (function (dx,tag){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(emmy.dual.primal_tangent_pair.cljs$core$IFn$_invoke$arity$2(dx,tag),(1));
}));

(emmy.dual.tangent.cljs$lang$maxFixedArity = 2);

/**
 * Returns a new [[Dual]] object with the supplied `primal` and `tangent`
 *   components, and the supplied internal `tag` that this [[Dual]] will
 *   carry around to prevent perturbation confusion.
 * 
 *   If the `tangent` component is `0`, acts as identity on `primal`. `tangent`
 *   defaults to 1.
 * 
 *   `tag` defaults to a side-effecting call to [[fresh-tag]]; you can retrieve
 *   this unknown tag by calling [[tag]] on the returned [[Dual]].
 */
emmy.dual.bundle_element = (function emmy$dual$bundle_element(var_args){
var G__30694 = arguments.length;
switch (G__30694) {
case 1:
return emmy.dual.bundle_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.dual.bundle_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return emmy.dual.bundle_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.dual.bundle_element.cljs$core$IFn$_invoke$arity$1 = (function (primal){
return emmy.dual.bundle_element.cljs$core$IFn$_invoke$arity$3(primal,(1),emmy.dual.fresh_tag());
}));

(emmy.dual.bundle_element.cljs$core$IFn$_invoke$arity$2 = (function (primal,tag){
return emmy.dual.bundle_element.cljs$core$IFn$_invoke$arity$3(primal,(1),tag);
}));

(emmy.dual.bundle_element.cljs$core$IFn$_invoke$arity$3 = (function (primal,tangent,tag){
if(emmy.value.scalar_QMARK_(primal)){
} else {
throw (new Error("Assert failed: (v/scalar? primal)"));
}

if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(tangent))){
return primal;
} else {
return emmy.dual.__GT_Dual(tag,primal,tangent);
}
}));

(emmy.dual.bundle_element.cljs$lang$maxFixedArity = 3);

emmy.dual._STAR_active_tags_STAR_ = cljs.core.List.EMPTY;
/**
 * Like `apply`, but conj-es `tag` onto the dynamic variable [[*active-tags*]]
 *   inside the scope of `f`.
 * 
 *   Returns the result of applying `f` to `args`.
 */
emmy.dual.with_active_tag = (function emmy$dual$with_active_tag(tag,f,args){
var _STAR_active_tags_STAR__orig_val__30709 = emmy.dual._STAR_active_tags_STAR_;
var _STAR_active_tags_STAR__temp_val__30710 = cljs.core.cons(tag,emmy.dual._STAR_active_tags_STAR_);
(emmy.dual._STAR_active_tags_STAR_ = _STAR_active_tags_STAR__temp_val__30710);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}finally {(emmy.dual._STAR_active_tags_STAR_ = _STAR_active_tags_STAR__orig_val__30709);
}});
/**
 * Returns true if `tag` is an element of [[*active-tags*]] (and therefore pending
 *   for extraction by some nested derivative), false otherwise.
 */
emmy.dual.tag_active_QMARK_ = (function emmy$dual$tag_active_QMARK_(tag){
return cljs.core.boolean$(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([tag]),emmy.dual._STAR_active_tags_STAR_));
});
/**
 * Returns true if the supplied instance has a [[primal]] part that responds true
 *   to [[emmy.value/one?]], and zero coefficients on its tangent component; false
 *   otherwise.
 * 
 *   NOTE: This means that [[one?]] will not do what you expect as a conditional
 *   inside some function. If you want to branch inside some function you're taking
 *   the derivative of, prefer `(= 1 dx)`. This will only look at
 *   the [[primal]] and ignore the value of the [[tangent]].
 */
emmy.dual.one_QMARK_ = (function emmy$dual$one_QMARK_(dx){
var vec__30727 = emmy.dual.primal_tangent_pair.cljs$core$IFn$_invoke$arity$1(dx);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30727,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30727,(1),null);
var and__5160__auto__ = emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(p);
if(cljs.core.truth_(and__5160__auto__)){
return emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(t);
} else {
return and__5160__auto__;
}
});
/**
 * Returns true if the supplied instance has a [[primal]] that responds true
 *   to [[emmy.value/identity?]], and a zero [[tangent]], false otherwise.
 * 
 *   NOTE: This means that [[identity?]] will not do what you expect as a
 *   conditional inside some function. If you want to branch inside some function
 *   you're taking the derivative of, prefer `(= <identity element> dx)`. This will
 *   only look at the [[primal]] and ignore the value of the [[tangent]].
 */
emmy.dual.identity_QMARK_ = (function emmy$dual$identity_QMARK_(dx){
var vec__30733 = emmy.dual.primal_tangent_pair.cljs$core$IFn$_invoke$arity$1(dx);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30733,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30733,(1),null);
var and__5160__auto__ = emmy.generic.identity_QMARK_.cljs$core$IFn$_invoke$arity$1(p);
if(cljs.core.truth_(and__5160__auto__)){
return emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(t);
} else {
return and__5160__auto__;
}
});
/**
 * For non-differentials, this is identical to [[emmy.value/=]].
 *   For [[Dual]] instances, equality acts on tangent components too.
 * 
 *   If you want to ignore the tangent components, use [[equiv]].
 */
emmy.dual.eq = (function emmy$dual$eq(var_args){
var G__30755 = arguments.length;
switch (G__30755) {
case 1:
return emmy.dual.eq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.dual.eq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___30936 = arguments.length;
var i__5898__auto___30937 = (0);
while(true){
if((i__5898__auto___30937 < len__5897__auto___30936)){
args_arr__5922__auto__.push((arguments[i__5898__auto___30937]));

var G__30938 = (i__5898__auto___30937 + (1));
i__5898__auto___30937 = G__30938;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((2) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((2)),(0),null)):null);
return emmy.dual.eq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5923__auto__);

}
});

(emmy.dual.eq.cljs$core$IFn$_invoke$arity$1 = (function (_){
return true;
}));

(emmy.dual.eq.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.dual.primal_tangent_pair.cljs$core$IFn$_invoke$arity$1(a),emmy.dual.primal_tangent_pair.cljs$core$IFn$_invoke$arity$1(b));
}));

(emmy.dual.eq.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
while(true){
if(cljs.core.truth_(emmy.dual.eq.cljs$core$IFn$_invoke$arity$2(a,b))){
if(cljs.core.next(more)){
var G__30943 = b;
var G__30944 = cljs.core.first(more);
var G__30945 = cljs.core.next(more);
a = G__30943;
b = G__30944;
more = G__30945;
continue;
} else {
return emmy.dual.eq.cljs$core$IFn$_invoke$arity$2(b,cljs.core.first(more));
}
} else {
return false;
}
break;
}
}));

/** @this {Function} */
(emmy.dual.eq.cljs$lang$applyTo = (function (seq30742){
var G__30745 = cljs.core.first(seq30742);
var seq30742__$1 = cljs.core.next(seq30742);
var G__30746 = cljs.core.first(seq30742__$1);
var seq30742__$2 = cljs.core.next(seq30742__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30745,G__30746,seq30742__$2);
}));

(emmy.dual.eq.cljs$lang$maxFixedArity = (2));

/**
 * Comparator that compares [[Dual]] instances with each other or
 *   non-differentials using all tangent terms each instance. Matches the response
 *   of [[eq]].
 * 
 *   Acts as [[emmy.value/compare]] for non-differentials.
 */
emmy.dual.compare_full = (function emmy$dual$compare_full(a,b){
return emmy.value.compare(emmy.dual.primal_tangent_pair.cljs$core$IFn$_invoke$arity$1(a),emmy.dual.primal_tangent_pair.cljs$core$IFn$_invoke$arity$1(b));
});
/**
 * Returns true if all of the supplied objects have equal [[primal]]s, false
 *   otherwise.
 * 
 *   Use [[equiv]] if you want to compare scalars with
 *   [[Dual]]s and ignore the tangent. If you _do_ want to take the tangent into
 *   account, prefer [[eq]].
 */
emmy.dual.equiv = (function emmy$dual$equiv(var_args){
var G__30787 = arguments.length;
switch (G__30787) {
case 1:
return emmy.dual.equiv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.dual.equiv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___30951 = arguments.length;
var i__5898__auto___30952 = (0);
while(true){
if((i__5898__auto___30952 < len__5897__auto___30951)){
args_arr__5922__auto__.push((arguments[i__5898__auto___30952]));

var G__30953 = (i__5898__auto___30952 + (1));
i__5898__auto___30952 = G__30953;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((2) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((2)),(0),null)):null);
return emmy.dual.equiv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5923__auto__);

}
});

(emmy.dual.equiv.cljs$core$IFn$_invoke$arity$1 = (function (_){
return true;
}));

(emmy.dual.equiv.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.dual.primal.cljs$core$IFn$_invoke$arity$1(a),emmy.dual.primal.cljs$core$IFn$_invoke$arity$1(b));
}));

(emmy.dual.equiv.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
while(true){
if(cljs.core.truth_(emmy.dual.equiv.cljs$core$IFn$_invoke$arity$2(a,b))){
if(cljs.core.next(more)){
var G__30957 = b;
var G__30958 = cljs.core.first(more);
var G__30959 = cljs.core.next(more);
a = G__30957;
b = G__30958;
more = G__30959;
continue;
} else {
return emmy.dual.equiv.cljs$core$IFn$_invoke$arity$2(b,cljs.core.first(more));
}
} else {
return false;
}
break;
}
}));

/** @this {Function} */
(emmy.dual.equiv.cljs$lang$applyTo = (function (seq30780){
var G__30781 = cljs.core.first(seq30780);
var seq30780__$1 = cljs.core.next(seq30780);
var G__30782 = cljs.core.first(seq30780__$1);
var seq30780__$2 = cljs.core.next(seq30780__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30781,G__30782,seq30780__$2);
}));

(emmy.dual.equiv.cljs$lang$maxFixedArity = (2));

/**
 * Comparator that compares [[Dual]] instances with each other or
 *   non-differentials using only the [[primal]] of each instance. Matches the
 *   response of [[equiv]].
 * 
 *   Acts as [[emmy.value/compare]] for non-differentials.
 */
emmy.dual.compare = (function emmy$dual$compare(a,b){
return emmy.value.compare(emmy.dual.primal.cljs$core$IFn$_invoke$arity$1(a),emmy.dual.primal.cljs$core$IFn$_invoke$arity$1(b));
});
/**
 * Returns a single-argument function of that, when called with an argument `x`,
 *   returns the derivative of `f` at `x` using forward-mode automatic
 *   differentiation.
 * 
 *   For numerical differentiation,
 *   see [[emmy.numerical.derivative/D-numeric]].
 * 
 *   `f` must be built out of generic operations that know how to handle [[Dual]]
 *   inputs in addition to any types that a normal `(f x)` call would present. This
 *   restriction does _not_ apply to operations like putting `x` into a container
 *   or destructuring; just primitive function calls.
 */
emmy.dual.derivative = (function emmy$dual$derivative(f){
return (function (x){
var tag = emmy.dual.fresh_tag();
var lifted = emmy.dual.bundle_element.cljs$core$IFn$_invoke$arity$3(x,(1),tag);
return emmy.dual.extract_tangent(emmy.dual.with_active_tag(tag,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lifted], null)),tag,new cljs.core.Keyword("emmy.dual","forward","emmy.dual/forward",1374847395));
});
});
emmy.generic.zero_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.dual","dual","emmy.dual/dual",-433931216)], null),(function (_){
return (0);
}));
emmy.generic.one_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.dual","dual","emmy.dual/dual",-433931216)], null),(function (_){
return (1);
}));
emmy.generic.identity_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.dual","dual","emmy.dual/dual",-433931216)], null),(function (_){
return (1);
}));
emmy.generic.freeze.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.dual","dual","emmy.dual/dual",-433931216)], null),(function (d){
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"Dual","Dual",-234231465,null),null,(1),null)),(new cljs.core.List(null,emmy.dual.tag(d),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(emmy.dual.primal.cljs$core$IFn$_invoke$arity$1(d)),null,(1),null)),(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(emmy.dual.tangent.cljs$core$IFn$_invoke$arity$1(d)),null,(1),null))], 0)))));
}));
emmy.generic.simplify.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.dual","dual","emmy.dual/dual",-433931216)], null),(function (d){
return (new emmy.dual.Dual(d.tag,emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(d.primal),emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(d.tangent)));
}));

//# sourceMappingURL=emmy.dual.js.map
