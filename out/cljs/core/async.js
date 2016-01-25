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
var args246178 = [];
var len__9156__auto___246184 = arguments.length;
var i__9157__auto___246185 = (0);
while(true){
if((i__9157__auto___246185 < len__9156__auto___246184)){
args246178.push((arguments[i__9157__auto___246185]));

var G__246186 = (i__9157__auto___246185 + (1));
i__9157__auto___246185 = G__246186;
continue;
} else {
}
break;
}

var G__246180 = args246178.length;
switch (G__246180) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args246178.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async246181 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async246181 = (function (f,blockable,meta246182){
this.f = f;
this.blockable = blockable;
this.meta246182 = meta246182;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async246181.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_246183,meta246182__$1){
var self__ = this;
var _246183__$1 = this;
return (new cljs.core.async.t_cljs$core$async246181(self__.f,self__.blockable,meta246182__$1));
});

cljs.core.async.t_cljs$core$async246181.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_246183){
var self__ = this;
var _246183__$1 = this;
return self__.meta246182;
});

cljs.core.async.t_cljs$core$async246181.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async246181.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async246181.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async246181.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async246181.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta246182","meta246182",-2035369548,null)], null);
});

cljs.core.async.t_cljs$core$async246181.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async246181.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async246181";

cljs.core.async.t_cljs$core$async246181.cljs$lang$ctorPrWriter = (function (this__8696__auto__,writer__8697__auto__,opt__8698__auto__){
return cljs.core._write.call(null,writer__8697__auto__,"cljs.core.async/t_cljs$core$async246181");
});

cljs.core.async.__GT_t_cljs$core$async246181 = (function cljs$core$async$__GT_t_cljs$core$async246181(f__$1,blockable__$1,meta246182){
return (new cljs.core.async.t_cljs$core$async246181(f__$1,blockable__$1,meta246182));
});

}

return (new cljs.core.async.t_cljs$core$async246181(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args246190 = [];
var len__9156__auto___246193 = arguments.length;
var i__9157__auto___246194 = (0);
while(true){
if((i__9157__auto___246194 < len__9156__auto___246193)){
args246190.push((arguments[i__9157__auto___246194]));

var G__246195 = (i__9157__auto___246194 + (1));
i__9157__auto___246194 = G__246195;
continue;
} else {
}
break;
}

var G__246192 = args246190.length;
switch (G__246192) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args246190.length)].join('')));

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
var args246197 = [];
var len__9156__auto___246200 = arguments.length;
var i__9157__auto___246201 = (0);
while(true){
if((i__9157__auto___246201 < len__9156__auto___246200)){
args246197.push((arguments[i__9157__auto___246201]));

var G__246202 = (i__9157__auto___246201 + (1));
i__9157__auto___246201 = G__246202;
continue;
} else {
}
break;
}

var G__246199 = args246197.length;
switch (G__246199) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args246197.length)].join('')));

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
var args246204 = [];
var len__9156__auto___246207 = arguments.length;
var i__9157__auto___246208 = (0);
while(true){
if((i__9157__auto___246208 < len__9156__auto___246207)){
args246204.push((arguments[i__9157__auto___246208]));

var G__246209 = (i__9157__auto___246208 + (1));
i__9157__auto___246208 = G__246209;
continue;
} else {
}
break;
}

var G__246206 = args246204.length;
switch (G__246206) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args246204.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_246211 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_246211);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_246211,ret){
return (function (){
return fn1.call(null,val_246211);
});})(val_246211,ret))
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
var args246212 = [];
var len__9156__auto___246215 = arguments.length;
var i__9157__auto___246216 = (0);
while(true){
if((i__9157__auto___246216 < len__9156__auto___246215)){
args246212.push((arguments[i__9157__auto___246216]));

var G__246217 = (i__9157__auto___246216 + (1));
i__9157__auto___246216 = G__246217;
continue;
} else {
}
break;
}

var G__246214 = args246212.length;
switch (G__246214) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args246212.length)].join('')));

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
var n__9001__auto___246219 = n;
var x_246220 = (0);
while(true){
if((x_246220 < n__9001__auto___246219)){
(a[x_246220] = (0));

var G__246221 = (x_246220 + (1));
x_246220 = G__246221;
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

var G__246222 = (i + (1));
i = G__246222;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async246226 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async246226 = (function (alt_flag,flag,meta246227){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta246227 = meta246227;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async246226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_246228,meta246227__$1){
var self__ = this;
var _246228__$1 = this;
return (new cljs.core.async.t_cljs$core$async246226(self__.alt_flag,self__.flag,meta246227__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async246226.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_246228){
var self__ = this;
var _246228__$1 = this;
return self__.meta246227;
});})(flag))
;

cljs.core.async.t_cljs$core$async246226.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async246226.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async246226.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async246226.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async246226.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta246227","meta246227",934279336,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async246226.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async246226.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async246226";

cljs.core.async.t_cljs$core$async246226.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8696__auto__,writer__8697__auto__,opt__8698__auto__){
return cljs.core._write.call(null,writer__8697__auto__,"cljs.core.async/t_cljs$core$async246226");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async246226 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async246226(alt_flag__$1,flag__$1,meta246227){
return (new cljs.core.async.t_cljs$core$async246226(alt_flag__$1,flag__$1,meta246227));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async246226(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async246232 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async246232 = (function (alt_handler,flag,cb,meta246233){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta246233 = meta246233;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async246232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_246234,meta246233__$1){
var self__ = this;
var _246234__$1 = this;
return (new cljs.core.async.t_cljs$core$async246232(self__.alt_handler,self__.flag,self__.cb,meta246233__$1));
});

cljs.core.async.t_cljs$core$async246232.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_246234){
var self__ = this;
var _246234__$1 = this;
return self__.meta246233;
});

cljs.core.async.t_cljs$core$async246232.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async246232.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async246232.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async246232.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async246232.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta246233","meta246233",-1434217091,null)], null);
});

cljs.core.async.t_cljs$core$async246232.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async246232.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async246232";

cljs.core.async.t_cljs$core$async246232.cljs$lang$ctorPrWriter = (function (this__8696__auto__,writer__8697__auto__,opt__8698__auto__){
return cljs.core._write.call(null,writer__8697__auto__,"cljs.core.async/t_cljs$core$async246232");
});

cljs.core.async.__GT_t_cljs$core$async246232 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async246232(alt_handler__$1,flag__$1,cb__$1,meta246233){
return (new cljs.core.async.t_cljs$core$async246232(alt_handler__$1,flag__$1,cb__$1,meta246233));
});

}

return (new cljs.core.async.t_cljs$core$async246232(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__246235_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__246235_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__246236_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__246236_SHARP_,port], null));
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
var G__246237 = (i + (1));
i = G__246237;
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
var len__9156__auto___246243 = arguments.length;
var i__9157__auto___246244 = (0);
while(true){
if((i__9157__auto___246244 < len__9156__auto___246243)){
args__9163__auto__.push((arguments[i__9157__auto___246244]));

var G__246245 = (i__9157__auto___246244 + (1));
i__9157__auto___246244 = G__246245;
continue;
} else {
}
break;
}

var argseq__9164__auto__ = ((((1) < args__9163__auto__.length))?(new cljs.core.IndexedSeq(args__9163__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9164__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__246240){
var map__246241 = p__246240;
var map__246241__$1 = ((((!((map__246241 == null)))?((((map__246241.cljs$lang$protocol_mask$partition0$ & (64))) || (map__246241.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__246241):map__246241);
var opts = map__246241__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq246238){
var G__246239 = cljs.core.first.call(null,seq246238);
var seq246238__$1 = cljs.core.next.call(null,seq246238);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__246239,seq246238__$1);
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
var args246246 = [];
var len__9156__auto___246296 = arguments.length;
var i__9157__auto___246297 = (0);
while(true){
if((i__9157__auto___246297 < len__9156__auto___246296)){
args246246.push((arguments[i__9157__auto___246297]));

var G__246298 = (i__9157__auto___246297 + (1));
i__9157__auto___246297 = G__246298;
continue;
} else {
}
break;
}

var G__246248 = args246246.length;
switch (G__246248) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args246246.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10446__auto___246300 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto___246300){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto___246300){
return (function (state_246272){
var state_val_246273 = (state_246272[(1)]);
if((state_val_246273 === (7))){
var inst_246268 = (state_246272[(2)]);
var state_246272__$1 = state_246272;
var statearr_246274_246301 = state_246272__$1;
(statearr_246274_246301[(2)] = inst_246268);

(statearr_246274_246301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246273 === (1))){
var state_246272__$1 = state_246272;
var statearr_246275_246302 = state_246272__$1;
(statearr_246275_246302[(2)] = null);

(statearr_246275_246302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246273 === (4))){
var inst_246251 = (state_246272[(7)]);
var inst_246251__$1 = (state_246272[(2)]);
var inst_246252 = (inst_246251__$1 == null);
var state_246272__$1 = (function (){var statearr_246276 = state_246272;
(statearr_246276[(7)] = inst_246251__$1);

return statearr_246276;
})();
if(cljs.core.truth_(inst_246252)){
var statearr_246277_246303 = state_246272__$1;
(statearr_246277_246303[(1)] = (5));

} else {
var statearr_246278_246304 = state_246272__$1;
(statearr_246278_246304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246273 === (13))){
var state_246272__$1 = state_246272;
var statearr_246279_246305 = state_246272__$1;
(statearr_246279_246305[(2)] = null);

(statearr_246279_246305[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246273 === (6))){
var inst_246251 = (state_246272[(7)]);
var state_246272__$1 = state_246272;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_246272__$1,(11),to,inst_246251);
} else {
if((state_val_246273 === (3))){
var inst_246270 = (state_246272[(2)]);
var state_246272__$1 = state_246272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_246272__$1,inst_246270);
} else {
if((state_val_246273 === (12))){
var state_246272__$1 = state_246272;
var statearr_246280_246306 = state_246272__$1;
(statearr_246280_246306[(2)] = null);

(statearr_246280_246306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246273 === (2))){
var state_246272__$1 = state_246272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_246272__$1,(4),from);
} else {
if((state_val_246273 === (11))){
var inst_246261 = (state_246272[(2)]);
var state_246272__$1 = state_246272;
if(cljs.core.truth_(inst_246261)){
var statearr_246281_246307 = state_246272__$1;
(statearr_246281_246307[(1)] = (12));

} else {
var statearr_246282_246308 = state_246272__$1;
(statearr_246282_246308[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246273 === (9))){
var state_246272__$1 = state_246272;
var statearr_246283_246309 = state_246272__$1;
(statearr_246283_246309[(2)] = null);

(statearr_246283_246309[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246273 === (5))){
var state_246272__$1 = state_246272;
if(cljs.core.truth_(close_QMARK_)){
var statearr_246284_246310 = state_246272__$1;
(statearr_246284_246310[(1)] = (8));

} else {
var statearr_246285_246311 = state_246272__$1;
(statearr_246285_246311[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246273 === (14))){
var inst_246266 = (state_246272[(2)]);
var state_246272__$1 = state_246272;
var statearr_246286_246312 = state_246272__$1;
(statearr_246286_246312[(2)] = inst_246266);

(statearr_246286_246312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246273 === (10))){
var inst_246258 = (state_246272[(2)]);
var state_246272__$1 = state_246272;
var statearr_246287_246313 = state_246272__$1;
(statearr_246287_246313[(2)] = inst_246258);

(statearr_246287_246313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246273 === (8))){
var inst_246255 = cljs.core.async.close_BANG_.call(null,to);
var state_246272__$1 = state_246272;
var statearr_246288_246314 = state_246272__$1;
(statearr_246288_246314[(2)] = inst_246255);

(statearr_246288_246314[(1)] = (10));


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
});})(c__10446__auto___246300))
;
return ((function (switch__10425__auto__,c__10446__auto___246300){
return (function() {
var cljs$core$async$state_machine__10426__auto__ = null;
var cljs$core$async$state_machine__10426__auto____0 = (function (){
var statearr_246292 = [null,null,null,null,null,null,null,null];
(statearr_246292[(0)] = cljs$core$async$state_machine__10426__auto__);

(statearr_246292[(1)] = (1));

return statearr_246292;
});
var cljs$core$async$state_machine__10426__auto____1 = (function (state_246272){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_246272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e246293){if((e246293 instanceof Object)){
var ex__10429__auto__ = e246293;
var statearr_246294_246315 = state_246272;
(statearr_246294_246315[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_246272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e246293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__246316 = state_246272;
state_246272 = G__246316;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
cljs$core$async$state_machine__10426__auto__ = function(state_246272){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10426__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10426__auto____1.call(this,state_246272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10426__auto____0;
cljs$core$async$state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10426__auto____1;
return cljs$core$async$state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto___246300))
})();
var state__10448__auto__ = (function (){var statearr_246295 = f__10447__auto__.call(null);
(statearr_246295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto___246300);

return statearr_246295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto___246300))
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
return (function (p__246500){
var vec__246501 = p__246500;
var v = cljs.core.nth.call(null,vec__246501,(0),null);
var p = cljs.core.nth.call(null,vec__246501,(1),null);
var job = vec__246501;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__10446__auto___246683 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto___246683,res,vec__246501,v,p,job,jobs,results){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto___246683,res,vec__246501,v,p,job,jobs,results){
return (function (state_246506){
var state_val_246507 = (state_246506[(1)]);
if((state_val_246507 === (1))){
var state_246506__$1 = state_246506;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_246506__$1,(2),res,v);
} else {
if((state_val_246507 === (2))){
var inst_246503 = (state_246506[(2)]);
var inst_246504 = cljs.core.async.close_BANG_.call(null,res);
var state_246506__$1 = (function (){var statearr_246508 = state_246506;
(statearr_246508[(7)] = inst_246503);

return statearr_246508;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_246506__$1,inst_246504);
} else {
return null;
}
}
});})(c__10446__auto___246683,res,vec__246501,v,p,job,jobs,results))
;
return ((function (switch__10425__auto__,c__10446__auto___246683,res,vec__246501,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____0 = (function (){
var statearr_246512 = [null,null,null,null,null,null,null,null];
(statearr_246512[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__);

(statearr_246512[(1)] = (1));

return statearr_246512;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____1 = (function (state_246506){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_246506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e246513){if((e246513 instanceof Object)){
var ex__10429__auto__ = e246513;
var statearr_246514_246684 = state_246506;
(statearr_246514_246684[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_246506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e246513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__246685 = state_246506;
state_246506 = G__246685;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__ = function(state_246506){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____1.call(this,state_246506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto___246683,res,vec__246501,v,p,job,jobs,results))
})();
var state__10448__auto__ = (function (){var statearr_246515 = f__10447__auto__.call(null);
(statearr_246515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto___246683);

return statearr_246515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto___246683,res,vec__246501,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__246516){
var vec__246517 = p__246516;
var v = cljs.core.nth.call(null,vec__246517,(0),null);
var p = cljs.core.nth.call(null,vec__246517,(1),null);
var job = vec__246517;
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
var n__9001__auto___246686 = n;
var __246687 = (0);
while(true){
if((__246687 < n__9001__auto___246686)){
var G__246518_246688 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__246518_246688) {
case "compute":
var c__10446__auto___246690 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__246687,c__10446__auto___246690,G__246518_246688,n__9001__auto___246686,jobs,results,process,async){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (__246687,c__10446__auto___246690,G__246518_246688,n__9001__auto___246686,jobs,results,process,async){
return (function (state_246531){
var state_val_246532 = (state_246531[(1)]);
if((state_val_246532 === (1))){
var state_246531__$1 = state_246531;
var statearr_246533_246691 = state_246531__$1;
(statearr_246533_246691[(2)] = null);

(statearr_246533_246691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246532 === (2))){
var state_246531__$1 = state_246531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_246531__$1,(4),jobs);
} else {
if((state_val_246532 === (3))){
var inst_246529 = (state_246531[(2)]);
var state_246531__$1 = state_246531;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_246531__$1,inst_246529);
} else {
if((state_val_246532 === (4))){
var inst_246521 = (state_246531[(2)]);
var inst_246522 = process.call(null,inst_246521);
var state_246531__$1 = state_246531;
if(cljs.core.truth_(inst_246522)){
var statearr_246534_246692 = state_246531__$1;
(statearr_246534_246692[(1)] = (5));

} else {
var statearr_246535_246693 = state_246531__$1;
(statearr_246535_246693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246532 === (5))){
var state_246531__$1 = state_246531;
var statearr_246536_246694 = state_246531__$1;
(statearr_246536_246694[(2)] = null);

(statearr_246536_246694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246532 === (6))){
var state_246531__$1 = state_246531;
var statearr_246537_246695 = state_246531__$1;
(statearr_246537_246695[(2)] = null);

(statearr_246537_246695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246532 === (7))){
var inst_246527 = (state_246531[(2)]);
var state_246531__$1 = state_246531;
var statearr_246538_246696 = state_246531__$1;
(statearr_246538_246696[(2)] = inst_246527);

(statearr_246538_246696[(1)] = (3));


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
});})(__246687,c__10446__auto___246690,G__246518_246688,n__9001__auto___246686,jobs,results,process,async))
;
return ((function (__246687,switch__10425__auto__,c__10446__auto___246690,G__246518_246688,n__9001__auto___246686,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____0 = (function (){
var statearr_246542 = [null,null,null,null,null,null,null];
(statearr_246542[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__);

(statearr_246542[(1)] = (1));

return statearr_246542;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____1 = (function (state_246531){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_246531);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e246543){if((e246543 instanceof Object)){
var ex__10429__auto__ = e246543;
var statearr_246544_246697 = state_246531;
(statearr_246544_246697[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_246531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e246543;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__246698 = state_246531;
state_246531 = G__246698;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__ = function(state_246531){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____1.call(this,state_246531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__;
})()
;})(__246687,switch__10425__auto__,c__10446__auto___246690,G__246518_246688,n__9001__auto___246686,jobs,results,process,async))
})();
var state__10448__auto__ = (function (){var statearr_246545 = f__10447__auto__.call(null);
(statearr_246545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto___246690);

return statearr_246545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(__246687,c__10446__auto___246690,G__246518_246688,n__9001__auto___246686,jobs,results,process,async))
);


break;
case "async":
var c__10446__auto___246699 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__246687,c__10446__auto___246699,G__246518_246688,n__9001__auto___246686,jobs,results,process,async){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (__246687,c__10446__auto___246699,G__246518_246688,n__9001__auto___246686,jobs,results,process,async){
return (function (state_246558){
var state_val_246559 = (state_246558[(1)]);
if((state_val_246559 === (1))){
var state_246558__$1 = state_246558;
var statearr_246560_246700 = state_246558__$1;
(statearr_246560_246700[(2)] = null);

(statearr_246560_246700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246559 === (2))){
var state_246558__$1 = state_246558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_246558__$1,(4),jobs);
} else {
if((state_val_246559 === (3))){
var inst_246556 = (state_246558[(2)]);
var state_246558__$1 = state_246558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_246558__$1,inst_246556);
} else {
if((state_val_246559 === (4))){
var inst_246548 = (state_246558[(2)]);
var inst_246549 = async.call(null,inst_246548);
var state_246558__$1 = state_246558;
if(cljs.core.truth_(inst_246549)){
var statearr_246561_246701 = state_246558__$1;
(statearr_246561_246701[(1)] = (5));

} else {
var statearr_246562_246702 = state_246558__$1;
(statearr_246562_246702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246559 === (5))){
var state_246558__$1 = state_246558;
var statearr_246563_246703 = state_246558__$1;
(statearr_246563_246703[(2)] = null);

(statearr_246563_246703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246559 === (6))){
var state_246558__$1 = state_246558;
var statearr_246564_246704 = state_246558__$1;
(statearr_246564_246704[(2)] = null);

(statearr_246564_246704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246559 === (7))){
var inst_246554 = (state_246558[(2)]);
var state_246558__$1 = state_246558;
var statearr_246565_246705 = state_246558__$1;
(statearr_246565_246705[(2)] = inst_246554);

(statearr_246565_246705[(1)] = (3));


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
});})(__246687,c__10446__auto___246699,G__246518_246688,n__9001__auto___246686,jobs,results,process,async))
;
return ((function (__246687,switch__10425__auto__,c__10446__auto___246699,G__246518_246688,n__9001__auto___246686,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____0 = (function (){
var statearr_246569 = [null,null,null,null,null,null,null];
(statearr_246569[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__);

(statearr_246569[(1)] = (1));

return statearr_246569;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____1 = (function (state_246558){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_246558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e246570){if((e246570 instanceof Object)){
var ex__10429__auto__ = e246570;
var statearr_246571_246706 = state_246558;
(statearr_246571_246706[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_246558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e246570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__246707 = state_246558;
state_246558 = G__246707;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__ = function(state_246558){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____1.call(this,state_246558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__;
})()
;})(__246687,switch__10425__auto__,c__10446__auto___246699,G__246518_246688,n__9001__auto___246686,jobs,results,process,async))
})();
var state__10448__auto__ = (function (){var statearr_246572 = f__10447__auto__.call(null);
(statearr_246572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto___246699);

return statearr_246572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(__246687,c__10446__auto___246699,G__246518_246688,n__9001__auto___246686,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__246708 = (__246687 + (1));
__246687 = G__246708;
continue;
} else {
}
break;
}

var c__10446__auto___246709 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto___246709,jobs,results,process,async){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto___246709,jobs,results,process,async){
return (function (state_246594){
var state_val_246595 = (state_246594[(1)]);
if((state_val_246595 === (1))){
var state_246594__$1 = state_246594;
var statearr_246596_246710 = state_246594__$1;
(statearr_246596_246710[(2)] = null);

(statearr_246596_246710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246595 === (2))){
var state_246594__$1 = state_246594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_246594__$1,(4),from);
} else {
if((state_val_246595 === (3))){
var inst_246592 = (state_246594[(2)]);
var state_246594__$1 = state_246594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_246594__$1,inst_246592);
} else {
if((state_val_246595 === (4))){
var inst_246575 = (state_246594[(7)]);
var inst_246575__$1 = (state_246594[(2)]);
var inst_246576 = (inst_246575__$1 == null);
var state_246594__$1 = (function (){var statearr_246597 = state_246594;
(statearr_246597[(7)] = inst_246575__$1);

return statearr_246597;
})();
if(cljs.core.truth_(inst_246576)){
var statearr_246598_246711 = state_246594__$1;
(statearr_246598_246711[(1)] = (5));

} else {
var statearr_246599_246712 = state_246594__$1;
(statearr_246599_246712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246595 === (5))){
var inst_246578 = cljs.core.async.close_BANG_.call(null,jobs);
var state_246594__$1 = state_246594;
var statearr_246600_246713 = state_246594__$1;
(statearr_246600_246713[(2)] = inst_246578);

(statearr_246600_246713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246595 === (6))){
var inst_246575 = (state_246594[(7)]);
var inst_246580 = (state_246594[(8)]);
var inst_246580__$1 = cljs.core.async.chan.call(null,(1));
var inst_246581 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_246582 = [inst_246575,inst_246580__$1];
var inst_246583 = (new cljs.core.PersistentVector(null,2,(5),inst_246581,inst_246582,null));
var state_246594__$1 = (function (){var statearr_246601 = state_246594;
(statearr_246601[(8)] = inst_246580__$1);

return statearr_246601;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_246594__$1,(8),jobs,inst_246583);
} else {
if((state_val_246595 === (7))){
var inst_246590 = (state_246594[(2)]);
var state_246594__$1 = state_246594;
var statearr_246602_246714 = state_246594__$1;
(statearr_246602_246714[(2)] = inst_246590);

(statearr_246602_246714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246595 === (8))){
var inst_246580 = (state_246594[(8)]);
var inst_246585 = (state_246594[(2)]);
var state_246594__$1 = (function (){var statearr_246603 = state_246594;
(statearr_246603[(9)] = inst_246585);

return statearr_246603;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_246594__$1,(9),results,inst_246580);
} else {
if((state_val_246595 === (9))){
var inst_246587 = (state_246594[(2)]);
var state_246594__$1 = (function (){var statearr_246604 = state_246594;
(statearr_246604[(10)] = inst_246587);

return statearr_246604;
})();
var statearr_246605_246715 = state_246594__$1;
(statearr_246605_246715[(2)] = null);

(statearr_246605_246715[(1)] = (2));


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
});})(c__10446__auto___246709,jobs,results,process,async))
;
return ((function (switch__10425__auto__,c__10446__auto___246709,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____0 = (function (){
var statearr_246609 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_246609[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__);

(statearr_246609[(1)] = (1));

return statearr_246609;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____1 = (function (state_246594){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_246594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e246610){if((e246610 instanceof Object)){
var ex__10429__auto__ = e246610;
var statearr_246611_246716 = state_246594;
(statearr_246611_246716[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_246594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e246610;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__246717 = state_246594;
state_246594 = G__246717;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__ = function(state_246594){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____1.call(this,state_246594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto___246709,jobs,results,process,async))
})();
var state__10448__auto__ = (function (){var statearr_246612 = f__10447__auto__.call(null);
(statearr_246612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto___246709);

return statearr_246612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto___246709,jobs,results,process,async))
);


var c__10446__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto__,jobs,results,process,async){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto__,jobs,results,process,async){
return (function (state_246650){
var state_val_246651 = (state_246650[(1)]);
if((state_val_246651 === (7))){
var inst_246646 = (state_246650[(2)]);
var state_246650__$1 = state_246650;
var statearr_246652_246718 = state_246650__$1;
(statearr_246652_246718[(2)] = inst_246646);

(statearr_246652_246718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246651 === (20))){
var state_246650__$1 = state_246650;
var statearr_246653_246719 = state_246650__$1;
(statearr_246653_246719[(2)] = null);

(statearr_246653_246719[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246651 === (1))){
var state_246650__$1 = state_246650;
var statearr_246654_246720 = state_246650__$1;
(statearr_246654_246720[(2)] = null);

(statearr_246654_246720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246651 === (4))){
var inst_246615 = (state_246650[(7)]);
var inst_246615__$1 = (state_246650[(2)]);
var inst_246616 = (inst_246615__$1 == null);
var state_246650__$1 = (function (){var statearr_246655 = state_246650;
(statearr_246655[(7)] = inst_246615__$1);

return statearr_246655;
})();
if(cljs.core.truth_(inst_246616)){
var statearr_246656_246721 = state_246650__$1;
(statearr_246656_246721[(1)] = (5));

} else {
var statearr_246657_246722 = state_246650__$1;
(statearr_246657_246722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246651 === (15))){
var inst_246628 = (state_246650[(8)]);
var state_246650__$1 = state_246650;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_246650__$1,(18),to,inst_246628);
} else {
if((state_val_246651 === (21))){
var inst_246641 = (state_246650[(2)]);
var state_246650__$1 = state_246650;
var statearr_246658_246723 = state_246650__$1;
(statearr_246658_246723[(2)] = inst_246641);

(statearr_246658_246723[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246651 === (13))){
var inst_246643 = (state_246650[(2)]);
var state_246650__$1 = (function (){var statearr_246659 = state_246650;
(statearr_246659[(9)] = inst_246643);

return statearr_246659;
})();
var statearr_246660_246724 = state_246650__$1;
(statearr_246660_246724[(2)] = null);

(statearr_246660_246724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246651 === (6))){
var inst_246615 = (state_246650[(7)]);
var state_246650__$1 = state_246650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_246650__$1,(11),inst_246615);
} else {
if((state_val_246651 === (17))){
var inst_246636 = (state_246650[(2)]);
var state_246650__$1 = state_246650;
if(cljs.core.truth_(inst_246636)){
var statearr_246661_246725 = state_246650__$1;
(statearr_246661_246725[(1)] = (19));

} else {
var statearr_246662_246726 = state_246650__$1;
(statearr_246662_246726[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246651 === (3))){
var inst_246648 = (state_246650[(2)]);
var state_246650__$1 = state_246650;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_246650__$1,inst_246648);
} else {
if((state_val_246651 === (12))){
var inst_246625 = (state_246650[(10)]);
var state_246650__$1 = state_246650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_246650__$1,(14),inst_246625);
} else {
if((state_val_246651 === (2))){
var state_246650__$1 = state_246650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_246650__$1,(4),results);
} else {
if((state_val_246651 === (19))){
var state_246650__$1 = state_246650;
var statearr_246663_246727 = state_246650__$1;
(statearr_246663_246727[(2)] = null);

(statearr_246663_246727[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246651 === (11))){
var inst_246625 = (state_246650[(2)]);
var state_246650__$1 = (function (){var statearr_246664 = state_246650;
(statearr_246664[(10)] = inst_246625);

return statearr_246664;
})();
var statearr_246665_246728 = state_246650__$1;
(statearr_246665_246728[(2)] = null);

(statearr_246665_246728[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246651 === (9))){
var state_246650__$1 = state_246650;
var statearr_246666_246729 = state_246650__$1;
(statearr_246666_246729[(2)] = null);

(statearr_246666_246729[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246651 === (5))){
var state_246650__$1 = state_246650;
if(cljs.core.truth_(close_QMARK_)){
var statearr_246667_246730 = state_246650__$1;
(statearr_246667_246730[(1)] = (8));

} else {
var statearr_246668_246731 = state_246650__$1;
(statearr_246668_246731[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246651 === (14))){
var inst_246628 = (state_246650[(8)]);
var inst_246630 = (state_246650[(11)]);
var inst_246628__$1 = (state_246650[(2)]);
var inst_246629 = (inst_246628__$1 == null);
var inst_246630__$1 = cljs.core.not.call(null,inst_246629);
var state_246650__$1 = (function (){var statearr_246669 = state_246650;
(statearr_246669[(8)] = inst_246628__$1);

(statearr_246669[(11)] = inst_246630__$1);

return statearr_246669;
})();
if(inst_246630__$1){
var statearr_246670_246732 = state_246650__$1;
(statearr_246670_246732[(1)] = (15));

} else {
var statearr_246671_246733 = state_246650__$1;
(statearr_246671_246733[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246651 === (16))){
var inst_246630 = (state_246650[(11)]);
var state_246650__$1 = state_246650;
var statearr_246672_246734 = state_246650__$1;
(statearr_246672_246734[(2)] = inst_246630);

(statearr_246672_246734[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246651 === (10))){
var inst_246622 = (state_246650[(2)]);
var state_246650__$1 = state_246650;
var statearr_246673_246735 = state_246650__$1;
(statearr_246673_246735[(2)] = inst_246622);

(statearr_246673_246735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246651 === (18))){
var inst_246633 = (state_246650[(2)]);
var state_246650__$1 = state_246650;
var statearr_246674_246736 = state_246650__$1;
(statearr_246674_246736[(2)] = inst_246633);

(statearr_246674_246736[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246651 === (8))){
var inst_246619 = cljs.core.async.close_BANG_.call(null,to);
var state_246650__$1 = state_246650;
var statearr_246675_246737 = state_246650__$1;
(statearr_246675_246737[(2)] = inst_246619);

(statearr_246675_246737[(1)] = (10));


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
var statearr_246679 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_246679[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__);

(statearr_246679[(1)] = (1));

return statearr_246679;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____1 = (function (state_246650){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_246650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e246680){if((e246680 instanceof Object)){
var ex__10429__auto__ = e246680;
var statearr_246681_246738 = state_246650;
(statearr_246681_246738[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_246650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e246680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__246739 = state_246650;
state_246650 = G__246739;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__ = function(state_246650){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____1.call(this,state_246650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10426__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__,jobs,results,process,async))
})();
var state__10448__auto__ = (function (){var statearr_246682 = f__10447__auto__.call(null);
(statearr_246682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_246682;
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
var args246740 = [];
var len__9156__auto___246743 = arguments.length;
var i__9157__auto___246744 = (0);
while(true){
if((i__9157__auto___246744 < len__9156__auto___246743)){
args246740.push((arguments[i__9157__auto___246744]));

var G__246745 = (i__9157__auto___246744 + (1));
i__9157__auto___246744 = G__246745;
continue;
} else {
}
break;
}

var G__246742 = args246740.length;
switch (G__246742) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args246740.length)].join('')));

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
var args246747 = [];
var len__9156__auto___246750 = arguments.length;
var i__9157__auto___246751 = (0);
while(true){
if((i__9157__auto___246751 < len__9156__auto___246750)){
args246747.push((arguments[i__9157__auto___246751]));

var G__246752 = (i__9157__auto___246751 + (1));
i__9157__auto___246751 = G__246752;
continue;
} else {
}
break;
}

var G__246749 = args246747.length;
switch (G__246749) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args246747.length)].join('')));

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
var args246754 = [];
var len__9156__auto___246807 = arguments.length;
var i__9157__auto___246808 = (0);
while(true){
if((i__9157__auto___246808 < len__9156__auto___246807)){
args246754.push((arguments[i__9157__auto___246808]));

var G__246809 = (i__9157__auto___246808 + (1));
i__9157__auto___246808 = G__246809;
continue;
} else {
}
break;
}

var G__246756 = args246754.length;
switch (G__246756) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args246754.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__10446__auto___246811 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto___246811,tc,fc){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto___246811,tc,fc){
return (function (state_246782){
var state_val_246783 = (state_246782[(1)]);
if((state_val_246783 === (7))){
var inst_246778 = (state_246782[(2)]);
var state_246782__$1 = state_246782;
var statearr_246784_246812 = state_246782__$1;
(statearr_246784_246812[(2)] = inst_246778);

(statearr_246784_246812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246783 === (1))){
var state_246782__$1 = state_246782;
var statearr_246785_246813 = state_246782__$1;
(statearr_246785_246813[(2)] = null);

(statearr_246785_246813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246783 === (4))){
var inst_246759 = (state_246782[(7)]);
var inst_246759__$1 = (state_246782[(2)]);
var inst_246760 = (inst_246759__$1 == null);
var state_246782__$1 = (function (){var statearr_246786 = state_246782;
(statearr_246786[(7)] = inst_246759__$1);

return statearr_246786;
})();
if(cljs.core.truth_(inst_246760)){
var statearr_246787_246814 = state_246782__$1;
(statearr_246787_246814[(1)] = (5));

} else {
var statearr_246788_246815 = state_246782__$1;
(statearr_246788_246815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246783 === (13))){
var state_246782__$1 = state_246782;
var statearr_246789_246816 = state_246782__$1;
(statearr_246789_246816[(2)] = null);

(statearr_246789_246816[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246783 === (6))){
var inst_246759 = (state_246782[(7)]);
var inst_246765 = p.call(null,inst_246759);
var state_246782__$1 = state_246782;
if(cljs.core.truth_(inst_246765)){
var statearr_246790_246817 = state_246782__$1;
(statearr_246790_246817[(1)] = (9));

} else {
var statearr_246791_246818 = state_246782__$1;
(statearr_246791_246818[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246783 === (3))){
var inst_246780 = (state_246782[(2)]);
var state_246782__$1 = state_246782;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_246782__$1,inst_246780);
} else {
if((state_val_246783 === (12))){
var state_246782__$1 = state_246782;
var statearr_246792_246819 = state_246782__$1;
(statearr_246792_246819[(2)] = null);

(statearr_246792_246819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246783 === (2))){
var state_246782__$1 = state_246782;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_246782__$1,(4),ch);
} else {
if((state_val_246783 === (11))){
var inst_246759 = (state_246782[(7)]);
var inst_246769 = (state_246782[(2)]);
var state_246782__$1 = state_246782;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_246782__$1,(8),inst_246769,inst_246759);
} else {
if((state_val_246783 === (9))){
var state_246782__$1 = state_246782;
var statearr_246793_246820 = state_246782__$1;
(statearr_246793_246820[(2)] = tc);

(statearr_246793_246820[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246783 === (5))){
var inst_246762 = cljs.core.async.close_BANG_.call(null,tc);
var inst_246763 = cljs.core.async.close_BANG_.call(null,fc);
var state_246782__$1 = (function (){var statearr_246794 = state_246782;
(statearr_246794[(8)] = inst_246762);

return statearr_246794;
})();
var statearr_246795_246821 = state_246782__$1;
(statearr_246795_246821[(2)] = inst_246763);

(statearr_246795_246821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246783 === (14))){
var inst_246776 = (state_246782[(2)]);
var state_246782__$1 = state_246782;
var statearr_246796_246822 = state_246782__$1;
(statearr_246796_246822[(2)] = inst_246776);

(statearr_246796_246822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246783 === (10))){
var state_246782__$1 = state_246782;
var statearr_246797_246823 = state_246782__$1;
(statearr_246797_246823[(2)] = fc);

(statearr_246797_246823[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246783 === (8))){
var inst_246771 = (state_246782[(2)]);
var state_246782__$1 = state_246782;
if(cljs.core.truth_(inst_246771)){
var statearr_246798_246824 = state_246782__$1;
(statearr_246798_246824[(1)] = (12));

} else {
var statearr_246799_246825 = state_246782__$1;
(statearr_246799_246825[(1)] = (13));

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
});})(c__10446__auto___246811,tc,fc))
;
return ((function (switch__10425__auto__,c__10446__auto___246811,tc,fc){
return (function() {
var cljs$core$async$state_machine__10426__auto__ = null;
var cljs$core$async$state_machine__10426__auto____0 = (function (){
var statearr_246803 = [null,null,null,null,null,null,null,null,null];
(statearr_246803[(0)] = cljs$core$async$state_machine__10426__auto__);

(statearr_246803[(1)] = (1));

return statearr_246803;
});
var cljs$core$async$state_machine__10426__auto____1 = (function (state_246782){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_246782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e246804){if((e246804 instanceof Object)){
var ex__10429__auto__ = e246804;
var statearr_246805_246826 = state_246782;
(statearr_246805_246826[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_246782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e246804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__246827 = state_246782;
state_246782 = G__246827;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
cljs$core$async$state_machine__10426__auto__ = function(state_246782){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10426__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10426__auto____1.call(this,state_246782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10426__auto____0;
cljs$core$async$state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10426__auto____1;
return cljs$core$async$state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto___246811,tc,fc))
})();
var state__10448__auto__ = (function (){var statearr_246806 = f__10447__auto__.call(null);
(statearr_246806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto___246811);

return statearr_246806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto___246811,tc,fc))
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
return (function (state_246891){
var state_val_246892 = (state_246891[(1)]);
if((state_val_246892 === (7))){
var inst_246887 = (state_246891[(2)]);
var state_246891__$1 = state_246891;
var statearr_246893_246914 = state_246891__$1;
(statearr_246893_246914[(2)] = inst_246887);

(statearr_246893_246914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246892 === (1))){
var inst_246871 = init;
var state_246891__$1 = (function (){var statearr_246894 = state_246891;
(statearr_246894[(7)] = inst_246871);

return statearr_246894;
})();
var statearr_246895_246915 = state_246891__$1;
(statearr_246895_246915[(2)] = null);

(statearr_246895_246915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246892 === (4))){
var inst_246874 = (state_246891[(8)]);
var inst_246874__$1 = (state_246891[(2)]);
var inst_246875 = (inst_246874__$1 == null);
var state_246891__$1 = (function (){var statearr_246896 = state_246891;
(statearr_246896[(8)] = inst_246874__$1);

return statearr_246896;
})();
if(cljs.core.truth_(inst_246875)){
var statearr_246897_246916 = state_246891__$1;
(statearr_246897_246916[(1)] = (5));

} else {
var statearr_246898_246917 = state_246891__$1;
(statearr_246898_246917[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246892 === (6))){
var inst_246878 = (state_246891[(9)]);
var inst_246871 = (state_246891[(7)]);
var inst_246874 = (state_246891[(8)]);
var inst_246878__$1 = f.call(null,inst_246871,inst_246874);
var inst_246879 = cljs.core.reduced_QMARK_.call(null,inst_246878__$1);
var state_246891__$1 = (function (){var statearr_246899 = state_246891;
(statearr_246899[(9)] = inst_246878__$1);

return statearr_246899;
})();
if(inst_246879){
var statearr_246900_246918 = state_246891__$1;
(statearr_246900_246918[(1)] = (8));

} else {
var statearr_246901_246919 = state_246891__$1;
(statearr_246901_246919[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246892 === (3))){
var inst_246889 = (state_246891[(2)]);
var state_246891__$1 = state_246891;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_246891__$1,inst_246889);
} else {
if((state_val_246892 === (2))){
var state_246891__$1 = state_246891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_246891__$1,(4),ch);
} else {
if((state_val_246892 === (9))){
var inst_246878 = (state_246891[(9)]);
var inst_246871 = inst_246878;
var state_246891__$1 = (function (){var statearr_246902 = state_246891;
(statearr_246902[(7)] = inst_246871);

return statearr_246902;
})();
var statearr_246903_246920 = state_246891__$1;
(statearr_246903_246920[(2)] = null);

(statearr_246903_246920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246892 === (5))){
var inst_246871 = (state_246891[(7)]);
var state_246891__$1 = state_246891;
var statearr_246904_246921 = state_246891__$1;
(statearr_246904_246921[(2)] = inst_246871);

(statearr_246904_246921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246892 === (10))){
var inst_246885 = (state_246891[(2)]);
var state_246891__$1 = state_246891;
var statearr_246905_246922 = state_246891__$1;
(statearr_246905_246922[(2)] = inst_246885);

(statearr_246905_246922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246892 === (8))){
var inst_246878 = (state_246891[(9)]);
var inst_246881 = cljs.core.deref.call(null,inst_246878);
var state_246891__$1 = state_246891;
var statearr_246906_246923 = state_246891__$1;
(statearr_246906_246923[(2)] = inst_246881);

(statearr_246906_246923[(1)] = (10));


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
var statearr_246910 = [null,null,null,null,null,null,null,null,null,null];
(statearr_246910[(0)] = cljs$core$async$reduce_$_state_machine__10426__auto__);

(statearr_246910[(1)] = (1));

return statearr_246910;
});
var cljs$core$async$reduce_$_state_machine__10426__auto____1 = (function (state_246891){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_246891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e246911){if((e246911 instanceof Object)){
var ex__10429__auto__ = e246911;
var statearr_246912_246924 = state_246891;
(statearr_246912_246924[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_246891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e246911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__246925 = state_246891;
state_246891 = G__246925;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10426__auto__ = function(state_246891){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10426__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10426__auto____1.call(this,state_246891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10426__auto____0;
cljs$core$async$reduce_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10426__auto____1;
return cljs$core$async$reduce_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_246913 = f__10447__auto__.call(null);
(statearr_246913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_246913;
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
var args246926 = [];
var len__9156__auto___246978 = arguments.length;
var i__9157__auto___246979 = (0);
while(true){
if((i__9157__auto___246979 < len__9156__auto___246978)){
args246926.push((arguments[i__9157__auto___246979]));

var G__246980 = (i__9157__auto___246979 + (1));
i__9157__auto___246979 = G__246980;
continue;
} else {
}
break;
}

var G__246928 = args246926.length;
switch (G__246928) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args246926.length)].join('')));

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
return (function (state_246953){
var state_val_246954 = (state_246953[(1)]);
if((state_val_246954 === (7))){
var inst_246935 = (state_246953[(2)]);
var state_246953__$1 = state_246953;
var statearr_246955_246982 = state_246953__$1;
(statearr_246955_246982[(2)] = inst_246935);

(statearr_246955_246982[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246954 === (1))){
var inst_246929 = cljs.core.seq.call(null,coll);
var inst_246930 = inst_246929;
var state_246953__$1 = (function (){var statearr_246956 = state_246953;
(statearr_246956[(7)] = inst_246930);

return statearr_246956;
})();
var statearr_246957_246983 = state_246953__$1;
(statearr_246957_246983[(2)] = null);

(statearr_246957_246983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246954 === (4))){
var inst_246930 = (state_246953[(7)]);
var inst_246933 = cljs.core.first.call(null,inst_246930);
var state_246953__$1 = state_246953;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_246953__$1,(7),ch,inst_246933);
} else {
if((state_val_246954 === (13))){
var inst_246947 = (state_246953[(2)]);
var state_246953__$1 = state_246953;
var statearr_246958_246984 = state_246953__$1;
(statearr_246958_246984[(2)] = inst_246947);

(statearr_246958_246984[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246954 === (6))){
var inst_246938 = (state_246953[(2)]);
var state_246953__$1 = state_246953;
if(cljs.core.truth_(inst_246938)){
var statearr_246959_246985 = state_246953__$1;
(statearr_246959_246985[(1)] = (8));

} else {
var statearr_246960_246986 = state_246953__$1;
(statearr_246960_246986[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246954 === (3))){
var inst_246951 = (state_246953[(2)]);
var state_246953__$1 = state_246953;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_246953__$1,inst_246951);
} else {
if((state_val_246954 === (12))){
var state_246953__$1 = state_246953;
var statearr_246961_246987 = state_246953__$1;
(statearr_246961_246987[(2)] = null);

(statearr_246961_246987[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246954 === (2))){
var inst_246930 = (state_246953[(7)]);
var state_246953__$1 = state_246953;
if(cljs.core.truth_(inst_246930)){
var statearr_246962_246988 = state_246953__$1;
(statearr_246962_246988[(1)] = (4));

} else {
var statearr_246963_246989 = state_246953__$1;
(statearr_246963_246989[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246954 === (11))){
var inst_246944 = cljs.core.async.close_BANG_.call(null,ch);
var state_246953__$1 = state_246953;
var statearr_246964_246990 = state_246953__$1;
(statearr_246964_246990[(2)] = inst_246944);

(statearr_246964_246990[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246954 === (9))){
var state_246953__$1 = state_246953;
if(cljs.core.truth_(close_QMARK_)){
var statearr_246965_246991 = state_246953__$1;
(statearr_246965_246991[(1)] = (11));

} else {
var statearr_246966_246992 = state_246953__$1;
(statearr_246966_246992[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246954 === (5))){
var inst_246930 = (state_246953[(7)]);
var state_246953__$1 = state_246953;
var statearr_246967_246993 = state_246953__$1;
(statearr_246967_246993[(2)] = inst_246930);

(statearr_246967_246993[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246954 === (10))){
var inst_246949 = (state_246953[(2)]);
var state_246953__$1 = state_246953;
var statearr_246968_246994 = state_246953__$1;
(statearr_246968_246994[(2)] = inst_246949);

(statearr_246968_246994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_246954 === (8))){
var inst_246930 = (state_246953[(7)]);
var inst_246940 = cljs.core.next.call(null,inst_246930);
var inst_246930__$1 = inst_246940;
var state_246953__$1 = (function (){var statearr_246969 = state_246953;
(statearr_246969[(7)] = inst_246930__$1);

return statearr_246969;
})();
var statearr_246970_246995 = state_246953__$1;
(statearr_246970_246995[(2)] = null);

(statearr_246970_246995[(1)] = (2));


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
var statearr_246974 = [null,null,null,null,null,null,null,null];
(statearr_246974[(0)] = cljs$core$async$state_machine__10426__auto__);

(statearr_246974[(1)] = (1));

return statearr_246974;
});
var cljs$core$async$state_machine__10426__auto____1 = (function (state_246953){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_246953);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e246975){if((e246975 instanceof Object)){
var ex__10429__auto__ = e246975;
var statearr_246976_246996 = state_246953;
(statearr_246976_246996[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_246953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e246975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__246997 = state_246953;
state_246953 = G__246997;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
cljs$core$async$state_machine__10426__auto__ = function(state_246953){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10426__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10426__auto____1.call(this,state_246953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10426__auto____0;
cljs$core$async$state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10426__auto____1;
return cljs$core$async$state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_246977 = f__10447__auto__.call(null);
(statearr_246977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_246977;
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
if(typeof cljs.core.async.t_cljs$core$async247219 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async247219 = (function (mult,ch,cs,meta247220){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta247220 = meta247220;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async247219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_247221,meta247220__$1){
var self__ = this;
var _247221__$1 = this;
return (new cljs.core.async.t_cljs$core$async247219(self__.mult,self__.ch,self__.cs,meta247220__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async247219.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_247221){
var self__ = this;
var _247221__$1 = this;
return self__.meta247220;
});})(cs))
;

cljs.core.async.t_cljs$core$async247219.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async247219.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async247219.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async247219.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async247219.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async247219.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async247219.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta247220","meta247220",2085946562,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async247219.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async247219.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async247219";

cljs.core.async.t_cljs$core$async247219.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8696__auto__,writer__8697__auto__,opt__8698__auto__){
return cljs.core._write.call(null,writer__8697__auto__,"cljs.core.async/t_cljs$core$async247219");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async247219 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async247219(mult__$1,ch__$1,cs__$1,meta247220){
return (new cljs.core.async.t_cljs$core$async247219(mult__$1,ch__$1,cs__$1,meta247220));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async247219(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10446__auto___247440 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto___247440,cs,m,dchan,dctr,done){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto___247440,cs,m,dchan,dctr,done){
return (function (state_247352){
var state_val_247353 = (state_247352[(1)]);
if((state_val_247353 === (7))){
var inst_247348 = (state_247352[(2)]);
var state_247352__$1 = state_247352;
var statearr_247354_247441 = state_247352__$1;
(statearr_247354_247441[(2)] = inst_247348);

(statearr_247354_247441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247353 === (20))){
var inst_247253 = (state_247352[(7)]);
var inst_247263 = cljs.core.first.call(null,inst_247253);
var inst_247264 = cljs.core.nth.call(null,inst_247263,(0),null);
var inst_247265 = cljs.core.nth.call(null,inst_247263,(1),null);
var state_247352__$1 = (function (){var statearr_247355 = state_247352;
(statearr_247355[(8)] = inst_247264);

return statearr_247355;
})();
if(cljs.core.truth_(inst_247265)){
var statearr_247356_247442 = state_247352__$1;
(statearr_247356_247442[(1)] = (22));

} else {
var statearr_247357_247443 = state_247352__$1;
(statearr_247357_247443[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247353 === (27))){
var inst_247224 = (state_247352[(9)]);
var inst_247293 = (state_247352[(10)]);
var inst_247300 = (state_247352[(11)]);
var inst_247295 = (state_247352[(12)]);
var inst_247300__$1 = cljs.core._nth.call(null,inst_247293,inst_247295);
var inst_247301 = cljs.core.async.put_BANG_.call(null,inst_247300__$1,inst_247224,done);
var state_247352__$1 = (function (){var statearr_247358 = state_247352;
(statearr_247358[(11)] = inst_247300__$1);

return statearr_247358;
})();
if(cljs.core.truth_(inst_247301)){
var statearr_247359_247444 = state_247352__$1;
(statearr_247359_247444[(1)] = (30));

} else {
var statearr_247360_247445 = state_247352__$1;
(statearr_247360_247445[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247353 === (1))){
var state_247352__$1 = state_247352;
var statearr_247361_247446 = state_247352__$1;
(statearr_247361_247446[(2)] = null);

(statearr_247361_247446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247353 === (24))){
var inst_247253 = (state_247352[(7)]);
var inst_247270 = (state_247352[(2)]);
var inst_247271 = cljs.core.next.call(null,inst_247253);
var inst_247233 = inst_247271;
var inst_247234 = null;
var inst_247235 = (0);
var inst_247236 = (0);
var state_247352__$1 = (function (){var statearr_247362 = state_247352;
(statearr_247362[(13)] = inst_247236);

(statearr_247362[(14)] = inst_247234);

(statearr_247362[(15)] = inst_247235);

(statearr_247362[(16)] = inst_247233);

(statearr_247362[(17)] = inst_247270);

return statearr_247362;
})();
var statearr_247363_247447 = state_247352__$1;
(statearr_247363_247447[(2)] = null);

(statearr_247363_247447[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247353 === (39))){
var state_247352__$1 = state_247352;
var statearr_247367_247448 = state_247352__$1;
(statearr_247367_247448[(2)] = null);

(statearr_247367_247448[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247353 === (4))){
var inst_247224 = (state_247352[(9)]);
var inst_247224__$1 = (state_247352[(2)]);
var inst_247225 = (inst_247224__$1 == null);
var state_247352__$1 = (function (){var statearr_247368 = state_247352;
(statearr_247368[(9)] = inst_247224__$1);

return statearr_247368;
})();
if(cljs.core.truth_(inst_247225)){
var statearr_247369_247449 = state_247352__$1;
(statearr_247369_247449[(1)] = (5));

} else {
var statearr_247370_247450 = state_247352__$1;
(statearr_247370_247450[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247353 === (15))){
var inst_247236 = (state_247352[(13)]);
var inst_247234 = (state_247352[(14)]);
var inst_247235 = (state_247352[(15)]);
var inst_247233 = (state_247352[(16)]);
var inst_247249 = (state_247352[(2)]);
var inst_247250 = (inst_247236 + (1));
var tmp247364 = inst_247234;
var tmp247365 = inst_247235;
var tmp247366 = inst_247233;
var inst_247233__$1 = tmp247366;
var inst_247234__$1 = tmp247364;
var inst_247235__$1 = tmp247365;
var inst_247236__$1 = inst_247250;
var state_247352__$1 = (function (){var statearr_247371 = state_247352;
(statearr_247371[(13)] = inst_247236__$1);

(statearr_247371[(14)] = inst_247234__$1);

(statearr_247371[(18)] = inst_247249);

(statearr_247371[(15)] = inst_247235__$1);

(statearr_247371[(16)] = inst_247233__$1);

return statearr_247371;
})();
var statearr_247372_247451 = state_247352__$1;
(statearr_247372_247451[(2)] = null);

(statearr_247372_247451[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247353 === (21))){
var inst_247274 = (state_247352[(2)]);
var state_247352__$1 = state_247352;
var statearr_247376_247452 = state_247352__$1;
(statearr_247376_247452[(2)] = inst_247274);

(statearr_247376_247452[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247353 === (31))){
var inst_247300 = (state_247352[(11)]);
var inst_247304 = done.call(null,null);
var inst_247305 = cljs.core.async.untap_STAR_.call(null,m,inst_247300);
var state_247352__$1 = (function (){var statearr_247377 = state_247352;
(statearr_247377[(19)] = inst_247304);

return statearr_247377;
})();
var statearr_247378_247453 = state_247352__$1;
(statearr_247378_247453[(2)] = inst_247305);

(statearr_247378_247453[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247353 === (32))){
var inst_247293 = (state_247352[(10)]);
var inst_247294 = (state_247352[(20)]);
var inst_247295 = (state_247352[(12)]);
var inst_247292 = (state_247352[(21)]);
var inst_247307 = (state_247352[(2)]);
var inst_247308 = (inst_247295 + (1));
var tmp247373 = inst_247293;
var tmp247374 = inst_247294;
var tmp247375 = inst_247292;
var inst_247292__$1 = tmp247375;
var inst_247293__$1 = tmp247373;
var inst_247294__$1 = tmp247374;
var inst_247295__$1 = inst_247308;
var state_247352__$1 = (function (){var statearr_247379 = state_247352;
(statearr_247379[(10)] = inst_247293__$1);

(statearr_247379[(20)] = inst_247294__$1);

(statearr_247379[(12)] = inst_247295__$1);

(statearr_247379[(22)] = inst_247307);

(statearr_247379[(21)] = inst_247292__$1);

return statearr_247379;
})();
var statearr_247380_247454 = state_247352__$1;
(statearr_247380_247454[(2)] = null);

(statearr_247380_247454[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247353 === (40))){
var inst_247320 = (state_247352[(23)]);
var inst_247324 = done.call(null,null);
var inst_247325 = cljs.core.async.untap_STAR_.call(null,m,inst_247320);
var state_247352__$1 = (function (){var statearr_247381 = state_247352;
(statearr_247381[(24)] = inst_247324);

return statearr_247381;
})();
var statearr_247382_247455 = state_247352__$1;
(statearr_247382_247455[(2)] = inst_247325);

(statearr_247382_247455[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247353 === (33))){
var inst_247311 = (state_247352[(25)]);
var inst_247313 = cljs.core.chunked_seq_QMARK_.call(null,inst_247311);
var state_247352__$1 = state_247352;
if(inst_247313){
var statearr_247383_247456 = state_247352__$1;
(statearr_247383_247456[(1)] = (36));

} else {
var statearr_247384_247457 = state_247352__$1;
(statearr_247384_247457[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247353 === (13))){
var inst_247243 = (state_247352[(26)]);
var inst_247246 = cljs.core.async.close_BANG_.call(null,inst_247243);
var state_247352__$1 = state_247352;
var statearr_247385_247458 = state_247352__$1;
(statearr_247385_247458[(2)] = inst_247246);

(statearr_247385_247458[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247353 === (22))){
var inst_247264 = (state_247352[(8)]);
var inst_247267 = cljs.core.async.close_BANG_.call(null,inst_247264);
var state_247352__$1 = state_247352;
var statearr_247386_247459 = state_247352__$1;
(statearr_247386_247459[(2)] = inst_247267);

(statearr_247386_247459[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247353 === (36))){
var inst_247311 = (state_247352[(25)]);
var inst_247315 = cljs.core.chunk_first.call(null,inst_247311);
var inst_247316 = cljs.core.chunk_rest.call(null,inst_247311);
var inst_247317 = cljs.core.count.call(null,inst_247315);
var inst_247292 = inst_247316;
var inst_247293 = inst_247315;
var inst_247294 = inst_247317;
var inst_247295 = (0);
var state_247352__$1 = (function (){var statearr_247387 = state_247352;
(statearr_247387[(10)] = inst_247293);

(statearr_247387[(20)] = inst_247294);

(statearr_247387[(12)] = inst_247295);

(statearr_247387[(21)] = inst_247292);

return statearr_247387;
})();
var statearr_247388_247460 = state_247352__$1;
(statearr_247388_247460[(2)] = null);

(statearr_247388_247460[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247353 === (41))){
var inst_247311 = (state_247352[(25)]);
var inst_247327 = (state_247352[(2)]);
var inst_247328 = cljs.core.next.call(null,inst_247311);
var inst_247292 = inst_247328;
var inst_247293 = null;
var inst_247294 = (0);
var inst_247295 = (0);
var state_247352__$1 = (function (){var statearr_247389 = state_247352;
(statearr_247389[(27)] = inst_247327);

(statearr_247389[(10)] = inst_247293);

(statearr_247389[(20)] = inst_247294);

(statearr_247389[(12)] = inst_247295);

(statearr_247389[(21)] = inst_247292);

return statearr_247389;
})();
var statearr_247390_247461 = state_247352__$1;
(statearr_247390_247461[(2)] = null);

(statearr_247390_247461[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247353 === (43))){
var state_247352__$1 = state_247352;
var statearr_247391_247462 = state_247352__$1;
(statearr_247391_247462[(2)] = null);

(statearr_247391_247462[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247353 === (29))){
var inst_247336 = (state_247352[(2)]);
var state_247352__$1 = state_247352;
var statearr_247392_247463 = state_247352__$1;
(statearr_247392_247463[(2)] = inst_247336);

(statearr_247392_247463[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247353 === (44))){
var inst_247345 = (state_247352[(2)]);
var state_247352__$1 = (function (){var statearr_247393 = state_247352;
(statearr_247393[(28)] = inst_247345);

return statearr_247393;
})();
var statearr_247394_247464 = state_247352__$1;
(statearr_247394_247464[(2)] = null);

(statearr_247394_247464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247353 === (6))){
var inst_247284 = (state_247352[(29)]);
var inst_247283 = cljs.core.deref.call(null,cs);
var inst_247284__$1 = cljs.core.keys.call(null,inst_247283);
var inst_247285 = cljs.core.count.call(null,inst_247284__$1);
var inst_247286 = cljs.core.reset_BANG_.call(null,dctr,inst_247285);
var inst_247291 = cljs.core.seq.call(null,inst_247284__$1);
var inst_247292 = inst_247291;
var inst_247293 = null;
var inst_247294 = (0);
var inst_247295 = (0);
var state_247352__$1 = (function (){var statearr_247395 = state_247352;
(statearr_247395[(10)] = inst_247293);

(statearr_247395[(20)] = inst_247294);

(statearr_247395[(12)] = inst_247295);

(statearr_247395[(30)] = inst_247286);

(statearr_247395[(21)] = inst_247292);

(statearr_247395[(29)] = inst_247284__$1);

return statearr_247395;
})();
var statearr_247396_247465 = state_247352__$1;
(statearr_247396_247465[(2)] = null);

(statearr_247396_247465[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247353 === (28))){
var inst_247311 = (state_247352[(25)]);
var inst_247292 = (state_247352[(21)]);
var inst_247311__$1 = cljs.core.seq.call(null,inst_247292);
var state_247352__$1 = (function (){var statearr_247397 = state_247352;
(statearr_247397[(25)] = inst_247311__$1);

return statearr_247397;
})();
if(inst_247311__$1){
var statearr_247398_247466 = state_247352__$1;
(statearr_247398_247466[(1)] = (33));

} else {
var statearr_247399_247467 = state_247352__$1;
(statearr_247399_247467[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247353 === (25))){
var inst_247294 = (state_247352[(20)]);
var inst_247295 = (state_247352[(12)]);
var inst_247297 = (inst_247295 < inst_247294);
var inst_247298 = inst_247297;
var state_247352__$1 = state_247352;
if(cljs.core.truth_(inst_247298)){
var statearr_247400_247468 = state_247352__$1;
(statearr_247400_247468[(1)] = (27));

} else {
var statearr_247401_247469 = state_247352__$1;
(statearr_247401_247469[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247353 === (34))){
var state_247352__$1 = state_247352;
var statearr_247402_247470 = state_247352__$1;
(statearr_247402_247470[(2)] = null);

(statearr_247402_247470[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247353 === (17))){
var state_247352__$1 = state_247352;
var statearr_247403_247471 = state_247352__$1;
(statearr_247403_247471[(2)] = null);

(statearr_247403_247471[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247353 === (3))){
var inst_247350 = (state_247352[(2)]);
var state_247352__$1 = state_247352;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_247352__$1,inst_247350);
} else {
if((state_val_247353 === (12))){
var inst_247279 = (state_247352[(2)]);
var state_247352__$1 = state_247352;
var statearr_247404_247472 = state_247352__$1;
(statearr_247404_247472[(2)] = inst_247279);

(statearr_247404_247472[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247353 === (2))){
var state_247352__$1 = state_247352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_247352__$1,(4),ch);
} else {
if((state_val_247353 === (23))){
var state_247352__$1 = state_247352;
var statearr_247405_247473 = state_247352__$1;
(statearr_247405_247473[(2)] = null);

(statearr_247405_247473[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247353 === (35))){
var inst_247334 = (state_247352[(2)]);
var state_247352__$1 = state_247352;
var statearr_247406_247474 = state_247352__$1;
(statearr_247406_247474[(2)] = inst_247334);

(statearr_247406_247474[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247353 === (19))){
var inst_247253 = (state_247352[(7)]);
var inst_247257 = cljs.core.chunk_first.call(null,inst_247253);
var inst_247258 = cljs.core.chunk_rest.call(null,inst_247253);
var inst_247259 = cljs.core.count.call(null,inst_247257);
var inst_247233 = inst_247258;
var inst_247234 = inst_247257;
var inst_247235 = inst_247259;
var inst_247236 = (0);
var state_247352__$1 = (function (){var statearr_247407 = state_247352;
(statearr_247407[(13)] = inst_247236);

(statearr_247407[(14)] = inst_247234);

(statearr_247407[(15)] = inst_247235);

(statearr_247407[(16)] = inst_247233);

return statearr_247407;
})();
var statearr_247408_247475 = state_247352__$1;
(statearr_247408_247475[(2)] = null);

(statearr_247408_247475[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247353 === (11))){
var inst_247253 = (state_247352[(7)]);
var inst_247233 = (state_247352[(16)]);
var inst_247253__$1 = cljs.core.seq.call(null,inst_247233);
var state_247352__$1 = (function (){var statearr_247409 = state_247352;
(statearr_247409[(7)] = inst_247253__$1);

return statearr_247409;
})();
if(inst_247253__$1){
var statearr_247410_247476 = state_247352__$1;
(statearr_247410_247476[(1)] = (16));

} else {
var statearr_247411_247477 = state_247352__$1;
(statearr_247411_247477[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247353 === (9))){
var inst_247281 = (state_247352[(2)]);
var state_247352__$1 = state_247352;
var statearr_247412_247478 = state_247352__$1;
(statearr_247412_247478[(2)] = inst_247281);

(statearr_247412_247478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247353 === (5))){
var inst_247231 = cljs.core.deref.call(null,cs);
var inst_247232 = cljs.core.seq.call(null,inst_247231);
var inst_247233 = inst_247232;
var inst_247234 = null;
var inst_247235 = (0);
var inst_247236 = (0);
var state_247352__$1 = (function (){var statearr_247413 = state_247352;
(statearr_247413[(13)] = inst_247236);

(statearr_247413[(14)] = inst_247234);

(statearr_247413[(15)] = inst_247235);

(statearr_247413[(16)] = inst_247233);

return statearr_247413;
})();
var statearr_247414_247479 = state_247352__$1;
(statearr_247414_247479[(2)] = null);

(statearr_247414_247479[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247353 === (14))){
var state_247352__$1 = state_247352;
var statearr_247415_247480 = state_247352__$1;
(statearr_247415_247480[(2)] = null);

(statearr_247415_247480[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247353 === (45))){
var inst_247342 = (state_247352[(2)]);
var state_247352__$1 = state_247352;
var statearr_247416_247481 = state_247352__$1;
(statearr_247416_247481[(2)] = inst_247342);

(statearr_247416_247481[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247353 === (26))){
var inst_247284 = (state_247352[(29)]);
var inst_247338 = (state_247352[(2)]);
var inst_247339 = cljs.core.seq.call(null,inst_247284);
var state_247352__$1 = (function (){var statearr_247417 = state_247352;
(statearr_247417[(31)] = inst_247338);

return statearr_247417;
})();
if(inst_247339){
var statearr_247418_247482 = state_247352__$1;
(statearr_247418_247482[(1)] = (42));

} else {
var statearr_247419_247483 = state_247352__$1;
(statearr_247419_247483[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247353 === (16))){
var inst_247253 = (state_247352[(7)]);
var inst_247255 = cljs.core.chunked_seq_QMARK_.call(null,inst_247253);
var state_247352__$1 = state_247352;
if(inst_247255){
var statearr_247420_247484 = state_247352__$1;
(statearr_247420_247484[(1)] = (19));

} else {
var statearr_247421_247485 = state_247352__$1;
(statearr_247421_247485[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247353 === (38))){
var inst_247331 = (state_247352[(2)]);
var state_247352__$1 = state_247352;
var statearr_247422_247486 = state_247352__$1;
(statearr_247422_247486[(2)] = inst_247331);

(statearr_247422_247486[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247353 === (30))){
var state_247352__$1 = state_247352;
var statearr_247423_247487 = state_247352__$1;
(statearr_247423_247487[(2)] = null);

(statearr_247423_247487[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247353 === (10))){
var inst_247236 = (state_247352[(13)]);
var inst_247234 = (state_247352[(14)]);
var inst_247242 = cljs.core._nth.call(null,inst_247234,inst_247236);
var inst_247243 = cljs.core.nth.call(null,inst_247242,(0),null);
var inst_247244 = cljs.core.nth.call(null,inst_247242,(1),null);
var state_247352__$1 = (function (){var statearr_247424 = state_247352;
(statearr_247424[(26)] = inst_247243);

return statearr_247424;
})();
if(cljs.core.truth_(inst_247244)){
var statearr_247425_247488 = state_247352__$1;
(statearr_247425_247488[(1)] = (13));

} else {
var statearr_247426_247489 = state_247352__$1;
(statearr_247426_247489[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247353 === (18))){
var inst_247277 = (state_247352[(2)]);
var state_247352__$1 = state_247352;
var statearr_247427_247490 = state_247352__$1;
(statearr_247427_247490[(2)] = inst_247277);

(statearr_247427_247490[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247353 === (42))){
var state_247352__$1 = state_247352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_247352__$1,(45),dchan);
} else {
if((state_val_247353 === (37))){
var inst_247224 = (state_247352[(9)]);
var inst_247311 = (state_247352[(25)]);
var inst_247320 = (state_247352[(23)]);
var inst_247320__$1 = cljs.core.first.call(null,inst_247311);
var inst_247321 = cljs.core.async.put_BANG_.call(null,inst_247320__$1,inst_247224,done);
var state_247352__$1 = (function (){var statearr_247428 = state_247352;
(statearr_247428[(23)] = inst_247320__$1);

return statearr_247428;
})();
if(cljs.core.truth_(inst_247321)){
var statearr_247429_247491 = state_247352__$1;
(statearr_247429_247491[(1)] = (39));

} else {
var statearr_247430_247492 = state_247352__$1;
(statearr_247430_247492[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247353 === (8))){
var inst_247236 = (state_247352[(13)]);
var inst_247235 = (state_247352[(15)]);
var inst_247238 = (inst_247236 < inst_247235);
var inst_247239 = inst_247238;
var state_247352__$1 = state_247352;
if(cljs.core.truth_(inst_247239)){
var statearr_247431_247493 = state_247352__$1;
(statearr_247431_247493[(1)] = (10));

} else {
var statearr_247432_247494 = state_247352__$1;
(statearr_247432_247494[(1)] = (11));

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
});})(c__10446__auto___247440,cs,m,dchan,dctr,done))
;
return ((function (switch__10425__auto__,c__10446__auto___247440,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10426__auto__ = null;
var cljs$core$async$mult_$_state_machine__10426__auto____0 = (function (){
var statearr_247436 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_247436[(0)] = cljs$core$async$mult_$_state_machine__10426__auto__);

(statearr_247436[(1)] = (1));

return statearr_247436;
});
var cljs$core$async$mult_$_state_machine__10426__auto____1 = (function (state_247352){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_247352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e247437){if((e247437 instanceof Object)){
var ex__10429__auto__ = e247437;
var statearr_247438_247495 = state_247352;
(statearr_247438_247495[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_247352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e247437;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__247496 = state_247352;
state_247352 = G__247496;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10426__auto__ = function(state_247352){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10426__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10426__auto____1.call(this,state_247352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10426__auto____0;
cljs$core$async$mult_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10426__auto____1;
return cljs$core$async$mult_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto___247440,cs,m,dchan,dctr,done))
})();
var state__10448__auto__ = (function (){var statearr_247439 = f__10447__auto__.call(null);
(statearr_247439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto___247440);

return statearr_247439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto___247440,cs,m,dchan,dctr,done))
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
var args247497 = [];
var len__9156__auto___247500 = arguments.length;
var i__9157__auto___247501 = (0);
while(true){
if((i__9157__auto___247501 < len__9156__auto___247500)){
args247497.push((arguments[i__9157__auto___247501]));

var G__247502 = (i__9157__auto___247501 + (1));
i__9157__auto___247501 = G__247502;
continue;
} else {
}
break;
}

var G__247499 = args247497.length;
switch (G__247499) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args247497.length)].join('')));

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
var len__9156__auto___247514 = arguments.length;
var i__9157__auto___247515 = (0);
while(true){
if((i__9157__auto___247515 < len__9156__auto___247514)){
args__9163__auto__.push((arguments[i__9157__auto___247515]));

var G__247516 = (i__9157__auto___247515 + (1));
i__9157__auto___247515 = G__247516;
continue;
} else {
}
break;
}

var argseq__9164__auto__ = ((((3) < args__9163__auto__.length))?(new cljs.core.IndexedSeq(args__9163__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9164__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__247508){
var map__247509 = p__247508;
var map__247509__$1 = ((((!((map__247509 == null)))?((((map__247509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__247509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__247509):map__247509);
var opts = map__247509__$1;
var statearr_247511_247517 = state;
(statearr_247511_247517[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__247509,map__247509__$1,opts){
return (function (val){
var statearr_247512_247518 = state;
(statearr_247512_247518[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__247509,map__247509__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_247513_247519 = state;
(statearr_247513_247519[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq247504){
var G__247505 = cljs.core.first.call(null,seq247504);
var seq247504__$1 = cljs.core.next.call(null,seq247504);
var G__247506 = cljs.core.first.call(null,seq247504__$1);
var seq247504__$2 = cljs.core.next.call(null,seq247504__$1);
var G__247507 = cljs.core.first.call(null,seq247504__$2);
var seq247504__$3 = cljs.core.next.call(null,seq247504__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__247505,G__247506,G__247507,seq247504__$3);
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
if(typeof cljs.core.async.t_cljs$core$async247683 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async247683 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta247684){
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
this.meta247684 = meta247684;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async247683.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_247685,meta247684__$1){
var self__ = this;
var _247685__$1 = this;
return (new cljs.core.async.t_cljs$core$async247683(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta247684__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async247683.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_247685){
var self__ = this;
var _247685__$1 = this;
return self__.meta247684;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async247683.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async247683.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async247683.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async247683.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async247683.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async247683.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async247683.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async247683.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async247683.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta247684","meta247684",-81939649,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async247683.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async247683.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async247683";

cljs.core.async.t_cljs$core$async247683.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8696__auto__,writer__8697__auto__,opt__8698__auto__){
return cljs.core._write.call(null,writer__8697__auto__,"cljs.core.async/t_cljs$core$async247683");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async247683 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async247683(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta247684){
return (new cljs.core.async.t_cljs$core$async247683(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta247684));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async247683(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10446__auto___247846 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto___247846,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto___247846,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_247783){
var state_val_247784 = (state_247783[(1)]);
if((state_val_247784 === (7))){
var inst_247701 = (state_247783[(2)]);
var state_247783__$1 = state_247783;
var statearr_247785_247847 = state_247783__$1;
(statearr_247785_247847[(2)] = inst_247701);

(statearr_247785_247847[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247784 === (20))){
var inst_247713 = (state_247783[(7)]);
var state_247783__$1 = state_247783;
var statearr_247786_247848 = state_247783__$1;
(statearr_247786_247848[(2)] = inst_247713);

(statearr_247786_247848[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247784 === (27))){
var state_247783__$1 = state_247783;
var statearr_247787_247849 = state_247783__$1;
(statearr_247787_247849[(2)] = null);

(statearr_247787_247849[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247784 === (1))){
var inst_247689 = (state_247783[(8)]);
var inst_247689__$1 = calc_state.call(null);
var inst_247691 = (inst_247689__$1 == null);
var inst_247692 = cljs.core.not.call(null,inst_247691);
var state_247783__$1 = (function (){var statearr_247788 = state_247783;
(statearr_247788[(8)] = inst_247689__$1);

return statearr_247788;
})();
if(inst_247692){
var statearr_247789_247850 = state_247783__$1;
(statearr_247789_247850[(1)] = (2));

} else {
var statearr_247790_247851 = state_247783__$1;
(statearr_247790_247851[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247784 === (24))){
var inst_247736 = (state_247783[(9)]);
var inst_247757 = (state_247783[(10)]);
var inst_247743 = (state_247783[(11)]);
var inst_247757__$1 = inst_247736.call(null,inst_247743);
var state_247783__$1 = (function (){var statearr_247791 = state_247783;
(statearr_247791[(10)] = inst_247757__$1);

return statearr_247791;
})();
if(cljs.core.truth_(inst_247757__$1)){
var statearr_247792_247852 = state_247783__$1;
(statearr_247792_247852[(1)] = (29));

} else {
var statearr_247793_247853 = state_247783__$1;
(statearr_247793_247853[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247784 === (4))){
var inst_247704 = (state_247783[(2)]);
var state_247783__$1 = state_247783;
if(cljs.core.truth_(inst_247704)){
var statearr_247794_247854 = state_247783__$1;
(statearr_247794_247854[(1)] = (8));

} else {
var statearr_247795_247855 = state_247783__$1;
(statearr_247795_247855[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247784 === (15))){
var inst_247730 = (state_247783[(2)]);
var state_247783__$1 = state_247783;
if(cljs.core.truth_(inst_247730)){
var statearr_247796_247856 = state_247783__$1;
(statearr_247796_247856[(1)] = (19));

} else {
var statearr_247797_247857 = state_247783__$1;
(statearr_247797_247857[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247784 === (21))){
var inst_247735 = (state_247783[(12)]);
var inst_247735__$1 = (state_247783[(2)]);
var inst_247736 = cljs.core.get.call(null,inst_247735__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_247737 = cljs.core.get.call(null,inst_247735__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_247738 = cljs.core.get.call(null,inst_247735__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_247783__$1 = (function (){var statearr_247798 = state_247783;
(statearr_247798[(9)] = inst_247736);

(statearr_247798[(12)] = inst_247735__$1);

(statearr_247798[(13)] = inst_247737);

return statearr_247798;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_247783__$1,(22),inst_247738);
} else {
if((state_val_247784 === (31))){
var inst_247765 = (state_247783[(2)]);
var state_247783__$1 = state_247783;
if(cljs.core.truth_(inst_247765)){
var statearr_247799_247858 = state_247783__$1;
(statearr_247799_247858[(1)] = (32));

} else {
var statearr_247800_247859 = state_247783__$1;
(statearr_247800_247859[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247784 === (32))){
var inst_247742 = (state_247783[(14)]);
var state_247783__$1 = state_247783;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_247783__$1,(35),out,inst_247742);
} else {
if((state_val_247784 === (33))){
var inst_247735 = (state_247783[(12)]);
var inst_247713 = inst_247735;
var state_247783__$1 = (function (){var statearr_247801 = state_247783;
(statearr_247801[(7)] = inst_247713);

return statearr_247801;
})();
var statearr_247802_247860 = state_247783__$1;
(statearr_247802_247860[(2)] = null);

(statearr_247802_247860[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247784 === (13))){
var inst_247713 = (state_247783[(7)]);
var inst_247720 = inst_247713.cljs$lang$protocol_mask$partition0$;
var inst_247721 = (inst_247720 & (64));
var inst_247722 = inst_247713.cljs$core$ISeq$;
var inst_247723 = (inst_247721) || (inst_247722);
var state_247783__$1 = state_247783;
if(cljs.core.truth_(inst_247723)){
var statearr_247803_247861 = state_247783__$1;
(statearr_247803_247861[(1)] = (16));

} else {
var statearr_247804_247862 = state_247783__$1;
(statearr_247804_247862[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247784 === (22))){
var inst_247743 = (state_247783[(11)]);
var inst_247742 = (state_247783[(14)]);
var inst_247741 = (state_247783[(2)]);
var inst_247742__$1 = cljs.core.nth.call(null,inst_247741,(0),null);
var inst_247743__$1 = cljs.core.nth.call(null,inst_247741,(1),null);
var inst_247744 = (inst_247742__$1 == null);
var inst_247745 = cljs.core._EQ_.call(null,inst_247743__$1,change);
var inst_247746 = (inst_247744) || (inst_247745);
var state_247783__$1 = (function (){var statearr_247805 = state_247783;
(statearr_247805[(11)] = inst_247743__$1);

(statearr_247805[(14)] = inst_247742__$1);

return statearr_247805;
})();
if(cljs.core.truth_(inst_247746)){
var statearr_247806_247863 = state_247783__$1;
(statearr_247806_247863[(1)] = (23));

} else {
var statearr_247807_247864 = state_247783__$1;
(statearr_247807_247864[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247784 === (36))){
var inst_247735 = (state_247783[(12)]);
var inst_247713 = inst_247735;
var state_247783__$1 = (function (){var statearr_247808 = state_247783;
(statearr_247808[(7)] = inst_247713);

return statearr_247808;
})();
var statearr_247809_247865 = state_247783__$1;
(statearr_247809_247865[(2)] = null);

(statearr_247809_247865[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247784 === (29))){
var inst_247757 = (state_247783[(10)]);
var state_247783__$1 = state_247783;
var statearr_247810_247866 = state_247783__$1;
(statearr_247810_247866[(2)] = inst_247757);

(statearr_247810_247866[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247784 === (6))){
var state_247783__$1 = state_247783;
var statearr_247811_247867 = state_247783__$1;
(statearr_247811_247867[(2)] = false);

(statearr_247811_247867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247784 === (28))){
var inst_247753 = (state_247783[(2)]);
var inst_247754 = calc_state.call(null);
var inst_247713 = inst_247754;
var state_247783__$1 = (function (){var statearr_247812 = state_247783;
(statearr_247812[(7)] = inst_247713);

(statearr_247812[(15)] = inst_247753);

return statearr_247812;
})();
var statearr_247813_247868 = state_247783__$1;
(statearr_247813_247868[(2)] = null);

(statearr_247813_247868[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247784 === (25))){
var inst_247779 = (state_247783[(2)]);
var state_247783__$1 = state_247783;
var statearr_247814_247869 = state_247783__$1;
(statearr_247814_247869[(2)] = inst_247779);

(statearr_247814_247869[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247784 === (34))){
var inst_247777 = (state_247783[(2)]);
var state_247783__$1 = state_247783;
var statearr_247815_247870 = state_247783__$1;
(statearr_247815_247870[(2)] = inst_247777);

(statearr_247815_247870[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247784 === (17))){
var state_247783__$1 = state_247783;
var statearr_247816_247871 = state_247783__$1;
(statearr_247816_247871[(2)] = false);

(statearr_247816_247871[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247784 === (3))){
var state_247783__$1 = state_247783;
var statearr_247817_247872 = state_247783__$1;
(statearr_247817_247872[(2)] = false);

(statearr_247817_247872[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247784 === (12))){
var inst_247781 = (state_247783[(2)]);
var state_247783__$1 = state_247783;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_247783__$1,inst_247781);
} else {
if((state_val_247784 === (2))){
var inst_247689 = (state_247783[(8)]);
var inst_247694 = inst_247689.cljs$lang$protocol_mask$partition0$;
var inst_247695 = (inst_247694 & (64));
var inst_247696 = inst_247689.cljs$core$ISeq$;
var inst_247697 = (inst_247695) || (inst_247696);
var state_247783__$1 = state_247783;
if(cljs.core.truth_(inst_247697)){
var statearr_247818_247873 = state_247783__$1;
(statearr_247818_247873[(1)] = (5));

} else {
var statearr_247819_247874 = state_247783__$1;
(statearr_247819_247874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247784 === (23))){
var inst_247742 = (state_247783[(14)]);
var inst_247748 = (inst_247742 == null);
var state_247783__$1 = state_247783;
if(cljs.core.truth_(inst_247748)){
var statearr_247820_247875 = state_247783__$1;
(statearr_247820_247875[(1)] = (26));

} else {
var statearr_247821_247876 = state_247783__$1;
(statearr_247821_247876[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247784 === (35))){
var inst_247768 = (state_247783[(2)]);
var state_247783__$1 = state_247783;
if(cljs.core.truth_(inst_247768)){
var statearr_247822_247877 = state_247783__$1;
(statearr_247822_247877[(1)] = (36));

} else {
var statearr_247823_247878 = state_247783__$1;
(statearr_247823_247878[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247784 === (19))){
var inst_247713 = (state_247783[(7)]);
var inst_247732 = cljs.core.apply.call(null,cljs.core.hash_map,inst_247713);
var state_247783__$1 = state_247783;
var statearr_247824_247879 = state_247783__$1;
(statearr_247824_247879[(2)] = inst_247732);

(statearr_247824_247879[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247784 === (11))){
var inst_247713 = (state_247783[(7)]);
var inst_247717 = (inst_247713 == null);
var inst_247718 = cljs.core.not.call(null,inst_247717);
var state_247783__$1 = state_247783;
if(inst_247718){
var statearr_247825_247880 = state_247783__$1;
(statearr_247825_247880[(1)] = (13));

} else {
var statearr_247826_247881 = state_247783__$1;
(statearr_247826_247881[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247784 === (9))){
var inst_247689 = (state_247783[(8)]);
var state_247783__$1 = state_247783;
var statearr_247827_247882 = state_247783__$1;
(statearr_247827_247882[(2)] = inst_247689);

(statearr_247827_247882[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247784 === (5))){
var state_247783__$1 = state_247783;
var statearr_247828_247883 = state_247783__$1;
(statearr_247828_247883[(2)] = true);

(statearr_247828_247883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247784 === (14))){
var state_247783__$1 = state_247783;
var statearr_247829_247884 = state_247783__$1;
(statearr_247829_247884[(2)] = false);

(statearr_247829_247884[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247784 === (26))){
var inst_247743 = (state_247783[(11)]);
var inst_247750 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_247743);
var state_247783__$1 = state_247783;
var statearr_247830_247885 = state_247783__$1;
(statearr_247830_247885[(2)] = inst_247750);

(statearr_247830_247885[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247784 === (16))){
var state_247783__$1 = state_247783;
var statearr_247831_247886 = state_247783__$1;
(statearr_247831_247886[(2)] = true);

(statearr_247831_247886[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247784 === (38))){
var inst_247773 = (state_247783[(2)]);
var state_247783__$1 = state_247783;
var statearr_247832_247887 = state_247783__$1;
(statearr_247832_247887[(2)] = inst_247773);

(statearr_247832_247887[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247784 === (30))){
var inst_247736 = (state_247783[(9)]);
var inst_247743 = (state_247783[(11)]);
var inst_247737 = (state_247783[(13)]);
var inst_247760 = cljs.core.empty_QMARK_.call(null,inst_247736);
var inst_247761 = inst_247737.call(null,inst_247743);
var inst_247762 = cljs.core.not.call(null,inst_247761);
var inst_247763 = (inst_247760) && (inst_247762);
var state_247783__$1 = state_247783;
var statearr_247833_247888 = state_247783__$1;
(statearr_247833_247888[(2)] = inst_247763);

(statearr_247833_247888[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247784 === (10))){
var inst_247689 = (state_247783[(8)]);
var inst_247709 = (state_247783[(2)]);
var inst_247710 = cljs.core.get.call(null,inst_247709,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_247711 = cljs.core.get.call(null,inst_247709,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_247712 = cljs.core.get.call(null,inst_247709,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_247713 = inst_247689;
var state_247783__$1 = (function (){var statearr_247834 = state_247783;
(statearr_247834[(16)] = inst_247710);

(statearr_247834[(17)] = inst_247712);

(statearr_247834[(18)] = inst_247711);

(statearr_247834[(7)] = inst_247713);

return statearr_247834;
})();
var statearr_247835_247889 = state_247783__$1;
(statearr_247835_247889[(2)] = null);

(statearr_247835_247889[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247784 === (18))){
var inst_247727 = (state_247783[(2)]);
var state_247783__$1 = state_247783;
var statearr_247836_247890 = state_247783__$1;
(statearr_247836_247890[(2)] = inst_247727);

(statearr_247836_247890[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247784 === (37))){
var state_247783__$1 = state_247783;
var statearr_247837_247891 = state_247783__$1;
(statearr_247837_247891[(2)] = null);

(statearr_247837_247891[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247784 === (8))){
var inst_247689 = (state_247783[(8)]);
var inst_247706 = cljs.core.apply.call(null,cljs.core.hash_map,inst_247689);
var state_247783__$1 = state_247783;
var statearr_247838_247892 = state_247783__$1;
(statearr_247838_247892[(2)] = inst_247706);

(statearr_247838_247892[(1)] = (10));


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
});})(c__10446__auto___247846,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10425__auto__,c__10446__auto___247846,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10426__auto__ = null;
var cljs$core$async$mix_$_state_machine__10426__auto____0 = (function (){
var statearr_247842 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_247842[(0)] = cljs$core$async$mix_$_state_machine__10426__auto__);

(statearr_247842[(1)] = (1));

return statearr_247842;
});
var cljs$core$async$mix_$_state_machine__10426__auto____1 = (function (state_247783){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_247783);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e247843){if((e247843 instanceof Object)){
var ex__10429__auto__ = e247843;
var statearr_247844_247893 = state_247783;
(statearr_247844_247893[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_247783);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e247843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__247894 = state_247783;
state_247783 = G__247894;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10426__auto__ = function(state_247783){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10426__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10426__auto____1.call(this,state_247783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10426__auto____0;
cljs$core$async$mix_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10426__auto____1;
return cljs$core$async$mix_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto___247846,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10448__auto__ = (function (){var statearr_247845 = f__10447__auto__.call(null);
(statearr_247845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto___247846);

return statearr_247845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto___247846,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args247895 = [];
var len__9156__auto___247898 = arguments.length;
var i__9157__auto___247899 = (0);
while(true){
if((i__9157__auto___247899 < len__9156__auto___247898)){
args247895.push((arguments[i__9157__auto___247899]));

var G__247900 = (i__9157__auto___247899 + (1));
i__9157__auto___247899 = G__247900;
continue;
} else {
}
break;
}

var G__247897 = args247895.length;
switch (G__247897) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args247895.length)].join('')));

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
var args247903 = [];
var len__9156__auto___248028 = arguments.length;
var i__9157__auto___248029 = (0);
while(true){
if((i__9157__auto___248029 < len__9156__auto___248028)){
args247903.push((arguments[i__9157__auto___248029]));

var G__248030 = (i__9157__auto___248029 + (1));
i__9157__auto___248029 = G__248030;
continue;
} else {
}
break;
}

var G__247905 = args247903.length;
switch (G__247905) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args247903.length)].join('')));

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
return (function (p1__247902_SHARP_){
if(cljs.core.truth_(p1__247902_SHARP_.call(null,topic))){
return p1__247902_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__247902_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__8098__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async247906 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async247906 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta247907){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta247907 = meta247907;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async247906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_247908,meta247907__$1){
var self__ = this;
var _247908__$1 = this;
return (new cljs.core.async.t_cljs$core$async247906(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta247907__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async247906.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_247908){
var self__ = this;
var _247908__$1 = this;
return self__.meta247907;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async247906.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async247906.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async247906.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async247906.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async247906.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async247906.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async247906.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async247906.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta247907","meta247907",-1653276866,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async247906.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async247906.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async247906";

cljs.core.async.t_cljs$core$async247906.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8696__auto__,writer__8697__auto__,opt__8698__auto__){
return cljs.core._write.call(null,writer__8697__auto__,"cljs.core.async/t_cljs$core$async247906");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async247906 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async247906(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta247907){
return (new cljs.core.async.t_cljs$core$async247906(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta247907));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async247906(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10446__auto___248032 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto___248032,mults,ensure_mult,p){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto___248032,mults,ensure_mult,p){
return (function (state_247980){
var state_val_247981 = (state_247980[(1)]);
if((state_val_247981 === (7))){
var inst_247976 = (state_247980[(2)]);
var state_247980__$1 = state_247980;
var statearr_247982_248033 = state_247980__$1;
(statearr_247982_248033[(2)] = inst_247976);

(statearr_247982_248033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247981 === (20))){
var state_247980__$1 = state_247980;
var statearr_247983_248034 = state_247980__$1;
(statearr_247983_248034[(2)] = null);

(statearr_247983_248034[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247981 === (1))){
var state_247980__$1 = state_247980;
var statearr_247984_248035 = state_247980__$1;
(statearr_247984_248035[(2)] = null);

(statearr_247984_248035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247981 === (24))){
var inst_247959 = (state_247980[(7)]);
var inst_247968 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_247959);
var state_247980__$1 = state_247980;
var statearr_247985_248036 = state_247980__$1;
(statearr_247985_248036[(2)] = inst_247968);

(statearr_247985_248036[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247981 === (4))){
var inst_247911 = (state_247980[(8)]);
var inst_247911__$1 = (state_247980[(2)]);
var inst_247912 = (inst_247911__$1 == null);
var state_247980__$1 = (function (){var statearr_247986 = state_247980;
(statearr_247986[(8)] = inst_247911__$1);

return statearr_247986;
})();
if(cljs.core.truth_(inst_247912)){
var statearr_247987_248037 = state_247980__$1;
(statearr_247987_248037[(1)] = (5));

} else {
var statearr_247988_248038 = state_247980__$1;
(statearr_247988_248038[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247981 === (15))){
var inst_247953 = (state_247980[(2)]);
var state_247980__$1 = state_247980;
var statearr_247989_248039 = state_247980__$1;
(statearr_247989_248039[(2)] = inst_247953);

(statearr_247989_248039[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247981 === (21))){
var inst_247973 = (state_247980[(2)]);
var state_247980__$1 = (function (){var statearr_247990 = state_247980;
(statearr_247990[(9)] = inst_247973);

return statearr_247990;
})();
var statearr_247991_248040 = state_247980__$1;
(statearr_247991_248040[(2)] = null);

(statearr_247991_248040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247981 === (13))){
var inst_247935 = (state_247980[(10)]);
var inst_247937 = cljs.core.chunked_seq_QMARK_.call(null,inst_247935);
var state_247980__$1 = state_247980;
if(inst_247937){
var statearr_247992_248041 = state_247980__$1;
(statearr_247992_248041[(1)] = (16));

} else {
var statearr_247993_248042 = state_247980__$1;
(statearr_247993_248042[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247981 === (22))){
var inst_247965 = (state_247980[(2)]);
var state_247980__$1 = state_247980;
if(cljs.core.truth_(inst_247965)){
var statearr_247994_248043 = state_247980__$1;
(statearr_247994_248043[(1)] = (23));

} else {
var statearr_247995_248044 = state_247980__$1;
(statearr_247995_248044[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247981 === (6))){
var inst_247961 = (state_247980[(11)]);
var inst_247911 = (state_247980[(8)]);
var inst_247959 = (state_247980[(7)]);
var inst_247959__$1 = topic_fn.call(null,inst_247911);
var inst_247960 = cljs.core.deref.call(null,mults);
var inst_247961__$1 = cljs.core.get.call(null,inst_247960,inst_247959__$1);
var state_247980__$1 = (function (){var statearr_247996 = state_247980;
(statearr_247996[(11)] = inst_247961__$1);

(statearr_247996[(7)] = inst_247959__$1);

return statearr_247996;
})();
if(cljs.core.truth_(inst_247961__$1)){
var statearr_247997_248045 = state_247980__$1;
(statearr_247997_248045[(1)] = (19));

} else {
var statearr_247998_248046 = state_247980__$1;
(statearr_247998_248046[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247981 === (25))){
var inst_247970 = (state_247980[(2)]);
var state_247980__$1 = state_247980;
var statearr_247999_248047 = state_247980__$1;
(statearr_247999_248047[(2)] = inst_247970);

(statearr_247999_248047[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247981 === (17))){
var inst_247935 = (state_247980[(10)]);
var inst_247944 = cljs.core.first.call(null,inst_247935);
var inst_247945 = cljs.core.async.muxch_STAR_.call(null,inst_247944);
var inst_247946 = cljs.core.async.close_BANG_.call(null,inst_247945);
var inst_247947 = cljs.core.next.call(null,inst_247935);
var inst_247921 = inst_247947;
var inst_247922 = null;
var inst_247923 = (0);
var inst_247924 = (0);
var state_247980__$1 = (function (){var statearr_248000 = state_247980;
(statearr_248000[(12)] = inst_247924);

(statearr_248000[(13)] = inst_247922);

(statearr_248000[(14)] = inst_247921);

(statearr_248000[(15)] = inst_247923);

(statearr_248000[(16)] = inst_247946);

return statearr_248000;
})();
var statearr_248001_248048 = state_247980__$1;
(statearr_248001_248048[(2)] = null);

(statearr_248001_248048[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247981 === (3))){
var inst_247978 = (state_247980[(2)]);
var state_247980__$1 = state_247980;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_247980__$1,inst_247978);
} else {
if((state_val_247981 === (12))){
var inst_247955 = (state_247980[(2)]);
var state_247980__$1 = state_247980;
var statearr_248002_248049 = state_247980__$1;
(statearr_248002_248049[(2)] = inst_247955);

(statearr_248002_248049[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247981 === (2))){
var state_247980__$1 = state_247980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_247980__$1,(4),ch);
} else {
if((state_val_247981 === (23))){
var state_247980__$1 = state_247980;
var statearr_248003_248050 = state_247980__$1;
(statearr_248003_248050[(2)] = null);

(statearr_248003_248050[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247981 === (19))){
var inst_247961 = (state_247980[(11)]);
var inst_247911 = (state_247980[(8)]);
var inst_247963 = cljs.core.async.muxch_STAR_.call(null,inst_247961);
var state_247980__$1 = state_247980;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_247980__$1,(22),inst_247963,inst_247911);
} else {
if((state_val_247981 === (11))){
var inst_247921 = (state_247980[(14)]);
var inst_247935 = (state_247980[(10)]);
var inst_247935__$1 = cljs.core.seq.call(null,inst_247921);
var state_247980__$1 = (function (){var statearr_248004 = state_247980;
(statearr_248004[(10)] = inst_247935__$1);

return statearr_248004;
})();
if(inst_247935__$1){
var statearr_248005_248051 = state_247980__$1;
(statearr_248005_248051[(1)] = (13));

} else {
var statearr_248006_248052 = state_247980__$1;
(statearr_248006_248052[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247981 === (9))){
var inst_247957 = (state_247980[(2)]);
var state_247980__$1 = state_247980;
var statearr_248007_248053 = state_247980__$1;
(statearr_248007_248053[(2)] = inst_247957);

(statearr_248007_248053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247981 === (5))){
var inst_247918 = cljs.core.deref.call(null,mults);
var inst_247919 = cljs.core.vals.call(null,inst_247918);
var inst_247920 = cljs.core.seq.call(null,inst_247919);
var inst_247921 = inst_247920;
var inst_247922 = null;
var inst_247923 = (0);
var inst_247924 = (0);
var state_247980__$1 = (function (){var statearr_248008 = state_247980;
(statearr_248008[(12)] = inst_247924);

(statearr_248008[(13)] = inst_247922);

(statearr_248008[(14)] = inst_247921);

(statearr_248008[(15)] = inst_247923);

return statearr_248008;
})();
var statearr_248009_248054 = state_247980__$1;
(statearr_248009_248054[(2)] = null);

(statearr_248009_248054[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247981 === (14))){
var state_247980__$1 = state_247980;
var statearr_248013_248055 = state_247980__$1;
(statearr_248013_248055[(2)] = null);

(statearr_248013_248055[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247981 === (16))){
var inst_247935 = (state_247980[(10)]);
var inst_247939 = cljs.core.chunk_first.call(null,inst_247935);
var inst_247940 = cljs.core.chunk_rest.call(null,inst_247935);
var inst_247941 = cljs.core.count.call(null,inst_247939);
var inst_247921 = inst_247940;
var inst_247922 = inst_247939;
var inst_247923 = inst_247941;
var inst_247924 = (0);
var state_247980__$1 = (function (){var statearr_248014 = state_247980;
(statearr_248014[(12)] = inst_247924);

(statearr_248014[(13)] = inst_247922);

(statearr_248014[(14)] = inst_247921);

(statearr_248014[(15)] = inst_247923);

return statearr_248014;
})();
var statearr_248015_248056 = state_247980__$1;
(statearr_248015_248056[(2)] = null);

(statearr_248015_248056[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247981 === (10))){
var inst_247924 = (state_247980[(12)]);
var inst_247922 = (state_247980[(13)]);
var inst_247921 = (state_247980[(14)]);
var inst_247923 = (state_247980[(15)]);
var inst_247929 = cljs.core._nth.call(null,inst_247922,inst_247924);
var inst_247930 = cljs.core.async.muxch_STAR_.call(null,inst_247929);
var inst_247931 = cljs.core.async.close_BANG_.call(null,inst_247930);
var inst_247932 = (inst_247924 + (1));
var tmp248010 = inst_247922;
var tmp248011 = inst_247921;
var tmp248012 = inst_247923;
var inst_247921__$1 = tmp248011;
var inst_247922__$1 = tmp248010;
var inst_247923__$1 = tmp248012;
var inst_247924__$1 = inst_247932;
var state_247980__$1 = (function (){var statearr_248016 = state_247980;
(statearr_248016[(12)] = inst_247924__$1);

(statearr_248016[(13)] = inst_247922__$1);

(statearr_248016[(17)] = inst_247931);

(statearr_248016[(14)] = inst_247921__$1);

(statearr_248016[(15)] = inst_247923__$1);

return statearr_248016;
})();
var statearr_248017_248057 = state_247980__$1;
(statearr_248017_248057[(2)] = null);

(statearr_248017_248057[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247981 === (18))){
var inst_247950 = (state_247980[(2)]);
var state_247980__$1 = state_247980;
var statearr_248018_248058 = state_247980__$1;
(statearr_248018_248058[(2)] = inst_247950);

(statearr_248018_248058[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_247981 === (8))){
var inst_247924 = (state_247980[(12)]);
var inst_247923 = (state_247980[(15)]);
var inst_247926 = (inst_247924 < inst_247923);
var inst_247927 = inst_247926;
var state_247980__$1 = state_247980;
if(cljs.core.truth_(inst_247927)){
var statearr_248019_248059 = state_247980__$1;
(statearr_248019_248059[(1)] = (10));

} else {
var statearr_248020_248060 = state_247980__$1;
(statearr_248020_248060[(1)] = (11));

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
});})(c__10446__auto___248032,mults,ensure_mult,p))
;
return ((function (switch__10425__auto__,c__10446__auto___248032,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10426__auto__ = null;
var cljs$core$async$state_machine__10426__auto____0 = (function (){
var statearr_248024 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_248024[(0)] = cljs$core$async$state_machine__10426__auto__);

(statearr_248024[(1)] = (1));

return statearr_248024;
});
var cljs$core$async$state_machine__10426__auto____1 = (function (state_247980){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_247980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e248025){if((e248025 instanceof Object)){
var ex__10429__auto__ = e248025;
var statearr_248026_248061 = state_247980;
(statearr_248026_248061[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_247980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e248025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__248062 = state_247980;
state_247980 = G__248062;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
cljs$core$async$state_machine__10426__auto__ = function(state_247980){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10426__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10426__auto____1.call(this,state_247980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10426__auto____0;
cljs$core$async$state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10426__auto____1;
return cljs$core$async$state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto___248032,mults,ensure_mult,p))
})();
var state__10448__auto__ = (function (){var statearr_248027 = f__10447__auto__.call(null);
(statearr_248027[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto___248032);

return statearr_248027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto___248032,mults,ensure_mult,p))
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
var args248063 = [];
var len__9156__auto___248066 = arguments.length;
var i__9157__auto___248067 = (0);
while(true){
if((i__9157__auto___248067 < len__9156__auto___248066)){
args248063.push((arguments[i__9157__auto___248067]));

var G__248068 = (i__9157__auto___248067 + (1));
i__9157__auto___248067 = G__248068;
continue;
} else {
}
break;
}

var G__248065 = args248063.length;
switch (G__248065) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args248063.length)].join('')));

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
var args248070 = [];
var len__9156__auto___248073 = arguments.length;
var i__9157__auto___248074 = (0);
while(true){
if((i__9157__auto___248074 < len__9156__auto___248073)){
args248070.push((arguments[i__9157__auto___248074]));

var G__248075 = (i__9157__auto___248074 + (1));
i__9157__auto___248074 = G__248075;
continue;
} else {
}
break;
}

var G__248072 = args248070.length;
switch (G__248072) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args248070.length)].join('')));

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
var args248077 = [];
var len__9156__auto___248148 = arguments.length;
var i__9157__auto___248149 = (0);
while(true){
if((i__9157__auto___248149 < len__9156__auto___248148)){
args248077.push((arguments[i__9157__auto___248149]));

var G__248150 = (i__9157__auto___248149 + (1));
i__9157__auto___248149 = G__248150;
continue;
} else {
}
break;
}

var G__248079 = args248077.length;
switch (G__248079) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args248077.length)].join('')));

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
var c__10446__auto___248152 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto___248152,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto___248152,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_248118){
var state_val_248119 = (state_248118[(1)]);
if((state_val_248119 === (7))){
var state_248118__$1 = state_248118;
var statearr_248120_248153 = state_248118__$1;
(statearr_248120_248153[(2)] = null);

(statearr_248120_248153[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248119 === (1))){
var state_248118__$1 = state_248118;
var statearr_248121_248154 = state_248118__$1;
(statearr_248121_248154[(2)] = null);

(statearr_248121_248154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248119 === (4))){
var inst_248082 = (state_248118[(7)]);
var inst_248084 = (inst_248082 < cnt);
var state_248118__$1 = state_248118;
if(cljs.core.truth_(inst_248084)){
var statearr_248122_248155 = state_248118__$1;
(statearr_248122_248155[(1)] = (6));

} else {
var statearr_248123_248156 = state_248118__$1;
(statearr_248123_248156[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248119 === (15))){
var inst_248114 = (state_248118[(2)]);
var state_248118__$1 = state_248118;
var statearr_248124_248157 = state_248118__$1;
(statearr_248124_248157[(2)] = inst_248114);

(statearr_248124_248157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248119 === (13))){
var inst_248107 = cljs.core.async.close_BANG_.call(null,out);
var state_248118__$1 = state_248118;
var statearr_248125_248158 = state_248118__$1;
(statearr_248125_248158[(2)] = inst_248107);

(statearr_248125_248158[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248119 === (6))){
var state_248118__$1 = state_248118;
var statearr_248126_248159 = state_248118__$1;
(statearr_248126_248159[(2)] = null);

(statearr_248126_248159[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248119 === (3))){
var inst_248116 = (state_248118[(2)]);
var state_248118__$1 = state_248118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_248118__$1,inst_248116);
} else {
if((state_val_248119 === (12))){
var inst_248104 = (state_248118[(8)]);
var inst_248104__$1 = (state_248118[(2)]);
var inst_248105 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_248104__$1);
var state_248118__$1 = (function (){var statearr_248127 = state_248118;
(statearr_248127[(8)] = inst_248104__$1);

return statearr_248127;
})();
if(cljs.core.truth_(inst_248105)){
var statearr_248128_248160 = state_248118__$1;
(statearr_248128_248160[(1)] = (13));

} else {
var statearr_248129_248161 = state_248118__$1;
(statearr_248129_248161[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248119 === (2))){
var inst_248081 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_248082 = (0);
var state_248118__$1 = (function (){var statearr_248130 = state_248118;
(statearr_248130[(9)] = inst_248081);

(statearr_248130[(7)] = inst_248082);

return statearr_248130;
})();
var statearr_248131_248162 = state_248118__$1;
(statearr_248131_248162[(2)] = null);

(statearr_248131_248162[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248119 === (11))){
var inst_248082 = (state_248118[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_248118,(10),Object,null,(9));
var inst_248091 = chs__$1.call(null,inst_248082);
var inst_248092 = done.call(null,inst_248082);
var inst_248093 = cljs.core.async.take_BANG_.call(null,inst_248091,inst_248092);
var state_248118__$1 = state_248118;
var statearr_248132_248163 = state_248118__$1;
(statearr_248132_248163[(2)] = inst_248093);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_248118__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248119 === (9))){
var inst_248082 = (state_248118[(7)]);
var inst_248095 = (state_248118[(2)]);
var inst_248096 = (inst_248082 + (1));
var inst_248082__$1 = inst_248096;
var state_248118__$1 = (function (){var statearr_248133 = state_248118;
(statearr_248133[(7)] = inst_248082__$1);

(statearr_248133[(10)] = inst_248095);

return statearr_248133;
})();
var statearr_248134_248164 = state_248118__$1;
(statearr_248134_248164[(2)] = null);

(statearr_248134_248164[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248119 === (5))){
var inst_248102 = (state_248118[(2)]);
var state_248118__$1 = (function (){var statearr_248135 = state_248118;
(statearr_248135[(11)] = inst_248102);

return statearr_248135;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_248118__$1,(12),dchan);
} else {
if((state_val_248119 === (14))){
var inst_248104 = (state_248118[(8)]);
var inst_248109 = cljs.core.apply.call(null,f,inst_248104);
var state_248118__$1 = state_248118;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_248118__$1,(16),out,inst_248109);
} else {
if((state_val_248119 === (16))){
var inst_248111 = (state_248118[(2)]);
var state_248118__$1 = (function (){var statearr_248136 = state_248118;
(statearr_248136[(12)] = inst_248111);

return statearr_248136;
})();
var statearr_248137_248165 = state_248118__$1;
(statearr_248137_248165[(2)] = null);

(statearr_248137_248165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248119 === (10))){
var inst_248086 = (state_248118[(2)]);
var inst_248087 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_248118__$1 = (function (){var statearr_248138 = state_248118;
(statearr_248138[(13)] = inst_248086);

return statearr_248138;
})();
var statearr_248139_248166 = state_248118__$1;
(statearr_248139_248166[(2)] = inst_248087);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_248118__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248119 === (8))){
var inst_248100 = (state_248118[(2)]);
var state_248118__$1 = state_248118;
var statearr_248140_248167 = state_248118__$1;
(statearr_248140_248167[(2)] = inst_248100);

(statearr_248140_248167[(1)] = (5));


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
});})(c__10446__auto___248152,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10425__auto__,c__10446__auto___248152,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10426__auto__ = null;
var cljs$core$async$state_machine__10426__auto____0 = (function (){
var statearr_248144 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_248144[(0)] = cljs$core$async$state_machine__10426__auto__);

(statearr_248144[(1)] = (1));

return statearr_248144;
});
var cljs$core$async$state_machine__10426__auto____1 = (function (state_248118){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_248118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e248145){if((e248145 instanceof Object)){
var ex__10429__auto__ = e248145;
var statearr_248146_248168 = state_248118;
(statearr_248146_248168[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_248118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e248145;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__248169 = state_248118;
state_248118 = G__248169;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
cljs$core$async$state_machine__10426__auto__ = function(state_248118){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10426__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10426__auto____1.call(this,state_248118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10426__auto____0;
cljs$core$async$state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10426__auto____1;
return cljs$core$async$state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto___248152,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10448__auto__ = (function (){var statearr_248147 = f__10447__auto__.call(null);
(statearr_248147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto___248152);

return statearr_248147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto___248152,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args248171 = [];
var len__9156__auto___248227 = arguments.length;
var i__9157__auto___248228 = (0);
while(true){
if((i__9157__auto___248228 < len__9156__auto___248227)){
args248171.push((arguments[i__9157__auto___248228]));

var G__248229 = (i__9157__auto___248228 + (1));
i__9157__auto___248228 = G__248229;
continue;
} else {
}
break;
}

var G__248173 = args248171.length;
switch (G__248173) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args248171.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10446__auto___248231 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto___248231,out){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto___248231,out){
return (function (state_248203){
var state_val_248204 = (state_248203[(1)]);
if((state_val_248204 === (7))){
var inst_248183 = (state_248203[(7)]);
var inst_248182 = (state_248203[(8)]);
var inst_248182__$1 = (state_248203[(2)]);
var inst_248183__$1 = cljs.core.nth.call(null,inst_248182__$1,(0),null);
var inst_248184 = cljs.core.nth.call(null,inst_248182__$1,(1),null);
var inst_248185 = (inst_248183__$1 == null);
var state_248203__$1 = (function (){var statearr_248205 = state_248203;
(statearr_248205[(9)] = inst_248184);

(statearr_248205[(7)] = inst_248183__$1);

(statearr_248205[(8)] = inst_248182__$1);

return statearr_248205;
})();
if(cljs.core.truth_(inst_248185)){
var statearr_248206_248232 = state_248203__$1;
(statearr_248206_248232[(1)] = (8));

} else {
var statearr_248207_248233 = state_248203__$1;
(statearr_248207_248233[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248204 === (1))){
var inst_248174 = cljs.core.vec.call(null,chs);
var inst_248175 = inst_248174;
var state_248203__$1 = (function (){var statearr_248208 = state_248203;
(statearr_248208[(10)] = inst_248175);

return statearr_248208;
})();
var statearr_248209_248234 = state_248203__$1;
(statearr_248209_248234[(2)] = null);

(statearr_248209_248234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248204 === (4))){
var inst_248175 = (state_248203[(10)]);
var state_248203__$1 = state_248203;
return cljs.core.async.ioc_alts_BANG_.call(null,state_248203__$1,(7),inst_248175);
} else {
if((state_val_248204 === (6))){
var inst_248199 = (state_248203[(2)]);
var state_248203__$1 = state_248203;
var statearr_248210_248235 = state_248203__$1;
(statearr_248210_248235[(2)] = inst_248199);

(statearr_248210_248235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248204 === (3))){
var inst_248201 = (state_248203[(2)]);
var state_248203__$1 = state_248203;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_248203__$1,inst_248201);
} else {
if((state_val_248204 === (2))){
var inst_248175 = (state_248203[(10)]);
var inst_248177 = cljs.core.count.call(null,inst_248175);
var inst_248178 = (inst_248177 > (0));
var state_248203__$1 = state_248203;
if(cljs.core.truth_(inst_248178)){
var statearr_248212_248236 = state_248203__$1;
(statearr_248212_248236[(1)] = (4));

} else {
var statearr_248213_248237 = state_248203__$1;
(statearr_248213_248237[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248204 === (11))){
var inst_248175 = (state_248203[(10)]);
var inst_248192 = (state_248203[(2)]);
var tmp248211 = inst_248175;
var inst_248175__$1 = tmp248211;
var state_248203__$1 = (function (){var statearr_248214 = state_248203;
(statearr_248214[(10)] = inst_248175__$1);

(statearr_248214[(11)] = inst_248192);

return statearr_248214;
})();
var statearr_248215_248238 = state_248203__$1;
(statearr_248215_248238[(2)] = null);

(statearr_248215_248238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248204 === (9))){
var inst_248183 = (state_248203[(7)]);
var state_248203__$1 = state_248203;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_248203__$1,(11),out,inst_248183);
} else {
if((state_val_248204 === (5))){
var inst_248197 = cljs.core.async.close_BANG_.call(null,out);
var state_248203__$1 = state_248203;
var statearr_248216_248239 = state_248203__$1;
(statearr_248216_248239[(2)] = inst_248197);

(statearr_248216_248239[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248204 === (10))){
var inst_248195 = (state_248203[(2)]);
var state_248203__$1 = state_248203;
var statearr_248217_248240 = state_248203__$1;
(statearr_248217_248240[(2)] = inst_248195);

(statearr_248217_248240[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248204 === (8))){
var inst_248184 = (state_248203[(9)]);
var inst_248183 = (state_248203[(7)]);
var inst_248182 = (state_248203[(8)]);
var inst_248175 = (state_248203[(10)]);
var inst_248187 = (function (){var cs = inst_248175;
var vec__248180 = inst_248182;
var v = inst_248183;
var c = inst_248184;
return ((function (cs,vec__248180,v,c,inst_248184,inst_248183,inst_248182,inst_248175,state_val_248204,c__10446__auto___248231,out){
return (function (p1__248170_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__248170_SHARP_);
});
;})(cs,vec__248180,v,c,inst_248184,inst_248183,inst_248182,inst_248175,state_val_248204,c__10446__auto___248231,out))
})();
var inst_248188 = cljs.core.filterv.call(null,inst_248187,inst_248175);
var inst_248175__$1 = inst_248188;
var state_248203__$1 = (function (){var statearr_248218 = state_248203;
(statearr_248218[(10)] = inst_248175__$1);

return statearr_248218;
})();
var statearr_248219_248241 = state_248203__$1;
(statearr_248219_248241[(2)] = null);

(statearr_248219_248241[(1)] = (2));


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
});})(c__10446__auto___248231,out))
;
return ((function (switch__10425__auto__,c__10446__auto___248231,out){
return (function() {
var cljs$core$async$state_machine__10426__auto__ = null;
var cljs$core$async$state_machine__10426__auto____0 = (function (){
var statearr_248223 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_248223[(0)] = cljs$core$async$state_machine__10426__auto__);

(statearr_248223[(1)] = (1));

return statearr_248223;
});
var cljs$core$async$state_machine__10426__auto____1 = (function (state_248203){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_248203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e248224){if((e248224 instanceof Object)){
var ex__10429__auto__ = e248224;
var statearr_248225_248242 = state_248203;
(statearr_248225_248242[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_248203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e248224;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__248243 = state_248203;
state_248203 = G__248243;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
cljs$core$async$state_machine__10426__auto__ = function(state_248203){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10426__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10426__auto____1.call(this,state_248203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10426__auto____0;
cljs$core$async$state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10426__auto____1;
return cljs$core$async$state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto___248231,out))
})();
var state__10448__auto__ = (function (){var statearr_248226 = f__10447__auto__.call(null);
(statearr_248226[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto___248231);

return statearr_248226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto___248231,out))
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
var args248244 = [];
var len__9156__auto___248293 = arguments.length;
var i__9157__auto___248294 = (0);
while(true){
if((i__9157__auto___248294 < len__9156__auto___248293)){
args248244.push((arguments[i__9157__auto___248294]));

var G__248295 = (i__9157__auto___248294 + (1));
i__9157__auto___248294 = G__248295;
continue;
} else {
}
break;
}

var G__248246 = args248244.length;
switch (G__248246) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args248244.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10446__auto___248297 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto___248297,out){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto___248297,out){
return (function (state_248270){
var state_val_248271 = (state_248270[(1)]);
if((state_val_248271 === (7))){
var inst_248252 = (state_248270[(7)]);
var inst_248252__$1 = (state_248270[(2)]);
var inst_248253 = (inst_248252__$1 == null);
var inst_248254 = cljs.core.not.call(null,inst_248253);
var state_248270__$1 = (function (){var statearr_248272 = state_248270;
(statearr_248272[(7)] = inst_248252__$1);

return statearr_248272;
})();
if(inst_248254){
var statearr_248273_248298 = state_248270__$1;
(statearr_248273_248298[(1)] = (8));

} else {
var statearr_248274_248299 = state_248270__$1;
(statearr_248274_248299[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248271 === (1))){
var inst_248247 = (0);
var state_248270__$1 = (function (){var statearr_248275 = state_248270;
(statearr_248275[(8)] = inst_248247);

return statearr_248275;
})();
var statearr_248276_248300 = state_248270__$1;
(statearr_248276_248300[(2)] = null);

(statearr_248276_248300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248271 === (4))){
var state_248270__$1 = state_248270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_248270__$1,(7),ch);
} else {
if((state_val_248271 === (6))){
var inst_248265 = (state_248270[(2)]);
var state_248270__$1 = state_248270;
var statearr_248277_248301 = state_248270__$1;
(statearr_248277_248301[(2)] = inst_248265);

(statearr_248277_248301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248271 === (3))){
var inst_248267 = (state_248270[(2)]);
var inst_248268 = cljs.core.async.close_BANG_.call(null,out);
var state_248270__$1 = (function (){var statearr_248278 = state_248270;
(statearr_248278[(9)] = inst_248267);

return statearr_248278;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_248270__$1,inst_248268);
} else {
if((state_val_248271 === (2))){
var inst_248247 = (state_248270[(8)]);
var inst_248249 = (inst_248247 < n);
var state_248270__$1 = state_248270;
if(cljs.core.truth_(inst_248249)){
var statearr_248279_248302 = state_248270__$1;
(statearr_248279_248302[(1)] = (4));

} else {
var statearr_248280_248303 = state_248270__$1;
(statearr_248280_248303[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248271 === (11))){
var inst_248247 = (state_248270[(8)]);
var inst_248257 = (state_248270[(2)]);
var inst_248258 = (inst_248247 + (1));
var inst_248247__$1 = inst_248258;
var state_248270__$1 = (function (){var statearr_248281 = state_248270;
(statearr_248281[(10)] = inst_248257);

(statearr_248281[(8)] = inst_248247__$1);

return statearr_248281;
})();
var statearr_248282_248304 = state_248270__$1;
(statearr_248282_248304[(2)] = null);

(statearr_248282_248304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248271 === (9))){
var state_248270__$1 = state_248270;
var statearr_248283_248305 = state_248270__$1;
(statearr_248283_248305[(2)] = null);

(statearr_248283_248305[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248271 === (5))){
var state_248270__$1 = state_248270;
var statearr_248284_248306 = state_248270__$1;
(statearr_248284_248306[(2)] = null);

(statearr_248284_248306[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248271 === (10))){
var inst_248262 = (state_248270[(2)]);
var state_248270__$1 = state_248270;
var statearr_248285_248307 = state_248270__$1;
(statearr_248285_248307[(2)] = inst_248262);

(statearr_248285_248307[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248271 === (8))){
var inst_248252 = (state_248270[(7)]);
var state_248270__$1 = state_248270;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_248270__$1,(11),out,inst_248252);
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
});})(c__10446__auto___248297,out))
;
return ((function (switch__10425__auto__,c__10446__auto___248297,out){
return (function() {
var cljs$core$async$state_machine__10426__auto__ = null;
var cljs$core$async$state_machine__10426__auto____0 = (function (){
var statearr_248289 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_248289[(0)] = cljs$core$async$state_machine__10426__auto__);

(statearr_248289[(1)] = (1));

return statearr_248289;
});
var cljs$core$async$state_machine__10426__auto____1 = (function (state_248270){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_248270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e248290){if((e248290 instanceof Object)){
var ex__10429__auto__ = e248290;
var statearr_248291_248308 = state_248270;
(statearr_248291_248308[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_248270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e248290;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__248309 = state_248270;
state_248270 = G__248309;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
cljs$core$async$state_machine__10426__auto__ = function(state_248270){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10426__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10426__auto____1.call(this,state_248270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10426__auto____0;
cljs$core$async$state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10426__auto____1;
return cljs$core$async$state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto___248297,out))
})();
var state__10448__auto__ = (function (){var statearr_248292 = f__10447__auto__.call(null);
(statearr_248292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto___248297);

return statearr_248292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto___248297,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async248317 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async248317 = (function (map_LT_,f,ch,meta248318){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta248318 = meta248318;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async248317.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_248319,meta248318__$1){
var self__ = this;
var _248319__$1 = this;
return (new cljs.core.async.t_cljs$core$async248317(self__.map_LT_,self__.f,self__.ch,meta248318__$1));
});

cljs.core.async.t_cljs$core$async248317.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_248319){
var self__ = this;
var _248319__$1 = this;
return self__.meta248318;
});

cljs.core.async.t_cljs$core$async248317.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async248317.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async248317.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async248317.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async248317.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async248320 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async248320 = (function (map_LT_,f,ch,meta248318,_,fn1,meta248321){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta248318 = meta248318;
this._ = _;
this.fn1 = fn1;
this.meta248321 = meta248321;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async248320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_248322,meta248321__$1){
var self__ = this;
var _248322__$1 = this;
return (new cljs.core.async.t_cljs$core$async248320(self__.map_LT_,self__.f,self__.ch,self__.meta248318,self__._,self__.fn1,meta248321__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async248320.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_248322){
var self__ = this;
var _248322__$1 = this;
return self__.meta248321;
});})(___$1))
;

cljs.core.async.t_cljs$core$async248320.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async248320.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async248320.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async248320.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__248310_SHARP_){
return f1.call(null,(((p1__248310_SHARP_ == null))?null:self__.f.call(null,p1__248310_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async248320.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta248318","meta248318",1942502185,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async248317","cljs.core.async/t_cljs$core$async248317",245213755,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta248321","meta248321",-1920512328,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async248320.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async248320.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async248320";

cljs.core.async.t_cljs$core$async248320.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8696__auto__,writer__8697__auto__,opt__8698__auto__){
return cljs.core._write.call(null,writer__8697__auto__,"cljs.core.async/t_cljs$core$async248320");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async248320 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async248320(map_LT___$1,f__$1,ch__$1,meta248318__$1,___$2,fn1__$1,meta248321){
return (new cljs.core.async.t_cljs$core$async248320(map_LT___$1,f__$1,ch__$1,meta248318__$1,___$2,fn1__$1,meta248321));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async248320(self__.map_LT_,self__.f,self__.ch,self__.meta248318,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async248317.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async248317.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async248317.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta248318","meta248318",1942502185,null)], null);
});

cljs.core.async.t_cljs$core$async248317.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async248317.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async248317";

cljs.core.async.t_cljs$core$async248317.cljs$lang$ctorPrWriter = (function (this__8696__auto__,writer__8697__auto__,opt__8698__auto__){
return cljs.core._write.call(null,writer__8697__auto__,"cljs.core.async/t_cljs$core$async248317");
});

cljs.core.async.__GT_t_cljs$core$async248317 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async248317(map_LT___$1,f__$1,ch__$1,meta248318){
return (new cljs.core.async.t_cljs$core$async248317(map_LT___$1,f__$1,ch__$1,meta248318));
});

}

return (new cljs.core.async.t_cljs$core$async248317(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async248326 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async248326 = (function (map_GT_,f,ch,meta248327){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta248327 = meta248327;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async248326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_248328,meta248327__$1){
var self__ = this;
var _248328__$1 = this;
return (new cljs.core.async.t_cljs$core$async248326(self__.map_GT_,self__.f,self__.ch,meta248327__$1));
});

cljs.core.async.t_cljs$core$async248326.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_248328){
var self__ = this;
var _248328__$1 = this;
return self__.meta248327;
});

cljs.core.async.t_cljs$core$async248326.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async248326.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async248326.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async248326.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async248326.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async248326.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async248326.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta248327","meta248327",-704984390,null)], null);
});

cljs.core.async.t_cljs$core$async248326.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async248326.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async248326";

cljs.core.async.t_cljs$core$async248326.cljs$lang$ctorPrWriter = (function (this__8696__auto__,writer__8697__auto__,opt__8698__auto__){
return cljs.core._write.call(null,writer__8697__auto__,"cljs.core.async/t_cljs$core$async248326");
});

cljs.core.async.__GT_t_cljs$core$async248326 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async248326(map_GT___$1,f__$1,ch__$1,meta248327){
return (new cljs.core.async.t_cljs$core$async248326(map_GT___$1,f__$1,ch__$1,meta248327));
});

}

return (new cljs.core.async.t_cljs$core$async248326(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async248332 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async248332 = (function (filter_GT_,p,ch,meta248333){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta248333 = meta248333;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async248332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_248334,meta248333__$1){
var self__ = this;
var _248334__$1 = this;
return (new cljs.core.async.t_cljs$core$async248332(self__.filter_GT_,self__.p,self__.ch,meta248333__$1));
});

cljs.core.async.t_cljs$core$async248332.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_248334){
var self__ = this;
var _248334__$1 = this;
return self__.meta248333;
});

cljs.core.async.t_cljs$core$async248332.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async248332.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async248332.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async248332.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async248332.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async248332.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async248332.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async248332.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta248333","meta248333",1846998362,null)], null);
});

cljs.core.async.t_cljs$core$async248332.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async248332.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async248332";

cljs.core.async.t_cljs$core$async248332.cljs$lang$ctorPrWriter = (function (this__8696__auto__,writer__8697__auto__,opt__8698__auto__){
return cljs.core._write.call(null,writer__8697__auto__,"cljs.core.async/t_cljs$core$async248332");
});

cljs.core.async.__GT_t_cljs$core$async248332 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async248332(filter_GT___$1,p__$1,ch__$1,meta248333){
return (new cljs.core.async.t_cljs$core$async248332(filter_GT___$1,p__$1,ch__$1,meta248333));
});

}

return (new cljs.core.async.t_cljs$core$async248332(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args248335 = [];
var len__9156__auto___248379 = arguments.length;
var i__9157__auto___248380 = (0);
while(true){
if((i__9157__auto___248380 < len__9156__auto___248379)){
args248335.push((arguments[i__9157__auto___248380]));

var G__248381 = (i__9157__auto___248380 + (1));
i__9157__auto___248380 = G__248381;
continue;
} else {
}
break;
}

var G__248337 = args248335.length;
switch (G__248337) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args248335.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10446__auto___248383 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto___248383,out){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto___248383,out){
return (function (state_248358){
var state_val_248359 = (state_248358[(1)]);
if((state_val_248359 === (7))){
var inst_248354 = (state_248358[(2)]);
var state_248358__$1 = state_248358;
var statearr_248360_248384 = state_248358__$1;
(statearr_248360_248384[(2)] = inst_248354);

(statearr_248360_248384[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248359 === (1))){
var state_248358__$1 = state_248358;
var statearr_248361_248385 = state_248358__$1;
(statearr_248361_248385[(2)] = null);

(statearr_248361_248385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248359 === (4))){
var inst_248340 = (state_248358[(7)]);
var inst_248340__$1 = (state_248358[(2)]);
var inst_248341 = (inst_248340__$1 == null);
var state_248358__$1 = (function (){var statearr_248362 = state_248358;
(statearr_248362[(7)] = inst_248340__$1);

return statearr_248362;
})();
if(cljs.core.truth_(inst_248341)){
var statearr_248363_248386 = state_248358__$1;
(statearr_248363_248386[(1)] = (5));

} else {
var statearr_248364_248387 = state_248358__$1;
(statearr_248364_248387[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248359 === (6))){
var inst_248340 = (state_248358[(7)]);
var inst_248345 = p.call(null,inst_248340);
var state_248358__$1 = state_248358;
if(cljs.core.truth_(inst_248345)){
var statearr_248365_248388 = state_248358__$1;
(statearr_248365_248388[(1)] = (8));

} else {
var statearr_248366_248389 = state_248358__$1;
(statearr_248366_248389[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248359 === (3))){
var inst_248356 = (state_248358[(2)]);
var state_248358__$1 = state_248358;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_248358__$1,inst_248356);
} else {
if((state_val_248359 === (2))){
var state_248358__$1 = state_248358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_248358__$1,(4),ch);
} else {
if((state_val_248359 === (11))){
var inst_248348 = (state_248358[(2)]);
var state_248358__$1 = state_248358;
var statearr_248367_248390 = state_248358__$1;
(statearr_248367_248390[(2)] = inst_248348);

(statearr_248367_248390[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248359 === (9))){
var state_248358__$1 = state_248358;
var statearr_248368_248391 = state_248358__$1;
(statearr_248368_248391[(2)] = null);

(statearr_248368_248391[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248359 === (5))){
var inst_248343 = cljs.core.async.close_BANG_.call(null,out);
var state_248358__$1 = state_248358;
var statearr_248369_248392 = state_248358__$1;
(statearr_248369_248392[(2)] = inst_248343);

(statearr_248369_248392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248359 === (10))){
var inst_248351 = (state_248358[(2)]);
var state_248358__$1 = (function (){var statearr_248370 = state_248358;
(statearr_248370[(8)] = inst_248351);

return statearr_248370;
})();
var statearr_248371_248393 = state_248358__$1;
(statearr_248371_248393[(2)] = null);

(statearr_248371_248393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248359 === (8))){
var inst_248340 = (state_248358[(7)]);
var state_248358__$1 = state_248358;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_248358__$1,(11),out,inst_248340);
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
});})(c__10446__auto___248383,out))
;
return ((function (switch__10425__auto__,c__10446__auto___248383,out){
return (function() {
var cljs$core$async$state_machine__10426__auto__ = null;
var cljs$core$async$state_machine__10426__auto____0 = (function (){
var statearr_248375 = [null,null,null,null,null,null,null,null,null];
(statearr_248375[(0)] = cljs$core$async$state_machine__10426__auto__);

(statearr_248375[(1)] = (1));

return statearr_248375;
});
var cljs$core$async$state_machine__10426__auto____1 = (function (state_248358){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_248358);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e248376){if((e248376 instanceof Object)){
var ex__10429__auto__ = e248376;
var statearr_248377_248394 = state_248358;
(statearr_248377_248394[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_248358);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e248376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__248395 = state_248358;
state_248358 = G__248395;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
cljs$core$async$state_machine__10426__auto__ = function(state_248358){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10426__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10426__auto____1.call(this,state_248358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10426__auto____0;
cljs$core$async$state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10426__auto____1;
return cljs$core$async$state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto___248383,out))
})();
var state__10448__auto__ = (function (){var statearr_248378 = f__10447__auto__.call(null);
(statearr_248378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto___248383);

return statearr_248378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto___248383,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args248396 = [];
var len__9156__auto___248399 = arguments.length;
var i__9157__auto___248400 = (0);
while(true){
if((i__9157__auto___248400 < len__9156__auto___248399)){
args248396.push((arguments[i__9157__auto___248400]));

var G__248401 = (i__9157__auto___248400 + (1));
i__9157__auto___248400 = G__248401;
continue;
} else {
}
break;
}

var G__248398 = args248396.length;
switch (G__248398) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args248396.length)].join('')));

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
return (function (state_248568){
var state_val_248569 = (state_248568[(1)]);
if((state_val_248569 === (7))){
var inst_248564 = (state_248568[(2)]);
var state_248568__$1 = state_248568;
var statearr_248570_248611 = state_248568__$1;
(statearr_248570_248611[(2)] = inst_248564);

(statearr_248570_248611[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248569 === (20))){
var inst_248534 = (state_248568[(7)]);
var inst_248545 = (state_248568[(2)]);
var inst_248546 = cljs.core.next.call(null,inst_248534);
var inst_248520 = inst_248546;
var inst_248521 = null;
var inst_248522 = (0);
var inst_248523 = (0);
var state_248568__$1 = (function (){var statearr_248571 = state_248568;
(statearr_248571[(8)] = inst_248520);

(statearr_248571[(9)] = inst_248521);

(statearr_248571[(10)] = inst_248522);

(statearr_248571[(11)] = inst_248523);

(statearr_248571[(12)] = inst_248545);

return statearr_248571;
})();
var statearr_248572_248612 = state_248568__$1;
(statearr_248572_248612[(2)] = null);

(statearr_248572_248612[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248569 === (1))){
var state_248568__$1 = state_248568;
var statearr_248573_248613 = state_248568__$1;
(statearr_248573_248613[(2)] = null);

(statearr_248573_248613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248569 === (4))){
var inst_248509 = (state_248568[(13)]);
var inst_248509__$1 = (state_248568[(2)]);
var inst_248510 = (inst_248509__$1 == null);
var state_248568__$1 = (function (){var statearr_248574 = state_248568;
(statearr_248574[(13)] = inst_248509__$1);

return statearr_248574;
})();
if(cljs.core.truth_(inst_248510)){
var statearr_248575_248614 = state_248568__$1;
(statearr_248575_248614[(1)] = (5));

} else {
var statearr_248576_248615 = state_248568__$1;
(statearr_248576_248615[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248569 === (15))){
var state_248568__$1 = state_248568;
var statearr_248580_248616 = state_248568__$1;
(statearr_248580_248616[(2)] = null);

(statearr_248580_248616[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248569 === (21))){
var state_248568__$1 = state_248568;
var statearr_248581_248617 = state_248568__$1;
(statearr_248581_248617[(2)] = null);

(statearr_248581_248617[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248569 === (13))){
var inst_248520 = (state_248568[(8)]);
var inst_248521 = (state_248568[(9)]);
var inst_248522 = (state_248568[(10)]);
var inst_248523 = (state_248568[(11)]);
var inst_248530 = (state_248568[(2)]);
var inst_248531 = (inst_248523 + (1));
var tmp248577 = inst_248520;
var tmp248578 = inst_248521;
var tmp248579 = inst_248522;
var inst_248520__$1 = tmp248577;
var inst_248521__$1 = tmp248578;
var inst_248522__$1 = tmp248579;
var inst_248523__$1 = inst_248531;
var state_248568__$1 = (function (){var statearr_248582 = state_248568;
(statearr_248582[(8)] = inst_248520__$1);

(statearr_248582[(9)] = inst_248521__$1);

(statearr_248582[(14)] = inst_248530);

(statearr_248582[(10)] = inst_248522__$1);

(statearr_248582[(11)] = inst_248523__$1);

return statearr_248582;
})();
var statearr_248583_248618 = state_248568__$1;
(statearr_248583_248618[(2)] = null);

(statearr_248583_248618[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248569 === (22))){
var state_248568__$1 = state_248568;
var statearr_248584_248619 = state_248568__$1;
(statearr_248584_248619[(2)] = null);

(statearr_248584_248619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248569 === (6))){
var inst_248509 = (state_248568[(13)]);
var inst_248518 = f.call(null,inst_248509);
var inst_248519 = cljs.core.seq.call(null,inst_248518);
var inst_248520 = inst_248519;
var inst_248521 = null;
var inst_248522 = (0);
var inst_248523 = (0);
var state_248568__$1 = (function (){var statearr_248585 = state_248568;
(statearr_248585[(8)] = inst_248520);

(statearr_248585[(9)] = inst_248521);

(statearr_248585[(10)] = inst_248522);

(statearr_248585[(11)] = inst_248523);

return statearr_248585;
})();
var statearr_248586_248620 = state_248568__$1;
(statearr_248586_248620[(2)] = null);

(statearr_248586_248620[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248569 === (17))){
var inst_248534 = (state_248568[(7)]);
var inst_248538 = cljs.core.chunk_first.call(null,inst_248534);
var inst_248539 = cljs.core.chunk_rest.call(null,inst_248534);
var inst_248540 = cljs.core.count.call(null,inst_248538);
var inst_248520 = inst_248539;
var inst_248521 = inst_248538;
var inst_248522 = inst_248540;
var inst_248523 = (0);
var state_248568__$1 = (function (){var statearr_248587 = state_248568;
(statearr_248587[(8)] = inst_248520);

(statearr_248587[(9)] = inst_248521);

(statearr_248587[(10)] = inst_248522);

(statearr_248587[(11)] = inst_248523);

return statearr_248587;
})();
var statearr_248588_248621 = state_248568__$1;
(statearr_248588_248621[(2)] = null);

(statearr_248588_248621[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248569 === (3))){
var inst_248566 = (state_248568[(2)]);
var state_248568__$1 = state_248568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_248568__$1,inst_248566);
} else {
if((state_val_248569 === (12))){
var inst_248554 = (state_248568[(2)]);
var state_248568__$1 = state_248568;
var statearr_248589_248622 = state_248568__$1;
(statearr_248589_248622[(2)] = inst_248554);

(statearr_248589_248622[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248569 === (2))){
var state_248568__$1 = state_248568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_248568__$1,(4),in$);
} else {
if((state_val_248569 === (23))){
var inst_248562 = (state_248568[(2)]);
var state_248568__$1 = state_248568;
var statearr_248590_248623 = state_248568__$1;
(statearr_248590_248623[(2)] = inst_248562);

(statearr_248590_248623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248569 === (19))){
var inst_248549 = (state_248568[(2)]);
var state_248568__$1 = state_248568;
var statearr_248591_248624 = state_248568__$1;
(statearr_248591_248624[(2)] = inst_248549);

(statearr_248591_248624[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248569 === (11))){
var inst_248534 = (state_248568[(7)]);
var inst_248520 = (state_248568[(8)]);
var inst_248534__$1 = cljs.core.seq.call(null,inst_248520);
var state_248568__$1 = (function (){var statearr_248592 = state_248568;
(statearr_248592[(7)] = inst_248534__$1);

return statearr_248592;
})();
if(inst_248534__$1){
var statearr_248593_248625 = state_248568__$1;
(statearr_248593_248625[(1)] = (14));

} else {
var statearr_248594_248626 = state_248568__$1;
(statearr_248594_248626[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248569 === (9))){
var inst_248556 = (state_248568[(2)]);
var inst_248557 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_248568__$1 = (function (){var statearr_248595 = state_248568;
(statearr_248595[(15)] = inst_248556);

return statearr_248595;
})();
if(cljs.core.truth_(inst_248557)){
var statearr_248596_248627 = state_248568__$1;
(statearr_248596_248627[(1)] = (21));

} else {
var statearr_248597_248628 = state_248568__$1;
(statearr_248597_248628[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248569 === (5))){
var inst_248512 = cljs.core.async.close_BANG_.call(null,out);
var state_248568__$1 = state_248568;
var statearr_248598_248629 = state_248568__$1;
(statearr_248598_248629[(2)] = inst_248512);

(statearr_248598_248629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248569 === (14))){
var inst_248534 = (state_248568[(7)]);
var inst_248536 = cljs.core.chunked_seq_QMARK_.call(null,inst_248534);
var state_248568__$1 = state_248568;
if(inst_248536){
var statearr_248599_248630 = state_248568__$1;
(statearr_248599_248630[(1)] = (17));

} else {
var statearr_248600_248631 = state_248568__$1;
(statearr_248600_248631[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248569 === (16))){
var inst_248552 = (state_248568[(2)]);
var state_248568__$1 = state_248568;
var statearr_248601_248632 = state_248568__$1;
(statearr_248601_248632[(2)] = inst_248552);

(statearr_248601_248632[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248569 === (10))){
var inst_248521 = (state_248568[(9)]);
var inst_248523 = (state_248568[(11)]);
var inst_248528 = cljs.core._nth.call(null,inst_248521,inst_248523);
var state_248568__$1 = state_248568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_248568__$1,(13),out,inst_248528);
} else {
if((state_val_248569 === (18))){
var inst_248534 = (state_248568[(7)]);
var inst_248543 = cljs.core.first.call(null,inst_248534);
var state_248568__$1 = state_248568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_248568__$1,(20),out,inst_248543);
} else {
if((state_val_248569 === (8))){
var inst_248522 = (state_248568[(10)]);
var inst_248523 = (state_248568[(11)]);
var inst_248525 = (inst_248523 < inst_248522);
var inst_248526 = inst_248525;
var state_248568__$1 = state_248568;
if(cljs.core.truth_(inst_248526)){
var statearr_248602_248633 = state_248568__$1;
(statearr_248602_248633[(1)] = (10));

} else {
var statearr_248603_248634 = state_248568__$1;
(statearr_248603_248634[(1)] = (11));

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
var statearr_248607 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_248607[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10426__auto__);

(statearr_248607[(1)] = (1));

return statearr_248607;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10426__auto____1 = (function (state_248568){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_248568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e248608){if((e248608 instanceof Object)){
var ex__10429__auto__ = e248608;
var statearr_248609_248635 = state_248568;
(statearr_248609_248635[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_248568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e248608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__248636 = state_248568;
state_248568 = G__248636;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10426__auto__ = function(state_248568){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10426__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10426__auto____1.call(this,state_248568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10426__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10426__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_248610 = f__10447__auto__.call(null);
(statearr_248610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_248610;
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
var args248637 = [];
var len__9156__auto___248640 = arguments.length;
var i__9157__auto___248641 = (0);
while(true){
if((i__9157__auto___248641 < len__9156__auto___248640)){
args248637.push((arguments[i__9157__auto___248641]));

var G__248642 = (i__9157__auto___248641 + (1));
i__9157__auto___248641 = G__248642;
continue;
} else {
}
break;
}

var G__248639 = args248637.length;
switch (G__248639) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args248637.length)].join('')));

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
var args248644 = [];
var len__9156__auto___248647 = arguments.length;
var i__9157__auto___248648 = (0);
while(true){
if((i__9157__auto___248648 < len__9156__auto___248647)){
args248644.push((arguments[i__9157__auto___248648]));

var G__248649 = (i__9157__auto___248648 + (1));
i__9157__auto___248648 = G__248649;
continue;
} else {
}
break;
}

var G__248646 = args248644.length;
switch (G__248646) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args248644.length)].join('')));

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
var args248651 = [];
var len__9156__auto___248702 = arguments.length;
var i__9157__auto___248703 = (0);
while(true){
if((i__9157__auto___248703 < len__9156__auto___248702)){
args248651.push((arguments[i__9157__auto___248703]));

var G__248704 = (i__9157__auto___248703 + (1));
i__9157__auto___248703 = G__248704;
continue;
} else {
}
break;
}

var G__248653 = args248651.length;
switch (G__248653) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args248651.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10446__auto___248706 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto___248706,out){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto___248706,out){
return (function (state_248677){
var state_val_248678 = (state_248677[(1)]);
if((state_val_248678 === (7))){
var inst_248672 = (state_248677[(2)]);
var state_248677__$1 = state_248677;
var statearr_248679_248707 = state_248677__$1;
(statearr_248679_248707[(2)] = inst_248672);

(statearr_248679_248707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248678 === (1))){
var inst_248654 = null;
var state_248677__$1 = (function (){var statearr_248680 = state_248677;
(statearr_248680[(7)] = inst_248654);

return statearr_248680;
})();
var statearr_248681_248708 = state_248677__$1;
(statearr_248681_248708[(2)] = null);

(statearr_248681_248708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248678 === (4))){
var inst_248657 = (state_248677[(8)]);
var inst_248657__$1 = (state_248677[(2)]);
var inst_248658 = (inst_248657__$1 == null);
var inst_248659 = cljs.core.not.call(null,inst_248658);
var state_248677__$1 = (function (){var statearr_248682 = state_248677;
(statearr_248682[(8)] = inst_248657__$1);

return statearr_248682;
})();
if(inst_248659){
var statearr_248683_248709 = state_248677__$1;
(statearr_248683_248709[(1)] = (5));

} else {
var statearr_248684_248710 = state_248677__$1;
(statearr_248684_248710[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248678 === (6))){
var state_248677__$1 = state_248677;
var statearr_248685_248711 = state_248677__$1;
(statearr_248685_248711[(2)] = null);

(statearr_248685_248711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248678 === (3))){
var inst_248674 = (state_248677[(2)]);
var inst_248675 = cljs.core.async.close_BANG_.call(null,out);
var state_248677__$1 = (function (){var statearr_248686 = state_248677;
(statearr_248686[(9)] = inst_248674);

return statearr_248686;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_248677__$1,inst_248675);
} else {
if((state_val_248678 === (2))){
var state_248677__$1 = state_248677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_248677__$1,(4),ch);
} else {
if((state_val_248678 === (11))){
var inst_248657 = (state_248677[(8)]);
var inst_248666 = (state_248677[(2)]);
var inst_248654 = inst_248657;
var state_248677__$1 = (function (){var statearr_248687 = state_248677;
(statearr_248687[(7)] = inst_248654);

(statearr_248687[(10)] = inst_248666);

return statearr_248687;
})();
var statearr_248688_248712 = state_248677__$1;
(statearr_248688_248712[(2)] = null);

(statearr_248688_248712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248678 === (9))){
var inst_248657 = (state_248677[(8)]);
var state_248677__$1 = state_248677;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_248677__$1,(11),out,inst_248657);
} else {
if((state_val_248678 === (5))){
var inst_248657 = (state_248677[(8)]);
var inst_248654 = (state_248677[(7)]);
var inst_248661 = cljs.core._EQ_.call(null,inst_248657,inst_248654);
var state_248677__$1 = state_248677;
if(inst_248661){
var statearr_248690_248713 = state_248677__$1;
(statearr_248690_248713[(1)] = (8));

} else {
var statearr_248691_248714 = state_248677__$1;
(statearr_248691_248714[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248678 === (10))){
var inst_248669 = (state_248677[(2)]);
var state_248677__$1 = state_248677;
var statearr_248692_248715 = state_248677__$1;
(statearr_248692_248715[(2)] = inst_248669);

(statearr_248692_248715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248678 === (8))){
var inst_248654 = (state_248677[(7)]);
var tmp248689 = inst_248654;
var inst_248654__$1 = tmp248689;
var state_248677__$1 = (function (){var statearr_248693 = state_248677;
(statearr_248693[(7)] = inst_248654__$1);

return statearr_248693;
})();
var statearr_248694_248716 = state_248677__$1;
(statearr_248694_248716[(2)] = null);

(statearr_248694_248716[(1)] = (2));


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
});})(c__10446__auto___248706,out))
;
return ((function (switch__10425__auto__,c__10446__auto___248706,out){
return (function() {
var cljs$core$async$state_machine__10426__auto__ = null;
var cljs$core$async$state_machine__10426__auto____0 = (function (){
var statearr_248698 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_248698[(0)] = cljs$core$async$state_machine__10426__auto__);

(statearr_248698[(1)] = (1));

return statearr_248698;
});
var cljs$core$async$state_machine__10426__auto____1 = (function (state_248677){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_248677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e248699){if((e248699 instanceof Object)){
var ex__10429__auto__ = e248699;
var statearr_248700_248717 = state_248677;
(statearr_248700_248717[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_248677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e248699;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__248718 = state_248677;
state_248677 = G__248718;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
cljs$core$async$state_machine__10426__auto__ = function(state_248677){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10426__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10426__auto____1.call(this,state_248677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10426__auto____0;
cljs$core$async$state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10426__auto____1;
return cljs$core$async$state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto___248706,out))
})();
var state__10448__auto__ = (function (){var statearr_248701 = f__10447__auto__.call(null);
(statearr_248701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto___248706);

return statearr_248701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto___248706,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args248719 = [];
var len__9156__auto___248789 = arguments.length;
var i__9157__auto___248790 = (0);
while(true){
if((i__9157__auto___248790 < len__9156__auto___248789)){
args248719.push((arguments[i__9157__auto___248790]));

var G__248791 = (i__9157__auto___248790 + (1));
i__9157__auto___248790 = G__248791;
continue;
} else {
}
break;
}

var G__248721 = args248719.length;
switch (G__248721) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args248719.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10446__auto___248793 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto___248793,out){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto___248793,out){
return (function (state_248759){
var state_val_248760 = (state_248759[(1)]);
if((state_val_248760 === (7))){
var inst_248755 = (state_248759[(2)]);
var state_248759__$1 = state_248759;
var statearr_248761_248794 = state_248759__$1;
(statearr_248761_248794[(2)] = inst_248755);

(statearr_248761_248794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248760 === (1))){
var inst_248722 = (new Array(n));
var inst_248723 = inst_248722;
var inst_248724 = (0);
var state_248759__$1 = (function (){var statearr_248762 = state_248759;
(statearr_248762[(7)] = inst_248724);

(statearr_248762[(8)] = inst_248723);

return statearr_248762;
})();
var statearr_248763_248795 = state_248759__$1;
(statearr_248763_248795[(2)] = null);

(statearr_248763_248795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248760 === (4))){
var inst_248727 = (state_248759[(9)]);
var inst_248727__$1 = (state_248759[(2)]);
var inst_248728 = (inst_248727__$1 == null);
var inst_248729 = cljs.core.not.call(null,inst_248728);
var state_248759__$1 = (function (){var statearr_248764 = state_248759;
(statearr_248764[(9)] = inst_248727__$1);

return statearr_248764;
})();
if(inst_248729){
var statearr_248765_248796 = state_248759__$1;
(statearr_248765_248796[(1)] = (5));

} else {
var statearr_248766_248797 = state_248759__$1;
(statearr_248766_248797[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248760 === (15))){
var inst_248749 = (state_248759[(2)]);
var state_248759__$1 = state_248759;
var statearr_248767_248798 = state_248759__$1;
(statearr_248767_248798[(2)] = inst_248749);

(statearr_248767_248798[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248760 === (13))){
var state_248759__$1 = state_248759;
var statearr_248768_248799 = state_248759__$1;
(statearr_248768_248799[(2)] = null);

(statearr_248768_248799[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248760 === (6))){
var inst_248724 = (state_248759[(7)]);
var inst_248745 = (inst_248724 > (0));
var state_248759__$1 = state_248759;
if(cljs.core.truth_(inst_248745)){
var statearr_248769_248800 = state_248759__$1;
(statearr_248769_248800[(1)] = (12));

} else {
var statearr_248770_248801 = state_248759__$1;
(statearr_248770_248801[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248760 === (3))){
var inst_248757 = (state_248759[(2)]);
var state_248759__$1 = state_248759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_248759__$1,inst_248757);
} else {
if((state_val_248760 === (12))){
var inst_248723 = (state_248759[(8)]);
var inst_248747 = cljs.core.vec.call(null,inst_248723);
var state_248759__$1 = state_248759;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_248759__$1,(15),out,inst_248747);
} else {
if((state_val_248760 === (2))){
var state_248759__$1 = state_248759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_248759__$1,(4),ch);
} else {
if((state_val_248760 === (11))){
var inst_248739 = (state_248759[(2)]);
var inst_248740 = (new Array(n));
var inst_248723 = inst_248740;
var inst_248724 = (0);
var state_248759__$1 = (function (){var statearr_248771 = state_248759;
(statearr_248771[(7)] = inst_248724);

(statearr_248771[(8)] = inst_248723);

(statearr_248771[(10)] = inst_248739);

return statearr_248771;
})();
var statearr_248772_248802 = state_248759__$1;
(statearr_248772_248802[(2)] = null);

(statearr_248772_248802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248760 === (9))){
var inst_248723 = (state_248759[(8)]);
var inst_248737 = cljs.core.vec.call(null,inst_248723);
var state_248759__$1 = state_248759;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_248759__$1,(11),out,inst_248737);
} else {
if((state_val_248760 === (5))){
var inst_248724 = (state_248759[(7)]);
var inst_248723 = (state_248759[(8)]);
var inst_248732 = (state_248759[(11)]);
var inst_248727 = (state_248759[(9)]);
var inst_248731 = (inst_248723[inst_248724] = inst_248727);
var inst_248732__$1 = (inst_248724 + (1));
var inst_248733 = (inst_248732__$1 < n);
var state_248759__$1 = (function (){var statearr_248773 = state_248759;
(statearr_248773[(11)] = inst_248732__$1);

(statearr_248773[(12)] = inst_248731);

return statearr_248773;
})();
if(cljs.core.truth_(inst_248733)){
var statearr_248774_248803 = state_248759__$1;
(statearr_248774_248803[(1)] = (8));

} else {
var statearr_248775_248804 = state_248759__$1;
(statearr_248775_248804[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248760 === (14))){
var inst_248752 = (state_248759[(2)]);
var inst_248753 = cljs.core.async.close_BANG_.call(null,out);
var state_248759__$1 = (function (){var statearr_248777 = state_248759;
(statearr_248777[(13)] = inst_248752);

return statearr_248777;
})();
var statearr_248778_248805 = state_248759__$1;
(statearr_248778_248805[(2)] = inst_248753);

(statearr_248778_248805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248760 === (10))){
var inst_248743 = (state_248759[(2)]);
var state_248759__$1 = state_248759;
var statearr_248779_248806 = state_248759__$1;
(statearr_248779_248806[(2)] = inst_248743);

(statearr_248779_248806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248760 === (8))){
var inst_248723 = (state_248759[(8)]);
var inst_248732 = (state_248759[(11)]);
var tmp248776 = inst_248723;
var inst_248723__$1 = tmp248776;
var inst_248724 = inst_248732;
var state_248759__$1 = (function (){var statearr_248780 = state_248759;
(statearr_248780[(7)] = inst_248724);

(statearr_248780[(8)] = inst_248723__$1);

return statearr_248780;
})();
var statearr_248781_248807 = state_248759__$1;
(statearr_248781_248807[(2)] = null);

(statearr_248781_248807[(1)] = (2));


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
});})(c__10446__auto___248793,out))
;
return ((function (switch__10425__auto__,c__10446__auto___248793,out){
return (function() {
var cljs$core$async$state_machine__10426__auto__ = null;
var cljs$core$async$state_machine__10426__auto____0 = (function (){
var statearr_248785 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_248785[(0)] = cljs$core$async$state_machine__10426__auto__);

(statearr_248785[(1)] = (1));

return statearr_248785;
});
var cljs$core$async$state_machine__10426__auto____1 = (function (state_248759){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_248759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e248786){if((e248786 instanceof Object)){
var ex__10429__auto__ = e248786;
var statearr_248787_248808 = state_248759;
(statearr_248787_248808[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_248759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e248786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__248809 = state_248759;
state_248759 = G__248809;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
cljs$core$async$state_machine__10426__auto__ = function(state_248759){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10426__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10426__auto____1.call(this,state_248759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10426__auto____0;
cljs$core$async$state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10426__auto____1;
return cljs$core$async$state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto___248793,out))
})();
var state__10448__auto__ = (function (){var statearr_248788 = f__10447__auto__.call(null);
(statearr_248788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto___248793);

return statearr_248788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto___248793,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args248810 = [];
var len__9156__auto___248884 = arguments.length;
var i__9157__auto___248885 = (0);
while(true){
if((i__9157__auto___248885 < len__9156__auto___248884)){
args248810.push((arguments[i__9157__auto___248885]));

var G__248886 = (i__9157__auto___248885 + (1));
i__9157__auto___248885 = G__248886;
continue;
} else {
}
break;
}

var G__248812 = args248810.length;
switch (G__248812) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args248810.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10446__auto___248888 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto___248888,out){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto___248888,out){
return (function (state_248854){
var state_val_248855 = (state_248854[(1)]);
if((state_val_248855 === (7))){
var inst_248850 = (state_248854[(2)]);
var state_248854__$1 = state_248854;
var statearr_248856_248889 = state_248854__$1;
(statearr_248856_248889[(2)] = inst_248850);

(statearr_248856_248889[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248855 === (1))){
var inst_248813 = [];
var inst_248814 = inst_248813;
var inst_248815 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_248854__$1 = (function (){var statearr_248857 = state_248854;
(statearr_248857[(7)] = inst_248815);

(statearr_248857[(8)] = inst_248814);

return statearr_248857;
})();
var statearr_248858_248890 = state_248854__$1;
(statearr_248858_248890[(2)] = null);

(statearr_248858_248890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248855 === (4))){
var inst_248818 = (state_248854[(9)]);
var inst_248818__$1 = (state_248854[(2)]);
var inst_248819 = (inst_248818__$1 == null);
var inst_248820 = cljs.core.not.call(null,inst_248819);
var state_248854__$1 = (function (){var statearr_248859 = state_248854;
(statearr_248859[(9)] = inst_248818__$1);

return statearr_248859;
})();
if(inst_248820){
var statearr_248860_248891 = state_248854__$1;
(statearr_248860_248891[(1)] = (5));

} else {
var statearr_248861_248892 = state_248854__$1;
(statearr_248861_248892[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248855 === (15))){
var inst_248844 = (state_248854[(2)]);
var state_248854__$1 = state_248854;
var statearr_248862_248893 = state_248854__$1;
(statearr_248862_248893[(2)] = inst_248844);

(statearr_248862_248893[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248855 === (13))){
var state_248854__$1 = state_248854;
var statearr_248863_248894 = state_248854__$1;
(statearr_248863_248894[(2)] = null);

(statearr_248863_248894[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248855 === (6))){
var inst_248814 = (state_248854[(8)]);
var inst_248839 = inst_248814.length;
var inst_248840 = (inst_248839 > (0));
var state_248854__$1 = state_248854;
if(cljs.core.truth_(inst_248840)){
var statearr_248864_248895 = state_248854__$1;
(statearr_248864_248895[(1)] = (12));

} else {
var statearr_248865_248896 = state_248854__$1;
(statearr_248865_248896[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248855 === (3))){
var inst_248852 = (state_248854[(2)]);
var state_248854__$1 = state_248854;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_248854__$1,inst_248852);
} else {
if((state_val_248855 === (12))){
var inst_248814 = (state_248854[(8)]);
var inst_248842 = cljs.core.vec.call(null,inst_248814);
var state_248854__$1 = state_248854;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_248854__$1,(15),out,inst_248842);
} else {
if((state_val_248855 === (2))){
var state_248854__$1 = state_248854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_248854__$1,(4),ch);
} else {
if((state_val_248855 === (11))){
var inst_248818 = (state_248854[(9)]);
var inst_248822 = (state_248854[(10)]);
var inst_248832 = (state_248854[(2)]);
var inst_248833 = [];
var inst_248834 = inst_248833.push(inst_248818);
var inst_248814 = inst_248833;
var inst_248815 = inst_248822;
var state_248854__$1 = (function (){var statearr_248866 = state_248854;
(statearr_248866[(7)] = inst_248815);

(statearr_248866[(8)] = inst_248814);

(statearr_248866[(11)] = inst_248832);

(statearr_248866[(12)] = inst_248834);

return statearr_248866;
})();
var statearr_248867_248897 = state_248854__$1;
(statearr_248867_248897[(2)] = null);

(statearr_248867_248897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248855 === (9))){
var inst_248814 = (state_248854[(8)]);
var inst_248830 = cljs.core.vec.call(null,inst_248814);
var state_248854__$1 = state_248854;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_248854__$1,(11),out,inst_248830);
} else {
if((state_val_248855 === (5))){
var inst_248815 = (state_248854[(7)]);
var inst_248818 = (state_248854[(9)]);
var inst_248822 = (state_248854[(10)]);
var inst_248822__$1 = f.call(null,inst_248818);
var inst_248823 = cljs.core._EQ_.call(null,inst_248822__$1,inst_248815);
var inst_248824 = cljs.core.keyword_identical_QMARK_.call(null,inst_248815,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_248825 = (inst_248823) || (inst_248824);
var state_248854__$1 = (function (){var statearr_248868 = state_248854;
(statearr_248868[(10)] = inst_248822__$1);

return statearr_248868;
})();
if(cljs.core.truth_(inst_248825)){
var statearr_248869_248898 = state_248854__$1;
(statearr_248869_248898[(1)] = (8));

} else {
var statearr_248870_248899 = state_248854__$1;
(statearr_248870_248899[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248855 === (14))){
var inst_248847 = (state_248854[(2)]);
var inst_248848 = cljs.core.async.close_BANG_.call(null,out);
var state_248854__$1 = (function (){var statearr_248872 = state_248854;
(statearr_248872[(13)] = inst_248847);

return statearr_248872;
})();
var statearr_248873_248900 = state_248854__$1;
(statearr_248873_248900[(2)] = inst_248848);

(statearr_248873_248900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248855 === (10))){
var inst_248837 = (state_248854[(2)]);
var state_248854__$1 = state_248854;
var statearr_248874_248901 = state_248854__$1;
(statearr_248874_248901[(2)] = inst_248837);

(statearr_248874_248901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_248855 === (8))){
var inst_248814 = (state_248854[(8)]);
var inst_248818 = (state_248854[(9)]);
var inst_248822 = (state_248854[(10)]);
var inst_248827 = inst_248814.push(inst_248818);
var tmp248871 = inst_248814;
var inst_248814__$1 = tmp248871;
var inst_248815 = inst_248822;
var state_248854__$1 = (function (){var statearr_248875 = state_248854;
(statearr_248875[(14)] = inst_248827);

(statearr_248875[(7)] = inst_248815);

(statearr_248875[(8)] = inst_248814__$1);

return statearr_248875;
})();
var statearr_248876_248902 = state_248854__$1;
(statearr_248876_248902[(2)] = null);

(statearr_248876_248902[(1)] = (2));


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
});})(c__10446__auto___248888,out))
;
return ((function (switch__10425__auto__,c__10446__auto___248888,out){
return (function() {
var cljs$core$async$state_machine__10426__auto__ = null;
var cljs$core$async$state_machine__10426__auto____0 = (function (){
var statearr_248880 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_248880[(0)] = cljs$core$async$state_machine__10426__auto__);

(statearr_248880[(1)] = (1));

return statearr_248880;
});
var cljs$core$async$state_machine__10426__auto____1 = (function (state_248854){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_248854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e248881){if((e248881 instanceof Object)){
var ex__10429__auto__ = e248881;
var statearr_248882_248903 = state_248854;
(statearr_248882_248903[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_248854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e248881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__248904 = state_248854;
state_248854 = G__248904;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
cljs$core$async$state_machine__10426__auto__ = function(state_248854){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10426__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10426__auto____1.call(this,state_248854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10426__auto____0;
cljs$core$async$state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10426__auto____1;
return cljs$core$async$state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto___248888,out))
})();
var state__10448__auto__ = (function (){var statearr_248883 = f__10447__auto__.call(null);
(statearr_248883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto___248888);

return statearr_248883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto___248888,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map