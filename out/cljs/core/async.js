// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true, :target :nodejs}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args10257 = [];
var len__7214__auto___10263 = arguments.length;
var i__7215__auto___10264 = (0);
while(true){
if((i__7215__auto___10264 < len__7214__auto___10263)){
args10257.push((arguments[i__7215__auto___10264]));

var G__10265 = (i__7215__auto___10264 + (1));
i__7215__auto___10264 = G__10265;
continue;
} else {
}
break;
}

var G__10259 = args10257.length;
switch (G__10259) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10257.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async10260 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10260 = (function (f,blockable,meta10261){
this.f = f;
this.blockable = blockable;
this.meta10261 = meta10261;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10262,meta10261__$1){
var self__ = this;
var _10262__$1 = this;
return (new cljs.core.async.t_cljs$core$async10260(self__.f,self__.blockable,meta10261__$1));
});

cljs.core.async.t_cljs$core$async10260.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10262){
var self__ = this;
var _10262__$1 = this;
return self__.meta10261;
});

cljs.core.async.t_cljs$core$async10260.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async10260.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async10260.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async10260.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async10260.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta10261], null);
});

cljs.core.async.t_cljs$core$async10260.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10260.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10260";

cljs.core.async.t_cljs$core$async10260.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"cljs.core.async/t_cljs$core$async10260");
});

cljs.core.async.__GT_t_cljs$core$async10260 = (function cljs$core$async$__GT_t_cljs$core$async10260(f__$1,blockable__$1,meta10261){
return (new cljs.core.async.t_cljs$core$async10260(f__$1,blockable__$1,meta10261));
});

}

return (new cljs.core.async.t_cljs$core$async10260(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
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
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
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
var args10269 = [];
var len__7214__auto___10272 = arguments.length;
var i__7215__auto___10273 = (0);
while(true){
if((i__7215__auto___10273 < len__7214__auto___10272)){
args10269.push((arguments[i__7215__auto___10273]));

var G__10274 = (i__7215__auto___10273 + (1));
i__7215__auto___10273 = G__10274;
continue;
} else {
}
break;
}

var G__10271 = args10269.length;
switch (G__10271) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10269.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$buf_DASH_or_DASH_n], 0)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args10276 = [];
var len__7214__auto___10279 = arguments.length;
var i__7215__auto___10280 = (0);
while(true){
if((i__7215__auto___10280 < len__7214__auto___10279)){
args10276.push((arguments[i__7215__auto___10280]));

var G__10281 = (i__7215__auto___10280 + (1));
i__7215__auto___10280 = G__10281;
continue;
} else {
}
break;
}

var G__10278 = args10276.length;
switch (G__10278) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10276.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
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
var args10283 = [];
var len__7214__auto___10286 = arguments.length;
var i__7215__auto___10287 = (0);
while(true){
if((i__7215__auto___10287 < len__7214__auto___10286)){
args10283.push((arguments[i__7215__auto___10287]));

var G__10288 = (i__7215__auto___10287 + (1));
i__7215__auto___10287 = G__10288;
continue;
} else {
}
break;
}

var G__10285 = args10283.length;
switch (G__10285) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10283.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_10290 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_10290) : fn1.call(null,val_10290));
} else {
cljs.core.async.impl.dispatch.run(((function (val_10290,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_10290) : fn1.call(null,val_10290));
});})(val_10290,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
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
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args10291 = [];
var len__7214__auto___10294 = arguments.length;
var i__7215__auto___10295 = (0);
while(true){
if((i__7215__auto___10295 < len__7214__auto___10294)){
args10291.push((arguments[i__7215__auto___10295]));

var G__10296 = (i__7215__auto___10295 + (1));
i__7215__auto___10295 = G__10296;
continue;
} else {
}
break;
}

var G__10293 = args10291.length;
switch (G__10293) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10291.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4655__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7059__auto___10298 = n;
var x_10299 = (0);
while(true){
if((x_10299 < n__7059__auto___10298)){
(a[x_10299] = (0));

var G__10300 = (x_10299 + (1));
x_10299 = G__10300;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__10301 = (i + (1));
i = G__10301;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async10305 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10305 = (function (alt_flag,flag,meta10306){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta10306 = meta10306;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10307,meta10306__$1){
var self__ = this;
var _10307__$1 = this;
return (new cljs.core.async.t_cljs$core$async10305(self__.alt_flag,self__.flag,meta10306__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async10305.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10307){
var self__ = this;
var _10307__$1 = this;
return self__.meta10306;
});})(flag))
;

cljs.core.async.t_cljs$core$async10305.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async10305.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async10305.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async10305.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async10305.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta10306], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async10305.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10305.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10305";

cljs.core.async.t_cljs$core$async10305.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"cljs.core.async/t_cljs$core$async10305");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async10305 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async10305(alt_flag__$1,flag__$1,meta10306){
return (new cljs.core.async.t_cljs$core$async10305(alt_flag__$1,flag__$1,meta10306));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async10305(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async10311 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10311 = (function (alt_handler,flag,cb,meta10312){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta10312 = meta10312;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10311.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10313,meta10312__$1){
var self__ = this;
var _10313__$1 = this;
return (new cljs.core.async.t_cljs$core$async10311(self__.alt_handler,self__.flag,self__.cb,meta10312__$1));
});

cljs.core.async.t_cljs$core$async10311.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10313){
var self__ = this;
var _10313__$1 = this;
return self__.meta10312;
});

cljs.core.async.t_cljs$core$async10311.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async10311.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async10311.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async10311.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async10311.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta10312], null);
});

cljs.core.async.t_cljs$core$async10311.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10311.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10311";

cljs.core.async.t_cljs$core$async10311.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"cljs.core.async/t_cljs$core$async10311");
});

cljs.core.async.__GT_t_cljs$core$async10311 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async10311(alt_handler__$1,flag__$1,cb__$1,meta10312){
return (new cljs.core.async.t_cljs$core$async10311(alt_handler__$1,flag__$1,cb__$1,meta10312));
});

}

return (new cljs.core.async.t_cljs$core$async10311(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10314_SHARP_){
var G__10318 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10314_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__10318) : fret.call(null,G__10318));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10315_SHARP_){
var G__10319 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10315_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__10319) : fret.call(null,G__10319));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__6156__auto__ = wport;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return port;
}
})()], null));
} else {
var G__10320 = (i + (1));
i = G__10320;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6156__auto__ = ret;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4657__auto__ = (function (){var and__6144__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__6144__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__6144__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
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
var args__7221__auto__ = [];
var len__7214__auto___10326 = arguments.length;
var i__7215__auto___10327 = (0);
while(true){
if((i__7215__auto___10327 < len__7214__auto___10326)){
args__7221__auto__.push((arguments[i__7215__auto___10327]));

var G__10328 = (i__7215__auto___10327 + (1));
i__7215__auto___10327 = G__10328;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__10323){
var map__10324 = p__10323;
var map__10324__$1 = ((((!((map__10324 == null)))?((((map__10324.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10324.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10324):map__10324);
var opts = map__10324__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq10321){
var G__10322 = cljs.core.first(seq10321);
var seq10321__$1 = cljs.core.next(seq10321);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10322,seq10321__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
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
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
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
var args10329 = [];
var len__7214__auto___10379 = arguments.length;
var i__7215__auto___10380 = (0);
while(true){
if((i__7215__auto___10380 < len__7214__auto___10379)){
args10329.push((arguments[i__7215__auto___10380]));

var G__10381 = (i__7215__auto___10380 + (1));
i__7215__auto___10380 = G__10381;
continue;
} else {
}
break;
}

var G__10331 = args10329.length;
switch (G__10331) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10329.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10212__auto___10383 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto___10383){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto___10383){
return (function (state_10355){
var state_val_10356 = (state_10355[(1)]);
if((state_val_10356 === (7))){
var inst_10351 = (state_10355[(2)]);
var state_10355__$1 = state_10355;
var statearr_10357_10384 = state_10355__$1;
(statearr_10357_10384[(2)] = inst_10351);

(statearr_10357_10384[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10356 === (1))){
var state_10355__$1 = state_10355;
var statearr_10358_10385 = state_10355__$1;
(statearr_10358_10385[(2)] = null);

(statearr_10358_10385[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10356 === (4))){
var inst_10334 = (state_10355[(7)]);
var inst_10334__$1 = (state_10355[(2)]);
var inst_10335 = (inst_10334__$1 == null);
var state_10355__$1 = (function (){var statearr_10359 = state_10355;
(statearr_10359[(7)] = inst_10334__$1);

return statearr_10359;
})();
if(cljs.core.truth_(inst_10335)){
var statearr_10360_10386 = state_10355__$1;
(statearr_10360_10386[(1)] = (5));

} else {
var statearr_10361_10387 = state_10355__$1;
(statearr_10361_10387[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10356 === (13))){
var state_10355__$1 = state_10355;
var statearr_10362_10388 = state_10355__$1;
(statearr_10362_10388[(2)] = null);

(statearr_10362_10388[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10356 === (6))){
var inst_10334 = (state_10355[(7)]);
var state_10355__$1 = state_10355;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10355__$1,(11),to,inst_10334);
} else {
if((state_val_10356 === (3))){
var inst_10353 = (state_10355[(2)]);
var state_10355__$1 = state_10355;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10355__$1,inst_10353);
} else {
if((state_val_10356 === (12))){
var state_10355__$1 = state_10355;
var statearr_10363_10389 = state_10355__$1;
(statearr_10363_10389[(2)] = null);

(statearr_10363_10389[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10356 === (2))){
var state_10355__$1 = state_10355;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10355__$1,(4),from);
} else {
if((state_val_10356 === (11))){
var inst_10344 = (state_10355[(2)]);
var state_10355__$1 = state_10355;
if(cljs.core.truth_(inst_10344)){
var statearr_10364_10390 = state_10355__$1;
(statearr_10364_10390[(1)] = (12));

} else {
var statearr_10365_10391 = state_10355__$1;
(statearr_10365_10391[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10356 === (9))){
var state_10355__$1 = state_10355;
var statearr_10366_10392 = state_10355__$1;
(statearr_10366_10392[(2)] = null);

(statearr_10366_10392[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10356 === (5))){
var state_10355__$1 = state_10355;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10367_10393 = state_10355__$1;
(statearr_10367_10393[(1)] = (8));

} else {
var statearr_10368_10394 = state_10355__$1;
(statearr_10368_10394[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10356 === (14))){
var inst_10349 = (state_10355[(2)]);
var state_10355__$1 = state_10355;
var statearr_10369_10395 = state_10355__$1;
(statearr_10369_10395[(2)] = inst_10349);

(statearr_10369_10395[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10356 === (10))){
var inst_10341 = (state_10355[(2)]);
var state_10355__$1 = state_10355;
var statearr_10370_10396 = state_10355__$1;
(statearr_10370_10396[(2)] = inst_10341);

(statearr_10370_10396[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10356 === (8))){
var inst_10338 = cljs.core.async.close_BANG_(to);
var state_10355__$1 = state_10355;
var statearr_10371_10397 = state_10355__$1;
(statearr_10371_10397[(2)] = inst_10338);

(statearr_10371_10397[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__10212__auto___10383))
;
return ((function (switch__10098__auto__,c__10212__auto___10383){
return (function() {
var cljs$core$async$state_machine__10099__auto__ = null;
var cljs$core$async$state_machine__10099__auto____0 = (function (){
var statearr_10375 = [null,null,null,null,null,null,null,null];
(statearr_10375[(0)] = cljs$core$async$state_machine__10099__auto__);

(statearr_10375[(1)] = (1));

return statearr_10375;
});
var cljs$core$async$state_machine__10099__auto____1 = (function (state_10355){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_10355);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e10376){if((e10376 instanceof Object)){
var ex__10102__auto__ = e10376;
var statearr_10377_10398 = state_10355;
(statearr_10377_10398[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10355);

return cljs.core.cst$kw$recur;
} else {
throw e10376;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__10399 = state_10355;
state_10355 = G__10399;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
cljs$core$async$state_machine__10099__auto__ = function(state_10355){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10099__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10099__auto____1.call(this,state_10355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10099__auto____0;
cljs$core$async$state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10099__auto____1;
return cljs$core$async$state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto___10383))
})();
var state__10214__auto__ = (function (){var statearr_10378 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_10378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto___10383);

return statearr_10378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto___10383))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$pos_QMARK_,cljs.core.cst$sym$n)], 0)))].join('')));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__10583){
var vec__10584 = p__10583;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10584,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10584,(1),null);
var job = vec__10584;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__10212__auto___10766 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto___10766,res,vec__10584,v,p,job,jobs,results){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto___10766,res,vec__10584,v,p,job,jobs,results){
return (function (state_10589){
var state_val_10590 = (state_10589[(1)]);
if((state_val_10590 === (1))){
var state_10589__$1 = state_10589;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10589__$1,(2),res,v);
} else {
if((state_val_10590 === (2))){
var inst_10586 = (state_10589[(2)]);
var inst_10587 = cljs.core.async.close_BANG_(res);
var state_10589__$1 = (function (){var statearr_10591 = state_10589;
(statearr_10591[(7)] = inst_10586);

return statearr_10591;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_10589__$1,inst_10587);
} else {
return null;
}
}
});})(c__10212__auto___10766,res,vec__10584,v,p,job,jobs,results))
;
return ((function (switch__10098__auto__,c__10212__auto___10766,res,vec__10584,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10099__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10099__auto____0 = (function (){
var statearr_10595 = [null,null,null,null,null,null,null,null];
(statearr_10595[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10099__auto__);

(statearr_10595[(1)] = (1));

return statearr_10595;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10099__auto____1 = (function (state_10589){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_10589);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e10596){if((e10596 instanceof Object)){
var ex__10102__auto__ = e10596;
var statearr_10597_10767 = state_10589;
(statearr_10597_10767[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10589);

return cljs.core.cst$kw$recur;
} else {
throw e10596;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__10768 = state_10589;
state_10589 = G__10768;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10099__auto__ = function(state_10589){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10099__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10099__auto____1.call(this,state_10589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10099__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10099__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto___10766,res,vec__10584,v,p,job,jobs,results))
})();
var state__10214__auto__ = (function (){var statearr_10598 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_10598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto___10766);

return statearr_10598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto___10766,res,vec__10584,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__10599){
var vec__10600 = p__10599;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10600,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10600,(1),null);
var job = vec__10600;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__7059__auto___10769 = n;
var __10770 = (0);
while(true){
if((__10770 < n__7059__auto___10769)){
var G__10601_10771 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__10601_10771) {
case "compute":
var c__10212__auto___10773 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__10770,c__10212__auto___10773,G__10601_10771,n__7059__auto___10769,jobs,results,process,async){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (__10770,c__10212__auto___10773,G__10601_10771,n__7059__auto___10769,jobs,results,process,async){
return (function (state_10614){
var state_val_10615 = (state_10614[(1)]);
if((state_val_10615 === (1))){
var state_10614__$1 = state_10614;
var statearr_10616_10774 = state_10614__$1;
(statearr_10616_10774[(2)] = null);

(statearr_10616_10774[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10615 === (2))){
var state_10614__$1 = state_10614;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10614__$1,(4),jobs);
} else {
if((state_val_10615 === (3))){
var inst_10612 = (state_10614[(2)]);
var state_10614__$1 = state_10614;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10614__$1,inst_10612);
} else {
if((state_val_10615 === (4))){
var inst_10604 = (state_10614[(2)]);
var inst_10605 = process(inst_10604);
var state_10614__$1 = state_10614;
if(cljs.core.truth_(inst_10605)){
var statearr_10617_10775 = state_10614__$1;
(statearr_10617_10775[(1)] = (5));

} else {
var statearr_10618_10776 = state_10614__$1;
(statearr_10618_10776[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10615 === (5))){
var state_10614__$1 = state_10614;
var statearr_10619_10777 = state_10614__$1;
(statearr_10619_10777[(2)] = null);

(statearr_10619_10777[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10615 === (6))){
var state_10614__$1 = state_10614;
var statearr_10620_10778 = state_10614__$1;
(statearr_10620_10778[(2)] = null);

(statearr_10620_10778[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10615 === (7))){
var inst_10610 = (state_10614[(2)]);
var state_10614__$1 = state_10614;
var statearr_10621_10779 = state_10614__$1;
(statearr_10621_10779[(2)] = inst_10610);

(statearr_10621_10779[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__10770,c__10212__auto___10773,G__10601_10771,n__7059__auto___10769,jobs,results,process,async))
;
return ((function (__10770,switch__10098__auto__,c__10212__auto___10773,G__10601_10771,n__7059__auto___10769,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10099__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10099__auto____0 = (function (){
var statearr_10625 = [null,null,null,null,null,null,null];
(statearr_10625[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10099__auto__);

(statearr_10625[(1)] = (1));

return statearr_10625;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10099__auto____1 = (function (state_10614){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_10614);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e10626){if((e10626 instanceof Object)){
var ex__10102__auto__ = e10626;
var statearr_10627_10780 = state_10614;
(statearr_10627_10780[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10614);

return cljs.core.cst$kw$recur;
} else {
throw e10626;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__10781 = state_10614;
state_10614 = G__10781;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10099__auto__ = function(state_10614){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10099__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10099__auto____1.call(this,state_10614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10099__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10099__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10099__auto__;
})()
;})(__10770,switch__10098__auto__,c__10212__auto___10773,G__10601_10771,n__7059__auto___10769,jobs,results,process,async))
})();
var state__10214__auto__ = (function (){var statearr_10628 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_10628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto___10773);

return statearr_10628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(__10770,c__10212__auto___10773,G__10601_10771,n__7059__auto___10769,jobs,results,process,async))
);


break;
case "async":
var c__10212__auto___10782 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__10770,c__10212__auto___10782,G__10601_10771,n__7059__auto___10769,jobs,results,process,async){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (__10770,c__10212__auto___10782,G__10601_10771,n__7059__auto___10769,jobs,results,process,async){
return (function (state_10641){
var state_val_10642 = (state_10641[(1)]);
if((state_val_10642 === (1))){
var state_10641__$1 = state_10641;
var statearr_10643_10783 = state_10641__$1;
(statearr_10643_10783[(2)] = null);

(statearr_10643_10783[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10642 === (2))){
var state_10641__$1 = state_10641;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10641__$1,(4),jobs);
} else {
if((state_val_10642 === (3))){
var inst_10639 = (state_10641[(2)]);
var state_10641__$1 = state_10641;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10641__$1,inst_10639);
} else {
if((state_val_10642 === (4))){
var inst_10631 = (state_10641[(2)]);
var inst_10632 = async(inst_10631);
var state_10641__$1 = state_10641;
if(cljs.core.truth_(inst_10632)){
var statearr_10644_10784 = state_10641__$1;
(statearr_10644_10784[(1)] = (5));

} else {
var statearr_10645_10785 = state_10641__$1;
(statearr_10645_10785[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10642 === (5))){
var state_10641__$1 = state_10641;
var statearr_10646_10786 = state_10641__$1;
(statearr_10646_10786[(2)] = null);

(statearr_10646_10786[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10642 === (6))){
var state_10641__$1 = state_10641;
var statearr_10647_10787 = state_10641__$1;
(statearr_10647_10787[(2)] = null);

(statearr_10647_10787[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10642 === (7))){
var inst_10637 = (state_10641[(2)]);
var state_10641__$1 = state_10641;
var statearr_10648_10788 = state_10641__$1;
(statearr_10648_10788[(2)] = inst_10637);

(statearr_10648_10788[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__10770,c__10212__auto___10782,G__10601_10771,n__7059__auto___10769,jobs,results,process,async))
;
return ((function (__10770,switch__10098__auto__,c__10212__auto___10782,G__10601_10771,n__7059__auto___10769,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10099__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10099__auto____0 = (function (){
var statearr_10652 = [null,null,null,null,null,null,null];
(statearr_10652[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10099__auto__);

(statearr_10652[(1)] = (1));

return statearr_10652;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10099__auto____1 = (function (state_10641){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_10641);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e10653){if((e10653 instanceof Object)){
var ex__10102__auto__ = e10653;
var statearr_10654_10789 = state_10641;
(statearr_10654_10789[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10641);

return cljs.core.cst$kw$recur;
} else {
throw e10653;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__10790 = state_10641;
state_10641 = G__10790;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10099__auto__ = function(state_10641){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10099__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10099__auto____1.call(this,state_10641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10099__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10099__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10099__auto__;
})()
;})(__10770,switch__10098__auto__,c__10212__auto___10782,G__10601_10771,n__7059__auto___10769,jobs,results,process,async))
})();
var state__10214__auto__ = (function (){var statearr_10655 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_10655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto___10782);

return statearr_10655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(__10770,c__10212__auto___10782,G__10601_10771,n__7059__auto___10769,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__10791 = (__10770 + (1));
__10770 = G__10791;
continue;
} else {
}
break;
}

var c__10212__auto___10792 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto___10792,jobs,results,process,async){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto___10792,jobs,results,process,async){
return (function (state_10677){
var state_val_10678 = (state_10677[(1)]);
if((state_val_10678 === (1))){
var state_10677__$1 = state_10677;
var statearr_10679_10793 = state_10677__$1;
(statearr_10679_10793[(2)] = null);

(statearr_10679_10793[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10678 === (2))){
var state_10677__$1 = state_10677;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10677__$1,(4),from);
} else {
if((state_val_10678 === (3))){
var inst_10675 = (state_10677[(2)]);
var state_10677__$1 = state_10677;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10677__$1,inst_10675);
} else {
if((state_val_10678 === (4))){
var inst_10658 = (state_10677[(7)]);
var inst_10658__$1 = (state_10677[(2)]);
var inst_10659 = (inst_10658__$1 == null);
var state_10677__$1 = (function (){var statearr_10680 = state_10677;
(statearr_10680[(7)] = inst_10658__$1);

return statearr_10680;
})();
if(cljs.core.truth_(inst_10659)){
var statearr_10681_10794 = state_10677__$1;
(statearr_10681_10794[(1)] = (5));

} else {
var statearr_10682_10795 = state_10677__$1;
(statearr_10682_10795[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10678 === (5))){
var inst_10661 = cljs.core.async.close_BANG_(jobs);
var state_10677__$1 = state_10677;
var statearr_10683_10796 = state_10677__$1;
(statearr_10683_10796[(2)] = inst_10661);

(statearr_10683_10796[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10678 === (6))){
var inst_10663 = (state_10677[(8)]);
var inst_10658 = (state_10677[(7)]);
var inst_10663__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_10664 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10665 = [inst_10658,inst_10663__$1];
var inst_10666 = (new cljs.core.PersistentVector(null,2,(5),inst_10664,inst_10665,null));
var state_10677__$1 = (function (){var statearr_10684 = state_10677;
(statearr_10684[(8)] = inst_10663__$1);

return statearr_10684;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10677__$1,(8),jobs,inst_10666);
} else {
if((state_val_10678 === (7))){
var inst_10673 = (state_10677[(2)]);
var state_10677__$1 = state_10677;
var statearr_10685_10797 = state_10677__$1;
(statearr_10685_10797[(2)] = inst_10673);

(statearr_10685_10797[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10678 === (8))){
var inst_10663 = (state_10677[(8)]);
var inst_10668 = (state_10677[(2)]);
var state_10677__$1 = (function (){var statearr_10686 = state_10677;
(statearr_10686[(9)] = inst_10668);

return statearr_10686;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10677__$1,(9),results,inst_10663);
} else {
if((state_val_10678 === (9))){
var inst_10670 = (state_10677[(2)]);
var state_10677__$1 = (function (){var statearr_10687 = state_10677;
(statearr_10687[(10)] = inst_10670);

return statearr_10687;
})();
var statearr_10688_10798 = state_10677__$1;
(statearr_10688_10798[(2)] = null);

(statearr_10688_10798[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__10212__auto___10792,jobs,results,process,async))
;
return ((function (switch__10098__auto__,c__10212__auto___10792,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10099__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10099__auto____0 = (function (){
var statearr_10692 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10692[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10099__auto__);

(statearr_10692[(1)] = (1));

return statearr_10692;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10099__auto____1 = (function (state_10677){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_10677);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e10693){if((e10693 instanceof Object)){
var ex__10102__auto__ = e10693;
var statearr_10694_10799 = state_10677;
(statearr_10694_10799[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10677);

return cljs.core.cst$kw$recur;
} else {
throw e10693;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__10800 = state_10677;
state_10677 = G__10800;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10099__auto__ = function(state_10677){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10099__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10099__auto____1.call(this,state_10677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10099__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10099__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto___10792,jobs,results,process,async))
})();
var state__10214__auto__ = (function (){var statearr_10695 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_10695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto___10792);

return statearr_10695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto___10792,jobs,results,process,async))
);


var c__10212__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto__,jobs,results,process,async){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto__,jobs,results,process,async){
return (function (state_10733){
var state_val_10734 = (state_10733[(1)]);
if((state_val_10734 === (7))){
var inst_10729 = (state_10733[(2)]);
var state_10733__$1 = state_10733;
var statearr_10735_10801 = state_10733__$1;
(statearr_10735_10801[(2)] = inst_10729);

(statearr_10735_10801[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10734 === (20))){
var state_10733__$1 = state_10733;
var statearr_10736_10802 = state_10733__$1;
(statearr_10736_10802[(2)] = null);

(statearr_10736_10802[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10734 === (1))){
var state_10733__$1 = state_10733;
var statearr_10737_10803 = state_10733__$1;
(statearr_10737_10803[(2)] = null);

(statearr_10737_10803[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10734 === (4))){
var inst_10698 = (state_10733[(7)]);
var inst_10698__$1 = (state_10733[(2)]);
var inst_10699 = (inst_10698__$1 == null);
var state_10733__$1 = (function (){var statearr_10738 = state_10733;
(statearr_10738[(7)] = inst_10698__$1);

return statearr_10738;
})();
if(cljs.core.truth_(inst_10699)){
var statearr_10739_10804 = state_10733__$1;
(statearr_10739_10804[(1)] = (5));

} else {
var statearr_10740_10805 = state_10733__$1;
(statearr_10740_10805[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10734 === (15))){
var inst_10711 = (state_10733[(8)]);
var state_10733__$1 = state_10733;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10733__$1,(18),to,inst_10711);
} else {
if((state_val_10734 === (21))){
var inst_10724 = (state_10733[(2)]);
var state_10733__$1 = state_10733;
var statearr_10741_10806 = state_10733__$1;
(statearr_10741_10806[(2)] = inst_10724);

(statearr_10741_10806[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10734 === (13))){
var inst_10726 = (state_10733[(2)]);
var state_10733__$1 = (function (){var statearr_10742 = state_10733;
(statearr_10742[(9)] = inst_10726);

return statearr_10742;
})();
var statearr_10743_10807 = state_10733__$1;
(statearr_10743_10807[(2)] = null);

(statearr_10743_10807[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10734 === (6))){
var inst_10698 = (state_10733[(7)]);
var state_10733__$1 = state_10733;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10733__$1,(11),inst_10698);
} else {
if((state_val_10734 === (17))){
var inst_10719 = (state_10733[(2)]);
var state_10733__$1 = state_10733;
if(cljs.core.truth_(inst_10719)){
var statearr_10744_10808 = state_10733__$1;
(statearr_10744_10808[(1)] = (19));

} else {
var statearr_10745_10809 = state_10733__$1;
(statearr_10745_10809[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10734 === (3))){
var inst_10731 = (state_10733[(2)]);
var state_10733__$1 = state_10733;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10733__$1,inst_10731);
} else {
if((state_val_10734 === (12))){
var inst_10708 = (state_10733[(10)]);
var state_10733__$1 = state_10733;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10733__$1,(14),inst_10708);
} else {
if((state_val_10734 === (2))){
var state_10733__$1 = state_10733;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10733__$1,(4),results);
} else {
if((state_val_10734 === (19))){
var state_10733__$1 = state_10733;
var statearr_10746_10810 = state_10733__$1;
(statearr_10746_10810[(2)] = null);

(statearr_10746_10810[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10734 === (11))){
var inst_10708 = (state_10733[(2)]);
var state_10733__$1 = (function (){var statearr_10747 = state_10733;
(statearr_10747[(10)] = inst_10708);

return statearr_10747;
})();
var statearr_10748_10811 = state_10733__$1;
(statearr_10748_10811[(2)] = null);

(statearr_10748_10811[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10734 === (9))){
var state_10733__$1 = state_10733;
var statearr_10749_10812 = state_10733__$1;
(statearr_10749_10812[(2)] = null);

(statearr_10749_10812[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10734 === (5))){
var state_10733__$1 = state_10733;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10750_10813 = state_10733__$1;
(statearr_10750_10813[(1)] = (8));

} else {
var statearr_10751_10814 = state_10733__$1;
(statearr_10751_10814[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10734 === (14))){
var inst_10713 = (state_10733[(11)]);
var inst_10711 = (state_10733[(8)]);
var inst_10711__$1 = (state_10733[(2)]);
var inst_10712 = (inst_10711__$1 == null);
var inst_10713__$1 = cljs.core.not(inst_10712);
var state_10733__$1 = (function (){var statearr_10752 = state_10733;
(statearr_10752[(11)] = inst_10713__$1);

(statearr_10752[(8)] = inst_10711__$1);

return statearr_10752;
})();
if(inst_10713__$1){
var statearr_10753_10815 = state_10733__$1;
(statearr_10753_10815[(1)] = (15));

} else {
var statearr_10754_10816 = state_10733__$1;
(statearr_10754_10816[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10734 === (16))){
var inst_10713 = (state_10733[(11)]);
var state_10733__$1 = state_10733;
var statearr_10755_10817 = state_10733__$1;
(statearr_10755_10817[(2)] = inst_10713);

(statearr_10755_10817[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10734 === (10))){
var inst_10705 = (state_10733[(2)]);
var state_10733__$1 = state_10733;
var statearr_10756_10818 = state_10733__$1;
(statearr_10756_10818[(2)] = inst_10705);

(statearr_10756_10818[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10734 === (18))){
var inst_10716 = (state_10733[(2)]);
var state_10733__$1 = state_10733;
var statearr_10757_10819 = state_10733__$1;
(statearr_10757_10819[(2)] = inst_10716);

(statearr_10757_10819[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10734 === (8))){
var inst_10702 = cljs.core.async.close_BANG_(to);
var state_10733__$1 = state_10733;
var statearr_10758_10820 = state_10733__$1;
(statearr_10758_10820[(2)] = inst_10702);

(statearr_10758_10820[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__10212__auto__,jobs,results,process,async))
;
return ((function (switch__10098__auto__,c__10212__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10099__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10099__auto____0 = (function (){
var statearr_10762 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10762[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10099__auto__);

(statearr_10762[(1)] = (1));

return statearr_10762;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10099__auto____1 = (function (state_10733){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_10733);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e10763){if((e10763 instanceof Object)){
var ex__10102__auto__ = e10763;
var statearr_10764_10821 = state_10733;
(statearr_10764_10821[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10733);

return cljs.core.cst$kw$recur;
} else {
throw e10763;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__10822 = state_10733;
state_10733 = G__10822;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10099__auto__ = function(state_10733){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10099__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10099__auto____1.call(this,state_10733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10099__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10099__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto__,jobs,results,process,async))
})();
var state__10214__auto__ = (function (){var statearr_10765 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_10765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto__);

return statearr_10765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto__,jobs,results,process,async))
);

return c__10212__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args10823 = [];
var len__7214__auto___10826 = arguments.length;
var i__7215__auto___10827 = (0);
while(true){
if((i__7215__auto___10827 < len__7214__auto___10826)){
args10823.push((arguments[i__7215__auto___10827]));

var G__10828 = (i__7215__auto___10827 + (1));
i__7215__auto___10827 = G__10828;
continue;
} else {
}
break;
}

var G__10825 = args10823.length;
switch (G__10825) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10823.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
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
var args10830 = [];
var len__7214__auto___10833 = arguments.length;
var i__7215__auto___10834 = (0);
while(true){
if((i__7215__auto___10834 < len__7214__auto___10833)){
args10830.push((arguments[i__7215__auto___10834]));

var G__10835 = (i__7215__auto___10834 + (1));
i__7215__auto___10834 = G__10835;
continue;
} else {
}
break;
}

var G__10832 = args10830.length;
switch (G__10832) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10830.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
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
var args10837 = [];
var len__7214__auto___10890 = arguments.length;
var i__7215__auto___10891 = (0);
while(true){
if((i__7215__auto___10891 < len__7214__auto___10890)){
args10837.push((arguments[i__7215__auto___10891]));

var G__10892 = (i__7215__auto___10891 + (1));
i__7215__auto___10891 = G__10892;
continue;
} else {
}
break;
}

var G__10839 = args10837.length;
switch (G__10839) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10837.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__10212__auto___10894 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto___10894,tc,fc){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto___10894,tc,fc){
return (function (state_10865){
var state_val_10866 = (state_10865[(1)]);
if((state_val_10866 === (7))){
var inst_10861 = (state_10865[(2)]);
var state_10865__$1 = state_10865;
var statearr_10867_10895 = state_10865__$1;
(statearr_10867_10895[(2)] = inst_10861);

(statearr_10867_10895[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10866 === (1))){
var state_10865__$1 = state_10865;
var statearr_10868_10896 = state_10865__$1;
(statearr_10868_10896[(2)] = null);

(statearr_10868_10896[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10866 === (4))){
var inst_10842 = (state_10865[(7)]);
var inst_10842__$1 = (state_10865[(2)]);
var inst_10843 = (inst_10842__$1 == null);
var state_10865__$1 = (function (){var statearr_10869 = state_10865;
(statearr_10869[(7)] = inst_10842__$1);

return statearr_10869;
})();
if(cljs.core.truth_(inst_10843)){
var statearr_10870_10897 = state_10865__$1;
(statearr_10870_10897[(1)] = (5));

} else {
var statearr_10871_10898 = state_10865__$1;
(statearr_10871_10898[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10866 === (13))){
var state_10865__$1 = state_10865;
var statearr_10872_10899 = state_10865__$1;
(statearr_10872_10899[(2)] = null);

(statearr_10872_10899[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10866 === (6))){
var inst_10842 = (state_10865[(7)]);
var inst_10848 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_10842) : p.call(null,inst_10842));
var state_10865__$1 = state_10865;
if(cljs.core.truth_(inst_10848)){
var statearr_10873_10900 = state_10865__$1;
(statearr_10873_10900[(1)] = (9));

} else {
var statearr_10874_10901 = state_10865__$1;
(statearr_10874_10901[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10866 === (3))){
var inst_10863 = (state_10865[(2)]);
var state_10865__$1 = state_10865;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10865__$1,inst_10863);
} else {
if((state_val_10866 === (12))){
var state_10865__$1 = state_10865;
var statearr_10875_10902 = state_10865__$1;
(statearr_10875_10902[(2)] = null);

(statearr_10875_10902[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10866 === (2))){
var state_10865__$1 = state_10865;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10865__$1,(4),ch);
} else {
if((state_val_10866 === (11))){
var inst_10842 = (state_10865[(7)]);
var inst_10852 = (state_10865[(2)]);
var state_10865__$1 = state_10865;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10865__$1,(8),inst_10852,inst_10842);
} else {
if((state_val_10866 === (9))){
var state_10865__$1 = state_10865;
var statearr_10876_10903 = state_10865__$1;
(statearr_10876_10903[(2)] = tc);

(statearr_10876_10903[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10866 === (5))){
var inst_10845 = cljs.core.async.close_BANG_(tc);
var inst_10846 = cljs.core.async.close_BANG_(fc);
var state_10865__$1 = (function (){var statearr_10877 = state_10865;
(statearr_10877[(8)] = inst_10845);

return statearr_10877;
})();
var statearr_10878_10904 = state_10865__$1;
(statearr_10878_10904[(2)] = inst_10846);

(statearr_10878_10904[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10866 === (14))){
var inst_10859 = (state_10865[(2)]);
var state_10865__$1 = state_10865;
var statearr_10879_10905 = state_10865__$1;
(statearr_10879_10905[(2)] = inst_10859);

(statearr_10879_10905[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10866 === (10))){
var state_10865__$1 = state_10865;
var statearr_10880_10906 = state_10865__$1;
(statearr_10880_10906[(2)] = fc);

(statearr_10880_10906[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10866 === (8))){
var inst_10854 = (state_10865[(2)]);
var state_10865__$1 = state_10865;
if(cljs.core.truth_(inst_10854)){
var statearr_10881_10907 = state_10865__$1;
(statearr_10881_10907[(1)] = (12));

} else {
var statearr_10882_10908 = state_10865__$1;
(statearr_10882_10908[(1)] = (13));

}

return cljs.core.cst$kw$recur;
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
});})(c__10212__auto___10894,tc,fc))
;
return ((function (switch__10098__auto__,c__10212__auto___10894,tc,fc){
return (function() {
var cljs$core$async$state_machine__10099__auto__ = null;
var cljs$core$async$state_machine__10099__auto____0 = (function (){
var statearr_10886 = [null,null,null,null,null,null,null,null,null];
(statearr_10886[(0)] = cljs$core$async$state_machine__10099__auto__);

(statearr_10886[(1)] = (1));

return statearr_10886;
});
var cljs$core$async$state_machine__10099__auto____1 = (function (state_10865){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_10865);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e10887){if((e10887 instanceof Object)){
var ex__10102__auto__ = e10887;
var statearr_10888_10909 = state_10865;
(statearr_10888_10909[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10865);

return cljs.core.cst$kw$recur;
} else {
throw e10887;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__10910 = state_10865;
state_10865 = G__10910;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
cljs$core$async$state_machine__10099__auto__ = function(state_10865){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10099__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10099__auto____1.call(this,state_10865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10099__auto____0;
cljs$core$async$state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10099__auto____1;
return cljs$core$async$state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto___10894,tc,fc))
})();
var state__10214__auto__ = (function (){var statearr_10889 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_10889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto___10894);

return statearr_10889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto___10894,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__10212__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto__){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto__){
return (function (state_10974){
var state_val_10975 = (state_10974[(1)]);
if((state_val_10975 === (7))){
var inst_10970 = (state_10974[(2)]);
var state_10974__$1 = state_10974;
var statearr_10976_10997 = state_10974__$1;
(statearr_10976_10997[(2)] = inst_10970);

(statearr_10976_10997[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10975 === (1))){
var inst_10954 = init;
var state_10974__$1 = (function (){var statearr_10977 = state_10974;
(statearr_10977[(7)] = inst_10954);

return statearr_10977;
})();
var statearr_10978_10998 = state_10974__$1;
(statearr_10978_10998[(2)] = null);

(statearr_10978_10998[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10975 === (4))){
var inst_10957 = (state_10974[(8)]);
var inst_10957__$1 = (state_10974[(2)]);
var inst_10958 = (inst_10957__$1 == null);
var state_10974__$1 = (function (){var statearr_10979 = state_10974;
(statearr_10979[(8)] = inst_10957__$1);

return statearr_10979;
})();
if(cljs.core.truth_(inst_10958)){
var statearr_10980_10999 = state_10974__$1;
(statearr_10980_10999[(1)] = (5));

} else {
var statearr_10981_11000 = state_10974__$1;
(statearr_10981_11000[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10975 === (6))){
var inst_10961 = (state_10974[(9)]);
var inst_10954 = (state_10974[(7)]);
var inst_10957 = (state_10974[(8)]);
var inst_10961__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_10954,inst_10957) : f.call(null,inst_10954,inst_10957));
var inst_10962 = cljs.core.reduced_QMARK_(inst_10961__$1);
var state_10974__$1 = (function (){var statearr_10982 = state_10974;
(statearr_10982[(9)] = inst_10961__$1);

return statearr_10982;
})();
if(inst_10962){
var statearr_10983_11001 = state_10974__$1;
(statearr_10983_11001[(1)] = (8));

} else {
var statearr_10984_11002 = state_10974__$1;
(statearr_10984_11002[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10975 === (3))){
var inst_10972 = (state_10974[(2)]);
var state_10974__$1 = state_10974;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10974__$1,inst_10972);
} else {
if((state_val_10975 === (2))){
var state_10974__$1 = state_10974;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10974__$1,(4),ch);
} else {
if((state_val_10975 === (9))){
var inst_10961 = (state_10974[(9)]);
var inst_10954 = inst_10961;
var state_10974__$1 = (function (){var statearr_10985 = state_10974;
(statearr_10985[(7)] = inst_10954);

return statearr_10985;
})();
var statearr_10986_11003 = state_10974__$1;
(statearr_10986_11003[(2)] = null);

(statearr_10986_11003[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10975 === (5))){
var inst_10954 = (state_10974[(7)]);
var state_10974__$1 = state_10974;
var statearr_10987_11004 = state_10974__$1;
(statearr_10987_11004[(2)] = inst_10954);

(statearr_10987_11004[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10975 === (10))){
var inst_10968 = (state_10974[(2)]);
var state_10974__$1 = state_10974;
var statearr_10988_11005 = state_10974__$1;
(statearr_10988_11005[(2)] = inst_10968);

(statearr_10988_11005[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10975 === (8))){
var inst_10961 = (state_10974[(9)]);
var inst_10964 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_10961) : cljs.core.deref.call(null,inst_10961));
var state_10974__$1 = state_10974;
var statearr_10989_11006 = state_10974__$1;
(statearr_10989_11006[(2)] = inst_10964);

(statearr_10989_11006[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__10212__auto__))
;
return ((function (switch__10098__auto__,c__10212__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__10099__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10099__auto____0 = (function (){
var statearr_10993 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10993[(0)] = cljs$core$async$reduce_$_state_machine__10099__auto__);

(statearr_10993[(1)] = (1));

return statearr_10993;
});
var cljs$core$async$reduce_$_state_machine__10099__auto____1 = (function (state_10974){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_10974);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e10994){if((e10994 instanceof Object)){
var ex__10102__auto__ = e10994;
var statearr_10995_11007 = state_10974;
(statearr_10995_11007[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10974);

return cljs.core.cst$kw$recur;
} else {
throw e10994;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__11008 = state_10974;
state_10974 = G__11008;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10099__auto__ = function(state_10974){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10099__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10099__auto____1.call(this,state_10974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10099__auto____0;
cljs$core$async$reduce_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10099__auto____1;
return cljs$core$async$reduce_$_state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto__))
})();
var state__10214__auto__ = (function (){var statearr_10996 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_10996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto__);

return statearr_10996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto__))
);

return c__10212__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args11009 = [];
var len__7214__auto___11061 = arguments.length;
var i__7215__auto___11062 = (0);
while(true){
if((i__7215__auto___11062 < len__7214__auto___11061)){
args11009.push((arguments[i__7215__auto___11062]));

var G__11063 = (i__7215__auto___11062 + (1));
i__7215__auto___11062 = G__11063;
continue;
} else {
}
break;
}

var G__11011 = args11009.length;
switch (G__11011) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11009.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__10212__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto__){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto__){
return (function (state_11036){
var state_val_11037 = (state_11036[(1)]);
if((state_val_11037 === (7))){
var inst_11018 = (state_11036[(2)]);
var state_11036__$1 = state_11036;
var statearr_11038_11065 = state_11036__$1;
(statearr_11038_11065[(2)] = inst_11018);

(statearr_11038_11065[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11037 === (1))){
var inst_11012 = cljs.core.seq(coll);
var inst_11013 = inst_11012;
var state_11036__$1 = (function (){var statearr_11039 = state_11036;
(statearr_11039[(7)] = inst_11013);

return statearr_11039;
})();
var statearr_11040_11066 = state_11036__$1;
(statearr_11040_11066[(2)] = null);

(statearr_11040_11066[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11037 === (4))){
var inst_11013 = (state_11036[(7)]);
var inst_11016 = cljs.core.first(inst_11013);
var state_11036__$1 = state_11036;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11036__$1,(7),ch,inst_11016);
} else {
if((state_val_11037 === (13))){
var inst_11030 = (state_11036[(2)]);
var state_11036__$1 = state_11036;
var statearr_11041_11067 = state_11036__$1;
(statearr_11041_11067[(2)] = inst_11030);

(statearr_11041_11067[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11037 === (6))){
var inst_11021 = (state_11036[(2)]);
var state_11036__$1 = state_11036;
if(cljs.core.truth_(inst_11021)){
var statearr_11042_11068 = state_11036__$1;
(statearr_11042_11068[(1)] = (8));

} else {
var statearr_11043_11069 = state_11036__$1;
(statearr_11043_11069[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11037 === (3))){
var inst_11034 = (state_11036[(2)]);
var state_11036__$1 = state_11036;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11036__$1,inst_11034);
} else {
if((state_val_11037 === (12))){
var state_11036__$1 = state_11036;
var statearr_11044_11070 = state_11036__$1;
(statearr_11044_11070[(2)] = null);

(statearr_11044_11070[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11037 === (2))){
var inst_11013 = (state_11036[(7)]);
var state_11036__$1 = state_11036;
if(cljs.core.truth_(inst_11013)){
var statearr_11045_11071 = state_11036__$1;
(statearr_11045_11071[(1)] = (4));

} else {
var statearr_11046_11072 = state_11036__$1;
(statearr_11046_11072[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11037 === (11))){
var inst_11027 = cljs.core.async.close_BANG_(ch);
var state_11036__$1 = state_11036;
var statearr_11047_11073 = state_11036__$1;
(statearr_11047_11073[(2)] = inst_11027);

(statearr_11047_11073[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11037 === (9))){
var state_11036__$1 = state_11036;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11048_11074 = state_11036__$1;
(statearr_11048_11074[(1)] = (11));

} else {
var statearr_11049_11075 = state_11036__$1;
(statearr_11049_11075[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11037 === (5))){
var inst_11013 = (state_11036[(7)]);
var state_11036__$1 = state_11036;
var statearr_11050_11076 = state_11036__$1;
(statearr_11050_11076[(2)] = inst_11013);

(statearr_11050_11076[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11037 === (10))){
var inst_11032 = (state_11036[(2)]);
var state_11036__$1 = state_11036;
var statearr_11051_11077 = state_11036__$1;
(statearr_11051_11077[(2)] = inst_11032);

(statearr_11051_11077[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11037 === (8))){
var inst_11013 = (state_11036[(7)]);
var inst_11023 = cljs.core.next(inst_11013);
var inst_11013__$1 = inst_11023;
var state_11036__$1 = (function (){var statearr_11052 = state_11036;
(statearr_11052[(7)] = inst_11013__$1);

return statearr_11052;
})();
var statearr_11053_11078 = state_11036__$1;
(statearr_11053_11078[(2)] = null);

(statearr_11053_11078[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__10212__auto__))
;
return ((function (switch__10098__auto__,c__10212__auto__){
return (function() {
var cljs$core$async$state_machine__10099__auto__ = null;
var cljs$core$async$state_machine__10099__auto____0 = (function (){
var statearr_11057 = [null,null,null,null,null,null,null,null];
(statearr_11057[(0)] = cljs$core$async$state_machine__10099__auto__);

(statearr_11057[(1)] = (1));

return statearr_11057;
});
var cljs$core$async$state_machine__10099__auto____1 = (function (state_11036){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_11036);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e11058){if((e11058 instanceof Object)){
var ex__10102__auto__ = e11058;
var statearr_11059_11079 = state_11036;
(statearr_11059_11079[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11036);

return cljs.core.cst$kw$recur;
} else {
throw e11058;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__11080 = state_11036;
state_11036 = G__11080;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
cljs$core$async$state_machine__10099__auto__ = function(state_11036){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10099__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10099__auto____1.call(this,state_11036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10099__auto____0;
cljs$core$async$state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10099__auto____1;
return cljs$core$async$state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto__))
})();
var state__10214__auto__ = (function (){var statearr_11060 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_11060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto__);

return statearr_11060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto__))
);

return c__10212__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__6811__auto__ = (((_ == null))?null:_);
var m__6812__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return (m__6812__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6812__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__6812__auto__.call(null,_));
} else {
var m__6812__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return (m__6812__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6812__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__6812__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return (m__6812__auto__.cljs$core$IFn$_invoke$arity$3 ? m__6812__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__6812__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__6812__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return (m__6812__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__6812__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__6812__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return (m__6812__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6812__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6812__auto__.call(null,m,ch));
} else {
var m__6812__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return (m__6812__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6812__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6812__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return (m__6812__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6812__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__6812__auto__.call(null,m));
} else {
var m__6812__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return (m__6812__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6812__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__6812__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
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
var cs = (function (){var G__11305 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11305) : cljs.core.atom.call(null,G__11305));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async11306 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11306 = (function (mult,ch,cs,meta11307){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta11307 = meta11307;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11308,meta11307__$1){
var self__ = this;
var _11308__$1 = this;
return (new cljs.core.async.t_cljs$core$async11306(self__.mult,self__.ch,self__.cs,meta11307__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async11306.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11308){
var self__ = this;
var _11308__$1 = this;
return self__.meta11307;
});})(cs))
;

cljs.core.async.t_cljs$core$async11306.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async11306.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async11306.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async11306.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async11306.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async11306.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__11309_11529 = self__.cs;
var G__11310_11530 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11309_11529,G__11310_11530) : cljs.core.reset_BANG_.call(null,G__11309_11529,G__11310_11530));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async11306.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta11307], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async11306.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11306.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11306";

cljs.core.async.t_cljs$core$async11306.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"cljs.core.async/t_cljs$core$async11306");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async11306 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async11306(mult__$1,ch__$1,cs__$1,meta11307){
return (new cljs.core.async.t_cljs$core$async11306(mult__$1,ch__$1,cs__$1,meta11307));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async11306(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__10212__auto___11531 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto___11531,cs,m,dchan,dctr,done){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto___11531,cs,m,dchan,dctr,done){
return (function (state_11441){
var state_val_11442 = (state_11441[(1)]);
if((state_val_11442 === (7))){
var inst_11437 = (state_11441[(2)]);
var state_11441__$1 = state_11441;
var statearr_11443_11532 = state_11441__$1;
(statearr_11443_11532[(2)] = inst_11437);

(statearr_11443_11532[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11442 === (20))){
var inst_11342 = (state_11441[(7)]);
var inst_11352 = cljs.core.first(inst_11342);
var inst_11353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11352,(0),null);
var inst_11354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11352,(1),null);
var state_11441__$1 = (function (){var statearr_11444 = state_11441;
(statearr_11444[(8)] = inst_11353);

return statearr_11444;
})();
if(cljs.core.truth_(inst_11354)){
var statearr_11445_11533 = state_11441__$1;
(statearr_11445_11533[(1)] = (22));

} else {
var statearr_11446_11534 = state_11441__$1;
(statearr_11446_11534[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11442 === (27))){
var inst_11382 = (state_11441[(9)]);
var inst_11389 = (state_11441[(10)]);
var inst_11384 = (state_11441[(11)]);
var inst_11313 = (state_11441[(12)]);
var inst_11389__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_11382,inst_11384);
var inst_11390 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11389__$1,inst_11313,done);
var state_11441__$1 = (function (){var statearr_11447 = state_11441;
(statearr_11447[(10)] = inst_11389__$1);

return statearr_11447;
})();
if(cljs.core.truth_(inst_11390)){
var statearr_11448_11535 = state_11441__$1;
(statearr_11448_11535[(1)] = (30));

} else {
var statearr_11449_11536 = state_11441__$1;
(statearr_11449_11536[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11442 === (1))){
var state_11441__$1 = state_11441;
var statearr_11450_11537 = state_11441__$1;
(statearr_11450_11537[(2)] = null);

(statearr_11450_11537[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11442 === (24))){
var inst_11342 = (state_11441[(7)]);
var inst_11359 = (state_11441[(2)]);
var inst_11360 = cljs.core.next(inst_11342);
var inst_11322 = inst_11360;
var inst_11323 = null;
var inst_11324 = (0);
var inst_11325 = (0);
var state_11441__$1 = (function (){var statearr_11451 = state_11441;
(statearr_11451[(13)] = inst_11323);

(statearr_11451[(14)] = inst_11359);

(statearr_11451[(15)] = inst_11322);

(statearr_11451[(16)] = inst_11325);

(statearr_11451[(17)] = inst_11324);

return statearr_11451;
})();
var statearr_11452_11538 = state_11441__$1;
(statearr_11452_11538[(2)] = null);

(statearr_11452_11538[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11442 === (39))){
var state_11441__$1 = state_11441;
var statearr_11456_11539 = state_11441__$1;
(statearr_11456_11539[(2)] = null);

(statearr_11456_11539[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11442 === (4))){
var inst_11313 = (state_11441[(12)]);
var inst_11313__$1 = (state_11441[(2)]);
var inst_11314 = (inst_11313__$1 == null);
var state_11441__$1 = (function (){var statearr_11457 = state_11441;
(statearr_11457[(12)] = inst_11313__$1);

return statearr_11457;
})();
if(cljs.core.truth_(inst_11314)){
var statearr_11458_11540 = state_11441__$1;
(statearr_11458_11540[(1)] = (5));

} else {
var statearr_11459_11541 = state_11441__$1;
(statearr_11459_11541[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11442 === (15))){
var inst_11323 = (state_11441[(13)]);
var inst_11322 = (state_11441[(15)]);
var inst_11325 = (state_11441[(16)]);
var inst_11324 = (state_11441[(17)]);
var inst_11338 = (state_11441[(2)]);
var inst_11339 = (inst_11325 + (1));
var tmp11453 = inst_11323;
var tmp11454 = inst_11322;
var tmp11455 = inst_11324;
var inst_11322__$1 = tmp11454;
var inst_11323__$1 = tmp11453;
var inst_11324__$1 = tmp11455;
var inst_11325__$1 = inst_11339;
var state_11441__$1 = (function (){var statearr_11460 = state_11441;
(statearr_11460[(13)] = inst_11323__$1);

(statearr_11460[(18)] = inst_11338);

(statearr_11460[(15)] = inst_11322__$1);

(statearr_11460[(16)] = inst_11325__$1);

(statearr_11460[(17)] = inst_11324__$1);

return statearr_11460;
})();
var statearr_11461_11542 = state_11441__$1;
(statearr_11461_11542[(2)] = null);

(statearr_11461_11542[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11442 === (21))){
var inst_11363 = (state_11441[(2)]);
var state_11441__$1 = state_11441;
var statearr_11465_11543 = state_11441__$1;
(statearr_11465_11543[(2)] = inst_11363);

(statearr_11465_11543[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11442 === (31))){
var inst_11389 = (state_11441[(10)]);
var inst_11393 = done(null);
var inst_11394 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11389);
var state_11441__$1 = (function (){var statearr_11466 = state_11441;
(statearr_11466[(19)] = inst_11393);

return statearr_11466;
})();
var statearr_11467_11544 = state_11441__$1;
(statearr_11467_11544[(2)] = inst_11394);

(statearr_11467_11544[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11442 === (32))){
var inst_11383 = (state_11441[(20)]);
var inst_11382 = (state_11441[(9)]);
var inst_11384 = (state_11441[(11)]);
var inst_11381 = (state_11441[(21)]);
var inst_11396 = (state_11441[(2)]);
var inst_11397 = (inst_11384 + (1));
var tmp11462 = inst_11383;
var tmp11463 = inst_11382;
var tmp11464 = inst_11381;
var inst_11381__$1 = tmp11464;
var inst_11382__$1 = tmp11463;
var inst_11383__$1 = tmp11462;
var inst_11384__$1 = inst_11397;
var state_11441__$1 = (function (){var statearr_11468 = state_11441;
(statearr_11468[(22)] = inst_11396);

(statearr_11468[(20)] = inst_11383__$1);

(statearr_11468[(9)] = inst_11382__$1);

(statearr_11468[(11)] = inst_11384__$1);

(statearr_11468[(21)] = inst_11381__$1);

return statearr_11468;
})();
var statearr_11469_11545 = state_11441__$1;
(statearr_11469_11545[(2)] = null);

(statearr_11469_11545[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11442 === (40))){
var inst_11409 = (state_11441[(23)]);
var inst_11413 = done(null);
var inst_11414 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11409);
var state_11441__$1 = (function (){var statearr_11470 = state_11441;
(statearr_11470[(24)] = inst_11413);

return statearr_11470;
})();
var statearr_11471_11546 = state_11441__$1;
(statearr_11471_11546[(2)] = inst_11414);

(statearr_11471_11546[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11442 === (33))){
var inst_11400 = (state_11441[(25)]);
var inst_11402 = cljs.core.chunked_seq_QMARK_(inst_11400);
var state_11441__$1 = state_11441;
if(inst_11402){
var statearr_11472_11547 = state_11441__$1;
(statearr_11472_11547[(1)] = (36));

} else {
var statearr_11473_11548 = state_11441__$1;
(statearr_11473_11548[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11442 === (13))){
var inst_11332 = (state_11441[(26)]);
var inst_11335 = cljs.core.async.close_BANG_(inst_11332);
var state_11441__$1 = state_11441;
var statearr_11474_11549 = state_11441__$1;
(statearr_11474_11549[(2)] = inst_11335);

(statearr_11474_11549[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11442 === (22))){
var inst_11353 = (state_11441[(8)]);
var inst_11356 = cljs.core.async.close_BANG_(inst_11353);
var state_11441__$1 = state_11441;
var statearr_11475_11550 = state_11441__$1;
(statearr_11475_11550[(2)] = inst_11356);

(statearr_11475_11550[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11442 === (36))){
var inst_11400 = (state_11441[(25)]);
var inst_11404 = cljs.core.chunk_first(inst_11400);
var inst_11405 = cljs.core.chunk_rest(inst_11400);
var inst_11406 = cljs.core.count(inst_11404);
var inst_11381 = inst_11405;
var inst_11382 = inst_11404;
var inst_11383 = inst_11406;
var inst_11384 = (0);
var state_11441__$1 = (function (){var statearr_11476 = state_11441;
(statearr_11476[(20)] = inst_11383);

(statearr_11476[(9)] = inst_11382);

(statearr_11476[(11)] = inst_11384);

(statearr_11476[(21)] = inst_11381);

return statearr_11476;
})();
var statearr_11477_11551 = state_11441__$1;
(statearr_11477_11551[(2)] = null);

(statearr_11477_11551[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11442 === (41))){
var inst_11400 = (state_11441[(25)]);
var inst_11416 = (state_11441[(2)]);
var inst_11417 = cljs.core.next(inst_11400);
var inst_11381 = inst_11417;
var inst_11382 = null;
var inst_11383 = (0);
var inst_11384 = (0);
var state_11441__$1 = (function (){var statearr_11478 = state_11441;
(statearr_11478[(20)] = inst_11383);

(statearr_11478[(9)] = inst_11382);

(statearr_11478[(27)] = inst_11416);

(statearr_11478[(11)] = inst_11384);

(statearr_11478[(21)] = inst_11381);

return statearr_11478;
})();
var statearr_11479_11552 = state_11441__$1;
(statearr_11479_11552[(2)] = null);

(statearr_11479_11552[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11442 === (43))){
var state_11441__$1 = state_11441;
var statearr_11480_11553 = state_11441__$1;
(statearr_11480_11553[(2)] = null);

(statearr_11480_11553[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11442 === (29))){
var inst_11425 = (state_11441[(2)]);
var state_11441__$1 = state_11441;
var statearr_11481_11554 = state_11441__$1;
(statearr_11481_11554[(2)] = inst_11425);

(statearr_11481_11554[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11442 === (44))){
var inst_11434 = (state_11441[(2)]);
var state_11441__$1 = (function (){var statearr_11482 = state_11441;
(statearr_11482[(28)] = inst_11434);

return statearr_11482;
})();
var statearr_11483_11555 = state_11441__$1;
(statearr_11483_11555[(2)] = null);

(statearr_11483_11555[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11442 === (6))){
var inst_11373 = (state_11441[(29)]);
var inst_11372 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_11373__$1 = cljs.core.keys(inst_11372);
var inst_11374 = cljs.core.count(inst_11373__$1);
var inst_11375 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_11374) : cljs.core.reset_BANG_.call(null,dctr,inst_11374));
var inst_11380 = cljs.core.seq(inst_11373__$1);
var inst_11381 = inst_11380;
var inst_11382 = null;
var inst_11383 = (0);
var inst_11384 = (0);
var state_11441__$1 = (function (){var statearr_11484 = state_11441;
(statearr_11484[(29)] = inst_11373__$1);

(statearr_11484[(20)] = inst_11383);

(statearr_11484[(9)] = inst_11382);

(statearr_11484[(11)] = inst_11384);

(statearr_11484[(21)] = inst_11381);

(statearr_11484[(30)] = inst_11375);

return statearr_11484;
})();
var statearr_11485_11556 = state_11441__$1;
(statearr_11485_11556[(2)] = null);

(statearr_11485_11556[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11442 === (28))){
var inst_11400 = (state_11441[(25)]);
var inst_11381 = (state_11441[(21)]);
var inst_11400__$1 = cljs.core.seq(inst_11381);
var state_11441__$1 = (function (){var statearr_11486 = state_11441;
(statearr_11486[(25)] = inst_11400__$1);

return statearr_11486;
})();
if(inst_11400__$1){
var statearr_11487_11557 = state_11441__$1;
(statearr_11487_11557[(1)] = (33));

} else {
var statearr_11488_11558 = state_11441__$1;
(statearr_11488_11558[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11442 === (25))){
var inst_11383 = (state_11441[(20)]);
var inst_11384 = (state_11441[(11)]);
var inst_11386 = (inst_11384 < inst_11383);
var inst_11387 = inst_11386;
var state_11441__$1 = state_11441;
if(cljs.core.truth_(inst_11387)){
var statearr_11489_11559 = state_11441__$1;
(statearr_11489_11559[(1)] = (27));

} else {
var statearr_11490_11560 = state_11441__$1;
(statearr_11490_11560[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11442 === (34))){
var state_11441__$1 = state_11441;
var statearr_11491_11561 = state_11441__$1;
(statearr_11491_11561[(2)] = null);

(statearr_11491_11561[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11442 === (17))){
var state_11441__$1 = state_11441;
var statearr_11492_11562 = state_11441__$1;
(statearr_11492_11562[(2)] = null);

(statearr_11492_11562[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11442 === (3))){
var inst_11439 = (state_11441[(2)]);
var state_11441__$1 = state_11441;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11441__$1,inst_11439);
} else {
if((state_val_11442 === (12))){
var inst_11368 = (state_11441[(2)]);
var state_11441__$1 = state_11441;
var statearr_11493_11563 = state_11441__$1;
(statearr_11493_11563[(2)] = inst_11368);

(statearr_11493_11563[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11442 === (2))){
var state_11441__$1 = state_11441;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11441__$1,(4),ch);
} else {
if((state_val_11442 === (23))){
var state_11441__$1 = state_11441;
var statearr_11494_11564 = state_11441__$1;
(statearr_11494_11564[(2)] = null);

(statearr_11494_11564[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11442 === (35))){
var inst_11423 = (state_11441[(2)]);
var state_11441__$1 = state_11441;
var statearr_11495_11565 = state_11441__$1;
(statearr_11495_11565[(2)] = inst_11423);

(statearr_11495_11565[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11442 === (19))){
var inst_11342 = (state_11441[(7)]);
var inst_11346 = cljs.core.chunk_first(inst_11342);
var inst_11347 = cljs.core.chunk_rest(inst_11342);
var inst_11348 = cljs.core.count(inst_11346);
var inst_11322 = inst_11347;
var inst_11323 = inst_11346;
var inst_11324 = inst_11348;
var inst_11325 = (0);
var state_11441__$1 = (function (){var statearr_11496 = state_11441;
(statearr_11496[(13)] = inst_11323);

(statearr_11496[(15)] = inst_11322);

(statearr_11496[(16)] = inst_11325);

(statearr_11496[(17)] = inst_11324);

return statearr_11496;
})();
var statearr_11497_11566 = state_11441__$1;
(statearr_11497_11566[(2)] = null);

(statearr_11497_11566[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11442 === (11))){
var inst_11342 = (state_11441[(7)]);
var inst_11322 = (state_11441[(15)]);
var inst_11342__$1 = cljs.core.seq(inst_11322);
var state_11441__$1 = (function (){var statearr_11498 = state_11441;
(statearr_11498[(7)] = inst_11342__$1);

return statearr_11498;
})();
if(inst_11342__$1){
var statearr_11499_11567 = state_11441__$1;
(statearr_11499_11567[(1)] = (16));

} else {
var statearr_11500_11568 = state_11441__$1;
(statearr_11500_11568[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11442 === (9))){
var inst_11370 = (state_11441[(2)]);
var state_11441__$1 = state_11441;
var statearr_11501_11569 = state_11441__$1;
(statearr_11501_11569[(2)] = inst_11370);

(statearr_11501_11569[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11442 === (5))){
var inst_11320 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_11321 = cljs.core.seq(inst_11320);
var inst_11322 = inst_11321;
var inst_11323 = null;
var inst_11324 = (0);
var inst_11325 = (0);
var state_11441__$1 = (function (){var statearr_11502 = state_11441;
(statearr_11502[(13)] = inst_11323);

(statearr_11502[(15)] = inst_11322);

(statearr_11502[(16)] = inst_11325);

(statearr_11502[(17)] = inst_11324);

return statearr_11502;
})();
var statearr_11503_11570 = state_11441__$1;
(statearr_11503_11570[(2)] = null);

(statearr_11503_11570[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11442 === (14))){
var state_11441__$1 = state_11441;
var statearr_11504_11571 = state_11441__$1;
(statearr_11504_11571[(2)] = null);

(statearr_11504_11571[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11442 === (45))){
var inst_11431 = (state_11441[(2)]);
var state_11441__$1 = state_11441;
var statearr_11505_11572 = state_11441__$1;
(statearr_11505_11572[(2)] = inst_11431);

(statearr_11505_11572[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11442 === (26))){
var inst_11373 = (state_11441[(29)]);
var inst_11427 = (state_11441[(2)]);
var inst_11428 = cljs.core.seq(inst_11373);
var state_11441__$1 = (function (){var statearr_11506 = state_11441;
(statearr_11506[(31)] = inst_11427);

return statearr_11506;
})();
if(inst_11428){
var statearr_11507_11573 = state_11441__$1;
(statearr_11507_11573[(1)] = (42));

} else {
var statearr_11508_11574 = state_11441__$1;
(statearr_11508_11574[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11442 === (16))){
var inst_11342 = (state_11441[(7)]);
var inst_11344 = cljs.core.chunked_seq_QMARK_(inst_11342);
var state_11441__$1 = state_11441;
if(inst_11344){
var statearr_11509_11575 = state_11441__$1;
(statearr_11509_11575[(1)] = (19));

} else {
var statearr_11510_11576 = state_11441__$1;
(statearr_11510_11576[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11442 === (38))){
var inst_11420 = (state_11441[(2)]);
var state_11441__$1 = state_11441;
var statearr_11511_11577 = state_11441__$1;
(statearr_11511_11577[(2)] = inst_11420);

(statearr_11511_11577[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11442 === (30))){
var state_11441__$1 = state_11441;
var statearr_11512_11578 = state_11441__$1;
(statearr_11512_11578[(2)] = null);

(statearr_11512_11578[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11442 === (10))){
var inst_11323 = (state_11441[(13)]);
var inst_11325 = (state_11441[(16)]);
var inst_11331 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_11323,inst_11325);
var inst_11332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11331,(0),null);
var inst_11333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11331,(1),null);
var state_11441__$1 = (function (){var statearr_11513 = state_11441;
(statearr_11513[(26)] = inst_11332);

return statearr_11513;
})();
if(cljs.core.truth_(inst_11333)){
var statearr_11514_11579 = state_11441__$1;
(statearr_11514_11579[(1)] = (13));

} else {
var statearr_11515_11580 = state_11441__$1;
(statearr_11515_11580[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11442 === (18))){
var inst_11366 = (state_11441[(2)]);
var state_11441__$1 = state_11441;
var statearr_11516_11581 = state_11441__$1;
(statearr_11516_11581[(2)] = inst_11366);

(statearr_11516_11581[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11442 === (42))){
var state_11441__$1 = state_11441;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11441__$1,(45),dchan);
} else {
if((state_val_11442 === (37))){
var inst_11400 = (state_11441[(25)]);
var inst_11313 = (state_11441[(12)]);
var inst_11409 = (state_11441[(23)]);
var inst_11409__$1 = cljs.core.first(inst_11400);
var inst_11410 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11409__$1,inst_11313,done);
var state_11441__$1 = (function (){var statearr_11517 = state_11441;
(statearr_11517[(23)] = inst_11409__$1);

return statearr_11517;
})();
if(cljs.core.truth_(inst_11410)){
var statearr_11518_11582 = state_11441__$1;
(statearr_11518_11582[(1)] = (39));

} else {
var statearr_11519_11583 = state_11441__$1;
(statearr_11519_11583[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11442 === (8))){
var inst_11325 = (state_11441[(16)]);
var inst_11324 = (state_11441[(17)]);
var inst_11327 = (inst_11325 < inst_11324);
var inst_11328 = inst_11327;
var state_11441__$1 = state_11441;
if(cljs.core.truth_(inst_11328)){
var statearr_11520_11584 = state_11441__$1;
(statearr_11520_11584[(1)] = (10));

} else {
var statearr_11521_11585 = state_11441__$1;
(statearr_11521_11585[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__10212__auto___11531,cs,m,dchan,dctr,done))
;
return ((function (switch__10098__auto__,c__10212__auto___11531,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10099__auto__ = null;
var cljs$core$async$mult_$_state_machine__10099__auto____0 = (function (){
var statearr_11525 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11525[(0)] = cljs$core$async$mult_$_state_machine__10099__auto__);

(statearr_11525[(1)] = (1));

return statearr_11525;
});
var cljs$core$async$mult_$_state_machine__10099__auto____1 = (function (state_11441){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_11441);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e11526){if((e11526 instanceof Object)){
var ex__10102__auto__ = e11526;
var statearr_11527_11586 = state_11441;
(statearr_11527_11586[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11441);

return cljs.core.cst$kw$recur;
} else {
throw e11526;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__11587 = state_11441;
state_11441 = G__11587;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10099__auto__ = function(state_11441){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10099__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10099__auto____1.call(this,state_11441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10099__auto____0;
cljs$core$async$mult_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10099__auto____1;
return cljs$core$async$mult_$_state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto___11531,cs,m,dchan,dctr,done))
})();
var state__10214__auto__ = (function (){var statearr_11528 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_11528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto___11531);

return statearr_11528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto___11531,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args11588 = [];
var len__7214__auto___11591 = arguments.length;
var i__7215__auto___11592 = (0);
while(true){
if((i__7215__auto___11592 < len__7214__auto___11591)){
args11588.push((arguments[i__7215__auto___11592]));

var G__11593 = (i__7215__auto___11592 + (1));
i__7215__auto___11592 = G__11593;
continue;
} else {
}
break;
}

var G__11590 = args11588.length;
switch (G__11590) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11588.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
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

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return (m__6812__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6812__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6812__auto__.call(null,m,ch));
} else {
var m__6812__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return (m__6812__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6812__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6812__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return (m__6812__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6812__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6812__auto__.call(null,m,ch));
} else {
var m__6812__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return (m__6812__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6812__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6812__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return (m__6812__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6812__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__6812__auto__.call(null,m));
} else {
var m__6812__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return (m__6812__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6812__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__6812__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return (m__6812__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6812__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__6812__auto__.call(null,m,state_map));
} else {
var m__6812__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return (m__6812__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6812__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__6812__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return (m__6812__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6812__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__6812__auto__.call(null,m,mode));
} else {
var m__6812__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return (m__6812__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6812__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__6812__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7221__auto__ = [];
var len__7214__auto___11605 = arguments.length;
var i__7215__auto___11606 = (0);
while(true){
if((i__7215__auto___11606 < len__7214__auto___11605)){
args__7221__auto__.push((arguments[i__7215__auto___11606]));

var G__11607 = (i__7215__auto___11606 + (1));
i__7215__auto___11606 = G__11607;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((3) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7222__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11599){
var map__11600 = p__11599;
var map__11600__$1 = ((((!((map__11600 == null)))?((((map__11600.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11600.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11600):map__11600);
var opts = map__11600__$1;
var statearr_11602_11608 = state;
(statearr_11602_11608[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__11600,map__11600__$1,opts){
return (function (val){
var statearr_11603_11609 = state;
(statearr_11603_11609[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__11600,map__11600__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_11604_11610 = state;
(statearr_11604_11610[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11595){
var G__11596 = cljs.core.first(seq11595);
var seq11595__$1 = cljs.core.next(seq11595);
var G__11597 = cljs.core.first(seq11595__$1);
var seq11595__$2 = cljs.core.next(seq11595__$1);
var G__11598 = cljs.core.first(seq11595__$2);
var seq11595__$3 = cljs.core.next(seq11595__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11596,G__11597,G__11598,seq11595__$3);
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
var cs = (function (){var G__11777 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11777) : cljs.core.atom.call(null,G__11777));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute) : cljs.core.atom.call(null,cljs.core.cst$kw$mute));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async11778 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11778 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11779){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta11779 = meta11779;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11780,meta11779__$1){
var self__ = this;
var _11780__$1 = this;
return (new cljs.core.async.t_cljs$core$async11778(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11779__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11778.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11780){
var self__ = this;
var _11780__$1 = this;
return self__.meta11779;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11778.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async11778.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11778.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async11778.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11778.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11778.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__11781_11943 = self__.cs;
var G__11782_11944 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11781_11943,G__11782_11944) : cljs.core.reset_BANG_.call(null,G__11781_11943,G__11782_11944));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11778.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11778.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$mode)], 0)))].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11778.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta11779], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11778.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11778.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11778";

cljs.core.async.t_cljs$core$async11778.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"cljs.core.async/t_cljs$core$async11778");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async11778 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async11778(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11779){
return (new cljs.core.async.t_cljs$core$async11778(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11779));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async11778(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10212__auto___11945 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto___11945,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto___11945,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_11880){
var state_val_11881 = (state_11880[(1)]);
if((state_val_11881 === (7))){
var inst_11798 = (state_11880[(2)]);
var state_11880__$1 = state_11880;
var statearr_11882_11946 = state_11880__$1;
(statearr_11882_11946[(2)] = inst_11798);

(statearr_11882_11946[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11881 === (20))){
var inst_11810 = (state_11880[(7)]);
var state_11880__$1 = state_11880;
var statearr_11883_11947 = state_11880__$1;
(statearr_11883_11947[(2)] = inst_11810);

(statearr_11883_11947[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11881 === (27))){
var state_11880__$1 = state_11880;
var statearr_11884_11948 = state_11880__$1;
(statearr_11884_11948[(2)] = null);

(statearr_11884_11948[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11881 === (1))){
var inst_11786 = (state_11880[(8)]);
var inst_11786__$1 = calc_state();
var inst_11788 = (inst_11786__$1 == null);
var inst_11789 = cljs.core.not(inst_11788);
var state_11880__$1 = (function (){var statearr_11885 = state_11880;
(statearr_11885[(8)] = inst_11786__$1);

return statearr_11885;
})();
if(inst_11789){
var statearr_11886_11949 = state_11880__$1;
(statearr_11886_11949[(1)] = (2));

} else {
var statearr_11887_11950 = state_11880__$1;
(statearr_11887_11950[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11881 === (24))){
var inst_11833 = (state_11880[(9)]);
var inst_11854 = (state_11880[(10)]);
var inst_11840 = (state_11880[(11)]);
var inst_11854__$1 = (inst_11833.cljs$core$IFn$_invoke$arity$1 ? inst_11833.cljs$core$IFn$_invoke$arity$1(inst_11840) : inst_11833.call(null,inst_11840));
var state_11880__$1 = (function (){var statearr_11888 = state_11880;
(statearr_11888[(10)] = inst_11854__$1);

return statearr_11888;
})();
if(cljs.core.truth_(inst_11854__$1)){
var statearr_11889_11951 = state_11880__$1;
(statearr_11889_11951[(1)] = (29));

} else {
var statearr_11890_11952 = state_11880__$1;
(statearr_11890_11952[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11881 === (4))){
var inst_11801 = (state_11880[(2)]);
var state_11880__$1 = state_11880;
if(cljs.core.truth_(inst_11801)){
var statearr_11891_11953 = state_11880__$1;
(statearr_11891_11953[(1)] = (8));

} else {
var statearr_11892_11954 = state_11880__$1;
(statearr_11892_11954[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11881 === (15))){
var inst_11827 = (state_11880[(2)]);
var state_11880__$1 = state_11880;
if(cljs.core.truth_(inst_11827)){
var statearr_11893_11955 = state_11880__$1;
(statearr_11893_11955[(1)] = (19));

} else {
var statearr_11894_11956 = state_11880__$1;
(statearr_11894_11956[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11881 === (21))){
var inst_11832 = (state_11880[(12)]);
var inst_11832__$1 = (state_11880[(2)]);
var inst_11833 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11832__$1,cljs.core.cst$kw$solos);
var inst_11834 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11832__$1,cljs.core.cst$kw$mutes);
var inst_11835 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11832__$1,cljs.core.cst$kw$reads);
var state_11880__$1 = (function (){var statearr_11895 = state_11880;
(statearr_11895[(13)] = inst_11834);

(statearr_11895[(12)] = inst_11832__$1);

(statearr_11895[(9)] = inst_11833);

return statearr_11895;
})();
return cljs.core.async.ioc_alts_BANG_(state_11880__$1,(22),inst_11835);
} else {
if((state_val_11881 === (31))){
var inst_11862 = (state_11880[(2)]);
var state_11880__$1 = state_11880;
if(cljs.core.truth_(inst_11862)){
var statearr_11896_11957 = state_11880__$1;
(statearr_11896_11957[(1)] = (32));

} else {
var statearr_11897_11958 = state_11880__$1;
(statearr_11897_11958[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11881 === (32))){
var inst_11839 = (state_11880[(14)]);
var state_11880__$1 = state_11880;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11880__$1,(35),out,inst_11839);
} else {
if((state_val_11881 === (33))){
var inst_11832 = (state_11880[(12)]);
var inst_11810 = inst_11832;
var state_11880__$1 = (function (){var statearr_11898 = state_11880;
(statearr_11898[(7)] = inst_11810);

return statearr_11898;
})();
var statearr_11899_11959 = state_11880__$1;
(statearr_11899_11959[(2)] = null);

(statearr_11899_11959[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11881 === (13))){
var inst_11810 = (state_11880[(7)]);
var inst_11817 = inst_11810.cljs$lang$protocol_mask$partition0$;
var inst_11818 = (inst_11817 & (64));
var inst_11819 = inst_11810.cljs$core$ISeq$;
var inst_11820 = (inst_11818) || (inst_11819);
var state_11880__$1 = state_11880;
if(cljs.core.truth_(inst_11820)){
var statearr_11900_11960 = state_11880__$1;
(statearr_11900_11960[(1)] = (16));

} else {
var statearr_11901_11961 = state_11880__$1;
(statearr_11901_11961[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11881 === (22))){
var inst_11840 = (state_11880[(11)]);
var inst_11839 = (state_11880[(14)]);
var inst_11838 = (state_11880[(2)]);
var inst_11839__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11838,(0),null);
var inst_11840__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11838,(1),null);
var inst_11841 = (inst_11839__$1 == null);
var inst_11842 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11840__$1,change);
var inst_11843 = (inst_11841) || (inst_11842);
var state_11880__$1 = (function (){var statearr_11902 = state_11880;
(statearr_11902[(11)] = inst_11840__$1);

(statearr_11902[(14)] = inst_11839__$1);

return statearr_11902;
})();
if(cljs.core.truth_(inst_11843)){
var statearr_11903_11962 = state_11880__$1;
(statearr_11903_11962[(1)] = (23));

} else {
var statearr_11904_11963 = state_11880__$1;
(statearr_11904_11963[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11881 === (36))){
var inst_11832 = (state_11880[(12)]);
var inst_11810 = inst_11832;
var state_11880__$1 = (function (){var statearr_11905 = state_11880;
(statearr_11905[(7)] = inst_11810);

return statearr_11905;
})();
var statearr_11906_11964 = state_11880__$1;
(statearr_11906_11964[(2)] = null);

(statearr_11906_11964[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11881 === (29))){
var inst_11854 = (state_11880[(10)]);
var state_11880__$1 = state_11880;
var statearr_11907_11965 = state_11880__$1;
(statearr_11907_11965[(2)] = inst_11854);

(statearr_11907_11965[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11881 === (6))){
var state_11880__$1 = state_11880;
var statearr_11908_11966 = state_11880__$1;
(statearr_11908_11966[(2)] = false);

(statearr_11908_11966[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11881 === (28))){
var inst_11850 = (state_11880[(2)]);
var inst_11851 = calc_state();
var inst_11810 = inst_11851;
var state_11880__$1 = (function (){var statearr_11909 = state_11880;
(statearr_11909[(15)] = inst_11850);

(statearr_11909[(7)] = inst_11810);

return statearr_11909;
})();
var statearr_11910_11967 = state_11880__$1;
(statearr_11910_11967[(2)] = null);

(statearr_11910_11967[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11881 === (25))){
var inst_11876 = (state_11880[(2)]);
var state_11880__$1 = state_11880;
var statearr_11911_11968 = state_11880__$1;
(statearr_11911_11968[(2)] = inst_11876);

(statearr_11911_11968[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11881 === (34))){
var inst_11874 = (state_11880[(2)]);
var state_11880__$1 = state_11880;
var statearr_11912_11969 = state_11880__$1;
(statearr_11912_11969[(2)] = inst_11874);

(statearr_11912_11969[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11881 === (17))){
var state_11880__$1 = state_11880;
var statearr_11913_11970 = state_11880__$1;
(statearr_11913_11970[(2)] = false);

(statearr_11913_11970[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11881 === (3))){
var state_11880__$1 = state_11880;
var statearr_11914_11971 = state_11880__$1;
(statearr_11914_11971[(2)] = false);

(statearr_11914_11971[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11881 === (12))){
var inst_11878 = (state_11880[(2)]);
var state_11880__$1 = state_11880;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11880__$1,inst_11878);
} else {
if((state_val_11881 === (2))){
var inst_11786 = (state_11880[(8)]);
var inst_11791 = inst_11786.cljs$lang$protocol_mask$partition0$;
var inst_11792 = (inst_11791 & (64));
var inst_11793 = inst_11786.cljs$core$ISeq$;
var inst_11794 = (inst_11792) || (inst_11793);
var state_11880__$1 = state_11880;
if(cljs.core.truth_(inst_11794)){
var statearr_11915_11972 = state_11880__$1;
(statearr_11915_11972[(1)] = (5));

} else {
var statearr_11916_11973 = state_11880__$1;
(statearr_11916_11973[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11881 === (23))){
var inst_11839 = (state_11880[(14)]);
var inst_11845 = (inst_11839 == null);
var state_11880__$1 = state_11880;
if(cljs.core.truth_(inst_11845)){
var statearr_11917_11974 = state_11880__$1;
(statearr_11917_11974[(1)] = (26));

} else {
var statearr_11918_11975 = state_11880__$1;
(statearr_11918_11975[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11881 === (35))){
var inst_11865 = (state_11880[(2)]);
var state_11880__$1 = state_11880;
if(cljs.core.truth_(inst_11865)){
var statearr_11919_11976 = state_11880__$1;
(statearr_11919_11976[(1)] = (36));

} else {
var statearr_11920_11977 = state_11880__$1;
(statearr_11920_11977[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11881 === (19))){
var inst_11810 = (state_11880[(7)]);
var inst_11829 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11810);
var state_11880__$1 = state_11880;
var statearr_11921_11978 = state_11880__$1;
(statearr_11921_11978[(2)] = inst_11829);

(statearr_11921_11978[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11881 === (11))){
var inst_11810 = (state_11880[(7)]);
var inst_11814 = (inst_11810 == null);
var inst_11815 = cljs.core.not(inst_11814);
var state_11880__$1 = state_11880;
if(inst_11815){
var statearr_11922_11979 = state_11880__$1;
(statearr_11922_11979[(1)] = (13));

} else {
var statearr_11923_11980 = state_11880__$1;
(statearr_11923_11980[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11881 === (9))){
var inst_11786 = (state_11880[(8)]);
var state_11880__$1 = state_11880;
var statearr_11924_11981 = state_11880__$1;
(statearr_11924_11981[(2)] = inst_11786);

(statearr_11924_11981[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11881 === (5))){
var state_11880__$1 = state_11880;
var statearr_11925_11982 = state_11880__$1;
(statearr_11925_11982[(2)] = true);

(statearr_11925_11982[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11881 === (14))){
var state_11880__$1 = state_11880;
var statearr_11926_11983 = state_11880__$1;
(statearr_11926_11983[(2)] = false);

(statearr_11926_11983[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11881 === (26))){
var inst_11840 = (state_11880[(11)]);
var inst_11847 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_11840);
var state_11880__$1 = state_11880;
var statearr_11927_11984 = state_11880__$1;
(statearr_11927_11984[(2)] = inst_11847);

(statearr_11927_11984[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11881 === (16))){
var state_11880__$1 = state_11880;
var statearr_11928_11985 = state_11880__$1;
(statearr_11928_11985[(2)] = true);

(statearr_11928_11985[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11881 === (38))){
var inst_11870 = (state_11880[(2)]);
var state_11880__$1 = state_11880;
var statearr_11929_11986 = state_11880__$1;
(statearr_11929_11986[(2)] = inst_11870);

(statearr_11929_11986[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11881 === (30))){
var inst_11834 = (state_11880[(13)]);
var inst_11833 = (state_11880[(9)]);
var inst_11840 = (state_11880[(11)]);
var inst_11857 = cljs.core.empty_QMARK_(inst_11833);
var inst_11858 = (inst_11834.cljs$core$IFn$_invoke$arity$1 ? inst_11834.cljs$core$IFn$_invoke$arity$1(inst_11840) : inst_11834.call(null,inst_11840));
var inst_11859 = cljs.core.not(inst_11858);
var inst_11860 = (inst_11857) && (inst_11859);
var state_11880__$1 = state_11880;
var statearr_11930_11987 = state_11880__$1;
(statearr_11930_11987[(2)] = inst_11860);

(statearr_11930_11987[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11881 === (10))){
var inst_11786 = (state_11880[(8)]);
var inst_11806 = (state_11880[(2)]);
var inst_11807 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11806,cljs.core.cst$kw$solos);
var inst_11808 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11806,cljs.core.cst$kw$mutes);
var inst_11809 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11806,cljs.core.cst$kw$reads);
var inst_11810 = inst_11786;
var state_11880__$1 = (function (){var statearr_11931 = state_11880;
(statearr_11931[(16)] = inst_11809);

(statearr_11931[(7)] = inst_11810);

(statearr_11931[(17)] = inst_11807);

(statearr_11931[(18)] = inst_11808);

return statearr_11931;
})();
var statearr_11932_11988 = state_11880__$1;
(statearr_11932_11988[(2)] = null);

(statearr_11932_11988[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11881 === (18))){
var inst_11824 = (state_11880[(2)]);
var state_11880__$1 = state_11880;
var statearr_11933_11989 = state_11880__$1;
(statearr_11933_11989[(2)] = inst_11824);

(statearr_11933_11989[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11881 === (37))){
var state_11880__$1 = state_11880;
var statearr_11934_11990 = state_11880__$1;
(statearr_11934_11990[(2)] = null);

(statearr_11934_11990[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11881 === (8))){
var inst_11786 = (state_11880[(8)]);
var inst_11803 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11786);
var state_11880__$1 = state_11880;
var statearr_11935_11991 = state_11880__$1;
(statearr_11935_11991[(2)] = inst_11803);

(statearr_11935_11991[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__10212__auto___11945,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10098__auto__,c__10212__auto___11945,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10099__auto__ = null;
var cljs$core$async$mix_$_state_machine__10099__auto____0 = (function (){
var statearr_11939 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11939[(0)] = cljs$core$async$mix_$_state_machine__10099__auto__);

(statearr_11939[(1)] = (1));

return statearr_11939;
});
var cljs$core$async$mix_$_state_machine__10099__auto____1 = (function (state_11880){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_11880);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e11940){if((e11940 instanceof Object)){
var ex__10102__auto__ = e11940;
var statearr_11941_11992 = state_11880;
(statearr_11941_11992[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11880);

return cljs.core.cst$kw$recur;
} else {
throw e11940;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__11993 = state_11880;
state_11880 = G__11993;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10099__auto__ = function(state_11880){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10099__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10099__auto____1.call(this,state_11880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10099__auto____0;
cljs$core$async$mix_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10099__auto____1;
return cljs$core$async$mix_$_state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto___11945,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10214__auto__ = (function (){var statearr_11942 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_11942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto___11945);

return statearr_11942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto___11945,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


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

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__6811__auto__ = (((p == null))?null:p);
var m__6812__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return (m__6812__auto__.cljs$core$IFn$_invoke$arity$4 ? m__6812__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__6812__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__6812__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return (m__6812__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__6812__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__6812__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__6811__auto__ = (((p == null))?null:p);
var m__6812__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return (m__6812__auto__.cljs$core$IFn$_invoke$arity$3 ? m__6812__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__6812__auto__.call(null,p,v,ch));
} else {
var m__6812__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return (m__6812__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__6812__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__6812__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args11994 = [];
var len__7214__auto___11997 = arguments.length;
var i__7215__auto___11998 = (0);
while(true){
if((i__7215__auto___11998 < len__7214__auto___11997)){
args11994.push((arguments[i__7215__auto___11998]));

var G__11999 = (i__7215__auto___11998 + (1));
i__7215__auto___11998 = G__11999;
continue;
} else {
}
break;
}

var G__11996 = args11994.length;
switch (G__11996) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11994.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__6811__auto__ = (((p == null))?null:p);
var m__6812__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return (m__6812__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6812__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__6812__auto__.call(null,p));
} else {
var m__6812__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return (m__6812__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6812__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__6812__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__6811__auto__ = (((p == null))?null:p);
var m__6812__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return (m__6812__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6812__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__6812__auto__.call(null,p,v));
} else {
var m__6812__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return (m__6812__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6812__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__6812__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

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
var args12002 = [];
var len__7214__auto___12130 = arguments.length;
var i__7215__auto___12131 = (0);
while(true){
if((i__7215__auto___12131 < len__7214__auto___12130)){
args12002.push((arguments[i__7215__auto___12131]));

var G__12132 = (i__7215__auto___12131 + (1));
i__7215__auto___12131 = G__12132;
continue;
} else {
}
break;
}

var G__12004 = args12002.length;
switch (G__12004) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12002.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__12005 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12005) : cljs.core.atom.call(null,G__12005));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__6156__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__6156__auto__,mults){
return (function (p1__12001_SHARP_){
if(cljs.core.truth_((p1__12001_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__12001_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__12001_SHARP_.call(null,topic)))){
return p1__12001_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12001_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__6156__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async12006 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12006 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12007){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12007 = meta12007;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12008,meta12007__$1){
var self__ = this;
var _12008__$1 = this;
return (new cljs.core.async.t_cljs$core$async12006(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12007__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12006.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12008){
var self__ = this;
var _12008__$1 = this;
return self__.meta12007;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12006.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async12006.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12006.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async12006.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12006.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12006.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__12009 = self__.mults;
var G__12010 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12009,G__12010) : cljs.core.reset_BANG_.call(null,G__12009,G__12010));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12006.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12006.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta12007], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12006.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12006.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12006";

cljs.core.async.t_cljs$core$async12006.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"cljs.core.async/t_cljs$core$async12006");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async12006 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async12006(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12007){
return (new cljs.core.async.t_cljs$core$async12006(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12007));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async12006(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10212__auto___12134 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto___12134,mults,ensure_mult,p){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto___12134,mults,ensure_mult,p){
return (function (state_12082){
var state_val_12083 = (state_12082[(1)]);
if((state_val_12083 === (7))){
var inst_12078 = (state_12082[(2)]);
var state_12082__$1 = state_12082;
var statearr_12084_12135 = state_12082__$1;
(statearr_12084_12135[(2)] = inst_12078);

(statearr_12084_12135[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12083 === (20))){
var state_12082__$1 = state_12082;
var statearr_12085_12136 = state_12082__$1;
(statearr_12085_12136[(2)] = null);

(statearr_12085_12136[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12083 === (1))){
var state_12082__$1 = state_12082;
var statearr_12086_12137 = state_12082__$1;
(statearr_12086_12137[(2)] = null);

(statearr_12086_12137[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12083 === (24))){
var inst_12061 = (state_12082[(7)]);
var inst_12070 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_12061);
var state_12082__$1 = state_12082;
var statearr_12087_12138 = state_12082__$1;
(statearr_12087_12138[(2)] = inst_12070);

(statearr_12087_12138[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12083 === (4))){
var inst_12013 = (state_12082[(8)]);
var inst_12013__$1 = (state_12082[(2)]);
var inst_12014 = (inst_12013__$1 == null);
var state_12082__$1 = (function (){var statearr_12088 = state_12082;
(statearr_12088[(8)] = inst_12013__$1);

return statearr_12088;
})();
if(cljs.core.truth_(inst_12014)){
var statearr_12089_12139 = state_12082__$1;
(statearr_12089_12139[(1)] = (5));

} else {
var statearr_12090_12140 = state_12082__$1;
(statearr_12090_12140[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12083 === (15))){
var inst_12055 = (state_12082[(2)]);
var state_12082__$1 = state_12082;
var statearr_12091_12141 = state_12082__$1;
(statearr_12091_12141[(2)] = inst_12055);

(statearr_12091_12141[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12083 === (21))){
var inst_12075 = (state_12082[(2)]);
var state_12082__$1 = (function (){var statearr_12092 = state_12082;
(statearr_12092[(9)] = inst_12075);

return statearr_12092;
})();
var statearr_12093_12142 = state_12082__$1;
(statearr_12093_12142[(2)] = null);

(statearr_12093_12142[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12083 === (13))){
var inst_12037 = (state_12082[(10)]);
var inst_12039 = cljs.core.chunked_seq_QMARK_(inst_12037);
var state_12082__$1 = state_12082;
if(inst_12039){
var statearr_12094_12143 = state_12082__$1;
(statearr_12094_12143[(1)] = (16));

} else {
var statearr_12095_12144 = state_12082__$1;
(statearr_12095_12144[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12083 === (22))){
var inst_12067 = (state_12082[(2)]);
var state_12082__$1 = state_12082;
if(cljs.core.truth_(inst_12067)){
var statearr_12096_12145 = state_12082__$1;
(statearr_12096_12145[(1)] = (23));

} else {
var statearr_12097_12146 = state_12082__$1;
(statearr_12097_12146[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12083 === (6))){
var inst_12013 = (state_12082[(8)]);
var inst_12061 = (state_12082[(7)]);
var inst_12063 = (state_12082[(11)]);
var inst_12061__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_12013) : topic_fn.call(null,inst_12013));
var inst_12062 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_12063__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12062,inst_12061__$1);
var state_12082__$1 = (function (){var statearr_12098 = state_12082;
(statearr_12098[(7)] = inst_12061__$1);

(statearr_12098[(11)] = inst_12063__$1);

return statearr_12098;
})();
if(cljs.core.truth_(inst_12063__$1)){
var statearr_12099_12147 = state_12082__$1;
(statearr_12099_12147[(1)] = (19));

} else {
var statearr_12100_12148 = state_12082__$1;
(statearr_12100_12148[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12083 === (25))){
var inst_12072 = (state_12082[(2)]);
var state_12082__$1 = state_12082;
var statearr_12101_12149 = state_12082__$1;
(statearr_12101_12149[(2)] = inst_12072);

(statearr_12101_12149[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12083 === (17))){
var inst_12037 = (state_12082[(10)]);
var inst_12046 = cljs.core.first(inst_12037);
var inst_12047 = cljs.core.async.muxch_STAR_(inst_12046);
var inst_12048 = cljs.core.async.close_BANG_(inst_12047);
var inst_12049 = cljs.core.next(inst_12037);
var inst_12023 = inst_12049;
var inst_12024 = null;
var inst_12025 = (0);
var inst_12026 = (0);
var state_12082__$1 = (function (){var statearr_12102 = state_12082;
(statearr_12102[(12)] = inst_12023);

(statearr_12102[(13)] = inst_12026);

(statearr_12102[(14)] = inst_12025);

(statearr_12102[(15)] = inst_12024);

(statearr_12102[(16)] = inst_12048);

return statearr_12102;
})();
var statearr_12103_12150 = state_12082__$1;
(statearr_12103_12150[(2)] = null);

(statearr_12103_12150[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12083 === (3))){
var inst_12080 = (state_12082[(2)]);
var state_12082__$1 = state_12082;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12082__$1,inst_12080);
} else {
if((state_val_12083 === (12))){
var inst_12057 = (state_12082[(2)]);
var state_12082__$1 = state_12082;
var statearr_12104_12151 = state_12082__$1;
(statearr_12104_12151[(2)] = inst_12057);

(statearr_12104_12151[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12083 === (2))){
var state_12082__$1 = state_12082;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12082__$1,(4),ch);
} else {
if((state_val_12083 === (23))){
var state_12082__$1 = state_12082;
var statearr_12105_12152 = state_12082__$1;
(statearr_12105_12152[(2)] = null);

(statearr_12105_12152[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12083 === (19))){
var inst_12013 = (state_12082[(8)]);
var inst_12063 = (state_12082[(11)]);
var inst_12065 = cljs.core.async.muxch_STAR_(inst_12063);
var state_12082__$1 = state_12082;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12082__$1,(22),inst_12065,inst_12013);
} else {
if((state_val_12083 === (11))){
var inst_12023 = (state_12082[(12)]);
var inst_12037 = (state_12082[(10)]);
var inst_12037__$1 = cljs.core.seq(inst_12023);
var state_12082__$1 = (function (){var statearr_12106 = state_12082;
(statearr_12106[(10)] = inst_12037__$1);

return statearr_12106;
})();
if(inst_12037__$1){
var statearr_12107_12153 = state_12082__$1;
(statearr_12107_12153[(1)] = (13));

} else {
var statearr_12108_12154 = state_12082__$1;
(statearr_12108_12154[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12083 === (9))){
var inst_12059 = (state_12082[(2)]);
var state_12082__$1 = state_12082;
var statearr_12109_12155 = state_12082__$1;
(statearr_12109_12155[(2)] = inst_12059);

(statearr_12109_12155[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12083 === (5))){
var inst_12020 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_12021 = cljs.core.vals(inst_12020);
var inst_12022 = cljs.core.seq(inst_12021);
var inst_12023 = inst_12022;
var inst_12024 = null;
var inst_12025 = (0);
var inst_12026 = (0);
var state_12082__$1 = (function (){var statearr_12110 = state_12082;
(statearr_12110[(12)] = inst_12023);

(statearr_12110[(13)] = inst_12026);

(statearr_12110[(14)] = inst_12025);

(statearr_12110[(15)] = inst_12024);

return statearr_12110;
})();
var statearr_12111_12156 = state_12082__$1;
(statearr_12111_12156[(2)] = null);

(statearr_12111_12156[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12083 === (14))){
var state_12082__$1 = state_12082;
var statearr_12115_12157 = state_12082__$1;
(statearr_12115_12157[(2)] = null);

(statearr_12115_12157[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12083 === (16))){
var inst_12037 = (state_12082[(10)]);
var inst_12041 = cljs.core.chunk_first(inst_12037);
var inst_12042 = cljs.core.chunk_rest(inst_12037);
var inst_12043 = cljs.core.count(inst_12041);
var inst_12023 = inst_12042;
var inst_12024 = inst_12041;
var inst_12025 = inst_12043;
var inst_12026 = (0);
var state_12082__$1 = (function (){var statearr_12116 = state_12082;
(statearr_12116[(12)] = inst_12023);

(statearr_12116[(13)] = inst_12026);

(statearr_12116[(14)] = inst_12025);

(statearr_12116[(15)] = inst_12024);

return statearr_12116;
})();
var statearr_12117_12158 = state_12082__$1;
(statearr_12117_12158[(2)] = null);

(statearr_12117_12158[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12083 === (10))){
var inst_12023 = (state_12082[(12)]);
var inst_12026 = (state_12082[(13)]);
var inst_12025 = (state_12082[(14)]);
var inst_12024 = (state_12082[(15)]);
var inst_12031 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_12024,inst_12026);
var inst_12032 = cljs.core.async.muxch_STAR_(inst_12031);
var inst_12033 = cljs.core.async.close_BANG_(inst_12032);
var inst_12034 = (inst_12026 + (1));
var tmp12112 = inst_12023;
var tmp12113 = inst_12025;
var tmp12114 = inst_12024;
var inst_12023__$1 = tmp12112;
var inst_12024__$1 = tmp12114;
var inst_12025__$1 = tmp12113;
var inst_12026__$1 = inst_12034;
var state_12082__$1 = (function (){var statearr_12118 = state_12082;
(statearr_12118[(12)] = inst_12023__$1);

(statearr_12118[(17)] = inst_12033);

(statearr_12118[(13)] = inst_12026__$1);

(statearr_12118[(14)] = inst_12025__$1);

(statearr_12118[(15)] = inst_12024__$1);

return statearr_12118;
})();
var statearr_12119_12159 = state_12082__$1;
(statearr_12119_12159[(2)] = null);

(statearr_12119_12159[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12083 === (18))){
var inst_12052 = (state_12082[(2)]);
var state_12082__$1 = state_12082;
var statearr_12120_12160 = state_12082__$1;
(statearr_12120_12160[(2)] = inst_12052);

(statearr_12120_12160[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12083 === (8))){
var inst_12026 = (state_12082[(13)]);
var inst_12025 = (state_12082[(14)]);
var inst_12028 = (inst_12026 < inst_12025);
var inst_12029 = inst_12028;
var state_12082__$1 = state_12082;
if(cljs.core.truth_(inst_12029)){
var statearr_12121_12161 = state_12082__$1;
(statearr_12121_12161[(1)] = (10));

} else {
var statearr_12122_12162 = state_12082__$1;
(statearr_12122_12162[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__10212__auto___12134,mults,ensure_mult,p))
;
return ((function (switch__10098__auto__,c__10212__auto___12134,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10099__auto__ = null;
var cljs$core$async$state_machine__10099__auto____0 = (function (){
var statearr_12126 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12126[(0)] = cljs$core$async$state_machine__10099__auto__);

(statearr_12126[(1)] = (1));

return statearr_12126;
});
var cljs$core$async$state_machine__10099__auto____1 = (function (state_12082){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_12082);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e12127){if((e12127 instanceof Object)){
var ex__10102__auto__ = e12127;
var statearr_12128_12163 = state_12082;
(statearr_12128_12163[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12082);

return cljs.core.cst$kw$recur;
} else {
throw e12127;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__12164 = state_12082;
state_12082 = G__12164;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
cljs$core$async$state_machine__10099__auto__ = function(state_12082){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10099__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10099__auto____1.call(this,state_12082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10099__auto____0;
cljs$core$async$state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10099__auto____1;
return cljs$core$async$state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto___12134,mults,ensure_mult,p))
})();
var state__10214__auto__ = (function (){var statearr_12129 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_12129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto___12134);

return statearr_12129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto___12134,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args12165 = [];
var len__7214__auto___12168 = arguments.length;
var i__7215__auto___12169 = (0);
while(true){
if((i__7215__auto___12169 < len__7214__auto___12168)){
args12165.push((arguments[i__7215__auto___12169]));

var G__12170 = (i__7215__auto___12169 + (1));
i__7215__auto___12169 = G__12170;
continue;
} else {
}
break;
}

var G__12167 = args12165.length;
switch (G__12167) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12165.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
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
var args12172 = [];
var len__7214__auto___12175 = arguments.length;
var i__7215__auto___12176 = (0);
while(true){
if((i__7215__auto___12176 < len__7214__auto___12175)){
args12172.push((arguments[i__7215__auto___12176]));

var G__12177 = (i__7215__auto___12176 + (1));
i__7215__auto___12176 = G__12177;
continue;
} else {
}
break;
}

var G__12174 = args12172.length;
switch (G__12174) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12172.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
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
var args12179 = [];
var len__7214__auto___12250 = arguments.length;
var i__7215__auto___12251 = (0);
while(true){
if((i__7215__auto___12251 < len__7214__auto___12250)){
args12179.push((arguments[i__7215__auto___12251]));

var G__12252 = (i__7215__auto___12251 + (1));
i__7215__auto___12251 = G__12252;
continue;
} else {
}
break;
}

var G__12181 = args12179.length;
switch (G__12181) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12179.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__10212__auto___12254 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto___12254,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto___12254,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12220){
var state_val_12221 = (state_12220[(1)]);
if((state_val_12221 === (7))){
var state_12220__$1 = state_12220;
var statearr_12222_12255 = state_12220__$1;
(statearr_12222_12255[(2)] = null);

(statearr_12222_12255[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12221 === (1))){
var state_12220__$1 = state_12220;
var statearr_12223_12256 = state_12220__$1;
(statearr_12223_12256[(2)] = null);

(statearr_12223_12256[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12221 === (4))){
var inst_12184 = (state_12220[(7)]);
var inst_12186 = (inst_12184 < cnt);
var state_12220__$1 = state_12220;
if(cljs.core.truth_(inst_12186)){
var statearr_12224_12257 = state_12220__$1;
(statearr_12224_12257[(1)] = (6));

} else {
var statearr_12225_12258 = state_12220__$1;
(statearr_12225_12258[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12221 === (15))){
var inst_12216 = (state_12220[(2)]);
var state_12220__$1 = state_12220;
var statearr_12226_12259 = state_12220__$1;
(statearr_12226_12259[(2)] = inst_12216);

(statearr_12226_12259[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12221 === (13))){
var inst_12209 = cljs.core.async.close_BANG_(out);
var state_12220__$1 = state_12220;
var statearr_12227_12260 = state_12220__$1;
(statearr_12227_12260[(2)] = inst_12209);

(statearr_12227_12260[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12221 === (6))){
var state_12220__$1 = state_12220;
var statearr_12228_12261 = state_12220__$1;
(statearr_12228_12261[(2)] = null);

(statearr_12228_12261[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12221 === (3))){
var inst_12218 = (state_12220[(2)]);
var state_12220__$1 = state_12220;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12220__$1,inst_12218);
} else {
if((state_val_12221 === (12))){
var inst_12206 = (state_12220[(8)]);
var inst_12206__$1 = (state_12220[(2)]);
var inst_12207 = cljs.core.some(cljs.core.nil_QMARK_,inst_12206__$1);
var state_12220__$1 = (function (){var statearr_12229 = state_12220;
(statearr_12229[(8)] = inst_12206__$1);

return statearr_12229;
})();
if(cljs.core.truth_(inst_12207)){
var statearr_12230_12262 = state_12220__$1;
(statearr_12230_12262[(1)] = (13));

} else {
var statearr_12231_12263 = state_12220__$1;
(statearr_12231_12263[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12221 === (2))){
var inst_12183 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_12184 = (0);
var state_12220__$1 = (function (){var statearr_12232 = state_12220;
(statearr_12232[(9)] = inst_12183);

(statearr_12232[(7)] = inst_12184);

return statearr_12232;
})();
var statearr_12233_12264 = state_12220__$1;
(statearr_12233_12264[(2)] = null);

(statearr_12233_12264[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12221 === (11))){
var inst_12184 = (state_12220[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_12220,(10),Object,null,(9));
var inst_12193 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_12184) : chs__$1.call(null,inst_12184));
var inst_12194 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_12184) : done.call(null,inst_12184));
var inst_12195 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_12193,inst_12194);
var state_12220__$1 = state_12220;
var statearr_12234_12265 = state_12220__$1;
(statearr_12234_12265[(2)] = inst_12195);


cljs.core.async.impl.ioc_helpers.process_exception(state_12220__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_12221 === (9))){
var inst_12184 = (state_12220[(7)]);
var inst_12197 = (state_12220[(2)]);
var inst_12198 = (inst_12184 + (1));
var inst_12184__$1 = inst_12198;
var state_12220__$1 = (function (){var statearr_12235 = state_12220;
(statearr_12235[(10)] = inst_12197);

(statearr_12235[(7)] = inst_12184__$1);

return statearr_12235;
})();
var statearr_12236_12266 = state_12220__$1;
(statearr_12236_12266[(2)] = null);

(statearr_12236_12266[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12221 === (5))){
var inst_12204 = (state_12220[(2)]);
var state_12220__$1 = (function (){var statearr_12237 = state_12220;
(statearr_12237[(11)] = inst_12204);

return statearr_12237;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12220__$1,(12),dchan);
} else {
if((state_val_12221 === (14))){
var inst_12206 = (state_12220[(8)]);
var inst_12211 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_12206);
var state_12220__$1 = state_12220;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12220__$1,(16),out,inst_12211);
} else {
if((state_val_12221 === (16))){
var inst_12213 = (state_12220[(2)]);
var state_12220__$1 = (function (){var statearr_12238 = state_12220;
(statearr_12238[(12)] = inst_12213);

return statearr_12238;
})();
var statearr_12239_12267 = state_12220__$1;
(statearr_12239_12267[(2)] = null);

(statearr_12239_12267[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12221 === (10))){
var inst_12188 = (state_12220[(2)]);
var inst_12189 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_12220__$1 = (function (){var statearr_12240 = state_12220;
(statearr_12240[(13)] = inst_12188);

return statearr_12240;
})();
var statearr_12241_12268 = state_12220__$1;
(statearr_12241_12268[(2)] = inst_12189);


cljs.core.async.impl.ioc_helpers.process_exception(state_12220__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_12221 === (8))){
var inst_12202 = (state_12220[(2)]);
var state_12220__$1 = state_12220;
var statearr_12242_12269 = state_12220__$1;
(statearr_12242_12269[(2)] = inst_12202);

(statearr_12242_12269[(1)] = (5));


return cljs.core.cst$kw$recur;
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
});})(c__10212__auto___12254,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10098__auto__,c__10212__auto___12254,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10099__auto__ = null;
var cljs$core$async$state_machine__10099__auto____0 = (function (){
var statearr_12246 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12246[(0)] = cljs$core$async$state_machine__10099__auto__);

(statearr_12246[(1)] = (1));

return statearr_12246;
});
var cljs$core$async$state_machine__10099__auto____1 = (function (state_12220){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_12220);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e12247){if((e12247 instanceof Object)){
var ex__10102__auto__ = e12247;
var statearr_12248_12270 = state_12220;
(statearr_12248_12270[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12220);

return cljs.core.cst$kw$recur;
} else {
throw e12247;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__12271 = state_12220;
state_12220 = G__12271;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
cljs$core$async$state_machine__10099__auto__ = function(state_12220){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10099__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10099__auto____1.call(this,state_12220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10099__auto____0;
cljs$core$async$state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10099__auto____1;
return cljs$core$async$state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto___12254,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10214__auto__ = (function (){var statearr_12249 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_12249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto___12254);

return statearr_12249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto___12254,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args12273 = [];
var len__7214__auto___12329 = arguments.length;
var i__7215__auto___12330 = (0);
while(true){
if((i__7215__auto___12330 < len__7214__auto___12329)){
args12273.push((arguments[i__7215__auto___12330]));

var G__12331 = (i__7215__auto___12330 + (1));
i__7215__auto___12330 = G__12331;
continue;
} else {
}
break;
}

var G__12275 = args12273.length;
switch (G__12275) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12273.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10212__auto___12333 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto___12333,out){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto___12333,out){
return (function (state_12305){
var state_val_12306 = (state_12305[(1)]);
if((state_val_12306 === (7))){
var inst_12285 = (state_12305[(7)]);
var inst_12284 = (state_12305[(8)]);
var inst_12284__$1 = (state_12305[(2)]);
var inst_12285__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12284__$1,(0),null);
var inst_12286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12284__$1,(1),null);
var inst_12287 = (inst_12285__$1 == null);
var state_12305__$1 = (function (){var statearr_12307 = state_12305;
(statearr_12307[(9)] = inst_12286);

(statearr_12307[(7)] = inst_12285__$1);

(statearr_12307[(8)] = inst_12284__$1);

return statearr_12307;
})();
if(cljs.core.truth_(inst_12287)){
var statearr_12308_12334 = state_12305__$1;
(statearr_12308_12334[(1)] = (8));

} else {
var statearr_12309_12335 = state_12305__$1;
(statearr_12309_12335[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12306 === (1))){
var inst_12276 = cljs.core.vec(chs);
var inst_12277 = inst_12276;
var state_12305__$1 = (function (){var statearr_12310 = state_12305;
(statearr_12310[(10)] = inst_12277);

return statearr_12310;
})();
var statearr_12311_12336 = state_12305__$1;
(statearr_12311_12336[(2)] = null);

(statearr_12311_12336[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12306 === (4))){
var inst_12277 = (state_12305[(10)]);
var state_12305__$1 = state_12305;
return cljs.core.async.ioc_alts_BANG_(state_12305__$1,(7),inst_12277);
} else {
if((state_val_12306 === (6))){
var inst_12301 = (state_12305[(2)]);
var state_12305__$1 = state_12305;
var statearr_12312_12337 = state_12305__$1;
(statearr_12312_12337[(2)] = inst_12301);

(statearr_12312_12337[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12306 === (3))){
var inst_12303 = (state_12305[(2)]);
var state_12305__$1 = state_12305;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12305__$1,inst_12303);
} else {
if((state_val_12306 === (2))){
var inst_12277 = (state_12305[(10)]);
var inst_12279 = cljs.core.count(inst_12277);
var inst_12280 = (inst_12279 > (0));
var state_12305__$1 = state_12305;
if(cljs.core.truth_(inst_12280)){
var statearr_12314_12338 = state_12305__$1;
(statearr_12314_12338[(1)] = (4));

} else {
var statearr_12315_12339 = state_12305__$1;
(statearr_12315_12339[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12306 === (11))){
var inst_12277 = (state_12305[(10)]);
var inst_12294 = (state_12305[(2)]);
var tmp12313 = inst_12277;
var inst_12277__$1 = tmp12313;
var state_12305__$1 = (function (){var statearr_12316 = state_12305;
(statearr_12316[(11)] = inst_12294);

(statearr_12316[(10)] = inst_12277__$1);

return statearr_12316;
})();
var statearr_12317_12340 = state_12305__$1;
(statearr_12317_12340[(2)] = null);

(statearr_12317_12340[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12306 === (9))){
var inst_12285 = (state_12305[(7)]);
var state_12305__$1 = state_12305;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12305__$1,(11),out,inst_12285);
} else {
if((state_val_12306 === (5))){
var inst_12299 = cljs.core.async.close_BANG_(out);
var state_12305__$1 = state_12305;
var statearr_12318_12341 = state_12305__$1;
(statearr_12318_12341[(2)] = inst_12299);

(statearr_12318_12341[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12306 === (10))){
var inst_12297 = (state_12305[(2)]);
var state_12305__$1 = state_12305;
var statearr_12319_12342 = state_12305__$1;
(statearr_12319_12342[(2)] = inst_12297);

(statearr_12319_12342[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12306 === (8))){
var inst_12286 = (state_12305[(9)]);
var inst_12285 = (state_12305[(7)]);
var inst_12284 = (state_12305[(8)]);
var inst_12277 = (state_12305[(10)]);
var inst_12289 = (function (){var cs = inst_12277;
var vec__12282 = inst_12284;
var v = inst_12285;
var c = inst_12286;
return ((function (cs,vec__12282,v,c,inst_12286,inst_12285,inst_12284,inst_12277,state_val_12306,c__10212__auto___12333,out){
return (function (p1__12272_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__12272_SHARP_);
});
;})(cs,vec__12282,v,c,inst_12286,inst_12285,inst_12284,inst_12277,state_val_12306,c__10212__auto___12333,out))
})();
var inst_12290 = cljs.core.filterv(inst_12289,inst_12277);
var inst_12277__$1 = inst_12290;
var state_12305__$1 = (function (){var statearr_12320 = state_12305;
(statearr_12320[(10)] = inst_12277__$1);

return statearr_12320;
})();
var statearr_12321_12343 = state_12305__$1;
(statearr_12321_12343[(2)] = null);

(statearr_12321_12343[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__10212__auto___12333,out))
;
return ((function (switch__10098__auto__,c__10212__auto___12333,out){
return (function() {
var cljs$core$async$state_machine__10099__auto__ = null;
var cljs$core$async$state_machine__10099__auto____0 = (function (){
var statearr_12325 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12325[(0)] = cljs$core$async$state_machine__10099__auto__);

(statearr_12325[(1)] = (1));

return statearr_12325;
});
var cljs$core$async$state_machine__10099__auto____1 = (function (state_12305){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_12305);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e12326){if((e12326 instanceof Object)){
var ex__10102__auto__ = e12326;
var statearr_12327_12344 = state_12305;
(statearr_12327_12344[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12305);

return cljs.core.cst$kw$recur;
} else {
throw e12326;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__12345 = state_12305;
state_12305 = G__12345;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
cljs$core$async$state_machine__10099__auto__ = function(state_12305){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10099__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10099__auto____1.call(this,state_12305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10099__auto____0;
cljs$core$async$state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10099__auto____1;
return cljs$core$async$state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto___12333,out))
})();
var state__10214__auto__ = (function (){var statearr_12328 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_12328[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto___12333);

return statearr_12328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto___12333,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
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
var args12346 = [];
var len__7214__auto___12395 = arguments.length;
var i__7215__auto___12396 = (0);
while(true){
if((i__7215__auto___12396 < len__7214__auto___12395)){
args12346.push((arguments[i__7215__auto___12396]));

var G__12397 = (i__7215__auto___12396 + (1));
i__7215__auto___12396 = G__12397;
continue;
} else {
}
break;
}

var G__12348 = args12346.length;
switch (G__12348) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12346.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10212__auto___12399 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto___12399,out){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto___12399,out){
return (function (state_12372){
var state_val_12373 = (state_12372[(1)]);
if((state_val_12373 === (7))){
var inst_12354 = (state_12372[(7)]);
var inst_12354__$1 = (state_12372[(2)]);
var inst_12355 = (inst_12354__$1 == null);
var inst_12356 = cljs.core.not(inst_12355);
var state_12372__$1 = (function (){var statearr_12374 = state_12372;
(statearr_12374[(7)] = inst_12354__$1);

return statearr_12374;
})();
if(inst_12356){
var statearr_12375_12400 = state_12372__$1;
(statearr_12375_12400[(1)] = (8));

} else {
var statearr_12376_12401 = state_12372__$1;
(statearr_12376_12401[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12373 === (1))){
var inst_12349 = (0);
var state_12372__$1 = (function (){var statearr_12377 = state_12372;
(statearr_12377[(8)] = inst_12349);

return statearr_12377;
})();
var statearr_12378_12402 = state_12372__$1;
(statearr_12378_12402[(2)] = null);

(statearr_12378_12402[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12373 === (4))){
var state_12372__$1 = state_12372;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12372__$1,(7),ch);
} else {
if((state_val_12373 === (6))){
var inst_12367 = (state_12372[(2)]);
var state_12372__$1 = state_12372;
var statearr_12379_12403 = state_12372__$1;
(statearr_12379_12403[(2)] = inst_12367);

(statearr_12379_12403[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12373 === (3))){
var inst_12369 = (state_12372[(2)]);
var inst_12370 = cljs.core.async.close_BANG_(out);
var state_12372__$1 = (function (){var statearr_12380 = state_12372;
(statearr_12380[(9)] = inst_12369);

return statearr_12380;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12372__$1,inst_12370);
} else {
if((state_val_12373 === (2))){
var inst_12349 = (state_12372[(8)]);
var inst_12351 = (inst_12349 < n);
var state_12372__$1 = state_12372;
if(cljs.core.truth_(inst_12351)){
var statearr_12381_12404 = state_12372__$1;
(statearr_12381_12404[(1)] = (4));

} else {
var statearr_12382_12405 = state_12372__$1;
(statearr_12382_12405[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12373 === (11))){
var inst_12349 = (state_12372[(8)]);
var inst_12359 = (state_12372[(2)]);
var inst_12360 = (inst_12349 + (1));
var inst_12349__$1 = inst_12360;
var state_12372__$1 = (function (){var statearr_12383 = state_12372;
(statearr_12383[(8)] = inst_12349__$1);

(statearr_12383[(10)] = inst_12359);

return statearr_12383;
})();
var statearr_12384_12406 = state_12372__$1;
(statearr_12384_12406[(2)] = null);

(statearr_12384_12406[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12373 === (9))){
var state_12372__$1 = state_12372;
var statearr_12385_12407 = state_12372__$1;
(statearr_12385_12407[(2)] = null);

(statearr_12385_12407[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12373 === (5))){
var state_12372__$1 = state_12372;
var statearr_12386_12408 = state_12372__$1;
(statearr_12386_12408[(2)] = null);

(statearr_12386_12408[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12373 === (10))){
var inst_12364 = (state_12372[(2)]);
var state_12372__$1 = state_12372;
var statearr_12387_12409 = state_12372__$1;
(statearr_12387_12409[(2)] = inst_12364);

(statearr_12387_12409[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12373 === (8))){
var inst_12354 = (state_12372[(7)]);
var state_12372__$1 = state_12372;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12372__$1,(11),out,inst_12354);
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
});})(c__10212__auto___12399,out))
;
return ((function (switch__10098__auto__,c__10212__auto___12399,out){
return (function() {
var cljs$core$async$state_machine__10099__auto__ = null;
var cljs$core$async$state_machine__10099__auto____0 = (function (){
var statearr_12391 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12391[(0)] = cljs$core$async$state_machine__10099__auto__);

(statearr_12391[(1)] = (1));

return statearr_12391;
});
var cljs$core$async$state_machine__10099__auto____1 = (function (state_12372){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_12372);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e12392){if((e12392 instanceof Object)){
var ex__10102__auto__ = e12392;
var statearr_12393_12410 = state_12372;
(statearr_12393_12410[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12372);

return cljs.core.cst$kw$recur;
} else {
throw e12392;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__12411 = state_12372;
state_12372 = G__12411;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
cljs$core$async$state_machine__10099__auto__ = function(state_12372){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10099__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10099__auto____1.call(this,state_12372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10099__auto____0;
cljs$core$async$state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10099__auto____1;
return cljs$core$async$state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto___12399,out))
})();
var state__10214__auto__ = (function (){var statearr_12394 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_12394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto___12399);

return statearr_12394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto___12399,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async12421 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12421 = (function (map_LT_,f,ch,meta12422){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta12422 = meta12422;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12423,meta12422__$1){
var self__ = this;
var _12423__$1 = this;
return (new cljs.core.async.t_cljs$core$async12421(self__.map_LT_,self__.f,self__.ch,meta12422__$1));
});

cljs.core.async.t_cljs$core$async12421.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12423){
var self__ = this;
var _12423__$1 = this;
return self__.meta12422;
});

cljs.core.async.t_cljs$core$async12421.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async12421.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async12421.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async12421.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async12421.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async12424 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12424 = (function (map_LT_,f,ch,meta12422,_,fn1,meta12425){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta12422 = meta12422;
this._ = _;
this.fn1 = fn1;
this.meta12425 = meta12425;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_12426,meta12425__$1){
var self__ = this;
var _12426__$1 = this;
return (new cljs.core.async.t_cljs$core$async12424(self__.map_LT_,self__.f,self__.ch,self__.meta12422,self__._,self__.fn1,meta12425__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async12424.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_12426){
var self__ = this;
var _12426__$1 = this;
return self__.meta12425;
});})(___$1))
;

cljs.core.async.t_cljs$core$async12424.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12424.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async12424.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async12424.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__12412_SHARP_){
var G__12427 = (((p1__12412_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__12412_SHARP_) : self__.f.call(null,p1__12412_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__12427) : f1.call(null,G__12427));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async12424.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta12422,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async12421], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta12425], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async12424.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12424.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12424";

cljs.core.async.t_cljs$core$async12424.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"cljs.core.async/t_cljs$core$async12424");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async12424 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12424(map_LT___$1,f__$1,ch__$1,meta12422__$1,___$2,fn1__$1,meta12425){
return (new cljs.core.async.t_cljs$core$async12424(map_LT___$1,f__$1,ch__$1,meta12422__$1,___$2,fn1__$1,meta12425));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async12424(self__.map_LT_,self__.f,self__.ch,self__.meta12422,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6144__auto__ = ret;
if(cljs.core.truth_(and__6144__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__6144__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__12428 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__12428) : self__.f.call(null,G__12428));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async12421.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async12421.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async12421.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta12422], null);
});

cljs.core.async.t_cljs$core$async12421.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12421.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12421";

cljs.core.async.t_cljs$core$async12421.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"cljs.core.async/t_cljs$core$async12421");
});

cljs.core.async.__GT_t_cljs$core$async12421 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12421(map_LT___$1,f__$1,ch__$1,meta12422){
return (new cljs.core.async.t_cljs$core$async12421(map_LT___$1,f__$1,ch__$1,meta12422));
});

}

return (new cljs.core.async.t_cljs$core$async12421(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async12432 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12432 = (function (map_GT_,f,ch,meta12433){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta12433 = meta12433;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12434,meta12433__$1){
var self__ = this;
var _12434__$1 = this;
return (new cljs.core.async.t_cljs$core$async12432(self__.map_GT_,self__.f,self__.ch,meta12433__$1));
});

cljs.core.async.t_cljs$core$async12432.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12434){
var self__ = this;
var _12434__$1 = this;
return self__.meta12433;
});

cljs.core.async.t_cljs$core$async12432.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async12432.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async12432.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async12432.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async12432.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async12432.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async12432.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta12433], null);
});

cljs.core.async.t_cljs$core$async12432.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12432.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12432";

cljs.core.async.t_cljs$core$async12432.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"cljs.core.async/t_cljs$core$async12432");
});

cljs.core.async.__GT_t_cljs$core$async12432 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async12432(map_GT___$1,f__$1,ch__$1,meta12433){
return (new cljs.core.async.t_cljs$core$async12432(map_GT___$1,f__$1,ch__$1,meta12433));
});

}

return (new cljs.core.async.t_cljs$core$async12432(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async12438 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12438 = (function (filter_GT_,p,ch,meta12439){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta12439 = meta12439;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12438.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12440,meta12439__$1){
var self__ = this;
var _12440__$1 = this;
return (new cljs.core.async.t_cljs$core$async12438(self__.filter_GT_,self__.p,self__.ch,meta12439__$1));
});

cljs.core.async.t_cljs$core$async12438.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12440){
var self__ = this;
var _12440__$1 = this;
return self__.meta12439;
});

cljs.core.async.t_cljs$core$async12438.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async12438.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async12438.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async12438.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async12438.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async12438.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async12438.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async12438.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta12439], null);
});

cljs.core.async.t_cljs$core$async12438.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12438.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12438";

cljs.core.async.t_cljs$core$async12438.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"cljs.core.async/t_cljs$core$async12438");
});

cljs.core.async.__GT_t_cljs$core$async12438 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12438(filter_GT___$1,p__$1,ch__$1,meta12439){
return (new cljs.core.async.t_cljs$core$async12438(filter_GT___$1,p__$1,ch__$1,meta12439));
});

}

return (new cljs.core.async.t_cljs$core$async12438(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args12441 = [];
var len__7214__auto___12485 = arguments.length;
var i__7215__auto___12486 = (0);
while(true){
if((i__7215__auto___12486 < len__7214__auto___12485)){
args12441.push((arguments[i__7215__auto___12486]));

var G__12487 = (i__7215__auto___12486 + (1));
i__7215__auto___12486 = G__12487;
continue;
} else {
}
break;
}

var G__12443 = args12441.length;
switch (G__12443) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12441.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10212__auto___12489 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto___12489,out){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto___12489,out){
return (function (state_12464){
var state_val_12465 = (state_12464[(1)]);
if((state_val_12465 === (7))){
var inst_12460 = (state_12464[(2)]);
var state_12464__$1 = state_12464;
var statearr_12466_12490 = state_12464__$1;
(statearr_12466_12490[(2)] = inst_12460);

(statearr_12466_12490[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12465 === (1))){
var state_12464__$1 = state_12464;
var statearr_12467_12491 = state_12464__$1;
(statearr_12467_12491[(2)] = null);

(statearr_12467_12491[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12465 === (4))){
var inst_12446 = (state_12464[(7)]);
var inst_12446__$1 = (state_12464[(2)]);
var inst_12447 = (inst_12446__$1 == null);
var state_12464__$1 = (function (){var statearr_12468 = state_12464;
(statearr_12468[(7)] = inst_12446__$1);

return statearr_12468;
})();
if(cljs.core.truth_(inst_12447)){
var statearr_12469_12492 = state_12464__$1;
(statearr_12469_12492[(1)] = (5));

} else {
var statearr_12470_12493 = state_12464__$1;
(statearr_12470_12493[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12465 === (6))){
var inst_12446 = (state_12464[(7)]);
var inst_12451 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12446) : p.call(null,inst_12446));
var state_12464__$1 = state_12464;
if(cljs.core.truth_(inst_12451)){
var statearr_12471_12494 = state_12464__$1;
(statearr_12471_12494[(1)] = (8));

} else {
var statearr_12472_12495 = state_12464__$1;
(statearr_12472_12495[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12465 === (3))){
var inst_12462 = (state_12464[(2)]);
var state_12464__$1 = state_12464;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12464__$1,inst_12462);
} else {
if((state_val_12465 === (2))){
var state_12464__$1 = state_12464;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12464__$1,(4),ch);
} else {
if((state_val_12465 === (11))){
var inst_12454 = (state_12464[(2)]);
var state_12464__$1 = state_12464;
var statearr_12473_12496 = state_12464__$1;
(statearr_12473_12496[(2)] = inst_12454);

(statearr_12473_12496[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12465 === (9))){
var state_12464__$1 = state_12464;
var statearr_12474_12497 = state_12464__$1;
(statearr_12474_12497[(2)] = null);

(statearr_12474_12497[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12465 === (5))){
var inst_12449 = cljs.core.async.close_BANG_(out);
var state_12464__$1 = state_12464;
var statearr_12475_12498 = state_12464__$1;
(statearr_12475_12498[(2)] = inst_12449);

(statearr_12475_12498[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12465 === (10))){
var inst_12457 = (state_12464[(2)]);
var state_12464__$1 = (function (){var statearr_12476 = state_12464;
(statearr_12476[(8)] = inst_12457);

return statearr_12476;
})();
var statearr_12477_12499 = state_12464__$1;
(statearr_12477_12499[(2)] = null);

(statearr_12477_12499[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12465 === (8))){
var inst_12446 = (state_12464[(7)]);
var state_12464__$1 = state_12464;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12464__$1,(11),out,inst_12446);
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
});})(c__10212__auto___12489,out))
;
return ((function (switch__10098__auto__,c__10212__auto___12489,out){
return (function() {
var cljs$core$async$state_machine__10099__auto__ = null;
var cljs$core$async$state_machine__10099__auto____0 = (function (){
var statearr_12481 = [null,null,null,null,null,null,null,null,null];
(statearr_12481[(0)] = cljs$core$async$state_machine__10099__auto__);

(statearr_12481[(1)] = (1));

return statearr_12481;
});
var cljs$core$async$state_machine__10099__auto____1 = (function (state_12464){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_12464);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e12482){if((e12482 instanceof Object)){
var ex__10102__auto__ = e12482;
var statearr_12483_12500 = state_12464;
(statearr_12483_12500[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12464);

return cljs.core.cst$kw$recur;
} else {
throw e12482;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__12501 = state_12464;
state_12464 = G__12501;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
cljs$core$async$state_machine__10099__auto__ = function(state_12464){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10099__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10099__auto____1.call(this,state_12464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10099__auto____0;
cljs$core$async$state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10099__auto____1;
return cljs$core$async$state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto___12489,out))
})();
var state__10214__auto__ = (function (){var statearr_12484 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_12484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto___12489);

return statearr_12484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto___12489,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args12502 = [];
var len__7214__auto___12505 = arguments.length;
var i__7215__auto___12506 = (0);
while(true){
if((i__7215__auto___12506 < len__7214__auto___12505)){
args12502.push((arguments[i__7215__auto___12506]));

var G__12507 = (i__7215__auto___12506 + (1));
i__7215__auto___12506 = G__12507;
continue;
} else {
}
break;
}

var G__12504 = args12502.length;
switch (G__12504) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12502.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__10212__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto__){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto__){
return (function (state_12674){
var state_val_12675 = (state_12674[(1)]);
if((state_val_12675 === (7))){
var inst_12670 = (state_12674[(2)]);
var state_12674__$1 = state_12674;
var statearr_12676_12717 = state_12674__$1;
(statearr_12676_12717[(2)] = inst_12670);

(statearr_12676_12717[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12675 === (20))){
var inst_12640 = (state_12674[(7)]);
var inst_12651 = (state_12674[(2)]);
var inst_12652 = cljs.core.next(inst_12640);
var inst_12626 = inst_12652;
var inst_12627 = null;
var inst_12628 = (0);
var inst_12629 = (0);
var state_12674__$1 = (function (){var statearr_12677 = state_12674;
(statearr_12677[(8)] = inst_12651);

(statearr_12677[(9)] = inst_12627);

(statearr_12677[(10)] = inst_12628);

(statearr_12677[(11)] = inst_12626);

(statearr_12677[(12)] = inst_12629);

return statearr_12677;
})();
var statearr_12678_12718 = state_12674__$1;
(statearr_12678_12718[(2)] = null);

(statearr_12678_12718[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12675 === (1))){
var state_12674__$1 = state_12674;
var statearr_12679_12719 = state_12674__$1;
(statearr_12679_12719[(2)] = null);

(statearr_12679_12719[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12675 === (4))){
var inst_12615 = (state_12674[(13)]);
var inst_12615__$1 = (state_12674[(2)]);
var inst_12616 = (inst_12615__$1 == null);
var state_12674__$1 = (function (){var statearr_12680 = state_12674;
(statearr_12680[(13)] = inst_12615__$1);

return statearr_12680;
})();
if(cljs.core.truth_(inst_12616)){
var statearr_12681_12720 = state_12674__$1;
(statearr_12681_12720[(1)] = (5));

} else {
var statearr_12682_12721 = state_12674__$1;
(statearr_12682_12721[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12675 === (15))){
var state_12674__$1 = state_12674;
var statearr_12686_12722 = state_12674__$1;
(statearr_12686_12722[(2)] = null);

(statearr_12686_12722[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12675 === (21))){
var state_12674__$1 = state_12674;
var statearr_12687_12723 = state_12674__$1;
(statearr_12687_12723[(2)] = null);

(statearr_12687_12723[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12675 === (13))){
var inst_12627 = (state_12674[(9)]);
var inst_12628 = (state_12674[(10)]);
var inst_12626 = (state_12674[(11)]);
var inst_12629 = (state_12674[(12)]);
var inst_12636 = (state_12674[(2)]);
var inst_12637 = (inst_12629 + (1));
var tmp12683 = inst_12627;
var tmp12684 = inst_12628;
var tmp12685 = inst_12626;
var inst_12626__$1 = tmp12685;
var inst_12627__$1 = tmp12683;
var inst_12628__$1 = tmp12684;
var inst_12629__$1 = inst_12637;
var state_12674__$1 = (function (){var statearr_12688 = state_12674;
(statearr_12688[(14)] = inst_12636);

(statearr_12688[(9)] = inst_12627__$1);

(statearr_12688[(10)] = inst_12628__$1);

(statearr_12688[(11)] = inst_12626__$1);

(statearr_12688[(12)] = inst_12629__$1);

return statearr_12688;
})();
var statearr_12689_12724 = state_12674__$1;
(statearr_12689_12724[(2)] = null);

(statearr_12689_12724[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12675 === (22))){
var state_12674__$1 = state_12674;
var statearr_12690_12725 = state_12674__$1;
(statearr_12690_12725[(2)] = null);

(statearr_12690_12725[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12675 === (6))){
var inst_12615 = (state_12674[(13)]);
var inst_12624 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12615) : f.call(null,inst_12615));
var inst_12625 = cljs.core.seq(inst_12624);
var inst_12626 = inst_12625;
var inst_12627 = null;
var inst_12628 = (0);
var inst_12629 = (0);
var state_12674__$1 = (function (){var statearr_12691 = state_12674;
(statearr_12691[(9)] = inst_12627);

(statearr_12691[(10)] = inst_12628);

(statearr_12691[(11)] = inst_12626);

(statearr_12691[(12)] = inst_12629);

return statearr_12691;
})();
var statearr_12692_12726 = state_12674__$1;
(statearr_12692_12726[(2)] = null);

(statearr_12692_12726[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12675 === (17))){
var inst_12640 = (state_12674[(7)]);
var inst_12644 = cljs.core.chunk_first(inst_12640);
var inst_12645 = cljs.core.chunk_rest(inst_12640);
var inst_12646 = cljs.core.count(inst_12644);
var inst_12626 = inst_12645;
var inst_12627 = inst_12644;
var inst_12628 = inst_12646;
var inst_12629 = (0);
var state_12674__$1 = (function (){var statearr_12693 = state_12674;
(statearr_12693[(9)] = inst_12627);

(statearr_12693[(10)] = inst_12628);

(statearr_12693[(11)] = inst_12626);

(statearr_12693[(12)] = inst_12629);

return statearr_12693;
})();
var statearr_12694_12727 = state_12674__$1;
(statearr_12694_12727[(2)] = null);

(statearr_12694_12727[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12675 === (3))){
var inst_12672 = (state_12674[(2)]);
var state_12674__$1 = state_12674;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12674__$1,inst_12672);
} else {
if((state_val_12675 === (12))){
var inst_12660 = (state_12674[(2)]);
var state_12674__$1 = state_12674;
var statearr_12695_12728 = state_12674__$1;
(statearr_12695_12728[(2)] = inst_12660);

(statearr_12695_12728[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12675 === (2))){
var state_12674__$1 = state_12674;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12674__$1,(4),in$);
} else {
if((state_val_12675 === (23))){
var inst_12668 = (state_12674[(2)]);
var state_12674__$1 = state_12674;
var statearr_12696_12729 = state_12674__$1;
(statearr_12696_12729[(2)] = inst_12668);

(statearr_12696_12729[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12675 === (19))){
var inst_12655 = (state_12674[(2)]);
var state_12674__$1 = state_12674;
var statearr_12697_12730 = state_12674__$1;
(statearr_12697_12730[(2)] = inst_12655);

(statearr_12697_12730[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12675 === (11))){
var inst_12626 = (state_12674[(11)]);
var inst_12640 = (state_12674[(7)]);
var inst_12640__$1 = cljs.core.seq(inst_12626);
var state_12674__$1 = (function (){var statearr_12698 = state_12674;
(statearr_12698[(7)] = inst_12640__$1);

return statearr_12698;
})();
if(inst_12640__$1){
var statearr_12699_12731 = state_12674__$1;
(statearr_12699_12731[(1)] = (14));

} else {
var statearr_12700_12732 = state_12674__$1;
(statearr_12700_12732[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12675 === (9))){
var inst_12662 = (state_12674[(2)]);
var inst_12663 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_12674__$1 = (function (){var statearr_12701 = state_12674;
(statearr_12701[(15)] = inst_12662);

return statearr_12701;
})();
if(cljs.core.truth_(inst_12663)){
var statearr_12702_12733 = state_12674__$1;
(statearr_12702_12733[(1)] = (21));

} else {
var statearr_12703_12734 = state_12674__$1;
(statearr_12703_12734[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12675 === (5))){
var inst_12618 = cljs.core.async.close_BANG_(out);
var state_12674__$1 = state_12674;
var statearr_12704_12735 = state_12674__$1;
(statearr_12704_12735[(2)] = inst_12618);

(statearr_12704_12735[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12675 === (14))){
var inst_12640 = (state_12674[(7)]);
var inst_12642 = cljs.core.chunked_seq_QMARK_(inst_12640);
var state_12674__$1 = state_12674;
if(inst_12642){
var statearr_12705_12736 = state_12674__$1;
(statearr_12705_12736[(1)] = (17));

} else {
var statearr_12706_12737 = state_12674__$1;
(statearr_12706_12737[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12675 === (16))){
var inst_12658 = (state_12674[(2)]);
var state_12674__$1 = state_12674;
var statearr_12707_12738 = state_12674__$1;
(statearr_12707_12738[(2)] = inst_12658);

(statearr_12707_12738[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12675 === (10))){
var inst_12627 = (state_12674[(9)]);
var inst_12629 = (state_12674[(12)]);
var inst_12634 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_12627,inst_12629);
var state_12674__$1 = state_12674;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12674__$1,(13),out,inst_12634);
} else {
if((state_val_12675 === (18))){
var inst_12640 = (state_12674[(7)]);
var inst_12649 = cljs.core.first(inst_12640);
var state_12674__$1 = state_12674;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12674__$1,(20),out,inst_12649);
} else {
if((state_val_12675 === (8))){
var inst_12628 = (state_12674[(10)]);
var inst_12629 = (state_12674[(12)]);
var inst_12631 = (inst_12629 < inst_12628);
var inst_12632 = inst_12631;
var state_12674__$1 = state_12674;
if(cljs.core.truth_(inst_12632)){
var statearr_12708_12739 = state_12674__$1;
(statearr_12708_12739[(1)] = (10));

} else {
var statearr_12709_12740 = state_12674__$1;
(statearr_12709_12740[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__10212__auto__))
;
return ((function (switch__10098__auto__,c__10212__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__10099__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10099__auto____0 = (function (){
var statearr_12713 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12713[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10099__auto__);

(statearr_12713[(1)] = (1));

return statearr_12713;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10099__auto____1 = (function (state_12674){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_12674);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e12714){if((e12714 instanceof Object)){
var ex__10102__auto__ = e12714;
var statearr_12715_12741 = state_12674;
(statearr_12715_12741[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12674);

return cljs.core.cst$kw$recur;
} else {
throw e12714;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__12742 = state_12674;
state_12674 = G__12742;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10099__auto__ = function(state_12674){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10099__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10099__auto____1.call(this,state_12674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10099__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10099__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto__))
})();
var state__10214__auto__ = (function (){var statearr_12716 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_12716[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto__);

return statearr_12716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto__))
);

return c__10212__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args12743 = [];
var len__7214__auto___12746 = arguments.length;
var i__7215__auto___12747 = (0);
while(true){
if((i__7215__auto___12747 < len__7214__auto___12746)){
args12743.push((arguments[i__7215__auto___12747]));

var G__12748 = (i__7215__auto___12747 + (1));
i__7215__auto___12747 = G__12748;
continue;
} else {
}
break;
}

var G__12745 = args12743.length;
switch (G__12745) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12743.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args12750 = [];
var len__7214__auto___12753 = arguments.length;
var i__7215__auto___12754 = (0);
while(true){
if((i__7215__auto___12754 < len__7214__auto___12753)){
args12750.push((arguments[i__7215__auto___12754]));

var G__12755 = (i__7215__auto___12754 + (1));
i__7215__auto___12754 = G__12755;
continue;
} else {
}
break;
}

var G__12752 = args12750.length;
switch (G__12752) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12750.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args12757 = [];
var len__7214__auto___12808 = arguments.length;
var i__7215__auto___12809 = (0);
while(true){
if((i__7215__auto___12809 < len__7214__auto___12808)){
args12757.push((arguments[i__7215__auto___12809]));

var G__12810 = (i__7215__auto___12809 + (1));
i__7215__auto___12809 = G__12810;
continue;
} else {
}
break;
}

var G__12759 = args12757.length;
switch (G__12759) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12757.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10212__auto___12812 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto___12812,out){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto___12812,out){
return (function (state_12783){
var state_val_12784 = (state_12783[(1)]);
if((state_val_12784 === (7))){
var inst_12778 = (state_12783[(2)]);
var state_12783__$1 = state_12783;
var statearr_12785_12813 = state_12783__$1;
(statearr_12785_12813[(2)] = inst_12778);

(statearr_12785_12813[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12784 === (1))){
var inst_12760 = null;
var state_12783__$1 = (function (){var statearr_12786 = state_12783;
(statearr_12786[(7)] = inst_12760);

return statearr_12786;
})();
var statearr_12787_12814 = state_12783__$1;
(statearr_12787_12814[(2)] = null);

(statearr_12787_12814[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12784 === (4))){
var inst_12763 = (state_12783[(8)]);
var inst_12763__$1 = (state_12783[(2)]);
var inst_12764 = (inst_12763__$1 == null);
var inst_12765 = cljs.core.not(inst_12764);
var state_12783__$1 = (function (){var statearr_12788 = state_12783;
(statearr_12788[(8)] = inst_12763__$1);

return statearr_12788;
})();
if(inst_12765){
var statearr_12789_12815 = state_12783__$1;
(statearr_12789_12815[(1)] = (5));

} else {
var statearr_12790_12816 = state_12783__$1;
(statearr_12790_12816[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12784 === (6))){
var state_12783__$1 = state_12783;
var statearr_12791_12817 = state_12783__$1;
(statearr_12791_12817[(2)] = null);

(statearr_12791_12817[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12784 === (3))){
var inst_12780 = (state_12783[(2)]);
var inst_12781 = cljs.core.async.close_BANG_(out);
var state_12783__$1 = (function (){var statearr_12792 = state_12783;
(statearr_12792[(9)] = inst_12780);

return statearr_12792;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12783__$1,inst_12781);
} else {
if((state_val_12784 === (2))){
var state_12783__$1 = state_12783;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12783__$1,(4),ch);
} else {
if((state_val_12784 === (11))){
var inst_12763 = (state_12783[(8)]);
var inst_12772 = (state_12783[(2)]);
var inst_12760 = inst_12763;
var state_12783__$1 = (function (){var statearr_12793 = state_12783;
(statearr_12793[(10)] = inst_12772);

(statearr_12793[(7)] = inst_12760);

return statearr_12793;
})();
var statearr_12794_12818 = state_12783__$1;
(statearr_12794_12818[(2)] = null);

(statearr_12794_12818[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12784 === (9))){
var inst_12763 = (state_12783[(8)]);
var state_12783__$1 = state_12783;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12783__$1,(11),out,inst_12763);
} else {
if((state_val_12784 === (5))){
var inst_12763 = (state_12783[(8)]);
var inst_12760 = (state_12783[(7)]);
var inst_12767 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12763,inst_12760);
var state_12783__$1 = state_12783;
if(inst_12767){
var statearr_12796_12819 = state_12783__$1;
(statearr_12796_12819[(1)] = (8));

} else {
var statearr_12797_12820 = state_12783__$1;
(statearr_12797_12820[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12784 === (10))){
var inst_12775 = (state_12783[(2)]);
var state_12783__$1 = state_12783;
var statearr_12798_12821 = state_12783__$1;
(statearr_12798_12821[(2)] = inst_12775);

(statearr_12798_12821[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12784 === (8))){
var inst_12760 = (state_12783[(7)]);
var tmp12795 = inst_12760;
var inst_12760__$1 = tmp12795;
var state_12783__$1 = (function (){var statearr_12799 = state_12783;
(statearr_12799[(7)] = inst_12760__$1);

return statearr_12799;
})();
var statearr_12800_12822 = state_12783__$1;
(statearr_12800_12822[(2)] = null);

(statearr_12800_12822[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__10212__auto___12812,out))
;
return ((function (switch__10098__auto__,c__10212__auto___12812,out){
return (function() {
var cljs$core$async$state_machine__10099__auto__ = null;
var cljs$core$async$state_machine__10099__auto____0 = (function (){
var statearr_12804 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12804[(0)] = cljs$core$async$state_machine__10099__auto__);

(statearr_12804[(1)] = (1));

return statearr_12804;
});
var cljs$core$async$state_machine__10099__auto____1 = (function (state_12783){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_12783);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e12805){if((e12805 instanceof Object)){
var ex__10102__auto__ = e12805;
var statearr_12806_12823 = state_12783;
(statearr_12806_12823[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12783);

return cljs.core.cst$kw$recur;
} else {
throw e12805;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__12824 = state_12783;
state_12783 = G__12824;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
cljs$core$async$state_machine__10099__auto__ = function(state_12783){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10099__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10099__auto____1.call(this,state_12783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10099__auto____0;
cljs$core$async$state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10099__auto____1;
return cljs$core$async$state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto___12812,out))
})();
var state__10214__auto__ = (function (){var statearr_12807 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_12807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto___12812);

return statearr_12807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto___12812,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args12825 = [];
var len__7214__auto___12895 = arguments.length;
var i__7215__auto___12896 = (0);
while(true){
if((i__7215__auto___12896 < len__7214__auto___12895)){
args12825.push((arguments[i__7215__auto___12896]));

var G__12897 = (i__7215__auto___12896 + (1));
i__7215__auto___12896 = G__12897;
continue;
} else {
}
break;
}

var G__12827 = args12825.length;
switch (G__12827) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12825.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10212__auto___12899 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto___12899,out){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto___12899,out){
return (function (state_12865){
var state_val_12866 = (state_12865[(1)]);
if((state_val_12866 === (7))){
var inst_12861 = (state_12865[(2)]);
var state_12865__$1 = state_12865;
var statearr_12867_12900 = state_12865__$1;
(statearr_12867_12900[(2)] = inst_12861);

(statearr_12867_12900[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12866 === (1))){
var inst_12828 = (new Array(n));
var inst_12829 = inst_12828;
var inst_12830 = (0);
var state_12865__$1 = (function (){var statearr_12868 = state_12865;
(statearr_12868[(7)] = inst_12829);

(statearr_12868[(8)] = inst_12830);

return statearr_12868;
})();
var statearr_12869_12901 = state_12865__$1;
(statearr_12869_12901[(2)] = null);

(statearr_12869_12901[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12866 === (4))){
var inst_12833 = (state_12865[(9)]);
var inst_12833__$1 = (state_12865[(2)]);
var inst_12834 = (inst_12833__$1 == null);
var inst_12835 = cljs.core.not(inst_12834);
var state_12865__$1 = (function (){var statearr_12870 = state_12865;
(statearr_12870[(9)] = inst_12833__$1);

return statearr_12870;
})();
if(inst_12835){
var statearr_12871_12902 = state_12865__$1;
(statearr_12871_12902[(1)] = (5));

} else {
var statearr_12872_12903 = state_12865__$1;
(statearr_12872_12903[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12866 === (15))){
var inst_12855 = (state_12865[(2)]);
var state_12865__$1 = state_12865;
var statearr_12873_12904 = state_12865__$1;
(statearr_12873_12904[(2)] = inst_12855);

(statearr_12873_12904[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12866 === (13))){
var state_12865__$1 = state_12865;
var statearr_12874_12905 = state_12865__$1;
(statearr_12874_12905[(2)] = null);

(statearr_12874_12905[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12866 === (6))){
var inst_12830 = (state_12865[(8)]);
var inst_12851 = (inst_12830 > (0));
var state_12865__$1 = state_12865;
if(cljs.core.truth_(inst_12851)){
var statearr_12875_12906 = state_12865__$1;
(statearr_12875_12906[(1)] = (12));

} else {
var statearr_12876_12907 = state_12865__$1;
(statearr_12876_12907[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12866 === (3))){
var inst_12863 = (state_12865[(2)]);
var state_12865__$1 = state_12865;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12865__$1,inst_12863);
} else {
if((state_val_12866 === (12))){
var inst_12829 = (state_12865[(7)]);
var inst_12853 = cljs.core.vec(inst_12829);
var state_12865__$1 = state_12865;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12865__$1,(15),out,inst_12853);
} else {
if((state_val_12866 === (2))){
var state_12865__$1 = state_12865;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12865__$1,(4),ch);
} else {
if((state_val_12866 === (11))){
var inst_12845 = (state_12865[(2)]);
var inst_12846 = (new Array(n));
var inst_12829 = inst_12846;
var inst_12830 = (0);
var state_12865__$1 = (function (){var statearr_12877 = state_12865;
(statearr_12877[(10)] = inst_12845);

(statearr_12877[(7)] = inst_12829);

(statearr_12877[(8)] = inst_12830);

return statearr_12877;
})();
var statearr_12878_12908 = state_12865__$1;
(statearr_12878_12908[(2)] = null);

(statearr_12878_12908[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12866 === (9))){
var inst_12829 = (state_12865[(7)]);
var inst_12843 = cljs.core.vec(inst_12829);
var state_12865__$1 = state_12865;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12865__$1,(11),out,inst_12843);
} else {
if((state_val_12866 === (5))){
var inst_12838 = (state_12865[(11)]);
var inst_12829 = (state_12865[(7)]);
var inst_12833 = (state_12865[(9)]);
var inst_12830 = (state_12865[(8)]);
var inst_12837 = (inst_12829[inst_12830] = inst_12833);
var inst_12838__$1 = (inst_12830 + (1));
var inst_12839 = (inst_12838__$1 < n);
var state_12865__$1 = (function (){var statearr_12879 = state_12865;
(statearr_12879[(11)] = inst_12838__$1);

(statearr_12879[(12)] = inst_12837);

return statearr_12879;
})();
if(cljs.core.truth_(inst_12839)){
var statearr_12880_12909 = state_12865__$1;
(statearr_12880_12909[(1)] = (8));

} else {
var statearr_12881_12910 = state_12865__$1;
(statearr_12881_12910[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12866 === (14))){
var inst_12858 = (state_12865[(2)]);
var inst_12859 = cljs.core.async.close_BANG_(out);
var state_12865__$1 = (function (){var statearr_12883 = state_12865;
(statearr_12883[(13)] = inst_12858);

return statearr_12883;
})();
var statearr_12884_12911 = state_12865__$1;
(statearr_12884_12911[(2)] = inst_12859);

(statearr_12884_12911[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12866 === (10))){
var inst_12849 = (state_12865[(2)]);
var state_12865__$1 = state_12865;
var statearr_12885_12912 = state_12865__$1;
(statearr_12885_12912[(2)] = inst_12849);

(statearr_12885_12912[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12866 === (8))){
var inst_12838 = (state_12865[(11)]);
var inst_12829 = (state_12865[(7)]);
var tmp12882 = inst_12829;
var inst_12829__$1 = tmp12882;
var inst_12830 = inst_12838;
var state_12865__$1 = (function (){var statearr_12886 = state_12865;
(statearr_12886[(7)] = inst_12829__$1);

(statearr_12886[(8)] = inst_12830);

return statearr_12886;
})();
var statearr_12887_12913 = state_12865__$1;
(statearr_12887_12913[(2)] = null);

(statearr_12887_12913[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__10212__auto___12899,out))
;
return ((function (switch__10098__auto__,c__10212__auto___12899,out){
return (function() {
var cljs$core$async$state_machine__10099__auto__ = null;
var cljs$core$async$state_machine__10099__auto____0 = (function (){
var statearr_12891 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12891[(0)] = cljs$core$async$state_machine__10099__auto__);

(statearr_12891[(1)] = (1));

return statearr_12891;
});
var cljs$core$async$state_machine__10099__auto____1 = (function (state_12865){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_12865);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e12892){if((e12892 instanceof Object)){
var ex__10102__auto__ = e12892;
var statearr_12893_12914 = state_12865;
(statearr_12893_12914[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12865);

return cljs.core.cst$kw$recur;
} else {
throw e12892;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__12915 = state_12865;
state_12865 = G__12915;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
cljs$core$async$state_machine__10099__auto__ = function(state_12865){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10099__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10099__auto____1.call(this,state_12865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10099__auto____0;
cljs$core$async$state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10099__auto____1;
return cljs$core$async$state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto___12899,out))
})();
var state__10214__auto__ = (function (){var statearr_12894 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_12894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto___12899);

return statearr_12894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto___12899,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args12916 = [];
var len__7214__auto___12990 = arguments.length;
var i__7215__auto___12991 = (0);
while(true){
if((i__7215__auto___12991 < len__7214__auto___12990)){
args12916.push((arguments[i__7215__auto___12991]));

var G__12992 = (i__7215__auto___12991 + (1));
i__7215__auto___12991 = G__12992;
continue;
} else {
}
break;
}

var G__12918 = args12916.length;
switch (G__12918) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12916.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10212__auto___12994 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto___12994,out){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto___12994,out){
return (function (state_12960){
var state_val_12961 = (state_12960[(1)]);
if((state_val_12961 === (7))){
var inst_12956 = (state_12960[(2)]);
var state_12960__$1 = state_12960;
var statearr_12962_12995 = state_12960__$1;
(statearr_12962_12995[(2)] = inst_12956);

(statearr_12962_12995[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12961 === (1))){
var inst_12919 = [];
var inst_12920 = inst_12919;
var inst_12921 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_12960__$1 = (function (){var statearr_12963 = state_12960;
(statearr_12963[(7)] = inst_12921);

(statearr_12963[(8)] = inst_12920);

return statearr_12963;
})();
var statearr_12964_12996 = state_12960__$1;
(statearr_12964_12996[(2)] = null);

(statearr_12964_12996[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12961 === (4))){
var inst_12924 = (state_12960[(9)]);
var inst_12924__$1 = (state_12960[(2)]);
var inst_12925 = (inst_12924__$1 == null);
var inst_12926 = cljs.core.not(inst_12925);
var state_12960__$1 = (function (){var statearr_12965 = state_12960;
(statearr_12965[(9)] = inst_12924__$1);

return statearr_12965;
})();
if(inst_12926){
var statearr_12966_12997 = state_12960__$1;
(statearr_12966_12997[(1)] = (5));

} else {
var statearr_12967_12998 = state_12960__$1;
(statearr_12967_12998[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12961 === (15))){
var inst_12950 = (state_12960[(2)]);
var state_12960__$1 = state_12960;
var statearr_12968_12999 = state_12960__$1;
(statearr_12968_12999[(2)] = inst_12950);

(statearr_12968_12999[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12961 === (13))){
var state_12960__$1 = state_12960;
var statearr_12969_13000 = state_12960__$1;
(statearr_12969_13000[(2)] = null);

(statearr_12969_13000[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12961 === (6))){
var inst_12920 = (state_12960[(8)]);
var inst_12945 = inst_12920.length;
var inst_12946 = (inst_12945 > (0));
var state_12960__$1 = state_12960;
if(cljs.core.truth_(inst_12946)){
var statearr_12970_13001 = state_12960__$1;
(statearr_12970_13001[(1)] = (12));

} else {
var statearr_12971_13002 = state_12960__$1;
(statearr_12971_13002[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12961 === (3))){
var inst_12958 = (state_12960[(2)]);
var state_12960__$1 = state_12960;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12960__$1,inst_12958);
} else {
if((state_val_12961 === (12))){
var inst_12920 = (state_12960[(8)]);
var inst_12948 = cljs.core.vec(inst_12920);
var state_12960__$1 = state_12960;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12960__$1,(15),out,inst_12948);
} else {
if((state_val_12961 === (2))){
var state_12960__$1 = state_12960;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12960__$1,(4),ch);
} else {
if((state_val_12961 === (11))){
var inst_12928 = (state_12960[(10)]);
var inst_12924 = (state_12960[(9)]);
var inst_12938 = (state_12960[(2)]);
var inst_12939 = [];
var inst_12940 = inst_12939.push(inst_12924);
var inst_12920 = inst_12939;
var inst_12921 = inst_12928;
var state_12960__$1 = (function (){var statearr_12972 = state_12960;
(statearr_12972[(11)] = inst_12938);

(statearr_12972[(12)] = inst_12940);

(statearr_12972[(7)] = inst_12921);

(statearr_12972[(8)] = inst_12920);

return statearr_12972;
})();
var statearr_12973_13003 = state_12960__$1;
(statearr_12973_13003[(2)] = null);

(statearr_12973_13003[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12961 === (9))){
var inst_12920 = (state_12960[(8)]);
var inst_12936 = cljs.core.vec(inst_12920);
var state_12960__$1 = state_12960;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12960__$1,(11),out,inst_12936);
} else {
if((state_val_12961 === (5))){
var inst_12928 = (state_12960[(10)]);
var inst_12921 = (state_12960[(7)]);
var inst_12924 = (state_12960[(9)]);
var inst_12928__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12924) : f.call(null,inst_12924));
var inst_12929 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12928__$1,inst_12921);
var inst_12930 = cljs.core.keyword_identical_QMARK_(inst_12921,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_12931 = (inst_12929) || (inst_12930);
var state_12960__$1 = (function (){var statearr_12974 = state_12960;
(statearr_12974[(10)] = inst_12928__$1);

return statearr_12974;
})();
if(cljs.core.truth_(inst_12931)){
var statearr_12975_13004 = state_12960__$1;
(statearr_12975_13004[(1)] = (8));

} else {
var statearr_12976_13005 = state_12960__$1;
(statearr_12976_13005[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12961 === (14))){
var inst_12953 = (state_12960[(2)]);
var inst_12954 = cljs.core.async.close_BANG_(out);
var state_12960__$1 = (function (){var statearr_12978 = state_12960;
(statearr_12978[(13)] = inst_12953);

return statearr_12978;
})();
var statearr_12979_13006 = state_12960__$1;
(statearr_12979_13006[(2)] = inst_12954);

(statearr_12979_13006[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12961 === (10))){
var inst_12943 = (state_12960[(2)]);
var state_12960__$1 = state_12960;
var statearr_12980_13007 = state_12960__$1;
(statearr_12980_13007[(2)] = inst_12943);

(statearr_12980_13007[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12961 === (8))){
var inst_12928 = (state_12960[(10)]);
var inst_12924 = (state_12960[(9)]);
var inst_12920 = (state_12960[(8)]);
var inst_12933 = inst_12920.push(inst_12924);
var tmp12977 = inst_12920;
var inst_12920__$1 = tmp12977;
var inst_12921 = inst_12928;
var state_12960__$1 = (function (){var statearr_12981 = state_12960;
(statearr_12981[(14)] = inst_12933);

(statearr_12981[(7)] = inst_12921);

(statearr_12981[(8)] = inst_12920__$1);

return statearr_12981;
})();
var statearr_12982_13008 = state_12960__$1;
(statearr_12982_13008[(2)] = null);

(statearr_12982_13008[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__10212__auto___12994,out))
;
return ((function (switch__10098__auto__,c__10212__auto___12994,out){
return (function() {
var cljs$core$async$state_machine__10099__auto__ = null;
var cljs$core$async$state_machine__10099__auto____0 = (function (){
var statearr_12986 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12986[(0)] = cljs$core$async$state_machine__10099__auto__);

(statearr_12986[(1)] = (1));

return statearr_12986;
});
var cljs$core$async$state_machine__10099__auto____1 = (function (state_12960){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_12960);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e12987){if((e12987 instanceof Object)){
var ex__10102__auto__ = e12987;
var statearr_12988_13009 = state_12960;
(statearr_12988_13009[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12960);

return cljs.core.cst$kw$recur;
} else {
throw e12987;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__13010 = state_12960;
state_12960 = G__13010;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
cljs$core$async$state_machine__10099__auto__ = function(state_12960){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10099__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10099__auto____1.call(this,state_12960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10099__auto____0;
cljs$core$async$state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10099__auto____1;
return cljs$core$async$state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto___12994,out))
})();
var state__10214__auto__ = (function (){var statearr_12989 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_12989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto___12994);

return statearr_12989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto___12994,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
