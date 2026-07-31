goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5903__auto__ = [];
var len__5897__auto___34061 = arguments.length;
var i__5898__auto___34062 = (0);
while(true){
if((i__5898__auto___34062 < len__5897__auto___34061)){
args__5903__auto__.push((arguments[i__5898__auto___34062]));

var G__34063 = (i__5898__auto___34062 + (1));
i__5898__auto___34062 = G__34063;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"%cshadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"shadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg))], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq33485){
var G__33486 = cljs.core.first(seq33485);
var seq33485__$1 = cljs.core.next(seq33485);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33486,seq33485__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__33513 = cljs.core.seq(sources);
var chunk__33514 = null;
var count__33515 = (0);
var i__33516 = (0);
while(true){
if((i__33516 < count__33515)){
var map__33541 = chunk__33514.cljs$core$IIndexed$_nth$arity$2(null,i__33516);
var map__33541__$1 = cljs.core.__destructure_map(map__33541);
var src = map__33541__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33541__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33541__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33541__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33541__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e33542){var e_34064 = e33542;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_34064);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_34064.message))));
}

var G__34066 = seq__33513;
var G__34067 = chunk__33514;
var G__34068 = count__33515;
var G__34069 = (i__33516 + (1));
seq__33513 = G__34066;
chunk__33514 = G__34067;
count__33515 = G__34068;
i__33516 = G__34069;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__33513);
if(temp__5825__auto__){
var seq__33513__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33513__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__33513__$1);
var G__34071 = cljs.core.chunk_rest(seq__33513__$1);
var G__34072 = c__5694__auto__;
var G__34073 = cljs.core.count(c__5694__auto__);
var G__34074 = (0);
seq__33513 = G__34071;
chunk__33514 = G__34072;
count__33515 = G__34073;
i__33516 = G__34074;
continue;
} else {
var map__33545 = cljs.core.first(seq__33513__$1);
var map__33545__$1 = cljs.core.__destructure_map(map__33545);
var src = map__33545__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33545__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33545__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33545__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33545__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e33547){var e_34078 = e33547;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_34078);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_34078.message))));
}

var G__34080 = cljs.core.next(seq__33513__$1);
var G__34081 = null;
var G__34082 = (0);
var G__34083 = (0);
seq__33513 = G__34080;
chunk__33514 = G__34081;
count__33515 = G__34082;
i__33516 = G__34083;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call async "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__33586 = cljs.core.seq(js_requires);
var chunk__33587 = null;
var count__33588 = (0);
var i__33589 = (0);
while(true){
if((i__33589 < count__33588)){
var js_ns = chunk__33587.cljs$core$IIndexed$_nth$arity$2(null,i__33589);
var require_str_34084 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_34084);


var G__34085 = seq__33586;
var G__34086 = chunk__33587;
var G__34087 = count__33588;
var G__34088 = (i__33589 + (1));
seq__33586 = G__34085;
chunk__33587 = G__34086;
count__33588 = G__34087;
i__33589 = G__34088;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__33586);
if(temp__5825__auto__){
var seq__33586__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33586__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__33586__$1);
var G__34089 = cljs.core.chunk_rest(seq__33586__$1);
var G__34090 = c__5694__auto__;
var G__34091 = cljs.core.count(c__5694__auto__);
var G__34092 = (0);
seq__33586 = G__34089;
chunk__33587 = G__34090;
count__33588 = G__34091;
i__33589 = G__34092;
continue;
} else {
var js_ns = cljs.core.first(seq__33586__$1);
var require_str_34093 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_34093);


var G__34094 = cljs.core.next(seq__33586__$1);
var G__34095 = null;
var G__34096 = (0);
var G__34097 = (0);
seq__33586 = G__34094;
chunk__33587 = G__34095;
count__33588 = G__34096;
i__33589 = G__34097;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__33608){
var map__33609 = p__33608;
var map__33609__$1 = cljs.core.__destructure_map(map__33609);
var msg = map__33609__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33609__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33609__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5649__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__33610(s__33611){
return (new cljs.core.LazySeq(null,(function (){
var s__33611__$1 = s__33611;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__33611__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var map__33617 = cljs.core.first(xs__6385__auto__);
var map__33617__$1 = cljs.core.__destructure_map(map__33617);
var src = map__33617__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33617__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33617__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5645__auto__ = ((function (s__33611__$1,map__33617,map__33617__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__33609,map__33609__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__33610_$_iter__33612(s__33613){
return (new cljs.core.LazySeq(null,((function (s__33611__$1,map__33617,map__33617__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__33609,map__33609__$1,msg,info,reload_info){
return (function (){
var s__33613__$1 = s__33613;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__33613__$1);
if(temp__5825__auto____$1){
var s__33613__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__33613__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__33613__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__33615 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__33614 = (0);
while(true){
if((i__33614 < size__5648__auto__)){
var warning = cljs.core._nth(c__5647__auto__,i__33614);
cljs.core.chunk_append(b__33615,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__34099 = (i__33614 + (1));
i__33614 = G__34099;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33615),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__33610_$_iter__33612(cljs.core.chunk_rest(s__33613__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33615),null);
}
} else {
var warning = cljs.core.first(s__33613__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__33610_$_iter__33612(cljs.core.rest(s__33613__$2)));
}
} else {
return null;
}
break;
}
});})(s__33611__$1,map__33617,map__33617__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__33609,map__33609__$1,msg,info,reload_info))
,null,null));
});})(s__33611__$1,map__33617,map__33617__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__33609,map__33609__$1,msg,info,reload_info))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(warnings));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__33610(cljs.core.rest(s__33611__$1)));
} else {
var G__34100 = cljs.core.rest(s__33611__$1);
s__33611__$1 = G__34100;
continue;
}
} else {
var G__34101 = cljs.core.rest(s__33611__$1);
s__33611__$1 = G__34101;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__33622_34102 = cljs.core.seq(warnings);
var chunk__33623_34103 = null;
var count__33624_34104 = (0);
var i__33625_34105 = (0);
while(true){
if((i__33625_34105 < count__33624_34104)){
var map__33631_34106 = chunk__33623_34103.cljs$core$IIndexed$_nth$arity$2(null,i__33625_34105);
var map__33631_34107__$1 = cljs.core.__destructure_map(map__33631_34106);
var w_34108 = map__33631_34107__$1;
var msg_34109__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33631_34107__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_34110 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33631_34107__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_34111 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33631_34107__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_34112 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33631_34107__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_34112)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_34110)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_34111)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_34109__$1)));


var G__34114 = seq__33622_34102;
var G__34115 = chunk__33623_34103;
var G__34116 = count__33624_34104;
var G__34117 = (i__33625_34105 + (1));
seq__33622_34102 = G__34114;
chunk__33623_34103 = G__34115;
count__33624_34104 = G__34116;
i__33625_34105 = G__34117;
continue;
} else {
var temp__5825__auto___34118 = cljs.core.seq(seq__33622_34102);
if(temp__5825__auto___34118){
var seq__33622_34119__$1 = temp__5825__auto___34118;
if(cljs.core.chunked_seq_QMARK_(seq__33622_34119__$1)){
var c__5694__auto___34121 = cljs.core.chunk_first(seq__33622_34119__$1);
var G__34122 = cljs.core.chunk_rest(seq__33622_34119__$1);
var G__34123 = c__5694__auto___34121;
var G__34124 = cljs.core.count(c__5694__auto___34121);
var G__34125 = (0);
seq__33622_34102 = G__34122;
chunk__33623_34103 = G__34123;
count__33624_34104 = G__34124;
i__33625_34105 = G__34125;
continue;
} else {
var map__33634_34126 = cljs.core.first(seq__33622_34119__$1);
var map__33634_34127__$1 = cljs.core.__destructure_map(map__33634_34126);
var w_34128 = map__33634_34127__$1;
var msg_34129__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33634_34127__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_34130 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33634_34127__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_34131 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33634_34127__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_34132 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33634_34127__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_34132)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_34130)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_34131)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_34129__$1)));


var G__34138 = cljs.core.next(seq__33622_34119__$1);
var G__34139 = null;
var G__34140 = (0);
var G__34141 = (0);
seq__33622_34102 = G__34138;
chunk__33623_34103 = G__34139;
count__33624_34104 = G__34140;
i__33625_34105 = G__34141;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__33607_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__33607_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new)+"?"))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5160__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5160__auto__){
var and__5160__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5160__auto____$1){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__33640 = node_uri;
G__33640.setQuery(null);

G__33640.setPath(new$);

return G__33640;
})()));
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__33642){
var map__33643 = p__33642;
var map__33643__$1 = cljs.core.__destructure_map(map__33643);
var msg = map__33643__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33643__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33643__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__33645 = cljs.core.seq(updates);
var chunk__33647 = null;
var count__33648 = (0);
var i__33649 = (0);
while(true){
if((i__33649 < count__33648)){
var path = chunk__33647.cljs$core$IIndexed$_nth$arity$2(null,i__33649);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__33818_34148 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__33822_34149 = null;
var count__33823_34150 = (0);
var i__33824_34151 = (0);
while(true){
if((i__33824_34151 < count__33823_34150)){
var node_34153 = chunk__33822_34149.cljs$core$IIndexed$_nth$arity$2(null,i__33824_34151);
if(cljs.core.not(node_34153.shadow$old)){
var path_match_34154 = shadow.cljs.devtools.client.browser.match_paths(node_34153.getAttribute("href"),path);
if(cljs.core.truth_(path_match_34154)){
var new_link_34155 = (function (){var G__33850 = node_34153.cloneNode(true);
G__33850.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_34154)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__33850;
})();
(node_34153.shadow$old = true);

(new_link_34155.onload = ((function (seq__33818_34148,chunk__33822_34149,count__33823_34150,i__33824_34151,seq__33645,chunk__33647,count__33648,i__33649,new_link_34155,path_match_34154,node_34153,path,map__33643,map__33643__$1,msg,updates,reload_info){
return (function (e){
var seq__33851_34159 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__33853_34160 = null;
var count__33854_34161 = (0);
var i__33855_34162 = (0);
while(true){
if((i__33855_34162 < count__33854_34161)){
var map__33863_34163 = chunk__33853_34160.cljs$core$IIndexed$_nth$arity$2(null,i__33855_34162);
var map__33863_34164__$1 = cljs.core.__destructure_map(map__33863_34163);
var task_34165 = map__33863_34164__$1;
var fn_str_34166 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33863_34164__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_34167 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33863_34164__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_34168 = goog.getObjectByName(fn_str_34166,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_34167)));

(fn_obj_34168.cljs$core$IFn$_invoke$arity$2 ? fn_obj_34168.cljs$core$IFn$_invoke$arity$2(path,new_link_34155) : fn_obj_34168.call(null,path,new_link_34155));


var G__34169 = seq__33851_34159;
var G__34170 = chunk__33853_34160;
var G__34171 = count__33854_34161;
var G__34172 = (i__33855_34162 + (1));
seq__33851_34159 = G__34169;
chunk__33853_34160 = G__34170;
count__33854_34161 = G__34171;
i__33855_34162 = G__34172;
continue;
} else {
var temp__5825__auto___34173 = cljs.core.seq(seq__33851_34159);
if(temp__5825__auto___34173){
var seq__33851_34174__$1 = temp__5825__auto___34173;
if(cljs.core.chunked_seq_QMARK_(seq__33851_34174__$1)){
var c__5694__auto___34175 = cljs.core.chunk_first(seq__33851_34174__$1);
var G__34176 = cljs.core.chunk_rest(seq__33851_34174__$1);
var G__34177 = c__5694__auto___34175;
var G__34178 = cljs.core.count(c__5694__auto___34175);
var G__34179 = (0);
seq__33851_34159 = G__34176;
chunk__33853_34160 = G__34177;
count__33854_34161 = G__34178;
i__33855_34162 = G__34179;
continue;
} else {
var map__33872_34181 = cljs.core.first(seq__33851_34174__$1);
var map__33872_34182__$1 = cljs.core.__destructure_map(map__33872_34181);
var task_34183 = map__33872_34182__$1;
var fn_str_34184 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33872_34182__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_34185 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33872_34182__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_34186 = goog.getObjectByName(fn_str_34184,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_34185)));

(fn_obj_34186.cljs$core$IFn$_invoke$arity$2 ? fn_obj_34186.cljs$core$IFn$_invoke$arity$2(path,new_link_34155) : fn_obj_34186.call(null,path,new_link_34155));


var G__34187 = cljs.core.next(seq__33851_34174__$1);
var G__34188 = null;
var G__34189 = (0);
var G__34190 = (0);
seq__33851_34159 = G__34187;
chunk__33853_34160 = G__34188;
count__33854_34161 = G__34189;
i__33855_34162 = G__34190;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_34153);
});})(seq__33818_34148,chunk__33822_34149,count__33823_34150,i__33824_34151,seq__33645,chunk__33647,count__33648,i__33649,new_link_34155,path_match_34154,node_34153,path,map__33643,map__33643__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_34154], 0));

goog.dom.insertSiblingAfter(new_link_34155,node_34153);


var G__34191 = seq__33818_34148;
var G__34192 = chunk__33822_34149;
var G__34193 = count__33823_34150;
var G__34194 = (i__33824_34151 + (1));
seq__33818_34148 = G__34191;
chunk__33822_34149 = G__34192;
count__33823_34150 = G__34193;
i__33824_34151 = G__34194;
continue;
} else {
var G__34195 = seq__33818_34148;
var G__34196 = chunk__33822_34149;
var G__34197 = count__33823_34150;
var G__34198 = (i__33824_34151 + (1));
seq__33818_34148 = G__34195;
chunk__33822_34149 = G__34196;
count__33823_34150 = G__34197;
i__33824_34151 = G__34198;
continue;
}
} else {
var G__34199 = seq__33818_34148;
var G__34200 = chunk__33822_34149;
var G__34201 = count__33823_34150;
var G__34202 = (i__33824_34151 + (1));
seq__33818_34148 = G__34199;
chunk__33822_34149 = G__34200;
count__33823_34150 = G__34201;
i__33824_34151 = G__34202;
continue;
}
} else {
var temp__5825__auto___34203 = cljs.core.seq(seq__33818_34148);
if(temp__5825__auto___34203){
var seq__33818_34204__$1 = temp__5825__auto___34203;
if(cljs.core.chunked_seq_QMARK_(seq__33818_34204__$1)){
var c__5694__auto___34205 = cljs.core.chunk_first(seq__33818_34204__$1);
var G__34206 = cljs.core.chunk_rest(seq__33818_34204__$1);
var G__34207 = c__5694__auto___34205;
var G__34208 = cljs.core.count(c__5694__auto___34205);
var G__34209 = (0);
seq__33818_34148 = G__34206;
chunk__33822_34149 = G__34207;
count__33823_34150 = G__34208;
i__33824_34151 = G__34209;
continue;
} else {
var node_34210 = cljs.core.first(seq__33818_34204__$1);
if(cljs.core.not(node_34210.shadow$old)){
var path_match_34211 = shadow.cljs.devtools.client.browser.match_paths(node_34210.getAttribute("href"),path);
if(cljs.core.truth_(path_match_34211)){
var new_link_34212 = (function (){var G__33875 = node_34210.cloneNode(true);
G__33875.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_34211)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__33875;
})();
(node_34210.shadow$old = true);

(new_link_34212.onload = ((function (seq__33818_34148,chunk__33822_34149,count__33823_34150,i__33824_34151,seq__33645,chunk__33647,count__33648,i__33649,new_link_34212,path_match_34211,node_34210,seq__33818_34204__$1,temp__5825__auto___34203,path,map__33643,map__33643__$1,msg,updates,reload_info){
return (function (e){
var seq__33876_34213 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__33879_34214 = null;
var count__33880_34215 = (0);
var i__33881_34216 = (0);
while(true){
if((i__33881_34216 < count__33880_34215)){
var map__33895_34217 = chunk__33879_34214.cljs$core$IIndexed$_nth$arity$2(null,i__33881_34216);
var map__33895_34218__$1 = cljs.core.__destructure_map(map__33895_34217);
var task_34219 = map__33895_34218__$1;
var fn_str_34220 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33895_34218__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_34221 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33895_34218__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_34222 = goog.getObjectByName(fn_str_34220,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_34221)));

(fn_obj_34222.cljs$core$IFn$_invoke$arity$2 ? fn_obj_34222.cljs$core$IFn$_invoke$arity$2(path,new_link_34212) : fn_obj_34222.call(null,path,new_link_34212));


var G__34223 = seq__33876_34213;
var G__34224 = chunk__33879_34214;
var G__34225 = count__33880_34215;
var G__34226 = (i__33881_34216 + (1));
seq__33876_34213 = G__34223;
chunk__33879_34214 = G__34224;
count__33880_34215 = G__34225;
i__33881_34216 = G__34226;
continue;
} else {
var temp__5825__auto___34227__$1 = cljs.core.seq(seq__33876_34213);
if(temp__5825__auto___34227__$1){
var seq__33876_34228__$1 = temp__5825__auto___34227__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33876_34228__$1)){
var c__5694__auto___34229 = cljs.core.chunk_first(seq__33876_34228__$1);
var G__34230 = cljs.core.chunk_rest(seq__33876_34228__$1);
var G__34231 = c__5694__auto___34229;
var G__34232 = cljs.core.count(c__5694__auto___34229);
var G__34233 = (0);
seq__33876_34213 = G__34230;
chunk__33879_34214 = G__34231;
count__33880_34215 = G__34232;
i__33881_34216 = G__34233;
continue;
} else {
var map__33896_34234 = cljs.core.first(seq__33876_34228__$1);
var map__33896_34235__$1 = cljs.core.__destructure_map(map__33896_34234);
var task_34236 = map__33896_34235__$1;
var fn_str_34237 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33896_34235__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_34238 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33896_34235__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_34239 = goog.getObjectByName(fn_str_34237,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_34238)));

(fn_obj_34239.cljs$core$IFn$_invoke$arity$2 ? fn_obj_34239.cljs$core$IFn$_invoke$arity$2(path,new_link_34212) : fn_obj_34239.call(null,path,new_link_34212));


var G__34242 = cljs.core.next(seq__33876_34228__$1);
var G__34243 = null;
var G__34244 = (0);
var G__34245 = (0);
seq__33876_34213 = G__34242;
chunk__33879_34214 = G__34243;
count__33880_34215 = G__34244;
i__33881_34216 = G__34245;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_34210);
});})(seq__33818_34148,chunk__33822_34149,count__33823_34150,i__33824_34151,seq__33645,chunk__33647,count__33648,i__33649,new_link_34212,path_match_34211,node_34210,seq__33818_34204__$1,temp__5825__auto___34203,path,map__33643,map__33643__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_34211], 0));

goog.dom.insertSiblingAfter(new_link_34212,node_34210);


var G__34246 = cljs.core.next(seq__33818_34204__$1);
var G__34247 = null;
var G__34248 = (0);
var G__34249 = (0);
seq__33818_34148 = G__34246;
chunk__33822_34149 = G__34247;
count__33823_34150 = G__34248;
i__33824_34151 = G__34249;
continue;
} else {
var G__34251 = cljs.core.next(seq__33818_34204__$1);
var G__34252 = null;
var G__34253 = (0);
var G__34254 = (0);
seq__33818_34148 = G__34251;
chunk__33822_34149 = G__34252;
count__33823_34150 = G__34253;
i__33824_34151 = G__34254;
continue;
}
} else {
var G__34256 = cljs.core.next(seq__33818_34204__$1);
var G__34257 = null;
var G__34258 = (0);
var G__34259 = (0);
seq__33818_34148 = G__34256;
chunk__33822_34149 = G__34257;
count__33823_34150 = G__34258;
i__33824_34151 = G__34259;
continue;
}
}
} else {
}
}
break;
}


var G__34260 = seq__33645;
var G__34261 = chunk__33647;
var G__34262 = count__33648;
var G__34263 = (i__33649 + (1));
seq__33645 = G__34260;
chunk__33647 = G__34261;
count__33648 = G__34262;
i__33649 = G__34263;
continue;
} else {
var G__34264 = seq__33645;
var G__34265 = chunk__33647;
var G__34266 = count__33648;
var G__34267 = (i__33649 + (1));
seq__33645 = G__34264;
chunk__33647 = G__34265;
count__33648 = G__34266;
i__33649 = G__34267;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__33645);
if(temp__5825__auto__){
var seq__33645__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33645__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__33645__$1);
var G__34272 = cljs.core.chunk_rest(seq__33645__$1);
var G__34273 = c__5694__auto__;
var G__34274 = cljs.core.count(c__5694__auto__);
var G__34275 = (0);
seq__33645 = G__34272;
chunk__33647 = G__34273;
count__33648 = G__34274;
i__33649 = G__34275;
continue;
} else {
var path = cljs.core.first(seq__33645__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__33897_34276 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__33901_34277 = null;
var count__33902_34278 = (0);
var i__33903_34279 = (0);
while(true){
if((i__33903_34279 < count__33902_34278)){
var node_34280 = chunk__33901_34277.cljs$core$IIndexed$_nth$arity$2(null,i__33903_34279);
if(cljs.core.not(node_34280.shadow$old)){
var path_match_34281 = shadow.cljs.devtools.client.browser.match_paths(node_34280.getAttribute("href"),path);
if(cljs.core.truth_(path_match_34281)){
var new_link_34282 = (function (){var G__33946 = node_34280.cloneNode(true);
G__33946.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_34281)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__33946;
})();
(node_34280.shadow$old = true);

(new_link_34282.onload = ((function (seq__33897_34276,chunk__33901_34277,count__33902_34278,i__33903_34279,seq__33645,chunk__33647,count__33648,i__33649,new_link_34282,path_match_34281,node_34280,path,seq__33645__$1,temp__5825__auto__,map__33643,map__33643__$1,msg,updates,reload_info){
return (function (e){
var seq__33949_34286 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__33951_34287 = null;
var count__33952_34288 = (0);
var i__33953_34289 = (0);
while(true){
if((i__33953_34289 < count__33952_34288)){
var map__33962_34290 = chunk__33951_34287.cljs$core$IIndexed$_nth$arity$2(null,i__33953_34289);
var map__33962_34291__$1 = cljs.core.__destructure_map(map__33962_34290);
var task_34292 = map__33962_34291__$1;
var fn_str_34293 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33962_34291__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_34294 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33962_34291__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_34295 = goog.getObjectByName(fn_str_34293,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_34294)));

(fn_obj_34295.cljs$core$IFn$_invoke$arity$2 ? fn_obj_34295.cljs$core$IFn$_invoke$arity$2(path,new_link_34282) : fn_obj_34295.call(null,path,new_link_34282));


var G__34296 = seq__33949_34286;
var G__34297 = chunk__33951_34287;
var G__34298 = count__33952_34288;
var G__34299 = (i__33953_34289 + (1));
seq__33949_34286 = G__34296;
chunk__33951_34287 = G__34297;
count__33952_34288 = G__34298;
i__33953_34289 = G__34299;
continue;
} else {
var temp__5825__auto___34300__$1 = cljs.core.seq(seq__33949_34286);
if(temp__5825__auto___34300__$1){
var seq__33949_34301__$1 = temp__5825__auto___34300__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33949_34301__$1)){
var c__5694__auto___34302 = cljs.core.chunk_first(seq__33949_34301__$1);
var G__34303 = cljs.core.chunk_rest(seq__33949_34301__$1);
var G__34304 = c__5694__auto___34302;
var G__34305 = cljs.core.count(c__5694__auto___34302);
var G__34306 = (0);
seq__33949_34286 = G__34303;
chunk__33951_34287 = G__34304;
count__33952_34288 = G__34305;
i__33953_34289 = G__34306;
continue;
} else {
var map__33964_34307 = cljs.core.first(seq__33949_34301__$1);
var map__33964_34308__$1 = cljs.core.__destructure_map(map__33964_34307);
var task_34309 = map__33964_34308__$1;
var fn_str_34310 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33964_34308__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_34311 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33964_34308__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_34312 = goog.getObjectByName(fn_str_34310,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_34311)));

(fn_obj_34312.cljs$core$IFn$_invoke$arity$2 ? fn_obj_34312.cljs$core$IFn$_invoke$arity$2(path,new_link_34282) : fn_obj_34312.call(null,path,new_link_34282));


var G__34315 = cljs.core.next(seq__33949_34301__$1);
var G__34316 = null;
var G__34317 = (0);
var G__34318 = (0);
seq__33949_34286 = G__34315;
chunk__33951_34287 = G__34316;
count__33952_34288 = G__34317;
i__33953_34289 = G__34318;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_34280);
});})(seq__33897_34276,chunk__33901_34277,count__33902_34278,i__33903_34279,seq__33645,chunk__33647,count__33648,i__33649,new_link_34282,path_match_34281,node_34280,path,seq__33645__$1,temp__5825__auto__,map__33643,map__33643__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_34281], 0));

goog.dom.insertSiblingAfter(new_link_34282,node_34280);


var G__34319 = seq__33897_34276;
var G__34320 = chunk__33901_34277;
var G__34321 = count__33902_34278;
var G__34322 = (i__33903_34279 + (1));
seq__33897_34276 = G__34319;
chunk__33901_34277 = G__34320;
count__33902_34278 = G__34321;
i__33903_34279 = G__34322;
continue;
} else {
var G__34323 = seq__33897_34276;
var G__34324 = chunk__33901_34277;
var G__34325 = count__33902_34278;
var G__34326 = (i__33903_34279 + (1));
seq__33897_34276 = G__34323;
chunk__33901_34277 = G__34324;
count__33902_34278 = G__34325;
i__33903_34279 = G__34326;
continue;
}
} else {
var G__34327 = seq__33897_34276;
var G__34328 = chunk__33901_34277;
var G__34329 = count__33902_34278;
var G__34330 = (i__33903_34279 + (1));
seq__33897_34276 = G__34327;
chunk__33901_34277 = G__34328;
count__33902_34278 = G__34329;
i__33903_34279 = G__34330;
continue;
}
} else {
var temp__5825__auto___34331__$1 = cljs.core.seq(seq__33897_34276);
if(temp__5825__auto___34331__$1){
var seq__33897_34332__$1 = temp__5825__auto___34331__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33897_34332__$1)){
var c__5694__auto___34333 = cljs.core.chunk_first(seq__33897_34332__$1);
var G__34335 = cljs.core.chunk_rest(seq__33897_34332__$1);
var G__34336 = c__5694__auto___34333;
var G__34337 = cljs.core.count(c__5694__auto___34333);
var G__34338 = (0);
seq__33897_34276 = G__34335;
chunk__33901_34277 = G__34336;
count__33902_34278 = G__34337;
i__33903_34279 = G__34338;
continue;
} else {
var node_34340 = cljs.core.first(seq__33897_34332__$1);
if(cljs.core.not(node_34340.shadow$old)){
var path_match_34341 = shadow.cljs.devtools.client.browser.match_paths(node_34340.getAttribute("href"),path);
if(cljs.core.truth_(path_match_34341)){
var new_link_34342 = (function (){var G__33970 = node_34340.cloneNode(true);
G__33970.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_34341)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__33970;
})();
(node_34340.shadow$old = true);

(new_link_34342.onload = ((function (seq__33897_34276,chunk__33901_34277,count__33902_34278,i__33903_34279,seq__33645,chunk__33647,count__33648,i__33649,new_link_34342,path_match_34341,node_34340,seq__33897_34332__$1,temp__5825__auto___34331__$1,path,seq__33645__$1,temp__5825__auto__,map__33643,map__33643__$1,msg,updates,reload_info){
return (function (e){
var seq__33973_34345 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__33975_34346 = null;
var count__33976_34347 = (0);
var i__33977_34348 = (0);
while(true){
if((i__33977_34348 < count__33976_34347)){
var map__33985_34350 = chunk__33975_34346.cljs$core$IIndexed$_nth$arity$2(null,i__33977_34348);
var map__33985_34351__$1 = cljs.core.__destructure_map(map__33985_34350);
var task_34353 = map__33985_34351__$1;
var fn_str_34354 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33985_34351__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_34355 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33985_34351__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_34357 = goog.getObjectByName(fn_str_34354,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_34355)));

(fn_obj_34357.cljs$core$IFn$_invoke$arity$2 ? fn_obj_34357.cljs$core$IFn$_invoke$arity$2(path,new_link_34342) : fn_obj_34357.call(null,path,new_link_34342));


var G__34360 = seq__33973_34345;
var G__34361 = chunk__33975_34346;
var G__34363 = count__33976_34347;
var G__34364 = (i__33977_34348 + (1));
seq__33973_34345 = G__34360;
chunk__33975_34346 = G__34361;
count__33976_34347 = G__34363;
i__33977_34348 = G__34364;
continue;
} else {
var temp__5825__auto___34365__$2 = cljs.core.seq(seq__33973_34345);
if(temp__5825__auto___34365__$2){
var seq__33973_34366__$1 = temp__5825__auto___34365__$2;
if(cljs.core.chunked_seq_QMARK_(seq__33973_34366__$1)){
var c__5694__auto___34367 = cljs.core.chunk_first(seq__33973_34366__$1);
var G__34368 = cljs.core.chunk_rest(seq__33973_34366__$1);
var G__34369 = c__5694__auto___34367;
var G__34370 = cljs.core.count(c__5694__auto___34367);
var G__34371 = (0);
seq__33973_34345 = G__34368;
chunk__33975_34346 = G__34369;
count__33976_34347 = G__34370;
i__33977_34348 = G__34371;
continue;
} else {
var map__33989_34372 = cljs.core.first(seq__33973_34366__$1);
var map__33989_34373__$1 = cljs.core.__destructure_map(map__33989_34372);
var task_34374 = map__33989_34373__$1;
var fn_str_34375 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33989_34373__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_34376 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33989_34373__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_34377 = goog.getObjectByName(fn_str_34375,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_34376)));

(fn_obj_34377.cljs$core$IFn$_invoke$arity$2 ? fn_obj_34377.cljs$core$IFn$_invoke$arity$2(path,new_link_34342) : fn_obj_34377.call(null,path,new_link_34342));


var G__34378 = cljs.core.next(seq__33973_34366__$1);
var G__34379 = null;
var G__34380 = (0);
var G__34381 = (0);
seq__33973_34345 = G__34378;
chunk__33975_34346 = G__34379;
count__33976_34347 = G__34380;
i__33977_34348 = G__34381;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_34340);
});})(seq__33897_34276,chunk__33901_34277,count__33902_34278,i__33903_34279,seq__33645,chunk__33647,count__33648,i__33649,new_link_34342,path_match_34341,node_34340,seq__33897_34332__$1,temp__5825__auto___34331__$1,path,seq__33645__$1,temp__5825__auto__,map__33643,map__33643__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_34341], 0));

goog.dom.insertSiblingAfter(new_link_34342,node_34340);


var G__34382 = cljs.core.next(seq__33897_34332__$1);
var G__34383 = null;
var G__34384 = (0);
var G__34385 = (0);
seq__33897_34276 = G__34382;
chunk__33901_34277 = G__34383;
count__33902_34278 = G__34384;
i__33903_34279 = G__34385;
continue;
} else {
var G__34386 = cljs.core.next(seq__33897_34332__$1);
var G__34387 = null;
var G__34388 = (0);
var G__34389 = (0);
seq__33897_34276 = G__34386;
chunk__33901_34277 = G__34387;
count__33902_34278 = G__34388;
i__33903_34279 = G__34389;
continue;
}
} else {
var G__34390 = cljs.core.next(seq__33897_34332__$1);
var G__34391 = null;
var G__34392 = (0);
var G__34393 = (0);
seq__33897_34276 = G__34390;
chunk__33901_34277 = G__34391;
count__33902_34278 = G__34392;
i__33903_34279 = G__34393;
continue;
}
}
} else {
}
}
break;
}


var G__34394 = cljs.core.next(seq__33645__$1);
var G__34395 = null;
var G__34396 = (0);
var G__34397 = (0);
seq__33645 = G__34394;
chunk__33647 = G__34395;
count__33648 = G__34396;
i__33649 = G__34397;
continue;
} else {
var G__34398 = cljs.core.next(seq__33645__$1);
var G__34399 = null;
var G__34400 = (0);
var G__34401 = (0);
seq__33645 = G__34398;
chunk__33647 = G__34399;
count__33648 = G__34400;
i__33649 = G__34401;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null))))))))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)+" ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM)+"]"),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__34006 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__34006) : success.call(null,G__34006));
}catch (e34005){var e = e34005;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__34008,success,fail){
var map__34010 = p__34008;
var map__34010__$1 = cljs.core.__destructure_map(map__34010);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34010__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__34012 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__34012) : success.call(null,G__34012));
}catch (e34011){var e = e34011;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__34013,done,error){
var map__34014 = p__34013;
var map__34014__$1 = cljs.core.__destructure_map(map__34014);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34014__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__34015,done,error){
var map__34016 = p__34015;
var map__34016__$1 = cljs.core.__destructure_map(map__34016);
var msg = map__34016__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34016__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34016__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34016__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__34017){
var map__34018 = p__34017;
var map__34018__$1 = cljs.core.__destructure_map(map__34018);
var src = map__34018__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34018__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5160__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5160__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__34019 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__34019) : done.call(null,G__34019));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__34020){
var map__34021 = p__34020;
var map__34021__$1 = cljs.core.__destructure_map(map__34021);
var msg__$1 = map__34021__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34021__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e34023){var ex = e34023;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__34024){
var map__34025 = p__34024;
var map__34025__$1 = cljs.core.__destructure_map(map__34025);
var env = map__34025__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34025__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg((""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))+" ready!"));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error((""+"Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."+" Is the watch for this build running?"));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__34029){
var map__34030 = p__34029;
var map__34030__$1 = cljs.core.__destructure_map(map__34030);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34030__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34030__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__34040){
var map__34041 = p__34040;
var map__34041__$1 = cljs.core.__destructure_map(map__34041);
var svc = map__34041__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34041__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
