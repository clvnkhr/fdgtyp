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
var vec__21294 = libspec;
var seq__21295 = cljs.core.seq(vec__21294);
var first__21296 = cljs.core.first(seq__21295);
var seq__21295__$1 = cljs.core.next(seq__21295);
var lib = first__21296;
var spec = seq__21295__$1;
var libspec__$1 = vec__21294;
var vec__21297 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21297,(0),null);
var vec__21300 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21297,(1),null);
var seq__21301 = cljs.core.seq(vec__21300);
var first__21302 = cljs.core.first(seq__21301);
var seq__21301__$1 = cljs.core.next(seq__21301);
var _ = first__21302;
var first__21302__$1 = cljs.core.first(seq__21301__$1);
var seq__21301__$2 = cljs.core.next(seq__21301__$1);
var alias = first__21302__$1;
var post_spec = seq__21301__$2;
var post = vec__21300;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+":as-alias must be followed by a symbol, got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)))+"\n"+"(symbol? alias)")));
}

var G__21320 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21320,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__21320;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__21330 = cljs.core.seq(new_as_aliases);
var chunk__21331 = null;
var count__21332 = (0);
var i__21333 = (0);
while(true){
if((i__21333 < count__21332)){
var vec__21347 = chunk__21331.cljs$core$IIndexed$_nth$arity$2(null,i__21333);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21347,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21347,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"Duplicate :as-alias "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)+", already in use for lib "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))))+"\n"+"(not (contains? as-aliases alias))")));
}


var G__21384 = seq__21330;
var G__21385 = chunk__21331;
var G__21386 = count__21332;
var G__21387 = (i__21333 + (1));
seq__21330 = G__21384;
chunk__21331 = G__21385;
count__21332 = G__21386;
i__21333 = G__21387;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__21330);
if(temp__5825__auto__){
var seq__21330__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21330__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__21330__$1);
var G__21390 = cljs.core.chunk_rest(seq__21330__$1);
var G__21391 = c__5694__auto__;
var G__21392 = cljs.core.count(c__5694__auto__);
var G__21393 = (0);
seq__21330 = G__21390;
chunk__21331 = G__21391;
count__21332 = G__21392;
i__21333 = G__21393;
continue;
} else {
var vec__21353 = cljs.core.first(seq__21330__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21353,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21353,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"Duplicate :as-alias "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)+", already in use for lib "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))))+"\n"+"(not (contains? as-aliases alias))")));
}


var G__21400 = cljs.core.next(seq__21330__$1);
var G__21401 = null;
var G__21402 = (0);
var G__21403 = (0);
seq__21330 = G__21400;
chunk__21331 = G__21401;
count__21332 = G__21402;
i__21333 = G__21403;
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
var G__21357 = arguments.length;
switch (G__21357) {
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
var map__21360 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__21360__$1 = cljs.core.__destructure_map(map__21360);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21360__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21360__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__21361 = ret__$1;
var G__21361__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__21361,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__21361);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__21361__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__21361__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__21362,p__21363){
var map__21364 = p__21362;
var map__21364__$1 = cljs.core.__destructure_map(map__21364);
var ret__$1 = map__21364__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21364__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__21365 = p__21363;
var seq__21366 = cljs.core.seq(vec__21365);
var first__21367 = cljs.core.first(seq__21366);
var seq__21366__$1 = cljs.core.next(seq__21366);
var spec_key = first__21367;
var libspecs = seq__21366__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__21369 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__21369__$1 = cljs.core.__destructure_map(map__21369);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21369__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21369__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__21371 = ret__$1;
var G__21371__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__21371,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__21371);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__21371__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__21371__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
