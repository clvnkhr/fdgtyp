import "./cljs_env.js";
import "./cljs.core.js";
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
var vec__61413 = libspec;
var seq__61414 = cljs.core.seq(vec__61413);
var first__61415 = cljs.core.first(seq__61414);
var seq__61414__$1 = cljs.core.next(seq__61414);
var lib = first__61415;
var spec = seq__61414__$1;
var libspec__$1 = vec__61413;
var vec__61416 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61416,(0),null);
var vec__61419 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61416,(1),null);
var seq__61420 = cljs.core.seq(vec__61419);
var first__61421 = cljs.core.first(seq__61420);
var seq__61420__$1 = cljs.core.next(seq__61420);
var _ = first__61421;
var first__61421__$1 = cljs.core.first(seq__61420__$1);
var seq__61420__$2 = cljs.core.next(seq__61420__$1);
var alias = first__61421__$1;
var post_spec = seq__61420__$2;
var post = vec__61419;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+":as-alias must be followed by a symbol, got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)))+"\n"+"(symbol? alias)")));
}

var G__61430 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61430,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__61430;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__61435 = cljs.core.seq(new_as_aliases);
var chunk__61436 = null;
var count__61437 = (0);
var i__61438 = (0);
while(true){
if((i__61438 < count__61437)){
var vec__61450 = chunk__61436.cljs$core$IIndexed$_nth$arity$2(null,i__61438);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61450,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61450,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"Duplicate :as-alias "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)+", already in use for lib "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))))+"\n"+"(not (contains? as-aliases alias))")));
}


var G__61485 = seq__61435;
var G__61486 = chunk__61436;
var G__61487 = count__61437;
var G__61488 = (i__61438 + (1));
seq__61435 = G__61485;
chunk__61436 = G__61486;
count__61437 = G__61487;
i__61438 = G__61488;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__61435);
if(temp__5825__auto__){
var seq__61435__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61435__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__61435__$1);
var G__61489 = cljs.core.chunk_rest(seq__61435__$1);
var G__61490 = c__5694__auto__;
var G__61491 = cljs.core.count(c__5694__auto__);
var G__61492 = (0);
seq__61435 = G__61489;
chunk__61436 = G__61490;
count__61437 = G__61491;
i__61438 = G__61492;
continue;
} else {
var vec__61454 = cljs.core.first(seq__61435__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61454,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61454,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"Duplicate :as-alias "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)+", already in use for lib "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))))+"\n"+"(not (contains? as-aliases alias))")));
}


var G__61493 = cljs.core.next(seq__61435__$1);
var G__61494 = null;
var G__61495 = (0);
var G__61496 = (0);
seq__61435 = G__61493;
chunk__61436 = G__61494;
count__61437 = G__61495;
i__61438 = G__61496;
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
var G__61465 = arguments.length;
switch (G__61465) {
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
var map__61468 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__61468__$1 = cljs.core.__destructure_map(map__61468);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61468__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61468__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__61470 = ret__$1;
var G__61470__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__61470,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__61470);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__61470__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__61470__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__61472,p__61473){
var map__61474 = p__61472;
var map__61474__$1 = cljs.core.__destructure_map(map__61474);
var ret__$1 = map__61474__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61474__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__61475 = p__61473;
var seq__61476 = cljs.core.seq(vec__61475);
var first__61477 = cljs.core.first(seq__61476);
var seq__61476__$1 = cljs.core.next(seq__61476);
var spec_key = first__61477;
var libspecs = seq__61476__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__61479 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__61479__$1 = cljs.core.__destructure_map(map__61479);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61479__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61479__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__61480 = ret__$1;
var G__61480__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__61480,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__61480);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__61480__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__61480__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
