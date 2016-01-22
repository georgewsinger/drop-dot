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
var args12779 = [];
var len__9156__auto___12785 = arguments.length;
var i__9157__auto___12786 = (0);
while(true){
if((i__9157__auto___12786 < len__9156__auto___12785)){
args12779.push((arguments[i__9157__auto___12786]));

var G__12787 = (i__9157__auto___12786 + (1));
i__9157__auto___12786 = G__12787;
continue;
} else {
}
break;
}

var G__12781 = args12779.length;
switch (G__12781) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12779.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async12782 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12782 = (function (f,blockable,meta12783){
this.f = f;
this.blockable = blockable;
this.meta12783 = meta12783;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12784,meta12783__$1){
var self__ = this;
var _12784__$1 = this;
return (new cljs.core.async.t_cljs$core$async12782(self__.f,self__.blockable,meta12783__$1));
});

cljs.core.async.t_cljs$core$async12782.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12784){
var self__ = this;
var _12784__$1 = this;
return self__.meta12783;
});

cljs.core.async.t_cljs$core$async12782.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12782.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async12782.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async12782.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async12782.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta12783","meta12783",357584557,null)], null);
});

cljs.core.async.t_cljs$core$async12782.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12782.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12782";

cljs.core.async.t_cljs$core$async12782.cljs$lang$ctorPrWriter = (function (this__8696__auto__,writer__8697__auto__,opt__8698__auto__){
return cljs.core._write.call(null,writer__8697__auto__,"cljs.core.async/t_cljs$core$async12782");
});

cljs.core.async.__GT_t_cljs$core$async12782 = (function cljs$core$async$__GT_t_cljs$core$async12782(f__$1,blockable__$1,meta12783){
return (new cljs.core.async.t_cljs$core$async12782(f__$1,blockable__$1,meta12783));
});

}

return (new cljs.core.async.t_cljs$core$async12782(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args12791 = [];
var len__9156__auto___12794 = arguments.length;
var i__9157__auto___12795 = (0);
while(true){
if((i__9157__auto___12795 < len__9156__auto___12794)){
args12791.push((arguments[i__9157__auto___12795]));

var G__12796 = (i__9157__auto___12795 + (1));
i__9157__auto___12795 = G__12796;
continue;
} else {
}
break;
}

var G__12793 = args12791.length;
switch (G__12793) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12791.length)].join('')));

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
var args12798 = [];
var len__9156__auto___12801 = arguments.length;
var i__9157__auto___12802 = (0);
while(true){
if((i__9157__auto___12802 < len__9156__auto___12801)){
args12798.push((arguments[i__9157__auto___12802]));

var G__12803 = (i__9157__auto___12802 + (1));
i__9157__auto___12802 = G__12803;
continue;
} else {
}
break;
}

var G__12800 = args12798.length;
switch (G__12800) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12798.length)].join('')));

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
var args12805 = [];
var len__9156__auto___12808 = arguments.length;
var i__9157__auto___12809 = (0);
while(true){
if((i__9157__auto___12809 < len__9156__auto___12808)){
args12805.push((arguments[i__9157__auto___12809]));

var G__12810 = (i__9157__auto___12809 + (1));
i__9157__auto___12809 = G__12810;
continue;
} else {
}
break;
}

var G__12807 = args12805.length;
switch (G__12807) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12805.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_12812 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_12812);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_12812,ret){
return (function (){
return fn1.call(null,val_12812);
});})(val_12812,ret))
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
var args12813 = [];
var len__9156__auto___12816 = arguments.length;
var i__9157__auto___12817 = (0);
while(true){
if((i__9157__auto___12817 < len__9156__auto___12816)){
args12813.push((arguments[i__9157__auto___12817]));

var G__12818 = (i__9157__auto___12817 + (1));
i__9157__auto___12817 = G__12818;
continue;
} else {
}
break;
}

var G__12815 = args12813.length;
switch (G__12815) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12813.length)].join('')));

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
var n__9001__auto___12820 = n;
var x_12821 = (0);
while(true){
if((x_12821 < n__9001__auto___12820)){
(a[x_12821] = (0));

var G__12822 = (x_12821 + (1));
x_12821 = G__12822;
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

var G__12823 = (i + (1));
i = G__12823;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async12827 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12827 = (function (alt_flag,flag,meta12828){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta12828 = meta12828;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12827.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12829,meta12828__$1){
var self__ = this;
var _12829__$1 = this;
return (new cljs.core.async.t_cljs$core$async12827(self__.alt_flag,self__.flag,meta12828__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async12827.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12829){
var self__ = this;
var _12829__$1 = this;
return self__.meta12828;
});})(flag))
;

cljs.core.async.t_cljs$core$async12827.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12827.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async12827.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12827.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12827.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta12828","meta12828",479991305,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async12827.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12827.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12827";

cljs.core.async.t_cljs$core$async12827.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8696__auto__,writer__8697__auto__,opt__8698__auto__){
return cljs.core._write.call(null,writer__8697__auto__,"cljs.core.async/t_cljs$core$async12827");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async12827 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async12827(alt_flag__$1,flag__$1,meta12828){
return (new cljs.core.async.t_cljs$core$async12827(alt_flag__$1,flag__$1,meta12828));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async12827(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async12833 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12833 = (function (alt_handler,flag,cb,meta12834){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta12834 = meta12834;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12835,meta12834__$1){
var self__ = this;
var _12835__$1 = this;
return (new cljs.core.async.t_cljs$core$async12833(self__.alt_handler,self__.flag,self__.cb,meta12834__$1));
});

cljs.core.async.t_cljs$core$async12833.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12835){
var self__ = this;
var _12835__$1 = this;
return self__.meta12834;
});

cljs.core.async.t_cljs$core$async12833.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12833.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async12833.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async12833.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async12833.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta12834","meta12834",451756111,null)], null);
});

cljs.core.async.t_cljs$core$async12833.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12833.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12833";

cljs.core.async.t_cljs$core$async12833.cljs$lang$ctorPrWriter = (function (this__8696__auto__,writer__8697__auto__,opt__8698__auto__){
return cljs.core._write.call(null,writer__8697__auto__,"cljs.core.async/t_cljs$core$async12833");
});

cljs.core.async.__GT_t_cljs$core$async12833 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async12833(alt_handler__$1,flag__$1,cb__$1,meta12834){
return (new cljs.core.async.t_cljs$core$async12833(alt_handler__$1,flag__$1,cb__$1,meta12834));
});

}

return (new cljs.core.async.t_cljs$core$async12833(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__12836_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12836_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12837_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12837_SHARP_,port], null));
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
var G__12838 = (i + (1));
i = G__12838;
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
var len__9156__auto___12844 = arguments.length;
var i__9157__auto___12845 = (0);
while(true){
if((i__9157__auto___12845 < len__9156__auto___12844)){
args__9163__auto__.push((arguments[i__9157__auto___12845]));

var G__12846 = (i__9157__auto___12845 + (1));
i__9157__auto___12845 = G__12846;
continue;
} else {
}
break;
}

var argseq__9164__auto__ = ((((1) < args__9163__auto__.length))?(new cljs.core.IndexedSeq(args__9163__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9164__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__12841){
var map__12842 = p__12841;
var map__12842__$1 = ((((!((map__12842 == null)))?((((map__12842.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12842.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12842):map__12842);
var opts = map__12842__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq12839){
var G__12840 = cljs.core.first.call(null,seq12839);
var seq12839__$1 = cljs.core.next.call(null,seq12839);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12840,seq12839__$1);
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
var args12847 = [];
var len__9156__auto___12897 = arguments.length;
var i__9157__auto___12898 = (0);
while(true){
if((i__9157__auto___12898 < len__9156__auto___12897)){
args12847.push((arguments[i__9157__auto___12898]));

var G__12899 = (i__9157__auto___12898 + (1));
i__9157__auto___12898 = G__12899;
continue;
} else {
}
break;
}

var G__12849 = args12847.length;
switch (G__12849) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12847.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10504__auto___12901 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10504__auto___12901){
return (function (){
var f__10505__auto__ = (function (){var switch__10439__auto__ = ((function (c__10504__auto___12901){
return (function (state_12873){
var state_val_12874 = (state_12873[(1)]);
if((state_val_12874 === (7))){
var inst_12869 = (state_12873[(2)]);
var state_12873__$1 = state_12873;
var statearr_12875_12902 = state_12873__$1;
(statearr_12875_12902[(2)] = inst_12869);

(statearr_12875_12902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12874 === (1))){
var state_12873__$1 = state_12873;
var statearr_12876_12903 = state_12873__$1;
(statearr_12876_12903[(2)] = null);

(statearr_12876_12903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12874 === (4))){
var inst_12852 = (state_12873[(7)]);
var inst_12852__$1 = (state_12873[(2)]);
var inst_12853 = (inst_12852__$1 == null);
var state_12873__$1 = (function (){var statearr_12877 = state_12873;
(statearr_12877[(7)] = inst_12852__$1);

return statearr_12877;
})();
if(cljs.core.truth_(inst_12853)){
var statearr_12878_12904 = state_12873__$1;
(statearr_12878_12904[(1)] = (5));

} else {
var statearr_12879_12905 = state_12873__$1;
(statearr_12879_12905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12874 === (13))){
var state_12873__$1 = state_12873;
var statearr_12880_12906 = state_12873__$1;
(statearr_12880_12906[(2)] = null);

(statearr_12880_12906[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12874 === (6))){
var inst_12852 = (state_12873[(7)]);
var state_12873__$1 = state_12873;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12873__$1,(11),to,inst_12852);
} else {
if((state_val_12874 === (3))){
var inst_12871 = (state_12873[(2)]);
var state_12873__$1 = state_12873;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12873__$1,inst_12871);
} else {
if((state_val_12874 === (12))){
var state_12873__$1 = state_12873;
var statearr_12881_12907 = state_12873__$1;
(statearr_12881_12907[(2)] = null);

(statearr_12881_12907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12874 === (2))){
var state_12873__$1 = state_12873;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12873__$1,(4),from);
} else {
if((state_val_12874 === (11))){
var inst_12862 = (state_12873[(2)]);
var state_12873__$1 = state_12873;
if(cljs.core.truth_(inst_12862)){
var statearr_12882_12908 = state_12873__$1;
(statearr_12882_12908[(1)] = (12));

} else {
var statearr_12883_12909 = state_12873__$1;
(statearr_12883_12909[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12874 === (9))){
var state_12873__$1 = state_12873;
var statearr_12884_12910 = state_12873__$1;
(statearr_12884_12910[(2)] = null);

(statearr_12884_12910[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12874 === (5))){
var state_12873__$1 = state_12873;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12885_12911 = state_12873__$1;
(statearr_12885_12911[(1)] = (8));

} else {
var statearr_12886_12912 = state_12873__$1;
(statearr_12886_12912[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12874 === (14))){
var inst_12867 = (state_12873[(2)]);
var state_12873__$1 = state_12873;
var statearr_12887_12913 = state_12873__$1;
(statearr_12887_12913[(2)] = inst_12867);

(statearr_12887_12913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12874 === (10))){
var inst_12859 = (state_12873[(2)]);
var state_12873__$1 = state_12873;
var statearr_12888_12914 = state_12873__$1;
(statearr_12888_12914[(2)] = inst_12859);

(statearr_12888_12914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12874 === (8))){
var inst_12856 = cljs.core.async.close_BANG_.call(null,to);
var state_12873__$1 = state_12873;
var statearr_12889_12915 = state_12873__$1;
(statearr_12889_12915[(2)] = inst_12856);

(statearr_12889_12915[(1)] = (10));


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
});})(c__10504__auto___12901))
;
return ((function (switch__10439__auto__,c__10504__auto___12901){
return (function() {
var cljs$core$async$state_machine__10440__auto__ = null;
var cljs$core$async$state_machine__10440__auto____0 = (function (){
var statearr_12893 = [null,null,null,null,null,null,null,null];
(statearr_12893[(0)] = cljs$core$async$state_machine__10440__auto__);

(statearr_12893[(1)] = (1));

return statearr_12893;
});
var cljs$core$async$state_machine__10440__auto____1 = (function (state_12873){
while(true){
var ret_value__10441__auto__ = (function (){try{while(true){
var result__10442__auto__ = switch__10439__auto__.call(null,state_12873);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10442__auto__;
}
break;
}
}catch (e12894){if((e12894 instanceof Object)){
var ex__10443__auto__ = e12894;
var statearr_12895_12916 = state_12873;
(statearr_12895_12916[(5)] = ex__10443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10441__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12917 = state_12873;
state_12873 = G__12917;
continue;
} else {
return ret_value__10441__auto__;
}
break;
}
});
cljs$core$async$state_machine__10440__auto__ = function(state_12873){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10440__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10440__auto____1.call(this,state_12873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10440__auto____0;
cljs$core$async$state_machine__10440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10440__auto____1;
return cljs$core$async$state_machine__10440__auto__;
})()
;})(switch__10439__auto__,c__10504__auto___12901))
})();
var state__10506__auto__ = (function (){var statearr_12896 = f__10505__auto__.call(null);
(statearr_12896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10504__auto___12901);

return statearr_12896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10506__auto__);
});})(c__10504__auto___12901))
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
return (function (p__13101){
var vec__13102 = p__13101;
var v = cljs.core.nth.call(null,vec__13102,(0),null);
var p = cljs.core.nth.call(null,vec__13102,(1),null);
var job = vec__13102;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__10504__auto___13284 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10504__auto___13284,res,vec__13102,v,p,job,jobs,results){
return (function (){
var f__10505__auto__ = (function (){var switch__10439__auto__ = ((function (c__10504__auto___13284,res,vec__13102,v,p,job,jobs,results){
return (function (state_13107){
var state_val_13108 = (state_13107[(1)]);
if((state_val_13108 === (1))){
var state_13107__$1 = state_13107;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13107__$1,(2),res,v);
} else {
if((state_val_13108 === (2))){
var inst_13104 = (state_13107[(2)]);
var inst_13105 = cljs.core.async.close_BANG_.call(null,res);
var state_13107__$1 = (function (){var statearr_13109 = state_13107;
(statearr_13109[(7)] = inst_13104);

return statearr_13109;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13107__$1,inst_13105);
} else {
return null;
}
}
});})(c__10504__auto___13284,res,vec__13102,v,p,job,jobs,results))
;
return ((function (switch__10439__auto__,c__10504__auto___13284,res,vec__13102,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10440__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10440__auto____0 = (function (){
var statearr_13113 = [null,null,null,null,null,null,null,null];
(statearr_13113[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10440__auto__);

(statearr_13113[(1)] = (1));

return statearr_13113;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10440__auto____1 = (function (state_13107){
while(true){
var ret_value__10441__auto__ = (function (){try{while(true){
var result__10442__auto__ = switch__10439__auto__.call(null,state_13107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10442__auto__;
}
break;
}
}catch (e13114){if((e13114 instanceof Object)){
var ex__10443__auto__ = e13114;
var statearr_13115_13285 = state_13107;
(statearr_13115_13285[(5)] = ex__10443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10441__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13286 = state_13107;
state_13107 = G__13286;
continue;
} else {
return ret_value__10441__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10440__auto__ = function(state_13107){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10440__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10440__auto____1.call(this,state_13107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10440__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10440__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10440__auto__;
})()
;})(switch__10439__auto__,c__10504__auto___13284,res,vec__13102,v,p,job,jobs,results))
})();
var state__10506__auto__ = (function (){var statearr_13116 = f__10505__auto__.call(null);
(statearr_13116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10504__auto___13284);

return statearr_13116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10506__auto__);
});})(c__10504__auto___13284,res,vec__13102,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__13117){
var vec__13118 = p__13117;
var v = cljs.core.nth.call(null,vec__13118,(0),null);
var p = cljs.core.nth.call(null,vec__13118,(1),null);
var job = vec__13118;
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
var n__9001__auto___13287 = n;
var __13288 = (0);
while(true){
if((__13288 < n__9001__auto___13287)){
var G__13119_13289 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__13119_13289) {
case "compute":
var c__10504__auto___13291 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13288,c__10504__auto___13291,G__13119_13289,n__9001__auto___13287,jobs,results,process,async){
return (function (){
var f__10505__auto__ = (function (){var switch__10439__auto__ = ((function (__13288,c__10504__auto___13291,G__13119_13289,n__9001__auto___13287,jobs,results,process,async){
return (function (state_13132){
var state_val_13133 = (state_13132[(1)]);
if((state_val_13133 === (1))){
var state_13132__$1 = state_13132;
var statearr_13134_13292 = state_13132__$1;
(statearr_13134_13292[(2)] = null);

(statearr_13134_13292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13133 === (2))){
var state_13132__$1 = state_13132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13132__$1,(4),jobs);
} else {
if((state_val_13133 === (3))){
var inst_13130 = (state_13132[(2)]);
var state_13132__$1 = state_13132;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13132__$1,inst_13130);
} else {
if((state_val_13133 === (4))){
var inst_13122 = (state_13132[(2)]);
var inst_13123 = process.call(null,inst_13122);
var state_13132__$1 = state_13132;
if(cljs.core.truth_(inst_13123)){
var statearr_13135_13293 = state_13132__$1;
(statearr_13135_13293[(1)] = (5));

} else {
var statearr_13136_13294 = state_13132__$1;
(statearr_13136_13294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13133 === (5))){
var state_13132__$1 = state_13132;
var statearr_13137_13295 = state_13132__$1;
(statearr_13137_13295[(2)] = null);

(statearr_13137_13295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13133 === (6))){
var state_13132__$1 = state_13132;
var statearr_13138_13296 = state_13132__$1;
(statearr_13138_13296[(2)] = null);

(statearr_13138_13296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13133 === (7))){
var inst_13128 = (state_13132[(2)]);
var state_13132__$1 = state_13132;
var statearr_13139_13297 = state_13132__$1;
(statearr_13139_13297[(2)] = inst_13128);

(statearr_13139_13297[(1)] = (3));


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
});})(__13288,c__10504__auto___13291,G__13119_13289,n__9001__auto___13287,jobs,results,process,async))
;
return ((function (__13288,switch__10439__auto__,c__10504__auto___13291,G__13119_13289,n__9001__auto___13287,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10440__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10440__auto____0 = (function (){
var statearr_13143 = [null,null,null,null,null,null,null];
(statearr_13143[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10440__auto__);

(statearr_13143[(1)] = (1));

return statearr_13143;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10440__auto____1 = (function (state_13132){
while(true){
var ret_value__10441__auto__ = (function (){try{while(true){
var result__10442__auto__ = switch__10439__auto__.call(null,state_13132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10442__auto__;
}
break;
}
}catch (e13144){if((e13144 instanceof Object)){
var ex__10443__auto__ = e13144;
var statearr_13145_13298 = state_13132;
(statearr_13145_13298[(5)] = ex__10443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13144;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10441__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13299 = state_13132;
state_13132 = G__13299;
continue;
} else {
return ret_value__10441__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10440__auto__ = function(state_13132){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10440__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10440__auto____1.call(this,state_13132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10440__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10440__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10440__auto__;
})()
;})(__13288,switch__10439__auto__,c__10504__auto___13291,G__13119_13289,n__9001__auto___13287,jobs,results,process,async))
})();
var state__10506__auto__ = (function (){var statearr_13146 = f__10505__auto__.call(null);
(statearr_13146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10504__auto___13291);

return statearr_13146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10506__auto__);
});})(__13288,c__10504__auto___13291,G__13119_13289,n__9001__auto___13287,jobs,results,process,async))
);


break;
case "async":
var c__10504__auto___13300 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13288,c__10504__auto___13300,G__13119_13289,n__9001__auto___13287,jobs,results,process,async){
return (function (){
var f__10505__auto__ = (function (){var switch__10439__auto__ = ((function (__13288,c__10504__auto___13300,G__13119_13289,n__9001__auto___13287,jobs,results,process,async){
return (function (state_13159){
var state_val_13160 = (state_13159[(1)]);
if((state_val_13160 === (1))){
var state_13159__$1 = state_13159;
var statearr_13161_13301 = state_13159__$1;
(statearr_13161_13301[(2)] = null);

(statearr_13161_13301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13160 === (2))){
var state_13159__$1 = state_13159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13159__$1,(4),jobs);
} else {
if((state_val_13160 === (3))){
var inst_13157 = (state_13159[(2)]);
var state_13159__$1 = state_13159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13159__$1,inst_13157);
} else {
if((state_val_13160 === (4))){
var inst_13149 = (state_13159[(2)]);
var inst_13150 = async.call(null,inst_13149);
var state_13159__$1 = state_13159;
if(cljs.core.truth_(inst_13150)){
var statearr_13162_13302 = state_13159__$1;
(statearr_13162_13302[(1)] = (5));

} else {
var statearr_13163_13303 = state_13159__$1;
(statearr_13163_13303[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13160 === (5))){
var state_13159__$1 = state_13159;
var statearr_13164_13304 = state_13159__$1;
(statearr_13164_13304[(2)] = null);

(statearr_13164_13304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13160 === (6))){
var state_13159__$1 = state_13159;
var statearr_13165_13305 = state_13159__$1;
(statearr_13165_13305[(2)] = null);

(statearr_13165_13305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13160 === (7))){
var inst_13155 = (state_13159[(2)]);
var state_13159__$1 = state_13159;
var statearr_13166_13306 = state_13159__$1;
(statearr_13166_13306[(2)] = inst_13155);

(statearr_13166_13306[(1)] = (3));


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
});})(__13288,c__10504__auto___13300,G__13119_13289,n__9001__auto___13287,jobs,results,process,async))
;
return ((function (__13288,switch__10439__auto__,c__10504__auto___13300,G__13119_13289,n__9001__auto___13287,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10440__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10440__auto____0 = (function (){
var statearr_13170 = [null,null,null,null,null,null,null];
(statearr_13170[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10440__auto__);

(statearr_13170[(1)] = (1));

return statearr_13170;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10440__auto____1 = (function (state_13159){
while(true){
var ret_value__10441__auto__ = (function (){try{while(true){
var result__10442__auto__ = switch__10439__auto__.call(null,state_13159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10442__auto__;
}
break;
}
}catch (e13171){if((e13171 instanceof Object)){
var ex__10443__auto__ = e13171;
var statearr_13172_13307 = state_13159;
(statearr_13172_13307[(5)] = ex__10443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10441__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13308 = state_13159;
state_13159 = G__13308;
continue;
} else {
return ret_value__10441__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10440__auto__ = function(state_13159){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10440__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10440__auto____1.call(this,state_13159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10440__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10440__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10440__auto__;
})()
;})(__13288,switch__10439__auto__,c__10504__auto___13300,G__13119_13289,n__9001__auto___13287,jobs,results,process,async))
})();
var state__10506__auto__ = (function (){var statearr_13173 = f__10505__auto__.call(null);
(statearr_13173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10504__auto___13300);

return statearr_13173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10506__auto__);
});})(__13288,c__10504__auto___13300,G__13119_13289,n__9001__auto___13287,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__13309 = (__13288 + (1));
__13288 = G__13309;
continue;
} else {
}
break;
}

var c__10504__auto___13310 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10504__auto___13310,jobs,results,process,async){
return (function (){
var f__10505__auto__ = (function (){var switch__10439__auto__ = ((function (c__10504__auto___13310,jobs,results,process,async){
return (function (state_13195){
var state_val_13196 = (state_13195[(1)]);
if((state_val_13196 === (1))){
var state_13195__$1 = state_13195;
var statearr_13197_13311 = state_13195__$1;
(statearr_13197_13311[(2)] = null);

(statearr_13197_13311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13196 === (2))){
var state_13195__$1 = state_13195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13195__$1,(4),from);
} else {
if((state_val_13196 === (3))){
var inst_13193 = (state_13195[(2)]);
var state_13195__$1 = state_13195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13195__$1,inst_13193);
} else {
if((state_val_13196 === (4))){
var inst_13176 = (state_13195[(7)]);
var inst_13176__$1 = (state_13195[(2)]);
var inst_13177 = (inst_13176__$1 == null);
var state_13195__$1 = (function (){var statearr_13198 = state_13195;
(statearr_13198[(7)] = inst_13176__$1);

return statearr_13198;
})();
if(cljs.core.truth_(inst_13177)){
var statearr_13199_13312 = state_13195__$1;
(statearr_13199_13312[(1)] = (5));

} else {
var statearr_13200_13313 = state_13195__$1;
(statearr_13200_13313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13196 === (5))){
var inst_13179 = cljs.core.async.close_BANG_.call(null,jobs);
var state_13195__$1 = state_13195;
var statearr_13201_13314 = state_13195__$1;
(statearr_13201_13314[(2)] = inst_13179);

(statearr_13201_13314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13196 === (6))){
var inst_13176 = (state_13195[(7)]);
var inst_13181 = (state_13195[(8)]);
var inst_13181__$1 = cljs.core.async.chan.call(null,(1));
var inst_13182 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13183 = [inst_13176,inst_13181__$1];
var inst_13184 = (new cljs.core.PersistentVector(null,2,(5),inst_13182,inst_13183,null));
var state_13195__$1 = (function (){var statearr_13202 = state_13195;
(statearr_13202[(8)] = inst_13181__$1);

return statearr_13202;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13195__$1,(8),jobs,inst_13184);
} else {
if((state_val_13196 === (7))){
var inst_13191 = (state_13195[(2)]);
var state_13195__$1 = state_13195;
var statearr_13203_13315 = state_13195__$1;
(statearr_13203_13315[(2)] = inst_13191);

(statearr_13203_13315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13196 === (8))){
var inst_13181 = (state_13195[(8)]);
var inst_13186 = (state_13195[(2)]);
var state_13195__$1 = (function (){var statearr_13204 = state_13195;
(statearr_13204[(9)] = inst_13186);

return statearr_13204;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13195__$1,(9),results,inst_13181);
} else {
if((state_val_13196 === (9))){
var inst_13188 = (state_13195[(2)]);
var state_13195__$1 = (function (){var statearr_13205 = state_13195;
(statearr_13205[(10)] = inst_13188);

return statearr_13205;
})();
var statearr_13206_13316 = state_13195__$1;
(statearr_13206_13316[(2)] = null);

(statearr_13206_13316[(1)] = (2));


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
});})(c__10504__auto___13310,jobs,results,process,async))
;
return ((function (switch__10439__auto__,c__10504__auto___13310,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10440__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10440__auto____0 = (function (){
var statearr_13210 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13210[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10440__auto__);

(statearr_13210[(1)] = (1));

return statearr_13210;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10440__auto____1 = (function (state_13195){
while(true){
var ret_value__10441__auto__ = (function (){try{while(true){
var result__10442__auto__ = switch__10439__auto__.call(null,state_13195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10442__auto__;
}
break;
}
}catch (e13211){if((e13211 instanceof Object)){
var ex__10443__auto__ = e13211;
var statearr_13212_13317 = state_13195;
(statearr_13212_13317[(5)] = ex__10443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10441__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13318 = state_13195;
state_13195 = G__13318;
continue;
} else {
return ret_value__10441__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10440__auto__ = function(state_13195){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10440__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10440__auto____1.call(this,state_13195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10440__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10440__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10440__auto__;
})()
;})(switch__10439__auto__,c__10504__auto___13310,jobs,results,process,async))
})();
var state__10506__auto__ = (function (){var statearr_13213 = f__10505__auto__.call(null);
(statearr_13213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10504__auto___13310);

return statearr_13213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10506__auto__);
});})(c__10504__auto___13310,jobs,results,process,async))
);


var c__10504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10504__auto__,jobs,results,process,async){
return (function (){
var f__10505__auto__ = (function (){var switch__10439__auto__ = ((function (c__10504__auto__,jobs,results,process,async){
return (function (state_13251){
var state_val_13252 = (state_13251[(1)]);
if((state_val_13252 === (7))){
var inst_13247 = (state_13251[(2)]);
var state_13251__$1 = state_13251;
var statearr_13253_13319 = state_13251__$1;
(statearr_13253_13319[(2)] = inst_13247);

(statearr_13253_13319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13252 === (20))){
var state_13251__$1 = state_13251;
var statearr_13254_13320 = state_13251__$1;
(statearr_13254_13320[(2)] = null);

(statearr_13254_13320[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13252 === (1))){
var state_13251__$1 = state_13251;
var statearr_13255_13321 = state_13251__$1;
(statearr_13255_13321[(2)] = null);

(statearr_13255_13321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13252 === (4))){
var inst_13216 = (state_13251[(7)]);
var inst_13216__$1 = (state_13251[(2)]);
var inst_13217 = (inst_13216__$1 == null);
var state_13251__$1 = (function (){var statearr_13256 = state_13251;
(statearr_13256[(7)] = inst_13216__$1);

return statearr_13256;
})();
if(cljs.core.truth_(inst_13217)){
var statearr_13257_13322 = state_13251__$1;
(statearr_13257_13322[(1)] = (5));

} else {
var statearr_13258_13323 = state_13251__$1;
(statearr_13258_13323[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13252 === (15))){
var inst_13229 = (state_13251[(8)]);
var state_13251__$1 = state_13251;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13251__$1,(18),to,inst_13229);
} else {
if((state_val_13252 === (21))){
var inst_13242 = (state_13251[(2)]);
var state_13251__$1 = state_13251;
var statearr_13259_13324 = state_13251__$1;
(statearr_13259_13324[(2)] = inst_13242);

(statearr_13259_13324[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13252 === (13))){
var inst_13244 = (state_13251[(2)]);
var state_13251__$1 = (function (){var statearr_13260 = state_13251;
(statearr_13260[(9)] = inst_13244);

return statearr_13260;
})();
var statearr_13261_13325 = state_13251__$1;
(statearr_13261_13325[(2)] = null);

(statearr_13261_13325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13252 === (6))){
var inst_13216 = (state_13251[(7)]);
var state_13251__$1 = state_13251;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13251__$1,(11),inst_13216);
} else {
if((state_val_13252 === (17))){
var inst_13237 = (state_13251[(2)]);
var state_13251__$1 = state_13251;
if(cljs.core.truth_(inst_13237)){
var statearr_13262_13326 = state_13251__$1;
(statearr_13262_13326[(1)] = (19));

} else {
var statearr_13263_13327 = state_13251__$1;
(statearr_13263_13327[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13252 === (3))){
var inst_13249 = (state_13251[(2)]);
var state_13251__$1 = state_13251;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13251__$1,inst_13249);
} else {
if((state_val_13252 === (12))){
var inst_13226 = (state_13251[(10)]);
var state_13251__$1 = state_13251;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13251__$1,(14),inst_13226);
} else {
if((state_val_13252 === (2))){
var state_13251__$1 = state_13251;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13251__$1,(4),results);
} else {
if((state_val_13252 === (19))){
var state_13251__$1 = state_13251;
var statearr_13264_13328 = state_13251__$1;
(statearr_13264_13328[(2)] = null);

(statearr_13264_13328[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13252 === (11))){
var inst_13226 = (state_13251[(2)]);
var state_13251__$1 = (function (){var statearr_13265 = state_13251;
(statearr_13265[(10)] = inst_13226);

return statearr_13265;
})();
var statearr_13266_13329 = state_13251__$1;
(statearr_13266_13329[(2)] = null);

(statearr_13266_13329[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13252 === (9))){
var state_13251__$1 = state_13251;
var statearr_13267_13330 = state_13251__$1;
(statearr_13267_13330[(2)] = null);

(statearr_13267_13330[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13252 === (5))){
var state_13251__$1 = state_13251;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13268_13331 = state_13251__$1;
(statearr_13268_13331[(1)] = (8));

} else {
var statearr_13269_13332 = state_13251__$1;
(statearr_13269_13332[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13252 === (14))){
var inst_13229 = (state_13251[(8)]);
var inst_13231 = (state_13251[(11)]);
var inst_13229__$1 = (state_13251[(2)]);
var inst_13230 = (inst_13229__$1 == null);
var inst_13231__$1 = cljs.core.not.call(null,inst_13230);
var state_13251__$1 = (function (){var statearr_13270 = state_13251;
(statearr_13270[(8)] = inst_13229__$1);

(statearr_13270[(11)] = inst_13231__$1);

return statearr_13270;
})();
if(inst_13231__$1){
var statearr_13271_13333 = state_13251__$1;
(statearr_13271_13333[(1)] = (15));

} else {
var statearr_13272_13334 = state_13251__$1;
(statearr_13272_13334[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13252 === (16))){
var inst_13231 = (state_13251[(11)]);
var state_13251__$1 = state_13251;
var statearr_13273_13335 = state_13251__$1;
(statearr_13273_13335[(2)] = inst_13231);

(statearr_13273_13335[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13252 === (10))){
var inst_13223 = (state_13251[(2)]);
var state_13251__$1 = state_13251;
var statearr_13274_13336 = state_13251__$1;
(statearr_13274_13336[(2)] = inst_13223);

(statearr_13274_13336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13252 === (18))){
var inst_13234 = (state_13251[(2)]);
var state_13251__$1 = state_13251;
var statearr_13275_13337 = state_13251__$1;
(statearr_13275_13337[(2)] = inst_13234);

(statearr_13275_13337[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13252 === (8))){
var inst_13220 = cljs.core.async.close_BANG_.call(null,to);
var state_13251__$1 = state_13251;
var statearr_13276_13338 = state_13251__$1;
(statearr_13276_13338[(2)] = inst_13220);

(statearr_13276_13338[(1)] = (10));


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
});})(c__10504__auto__,jobs,results,process,async))
;
return ((function (switch__10439__auto__,c__10504__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10440__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10440__auto____0 = (function (){
var statearr_13280 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13280[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10440__auto__);

(statearr_13280[(1)] = (1));

return statearr_13280;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10440__auto____1 = (function (state_13251){
while(true){
var ret_value__10441__auto__ = (function (){try{while(true){
var result__10442__auto__ = switch__10439__auto__.call(null,state_13251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10442__auto__;
}
break;
}
}catch (e13281){if((e13281 instanceof Object)){
var ex__10443__auto__ = e13281;
var statearr_13282_13339 = state_13251;
(statearr_13282_13339[(5)] = ex__10443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13281;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10441__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13340 = state_13251;
state_13251 = G__13340;
continue;
} else {
return ret_value__10441__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10440__auto__ = function(state_13251){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10440__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10440__auto____1.call(this,state_13251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10440__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10440__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10440__auto__;
})()
;})(switch__10439__auto__,c__10504__auto__,jobs,results,process,async))
})();
var state__10506__auto__ = (function (){var statearr_13283 = f__10505__auto__.call(null);
(statearr_13283[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10504__auto__);

return statearr_13283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10506__auto__);
});})(c__10504__auto__,jobs,results,process,async))
);

return c__10504__auto__;
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
var args13341 = [];
var len__9156__auto___13344 = arguments.length;
var i__9157__auto___13345 = (0);
while(true){
if((i__9157__auto___13345 < len__9156__auto___13344)){
args13341.push((arguments[i__9157__auto___13345]));

var G__13346 = (i__9157__auto___13345 + (1));
i__9157__auto___13345 = G__13346;
continue;
} else {
}
break;
}

var G__13343 = args13341.length;
switch (G__13343) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13341.length)].join('')));

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
var args13348 = [];
var len__9156__auto___13351 = arguments.length;
var i__9157__auto___13352 = (0);
while(true){
if((i__9157__auto___13352 < len__9156__auto___13351)){
args13348.push((arguments[i__9157__auto___13352]));

var G__13353 = (i__9157__auto___13352 + (1));
i__9157__auto___13352 = G__13353;
continue;
} else {
}
break;
}

var G__13350 = args13348.length;
switch (G__13350) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13348.length)].join('')));

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
var args13355 = [];
var len__9156__auto___13408 = arguments.length;
var i__9157__auto___13409 = (0);
while(true){
if((i__9157__auto___13409 < len__9156__auto___13408)){
args13355.push((arguments[i__9157__auto___13409]));

var G__13410 = (i__9157__auto___13409 + (1));
i__9157__auto___13409 = G__13410;
continue;
} else {
}
break;
}

var G__13357 = args13355.length;
switch (G__13357) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13355.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__10504__auto___13412 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10504__auto___13412,tc,fc){
return (function (){
var f__10505__auto__ = (function (){var switch__10439__auto__ = ((function (c__10504__auto___13412,tc,fc){
return (function (state_13383){
var state_val_13384 = (state_13383[(1)]);
if((state_val_13384 === (7))){
var inst_13379 = (state_13383[(2)]);
var state_13383__$1 = state_13383;
var statearr_13385_13413 = state_13383__$1;
(statearr_13385_13413[(2)] = inst_13379);

(statearr_13385_13413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13384 === (1))){
var state_13383__$1 = state_13383;
var statearr_13386_13414 = state_13383__$1;
(statearr_13386_13414[(2)] = null);

(statearr_13386_13414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13384 === (4))){
var inst_13360 = (state_13383[(7)]);
var inst_13360__$1 = (state_13383[(2)]);
var inst_13361 = (inst_13360__$1 == null);
var state_13383__$1 = (function (){var statearr_13387 = state_13383;
(statearr_13387[(7)] = inst_13360__$1);

return statearr_13387;
})();
if(cljs.core.truth_(inst_13361)){
var statearr_13388_13415 = state_13383__$1;
(statearr_13388_13415[(1)] = (5));

} else {
var statearr_13389_13416 = state_13383__$1;
(statearr_13389_13416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13384 === (13))){
var state_13383__$1 = state_13383;
var statearr_13390_13417 = state_13383__$1;
(statearr_13390_13417[(2)] = null);

(statearr_13390_13417[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13384 === (6))){
var inst_13360 = (state_13383[(7)]);
var inst_13366 = p.call(null,inst_13360);
var state_13383__$1 = state_13383;
if(cljs.core.truth_(inst_13366)){
var statearr_13391_13418 = state_13383__$1;
(statearr_13391_13418[(1)] = (9));

} else {
var statearr_13392_13419 = state_13383__$1;
(statearr_13392_13419[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13384 === (3))){
var inst_13381 = (state_13383[(2)]);
var state_13383__$1 = state_13383;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13383__$1,inst_13381);
} else {
if((state_val_13384 === (12))){
var state_13383__$1 = state_13383;
var statearr_13393_13420 = state_13383__$1;
(statearr_13393_13420[(2)] = null);

(statearr_13393_13420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13384 === (2))){
var state_13383__$1 = state_13383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13383__$1,(4),ch);
} else {
if((state_val_13384 === (11))){
var inst_13360 = (state_13383[(7)]);
var inst_13370 = (state_13383[(2)]);
var state_13383__$1 = state_13383;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13383__$1,(8),inst_13370,inst_13360);
} else {
if((state_val_13384 === (9))){
var state_13383__$1 = state_13383;
var statearr_13394_13421 = state_13383__$1;
(statearr_13394_13421[(2)] = tc);

(statearr_13394_13421[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13384 === (5))){
var inst_13363 = cljs.core.async.close_BANG_.call(null,tc);
var inst_13364 = cljs.core.async.close_BANG_.call(null,fc);
var state_13383__$1 = (function (){var statearr_13395 = state_13383;
(statearr_13395[(8)] = inst_13363);

return statearr_13395;
})();
var statearr_13396_13422 = state_13383__$1;
(statearr_13396_13422[(2)] = inst_13364);

(statearr_13396_13422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13384 === (14))){
var inst_13377 = (state_13383[(2)]);
var state_13383__$1 = state_13383;
var statearr_13397_13423 = state_13383__$1;
(statearr_13397_13423[(2)] = inst_13377);

(statearr_13397_13423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13384 === (10))){
var state_13383__$1 = state_13383;
var statearr_13398_13424 = state_13383__$1;
(statearr_13398_13424[(2)] = fc);

(statearr_13398_13424[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13384 === (8))){
var inst_13372 = (state_13383[(2)]);
var state_13383__$1 = state_13383;
if(cljs.core.truth_(inst_13372)){
var statearr_13399_13425 = state_13383__$1;
(statearr_13399_13425[(1)] = (12));

} else {
var statearr_13400_13426 = state_13383__$1;
(statearr_13400_13426[(1)] = (13));

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
});})(c__10504__auto___13412,tc,fc))
;
return ((function (switch__10439__auto__,c__10504__auto___13412,tc,fc){
return (function() {
var cljs$core$async$state_machine__10440__auto__ = null;
var cljs$core$async$state_machine__10440__auto____0 = (function (){
var statearr_13404 = [null,null,null,null,null,null,null,null,null];
(statearr_13404[(0)] = cljs$core$async$state_machine__10440__auto__);

(statearr_13404[(1)] = (1));

return statearr_13404;
});
var cljs$core$async$state_machine__10440__auto____1 = (function (state_13383){
while(true){
var ret_value__10441__auto__ = (function (){try{while(true){
var result__10442__auto__ = switch__10439__auto__.call(null,state_13383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10442__auto__;
}
break;
}
}catch (e13405){if((e13405 instanceof Object)){
var ex__10443__auto__ = e13405;
var statearr_13406_13427 = state_13383;
(statearr_13406_13427[(5)] = ex__10443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10441__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13428 = state_13383;
state_13383 = G__13428;
continue;
} else {
return ret_value__10441__auto__;
}
break;
}
});
cljs$core$async$state_machine__10440__auto__ = function(state_13383){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10440__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10440__auto____1.call(this,state_13383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10440__auto____0;
cljs$core$async$state_machine__10440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10440__auto____1;
return cljs$core$async$state_machine__10440__auto__;
})()
;})(switch__10439__auto__,c__10504__auto___13412,tc,fc))
})();
var state__10506__auto__ = (function (){var statearr_13407 = f__10505__auto__.call(null);
(statearr_13407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10504__auto___13412);

return statearr_13407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10506__auto__);
});})(c__10504__auto___13412,tc,fc))
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
var c__10504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10504__auto__){
return (function (){
var f__10505__auto__ = (function (){var switch__10439__auto__ = ((function (c__10504__auto__){
return (function (state_13492){
var state_val_13493 = (state_13492[(1)]);
if((state_val_13493 === (7))){
var inst_13488 = (state_13492[(2)]);
var state_13492__$1 = state_13492;
var statearr_13494_13515 = state_13492__$1;
(statearr_13494_13515[(2)] = inst_13488);

(statearr_13494_13515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13493 === (1))){
var inst_13472 = init;
var state_13492__$1 = (function (){var statearr_13495 = state_13492;
(statearr_13495[(7)] = inst_13472);

return statearr_13495;
})();
var statearr_13496_13516 = state_13492__$1;
(statearr_13496_13516[(2)] = null);

(statearr_13496_13516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13493 === (4))){
var inst_13475 = (state_13492[(8)]);
var inst_13475__$1 = (state_13492[(2)]);
var inst_13476 = (inst_13475__$1 == null);
var state_13492__$1 = (function (){var statearr_13497 = state_13492;
(statearr_13497[(8)] = inst_13475__$1);

return statearr_13497;
})();
if(cljs.core.truth_(inst_13476)){
var statearr_13498_13517 = state_13492__$1;
(statearr_13498_13517[(1)] = (5));

} else {
var statearr_13499_13518 = state_13492__$1;
(statearr_13499_13518[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13493 === (6))){
var inst_13479 = (state_13492[(9)]);
var inst_13472 = (state_13492[(7)]);
var inst_13475 = (state_13492[(8)]);
var inst_13479__$1 = f.call(null,inst_13472,inst_13475);
var inst_13480 = cljs.core.reduced_QMARK_.call(null,inst_13479__$1);
var state_13492__$1 = (function (){var statearr_13500 = state_13492;
(statearr_13500[(9)] = inst_13479__$1);

return statearr_13500;
})();
if(inst_13480){
var statearr_13501_13519 = state_13492__$1;
(statearr_13501_13519[(1)] = (8));

} else {
var statearr_13502_13520 = state_13492__$1;
(statearr_13502_13520[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13493 === (3))){
var inst_13490 = (state_13492[(2)]);
var state_13492__$1 = state_13492;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13492__$1,inst_13490);
} else {
if((state_val_13493 === (2))){
var state_13492__$1 = state_13492;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13492__$1,(4),ch);
} else {
if((state_val_13493 === (9))){
var inst_13479 = (state_13492[(9)]);
var inst_13472 = inst_13479;
var state_13492__$1 = (function (){var statearr_13503 = state_13492;
(statearr_13503[(7)] = inst_13472);

return statearr_13503;
})();
var statearr_13504_13521 = state_13492__$1;
(statearr_13504_13521[(2)] = null);

(statearr_13504_13521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13493 === (5))){
var inst_13472 = (state_13492[(7)]);
var state_13492__$1 = state_13492;
var statearr_13505_13522 = state_13492__$1;
(statearr_13505_13522[(2)] = inst_13472);

(statearr_13505_13522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13493 === (10))){
var inst_13486 = (state_13492[(2)]);
var state_13492__$1 = state_13492;
var statearr_13506_13523 = state_13492__$1;
(statearr_13506_13523[(2)] = inst_13486);

(statearr_13506_13523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13493 === (8))){
var inst_13479 = (state_13492[(9)]);
var inst_13482 = cljs.core.deref.call(null,inst_13479);
var state_13492__$1 = state_13492;
var statearr_13507_13524 = state_13492__$1;
(statearr_13507_13524[(2)] = inst_13482);

(statearr_13507_13524[(1)] = (10));


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
});})(c__10504__auto__))
;
return ((function (switch__10439__auto__,c__10504__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__10440__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10440__auto____0 = (function (){
var statearr_13511 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13511[(0)] = cljs$core$async$reduce_$_state_machine__10440__auto__);

(statearr_13511[(1)] = (1));

return statearr_13511;
});
var cljs$core$async$reduce_$_state_machine__10440__auto____1 = (function (state_13492){
while(true){
var ret_value__10441__auto__ = (function (){try{while(true){
var result__10442__auto__ = switch__10439__auto__.call(null,state_13492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10442__auto__;
}
break;
}
}catch (e13512){if((e13512 instanceof Object)){
var ex__10443__auto__ = e13512;
var statearr_13513_13525 = state_13492;
(statearr_13513_13525[(5)] = ex__10443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13512;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10441__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13526 = state_13492;
state_13492 = G__13526;
continue;
} else {
return ret_value__10441__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10440__auto__ = function(state_13492){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10440__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10440__auto____1.call(this,state_13492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10440__auto____0;
cljs$core$async$reduce_$_state_machine__10440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10440__auto____1;
return cljs$core$async$reduce_$_state_machine__10440__auto__;
})()
;})(switch__10439__auto__,c__10504__auto__))
})();
var state__10506__auto__ = (function (){var statearr_13514 = f__10505__auto__.call(null);
(statearr_13514[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10504__auto__);

return statearr_13514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10506__auto__);
});})(c__10504__auto__))
);

return c__10504__auto__;
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
var args13527 = [];
var len__9156__auto___13579 = arguments.length;
var i__9157__auto___13580 = (0);
while(true){
if((i__9157__auto___13580 < len__9156__auto___13579)){
args13527.push((arguments[i__9157__auto___13580]));

var G__13581 = (i__9157__auto___13580 + (1));
i__9157__auto___13580 = G__13581;
continue;
} else {
}
break;
}

var G__13529 = args13527.length;
switch (G__13529) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13527.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__10504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10504__auto__){
return (function (){
var f__10505__auto__ = (function (){var switch__10439__auto__ = ((function (c__10504__auto__){
return (function (state_13554){
var state_val_13555 = (state_13554[(1)]);
if((state_val_13555 === (7))){
var inst_13536 = (state_13554[(2)]);
var state_13554__$1 = state_13554;
var statearr_13556_13583 = state_13554__$1;
(statearr_13556_13583[(2)] = inst_13536);

(statearr_13556_13583[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13555 === (1))){
var inst_13530 = cljs.core.seq.call(null,coll);
var inst_13531 = inst_13530;
var state_13554__$1 = (function (){var statearr_13557 = state_13554;
(statearr_13557[(7)] = inst_13531);

return statearr_13557;
})();
var statearr_13558_13584 = state_13554__$1;
(statearr_13558_13584[(2)] = null);

(statearr_13558_13584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13555 === (4))){
var inst_13531 = (state_13554[(7)]);
var inst_13534 = cljs.core.first.call(null,inst_13531);
var state_13554__$1 = state_13554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13554__$1,(7),ch,inst_13534);
} else {
if((state_val_13555 === (13))){
var inst_13548 = (state_13554[(2)]);
var state_13554__$1 = state_13554;
var statearr_13559_13585 = state_13554__$1;
(statearr_13559_13585[(2)] = inst_13548);

(statearr_13559_13585[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13555 === (6))){
var inst_13539 = (state_13554[(2)]);
var state_13554__$1 = state_13554;
if(cljs.core.truth_(inst_13539)){
var statearr_13560_13586 = state_13554__$1;
(statearr_13560_13586[(1)] = (8));

} else {
var statearr_13561_13587 = state_13554__$1;
(statearr_13561_13587[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13555 === (3))){
var inst_13552 = (state_13554[(2)]);
var state_13554__$1 = state_13554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13554__$1,inst_13552);
} else {
if((state_val_13555 === (12))){
var state_13554__$1 = state_13554;
var statearr_13562_13588 = state_13554__$1;
(statearr_13562_13588[(2)] = null);

(statearr_13562_13588[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13555 === (2))){
var inst_13531 = (state_13554[(7)]);
var state_13554__$1 = state_13554;
if(cljs.core.truth_(inst_13531)){
var statearr_13563_13589 = state_13554__$1;
(statearr_13563_13589[(1)] = (4));

} else {
var statearr_13564_13590 = state_13554__$1;
(statearr_13564_13590[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13555 === (11))){
var inst_13545 = cljs.core.async.close_BANG_.call(null,ch);
var state_13554__$1 = state_13554;
var statearr_13565_13591 = state_13554__$1;
(statearr_13565_13591[(2)] = inst_13545);

(statearr_13565_13591[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13555 === (9))){
var state_13554__$1 = state_13554;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13566_13592 = state_13554__$1;
(statearr_13566_13592[(1)] = (11));

} else {
var statearr_13567_13593 = state_13554__$1;
(statearr_13567_13593[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13555 === (5))){
var inst_13531 = (state_13554[(7)]);
var state_13554__$1 = state_13554;
var statearr_13568_13594 = state_13554__$1;
(statearr_13568_13594[(2)] = inst_13531);

(statearr_13568_13594[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13555 === (10))){
var inst_13550 = (state_13554[(2)]);
var state_13554__$1 = state_13554;
var statearr_13569_13595 = state_13554__$1;
(statearr_13569_13595[(2)] = inst_13550);

(statearr_13569_13595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13555 === (8))){
var inst_13531 = (state_13554[(7)]);
var inst_13541 = cljs.core.next.call(null,inst_13531);
var inst_13531__$1 = inst_13541;
var state_13554__$1 = (function (){var statearr_13570 = state_13554;
(statearr_13570[(7)] = inst_13531__$1);

return statearr_13570;
})();
var statearr_13571_13596 = state_13554__$1;
(statearr_13571_13596[(2)] = null);

(statearr_13571_13596[(1)] = (2));


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
});})(c__10504__auto__))
;
return ((function (switch__10439__auto__,c__10504__auto__){
return (function() {
var cljs$core$async$state_machine__10440__auto__ = null;
var cljs$core$async$state_machine__10440__auto____0 = (function (){
var statearr_13575 = [null,null,null,null,null,null,null,null];
(statearr_13575[(0)] = cljs$core$async$state_machine__10440__auto__);

(statearr_13575[(1)] = (1));

return statearr_13575;
});
var cljs$core$async$state_machine__10440__auto____1 = (function (state_13554){
while(true){
var ret_value__10441__auto__ = (function (){try{while(true){
var result__10442__auto__ = switch__10439__auto__.call(null,state_13554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10442__auto__;
}
break;
}
}catch (e13576){if((e13576 instanceof Object)){
var ex__10443__auto__ = e13576;
var statearr_13577_13597 = state_13554;
(statearr_13577_13597[(5)] = ex__10443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10441__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13598 = state_13554;
state_13554 = G__13598;
continue;
} else {
return ret_value__10441__auto__;
}
break;
}
});
cljs$core$async$state_machine__10440__auto__ = function(state_13554){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10440__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10440__auto____1.call(this,state_13554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10440__auto____0;
cljs$core$async$state_machine__10440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10440__auto____1;
return cljs$core$async$state_machine__10440__auto__;
})()
;})(switch__10439__auto__,c__10504__auto__))
})();
var state__10506__auto__ = (function (){var statearr_13578 = f__10505__auto__.call(null);
(statearr_13578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10504__auto__);

return statearr_13578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10506__auto__);
});})(c__10504__auto__))
);

return c__10504__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async13820 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13820 = (function (mult,ch,cs,meta13821){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta13821 = meta13821;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13820.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13822,meta13821__$1){
var self__ = this;
var _13822__$1 = this;
return (new cljs.core.async.t_cljs$core$async13820(self__.mult,self__.ch,self__.cs,meta13821__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async13820.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13822){
var self__ = this;
var _13822__$1 = this;
return self__.meta13821;
});})(cs))
;

cljs.core.async.t_cljs$core$async13820.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async13820.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async13820.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async13820.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13820.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13820.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13820.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta13821","meta13821",1137948813,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async13820.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13820.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13820";

cljs.core.async.t_cljs$core$async13820.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8696__auto__,writer__8697__auto__,opt__8698__auto__){
return cljs.core._write.call(null,writer__8697__auto__,"cljs.core.async/t_cljs$core$async13820");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async13820 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async13820(mult__$1,ch__$1,cs__$1,meta13821){
return (new cljs.core.async.t_cljs$core$async13820(mult__$1,ch__$1,cs__$1,meta13821));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async13820(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10504__auto___14041 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10504__auto___14041,cs,m,dchan,dctr,done){
return (function (){
var f__10505__auto__ = (function (){var switch__10439__auto__ = ((function (c__10504__auto___14041,cs,m,dchan,dctr,done){
return (function (state_13953){
var state_val_13954 = (state_13953[(1)]);
if((state_val_13954 === (7))){
var inst_13949 = (state_13953[(2)]);
var state_13953__$1 = state_13953;
var statearr_13955_14042 = state_13953__$1;
(statearr_13955_14042[(2)] = inst_13949);

(statearr_13955_14042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (20))){
var inst_13854 = (state_13953[(7)]);
var inst_13864 = cljs.core.first.call(null,inst_13854);
var inst_13865 = cljs.core.nth.call(null,inst_13864,(0),null);
var inst_13866 = cljs.core.nth.call(null,inst_13864,(1),null);
var state_13953__$1 = (function (){var statearr_13956 = state_13953;
(statearr_13956[(8)] = inst_13865);

return statearr_13956;
})();
if(cljs.core.truth_(inst_13866)){
var statearr_13957_14043 = state_13953__$1;
(statearr_13957_14043[(1)] = (22));

} else {
var statearr_13958_14044 = state_13953__$1;
(statearr_13958_14044[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (27))){
var inst_13825 = (state_13953[(9)]);
var inst_13901 = (state_13953[(10)]);
var inst_13896 = (state_13953[(11)]);
var inst_13894 = (state_13953[(12)]);
var inst_13901__$1 = cljs.core._nth.call(null,inst_13894,inst_13896);
var inst_13902 = cljs.core.async.put_BANG_.call(null,inst_13901__$1,inst_13825,done);
var state_13953__$1 = (function (){var statearr_13959 = state_13953;
(statearr_13959[(10)] = inst_13901__$1);

return statearr_13959;
})();
if(cljs.core.truth_(inst_13902)){
var statearr_13960_14045 = state_13953__$1;
(statearr_13960_14045[(1)] = (30));

} else {
var statearr_13961_14046 = state_13953__$1;
(statearr_13961_14046[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (1))){
var state_13953__$1 = state_13953;
var statearr_13962_14047 = state_13953__$1;
(statearr_13962_14047[(2)] = null);

(statearr_13962_14047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (24))){
var inst_13854 = (state_13953[(7)]);
var inst_13871 = (state_13953[(2)]);
var inst_13872 = cljs.core.next.call(null,inst_13854);
var inst_13834 = inst_13872;
var inst_13835 = null;
var inst_13836 = (0);
var inst_13837 = (0);
var state_13953__$1 = (function (){var statearr_13963 = state_13953;
(statearr_13963[(13)] = inst_13837);

(statearr_13963[(14)] = inst_13834);

(statearr_13963[(15)] = inst_13836);

(statearr_13963[(16)] = inst_13835);

(statearr_13963[(17)] = inst_13871);

return statearr_13963;
})();
var statearr_13964_14048 = state_13953__$1;
(statearr_13964_14048[(2)] = null);

(statearr_13964_14048[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (39))){
var state_13953__$1 = state_13953;
var statearr_13968_14049 = state_13953__$1;
(statearr_13968_14049[(2)] = null);

(statearr_13968_14049[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (4))){
var inst_13825 = (state_13953[(9)]);
var inst_13825__$1 = (state_13953[(2)]);
var inst_13826 = (inst_13825__$1 == null);
var state_13953__$1 = (function (){var statearr_13969 = state_13953;
(statearr_13969[(9)] = inst_13825__$1);

return statearr_13969;
})();
if(cljs.core.truth_(inst_13826)){
var statearr_13970_14050 = state_13953__$1;
(statearr_13970_14050[(1)] = (5));

} else {
var statearr_13971_14051 = state_13953__$1;
(statearr_13971_14051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (15))){
var inst_13837 = (state_13953[(13)]);
var inst_13834 = (state_13953[(14)]);
var inst_13836 = (state_13953[(15)]);
var inst_13835 = (state_13953[(16)]);
var inst_13850 = (state_13953[(2)]);
var inst_13851 = (inst_13837 + (1));
var tmp13965 = inst_13834;
var tmp13966 = inst_13836;
var tmp13967 = inst_13835;
var inst_13834__$1 = tmp13965;
var inst_13835__$1 = tmp13967;
var inst_13836__$1 = tmp13966;
var inst_13837__$1 = inst_13851;
var state_13953__$1 = (function (){var statearr_13972 = state_13953;
(statearr_13972[(18)] = inst_13850);

(statearr_13972[(13)] = inst_13837__$1);

(statearr_13972[(14)] = inst_13834__$1);

(statearr_13972[(15)] = inst_13836__$1);

(statearr_13972[(16)] = inst_13835__$1);

return statearr_13972;
})();
var statearr_13973_14052 = state_13953__$1;
(statearr_13973_14052[(2)] = null);

(statearr_13973_14052[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (21))){
var inst_13875 = (state_13953[(2)]);
var state_13953__$1 = state_13953;
var statearr_13977_14053 = state_13953__$1;
(statearr_13977_14053[(2)] = inst_13875);

(statearr_13977_14053[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (31))){
var inst_13901 = (state_13953[(10)]);
var inst_13905 = done.call(null,null);
var inst_13906 = cljs.core.async.untap_STAR_.call(null,m,inst_13901);
var state_13953__$1 = (function (){var statearr_13978 = state_13953;
(statearr_13978[(19)] = inst_13905);

return statearr_13978;
})();
var statearr_13979_14054 = state_13953__$1;
(statearr_13979_14054[(2)] = inst_13906);

(statearr_13979_14054[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (32))){
var inst_13896 = (state_13953[(11)]);
var inst_13893 = (state_13953[(20)]);
var inst_13895 = (state_13953[(21)]);
var inst_13894 = (state_13953[(12)]);
var inst_13908 = (state_13953[(2)]);
var inst_13909 = (inst_13896 + (1));
var tmp13974 = inst_13893;
var tmp13975 = inst_13895;
var tmp13976 = inst_13894;
var inst_13893__$1 = tmp13974;
var inst_13894__$1 = tmp13976;
var inst_13895__$1 = tmp13975;
var inst_13896__$1 = inst_13909;
var state_13953__$1 = (function (){var statearr_13980 = state_13953;
(statearr_13980[(11)] = inst_13896__$1);

(statearr_13980[(22)] = inst_13908);

(statearr_13980[(20)] = inst_13893__$1);

(statearr_13980[(21)] = inst_13895__$1);

(statearr_13980[(12)] = inst_13894__$1);

return statearr_13980;
})();
var statearr_13981_14055 = state_13953__$1;
(statearr_13981_14055[(2)] = null);

(statearr_13981_14055[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (40))){
var inst_13921 = (state_13953[(23)]);
var inst_13925 = done.call(null,null);
var inst_13926 = cljs.core.async.untap_STAR_.call(null,m,inst_13921);
var state_13953__$1 = (function (){var statearr_13982 = state_13953;
(statearr_13982[(24)] = inst_13925);

return statearr_13982;
})();
var statearr_13983_14056 = state_13953__$1;
(statearr_13983_14056[(2)] = inst_13926);

(statearr_13983_14056[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (33))){
var inst_13912 = (state_13953[(25)]);
var inst_13914 = cljs.core.chunked_seq_QMARK_.call(null,inst_13912);
var state_13953__$1 = state_13953;
if(inst_13914){
var statearr_13984_14057 = state_13953__$1;
(statearr_13984_14057[(1)] = (36));

} else {
var statearr_13985_14058 = state_13953__$1;
(statearr_13985_14058[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (13))){
var inst_13844 = (state_13953[(26)]);
var inst_13847 = cljs.core.async.close_BANG_.call(null,inst_13844);
var state_13953__$1 = state_13953;
var statearr_13986_14059 = state_13953__$1;
(statearr_13986_14059[(2)] = inst_13847);

(statearr_13986_14059[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (22))){
var inst_13865 = (state_13953[(8)]);
var inst_13868 = cljs.core.async.close_BANG_.call(null,inst_13865);
var state_13953__$1 = state_13953;
var statearr_13987_14060 = state_13953__$1;
(statearr_13987_14060[(2)] = inst_13868);

(statearr_13987_14060[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (36))){
var inst_13912 = (state_13953[(25)]);
var inst_13916 = cljs.core.chunk_first.call(null,inst_13912);
var inst_13917 = cljs.core.chunk_rest.call(null,inst_13912);
var inst_13918 = cljs.core.count.call(null,inst_13916);
var inst_13893 = inst_13917;
var inst_13894 = inst_13916;
var inst_13895 = inst_13918;
var inst_13896 = (0);
var state_13953__$1 = (function (){var statearr_13988 = state_13953;
(statearr_13988[(11)] = inst_13896);

(statearr_13988[(20)] = inst_13893);

(statearr_13988[(21)] = inst_13895);

(statearr_13988[(12)] = inst_13894);

return statearr_13988;
})();
var statearr_13989_14061 = state_13953__$1;
(statearr_13989_14061[(2)] = null);

(statearr_13989_14061[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (41))){
var inst_13912 = (state_13953[(25)]);
var inst_13928 = (state_13953[(2)]);
var inst_13929 = cljs.core.next.call(null,inst_13912);
var inst_13893 = inst_13929;
var inst_13894 = null;
var inst_13895 = (0);
var inst_13896 = (0);
var state_13953__$1 = (function (){var statearr_13990 = state_13953;
(statearr_13990[(11)] = inst_13896);

(statearr_13990[(27)] = inst_13928);

(statearr_13990[(20)] = inst_13893);

(statearr_13990[(21)] = inst_13895);

(statearr_13990[(12)] = inst_13894);

return statearr_13990;
})();
var statearr_13991_14062 = state_13953__$1;
(statearr_13991_14062[(2)] = null);

(statearr_13991_14062[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (43))){
var state_13953__$1 = state_13953;
var statearr_13992_14063 = state_13953__$1;
(statearr_13992_14063[(2)] = null);

(statearr_13992_14063[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (29))){
var inst_13937 = (state_13953[(2)]);
var state_13953__$1 = state_13953;
var statearr_13993_14064 = state_13953__$1;
(statearr_13993_14064[(2)] = inst_13937);

(statearr_13993_14064[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (44))){
var inst_13946 = (state_13953[(2)]);
var state_13953__$1 = (function (){var statearr_13994 = state_13953;
(statearr_13994[(28)] = inst_13946);

return statearr_13994;
})();
var statearr_13995_14065 = state_13953__$1;
(statearr_13995_14065[(2)] = null);

(statearr_13995_14065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (6))){
var inst_13885 = (state_13953[(29)]);
var inst_13884 = cljs.core.deref.call(null,cs);
var inst_13885__$1 = cljs.core.keys.call(null,inst_13884);
var inst_13886 = cljs.core.count.call(null,inst_13885__$1);
var inst_13887 = cljs.core.reset_BANG_.call(null,dctr,inst_13886);
var inst_13892 = cljs.core.seq.call(null,inst_13885__$1);
var inst_13893 = inst_13892;
var inst_13894 = null;
var inst_13895 = (0);
var inst_13896 = (0);
var state_13953__$1 = (function (){var statearr_13996 = state_13953;
(statearr_13996[(29)] = inst_13885__$1);

(statearr_13996[(30)] = inst_13887);

(statearr_13996[(11)] = inst_13896);

(statearr_13996[(20)] = inst_13893);

(statearr_13996[(21)] = inst_13895);

(statearr_13996[(12)] = inst_13894);

return statearr_13996;
})();
var statearr_13997_14066 = state_13953__$1;
(statearr_13997_14066[(2)] = null);

(statearr_13997_14066[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (28))){
var inst_13893 = (state_13953[(20)]);
var inst_13912 = (state_13953[(25)]);
var inst_13912__$1 = cljs.core.seq.call(null,inst_13893);
var state_13953__$1 = (function (){var statearr_13998 = state_13953;
(statearr_13998[(25)] = inst_13912__$1);

return statearr_13998;
})();
if(inst_13912__$1){
var statearr_13999_14067 = state_13953__$1;
(statearr_13999_14067[(1)] = (33));

} else {
var statearr_14000_14068 = state_13953__$1;
(statearr_14000_14068[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (25))){
var inst_13896 = (state_13953[(11)]);
var inst_13895 = (state_13953[(21)]);
var inst_13898 = (inst_13896 < inst_13895);
var inst_13899 = inst_13898;
var state_13953__$1 = state_13953;
if(cljs.core.truth_(inst_13899)){
var statearr_14001_14069 = state_13953__$1;
(statearr_14001_14069[(1)] = (27));

} else {
var statearr_14002_14070 = state_13953__$1;
(statearr_14002_14070[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (34))){
var state_13953__$1 = state_13953;
var statearr_14003_14071 = state_13953__$1;
(statearr_14003_14071[(2)] = null);

(statearr_14003_14071[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (17))){
var state_13953__$1 = state_13953;
var statearr_14004_14072 = state_13953__$1;
(statearr_14004_14072[(2)] = null);

(statearr_14004_14072[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (3))){
var inst_13951 = (state_13953[(2)]);
var state_13953__$1 = state_13953;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13953__$1,inst_13951);
} else {
if((state_val_13954 === (12))){
var inst_13880 = (state_13953[(2)]);
var state_13953__$1 = state_13953;
var statearr_14005_14073 = state_13953__$1;
(statearr_14005_14073[(2)] = inst_13880);

(statearr_14005_14073[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (2))){
var state_13953__$1 = state_13953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13953__$1,(4),ch);
} else {
if((state_val_13954 === (23))){
var state_13953__$1 = state_13953;
var statearr_14006_14074 = state_13953__$1;
(statearr_14006_14074[(2)] = null);

(statearr_14006_14074[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (35))){
var inst_13935 = (state_13953[(2)]);
var state_13953__$1 = state_13953;
var statearr_14007_14075 = state_13953__$1;
(statearr_14007_14075[(2)] = inst_13935);

(statearr_14007_14075[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (19))){
var inst_13854 = (state_13953[(7)]);
var inst_13858 = cljs.core.chunk_first.call(null,inst_13854);
var inst_13859 = cljs.core.chunk_rest.call(null,inst_13854);
var inst_13860 = cljs.core.count.call(null,inst_13858);
var inst_13834 = inst_13859;
var inst_13835 = inst_13858;
var inst_13836 = inst_13860;
var inst_13837 = (0);
var state_13953__$1 = (function (){var statearr_14008 = state_13953;
(statearr_14008[(13)] = inst_13837);

(statearr_14008[(14)] = inst_13834);

(statearr_14008[(15)] = inst_13836);

(statearr_14008[(16)] = inst_13835);

return statearr_14008;
})();
var statearr_14009_14076 = state_13953__$1;
(statearr_14009_14076[(2)] = null);

(statearr_14009_14076[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (11))){
var inst_13834 = (state_13953[(14)]);
var inst_13854 = (state_13953[(7)]);
var inst_13854__$1 = cljs.core.seq.call(null,inst_13834);
var state_13953__$1 = (function (){var statearr_14010 = state_13953;
(statearr_14010[(7)] = inst_13854__$1);

return statearr_14010;
})();
if(inst_13854__$1){
var statearr_14011_14077 = state_13953__$1;
(statearr_14011_14077[(1)] = (16));

} else {
var statearr_14012_14078 = state_13953__$1;
(statearr_14012_14078[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (9))){
var inst_13882 = (state_13953[(2)]);
var state_13953__$1 = state_13953;
var statearr_14013_14079 = state_13953__$1;
(statearr_14013_14079[(2)] = inst_13882);

(statearr_14013_14079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (5))){
var inst_13832 = cljs.core.deref.call(null,cs);
var inst_13833 = cljs.core.seq.call(null,inst_13832);
var inst_13834 = inst_13833;
var inst_13835 = null;
var inst_13836 = (0);
var inst_13837 = (0);
var state_13953__$1 = (function (){var statearr_14014 = state_13953;
(statearr_14014[(13)] = inst_13837);

(statearr_14014[(14)] = inst_13834);

(statearr_14014[(15)] = inst_13836);

(statearr_14014[(16)] = inst_13835);

return statearr_14014;
})();
var statearr_14015_14080 = state_13953__$1;
(statearr_14015_14080[(2)] = null);

(statearr_14015_14080[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (14))){
var state_13953__$1 = state_13953;
var statearr_14016_14081 = state_13953__$1;
(statearr_14016_14081[(2)] = null);

(statearr_14016_14081[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (45))){
var inst_13943 = (state_13953[(2)]);
var state_13953__$1 = state_13953;
var statearr_14017_14082 = state_13953__$1;
(statearr_14017_14082[(2)] = inst_13943);

(statearr_14017_14082[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (26))){
var inst_13885 = (state_13953[(29)]);
var inst_13939 = (state_13953[(2)]);
var inst_13940 = cljs.core.seq.call(null,inst_13885);
var state_13953__$1 = (function (){var statearr_14018 = state_13953;
(statearr_14018[(31)] = inst_13939);

return statearr_14018;
})();
if(inst_13940){
var statearr_14019_14083 = state_13953__$1;
(statearr_14019_14083[(1)] = (42));

} else {
var statearr_14020_14084 = state_13953__$1;
(statearr_14020_14084[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (16))){
var inst_13854 = (state_13953[(7)]);
var inst_13856 = cljs.core.chunked_seq_QMARK_.call(null,inst_13854);
var state_13953__$1 = state_13953;
if(inst_13856){
var statearr_14021_14085 = state_13953__$1;
(statearr_14021_14085[(1)] = (19));

} else {
var statearr_14022_14086 = state_13953__$1;
(statearr_14022_14086[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (38))){
var inst_13932 = (state_13953[(2)]);
var state_13953__$1 = state_13953;
var statearr_14023_14087 = state_13953__$1;
(statearr_14023_14087[(2)] = inst_13932);

(statearr_14023_14087[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (30))){
var state_13953__$1 = state_13953;
var statearr_14024_14088 = state_13953__$1;
(statearr_14024_14088[(2)] = null);

(statearr_14024_14088[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (10))){
var inst_13837 = (state_13953[(13)]);
var inst_13835 = (state_13953[(16)]);
var inst_13843 = cljs.core._nth.call(null,inst_13835,inst_13837);
var inst_13844 = cljs.core.nth.call(null,inst_13843,(0),null);
var inst_13845 = cljs.core.nth.call(null,inst_13843,(1),null);
var state_13953__$1 = (function (){var statearr_14025 = state_13953;
(statearr_14025[(26)] = inst_13844);

return statearr_14025;
})();
if(cljs.core.truth_(inst_13845)){
var statearr_14026_14089 = state_13953__$1;
(statearr_14026_14089[(1)] = (13));

} else {
var statearr_14027_14090 = state_13953__$1;
(statearr_14027_14090[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (18))){
var inst_13878 = (state_13953[(2)]);
var state_13953__$1 = state_13953;
var statearr_14028_14091 = state_13953__$1;
(statearr_14028_14091[(2)] = inst_13878);

(statearr_14028_14091[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (42))){
var state_13953__$1 = state_13953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13953__$1,(45),dchan);
} else {
if((state_val_13954 === (37))){
var inst_13825 = (state_13953[(9)]);
var inst_13921 = (state_13953[(23)]);
var inst_13912 = (state_13953[(25)]);
var inst_13921__$1 = cljs.core.first.call(null,inst_13912);
var inst_13922 = cljs.core.async.put_BANG_.call(null,inst_13921__$1,inst_13825,done);
var state_13953__$1 = (function (){var statearr_14029 = state_13953;
(statearr_14029[(23)] = inst_13921__$1);

return statearr_14029;
})();
if(cljs.core.truth_(inst_13922)){
var statearr_14030_14092 = state_13953__$1;
(statearr_14030_14092[(1)] = (39));

} else {
var statearr_14031_14093 = state_13953__$1;
(statearr_14031_14093[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (8))){
var inst_13837 = (state_13953[(13)]);
var inst_13836 = (state_13953[(15)]);
var inst_13839 = (inst_13837 < inst_13836);
var inst_13840 = inst_13839;
var state_13953__$1 = state_13953;
if(cljs.core.truth_(inst_13840)){
var statearr_14032_14094 = state_13953__$1;
(statearr_14032_14094[(1)] = (10));

} else {
var statearr_14033_14095 = state_13953__$1;
(statearr_14033_14095[(1)] = (11));

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
});})(c__10504__auto___14041,cs,m,dchan,dctr,done))
;
return ((function (switch__10439__auto__,c__10504__auto___14041,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10440__auto__ = null;
var cljs$core$async$mult_$_state_machine__10440__auto____0 = (function (){
var statearr_14037 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14037[(0)] = cljs$core$async$mult_$_state_machine__10440__auto__);

(statearr_14037[(1)] = (1));

return statearr_14037;
});
var cljs$core$async$mult_$_state_machine__10440__auto____1 = (function (state_13953){
while(true){
var ret_value__10441__auto__ = (function (){try{while(true){
var result__10442__auto__ = switch__10439__auto__.call(null,state_13953);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10442__auto__;
}
break;
}
}catch (e14038){if((e14038 instanceof Object)){
var ex__10443__auto__ = e14038;
var statearr_14039_14096 = state_13953;
(statearr_14039_14096[(5)] = ex__10443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10441__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14097 = state_13953;
state_13953 = G__14097;
continue;
} else {
return ret_value__10441__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10440__auto__ = function(state_13953){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10440__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10440__auto____1.call(this,state_13953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10440__auto____0;
cljs$core$async$mult_$_state_machine__10440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10440__auto____1;
return cljs$core$async$mult_$_state_machine__10440__auto__;
})()
;})(switch__10439__auto__,c__10504__auto___14041,cs,m,dchan,dctr,done))
})();
var state__10506__auto__ = (function (){var statearr_14040 = f__10505__auto__.call(null);
(statearr_14040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10504__auto___14041);

return statearr_14040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10506__auto__);
});})(c__10504__auto___14041,cs,m,dchan,dctr,done))
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
var args14098 = [];
var len__9156__auto___14101 = arguments.length;
var i__9157__auto___14102 = (0);
while(true){
if((i__9157__auto___14102 < len__9156__auto___14101)){
args14098.push((arguments[i__9157__auto___14102]));

var G__14103 = (i__9157__auto___14102 + (1));
i__9157__auto___14102 = G__14103;
continue;
} else {
}
break;
}

var G__14100 = args14098.length;
switch (G__14100) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14098.length)].join('')));

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
var len__9156__auto___14115 = arguments.length;
var i__9157__auto___14116 = (0);
while(true){
if((i__9157__auto___14116 < len__9156__auto___14115)){
args__9163__auto__.push((arguments[i__9157__auto___14116]));

var G__14117 = (i__9157__auto___14116 + (1));
i__9157__auto___14116 = G__14117;
continue;
} else {
}
break;
}

var argseq__9164__auto__ = ((((3) < args__9163__auto__.length))?(new cljs.core.IndexedSeq(args__9163__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9164__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14109){
var map__14110 = p__14109;
var map__14110__$1 = ((((!((map__14110 == null)))?((((map__14110.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14110.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14110):map__14110);
var opts = map__14110__$1;
var statearr_14112_14118 = state;
(statearr_14112_14118[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__14110,map__14110__$1,opts){
return (function (val){
var statearr_14113_14119 = state;
(statearr_14113_14119[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__14110,map__14110__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_14114_14120 = state;
(statearr_14114_14120[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14105){
var G__14106 = cljs.core.first.call(null,seq14105);
var seq14105__$1 = cljs.core.next.call(null,seq14105);
var G__14107 = cljs.core.first.call(null,seq14105__$1);
var seq14105__$2 = cljs.core.next.call(null,seq14105__$1);
var G__14108 = cljs.core.first.call(null,seq14105__$2);
var seq14105__$3 = cljs.core.next.call(null,seq14105__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14106,G__14107,G__14108,seq14105__$3);
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
if(typeof cljs.core.async.t_cljs$core$async14284 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14284 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14285){
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
this.meta14285 = meta14285;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14286,meta14285__$1){
var self__ = this;
var _14286__$1 = this;
return (new cljs.core.async.t_cljs$core$async14284(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14285__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14284.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14286){
var self__ = this;
var _14286__$1 = this;
return self__.meta14285;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14284.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14284.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14284.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async14284.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14284.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14284.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14284.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14284.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async14284.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta14285","meta14285",-1536298262,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14284.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14284.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14284";

cljs.core.async.t_cljs$core$async14284.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8696__auto__,writer__8697__auto__,opt__8698__auto__){
return cljs.core._write.call(null,writer__8697__auto__,"cljs.core.async/t_cljs$core$async14284");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async14284 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async14284(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14285){
return (new cljs.core.async.t_cljs$core$async14284(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14285));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async14284(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10504__auto___14447 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10504__auto___14447,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10505__auto__ = (function (){var switch__10439__auto__ = ((function (c__10504__auto___14447,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14384){
var state_val_14385 = (state_14384[(1)]);
if((state_val_14385 === (7))){
var inst_14302 = (state_14384[(2)]);
var state_14384__$1 = state_14384;
var statearr_14386_14448 = state_14384__$1;
(statearr_14386_14448[(2)] = inst_14302);

(statearr_14386_14448[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14385 === (20))){
var inst_14314 = (state_14384[(7)]);
var state_14384__$1 = state_14384;
var statearr_14387_14449 = state_14384__$1;
(statearr_14387_14449[(2)] = inst_14314);

(statearr_14387_14449[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14385 === (27))){
var state_14384__$1 = state_14384;
var statearr_14388_14450 = state_14384__$1;
(statearr_14388_14450[(2)] = null);

(statearr_14388_14450[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14385 === (1))){
var inst_14290 = (state_14384[(8)]);
var inst_14290__$1 = calc_state.call(null);
var inst_14292 = (inst_14290__$1 == null);
var inst_14293 = cljs.core.not.call(null,inst_14292);
var state_14384__$1 = (function (){var statearr_14389 = state_14384;
(statearr_14389[(8)] = inst_14290__$1);

return statearr_14389;
})();
if(inst_14293){
var statearr_14390_14451 = state_14384__$1;
(statearr_14390_14451[(1)] = (2));

} else {
var statearr_14391_14452 = state_14384__$1;
(statearr_14391_14452[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14385 === (24))){
var inst_14337 = (state_14384[(9)]);
var inst_14344 = (state_14384[(10)]);
var inst_14358 = (state_14384[(11)]);
var inst_14358__$1 = inst_14337.call(null,inst_14344);
var state_14384__$1 = (function (){var statearr_14392 = state_14384;
(statearr_14392[(11)] = inst_14358__$1);

return statearr_14392;
})();
if(cljs.core.truth_(inst_14358__$1)){
var statearr_14393_14453 = state_14384__$1;
(statearr_14393_14453[(1)] = (29));

} else {
var statearr_14394_14454 = state_14384__$1;
(statearr_14394_14454[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14385 === (4))){
var inst_14305 = (state_14384[(2)]);
var state_14384__$1 = state_14384;
if(cljs.core.truth_(inst_14305)){
var statearr_14395_14455 = state_14384__$1;
(statearr_14395_14455[(1)] = (8));

} else {
var statearr_14396_14456 = state_14384__$1;
(statearr_14396_14456[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14385 === (15))){
var inst_14331 = (state_14384[(2)]);
var state_14384__$1 = state_14384;
if(cljs.core.truth_(inst_14331)){
var statearr_14397_14457 = state_14384__$1;
(statearr_14397_14457[(1)] = (19));

} else {
var statearr_14398_14458 = state_14384__$1;
(statearr_14398_14458[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14385 === (21))){
var inst_14336 = (state_14384[(12)]);
var inst_14336__$1 = (state_14384[(2)]);
var inst_14337 = cljs.core.get.call(null,inst_14336__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14338 = cljs.core.get.call(null,inst_14336__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14339 = cljs.core.get.call(null,inst_14336__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_14384__$1 = (function (){var statearr_14399 = state_14384;
(statearr_14399[(12)] = inst_14336__$1);

(statearr_14399[(9)] = inst_14337);

(statearr_14399[(13)] = inst_14338);

return statearr_14399;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_14384__$1,(22),inst_14339);
} else {
if((state_val_14385 === (31))){
var inst_14366 = (state_14384[(2)]);
var state_14384__$1 = state_14384;
if(cljs.core.truth_(inst_14366)){
var statearr_14400_14459 = state_14384__$1;
(statearr_14400_14459[(1)] = (32));

} else {
var statearr_14401_14460 = state_14384__$1;
(statearr_14401_14460[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14385 === (32))){
var inst_14343 = (state_14384[(14)]);
var state_14384__$1 = state_14384;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14384__$1,(35),out,inst_14343);
} else {
if((state_val_14385 === (33))){
var inst_14336 = (state_14384[(12)]);
var inst_14314 = inst_14336;
var state_14384__$1 = (function (){var statearr_14402 = state_14384;
(statearr_14402[(7)] = inst_14314);

return statearr_14402;
})();
var statearr_14403_14461 = state_14384__$1;
(statearr_14403_14461[(2)] = null);

(statearr_14403_14461[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14385 === (13))){
var inst_14314 = (state_14384[(7)]);
var inst_14321 = inst_14314.cljs$lang$protocol_mask$partition0$;
var inst_14322 = (inst_14321 & (64));
var inst_14323 = inst_14314.cljs$core$ISeq$;
var inst_14324 = (inst_14322) || (inst_14323);
var state_14384__$1 = state_14384;
if(cljs.core.truth_(inst_14324)){
var statearr_14404_14462 = state_14384__$1;
(statearr_14404_14462[(1)] = (16));

} else {
var statearr_14405_14463 = state_14384__$1;
(statearr_14405_14463[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14385 === (22))){
var inst_14343 = (state_14384[(14)]);
var inst_14344 = (state_14384[(10)]);
var inst_14342 = (state_14384[(2)]);
var inst_14343__$1 = cljs.core.nth.call(null,inst_14342,(0),null);
var inst_14344__$1 = cljs.core.nth.call(null,inst_14342,(1),null);
var inst_14345 = (inst_14343__$1 == null);
var inst_14346 = cljs.core._EQ_.call(null,inst_14344__$1,change);
var inst_14347 = (inst_14345) || (inst_14346);
var state_14384__$1 = (function (){var statearr_14406 = state_14384;
(statearr_14406[(14)] = inst_14343__$1);

(statearr_14406[(10)] = inst_14344__$1);

return statearr_14406;
})();
if(cljs.core.truth_(inst_14347)){
var statearr_14407_14464 = state_14384__$1;
(statearr_14407_14464[(1)] = (23));

} else {
var statearr_14408_14465 = state_14384__$1;
(statearr_14408_14465[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14385 === (36))){
var inst_14336 = (state_14384[(12)]);
var inst_14314 = inst_14336;
var state_14384__$1 = (function (){var statearr_14409 = state_14384;
(statearr_14409[(7)] = inst_14314);

return statearr_14409;
})();
var statearr_14410_14466 = state_14384__$1;
(statearr_14410_14466[(2)] = null);

(statearr_14410_14466[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14385 === (29))){
var inst_14358 = (state_14384[(11)]);
var state_14384__$1 = state_14384;
var statearr_14411_14467 = state_14384__$1;
(statearr_14411_14467[(2)] = inst_14358);

(statearr_14411_14467[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14385 === (6))){
var state_14384__$1 = state_14384;
var statearr_14412_14468 = state_14384__$1;
(statearr_14412_14468[(2)] = false);

(statearr_14412_14468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14385 === (28))){
var inst_14354 = (state_14384[(2)]);
var inst_14355 = calc_state.call(null);
var inst_14314 = inst_14355;
var state_14384__$1 = (function (){var statearr_14413 = state_14384;
(statearr_14413[(7)] = inst_14314);

(statearr_14413[(15)] = inst_14354);

return statearr_14413;
})();
var statearr_14414_14469 = state_14384__$1;
(statearr_14414_14469[(2)] = null);

(statearr_14414_14469[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14385 === (25))){
var inst_14380 = (state_14384[(2)]);
var state_14384__$1 = state_14384;
var statearr_14415_14470 = state_14384__$1;
(statearr_14415_14470[(2)] = inst_14380);

(statearr_14415_14470[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14385 === (34))){
var inst_14378 = (state_14384[(2)]);
var state_14384__$1 = state_14384;
var statearr_14416_14471 = state_14384__$1;
(statearr_14416_14471[(2)] = inst_14378);

(statearr_14416_14471[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14385 === (17))){
var state_14384__$1 = state_14384;
var statearr_14417_14472 = state_14384__$1;
(statearr_14417_14472[(2)] = false);

(statearr_14417_14472[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14385 === (3))){
var state_14384__$1 = state_14384;
var statearr_14418_14473 = state_14384__$1;
(statearr_14418_14473[(2)] = false);

(statearr_14418_14473[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14385 === (12))){
var inst_14382 = (state_14384[(2)]);
var state_14384__$1 = state_14384;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14384__$1,inst_14382);
} else {
if((state_val_14385 === (2))){
var inst_14290 = (state_14384[(8)]);
var inst_14295 = inst_14290.cljs$lang$protocol_mask$partition0$;
var inst_14296 = (inst_14295 & (64));
var inst_14297 = inst_14290.cljs$core$ISeq$;
var inst_14298 = (inst_14296) || (inst_14297);
var state_14384__$1 = state_14384;
if(cljs.core.truth_(inst_14298)){
var statearr_14419_14474 = state_14384__$1;
(statearr_14419_14474[(1)] = (5));

} else {
var statearr_14420_14475 = state_14384__$1;
(statearr_14420_14475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14385 === (23))){
var inst_14343 = (state_14384[(14)]);
var inst_14349 = (inst_14343 == null);
var state_14384__$1 = state_14384;
if(cljs.core.truth_(inst_14349)){
var statearr_14421_14476 = state_14384__$1;
(statearr_14421_14476[(1)] = (26));

} else {
var statearr_14422_14477 = state_14384__$1;
(statearr_14422_14477[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14385 === (35))){
var inst_14369 = (state_14384[(2)]);
var state_14384__$1 = state_14384;
if(cljs.core.truth_(inst_14369)){
var statearr_14423_14478 = state_14384__$1;
(statearr_14423_14478[(1)] = (36));

} else {
var statearr_14424_14479 = state_14384__$1;
(statearr_14424_14479[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14385 === (19))){
var inst_14314 = (state_14384[(7)]);
var inst_14333 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14314);
var state_14384__$1 = state_14384;
var statearr_14425_14480 = state_14384__$1;
(statearr_14425_14480[(2)] = inst_14333);

(statearr_14425_14480[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14385 === (11))){
var inst_14314 = (state_14384[(7)]);
var inst_14318 = (inst_14314 == null);
var inst_14319 = cljs.core.not.call(null,inst_14318);
var state_14384__$1 = state_14384;
if(inst_14319){
var statearr_14426_14481 = state_14384__$1;
(statearr_14426_14481[(1)] = (13));

} else {
var statearr_14427_14482 = state_14384__$1;
(statearr_14427_14482[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14385 === (9))){
var inst_14290 = (state_14384[(8)]);
var state_14384__$1 = state_14384;
var statearr_14428_14483 = state_14384__$1;
(statearr_14428_14483[(2)] = inst_14290);

(statearr_14428_14483[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14385 === (5))){
var state_14384__$1 = state_14384;
var statearr_14429_14484 = state_14384__$1;
(statearr_14429_14484[(2)] = true);

(statearr_14429_14484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14385 === (14))){
var state_14384__$1 = state_14384;
var statearr_14430_14485 = state_14384__$1;
(statearr_14430_14485[(2)] = false);

(statearr_14430_14485[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14385 === (26))){
var inst_14344 = (state_14384[(10)]);
var inst_14351 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14344);
var state_14384__$1 = state_14384;
var statearr_14431_14486 = state_14384__$1;
(statearr_14431_14486[(2)] = inst_14351);

(statearr_14431_14486[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14385 === (16))){
var state_14384__$1 = state_14384;
var statearr_14432_14487 = state_14384__$1;
(statearr_14432_14487[(2)] = true);

(statearr_14432_14487[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14385 === (38))){
var inst_14374 = (state_14384[(2)]);
var state_14384__$1 = state_14384;
var statearr_14433_14488 = state_14384__$1;
(statearr_14433_14488[(2)] = inst_14374);

(statearr_14433_14488[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14385 === (30))){
var inst_14337 = (state_14384[(9)]);
var inst_14344 = (state_14384[(10)]);
var inst_14338 = (state_14384[(13)]);
var inst_14361 = cljs.core.empty_QMARK_.call(null,inst_14337);
var inst_14362 = inst_14338.call(null,inst_14344);
var inst_14363 = cljs.core.not.call(null,inst_14362);
var inst_14364 = (inst_14361) && (inst_14363);
var state_14384__$1 = state_14384;
var statearr_14434_14489 = state_14384__$1;
(statearr_14434_14489[(2)] = inst_14364);

(statearr_14434_14489[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14385 === (10))){
var inst_14290 = (state_14384[(8)]);
var inst_14310 = (state_14384[(2)]);
var inst_14311 = cljs.core.get.call(null,inst_14310,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14312 = cljs.core.get.call(null,inst_14310,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14313 = cljs.core.get.call(null,inst_14310,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14314 = inst_14290;
var state_14384__$1 = (function (){var statearr_14435 = state_14384;
(statearr_14435[(16)] = inst_14311);

(statearr_14435[(17)] = inst_14312);

(statearr_14435[(7)] = inst_14314);

(statearr_14435[(18)] = inst_14313);

return statearr_14435;
})();
var statearr_14436_14490 = state_14384__$1;
(statearr_14436_14490[(2)] = null);

(statearr_14436_14490[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14385 === (18))){
var inst_14328 = (state_14384[(2)]);
var state_14384__$1 = state_14384;
var statearr_14437_14491 = state_14384__$1;
(statearr_14437_14491[(2)] = inst_14328);

(statearr_14437_14491[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14385 === (37))){
var state_14384__$1 = state_14384;
var statearr_14438_14492 = state_14384__$1;
(statearr_14438_14492[(2)] = null);

(statearr_14438_14492[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14385 === (8))){
var inst_14290 = (state_14384[(8)]);
var inst_14307 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14290);
var state_14384__$1 = state_14384;
var statearr_14439_14493 = state_14384__$1;
(statearr_14439_14493[(2)] = inst_14307);

(statearr_14439_14493[(1)] = (10));


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
});})(c__10504__auto___14447,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10439__auto__,c__10504__auto___14447,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10440__auto__ = null;
var cljs$core$async$mix_$_state_machine__10440__auto____0 = (function (){
var statearr_14443 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14443[(0)] = cljs$core$async$mix_$_state_machine__10440__auto__);

(statearr_14443[(1)] = (1));

return statearr_14443;
});
var cljs$core$async$mix_$_state_machine__10440__auto____1 = (function (state_14384){
while(true){
var ret_value__10441__auto__ = (function (){try{while(true){
var result__10442__auto__ = switch__10439__auto__.call(null,state_14384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10442__auto__;
}
break;
}
}catch (e14444){if((e14444 instanceof Object)){
var ex__10443__auto__ = e14444;
var statearr_14445_14494 = state_14384;
(statearr_14445_14494[(5)] = ex__10443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14444;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10441__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14495 = state_14384;
state_14384 = G__14495;
continue;
} else {
return ret_value__10441__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10440__auto__ = function(state_14384){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10440__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10440__auto____1.call(this,state_14384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10440__auto____0;
cljs$core$async$mix_$_state_machine__10440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10440__auto____1;
return cljs$core$async$mix_$_state_machine__10440__auto__;
})()
;})(switch__10439__auto__,c__10504__auto___14447,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10506__auto__ = (function (){var statearr_14446 = f__10505__auto__.call(null);
(statearr_14446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10504__auto___14447);

return statearr_14446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10506__auto__);
});})(c__10504__auto___14447,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args14496 = [];
var len__9156__auto___14499 = arguments.length;
var i__9157__auto___14500 = (0);
while(true){
if((i__9157__auto___14500 < len__9156__auto___14499)){
args14496.push((arguments[i__9157__auto___14500]));

var G__14501 = (i__9157__auto___14500 + (1));
i__9157__auto___14500 = G__14501;
continue;
} else {
}
break;
}

var G__14498 = args14496.length;
switch (G__14498) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14496.length)].join('')));

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
var args14504 = [];
var len__9156__auto___14629 = arguments.length;
var i__9157__auto___14630 = (0);
while(true){
if((i__9157__auto___14630 < len__9156__auto___14629)){
args14504.push((arguments[i__9157__auto___14630]));

var G__14631 = (i__9157__auto___14630 + (1));
i__9157__auto___14630 = G__14631;
continue;
} else {
}
break;
}

var G__14506 = args14504.length;
switch (G__14506) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14504.length)].join('')));

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
return (function (p1__14503_SHARP_){
if(cljs.core.truth_(p1__14503_SHARP_.call(null,topic))){
return p1__14503_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__14503_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__8098__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async14507 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14507 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta14508){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta14508 = meta14508;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14509,meta14508__$1){
var self__ = this;
var _14509__$1 = this;
return (new cljs.core.async.t_cljs$core$async14507(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta14508__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14507.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14509){
var self__ = this;
var _14509__$1 = this;
return self__.meta14508;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14507.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14507.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14507.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async14507.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14507.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async14507.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14507.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14507.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta14508","meta14508",1612033621,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14507.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14507.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14507";

cljs.core.async.t_cljs$core$async14507.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8696__auto__,writer__8697__auto__,opt__8698__auto__){
return cljs.core._write.call(null,writer__8697__auto__,"cljs.core.async/t_cljs$core$async14507");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async14507 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async14507(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14508){
return (new cljs.core.async.t_cljs$core$async14507(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14508));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async14507(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10504__auto___14633 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10504__auto___14633,mults,ensure_mult,p){
return (function (){
var f__10505__auto__ = (function (){var switch__10439__auto__ = ((function (c__10504__auto___14633,mults,ensure_mult,p){
return (function (state_14581){
var state_val_14582 = (state_14581[(1)]);
if((state_val_14582 === (7))){
var inst_14577 = (state_14581[(2)]);
var state_14581__$1 = state_14581;
var statearr_14583_14634 = state_14581__$1;
(statearr_14583_14634[(2)] = inst_14577);

(statearr_14583_14634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14582 === (20))){
var state_14581__$1 = state_14581;
var statearr_14584_14635 = state_14581__$1;
(statearr_14584_14635[(2)] = null);

(statearr_14584_14635[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14582 === (1))){
var state_14581__$1 = state_14581;
var statearr_14585_14636 = state_14581__$1;
(statearr_14585_14636[(2)] = null);

(statearr_14585_14636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14582 === (24))){
var inst_14560 = (state_14581[(7)]);
var inst_14569 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14560);
var state_14581__$1 = state_14581;
var statearr_14586_14637 = state_14581__$1;
(statearr_14586_14637[(2)] = inst_14569);

(statearr_14586_14637[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14582 === (4))){
var inst_14512 = (state_14581[(8)]);
var inst_14512__$1 = (state_14581[(2)]);
var inst_14513 = (inst_14512__$1 == null);
var state_14581__$1 = (function (){var statearr_14587 = state_14581;
(statearr_14587[(8)] = inst_14512__$1);

return statearr_14587;
})();
if(cljs.core.truth_(inst_14513)){
var statearr_14588_14638 = state_14581__$1;
(statearr_14588_14638[(1)] = (5));

} else {
var statearr_14589_14639 = state_14581__$1;
(statearr_14589_14639[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14582 === (15))){
var inst_14554 = (state_14581[(2)]);
var state_14581__$1 = state_14581;
var statearr_14590_14640 = state_14581__$1;
(statearr_14590_14640[(2)] = inst_14554);

(statearr_14590_14640[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14582 === (21))){
var inst_14574 = (state_14581[(2)]);
var state_14581__$1 = (function (){var statearr_14591 = state_14581;
(statearr_14591[(9)] = inst_14574);

return statearr_14591;
})();
var statearr_14592_14641 = state_14581__$1;
(statearr_14592_14641[(2)] = null);

(statearr_14592_14641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14582 === (13))){
var inst_14536 = (state_14581[(10)]);
var inst_14538 = cljs.core.chunked_seq_QMARK_.call(null,inst_14536);
var state_14581__$1 = state_14581;
if(inst_14538){
var statearr_14593_14642 = state_14581__$1;
(statearr_14593_14642[(1)] = (16));

} else {
var statearr_14594_14643 = state_14581__$1;
(statearr_14594_14643[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14582 === (22))){
var inst_14566 = (state_14581[(2)]);
var state_14581__$1 = state_14581;
if(cljs.core.truth_(inst_14566)){
var statearr_14595_14644 = state_14581__$1;
(statearr_14595_14644[(1)] = (23));

} else {
var statearr_14596_14645 = state_14581__$1;
(statearr_14596_14645[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14582 === (6))){
var inst_14562 = (state_14581[(11)]);
var inst_14560 = (state_14581[(7)]);
var inst_14512 = (state_14581[(8)]);
var inst_14560__$1 = topic_fn.call(null,inst_14512);
var inst_14561 = cljs.core.deref.call(null,mults);
var inst_14562__$1 = cljs.core.get.call(null,inst_14561,inst_14560__$1);
var state_14581__$1 = (function (){var statearr_14597 = state_14581;
(statearr_14597[(11)] = inst_14562__$1);

(statearr_14597[(7)] = inst_14560__$1);

return statearr_14597;
})();
if(cljs.core.truth_(inst_14562__$1)){
var statearr_14598_14646 = state_14581__$1;
(statearr_14598_14646[(1)] = (19));

} else {
var statearr_14599_14647 = state_14581__$1;
(statearr_14599_14647[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14582 === (25))){
var inst_14571 = (state_14581[(2)]);
var state_14581__$1 = state_14581;
var statearr_14600_14648 = state_14581__$1;
(statearr_14600_14648[(2)] = inst_14571);

(statearr_14600_14648[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14582 === (17))){
var inst_14536 = (state_14581[(10)]);
var inst_14545 = cljs.core.first.call(null,inst_14536);
var inst_14546 = cljs.core.async.muxch_STAR_.call(null,inst_14545);
var inst_14547 = cljs.core.async.close_BANG_.call(null,inst_14546);
var inst_14548 = cljs.core.next.call(null,inst_14536);
var inst_14522 = inst_14548;
var inst_14523 = null;
var inst_14524 = (0);
var inst_14525 = (0);
var state_14581__$1 = (function (){var statearr_14601 = state_14581;
(statearr_14601[(12)] = inst_14525);

(statearr_14601[(13)] = inst_14524);

(statearr_14601[(14)] = inst_14522);

(statearr_14601[(15)] = inst_14523);

(statearr_14601[(16)] = inst_14547);

return statearr_14601;
})();
var statearr_14602_14649 = state_14581__$1;
(statearr_14602_14649[(2)] = null);

(statearr_14602_14649[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14582 === (3))){
var inst_14579 = (state_14581[(2)]);
var state_14581__$1 = state_14581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14581__$1,inst_14579);
} else {
if((state_val_14582 === (12))){
var inst_14556 = (state_14581[(2)]);
var state_14581__$1 = state_14581;
var statearr_14603_14650 = state_14581__$1;
(statearr_14603_14650[(2)] = inst_14556);

(statearr_14603_14650[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14582 === (2))){
var state_14581__$1 = state_14581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14581__$1,(4),ch);
} else {
if((state_val_14582 === (23))){
var state_14581__$1 = state_14581;
var statearr_14604_14651 = state_14581__$1;
(statearr_14604_14651[(2)] = null);

(statearr_14604_14651[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14582 === (19))){
var inst_14562 = (state_14581[(11)]);
var inst_14512 = (state_14581[(8)]);
var inst_14564 = cljs.core.async.muxch_STAR_.call(null,inst_14562);
var state_14581__$1 = state_14581;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14581__$1,(22),inst_14564,inst_14512);
} else {
if((state_val_14582 === (11))){
var inst_14522 = (state_14581[(14)]);
var inst_14536 = (state_14581[(10)]);
var inst_14536__$1 = cljs.core.seq.call(null,inst_14522);
var state_14581__$1 = (function (){var statearr_14605 = state_14581;
(statearr_14605[(10)] = inst_14536__$1);

return statearr_14605;
})();
if(inst_14536__$1){
var statearr_14606_14652 = state_14581__$1;
(statearr_14606_14652[(1)] = (13));

} else {
var statearr_14607_14653 = state_14581__$1;
(statearr_14607_14653[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14582 === (9))){
var inst_14558 = (state_14581[(2)]);
var state_14581__$1 = state_14581;
var statearr_14608_14654 = state_14581__$1;
(statearr_14608_14654[(2)] = inst_14558);

(statearr_14608_14654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14582 === (5))){
var inst_14519 = cljs.core.deref.call(null,mults);
var inst_14520 = cljs.core.vals.call(null,inst_14519);
var inst_14521 = cljs.core.seq.call(null,inst_14520);
var inst_14522 = inst_14521;
var inst_14523 = null;
var inst_14524 = (0);
var inst_14525 = (0);
var state_14581__$1 = (function (){var statearr_14609 = state_14581;
(statearr_14609[(12)] = inst_14525);

(statearr_14609[(13)] = inst_14524);

(statearr_14609[(14)] = inst_14522);

(statearr_14609[(15)] = inst_14523);

return statearr_14609;
})();
var statearr_14610_14655 = state_14581__$1;
(statearr_14610_14655[(2)] = null);

(statearr_14610_14655[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14582 === (14))){
var state_14581__$1 = state_14581;
var statearr_14614_14656 = state_14581__$1;
(statearr_14614_14656[(2)] = null);

(statearr_14614_14656[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14582 === (16))){
var inst_14536 = (state_14581[(10)]);
var inst_14540 = cljs.core.chunk_first.call(null,inst_14536);
var inst_14541 = cljs.core.chunk_rest.call(null,inst_14536);
var inst_14542 = cljs.core.count.call(null,inst_14540);
var inst_14522 = inst_14541;
var inst_14523 = inst_14540;
var inst_14524 = inst_14542;
var inst_14525 = (0);
var state_14581__$1 = (function (){var statearr_14615 = state_14581;
(statearr_14615[(12)] = inst_14525);

(statearr_14615[(13)] = inst_14524);

(statearr_14615[(14)] = inst_14522);

(statearr_14615[(15)] = inst_14523);

return statearr_14615;
})();
var statearr_14616_14657 = state_14581__$1;
(statearr_14616_14657[(2)] = null);

(statearr_14616_14657[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14582 === (10))){
var inst_14525 = (state_14581[(12)]);
var inst_14524 = (state_14581[(13)]);
var inst_14522 = (state_14581[(14)]);
var inst_14523 = (state_14581[(15)]);
var inst_14530 = cljs.core._nth.call(null,inst_14523,inst_14525);
var inst_14531 = cljs.core.async.muxch_STAR_.call(null,inst_14530);
var inst_14532 = cljs.core.async.close_BANG_.call(null,inst_14531);
var inst_14533 = (inst_14525 + (1));
var tmp14611 = inst_14524;
var tmp14612 = inst_14522;
var tmp14613 = inst_14523;
var inst_14522__$1 = tmp14612;
var inst_14523__$1 = tmp14613;
var inst_14524__$1 = tmp14611;
var inst_14525__$1 = inst_14533;
var state_14581__$1 = (function (){var statearr_14617 = state_14581;
(statearr_14617[(12)] = inst_14525__$1);

(statearr_14617[(17)] = inst_14532);

(statearr_14617[(13)] = inst_14524__$1);

(statearr_14617[(14)] = inst_14522__$1);

(statearr_14617[(15)] = inst_14523__$1);

return statearr_14617;
})();
var statearr_14618_14658 = state_14581__$1;
(statearr_14618_14658[(2)] = null);

(statearr_14618_14658[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14582 === (18))){
var inst_14551 = (state_14581[(2)]);
var state_14581__$1 = state_14581;
var statearr_14619_14659 = state_14581__$1;
(statearr_14619_14659[(2)] = inst_14551);

(statearr_14619_14659[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14582 === (8))){
var inst_14525 = (state_14581[(12)]);
var inst_14524 = (state_14581[(13)]);
var inst_14527 = (inst_14525 < inst_14524);
var inst_14528 = inst_14527;
var state_14581__$1 = state_14581;
if(cljs.core.truth_(inst_14528)){
var statearr_14620_14660 = state_14581__$1;
(statearr_14620_14660[(1)] = (10));

} else {
var statearr_14621_14661 = state_14581__$1;
(statearr_14621_14661[(1)] = (11));

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
});})(c__10504__auto___14633,mults,ensure_mult,p))
;
return ((function (switch__10439__auto__,c__10504__auto___14633,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10440__auto__ = null;
var cljs$core$async$state_machine__10440__auto____0 = (function (){
var statearr_14625 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14625[(0)] = cljs$core$async$state_machine__10440__auto__);

(statearr_14625[(1)] = (1));

return statearr_14625;
});
var cljs$core$async$state_machine__10440__auto____1 = (function (state_14581){
while(true){
var ret_value__10441__auto__ = (function (){try{while(true){
var result__10442__auto__ = switch__10439__auto__.call(null,state_14581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10442__auto__;
}
break;
}
}catch (e14626){if((e14626 instanceof Object)){
var ex__10443__auto__ = e14626;
var statearr_14627_14662 = state_14581;
(statearr_14627_14662[(5)] = ex__10443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10441__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14663 = state_14581;
state_14581 = G__14663;
continue;
} else {
return ret_value__10441__auto__;
}
break;
}
});
cljs$core$async$state_machine__10440__auto__ = function(state_14581){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10440__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10440__auto____1.call(this,state_14581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10440__auto____0;
cljs$core$async$state_machine__10440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10440__auto____1;
return cljs$core$async$state_machine__10440__auto__;
})()
;})(switch__10439__auto__,c__10504__auto___14633,mults,ensure_mult,p))
})();
var state__10506__auto__ = (function (){var statearr_14628 = f__10505__auto__.call(null);
(statearr_14628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10504__auto___14633);

return statearr_14628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10506__auto__);
});})(c__10504__auto___14633,mults,ensure_mult,p))
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
var args14664 = [];
var len__9156__auto___14667 = arguments.length;
var i__9157__auto___14668 = (0);
while(true){
if((i__9157__auto___14668 < len__9156__auto___14667)){
args14664.push((arguments[i__9157__auto___14668]));

var G__14669 = (i__9157__auto___14668 + (1));
i__9157__auto___14668 = G__14669;
continue;
} else {
}
break;
}

var G__14666 = args14664.length;
switch (G__14666) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14664.length)].join('')));

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
var args14671 = [];
var len__9156__auto___14674 = arguments.length;
var i__9157__auto___14675 = (0);
while(true){
if((i__9157__auto___14675 < len__9156__auto___14674)){
args14671.push((arguments[i__9157__auto___14675]));

var G__14676 = (i__9157__auto___14675 + (1));
i__9157__auto___14675 = G__14676;
continue;
} else {
}
break;
}

var G__14673 = args14671.length;
switch (G__14673) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14671.length)].join('')));

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
var args14678 = [];
var len__9156__auto___14749 = arguments.length;
var i__9157__auto___14750 = (0);
while(true){
if((i__9157__auto___14750 < len__9156__auto___14749)){
args14678.push((arguments[i__9157__auto___14750]));

var G__14751 = (i__9157__auto___14750 + (1));
i__9157__auto___14750 = G__14751;
continue;
} else {
}
break;
}

var G__14680 = args14678.length;
switch (G__14680) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14678.length)].join('')));

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
var c__10504__auto___14753 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10504__auto___14753,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10505__auto__ = (function (){var switch__10439__auto__ = ((function (c__10504__auto___14753,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14719){
var state_val_14720 = (state_14719[(1)]);
if((state_val_14720 === (7))){
var state_14719__$1 = state_14719;
var statearr_14721_14754 = state_14719__$1;
(statearr_14721_14754[(2)] = null);

(statearr_14721_14754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14720 === (1))){
var state_14719__$1 = state_14719;
var statearr_14722_14755 = state_14719__$1;
(statearr_14722_14755[(2)] = null);

(statearr_14722_14755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14720 === (4))){
var inst_14683 = (state_14719[(7)]);
var inst_14685 = (inst_14683 < cnt);
var state_14719__$1 = state_14719;
if(cljs.core.truth_(inst_14685)){
var statearr_14723_14756 = state_14719__$1;
(statearr_14723_14756[(1)] = (6));

} else {
var statearr_14724_14757 = state_14719__$1;
(statearr_14724_14757[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14720 === (15))){
var inst_14715 = (state_14719[(2)]);
var state_14719__$1 = state_14719;
var statearr_14725_14758 = state_14719__$1;
(statearr_14725_14758[(2)] = inst_14715);

(statearr_14725_14758[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14720 === (13))){
var inst_14708 = cljs.core.async.close_BANG_.call(null,out);
var state_14719__$1 = state_14719;
var statearr_14726_14759 = state_14719__$1;
(statearr_14726_14759[(2)] = inst_14708);

(statearr_14726_14759[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14720 === (6))){
var state_14719__$1 = state_14719;
var statearr_14727_14760 = state_14719__$1;
(statearr_14727_14760[(2)] = null);

(statearr_14727_14760[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14720 === (3))){
var inst_14717 = (state_14719[(2)]);
var state_14719__$1 = state_14719;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14719__$1,inst_14717);
} else {
if((state_val_14720 === (12))){
var inst_14705 = (state_14719[(8)]);
var inst_14705__$1 = (state_14719[(2)]);
var inst_14706 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14705__$1);
var state_14719__$1 = (function (){var statearr_14728 = state_14719;
(statearr_14728[(8)] = inst_14705__$1);

return statearr_14728;
})();
if(cljs.core.truth_(inst_14706)){
var statearr_14729_14761 = state_14719__$1;
(statearr_14729_14761[(1)] = (13));

} else {
var statearr_14730_14762 = state_14719__$1;
(statearr_14730_14762[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14720 === (2))){
var inst_14682 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_14683 = (0);
var state_14719__$1 = (function (){var statearr_14731 = state_14719;
(statearr_14731[(7)] = inst_14683);

(statearr_14731[(9)] = inst_14682);

return statearr_14731;
})();
var statearr_14732_14763 = state_14719__$1;
(statearr_14732_14763[(2)] = null);

(statearr_14732_14763[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14720 === (11))){
var inst_14683 = (state_14719[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14719,(10),Object,null,(9));
var inst_14692 = chs__$1.call(null,inst_14683);
var inst_14693 = done.call(null,inst_14683);
var inst_14694 = cljs.core.async.take_BANG_.call(null,inst_14692,inst_14693);
var state_14719__$1 = state_14719;
var statearr_14733_14764 = state_14719__$1;
(statearr_14733_14764[(2)] = inst_14694);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14719__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14720 === (9))){
var inst_14683 = (state_14719[(7)]);
var inst_14696 = (state_14719[(2)]);
var inst_14697 = (inst_14683 + (1));
var inst_14683__$1 = inst_14697;
var state_14719__$1 = (function (){var statearr_14734 = state_14719;
(statearr_14734[(10)] = inst_14696);

(statearr_14734[(7)] = inst_14683__$1);

return statearr_14734;
})();
var statearr_14735_14765 = state_14719__$1;
(statearr_14735_14765[(2)] = null);

(statearr_14735_14765[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14720 === (5))){
var inst_14703 = (state_14719[(2)]);
var state_14719__$1 = (function (){var statearr_14736 = state_14719;
(statearr_14736[(11)] = inst_14703);

return statearr_14736;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14719__$1,(12),dchan);
} else {
if((state_val_14720 === (14))){
var inst_14705 = (state_14719[(8)]);
var inst_14710 = cljs.core.apply.call(null,f,inst_14705);
var state_14719__$1 = state_14719;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14719__$1,(16),out,inst_14710);
} else {
if((state_val_14720 === (16))){
var inst_14712 = (state_14719[(2)]);
var state_14719__$1 = (function (){var statearr_14737 = state_14719;
(statearr_14737[(12)] = inst_14712);

return statearr_14737;
})();
var statearr_14738_14766 = state_14719__$1;
(statearr_14738_14766[(2)] = null);

(statearr_14738_14766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14720 === (10))){
var inst_14687 = (state_14719[(2)]);
var inst_14688 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_14719__$1 = (function (){var statearr_14739 = state_14719;
(statearr_14739[(13)] = inst_14687);

return statearr_14739;
})();
var statearr_14740_14767 = state_14719__$1;
(statearr_14740_14767[(2)] = inst_14688);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14719__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14720 === (8))){
var inst_14701 = (state_14719[(2)]);
var state_14719__$1 = state_14719;
var statearr_14741_14768 = state_14719__$1;
(statearr_14741_14768[(2)] = inst_14701);

(statearr_14741_14768[(1)] = (5));


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
});})(c__10504__auto___14753,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10439__auto__,c__10504__auto___14753,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10440__auto__ = null;
var cljs$core$async$state_machine__10440__auto____0 = (function (){
var statearr_14745 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14745[(0)] = cljs$core$async$state_machine__10440__auto__);

(statearr_14745[(1)] = (1));

return statearr_14745;
});
var cljs$core$async$state_machine__10440__auto____1 = (function (state_14719){
while(true){
var ret_value__10441__auto__ = (function (){try{while(true){
var result__10442__auto__ = switch__10439__auto__.call(null,state_14719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10442__auto__;
}
break;
}
}catch (e14746){if((e14746 instanceof Object)){
var ex__10443__auto__ = e14746;
var statearr_14747_14769 = state_14719;
(statearr_14747_14769[(5)] = ex__10443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10441__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14770 = state_14719;
state_14719 = G__14770;
continue;
} else {
return ret_value__10441__auto__;
}
break;
}
});
cljs$core$async$state_machine__10440__auto__ = function(state_14719){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10440__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10440__auto____1.call(this,state_14719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10440__auto____0;
cljs$core$async$state_machine__10440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10440__auto____1;
return cljs$core$async$state_machine__10440__auto__;
})()
;})(switch__10439__auto__,c__10504__auto___14753,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10506__auto__ = (function (){var statearr_14748 = f__10505__auto__.call(null);
(statearr_14748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10504__auto___14753);

return statearr_14748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10506__auto__);
});})(c__10504__auto___14753,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args14772 = [];
var len__9156__auto___14828 = arguments.length;
var i__9157__auto___14829 = (0);
while(true){
if((i__9157__auto___14829 < len__9156__auto___14828)){
args14772.push((arguments[i__9157__auto___14829]));

var G__14830 = (i__9157__auto___14829 + (1));
i__9157__auto___14829 = G__14830;
continue;
} else {
}
break;
}

var G__14774 = args14772.length;
switch (G__14774) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14772.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10504__auto___14832 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10504__auto___14832,out){
return (function (){
var f__10505__auto__ = (function (){var switch__10439__auto__ = ((function (c__10504__auto___14832,out){
return (function (state_14804){
var state_val_14805 = (state_14804[(1)]);
if((state_val_14805 === (7))){
var inst_14783 = (state_14804[(7)]);
var inst_14784 = (state_14804[(8)]);
var inst_14783__$1 = (state_14804[(2)]);
var inst_14784__$1 = cljs.core.nth.call(null,inst_14783__$1,(0),null);
var inst_14785 = cljs.core.nth.call(null,inst_14783__$1,(1),null);
var inst_14786 = (inst_14784__$1 == null);
var state_14804__$1 = (function (){var statearr_14806 = state_14804;
(statearr_14806[(9)] = inst_14785);

(statearr_14806[(7)] = inst_14783__$1);

(statearr_14806[(8)] = inst_14784__$1);

return statearr_14806;
})();
if(cljs.core.truth_(inst_14786)){
var statearr_14807_14833 = state_14804__$1;
(statearr_14807_14833[(1)] = (8));

} else {
var statearr_14808_14834 = state_14804__$1;
(statearr_14808_14834[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14805 === (1))){
var inst_14775 = cljs.core.vec.call(null,chs);
var inst_14776 = inst_14775;
var state_14804__$1 = (function (){var statearr_14809 = state_14804;
(statearr_14809[(10)] = inst_14776);

return statearr_14809;
})();
var statearr_14810_14835 = state_14804__$1;
(statearr_14810_14835[(2)] = null);

(statearr_14810_14835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14805 === (4))){
var inst_14776 = (state_14804[(10)]);
var state_14804__$1 = state_14804;
return cljs.core.async.ioc_alts_BANG_.call(null,state_14804__$1,(7),inst_14776);
} else {
if((state_val_14805 === (6))){
var inst_14800 = (state_14804[(2)]);
var state_14804__$1 = state_14804;
var statearr_14811_14836 = state_14804__$1;
(statearr_14811_14836[(2)] = inst_14800);

(statearr_14811_14836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14805 === (3))){
var inst_14802 = (state_14804[(2)]);
var state_14804__$1 = state_14804;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14804__$1,inst_14802);
} else {
if((state_val_14805 === (2))){
var inst_14776 = (state_14804[(10)]);
var inst_14778 = cljs.core.count.call(null,inst_14776);
var inst_14779 = (inst_14778 > (0));
var state_14804__$1 = state_14804;
if(cljs.core.truth_(inst_14779)){
var statearr_14813_14837 = state_14804__$1;
(statearr_14813_14837[(1)] = (4));

} else {
var statearr_14814_14838 = state_14804__$1;
(statearr_14814_14838[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14805 === (11))){
var inst_14776 = (state_14804[(10)]);
var inst_14793 = (state_14804[(2)]);
var tmp14812 = inst_14776;
var inst_14776__$1 = tmp14812;
var state_14804__$1 = (function (){var statearr_14815 = state_14804;
(statearr_14815[(10)] = inst_14776__$1);

(statearr_14815[(11)] = inst_14793);

return statearr_14815;
})();
var statearr_14816_14839 = state_14804__$1;
(statearr_14816_14839[(2)] = null);

(statearr_14816_14839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14805 === (9))){
var inst_14784 = (state_14804[(8)]);
var state_14804__$1 = state_14804;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14804__$1,(11),out,inst_14784);
} else {
if((state_val_14805 === (5))){
var inst_14798 = cljs.core.async.close_BANG_.call(null,out);
var state_14804__$1 = state_14804;
var statearr_14817_14840 = state_14804__$1;
(statearr_14817_14840[(2)] = inst_14798);

(statearr_14817_14840[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14805 === (10))){
var inst_14796 = (state_14804[(2)]);
var state_14804__$1 = state_14804;
var statearr_14818_14841 = state_14804__$1;
(statearr_14818_14841[(2)] = inst_14796);

(statearr_14818_14841[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14805 === (8))){
var inst_14785 = (state_14804[(9)]);
var inst_14783 = (state_14804[(7)]);
var inst_14776 = (state_14804[(10)]);
var inst_14784 = (state_14804[(8)]);
var inst_14788 = (function (){var cs = inst_14776;
var vec__14781 = inst_14783;
var v = inst_14784;
var c = inst_14785;
return ((function (cs,vec__14781,v,c,inst_14785,inst_14783,inst_14776,inst_14784,state_val_14805,c__10504__auto___14832,out){
return (function (p1__14771_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__14771_SHARP_);
});
;})(cs,vec__14781,v,c,inst_14785,inst_14783,inst_14776,inst_14784,state_val_14805,c__10504__auto___14832,out))
})();
var inst_14789 = cljs.core.filterv.call(null,inst_14788,inst_14776);
var inst_14776__$1 = inst_14789;
var state_14804__$1 = (function (){var statearr_14819 = state_14804;
(statearr_14819[(10)] = inst_14776__$1);

return statearr_14819;
})();
var statearr_14820_14842 = state_14804__$1;
(statearr_14820_14842[(2)] = null);

(statearr_14820_14842[(1)] = (2));


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
});})(c__10504__auto___14832,out))
;
return ((function (switch__10439__auto__,c__10504__auto___14832,out){
return (function() {
var cljs$core$async$state_machine__10440__auto__ = null;
var cljs$core$async$state_machine__10440__auto____0 = (function (){
var statearr_14824 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14824[(0)] = cljs$core$async$state_machine__10440__auto__);

(statearr_14824[(1)] = (1));

return statearr_14824;
});
var cljs$core$async$state_machine__10440__auto____1 = (function (state_14804){
while(true){
var ret_value__10441__auto__ = (function (){try{while(true){
var result__10442__auto__ = switch__10439__auto__.call(null,state_14804);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10442__auto__;
}
break;
}
}catch (e14825){if((e14825 instanceof Object)){
var ex__10443__auto__ = e14825;
var statearr_14826_14843 = state_14804;
(statearr_14826_14843[(5)] = ex__10443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10441__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14844 = state_14804;
state_14804 = G__14844;
continue;
} else {
return ret_value__10441__auto__;
}
break;
}
});
cljs$core$async$state_machine__10440__auto__ = function(state_14804){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10440__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10440__auto____1.call(this,state_14804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10440__auto____0;
cljs$core$async$state_machine__10440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10440__auto____1;
return cljs$core$async$state_machine__10440__auto__;
})()
;})(switch__10439__auto__,c__10504__auto___14832,out))
})();
var state__10506__auto__ = (function (){var statearr_14827 = f__10505__auto__.call(null);
(statearr_14827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10504__auto___14832);

return statearr_14827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10506__auto__);
});})(c__10504__auto___14832,out))
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
var args14845 = [];
var len__9156__auto___14894 = arguments.length;
var i__9157__auto___14895 = (0);
while(true){
if((i__9157__auto___14895 < len__9156__auto___14894)){
args14845.push((arguments[i__9157__auto___14895]));

var G__14896 = (i__9157__auto___14895 + (1));
i__9157__auto___14895 = G__14896;
continue;
} else {
}
break;
}

var G__14847 = args14845.length;
switch (G__14847) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14845.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10504__auto___14898 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10504__auto___14898,out){
return (function (){
var f__10505__auto__ = (function (){var switch__10439__auto__ = ((function (c__10504__auto___14898,out){
return (function (state_14871){
var state_val_14872 = (state_14871[(1)]);
if((state_val_14872 === (7))){
var inst_14853 = (state_14871[(7)]);
var inst_14853__$1 = (state_14871[(2)]);
var inst_14854 = (inst_14853__$1 == null);
var inst_14855 = cljs.core.not.call(null,inst_14854);
var state_14871__$1 = (function (){var statearr_14873 = state_14871;
(statearr_14873[(7)] = inst_14853__$1);

return statearr_14873;
})();
if(inst_14855){
var statearr_14874_14899 = state_14871__$1;
(statearr_14874_14899[(1)] = (8));

} else {
var statearr_14875_14900 = state_14871__$1;
(statearr_14875_14900[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (1))){
var inst_14848 = (0);
var state_14871__$1 = (function (){var statearr_14876 = state_14871;
(statearr_14876[(8)] = inst_14848);

return statearr_14876;
})();
var statearr_14877_14901 = state_14871__$1;
(statearr_14877_14901[(2)] = null);

(statearr_14877_14901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (4))){
var state_14871__$1 = state_14871;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14871__$1,(7),ch);
} else {
if((state_val_14872 === (6))){
var inst_14866 = (state_14871[(2)]);
var state_14871__$1 = state_14871;
var statearr_14878_14902 = state_14871__$1;
(statearr_14878_14902[(2)] = inst_14866);

(statearr_14878_14902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (3))){
var inst_14868 = (state_14871[(2)]);
var inst_14869 = cljs.core.async.close_BANG_.call(null,out);
var state_14871__$1 = (function (){var statearr_14879 = state_14871;
(statearr_14879[(9)] = inst_14868);

return statearr_14879;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14871__$1,inst_14869);
} else {
if((state_val_14872 === (2))){
var inst_14848 = (state_14871[(8)]);
var inst_14850 = (inst_14848 < n);
var state_14871__$1 = state_14871;
if(cljs.core.truth_(inst_14850)){
var statearr_14880_14903 = state_14871__$1;
(statearr_14880_14903[(1)] = (4));

} else {
var statearr_14881_14904 = state_14871__$1;
(statearr_14881_14904[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (11))){
var inst_14848 = (state_14871[(8)]);
var inst_14858 = (state_14871[(2)]);
var inst_14859 = (inst_14848 + (1));
var inst_14848__$1 = inst_14859;
var state_14871__$1 = (function (){var statearr_14882 = state_14871;
(statearr_14882[(10)] = inst_14858);

(statearr_14882[(8)] = inst_14848__$1);

return statearr_14882;
})();
var statearr_14883_14905 = state_14871__$1;
(statearr_14883_14905[(2)] = null);

(statearr_14883_14905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (9))){
var state_14871__$1 = state_14871;
var statearr_14884_14906 = state_14871__$1;
(statearr_14884_14906[(2)] = null);

(statearr_14884_14906[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (5))){
var state_14871__$1 = state_14871;
var statearr_14885_14907 = state_14871__$1;
(statearr_14885_14907[(2)] = null);

(statearr_14885_14907[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (10))){
var inst_14863 = (state_14871[(2)]);
var state_14871__$1 = state_14871;
var statearr_14886_14908 = state_14871__$1;
(statearr_14886_14908[(2)] = inst_14863);

(statearr_14886_14908[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (8))){
var inst_14853 = (state_14871[(7)]);
var state_14871__$1 = state_14871;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14871__$1,(11),out,inst_14853);
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
});})(c__10504__auto___14898,out))
;
return ((function (switch__10439__auto__,c__10504__auto___14898,out){
return (function() {
var cljs$core$async$state_machine__10440__auto__ = null;
var cljs$core$async$state_machine__10440__auto____0 = (function (){
var statearr_14890 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14890[(0)] = cljs$core$async$state_machine__10440__auto__);

(statearr_14890[(1)] = (1));

return statearr_14890;
});
var cljs$core$async$state_machine__10440__auto____1 = (function (state_14871){
while(true){
var ret_value__10441__auto__ = (function (){try{while(true){
var result__10442__auto__ = switch__10439__auto__.call(null,state_14871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10442__auto__;
}
break;
}
}catch (e14891){if((e14891 instanceof Object)){
var ex__10443__auto__ = e14891;
var statearr_14892_14909 = state_14871;
(statearr_14892_14909[(5)] = ex__10443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14891;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10441__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14910 = state_14871;
state_14871 = G__14910;
continue;
} else {
return ret_value__10441__auto__;
}
break;
}
});
cljs$core$async$state_machine__10440__auto__ = function(state_14871){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10440__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10440__auto____1.call(this,state_14871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10440__auto____0;
cljs$core$async$state_machine__10440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10440__auto____1;
return cljs$core$async$state_machine__10440__auto__;
})()
;})(switch__10439__auto__,c__10504__auto___14898,out))
})();
var state__10506__auto__ = (function (){var statearr_14893 = f__10505__auto__.call(null);
(statearr_14893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10504__auto___14898);

return statearr_14893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10506__auto__);
});})(c__10504__auto___14898,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async14918 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14918 = (function (map_LT_,f,ch,meta14919){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta14919 = meta14919;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14920,meta14919__$1){
var self__ = this;
var _14920__$1 = this;
return (new cljs.core.async.t_cljs$core$async14918(self__.map_LT_,self__.f,self__.ch,meta14919__$1));
});

cljs.core.async.t_cljs$core$async14918.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14920){
var self__ = this;
var _14920__$1 = this;
return self__.meta14919;
});

cljs.core.async.t_cljs$core$async14918.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async14918.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14918.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14918.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async14918.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async14921 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14921 = (function (map_LT_,f,ch,meta14919,_,fn1,meta14922){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta14919 = meta14919;
this._ = _;
this.fn1 = fn1;
this.meta14922 = meta14922;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14921.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14923,meta14922__$1){
var self__ = this;
var _14923__$1 = this;
return (new cljs.core.async.t_cljs$core$async14921(self__.map_LT_,self__.f,self__.ch,self__.meta14919,self__._,self__.fn1,meta14922__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async14921.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14923){
var self__ = this;
var _14923__$1 = this;
return self__.meta14922;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14921.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14921.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14921.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14921.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__14911_SHARP_){
return f1.call(null,(((p1__14911_SHARP_ == null))?null:self__.f.call(null,p1__14911_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async14921.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14919","meta14919",415627942,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async14918","cljs.core.async/t_cljs$core$async14918",997755775,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta14922","meta14922",-1229120957,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14921.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14921.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14921";

cljs.core.async.t_cljs$core$async14921.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8696__auto__,writer__8697__auto__,opt__8698__auto__){
return cljs.core._write.call(null,writer__8697__auto__,"cljs.core.async/t_cljs$core$async14921");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async14921 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14921(map_LT___$1,f__$1,ch__$1,meta14919__$1,___$2,fn1__$1,meta14922){
return (new cljs.core.async.t_cljs$core$async14921(map_LT___$1,f__$1,ch__$1,meta14919__$1,___$2,fn1__$1,meta14922));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async14921(self__.map_LT_,self__.f,self__.ch,self__.meta14919,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async14918.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async14918.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async14918.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14919","meta14919",415627942,null)], null);
});

cljs.core.async.t_cljs$core$async14918.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14918.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14918";

cljs.core.async.t_cljs$core$async14918.cljs$lang$ctorPrWriter = (function (this__8696__auto__,writer__8697__auto__,opt__8698__auto__){
return cljs.core._write.call(null,writer__8697__auto__,"cljs.core.async/t_cljs$core$async14918");
});

cljs.core.async.__GT_t_cljs$core$async14918 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14918(map_LT___$1,f__$1,ch__$1,meta14919){
return (new cljs.core.async.t_cljs$core$async14918(map_LT___$1,f__$1,ch__$1,meta14919));
});

}

return (new cljs.core.async.t_cljs$core$async14918(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async14927 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14927 = (function (map_GT_,f,ch,meta14928){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta14928 = meta14928;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14929,meta14928__$1){
var self__ = this;
var _14929__$1 = this;
return (new cljs.core.async.t_cljs$core$async14927(self__.map_GT_,self__.f,self__.ch,meta14928__$1));
});

cljs.core.async.t_cljs$core$async14927.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14929){
var self__ = this;
var _14929__$1 = this;
return self__.meta14928;
});

cljs.core.async.t_cljs$core$async14927.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async14927.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14927.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async14927.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14927.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async14927.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async14927.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14928","meta14928",1071495682,null)], null);
});

cljs.core.async.t_cljs$core$async14927.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14927.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14927";

cljs.core.async.t_cljs$core$async14927.cljs$lang$ctorPrWriter = (function (this__8696__auto__,writer__8697__auto__,opt__8698__auto__){
return cljs.core._write.call(null,writer__8697__auto__,"cljs.core.async/t_cljs$core$async14927");
});

cljs.core.async.__GT_t_cljs$core$async14927 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async14927(map_GT___$1,f__$1,ch__$1,meta14928){
return (new cljs.core.async.t_cljs$core$async14927(map_GT___$1,f__$1,ch__$1,meta14928));
});

}

return (new cljs.core.async.t_cljs$core$async14927(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async14933 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14933 = (function (filter_GT_,p,ch,meta14934){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta14934 = meta14934;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14935,meta14934__$1){
var self__ = this;
var _14935__$1 = this;
return (new cljs.core.async.t_cljs$core$async14933(self__.filter_GT_,self__.p,self__.ch,meta14934__$1));
});

cljs.core.async.t_cljs$core$async14933.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14935){
var self__ = this;
var _14935__$1 = this;
return self__.meta14934;
});

cljs.core.async.t_cljs$core$async14933.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async14933.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14933.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14933.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async14933.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14933.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async14933.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async14933.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14934","meta14934",-1637113888,null)], null);
});

cljs.core.async.t_cljs$core$async14933.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14933.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14933";

cljs.core.async.t_cljs$core$async14933.cljs$lang$ctorPrWriter = (function (this__8696__auto__,writer__8697__auto__,opt__8698__auto__){
return cljs.core._write.call(null,writer__8697__auto__,"cljs.core.async/t_cljs$core$async14933");
});

cljs.core.async.__GT_t_cljs$core$async14933 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async14933(filter_GT___$1,p__$1,ch__$1,meta14934){
return (new cljs.core.async.t_cljs$core$async14933(filter_GT___$1,p__$1,ch__$1,meta14934));
});

}

return (new cljs.core.async.t_cljs$core$async14933(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args14936 = [];
var len__9156__auto___14980 = arguments.length;
var i__9157__auto___14981 = (0);
while(true){
if((i__9157__auto___14981 < len__9156__auto___14980)){
args14936.push((arguments[i__9157__auto___14981]));

var G__14982 = (i__9157__auto___14981 + (1));
i__9157__auto___14981 = G__14982;
continue;
} else {
}
break;
}

var G__14938 = args14936.length;
switch (G__14938) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14936.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10504__auto___14984 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10504__auto___14984,out){
return (function (){
var f__10505__auto__ = (function (){var switch__10439__auto__ = ((function (c__10504__auto___14984,out){
return (function (state_14959){
var state_val_14960 = (state_14959[(1)]);
if((state_val_14960 === (7))){
var inst_14955 = (state_14959[(2)]);
var state_14959__$1 = state_14959;
var statearr_14961_14985 = state_14959__$1;
(statearr_14961_14985[(2)] = inst_14955);

(statearr_14961_14985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14960 === (1))){
var state_14959__$1 = state_14959;
var statearr_14962_14986 = state_14959__$1;
(statearr_14962_14986[(2)] = null);

(statearr_14962_14986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14960 === (4))){
var inst_14941 = (state_14959[(7)]);
var inst_14941__$1 = (state_14959[(2)]);
var inst_14942 = (inst_14941__$1 == null);
var state_14959__$1 = (function (){var statearr_14963 = state_14959;
(statearr_14963[(7)] = inst_14941__$1);

return statearr_14963;
})();
if(cljs.core.truth_(inst_14942)){
var statearr_14964_14987 = state_14959__$1;
(statearr_14964_14987[(1)] = (5));

} else {
var statearr_14965_14988 = state_14959__$1;
(statearr_14965_14988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14960 === (6))){
var inst_14941 = (state_14959[(7)]);
var inst_14946 = p.call(null,inst_14941);
var state_14959__$1 = state_14959;
if(cljs.core.truth_(inst_14946)){
var statearr_14966_14989 = state_14959__$1;
(statearr_14966_14989[(1)] = (8));

} else {
var statearr_14967_14990 = state_14959__$1;
(statearr_14967_14990[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14960 === (3))){
var inst_14957 = (state_14959[(2)]);
var state_14959__$1 = state_14959;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14959__$1,inst_14957);
} else {
if((state_val_14960 === (2))){
var state_14959__$1 = state_14959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14959__$1,(4),ch);
} else {
if((state_val_14960 === (11))){
var inst_14949 = (state_14959[(2)]);
var state_14959__$1 = state_14959;
var statearr_14968_14991 = state_14959__$1;
(statearr_14968_14991[(2)] = inst_14949);

(statearr_14968_14991[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14960 === (9))){
var state_14959__$1 = state_14959;
var statearr_14969_14992 = state_14959__$1;
(statearr_14969_14992[(2)] = null);

(statearr_14969_14992[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14960 === (5))){
var inst_14944 = cljs.core.async.close_BANG_.call(null,out);
var state_14959__$1 = state_14959;
var statearr_14970_14993 = state_14959__$1;
(statearr_14970_14993[(2)] = inst_14944);

(statearr_14970_14993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14960 === (10))){
var inst_14952 = (state_14959[(2)]);
var state_14959__$1 = (function (){var statearr_14971 = state_14959;
(statearr_14971[(8)] = inst_14952);

return statearr_14971;
})();
var statearr_14972_14994 = state_14959__$1;
(statearr_14972_14994[(2)] = null);

(statearr_14972_14994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14960 === (8))){
var inst_14941 = (state_14959[(7)]);
var state_14959__$1 = state_14959;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14959__$1,(11),out,inst_14941);
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
});})(c__10504__auto___14984,out))
;
return ((function (switch__10439__auto__,c__10504__auto___14984,out){
return (function() {
var cljs$core$async$state_machine__10440__auto__ = null;
var cljs$core$async$state_machine__10440__auto____0 = (function (){
var statearr_14976 = [null,null,null,null,null,null,null,null,null];
(statearr_14976[(0)] = cljs$core$async$state_machine__10440__auto__);

(statearr_14976[(1)] = (1));

return statearr_14976;
});
var cljs$core$async$state_machine__10440__auto____1 = (function (state_14959){
while(true){
var ret_value__10441__auto__ = (function (){try{while(true){
var result__10442__auto__ = switch__10439__auto__.call(null,state_14959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10442__auto__;
}
break;
}
}catch (e14977){if((e14977 instanceof Object)){
var ex__10443__auto__ = e14977;
var statearr_14978_14995 = state_14959;
(statearr_14978_14995[(5)] = ex__10443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10441__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14996 = state_14959;
state_14959 = G__14996;
continue;
} else {
return ret_value__10441__auto__;
}
break;
}
});
cljs$core$async$state_machine__10440__auto__ = function(state_14959){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10440__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10440__auto____1.call(this,state_14959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10440__auto____0;
cljs$core$async$state_machine__10440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10440__auto____1;
return cljs$core$async$state_machine__10440__auto__;
})()
;})(switch__10439__auto__,c__10504__auto___14984,out))
})();
var state__10506__auto__ = (function (){var statearr_14979 = f__10505__auto__.call(null);
(statearr_14979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10504__auto___14984);

return statearr_14979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10506__auto__);
});})(c__10504__auto___14984,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args14997 = [];
var len__9156__auto___15000 = arguments.length;
var i__9157__auto___15001 = (0);
while(true){
if((i__9157__auto___15001 < len__9156__auto___15000)){
args14997.push((arguments[i__9157__auto___15001]));

var G__15002 = (i__9157__auto___15001 + (1));
i__9157__auto___15001 = G__15002;
continue;
} else {
}
break;
}

var G__14999 = args14997.length;
switch (G__14999) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14997.length)].join('')));

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
var c__10504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10504__auto__){
return (function (){
var f__10505__auto__ = (function (){var switch__10439__auto__ = ((function (c__10504__auto__){
return (function (state_15169){
var state_val_15170 = (state_15169[(1)]);
if((state_val_15170 === (7))){
var inst_15165 = (state_15169[(2)]);
var state_15169__$1 = state_15169;
var statearr_15171_15212 = state_15169__$1;
(statearr_15171_15212[(2)] = inst_15165);

(statearr_15171_15212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15170 === (20))){
var inst_15135 = (state_15169[(7)]);
var inst_15146 = (state_15169[(2)]);
var inst_15147 = cljs.core.next.call(null,inst_15135);
var inst_15121 = inst_15147;
var inst_15122 = null;
var inst_15123 = (0);
var inst_15124 = (0);
var state_15169__$1 = (function (){var statearr_15172 = state_15169;
(statearr_15172[(8)] = inst_15146);

(statearr_15172[(9)] = inst_15122);

(statearr_15172[(10)] = inst_15124);

(statearr_15172[(11)] = inst_15121);

(statearr_15172[(12)] = inst_15123);

return statearr_15172;
})();
var statearr_15173_15213 = state_15169__$1;
(statearr_15173_15213[(2)] = null);

(statearr_15173_15213[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15170 === (1))){
var state_15169__$1 = state_15169;
var statearr_15174_15214 = state_15169__$1;
(statearr_15174_15214[(2)] = null);

(statearr_15174_15214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15170 === (4))){
var inst_15110 = (state_15169[(13)]);
var inst_15110__$1 = (state_15169[(2)]);
var inst_15111 = (inst_15110__$1 == null);
var state_15169__$1 = (function (){var statearr_15175 = state_15169;
(statearr_15175[(13)] = inst_15110__$1);

return statearr_15175;
})();
if(cljs.core.truth_(inst_15111)){
var statearr_15176_15215 = state_15169__$1;
(statearr_15176_15215[(1)] = (5));

} else {
var statearr_15177_15216 = state_15169__$1;
(statearr_15177_15216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15170 === (15))){
var state_15169__$1 = state_15169;
var statearr_15181_15217 = state_15169__$1;
(statearr_15181_15217[(2)] = null);

(statearr_15181_15217[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15170 === (21))){
var state_15169__$1 = state_15169;
var statearr_15182_15218 = state_15169__$1;
(statearr_15182_15218[(2)] = null);

(statearr_15182_15218[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15170 === (13))){
var inst_15122 = (state_15169[(9)]);
var inst_15124 = (state_15169[(10)]);
var inst_15121 = (state_15169[(11)]);
var inst_15123 = (state_15169[(12)]);
var inst_15131 = (state_15169[(2)]);
var inst_15132 = (inst_15124 + (1));
var tmp15178 = inst_15122;
var tmp15179 = inst_15121;
var tmp15180 = inst_15123;
var inst_15121__$1 = tmp15179;
var inst_15122__$1 = tmp15178;
var inst_15123__$1 = tmp15180;
var inst_15124__$1 = inst_15132;
var state_15169__$1 = (function (){var statearr_15183 = state_15169;
(statearr_15183[(9)] = inst_15122__$1);

(statearr_15183[(14)] = inst_15131);

(statearr_15183[(10)] = inst_15124__$1);

(statearr_15183[(11)] = inst_15121__$1);

(statearr_15183[(12)] = inst_15123__$1);

return statearr_15183;
})();
var statearr_15184_15219 = state_15169__$1;
(statearr_15184_15219[(2)] = null);

(statearr_15184_15219[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15170 === (22))){
var state_15169__$1 = state_15169;
var statearr_15185_15220 = state_15169__$1;
(statearr_15185_15220[(2)] = null);

(statearr_15185_15220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15170 === (6))){
var inst_15110 = (state_15169[(13)]);
var inst_15119 = f.call(null,inst_15110);
var inst_15120 = cljs.core.seq.call(null,inst_15119);
var inst_15121 = inst_15120;
var inst_15122 = null;
var inst_15123 = (0);
var inst_15124 = (0);
var state_15169__$1 = (function (){var statearr_15186 = state_15169;
(statearr_15186[(9)] = inst_15122);

(statearr_15186[(10)] = inst_15124);

(statearr_15186[(11)] = inst_15121);

(statearr_15186[(12)] = inst_15123);

return statearr_15186;
})();
var statearr_15187_15221 = state_15169__$1;
(statearr_15187_15221[(2)] = null);

(statearr_15187_15221[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15170 === (17))){
var inst_15135 = (state_15169[(7)]);
var inst_15139 = cljs.core.chunk_first.call(null,inst_15135);
var inst_15140 = cljs.core.chunk_rest.call(null,inst_15135);
var inst_15141 = cljs.core.count.call(null,inst_15139);
var inst_15121 = inst_15140;
var inst_15122 = inst_15139;
var inst_15123 = inst_15141;
var inst_15124 = (0);
var state_15169__$1 = (function (){var statearr_15188 = state_15169;
(statearr_15188[(9)] = inst_15122);

(statearr_15188[(10)] = inst_15124);

(statearr_15188[(11)] = inst_15121);

(statearr_15188[(12)] = inst_15123);

return statearr_15188;
})();
var statearr_15189_15222 = state_15169__$1;
(statearr_15189_15222[(2)] = null);

(statearr_15189_15222[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15170 === (3))){
var inst_15167 = (state_15169[(2)]);
var state_15169__$1 = state_15169;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15169__$1,inst_15167);
} else {
if((state_val_15170 === (12))){
var inst_15155 = (state_15169[(2)]);
var state_15169__$1 = state_15169;
var statearr_15190_15223 = state_15169__$1;
(statearr_15190_15223[(2)] = inst_15155);

(statearr_15190_15223[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15170 === (2))){
var state_15169__$1 = state_15169;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15169__$1,(4),in$);
} else {
if((state_val_15170 === (23))){
var inst_15163 = (state_15169[(2)]);
var state_15169__$1 = state_15169;
var statearr_15191_15224 = state_15169__$1;
(statearr_15191_15224[(2)] = inst_15163);

(statearr_15191_15224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15170 === (19))){
var inst_15150 = (state_15169[(2)]);
var state_15169__$1 = state_15169;
var statearr_15192_15225 = state_15169__$1;
(statearr_15192_15225[(2)] = inst_15150);

(statearr_15192_15225[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15170 === (11))){
var inst_15121 = (state_15169[(11)]);
var inst_15135 = (state_15169[(7)]);
var inst_15135__$1 = cljs.core.seq.call(null,inst_15121);
var state_15169__$1 = (function (){var statearr_15193 = state_15169;
(statearr_15193[(7)] = inst_15135__$1);

return statearr_15193;
})();
if(inst_15135__$1){
var statearr_15194_15226 = state_15169__$1;
(statearr_15194_15226[(1)] = (14));

} else {
var statearr_15195_15227 = state_15169__$1;
(statearr_15195_15227[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15170 === (9))){
var inst_15157 = (state_15169[(2)]);
var inst_15158 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_15169__$1 = (function (){var statearr_15196 = state_15169;
(statearr_15196[(15)] = inst_15157);

return statearr_15196;
})();
if(cljs.core.truth_(inst_15158)){
var statearr_15197_15228 = state_15169__$1;
(statearr_15197_15228[(1)] = (21));

} else {
var statearr_15198_15229 = state_15169__$1;
(statearr_15198_15229[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15170 === (5))){
var inst_15113 = cljs.core.async.close_BANG_.call(null,out);
var state_15169__$1 = state_15169;
var statearr_15199_15230 = state_15169__$1;
(statearr_15199_15230[(2)] = inst_15113);

(statearr_15199_15230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15170 === (14))){
var inst_15135 = (state_15169[(7)]);
var inst_15137 = cljs.core.chunked_seq_QMARK_.call(null,inst_15135);
var state_15169__$1 = state_15169;
if(inst_15137){
var statearr_15200_15231 = state_15169__$1;
(statearr_15200_15231[(1)] = (17));

} else {
var statearr_15201_15232 = state_15169__$1;
(statearr_15201_15232[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15170 === (16))){
var inst_15153 = (state_15169[(2)]);
var state_15169__$1 = state_15169;
var statearr_15202_15233 = state_15169__$1;
(statearr_15202_15233[(2)] = inst_15153);

(statearr_15202_15233[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15170 === (10))){
var inst_15122 = (state_15169[(9)]);
var inst_15124 = (state_15169[(10)]);
var inst_15129 = cljs.core._nth.call(null,inst_15122,inst_15124);
var state_15169__$1 = state_15169;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15169__$1,(13),out,inst_15129);
} else {
if((state_val_15170 === (18))){
var inst_15135 = (state_15169[(7)]);
var inst_15144 = cljs.core.first.call(null,inst_15135);
var state_15169__$1 = state_15169;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15169__$1,(20),out,inst_15144);
} else {
if((state_val_15170 === (8))){
var inst_15124 = (state_15169[(10)]);
var inst_15123 = (state_15169[(12)]);
var inst_15126 = (inst_15124 < inst_15123);
var inst_15127 = inst_15126;
var state_15169__$1 = state_15169;
if(cljs.core.truth_(inst_15127)){
var statearr_15203_15234 = state_15169__$1;
(statearr_15203_15234[(1)] = (10));

} else {
var statearr_15204_15235 = state_15169__$1;
(statearr_15204_15235[(1)] = (11));

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
});})(c__10504__auto__))
;
return ((function (switch__10439__auto__,c__10504__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__10440__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10440__auto____0 = (function (){
var statearr_15208 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15208[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10440__auto__);

(statearr_15208[(1)] = (1));

return statearr_15208;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10440__auto____1 = (function (state_15169){
while(true){
var ret_value__10441__auto__ = (function (){try{while(true){
var result__10442__auto__ = switch__10439__auto__.call(null,state_15169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10442__auto__;
}
break;
}
}catch (e15209){if((e15209 instanceof Object)){
var ex__10443__auto__ = e15209;
var statearr_15210_15236 = state_15169;
(statearr_15210_15236[(5)] = ex__10443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15209;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10441__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15237 = state_15169;
state_15169 = G__15237;
continue;
} else {
return ret_value__10441__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10440__auto__ = function(state_15169){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10440__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10440__auto____1.call(this,state_15169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10440__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10440__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10440__auto__;
})()
;})(switch__10439__auto__,c__10504__auto__))
})();
var state__10506__auto__ = (function (){var statearr_15211 = f__10505__auto__.call(null);
(statearr_15211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10504__auto__);

return statearr_15211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10506__auto__);
});})(c__10504__auto__))
);

return c__10504__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args15238 = [];
var len__9156__auto___15241 = arguments.length;
var i__9157__auto___15242 = (0);
while(true){
if((i__9157__auto___15242 < len__9156__auto___15241)){
args15238.push((arguments[i__9157__auto___15242]));

var G__15243 = (i__9157__auto___15242 + (1));
i__9157__auto___15242 = G__15243;
continue;
} else {
}
break;
}

var G__15240 = args15238.length;
switch (G__15240) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15238.length)].join('')));

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
var args15245 = [];
var len__9156__auto___15248 = arguments.length;
var i__9157__auto___15249 = (0);
while(true){
if((i__9157__auto___15249 < len__9156__auto___15248)){
args15245.push((arguments[i__9157__auto___15249]));

var G__15250 = (i__9157__auto___15249 + (1));
i__9157__auto___15249 = G__15250;
continue;
} else {
}
break;
}

var G__15247 = args15245.length;
switch (G__15247) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15245.length)].join('')));

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
var args15252 = [];
var len__9156__auto___15303 = arguments.length;
var i__9157__auto___15304 = (0);
while(true){
if((i__9157__auto___15304 < len__9156__auto___15303)){
args15252.push((arguments[i__9157__auto___15304]));

var G__15305 = (i__9157__auto___15304 + (1));
i__9157__auto___15304 = G__15305;
continue;
} else {
}
break;
}

var G__15254 = args15252.length;
switch (G__15254) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15252.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10504__auto___15307 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10504__auto___15307,out){
return (function (){
var f__10505__auto__ = (function (){var switch__10439__auto__ = ((function (c__10504__auto___15307,out){
return (function (state_15278){
var state_val_15279 = (state_15278[(1)]);
if((state_val_15279 === (7))){
var inst_15273 = (state_15278[(2)]);
var state_15278__$1 = state_15278;
var statearr_15280_15308 = state_15278__$1;
(statearr_15280_15308[(2)] = inst_15273);

(statearr_15280_15308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15279 === (1))){
var inst_15255 = null;
var state_15278__$1 = (function (){var statearr_15281 = state_15278;
(statearr_15281[(7)] = inst_15255);

return statearr_15281;
})();
var statearr_15282_15309 = state_15278__$1;
(statearr_15282_15309[(2)] = null);

(statearr_15282_15309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15279 === (4))){
var inst_15258 = (state_15278[(8)]);
var inst_15258__$1 = (state_15278[(2)]);
var inst_15259 = (inst_15258__$1 == null);
var inst_15260 = cljs.core.not.call(null,inst_15259);
var state_15278__$1 = (function (){var statearr_15283 = state_15278;
(statearr_15283[(8)] = inst_15258__$1);

return statearr_15283;
})();
if(inst_15260){
var statearr_15284_15310 = state_15278__$1;
(statearr_15284_15310[(1)] = (5));

} else {
var statearr_15285_15311 = state_15278__$1;
(statearr_15285_15311[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15279 === (6))){
var state_15278__$1 = state_15278;
var statearr_15286_15312 = state_15278__$1;
(statearr_15286_15312[(2)] = null);

(statearr_15286_15312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15279 === (3))){
var inst_15275 = (state_15278[(2)]);
var inst_15276 = cljs.core.async.close_BANG_.call(null,out);
var state_15278__$1 = (function (){var statearr_15287 = state_15278;
(statearr_15287[(9)] = inst_15275);

return statearr_15287;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15278__$1,inst_15276);
} else {
if((state_val_15279 === (2))){
var state_15278__$1 = state_15278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15278__$1,(4),ch);
} else {
if((state_val_15279 === (11))){
var inst_15258 = (state_15278[(8)]);
var inst_15267 = (state_15278[(2)]);
var inst_15255 = inst_15258;
var state_15278__$1 = (function (){var statearr_15288 = state_15278;
(statearr_15288[(7)] = inst_15255);

(statearr_15288[(10)] = inst_15267);

return statearr_15288;
})();
var statearr_15289_15313 = state_15278__$1;
(statearr_15289_15313[(2)] = null);

(statearr_15289_15313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15279 === (9))){
var inst_15258 = (state_15278[(8)]);
var state_15278__$1 = state_15278;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15278__$1,(11),out,inst_15258);
} else {
if((state_val_15279 === (5))){
var inst_15258 = (state_15278[(8)]);
var inst_15255 = (state_15278[(7)]);
var inst_15262 = cljs.core._EQ_.call(null,inst_15258,inst_15255);
var state_15278__$1 = state_15278;
if(inst_15262){
var statearr_15291_15314 = state_15278__$1;
(statearr_15291_15314[(1)] = (8));

} else {
var statearr_15292_15315 = state_15278__$1;
(statearr_15292_15315[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15279 === (10))){
var inst_15270 = (state_15278[(2)]);
var state_15278__$1 = state_15278;
var statearr_15293_15316 = state_15278__$1;
(statearr_15293_15316[(2)] = inst_15270);

(statearr_15293_15316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15279 === (8))){
var inst_15255 = (state_15278[(7)]);
var tmp15290 = inst_15255;
var inst_15255__$1 = tmp15290;
var state_15278__$1 = (function (){var statearr_15294 = state_15278;
(statearr_15294[(7)] = inst_15255__$1);

return statearr_15294;
})();
var statearr_15295_15317 = state_15278__$1;
(statearr_15295_15317[(2)] = null);

(statearr_15295_15317[(1)] = (2));


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
});})(c__10504__auto___15307,out))
;
return ((function (switch__10439__auto__,c__10504__auto___15307,out){
return (function() {
var cljs$core$async$state_machine__10440__auto__ = null;
var cljs$core$async$state_machine__10440__auto____0 = (function (){
var statearr_15299 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15299[(0)] = cljs$core$async$state_machine__10440__auto__);

(statearr_15299[(1)] = (1));

return statearr_15299;
});
var cljs$core$async$state_machine__10440__auto____1 = (function (state_15278){
while(true){
var ret_value__10441__auto__ = (function (){try{while(true){
var result__10442__auto__ = switch__10439__auto__.call(null,state_15278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10442__auto__;
}
break;
}
}catch (e15300){if((e15300 instanceof Object)){
var ex__10443__auto__ = e15300;
var statearr_15301_15318 = state_15278;
(statearr_15301_15318[(5)] = ex__10443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15300;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10441__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15319 = state_15278;
state_15278 = G__15319;
continue;
} else {
return ret_value__10441__auto__;
}
break;
}
});
cljs$core$async$state_machine__10440__auto__ = function(state_15278){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10440__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10440__auto____1.call(this,state_15278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10440__auto____0;
cljs$core$async$state_machine__10440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10440__auto____1;
return cljs$core$async$state_machine__10440__auto__;
})()
;})(switch__10439__auto__,c__10504__auto___15307,out))
})();
var state__10506__auto__ = (function (){var statearr_15302 = f__10505__auto__.call(null);
(statearr_15302[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10504__auto___15307);

return statearr_15302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10506__auto__);
});})(c__10504__auto___15307,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args15320 = [];
var len__9156__auto___15390 = arguments.length;
var i__9157__auto___15391 = (0);
while(true){
if((i__9157__auto___15391 < len__9156__auto___15390)){
args15320.push((arguments[i__9157__auto___15391]));

var G__15392 = (i__9157__auto___15391 + (1));
i__9157__auto___15391 = G__15392;
continue;
} else {
}
break;
}

var G__15322 = args15320.length;
switch (G__15322) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15320.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10504__auto___15394 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10504__auto___15394,out){
return (function (){
var f__10505__auto__ = (function (){var switch__10439__auto__ = ((function (c__10504__auto___15394,out){
return (function (state_15360){
var state_val_15361 = (state_15360[(1)]);
if((state_val_15361 === (7))){
var inst_15356 = (state_15360[(2)]);
var state_15360__$1 = state_15360;
var statearr_15362_15395 = state_15360__$1;
(statearr_15362_15395[(2)] = inst_15356);

(statearr_15362_15395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15361 === (1))){
var inst_15323 = (new Array(n));
var inst_15324 = inst_15323;
var inst_15325 = (0);
var state_15360__$1 = (function (){var statearr_15363 = state_15360;
(statearr_15363[(7)] = inst_15324);

(statearr_15363[(8)] = inst_15325);

return statearr_15363;
})();
var statearr_15364_15396 = state_15360__$1;
(statearr_15364_15396[(2)] = null);

(statearr_15364_15396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15361 === (4))){
var inst_15328 = (state_15360[(9)]);
var inst_15328__$1 = (state_15360[(2)]);
var inst_15329 = (inst_15328__$1 == null);
var inst_15330 = cljs.core.not.call(null,inst_15329);
var state_15360__$1 = (function (){var statearr_15365 = state_15360;
(statearr_15365[(9)] = inst_15328__$1);

return statearr_15365;
})();
if(inst_15330){
var statearr_15366_15397 = state_15360__$1;
(statearr_15366_15397[(1)] = (5));

} else {
var statearr_15367_15398 = state_15360__$1;
(statearr_15367_15398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15361 === (15))){
var inst_15350 = (state_15360[(2)]);
var state_15360__$1 = state_15360;
var statearr_15368_15399 = state_15360__$1;
(statearr_15368_15399[(2)] = inst_15350);

(statearr_15368_15399[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15361 === (13))){
var state_15360__$1 = state_15360;
var statearr_15369_15400 = state_15360__$1;
(statearr_15369_15400[(2)] = null);

(statearr_15369_15400[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15361 === (6))){
var inst_15325 = (state_15360[(8)]);
var inst_15346 = (inst_15325 > (0));
var state_15360__$1 = state_15360;
if(cljs.core.truth_(inst_15346)){
var statearr_15370_15401 = state_15360__$1;
(statearr_15370_15401[(1)] = (12));

} else {
var statearr_15371_15402 = state_15360__$1;
(statearr_15371_15402[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15361 === (3))){
var inst_15358 = (state_15360[(2)]);
var state_15360__$1 = state_15360;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15360__$1,inst_15358);
} else {
if((state_val_15361 === (12))){
var inst_15324 = (state_15360[(7)]);
var inst_15348 = cljs.core.vec.call(null,inst_15324);
var state_15360__$1 = state_15360;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15360__$1,(15),out,inst_15348);
} else {
if((state_val_15361 === (2))){
var state_15360__$1 = state_15360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15360__$1,(4),ch);
} else {
if((state_val_15361 === (11))){
var inst_15340 = (state_15360[(2)]);
var inst_15341 = (new Array(n));
var inst_15324 = inst_15341;
var inst_15325 = (0);
var state_15360__$1 = (function (){var statearr_15372 = state_15360;
(statearr_15372[(10)] = inst_15340);

(statearr_15372[(7)] = inst_15324);

(statearr_15372[(8)] = inst_15325);

return statearr_15372;
})();
var statearr_15373_15403 = state_15360__$1;
(statearr_15373_15403[(2)] = null);

(statearr_15373_15403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15361 === (9))){
var inst_15324 = (state_15360[(7)]);
var inst_15338 = cljs.core.vec.call(null,inst_15324);
var state_15360__$1 = state_15360;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15360__$1,(11),out,inst_15338);
} else {
if((state_val_15361 === (5))){
var inst_15333 = (state_15360[(11)]);
var inst_15324 = (state_15360[(7)]);
var inst_15325 = (state_15360[(8)]);
var inst_15328 = (state_15360[(9)]);
var inst_15332 = (inst_15324[inst_15325] = inst_15328);
var inst_15333__$1 = (inst_15325 + (1));
var inst_15334 = (inst_15333__$1 < n);
var state_15360__$1 = (function (){var statearr_15374 = state_15360;
(statearr_15374[(11)] = inst_15333__$1);

(statearr_15374[(12)] = inst_15332);

return statearr_15374;
})();
if(cljs.core.truth_(inst_15334)){
var statearr_15375_15404 = state_15360__$1;
(statearr_15375_15404[(1)] = (8));

} else {
var statearr_15376_15405 = state_15360__$1;
(statearr_15376_15405[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15361 === (14))){
var inst_15353 = (state_15360[(2)]);
var inst_15354 = cljs.core.async.close_BANG_.call(null,out);
var state_15360__$1 = (function (){var statearr_15378 = state_15360;
(statearr_15378[(13)] = inst_15353);

return statearr_15378;
})();
var statearr_15379_15406 = state_15360__$1;
(statearr_15379_15406[(2)] = inst_15354);

(statearr_15379_15406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15361 === (10))){
var inst_15344 = (state_15360[(2)]);
var state_15360__$1 = state_15360;
var statearr_15380_15407 = state_15360__$1;
(statearr_15380_15407[(2)] = inst_15344);

(statearr_15380_15407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15361 === (8))){
var inst_15333 = (state_15360[(11)]);
var inst_15324 = (state_15360[(7)]);
var tmp15377 = inst_15324;
var inst_15324__$1 = tmp15377;
var inst_15325 = inst_15333;
var state_15360__$1 = (function (){var statearr_15381 = state_15360;
(statearr_15381[(7)] = inst_15324__$1);

(statearr_15381[(8)] = inst_15325);

return statearr_15381;
})();
var statearr_15382_15408 = state_15360__$1;
(statearr_15382_15408[(2)] = null);

(statearr_15382_15408[(1)] = (2));


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
});})(c__10504__auto___15394,out))
;
return ((function (switch__10439__auto__,c__10504__auto___15394,out){
return (function() {
var cljs$core$async$state_machine__10440__auto__ = null;
var cljs$core$async$state_machine__10440__auto____0 = (function (){
var statearr_15386 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15386[(0)] = cljs$core$async$state_machine__10440__auto__);

(statearr_15386[(1)] = (1));

return statearr_15386;
});
var cljs$core$async$state_machine__10440__auto____1 = (function (state_15360){
while(true){
var ret_value__10441__auto__ = (function (){try{while(true){
var result__10442__auto__ = switch__10439__auto__.call(null,state_15360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10442__auto__;
}
break;
}
}catch (e15387){if((e15387 instanceof Object)){
var ex__10443__auto__ = e15387;
var statearr_15388_15409 = state_15360;
(statearr_15388_15409[(5)] = ex__10443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10441__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15410 = state_15360;
state_15360 = G__15410;
continue;
} else {
return ret_value__10441__auto__;
}
break;
}
});
cljs$core$async$state_machine__10440__auto__ = function(state_15360){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10440__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10440__auto____1.call(this,state_15360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10440__auto____0;
cljs$core$async$state_machine__10440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10440__auto____1;
return cljs$core$async$state_machine__10440__auto__;
})()
;})(switch__10439__auto__,c__10504__auto___15394,out))
})();
var state__10506__auto__ = (function (){var statearr_15389 = f__10505__auto__.call(null);
(statearr_15389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10504__auto___15394);

return statearr_15389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10506__auto__);
});})(c__10504__auto___15394,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args15411 = [];
var len__9156__auto___15485 = arguments.length;
var i__9157__auto___15486 = (0);
while(true){
if((i__9157__auto___15486 < len__9156__auto___15485)){
args15411.push((arguments[i__9157__auto___15486]));

var G__15487 = (i__9157__auto___15486 + (1));
i__9157__auto___15486 = G__15487;
continue;
} else {
}
break;
}

var G__15413 = args15411.length;
switch (G__15413) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15411.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10504__auto___15489 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10504__auto___15489,out){
return (function (){
var f__10505__auto__ = (function (){var switch__10439__auto__ = ((function (c__10504__auto___15489,out){
return (function (state_15455){
var state_val_15456 = (state_15455[(1)]);
if((state_val_15456 === (7))){
var inst_15451 = (state_15455[(2)]);
var state_15455__$1 = state_15455;
var statearr_15457_15490 = state_15455__$1;
(statearr_15457_15490[(2)] = inst_15451);

(statearr_15457_15490[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15456 === (1))){
var inst_15414 = [];
var inst_15415 = inst_15414;
var inst_15416 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15455__$1 = (function (){var statearr_15458 = state_15455;
(statearr_15458[(7)] = inst_15416);

(statearr_15458[(8)] = inst_15415);

return statearr_15458;
})();
var statearr_15459_15491 = state_15455__$1;
(statearr_15459_15491[(2)] = null);

(statearr_15459_15491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15456 === (4))){
var inst_15419 = (state_15455[(9)]);
var inst_15419__$1 = (state_15455[(2)]);
var inst_15420 = (inst_15419__$1 == null);
var inst_15421 = cljs.core.not.call(null,inst_15420);
var state_15455__$1 = (function (){var statearr_15460 = state_15455;
(statearr_15460[(9)] = inst_15419__$1);

return statearr_15460;
})();
if(inst_15421){
var statearr_15461_15492 = state_15455__$1;
(statearr_15461_15492[(1)] = (5));

} else {
var statearr_15462_15493 = state_15455__$1;
(statearr_15462_15493[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15456 === (15))){
var inst_15445 = (state_15455[(2)]);
var state_15455__$1 = state_15455;
var statearr_15463_15494 = state_15455__$1;
(statearr_15463_15494[(2)] = inst_15445);

(statearr_15463_15494[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15456 === (13))){
var state_15455__$1 = state_15455;
var statearr_15464_15495 = state_15455__$1;
(statearr_15464_15495[(2)] = null);

(statearr_15464_15495[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15456 === (6))){
var inst_15415 = (state_15455[(8)]);
var inst_15440 = inst_15415.length;
var inst_15441 = (inst_15440 > (0));
var state_15455__$1 = state_15455;
if(cljs.core.truth_(inst_15441)){
var statearr_15465_15496 = state_15455__$1;
(statearr_15465_15496[(1)] = (12));

} else {
var statearr_15466_15497 = state_15455__$1;
(statearr_15466_15497[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15456 === (3))){
var inst_15453 = (state_15455[(2)]);
var state_15455__$1 = state_15455;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15455__$1,inst_15453);
} else {
if((state_val_15456 === (12))){
var inst_15415 = (state_15455[(8)]);
var inst_15443 = cljs.core.vec.call(null,inst_15415);
var state_15455__$1 = state_15455;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15455__$1,(15),out,inst_15443);
} else {
if((state_val_15456 === (2))){
var state_15455__$1 = state_15455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15455__$1,(4),ch);
} else {
if((state_val_15456 === (11))){
var inst_15423 = (state_15455[(10)]);
var inst_15419 = (state_15455[(9)]);
var inst_15433 = (state_15455[(2)]);
var inst_15434 = [];
var inst_15435 = inst_15434.push(inst_15419);
var inst_15415 = inst_15434;
var inst_15416 = inst_15423;
var state_15455__$1 = (function (){var statearr_15467 = state_15455;
(statearr_15467[(7)] = inst_15416);

(statearr_15467[(8)] = inst_15415);

(statearr_15467[(11)] = inst_15435);

(statearr_15467[(12)] = inst_15433);

return statearr_15467;
})();
var statearr_15468_15498 = state_15455__$1;
(statearr_15468_15498[(2)] = null);

(statearr_15468_15498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15456 === (9))){
var inst_15415 = (state_15455[(8)]);
var inst_15431 = cljs.core.vec.call(null,inst_15415);
var state_15455__$1 = state_15455;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15455__$1,(11),out,inst_15431);
} else {
if((state_val_15456 === (5))){
var inst_15416 = (state_15455[(7)]);
var inst_15423 = (state_15455[(10)]);
var inst_15419 = (state_15455[(9)]);
var inst_15423__$1 = f.call(null,inst_15419);
var inst_15424 = cljs.core._EQ_.call(null,inst_15423__$1,inst_15416);
var inst_15425 = cljs.core.keyword_identical_QMARK_.call(null,inst_15416,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_15426 = (inst_15424) || (inst_15425);
var state_15455__$1 = (function (){var statearr_15469 = state_15455;
(statearr_15469[(10)] = inst_15423__$1);

return statearr_15469;
})();
if(cljs.core.truth_(inst_15426)){
var statearr_15470_15499 = state_15455__$1;
(statearr_15470_15499[(1)] = (8));

} else {
var statearr_15471_15500 = state_15455__$1;
(statearr_15471_15500[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15456 === (14))){
var inst_15448 = (state_15455[(2)]);
var inst_15449 = cljs.core.async.close_BANG_.call(null,out);
var state_15455__$1 = (function (){var statearr_15473 = state_15455;
(statearr_15473[(13)] = inst_15448);

return statearr_15473;
})();
var statearr_15474_15501 = state_15455__$1;
(statearr_15474_15501[(2)] = inst_15449);

(statearr_15474_15501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15456 === (10))){
var inst_15438 = (state_15455[(2)]);
var state_15455__$1 = state_15455;
var statearr_15475_15502 = state_15455__$1;
(statearr_15475_15502[(2)] = inst_15438);

(statearr_15475_15502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15456 === (8))){
var inst_15423 = (state_15455[(10)]);
var inst_15415 = (state_15455[(8)]);
var inst_15419 = (state_15455[(9)]);
var inst_15428 = inst_15415.push(inst_15419);
var tmp15472 = inst_15415;
var inst_15415__$1 = tmp15472;
var inst_15416 = inst_15423;
var state_15455__$1 = (function (){var statearr_15476 = state_15455;
(statearr_15476[(7)] = inst_15416);

(statearr_15476[(8)] = inst_15415__$1);

(statearr_15476[(14)] = inst_15428);

return statearr_15476;
})();
var statearr_15477_15503 = state_15455__$1;
(statearr_15477_15503[(2)] = null);

(statearr_15477_15503[(1)] = (2));


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
});})(c__10504__auto___15489,out))
;
return ((function (switch__10439__auto__,c__10504__auto___15489,out){
return (function() {
var cljs$core$async$state_machine__10440__auto__ = null;
var cljs$core$async$state_machine__10440__auto____0 = (function (){
var statearr_15481 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15481[(0)] = cljs$core$async$state_machine__10440__auto__);

(statearr_15481[(1)] = (1));

return statearr_15481;
});
var cljs$core$async$state_machine__10440__auto____1 = (function (state_15455){
while(true){
var ret_value__10441__auto__ = (function (){try{while(true){
var result__10442__auto__ = switch__10439__auto__.call(null,state_15455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10442__auto__;
}
break;
}
}catch (e15482){if((e15482 instanceof Object)){
var ex__10443__auto__ = e15482;
var statearr_15483_15504 = state_15455;
(statearr_15483_15504[(5)] = ex__10443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15482;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10441__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15505 = state_15455;
state_15455 = G__15505;
continue;
} else {
return ret_value__10441__auto__;
}
break;
}
});
cljs$core$async$state_machine__10440__auto__ = function(state_15455){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10440__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10440__auto____1.call(this,state_15455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10440__auto____0;
cljs$core$async$state_machine__10440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10440__auto____1;
return cljs$core$async$state_machine__10440__auto__;
})()
;})(switch__10439__auto__,c__10504__auto___15489,out))
})();
var state__10506__auto__ = (function (){var statearr_15484 = f__10505__auto__.call(null);
(statearr_15484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10504__auto___15489);

return statearr_15484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10506__auto__);
});})(c__10504__auto___15489,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map