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
var args37632 = [];
var len__9158__auto___37638 = arguments.length;
var i__9159__auto___37639 = (0);
while(true){
if((i__9159__auto___37639 < len__9158__auto___37638)){
args37632.push((arguments[i__9159__auto___37639]));

var G__37640 = (i__9159__auto___37639 + (1));
i__9159__auto___37639 = G__37640;
continue;
} else {
}
break;
}

var G__37634 = args37632.length;
switch (G__37634) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37632.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async37635 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37635 = (function (f,blockable,meta37636){
this.f = f;
this.blockable = blockable;
this.meta37636 = meta37636;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37637,meta37636__$1){
var self__ = this;
var _37637__$1 = this;
return (new cljs.core.async.t_cljs$core$async37635(self__.f,self__.blockable,meta37636__$1));
});

cljs.core.async.t_cljs$core$async37635.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37637){
var self__ = this;
var _37637__$1 = this;
return self__.meta37636;
});

cljs.core.async.t_cljs$core$async37635.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async37635.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async37635.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async37635.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async37635.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta37636","meta37636",-1556963096,null)], null);
});

cljs.core.async.t_cljs$core$async37635.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37635.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37635";

cljs.core.async.t_cljs$core$async37635.cljs$lang$ctorPrWriter = (function (this__8698__auto__,writer__8699__auto__,opt__8700__auto__){
return cljs.core._write.call(null,writer__8699__auto__,"cljs.core.async/t_cljs$core$async37635");
});

cljs.core.async.__GT_t_cljs$core$async37635 = (function cljs$core$async$__GT_t_cljs$core$async37635(f__$1,blockable__$1,meta37636){
return (new cljs.core.async.t_cljs$core$async37635(f__$1,blockable__$1,meta37636));
});

}

return (new cljs.core.async.t_cljs$core$async37635(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args37644 = [];
var len__9158__auto___37647 = arguments.length;
var i__9159__auto___37648 = (0);
while(true){
if((i__9159__auto___37648 < len__9158__auto___37647)){
args37644.push((arguments[i__9159__auto___37648]));

var G__37649 = (i__9159__auto___37648 + (1));
i__9159__auto___37648 = G__37649;
continue;
} else {
}
break;
}

var G__37646 = args37644.length;
switch (G__37646) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37644.length)].join('')));

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
var args37651 = [];
var len__9158__auto___37654 = arguments.length;
var i__9159__auto___37655 = (0);
while(true){
if((i__9159__auto___37655 < len__9158__auto___37654)){
args37651.push((arguments[i__9159__auto___37655]));

var G__37656 = (i__9159__auto___37655 + (1));
i__9159__auto___37655 = G__37656;
continue;
} else {
}
break;
}

var G__37653 = args37651.length;
switch (G__37653) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37651.length)].join('')));

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
var args37658 = [];
var len__9158__auto___37661 = arguments.length;
var i__9159__auto___37662 = (0);
while(true){
if((i__9159__auto___37662 < len__9158__auto___37661)){
args37658.push((arguments[i__9159__auto___37662]));

var G__37663 = (i__9159__auto___37662 + (1));
i__9159__auto___37662 = G__37663;
continue;
} else {
}
break;
}

var G__37660 = args37658.length;
switch (G__37660) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37658.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_37665 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_37665);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_37665,ret){
return (function (){
return fn1.call(null,val_37665);
});})(val_37665,ret))
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
var args37666 = [];
var len__9158__auto___37669 = arguments.length;
var i__9159__auto___37670 = (0);
while(true){
if((i__9159__auto___37670 < len__9158__auto___37669)){
args37666.push((arguments[i__9159__auto___37670]));

var G__37671 = (i__9159__auto___37670 + (1));
i__9159__auto___37670 = G__37671;
continue;
} else {
}
break;
}

var G__37668 = args37666.length;
switch (G__37668) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37666.length)].join('')));

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
var n__9003__auto___37673 = n;
var x_37674 = (0);
while(true){
if((x_37674 < n__9003__auto___37673)){
(a[x_37674] = (0));

var G__37675 = (x_37674 + (1));
x_37674 = G__37675;
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

var G__37676 = (i + (1));
i = G__37676;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async37680 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37680 = (function (alt_flag,flag,meta37681){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta37681 = meta37681;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_37682,meta37681__$1){
var self__ = this;
var _37682__$1 = this;
return (new cljs.core.async.t_cljs$core$async37680(self__.alt_flag,self__.flag,meta37681__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async37680.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_37682){
var self__ = this;
var _37682__$1 = this;
return self__.meta37681;
});})(flag))
;

cljs.core.async.t_cljs$core$async37680.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async37680.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async37680.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37680.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37680.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta37681","meta37681",914708685,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async37680.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37680.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37680";

cljs.core.async.t_cljs$core$async37680.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8698__auto__,writer__8699__auto__,opt__8700__auto__){
return cljs.core._write.call(null,writer__8699__auto__,"cljs.core.async/t_cljs$core$async37680");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async37680 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async37680(alt_flag__$1,flag__$1,meta37681){
return (new cljs.core.async.t_cljs$core$async37680(alt_flag__$1,flag__$1,meta37681));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async37680(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async37686 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37686 = (function (alt_handler,flag,cb,meta37687){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta37687 = meta37687;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37688,meta37687__$1){
var self__ = this;
var _37688__$1 = this;
return (new cljs.core.async.t_cljs$core$async37686(self__.alt_handler,self__.flag,self__.cb,meta37687__$1));
});

cljs.core.async.t_cljs$core$async37686.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37688){
var self__ = this;
var _37688__$1 = this;
return self__.meta37687;
});

cljs.core.async.t_cljs$core$async37686.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async37686.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async37686.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async37686.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async37686.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta37687","meta37687",-351803952,null)], null);
});

cljs.core.async.t_cljs$core$async37686.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37686.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37686";

cljs.core.async.t_cljs$core$async37686.cljs$lang$ctorPrWriter = (function (this__8698__auto__,writer__8699__auto__,opt__8700__auto__){
return cljs.core._write.call(null,writer__8699__auto__,"cljs.core.async/t_cljs$core$async37686");
});

cljs.core.async.__GT_t_cljs$core$async37686 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async37686(alt_handler__$1,flag__$1,cb__$1,meta37687){
return (new cljs.core.async.t_cljs$core$async37686(alt_handler__$1,flag__$1,cb__$1,meta37687));
});

}

return (new cljs.core.async.t_cljs$core$async37686(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__37689_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37689_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37690_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37690_SHARP_,port], null));
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
var G__37691 = (i + (1));
i = G__37691;
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
var len__9158__auto___37697 = arguments.length;
var i__9159__auto___37698 = (0);
while(true){
if((i__9159__auto___37698 < len__9158__auto___37697)){
args__9165__auto__.push((arguments[i__9159__auto___37698]));

var G__37699 = (i__9159__auto___37698 + (1));
i__9159__auto___37698 = G__37699;
continue;
} else {
}
break;
}

var argseq__9166__auto__ = ((((1) < args__9165__auto__.length))?(new cljs.core.IndexedSeq(args__9165__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9166__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37694){
var map__37695 = p__37694;
var map__37695__$1 = ((((!((map__37695 == null)))?((((map__37695.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37695.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37695):map__37695);
var opts = map__37695__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37692){
var G__37693 = cljs.core.first.call(null,seq37692);
var seq37692__$1 = cljs.core.next.call(null,seq37692);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37693,seq37692__$1);
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
var args37700 = [];
var len__9158__auto___37750 = arguments.length;
var i__9159__auto___37751 = (0);
while(true){
if((i__9159__auto___37751 < len__9158__auto___37750)){
args37700.push((arguments[i__9159__auto___37751]));

var G__37752 = (i__9159__auto___37751 + (1));
i__9159__auto___37751 = G__37752;
continue;
} else {
}
break;
}

var G__37702 = args37700.length;
switch (G__37702) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37700.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10448__auto___37754 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___37754){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___37754){
return (function (state_37726){
var state_val_37727 = (state_37726[(1)]);
if((state_val_37727 === (7))){
var inst_37722 = (state_37726[(2)]);
var state_37726__$1 = state_37726;
var statearr_37728_37755 = state_37726__$1;
(statearr_37728_37755[(2)] = inst_37722);

(statearr_37728_37755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37727 === (1))){
var state_37726__$1 = state_37726;
var statearr_37729_37756 = state_37726__$1;
(statearr_37729_37756[(2)] = null);

(statearr_37729_37756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37727 === (4))){
var inst_37705 = (state_37726[(7)]);
var inst_37705__$1 = (state_37726[(2)]);
var inst_37706 = (inst_37705__$1 == null);
var state_37726__$1 = (function (){var statearr_37730 = state_37726;
(statearr_37730[(7)] = inst_37705__$1);

return statearr_37730;
})();
if(cljs.core.truth_(inst_37706)){
var statearr_37731_37757 = state_37726__$1;
(statearr_37731_37757[(1)] = (5));

} else {
var statearr_37732_37758 = state_37726__$1;
(statearr_37732_37758[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37727 === (13))){
var state_37726__$1 = state_37726;
var statearr_37733_37759 = state_37726__$1;
(statearr_37733_37759[(2)] = null);

(statearr_37733_37759[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37727 === (6))){
var inst_37705 = (state_37726[(7)]);
var state_37726__$1 = state_37726;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37726__$1,(11),to,inst_37705);
} else {
if((state_val_37727 === (3))){
var inst_37724 = (state_37726[(2)]);
var state_37726__$1 = state_37726;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37726__$1,inst_37724);
} else {
if((state_val_37727 === (12))){
var state_37726__$1 = state_37726;
var statearr_37734_37760 = state_37726__$1;
(statearr_37734_37760[(2)] = null);

(statearr_37734_37760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37727 === (2))){
var state_37726__$1 = state_37726;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37726__$1,(4),from);
} else {
if((state_val_37727 === (11))){
var inst_37715 = (state_37726[(2)]);
var state_37726__$1 = state_37726;
if(cljs.core.truth_(inst_37715)){
var statearr_37735_37761 = state_37726__$1;
(statearr_37735_37761[(1)] = (12));

} else {
var statearr_37736_37762 = state_37726__$1;
(statearr_37736_37762[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37727 === (9))){
var state_37726__$1 = state_37726;
var statearr_37737_37763 = state_37726__$1;
(statearr_37737_37763[(2)] = null);

(statearr_37737_37763[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37727 === (5))){
var state_37726__$1 = state_37726;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37738_37764 = state_37726__$1;
(statearr_37738_37764[(1)] = (8));

} else {
var statearr_37739_37765 = state_37726__$1;
(statearr_37739_37765[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37727 === (14))){
var inst_37720 = (state_37726[(2)]);
var state_37726__$1 = state_37726;
var statearr_37740_37766 = state_37726__$1;
(statearr_37740_37766[(2)] = inst_37720);

(statearr_37740_37766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37727 === (10))){
var inst_37712 = (state_37726[(2)]);
var state_37726__$1 = state_37726;
var statearr_37741_37767 = state_37726__$1;
(statearr_37741_37767[(2)] = inst_37712);

(statearr_37741_37767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37727 === (8))){
var inst_37709 = cljs.core.async.close_BANG_.call(null,to);
var state_37726__$1 = state_37726;
var statearr_37742_37768 = state_37726__$1;
(statearr_37742_37768[(2)] = inst_37709);

(statearr_37742_37768[(1)] = (10));


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
});})(c__10448__auto___37754))
;
return ((function (switch__10427__auto__,c__10448__auto___37754){
return (function() {
var cljs$core$async$state_machine__10428__auto__ = null;
var cljs$core$async$state_machine__10428__auto____0 = (function (){
var statearr_37746 = [null,null,null,null,null,null,null,null];
(statearr_37746[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_37746[(1)] = (1));

return statearr_37746;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_37726){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_37726);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e37747){if((e37747 instanceof Object)){
var ex__10431__auto__ = e37747;
var statearr_37748_37769 = state_37726;
(statearr_37748_37769[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37747;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37770 = state_37726;
state_37726 = G__37770;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_37726){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_37726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___37754))
})();
var state__10450__auto__ = (function (){var statearr_37749 = f__10449__auto__.call(null);
(statearr_37749[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___37754);

return statearr_37749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___37754))
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
return (function (p__37954){
var vec__37955 = p__37954;
var v = cljs.core.nth.call(null,vec__37955,(0),null);
var p = cljs.core.nth.call(null,vec__37955,(1),null);
var job = vec__37955;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__10448__auto___38137 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___38137,res,vec__37955,v,p,job,jobs,results){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___38137,res,vec__37955,v,p,job,jobs,results){
return (function (state_37960){
var state_val_37961 = (state_37960[(1)]);
if((state_val_37961 === (1))){
var state_37960__$1 = state_37960;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37960__$1,(2),res,v);
} else {
if((state_val_37961 === (2))){
var inst_37957 = (state_37960[(2)]);
var inst_37958 = cljs.core.async.close_BANG_.call(null,res);
var state_37960__$1 = (function (){var statearr_37962 = state_37960;
(statearr_37962[(7)] = inst_37957);

return statearr_37962;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37960__$1,inst_37958);
} else {
return null;
}
}
});})(c__10448__auto___38137,res,vec__37955,v,p,job,jobs,results))
;
return ((function (switch__10427__auto__,c__10448__auto___38137,res,vec__37955,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0 = (function (){
var statearr_37966 = [null,null,null,null,null,null,null,null];
(statearr_37966[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__);

(statearr_37966[(1)] = (1));

return statearr_37966;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1 = (function (state_37960){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_37960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e37967){if((e37967 instanceof Object)){
var ex__10431__auto__ = e37967;
var statearr_37968_38138 = state_37960;
(statearr_37968_38138[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38139 = state_37960;
state_37960 = G__38139;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__ = function(state_37960){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1.call(this,state_37960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___38137,res,vec__37955,v,p,job,jobs,results))
})();
var state__10450__auto__ = (function (){var statearr_37969 = f__10449__auto__.call(null);
(statearr_37969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___38137);

return statearr_37969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___38137,res,vec__37955,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__37970){
var vec__37971 = p__37970;
var v = cljs.core.nth.call(null,vec__37971,(0),null);
var p = cljs.core.nth.call(null,vec__37971,(1),null);
var job = vec__37971;
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
var n__9003__auto___38140 = n;
var __38141 = (0);
while(true){
if((__38141 < n__9003__auto___38140)){
var G__37972_38142 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__37972_38142) {
case "compute":
var c__10448__auto___38144 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38141,c__10448__auto___38144,G__37972_38142,n__9003__auto___38140,jobs,results,process,async){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (__38141,c__10448__auto___38144,G__37972_38142,n__9003__auto___38140,jobs,results,process,async){
return (function (state_37985){
var state_val_37986 = (state_37985[(1)]);
if((state_val_37986 === (1))){
var state_37985__$1 = state_37985;
var statearr_37987_38145 = state_37985__$1;
(statearr_37987_38145[(2)] = null);

(statearr_37987_38145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37986 === (2))){
var state_37985__$1 = state_37985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37985__$1,(4),jobs);
} else {
if((state_val_37986 === (3))){
var inst_37983 = (state_37985[(2)]);
var state_37985__$1 = state_37985;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37985__$1,inst_37983);
} else {
if((state_val_37986 === (4))){
var inst_37975 = (state_37985[(2)]);
var inst_37976 = process.call(null,inst_37975);
var state_37985__$1 = state_37985;
if(cljs.core.truth_(inst_37976)){
var statearr_37988_38146 = state_37985__$1;
(statearr_37988_38146[(1)] = (5));

} else {
var statearr_37989_38147 = state_37985__$1;
(statearr_37989_38147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37986 === (5))){
var state_37985__$1 = state_37985;
var statearr_37990_38148 = state_37985__$1;
(statearr_37990_38148[(2)] = null);

(statearr_37990_38148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37986 === (6))){
var state_37985__$1 = state_37985;
var statearr_37991_38149 = state_37985__$1;
(statearr_37991_38149[(2)] = null);

(statearr_37991_38149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37986 === (7))){
var inst_37981 = (state_37985[(2)]);
var state_37985__$1 = state_37985;
var statearr_37992_38150 = state_37985__$1;
(statearr_37992_38150[(2)] = inst_37981);

(statearr_37992_38150[(1)] = (3));


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
});})(__38141,c__10448__auto___38144,G__37972_38142,n__9003__auto___38140,jobs,results,process,async))
;
return ((function (__38141,switch__10427__auto__,c__10448__auto___38144,G__37972_38142,n__9003__auto___38140,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0 = (function (){
var statearr_37996 = [null,null,null,null,null,null,null];
(statearr_37996[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__);

(statearr_37996[(1)] = (1));

return statearr_37996;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1 = (function (state_37985){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_37985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e37997){if((e37997 instanceof Object)){
var ex__10431__auto__ = e37997;
var statearr_37998_38151 = state_37985;
(statearr_37998_38151[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38152 = state_37985;
state_37985 = G__38152;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__ = function(state_37985){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1.call(this,state_37985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__;
})()
;})(__38141,switch__10427__auto__,c__10448__auto___38144,G__37972_38142,n__9003__auto___38140,jobs,results,process,async))
})();
var state__10450__auto__ = (function (){var statearr_37999 = f__10449__auto__.call(null);
(statearr_37999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___38144);

return statearr_37999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(__38141,c__10448__auto___38144,G__37972_38142,n__9003__auto___38140,jobs,results,process,async))
);


break;
case "async":
var c__10448__auto___38153 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38141,c__10448__auto___38153,G__37972_38142,n__9003__auto___38140,jobs,results,process,async){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (__38141,c__10448__auto___38153,G__37972_38142,n__9003__auto___38140,jobs,results,process,async){
return (function (state_38012){
var state_val_38013 = (state_38012[(1)]);
if((state_val_38013 === (1))){
var state_38012__$1 = state_38012;
var statearr_38014_38154 = state_38012__$1;
(statearr_38014_38154[(2)] = null);

(statearr_38014_38154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38013 === (2))){
var state_38012__$1 = state_38012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38012__$1,(4),jobs);
} else {
if((state_val_38013 === (3))){
var inst_38010 = (state_38012[(2)]);
var state_38012__$1 = state_38012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38012__$1,inst_38010);
} else {
if((state_val_38013 === (4))){
var inst_38002 = (state_38012[(2)]);
var inst_38003 = async.call(null,inst_38002);
var state_38012__$1 = state_38012;
if(cljs.core.truth_(inst_38003)){
var statearr_38015_38155 = state_38012__$1;
(statearr_38015_38155[(1)] = (5));

} else {
var statearr_38016_38156 = state_38012__$1;
(statearr_38016_38156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38013 === (5))){
var state_38012__$1 = state_38012;
var statearr_38017_38157 = state_38012__$1;
(statearr_38017_38157[(2)] = null);

(statearr_38017_38157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38013 === (6))){
var state_38012__$1 = state_38012;
var statearr_38018_38158 = state_38012__$1;
(statearr_38018_38158[(2)] = null);

(statearr_38018_38158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38013 === (7))){
var inst_38008 = (state_38012[(2)]);
var state_38012__$1 = state_38012;
var statearr_38019_38159 = state_38012__$1;
(statearr_38019_38159[(2)] = inst_38008);

(statearr_38019_38159[(1)] = (3));


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
});})(__38141,c__10448__auto___38153,G__37972_38142,n__9003__auto___38140,jobs,results,process,async))
;
return ((function (__38141,switch__10427__auto__,c__10448__auto___38153,G__37972_38142,n__9003__auto___38140,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0 = (function (){
var statearr_38023 = [null,null,null,null,null,null,null];
(statearr_38023[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__);

(statearr_38023[(1)] = (1));

return statearr_38023;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1 = (function (state_38012){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_38012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e38024){if((e38024 instanceof Object)){
var ex__10431__auto__ = e38024;
var statearr_38025_38160 = state_38012;
(statearr_38025_38160[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38161 = state_38012;
state_38012 = G__38161;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__ = function(state_38012){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1.call(this,state_38012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__;
})()
;})(__38141,switch__10427__auto__,c__10448__auto___38153,G__37972_38142,n__9003__auto___38140,jobs,results,process,async))
})();
var state__10450__auto__ = (function (){var statearr_38026 = f__10449__auto__.call(null);
(statearr_38026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___38153);

return statearr_38026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(__38141,c__10448__auto___38153,G__37972_38142,n__9003__auto___38140,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__38162 = (__38141 + (1));
__38141 = G__38162;
continue;
} else {
}
break;
}

var c__10448__auto___38163 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___38163,jobs,results,process,async){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___38163,jobs,results,process,async){
return (function (state_38048){
var state_val_38049 = (state_38048[(1)]);
if((state_val_38049 === (1))){
var state_38048__$1 = state_38048;
var statearr_38050_38164 = state_38048__$1;
(statearr_38050_38164[(2)] = null);

(statearr_38050_38164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38049 === (2))){
var state_38048__$1 = state_38048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38048__$1,(4),from);
} else {
if((state_val_38049 === (3))){
var inst_38046 = (state_38048[(2)]);
var state_38048__$1 = state_38048;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38048__$1,inst_38046);
} else {
if((state_val_38049 === (4))){
var inst_38029 = (state_38048[(7)]);
var inst_38029__$1 = (state_38048[(2)]);
var inst_38030 = (inst_38029__$1 == null);
var state_38048__$1 = (function (){var statearr_38051 = state_38048;
(statearr_38051[(7)] = inst_38029__$1);

return statearr_38051;
})();
if(cljs.core.truth_(inst_38030)){
var statearr_38052_38165 = state_38048__$1;
(statearr_38052_38165[(1)] = (5));

} else {
var statearr_38053_38166 = state_38048__$1;
(statearr_38053_38166[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38049 === (5))){
var inst_38032 = cljs.core.async.close_BANG_.call(null,jobs);
var state_38048__$1 = state_38048;
var statearr_38054_38167 = state_38048__$1;
(statearr_38054_38167[(2)] = inst_38032);

(statearr_38054_38167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38049 === (6))){
var inst_38029 = (state_38048[(7)]);
var inst_38034 = (state_38048[(8)]);
var inst_38034__$1 = cljs.core.async.chan.call(null,(1));
var inst_38035 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38036 = [inst_38029,inst_38034__$1];
var inst_38037 = (new cljs.core.PersistentVector(null,2,(5),inst_38035,inst_38036,null));
var state_38048__$1 = (function (){var statearr_38055 = state_38048;
(statearr_38055[(8)] = inst_38034__$1);

return statearr_38055;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38048__$1,(8),jobs,inst_38037);
} else {
if((state_val_38049 === (7))){
var inst_38044 = (state_38048[(2)]);
var state_38048__$1 = state_38048;
var statearr_38056_38168 = state_38048__$1;
(statearr_38056_38168[(2)] = inst_38044);

(statearr_38056_38168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38049 === (8))){
var inst_38034 = (state_38048[(8)]);
var inst_38039 = (state_38048[(2)]);
var state_38048__$1 = (function (){var statearr_38057 = state_38048;
(statearr_38057[(9)] = inst_38039);

return statearr_38057;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38048__$1,(9),results,inst_38034);
} else {
if((state_val_38049 === (9))){
var inst_38041 = (state_38048[(2)]);
var state_38048__$1 = (function (){var statearr_38058 = state_38048;
(statearr_38058[(10)] = inst_38041);

return statearr_38058;
})();
var statearr_38059_38169 = state_38048__$1;
(statearr_38059_38169[(2)] = null);

(statearr_38059_38169[(1)] = (2));


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
});})(c__10448__auto___38163,jobs,results,process,async))
;
return ((function (switch__10427__auto__,c__10448__auto___38163,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0 = (function (){
var statearr_38063 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38063[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__);

(statearr_38063[(1)] = (1));

return statearr_38063;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1 = (function (state_38048){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_38048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e38064){if((e38064 instanceof Object)){
var ex__10431__auto__ = e38064;
var statearr_38065_38170 = state_38048;
(statearr_38065_38170[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38171 = state_38048;
state_38048 = G__38171;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__ = function(state_38048){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1.call(this,state_38048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___38163,jobs,results,process,async))
})();
var state__10450__auto__ = (function (){var statearr_38066 = f__10449__auto__.call(null);
(statearr_38066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___38163);

return statearr_38066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___38163,jobs,results,process,async))
);


var c__10448__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto__,jobs,results,process,async){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto__,jobs,results,process,async){
return (function (state_38104){
var state_val_38105 = (state_38104[(1)]);
if((state_val_38105 === (7))){
var inst_38100 = (state_38104[(2)]);
var state_38104__$1 = state_38104;
var statearr_38106_38172 = state_38104__$1;
(statearr_38106_38172[(2)] = inst_38100);

(statearr_38106_38172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38105 === (20))){
var state_38104__$1 = state_38104;
var statearr_38107_38173 = state_38104__$1;
(statearr_38107_38173[(2)] = null);

(statearr_38107_38173[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38105 === (1))){
var state_38104__$1 = state_38104;
var statearr_38108_38174 = state_38104__$1;
(statearr_38108_38174[(2)] = null);

(statearr_38108_38174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38105 === (4))){
var inst_38069 = (state_38104[(7)]);
var inst_38069__$1 = (state_38104[(2)]);
var inst_38070 = (inst_38069__$1 == null);
var state_38104__$1 = (function (){var statearr_38109 = state_38104;
(statearr_38109[(7)] = inst_38069__$1);

return statearr_38109;
})();
if(cljs.core.truth_(inst_38070)){
var statearr_38110_38175 = state_38104__$1;
(statearr_38110_38175[(1)] = (5));

} else {
var statearr_38111_38176 = state_38104__$1;
(statearr_38111_38176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38105 === (15))){
var inst_38082 = (state_38104[(8)]);
var state_38104__$1 = state_38104;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38104__$1,(18),to,inst_38082);
} else {
if((state_val_38105 === (21))){
var inst_38095 = (state_38104[(2)]);
var state_38104__$1 = state_38104;
var statearr_38112_38177 = state_38104__$1;
(statearr_38112_38177[(2)] = inst_38095);

(statearr_38112_38177[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38105 === (13))){
var inst_38097 = (state_38104[(2)]);
var state_38104__$1 = (function (){var statearr_38113 = state_38104;
(statearr_38113[(9)] = inst_38097);

return statearr_38113;
})();
var statearr_38114_38178 = state_38104__$1;
(statearr_38114_38178[(2)] = null);

(statearr_38114_38178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38105 === (6))){
var inst_38069 = (state_38104[(7)]);
var state_38104__$1 = state_38104;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38104__$1,(11),inst_38069);
} else {
if((state_val_38105 === (17))){
var inst_38090 = (state_38104[(2)]);
var state_38104__$1 = state_38104;
if(cljs.core.truth_(inst_38090)){
var statearr_38115_38179 = state_38104__$1;
(statearr_38115_38179[(1)] = (19));

} else {
var statearr_38116_38180 = state_38104__$1;
(statearr_38116_38180[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38105 === (3))){
var inst_38102 = (state_38104[(2)]);
var state_38104__$1 = state_38104;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38104__$1,inst_38102);
} else {
if((state_val_38105 === (12))){
var inst_38079 = (state_38104[(10)]);
var state_38104__$1 = state_38104;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38104__$1,(14),inst_38079);
} else {
if((state_val_38105 === (2))){
var state_38104__$1 = state_38104;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38104__$1,(4),results);
} else {
if((state_val_38105 === (19))){
var state_38104__$1 = state_38104;
var statearr_38117_38181 = state_38104__$1;
(statearr_38117_38181[(2)] = null);

(statearr_38117_38181[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38105 === (11))){
var inst_38079 = (state_38104[(2)]);
var state_38104__$1 = (function (){var statearr_38118 = state_38104;
(statearr_38118[(10)] = inst_38079);

return statearr_38118;
})();
var statearr_38119_38182 = state_38104__$1;
(statearr_38119_38182[(2)] = null);

(statearr_38119_38182[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38105 === (9))){
var state_38104__$1 = state_38104;
var statearr_38120_38183 = state_38104__$1;
(statearr_38120_38183[(2)] = null);

(statearr_38120_38183[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38105 === (5))){
var state_38104__$1 = state_38104;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38121_38184 = state_38104__$1;
(statearr_38121_38184[(1)] = (8));

} else {
var statearr_38122_38185 = state_38104__$1;
(statearr_38122_38185[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38105 === (14))){
var inst_38082 = (state_38104[(8)]);
var inst_38084 = (state_38104[(11)]);
var inst_38082__$1 = (state_38104[(2)]);
var inst_38083 = (inst_38082__$1 == null);
var inst_38084__$1 = cljs.core.not.call(null,inst_38083);
var state_38104__$1 = (function (){var statearr_38123 = state_38104;
(statearr_38123[(8)] = inst_38082__$1);

(statearr_38123[(11)] = inst_38084__$1);

return statearr_38123;
})();
if(inst_38084__$1){
var statearr_38124_38186 = state_38104__$1;
(statearr_38124_38186[(1)] = (15));

} else {
var statearr_38125_38187 = state_38104__$1;
(statearr_38125_38187[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38105 === (16))){
var inst_38084 = (state_38104[(11)]);
var state_38104__$1 = state_38104;
var statearr_38126_38188 = state_38104__$1;
(statearr_38126_38188[(2)] = inst_38084);

(statearr_38126_38188[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38105 === (10))){
var inst_38076 = (state_38104[(2)]);
var state_38104__$1 = state_38104;
var statearr_38127_38189 = state_38104__$1;
(statearr_38127_38189[(2)] = inst_38076);

(statearr_38127_38189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38105 === (18))){
var inst_38087 = (state_38104[(2)]);
var state_38104__$1 = state_38104;
var statearr_38128_38190 = state_38104__$1;
(statearr_38128_38190[(2)] = inst_38087);

(statearr_38128_38190[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38105 === (8))){
var inst_38073 = cljs.core.async.close_BANG_.call(null,to);
var state_38104__$1 = state_38104;
var statearr_38129_38191 = state_38104__$1;
(statearr_38129_38191[(2)] = inst_38073);

(statearr_38129_38191[(1)] = (10));


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
var statearr_38133 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38133[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__);

(statearr_38133[(1)] = (1));

return statearr_38133;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1 = (function (state_38104){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_38104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e38134){if((e38134 instanceof Object)){
var ex__10431__auto__ = e38134;
var statearr_38135_38192 = state_38104;
(statearr_38135_38192[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38193 = state_38104;
state_38104 = G__38193;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__ = function(state_38104){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1.call(this,state_38104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto__,jobs,results,process,async))
})();
var state__10450__auto__ = (function (){var statearr_38136 = f__10449__auto__.call(null);
(statearr_38136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto__);

return statearr_38136;
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
var args38194 = [];
var len__9158__auto___38197 = arguments.length;
var i__9159__auto___38198 = (0);
while(true){
if((i__9159__auto___38198 < len__9158__auto___38197)){
args38194.push((arguments[i__9159__auto___38198]));

var G__38199 = (i__9159__auto___38198 + (1));
i__9159__auto___38198 = G__38199;
continue;
} else {
}
break;
}

var G__38196 = args38194.length;
switch (G__38196) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38194.length)].join('')));

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
var args38201 = [];
var len__9158__auto___38204 = arguments.length;
var i__9159__auto___38205 = (0);
while(true){
if((i__9159__auto___38205 < len__9158__auto___38204)){
args38201.push((arguments[i__9159__auto___38205]));

var G__38206 = (i__9159__auto___38205 + (1));
i__9159__auto___38205 = G__38206;
continue;
} else {
}
break;
}

var G__38203 = args38201.length;
switch (G__38203) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38201.length)].join('')));

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
var args38208 = [];
var len__9158__auto___38261 = arguments.length;
var i__9159__auto___38262 = (0);
while(true){
if((i__9159__auto___38262 < len__9158__auto___38261)){
args38208.push((arguments[i__9159__auto___38262]));

var G__38263 = (i__9159__auto___38262 + (1));
i__9159__auto___38262 = G__38263;
continue;
} else {
}
break;
}

var G__38210 = args38208.length;
switch (G__38210) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38208.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__10448__auto___38265 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___38265,tc,fc){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___38265,tc,fc){
return (function (state_38236){
var state_val_38237 = (state_38236[(1)]);
if((state_val_38237 === (7))){
var inst_38232 = (state_38236[(2)]);
var state_38236__$1 = state_38236;
var statearr_38238_38266 = state_38236__$1;
(statearr_38238_38266[(2)] = inst_38232);

(statearr_38238_38266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38237 === (1))){
var state_38236__$1 = state_38236;
var statearr_38239_38267 = state_38236__$1;
(statearr_38239_38267[(2)] = null);

(statearr_38239_38267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38237 === (4))){
var inst_38213 = (state_38236[(7)]);
var inst_38213__$1 = (state_38236[(2)]);
var inst_38214 = (inst_38213__$1 == null);
var state_38236__$1 = (function (){var statearr_38240 = state_38236;
(statearr_38240[(7)] = inst_38213__$1);

return statearr_38240;
})();
if(cljs.core.truth_(inst_38214)){
var statearr_38241_38268 = state_38236__$1;
(statearr_38241_38268[(1)] = (5));

} else {
var statearr_38242_38269 = state_38236__$1;
(statearr_38242_38269[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38237 === (13))){
var state_38236__$1 = state_38236;
var statearr_38243_38270 = state_38236__$1;
(statearr_38243_38270[(2)] = null);

(statearr_38243_38270[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38237 === (6))){
var inst_38213 = (state_38236[(7)]);
var inst_38219 = p.call(null,inst_38213);
var state_38236__$1 = state_38236;
if(cljs.core.truth_(inst_38219)){
var statearr_38244_38271 = state_38236__$1;
(statearr_38244_38271[(1)] = (9));

} else {
var statearr_38245_38272 = state_38236__$1;
(statearr_38245_38272[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38237 === (3))){
var inst_38234 = (state_38236[(2)]);
var state_38236__$1 = state_38236;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38236__$1,inst_38234);
} else {
if((state_val_38237 === (12))){
var state_38236__$1 = state_38236;
var statearr_38246_38273 = state_38236__$1;
(statearr_38246_38273[(2)] = null);

(statearr_38246_38273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38237 === (2))){
var state_38236__$1 = state_38236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38236__$1,(4),ch);
} else {
if((state_val_38237 === (11))){
var inst_38213 = (state_38236[(7)]);
var inst_38223 = (state_38236[(2)]);
var state_38236__$1 = state_38236;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38236__$1,(8),inst_38223,inst_38213);
} else {
if((state_val_38237 === (9))){
var state_38236__$1 = state_38236;
var statearr_38247_38274 = state_38236__$1;
(statearr_38247_38274[(2)] = tc);

(statearr_38247_38274[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38237 === (5))){
var inst_38216 = cljs.core.async.close_BANG_.call(null,tc);
var inst_38217 = cljs.core.async.close_BANG_.call(null,fc);
var state_38236__$1 = (function (){var statearr_38248 = state_38236;
(statearr_38248[(8)] = inst_38216);

return statearr_38248;
})();
var statearr_38249_38275 = state_38236__$1;
(statearr_38249_38275[(2)] = inst_38217);

(statearr_38249_38275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38237 === (14))){
var inst_38230 = (state_38236[(2)]);
var state_38236__$1 = state_38236;
var statearr_38250_38276 = state_38236__$1;
(statearr_38250_38276[(2)] = inst_38230);

(statearr_38250_38276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38237 === (10))){
var state_38236__$1 = state_38236;
var statearr_38251_38277 = state_38236__$1;
(statearr_38251_38277[(2)] = fc);

(statearr_38251_38277[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38237 === (8))){
var inst_38225 = (state_38236[(2)]);
var state_38236__$1 = state_38236;
if(cljs.core.truth_(inst_38225)){
var statearr_38252_38278 = state_38236__$1;
(statearr_38252_38278[(1)] = (12));

} else {
var statearr_38253_38279 = state_38236__$1;
(statearr_38253_38279[(1)] = (13));

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
});})(c__10448__auto___38265,tc,fc))
;
return ((function (switch__10427__auto__,c__10448__auto___38265,tc,fc){
return (function() {
var cljs$core$async$state_machine__10428__auto__ = null;
var cljs$core$async$state_machine__10428__auto____0 = (function (){
var statearr_38257 = [null,null,null,null,null,null,null,null,null];
(statearr_38257[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_38257[(1)] = (1));

return statearr_38257;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_38236){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_38236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e38258){if((e38258 instanceof Object)){
var ex__10431__auto__ = e38258;
var statearr_38259_38280 = state_38236;
(statearr_38259_38280[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38281 = state_38236;
state_38236 = G__38281;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_38236){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_38236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___38265,tc,fc))
})();
var state__10450__auto__ = (function (){var statearr_38260 = f__10449__auto__.call(null);
(statearr_38260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___38265);

return statearr_38260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___38265,tc,fc))
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
return (function (state_38345){
var state_val_38346 = (state_38345[(1)]);
if((state_val_38346 === (7))){
var inst_38341 = (state_38345[(2)]);
var state_38345__$1 = state_38345;
var statearr_38347_38368 = state_38345__$1;
(statearr_38347_38368[(2)] = inst_38341);

(statearr_38347_38368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38346 === (1))){
var inst_38325 = init;
var state_38345__$1 = (function (){var statearr_38348 = state_38345;
(statearr_38348[(7)] = inst_38325);

return statearr_38348;
})();
var statearr_38349_38369 = state_38345__$1;
(statearr_38349_38369[(2)] = null);

(statearr_38349_38369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38346 === (4))){
var inst_38328 = (state_38345[(8)]);
var inst_38328__$1 = (state_38345[(2)]);
var inst_38329 = (inst_38328__$1 == null);
var state_38345__$1 = (function (){var statearr_38350 = state_38345;
(statearr_38350[(8)] = inst_38328__$1);

return statearr_38350;
})();
if(cljs.core.truth_(inst_38329)){
var statearr_38351_38370 = state_38345__$1;
(statearr_38351_38370[(1)] = (5));

} else {
var statearr_38352_38371 = state_38345__$1;
(statearr_38352_38371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38346 === (6))){
var inst_38328 = (state_38345[(8)]);
var inst_38332 = (state_38345[(9)]);
var inst_38325 = (state_38345[(7)]);
var inst_38332__$1 = f.call(null,inst_38325,inst_38328);
var inst_38333 = cljs.core.reduced_QMARK_.call(null,inst_38332__$1);
var state_38345__$1 = (function (){var statearr_38353 = state_38345;
(statearr_38353[(9)] = inst_38332__$1);

return statearr_38353;
})();
if(inst_38333){
var statearr_38354_38372 = state_38345__$1;
(statearr_38354_38372[(1)] = (8));

} else {
var statearr_38355_38373 = state_38345__$1;
(statearr_38355_38373[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38346 === (3))){
var inst_38343 = (state_38345[(2)]);
var state_38345__$1 = state_38345;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38345__$1,inst_38343);
} else {
if((state_val_38346 === (2))){
var state_38345__$1 = state_38345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38345__$1,(4),ch);
} else {
if((state_val_38346 === (9))){
var inst_38332 = (state_38345[(9)]);
var inst_38325 = inst_38332;
var state_38345__$1 = (function (){var statearr_38356 = state_38345;
(statearr_38356[(7)] = inst_38325);

return statearr_38356;
})();
var statearr_38357_38374 = state_38345__$1;
(statearr_38357_38374[(2)] = null);

(statearr_38357_38374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38346 === (5))){
var inst_38325 = (state_38345[(7)]);
var state_38345__$1 = state_38345;
var statearr_38358_38375 = state_38345__$1;
(statearr_38358_38375[(2)] = inst_38325);

(statearr_38358_38375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38346 === (10))){
var inst_38339 = (state_38345[(2)]);
var state_38345__$1 = state_38345;
var statearr_38359_38376 = state_38345__$1;
(statearr_38359_38376[(2)] = inst_38339);

(statearr_38359_38376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38346 === (8))){
var inst_38332 = (state_38345[(9)]);
var inst_38335 = cljs.core.deref.call(null,inst_38332);
var state_38345__$1 = state_38345;
var statearr_38360_38377 = state_38345__$1;
(statearr_38360_38377[(2)] = inst_38335);

(statearr_38360_38377[(1)] = (10));


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
var statearr_38364 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38364[(0)] = cljs$core$async$reduce_$_state_machine__10428__auto__);

(statearr_38364[(1)] = (1));

return statearr_38364;
});
var cljs$core$async$reduce_$_state_machine__10428__auto____1 = (function (state_38345){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_38345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e38365){if((e38365 instanceof Object)){
var ex__10431__auto__ = e38365;
var statearr_38366_38378 = state_38345;
(statearr_38366_38378[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38379 = state_38345;
state_38345 = G__38379;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10428__auto__ = function(state_38345){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10428__auto____1.call(this,state_38345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10428__auto____0;
cljs$core$async$reduce_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10428__auto____1;
return cljs$core$async$reduce_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto__))
})();
var state__10450__auto__ = (function (){var statearr_38367 = f__10449__auto__.call(null);
(statearr_38367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto__);

return statearr_38367;
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
var args38380 = [];
var len__9158__auto___38432 = arguments.length;
var i__9159__auto___38433 = (0);
while(true){
if((i__9159__auto___38433 < len__9158__auto___38432)){
args38380.push((arguments[i__9159__auto___38433]));

var G__38434 = (i__9159__auto___38433 + (1));
i__9159__auto___38433 = G__38434;
continue;
} else {
}
break;
}

var G__38382 = args38380.length;
switch (G__38382) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38380.length)].join('')));

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
return (function (state_38407){
var state_val_38408 = (state_38407[(1)]);
if((state_val_38408 === (7))){
var inst_38389 = (state_38407[(2)]);
var state_38407__$1 = state_38407;
var statearr_38409_38436 = state_38407__$1;
(statearr_38409_38436[(2)] = inst_38389);

(statearr_38409_38436[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38408 === (1))){
var inst_38383 = cljs.core.seq.call(null,coll);
var inst_38384 = inst_38383;
var state_38407__$1 = (function (){var statearr_38410 = state_38407;
(statearr_38410[(7)] = inst_38384);

return statearr_38410;
})();
var statearr_38411_38437 = state_38407__$1;
(statearr_38411_38437[(2)] = null);

(statearr_38411_38437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38408 === (4))){
var inst_38384 = (state_38407[(7)]);
var inst_38387 = cljs.core.first.call(null,inst_38384);
var state_38407__$1 = state_38407;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38407__$1,(7),ch,inst_38387);
} else {
if((state_val_38408 === (13))){
var inst_38401 = (state_38407[(2)]);
var state_38407__$1 = state_38407;
var statearr_38412_38438 = state_38407__$1;
(statearr_38412_38438[(2)] = inst_38401);

(statearr_38412_38438[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38408 === (6))){
var inst_38392 = (state_38407[(2)]);
var state_38407__$1 = state_38407;
if(cljs.core.truth_(inst_38392)){
var statearr_38413_38439 = state_38407__$1;
(statearr_38413_38439[(1)] = (8));

} else {
var statearr_38414_38440 = state_38407__$1;
(statearr_38414_38440[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38408 === (3))){
var inst_38405 = (state_38407[(2)]);
var state_38407__$1 = state_38407;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38407__$1,inst_38405);
} else {
if((state_val_38408 === (12))){
var state_38407__$1 = state_38407;
var statearr_38415_38441 = state_38407__$1;
(statearr_38415_38441[(2)] = null);

(statearr_38415_38441[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38408 === (2))){
var inst_38384 = (state_38407[(7)]);
var state_38407__$1 = state_38407;
if(cljs.core.truth_(inst_38384)){
var statearr_38416_38442 = state_38407__$1;
(statearr_38416_38442[(1)] = (4));

} else {
var statearr_38417_38443 = state_38407__$1;
(statearr_38417_38443[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38408 === (11))){
var inst_38398 = cljs.core.async.close_BANG_.call(null,ch);
var state_38407__$1 = state_38407;
var statearr_38418_38444 = state_38407__$1;
(statearr_38418_38444[(2)] = inst_38398);

(statearr_38418_38444[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38408 === (9))){
var state_38407__$1 = state_38407;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38419_38445 = state_38407__$1;
(statearr_38419_38445[(1)] = (11));

} else {
var statearr_38420_38446 = state_38407__$1;
(statearr_38420_38446[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38408 === (5))){
var inst_38384 = (state_38407[(7)]);
var state_38407__$1 = state_38407;
var statearr_38421_38447 = state_38407__$1;
(statearr_38421_38447[(2)] = inst_38384);

(statearr_38421_38447[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38408 === (10))){
var inst_38403 = (state_38407[(2)]);
var state_38407__$1 = state_38407;
var statearr_38422_38448 = state_38407__$1;
(statearr_38422_38448[(2)] = inst_38403);

(statearr_38422_38448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38408 === (8))){
var inst_38384 = (state_38407[(7)]);
var inst_38394 = cljs.core.next.call(null,inst_38384);
var inst_38384__$1 = inst_38394;
var state_38407__$1 = (function (){var statearr_38423 = state_38407;
(statearr_38423[(7)] = inst_38384__$1);

return statearr_38423;
})();
var statearr_38424_38449 = state_38407__$1;
(statearr_38424_38449[(2)] = null);

(statearr_38424_38449[(1)] = (2));


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
var statearr_38428 = [null,null,null,null,null,null,null,null];
(statearr_38428[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_38428[(1)] = (1));

return statearr_38428;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_38407){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_38407);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e38429){if((e38429 instanceof Object)){
var ex__10431__auto__ = e38429;
var statearr_38430_38450 = state_38407;
(statearr_38430_38450[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38407);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38429;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38451 = state_38407;
state_38407 = G__38451;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_38407){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_38407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto__))
})();
var state__10450__auto__ = (function (){var statearr_38431 = f__10449__auto__.call(null);
(statearr_38431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto__);

return statearr_38431;
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
if(typeof cljs.core.async.t_cljs$core$async38673 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38673 = (function (mult,ch,cs,meta38674){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta38674 = meta38674;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_38675,meta38674__$1){
var self__ = this;
var _38675__$1 = this;
return (new cljs.core.async.t_cljs$core$async38673(self__.mult,self__.ch,self__.cs,meta38674__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async38673.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_38675){
var self__ = this;
var _38675__$1 = this;
return self__.meta38674;
});})(cs))
;

cljs.core.async.t_cljs$core$async38673.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async38673.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async38673.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async38673.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38673.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38673.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38673.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta38674","meta38674",145888690,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async38673.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38673.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38673";

cljs.core.async.t_cljs$core$async38673.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8698__auto__,writer__8699__auto__,opt__8700__auto__){
return cljs.core._write.call(null,writer__8699__auto__,"cljs.core.async/t_cljs$core$async38673");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async38673 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async38673(mult__$1,ch__$1,cs__$1,meta38674){
return (new cljs.core.async.t_cljs$core$async38673(mult__$1,ch__$1,cs__$1,meta38674));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async38673(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10448__auto___38894 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___38894,cs,m,dchan,dctr,done){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___38894,cs,m,dchan,dctr,done){
return (function (state_38806){
var state_val_38807 = (state_38806[(1)]);
if((state_val_38807 === (7))){
var inst_38802 = (state_38806[(2)]);
var state_38806__$1 = state_38806;
var statearr_38808_38895 = state_38806__$1;
(statearr_38808_38895[(2)] = inst_38802);

(statearr_38808_38895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (20))){
var inst_38707 = (state_38806[(7)]);
var inst_38717 = cljs.core.first.call(null,inst_38707);
var inst_38718 = cljs.core.nth.call(null,inst_38717,(0),null);
var inst_38719 = cljs.core.nth.call(null,inst_38717,(1),null);
var state_38806__$1 = (function (){var statearr_38809 = state_38806;
(statearr_38809[(8)] = inst_38718);

return statearr_38809;
})();
if(cljs.core.truth_(inst_38719)){
var statearr_38810_38896 = state_38806__$1;
(statearr_38810_38896[(1)] = (22));

} else {
var statearr_38811_38897 = state_38806__$1;
(statearr_38811_38897[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (27))){
var inst_38749 = (state_38806[(9)]);
var inst_38754 = (state_38806[(10)]);
var inst_38747 = (state_38806[(11)]);
var inst_38678 = (state_38806[(12)]);
var inst_38754__$1 = cljs.core._nth.call(null,inst_38747,inst_38749);
var inst_38755 = cljs.core.async.put_BANG_.call(null,inst_38754__$1,inst_38678,done);
var state_38806__$1 = (function (){var statearr_38812 = state_38806;
(statearr_38812[(10)] = inst_38754__$1);

return statearr_38812;
})();
if(cljs.core.truth_(inst_38755)){
var statearr_38813_38898 = state_38806__$1;
(statearr_38813_38898[(1)] = (30));

} else {
var statearr_38814_38899 = state_38806__$1;
(statearr_38814_38899[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (1))){
var state_38806__$1 = state_38806;
var statearr_38815_38900 = state_38806__$1;
(statearr_38815_38900[(2)] = null);

(statearr_38815_38900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (24))){
var inst_38707 = (state_38806[(7)]);
var inst_38724 = (state_38806[(2)]);
var inst_38725 = cljs.core.next.call(null,inst_38707);
var inst_38687 = inst_38725;
var inst_38688 = null;
var inst_38689 = (0);
var inst_38690 = (0);
var state_38806__$1 = (function (){var statearr_38816 = state_38806;
(statearr_38816[(13)] = inst_38690);

(statearr_38816[(14)] = inst_38724);

(statearr_38816[(15)] = inst_38689);

(statearr_38816[(16)] = inst_38687);

(statearr_38816[(17)] = inst_38688);

return statearr_38816;
})();
var statearr_38817_38901 = state_38806__$1;
(statearr_38817_38901[(2)] = null);

(statearr_38817_38901[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (39))){
var state_38806__$1 = state_38806;
var statearr_38821_38902 = state_38806__$1;
(statearr_38821_38902[(2)] = null);

(statearr_38821_38902[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (4))){
var inst_38678 = (state_38806[(12)]);
var inst_38678__$1 = (state_38806[(2)]);
var inst_38679 = (inst_38678__$1 == null);
var state_38806__$1 = (function (){var statearr_38822 = state_38806;
(statearr_38822[(12)] = inst_38678__$1);

return statearr_38822;
})();
if(cljs.core.truth_(inst_38679)){
var statearr_38823_38903 = state_38806__$1;
(statearr_38823_38903[(1)] = (5));

} else {
var statearr_38824_38904 = state_38806__$1;
(statearr_38824_38904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (15))){
var inst_38690 = (state_38806[(13)]);
var inst_38689 = (state_38806[(15)]);
var inst_38687 = (state_38806[(16)]);
var inst_38688 = (state_38806[(17)]);
var inst_38703 = (state_38806[(2)]);
var inst_38704 = (inst_38690 + (1));
var tmp38818 = inst_38689;
var tmp38819 = inst_38687;
var tmp38820 = inst_38688;
var inst_38687__$1 = tmp38819;
var inst_38688__$1 = tmp38820;
var inst_38689__$1 = tmp38818;
var inst_38690__$1 = inst_38704;
var state_38806__$1 = (function (){var statearr_38825 = state_38806;
(statearr_38825[(18)] = inst_38703);

(statearr_38825[(13)] = inst_38690__$1);

(statearr_38825[(15)] = inst_38689__$1);

(statearr_38825[(16)] = inst_38687__$1);

(statearr_38825[(17)] = inst_38688__$1);

return statearr_38825;
})();
var statearr_38826_38905 = state_38806__$1;
(statearr_38826_38905[(2)] = null);

(statearr_38826_38905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (21))){
var inst_38728 = (state_38806[(2)]);
var state_38806__$1 = state_38806;
var statearr_38830_38906 = state_38806__$1;
(statearr_38830_38906[(2)] = inst_38728);

(statearr_38830_38906[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (31))){
var inst_38754 = (state_38806[(10)]);
var inst_38758 = done.call(null,null);
var inst_38759 = cljs.core.async.untap_STAR_.call(null,m,inst_38754);
var state_38806__$1 = (function (){var statearr_38831 = state_38806;
(statearr_38831[(19)] = inst_38758);

return statearr_38831;
})();
var statearr_38832_38907 = state_38806__$1;
(statearr_38832_38907[(2)] = inst_38759);

(statearr_38832_38907[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (32))){
var inst_38749 = (state_38806[(9)]);
var inst_38746 = (state_38806[(20)]);
var inst_38747 = (state_38806[(11)]);
var inst_38748 = (state_38806[(21)]);
var inst_38761 = (state_38806[(2)]);
var inst_38762 = (inst_38749 + (1));
var tmp38827 = inst_38746;
var tmp38828 = inst_38747;
var tmp38829 = inst_38748;
var inst_38746__$1 = tmp38827;
var inst_38747__$1 = tmp38828;
var inst_38748__$1 = tmp38829;
var inst_38749__$1 = inst_38762;
var state_38806__$1 = (function (){var statearr_38833 = state_38806;
(statearr_38833[(9)] = inst_38749__$1);

(statearr_38833[(20)] = inst_38746__$1);

(statearr_38833[(11)] = inst_38747__$1);

(statearr_38833[(22)] = inst_38761);

(statearr_38833[(21)] = inst_38748__$1);

return statearr_38833;
})();
var statearr_38834_38908 = state_38806__$1;
(statearr_38834_38908[(2)] = null);

(statearr_38834_38908[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (40))){
var inst_38774 = (state_38806[(23)]);
var inst_38778 = done.call(null,null);
var inst_38779 = cljs.core.async.untap_STAR_.call(null,m,inst_38774);
var state_38806__$1 = (function (){var statearr_38835 = state_38806;
(statearr_38835[(24)] = inst_38778);

return statearr_38835;
})();
var statearr_38836_38909 = state_38806__$1;
(statearr_38836_38909[(2)] = inst_38779);

(statearr_38836_38909[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (33))){
var inst_38765 = (state_38806[(25)]);
var inst_38767 = cljs.core.chunked_seq_QMARK_.call(null,inst_38765);
var state_38806__$1 = state_38806;
if(inst_38767){
var statearr_38837_38910 = state_38806__$1;
(statearr_38837_38910[(1)] = (36));

} else {
var statearr_38838_38911 = state_38806__$1;
(statearr_38838_38911[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (13))){
var inst_38697 = (state_38806[(26)]);
var inst_38700 = cljs.core.async.close_BANG_.call(null,inst_38697);
var state_38806__$1 = state_38806;
var statearr_38839_38912 = state_38806__$1;
(statearr_38839_38912[(2)] = inst_38700);

(statearr_38839_38912[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (22))){
var inst_38718 = (state_38806[(8)]);
var inst_38721 = cljs.core.async.close_BANG_.call(null,inst_38718);
var state_38806__$1 = state_38806;
var statearr_38840_38913 = state_38806__$1;
(statearr_38840_38913[(2)] = inst_38721);

(statearr_38840_38913[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (36))){
var inst_38765 = (state_38806[(25)]);
var inst_38769 = cljs.core.chunk_first.call(null,inst_38765);
var inst_38770 = cljs.core.chunk_rest.call(null,inst_38765);
var inst_38771 = cljs.core.count.call(null,inst_38769);
var inst_38746 = inst_38770;
var inst_38747 = inst_38769;
var inst_38748 = inst_38771;
var inst_38749 = (0);
var state_38806__$1 = (function (){var statearr_38841 = state_38806;
(statearr_38841[(9)] = inst_38749);

(statearr_38841[(20)] = inst_38746);

(statearr_38841[(11)] = inst_38747);

(statearr_38841[(21)] = inst_38748);

return statearr_38841;
})();
var statearr_38842_38914 = state_38806__$1;
(statearr_38842_38914[(2)] = null);

(statearr_38842_38914[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (41))){
var inst_38765 = (state_38806[(25)]);
var inst_38781 = (state_38806[(2)]);
var inst_38782 = cljs.core.next.call(null,inst_38765);
var inst_38746 = inst_38782;
var inst_38747 = null;
var inst_38748 = (0);
var inst_38749 = (0);
var state_38806__$1 = (function (){var statearr_38843 = state_38806;
(statearr_38843[(9)] = inst_38749);

(statearr_38843[(20)] = inst_38746);

(statearr_38843[(11)] = inst_38747);

(statearr_38843[(21)] = inst_38748);

(statearr_38843[(27)] = inst_38781);

return statearr_38843;
})();
var statearr_38844_38915 = state_38806__$1;
(statearr_38844_38915[(2)] = null);

(statearr_38844_38915[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (43))){
var state_38806__$1 = state_38806;
var statearr_38845_38916 = state_38806__$1;
(statearr_38845_38916[(2)] = null);

(statearr_38845_38916[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (29))){
var inst_38790 = (state_38806[(2)]);
var state_38806__$1 = state_38806;
var statearr_38846_38917 = state_38806__$1;
(statearr_38846_38917[(2)] = inst_38790);

(statearr_38846_38917[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (44))){
var inst_38799 = (state_38806[(2)]);
var state_38806__$1 = (function (){var statearr_38847 = state_38806;
(statearr_38847[(28)] = inst_38799);

return statearr_38847;
})();
var statearr_38848_38918 = state_38806__$1;
(statearr_38848_38918[(2)] = null);

(statearr_38848_38918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (6))){
var inst_38738 = (state_38806[(29)]);
var inst_38737 = cljs.core.deref.call(null,cs);
var inst_38738__$1 = cljs.core.keys.call(null,inst_38737);
var inst_38739 = cljs.core.count.call(null,inst_38738__$1);
var inst_38740 = cljs.core.reset_BANG_.call(null,dctr,inst_38739);
var inst_38745 = cljs.core.seq.call(null,inst_38738__$1);
var inst_38746 = inst_38745;
var inst_38747 = null;
var inst_38748 = (0);
var inst_38749 = (0);
var state_38806__$1 = (function (){var statearr_38849 = state_38806;
(statearr_38849[(9)] = inst_38749);

(statearr_38849[(20)] = inst_38746);

(statearr_38849[(29)] = inst_38738__$1);

(statearr_38849[(11)] = inst_38747);

(statearr_38849[(30)] = inst_38740);

(statearr_38849[(21)] = inst_38748);

return statearr_38849;
})();
var statearr_38850_38919 = state_38806__$1;
(statearr_38850_38919[(2)] = null);

(statearr_38850_38919[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (28))){
var inst_38746 = (state_38806[(20)]);
var inst_38765 = (state_38806[(25)]);
var inst_38765__$1 = cljs.core.seq.call(null,inst_38746);
var state_38806__$1 = (function (){var statearr_38851 = state_38806;
(statearr_38851[(25)] = inst_38765__$1);

return statearr_38851;
})();
if(inst_38765__$1){
var statearr_38852_38920 = state_38806__$1;
(statearr_38852_38920[(1)] = (33));

} else {
var statearr_38853_38921 = state_38806__$1;
(statearr_38853_38921[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (25))){
var inst_38749 = (state_38806[(9)]);
var inst_38748 = (state_38806[(21)]);
var inst_38751 = (inst_38749 < inst_38748);
var inst_38752 = inst_38751;
var state_38806__$1 = state_38806;
if(cljs.core.truth_(inst_38752)){
var statearr_38854_38922 = state_38806__$1;
(statearr_38854_38922[(1)] = (27));

} else {
var statearr_38855_38923 = state_38806__$1;
(statearr_38855_38923[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (34))){
var state_38806__$1 = state_38806;
var statearr_38856_38924 = state_38806__$1;
(statearr_38856_38924[(2)] = null);

(statearr_38856_38924[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (17))){
var state_38806__$1 = state_38806;
var statearr_38857_38925 = state_38806__$1;
(statearr_38857_38925[(2)] = null);

(statearr_38857_38925[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (3))){
var inst_38804 = (state_38806[(2)]);
var state_38806__$1 = state_38806;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38806__$1,inst_38804);
} else {
if((state_val_38807 === (12))){
var inst_38733 = (state_38806[(2)]);
var state_38806__$1 = state_38806;
var statearr_38858_38926 = state_38806__$1;
(statearr_38858_38926[(2)] = inst_38733);

(statearr_38858_38926[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (2))){
var state_38806__$1 = state_38806;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38806__$1,(4),ch);
} else {
if((state_val_38807 === (23))){
var state_38806__$1 = state_38806;
var statearr_38859_38927 = state_38806__$1;
(statearr_38859_38927[(2)] = null);

(statearr_38859_38927[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (35))){
var inst_38788 = (state_38806[(2)]);
var state_38806__$1 = state_38806;
var statearr_38860_38928 = state_38806__$1;
(statearr_38860_38928[(2)] = inst_38788);

(statearr_38860_38928[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (19))){
var inst_38707 = (state_38806[(7)]);
var inst_38711 = cljs.core.chunk_first.call(null,inst_38707);
var inst_38712 = cljs.core.chunk_rest.call(null,inst_38707);
var inst_38713 = cljs.core.count.call(null,inst_38711);
var inst_38687 = inst_38712;
var inst_38688 = inst_38711;
var inst_38689 = inst_38713;
var inst_38690 = (0);
var state_38806__$1 = (function (){var statearr_38861 = state_38806;
(statearr_38861[(13)] = inst_38690);

(statearr_38861[(15)] = inst_38689);

(statearr_38861[(16)] = inst_38687);

(statearr_38861[(17)] = inst_38688);

return statearr_38861;
})();
var statearr_38862_38929 = state_38806__$1;
(statearr_38862_38929[(2)] = null);

(statearr_38862_38929[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (11))){
var inst_38707 = (state_38806[(7)]);
var inst_38687 = (state_38806[(16)]);
var inst_38707__$1 = cljs.core.seq.call(null,inst_38687);
var state_38806__$1 = (function (){var statearr_38863 = state_38806;
(statearr_38863[(7)] = inst_38707__$1);

return statearr_38863;
})();
if(inst_38707__$1){
var statearr_38864_38930 = state_38806__$1;
(statearr_38864_38930[(1)] = (16));

} else {
var statearr_38865_38931 = state_38806__$1;
(statearr_38865_38931[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (9))){
var inst_38735 = (state_38806[(2)]);
var state_38806__$1 = state_38806;
var statearr_38866_38932 = state_38806__$1;
(statearr_38866_38932[(2)] = inst_38735);

(statearr_38866_38932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (5))){
var inst_38685 = cljs.core.deref.call(null,cs);
var inst_38686 = cljs.core.seq.call(null,inst_38685);
var inst_38687 = inst_38686;
var inst_38688 = null;
var inst_38689 = (0);
var inst_38690 = (0);
var state_38806__$1 = (function (){var statearr_38867 = state_38806;
(statearr_38867[(13)] = inst_38690);

(statearr_38867[(15)] = inst_38689);

(statearr_38867[(16)] = inst_38687);

(statearr_38867[(17)] = inst_38688);

return statearr_38867;
})();
var statearr_38868_38933 = state_38806__$1;
(statearr_38868_38933[(2)] = null);

(statearr_38868_38933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (14))){
var state_38806__$1 = state_38806;
var statearr_38869_38934 = state_38806__$1;
(statearr_38869_38934[(2)] = null);

(statearr_38869_38934[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (45))){
var inst_38796 = (state_38806[(2)]);
var state_38806__$1 = state_38806;
var statearr_38870_38935 = state_38806__$1;
(statearr_38870_38935[(2)] = inst_38796);

(statearr_38870_38935[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (26))){
var inst_38738 = (state_38806[(29)]);
var inst_38792 = (state_38806[(2)]);
var inst_38793 = cljs.core.seq.call(null,inst_38738);
var state_38806__$1 = (function (){var statearr_38871 = state_38806;
(statearr_38871[(31)] = inst_38792);

return statearr_38871;
})();
if(inst_38793){
var statearr_38872_38936 = state_38806__$1;
(statearr_38872_38936[(1)] = (42));

} else {
var statearr_38873_38937 = state_38806__$1;
(statearr_38873_38937[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (16))){
var inst_38707 = (state_38806[(7)]);
var inst_38709 = cljs.core.chunked_seq_QMARK_.call(null,inst_38707);
var state_38806__$1 = state_38806;
if(inst_38709){
var statearr_38874_38938 = state_38806__$1;
(statearr_38874_38938[(1)] = (19));

} else {
var statearr_38875_38939 = state_38806__$1;
(statearr_38875_38939[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (38))){
var inst_38785 = (state_38806[(2)]);
var state_38806__$1 = state_38806;
var statearr_38876_38940 = state_38806__$1;
(statearr_38876_38940[(2)] = inst_38785);

(statearr_38876_38940[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (30))){
var state_38806__$1 = state_38806;
var statearr_38877_38941 = state_38806__$1;
(statearr_38877_38941[(2)] = null);

(statearr_38877_38941[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (10))){
var inst_38690 = (state_38806[(13)]);
var inst_38688 = (state_38806[(17)]);
var inst_38696 = cljs.core._nth.call(null,inst_38688,inst_38690);
var inst_38697 = cljs.core.nth.call(null,inst_38696,(0),null);
var inst_38698 = cljs.core.nth.call(null,inst_38696,(1),null);
var state_38806__$1 = (function (){var statearr_38878 = state_38806;
(statearr_38878[(26)] = inst_38697);

return statearr_38878;
})();
if(cljs.core.truth_(inst_38698)){
var statearr_38879_38942 = state_38806__$1;
(statearr_38879_38942[(1)] = (13));

} else {
var statearr_38880_38943 = state_38806__$1;
(statearr_38880_38943[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (18))){
var inst_38731 = (state_38806[(2)]);
var state_38806__$1 = state_38806;
var statearr_38881_38944 = state_38806__$1;
(statearr_38881_38944[(2)] = inst_38731);

(statearr_38881_38944[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (42))){
var state_38806__$1 = state_38806;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38806__$1,(45),dchan);
} else {
if((state_val_38807 === (37))){
var inst_38774 = (state_38806[(23)]);
var inst_38678 = (state_38806[(12)]);
var inst_38765 = (state_38806[(25)]);
var inst_38774__$1 = cljs.core.first.call(null,inst_38765);
var inst_38775 = cljs.core.async.put_BANG_.call(null,inst_38774__$1,inst_38678,done);
var state_38806__$1 = (function (){var statearr_38882 = state_38806;
(statearr_38882[(23)] = inst_38774__$1);

return statearr_38882;
})();
if(cljs.core.truth_(inst_38775)){
var statearr_38883_38945 = state_38806__$1;
(statearr_38883_38945[(1)] = (39));

} else {
var statearr_38884_38946 = state_38806__$1;
(statearr_38884_38946[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (8))){
var inst_38690 = (state_38806[(13)]);
var inst_38689 = (state_38806[(15)]);
var inst_38692 = (inst_38690 < inst_38689);
var inst_38693 = inst_38692;
var state_38806__$1 = state_38806;
if(cljs.core.truth_(inst_38693)){
var statearr_38885_38947 = state_38806__$1;
(statearr_38885_38947[(1)] = (10));

} else {
var statearr_38886_38948 = state_38806__$1;
(statearr_38886_38948[(1)] = (11));

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
});})(c__10448__auto___38894,cs,m,dchan,dctr,done))
;
return ((function (switch__10427__auto__,c__10448__auto___38894,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10428__auto__ = null;
var cljs$core$async$mult_$_state_machine__10428__auto____0 = (function (){
var statearr_38890 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38890[(0)] = cljs$core$async$mult_$_state_machine__10428__auto__);

(statearr_38890[(1)] = (1));

return statearr_38890;
});
var cljs$core$async$mult_$_state_machine__10428__auto____1 = (function (state_38806){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_38806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e38891){if((e38891 instanceof Object)){
var ex__10431__auto__ = e38891;
var statearr_38892_38949 = state_38806;
(statearr_38892_38949[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38891;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38950 = state_38806;
state_38806 = G__38950;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10428__auto__ = function(state_38806){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10428__auto____1.call(this,state_38806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10428__auto____0;
cljs$core$async$mult_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10428__auto____1;
return cljs$core$async$mult_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___38894,cs,m,dchan,dctr,done))
})();
var state__10450__auto__ = (function (){var statearr_38893 = f__10449__auto__.call(null);
(statearr_38893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___38894);

return statearr_38893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___38894,cs,m,dchan,dctr,done))
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
var args38951 = [];
var len__9158__auto___38954 = arguments.length;
var i__9159__auto___38955 = (0);
while(true){
if((i__9159__auto___38955 < len__9158__auto___38954)){
args38951.push((arguments[i__9159__auto___38955]));

var G__38956 = (i__9159__auto___38955 + (1));
i__9159__auto___38955 = G__38956;
continue;
} else {
}
break;
}

var G__38953 = args38951.length;
switch (G__38953) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38951.length)].join('')));

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
var len__9158__auto___38968 = arguments.length;
var i__9159__auto___38969 = (0);
while(true){
if((i__9159__auto___38969 < len__9158__auto___38968)){
args__9165__auto__.push((arguments[i__9159__auto___38969]));

var G__38970 = (i__9159__auto___38969 + (1));
i__9159__auto___38969 = G__38970;
continue;
} else {
}
break;
}

var argseq__9166__auto__ = ((((3) < args__9165__auto__.length))?(new cljs.core.IndexedSeq(args__9165__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9166__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__38962){
var map__38963 = p__38962;
var map__38963__$1 = ((((!((map__38963 == null)))?((((map__38963.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38963.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38963):map__38963);
var opts = map__38963__$1;
var statearr_38965_38971 = state;
(statearr_38965_38971[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__38963,map__38963__$1,opts){
return (function (val){
var statearr_38966_38972 = state;
(statearr_38966_38972[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__38963,map__38963__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_38967_38973 = state;
(statearr_38967_38973[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq38958){
var G__38959 = cljs.core.first.call(null,seq38958);
var seq38958__$1 = cljs.core.next.call(null,seq38958);
var G__38960 = cljs.core.first.call(null,seq38958__$1);
var seq38958__$2 = cljs.core.next.call(null,seq38958__$1);
var G__38961 = cljs.core.first.call(null,seq38958__$2);
var seq38958__$3 = cljs.core.next.call(null,seq38958__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38959,G__38960,G__38961,seq38958__$3);
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
if(typeof cljs.core.async.t_cljs$core$async39137 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39137 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta39138){
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
this.meta39138 = meta39138;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39139,meta39138__$1){
var self__ = this;
var _39139__$1 = this;
return (new cljs.core.async.t_cljs$core$async39137(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta39138__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39137.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39139){
var self__ = this;
var _39139__$1 = this;
return self__.meta39138;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39137.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async39137.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39137.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async39137.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39137.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39137.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39137.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39137.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async39137.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta39138","meta39138",1418361766,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39137.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39137.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39137";

cljs.core.async.t_cljs$core$async39137.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8698__auto__,writer__8699__auto__,opt__8700__auto__){
return cljs.core._write.call(null,writer__8699__auto__,"cljs.core.async/t_cljs$core$async39137");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async39137 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async39137(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39138){
return (new cljs.core.async.t_cljs$core$async39137(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39138));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async39137(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10448__auto___39300 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___39300,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___39300,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_39237){
var state_val_39238 = (state_39237[(1)]);
if((state_val_39238 === (7))){
var inst_39155 = (state_39237[(2)]);
var state_39237__$1 = state_39237;
var statearr_39239_39301 = state_39237__$1;
(statearr_39239_39301[(2)] = inst_39155);

(statearr_39239_39301[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39238 === (20))){
var inst_39167 = (state_39237[(7)]);
var state_39237__$1 = state_39237;
var statearr_39240_39302 = state_39237__$1;
(statearr_39240_39302[(2)] = inst_39167);

(statearr_39240_39302[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39238 === (27))){
var state_39237__$1 = state_39237;
var statearr_39241_39303 = state_39237__$1;
(statearr_39241_39303[(2)] = null);

(statearr_39241_39303[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39238 === (1))){
var inst_39143 = (state_39237[(8)]);
var inst_39143__$1 = calc_state.call(null);
var inst_39145 = (inst_39143__$1 == null);
var inst_39146 = cljs.core.not.call(null,inst_39145);
var state_39237__$1 = (function (){var statearr_39242 = state_39237;
(statearr_39242[(8)] = inst_39143__$1);

return statearr_39242;
})();
if(inst_39146){
var statearr_39243_39304 = state_39237__$1;
(statearr_39243_39304[(1)] = (2));

} else {
var statearr_39244_39305 = state_39237__$1;
(statearr_39244_39305[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39238 === (24))){
var inst_39197 = (state_39237[(9)]);
var inst_39211 = (state_39237[(10)]);
var inst_39190 = (state_39237[(11)]);
var inst_39211__$1 = inst_39190.call(null,inst_39197);
var state_39237__$1 = (function (){var statearr_39245 = state_39237;
(statearr_39245[(10)] = inst_39211__$1);

return statearr_39245;
})();
if(cljs.core.truth_(inst_39211__$1)){
var statearr_39246_39306 = state_39237__$1;
(statearr_39246_39306[(1)] = (29));

} else {
var statearr_39247_39307 = state_39237__$1;
(statearr_39247_39307[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39238 === (4))){
var inst_39158 = (state_39237[(2)]);
var state_39237__$1 = state_39237;
if(cljs.core.truth_(inst_39158)){
var statearr_39248_39308 = state_39237__$1;
(statearr_39248_39308[(1)] = (8));

} else {
var statearr_39249_39309 = state_39237__$1;
(statearr_39249_39309[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39238 === (15))){
var inst_39184 = (state_39237[(2)]);
var state_39237__$1 = state_39237;
if(cljs.core.truth_(inst_39184)){
var statearr_39250_39310 = state_39237__$1;
(statearr_39250_39310[(1)] = (19));

} else {
var statearr_39251_39311 = state_39237__$1;
(statearr_39251_39311[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39238 === (21))){
var inst_39189 = (state_39237[(12)]);
var inst_39189__$1 = (state_39237[(2)]);
var inst_39190 = cljs.core.get.call(null,inst_39189__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39191 = cljs.core.get.call(null,inst_39189__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39192 = cljs.core.get.call(null,inst_39189__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_39237__$1 = (function (){var statearr_39252 = state_39237;
(statearr_39252[(12)] = inst_39189__$1);

(statearr_39252[(13)] = inst_39191);

(statearr_39252[(11)] = inst_39190);

return statearr_39252;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_39237__$1,(22),inst_39192);
} else {
if((state_val_39238 === (31))){
var inst_39219 = (state_39237[(2)]);
var state_39237__$1 = state_39237;
if(cljs.core.truth_(inst_39219)){
var statearr_39253_39312 = state_39237__$1;
(statearr_39253_39312[(1)] = (32));

} else {
var statearr_39254_39313 = state_39237__$1;
(statearr_39254_39313[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39238 === (32))){
var inst_39196 = (state_39237[(14)]);
var state_39237__$1 = state_39237;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39237__$1,(35),out,inst_39196);
} else {
if((state_val_39238 === (33))){
var inst_39189 = (state_39237[(12)]);
var inst_39167 = inst_39189;
var state_39237__$1 = (function (){var statearr_39255 = state_39237;
(statearr_39255[(7)] = inst_39167);

return statearr_39255;
})();
var statearr_39256_39314 = state_39237__$1;
(statearr_39256_39314[(2)] = null);

(statearr_39256_39314[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39238 === (13))){
var inst_39167 = (state_39237[(7)]);
var inst_39174 = inst_39167.cljs$lang$protocol_mask$partition0$;
var inst_39175 = (inst_39174 & (64));
var inst_39176 = inst_39167.cljs$core$ISeq$;
var inst_39177 = (inst_39175) || (inst_39176);
var state_39237__$1 = state_39237;
if(cljs.core.truth_(inst_39177)){
var statearr_39257_39315 = state_39237__$1;
(statearr_39257_39315[(1)] = (16));

} else {
var statearr_39258_39316 = state_39237__$1;
(statearr_39258_39316[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39238 === (22))){
var inst_39197 = (state_39237[(9)]);
var inst_39196 = (state_39237[(14)]);
var inst_39195 = (state_39237[(2)]);
var inst_39196__$1 = cljs.core.nth.call(null,inst_39195,(0),null);
var inst_39197__$1 = cljs.core.nth.call(null,inst_39195,(1),null);
var inst_39198 = (inst_39196__$1 == null);
var inst_39199 = cljs.core._EQ_.call(null,inst_39197__$1,change);
var inst_39200 = (inst_39198) || (inst_39199);
var state_39237__$1 = (function (){var statearr_39259 = state_39237;
(statearr_39259[(9)] = inst_39197__$1);

(statearr_39259[(14)] = inst_39196__$1);

return statearr_39259;
})();
if(cljs.core.truth_(inst_39200)){
var statearr_39260_39317 = state_39237__$1;
(statearr_39260_39317[(1)] = (23));

} else {
var statearr_39261_39318 = state_39237__$1;
(statearr_39261_39318[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39238 === (36))){
var inst_39189 = (state_39237[(12)]);
var inst_39167 = inst_39189;
var state_39237__$1 = (function (){var statearr_39262 = state_39237;
(statearr_39262[(7)] = inst_39167);

return statearr_39262;
})();
var statearr_39263_39319 = state_39237__$1;
(statearr_39263_39319[(2)] = null);

(statearr_39263_39319[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39238 === (29))){
var inst_39211 = (state_39237[(10)]);
var state_39237__$1 = state_39237;
var statearr_39264_39320 = state_39237__$1;
(statearr_39264_39320[(2)] = inst_39211);

(statearr_39264_39320[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39238 === (6))){
var state_39237__$1 = state_39237;
var statearr_39265_39321 = state_39237__$1;
(statearr_39265_39321[(2)] = false);

(statearr_39265_39321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39238 === (28))){
var inst_39207 = (state_39237[(2)]);
var inst_39208 = calc_state.call(null);
var inst_39167 = inst_39208;
var state_39237__$1 = (function (){var statearr_39266 = state_39237;
(statearr_39266[(7)] = inst_39167);

(statearr_39266[(15)] = inst_39207);

return statearr_39266;
})();
var statearr_39267_39322 = state_39237__$1;
(statearr_39267_39322[(2)] = null);

(statearr_39267_39322[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39238 === (25))){
var inst_39233 = (state_39237[(2)]);
var state_39237__$1 = state_39237;
var statearr_39268_39323 = state_39237__$1;
(statearr_39268_39323[(2)] = inst_39233);

(statearr_39268_39323[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39238 === (34))){
var inst_39231 = (state_39237[(2)]);
var state_39237__$1 = state_39237;
var statearr_39269_39324 = state_39237__$1;
(statearr_39269_39324[(2)] = inst_39231);

(statearr_39269_39324[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39238 === (17))){
var state_39237__$1 = state_39237;
var statearr_39270_39325 = state_39237__$1;
(statearr_39270_39325[(2)] = false);

(statearr_39270_39325[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39238 === (3))){
var state_39237__$1 = state_39237;
var statearr_39271_39326 = state_39237__$1;
(statearr_39271_39326[(2)] = false);

(statearr_39271_39326[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39238 === (12))){
var inst_39235 = (state_39237[(2)]);
var state_39237__$1 = state_39237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39237__$1,inst_39235);
} else {
if((state_val_39238 === (2))){
var inst_39143 = (state_39237[(8)]);
var inst_39148 = inst_39143.cljs$lang$protocol_mask$partition0$;
var inst_39149 = (inst_39148 & (64));
var inst_39150 = inst_39143.cljs$core$ISeq$;
var inst_39151 = (inst_39149) || (inst_39150);
var state_39237__$1 = state_39237;
if(cljs.core.truth_(inst_39151)){
var statearr_39272_39327 = state_39237__$1;
(statearr_39272_39327[(1)] = (5));

} else {
var statearr_39273_39328 = state_39237__$1;
(statearr_39273_39328[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39238 === (23))){
var inst_39196 = (state_39237[(14)]);
var inst_39202 = (inst_39196 == null);
var state_39237__$1 = state_39237;
if(cljs.core.truth_(inst_39202)){
var statearr_39274_39329 = state_39237__$1;
(statearr_39274_39329[(1)] = (26));

} else {
var statearr_39275_39330 = state_39237__$1;
(statearr_39275_39330[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39238 === (35))){
var inst_39222 = (state_39237[(2)]);
var state_39237__$1 = state_39237;
if(cljs.core.truth_(inst_39222)){
var statearr_39276_39331 = state_39237__$1;
(statearr_39276_39331[(1)] = (36));

} else {
var statearr_39277_39332 = state_39237__$1;
(statearr_39277_39332[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39238 === (19))){
var inst_39167 = (state_39237[(7)]);
var inst_39186 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39167);
var state_39237__$1 = state_39237;
var statearr_39278_39333 = state_39237__$1;
(statearr_39278_39333[(2)] = inst_39186);

(statearr_39278_39333[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39238 === (11))){
var inst_39167 = (state_39237[(7)]);
var inst_39171 = (inst_39167 == null);
var inst_39172 = cljs.core.not.call(null,inst_39171);
var state_39237__$1 = state_39237;
if(inst_39172){
var statearr_39279_39334 = state_39237__$1;
(statearr_39279_39334[(1)] = (13));

} else {
var statearr_39280_39335 = state_39237__$1;
(statearr_39280_39335[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39238 === (9))){
var inst_39143 = (state_39237[(8)]);
var state_39237__$1 = state_39237;
var statearr_39281_39336 = state_39237__$1;
(statearr_39281_39336[(2)] = inst_39143);

(statearr_39281_39336[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39238 === (5))){
var state_39237__$1 = state_39237;
var statearr_39282_39337 = state_39237__$1;
(statearr_39282_39337[(2)] = true);

(statearr_39282_39337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39238 === (14))){
var state_39237__$1 = state_39237;
var statearr_39283_39338 = state_39237__$1;
(statearr_39283_39338[(2)] = false);

(statearr_39283_39338[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39238 === (26))){
var inst_39197 = (state_39237[(9)]);
var inst_39204 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_39197);
var state_39237__$1 = state_39237;
var statearr_39284_39339 = state_39237__$1;
(statearr_39284_39339[(2)] = inst_39204);

(statearr_39284_39339[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39238 === (16))){
var state_39237__$1 = state_39237;
var statearr_39285_39340 = state_39237__$1;
(statearr_39285_39340[(2)] = true);

(statearr_39285_39340[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39238 === (38))){
var inst_39227 = (state_39237[(2)]);
var state_39237__$1 = state_39237;
var statearr_39286_39341 = state_39237__$1;
(statearr_39286_39341[(2)] = inst_39227);

(statearr_39286_39341[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39238 === (30))){
var inst_39197 = (state_39237[(9)]);
var inst_39191 = (state_39237[(13)]);
var inst_39190 = (state_39237[(11)]);
var inst_39214 = cljs.core.empty_QMARK_.call(null,inst_39190);
var inst_39215 = inst_39191.call(null,inst_39197);
var inst_39216 = cljs.core.not.call(null,inst_39215);
var inst_39217 = (inst_39214) && (inst_39216);
var state_39237__$1 = state_39237;
var statearr_39287_39342 = state_39237__$1;
(statearr_39287_39342[(2)] = inst_39217);

(statearr_39287_39342[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39238 === (10))){
var inst_39143 = (state_39237[(8)]);
var inst_39163 = (state_39237[(2)]);
var inst_39164 = cljs.core.get.call(null,inst_39163,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39165 = cljs.core.get.call(null,inst_39163,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39166 = cljs.core.get.call(null,inst_39163,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_39167 = inst_39143;
var state_39237__$1 = (function (){var statearr_39288 = state_39237;
(statearr_39288[(7)] = inst_39167);

(statearr_39288[(16)] = inst_39164);

(statearr_39288[(17)] = inst_39165);

(statearr_39288[(18)] = inst_39166);

return statearr_39288;
})();
var statearr_39289_39343 = state_39237__$1;
(statearr_39289_39343[(2)] = null);

(statearr_39289_39343[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39238 === (18))){
var inst_39181 = (state_39237[(2)]);
var state_39237__$1 = state_39237;
var statearr_39290_39344 = state_39237__$1;
(statearr_39290_39344[(2)] = inst_39181);

(statearr_39290_39344[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39238 === (37))){
var state_39237__$1 = state_39237;
var statearr_39291_39345 = state_39237__$1;
(statearr_39291_39345[(2)] = null);

(statearr_39291_39345[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39238 === (8))){
var inst_39143 = (state_39237[(8)]);
var inst_39160 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39143);
var state_39237__$1 = state_39237;
var statearr_39292_39346 = state_39237__$1;
(statearr_39292_39346[(2)] = inst_39160);

(statearr_39292_39346[(1)] = (10));


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
});})(c__10448__auto___39300,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10427__auto__,c__10448__auto___39300,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10428__auto__ = null;
var cljs$core$async$mix_$_state_machine__10428__auto____0 = (function (){
var statearr_39296 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39296[(0)] = cljs$core$async$mix_$_state_machine__10428__auto__);

(statearr_39296[(1)] = (1));

return statearr_39296;
});
var cljs$core$async$mix_$_state_machine__10428__auto____1 = (function (state_39237){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_39237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e39297){if((e39297 instanceof Object)){
var ex__10431__auto__ = e39297;
var statearr_39298_39347 = state_39237;
(statearr_39298_39347[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39348 = state_39237;
state_39237 = G__39348;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10428__auto__ = function(state_39237){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10428__auto____1.call(this,state_39237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10428__auto____0;
cljs$core$async$mix_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10428__auto____1;
return cljs$core$async$mix_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___39300,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10450__auto__ = (function (){var statearr_39299 = f__10449__auto__.call(null);
(statearr_39299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___39300);

return statearr_39299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___39300,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args39349 = [];
var len__9158__auto___39352 = arguments.length;
var i__9159__auto___39353 = (0);
while(true){
if((i__9159__auto___39353 < len__9158__auto___39352)){
args39349.push((arguments[i__9159__auto___39353]));

var G__39354 = (i__9159__auto___39353 + (1));
i__9159__auto___39353 = G__39354;
continue;
} else {
}
break;
}

var G__39351 = args39349.length;
switch (G__39351) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39349.length)].join('')));

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
var args39357 = [];
var len__9158__auto___39482 = arguments.length;
var i__9159__auto___39483 = (0);
while(true){
if((i__9159__auto___39483 < len__9158__auto___39482)){
args39357.push((arguments[i__9159__auto___39483]));

var G__39484 = (i__9159__auto___39483 + (1));
i__9159__auto___39483 = G__39484;
continue;
} else {
}
break;
}

var G__39359 = args39357.length;
switch (G__39359) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39357.length)].join('')));

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
return (function (p1__39356_SHARP_){
if(cljs.core.truth_(p1__39356_SHARP_.call(null,topic))){
return p1__39356_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__39356_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__8100__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async39360 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39360 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta39361){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta39361 = meta39361;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_39362,meta39361__$1){
var self__ = this;
var _39362__$1 = this;
return (new cljs.core.async.t_cljs$core$async39360(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta39361__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39360.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_39362){
var self__ = this;
var _39362__$1 = this;
return self__.meta39361;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39360.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async39360.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39360.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async39360.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39360.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async39360.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39360.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39360.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta39361","meta39361",277407772,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39360.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39360.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39360";

cljs.core.async.t_cljs$core$async39360.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8698__auto__,writer__8699__auto__,opt__8700__auto__){
return cljs.core._write.call(null,writer__8699__auto__,"cljs.core.async/t_cljs$core$async39360");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async39360 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async39360(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39361){
return (new cljs.core.async.t_cljs$core$async39360(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39361));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async39360(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10448__auto___39486 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___39486,mults,ensure_mult,p){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___39486,mults,ensure_mult,p){
return (function (state_39434){
var state_val_39435 = (state_39434[(1)]);
if((state_val_39435 === (7))){
var inst_39430 = (state_39434[(2)]);
var state_39434__$1 = state_39434;
var statearr_39436_39487 = state_39434__$1;
(statearr_39436_39487[(2)] = inst_39430);

(statearr_39436_39487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39435 === (20))){
var state_39434__$1 = state_39434;
var statearr_39437_39488 = state_39434__$1;
(statearr_39437_39488[(2)] = null);

(statearr_39437_39488[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39435 === (1))){
var state_39434__$1 = state_39434;
var statearr_39438_39489 = state_39434__$1;
(statearr_39438_39489[(2)] = null);

(statearr_39438_39489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39435 === (24))){
var inst_39413 = (state_39434[(7)]);
var inst_39422 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_39413);
var state_39434__$1 = state_39434;
var statearr_39439_39490 = state_39434__$1;
(statearr_39439_39490[(2)] = inst_39422);

(statearr_39439_39490[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39435 === (4))){
var inst_39365 = (state_39434[(8)]);
var inst_39365__$1 = (state_39434[(2)]);
var inst_39366 = (inst_39365__$1 == null);
var state_39434__$1 = (function (){var statearr_39440 = state_39434;
(statearr_39440[(8)] = inst_39365__$1);

return statearr_39440;
})();
if(cljs.core.truth_(inst_39366)){
var statearr_39441_39491 = state_39434__$1;
(statearr_39441_39491[(1)] = (5));

} else {
var statearr_39442_39492 = state_39434__$1;
(statearr_39442_39492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39435 === (15))){
var inst_39407 = (state_39434[(2)]);
var state_39434__$1 = state_39434;
var statearr_39443_39493 = state_39434__$1;
(statearr_39443_39493[(2)] = inst_39407);

(statearr_39443_39493[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39435 === (21))){
var inst_39427 = (state_39434[(2)]);
var state_39434__$1 = (function (){var statearr_39444 = state_39434;
(statearr_39444[(9)] = inst_39427);

return statearr_39444;
})();
var statearr_39445_39494 = state_39434__$1;
(statearr_39445_39494[(2)] = null);

(statearr_39445_39494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39435 === (13))){
var inst_39389 = (state_39434[(10)]);
var inst_39391 = cljs.core.chunked_seq_QMARK_.call(null,inst_39389);
var state_39434__$1 = state_39434;
if(inst_39391){
var statearr_39446_39495 = state_39434__$1;
(statearr_39446_39495[(1)] = (16));

} else {
var statearr_39447_39496 = state_39434__$1;
(statearr_39447_39496[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39435 === (22))){
var inst_39419 = (state_39434[(2)]);
var state_39434__$1 = state_39434;
if(cljs.core.truth_(inst_39419)){
var statearr_39448_39497 = state_39434__$1;
(statearr_39448_39497[(1)] = (23));

} else {
var statearr_39449_39498 = state_39434__$1;
(statearr_39449_39498[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39435 === (6))){
var inst_39415 = (state_39434[(11)]);
var inst_39365 = (state_39434[(8)]);
var inst_39413 = (state_39434[(7)]);
var inst_39413__$1 = topic_fn.call(null,inst_39365);
var inst_39414 = cljs.core.deref.call(null,mults);
var inst_39415__$1 = cljs.core.get.call(null,inst_39414,inst_39413__$1);
var state_39434__$1 = (function (){var statearr_39450 = state_39434;
(statearr_39450[(11)] = inst_39415__$1);

(statearr_39450[(7)] = inst_39413__$1);

return statearr_39450;
})();
if(cljs.core.truth_(inst_39415__$1)){
var statearr_39451_39499 = state_39434__$1;
(statearr_39451_39499[(1)] = (19));

} else {
var statearr_39452_39500 = state_39434__$1;
(statearr_39452_39500[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39435 === (25))){
var inst_39424 = (state_39434[(2)]);
var state_39434__$1 = state_39434;
var statearr_39453_39501 = state_39434__$1;
(statearr_39453_39501[(2)] = inst_39424);

(statearr_39453_39501[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39435 === (17))){
var inst_39389 = (state_39434[(10)]);
var inst_39398 = cljs.core.first.call(null,inst_39389);
var inst_39399 = cljs.core.async.muxch_STAR_.call(null,inst_39398);
var inst_39400 = cljs.core.async.close_BANG_.call(null,inst_39399);
var inst_39401 = cljs.core.next.call(null,inst_39389);
var inst_39375 = inst_39401;
var inst_39376 = null;
var inst_39377 = (0);
var inst_39378 = (0);
var state_39434__$1 = (function (){var statearr_39454 = state_39434;
(statearr_39454[(12)] = inst_39400);

(statearr_39454[(13)] = inst_39376);

(statearr_39454[(14)] = inst_39375);

(statearr_39454[(15)] = inst_39378);

(statearr_39454[(16)] = inst_39377);

return statearr_39454;
})();
var statearr_39455_39502 = state_39434__$1;
(statearr_39455_39502[(2)] = null);

(statearr_39455_39502[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39435 === (3))){
var inst_39432 = (state_39434[(2)]);
var state_39434__$1 = state_39434;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39434__$1,inst_39432);
} else {
if((state_val_39435 === (12))){
var inst_39409 = (state_39434[(2)]);
var state_39434__$1 = state_39434;
var statearr_39456_39503 = state_39434__$1;
(statearr_39456_39503[(2)] = inst_39409);

(statearr_39456_39503[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39435 === (2))){
var state_39434__$1 = state_39434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39434__$1,(4),ch);
} else {
if((state_val_39435 === (23))){
var state_39434__$1 = state_39434;
var statearr_39457_39504 = state_39434__$1;
(statearr_39457_39504[(2)] = null);

(statearr_39457_39504[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39435 === (19))){
var inst_39415 = (state_39434[(11)]);
var inst_39365 = (state_39434[(8)]);
var inst_39417 = cljs.core.async.muxch_STAR_.call(null,inst_39415);
var state_39434__$1 = state_39434;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39434__$1,(22),inst_39417,inst_39365);
} else {
if((state_val_39435 === (11))){
var inst_39389 = (state_39434[(10)]);
var inst_39375 = (state_39434[(14)]);
var inst_39389__$1 = cljs.core.seq.call(null,inst_39375);
var state_39434__$1 = (function (){var statearr_39458 = state_39434;
(statearr_39458[(10)] = inst_39389__$1);

return statearr_39458;
})();
if(inst_39389__$1){
var statearr_39459_39505 = state_39434__$1;
(statearr_39459_39505[(1)] = (13));

} else {
var statearr_39460_39506 = state_39434__$1;
(statearr_39460_39506[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39435 === (9))){
var inst_39411 = (state_39434[(2)]);
var state_39434__$1 = state_39434;
var statearr_39461_39507 = state_39434__$1;
(statearr_39461_39507[(2)] = inst_39411);

(statearr_39461_39507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39435 === (5))){
var inst_39372 = cljs.core.deref.call(null,mults);
var inst_39373 = cljs.core.vals.call(null,inst_39372);
var inst_39374 = cljs.core.seq.call(null,inst_39373);
var inst_39375 = inst_39374;
var inst_39376 = null;
var inst_39377 = (0);
var inst_39378 = (0);
var state_39434__$1 = (function (){var statearr_39462 = state_39434;
(statearr_39462[(13)] = inst_39376);

(statearr_39462[(14)] = inst_39375);

(statearr_39462[(15)] = inst_39378);

(statearr_39462[(16)] = inst_39377);

return statearr_39462;
})();
var statearr_39463_39508 = state_39434__$1;
(statearr_39463_39508[(2)] = null);

(statearr_39463_39508[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39435 === (14))){
var state_39434__$1 = state_39434;
var statearr_39467_39509 = state_39434__$1;
(statearr_39467_39509[(2)] = null);

(statearr_39467_39509[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39435 === (16))){
var inst_39389 = (state_39434[(10)]);
var inst_39393 = cljs.core.chunk_first.call(null,inst_39389);
var inst_39394 = cljs.core.chunk_rest.call(null,inst_39389);
var inst_39395 = cljs.core.count.call(null,inst_39393);
var inst_39375 = inst_39394;
var inst_39376 = inst_39393;
var inst_39377 = inst_39395;
var inst_39378 = (0);
var state_39434__$1 = (function (){var statearr_39468 = state_39434;
(statearr_39468[(13)] = inst_39376);

(statearr_39468[(14)] = inst_39375);

(statearr_39468[(15)] = inst_39378);

(statearr_39468[(16)] = inst_39377);

return statearr_39468;
})();
var statearr_39469_39510 = state_39434__$1;
(statearr_39469_39510[(2)] = null);

(statearr_39469_39510[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39435 === (10))){
var inst_39376 = (state_39434[(13)]);
var inst_39375 = (state_39434[(14)]);
var inst_39378 = (state_39434[(15)]);
var inst_39377 = (state_39434[(16)]);
var inst_39383 = cljs.core._nth.call(null,inst_39376,inst_39378);
var inst_39384 = cljs.core.async.muxch_STAR_.call(null,inst_39383);
var inst_39385 = cljs.core.async.close_BANG_.call(null,inst_39384);
var inst_39386 = (inst_39378 + (1));
var tmp39464 = inst_39376;
var tmp39465 = inst_39375;
var tmp39466 = inst_39377;
var inst_39375__$1 = tmp39465;
var inst_39376__$1 = tmp39464;
var inst_39377__$1 = tmp39466;
var inst_39378__$1 = inst_39386;
var state_39434__$1 = (function (){var statearr_39470 = state_39434;
(statearr_39470[(17)] = inst_39385);

(statearr_39470[(13)] = inst_39376__$1);

(statearr_39470[(14)] = inst_39375__$1);

(statearr_39470[(15)] = inst_39378__$1);

(statearr_39470[(16)] = inst_39377__$1);

return statearr_39470;
})();
var statearr_39471_39511 = state_39434__$1;
(statearr_39471_39511[(2)] = null);

(statearr_39471_39511[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39435 === (18))){
var inst_39404 = (state_39434[(2)]);
var state_39434__$1 = state_39434;
var statearr_39472_39512 = state_39434__$1;
(statearr_39472_39512[(2)] = inst_39404);

(statearr_39472_39512[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39435 === (8))){
var inst_39378 = (state_39434[(15)]);
var inst_39377 = (state_39434[(16)]);
var inst_39380 = (inst_39378 < inst_39377);
var inst_39381 = inst_39380;
var state_39434__$1 = state_39434;
if(cljs.core.truth_(inst_39381)){
var statearr_39473_39513 = state_39434__$1;
(statearr_39473_39513[(1)] = (10));

} else {
var statearr_39474_39514 = state_39434__$1;
(statearr_39474_39514[(1)] = (11));

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
});})(c__10448__auto___39486,mults,ensure_mult,p))
;
return ((function (switch__10427__auto__,c__10448__auto___39486,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10428__auto__ = null;
var cljs$core$async$state_machine__10428__auto____0 = (function (){
var statearr_39478 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39478[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_39478[(1)] = (1));

return statearr_39478;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_39434){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_39434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e39479){if((e39479 instanceof Object)){
var ex__10431__auto__ = e39479;
var statearr_39480_39515 = state_39434;
(statearr_39480_39515[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39516 = state_39434;
state_39434 = G__39516;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_39434){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_39434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___39486,mults,ensure_mult,p))
})();
var state__10450__auto__ = (function (){var statearr_39481 = f__10449__auto__.call(null);
(statearr_39481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___39486);

return statearr_39481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___39486,mults,ensure_mult,p))
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
var args39517 = [];
var len__9158__auto___39520 = arguments.length;
var i__9159__auto___39521 = (0);
while(true){
if((i__9159__auto___39521 < len__9158__auto___39520)){
args39517.push((arguments[i__9159__auto___39521]));

var G__39522 = (i__9159__auto___39521 + (1));
i__9159__auto___39521 = G__39522;
continue;
} else {
}
break;
}

var G__39519 = args39517.length;
switch (G__39519) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39517.length)].join('')));

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
var args39524 = [];
var len__9158__auto___39527 = arguments.length;
var i__9159__auto___39528 = (0);
while(true){
if((i__9159__auto___39528 < len__9158__auto___39527)){
args39524.push((arguments[i__9159__auto___39528]));

var G__39529 = (i__9159__auto___39528 + (1));
i__9159__auto___39528 = G__39529;
continue;
} else {
}
break;
}

var G__39526 = args39524.length;
switch (G__39526) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39524.length)].join('')));

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
var args39531 = [];
var len__9158__auto___39602 = arguments.length;
var i__9159__auto___39603 = (0);
while(true){
if((i__9159__auto___39603 < len__9158__auto___39602)){
args39531.push((arguments[i__9159__auto___39603]));

var G__39604 = (i__9159__auto___39603 + (1));
i__9159__auto___39603 = G__39604;
continue;
} else {
}
break;
}

var G__39533 = args39531.length;
switch (G__39533) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39531.length)].join('')));

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
var c__10448__auto___39606 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___39606,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___39606,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_39572){
var state_val_39573 = (state_39572[(1)]);
if((state_val_39573 === (7))){
var state_39572__$1 = state_39572;
var statearr_39574_39607 = state_39572__$1;
(statearr_39574_39607[(2)] = null);

(statearr_39574_39607[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39573 === (1))){
var state_39572__$1 = state_39572;
var statearr_39575_39608 = state_39572__$1;
(statearr_39575_39608[(2)] = null);

(statearr_39575_39608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39573 === (4))){
var inst_39536 = (state_39572[(7)]);
var inst_39538 = (inst_39536 < cnt);
var state_39572__$1 = state_39572;
if(cljs.core.truth_(inst_39538)){
var statearr_39576_39609 = state_39572__$1;
(statearr_39576_39609[(1)] = (6));

} else {
var statearr_39577_39610 = state_39572__$1;
(statearr_39577_39610[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39573 === (15))){
var inst_39568 = (state_39572[(2)]);
var state_39572__$1 = state_39572;
var statearr_39578_39611 = state_39572__$1;
(statearr_39578_39611[(2)] = inst_39568);

(statearr_39578_39611[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39573 === (13))){
var inst_39561 = cljs.core.async.close_BANG_.call(null,out);
var state_39572__$1 = state_39572;
var statearr_39579_39612 = state_39572__$1;
(statearr_39579_39612[(2)] = inst_39561);

(statearr_39579_39612[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39573 === (6))){
var state_39572__$1 = state_39572;
var statearr_39580_39613 = state_39572__$1;
(statearr_39580_39613[(2)] = null);

(statearr_39580_39613[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39573 === (3))){
var inst_39570 = (state_39572[(2)]);
var state_39572__$1 = state_39572;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39572__$1,inst_39570);
} else {
if((state_val_39573 === (12))){
var inst_39558 = (state_39572[(8)]);
var inst_39558__$1 = (state_39572[(2)]);
var inst_39559 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_39558__$1);
var state_39572__$1 = (function (){var statearr_39581 = state_39572;
(statearr_39581[(8)] = inst_39558__$1);

return statearr_39581;
})();
if(cljs.core.truth_(inst_39559)){
var statearr_39582_39614 = state_39572__$1;
(statearr_39582_39614[(1)] = (13));

} else {
var statearr_39583_39615 = state_39572__$1;
(statearr_39583_39615[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39573 === (2))){
var inst_39535 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_39536 = (0);
var state_39572__$1 = (function (){var statearr_39584 = state_39572;
(statearr_39584[(9)] = inst_39535);

(statearr_39584[(7)] = inst_39536);

return statearr_39584;
})();
var statearr_39585_39616 = state_39572__$1;
(statearr_39585_39616[(2)] = null);

(statearr_39585_39616[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39573 === (11))){
var inst_39536 = (state_39572[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_39572,(10),Object,null,(9));
var inst_39545 = chs__$1.call(null,inst_39536);
var inst_39546 = done.call(null,inst_39536);
var inst_39547 = cljs.core.async.take_BANG_.call(null,inst_39545,inst_39546);
var state_39572__$1 = state_39572;
var statearr_39586_39617 = state_39572__$1;
(statearr_39586_39617[(2)] = inst_39547);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39572__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39573 === (9))){
var inst_39536 = (state_39572[(7)]);
var inst_39549 = (state_39572[(2)]);
var inst_39550 = (inst_39536 + (1));
var inst_39536__$1 = inst_39550;
var state_39572__$1 = (function (){var statearr_39587 = state_39572;
(statearr_39587[(7)] = inst_39536__$1);

(statearr_39587[(10)] = inst_39549);

return statearr_39587;
})();
var statearr_39588_39618 = state_39572__$1;
(statearr_39588_39618[(2)] = null);

(statearr_39588_39618[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39573 === (5))){
var inst_39556 = (state_39572[(2)]);
var state_39572__$1 = (function (){var statearr_39589 = state_39572;
(statearr_39589[(11)] = inst_39556);

return statearr_39589;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39572__$1,(12),dchan);
} else {
if((state_val_39573 === (14))){
var inst_39558 = (state_39572[(8)]);
var inst_39563 = cljs.core.apply.call(null,f,inst_39558);
var state_39572__$1 = state_39572;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39572__$1,(16),out,inst_39563);
} else {
if((state_val_39573 === (16))){
var inst_39565 = (state_39572[(2)]);
var state_39572__$1 = (function (){var statearr_39590 = state_39572;
(statearr_39590[(12)] = inst_39565);

return statearr_39590;
})();
var statearr_39591_39619 = state_39572__$1;
(statearr_39591_39619[(2)] = null);

(statearr_39591_39619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39573 === (10))){
var inst_39540 = (state_39572[(2)]);
var inst_39541 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_39572__$1 = (function (){var statearr_39592 = state_39572;
(statearr_39592[(13)] = inst_39540);

return statearr_39592;
})();
var statearr_39593_39620 = state_39572__$1;
(statearr_39593_39620[(2)] = inst_39541);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39572__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39573 === (8))){
var inst_39554 = (state_39572[(2)]);
var state_39572__$1 = state_39572;
var statearr_39594_39621 = state_39572__$1;
(statearr_39594_39621[(2)] = inst_39554);

(statearr_39594_39621[(1)] = (5));


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
});})(c__10448__auto___39606,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10427__auto__,c__10448__auto___39606,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10428__auto__ = null;
var cljs$core$async$state_machine__10428__auto____0 = (function (){
var statearr_39598 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39598[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_39598[(1)] = (1));

return statearr_39598;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_39572){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_39572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e39599){if((e39599 instanceof Object)){
var ex__10431__auto__ = e39599;
var statearr_39600_39622 = state_39572;
(statearr_39600_39622[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39623 = state_39572;
state_39572 = G__39623;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_39572){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_39572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___39606,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10450__auto__ = (function (){var statearr_39601 = f__10449__auto__.call(null);
(statearr_39601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___39606);

return statearr_39601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___39606,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args39625 = [];
var len__9158__auto___39681 = arguments.length;
var i__9159__auto___39682 = (0);
while(true){
if((i__9159__auto___39682 < len__9158__auto___39681)){
args39625.push((arguments[i__9159__auto___39682]));

var G__39683 = (i__9159__auto___39682 + (1));
i__9159__auto___39682 = G__39683;
continue;
} else {
}
break;
}

var G__39627 = args39625.length;
switch (G__39627) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39625.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10448__auto___39685 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___39685,out){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___39685,out){
return (function (state_39657){
var state_val_39658 = (state_39657[(1)]);
if((state_val_39658 === (7))){
var inst_39637 = (state_39657[(7)]);
var inst_39636 = (state_39657[(8)]);
var inst_39636__$1 = (state_39657[(2)]);
var inst_39637__$1 = cljs.core.nth.call(null,inst_39636__$1,(0),null);
var inst_39638 = cljs.core.nth.call(null,inst_39636__$1,(1),null);
var inst_39639 = (inst_39637__$1 == null);
var state_39657__$1 = (function (){var statearr_39659 = state_39657;
(statearr_39659[(7)] = inst_39637__$1);

(statearr_39659[(9)] = inst_39638);

(statearr_39659[(8)] = inst_39636__$1);

return statearr_39659;
})();
if(cljs.core.truth_(inst_39639)){
var statearr_39660_39686 = state_39657__$1;
(statearr_39660_39686[(1)] = (8));

} else {
var statearr_39661_39687 = state_39657__$1;
(statearr_39661_39687[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39658 === (1))){
var inst_39628 = cljs.core.vec.call(null,chs);
var inst_39629 = inst_39628;
var state_39657__$1 = (function (){var statearr_39662 = state_39657;
(statearr_39662[(10)] = inst_39629);

return statearr_39662;
})();
var statearr_39663_39688 = state_39657__$1;
(statearr_39663_39688[(2)] = null);

(statearr_39663_39688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39658 === (4))){
var inst_39629 = (state_39657[(10)]);
var state_39657__$1 = state_39657;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39657__$1,(7),inst_39629);
} else {
if((state_val_39658 === (6))){
var inst_39653 = (state_39657[(2)]);
var state_39657__$1 = state_39657;
var statearr_39664_39689 = state_39657__$1;
(statearr_39664_39689[(2)] = inst_39653);

(statearr_39664_39689[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39658 === (3))){
var inst_39655 = (state_39657[(2)]);
var state_39657__$1 = state_39657;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39657__$1,inst_39655);
} else {
if((state_val_39658 === (2))){
var inst_39629 = (state_39657[(10)]);
var inst_39631 = cljs.core.count.call(null,inst_39629);
var inst_39632 = (inst_39631 > (0));
var state_39657__$1 = state_39657;
if(cljs.core.truth_(inst_39632)){
var statearr_39666_39690 = state_39657__$1;
(statearr_39666_39690[(1)] = (4));

} else {
var statearr_39667_39691 = state_39657__$1;
(statearr_39667_39691[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39658 === (11))){
var inst_39629 = (state_39657[(10)]);
var inst_39646 = (state_39657[(2)]);
var tmp39665 = inst_39629;
var inst_39629__$1 = tmp39665;
var state_39657__$1 = (function (){var statearr_39668 = state_39657;
(statearr_39668[(11)] = inst_39646);

(statearr_39668[(10)] = inst_39629__$1);

return statearr_39668;
})();
var statearr_39669_39692 = state_39657__$1;
(statearr_39669_39692[(2)] = null);

(statearr_39669_39692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39658 === (9))){
var inst_39637 = (state_39657[(7)]);
var state_39657__$1 = state_39657;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39657__$1,(11),out,inst_39637);
} else {
if((state_val_39658 === (5))){
var inst_39651 = cljs.core.async.close_BANG_.call(null,out);
var state_39657__$1 = state_39657;
var statearr_39670_39693 = state_39657__$1;
(statearr_39670_39693[(2)] = inst_39651);

(statearr_39670_39693[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39658 === (10))){
var inst_39649 = (state_39657[(2)]);
var state_39657__$1 = state_39657;
var statearr_39671_39694 = state_39657__$1;
(statearr_39671_39694[(2)] = inst_39649);

(statearr_39671_39694[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39658 === (8))){
var inst_39637 = (state_39657[(7)]);
var inst_39638 = (state_39657[(9)]);
var inst_39636 = (state_39657[(8)]);
var inst_39629 = (state_39657[(10)]);
var inst_39641 = (function (){var cs = inst_39629;
var vec__39634 = inst_39636;
var v = inst_39637;
var c = inst_39638;
return ((function (cs,vec__39634,v,c,inst_39637,inst_39638,inst_39636,inst_39629,state_val_39658,c__10448__auto___39685,out){
return (function (p1__39624_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__39624_SHARP_);
});
;})(cs,vec__39634,v,c,inst_39637,inst_39638,inst_39636,inst_39629,state_val_39658,c__10448__auto___39685,out))
})();
var inst_39642 = cljs.core.filterv.call(null,inst_39641,inst_39629);
var inst_39629__$1 = inst_39642;
var state_39657__$1 = (function (){var statearr_39672 = state_39657;
(statearr_39672[(10)] = inst_39629__$1);

return statearr_39672;
})();
var statearr_39673_39695 = state_39657__$1;
(statearr_39673_39695[(2)] = null);

(statearr_39673_39695[(1)] = (2));


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
});})(c__10448__auto___39685,out))
;
return ((function (switch__10427__auto__,c__10448__auto___39685,out){
return (function() {
var cljs$core$async$state_machine__10428__auto__ = null;
var cljs$core$async$state_machine__10428__auto____0 = (function (){
var statearr_39677 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39677[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_39677[(1)] = (1));

return statearr_39677;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_39657){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_39657);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e39678){if((e39678 instanceof Object)){
var ex__10431__auto__ = e39678;
var statearr_39679_39696 = state_39657;
(statearr_39679_39696[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39657);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39697 = state_39657;
state_39657 = G__39697;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_39657){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_39657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___39685,out))
})();
var state__10450__auto__ = (function (){var statearr_39680 = f__10449__auto__.call(null);
(statearr_39680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___39685);

return statearr_39680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___39685,out))
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
var args39698 = [];
var len__9158__auto___39747 = arguments.length;
var i__9159__auto___39748 = (0);
while(true){
if((i__9159__auto___39748 < len__9158__auto___39747)){
args39698.push((arguments[i__9159__auto___39748]));

var G__39749 = (i__9159__auto___39748 + (1));
i__9159__auto___39748 = G__39749;
continue;
} else {
}
break;
}

var G__39700 = args39698.length;
switch (G__39700) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39698.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10448__auto___39751 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___39751,out){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___39751,out){
return (function (state_39724){
var state_val_39725 = (state_39724[(1)]);
if((state_val_39725 === (7))){
var inst_39706 = (state_39724[(7)]);
var inst_39706__$1 = (state_39724[(2)]);
var inst_39707 = (inst_39706__$1 == null);
var inst_39708 = cljs.core.not.call(null,inst_39707);
var state_39724__$1 = (function (){var statearr_39726 = state_39724;
(statearr_39726[(7)] = inst_39706__$1);

return statearr_39726;
})();
if(inst_39708){
var statearr_39727_39752 = state_39724__$1;
(statearr_39727_39752[(1)] = (8));

} else {
var statearr_39728_39753 = state_39724__$1;
(statearr_39728_39753[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39725 === (1))){
var inst_39701 = (0);
var state_39724__$1 = (function (){var statearr_39729 = state_39724;
(statearr_39729[(8)] = inst_39701);

return statearr_39729;
})();
var statearr_39730_39754 = state_39724__$1;
(statearr_39730_39754[(2)] = null);

(statearr_39730_39754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39725 === (4))){
var state_39724__$1 = state_39724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39724__$1,(7),ch);
} else {
if((state_val_39725 === (6))){
var inst_39719 = (state_39724[(2)]);
var state_39724__$1 = state_39724;
var statearr_39731_39755 = state_39724__$1;
(statearr_39731_39755[(2)] = inst_39719);

(statearr_39731_39755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39725 === (3))){
var inst_39721 = (state_39724[(2)]);
var inst_39722 = cljs.core.async.close_BANG_.call(null,out);
var state_39724__$1 = (function (){var statearr_39732 = state_39724;
(statearr_39732[(9)] = inst_39721);

return statearr_39732;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39724__$1,inst_39722);
} else {
if((state_val_39725 === (2))){
var inst_39701 = (state_39724[(8)]);
var inst_39703 = (inst_39701 < n);
var state_39724__$1 = state_39724;
if(cljs.core.truth_(inst_39703)){
var statearr_39733_39756 = state_39724__$1;
(statearr_39733_39756[(1)] = (4));

} else {
var statearr_39734_39757 = state_39724__$1;
(statearr_39734_39757[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39725 === (11))){
var inst_39701 = (state_39724[(8)]);
var inst_39711 = (state_39724[(2)]);
var inst_39712 = (inst_39701 + (1));
var inst_39701__$1 = inst_39712;
var state_39724__$1 = (function (){var statearr_39735 = state_39724;
(statearr_39735[(10)] = inst_39711);

(statearr_39735[(8)] = inst_39701__$1);

return statearr_39735;
})();
var statearr_39736_39758 = state_39724__$1;
(statearr_39736_39758[(2)] = null);

(statearr_39736_39758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39725 === (9))){
var state_39724__$1 = state_39724;
var statearr_39737_39759 = state_39724__$1;
(statearr_39737_39759[(2)] = null);

(statearr_39737_39759[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39725 === (5))){
var state_39724__$1 = state_39724;
var statearr_39738_39760 = state_39724__$1;
(statearr_39738_39760[(2)] = null);

(statearr_39738_39760[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39725 === (10))){
var inst_39716 = (state_39724[(2)]);
var state_39724__$1 = state_39724;
var statearr_39739_39761 = state_39724__$1;
(statearr_39739_39761[(2)] = inst_39716);

(statearr_39739_39761[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39725 === (8))){
var inst_39706 = (state_39724[(7)]);
var state_39724__$1 = state_39724;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39724__$1,(11),out,inst_39706);
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
});})(c__10448__auto___39751,out))
;
return ((function (switch__10427__auto__,c__10448__auto___39751,out){
return (function() {
var cljs$core$async$state_machine__10428__auto__ = null;
var cljs$core$async$state_machine__10428__auto____0 = (function (){
var statearr_39743 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39743[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_39743[(1)] = (1));

return statearr_39743;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_39724){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_39724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e39744){if((e39744 instanceof Object)){
var ex__10431__auto__ = e39744;
var statearr_39745_39762 = state_39724;
(statearr_39745_39762[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39763 = state_39724;
state_39724 = G__39763;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_39724){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_39724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___39751,out))
})();
var state__10450__auto__ = (function (){var statearr_39746 = f__10449__auto__.call(null);
(statearr_39746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___39751);

return statearr_39746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___39751,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async39771 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39771 = (function (map_LT_,f,ch,meta39772){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta39772 = meta39772;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39773,meta39772__$1){
var self__ = this;
var _39773__$1 = this;
return (new cljs.core.async.t_cljs$core$async39771(self__.map_LT_,self__.f,self__.ch,meta39772__$1));
});

cljs.core.async.t_cljs$core$async39771.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39773){
var self__ = this;
var _39773__$1 = this;
return self__.meta39772;
});

cljs.core.async.t_cljs$core$async39771.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async39771.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39771.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39771.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async39771.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async39774 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39774 = (function (map_LT_,f,ch,meta39772,_,fn1,meta39775){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta39772 = meta39772;
this._ = _;
this.fn1 = fn1;
this.meta39775 = meta39775;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_39776,meta39775__$1){
var self__ = this;
var _39776__$1 = this;
return (new cljs.core.async.t_cljs$core$async39774(self__.map_LT_,self__.f,self__.ch,self__.meta39772,self__._,self__.fn1,meta39775__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async39774.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_39776){
var self__ = this;
var _39776__$1 = this;
return self__.meta39775;
});})(___$1))
;

cljs.core.async.t_cljs$core$async39774.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async39774.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async39774.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async39774.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__39764_SHARP_){
return f1.call(null,(((p1__39764_SHARP_ == null))?null:self__.f.call(null,p1__39764_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async39774.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39772","meta39772",1568449344,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async39771","cljs.core.async/t_cljs$core$async39771",853159149,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta39775","meta39775",279653307,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async39774.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39774.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39774";

cljs.core.async.t_cljs$core$async39774.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8698__auto__,writer__8699__auto__,opt__8700__auto__){
return cljs.core._write.call(null,writer__8699__auto__,"cljs.core.async/t_cljs$core$async39774");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async39774 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39774(map_LT___$1,f__$1,ch__$1,meta39772__$1,___$2,fn1__$1,meta39775){
return (new cljs.core.async.t_cljs$core$async39774(map_LT___$1,f__$1,ch__$1,meta39772__$1,___$2,fn1__$1,meta39775));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async39774(self__.map_LT_,self__.f,self__.ch,self__.meta39772,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async39771.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async39771.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async39771.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39772","meta39772",1568449344,null)], null);
});

cljs.core.async.t_cljs$core$async39771.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39771.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39771";

cljs.core.async.t_cljs$core$async39771.cljs$lang$ctorPrWriter = (function (this__8698__auto__,writer__8699__auto__,opt__8700__auto__){
return cljs.core._write.call(null,writer__8699__auto__,"cljs.core.async/t_cljs$core$async39771");
});

cljs.core.async.__GT_t_cljs$core$async39771 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39771(map_LT___$1,f__$1,ch__$1,meta39772){
return (new cljs.core.async.t_cljs$core$async39771(map_LT___$1,f__$1,ch__$1,meta39772));
});

}

return (new cljs.core.async.t_cljs$core$async39771(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async39780 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39780 = (function (map_GT_,f,ch,meta39781){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta39781 = meta39781;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39782,meta39781__$1){
var self__ = this;
var _39782__$1 = this;
return (new cljs.core.async.t_cljs$core$async39780(self__.map_GT_,self__.f,self__.ch,meta39781__$1));
});

cljs.core.async.t_cljs$core$async39780.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39782){
var self__ = this;
var _39782__$1 = this;
return self__.meta39781;
});

cljs.core.async.t_cljs$core$async39780.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async39780.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39780.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async39780.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async39780.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async39780.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async39780.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39781","meta39781",-743408640,null)], null);
});

cljs.core.async.t_cljs$core$async39780.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39780.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39780";

cljs.core.async.t_cljs$core$async39780.cljs$lang$ctorPrWriter = (function (this__8698__auto__,writer__8699__auto__,opt__8700__auto__){
return cljs.core._write.call(null,writer__8699__auto__,"cljs.core.async/t_cljs$core$async39780");
});

cljs.core.async.__GT_t_cljs$core$async39780 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async39780(map_GT___$1,f__$1,ch__$1,meta39781){
return (new cljs.core.async.t_cljs$core$async39780(map_GT___$1,f__$1,ch__$1,meta39781));
});

}

return (new cljs.core.async.t_cljs$core$async39780(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async39786 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39786 = (function (filter_GT_,p,ch,meta39787){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta39787 = meta39787;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39788,meta39787__$1){
var self__ = this;
var _39788__$1 = this;
return (new cljs.core.async.t_cljs$core$async39786(self__.filter_GT_,self__.p,self__.ch,meta39787__$1));
});

cljs.core.async.t_cljs$core$async39786.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39788){
var self__ = this;
var _39788__$1 = this;
return self__.meta39787;
});

cljs.core.async.t_cljs$core$async39786.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async39786.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39786.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39786.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async39786.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async39786.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async39786.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async39786.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39787","meta39787",-49402639,null)], null);
});

cljs.core.async.t_cljs$core$async39786.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39786.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39786";

cljs.core.async.t_cljs$core$async39786.cljs$lang$ctorPrWriter = (function (this__8698__auto__,writer__8699__auto__,opt__8700__auto__){
return cljs.core._write.call(null,writer__8699__auto__,"cljs.core.async/t_cljs$core$async39786");
});

cljs.core.async.__GT_t_cljs$core$async39786 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async39786(filter_GT___$1,p__$1,ch__$1,meta39787){
return (new cljs.core.async.t_cljs$core$async39786(filter_GT___$1,p__$1,ch__$1,meta39787));
});

}

return (new cljs.core.async.t_cljs$core$async39786(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args39789 = [];
var len__9158__auto___39833 = arguments.length;
var i__9159__auto___39834 = (0);
while(true){
if((i__9159__auto___39834 < len__9158__auto___39833)){
args39789.push((arguments[i__9159__auto___39834]));

var G__39835 = (i__9159__auto___39834 + (1));
i__9159__auto___39834 = G__39835;
continue;
} else {
}
break;
}

var G__39791 = args39789.length;
switch (G__39791) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39789.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10448__auto___39837 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___39837,out){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___39837,out){
return (function (state_39812){
var state_val_39813 = (state_39812[(1)]);
if((state_val_39813 === (7))){
var inst_39808 = (state_39812[(2)]);
var state_39812__$1 = state_39812;
var statearr_39814_39838 = state_39812__$1;
(statearr_39814_39838[(2)] = inst_39808);

(statearr_39814_39838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39813 === (1))){
var state_39812__$1 = state_39812;
var statearr_39815_39839 = state_39812__$1;
(statearr_39815_39839[(2)] = null);

(statearr_39815_39839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39813 === (4))){
var inst_39794 = (state_39812[(7)]);
var inst_39794__$1 = (state_39812[(2)]);
var inst_39795 = (inst_39794__$1 == null);
var state_39812__$1 = (function (){var statearr_39816 = state_39812;
(statearr_39816[(7)] = inst_39794__$1);

return statearr_39816;
})();
if(cljs.core.truth_(inst_39795)){
var statearr_39817_39840 = state_39812__$1;
(statearr_39817_39840[(1)] = (5));

} else {
var statearr_39818_39841 = state_39812__$1;
(statearr_39818_39841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39813 === (6))){
var inst_39794 = (state_39812[(7)]);
var inst_39799 = p.call(null,inst_39794);
var state_39812__$1 = state_39812;
if(cljs.core.truth_(inst_39799)){
var statearr_39819_39842 = state_39812__$1;
(statearr_39819_39842[(1)] = (8));

} else {
var statearr_39820_39843 = state_39812__$1;
(statearr_39820_39843[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39813 === (3))){
var inst_39810 = (state_39812[(2)]);
var state_39812__$1 = state_39812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39812__$1,inst_39810);
} else {
if((state_val_39813 === (2))){
var state_39812__$1 = state_39812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39812__$1,(4),ch);
} else {
if((state_val_39813 === (11))){
var inst_39802 = (state_39812[(2)]);
var state_39812__$1 = state_39812;
var statearr_39821_39844 = state_39812__$1;
(statearr_39821_39844[(2)] = inst_39802);

(statearr_39821_39844[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39813 === (9))){
var state_39812__$1 = state_39812;
var statearr_39822_39845 = state_39812__$1;
(statearr_39822_39845[(2)] = null);

(statearr_39822_39845[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39813 === (5))){
var inst_39797 = cljs.core.async.close_BANG_.call(null,out);
var state_39812__$1 = state_39812;
var statearr_39823_39846 = state_39812__$1;
(statearr_39823_39846[(2)] = inst_39797);

(statearr_39823_39846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39813 === (10))){
var inst_39805 = (state_39812[(2)]);
var state_39812__$1 = (function (){var statearr_39824 = state_39812;
(statearr_39824[(8)] = inst_39805);

return statearr_39824;
})();
var statearr_39825_39847 = state_39812__$1;
(statearr_39825_39847[(2)] = null);

(statearr_39825_39847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39813 === (8))){
var inst_39794 = (state_39812[(7)]);
var state_39812__$1 = state_39812;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39812__$1,(11),out,inst_39794);
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
});})(c__10448__auto___39837,out))
;
return ((function (switch__10427__auto__,c__10448__auto___39837,out){
return (function() {
var cljs$core$async$state_machine__10428__auto__ = null;
var cljs$core$async$state_machine__10428__auto____0 = (function (){
var statearr_39829 = [null,null,null,null,null,null,null,null,null];
(statearr_39829[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_39829[(1)] = (1));

return statearr_39829;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_39812){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_39812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e39830){if((e39830 instanceof Object)){
var ex__10431__auto__ = e39830;
var statearr_39831_39848 = state_39812;
(statearr_39831_39848[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39849 = state_39812;
state_39812 = G__39849;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_39812){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_39812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___39837,out))
})();
var state__10450__auto__ = (function (){var statearr_39832 = f__10449__auto__.call(null);
(statearr_39832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___39837);

return statearr_39832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___39837,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args39850 = [];
var len__9158__auto___39853 = arguments.length;
var i__9159__auto___39854 = (0);
while(true){
if((i__9159__auto___39854 < len__9158__auto___39853)){
args39850.push((arguments[i__9159__auto___39854]));

var G__39855 = (i__9159__auto___39854 + (1));
i__9159__auto___39854 = G__39855;
continue;
} else {
}
break;
}

var G__39852 = args39850.length;
switch (G__39852) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39850.length)].join('')));

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
return (function (state_40022){
var state_val_40023 = (state_40022[(1)]);
if((state_val_40023 === (7))){
var inst_40018 = (state_40022[(2)]);
var state_40022__$1 = state_40022;
var statearr_40024_40065 = state_40022__$1;
(statearr_40024_40065[(2)] = inst_40018);

(statearr_40024_40065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40023 === (20))){
var inst_39988 = (state_40022[(7)]);
var inst_39999 = (state_40022[(2)]);
var inst_40000 = cljs.core.next.call(null,inst_39988);
var inst_39974 = inst_40000;
var inst_39975 = null;
var inst_39976 = (0);
var inst_39977 = (0);
var state_40022__$1 = (function (){var statearr_40025 = state_40022;
(statearr_40025[(8)] = inst_39975);

(statearr_40025[(9)] = inst_39999);

(statearr_40025[(10)] = inst_39976);

(statearr_40025[(11)] = inst_39977);

(statearr_40025[(12)] = inst_39974);

return statearr_40025;
})();
var statearr_40026_40066 = state_40022__$1;
(statearr_40026_40066[(2)] = null);

(statearr_40026_40066[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40023 === (1))){
var state_40022__$1 = state_40022;
var statearr_40027_40067 = state_40022__$1;
(statearr_40027_40067[(2)] = null);

(statearr_40027_40067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40023 === (4))){
var inst_39963 = (state_40022[(13)]);
var inst_39963__$1 = (state_40022[(2)]);
var inst_39964 = (inst_39963__$1 == null);
var state_40022__$1 = (function (){var statearr_40028 = state_40022;
(statearr_40028[(13)] = inst_39963__$1);

return statearr_40028;
})();
if(cljs.core.truth_(inst_39964)){
var statearr_40029_40068 = state_40022__$1;
(statearr_40029_40068[(1)] = (5));

} else {
var statearr_40030_40069 = state_40022__$1;
(statearr_40030_40069[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40023 === (15))){
var state_40022__$1 = state_40022;
var statearr_40034_40070 = state_40022__$1;
(statearr_40034_40070[(2)] = null);

(statearr_40034_40070[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40023 === (21))){
var state_40022__$1 = state_40022;
var statearr_40035_40071 = state_40022__$1;
(statearr_40035_40071[(2)] = null);

(statearr_40035_40071[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40023 === (13))){
var inst_39975 = (state_40022[(8)]);
var inst_39976 = (state_40022[(10)]);
var inst_39977 = (state_40022[(11)]);
var inst_39974 = (state_40022[(12)]);
var inst_39984 = (state_40022[(2)]);
var inst_39985 = (inst_39977 + (1));
var tmp40031 = inst_39975;
var tmp40032 = inst_39976;
var tmp40033 = inst_39974;
var inst_39974__$1 = tmp40033;
var inst_39975__$1 = tmp40031;
var inst_39976__$1 = tmp40032;
var inst_39977__$1 = inst_39985;
var state_40022__$1 = (function (){var statearr_40036 = state_40022;
(statearr_40036[(8)] = inst_39975__$1);

(statearr_40036[(10)] = inst_39976__$1);

(statearr_40036[(14)] = inst_39984);

(statearr_40036[(11)] = inst_39977__$1);

(statearr_40036[(12)] = inst_39974__$1);

return statearr_40036;
})();
var statearr_40037_40072 = state_40022__$1;
(statearr_40037_40072[(2)] = null);

(statearr_40037_40072[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40023 === (22))){
var state_40022__$1 = state_40022;
var statearr_40038_40073 = state_40022__$1;
(statearr_40038_40073[(2)] = null);

(statearr_40038_40073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40023 === (6))){
var inst_39963 = (state_40022[(13)]);
var inst_39972 = f.call(null,inst_39963);
var inst_39973 = cljs.core.seq.call(null,inst_39972);
var inst_39974 = inst_39973;
var inst_39975 = null;
var inst_39976 = (0);
var inst_39977 = (0);
var state_40022__$1 = (function (){var statearr_40039 = state_40022;
(statearr_40039[(8)] = inst_39975);

(statearr_40039[(10)] = inst_39976);

(statearr_40039[(11)] = inst_39977);

(statearr_40039[(12)] = inst_39974);

return statearr_40039;
})();
var statearr_40040_40074 = state_40022__$1;
(statearr_40040_40074[(2)] = null);

(statearr_40040_40074[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40023 === (17))){
var inst_39988 = (state_40022[(7)]);
var inst_39992 = cljs.core.chunk_first.call(null,inst_39988);
var inst_39993 = cljs.core.chunk_rest.call(null,inst_39988);
var inst_39994 = cljs.core.count.call(null,inst_39992);
var inst_39974 = inst_39993;
var inst_39975 = inst_39992;
var inst_39976 = inst_39994;
var inst_39977 = (0);
var state_40022__$1 = (function (){var statearr_40041 = state_40022;
(statearr_40041[(8)] = inst_39975);

(statearr_40041[(10)] = inst_39976);

(statearr_40041[(11)] = inst_39977);

(statearr_40041[(12)] = inst_39974);

return statearr_40041;
})();
var statearr_40042_40075 = state_40022__$1;
(statearr_40042_40075[(2)] = null);

(statearr_40042_40075[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40023 === (3))){
var inst_40020 = (state_40022[(2)]);
var state_40022__$1 = state_40022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40022__$1,inst_40020);
} else {
if((state_val_40023 === (12))){
var inst_40008 = (state_40022[(2)]);
var state_40022__$1 = state_40022;
var statearr_40043_40076 = state_40022__$1;
(statearr_40043_40076[(2)] = inst_40008);

(statearr_40043_40076[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40023 === (2))){
var state_40022__$1 = state_40022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40022__$1,(4),in$);
} else {
if((state_val_40023 === (23))){
var inst_40016 = (state_40022[(2)]);
var state_40022__$1 = state_40022;
var statearr_40044_40077 = state_40022__$1;
(statearr_40044_40077[(2)] = inst_40016);

(statearr_40044_40077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40023 === (19))){
var inst_40003 = (state_40022[(2)]);
var state_40022__$1 = state_40022;
var statearr_40045_40078 = state_40022__$1;
(statearr_40045_40078[(2)] = inst_40003);

(statearr_40045_40078[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40023 === (11))){
var inst_39988 = (state_40022[(7)]);
var inst_39974 = (state_40022[(12)]);
var inst_39988__$1 = cljs.core.seq.call(null,inst_39974);
var state_40022__$1 = (function (){var statearr_40046 = state_40022;
(statearr_40046[(7)] = inst_39988__$1);

return statearr_40046;
})();
if(inst_39988__$1){
var statearr_40047_40079 = state_40022__$1;
(statearr_40047_40079[(1)] = (14));

} else {
var statearr_40048_40080 = state_40022__$1;
(statearr_40048_40080[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40023 === (9))){
var inst_40010 = (state_40022[(2)]);
var inst_40011 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_40022__$1 = (function (){var statearr_40049 = state_40022;
(statearr_40049[(15)] = inst_40010);

return statearr_40049;
})();
if(cljs.core.truth_(inst_40011)){
var statearr_40050_40081 = state_40022__$1;
(statearr_40050_40081[(1)] = (21));

} else {
var statearr_40051_40082 = state_40022__$1;
(statearr_40051_40082[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40023 === (5))){
var inst_39966 = cljs.core.async.close_BANG_.call(null,out);
var state_40022__$1 = state_40022;
var statearr_40052_40083 = state_40022__$1;
(statearr_40052_40083[(2)] = inst_39966);

(statearr_40052_40083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40023 === (14))){
var inst_39988 = (state_40022[(7)]);
var inst_39990 = cljs.core.chunked_seq_QMARK_.call(null,inst_39988);
var state_40022__$1 = state_40022;
if(inst_39990){
var statearr_40053_40084 = state_40022__$1;
(statearr_40053_40084[(1)] = (17));

} else {
var statearr_40054_40085 = state_40022__$1;
(statearr_40054_40085[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40023 === (16))){
var inst_40006 = (state_40022[(2)]);
var state_40022__$1 = state_40022;
var statearr_40055_40086 = state_40022__$1;
(statearr_40055_40086[(2)] = inst_40006);

(statearr_40055_40086[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40023 === (10))){
var inst_39975 = (state_40022[(8)]);
var inst_39977 = (state_40022[(11)]);
var inst_39982 = cljs.core._nth.call(null,inst_39975,inst_39977);
var state_40022__$1 = state_40022;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40022__$1,(13),out,inst_39982);
} else {
if((state_val_40023 === (18))){
var inst_39988 = (state_40022[(7)]);
var inst_39997 = cljs.core.first.call(null,inst_39988);
var state_40022__$1 = state_40022;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40022__$1,(20),out,inst_39997);
} else {
if((state_val_40023 === (8))){
var inst_39976 = (state_40022[(10)]);
var inst_39977 = (state_40022[(11)]);
var inst_39979 = (inst_39977 < inst_39976);
var inst_39980 = inst_39979;
var state_40022__$1 = state_40022;
if(cljs.core.truth_(inst_39980)){
var statearr_40056_40087 = state_40022__$1;
(statearr_40056_40087[(1)] = (10));

} else {
var statearr_40057_40088 = state_40022__$1;
(statearr_40057_40088[(1)] = (11));

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
var statearr_40061 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40061[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10428__auto__);

(statearr_40061[(1)] = (1));

return statearr_40061;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10428__auto____1 = (function (state_40022){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_40022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e40062){if((e40062 instanceof Object)){
var ex__10431__auto__ = e40062;
var statearr_40063_40089 = state_40022;
(statearr_40063_40089[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40090 = state_40022;
state_40022 = G__40090;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10428__auto__ = function(state_40022){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10428__auto____1.call(this,state_40022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10428__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10428__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto__))
})();
var state__10450__auto__ = (function (){var statearr_40064 = f__10449__auto__.call(null);
(statearr_40064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto__);

return statearr_40064;
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
var args40091 = [];
var len__9158__auto___40094 = arguments.length;
var i__9159__auto___40095 = (0);
while(true){
if((i__9159__auto___40095 < len__9158__auto___40094)){
args40091.push((arguments[i__9159__auto___40095]));

var G__40096 = (i__9159__auto___40095 + (1));
i__9159__auto___40095 = G__40096;
continue;
} else {
}
break;
}

var G__40093 = args40091.length;
switch (G__40093) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40091.length)].join('')));

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
var args40098 = [];
var len__9158__auto___40101 = arguments.length;
var i__9159__auto___40102 = (0);
while(true){
if((i__9159__auto___40102 < len__9158__auto___40101)){
args40098.push((arguments[i__9159__auto___40102]));

var G__40103 = (i__9159__auto___40102 + (1));
i__9159__auto___40102 = G__40103;
continue;
} else {
}
break;
}

var G__40100 = args40098.length;
switch (G__40100) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40098.length)].join('')));

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
var args40105 = [];
var len__9158__auto___40156 = arguments.length;
var i__9159__auto___40157 = (0);
while(true){
if((i__9159__auto___40157 < len__9158__auto___40156)){
args40105.push((arguments[i__9159__auto___40157]));

var G__40158 = (i__9159__auto___40157 + (1));
i__9159__auto___40157 = G__40158;
continue;
} else {
}
break;
}

var G__40107 = args40105.length;
switch (G__40107) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40105.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10448__auto___40160 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___40160,out){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___40160,out){
return (function (state_40131){
var state_val_40132 = (state_40131[(1)]);
if((state_val_40132 === (7))){
var inst_40126 = (state_40131[(2)]);
var state_40131__$1 = state_40131;
var statearr_40133_40161 = state_40131__$1;
(statearr_40133_40161[(2)] = inst_40126);

(statearr_40133_40161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40132 === (1))){
var inst_40108 = null;
var state_40131__$1 = (function (){var statearr_40134 = state_40131;
(statearr_40134[(7)] = inst_40108);

return statearr_40134;
})();
var statearr_40135_40162 = state_40131__$1;
(statearr_40135_40162[(2)] = null);

(statearr_40135_40162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40132 === (4))){
var inst_40111 = (state_40131[(8)]);
var inst_40111__$1 = (state_40131[(2)]);
var inst_40112 = (inst_40111__$1 == null);
var inst_40113 = cljs.core.not.call(null,inst_40112);
var state_40131__$1 = (function (){var statearr_40136 = state_40131;
(statearr_40136[(8)] = inst_40111__$1);

return statearr_40136;
})();
if(inst_40113){
var statearr_40137_40163 = state_40131__$1;
(statearr_40137_40163[(1)] = (5));

} else {
var statearr_40138_40164 = state_40131__$1;
(statearr_40138_40164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40132 === (6))){
var state_40131__$1 = state_40131;
var statearr_40139_40165 = state_40131__$1;
(statearr_40139_40165[(2)] = null);

(statearr_40139_40165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40132 === (3))){
var inst_40128 = (state_40131[(2)]);
var inst_40129 = cljs.core.async.close_BANG_.call(null,out);
var state_40131__$1 = (function (){var statearr_40140 = state_40131;
(statearr_40140[(9)] = inst_40128);

return statearr_40140;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40131__$1,inst_40129);
} else {
if((state_val_40132 === (2))){
var state_40131__$1 = state_40131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40131__$1,(4),ch);
} else {
if((state_val_40132 === (11))){
var inst_40111 = (state_40131[(8)]);
var inst_40120 = (state_40131[(2)]);
var inst_40108 = inst_40111;
var state_40131__$1 = (function (){var statearr_40141 = state_40131;
(statearr_40141[(10)] = inst_40120);

(statearr_40141[(7)] = inst_40108);

return statearr_40141;
})();
var statearr_40142_40166 = state_40131__$1;
(statearr_40142_40166[(2)] = null);

(statearr_40142_40166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40132 === (9))){
var inst_40111 = (state_40131[(8)]);
var state_40131__$1 = state_40131;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40131__$1,(11),out,inst_40111);
} else {
if((state_val_40132 === (5))){
var inst_40111 = (state_40131[(8)]);
var inst_40108 = (state_40131[(7)]);
var inst_40115 = cljs.core._EQ_.call(null,inst_40111,inst_40108);
var state_40131__$1 = state_40131;
if(inst_40115){
var statearr_40144_40167 = state_40131__$1;
(statearr_40144_40167[(1)] = (8));

} else {
var statearr_40145_40168 = state_40131__$1;
(statearr_40145_40168[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40132 === (10))){
var inst_40123 = (state_40131[(2)]);
var state_40131__$1 = state_40131;
var statearr_40146_40169 = state_40131__$1;
(statearr_40146_40169[(2)] = inst_40123);

(statearr_40146_40169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40132 === (8))){
var inst_40108 = (state_40131[(7)]);
var tmp40143 = inst_40108;
var inst_40108__$1 = tmp40143;
var state_40131__$1 = (function (){var statearr_40147 = state_40131;
(statearr_40147[(7)] = inst_40108__$1);

return statearr_40147;
})();
var statearr_40148_40170 = state_40131__$1;
(statearr_40148_40170[(2)] = null);

(statearr_40148_40170[(1)] = (2));


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
});})(c__10448__auto___40160,out))
;
return ((function (switch__10427__auto__,c__10448__auto___40160,out){
return (function() {
var cljs$core$async$state_machine__10428__auto__ = null;
var cljs$core$async$state_machine__10428__auto____0 = (function (){
var statearr_40152 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40152[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_40152[(1)] = (1));

return statearr_40152;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_40131){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_40131);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e40153){if((e40153 instanceof Object)){
var ex__10431__auto__ = e40153;
var statearr_40154_40171 = state_40131;
(statearr_40154_40171[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40153;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40172 = state_40131;
state_40131 = G__40172;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_40131){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_40131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___40160,out))
})();
var state__10450__auto__ = (function (){var statearr_40155 = f__10449__auto__.call(null);
(statearr_40155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___40160);

return statearr_40155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___40160,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args40173 = [];
var len__9158__auto___40243 = arguments.length;
var i__9159__auto___40244 = (0);
while(true){
if((i__9159__auto___40244 < len__9158__auto___40243)){
args40173.push((arguments[i__9159__auto___40244]));

var G__40245 = (i__9159__auto___40244 + (1));
i__9159__auto___40244 = G__40245;
continue;
} else {
}
break;
}

var G__40175 = args40173.length;
switch (G__40175) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40173.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10448__auto___40247 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___40247,out){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___40247,out){
return (function (state_40213){
var state_val_40214 = (state_40213[(1)]);
if((state_val_40214 === (7))){
var inst_40209 = (state_40213[(2)]);
var state_40213__$1 = state_40213;
var statearr_40215_40248 = state_40213__$1;
(statearr_40215_40248[(2)] = inst_40209);

(statearr_40215_40248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40214 === (1))){
var inst_40176 = (new Array(n));
var inst_40177 = inst_40176;
var inst_40178 = (0);
var state_40213__$1 = (function (){var statearr_40216 = state_40213;
(statearr_40216[(7)] = inst_40177);

(statearr_40216[(8)] = inst_40178);

return statearr_40216;
})();
var statearr_40217_40249 = state_40213__$1;
(statearr_40217_40249[(2)] = null);

(statearr_40217_40249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40214 === (4))){
var inst_40181 = (state_40213[(9)]);
var inst_40181__$1 = (state_40213[(2)]);
var inst_40182 = (inst_40181__$1 == null);
var inst_40183 = cljs.core.not.call(null,inst_40182);
var state_40213__$1 = (function (){var statearr_40218 = state_40213;
(statearr_40218[(9)] = inst_40181__$1);

return statearr_40218;
})();
if(inst_40183){
var statearr_40219_40250 = state_40213__$1;
(statearr_40219_40250[(1)] = (5));

} else {
var statearr_40220_40251 = state_40213__$1;
(statearr_40220_40251[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40214 === (15))){
var inst_40203 = (state_40213[(2)]);
var state_40213__$1 = state_40213;
var statearr_40221_40252 = state_40213__$1;
(statearr_40221_40252[(2)] = inst_40203);

(statearr_40221_40252[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40214 === (13))){
var state_40213__$1 = state_40213;
var statearr_40222_40253 = state_40213__$1;
(statearr_40222_40253[(2)] = null);

(statearr_40222_40253[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40214 === (6))){
var inst_40178 = (state_40213[(8)]);
var inst_40199 = (inst_40178 > (0));
var state_40213__$1 = state_40213;
if(cljs.core.truth_(inst_40199)){
var statearr_40223_40254 = state_40213__$1;
(statearr_40223_40254[(1)] = (12));

} else {
var statearr_40224_40255 = state_40213__$1;
(statearr_40224_40255[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40214 === (3))){
var inst_40211 = (state_40213[(2)]);
var state_40213__$1 = state_40213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40213__$1,inst_40211);
} else {
if((state_val_40214 === (12))){
var inst_40177 = (state_40213[(7)]);
var inst_40201 = cljs.core.vec.call(null,inst_40177);
var state_40213__$1 = state_40213;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40213__$1,(15),out,inst_40201);
} else {
if((state_val_40214 === (2))){
var state_40213__$1 = state_40213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40213__$1,(4),ch);
} else {
if((state_val_40214 === (11))){
var inst_40193 = (state_40213[(2)]);
var inst_40194 = (new Array(n));
var inst_40177 = inst_40194;
var inst_40178 = (0);
var state_40213__$1 = (function (){var statearr_40225 = state_40213;
(statearr_40225[(10)] = inst_40193);

(statearr_40225[(7)] = inst_40177);

(statearr_40225[(8)] = inst_40178);

return statearr_40225;
})();
var statearr_40226_40256 = state_40213__$1;
(statearr_40226_40256[(2)] = null);

(statearr_40226_40256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40214 === (9))){
var inst_40177 = (state_40213[(7)]);
var inst_40191 = cljs.core.vec.call(null,inst_40177);
var state_40213__$1 = state_40213;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40213__$1,(11),out,inst_40191);
} else {
if((state_val_40214 === (5))){
var inst_40181 = (state_40213[(9)]);
var inst_40186 = (state_40213[(11)]);
var inst_40177 = (state_40213[(7)]);
var inst_40178 = (state_40213[(8)]);
var inst_40185 = (inst_40177[inst_40178] = inst_40181);
var inst_40186__$1 = (inst_40178 + (1));
var inst_40187 = (inst_40186__$1 < n);
var state_40213__$1 = (function (){var statearr_40227 = state_40213;
(statearr_40227[(12)] = inst_40185);

(statearr_40227[(11)] = inst_40186__$1);

return statearr_40227;
})();
if(cljs.core.truth_(inst_40187)){
var statearr_40228_40257 = state_40213__$1;
(statearr_40228_40257[(1)] = (8));

} else {
var statearr_40229_40258 = state_40213__$1;
(statearr_40229_40258[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40214 === (14))){
var inst_40206 = (state_40213[(2)]);
var inst_40207 = cljs.core.async.close_BANG_.call(null,out);
var state_40213__$1 = (function (){var statearr_40231 = state_40213;
(statearr_40231[(13)] = inst_40206);

return statearr_40231;
})();
var statearr_40232_40259 = state_40213__$1;
(statearr_40232_40259[(2)] = inst_40207);

(statearr_40232_40259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40214 === (10))){
var inst_40197 = (state_40213[(2)]);
var state_40213__$1 = state_40213;
var statearr_40233_40260 = state_40213__$1;
(statearr_40233_40260[(2)] = inst_40197);

(statearr_40233_40260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40214 === (8))){
var inst_40186 = (state_40213[(11)]);
var inst_40177 = (state_40213[(7)]);
var tmp40230 = inst_40177;
var inst_40177__$1 = tmp40230;
var inst_40178 = inst_40186;
var state_40213__$1 = (function (){var statearr_40234 = state_40213;
(statearr_40234[(7)] = inst_40177__$1);

(statearr_40234[(8)] = inst_40178);

return statearr_40234;
})();
var statearr_40235_40261 = state_40213__$1;
(statearr_40235_40261[(2)] = null);

(statearr_40235_40261[(1)] = (2));


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
});})(c__10448__auto___40247,out))
;
return ((function (switch__10427__auto__,c__10448__auto___40247,out){
return (function() {
var cljs$core$async$state_machine__10428__auto__ = null;
var cljs$core$async$state_machine__10428__auto____0 = (function (){
var statearr_40239 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40239[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_40239[(1)] = (1));

return statearr_40239;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_40213){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_40213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e40240){if((e40240 instanceof Object)){
var ex__10431__auto__ = e40240;
var statearr_40241_40262 = state_40213;
(statearr_40241_40262[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40263 = state_40213;
state_40213 = G__40263;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_40213){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_40213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___40247,out))
})();
var state__10450__auto__ = (function (){var statearr_40242 = f__10449__auto__.call(null);
(statearr_40242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___40247);

return statearr_40242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___40247,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args40264 = [];
var len__9158__auto___40338 = arguments.length;
var i__9159__auto___40339 = (0);
while(true){
if((i__9159__auto___40339 < len__9158__auto___40338)){
args40264.push((arguments[i__9159__auto___40339]));

var G__40340 = (i__9159__auto___40339 + (1));
i__9159__auto___40339 = G__40340;
continue;
} else {
}
break;
}

var G__40266 = args40264.length;
switch (G__40266) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40264.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10448__auto___40342 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___40342,out){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___40342,out){
return (function (state_40308){
var state_val_40309 = (state_40308[(1)]);
if((state_val_40309 === (7))){
var inst_40304 = (state_40308[(2)]);
var state_40308__$1 = state_40308;
var statearr_40310_40343 = state_40308__$1;
(statearr_40310_40343[(2)] = inst_40304);

(statearr_40310_40343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40309 === (1))){
var inst_40267 = [];
var inst_40268 = inst_40267;
var inst_40269 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_40308__$1 = (function (){var statearr_40311 = state_40308;
(statearr_40311[(7)] = inst_40268);

(statearr_40311[(8)] = inst_40269);

return statearr_40311;
})();
var statearr_40312_40344 = state_40308__$1;
(statearr_40312_40344[(2)] = null);

(statearr_40312_40344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40309 === (4))){
var inst_40272 = (state_40308[(9)]);
var inst_40272__$1 = (state_40308[(2)]);
var inst_40273 = (inst_40272__$1 == null);
var inst_40274 = cljs.core.not.call(null,inst_40273);
var state_40308__$1 = (function (){var statearr_40313 = state_40308;
(statearr_40313[(9)] = inst_40272__$1);

return statearr_40313;
})();
if(inst_40274){
var statearr_40314_40345 = state_40308__$1;
(statearr_40314_40345[(1)] = (5));

} else {
var statearr_40315_40346 = state_40308__$1;
(statearr_40315_40346[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40309 === (15))){
var inst_40298 = (state_40308[(2)]);
var state_40308__$1 = state_40308;
var statearr_40316_40347 = state_40308__$1;
(statearr_40316_40347[(2)] = inst_40298);

(statearr_40316_40347[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40309 === (13))){
var state_40308__$1 = state_40308;
var statearr_40317_40348 = state_40308__$1;
(statearr_40317_40348[(2)] = null);

(statearr_40317_40348[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40309 === (6))){
var inst_40268 = (state_40308[(7)]);
var inst_40293 = inst_40268.length;
var inst_40294 = (inst_40293 > (0));
var state_40308__$1 = state_40308;
if(cljs.core.truth_(inst_40294)){
var statearr_40318_40349 = state_40308__$1;
(statearr_40318_40349[(1)] = (12));

} else {
var statearr_40319_40350 = state_40308__$1;
(statearr_40319_40350[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40309 === (3))){
var inst_40306 = (state_40308[(2)]);
var state_40308__$1 = state_40308;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40308__$1,inst_40306);
} else {
if((state_val_40309 === (12))){
var inst_40268 = (state_40308[(7)]);
var inst_40296 = cljs.core.vec.call(null,inst_40268);
var state_40308__$1 = state_40308;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40308__$1,(15),out,inst_40296);
} else {
if((state_val_40309 === (2))){
var state_40308__$1 = state_40308;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40308__$1,(4),ch);
} else {
if((state_val_40309 === (11))){
var inst_40272 = (state_40308[(9)]);
var inst_40276 = (state_40308[(10)]);
var inst_40286 = (state_40308[(2)]);
var inst_40287 = [];
var inst_40288 = inst_40287.push(inst_40272);
var inst_40268 = inst_40287;
var inst_40269 = inst_40276;
var state_40308__$1 = (function (){var statearr_40320 = state_40308;
(statearr_40320[(11)] = inst_40288);

(statearr_40320[(12)] = inst_40286);

(statearr_40320[(7)] = inst_40268);

(statearr_40320[(8)] = inst_40269);

return statearr_40320;
})();
var statearr_40321_40351 = state_40308__$1;
(statearr_40321_40351[(2)] = null);

(statearr_40321_40351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40309 === (9))){
var inst_40268 = (state_40308[(7)]);
var inst_40284 = cljs.core.vec.call(null,inst_40268);
var state_40308__$1 = state_40308;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40308__$1,(11),out,inst_40284);
} else {
if((state_val_40309 === (5))){
var inst_40272 = (state_40308[(9)]);
var inst_40269 = (state_40308[(8)]);
var inst_40276 = (state_40308[(10)]);
var inst_40276__$1 = f.call(null,inst_40272);
var inst_40277 = cljs.core._EQ_.call(null,inst_40276__$1,inst_40269);
var inst_40278 = cljs.core.keyword_identical_QMARK_.call(null,inst_40269,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_40279 = (inst_40277) || (inst_40278);
var state_40308__$1 = (function (){var statearr_40322 = state_40308;
(statearr_40322[(10)] = inst_40276__$1);

return statearr_40322;
})();
if(cljs.core.truth_(inst_40279)){
var statearr_40323_40352 = state_40308__$1;
(statearr_40323_40352[(1)] = (8));

} else {
var statearr_40324_40353 = state_40308__$1;
(statearr_40324_40353[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40309 === (14))){
var inst_40301 = (state_40308[(2)]);
var inst_40302 = cljs.core.async.close_BANG_.call(null,out);
var state_40308__$1 = (function (){var statearr_40326 = state_40308;
(statearr_40326[(13)] = inst_40301);

return statearr_40326;
})();
var statearr_40327_40354 = state_40308__$1;
(statearr_40327_40354[(2)] = inst_40302);

(statearr_40327_40354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40309 === (10))){
var inst_40291 = (state_40308[(2)]);
var state_40308__$1 = state_40308;
var statearr_40328_40355 = state_40308__$1;
(statearr_40328_40355[(2)] = inst_40291);

(statearr_40328_40355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40309 === (8))){
var inst_40272 = (state_40308[(9)]);
var inst_40268 = (state_40308[(7)]);
var inst_40276 = (state_40308[(10)]);
var inst_40281 = inst_40268.push(inst_40272);
var tmp40325 = inst_40268;
var inst_40268__$1 = tmp40325;
var inst_40269 = inst_40276;
var state_40308__$1 = (function (){var statearr_40329 = state_40308;
(statearr_40329[(7)] = inst_40268__$1);

(statearr_40329[(8)] = inst_40269);

(statearr_40329[(14)] = inst_40281);

return statearr_40329;
})();
var statearr_40330_40356 = state_40308__$1;
(statearr_40330_40356[(2)] = null);

(statearr_40330_40356[(1)] = (2));


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
});})(c__10448__auto___40342,out))
;
return ((function (switch__10427__auto__,c__10448__auto___40342,out){
return (function() {
var cljs$core$async$state_machine__10428__auto__ = null;
var cljs$core$async$state_machine__10428__auto____0 = (function (){
var statearr_40334 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40334[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_40334[(1)] = (1));

return statearr_40334;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_40308){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_40308);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e40335){if((e40335 instanceof Object)){
var ex__10431__auto__ = e40335;
var statearr_40336_40357 = state_40308;
(statearr_40336_40357[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40358 = state_40308;
state_40308 = G__40358;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_40308){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_40308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___40342,out))
})();
var state__10450__auto__ = (function (){var statearr_40337 = f__10449__auto__.call(null);
(statearr_40337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___40342);

return statearr_40337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___40342,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map