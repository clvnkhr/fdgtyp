goog.provide('emmy.sr.frames');
emmy.sr.frames.make_SR_coordinates = (function emmy$sr$frames$make_SR_coordinates(frame,four_tuple){
if(emmy.structure.up_QMARK_(four_tuple)){
} else {
throw (new Error("Assert failed: (s/up? four-tuple)"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(four_tuple),(4))){
} else {
throw (new Error("Assert failed: (= (count four-tuple) 4)"));
}

return emmy.calculus.frame.claim(cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(four_tuple,cljs.core.assoc,new cljs.core.Keyword("emmy.sr.frames","SR-coordinates?","emmy.sr.frames/SR-coordinates?",-568664156),true),frame);
});
emmy.sr.frames.SR_coordinates_QMARK_ = (function emmy$sr$frames$SR_coordinates_QMARK_(coords){
return new cljs.core.Keyword("emmy.sr.frames","SR-coordinates?","emmy.sr.frames/SR-coordinates?",-568664156).cljs$core$IFn$_invoke$arity$2(cljs.core.meta(coords),false);
});
emmy.sr.frames.SR_name = (function emmy$sr$frames$SR_name(coords){
return emmy.calculus.frame.frame_name(emmy.calculus.frame.frame_owner(coords));
});
emmy.sr.frames.coordinates__GT_event = (function emmy$sr$frames$coordinates__GT_event(ancestor_frame,_,p__59683){
var map__59684 = p__59683;
var map__59684__$1 = cljs.core.__destructure_map(map__59684);
var boost_direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59684__$1,new cljs.core.Keyword(null,"boost-direction","boost-direction",-1975902118));
var vc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59684__$1,new cljs.core.Keyword(null,"vc","vc",194349650));
var origin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59684__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.calculus.frame.frame_owner(origin),ancestor_frame)){
} else {
throw (new Error("Assert failed: (= (cf/frame-owner origin) ancestor-frame)"));
}

return (function emmy$sr$frames$coordinates__GT_event_$_c__GT_e(coords){
if(cljs.core.truth_(emmy.sr.frames.SR_coordinates_QMARK_(coords))){
} else {
throw (new Error("Assert failed: (SR-coordinates? coords)"));
}

return emmy.calculus.manifold.point(ancestor_frame)(emmy.sr.frames.make_SR_coordinates(ancestor_frame,emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.sr.boost.general_boost2(boost_direction,vc)(coords),origin)));
});
});
emmy.sr.frames.event__GT_coordinates = (function emmy$sr$frames$event__GT_coordinates(ancestor_frame,this_frame,p__59685){
var map__59686 = p__59685;
var map__59686__$1 = cljs.core.__destructure_map(map__59686);
var boost_direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59686__$1,new cljs.core.Keyword(null,"boost-direction","boost-direction",-1975902118));
var vc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59686__$1,new cljs.core.Keyword(null,"vc","vc",194349650));
var origin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59686__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.calculus.frame.frame_owner(origin),ancestor_frame)){
} else {
throw (new Error("Assert failed: (= (cf/frame-owner origin) ancestor-frame)"));
}

return (function emmy$sr$frames$event__GT_coordinates_$_e__GT_c(event){
if(cljs.core.truth_(emmy.calculus.frame.event_QMARK_(event))){
} else {
throw (new Error("Assert failed: (cf/event? event)"));
}

var coords = emmy.sr.boost.general_boost2(emmy.generic._.cljs$core$IFn$_invoke$arity$1(boost_direction),vc)(emmy.generic._.cljs$core$IFn$_invoke$arity$2(emmy.calculus.manifold.chart(ancestor_frame)(event),origin));
return emmy.sr.frames.make_SR_coordinates(this_frame,coords);
});
});
var make_59688 = emmy.calculus.frame.frame_maker(emmy.sr.frames.coordinates__GT_event,emmy.sr.frames.event__GT_coordinates);
emmy.sr.frames.make_SR_frame = (function emmy$sr$frames$make_SR_frame(name,ancestor_frame,boost_direction,v_over_c,origin){
return make_59688(name,ancestor_frame,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"boost-direction","boost-direction",-1975902118),boost_direction,new cljs.core.Keyword(null,"vc","vc",194349650),v_over_c,new cljs.core.Keyword(null,"origin","origin",1037372088),origin], null));
});
emmy.sr.frames.base_frame_point = (function emmy$sr$frames$base_frame_point(_,this_frame,___$1){
return (function (coords){
if(cljs.core.truth_(emmy.sr.frames.SR_coordinates_QMARK_(coords))){
} else {
throw (new Error("Assert failed: (SR-coordinates? coords)"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_frame,emmy.calculus.frame.frame_owner(coords))){
} else {
throw (new Error("Assert failed: (= this-frame (cf/frame-owner coords))"));
}

return emmy.calculus.frame.make_event(coords);
});
});
emmy.sr.frames.base_frame_chart = (function emmy$sr$frames$base_frame_chart(_,this_frame,___$1){
return (function (event){
if(cljs.core.truth_(emmy.calculus.frame.event_QMARK_(event))){
} else {
throw (new Error("Assert failed: (cf/event? event)"));
}

return emmy.sr.frames.make_SR_coordinates(this_frame,event);
});
});
emmy.sr.frames.base_frame_maker = emmy.calculus.frame.frame_maker(emmy.sr.frames.base_frame_point,emmy.sr.frames.base_frame_chart);
emmy.sr.frames.the_ether = emmy.sr.frames.base_frame_maker(new cljs.core.Symbol(null,"the-ether","the-ether",-259961165,null),new cljs.core.Symbol(null,"the-ether","the-ether",-259961165,null));
emmy.sr.frames.boost_direction = (function emmy$sr$frames$boost_direction(frame){
return new cljs.core.Keyword(null,"boost-direction","boost-direction",-1975902118).cljs$core$IFn$_invoke$arity$1(emmy.calculus.frame.params(frame));
});
emmy.sr.frames.v_COLON_c = (function emmy$sr$frames$v_COLON_c(frame){
return new cljs.core.Keyword(null,"vc","vc",194349650).cljs$core$IFn$_invoke$arity$1(emmy.calculus.frame.params(frame));
});
emmy.sr.frames.coordinate_origin = (function emmy$sr$frames$coordinate_origin(frame){
return new cljs.core.Keyword(null,"origin","origin",1037372088).cljs$core$IFn$_invoke$arity$1(emmy.calculus.frame.params(frame));
});
emmy.sr.frames.add_v_COLON_cs = (function emmy$sr$frames$add_v_COLON_cs(v1_COLON_c,v2_COLON_c){
return emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(v1_COLON_c,v2_COLON_c),emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2((1),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(v1_COLON_c,v2_COLON_c)));
});
/**
 * velocities must be in meters/second, since we don't yet have units support.
 */
emmy.sr.frames.add_velocities = (function emmy$sr$frames$add_velocities(v1,v2){
return emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(v1,v2),emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2((1),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(v1,new cljs.core.Symbol(null,"C","C",1466901940,null)),emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(v2,new cljs.core.Symbol(null,"C","C",1466901940,null)))));
});

//# sourceMappingURL=emmy.sr.frames.js.map
