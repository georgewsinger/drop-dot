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
var args40913 = [];
var len__9158__auto___40919 = arguments.length;
var i__9159__auto___40920 = (0);
while(true){
if((i__9159__auto___40920 < len__9158__auto___40919)){
args40913.push((arguments[i__9159__auto___40920]));

var G__40921 = (i__9159__auto___40920 + (1));
i__9159__auto___40920 = G__40921;
continue;
} else {
}
break;
}

var G__40915 = args40913.length;
switch (G__40915) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40913.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async40916 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40916 = (function (f,blockable,meta40917){
this.f = f;
this.blockable = blockable;
this.meta40917 = meta40917;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40916.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40918,meta40917__$1){
var self__ = this;
var _40918__$1 = this;
return (new cljs.core.async.t_cljs$core$async40916(self__.f,self__.blockable,meta40917__$1));
});

cljs.core.async.t_cljs$core$async40916.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40918){
var self__ = this;
var _40918__$1 = this;
return self__.meta40917;
});

cljs.core.async.t_cljs$core$async40916.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async40916.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async40916.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async40916.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async40916.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta40917","meta40917",1782080423,null)], null);
});

cljs.core.async.t_cljs$core$async40916.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40916.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40916";

cljs.core.async.t_cljs$core$async40916.cljs$lang$ctorPrWriter = (function (this__8698__auto__,writer__8699__auto__,opt__8700__auto__){
return cljs.core._write.call(null,writer__8699__auto__,"cljs.core.async/t_cljs$core$async40916");
});

cljs.core.async.__GT_t_cljs$core$async40916 = (function cljs$core$async$__GT_t_cljs$core$async40916(f__$1,blockable__$1,meta40917){
return (new cljs.core.async.t_cljs$core$async40916(f__$1,blockable__$1,meta40917));
});

}

return (new cljs.core.async.t_cljs$core$async40916(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args40925 = [];
var len__9158__auto___40928 = arguments.length;
var i__9159__auto___40929 = (0);
while(true){
if((i__9159__auto___40929 < len__9158__auto___40928)){
args40925.push((arguments[i__9159__auto___40929]));

var G__40930 = (i__9159__auto___40929 + (1));
i__9159__auto___40929 = G__40930;
continue;
} else {
}
break;
}

var G__40927 = args40925.length;
switch (G__40927) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40925.length)].join('')));

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
var args40932 = [];
var len__9158__auto___40935 = arguments.length;
var i__9159__auto___40936 = (0);
while(true){
if((i__9159__auto___40936 < len__9158__auto___40935)){
args40932.push((arguments[i__9159__auto___40936]));

var G__40937 = (i__9159__auto___40936 + (1));
i__9159__auto___40936 = G__40937;
continue;
} else {
}
break;
}

var G__40934 = args40932.length;
switch (G__40934) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40932.length)].join('')));

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
var args40939 = [];
var len__9158__auto___40942 = arguments.length;
var i__9159__auto___40943 = (0);
while(true){
if((i__9159__auto___40943 < len__9158__auto___40942)){
args40939.push((arguments[i__9159__auto___40943]));

var G__40944 = (i__9159__auto___40943 + (1));
i__9159__auto___40943 = G__40944;
continue;
} else {
}
break;
}

var G__40941 = args40939.length;
switch (G__40941) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40939.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_40946 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_40946);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_40946,ret){
return (function (){
return fn1.call(null,val_40946);
});})(val_40946,ret))
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
var args40947 = [];
var len__9158__auto___40950 = arguments.length;
var i__9159__auto___40951 = (0);
while(true){
if((i__9159__auto___40951 < len__9158__auto___40950)){
args40947.push((arguments[i__9159__auto___40951]));

var G__40952 = (i__9159__auto___40951 + (1));
i__9159__auto___40951 = G__40952;
continue;
} else {
}
break;
}

var G__40949 = args40947.length;
switch (G__40949) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40947.length)].join('')));

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
var n__9003__auto___40954 = n;
var x_40955 = (0);
while(true){
if((x_40955 < n__9003__auto___40954)){
(a[x_40955] = (0));

var G__40956 = (x_40955 + (1));
x_40955 = G__40956;
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

var G__40957 = (i + (1));
i = G__40957;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async40961 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40961 = (function (alt_flag,flag,meta40962){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta40962 = meta40962;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_40963,meta40962__$1){
var self__ = this;
var _40963__$1 = this;
return (new cljs.core.async.t_cljs$core$async40961(self__.alt_flag,self__.flag,meta40962__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async40961.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_40963){
var self__ = this;
var _40963__$1 = this;
return self__.meta40962;
});})(flag))
;

cljs.core.async.t_cljs$core$async40961.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async40961.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async40961.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async40961.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async40961.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta40962","meta40962",-2099591060,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async40961.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40961.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40961";

cljs.core.async.t_cljs$core$async40961.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8698__auto__,writer__8699__auto__,opt__8700__auto__){
return cljs.core._write.call(null,writer__8699__auto__,"cljs.core.async/t_cljs$core$async40961");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async40961 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async40961(alt_flag__$1,flag__$1,meta40962){
return (new cljs.core.async.t_cljs$core$async40961(alt_flag__$1,flag__$1,meta40962));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async40961(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async40967 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40967 = (function (alt_handler,flag,cb,meta40968){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta40968 = meta40968;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40967.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40969,meta40968__$1){
var self__ = this;
var _40969__$1 = this;
return (new cljs.core.async.t_cljs$core$async40967(self__.alt_handler,self__.flag,self__.cb,meta40968__$1));
});

cljs.core.async.t_cljs$core$async40967.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40969){
var self__ = this;
var _40969__$1 = this;
return self__.meta40968;
});

cljs.core.async.t_cljs$core$async40967.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async40967.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async40967.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async40967.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async40967.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta40968","meta40968",1811244062,null)], null);
});

cljs.core.async.t_cljs$core$async40967.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40967.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40967";

cljs.core.async.t_cljs$core$async40967.cljs$lang$ctorPrWriter = (function (this__8698__auto__,writer__8699__auto__,opt__8700__auto__){
return cljs.core._write.call(null,writer__8699__auto__,"cljs.core.async/t_cljs$core$async40967");
});

cljs.core.async.__GT_t_cljs$core$async40967 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async40967(alt_handler__$1,flag__$1,cb__$1,meta40968){
return (new cljs.core.async.t_cljs$core$async40967(alt_handler__$1,flag__$1,cb__$1,meta40968));
});

}

return (new cljs.core.async.t_cljs$core$async40967(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__40970_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40970_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40971_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40971_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__8100__auto__ = wport;
if(cljs.core.truth_(or__8100__auto__)){
return or__8100__auto__;
} else {
return port;
}
})()], null));
} else {
var G__40972 = (i + (1));
i = G__40972;
continue;
}
} else {
return null;
}
break;
}
})();
var or__8100__auto__ = ret;
if(cljs.core.truth_(or__8100__auto__)){
return or__8100__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__8088__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__8088__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__8088__auto__;
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
var args__9165__auto__ = [];
var len__9158__auto___40978 = arguments.length;
var i__9159__auto___40979 = (0);
while(true){
if((i__9159__auto___40979 < len__9158__auto___40978)){
args__9165__auto__.push((arguments[i__9159__auto___40979]));

var G__40980 = (i__9159__auto___40979 + (1));
i__9159__auto___40979 = G__40980;
continue;
} else {
}
break;
}

var argseq__9166__auto__ = ((((1) < args__9165__auto__.length))?(new cljs.core.IndexedSeq(args__9165__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9166__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__40975){
var map__40976 = p__40975;
var map__40976__$1 = ((((!((map__40976 == null)))?((((map__40976.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40976.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40976):map__40976);
var opts = map__40976__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq40973){
var G__40974 = cljs.core.first.call(null,seq40973);
var seq40973__$1 = cljs.core.next.call(null,seq40973);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40974,seq40973__$1);
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
var args40981 = [];
var len__9158__auto___41031 = arguments.length;
var i__9159__auto___41032 = (0);
while(true){
if((i__9159__auto___41032 < len__9158__auto___41031)){
args40981.push((arguments[i__9159__auto___41032]));

var G__41033 = (i__9159__auto___41032 + (1));
i__9159__auto___41032 = G__41033;
continue;
} else {
}
break;
}

var G__40983 = args40981.length;
switch (G__40983) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40981.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10448__auto___41035 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___41035){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___41035){
return (function (state_41007){
var state_val_41008 = (state_41007[(1)]);
if((state_val_41008 === (7))){
var inst_41003 = (state_41007[(2)]);
var state_41007__$1 = state_41007;
var statearr_41009_41036 = state_41007__$1;
(statearr_41009_41036[(2)] = inst_41003);

(statearr_41009_41036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41008 === (1))){
var state_41007__$1 = state_41007;
var statearr_41010_41037 = state_41007__$1;
(statearr_41010_41037[(2)] = null);

(statearr_41010_41037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41008 === (4))){
var inst_40986 = (state_41007[(7)]);
var inst_40986__$1 = (state_41007[(2)]);
var inst_40987 = (inst_40986__$1 == null);
var state_41007__$1 = (function (){var statearr_41011 = state_41007;
(statearr_41011[(7)] = inst_40986__$1);

return statearr_41011;
})();
if(cljs.core.truth_(inst_40987)){
var statearr_41012_41038 = state_41007__$1;
(statearr_41012_41038[(1)] = (5));

} else {
var statearr_41013_41039 = state_41007__$1;
(statearr_41013_41039[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41008 === (13))){
var state_41007__$1 = state_41007;
var statearr_41014_41040 = state_41007__$1;
(statearr_41014_41040[(2)] = null);

(statearr_41014_41040[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41008 === (6))){
var inst_40986 = (state_41007[(7)]);
var state_41007__$1 = state_41007;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41007__$1,(11),to,inst_40986);
} else {
if((state_val_41008 === (3))){
var inst_41005 = (state_41007[(2)]);
var state_41007__$1 = state_41007;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41007__$1,inst_41005);
} else {
if((state_val_41008 === (12))){
var state_41007__$1 = state_41007;
var statearr_41015_41041 = state_41007__$1;
(statearr_41015_41041[(2)] = null);

(statearr_41015_41041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41008 === (2))){
var state_41007__$1 = state_41007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41007__$1,(4),from);
} else {
if((state_val_41008 === (11))){
var inst_40996 = (state_41007[(2)]);
var state_41007__$1 = state_41007;
if(cljs.core.truth_(inst_40996)){
var statearr_41016_41042 = state_41007__$1;
(statearr_41016_41042[(1)] = (12));

} else {
var statearr_41017_41043 = state_41007__$1;
(statearr_41017_41043[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41008 === (9))){
var state_41007__$1 = state_41007;
var statearr_41018_41044 = state_41007__$1;
(statearr_41018_41044[(2)] = null);

(statearr_41018_41044[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41008 === (5))){
var state_41007__$1 = state_41007;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41019_41045 = state_41007__$1;
(statearr_41019_41045[(1)] = (8));

} else {
var statearr_41020_41046 = state_41007__$1;
(statearr_41020_41046[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41008 === (14))){
var inst_41001 = (state_41007[(2)]);
var state_41007__$1 = state_41007;
var statearr_41021_41047 = state_41007__$1;
(statearr_41021_41047[(2)] = inst_41001);

(statearr_41021_41047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41008 === (10))){
var inst_40993 = (state_41007[(2)]);
var state_41007__$1 = state_41007;
var statearr_41022_41048 = state_41007__$1;
(statearr_41022_41048[(2)] = inst_40993);

(statearr_41022_41048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41008 === (8))){
var inst_40990 = cljs.core.async.close_BANG_.call(null,to);
var state_41007__$1 = state_41007;
var statearr_41023_41049 = state_41007__$1;
(statearr_41023_41049[(2)] = inst_40990);

(statearr_41023_41049[(1)] = (10));


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
});})(c__10448__auto___41035))
;
return ((function (switch__10427__auto__,c__10448__auto___41035){
return (function() {
var cljs$core$async$state_machine__10428__auto__ = null;
var cljs$core$async$state_machine__10428__auto____0 = (function (){
var statearr_41027 = [null,null,null,null,null,null,null,null];
(statearr_41027[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_41027[(1)] = (1));

return statearr_41027;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_41007){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_41007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e41028){if((e41028 instanceof Object)){
var ex__10431__auto__ = e41028;
var statearr_41029_41050 = state_41007;
(statearr_41029_41050[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41028;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41051 = state_41007;
state_41007 = G__41051;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_41007){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_41007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___41035))
})();
var state__10450__auto__ = (function (){var statearr_41030 = f__10449__auto__.call(null);
(statearr_41030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___41035);

return statearr_41030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___41035))
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
return (function (p__41235){
var vec__41236 = p__41235;
var v = cljs.core.nth.call(null,vec__41236,(0),null);
var p = cljs.core.nth.call(null,vec__41236,(1),null);
var job = vec__41236;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__10448__auto___41418 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___41418,res,vec__41236,v,p,job,jobs,results){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___41418,res,vec__41236,v,p,job,jobs,results){
return (function (state_41241){
var state_val_41242 = (state_41241[(1)]);
if((state_val_41242 === (1))){
var state_41241__$1 = state_41241;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41241__$1,(2),res,v);
} else {
if((state_val_41242 === (2))){
var inst_41238 = (state_41241[(2)]);
var inst_41239 = cljs.core.async.close_BANG_.call(null,res);
var state_41241__$1 = (function (){var statearr_41243 = state_41241;
(statearr_41243[(7)] = inst_41238);

return statearr_41243;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41241__$1,inst_41239);
} else {
return null;
}
}
});})(c__10448__auto___41418,res,vec__41236,v,p,job,jobs,results))
;
return ((function (switch__10427__auto__,c__10448__auto___41418,res,vec__41236,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0 = (function (){
var statearr_41247 = [null,null,null,null,null,null,null,null];
(statearr_41247[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__);

(statearr_41247[(1)] = (1));

return statearr_41247;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1 = (function (state_41241){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_41241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e41248){if((e41248 instanceof Object)){
var ex__10431__auto__ = e41248;
var statearr_41249_41419 = state_41241;
(statearr_41249_41419[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41248;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41420 = state_41241;
state_41241 = G__41420;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__ = function(state_41241){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1.call(this,state_41241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___41418,res,vec__41236,v,p,job,jobs,results))
})();
var state__10450__auto__ = (function (){var statearr_41250 = f__10449__auto__.call(null);
(statearr_41250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___41418);

return statearr_41250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___41418,res,vec__41236,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__41251){
var vec__41252 = p__41251;
var v = cljs.core.nth.call(null,vec__41252,(0),null);
var p = cljs.core.nth.call(null,vec__41252,(1),null);
var job = vec__41252;
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
var n__9003__auto___41421 = n;
var __41422 = (0);
while(true){
if((__41422 < n__9003__auto___41421)){
var G__41253_41423 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__41253_41423) {
case "compute":
var c__10448__auto___41425 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__41422,c__10448__auto___41425,G__41253_41423,n__9003__auto___41421,jobs,results,process,async){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (__41422,c__10448__auto___41425,G__41253_41423,n__9003__auto___41421,jobs,results,process,async){
return (function (state_41266){
var state_val_41267 = (state_41266[(1)]);
if((state_val_41267 === (1))){
var state_41266__$1 = state_41266;
var statearr_41268_41426 = state_41266__$1;
(statearr_41268_41426[(2)] = null);

(statearr_41268_41426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41267 === (2))){
var state_41266__$1 = state_41266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41266__$1,(4),jobs);
} else {
if((state_val_41267 === (3))){
var inst_41264 = (state_41266[(2)]);
var state_41266__$1 = state_41266;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41266__$1,inst_41264);
} else {
if((state_val_41267 === (4))){
var inst_41256 = (state_41266[(2)]);
var inst_41257 = process.call(null,inst_41256);
var state_41266__$1 = state_41266;
if(cljs.core.truth_(inst_41257)){
var statearr_41269_41427 = state_41266__$1;
(statearr_41269_41427[(1)] = (5));

} else {
var statearr_41270_41428 = state_41266__$1;
(statearr_41270_41428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41267 === (5))){
var state_41266__$1 = state_41266;
var statearr_41271_41429 = state_41266__$1;
(statearr_41271_41429[(2)] = null);

(statearr_41271_41429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41267 === (6))){
var state_41266__$1 = state_41266;
var statearr_41272_41430 = state_41266__$1;
(statearr_41272_41430[(2)] = null);

(statearr_41272_41430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41267 === (7))){
var inst_41262 = (state_41266[(2)]);
var state_41266__$1 = state_41266;
var statearr_41273_41431 = state_41266__$1;
(statearr_41273_41431[(2)] = inst_41262);

(statearr_41273_41431[(1)] = (3));


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
});})(__41422,c__10448__auto___41425,G__41253_41423,n__9003__auto___41421,jobs,results,process,async))
;
return ((function (__41422,switch__10427__auto__,c__10448__auto___41425,G__41253_41423,n__9003__auto___41421,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0 = (function (){
var statearr_41277 = [null,null,null,null,null,null,null];
(statearr_41277[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__);

(statearr_41277[(1)] = (1));

return statearr_41277;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1 = (function (state_41266){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_41266);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e41278){if((e41278 instanceof Object)){
var ex__10431__auto__ = e41278;
var statearr_41279_41432 = state_41266;
(statearr_41279_41432[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41278;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41433 = state_41266;
state_41266 = G__41433;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__ = function(state_41266){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1.call(this,state_41266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__;
})()
;})(__41422,switch__10427__auto__,c__10448__auto___41425,G__41253_41423,n__9003__auto___41421,jobs,results,process,async))
})();
var state__10450__auto__ = (function (){var statearr_41280 = f__10449__auto__.call(null);
(statearr_41280[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___41425);

return statearr_41280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(__41422,c__10448__auto___41425,G__41253_41423,n__9003__auto___41421,jobs,results,process,async))
);


break;
case "async":
var c__10448__auto___41434 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__41422,c__10448__auto___41434,G__41253_41423,n__9003__auto___41421,jobs,results,process,async){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (__41422,c__10448__auto___41434,G__41253_41423,n__9003__auto___41421,jobs,results,process,async){
return (function (state_41293){
var state_val_41294 = (state_41293[(1)]);
if((state_val_41294 === (1))){
var state_41293__$1 = state_41293;
var statearr_41295_41435 = state_41293__$1;
(statearr_41295_41435[(2)] = null);

(statearr_41295_41435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41294 === (2))){
var state_41293__$1 = state_41293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41293__$1,(4),jobs);
} else {
if((state_val_41294 === (3))){
var inst_41291 = (state_41293[(2)]);
var state_41293__$1 = state_41293;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41293__$1,inst_41291);
} else {
if((state_val_41294 === (4))){
var inst_41283 = (state_41293[(2)]);
var inst_41284 = async.call(null,inst_41283);
var state_41293__$1 = state_41293;
if(cljs.core.truth_(inst_41284)){
var statearr_41296_41436 = state_41293__$1;
(statearr_41296_41436[(1)] = (5));

} else {
var statearr_41297_41437 = state_41293__$1;
(statearr_41297_41437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41294 === (5))){
var state_41293__$1 = state_41293;
var statearr_41298_41438 = state_41293__$1;
(statearr_41298_41438[(2)] = null);

(statearr_41298_41438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41294 === (6))){
var state_41293__$1 = state_41293;
var statearr_41299_41439 = state_41293__$1;
(statearr_41299_41439[(2)] = null);

(statearr_41299_41439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41294 === (7))){
var inst_41289 = (state_41293[(2)]);
var state_41293__$1 = state_41293;
var statearr_41300_41440 = state_41293__$1;
(statearr_41300_41440[(2)] = inst_41289);

(statearr_41300_41440[(1)] = (3));


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
});})(__41422,c__10448__auto___41434,G__41253_41423,n__9003__auto___41421,jobs,results,process,async))
;
return ((function (__41422,switch__10427__auto__,c__10448__auto___41434,G__41253_41423,n__9003__auto___41421,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0 = (function (){
var statearr_41304 = [null,null,null,null,null,null,null];
(statearr_41304[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__);

(statearr_41304[(1)] = (1));

return statearr_41304;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1 = (function (state_41293){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_41293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e41305){if((e41305 instanceof Object)){
var ex__10431__auto__ = e41305;
var statearr_41306_41441 = state_41293;
(statearr_41306_41441[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41442 = state_41293;
state_41293 = G__41442;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__ = function(state_41293){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1.call(this,state_41293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__;
})()
;})(__41422,switch__10427__auto__,c__10448__auto___41434,G__41253_41423,n__9003__auto___41421,jobs,results,process,async))
})();
var state__10450__auto__ = (function (){var statearr_41307 = f__10449__auto__.call(null);
(statearr_41307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___41434);

return statearr_41307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(__41422,c__10448__auto___41434,G__41253_41423,n__9003__auto___41421,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__41443 = (__41422 + (1));
__41422 = G__41443;
continue;
} else {
}
break;
}

var c__10448__auto___41444 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___41444,jobs,results,process,async){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___41444,jobs,results,process,async){
return (function (state_41329){
var state_val_41330 = (state_41329[(1)]);
if((state_val_41330 === (1))){
var state_41329__$1 = state_41329;
var statearr_41331_41445 = state_41329__$1;
(statearr_41331_41445[(2)] = null);

(statearr_41331_41445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41330 === (2))){
var state_41329__$1 = state_41329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41329__$1,(4),from);
} else {
if((state_val_41330 === (3))){
var inst_41327 = (state_41329[(2)]);
var state_41329__$1 = state_41329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41329__$1,inst_41327);
} else {
if((state_val_41330 === (4))){
var inst_41310 = (state_41329[(7)]);
var inst_41310__$1 = (state_41329[(2)]);
var inst_41311 = (inst_41310__$1 == null);
var state_41329__$1 = (function (){var statearr_41332 = state_41329;
(statearr_41332[(7)] = inst_41310__$1);

return statearr_41332;
})();
if(cljs.core.truth_(inst_41311)){
var statearr_41333_41446 = state_41329__$1;
(statearr_41333_41446[(1)] = (5));

} else {
var statearr_41334_41447 = state_41329__$1;
(statearr_41334_41447[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41330 === (5))){
var inst_41313 = cljs.core.async.close_BANG_.call(null,jobs);
var state_41329__$1 = state_41329;
var statearr_41335_41448 = state_41329__$1;
(statearr_41335_41448[(2)] = inst_41313);

(statearr_41335_41448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41330 === (6))){
var inst_41315 = (state_41329[(8)]);
var inst_41310 = (state_41329[(7)]);
var inst_41315__$1 = cljs.core.async.chan.call(null,(1));
var inst_41316 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41317 = [inst_41310,inst_41315__$1];
var inst_41318 = (new cljs.core.PersistentVector(null,2,(5),inst_41316,inst_41317,null));
var state_41329__$1 = (function (){var statearr_41336 = state_41329;
(statearr_41336[(8)] = inst_41315__$1);

return statearr_41336;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41329__$1,(8),jobs,inst_41318);
} else {
if((state_val_41330 === (7))){
var inst_41325 = (state_41329[(2)]);
var state_41329__$1 = state_41329;
var statearr_41337_41449 = state_41329__$1;
(statearr_41337_41449[(2)] = inst_41325);

(statearr_41337_41449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41330 === (8))){
var inst_41315 = (state_41329[(8)]);
var inst_41320 = (state_41329[(2)]);
var state_41329__$1 = (function (){var statearr_41338 = state_41329;
(statearr_41338[(9)] = inst_41320);

return statearr_41338;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41329__$1,(9),results,inst_41315);
} else {
if((state_val_41330 === (9))){
var inst_41322 = (state_41329[(2)]);
var state_41329__$1 = (function (){var statearr_41339 = state_41329;
(statearr_41339[(10)] = inst_41322);

return statearr_41339;
})();
var statearr_41340_41450 = state_41329__$1;
(statearr_41340_41450[(2)] = null);

(statearr_41340_41450[(1)] = (2));


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
});})(c__10448__auto___41444,jobs,results,process,async))
;
return ((function (switch__10427__auto__,c__10448__auto___41444,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0 = (function (){
var statearr_41344 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41344[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__);

(statearr_41344[(1)] = (1));

return statearr_41344;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1 = (function (state_41329){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_41329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e41345){if((e41345 instanceof Object)){
var ex__10431__auto__ = e41345;
var statearr_41346_41451 = state_41329;
(statearr_41346_41451[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41452 = state_41329;
state_41329 = G__41452;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__ = function(state_41329){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1.call(this,state_41329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___41444,jobs,results,process,async))
})();
var state__10450__auto__ = (function (){var statearr_41347 = f__10449__auto__.call(null);
(statearr_41347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___41444);

return statearr_41347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___41444,jobs,results,process,async))
);


var c__10448__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto__,jobs,results,process,async){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto__,jobs,results,process,async){
return (function (state_41385){
var state_val_41386 = (state_41385[(1)]);
if((state_val_41386 === (7))){
var inst_41381 = (state_41385[(2)]);
var state_41385__$1 = state_41385;
var statearr_41387_41453 = state_41385__$1;
(statearr_41387_41453[(2)] = inst_41381);

(statearr_41387_41453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41386 === (20))){
var state_41385__$1 = state_41385;
var statearr_41388_41454 = state_41385__$1;
(statearr_41388_41454[(2)] = null);

(statearr_41388_41454[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41386 === (1))){
var state_41385__$1 = state_41385;
var statearr_41389_41455 = state_41385__$1;
(statearr_41389_41455[(2)] = null);

(statearr_41389_41455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41386 === (4))){
var inst_41350 = (state_41385[(7)]);
var inst_41350__$1 = (state_41385[(2)]);
var inst_41351 = (inst_41350__$1 == null);
var state_41385__$1 = (function (){var statearr_41390 = state_41385;
(statearr_41390[(7)] = inst_41350__$1);

return statearr_41390;
})();
if(cljs.core.truth_(inst_41351)){
var statearr_41391_41456 = state_41385__$1;
(statearr_41391_41456[(1)] = (5));

} else {
var statearr_41392_41457 = state_41385__$1;
(statearr_41392_41457[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41386 === (15))){
var inst_41363 = (state_41385[(8)]);
var state_41385__$1 = state_41385;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41385__$1,(18),to,inst_41363);
} else {
if((state_val_41386 === (21))){
var inst_41376 = (state_41385[(2)]);
var state_41385__$1 = state_41385;
var statearr_41393_41458 = state_41385__$1;
(statearr_41393_41458[(2)] = inst_41376);

(statearr_41393_41458[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41386 === (13))){
var inst_41378 = (state_41385[(2)]);
var state_41385__$1 = (function (){var statearr_41394 = state_41385;
(statearr_41394[(9)] = inst_41378);

return statearr_41394;
})();
var statearr_41395_41459 = state_41385__$1;
(statearr_41395_41459[(2)] = null);

(statearr_41395_41459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41386 === (6))){
var inst_41350 = (state_41385[(7)]);
var state_41385__$1 = state_41385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41385__$1,(11),inst_41350);
} else {
if((state_val_41386 === (17))){
var inst_41371 = (state_41385[(2)]);
var state_41385__$1 = state_41385;
if(cljs.core.truth_(inst_41371)){
var statearr_41396_41460 = state_41385__$1;
(statearr_41396_41460[(1)] = (19));

} else {
var statearr_41397_41461 = state_41385__$1;
(statearr_41397_41461[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41386 === (3))){
var inst_41383 = (state_41385[(2)]);
var state_41385__$1 = state_41385;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41385__$1,inst_41383);
} else {
if((state_val_41386 === (12))){
var inst_41360 = (state_41385[(10)]);
var state_41385__$1 = state_41385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41385__$1,(14),inst_41360);
} else {
if((state_val_41386 === (2))){
var state_41385__$1 = state_41385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41385__$1,(4),results);
} else {
if((state_val_41386 === (19))){
var state_41385__$1 = state_41385;
var statearr_41398_41462 = state_41385__$1;
(statearr_41398_41462[(2)] = null);

(statearr_41398_41462[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41386 === (11))){
var inst_41360 = (state_41385[(2)]);
var state_41385__$1 = (function (){var statearr_41399 = state_41385;
(statearr_41399[(10)] = inst_41360);

return statearr_41399;
})();
var statearr_41400_41463 = state_41385__$1;
(statearr_41400_41463[(2)] = null);

(statearr_41400_41463[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41386 === (9))){
var state_41385__$1 = state_41385;
var statearr_41401_41464 = state_41385__$1;
(statearr_41401_41464[(2)] = null);

(statearr_41401_41464[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41386 === (5))){
var state_41385__$1 = state_41385;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41402_41465 = state_41385__$1;
(statearr_41402_41465[(1)] = (8));

} else {
var statearr_41403_41466 = state_41385__$1;
(statearr_41403_41466[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41386 === (14))){
var inst_41365 = (state_41385[(11)]);
var inst_41363 = (state_41385[(8)]);
var inst_41363__$1 = (state_41385[(2)]);
var inst_41364 = (inst_41363__$1 == null);
var inst_41365__$1 = cljs.core.not.call(null,inst_41364);
var state_41385__$1 = (function (){var statearr_41404 = state_41385;
(statearr_41404[(11)] = inst_41365__$1);

(statearr_41404[(8)] = inst_41363__$1);

return statearr_41404;
})();
if(inst_41365__$1){
var statearr_41405_41467 = state_41385__$1;
(statearr_41405_41467[(1)] = (15));

} else {
var statearr_41406_41468 = state_41385__$1;
(statearr_41406_41468[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41386 === (16))){
var inst_41365 = (state_41385[(11)]);
var state_41385__$1 = state_41385;
var statearr_41407_41469 = state_41385__$1;
(statearr_41407_41469[(2)] = inst_41365);

(statearr_41407_41469[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41386 === (10))){
var inst_41357 = (state_41385[(2)]);
var state_41385__$1 = state_41385;
var statearr_41408_41470 = state_41385__$1;
(statearr_41408_41470[(2)] = inst_41357);

(statearr_41408_41470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41386 === (18))){
var inst_41368 = (state_41385[(2)]);
var state_41385__$1 = state_41385;
var statearr_41409_41471 = state_41385__$1;
(statearr_41409_41471[(2)] = inst_41368);

(statearr_41409_41471[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41386 === (8))){
var inst_41354 = cljs.core.async.close_BANG_.call(null,to);
var state_41385__$1 = state_41385;
var statearr_41410_41472 = state_41385__$1;
(statearr_41410_41472[(2)] = inst_41354);

(statearr_41410_41472[(1)] = (10));


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
});})(c__10448__auto__,jobs,results,process,async))
;
return ((function (switch__10427__auto__,c__10448__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0 = (function (){
var statearr_41414 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41414[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__);

(statearr_41414[(1)] = (1));

return statearr_41414;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1 = (function (state_41385){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_41385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e41415){if((e41415 instanceof Object)){
var ex__10431__auto__ = e41415;
var statearr_41416_41473 = state_41385;
(statearr_41416_41473[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41415;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41474 = state_41385;
state_41385 = G__41474;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__ = function(state_41385){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1.call(this,state_41385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto__,jobs,results,process,async))
})();
var state__10450__auto__ = (function (){var statearr_41417 = f__10449__auto__.call(null);
(statearr_41417[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto__);

return statearr_41417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto__,jobs,results,process,async))
);

return c__10448__auto__;
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
var args41475 = [];
var len__9158__auto___41478 = arguments.length;
var i__9159__auto___41479 = (0);
while(true){
if((i__9159__auto___41479 < len__9158__auto___41478)){
args41475.push((arguments[i__9159__auto___41479]));

var G__41480 = (i__9159__auto___41479 + (1));
i__9159__auto___41479 = G__41480;
continue;
} else {
}
break;
}

var G__41477 = args41475.length;
switch (G__41477) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41475.length)].join('')));

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
var args41482 = [];
var len__9158__auto___41485 = arguments.length;
var i__9159__auto___41486 = (0);
while(true){
if((i__9159__auto___41486 < len__9158__auto___41485)){
args41482.push((arguments[i__9159__auto___41486]));

var G__41487 = (i__9159__auto___41486 + (1));
i__9159__auto___41486 = G__41487;
continue;
} else {
}
break;
}

var G__41484 = args41482.length;
switch (G__41484) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41482.length)].join('')));

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
var args41489 = [];
var len__9158__auto___41542 = arguments.length;
var i__9159__auto___41543 = (0);
while(true){
if((i__9159__auto___41543 < len__9158__auto___41542)){
args41489.push((arguments[i__9159__auto___41543]));

var G__41544 = (i__9159__auto___41543 + (1));
i__9159__auto___41543 = G__41544;
continue;
} else {
}
break;
}

var G__41491 = args41489.length;
switch (G__41491) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41489.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__10448__auto___41546 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___41546,tc,fc){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___41546,tc,fc){
return (function (state_41517){
var state_val_41518 = (state_41517[(1)]);
if((state_val_41518 === (7))){
var inst_41513 = (state_41517[(2)]);
var state_41517__$1 = state_41517;
var statearr_41519_41547 = state_41517__$1;
(statearr_41519_41547[(2)] = inst_41513);

(statearr_41519_41547[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41518 === (1))){
var state_41517__$1 = state_41517;
var statearr_41520_41548 = state_41517__$1;
(statearr_41520_41548[(2)] = null);

(statearr_41520_41548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41518 === (4))){
var inst_41494 = (state_41517[(7)]);
var inst_41494__$1 = (state_41517[(2)]);
var inst_41495 = (inst_41494__$1 == null);
var state_41517__$1 = (function (){var statearr_41521 = state_41517;
(statearr_41521[(7)] = inst_41494__$1);

return statearr_41521;
})();
if(cljs.core.truth_(inst_41495)){
var statearr_41522_41549 = state_41517__$1;
(statearr_41522_41549[(1)] = (5));

} else {
var statearr_41523_41550 = state_41517__$1;
(statearr_41523_41550[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41518 === (13))){
var state_41517__$1 = state_41517;
var statearr_41524_41551 = state_41517__$1;
(statearr_41524_41551[(2)] = null);

(statearr_41524_41551[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41518 === (6))){
var inst_41494 = (state_41517[(7)]);
var inst_41500 = p.call(null,inst_41494);
var state_41517__$1 = state_41517;
if(cljs.core.truth_(inst_41500)){
var statearr_41525_41552 = state_41517__$1;
(statearr_41525_41552[(1)] = (9));

} else {
var statearr_41526_41553 = state_41517__$1;
(statearr_41526_41553[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41518 === (3))){
var inst_41515 = (state_41517[(2)]);
var state_41517__$1 = state_41517;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41517__$1,inst_41515);
} else {
if((state_val_41518 === (12))){
var state_41517__$1 = state_41517;
var statearr_41527_41554 = state_41517__$1;
(statearr_41527_41554[(2)] = null);

(statearr_41527_41554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41518 === (2))){
var state_41517__$1 = state_41517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41517__$1,(4),ch);
} else {
if((state_val_41518 === (11))){
var inst_41494 = (state_41517[(7)]);
var inst_41504 = (state_41517[(2)]);
var state_41517__$1 = state_41517;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41517__$1,(8),inst_41504,inst_41494);
} else {
if((state_val_41518 === (9))){
var state_41517__$1 = state_41517;
var statearr_41528_41555 = state_41517__$1;
(statearr_41528_41555[(2)] = tc);

(statearr_41528_41555[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41518 === (5))){
var inst_41497 = cljs.core.async.close_BANG_.call(null,tc);
var inst_41498 = cljs.core.async.close_BANG_.call(null,fc);
var state_41517__$1 = (function (){var statearr_41529 = state_41517;
(statearr_41529[(8)] = inst_41497);

return statearr_41529;
})();
var statearr_41530_41556 = state_41517__$1;
(statearr_41530_41556[(2)] = inst_41498);

(statearr_41530_41556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41518 === (14))){
var inst_41511 = (state_41517[(2)]);
var state_41517__$1 = state_41517;
var statearr_41531_41557 = state_41517__$1;
(statearr_41531_41557[(2)] = inst_41511);

(statearr_41531_41557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41518 === (10))){
var state_41517__$1 = state_41517;
var statearr_41532_41558 = state_41517__$1;
(statearr_41532_41558[(2)] = fc);

(statearr_41532_41558[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41518 === (8))){
var inst_41506 = (state_41517[(2)]);
var state_41517__$1 = state_41517;
if(cljs.core.truth_(inst_41506)){
var statearr_41533_41559 = state_41517__$1;
(statearr_41533_41559[(1)] = (12));

} else {
var statearr_41534_41560 = state_41517__$1;
(statearr_41534_41560[(1)] = (13));

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
});})(c__10448__auto___41546,tc,fc))
;
return ((function (switch__10427__auto__,c__10448__auto___41546,tc,fc){
return (function() {
var cljs$core$async$state_machine__10428__auto__ = null;
var cljs$core$async$state_machine__10428__auto____0 = (function (){
var statearr_41538 = [null,null,null,null,null,null,null,null,null];
(statearr_41538[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_41538[(1)] = (1));

return statearr_41538;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_41517){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_41517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e41539){if((e41539 instanceof Object)){
var ex__10431__auto__ = e41539;
var statearr_41540_41561 = state_41517;
(statearr_41540_41561[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41562 = state_41517;
state_41517 = G__41562;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_41517){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_41517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___41546,tc,fc))
})();
var state__10450__auto__ = (function (){var statearr_41541 = f__10449__auto__.call(null);
(statearr_41541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___41546);

return statearr_41541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___41546,tc,fc))
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
var c__10448__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto__){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto__){
return (function (state_41626){
var state_val_41627 = (state_41626[(1)]);
if((state_val_41627 === (7))){
var inst_41622 = (state_41626[(2)]);
var state_41626__$1 = state_41626;
var statearr_41628_41649 = state_41626__$1;
(statearr_41628_41649[(2)] = inst_41622);

(statearr_41628_41649[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41627 === (1))){
var inst_41606 = init;
var state_41626__$1 = (function (){var statearr_41629 = state_41626;
(statearr_41629[(7)] = inst_41606);

return statearr_41629;
})();
var statearr_41630_41650 = state_41626__$1;
(statearr_41630_41650[(2)] = null);

(statearr_41630_41650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41627 === (4))){
var inst_41609 = (state_41626[(8)]);
var inst_41609__$1 = (state_41626[(2)]);
var inst_41610 = (inst_41609__$1 == null);
var state_41626__$1 = (function (){var statearr_41631 = state_41626;
(statearr_41631[(8)] = inst_41609__$1);

return statearr_41631;
})();
if(cljs.core.truth_(inst_41610)){
var statearr_41632_41651 = state_41626__$1;
(statearr_41632_41651[(1)] = (5));

} else {
var statearr_41633_41652 = state_41626__$1;
(statearr_41633_41652[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41627 === (6))){
var inst_41609 = (state_41626[(8)]);
var inst_41606 = (state_41626[(7)]);
var inst_41613 = (state_41626[(9)]);
var inst_41613__$1 = f.call(null,inst_41606,inst_41609);
var inst_41614 = cljs.core.reduced_QMARK_.call(null,inst_41613__$1);
var state_41626__$1 = (function (){var statearr_41634 = state_41626;
(statearr_41634[(9)] = inst_41613__$1);

return statearr_41634;
})();
if(inst_41614){
var statearr_41635_41653 = state_41626__$1;
(statearr_41635_41653[(1)] = (8));

} else {
var statearr_41636_41654 = state_41626__$1;
(statearr_41636_41654[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41627 === (3))){
var inst_41624 = (state_41626[(2)]);
var state_41626__$1 = state_41626;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41626__$1,inst_41624);
} else {
if((state_val_41627 === (2))){
var state_41626__$1 = state_41626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41626__$1,(4),ch);
} else {
if((state_val_41627 === (9))){
var inst_41613 = (state_41626[(9)]);
var inst_41606 = inst_41613;
var state_41626__$1 = (function (){var statearr_41637 = state_41626;
(statearr_41637[(7)] = inst_41606);

return statearr_41637;
})();
var statearr_41638_41655 = state_41626__$1;
(statearr_41638_41655[(2)] = null);

(statearr_41638_41655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41627 === (5))){
var inst_41606 = (state_41626[(7)]);
var state_41626__$1 = state_41626;
var statearr_41639_41656 = state_41626__$1;
(statearr_41639_41656[(2)] = inst_41606);

(statearr_41639_41656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41627 === (10))){
var inst_41620 = (state_41626[(2)]);
var state_41626__$1 = state_41626;
var statearr_41640_41657 = state_41626__$1;
(statearr_41640_41657[(2)] = inst_41620);

(statearr_41640_41657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41627 === (8))){
var inst_41613 = (state_41626[(9)]);
var inst_41616 = cljs.core.deref.call(null,inst_41613);
var state_41626__$1 = state_41626;
var statearr_41641_41658 = state_41626__$1;
(statearr_41641_41658[(2)] = inst_41616);

(statearr_41641_41658[(1)] = (10));


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
});})(c__10448__auto__))
;
return ((function (switch__10427__auto__,c__10448__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__10428__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10428__auto____0 = (function (){
var statearr_41645 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41645[(0)] = cljs$core$async$reduce_$_state_machine__10428__auto__);

(statearr_41645[(1)] = (1));

return statearr_41645;
});
var cljs$core$async$reduce_$_state_machine__10428__auto____1 = (function (state_41626){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_41626);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e41646){if((e41646 instanceof Object)){
var ex__10431__auto__ = e41646;
var statearr_41647_41659 = state_41626;
(statearr_41647_41659[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41626);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41660 = state_41626;
state_41626 = G__41660;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10428__auto__ = function(state_41626){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10428__auto____1.call(this,state_41626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10428__auto____0;
cljs$core$async$reduce_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10428__auto____1;
return cljs$core$async$reduce_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto__))
})();
var state__10450__auto__ = (function (){var statearr_41648 = f__10449__auto__.call(null);
(statearr_41648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto__);

return statearr_41648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto__))
);

return c__10448__auto__;
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
var args41661 = [];
var len__9158__auto___41713 = arguments.length;
var i__9159__auto___41714 = (0);
while(true){
if((i__9159__auto___41714 < len__9158__auto___41713)){
args41661.push((arguments[i__9159__auto___41714]));

var G__41715 = (i__9159__auto___41714 + (1));
i__9159__auto___41714 = G__41715;
continue;
} else {
}
break;
}

var G__41663 = args41661.length;
switch (G__41663) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41661.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__10448__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto__){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto__){
return (function (state_41688){
var state_val_41689 = (state_41688[(1)]);
if((state_val_41689 === (7))){
var inst_41670 = (state_41688[(2)]);
var state_41688__$1 = state_41688;
var statearr_41690_41717 = state_41688__$1;
(statearr_41690_41717[(2)] = inst_41670);

(statearr_41690_41717[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41689 === (1))){
var inst_41664 = cljs.core.seq.call(null,coll);
var inst_41665 = inst_41664;
var state_41688__$1 = (function (){var statearr_41691 = state_41688;
(statearr_41691[(7)] = inst_41665);

return statearr_41691;
})();
var statearr_41692_41718 = state_41688__$1;
(statearr_41692_41718[(2)] = null);

(statearr_41692_41718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41689 === (4))){
var inst_41665 = (state_41688[(7)]);
var inst_41668 = cljs.core.first.call(null,inst_41665);
var state_41688__$1 = state_41688;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41688__$1,(7),ch,inst_41668);
} else {
if((state_val_41689 === (13))){
var inst_41682 = (state_41688[(2)]);
var state_41688__$1 = state_41688;
var statearr_41693_41719 = state_41688__$1;
(statearr_41693_41719[(2)] = inst_41682);

(statearr_41693_41719[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41689 === (6))){
var inst_41673 = (state_41688[(2)]);
var state_41688__$1 = state_41688;
if(cljs.core.truth_(inst_41673)){
var statearr_41694_41720 = state_41688__$1;
(statearr_41694_41720[(1)] = (8));

} else {
var statearr_41695_41721 = state_41688__$1;
(statearr_41695_41721[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41689 === (3))){
var inst_41686 = (state_41688[(2)]);
var state_41688__$1 = state_41688;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41688__$1,inst_41686);
} else {
if((state_val_41689 === (12))){
var state_41688__$1 = state_41688;
var statearr_41696_41722 = state_41688__$1;
(statearr_41696_41722[(2)] = null);

(statearr_41696_41722[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41689 === (2))){
var inst_41665 = (state_41688[(7)]);
var state_41688__$1 = state_41688;
if(cljs.core.truth_(inst_41665)){
var statearr_41697_41723 = state_41688__$1;
(statearr_41697_41723[(1)] = (4));

} else {
var statearr_41698_41724 = state_41688__$1;
(statearr_41698_41724[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41689 === (11))){
var inst_41679 = cljs.core.async.close_BANG_.call(null,ch);
var state_41688__$1 = state_41688;
var statearr_41699_41725 = state_41688__$1;
(statearr_41699_41725[(2)] = inst_41679);

(statearr_41699_41725[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41689 === (9))){
var state_41688__$1 = state_41688;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41700_41726 = state_41688__$1;
(statearr_41700_41726[(1)] = (11));

} else {
var statearr_41701_41727 = state_41688__$1;
(statearr_41701_41727[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41689 === (5))){
var inst_41665 = (state_41688[(7)]);
var state_41688__$1 = state_41688;
var statearr_41702_41728 = state_41688__$1;
(statearr_41702_41728[(2)] = inst_41665);

(statearr_41702_41728[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41689 === (10))){
var inst_41684 = (state_41688[(2)]);
var state_41688__$1 = state_41688;
var statearr_41703_41729 = state_41688__$1;
(statearr_41703_41729[(2)] = inst_41684);

(statearr_41703_41729[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41689 === (8))){
var inst_41665 = (state_41688[(7)]);
var inst_41675 = cljs.core.next.call(null,inst_41665);
var inst_41665__$1 = inst_41675;
var state_41688__$1 = (function (){var statearr_41704 = state_41688;
(statearr_41704[(7)] = inst_41665__$1);

return statearr_41704;
})();
var statearr_41705_41730 = state_41688__$1;
(statearr_41705_41730[(2)] = null);

(statearr_41705_41730[(1)] = (2));


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
});})(c__10448__auto__))
;
return ((function (switch__10427__auto__,c__10448__auto__){
return (function() {
var cljs$core$async$state_machine__10428__auto__ = null;
var cljs$core$async$state_machine__10428__auto____0 = (function (){
var statearr_41709 = [null,null,null,null,null,null,null,null];
(statearr_41709[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_41709[(1)] = (1));

return statearr_41709;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_41688){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_41688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e41710){if((e41710 instanceof Object)){
var ex__10431__auto__ = e41710;
var statearr_41711_41731 = state_41688;
(statearr_41711_41731[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41732 = state_41688;
state_41688 = G__41732;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_41688){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_41688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto__))
})();
var state__10450__auto__ = (function (){var statearr_41712 = f__10449__auto__.call(null);
(statearr_41712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto__);

return statearr_41712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto__))
);

return c__10448__auto__;
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
var x__8755__auto__ = (((_ == null))?null:_);
var m__8756__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8755__auto__)]);
if(!((m__8756__auto__ == null))){
return m__8756__auto__.call(null,_);
} else {
var m__8756__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__8756__auto____$1 == null))){
return m__8756__auto____$1.call(null,_);
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
var x__8755__auto__ = (((m == null))?null:m);
var m__8756__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8755__auto__)]);
if(!((m__8756__auto__ == null))){
return m__8756__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__8756__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__8756__auto____$1 == null))){
return m__8756__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__8755__auto__ = (((m == null))?null:m);
var m__8756__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8755__auto__)]);
if(!((m__8756__auto__ == null))){
return m__8756__auto__.call(null,m,ch);
} else {
var m__8756__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__8756__auto____$1 == null))){
return m__8756__auto____$1.call(null,m,ch);
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
var x__8755__auto__ = (((m == null))?null:m);
var m__8756__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8755__auto__)]);
if(!((m__8756__auto__ == null))){
return m__8756__auto__.call(null,m);
} else {
var m__8756__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__8756__auto____$1 == null))){
return m__8756__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async41954 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41954 = (function (mult,ch,cs,meta41955){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta41955 = meta41955;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_41956,meta41955__$1){
var self__ = this;
var _41956__$1 = this;
return (new cljs.core.async.t_cljs$core$async41954(self__.mult,self__.ch,self__.cs,meta41955__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async41954.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_41956){
var self__ = this;
var _41956__$1 = this;
return self__.meta41955;
});})(cs))
;

cljs.core.async.t_cljs$core$async41954.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async41954.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async41954.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async41954.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41954.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41954.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41954.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta41955","meta41955",1541598620,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async41954.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41954.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41954";

cljs.core.async.t_cljs$core$async41954.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8698__auto__,writer__8699__auto__,opt__8700__auto__){
return cljs.core._write.call(null,writer__8699__auto__,"cljs.core.async/t_cljs$core$async41954");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async41954 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async41954(mult__$1,ch__$1,cs__$1,meta41955){
return (new cljs.core.async.t_cljs$core$async41954(mult__$1,ch__$1,cs__$1,meta41955));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async41954(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10448__auto___42175 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___42175,cs,m,dchan,dctr,done){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___42175,cs,m,dchan,dctr,done){
return (function (state_42087){
var state_val_42088 = (state_42087[(1)]);
if((state_val_42088 === (7))){
var inst_42083 = (state_42087[(2)]);
var state_42087__$1 = state_42087;
var statearr_42089_42176 = state_42087__$1;
(statearr_42089_42176[(2)] = inst_42083);

(statearr_42089_42176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42088 === (20))){
var inst_41988 = (state_42087[(7)]);
var inst_41998 = cljs.core.first.call(null,inst_41988);
var inst_41999 = cljs.core.nth.call(null,inst_41998,(0),null);
var inst_42000 = cljs.core.nth.call(null,inst_41998,(1),null);
var state_42087__$1 = (function (){var statearr_42090 = state_42087;
(statearr_42090[(8)] = inst_41999);

return statearr_42090;
})();
if(cljs.core.truth_(inst_42000)){
var statearr_42091_42177 = state_42087__$1;
(statearr_42091_42177[(1)] = (22));

} else {
var statearr_42092_42178 = state_42087__$1;
(statearr_42092_42178[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42088 === (27))){
var inst_42028 = (state_42087[(9)]);
var inst_42030 = (state_42087[(10)]);
var inst_42035 = (state_42087[(11)]);
var inst_41959 = (state_42087[(12)]);
var inst_42035__$1 = cljs.core._nth.call(null,inst_42028,inst_42030);
var inst_42036 = cljs.core.async.put_BANG_.call(null,inst_42035__$1,inst_41959,done);
var state_42087__$1 = (function (){var statearr_42093 = state_42087;
(statearr_42093[(11)] = inst_42035__$1);

return statearr_42093;
})();
if(cljs.core.truth_(inst_42036)){
var statearr_42094_42179 = state_42087__$1;
(statearr_42094_42179[(1)] = (30));

} else {
var statearr_42095_42180 = state_42087__$1;
(statearr_42095_42180[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42088 === (1))){
var state_42087__$1 = state_42087;
var statearr_42096_42181 = state_42087__$1;
(statearr_42096_42181[(2)] = null);

(statearr_42096_42181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42088 === (24))){
var inst_41988 = (state_42087[(7)]);
var inst_42005 = (state_42087[(2)]);
var inst_42006 = cljs.core.next.call(null,inst_41988);
var inst_41968 = inst_42006;
var inst_41969 = null;
var inst_41970 = (0);
var inst_41971 = (0);
var state_42087__$1 = (function (){var statearr_42097 = state_42087;
(statearr_42097[(13)] = inst_41969);

(statearr_42097[(14)] = inst_41970);

(statearr_42097[(15)] = inst_41968);

(statearr_42097[(16)] = inst_41971);

(statearr_42097[(17)] = inst_42005);

return statearr_42097;
})();
var statearr_42098_42182 = state_42087__$1;
(statearr_42098_42182[(2)] = null);

(statearr_42098_42182[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42088 === (39))){
var state_42087__$1 = state_42087;
var statearr_42102_42183 = state_42087__$1;
(statearr_42102_42183[(2)] = null);

(statearr_42102_42183[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42088 === (4))){
var inst_41959 = (state_42087[(12)]);
var inst_41959__$1 = (state_42087[(2)]);
var inst_41960 = (inst_41959__$1 == null);
var state_42087__$1 = (function (){var statearr_42103 = state_42087;
(statearr_42103[(12)] = inst_41959__$1);

return statearr_42103;
})();
if(cljs.core.truth_(inst_41960)){
var statearr_42104_42184 = state_42087__$1;
(statearr_42104_42184[(1)] = (5));

} else {
var statearr_42105_42185 = state_42087__$1;
(statearr_42105_42185[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42088 === (15))){
var inst_41969 = (state_42087[(13)]);
var inst_41970 = (state_42087[(14)]);
var inst_41968 = (state_42087[(15)]);
var inst_41971 = (state_42087[(16)]);
var inst_41984 = (state_42087[(2)]);
var inst_41985 = (inst_41971 + (1));
var tmp42099 = inst_41969;
var tmp42100 = inst_41970;
var tmp42101 = inst_41968;
var inst_41968__$1 = tmp42101;
var inst_41969__$1 = tmp42099;
var inst_41970__$1 = tmp42100;
var inst_41971__$1 = inst_41985;
var state_42087__$1 = (function (){var statearr_42106 = state_42087;
(statearr_42106[(13)] = inst_41969__$1);

(statearr_42106[(14)] = inst_41970__$1);

(statearr_42106[(15)] = inst_41968__$1);

(statearr_42106[(16)] = inst_41971__$1);

(statearr_42106[(18)] = inst_41984);

return statearr_42106;
})();
var statearr_42107_42186 = state_42087__$1;
(statearr_42107_42186[(2)] = null);

(statearr_42107_42186[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42088 === (21))){
var inst_42009 = (state_42087[(2)]);
var state_42087__$1 = state_42087;
var statearr_42111_42187 = state_42087__$1;
(statearr_42111_42187[(2)] = inst_42009);

(statearr_42111_42187[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42088 === (31))){
var inst_42035 = (state_42087[(11)]);
var inst_42039 = done.call(null,null);
var inst_42040 = cljs.core.async.untap_STAR_.call(null,m,inst_42035);
var state_42087__$1 = (function (){var statearr_42112 = state_42087;
(statearr_42112[(19)] = inst_42039);

return statearr_42112;
})();
var statearr_42113_42188 = state_42087__$1;
(statearr_42113_42188[(2)] = inst_42040);

(statearr_42113_42188[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42088 === (32))){
var inst_42029 = (state_42087[(20)]);
var inst_42028 = (state_42087[(9)]);
var inst_42030 = (state_42087[(10)]);
var inst_42027 = (state_42087[(21)]);
var inst_42042 = (state_42087[(2)]);
var inst_42043 = (inst_42030 + (1));
var tmp42108 = inst_42029;
var tmp42109 = inst_42028;
var tmp42110 = inst_42027;
var inst_42027__$1 = tmp42110;
var inst_42028__$1 = tmp42109;
var inst_42029__$1 = tmp42108;
var inst_42030__$1 = inst_42043;
var state_42087__$1 = (function (){var statearr_42114 = state_42087;
(statearr_42114[(20)] = inst_42029__$1);

(statearr_42114[(9)] = inst_42028__$1);

(statearr_42114[(10)] = inst_42030__$1);

(statearr_42114[(22)] = inst_42042);

(statearr_42114[(21)] = inst_42027__$1);

return statearr_42114;
})();
var statearr_42115_42189 = state_42087__$1;
(statearr_42115_42189[(2)] = null);

(statearr_42115_42189[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42088 === (40))){
var inst_42055 = (state_42087[(23)]);
var inst_42059 = done.call(null,null);
var inst_42060 = cljs.core.async.untap_STAR_.call(null,m,inst_42055);
var state_42087__$1 = (function (){var statearr_42116 = state_42087;
(statearr_42116[(24)] = inst_42059);

return statearr_42116;
})();
var statearr_42117_42190 = state_42087__$1;
(statearr_42117_42190[(2)] = inst_42060);

(statearr_42117_42190[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42088 === (33))){
var inst_42046 = (state_42087[(25)]);
var inst_42048 = cljs.core.chunked_seq_QMARK_.call(null,inst_42046);
var state_42087__$1 = state_42087;
if(inst_42048){
var statearr_42118_42191 = state_42087__$1;
(statearr_42118_42191[(1)] = (36));

} else {
var statearr_42119_42192 = state_42087__$1;
(statearr_42119_42192[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42088 === (13))){
var inst_41978 = (state_42087[(26)]);
var inst_41981 = cljs.core.async.close_BANG_.call(null,inst_41978);
var state_42087__$1 = state_42087;
var statearr_42120_42193 = state_42087__$1;
(statearr_42120_42193[(2)] = inst_41981);

(statearr_42120_42193[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42088 === (22))){
var inst_41999 = (state_42087[(8)]);
var inst_42002 = cljs.core.async.close_BANG_.call(null,inst_41999);
var state_42087__$1 = state_42087;
var statearr_42121_42194 = state_42087__$1;
(statearr_42121_42194[(2)] = inst_42002);

(statearr_42121_42194[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42088 === (36))){
var inst_42046 = (state_42087[(25)]);
var inst_42050 = cljs.core.chunk_first.call(null,inst_42046);
var inst_42051 = cljs.core.chunk_rest.call(null,inst_42046);
var inst_42052 = cljs.core.count.call(null,inst_42050);
var inst_42027 = inst_42051;
var inst_42028 = inst_42050;
var inst_42029 = inst_42052;
var inst_42030 = (0);
var state_42087__$1 = (function (){var statearr_42122 = state_42087;
(statearr_42122[(20)] = inst_42029);

(statearr_42122[(9)] = inst_42028);

(statearr_42122[(10)] = inst_42030);

(statearr_42122[(21)] = inst_42027);

return statearr_42122;
})();
var statearr_42123_42195 = state_42087__$1;
(statearr_42123_42195[(2)] = null);

(statearr_42123_42195[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42088 === (41))){
var inst_42046 = (state_42087[(25)]);
var inst_42062 = (state_42087[(2)]);
var inst_42063 = cljs.core.next.call(null,inst_42046);
var inst_42027 = inst_42063;
var inst_42028 = null;
var inst_42029 = (0);
var inst_42030 = (0);
var state_42087__$1 = (function (){var statearr_42124 = state_42087;
(statearr_42124[(27)] = inst_42062);

(statearr_42124[(20)] = inst_42029);

(statearr_42124[(9)] = inst_42028);

(statearr_42124[(10)] = inst_42030);

(statearr_42124[(21)] = inst_42027);

return statearr_42124;
})();
var statearr_42125_42196 = state_42087__$1;
(statearr_42125_42196[(2)] = null);

(statearr_42125_42196[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42088 === (43))){
var state_42087__$1 = state_42087;
var statearr_42126_42197 = state_42087__$1;
(statearr_42126_42197[(2)] = null);

(statearr_42126_42197[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42088 === (29))){
var inst_42071 = (state_42087[(2)]);
var state_42087__$1 = state_42087;
var statearr_42127_42198 = state_42087__$1;
(statearr_42127_42198[(2)] = inst_42071);

(statearr_42127_42198[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42088 === (44))){
var inst_42080 = (state_42087[(2)]);
var state_42087__$1 = (function (){var statearr_42128 = state_42087;
(statearr_42128[(28)] = inst_42080);

return statearr_42128;
})();
var statearr_42129_42199 = state_42087__$1;
(statearr_42129_42199[(2)] = null);

(statearr_42129_42199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42088 === (6))){
var inst_42019 = (state_42087[(29)]);
var inst_42018 = cljs.core.deref.call(null,cs);
var inst_42019__$1 = cljs.core.keys.call(null,inst_42018);
var inst_42020 = cljs.core.count.call(null,inst_42019__$1);
var inst_42021 = cljs.core.reset_BANG_.call(null,dctr,inst_42020);
var inst_42026 = cljs.core.seq.call(null,inst_42019__$1);
var inst_42027 = inst_42026;
var inst_42028 = null;
var inst_42029 = (0);
var inst_42030 = (0);
var state_42087__$1 = (function (){var statearr_42130 = state_42087;
(statearr_42130[(20)] = inst_42029);

(statearr_42130[(30)] = inst_42021);

(statearr_42130[(9)] = inst_42028);

(statearr_42130[(10)] = inst_42030);

(statearr_42130[(29)] = inst_42019__$1);

(statearr_42130[(21)] = inst_42027);

return statearr_42130;
})();
var statearr_42131_42200 = state_42087__$1;
(statearr_42131_42200[(2)] = null);

(statearr_42131_42200[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42088 === (28))){
var inst_42046 = (state_42087[(25)]);
var inst_42027 = (state_42087[(21)]);
var inst_42046__$1 = cljs.core.seq.call(null,inst_42027);
var state_42087__$1 = (function (){var statearr_42132 = state_42087;
(statearr_42132[(25)] = inst_42046__$1);

return statearr_42132;
})();
if(inst_42046__$1){
var statearr_42133_42201 = state_42087__$1;
(statearr_42133_42201[(1)] = (33));

} else {
var statearr_42134_42202 = state_42087__$1;
(statearr_42134_42202[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42088 === (25))){
var inst_42029 = (state_42087[(20)]);
var inst_42030 = (state_42087[(10)]);
var inst_42032 = (inst_42030 < inst_42029);
var inst_42033 = inst_42032;
var state_42087__$1 = state_42087;
if(cljs.core.truth_(inst_42033)){
var statearr_42135_42203 = state_42087__$1;
(statearr_42135_42203[(1)] = (27));

} else {
var statearr_42136_42204 = state_42087__$1;
(statearr_42136_42204[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42088 === (34))){
var state_42087__$1 = state_42087;
var statearr_42137_42205 = state_42087__$1;
(statearr_42137_42205[(2)] = null);

(statearr_42137_42205[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42088 === (17))){
var state_42087__$1 = state_42087;
var statearr_42138_42206 = state_42087__$1;
(statearr_42138_42206[(2)] = null);

(statearr_42138_42206[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42088 === (3))){
var inst_42085 = (state_42087[(2)]);
var state_42087__$1 = state_42087;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42087__$1,inst_42085);
} else {
if((state_val_42088 === (12))){
var inst_42014 = (state_42087[(2)]);
var state_42087__$1 = state_42087;
var statearr_42139_42207 = state_42087__$1;
(statearr_42139_42207[(2)] = inst_42014);

(statearr_42139_42207[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42088 === (2))){
var state_42087__$1 = state_42087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42087__$1,(4),ch);
} else {
if((state_val_42088 === (23))){
var state_42087__$1 = state_42087;
var statearr_42140_42208 = state_42087__$1;
(statearr_42140_42208[(2)] = null);

(statearr_42140_42208[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42088 === (35))){
var inst_42069 = (state_42087[(2)]);
var state_42087__$1 = state_42087;
var statearr_42141_42209 = state_42087__$1;
(statearr_42141_42209[(2)] = inst_42069);

(statearr_42141_42209[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42088 === (19))){
var inst_41988 = (state_42087[(7)]);
var inst_41992 = cljs.core.chunk_first.call(null,inst_41988);
var inst_41993 = cljs.core.chunk_rest.call(null,inst_41988);
var inst_41994 = cljs.core.count.call(null,inst_41992);
var inst_41968 = inst_41993;
var inst_41969 = inst_41992;
var inst_41970 = inst_41994;
var inst_41971 = (0);
var state_42087__$1 = (function (){var statearr_42142 = state_42087;
(statearr_42142[(13)] = inst_41969);

(statearr_42142[(14)] = inst_41970);

(statearr_42142[(15)] = inst_41968);

(statearr_42142[(16)] = inst_41971);

return statearr_42142;
})();
var statearr_42143_42210 = state_42087__$1;
(statearr_42143_42210[(2)] = null);

(statearr_42143_42210[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42088 === (11))){
var inst_41968 = (state_42087[(15)]);
var inst_41988 = (state_42087[(7)]);
var inst_41988__$1 = cljs.core.seq.call(null,inst_41968);
var state_42087__$1 = (function (){var statearr_42144 = state_42087;
(statearr_42144[(7)] = inst_41988__$1);

return statearr_42144;
})();
if(inst_41988__$1){
var statearr_42145_42211 = state_42087__$1;
(statearr_42145_42211[(1)] = (16));

} else {
var statearr_42146_42212 = state_42087__$1;
(statearr_42146_42212[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42088 === (9))){
var inst_42016 = (state_42087[(2)]);
var state_42087__$1 = state_42087;
var statearr_42147_42213 = state_42087__$1;
(statearr_42147_42213[(2)] = inst_42016);

(statearr_42147_42213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42088 === (5))){
var inst_41966 = cljs.core.deref.call(null,cs);
var inst_41967 = cljs.core.seq.call(null,inst_41966);
var inst_41968 = inst_41967;
var inst_41969 = null;
var inst_41970 = (0);
var inst_41971 = (0);
var state_42087__$1 = (function (){var statearr_42148 = state_42087;
(statearr_42148[(13)] = inst_41969);

(statearr_42148[(14)] = inst_41970);

(statearr_42148[(15)] = inst_41968);

(statearr_42148[(16)] = inst_41971);

return statearr_42148;
})();
var statearr_42149_42214 = state_42087__$1;
(statearr_42149_42214[(2)] = null);

(statearr_42149_42214[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42088 === (14))){
var state_42087__$1 = state_42087;
var statearr_42150_42215 = state_42087__$1;
(statearr_42150_42215[(2)] = null);

(statearr_42150_42215[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42088 === (45))){
var inst_42077 = (state_42087[(2)]);
var state_42087__$1 = state_42087;
var statearr_42151_42216 = state_42087__$1;
(statearr_42151_42216[(2)] = inst_42077);

(statearr_42151_42216[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42088 === (26))){
var inst_42019 = (state_42087[(29)]);
var inst_42073 = (state_42087[(2)]);
var inst_42074 = cljs.core.seq.call(null,inst_42019);
var state_42087__$1 = (function (){var statearr_42152 = state_42087;
(statearr_42152[(31)] = inst_42073);

return statearr_42152;
})();
if(inst_42074){
var statearr_42153_42217 = state_42087__$1;
(statearr_42153_42217[(1)] = (42));

} else {
var statearr_42154_42218 = state_42087__$1;
(statearr_42154_42218[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42088 === (16))){
var inst_41988 = (state_42087[(7)]);
var inst_41990 = cljs.core.chunked_seq_QMARK_.call(null,inst_41988);
var state_42087__$1 = state_42087;
if(inst_41990){
var statearr_42155_42219 = state_42087__$1;
(statearr_42155_42219[(1)] = (19));

} else {
var statearr_42156_42220 = state_42087__$1;
(statearr_42156_42220[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42088 === (38))){
var inst_42066 = (state_42087[(2)]);
var state_42087__$1 = state_42087;
var statearr_42157_42221 = state_42087__$1;
(statearr_42157_42221[(2)] = inst_42066);

(statearr_42157_42221[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42088 === (30))){
var state_42087__$1 = state_42087;
var statearr_42158_42222 = state_42087__$1;
(statearr_42158_42222[(2)] = null);

(statearr_42158_42222[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42088 === (10))){
var inst_41969 = (state_42087[(13)]);
var inst_41971 = (state_42087[(16)]);
var inst_41977 = cljs.core._nth.call(null,inst_41969,inst_41971);
var inst_41978 = cljs.core.nth.call(null,inst_41977,(0),null);
var inst_41979 = cljs.core.nth.call(null,inst_41977,(1),null);
var state_42087__$1 = (function (){var statearr_42159 = state_42087;
(statearr_42159[(26)] = inst_41978);

return statearr_42159;
})();
if(cljs.core.truth_(inst_41979)){
var statearr_42160_42223 = state_42087__$1;
(statearr_42160_42223[(1)] = (13));

} else {
var statearr_42161_42224 = state_42087__$1;
(statearr_42161_42224[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42088 === (18))){
var inst_42012 = (state_42087[(2)]);
var state_42087__$1 = state_42087;
var statearr_42162_42225 = state_42087__$1;
(statearr_42162_42225[(2)] = inst_42012);

(statearr_42162_42225[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42088 === (42))){
var state_42087__$1 = state_42087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42087__$1,(45),dchan);
} else {
if((state_val_42088 === (37))){
var inst_42046 = (state_42087[(25)]);
var inst_42055 = (state_42087[(23)]);
var inst_41959 = (state_42087[(12)]);
var inst_42055__$1 = cljs.core.first.call(null,inst_42046);
var inst_42056 = cljs.core.async.put_BANG_.call(null,inst_42055__$1,inst_41959,done);
var state_42087__$1 = (function (){var statearr_42163 = state_42087;
(statearr_42163[(23)] = inst_42055__$1);

return statearr_42163;
})();
if(cljs.core.truth_(inst_42056)){
var statearr_42164_42226 = state_42087__$1;
(statearr_42164_42226[(1)] = (39));

} else {
var statearr_42165_42227 = state_42087__$1;
(statearr_42165_42227[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42088 === (8))){
var inst_41970 = (state_42087[(14)]);
var inst_41971 = (state_42087[(16)]);
var inst_41973 = (inst_41971 < inst_41970);
var inst_41974 = inst_41973;
var state_42087__$1 = state_42087;
if(cljs.core.truth_(inst_41974)){
var statearr_42166_42228 = state_42087__$1;
(statearr_42166_42228[(1)] = (10));

} else {
var statearr_42167_42229 = state_42087__$1;
(statearr_42167_42229[(1)] = (11));

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
});})(c__10448__auto___42175,cs,m,dchan,dctr,done))
;
return ((function (switch__10427__auto__,c__10448__auto___42175,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10428__auto__ = null;
var cljs$core$async$mult_$_state_machine__10428__auto____0 = (function (){
var statearr_42171 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42171[(0)] = cljs$core$async$mult_$_state_machine__10428__auto__);

(statearr_42171[(1)] = (1));

return statearr_42171;
});
var cljs$core$async$mult_$_state_machine__10428__auto____1 = (function (state_42087){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_42087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e42172){if((e42172 instanceof Object)){
var ex__10431__auto__ = e42172;
var statearr_42173_42230 = state_42087;
(statearr_42173_42230[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42231 = state_42087;
state_42087 = G__42231;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10428__auto__ = function(state_42087){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10428__auto____1.call(this,state_42087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10428__auto____0;
cljs$core$async$mult_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10428__auto____1;
return cljs$core$async$mult_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___42175,cs,m,dchan,dctr,done))
})();
var state__10450__auto__ = (function (){var statearr_42174 = f__10449__auto__.call(null);
(statearr_42174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___42175);

return statearr_42174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___42175,cs,m,dchan,dctr,done))
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
var args42232 = [];
var len__9158__auto___42235 = arguments.length;
var i__9159__auto___42236 = (0);
while(true){
if((i__9159__auto___42236 < len__9158__auto___42235)){
args42232.push((arguments[i__9159__auto___42236]));

var G__42237 = (i__9159__auto___42236 + (1));
i__9159__auto___42236 = G__42237;
continue;
} else {
}
break;
}

var G__42234 = args42232.length;
switch (G__42234) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42232.length)].join('')));

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
var x__8755__auto__ = (((m == null))?null:m);
var m__8756__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8755__auto__)]);
if(!((m__8756__auto__ == null))){
return m__8756__auto__.call(null,m,ch);
} else {
var m__8756__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__8756__auto____$1 == null))){
return m__8756__auto____$1.call(null,m,ch);
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
var x__8755__auto__ = (((m == null))?null:m);
var m__8756__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8755__auto__)]);
if(!((m__8756__auto__ == null))){
return m__8756__auto__.call(null,m,ch);
} else {
var m__8756__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__8756__auto____$1 == null))){
return m__8756__auto____$1.call(null,m,ch);
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
var x__8755__auto__ = (((m == null))?null:m);
var m__8756__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8755__auto__)]);
if(!((m__8756__auto__ == null))){
return m__8756__auto__.call(null,m);
} else {
var m__8756__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__8756__auto____$1 == null))){
return m__8756__auto____$1.call(null,m);
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
var x__8755__auto__ = (((m == null))?null:m);
var m__8756__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8755__auto__)]);
if(!((m__8756__auto__ == null))){
return m__8756__auto__.call(null,m,state_map);
} else {
var m__8756__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__8756__auto____$1 == null))){
return m__8756__auto____$1.call(null,m,state_map);
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
var x__8755__auto__ = (((m == null))?null:m);
var m__8756__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8755__auto__)]);
if(!((m__8756__auto__ == null))){
return m__8756__auto__.call(null,m,mode);
} else {
var m__8756__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__8756__auto____$1 == null))){
return m__8756__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__9165__auto__ = [];
var len__9158__auto___42249 = arguments.length;
var i__9159__auto___42250 = (0);
while(true){
if((i__9159__auto___42250 < len__9158__auto___42249)){
args__9165__auto__.push((arguments[i__9159__auto___42250]));

var G__42251 = (i__9159__auto___42250 + (1));
i__9159__auto___42250 = G__42251;
continue;
} else {
}
break;
}

var argseq__9166__auto__ = ((((3) < args__9165__auto__.length))?(new cljs.core.IndexedSeq(args__9165__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9166__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__42243){
var map__42244 = p__42243;
var map__42244__$1 = ((((!((map__42244 == null)))?((((map__42244.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42244.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42244):map__42244);
var opts = map__42244__$1;
var statearr_42246_42252 = state;
(statearr_42246_42252[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__42244,map__42244__$1,opts){
return (function (val){
var statearr_42247_42253 = state;
(statearr_42247_42253[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__42244,map__42244__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_42248_42254 = state;
(statearr_42248_42254[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq42239){
var G__42240 = cljs.core.first.call(null,seq42239);
var seq42239__$1 = cljs.core.next.call(null,seq42239);
var G__42241 = cljs.core.first.call(null,seq42239__$1);
var seq42239__$2 = cljs.core.next.call(null,seq42239__$1);
var G__42242 = cljs.core.first.call(null,seq42239__$2);
var seq42239__$3 = cljs.core.next.call(null,seq42239__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42240,G__42241,G__42242,seq42239__$3);
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
if(typeof cljs.core.async.t_cljs$core$async42418 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42418 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta42419){
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
this.meta42419 = meta42419;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42420,meta42419__$1){
var self__ = this;
var _42420__$1 = this;
return (new cljs.core.async.t_cljs$core$async42418(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta42419__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42418.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42420){
var self__ = this;
var _42420__$1 = this;
return self__.meta42419;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42418.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async42418.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42418.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async42418.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42418.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42418.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42418.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42418.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async42418.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta42419","meta42419",-1774523715,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42418.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42418.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42418";

cljs.core.async.t_cljs$core$async42418.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8698__auto__,writer__8699__auto__,opt__8700__auto__){
return cljs.core._write.call(null,writer__8699__auto__,"cljs.core.async/t_cljs$core$async42418");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async42418 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async42418(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta42419){
return (new cljs.core.async.t_cljs$core$async42418(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta42419));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async42418(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10448__auto___42581 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___42581,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___42581,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_42518){
var state_val_42519 = (state_42518[(1)]);
if((state_val_42519 === (7))){
var inst_42436 = (state_42518[(2)]);
var state_42518__$1 = state_42518;
var statearr_42520_42582 = state_42518__$1;
(statearr_42520_42582[(2)] = inst_42436);

(statearr_42520_42582[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42519 === (20))){
var inst_42448 = (state_42518[(7)]);
var state_42518__$1 = state_42518;
var statearr_42521_42583 = state_42518__$1;
(statearr_42521_42583[(2)] = inst_42448);

(statearr_42521_42583[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42519 === (27))){
var state_42518__$1 = state_42518;
var statearr_42522_42584 = state_42518__$1;
(statearr_42522_42584[(2)] = null);

(statearr_42522_42584[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42519 === (1))){
var inst_42424 = (state_42518[(8)]);
var inst_42424__$1 = calc_state.call(null);
var inst_42426 = (inst_42424__$1 == null);
var inst_42427 = cljs.core.not.call(null,inst_42426);
var state_42518__$1 = (function (){var statearr_42523 = state_42518;
(statearr_42523[(8)] = inst_42424__$1);

return statearr_42523;
})();
if(inst_42427){
var statearr_42524_42585 = state_42518__$1;
(statearr_42524_42585[(1)] = (2));

} else {
var statearr_42525_42586 = state_42518__$1;
(statearr_42525_42586[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42519 === (24))){
var inst_42471 = (state_42518[(9)]);
var inst_42492 = (state_42518[(10)]);
var inst_42478 = (state_42518[(11)]);
var inst_42492__$1 = inst_42471.call(null,inst_42478);
var state_42518__$1 = (function (){var statearr_42526 = state_42518;
(statearr_42526[(10)] = inst_42492__$1);

return statearr_42526;
})();
if(cljs.core.truth_(inst_42492__$1)){
var statearr_42527_42587 = state_42518__$1;
(statearr_42527_42587[(1)] = (29));

} else {
var statearr_42528_42588 = state_42518__$1;
(statearr_42528_42588[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42519 === (4))){
var inst_42439 = (state_42518[(2)]);
var state_42518__$1 = state_42518;
if(cljs.core.truth_(inst_42439)){
var statearr_42529_42589 = state_42518__$1;
(statearr_42529_42589[(1)] = (8));

} else {
var statearr_42530_42590 = state_42518__$1;
(statearr_42530_42590[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42519 === (15))){
var inst_42465 = (state_42518[(2)]);
var state_42518__$1 = state_42518;
if(cljs.core.truth_(inst_42465)){
var statearr_42531_42591 = state_42518__$1;
(statearr_42531_42591[(1)] = (19));

} else {
var statearr_42532_42592 = state_42518__$1;
(statearr_42532_42592[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42519 === (21))){
var inst_42470 = (state_42518[(12)]);
var inst_42470__$1 = (state_42518[(2)]);
var inst_42471 = cljs.core.get.call(null,inst_42470__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42472 = cljs.core.get.call(null,inst_42470__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42473 = cljs.core.get.call(null,inst_42470__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_42518__$1 = (function (){var statearr_42533 = state_42518;
(statearr_42533[(13)] = inst_42472);

(statearr_42533[(9)] = inst_42471);

(statearr_42533[(12)] = inst_42470__$1);

return statearr_42533;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_42518__$1,(22),inst_42473);
} else {
if((state_val_42519 === (31))){
var inst_42500 = (state_42518[(2)]);
var state_42518__$1 = state_42518;
if(cljs.core.truth_(inst_42500)){
var statearr_42534_42593 = state_42518__$1;
(statearr_42534_42593[(1)] = (32));

} else {
var statearr_42535_42594 = state_42518__$1;
(statearr_42535_42594[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42519 === (32))){
var inst_42477 = (state_42518[(14)]);
var state_42518__$1 = state_42518;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42518__$1,(35),out,inst_42477);
} else {
if((state_val_42519 === (33))){
var inst_42470 = (state_42518[(12)]);
var inst_42448 = inst_42470;
var state_42518__$1 = (function (){var statearr_42536 = state_42518;
(statearr_42536[(7)] = inst_42448);

return statearr_42536;
})();
var statearr_42537_42595 = state_42518__$1;
(statearr_42537_42595[(2)] = null);

(statearr_42537_42595[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42519 === (13))){
var inst_42448 = (state_42518[(7)]);
var inst_42455 = inst_42448.cljs$lang$protocol_mask$partition0$;
var inst_42456 = (inst_42455 & (64));
var inst_42457 = inst_42448.cljs$core$ISeq$;
var inst_42458 = (inst_42456) || (inst_42457);
var state_42518__$1 = state_42518;
if(cljs.core.truth_(inst_42458)){
var statearr_42538_42596 = state_42518__$1;
(statearr_42538_42596[(1)] = (16));

} else {
var statearr_42539_42597 = state_42518__$1;
(statearr_42539_42597[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42519 === (22))){
var inst_42478 = (state_42518[(11)]);
var inst_42477 = (state_42518[(14)]);
var inst_42476 = (state_42518[(2)]);
var inst_42477__$1 = cljs.core.nth.call(null,inst_42476,(0),null);
var inst_42478__$1 = cljs.core.nth.call(null,inst_42476,(1),null);
var inst_42479 = (inst_42477__$1 == null);
var inst_42480 = cljs.core._EQ_.call(null,inst_42478__$1,change);
var inst_42481 = (inst_42479) || (inst_42480);
var state_42518__$1 = (function (){var statearr_42540 = state_42518;
(statearr_42540[(11)] = inst_42478__$1);

(statearr_42540[(14)] = inst_42477__$1);

return statearr_42540;
})();
if(cljs.core.truth_(inst_42481)){
var statearr_42541_42598 = state_42518__$1;
(statearr_42541_42598[(1)] = (23));

} else {
var statearr_42542_42599 = state_42518__$1;
(statearr_42542_42599[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42519 === (36))){
var inst_42470 = (state_42518[(12)]);
var inst_42448 = inst_42470;
var state_42518__$1 = (function (){var statearr_42543 = state_42518;
(statearr_42543[(7)] = inst_42448);

return statearr_42543;
})();
var statearr_42544_42600 = state_42518__$1;
(statearr_42544_42600[(2)] = null);

(statearr_42544_42600[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42519 === (29))){
var inst_42492 = (state_42518[(10)]);
var state_42518__$1 = state_42518;
var statearr_42545_42601 = state_42518__$1;
(statearr_42545_42601[(2)] = inst_42492);

(statearr_42545_42601[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42519 === (6))){
var state_42518__$1 = state_42518;
var statearr_42546_42602 = state_42518__$1;
(statearr_42546_42602[(2)] = false);

(statearr_42546_42602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42519 === (28))){
var inst_42488 = (state_42518[(2)]);
var inst_42489 = calc_state.call(null);
var inst_42448 = inst_42489;
var state_42518__$1 = (function (){var statearr_42547 = state_42518;
(statearr_42547[(15)] = inst_42488);

(statearr_42547[(7)] = inst_42448);

return statearr_42547;
})();
var statearr_42548_42603 = state_42518__$1;
(statearr_42548_42603[(2)] = null);

(statearr_42548_42603[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42519 === (25))){
var inst_42514 = (state_42518[(2)]);
var state_42518__$1 = state_42518;
var statearr_42549_42604 = state_42518__$1;
(statearr_42549_42604[(2)] = inst_42514);

(statearr_42549_42604[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42519 === (34))){
var inst_42512 = (state_42518[(2)]);
var state_42518__$1 = state_42518;
var statearr_42550_42605 = state_42518__$1;
(statearr_42550_42605[(2)] = inst_42512);

(statearr_42550_42605[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42519 === (17))){
var state_42518__$1 = state_42518;
var statearr_42551_42606 = state_42518__$1;
(statearr_42551_42606[(2)] = false);

(statearr_42551_42606[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42519 === (3))){
var state_42518__$1 = state_42518;
var statearr_42552_42607 = state_42518__$1;
(statearr_42552_42607[(2)] = false);

(statearr_42552_42607[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42519 === (12))){
var inst_42516 = (state_42518[(2)]);
var state_42518__$1 = state_42518;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42518__$1,inst_42516);
} else {
if((state_val_42519 === (2))){
var inst_42424 = (state_42518[(8)]);
var inst_42429 = inst_42424.cljs$lang$protocol_mask$partition0$;
var inst_42430 = (inst_42429 & (64));
var inst_42431 = inst_42424.cljs$core$ISeq$;
var inst_42432 = (inst_42430) || (inst_42431);
var state_42518__$1 = state_42518;
if(cljs.core.truth_(inst_42432)){
var statearr_42553_42608 = state_42518__$1;
(statearr_42553_42608[(1)] = (5));

} else {
var statearr_42554_42609 = state_42518__$1;
(statearr_42554_42609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42519 === (23))){
var inst_42477 = (state_42518[(14)]);
var inst_42483 = (inst_42477 == null);
var state_42518__$1 = state_42518;
if(cljs.core.truth_(inst_42483)){
var statearr_42555_42610 = state_42518__$1;
(statearr_42555_42610[(1)] = (26));

} else {
var statearr_42556_42611 = state_42518__$1;
(statearr_42556_42611[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42519 === (35))){
var inst_42503 = (state_42518[(2)]);
var state_42518__$1 = state_42518;
if(cljs.core.truth_(inst_42503)){
var statearr_42557_42612 = state_42518__$1;
(statearr_42557_42612[(1)] = (36));

} else {
var statearr_42558_42613 = state_42518__$1;
(statearr_42558_42613[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42519 === (19))){
var inst_42448 = (state_42518[(7)]);
var inst_42467 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42448);
var state_42518__$1 = state_42518;
var statearr_42559_42614 = state_42518__$1;
(statearr_42559_42614[(2)] = inst_42467);

(statearr_42559_42614[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42519 === (11))){
var inst_42448 = (state_42518[(7)]);
var inst_42452 = (inst_42448 == null);
var inst_42453 = cljs.core.not.call(null,inst_42452);
var state_42518__$1 = state_42518;
if(inst_42453){
var statearr_42560_42615 = state_42518__$1;
(statearr_42560_42615[(1)] = (13));

} else {
var statearr_42561_42616 = state_42518__$1;
(statearr_42561_42616[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42519 === (9))){
var inst_42424 = (state_42518[(8)]);
var state_42518__$1 = state_42518;
var statearr_42562_42617 = state_42518__$1;
(statearr_42562_42617[(2)] = inst_42424);

(statearr_42562_42617[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42519 === (5))){
var state_42518__$1 = state_42518;
var statearr_42563_42618 = state_42518__$1;
(statearr_42563_42618[(2)] = true);

(statearr_42563_42618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42519 === (14))){
var state_42518__$1 = state_42518;
var statearr_42564_42619 = state_42518__$1;
(statearr_42564_42619[(2)] = false);

(statearr_42564_42619[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42519 === (26))){
var inst_42478 = (state_42518[(11)]);
var inst_42485 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_42478);
var state_42518__$1 = state_42518;
var statearr_42565_42620 = state_42518__$1;
(statearr_42565_42620[(2)] = inst_42485);

(statearr_42565_42620[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42519 === (16))){
var state_42518__$1 = state_42518;
var statearr_42566_42621 = state_42518__$1;
(statearr_42566_42621[(2)] = true);

(statearr_42566_42621[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42519 === (38))){
var inst_42508 = (state_42518[(2)]);
var state_42518__$1 = state_42518;
var statearr_42567_42622 = state_42518__$1;
(statearr_42567_42622[(2)] = inst_42508);

(statearr_42567_42622[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42519 === (30))){
var inst_42472 = (state_42518[(13)]);
var inst_42471 = (state_42518[(9)]);
var inst_42478 = (state_42518[(11)]);
var inst_42495 = cljs.core.empty_QMARK_.call(null,inst_42471);
var inst_42496 = inst_42472.call(null,inst_42478);
var inst_42497 = cljs.core.not.call(null,inst_42496);
var inst_42498 = (inst_42495) && (inst_42497);
var state_42518__$1 = state_42518;
var statearr_42568_42623 = state_42518__$1;
(statearr_42568_42623[(2)] = inst_42498);

(statearr_42568_42623[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42519 === (10))){
var inst_42424 = (state_42518[(8)]);
var inst_42444 = (state_42518[(2)]);
var inst_42445 = cljs.core.get.call(null,inst_42444,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42446 = cljs.core.get.call(null,inst_42444,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42447 = cljs.core.get.call(null,inst_42444,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_42448 = inst_42424;
var state_42518__$1 = (function (){var statearr_42569 = state_42518;
(statearr_42569[(16)] = inst_42445);

(statearr_42569[(17)] = inst_42447);

(statearr_42569[(18)] = inst_42446);

(statearr_42569[(7)] = inst_42448);

return statearr_42569;
})();
var statearr_42570_42624 = state_42518__$1;
(statearr_42570_42624[(2)] = null);

(statearr_42570_42624[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42519 === (18))){
var inst_42462 = (state_42518[(2)]);
var state_42518__$1 = state_42518;
var statearr_42571_42625 = state_42518__$1;
(statearr_42571_42625[(2)] = inst_42462);

(statearr_42571_42625[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42519 === (37))){
var state_42518__$1 = state_42518;
var statearr_42572_42626 = state_42518__$1;
(statearr_42572_42626[(2)] = null);

(statearr_42572_42626[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42519 === (8))){
var inst_42424 = (state_42518[(8)]);
var inst_42441 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42424);
var state_42518__$1 = state_42518;
var statearr_42573_42627 = state_42518__$1;
(statearr_42573_42627[(2)] = inst_42441);

(statearr_42573_42627[(1)] = (10));


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
});})(c__10448__auto___42581,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10427__auto__,c__10448__auto___42581,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10428__auto__ = null;
var cljs$core$async$mix_$_state_machine__10428__auto____0 = (function (){
var statearr_42577 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42577[(0)] = cljs$core$async$mix_$_state_machine__10428__auto__);

(statearr_42577[(1)] = (1));

return statearr_42577;
});
var cljs$core$async$mix_$_state_machine__10428__auto____1 = (function (state_42518){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_42518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e42578){if((e42578 instanceof Object)){
var ex__10431__auto__ = e42578;
var statearr_42579_42628 = state_42518;
(statearr_42579_42628[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42629 = state_42518;
state_42518 = G__42629;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10428__auto__ = function(state_42518){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10428__auto____1.call(this,state_42518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10428__auto____0;
cljs$core$async$mix_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10428__auto____1;
return cljs$core$async$mix_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___42581,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10450__auto__ = (function (){var statearr_42580 = f__10449__auto__.call(null);
(statearr_42580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___42581);

return statearr_42580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___42581,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__8755__auto__ = (((p == null))?null:p);
var m__8756__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8755__auto__)]);
if(!((m__8756__auto__ == null))){
return m__8756__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__8756__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__8756__auto____$1 == null))){
return m__8756__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__8755__auto__ = (((p == null))?null:p);
var m__8756__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8755__auto__)]);
if(!((m__8756__auto__ == null))){
return m__8756__auto__.call(null,p,v,ch);
} else {
var m__8756__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__8756__auto____$1 == null))){
return m__8756__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args42630 = [];
var len__9158__auto___42633 = arguments.length;
var i__9159__auto___42634 = (0);
while(true){
if((i__9159__auto___42634 < len__9158__auto___42633)){
args42630.push((arguments[i__9159__auto___42634]));

var G__42635 = (i__9159__auto___42634 + (1));
i__9159__auto___42634 = G__42635;
continue;
} else {
}
break;
}

var G__42632 = args42630.length;
switch (G__42632) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42630.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__8755__auto__ = (((p == null))?null:p);
var m__8756__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8755__auto__)]);
if(!((m__8756__auto__ == null))){
return m__8756__auto__.call(null,p);
} else {
var m__8756__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8756__auto____$1 == null))){
return m__8756__auto____$1.call(null,p);
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
var x__8755__auto__ = (((p == null))?null:p);
var m__8756__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8755__auto__)]);
if(!((m__8756__auto__ == null))){
return m__8756__auto__.call(null,p,v);
} else {
var m__8756__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8756__auto____$1 == null))){
return m__8756__auto____$1.call(null,p,v);
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
var args42638 = [];
var len__9158__auto___42763 = arguments.length;
var i__9159__auto___42764 = (0);
while(true){
if((i__9159__auto___42764 < len__9158__auto___42763)){
args42638.push((arguments[i__9159__auto___42764]));

var G__42765 = (i__9159__auto___42764 + (1));
i__9159__auto___42764 = G__42765;
continue;
} else {
}
break;
}

var G__42640 = args42638.length;
switch (G__42640) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42638.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__8100__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__8100__auto__)){
return or__8100__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__8100__auto__,mults){
return (function (p1__42637_SHARP_){
if(cljs.core.truth_(p1__42637_SHARP_.call(null,topic))){
return p1__42637_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__42637_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__8100__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async42641 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42641 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta42642){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta42642 = meta42642;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_42643,meta42642__$1){
var self__ = this;
var _42643__$1 = this;
return (new cljs.core.async.t_cljs$core$async42641(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta42642__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42641.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_42643){
var self__ = this;
var _42643__$1 = this;
return self__.meta42642;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42641.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async42641.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42641.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async42641.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42641.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async42641.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42641.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42641.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta42642","meta42642",1602583665,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42641.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42641.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42641";

cljs.core.async.t_cljs$core$async42641.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8698__auto__,writer__8699__auto__,opt__8700__auto__){
return cljs.core._write.call(null,writer__8699__auto__,"cljs.core.async/t_cljs$core$async42641");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async42641 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async42641(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42642){
return (new cljs.core.async.t_cljs$core$async42641(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42642));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async42641(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10448__auto___42767 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___42767,mults,ensure_mult,p){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___42767,mults,ensure_mult,p){
return (function (state_42715){
var state_val_42716 = (state_42715[(1)]);
if((state_val_42716 === (7))){
var inst_42711 = (state_42715[(2)]);
var state_42715__$1 = state_42715;
var statearr_42717_42768 = state_42715__$1;
(statearr_42717_42768[(2)] = inst_42711);

(statearr_42717_42768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (20))){
var state_42715__$1 = state_42715;
var statearr_42718_42769 = state_42715__$1;
(statearr_42718_42769[(2)] = null);

(statearr_42718_42769[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (1))){
var state_42715__$1 = state_42715;
var statearr_42719_42770 = state_42715__$1;
(statearr_42719_42770[(2)] = null);

(statearr_42719_42770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (24))){
var inst_42694 = (state_42715[(7)]);
var inst_42703 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_42694);
var state_42715__$1 = state_42715;
var statearr_42720_42771 = state_42715__$1;
(statearr_42720_42771[(2)] = inst_42703);

(statearr_42720_42771[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (4))){
var inst_42646 = (state_42715[(8)]);
var inst_42646__$1 = (state_42715[(2)]);
var inst_42647 = (inst_42646__$1 == null);
var state_42715__$1 = (function (){var statearr_42721 = state_42715;
(statearr_42721[(8)] = inst_42646__$1);

return statearr_42721;
})();
if(cljs.core.truth_(inst_42647)){
var statearr_42722_42772 = state_42715__$1;
(statearr_42722_42772[(1)] = (5));

} else {
var statearr_42723_42773 = state_42715__$1;
(statearr_42723_42773[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (15))){
var inst_42688 = (state_42715[(2)]);
var state_42715__$1 = state_42715;
var statearr_42724_42774 = state_42715__$1;
(statearr_42724_42774[(2)] = inst_42688);

(statearr_42724_42774[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (21))){
var inst_42708 = (state_42715[(2)]);
var state_42715__$1 = (function (){var statearr_42725 = state_42715;
(statearr_42725[(9)] = inst_42708);

return statearr_42725;
})();
var statearr_42726_42775 = state_42715__$1;
(statearr_42726_42775[(2)] = null);

(statearr_42726_42775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (13))){
var inst_42670 = (state_42715[(10)]);
var inst_42672 = cljs.core.chunked_seq_QMARK_.call(null,inst_42670);
var state_42715__$1 = state_42715;
if(inst_42672){
var statearr_42727_42776 = state_42715__$1;
(statearr_42727_42776[(1)] = (16));

} else {
var statearr_42728_42777 = state_42715__$1;
(statearr_42728_42777[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (22))){
var inst_42700 = (state_42715[(2)]);
var state_42715__$1 = state_42715;
if(cljs.core.truth_(inst_42700)){
var statearr_42729_42778 = state_42715__$1;
(statearr_42729_42778[(1)] = (23));

} else {
var statearr_42730_42779 = state_42715__$1;
(statearr_42730_42779[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (6))){
var inst_42696 = (state_42715[(11)]);
var inst_42646 = (state_42715[(8)]);
var inst_42694 = (state_42715[(7)]);
var inst_42694__$1 = topic_fn.call(null,inst_42646);
var inst_42695 = cljs.core.deref.call(null,mults);
var inst_42696__$1 = cljs.core.get.call(null,inst_42695,inst_42694__$1);
var state_42715__$1 = (function (){var statearr_42731 = state_42715;
(statearr_42731[(11)] = inst_42696__$1);

(statearr_42731[(7)] = inst_42694__$1);

return statearr_42731;
})();
if(cljs.core.truth_(inst_42696__$1)){
var statearr_42732_42780 = state_42715__$1;
(statearr_42732_42780[(1)] = (19));

} else {
var statearr_42733_42781 = state_42715__$1;
(statearr_42733_42781[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (25))){
var inst_42705 = (state_42715[(2)]);
var state_42715__$1 = state_42715;
var statearr_42734_42782 = state_42715__$1;
(statearr_42734_42782[(2)] = inst_42705);

(statearr_42734_42782[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (17))){
var inst_42670 = (state_42715[(10)]);
var inst_42679 = cljs.core.first.call(null,inst_42670);
var inst_42680 = cljs.core.async.muxch_STAR_.call(null,inst_42679);
var inst_42681 = cljs.core.async.close_BANG_.call(null,inst_42680);
var inst_42682 = cljs.core.next.call(null,inst_42670);
var inst_42656 = inst_42682;
var inst_42657 = null;
var inst_42658 = (0);
var inst_42659 = (0);
var state_42715__$1 = (function (){var statearr_42735 = state_42715;
(statearr_42735[(12)] = inst_42656);

(statearr_42735[(13)] = inst_42659);

(statearr_42735[(14)] = inst_42681);

(statearr_42735[(15)] = inst_42658);

(statearr_42735[(16)] = inst_42657);

return statearr_42735;
})();
var statearr_42736_42783 = state_42715__$1;
(statearr_42736_42783[(2)] = null);

(statearr_42736_42783[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (3))){
var inst_42713 = (state_42715[(2)]);
var state_42715__$1 = state_42715;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42715__$1,inst_42713);
} else {
if((state_val_42716 === (12))){
var inst_42690 = (state_42715[(2)]);
var state_42715__$1 = state_42715;
var statearr_42737_42784 = state_42715__$1;
(statearr_42737_42784[(2)] = inst_42690);

(statearr_42737_42784[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (2))){
var state_42715__$1 = state_42715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42715__$1,(4),ch);
} else {
if((state_val_42716 === (23))){
var state_42715__$1 = state_42715;
var statearr_42738_42785 = state_42715__$1;
(statearr_42738_42785[(2)] = null);

(statearr_42738_42785[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (19))){
var inst_42696 = (state_42715[(11)]);
var inst_42646 = (state_42715[(8)]);
var inst_42698 = cljs.core.async.muxch_STAR_.call(null,inst_42696);
var state_42715__$1 = state_42715;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42715__$1,(22),inst_42698,inst_42646);
} else {
if((state_val_42716 === (11))){
var inst_42656 = (state_42715[(12)]);
var inst_42670 = (state_42715[(10)]);
var inst_42670__$1 = cljs.core.seq.call(null,inst_42656);
var state_42715__$1 = (function (){var statearr_42739 = state_42715;
(statearr_42739[(10)] = inst_42670__$1);

return statearr_42739;
})();
if(inst_42670__$1){
var statearr_42740_42786 = state_42715__$1;
(statearr_42740_42786[(1)] = (13));

} else {
var statearr_42741_42787 = state_42715__$1;
(statearr_42741_42787[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (9))){
var inst_42692 = (state_42715[(2)]);
var state_42715__$1 = state_42715;
var statearr_42742_42788 = state_42715__$1;
(statearr_42742_42788[(2)] = inst_42692);

(statearr_42742_42788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (5))){
var inst_42653 = cljs.core.deref.call(null,mults);
var inst_42654 = cljs.core.vals.call(null,inst_42653);
var inst_42655 = cljs.core.seq.call(null,inst_42654);
var inst_42656 = inst_42655;
var inst_42657 = null;
var inst_42658 = (0);
var inst_42659 = (0);
var state_42715__$1 = (function (){var statearr_42743 = state_42715;
(statearr_42743[(12)] = inst_42656);

(statearr_42743[(13)] = inst_42659);

(statearr_42743[(15)] = inst_42658);

(statearr_42743[(16)] = inst_42657);

return statearr_42743;
})();
var statearr_42744_42789 = state_42715__$1;
(statearr_42744_42789[(2)] = null);

(statearr_42744_42789[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (14))){
var state_42715__$1 = state_42715;
var statearr_42748_42790 = state_42715__$1;
(statearr_42748_42790[(2)] = null);

(statearr_42748_42790[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (16))){
var inst_42670 = (state_42715[(10)]);
var inst_42674 = cljs.core.chunk_first.call(null,inst_42670);
var inst_42675 = cljs.core.chunk_rest.call(null,inst_42670);
var inst_42676 = cljs.core.count.call(null,inst_42674);
var inst_42656 = inst_42675;
var inst_42657 = inst_42674;
var inst_42658 = inst_42676;
var inst_42659 = (0);
var state_42715__$1 = (function (){var statearr_42749 = state_42715;
(statearr_42749[(12)] = inst_42656);

(statearr_42749[(13)] = inst_42659);

(statearr_42749[(15)] = inst_42658);

(statearr_42749[(16)] = inst_42657);

return statearr_42749;
})();
var statearr_42750_42791 = state_42715__$1;
(statearr_42750_42791[(2)] = null);

(statearr_42750_42791[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (10))){
var inst_42656 = (state_42715[(12)]);
var inst_42659 = (state_42715[(13)]);
var inst_42658 = (state_42715[(15)]);
var inst_42657 = (state_42715[(16)]);
var inst_42664 = cljs.core._nth.call(null,inst_42657,inst_42659);
var inst_42665 = cljs.core.async.muxch_STAR_.call(null,inst_42664);
var inst_42666 = cljs.core.async.close_BANG_.call(null,inst_42665);
var inst_42667 = (inst_42659 + (1));
var tmp42745 = inst_42656;
var tmp42746 = inst_42658;
var tmp42747 = inst_42657;
var inst_42656__$1 = tmp42745;
var inst_42657__$1 = tmp42747;
var inst_42658__$1 = tmp42746;
var inst_42659__$1 = inst_42667;
var state_42715__$1 = (function (){var statearr_42751 = state_42715;
(statearr_42751[(17)] = inst_42666);

(statearr_42751[(12)] = inst_42656__$1);

(statearr_42751[(13)] = inst_42659__$1);

(statearr_42751[(15)] = inst_42658__$1);

(statearr_42751[(16)] = inst_42657__$1);

return statearr_42751;
})();
var statearr_42752_42792 = state_42715__$1;
(statearr_42752_42792[(2)] = null);

(statearr_42752_42792[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (18))){
var inst_42685 = (state_42715[(2)]);
var state_42715__$1 = state_42715;
var statearr_42753_42793 = state_42715__$1;
(statearr_42753_42793[(2)] = inst_42685);

(statearr_42753_42793[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (8))){
var inst_42659 = (state_42715[(13)]);
var inst_42658 = (state_42715[(15)]);
var inst_42661 = (inst_42659 < inst_42658);
var inst_42662 = inst_42661;
var state_42715__$1 = state_42715;
if(cljs.core.truth_(inst_42662)){
var statearr_42754_42794 = state_42715__$1;
(statearr_42754_42794[(1)] = (10));

} else {
var statearr_42755_42795 = state_42715__$1;
(statearr_42755_42795[(1)] = (11));

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
});})(c__10448__auto___42767,mults,ensure_mult,p))
;
return ((function (switch__10427__auto__,c__10448__auto___42767,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10428__auto__ = null;
var cljs$core$async$state_machine__10428__auto____0 = (function (){
var statearr_42759 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42759[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_42759[(1)] = (1));

return statearr_42759;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_42715){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_42715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e42760){if((e42760 instanceof Object)){
var ex__10431__auto__ = e42760;
var statearr_42761_42796 = state_42715;
(statearr_42761_42796[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42797 = state_42715;
state_42715 = G__42797;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_42715){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_42715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___42767,mults,ensure_mult,p))
})();
var state__10450__auto__ = (function (){var statearr_42762 = f__10449__auto__.call(null);
(statearr_42762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___42767);

return statearr_42762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___42767,mults,ensure_mult,p))
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
var args42798 = [];
var len__9158__auto___42801 = arguments.length;
var i__9159__auto___42802 = (0);
while(true){
if((i__9159__auto___42802 < len__9158__auto___42801)){
args42798.push((arguments[i__9159__auto___42802]));

var G__42803 = (i__9159__auto___42802 + (1));
i__9159__auto___42802 = G__42803;
continue;
} else {
}
break;
}

var G__42800 = args42798.length;
switch (G__42800) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42798.length)].join('')));

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
var args42805 = [];
var len__9158__auto___42808 = arguments.length;
var i__9159__auto___42809 = (0);
while(true){
if((i__9159__auto___42809 < len__9158__auto___42808)){
args42805.push((arguments[i__9159__auto___42809]));

var G__42810 = (i__9159__auto___42809 + (1));
i__9159__auto___42809 = G__42810;
continue;
} else {
}
break;
}

var G__42807 = args42805.length;
switch (G__42807) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42805.length)].join('')));

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
var args42812 = [];
var len__9158__auto___42883 = arguments.length;
var i__9159__auto___42884 = (0);
while(true){
if((i__9159__auto___42884 < len__9158__auto___42883)){
args42812.push((arguments[i__9159__auto___42884]));

var G__42885 = (i__9159__auto___42884 + (1));
i__9159__auto___42884 = G__42885;
continue;
} else {
}
break;
}

var G__42814 = args42812.length;
switch (G__42814) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42812.length)].join('')));

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
var c__10448__auto___42887 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___42887,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___42887,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_42853){
var state_val_42854 = (state_42853[(1)]);
if((state_val_42854 === (7))){
var state_42853__$1 = state_42853;
var statearr_42855_42888 = state_42853__$1;
(statearr_42855_42888[(2)] = null);

(statearr_42855_42888[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42854 === (1))){
var state_42853__$1 = state_42853;
var statearr_42856_42889 = state_42853__$1;
(statearr_42856_42889[(2)] = null);

(statearr_42856_42889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42854 === (4))){
var inst_42817 = (state_42853[(7)]);
var inst_42819 = (inst_42817 < cnt);
var state_42853__$1 = state_42853;
if(cljs.core.truth_(inst_42819)){
var statearr_42857_42890 = state_42853__$1;
(statearr_42857_42890[(1)] = (6));

} else {
var statearr_42858_42891 = state_42853__$1;
(statearr_42858_42891[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42854 === (15))){
var inst_42849 = (state_42853[(2)]);
var state_42853__$1 = state_42853;
var statearr_42859_42892 = state_42853__$1;
(statearr_42859_42892[(2)] = inst_42849);

(statearr_42859_42892[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42854 === (13))){
var inst_42842 = cljs.core.async.close_BANG_.call(null,out);
var state_42853__$1 = state_42853;
var statearr_42860_42893 = state_42853__$1;
(statearr_42860_42893[(2)] = inst_42842);

(statearr_42860_42893[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42854 === (6))){
var state_42853__$1 = state_42853;
var statearr_42861_42894 = state_42853__$1;
(statearr_42861_42894[(2)] = null);

(statearr_42861_42894[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42854 === (3))){
var inst_42851 = (state_42853[(2)]);
var state_42853__$1 = state_42853;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42853__$1,inst_42851);
} else {
if((state_val_42854 === (12))){
var inst_42839 = (state_42853[(8)]);
var inst_42839__$1 = (state_42853[(2)]);
var inst_42840 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_42839__$1);
var state_42853__$1 = (function (){var statearr_42862 = state_42853;
(statearr_42862[(8)] = inst_42839__$1);

return statearr_42862;
})();
if(cljs.core.truth_(inst_42840)){
var statearr_42863_42895 = state_42853__$1;
(statearr_42863_42895[(1)] = (13));

} else {
var statearr_42864_42896 = state_42853__$1;
(statearr_42864_42896[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42854 === (2))){
var inst_42816 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_42817 = (0);
var state_42853__$1 = (function (){var statearr_42865 = state_42853;
(statearr_42865[(9)] = inst_42816);

(statearr_42865[(7)] = inst_42817);

return statearr_42865;
})();
var statearr_42866_42897 = state_42853__$1;
(statearr_42866_42897[(2)] = null);

(statearr_42866_42897[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42854 === (11))){
var inst_42817 = (state_42853[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42853,(10),Object,null,(9));
var inst_42826 = chs__$1.call(null,inst_42817);
var inst_42827 = done.call(null,inst_42817);
var inst_42828 = cljs.core.async.take_BANG_.call(null,inst_42826,inst_42827);
var state_42853__$1 = state_42853;
var statearr_42867_42898 = state_42853__$1;
(statearr_42867_42898[(2)] = inst_42828);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42853__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42854 === (9))){
var inst_42817 = (state_42853[(7)]);
var inst_42830 = (state_42853[(2)]);
var inst_42831 = (inst_42817 + (1));
var inst_42817__$1 = inst_42831;
var state_42853__$1 = (function (){var statearr_42868 = state_42853;
(statearr_42868[(7)] = inst_42817__$1);

(statearr_42868[(10)] = inst_42830);

return statearr_42868;
})();
var statearr_42869_42899 = state_42853__$1;
(statearr_42869_42899[(2)] = null);

(statearr_42869_42899[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42854 === (5))){
var inst_42837 = (state_42853[(2)]);
var state_42853__$1 = (function (){var statearr_42870 = state_42853;
(statearr_42870[(11)] = inst_42837);

return statearr_42870;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42853__$1,(12),dchan);
} else {
if((state_val_42854 === (14))){
var inst_42839 = (state_42853[(8)]);
var inst_42844 = cljs.core.apply.call(null,f,inst_42839);
var state_42853__$1 = state_42853;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42853__$1,(16),out,inst_42844);
} else {
if((state_val_42854 === (16))){
var inst_42846 = (state_42853[(2)]);
var state_42853__$1 = (function (){var statearr_42871 = state_42853;
(statearr_42871[(12)] = inst_42846);

return statearr_42871;
})();
var statearr_42872_42900 = state_42853__$1;
(statearr_42872_42900[(2)] = null);

(statearr_42872_42900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42854 === (10))){
var inst_42821 = (state_42853[(2)]);
var inst_42822 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_42853__$1 = (function (){var statearr_42873 = state_42853;
(statearr_42873[(13)] = inst_42821);

return statearr_42873;
})();
var statearr_42874_42901 = state_42853__$1;
(statearr_42874_42901[(2)] = inst_42822);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42853__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42854 === (8))){
var inst_42835 = (state_42853[(2)]);
var state_42853__$1 = state_42853;
var statearr_42875_42902 = state_42853__$1;
(statearr_42875_42902[(2)] = inst_42835);

(statearr_42875_42902[(1)] = (5));


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
});})(c__10448__auto___42887,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10427__auto__,c__10448__auto___42887,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10428__auto__ = null;
var cljs$core$async$state_machine__10428__auto____0 = (function (){
var statearr_42879 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42879[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_42879[(1)] = (1));

return statearr_42879;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_42853){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_42853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e42880){if((e42880 instanceof Object)){
var ex__10431__auto__ = e42880;
var statearr_42881_42903 = state_42853;
(statearr_42881_42903[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42880;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42904 = state_42853;
state_42853 = G__42904;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_42853){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_42853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___42887,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10450__auto__ = (function (){var statearr_42882 = f__10449__auto__.call(null);
(statearr_42882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___42887);

return statearr_42882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___42887,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args42906 = [];
var len__9158__auto___42962 = arguments.length;
var i__9159__auto___42963 = (0);
while(true){
if((i__9159__auto___42963 < len__9158__auto___42962)){
args42906.push((arguments[i__9159__auto___42963]));

var G__42964 = (i__9159__auto___42963 + (1));
i__9159__auto___42963 = G__42964;
continue;
} else {
}
break;
}

var G__42908 = args42906.length;
switch (G__42908) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42906.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10448__auto___42966 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___42966,out){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___42966,out){
return (function (state_42938){
var state_val_42939 = (state_42938[(1)]);
if((state_val_42939 === (7))){
var inst_42918 = (state_42938[(7)]);
var inst_42917 = (state_42938[(8)]);
var inst_42917__$1 = (state_42938[(2)]);
var inst_42918__$1 = cljs.core.nth.call(null,inst_42917__$1,(0),null);
var inst_42919 = cljs.core.nth.call(null,inst_42917__$1,(1),null);
var inst_42920 = (inst_42918__$1 == null);
var state_42938__$1 = (function (){var statearr_42940 = state_42938;
(statearr_42940[(7)] = inst_42918__$1);

(statearr_42940[(8)] = inst_42917__$1);

(statearr_42940[(9)] = inst_42919);

return statearr_42940;
})();
if(cljs.core.truth_(inst_42920)){
var statearr_42941_42967 = state_42938__$1;
(statearr_42941_42967[(1)] = (8));

} else {
var statearr_42942_42968 = state_42938__$1;
(statearr_42942_42968[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42939 === (1))){
var inst_42909 = cljs.core.vec.call(null,chs);
var inst_42910 = inst_42909;
var state_42938__$1 = (function (){var statearr_42943 = state_42938;
(statearr_42943[(10)] = inst_42910);

return statearr_42943;
})();
var statearr_42944_42969 = state_42938__$1;
(statearr_42944_42969[(2)] = null);

(statearr_42944_42969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42939 === (4))){
var inst_42910 = (state_42938[(10)]);
var state_42938__$1 = state_42938;
return cljs.core.async.ioc_alts_BANG_.call(null,state_42938__$1,(7),inst_42910);
} else {
if((state_val_42939 === (6))){
var inst_42934 = (state_42938[(2)]);
var state_42938__$1 = state_42938;
var statearr_42945_42970 = state_42938__$1;
(statearr_42945_42970[(2)] = inst_42934);

(statearr_42945_42970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42939 === (3))){
var inst_42936 = (state_42938[(2)]);
var state_42938__$1 = state_42938;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42938__$1,inst_42936);
} else {
if((state_val_42939 === (2))){
var inst_42910 = (state_42938[(10)]);
var inst_42912 = cljs.core.count.call(null,inst_42910);
var inst_42913 = (inst_42912 > (0));
var state_42938__$1 = state_42938;
if(cljs.core.truth_(inst_42913)){
var statearr_42947_42971 = state_42938__$1;
(statearr_42947_42971[(1)] = (4));

} else {
var statearr_42948_42972 = state_42938__$1;
(statearr_42948_42972[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42939 === (11))){
var inst_42910 = (state_42938[(10)]);
var inst_42927 = (state_42938[(2)]);
var tmp42946 = inst_42910;
var inst_42910__$1 = tmp42946;
var state_42938__$1 = (function (){var statearr_42949 = state_42938;
(statearr_42949[(11)] = inst_42927);

(statearr_42949[(10)] = inst_42910__$1);

return statearr_42949;
})();
var statearr_42950_42973 = state_42938__$1;
(statearr_42950_42973[(2)] = null);

(statearr_42950_42973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42939 === (9))){
var inst_42918 = (state_42938[(7)]);
var state_42938__$1 = state_42938;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42938__$1,(11),out,inst_42918);
} else {
if((state_val_42939 === (5))){
var inst_42932 = cljs.core.async.close_BANG_.call(null,out);
var state_42938__$1 = state_42938;
var statearr_42951_42974 = state_42938__$1;
(statearr_42951_42974[(2)] = inst_42932);

(statearr_42951_42974[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42939 === (10))){
var inst_42930 = (state_42938[(2)]);
var state_42938__$1 = state_42938;
var statearr_42952_42975 = state_42938__$1;
(statearr_42952_42975[(2)] = inst_42930);

(statearr_42952_42975[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42939 === (8))){
var inst_42910 = (state_42938[(10)]);
var inst_42918 = (state_42938[(7)]);
var inst_42917 = (state_42938[(8)]);
var inst_42919 = (state_42938[(9)]);
var inst_42922 = (function (){var cs = inst_42910;
var vec__42915 = inst_42917;
var v = inst_42918;
var c = inst_42919;
return ((function (cs,vec__42915,v,c,inst_42910,inst_42918,inst_42917,inst_42919,state_val_42939,c__10448__auto___42966,out){
return (function (p1__42905_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__42905_SHARP_);
});
;})(cs,vec__42915,v,c,inst_42910,inst_42918,inst_42917,inst_42919,state_val_42939,c__10448__auto___42966,out))
})();
var inst_42923 = cljs.core.filterv.call(null,inst_42922,inst_42910);
var inst_42910__$1 = inst_42923;
var state_42938__$1 = (function (){var statearr_42953 = state_42938;
(statearr_42953[(10)] = inst_42910__$1);

return statearr_42953;
})();
var statearr_42954_42976 = state_42938__$1;
(statearr_42954_42976[(2)] = null);

(statearr_42954_42976[(1)] = (2));


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
});})(c__10448__auto___42966,out))
;
return ((function (switch__10427__auto__,c__10448__auto___42966,out){
return (function() {
var cljs$core$async$state_machine__10428__auto__ = null;
var cljs$core$async$state_machine__10428__auto____0 = (function (){
var statearr_42958 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42958[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_42958[(1)] = (1));

return statearr_42958;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_42938){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_42938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e42959){if((e42959 instanceof Object)){
var ex__10431__auto__ = e42959;
var statearr_42960_42977 = state_42938;
(statearr_42960_42977[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42959;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42978 = state_42938;
state_42938 = G__42978;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_42938){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_42938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___42966,out))
})();
var state__10450__auto__ = (function (){var statearr_42961 = f__10449__auto__.call(null);
(statearr_42961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___42966);

return statearr_42961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___42966,out))
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
var args42979 = [];
var len__9158__auto___43028 = arguments.length;
var i__9159__auto___43029 = (0);
while(true){
if((i__9159__auto___43029 < len__9158__auto___43028)){
args42979.push((arguments[i__9159__auto___43029]));

var G__43030 = (i__9159__auto___43029 + (1));
i__9159__auto___43029 = G__43030;
continue;
} else {
}
break;
}

var G__42981 = args42979.length;
switch (G__42981) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42979.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10448__auto___43032 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___43032,out){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___43032,out){
return (function (state_43005){
var state_val_43006 = (state_43005[(1)]);
if((state_val_43006 === (7))){
var inst_42987 = (state_43005[(7)]);
var inst_42987__$1 = (state_43005[(2)]);
var inst_42988 = (inst_42987__$1 == null);
var inst_42989 = cljs.core.not.call(null,inst_42988);
var state_43005__$1 = (function (){var statearr_43007 = state_43005;
(statearr_43007[(7)] = inst_42987__$1);

return statearr_43007;
})();
if(inst_42989){
var statearr_43008_43033 = state_43005__$1;
(statearr_43008_43033[(1)] = (8));

} else {
var statearr_43009_43034 = state_43005__$1;
(statearr_43009_43034[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43006 === (1))){
var inst_42982 = (0);
var state_43005__$1 = (function (){var statearr_43010 = state_43005;
(statearr_43010[(8)] = inst_42982);

return statearr_43010;
})();
var statearr_43011_43035 = state_43005__$1;
(statearr_43011_43035[(2)] = null);

(statearr_43011_43035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43006 === (4))){
var state_43005__$1 = state_43005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43005__$1,(7),ch);
} else {
if((state_val_43006 === (6))){
var inst_43000 = (state_43005[(2)]);
var state_43005__$1 = state_43005;
var statearr_43012_43036 = state_43005__$1;
(statearr_43012_43036[(2)] = inst_43000);

(statearr_43012_43036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43006 === (3))){
var inst_43002 = (state_43005[(2)]);
var inst_43003 = cljs.core.async.close_BANG_.call(null,out);
var state_43005__$1 = (function (){var statearr_43013 = state_43005;
(statearr_43013[(9)] = inst_43002);

return statearr_43013;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43005__$1,inst_43003);
} else {
if((state_val_43006 === (2))){
var inst_42982 = (state_43005[(8)]);
var inst_42984 = (inst_42982 < n);
var state_43005__$1 = state_43005;
if(cljs.core.truth_(inst_42984)){
var statearr_43014_43037 = state_43005__$1;
(statearr_43014_43037[(1)] = (4));

} else {
var statearr_43015_43038 = state_43005__$1;
(statearr_43015_43038[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43006 === (11))){
var inst_42982 = (state_43005[(8)]);
var inst_42992 = (state_43005[(2)]);
var inst_42993 = (inst_42982 + (1));
var inst_42982__$1 = inst_42993;
var state_43005__$1 = (function (){var statearr_43016 = state_43005;
(statearr_43016[(10)] = inst_42992);

(statearr_43016[(8)] = inst_42982__$1);

return statearr_43016;
})();
var statearr_43017_43039 = state_43005__$1;
(statearr_43017_43039[(2)] = null);

(statearr_43017_43039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43006 === (9))){
var state_43005__$1 = state_43005;
var statearr_43018_43040 = state_43005__$1;
(statearr_43018_43040[(2)] = null);

(statearr_43018_43040[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43006 === (5))){
var state_43005__$1 = state_43005;
var statearr_43019_43041 = state_43005__$1;
(statearr_43019_43041[(2)] = null);

(statearr_43019_43041[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43006 === (10))){
var inst_42997 = (state_43005[(2)]);
var state_43005__$1 = state_43005;
var statearr_43020_43042 = state_43005__$1;
(statearr_43020_43042[(2)] = inst_42997);

(statearr_43020_43042[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43006 === (8))){
var inst_42987 = (state_43005[(7)]);
var state_43005__$1 = state_43005;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43005__$1,(11),out,inst_42987);
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
});})(c__10448__auto___43032,out))
;
return ((function (switch__10427__auto__,c__10448__auto___43032,out){
return (function() {
var cljs$core$async$state_machine__10428__auto__ = null;
var cljs$core$async$state_machine__10428__auto____0 = (function (){
var statearr_43024 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43024[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_43024[(1)] = (1));

return statearr_43024;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_43005){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_43005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e43025){if((e43025 instanceof Object)){
var ex__10431__auto__ = e43025;
var statearr_43026_43043 = state_43005;
(statearr_43026_43043[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43044 = state_43005;
state_43005 = G__43044;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_43005){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_43005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___43032,out))
})();
var state__10450__auto__ = (function (){var statearr_43027 = f__10449__auto__.call(null);
(statearr_43027[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___43032);

return statearr_43027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___43032,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async43052 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43052 = (function (map_LT_,f,ch,meta43053){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta43053 = meta43053;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43054,meta43053__$1){
var self__ = this;
var _43054__$1 = this;
return (new cljs.core.async.t_cljs$core$async43052(self__.map_LT_,self__.f,self__.ch,meta43053__$1));
});

cljs.core.async.t_cljs$core$async43052.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43054){
var self__ = this;
var _43054__$1 = this;
return self__.meta43053;
});

cljs.core.async.t_cljs$core$async43052.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async43052.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43052.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43052.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async43052.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async43055 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43055 = (function (map_LT_,f,ch,meta43053,_,fn1,meta43056){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta43053 = meta43053;
this._ = _;
this.fn1 = fn1;
this.meta43056 = meta43056;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_43057,meta43056__$1){
var self__ = this;
var _43057__$1 = this;
return (new cljs.core.async.t_cljs$core$async43055(self__.map_LT_,self__.f,self__.ch,self__.meta43053,self__._,self__.fn1,meta43056__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async43055.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_43057){
var self__ = this;
var _43057__$1 = this;
return self__.meta43056;
});})(___$1))
;

cljs.core.async.t_cljs$core$async43055.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async43055.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43055.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async43055.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__43045_SHARP_){
return f1.call(null,(((p1__43045_SHARP_ == null))?null:self__.f.call(null,p1__43045_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async43055.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43053","meta43053",964698679,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async43052","cljs.core.async/t_cljs$core$async43052",343700360,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta43056","meta43056",-1516324104,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43055.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43055.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43055";

cljs.core.async.t_cljs$core$async43055.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8698__auto__,writer__8699__auto__,opt__8700__auto__){
return cljs.core._write.call(null,writer__8699__auto__,"cljs.core.async/t_cljs$core$async43055");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async43055 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43055(map_LT___$1,f__$1,ch__$1,meta43053__$1,___$2,fn1__$1,meta43056){
return (new cljs.core.async.t_cljs$core$async43055(map_LT___$1,f__$1,ch__$1,meta43053__$1,___$2,fn1__$1,meta43056));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async43055(self__.map_LT_,self__.f,self__.ch,self__.meta43053,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__8088__auto__ = ret;
if(cljs.core.truth_(and__8088__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__8088__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async43052.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async43052.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async43052.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43053","meta43053",964698679,null)], null);
});

cljs.core.async.t_cljs$core$async43052.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43052.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43052";

cljs.core.async.t_cljs$core$async43052.cljs$lang$ctorPrWriter = (function (this__8698__auto__,writer__8699__auto__,opt__8700__auto__){
return cljs.core._write.call(null,writer__8699__auto__,"cljs.core.async/t_cljs$core$async43052");
});

cljs.core.async.__GT_t_cljs$core$async43052 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43052(map_LT___$1,f__$1,ch__$1,meta43053){
return (new cljs.core.async.t_cljs$core$async43052(map_LT___$1,f__$1,ch__$1,meta43053));
});

}

return (new cljs.core.async.t_cljs$core$async43052(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async43061 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43061 = (function (map_GT_,f,ch,meta43062){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta43062 = meta43062;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43063,meta43062__$1){
var self__ = this;
var _43063__$1 = this;
return (new cljs.core.async.t_cljs$core$async43061(self__.map_GT_,self__.f,self__.ch,meta43062__$1));
});

cljs.core.async.t_cljs$core$async43061.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43063){
var self__ = this;
var _43063__$1 = this;
return self__.meta43062;
});

cljs.core.async.t_cljs$core$async43061.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async43061.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43061.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async43061.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async43061.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async43061.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async43061.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43062","meta43062",1775236297,null)], null);
});

cljs.core.async.t_cljs$core$async43061.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43061.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43061";

cljs.core.async.t_cljs$core$async43061.cljs$lang$ctorPrWriter = (function (this__8698__auto__,writer__8699__auto__,opt__8700__auto__){
return cljs.core._write.call(null,writer__8699__auto__,"cljs.core.async/t_cljs$core$async43061");
});

cljs.core.async.__GT_t_cljs$core$async43061 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async43061(map_GT___$1,f__$1,ch__$1,meta43062){
return (new cljs.core.async.t_cljs$core$async43061(map_GT___$1,f__$1,ch__$1,meta43062));
});

}

return (new cljs.core.async.t_cljs$core$async43061(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async43067 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43067 = (function (filter_GT_,p,ch,meta43068){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta43068 = meta43068;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43069,meta43068__$1){
var self__ = this;
var _43069__$1 = this;
return (new cljs.core.async.t_cljs$core$async43067(self__.filter_GT_,self__.p,self__.ch,meta43068__$1));
});

cljs.core.async.t_cljs$core$async43067.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43069){
var self__ = this;
var _43069__$1 = this;
return self__.meta43068;
});

cljs.core.async.t_cljs$core$async43067.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async43067.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43067.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43067.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async43067.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async43067.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async43067.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async43067.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43068","meta43068",20529724,null)], null);
});

cljs.core.async.t_cljs$core$async43067.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43067.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43067";

cljs.core.async.t_cljs$core$async43067.cljs$lang$ctorPrWriter = (function (this__8698__auto__,writer__8699__auto__,opt__8700__auto__){
return cljs.core._write.call(null,writer__8699__auto__,"cljs.core.async/t_cljs$core$async43067");
});

cljs.core.async.__GT_t_cljs$core$async43067 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async43067(filter_GT___$1,p__$1,ch__$1,meta43068){
return (new cljs.core.async.t_cljs$core$async43067(filter_GT___$1,p__$1,ch__$1,meta43068));
});

}

return (new cljs.core.async.t_cljs$core$async43067(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args43070 = [];
var len__9158__auto___43114 = arguments.length;
var i__9159__auto___43115 = (0);
while(true){
if((i__9159__auto___43115 < len__9158__auto___43114)){
args43070.push((arguments[i__9159__auto___43115]));

var G__43116 = (i__9159__auto___43115 + (1));
i__9159__auto___43115 = G__43116;
continue;
} else {
}
break;
}

var G__43072 = args43070.length;
switch (G__43072) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43070.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10448__auto___43118 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___43118,out){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___43118,out){
return (function (state_43093){
var state_val_43094 = (state_43093[(1)]);
if((state_val_43094 === (7))){
var inst_43089 = (state_43093[(2)]);
var state_43093__$1 = state_43093;
var statearr_43095_43119 = state_43093__$1;
(statearr_43095_43119[(2)] = inst_43089);

(statearr_43095_43119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43094 === (1))){
var state_43093__$1 = state_43093;
var statearr_43096_43120 = state_43093__$1;
(statearr_43096_43120[(2)] = null);

(statearr_43096_43120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43094 === (4))){
var inst_43075 = (state_43093[(7)]);
var inst_43075__$1 = (state_43093[(2)]);
var inst_43076 = (inst_43075__$1 == null);
var state_43093__$1 = (function (){var statearr_43097 = state_43093;
(statearr_43097[(7)] = inst_43075__$1);

return statearr_43097;
})();
if(cljs.core.truth_(inst_43076)){
var statearr_43098_43121 = state_43093__$1;
(statearr_43098_43121[(1)] = (5));

} else {
var statearr_43099_43122 = state_43093__$1;
(statearr_43099_43122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43094 === (6))){
var inst_43075 = (state_43093[(7)]);
var inst_43080 = p.call(null,inst_43075);
var state_43093__$1 = state_43093;
if(cljs.core.truth_(inst_43080)){
var statearr_43100_43123 = state_43093__$1;
(statearr_43100_43123[(1)] = (8));

} else {
var statearr_43101_43124 = state_43093__$1;
(statearr_43101_43124[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43094 === (3))){
var inst_43091 = (state_43093[(2)]);
var state_43093__$1 = state_43093;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43093__$1,inst_43091);
} else {
if((state_val_43094 === (2))){
var state_43093__$1 = state_43093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43093__$1,(4),ch);
} else {
if((state_val_43094 === (11))){
var inst_43083 = (state_43093[(2)]);
var state_43093__$1 = state_43093;
var statearr_43102_43125 = state_43093__$1;
(statearr_43102_43125[(2)] = inst_43083);

(statearr_43102_43125[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43094 === (9))){
var state_43093__$1 = state_43093;
var statearr_43103_43126 = state_43093__$1;
(statearr_43103_43126[(2)] = null);

(statearr_43103_43126[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43094 === (5))){
var inst_43078 = cljs.core.async.close_BANG_.call(null,out);
var state_43093__$1 = state_43093;
var statearr_43104_43127 = state_43093__$1;
(statearr_43104_43127[(2)] = inst_43078);

(statearr_43104_43127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43094 === (10))){
var inst_43086 = (state_43093[(2)]);
var state_43093__$1 = (function (){var statearr_43105 = state_43093;
(statearr_43105[(8)] = inst_43086);

return statearr_43105;
})();
var statearr_43106_43128 = state_43093__$1;
(statearr_43106_43128[(2)] = null);

(statearr_43106_43128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43094 === (8))){
var inst_43075 = (state_43093[(7)]);
var state_43093__$1 = state_43093;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43093__$1,(11),out,inst_43075);
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
});})(c__10448__auto___43118,out))
;
return ((function (switch__10427__auto__,c__10448__auto___43118,out){
return (function() {
var cljs$core$async$state_machine__10428__auto__ = null;
var cljs$core$async$state_machine__10428__auto____0 = (function (){
var statearr_43110 = [null,null,null,null,null,null,null,null,null];
(statearr_43110[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_43110[(1)] = (1));

return statearr_43110;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_43093){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_43093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e43111){if((e43111 instanceof Object)){
var ex__10431__auto__ = e43111;
var statearr_43112_43129 = state_43093;
(statearr_43112_43129[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43130 = state_43093;
state_43093 = G__43130;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_43093){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_43093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___43118,out))
})();
var state__10450__auto__ = (function (){var statearr_43113 = f__10449__auto__.call(null);
(statearr_43113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___43118);

return statearr_43113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___43118,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args43131 = [];
var len__9158__auto___43134 = arguments.length;
var i__9159__auto___43135 = (0);
while(true){
if((i__9159__auto___43135 < len__9158__auto___43134)){
args43131.push((arguments[i__9159__auto___43135]));

var G__43136 = (i__9159__auto___43135 + (1));
i__9159__auto___43135 = G__43136;
continue;
} else {
}
break;
}

var G__43133 = args43131.length;
switch (G__43133) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43131.length)].join('')));

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
var c__10448__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto__){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto__){
return (function (state_43303){
var state_val_43304 = (state_43303[(1)]);
if((state_val_43304 === (7))){
var inst_43299 = (state_43303[(2)]);
var state_43303__$1 = state_43303;
var statearr_43305_43346 = state_43303__$1;
(statearr_43305_43346[(2)] = inst_43299);

(statearr_43305_43346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43304 === (20))){
var inst_43269 = (state_43303[(7)]);
var inst_43280 = (state_43303[(2)]);
var inst_43281 = cljs.core.next.call(null,inst_43269);
var inst_43255 = inst_43281;
var inst_43256 = null;
var inst_43257 = (0);
var inst_43258 = (0);
var state_43303__$1 = (function (){var statearr_43306 = state_43303;
(statearr_43306[(8)] = inst_43257);

(statearr_43306[(9)] = inst_43258);

(statearr_43306[(10)] = inst_43255);

(statearr_43306[(11)] = inst_43256);

(statearr_43306[(12)] = inst_43280);

return statearr_43306;
})();
var statearr_43307_43347 = state_43303__$1;
(statearr_43307_43347[(2)] = null);

(statearr_43307_43347[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43304 === (1))){
var state_43303__$1 = state_43303;
var statearr_43308_43348 = state_43303__$1;
(statearr_43308_43348[(2)] = null);

(statearr_43308_43348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43304 === (4))){
var inst_43244 = (state_43303[(13)]);
var inst_43244__$1 = (state_43303[(2)]);
var inst_43245 = (inst_43244__$1 == null);
var state_43303__$1 = (function (){var statearr_43309 = state_43303;
(statearr_43309[(13)] = inst_43244__$1);

return statearr_43309;
})();
if(cljs.core.truth_(inst_43245)){
var statearr_43310_43349 = state_43303__$1;
(statearr_43310_43349[(1)] = (5));

} else {
var statearr_43311_43350 = state_43303__$1;
(statearr_43311_43350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43304 === (15))){
var state_43303__$1 = state_43303;
var statearr_43315_43351 = state_43303__$1;
(statearr_43315_43351[(2)] = null);

(statearr_43315_43351[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43304 === (21))){
var state_43303__$1 = state_43303;
var statearr_43316_43352 = state_43303__$1;
(statearr_43316_43352[(2)] = null);

(statearr_43316_43352[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43304 === (13))){
var inst_43257 = (state_43303[(8)]);
var inst_43258 = (state_43303[(9)]);
var inst_43255 = (state_43303[(10)]);
var inst_43256 = (state_43303[(11)]);
var inst_43265 = (state_43303[(2)]);
var inst_43266 = (inst_43258 + (1));
var tmp43312 = inst_43257;
var tmp43313 = inst_43255;
var tmp43314 = inst_43256;
var inst_43255__$1 = tmp43313;
var inst_43256__$1 = tmp43314;
var inst_43257__$1 = tmp43312;
var inst_43258__$1 = inst_43266;
var state_43303__$1 = (function (){var statearr_43317 = state_43303;
(statearr_43317[(14)] = inst_43265);

(statearr_43317[(8)] = inst_43257__$1);

(statearr_43317[(9)] = inst_43258__$1);

(statearr_43317[(10)] = inst_43255__$1);

(statearr_43317[(11)] = inst_43256__$1);

return statearr_43317;
})();
var statearr_43318_43353 = state_43303__$1;
(statearr_43318_43353[(2)] = null);

(statearr_43318_43353[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43304 === (22))){
var state_43303__$1 = state_43303;
var statearr_43319_43354 = state_43303__$1;
(statearr_43319_43354[(2)] = null);

(statearr_43319_43354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43304 === (6))){
var inst_43244 = (state_43303[(13)]);
var inst_43253 = f.call(null,inst_43244);
var inst_43254 = cljs.core.seq.call(null,inst_43253);
var inst_43255 = inst_43254;
var inst_43256 = null;
var inst_43257 = (0);
var inst_43258 = (0);
var state_43303__$1 = (function (){var statearr_43320 = state_43303;
(statearr_43320[(8)] = inst_43257);

(statearr_43320[(9)] = inst_43258);

(statearr_43320[(10)] = inst_43255);

(statearr_43320[(11)] = inst_43256);

return statearr_43320;
})();
var statearr_43321_43355 = state_43303__$1;
(statearr_43321_43355[(2)] = null);

(statearr_43321_43355[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43304 === (17))){
var inst_43269 = (state_43303[(7)]);
var inst_43273 = cljs.core.chunk_first.call(null,inst_43269);
var inst_43274 = cljs.core.chunk_rest.call(null,inst_43269);
var inst_43275 = cljs.core.count.call(null,inst_43273);
var inst_43255 = inst_43274;
var inst_43256 = inst_43273;
var inst_43257 = inst_43275;
var inst_43258 = (0);
var state_43303__$1 = (function (){var statearr_43322 = state_43303;
(statearr_43322[(8)] = inst_43257);

(statearr_43322[(9)] = inst_43258);

(statearr_43322[(10)] = inst_43255);

(statearr_43322[(11)] = inst_43256);

return statearr_43322;
})();
var statearr_43323_43356 = state_43303__$1;
(statearr_43323_43356[(2)] = null);

(statearr_43323_43356[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43304 === (3))){
var inst_43301 = (state_43303[(2)]);
var state_43303__$1 = state_43303;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43303__$1,inst_43301);
} else {
if((state_val_43304 === (12))){
var inst_43289 = (state_43303[(2)]);
var state_43303__$1 = state_43303;
var statearr_43324_43357 = state_43303__$1;
(statearr_43324_43357[(2)] = inst_43289);

(statearr_43324_43357[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43304 === (2))){
var state_43303__$1 = state_43303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43303__$1,(4),in$);
} else {
if((state_val_43304 === (23))){
var inst_43297 = (state_43303[(2)]);
var state_43303__$1 = state_43303;
var statearr_43325_43358 = state_43303__$1;
(statearr_43325_43358[(2)] = inst_43297);

(statearr_43325_43358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43304 === (19))){
var inst_43284 = (state_43303[(2)]);
var state_43303__$1 = state_43303;
var statearr_43326_43359 = state_43303__$1;
(statearr_43326_43359[(2)] = inst_43284);

(statearr_43326_43359[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43304 === (11))){
var inst_43269 = (state_43303[(7)]);
var inst_43255 = (state_43303[(10)]);
var inst_43269__$1 = cljs.core.seq.call(null,inst_43255);
var state_43303__$1 = (function (){var statearr_43327 = state_43303;
(statearr_43327[(7)] = inst_43269__$1);

return statearr_43327;
})();
if(inst_43269__$1){
var statearr_43328_43360 = state_43303__$1;
(statearr_43328_43360[(1)] = (14));

} else {
var statearr_43329_43361 = state_43303__$1;
(statearr_43329_43361[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43304 === (9))){
var inst_43291 = (state_43303[(2)]);
var inst_43292 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_43303__$1 = (function (){var statearr_43330 = state_43303;
(statearr_43330[(15)] = inst_43291);

return statearr_43330;
})();
if(cljs.core.truth_(inst_43292)){
var statearr_43331_43362 = state_43303__$1;
(statearr_43331_43362[(1)] = (21));

} else {
var statearr_43332_43363 = state_43303__$1;
(statearr_43332_43363[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43304 === (5))){
var inst_43247 = cljs.core.async.close_BANG_.call(null,out);
var state_43303__$1 = state_43303;
var statearr_43333_43364 = state_43303__$1;
(statearr_43333_43364[(2)] = inst_43247);

(statearr_43333_43364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43304 === (14))){
var inst_43269 = (state_43303[(7)]);
var inst_43271 = cljs.core.chunked_seq_QMARK_.call(null,inst_43269);
var state_43303__$1 = state_43303;
if(inst_43271){
var statearr_43334_43365 = state_43303__$1;
(statearr_43334_43365[(1)] = (17));

} else {
var statearr_43335_43366 = state_43303__$1;
(statearr_43335_43366[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43304 === (16))){
var inst_43287 = (state_43303[(2)]);
var state_43303__$1 = state_43303;
var statearr_43336_43367 = state_43303__$1;
(statearr_43336_43367[(2)] = inst_43287);

(statearr_43336_43367[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43304 === (10))){
var inst_43258 = (state_43303[(9)]);
var inst_43256 = (state_43303[(11)]);
var inst_43263 = cljs.core._nth.call(null,inst_43256,inst_43258);
var state_43303__$1 = state_43303;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43303__$1,(13),out,inst_43263);
} else {
if((state_val_43304 === (18))){
var inst_43269 = (state_43303[(7)]);
var inst_43278 = cljs.core.first.call(null,inst_43269);
var state_43303__$1 = state_43303;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43303__$1,(20),out,inst_43278);
} else {
if((state_val_43304 === (8))){
var inst_43257 = (state_43303[(8)]);
var inst_43258 = (state_43303[(9)]);
var inst_43260 = (inst_43258 < inst_43257);
var inst_43261 = inst_43260;
var state_43303__$1 = state_43303;
if(cljs.core.truth_(inst_43261)){
var statearr_43337_43368 = state_43303__$1;
(statearr_43337_43368[(1)] = (10));

} else {
var statearr_43338_43369 = state_43303__$1;
(statearr_43338_43369[(1)] = (11));

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
});})(c__10448__auto__))
;
return ((function (switch__10427__auto__,c__10448__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__10428__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10428__auto____0 = (function (){
var statearr_43342 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43342[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10428__auto__);

(statearr_43342[(1)] = (1));

return statearr_43342;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10428__auto____1 = (function (state_43303){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_43303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e43343){if((e43343 instanceof Object)){
var ex__10431__auto__ = e43343;
var statearr_43344_43370 = state_43303;
(statearr_43344_43370[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43371 = state_43303;
state_43303 = G__43371;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10428__auto__ = function(state_43303){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10428__auto____1.call(this,state_43303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10428__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10428__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto__))
})();
var state__10450__auto__ = (function (){var statearr_43345 = f__10449__auto__.call(null);
(statearr_43345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto__);

return statearr_43345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto__))
);

return c__10448__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args43372 = [];
var len__9158__auto___43375 = arguments.length;
var i__9159__auto___43376 = (0);
while(true){
if((i__9159__auto___43376 < len__9158__auto___43375)){
args43372.push((arguments[i__9159__auto___43376]));

var G__43377 = (i__9159__auto___43376 + (1));
i__9159__auto___43376 = G__43377;
continue;
} else {
}
break;
}

var G__43374 = args43372.length;
switch (G__43374) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43372.length)].join('')));

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
var args43379 = [];
var len__9158__auto___43382 = arguments.length;
var i__9159__auto___43383 = (0);
while(true){
if((i__9159__auto___43383 < len__9158__auto___43382)){
args43379.push((arguments[i__9159__auto___43383]));

var G__43384 = (i__9159__auto___43383 + (1));
i__9159__auto___43383 = G__43384;
continue;
} else {
}
break;
}

var G__43381 = args43379.length;
switch (G__43381) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43379.length)].join('')));

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
var args43386 = [];
var len__9158__auto___43437 = arguments.length;
var i__9159__auto___43438 = (0);
while(true){
if((i__9159__auto___43438 < len__9158__auto___43437)){
args43386.push((arguments[i__9159__auto___43438]));

var G__43439 = (i__9159__auto___43438 + (1));
i__9159__auto___43438 = G__43439;
continue;
} else {
}
break;
}

var G__43388 = args43386.length;
switch (G__43388) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43386.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10448__auto___43441 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___43441,out){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___43441,out){
return (function (state_43412){
var state_val_43413 = (state_43412[(1)]);
if((state_val_43413 === (7))){
var inst_43407 = (state_43412[(2)]);
var state_43412__$1 = state_43412;
var statearr_43414_43442 = state_43412__$1;
(statearr_43414_43442[(2)] = inst_43407);

(statearr_43414_43442[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43413 === (1))){
var inst_43389 = null;
var state_43412__$1 = (function (){var statearr_43415 = state_43412;
(statearr_43415[(7)] = inst_43389);

return statearr_43415;
})();
var statearr_43416_43443 = state_43412__$1;
(statearr_43416_43443[(2)] = null);

(statearr_43416_43443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43413 === (4))){
var inst_43392 = (state_43412[(8)]);
var inst_43392__$1 = (state_43412[(2)]);
var inst_43393 = (inst_43392__$1 == null);
var inst_43394 = cljs.core.not.call(null,inst_43393);
var state_43412__$1 = (function (){var statearr_43417 = state_43412;
(statearr_43417[(8)] = inst_43392__$1);

return statearr_43417;
})();
if(inst_43394){
var statearr_43418_43444 = state_43412__$1;
(statearr_43418_43444[(1)] = (5));

} else {
var statearr_43419_43445 = state_43412__$1;
(statearr_43419_43445[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43413 === (6))){
var state_43412__$1 = state_43412;
var statearr_43420_43446 = state_43412__$1;
(statearr_43420_43446[(2)] = null);

(statearr_43420_43446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43413 === (3))){
var inst_43409 = (state_43412[(2)]);
var inst_43410 = cljs.core.async.close_BANG_.call(null,out);
var state_43412__$1 = (function (){var statearr_43421 = state_43412;
(statearr_43421[(9)] = inst_43409);

return statearr_43421;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43412__$1,inst_43410);
} else {
if((state_val_43413 === (2))){
var state_43412__$1 = state_43412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43412__$1,(4),ch);
} else {
if((state_val_43413 === (11))){
var inst_43392 = (state_43412[(8)]);
var inst_43401 = (state_43412[(2)]);
var inst_43389 = inst_43392;
var state_43412__$1 = (function (){var statearr_43422 = state_43412;
(statearr_43422[(7)] = inst_43389);

(statearr_43422[(10)] = inst_43401);

return statearr_43422;
})();
var statearr_43423_43447 = state_43412__$1;
(statearr_43423_43447[(2)] = null);

(statearr_43423_43447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43413 === (9))){
var inst_43392 = (state_43412[(8)]);
var state_43412__$1 = state_43412;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43412__$1,(11),out,inst_43392);
} else {
if((state_val_43413 === (5))){
var inst_43389 = (state_43412[(7)]);
var inst_43392 = (state_43412[(8)]);
var inst_43396 = cljs.core._EQ_.call(null,inst_43392,inst_43389);
var state_43412__$1 = state_43412;
if(inst_43396){
var statearr_43425_43448 = state_43412__$1;
(statearr_43425_43448[(1)] = (8));

} else {
var statearr_43426_43449 = state_43412__$1;
(statearr_43426_43449[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43413 === (10))){
var inst_43404 = (state_43412[(2)]);
var state_43412__$1 = state_43412;
var statearr_43427_43450 = state_43412__$1;
(statearr_43427_43450[(2)] = inst_43404);

(statearr_43427_43450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43413 === (8))){
var inst_43389 = (state_43412[(7)]);
var tmp43424 = inst_43389;
var inst_43389__$1 = tmp43424;
var state_43412__$1 = (function (){var statearr_43428 = state_43412;
(statearr_43428[(7)] = inst_43389__$1);

return statearr_43428;
})();
var statearr_43429_43451 = state_43412__$1;
(statearr_43429_43451[(2)] = null);

(statearr_43429_43451[(1)] = (2));


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
});})(c__10448__auto___43441,out))
;
return ((function (switch__10427__auto__,c__10448__auto___43441,out){
return (function() {
var cljs$core$async$state_machine__10428__auto__ = null;
var cljs$core$async$state_machine__10428__auto____0 = (function (){
var statearr_43433 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43433[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_43433[(1)] = (1));

return statearr_43433;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_43412){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_43412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e43434){if((e43434 instanceof Object)){
var ex__10431__auto__ = e43434;
var statearr_43435_43452 = state_43412;
(statearr_43435_43452[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43453 = state_43412;
state_43412 = G__43453;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_43412){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_43412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___43441,out))
})();
var state__10450__auto__ = (function (){var statearr_43436 = f__10449__auto__.call(null);
(statearr_43436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___43441);

return statearr_43436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___43441,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args43454 = [];
var len__9158__auto___43524 = arguments.length;
var i__9159__auto___43525 = (0);
while(true){
if((i__9159__auto___43525 < len__9158__auto___43524)){
args43454.push((arguments[i__9159__auto___43525]));

var G__43526 = (i__9159__auto___43525 + (1));
i__9159__auto___43525 = G__43526;
continue;
} else {
}
break;
}

var G__43456 = args43454.length;
switch (G__43456) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43454.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10448__auto___43528 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___43528,out){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___43528,out){
return (function (state_43494){
var state_val_43495 = (state_43494[(1)]);
if((state_val_43495 === (7))){
var inst_43490 = (state_43494[(2)]);
var state_43494__$1 = state_43494;
var statearr_43496_43529 = state_43494__$1;
(statearr_43496_43529[(2)] = inst_43490);

(statearr_43496_43529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43495 === (1))){
var inst_43457 = (new Array(n));
var inst_43458 = inst_43457;
var inst_43459 = (0);
var state_43494__$1 = (function (){var statearr_43497 = state_43494;
(statearr_43497[(7)] = inst_43459);

(statearr_43497[(8)] = inst_43458);

return statearr_43497;
})();
var statearr_43498_43530 = state_43494__$1;
(statearr_43498_43530[(2)] = null);

(statearr_43498_43530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43495 === (4))){
var inst_43462 = (state_43494[(9)]);
var inst_43462__$1 = (state_43494[(2)]);
var inst_43463 = (inst_43462__$1 == null);
var inst_43464 = cljs.core.not.call(null,inst_43463);
var state_43494__$1 = (function (){var statearr_43499 = state_43494;
(statearr_43499[(9)] = inst_43462__$1);

return statearr_43499;
})();
if(inst_43464){
var statearr_43500_43531 = state_43494__$1;
(statearr_43500_43531[(1)] = (5));

} else {
var statearr_43501_43532 = state_43494__$1;
(statearr_43501_43532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43495 === (15))){
var inst_43484 = (state_43494[(2)]);
var state_43494__$1 = state_43494;
var statearr_43502_43533 = state_43494__$1;
(statearr_43502_43533[(2)] = inst_43484);

(statearr_43502_43533[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43495 === (13))){
var state_43494__$1 = state_43494;
var statearr_43503_43534 = state_43494__$1;
(statearr_43503_43534[(2)] = null);

(statearr_43503_43534[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43495 === (6))){
var inst_43459 = (state_43494[(7)]);
var inst_43480 = (inst_43459 > (0));
var state_43494__$1 = state_43494;
if(cljs.core.truth_(inst_43480)){
var statearr_43504_43535 = state_43494__$1;
(statearr_43504_43535[(1)] = (12));

} else {
var statearr_43505_43536 = state_43494__$1;
(statearr_43505_43536[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43495 === (3))){
var inst_43492 = (state_43494[(2)]);
var state_43494__$1 = state_43494;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43494__$1,inst_43492);
} else {
if((state_val_43495 === (12))){
var inst_43458 = (state_43494[(8)]);
var inst_43482 = cljs.core.vec.call(null,inst_43458);
var state_43494__$1 = state_43494;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43494__$1,(15),out,inst_43482);
} else {
if((state_val_43495 === (2))){
var state_43494__$1 = state_43494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43494__$1,(4),ch);
} else {
if((state_val_43495 === (11))){
var inst_43474 = (state_43494[(2)]);
var inst_43475 = (new Array(n));
var inst_43458 = inst_43475;
var inst_43459 = (0);
var state_43494__$1 = (function (){var statearr_43506 = state_43494;
(statearr_43506[(7)] = inst_43459);

(statearr_43506[(8)] = inst_43458);

(statearr_43506[(10)] = inst_43474);

return statearr_43506;
})();
var statearr_43507_43537 = state_43494__$1;
(statearr_43507_43537[(2)] = null);

(statearr_43507_43537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43495 === (9))){
var inst_43458 = (state_43494[(8)]);
var inst_43472 = cljs.core.vec.call(null,inst_43458);
var state_43494__$1 = state_43494;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43494__$1,(11),out,inst_43472);
} else {
if((state_val_43495 === (5))){
var inst_43467 = (state_43494[(11)]);
var inst_43459 = (state_43494[(7)]);
var inst_43458 = (state_43494[(8)]);
var inst_43462 = (state_43494[(9)]);
var inst_43466 = (inst_43458[inst_43459] = inst_43462);
var inst_43467__$1 = (inst_43459 + (1));
var inst_43468 = (inst_43467__$1 < n);
var state_43494__$1 = (function (){var statearr_43508 = state_43494;
(statearr_43508[(11)] = inst_43467__$1);

(statearr_43508[(12)] = inst_43466);

return statearr_43508;
})();
if(cljs.core.truth_(inst_43468)){
var statearr_43509_43538 = state_43494__$1;
(statearr_43509_43538[(1)] = (8));

} else {
var statearr_43510_43539 = state_43494__$1;
(statearr_43510_43539[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43495 === (14))){
var inst_43487 = (state_43494[(2)]);
var inst_43488 = cljs.core.async.close_BANG_.call(null,out);
var state_43494__$1 = (function (){var statearr_43512 = state_43494;
(statearr_43512[(13)] = inst_43487);

return statearr_43512;
})();
var statearr_43513_43540 = state_43494__$1;
(statearr_43513_43540[(2)] = inst_43488);

(statearr_43513_43540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43495 === (10))){
var inst_43478 = (state_43494[(2)]);
var state_43494__$1 = state_43494;
var statearr_43514_43541 = state_43494__$1;
(statearr_43514_43541[(2)] = inst_43478);

(statearr_43514_43541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43495 === (8))){
var inst_43467 = (state_43494[(11)]);
var inst_43458 = (state_43494[(8)]);
var tmp43511 = inst_43458;
var inst_43458__$1 = tmp43511;
var inst_43459 = inst_43467;
var state_43494__$1 = (function (){var statearr_43515 = state_43494;
(statearr_43515[(7)] = inst_43459);

(statearr_43515[(8)] = inst_43458__$1);

return statearr_43515;
})();
var statearr_43516_43542 = state_43494__$1;
(statearr_43516_43542[(2)] = null);

(statearr_43516_43542[(1)] = (2));


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
});})(c__10448__auto___43528,out))
;
return ((function (switch__10427__auto__,c__10448__auto___43528,out){
return (function() {
var cljs$core$async$state_machine__10428__auto__ = null;
var cljs$core$async$state_machine__10428__auto____0 = (function (){
var statearr_43520 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43520[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_43520[(1)] = (1));

return statearr_43520;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_43494){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_43494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e43521){if((e43521 instanceof Object)){
var ex__10431__auto__ = e43521;
var statearr_43522_43543 = state_43494;
(statearr_43522_43543[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43544 = state_43494;
state_43494 = G__43544;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_43494){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_43494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___43528,out))
})();
var state__10450__auto__ = (function (){var statearr_43523 = f__10449__auto__.call(null);
(statearr_43523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___43528);

return statearr_43523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___43528,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args43545 = [];
var len__9158__auto___43619 = arguments.length;
var i__9159__auto___43620 = (0);
while(true){
if((i__9159__auto___43620 < len__9158__auto___43619)){
args43545.push((arguments[i__9159__auto___43620]));

var G__43621 = (i__9159__auto___43620 + (1));
i__9159__auto___43620 = G__43621;
continue;
} else {
}
break;
}

var G__43547 = args43545.length;
switch (G__43547) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43545.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10448__auto___43623 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___43623,out){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___43623,out){
return (function (state_43589){
var state_val_43590 = (state_43589[(1)]);
if((state_val_43590 === (7))){
var inst_43585 = (state_43589[(2)]);
var state_43589__$1 = state_43589;
var statearr_43591_43624 = state_43589__$1;
(statearr_43591_43624[(2)] = inst_43585);

(statearr_43591_43624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43590 === (1))){
var inst_43548 = [];
var inst_43549 = inst_43548;
var inst_43550 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_43589__$1 = (function (){var statearr_43592 = state_43589;
(statearr_43592[(7)] = inst_43549);

(statearr_43592[(8)] = inst_43550);

return statearr_43592;
})();
var statearr_43593_43625 = state_43589__$1;
(statearr_43593_43625[(2)] = null);

(statearr_43593_43625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43590 === (4))){
var inst_43553 = (state_43589[(9)]);
var inst_43553__$1 = (state_43589[(2)]);
var inst_43554 = (inst_43553__$1 == null);
var inst_43555 = cljs.core.not.call(null,inst_43554);
var state_43589__$1 = (function (){var statearr_43594 = state_43589;
(statearr_43594[(9)] = inst_43553__$1);

return statearr_43594;
})();
if(inst_43555){
var statearr_43595_43626 = state_43589__$1;
(statearr_43595_43626[(1)] = (5));

} else {
var statearr_43596_43627 = state_43589__$1;
(statearr_43596_43627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43590 === (15))){
var inst_43579 = (state_43589[(2)]);
var state_43589__$1 = state_43589;
var statearr_43597_43628 = state_43589__$1;
(statearr_43597_43628[(2)] = inst_43579);

(statearr_43597_43628[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43590 === (13))){
var state_43589__$1 = state_43589;
var statearr_43598_43629 = state_43589__$1;
(statearr_43598_43629[(2)] = null);

(statearr_43598_43629[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43590 === (6))){
var inst_43549 = (state_43589[(7)]);
var inst_43574 = inst_43549.length;
var inst_43575 = (inst_43574 > (0));
var state_43589__$1 = state_43589;
if(cljs.core.truth_(inst_43575)){
var statearr_43599_43630 = state_43589__$1;
(statearr_43599_43630[(1)] = (12));

} else {
var statearr_43600_43631 = state_43589__$1;
(statearr_43600_43631[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43590 === (3))){
var inst_43587 = (state_43589[(2)]);
var state_43589__$1 = state_43589;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43589__$1,inst_43587);
} else {
if((state_val_43590 === (12))){
var inst_43549 = (state_43589[(7)]);
var inst_43577 = cljs.core.vec.call(null,inst_43549);
var state_43589__$1 = state_43589;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43589__$1,(15),out,inst_43577);
} else {
if((state_val_43590 === (2))){
var state_43589__$1 = state_43589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43589__$1,(4),ch);
} else {
if((state_val_43590 === (11))){
var inst_43557 = (state_43589[(10)]);
var inst_43553 = (state_43589[(9)]);
var inst_43567 = (state_43589[(2)]);
var inst_43568 = [];
var inst_43569 = inst_43568.push(inst_43553);
var inst_43549 = inst_43568;
var inst_43550 = inst_43557;
var state_43589__$1 = (function (){var statearr_43601 = state_43589;
(statearr_43601[(7)] = inst_43549);

(statearr_43601[(8)] = inst_43550);

(statearr_43601[(11)] = inst_43567);

(statearr_43601[(12)] = inst_43569);

return statearr_43601;
})();
var statearr_43602_43632 = state_43589__$1;
(statearr_43602_43632[(2)] = null);

(statearr_43602_43632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43590 === (9))){
var inst_43549 = (state_43589[(7)]);
var inst_43565 = cljs.core.vec.call(null,inst_43549);
var state_43589__$1 = state_43589;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43589__$1,(11),out,inst_43565);
} else {
if((state_val_43590 === (5))){
var inst_43550 = (state_43589[(8)]);
var inst_43557 = (state_43589[(10)]);
var inst_43553 = (state_43589[(9)]);
var inst_43557__$1 = f.call(null,inst_43553);
var inst_43558 = cljs.core._EQ_.call(null,inst_43557__$1,inst_43550);
var inst_43559 = cljs.core.keyword_identical_QMARK_.call(null,inst_43550,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_43560 = (inst_43558) || (inst_43559);
var state_43589__$1 = (function (){var statearr_43603 = state_43589;
(statearr_43603[(10)] = inst_43557__$1);

return statearr_43603;
})();
if(cljs.core.truth_(inst_43560)){
var statearr_43604_43633 = state_43589__$1;
(statearr_43604_43633[(1)] = (8));

} else {
var statearr_43605_43634 = state_43589__$1;
(statearr_43605_43634[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43590 === (14))){
var inst_43582 = (state_43589[(2)]);
var inst_43583 = cljs.core.async.close_BANG_.call(null,out);
var state_43589__$1 = (function (){var statearr_43607 = state_43589;
(statearr_43607[(13)] = inst_43582);

return statearr_43607;
})();
var statearr_43608_43635 = state_43589__$1;
(statearr_43608_43635[(2)] = inst_43583);

(statearr_43608_43635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43590 === (10))){
var inst_43572 = (state_43589[(2)]);
var state_43589__$1 = state_43589;
var statearr_43609_43636 = state_43589__$1;
(statearr_43609_43636[(2)] = inst_43572);

(statearr_43609_43636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43590 === (8))){
var inst_43549 = (state_43589[(7)]);
var inst_43557 = (state_43589[(10)]);
var inst_43553 = (state_43589[(9)]);
var inst_43562 = inst_43549.push(inst_43553);
var tmp43606 = inst_43549;
var inst_43549__$1 = tmp43606;
var inst_43550 = inst_43557;
var state_43589__$1 = (function (){var statearr_43610 = state_43589;
(statearr_43610[(7)] = inst_43549__$1);

(statearr_43610[(8)] = inst_43550);

(statearr_43610[(14)] = inst_43562);

return statearr_43610;
})();
var statearr_43611_43637 = state_43589__$1;
(statearr_43611_43637[(2)] = null);

(statearr_43611_43637[(1)] = (2));


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
});})(c__10448__auto___43623,out))
;
return ((function (switch__10427__auto__,c__10448__auto___43623,out){
return (function() {
var cljs$core$async$state_machine__10428__auto__ = null;
var cljs$core$async$state_machine__10428__auto____0 = (function (){
var statearr_43615 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43615[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_43615[(1)] = (1));

return statearr_43615;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_43589){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_43589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e43616){if((e43616 instanceof Object)){
var ex__10431__auto__ = e43616;
var statearr_43617_43638 = state_43589;
(statearr_43617_43638[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43639 = state_43589;
state_43589 = G__43639;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_43589){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_43589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___43623,out))
})();
var state__10450__auto__ = (function (){var statearr_43618 = f__10449__auto__.call(null);
(statearr_43618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___43623);

return statearr_43618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___43623,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map