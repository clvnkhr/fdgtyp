goog.provide('fdg.smoke');
fdg.smoke.eval_session_BANG_ = (function fdg$smoke$eval_session_BANG_(context,code){
return sci.core.eval_string_STAR_(context,(""+"(in-ns 'fdg.session)\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(code)));
});
fdg.smoke.captured_result_pattern = /^;; =>[^\n]*(?:\n;;[^\n]*)*\n?/m;
fdg.smoke.code_without_captured_result = (function fdg$smoke$code_without_captured_result(code){
return clojure.string.replace(code,fdg.smoke.captured_result_pattern,"");
});
fdg.smoke.max_captured_result_length = (20000);
fdg.smoke.captured_result_preview_length = (200);
fdg.smoke.captured_result_comment = (function fdg$smoke$captured_result_comment(value){
var rendered = fdg.output.pr_str_native(value);
var rendered__$1 = (((((rendered).length) > fdg.smoke.max_captured_result_length))?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(rendered,(0),fdg.smoke.captured_result_preview_length))+"... <result truncated: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((rendered).length))+" characters total; inspect in the web runner>"):rendered);
var lines = clojure.string.split_lines(rendered__$1);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__65245_SHARP_,p2__65246_SHARP_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((p1__65245_SHARP_ === (0)))?";; => ":";;    "))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__65246_SHARP_));
}),lines));
});
/**
 * Locate a manifest form in formatted source while allowing the formatter to
 *   change whitespace between tokens.
 */
fdg.smoke.locate_form = (function fdg$smoke$locate_form(code,form_code,cursor){
var pattern = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\\s+",cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.string.regExpEscape,clojure.string.split.cljs$core$IFn$_invoke$arity$2(form_code,/\s+/)));
var match = (new RegExp(pattern)).exec(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(code,cursor));
if(cljs.core.truth_(match)){
var start = (cursor + match.index);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(start + cljs.core.count((match[(0)])))], null);
} else {
return null;
}
});
fdg.smoke.code_with_form_results = (function fdg$smoke$code_with_form_results(code,form_results){
var remaining = form_results;
var cursor = (0);
var rendered = "";
while(true){
var temp__5823__auto__ = cljs.core.first(remaining);
if(cljs.core.truth_(temp__5823__auto__)){
var vec__65253 = temp__5823__auto__;
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65253,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65253,(1),null);
var form_code = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(form);
var vec__65256 = (function (){var or__5162__auto__ = fdg.smoke.locate_form(code,form_code,cursor);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
throw (new Error((""+"Could not locate captured form: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(form_code))));
}
})();
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65256,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65256,(1),null);
var G__65351 = cljs.core.rest(remaining);
var G__65352 = end;
var G__65353 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rendered)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(code,cursor,end))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"capturesResult","capturesResult",-1776961836).cljs$core$IFn$_invoke$arity$1(form))?(""+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fdg.smoke.captured_result_comment(value))):null)));
remaining = G__65351;
cursor = G__65352;
rendered = G__65353;
continue;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rendered)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(code,cursor)));
}
break;
}
});
fdg.smoke.stage_result_BANG_ = (function fdg$smoke$stage_result_BANG_(pending,block,code,form_results){
var clean_code = fdg.smoke.code_without_captured_result(code);
var captured = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.trimr(fdg.smoke.code_with_form_results(clean_code,form_results)))+"\n");
var ordinal = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ordinal","ordinal",-580748340).cljs$core$IFn$_invoke$arity$1(block))).padStart((3),"0");
var editable = (""+"../codeblocks/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"chapter","chapter",-238644368).cljs$core$IFn$_invoke$arity$1(block))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ordinal)+".cljs");
var served = (""+"public/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"codePath","codePath",1496228739).cljs$core$IFn$_invoke$arity$1(block)));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(pending,cljs.core.assoc,editable,captured,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([served,captured], 0));
});
fdg.smoke.stage_cleared_result_BANG_ = (function fdg$smoke$stage_cleared_result_BANG_(pending,block,stored_code){
var clean_code = fdg.smoke.code_without_captured_result(stored_code);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(clean_code,stored_code)){
var ordinal = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ordinal","ordinal",-580748340).cljs$core$IFn$_invoke$arity$1(block))).padStart((3),"0");
var editable = (""+"../codeblocks/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"chapter","chapter",-238644368).cljs$core$IFn$_invoke$arity$1(block))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ordinal)+".cljs");
var served = (""+"public/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"codePath","codePath",1496228739).cljs$core$IFn$_invoke$arity$1(block)));
var clean_code__$1 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.trimr(clean_code))+"\n");
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(pending,cljs.core.assoc,editable,clean_code__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([served,clean_code__$1], 0));
} else {
return null;
}
});
fdg.smoke.prepare_block_BANG_ = (function fdg$smoke$prepare_block_BANG_(context,definitions,block){
var seq__65259_65354 = cljs.core.seq(new cljs.core.Keyword(null,"definitions","definitions",167529986).cljs$core$IFn$_invoke$arity$1(block));
var chunk__65260_65355 = null;
var count__65261_65356 = (0);
var i__65262_65357 = (0);
while(true){
if((i__65262_65357 < count__65261_65356)){
var definition_65358 = chunk__65260_65355.cljs$core$IIndexed$_nth$arity$2(null,i__65262_65357);
if(cljs.core.contains_QMARK_(cljs.core.deref(definitions),definition_65358)){
} else {
fdg.smoke.eval_session_BANG_(context,(""+"(ns-unmap 'fdg.session '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(definition_65358)+")"));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(definitions,cljs.core.conj,definition_65358);


var G__65359 = seq__65259_65354;
var G__65360 = chunk__65260_65355;
var G__65361 = count__65261_65356;
var G__65362 = (i__65262_65357 + (1));
seq__65259_65354 = G__65359;
chunk__65260_65355 = G__65360;
count__65261_65356 = G__65361;
i__65262_65357 = G__65362;
continue;
} else {
var temp__5825__auto___65363 = cljs.core.seq(seq__65259_65354);
if(temp__5825__auto___65363){
var seq__65259_65364__$1 = temp__5825__auto___65363;
if(cljs.core.chunked_seq_QMARK_(seq__65259_65364__$1)){
var c__5694__auto___65365 = cljs.core.chunk_first(seq__65259_65364__$1);
var G__65366 = cljs.core.chunk_rest(seq__65259_65364__$1);
var G__65367 = c__5694__auto___65365;
var G__65368 = cljs.core.count(c__5694__auto___65365);
var G__65369 = (0);
seq__65259_65354 = G__65366;
chunk__65260_65355 = G__65367;
count__65261_65356 = G__65368;
i__65262_65357 = G__65369;
continue;
} else {
var definition_65370 = cljs.core.first(seq__65259_65364__$1);
if(cljs.core.contains_QMARK_(cljs.core.deref(definitions),definition_65370)){
} else {
fdg.smoke.eval_session_BANG_(context,(""+"(ns-unmap 'fdg.session '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(definition_65370)+")"));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(definitions,cljs.core.conj,definition_65370);


var G__65371 = cljs.core.next(seq__65259_65364__$1);
var G__65372 = null;
var G__65373 = (0);
var G__65374 = (0);
seq__65259_65354 = G__65371;
chunk__65260_65355 = G__65372;
count__65261_65356 = G__65373;
i__65262_65357 = G__65374;
continue;
}
} else {
}
}
break;
}

if(cljs.core.seq(new cljs.core.Keyword(null,"definitions","definitions",167529986).cljs$core$IFn$_invoke$arity$1(block))){
return fdg.smoke.eval_session_BANG_(context,(""+"(declare "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.Keyword(null,"definitions","definitions",167529986).cljs$core$IFn$_invoke$arity$1(block)))+")"));
} else {
return null;
}
});
fdg.smoke.add_block_with_prerequisites = (function fdg$smoke$add_block_with_prerequisites(ordered,seen,blocks_by_id,block){
if(cljs.core.contains_QMARK_(seen,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(block))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ordered,seen], null);
} else {
var vec__65263 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__65266,prerequisite_id){
var vec__65267 = p__65266;
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65267,(0),null);
var visited = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65267,(1),null);
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(blocks_by_id,prerequisite_id);
if(cljs.core.truth_(temp__5823__auto__)){
var prerequisite = temp__5823__auto__;
return (fdg.smoke.add_block_with_prerequisites.cljs$core$IFn$_invoke$arity$4 ? fdg.smoke.add_block_with_prerequisites.cljs$core$IFn$_invoke$arity$4(items,visited,blocks_by_id,prerequisite) : fdg.smoke.add_block_with_prerequisites.call(null,items,visited,blocks_by_id,prerequisite));
} else {
throw (new Error((""+"Missing prerequisite "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prerequisite_id)+" for "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(block)))));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ordered,seen], null),new cljs.core.Keyword(null,"prerequisiteIds","prerequisiteIds",-525714339).cljs$core$IFn$_invoke$arity$1(block));
var ordered__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65263,(0),null);
var seen__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65263,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ordered__$1,block),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(block))], null);
}
});
fdg.smoke.execution_order = (function fdg$smoke$execution_order(blocks){
var sorted_blocks = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ordinal","ordinal",-580748340),blocks);
var blocks_by_id = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.identity),sorted_blocks));
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__65270,block){
var vec__65271 = p__65270;
var ordered = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65271,(0),null);
var seen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65271,(1),null);
return fdg.smoke.add_block_with_prerequisites(ordered,seen,blocks_by_id,block);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY], null),sorted_blocks));
});
fdg.smoke.make_context = (function fdg$smoke$make_context(book_definitions){
var compat_ns = sci.core._copy_ns(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"general-Cartan-2","general-Cartan-2",-2086659920,null),new cljs.core.Symbol(null,"b-rect","b-rect",1077637592,null),new cljs.core.Symbol(null,"home","home",1565974218,null),new cljs.core.Symbol(null,"Y","Y",1079814171,null),cljs.core.with_meta(new cljs.core.Symbol(null,"tensor-test","tensor-test",187752200,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tensor","tensor",1601942578,null),new cljs.core.Symbol(null,"types","types",-2064405130,null),new cljs.core.Symbol(null,"coordsys","coordsys",1968681528,null)], null)))], null)),new cljs.core.Symbol(null,"V","V",471247521,null),cljs.core.with_meta(new cljs.core.Symbol(null,"list-with-substituted-coord","list-with-substituted-coord",-1329045151,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"values","values",2013177083,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null)))], null)),new cljs.core.Symbol(null,"make-operator","make-operator",329621074,null),cljs.core.with_meta(new cljs.core.Symbol(null,"verified-zero","verified-zero",660336789,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"checks","checks",-2128301132,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return `result` only after every primitive component of `checks` is zero."], null)),new cljs.core.Symbol(null,"e-z","e-z",1419791519,null),new cljs.core.Symbol(null,"dtheta","dtheta",1661610920,null),new cljs.core.Symbol(null,"R3-rect-point","R3-rect-point",1857913198,null),new cljs.core.Symbol(null,"Chi","Chi",-16571792,null),new cljs.core.Symbol(null,"R2-rect-point","R2-rect-point",888813323,null),cljs.core.with_meta(new cljs.core.Symbol(null,"show-expression","show-expression",-130780463,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null)))], null)),new cljs.core.Symbol(null,"U","U",-1292433725,null),new cljs.core.Symbol(null,"time","time",-1268547887,null),new cljs.core.Symbol(null,"dx","dx",1258734795,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"sphere-Cartan","sphere-Cartan",22089635,null),new cljs.core.Symbol(null,"velocity","velocity",1059007172,null),new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"X","X",-948439456,null),cljs.core.with_meta(new cljs.core.Symbol(null,"theta","theta",1213021269,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"point","point",-841237505,null)], null)))], null)),new cljs.core.Symbol(null,"dz","dz",-1767195007,null),new cljs.core.Symbol(null,"invert","invert",-1100858266,null),cljs.core.with_meta(new cljs.core.Symbol(null,"phi","phi",113733223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"point","point",-841237505,null)], null)))], null)),new cljs.core.Symbol(null,"d:dtheta","d:dtheta",-1892317928,null),new cljs.core.Symbol(null,"coordinates","coordinates",415198859,null),new cljs.core.Symbol(null,"d:dz","d:dz",865012999,null),new cljs.core.Symbol(null,"nabla","nabla",1447510358,null),new cljs.core.Symbol(null,"S2-Christoffel","S2-Christoffel",-766457879,null),new cljs.core.Symbol(null,"procedure->nform-field","procedure->nform-field",-1750081268,null),new cljs.core.Symbol(null,"R2->R","R2->R",528931499,null),new cljs.core.Symbol(null,"d:dx","d:dx",-480661756,null),new cljs.core.Symbol(null,"d:dphi","d:dphi",1911345419,null),cljs.core.with_meta(new cljs.core.Symbol(null,"sigma","sigma",1576815824,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"low","low",39169118,null),new cljs.core.Symbol(null,"high","high",-627137961,null)], null)))], null)),new cljs.core.Symbol(null,"coordinate","coordinate",1527720318,null),new cljs.core.Symbol(null,"Lagrange-explicit","Lagrange-explicit",-1141246706,null),new cljs.core.Symbol(null,"Chi-inverse","Chi-inverse",-695342219,null),new cljs.core.Symbol(null,"dy","dy",-934888526,null),cljs.core.with_meta(new cljs.core.Symbol(null,"for-each","for-each",25907877,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"values","values",2013177083,null)], null)))], null)),new cljs.core.Symbol(null,"e-x","e-x",-1927627058,null),new cljs.core.Symbol(null,"e-y","e-y",-2078808304,null),new cljs.core.Symbol(null,"dphi","dphi",-927349426,null),new cljs.core.Symbol(null,"d:dy","d:dy",-1032237564,null),new cljs.core.Symbol(null,"R4-rect-point","R4-rect-point",92161849,null),cljs.core.with_meta(new cljs.core.Symbol(null,"unsupported!","unsupported!",1950464583,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"block-id","block-id",1569948693,null),new cljs.core.Symbol(null,"explanation","explanation",213918919,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Marks a known compatibility gap without allowing a misleading result."], null)),new cljs.core.Symbol(null,"R2-rect-basis","R2-rect-basis",-1853493737,null),cljs.core.with_meta(new cljs.core.Symbol(null,"show","show",1063825638,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Identity helper useful while inspecting intermediate values in SCI."], null)),new cljs.core.Symbol(null,"d:dt","d:dt",-164713113,null),cljs.core.with_meta(new cljs.core.Symbol(null,"legacy-frame-maker","legacy-frame-maker",1103070879,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coordinates->event","coordinates->event",-433358088,null),new cljs.core.Symbol(null,"event->coordinates","event->coordinates",2075785453,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Adapts FDG's variadic scmutils frame-maker protocol to Emmy's parameter-map protocol."], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"pair?","pair?",181399999,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null)))], null)),new cljs.core.Symbol(null,"S2-basis","S2-basis",-1073033658,null),new cljs.core.Symbol(null,"omega","omega",1917797179,null),new cljs.core.Symbol(null,"get-rank","get-rank",1510807712,null),cljs.core.with_meta(new cljs.core.Symbol(null,"patch","patch",2021306636,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"patch-name","patch-name",433729698,null),new cljs.core.Symbol(null,"manifold-value","manifold-value",-191911052,null)], null)))], null)),new cljs.core.Symbol(null,"transform-stereographic-Christoffel-to-spherical","transform-stereographic-Christoffel-to-spherical",1072843733,null),new cljs.core.Symbol(null,"procedure->oneform-field","procedure->oneform-field",-501922340,null),cljs.core.with_meta(new cljs.core.Symbol(null,"coordinate-system","coordinate-system",342184256,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"system-name","system-name",-1579875237,null),new cljs.core.Symbol(null,"patch-value","patch-value",-713993264,null)], null)))], null)),new cljs.core.Symbol(null,"Cartan","Cartan",-1256546560,null),new cljs.core.Symbol(null,"d:dtau","d:dtau",391051816,null),new cljs.core.Symbol(null,"procedure->vector-field","procedure->vector-field",1307696776,null),cljs.core.with_meta(new cljs.core.Symbol(null,"series:for-each","series:for-each",-848989576,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"series","series",-2053725075,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)], null)))], null)),new cljs.core.Symbol(null,"Z","Z",2099656115,null),new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.Symbol(null,"T","T",1815772404,null),new cljs.core.Symbol(null,"spherical->stereographic","spherical->stereographic",480143332,null),new cljs.core.Symbol(null,"velocities","velocities",1008302579,null)],[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","general-Cartan-2","fdg.compat/general-Cartan-2",1585098267,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.general_Cartan_2,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","b-rect","fdg.compat/b-rect",2087574583,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.b_rect,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","home","fdg.compat/home",-1733544845,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.home,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","Y","fdg.compat/Y",208271042,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.Y,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","tensor-test","fdg.compat/tensor-test",1197966817,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.tensor_test,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tensor","tensor",1601942578,null),new cljs.core.Symbol(null,"types","types",-2064405130,null),new cljs.core.Symbol(null,"coordsys","coordsys",1968681528,null)], null))], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","V","fdg.compat/V",1344402440,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.V,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","list-with-substituted-coord","fdg.compat/list-with-substituted-coord",2090719128,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.list_with_substituted_coord,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"values","values",2013177083,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null))], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","make-operator","fdg.compat/make-operator",-699190215,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.make_operator,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","verified-zero","fdg.compat/verified-zero",-527343748,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.verified_zero,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"checks","checks",-2128301132,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return `result` only after every primitive component of `checks` is zero."], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","e-z","fdg.compat/e-z",-1821443528,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.e_z,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","dtheta","fdg.compat/dtheta",-1086361343,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.dtheta,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","R3-rect-point","fdg.compat/R3-rect-point",-1419235529,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.R3_rect_point,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","Chi","fdg.compat/Chi",861507547,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.Chi,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","R2-rect-point","fdg.compat/R2-rect-point",1219550692,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.R2_rect_point,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","show-expression","fdg.compat/show-expression",1002514744,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.show_expression,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null))], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","U","fdg.compat/U",1295675514,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.U,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","time","fdg.compat/time",1907201336,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.time,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","dx","fdg.compat/dx",-2016383326,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.dx,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","f","fdg.compat/f",1323364646,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.f,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","sphere-Cartan","fdg.compat/sphere-Cartan",1570664924,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.sphere_Cartan,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","velocity","fdg.compat/velocity",-54497105,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.velocity,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","m","fdg.compat/m",-1899718359,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.m,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","X","fdg.compat/X",77745609,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.X,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","theta","fdg.compat/theta",-1936176580,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.theta,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"point","point",-841237505,null)], null))], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","dz","fdg.compat/dz",1515279720,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.dz,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","invert","fdg.compat/invert",2050812365,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.invert,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","phi","fdg.compat/phi",-1030638656,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.phi,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"point","point",-841237505,null)], null))], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","d:dtheta","fdg.compat/d:dtheta",-880845967,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.d_COLON_dtheta,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","coordinates","fdg.compat/coordinates",619287396,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.coordinates,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","d:dz","fdg.compat/d:dz",2009462750,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.d_COLON_dz,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","nabla","fdg.compat/nabla",302618431,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.nabla,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","S2-Christoffel","fdg.compat/S2-Christoffel",395972934,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.S2_Christoffel,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","procedure->nform-field","fdg.compat/procedure->nform-field",-395035691,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.procedure__GT_nform_field,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","R2->R","fdg.compat/R2->R",-1031951248,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.R2__GT_R,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","d:dx","fdg.compat/d:dx",-1483811345,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.d_COLON_dx,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","d:dphi","fdg.compat/d:dphi",-1113519152,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.d_COLON_dphi,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","sigma","fdg.compat/sigma",-1716348229,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.sigma,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"low","low",39169118,null),new cljs.core.Symbol(null,"high","high",-627137961,null)], null))], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","coordinate","fdg.compat/coordinate",398750489,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.coordinate,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","Lagrange-explicit","fdg.compat/Lagrange-explicit",-13335593,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.Lagrange_explicit,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","Chi-inverse","fdg.compat/Chi-inverse",427234524,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.Chi_inverse,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","dy","fdg.compat/dy",-1938035347,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.dy,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","for-each","fdg.compat/for-each",-977143794,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.for_each,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"values","values",2013177083,null)], null))], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","e-x","fdg.compat/e-x",1230102679,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.e_x,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","e-y","fdg.compat/e-y",1238191611,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.e_y,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","dphi","fdg.compat/dphi",-1929957131,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.dphi,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","d:dy","fdg.compat/d:dy",-30149533,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.d_COLON_dy,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","R4-rect-point","fdg.compat/R4-rect-point",1235808480,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.R4_rect_point,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","unsupported!","fdg.compat/unsupported!",947310766,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.unsupported_BANG_,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"block-id","block-id",1569948693,null),new cljs.core.Symbol(null,"explanation","explanation",213918919,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Marks a known compatibility gap without allowing a misleading result."], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","R2-rect-basis","fdg.compat/R2-rect-basis",-715438864,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.R2_rect_basis,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","show","fdg.compat/show",-81400129,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.show,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Identity helper useful while inspecting intermediate values in SCI."], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","d:dt","fdg.compat/d:dt",845354814,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.d_COLON_dt,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","legacy-frame-maker","fdg.compat/legacy-frame-maker",99955524,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.legacy_frame_maker,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coordinates->event","coordinates->event",-433358088,null),new cljs.core.Symbol(null,"event->coordinates","event->coordinates",2075785453,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Adapts FDG's variadic scmutils frame-maker protocol to Emmy's parameter-map protocol."], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","pair?","fdg.compat/pair?",-694592668,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.pair_QMARK_,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null))], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","S2-basis","fdg.compat/S2-basis",-63937491,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.S2_basis,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","omega","fdg.compat/omega",-1316743532,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.omega,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","get-rank","fdg.compat/get-rank",-1638776309,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.get_rank,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","patch","fdg.compat/patch",-1137424539,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.patch,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"patch-name","patch-name",433729698,null),new cljs.core.Symbol(null,"manifold-value","manifold-value",-191911052,null)], null))], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","transform-stereographic-Christoffel-to-spherical","fdg.compat/transform-stereographic-Christoffel-to-spherical",1137309116,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.transform_stereographic_Christoffel_to_spherical,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","procedure->oneform-field","fdg.compat/procedure->oneform-field",669526919,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.procedure__GT_oneform_field,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","coordinate-system","fdg.compat/coordinate-system",-775974997,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.coordinate_system,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"system-name","system-name",-1579875237,null),new cljs.core.Symbol(null,"patch-value","patch-value",-713993264,null)], null))], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","Cartan","fdg.compat/Cartan",1900921195,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.Cartan,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","d:dtau","fdg.compat/d:dtau",1796286451,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.d_COLON_dtau,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","procedure->vector-field","fdg.compat/procedure->vector-field",-1874892461,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.procedure__GT_vector_field,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","series:for-each","fdg.compat/series:for-each",19440673,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.series_COLON_for_each,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"series","series",-2053725075,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)], null))], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","Z","fdg.compat/Z",955499372,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.Z,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","g","fdg.compat/g",230125905,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.g,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","T","fdg.compat/T",678482515,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.T,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","spherical->stereographic","fdg.compat/spherical->stereographic",-800017987,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.spherical__GT_stereographic,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","velocities","fdg.compat/velocities",-128733350,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.velocities,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null)]),sci.core.create_ns.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"fdg.compat","fdg.compat",-2137491212,null)));
var config = cljs.core.update.cljs$core$IFn$_invoke$arity$5(emmy.sci.config,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.assoc,new cljs.core.Symbol(null,"fdg.compat","fdg.compat",-2137491212,null),compat_ns);
var context = sci.core.init(config);
var referred_names = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.key)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(emmy.sci.namespaces,new cljs.core.Symbol(null,"emmy.env","emmy.env",-2036137056,null)),compat_ns));
var local_definitions = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__65274_SHARP_){
return cljs.core.contains_QMARK_(referred_names,p1__65274_SHARP_);
}),book_definitions);
var emmy_symbols = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(emmy.sci.namespaces,new cljs.core.Symbol(null,"emmy.env","emmy.env",-2036137056,null))))));
var setup = (""+"(ns fdg.session "+"(:refer-clojure :exclude [+ - * / = compare zero? ref partial numerator denominator]) "+"(:require [emmy.env :refer ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(emmy_symbols)+"]] "+"[fdg.compat :refer :all]))\n"+"(declare "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.sort.cljs$core$IFn$_invoke$arity$1(local_definitions)))+")");
sci.core.eval_string_STAR_(context,setup);

return context;
});
fdg.smoke.main = (function fdg$smoke$main(){
var fs = require("fs");
var argv = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(process.argv);
var capture_QMARK_ = cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["--capture-results",null], null), null),argv);
var verbose_QMARK_ = cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["--verbose",null], null), null),argv);
var chapter_arg = cljs.core.some((function (p1__65275_SHARP_){
if(clojure.string.starts_with_QMARK_(p1__65275_SHARP_,"--chapter=")){
return p1__65275_SHARP_;
} else {
return null;
}
}),argv);
var selected_chapter = (function (){var G__65283 = chapter_arg;
if((G__65283 == null)){
return null;
} else {
return clojure.string.replace(G__65283,"--chapter=","");
}
})();
var skip_arg = cljs.core.some((function (p1__65276_SHARP_){
if(clojure.string.starts_with_QMARK_(p1__65276_SHARP_,"--skip=")){
return p1__65276_SHARP_;
} else {
return null;
}
}),argv);
var skipped_ids = (cljs.core.truth_(skip_arg)?cljs.core.set(clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(skip_arg,"--skip=",""),/,/)):cljs.core.PersistentHashSet.EMPTY);
var definitions_only_arg = cljs.core.some((function (p1__65277_SHARP_){
if(clojure.string.starts_with_QMARK_(p1__65277_SHARP_,"--definitions-only=")){
return p1__65277_SHARP_;
} else {
return null;
}
}),argv);
var definitions_only_ids = (cljs.core.truth_(definitions_only_arg)?cljs.core.set(clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(definitions_only_arg,"--definitions-only=",""),/,/)):cljs.core.PersistentHashSet.EMPTY);
var through_arg = cljs.core.some((function (p1__65278_SHARP_){
if(clojure.string.starts_with_QMARK_(p1__65278_SHARP_,"--through=")){
return p1__65278_SHARP_;
} else {
return null;
}
}),argv);
var through_id = (function (){var G__65284 = through_arg;
if((G__65284 == null)){
return null;
} else {
return clojure.string.replace(G__65284,"--through=","");
}
})();
var captured_count = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var failures = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var pending_writes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var manifest = (function (p1__65281_SHARP_){
if(cljs.core.truth_(through_id)){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (block){
return (cljs.core.compare(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(block),through_id) <= (0));
}),p1__65281_SHARP_);
} else {
return p1__65281_SHARP_;
}
})(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__65280_SHARP_){
return cljs.core.contains_QMARK_(skipped_ids,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__65280_SHARP_));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__65279_SHARP_){
return (((selected_chapter == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_chapter,new cljs.core.Keyword(null,"chapter","chapter",-238644368).cljs$core$IFn$_invoke$arity$1(p1__65279_SHARP_))));
}),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(fs.readFileSync("public/generated/blocks.json","utf8")),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)))));
var result_context = fdg.smoke.make_context(cljs.core.PersistentHashSet.EMPTY);
var result = fdg.smoke.eval_session_BANG_(result_context,"(square 3)");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((9),result)){
} else {
throw (new Error((""+"Expected 9 from (square 3), got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(result))));
}

var seq__65285_65375 = cljs.core.seq(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"chapter","chapter",-238644368),manifest)));
var chunk__65287_65376 = null;
var count__65288_65377 = (0);
var i__65289_65378 = (0);
while(true){
if((i__65289_65378 < count__65288_65377)){
var chapter_65379 = chunk__65287_65376.cljs$core$IIndexed$_nth$arity$2(null,i__65289_65378);
var blocks_65380 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (seq__65285_65375,chunk__65287_65376,count__65288_65377,i__65289_65378,chapter_65379,fs,argv,capture_QMARK_,verbose_QMARK_,chapter_arg,selected_chapter,skip_arg,skipped_ids,definitions_only_arg,definitions_only_ids,through_arg,through_id,captured_count,failures,pending_writes,manifest,result_context,result){
return (function (p1__65282_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(chapter_65379,new cljs.core.Keyword(null,"chapter","chapter",-238644368).cljs$core$IFn$_invoke$arity$1(p1__65282_SHARP_));
});})(seq__65285_65375,chunk__65287_65376,count__65288_65377,i__65289_65378,chapter_65379,fs,argv,capture_QMARK_,verbose_QMARK_,chapter_arg,selected_chapter,skip_arg,skipped_ids,definitions_only_arg,definitions_only_ids,through_arg,through_id,captured_count,failures,pending_writes,manifest,result_context,result))
,manifest);
var book_definitions_65381 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"definitions","definitions",167529986),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([blocks_65380], 0)));
var context_65382 = fdg.smoke.make_context(book_definitions_65381);
var definitions_65383 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var seq__65311_65384 = cljs.core.seq(fdg.smoke.execution_order(blocks_65380));
var chunk__65313_65385 = null;
var count__65314_65386 = (0);
var i__65315_65387 = (0);
while(true){
if((i__65315_65387 < count__65314_65386)){
var block_65388 = chunk__65313_65385.cljs$core$IIndexed$_nth$arity$2(null,i__65315_65387);
if(cljs.core.truth_((function (){var and__5160__auto__ = cljs.core.not(new cljs.core.Keyword(null,"backgroundSetup","backgroundSetup",1351711523).cljs$core$IFn$_invoke$arity$1(block_65388));
if(and__5160__auto__){
return new cljs.core.Keyword(null,"executable","executable",1478603659).cljs$core$IFn$_invoke$arity$1(block_65388);
} else {
return and__5160__auto__;
}
})())){
try{if(cljs.core.truth_(verbose_QMARK_)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"Running "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(block_65388)))], 0));
} else {
}

fdg.smoke.prepare_block_BANG_(context_65382,definitions_65383,block_65388);

var stored_code_65389 = fs.readFileSync((""+"public/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"codePath","codePath",1496228739).cljs$core$IFn$_invoke$arity$1(block_65388))),"utf8");
var code_65390 = fdg.smoke.code_without_captured_result(stored_code_65389);
var definitions_only_QMARK__65391 = cljs.core.contains_QMARK_(definitions_only_ids,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(block_65388));
var forms_65392 = ((definitions_only_QMARK__65391)?cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"capturesResult","capturesResult",-1776961836),new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(block_65388)):new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(block_65388));
var form_results_65393 = ((cljs.core.seq(forms_65392))?cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (seq__65311_65384,chunk__65313_65385,count__65314_65386,i__65315_65387,seq__65285_65375,chunk__65287_65376,count__65288_65377,i__65289_65378,stored_code_65389,code_65390,definitions_only_QMARK__65391,forms_65392,block_65388,book_definitions_65381,context_65382,definitions_65383,blocks_65380,chapter_65379,fs,argv,capture_QMARK_,verbose_QMARK_,chapter_arg,selected_chapter,skip_arg,skipped_ids,definitions_only_arg,definitions_only_ids,through_arg,through_id,captured_count,failures,pending_writes,manifest,result_context,result){
return (function (form){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,fdg.smoke.eval_session_BANG_(context_65382,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(form))], null);
});})(seq__65311_65384,chunk__65313_65385,count__65314_65386,i__65315_65387,seq__65285_65375,chunk__65287_65376,count__65288_65377,i__65289_65378,stored_code_65389,code_65390,definitions_only_QMARK__65391,forms_65392,block_65388,book_definitions_65381,context_65382,definitions_65383,blocks_65380,chapter_65379,fs,argv,capture_QMARK_,verbose_QMARK_,chapter_arg,selected_chapter,skip_arg,skipped_ids,definitions_only_arg,definitions_only_ids,through_arg,through_id,captured_count,failures,pending_writes,manifest,result_context,result))
,forms_65392)):null);
var captured_results_65394 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"capturesResult","capturesResult",-1776961836),cljs.core.first),form_results_65393);
var result_65395__$1 = ((cljs.core.seq(forms_65392))?null:fdg.smoke.eval_session_BANG_(context_65382,code_65390));
if(cljs.core.truth_((function (){var and__5160__auto__ = capture_QMARK_;
if(cljs.core.truth_(and__5160__auto__)){
return (((!(definitions_only_QMARK__65391))) && (cljs.core.seq(captured_results_65394)));
} else {
return and__5160__auto__;
}
})())){
fdg.smoke.stage_result_BANG_(pending_writes,block_65388,code_65390,form_results_65393);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(captured_count,cljs.core._PLUS_,cljs.core.count(captured_results_65394));
} else {
}

if(cljs.core.truth_((function (){var and__5160__auto__ = capture_QMARK_;
if(cljs.core.truth_(and__5160__auto__)){
return (((!(definitions_only_QMARK__65391))) && (cljs.core.empty_QMARK_(captured_results_65394)));
} else {
return and__5160__auto__;
}
})())){
fdg.smoke.stage_cleared_result_BANG_(pending_writes,block_65388,stored_code_65389);
} else {
}

if(cljs.core.contains_QMARK_(fdg.fdg_oracle.expected_frozen_results,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(block_65388))){
fdg.fdg_oracle.assert_result_BANG_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(block_65388),fdg.smoke.eval_session_BANG_(context_65382,(""+"(freeze (simplify (do "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(code_65390)+")))")));
} else {
}
}catch (e65319){var error_65396 = e65319;
var failure_65397 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(block_65388))+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(error_65396.message));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(failures,cljs.core.conj,failure_65397);

console.error((""+"EMMY BLOCK FAILED: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(failure_65397)));
}

var G__65398 = seq__65311_65384;
var G__65399 = chunk__65313_65385;
var G__65400 = count__65314_65386;
var G__65401 = (i__65315_65387 + (1));
seq__65311_65384 = G__65398;
chunk__65313_65385 = G__65399;
count__65314_65386 = G__65400;
i__65315_65387 = G__65401;
continue;
} else {
var G__65402 = seq__65311_65384;
var G__65403 = chunk__65313_65385;
var G__65404 = count__65314_65386;
var G__65405 = (i__65315_65387 + (1));
seq__65311_65384 = G__65402;
chunk__65313_65385 = G__65403;
count__65314_65386 = G__65404;
i__65315_65387 = G__65405;
continue;
}
} else {
var temp__5825__auto___65406 = cljs.core.seq(seq__65311_65384);
if(temp__5825__auto___65406){
var seq__65311_65407__$1 = temp__5825__auto___65406;
if(cljs.core.chunked_seq_QMARK_(seq__65311_65407__$1)){
var c__5694__auto___65408 = cljs.core.chunk_first(seq__65311_65407__$1);
var G__65409 = cljs.core.chunk_rest(seq__65311_65407__$1);
var G__65410 = c__5694__auto___65408;
var G__65411 = cljs.core.count(c__5694__auto___65408);
var G__65412 = (0);
seq__65311_65384 = G__65409;
chunk__65313_65385 = G__65410;
count__65314_65386 = G__65411;
i__65315_65387 = G__65412;
continue;
} else {
var block_65413 = cljs.core.first(seq__65311_65407__$1);
if(cljs.core.truth_((function (){var and__5160__auto__ = cljs.core.not(new cljs.core.Keyword(null,"backgroundSetup","backgroundSetup",1351711523).cljs$core$IFn$_invoke$arity$1(block_65413));
if(and__5160__auto__){
return new cljs.core.Keyword(null,"executable","executable",1478603659).cljs$core$IFn$_invoke$arity$1(block_65413);
} else {
return and__5160__auto__;
}
})())){
try{if(cljs.core.truth_(verbose_QMARK_)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"Running "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(block_65413)))], 0));
} else {
}

fdg.smoke.prepare_block_BANG_(context_65382,definitions_65383,block_65413);

var stored_code_65414 = fs.readFileSync((""+"public/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"codePath","codePath",1496228739).cljs$core$IFn$_invoke$arity$1(block_65413))),"utf8");
var code_65415 = fdg.smoke.code_without_captured_result(stored_code_65414);
var definitions_only_QMARK__65416 = cljs.core.contains_QMARK_(definitions_only_ids,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(block_65413));
var forms_65417 = ((definitions_only_QMARK__65416)?cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"capturesResult","capturesResult",-1776961836),new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(block_65413)):new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(block_65413));
var form_results_65418 = ((cljs.core.seq(forms_65417))?cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (seq__65311_65384,chunk__65313_65385,count__65314_65386,i__65315_65387,seq__65285_65375,chunk__65287_65376,count__65288_65377,i__65289_65378,stored_code_65414,code_65415,definitions_only_QMARK__65416,forms_65417,block_65413,seq__65311_65407__$1,temp__5825__auto___65406,book_definitions_65381,context_65382,definitions_65383,blocks_65380,chapter_65379,fs,argv,capture_QMARK_,verbose_QMARK_,chapter_arg,selected_chapter,skip_arg,skipped_ids,definitions_only_arg,definitions_only_ids,through_arg,through_id,captured_count,failures,pending_writes,manifest,result_context,result){
return (function (form){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,fdg.smoke.eval_session_BANG_(context_65382,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(form))], null);
});})(seq__65311_65384,chunk__65313_65385,count__65314_65386,i__65315_65387,seq__65285_65375,chunk__65287_65376,count__65288_65377,i__65289_65378,stored_code_65414,code_65415,definitions_only_QMARK__65416,forms_65417,block_65413,seq__65311_65407__$1,temp__5825__auto___65406,book_definitions_65381,context_65382,definitions_65383,blocks_65380,chapter_65379,fs,argv,capture_QMARK_,verbose_QMARK_,chapter_arg,selected_chapter,skip_arg,skipped_ids,definitions_only_arg,definitions_only_ids,through_arg,through_id,captured_count,failures,pending_writes,manifest,result_context,result))
,forms_65417)):null);
var captured_results_65419 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"capturesResult","capturesResult",-1776961836),cljs.core.first),form_results_65418);
var result_65420__$1 = ((cljs.core.seq(forms_65417))?null:fdg.smoke.eval_session_BANG_(context_65382,code_65415));
if(cljs.core.truth_((function (){var and__5160__auto__ = capture_QMARK_;
if(cljs.core.truth_(and__5160__auto__)){
return (((!(definitions_only_QMARK__65416))) && (cljs.core.seq(captured_results_65419)));
} else {
return and__5160__auto__;
}
})())){
fdg.smoke.stage_result_BANG_(pending_writes,block_65413,code_65415,form_results_65418);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(captured_count,cljs.core._PLUS_,cljs.core.count(captured_results_65419));
} else {
}

if(cljs.core.truth_((function (){var and__5160__auto__ = capture_QMARK_;
if(cljs.core.truth_(and__5160__auto__)){
return (((!(definitions_only_QMARK__65416))) && (cljs.core.empty_QMARK_(captured_results_65419)));
} else {
return and__5160__auto__;
}
})())){
fdg.smoke.stage_cleared_result_BANG_(pending_writes,block_65413,stored_code_65414);
} else {
}

if(cljs.core.contains_QMARK_(fdg.fdg_oracle.expected_frozen_results,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(block_65413))){
fdg.fdg_oracle.assert_result_BANG_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(block_65413),fdg.smoke.eval_session_BANG_(context_65382,(""+"(freeze (simplify (do "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(code_65415)+")))")));
} else {
}
}catch (e65320){var error_65421 = e65320;
var failure_65422 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(block_65413))+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(error_65421.message));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(failures,cljs.core.conj,failure_65422);

console.error((""+"EMMY BLOCK FAILED: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(failure_65422)));
}

var G__65423 = cljs.core.next(seq__65311_65407__$1);
var G__65424 = null;
var G__65425 = (0);
var G__65426 = (0);
seq__65311_65384 = G__65423;
chunk__65313_65385 = G__65424;
count__65314_65386 = G__65425;
i__65315_65387 = G__65426;
continue;
} else {
var G__65427 = cljs.core.next(seq__65311_65407__$1);
var G__65428 = null;
var G__65429 = (0);
var G__65430 = (0);
seq__65311_65384 = G__65427;
chunk__65313_65385 = G__65428;
count__65314_65386 = G__65429;
i__65315_65387 = G__65430;
continue;
}
}
} else {
}
}
break;
}


var G__65431 = seq__65285_65375;
var G__65432 = chunk__65287_65376;
var G__65433 = count__65288_65377;
var G__65434 = (i__65289_65378 + (1));
seq__65285_65375 = G__65431;
chunk__65287_65376 = G__65432;
count__65288_65377 = G__65433;
i__65289_65378 = G__65434;
continue;
} else {
var temp__5825__auto___65435 = cljs.core.seq(seq__65285_65375);
if(temp__5825__auto___65435){
var seq__65285_65436__$1 = temp__5825__auto___65435;
if(cljs.core.chunked_seq_QMARK_(seq__65285_65436__$1)){
var c__5694__auto___65437 = cljs.core.chunk_first(seq__65285_65436__$1);
var G__65438 = cljs.core.chunk_rest(seq__65285_65436__$1);
var G__65439 = c__5694__auto___65437;
var G__65440 = cljs.core.count(c__5694__auto___65437);
var G__65441 = (0);
seq__65285_65375 = G__65438;
chunk__65287_65376 = G__65439;
count__65288_65377 = G__65440;
i__65289_65378 = G__65441;
continue;
} else {
var chapter_65442 = cljs.core.first(seq__65285_65436__$1);
var blocks_65443 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (seq__65285_65375,chunk__65287_65376,count__65288_65377,i__65289_65378,chapter_65442,seq__65285_65436__$1,temp__5825__auto___65435,fs,argv,capture_QMARK_,verbose_QMARK_,chapter_arg,selected_chapter,skip_arg,skipped_ids,definitions_only_arg,definitions_only_ids,through_arg,through_id,captured_count,failures,pending_writes,manifest,result_context,result){
return (function (p1__65282_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(chapter_65442,new cljs.core.Keyword(null,"chapter","chapter",-238644368).cljs$core$IFn$_invoke$arity$1(p1__65282_SHARP_));
});})(seq__65285_65375,chunk__65287_65376,count__65288_65377,i__65289_65378,chapter_65442,seq__65285_65436__$1,temp__5825__auto___65435,fs,argv,capture_QMARK_,verbose_QMARK_,chapter_arg,selected_chapter,skip_arg,skipped_ids,definitions_only_arg,definitions_only_ids,through_arg,through_id,captured_count,failures,pending_writes,manifest,result_context,result))
,manifest);
var book_definitions_65444 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"definitions","definitions",167529986),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([blocks_65443], 0)));
var context_65445 = fdg.smoke.make_context(book_definitions_65444);
var definitions_65446 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var seq__65321_65447 = cljs.core.seq(fdg.smoke.execution_order(blocks_65443));
var chunk__65323_65448 = null;
var count__65324_65449 = (0);
var i__65325_65450 = (0);
while(true){
if((i__65325_65450 < count__65324_65449)){
var block_65451 = chunk__65323_65448.cljs$core$IIndexed$_nth$arity$2(null,i__65325_65450);
if(cljs.core.truth_((function (){var and__5160__auto__ = cljs.core.not(new cljs.core.Keyword(null,"backgroundSetup","backgroundSetup",1351711523).cljs$core$IFn$_invoke$arity$1(block_65451));
if(and__5160__auto__){
return new cljs.core.Keyword(null,"executable","executable",1478603659).cljs$core$IFn$_invoke$arity$1(block_65451);
} else {
return and__5160__auto__;
}
})())){
try{if(cljs.core.truth_(verbose_QMARK_)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"Running "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(block_65451)))], 0));
} else {
}

fdg.smoke.prepare_block_BANG_(context_65445,definitions_65446,block_65451);

var stored_code_65452 = fs.readFileSync((""+"public/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"codePath","codePath",1496228739).cljs$core$IFn$_invoke$arity$1(block_65451))),"utf8");
var code_65453 = fdg.smoke.code_without_captured_result(stored_code_65452);
var definitions_only_QMARK__65454 = cljs.core.contains_QMARK_(definitions_only_ids,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(block_65451));
var forms_65455 = ((definitions_only_QMARK__65454)?cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"capturesResult","capturesResult",-1776961836),new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(block_65451)):new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(block_65451));
var form_results_65456 = ((cljs.core.seq(forms_65455))?cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (seq__65321_65447,chunk__65323_65448,count__65324_65449,i__65325_65450,seq__65285_65375,chunk__65287_65376,count__65288_65377,i__65289_65378,stored_code_65452,code_65453,definitions_only_QMARK__65454,forms_65455,block_65451,book_definitions_65444,context_65445,definitions_65446,blocks_65443,chapter_65442,seq__65285_65436__$1,temp__5825__auto___65435,fs,argv,capture_QMARK_,verbose_QMARK_,chapter_arg,selected_chapter,skip_arg,skipped_ids,definitions_only_arg,definitions_only_ids,through_arg,through_id,captured_count,failures,pending_writes,manifest,result_context,result){
return (function (form){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,fdg.smoke.eval_session_BANG_(context_65445,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(form))], null);
});})(seq__65321_65447,chunk__65323_65448,count__65324_65449,i__65325_65450,seq__65285_65375,chunk__65287_65376,count__65288_65377,i__65289_65378,stored_code_65452,code_65453,definitions_only_QMARK__65454,forms_65455,block_65451,book_definitions_65444,context_65445,definitions_65446,blocks_65443,chapter_65442,seq__65285_65436__$1,temp__5825__auto___65435,fs,argv,capture_QMARK_,verbose_QMARK_,chapter_arg,selected_chapter,skip_arg,skipped_ids,definitions_only_arg,definitions_only_ids,through_arg,through_id,captured_count,failures,pending_writes,manifest,result_context,result))
,forms_65455)):null);
var captured_results_65457 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"capturesResult","capturesResult",-1776961836),cljs.core.first),form_results_65456);
var result_65458__$1 = ((cljs.core.seq(forms_65455))?null:fdg.smoke.eval_session_BANG_(context_65445,code_65453));
if(cljs.core.truth_((function (){var and__5160__auto__ = capture_QMARK_;
if(cljs.core.truth_(and__5160__auto__)){
return (((!(definitions_only_QMARK__65454))) && (cljs.core.seq(captured_results_65457)));
} else {
return and__5160__auto__;
}
})())){
fdg.smoke.stage_result_BANG_(pending_writes,block_65451,code_65453,form_results_65456);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(captured_count,cljs.core._PLUS_,cljs.core.count(captured_results_65457));
} else {
}

if(cljs.core.truth_((function (){var and__5160__auto__ = capture_QMARK_;
if(cljs.core.truth_(and__5160__auto__)){
return (((!(definitions_only_QMARK__65454))) && (cljs.core.empty_QMARK_(captured_results_65457)));
} else {
return and__5160__auto__;
}
})())){
fdg.smoke.stage_cleared_result_BANG_(pending_writes,block_65451,stored_code_65452);
} else {
}

if(cljs.core.contains_QMARK_(fdg.fdg_oracle.expected_frozen_results,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(block_65451))){
fdg.fdg_oracle.assert_result_BANG_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(block_65451),fdg.smoke.eval_session_BANG_(context_65445,(""+"(freeze (simplify (do "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(code_65453)+")))")));
} else {
}
}catch (e65329){var error_65459 = e65329;
var failure_65460 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(block_65451))+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(error_65459.message));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(failures,cljs.core.conj,failure_65460);

console.error((""+"EMMY BLOCK FAILED: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(failure_65460)));
}

var G__65461 = seq__65321_65447;
var G__65462 = chunk__65323_65448;
var G__65463 = count__65324_65449;
var G__65464 = (i__65325_65450 + (1));
seq__65321_65447 = G__65461;
chunk__65323_65448 = G__65462;
count__65324_65449 = G__65463;
i__65325_65450 = G__65464;
continue;
} else {
var G__65465 = seq__65321_65447;
var G__65466 = chunk__65323_65448;
var G__65467 = count__65324_65449;
var G__65468 = (i__65325_65450 + (1));
seq__65321_65447 = G__65465;
chunk__65323_65448 = G__65466;
count__65324_65449 = G__65467;
i__65325_65450 = G__65468;
continue;
}
} else {
var temp__5825__auto___65469__$1 = cljs.core.seq(seq__65321_65447);
if(temp__5825__auto___65469__$1){
var seq__65321_65470__$1 = temp__5825__auto___65469__$1;
if(cljs.core.chunked_seq_QMARK_(seq__65321_65470__$1)){
var c__5694__auto___65471 = cljs.core.chunk_first(seq__65321_65470__$1);
var G__65472 = cljs.core.chunk_rest(seq__65321_65470__$1);
var G__65473 = c__5694__auto___65471;
var G__65474 = cljs.core.count(c__5694__auto___65471);
var G__65475 = (0);
seq__65321_65447 = G__65472;
chunk__65323_65448 = G__65473;
count__65324_65449 = G__65474;
i__65325_65450 = G__65475;
continue;
} else {
var block_65476 = cljs.core.first(seq__65321_65470__$1);
if(cljs.core.truth_((function (){var and__5160__auto__ = cljs.core.not(new cljs.core.Keyword(null,"backgroundSetup","backgroundSetup",1351711523).cljs$core$IFn$_invoke$arity$1(block_65476));
if(and__5160__auto__){
return new cljs.core.Keyword(null,"executable","executable",1478603659).cljs$core$IFn$_invoke$arity$1(block_65476);
} else {
return and__5160__auto__;
}
})())){
try{if(cljs.core.truth_(verbose_QMARK_)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"Running "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(block_65476)))], 0));
} else {
}

fdg.smoke.prepare_block_BANG_(context_65445,definitions_65446,block_65476);

var stored_code_65477 = fs.readFileSync((""+"public/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"codePath","codePath",1496228739).cljs$core$IFn$_invoke$arity$1(block_65476))),"utf8");
var code_65478 = fdg.smoke.code_without_captured_result(stored_code_65477);
var definitions_only_QMARK__65479 = cljs.core.contains_QMARK_(definitions_only_ids,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(block_65476));
var forms_65480 = ((definitions_only_QMARK__65479)?cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"capturesResult","capturesResult",-1776961836),new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(block_65476)):new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(block_65476));
var form_results_65481 = ((cljs.core.seq(forms_65480))?cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (seq__65321_65447,chunk__65323_65448,count__65324_65449,i__65325_65450,seq__65285_65375,chunk__65287_65376,count__65288_65377,i__65289_65378,stored_code_65477,code_65478,definitions_only_QMARK__65479,forms_65480,block_65476,seq__65321_65470__$1,temp__5825__auto___65469__$1,book_definitions_65444,context_65445,definitions_65446,blocks_65443,chapter_65442,seq__65285_65436__$1,temp__5825__auto___65435,fs,argv,capture_QMARK_,verbose_QMARK_,chapter_arg,selected_chapter,skip_arg,skipped_ids,definitions_only_arg,definitions_only_ids,through_arg,through_id,captured_count,failures,pending_writes,manifest,result_context,result){
return (function (form){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,fdg.smoke.eval_session_BANG_(context_65445,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(form))], null);
});})(seq__65321_65447,chunk__65323_65448,count__65324_65449,i__65325_65450,seq__65285_65375,chunk__65287_65376,count__65288_65377,i__65289_65378,stored_code_65477,code_65478,definitions_only_QMARK__65479,forms_65480,block_65476,seq__65321_65470__$1,temp__5825__auto___65469__$1,book_definitions_65444,context_65445,definitions_65446,blocks_65443,chapter_65442,seq__65285_65436__$1,temp__5825__auto___65435,fs,argv,capture_QMARK_,verbose_QMARK_,chapter_arg,selected_chapter,skip_arg,skipped_ids,definitions_only_arg,definitions_only_ids,through_arg,through_id,captured_count,failures,pending_writes,manifest,result_context,result))
,forms_65480)):null);
var captured_results_65482 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"capturesResult","capturesResult",-1776961836),cljs.core.first),form_results_65481);
var result_65483__$1 = ((cljs.core.seq(forms_65480))?null:fdg.smoke.eval_session_BANG_(context_65445,code_65478));
if(cljs.core.truth_((function (){var and__5160__auto__ = capture_QMARK_;
if(cljs.core.truth_(and__5160__auto__)){
return (((!(definitions_only_QMARK__65479))) && (cljs.core.seq(captured_results_65482)));
} else {
return and__5160__auto__;
}
})())){
fdg.smoke.stage_result_BANG_(pending_writes,block_65476,code_65478,form_results_65481);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(captured_count,cljs.core._PLUS_,cljs.core.count(captured_results_65482));
} else {
}

if(cljs.core.truth_((function (){var and__5160__auto__ = capture_QMARK_;
if(cljs.core.truth_(and__5160__auto__)){
return (((!(definitions_only_QMARK__65479))) && (cljs.core.empty_QMARK_(captured_results_65482)));
} else {
return and__5160__auto__;
}
})())){
fdg.smoke.stage_cleared_result_BANG_(pending_writes,block_65476,stored_code_65477);
} else {
}

if(cljs.core.contains_QMARK_(fdg.fdg_oracle.expected_frozen_results,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(block_65476))){
fdg.fdg_oracle.assert_result_BANG_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(block_65476),fdg.smoke.eval_session_BANG_(context_65445,(""+"(freeze (simplify (do "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(code_65478)+")))")));
} else {
}
}catch (e65330){var error_65484 = e65330;
var failure_65485 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(block_65476))+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(error_65484.message));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(failures,cljs.core.conj,failure_65485);

console.error((""+"EMMY BLOCK FAILED: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(failure_65485)));
}

var G__65486 = cljs.core.next(seq__65321_65470__$1);
var G__65487 = null;
var G__65488 = (0);
var G__65489 = (0);
seq__65321_65447 = G__65486;
chunk__65323_65448 = G__65487;
count__65324_65449 = G__65488;
i__65325_65450 = G__65489;
continue;
} else {
var G__65490 = cljs.core.next(seq__65321_65470__$1);
var G__65491 = null;
var G__65492 = (0);
var G__65493 = (0);
seq__65321_65447 = G__65490;
chunk__65323_65448 = G__65491;
count__65324_65449 = G__65492;
i__65325_65450 = G__65493;
continue;
}
}
} else {
}
}
break;
}


var G__65494 = cljs.core.next(seq__65285_65436__$1);
var G__65495 = null;
var G__65496 = (0);
var G__65497 = (0);
seq__65285_65375 = G__65494;
chunk__65287_65376 = G__65495;
count__65288_65377 = G__65496;
i__65289_65378 = G__65497;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_((function (){var and__5160__auto__ = capture_QMARK_;
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.empty_QMARK_(cljs.core.deref(failures));
} else {
return and__5160__auto__;
}
})())){
var seq__65331_65498 = cljs.core.seq(cljs.core.deref(pending_writes));
var chunk__65332_65499 = null;
var count__65333_65500 = (0);
var i__65334_65501 = (0);
while(true){
if((i__65334_65501 < count__65333_65500)){
var vec__65341_65502 = chunk__65332_65499.cljs$core$IIndexed$_nth$arity$2(null,i__65334_65501);
var file_65503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65341_65502,(0),null);
var content_65504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65341_65502,(1),null);
fs.writeFileSync(file_65503,content_65504,"utf8");


var G__65505 = seq__65331_65498;
var G__65506 = chunk__65332_65499;
var G__65507 = count__65333_65500;
var G__65508 = (i__65334_65501 + (1));
seq__65331_65498 = G__65505;
chunk__65332_65499 = G__65506;
count__65333_65500 = G__65507;
i__65334_65501 = G__65508;
continue;
} else {
var temp__5825__auto___65509 = cljs.core.seq(seq__65331_65498);
if(temp__5825__auto___65509){
var seq__65331_65510__$1 = temp__5825__auto___65509;
if(cljs.core.chunked_seq_QMARK_(seq__65331_65510__$1)){
var c__5694__auto___65511 = cljs.core.chunk_first(seq__65331_65510__$1);
var G__65512 = cljs.core.chunk_rest(seq__65331_65510__$1);
var G__65513 = c__5694__auto___65511;
var G__65514 = cljs.core.count(c__5694__auto___65511);
var G__65515 = (0);
seq__65331_65498 = G__65512;
chunk__65332_65499 = G__65513;
count__65333_65500 = G__65514;
i__65334_65501 = G__65515;
continue;
} else {
var vec__65344_65516 = cljs.core.first(seq__65331_65510__$1);
var file_65517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65344_65516,(0),null);
var content_65518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65344_65516,(1),null);
fs.writeFileSync(file_65517,content_65518,"utf8");


var G__65519 = cljs.core.next(seq__65331_65510__$1);
var G__65520 = null;
var G__65521 = (0);
var G__65522 = (0);
seq__65331_65498 = G__65519;
chunk__65332_65499 = G__65520;
count__65333_65500 = G__65521;
i__65334_65501 = G__65522;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.seq(cljs.core.deref(failures))){
console.error((""+"\nEMMY SMOKE SUMMARY: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(failures)))+" block(s) failed:"));

var seq__65347_65523 = cljs.core.seq(cljs.core.deref(failures));
var chunk__65348_65524 = null;
var count__65349_65525 = (0);
var i__65350_65526 = (0);
while(true){
if((i__65350_65526 < count__65349_65525)){
var failure_65527 = chunk__65348_65524.cljs$core$IIndexed$_nth$arity$2(null,i__65350_65526);
console.error((""+"  - "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(failure_65527)));


var G__65528 = seq__65347_65523;
var G__65529 = chunk__65348_65524;
var G__65530 = count__65349_65525;
var G__65531 = (i__65350_65526 + (1));
seq__65347_65523 = G__65528;
chunk__65348_65524 = G__65529;
count__65349_65525 = G__65530;
i__65350_65526 = G__65531;
continue;
} else {
var temp__5825__auto___65532 = cljs.core.seq(seq__65347_65523);
if(temp__5825__auto___65532){
var seq__65347_65533__$1 = temp__5825__auto___65532;
if(cljs.core.chunked_seq_QMARK_(seq__65347_65533__$1)){
var c__5694__auto___65534 = cljs.core.chunk_first(seq__65347_65533__$1);
var G__65535 = cljs.core.chunk_rest(seq__65347_65533__$1);
var G__65536 = c__5694__auto___65534;
var G__65537 = cljs.core.count(c__5694__auto___65534);
var G__65538 = (0);
seq__65347_65523 = G__65535;
chunk__65348_65524 = G__65536;
count__65349_65525 = G__65537;
i__65350_65526 = G__65538;
continue;
} else {
var failure_65539 = cljs.core.first(seq__65347_65533__$1);
console.error((""+"  - "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(failure_65539)));


var G__65540 = cljs.core.next(seq__65347_65533__$1);
var G__65541 = null;
var G__65542 = (0);
var G__65543 = (0);
seq__65347_65523 = G__65540;
chunk__65348_65524 = G__65541;
count__65349_65525 = G__65542;
i__65350_65526 = G__65543;
continue;
}
} else {
}
}
break;
}

console.error("The build will continue; inspect these blocks in the web runner.");

return process.exit((1));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"Emmy SCI full-manifest test passed; "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(fdg.fdg_oracle.expected_frozen_results))+" results matched Emmy's FDG regression suite."+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(capture_QMARK_)?(""+" Captured "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(captured_count))+" expression results."):null)))], 0));

return process.exit((0));
}
});

//# sourceMappingURL=fdg.smoke.js.map
