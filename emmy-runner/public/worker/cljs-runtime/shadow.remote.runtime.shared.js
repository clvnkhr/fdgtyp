goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__28343){
var map__28344 = p__28343;
var map__28344__$1 = cljs.core.__destructure_map(map__28344);
var runtime = map__28344__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28344__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5162__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_28592 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_28592)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__28347 = runtime;
var G__28348 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_28592);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__28347,G__28348) : shadow.remote.runtime.shared.process.call(null,G__28347,G__28348));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__28350,res){
var map__28351 = p__28350;
var map__28351__$1 = cljs.core.__destructure_map(map__28351);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28351__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28351__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__28352 = res;
var G__28352__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28352,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__28352);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28352__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__28352__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__28358 = arguments.length;
switch (G__28358) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__28360,msg,handlers,timeout_after_ms){
var map__28361 = p__28360;
var map__28361__$1 = cljs.core.__destructure_map(map__28361);
var runtime = map__28361__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28361__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___28615 = arguments.length;
var i__5898__auto___28616 = (0);
while(true){
if((i__5898__auto___28616 < len__5897__auto___28615)){
args__5903__auto__.push((arguments[i__5898__auto___28616]));

var G__28617 = (i__5898__auto___28616 + (1));
i__5898__auto___28616 = G__28617;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__28366,ev,args){
var map__28367 = p__28366;
var map__28367__$1 = cljs.core.__destructure_map(map__28367);
var runtime = map__28367__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28367__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__28368 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__28371 = null;
var count__28372 = (0);
var i__28373 = (0);
while(true){
if((i__28373 < count__28372)){
var ext = chunk__28371.cljs$core$IIndexed$_nth$arity$2(null,i__28373);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__28619 = seq__28368;
var G__28620 = chunk__28371;
var G__28621 = count__28372;
var G__28622 = (i__28373 + (1));
seq__28368 = G__28619;
chunk__28371 = G__28620;
count__28372 = G__28621;
i__28373 = G__28622;
continue;
} else {
var G__28623 = seq__28368;
var G__28624 = chunk__28371;
var G__28625 = count__28372;
var G__28626 = (i__28373 + (1));
seq__28368 = G__28623;
chunk__28371 = G__28624;
count__28372 = G__28625;
i__28373 = G__28626;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__28368);
if(temp__5825__auto__){
var seq__28368__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28368__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__28368__$1);
var G__28627 = cljs.core.chunk_rest(seq__28368__$1);
var G__28628 = c__5694__auto__;
var G__28629 = cljs.core.count(c__5694__auto__);
var G__28630 = (0);
seq__28368 = G__28627;
chunk__28371 = G__28628;
count__28372 = G__28629;
i__28373 = G__28630;
continue;
} else {
var ext = cljs.core.first(seq__28368__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__28631 = cljs.core.next(seq__28368__$1);
var G__28632 = null;
var G__28633 = (0);
var G__28634 = (0);
seq__28368 = G__28631;
chunk__28371 = G__28632;
count__28372 = G__28633;
i__28373 = G__28634;
continue;
} else {
var G__28635 = cljs.core.next(seq__28368__$1);
var G__28636 = null;
var G__28637 = (0);
var G__28638 = (0);
seq__28368 = G__28635;
chunk__28371 = G__28636;
count__28372 = G__28637;
i__28373 = G__28638;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq28363){
var G__28364 = cljs.core.first(seq28363);
var seq28363__$1 = cljs.core.next(seq28363);
var G__28365 = cljs.core.first(seq28363__$1);
var seq28363__$2 = cljs.core.next(seq28363__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28364,G__28365,seq28363__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__28379,p__28380){
var map__28381 = p__28379;
var map__28381__$1 = cljs.core.__destructure_map(map__28381);
var runtime = map__28381__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28381__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__28386 = p__28380;
var map__28386__$1 = cljs.core.__destructure_map(map__28386);
var msg = map__28386__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28386__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__28389 = cljs.core.deref(state_ref);
var map__28389__$1 = cljs.core.__destructure_map(map__28389);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28389__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28389__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__28395,msg){
var map__28396 = p__28395;
var map__28396__$1 = cljs.core.__destructure_map(map__28396);
var runtime = map__28396__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28396__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__28401,key,p__28402){
var map__28407 = p__28401;
var map__28407__$1 = cljs.core.__destructure_map(map__28407);
var state = map__28407__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28407__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__28408 = p__28402;
var map__28408__$1 = cljs.core.__destructure_map(map__28408);
var spec = map__28408__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28408__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28408__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__28419,key,spec){
var map__28420 = p__28419;
var map__28420__$1 = cljs.core.__destructure_map(map__28420);
var runtime = map__28420__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28420__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5829__auto___28695 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5829__auto___28695 == null)){
} else {
var on_welcome_28696 = temp__5829__auto___28695;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_28696.cljs$core$IFn$_invoke$arity$0 ? on_welcome_28696.cljs$core$IFn$_invoke$arity$0() : on_welcome_28696.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__28426_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__28426_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__28427_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__28427_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__28428_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__28428_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__28429_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__28429_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__28430_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__28430_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__28435,key){
var map__28436 = p__28435;
var map__28436__$1 = cljs.core.__destructure_map(map__28436);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28436__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__28445,msg){
var map__28446 = p__28445;
var map__28446__$1 = cljs.core.__destructure_map(map__28446);
var runtime = map__28446__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28446__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__28460,p__28464){
var map__28465 = p__28460;
var map__28465__$1 = cljs.core.__destructure_map(map__28465);
var runtime = map__28465__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28465__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__28467 = p__28464;
var map__28467__$1 = cljs.core.__destructure_map(map__28467);
var msg = map__28467__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28467__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28467__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__28479 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__28481 = null;
var count__28482 = (0);
var i__28483 = (0);
while(true){
if((i__28483 < count__28482)){
var map__28556 = chunk__28481.cljs$core$IIndexed$_nth$arity$2(null,i__28483);
var map__28556__$1 = cljs.core.__destructure_map(map__28556);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28556__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__28718 = seq__28479;
var G__28719 = chunk__28481;
var G__28720 = count__28482;
var G__28721 = (i__28483 + (1));
seq__28479 = G__28718;
chunk__28481 = G__28719;
count__28482 = G__28720;
i__28483 = G__28721;
continue;
} else {
var G__28722 = seq__28479;
var G__28723 = chunk__28481;
var G__28724 = count__28482;
var G__28725 = (i__28483 + (1));
seq__28479 = G__28722;
chunk__28481 = G__28723;
count__28482 = G__28724;
i__28483 = G__28725;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__28479);
if(temp__5825__auto__){
var seq__28479__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28479__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__28479__$1);
var G__28731 = cljs.core.chunk_rest(seq__28479__$1);
var G__28732 = c__5694__auto__;
var G__28733 = cljs.core.count(c__5694__auto__);
var G__28734 = (0);
seq__28479 = G__28731;
chunk__28481 = G__28732;
count__28482 = G__28733;
i__28483 = G__28734;
continue;
} else {
var map__28563 = cljs.core.first(seq__28479__$1);
var map__28563__$1 = cljs.core.__destructure_map(map__28563);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28563__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__28735 = cljs.core.next(seq__28479__$1);
var G__28736 = null;
var G__28737 = (0);
var G__28738 = (0);
seq__28479 = G__28735;
chunk__28481 = G__28736;
count__28482 = G__28737;
i__28483 = G__28738;
continue;
} else {
var G__28739 = cljs.core.next(seq__28479__$1);
var G__28740 = null;
var G__28741 = (0);
var G__28742 = (0);
seq__28479 = G__28739;
chunk__28481 = G__28740;
count__28482 = G__28741;
i__28483 = G__28742;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
