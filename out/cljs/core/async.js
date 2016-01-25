// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args109423 = [];
var len__9156__auto___109429 = arguments.length;
var i__9157__auto___109430 = (0);
while(true){
if((i__9157__auto___109430 < len__9156__auto___109429)){
args109423.push((arguments[i__9157__auto___109430]));

var G__109431 = (i__9157__auto___109430 + (1));
i__9157__auto___109430 = G__109431;
continue;
} else {
}
break;
}

var G__109425 = args109423.length;
switch (G__109425) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args109423.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async109426 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async109426 = (function (f,blockable,meta109427){
this.f = f;
this.blockable = blockable;
this.meta109427 = meta109427;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async109426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_109428,meta109427__$1){
var self__ = this;
var _109428__$1 = this;
return (new cljs.core.async.t_cljs$core$async109426(self__.f,self__.blockable,meta109427__$1));
});

cljs.core.async.t_cljs$core$async109426.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_109428){
var self__ = this;
var _109428__$1 = this;
return self__.meta109427;
});

cljs.core.async.t_cljs$core$async109426.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async109426.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async109426.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async109426.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async109426.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta109427","meta109427",-640543538,null)], null);
});

cljs.core.async.t_cljs$core$async109426.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async109426.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async109426";

cljs.core.async.t_cljs$core$async109426.cljs$lang$ctorPrWriter = (function (this__8696__auto__,writer__8697__auto__,opt__8698__auto__){
return cljs.core._write.call(null,writer__8697__auto__,"cljs.core.async/t_cljs$core$async109426");
});

cljs.core.async.__GT_t_cljs$core$async109426 = (function cljs$core$async$__GT_t_cljs$core$async109426(f__$1,blockable__$1,meta109427){
return (new cljs.core.async.t_cljs$core$async109426(f__$1,blockable__$1,meta109427));
});

}

return (new cljs.core.async.t_cljs$core$async109426(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
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
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var args109435 = [];
var len__9156__auto___109438 = arguments.length;
var i__9157__auto___109439 = (0);
while(true){
if((i__9157__auto___109439 < len__9156__auto___109438)){
args109435.push((arguments[i__9157__auto___109439]));

var G__109440 = (i__9157__auto___109439 + (1));
i__9157__auto___109439 = G__109440;
continue;
} else {
}
break;
}

var G__109437 = args109435.length;
switch (G__109437) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args109435.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var args109442 = [];
var len__9156__auto___109445 = arguments.length;
var i__9157__auto___109446 = (0);
while(true){
if((i__9157__auto___109446 < len__9156__auto___109445)){
args109442.push((arguments[i__9157__auto___109446]));

var G__109447 = (i__9157__auto___109446 + (1));
i__9157__auto___109446 = G__109447;
continue;
} else {
}
break;
}

var G__109444 = args109442.length;
switch (G__109444) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args109442.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var args109449 = [];
var len__9156__auto___109452 = arguments.length;
var i__9157__auto___109453 = (0);
while(true){
if((i__9157__auto___109453 < len__9156__auto___109452)){
args109449.push((arguments[i__9157__auto___109453]));

var G__109454 = (i__9157__auto___109453 + (1));
i__9157__auto___109453 = G__109454;
continue;
} else {
}
break;
}

var G__109451 = args109449.length;
switch (G__109451) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args109449.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_109456 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_109456);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_109456,ret){
return (function (){
return fn1.call(null,val_109456);
});})(val_109456,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
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
var args109457 = [];
var len__9156__auto___109460 = arguments.length;
var i__9157__auto___109461 = (0);
while(true){
if((i__9157__auto___109461 < len__9156__auto___109460)){
args109457.push((arguments[i__9157__auto___109461]));

var G__109462 = (i__9157__auto___109461 + (1));
i__9157__auto___109461 = G__109462;
continue;
} else {
}
break;
}

var G__109459 = args109457.length;
switch (G__109459) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args109457.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
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
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__9001__auto___109464 = n;
var x_109465 = (0);
while(true){
if((x_109465 < n__9001__auto___109464)){
(a[x_109465] = (0));

var G__109466 = (x_109465 + (1));
x_109465 = G__109466;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__109467 = (i + (1));
i = G__109467;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async109471 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async109471 = (function (alt_flag,flag,meta109472){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta109472 = meta109472;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async109471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_109473,meta109472__$1){
var self__ = this;
var _109473__$1 = this;
return (new cljs.core.async.t_cljs$core$async109471(self__.alt_flag,self__.flag,meta109472__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async109471.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_109473){
var self__ = this;
var _109473__$1 = this;
return self__.meta109472;
});})(flag))
;

cljs.core.async.t_cljs$core$async109471.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async109471.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async109471.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async109471.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async109471.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta109472","meta109472",1205151345,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async109471.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async109471.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async109471";

cljs.core.async.t_cljs$core$async109471.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8696__auto__,writer__8697__auto__,opt__8698__auto__){
return cljs.core._write.call(null,writer__8697__auto__,"cljs.core.async/t_cljs$core$async109471");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async109471 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async109471(alt_flag__$1,flag__$1,meta109472){
return (new cljs.core.async.t_cljs$core$async109471(alt_flag__$1,flag__$1,meta109472));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async109471(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async109477 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async109477 = (function (alt_handler,flag,cb,meta109478){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta109478 = meta109478;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async109477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_109479,meta109478__$1){
var self__ = this;
var _109479__$1 = this;
return (new cljs.core.async.t_cljs$core$async109477(self__.alt_handler,self__.flag,self__.cb,meta109478__$1));
});

cljs.core.async.t_cljs$core$async109477.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_109479){
var self__ = this;
var _109479__$1 = this;
return self__.meta109478;
});

cljs.core.async.t_cljs$core$async109477.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async109477.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async109477.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async109477.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async109477.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta109478","meta109478",-812058577,null)], null);
});

cljs.core.async.t_cljs$core$async109477.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async109477.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async109477";

cljs.core.async.t_cljs$core$async109477.cljs$lang$ctorPrWriter = (function (this__8696__auto__,writer__8697__auto__,opt__8698__auto__){
return cljs.core._write.call(null,writer__8697__auto__,"cljs.core.async/t_cljs$core$async109477");
});

cljs.core.async.__GT_t_cljs$core$async109477 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async109477(alt_handler__$1,flag__$1,cb__$1,meta109478){
return (new cljs.core.async.t_cljs$core$async109477(alt_handler__$1,flag__$1,cb__$1,meta109478));
});

}

return (new cljs.core.async.t_cljs$core$async109477(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__109480_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__109480_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__109481_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__109481_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__8098__auto__ = wport;
if(cljs.core.truth_(or__8098__auto__)){
return or__8098__auto__;
} else {
return port;
}
})()], null));
} else {
var G__109482 = (i + (1));
i = G__109482;
continue;
}
} else {
return null;
}
break;
}
})();
var or__8098__auto__ = ret;
if(cljs.core.truth_(or__8098__auto__)){
return or__8098__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__8086__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__8086__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__8086__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__9163__auto__ = [];
var len__9156__auto___109488 = arguments.length;
var i__9157__auto___109489 = (0);
while(true){
if((i__9157__auto___109489 < len__9156__auto___109488)){
args__9163__auto__.push((arguments[i__9157__auto___109489]));

var G__109490 = (i__9157__auto___109489 + (1));
i__9157__auto___109489 = G__109490;
continue;
} else {
}
break;
}

var argseq__9164__auto__ = ((((1) < args__9163__auto__.length))?(new cljs.core.IndexedSeq(args__9163__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9164__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__109485){
var map__109486 = p__109485;
var map__109486__$1 = ((((!((map__109486 == null)))?((((map__109486.cljs$lang$protocol_mask$partition0$ & (64))) || (map__109486.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__109486):map__109486);
var opts = map__109486__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq109483){
var G__109484 = cljs.core.first.call(null,seq109483);
var seq109483__$1 = cljs.core.next.call(null,seq109483);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__109484,seq109483__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var args109491 = [];
var len__9156__auto___109541 = arguments.length;
var i__9157__auto___109542 = (0);
while(true){
if((i__9157__auto___109542 < len__9156__auto___109541)){
args109491.push((arguments[i__9157__auto___109542]));

var G__109543 = (i__9157__auto___109542 + (1));
i__9157__auto___109542 = G__109543;
continue;
} else {
}
break;
}

var G__109493 = args109491.length;
switch (G__109493) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args109491.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10446__auto___109545 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto___109545){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto___109545){
return (function (state_109517){
var state_val_109518 = (state_109517[(1)]);
if((state_val_109518 === (7))){
var inst_109513 = (state_109517[(2)]);
var state_109517__$1 = state_109517;
var statearr_109519_109546 = state_109517__$1;
(statearr_109519_109546[(2)] = inst_109513);

(statearr_109519_109546[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109518 === (1))){
var state_109517__$1 = state_109517;
var statearr_109520_109547 = state_109517__$1;
(statearr_109520_109547[(2)] = null);

(statearr_109520_109547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109518 === (4))){
var inst_109496 = (state_109517[(7)]);
var inst_109496__$1 = (state_109517[(2)]);
var inst_109497 = (inst_109496__$1 == null);
var state_109517__$1 = (function (){var statearr_109521 = state_109517;
(statearr_109521[(7)] = inst_109496__$1);

return statearr_109521;
})();
if(cljs.core.truth_(inst_109497)){
var statearr_109522_109548 = state_109517__$1;
(statearr_109522_109548[(1)] = (5));

} else {
var statearr_109523_109549 = state_109517__$1;
(statearr_109523_109549[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109518 === (13))){
var state_109517__$1 = state_109517;
var statearr_109524_109550 = state_109517__$1;
(statearr_109524_109550[(2)] = null);

(statearr_109524_109550[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109518 === (6))){
var inst_109496 = (state_109517[(7)]);
var state_109517__$1 = state_109517;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_109517__$1,(11),to,inst_109496);
} else {
if((state_val_109518 === (3))){
var inst_109515 = (state_109517[(2)]);
var state_109517__$1 = state_109517;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_109517__$1,inst_109515);
} else {
if((state_val_109518 === (12))){
var state_109517__$1 = state_109517;
var statearr_109525_109551 = state_109517__$1;
(statearr_109525_109551[(2)] = null);

(statearr_109525_109551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109518 === (2))){
var state_109517__$1 = state_109517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_109517__$1,(4),from);
} else {
if((state_val_109518 === (11))){
var inst_109506 = (state_109517[(2)]);
var state_109517__$1 = state_109517;
if(cljs.core.truth_(inst_109506)){
var statearr_109526_109552 = state_109517__$1;
(statearr_109526_109552[(1)] = (12));

} else {
var statearr_109527_109553 = state_109517__$1;
(statearr_109527_109553[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109518 === (9))){
var state_109517__$1 = state_109517;
var statearr_109528_109554 = state_109517__$1;
(statearr_109528_109554[(2)] = null);

(statearr_109528_109554[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109518 === (5))){
var state_109517__$1 = state_109517;
if(cljs.core.truth_(close_QMARK_)){
var statearr_109529_109555 = state_109517__$1;
(statearr_109529_109555[(1)] = (8));

} else {
var statearr_109530_109556 = state_109517__$1;
(statearr_109530_109556[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109518 === (14))){
var inst_109511 = (state_109517[(2)]);
var state_109517__$1 = state_109517;
var statearr_109531_109557 = state_109517__$1;
(statearr_109531_109557[(2)] = inst_109511);

(statearr_109531_109557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109518 === (10))){
var inst_109503 = (state_109517[(2)]);
var state_109517__$1 = state_109517;
var statearr_109532_109558 = state_109517__$1;
(statearr_109532_109558[(2)] = inst_109503);

(statearr_109532_109558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109518 === (8))){
var inst_109500 = cljs.core.async.close_BANG_.call(null,to);
var state_109517__$1 = state_109517;
var statearr_109533_109559 = state_109517__$1;
(statearr_109533_109559[(2)] = inst_109500);

(statearr_109533_109559[(1)] = (10));


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
});})(c__10446__auto___109545))
;
return ((function (switch__10425__auto__,c__10446__auto___109545){
return (function() {
var cljs$core$async$state_machine__10426__auto__ = null;
var cljs$core$async$state_machine__10426__auto____0 = (function (){
var statearr_109537 = [null,null,null,null,null,null,null,null];
(statearr_109537[(0)] = cljs$core$async$state_machine__10426__auto__);

(statearr_109537[(1)] = (1));

return statearr_109537;
});
var cljs$core$async$state_machine__10426__auto____1 = (function (state_109517){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_109517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e109538){if((e109538 instanceof Object)){
var ex__10429__auto__ = e109538;
var statearr_109539_109560 = state_109517;
(statearr_109539_109560[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_109517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e109538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__109561 = state_109517;
state_109517 = G__109561;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
cljs$core$async$state_machine__10426__auto__ = function(state_109517){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10426__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10426__auto____1.call(this,state_109517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10426__auto____0;
cljs$core$async$state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10426__auto____1;
return cljs$core$async$state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto___109545))
})();
var state__10448__auto__ = (function (){var statearr_109540 = f__10447__auto__.call(null);
(statearr_109540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto___109545);

return statearr_109540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto___109545))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__109745){
var vec__109746 = p__109745;
var v = cljs.core.nth.call(null,vec__109746,(0),null);
var p = cljs.core.nth.call(null,vec__109746,(1),null);
var job = vec__109746;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__10446__auto___109928 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto___109928,res,vec__109746,v,p,job,jobs,results){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto___109928,res,vec__109746,v,p,job,jobs,results){
return (function (state_109751){
var state_val_109752 = (state_109751[(1)]);
if((state_val_109752 === (1))){
var state_109751__$1 = state_109751;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_109751__$1,(2),res,v);
} else {
if((state_val_109752 === (2))){
var inst_109748 = (state_109751[(2)]);
var inst_109749 = cljs.core.async.close_BANG_.call(null,res);
var state_109751__$1 = (function (){var statearr_109753 = state_109751;
(statearr_109753[(7)] = inst_109748);

return statearr_109753;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_109751__$1,inst_109749);
} else {
return null;
}
}
});})(c__10446__auto___109928,res,vec__109746,v,p,job,jobs,results))
;
return ((function (switch__10425__auto__,c__10446__auto___109928,res,vec__109746,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____0 = (function (){
var statearr_109757 = [null,null,null,null,null,null,null,null];
(statearr_109757[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__);

(statearr_109757[(1)] = (1));

return statearr_109757;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____1 = (function (state_109751){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_109751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e109758){if((e109758 instanceof Object)){
var ex__10429__auto__ = e109758;
var statearr_109759_109929 = state_109751;
(statearr_109759_109929[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_109751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e109758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__109930 = state_109751;
state_109751 = G__109930;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__ = function(state_109751){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____1.call(this,state_109751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto___109928,res,vec__109746,v,p,job,jobs,results))
})();
var state__10448__auto__ = (function (){var statearr_109760 = f__10447__auto__.call(null);
(statearr_109760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto___109928);

return statearr_109760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto___109928,res,vec__109746,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__109761){
var vec__109762 = p__109761;
var v = cljs.core.nth.call(null,vec__109762,(0),null);
var p = cljs.core.nth.call(null,vec__109762,(1),null);
var job = vec__109762;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__9001__auto___109931 = n;
var __109932 = (0);
while(true){
if((__109932 < n__9001__auto___109931)){
var G__109763_109933 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__109763_109933) {
case "compute":
var c__10446__auto___109935 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__109932,c__10446__auto___109935,G__109763_109933,n__9001__auto___109931,jobs,results,process,async){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (__109932,c__10446__auto___109935,G__109763_109933,n__9001__auto___109931,jobs,results,process,async){
return (function (state_109776){
var state_val_109777 = (state_109776[(1)]);
if((state_val_109777 === (1))){
var state_109776__$1 = state_109776;
var statearr_109778_109936 = state_109776__$1;
(statearr_109778_109936[(2)] = null);

(statearr_109778_109936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109777 === (2))){
var state_109776__$1 = state_109776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_109776__$1,(4),jobs);
} else {
if((state_val_109777 === (3))){
var inst_109774 = (state_109776[(2)]);
var state_109776__$1 = state_109776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_109776__$1,inst_109774);
} else {
if((state_val_109777 === (4))){
var inst_109766 = (state_109776[(2)]);
var inst_109767 = process.call(null,inst_109766);
var state_109776__$1 = state_109776;
if(cljs.core.truth_(inst_109767)){
var statearr_109779_109937 = state_109776__$1;
(statearr_109779_109937[(1)] = (5));

} else {
var statearr_109780_109938 = state_109776__$1;
(statearr_109780_109938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109777 === (5))){
var state_109776__$1 = state_109776;
var statearr_109781_109939 = state_109776__$1;
(statearr_109781_109939[(2)] = null);

(statearr_109781_109939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109777 === (6))){
var state_109776__$1 = state_109776;
var statearr_109782_109940 = state_109776__$1;
(statearr_109782_109940[(2)] = null);

(statearr_109782_109940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109777 === (7))){
var inst_109772 = (state_109776[(2)]);
var state_109776__$1 = state_109776;
var statearr_109783_109941 = state_109776__$1;
(statearr_109783_109941[(2)] = inst_109772);

(statearr_109783_109941[(1)] = (3));


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
});})(__109932,c__10446__auto___109935,G__109763_109933,n__9001__auto___109931,jobs,results,process,async))
;
return ((function (__109932,switch__10425__auto__,c__10446__auto___109935,G__109763_109933,n__9001__auto___109931,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____0 = (function (){
var statearr_109787 = [null,null,null,null,null,null,null];
(statearr_109787[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__);

(statearr_109787[(1)] = (1));

return statearr_109787;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____1 = (function (state_109776){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_109776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e109788){if((e109788 instanceof Object)){
var ex__10429__auto__ = e109788;
var statearr_109789_109942 = state_109776;
(statearr_109789_109942[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_109776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e109788;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__109943 = state_109776;
state_109776 = G__109943;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__ = function(state_109776){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____1.call(this,state_109776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__;
})()
;})(__109932,switch__10425__auto__,c__10446__auto___109935,G__109763_109933,n__9001__auto___109931,jobs,results,process,async))
})();
var state__10448__auto__ = (function (){var statearr_109790 = f__10447__auto__.call(null);
(statearr_109790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto___109935);

return statearr_109790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(__109932,c__10446__auto___109935,G__109763_109933,n__9001__auto___109931,jobs,results,process,async))
);


break;
case "async":
var c__10446__auto___109944 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__109932,c__10446__auto___109944,G__109763_109933,n__9001__auto___109931,jobs,results,process,async){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (__109932,c__10446__auto___109944,G__109763_109933,n__9001__auto___109931,jobs,results,process,async){
return (function (state_109803){
var state_val_109804 = (state_109803[(1)]);
if((state_val_109804 === (1))){
var state_109803__$1 = state_109803;
var statearr_109805_109945 = state_109803__$1;
(statearr_109805_109945[(2)] = null);

(statearr_109805_109945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109804 === (2))){
var state_109803__$1 = state_109803;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_109803__$1,(4),jobs);
} else {
if((state_val_109804 === (3))){
var inst_109801 = (state_109803[(2)]);
var state_109803__$1 = state_109803;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_109803__$1,inst_109801);
} else {
if((state_val_109804 === (4))){
var inst_109793 = (state_109803[(2)]);
var inst_109794 = async.call(null,inst_109793);
var state_109803__$1 = state_109803;
if(cljs.core.truth_(inst_109794)){
var statearr_109806_109946 = state_109803__$1;
(statearr_109806_109946[(1)] = (5));

} else {
var statearr_109807_109947 = state_109803__$1;
(statearr_109807_109947[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109804 === (5))){
var state_109803__$1 = state_109803;
var statearr_109808_109948 = state_109803__$1;
(statearr_109808_109948[(2)] = null);

(statearr_109808_109948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109804 === (6))){
var state_109803__$1 = state_109803;
var statearr_109809_109949 = state_109803__$1;
(statearr_109809_109949[(2)] = null);

(statearr_109809_109949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109804 === (7))){
var inst_109799 = (state_109803[(2)]);
var state_109803__$1 = state_109803;
var statearr_109810_109950 = state_109803__$1;
(statearr_109810_109950[(2)] = inst_109799);

(statearr_109810_109950[(1)] = (3));


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
});})(__109932,c__10446__auto___109944,G__109763_109933,n__9001__auto___109931,jobs,results,process,async))
;
return ((function (__109932,switch__10425__auto__,c__10446__auto___109944,G__109763_109933,n__9001__auto___109931,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____0 = (function (){
var statearr_109814 = [null,null,null,null,null,null,null];
(statearr_109814[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__);

(statearr_109814[(1)] = (1));

return statearr_109814;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____1 = (function (state_109803){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_109803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e109815){if((e109815 instanceof Object)){
var ex__10429__auto__ = e109815;
var statearr_109816_109951 = state_109803;
(statearr_109816_109951[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_109803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e109815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__109952 = state_109803;
state_109803 = G__109952;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__ = function(state_109803){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____1.call(this,state_109803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__;
})()
;})(__109932,switch__10425__auto__,c__10446__auto___109944,G__109763_109933,n__9001__auto___109931,jobs,results,process,async))
})();
var state__10448__auto__ = (function (){var statearr_109817 = f__10447__auto__.call(null);
(statearr_109817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto___109944);

return statearr_109817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(__109932,c__10446__auto___109944,G__109763_109933,n__9001__auto___109931,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__109953 = (__109932 + (1));
__109932 = G__109953;
continue;
} else {
}
break;
}

var c__10446__auto___109954 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto___109954,jobs,results,process,async){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto___109954,jobs,results,process,async){
return (function (state_109839){
var state_val_109840 = (state_109839[(1)]);
if((state_val_109840 === (1))){
var state_109839__$1 = state_109839;
var statearr_109841_109955 = state_109839__$1;
(statearr_109841_109955[(2)] = null);

(statearr_109841_109955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109840 === (2))){
var state_109839__$1 = state_109839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_109839__$1,(4),from);
} else {
if((state_val_109840 === (3))){
var inst_109837 = (state_109839[(2)]);
var state_109839__$1 = state_109839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_109839__$1,inst_109837);
} else {
if((state_val_109840 === (4))){
var inst_109820 = (state_109839[(7)]);
var inst_109820__$1 = (state_109839[(2)]);
var inst_109821 = (inst_109820__$1 == null);
var state_109839__$1 = (function (){var statearr_109842 = state_109839;
(statearr_109842[(7)] = inst_109820__$1);

return statearr_109842;
})();
if(cljs.core.truth_(inst_109821)){
var statearr_109843_109956 = state_109839__$1;
(statearr_109843_109956[(1)] = (5));

} else {
var statearr_109844_109957 = state_109839__$1;
(statearr_109844_109957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109840 === (5))){
var inst_109823 = cljs.core.async.close_BANG_.call(null,jobs);
var state_109839__$1 = state_109839;
var statearr_109845_109958 = state_109839__$1;
(statearr_109845_109958[(2)] = inst_109823);

(statearr_109845_109958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109840 === (6))){
var inst_109820 = (state_109839[(7)]);
var inst_109825 = (state_109839[(8)]);
var inst_109825__$1 = cljs.core.async.chan.call(null,(1));
var inst_109826 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_109827 = [inst_109820,inst_109825__$1];
var inst_109828 = (new cljs.core.PersistentVector(null,2,(5),inst_109826,inst_109827,null));
var state_109839__$1 = (function (){var statearr_109846 = state_109839;
(statearr_109846[(8)] = inst_109825__$1);

return statearr_109846;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_109839__$1,(8),jobs,inst_109828);
} else {
if((state_val_109840 === (7))){
var inst_109835 = (state_109839[(2)]);
var state_109839__$1 = state_109839;
var statearr_109847_109959 = state_109839__$1;
(statearr_109847_109959[(2)] = inst_109835);

(statearr_109847_109959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109840 === (8))){
var inst_109825 = (state_109839[(8)]);
var inst_109830 = (state_109839[(2)]);
var state_109839__$1 = (function (){var statearr_109848 = state_109839;
(statearr_109848[(9)] = inst_109830);

return statearr_109848;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_109839__$1,(9),results,inst_109825);
} else {
if((state_val_109840 === (9))){
var inst_109832 = (state_109839[(2)]);
var state_109839__$1 = (function (){var statearr_109849 = state_109839;
(statearr_109849[(10)] = inst_109832);

return statearr_109849;
})();
var statearr_109850_109960 = state_109839__$1;
(statearr_109850_109960[(2)] = null);

(statearr_109850_109960[(1)] = (2));


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
});})(c__10446__auto___109954,jobs,results,process,async))
;
return ((function (switch__10425__auto__,c__10446__auto___109954,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____0 = (function (){
var statearr_109854 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_109854[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__);

(statearr_109854[(1)] = (1));

return statearr_109854;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____1 = (function (state_109839){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_109839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e109855){if((e109855 instanceof Object)){
var ex__10429__auto__ = e109855;
var statearr_109856_109961 = state_109839;
(statearr_109856_109961[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_109839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e109855;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__109962 = state_109839;
state_109839 = G__109962;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__ = function(state_109839){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____1.call(this,state_109839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto___109954,jobs,results,process,async))
})();
var state__10448__auto__ = (function (){var statearr_109857 = f__10447__auto__.call(null);
(statearr_109857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto___109954);

return statearr_109857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto___109954,jobs,results,process,async))
);


var c__10446__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto__,jobs,results,process,async){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto__,jobs,results,process,async){
return (function (state_109895){
var state_val_109896 = (state_109895[(1)]);
if((state_val_109896 === (7))){
var inst_109891 = (state_109895[(2)]);
var state_109895__$1 = state_109895;
var statearr_109897_109963 = state_109895__$1;
(statearr_109897_109963[(2)] = inst_109891);

(statearr_109897_109963[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109896 === (20))){
var state_109895__$1 = state_109895;
var statearr_109898_109964 = state_109895__$1;
(statearr_109898_109964[(2)] = null);

(statearr_109898_109964[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109896 === (1))){
var state_109895__$1 = state_109895;
var statearr_109899_109965 = state_109895__$1;
(statearr_109899_109965[(2)] = null);

(statearr_109899_109965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109896 === (4))){
var inst_109860 = (state_109895[(7)]);
var inst_109860__$1 = (state_109895[(2)]);
var inst_109861 = (inst_109860__$1 == null);
var state_109895__$1 = (function (){var statearr_109900 = state_109895;
(statearr_109900[(7)] = inst_109860__$1);

return statearr_109900;
})();
if(cljs.core.truth_(inst_109861)){
var statearr_109901_109966 = state_109895__$1;
(statearr_109901_109966[(1)] = (5));

} else {
var statearr_109902_109967 = state_109895__$1;
(statearr_109902_109967[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109896 === (15))){
var inst_109873 = (state_109895[(8)]);
var state_109895__$1 = state_109895;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_109895__$1,(18),to,inst_109873);
} else {
if((state_val_109896 === (21))){
var inst_109886 = (state_109895[(2)]);
var state_109895__$1 = state_109895;
var statearr_109903_109968 = state_109895__$1;
(statearr_109903_109968[(2)] = inst_109886);

(statearr_109903_109968[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109896 === (13))){
var inst_109888 = (state_109895[(2)]);
var state_109895__$1 = (function (){var statearr_109904 = state_109895;
(statearr_109904[(9)] = inst_109888);

return statearr_109904;
})();
var statearr_109905_109969 = state_109895__$1;
(statearr_109905_109969[(2)] = null);

(statearr_109905_109969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109896 === (6))){
var inst_109860 = (state_109895[(7)]);
var state_109895__$1 = state_109895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_109895__$1,(11),inst_109860);
} else {
if((state_val_109896 === (17))){
var inst_109881 = (state_109895[(2)]);
var state_109895__$1 = state_109895;
if(cljs.core.truth_(inst_109881)){
var statearr_109906_109970 = state_109895__$1;
(statearr_109906_109970[(1)] = (19));

} else {
var statearr_109907_109971 = state_109895__$1;
(statearr_109907_109971[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109896 === (3))){
var inst_109893 = (state_109895[(2)]);
var state_109895__$1 = state_109895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_109895__$1,inst_109893);
} else {
if((state_val_109896 === (12))){
var inst_109870 = (state_109895[(10)]);
var state_109895__$1 = state_109895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_109895__$1,(14),inst_109870);
} else {
if((state_val_109896 === (2))){
var state_109895__$1 = state_109895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_109895__$1,(4),results);
} else {
if((state_val_109896 === (19))){
var state_109895__$1 = state_109895;
var statearr_109908_109972 = state_109895__$1;
(statearr_109908_109972[(2)] = null);

(statearr_109908_109972[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109896 === (11))){
var inst_109870 = (state_109895[(2)]);
var state_109895__$1 = (function (){var statearr_109909 = state_109895;
(statearr_109909[(10)] = inst_109870);

return statearr_109909;
})();
var statearr_109910_109973 = state_109895__$1;
(statearr_109910_109973[(2)] = null);

(statearr_109910_109973[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109896 === (9))){
var state_109895__$1 = state_109895;
var statearr_109911_109974 = state_109895__$1;
(statearr_109911_109974[(2)] = null);

(statearr_109911_109974[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109896 === (5))){
var state_109895__$1 = state_109895;
if(cljs.core.truth_(close_QMARK_)){
var statearr_109912_109975 = state_109895__$1;
(statearr_109912_109975[(1)] = (8));

} else {
var statearr_109913_109976 = state_109895__$1;
(statearr_109913_109976[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109896 === (14))){
var inst_109875 = (state_109895[(11)]);
var inst_109873 = (state_109895[(8)]);
var inst_109873__$1 = (state_109895[(2)]);
var inst_109874 = (inst_109873__$1 == null);
var inst_109875__$1 = cljs.core.not.call(null,inst_109874);
var state_109895__$1 = (function (){var statearr_109914 = state_109895;
(statearr_109914[(11)] = inst_109875__$1);

(statearr_109914[(8)] = inst_109873__$1);

return statearr_109914;
})();
if(inst_109875__$1){
var statearr_109915_109977 = state_109895__$1;
(statearr_109915_109977[(1)] = (15));

} else {
var statearr_109916_109978 = state_109895__$1;
(statearr_109916_109978[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109896 === (16))){
var inst_109875 = (state_109895[(11)]);
var state_109895__$1 = state_109895;
var statearr_109917_109979 = state_109895__$1;
(statearr_109917_109979[(2)] = inst_109875);

(statearr_109917_109979[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109896 === (10))){
var inst_109867 = (state_109895[(2)]);
var state_109895__$1 = state_109895;
var statearr_109918_109980 = state_109895__$1;
(statearr_109918_109980[(2)] = inst_109867);

(statearr_109918_109980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109896 === (18))){
var inst_109878 = (state_109895[(2)]);
var state_109895__$1 = state_109895;
var statearr_109919_109981 = state_109895__$1;
(statearr_109919_109981[(2)] = inst_109878);

(statearr_109919_109981[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109896 === (8))){
var inst_109864 = cljs.core.async.close_BANG_.call(null,to);
var state_109895__$1 = state_109895;
var statearr_109920_109982 = state_109895__$1;
(statearr_109920_109982[(2)] = inst_109864);

(statearr_109920_109982[(1)] = (10));


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
});})(c__10446__auto__,jobs,results,process,async))
;
return ((function (switch__10425__auto__,c__10446__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____0 = (function (){
var statearr_109924 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_109924[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__);

(statearr_109924[(1)] = (1));

return statearr_109924;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____1 = (function (state_109895){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_109895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e109925){if((e109925 instanceof Object)){
var ex__10429__auto__ = e109925;
var statearr_109926_109983 = state_109895;
(statearr_109926_109983[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_109895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e109925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__109984 = state_109895;
state_109895 = G__109984;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__ = function(state_109895){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____1.call(this,state_109895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__,jobs,results,process,async))
})();
var state__10448__auto__ = (function (){var statearr_109927 = f__10447__auto__.call(null);
(statearr_109927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_109927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto__,jobs,results,process,async))
);

return c__10446__auto__;
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
var args109985 = [];
var len__9156__auto___109988 = arguments.length;
var i__9157__auto___109989 = (0);
while(true){
if((i__9157__auto___109989 < len__9156__auto___109988)){
args109985.push((arguments[i__9157__auto___109989]));

var G__109990 = (i__9157__auto___109989 + (1));
i__9157__auto___109989 = G__109990;
continue;
} else {
}
break;
}

var G__109987 = args109985.length;
switch (G__109987) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args109985.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var args109992 = [];
var len__9156__auto___109995 = arguments.length;
var i__9157__auto___109996 = (0);
while(true){
if((i__9157__auto___109996 < len__9156__auto___109995)){
args109992.push((arguments[i__9157__auto___109996]));

var G__109997 = (i__9157__auto___109996 + (1));
i__9157__auto___109996 = G__109997;
continue;
} else {
}
break;
}

var G__109994 = args109992.length;
switch (G__109994) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args109992.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var args109999 = [];
var len__9156__auto___110052 = arguments.length;
var i__9157__auto___110053 = (0);
while(true){
if((i__9157__auto___110053 < len__9156__auto___110052)){
args109999.push((arguments[i__9157__auto___110053]));

var G__110054 = (i__9157__auto___110053 + (1));
i__9157__auto___110053 = G__110054;
continue;
} else {
}
break;
}

var G__110001 = args109999.length;
switch (G__110001) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args109999.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__10446__auto___110056 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto___110056,tc,fc){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto___110056,tc,fc){
return (function (state_110027){
var state_val_110028 = (state_110027[(1)]);
if((state_val_110028 === (7))){
var inst_110023 = (state_110027[(2)]);
var state_110027__$1 = state_110027;
var statearr_110029_110057 = state_110027__$1;
(statearr_110029_110057[(2)] = inst_110023);

(statearr_110029_110057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110028 === (1))){
var state_110027__$1 = state_110027;
var statearr_110030_110058 = state_110027__$1;
(statearr_110030_110058[(2)] = null);

(statearr_110030_110058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110028 === (4))){
var inst_110004 = (state_110027[(7)]);
var inst_110004__$1 = (state_110027[(2)]);
var inst_110005 = (inst_110004__$1 == null);
var state_110027__$1 = (function (){var statearr_110031 = state_110027;
(statearr_110031[(7)] = inst_110004__$1);

return statearr_110031;
})();
if(cljs.core.truth_(inst_110005)){
var statearr_110032_110059 = state_110027__$1;
(statearr_110032_110059[(1)] = (5));

} else {
var statearr_110033_110060 = state_110027__$1;
(statearr_110033_110060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110028 === (13))){
var state_110027__$1 = state_110027;
var statearr_110034_110061 = state_110027__$1;
(statearr_110034_110061[(2)] = null);

(statearr_110034_110061[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110028 === (6))){
var inst_110004 = (state_110027[(7)]);
var inst_110010 = p.call(null,inst_110004);
var state_110027__$1 = state_110027;
if(cljs.core.truth_(inst_110010)){
var statearr_110035_110062 = state_110027__$1;
(statearr_110035_110062[(1)] = (9));

} else {
var statearr_110036_110063 = state_110027__$1;
(statearr_110036_110063[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110028 === (3))){
var inst_110025 = (state_110027[(2)]);
var state_110027__$1 = state_110027;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_110027__$1,inst_110025);
} else {
if((state_val_110028 === (12))){
var state_110027__$1 = state_110027;
var statearr_110037_110064 = state_110027__$1;
(statearr_110037_110064[(2)] = null);

(statearr_110037_110064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110028 === (2))){
var state_110027__$1 = state_110027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_110027__$1,(4),ch);
} else {
if((state_val_110028 === (11))){
var inst_110004 = (state_110027[(7)]);
var inst_110014 = (state_110027[(2)]);
var state_110027__$1 = state_110027;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_110027__$1,(8),inst_110014,inst_110004);
} else {
if((state_val_110028 === (9))){
var state_110027__$1 = state_110027;
var statearr_110038_110065 = state_110027__$1;
(statearr_110038_110065[(2)] = tc);

(statearr_110038_110065[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110028 === (5))){
var inst_110007 = cljs.core.async.close_BANG_.call(null,tc);
var inst_110008 = cljs.core.async.close_BANG_.call(null,fc);
var state_110027__$1 = (function (){var statearr_110039 = state_110027;
(statearr_110039[(8)] = inst_110007);

return statearr_110039;
})();
var statearr_110040_110066 = state_110027__$1;
(statearr_110040_110066[(2)] = inst_110008);

(statearr_110040_110066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110028 === (14))){
var inst_110021 = (state_110027[(2)]);
var state_110027__$1 = state_110027;
var statearr_110041_110067 = state_110027__$1;
(statearr_110041_110067[(2)] = inst_110021);

(statearr_110041_110067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110028 === (10))){
var state_110027__$1 = state_110027;
var statearr_110042_110068 = state_110027__$1;
(statearr_110042_110068[(2)] = fc);

(statearr_110042_110068[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110028 === (8))){
var inst_110016 = (state_110027[(2)]);
var state_110027__$1 = state_110027;
if(cljs.core.truth_(inst_110016)){
var statearr_110043_110069 = state_110027__$1;
(statearr_110043_110069[(1)] = (12));

} else {
var statearr_110044_110070 = state_110027__$1;
(statearr_110044_110070[(1)] = (13));

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
});})(c__10446__auto___110056,tc,fc))
;
return ((function (switch__10425__auto__,c__10446__auto___110056,tc,fc){
return (function() {
var cljs$core$async$state_machine__10426__auto__ = null;
var cljs$core$async$state_machine__10426__auto____0 = (function (){
var statearr_110048 = [null,null,null,null,null,null,null,null,null];
(statearr_110048[(0)] = cljs$core$async$state_machine__10426__auto__);

(statearr_110048[(1)] = (1));

return statearr_110048;
});
var cljs$core$async$state_machine__10426__auto____1 = (function (state_110027){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_110027);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e110049){if((e110049 instanceof Object)){
var ex__10429__auto__ = e110049;
var statearr_110050_110071 = state_110027;
(statearr_110050_110071[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_110027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e110049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__110072 = state_110027;
state_110027 = G__110072;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
cljs$core$async$state_machine__10426__auto__ = function(state_110027){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10426__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10426__auto____1.call(this,state_110027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10426__auto____0;
cljs$core$async$state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10426__auto____1;
return cljs$core$async$state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto___110056,tc,fc))
})();
var state__10448__auto__ = (function (){var statearr_110051 = f__10447__auto__.call(null);
(statearr_110051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto___110056);

return statearr_110051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto___110056,tc,fc))
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
var c__10446__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto__){
return (function (state_110136){
var state_val_110137 = (state_110136[(1)]);
if((state_val_110137 === (7))){
var inst_110132 = (state_110136[(2)]);
var state_110136__$1 = state_110136;
var statearr_110138_110159 = state_110136__$1;
(statearr_110138_110159[(2)] = inst_110132);

(statearr_110138_110159[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110137 === (1))){
var inst_110116 = init;
var state_110136__$1 = (function (){var statearr_110139 = state_110136;
(statearr_110139[(7)] = inst_110116);

return statearr_110139;
})();
var statearr_110140_110160 = state_110136__$1;
(statearr_110140_110160[(2)] = null);

(statearr_110140_110160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110137 === (4))){
var inst_110119 = (state_110136[(8)]);
var inst_110119__$1 = (state_110136[(2)]);
var inst_110120 = (inst_110119__$1 == null);
var state_110136__$1 = (function (){var statearr_110141 = state_110136;
(statearr_110141[(8)] = inst_110119__$1);

return statearr_110141;
})();
if(cljs.core.truth_(inst_110120)){
var statearr_110142_110161 = state_110136__$1;
(statearr_110142_110161[(1)] = (5));

} else {
var statearr_110143_110162 = state_110136__$1;
(statearr_110143_110162[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110137 === (6))){
var inst_110123 = (state_110136[(9)]);
var inst_110116 = (state_110136[(7)]);
var inst_110119 = (state_110136[(8)]);
var inst_110123__$1 = f.call(null,inst_110116,inst_110119);
var inst_110124 = cljs.core.reduced_QMARK_.call(null,inst_110123__$1);
var state_110136__$1 = (function (){var statearr_110144 = state_110136;
(statearr_110144[(9)] = inst_110123__$1);

return statearr_110144;
})();
if(inst_110124){
var statearr_110145_110163 = state_110136__$1;
(statearr_110145_110163[(1)] = (8));

} else {
var statearr_110146_110164 = state_110136__$1;
(statearr_110146_110164[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110137 === (3))){
var inst_110134 = (state_110136[(2)]);
var state_110136__$1 = state_110136;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_110136__$1,inst_110134);
} else {
if((state_val_110137 === (2))){
var state_110136__$1 = state_110136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_110136__$1,(4),ch);
} else {
if((state_val_110137 === (9))){
var inst_110123 = (state_110136[(9)]);
var inst_110116 = inst_110123;
var state_110136__$1 = (function (){var statearr_110147 = state_110136;
(statearr_110147[(7)] = inst_110116);

return statearr_110147;
})();
var statearr_110148_110165 = state_110136__$1;
(statearr_110148_110165[(2)] = null);

(statearr_110148_110165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110137 === (5))){
var inst_110116 = (state_110136[(7)]);
var state_110136__$1 = state_110136;
var statearr_110149_110166 = state_110136__$1;
(statearr_110149_110166[(2)] = inst_110116);

(statearr_110149_110166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110137 === (10))){
var inst_110130 = (state_110136[(2)]);
var state_110136__$1 = state_110136;
var statearr_110150_110167 = state_110136__$1;
(statearr_110150_110167[(2)] = inst_110130);

(statearr_110150_110167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110137 === (8))){
var inst_110123 = (state_110136[(9)]);
var inst_110126 = cljs.core.deref.call(null,inst_110123);
var state_110136__$1 = state_110136;
var statearr_110151_110168 = state_110136__$1;
(statearr_110151_110168[(2)] = inst_110126);

(statearr_110151_110168[(1)] = (10));


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
});})(c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__10426__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10426__auto____0 = (function (){
var statearr_110155 = [null,null,null,null,null,null,null,null,null,null];
(statearr_110155[(0)] = cljs$core$async$reduce_$_state_machine__10426__auto__);

(statearr_110155[(1)] = (1));

return statearr_110155;
});
var cljs$core$async$reduce_$_state_machine__10426__auto____1 = (function (state_110136){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_110136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e110156){if((e110156 instanceof Object)){
var ex__10429__auto__ = e110156;
var statearr_110157_110169 = state_110136;
(statearr_110157_110169[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_110136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e110156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__110170 = state_110136;
state_110136 = G__110170;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10426__auto__ = function(state_110136){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10426__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10426__auto____1.call(this,state_110136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10426__auto____0;
cljs$core$async$reduce_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10426__auto____1;
return cljs$core$async$reduce_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_110158 = f__10447__auto__.call(null);
(statearr_110158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_110158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto__))
);

return c__10446__auto__;
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
var args110171 = [];
var len__9156__auto___110223 = arguments.length;
var i__9157__auto___110224 = (0);
while(true){
if((i__9157__auto___110224 < len__9156__auto___110223)){
args110171.push((arguments[i__9157__auto___110224]));

var G__110225 = (i__9157__auto___110224 + (1));
i__9157__auto___110224 = G__110225;
continue;
} else {
}
break;
}

var G__110173 = args110171.length;
switch (G__110173) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args110171.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__10446__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto__){
return (function (state_110198){
var state_val_110199 = (state_110198[(1)]);
if((state_val_110199 === (7))){
var inst_110180 = (state_110198[(2)]);
var state_110198__$1 = state_110198;
var statearr_110200_110227 = state_110198__$1;
(statearr_110200_110227[(2)] = inst_110180);

(statearr_110200_110227[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110199 === (1))){
var inst_110174 = cljs.core.seq.call(null,coll);
var inst_110175 = inst_110174;
var state_110198__$1 = (function (){var statearr_110201 = state_110198;
(statearr_110201[(7)] = inst_110175);

return statearr_110201;
})();
var statearr_110202_110228 = state_110198__$1;
(statearr_110202_110228[(2)] = null);

(statearr_110202_110228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110199 === (4))){
var inst_110175 = (state_110198[(7)]);
var inst_110178 = cljs.core.first.call(null,inst_110175);
var state_110198__$1 = state_110198;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_110198__$1,(7),ch,inst_110178);
} else {
if((state_val_110199 === (13))){
var inst_110192 = (state_110198[(2)]);
var state_110198__$1 = state_110198;
var statearr_110203_110229 = state_110198__$1;
(statearr_110203_110229[(2)] = inst_110192);

(statearr_110203_110229[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110199 === (6))){
var inst_110183 = (state_110198[(2)]);
var state_110198__$1 = state_110198;
if(cljs.core.truth_(inst_110183)){
var statearr_110204_110230 = state_110198__$1;
(statearr_110204_110230[(1)] = (8));

} else {
var statearr_110205_110231 = state_110198__$1;
(statearr_110205_110231[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110199 === (3))){
var inst_110196 = (state_110198[(2)]);
var state_110198__$1 = state_110198;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_110198__$1,inst_110196);
} else {
if((state_val_110199 === (12))){
var state_110198__$1 = state_110198;
var statearr_110206_110232 = state_110198__$1;
(statearr_110206_110232[(2)] = null);

(statearr_110206_110232[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110199 === (2))){
var inst_110175 = (state_110198[(7)]);
var state_110198__$1 = state_110198;
if(cljs.core.truth_(inst_110175)){
var statearr_110207_110233 = state_110198__$1;
(statearr_110207_110233[(1)] = (4));

} else {
var statearr_110208_110234 = state_110198__$1;
(statearr_110208_110234[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110199 === (11))){
var inst_110189 = cljs.core.async.close_BANG_.call(null,ch);
var state_110198__$1 = state_110198;
var statearr_110209_110235 = state_110198__$1;
(statearr_110209_110235[(2)] = inst_110189);

(statearr_110209_110235[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110199 === (9))){
var state_110198__$1 = state_110198;
if(cljs.core.truth_(close_QMARK_)){
var statearr_110210_110236 = state_110198__$1;
(statearr_110210_110236[(1)] = (11));

} else {
var statearr_110211_110237 = state_110198__$1;
(statearr_110211_110237[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110199 === (5))){
var inst_110175 = (state_110198[(7)]);
var state_110198__$1 = state_110198;
var statearr_110212_110238 = state_110198__$1;
(statearr_110212_110238[(2)] = inst_110175);

(statearr_110212_110238[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110199 === (10))){
var inst_110194 = (state_110198[(2)]);
var state_110198__$1 = state_110198;
var statearr_110213_110239 = state_110198__$1;
(statearr_110213_110239[(2)] = inst_110194);

(statearr_110213_110239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110199 === (8))){
var inst_110175 = (state_110198[(7)]);
var inst_110185 = cljs.core.next.call(null,inst_110175);
var inst_110175__$1 = inst_110185;
var state_110198__$1 = (function (){var statearr_110214 = state_110198;
(statearr_110214[(7)] = inst_110175__$1);

return statearr_110214;
})();
var statearr_110215_110240 = state_110198__$1;
(statearr_110215_110240[(2)] = null);

(statearr_110215_110240[(1)] = (2));


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
});})(c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto__){
return (function() {
var cljs$core$async$state_machine__10426__auto__ = null;
var cljs$core$async$state_machine__10426__auto____0 = (function (){
var statearr_110219 = [null,null,null,null,null,null,null,null];
(statearr_110219[(0)] = cljs$core$async$state_machine__10426__auto__);

(statearr_110219[(1)] = (1));

return statearr_110219;
});
var cljs$core$async$state_machine__10426__auto____1 = (function (state_110198){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_110198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e110220){if((e110220 instanceof Object)){
var ex__10429__auto__ = e110220;
var statearr_110221_110241 = state_110198;
(statearr_110221_110241[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_110198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e110220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__110242 = state_110198;
state_110198 = G__110242;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
cljs$core$async$state_machine__10426__auto__ = function(state_110198){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10426__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10426__auto____1.call(this,state_110198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10426__auto____0;
cljs$core$async$state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10426__auto____1;
return cljs$core$async$state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_110222 = f__10447__auto__.call(null);
(statearr_110222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_110222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto__))
);

return c__10446__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

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
var x__8753__auto__ = (((_ == null))?null:_);
var m__8754__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8753__auto__)]);
if(!((m__8754__auto__ == null))){
return m__8754__auto__.call(null,_);
} else {
var m__8754__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__8754__auto____$1 == null))){
return m__8754__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
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
var x__8753__auto__ = (((m == null))?null:m);
var m__8754__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8753__auto__)]);
if(!((m__8754__auto__ == null))){
return m__8754__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__8754__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__8754__auto____$1 == null))){
return m__8754__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__8753__auto__ = (((m == null))?null:m);
var m__8754__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8753__auto__)]);
if(!((m__8754__auto__ == null))){
return m__8754__auto__.call(null,m,ch);
} else {
var m__8754__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__8754__auto____$1 == null))){
return m__8754__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__8753__auto__ = (((m == null))?null:m);
var m__8754__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8753__auto__)]);
if(!((m__8754__auto__ == null))){
return m__8754__auto__.call(null,m);
} else {
var m__8754__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__8754__auto____$1 == null))){
return m__8754__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async110464 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async110464 = (function (mult,ch,cs,meta110465){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta110465 = meta110465;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async110464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_110466,meta110465__$1){
var self__ = this;
var _110466__$1 = this;
return (new cljs.core.async.t_cljs$core$async110464(self__.mult,self__.ch,self__.cs,meta110465__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async110464.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_110466){
var self__ = this;
var _110466__$1 = this;
return self__.meta110465;
});})(cs))
;

cljs.core.async.t_cljs$core$async110464.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async110464.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async110464.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async110464.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async110464.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async110464.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async110464.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta110465","meta110465",-2046520106,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async110464.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async110464.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async110464";

cljs.core.async.t_cljs$core$async110464.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8696__auto__,writer__8697__auto__,opt__8698__auto__){
return cljs.core._write.call(null,writer__8697__auto__,"cljs.core.async/t_cljs$core$async110464");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async110464 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async110464(mult__$1,ch__$1,cs__$1,meta110465){
return (new cljs.core.async.t_cljs$core$async110464(mult__$1,ch__$1,cs__$1,meta110465));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async110464(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__10446__auto___110685 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto___110685,cs,m,dchan,dctr,done){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto___110685,cs,m,dchan,dctr,done){
return (function (state_110597){
var state_val_110598 = (state_110597[(1)]);
if((state_val_110598 === (7))){
var inst_110593 = (state_110597[(2)]);
var state_110597__$1 = state_110597;
var statearr_110599_110686 = state_110597__$1;
(statearr_110599_110686[(2)] = inst_110593);

(statearr_110599_110686[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110598 === (20))){
var inst_110498 = (state_110597[(7)]);
var inst_110508 = cljs.core.first.call(null,inst_110498);
var inst_110509 = cljs.core.nth.call(null,inst_110508,(0),null);
var inst_110510 = cljs.core.nth.call(null,inst_110508,(1),null);
var state_110597__$1 = (function (){var statearr_110600 = state_110597;
(statearr_110600[(8)] = inst_110509);

return statearr_110600;
})();
if(cljs.core.truth_(inst_110510)){
var statearr_110601_110687 = state_110597__$1;
(statearr_110601_110687[(1)] = (22));

} else {
var statearr_110602_110688 = state_110597__$1;
(statearr_110602_110688[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110598 === (27))){
var inst_110538 = (state_110597[(9)]);
var inst_110469 = (state_110597[(10)]);
var inst_110545 = (state_110597[(11)]);
var inst_110540 = (state_110597[(12)]);
var inst_110545__$1 = cljs.core._nth.call(null,inst_110538,inst_110540);
var inst_110546 = cljs.core.async.put_BANG_.call(null,inst_110545__$1,inst_110469,done);
var state_110597__$1 = (function (){var statearr_110603 = state_110597;
(statearr_110603[(11)] = inst_110545__$1);

return statearr_110603;
})();
if(cljs.core.truth_(inst_110546)){
var statearr_110604_110689 = state_110597__$1;
(statearr_110604_110689[(1)] = (30));

} else {
var statearr_110605_110690 = state_110597__$1;
(statearr_110605_110690[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110598 === (1))){
var state_110597__$1 = state_110597;
var statearr_110606_110691 = state_110597__$1;
(statearr_110606_110691[(2)] = null);

(statearr_110606_110691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110598 === (24))){
var inst_110498 = (state_110597[(7)]);
var inst_110515 = (state_110597[(2)]);
var inst_110516 = cljs.core.next.call(null,inst_110498);
var inst_110478 = inst_110516;
var inst_110479 = null;
var inst_110480 = (0);
var inst_110481 = (0);
var state_110597__$1 = (function (){var statearr_110607 = state_110597;
(statearr_110607[(13)] = inst_110481);

(statearr_110607[(14)] = inst_110480);

(statearr_110607[(15)] = inst_110478);

(statearr_110607[(16)] = inst_110515);

(statearr_110607[(17)] = inst_110479);

return statearr_110607;
})();
var statearr_110608_110692 = state_110597__$1;
(statearr_110608_110692[(2)] = null);

(statearr_110608_110692[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110598 === (39))){
var state_110597__$1 = state_110597;
var statearr_110612_110693 = state_110597__$1;
(statearr_110612_110693[(2)] = null);

(statearr_110612_110693[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110598 === (4))){
var inst_110469 = (state_110597[(10)]);
var inst_110469__$1 = (state_110597[(2)]);
var inst_110470 = (inst_110469__$1 == null);
var state_110597__$1 = (function (){var statearr_110613 = state_110597;
(statearr_110613[(10)] = inst_110469__$1);

return statearr_110613;
})();
if(cljs.core.truth_(inst_110470)){
var statearr_110614_110694 = state_110597__$1;
(statearr_110614_110694[(1)] = (5));

} else {
var statearr_110615_110695 = state_110597__$1;
(statearr_110615_110695[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110598 === (15))){
var inst_110481 = (state_110597[(13)]);
var inst_110480 = (state_110597[(14)]);
var inst_110478 = (state_110597[(15)]);
var inst_110479 = (state_110597[(17)]);
var inst_110494 = (state_110597[(2)]);
var inst_110495 = (inst_110481 + (1));
var tmp110609 = inst_110480;
var tmp110610 = inst_110478;
var tmp110611 = inst_110479;
var inst_110478__$1 = tmp110610;
var inst_110479__$1 = tmp110611;
var inst_110480__$1 = tmp110609;
var inst_110481__$1 = inst_110495;
var state_110597__$1 = (function (){var statearr_110616 = state_110597;
(statearr_110616[(13)] = inst_110481__$1);

(statearr_110616[(14)] = inst_110480__$1);

(statearr_110616[(15)] = inst_110478__$1);

(statearr_110616[(18)] = inst_110494);

(statearr_110616[(17)] = inst_110479__$1);

return statearr_110616;
})();
var statearr_110617_110696 = state_110597__$1;
(statearr_110617_110696[(2)] = null);

(statearr_110617_110696[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110598 === (21))){
var inst_110519 = (state_110597[(2)]);
var state_110597__$1 = state_110597;
var statearr_110621_110697 = state_110597__$1;
(statearr_110621_110697[(2)] = inst_110519);

(statearr_110621_110697[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110598 === (31))){
var inst_110545 = (state_110597[(11)]);
var inst_110549 = done.call(null,null);
var inst_110550 = cljs.core.async.untap_STAR_.call(null,m,inst_110545);
var state_110597__$1 = (function (){var statearr_110622 = state_110597;
(statearr_110622[(19)] = inst_110549);

return statearr_110622;
})();
var statearr_110623_110698 = state_110597__$1;
(statearr_110623_110698[(2)] = inst_110550);

(statearr_110623_110698[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110598 === (32))){
var inst_110537 = (state_110597[(20)]);
var inst_110539 = (state_110597[(21)]);
var inst_110538 = (state_110597[(9)]);
var inst_110540 = (state_110597[(12)]);
var inst_110552 = (state_110597[(2)]);
var inst_110553 = (inst_110540 + (1));
var tmp110618 = inst_110537;
var tmp110619 = inst_110539;
var tmp110620 = inst_110538;
var inst_110537__$1 = tmp110618;
var inst_110538__$1 = tmp110620;
var inst_110539__$1 = tmp110619;
var inst_110540__$1 = inst_110553;
var state_110597__$1 = (function (){var statearr_110624 = state_110597;
(statearr_110624[(20)] = inst_110537__$1);

(statearr_110624[(21)] = inst_110539__$1);

(statearr_110624[(22)] = inst_110552);

(statearr_110624[(9)] = inst_110538__$1);

(statearr_110624[(12)] = inst_110540__$1);

return statearr_110624;
})();
var statearr_110625_110699 = state_110597__$1;
(statearr_110625_110699[(2)] = null);

(statearr_110625_110699[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110598 === (40))){
var inst_110565 = (state_110597[(23)]);
var inst_110569 = done.call(null,null);
var inst_110570 = cljs.core.async.untap_STAR_.call(null,m,inst_110565);
var state_110597__$1 = (function (){var statearr_110626 = state_110597;
(statearr_110626[(24)] = inst_110569);

return statearr_110626;
})();
var statearr_110627_110700 = state_110597__$1;
(statearr_110627_110700[(2)] = inst_110570);

(statearr_110627_110700[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110598 === (33))){
var inst_110556 = (state_110597[(25)]);
var inst_110558 = cljs.core.chunked_seq_QMARK_.call(null,inst_110556);
var state_110597__$1 = state_110597;
if(inst_110558){
var statearr_110628_110701 = state_110597__$1;
(statearr_110628_110701[(1)] = (36));

} else {
var statearr_110629_110702 = state_110597__$1;
(statearr_110629_110702[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110598 === (13))){
var inst_110488 = (state_110597[(26)]);
var inst_110491 = cljs.core.async.close_BANG_.call(null,inst_110488);
var state_110597__$1 = state_110597;
var statearr_110630_110703 = state_110597__$1;
(statearr_110630_110703[(2)] = inst_110491);

(statearr_110630_110703[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110598 === (22))){
var inst_110509 = (state_110597[(8)]);
var inst_110512 = cljs.core.async.close_BANG_.call(null,inst_110509);
var state_110597__$1 = state_110597;
var statearr_110631_110704 = state_110597__$1;
(statearr_110631_110704[(2)] = inst_110512);

(statearr_110631_110704[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110598 === (36))){
var inst_110556 = (state_110597[(25)]);
var inst_110560 = cljs.core.chunk_first.call(null,inst_110556);
var inst_110561 = cljs.core.chunk_rest.call(null,inst_110556);
var inst_110562 = cljs.core.count.call(null,inst_110560);
var inst_110537 = inst_110561;
var inst_110538 = inst_110560;
var inst_110539 = inst_110562;
var inst_110540 = (0);
var state_110597__$1 = (function (){var statearr_110632 = state_110597;
(statearr_110632[(20)] = inst_110537);

(statearr_110632[(21)] = inst_110539);

(statearr_110632[(9)] = inst_110538);

(statearr_110632[(12)] = inst_110540);

return statearr_110632;
})();
var statearr_110633_110705 = state_110597__$1;
(statearr_110633_110705[(2)] = null);

(statearr_110633_110705[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110598 === (41))){
var inst_110556 = (state_110597[(25)]);
var inst_110572 = (state_110597[(2)]);
var inst_110573 = cljs.core.next.call(null,inst_110556);
var inst_110537 = inst_110573;
var inst_110538 = null;
var inst_110539 = (0);
var inst_110540 = (0);
var state_110597__$1 = (function (){var statearr_110634 = state_110597;
(statearr_110634[(20)] = inst_110537);

(statearr_110634[(21)] = inst_110539);

(statearr_110634[(9)] = inst_110538);

(statearr_110634[(27)] = inst_110572);

(statearr_110634[(12)] = inst_110540);

return statearr_110634;
})();
var statearr_110635_110706 = state_110597__$1;
(statearr_110635_110706[(2)] = null);

(statearr_110635_110706[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110598 === (43))){
var state_110597__$1 = state_110597;
var statearr_110636_110707 = state_110597__$1;
(statearr_110636_110707[(2)] = null);

(statearr_110636_110707[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110598 === (29))){
var inst_110581 = (state_110597[(2)]);
var state_110597__$1 = state_110597;
var statearr_110637_110708 = state_110597__$1;
(statearr_110637_110708[(2)] = inst_110581);

(statearr_110637_110708[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110598 === (44))){
var inst_110590 = (state_110597[(2)]);
var state_110597__$1 = (function (){var statearr_110638 = state_110597;
(statearr_110638[(28)] = inst_110590);

return statearr_110638;
})();
var statearr_110639_110709 = state_110597__$1;
(statearr_110639_110709[(2)] = null);

(statearr_110639_110709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110598 === (6))){
var inst_110529 = (state_110597[(29)]);
var inst_110528 = cljs.core.deref.call(null,cs);
var inst_110529__$1 = cljs.core.keys.call(null,inst_110528);
var inst_110530 = cljs.core.count.call(null,inst_110529__$1);
var inst_110531 = cljs.core.reset_BANG_.call(null,dctr,inst_110530);
var inst_110536 = cljs.core.seq.call(null,inst_110529__$1);
var inst_110537 = inst_110536;
var inst_110538 = null;
var inst_110539 = (0);
var inst_110540 = (0);
var state_110597__$1 = (function (){var statearr_110640 = state_110597;
(statearr_110640[(29)] = inst_110529__$1);

(statearr_110640[(20)] = inst_110537);

(statearr_110640[(30)] = inst_110531);

(statearr_110640[(21)] = inst_110539);

(statearr_110640[(9)] = inst_110538);

(statearr_110640[(12)] = inst_110540);

return statearr_110640;
})();
var statearr_110641_110710 = state_110597__$1;
(statearr_110641_110710[(2)] = null);

(statearr_110641_110710[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110598 === (28))){
var inst_110537 = (state_110597[(20)]);
var inst_110556 = (state_110597[(25)]);
var inst_110556__$1 = cljs.core.seq.call(null,inst_110537);
var state_110597__$1 = (function (){var statearr_110642 = state_110597;
(statearr_110642[(25)] = inst_110556__$1);

return statearr_110642;
})();
if(inst_110556__$1){
var statearr_110643_110711 = state_110597__$1;
(statearr_110643_110711[(1)] = (33));

} else {
var statearr_110644_110712 = state_110597__$1;
(statearr_110644_110712[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110598 === (25))){
var inst_110539 = (state_110597[(21)]);
var inst_110540 = (state_110597[(12)]);
var inst_110542 = (inst_110540 < inst_110539);
var inst_110543 = inst_110542;
var state_110597__$1 = state_110597;
if(cljs.core.truth_(inst_110543)){
var statearr_110645_110713 = state_110597__$1;
(statearr_110645_110713[(1)] = (27));

} else {
var statearr_110646_110714 = state_110597__$1;
(statearr_110646_110714[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110598 === (34))){
var state_110597__$1 = state_110597;
var statearr_110647_110715 = state_110597__$1;
(statearr_110647_110715[(2)] = null);

(statearr_110647_110715[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110598 === (17))){
var state_110597__$1 = state_110597;
var statearr_110648_110716 = state_110597__$1;
(statearr_110648_110716[(2)] = null);

(statearr_110648_110716[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110598 === (3))){
var inst_110595 = (state_110597[(2)]);
var state_110597__$1 = state_110597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_110597__$1,inst_110595);
} else {
if((state_val_110598 === (12))){
var inst_110524 = (state_110597[(2)]);
var state_110597__$1 = state_110597;
var statearr_110649_110717 = state_110597__$1;
(statearr_110649_110717[(2)] = inst_110524);

(statearr_110649_110717[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110598 === (2))){
var state_110597__$1 = state_110597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_110597__$1,(4),ch);
} else {
if((state_val_110598 === (23))){
var state_110597__$1 = state_110597;
var statearr_110650_110718 = state_110597__$1;
(statearr_110650_110718[(2)] = null);

(statearr_110650_110718[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110598 === (35))){
var inst_110579 = (state_110597[(2)]);
var state_110597__$1 = state_110597;
var statearr_110651_110719 = state_110597__$1;
(statearr_110651_110719[(2)] = inst_110579);

(statearr_110651_110719[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110598 === (19))){
var inst_110498 = (state_110597[(7)]);
var inst_110502 = cljs.core.chunk_first.call(null,inst_110498);
var inst_110503 = cljs.core.chunk_rest.call(null,inst_110498);
var inst_110504 = cljs.core.count.call(null,inst_110502);
var inst_110478 = inst_110503;
var inst_110479 = inst_110502;
var inst_110480 = inst_110504;
var inst_110481 = (0);
var state_110597__$1 = (function (){var statearr_110652 = state_110597;
(statearr_110652[(13)] = inst_110481);

(statearr_110652[(14)] = inst_110480);

(statearr_110652[(15)] = inst_110478);

(statearr_110652[(17)] = inst_110479);

return statearr_110652;
})();
var statearr_110653_110720 = state_110597__$1;
(statearr_110653_110720[(2)] = null);

(statearr_110653_110720[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110598 === (11))){
var inst_110478 = (state_110597[(15)]);
var inst_110498 = (state_110597[(7)]);
var inst_110498__$1 = cljs.core.seq.call(null,inst_110478);
var state_110597__$1 = (function (){var statearr_110654 = state_110597;
(statearr_110654[(7)] = inst_110498__$1);

return statearr_110654;
})();
if(inst_110498__$1){
var statearr_110655_110721 = state_110597__$1;
(statearr_110655_110721[(1)] = (16));

} else {
var statearr_110656_110722 = state_110597__$1;
(statearr_110656_110722[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110598 === (9))){
var inst_110526 = (state_110597[(2)]);
var state_110597__$1 = state_110597;
var statearr_110657_110723 = state_110597__$1;
(statearr_110657_110723[(2)] = inst_110526);

(statearr_110657_110723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110598 === (5))){
var inst_110476 = cljs.core.deref.call(null,cs);
var inst_110477 = cljs.core.seq.call(null,inst_110476);
var inst_110478 = inst_110477;
var inst_110479 = null;
var inst_110480 = (0);
var inst_110481 = (0);
var state_110597__$1 = (function (){var statearr_110658 = state_110597;
(statearr_110658[(13)] = inst_110481);

(statearr_110658[(14)] = inst_110480);

(statearr_110658[(15)] = inst_110478);

(statearr_110658[(17)] = inst_110479);

return statearr_110658;
})();
var statearr_110659_110724 = state_110597__$1;
(statearr_110659_110724[(2)] = null);

(statearr_110659_110724[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110598 === (14))){
var state_110597__$1 = state_110597;
var statearr_110660_110725 = state_110597__$1;
(statearr_110660_110725[(2)] = null);

(statearr_110660_110725[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110598 === (45))){
var inst_110587 = (state_110597[(2)]);
var state_110597__$1 = state_110597;
var statearr_110661_110726 = state_110597__$1;
(statearr_110661_110726[(2)] = inst_110587);

(statearr_110661_110726[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110598 === (26))){
var inst_110529 = (state_110597[(29)]);
var inst_110583 = (state_110597[(2)]);
var inst_110584 = cljs.core.seq.call(null,inst_110529);
var state_110597__$1 = (function (){var statearr_110662 = state_110597;
(statearr_110662[(31)] = inst_110583);

return statearr_110662;
})();
if(inst_110584){
var statearr_110663_110727 = state_110597__$1;
(statearr_110663_110727[(1)] = (42));

} else {
var statearr_110664_110728 = state_110597__$1;
(statearr_110664_110728[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110598 === (16))){
var inst_110498 = (state_110597[(7)]);
var inst_110500 = cljs.core.chunked_seq_QMARK_.call(null,inst_110498);
var state_110597__$1 = state_110597;
if(inst_110500){
var statearr_110665_110729 = state_110597__$1;
(statearr_110665_110729[(1)] = (19));

} else {
var statearr_110666_110730 = state_110597__$1;
(statearr_110666_110730[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110598 === (38))){
var inst_110576 = (state_110597[(2)]);
var state_110597__$1 = state_110597;
var statearr_110667_110731 = state_110597__$1;
(statearr_110667_110731[(2)] = inst_110576);

(statearr_110667_110731[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110598 === (30))){
var state_110597__$1 = state_110597;
var statearr_110668_110732 = state_110597__$1;
(statearr_110668_110732[(2)] = null);

(statearr_110668_110732[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110598 === (10))){
var inst_110481 = (state_110597[(13)]);
var inst_110479 = (state_110597[(17)]);
var inst_110487 = cljs.core._nth.call(null,inst_110479,inst_110481);
var inst_110488 = cljs.core.nth.call(null,inst_110487,(0),null);
var inst_110489 = cljs.core.nth.call(null,inst_110487,(1),null);
var state_110597__$1 = (function (){var statearr_110669 = state_110597;
(statearr_110669[(26)] = inst_110488);

return statearr_110669;
})();
if(cljs.core.truth_(inst_110489)){
var statearr_110670_110733 = state_110597__$1;
(statearr_110670_110733[(1)] = (13));

} else {
var statearr_110671_110734 = state_110597__$1;
(statearr_110671_110734[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110598 === (18))){
var inst_110522 = (state_110597[(2)]);
var state_110597__$1 = state_110597;
var statearr_110672_110735 = state_110597__$1;
(statearr_110672_110735[(2)] = inst_110522);

(statearr_110672_110735[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110598 === (42))){
var state_110597__$1 = state_110597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_110597__$1,(45),dchan);
} else {
if((state_val_110598 === (37))){
var inst_110565 = (state_110597[(23)]);
var inst_110469 = (state_110597[(10)]);
var inst_110556 = (state_110597[(25)]);
var inst_110565__$1 = cljs.core.first.call(null,inst_110556);
var inst_110566 = cljs.core.async.put_BANG_.call(null,inst_110565__$1,inst_110469,done);
var state_110597__$1 = (function (){var statearr_110673 = state_110597;
(statearr_110673[(23)] = inst_110565__$1);

return statearr_110673;
})();
if(cljs.core.truth_(inst_110566)){
var statearr_110674_110736 = state_110597__$1;
(statearr_110674_110736[(1)] = (39));

} else {
var statearr_110675_110737 = state_110597__$1;
(statearr_110675_110737[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110598 === (8))){
var inst_110481 = (state_110597[(13)]);
var inst_110480 = (state_110597[(14)]);
var inst_110483 = (inst_110481 < inst_110480);
var inst_110484 = inst_110483;
var state_110597__$1 = state_110597;
if(cljs.core.truth_(inst_110484)){
var statearr_110676_110738 = state_110597__$1;
(statearr_110676_110738[(1)] = (10));

} else {
var statearr_110677_110739 = state_110597__$1;
(statearr_110677_110739[(1)] = (11));

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
});})(c__10446__auto___110685,cs,m,dchan,dctr,done))
;
return ((function (switch__10425__auto__,c__10446__auto___110685,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10426__auto__ = null;
var cljs$core$async$mult_$_state_machine__10426__auto____0 = (function (){
var statearr_110681 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_110681[(0)] = cljs$core$async$mult_$_state_machine__10426__auto__);

(statearr_110681[(1)] = (1));

return statearr_110681;
});
var cljs$core$async$mult_$_state_machine__10426__auto____1 = (function (state_110597){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_110597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e110682){if((e110682 instanceof Object)){
var ex__10429__auto__ = e110682;
var statearr_110683_110740 = state_110597;
(statearr_110683_110740[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_110597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e110682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__110741 = state_110597;
state_110597 = G__110741;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10426__auto__ = function(state_110597){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10426__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10426__auto____1.call(this,state_110597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10426__auto____0;
cljs$core$async$mult_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10426__auto____1;
return cljs$core$async$mult_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto___110685,cs,m,dchan,dctr,done))
})();
var state__10448__auto__ = (function (){var statearr_110684 = f__10447__auto__.call(null);
(statearr_110684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto___110685);

return statearr_110684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto___110685,cs,m,dchan,dctr,done))
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
var args110742 = [];
var len__9156__auto___110745 = arguments.length;
var i__9157__auto___110746 = (0);
while(true){
if((i__9157__auto___110746 < len__9156__auto___110745)){
args110742.push((arguments[i__9157__auto___110746]));

var G__110747 = (i__9157__auto___110746 + (1));
i__9157__auto___110746 = G__110747;
continue;
} else {
}
break;
}

var G__110744 = args110742.length;
switch (G__110744) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args110742.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__8753__auto__ = (((m == null))?null:m);
var m__8754__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8753__auto__)]);
if(!((m__8754__auto__ == null))){
return m__8754__auto__.call(null,m,ch);
} else {
var m__8754__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__8754__auto____$1 == null))){
return m__8754__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__8753__auto__ = (((m == null))?null:m);
var m__8754__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8753__auto__)]);
if(!((m__8754__auto__ == null))){
return m__8754__auto__.call(null,m,ch);
} else {
var m__8754__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__8754__auto____$1 == null))){
return m__8754__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__8753__auto__ = (((m == null))?null:m);
var m__8754__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8753__auto__)]);
if(!((m__8754__auto__ == null))){
return m__8754__auto__.call(null,m);
} else {
var m__8754__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__8754__auto____$1 == null))){
return m__8754__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__8753__auto__ = (((m == null))?null:m);
var m__8754__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8753__auto__)]);
if(!((m__8754__auto__ == null))){
return m__8754__auto__.call(null,m,state_map);
} else {
var m__8754__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__8754__auto____$1 == null))){
return m__8754__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__8753__auto__ = (((m == null))?null:m);
var m__8754__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8753__auto__)]);
if(!((m__8754__auto__ == null))){
return m__8754__auto__.call(null,m,mode);
} else {
var m__8754__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__8754__auto____$1 == null))){
return m__8754__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__9163__auto__ = [];
var len__9156__auto___110759 = arguments.length;
var i__9157__auto___110760 = (0);
while(true){
if((i__9157__auto___110760 < len__9156__auto___110759)){
args__9163__auto__.push((arguments[i__9157__auto___110760]));

var G__110761 = (i__9157__auto___110760 + (1));
i__9157__auto___110760 = G__110761;
continue;
} else {
}
break;
}

var argseq__9164__auto__ = ((((3) < args__9163__auto__.length))?(new cljs.core.IndexedSeq(args__9163__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9164__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__110753){
var map__110754 = p__110753;
var map__110754__$1 = ((((!((map__110754 == null)))?((((map__110754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__110754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__110754):map__110754);
var opts = map__110754__$1;
var statearr_110756_110762 = state;
(statearr_110756_110762[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__110754,map__110754__$1,opts){
return (function (val){
var statearr_110757_110763 = state;
(statearr_110757_110763[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__110754,map__110754__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_110758_110764 = state;
(statearr_110758_110764[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq110749){
var G__110750 = cljs.core.first.call(null,seq110749);
var seq110749__$1 = cljs.core.next.call(null,seq110749);
var G__110751 = cljs.core.first.call(null,seq110749__$1);
var seq110749__$2 = cljs.core.next.call(null,seq110749__$1);
var G__110752 = cljs.core.first.call(null,seq110749__$2);
var seq110749__$3 = cljs.core.next.call(null,seq110749__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__110750,G__110751,G__110752,seq110749__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async110928 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async110928 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta110929){
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
this.meta110929 = meta110929;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async110928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_110930,meta110929__$1){
var self__ = this;
var _110930__$1 = this;
return (new cljs.core.async.t_cljs$core$async110928(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta110929__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async110928.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_110930){
var self__ = this;
var _110930__$1 = this;
return self__.meta110929;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async110928.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async110928.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async110928.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async110928.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async110928.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async110928.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async110928.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async110928.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async110928.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta110929","meta110929",-1125830977,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async110928.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async110928.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async110928";

cljs.core.async.t_cljs$core$async110928.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8696__auto__,writer__8697__auto__,opt__8698__auto__){
return cljs.core._write.call(null,writer__8697__auto__,"cljs.core.async/t_cljs$core$async110928");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async110928 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async110928(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta110929){
return (new cljs.core.async.t_cljs$core$async110928(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta110929));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async110928(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10446__auto___111091 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto___111091,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto___111091,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_111028){
var state_val_111029 = (state_111028[(1)]);
if((state_val_111029 === (7))){
var inst_110946 = (state_111028[(2)]);
var state_111028__$1 = state_111028;
var statearr_111030_111092 = state_111028__$1;
(statearr_111030_111092[(2)] = inst_110946);

(statearr_111030_111092[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111029 === (20))){
var inst_110958 = (state_111028[(7)]);
var state_111028__$1 = state_111028;
var statearr_111031_111093 = state_111028__$1;
(statearr_111031_111093[(2)] = inst_110958);

(statearr_111031_111093[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111029 === (27))){
var state_111028__$1 = state_111028;
var statearr_111032_111094 = state_111028__$1;
(statearr_111032_111094[(2)] = null);

(statearr_111032_111094[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111029 === (1))){
var inst_110934 = (state_111028[(8)]);
var inst_110934__$1 = calc_state.call(null);
var inst_110936 = (inst_110934__$1 == null);
var inst_110937 = cljs.core.not.call(null,inst_110936);
var state_111028__$1 = (function (){var statearr_111033 = state_111028;
(statearr_111033[(8)] = inst_110934__$1);

return statearr_111033;
})();
if(inst_110937){
var statearr_111034_111095 = state_111028__$1;
(statearr_111034_111095[(1)] = (2));

} else {
var statearr_111035_111096 = state_111028__$1;
(statearr_111035_111096[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111029 === (24))){
var inst_111002 = (state_111028[(9)]);
var inst_110988 = (state_111028[(10)]);
var inst_110981 = (state_111028[(11)]);
var inst_111002__$1 = inst_110981.call(null,inst_110988);
var state_111028__$1 = (function (){var statearr_111036 = state_111028;
(statearr_111036[(9)] = inst_111002__$1);

return statearr_111036;
})();
if(cljs.core.truth_(inst_111002__$1)){
var statearr_111037_111097 = state_111028__$1;
(statearr_111037_111097[(1)] = (29));

} else {
var statearr_111038_111098 = state_111028__$1;
(statearr_111038_111098[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111029 === (4))){
var inst_110949 = (state_111028[(2)]);
var state_111028__$1 = state_111028;
if(cljs.core.truth_(inst_110949)){
var statearr_111039_111099 = state_111028__$1;
(statearr_111039_111099[(1)] = (8));

} else {
var statearr_111040_111100 = state_111028__$1;
(statearr_111040_111100[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111029 === (15))){
var inst_110975 = (state_111028[(2)]);
var state_111028__$1 = state_111028;
if(cljs.core.truth_(inst_110975)){
var statearr_111041_111101 = state_111028__$1;
(statearr_111041_111101[(1)] = (19));

} else {
var statearr_111042_111102 = state_111028__$1;
(statearr_111042_111102[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111029 === (21))){
var inst_110980 = (state_111028[(12)]);
var inst_110980__$1 = (state_111028[(2)]);
var inst_110981 = cljs.core.get.call(null,inst_110980__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_110982 = cljs.core.get.call(null,inst_110980__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_110983 = cljs.core.get.call(null,inst_110980__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_111028__$1 = (function (){var statearr_111043 = state_111028;
(statearr_111043[(13)] = inst_110982);

(statearr_111043[(12)] = inst_110980__$1);

(statearr_111043[(11)] = inst_110981);

return statearr_111043;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_111028__$1,(22),inst_110983);
} else {
if((state_val_111029 === (31))){
var inst_111010 = (state_111028[(2)]);
var state_111028__$1 = state_111028;
if(cljs.core.truth_(inst_111010)){
var statearr_111044_111103 = state_111028__$1;
(statearr_111044_111103[(1)] = (32));

} else {
var statearr_111045_111104 = state_111028__$1;
(statearr_111045_111104[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111029 === (32))){
var inst_110987 = (state_111028[(14)]);
var state_111028__$1 = state_111028;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_111028__$1,(35),out,inst_110987);
} else {
if((state_val_111029 === (33))){
var inst_110980 = (state_111028[(12)]);
var inst_110958 = inst_110980;
var state_111028__$1 = (function (){var statearr_111046 = state_111028;
(statearr_111046[(7)] = inst_110958);

return statearr_111046;
})();
var statearr_111047_111105 = state_111028__$1;
(statearr_111047_111105[(2)] = null);

(statearr_111047_111105[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111029 === (13))){
var inst_110958 = (state_111028[(7)]);
var inst_110965 = inst_110958.cljs$lang$protocol_mask$partition0$;
var inst_110966 = (inst_110965 & (64));
var inst_110967 = inst_110958.cljs$core$ISeq$;
var inst_110968 = (inst_110966) || (inst_110967);
var state_111028__$1 = state_111028;
if(cljs.core.truth_(inst_110968)){
var statearr_111048_111106 = state_111028__$1;
(statearr_111048_111106[(1)] = (16));

} else {
var statearr_111049_111107 = state_111028__$1;
(statearr_111049_111107[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111029 === (22))){
var inst_110988 = (state_111028[(10)]);
var inst_110987 = (state_111028[(14)]);
var inst_110986 = (state_111028[(2)]);
var inst_110987__$1 = cljs.core.nth.call(null,inst_110986,(0),null);
var inst_110988__$1 = cljs.core.nth.call(null,inst_110986,(1),null);
var inst_110989 = (inst_110987__$1 == null);
var inst_110990 = cljs.core._EQ_.call(null,inst_110988__$1,change);
var inst_110991 = (inst_110989) || (inst_110990);
var state_111028__$1 = (function (){var statearr_111050 = state_111028;
(statearr_111050[(10)] = inst_110988__$1);

(statearr_111050[(14)] = inst_110987__$1);

return statearr_111050;
})();
if(cljs.core.truth_(inst_110991)){
var statearr_111051_111108 = state_111028__$1;
(statearr_111051_111108[(1)] = (23));

} else {
var statearr_111052_111109 = state_111028__$1;
(statearr_111052_111109[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111029 === (36))){
var inst_110980 = (state_111028[(12)]);
var inst_110958 = inst_110980;
var state_111028__$1 = (function (){var statearr_111053 = state_111028;
(statearr_111053[(7)] = inst_110958);

return statearr_111053;
})();
var statearr_111054_111110 = state_111028__$1;
(statearr_111054_111110[(2)] = null);

(statearr_111054_111110[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111029 === (29))){
var inst_111002 = (state_111028[(9)]);
var state_111028__$1 = state_111028;
var statearr_111055_111111 = state_111028__$1;
(statearr_111055_111111[(2)] = inst_111002);

(statearr_111055_111111[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111029 === (6))){
var state_111028__$1 = state_111028;
var statearr_111056_111112 = state_111028__$1;
(statearr_111056_111112[(2)] = false);

(statearr_111056_111112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111029 === (28))){
var inst_110998 = (state_111028[(2)]);
var inst_110999 = calc_state.call(null);
var inst_110958 = inst_110999;
var state_111028__$1 = (function (){var statearr_111057 = state_111028;
(statearr_111057[(7)] = inst_110958);

(statearr_111057[(15)] = inst_110998);

return statearr_111057;
})();
var statearr_111058_111113 = state_111028__$1;
(statearr_111058_111113[(2)] = null);

(statearr_111058_111113[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111029 === (25))){
var inst_111024 = (state_111028[(2)]);
var state_111028__$1 = state_111028;
var statearr_111059_111114 = state_111028__$1;
(statearr_111059_111114[(2)] = inst_111024);

(statearr_111059_111114[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111029 === (34))){
var inst_111022 = (state_111028[(2)]);
var state_111028__$1 = state_111028;
var statearr_111060_111115 = state_111028__$1;
(statearr_111060_111115[(2)] = inst_111022);

(statearr_111060_111115[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111029 === (17))){
var state_111028__$1 = state_111028;
var statearr_111061_111116 = state_111028__$1;
(statearr_111061_111116[(2)] = false);

(statearr_111061_111116[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111029 === (3))){
var state_111028__$1 = state_111028;
var statearr_111062_111117 = state_111028__$1;
(statearr_111062_111117[(2)] = false);

(statearr_111062_111117[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111029 === (12))){
var inst_111026 = (state_111028[(2)]);
var state_111028__$1 = state_111028;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_111028__$1,inst_111026);
} else {
if((state_val_111029 === (2))){
var inst_110934 = (state_111028[(8)]);
var inst_110939 = inst_110934.cljs$lang$protocol_mask$partition0$;
var inst_110940 = (inst_110939 & (64));
var inst_110941 = inst_110934.cljs$core$ISeq$;
var inst_110942 = (inst_110940) || (inst_110941);
var state_111028__$1 = state_111028;
if(cljs.core.truth_(inst_110942)){
var statearr_111063_111118 = state_111028__$1;
(statearr_111063_111118[(1)] = (5));

} else {
var statearr_111064_111119 = state_111028__$1;
(statearr_111064_111119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111029 === (23))){
var inst_110987 = (state_111028[(14)]);
var inst_110993 = (inst_110987 == null);
var state_111028__$1 = state_111028;
if(cljs.core.truth_(inst_110993)){
var statearr_111065_111120 = state_111028__$1;
(statearr_111065_111120[(1)] = (26));

} else {
var statearr_111066_111121 = state_111028__$1;
(statearr_111066_111121[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111029 === (35))){
var inst_111013 = (state_111028[(2)]);
var state_111028__$1 = state_111028;
if(cljs.core.truth_(inst_111013)){
var statearr_111067_111122 = state_111028__$1;
(statearr_111067_111122[(1)] = (36));

} else {
var statearr_111068_111123 = state_111028__$1;
(statearr_111068_111123[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111029 === (19))){
var inst_110958 = (state_111028[(7)]);
var inst_110977 = cljs.core.apply.call(null,cljs.core.hash_map,inst_110958);
var state_111028__$1 = state_111028;
var statearr_111069_111124 = state_111028__$1;
(statearr_111069_111124[(2)] = inst_110977);

(statearr_111069_111124[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111029 === (11))){
var inst_110958 = (state_111028[(7)]);
var inst_110962 = (inst_110958 == null);
var inst_110963 = cljs.core.not.call(null,inst_110962);
var state_111028__$1 = state_111028;
if(inst_110963){
var statearr_111070_111125 = state_111028__$1;
(statearr_111070_111125[(1)] = (13));

} else {
var statearr_111071_111126 = state_111028__$1;
(statearr_111071_111126[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111029 === (9))){
var inst_110934 = (state_111028[(8)]);
var state_111028__$1 = state_111028;
var statearr_111072_111127 = state_111028__$1;
(statearr_111072_111127[(2)] = inst_110934);

(statearr_111072_111127[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111029 === (5))){
var state_111028__$1 = state_111028;
var statearr_111073_111128 = state_111028__$1;
(statearr_111073_111128[(2)] = true);

(statearr_111073_111128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111029 === (14))){
var state_111028__$1 = state_111028;
var statearr_111074_111129 = state_111028__$1;
(statearr_111074_111129[(2)] = false);

(statearr_111074_111129[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111029 === (26))){
var inst_110988 = (state_111028[(10)]);
var inst_110995 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_110988);
var state_111028__$1 = state_111028;
var statearr_111075_111130 = state_111028__$1;
(statearr_111075_111130[(2)] = inst_110995);

(statearr_111075_111130[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111029 === (16))){
var state_111028__$1 = state_111028;
var statearr_111076_111131 = state_111028__$1;
(statearr_111076_111131[(2)] = true);

(statearr_111076_111131[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111029 === (38))){
var inst_111018 = (state_111028[(2)]);
var state_111028__$1 = state_111028;
var statearr_111077_111132 = state_111028__$1;
(statearr_111077_111132[(2)] = inst_111018);

(statearr_111077_111132[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111029 === (30))){
var inst_110982 = (state_111028[(13)]);
var inst_110988 = (state_111028[(10)]);
var inst_110981 = (state_111028[(11)]);
var inst_111005 = cljs.core.empty_QMARK_.call(null,inst_110981);
var inst_111006 = inst_110982.call(null,inst_110988);
var inst_111007 = cljs.core.not.call(null,inst_111006);
var inst_111008 = (inst_111005) && (inst_111007);
var state_111028__$1 = state_111028;
var statearr_111078_111133 = state_111028__$1;
(statearr_111078_111133[(2)] = inst_111008);

(statearr_111078_111133[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111029 === (10))){
var inst_110934 = (state_111028[(8)]);
var inst_110954 = (state_111028[(2)]);
var inst_110955 = cljs.core.get.call(null,inst_110954,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_110956 = cljs.core.get.call(null,inst_110954,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_110957 = cljs.core.get.call(null,inst_110954,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_110958 = inst_110934;
var state_111028__$1 = (function (){var statearr_111079 = state_111028;
(statearr_111079[(16)] = inst_110956);

(statearr_111079[(17)] = inst_110955);

(statearr_111079[(7)] = inst_110958);

(statearr_111079[(18)] = inst_110957);

return statearr_111079;
})();
var statearr_111080_111134 = state_111028__$1;
(statearr_111080_111134[(2)] = null);

(statearr_111080_111134[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111029 === (18))){
var inst_110972 = (state_111028[(2)]);
var state_111028__$1 = state_111028;
var statearr_111081_111135 = state_111028__$1;
(statearr_111081_111135[(2)] = inst_110972);

(statearr_111081_111135[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111029 === (37))){
var state_111028__$1 = state_111028;
var statearr_111082_111136 = state_111028__$1;
(statearr_111082_111136[(2)] = null);

(statearr_111082_111136[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111029 === (8))){
var inst_110934 = (state_111028[(8)]);
var inst_110951 = cljs.core.apply.call(null,cljs.core.hash_map,inst_110934);
var state_111028__$1 = state_111028;
var statearr_111083_111137 = state_111028__$1;
(statearr_111083_111137[(2)] = inst_110951);

(statearr_111083_111137[(1)] = (10));


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
});})(c__10446__auto___111091,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10425__auto__,c__10446__auto___111091,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10426__auto__ = null;
var cljs$core$async$mix_$_state_machine__10426__auto____0 = (function (){
var statearr_111087 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_111087[(0)] = cljs$core$async$mix_$_state_machine__10426__auto__);

(statearr_111087[(1)] = (1));

return statearr_111087;
});
var cljs$core$async$mix_$_state_machine__10426__auto____1 = (function (state_111028){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_111028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e111088){if((e111088 instanceof Object)){
var ex__10429__auto__ = e111088;
var statearr_111089_111138 = state_111028;
(statearr_111089_111138[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_111028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e111088;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__111139 = state_111028;
state_111028 = G__111139;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10426__auto__ = function(state_111028){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10426__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10426__auto____1.call(this,state_111028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10426__auto____0;
cljs$core$async$mix_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10426__auto____1;
return cljs$core$async$mix_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto___111091,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10448__auto__ = (function (){var statearr_111090 = f__10447__auto__.call(null);
(statearr_111090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto___111091);

return statearr_111090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto___111091,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__8753__auto__ = (((p == null))?null:p);
var m__8754__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8753__auto__)]);
if(!((m__8754__auto__ == null))){
return m__8754__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__8754__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__8754__auto____$1 == null))){
return m__8754__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__8753__auto__ = (((p == null))?null:p);
var m__8754__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8753__auto__)]);
if(!((m__8754__auto__ == null))){
return m__8754__auto__.call(null,p,v,ch);
} else {
var m__8754__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__8754__auto____$1 == null))){
return m__8754__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args111140 = [];
var len__9156__auto___111143 = arguments.length;
var i__9157__auto___111144 = (0);
while(true){
if((i__9157__auto___111144 < len__9156__auto___111143)){
args111140.push((arguments[i__9157__auto___111144]));

var G__111145 = (i__9157__auto___111144 + (1));
i__9157__auto___111144 = G__111145;
continue;
} else {
}
break;
}

var G__111142 = args111140.length;
switch (G__111142) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args111140.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__8753__auto__ = (((p == null))?null:p);
var m__8754__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8753__auto__)]);
if(!((m__8754__auto__ == null))){
return m__8754__auto__.call(null,p);
} else {
var m__8754__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8754__auto____$1 == null))){
return m__8754__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__8753__auto__ = (((p == null))?null:p);
var m__8754__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8753__auto__)]);
if(!((m__8754__auto__ == null))){
return m__8754__auto__.call(null,p,v);
} else {
var m__8754__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8754__auto____$1 == null))){
return m__8754__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var args111148 = [];
var len__9156__auto___111273 = arguments.length;
var i__9157__auto___111274 = (0);
while(true){
if((i__9157__auto___111274 < len__9156__auto___111273)){
args111148.push((arguments[i__9157__auto___111274]));

var G__111275 = (i__9157__auto___111274 + (1));
i__9157__auto___111274 = G__111275;
continue;
} else {
}
break;
}

var G__111150 = args111148.length;
switch (G__111150) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args111148.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__8098__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__8098__auto__)){
return or__8098__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__8098__auto__,mults){
return (function (p1__111147_SHARP_){
if(cljs.core.truth_(p1__111147_SHARP_.call(null,topic))){
return p1__111147_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__111147_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__8098__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async111151 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async111151 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta111152){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta111152 = meta111152;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async111151.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_111153,meta111152__$1){
var self__ = this;
var _111153__$1 = this;
return (new cljs.core.async.t_cljs$core$async111151(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta111152__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async111151.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_111153){
var self__ = this;
var _111153__$1 = this;
return self__.meta111152;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async111151.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async111151.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async111151.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async111151.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async111151.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async111151.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async111151.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async111151.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta111152","meta111152",-229719836,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async111151.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async111151.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async111151";

cljs.core.async.t_cljs$core$async111151.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8696__auto__,writer__8697__auto__,opt__8698__auto__){
return cljs.core._write.call(null,writer__8697__auto__,"cljs.core.async/t_cljs$core$async111151");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async111151 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async111151(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta111152){
return (new cljs.core.async.t_cljs$core$async111151(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta111152));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async111151(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10446__auto___111277 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto___111277,mults,ensure_mult,p){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto___111277,mults,ensure_mult,p){
return (function (state_111225){
var state_val_111226 = (state_111225[(1)]);
if((state_val_111226 === (7))){
var inst_111221 = (state_111225[(2)]);
var state_111225__$1 = state_111225;
var statearr_111227_111278 = state_111225__$1;
(statearr_111227_111278[(2)] = inst_111221);

(statearr_111227_111278[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111226 === (20))){
var state_111225__$1 = state_111225;
var statearr_111228_111279 = state_111225__$1;
(statearr_111228_111279[(2)] = null);

(statearr_111228_111279[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111226 === (1))){
var state_111225__$1 = state_111225;
var statearr_111229_111280 = state_111225__$1;
(statearr_111229_111280[(2)] = null);

(statearr_111229_111280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111226 === (24))){
var inst_111204 = (state_111225[(7)]);
var inst_111213 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_111204);
var state_111225__$1 = state_111225;
var statearr_111230_111281 = state_111225__$1;
(statearr_111230_111281[(2)] = inst_111213);

(statearr_111230_111281[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111226 === (4))){
var inst_111156 = (state_111225[(8)]);
var inst_111156__$1 = (state_111225[(2)]);
var inst_111157 = (inst_111156__$1 == null);
var state_111225__$1 = (function (){var statearr_111231 = state_111225;
(statearr_111231[(8)] = inst_111156__$1);

return statearr_111231;
})();
if(cljs.core.truth_(inst_111157)){
var statearr_111232_111282 = state_111225__$1;
(statearr_111232_111282[(1)] = (5));

} else {
var statearr_111233_111283 = state_111225__$1;
(statearr_111233_111283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111226 === (15))){
var inst_111198 = (state_111225[(2)]);
var state_111225__$1 = state_111225;
var statearr_111234_111284 = state_111225__$1;
(statearr_111234_111284[(2)] = inst_111198);

(statearr_111234_111284[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111226 === (21))){
var inst_111218 = (state_111225[(2)]);
var state_111225__$1 = (function (){var statearr_111235 = state_111225;
(statearr_111235[(9)] = inst_111218);

return statearr_111235;
})();
var statearr_111236_111285 = state_111225__$1;
(statearr_111236_111285[(2)] = null);

(statearr_111236_111285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111226 === (13))){
var inst_111180 = (state_111225[(10)]);
var inst_111182 = cljs.core.chunked_seq_QMARK_.call(null,inst_111180);
var state_111225__$1 = state_111225;
if(inst_111182){
var statearr_111237_111286 = state_111225__$1;
(statearr_111237_111286[(1)] = (16));

} else {
var statearr_111238_111287 = state_111225__$1;
(statearr_111238_111287[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111226 === (22))){
var inst_111210 = (state_111225[(2)]);
var state_111225__$1 = state_111225;
if(cljs.core.truth_(inst_111210)){
var statearr_111239_111288 = state_111225__$1;
(statearr_111239_111288[(1)] = (23));

} else {
var statearr_111240_111289 = state_111225__$1;
(statearr_111240_111289[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111226 === (6))){
var inst_111206 = (state_111225[(11)]);
var inst_111204 = (state_111225[(7)]);
var inst_111156 = (state_111225[(8)]);
var inst_111204__$1 = topic_fn.call(null,inst_111156);
var inst_111205 = cljs.core.deref.call(null,mults);
var inst_111206__$1 = cljs.core.get.call(null,inst_111205,inst_111204__$1);
var state_111225__$1 = (function (){var statearr_111241 = state_111225;
(statearr_111241[(11)] = inst_111206__$1);

(statearr_111241[(7)] = inst_111204__$1);

return statearr_111241;
})();
if(cljs.core.truth_(inst_111206__$1)){
var statearr_111242_111290 = state_111225__$1;
(statearr_111242_111290[(1)] = (19));

} else {
var statearr_111243_111291 = state_111225__$1;
(statearr_111243_111291[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111226 === (25))){
var inst_111215 = (state_111225[(2)]);
var state_111225__$1 = state_111225;
var statearr_111244_111292 = state_111225__$1;
(statearr_111244_111292[(2)] = inst_111215);

(statearr_111244_111292[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111226 === (17))){
var inst_111180 = (state_111225[(10)]);
var inst_111189 = cljs.core.first.call(null,inst_111180);
var inst_111190 = cljs.core.async.muxch_STAR_.call(null,inst_111189);
var inst_111191 = cljs.core.async.close_BANG_.call(null,inst_111190);
var inst_111192 = cljs.core.next.call(null,inst_111180);
var inst_111166 = inst_111192;
var inst_111167 = null;
var inst_111168 = (0);
var inst_111169 = (0);
var state_111225__$1 = (function (){var statearr_111245 = state_111225;
(statearr_111245[(12)] = inst_111168);

(statearr_111245[(13)] = inst_111169);

(statearr_111245[(14)] = inst_111167);

(statearr_111245[(15)] = inst_111166);

(statearr_111245[(16)] = inst_111191);

return statearr_111245;
})();
var statearr_111246_111293 = state_111225__$1;
(statearr_111246_111293[(2)] = null);

(statearr_111246_111293[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111226 === (3))){
var inst_111223 = (state_111225[(2)]);
var state_111225__$1 = state_111225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_111225__$1,inst_111223);
} else {
if((state_val_111226 === (12))){
var inst_111200 = (state_111225[(2)]);
var state_111225__$1 = state_111225;
var statearr_111247_111294 = state_111225__$1;
(statearr_111247_111294[(2)] = inst_111200);

(statearr_111247_111294[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111226 === (2))){
var state_111225__$1 = state_111225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_111225__$1,(4),ch);
} else {
if((state_val_111226 === (23))){
var state_111225__$1 = state_111225;
var statearr_111248_111295 = state_111225__$1;
(statearr_111248_111295[(2)] = null);

(statearr_111248_111295[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111226 === (19))){
var inst_111206 = (state_111225[(11)]);
var inst_111156 = (state_111225[(8)]);
var inst_111208 = cljs.core.async.muxch_STAR_.call(null,inst_111206);
var state_111225__$1 = state_111225;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_111225__$1,(22),inst_111208,inst_111156);
} else {
if((state_val_111226 === (11))){
var inst_111180 = (state_111225[(10)]);
var inst_111166 = (state_111225[(15)]);
var inst_111180__$1 = cljs.core.seq.call(null,inst_111166);
var state_111225__$1 = (function (){var statearr_111249 = state_111225;
(statearr_111249[(10)] = inst_111180__$1);

return statearr_111249;
})();
if(inst_111180__$1){
var statearr_111250_111296 = state_111225__$1;
(statearr_111250_111296[(1)] = (13));

} else {
var statearr_111251_111297 = state_111225__$1;
(statearr_111251_111297[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111226 === (9))){
var inst_111202 = (state_111225[(2)]);
var state_111225__$1 = state_111225;
var statearr_111252_111298 = state_111225__$1;
(statearr_111252_111298[(2)] = inst_111202);

(statearr_111252_111298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111226 === (5))){
var inst_111163 = cljs.core.deref.call(null,mults);
var inst_111164 = cljs.core.vals.call(null,inst_111163);
var inst_111165 = cljs.core.seq.call(null,inst_111164);
var inst_111166 = inst_111165;
var inst_111167 = null;
var inst_111168 = (0);
var inst_111169 = (0);
var state_111225__$1 = (function (){var statearr_111253 = state_111225;
(statearr_111253[(12)] = inst_111168);

(statearr_111253[(13)] = inst_111169);

(statearr_111253[(14)] = inst_111167);

(statearr_111253[(15)] = inst_111166);

return statearr_111253;
})();
var statearr_111254_111299 = state_111225__$1;
(statearr_111254_111299[(2)] = null);

(statearr_111254_111299[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111226 === (14))){
var state_111225__$1 = state_111225;
var statearr_111258_111300 = state_111225__$1;
(statearr_111258_111300[(2)] = null);

(statearr_111258_111300[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111226 === (16))){
var inst_111180 = (state_111225[(10)]);
var inst_111184 = cljs.core.chunk_first.call(null,inst_111180);
var inst_111185 = cljs.core.chunk_rest.call(null,inst_111180);
var inst_111186 = cljs.core.count.call(null,inst_111184);
var inst_111166 = inst_111185;
var inst_111167 = inst_111184;
var inst_111168 = inst_111186;
var inst_111169 = (0);
var state_111225__$1 = (function (){var statearr_111259 = state_111225;
(statearr_111259[(12)] = inst_111168);

(statearr_111259[(13)] = inst_111169);

(statearr_111259[(14)] = inst_111167);

(statearr_111259[(15)] = inst_111166);

return statearr_111259;
})();
var statearr_111260_111301 = state_111225__$1;
(statearr_111260_111301[(2)] = null);

(statearr_111260_111301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111226 === (10))){
var inst_111168 = (state_111225[(12)]);
var inst_111169 = (state_111225[(13)]);
var inst_111167 = (state_111225[(14)]);
var inst_111166 = (state_111225[(15)]);
var inst_111174 = cljs.core._nth.call(null,inst_111167,inst_111169);
var inst_111175 = cljs.core.async.muxch_STAR_.call(null,inst_111174);
var inst_111176 = cljs.core.async.close_BANG_.call(null,inst_111175);
var inst_111177 = (inst_111169 + (1));
var tmp111255 = inst_111168;
var tmp111256 = inst_111167;
var tmp111257 = inst_111166;
var inst_111166__$1 = tmp111257;
var inst_111167__$1 = tmp111256;
var inst_111168__$1 = tmp111255;
var inst_111169__$1 = inst_111177;
var state_111225__$1 = (function (){var statearr_111261 = state_111225;
(statearr_111261[(12)] = inst_111168__$1);

(statearr_111261[(13)] = inst_111169__$1);

(statearr_111261[(14)] = inst_111167__$1);

(statearr_111261[(15)] = inst_111166__$1);

(statearr_111261[(17)] = inst_111176);

return statearr_111261;
})();
var statearr_111262_111302 = state_111225__$1;
(statearr_111262_111302[(2)] = null);

(statearr_111262_111302[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111226 === (18))){
var inst_111195 = (state_111225[(2)]);
var state_111225__$1 = state_111225;
var statearr_111263_111303 = state_111225__$1;
(statearr_111263_111303[(2)] = inst_111195);

(statearr_111263_111303[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111226 === (8))){
var inst_111168 = (state_111225[(12)]);
var inst_111169 = (state_111225[(13)]);
var inst_111171 = (inst_111169 < inst_111168);
var inst_111172 = inst_111171;
var state_111225__$1 = state_111225;
if(cljs.core.truth_(inst_111172)){
var statearr_111264_111304 = state_111225__$1;
(statearr_111264_111304[(1)] = (10));

} else {
var statearr_111265_111305 = state_111225__$1;
(statearr_111265_111305[(1)] = (11));

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
});})(c__10446__auto___111277,mults,ensure_mult,p))
;
return ((function (switch__10425__auto__,c__10446__auto___111277,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10426__auto__ = null;
var cljs$core$async$state_machine__10426__auto____0 = (function (){
var statearr_111269 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_111269[(0)] = cljs$core$async$state_machine__10426__auto__);

(statearr_111269[(1)] = (1));

return statearr_111269;
});
var cljs$core$async$state_machine__10426__auto____1 = (function (state_111225){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_111225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e111270){if((e111270 instanceof Object)){
var ex__10429__auto__ = e111270;
var statearr_111271_111306 = state_111225;
(statearr_111271_111306[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_111225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e111270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__111307 = state_111225;
state_111225 = G__111307;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
cljs$core$async$state_machine__10426__auto__ = function(state_111225){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10426__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10426__auto____1.call(this,state_111225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10426__auto____0;
cljs$core$async$state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10426__auto____1;
return cljs$core$async$state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto___111277,mults,ensure_mult,p))
})();
var state__10448__auto__ = (function (){var statearr_111272 = f__10447__auto__.call(null);
(statearr_111272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto___111277);

return statearr_111272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto___111277,mults,ensure_mult,p))
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
var args111308 = [];
var len__9156__auto___111311 = arguments.length;
var i__9157__auto___111312 = (0);
while(true){
if((i__9157__auto___111312 < len__9156__auto___111311)){
args111308.push((arguments[i__9157__auto___111312]));

var G__111313 = (i__9157__auto___111312 + (1));
i__9157__auto___111312 = G__111313;
continue;
} else {
}
break;
}

var G__111310 = args111308.length;
switch (G__111310) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args111308.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args111315 = [];
var len__9156__auto___111318 = arguments.length;
var i__9157__auto___111319 = (0);
while(true){
if((i__9157__auto___111319 < len__9156__auto___111318)){
args111315.push((arguments[i__9157__auto___111319]));

var G__111320 = (i__9157__auto___111319 + (1));
i__9157__auto___111319 = G__111320;
continue;
} else {
}
break;
}

var G__111317 = args111315.length;
switch (G__111317) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args111315.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var args111322 = [];
var len__9156__auto___111393 = arguments.length;
var i__9157__auto___111394 = (0);
while(true){
if((i__9157__auto___111394 < len__9156__auto___111393)){
args111322.push((arguments[i__9157__auto___111394]));

var G__111395 = (i__9157__auto___111394 + (1));
i__9157__auto___111394 = G__111395;
continue;
} else {
}
break;
}

var G__111324 = args111322.length;
switch (G__111324) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args111322.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__10446__auto___111397 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto___111397,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto___111397,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_111363){
var state_val_111364 = (state_111363[(1)]);
if((state_val_111364 === (7))){
var state_111363__$1 = state_111363;
var statearr_111365_111398 = state_111363__$1;
(statearr_111365_111398[(2)] = null);

(statearr_111365_111398[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111364 === (1))){
var state_111363__$1 = state_111363;
var statearr_111366_111399 = state_111363__$1;
(statearr_111366_111399[(2)] = null);

(statearr_111366_111399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111364 === (4))){
var inst_111327 = (state_111363[(7)]);
var inst_111329 = (inst_111327 < cnt);
var state_111363__$1 = state_111363;
if(cljs.core.truth_(inst_111329)){
var statearr_111367_111400 = state_111363__$1;
(statearr_111367_111400[(1)] = (6));

} else {
var statearr_111368_111401 = state_111363__$1;
(statearr_111368_111401[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111364 === (15))){
var inst_111359 = (state_111363[(2)]);
var state_111363__$1 = state_111363;
var statearr_111369_111402 = state_111363__$1;
(statearr_111369_111402[(2)] = inst_111359);

(statearr_111369_111402[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111364 === (13))){
var inst_111352 = cljs.core.async.close_BANG_.call(null,out);
var state_111363__$1 = state_111363;
var statearr_111370_111403 = state_111363__$1;
(statearr_111370_111403[(2)] = inst_111352);

(statearr_111370_111403[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111364 === (6))){
var state_111363__$1 = state_111363;
var statearr_111371_111404 = state_111363__$1;
(statearr_111371_111404[(2)] = null);

(statearr_111371_111404[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111364 === (3))){
var inst_111361 = (state_111363[(2)]);
var state_111363__$1 = state_111363;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_111363__$1,inst_111361);
} else {
if((state_val_111364 === (12))){
var inst_111349 = (state_111363[(8)]);
var inst_111349__$1 = (state_111363[(2)]);
var inst_111350 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_111349__$1);
var state_111363__$1 = (function (){var statearr_111372 = state_111363;
(statearr_111372[(8)] = inst_111349__$1);

return statearr_111372;
})();
if(cljs.core.truth_(inst_111350)){
var statearr_111373_111405 = state_111363__$1;
(statearr_111373_111405[(1)] = (13));

} else {
var statearr_111374_111406 = state_111363__$1;
(statearr_111374_111406[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111364 === (2))){
var inst_111326 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_111327 = (0);
var state_111363__$1 = (function (){var statearr_111375 = state_111363;
(statearr_111375[(7)] = inst_111327);

(statearr_111375[(9)] = inst_111326);

return statearr_111375;
})();
var statearr_111376_111407 = state_111363__$1;
(statearr_111376_111407[(2)] = null);

(statearr_111376_111407[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111364 === (11))){
var inst_111327 = (state_111363[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_111363,(10),Object,null,(9));
var inst_111336 = chs__$1.call(null,inst_111327);
var inst_111337 = done.call(null,inst_111327);
var inst_111338 = cljs.core.async.take_BANG_.call(null,inst_111336,inst_111337);
var state_111363__$1 = state_111363;
var statearr_111377_111408 = state_111363__$1;
(statearr_111377_111408[(2)] = inst_111338);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_111363__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111364 === (9))){
var inst_111327 = (state_111363[(7)]);
var inst_111340 = (state_111363[(2)]);
var inst_111341 = (inst_111327 + (1));
var inst_111327__$1 = inst_111341;
var state_111363__$1 = (function (){var statearr_111378 = state_111363;
(statearr_111378[(7)] = inst_111327__$1);

(statearr_111378[(10)] = inst_111340);

return statearr_111378;
})();
var statearr_111379_111409 = state_111363__$1;
(statearr_111379_111409[(2)] = null);

(statearr_111379_111409[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111364 === (5))){
var inst_111347 = (state_111363[(2)]);
var state_111363__$1 = (function (){var statearr_111380 = state_111363;
(statearr_111380[(11)] = inst_111347);

return statearr_111380;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_111363__$1,(12),dchan);
} else {
if((state_val_111364 === (14))){
var inst_111349 = (state_111363[(8)]);
var inst_111354 = cljs.core.apply.call(null,f,inst_111349);
var state_111363__$1 = state_111363;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_111363__$1,(16),out,inst_111354);
} else {
if((state_val_111364 === (16))){
var inst_111356 = (state_111363[(2)]);
var state_111363__$1 = (function (){var statearr_111381 = state_111363;
(statearr_111381[(12)] = inst_111356);

return statearr_111381;
})();
var statearr_111382_111410 = state_111363__$1;
(statearr_111382_111410[(2)] = null);

(statearr_111382_111410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111364 === (10))){
var inst_111331 = (state_111363[(2)]);
var inst_111332 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_111363__$1 = (function (){var statearr_111383 = state_111363;
(statearr_111383[(13)] = inst_111331);

return statearr_111383;
})();
var statearr_111384_111411 = state_111363__$1;
(statearr_111384_111411[(2)] = inst_111332);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_111363__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111364 === (8))){
var inst_111345 = (state_111363[(2)]);
var state_111363__$1 = state_111363;
var statearr_111385_111412 = state_111363__$1;
(statearr_111385_111412[(2)] = inst_111345);

(statearr_111385_111412[(1)] = (5));


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
});})(c__10446__auto___111397,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10425__auto__,c__10446__auto___111397,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10426__auto__ = null;
var cljs$core$async$state_machine__10426__auto____0 = (function (){
var statearr_111389 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_111389[(0)] = cljs$core$async$state_machine__10426__auto__);

(statearr_111389[(1)] = (1));

return statearr_111389;
});
var cljs$core$async$state_machine__10426__auto____1 = (function (state_111363){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_111363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e111390){if((e111390 instanceof Object)){
var ex__10429__auto__ = e111390;
var statearr_111391_111413 = state_111363;
(statearr_111391_111413[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_111363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e111390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__111414 = state_111363;
state_111363 = G__111414;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
cljs$core$async$state_machine__10426__auto__ = function(state_111363){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10426__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10426__auto____1.call(this,state_111363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10426__auto____0;
cljs$core$async$state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10426__auto____1;
return cljs$core$async$state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto___111397,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10448__auto__ = (function (){var statearr_111392 = f__10447__auto__.call(null);
(statearr_111392[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto___111397);

return statearr_111392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto___111397,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args111416 = [];
var len__9156__auto___111472 = arguments.length;
var i__9157__auto___111473 = (0);
while(true){
if((i__9157__auto___111473 < len__9156__auto___111472)){
args111416.push((arguments[i__9157__auto___111473]));

var G__111474 = (i__9157__auto___111473 + (1));
i__9157__auto___111473 = G__111474;
continue;
} else {
}
break;
}

var G__111418 = args111416.length;
switch (G__111418) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args111416.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10446__auto___111476 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto___111476,out){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto___111476,out){
return (function (state_111448){
var state_val_111449 = (state_111448[(1)]);
if((state_val_111449 === (7))){
var inst_111428 = (state_111448[(7)]);
var inst_111427 = (state_111448[(8)]);
var inst_111427__$1 = (state_111448[(2)]);
var inst_111428__$1 = cljs.core.nth.call(null,inst_111427__$1,(0),null);
var inst_111429 = cljs.core.nth.call(null,inst_111427__$1,(1),null);
var inst_111430 = (inst_111428__$1 == null);
var state_111448__$1 = (function (){var statearr_111450 = state_111448;
(statearr_111450[(7)] = inst_111428__$1);

(statearr_111450[(9)] = inst_111429);

(statearr_111450[(8)] = inst_111427__$1);

return statearr_111450;
})();
if(cljs.core.truth_(inst_111430)){
var statearr_111451_111477 = state_111448__$1;
(statearr_111451_111477[(1)] = (8));

} else {
var statearr_111452_111478 = state_111448__$1;
(statearr_111452_111478[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111449 === (1))){
var inst_111419 = cljs.core.vec.call(null,chs);
var inst_111420 = inst_111419;
var state_111448__$1 = (function (){var statearr_111453 = state_111448;
(statearr_111453[(10)] = inst_111420);

return statearr_111453;
})();
var statearr_111454_111479 = state_111448__$1;
(statearr_111454_111479[(2)] = null);

(statearr_111454_111479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111449 === (4))){
var inst_111420 = (state_111448[(10)]);
var state_111448__$1 = state_111448;
return cljs.core.async.ioc_alts_BANG_.call(null,state_111448__$1,(7),inst_111420);
} else {
if((state_val_111449 === (6))){
var inst_111444 = (state_111448[(2)]);
var state_111448__$1 = state_111448;
var statearr_111455_111480 = state_111448__$1;
(statearr_111455_111480[(2)] = inst_111444);

(statearr_111455_111480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111449 === (3))){
var inst_111446 = (state_111448[(2)]);
var state_111448__$1 = state_111448;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_111448__$1,inst_111446);
} else {
if((state_val_111449 === (2))){
var inst_111420 = (state_111448[(10)]);
var inst_111422 = cljs.core.count.call(null,inst_111420);
var inst_111423 = (inst_111422 > (0));
var state_111448__$1 = state_111448;
if(cljs.core.truth_(inst_111423)){
var statearr_111457_111481 = state_111448__$1;
(statearr_111457_111481[(1)] = (4));

} else {
var statearr_111458_111482 = state_111448__$1;
(statearr_111458_111482[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111449 === (11))){
var inst_111420 = (state_111448[(10)]);
var inst_111437 = (state_111448[(2)]);
var tmp111456 = inst_111420;
var inst_111420__$1 = tmp111456;
var state_111448__$1 = (function (){var statearr_111459 = state_111448;
(statearr_111459[(11)] = inst_111437);

(statearr_111459[(10)] = inst_111420__$1);

return statearr_111459;
})();
var statearr_111460_111483 = state_111448__$1;
(statearr_111460_111483[(2)] = null);

(statearr_111460_111483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111449 === (9))){
var inst_111428 = (state_111448[(7)]);
var state_111448__$1 = state_111448;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_111448__$1,(11),out,inst_111428);
} else {
if((state_val_111449 === (5))){
var inst_111442 = cljs.core.async.close_BANG_.call(null,out);
var state_111448__$1 = state_111448;
var statearr_111461_111484 = state_111448__$1;
(statearr_111461_111484[(2)] = inst_111442);

(statearr_111461_111484[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111449 === (10))){
var inst_111440 = (state_111448[(2)]);
var state_111448__$1 = state_111448;
var statearr_111462_111485 = state_111448__$1;
(statearr_111462_111485[(2)] = inst_111440);

(statearr_111462_111485[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111449 === (8))){
var inst_111428 = (state_111448[(7)]);
var inst_111429 = (state_111448[(9)]);
var inst_111427 = (state_111448[(8)]);
var inst_111420 = (state_111448[(10)]);
var inst_111432 = (function (){var cs = inst_111420;
var vec__111425 = inst_111427;
var v = inst_111428;
var c = inst_111429;
return ((function (cs,vec__111425,v,c,inst_111428,inst_111429,inst_111427,inst_111420,state_val_111449,c__10446__auto___111476,out){
return (function (p1__111415_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__111415_SHARP_);
});
;})(cs,vec__111425,v,c,inst_111428,inst_111429,inst_111427,inst_111420,state_val_111449,c__10446__auto___111476,out))
})();
var inst_111433 = cljs.core.filterv.call(null,inst_111432,inst_111420);
var inst_111420__$1 = inst_111433;
var state_111448__$1 = (function (){var statearr_111463 = state_111448;
(statearr_111463[(10)] = inst_111420__$1);

return statearr_111463;
})();
var statearr_111464_111486 = state_111448__$1;
(statearr_111464_111486[(2)] = null);

(statearr_111464_111486[(1)] = (2));


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
});})(c__10446__auto___111476,out))
;
return ((function (switch__10425__auto__,c__10446__auto___111476,out){
return (function() {
var cljs$core$async$state_machine__10426__auto__ = null;
var cljs$core$async$state_machine__10426__auto____0 = (function (){
var statearr_111468 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_111468[(0)] = cljs$core$async$state_machine__10426__auto__);

(statearr_111468[(1)] = (1));

return statearr_111468;
});
var cljs$core$async$state_machine__10426__auto____1 = (function (state_111448){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_111448);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e111469){if((e111469 instanceof Object)){
var ex__10429__auto__ = e111469;
var statearr_111470_111487 = state_111448;
(statearr_111470_111487[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_111448);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e111469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__111488 = state_111448;
state_111448 = G__111488;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
cljs$core$async$state_machine__10426__auto__ = function(state_111448){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10426__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10426__auto____1.call(this,state_111448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10426__auto____0;
cljs$core$async$state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10426__auto____1;
return cljs$core$async$state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto___111476,out))
})();
var state__10448__auto__ = (function (){var statearr_111471 = f__10447__auto__.call(null);
(statearr_111471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto___111476);

return statearr_111471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto___111476,out))
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
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args111489 = [];
var len__9156__auto___111538 = arguments.length;
var i__9157__auto___111539 = (0);
while(true){
if((i__9157__auto___111539 < len__9156__auto___111538)){
args111489.push((arguments[i__9157__auto___111539]));

var G__111540 = (i__9157__auto___111539 + (1));
i__9157__auto___111539 = G__111540;
continue;
} else {
}
break;
}

var G__111491 = args111489.length;
switch (G__111491) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args111489.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10446__auto___111542 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto___111542,out){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto___111542,out){
return (function (state_111515){
var state_val_111516 = (state_111515[(1)]);
if((state_val_111516 === (7))){
var inst_111497 = (state_111515[(7)]);
var inst_111497__$1 = (state_111515[(2)]);
var inst_111498 = (inst_111497__$1 == null);
var inst_111499 = cljs.core.not.call(null,inst_111498);
var state_111515__$1 = (function (){var statearr_111517 = state_111515;
(statearr_111517[(7)] = inst_111497__$1);

return statearr_111517;
})();
if(inst_111499){
var statearr_111518_111543 = state_111515__$1;
(statearr_111518_111543[(1)] = (8));

} else {
var statearr_111519_111544 = state_111515__$1;
(statearr_111519_111544[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111516 === (1))){
var inst_111492 = (0);
var state_111515__$1 = (function (){var statearr_111520 = state_111515;
(statearr_111520[(8)] = inst_111492);

return statearr_111520;
})();
var statearr_111521_111545 = state_111515__$1;
(statearr_111521_111545[(2)] = null);

(statearr_111521_111545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111516 === (4))){
var state_111515__$1 = state_111515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_111515__$1,(7),ch);
} else {
if((state_val_111516 === (6))){
var inst_111510 = (state_111515[(2)]);
var state_111515__$1 = state_111515;
var statearr_111522_111546 = state_111515__$1;
(statearr_111522_111546[(2)] = inst_111510);

(statearr_111522_111546[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111516 === (3))){
var inst_111512 = (state_111515[(2)]);
var inst_111513 = cljs.core.async.close_BANG_.call(null,out);
var state_111515__$1 = (function (){var statearr_111523 = state_111515;
(statearr_111523[(9)] = inst_111512);

return statearr_111523;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_111515__$1,inst_111513);
} else {
if((state_val_111516 === (2))){
var inst_111492 = (state_111515[(8)]);
var inst_111494 = (inst_111492 < n);
var state_111515__$1 = state_111515;
if(cljs.core.truth_(inst_111494)){
var statearr_111524_111547 = state_111515__$1;
(statearr_111524_111547[(1)] = (4));

} else {
var statearr_111525_111548 = state_111515__$1;
(statearr_111525_111548[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111516 === (11))){
var inst_111492 = (state_111515[(8)]);
var inst_111502 = (state_111515[(2)]);
var inst_111503 = (inst_111492 + (1));
var inst_111492__$1 = inst_111503;
var state_111515__$1 = (function (){var statearr_111526 = state_111515;
(statearr_111526[(8)] = inst_111492__$1);

(statearr_111526[(10)] = inst_111502);

return statearr_111526;
})();
var statearr_111527_111549 = state_111515__$1;
(statearr_111527_111549[(2)] = null);

(statearr_111527_111549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111516 === (9))){
var state_111515__$1 = state_111515;
var statearr_111528_111550 = state_111515__$1;
(statearr_111528_111550[(2)] = null);

(statearr_111528_111550[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111516 === (5))){
var state_111515__$1 = state_111515;
var statearr_111529_111551 = state_111515__$1;
(statearr_111529_111551[(2)] = null);

(statearr_111529_111551[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111516 === (10))){
var inst_111507 = (state_111515[(2)]);
var state_111515__$1 = state_111515;
var statearr_111530_111552 = state_111515__$1;
(statearr_111530_111552[(2)] = inst_111507);

(statearr_111530_111552[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111516 === (8))){
var inst_111497 = (state_111515[(7)]);
var state_111515__$1 = state_111515;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_111515__$1,(11),out,inst_111497);
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
});})(c__10446__auto___111542,out))
;
return ((function (switch__10425__auto__,c__10446__auto___111542,out){
return (function() {
var cljs$core$async$state_machine__10426__auto__ = null;
var cljs$core$async$state_machine__10426__auto____0 = (function (){
var statearr_111534 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_111534[(0)] = cljs$core$async$state_machine__10426__auto__);

(statearr_111534[(1)] = (1));

return statearr_111534;
});
var cljs$core$async$state_machine__10426__auto____1 = (function (state_111515){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_111515);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e111535){if((e111535 instanceof Object)){
var ex__10429__auto__ = e111535;
var statearr_111536_111553 = state_111515;
(statearr_111536_111553[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_111515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e111535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__111554 = state_111515;
state_111515 = G__111554;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
cljs$core$async$state_machine__10426__auto__ = function(state_111515){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10426__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10426__auto____1.call(this,state_111515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10426__auto____0;
cljs$core$async$state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10426__auto____1;
return cljs$core$async$state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto___111542,out))
})();
var state__10448__auto__ = (function (){var statearr_111537 = f__10447__auto__.call(null);
(statearr_111537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto___111542);

return statearr_111537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto___111542,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async111562 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async111562 = (function (map_LT_,f,ch,meta111563){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta111563 = meta111563;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async111562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_111564,meta111563__$1){
var self__ = this;
var _111564__$1 = this;
return (new cljs.core.async.t_cljs$core$async111562(self__.map_LT_,self__.f,self__.ch,meta111563__$1));
});

cljs.core.async.t_cljs$core$async111562.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_111564){
var self__ = this;
var _111564__$1 = this;
return self__.meta111563;
});

cljs.core.async.t_cljs$core$async111562.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async111562.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async111562.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async111562.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async111562.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async111565 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async111565 = (function (map_LT_,f,ch,meta111563,_,fn1,meta111566){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta111563 = meta111563;
this._ = _;
this.fn1 = fn1;
this.meta111566 = meta111566;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async111565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_111567,meta111566__$1){
var self__ = this;
var _111567__$1 = this;
return (new cljs.core.async.t_cljs$core$async111565(self__.map_LT_,self__.f,self__.ch,self__.meta111563,self__._,self__.fn1,meta111566__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async111565.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_111567){
var self__ = this;
var _111567__$1 = this;
return self__.meta111566;
});})(___$1))
;

cljs.core.async.t_cljs$core$async111565.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async111565.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async111565.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async111565.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__111555_SHARP_){
return f1.call(null,(((p1__111555_SHARP_ == null))?null:self__.f.call(null,p1__111555_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async111565.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta111563","meta111563",-1715484948,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async111562","cljs.core.async/t_cljs$core$async111562",-88403079,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta111566","meta111566",-932545385,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async111565.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async111565.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async111565";

cljs.core.async.t_cljs$core$async111565.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8696__auto__,writer__8697__auto__,opt__8698__auto__){
return cljs.core._write.call(null,writer__8697__auto__,"cljs.core.async/t_cljs$core$async111565");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async111565 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async111565(map_LT___$1,f__$1,ch__$1,meta111563__$1,___$2,fn1__$1,meta111566){
return (new cljs.core.async.t_cljs$core$async111565(map_LT___$1,f__$1,ch__$1,meta111563__$1,___$2,fn1__$1,meta111566));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async111565(self__.map_LT_,self__.f,self__.ch,self__.meta111563,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__8086__auto__ = ret;
if(cljs.core.truth_(and__8086__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__8086__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async111562.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async111562.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async111562.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta111563","meta111563",-1715484948,null)], null);
});

cljs.core.async.t_cljs$core$async111562.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async111562.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async111562";

cljs.core.async.t_cljs$core$async111562.cljs$lang$ctorPrWriter = (function (this__8696__auto__,writer__8697__auto__,opt__8698__auto__){
return cljs.core._write.call(null,writer__8697__auto__,"cljs.core.async/t_cljs$core$async111562");
});

cljs.core.async.__GT_t_cljs$core$async111562 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async111562(map_LT___$1,f__$1,ch__$1,meta111563){
return (new cljs.core.async.t_cljs$core$async111562(map_LT___$1,f__$1,ch__$1,meta111563));
});

}

return (new cljs.core.async.t_cljs$core$async111562(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async111571 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async111571 = (function (map_GT_,f,ch,meta111572){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta111572 = meta111572;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async111571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_111573,meta111572__$1){
var self__ = this;
var _111573__$1 = this;
return (new cljs.core.async.t_cljs$core$async111571(self__.map_GT_,self__.f,self__.ch,meta111572__$1));
});

cljs.core.async.t_cljs$core$async111571.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_111573){
var self__ = this;
var _111573__$1 = this;
return self__.meta111572;
});

cljs.core.async.t_cljs$core$async111571.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async111571.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async111571.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async111571.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async111571.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async111571.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async111571.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta111572","meta111572",1728857080,null)], null);
});

cljs.core.async.t_cljs$core$async111571.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async111571.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async111571";

cljs.core.async.t_cljs$core$async111571.cljs$lang$ctorPrWriter = (function (this__8696__auto__,writer__8697__auto__,opt__8698__auto__){
return cljs.core._write.call(null,writer__8697__auto__,"cljs.core.async/t_cljs$core$async111571");
});

cljs.core.async.__GT_t_cljs$core$async111571 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async111571(map_GT___$1,f__$1,ch__$1,meta111572){
return (new cljs.core.async.t_cljs$core$async111571(map_GT___$1,f__$1,ch__$1,meta111572));
});

}

return (new cljs.core.async.t_cljs$core$async111571(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async111577 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async111577 = (function (filter_GT_,p,ch,meta111578){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta111578 = meta111578;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async111577.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_111579,meta111578__$1){
var self__ = this;
var _111579__$1 = this;
return (new cljs.core.async.t_cljs$core$async111577(self__.filter_GT_,self__.p,self__.ch,meta111578__$1));
});

cljs.core.async.t_cljs$core$async111577.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_111579){
var self__ = this;
var _111579__$1 = this;
return self__.meta111578;
});

cljs.core.async.t_cljs$core$async111577.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async111577.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async111577.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async111577.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async111577.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async111577.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async111577.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async111577.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta111578","meta111578",1707246627,null)], null);
});

cljs.core.async.t_cljs$core$async111577.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async111577.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async111577";

cljs.core.async.t_cljs$core$async111577.cljs$lang$ctorPrWriter = (function (this__8696__auto__,writer__8697__auto__,opt__8698__auto__){
return cljs.core._write.call(null,writer__8697__auto__,"cljs.core.async/t_cljs$core$async111577");
});

cljs.core.async.__GT_t_cljs$core$async111577 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async111577(filter_GT___$1,p__$1,ch__$1,meta111578){
return (new cljs.core.async.t_cljs$core$async111577(filter_GT___$1,p__$1,ch__$1,meta111578));
});

}

return (new cljs.core.async.t_cljs$core$async111577(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args111580 = [];
var len__9156__auto___111624 = arguments.length;
var i__9157__auto___111625 = (0);
while(true){
if((i__9157__auto___111625 < len__9156__auto___111624)){
args111580.push((arguments[i__9157__auto___111625]));

var G__111626 = (i__9157__auto___111625 + (1));
i__9157__auto___111625 = G__111626;
continue;
} else {
}
break;
}

var G__111582 = args111580.length;
switch (G__111582) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args111580.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10446__auto___111628 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto___111628,out){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto___111628,out){
return (function (state_111603){
var state_val_111604 = (state_111603[(1)]);
if((state_val_111604 === (7))){
var inst_111599 = (state_111603[(2)]);
var state_111603__$1 = state_111603;
var statearr_111605_111629 = state_111603__$1;
(statearr_111605_111629[(2)] = inst_111599);

(statearr_111605_111629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111604 === (1))){
var state_111603__$1 = state_111603;
var statearr_111606_111630 = state_111603__$1;
(statearr_111606_111630[(2)] = null);

(statearr_111606_111630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111604 === (4))){
var inst_111585 = (state_111603[(7)]);
var inst_111585__$1 = (state_111603[(2)]);
var inst_111586 = (inst_111585__$1 == null);
var state_111603__$1 = (function (){var statearr_111607 = state_111603;
(statearr_111607[(7)] = inst_111585__$1);

return statearr_111607;
})();
if(cljs.core.truth_(inst_111586)){
var statearr_111608_111631 = state_111603__$1;
(statearr_111608_111631[(1)] = (5));

} else {
var statearr_111609_111632 = state_111603__$1;
(statearr_111609_111632[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111604 === (6))){
var inst_111585 = (state_111603[(7)]);
var inst_111590 = p.call(null,inst_111585);
var state_111603__$1 = state_111603;
if(cljs.core.truth_(inst_111590)){
var statearr_111610_111633 = state_111603__$1;
(statearr_111610_111633[(1)] = (8));

} else {
var statearr_111611_111634 = state_111603__$1;
(statearr_111611_111634[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111604 === (3))){
var inst_111601 = (state_111603[(2)]);
var state_111603__$1 = state_111603;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_111603__$1,inst_111601);
} else {
if((state_val_111604 === (2))){
var state_111603__$1 = state_111603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_111603__$1,(4),ch);
} else {
if((state_val_111604 === (11))){
var inst_111593 = (state_111603[(2)]);
var state_111603__$1 = state_111603;
var statearr_111612_111635 = state_111603__$1;
(statearr_111612_111635[(2)] = inst_111593);

(statearr_111612_111635[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111604 === (9))){
var state_111603__$1 = state_111603;
var statearr_111613_111636 = state_111603__$1;
(statearr_111613_111636[(2)] = null);

(statearr_111613_111636[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111604 === (5))){
var inst_111588 = cljs.core.async.close_BANG_.call(null,out);
var state_111603__$1 = state_111603;
var statearr_111614_111637 = state_111603__$1;
(statearr_111614_111637[(2)] = inst_111588);

(statearr_111614_111637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111604 === (10))){
var inst_111596 = (state_111603[(2)]);
var state_111603__$1 = (function (){var statearr_111615 = state_111603;
(statearr_111615[(8)] = inst_111596);

return statearr_111615;
})();
var statearr_111616_111638 = state_111603__$1;
(statearr_111616_111638[(2)] = null);

(statearr_111616_111638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111604 === (8))){
var inst_111585 = (state_111603[(7)]);
var state_111603__$1 = state_111603;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_111603__$1,(11),out,inst_111585);
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
});})(c__10446__auto___111628,out))
;
return ((function (switch__10425__auto__,c__10446__auto___111628,out){
return (function() {
var cljs$core$async$state_machine__10426__auto__ = null;
var cljs$core$async$state_machine__10426__auto____0 = (function (){
var statearr_111620 = [null,null,null,null,null,null,null,null,null];
(statearr_111620[(0)] = cljs$core$async$state_machine__10426__auto__);

(statearr_111620[(1)] = (1));

return statearr_111620;
});
var cljs$core$async$state_machine__10426__auto____1 = (function (state_111603){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_111603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e111621){if((e111621 instanceof Object)){
var ex__10429__auto__ = e111621;
var statearr_111622_111639 = state_111603;
(statearr_111622_111639[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_111603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e111621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__111640 = state_111603;
state_111603 = G__111640;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
cljs$core$async$state_machine__10426__auto__ = function(state_111603){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10426__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10426__auto____1.call(this,state_111603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10426__auto____0;
cljs$core$async$state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10426__auto____1;
return cljs$core$async$state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto___111628,out))
})();
var state__10448__auto__ = (function (){var statearr_111623 = f__10447__auto__.call(null);
(statearr_111623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto___111628);

return statearr_111623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto___111628,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args111641 = [];
var len__9156__auto___111644 = arguments.length;
var i__9157__auto___111645 = (0);
while(true){
if((i__9157__auto___111645 < len__9156__auto___111644)){
args111641.push((arguments[i__9157__auto___111645]));

var G__111646 = (i__9157__auto___111645 + (1));
i__9157__auto___111645 = G__111646;
continue;
} else {
}
break;
}

var G__111643 = args111641.length;
switch (G__111643) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args111641.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__10446__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto__){
return (function (state_111813){
var state_val_111814 = (state_111813[(1)]);
if((state_val_111814 === (7))){
var inst_111809 = (state_111813[(2)]);
var state_111813__$1 = state_111813;
var statearr_111815_111856 = state_111813__$1;
(statearr_111815_111856[(2)] = inst_111809);

(statearr_111815_111856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111814 === (20))){
var inst_111779 = (state_111813[(7)]);
var inst_111790 = (state_111813[(2)]);
var inst_111791 = cljs.core.next.call(null,inst_111779);
var inst_111765 = inst_111791;
var inst_111766 = null;
var inst_111767 = (0);
var inst_111768 = (0);
var state_111813__$1 = (function (){var statearr_111816 = state_111813;
(statearr_111816[(8)] = inst_111768);

(statearr_111816[(9)] = inst_111767);

(statearr_111816[(10)] = inst_111766);

(statearr_111816[(11)] = inst_111765);

(statearr_111816[(12)] = inst_111790);

return statearr_111816;
})();
var statearr_111817_111857 = state_111813__$1;
(statearr_111817_111857[(2)] = null);

(statearr_111817_111857[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111814 === (1))){
var state_111813__$1 = state_111813;
var statearr_111818_111858 = state_111813__$1;
(statearr_111818_111858[(2)] = null);

(statearr_111818_111858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111814 === (4))){
var inst_111754 = (state_111813[(13)]);
var inst_111754__$1 = (state_111813[(2)]);
var inst_111755 = (inst_111754__$1 == null);
var state_111813__$1 = (function (){var statearr_111819 = state_111813;
(statearr_111819[(13)] = inst_111754__$1);

return statearr_111819;
})();
if(cljs.core.truth_(inst_111755)){
var statearr_111820_111859 = state_111813__$1;
(statearr_111820_111859[(1)] = (5));

} else {
var statearr_111821_111860 = state_111813__$1;
(statearr_111821_111860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111814 === (15))){
var state_111813__$1 = state_111813;
var statearr_111825_111861 = state_111813__$1;
(statearr_111825_111861[(2)] = null);

(statearr_111825_111861[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111814 === (21))){
var state_111813__$1 = state_111813;
var statearr_111826_111862 = state_111813__$1;
(statearr_111826_111862[(2)] = null);

(statearr_111826_111862[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111814 === (13))){
var inst_111768 = (state_111813[(8)]);
var inst_111767 = (state_111813[(9)]);
var inst_111766 = (state_111813[(10)]);
var inst_111765 = (state_111813[(11)]);
var inst_111775 = (state_111813[(2)]);
var inst_111776 = (inst_111768 + (1));
var tmp111822 = inst_111767;
var tmp111823 = inst_111766;
var tmp111824 = inst_111765;
var inst_111765__$1 = tmp111824;
var inst_111766__$1 = tmp111823;
var inst_111767__$1 = tmp111822;
var inst_111768__$1 = inst_111776;
var state_111813__$1 = (function (){var statearr_111827 = state_111813;
(statearr_111827[(8)] = inst_111768__$1);

(statearr_111827[(14)] = inst_111775);

(statearr_111827[(9)] = inst_111767__$1);

(statearr_111827[(10)] = inst_111766__$1);

(statearr_111827[(11)] = inst_111765__$1);

return statearr_111827;
})();
var statearr_111828_111863 = state_111813__$1;
(statearr_111828_111863[(2)] = null);

(statearr_111828_111863[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111814 === (22))){
var state_111813__$1 = state_111813;
var statearr_111829_111864 = state_111813__$1;
(statearr_111829_111864[(2)] = null);

(statearr_111829_111864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111814 === (6))){
var inst_111754 = (state_111813[(13)]);
var inst_111763 = f.call(null,inst_111754);
var inst_111764 = cljs.core.seq.call(null,inst_111763);
var inst_111765 = inst_111764;
var inst_111766 = null;
var inst_111767 = (0);
var inst_111768 = (0);
var state_111813__$1 = (function (){var statearr_111830 = state_111813;
(statearr_111830[(8)] = inst_111768);

(statearr_111830[(9)] = inst_111767);

(statearr_111830[(10)] = inst_111766);

(statearr_111830[(11)] = inst_111765);

return statearr_111830;
})();
var statearr_111831_111865 = state_111813__$1;
(statearr_111831_111865[(2)] = null);

(statearr_111831_111865[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111814 === (17))){
var inst_111779 = (state_111813[(7)]);
var inst_111783 = cljs.core.chunk_first.call(null,inst_111779);
var inst_111784 = cljs.core.chunk_rest.call(null,inst_111779);
var inst_111785 = cljs.core.count.call(null,inst_111783);
var inst_111765 = inst_111784;
var inst_111766 = inst_111783;
var inst_111767 = inst_111785;
var inst_111768 = (0);
var state_111813__$1 = (function (){var statearr_111832 = state_111813;
(statearr_111832[(8)] = inst_111768);

(statearr_111832[(9)] = inst_111767);

(statearr_111832[(10)] = inst_111766);

(statearr_111832[(11)] = inst_111765);

return statearr_111832;
})();
var statearr_111833_111866 = state_111813__$1;
(statearr_111833_111866[(2)] = null);

(statearr_111833_111866[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111814 === (3))){
var inst_111811 = (state_111813[(2)]);
var state_111813__$1 = state_111813;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_111813__$1,inst_111811);
} else {
if((state_val_111814 === (12))){
var inst_111799 = (state_111813[(2)]);
var state_111813__$1 = state_111813;
var statearr_111834_111867 = state_111813__$1;
(statearr_111834_111867[(2)] = inst_111799);

(statearr_111834_111867[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111814 === (2))){
var state_111813__$1 = state_111813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_111813__$1,(4),in$);
} else {
if((state_val_111814 === (23))){
var inst_111807 = (state_111813[(2)]);
var state_111813__$1 = state_111813;
var statearr_111835_111868 = state_111813__$1;
(statearr_111835_111868[(2)] = inst_111807);

(statearr_111835_111868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111814 === (19))){
var inst_111794 = (state_111813[(2)]);
var state_111813__$1 = state_111813;
var statearr_111836_111869 = state_111813__$1;
(statearr_111836_111869[(2)] = inst_111794);

(statearr_111836_111869[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111814 === (11))){
var inst_111765 = (state_111813[(11)]);
var inst_111779 = (state_111813[(7)]);
var inst_111779__$1 = cljs.core.seq.call(null,inst_111765);
var state_111813__$1 = (function (){var statearr_111837 = state_111813;
(statearr_111837[(7)] = inst_111779__$1);

return statearr_111837;
})();
if(inst_111779__$1){
var statearr_111838_111870 = state_111813__$1;
(statearr_111838_111870[(1)] = (14));

} else {
var statearr_111839_111871 = state_111813__$1;
(statearr_111839_111871[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111814 === (9))){
var inst_111801 = (state_111813[(2)]);
var inst_111802 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_111813__$1 = (function (){var statearr_111840 = state_111813;
(statearr_111840[(15)] = inst_111801);

return statearr_111840;
})();
if(cljs.core.truth_(inst_111802)){
var statearr_111841_111872 = state_111813__$1;
(statearr_111841_111872[(1)] = (21));

} else {
var statearr_111842_111873 = state_111813__$1;
(statearr_111842_111873[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111814 === (5))){
var inst_111757 = cljs.core.async.close_BANG_.call(null,out);
var state_111813__$1 = state_111813;
var statearr_111843_111874 = state_111813__$1;
(statearr_111843_111874[(2)] = inst_111757);

(statearr_111843_111874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111814 === (14))){
var inst_111779 = (state_111813[(7)]);
var inst_111781 = cljs.core.chunked_seq_QMARK_.call(null,inst_111779);
var state_111813__$1 = state_111813;
if(inst_111781){
var statearr_111844_111875 = state_111813__$1;
(statearr_111844_111875[(1)] = (17));

} else {
var statearr_111845_111876 = state_111813__$1;
(statearr_111845_111876[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111814 === (16))){
var inst_111797 = (state_111813[(2)]);
var state_111813__$1 = state_111813;
var statearr_111846_111877 = state_111813__$1;
(statearr_111846_111877[(2)] = inst_111797);

(statearr_111846_111877[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111814 === (10))){
var inst_111768 = (state_111813[(8)]);
var inst_111766 = (state_111813[(10)]);
var inst_111773 = cljs.core._nth.call(null,inst_111766,inst_111768);
var state_111813__$1 = state_111813;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_111813__$1,(13),out,inst_111773);
} else {
if((state_val_111814 === (18))){
var inst_111779 = (state_111813[(7)]);
var inst_111788 = cljs.core.first.call(null,inst_111779);
var state_111813__$1 = state_111813;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_111813__$1,(20),out,inst_111788);
} else {
if((state_val_111814 === (8))){
var inst_111768 = (state_111813[(8)]);
var inst_111767 = (state_111813[(9)]);
var inst_111770 = (inst_111768 < inst_111767);
var inst_111771 = inst_111770;
var state_111813__$1 = state_111813;
if(cljs.core.truth_(inst_111771)){
var statearr_111847_111878 = state_111813__$1;
(statearr_111847_111878[(1)] = (10));

} else {
var statearr_111848_111879 = state_111813__$1;
(statearr_111848_111879[(1)] = (11));

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
});})(c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__10426__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10426__auto____0 = (function (){
var statearr_111852 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_111852[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10426__auto__);

(statearr_111852[(1)] = (1));

return statearr_111852;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10426__auto____1 = (function (state_111813){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_111813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e111853){if((e111853 instanceof Object)){
var ex__10429__auto__ = e111853;
var statearr_111854_111880 = state_111813;
(statearr_111854_111880[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_111813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e111853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__111881 = state_111813;
state_111813 = G__111881;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10426__auto__ = function(state_111813){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10426__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10426__auto____1.call(this,state_111813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10426__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10426__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_111855 = f__10447__auto__.call(null);
(statearr_111855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_111855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto__))
);

return c__10446__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args111882 = [];
var len__9156__auto___111885 = arguments.length;
var i__9157__auto___111886 = (0);
while(true){
if((i__9157__auto___111886 < len__9156__auto___111885)){
args111882.push((arguments[i__9157__auto___111886]));

var G__111887 = (i__9157__auto___111886 + (1));
i__9157__auto___111886 = G__111887;
continue;
} else {
}
break;
}

var G__111884 = args111882.length;
switch (G__111884) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args111882.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args111889 = [];
var len__9156__auto___111892 = arguments.length;
var i__9157__auto___111893 = (0);
while(true){
if((i__9157__auto___111893 < len__9156__auto___111892)){
args111889.push((arguments[i__9157__auto___111893]));

var G__111894 = (i__9157__auto___111893 + (1));
i__9157__auto___111893 = G__111894;
continue;
} else {
}
break;
}

var G__111891 = args111889.length;
switch (G__111891) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args111889.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args111896 = [];
var len__9156__auto___111947 = arguments.length;
var i__9157__auto___111948 = (0);
while(true){
if((i__9157__auto___111948 < len__9156__auto___111947)){
args111896.push((arguments[i__9157__auto___111948]));

var G__111949 = (i__9157__auto___111948 + (1));
i__9157__auto___111948 = G__111949;
continue;
} else {
}
break;
}

var G__111898 = args111896.length;
switch (G__111898) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args111896.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10446__auto___111951 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto___111951,out){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto___111951,out){
return (function (state_111922){
var state_val_111923 = (state_111922[(1)]);
if((state_val_111923 === (7))){
var inst_111917 = (state_111922[(2)]);
var state_111922__$1 = state_111922;
var statearr_111924_111952 = state_111922__$1;
(statearr_111924_111952[(2)] = inst_111917);

(statearr_111924_111952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111923 === (1))){
var inst_111899 = null;
var state_111922__$1 = (function (){var statearr_111925 = state_111922;
(statearr_111925[(7)] = inst_111899);

return statearr_111925;
})();
var statearr_111926_111953 = state_111922__$1;
(statearr_111926_111953[(2)] = null);

(statearr_111926_111953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111923 === (4))){
var inst_111902 = (state_111922[(8)]);
var inst_111902__$1 = (state_111922[(2)]);
var inst_111903 = (inst_111902__$1 == null);
var inst_111904 = cljs.core.not.call(null,inst_111903);
var state_111922__$1 = (function (){var statearr_111927 = state_111922;
(statearr_111927[(8)] = inst_111902__$1);

return statearr_111927;
})();
if(inst_111904){
var statearr_111928_111954 = state_111922__$1;
(statearr_111928_111954[(1)] = (5));

} else {
var statearr_111929_111955 = state_111922__$1;
(statearr_111929_111955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111923 === (6))){
var state_111922__$1 = state_111922;
var statearr_111930_111956 = state_111922__$1;
(statearr_111930_111956[(2)] = null);

(statearr_111930_111956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111923 === (3))){
var inst_111919 = (state_111922[(2)]);
var inst_111920 = cljs.core.async.close_BANG_.call(null,out);
var state_111922__$1 = (function (){var statearr_111931 = state_111922;
(statearr_111931[(9)] = inst_111919);

return statearr_111931;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_111922__$1,inst_111920);
} else {
if((state_val_111923 === (2))){
var state_111922__$1 = state_111922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_111922__$1,(4),ch);
} else {
if((state_val_111923 === (11))){
var inst_111902 = (state_111922[(8)]);
var inst_111911 = (state_111922[(2)]);
var inst_111899 = inst_111902;
var state_111922__$1 = (function (){var statearr_111932 = state_111922;
(statearr_111932[(7)] = inst_111899);

(statearr_111932[(10)] = inst_111911);

return statearr_111932;
})();
var statearr_111933_111957 = state_111922__$1;
(statearr_111933_111957[(2)] = null);

(statearr_111933_111957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111923 === (9))){
var inst_111902 = (state_111922[(8)]);
var state_111922__$1 = state_111922;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_111922__$1,(11),out,inst_111902);
} else {
if((state_val_111923 === (5))){
var inst_111902 = (state_111922[(8)]);
var inst_111899 = (state_111922[(7)]);
var inst_111906 = cljs.core._EQ_.call(null,inst_111902,inst_111899);
var state_111922__$1 = state_111922;
if(inst_111906){
var statearr_111935_111958 = state_111922__$1;
(statearr_111935_111958[(1)] = (8));

} else {
var statearr_111936_111959 = state_111922__$1;
(statearr_111936_111959[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111923 === (10))){
var inst_111914 = (state_111922[(2)]);
var state_111922__$1 = state_111922;
var statearr_111937_111960 = state_111922__$1;
(statearr_111937_111960[(2)] = inst_111914);

(statearr_111937_111960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111923 === (8))){
var inst_111899 = (state_111922[(7)]);
var tmp111934 = inst_111899;
var inst_111899__$1 = tmp111934;
var state_111922__$1 = (function (){var statearr_111938 = state_111922;
(statearr_111938[(7)] = inst_111899__$1);

return statearr_111938;
})();
var statearr_111939_111961 = state_111922__$1;
(statearr_111939_111961[(2)] = null);

(statearr_111939_111961[(1)] = (2));


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
});})(c__10446__auto___111951,out))
;
return ((function (switch__10425__auto__,c__10446__auto___111951,out){
return (function() {
var cljs$core$async$state_machine__10426__auto__ = null;
var cljs$core$async$state_machine__10426__auto____0 = (function (){
var statearr_111943 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_111943[(0)] = cljs$core$async$state_machine__10426__auto__);

(statearr_111943[(1)] = (1));

return statearr_111943;
});
var cljs$core$async$state_machine__10426__auto____1 = (function (state_111922){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_111922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e111944){if((e111944 instanceof Object)){
var ex__10429__auto__ = e111944;
var statearr_111945_111962 = state_111922;
(statearr_111945_111962[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_111922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e111944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__111963 = state_111922;
state_111922 = G__111963;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
cljs$core$async$state_machine__10426__auto__ = function(state_111922){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10426__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10426__auto____1.call(this,state_111922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10426__auto____0;
cljs$core$async$state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10426__auto____1;
return cljs$core$async$state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto___111951,out))
})();
var state__10448__auto__ = (function (){var statearr_111946 = f__10447__auto__.call(null);
(statearr_111946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto___111951);

return statearr_111946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto___111951,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args111964 = [];
var len__9156__auto___112034 = arguments.length;
var i__9157__auto___112035 = (0);
while(true){
if((i__9157__auto___112035 < len__9156__auto___112034)){
args111964.push((arguments[i__9157__auto___112035]));

var G__112036 = (i__9157__auto___112035 + (1));
i__9157__auto___112035 = G__112036;
continue;
} else {
}
break;
}

var G__111966 = args111964.length;
switch (G__111966) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args111964.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10446__auto___112038 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto___112038,out){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto___112038,out){
return (function (state_112004){
var state_val_112005 = (state_112004[(1)]);
if((state_val_112005 === (7))){
var inst_112000 = (state_112004[(2)]);
var state_112004__$1 = state_112004;
var statearr_112006_112039 = state_112004__$1;
(statearr_112006_112039[(2)] = inst_112000);

(statearr_112006_112039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112005 === (1))){
var inst_111967 = (new Array(n));
var inst_111968 = inst_111967;
var inst_111969 = (0);
var state_112004__$1 = (function (){var statearr_112007 = state_112004;
(statearr_112007[(7)] = inst_111969);

(statearr_112007[(8)] = inst_111968);

return statearr_112007;
})();
var statearr_112008_112040 = state_112004__$1;
(statearr_112008_112040[(2)] = null);

(statearr_112008_112040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112005 === (4))){
var inst_111972 = (state_112004[(9)]);
var inst_111972__$1 = (state_112004[(2)]);
var inst_111973 = (inst_111972__$1 == null);
var inst_111974 = cljs.core.not.call(null,inst_111973);
var state_112004__$1 = (function (){var statearr_112009 = state_112004;
(statearr_112009[(9)] = inst_111972__$1);

return statearr_112009;
})();
if(inst_111974){
var statearr_112010_112041 = state_112004__$1;
(statearr_112010_112041[(1)] = (5));

} else {
var statearr_112011_112042 = state_112004__$1;
(statearr_112011_112042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112005 === (15))){
var inst_111994 = (state_112004[(2)]);
var state_112004__$1 = state_112004;
var statearr_112012_112043 = state_112004__$1;
(statearr_112012_112043[(2)] = inst_111994);

(statearr_112012_112043[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112005 === (13))){
var state_112004__$1 = state_112004;
var statearr_112013_112044 = state_112004__$1;
(statearr_112013_112044[(2)] = null);

(statearr_112013_112044[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112005 === (6))){
var inst_111969 = (state_112004[(7)]);
var inst_111990 = (inst_111969 > (0));
var state_112004__$1 = state_112004;
if(cljs.core.truth_(inst_111990)){
var statearr_112014_112045 = state_112004__$1;
(statearr_112014_112045[(1)] = (12));

} else {
var statearr_112015_112046 = state_112004__$1;
(statearr_112015_112046[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112005 === (3))){
var inst_112002 = (state_112004[(2)]);
var state_112004__$1 = state_112004;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_112004__$1,inst_112002);
} else {
if((state_val_112005 === (12))){
var inst_111968 = (state_112004[(8)]);
var inst_111992 = cljs.core.vec.call(null,inst_111968);
var state_112004__$1 = state_112004;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_112004__$1,(15),out,inst_111992);
} else {
if((state_val_112005 === (2))){
var state_112004__$1 = state_112004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_112004__$1,(4),ch);
} else {
if((state_val_112005 === (11))){
var inst_111984 = (state_112004[(2)]);
var inst_111985 = (new Array(n));
var inst_111968 = inst_111985;
var inst_111969 = (0);
var state_112004__$1 = (function (){var statearr_112016 = state_112004;
(statearr_112016[(10)] = inst_111984);

(statearr_112016[(7)] = inst_111969);

(statearr_112016[(8)] = inst_111968);

return statearr_112016;
})();
var statearr_112017_112047 = state_112004__$1;
(statearr_112017_112047[(2)] = null);

(statearr_112017_112047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112005 === (9))){
var inst_111968 = (state_112004[(8)]);
var inst_111982 = cljs.core.vec.call(null,inst_111968);
var state_112004__$1 = state_112004;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_112004__$1,(11),out,inst_111982);
} else {
if((state_val_112005 === (5))){
var inst_111977 = (state_112004[(11)]);
var inst_111972 = (state_112004[(9)]);
var inst_111969 = (state_112004[(7)]);
var inst_111968 = (state_112004[(8)]);
var inst_111976 = (inst_111968[inst_111969] = inst_111972);
var inst_111977__$1 = (inst_111969 + (1));
var inst_111978 = (inst_111977__$1 < n);
var state_112004__$1 = (function (){var statearr_112018 = state_112004;
(statearr_112018[(11)] = inst_111977__$1);

(statearr_112018[(12)] = inst_111976);

return statearr_112018;
})();
if(cljs.core.truth_(inst_111978)){
var statearr_112019_112048 = state_112004__$1;
(statearr_112019_112048[(1)] = (8));

} else {
var statearr_112020_112049 = state_112004__$1;
(statearr_112020_112049[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112005 === (14))){
var inst_111997 = (state_112004[(2)]);
var inst_111998 = cljs.core.async.close_BANG_.call(null,out);
var state_112004__$1 = (function (){var statearr_112022 = state_112004;
(statearr_112022[(13)] = inst_111997);

return statearr_112022;
})();
var statearr_112023_112050 = state_112004__$1;
(statearr_112023_112050[(2)] = inst_111998);

(statearr_112023_112050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112005 === (10))){
var inst_111988 = (state_112004[(2)]);
var state_112004__$1 = state_112004;
var statearr_112024_112051 = state_112004__$1;
(statearr_112024_112051[(2)] = inst_111988);

(statearr_112024_112051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112005 === (8))){
var inst_111977 = (state_112004[(11)]);
var inst_111968 = (state_112004[(8)]);
var tmp112021 = inst_111968;
var inst_111968__$1 = tmp112021;
var inst_111969 = inst_111977;
var state_112004__$1 = (function (){var statearr_112025 = state_112004;
(statearr_112025[(7)] = inst_111969);

(statearr_112025[(8)] = inst_111968__$1);

return statearr_112025;
})();
var statearr_112026_112052 = state_112004__$1;
(statearr_112026_112052[(2)] = null);

(statearr_112026_112052[(1)] = (2));


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
});})(c__10446__auto___112038,out))
;
return ((function (switch__10425__auto__,c__10446__auto___112038,out){
return (function() {
var cljs$core$async$state_machine__10426__auto__ = null;
var cljs$core$async$state_machine__10426__auto____0 = (function (){
var statearr_112030 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_112030[(0)] = cljs$core$async$state_machine__10426__auto__);

(statearr_112030[(1)] = (1));

return statearr_112030;
});
var cljs$core$async$state_machine__10426__auto____1 = (function (state_112004){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_112004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e112031){if((e112031 instanceof Object)){
var ex__10429__auto__ = e112031;
var statearr_112032_112053 = state_112004;
(statearr_112032_112053[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_112004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e112031;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__112054 = state_112004;
state_112004 = G__112054;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
cljs$core$async$state_machine__10426__auto__ = function(state_112004){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10426__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10426__auto____1.call(this,state_112004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10426__auto____0;
cljs$core$async$state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10426__auto____1;
return cljs$core$async$state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto___112038,out))
})();
var state__10448__auto__ = (function (){var statearr_112033 = f__10447__auto__.call(null);
(statearr_112033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto___112038);

return statearr_112033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto___112038,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args112055 = [];
var len__9156__auto___112129 = arguments.length;
var i__9157__auto___112130 = (0);
while(true){
if((i__9157__auto___112130 < len__9156__auto___112129)){
args112055.push((arguments[i__9157__auto___112130]));

var G__112131 = (i__9157__auto___112130 + (1));
i__9157__auto___112130 = G__112131;
continue;
} else {
}
break;
}

var G__112057 = args112055.length;
switch (G__112057) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args112055.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10446__auto___112133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto___112133,out){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto___112133,out){
return (function (state_112099){
var state_val_112100 = (state_112099[(1)]);
if((state_val_112100 === (7))){
var inst_112095 = (state_112099[(2)]);
var state_112099__$1 = state_112099;
var statearr_112101_112134 = state_112099__$1;
(statearr_112101_112134[(2)] = inst_112095);

(statearr_112101_112134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112100 === (1))){
var inst_112058 = [];
var inst_112059 = inst_112058;
var inst_112060 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_112099__$1 = (function (){var statearr_112102 = state_112099;
(statearr_112102[(7)] = inst_112060);

(statearr_112102[(8)] = inst_112059);

return statearr_112102;
})();
var statearr_112103_112135 = state_112099__$1;
(statearr_112103_112135[(2)] = null);

(statearr_112103_112135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112100 === (4))){
var inst_112063 = (state_112099[(9)]);
var inst_112063__$1 = (state_112099[(2)]);
var inst_112064 = (inst_112063__$1 == null);
var inst_112065 = cljs.core.not.call(null,inst_112064);
var state_112099__$1 = (function (){var statearr_112104 = state_112099;
(statearr_112104[(9)] = inst_112063__$1);

return statearr_112104;
})();
if(inst_112065){
var statearr_112105_112136 = state_112099__$1;
(statearr_112105_112136[(1)] = (5));

} else {
var statearr_112106_112137 = state_112099__$1;
(statearr_112106_112137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112100 === (15))){
var inst_112089 = (state_112099[(2)]);
var state_112099__$1 = state_112099;
var statearr_112107_112138 = state_112099__$1;
(statearr_112107_112138[(2)] = inst_112089);

(statearr_112107_112138[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112100 === (13))){
var state_112099__$1 = state_112099;
var statearr_112108_112139 = state_112099__$1;
(statearr_112108_112139[(2)] = null);

(statearr_112108_112139[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112100 === (6))){
var inst_112059 = (state_112099[(8)]);
var inst_112084 = inst_112059.length;
var inst_112085 = (inst_112084 > (0));
var state_112099__$1 = state_112099;
if(cljs.core.truth_(inst_112085)){
var statearr_112109_112140 = state_112099__$1;
(statearr_112109_112140[(1)] = (12));

} else {
var statearr_112110_112141 = state_112099__$1;
(statearr_112110_112141[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112100 === (3))){
var inst_112097 = (state_112099[(2)]);
var state_112099__$1 = state_112099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_112099__$1,inst_112097);
} else {
if((state_val_112100 === (12))){
var inst_112059 = (state_112099[(8)]);
var inst_112087 = cljs.core.vec.call(null,inst_112059);
var state_112099__$1 = state_112099;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_112099__$1,(15),out,inst_112087);
} else {
if((state_val_112100 === (2))){
var state_112099__$1 = state_112099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_112099__$1,(4),ch);
} else {
if((state_val_112100 === (11))){
var inst_112063 = (state_112099[(9)]);
var inst_112067 = (state_112099[(10)]);
var inst_112077 = (state_112099[(2)]);
var inst_112078 = [];
var inst_112079 = inst_112078.push(inst_112063);
var inst_112059 = inst_112078;
var inst_112060 = inst_112067;
var state_112099__$1 = (function (){var statearr_112111 = state_112099;
(statearr_112111[(11)] = inst_112077);

(statearr_112111[(7)] = inst_112060);

(statearr_112111[(8)] = inst_112059);

(statearr_112111[(12)] = inst_112079);

return statearr_112111;
})();
var statearr_112112_112142 = state_112099__$1;
(statearr_112112_112142[(2)] = null);

(statearr_112112_112142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112100 === (9))){
var inst_112059 = (state_112099[(8)]);
var inst_112075 = cljs.core.vec.call(null,inst_112059);
var state_112099__$1 = state_112099;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_112099__$1,(11),out,inst_112075);
} else {
if((state_val_112100 === (5))){
var inst_112060 = (state_112099[(7)]);
var inst_112063 = (state_112099[(9)]);
var inst_112067 = (state_112099[(10)]);
var inst_112067__$1 = f.call(null,inst_112063);
var inst_112068 = cljs.core._EQ_.call(null,inst_112067__$1,inst_112060);
var inst_112069 = cljs.core.keyword_identical_QMARK_.call(null,inst_112060,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_112070 = (inst_112068) || (inst_112069);
var state_112099__$1 = (function (){var statearr_112113 = state_112099;
(statearr_112113[(10)] = inst_112067__$1);

return statearr_112113;
})();
if(cljs.core.truth_(inst_112070)){
var statearr_112114_112143 = state_112099__$1;
(statearr_112114_112143[(1)] = (8));

} else {
var statearr_112115_112144 = state_112099__$1;
(statearr_112115_112144[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112100 === (14))){
var inst_112092 = (state_112099[(2)]);
var inst_112093 = cljs.core.async.close_BANG_.call(null,out);
var state_112099__$1 = (function (){var statearr_112117 = state_112099;
(statearr_112117[(13)] = inst_112092);

return statearr_112117;
})();
var statearr_112118_112145 = state_112099__$1;
(statearr_112118_112145[(2)] = inst_112093);

(statearr_112118_112145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112100 === (10))){
var inst_112082 = (state_112099[(2)]);
var state_112099__$1 = state_112099;
var statearr_112119_112146 = state_112099__$1;
(statearr_112119_112146[(2)] = inst_112082);

(statearr_112119_112146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112100 === (8))){
var inst_112063 = (state_112099[(9)]);
var inst_112067 = (state_112099[(10)]);
var inst_112059 = (state_112099[(8)]);
var inst_112072 = inst_112059.push(inst_112063);
var tmp112116 = inst_112059;
var inst_112059__$1 = tmp112116;
var inst_112060 = inst_112067;
var state_112099__$1 = (function (){var statearr_112120 = state_112099;
(statearr_112120[(7)] = inst_112060);

(statearr_112120[(8)] = inst_112059__$1);

(statearr_112120[(14)] = inst_112072);

return statearr_112120;
})();
var statearr_112121_112147 = state_112099__$1;
(statearr_112121_112147[(2)] = null);

(statearr_112121_112147[(1)] = (2));


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
});})(c__10446__auto___112133,out))
;
return ((function (switch__10425__auto__,c__10446__auto___112133,out){
return (function() {
var cljs$core$async$state_machine__10426__auto__ = null;
var cljs$core$async$state_machine__10426__auto____0 = (function (){
var statearr_112125 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_112125[(0)] = cljs$core$async$state_machine__10426__auto__);

(statearr_112125[(1)] = (1));

return statearr_112125;
});
var cljs$core$async$state_machine__10426__auto____1 = (function (state_112099){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_112099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e112126){if((e112126 instanceof Object)){
var ex__10429__auto__ = e112126;
var statearr_112127_112148 = state_112099;
(statearr_112127_112148[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_112099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e112126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__112149 = state_112099;
state_112099 = G__112149;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
cljs$core$async$state_machine__10426__auto__ = function(state_112099){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10426__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10426__auto____1.call(this,state_112099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10426__auto____0;
cljs$core$async$state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10426__auto____1;
return cljs$core$async$state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto___112133,out))
})();
var state__10448__auto__ = (function (){var statearr_112128 = f__10447__auto__.call(null);
(statearr_112128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto___112133);

return statearr_112128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto___112133,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map