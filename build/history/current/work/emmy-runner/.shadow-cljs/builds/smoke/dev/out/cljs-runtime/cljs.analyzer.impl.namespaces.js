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
var vec__21329 = libspec;
var seq__21330 = cljs.core.seq(vec__21329);
var first__21331 = cljs.core.first(seq__21330);
var seq__21330__$1 = cljs.core.next(seq__21330);
var lib = first__21331;
var spec = seq__21330__$1;
var libspec__$1 = vec__21329;
var vec__21332 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21332,(0),null);
var vec__21335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21332,(1),null);
var seq__21336 = cljs.core.seq(vec__21335);
var first__21337 = cljs.core.first(seq__21336);
var seq__21336__$1 = cljs.core.next(seq__21336);
var _ = first__21337;
var first__21337__$1 = cljs.core.first(seq__21336__$1);
var seq__21336__$2 = cljs.core.next(seq__21336__$1);
var alias = first__21337__$1;
var post_spec = seq__21336__$2;
var post = vec__21335;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+":as-alias must be followed by a symbol, got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)))+"\n"+"(symbol? alias)")));
}

var G__21341 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21341,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__21341;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__21342 = cljs.core.seq(new_as_aliases);
var chunk__21343 = null;
var count__21344 = (0);
var i__21345 = (0);
while(true){
if((i__21345 < count__21344)){
var vec__21356 = chunk__21343.cljs$core$IIndexed$_nth$arity$2(null,i__21345);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21356,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21356,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"Duplicate :as-alias "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)+", already in use for lib "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))))+"\n"+"(not (contains? as-aliases alias))")));
}


var G__21409 = seq__21342;
var G__21410 = chunk__21343;
var G__21411 = count__21344;
var G__21412 = (i__21345 + (1));
seq__21342 = G__21409;
chunk__21343 = G__21410;
count__21344 = G__21411;
i__21345 = G__21412;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__21342);
if(temp__5825__auto__){
var seq__21342__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21342__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__21342__$1);
var G__21413 = cljs.core.chunk_rest(seq__21342__$1);
var G__21414 = c__5694__auto__;
var G__21415 = cljs.core.count(c__5694__auto__);
var G__21416 = (0);
seq__21342 = G__21413;
chunk__21343 = G__21414;
count__21344 = G__21415;
i__21345 = G__21416;
continue;
} else {
var vec__21369 = cljs.core.first(seq__21342__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21369,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21369,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"Duplicate :as-alias "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)+", already in use for lib "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))))+"\n"+"(not (contains? as-aliases alias))")));
}


var G__21418 = cljs.core.next(seq__21342__$1);
var G__21419 = null;
var G__21420 = (0);
var G__21421 = (0);
seq__21342 = G__21418;
chunk__21343 = G__21419;
count__21344 = G__21420;
i__21345 = G__21421;
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
var G__21380 = arguments.length;
switch (G__21380) {
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
var map__21382 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__21382__$1 = cljs.core.__destructure_map(map__21382);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21382__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21382__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__21385 = ret__$1;
var G__21385__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__21385,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__21385);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__21385__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__21385__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__21389,p__21390){
var map__21391 = p__21389;
var map__21391__$1 = cljs.core.__destructure_map(map__21391);
var ret__$1 = map__21391__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21391__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__21392 = p__21390;
var seq__21393 = cljs.core.seq(vec__21392);
var first__21394 = cljs.core.first(seq__21393);
var seq__21393__$1 = cljs.core.next(seq__21393);
var spec_key = first__21394;
var libspecs = seq__21393__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__21395 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__21395__$1 = cljs.core.__destructure_map(map__21395);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21395__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21395__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__21396 = ret__$1;
var G__21396__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__21396,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__21396);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__21396__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__21396__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
