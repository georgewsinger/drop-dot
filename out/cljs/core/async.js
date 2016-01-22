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
var args22648 = [];
var len__9158__auto___22654 = arguments.length;
var i__9159__auto___22655 = (0);
while(true){
if((i__9159__auto___22655 < len__9158__auto___22654)){
args22648.push((arguments[i__9159__auto___22655]));

var G__22656 = (i__9159__auto___22655 + (1));
i__9159__auto___22655 = G__22656;
continue;
} else {
}
break;
}

var G__22650 = args22648.length;
switch (G__22650) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22648.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async22651 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22651 = (function (f,blockable,meta22652){
this.f = f;
this.blockable = blockable;
this.meta22652 = meta22652;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22651.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22653,meta22652__$1){
var self__ = this;
var _22653__$1 = this;
return (new cljs.core.async.t_cljs$core$async22651(self__.f,self__.blockable,meta22652__$1));
});

cljs.core.async.t_cljs$core$async22651.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22653){
var self__ = this;
var _22653__$1 = this;
return self__.meta22652;
});

cljs.core.async.t_cljs$core$async22651.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22651.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22651.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async22651.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22651.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22652","meta22652",1217119904,null)], null);
});

cljs.core.async.t_cljs$core$async22651.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22651.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22651";

cljs.core.async.t_cljs$core$async22651.cljs$lang$ctorPrWriter = (function (this__8698__auto__,writer__8699__auto__,opt__8700__auto__){
return cljs.core._write.call(null,writer__8699__auto__,"cljs.core.async/t_cljs$core$async22651");
});

cljs.core.async.__GT_t_cljs$core$async22651 = (function cljs$core$async$__GT_t_cljs$core$async22651(f__$1,blockable__$1,meta22652){
return (new cljs.core.async.t_cljs$core$async22651(f__$1,blockable__$1,meta22652));
});

}

return (new cljs.core.async.t_cljs$core$async22651(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args22660 = [];
var len__9158__auto___22663 = arguments.length;
var i__9159__auto___22664 = (0);
while(true){
if((i__9159__auto___22664 < len__9158__auto___22663)){
args22660.push((arguments[i__9159__auto___22664]));

var G__22665 = (i__9159__auto___22664 + (1));
i__9159__auto___22664 = G__22665;
continue;
} else {
}
break;
}

var G__22662 = args22660.length;
switch (G__22662) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22660.length)].join('')));

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
var args22667 = [];
var len__9158__auto___22670 = arguments.length;
var i__9159__auto___22671 = (0);
while(true){
if((i__9159__auto___22671 < len__9158__auto___22670)){
args22667.push((arguments[i__9159__auto___22671]));

var G__22672 = (i__9159__auto___22671 + (1));
i__9159__auto___22671 = G__22672;
continue;
} else {
}
break;
}

var G__22669 = args22667.length;
switch (G__22669) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22667.length)].join('')));

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
var args22674 = [];
var len__9158__auto___22677 = arguments.length;
var i__9159__auto___22678 = (0);
while(true){
if((i__9159__auto___22678 < len__9158__auto___22677)){
args22674.push((arguments[i__9159__auto___22678]));

var G__22679 = (i__9159__auto___22678 + (1));
i__9159__auto___22678 = G__22679;
continue;
} else {
}
break;
}

var G__22676 = args22674.length;
switch (G__22676) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22674.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_22681 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22681);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22681,ret){
return (function (){
return fn1.call(null,val_22681);
});})(val_22681,ret))
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
var args22682 = [];
var len__9158__auto___22685 = arguments.length;
var i__9159__auto___22686 = (0);
while(true){
if((i__9159__auto___22686 < len__9158__auto___22685)){
args22682.push((arguments[i__9159__auto___22686]));

var G__22687 = (i__9159__auto___22686 + (1));
i__9159__auto___22686 = G__22687;
continue;
} else {
}
break;
}

var G__22684 = args22682.length;
switch (G__22684) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22682.length)].join('')));

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
var n__9003__auto___22689 = n;
var x_22690 = (0);
while(true){
if((x_22690 < n__9003__auto___22689)){
(a[x_22690] = (0));

var G__22691 = (x_22690 + (1));
x_22690 = G__22691;
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

var G__22692 = (i + (1));
i = G__22692;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async22696 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22696 = (function (alt_flag,flag,meta22697){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta22697 = meta22697;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22698,meta22697__$1){
var self__ = this;
var _22698__$1 = this;
return (new cljs.core.async.t_cljs$core$async22696(self__.alt_flag,self__.flag,meta22697__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22696.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22698){
var self__ = this;
var _22698__$1 = this;
return self__.meta22697;
});})(flag))
;

cljs.core.async.t_cljs$core$async22696.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22696.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22696.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22696.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22696.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22697","meta22697",-298245821,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22696.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22696.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22696";

cljs.core.async.t_cljs$core$async22696.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8698__auto__,writer__8699__auto__,opt__8700__auto__){
return cljs.core._write.call(null,writer__8699__auto__,"cljs.core.async/t_cljs$core$async22696");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async22696 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22696(alt_flag__$1,flag__$1,meta22697){
return (new cljs.core.async.t_cljs$core$async22696(alt_flag__$1,flag__$1,meta22697));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22696(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22702 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22702 = (function (alt_handler,flag,cb,meta22703){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta22703 = meta22703;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22704,meta22703__$1){
var self__ = this;
var _22704__$1 = this;
return (new cljs.core.async.t_cljs$core$async22702(self__.alt_handler,self__.flag,self__.cb,meta22703__$1));
});

cljs.core.async.t_cljs$core$async22702.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22704){
var self__ = this;
var _22704__$1 = this;
return self__.meta22703;
});

cljs.core.async.t_cljs$core$async22702.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22702.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22702.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22702.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22702.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22703","meta22703",652992542,null)], null);
});

cljs.core.async.t_cljs$core$async22702.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22702.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22702";

cljs.core.async.t_cljs$core$async22702.cljs$lang$ctorPrWriter = (function (this__8698__auto__,writer__8699__auto__,opt__8700__auto__){
return cljs.core._write.call(null,writer__8699__auto__,"cljs.core.async/t_cljs$core$async22702");
});

cljs.core.async.__GT_t_cljs$core$async22702 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22702(alt_handler__$1,flag__$1,cb__$1,meta22703){
return (new cljs.core.async.t_cljs$core$async22702(alt_handler__$1,flag__$1,cb__$1,meta22703));
});

}

return (new cljs.core.async.t_cljs$core$async22702(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__22705_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22705_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22706_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22706_SHARP_,port], null));
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
var G__22707 = (i + (1));
i = G__22707;
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
var len__9158__auto___22713 = arguments.length;
var i__9159__auto___22714 = (0);
while(true){
if((i__9159__auto___22714 < len__9158__auto___22713)){
args__9165__auto__.push((arguments[i__9159__auto___22714]));

var G__22715 = (i__9159__auto___22714 + (1));
i__9159__auto___22714 = G__22715;
continue;
} else {
}
break;
}

var argseq__9166__auto__ = ((((1) < args__9165__auto__.length))?(new cljs.core.IndexedSeq(args__9165__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9166__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22710){
var map__22711 = p__22710;
var map__22711__$1 = ((((!((map__22711 == null)))?((((map__22711.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22711.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22711):map__22711);
var opts = map__22711__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22708){
var G__22709 = cljs.core.first.call(null,seq22708);
var seq22708__$1 = cljs.core.next.call(null,seq22708);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22709,seq22708__$1);
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
var args22716 = [];
var len__9158__auto___22766 = arguments.length;
var i__9159__auto___22767 = (0);
while(true){
if((i__9159__auto___22767 < len__9158__auto___22766)){
args22716.push((arguments[i__9159__auto___22767]));

var G__22768 = (i__9159__auto___22767 + (1));
i__9159__auto___22767 = G__22768;
continue;
} else {
}
break;
}

var G__22718 = args22716.length;
switch (G__22718) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22716.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10448__auto___22770 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___22770){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___22770){
return (function (state_22742){
var state_val_22743 = (state_22742[(1)]);
if((state_val_22743 === (7))){
var inst_22738 = (state_22742[(2)]);
var state_22742__$1 = state_22742;
var statearr_22744_22771 = state_22742__$1;
(statearr_22744_22771[(2)] = inst_22738);

(statearr_22744_22771[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22743 === (1))){
var state_22742__$1 = state_22742;
var statearr_22745_22772 = state_22742__$1;
(statearr_22745_22772[(2)] = null);

(statearr_22745_22772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22743 === (4))){
var inst_22721 = (state_22742[(7)]);
var inst_22721__$1 = (state_22742[(2)]);
var inst_22722 = (inst_22721__$1 == null);
var state_22742__$1 = (function (){var statearr_22746 = state_22742;
(statearr_22746[(7)] = inst_22721__$1);

return statearr_22746;
})();
if(cljs.core.truth_(inst_22722)){
var statearr_22747_22773 = state_22742__$1;
(statearr_22747_22773[(1)] = (5));

} else {
var statearr_22748_22774 = state_22742__$1;
(statearr_22748_22774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22743 === (13))){
var state_22742__$1 = state_22742;
var statearr_22749_22775 = state_22742__$1;
(statearr_22749_22775[(2)] = null);

(statearr_22749_22775[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22743 === (6))){
var inst_22721 = (state_22742[(7)]);
var state_22742__$1 = state_22742;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22742__$1,(11),to,inst_22721);
} else {
if((state_val_22743 === (3))){
var inst_22740 = (state_22742[(2)]);
var state_22742__$1 = state_22742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22742__$1,inst_22740);
} else {
if((state_val_22743 === (12))){
var state_22742__$1 = state_22742;
var statearr_22750_22776 = state_22742__$1;
(statearr_22750_22776[(2)] = null);

(statearr_22750_22776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22743 === (2))){
var state_22742__$1 = state_22742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22742__$1,(4),from);
} else {
if((state_val_22743 === (11))){
var inst_22731 = (state_22742[(2)]);
var state_22742__$1 = state_22742;
if(cljs.core.truth_(inst_22731)){
var statearr_22751_22777 = state_22742__$1;
(statearr_22751_22777[(1)] = (12));

} else {
var statearr_22752_22778 = state_22742__$1;
(statearr_22752_22778[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22743 === (9))){
var state_22742__$1 = state_22742;
var statearr_22753_22779 = state_22742__$1;
(statearr_22753_22779[(2)] = null);

(statearr_22753_22779[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22743 === (5))){
var state_22742__$1 = state_22742;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22754_22780 = state_22742__$1;
(statearr_22754_22780[(1)] = (8));

} else {
var statearr_22755_22781 = state_22742__$1;
(statearr_22755_22781[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22743 === (14))){
var inst_22736 = (state_22742[(2)]);
var state_22742__$1 = state_22742;
var statearr_22756_22782 = state_22742__$1;
(statearr_22756_22782[(2)] = inst_22736);

(statearr_22756_22782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22743 === (10))){
var inst_22728 = (state_22742[(2)]);
var state_22742__$1 = state_22742;
var statearr_22757_22783 = state_22742__$1;
(statearr_22757_22783[(2)] = inst_22728);

(statearr_22757_22783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22743 === (8))){
var inst_22725 = cljs.core.async.close_BANG_.call(null,to);
var state_22742__$1 = state_22742;
var statearr_22758_22784 = state_22742__$1;
(statearr_22758_22784[(2)] = inst_22725);

(statearr_22758_22784[(1)] = (10));


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
});})(c__10448__auto___22770))
;
return ((function (switch__10427__auto__,c__10448__auto___22770){
return (function() {
var cljs$core$async$state_machine__10428__auto__ = null;
var cljs$core$async$state_machine__10428__auto____0 = (function (){
var statearr_22762 = [null,null,null,null,null,null,null,null];
(statearr_22762[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_22762[(1)] = (1));

return statearr_22762;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_22742){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_22742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e22763){if((e22763 instanceof Object)){
var ex__10431__auto__ = e22763;
var statearr_22764_22785 = state_22742;
(statearr_22764_22785[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22786 = state_22742;
state_22742 = G__22786;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_22742){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_22742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___22770))
})();
var state__10450__auto__ = (function (){var statearr_22765 = f__10449__auto__.call(null);
(statearr_22765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___22770);

return statearr_22765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___22770))
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
return (function (p__22970){
var vec__22971 = p__22970;
var v = cljs.core.nth.call(null,vec__22971,(0),null);
var p = cljs.core.nth.call(null,vec__22971,(1),null);
var job = vec__22971;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__10448__auto___23153 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___23153,res,vec__22971,v,p,job,jobs,results){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___23153,res,vec__22971,v,p,job,jobs,results){
return (function (state_22976){
var state_val_22977 = (state_22976[(1)]);
if((state_val_22977 === (1))){
var state_22976__$1 = state_22976;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22976__$1,(2),res,v);
} else {
if((state_val_22977 === (2))){
var inst_22973 = (state_22976[(2)]);
var inst_22974 = cljs.core.async.close_BANG_.call(null,res);
var state_22976__$1 = (function (){var statearr_22978 = state_22976;
(statearr_22978[(7)] = inst_22973);

return statearr_22978;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22976__$1,inst_22974);
} else {
return null;
}
}
});})(c__10448__auto___23153,res,vec__22971,v,p,job,jobs,results))
;
return ((function (switch__10427__auto__,c__10448__auto___23153,res,vec__22971,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0 = (function (){
var statearr_22982 = [null,null,null,null,null,null,null,null];
(statearr_22982[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__);

(statearr_22982[(1)] = (1));

return statearr_22982;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1 = (function (state_22976){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_22976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e22983){if((e22983 instanceof Object)){
var ex__10431__auto__ = e22983;
var statearr_22984_23154 = state_22976;
(statearr_22984_23154[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23155 = state_22976;
state_22976 = G__23155;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__ = function(state_22976){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1.call(this,state_22976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___23153,res,vec__22971,v,p,job,jobs,results))
})();
var state__10450__auto__ = (function (){var statearr_22985 = f__10449__auto__.call(null);
(statearr_22985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___23153);

return statearr_22985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___23153,res,vec__22971,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22986){
var vec__22987 = p__22986;
var v = cljs.core.nth.call(null,vec__22987,(0),null);
var p = cljs.core.nth.call(null,vec__22987,(1),null);
var job = vec__22987;
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
var n__9003__auto___23156 = n;
var __23157 = (0);
while(true){
if((__23157 < n__9003__auto___23156)){
var G__22988_23158 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22988_23158) {
case "compute":
var c__10448__auto___23160 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23157,c__10448__auto___23160,G__22988_23158,n__9003__auto___23156,jobs,results,process,async){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (__23157,c__10448__auto___23160,G__22988_23158,n__9003__auto___23156,jobs,results,process,async){
return (function (state_23001){
var state_val_23002 = (state_23001[(1)]);
if((state_val_23002 === (1))){
var state_23001__$1 = state_23001;
var statearr_23003_23161 = state_23001__$1;
(statearr_23003_23161[(2)] = null);

(statearr_23003_23161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23002 === (2))){
var state_23001__$1 = state_23001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23001__$1,(4),jobs);
} else {
if((state_val_23002 === (3))){
var inst_22999 = (state_23001[(2)]);
var state_23001__$1 = state_23001;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23001__$1,inst_22999);
} else {
if((state_val_23002 === (4))){
var inst_22991 = (state_23001[(2)]);
var inst_22992 = process.call(null,inst_22991);
var state_23001__$1 = state_23001;
if(cljs.core.truth_(inst_22992)){
var statearr_23004_23162 = state_23001__$1;
(statearr_23004_23162[(1)] = (5));

} else {
var statearr_23005_23163 = state_23001__$1;
(statearr_23005_23163[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23002 === (5))){
var state_23001__$1 = state_23001;
var statearr_23006_23164 = state_23001__$1;
(statearr_23006_23164[(2)] = null);

(statearr_23006_23164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23002 === (6))){
var state_23001__$1 = state_23001;
var statearr_23007_23165 = state_23001__$1;
(statearr_23007_23165[(2)] = null);

(statearr_23007_23165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23002 === (7))){
var inst_22997 = (state_23001[(2)]);
var state_23001__$1 = state_23001;
var statearr_23008_23166 = state_23001__$1;
(statearr_23008_23166[(2)] = inst_22997);

(statearr_23008_23166[(1)] = (3));


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
});})(__23157,c__10448__auto___23160,G__22988_23158,n__9003__auto___23156,jobs,results,process,async))
;
return ((function (__23157,switch__10427__auto__,c__10448__auto___23160,G__22988_23158,n__9003__auto___23156,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0 = (function (){
var statearr_23012 = [null,null,null,null,null,null,null];
(statearr_23012[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__);

(statearr_23012[(1)] = (1));

return statearr_23012;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1 = (function (state_23001){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_23001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e23013){if((e23013 instanceof Object)){
var ex__10431__auto__ = e23013;
var statearr_23014_23167 = state_23001;
(statearr_23014_23167[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23168 = state_23001;
state_23001 = G__23168;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__ = function(state_23001){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1.call(this,state_23001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__;
})()
;})(__23157,switch__10427__auto__,c__10448__auto___23160,G__22988_23158,n__9003__auto___23156,jobs,results,process,async))
})();
var state__10450__auto__ = (function (){var statearr_23015 = f__10449__auto__.call(null);
(statearr_23015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___23160);

return statearr_23015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(__23157,c__10448__auto___23160,G__22988_23158,n__9003__auto___23156,jobs,results,process,async))
);


break;
case "async":
var c__10448__auto___23169 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23157,c__10448__auto___23169,G__22988_23158,n__9003__auto___23156,jobs,results,process,async){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (__23157,c__10448__auto___23169,G__22988_23158,n__9003__auto___23156,jobs,results,process,async){
return (function (state_23028){
var state_val_23029 = (state_23028[(1)]);
if((state_val_23029 === (1))){
var state_23028__$1 = state_23028;
var statearr_23030_23170 = state_23028__$1;
(statearr_23030_23170[(2)] = null);

(statearr_23030_23170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23029 === (2))){
var state_23028__$1 = state_23028;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23028__$1,(4),jobs);
} else {
if((state_val_23029 === (3))){
var inst_23026 = (state_23028[(2)]);
var state_23028__$1 = state_23028;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23028__$1,inst_23026);
} else {
if((state_val_23029 === (4))){
var inst_23018 = (state_23028[(2)]);
var inst_23019 = async.call(null,inst_23018);
var state_23028__$1 = state_23028;
if(cljs.core.truth_(inst_23019)){
var statearr_23031_23171 = state_23028__$1;
(statearr_23031_23171[(1)] = (5));

} else {
var statearr_23032_23172 = state_23028__$1;
(statearr_23032_23172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23029 === (5))){
var state_23028__$1 = state_23028;
var statearr_23033_23173 = state_23028__$1;
(statearr_23033_23173[(2)] = null);

(statearr_23033_23173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23029 === (6))){
var state_23028__$1 = state_23028;
var statearr_23034_23174 = state_23028__$1;
(statearr_23034_23174[(2)] = null);

(statearr_23034_23174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23029 === (7))){
var inst_23024 = (state_23028[(2)]);
var state_23028__$1 = state_23028;
var statearr_23035_23175 = state_23028__$1;
(statearr_23035_23175[(2)] = inst_23024);

(statearr_23035_23175[(1)] = (3));


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
});})(__23157,c__10448__auto___23169,G__22988_23158,n__9003__auto___23156,jobs,results,process,async))
;
return ((function (__23157,switch__10427__auto__,c__10448__auto___23169,G__22988_23158,n__9003__auto___23156,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0 = (function (){
var statearr_23039 = [null,null,null,null,null,null,null];
(statearr_23039[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__);

(statearr_23039[(1)] = (1));

return statearr_23039;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1 = (function (state_23028){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_23028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e23040){if((e23040 instanceof Object)){
var ex__10431__auto__ = e23040;
var statearr_23041_23176 = state_23028;
(statearr_23041_23176[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23177 = state_23028;
state_23028 = G__23177;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__ = function(state_23028){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1.call(this,state_23028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__;
})()
;})(__23157,switch__10427__auto__,c__10448__auto___23169,G__22988_23158,n__9003__auto___23156,jobs,results,process,async))
})();
var state__10450__auto__ = (function (){var statearr_23042 = f__10449__auto__.call(null);
(statearr_23042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___23169);

return statearr_23042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(__23157,c__10448__auto___23169,G__22988_23158,n__9003__auto___23156,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__23178 = (__23157 + (1));
__23157 = G__23178;
continue;
} else {
}
break;
}

var c__10448__auto___23179 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___23179,jobs,results,process,async){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___23179,jobs,results,process,async){
return (function (state_23064){
var state_val_23065 = (state_23064[(1)]);
if((state_val_23065 === (1))){
var state_23064__$1 = state_23064;
var statearr_23066_23180 = state_23064__$1;
(statearr_23066_23180[(2)] = null);

(statearr_23066_23180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23065 === (2))){
var state_23064__$1 = state_23064;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23064__$1,(4),from);
} else {
if((state_val_23065 === (3))){
var inst_23062 = (state_23064[(2)]);
var state_23064__$1 = state_23064;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23064__$1,inst_23062);
} else {
if((state_val_23065 === (4))){
var inst_23045 = (state_23064[(7)]);
var inst_23045__$1 = (state_23064[(2)]);
var inst_23046 = (inst_23045__$1 == null);
var state_23064__$1 = (function (){var statearr_23067 = state_23064;
(statearr_23067[(7)] = inst_23045__$1);

return statearr_23067;
})();
if(cljs.core.truth_(inst_23046)){
var statearr_23068_23181 = state_23064__$1;
(statearr_23068_23181[(1)] = (5));

} else {
var statearr_23069_23182 = state_23064__$1;
(statearr_23069_23182[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23065 === (5))){
var inst_23048 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23064__$1 = state_23064;
var statearr_23070_23183 = state_23064__$1;
(statearr_23070_23183[(2)] = inst_23048);

(statearr_23070_23183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23065 === (6))){
var inst_23050 = (state_23064[(8)]);
var inst_23045 = (state_23064[(7)]);
var inst_23050__$1 = cljs.core.async.chan.call(null,(1));
var inst_23051 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23052 = [inst_23045,inst_23050__$1];
var inst_23053 = (new cljs.core.PersistentVector(null,2,(5),inst_23051,inst_23052,null));
var state_23064__$1 = (function (){var statearr_23071 = state_23064;
(statearr_23071[(8)] = inst_23050__$1);

return statearr_23071;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23064__$1,(8),jobs,inst_23053);
} else {
if((state_val_23065 === (7))){
var inst_23060 = (state_23064[(2)]);
var state_23064__$1 = state_23064;
var statearr_23072_23184 = state_23064__$1;
(statearr_23072_23184[(2)] = inst_23060);

(statearr_23072_23184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23065 === (8))){
var inst_23050 = (state_23064[(8)]);
var inst_23055 = (state_23064[(2)]);
var state_23064__$1 = (function (){var statearr_23073 = state_23064;
(statearr_23073[(9)] = inst_23055);

return statearr_23073;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23064__$1,(9),results,inst_23050);
} else {
if((state_val_23065 === (9))){
var inst_23057 = (state_23064[(2)]);
var state_23064__$1 = (function (){var statearr_23074 = state_23064;
(statearr_23074[(10)] = inst_23057);

return statearr_23074;
})();
var statearr_23075_23185 = state_23064__$1;
(statearr_23075_23185[(2)] = null);

(statearr_23075_23185[(1)] = (2));


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
});})(c__10448__auto___23179,jobs,results,process,async))
;
return ((function (switch__10427__auto__,c__10448__auto___23179,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0 = (function (){
var statearr_23079 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23079[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__);

(statearr_23079[(1)] = (1));

return statearr_23079;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1 = (function (state_23064){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_23064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e23080){if((e23080 instanceof Object)){
var ex__10431__auto__ = e23080;
var statearr_23081_23186 = state_23064;
(statearr_23081_23186[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23187 = state_23064;
state_23064 = G__23187;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__ = function(state_23064){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1.call(this,state_23064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___23179,jobs,results,process,async))
})();
var state__10450__auto__ = (function (){var statearr_23082 = f__10449__auto__.call(null);
(statearr_23082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___23179);

return statearr_23082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___23179,jobs,results,process,async))
);


var c__10448__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto__,jobs,results,process,async){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto__,jobs,results,process,async){
return (function (state_23120){
var state_val_23121 = (state_23120[(1)]);
if((state_val_23121 === (7))){
var inst_23116 = (state_23120[(2)]);
var state_23120__$1 = state_23120;
var statearr_23122_23188 = state_23120__$1;
(statearr_23122_23188[(2)] = inst_23116);

(statearr_23122_23188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23121 === (20))){
var state_23120__$1 = state_23120;
var statearr_23123_23189 = state_23120__$1;
(statearr_23123_23189[(2)] = null);

(statearr_23123_23189[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23121 === (1))){
var state_23120__$1 = state_23120;
var statearr_23124_23190 = state_23120__$1;
(statearr_23124_23190[(2)] = null);

(statearr_23124_23190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23121 === (4))){
var inst_23085 = (state_23120[(7)]);
var inst_23085__$1 = (state_23120[(2)]);
var inst_23086 = (inst_23085__$1 == null);
var state_23120__$1 = (function (){var statearr_23125 = state_23120;
(statearr_23125[(7)] = inst_23085__$1);

return statearr_23125;
})();
if(cljs.core.truth_(inst_23086)){
var statearr_23126_23191 = state_23120__$1;
(statearr_23126_23191[(1)] = (5));

} else {
var statearr_23127_23192 = state_23120__$1;
(statearr_23127_23192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23121 === (15))){
var inst_23098 = (state_23120[(8)]);
var state_23120__$1 = state_23120;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23120__$1,(18),to,inst_23098);
} else {
if((state_val_23121 === (21))){
var inst_23111 = (state_23120[(2)]);
var state_23120__$1 = state_23120;
var statearr_23128_23193 = state_23120__$1;
(statearr_23128_23193[(2)] = inst_23111);

(statearr_23128_23193[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23121 === (13))){
var inst_23113 = (state_23120[(2)]);
var state_23120__$1 = (function (){var statearr_23129 = state_23120;
(statearr_23129[(9)] = inst_23113);

return statearr_23129;
})();
var statearr_23130_23194 = state_23120__$1;
(statearr_23130_23194[(2)] = null);

(statearr_23130_23194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23121 === (6))){
var inst_23085 = (state_23120[(7)]);
var state_23120__$1 = state_23120;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23120__$1,(11),inst_23085);
} else {
if((state_val_23121 === (17))){
var inst_23106 = (state_23120[(2)]);
var state_23120__$1 = state_23120;
if(cljs.core.truth_(inst_23106)){
var statearr_23131_23195 = state_23120__$1;
(statearr_23131_23195[(1)] = (19));

} else {
var statearr_23132_23196 = state_23120__$1;
(statearr_23132_23196[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23121 === (3))){
var inst_23118 = (state_23120[(2)]);
var state_23120__$1 = state_23120;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23120__$1,inst_23118);
} else {
if((state_val_23121 === (12))){
var inst_23095 = (state_23120[(10)]);
var state_23120__$1 = state_23120;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23120__$1,(14),inst_23095);
} else {
if((state_val_23121 === (2))){
var state_23120__$1 = state_23120;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23120__$1,(4),results);
} else {
if((state_val_23121 === (19))){
var state_23120__$1 = state_23120;
var statearr_23133_23197 = state_23120__$1;
(statearr_23133_23197[(2)] = null);

(statearr_23133_23197[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23121 === (11))){
var inst_23095 = (state_23120[(2)]);
var state_23120__$1 = (function (){var statearr_23134 = state_23120;
(statearr_23134[(10)] = inst_23095);

return statearr_23134;
})();
var statearr_23135_23198 = state_23120__$1;
(statearr_23135_23198[(2)] = null);

(statearr_23135_23198[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23121 === (9))){
var state_23120__$1 = state_23120;
var statearr_23136_23199 = state_23120__$1;
(statearr_23136_23199[(2)] = null);

(statearr_23136_23199[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23121 === (5))){
var state_23120__$1 = state_23120;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23137_23200 = state_23120__$1;
(statearr_23137_23200[(1)] = (8));

} else {
var statearr_23138_23201 = state_23120__$1;
(statearr_23138_23201[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23121 === (14))){
var inst_23100 = (state_23120[(11)]);
var inst_23098 = (state_23120[(8)]);
var inst_23098__$1 = (state_23120[(2)]);
var inst_23099 = (inst_23098__$1 == null);
var inst_23100__$1 = cljs.core.not.call(null,inst_23099);
var state_23120__$1 = (function (){var statearr_23139 = state_23120;
(statearr_23139[(11)] = inst_23100__$1);

(statearr_23139[(8)] = inst_23098__$1);

return statearr_23139;
})();
if(inst_23100__$1){
var statearr_23140_23202 = state_23120__$1;
(statearr_23140_23202[(1)] = (15));

} else {
var statearr_23141_23203 = state_23120__$1;
(statearr_23141_23203[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23121 === (16))){
var inst_23100 = (state_23120[(11)]);
var state_23120__$1 = state_23120;
var statearr_23142_23204 = state_23120__$1;
(statearr_23142_23204[(2)] = inst_23100);

(statearr_23142_23204[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23121 === (10))){
var inst_23092 = (state_23120[(2)]);
var state_23120__$1 = state_23120;
var statearr_23143_23205 = state_23120__$1;
(statearr_23143_23205[(2)] = inst_23092);

(statearr_23143_23205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23121 === (18))){
var inst_23103 = (state_23120[(2)]);
var state_23120__$1 = state_23120;
var statearr_23144_23206 = state_23120__$1;
(statearr_23144_23206[(2)] = inst_23103);

(statearr_23144_23206[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23121 === (8))){
var inst_23089 = cljs.core.async.close_BANG_.call(null,to);
var state_23120__$1 = state_23120;
var statearr_23145_23207 = state_23120__$1;
(statearr_23145_23207[(2)] = inst_23089);

(statearr_23145_23207[(1)] = (10));


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
var statearr_23149 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23149[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__);

(statearr_23149[(1)] = (1));

return statearr_23149;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1 = (function (state_23120){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_23120);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e23150){if((e23150 instanceof Object)){
var ex__10431__auto__ = e23150;
var statearr_23151_23208 = state_23120;
(statearr_23151_23208[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23120);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23209 = state_23120;
state_23120 = G__23209;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__ = function(state_23120){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1.call(this,state_23120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto__,jobs,results,process,async))
})();
var state__10450__auto__ = (function (){var statearr_23152 = f__10449__auto__.call(null);
(statearr_23152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto__);

return statearr_23152;
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
var args23210 = [];
var len__9158__auto___23213 = arguments.length;
var i__9159__auto___23214 = (0);
while(true){
if((i__9159__auto___23214 < len__9158__auto___23213)){
args23210.push((arguments[i__9159__auto___23214]));

var G__23215 = (i__9159__auto___23214 + (1));
i__9159__auto___23214 = G__23215;
continue;
} else {
}
break;
}

var G__23212 = args23210.length;
switch (G__23212) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23210.length)].join('')));

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
var args23217 = [];
var len__9158__auto___23220 = arguments.length;
var i__9159__auto___23221 = (0);
while(true){
if((i__9159__auto___23221 < len__9158__auto___23220)){
args23217.push((arguments[i__9159__auto___23221]));

var G__23222 = (i__9159__auto___23221 + (1));
i__9159__auto___23221 = G__23222;
continue;
} else {
}
break;
}

var G__23219 = args23217.length;
switch (G__23219) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23217.length)].join('')));

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
var args23224 = [];
var len__9158__auto___23277 = arguments.length;
var i__9159__auto___23278 = (0);
while(true){
if((i__9159__auto___23278 < len__9158__auto___23277)){
args23224.push((arguments[i__9159__auto___23278]));

var G__23279 = (i__9159__auto___23278 + (1));
i__9159__auto___23278 = G__23279;
continue;
} else {
}
break;
}

var G__23226 = args23224.length;
switch (G__23226) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23224.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__10448__auto___23281 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___23281,tc,fc){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___23281,tc,fc){
return (function (state_23252){
var state_val_23253 = (state_23252[(1)]);
if((state_val_23253 === (7))){
var inst_23248 = (state_23252[(2)]);
var state_23252__$1 = state_23252;
var statearr_23254_23282 = state_23252__$1;
(statearr_23254_23282[(2)] = inst_23248);

(statearr_23254_23282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23253 === (1))){
var state_23252__$1 = state_23252;
var statearr_23255_23283 = state_23252__$1;
(statearr_23255_23283[(2)] = null);

(statearr_23255_23283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23253 === (4))){
var inst_23229 = (state_23252[(7)]);
var inst_23229__$1 = (state_23252[(2)]);
var inst_23230 = (inst_23229__$1 == null);
var state_23252__$1 = (function (){var statearr_23256 = state_23252;
(statearr_23256[(7)] = inst_23229__$1);

return statearr_23256;
})();
if(cljs.core.truth_(inst_23230)){
var statearr_23257_23284 = state_23252__$1;
(statearr_23257_23284[(1)] = (5));

} else {
var statearr_23258_23285 = state_23252__$1;
(statearr_23258_23285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23253 === (13))){
var state_23252__$1 = state_23252;
var statearr_23259_23286 = state_23252__$1;
(statearr_23259_23286[(2)] = null);

(statearr_23259_23286[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23253 === (6))){
var inst_23229 = (state_23252[(7)]);
var inst_23235 = p.call(null,inst_23229);
var state_23252__$1 = state_23252;
if(cljs.core.truth_(inst_23235)){
var statearr_23260_23287 = state_23252__$1;
(statearr_23260_23287[(1)] = (9));

} else {
var statearr_23261_23288 = state_23252__$1;
(statearr_23261_23288[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23253 === (3))){
var inst_23250 = (state_23252[(2)]);
var state_23252__$1 = state_23252;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23252__$1,inst_23250);
} else {
if((state_val_23253 === (12))){
var state_23252__$1 = state_23252;
var statearr_23262_23289 = state_23252__$1;
(statearr_23262_23289[(2)] = null);

(statearr_23262_23289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23253 === (2))){
var state_23252__$1 = state_23252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23252__$1,(4),ch);
} else {
if((state_val_23253 === (11))){
var inst_23229 = (state_23252[(7)]);
var inst_23239 = (state_23252[(2)]);
var state_23252__$1 = state_23252;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23252__$1,(8),inst_23239,inst_23229);
} else {
if((state_val_23253 === (9))){
var state_23252__$1 = state_23252;
var statearr_23263_23290 = state_23252__$1;
(statearr_23263_23290[(2)] = tc);

(statearr_23263_23290[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23253 === (5))){
var inst_23232 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23233 = cljs.core.async.close_BANG_.call(null,fc);
var state_23252__$1 = (function (){var statearr_23264 = state_23252;
(statearr_23264[(8)] = inst_23232);

return statearr_23264;
})();
var statearr_23265_23291 = state_23252__$1;
(statearr_23265_23291[(2)] = inst_23233);

(statearr_23265_23291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23253 === (14))){
var inst_23246 = (state_23252[(2)]);
var state_23252__$1 = state_23252;
var statearr_23266_23292 = state_23252__$1;
(statearr_23266_23292[(2)] = inst_23246);

(statearr_23266_23292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23253 === (10))){
var state_23252__$1 = state_23252;
var statearr_23267_23293 = state_23252__$1;
(statearr_23267_23293[(2)] = fc);

(statearr_23267_23293[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23253 === (8))){
var inst_23241 = (state_23252[(2)]);
var state_23252__$1 = state_23252;
if(cljs.core.truth_(inst_23241)){
var statearr_23268_23294 = state_23252__$1;
(statearr_23268_23294[(1)] = (12));

} else {
var statearr_23269_23295 = state_23252__$1;
(statearr_23269_23295[(1)] = (13));

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
});})(c__10448__auto___23281,tc,fc))
;
return ((function (switch__10427__auto__,c__10448__auto___23281,tc,fc){
return (function() {
var cljs$core$async$state_machine__10428__auto__ = null;
var cljs$core$async$state_machine__10428__auto____0 = (function (){
var statearr_23273 = [null,null,null,null,null,null,null,null,null];
(statearr_23273[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_23273[(1)] = (1));

return statearr_23273;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_23252){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_23252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e23274){if((e23274 instanceof Object)){
var ex__10431__auto__ = e23274;
var statearr_23275_23296 = state_23252;
(statearr_23275_23296[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23297 = state_23252;
state_23252 = G__23297;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_23252){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_23252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___23281,tc,fc))
})();
var state__10450__auto__ = (function (){var statearr_23276 = f__10449__auto__.call(null);
(statearr_23276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___23281);

return statearr_23276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___23281,tc,fc))
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
return (function (state_23361){
var state_val_23362 = (state_23361[(1)]);
if((state_val_23362 === (7))){
var inst_23357 = (state_23361[(2)]);
var state_23361__$1 = state_23361;
var statearr_23363_23384 = state_23361__$1;
(statearr_23363_23384[(2)] = inst_23357);

(statearr_23363_23384[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23362 === (1))){
var inst_23341 = init;
var state_23361__$1 = (function (){var statearr_23364 = state_23361;
(statearr_23364[(7)] = inst_23341);

return statearr_23364;
})();
var statearr_23365_23385 = state_23361__$1;
(statearr_23365_23385[(2)] = null);

(statearr_23365_23385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23362 === (4))){
var inst_23344 = (state_23361[(8)]);
var inst_23344__$1 = (state_23361[(2)]);
var inst_23345 = (inst_23344__$1 == null);
var state_23361__$1 = (function (){var statearr_23366 = state_23361;
(statearr_23366[(8)] = inst_23344__$1);

return statearr_23366;
})();
if(cljs.core.truth_(inst_23345)){
var statearr_23367_23386 = state_23361__$1;
(statearr_23367_23386[(1)] = (5));

} else {
var statearr_23368_23387 = state_23361__$1;
(statearr_23368_23387[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23362 === (6))){
var inst_23348 = (state_23361[(9)]);
var inst_23341 = (state_23361[(7)]);
var inst_23344 = (state_23361[(8)]);
var inst_23348__$1 = f.call(null,inst_23341,inst_23344);
var inst_23349 = cljs.core.reduced_QMARK_.call(null,inst_23348__$1);
var state_23361__$1 = (function (){var statearr_23369 = state_23361;
(statearr_23369[(9)] = inst_23348__$1);

return statearr_23369;
})();
if(inst_23349){
var statearr_23370_23388 = state_23361__$1;
(statearr_23370_23388[(1)] = (8));

} else {
var statearr_23371_23389 = state_23361__$1;
(statearr_23371_23389[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23362 === (3))){
var inst_23359 = (state_23361[(2)]);
var state_23361__$1 = state_23361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23361__$1,inst_23359);
} else {
if((state_val_23362 === (2))){
var state_23361__$1 = state_23361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23361__$1,(4),ch);
} else {
if((state_val_23362 === (9))){
var inst_23348 = (state_23361[(9)]);
var inst_23341 = inst_23348;
var state_23361__$1 = (function (){var statearr_23372 = state_23361;
(statearr_23372[(7)] = inst_23341);

return statearr_23372;
})();
var statearr_23373_23390 = state_23361__$1;
(statearr_23373_23390[(2)] = null);

(statearr_23373_23390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23362 === (5))){
var inst_23341 = (state_23361[(7)]);
var state_23361__$1 = state_23361;
var statearr_23374_23391 = state_23361__$1;
(statearr_23374_23391[(2)] = inst_23341);

(statearr_23374_23391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23362 === (10))){
var inst_23355 = (state_23361[(2)]);
var state_23361__$1 = state_23361;
var statearr_23375_23392 = state_23361__$1;
(statearr_23375_23392[(2)] = inst_23355);

(statearr_23375_23392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23362 === (8))){
var inst_23348 = (state_23361[(9)]);
var inst_23351 = cljs.core.deref.call(null,inst_23348);
var state_23361__$1 = state_23361;
var statearr_23376_23393 = state_23361__$1;
(statearr_23376_23393[(2)] = inst_23351);

(statearr_23376_23393[(1)] = (10));


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
var statearr_23380 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23380[(0)] = cljs$core$async$reduce_$_state_machine__10428__auto__);

(statearr_23380[(1)] = (1));

return statearr_23380;
});
var cljs$core$async$reduce_$_state_machine__10428__auto____1 = (function (state_23361){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_23361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e23381){if((e23381 instanceof Object)){
var ex__10431__auto__ = e23381;
var statearr_23382_23394 = state_23361;
(statearr_23382_23394[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23395 = state_23361;
state_23361 = G__23395;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10428__auto__ = function(state_23361){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10428__auto____1.call(this,state_23361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10428__auto____0;
cljs$core$async$reduce_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10428__auto____1;
return cljs$core$async$reduce_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto__))
})();
var state__10450__auto__ = (function (){var statearr_23383 = f__10449__auto__.call(null);
(statearr_23383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto__);

return statearr_23383;
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
var args23396 = [];
var len__9158__auto___23448 = arguments.length;
var i__9159__auto___23449 = (0);
while(true){
if((i__9159__auto___23449 < len__9158__auto___23448)){
args23396.push((arguments[i__9159__auto___23449]));

var G__23450 = (i__9159__auto___23449 + (1));
i__9159__auto___23449 = G__23450;
continue;
} else {
}
break;
}

var G__23398 = args23396.length;
switch (G__23398) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23396.length)].join('')));

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
return (function (state_23423){
var state_val_23424 = (state_23423[(1)]);
if((state_val_23424 === (7))){
var inst_23405 = (state_23423[(2)]);
var state_23423__$1 = state_23423;
var statearr_23425_23452 = state_23423__$1;
(statearr_23425_23452[(2)] = inst_23405);

(statearr_23425_23452[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (1))){
var inst_23399 = cljs.core.seq.call(null,coll);
var inst_23400 = inst_23399;
var state_23423__$1 = (function (){var statearr_23426 = state_23423;
(statearr_23426[(7)] = inst_23400);

return statearr_23426;
})();
var statearr_23427_23453 = state_23423__$1;
(statearr_23427_23453[(2)] = null);

(statearr_23427_23453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (4))){
var inst_23400 = (state_23423[(7)]);
var inst_23403 = cljs.core.first.call(null,inst_23400);
var state_23423__$1 = state_23423;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23423__$1,(7),ch,inst_23403);
} else {
if((state_val_23424 === (13))){
var inst_23417 = (state_23423[(2)]);
var state_23423__$1 = state_23423;
var statearr_23428_23454 = state_23423__$1;
(statearr_23428_23454[(2)] = inst_23417);

(statearr_23428_23454[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (6))){
var inst_23408 = (state_23423[(2)]);
var state_23423__$1 = state_23423;
if(cljs.core.truth_(inst_23408)){
var statearr_23429_23455 = state_23423__$1;
(statearr_23429_23455[(1)] = (8));

} else {
var statearr_23430_23456 = state_23423__$1;
(statearr_23430_23456[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (3))){
var inst_23421 = (state_23423[(2)]);
var state_23423__$1 = state_23423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23423__$1,inst_23421);
} else {
if((state_val_23424 === (12))){
var state_23423__$1 = state_23423;
var statearr_23431_23457 = state_23423__$1;
(statearr_23431_23457[(2)] = null);

(statearr_23431_23457[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (2))){
var inst_23400 = (state_23423[(7)]);
var state_23423__$1 = state_23423;
if(cljs.core.truth_(inst_23400)){
var statearr_23432_23458 = state_23423__$1;
(statearr_23432_23458[(1)] = (4));

} else {
var statearr_23433_23459 = state_23423__$1;
(statearr_23433_23459[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (11))){
var inst_23414 = cljs.core.async.close_BANG_.call(null,ch);
var state_23423__$1 = state_23423;
var statearr_23434_23460 = state_23423__$1;
(statearr_23434_23460[(2)] = inst_23414);

(statearr_23434_23460[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (9))){
var state_23423__$1 = state_23423;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23435_23461 = state_23423__$1;
(statearr_23435_23461[(1)] = (11));

} else {
var statearr_23436_23462 = state_23423__$1;
(statearr_23436_23462[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (5))){
var inst_23400 = (state_23423[(7)]);
var state_23423__$1 = state_23423;
var statearr_23437_23463 = state_23423__$1;
(statearr_23437_23463[(2)] = inst_23400);

(statearr_23437_23463[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (10))){
var inst_23419 = (state_23423[(2)]);
var state_23423__$1 = state_23423;
var statearr_23438_23464 = state_23423__$1;
(statearr_23438_23464[(2)] = inst_23419);

(statearr_23438_23464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (8))){
var inst_23400 = (state_23423[(7)]);
var inst_23410 = cljs.core.next.call(null,inst_23400);
var inst_23400__$1 = inst_23410;
var state_23423__$1 = (function (){var statearr_23439 = state_23423;
(statearr_23439[(7)] = inst_23400__$1);

return statearr_23439;
})();
var statearr_23440_23465 = state_23423__$1;
(statearr_23440_23465[(2)] = null);

(statearr_23440_23465[(1)] = (2));


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
var statearr_23444 = [null,null,null,null,null,null,null,null];
(statearr_23444[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_23444[(1)] = (1));

return statearr_23444;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_23423){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_23423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e23445){if((e23445 instanceof Object)){
var ex__10431__auto__ = e23445;
var statearr_23446_23466 = state_23423;
(statearr_23446_23466[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23467 = state_23423;
state_23423 = G__23467;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_23423){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_23423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto__))
})();
var state__10450__auto__ = (function (){var statearr_23447 = f__10449__auto__.call(null);
(statearr_23447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto__);

return statearr_23447;
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
if(typeof cljs.core.async.t_cljs$core$async23689 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23689 = (function (mult,ch,cs,meta23690){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta23690 = meta23690;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23691,meta23690__$1){
var self__ = this;
var _23691__$1 = this;
return (new cljs.core.async.t_cljs$core$async23689(self__.mult,self__.ch,self__.cs,meta23690__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23689.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23691){
var self__ = this;
var _23691__$1 = this;
return self__.meta23690;
});})(cs))
;

cljs.core.async.t_cljs$core$async23689.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23689.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23689.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async23689.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23689.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23689.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23689.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23690","meta23690",1080249935,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23689.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23689.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23689";

cljs.core.async.t_cljs$core$async23689.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8698__auto__,writer__8699__auto__,opt__8700__auto__){
return cljs.core._write.call(null,writer__8699__auto__,"cljs.core.async/t_cljs$core$async23689");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async23689 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23689(mult__$1,ch__$1,cs__$1,meta23690){
return (new cljs.core.async.t_cljs$core$async23689(mult__$1,ch__$1,cs__$1,meta23690));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23689(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10448__auto___23910 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___23910,cs,m,dchan,dctr,done){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___23910,cs,m,dchan,dctr,done){
return (function (state_23822){
var state_val_23823 = (state_23822[(1)]);
if((state_val_23823 === (7))){
var inst_23818 = (state_23822[(2)]);
var state_23822__$1 = state_23822;
var statearr_23824_23911 = state_23822__$1;
(statearr_23824_23911[(2)] = inst_23818);

(statearr_23824_23911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (20))){
var inst_23723 = (state_23822[(7)]);
var inst_23733 = cljs.core.first.call(null,inst_23723);
var inst_23734 = cljs.core.nth.call(null,inst_23733,(0),null);
var inst_23735 = cljs.core.nth.call(null,inst_23733,(1),null);
var state_23822__$1 = (function (){var statearr_23825 = state_23822;
(statearr_23825[(8)] = inst_23734);

return statearr_23825;
})();
if(cljs.core.truth_(inst_23735)){
var statearr_23826_23912 = state_23822__$1;
(statearr_23826_23912[(1)] = (22));

} else {
var statearr_23827_23913 = state_23822__$1;
(statearr_23827_23913[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (27))){
var inst_23763 = (state_23822[(9)]);
var inst_23765 = (state_23822[(10)]);
var inst_23770 = (state_23822[(11)]);
var inst_23694 = (state_23822[(12)]);
var inst_23770__$1 = cljs.core._nth.call(null,inst_23763,inst_23765);
var inst_23771 = cljs.core.async.put_BANG_.call(null,inst_23770__$1,inst_23694,done);
var state_23822__$1 = (function (){var statearr_23828 = state_23822;
(statearr_23828[(11)] = inst_23770__$1);

return statearr_23828;
})();
if(cljs.core.truth_(inst_23771)){
var statearr_23829_23914 = state_23822__$1;
(statearr_23829_23914[(1)] = (30));

} else {
var statearr_23830_23915 = state_23822__$1;
(statearr_23830_23915[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (1))){
var state_23822__$1 = state_23822;
var statearr_23831_23916 = state_23822__$1;
(statearr_23831_23916[(2)] = null);

(statearr_23831_23916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (24))){
var inst_23723 = (state_23822[(7)]);
var inst_23740 = (state_23822[(2)]);
var inst_23741 = cljs.core.next.call(null,inst_23723);
var inst_23703 = inst_23741;
var inst_23704 = null;
var inst_23705 = (0);
var inst_23706 = (0);
var state_23822__$1 = (function (){var statearr_23832 = state_23822;
(statearr_23832[(13)] = inst_23705);

(statearr_23832[(14)] = inst_23704);

(statearr_23832[(15)] = inst_23706);

(statearr_23832[(16)] = inst_23740);

(statearr_23832[(17)] = inst_23703);

return statearr_23832;
})();
var statearr_23833_23917 = state_23822__$1;
(statearr_23833_23917[(2)] = null);

(statearr_23833_23917[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (39))){
var state_23822__$1 = state_23822;
var statearr_23837_23918 = state_23822__$1;
(statearr_23837_23918[(2)] = null);

(statearr_23837_23918[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (4))){
var inst_23694 = (state_23822[(12)]);
var inst_23694__$1 = (state_23822[(2)]);
var inst_23695 = (inst_23694__$1 == null);
var state_23822__$1 = (function (){var statearr_23838 = state_23822;
(statearr_23838[(12)] = inst_23694__$1);

return statearr_23838;
})();
if(cljs.core.truth_(inst_23695)){
var statearr_23839_23919 = state_23822__$1;
(statearr_23839_23919[(1)] = (5));

} else {
var statearr_23840_23920 = state_23822__$1;
(statearr_23840_23920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (15))){
var inst_23705 = (state_23822[(13)]);
var inst_23704 = (state_23822[(14)]);
var inst_23706 = (state_23822[(15)]);
var inst_23703 = (state_23822[(17)]);
var inst_23719 = (state_23822[(2)]);
var inst_23720 = (inst_23706 + (1));
var tmp23834 = inst_23705;
var tmp23835 = inst_23704;
var tmp23836 = inst_23703;
var inst_23703__$1 = tmp23836;
var inst_23704__$1 = tmp23835;
var inst_23705__$1 = tmp23834;
var inst_23706__$1 = inst_23720;
var state_23822__$1 = (function (){var statearr_23841 = state_23822;
(statearr_23841[(13)] = inst_23705__$1);

(statearr_23841[(14)] = inst_23704__$1);

(statearr_23841[(15)] = inst_23706__$1);

(statearr_23841[(18)] = inst_23719);

(statearr_23841[(17)] = inst_23703__$1);

return statearr_23841;
})();
var statearr_23842_23921 = state_23822__$1;
(statearr_23842_23921[(2)] = null);

(statearr_23842_23921[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (21))){
var inst_23744 = (state_23822[(2)]);
var state_23822__$1 = state_23822;
var statearr_23846_23922 = state_23822__$1;
(statearr_23846_23922[(2)] = inst_23744);

(statearr_23846_23922[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (31))){
var inst_23770 = (state_23822[(11)]);
var inst_23774 = done.call(null,null);
var inst_23775 = cljs.core.async.untap_STAR_.call(null,m,inst_23770);
var state_23822__$1 = (function (){var statearr_23847 = state_23822;
(statearr_23847[(19)] = inst_23774);

return statearr_23847;
})();
var statearr_23848_23923 = state_23822__$1;
(statearr_23848_23923[(2)] = inst_23775);

(statearr_23848_23923[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (32))){
var inst_23763 = (state_23822[(9)]);
var inst_23765 = (state_23822[(10)]);
var inst_23764 = (state_23822[(20)]);
var inst_23762 = (state_23822[(21)]);
var inst_23777 = (state_23822[(2)]);
var inst_23778 = (inst_23765 + (1));
var tmp23843 = inst_23763;
var tmp23844 = inst_23764;
var tmp23845 = inst_23762;
var inst_23762__$1 = tmp23845;
var inst_23763__$1 = tmp23843;
var inst_23764__$1 = tmp23844;
var inst_23765__$1 = inst_23778;
var state_23822__$1 = (function (){var statearr_23849 = state_23822;
(statearr_23849[(9)] = inst_23763__$1);

(statearr_23849[(22)] = inst_23777);

(statearr_23849[(10)] = inst_23765__$1);

(statearr_23849[(20)] = inst_23764__$1);

(statearr_23849[(21)] = inst_23762__$1);

return statearr_23849;
})();
var statearr_23850_23924 = state_23822__$1;
(statearr_23850_23924[(2)] = null);

(statearr_23850_23924[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (40))){
var inst_23790 = (state_23822[(23)]);
var inst_23794 = done.call(null,null);
var inst_23795 = cljs.core.async.untap_STAR_.call(null,m,inst_23790);
var state_23822__$1 = (function (){var statearr_23851 = state_23822;
(statearr_23851[(24)] = inst_23794);

return statearr_23851;
})();
var statearr_23852_23925 = state_23822__$1;
(statearr_23852_23925[(2)] = inst_23795);

(statearr_23852_23925[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (33))){
var inst_23781 = (state_23822[(25)]);
var inst_23783 = cljs.core.chunked_seq_QMARK_.call(null,inst_23781);
var state_23822__$1 = state_23822;
if(inst_23783){
var statearr_23853_23926 = state_23822__$1;
(statearr_23853_23926[(1)] = (36));

} else {
var statearr_23854_23927 = state_23822__$1;
(statearr_23854_23927[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (13))){
var inst_23713 = (state_23822[(26)]);
var inst_23716 = cljs.core.async.close_BANG_.call(null,inst_23713);
var state_23822__$1 = state_23822;
var statearr_23855_23928 = state_23822__$1;
(statearr_23855_23928[(2)] = inst_23716);

(statearr_23855_23928[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (22))){
var inst_23734 = (state_23822[(8)]);
var inst_23737 = cljs.core.async.close_BANG_.call(null,inst_23734);
var state_23822__$1 = state_23822;
var statearr_23856_23929 = state_23822__$1;
(statearr_23856_23929[(2)] = inst_23737);

(statearr_23856_23929[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (36))){
var inst_23781 = (state_23822[(25)]);
var inst_23785 = cljs.core.chunk_first.call(null,inst_23781);
var inst_23786 = cljs.core.chunk_rest.call(null,inst_23781);
var inst_23787 = cljs.core.count.call(null,inst_23785);
var inst_23762 = inst_23786;
var inst_23763 = inst_23785;
var inst_23764 = inst_23787;
var inst_23765 = (0);
var state_23822__$1 = (function (){var statearr_23857 = state_23822;
(statearr_23857[(9)] = inst_23763);

(statearr_23857[(10)] = inst_23765);

(statearr_23857[(20)] = inst_23764);

(statearr_23857[(21)] = inst_23762);

return statearr_23857;
})();
var statearr_23858_23930 = state_23822__$1;
(statearr_23858_23930[(2)] = null);

(statearr_23858_23930[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (41))){
var inst_23781 = (state_23822[(25)]);
var inst_23797 = (state_23822[(2)]);
var inst_23798 = cljs.core.next.call(null,inst_23781);
var inst_23762 = inst_23798;
var inst_23763 = null;
var inst_23764 = (0);
var inst_23765 = (0);
var state_23822__$1 = (function (){var statearr_23859 = state_23822;
(statearr_23859[(9)] = inst_23763);

(statearr_23859[(27)] = inst_23797);

(statearr_23859[(10)] = inst_23765);

(statearr_23859[(20)] = inst_23764);

(statearr_23859[(21)] = inst_23762);

return statearr_23859;
})();
var statearr_23860_23931 = state_23822__$1;
(statearr_23860_23931[(2)] = null);

(statearr_23860_23931[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (43))){
var state_23822__$1 = state_23822;
var statearr_23861_23932 = state_23822__$1;
(statearr_23861_23932[(2)] = null);

(statearr_23861_23932[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (29))){
var inst_23806 = (state_23822[(2)]);
var state_23822__$1 = state_23822;
var statearr_23862_23933 = state_23822__$1;
(statearr_23862_23933[(2)] = inst_23806);

(statearr_23862_23933[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (44))){
var inst_23815 = (state_23822[(2)]);
var state_23822__$1 = (function (){var statearr_23863 = state_23822;
(statearr_23863[(28)] = inst_23815);

return statearr_23863;
})();
var statearr_23864_23934 = state_23822__$1;
(statearr_23864_23934[(2)] = null);

(statearr_23864_23934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (6))){
var inst_23754 = (state_23822[(29)]);
var inst_23753 = cljs.core.deref.call(null,cs);
var inst_23754__$1 = cljs.core.keys.call(null,inst_23753);
var inst_23755 = cljs.core.count.call(null,inst_23754__$1);
var inst_23756 = cljs.core.reset_BANG_.call(null,dctr,inst_23755);
var inst_23761 = cljs.core.seq.call(null,inst_23754__$1);
var inst_23762 = inst_23761;
var inst_23763 = null;
var inst_23764 = (0);
var inst_23765 = (0);
var state_23822__$1 = (function (){var statearr_23865 = state_23822;
(statearr_23865[(30)] = inst_23756);

(statearr_23865[(9)] = inst_23763);

(statearr_23865[(29)] = inst_23754__$1);

(statearr_23865[(10)] = inst_23765);

(statearr_23865[(20)] = inst_23764);

(statearr_23865[(21)] = inst_23762);

return statearr_23865;
})();
var statearr_23866_23935 = state_23822__$1;
(statearr_23866_23935[(2)] = null);

(statearr_23866_23935[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (28))){
var inst_23781 = (state_23822[(25)]);
var inst_23762 = (state_23822[(21)]);
var inst_23781__$1 = cljs.core.seq.call(null,inst_23762);
var state_23822__$1 = (function (){var statearr_23867 = state_23822;
(statearr_23867[(25)] = inst_23781__$1);

return statearr_23867;
})();
if(inst_23781__$1){
var statearr_23868_23936 = state_23822__$1;
(statearr_23868_23936[(1)] = (33));

} else {
var statearr_23869_23937 = state_23822__$1;
(statearr_23869_23937[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (25))){
var inst_23765 = (state_23822[(10)]);
var inst_23764 = (state_23822[(20)]);
var inst_23767 = (inst_23765 < inst_23764);
var inst_23768 = inst_23767;
var state_23822__$1 = state_23822;
if(cljs.core.truth_(inst_23768)){
var statearr_23870_23938 = state_23822__$1;
(statearr_23870_23938[(1)] = (27));

} else {
var statearr_23871_23939 = state_23822__$1;
(statearr_23871_23939[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (34))){
var state_23822__$1 = state_23822;
var statearr_23872_23940 = state_23822__$1;
(statearr_23872_23940[(2)] = null);

(statearr_23872_23940[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (17))){
var state_23822__$1 = state_23822;
var statearr_23873_23941 = state_23822__$1;
(statearr_23873_23941[(2)] = null);

(statearr_23873_23941[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (3))){
var inst_23820 = (state_23822[(2)]);
var state_23822__$1 = state_23822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23822__$1,inst_23820);
} else {
if((state_val_23823 === (12))){
var inst_23749 = (state_23822[(2)]);
var state_23822__$1 = state_23822;
var statearr_23874_23942 = state_23822__$1;
(statearr_23874_23942[(2)] = inst_23749);

(statearr_23874_23942[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (2))){
var state_23822__$1 = state_23822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23822__$1,(4),ch);
} else {
if((state_val_23823 === (23))){
var state_23822__$1 = state_23822;
var statearr_23875_23943 = state_23822__$1;
(statearr_23875_23943[(2)] = null);

(statearr_23875_23943[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (35))){
var inst_23804 = (state_23822[(2)]);
var state_23822__$1 = state_23822;
var statearr_23876_23944 = state_23822__$1;
(statearr_23876_23944[(2)] = inst_23804);

(statearr_23876_23944[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (19))){
var inst_23723 = (state_23822[(7)]);
var inst_23727 = cljs.core.chunk_first.call(null,inst_23723);
var inst_23728 = cljs.core.chunk_rest.call(null,inst_23723);
var inst_23729 = cljs.core.count.call(null,inst_23727);
var inst_23703 = inst_23728;
var inst_23704 = inst_23727;
var inst_23705 = inst_23729;
var inst_23706 = (0);
var state_23822__$1 = (function (){var statearr_23877 = state_23822;
(statearr_23877[(13)] = inst_23705);

(statearr_23877[(14)] = inst_23704);

(statearr_23877[(15)] = inst_23706);

(statearr_23877[(17)] = inst_23703);

return statearr_23877;
})();
var statearr_23878_23945 = state_23822__$1;
(statearr_23878_23945[(2)] = null);

(statearr_23878_23945[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (11))){
var inst_23723 = (state_23822[(7)]);
var inst_23703 = (state_23822[(17)]);
var inst_23723__$1 = cljs.core.seq.call(null,inst_23703);
var state_23822__$1 = (function (){var statearr_23879 = state_23822;
(statearr_23879[(7)] = inst_23723__$1);

return statearr_23879;
})();
if(inst_23723__$1){
var statearr_23880_23946 = state_23822__$1;
(statearr_23880_23946[(1)] = (16));

} else {
var statearr_23881_23947 = state_23822__$1;
(statearr_23881_23947[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (9))){
var inst_23751 = (state_23822[(2)]);
var state_23822__$1 = state_23822;
var statearr_23882_23948 = state_23822__$1;
(statearr_23882_23948[(2)] = inst_23751);

(statearr_23882_23948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (5))){
var inst_23701 = cljs.core.deref.call(null,cs);
var inst_23702 = cljs.core.seq.call(null,inst_23701);
var inst_23703 = inst_23702;
var inst_23704 = null;
var inst_23705 = (0);
var inst_23706 = (0);
var state_23822__$1 = (function (){var statearr_23883 = state_23822;
(statearr_23883[(13)] = inst_23705);

(statearr_23883[(14)] = inst_23704);

(statearr_23883[(15)] = inst_23706);

(statearr_23883[(17)] = inst_23703);

return statearr_23883;
})();
var statearr_23884_23949 = state_23822__$1;
(statearr_23884_23949[(2)] = null);

(statearr_23884_23949[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (14))){
var state_23822__$1 = state_23822;
var statearr_23885_23950 = state_23822__$1;
(statearr_23885_23950[(2)] = null);

(statearr_23885_23950[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (45))){
var inst_23812 = (state_23822[(2)]);
var state_23822__$1 = state_23822;
var statearr_23886_23951 = state_23822__$1;
(statearr_23886_23951[(2)] = inst_23812);

(statearr_23886_23951[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (26))){
var inst_23754 = (state_23822[(29)]);
var inst_23808 = (state_23822[(2)]);
var inst_23809 = cljs.core.seq.call(null,inst_23754);
var state_23822__$1 = (function (){var statearr_23887 = state_23822;
(statearr_23887[(31)] = inst_23808);

return statearr_23887;
})();
if(inst_23809){
var statearr_23888_23952 = state_23822__$1;
(statearr_23888_23952[(1)] = (42));

} else {
var statearr_23889_23953 = state_23822__$1;
(statearr_23889_23953[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (16))){
var inst_23723 = (state_23822[(7)]);
var inst_23725 = cljs.core.chunked_seq_QMARK_.call(null,inst_23723);
var state_23822__$1 = state_23822;
if(inst_23725){
var statearr_23890_23954 = state_23822__$1;
(statearr_23890_23954[(1)] = (19));

} else {
var statearr_23891_23955 = state_23822__$1;
(statearr_23891_23955[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (38))){
var inst_23801 = (state_23822[(2)]);
var state_23822__$1 = state_23822;
var statearr_23892_23956 = state_23822__$1;
(statearr_23892_23956[(2)] = inst_23801);

(statearr_23892_23956[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (30))){
var state_23822__$1 = state_23822;
var statearr_23893_23957 = state_23822__$1;
(statearr_23893_23957[(2)] = null);

(statearr_23893_23957[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (10))){
var inst_23704 = (state_23822[(14)]);
var inst_23706 = (state_23822[(15)]);
var inst_23712 = cljs.core._nth.call(null,inst_23704,inst_23706);
var inst_23713 = cljs.core.nth.call(null,inst_23712,(0),null);
var inst_23714 = cljs.core.nth.call(null,inst_23712,(1),null);
var state_23822__$1 = (function (){var statearr_23894 = state_23822;
(statearr_23894[(26)] = inst_23713);

return statearr_23894;
})();
if(cljs.core.truth_(inst_23714)){
var statearr_23895_23958 = state_23822__$1;
(statearr_23895_23958[(1)] = (13));

} else {
var statearr_23896_23959 = state_23822__$1;
(statearr_23896_23959[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (18))){
var inst_23747 = (state_23822[(2)]);
var state_23822__$1 = state_23822;
var statearr_23897_23960 = state_23822__$1;
(statearr_23897_23960[(2)] = inst_23747);

(statearr_23897_23960[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (42))){
var state_23822__$1 = state_23822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23822__$1,(45),dchan);
} else {
if((state_val_23823 === (37))){
var inst_23781 = (state_23822[(25)]);
var inst_23790 = (state_23822[(23)]);
var inst_23694 = (state_23822[(12)]);
var inst_23790__$1 = cljs.core.first.call(null,inst_23781);
var inst_23791 = cljs.core.async.put_BANG_.call(null,inst_23790__$1,inst_23694,done);
var state_23822__$1 = (function (){var statearr_23898 = state_23822;
(statearr_23898[(23)] = inst_23790__$1);

return statearr_23898;
})();
if(cljs.core.truth_(inst_23791)){
var statearr_23899_23961 = state_23822__$1;
(statearr_23899_23961[(1)] = (39));

} else {
var statearr_23900_23962 = state_23822__$1;
(statearr_23900_23962[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (8))){
var inst_23705 = (state_23822[(13)]);
var inst_23706 = (state_23822[(15)]);
var inst_23708 = (inst_23706 < inst_23705);
var inst_23709 = inst_23708;
var state_23822__$1 = state_23822;
if(cljs.core.truth_(inst_23709)){
var statearr_23901_23963 = state_23822__$1;
(statearr_23901_23963[(1)] = (10));

} else {
var statearr_23902_23964 = state_23822__$1;
(statearr_23902_23964[(1)] = (11));

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
});})(c__10448__auto___23910,cs,m,dchan,dctr,done))
;
return ((function (switch__10427__auto__,c__10448__auto___23910,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10428__auto__ = null;
var cljs$core$async$mult_$_state_machine__10428__auto____0 = (function (){
var statearr_23906 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23906[(0)] = cljs$core$async$mult_$_state_machine__10428__auto__);

(statearr_23906[(1)] = (1));

return statearr_23906;
});
var cljs$core$async$mult_$_state_machine__10428__auto____1 = (function (state_23822){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_23822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e23907){if((e23907 instanceof Object)){
var ex__10431__auto__ = e23907;
var statearr_23908_23965 = state_23822;
(statearr_23908_23965[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23966 = state_23822;
state_23822 = G__23966;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10428__auto__ = function(state_23822){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10428__auto____1.call(this,state_23822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10428__auto____0;
cljs$core$async$mult_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10428__auto____1;
return cljs$core$async$mult_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___23910,cs,m,dchan,dctr,done))
})();
var state__10450__auto__ = (function (){var statearr_23909 = f__10449__auto__.call(null);
(statearr_23909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___23910);

return statearr_23909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___23910,cs,m,dchan,dctr,done))
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
var args23967 = [];
var len__9158__auto___23970 = arguments.length;
var i__9159__auto___23971 = (0);
while(true){
if((i__9159__auto___23971 < len__9158__auto___23970)){
args23967.push((arguments[i__9159__auto___23971]));

var G__23972 = (i__9159__auto___23971 + (1));
i__9159__auto___23971 = G__23972;
continue;
} else {
}
break;
}

var G__23969 = args23967.length;
switch (G__23969) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23967.length)].join('')));

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
var len__9158__auto___23984 = arguments.length;
var i__9159__auto___23985 = (0);
while(true){
if((i__9159__auto___23985 < len__9158__auto___23984)){
args__9165__auto__.push((arguments[i__9159__auto___23985]));

var G__23986 = (i__9159__auto___23985 + (1));
i__9159__auto___23985 = G__23986;
continue;
} else {
}
break;
}

var argseq__9166__auto__ = ((((3) < args__9165__auto__.length))?(new cljs.core.IndexedSeq(args__9165__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9166__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23978){
var map__23979 = p__23978;
var map__23979__$1 = ((((!((map__23979 == null)))?((((map__23979.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23979.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23979):map__23979);
var opts = map__23979__$1;
var statearr_23981_23987 = state;
(statearr_23981_23987[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__23979,map__23979__$1,opts){
return (function (val){
var statearr_23982_23988 = state;
(statearr_23982_23988[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23979,map__23979__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_23983_23989 = state;
(statearr_23983_23989[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23974){
var G__23975 = cljs.core.first.call(null,seq23974);
var seq23974__$1 = cljs.core.next.call(null,seq23974);
var G__23976 = cljs.core.first.call(null,seq23974__$1);
var seq23974__$2 = cljs.core.next.call(null,seq23974__$1);
var G__23977 = cljs.core.first.call(null,seq23974__$2);
var seq23974__$3 = cljs.core.next.call(null,seq23974__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23975,G__23976,G__23977,seq23974__$3);
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
if(typeof cljs.core.async.t_cljs$core$async24153 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24153 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24154){
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
this.meta24154 = meta24154;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24153.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24155,meta24154__$1){
var self__ = this;
var _24155__$1 = this;
return (new cljs.core.async.t_cljs$core$async24153(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24154__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24153.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24155){
var self__ = this;
var _24155__$1 = this;
return self__.meta24154;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24153.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24153.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24153.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async24153.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24153.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24153.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24153.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24153.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async24153.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24154","meta24154",945145824,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24153.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24153.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24153";

cljs.core.async.t_cljs$core$async24153.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8698__auto__,writer__8699__auto__,opt__8700__auto__){
return cljs.core._write.call(null,writer__8699__auto__,"cljs.core.async/t_cljs$core$async24153");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async24153 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24153(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24154){
return (new cljs.core.async.t_cljs$core$async24153(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24154));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24153(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10448__auto___24316 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___24316,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___24316,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24253){
var state_val_24254 = (state_24253[(1)]);
if((state_val_24254 === (7))){
var inst_24171 = (state_24253[(2)]);
var state_24253__$1 = state_24253;
var statearr_24255_24317 = state_24253__$1;
(statearr_24255_24317[(2)] = inst_24171);

(statearr_24255_24317[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24254 === (20))){
var inst_24183 = (state_24253[(7)]);
var state_24253__$1 = state_24253;
var statearr_24256_24318 = state_24253__$1;
(statearr_24256_24318[(2)] = inst_24183);

(statearr_24256_24318[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24254 === (27))){
var state_24253__$1 = state_24253;
var statearr_24257_24319 = state_24253__$1;
(statearr_24257_24319[(2)] = null);

(statearr_24257_24319[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24254 === (1))){
var inst_24159 = (state_24253[(8)]);
var inst_24159__$1 = calc_state.call(null);
var inst_24161 = (inst_24159__$1 == null);
var inst_24162 = cljs.core.not.call(null,inst_24161);
var state_24253__$1 = (function (){var statearr_24258 = state_24253;
(statearr_24258[(8)] = inst_24159__$1);

return statearr_24258;
})();
if(inst_24162){
var statearr_24259_24320 = state_24253__$1;
(statearr_24259_24320[(1)] = (2));

} else {
var statearr_24260_24321 = state_24253__$1;
(statearr_24260_24321[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24254 === (24))){
var inst_24206 = (state_24253[(9)]);
var inst_24227 = (state_24253[(10)]);
var inst_24213 = (state_24253[(11)]);
var inst_24227__$1 = inst_24206.call(null,inst_24213);
var state_24253__$1 = (function (){var statearr_24261 = state_24253;
(statearr_24261[(10)] = inst_24227__$1);

return statearr_24261;
})();
if(cljs.core.truth_(inst_24227__$1)){
var statearr_24262_24322 = state_24253__$1;
(statearr_24262_24322[(1)] = (29));

} else {
var statearr_24263_24323 = state_24253__$1;
(statearr_24263_24323[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24254 === (4))){
var inst_24174 = (state_24253[(2)]);
var state_24253__$1 = state_24253;
if(cljs.core.truth_(inst_24174)){
var statearr_24264_24324 = state_24253__$1;
(statearr_24264_24324[(1)] = (8));

} else {
var statearr_24265_24325 = state_24253__$1;
(statearr_24265_24325[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24254 === (15))){
var inst_24200 = (state_24253[(2)]);
var state_24253__$1 = state_24253;
if(cljs.core.truth_(inst_24200)){
var statearr_24266_24326 = state_24253__$1;
(statearr_24266_24326[(1)] = (19));

} else {
var statearr_24267_24327 = state_24253__$1;
(statearr_24267_24327[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24254 === (21))){
var inst_24205 = (state_24253[(12)]);
var inst_24205__$1 = (state_24253[(2)]);
var inst_24206 = cljs.core.get.call(null,inst_24205__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24207 = cljs.core.get.call(null,inst_24205__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24208 = cljs.core.get.call(null,inst_24205__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24253__$1 = (function (){var statearr_24268 = state_24253;
(statearr_24268[(9)] = inst_24206);

(statearr_24268[(12)] = inst_24205__$1);

(statearr_24268[(13)] = inst_24207);

return statearr_24268;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24253__$1,(22),inst_24208);
} else {
if((state_val_24254 === (31))){
var inst_24235 = (state_24253[(2)]);
var state_24253__$1 = state_24253;
if(cljs.core.truth_(inst_24235)){
var statearr_24269_24328 = state_24253__$1;
(statearr_24269_24328[(1)] = (32));

} else {
var statearr_24270_24329 = state_24253__$1;
(statearr_24270_24329[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24254 === (32))){
var inst_24212 = (state_24253[(14)]);
var state_24253__$1 = state_24253;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24253__$1,(35),out,inst_24212);
} else {
if((state_val_24254 === (33))){
var inst_24205 = (state_24253[(12)]);
var inst_24183 = inst_24205;
var state_24253__$1 = (function (){var statearr_24271 = state_24253;
(statearr_24271[(7)] = inst_24183);

return statearr_24271;
})();
var statearr_24272_24330 = state_24253__$1;
(statearr_24272_24330[(2)] = null);

(statearr_24272_24330[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24254 === (13))){
var inst_24183 = (state_24253[(7)]);
var inst_24190 = inst_24183.cljs$lang$protocol_mask$partition0$;
var inst_24191 = (inst_24190 & (64));
var inst_24192 = inst_24183.cljs$core$ISeq$;
var inst_24193 = (inst_24191) || (inst_24192);
var state_24253__$1 = state_24253;
if(cljs.core.truth_(inst_24193)){
var statearr_24273_24331 = state_24253__$1;
(statearr_24273_24331[(1)] = (16));

} else {
var statearr_24274_24332 = state_24253__$1;
(statearr_24274_24332[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24254 === (22))){
var inst_24212 = (state_24253[(14)]);
var inst_24213 = (state_24253[(11)]);
var inst_24211 = (state_24253[(2)]);
var inst_24212__$1 = cljs.core.nth.call(null,inst_24211,(0),null);
var inst_24213__$1 = cljs.core.nth.call(null,inst_24211,(1),null);
var inst_24214 = (inst_24212__$1 == null);
var inst_24215 = cljs.core._EQ_.call(null,inst_24213__$1,change);
var inst_24216 = (inst_24214) || (inst_24215);
var state_24253__$1 = (function (){var statearr_24275 = state_24253;
(statearr_24275[(14)] = inst_24212__$1);

(statearr_24275[(11)] = inst_24213__$1);

return statearr_24275;
})();
if(cljs.core.truth_(inst_24216)){
var statearr_24276_24333 = state_24253__$1;
(statearr_24276_24333[(1)] = (23));

} else {
var statearr_24277_24334 = state_24253__$1;
(statearr_24277_24334[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24254 === (36))){
var inst_24205 = (state_24253[(12)]);
var inst_24183 = inst_24205;
var state_24253__$1 = (function (){var statearr_24278 = state_24253;
(statearr_24278[(7)] = inst_24183);

return statearr_24278;
})();
var statearr_24279_24335 = state_24253__$1;
(statearr_24279_24335[(2)] = null);

(statearr_24279_24335[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24254 === (29))){
var inst_24227 = (state_24253[(10)]);
var state_24253__$1 = state_24253;
var statearr_24280_24336 = state_24253__$1;
(statearr_24280_24336[(2)] = inst_24227);

(statearr_24280_24336[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24254 === (6))){
var state_24253__$1 = state_24253;
var statearr_24281_24337 = state_24253__$1;
(statearr_24281_24337[(2)] = false);

(statearr_24281_24337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24254 === (28))){
var inst_24223 = (state_24253[(2)]);
var inst_24224 = calc_state.call(null);
var inst_24183 = inst_24224;
var state_24253__$1 = (function (){var statearr_24282 = state_24253;
(statearr_24282[(7)] = inst_24183);

(statearr_24282[(15)] = inst_24223);

return statearr_24282;
})();
var statearr_24283_24338 = state_24253__$1;
(statearr_24283_24338[(2)] = null);

(statearr_24283_24338[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24254 === (25))){
var inst_24249 = (state_24253[(2)]);
var state_24253__$1 = state_24253;
var statearr_24284_24339 = state_24253__$1;
(statearr_24284_24339[(2)] = inst_24249);

(statearr_24284_24339[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24254 === (34))){
var inst_24247 = (state_24253[(2)]);
var state_24253__$1 = state_24253;
var statearr_24285_24340 = state_24253__$1;
(statearr_24285_24340[(2)] = inst_24247);

(statearr_24285_24340[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24254 === (17))){
var state_24253__$1 = state_24253;
var statearr_24286_24341 = state_24253__$1;
(statearr_24286_24341[(2)] = false);

(statearr_24286_24341[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24254 === (3))){
var state_24253__$1 = state_24253;
var statearr_24287_24342 = state_24253__$1;
(statearr_24287_24342[(2)] = false);

(statearr_24287_24342[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24254 === (12))){
var inst_24251 = (state_24253[(2)]);
var state_24253__$1 = state_24253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24253__$1,inst_24251);
} else {
if((state_val_24254 === (2))){
var inst_24159 = (state_24253[(8)]);
var inst_24164 = inst_24159.cljs$lang$protocol_mask$partition0$;
var inst_24165 = (inst_24164 & (64));
var inst_24166 = inst_24159.cljs$core$ISeq$;
var inst_24167 = (inst_24165) || (inst_24166);
var state_24253__$1 = state_24253;
if(cljs.core.truth_(inst_24167)){
var statearr_24288_24343 = state_24253__$1;
(statearr_24288_24343[(1)] = (5));

} else {
var statearr_24289_24344 = state_24253__$1;
(statearr_24289_24344[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24254 === (23))){
var inst_24212 = (state_24253[(14)]);
var inst_24218 = (inst_24212 == null);
var state_24253__$1 = state_24253;
if(cljs.core.truth_(inst_24218)){
var statearr_24290_24345 = state_24253__$1;
(statearr_24290_24345[(1)] = (26));

} else {
var statearr_24291_24346 = state_24253__$1;
(statearr_24291_24346[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24254 === (35))){
var inst_24238 = (state_24253[(2)]);
var state_24253__$1 = state_24253;
if(cljs.core.truth_(inst_24238)){
var statearr_24292_24347 = state_24253__$1;
(statearr_24292_24347[(1)] = (36));

} else {
var statearr_24293_24348 = state_24253__$1;
(statearr_24293_24348[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24254 === (19))){
var inst_24183 = (state_24253[(7)]);
var inst_24202 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24183);
var state_24253__$1 = state_24253;
var statearr_24294_24349 = state_24253__$1;
(statearr_24294_24349[(2)] = inst_24202);

(statearr_24294_24349[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24254 === (11))){
var inst_24183 = (state_24253[(7)]);
var inst_24187 = (inst_24183 == null);
var inst_24188 = cljs.core.not.call(null,inst_24187);
var state_24253__$1 = state_24253;
if(inst_24188){
var statearr_24295_24350 = state_24253__$1;
(statearr_24295_24350[(1)] = (13));

} else {
var statearr_24296_24351 = state_24253__$1;
(statearr_24296_24351[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24254 === (9))){
var inst_24159 = (state_24253[(8)]);
var state_24253__$1 = state_24253;
var statearr_24297_24352 = state_24253__$1;
(statearr_24297_24352[(2)] = inst_24159);

(statearr_24297_24352[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24254 === (5))){
var state_24253__$1 = state_24253;
var statearr_24298_24353 = state_24253__$1;
(statearr_24298_24353[(2)] = true);

(statearr_24298_24353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24254 === (14))){
var state_24253__$1 = state_24253;
var statearr_24299_24354 = state_24253__$1;
(statearr_24299_24354[(2)] = false);

(statearr_24299_24354[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24254 === (26))){
var inst_24213 = (state_24253[(11)]);
var inst_24220 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24213);
var state_24253__$1 = state_24253;
var statearr_24300_24355 = state_24253__$1;
(statearr_24300_24355[(2)] = inst_24220);

(statearr_24300_24355[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24254 === (16))){
var state_24253__$1 = state_24253;
var statearr_24301_24356 = state_24253__$1;
(statearr_24301_24356[(2)] = true);

(statearr_24301_24356[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24254 === (38))){
var inst_24243 = (state_24253[(2)]);
var state_24253__$1 = state_24253;
var statearr_24302_24357 = state_24253__$1;
(statearr_24302_24357[(2)] = inst_24243);

(statearr_24302_24357[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24254 === (30))){
var inst_24206 = (state_24253[(9)]);
var inst_24207 = (state_24253[(13)]);
var inst_24213 = (state_24253[(11)]);
var inst_24230 = cljs.core.empty_QMARK_.call(null,inst_24206);
var inst_24231 = inst_24207.call(null,inst_24213);
var inst_24232 = cljs.core.not.call(null,inst_24231);
var inst_24233 = (inst_24230) && (inst_24232);
var state_24253__$1 = state_24253;
var statearr_24303_24358 = state_24253__$1;
(statearr_24303_24358[(2)] = inst_24233);

(statearr_24303_24358[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24254 === (10))){
var inst_24159 = (state_24253[(8)]);
var inst_24179 = (state_24253[(2)]);
var inst_24180 = cljs.core.get.call(null,inst_24179,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24181 = cljs.core.get.call(null,inst_24179,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24182 = cljs.core.get.call(null,inst_24179,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24183 = inst_24159;
var state_24253__$1 = (function (){var statearr_24304 = state_24253;
(statearr_24304[(7)] = inst_24183);

(statearr_24304[(16)] = inst_24180);

(statearr_24304[(17)] = inst_24182);

(statearr_24304[(18)] = inst_24181);

return statearr_24304;
})();
var statearr_24305_24359 = state_24253__$1;
(statearr_24305_24359[(2)] = null);

(statearr_24305_24359[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24254 === (18))){
var inst_24197 = (state_24253[(2)]);
var state_24253__$1 = state_24253;
var statearr_24306_24360 = state_24253__$1;
(statearr_24306_24360[(2)] = inst_24197);

(statearr_24306_24360[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24254 === (37))){
var state_24253__$1 = state_24253;
var statearr_24307_24361 = state_24253__$1;
(statearr_24307_24361[(2)] = null);

(statearr_24307_24361[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24254 === (8))){
var inst_24159 = (state_24253[(8)]);
var inst_24176 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24159);
var state_24253__$1 = state_24253;
var statearr_24308_24362 = state_24253__$1;
(statearr_24308_24362[(2)] = inst_24176);

(statearr_24308_24362[(1)] = (10));


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
});})(c__10448__auto___24316,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10427__auto__,c__10448__auto___24316,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10428__auto__ = null;
var cljs$core$async$mix_$_state_machine__10428__auto____0 = (function (){
var statearr_24312 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24312[(0)] = cljs$core$async$mix_$_state_machine__10428__auto__);

(statearr_24312[(1)] = (1));

return statearr_24312;
});
var cljs$core$async$mix_$_state_machine__10428__auto____1 = (function (state_24253){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_24253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e24313){if((e24313 instanceof Object)){
var ex__10431__auto__ = e24313;
var statearr_24314_24363 = state_24253;
(statearr_24314_24363[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24364 = state_24253;
state_24253 = G__24364;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10428__auto__ = function(state_24253){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10428__auto____1.call(this,state_24253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10428__auto____0;
cljs$core$async$mix_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10428__auto____1;
return cljs$core$async$mix_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___24316,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10450__auto__ = (function (){var statearr_24315 = f__10449__auto__.call(null);
(statearr_24315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___24316);

return statearr_24315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___24316,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args24365 = [];
var len__9158__auto___24368 = arguments.length;
var i__9159__auto___24369 = (0);
while(true){
if((i__9159__auto___24369 < len__9158__auto___24368)){
args24365.push((arguments[i__9159__auto___24369]));

var G__24370 = (i__9159__auto___24369 + (1));
i__9159__auto___24369 = G__24370;
continue;
} else {
}
break;
}

var G__24367 = args24365.length;
switch (G__24367) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24365.length)].join('')));

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
var args24373 = [];
var len__9158__auto___24498 = arguments.length;
var i__9159__auto___24499 = (0);
while(true){
if((i__9159__auto___24499 < len__9158__auto___24498)){
args24373.push((arguments[i__9159__auto___24499]));

var G__24500 = (i__9159__auto___24499 + (1));
i__9159__auto___24499 = G__24500;
continue;
} else {
}
break;
}

var G__24375 = args24373.length;
switch (G__24375) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24373.length)].join('')));

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
return (function (p1__24372_SHARP_){
if(cljs.core.truth_(p1__24372_SHARP_.call(null,topic))){
return p1__24372_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24372_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__8100__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async24376 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24376 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24377){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24377 = meta24377;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24378,meta24377__$1){
var self__ = this;
var _24378__$1 = this;
return (new cljs.core.async.t_cljs$core$async24376(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24377__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24376.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24378){
var self__ = this;
var _24378__$1 = this;
return self__.meta24377;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24376.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24376.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24376.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async24376.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24376.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async24376.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24376.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24376.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24377","meta24377",237405005,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24376.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24376.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24376";

cljs.core.async.t_cljs$core$async24376.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8698__auto__,writer__8699__auto__,opt__8700__auto__){
return cljs.core._write.call(null,writer__8699__auto__,"cljs.core.async/t_cljs$core$async24376");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async24376 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24376(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24377){
return (new cljs.core.async.t_cljs$core$async24376(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24377));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24376(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10448__auto___24502 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___24502,mults,ensure_mult,p){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___24502,mults,ensure_mult,p){
return (function (state_24450){
var state_val_24451 = (state_24450[(1)]);
if((state_val_24451 === (7))){
var inst_24446 = (state_24450[(2)]);
var state_24450__$1 = state_24450;
var statearr_24452_24503 = state_24450__$1;
(statearr_24452_24503[(2)] = inst_24446);

(statearr_24452_24503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24451 === (20))){
var state_24450__$1 = state_24450;
var statearr_24453_24504 = state_24450__$1;
(statearr_24453_24504[(2)] = null);

(statearr_24453_24504[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24451 === (1))){
var state_24450__$1 = state_24450;
var statearr_24454_24505 = state_24450__$1;
(statearr_24454_24505[(2)] = null);

(statearr_24454_24505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24451 === (24))){
var inst_24429 = (state_24450[(7)]);
var inst_24438 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24429);
var state_24450__$1 = state_24450;
var statearr_24455_24506 = state_24450__$1;
(statearr_24455_24506[(2)] = inst_24438);

(statearr_24455_24506[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24451 === (4))){
var inst_24381 = (state_24450[(8)]);
var inst_24381__$1 = (state_24450[(2)]);
var inst_24382 = (inst_24381__$1 == null);
var state_24450__$1 = (function (){var statearr_24456 = state_24450;
(statearr_24456[(8)] = inst_24381__$1);

return statearr_24456;
})();
if(cljs.core.truth_(inst_24382)){
var statearr_24457_24507 = state_24450__$1;
(statearr_24457_24507[(1)] = (5));

} else {
var statearr_24458_24508 = state_24450__$1;
(statearr_24458_24508[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24451 === (15))){
var inst_24423 = (state_24450[(2)]);
var state_24450__$1 = state_24450;
var statearr_24459_24509 = state_24450__$1;
(statearr_24459_24509[(2)] = inst_24423);

(statearr_24459_24509[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24451 === (21))){
var inst_24443 = (state_24450[(2)]);
var state_24450__$1 = (function (){var statearr_24460 = state_24450;
(statearr_24460[(9)] = inst_24443);

return statearr_24460;
})();
var statearr_24461_24510 = state_24450__$1;
(statearr_24461_24510[(2)] = null);

(statearr_24461_24510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24451 === (13))){
var inst_24405 = (state_24450[(10)]);
var inst_24407 = cljs.core.chunked_seq_QMARK_.call(null,inst_24405);
var state_24450__$1 = state_24450;
if(inst_24407){
var statearr_24462_24511 = state_24450__$1;
(statearr_24462_24511[(1)] = (16));

} else {
var statearr_24463_24512 = state_24450__$1;
(statearr_24463_24512[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24451 === (22))){
var inst_24435 = (state_24450[(2)]);
var state_24450__$1 = state_24450;
if(cljs.core.truth_(inst_24435)){
var statearr_24464_24513 = state_24450__$1;
(statearr_24464_24513[(1)] = (23));

} else {
var statearr_24465_24514 = state_24450__$1;
(statearr_24465_24514[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24451 === (6))){
var inst_24431 = (state_24450[(11)]);
var inst_24429 = (state_24450[(7)]);
var inst_24381 = (state_24450[(8)]);
var inst_24429__$1 = topic_fn.call(null,inst_24381);
var inst_24430 = cljs.core.deref.call(null,mults);
var inst_24431__$1 = cljs.core.get.call(null,inst_24430,inst_24429__$1);
var state_24450__$1 = (function (){var statearr_24466 = state_24450;
(statearr_24466[(11)] = inst_24431__$1);

(statearr_24466[(7)] = inst_24429__$1);

return statearr_24466;
})();
if(cljs.core.truth_(inst_24431__$1)){
var statearr_24467_24515 = state_24450__$1;
(statearr_24467_24515[(1)] = (19));

} else {
var statearr_24468_24516 = state_24450__$1;
(statearr_24468_24516[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24451 === (25))){
var inst_24440 = (state_24450[(2)]);
var state_24450__$1 = state_24450;
var statearr_24469_24517 = state_24450__$1;
(statearr_24469_24517[(2)] = inst_24440);

(statearr_24469_24517[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24451 === (17))){
var inst_24405 = (state_24450[(10)]);
var inst_24414 = cljs.core.first.call(null,inst_24405);
var inst_24415 = cljs.core.async.muxch_STAR_.call(null,inst_24414);
var inst_24416 = cljs.core.async.close_BANG_.call(null,inst_24415);
var inst_24417 = cljs.core.next.call(null,inst_24405);
var inst_24391 = inst_24417;
var inst_24392 = null;
var inst_24393 = (0);
var inst_24394 = (0);
var state_24450__$1 = (function (){var statearr_24470 = state_24450;
(statearr_24470[(12)] = inst_24392);

(statearr_24470[(13)] = inst_24394);

(statearr_24470[(14)] = inst_24393);

(statearr_24470[(15)] = inst_24391);

(statearr_24470[(16)] = inst_24416);

return statearr_24470;
})();
var statearr_24471_24518 = state_24450__$1;
(statearr_24471_24518[(2)] = null);

(statearr_24471_24518[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24451 === (3))){
var inst_24448 = (state_24450[(2)]);
var state_24450__$1 = state_24450;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24450__$1,inst_24448);
} else {
if((state_val_24451 === (12))){
var inst_24425 = (state_24450[(2)]);
var state_24450__$1 = state_24450;
var statearr_24472_24519 = state_24450__$1;
(statearr_24472_24519[(2)] = inst_24425);

(statearr_24472_24519[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24451 === (2))){
var state_24450__$1 = state_24450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24450__$1,(4),ch);
} else {
if((state_val_24451 === (23))){
var state_24450__$1 = state_24450;
var statearr_24473_24520 = state_24450__$1;
(statearr_24473_24520[(2)] = null);

(statearr_24473_24520[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24451 === (19))){
var inst_24431 = (state_24450[(11)]);
var inst_24381 = (state_24450[(8)]);
var inst_24433 = cljs.core.async.muxch_STAR_.call(null,inst_24431);
var state_24450__$1 = state_24450;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24450__$1,(22),inst_24433,inst_24381);
} else {
if((state_val_24451 === (11))){
var inst_24391 = (state_24450[(15)]);
var inst_24405 = (state_24450[(10)]);
var inst_24405__$1 = cljs.core.seq.call(null,inst_24391);
var state_24450__$1 = (function (){var statearr_24474 = state_24450;
(statearr_24474[(10)] = inst_24405__$1);

return statearr_24474;
})();
if(inst_24405__$1){
var statearr_24475_24521 = state_24450__$1;
(statearr_24475_24521[(1)] = (13));

} else {
var statearr_24476_24522 = state_24450__$1;
(statearr_24476_24522[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24451 === (9))){
var inst_24427 = (state_24450[(2)]);
var state_24450__$1 = state_24450;
var statearr_24477_24523 = state_24450__$1;
(statearr_24477_24523[(2)] = inst_24427);

(statearr_24477_24523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24451 === (5))){
var inst_24388 = cljs.core.deref.call(null,mults);
var inst_24389 = cljs.core.vals.call(null,inst_24388);
var inst_24390 = cljs.core.seq.call(null,inst_24389);
var inst_24391 = inst_24390;
var inst_24392 = null;
var inst_24393 = (0);
var inst_24394 = (0);
var state_24450__$1 = (function (){var statearr_24478 = state_24450;
(statearr_24478[(12)] = inst_24392);

(statearr_24478[(13)] = inst_24394);

(statearr_24478[(14)] = inst_24393);

(statearr_24478[(15)] = inst_24391);

return statearr_24478;
})();
var statearr_24479_24524 = state_24450__$1;
(statearr_24479_24524[(2)] = null);

(statearr_24479_24524[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24451 === (14))){
var state_24450__$1 = state_24450;
var statearr_24483_24525 = state_24450__$1;
(statearr_24483_24525[(2)] = null);

(statearr_24483_24525[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24451 === (16))){
var inst_24405 = (state_24450[(10)]);
var inst_24409 = cljs.core.chunk_first.call(null,inst_24405);
var inst_24410 = cljs.core.chunk_rest.call(null,inst_24405);
var inst_24411 = cljs.core.count.call(null,inst_24409);
var inst_24391 = inst_24410;
var inst_24392 = inst_24409;
var inst_24393 = inst_24411;
var inst_24394 = (0);
var state_24450__$1 = (function (){var statearr_24484 = state_24450;
(statearr_24484[(12)] = inst_24392);

(statearr_24484[(13)] = inst_24394);

(statearr_24484[(14)] = inst_24393);

(statearr_24484[(15)] = inst_24391);

return statearr_24484;
})();
var statearr_24485_24526 = state_24450__$1;
(statearr_24485_24526[(2)] = null);

(statearr_24485_24526[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24451 === (10))){
var inst_24392 = (state_24450[(12)]);
var inst_24394 = (state_24450[(13)]);
var inst_24393 = (state_24450[(14)]);
var inst_24391 = (state_24450[(15)]);
var inst_24399 = cljs.core._nth.call(null,inst_24392,inst_24394);
var inst_24400 = cljs.core.async.muxch_STAR_.call(null,inst_24399);
var inst_24401 = cljs.core.async.close_BANG_.call(null,inst_24400);
var inst_24402 = (inst_24394 + (1));
var tmp24480 = inst_24392;
var tmp24481 = inst_24393;
var tmp24482 = inst_24391;
var inst_24391__$1 = tmp24482;
var inst_24392__$1 = tmp24480;
var inst_24393__$1 = tmp24481;
var inst_24394__$1 = inst_24402;
var state_24450__$1 = (function (){var statearr_24486 = state_24450;
(statearr_24486[(12)] = inst_24392__$1);

(statearr_24486[(13)] = inst_24394__$1);

(statearr_24486[(17)] = inst_24401);

(statearr_24486[(14)] = inst_24393__$1);

(statearr_24486[(15)] = inst_24391__$1);

return statearr_24486;
})();
var statearr_24487_24527 = state_24450__$1;
(statearr_24487_24527[(2)] = null);

(statearr_24487_24527[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24451 === (18))){
var inst_24420 = (state_24450[(2)]);
var state_24450__$1 = state_24450;
var statearr_24488_24528 = state_24450__$1;
(statearr_24488_24528[(2)] = inst_24420);

(statearr_24488_24528[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24451 === (8))){
var inst_24394 = (state_24450[(13)]);
var inst_24393 = (state_24450[(14)]);
var inst_24396 = (inst_24394 < inst_24393);
var inst_24397 = inst_24396;
var state_24450__$1 = state_24450;
if(cljs.core.truth_(inst_24397)){
var statearr_24489_24529 = state_24450__$1;
(statearr_24489_24529[(1)] = (10));

} else {
var statearr_24490_24530 = state_24450__$1;
(statearr_24490_24530[(1)] = (11));

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
});})(c__10448__auto___24502,mults,ensure_mult,p))
;
return ((function (switch__10427__auto__,c__10448__auto___24502,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10428__auto__ = null;
var cljs$core$async$state_machine__10428__auto____0 = (function (){
var statearr_24494 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24494[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_24494[(1)] = (1));

return statearr_24494;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_24450){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_24450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e24495){if((e24495 instanceof Object)){
var ex__10431__auto__ = e24495;
var statearr_24496_24531 = state_24450;
(statearr_24496_24531[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24532 = state_24450;
state_24450 = G__24532;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_24450){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_24450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___24502,mults,ensure_mult,p))
})();
var state__10450__auto__ = (function (){var statearr_24497 = f__10449__auto__.call(null);
(statearr_24497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___24502);

return statearr_24497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___24502,mults,ensure_mult,p))
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
var args24533 = [];
var len__9158__auto___24536 = arguments.length;
var i__9159__auto___24537 = (0);
while(true){
if((i__9159__auto___24537 < len__9158__auto___24536)){
args24533.push((arguments[i__9159__auto___24537]));

var G__24538 = (i__9159__auto___24537 + (1));
i__9159__auto___24537 = G__24538;
continue;
} else {
}
break;
}

var G__24535 = args24533.length;
switch (G__24535) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24533.length)].join('')));

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
var args24540 = [];
var len__9158__auto___24543 = arguments.length;
var i__9159__auto___24544 = (0);
while(true){
if((i__9159__auto___24544 < len__9158__auto___24543)){
args24540.push((arguments[i__9159__auto___24544]));

var G__24545 = (i__9159__auto___24544 + (1));
i__9159__auto___24544 = G__24545;
continue;
} else {
}
break;
}

var G__24542 = args24540.length;
switch (G__24542) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24540.length)].join('')));

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
var args24547 = [];
var len__9158__auto___24618 = arguments.length;
var i__9159__auto___24619 = (0);
while(true){
if((i__9159__auto___24619 < len__9158__auto___24618)){
args24547.push((arguments[i__9159__auto___24619]));

var G__24620 = (i__9159__auto___24619 + (1));
i__9159__auto___24619 = G__24620;
continue;
} else {
}
break;
}

var G__24549 = args24547.length;
switch (G__24549) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24547.length)].join('')));

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
var c__10448__auto___24622 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___24622,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___24622,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24588){
var state_val_24589 = (state_24588[(1)]);
if((state_val_24589 === (7))){
var state_24588__$1 = state_24588;
var statearr_24590_24623 = state_24588__$1;
(statearr_24590_24623[(2)] = null);

(statearr_24590_24623[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24589 === (1))){
var state_24588__$1 = state_24588;
var statearr_24591_24624 = state_24588__$1;
(statearr_24591_24624[(2)] = null);

(statearr_24591_24624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24589 === (4))){
var inst_24552 = (state_24588[(7)]);
var inst_24554 = (inst_24552 < cnt);
var state_24588__$1 = state_24588;
if(cljs.core.truth_(inst_24554)){
var statearr_24592_24625 = state_24588__$1;
(statearr_24592_24625[(1)] = (6));

} else {
var statearr_24593_24626 = state_24588__$1;
(statearr_24593_24626[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24589 === (15))){
var inst_24584 = (state_24588[(2)]);
var state_24588__$1 = state_24588;
var statearr_24594_24627 = state_24588__$1;
(statearr_24594_24627[(2)] = inst_24584);

(statearr_24594_24627[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24589 === (13))){
var inst_24577 = cljs.core.async.close_BANG_.call(null,out);
var state_24588__$1 = state_24588;
var statearr_24595_24628 = state_24588__$1;
(statearr_24595_24628[(2)] = inst_24577);

(statearr_24595_24628[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24589 === (6))){
var state_24588__$1 = state_24588;
var statearr_24596_24629 = state_24588__$1;
(statearr_24596_24629[(2)] = null);

(statearr_24596_24629[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24589 === (3))){
var inst_24586 = (state_24588[(2)]);
var state_24588__$1 = state_24588;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24588__$1,inst_24586);
} else {
if((state_val_24589 === (12))){
var inst_24574 = (state_24588[(8)]);
var inst_24574__$1 = (state_24588[(2)]);
var inst_24575 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24574__$1);
var state_24588__$1 = (function (){var statearr_24597 = state_24588;
(statearr_24597[(8)] = inst_24574__$1);

return statearr_24597;
})();
if(cljs.core.truth_(inst_24575)){
var statearr_24598_24630 = state_24588__$1;
(statearr_24598_24630[(1)] = (13));

} else {
var statearr_24599_24631 = state_24588__$1;
(statearr_24599_24631[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24589 === (2))){
var inst_24551 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24552 = (0);
var state_24588__$1 = (function (){var statearr_24600 = state_24588;
(statearr_24600[(7)] = inst_24552);

(statearr_24600[(9)] = inst_24551);

return statearr_24600;
})();
var statearr_24601_24632 = state_24588__$1;
(statearr_24601_24632[(2)] = null);

(statearr_24601_24632[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24589 === (11))){
var inst_24552 = (state_24588[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24588,(10),Object,null,(9));
var inst_24561 = chs__$1.call(null,inst_24552);
var inst_24562 = done.call(null,inst_24552);
var inst_24563 = cljs.core.async.take_BANG_.call(null,inst_24561,inst_24562);
var state_24588__$1 = state_24588;
var statearr_24602_24633 = state_24588__$1;
(statearr_24602_24633[(2)] = inst_24563);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24588__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24589 === (9))){
var inst_24552 = (state_24588[(7)]);
var inst_24565 = (state_24588[(2)]);
var inst_24566 = (inst_24552 + (1));
var inst_24552__$1 = inst_24566;
var state_24588__$1 = (function (){var statearr_24603 = state_24588;
(statearr_24603[(7)] = inst_24552__$1);

(statearr_24603[(10)] = inst_24565);

return statearr_24603;
})();
var statearr_24604_24634 = state_24588__$1;
(statearr_24604_24634[(2)] = null);

(statearr_24604_24634[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24589 === (5))){
var inst_24572 = (state_24588[(2)]);
var state_24588__$1 = (function (){var statearr_24605 = state_24588;
(statearr_24605[(11)] = inst_24572);

return statearr_24605;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24588__$1,(12),dchan);
} else {
if((state_val_24589 === (14))){
var inst_24574 = (state_24588[(8)]);
var inst_24579 = cljs.core.apply.call(null,f,inst_24574);
var state_24588__$1 = state_24588;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24588__$1,(16),out,inst_24579);
} else {
if((state_val_24589 === (16))){
var inst_24581 = (state_24588[(2)]);
var state_24588__$1 = (function (){var statearr_24606 = state_24588;
(statearr_24606[(12)] = inst_24581);

return statearr_24606;
})();
var statearr_24607_24635 = state_24588__$1;
(statearr_24607_24635[(2)] = null);

(statearr_24607_24635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24589 === (10))){
var inst_24556 = (state_24588[(2)]);
var inst_24557 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24588__$1 = (function (){var statearr_24608 = state_24588;
(statearr_24608[(13)] = inst_24556);

return statearr_24608;
})();
var statearr_24609_24636 = state_24588__$1;
(statearr_24609_24636[(2)] = inst_24557);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24588__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24589 === (8))){
var inst_24570 = (state_24588[(2)]);
var state_24588__$1 = state_24588;
var statearr_24610_24637 = state_24588__$1;
(statearr_24610_24637[(2)] = inst_24570);

(statearr_24610_24637[(1)] = (5));


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
});})(c__10448__auto___24622,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10427__auto__,c__10448__auto___24622,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10428__auto__ = null;
var cljs$core$async$state_machine__10428__auto____0 = (function (){
var statearr_24614 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24614[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_24614[(1)] = (1));

return statearr_24614;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_24588){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_24588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e24615){if((e24615 instanceof Object)){
var ex__10431__auto__ = e24615;
var statearr_24616_24638 = state_24588;
(statearr_24616_24638[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24639 = state_24588;
state_24588 = G__24639;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_24588){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_24588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___24622,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10450__auto__ = (function (){var statearr_24617 = f__10449__auto__.call(null);
(statearr_24617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___24622);

return statearr_24617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___24622,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args24641 = [];
var len__9158__auto___24697 = arguments.length;
var i__9159__auto___24698 = (0);
while(true){
if((i__9159__auto___24698 < len__9158__auto___24697)){
args24641.push((arguments[i__9159__auto___24698]));

var G__24699 = (i__9159__auto___24698 + (1));
i__9159__auto___24698 = G__24699;
continue;
} else {
}
break;
}

var G__24643 = args24641.length;
switch (G__24643) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24641.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10448__auto___24701 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___24701,out){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___24701,out){
return (function (state_24673){
var state_val_24674 = (state_24673[(1)]);
if((state_val_24674 === (7))){
var inst_24653 = (state_24673[(7)]);
var inst_24652 = (state_24673[(8)]);
var inst_24652__$1 = (state_24673[(2)]);
var inst_24653__$1 = cljs.core.nth.call(null,inst_24652__$1,(0),null);
var inst_24654 = cljs.core.nth.call(null,inst_24652__$1,(1),null);
var inst_24655 = (inst_24653__$1 == null);
var state_24673__$1 = (function (){var statearr_24675 = state_24673;
(statearr_24675[(9)] = inst_24654);

(statearr_24675[(7)] = inst_24653__$1);

(statearr_24675[(8)] = inst_24652__$1);

return statearr_24675;
})();
if(cljs.core.truth_(inst_24655)){
var statearr_24676_24702 = state_24673__$1;
(statearr_24676_24702[(1)] = (8));

} else {
var statearr_24677_24703 = state_24673__$1;
(statearr_24677_24703[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24674 === (1))){
var inst_24644 = cljs.core.vec.call(null,chs);
var inst_24645 = inst_24644;
var state_24673__$1 = (function (){var statearr_24678 = state_24673;
(statearr_24678[(10)] = inst_24645);

return statearr_24678;
})();
var statearr_24679_24704 = state_24673__$1;
(statearr_24679_24704[(2)] = null);

(statearr_24679_24704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24674 === (4))){
var inst_24645 = (state_24673[(10)]);
var state_24673__$1 = state_24673;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24673__$1,(7),inst_24645);
} else {
if((state_val_24674 === (6))){
var inst_24669 = (state_24673[(2)]);
var state_24673__$1 = state_24673;
var statearr_24680_24705 = state_24673__$1;
(statearr_24680_24705[(2)] = inst_24669);

(statearr_24680_24705[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24674 === (3))){
var inst_24671 = (state_24673[(2)]);
var state_24673__$1 = state_24673;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24673__$1,inst_24671);
} else {
if((state_val_24674 === (2))){
var inst_24645 = (state_24673[(10)]);
var inst_24647 = cljs.core.count.call(null,inst_24645);
var inst_24648 = (inst_24647 > (0));
var state_24673__$1 = state_24673;
if(cljs.core.truth_(inst_24648)){
var statearr_24682_24706 = state_24673__$1;
(statearr_24682_24706[(1)] = (4));

} else {
var statearr_24683_24707 = state_24673__$1;
(statearr_24683_24707[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24674 === (11))){
var inst_24645 = (state_24673[(10)]);
var inst_24662 = (state_24673[(2)]);
var tmp24681 = inst_24645;
var inst_24645__$1 = tmp24681;
var state_24673__$1 = (function (){var statearr_24684 = state_24673;
(statearr_24684[(10)] = inst_24645__$1);

(statearr_24684[(11)] = inst_24662);

return statearr_24684;
})();
var statearr_24685_24708 = state_24673__$1;
(statearr_24685_24708[(2)] = null);

(statearr_24685_24708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24674 === (9))){
var inst_24653 = (state_24673[(7)]);
var state_24673__$1 = state_24673;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24673__$1,(11),out,inst_24653);
} else {
if((state_val_24674 === (5))){
var inst_24667 = cljs.core.async.close_BANG_.call(null,out);
var state_24673__$1 = state_24673;
var statearr_24686_24709 = state_24673__$1;
(statearr_24686_24709[(2)] = inst_24667);

(statearr_24686_24709[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24674 === (10))){
var inst_24665 = (state_24673[(2)]);
var state_24673__$1 = state_24673;
var statearr_24687_24710 = state_24673__$1;
(statearr_24687_24710[(2)] = inst_24665);

(statearr_24687_24710[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24674 === (8))){
var inst_24654 = (state_24673[(9)]);
var inst_24645 = (state_24673[(10)]);
var inst_24653 = (state_24673[(7)]);
var inst_24652 = (state_24673[(8)]);
var inst_24657 = (function (){var cs = inst_24645;
var vec__24650 = inst_24652;
var v = inst_24653;
var c = inst_24654;
return ((function (cs,vec__24650,v,c,inst_24654,inst_24645,inst_24653,inst_24652,state_val_24674,c__10448__auto___24701,out){
return (function (p1__24640_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24640_SHARP_);
});
;})(cs,vec__24650,v,c,inst_24654,inst_24645,inst_24653,inst_24652,state_val_24674,c__10448__auto___24701,out))
})();
var inst_24658 = cljs.core.filterv.call(null,inst_24657,inst_24645);
var inst_24645__$1 = inst_24658;
var state_24673__$1 = (function (){var statearr_24688 = state_24673;
(statearr_24688[(10)] = inst_24645__$1);

return statearr_24688;
})();
var statearr_24689_24711 = state_24673__$1;
(statearr_24689_24711[(2)] = null);

(statearr_24689_24711[(1)] = (2));


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
});})(c__10448__auto___24701,out))
;
return ((function (switch__10427__auto__,c__10448__auto___24701,out){
return (function() {
var cljs$core$async$state_machine__10428__auto__ = null;
var cljs$core$async$state_machine__10428__auto____0 = (function (){
var statearr_24693 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24693[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_24693[(1)] = (1));

return statearr_24693;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_24673){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_24673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e24694){if((e24694 instanceof Object)){
var ex__10431__auto__ = e24694;
var statearr_24695_24712 = state_24673;
(statearr_24695_24712[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24713 = state_24673;
state_24673 = G__24713;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_24673){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_24673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___24701,out))
})();
var state__10450__auto__ = (function (){var statearr_24696 = f__10449__auto__.call(null);
(statearr_24696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___24701);

return statearr_24696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___24701,out))
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
var args24714 = [];
var len__9158__auto___24763 = arguments.length;
var i__9159__auto___24764 = (0);
while(true){
if((i__9159__auto___24764 < len__9158__auto___24763)){
args24714.push((arguments[i__9159__auto___24764]));

var G__24765 = (i__9159__auto___24764 + (1));
i__9159__auto___24764 = G__24765;
continue;
} else {
}
break;
}

var G__24716 = args24714.length;
switch (G__24716) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24714.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10448__auto___24767 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___24767,out){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___24767,out){
return (function (state_24740){
var state_val_24741 = (state_24740[(1)]);
if((state_val_24741 === (7))){
var inst_24722 = (state_24740[(7)]);
var inst_24722__$1 = (state_24740[(2)]);
var inst_24723 = (inst_24722__$1 == null);
var inst_24724 = cljs.core.not.call(null,inst_24723);
var state_24740__$1 = (function (){var statearr_24742 = state_24740;
(statearr_24742[(7)] = inst_24722__$1);

return statearr_24742;
})();
if(inst_24724){
var statearr_24743_24768 = state_24740__$1;
(statearr_24743_24768[(1)] = (8));

} else {
var statearr_24744_24769 = state_24740__$1;
(statearr_24744_24769[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (1))){
var inst_24717 = (0);
var state_24740__$1 = (function (){var statearr_24745 = state_24740;
(statearr_24745[(8)] = inst_24717);

return statearr_24745;
})();
var statearr_24746_24770 = state_24740__$1;
(statearr_24746_24770[(2)] = null);

(statearr_24746_24770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (4))){
var state_24740__$1 = state_24740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24740__$1,(7),ch);
} else {
if((state_val_24741 === (6))){
var inst_24735 = (state_24740[(2)]);
var state_24740__$1 = state_24740;
var statearr_24747_24771 = state_24740__$1;
(statearr_24747_24771[(2)] = inst_24735);

(statearr_24747_24771[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (3))){
var inst_24737 = (state_24740[(2)]);
var inst_24738 = cljs.core.async.close_BANG_.call(null,out);
var state_24740__$1 = (function (){var statearr_24748 = state_24740;
(statearr_24748[(9)] = inst_24737);

return statearr_24748;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24740__$1,inst_24738);
} else {
if((state_val_24741 === (2))){
var inst_24717 = (state_24740[(8)]);
var inst_24719 = (inst_24717 < n);
var state_24740__$1 = state_24740;
if(cljs.core.truth_(inst_24719)){
var statearr_24749_24772 = state_24740__$1;
(statearr_24749_24772[(1)] = (4));

} else {
var statearr_24750_24773 = state_24740__$1;
(statearr_24750_24773[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (11))){
var inst_24717 = (state_24740[(8)]);
var inst_24727 = (state_24740[(2)]);
var inst_24728 = (inst_24717 + (1));
var inst_24717__$1 = inst_24728;
var state_24740__$1 = (function (){var statearr_24751 = state_24740;
(statearr_24751[(8)] = inst_24717__$1);

(statearr_24751[(10)] = inst_24727);

return statearr_24751;
})();
var statearr_24752_24774 = state_24740__$1;
(statearr_24752_24774[(2)] = null);

(statearr_24752_24774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (9))){
var state_24740__$1 = state_24740;
var statearr_24753_24775 = state_24740__$1;
(statearr_24753_24775[(2)] = null);

(statearr_24753_24775[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (5))){
var state_24740__$1 = state_24740;
var statearr_24754_24776 = state_24740__$1;
(statearr_24754_24776[(2)] = null);

(statearr_24754_24776[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (10))){
var inst_24732 = (state_24740[(2)]);
var state_24740__$1 = state_24740;
var statearr_24755_24777 = state_24740__$1;
(statearr_24755_24777[(2)] = inst_24732);

(statearr_24755_24777[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (8))){
var inst_24722 = (state_24740[(7)]);
var state_24740__$1 = state_24740;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24740__$1,(11),out,inst_24722);
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
});})(c__10448__auto___24767,out))
;
return ((function (switch__10427__auto__,c__10448__auto___24767,out){
return (function() {
var cljs$core$async$state_machine__10428__auto__ = null;
var cljs$core$async$state_machine__10428__auto____0 = (function (){
var statearr_24759 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24759[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_24759[(1)] = (1));

return statearr_24759;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_24740){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_24740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e24760){if((e24760 instanceof Object)){
var ex__10431__auto__ = e24760;
var statearr_24761_24778 = state_24740;
(statearr_24761_24778[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24779 = state_24740;
state_24740 = G__24779;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_24740){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_24740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___24767,out))
})();
var state__10450__auto__ = (function (){var statearr_24762 = f__10449__auto__.call(null);
(statearr_24762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___24767);

return statearr_24762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___24767,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24787 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24787 = (function (map_LT_,f,ch,meta24788){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24788 = meta24788;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24789,meta24788__$1){
var self__ = this;
var _24789__$1 = this;
return (new cljs.core.async.t_cljs$core$async24787(self__.map_LT_,self__.f,self__.ch,meta24788__$1));
});

cljs.core.async.t_cljs$core$async24787.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24789){
var self__ = this;
var _24789__$1 = this;
return self__.meta24788;
});

cljs.core.async.t_cljs$core$async24787.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24787.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24787.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24787.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24787.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24790 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24790 = (function (map_LT_,f,ch,meta24788,_,fn1,meta24791){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24788 = meta24788;
this._ = _;
this.fn1 = fn1;
this.meta24791 = meta24791;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24792,meta24791__$1){
var self__ = this;
var _24792__$1 = this;
return (new cljs.core.async.t_cljs$core$async24790(self__.map_LT_,self__.f,self__.ch,self__.meta24788,self__._,self__.fn1,meta24791__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24790.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24792){
var self__ = this;
var _24792__$1 = this;
return self__.meta24791;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24790.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24790.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24790.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24790.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24780_SHARP_){
return f1.call(null,(((p1__24780_SHARP_ == null))?null:self__.f.call(null,p1__24780_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24790.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24788","meta24788",-595082892,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24787","cljs.core.async/t_cljs$core$async24787",910716853,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24791","meta24791",718288835,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24790.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24790.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24790";

cljs.core.async.t_cljs$core$async24790.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8698__auto__,writer__8699__auto__,opt__8700__auto__){
return cljs.core._write.call(null,writer__8699__auto__,"cljs.core.async/t_cljs$core$async24790");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async24790 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24790(map_LT___$1,f__$1,ch__$1,meta24788__$1,___$2,fn1__$1,meta24791){
return (new cljs.core.async.t_cljs$core$async24790(map_LT___$1,f__$1,ch__$1,meta24788__$1,___$2,fn1__$1,meta24791));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24790(self__.map_LT_,self__.f,self__.ch,self__.meta24788,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async24787.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24787.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24787.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24788","meta24788",-595082892,null)], null);
});

cljs.core.async.t_cljs$core$async24787.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24787.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24787";

cljs.core.async.t_cljs$core$async24787.cljs$lang$ctorPrWriter = (function (this__8698__auto__,writer__8699__auto__,opt__8700__auto__){
return cljs.core._write.call(null,writer__8699__auto__,"cljs.core.async/t_cljs$core$async24787");
});

cljs.core.async.__GT_t_cljs$core$async24787 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24787(map_LT___$1,f__$1,ch__$1,meta24788){
return (new cljs.core.async.t_cljs$core$async24787(map_LT___$1,f__$1,ch__$1,meta24788));
});

}

return (new cljs.core.async.t_cljs$core$async24787(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24796 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24796 = (function (map_GT_,f,ch,meta24797){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta24797 = meta24797;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24798,meta24797__$1){
var self__ = this;
var _24798__$1 = this;
return (new cljs.core.async.t_cljs$core$async24796(self__.map_GT_,self__.f,self__.ch,meta24797__$1));
});

cljs.core.async.t_cljs$core$async24796.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24798){
var self__ = this;
var _24798__$1 = this;
return self__.meta24797;
});

cljs.core.async.t_cljs$core$async24796.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24796.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24796.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24796.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24796.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24796.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24796.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24797","meta24797",198155052,null)], null);
});

cljs.core.async.t_cljs$core$async24796.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24796.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24796";

cljs.core.async.t_cljs$core$async24796.cljs$lang$ctorPrWriter = (function (this__8698__auto__,writer__8699__auto__,opt__8700__auto__){
return cljs.core._write.call(null,writer__8699__auto__,"cljs.core.async/t_cljs$core$async24796");
});

cljs.core.async.__GT_t_cljs$core$async24796 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24796(map_GT___$1,f__$1,ch__$1,meta24797){
return (new cljs.core.async.t_cljs$core$async24796(map_GT___$1,f__$1,ch__$1,meta24797));
});

}

return (new cljs.core.async.t_cljs$core$async24796(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24802 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24802 = (function (filter_GT_,p,ch,meta24803){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta24803 = meta24803;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24804,meta24803__$1){
var self__ = this;
var _24804__$1 = this;
return (new cljs.core.async.t_cljs$core$async24802(self__.filter_GT_,self__.p,self__.ch,meta24803__$1));
});

cljs.core.async.t_cljs$core$async24802.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24804){
var self__ = this;
var _24804__$1 = this;
return self__.meta24803;
});

cljs.core.async.t_cljs$core$async24802.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24802.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24802.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24802.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24802.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24802.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24802.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24802.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24803","meta24803",1073929129,null)], null);
});

cljs.core.async.t_cljs$core$async24802.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24802.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24802";

cljs.core.async.t_cljs$core$async24802.cljs$lang$ctorPrWriter = (function (this__8698__auto__,writer__8699__auto__,opt__8700__auto__){
return cljs.core._write.call(null,writer__8699__auto__,"cljs.core.async/t_cljs$core$async24802");
});

cljs.core.async.__GT_t_cljs$core$async24802 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24802(filter_GT___$1,p__$1,ch__$1,meta24803){
return (new cljs.core.async.t_cljs$core$async24802(filter_GT___$1,p__$1,ch__$1,meta24803));
});

}

return (new cljs.core.async.t_cljs$core$async24802(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args24805 = [];
var len__9158__auto___24849 = arguments.length;
var i__9159__auto___24850 = (0);
while(true){
if((i__9159__auto___24850 < len__9158__auto___24849)){
args24805.push((arguments[i__9159__auto___24850]));

var G__24851 = (i__9159__auto___24850 + (1));
i__9159__auto___24850 = G__24851;
continue;
} else {
}
break;
}

var G__24807 = args24805.length;
switch (G__24807) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24805.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10448__auto___24853 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___24853,out){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___24853,out){
return (function (state_24828){
var state_val_24829 = (state_24828[(1)]);
if((state_val_24829 === (7))){
var inst_24824 = (state_24828[(2)]);
var state_24828__$1 = state_24828;
var statearr_24830_24854 = state_24828__$1;
(statearr_24830_24854[(2)] = inst_24824);

(statearr_24830_24854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24829 === (1))){
var state_24828__$1 = state_24828;
var statearr_24831_24855 = state_24828__$1;
(statearr_24831_24855[(2)] = null);

(statearr_24831_24855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24829 === (4))){
var inst_24810 = (state_24828[(7)]);
var inst_24810__$1 = (state_24828[(2)]);
var inst_24811 = (inst_24810__$1 == null);
var state_24828__$1 = (function (){var statearr_24832 = state_24828;
(statearr_24832[(7)] = inst_24810__$1);

return statearr_24832;
})();
if(cljs.core.truth_(inst_24811)){
var statearr_24833_24856 = state_24828__$1;
(statearr_24833_24856[(1)] = (5));

} else {
var statearr_24834_24857 = state_24828__$1;
(statearr_24834_24857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24829 === (6))){
var inst_24810 = (state_24828[(7)]);
var inst_24815 = p.call(null,inst_24810);
var state_24828__$1 = state_24828;
if(cljs.core.truth_(inst_24815)){
var statearr_24835_24858 = state_24828__$1;
(statearr_24835_24858[(1)] = (8));

} else {
var statearr_24836_24859 = state_24828__$1;
(statearr_24836_24859[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24829 === (3))){
var inst_24826 = (state_24828[(2)]);
var state_24828__$1 = state_24828;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24828__$1,inst_24826);
} else {
if((state_val_24829 === (2))){
var state_24828__$1 = state_24828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24828__$1,(4),ch);
} else {
if((state_val_24829 === (11))){
var inst_24818 = (state_24828[(2)]);
var state_24828__$1 = state_24828;
var statearr_24837_24860 = state_24828__$1;
(statearr_24837_24860[(2)] = inst_24818);

(statearr_24837_24860[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24829 === (9))){
var state_24828__$1 = state_24828;
var statearr_24838_24861 = state_24828__$1;
(statearr_24838_24861[(2)] = null);

(statearr_24838_24861[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24829 === (5))){
var inst_24813 = cljs.core.async.close_BANG_.call(null,out);
var state_24828__$1 = state_24828;
var statearr_24839_24862 = state_24828__$1;
(statearr_24839_24862[(2)] = inst_24813);

(statearr_24839_24862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24829 === (10))){
var inst_24821 = (state_24828[(2)]);
var state_24828__$1 = (function (){var statearr_24840 = state_24828;
(statearr_24840[(8)] = inst_24821);

return statearr_24840;
})();
var statearr_24841_24863 = state_24828__$1;
(statearr_24841_24863[(2)] = null);

(statearr_24841_24863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24829 === (8))){
var inst_24810 = (state_24828[(7)]);
var state_24828__$1 = state_24828;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24828__$1,(11),out,inst_24810);
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
});})(c__10448__auto___24853,out))
;
return ((function (switch__10427__auto__,c__10448__auto___24853,out){
return (function() {
var cljs$core$async$state_machine__10428__auto__ = null;
var cljs$core$async$state_machine__10428__auto____0 = (function (){
var statearr_24845 = [null,null,null,null,null,null,null,null,null];
(statearr_24845[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_24845[(1)] = (1));

return statearr_24845;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_24828){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_24828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e24846){if((e24846 instanceof Object)){
var ex__10431__auto__ = e24846;
var statearr_24847_24864 = state_24828;
(statearr_24847_24864[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24865 = state_24828;
state_24828 = G__24865;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_24828){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_24828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___24853,out))
})();
var state__10450__auto__ = (function (){var statearr_24848 = f__10449__auto__.call(null);
(statearr_24848[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___24853);

return statearr_24848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___24853,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args24866 = [];
var len__9158__auto___24869 = arguments.length;
var i__9159__auto___24870 = (0);
while(true){
if((i__9159__auto___24870 < len__9158__auto___24869)){
args24866.push((arguments[i__9159__auto___24870]));

var G__24871 = (i__9159__auto___24870 + (1));
i__9159__auto___24870 = G__24871;
continue;
} else {
}
break;
}

var G__24868 = args24866.length;
switch (G__24868) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24866.length)].join('')));

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
return (function (state_25038){
var state_val_25039 = (state_25038[(1)]);
if((state_val_25039 === (7))){
var inst_25034 = (state_25038[(2)]);
var state_25038__$1 = state_25038;
var statearr_25040_25081 = state_25038__$1;
(statearr_25040_25081[(2)] = inst_25034);

(statearr_25040_25081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (20))){
var inst_25004 = (state_25038[(7)]);
var inst_25015 = (state_25038[(2)]);
var inst_25016 = cljs.core.next.call(null,inst_25004);
var inst_24990 = inst_25016;
var inst_24991 = null;
var inst_24992 = (0);
var inst_24993 = (0);
var state_25038__$1 = (function (){var statearr_25041 = state_25038;
(statearr_25041[(8)] = inst_24990);

(statearr_25041[(9)] = inst_24992);

(statearr_25041[(10)] = inst_24991);

(statearr_25041[(11)] = inst_25015);

(statearr_25041[(12)] = inst_24993);

return statearr_25041;
})();
var statearr_25042_25082 = state_25038__$1;
(statearr_25042_25082[(2)] = null);

(statearr_25042_25082[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (1))){
var state_25038__$1 = state_25038;
var statearr_25043_25083 = state_25038__$1;
(statearr_25043_25083[(2)] = null);

(statearr_25043_25083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (4))){
var inst_24979 = (state_25038[(13)]);
var inst_24979__$1 = (state_25038[(2)]);
var inst_24980 = (inst_24979__$1 == null);
var state_25038__$1 = (function (){var statearr_25044 = state_25038;
(statearr_25044[(13)] = inst_24979__$1);

return statearr_25044;
})();
if(cljs.core.truth_(inst_24980)){
var statearr_25045_25084 = state_25038__$1;
(statearr_25045_25084[(1)] = (5));

} else {
var statearr_25046_25085 = state_25038__$1;
(statearr_25046_25085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (15))){
var state_25038__$1 = state_25038;
var statearr_25050_25086 = state_25038__$1;
(statearr_25050_25086[(2)] = null);

(statearr_25050_25086[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (21))){
var state_25038__$1 = state_25038;
var statearr_25051_25087 = state_25038__$1;
(statearr_25051_25087[(2)] = null);

(statearr_25051_25087[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (13))){
var inst_24990 = (state_25038[(8)]);
var inst_24992 = (state_25038[(9)]);
var inst_24991 = (state_25038[(10)]);
var inst_24993 = (state_25038[(12)]);
var inst_25000 = (state_25038[(2)]);
var inst_25001 = (inst_24993 + (1));
var tmp25047 = inst_24990;
var tmp25048 = inst_24992;
var tmp25049 = inst_24991;
var inst_24990__$1 = tmp25047;
var inst_24991__$1 = tmp25049;
var inst_24992__$1 = tmp25048;
var inst_24993__$1 = inst_25001;
var state_25038__$1 = (function (){var statearr_25052 = state_25038;
(statearr_25052[(14)] = inst_25000);

(statearr_25052[(8)] = inst_24990__$1);

(statearr_25052[(9)] = inst_24992__$1);

(statearr_25052[(10)] = inst_24991__$1);

(statearr_25052[(12)] = inst_24993__$1);

return statearr_25052;
})();
var statearr_25053_25088 = state_25038__$1;
(statearr_25053_25088[(2)] = null);

(statearr_25053_25088[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (22))){
var state_25038__$1 = state_25038;
var statearr_25054_25089 = state_25038__$1;
(statearr_25054_25089[(2)] = null);

(statearr_25054_25089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (6))){
var inst_24979 = (state_25038[(13)]);
var inst_24988 = f.call(null,inst_24979);
var inst_24989 = cljs.core.seq.call(null,inst_24988);
var inst_24990 = inst_24989;
var inst_24991 = null;
var inst_24992 = (0);
var inst_24993 = (0);
var state_25038__$1 = (function (){var statearr_25055 = state_25038;
(statearr_25055[(8)] = inst_24990);

(statearr_25055[(9)] = inst_24992);

(statearr_25055[(10)] = inst_24991);

(statearr_25055[(12)] = inst_24993);

return statearr_25055;
})();
var statearr_25056_25090 = state_25038__$1;
(statearr_25056_25090[(2)] = null);

(statearr_25056_25090[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (17))){
var inst_25004 = (state_25038[(7)]);
var inst_25008 = cljs.core.chunk_first.call(null,inst_25004);
var inst_25009 = cljs.core.chunk_rest.call(null,inst_25004);
var inst_25010 = cljs.core.count.call(null,inst_25008);
var inst_24990 = inst_25009;
var inst_24991 = inst_25008;
var inst_24992 = inst_25010;
var inst_24993 = (0);
var state_25038__$1 = (function (){var statearr_25057 = state_25038;
(statearr_25057[(8)] = inst_24990);

(statearr_25057[(9)] = inst_24992);

(statearr_25057[(10)] = inst_24991);

(statearr_25057[(12)] = inst_24993);

return statearr_25057;
})();
var statearr_25058_25091 = state_25038__$1;
(statearr_25058_25091[(2)] = null);

(statearr_25058_25091[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (3))){
var inst_25036 = (state_25038[(2)]);
var state_25038__$1 = state_25038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25038__$1,inst_25036);
} else {
if((state_val_25039 === (12))){
var inst_25024 = (state_25038[(2)]);
var state_25038__$1 = state_25038;
var statearr_25059_25092 = state_25038__$1;
(statearr_25059_25092[(2)] = inst_25024);

(statearr_25059_25092[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (2))){
var state_25038__$1 = state_25038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25038__$1,(4),in$);
} else {
if((state_val_25039 === (23))){
var inst_25032 = (state_25038[(2)]);
var state_25038__$1 = state_25038;
var statearr_25060_25093 = state_25038__$1;
(statearr_25060_25093[(2)] = inst_25032);

(statearr_25060_25093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (19))){
var inst_25019 = (state_25038[(2)]);
var state_25038__$1 = state_25038;
var statearr_25061_25094 = state_25038__$1;
(statearr_25061_25094[(2)] = inst_25019);

(statearr_25061_25094[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (11))){
var inst_24990 = (state_25038[(8)]);
var inst_25004 = (state_25038[(7)]);
var inst_25004__$1 = cljs.core.seq.call(null,inst_24990);
var state_25038__$1 = (function (){var statearr_25062 = state_25038;
(statearr_25062[(7)] = inst_25004__$1);

return statearr_25062;
})();
if(inst_25004__$1){
var statearr_25063_25095 = state_25038__$1;
(statearr_25063_25095[(1)] = (14));

} else {
var statearr_25064_25096 = state_25038__$1;
(statearr_25064_25096[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (9))){
var inst_25026 = (state_25038[(2)]);
var inst_25027 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25038__$1 = (function (){var statearr_25065 = state_25038;
(statearr_25065[(15)] = inst_25026);

return statearr_25065;
})();
if(cljs.core.truth_(inst_25027)){
var statearr_25066_25097 = state_25038__$1;
(statearr_25066_25097[(1)] = (21));

} else {
var statearr_25067_25098 = state_25038__$1;
(statearr_25067_25098[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (5))){
var inst_24982 = cljs.core.async.close_BANG_.call(null,out);
var state_25038__$1 = state_25038;
var statearr_25068_25099 = state_25038__$1;
(statearr_25068_25099[(2)] = inst_24982);

(statearr_25068_25099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (14))){
var inst_25004 = (state_25038[(7)]);
var inst_25006 = cljs.core.chunked_seq_QMARK_.call(null,inst_25004);
var state_25038__$1 = state_25038;
if(inst_25006){
var statearr_25069_25100 = state_25038__$1;
(statearr_25069_25100[(1)] = (17));

} else {
var statearr_25070_25101 = state_25038__$1;
(statearr_25070_25101[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (16))){
var inst_25022 = (state_25038[(2)]);
var state_25038__$1 = state_25038;
var statearr_25071_25102 = state_25038__$1;
(statearr_25071_25102[(2)] = inst_25022);

(statearr_25071_25102[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (10))){
var inst_24991 = (state_25038[(10)]);
var inst_24993 = (state_25038[(12)]);
var inst_24998 = cljs.core._nth.call(null,inst_24991,inst_24993);
var state_25038__$1 = state_25038;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25038__$1,(13),out,inst_24998);
} else {
if((state_val_25039 === (18))){
var inst_25004 = (state_25038[(7)]);
var inst_25013 = cljs.core.first.call(null,inst_25004);
var state_25038__$1 = state_25038;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25038__$1,(20),out,inst_25013);
} else {
if((state_val_25039 === (8))){
var inst_24992 = (state_25038[(9)]);
var inst_24993 = (state_25038[(12)]);
var inst_24995 = (inst_24993 < inst_24992);
var inst_24996 = inst_24995;
var state_25038__$1 = state_25038;
if(cljs.core.truth_(inst_24996)){
var statearr_25072_25103 = state_25038__$1;
(statearr_25072_25103[(1)] = (10));

} else {
var statearr_25073_25104 = state_25038__$1;
(statearr_25073_25104[(1)] = (11));

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
var statearr_25077 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25077[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10428__auto__);

(statearr_25077[(1)] = (1));

return statearr_25077;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10428__auto____1 = (function (state_25038){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_25038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e25078){if((e25078 instanceof Object)){
var ex__10431__auto__ = e25078;
var statearr_25079_25105 = state_25038;
(statearr_25079_25105[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25106 = state_25038;
state_25038 = G__25106;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10428__auto__ = function(state_25038){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10428__auto____1.call(this,state_25038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10428__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10428__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto__))
})();
var state__10450__auto__ = (function (){var statearr_25080 = f__10449__auto__.call(null);
(statearr_25080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto__);

return statearr_25080;
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
var args25107 = [];
var len__9158__auto___25110 = arguments.length;
var i__9159__auto___25111 = (0);
while(true){
if((i__9159__auto___25111 < len__9158__auto___25110)){
args25107.push((arguments[i__9159__auto___25111]));

var G__25112 = (i__9159__auto___25111 + (1));
i__9159__auto___25111 = G__25112;
continue;
} else {
}
break;
}

var G__25109 = args25107.length;
switch (G__25109) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25107.length)].join('')));

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
var args25114 = [];
var len__9158__auto___25117 = arguments.length;
var i__9159__auto___25118 = (0);
while(true){
if((i__9159__auto___25118 < len__9158__auto___25117)){
args25114.push((arguments[i__9159__auto___25118]));

var G__25119 = (i__9159__auto___25118 + (1));
i__9159__auto___25118 = G__25119;
continue;
} else {
}
break;
}

var G__25116 = args25114.length;
switch (G__25116) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25114.length)].join('')));

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
var args25121 = [];
var len__9158__auto___25172 = arguments.length;
var i__9159__auto___25173 = (0);
while(true){
if((i__9159__auto___25173 < len__9158__auto___25172)){
args25121.push((arguments[i__9159__auto___25173]));

var G__25174 = (i__9159__auto___25173 + (1));
i__9159__auto___25173 = G__25174;
continue;
} else {
}
break;
}

var G__25123 = args25121.length;
switch (G__25123) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25121.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10448__auto___25176 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___25176,out){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___25176,out){
return (function (state_25147){
var state_val_25148 = (state_25147[(1)]);
if((state_val_25148 === (7))){
var inst_25142 = (state_25147[(2)]);
var state_25147__$1 = state_25147;
var statearr_25149_25177 = state_25147__$1;
(statearr_25149_25177[(2)] = inst_25142);

(statearr_25149_25177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25148 === (1))){
var inst_25124 = null;
var state_25147__$1 = (function (){var statearr_25150 = state_25147;
(statearr_25150[(7)] = inst_25124);

return statearr_25150;
})();
var statearr_25151_25178 = state_25147__$1;
(statearr_25151_25178[(2)] = null);

(statearr_25151_25178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25148 === (4))){
var inst_25127 = (state_25147[(8)]);
var inst_25127__$1 = (state_25147[(2)]);
var inst_25128 = (inst_25127__$1 == null);
var inst_25129 = cljs.core.not.call(null,inst_25128);
var state_25147__$1 = (function (){var statearr_25152 = state_25147;
(statearr_25152[(8)] = inst_25127__$1);

return statearr_25152;
})();
if(inst_25129){
var statearr_25153_25179 = state_25147__$1;
(statearr_25153_25179[(1)] = (5));

} else {
var statearr_25154_25180 = state_25147__$1;
(statearr_25154_25180[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25148 === (6))){
var state_25147__$1 = state_25147;
var statearr_25155_25181 = state_25147__$1;
(statearr_25155_25181[(2)] = null);

(statearr_25155_25181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25148 === (3))){
var inst_25144 = (state_25147[(2)]);
var inst_25145 = cljs.core.async.close_BANG_.call(null,out);
var state_25147__$1 = (function (){var statearr_25156 = state_25147;
(statearr_25156[(9)] = inst_25144);

return statearr_25156;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25147__$1,inst_25145);
} else {
if((state_val_25148 === (2))){
var state_25147__$1 = state_25147;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25147__$1,(4),ch);
} else {
if((state_val_25148 === (11))){
var inst_25127 = (state_25147[(8)]);
var inst_25136 = (state_25147[(2)]);
var inst_25124 = inst_25127;
var state_25147__$1 = (function (){var statearr_25157 = state_25147;
(statearr_25157[(7)] = inst_25124);

(statearr_25157[(10)] = inst_25136);

return statearr_25157;
})();
var statearr_25158_25182 = state_25147__$1;
(statearr_25158_25182[(2)] = null);

(statearr_25158_25182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25148 === (9))){
var inst_25127 = (state_25147[(8)]);
var state_25147__$1 = state_25147;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25147__$1,(11),out,inst_25127);
} else {
if((state_val_25148 === (5))){
var inst_25127 = (state_25147[(8)]);
var inst_25124 = (state_25147[(7)]);
var inst_25131 = cljs.core._EQ_.call(null,inst_25127,inst_25124);
var state_25147__$1 = state_25147;
if(inst_25131){
var statearr_25160_25183 = state_25147__$1;
(statearr_25160_25183[(1)] = (8));

} else {
var statearr_25161_25184 = state_25147__$1;
(statearr_25161_25184[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25148 === (10))){
var inst_25139 = (state_25147[(2)]);
var state_25147__$1 = state_25147;
var statearr_25162_25185 = state_25147__$1;
(statearr_25162_25185[(2)] = inst_25139);

(statearr_25162_25185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25148 === (8))){
var inst_25124 = (state_25147[(7)]);
var tmp25159 = inst_25124;
var inst_25124__$1 = tmp25159;
var state_25147__$1 = (function (){var statearr_25163 = state_25147;
(statearr_25163[(7)] = inst_25124__$1);

return statearr_25163;
})();
var statearr_25164_25186 = state_25147__$1;
(statearr_25164_25186[(2)] = null);

(statearr_25164_25186[(1)] = (2));


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
});})(c__10448__auto___25176,out))
;
return ((function (switch__10427__auto__,c__10448__auto___25176,out){
return (function() {
var cljs$core$async$state_machine__10428__auto__ = null;
var cljs$core$async$state_machine__10428__auto____0 = (function (){
var statearr_25168 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25168[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_25168[(1)] = (1));

return statearr_25168;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_25147){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_25147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e25169){if((e25169 instanceof Object)){
var ex__10431__auto__ = e25169;
var statearr_25170_25187 = state_25147;
(statearr_25170_25187[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25188 = state_25147;
state_25147 = G__25188;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_25147){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_25147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___25176,out))
})();
var state__10450__auto__ = (function (){var statearr_25171 = f__10449__auto__.call(null);
(statearr_25171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___25176);

return statearr_25171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___25176,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args25189 = [];
var len__9158__auto___25259 = arguments.length;
var i__9159__auto___25260 = (0);
while(true){
if((i__9159__auto___25260 < len__9158__auto___25259)){
args25189.push((arguments[i__9159__auto___25260]));

var G__25261 = (i__9159__auto___25260 + (1));
i__9159__auto___25260 = G__25261;
continue;
} else {
}
break;
}

var G__25191 = args25189.length;
switch (G__25191) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25189.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10448__auto___25263 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___25263,out){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___25263,out){
return (function (state_25229){
var state_val_25230 = (state_25229[(1)]);
if((state_val_25230 === (7))){
var inst_25225 = (state_25229[(2)]);
var state_25229__$1 = state_25229;
var statearr_25231_25264 = state_25229__$1;
(statearr_25231_25264[(2)] = inst_25225);

(statearr_25231_25264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25230 === (1))){
var inst_25192 = (new Array(n));
var inst_25193 = inst_25192;
var inst_25194 = (0);
var state_25229__$1 = (function (){var statearr_25232 = state_25229;
(statearr_25232[(7)] = inst_25194);

(statearr_25232[(8)] = inst_25193);

return statearr_25232;
})();
var statearr_25233_25265 = state_25229__$1;
(statearr_25233_25265[(2)] = null);

(statearr_25233_25265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25230 === (4))){
var inst_25197 = (state_25229[(9)]);
var inst_25197__$1 = (state_25229[(2)]);
var inst_25198 = (inst_25197__$1 == null);
var inst_25199 = cljs.core.not.call(null,inst_25198);
var state_25229__$1 = (function (){var statearr_25234 = state_25229;
(statearr_25234[(9)] = inst_25197__$1);

return statearr_25234;
})();
if(inst_25199){
var statearr_25235_25266 = state_25229__$1;
(statearr_25235_25266[(1)] = (5));

} else {
var statearr_25236_25267 = state_25229__$1;
(statearr_25236_25267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25230 === (15))){
var inst_25219 = (state_25229[(2)]);
var state_25229__$1 = state_25229;
var statearr_25237_25268 = state_25229__$1;
(statearr_25237_25268[(2)] = inst_25219);

(statearr_25237_25268[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25230 === (13))){
var state_25229__$1 = state_25229;
var statearr_25238_25269 = state_25229__$1;
(statearr_25238_25269[(2)] = null);

(statearr_25238_25269[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25230 === (6))){
var inst_25194 = (state_25229[(7)]);
var inst_25215 = (inst_25194 > (0));
var state_25229__$1 = state_25229;
if(cljs.core.truth_(inst_25215)){
var statearr_25239_25270 = state_25229__$1;
(statearr_25239_25270[(1)] = (12));

} else {
var statearr_25240_25271 = state_25229__$1;
(statearr_25240_25271[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25230 === (3))){
var inst_25227 = (state_25229[(2)]);
var state_25229__$1 = state_25229;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25229__$1,inst_25227);
} else {
if((state_val_25230 === (12))){
var inst_25193 = (state_25229[(8)]);
var inst_25217 = cljs.core.vec.call(null,inst_25193);
var state_25229__$1 = state_25229;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25229__$1,(15),out,inst_25217);
} else {
if((state_val_25230 === (2))){
var state_25229__$1 = state_25229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25229__$1,(4),ch);
} else {
if((state_val_25230 === (11))){
var inst_25209 = (state_25229[(2)]);
var inst_25210 = (new Array(n));
var inst_25193 = inst_25210;
var inst_25194 = (0);
var state_25229__$1 = (function (){var statearr_25241 = state_25229;
(statearr_25241[(7)] = inst_25194);

(statearr_25241[(8)] = inst_25193);

(statearr_25241[(10)] = inst_25209);

return statearr_25241;
})();
var statearr_25242_25272 = state_25229__$1;
(statearr_25242_25272[(2)] = null);

(statearr_25242_25272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25230 === (9))){
var inst_25193 = (state_25229[(8)]);
var inst_25207 = cljs.core.vec.call(null,inst_25193);
var state_25229__$1 = state_25229;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25229__$1,(11),out,inst_25207);
} else {
if((state_val_25230 === (5))){
var inst_25194 = (state_25229[(7)]);
var inst_25193 = (state_25229[(8)]);
var inst_25197 = (state_25229[(9)]);
var inst_25202 = (state_25229[(11)]);
var inst_25201 = (inst_25193[inst_25194] = inst_25197);
var inst_25202__$1 = (inst_25194 + (1));
var inst_25203 = (inst_25202__$1 < n);
var state_25229__$1 = (function (){var statearr_25243 = state_25229;
(statearr_25243[(12)] = inst_25201);

(statearr_25243[(11)] = inst_25202__$1);

return statearr_25243;
})();
if(cljs.core.truth_(inst_25203)){
var statearr_25244_25273 = state_25229__$1;
(statearr_25244_25273[(1)] = (8));

} else {
var statearr_25245_25274 = state_25229__$1;
(statearr_25245_25274[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25230 === (14))){
var inst_25222 = (state_25229[(2)]);
var inst_25223 = cljs.core.async.close_BANG_.call(null,out);
var state_25229__$1 = (function (){var statearr_25247 = state_25229;
(statearr_25247[(13)] = inst_25222);

return statearr_25247;
})();
var statearr_25248_25275 = state_25229__$1;
(statearr_25248_25275[(2)] = inst_25223);

(statearr_25248_25275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25230 === (10))){
var inst_25213 = (state_25229[(2)]);
var state_25229__$1 = state_25229;
var statearr_25249_25276 = state_25229__$1;
(statearr_25249_25276[(2)] = inst_25213);

(statearr_25249_25276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25230 === (8))){
var inst_25193 = (state_25229[(8)]);
var inst_25202 = (state_25229[(11)]);
var tmp25246 = inst_25193;
var inst_25193__$1 = tmp25246;
var inst_25194 = inst_25202;
var state_25229__$1 = (function (){var statearr_25250 = state_25229;
(statearr_25250[(7)] = inst_25194);

(statearr_25250[(8)] = inst_25193__$1);

return statearr_25250;
})();
var statearr_25251_25277 = state_25229__$1;
(statearr_25251_25277[(2)] = null);

(statearr_25251_25277[(1)] = (2));


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
});})(c__10448__auto___25263,out))
;
return ((function (switch__10427__auto__,c__10448__auto___25263,out){
return (function() {
var cljs$core$async$state_machine__10428__auto__ = null;
var cljs$core$async$state_machine__10428__auto____0 = (function (){
var statearr_25255 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25255[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_25255[(1)] = (1));

return statearr_25255;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_25229){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_25229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e25256){if((e25256 instanceof Object)){
var ex__10431__auto__ = e25256;
var statearr_25257_25278 = state_25229;
(statearr_25257_25278[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25256;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25279 = state_25229;
state_25229 = G__25279;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_25229){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_25229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___25263,out))
})();
var state__10450__auto__ = (function (){var statearr_25258 = f__10449__auto__.call(null);
(statearr_25258[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___25263);

return statearr_25258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___25263,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args25280 = [];
var len__9158__auto___25354 = arguments.length;
var i__9159__auto___25355 = (0);
while(true){
if((i__9159__auto___25355 < len__9158__auto___25354)){
args25280.push((arguments[i__9159__auto___25355]));

var G__25356 = (i__9159__auto___25355 + (1));
i__9159__auto___25355 = G__25356;
continue;
} else {
}
break;
}

var G__25282 = args25280.length;
switch (G__25282) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25280.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10448__auto___25358 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___25358,out){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___25358,out){
return (function (state_25324){
var state_val_25325 = (state_25324[(1)]);
if((state_val_25325 === (7))){
var inst_25320 = (state_25324[(2)]);
var state_25324__$1 = state_25324;
var statearr_25326_25359 = state_25324__$1;
(statearr_25326_25359[(2)] = inst_25320);

(statearr_25326_25359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25325 === (1))){
var inst_25283 = [];
var inst_25284 = inst_25283;
var inst_25285 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25324__$1 = (function (){var statearr_25327 = state_25324;
(statearr_25327[(7)] = inst_25284);

(statearr_25327[(8)] = inst_25285);

return statearr_25327;
})();
var statearr_25328_25360 = state_25324__$1;
(statearr_25328_25360[(2)] = null);

(statearr_25328_25360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25325 === (4))){
var inst_25288 = (state_25324[(9)]);
var inst_25288__$1 = (state_25324[(2)]);
var inst_25289 = (inst_25288__$1 == null);
var inst_25290 = cljs.core.not.call(null,inst_25289);
var state_25324__$1 = (function (){var statearr_25329 = state_25324;
(statearr_25329[(9)] = inst_25288__$1);

return statearr_25329;
})();
if(inst_25290){
var statearr_25330_25361 = state_25324__$1;
(statearr_25330_25361[(1)] = (5));

} else {
var statearr_25331_25362 = state_25324__$1;
(statearr_25331_25362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25325 === (15))){
var inst_25314 = (state_25324[(2)]);
var state_25324__$1 = state_25324;
var statearr_25332_25363 = state_25324__$1;
(statearr_25332_25363[(2)] = inst_25314);

(statearr_25332_25363[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25325 === (13))){
var state_25324__$1 = state_25324;
var statearr_25333_25364 = state_25324__$1;
(statearr_25333_25364[(2)] = null);

(statearr_25333_25364[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25325 === (6))){
var inst_25284 = (state_25324[(7)]);
var inst_25309 = inst_25284.length;
var inst_25310 = (inst_25309 > (0));
var state_25324__$1 = state_25324;
if(cljs.core.truth_(inst_25310)){
var statearr_25334_25365 = state_25324__$1;
(statearr_25334_25365[(1)] = (12));

} else {
var statearr_25335_25366 = state_25324__$1;
(statearr_25335_25366[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25325 === (3))){
var inst_25322 = (state_25324[(2)]);
var state_25324__$1 = state_25324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25324__$1,inst_25322);
} else {
if((state_val_25325 === (12))){
var inst_25284 = (state_25324[(7)]);
var inst_25312 = cljs.core.vec.call(null,inst_25284);
var state_25324__$1 = state_25324;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25324__$1,(15),out,inst_25312);
} else {
if((state_val_25325 === (2))){
var state_25324__$1 = state_25324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25324__$1,(4),ch);
} else {
if((state_val_25325 === (11))){
var inst_25292 = (state_25324[(10)]);
var inst_25288 = (state_25324[(9)]);
var inst_25302 = (state_25324[(2)]);
var inst_25303 = [];
var inst_25304 = inst_25303.push(inst_25288);
var inst_25284 = inst_25303;
var inst_25285 = inst_25292;
var state_25324__$1 = (function (){var statearr_25336 = state_25324;
(statearr_25336[(7)] = inst_25284);

(statearr_25336[(11)] = inst_25302);

(statearr_25336[(12)] = inst_25304);

(statearr_25336[(8)] = inst_25285);

return statearr_25336;
})();
var statearr_25337_25367 = state_25324__$1;
(statearr_25337_25367[(2)] = null);

(statearr_25337_25367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25325 === (9))){
var inst_25284 = (state_25324[(7)]);
var inst_25300 = cljs.core.vec.call(null,inst_25284);
var state_25324__$1 = state_25324;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25324__$1,(11),out,inst_25300);
} else {
if((state_val_25325 === (5))){
var inst_25292 = (state_25324[(10)]);
var inst_25288 = (state_25324[(9)]);
var inst_25285 = (state_25324[(8)]);
var inst_25292__$1 = f.call(null,inst_25288);
var inst_25293 = cljs.core._EQ_.call(null,inst_25292__$1,inst_25285);
var inst_25294 = cljs.core.keyword_identical_QMARK_.call(null,inst_25285,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25295 = (inst_25293) || (inst_25294);
var state_25324__$1 = (function (){var statearr_25338 = state_25324;
(statearr_25338[(10)] = inst_25292__$1);

return statearr_25338;
})();
if(cljs.core.truth_(inst_25295)){
var statearr_25339_25368 = state_25324__$1;
(statearr_25339_25368[(1)] = (8));

} else {
var statearr_25340_25369 = state_25324__$1;
(statearr_25340_25369[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25325 === (14))){
var inst_25317 = (state_25324[(2)]);
var inst_25318 = cljs.core.async.close_BANG_.call(null,out);
var state_25324__$1 = (function (){var statearr_25342 = state_25324;
(statearr_25342[(13)] = inst_25317);

return statearr_25342;
})();
var statearr_25343_25370 = state_25324__$1;
(statearr_25343_25370[(2)] = inst_25318);

(statearr_25343_25370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25325 === (10))){
var inst_25307 = (state_25324[(2)]);
var state_25324__$1 = state_25324;
var statearr_25344_25371 = state_25324__$1;
(statearr_25344_25371[(2)] = inst_25307);

(statearr_25344_25371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25325 === (8))){
var inst_25284 = (state_25324[(7)]);
var inst_25292 = (state_25324[(10)]);
var inst_25288 = (state_25324[(9)]);
var inst_25297 = inst_25284.push(inst_25288);
var tmp25341 = inst_25284;
var inst_25284__$1 = tmp25341;
var inst_25285 = inst_25292;
var state_25324__$1 = (function (){var statearr_25345 = state_25324;
(statearr_25345[(7)] = inst_25284__$1);

(statearr_25345[(14)] = inst_25297);

(statearr_25345[(8)] = inst_25285);

return statearr_25345;
})();
var statearr_25346_25372 = state_25324__$1;
(statearr_25346_25372[(2)] = null);

(statearr_25346_25372[(1)] = (2));


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
});})(c__10448__auto___25358,out))
;
return ((function (switch__10427__auto__,c__10448__auto___25358,out){
return (function() {
var cljs$core$async$state_machine__10428__auto__ = null;
var cljs$core$async$state_machine__10428__auto____0 = (function (){
var statearr_25350 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25350[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_25350[(1)] = (1));

return statearr_25350;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_25324){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_25324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e25351){if((e25351 instanceof Object)){
var ex__10431__auto__ = e25351;
var statearr_25352_25373 = state_25324;
(statearr_25352_25373[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25374 = state_25324;
state_25324 = G__25374;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_25324){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_25324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___25358,out))
})();
var state__10450__auto__ = (function (){var statearr_25353 = f__10449__auto__.call(null);
(statearr_25353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___25358);

return statearr_25353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___25358,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map