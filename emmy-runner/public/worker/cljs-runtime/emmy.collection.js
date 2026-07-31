import "./cljs_env.js";
import "./cljs.core.js";
import "./clojure.set.js";
import "./emmy.dual.js";
import "./emmy.function.js";
import "./emmy.generic.js";
import "./emmy.util.js";
import "./emmy.value.js";
goog.provide('emmy.collection');
emmy.generic.simplify.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector], null),(function (v){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(emmy.generic.simplify,v);
}));
emmy.generic.zero_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector], null),(function (v){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(emmy.generic.zero_like,v);
}));
emmy.generic.exact_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector], null),(function (v){
return cljs.core.every_QMARK_(emmy.generic.exact_QMARK_,v);
}));
emmy.generic.freeze.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector], null),(function (v){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"up","up",1370819414,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(emmy.generic.freeze,v))));
}));
(cljs.core.PersistentVector.prototype.emmy$value$IKind$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.emmy$value$IKind$kind$arity$1 = (function (v){
var v__$1 = this;
return cljs.core.type(v__$1);
}));

(cljs.core.PersistentVector.prototype.emmy$function$IArity$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.emmy$function$IArity$arity$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276),(1),(2)], null);
}));

(cljs.core.PersistentVector.prototype.emmy$dual$IPerturbed$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.emmy$dual$IPerturbed$replace_tag$arity$3 = (function (v,old,new$){
var v__$1 = this;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__67397_SHARP_){
return emmy.dual.replace_tag(p1__67397_SHARP_,old,new$);
}),v__$1);
}));

(cljs.core.PersistentVector.prototype.emmy$dual$IPerturbed$extract_tangent$arity$3 = (function (v,tag,mode){
var v__$1 = this;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__67398_SHARP_){
return emmy.dual.extract_tangent(p1__67398_SHARP_,tag,mode);
}),v__$1);
}));

(cljs.core.PersistentVector.prototype.emmy$dual$IPerturbed$extract_id$arity$2 = (function (v,id){
var v__$1 = this;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__67399_SHARP_){
return emmy.dual.extract_id(p1__67399_SHARP_,id);
}),v__$1);
}));
emmy.generic.simplify.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","seq","emmy.value/seq",2124022964)], null),(function (a){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(emmy.generic.simplify,a);
}));
var seq__67403_67536 = cljs.core.seq(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Cons,cljs.core.IndexedSeq,cljs.core.LazySeq,cljs.core.List,cljs.core.Range,cljs.core.IntegerRange], null));
var chunk__67404_67537 = null;
var count__67405_67538 = (0);
var i__67406_67539 = (0);
while(true){
if((i__67406_67539 < count__67405_67538)){
var klass_67544 = chunk__67404_67537.cljs$core$IIndexed$_nth$arity$2(null,i__67406_67539);
emmy.generic.zero_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klass_67544], null),((function (seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,klass_67544){
return (function (_){
return false;
});})(seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,klass_67544))
);

emmy.generic.one_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klass_67544], null),((function (seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,klass_67544){
return (function (_){
return false;
});})(seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,klass_67544))
);

emmy.generic.identity_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klass_67544], null),((function (seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,klass_67544){
return (function (_){
return false;
});})(seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,klass_67544))
);

emmy.generic.zero_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klass_67544], null),((function (seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,klass_67544){
return (function (xs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(emmy.generic.zero_like,xs);
});})(seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,klass_67544))
);

emmy.generic.exact_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klass_67544], null),((function (seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,klass_67544){
return (function (xs){
return cljs.core.every_QMARK_(emmy.generic.exact_QMARK_,xs);
});})(seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,klass_67544))
);

emmy.generic.freeze.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klass_67544], null),((function (seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,klass_67544){
return (function (xs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(emmy.generic.freeze,xs);
});})(seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,klass_67544))
);

(klass_67544.prototype.emmy$value$IKind$ = cljs.core.PROTOCOL_SENTINEL);

(klass_67544.prototype.emmy$value$IKind$kind$arity$1 = ((function (seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,klass_67544){
return (function (xs){
var xs__$1 = this;
return cljs.core.type(xs__$1);
});})(seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,klass_67544))
);

(klass_67544.prototype.emmy$dual$IPerturbed$ = cljs.core.PROTOCOL_SENTINEL);

(klass_67544.prototype.emmy$dual$IPerturbed$replace_tag$arity$3 = ((function (seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,klass_67544){
return (function (xs,old,new$){
var xs__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,xs__$1,klass_67544){
return (function (p1__67400_SHARP_){
return emmy.dual.replace_tag(p1__67400_SHARP_,old,new$);
});})(seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,xs__$1,klass_67544))
,xs__$1);
});})(seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,klass_67544))
);

(klass_67544.prototype.emmy$dual$IPerturbed$extract_tangent$arity$3 = ((function (seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,klass_67544){
return (function (xs,tag,mode){
var xs__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,xs__$1,klass_67544){
return (function (p1__67401_SHARP_){
return emmy.dual.extract_tangent(p1__67401_SHARP_,tag,mode);
});})(seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,xs__$1,klass_67544))
,xs__$1);
});})(seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,klass_67544))
);

(klass_67544.prototype.emmy$dual$IPerturbed$extract_id$arity$2 = ((function (seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,klass_67544){
return (function (xs,id){
var xs__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,xs__$1,klass_67544){
return (function (p1__67402_SHARP_){
return emmy.dual.extract_id(p1__67402_SHARP_,id);
});})(seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,xs__$1,klass_67544))
,xs__$1);
});})(seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,klass_67544))
);


var G__67549 = seq__67403_67536;
var G__67550 = chunk__67404_67537;
var G__67551 = count__67405_67538;
var G__67552 = (i__67406_67539 + (1));
seq__67403_67536 = G__67549;
chunk__67404_67537 = G__67550;
count__67405_67538 = G__67551;
i__67406_67539 = G__67552;
continue;
} else {
var temp__5825__auto___67553 = cljs.core.seq(seq__67403_67536);
if(temp__5825__auto___67553){
var seq__67403_67554__$1 = temp__5825__auto___67553;
if(cljs.core.chunked_seq_QMARK_(seq__67403_67554__$1)){
var c__5694__auto___67555 = cljs.core.chunk_first(seq__67403_67554__$1);
var G__67556 = cljs.core.chunk_rest(seq__67403_67554__$1);
var G__67557 = c__5694__auto___67555;
var G__67558 = cljs.core.count(c__5694__auto___67555);
var G__67559 = (0);
seq__67403_67536 = G__67556;
chunk__67404_67537 = G__67557;
count__67405_67538 = G__67558;
i__67406_67539 = G__67559;
continue;
} else {
var klass_67560 = cljs.core.first(seq__67403_67554__$1);
emmy.generic.zero_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klass_67560], null),((function (seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,klass_67560,seq__67403_67554__$1,temp__5825__auto___67553){
return (function (_){
return false;
});})(seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,klass_67560,seq__67403_67554__$1,temp__5825__auto___67553))
);

emmy.generic.one_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klass_67560], null),((function (seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,klass_67560,seq__67403_67554__$1,temp__5825__auto___67553){
return (function (_){
return false;
});})(seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,klass_67560,seq__67403_67554__$1,temp__5825__auto___67553))
);

emmy.generic.identity_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klass_67560], null),((function (seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,klass_67560,seq__67403_67554__$1,temp__5825__auto___67553){
return (function (_){
return false;
});})(seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,klass_67560,seq__67403_67554__$1,temp__5825__auto___67553))
);

emmy.generic.zero_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klass_67560], null),((function (seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,klass_67560,seq__67403_67554__$1,temp__5825__auto___67553){
return (function (xs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(emmy.generic.zero_like,xs);
});})(seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,klass_67560,seq__67403_67554__$1,temp__5825__auto___67553))
);

emmy.generic.exact_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klass_67560], null),((function (seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,klass_67560,seq__67403_67554__$1,temp__5825__auto___67553){
return (function (xs){
return cljs.core.every_QMARK_(emmy.generic.exact_QMARK_,xs);
});})(seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,klass_67560,seq__67403_67554__$1,temp__5825__auto___67553))
);

emmy.generic.freeze.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klass_67560], null),((function (seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,klass_67560,seq__67403_67554__$1,temp__5825__auto___67553){
return (function (xs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(emmy.generic.freeze,xs);
});})(seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,klass_67560,seq__67403_67554__$1,temp__5825__auto___67553))
);

(klass_67560.prototype.emmy$value$IKind$ = cljs.core.PROTOCOL_SENTINEL);

(klass_67560.prototype.emmy$value$IKind$kind$arity$1 = ((function (seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,klass_67560,seq__67403_67554__$1,temp__5825__auto___67553){
return (function (xs){
var xs__$1 = this;
return cljs.core.type(xs__$1);
});})(seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,klass_67560,seq__67403_67554__$1,temp__5825__auto___67553))
);

(klass_67560.prototype.emmy$dual$IPerturbed$ = cljs.core.PROTOCOL_SENTINEL);

(klass_67560.prototype.emmy$dual$IPerturbed$replace_tag$arity$3 = ((function (seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,klass_67560,seq__67403_67554__$1,temp__5825__auto___67553){
return (function (xs,old,new$){
var xs__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,xs__$1,klass_67560,seq__67403_67554__$1,temp__5825__auto___67553){
return (function (p1__67400_SHARP_){
return emmy.dual.replace_tag(p1__67400_SHARP_,old,new$);
});})(seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,xs__$1,klass_67560,seq__67403_67554__$1,temp__5825__auto___67553))
,xs__$1);
});})(seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,klass_67560,seq__67403_67554__$1,temp__5825__auto___67553))
);

(klass_67560.prototype.emmy$dual$IPerturbed$extract_tangent$arity$3 = ((function (seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,klass_67560,seq__67403_67554__$1,temp__5825__auto___67553){
return (function (xs,tag,mode){
var xs__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,xs__$1,klass_67560,seq__67403_67554__$1,temp__5825__auto___67553){
return (function (p1__67401_SHARP_){
return emmy.dual.extract_tangent(p1__67401_SHARP_,tag,mode);
});})(seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,xs__$1,klass_67560,seq__67403_67554__$1,temp__5825__auto___67553))
,xs__$1);
});})(seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,klass_67560,seq__67403_67554__$1,temp__5825__auto___67553))
);

(klass_67560.prototype.emmy$dual$IPerturbed$extract_id$arity$2 = ((function (seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,klass_67560,seq__67403_67554__$1,temp__5825__auto___67553){
return (function (xs,id){
var xs__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,xs__$1,klass_67560,seq__67403_67554__$1,temp__5825__auto___67553){
return (function (p1__67402_SHARP_){
return emmy.dual.extract_id(p1__67402_SHARP_,id);
});})(seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,xs__$1,klass_67560,seq__67403_67554__$1,temp__5825__auto___67553))
,xs__$1);
});})(seq__67403_67536,chunk__67404_67537,count__67405_67538,i__67406_67539,klass_67560,seq__67403_67554__$1,temp__5825__auto___67553))
);


var G__67567 = cljs.core.next(seq__67403_67554__$1);
var G__67568 = null;
var G__67569 = (0);
var G__67570 = (0);
seq__67403_67536 = G__67567;
chunk__67404_67537 = G__67568;
count__67405_67538 = G__67569;
i__67406_67539 = G__67570;
continue;
}
} else {
}
}
break;
}
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashMap,new cljs.core.Keyword("emmy.collection","map","emmy.collection/map",-120400283));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap,new cljs.core.Keyword("emmy.collection","map","emmy.collection/map",-120400283));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentTreeMap,new cljs.core.Keyword("emmy.collection","map","emmy.collection/map",-120400283));
emmy.generic.negate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.collection","map","emmy.collection/map",-120400283)], null),(function (m){
return emmy.util.map_vals(emmy.generic.negate,m);
}));
emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.collection","map","emmy.collection/map",-120400283),new cljs.core.Keyword("emmy.collection","map","emmy.collection/map",-120400283)], null),(function (a,b){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(emmy.generic.add,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
}));
emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.collection","map","emmy.collection/map",-120400283),new cljs.core.Keyword("emmy.collection","map","emmy.collection/map",-120400283)], null),(function (a,b){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(emmy.generic.add,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,emmy.util.map_vals(emmy.generic.negate,b)], 0));
}));
emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.collection","map","emmy.collection/map",-120400283),new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514)], null),(function (m,x){
return emmy.util.map_vals((function (p1__67450_SHARP_){
return emmy.generic.mul.cljs$core$IFn$_invoke$arity$2(p1__67450_SHARP_,x);
}),m);
}));
emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514),new cljs.core.Keyword("emmy.collection","map","emmy.collection/map",-120400283)], null),(function (x,m){
return emmy.util.map_vals((function (p1__67451_SHARP_){
return emmy.generic.mul.cljs$core$IFn$_invoke$arity$2(x,p1__67451_SHARP_);
}),m);
}));
emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.collection","map","emmy.collection/map",-120400283),new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514)], null),(function (m,x){
return emmy.util.map_vals((function (p1__67452_SHARP_){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(p1__67452_SHARP_,x);
}),m);
}));
emmy.collection.combine = (function emmy$collection$combine(f,m1,m2,l_default){
var merge_entry = (function emmy$collection$combine_$_merge_entry(m,e){
var k = cljs.core.key(e);
var v = cljs.core.val(e);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__67457 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,k,l_default);
var G__67458 = v;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__67457,G__67458) : f.call(null,G__67457,G__67458));
})());
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(merge_entry,m1,cljs.core.seq(m2));
});
emmy.generic.make_rectangular.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.collection","map","emmy.collection/map",-120400283),new cljs.core.Keyword("emmy.collection","map","emmy.collection/map",-120400283)], null),(function (m1,m2){
return emmy.collection.combine(emmy.generic.make_rectangular,m1,m2,(0));
}));
emmy.generic.make_polar.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.collection","map","emmy.collection/map",-120400283),new cljs.core.Keyword("emmy.collection","map","emmy.collection/map",-120400283)], null),(function (m1,m2){
return emmy.collection.combine(emmy.generic.make_polar,m1,m2,(0));
}));
emmy.generic.real_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.collection","map","emmy.collection/map",-120400283)], null),(function (m){
return emmy.util.map_vals(emmy.generic.real_part,m);
}));
emmy.generic.imag_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.collection","map","emmy.collection/map",-120400283)], null),(function (m){
return emmy.util.map_vals(emmy.generic.imag_part,m);
}));
emmy.generic.simplify.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.collection","map","emmy.collection/map",-120400283)], null),(function (m){
return emmy.util.map_vals(emmy.generic.simplify,m);
}));
var sentinel_67571 = (new cljs.core.NeverEquiv());
emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.collection","map","emmy.collection/map",-120400283),new cljs.core.Keyword("emmy.collection","map","emmy.collection/map",-120400283)], null),(function (x,y){
return cljs.core.boolean$((((cljs.core.count(x) === cljs.core.count(y)))?cljs.core.reduce_kv((function (_,k,v){
if(cljs.core.truth_(emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(y,k,sentinel_67571),v))){
return true;
} else {
return cljs.core.reduced(false);
}
}),true,x):null));
}));
emmy.generic.partial_derivative.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.collection","map","emmy.collection/map",-120400283),new cljs.core.Keyword("emmy.value","seq","emmy.value/seq",2124022964)], null),(function (m,selectors){
return emmy.util.map_vals((function (p1__67460_SHARP_){
return emmy.generic.partial_derivative.cljs$core$IFn$_invoke$arity$2(p1__67460_SHARP_,selectors);
}),m);
}));
var seq__67467_67573 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap,cljs.core.PersistentArrayMap,cljs.core.PersistentTreeMap], null));
var chunk__67468_67574 = null;
var count__67469_67575 = (0);
var i__67470_67576 = (0);
while(true){
if((i__67470_67576 < count__67469_67575)){
var klass_67578 = chunk__67468_67574.cljs$core$IIndexed$_nth$arity$2(null,i__67470_67576);
emmy.generic.zero_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klass_67578], null),((function (seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,klass_67578){
return (function (m){
return cljs.core.every_QMARK_(emmy.generic.zero_QMARK_,cljs.core.vals(m));
});})(seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,klass_67578))
);

emmy.generic.one_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klass_67578], null),((function (seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,klass_67578){
return (function (_){
return false;
});})(seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,klass_67578))
);

emmy.generic.identity_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klass_67578], null),((function (seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,klass_67578){
return (function (_){
return false;
});})(seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,klass_67578))
);

emmy.generic.zero_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klass_67578], null),((function (seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,klass_67578){
return (function (m){
return emmy.util.map_vals(emmy.generic.zero_like,m);
});})(seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,klass_67578))
);

emmy.generic.exact_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klass_67578], null),((function (seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,klass_67578){
return (function (m){
return cljs.core.every_QMARK_(emmy.generic.exact_QMARK_,cljs.core.vals(m));
});})(seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,klass_67578))
);

emmy.generic.freeze.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klass_67578], null),((function (seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,klass_67578){
return (function (m){
return emmy.util.map_vals(emmy.generic.freeze,m);
});})(seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,klass_67578))
);

(klass_67578.prototype.emmy$value$IKind$ = cljs.core.PROTOCOL_SENTINEL);

(klass_67578.prototype.emmy$value$IKind$kind$arity$1 = ((function (seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,klass_67578){
return (function (m){
var m__$1 = this;
if(cljs.core.sorted_QMARK_(m__$1)){
return cljs.core.type(m__$1);
} else {
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.type(m__$1));
}
});})(seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,klass_67578))
);

(klass_67578.prototype.emmy$function$IArity$ = cljs.core.PROTOCOL_SENTINEL);

(klass_67578.prototype.emmy$function$IArity$arity$arity$1 = ((function (seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,klass_67578){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276),(1),(2)], null);
});})(seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,klass_67578))
);

(klass_67578.prototype.emmy$dual$IPerturbed$ = cljs.core.PROTOCOL_SENTINEL);

(klass_67578.prototype.emmy$dual$IPerturbed$replace_tag$arity$3 = ((function (seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,klass_67578){
return (function (m,old,new$){
var m__$1 = this;
return emmy.util.map_vals(((function (seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,m__$1,klass_67578){
return (function (p1__67464_SHARP_){
return emmy.dual.replace_tag(p1__67464_SHARP_,old,new$);
});})(seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,m__$1,klass_67578))
,m__$1);
});})(seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,klass_67578))
);

(klass_67578.prototype.emmy$dual$IPerturbed$extract_tangent$arity$3 = ((function (seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,klass_67578){
return (function (m,tag,mode){
var m__$1 = this;
var temp__5823__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m__$1);
if(cljs.core.truth_(temp__5823__auto__)){
var t = temp__5823__auto__;
return emmy.util.unsupported((""+"`extract-tangent` not supported for type "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)+"."));
} else {
return emmy.util.map_vals(((function (seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,temp__5823__auto__,m__$1,klass_67578){
return (function (p1__67465_SHARP_){
return emmy.dual.extract_tangent(p1__67465_SHARP_,tag,mode);
});})(seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,temp__5823__auto__,m__$1,klass_67578))
,m__$1);
}
});})(seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,klass_67578))
);

(klass_67578.prototype.emmy$dual$IPerturbed$extract_id$arity$2 = ((function (seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,klass_67578){
return (function (m,id){
var m__$1 = this;
var temp__5823__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m__$1);
if(cljs.core.truth_(temp__5823__auto__)){
var t = temp__5823__auto__;
return emmy.util.unsupported((""+"`extract-id` not supported for type "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)+"."));
} else {
return emmy.util.map_vals(((function (seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,temp__5823__auto__,m__$1,klass_67578){
return (function (p1__67466_SHARP_){
return emmy.dual.extract_id(p1__67466_SHARP_,id);
});})(seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,temp__5823__auto__,m__$1,klass_67578))
,m__$1);
}
});})(seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,klass_67578))
);


var G__67587 = seq__67467_67573;
var G__67588 = chunk__67468_67574;
var G__67589 = count__67469_67575;
var G__67590 = (i__67470_67576 + (1));
seq__67467_67573 = G__67587;
chunk__67468_67574 = G__67588;
count__67469_67575 = G__67589;
i__67470_67576 = G__67590;
continue;
} else {
var temp__5825__auto___67591 = cljs.core.seq(seq__67467_67573);
if(temp__5825__auto___67591){
var seq__67467_67598__$1 = temp__5825__auto___67591;
if(cljs.core.chunked_seq_QMARK_(seq__67467_67598__$1)){
var c__5694__auto___67599 = cljs.core.chunk_first(seq__67467_67598__$1);
var G__67600 = cljs.core.chunk_rest(seq__67467_67598__$1);
var G__67601 = c__5694__auto___67599;
var G__67602 = cljs.core.count(c__5694__auto___67599);
var G__67603 = (0);
seq__67467_67573 = G__67600;
chunk__67468_67574 = G__67601;
count__67469_67575 = G__67602;
i__67470_67576 = G__67603;
continue;
} else {
var klass_67604 = cljs.core.first(seq__67467_67598__$1);
emmy.generic.zero_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klass_67604], null),((function (seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,klass_67604,seq__67467_67598__$1,temp__5825__auto___67591){
return (function (m){
return cljs.core.every_QMARK_(emmy.generic.zero_QMARK_,cljs.core.vals(m));
});})(seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,klass_67604,seq__67467_67598__$1,temp__5825__auto___67591))
);

emmy.generic.one_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klass_67604], null),((function (seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,klass_67604,seq__67467_67598__$1,temp__5825__auto___67591){
return (function (_){
return false;
});})(seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,klass_67604,seq__67467_67598__$1,temp__5825__auto___67591))
);

emmy.generic.identity_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klass_67604], null),((function (seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,klass_67604,seq__67467_67598__$1,temp__5825__auto___67591){
return (function (_){
return false;
});})(seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,klass_67604,seq__67467_67598__$1,temp__5825__auto___67591))
);

emmy.generic.zero_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klass_67604], null),((function (seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,klass_67604,seq__67467_67598__$1,temp__5825__auto___67591){
return (function (m){
return emmy.util.map_vals(emmy.generic.zero_like,m);
});})(seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,klass_67604,seq__67467_67598__$1,temp__5825__auto___67591))
);

emmy.generic.exact_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klass_67604], null),((function (seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,klass_67604,seq__67467_67598__$1,temp__5825__auto___67591){
return (function (m){
return cljs.core.every_QMARK_(emmy.generic.exact_QMARK_,cljs.core.vals(m));
});})(seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,klass_67604,seq__67467_67598__$1,temp__5825__auto___67591))
);

emmy.generic.freeze.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klass_67604], null),((function (seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,klass_67604,seq__67467_67598__$1,temp__5825__auto___67591){
return (function (m){
return emmy.util.map_vals(emmy.generic.freeze,m);
});})(seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,klass_67604,seq__67467_67598__$1,temp__5825__auto___67591))
);

(klass_67604.prototype.emmy$value$IKind$ = cljs.core.PROTOCOL_SENTINEL);

(klass_67604.prototype.emmy$value$IKind$kind$arity$1 = ((function (seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,klass_67604,seq__67467_67598__$1,temp__5825__auto___67591){
return (function (m){
var m__$1 = this;
if(cljs.core.sorted_QMARK_(m__$1)){
return cljs.core.type(m__$1);
} else {
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.type(m__$1));
}
});})(seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,klass_67604,seq__67467_67598__$1,temp__5825__auto___67591))
);

(klass_67604.prototype.emmy$function$IArity$ = cljs.core.PROTOCOL_SENTINEL);

(klass_67604.prototype.emmy$function$IArity$arity$arity$1 = ((function (seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,klass_67604,seq__67467_67598__$1,temp__5825__auto___67591){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276),(1),(2)], null);
});})(seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,klass_67604,seq__67467_67598__$1,temp__5825__auto___67591))
);

(klass_67604.prototype.emmy$dual$IPerturbed$ = cljs.core.PROTOCOL_SENTINEL);

(klass_67604.prototype.emmy$dual$IPerturbed$replace_tag$arity$3 = ((function (seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,klass_67604,seq__67467_67598__$1,temp__5825__auto___67591){
return (function (m,old,new$){
var m__$1 = this;
return emmy.util.map_vals(((function (seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,m__$1,klass_67604,seq__67467_67598__$1,temp__5825__auto___67591){
return (function (p1__67464_SHARP_){
return emmy.dual.replace_tag(p1__67464_SHARP_,old,new$);
});})(seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,m__$1,klass_67604,seq__67467_67598__$1,temp__5825__auto___67591))
,m__$1);
});})(seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,klass_67604,seq__67467_67598__$1,temp__5825__auto___67591))
);

(klass_67604.prototype.emmy$dual$IPerturbed$extract_tangent$arity$3 = ((function (seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,klass_67604,seq__67467_67598__$1,temp__5825__auto___67591){
return (function (m,tag,mode){
var m__$1 = this;
var temp__5823__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m__$1);
if(cljs.core.truth_(temp__5823__auto__)){
var t = temp__5823__auto__;
return emmy.util.unsupported((""+"`extract-tangent` not supported for type "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)+"."));
} else {
return emmy.util.map_vals(((function (seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,temp__5823__auto__,m__$1,klass_67604,seq__67467_67598__$1,temp__5825__auto___67591){
return (function (p1__67465_SHARP_){
return emmy.dual.extract_tangent(p1__67465_SHARP_,tag,mode);
});})(seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,temp__5823__auto__,m__$1,klass_67604,seq__67467_67598__$1,temp__5825__auto___67591))
,m__$1);
}
});})(seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,klass_67604,seq__67467_67598__$1,temp__5825__auto___67591))
);

(klass_67604.prototype.emmy$dual$IPerturbed$extract_id$arity$2 = ((function (seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,klass_67604,seq__67467_67598__$1,temp__5825__auto___67591){
return (function (m,id){
var m__$1 = this;
var temp__5823__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m__$1);
if(cljs.core.truth_(temp__5823__auto__)){
var t = temp__5823__auto__;
return emmy.util.unsupported((""+"`extract-id` not supported for type "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)+"."));
} else {
return emmy.util.map_vals(((function (seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,temp__5823__auto__,m__$1,klass_67604,seq__67467_67598__$1,temp__5825__auto___67591){
return (function (p1__67466_SHARP_){
return emmy.dual.extract_id(p1__67466_SHARP_,id);
});})(seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,temp__5823__auto__,m__$1,klass_67604,seq__67467_67598__$1,temp__5825__auto___67591))
,m__$1);
}
});})(seq__67467_67573,chunk__67468_67574,count__67469_67575,i__67470_67576,klass_67604,seq__67467_67598__$1,temp__5825__auto___67591))
);


var G__67622 = cljs.core.next(seq__67467_67598__$1);
var G__67623 = null;
var G__67624 = (0);
var G__67625 = (0);
seq__67467_67573 = G__67622;
chunk__67468_67574 = G__67623;
count__67469_67575 = G__67624;
i__67470_67576 = G__67625;
continue;
}
} else {
}
}
break;
}
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet,new cljs.core.Keyword("emmy.collection","set","emmy.collection/set",957963842));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentTreeSet,new cljs.core.Keyword("emmy.collection","set","emmy.collection/set",957963842));
emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.collection","set","emmy.collection/set",957963842),new cljs.core.Keyword("emmy.collection","set","emmy.collection/set",957963842)], null),(function (a,b){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(a,b);
}));
var seq__67502_67627 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet,cljs.core.PersistentTreeSet], null));
var chunk__67503_67628 = null;
var count__67504_67629 = (0);
var i__67505_67630 = (0);
while(true){
if((i__67505_67630 < count__67504_67629)){
var klass_67631 = chunk__67503_67628.cljs$core$IIndexed$_nth$arity$2(null,i__67505_67630);
emmy.generic.zero_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klass_67631], null),((function (seq__67502_67627,chunk__67503_67628,count__67504_67629,i__67505_67630,klass_67631){
return (function (s){
return cljs.core.empty_QMARK_(s);
});})(seq__67502_67627,chunk__67503_67628,count__67504_67629,i__67505_67630,klass_67631))
);

emmy.generic.one_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klass_67631], null),((function (seq__67502_67627,chunk__67503_67628,count__67504_67629,i__67505_67630,klass_67631){
return (function (_){
return false;
});})(seq__67502_67627,chunk__67503_67628,count__67504_67629,i__67505_67630,klass_67631))
);

emmy.generic.identity_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klass_67631], null),((function (seq__67502_67627,chunk__67503_67628,count__67504_67629,i__67505_67630,klass_67631){
return (function (_){
return false;
});})(seq__67502_67627,chunk__67503_67628,count__67504_67629,i__67505_67630,klass_67631))
);

emmy.generic.zero_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klass_67631], null),((function (seq__67502_67627,chunk__67503_67628,count__67504_67629,i__67505_67630,klass_67631){
return (function (_){
return cljs.core.PersistentHashSet.EMPTY;
});})(seq__67502_67627,chunk__67503_67628,count__67504_67629,i__67505_67630,klass_67631))
);

emmy.generic.exact_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klass_67631], null),((function (seq__67502_67627,chunk__67503_67628,count__67504_67629,i__67505_67630,klass_67631){
return (function (s){
return cljs.core.every_QMARK_(emmy.generic.exact_QMARK_,s);
});})(seq__67502_67627,chunk__67503_67628,count__67504_67629,i__67505_67630,klass_67631))
);

(klass_67631.prototype.emmy$value$IKind$ = cljs.core.PROTOCOL_SENTINEL);

(klass_67631.prototype.emmy$value$IKind$kind$arity$1 = ((function (seq__67502_67627,chunk__67503_67628,count__67504_67629,i__67505_67630,klass_67631){
return (function (s){
var s__$1 = this;
return cljs.core.type(s__$1);
});})(seq__67502_67627,chunk__67503_67628,count__67504_67629,i__67505_67630,klass_67631))
);

(klass_67631.prototype.emmy$function$IArity$ = cljs.core.PROTOCOL_SENTINEL);

(klass_67631.prototype.emmy$function$IArity$arity$arity$1 = ((function (seq__67502_67627,chunk__67503_67628,count__67504_67629,i__67505_67630,klass_67631){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276),(1),(2)], null);
});})(seq__67502_67627,chunk__67503_67628,count__67504_67629,i__67505_67630,klass_67631))
);


var G__67634 = seq__67502_67627;
var G__67635 = chunk__67503_67628;
var G__67636 = count__67504_67629;
var G__67637 = (i__67505_67630 + (1));
seq__67502_67627 = G__67634;
chunk__67503_67628 = G__67635;
count__67504_67629 = G__67636;
i__67505_67630 = G__67637;
continue;
} else {
var temp__5825__auto___67638 = cljs.core.seq(seq__67502_67627);
if(temp__5825__auto___67638){
var seq__67502_67639__$1 = temp__5825__auto___67638;
if(cljs.core.chunked_seq_QMARK_(seq__67502_67639__$1)){
var c__5694__auto___67640 = cljs.core.chunk_first(seq__67502_67639__$1);
var G__67641 = cljs.core.chunk_rest(seq__67502_67639__$1);
var G__67642 = c__5694__auto___67640;
var G__67643 = cljs.core.count(c__5694__auto___67640);
var G__67644 = (0);
seq__67502_67627 = G__67641;
chunk__67503_67628 = G__67642;
count__67504_67629 = G__67643;
i__67505_67630 = G__67644;
continue;
} else {
var klass_67645 = cljs.core.first(seq__67502_67639__$1);
emmy.generic.zero_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klass_67645], null),((function (seq__67502_67627,chunk__67503_67628,count__67504_67629,i__67505_67630,klass_67645,seq__67502_67639__$1,temp__5825__auto___67638){
return (function (s){
return cljs.core.empty_QMARK_(s);
});})(seq__67502_67627,chunk__67503_67628,count__67504_67629,i__67505_67630,klass_67645,seq__67502_67639__$1,temp__5825__auto___67638))
);

emmy.generic.one_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klass_67645], null),((function (seq__67502_67627,chunk__67503_67628,count__67504_67629,i__67505_67630,klass_67645,seq__67502_67639__$1,temp__5825__auto___67638){
return (function (_){
return false;
});})(seq__67502_67627,chunk__67503_67628,count__67504_67629,i__67505_67630,klass_67645,seq__67502_67639__$1,temp__5825__auto___67638))
);

emmy.generic.identity_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klass_67645], null),((function (seq__67502_67627,chunk__67503_67628,count__67504_67629,i__67505_67630,klass_67645,seq__67502_67639__$1,temp__5825__auto___67638){
return (function (_){
return false;
});})(seq__67502_67627,chunk__67503_67628,count__67504_67629,i__67505_67630,klass_67645,seq__67502_67639__$1,temp__5825__auto___67638))
);

emmy.generic.zero_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klass_67645], null),((function (seq__67502_67627,chunk__67503_67628,count__67504_67629,i__67505_67630,klass_67645,seq__67502_67639__$1,temp__5825__auto___67638){
return (function (_){
return cljs.core.PersistentHashSet.EMPTY;
});})(seq__67502_67627,chunk__67503_67628,count__67504_67629,i__67505_67630,klass_67645,seq__67502_67639__$1,temp__5825__auto___67638))
);

emmy.generic.exact_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klass_67645], null),((function (seq__67502_67627,chunk__67503_67628,count__67504_67629,i__67505_67630,klass_67645,seq__67502_67639__$1,temp__5825__auto___67638){
return (function (s){
return cljs.core.every_QMARK_(emmy.generic.exact_QMARK_,s);
});})(seq__67502_67627,chunk__67503_67628,count__67504_67629,i__67505_67630,klass_67645,seq__67502_67639__$1,temp__5825__auto___67638))
);

(klass_67645.prototype.emmy$value$IKind$ = cljs.core.PROTOCOL_SENTINEL);

(klass_67645.prototype.emmy$value$IKind$kind$arity$1 = ((function (seq__67502_67627,chunk__67503_67628,count__67504_67629,i__67505_67630,klass_67645,seq__67502_67639__$1,temp__5825__auto___67638){
return (function (s){
var s__$1 = this;
return cljs.core.type(s__$1);
});})(seq__67502_67627,chunk__67503_67628,count__67504_67629,i__67505_67630,klass_67645,seq__67502_67639__$1,temp__5825__auto___67638))
);

(klass_67645.prototype.emmy$function$IArity$ = cljs.core.PROTOCOL_SENTINEL);

(klass_67645.prototype.emmy$function$IArity$arity$arity$1 = ((function (seq__67502_67627,chunk__67503_67628,count__67504_67629,i__67505_67630,klass_67645,seq__67502_67639__$1,temp__5825__auto___67638){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276),(1),(2)], null);
});})(seq__67502_67627,chunk__67503_67628,count__67504_67629,i__67505_67630,klass_67645,seq__67502_67639__$1,temp__5825__auto___67638))
);


var G__67649 = cljs.core.next(seq__67502_67639__$1);
var G__67650 = null;
var G__67651 = (0);
var G__67652 = (0);
seq__67502_67627 = G__67649;
chunk__67503_67628 = G__67650;
count__67504_67629 = G__67651;
i__67505_67630 = G__67652;
continue;
}
} else {
}
}
break;
}

//# sourceMappingURL=emmy.collection.js.map
