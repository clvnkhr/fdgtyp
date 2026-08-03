goog.provide('cljs.analyzer.impl.namespaces');
/**
 * Given a libspec return a map of :as-alias alias, if was present. Return the
 * libspec with :as-alias elided. If the libspec was *only* :as-alias do not
 * return it.
 */
cljs.analyzer.impl.namespaces.check_and_remove_as_alias = (function cljs$analyzer$impl$namespaces$check_and_remove_as_alias(libspec){
if((((libspec instanceof cljs.core.Symbol)) || ((libspec instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec], null);
} else {
var vec__21303 = libspec;
var seq__21304 = cljs.core.seq(vec__21303);
var first__21305 = cljs.core.first(seq__21304);
var seq__21304__$1 = cljs.core.next(seq__21304);
var lib = first__21305;
var spec = seq__21304__$1;
var libspec__$1 = vec__21303;
var vec__21306 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21306,(0),null);
var vec__21309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21306,(1),null);
var seq__21310 = cljs.core.seq(vec__21309);
var first__21311 = cljs.core.first(seq__21310);
var seq__21310__$1 = cljs.core.next(seq__21310);
var _ = first__21311;
var first__21311__$1 = cljs.core.first(seq__21310__$1);
var seq__21310__$2 = cljs.core.next(seq__21310__$1);
var alias = first__21311__$1;
var post_spec = seq__21310__$2;
var post = vec__21309;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+":as-alias must be followed by a symbol, got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)))+"\n"+"(symbol? alias)")));
}

var G__21317 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21317,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__21317;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__21322 = cljs.core.seq(new_as_aliases);
var chunk__21323 = null;
var count__21324 = (0);
var i__21325 = (0);
while(true){
if((i__21325 < count__21324)){
var vec__21348 = chunk__21323.cljs$core$IIndexed$_nth$arity$2(null,i__21325);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21348,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21348,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"Duplicate :as-alias "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)+", already in use for lib "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))))+"\n"+"(not (contains? as-aliases alias))")));
}


var G__21384 = seq__21322;
var G__21385 = chunk__21323;
var G__21386 = count__21324;
var G__21387 = (i__21325 + (1));
seq__21322 = G__21384;
chunk__21323 = G__21385;
count__21324 = G__21386;
i__21325 = G__21387;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__21322);
if(temp__5825__auto__){
var seq__21322__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21322__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__21322__$1);
var G__21388 = cljs.core.chunk_rest(seq__21322__$1);
var G__21389 = c__5694__auto__;
var G__21390 = cljs.core.count(c__5694__auto__);
var G__21391 = (0);
seq__21322 = G__21388;
chunk__21323 = G__21389;
count__21324 = G__21390;
i__21325 = G__21391;
continue;
} else {
var vec__21356 = cljs.core.first(seq__21322__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21356,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21356,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"Duplicate :as-alias "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)+", already in use for lib "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))))+"\n"+"(not (contains? as-aliases alias))")));
}


var G__21394 = cljs.core.next(seq__21322__$1);
var G__21395 = null;
var G__21396 = (0);
var G__21397 = (0);
seq__21322 = G__21394;
chunk__21323 = G__21395;
count__21324 = G__21396;
i__21325 = G__21397;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given libspecs, elide all :as-alias. Return a map of :libspecs (filtered)
 * and :as-aliases.
 */
cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_libspecs(var_args){
var G__21360 = arguments.length;
switch (G__21360) {
case 1:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1 = (function (libspecs){
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2 = (function (libspecs,as_aliases){
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),as_aliases,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__$1,libspec){
var map__21365 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__21365__$1 = cljs.core.__destructure_map(map__21365);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21365__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21365__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__21366 = ret__$1;
var G__21366__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__21366,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__21366);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__21366__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__21366__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__21368,p__21369){
var map__21370 = p__21368;
var map__21370__$1 = cljs.core.__destructure_map(map__21370);
var ret__$1 = map__21370__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21370__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__21371 = p__21369;
var seq__21372 = cljs.core.seq(vec__21371);
var first__21373 = cljs.core.first(seq__21372);
var seq__21372__$1 = cljs.core.next(seq__21372);
var spec_key = first__21373;
var libspecs = seq__21372__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__21374 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__21374__$1 = cljs.core.__destructure_map(map__21374);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21374__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21374__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__21375 = ret__$1;
var G__21375__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__21375,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__21375);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__21375__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__21375__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
