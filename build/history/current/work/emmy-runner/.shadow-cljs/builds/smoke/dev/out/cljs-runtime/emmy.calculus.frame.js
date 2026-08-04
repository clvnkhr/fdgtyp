goog.provide('emmy.calculus.frame');

/**
 * @interface
 */
emmy.calculus.frame.IFrame = function(){};

var emmy$calculus$frame$IFrame$coords__GT_event$dyn_38905 = (function (this$,coords){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (emmy.calculus.frame.coords__GT_event[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(this$,coords) : m__5520__auto__.call(null,this$,coords));
} else {
var m__5518__auto__ = (emmy.calculus.frame.coords__GT_event["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(this$,coords) : m__5518__auto__.call(null,this$,coords));
} else {
throw cljs.core.missing_protocol("IFrame.coords->event",this$);
}
}
});
/**
 * Accepts a coordinate representation `coords` of some `event` and returns a
 *  coordinate-free representation of the event.
 * 
 *  `coords` must be owned this this reference frame; [[coords->event]] will throw
 *  if not.
 */
emmy.calculus.frame.coords__GT_event = (function emmy$calculus$frame$coords__GT_event(this$,coords){
if((((!((this$ == null)))) && ((!((this$.emmy$calculus$frame$IFrame$coords__GT_event$arity$2 == null)))))){
return this$.emmy$calculus$frame$IFrame$coords__GT_event$arity$2(this$,coords);
} else {
return emmy$calculus$frame$IFrame$coords__GT_event$dyn_38905(this$,coords);
}
});

var emmy$calculus$frame$IFrame$event__GT_coords$dyn_38906 = (function (this$,event){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (emmy.calculus.frame.event__GT_coords[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__5520__auto__.call(null,this$,event));
} else {
var m__5518__auto__ = (emmy.calculus.frame.event__GT_coords["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__5518__auto__.call(null,this$,event));
} else {
throw cljs.core.missing_protocol("IFrame.event->coords",this$);
}
}
});
/**
 * Accepts a reference frame and an `event`, and returns this reference
 *  frame's coordinate representation of the supplied `event`.
 */
emmy.calculus.frame.event__GT_coords = (function emmy$calculus$frame$event__GT_coords(this$,event){
if((((!((this$ == null)))) && ((!((this$.emmy$calculus$frame$IFrame$event__GT_coords$arity$2 == null)))))){
return this$.emmy$calculus$frame$IFrame$event__GT_coords$arity$2(this$,event);
} else {
return emmy$calculus$frame$IFrame$event__GT_coords$dyn_38906(this$,event);
}
});

var emmy$calculus$frame$IFrame$ancestor_frame$dyn_38907 = (function (_){
var x__5519__auto__ = (((_ == null))?null:_);
var m__5520__auto__ = (emmy.calculus.frame.ancestor_frame[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5520__auto__.call(null,_));
} else {
var m__5518__auto__ = (emmy.calculus.frame.ancestor_frame["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5518__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IFrame.ancestor-frame",_);
}
}
});
/**
 * Returns the ancestor [[IFrame]] instance of this frame, or nil if there is
 *  no ancestor.
 */
emmy.calculus.frame.ancestor_frame = (function emmy$calculus$frame$ancestor_frame(_){
if((((!((_ == null)))) && ((!((_.emmy$calculus$frame$IFrame$ancestor_frame$arity$1 == null)))))){
return _.emmy$calculus$frame$IFrame$ancestor_frame$arity$1(_);
} else {
return emmy$calculus$frame$IFrame$ancestor_frame$dyn_38907(_);
}
});

var emmy$calculus$frame$IFrame$frame_name$dyn_38908 = (function (_){
var x__5519__auto__ = (((_ == null))?null:_);
var m__5520__auto__ = (emmy.calculus.frame.frame_name[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5520__auto__.call(null,_));
} else {
var m__5518__auto__ = (emmy.calculus.frame.frame_name["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5518__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IFrame.frame-name",_);
}
}
});
/**
 * Returns the symbolic name of the suppplied frame.
 */
emmy.calculus.frame.frame_name = (function emmy$calculus$frame$frame_name(_){
if((((!((_ == null)))) && ((!((_.emmy$calculus$frame$IFrame$frame_name$arity$1 == null)))))){
return _.emmy$calculus$frame$IFrame$frame_name$arity$1(_);
} else {
return emmy$calculus$frame$IFrame$frame_name$dyn_38908(_);
}
});

var emmy$calculus$frame$IFrame$params$dyn_38909 = (function (_){
var x__5519__auto__ = (((_ == null))?null:_);
var m__5520__auto__ = (emmy.calculus.frame.params[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5520__auto__.call(null,_));
} else {
var m__5518__auto__ = (emmy.calculus.frame.params["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5518__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IFrame.params",_);
}
}
});
/**
 * Returns the parameters registered with the supplied frame.
 */
emmy.calculus.frame.params = (function emmy$calculus$frame$params(_){
if((((!((_ == null)))) && ((!((_.emmy$calculus$frame$IFrame$params$arity$1 == null)))))){
return _.emmy$calculus$frame$IFrame$params$arity$1(_);
} else {
return emmy$calculus$frame$IFrame$params$dyn_38909(_);
}
});

/**
 * Returns true if `x` implements [[IFrame]], false otherwise.
 */
emmy.calculus.frame.frame_QMARK_ = (function emmy$calculus$frame$frame_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.emmy$calculus$frame$IFrame$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(emmy.calculus.frame.IFrame,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(emmy.calculus.frame.IFrame,x);
}
});
/**
 * Marks the input event `e` as an event via its metadata. The return value will
 *   return `true` when passed to [[event?]].
 */
emmy.calculus.frame.make_event = (function emmy$calculus$frame$make_event(e){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(e,cljs.core.assoc,new cljs.core.Keyword("emmy.calculus.frame","event?","emmy.calculus.frame/event?",-489879263),true);
});
/**
 * Returns true if `e` is an event, false otherwise.
 * 
 *   Make new events with [[make-event]].
 */
emmy.calculus.frame.event_QMARK_ = (function emmy$calculus$frame$event_QMARK_(e){
return new cljs.core.Keyword("emmy.calculus.frame","event?","emmy.calculus.frame/event?",-489879263).cljs$core$IFn$_invoke$arity$2(cljs.core.meta(e),false);
});
/**
 * Returns the owning [[IFrame]] instance of the supplied coordinates `coords`,
 *   nil if there's no owner otherwise.
 */
emmy.calculus.frame.frame_owner = (function emmy$calculus$frame$frame_owner(coords){
return new cljs.core.Keyword("emmy.calculus.frame","owner","emmy.calculus.frame/owner",-1563689470).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(coords));
});
/**
 * Marks (via metadata) the supplied set of `coords` as being owned by `owner`. If
 *   `coords` already has an owner (that is not equal to `owner`), throws.
 */
emmy.calculus.frame.claim = (function emmy$calculus$frame$claim(coords,owner){
var temp__5823__auto__ = emmy.calculus.frame.frame_owner(coords);
if(cljs.core.truth_(temp__5823__auto__)){
var other = temp__5823__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(other,owner)){
return coords;
} else {
return emmy.util.illegal((""+"Someone else owns these coords: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(coords)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(owner)));
}
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(coords,cljs.core.assoc,new cljs.core.Keyword("emmy.calculus.frame","owner","emmy.calculus.frame/owner",-1563689470),owner);
}
});

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {emmy.calculus.frame.IFrame}
 * @implements {cljs.core.IWithMeta}
*/
emmy.calculus.frame.t_emmy$calculus$frame38898 = (function (c__GT_e,e__GT_c,call,name,ancestor_frame,params,meta38899){
this.c__GT_e = c__GT_e;
this.e__GT_c = e__GT_c;
this.call = call;
this.name = name;
this.ancestor_frame = ancestor_frame;
this.params = params;
this.meta38899 = meta38899;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(emmy.calculus.frame.t_emmy$calculus$frame38898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38900,meta38899__$1){
var self__ = this;
var _38900__$1 = this;
return (new emmy.calculus.frame.t_emmy$calculus$frame38898(self__.c__GT_e,self__.e__GT_c,self__.call,self__.name,self__.ancestor_frame,self__.params,meta38899__$1));
}));

(emmy.calculus.frame.t_emmy$calculus$frame38898.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38900){
var self__ = this;
var _38900__$1 = this;
return self__.meta38899;
}));

(emmy.calculus.frame.t_emmy$calculus$frame38898.prototype.emmy$calculus$frame$IFrame$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.calculus.frame.t_emmy$calculus$frame38898.prototype.emmy$calculus$frame$IFrame$ancestor_frame$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ancestor_frame;
}));

(emmy.calculus.frame.t_emmy$calculus$frame38898.prototype.emmy$calculus$frame$IFrame$frame_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.name;
}));

(emmy.calculus.frame.t_emmy$calculus$frame38898.prototype.emmy$calculus$frame$IFrame$params$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.params;
}));

(emmy.calculus.frame.t_emmy$calculus$frame38898.prototype.emmy$calculus$frame$IFrame$coords__GT_event$arity$2 = (function (this$,coords){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.calculus.frame.frame_owner(coords),this$__$1)){
} else {
throw (new Error("Assert failed: (= (frame-owner coords) this)"));
}

var event = (function (){var fexpr__38902 = (self__.c__GT_e.cljs$core$IFn$_invoke$arity$3 ? self__.c__GT_e.cljs$core$IFn$_invoke$arity$3(self__.ancestor_frame,this$__$1,self__.params) : self__.c__GT_e.call(null,self__.ancestor_frame,this$__$1,self__.params));
return (fexpr__38902.cljs$core$IFn$_invoke$arity$1 ? fexpr__38902.cljs$core$IFn$_invoke$arity$1(coords) : fexpr__38902.call(null,coords));
})();
if(cljs.core.truth_(emmy.calculus.frame.event_QMARK_(event))){
} else {
throw (new Error("Assert failed: (event? event)"));
}

return event;
}));

(emmy.calculus.frame.t_emmy$calculus$frame38898.prototype.emmy$calculus$frame$IFrame$event__GT_coords$arity$2 = (function (this$,event){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(emmy.calculus.frame.event_QMARK_(event))){
} else {
throw (new Error("Assert failed: (event? event)"));
}

var coords = (function (){var fexpr__38903 = (self__.e__GT_c.cljs$core$IFn$_invoke$arity$3 ? self__.e__GT_c.cljs$core$IFn$_invoke$arity$3(self__.ancestor_frame,this$__$1,self__.params) : self__.e__GT_c.call(null,self__.ancestor_frame,this$__$1,self__.params));
return (fexpr__38903.cljs$core$IFn$_invoke$arity$1 ? fexpr__38903.cljs$core$IFn$_invoke$arity$1(event) : fexpr__38903.call(null,event));
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.calculus.frame.frame_owner(coords),this$__$1)){
} else {
throw (new Error("Assert failed: (= (frame-owner coords) this)"));
}

return coords;
}));

(emmy.calculus.frame.t_emmy$calculus$frame38898.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c->e","c->e",366611773,null),new cljs.core.Symbol(null,"e->c","e->c",-1459982439,null),new cljs.core.Symbol(null,"call","call",1120531661,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"ancestor-frame","ancestor-frame",-1796645653,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"meta38899","meta38899",140909867,null)], null);
}));

(emmy.calculus.frame.t_emmy$calculus$frame38898.cljs$lang$type = true);

(emmy.calculus.frame.t_emmy$calculus$frame38898.cljs$lang$ctorStr = "emmy.calculus.frame/t_emmy$calculus$frame38898");

(emmy.calculus.frame.t_emmy$calculus$frame38898.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"emmy.calculus.frame/t_emmy$calculus$frame38898");
}));

/**
 * Positional factory function for emmy.calculus.frame/t_emmy$calculus$frame38898.
 */
emmy.calculus.frame.__GT_t_emmy$calculus$frame38898 = (function emmy$calculus$frame$__GT_t_emmy$calculus$frame38898(c__GT_e,e__GT_c,call,name,ancestor_frame,params,meta38899){
return (new emmy.calculus.frame.t_emmy$calculus$frame38898(c__GT_e,e__GT_c,call,name,ancestor_frame,params,meta38899));
});


/**
 * Takes:
 * 
 *   - `c->e`, a function mapping coordinates to events
 *   - `e->c`, a function mapping events to coordinates
 * 
 *   and returns a function that takes:
 * 
 *   - a symbolic name
 *   - an ancestor frame
 *   - a dictionary of params
 * 
 *   and returns instance of [[IFrame]].
 * 
 *   Both `c->e` and `e->c` must accept three arguments:
 * 
 *   - `ancestor-frame`
 *   - the [[IFrame]] instance
 *   - a map of parameters supplied to the returned function (possibly empty!).
 */
emmy.calculus.frame.frame_maker = (function emmy$calculus$frame$frame_maker(c__GT_e,e__GT_c){
return (function() {
var emmy$calculus$frame$frame_maker_$_call = null;
var emmy$calculus$frame$frame_maker_$_call__1 = (function (name){
return emmy$calculus$frame$frame_maker_$_call.cljs$core$IFn$_invoke$arity$3(name,null,cljs.core.PersistentArrayMap.EMPTY);
});
var emmy$calculus$frame$frame_maker_$_call__2 = (function (name,ancestor_frame){
return emmy$calculus$frame$frame_maker_$_call.cljs$core$IFn$_invoke$arity$3(name,ancestor_frame,cljs.core.PersistentArrayMap.EMPTY);
});
var emmy$calculus$frame$frame_maker_$_call__3 = (function (name,ancestor_frame,params){
return (new emmy.calculus.frame.t_emmy$calculus$frame38898(c__GT_e,e__GT_c,emmy$calculus$frame$frame_maker_$_call,name,ancestor_frame,params,cljs.core.PersistentArrayMap.EMPTY));
});
emmy$calculus$frame$frame_maker_$_call = function(name,ancestor_frame,params){
switch(arguments.length){
case 1:
return emmy$calculus$frame$frame_maker_$_call__1.call(this,name);
case 2:
return emmy$calculus$frame$frame_maker_$_call__2.call(this,name,ancestor_frame);
case 3:
return emmy$calculus$frame$frame_maker_$_call__3.call(this,name,ancestor_frame,params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
emmy$calculus$frame$frame_maker_$_call.cljs$core$IFn$_invoke$arity$1 = emmy$calculus$frame$frame_maker_$_call__1;
emmy$calculus$frame$frame_maker_$_call.cljs$core$IFn$_invoke$arity$2 = emmy$calculus$frame$frame_maker_$_call__2;
emmy$calculus$frame$frame_maker_$_call.cljs$core$IFn$_invoke$arity$3 = emmy$calculus$frame$frame_maker_$_call__3;
return emmy$calculus$frame$frame_maker_$_call;
})()
});

//# sourceMappingURL=emmy.calculus.frame.js.map
