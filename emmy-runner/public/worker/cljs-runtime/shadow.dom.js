goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_28345 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_28345(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_28349 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_28349(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__26539 = coll;
var G__26540 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__26539,G__26540) : shadow.dom.lazy_native_coll_seq.call(null,G__26539,G__26540));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5162__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__26571 = arguments.length;
switch (G__26571) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__26575 = arguments.length;
switch (G__26575) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__26579 = arguments.length;
switch (G__26579) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__26587 = arguments.length;
switch (G__26587) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__26614 = arguments.length;
switch (G__26614) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__26626 = arguments.length;
switch (G__26626) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5162__auto__ = (!((typeof document !== 'undefined')));
if(or__5162__auto__){
return or__5162__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e26664){if((e26664 instanceof Object)){
var e = e26664;
return console.log("didnt support attachEvent",el,e);
} else {
throw e26664;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5162__auto__ = (!((typeof document !== 'undefined')));
if(or__5162__auto__){
return or__5162__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__26683 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__26684 = null;
var count__26685 = (0);
var i__26686 = (0);
while(true){
if((i__26686 < count__26685)){
var el = chunk__26684.cljs$core$IIndexed$_nth$arity$2(null,i__26686);
var handler_28409__$1 = ((function (seq__26683,chunk__26684,count__26685,i__26686,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__26683,chunk__26684,count__26685,i__26686,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_28409__$1);


var G__28410 = seq__26683;
var G__28411 = chunk__26684;
var G__28412 = count__26685;
var G__28413 = (i__26686 + (1));
seq__26683 = G__28410;
chunk__26684 = G__28411;
count__26685 = G__28412;
i__26686 = G__28413;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26683);
if(temp__5825__auto__){
var seq__26683__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26683__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__26683__$1);
var G__28414 = cljs.core.chunk_rest(seq__26683__$1);
var G__28415 = c__5694__auto__;
var G__28416 = cljs.core.count(c__5694__auto__);
var G__28417 = (0);
seq__26683 = G__28414;
chunk__26684 = G__28415;
count__26685 = G__28416;
i__26686 = G__28417;
continue;
} else {
var el = cljs.core.first(seq__26683__$1);
var handler_28418__$1 = ((function (seq__26683,chunk__26684,count__26685,i__26686,el,seq__26683__$1,temp__5825__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__26683,chunk__26684,count__26685,i__26686,el,seq__26683__$1,temp__5825__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_28418__$1);


var G__28421 = cljs.core.next(seq__26683__$1);
var G__28422 = null;
var G__28423 = (0);
var G__28424 = (0);
seq__26683 = G__28421;
chunk__26684 = G__28422;
count__26685 = G__28423;
i__26686 = G__28424;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__26723 = arguments.length;
switch (G__26723) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__26728 = cljs.core.seq(events);
var chunk__26729 = null;
var count__26730 = (0);
var i__26731 = (0);
while(true){
if((i__26731 < count__26730)){
var vec__26738 = chunk__26729.cljs$core$IIndexed$_nth$arity$2(null,i__26731);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26738,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26738,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__28431 = seq__26728;
var G__28432 = chunk__26729;
var G__28433 = count__26730;
var G__28434 = (i__26731 + (1));
seq__26728 = G__28431;
chunk__26729 = G__28432;
count__26730 = G__28433;
i__26731 = G__28434;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26728);
if(temp__5825__auto__){
var seq__26728__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26728__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__26728__$1);
var G__28437 = cljs.core.chunk_rest(seq__26728__$1);
var G__28438 = c__5694__auto__;
var G__28439 = cljs.core.count(c__5694__auto__);
var G__28440 = (0);
seq__26728 = G__28437;
chunk__26729 = G__28438;
count__26730 = G__28439;
i__26731 = G__28440;
continue;
} else {
var vec__26741 = cljs.core.first(seq__26728__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26741,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26741,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__28441 = cljs.core.next(seq__26728__$1);
var G__28442 = null;
var G__28443 = (0);
var G__28444 = (0);
seq__26728 = G__28441;
chunk__26729 = G__28442;
count__26730 = G__28443;
i__26731 = G__28444;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__26744 = cljs.core.seq(styles);
var chunk__26745 = null;
var count__26746 = (0);
var i__26747 = (0);
while(true){
if((i__26747 < count__26746)){
var vec__26755 = chunk__26745.cljs$core$IIndexed$_nth$arity$2(null,i__26747);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26755,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26755,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__28447 = seq__26744;
var G__28448 = chunk__26745;
var G__28449 = count__26746;
var G__28450 = (i__26747 + (1));
seq__26744 = G__28447;
chunk__26745 = G__28448;
count__26746 = G__28449;
i__26747 = G__28450;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26744);
if(temp__5825__auto__){
var seq__26744__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26744__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__26744__$1);
var G__28451 = cljs.core.chunk_rest(seq__26744__$1);
var G__28452 = c__5694__auto__;
var G__28453 = cljs.core.count(c__5694__auto__);
var G__28454 = (0);
seq__26744 = G__28451;
chunk__26745 = G__28452;
count__26746 = G__28453;
i__26747 = G__28454;
continue;
} else {
var vec__26766 = cljs.core.first(seq__26744__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26766,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26766,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__28455 = cljs.core.next(seq__26744__$1);
var G__28456 = null;
var G__28457 = (0);
var G__28458 = (0);
seq__26744 = G__28455;
chunk__26745 = G__28456;
count__26746 = G__28457;
i__26747 = G__28458;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__26774_28461 = key;
var G__26774_28462__$1 = (((G__26774_28461 instanceof cljs.core.Keyword))?G__26774_28461.fqn:null);
switch (G__26774_28462__$1) {
case "id":
(el.id = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "class":
(el.className = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_28468 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5162__auto__ = goog.string.startsWith(ks_28468,"data-");
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return goog.string.startsWith(ks_28468,"aria-");
}
})())){
el.setAttribute(ks_28468,value);
} else {
(el[ks_28468] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class));
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw (""+"cant have id after class?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1));
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__26836){
var map__26840 = p__26836;
var map__26840__$1 = cljs.core.__destructure_map(map__26840);
var props = map__26840__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26840__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__26848 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26848,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26848,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26848,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__26860 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__26860,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__26860;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__26892 = arguments.length;
switch (G__26892) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5825__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5825__auto__)){
var n = temp__5825__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5825__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5825__auto__)){
var n = temp__5825__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__26968){
var vec__26970 = p__26968;
var seq__26971 = cljs.core.seq(vec__26970);
var first__26972 = cljs.core.first(seq__26971);
var seq__26971__$1 = cljs.core.next(seq__26971);
var nn = first__26972;
var first__26972__$1 = cljs.core.first(seq__26971__$1);
var seq__26971__$2 = cljs.core.next(seq__26971__$1);
var np = first__26972__$1;
var nc = seq__26971__$2;
var node = vec__26970;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__26974 = nn;
var G__26975 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__26974,G__26975) : create_fn.call(null,G__26974,G__26975));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__26976 = nn;
var G__26977 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__26976,G__26977) : create_fn.call(null,G__26976,G__26977));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__26978 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26978,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26978,(1),null);
var seq__26983_28485 = cljs.core.seq(node_children);
var chunk__26984_28486 = null;
var count__26985_28487 = (0);
var i__26986_28488 = (0);
while(true){
if((i__26986_28488 < count__26985_28487)){
var child_struct_28493 = chunk__26984_28486.cljs$core$IIndexed$_nth$arity$2(null,i__26986_28488);
var children_28494 = shadow.dom.dom_node(child_struct_28493);
if(cljs.core.seq_QMARK_(children_28494)){
var seq__27051_28495 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_28494));
var chunk__27053_28496 = null;
var count__27054_28497 = (0);
var i__27055_28498 = (0);
while(true){
if((i__27055_28498 < count__27054_28497)){
var child_28499 = chunk__27053_28496.cljs$core$IIndexed$_nth$arity$2(null,i__27055_28498);
if(cljs.core.truth_(child_28499)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_28499);


var G__28504 = seq__27051_28495;
var G__28505 = chunk__27053_28496;
var G__28506 = count__27054_28497;
var G__28507 = (i__27055_28498 + (1));
seq__27051_28495 = G__28504;
chunk__27053_28496 = G__28505;
count__27054_28497 = G__28506;
i__27055_28498 = G__28507;
continue;
} else {
var G__28508 = seq__27051_28495;
var G__28509 = chunk__27053_28496;
var G__28510 = count__27054_28497;
var G__28511 = (i__27055_28498 + (1));
seq__27051_28495 = G__28508;
chunk__27053_28496 = G__28509;
count__27054_28497 = G__28510;
i__27055_28498 = G__28511;
continue;
}
} else {
var temp__5825__auto___28512 = cljs.core.seq(seq__27051_28495);
if(temp__5825__auto___28512){
var seq__27051_28513__$1 = temp__5825__auto___28512;
if(cljs.core.chunked_seq_QMARK_(seq__27051_28513__$1)){
var c__5694__auto___28514 = cljs.core.chunk_first(seq__27051_28513__$1);
var G__28515 = cljs.core.chunk_rest(seq__27051_28513__$1);
var G__28516 = c__5694__auto___28514;
var G__28517 = cljs.core.count(c__5694__auto___28514);
var G__28518 = (0);
seq__27051_28495 = G__28515;
chunk__27053_28496 = G__28516;
count__27054_28497 = G__28517;
i__27055_28498 = G__28518;
continue;
} else {
var child_28519 = cljs.core.first(seq__27051_28513__$1);
if(cljs.core.truth_(child_28519)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_28519);


var G__28520 = cljs.core.next(seq__27051_28513__$1);
var G__28521 = null;
var G__28522 = (0);
var G__28523 = (0);
seq__27051_28495 = G__28520;
chunk__27053_28496 = G__28521;
count__27054_28497 = G__28522;
i__27055_28498 = G__28523;
continue;
} else {
var G__28524 = cljs.core.next(seq__27051_28513__$1);
var G__28525 = null;
var G__28526 = (0);
var G__28527 = (0);
seq__27051_28495 = G__28524;
chunk__27053_28496 = G__28525;
count__27054_28497 = G__28526;
i__27055_28498 = G__28527;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_28494);
}


var G__28528 = seq__26983_28485;
var G__28529 = chunk__26984_28486;
var G__28530 = count__26985_28487;
var G__28531 = (i__26986_28488 + (1));
seq__26983_28485 = G__28528;
chunk__26984_28486 = G__28529;
count__26985_28487 = G__28530;
i__26986_28488 = G__28531;
continue;
} else {
var temp__5825__auto___28532 = cljs.core.seq(seq__26983_28485);
if(temp__5825__auto___28532){
var seq__26983_28533__$1 = temp__5825__auto___28532;
if(cljs.core.chunked_seq_QMARK_(seq__26983_28533__$1)){
var c__5694__auto___28534 = cljs.core.chunk_first(seq__26983_28533__$1);
var G__28535 = cljs.core.chunk_rest(seq__26983_28533__$1);
var G__28536 = c__5694__auto___28534;
var G__28537 = cljs.core.count(c__5694__auto___28534);
var G__28538 = (0);
seq__26983_28485 = G__28535;
chunk__26984_28486 = G__28536;
count__26985_28487 = G__28537;
i__26986_28488 = G__28538;
continue;
} else {
var child_struct_28540 = cljs.core.first(seq__26983_28533__$1);
var children_28541 = shadow.dom.dom_node(child_struct_28540);
if(cljs.core.seq_QMARK_(children_28541)){
var seq__27094_28542 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_28541));
var chunk__27096_28543 = null;
var count__27097_28544 = (0);
var i__27098_28545 = (0);
while(true){
if((i__27098_28545 < count__27097_28544)){
var child_28546 = chunk__27096_28543.cljs$core$IIndexed$_nth$arity$2(null,i__27098_28545);
if(cljs.core.truth_(child_28546)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_28546);


var G__28547 = seq__27094_28542;
var G__28548 = chunk__27096_28543;
var G__28549 = count__27097_28544;
var G__28550 = (i__27098_28545 + (1));
seq__27094_28542 = G__28547;
chunk__27096_28543 = G__28548;
count__27097_28544 = G__28549;
i__27098_28545 = G__28550;
continue;
} else {
var G__28552 = seq__27094_28542;
var G__28553 = chunk__27096_28543;
var G__28554 = count__27097_28544;
var G__28555 = (i__27098_28545 + (1));
seq__27094_28542 = G__28552;
chunk__27096_28543 = G__28553;
count__27097_28544 = G__28554;
i__27098_28545 = G__28555;
continue;
}
} else {
var temp__5825__auto___28557__$1 = cljs.core.seq(seq__27094_28542);
if(temp__5825__auto___28557__$1){
var seq__27094_28558__$1 = temp__5825__auto___28557__$1;
if(cljs.core.chunked_seq_QMARK_(seq__27094_28558__$1)){
var c__5694__auto___28562 = cljs.core.chunk_first(seq__27094_28558__$1);
var G__28564 = cljs.core.chunk_rest(seq__27094_28558__$1);
var G__28565 = c__5694__auto___28562;
var G__28566 = cljs.core.count(c__5694__auto___28562);
var G__28567 = (0);
seq__27094_28542 = G__28564;
chunk__27096_28543 = G__28565;
count__27097_28544 = G__28566;
i__27098_28545 = G__28567;
continue;
} else {
var child_28571 = cljs.core.first(seq__27094_28558__$1);
if(cljs.core.truth_(child_28571)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_28571);


var G__28575 = cljs.core.next(seq__27094_28558__$1);
var G__28576 = null;
var G__28577 = (0);
var G__28578 = (0);
seq__27094_28542 = G__28575;
chunk__27096_28543 = G__28576;
count__27097_28544 = G__28577;
i__27098_28545 = G__28578;
continue;
} else {
var G__28579 = cljs.core.next(seq__27094_28558__$1);
var G__28580 = null;
var G__28581 = (0);
var G__28582 = (0);
seq__27094_28542 = G__28579;
chunk__27096_28543 = G__28580;
count__27097_28544 = G__28581;
i__27098_28545 = G__28582;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_28541);
}


var G__28588 = cljs.core.next(seq__26983_28533__$1);
var G__28589 = null;
var G__28590 = (0);
var G__28591 = (0);
seq__26983_28485 = G__28588;
chunk__26984_28486 = G__28589;
count__26985_28487 = G__28590;
i__26986_28488 = G__28591;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__27140 = cljs.core.seq(node);
var chunk__27141 = null;
var count__27142 = (0);
var i__27143 = (0);
while(true){
if((i__27143 < count__27142)){
var n = chunk__27141.cljs$core$IIndexed$_nth$arity$2(null,i__27143);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__28601 = seq__27140;
var G__28602 = chunk__27141;
var G__28603 = count__27142;
var G__28604 = (i__27143 + (1));
seq__27140 = G__28601;
chunk__27141 = G__28602;
count__27142 = G__28603;
i__27143 = G__28604;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__27140);
if(temp__5825__auto__){
var seq__27140__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27140__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__27140__$1);
var G__28605 = cljs.core.chunk_rest(seq__27140__$1);
var G__28606 = c__5694__auto__;
var G__28607 = cljs.core.count(c__5694__auto__);
var G__28608 = (0);
seq__27140 = G__28605;
chunk__27141 = G__28606;
count__27142 = G__28607;
i__27143 = G__28608;
continue;
} else {
var n = cljs.core.first(seq__27140__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__28609 = cljs.core.next(seq__27140__$1);
var G__28610 = null;
var G__28611 = (0);
var G__28612 = (0);
seq__27140 = G__28609;
chunk__27141 = G__28610;
count__27142 = G__28611;
i__27143 = G__28612;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__27172 = arguments.length;
switch (G__27172) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__27185 = arguments.length;
switch (G__27185) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__27203 = arguments.length;
switch (G__27203) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5162__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5903__auto__ = [];
var len__5897__auto___28639 = arguments.length;
var i__5898__auto___28640 = (0);
while(true){
if((i__5898__auto___28640 < len__5897__auto___28639)){
args__5903__auto__.push((arguments[i__5898__auto___28640]));

var G__28641 = (i__5898__auto___28640 + (1));
i__5898__auto___28640 = G__28641;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__27232_28642 = cljs.core.seq(nodes);
var chunk__27233_28643 = null;
var count__27234_28644 = (0);
var i__27235_28645 = (0);
while(true){
if((i__27235_28645 < count__27234_28644)){
var node_28646 = chunk__27233_28643.cljs$core$IIndexed$_nth$arity$2(null,i__27235_28645);
fragment.appendChild(shadow.dom._to_dom(node_28646));


var G__28647 = seq__27232_28642;
var G__28648 = chunk__27233_28643;
var G__28649 = count__27234_28644;
var G__28650 = (i__27235_28645 + (1));
seq__27232_28642 = G__28647;
chunk__27233_28643 = G__28648;
count__27234_28644 = G__28649;
i__27235_28645 = G__28650;
continue;
} else {
var temp__5825__auto___28651 = cljs.core.seq(seq__27232_28642);
if(temp__5825__auto___28651){
var seq__27232_28652__$1 = temp__5825__auto___28651;
if(cljs.core.chunked_seq_QMARK_(seq__27232_28652__$1)){
var c__5694__auto___28653 = cljs.core.chunk_first(seq__27232_28652__$1);
var G__28654 = cljs.core.chunk_rest(seq__27232_28652__$1);
var G__28655 = c__5694__auto___28653;
var G__28656 = cljs.core.count(c__5694__auto___28653);
var G__28657 = (0);
seq__27232_28642 = G__28654;
chunk__27233_28643 = G__28655;
count__27234_28644 = G__28656;
i__27235_28645 = G__28657;
continue;
} else {
var node_28658 = cljs.core.first(seq__27232_28652__$1);
fragment.appendChild(shadow.dom._to_dom(node_28658));


var G__28660 = cljs.core.next(seq__27232_28652__$1);
var G__28661 = null;
var G__28662 = (0);
var G__28663 = (0);
seq__27232_28642 = G__28660;
chunk__27233_28643 = G__28661;
count__27234_28644 = G__28662;
i__27235_28645 = G__28663;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq27226){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27226));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__27262_28665 = cljs.core.seq(scripts);
var chunk__27263_28666 = null;
var count__27264_28667 = (0);
var i__27265_28668 = (0);
while(true){
if((i__27265_28668 < count__27264_28667)){
var vec__27282_28669 = chunk__27263_28666.cljs$core$IIndexed$_nth$arity$2(null,i__27265_28668);
var script_tag_28670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27282_28669,(0),null);
var script_body_28671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27282_28669,(1),null);
eval(script_body_28671);


var G__28674 = seq__27262_28665;
var G__28675 = chunk__27263_28666;
var G__28676 = count__27264_28667;
var G__28677 = (i__27265_28668 + (1));
seq__27262_28665 = G__28674;
chunk__27263_28666 = G__28675;
count__27264_28667 = G__28676;
i__27265_28668 = G__28677;
continue;
} else {
var temp__5825__auto___28678 = cljs.core.seq(seq__27262_28665);
if(temp__5825__auto___28678){
var seq__27262_28679__$1 = temp__5825__auto___28678;
if(cljs.core.chunked_seq_QMARK_(seq__27262_28679__$1)){
var c__5694__auto___28680 = cljs.core.chunk_first(seq__27262_28679__$1);
var G__28682 = cljs.core.chunk_rest(seq__27262_28679__$1);
var G__28683 = c__5694__auto___28680;
var G__28684 = cljs.core.count(c__5694__auto___28680);
var G__28685 = (0);
seq__27262_28665 = G__28682;
chunk__27263_28666 = G__28683;
count__27264_28667 = G__28684;
i__27265_28668 = G__28685;
continue;
} else {
var vec__27291_28686 = cljs.core.first(seq__27262_28679__$1);
var script_tag_28687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27291_28686,(0),null);
var script_body_28688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27291_28686,(1),null);
eval(script_body_28688);


var G__28690 = cljs.core.next(seq__27262_28679__$1);
var G__28691 = null;
var G__28692 = (0);
var G__28693 = (0);
seq__27262_28665 = G__28690;
chunk__27263_28666 = G__28691;
count__27264_28667 = G__28692;
i__27265_28668 = G__28693;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__27298){
var vec__27299 = p__27298;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27299,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27299,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__27323 = arguments.length;
switch (G__27323) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | 0))+"px");
});
shadow.dom.pct = (function shadow$dom$pct(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)+"%");
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__27355 = cljs.core.seq(style_keys);
var chunk__27356 = null;
var count__27357 = (0);
var i__27358 = (0);
while(true){
if((i__27358 < count__27357)){
var it = chunk__27356.cljs$core$IIndexed$_nth$arity$2(null,i__27358);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__28700 = seq__27355;
var G__28701 = chunk__27356;
var G__28702 = count__27357;
var G__28703 = (i__27358 + (1));
seq__27355 = G__28700;
chunk__27356 = G__28701;
count__27357 = G__28702;
i__27358 = G__28703;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__27355);
if(temp__5825__auto__){
var seq__27355__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27355__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__27355__$1);
var G__28705 = cljs.core.chunk_rest(seq__27355__$1);
var G__28706 = c__5694__auto__;
var G__28707 = cljs.core.count(c__5694__auto__);
var G__28708 = (0);
seq__27355 = G__28705;
chunk__27356 = G__28706;
count__27357 = G__28707;
i__27358 = G__28708;
continue;
} else {
var it = cljs.core.first(seq__27355__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__28709 = cljs.core.next(seq__27355__$1);
var G__28710 = null;
var G__28711 = (0);
var G__28712 = (0);
seq__27355 = G__28709;
chunk__27356 = G__28710;
count__27357 = G__28711;
i__27358 = G__28712;
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
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
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
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k27383,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__27408 = k27383;
var G__27408__$1 = (((G__27408 instanceof cljs.core.Keyword))?G__27408.fqn:null);
switch (G__27408__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27383,else__5472__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__27421){
var vec__27425 = p__27421;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27425,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27425,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27382){
var self__ = this;
var G__27382__$1 = this;
return (new cljs.core.RecordIter((0),G__27382__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (coll__5466__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
})(this__5465__auto____$1);
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27384,other27385){
var self__ = this;
var this27384__$1 = this;
return (((!((other27385 == null)))) && ((((this27384__$1.constructor === other27385.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27384__$1.x,other27385.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27384__$1.y,other27385.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27384__$1.__extmap,other27385.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k27383){
var self__ = this;
var this__5476__auto____$1 = this;
var G__27493 = k27383;
var G__27493__$1 = (((G__27493 instanceof cljs.core.Keyword))?G__27493.fqn:null);
switch (G__27493__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k27383);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__27382){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__27534 = cljs.core.keyword_identical_QMARK_;
var expr__27535 = k__5478__auto__;
if(cljs.core.truth_((pred__27534.cljs$core$IFn$_invoke$arity$2 ? pred__27534.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__27535) : pred__27534.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__27535)))){
return (new shadow.dom.Coordinate(G__27382,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27534.cljs$core$IFn$_invoke$arity$2 ? pred__27534.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__27535) : pred__27534.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__27535)))){
return (new shadow.dom.Coordinate(self__.x,G__27382,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__27382),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__27382){
var self__ = this;
var this__5468__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__27382,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5475__auto__,(0)),cljs.core._nth(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__27390){
var extmap__5511__auto__ = (function (){var G__27643 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27390,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__27390)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__27643);
} else {
return G__27643;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__27390),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__27390),null,cljs.core.not_empty(extmap__5511__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
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
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k27683,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__27741 = k27683;
var G__27741__$1 = (((G__27741 instanceof cljs.core.Keyword))?G__27741.fqn:null);
switch (G__27741__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27683,else__5472__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__27757){
var vec__27758 = p__27757;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27758,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27758,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#shadow.dom.Size{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27682){
var self__ = this;
var G__27682__$1 = this;
return (new cljs.core.RecordIter((0),G__27682__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (coll__5466__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
})(this__5465__auto____$1);
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27684,other27685){
var self__ = this;
var this27684__$1 = this;
return (((!((other27685 == null)))) && ((((this27684__$1.constructor === other27685.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27684__$1.w,other27685.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27684__$1.h,other27685.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27684__$1.__extmap,other27685.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k27683){
var self__ = this;
var this__5476__auto____$1 = this;
var G__27838 = k27683;
var G__27838__$1 = (((G__27838 instanceof cljs.core.Keyword))?G__27838.fqn:null);
switch (G__27838__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k27683);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__27682){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__27898 = cljs.core.keyword_identical_QMARK_;
var expr__27899 = k__5478__auto__;
if(cljs.core.truth_((pred__27898.cljs$core$IFn$_invoke$arity$2 ? pred__27898.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__27899) : pred__27898.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__27899)))){
return (new shadow.dom.Size(G__27682,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27898.cljs$core$IFn$_invoke$arity$2 ? pred__27898.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__27899) : pred__27898.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__27899)))){
return (new shadow.dom.Size(self__.w,G__27682,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__27682),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__27682){
var self__ = this;
var this__5468__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__27682,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5475__auto__,(0)),cljs.core._nth(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__27687){
var extmap__5511__auto__ = (function (){var G__27986 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27687,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__27687)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__27986);
} else {
return G__27986;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__27687),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__27687),null,cljs.core.not_empty(extmap__5511__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5759__auto__ = opts;
var l__5760__auto__ = a__5759__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5760__auto__)){
var G__28896 = (i + (1));
var G__28897 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__28896;
ret = G__28897;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__28100){
var vec__28116 = p__28100;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28116,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28116,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
}),query_params))));
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__28141 = arguments.length;
switch (G__28141) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5823__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5823__auto__)){
var child = temp__5823__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__28922 = ps;
var G__28923 = (i + (1));
el__$1 = G__28922;
i = G__28923;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__28242 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28242,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28242,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28242,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__28248_28952 = cljs.core.seq(props);
var chunk__28249_28953 = null;
var count__28250_28954 = (0);
var i__28251_28955 = (0);
while(true){
if((i__28251_28955 < count__28250_28954)){
var vec__28268_28962 = chunk__28249_28953.cljs$core$IIndexed$_nth$arity$2(null,i__28251_28955);
var k_28963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28268_28962,(0),null);
var v_28964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28268_28962,(1),null);
el.setAttributeNS((function (){var temp__5825__auto__ = cljs.core.namespace(k_28963);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_28963),v_28964);


var G__28987 = seq__28248_28952;
var G__28988 = chunk__28249_28953;
var G__28989 = count__28250_28954;
var G__28990 = (i__28251_28955 + (1));
seq__28248_28952 = G__28987;
chunk__28249_28953 = G__28988;
count__28250_28954 = G__28989;
i__28251_28955 = G__28990;
continue;
} else {
var temp__5825__auto___28991 = cljs.core.seq(seq__28248_28952);
if(temp__5825__auto___28991){
var seq__28248_28993__$1 = temp__5825__auto___28991;
if(cljs.core.chunked_seq_QMARK_(seq__28248_28993__$1)){
var c__5694__auto___28995 = cljs.core.chunk_first(seq__28248_28993__$1);
var G__28996 = cljs.core.chunk_rest(seq__28248_28993__$1);
var G__28997 = c__5694__auto___28995;
var G__28998 = cljs.core.count(c__5694__auto___28995);
var G__28999 = (0);
seq__28248_28952 = G__28996;
chunk__28249_28953 = G__28997;
count__28250_28954 = G__28998;
i__28251_28955 = G__28999;
continue;
} else {
var vec__28277_29001 = cljs.core.first(seq__28248_28993__$1);
var k_29002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28277_29001,(0),null);
var v_29003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28277_29001,(1),null);
el.setAttributeNS((function (){var temp__5825__auto____$1 = cljs.core.namespace(k_29002);
if(cljs.core.truth_(temp__5825__auto____$1)){
var ns = temp__5825__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_29002),v_29003);


var G__29004 = cljs.core.next(seq__28248_28993__$1);
var G__29005 = null;
var G__29006 = (0);
var G__29007 = (0);
seq__28248_28952 = G__29004;
chunk__28249_28953 = G__29005;
count__28250_28954 = G__29006;
i__28251_28955 = G__29007;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__28283 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28283,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28283,(1),null);
var seq__28286_29008 = cljs.core.seq(node_children);
var chunk__28288_29009 = null;
var count__28289_29010 = (0);
var i__28290_29011 = (0);
while(true){
if((i__28290_29011 < count__28289_29010)){
var child_struct_29012 = chunk__28288_29009.cljs$core$IIndexed$_nth$arity$2(null,i__28290_29011);
if((!((child_struct_29012 == null)))){
if(typeof child_struct_29012 === 'string'){
var text_29013 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_29013)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_29012)));
} else {
var children_29014 = shadow.dom.svg_node(child_struct_29012);
if(cljs.core.seq_QMARK_(children_29014)){
var seq__28311_29015 = cljs.core.seq(children_29014);
var chunk__28313_29016 = null;
var count__28314_29017 = (0);
var i__28315_29018 = (0);
while(true){
if((i__28315_29018 < count__28314_29017)){
var child_29020 = chunk__28313_29016.cljs$core$IIndexed$_nth$arity$2(null,i__28315_29018);
if(cljs.core.truth_(child_29020)){
node.appendChild(child_29020);


var G__29023 = seq__28311_29015;
var G__29024 = chunk__28313_29016;
var G__29025 = count__28314_29017;
var G__29026 = (i__28315_29018 + (1));
seq__28311_29015 = G__29023;
chunk__28313_29016 = G__29024;
count__28314_29017 = G__29025;
i__28315_29018 = G__29026;
continue;
} else {
var G__29027 = seq__28311_29015;
var G__29028 = chunk__28313_29016;
var G__29029 = count__28314_29017;
var G__29030 = (i__28315_29018 + (1));
seq__28311_29015 = G__29027;
chunk__28313_29016 = G__29028;
count__28314_29017 = G__29029;
i__28315_29018 = G__29030;
continue;
}
} else {
var temp__5825__auto___29032 = cljs.core.seq(seq__28311_29015);
if(temp__5825__auto___29032){
var seq__28311_29033__$1 = temp__5825__auto___29032;
if(cljs.core.chunked_seq_QMARK_(seq__28311_29033__$1)){
var c__5694__auto___29035 = cljs.core.chunk_first(seq__28311_29033__$1);
var G__29036 = cljs.core.chunk_rest(seq__28311_29033__$1);
var G__29037 = c__5694__auto___29035;
var G__29038 = cljs.core.count(c__5694__auto___29035);
var G__29039 = (0);
seq__28311_29015 = G__29036;
chunk__28313_29016 = G__29037;
count__28314_29017 = G__29038;
i__28315_29018 = G__29039;
continue;
} else {
var child_29040 = cljs.core.first(seq__28311_29033__$1);
if(cljs.core.truth_(child_29040)){
node.appendChild(child_29040);


var G__29042 = cljs.core.next(seq__28311_29033__$1);
var G__29043 = null;
var G__29044 = (0);
var G__29045 = (0);
seq__28311_29015 = G__29042;
chunk__28313_29016 = G__29043;
count__28314_29017 = G__29044;
i__28315_29018 = G__29045;
continue;
} else {
var G__29046 = cljs.core.next(seq__28311_29033__$1);
var G__29047 = null;
var G__29048 = (0);
var G__29049 = (0);
seq__28311_29015 = G__29046;
chunk__28313_29016 = G__29047;
count__28314_29017 = G__29048;
i__28315_29018 = G__29049;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_29014);
}
}


var G__29050 = seq__28286_29008;
var G__29051 = chunk__28288_29009;
var G__29052 = count__28289_29010;
var G__29053 = (i__28290_29011 + (1));
seq__28286_29008 = G__29050;
chunk__28288_29009 = G__29051;
count__28289_29010 = G__29052;
i__28290_29011 = G__29053;
continue;
} else {
var G__29054 = seq__28286_29008;
var G__29055 = chunk__28288_29009;
var G__29056 = count__28289_29010;
var G__29057 = (i__28290_29011 + (1));
seq__28286_29008 = G__29054;
chunk__28288_29009 = G__29055;
count__28289_29010 = G__29056;
i__28290_29011 = G__29057;
continue;
}
} else {
var temp__5825__auto___29058 = cljs.core.seq(seq__28286_29008);
if(temp__5825__auto___29058){
var seq__28286_29059__$1 = temp__5825__auto___29058;
if(cljs.core.chunked_seq_QMARK_(seq__28286_29059__$1)){
var c__5694__auto___29060 = cljs.core.chunk_first(seq__28286_29059__$1);
var G__29061 = cljs.core.chunk_rest(seq__28286_29059__$1);
var G__29062 = c__5694__auto___29060;
var G__29063 = cljs.core.count(c__5694__auto___29060);
var G__29064 = (0);
seq__28286_29008 = G__29061;
chunk__28288_29009 = G__29062;
count__28289_29010 = G__29063;
i__28290_29011 = G__29064;
continue;
} else {
var child_struct_29065 = cljs.core.first(seq__28286_29059__$1);
if((!((child_struct_29065 == null)))){
if(typeof child_struct_29065 === 'string'){
var text_29067 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_29067)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_29065)));
} else {
var children_29068 = shadow.dom.svg_node(child_struct_29065);
if(cljs.core.seq_QMARK_(children_29068)){
var seq__28319_29069 = cljs.core.seq(children_29068);
var chunk__28321_29070 = null;
var count__28322_29071 = (0);
var i__28323_29072 = (0);
while(true){
if((i__28323_29072 < count__28322_29071)){
var child_29073 = chunk__28321_29070.cljs$core$IIndexed$_nth$arity$2(null,i__28323_29072);
if(cljs.core.truth_(child_29073)){
node.appendChild(child_29073);


var G__29074 = seq__28319_29069;
var G__29075 = chunk__28321_29070;
var G__29076 = count__28322_29071;
var G__29077 = (i__28323_29072 + (1));
seq__28319_29069 = G__29074;
chunk__28321_29070 = G__29075;
count__28322_29071 = G__29076;
i__28323_29072 = G__29077;
continue;
} else {
var G__29078 = seq__28319_29069;
var G__29079 = chunk__28321_29070;
var G__29080 = count__28322_29071;
var G__29081 = (i__28323_29072 + (1));
seq__28319_29069 = G__29078;
chunk__28321_29070 = G__29079;
count__28322_29071 = G__29080;
i__28323_29072 = G__29081;
continue;
}
} else {
var temp__5825__auto___29082__$1 = cljs.core.seq(seq__28319_29069);
if(temp__5825__auto___29082__$1){
var seq__28319_29083__$1 = temp__5825__auto___29082__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28319_29083__$1)){
var c__5694__auto___29084 = cljs.core.chunk_first(seq__28319_29083__$1);
var G__29085 = cljs.core.chunk_rest(seq__28319_29083__$1);
var G__29086 = c__5694__auto___29084;
var G__29087 = cljs.core.count(c__5694__auto___29084);
var G__29088 = (0);
seq__28319_29069 = G__29085;
chunk__28321_29070 = G__29086;
count__28322_29071 = G__29087;
i__28323_29072 = G__29088;
continue;
} else {
var child_29090 = cljs.core.first(seq__28319_29083__$1);
if(cljs.core.truth_(child_29090)){
node.appendChild(child_29090);


var G__29091 = cljs.core.next(seq__28319_29083__$1);
var G__29092 = null;
var G__29093 = (0);
var G__29094 = (0);
seq__28319_29069 = G__29091;
chunk__28321_29070 = G__29092;
count__28322_29071 = G__29093;
i__28323_29072 = G__29094;
continue;
} else {
var G__29095 = cljs.core.next(seq__28319_29083__$1);
var G__29096 = null;
var G__29097 = (0);
var G__29098 = (0);
seq__28319_29069 = G__29095;
chunk__28321_29070 = G__29096;
count__28322_29071 = G__29097;
i__28323_29072 = G__29098;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_29068);
}
}


var G__29099 = cljs.core.next(seq__28286_29059__$1);
var G__29100 = null;
var G__29101 = (0);
var G__29102 = (0);
seq__28286_29008 = G__29099;
chunk__28288_29009 = G__29100;
count__28289_29010 = G__29101;
i__28290_29011 = G__29102;
continue;
} else {
var G__29103 = cljs.core.next(seq__28286_29059__$1);
var G__29104 = null;
var G__29105 = (0);
var G__29106 = (0);
seq__28286_29008 = G__29103;
chunk__28288_29009 = G__29104;
count__28289_29010 = G__29105;
i__28290_29011 = G__29106;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5903__auto__ = [];
var len__5897__auto___29115 = arguments.length;
var i__5898__auto___29116 = (0);
while(true){
if((i__5898__auto___29116 < len__5897__auto___29115)){
args__5903__auto__.push((arguments[i__5898__auto___29116]));

var G__29121 = (i__5898__auto___29116 + (1));
i__5898__auto___29116 = G__29121;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq28333){
var G__28334 = cljs.core.first(seq28333);
var seq28333__$1 = cljs.core.next(seq28333);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28334,seq28333__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
