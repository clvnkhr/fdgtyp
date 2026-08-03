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
var vec__21305 = libspec;
var seq__21306 = cljs.core.seq(vec__21305);
var first__21307 = cljs.core.first(seq__21306);
var seq__21306__$1 = cljs.core.next(seq__21306);
var lib = first__21307;
var spec = seq__21306__$1;
var libspec__$1 = vec__21305;
var vec__21308 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21308,(0),null);
var vec__21311 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21308,(1),null);
var seq__21312 = cljs.core.seq(vec__21311);
var first__21313 = cljs.core.first(seq__21312);
var seq__21312__$1 = cljs.core.next(seq__21312);
var _ = first__21313;
var first__21313__$1 = cljs.core.first(seq__21312__$1);
var seq__21312__$2 = cljs.core.next(seq__21312__$1);
var alias = first__21313__$1;
var post_spec = seq__21312__$2;
var post = vec__21311;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+":as-alias must be followed by a symbol, got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)))+"\n"+"(symbol? alias)")));
}

var G__21316 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21316,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__21316;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__21319 = cljs.core.seq(new_as_aliases);
var chunk__21320 = null;
var count__21321 = (0);
var i__21322 = (0);
while(true){
if((i__21322 < count__21321)){
var vec__21339 = chunk__21320.cljs$core$IIndexed$_nth$arity$2(null,i__21322);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21339,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21339,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"Duplicate :as-alias "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)+", already in use for lib "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))))+"\n"+"(not (contains? as-aliases alias))")));
}


var G__21389 = seq__21319;
var G__21390 = chunk__21320;
var G__21391 = count__21321;
var G__21392 = (i__21322 + (1));
seq__21319 = G__21389;
chunk__21320 = G__21390;
count__21321 = G__21391;
i__21322 = G__21392;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__21319);
if(temp__5825__auto__){
var seq__21319__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21319__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__21319__$1);
var G__21394 = cljs.core.chunk_rest(seq__21319__$1);
var G__21395 = c__5694__auto__;
var G__21396 = cljs.core.count(c__5694__auto__);
var G__21397 = (0);
seq__21319 = G__21394;
chunk__21320 = G__21395;
count__21321 = G__21396;
i__21322 = G__21397;
continue;
} else {
var vec__21344 = cljs.core.first(seq__21319__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21344,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21344,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"Duplicate :as-alias "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)+", already in use for lib "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))))+"\n"+"(not (contains? as-aliases alias))")));
}


var G__21400 = cljs.core.next(seq__21319__$1);
var G__21401 = null;
var G__21402 = (0);
var G__21403 = (0);
seq__21319 = G__21400;
chunk__21320 = G__21401;
count__21321 = G__21402;
i__21322 = G__21403;
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
var G__21353 = arguments.length;
switch (G__21353) {
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
var map__21357 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__21357__$1 = cljs.core.__destructure_map(map__21357);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21357__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21357__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__21358 = ret__$1;
var G__21358__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__21358,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__21358);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__21358__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__21358__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__21359,p__21360){
var map__21362 = p__21359;
var map__21362__$1 = cljs.core.__destructure_map(map__21362);
var ret__$1 = map__21362__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21362__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__21363 = p__21360;
var seq__21364 = cljs.core.seq(vec__21363);
var first__21365 = cljs.core.first(seq__21364);
var seq__21364__$1 = cljs.core.next(seq__21364);
var spec_key = first__21365;
var libspecs = seq__21364__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__21366 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__21366__$1 = cljs.core.__destructure_map(map__21366);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21366__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21366__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__21367 = ret__$1;
var G__21367__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__21367,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__21367);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__21367__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__21367__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
