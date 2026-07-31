goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29238 = (function (f,blockable,meta29239){
this.f = f;
this.blockable = blockable;
this.meta29239 = meta29239;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29240,meta29239__$1){
var self__ = this;
var _29240__$1 = this;
return (new cljs.core.async.t_cljs$core$async29238(self__.f,self__.blockable,meta29239__$1));
}));

(cljs.core.async.t_cljs$core$async29238.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29240){
var self__ = this;
var _29240__$1 = this;
return self__.meta29239;
}));

(cljs.core.async.t_cljs$core$async29238.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29238.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29238.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29238.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29238.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29239","meta29239",2042363793,null)], null);
}));

(cljs.core.async.t_cljs$core$async29238.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29238.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29238");

(cljs.core.async.t_cljs$core$async29238.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async29238");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29238.
 */
cljs.core.async.__GT_t_cljs$core$async29238 = (function cljs$core$async$__GT_t_cljs$core$async29238(f,blockable,meta29239){
return (new cljs.core.async.t_cljs$core$async29238(f,blockable,meta29239));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29236 = arguments.length;
switch (G__29236) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async29238(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__29246 = arguments.length;
switch (G__29246) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error((""+"Assert failed: "+"buffer must be supplied when transducer is"+"\n"+"buf-or-n")));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__29249 = arguments.length;
switch (G__29249) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__29253 = arguments.length;
switch (G__29253) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_31361 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31361) : fn1.call(null,val_31361));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31361) : fn1.call(null,val_31361));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__29256 = arguments.length;
switch (G__29256) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5823__auto__)){
var ret = temp__5823__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5823__auto__)){
var retb = temp__5823__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5762__auto___31370 = n;
var x_31371 = (0);
while(true){
if((x_31371 < n__5762__auto___31370)){
(a[x_31371] = x_31371);

var G__31372 = (x_31371 + (1));
x_31371 = G__31372;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29259 = (function (flag,meta29260){
this.flag = flag;
this.meta29260 = meta29260;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29261,meta29260__$1){
var self__ = this;
var _29261__$1 = this;
return (new cljs.core.async.t_cljs$core$async29259(self__.flag,meta29260__$1));
}));

(cljs.core.async.t_cljs$core$async29259.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29261){
var self__ = this;
var _29261__$1 = this;
return self__.meta29260;
}));

(cljs.core.async.t_cljs$core$async29259.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29259.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29259.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29259.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29259.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29260","meta29260",-647621711,null)], null);
}));

(cljs.core.async.t_cljs$core$async29259.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29259.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29259");

(cljs.core.async.t_cljs$core$async29259.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async29259");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29259.
 */
cljs.core.async.__GT_t_cljs$core$async29259 = (function cljs$core$async$__GT_t_cljs$core$async29259(flag,meta29260){
return (new cljs.core.async.t_cljs$core$async29259(flag,meta29260));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async29259(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29264 = (function (flag,cb,meta29265){
this.flag = flag;
this.cb = cb;
this.meta29265 = meta29265;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29266,meta29265__$1){
var self__ = this;
var _29266__$1 = this;
return (new cljs.core.async.t_cljs$core$async29264(self__.flag,self__.cb,meta29265__$1));
}));

(cljs.core.async.t_cljs$core$async29264.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29266){
var self__ = this;
var _29266__$1 = this;
return self__.meta29265;
}));

(cljs.core.async.t_cljs$core$async29264.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29264.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29264.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29264.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29264.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29265","meta29265",1066510009,null)], null);
}));

(cljs.core.async.t_cljs$core$async29264.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29264.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29264");

(cljs.core.async.t_cljs$core$async29264.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async29264");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29264.
 */
cljs.core.async.__GT_t_cljs$core$async29264 = (function cljs$core$async$__GT_t_cljs$core$async29264(flag,cb,meta29265){
return (new cljs.core.async.t_cljs$core$async29264(flag,cb,meta29265));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async29264(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error((""+"Assert failed: "+"alts must have at least one channel operation"+"\n"+"(pos? (count ports))")));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_31374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_31374)){
if((!(((port_31374.cljs$core$IFn$_invoke$arity$1 ? port_31374.cljs$core$IFn$_invoke$arity$1((1)) : port_31374.call(null,(1))) == null)))){
} else {
throw (new Error((""+"Assert failed: "+"can't put nil on channel"+"\n"+"(some? (port 1))")));
}
} else {
}

var G__31375 = (i + (1));
i = G__31375;
continue;
} else {
return null;
}
break;
}
})();
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__29268_SHARP_){
var G__29272 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29268_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29272) : fret.call(null,G__29272));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__29269_SHARP_){
var G__29273 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29269_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29273) : fret.call(null,G__29273));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5162__auto__ = wport;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31379 = (i + (1));
i = G__31379;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5162__auto__ = ret;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5825__auto__ = (function (){var and__5160__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5160__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5160__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var got = temp__5825__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___31380 = arguments.length;
var i__5898__auto___31381 = (0);
while(true){
if((i__5898__auto___31381 < len__5897__auto___31380)){
args__5903__auto__.push((arguments[i__5898__auto___31381]));

var G__31383 = (i__5898__auto___31381 + (1));
i__5898__auto___31381 = G__31383;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29277){
var map__29278 = p__29277;
var map__29278__$1 = cljs.core.__destructure_map(map__29278);
var opts = map__29278__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29275){
var G__29276 = cljs.core.first(seq29275);
var seq29275__$1 = cljs.core.next(seq29275);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29276,seq29275__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__29281 = arguments.length;
switch (G__29281) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29174__auto___31390 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29175__auto__ = (function (){var switch__28263__auto__ = (function (state_29307){
var state_val_29309 = (state_29307[(1)]);
if((state_val_29309 === (7))){
var inst_29303 = (state_29307[(2)]);
var state_29307__$1 = state_29307;
var statearr_29310_31391 = state_29307__$1;
(statearr_29310_31391[(2)] = inst_29303);

(statearr_29310_31391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29309 === (1))){
var state_29307__$1 = state_29307;
var statearr_29311_31392 = state_29307__$1;
(statearr_29311_31392[(2)] = null);

(statearr_29311_31392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29309 === (4))){
var inst_29285 = (state_29307[(7)]);
var inst_29285__$1 = (state_29307[(2)]);
var inst_29287 = (inst_29285__$1 == null);
var state_29307__$1 = (function (){var statearr_29313 = state_29307;
(statearr_29313[(7)] = inst_29285__$1);

return statearr_29313;
})();
if(cljs.core.truth_(inst_29287)){
var statearr_29314_31393 = state_29307__$1;
(statearr_29314_31393[(1)] = (5));

} else {
var statearr_29315_31394 = state_29307__$1;
(statearr_29315_31394[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29309 === (13))){
var state_29307__$1 = state_29307;
var statearr_29316_31395 = state_29307__$1;
(statearr_29316_31395[(2)] = null);

(statearr_29316_31395[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29309 === (6))){
var inst_29285 = (state_29307[(7)]);
var state_29307__$1 = state_29307;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29307__$1,(11),to,inst_29285);
} else {
if((state_val_29309 === (3))){
var inst_29305 = (state_29307[(2)]);
var state_29307__$1 = state_29307;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29307__$1,inst_29305);
} else {
if((state_val_29309 === (12))){
var state_29307__$1 = state_29307;
var statearr_29318_31396 = state_29307__$1;
(statearr_29318_31396[(2)] = null);

(statearr_29318_31396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29309 === (2))){
var state_29307__$1 = state_29307;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29307__$1,(4),from);
} else {
if((state_val_29309 === (11))){
var inst_29296 = (state_29307[(2)]);
var state_29307__$1 = state_29307;
if(cljs.core.truth_(inst_29296)){
var statearr_29320_31397 = state_29307__$1;
(statearr_29320_31397[(1)] = (12));

} else {
var statearr_29321_31398 = state_29307__$1;
(statearr_29321_31398[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29309 === (9))){
var state_29307__$1 = state_29307;
var statearr_29322_31399 = state_29307__$1;
(statearr_29322_31399[(2)] = null);

(statearr_29322_31399[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29309 === (5))){
var state_29307__$1 = state_29307;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29323_31400 = state_29307__$1;
(statearr_29323_31400[(1)] = (8));

} else {
var statearr_29324_31401 = state_29307__$1;
(statearr_29324_31401[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29309 === (14))){
var inst_29301 = (state_29307[(2)]);
var state_29307__$1 = state_29307;
var statearr_29325_31403 = state_29307__$1;
(statearr_29325_31403[(2)] = inst_29301);

(statearr_29325_31403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29309 === (10))){
var inst_29293 = (state_29307[(2)]);
var state_29307__$1 = state_29307;
var statearr_29326_31404 = state_29307__$1;
(statearr_29326_31404[(2)] = inst_29293);

(statearr_29326_31404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29309 === (8))){
var inst_29290 = cljs.core.async.close_BANG_(to);
var state_29307__$1 = state_29307;
var statearr_29327_31405 = state_29307__$1;
(statearr_29327_31405[(2)] = inst_29290);

(statearr_29327_31405[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28264__auto__ = null;
var cljs$core$async$state_machine__28264__auto____0 = (function (){
var statearr_29328 = [null,null,null,null,null,null,null,null];
(statearr_29328[(0)] = cljs$core$async$state_machine__28264__auto__);

(statearr_29328[(1)] = (1));

return statearr_29328;
});
var cljs$core$async$state_machine__28264__auto____1 = (function (state_29307){
while(true){
var ret_value__28265__auto__ = (function (){try{while(true){
var result__28266__auto__ = switch__28263__auto__(state_29307);
if(cljs.core.keyword_identical_QMARK_(result__28266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28266__auto__;
}
break;
}
}catch (e29329){var ex__28267__auto__ = e29329;
var statearr_29330_31406 = state_29307;
(statearr_29330_31406[(2)] = ex__28267__auto__);


if(cljs.core.seq((state_29307[(4)]))){
var statearr_29332_31411 = state_29307;
(statearr_29332_31411[(1)] = cljs.core.first((state_29307[(4)])));

} else {
throw ex__28267__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31413 = state_29307;
state_29307 = G__31413;
continue;
} else {
return ret_value__28265__auto__;
}
break;
}
});
cljs$core$async$state_machine__28264__auto__ = function(state_29307){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28264__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28264__auto____1.call(this,state_29307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28264__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28264__auto____0;
cljs$core$async$state_machine__28264__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28264__auto____1;
return cljs$core$async$state_machine__28264__auto__;
})()
})();
var state__29176__auto__ = (function (){var statearr_29333 = f__29175__auto__();
(statearr_29333[(6)] = c__29174__auto___31390);

return statearr_29333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29176__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__29336){
var vec__29337 = p__29336;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29337,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29337,(1),null);
var job = vec__29337;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29174__auto___31414 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29175__auto__ = (function (){var switch__28263__auto__ = (function (state_29344){
var state_val_29345 = (state_29344[(1)]);
if((state_val_29345 === (1))){
var state_29344__$1 = state_29344;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29344__$1,(2),res,v);
} else {
if((state_val_29345 === (2))){
var inst_29341 = (state_29344[(2)]);
var inst_29342 = cljs.core.async.close_BANG_(res);
var state_29344__$1 = (function (){var statearr_29346 = state_29344;
(statearr_29346[(7)] = inst_29341);

return statearr_29346;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29344__$1,inst_29342);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28264__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28264__auto____0 = (function (){
var statearr_29349 = [null,null,null,null,null,null,null,null];
(statearr_29349[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28264__auto__);

(statearr_29349[(1)] = (1));

return statearr_29349;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28264__auto____1 = (function (state_29344){
while(true){
var ret_value__28265__auto__ = (function (){try{while(true){
var result__28266__auto__ = switch__28263__auto__(state_29344);
if(cljs.core.keyword_identical_QMARK_(result__28266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28266__auto__;
}
break;
}
}catch (e29350){var ex__28267__auto__ = e29350;
var statearr_29351_31415 = state_29344;
(statearr_29351_31415[(2)] = ex__28267__auto__);


if(cljs.core.seq((state_29344[(4)]))){
var statearr_29352_31416 = state_29344;
(statearr_29352_31416[(1)] = cljs.core.first((state_29344[(4)])));

} else {
throw ex__28267__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31417 = state_29344;
state_29344 = G__31417;
continue;
} else {
return ret_value__28265__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28264__auto__ = function(state_29344){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28264__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28264__auto____1.call(this,state_29344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28264__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28264__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28264__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28264__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28264__auto__;
})()
})();
var state__29176__auto__ = (function (){var statearr_29353 = f__29175__auto__();
(statearr_29353[(6)] = c__29174__auto___31414);

return statearr_29353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29176__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__29354){
var vec__29355 = p__29354;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29355,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29355,(1),null);
var job = vec__29355;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5762__auto___31418 = n;
var __31419 = (0);
while(true){
if((__31419 < n__5762__auto___31418)){
var G__29358_31420 = type;
var G__29358_31421__$1 = (((G__29358_31420 instanceof cljs.core.Keyword))?G__29358_31420.fqn:null);
switch (G__29358_31421__$1) {
case "compute":
var c__29174__auto___31423 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31419,c__29174__auto___31423,G__29358_31420,G__29358_31421__$1,n__5762__auto___31418,jobs,results,process__$1,async){
return (function (){
var f__29175__auto__ = (function (){var switch__28263__auto__ = ((function (__31419,c__29174__auto___31423,G__29358_31420,G__29358_31421__$1,n__5762__auto___31418,jobs,results,process__$1,async){
return (function (state_29371){
var state_val_29372 = (state_29371[(1)]);
if((state_val_29372 === (1))){
var state_29371__$1 = state_29371;
var statearr_29373_31424 = state_29371__$1;
(statearr_29373_31424[(2)] = null);

(statearr_29373_31424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29372 === (2))){
var state_29371__$1 = state_29371;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29371__$1,(4),jobs);
} else {
if((state_val_29372 === (3))){
var inst_29369 = (state_29371[(2)]);
var state_29371__$1 = state_29371;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29371__$1,inst_29369);
} else {
if((state_val_29372 === (4))){
var inst_29361 = (state_29371[(2)]);
var inst_29362 = process__$1(inst_29361);
var state_29371__$1 = state_29371;
if(cljs.core.truth_(inst_29362)){
var statearr_29375_31426 = state_29371__$1;
(statearr_29375_31426[(1)] = (5));

} else {
var statearr_29376_31427 = state_29371__$1;
(statearr_29376_31427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29372 === (5))){
var state_29371__$1 = state_29371;
var statearr_29378_31428 = state_29371__$1;
(statearr_29378_31428[(2)] = null);

(statearr_29378_31428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29372 === (6))){
var state_29371__$1 = state_29371;
var statearr_29379_31429 = state_29371__$1;
(statearr_29379_31429[(2)] = null);

(statearr_29379_31429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29372 === (7))){
var inst_29367 = (state_29371[(2)]);
var state_29371__$1 = state_29371;
var statearr_29380_31430 = state_29371__$1;
(statearr_29380_31430[(2)] = inst_29367);

(statearr_29380_31430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__31419,c__29174__auto___31423,G__29358_31420,G__29358_31421__$1,n__5762__auto___31418,jobs,results,process__$1,async))
;
return ((function (__31419,switch__28263__auto__,c__29174__auto___31423,G__29358_31420,G__29358_31421__$1,n__5762__auto___31418,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28264__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28264__auto____0 = (function (){
var statearr_29381 = [null,null,null,null,null,null,null];
(statearr_29381[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28264__auto__);

(statearr_29381[(1)] = (1));

return statearr_29381;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28264__auto____1 = (function (state_29371){
while(true){
var ret_value__28265__auto__ = (function (){try{while(true){
var result__28266__auto__ = switch__28263__auto__(state_29371);
if(cljs.core.keyword_identical_QMARK_(result__28266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28266__auto__;
}
break;
}
}catch (e29382){var ex__28267__auto__ = e29382;
var statearr_29383_31434 = state_29371;
(statearr_29383_31434[(2)] = ex__28267__auto__);


if(cljs.core.seq((state_29371[(4)]))){
var statearr_29384_31435 = state_29371;
(statearr_29384_31435[(1)] = cljs.core.first((state_29371[(4)])));

} else {
throw ex__28267__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31437 = state_29371;
state_29371 = G__31437;
continue;
} else {
return ret_value__28265__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28264__auto__ = function(state_29371){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28264__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28264__auto____1.call(this,state_29371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28264__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28264__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28264__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28264__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28264__auto__;
})()
;})(__31419,switch__28263__auto__,c__29174__auto___31423,G__29358_31420,G__29358_31421__$1,n__5762__auto___31418,jobs,results,process__$1,async))
})();
var state__29176__auto__ = (function (){var statearr_29385 = f__29175__auto__();
(statearr_29385[(6)] = c__29174__auto___31423);

return statearr_29385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29176__auto__);
});})(__31419,c__29174__auto___31423,G__29358_31420,G__29358_31421__$1,n__5762__auto___31418,jobs,results,process__$1,async))
);


break;
case "async":
var c__29174__auto___31439 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31419,c__29174__auto___31439,G__29358_31420,G__29358_31421__$1,n__5762__auto___31418,jobs,results,process__$1,async){
return (function (){
var f__29175__auto__ = (function (){var switch__28263__auto__ = ((function (__31419,c__29174__auto___31439,G__29358_31420,G__29358_31421__$1,n__5762__auto___31418,jobs,results,process__$1,async){
return (function (state_29398){
var state_val_29399 = (state_29398[(1)]);
if((state_val_29399 === (1))){
var state_29398__$1 = state_29398;
var statearr_29400_31442 = state_29398__$1;
(statearr_29400_31442[(2)] = null);

(statearr_29400_31442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29399 === (2))){
var state_29398__$1 = state_29398;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29398__$1,(4),jobs);
} else {
if((state_val_29399 === (3))){
var inst_29396 = (state_29398[(2)]);
var state_29398__$1 = state_29398;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29398__$1,inst_29396);
} else {
if((state_val_29399 === (4))){
var inst_29388 = (state_29398[(2)]);
var inst_29389 = async(inst_29388);
var state_29398__$1 = state_29398;
if(cljs.core.truth_(inst_29389)){
var statearr_29401_31444 = state_29398__$1;
(statearr_29401_31444[(1)] = (5));

} else {
var statearr_29402_31445 = state_29398__$1;
(statearr_29402_31445[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29399 === (5))){
var state_29398__$1 = state_29398;
var statearr_29403_31446 = state_29398__$1;
(statearr_29403_31446[(2)] = null);

(statearr_29403_31446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29399 === (6))){
var state_29398__$1 = state_29398;
var statearr_29404_31447 = state_29398__$1;
(statearr_29404_31447[(2)] = null);

(statearr_29404_31447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29399 === (7))){
var inst_29394 = (state_29398[(2)]);
var state_29398__$1 = state_29398;
var statearr_29405_31449 = state_29398__$1;
(statearr_29405_31449[(2)] = inst_29394);

(statearr_29405_31449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__31419,c__29174__auto___31439,G__29358_31420,G__29358_31421__$1,n__5762__auto___31418,jobs,results,process__$1,async))
;
return ((function (__31419,switch__28263__auto__,c__29174__auto___31439,G__29358_31420,G__29358_31421__$1,n__5762__auto___31418,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28264__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28264__auto____0 = (function (){
var statearr_29406 = [null,null,null,null,null,null,null];
(statearr_29406[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28264__auto__);

(statearr_29406[(1)] = (1));

return statearr_29406;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28264__auto____1 = (function (state_29398){
while(true){
var ret_value__28265__auto__ = (function (){try{while(true){
var result__28266__auto__ = switch__28263__auto__(state_29398);
if(cljs.core.keyword_identical_QMARK_(result__28266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28266__auto__;
}
break;
}
}catch (e29407){var ex__28267__auto__ = e29407;
var statearr_29408_31451 = state_29398;
(statearr_29408_31451[(2)] = ex__28267__auto__);


if(cljs.core.seq((state_29398[(4)]))){
var statearr_29409_31452 = state_29398;
(statearr_29409_31452[(1)] = cljs.core.first((state_29398[(4)])));

} else {
throw ex__28267__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31453 = state_29398;
state_29398 = G__31453;
continue;
} else {
return ret_value__28265__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28264__auto__ = function(state_29398){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28264__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28264__auto____1.call(this,state_29398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28264__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28264__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28264__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28264__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28264__auto__;
})()
;})(__31419,switch__28263__auto__,c__29174__auto___31439,G__29358_31420,G__29358_31421__$1,n__5762__auto___31418,jobs,results,process__$1,async))
})();
var state__29176__auto__ = (function (){var statearr_29413 = f__29175__auto__();
(statearr_29413[(6)] = c__29174__auto___31439);

return statearr_29413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29176__auto__);
});})(__31419,c__29174__auto___31439,G__29358_31420,G__29358_31421__$1,n__5762__auto___31418,jobs,results,process__$1,async))
);


break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29358_31421__$1))));

}

var G__31458 = (__31419 + (1));
__31419 = G__31458;
continue;
} else {
}
break;
}

var c__29174__auto___31459 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29175__auto__ = (function (){var switch__28263__auto__ = (function (state_29441){
var state_val_29442 = (state_29441[(1)]);
if((state_val_29442 === (7))){
var inst_29437 = (state_29441[(2)]);
var state_29441__$1 = state_29441;
var statearr_29443_31460 = state_29441__$1;
(statearr_29443_31460[(2)] = inst_29437);

(statearr_29443_31460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (1))){
var state_29441__$1 = state_29441;
var statearr_29444_31461 = state_29441__$1;
(statearr_29444_31461[(2)] = null);

(statearr_29444_31461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (4))){
var inst_29416 = (state_29441[(7)]);
var inst_29416__$1 = (state_29441[(2)]);
var inst_29419 = (inst_29416__$1 == null);
var state_29441__$1 = (function (){var statearr_29446 = state_29441;
(statearr_29446[(7)] = inst_29416__$1);

return statearr_29446;
})();
if(cljs.core.truth_(inst_29419)){
var statearr_29447_31462 = state_29441__$1;
(statearr_29447_31462[(1)] = (5));

} else {
var statearr_29449_31465 = state_29441__$1;
(statearr_29449_31465[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (6))){
var inst_29416 = (state_29441[(7)]);
var inst_29424 = (state_29441[(8)]);
var inst_29424__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_29425 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29427 = [inst_29416,inst_29424__$1];
var inst_29430 = (new cljs.core.PersistentVector(null,2,(5),inst_29425,inst_29427,null));
var state_29441__$1 = (function (){var statearr_29452 = state_29441;
(statearr_29452[(8)] = inst_29424__$1);

return statearr_29452;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29441__$1,(8),jobs,inst_29430);
} else {
if((state_val_29442 === (3))){
var inst_29439 = (state_29441[(2)]);
var state_29441__$1 = state_29441;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29441__$1,inst_29439);
} else {
if((state_val_29442 === (2))){
var state_29441__$1 = state_29441;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29441__$1,(4),from);
} else {
if((state_val_29442 === (9))){
var inst_29434 = (state_29441[(2)]);
var state_29441__$1 = (function (){var statearr_29457 = state_29441;
(statearr_29457[(9)] = inst_29434);

return statearr_29457;
})();
var statearr_29458_31468 = state_29441__$1;
(statearr_29458_31468[(2)] = null);

(statearr_29458_31468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (5))){
var inst_29421 = cljs.core.async.close_BANG_(jobs);
var state_29441__$1 = state_29441;
var statearr_29460_31469 = state_29441__$1;
(statearr_29460_31469[(2)] = inst_29421);

(statearr_29460_31469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (8))){
var inst_29424 = (state_29441[(8)]);
var inst_29432 = (state_29441[(2)]);
var state_29441__$1 = (function (){var statearr_29464 = state_29441;
(statearr_29464[(10)] = inst_29432);

return statearr_29464;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29441__$1,(9),results,inst_29424);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28264__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28264__auto____0 = (function (){
var statearr_29466 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29466[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28264__auto__);

(statearr_29466[(1)] = (1));

return statearr_29466;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28264__auto____1 = (function (state_29441){
while(true){
var ret_value__28265__auto__ = (function (){try{while(true){
var result__28266__auto__ = switch__28263__auto__(state_29441);
if(cljs.core.keyword_identical_QMARK_(result__28266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28266__auto__;
}
break;
}
}catch (e29467){var ex__28267__auto__ = e29467;
var statearr_29469_31471 = state_29441;
(statearr_29469_31471[(2)] = ex__28267__auto__);


if(cljs.core.seq((state_29441[(4)]))){
var statearr_29472_31472 = state_29441;
(statearr_29472_31472[(1)] = cljs.core.first((state_29441[(4)])));

} else {
throw ex__28267__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31473 = state_29441;
state_29441 = G__31473;
continue;
} else {
return ret_value__28265__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28264__auto__ = function(state_29441){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28264__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28264__auto____1.call(this,state_29441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28264__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28264__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28264__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28264__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28264__auto__;
})()
})();
var state__29176__auto__ = (function (){var statearr_29474 = f__29175__auto__();
(statearr_29474[(6)] = c__29174__auto___31459);

return statearr_29474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29176__auto__);
}));


var c__29174__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29175__auto__ = (function (){var switch__28263__auto__ = (function (state_29516){
var state_val_29517 = (state_29516[(1)]);
if((state_val_29517 === (7))){
var inst_29512 = (state_29516[(2)]);
var state_29516__$1 = state_29516;
var statearr_29522_31474 = state_29516__$1;
(statearr_29522_31474[(2)] = inst_29512);

(statearr_29522_31474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (20))){
var state_29516__$1 = state_29516;
var statearr_29523_31476 = state_29516__$1;
(statearr_29523_31476[(2)] = null);

(statearr_29523_31476[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (1))){
var state_29516__$1 = state_29516;
var statearr_29527_31477 = state_29516__$1;
(statearr_29527_31477[(2)] = null);

(statearr_29527_31477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (4))){
var inst_29480 = (state_29516[(7)]);
var inst_29480__$1 = (state_29516[(2)]);
var inst_29481 = (inst_29480__$1 == null);
var state_29516__$1 = (function (){var statearr_29528 = state_29516;
(statearr_29528[(7)] = inst_29480__$1);

return statearr_29528;
})();
if(cljs.core.truth_(inst_29481)){
var statearr_29530_31482 = state_29516__$1;
(statearr_29530_31482[(1)] = (5));

} else {
var statearr_29531_31484 = state_29516__$1;
(statearr_29531_31484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (15))){
var inst_29493 = (state_29516[(8)]);
var state_29516__$1 = state_29516;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29516__$1,(18),to,inst_29493);
} else {
if((state_val_29517 === (21))){
var inst_29507 = (state_29516[(2)]);
var state_29516__$1 = state_29516;
var statearr_29535_31489 = state_29516__$1;
(statearr_29535_31489[(2)] = inst_29507);

(statearr_29535_31489[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (13))){
var inst_29509 = (state_29516[(2)]);
var state_29516__$1 = (function (){var statearr_29536 = state_29516;
(statearr_29536[(9)] = inst_29509);

return statearr_29536;
})();
var statearr_29538_31490 = state_29516__$1;
(statearr_29538_31490[(2)] = null);

(statearr_29538_31490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (6))){
var inst_29480 = (state_29516[(7)]);
var state_29516__$1 = state_29516;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29516__$1,(11),inst_29480);
} else {
if((state_val_29517 === (17))){
var inst_29502 = (state_29516[(2)]);
var state_29516__$1 = state_29516;
if(cljs.core.truth_(inst_29502)){
var statearr_29541_31491 = state_29516__$1;
(statearr_29541_31491[(1)] = (19));

} else {
var statearr_29543_31492 = state_29516__$1;
(statearr_29543_31492[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (3))){
var inst_29514 = (state_29516[(2)]);
var state_29516__$1 = state_29516;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29516__$1,inst_29514);
} else {
if((state_val_29517 === (12))){
var inst_29490 = (state_29516[(10)]);
var state_29516__$1 = state_29516;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29516__$1,(14),inst_29490);
} else {
if((state_val_29517 === (2))){
var state_29516__$1 = state_29516;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29516__$1,(4),results);
} else {
if((state_val_29517 === (19))){
var state_29516__$1 = state_29516;
var statearr_29547_31500 = state_29516__$1;
(statearr_29547_31500[(2)] = null);

(statearr_29547_31500[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (11))){
var inst_29490 = (state_29516[(2)]);
var state_29516__$1 = (function (){var statearr_29550 = state_29516;
(statearr_29550[(10)] = inst_29490);

return statearr_29550;
})();
var statearr_29552_31501 = state_29516__$1;
(statearr_29552_31501[(2)] = null);

(statearr_29552_31501[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (9))){
var state_29516__$1 = state_29516;
var statearr_29553_31506 = state_29516__$1;
(statearr_29553_31506[(2)] = null);

(statearr_29553_31506[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (5))){
var state_29516__$1 = state_29516;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29554_31507 = state_29516__$1;
(statearr_29554_31507[(1)] = (8));

} else {
var statearr_29555_31508 = state_29516__$1;
(statearr_29555_31508[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (14))){
var inst_29493 = (state_29516[(8)]);
var inst_29496 = (state_29516[(11)]);
var inst_29493__$1 = (state_29516[(2)]);
var inst_29495 = (inst_29493__$1 == null);
var inst_29496__$1 = cljs.core.not(inst_29495);
var state_29516__$1 = (function (){var statearr_29559 = state_29516;
(statearr_29559[(8)] = inst_29493__$1);

(statearr_29559[(11)] = inst_29496__$1);

return statearr_29559;
})();
if(inst_29496__$1){
var statearr_29560_31509 = state_29516__$1;
(statearr_29560_31509[(1)] = (15));

} else {
var statearr_29561_31510 = state_29516__$1;
(statearr_29561_31510[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (16))){
var inst_29496 = (state_29516[(11)]);
var state_29516__$1 = state_29516;
var statearr_29563_31511 = state_29516__$1;
(statearr_29563_31511[(2)] = inst_29496);

(statearr_29563_31511[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (10))){
var inst_29487 = (state_29516[(2)]);
var state_29516__$1 = state_29516;
var statearr_29564_31515 = state_29516__$1;
(statearr_29564_31515[(2)] = inst_29487);

(statearr_29564_31515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (18))){
var inst_29499 = (state_29516[(2)]);
var state_29516__$1 = state_29516;
var statearr_29565_31517 = state_29516__$1;
(statearr_29565_31517[(2)] = inst_29499);

(statearr_29565_31517[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (8))){
var inst_29484 = cljs.core.async.close_BANG_(to);
var state_29516__$1 = state_29516;
var statearr_29570_31520 = state_29516__$1;
(statearr_29570_31520[(2)] = inst_29484);

(statearr_29570_31520[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28264__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28264__auto____0 = (function (){
var statearr_29575 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29575[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28264__auto__);

(statearr_29575[(1)] = (1));

return statearr_29575;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28264__auto____1 = (function (state_29516){
while(true){
var ret_value__28265__auto__ = (function (){try{while(true){
var result__28266__auto__ = switch__28263__auto__(state_29516);
if(cljs.core.keyword_identical_QMARK_(result__28266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28266__auto__;
}
break;
}
}catch (e29576){var ex__28267__auto__ = e29576;
var statearr_29577_31521 = state_29516;
(statearr_29577_31521[(2)] = ex__28267__auto__);


if(cljs.core.seq((state_29516[(4)]))){
var statearr_29580_31522 = state_29516;
(statearr_29580_31522[(1)] = cljs.core.first((state_29516[(4)])));

} else {
throw ex__28267__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31523 = state_29516;
state_29516 = G__31523;
continue;
} else {
return ret_value__28265__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28264__auto__ = function(state_29516){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28264__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28264__auto____1.call(this,state_29516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28264__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28264__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28264__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28264__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28264__auto__;
})()
})();
var state__29176__auto__ = (function (){var statearr_29584 = f__29175__auto__();
(statearr_29584[(6)] = c__29174__auto__);

return statearr_29584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29176__auto__);
}));

return c__29174__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__29591 = arguments.length;
switch (G__29591) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__29604 = arguments.length;
switch (G__29604) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__29623 = arguments.length;
switch (G__29623) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__29174__auto___31537 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29175__auto__ = (function (){var switch__28263__auto__ = (function (state_29656){
var state_val_29657 = (state_29656[(1)]);
if((state_val_29657 === (7))){
var inst_29652 = (state_29656[(2)]);
var state_29656__$1 = state_29656;
var statearr_29660_31539 = state_29656__$1;
(statearr_29660_31539[(2)] = inst_29652);

(statearr_29660_31539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (1))){
var state_29656__$1 = state_29656;
var statearr_29661_31540 = state_29656__$1;
(statearr_29661_31540[(2)] = null);

(statearr_29661_31540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (4))){
var inst_29632 = (state_29656[(7)]);
var inst_29632__$1 = (state_29656[(2)]);
var inst_29633 = (inst_29632__$1 == null);
var state_29656__$1 = (function (){var statearr_29662 = state_29656;
(statearr_29662[(7)] = inst_29632__$1);

return statearr_29662;
})();
if(cljs.core.truth_(inst_29633)){
var statearr_29664_31541 = state_29656__$1;
(statearr_29664_31541[(1)] = (5));

} else {
var statearr_29665_31542 = state_29656__$1;
(statearr_29665_31542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (13))){
var state_29656__$1 = state_29656;
var statearr_29666_31543 = state_29656__$1;
(statearr_29666_31543[(2)] = null);

(statearr_29666_31543[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (6))){
var inst_29632 = (state_29656[(7)]);
var inst_29639 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_29632) : p.call(null,inst_29632));
var state_29656__$1 = state_29656;
if(cljs.core.truth_(inst_29639)){
var statearr_29670_31544 = state_29656__$1;
(statearr_29670_31544[(1)] = (9));

} else {
var statearr_29671_31545 = state_29656__$1;
(statearr_29671_31545[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (3))){
var inst_29654 = (state_29656[(2)]);
var state_29656__$1 = state_29656;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29656__$1,inst_29654);
} else {
if((state_val_29657 === (12))){
var state_29656__$1 = state_29656;
var statearr_29673_31546 = state_29656__$1;
(statearr_29673_31546[(2)] = null);

(statearr_29673_31546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (2))){
var state_29656__$1 = state_29656;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29656__$1,(4),ch);
} else {
if((state_val_29657 === (11))){
var inst_29632 = (state_29656[(7)]);
var inst_29643 = (state_29656[(2)]);
var state_29656__$1 = state_29656;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29656__$1,(8),inst_29643,inst_29632);
} else {
if((state_val_29657 === (9))){
var state_29656__$1 = state_29656;
var statearr_29677_31547 = state_29656__$1;
(statearr_29677_31547[(2)] = tc);

(statearr_29677_31547[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (5))){
var inst_29635 = cljs.core.async.close_BANG_(tc);
var inst_29636 = cljs.core.async.close_BANG_(fc);
var state_29656__$1 = (function (){var statearr_29679 = state_29656;
(statearr_29679[(8)] = inst_29635);

return statearr_29679;
})();
var statearr_29680_31548 = state_29656__$1;
(statearr_29680_31548[(2)] = inst_29636);

(statearr_29680_31548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (14))){
var inst_29650 = (state_29656[(2)]);
var state_29656__$1 = state_29656;
var statearr_29684_31549 = state_29656__$1;
(statearr_29684_31549[(2)] = inst_29650);

(statearr_29684_31549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (10))){
var state_29656__$1 = state_29656;
var statearr_29685_31550 = state_29656__$1;
(statearr_29685_31550[(2)] = fc);

(statearr_29685_31550[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (8))){
var inst_29645 = (state_29656[(2)]);
var state_29656__$1 = state_29656;
if(cljs.core.truth_(inst_29645)){
var statearr_29687_31551 = state_29656__$1;
(statearr_29687_31551[(1)] = (12));

} else {
var statearr_29688_31552 = state_29656__$1;
(statearr_29688_31552[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28264__auto__ = null;
var cljs$core$async$state_machine__28264__auto____0 = (function (){
var statearr_29692 = [null,null,null,null,null,null,null,null,null];
(statearr_29692[(0)] = cljs$core$async$state_machine__28264__auto__);

(statearr_29692[(1)] = (1));

return statearr_29692;
});
var cljs$core$async$state_machine__28264__auto____1 = (function (state_29656){
while(true){
var ret_value__28265__auto__ = (function (){try{while(true){
var result__28266__auto__ = switch__28263__auto__(state_29656);
if(cljs.core.keyword_identical_QMARK_(result__28266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28266__auto__;
}
break;
}
}catch (e29694){var ex__28267__auto__ = e29694;
var statearr_29695_31553 = state_29656;
(statearr_29695_31553[(2)] = ex__28267__auto__);


if(cljs.core.seq((state_29656[(4)]))){
var statearr_29696_31554 = state_29656;
(statearr_29696_31554[(1)] = cljs.core.first((state_29656[(4)])));

} else {
throw ex__28267__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31559 = state_29656;
state_29656 = G__31559;
continue;
} else {
return ret_value__28265__auto__;
}
break;
}
});
cljs$core$async$state_machine__28264__auto__ = function(state_29656){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28264__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28264__auto____1.call(this,state_29656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28264__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28264__auto____0;
cljs$core$async$state_machine__28264__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28264__auto____1;
return cljs$core$async$state_machine__28264__auto__;
})()
})();
var state__29176__auto__ = (function (){var statearr_29700 = f__29175__auto__();
(statearr_29700[(6)] = c__29174__auto___31537);

return statearr_29700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29176__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29174__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29175__auto__ = (function (){var switch__28263__auto__ = (function (state_29730){
var state_val_29731 = (state_29730[(1)]);
if((state_val_29731 === (7))){
var inst_29726 = (state_29730[(2)]);
var state_29730__$1 = state_29730;
var statearr_29738_31577 = state_29730__$1;
(statearr_29738_31577[(2)] = inst_29726);

(statearr_29738_31577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29731 === (1))){
var inst_29705 = init;
var inst_29707 = inst_29705;
var state_29730__$1 = (function (){var statearr_29739 = state_29730;
(statearr_29739[(7)] = inst_29707);

return statearr_29739;
})();
var statearr_29741_31578 = state_29730__$1;
(statearr_29741_31578[(2)] = null);

(statearr_29741_31578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29731 === (4))){
var inst_29710 = (state_29730[(8)]);
var inst_29710__$1 = (state_29730[(2)]);
var inst_29711 = (inst_29710__$1 == null);
var state_29730__$1 = (function (){var statearr_29742 = state_29730;
(statearr_29742[(8)] = inst_29710__$1);

return statearr_29742;
})();
if(cljs.core.truth_(inst_29711)){
var statearr_29745_31579 = state_29730__$1;
(statearr_29745_31579[(1)] = (5));

} else {
var statearr_29747_31580 = state_29730__$1;
(statearr_29747_31580[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29731 === (6))){
var inst_29707 = (state_29730[(7)]);
var inst_29710 = (state_29730[(8)]);
var inst_29714 = (state_29730[(9)]);
var inst_29714__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_29707,inst_29710) : f.call(null,inst_29707,inst_29710));
var inst_29716 = cljs.core.reduced_QMARK_(inst_29714__$1);
var state_29730__$1 = (function (){var statearr_29749 = state_29730;
(statearr_29749[(9)] = inst_29714__$1);

return statearr_29749;
})();
if(inst_29716){
var statearr_29750_31588 = state_29730__$1;
(statearr_29750_31588[(1)] = (8));

} else {
var statearr_29751_31589 = state_29730__$1;
(statearr_29751_31589[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29731 === (3))){
var inst_29728 = (state_29730[(2)]);
var state_29730__$1 = state_29730;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29730__$1,inst_29728);
} else {
if((state_val_29731 === (2))){
var state_29730__$1 = state_29730;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29730__$1,(4),ch);
} else {
if((state_val_29731 === (9))){
var inst_29714 = (state_29730[(9)]);
var inst_29707 = inst_29714;
var state_29730__$1 = (function (){var statearr_29755 = state_29730;
(statearr_29755[(7)] = inst_29707);

return statearr_29755;
})();
var statearr_29757_31593 = state_29730__$1;
(statearr_29757_31593[(2)] = null);

(statearr_29757_31593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29731 === (5))){
var inst_29707 = (state_29730[(7)]);
var state_29730__$1 = state_29730;
var statearr_29758_31597 = state_29730__$1;
(statearr_29758_31597[(2)] = inst_29707);

(statearr_29758_31597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29731 === (10))){
var inst_29724 = (state_29730[(2)]);
var state_29730__$1 = state_29730;
var statearr_29762_31605 = state_29730__$1;
(statearr_29762_31605[(2)] = inst_29724);

(statearr_29762_31605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29731 === (8))){
var inst_29714 = (state_29730[(9)]);
var inst_29720 = cljs.core.deref(inst_29714);
var state_29730__$1 = state_29730;
var statearr_29763_31607 = state_29730__$1;
(statearr_29763_31607[(2)] = inst_29720);

(statearr_29763_31607[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__28264__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28264__auto____0 = (function (){
var statearr_29765 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29765[(0)] = cljs$core$async$reduce_$_state_machine__28264__auto__);

(statearr_29765[(1)] = (1));

return statearr_29765;
});
var cljs$core$async$reduce_$_state_machine__28264__auto____1 = (function (state_29730){
while(true){
var ret_value__28265__auto__ = (function (){try{while(true){
var result__28266__auto__ = switch__28263__auto__(state_29730);
if(cljs.core.keyword_identical_QMARK_(result__28266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28266__auto__;
}
break;
}
}catch (e29769){var ex__28267__auto__ = e29769;
var statearr_29770_31620 = state_29730;
(statearr_29770_31620[(2)] = ex__28267__auto__);


if(cljs.core.seq((state_29730[(4)]))){
var statearr_29771_31626 = state_29730;
(statearr_29771_31626[(1)] = cljs.core.first((state_29730[(4)])));

} else {
throw ex__28267__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31636 = state_29730;
state_29730 = G__31636;
continue;
} else {
return ret_value__28265__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28264__auto__ = function(state_29730){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28264__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28264__auto____1.call(this,state_29730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28264__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28264__auto____0;
cljs$core$async$reduce_$_state_machine__28264__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28264__auto____1;
return cljs$core$async$reduce_$_state_machine__28264__auto__;
})()
})();
var state__29176__auto__ = (function (){var statearr_29774 = f__29175__auto__();
(statearr_29774[(6)] = c__29174__auto__);

return statearr_29774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29176__auto__);
}));

return c__29174__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29174__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29175__auto__ = (function (){var switch__28263__auto__ = (function (state_29786){
var state_val_29787 = (state_29786[(1)]);
if((state_val_29787 === (1))){
var inst_29780 = cljs.core.async.reduce(f__$1,init,ch);
var state_29786__$1 = state_29786;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29786__$1,(2),inst_29780);
} else {
if((state_val_29787 === (2))){
var inst_29782 = (state_29786[(2)]);
var inst_29783 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_29782) : f__$1.call(null,inst_29782));
var state_29786__$1 = state_29786;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29786__$1,inst_29783);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__28264__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28264__auto____0 = (function (){
var statearr_29792 = [null,null,null,null,null,null,null];
(statearr_29792[(0)] = cljs$core$async$transduce_$_state_machine__28264__auto__);

(statearr_29792[(1)] = (1));

return statearr_29792;
});
var cljs$core$async$transduce_$_state_machine__28264__auto____1 = (function (state_29786){
while(true){
var ret_value__28265__auto__ = (function (){try{while(true){
var result__28266__auto__ = switch__28263__auto__(state_29786);
if(cljs.core.keyword_identical_QMARK_(result__28266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28266__auto__;
}
break;
}
}catch (e29794){var ex__28267__auto__ = e29794;
var statearr_29795_31651 = state_29786;
(statearr_29795_31651[(2)] = ex__28267__auto__);


if(cljs.core.seq((state_29786[(4)]))){
var statearr_29796_31652 = state_29786;
(statearr_29796_31652[(1)] = cljs.core.first((state_29786[(4)])));

} else {
throw ex__28267__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31654 = state_29786;
state_29786 = G__31654;
continue;
} else {
return ret_value__28265__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28264__auto__ = function(state_29786){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28264__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28264__auto____1.call(this,state_29786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28264__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28264__auto____0;
cljs$core$async$transduce_$_state_machine__28264__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28264__auto____1;
return cljs$core$async$transduce_$_state_machine__28264__auto__;
})()
})();
var state__29176__auto__ = (function (){var statearr_29800 = f__29175__auto__();
(statearr_29800[(6)] = c__29174__auto__);

return statearr_29800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29176__auto__);
}));

return c__29174__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__29806 = arguments.length;
switch (G__29806) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29174__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29175__auto__ = (function (){var switch__28263__auto__ = (function (state_29840){
var state_val_29841 = (state_29840[(1)]);
if((state_val_29841 === (7))){
var inst_29821 = (state_29840[(2)]);
var state_29840__$1 = state_29840;
var statearr_29842_31677 = state_29840__$1;
(statearr_29842_31677[(2)] = inst_29821);

(statearr_29842_31677[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29841 === (1))){
var inst_29811 = cljs.core.seq(coll);
var inst_29812 = inst_29811;
var state_29840__$1 = (function (){var statearr_29843 = state_29840;
(statearr_29843[(7)] = inst_29812);

return statearr_29843;
})();
var statearr_29844_31684 = state_29840__$1;
(statearr_29844_31684[(2)] = null);

(statearr_29844_31684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29841 === (4))){
var inst_29812 = (state_29840[(7)]);
var inst_29819 = cljs.core.first(inst_29812);
var state_29840__$1 = state_29840;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29840__$1,(7),ch,inst_29819);
} else {
if((state_val_29841 === (13))){
var inst_29834 = (state_29840[(2)]);
var state_29840__$1 = state_29840;
var statearr_29845_31685 = state_29840__$1;
(statearr_29845_31685[(2)] = inst_29834);

(statearr_29845_31685[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29841 === (6))){
var inst_29825 = (state_29840[(2)]);
var state_29840__$1 = state_29840;
if(cljs.core.truth_(inst_29825)){
var statearr_29846_31693 = state_29840__$1;
(statearr_29846_31693[(1)] = (8));

} else {
var statearr_29849_31694 = state_29840__$1;
(statearr_29849_31694[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29841 === (3))){
var inst_29838 = (state_29840[(2)]);
var state_29840__$1 = state_29840;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29840__$1,inst_29838);
} else {
if((state_val_29841 === (12))){
var state_29840__$1 = state_29840;
var statearr_29852_31696 = state_29840__$1;
(statearr_29852_31696[(2)] = null);

(statearr_29852_31696[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29841 === (2))){
var inst_29812 = (state_29840[(7)]);
var state_29840__$1 = state_29840;
if(cljs.core.truth_(inst_29812)){
var statearr_29853_31697 = state_29840__$1;
(statearr_29853_31697[(1)] = (4));

} else {
var statearr_29854_31698 = state_29840__$1;
(statearr_29854_31698[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29841 === (11))){
var inst_29831 = cljs.core.async.close_BANG_(ch);
var state_29840__$1 = state_29840;
var statearr_29855_31699 = state_29840__$1;
(statearr_29855_31699[(2)] = inst_29831);

(statearr_29855_31699[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29841 === (9))){
var state_29840__$1 = state_29840;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29860_31700 = state_29840__$1;
(statearr_29860_31700[(1)] = (11));

} else {
var statearr_29861_31701 = state_29840__$1;
(statearr_29861_31701[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29841 === (5))){
var inst_29812 = (state_29840[(7)]);
var state_29840__$1 = state_29840;
var statearr_29863_31705 = state_29840__$1;
(statearr_29863_31705[(2)] = inst_29812);

(statearr_29863_31705[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29841 === (10))){
var inst_29836 = (state_29840[(2)]);
var state_29840__$1 = state_29840;
var statearr_29864_31706 = state_29840__$1;
(statearr_29864_31706[(2)] = inst_29836);

(statearr_29864_31706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29841 === (8))){
var inst_29812 = (state_29840[(7)]);
var inst_29827 = cljs.core.next(inst_29812);
var inst_29812__$1 = inst_29827;
var state_29840__$1 = (function (){var statearr_29865 = state_29840;
(statearr_29865[(7)] = inst_29812__$1);

return statearr_29865;
})();
var statearr_29866_31708 = state_29840__$1;
(statearr_29866_31708[(2)] = null);

(statearr_29866_31708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28264__auto__ = null;
var cljs$core$async$state_machine__28264__auto____0 = (function (){
var statearr_29867 = [null,null,null,null,null,null,null,null];
(statearr_29867[(0)] = cljs$core$async$state_machine__28264__auto__);

(statearr_29867[(1)] = (1));

return statearr_29867;
});
var cljs$core$async$state_machine__28264__auto____1 = (function (state_29840){
while(true){
var ret_value__28265__auto__ = (function (){try{while(true){
var result__28266__auto__ = switch__28263__auto__(state_29840);
if(cljs.core.keyword_identical_QMARK_(result__28266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28266__auto__;
}
break;
}
}catch (e29868){var ex__28267__auto__ = e29868;
var statearr_29873_31710 = state_29840;
(statearr_29873_31710[(2)] = ex__28267__auto__);


if(cljs.core.seq((state_29840[(4)]))){
var statearr_29874_31711 = state_29840;
(statearr_29874_31711[(1)] = cljs.core.first((state_29840[(4)])));

} else {
throw ex__28267__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31712 = state_29840;
state_29840 = G__31712;
continue;
} else {
return ret_value__28265__auto__;
}
break;
}
});
cljs$core$async$state_machine__28264__auto__ = function(state_29840){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28264__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28264__auto____1.call(this,state_29840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28264__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28264__auto____0;
cljs$core$async$state_machine__28264__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28264__auto____1;
return cljs$core$async$state_machine__28264__auto__;
})()
})();
var state__29176__auto__ = (function (){var statearr_29878 = f__29175__auto__();
(statearr_29878[(6)] = c__29174__auto__);

return statearr_29878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29176__auto__);
}));

return c__29174__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__29881 = arguments.length;
switch (G__29881) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_31715 = (function (_){
var x__5519__auto__ = (((_ == null))?null:_);
var m__5520__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5520__auto__.call(null,_));
} else {
var m__5518__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5518__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_31715(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_31723 = (function (m,ch,close_QMARK_){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5520__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5518__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5518__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_31723(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_31733 = (function (m,ch){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5520__auto__.call(null,m,ch));
} else {
var m__5518__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5518__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_31733(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_31735 = (function (m){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5520__auto__.call(null,m));
} else {
var m__5518__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5518__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_31735(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29923 = (function (ch,cs,meta29924){
this.ch = ch;
this.cs = cs;
this.meta29924 = meta29924;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29925,meta29924__$1){
var self__ = this;
var _29925__$1 = this;
return (new cljs.core.async.t_cljs$core$async29923(self__.ch,self__.cs,meta29924__$1));
}));

(cljs.core.async.t_cljs$core$async29923.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29925){
var self__ = this;
var _29925__$1 = this;
return self__.meta29924;
}));

(cljs.core.async.t_cljs$core$async29923.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29923.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async29923.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29923.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async29923.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async29923.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async29923.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29924","meta29924",607062236,null)], null);
}));

(cljs.core.async.t_cljs$core$async29923.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29923.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29923");

(cljs.core.async.t_cljs$core$async29923.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async29923");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29923.
 */
cljs.core.async.__GT_t_cljs$core$async29923 = (function cljs$core$async$__GT_t_cljs$core$async29923(ch,cs,meta29924){
return (new cljs.core.async.t_cljs$core$async29923(ch,cs,meta29924));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async29923(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__29174__auto___31756 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29175__auto__ = (function (){var switch__28263__auto__ = (function (state_30096){
var state_val_30097 = (state_30096[(1)]);
if((state_val_30097 === (7))){
var inst_30088 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
var statearr_30099_31760 = state_30096__$1;
(statearr_30099_31760[(2)] = inst_30088);

(statearr_30099_31760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (20))){
var inst_29980 = (state_30096[(7)]);
var inst_29993 = cljs.core.first(inst_29980);
var inst_29994 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29993,(0),null);
var inst_29995 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29993,(1),null);
var state_30096__$1 = (function (){var statearr_30100 = state_30096;
(statearr_30100[(8)] = inst_29994);

return statearr_30100;
})();
if(cljs.core.truth_(inst_29995)){
var statearr_30101_31765 = state_30096__$1;
(statearr_30101_31765[(1)] = (22));

} else {
var statearr_30102_31766 = state_30096__$1;
(statearr_30102_31766[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (27))){
var inst_30027 = (state_30096[(9)]);
var inst_30029 = (state_30096[(10)]);
var inst_30034 = (state_30096[(11)]);
var inst_29942 = (state_30096[(12)]);
var inst_30034__$1 = cljs.core._nth(inst_30027,inst_30029);
var inst_30035 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30034__$1,inst_29942,done);
var state_30096__$1 = (function (){var statearr_30105 = state_30096;
(statearr_30105[(11)] = inst_30034__$1);

return statearr_30105;
})();
if(cljs.core.truth_(inst_30035)){
var statearr_30106_31768 = state_30096__$1;
(statearr_30106_31768[(1)] = (30));

} else {
var statearr_30107_31769 = state_30096__$1;
(statearr_30107_31769[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (1))){
var state_30096__$1 = state_30096;
var statearr_30108_31770 = state_30096__$1;
(statearr_30108_31770[(2)] = null);

(statearr_30108_31770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (24))){
var inst_29980 = (state_30096[(7)]);
var inst_30000 = (state_30096[(2)]);
var inst_30001 = cljs.core.next(inst_29980);
var inst_29951 = inst_30001;
var inst_29952 = null;
var inst_29953 = (0);
var inst_29954 = (0);
var state_30096__$1 = (function (){var statearr_30109 = state_30096;
(statearr_30109[(13)] = inst_30000);

(statearr_30109[(14)] = inst_29951);

(statearr_30109[(15)] = inst_29952);

(statearr_30109[(16)] = inst_29953);

(statearr_30109[(17)] = inst_29954);

return statearr_30109;
})();
var statearr_30110_31772 = state_30096__$1;
(statearr_30110_31772[(2)] = null);

(statearr_30110_31772[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (39))){
var state_30096__$1 = state_30096;
var statearr_30114_31778 = state_30096__$1;
(statearr_30114_31778[(2)] = null);

(statearr_30114_31778[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (4))){
var inst_29942 = (state_30096[(12)]);
var inst_29942__$1 = (state_30096[(2)]);
var inst_29943 = (inst_29942__$1 == null);
var state_30096__$1 = (function (){var statearr_30115 = state_30096;
(statearr_30115[(12)] = inst_29942__$1);

return statearr_30115;
})();
if(cljs.core.truth_(inst_29943)){
var statearr_30116_31779 = state_30096__$1;
(statearr_30116_31779[(1)] = (5));

} else {
var statearr_30117_31780 = state_30096__$1;
(statearr_30117_31780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (15))){
var inst_29954 = (state_30096[(17)]);
var inst_29951 = (state_30096[(14)]);
var inst_29952 = (state_30096[(15)]);
var inst_29953 = (state_30096[(16)]);
var inst_29973 = (state_30096[(2)]);
var inst_29977 = (inst_29954 + (1));
var tmp30111 = inst_29953;
var tmp30112 = inst_29951;
var tmp30113 = inst_29952;
var inst_29951__$1 = tmp30112;
var inst_29952__$1 = tmp30113;
var inst_29953__$1 = tmp30111;
var inst_29954__$1 = inst_29977;
var state_30096__$1 = (function (){var statearr_30118 = state_30096;
(statearr_30118[(18)] = inst_29973);

(statearr_30118[(14)] = inst_29951__$1);

(statearr_30118[(15)] = inst_29952__$1);

(statearr_30118[(16)] = inst_29953__$1);

(statearr_30118[(17)] = inst_29954__$1);

return statearr_30118;
})();
var statearr_30119_31781 = state_30096__$1;
(statearr_30119_31781[(2)] = null);

(statearr_30119_31781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (21))){
var inst_30004 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
var statearr_30123_31782 = state_30096__$1;
(statearr_30123_31782[(2)] = inst_30004);

(statearr_30123_31782[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (31))){
var inst_30034 = (state_30096[(11)]);
var inst_30041 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30034);
var state_30096__$1 = state_30096;
var statearr_30124_31783 = state_30096__$1;
(statearr_30124_31783[(2)] = inst_30041);

(statearr_30124_31783[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (32))){
var inst_30029 = (state_30096[(10)]);
var inst_30026 = (state_30096[(19)]);
var inst_30027 = (state_30096[(9)]);
var inst_30028 = (state_30096[(20)]);
var inst_30043 = (state_30096[(2)]);
var inst_30044 = (inst_30029 + (1));
var tmp30120 = inst_30026;
var tmp30121 = inst_30028;
var tmp30122 = inst_30027;
var inst_30026__$1 = tmp30120;
var inst_30027__$1 = tmp30122;
var inst_30028__$1 = tmp30121;
var inst_30029__$1 = inst_30044;
var state_30096__$1 = (function (){var statearr_30125 = state_30096;
(statearr_30125[(21)] = inst_30043);

(statearr_30125[(19)] = inst_30026__$1);

(statearr_30125[(9)] = inst_30027__$1);

(statearr_30125[(20)] = inst_30028__$1);

(statearr_30125[(10)] = inst_30029__$1);

return statearr_30125;
})();
var statearr_30126_31785 = state_30096__$1;
(statearr_30126_31785[(2)] = null);

(statearr_30126_31785[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (40))){
var inst_30057 = (state_30096[(22)]);
var inst_30064 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30057);
var state_30096__$1 = state_30096;
var statearr_30127_31786 = state_30096__$1;
(statearr_30127_31786[(2)] = inst_30064);

(statearr_30127_31786[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (33))){
var inst_30048 = (state_30096[(23)]);
var inst_30050 = cljs.core.chunked_seq_QMARK_(inst_30048);
var state_30096__$1 = state_30096;
if(inst_30050){
var statearr_30128_31787 = state_30096__$1;
(statearr_30128_31787[(1)] = (36));

} else {
var statearr_30129_31788 = state_30096__$1;
(statearr_30129_31788[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (13))){
var inst_29963 = (state_30096[(24)]);
var inst_29970 = cljs.core.async.close_BANG_(inst_29963);
var state_30096__$1 = state_30096;
var statearr_30130_31789 = state_30096__$1;
(statearr_30130_31789[(2)] = inst_29970);

(statearr_30130_31789[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (22))){
var inst_29994 = (state_30096[(8)]);
var inst_29997 = cljs.core.async.close_BANG_(inst_29994);
var state_30096__$1 = state_30096;
var statearr_30131_31794 = state_30096__$1;
(statearr_30131_31794[(2)] = inst_29997);

(statearr_30131_31794[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (36))){
var inst_30048 = (state_30096[(23)]);
var inst_30052 = cljs.core.chunk_first(inst_30048);
var inst_30053 = cljs.core.chunk_rest(inst_30048);
var inst_30054 = cljs.core.count(inst_30052);
var inst_30026 = inst_30053;
var inst_30027 = inst_30052;
var inst_30028 = inst_30054;
var inst_30029 = (0);
var state_30096__$1 = (function (){var statearr_30132 = state_30096;
(statearr_30132[(19)] = inst_30026);

(statearr_30132[(9)] = inst_30027);

(statearr_30132[(20)] = inst_30028);

(statearr_30132[(10)] = inst_30029);

return statearr_30132;
})();
var statearr_30133_31807 = state_30096__$1;
(statearr_30133_31807[(2)] = null);

(statearr_30133_31807[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (41))){
var inst_30048 = (state_30096[(23)]);
var inst_30066 = (state_30096[(2)]);
var inst_30067 = cljs.core.next(inst_30048);
var inst_30026 = inst_30067;
var inst_30027 = null;
var inst_30028 = (0);
var inst_30029 = (0);
var state_30096__$1 = (function (){var statearr_30134 = state_30096;
(statearr_30134[(25)] = inst_30066);

(statearr_30134[(19)] = inst_30026);

(statearr_30134[(9)] = inst_30027);

(statearr_30134[(20)] = inst_30028);

(statearr_30134[(10)] = inst_30029);

return statearr_30134;
})();
var statearr_30135_31816 = state_30096__$1;
(statearr_30135_31816[(2)] = null);

(statearr_30135_31816[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (43))){
var state_30096__$1 = state_30096;
var statearr_30136_31819 = state_30096__$1;
(statearr_30136_31819[(2)] = null);

(statearr_30136_31819[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (29))){
var inst_30076 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
var statearr_30137_31820 = state_30096__$1;
(statearr_30137_31820[(2)] = inst_30076);

(statearr_30137_31820[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (44))){
var inst_30085 = (state_30096[(2)]);
var state_30096__$1 = (function (){var statearr_30138 = state_30096;
(statearr_30138[(26)] = inst_30085);

return statearr_30138;
})();
var statearr_30139_31821 = state_30096__$1;
(statearr_30139_31821[(2)] = null);

(statearr_30139_31821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (6))){
var inst_30017 = (state_30096[(27)]);
var inst_30016 = cljs.core.deref(cs);
var inst_30017__$1 = cljs.core.keys(inst_30016);
var inst_30018 = cljs.core.count(inst_30017__$1);
var inst_30019 = cljs.core.reset_BANG_(dctr,inst_30018);
var inst_30025 = cljs.core.seq(inst_30017__$1);
var inst_30026 = inst_30025;
var inst_30027 = null;
var inst_30028 = (0);
var inst_30029 = (0);
var state_30096__$1 = (function (){var statearr_30142 = state_30096;
(statearr_30142[(27)] = inst_30017__$1);

(statearr_30142[(28)] = inst_30019);

(statearr_30142[(19)] = inst_30026);

(statearr_30142[(9)] = inst_30027);

(statearr_30142[(20)] = inst_30028);

(statearr_30142[(10)] = inst_30029);

return statearr_30142;
})();
var statearr_30143_31830 = state_30096__$1;
(statearr_30143_31830[(2)] = null);

(statearr_30143_31830[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (28))){
var inst_30026 = (state_30096[(19)]);
var inst_30048 = (state_30096[(23)]);
var inst_30048__$1 = cljs.core.seq(inst_30026);
var state_30096__$1 = (function (){var statearr_30144 = state_30096;
(statearr_30144[(23)] = inst_30048__$1);

return statearr_30144;
})();
if(inst_30048__$1){
var statearr_30145_31837 = state_30096__$1;
(statearr_30145_31837[(1)] = (33));

} else {
var statearr_30146_31838 = state_30096__$1;
(statearr_30146_31838[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (25))){
var inst_30029 = (state_30096[(10)]);
var inst_30028 = (state_30096[(20)]);
var inst_30031 = (inst_30029 < inst_30028);
var inst_30032 = inst_30031;
var state_30096__$1 = state_30096;
if(cljs.core.truth_(inst_30032)){
var statearr_30148_31839 = state_30096__$1;
(statearr_30148_31839[(1)] = (27));

} else {
var statearr_30150_31848 = state_30096__$1;
(statearr_30150_31848[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (34))){
var state_30096__$1 = state_30096;
var statearr_30151_31849 = state_30096__$1;
(statearr_30151_31849[(2)] = null);

(statearr_30151_31849[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (17))){
var state_30096__$1 = state_30096;
var statearr_30152_31852 = state_30096__$1;
(statearr_30152_31852[(2)] = null);

(statearr_30152_31852[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (3))){
var inst_30090 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30096__$1,inst_30090);
} else {
if((state_val_30097 === (12))){
var inst_30009 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
var statearr_30153_31864 = state_30096__$1;
(statearr_30153_31864[(2)] = inst_30009);

(statearr_30153_31864[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (2))){
var state_30096__$1 = state_30096;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30096__$1,(4),ch);
} else {
if((state_val_30097 === (23))){
var state_30096__$1 = state_30096;
var statearr_30154_31865 = state_30096__$1;
(statearr_30154_31865[(2)] = null);

(statearr_30154_31865[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (35))){
var inst_30073 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
var statearr_30157_31866 = state_30096__$1;
(statearr_30157_31866[(2)] = inst_30073);

(statearr_30157_31866[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (19))){
var inst_29980 = (state_30096[(7)]);
var inst_29985 = cljs.core.chunk_first(inst_29980);
var inst_29986 = cljs.core.chunk_rest(inst_29980);
var inst_29987 = cljs.core.count(inst_29985);
var inst_29951 = inst_29986;
var inst_29952 = inst_29985;
var inst_29953 = inst_29987;
var inst_29954 = (0);
var state_30096__$1 = (function (){var statearr_30158 = state_30096;
(statearr_30158[(14)] = inst_29951);

(statearr_30158[(15)] = inst_29952);

(statearr_30158[(16)] = inst_29953);

(statearr_30158[(17)] = inst_29954);

return statearr_30158;
})();
var statearr_30159_31868 = state_30096__$1;
(statearr_30159_31868[(2)] = null);

(statearr_30159_31868[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (11))){
var inst_29951 = (state_30096[(14)]);
var inst_29980 = (state_30096[(7)]);
var inst_29980__$1 = cljs.core.seq(inst_29951);
var state_30096__$1 = (function (){var statearr_30160 = state_30096;
(statearr_30160[(7)] = inst_29980__$1);

return statearr_30160;
})();
if(inst_29980__$1){
var statearr_30161_31875 = state_30096__$1;
(statearr_30161_31875[(1)] = (16));

} else {
var statearr_30162_31876 = state_30096__$1;
(statearr_30162_31876[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (9))){
var inst_30011 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
var statearr_30163_31877 = state_30096__$1;
(statearr_30163_31877[(2)] = inst_30011);

(statearr_30163_31877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (5))){
var inst_29949 = cljs.core.deref(cs);
var inst_29950 = cljs.core.seq(inst_29949);
var inst_29951 = inst_29950;
var inst_29952 = null;
var inst_29953 = (0);
var inst_29954 = (0);
var state_30096__$1 = (function (){var statearr_30164 = state_30096;
(statearr_30164[(14)] = inst_29951);

(statearr_30164[(15)] = inst_29952);

(statearr_30164[(16)] = inst_29953);

(statearr_30164[(17)] = inst_29954);

return statearr_30164;
})();
var statearr_30165_31879 = state_30096__$1;
(statearr_30165_31879[(2)] = null);

(statearr_30165_31879[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (14))){
var state_30096__$1 = state_30096;
var statearr_30166_31882 = state_30096__$1;
(statearr_30166_31882[(2)] = null);

(statearr_30166_31882[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (45))){
var inst_30082 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
var statearr_30167_31887 = state_30096__$1;
(statearr_30167_31887[(2)] = inst_30082);

(statearr_30167_31887[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (26))){
var inst_30017 = (state_30096[(27)]);
var inst_30078 = (state_30096[(2)]);
var inst_30079 = cljs.core.seq(inst_30017);
var state_30096__$1 = (function (){var statearr_30168 = state_30096;
(statearr_30168[(29)] = inst_30078);

return statearr_30168;
})();
if(inst_30079){
var statearr_30169_31893 = state_30096__$1;
(statearr_30169_31893[(1)] = (42));

} else {
var statearr_30170_31894 = state_30096__$1;
(statearr_30170_31894[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (16))){
var inst_29980 = (state_30096[(7)]);
var inst_29983 = cljs.core.chunked_seq_QMARK_(inst_29980);
var state_30096__$1 = state_30096;
if(inst_29983){
var statearr_30171_31897 = state_30096__$1;
(statearr_30171_31897[(1)] = (19));

} else {
var statearr_30172_31898 = state_30096__$1;
(statearr_30172_31898[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (38))){
var inst_30070 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
var statearr_30173_31903 = state_30096__$1;
(statearr_30173_31903[(2)] = inst_30070);

(statearr_30173_31903[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (30))){
var state_30096__$1 = state_30096;
var statearr_30174_31904 = state_30096__$1;
(statearr_30174_31904[(2)] = null);

(statearr_30174_31904[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (10))){
var inst_29952 = (state_30096[(15)]);
var inst_29954 = (state_30096[(17)]);
var inst_29962 = cljs.core._nth(inst_29952,inst_29954);
var inst_29963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29962,(0),null);
var inst_29968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29962,(1),null);
var state_30096__$1 = (function (){var statearr_30175 = state_30096;
(statearr_30175[(24)] = inst_29963);

return statearr_30175;
})();
if(cljs.core.truth_(inst_29968)){
var statearr_30176_31910 = state_30096__$1;
(statearr_30176_31910[(1)] = (13));

} else {
var statearr_30177_31911 = state_30096__$1;
(statearr_30177_31911[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (18))){
var inst_30007 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
var statearr_30178_31912 = state_30096__$1;
(statearr_30178_31912[(2)] = inst_30007);

(statearr_30178_31912[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (42))){
var state_30096__$1 = state_30096;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30096__$1,(45),dchan);
} else {
if((state_val_30097 === (37))){
var inst_30048 = (state_30096[(23)]);
var inst_30057 = (state_30096[(22)]);
var inst_29942 = (state_30096[(12)]);
var inst_30057__$1 = cljs.core.first(inst_30048);
var inst_30058 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30057__$1,inst_29942,done);
var state_30096__$1 = (function (){var statearr_30179 = state_30096;
(statearr_30179[(22)] = inst_30057__$1);

return statearr_30179;
})();
if(cljs.core.truth_(inst_30058)){
var statearr_30181_31914 = state_30096__$1;
(statearr_30181_31914[(1)] = (39));

} else {
var statearr_30182_31915 = state_30096__$1;
(statearr_30182_31915[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (8))){
var inst_29954 = (state_30096[(17)]);
var inst_29953 = (state_30096[(16)]);
var inst_29956 = (inst_29954 < inst_29953);
var inst_29957 = inst_29956;
var state_30096__$1 = state_30096;
if(cljs.core.truth_(inst_29957)){
var statearr_30184_31923 = state_30096__$1;
(statearr_30184_31923[(1)] = (10));

} else {
var statearr_30185_31924 = state_30096__$1;
(statearr_30185_31924[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__28264__auto__ = null;
var cljs$core$async$mult_$_state_machine__28264__auto____0 = (function (){
var statearr_30186 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30186[(0)] = cljs$core$async$mult_$_state_machine__28264__auto__);

(statearr_30186[(1)] = (1));

return statearr_30186;
});
var cljs$core$async$mult_$_state_machine__28264__auto____1 = (function (state_30096){
while(true){
var ret_value__28265__auto__ = (function (){try{while(true){
var result__28266__auto__ = switch__28263__auto__(state_30096);
if(cljs.core.keyword_identical_QMARK_(result__28266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28266__auto__;
}
break;
}
}catch (e30187){var ex__28267__auto__ = e30187;
var statearr_30189_31928 = state_30096;
(statearr_30189_31928[(2)] = ex__28267__auto__);


if(cljs.core.seq((state_30096[(4)]))){
var statearr_30193_31929 = state_30096;
(statearr_30193_31929[(1)] = cljs.core.first((state_30096[(4)])));

} else {
throw ex__28267__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31930 = state_30096;
state_30096 = G__31930;
continue;
} else {
return ret_value__28265__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28264__auto__ = function(state_30096){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28264__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28264__auto____1.call(this,state_30096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28264__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28264__auto____0;
cljs$core$async$mult_$_state_machine__28264__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28264__auto____1;
return cljs$core$async$mult_$_state_machine__28264__auto__;
})()
})();
var state__29176__auto__ = (function (){var statearr_30194 = f__29175__auto__();
(statearr_30194[(6)] = c__29174__auto___31756);

return statearr_30194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29176__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__30197 = arguments.length;
switch (G__30197) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_31942 = (function (m,ch){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5520__auto__.call(null,m,ch));
} else {
var m__5518__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5518__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_31942(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_31947 = (function (m,ch){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5520__auto__.call(null,m,ch));
} else {
var m__5518__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5518__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_31947(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_31950 = (function (m){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5520__auto__.call(null,m));
} else {
var m__5518__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5518__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_31950(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_31951 = (function (m,state_map){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5520__auto__.call(null,m,state_map));
} else {
var m__5518__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5518__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_31951(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_31959 = (function (m,mode){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5520__auto__.call(null,m,mode));
} else {
var m__5518__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5518__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_31959(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___31972 = arguments.length;
var i__5898__auto___31973 = (0);
while(true){
if((i__5898__auto___31973 < len__5897__auto___31972)){
args__5903__auto__.push((arguments[i__5898__auto___31973]));

var G__31974 = (i__5898__auto___31973 + (1));
i__5898__auto___31973 = G__31974;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((3) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5904__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30245){
var map__30246 = p__30245;
var map__30246__$1 = cljs.core.__destructure_map(map__30246);
var opts = map__30246__$1;
var statearr_30247_31978 = state;
(statearr_30247_31978[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_30248_31979 = state;
(statearr_30248_31979[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_30249_31982 = state;
(statearr_30249_31982[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30241){
var G__30242 = cljs.core.first(seq30241);
var seq30241__$1 = cljs.core.next(seq30241);
var G__30243 = cljs.core.first(seq30241__$1);
var seq30241__$2 = cljs.core.next(seq30241__$1);
var G__30244 = cljs.core.first(seq30241__$2);
var seq30241__$3 = cljs.core.next(seq30241__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30242,G__30243,G__30244,seq30241__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30258 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30259){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30259 = meta30259;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30260,meta30259__$1){
var self__ = this;
var _30260__$1 = this;
return (new cljs.core.async.t_cljs$core$async30258(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30259__$1));
}));

(cljs.core.async.t_cljs$core$async30258.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30260){
var self__ = this;
var _30260__$1 = this;
return self__.meta30259;
}));

(cljs.core.async.t_cljs$core$async30258.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30258.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async30258.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30258.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30258.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30258.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30258.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30258.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+"(solo-modes mode)")));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30258.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30259","meta30259",1010176188,null)], null);
}));

(cljs.core.async.t_cljs$core$async30258.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30258.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30258");

(cljs.core.async.t_cljs$core$async30258.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async30258");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30258.
 */
cljs.core.async.__GT_t_cljs$core$async30258 = (function cljs$core$async$__GT_t_cljs$core$async30258(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30259){
return (new cljs.core.async.t_cljs$core$async30258(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30259));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async30258(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__29174__auto___31992 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29175__auto__ = (function (){var switch__28263__auto__ = (function (state_30335){
var state_val_30336 = (state_30335[(1)]);
if((state_val_30336 === (7))){
var inst_30295 = (state_30335[(2)]);
var state_30335__$1 = state_30335;
if(cljs.core.truth_(inst_30295)){
var statearr_30337_31998 = state_30335__$1;
(statearr_30337_31998[(1)] = (8));

} else {
var statearr_30338_32001 = state_30335__$1;
(statearr_30338_32001[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (20))){
var inst_30288 = (state_30335[(7)]);
var state_30335__$1 = state_30335;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30335__$1,(23),out,inst_30288);
} else {
if((state_val_30336 === (1))){
var inst_30271 = calc_state();
var inst_30272 = cljs.core.__destructure_map(inst_30271);
var inst_30273 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30272,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30274 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30272,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30275 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30272,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30276 = inst_30271;
var state_30335__$1 = (function (){var statearr_30339 = state_30335;
(statearr_30339[(8)] = inst_30273);

(statearr_30339[(9)] = inst_30274);

(statearr_30339[(10)] = inst_30275);

(statearr_30339[(11)] = inst_30276);

return statearr_30339;
})();
var statearr_30340_32016 = state_30335__$1;
(statearr_30340_32016[(2)] = null);

(statearr_30340_32016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (24))){
var inst_30279 = (state_30335[(12)]);
var inst_30276 = inst_30279;
var state_30335__$1 = (function (){var statearr_30341 = state_30335;
(statearr_30341[(11)] = inst_30276);

return statearr_30341;
})();
var statearr_30342_32021 = state_30335__$1;
(statearr_30342_32021[(2)] = null);

(statearr_30342_32021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (4))){
var inst_30288 = (state_30335[(7)]);
var inst_30290 = (state_30335[(13)]);
var inst_30287 = (state_30335[(2)]);
var inst_30288__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30287,(0),null);
var inst_30289 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30287,(1),null);
var inst_30290__$1 = (inst_30288__$1 == null);
var state_30335__$1 = (function (){var statearr_30343 = state_30335;
(statearr_30343[(7)] = inst_30288__$1);

(statearr_30343[(14)] = inst_30289);

(statearr_30343[(13)] = inst_30290__$1);

return statearr_30343;
})();
if(cljs.core.truth_(inst_30290__$1)){
var statearr_30344_32025 = state_30335__$1;
(statearr_30344_32025[(1)] = (5));

} else {
var statearr_30345_32026 = state_30335__$1;
(statearr_30345_32026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (15))){
var inst_30280 = (state_30335[(15)]);
var inst_30309 = (state_30335[(16)]);
var inst_30309__$1 = cljs.core.empty_QMARK_(inst_30280);
var state_30335__$1 = (function (){var statearr_30346 = state_30335;
(statearr_30346[(16)] = inst_30309__$1);

return statearr_30346;
})();
if(inst_30309__$1){
var statearr_30347_32027 = state_30335__$1;
(statearr_30347_32027[(1)] = (17));

} else {
var statearr_30348_32028 = state_30335__$1;
(statearr_30348_32028[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (21))){
var inst_30279 = (state_30335[(12)]);
var inst_30276 = inst_30279;
var state_30335__$1 = (function (){var statearr_30349 = state_30335;
(statearr_30349[(11)] = inst_30276);

return statearr_30349;
})();
var statearr_30350_32038 = state_30335__$1;
(statearr_30350_32038[(2)] = null);

(statearr_30350_32038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (13))){
var inst_30302 = (state_30335[(2)]);
var inst_30303 = calc_state();
var inst_30276 = inst_30303;
var state_30335__$1 = (function (){var statearr_30351 = state_30335;
(statearr_30351[(17)] = inst_30302);

(statearr_30351[(11)] = inst_30276);

return statearr_30351;
})();
var statearr_30352_32041 = state_30335__$1;
(statearr_30352_32041[(2)] = null);

(statearr_30352_32041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (22))){
var inst_30329 = (state_30335[(2)]);
var state_30335__$1 = state_30335;
var statearr_30353_32044 = state_30335__$1;
(statearr_30353_32044[(2)] = inst_30329);

(statearr_30353_32044[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (6))){
var inst_30289 = (state_30335[(14)]);
var inst_30293 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30289,change);
var state_30335__$1 = state_30335;
var statearr_30354_32048 = state_30335__$1;
(statearr_30354_32048[(2)] = inst_30293);

(statearr_30354_32048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (25))){
var state_30335__$1 = state_30335;
var statearr_30355_32049 = state_30335__$1;
(statearr_30355_32049[(2)] = null);

(statearr_30355_32049[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (17))){
var inst_30281 = (state_30335[(18)]);
var inst_30289 = (state_30335[(14)]);
var inst_30311 = (inst_30281.cljs$core$IFn$_invoke$arity$1 ? inst_30281.cljs$core$IFn$_invoke$arity$1(inst_30289) : inst_30281.call(null,inst_30289));
var inst_30312 = cljs.core.not(inst_30311);
var state_30335__$1 = state_30335;
var statearr_30356_32050 = state_30335__$1;
(statearr_30356_32050[(2)] = inst_30312);

(statearr_30356_32050[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (3))){
var inst_30333 = (state_30335[(2)]);
var state_30335__$1 = state_30335;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30335__$1,inst_30333);
} else {
if((state_val_30336 === (12))){
var state_30335__$1 = state_30335;
var statearr_30357_32051 = state_30335__$1;
(statearr_30357_32051[(2)] = null);

(statearr_30357_32051[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (2))){
var inst_30276 = (state_30335[(11)]);
var inst_30279 = (state_30335[(12)]);
var inst_30279__$1 = cljs.core.__destructure_map(inst_30276);
var inst_30280 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30279__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30281 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30279__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30282 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30279__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30335__$1 = (function (){var statearr_30358 = state_30335;
(statearr_30358[(12)] = inst_30279__$1);

(statearr_30358[(15)] = inst_30280);

(statearr_30358[(18)] = inst_30281);

return statearr_30358;
})();
return cljs.core.async.ioc_alts_BANG_(state_30335__$1,(4),inst_30282);
} else {
if((state_val_30336 === (23))){
var inst_30320 = (state_30335[(2)]);
var state_30335__$1 = state_30335;
if(cljs.core.truth_(inst_30320)){
var statearr_30359_32053 = state_30335__$1;
(statearr_30359_32053[(1)] = (24));

} else {
var statearr_30360_32054 = state_30335__$1;
(statearr_30360_32054[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (19))){
var inst_30315 = (state_30335[(2)]);
var state_30335__$1 = state_30335;
var statearr_30361_32055 = state_30335__$1;
(statearr_30361_32055[(2)] = inst_30315);

(statearr_30361_32055[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (11))){
var inst_30289 = (state_30335[(14)]);
var inst_30299 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_30289);
var state_30335__$1 = state_30335;
var statearr_30362_32057 = state_30335__$1;
(statearr_30362_32057[(2)] = inst_30299);

(statearr_30362_32057[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (9))){
var inst_30280 = (state_30335[(15)]);
var inst_30289 = (state_30335[(14)]);
var inst_30306 = (state_30335[(19)]);
var inst_30306__$1 = (inst_30280.cljs$core$IFn$_invoke$arity$1 ? inst_30280.cljs$core$IFn$_invoke$arity$1(inst_30289) : inst_30280.call(null,inst_30289));
var state_30335__$1 = (function (){var statearr_30363 = state_30335;
(statearr_30363[(19)] = inst_30306__$1);

return statearr_30363;
})();
if(cljs.core.truth_(inst_30306__$1)){
var statearr_30364_32077 = state_30335__$1;
(statearr_30364_32077[(1)] = (14));

} else {
var statearr_30365_32078 = state_30335__$1;
(statearr_30365_32078[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (5))){
var inst_30290 = (state_30335[(13)]);
var state_30335__$1 = state_30335;
var statearr_30367_32080 = state_30335__$1;
(statearr_30367_32080[(2)] = inst_30290);

(statearr_30367_32080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (14))){
var inst_30306 = (state_30335[(19)]);
var state_30335__$1 = state_30335;
var statearr_30368_32081 = state_30335__$1;
(statearr_30368_32081[(2)] = inst_30306);

(statearr_30368_32081[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (26))){
var inst_30325 = (state_30335[(2)]);
var state_30335__$1 = state_30335;
var statearr_30369_32082 = state_30335__$1;
(statearr_30369_32082[(2)] = inst_30325);

(statearr_30369_32082[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (16))){
var inst_30317 = (state_30335[(2)]);
var state_30335__$1 = state_30335;
if(cljs.core.truth_(inst_30317)){
var statearr_30371_32083 = state_30335__$1;
(statearr_30371_32083[(1)] = (20));

} else {
var statearr_30372_32084 = state_30335__$1;
(statearr_30372_32084[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (10))){
var inst_30331 = (state_30335[(2)]);
var state_30335__$1 = state_30335;
var statearr_30373_32085 = state_30335__$1;
(statearr_30373_32085[(2)] = inst_30331);

(statearr_30373_32085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (18))){
var inst_30309 = (state_30335[(16)]);
var state_30335__$1 = state_30335;
var statearr_30374_32086 = state_30335__$1;
(statearr_30374_32086[(2)] = inst_30309);

(statearr_30374_32086[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (8))){
var inst_30288 = (state_30335[(7)]);
var inst_30297 = (inst_30288 == null);
var state_30335__$1 = state_30335;
if(cljs.core.truth_(inst_30297)){
var statearr_30377_32087 = state_30335__$1;
(statearr_30377_32087[(1)] = (11));

} else {
var statearr_30378_32088 = state_30335__$1;
(statearr_30378_32088[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__28264__auto__ = null;
var cljs$core$async$mix_$_state_machine__28264__auto____0 = (function (){
var statearr_30380 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30380[(0)] = cljs$core$async$mix_$_state_machine__28264__auto__);

(statearr_30380[(1)] = (1));

return statearr_30380;
});
var cljs$core$async$mix_$_state_machine__28264__auto____1 = (function (state_30335){
while(true){
var ret_value__28265__auto__ = (function (){try{while(true){
var result__28266__auto__ = switch__28263__auto__(state_30335);
if(cljs.core.keyword_identical_QMARK_(result__28266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28266__auto__;
}
break;
}
}catch (e30381){var ex__28267__auto__ = e30381;
var statearr_30382_32089 = state_30335;
(statearr_30382_32089[(2)] = ex__28267__auto__);


if(cljs.core.seq((state_30335[(4)]))){
var statearr_30383_32090 = state_30335;
(statearr_30383_32090[(1)] = cljs.core.first((state_30335[(4)])));

} else {
throw ex__28267__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32091 = state_30335;
state_30335 = G__32091;
continue;
} else {
return ret_value__28265__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28264__auto__ = function(state_30335){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28264__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28264__auto____1.call(this,state_30335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28264__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28264__auto____0;
cljs$core$async$mix_$_state_machine__28264__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28264__auto____1;
return cljs$core$async$mix_$_state_machine__28264__auto__;
})()
})();
var state__29176__auto__ = (function (){var statearr_30385 = f__29175__auto__();
(statearr_30385[(6)] = c__29174__auto___31992);

return statearr_30385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29176__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_32093 = (function (p,v,ch,close_QMARK_){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5520__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5518__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5518__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_32093(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_32096 = (function (p,v,ch){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5520__auto__.call(null,p,v,ch));
} else {
var m__5518__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5518__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_32096(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_32099 = (function() {
var G__32100 = null;
var G__32100__1 = (function (p){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5520__auto__.call(null,p));
} else {
var m__5518__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5518__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__32100__2 = (function (p,v){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5520__auto__.call(null,p,v));
} else {
var m__5518__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5518__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__32100 = function(p,v){
switch(arguments.length){
case 1:
return G__32100__1.call(this,p);
case 2:
return G__32100__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32100.cljs$core$IFn$_invoke$arity$1 = G__32100__1;
G__32100.cljs$core$IFn$_invoke$arity$2 = G__32100__2;
return G__32100;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__30397 = arguments.length;
switch (G__30397) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32099(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32099(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30407 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30408){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30408 = meta30408;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30409,meta30408__$1){
var self__ = this;
var _30409__$1 = this;
return (new cljs.core.async.t_cljs$core$async30407(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30408__$1));
}));

(cljs.core.async.t_cljs$core$async30407.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30409){
var self__ = this;
var _30409__$1 = this;
return self__.meta30408;
}));

(cljs.core.async.t_cljs$core$async30407.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30407.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30407.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30407.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async30407.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async30407.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async30407.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async30407.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30408","meta30408",-1023906258,null)], null);
}));

(cljs.core.async.t_cljs$core$async30407.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30407.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30407");

(cljs.core.async.t_cljs$core$async30407.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async30407");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30407.
 */
cljs.core.async.__GT_t_cljs$core$async30407 = (function cljs$core$async$__GT_t_cljs$core$async30407(ch,topic_fn,buf_fn,mults,ensure_mult,meta30408){
return (new cljs.core.async.t_cljs$core$async30407(ch,topic_fn,buf_fn,mults,ensure_mult,meta30408));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__30404 = arguments.length;
switch (G__30404) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5162__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__30402_SHARP_){
if(cljs.core.truth_((p1__30402_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__30402_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__30402_SHARP_.call(null,topic)))){
return p1__30402_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__30402_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async30407(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__29174__auto___32115 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29175__auto__ = (function (){var switch__28263__auto__ = (function (state_30484){
var state_val_30485 = (state_30484[(1)]);
if((state_val_30485 === (7))){
var inst_30480 = (state_30484[(2)]);
var state_30484__$1 = state_30484;
var statearr_30486_32117 = state_30484__$1;
(statearr_30486_32117[(2)] = inst_30480);

(statearr_30486_32117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (20))){
var state_30484__$1 = state_30484;
var statearr_30487_32118 = state_30484__$1;
(statearr_30487_32118[(2)] = null);

(statearr_30487_32118[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (1))){
var state_30484__$1 = state_30484;
var statearr_30488_32120 = state_30484__$1;
(statearr_30488_32120[(2)] = null);

(statearr_30488_32120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (24))){
var inst_30463 = (state_30484[(7)]);
var inst_30472 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_30463);
var state_30484__$1 = state_30484;
var statearr_30489_32122 = state_30484__$1;
(statearr_30489_32122[(2)] = inst_30472);

(statearr_30489_32122[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (4))){
var inst_30415 = (state_30484[(8)]);
var inst_30415__$1 = (state_30484[(2)]);
var inst_30416 = (inst_30415__$1 == null);
var state_30484__$1 = (function (){var statearr_30490 = state_30484;
(statearr_30490[(8)] = inst_30415__$1);

return statearr_30490;
})();
if(cljs.core.truth_(inst_30416)){
var statearr_30492_32125 = state_30484__$1;
(statearr_30492_32125[(1)] = (5));

} else {
var statearr_30493_32126 = state_30484__$1;
(statearr_30493_32126[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (15))){
var inst_30457 = (state_30484[(2)]);
var state_30484__$1 = state_30484;
var statearr_30494_32128 = state_30484__$1;
(statearr_30494_32128[(2)] = inst_30457);

(statearr_30494_32128[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (21))){
var inst_30477 = (state_30484[(2)]);
var state_30484__$1 = (function (){var statearr_30495 = state_30484;
(statearr_30495[(9)] = inst_30477);

return statearr_30495;
})();
var statearr_30496_32134 = state_30484__$1;
(statearr_30496_32134[(2)] = null);

(statearr_30496_32134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (13))){
var inst_30439 = (state_30484[(10)]);
var inst_30441 = cljs.core.chunked_seq_QMARK_(inst_30439);
var state_30484__$1 = state_30484;
if(inst_30441){
var statearr_30497_32135 = state_30484__$1;
(statearr_30497_32135[(1)] = (16));

} else {
var statearr_30498_32136 = state_30484__$1;
(statearr_30498_32136[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (22))){
var inst_30469 = (state_30484[(2)]);
var state_30484__$1 = state_30484;
if(cljs.core.truth_(inst_30469)){
var statearr_30499_32137 = state_30484__$1;
(statearr_30499_32137[(1)] = (23));

} else {
var statearr_30500_32138 = state_30484__$1;
(statearr_30500_32138[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (6))){
var inst_30415 = (state_30484[(8)]);
var inst_30463 = (state_30484[(7)]);
var inst_30465 = (state_30484[(11)]);
var inst_30463__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_30415) : topic_fn.call(null,inst_30415));
var inst_30464 = cljs.core.deref(mults);
var inst_30465__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30464,inst_30463__$1);
var state_30484__$1 = (function (){var statearr_30501 = state_30484;
(statearr_30501[(7)] = inst_30463__$1);

(statearr_30501[(11)] = inst_30465__$1);

return statearr_30501;
})();
if(cljs.core.truth_(inst_30465__$1)){
var statearr_30502_32139 = state_30484__$1;
(statearr_30502_32139[(1)] = (19));

} else {
var statearr_30503_32140 = state_30484__$1;
(statearr_30503_32140[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (25))){
var inst_30474 = (state_30484[(2)]);
var state_30484__$1 = state_30484;
var statearr_30504_32141 = state_30484__$1;
(statearr_30504_32141[(2)] = inst_30474);

(statearr_30504_32141[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (17))){
var inst_30439 = (state_30484[(10)]);
var inst_30448 = cljs.core.first(inst_30439);
var inst_30449 = cljs.core.async.muxch_STAR_(inst_30448);
var inst_30450 = cljs.core.async.close_BANG_(inst_30449);
var inst_30451 = cljs.core.next(inst_30439);
var inst_30425 = inst_30451;
var inst_30426 = null;
var inst_30427 = (0);
var inst_30428 = (0);
var state_30484__$1 = (function (){var statearr_30505 = state_30484;
(statearr_30505[(12)] = inst_30450);

(statearr_30505[(13)] = inst_30425);

(statearr_30505[(14)] = inst_30426);

(statearr_30505[(15)] = inst_30427);

(statearr_30505[(16)] = inst_30428);

return statearr_30505;
})();
var statearr_30506_32144 = state_30484__$1;
(statearr_30506_32144[(2)] = null);

(statearr_30506_32144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (3))){
var inst_30482 = (state_30484[(2)]);
var state_30484__$1 = state_30484;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30484__$1,inst_30482);
} else {
if((state_val_30485 === (12))){
var inst_30459 = (state_30484[(2)]);
var state_30484__$1 = state_30484;
var statearr_30507_32148 = state_30484__$1;
(statearr_30507_32148[(2)] = inst_30459);

(statearr_30507_32148[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (2))){
var state_30484__$1 = state_30484;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30484__$1,(4),ch);
} else {
if((state_val_30485 === (23))){
var state_30484__$1 = state_30484;
var statearr_30508_32149 = state_30484__$1;
(statearr_30508_32149[(2)] = null);

(statearr_30508_32149[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (19))){
var inst_30465 = (state_30484[(11)]);
var inst_30415 = (state_30484[(8)]);
var inst_30467 = cljs.core.async.muxch_STAR_(inst_30465);
var state_30484__$1 = state_30484;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30484__$1,(22),inst_30467,inst_30415);
} else {
if((state_val_30485 === (11))){
var inst_30425 = (state_30484[(13)]);
var inst_30439 = (state_30484[(10)]);
var inst_30439__$1 = cljs.core.seq(inst_30425);
var state_30484__$1 = (function (){var statearr_30509 = state_30484;
(statearr_30509[(10)] = inst_30439__$1);

return statearr_30509;
})();
if(inst_30439__$1){
var statearr_30510_32151 = state_30484__$1;
(statearr_30510_32151[(1)] = (13));

} else {
var statearr_30511_32152 = state_30484__$1;
(statearr_30511_32152[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (9))){
var inst_30461 = (state_30484[(2)]);
var state_30484__$1 = state_30484;
var statearr_30512_32155 = state_30484__$1;
(statearr_30512_32155[(2)] = inst_30461);

(statearr_30512_32155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (5))){
var inst_30422 = cljs.core.deref(mults);
var inst_30423 = cljs.core.vals(inst_30422);
var inst_30424 = cljs.core.seq(inst_30423);
var inst_30425 = inst_30424;
var inst_30426 = null;
var inst_30427 = (0);
var inst_30428 = (0);
var state_30484__$1 = (function (){var statearr_30513 = state_30484;
(statearr_30513[(13)] = inst_30425);

(statearr_30513[(14)] = inst_30426);

(statearr_30513[(15)] = inst_30427);

(statearr_30513[(16)] = inst_30428);

return statearr_30513;
})();
var statearr_30517_32158 = state_30484__$1;
(statearr_30517_32158[(2)] = null);

(statearr_30517_32158[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (14))){
var state_30484__$1 = state_30484;
var statearr_30521_32159 = state_30484__$1;
(statearr_30521_32159[(2)] = null);

(statearr_30521_32159[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (16))){
var inst_30439 = (state_30484[(10)]);
var inst_30443 = cljs.core.chunk_first(inst_30439);
var inst_30444 = cljs.core.chunk_rest(inst_30439);
var inst_30445 = cljs.core.count(inst_30443);
var inst_30425 = inst_30444;
var inst_30426 = inst_30443;
var inst_30427 = inst_30445;
var inst_30428 = (0);
var state_30484__$1 = (function (){var statearr_30522 = state_30484;
(statearr_30522[(13)] = inst_30425);

(statearr_30522[(14)] = inst_30426);

(statearr_30522[(15)] = inst_30427);

(statearr_30522[(16)] = inst_30428);

return statearr_30522;
})();
var statearr_30523_32163 = state_30484__$1;
(statearr_30523_32163[(2)] = null);

(statearr_30523_32163[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (10))){
var inst_30426 = (state_30484[(14)]);
var inst_30428 = (state_30484[(16)]);
var inst_30425 = (state_30484[(13)]);
var inst_30427 = (state_30484[(15)]);
var inst_30433 = cljs.core._nth(inst_30426,inst_30428);
var inst_30434 = cljs.core.async.muxch_STAR_(inst_30433);
var inst_30435 = cljs.core.async.close_BANG_(inst_30434);
var inst_30436 = (inst_30428 + (1));
var tmp30518 = inst_30426;
var tmp30519 = inst_30427;
var tmp30520 = inst_30425;
var inst_30425__$1 = tmp30520;
var inst_30426__$1 = tmp30518;
var inst_30427__$1 = tmp30519;
var inst_30428__$1 = inst_30436;
var state_30484__$1 = (function (){var statearr_30524 = state_30484;
(statearr_30524[(17)] = inst_30435);

(statearr_30524[(13)] = inst_30425__$1);

(statearr_30524[(14)] = inst_30426__$1);

(statearr_30524[(15)] = inst_30427__$1);

(statearr_30524[(16)] = inst_30428__$1);

return statearr_30524;
})();
var statearr_30525_32176 = state_30484__$1;
(statearr_30525_32176[(2)] = null);

(statearr_30525_32176[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (18))){
var inst_30454 = (state_30484[(2)]);
var state_30484__$1 = state_30484;
var statearr_30526_32177 = state_30484__$1;
(statearr_30526_32177[(2)] = inst_30454);

(statearr_30526_32177[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (8))){
var inst_30428 = (state_30484[(16)]);
var inst_30427 = (state_30484[(15)]);
var inst_30430 = (inst_30428 < inst_30427);
var inst_30431 = inst_30430;
var state_30484__$1 = state_30484;
if(cljs.core.truth_(inst_30431)){
var statearr_30527_32178 = state_30484__$1;
(statearr_30527_32178[(1)] = (10));

} else {
var statearr_30528_32179 = state_30484__$1;
(statearr_30528_32179[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28264__auto__ = null;
var cljs$core$async$state_machine__28264__auto____0 = (function (){
var statearr_30529 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30529[(0)] = cljs$core$async$state_machine__28264__auto__);

(statearr_30529[(1)] = (1));

return statearr_30529;
});
var cljs$core$async$state_machine__28264__auto____1 = (function (state_30484){
while(true){
var ret_value__28265__auto__ = (function (){try{while(true){
var result__28266__auto__ = switch__28263__auto__(state_30484);
if(cljs.core.keyword_identical_QMARK_(result__28266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28266__auto__;
}
break;
}
}catch (e30530){var ex__28267__auto__ = e30530;
var statearr_30531_32182 = state_30484;
(statearr_30531_32182[(2)] = ex__28267__auto__);


if(cljs.core.seq((state_30484[(4)]))){
var statearr_30532_32183 = state_30484;
(statearr_30532_32183[(1)] = cljs.core.first((state_30484[(4)])));

} else {
throw ex__28267__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32185 = state_30484;
state_30484 = G__32185;
continue;
} else {
return ret_value__28265__auto__;
}
break;
}
});
cljs$core$async$state_machine__28264__auto__ = function(state_30484){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28264__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28264__auto____1.call(this,state_30484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28264__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28264__auto____0;
cljs$core$async$state_machine__28264__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28264__auto____1;
return cljs$core$async$state_machine__28264__auto__;
})()
})();
var state__29176__auto__ = (function (){var statearr_30533 = f__29175__auto__();
(statearr_30533[(6)] = c__29174__auto___32115);

return statearr_30533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29176__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__30535 = arguments.length;
switch (G__30535) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__30541 = arguments.length;
switch (G__30541) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__30543 = arguments.length;
switch (G__30543) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__29174__auto___32198 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29175__auto__ = (function (){var switch__28263__auto__ = (function (state_30626){
var state_val_30627 = (state_30626[(1)]);
if((state_val_30627 === (7))){
var state_30626__$1 = state_30626;
var statearr_30631_32199 = state_30626__$1;
(statearr_30631_32199[(2)] = null);

(statearr_30631_32199[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (1))){
var state_30626__$1 = state_30626;
var statearr_30632_32200 = state_30626__$1;
(statearr_30632_32200[(2)] = null);

(statearr_30632_32200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (4))){
var inst_30547 = (state_30626[(7)]);
var inst_30546 = (state_30626[(8)]);
var inst_30549 = (inst_30547 < inst_30546);
var state_30626__$1 = state_30626;
if(cljs.core.truth_(inst_30549)){
var statearr_30633_32201 = state_30626__$1;
(statearr_30633_32201[(1)] = (6));

} else {
var statearr_30634_32202 = state_30626__$1;
(statearr_30634_32202[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (15))){
var inst_30592 = (state_30626[(9)]);
var inst_30597 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_30592);
var state_30626__$1 = state_30626;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30626__$1,(17),out,inst_30597);
} else {
if((state_val_30627 === (13))){
var inst_30592 = (state_30626[(9)]);
var inst_30592__$1 = (state_30626[(2)]);
var inst_30593 = cljs.core.some(cljs.core.nil_QMARK_,inst_30592__$1);
var state_30626__$1 = (function (){var statearr_30638 = state_30626;
(statearr_30638[(9)] = inst_30592__$1);

return statearr_30638;
})();
if(cljs.core.truth_(inst_30593)){
var statearr_30639_32203 = state_30626__$1;
(statearr_30639_32203[(1)] = (14));

} else {
var statearr_30640_32204 = state_30626__$1;
(statearr_30640_32204[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (6))){
var state_30626__$1 = state_30626;
var statearr_30641_32205 = state_30626__$1;
(statearr_30641_32205[(2)] = null);

(statearr_30641_32205[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (17))){
var inst_30599 = (state_30626[(2)]);
var state_30626__$1 = (function (){var statearr_30643 = state_30626;
(statearr_30643[(10)] = inst_30599);

return statearr_30643;
})();
var statearr_30644_32207 = state_30626__$1;
(statearr_30644_32207[(2)] = null);

(statearr_30644_32207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (3))){
var inst_30604 = (state_30626[(2)]);
var state_30626__$1 = state_30626;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30626__$1,inst_30604);
} else {
if((state_val_30627 === (12))){
var _ = (function (){var statearr_30645 = state_30626;
(statearr_30645[(4)] = cljs.core.rest((state_30626[(4)])));

return statearr_30645;
})();
var state_30626__$1 = state_30626;
var ex30642 = (state_30626__$1[(2)]);
var statearr_30646_32211 = state_30626__$1;
(statearr_30646_32211[(5)] = ex30642);


if((ex30642 instanceof Object)){
var statearr_30647_32212 = state_30626__$1;
(statearr_30647_32212[(1)] = (11));

(statearr_30647_32212[(5)] = null);

} else {
throw ex30642;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (2))){
var inst_30545 = cljs.core.reset_BANG_(dctr,cnt);
var inst_30546 = cnt;
var inst_30547 = (0);
var state_30626__$1 = (function (){var statearr_30648 = state_30626;
(statearr_30648[(11)] = inst_30545);

(statearr_30648[(8)] = inst_30546);

(statearr_30648[(7)] = inst_30547);

return statearr_30648;
})();
var statearr_30649_32216 = state_30626__$1;
(statearr_30649_32216[(2)] = null);

(statearr_30649_32216[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (11))){
var inst_30565 = (state_30626[(2)]);
var inst_30566 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_30626__$1 = (function (){var statearr_30650 = state_30626;
(statearr_30650[(12)] = inst_30565);

return statearr_30650;
})();
var statearr_30651_32218 = state_30626__$1;
(statearr_30651_32218[(2)] = inst_30566);

(statearr_30651_32218[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (9))){
var inst_30547 = (state_30626[(7)]);
var _ = (function (){var statearr_30652 = state_30626;
(statearr_30652[(4)] = cljs.core.cons((12),(state_30626[(4)])));

return statearr_30652;
})();
var inst_30578 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_30547) : chs__$1.call(null,inst_30547));
var inst_30579 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_30547) : done.call(null,inst_30547));
var inst_30580 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_30578,inst_30579);
var ___$1 = (function (){var statearr_30653 = state_30626;
(statearr_30653[(4)] = cljs.core.rest((state_30626[(4)])));

return statearr_30653;
})();
var state_30626__$1 = state_30626;
var statearr_30654_32221 = state_30626__$1;
(statearr_30654_32221[(2)] = inst_30580);

(statearr_30654_32221[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (5))){
var inst_30590 = (state_30626[(2)]);
var state_30626__$1 = (function (){var statearr_30655 = state_30626;
(statearr_30655[(13)] = inst_30590);

return statearr_30655;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30626__$1,(13),dchan);
} else {
if((state_val_30627 === (14))){
var inst_30595 = cljs.core.async.close_BANG_(out);
var state_30626__$1 = state_30626;
var statearr_30656_32225 = state_30626__$1;
(statearr_30656_32225[(2)] = inst_30595);

(statearr_30656_32225[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (16))){
var inst_30602 = (state_30626[(2)]);
var state_30626__$1 = state_30626;
var statearr_30657_32226 = state_30626__$1;
(statearr_30657_32226[(2)] = inst_30602);

(statearr_30657_32226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (10))){
var inst_30547 = (state_30626[(7)]);
var inst_30583 = (state_30626[(2)]);
var inst_30584 = (inst_30547 + (1));
var inst_30547__$1 = inst_30584;
var state_30626__$1 = (function (){var statearr_30658 = state_30626;
(statearr_30658[(14)] = inst_30583);

(statearr_30658[(7)] = inst_30547__$1);

return statearr_30658;
})();
var statearr_30659_32227 = state_30626__$1;
(statearr_30659_32227[(2)] = null);

(statearr_30659_32227[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (8))){
var inst_30588 = (state_30626[(2)]);
var state_30626__$1 = state_30626;
var statearr_30660_32228 = state_30626__$1;
(statearr_30660_32228[(2)] = inst_30588);

(statearr_30660_32228[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28264__auto__ = null;
var cljs$core$async$state_machine__28264__auto____0 = (function (){
var statearr_30672 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30672[(0)] = cljs$core$async$state_machine__28264__auto__);

(statearr_30672[(1)] = (1));

return statearr_30672;
});
var cljs$core$async$state_machine__28264__auto____1 = (function (state_30626){
while(true){
var ret_value__28265__auto__ = (function (){try{while(true){
var result__28266__auto__ = switch__28263__auto__(state_30626);
if(cljs.core.keyword_identical_QMARK_(result__28266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28266__auto__;
}
break;
}
}catch (e30673){var ex__28267__auto__ = e30673;
var statearr_30674_32229 = state_30626;
(statearr_30674_32229[(2)] = ex__28267__auto__);


if(cljs.core.seq((state_30626[(4)]))){
var statearr_30675_32230 = state_30626;
(statearr_30675_32230[(1)] = cljs.core.first((state_30626[(4)])));

} else {
throw ex__28267__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32231 = state_30626;
state_30626 = G__32231;
continue;
} else {
return ret_value__28265__auto__;
}
break;
}
});
cljs$core$async$state_machine__28264__auto__ = function(state_30626){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28264__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28264__auto____1.call(this,state_30626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28264__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28264__auto____0;
cljs$core$async$state_machine__28264__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28264__auto____1;
return cljs$core$async$state_machine__28264__auto__;
})()
})();
var state__29176__auto__ = (function (){var statearr_30676 = f__29175__auto__();
(statearr_30676[(6)] = c__29174__auto___32198);

return statearr_30676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29176__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__30679 = arguments.length;
switch (G__30679) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29174__auto___32233 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29175__auto__ = (function (){var switch__28263__auto__ = (function (state_30713){
var state_val_30714 = (state_30713[(1)]);
if((state_val_30714 === (7))){
var inst_30691 = (state_30713[(7)]);
var inst_30692 = (state_30713[(8)]);
var inst_30691__$1 = (state_30713[(2)]);
var inst_30692__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30691__$1,(0),null);
var inst_30693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30691__$1,(1),null);
var inst_30695 = (inst_30692__$1 == null);
var state_30713__$1 = (function (){var statearr_30717 = state_30713;
(statearr_30717[(7)] = inst_30691__$1);

(statearr_30717[(8)] = inst_30692__$1);

(statearr_30717[(9)] = inst_30693);

return statearr_30717;
})();
if(cljs.core.truth_(inst_30695)){
var statearr_30718_32234 = state_30713__$1;
(statearr_30718_32234[(1)] = (8));

} else {
var statearr_30721_32236 = state_30713__$1;
(statearr_30721_32236[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30714 === (1))){
var inst_30680 = cljs.core.vec(chs);
var inst_30681 = inst_30680;
var state_30713__$1 = (function (){var statearr_30723 = state_30713;
(statearr_30723[(10)] = inst_30681);

return statearr_30723;
})();
var statearr_30725_32238 = state_30713__$1;
(statearr_30725_32238[(2)] = null);

(statearr_30725_32238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30714 === (4))){
var inst_30681 = (state_30713[(10)]);
var state_30713__$1 = state_30713;
return cljs.core.async.ioc_alts_BANG_(state_30713__$1,(7),inst_30681);
} else {
if((state_val_30714 === (6))){
var inst_30709 = (state_30713[(2)]);
var state_30713__$1 = state_30713;
var statearr_30726_32239 = state_30713__$1;
(statearr_30726_32239[(2)] = inst_30709);

(statearr_30726_32239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30714 === (3))){
var inst_30711 = (state_30713[(2)]);
var state_30713__$1 = state_30713;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30713__$1,inst_30711);
} else {
if((state_val_30714 === (2))){
var inst_30681 = (state_30713[(10)]);
var inst_30684 = cljs.core.count(inst_30681);
var inst_30685 = (inst_30684 > (0));
var state_30713__$1 = state_30713;
if(cljs.core.truth_(inst_30685)){
var statearr_30728_32242 = state_30713__$1;
(statearr_30728_32242[(1)] = (4));

} else {
var statearr_30729_32243 = state_30713__$1;
(statearr_30729_32243[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30714 === (11))){
var inst_30681 = (state_30713[(10)]);
var inst_30702 = (state_30713[(2)]);
var tmp30727 = inst_30681;
var inst_30681__$1 = tmp30727;
var state_30713__$1 = (function (){var statearr_30730 = state_30713;
(statearr_30730[(11)] = inst_30702);

(statearr_30730[(10)] = inst_30681__$1);

return statearr_30730;
})();
var statearr_30731_32244 = state_30713__$1;
(statearr_30731_32244[(2)] = null);

(statearr_30731_32244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30714 === (9))){
var inst_30692 = (state_30713[(8)]);
var state_30713__$1 = state_30713;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30713__$1,(11),out,inst_30692);
} else {
if((state_val_30714 === (5))){
var inst_30707 = cljs.core.async.close_BANG_(out);
var state_30713__$1 = state_30713;
var statearr_30735_32245 = state_30713__$1;
(statearr_30735_32245[(2)] = inst_30707);

(statearr_30735_32245[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30714 === (10))){
var inst_30705 = (state_30713[(2)]);
var state_30713__$1 = state_30713;
var statearr_30736_32246 = state_30713__$1;
(statearr_30736_32246[(2)] = inst_30705);

(statearr_30736_32246[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30714 === (8))){
var inst_30681 = (state_30713[(10)]);
var inst_30691 = (state_30713[(7)]);
var inst_30692 = (state_30713[(8)]);
var inst_30693 = (state_30713[(9)]);
var inst_30697 = (function (){var cs = inst_30681;
var vec__30687 = inst_30691;
var v = inst_30692;
var c = inst_30693;
return (function (p1__30677_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__30677_SHARP_);
});
})();
var inst_30698 = cljs.core.filterv(inst_30697,inst_30681);
var inst_30681__$1 = inst_30698;
var state_30713__$1 = (function (){var statearr_30750 = state_30713;
(statearr_30750[(10)] = inst_30681__$1);

return statearr_30750;
})();
var statearr_30755_32247 = state_30713__$1;
(statearr_30755_32247[(2)] = null);

(statearr_30755_32247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28264__auto__ = null;
var cljs$core$async$state_machine__28264__auto____0 = (function (){
var statearr_30765 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30765[(0)] = cljs$core$async$state_machine__28264__auto__);

(statearr_30765[(1)] = (1));

return statearr_30765;
});
var cljs$core$async$state_machine__28264__auto____1 = (function (state_30713){
while(true){
var ret_value__28265__auto__ = (function (){try{while(true){
var result__28266__auto__ = switch__28263__auto__(state_30713);
if(cljs.core.keyword_identical_QMARK_(result__28266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28266__auto__;
}
break;
}
}catch (e30776){var ex__28267__auto__ = e30776;
var statearr_30781_32249 = state_30713;
(statearr_30781_32249[(2)] = ex__28267__auto__);


if(cljs.core.seq((state_30713[(4)]))){
var statearr_30782_32250 = state_30713;
(statearr_30782_32250[(1)] = cljs.core.first((state_30713[(4)])));

} else {
throw ex__28267__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32251 = state_30713;
state_30713 = G__32251;
continue;
} else {
return ret_value__28265__auto__;
}
break;
}
});
cljs$core$async$state_machine__28264__auto__ = function(state_30713){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28264__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28264__auto____1.call(this,state_30713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28264__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28264__auto____0;
cljs$core$async$state_machine__28264__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28264__auto____1;
return cljs$core$async$state_machine__28264__auto__;
})()
})();
var state__29176__auto__ = (function (){var statearr_30785 = f__29175__auto__();
(statearr_30785[(6)] = c__29174__auto___32233);

return statearr_30785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29176__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__30787 = arguments.length;
switch (G__30787) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29174__auto___32253 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29175__auto__ = (function (){var switch__28263__auto__ = (function (state_30811){
var state_val_30812 = (state_30811[(1)]);
if((state_val_30812 === (7))){
var inst_30793 = (state_30811[(7)]);
var inst_30793__$1 = (state_30811[(2)]);
var inst_30794 = (inst_30793__$1 == null);
var inst_30795 = cljs.core.not(inst_30794);
var state_30811__$1 = (function (){var statearr_30813 = state_30811;
(statearr_30813[(7)] = inst_30793__$1);

return statearr_30813;
})();
if(inst_30795){
var statearr_30814_32257 = state_30811__$1;
(statearr_30814_32257[(1)] = (8));

} else {
var statearr_30815_32258 = state_30811__$1;
(statearr_30815_32258[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30812 === (1))){
var inst_30788 = (0);
var state_30811__$1 = (function (){var statearr_30816 = state_30811;
(statearr_30816[(8)] = inst_30788);

return statearr_30816;
})();
var statearr_30817_32259 = state_30811__$1;
(statearr_30817_32259[(2)] = null);

(statearr_30817_32259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30812 === (4))){
var state_30811__$1 = state_30811;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30811__$1,(7),ch);
} else {
if((state_val_30812 === (6))){
var inst_30806 = (state_30811[(2)]);
var state_30811__$1 = state_30811;
var statearr_30818_32261 = state_30811__$1;
(statearr_30818_32261[(2)] = inst_30806);

(statearr_30818_32261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30812 === (3))){
var inst_30808 = (state_30811[(2)]);
var inst_30809 = cljs.core.async.close_BANG_(out);
var state_30811__$1 = (function (){var statearr_30819 = state_30811;
(statearr_30819[(9)] = inst_30808);

return statearr_30819;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30811__$1,inst_30809);
} else {
if((state_val_30812 === (2))){
var inst_30788 = (state_30811[(8)]);
var inst_30790 = (inst_30788 < n);
var state_30811__$1 = state_30811;
if(cljs.core.truth_(inst_30790)){
var statearr_30820_32262 = state_30811__$1;
(statearr_30820_32262[(1)] = (4));

} else {
var statearr_30821_32263 = state_30811__$1;
(statearr_30821_32263[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30812 === (11))){
var inst_30788 = (state_30811[(8)]);
var inst_30798 = (state_30811[(2)]);
var inst_30799 = (inst_30788 + (1));
var inst_30788__$1 = inst_30799;
var state_30811__$1 = (function (){var statearr_30822 = state_30811;
(statearr_30822[(10)] = inst_30798);

(statearr_30822[(8)] = inst_30788__$1);

return statearr_30822;
})();
var statearr_30823_32264 = state_30811__$1;
(statearr_30823_32264[(2)] = null);

(statearr_30823_32264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30812 === (9))){
var state_30811__$1 = state_30811;
var statearr_30824_32265 = state_30811__$1;
(statearr_30824_32265[(2)] = null);

(statearr_30824_32265[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30812 === (5))){
var state_30811__$1 = state_30811;
var statearr_30825_32266 = state_30811__$1;
(statearr_30825_32266[(2)] = null);

(statearr_30825_32266[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30812 === (10))){
var inst_30803 = (state_30811[(2)]);
var state_30811__$1 = state_30811;
var statearr_30826_32267 = state_30811__$1;
(statearr_30826_32267[(2)] = inst_30803);

(statearr_30826_32267[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30812 === (8))){
var inst_30793 = (state_30811[(7)]);
var state_30811__$1 = state_30811;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30811__$1,(11),out,inst_30793);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28264__auto__ = null;
var cljs$core$async$state_machine__28264__auto____0 = (function (){
var statearr_30827 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30827[(0)] = cljs$core$async$state_machine__28264__auto__);

(statearr_30827[(1)] = (1));

return statearr_30827;
});
var cljs$core$async$state_machine__28264__auto____1 = (function (state_30811){
while(true){
var ret_value__28265__auto__ = (function (){try{while(true){
var result__28266__auto__ = switch__28263__auto__(state_30811);
if(cljs.core.keyword_identical_QMARK_(result__28266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28266__auto__;
}
break;
}
}catch (e30828){var ex__28267__auto__ = e30828;
var statearr_30830_32270 = state_30811;
(statearr_30830_32270[(2)] = ex__28267__auto__);


if(cljs.core.seq((state_30811[(4)]))){
var statearr_30832_32271 = state_30811;
(statearr_30832_32271[(1)] = cljs.core.first((state_30811[(4)])));

} else {
throw ex__28267__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32272 = state_30811;
state_30811 = G__32272;
continue;
} else {
return ret_value__28265__auto__;
}
break;
}
});
cljs$core$async$state_machine__28264__auto__ = function(state_30811){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28264__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28264__auto____1.call(this,state_30811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28264__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28264__auto____0;
cljs$core$async$state_machine__28264__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28264__auto____1;
return cljs$core$async$state_machine__28264__auto__;
})()
})();
var state__29176__auto__ = (function (){var statearr_30833 = f__29175__auto__();
(statearr_30833[(6)] = c__29174__auto___32253);

return statearr_30833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29176__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30851 = (function (f,ch,meta30847,_,fn1,meta30852){
this.f = f;
this.ch = ch;
this.meta30847 = meta30847;
this._ = _;
this.fn1 = fn1;
this.meta30852 = meta30852;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30851.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30853,meta30852__$1){
var self__ = this;
var _30853__$1 = this;
return (new cljs.core.async.t_cljs$core$async30851(self__.f,self__.ch,self__.meta30847,self__._,self__.fn1,meta30852__$1));
}));

(cljs.core.async.t_cljs$core$async30851.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30853){
var self__ = this;
var _30853__$1 = this;
return self__.meta30852;
}));

(cljs.core.async.t_cljs$core$async30851.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30851.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async30851.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30851.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__30845_SHARP_){
var G__30854 = (((p1__30845_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__30845_SHARP_) : self__.f.call(null,p1__30845_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__30854) : f1.call(null,G__30854));
});
}));

(cljs.core.async.t_cljs$core$async30851.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30847","meta30847",616586455,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30846","cljs.core.async/t_cljs$core$async30846",-2112358310,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30852","meta30852",-1269425162,null)], null);
}));

(cljs.core.async.t_cljs$core$async30851.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30851.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30851");

(cljs.core.async.t_cljs$core$async30851.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async30851");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30851.
 */
cljs.core.async.__GT_t_cljs$core$async30851 = (function cljs$core$async$__GT_t_cljs$core$async30851(f,ch,meta30847,_,fn1,meta30852){
return (new cljs.core.async.t_cljs$core$async30851(f,ch,meta30847,_,fn1,meta30852));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30846 = (function (f,ch,meta30847){
this.f = f;
this.ch = ch;
this.meta30847 = meta30847;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30848,meta30847__$1){
var self__ = this;
var _30848__$1 = this;
return (new cljs.core.async.t_cljs$core$async30846(self__.f,self__.ch,meta30847__$1));
}));

(cljs.core.async.t_cljs$core$async30846.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30848){
var self__ = this;
var _30848__$1 = this;
return self__.meta30847;
}));

(cljs.core.async.t_cljs$core$async30846.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30846.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30846.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30846.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30846.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async30851(self__.f,self__.ch,self__.meta30847,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5160__auto__ = ret;
if(cljs.core.truth_(and__5160__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5160__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__30856 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__30856) : self__.f.call(null,G__30856));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async30846.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30846.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async30846.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30847","meta30847",616586455,null)], null);
}));

(cljs.core.async.t_cljs$core$async30846.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30846.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30846");

(cljs.core.async.t_cljs$core$async30846.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async30846");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30846.
 */
cljs.core.async.__GT_t_cljs$core$async30846 = (function cljs$core$async$__GT_t_cljs$core$async30846(f,ch,meta30847){
return (new cljs.core.async.t_cljs$core$async30846(f,ch,meta30847));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async30846(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30859 = (function (f,ch,meta30860){
this.f = f;
this.ch = ch;
this.meta30860 = meta30860;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30861,meta30860__$1){
var self__ = this;
var _30861__$1 = this;
return (new cljs.core.async.t_cljs$core$async30859(self__.f,self__.ch,meta30860__$1));
}));

(cljs.core.async.t_cljs$core$async30859.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30861){
var self__ = this;
var _30861__$1 = this;
return self__.meta30860;
}));

(cljs.core.async.t_cljs$core$async30859.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30859.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30859.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30859.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async30859.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30859.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async30859.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30860","meta30860",-1975305951,null)], null);
}));

(cljs.core.async.t_cljs$core$async30859.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30859.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30859");

(cljs.core.async.t_cljs$core$async30859.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async30859");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30859.
 */
cljs.core.async.__GT_t_cljs$core$async30859 = (function cljs$core$async$__GT_t_cljs$core$async30859(f,ch,meta30860){
return (new cljs.core.async.t_cljs$core$async30859(f,ch,meta30860));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async30859(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30872 = (function (p,ch,meta30873){
this.p = p;
this.ch = ch;
this.meta30873 = meta30873;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30872.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30874,meta30873__$1){
var self__ = this;
var _30874__$1 = this;
return (new cljs.core.async.t_cljs$core$async30872(self__.p,self__.ch,meta30873__$1));
}));

(cljs.core.async.t_cljs$core$async30872.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30874){
var self__ = this;
var _30874__$1 = this;
return self__.meta30873;
}));

(cljs.core.async.t_cljs$core$async30872.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30872.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30872.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30872.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30872.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async30872.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30872.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async30872.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30873","meta30873",-1286441013,null)], null);
}));

(cljs.core.async.t_cljs$core$async30872.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30872.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30872");

(cljs.core.async.t_cljs$core$async30872.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async30872");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30872.
 */
cljs.core.async.__GT_t_cljs$core$async30872 = (function cljs$core$async$__GT_t_cljs$core$async30872(p,ch,meta30873){
return (new cljs.core.async.t_cljs$core$async30872(p,ch,meta30873));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async30872(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__30879 = arguments.length;
switch (G__30879) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29174__auto___32324 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29175__auto__ = (function (){var switch__28263__auto__ = (function (state_30901){
var state_val_30902 = (state_30901[(1)]);
if((state_val_30902 === (7))){
var inst_30897 = (state_30901[(2)]);
var state_30901__$1 = state_30901;
var statearr_30903_32328 = state_30901__$1;
(statearr_30903_32328[(2)] = inst_30897);

(statearr_30903_32328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30902 === (1))){
var state_30901__$1 = state_30901;
var statearr_30904_32330 = state_30901__$1;
(statearr_30904_32330[(2)] = null);

(statearr_30904_32330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30902 === (4))){
var inst_30883 = (state_30901[(7)]);
var inst_30883__$1 = (state_30901[(2)]);
var inst_30884 = (inst_30883__$1 == null);
var state_30901__$1 = (function (){var statearr_30912 = state_30901;
(statearr_30912[(7)] = inst_30883__$1);

return statearr_30912;
})();
if(cljs.core.truth_(inst_30884)){
var statearr_30913_32331 = state_30901__$1;
(statearr_30913_32331[(1)] = (5));

} else {
var statearr_30914_32332 = state_30901__$1;
(statearr_30914_32332[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30902 === (6))){
var inst_30883 = (state_30901[(7)]);
var inst_30888 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30883) : p.call(null,inst_30883));
var state_30901__$1 = state_30901;
if(cljs.core.truth_(inst_30888)){
var statearr_30915_32333 = state_30901__$1;
(statearr_30915_32333[(1)] = (8));

} else {
var statearr_30917_32335 = state_30901__$1;
(statearr_30917_32335[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30902 === (3))){
var inst_30899 = (state_30901[(2)]);
var state_30901__$1 = state_30901;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30901__$1,inst_30899);
} else {
if((state_val_30902 === (2))){
var state_30901__$1 = state_30901;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30901__$1,(4),ch);
} else {
if((state_val_30902 === (11))){
var inst_30891 = (state_30901[(2)]);
var state_30901__$1 = state_30901;
var statearr_30918_32336 = state_30901__$1;
(statearr_30918_32336[(2)] = inst_30891);

(statearr_30918_32336[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30902 === (9))){
var state_30901__$1 = state_30901;
var statearr_30928_32337 = state_30901__$1;
(statearr_30928_32337[(2)] = null);

(statearr_30928_32337[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30902 === (5))){
var inst_30886 = cljs.core.async.close_BANG_(out);
var state_30901__$1 = state_30901;
var statearr_30929_32338 = state_30901__$1;
(statearr_30929_32338[(2)] = inst_30886);

(statearr_30929_32338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30902 === (10))){
var inst_30894 = (state_30901[(2)]);
var state_30901__$1 = (function (){var statearr_30930 = state_30901;
(statearr_30930[(8)] = inst_30894);

return statearr_30930;
})();
var statearr_30931_32342 = state_30901__$1;
(statearr_30931_32342[(2)] = null);

(statearr_30931_32342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30902 === (8))){
var inst_30883 = (state_30901[(7)]);
var state_30901__$1 = state_30901;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30901__$1,(11),out,inst_30883);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28264__auto__ = null;
var cljs$core$async$state_machine__28264__auto____0 = (function (){
var statearr_30936 = [null,null,null,null,null,null,null,null,null];
(statearr_30936[(0)] = cljs$core$async$state_machine__28264__auto__);

(statearr_30936[(1)] = (1));

return statearr_30936;
});
var cljs$core$async$state_machine__28264__auto____1 = (function (state_30901){
while(true){
var ret_value__28265__auto__ = (function (){try{while(true){
var result__28266__auto__ = switch__28263__auto__(state_30901);
if(cljs.core.keyword_identical_QMARK_(result__28266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28266__auto__;
}
break;
}
}catch (e30937){var ex__28267__auto__ = e30937;
var statearr_30938_32343 = state_30901;
(statearr_30938_32343[(2)] = ex__28267__auto__);


if(cljs.core.seq((state_30901[(4)]))){
var statearr_30946_32344 = state_30901;
(statearr_30946_32344[(1)] = cljs.core.first((state_30901[(4)])));

} else {
throw ex__28267__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32349 = state_30901;
state_30901 = G__32349;
continue;
} else {
return ret_value__28265__auto__;
}
break;
}
});
cljs$core$async$state_machine__28264__auto__ = function(state_30901){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28264__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28264__auto____1.call(this,state_30901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28264__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28264__auto____0;
cljs$core$async$state_machine__28264__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28264__auto____1;
return cljs$core$async$state_machine__28264__auto__;
})()
})();
var state__29176__auto__ = (function (){var statearr_30947 = f__29175__auto__();
(statearr_30947[(6)] = c__29174__auto___32324);

return statearr_30947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29176__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__30950 = arguments.length;
switch (G__30950) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29174__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29175__auto__ = (function (){var switch__28263__auto__ = (function (state_31024){
var state_val_31025 = (state_31024[(1)]);
if((state_val_31025 === (7))){
var inst_31019 = (state_31024[(2)]);
var state_31024__$1 = state_31024;
var statearr_31026_32354 = state_31024__$1;
(statearr_31026_32354[(2)] = inst_31019);

(statearr_31026_32354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31025 === (20))){
var inst_30985 = (state_31024[(7)]);
var inst_30997 = (state_31024[(2)]);
var inst_30998 = cljs.core.next(inst_30985);
var inst_30971 = inst_30998;
var inst_30972 = null;
var inst_30973 = (0);
var inst_30974 = (0);
var state_31024__$1 = (function (){var statearr_31027 = state_31024;
(statearr_31027[(8)] = inst_30997);

(statearr_31027[(9)] = inst_30971);

(statearr_31027[(10)] = inst_30972);

(statearr_31027[(11)] = inst_30973);

(statearr_31027[(12)] = inst_30974);

return statearr_31027;
})();
var statearr_31028_32356 = state_31024__$1;
(statearr_31028_32356[(2)] = null);

(statearr_31028_32356[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31025 === (1))){
var state_31024__$1 = state_31024;
var statearr_31029_32357 = state_31024__$1;
(statearr_31029_32357[(2)] = null);

(statearr_31029_32357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31025 === (4))){
var inst_30960 = (state_31024[(13)]);
var inst_30960__$1 = (state_31024[(2)]);
var inst_30961 = (inst_30960__$1 == null);
var state_31024__$1 = (function (){var statearr_31031 = state_31024;
(statearr_31031[(13)] = inst_30960__$1);

return statearr_31031;
})();
if(cljs.core.truth_(inst_30961)){
var statearr_31032_32358 = state_31024__$1;
(statearr_31032_32358[(1)] = (5));

} else {
var statearr_31033_32359 = state_31024__$1;
(statearr_31033_32359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31025 === (15))){
var state_31024__$1 = state_31024;
var statearr_31044_32360 = state_31024__$1;
(statearr_31044_32360[(2)] = null);

(statearr_31044_32360[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31025 === (21))){
var state_31024__$1 = state_31024;
var statearr_31045_32361 = state_31024__$1;
(statearr_31045_32361[(2)] = null);

(statearr_31045_32361[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31025 === (13))){
var inst_30974 = (state_31024[(12)]);
var inst_30971 = (state_31024[(9)]);
var inst_30972 = (state_31024[(10)]);
var inst_30973 = (state_31024[(11)]);
var inst_30981 = (state_31024[(2)]);
var inst_30982 = (inst_30974 + (1));
var tmp31038 = inst_30972;
var tmp31039 = inst_30973;
var tmp31040 = inst_30971;
var inst_30971__$1 = tmp31040;
var inst_30972__$1 = tmp31038;
var inst_30973__$1 = tmp31039;
var inst_30974__$1 = inst_30982;
var state_31024__$1 = (function (){var statearr_31047 = state_31024;
(statearr_31047[(14)] = inst_30981);

(statearr_31047[(9)] = inst_30971__$1);

(statearr_31047[(10)] = inst_30972__$1);

(statearr_31047[(11)] = inst_30973__$1);

(statearr_31047[(12)] = inst_30974__$1);

return statearr_31047;
})();
var statearr_31048_32366 = state_31024__$1;
(statearr_31048_32366[(2)] = null);

(statearr_31048_32366[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31025 === (22))){
var state_31024__$1 = state_31024;
var statearr_31049_32367 = state_31024__$1;
(statearr_31049_32367[(2)] = null);

(statearr_31049_32367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31025 === (6))){
var inst_30960 = (state_31024[(13)]);
var inst_30969 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_30960) : f.call(null,inst_30960));
var inst_30970 = cljs.core.seq(inst_30969);
var inst_30971 = inst_30970;
var inst_30972 = null;
var inst_30973 = (0);
var inst_30974 = (0);
var state_31024__$1 = (function (){var statearr_31050 = state_31024;
(statearr_31050[(9)] = inst_30971);

(statearr_31050[(10)] = inst_30972);

(statearr_31050[(11)] = inst_30973);

(statearr_31050[(12)] = inst_30974);

return statearr_31050;
})();
var statearr_31051_32375 = state_31024__$1;
(statearr_31051_32375[(2)] = null);

(statearr_31051_32375[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31025 === (17))){
var inst_30985 = (state_31024[(7)]);
var inst_30990 = cljs.core.chunk_first(inst_30985);
var inst_30991 = cljs.core.chunk_rest(inst_30985);
var inst_30992 = cljs.core.count(inst_30990);
var inst_30971 = inst_30991;
var inst_30972 = inst_30990;
var inst_30973 = inst_30992;
var inst_30974 = (0);
var state_31024__$1 = (function (){var statearr_31054 = state_31024;
(statearr_31054[(9)] = inst_30971);

(statearr_31054[(10)] = inst_30972);

(statearr_31054[(11)] = inst_30973);

(statearr_31054[(12)] = inst_30974);

return statearr_31054;
})();
var statearr_31055_32381 = state_31024__$1;
(statearr_31055_32381[(2)] = null);

(statearr_31055_32381[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31025 === (3))){
var inst_31021 = (state_31024[(2)]);
var state_31024__$1 = state_31024;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31024__$1,inst_31021);
} else {
if((state_val_31025 === (12))){
var inst_31009 = (state_31024[(2)]);
var state_31024__$1 = state_31024;
var statearr_31058_32393 = state_31024__$1;
(statearr_31058_32393[(2)] = inst_31009);

(statearr_31058_32393[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31025 === (2))){
var state_31024__$1 = state_31024;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31024__$1,(4),in$);
} else {
if((state_val_31025 === (23))){
var inst_31017 = (state_31024[(2)]);
var state_31024__$1 = state_31024;
var statearr_31059_32394 = state_31024__$1;
(statearr_31059_32394[(2)] = inst_31017);

(statearr_31059_32394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31025 === (19))){
var inst_31001 = (state_31024[(2)]);
var state_31024__$1 = state_31024;
var statearr_31060_32402 = state_31024__$1;
(statearr_31060_32402[(2)] = inst_31001);

(statearr_31060_32402[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31025 === (11))){
var inst_30971 = (state_31024[(9)]);
var inst_30985 = (state_31024[(7)]);
var inst_30985__$1 = cljs.core.seq(inst_30971);
var state_31024__$1 = (function (){var statearr_31062 = state_31024;
(statearr_31062[(7)] = inst_30985__$1);

return statearr_31062;
})();
if(inst_30985__$1){
var statearr_31063_32404 = state_31024__$1;
(statearr_31063_32404[(1)] = (14));

} else {
var statearr_31064_32405 = state_31024__$1;
(statearr_31064_32405[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31025 === (9))){
var inst_31011 = (state_31024[(2)]);
var inst_31012 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_31024__$1 = (function (){var statearr_31066 = state_31024;
(statearr_31066[(15)] = inst_31011);

return statearr_31066;
})();
if(cljs.core.truth_(inst_31012)){
var statearr_31067_32413 = state_31024__$1;
(statearr_31067_32413[(1)] = (21));

} else {
var statearr_31068_32414 = state_31024__$1;
(statearr_31068_32414[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31025 === (5))){
var inst_30963 = cljs.core.async.close_BANG_(out);
var state_31024__$1 = state_31024;
var statearr_31069_32415 = state_31024__$1;
(statearr_31069_32415[(2)] = inst_30963);

(statearr_31069_32415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31025 === (14))){
var inst_30985 = (state_31024[(7)]);
var inst_30988 = cljs.core.chunked_seq_QMARK_(inst_30985);
var state_31024__$1 = state_31024;
if(inst_30988){
var statearr_31070_32416 = state_31024__$1;
(statearr_31070_32416[(1)] = (17));

} else {
var statearr_31071_32417 = state_31024__$1;
(statearr_31071_32417[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31025 === (16))){
var inst_31007 = (state_31024[(2)]);
var state_31024__$1 = state_31024;
var statearr_31072_32418 = state_31024__$1;
(statearr_31072_32418[(2)] = inst_31007);

(statearr_31072_32418[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31025 === (10))){
var inst_30972 = (state_31024[(10)]);
var inst_30974 = (state_31024[(12)]);
var inst_30979 = cljs.core._nth(inst_30972,inst_30974);
var state_31024__$1 = state_31024;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31024__$1,(13),out,inst_30979);
} else {
if((state_val_31025 === (18))){
var inst_30985 = (state_31024[(7)]);
var inst_30995 = cljs.core.first(inst_30985);
var state_31024__$1 = state_31024;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31024__$1,(20),out,inst_30995);
} else {
if((state_val_31025 === (8))){
var inst_30974 = (state_31024[(12)]);
var inst_30973 = (state_31024[(11)]);
var inst_30976 = (inst_30974 < inst_30973);
var inst_30977 = inst_30976;
var state_31024__$1 = state_31024;
if(cljs.core.truth_(inst_30977)){
var statearr_31073_32419 = state_31024__$1;
(statearr_31073_32419[(1)] = (10));

} else {
var statearr_31074_32420 = state_31024__$1;
(statearr_31074_32420[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28264__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28264__auto____0 = (function (){
var statearr_31075 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31075[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28264__auto__);

(statearr_31075[(1)] = (1));

return statearr_31075;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28264__auto____1 = (function (state_31024){
while(true){
var ret_value__28265__auto__ = (function (){try{while(true){
var result__28266__auto__ = switch__28263__auto__(state_31024);
if(cljs.core.keyword_identical_QMARK_(result__28266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28266__auto__;
}
break;
}
}catch (e31076){var ex__28267__auto__ = e31076;
var statearr_31077_32421 = state_31024;
(statearr_31077_32421[(2)] = ex__28267__auto__);


if(cljs.core.seq((state_31024[(4)]))){
var statearr_31078_32422 = state_31024;
(statearr_31078_32422[(1)] = cljs.core.first((state_31024[(4)])));

} else {
throw ex__28267__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32423 = state_31024;
state_31024 = G__32423;
continue;
} else {
return ret_value__28265__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28264__auto__ = function(state_31024){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28264__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28264__auto____1.call(this,state_31024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28264__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28264__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28264__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28264__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28264__auto__;
})()
})();
var state__29176__auto__ = (function (){var statearr_31083 = f__29175__auto__();
(statearr_31083[(6)] = c__29174__auto__);

return statearr_31083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29176__auto__);
}));

return c__29174__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__31086 = arguments.length;
switch (G__31086) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__31101 = arguments.length;
switch (G__31101) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__31103 = arguments.length;
switch (G__31103) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29174__auto___32431 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29175__auto__ = (function (){var switch__28263__auto__ = (function (state_31127){
var state_val_31128 = (state_31127[(1)]);
if((state_val_31128 === (7))){
var inst_31122 = (state_31127[(2)]);
var state_31127__$1 = state_31127;
var statearr_31129_32433 = state_31127__$1;
(statearr_31129_32433[(2)] = inst_31122);

(statearr_31129_32433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31128 === (1))){
var inst_31104 = null;
var state_31127__$1 = (function (){var statearr_31130 = state_31127;
(statearr_31130[(7)] = inst_31104);

return statearr_31130;
})();
var statearr_31131_32434 = state_31127__$1;
(statearr_31131_32434[(2)] = null);

(statearr_31131_32434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31128 === (4))){
var inst_31107 = (state_31127[(8)]);
var inst_31107__$1 = (state_31127[(2)]);
var inst_31108 = (inst_31107__$1 == null);
var inst_31109 = cljs.core.not(inst_31108);
var state_31127__$1 = (function (){var statearr_31132 = state_31127;
(statearr_31132[(8)] = inst_31107__$1);

return statearr_31132;
})();
if(inst_31109){
var statearr_31133_32436 = state_31127__$1;
(statearr_31133_32436[(1)] = (5));

} else {
var statearr_31134_32437 = state_31127__$1;
(statearr_31134_32437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31128 === (6))){
var state_31127__$1 = state_31127;
var statearr_31135_32438 = state_31127__$1;
(statearr_31135_32438[(2)] = null);

(statearr_31135_32438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31128 === (3))){
var inst_31124 = (state_31127[(2)]);
var inst_31125 = cljs.core.async.close_BANG_(out);
var state_31127__$1 = (function (){var statearr_31136 = state_31127;
(statearr_31136[(9)] = inst_31124);

return statearr_31136;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31127__$1,inst_31125);
} else {
if((state_val_31128 === (2))){
var state_31127__$1 = state_31127;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31127__$1,(4),ch);
} else {
if((state_val_31128 === (11))){
var inst_31107 = (state_31127[(8)]);
var inst_31116 = (state_31127[(2)]);
var inst_31104 = inst_31107;
var state_31127__$1 = (function (){var statearr_31143 = state_31127;
(statearr_31143[(10)] = inst_31116);

(statearr_31143[(7)] = inst_31104);

return statearr_31143;
})();
var statearr_31144_32440 = state_31127__$1;
(statearr_31144_32440[(2)] = null);

(statearr_31144_32440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31128 === (9))){
var inst_31107 = (state_31127[(8)]);
var state_31127__$1 = state_31127;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31127__$1,(11),out,inst_31107);
} else {
if((state_val_31128 === (5))){
var inst_31107 = (state_31127[(8)]);
var inst_31104 = (state_31127[(7)]);
var inst_31111 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31107,inst_31104);
var state_31127__$1 = state_31127;
if(inst_31111){
var statearr_31146_32442 = state_31127__$1;
(statearr_31146_32442[(1)] = (8));

} else {
var statearr_31147_32443 = state_31127__$1;
(statearr_31147_32443[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31128 === (10))){
var inst_31119 = (state_31127[(2)]);
var state_31127__$1 = state_31127;
var statearr_31148_32444 = state_31127__$1;
(statearr_31148_32444[(2)] = inst_31119);

(statearr_31148_32444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31128 === (8))){
var inst_31104 = (state_31127[(7)]);
var tmp31145 = inst_31104;
var inst_31104__$1 = tmp31145;
var state_31127__$1 = (function (){var statearr_31149 = state_31127;
(statearr_31149[(7)] = inst_31104__$1);

return statearr_31149;
})();
var statearr_31150_32445 = state_31127__$1;
(statearr_31150_32445[(2)] = null);

(statearr_31150_32445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28264__auto__ = null;
var cljs$core$async$state_machine__28264__auto____0 = (function (){
var statearr_31151 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31151[(0)] = cljs$core$async$state_machine__28264__auto__);

(statearr_31151[(1)] = (1));

return statearr_31151;
});
var cljs$core$async$state_machine__28264__auto____1 = (function (state_31127){
while(true){
var ret_value__28265__auto__ = (function (){try{while(true){
var result__28266__auto__ = switch__28263__auto__(state_31127);
if(cljs.core.keyword_identical_QMARK_(result__28266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28266__auto__;
}
break;
}
}catch (e31152){var ex__28267__auto__ = e31152;
var statearr_31159_32446 = state_31127;
(statearr_31159_32446[(2)] = ex__28267__auto__);


if(cljs.core.seq((state_31127[(4)]))){
var statearr_31160_32447 = state_31127;
(statearr_31160_32447[(1)] = cljs.core.first((state_31127[(4)])));

} else {
throw ex__28267__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32448 = state_31127;
state_31127 = G__32448;
continue;
} else {
return ret_value__28265__auto__;
}
break;
}
});
cljs$core$async$state_machine__28264__auto__ = function(state_31127){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28264__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28264__auto____1.call(this,state_31127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28264__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28264__auto____0;
cljs$core$async$state_machine__28264__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28264__auto____1;
return cljs$core$async$state_machine__28264__auto__;
})()
})();
var state__29176__auto__ = (function (){var statearr_31161 = f__29175__auto__();
(statearr_31161[(6)] = c__29174__auto___32431);

return statearr_31161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29176__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__31164 = arguments.length;
switch (G__31164) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29174__auto___32467 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29175__auto__ = (function (){var switch__28263__auto__ = (function (state_31215){
var state_val_31216 = (state_31215[(1)]);
if((state_val_31216 === (7))){
var inst_31211 = (state_31215[(2)]);
var state_31215__$1 = state_31215;
var statearr_31222_32471 = state_31215__$1;
(statearr_31222_32471[(2)] = inst_31211);

(statearr_31222_32471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (1))){
var inst_31166 = (new Array(n));
var inst_31167 = inst_31166;
var inst_31168 = (0);
var state_31215__$1 = (function (){var statearr_31223 = state_31215;
(statearr_31223[(7)] = inst_31167);

(statearr_31223[(8)] = inst_31168);

return statearr_31223;
})();
var statearr_31224_32478 = state_31215__$1;
(statearr_31224_32478[(2)] = null);

(statearr_31224_32478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (4))){
var inst_31171 = (state_31215[(9)]);
var inst_31171__$1 = (state_31215[(2)]);
var inst_31172 = (inst_31171__$1 == null);
var inst_31173 = cljs.core.not(inst_31172);
var state_31215__$1 = (function (){var statearr_31225 = state_31215;
(statearr_31225[(9)] = inst_31171__$1);

return statearr_31225;
})();
if(inst_31173){
var statearr_31226_32480 = state_31215__$1;
(statearr_31226_32480[(1)] = (5));

} else {
var statearr_31227_32481 = state_31215__$1;
(statearr_31227_32481[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (15))){
var inst_31205 = (state_31215[(2)]);
var state_31215__$1 = state_31215;
var statearr_31228_32486 = state_31215__$1;
(statearr_31228_32486[(2)] = inst_31205);

(statearr_31228_32486[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (13))){
var state_31215__$1 = state_31215;
var statearr_31229_32493 = state_31215__$1;
(statearr_31229_32493[(2)] = null);

(statearr_31229_32493[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (6))){
var inst_31168 = (state_31215[(8)]);
var inst_31200 = (inst_31168 > (0));
var state_31215__$1 = state_31215;
if(cljs.core.truth_(inst_31200)){
var statearr_31230_32500 = state_31215__$1;
(statearr_31230_32500[(1)] = (12));

} else {
var statearr_31231_32501 = state_31215__$1;
(statearr_31231_32501[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (3))){
var inst_31213 = (state_31215[(2)]);
var state_31215__$1 = state_31215;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31215__$1,inst_31213);
} else {
if((state_val_31216 === (12))){
var inst_31167 = (state_31215[(7)]);
var inst_31203 = cljs.core.vec(inst_31167);
var state_31215__$1 = state_31215;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31215__$1,(15),out,inst_31203);
} else {
if((state_val_31216 === (2))){
var state_31215__$1 = state_31215;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31215__$1,(4),ch);
} else {
if((state_val_31216 === (11))){
var inst_31194 = (state_31215[(2)]);
var inst_31195 = (new Array(n));
var inst_31167 = inst_31195;
var inst_31168 = (0);
var state_31215__$1 = (function (){var statearr_31236 = state_31215;
(statearr_31236[(10)] = inst_31194);

(statearr_31236[(7)] = inst_31167);

(statearr_31236[(8)] = inst_31168);

return statearr_31236;
})();
var statearr_31237_32532 = state_31215__$1;
(statearr_31237_32532[(2)] = null);

(statearr_31237_32532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (9))){
var inst_31167 = (state_31215[(7)]);
var inst_31192 = cljs.core.vec(inst_31167);
var state_31215__$1 = state_31215;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31215__$1,(11),out,inst_31192);
} else {
if((state_val_31216 === (5))){
var inst_31167 = (state_31215[(7)]);
var inst_31168 = (state_31215[(8)]);
var inst_31171 = (state_31215[(9)]);
var inst_31181 = (state_31215[(11)]);
var inst_31175 = (inst_31167[inst_31168] = inst_31171);
var inst_31181__$1 = (inst_31168 + (1));
var inst_31182 = (inst_31181__$1 < n);
var state_31215__$1 = (function (){var statearr_31238 = state_31215;
(statearr_31238[(12)] = inst_31175);

(statearr_31238[(11)] = inst_31181__$1);

return statearr_31238;
})();
if(cljs.core.truth_(inst_31182)){
var statearr_31239_32535 = state_31215__$1;
(statearr_31239_32535[(1)] = (8));

} else {
var statearr_31240_32536 = state_31215__$1;
(statearr_31240_32536[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (14))){
var inst_31208 = (state_31215[(2)]);
var inst_31209 = cljs.core.async.close_BANG_(out);
var state_31215__$1 = (function (){var statearr_31242 = state_31215;
(statearr_31242[(13)] = inst_31208);

return statearr_31242;
})();
var statearr_31243_32539 = state_31215__$1;
(statearr_31243_32539[(2)] = inst_31209);

(statearr_31243_32539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (10))){
var inst_31198 = (state_31215[(2)]);
var state_31215__$1 = state_31215;
var statearr_31244_32542 = state_31215__$1;
(statearr_31244_32542[(2)] = inst_31198);

(statearr_31244_32542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (8))){
var inst_31167 = (state_31215[(7)]);
var inst_31181 = (state_31215[(11)]);
var tmp31241 = inst_31167;
var inst_31167__$1 = tmp31241;
var inst_31168 = inst_31181;
var state_31215__$1 = (function (){var statearr_31245 = state_31215;
(statearr_31245[(7)] = inst_31167__$1);

(statearr_31245[(8)] = inst_31168);

return statearr_31245;
})();
var statearr_31246_32546 = state_31215__$1;
(statearr_31246_32546[(2)] = null);

(statearr_31246_32546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28264__auto__ = null;
var cljs$core$async$state_machine__28264__auto____0 = (function (){
var statearr_31257 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31257[(0)] = cljs$core$async$state_machine__28264__auto__);

(statearr_31257[(1)] = (1));

return statearr_31257;
});
var cljs$core$async$state_machine__28264__auto____1 = (function (state_31215){
while(true){
var ret_value__28265__auto__ = (function (){try{while(true){
var result__28266__auto__ = switch__28263__auto__(state_31215);
if(cljs.core.keyword_identical_QMARK_(result__28266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28266__auto__;
}
break;
}
}catch (e31258){var ex__28267__auto__ = e31258;
var statearr_31259_32553 = state_31215;
(statearr_31259_32553[(2)] = ex__28267__auto__);


if(cljs.core.seq((state_31215[(4)]))){
var statearr_31260_32555 = state_31215;
(statearr_31260_32555[(1)] = cljs.core.first((state_31215[(4)])));

} else {
throw ex__28267__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32558 = state_31215;
state_31215 = G__32558;
continue;
} else {
return ret_value__28265__auto__;
}
break;
}
});
cljs$core$async$state_machine__28264__auto__ = function(state_31215){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28264__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28264__auto____1.call(this,state_31215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28264__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28264__auto____0;
cljs$core$async$state_machine__28264__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28264__auto____1;
return cljs$core$async$state_machine__28264__auto__;
})()
})();
var state__29176__auto__ = (function (){var statearr_31261 = f__29175__auto__();
(statearr_31261[(6)] = c__29174__auto___32467);

return statearr_31261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29176__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__31266 = arguments.length;
switch (G__31266) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29174__auto___32583 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29175__auto__ = (function (){var switch__28263__auto__ = (function (state_31311){
var state_val_31312 = (state_31311[(1)]);
if((state_val_31312 === (7))){
var inst_31307 = (state_31311[(2)]);
var state_31311__$1 = state_31311;
var statearr_31313_32588 = state_31311__$1;
(statearr_31313_32588[(2)] = inst_31307);

(statearr_31313_32588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31312 === (1))){
var inst_31267 = [];
var inst_31268 = inst_31267;
var inst_31269 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31311__$1 = (function (){var statearr_31314 = state_31311;
(statearr_31314[(7)] = inst_31268);

(statearr_31314[(8)] = inst_31269);

return statearr_31314;
})();
var statearr_31315_32594 = state_31311__$1;
(statearr_31315_32594[(2)] = null);

(statearr_31315_32594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31312 === (4))){
var inst_31272 = (state_31311[(9)]);
var inst_31272__$1 = (state_31311[(2)]);
var inst_31273 = (inst_31272__$1 == null);
var inst_31274 = cljs.core.not(inst_31273);
var state_31311__$1 = (function (){var statearr_31316 = state_31311;
(statearr_31316[(9)] = inst_31272__$1);

return statearr_31316;
})();
if(inst_31274){
var statearr_31317_32595 = state_31311__$1;
(statearr_31317_32595[(1)] = (5));

} else {
var statearr_31318_32596 = state_31311__$1;
(statearr_31318_32596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31312 === (15))){
var inst_31268 = (state_31311[(7)]);
var inst_31299 = cljs.core.vec(inst_31268);
var state_31311__$1 = state_31311;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31311__$1,(18),out,inst_31299);
} else {
if((state_val_31312 === (13))){
var inst_31294 = (state_31311[(2)]);
var state_31311__$1 = state_31311;
var statearr_31320_32601 = state_31311__$1;
(statearr_31320_32601[(2)] = inst_31294);

(statearr_31320_32601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31312 === (6))){
var inst_31268 = (state_31311[(7)]);
var inst_31296 = inst_31268.length;
var inst_31297 = (inst_31296 > (0));
var state_31311__$1 = state_31311;
if(cljs.core.truth_(inst_31297)){
var statearr_31324_32602 = state_31311__$1;
(statearr_31324_32602[(1)] = (15));

} else {
var statearr_31325_32603 = state_31311__$1;
(statearr_31325_32603[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31312 === (17))){
var inst_31304 = (state_31311[(2)]);
var inst_31305 = cljs.core.async.close_BANG_(out);
var state_31311__$1 = (function (){var statearr_31326 = state_31311;
(statearr_31326[(10)] = inst_31304);

return statearr_31326;
})();
var statearr_31327_32606 = state_31311__$1;
(statearr_31327_32606[(2)] = inst_31305);

(statearr_31327_32606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31312 === (3))){
var inst_31309 = (state_31311[(2)]);
var state_31311__$1 = state_31311;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31311__$1,inst_31309);
} else {
if((state_val_31312 === (12))){
var inst_31268 = (state_31311[(7)]);
var inst_31287 = cljs.core.vec(inst_31268);
var state_31311__$1 = state_31311;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31311__$1,(14),out,inst_31287);
} else {
if((state_val_31312 === (2))){
var state_31311__$1 = state_31311;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31311__$1,(4),ch);
} else {
if((state_val_31312 === (11))){
var inst_31268 = (state_31311[(7)]);
var inst_31272 = (state_31311[(9)]);
var inst_31276 = (state_31311[(11)]);
var inst_31284 = inst_31268.push(inst_31272);
var tmp31331 = inst_31268;
var inst_31268__$1 = tmp31331;
var inst_31269 = inst_31276;
var state_31311__$1 = (function (){var statearr_31332 = state_31311;
(statearr_31332[(12)] = inst_31284);

(statearr_31332[(7)] = inst_31268__$1);

(statearr_31332[(8)] = inst_31269);

return statearr_31332;
})();
var statearr_31333_32610 = state_31311__$1;
(statearr_31333_32610[(2)] = null);

(statearr_31333_32610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31312 === (9))){
var inst_31269 = (state_31311[(8)]);
var inst_31280 = cljs.core.keyword_identical_QMARK_(inst_31269,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_31311__$1 = state_31311;
var statearr_31334_32615 = state_31311__$1;
(statearr_31334_32615[(2)] = inst_31280);

(statearr_31334_32615[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31312 === (5))){
var inst_31272 = (state_31311[(9)]);
var inst_31276 = (state_31311[(11)]);
var inst_31269 = (state_31311[(8)]);
var inst_31277 = (state_31311[(13)]);
var inst_31276__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31272) : f.call(null,inst_31272));
var inst_31277__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31276__$1,inst_31269);
var state_31311__$1 = (function (){var statearr_31335 = state_31311;
(statearr_31335[(11)] = inst_31276__$1);

(statearr_31335[(13)] = inst_31277__$1);

return statearr_31335;
})();
if(inst_31277__$1){
var statearr_31336_32620 = state_31311__$1;
(statearr_31336_32620[(1)] = (8));

} else {
var statearr_31337_32622 = state_31311__$1;
(statearr_31337_32622[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31312 === (14))){
var inst_31272 = (state_31311[(9)]);
var inst_31276 = (state_31311[(11)]);
var inst_31289 = (state_31311[(2)]);
var inst_31290 = [];
var inst_31291 = inst_31290.push(inst_31272);
var inst_31268 = inst_31290;
var inst_31269 = inst_31276;
var state_31311__$1 = (function (){var statearr_31338 = state_31311;
(statearr_31338[(14)] = inst_31289);

(statearr_31338[(15)] = inst_31291);

(statearr_31338[(7)] = inst_31268);

(statearr_31338[(8)] = inst_31269);

return statearr_31338;
})();
var statearr_31339_32624 = state_31311__$1;
(statearr_31339_32624[(2)] = null);

(statearr_31339_32624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31312 === (16))){
var state_31311__$1 = state_31311;
var statearr_31340_32629 = state_31311__$1;
(statearr_31340_32629[(2)] = null);

(statearr_31340_32629[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31312 === (10))){
var inst_31282 = (state_31311[(2)]);
var state_31311__$1 = state_31311;
if(cljs.core.truth_(inst_31282)){
var statearr_31341_32630 = state_31311__$1;
(statearr_31341_32630[(1)] = (11));

} else {
var statearr_31342_32631 = state_31311__$1;
(statearr_31342_32631[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31312 === (18))){
var inst_31301 = (state_31311[(2)]);
var state_31311__$1 = state_31311;
var statearr_31343_32632 = state_31311__$1;
(statearr_31343_32632[(2)] = inst_31301);

(statearr_31343_32632[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31312 === (8))){
var inst_31277 = (state_31311[(13)]);
var state_31311__$1 = state_31311;
var statearr_31344_32635 = state_31311__$1;
(statearr_31344_32635[(2)] = inst_31277);

(statearr_31344_32635[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28264__auto__ = null;
var cljs$core$async$state_machine__28264__auto____0 = (function (){
var statearr_31345 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31345[(0)] = cljs$core$async$state_machine__28264__auto__);

(statearr_31345[(1)] = (1));

return statearr_31345;
});
var cljs$core$async$state_machine__28264__auto____1 = (function (state_31311){
while(true){
var ret_value__28265__auto__ = (function (){try{while(true){
var result__28266__auto__ = switch__28263__auto__(state_31311);
if(cljs.core.keyword_identical_QMARK_(result__28266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28266__auto__;
}
break;
}
}catch (e31346){var ex__28267__auto__ = e31346;
var statearr_31347_32644 = state_31311;
(statearr_31347_32644[(2)] = ex__28267__auto__);


if(cljs.core.seq((state_31311[(4)]))){
var statearr_31348_32646 = state_31311;
(statearr_31348_32646[(1)] = cljs.core.first((state_31311[(4)])));

} else {
throw ex__28267__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32647 = state_31311;
state_31311 = G__32647;
continue;
} else {
return ret_value__28265__auto__;
}
break;
}
});
cljs$core$async$state_machine__28264__auto__ = function(state_31311){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28264__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28264__auto____1.call(this,state_31311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28264__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28264__auto____0;
cljs$core$async$state_machine__28264__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28264__auto____1;
return cljs$core$async$state_machine__28264__auto__;
})()
})();
var state__29176__auto__ = (function (){var statearr_31350 = f__29175__auto__();
(statearr_31350[(6)] = c__29174__auto___32583);

return statearr_31350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29176__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
