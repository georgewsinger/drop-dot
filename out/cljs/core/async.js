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
var args49949 = [];
var len__9158__auto___49955 = arguments.length;
var i__9159__auto___49956 = (0);
while(true){
if((i__9159__auto___49956 < len__9158__auto___49955)){
args49949.push((arguments[i__9159__auto___49956]));

var G__49957 = (i__9159__auto___49956 + (1));
i__9159__auto___49956 = G__49957;
continue;
} else {
}
break;
}

var G__49951 = args49949.length;
switch (G__49951) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49949.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async49952 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49952 = (function (f,blockable,meta49953){
this.f = f;
this.blockable = blockable;
this.meta49953 = meta49953;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async49952.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49954,meta49953__$1){
var self__ = this;
var _49954__$1 = this;
return (new cljs.core.async.t_cljs$core$async49952(self__.f,self__.blockable,meta49953__$1));
});

cljs.core.async.t_cljs$core$async49952.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49954){
var self__ = this;
var _49954__$1 = this;
return self__.meta49953;
});

cljs.core.async.t_cljs$core$async49952.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async49952.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async49952.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async49952.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async49952.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta49953","meta49953",1844355901,null)], null);
});

cljs.core.async.t_cljs$core$async49952.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49952.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49952";

cljs.core.async.t_cljs$core$async49952.cljs$lang$ctorPrWriter = (function (this__8698__auto__,writer__8699__auto__,opt__8700__auto__){
return cljs.core._write.call(null,writer__8699__auto__,"cljs.core.async/t_cljs$core$async49952");
});

cljs.core.async.__GT_t_cljs$core$async49952 = (function cljs$core$async$__GT_t_cljs$core$async49952(f__$1,blockable__$1,meta49953){
return (new cljs.core.async.t_cljs$core$async49952(f__$1,blockable__$1,meta49953));
});

}

return (new cljs.core.async.t_cljs$core$async49952(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args49961 = [];
var len__9158__auto___49964 = arguments.length;
var i__9159__auto___49965 = (0);
while(true){
if((i__9159__auto___49965 < len__9158__auto___49964)){
args49961.push((arguments[i__9159__auto___49965]));

var G__49966 = (i__9159__auto___49965 + (1));
i__9159__auto___49965 = G__49966;
continue;
} else {
}
break;
}

var G__49963 = args49961.length;
switch (G__49963) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49961.length)].join('')));

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
var args49968 = [];
var len__9158__auto___49971 = arguments.length;
var i__9159__auto___49972 = (0);
while(true){
if((i__9159__auto___49972 < len__9158__auto___49971)){
args49968.push((arguments[i__9159__auto___49972]));

var G__49973 = (i__9159__auto___49972 + (1));
i__9159__auto___49972 = G__49973;
continue;
} else {
}
break;
}

var G__49970 = args49968.length;
switch (G__49970) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49968.length)].join('')));

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
var args49975 = [];
var len__9158__auto___49978 = arguments.length;
var i__9159__auto___49979 = (0);
while(true){
if((i__9159__auto___49979 < len__9158__auto___49978)){
args49975.push((arguments[i__9159__auto___49979]));

var G__49980 = (i__9159__auto___49979 + (1));
i__9159__auto___49979 = G__49980;
continue;
} else {
}
break;
}

var G__49977 = args49975.length;
switch (G__49977) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49975.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_49982 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_49982);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_49982,ret){
return (function (){
return fn1.call(null,val_49982);
});})(val_49982,ret))
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
var args49983 = [];
var len__9158__auto___49986 = arguments.length;
var i__9159__auto___49987 = (0);
while(true){
if((i__9159__auto___49987 < len__9158__auto___49986)){
args49983.push((arguments[i__9159__auto___49987]));

var G__49988 = (i__9159__auto___49987 + (1));
i__9159__auto___49987 = G__49988;
continue;
} else {
}
break;
}

var G__49985 = args49983.length;
switch (G__49985) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49983.length)].join('')));

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
var n__9003__auto___49990 = n;
var x_49991 = (0);
while(true){
if((x_49991 < n__9003__auto___49990)){
(a[x_49991] = (0));

var G__49992 = (x_49991 + (1));
x_49991 = G__49992;
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

var G__49993 = (i + (1));
i = G__49993;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async49997 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49997 = (function (alt_flag,flag,meta49998){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta49998 = meta49998;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async49997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_49999,meta49998__$1){
var self__ = this;
var _49999__$1 = this;
return (new cljs.core.async.t_cljs$core$async49997(self__.alt_flag,self__.flag,meta49998__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async49997.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_49999){
var self__ = this;
var _49999__$1 = this;
return self__.meta49998;
});})(flag))
;

cljs.core.async.t_cljs$core$async49997.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async49997.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async49997.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async49997.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async49997.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta49998","meta49998",-1110899337,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async49997.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49997.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49997";

cljs.core.async.t_cljs$core$async49997.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8698__auto__,writer__8699__auto__,opt__8700__auto__){
return cljs.core._write.call(null,writer__8699__auto__,"cljs.core.async/t_cljs$core$async49997");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async49997 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async49997(alt_flag__$1,flag__$1,meta49998){
return (new cljs.core.async.t_cljs$core$async49997(alt_flag__$1,flag__$1,meta49998));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async49997(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async50003 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50003 = (function (alt_handler,flag,cb,meta50004){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta50004 = meta50004;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async50003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50005,meta50004__$1){
var self__ = this;
var _50005__$1 = this;
return (new cljs.core.async.t_cljs$core$async50003(self__.alt_handler,self__.flag,self__.cb,meta50004__$1));
});

cljs.core.async.t_cljs$core$async50003.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50005){
var self__ = this;
var _50005__$1 = this;
return self__.meta50004;
});

cljs.core.async.t_cljs$core$async50003.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async50003.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async50003.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async50003.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async50003.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta50004","meta50004",-2115939587,null)], null);
});

cljs.core.async.t_cljs$core$async50003.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50003.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50003";

cljs.core.async.t_cljs$core$async50003.cljs$lang$ctorPrWriter = (function (this__8698__auto__,writer__8699__auto__,opt__8700__auto__){
return cljs.core._write.call(null,writer__8699__auto__,"cljs.core.async/t_cljs$core$async50003");
});

cljs.core.async.__GT_t_cljs$core$async50003 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async50003(alt_handler__$1,flag__$1,cb__$1,meta50004){
return (new cljs.core.async.t_cljs$core$async50003(alt_handler__$1,flag__$1,cb__$1,meta50004));
});

}

return (new cljs.core.async.t_cljs$core$async50003(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__50006_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50006_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__50007_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50007_SHARP_,port], null));
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
var G__50008 = (i + (1));
i = G__50008;
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
var len__9158__auto___50014 = arguments.length;
var i__9159__auto___50015 = (0);
while(true){
if((i__9159__auto___50015 < len__9158__auto___50014)){
args__9165__auto__.push((arguments[i__9159__auto___50015]));

var G__50016 = (i__9159__auto___50015 + (1));
i__9159__auto___50015 = G__50016;
continue;
} else {
}
break;
}

var argseq__9166__auto__ = ((((1) < args__9165__auto__.length))?(new cljs.core.IndexedSeq(args__9165__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9166__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__50011){
var map__50012 = p__50011;
var map__50012__$1 = ((((!((map__50012 == null)))?((((map__50012.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50012.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50012):map__50012);
var opts = map__50012__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq50009){
var G__50010 = cljs.core.first.call(null,seq50009);
var seq50009__$1 = cljs.core.next.call(null,seq50009);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__50010,seq50009__$1);
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
var args50017 = [];
var len__9158__auto___50067 = arguments.length;
var i__9159__auto___50068 = (0);
while(true){
if((i__9159__auto___50068 < len__9158__auto___50067)){
args50017.push((arguments[i__9159__auto___50068]));

var G__50069 = (i__9159__auto___50068 + (1));
i__9159__auto___50068 = G__50069;
continue;
} else {
}
break;
}

var G__50019 = args50017.length;
switch (G__50019) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50017.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10448__auto___50071 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___50071){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___50071){
return (function (state_50043){
var state_val_50044 = (state_50043[(1)]);
if((state_val_50044 === (7))){
var inst_50039 = (state_50043[(2)]);
var state_50043__$1 = state_50043;
var statearr_50045_50072 = state_50043__$1;
(statearr_50045_50072[(2)] = inst_50039);

(statearr_50045_50072[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50044 === (1))){
var state_50043__$1 = state_50043;
var statearr_50046_50073 = state_50043__$1;
(statearr_50046_50073[(2)] = null);

(statearr_50046_50073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50044 === (4))){
var inst_50022 = (state_50043[(7)]);
var inst_50022__$1 = (state_50043[(2)]);
var inst_50023 = (inst_50022__$1 == null);
var state_50043__$1 = (function (){var statearr_50047 = state_50043;
(statearr_50047[(7)] = inst_50022__$1);

return statearr_50047;
})();
if(cljs.core.truth_(inst_50023)){
var statearr_50048_50074 = state_50043__$1;
(statearr_50048_50074[(1)] = (5));

} else {
var statearr_50049_50075 = state_50043__$1;
(statearr_50049_50075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50044 === (13))){
var state_50043__$1 = state_50043;
var statearr_50050_50076 = state_50043__$1;
(statearr_50050_50076[(2)] = null);

(statearr_50050_50076[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50044 === (6))){
var inst_50022 = (state_50043[(7)]);
var state_50043__$1 = state_50043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50043__$1,(11),to,inst_50022);
} else {
if((state_val_50044 === (3))){
var inst_50041 = (state_50043[(2)]);
var state_50043__$1 = state_50043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50043__$1,inst_50041);
} else {
if((state_val_50044 === (12))){
var state_50043__$1 = state_50043;
var statearr_50051_50077 = state_50043__$1;
(statearr_50051_50077[(2)] = null);

(statearr_50051_50077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50044 === (2))){
var state_50043__$1 = state_50043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50043__$1,(4),from);
} else {
if((state_val_50044 === (11))){
var inst_50032 = (state_50043[(2)]);
var state_50043__$1 = state_50043;
if(cljs.core.truth_(inst_50032)){
var statearr_50052_50078 = state_50043__$1;
(statearr_50052_50078[(1)] = (12));

} else {
var statearr_50053_50079 = state_50043__$1;
(statearr_50053_50079[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50044 === (9))){
var state_50043__$1 = state_50043;
var statearr_50054_50080 = state_50043__$1;
(statearr_50054_50080[(2)] = null);

(statearr_50054_50080[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50044 === (5))){
var state_50043__$1 = state_50043;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50055_50081 = state_50043__$1;
(statearr_50055_50081[(1)] = (8));

} else {
var statearr_50056_50082 = state_50043__$1;
(statearr_50056_50082[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50044 === (14))){
var inst_50037 = (state_50043[(2)]);
var state_50043__$1 = state_50043;
var statearr_50057_50083 = state_50043__$1;
(statearr_50057_50083[(2)] = inst_50037);

(statearr_50057_50083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50044 === (10))){
var inst_50029 = (state_50043[(2)]);
var state_50043__$1 = state_50043;
var statearr_50058_50084 = state_50043__$1;
(statearr_50058_50084[(2)] = inst_50029);

(statearr_50058_50084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50044 === (8))){
var inst_50026 = cljs.core.async.close_BANG_.call(null,to);
var state_50043__$1 = state_50043;
var statearr_50059_50085 = state_50043__$1;
(statearr_50059_50085[(2)] = inst_50026);

(statearr_50059_50085[(1)] = (10));


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
});})(c__10448__auto___50071))
;
return ((function (switch__10427__auto__,c__10448__auto___50071){
return (function() {
var cljs$core$async$state_machine__10428__auto__ = null;
var cljs$core$async$state_machine__10428__auto____0 = (function (){
var statearr_50063 = [null,null,null,null,null,null,null,null];
(statearr_50063[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_50063[(1)] = (1));

return statearr_50063;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_50043){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_50043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e50064){if((e50064 instanceof Object)){
var ex__10431__auto__ = e50064;
var statearr_50065_50086 = state_50043;
(statearr_50065_50086[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50087 = state_50043;
state_50043 = G__50087;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_50043){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_50043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___50071))
})();
var state__10450__auto__ = (function (){var statearr_50066 = f__10449__auto__.call(null);
(statearr_50066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___50071);

return statearr_50066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___50071))
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
return (function (p__50271){
var vec__50272 = p__50271;
var v = cljs.core.nth.call(null,vec__50272,(0),null);
var p = cljs.core.nth.call(null,vec__50272,(1),null);
var job = vec__50272;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__10448__auto___50454 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___50454,res,vec__50272,v,p,job,jobs,results){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___50454,res,vec__50272,v,p,job,jobs,results){
return (function (state_50277){
var state_val_50278 = (state_50277[(1)]);
if((state_val_50278 === (1))){
var state_50277__$1 = state_50277;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50277__$1,(2),res,v);
} else {
if((state_val_50278 === (2))){
var inst_50274 = (state_50277[(2)]);
var inst_50275 = cljs.core.async.close_BANG_.call(null,res);
var state_50277__$1 = (function (){var statearr_50279 = state_50277;
(statearr_50279[(7)] = inst_50274);

return statearr_50279;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50277__$1,inst_50275);
} else {
return null;
}
}
});})(c__10448__auto___50454,res,vec__50272,v,p,job,jobs,results))
;
return ((function (switch__10427__auto__,c__10448__auto___50454,res,vec__50272,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0 = (function (){
var statearr_50283 = [null,null,null,null,null,null,null,null];
(statearr_50283[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__);

(statearr_50283[(1)] = (1));

return statearr_50283;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1 = (function (state_50277){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_50277);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e50284){if((e50284 instanceof Object)){
var ex__10431__auto__ = e50284;
var statearr_50285_50455 = state_50277;
(statearr_50285_50455[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50456 = state_50277;
state_50277 = G__50456;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__ = function(state_50277){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1.call(this,state_50277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___50454,res,vec__50272,v,p,job,jobs,results))
})();
var state__10450__auto__ = (function (){var statearr_50286 = f__10449__auto__.call(null);
(statearr_50286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___50454);

return statearr_50286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___50454,res,vec__50272,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__50287){
var vec__50288 = p__50287;
var v = cljs.core.nth.call(null,vec__50288,(0),null);
var p = cljs.core.nth.call(null,vec__50288,(1),null);
var job = vec__50288;
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
var n__9003__auto___50457 = n;
var __50458 = (0);
while(true){
if((__50458 < n__9003__auto___50457)){
var G__50289_50459 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__50289_50459) {
case "compute":
var c__10448__auto___50461 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__50458,c__10448__auto___50461,G__50289_50459,n__9003__auto___50457,jobs,results,process,async){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (__50458,c__10448__auto___50461,G__50289_50459,n__9003__auto___50457,jobs,results,process,async){
return (function (state_50302){
var state_val_50303 = (state_50302[(1)]);
if((state_val_50303 === (1))){
var state_50302__$1 = state_50302;
var statearr_50304_50462 = state_50302__$1;
(statearr_50304_50462[(2)] = null);

(statearr_50304_50462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50303 === (2))){
var state_50302__$1 = state_50302;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50302__$1,(4),jobs);
} else {
if((state_val_50303 === (3))){
var inst_50300 = (state_50302[(2)]);
var state_50302__$1 = state_50302;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50302__$1,inst_50300);
} else {
if((state_val_50303 === (4))){
var inst_50292 = (state_50302[(2)]);
var inst_50293 = process.call(null,inst_50292);
var state_50302__$1 = state_50302;
if(cljs.core.truth_(inst_50293)){
var statearr_50305_50463 = state_50302__$1;
(statearr_50305_50463[(1)] = (5));

} else {
var statearr_50306_50464 = state_50302__$1;
(statearr_50306_50464[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50303 === (5))){
var state_50302__$1 = state_50302;
var statearr_50307_50465 = state_50302__$1;
(statearr_50307_50465[(2)] = null);

(statearr_50307_50465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50303 === (6))){
var state_50302__$1 = state_50302;
var statearr_50308_50466 = state_50302__$1;
(statearr_50308_50466[(2)] = null);

(statearr_50308_50466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50303 === (7))){
var inst_50298 = (state_50302[(2)]);
var state_50302__$1 = state_50302;
var statearr_50309_50467 = state_50302__$1;
(statearr_50309_50467[(2)] = inst_50298);

(statearr_50309_50467[(1)] = (3));


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
});})(__50458,c__10448__auto___50461,G__50289_50459,n__9003__auto___50457,jobs,results,process,async))
;
return ((function (__50458,switch__10427__auto__,c__10448__auto___50461,G__50289_50459,n__9003__auto___50457,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0 = (function (){
var statearr_50313 = [null,null,null,null,null,null,null];
(statearr_50313[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__);

(statearr_50313[(1)] = (1));

return statearr_50313;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1 = (function (state_50302){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_50302);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e50314){if((e50314 instanceof Object)){
var ex__10431__auto__ = e50314;
var statearr_50315_50468 = state_50302;
(statearr_50315_50468[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50302);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50314;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50469 = state_50302;
state_50302 = G__50469;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__ = function(state_50302){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1.call(this,state_50302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__;
})()
;})(__50458,switch__10427__auto__,c__10448__auto___50461,G__50289_50459,n__9003__auto___50457,jobs,results,process,async))
})();
var state__10450__auto__ = (function (){var statearr_50316 = f__10449__auto__.call(null);
(statearr_50316[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___50461);

return statearr_50316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(__50458,c__10448__auto___50461,G__50289_50459,n__9003__auto___50457,jobs,results,process,async))
);


break;
case "async":
var c__10448__auto___50470 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__50458,c__10448__auto___50470,G__50289_50459,n__9003__auto___50457,jobs,results,process,async){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (__50458,c__10448__auto___50470,G__50289_50459,n__9003__auto___50457,jobs,results,process,async){
return (function (state_50329){
var state_val_50330 = (state_50329[(1)]);
if((state_val_50330 === (1))){
var state_50329__$1 = state_50329;
var statearr_50331_50471 = state_50329__$1;
(statearr_50331_50471[(2)] = null);

(statearr_50331_50471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50330 === (2))){
var state_50329__$1 = state_50329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50329__$1,(4),jobs);
} else {
if((state_val_50330 === (3))){
var inst_50327 = (state_50329[(2)]);
var state_50329__$1 = state_50329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50329__$1,inst_50327);
} else {
if((state_val_50330 === (4))){
var inst_50319 = (state_50329[(2)]);
var inst_50320 = async.call(null,inst_50319);
var state_50329__$1 = state_50329;
if(cljs.core.truth_(inst_50320)){
var statearr_50332_50472 = state_50329__$1;
(statearr_50332_50472[(1)] = (5));

} else {
var statearr_50333_50473 = state_50329__$1;
(statearr_50333_50473[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50330 === (5))){
var state_50329__$1 = state_50329;
var statearr_50334_50474 = state_50329__$1;
(statearr_50334_50474[(2)] = null);

(statearr_50334_50474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50330 === (6))){
var state_50329__$1 = state_50329;
var statearr_50335_50475 = state_50329__$1;
(statearr_50335_50475[(2)] = null);

(statearr_50335_50475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50330 === (7))){
var inst_50325 = (state_50329[(2)]);
var state_50329__$1 = state_50329;
var statearr_50336_50476 = state_50329__$1;
(statearr_50336_50476[(2)] = inst_50325);

(statearr_50336_50476[(1)] = (3));


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
});})(__50458,c__10448__auto___50470,G__50289_50459,n__9003__auto___50457,jobs,results,process,async))
;
return ((function (__50458,switch__10427__auto__,c__10448__auto___50470,G__50289_50459,n__9003__auto___50457,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0 = (function (){
var statearr_50340 = [null,null,null,null,null,null,null];
(statearr_50340[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__);

(statearr_50340[(1)] = (1));

return statearr_50340;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1 = (function (state_50329){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_50329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e50341){if((e50341 instanceof Object)){
var ex__10431__auto__ = e50341;
var statearr_50342_50477 = state_50329;
(statearr_50342_50477[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50478 = state_50329;
state_50329 = G__50478;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__ = function(state_50329){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1.call(this,state_50329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__;
})()
;})(__50458,switch__10427__auto__,c__10448__auto___50470,G__50289_50459,n__9003__auto___50457,jobs,results,process,async))
})();
var state__10450__auto__ = (function (){var statearr_50343 = f__10449__auto__.call(null);
(statearr_50343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___50470);

return statearr_50343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(__50458,c__10448__auto___50470,G__50289_50459,n__9003__auto___50457,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__50479 = (__50458 + (1));
__50458 = G__50479;
continue;
} else {
}
break;
}

var c__10448__auto___50480 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___50480,jobs,results,process,async){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___50480,jobs,results,process,async){
return (function (state_50365){
var state_val_50366 = (state_50365[(1)]);
if((state_val_50366 === (1))){
var state_50365__$1 = state_50365;
var statearr_50367_50481 = state_50365__$1;
(statearr_50367_50481[(2)] = null);

(statearr_50367_50481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50366 === (2))){
var state_50365__$1 = state_50365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50365__$1,(4),from);
} else {
if((state_val_50366 === (3))){
var inst_50363 = (state_50365[(2)]);
var state_50365__$1 = state_50365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50365__$1,inst_50363);
} else {
if((state_val_50366 === (4))){
var inst_50346 = (state_50365[(7)]);
var inst_50346__$1 = (state_50365[(2)]);
var inst_50347 = (inst_50346__$1 == null);
var state_50365__$1 = (function (){var statearr_50368 = state_50365;
(statearr_50368[(7)] = inst_50346__$1);

return statearr_50368;
})();
if(cljs.core.truth_(inst_50347)){
var statearr_50369_50482 = state_50365__$1;
(statearr_50369_50482[(1)] = (5));

} else {
var statearr_50370_50483 = state_50365__$1;
(statearr_50370_50483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50366 === (5))){
var inst_50349 = cljs.core.async.close_BANG_.call(null,jobs);
var state_50365__$1 = state_50365;
var statearr_50371_50484 = state_50365__$1;
(statearr_50371_50484[(2)] = inst_50349);

(statearr_50371_50484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50366 === (6))){
var inst_50346 = (state_50365[(7)]);
var inst_50351 = (state_50365[(8)]);
var inst_50351__$1 = cljs.core.async.chan.call(null,(1));
var inst_50352 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50353 = [inst_50346,inst_50351__$1];
var inst_50354 = (new cljs.core.PersistentVector(null,2,(5),inst_50352,inst_50353,null));
var state_50365__$1 = (function (){var statearr_50372 = state_50365;
(statearr_50372[(8)] = inst_50351__$1);

return statearr_50372;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50365__$1,(8),jobs,inst_50354);
} else {
if((state_val_50366 === (7))){
var inst_50361 = (state_50365[(2)]);
var state_50365__$1 = state_50365;
var statearr_50373_50485 = state_50365__$1;
(statearr_50373_50485[(2)] = inst_50361);

(statearr_50373_50485[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50366 === (8))){
var inst_50351 = (state_50365[(8)]);
var inst_50356 = (state_50365[(2)]);
var state_50365__$1 = (function (){var statearr_50374 = state_50365;
(statearr_50374[(9)] = inst_50356);

return statearr_50374;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50365__$1,(9),results,inst_50351);
} else {
if((state_val_50366 === (9))){
var inst_50358 = (state_50365[(2)]);
var state_50365__$1 = (function (){var statearr_50375 = state_50365;
(statearr_50375[(10)] = inst_50358);

return statearr_50375;
})();
var statearr_50376_50486 = state_50365__$1;
(statearr_50376_50486[(2)] = null);

(statearr_50376_50486[(1)] = (2));


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
});})(c__10448__auto___50480,jobs,results,process,async))
;
return ((function (switch__10427__auto__,c__10448__auto___50480,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0 = (function (){
var statearr_50380 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50380[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__);

(statearr_50380[(1)] = (1));

return statearr_50380;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1 = (function (state_50365){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_50365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e50381){if((e50381 instanceof Object)){
var ex__10431__auto__ = e50381;
var statearr_50382_50487 = state_50365;
(statearr_50382_50487[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50488 = state_50365;
state_50365 = G__50488;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__ = function(state_50365){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1.call(this,state_50365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___50480,jobs,results,process,async))
})();
var state__10450__auto__ = (function (){var statearr_50383 = f__10449__auto__.call(null);
(statearr_50383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___50480);

return statearr_50383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___50480,jobs,results,process,async))
);


var c__10448__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto__,jobs,results,process,async){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto__,jobs,results,process,async){
return (function (state_50421){
var state_val_50422 = (state_50421[(1)]);
if((state_val_50422 === (7))){
var inst_50417 = (state_50421[(2)]);
var state_50421__$1 = state_50421;
var statearr_50423_50489 = state_50421__$1;
(statearr_50423_50489[(2)] = inst_50417);

(statearr_50423_50489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50422 === (20))){
var state_50421__$1 = state_50421;
var statearr_50424_50490 = state_50421__$1;
(statearr_50424_50490[(2)] = null);

(statearr_50424_50490[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50422 === (1))){
var state_50421__$1 = state_50421;
var statearr_50425_50491 = state_50421__$1;
(statearr_50425_50491[(2)] = null);

(statearr_50425_50491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50422 === (4))){
var inst_50386 = (state_50421[(7)]);
var inst_50386__$1 = (state_50421[(2)]);
var inst_50387 = (inst_50386__$1 == null);
var state_50421__$1 = (function (){var statearr_50426 = state_50421;
(statearr_50426[(7)] = inst_50386__$1);

return statearr_50426;
})();
if(cljs.core.truth_(inst_50387)){
var statearr_50427_50492 = state_50421__$1;
(statearr_50427_50492[(1)] = (5));

} else {
var statearr_50428_50493 = state_50421__$1;
(statearr_50428_50493[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50422 === (15))){
var inst_50399 = (state_50421[(8)]);
var state_50421__$1 = state_50421;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50421__$1,(18),to,inst_50399);
} else {
if((state_val_50422 === (21))){
var inst_50412 = (state_50421[(2)]);
var state_50421__$1 = state_50421;
var statearr_50429_50494 = state_50421__$1;
(statearr_50429_50494[(2)] = inst_50412);

(statearr_50429_50494[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50422 === (13))){
var inst_50414 = (state_50421[(2)]);
var state_50421__$1 = (function (){var statearr_50430 = state_50421;
(statearr_50430[(9)] = inst_50414);

return statearr_50430;
})();
var statearr_50431_50495 = state_50421__$1;
(statearr_50431_50495[(2)] = null);

(statearr_50431_50495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50422 === (6))){
var inst_50386 = (state_50421[(7)]);
var state_50421__$1 = state_50421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50421__$1,(11),inst_50386);
} else {
if((state_val_50422 === (17))){
var inst_50407 = (state_50421[(2)]);
var state_50421__$1 = state_50421;
if(cljs.core.truth_(inst_50407)){
var statearr_50432_50496 = state_50421__$1;
(statearr_50432_50496[(1)] = (19));

} else {
var statearr_50433_50497 = state_50421__$1;
(statearr_50433_50497[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50422 === (3))){
var inst_50419 = (state_50421[(2)]);
var state_50421__$1 = state_50421;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50421__$1,inst_50419);
} else {
if((state_val_50422 === (12))){
var inst_50396 = (state_50421[(10)]);
var state_50421__$1 = state_50421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50421__$1,(14),inst_50396);
} else {
if((state_val_50422 === (2))){
var state_50421__$1 = state_50421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50421__$1,(4),results);
} else {
if((state_val_50422 === (19))){
var state_50421__$1 = state_50421;
var statearr_50434_50498 = state_50421__$1;
(statearr_50434_50498[(2)] = null);

(statearr_50434_50498[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50422 === (11))){
var inst_50396 = (state_50421[(2)]);
var state_50421__$1 = (function (){var statearr_50435 = state_50421;
(statearr_50435[(10)] = inst_50396);

return statearr_50435;
})();
var statearr_50436_50499 = state_50421__$1;
(statearr_50436_50499[(2)] = null);

(statearr_50436_50499[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50422 === (9))){
var state_50421__$1 = state_50421;
var statearr_50437_50500 = state_50421__$1;
(statearr_50437_50500[(2)] = null);

(statearr_50437_50500[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50422 === (5))){
var state_50421__$1 = state_50421;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50438_50501 = state_50421__$1;
(statearr_50438_50501[(1)] = (8));

} else {
var statearr_50439_50502 = state_50421__$1;
(statearr_50439_50502[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50422 === (14))){
var inst_50401 = (state_50421[(11)]);
var inst_50399 = (state_50421[(8)]);
var inst_50399__$1 = (state_50421[(2)]);
var inst_50400 = (inst_50399__$1 == null);
var inst_50401__$1 = cljs.core.not.call(null,inst_50400);
var state_50421__$1 = (function (){var statearr_50440 = state_50421;
(statearr_50440[(11)] = inst_50401__$1);

(statearr_50440[(8)] = inst_50399__$1);

return statearr_50440;
})();
if(inst_50401__$1){
var statearr_50441_50503 = state_50421__$1;
(statearr_50441_50503[(1)] = (15));

} else {
var statearr_50442_50504 = state_50421__$1;
(statearr_50442_50504[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50422 === (16))){
var inst_50401 = (state_50421[(11)]);
var state_50421__$1 = state_50421;
var statearr_50443_50505 = state_50421__$1;
(statearr_50443_50505[(2)] = inst_50401);

(statearr_50443_50505[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50422 === (10))){
var inst_50393 = (state_50421[(2)]);
var state_50421__$1 = state_50421;
var statearr_50444_50506 = state_50421__$1;
(statearr_50444_50506[(2)] = inst_50393);

(statearr_50444_50506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50422 === (18))){
var inst_50404 = (state_50421[(2)]);
var state_50421__$1 = state_50421;
var statearr_50445_50507 = state_50421__$1;
(statearr_50445_50507[(2)] = inst_50404);

(statearr_50445_50507[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50422 === (8))){
var inst_50390 = cljs.core.async.close_BANG_.call(null,to);
var state_50421__$1 = state_50421;
var statearr_50446_50508 = state_50421__$1;
(statearr_50446_50508[(2)] = inst_50390);

(statearr_50446_50508[(1)] = (10));


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
var statearr_50450 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50450[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__);

(statearr_50450[(1)] = (1));

return statearr_50450;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1 = (function (state_50421){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_50421);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e50451){if((e50451 instanceof Object)){
var ex__10431__auto__ = e50451;
var statearr_50452_50509 = state_50421;
(statearr_50452_50509[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50421);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50510 = state_50421;
state_50421 = G__50510;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__ = function(state_50421){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1.call(this,state_50421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto__,jobs,results,process,async))
})();
var state__10450__auto__ = (function (){var statearr_50453 = f__10449__auto__.call(null);
(statearr_50453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto__);

return statearr_50453;
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
var args50511 = [];
var len__9158__auto___50514 = arguments.length;
var i__9159__auto___50515 = (0);
while(true){
if((i__9159__auto___50515 < len__9158__auto___50514)){
args50511.push((arguments[i__9159__auto___50515]));

var G__50516 = (i__9159__auto___50515 + (1));
i__9159__auto___50515 = G__50516;
continue;
} else {
}
break;
}

var G__50513 = args50511.length;
switch (G__50513) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50511.length)].join('')));

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
var args50518 = [];
var len__9158__auto___50521 = arguments.length;
var i__9159__auto___50522 = (0);
while(true){
if((i__9159__auto___50522 < len__9158__auto___50521)){
args50518.push((arguments[i__9159__auto___50522]));

var G__50523 = (i__9159__auto___50522 + (1));
i__9159__auto___50522 = G__50523;
continue;
} else {
}
break;
}

var G__50520 = args50518.length;
switch (G__50520) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50518.length)].join('')));

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
var args50525 = [];
var len__9158__auto___50578 = arguments.length;
var i__9159__auto___50579 = (0);
while(true){
if((i__9159__auto___50579 < len__9158__auto___50578)){
args50525.push((arguments[i__9159__auto___50579]));

var G__50580 = (i__9159__auto___50579 + (1));
i__9159__auto___50579 = G__50580;
continue;
} else {
}
break;
}

var G__50527 = args50525.length;
switch (G__50527) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50525.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__10448__auto___50582 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___50582,tc,fc){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___50582,tc,fc){
return (function (state_50553){
var state_val_50554 = (state_50553[(1)]);
if((state_val_50554 === (7))){
var inst_50549 = (state_50553[(2)]);
var state_50553__$1 = state_50553;
var statearr_50555_50583 = state_50553__$1;
(statearr_50555_50583[(2)] = inst_50549);

(statearr_50555_50583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50554 === (1))){
var state_50553__$1 = state_50553;
var statearr_50556_50584 = state_50553__$1;
(statearr_50556_50584[(2)] = null);

(statearr_50556_50584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50554 === (4))){
var inst_50530 = (state_50553[(7)]);
var inst_50530__$1 = (state_50553[(2)]);
var inst_50531 = (inst_50530__$1 == null);
var state_50553__$1 = (function (){var statearr_50557 = state_50553;
(statearr_50557[(7)] = inst_50530__$1);

return statearr_50557;
})();
if(cljs.core.truth_(inst_50531)){
var statearr_50558_50585 = state_50553__$1;
(statearr_50558_50585[(1)] = (5));

} else {
var statearr_50559_50586 = state_50553__$1;
(statearr_50559_50586[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50554 === (13))){
var state_50553__$1 = state_50553;
var statearr_50560_50587 = state_50553__$1;
(statearr_50560_50587[(2)] = null);

(statearr_50560_50587[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50554 === (6))){
var inst_50530 = (state_50553[(7)]);
var inst_50536 = p.call(null,inst_50530);
var state_50553__$1 = state_50553;
if(cljs.core.truth_(inst_50536)){
var statearr_50561_50588 = state_50553__$1;
(statearr_50561_50588[(1)] = (9));

} else {
var statearr_50562_50589 = state_50553__$1;
(statearr_50562_50589[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50554 === (3))){
var inst_50551 = (state_50553[(2)]);
var state_50553__$1 = state_50553;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50553__$1,inst_50551);
} else {
if((state_val_50554 === (12))){
var state_50553__$1 = state_50553;
var statearr_50563_50590 = state_50553__$1;
(statearr_50563_50590[(2)] = null);

(statearr_50563_50590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50554 === (2))){
var state_50553__$1 = state_50553;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50553__$1,(4),ch);
} else {
if((state_val_50554 === (11))){
var inst_50530 = (state_50553[(7)]);
var inst_50540 = (state_50553[(2)]);
var state_50553__$1 = state_50553;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50553__$1,(8),inst_50540,inst_50530);
} else {
if((state_val_50554 === (9))){
var state_50553__$1 = state_50553;
var statearr_50564_50591 = state_50553__$1;
(statearr_50564_50591[(2)] = tc);

(statearr_50564_50591[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50554 === (5))){
var inst_50533 = cljs.core.async.close_BANG_.call(null,tc);
var inst_50534 = cljs.core.async.close_BANG_.call(null,fc);
var state_50553__$1 = (function (){var statearr_50565 = state_50553;
(statearr_50565[(8)] = inst_50533);

return statearr_50565;
})();
var statearr_50566_50592 = state_50553__$1;
(statearr_50566_50592[(2)] = inst_50534);

(statearr_50566_50592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50554 === (14))){
var inst_50547 = (state_50553[(2)]);
var state_50553__$1 = state_50553;
var statearr_50567_50593 = state_50553__$1;
(statearr_50567_50593[(2)] = inst_50547);

(statearr_50567_50593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50554 === (10))){
var state_50553__$1 = state_50553;
var statearr_50568_50594 = state_50553__$1;
(statearr_50568_50594[(2)] = fc);

(statearr_50568_50594[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50554 === (8))){
var inst_50542 = (state_50553[(2)]);
var state_50553__$1 = state_50553;
if(cljs.core.truth_(inst_50542)){
var statearr_50569_50595 = state_50553__$1;
(statearr_50569_50595[(1)] = (12));

} else {
var statearr_50570_50596 = state_50553__$1;
(statearr_50570_50596[(1)] = (13));

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
});})(c__10448__auto___50582,tc,fc))
;
return ((function (switch__10427__auto__,c__10448__auto___50582,tc,fc){
return (function() {
var cljs$core$async$state_machine__10428__auto__ = null;
var cljs$core$async$state_machine__10428__auto____0 = (function (){
var statearr_50574 = [null,null,null,null,null,null,null,null,null];
(statearr_50574[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_50574[(1)] = (1));

return statearr_50574;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_50553){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_50553);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e50575){if((e50575 instanceof Object)){
var ex__10431__auto__ = e50575;
var statearr_50576_50597 = state_50553;
(statearr_50576_50597[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50575;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50598 = state_50553;
state_50553 = G__50598;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_50553){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_50553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___50582,tc,fc))
})();
var state__10450__auto__ = (function (){var statearr_50577 = f__10449__auto__.call(null);
(statearr_50577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___50582);

return statearr_50577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___50582,tc,fc))
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
return (function (state_50662){
var state_val_50663 = (state_50662[(1)]);
if((state_val_50663 === (7))){
var inst_50658 = (state_50662[(2)]);
var state_50662__$1 = state_50662;
var statearr_50664_50685 = state_50662__$1;
(statearr_50664_50685[(2)] = inst_50658);

(statearr_50664_50685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50663 === (1))){
var inst_50642 = init;
var state_50662__$1 = (function (){var statearr_50665 = state_50662;
(statearr_50665[(7)] = inst_50642);

return statearr_50665;
})();
var statearr_50666_50686 = state_50662__$1;
(statearr_50666_50686[(2)] = null);

(statearr_50666_50686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50663 === (4))){
var inst_50645 = (state_50662[(8)]);
var inst_50645__$1 = (state_50662[(2)]);
var inst_50646 = (inst_50645__$1 == null);
var state_50662__$1 = (function (){var statearr_50667 = state_50662;
(statearr_50667[(8)] = inst_50645__$1);

return statearr_50667;
})();
if(cljs.core.truth_(inst_50646)){
var statearr_50668_50687 = state_50662__$1;
(statearr_50668_50687[(1)] = (5));

} else {
var statearr_50669_50688 = state_50662__$1;
(statearr_50669_50688[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50663 === (6))){
var inst_50649 = (state_50662[(9)]);
var inst_50645 = (state_50662[(8)]);
var inst_50642 = (state_50662[(7)]);
var inst_50649__$1 = f.call(null,inst_50642,inst_50645);
var inst_50650 = cljs.core.reduced_QMARK_.call(null,inst_50649__$1);
var state_50662__$1 = (function (){var statearr_50670 = state_50662;
(statearr_50670[(9)] = inst_50649__$1);

return statearr_50670;
})();
if(inst_50650){
var statearr_50671_50689 = state_50662__$1;
(statearr_50671_50689[(1)] = (8));

} else {
var statearr_50672_50690 = state_50662__$1;
(statearr_50672_50690[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50663 === (3))){
var inst_50660 = (state_50662[(2)]);
var state_50662__$1 = state_50662;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50662__$1,inst_50660);
} else {
if((state_val_50663 === (2))){
var state_50662__$1 = state_50662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50662__$1,(4),ch);
} else {
if((state_val_50663 === (9))){
var inst_50649 = (state_50662[(9)]);
var inst_50642 = inst_50649;
var state_50662__$1 = (function (){var statearr_50673 = state_50662;
(statearr_50673[(7)] = inst_50642);

return statearr_50673;
})();
var statearr_50674_50691 = state_50662__$1;
(statearr_50674_50691[(2)] = null);

(statearr_50674_50691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50663 === (5))){
var inst_50642 = (state_50662[(7)]);
var state_50662__$1 = state_50662;
var statearr_50675_50692 = state_50662__$1;
(statearr_50675_50692[(2)] = inst_50642);

(statearr_50675_50692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50663 === (10))){
var inst_50656 = (state_50662[(2)]);
var state_50662__$1 = state_50662;
var statearr_50676_50693 = state_50662__$1;
(statearr_50676_50693[(2)] = inst_50656);

(statearr_50676_50693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50663 === (8))){
var inst_50649 = (state_50662[(9)]);
var inst_50652 = cljs.core.deref.call(null,inst_50649);
var state_50662__$1 = state_50662;
var statearr_50677_50694 = state_50662__$1;
(statearr_50677_50694[(2)] = inst_50652);

(statearr_50677_50694[(1)] = (10));


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
var statearr_50681 = [null,null,null,null,null,null,null,null,null,null];
(statearr_50681[(0)] = cljs$core$async$reduce_$_state_machine__10428__auto__);

(statearr_50681[(1)] = (1));

return statearr_50681;
});
var cljs$core$async$reduce_$_state_machine__10428__auto____1 = (function (state_50662){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_50662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e50682){if((e50682 instanceof Object)){
var ex__10431__auto__ = e50682;
var statearr_50683_50695 = state_50662;
(statearr_50683_50695[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50696 = state_50662;
state_50662 = G__50696;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10428__auto__ = function(state_50662){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10428__auto____1.call(this,state_50662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10428__auto____0;
cljs$core$async$reduce_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10428__auto____1;
return cljs$core$async$reduce_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto__))
})();
var state__10450__auto__ = (function (){var statearr_50684 = f__10449__auto__.call(null);
(statearr_50684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto__);

return statearr_50684;
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
var args50697 = [];
var len__9158__auto___50749 = arguments.length;
var i__9159__auto___50750 = (0);
while(true){
if((i__9159__auto___50750 < len__9158__auto___50749)){
args50697.push((arguments[i__9159__auto___50750]));

var G__50751 = (i__9159__auto___50750 + (1));
i__9159__auto___50750 = G__50751;
continue;
} else {
}
break;
}

var G__50699 = args50697.length;
switch (G__50699) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50697.length)].join('')));

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
return (function (state_50724){
var state_val_50725 = (state_50724[(1)]);
if((state_val_50725 === (7))){
var inst_50706 = (state_50724[(2)]);
var state_50724__$1 = state_50724;
var statearr_50726_50753 = state_50724__$1;
(statearr_50726_50753[(2)] = inst_50706);

(statearr_50726_50753[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50725 === (1))){
var inst_50700 = cljs.core.seq.call(null,coll);
var inst_50701 = inst_50700;
var state_50724__$1 = (function (){var statearr_50727 = state_50724;
(statearr_50727[(7)] = inst_50701);

return statearr_50727;
})();
var statearr_50728_50754 = state_50724__$1;
(statearr_50728_50754[(2)] = null);

(statearr_50728_50754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50725 === (4))){
var inst_50701 = (state_50724[(7)]);
var inst_50704 = cljs.core.first.call(null,inst_50701);
var state_50724__$1 = state_50724;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50724__$1,(7),ch,inst_50704);
} else {
if((state_val_50725 === (13))){
var inst_50718 = (state_50724[(2)]);
var state_50724__$1 = state_50724;
var statearr_50729_50755 = state_50724__$1;
(statearr_50729_50755[(2)] = inst_50718);

(statearr_50729_50755[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50725 === (6))){
var inst_50709 = (state_50724[(2)]);
var state_50724__$1 = state_50724;
if(cljs.core.truth_(inst_50709)){
var statearr_50730_50756 = state_50724__$1;
(statearr_50730_50756[(1)] = (8));

} else {
var statearr_50731_50757 = state_50724__$1;
(statearr_50731_50757[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50725 === (3))){
var inst_50722 = (state_50724[(2)]);
var state_50724__$1 = state_50724;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50724__$1,inst_50722);
} else {
if((state_val_50725 === (12))){
var state_50724__$1 = state_50724;
var statearr_50732_50758 = state_50724__$1;
(statearr_50732_50758[(2)] = null);

(statearr_50732_50758[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50725 === (2))){
var inst_50701 = (state_50724[(7)]);
var state_50724__$1 = state_50724;
if(cljs.core.truth_(inst_50701)){
var statearr_50733_50759 = state_50724__$1;
(statearr_50733_50759[(1)] = (4));

} else {
var statearr_50734_50760 = state_50724__$1;
(statearr_50734_50760[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50725 === (11))){
var inst_50715 = cljs.core.async.close_BANG_.call(null,ch);
var state_50724__$1 = state_50724;
var statearr_50735_50761 = state_50724__$1;
(statearr_50735_50761[(2)] = inst_50715);

(statearr_50735_50761[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50725 === (9))){
var state_50724__$1 = state_50724;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50736_50762 = state_50724__$1;
(statearr_50736_50762[(1)] = (11));

} else {
var statearr_50737_50763 = state_50724__$1;
(statearr_50737_50763[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50725 === (5))){
var inst_50701 = (state_50724[(7)]);
var state_50724__$1 = state_50724;
var statearr_50738_50764 = state_50724__$1;
(statearr_50738_50764[(2)] = inst_50701);

(statearr_50738_50764[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50725 === (10))){
var inst_50720 = (state_50724[(2)]);
var state_50724__$1 = state_50724;
var statearr_50739_50765 = state_50724__$1;
(statearr_50739_50765[(2)] = inst_50720);

(statearr_50739_50765[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50725 === (8))){
var inst_50701 = (state_50724[(7)]);
var inst_50711 = cljs.core.next.call(null,inst_50701);
var inst_50701__$1 = inst_50711;
var state_50724__$1 = (function (){var statearr_50740 = state_50724;
(statearr_50740[(7)] = inst_50701__$1);

return statearr_50740;
})();
var statearr_50741_50766 = state_50724__$1;
(statearr_50741_50766[(2)] = null);

(statearr_50741_50766[(1)] = (2));


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
var statearr_50745 = [null,null,null,null,null,null,null,null];
(statearr_50745[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_50745[(1)] = (1));

return statearr_50745;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_50724){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_50724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e50746){if((e50746 instanceof Object)){
var ex__10431__auto__ = e50746;
var statearr_50747_50767 = state_50724;
(statearr_50747_50767[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50768 = state_50724;
state_50724 = G__50768;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_50724){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_50724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto__))
})();
var state__10450__auto__ = (function (){var statearr_50748 = f__10449__auto__.call(null);
(statearr_50748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto__);

return statearr_50748;
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
if(typeof cljs.core.async.t_cljs$core$async50990 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50990 = (function (mult,ch,cs,meta50991){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta50991 = meta50991;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async50990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_50992,meta50991__$1){
var self__ = this;
var _50992__$1 = this;
return (new cljs.core.async.t_cljs$core$async50990(self__.mult,self__.ch,self__.cs,meta50991__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async50990.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_50992){
var self__ = this;
var _50992__$1 = this;
return self__.meta50991;
});})(cs))
;

cljs.core.async.t_cljs$core$async50990.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async50990.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async50990.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async50990.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async50990.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async50990.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async50990.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta50991","meta50991",-1110700453,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async50990.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50990.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50990";

cljs.core.async.t_cljs$core$async50990.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8698__auto__,writer__8699__auto__,opt__8700__auto__){
return cljs.core._write.call(null,writer__8699__auto__,"cljs.core.async/t_cljs$core$async50990");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async50990 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async50990(mult__$1,ch__$1,cs__$1,meta50991){
return (new cljs.core.async.t_cljs$core$async50990(mult__$1,ch__$1,cs__$1,meta50991));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async50990(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10448__auto___51211 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___51211,cs,m,dchan,dctr,done){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___51211,cs,m,dchan,dctr,done){
return (function (state_51123){
var state_val_51124 = (state_51123[(1)]);
if((state_val_51124 === (7))){
var inst_51119 = (state_51123[(2)]);
var state_51123__$1 = state_51123;
var statearr_51125_51212 = state_51123__$1;
(statearr_51125_51212[(2)] = inst_51119);

(statearr_51125_51212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51124 === (20))){
var inst_51024 = (state_51123[(7)]);
var inst_51034 = cljs.core.first.call(null,inst_51024);
var inst_51035 = cljs.core.nth.call(null,inst_51034,(0),null);
var inst_51036 = cljs.core.nth.call(null,inst_51034,(1),null);
var state_51123__$1 = (function (){var statearr_51126 = state_51123;
(statearr_51126[(8)] = inst_51035);

return statearr_51126;
})();
if(cljs.core.truth_(inst_51036)){
var statearr_51127_51213 = state_51123__$1;
(statearr_51127_51213[(1)] = (22));

} else {
var statearr_51128_51214 = state_51123__$1;
(statearr_51128_51214[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51124 === (27))){
var inst_50995 = (state_51123[(9)]);
var inst_51064 = (state_51123[(10)]);
var inst_51071 = (state_51123[(11)]);
var inst_51066 = (state_51123[(12)]);
var inst_51071__$1 = cljs.core._nth.call(null,inst_51064,inst_51066);
var inst_51072 = cljs.core.async.put_BANG_.call(null,inst_51071__$1,inst_50995,done);
var state_51123__$1 = (function (){var statearr_51129 = state_51123;
(statearr_51129[(11)] = inst_51071__$1);

return statearr_51129;
})();
if(cljs.core.truth_(inst_51072)){
var statearr_51130_51215 = state_51123__$1;
(statearr_51130_51215[(1)] = (30));

} else {
var statearr_51131_51216 = state_51123__$1;
(statearr_51131_51216[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51124 === (1))){
var state_51123__$1 = state_51123;
var statearr_51132_51217 = state_51123__$1;
(statearr_51132_51217[(2)] = null);

(statearr_51132_51217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51124 === (24))){
var inst_51024 = (state_51123[(7)]);
var inst_51041 = (state_51123[(2)]);
var inst_51042 = cljs.core.next.call(null,inst_51024);
var inst_51004 = inst_51042;
var inst_51005 = null;
var inst_51006 = (0);
var inst_51007 = (0);
var state_51123__$1 = (function (){var statearr_51133 = state_51123;
(statearr_51133[(13)] = inst_51005);

(statearr_51133[(14)] = inst_51007);

(statearr_51133[(15)] = inst_51004);

(statearr_51133[(16)] = inst_51006);

(statearr_51133[(17)] = inst_51041);

return statearr_51133;
})();
var statearr_51134_51218 = state_51123__$1;
(statearr_51134_51218[(2)] = null);

(statearr_51134_51218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51124 === (39))){
var state_51123__$1 = state_51123;
var statearr_51138_51219 = state_51123__$1;
(statearr_51138_51219[(2)] = null);

(statearr_51138_51219[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51124 === (4))){
var inst_50995 = (state_51123[(9)]);
var inst_50995__$1 = (state_51123[(2)]);
var inst_50996 = (inst_50995__$1 == null);
var state_51123__$1 = (function (){var statearr_51139 = state_51123;
(statearr_51139[(9)] = inst_50995__$1);

return statearr_51139;
})();
if(cljs.core.truth_(inst_50996)){
var statearr_51140_51220 = state_51123__$1;
(statearr_51140_51220[(1)] = (5));

} else {
var statearr_51141_51221 = state_51123__$1;
(statearr_51141_51221[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51124 === (15))){
var inst_51005 = (state_51123[(13)]);
var inst_51007 = (state_51123[(14)]);
var inst_51004 = (state_51123[(15)]);
var inst_51006 = (state_51123[(16)]);
var inst_51020 = (state_51123[(2)]);
var inst_51021 = (inst_51007 + (1));
var tmp51135 = inst_51005;
var tmp51136 = inst_51004;
var tmp51137 = inst_51006;
var inst_51004__$1 = tmp51136;
var inst_51005__$1 = tmp51135;
var inst_51006__$1 = tmp51137;
var inst_51007__$1 = inst_51021;
var state_51123__$1 = (function (){var statearr_51142 = state_51123;
(statearr_51142[(13)] = inst_51005__$1);

(statearr_51142[(18)] = inst_51020);

(statearr_51142[(14)] = inst_51007__$1);

(statearr_51142[(15)] = inst_51004__$1);

(statearr_51142[(16)] = inst_51006__$1);

return statearr_51142;
})();
var statearr_51143_51222 = state_51123__$1;
(statearr_51143_51222[(2)] = null);

(statearr_51143_51222[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51124 === (21))){
var inst_51045 = (state_51123[(2)]);
var state_51123__$1 = state_51123;
var statearr_51147_51223 = state_51123__$1;
(statearr_51147_51223[(2)] = inst_51045);

(statearr_51147_51223[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51124 === (31))){
var inst_51071 = (state_51123[(11)]);
var inst_51075 = done.call(null,null);
var inst_51076 = cljs.core.async.untap_STAR_.call(null,m,inst_51071);
var state_51123__$1 = (function (){var statearr_51148 = state_51123;
(statearr_51148[(19)] = inst_51075);

return statearr_51148;
})();
var statearr_51149_51224 = state_51123__$1;
(statearr_51149_51224[(2)] = inst_51076);

(statearr_51149_51224[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51124 === (32))){
var inst_51064 = (state_51123[(10)]);
var inst_51063 = (state_51123[(20)]);
var inst_51065 = (state_51123[(21)]);
var inst_51066 = (state_51123[(12)]);
var inst_51078 = (state_51123[(2)]);
var inst_51079 = (inst_51066 + (1));
var tmp51144 = inst_51064;
var tmp51145 = inst_51063;
var tmp51146 = inst_51065;
var inst_51063__$1 = tmp51145;
var inst_51064__$1 = tmp51144;
var inst_51065__$1 = tmp51146;
var inst_51066__$1 = inst_51079;
var state_51123__$1 = (function (){var statearr_51150 = state_51123;
(statearr_51150[(10)] = inst_51064__$1);

(statearr_51150[(20)] = inst_51063__$1);

(statearr_51150[(21)] = inst_51065__$1);

(statearr_51150[(22)] = inst_51078);

(statearr_51150[(12)] = inst_51066__$1);

return statearr_51150;
})();
var statearr_51151_51225 = state_51123__$1;
(statearr_51151_51225[(2)] = null);

(statearr_51151_51225[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51124 === (40))){
var inst_51091 = (state_51123[(23)]);
var inst_51095 = done.call(null,null);
var inst_51096 = cljs.core.async.untap_STAR_.call(null,m,inst_51091);
var state_51123__$1 = (function (){var statearr_51152 = state_51123;
(statearr_51152[(24)] = inst_51095);

return statearr_51152;
})();
var statearr_51153_51226 = state_51123__$1;
(statearr_51153_51226[(2)] = inst_51096);

(statearr_51153_51226[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51124 === (33))){
var inst_51082 = (state_51123[(25)]);
var inst_51084 = cljs.core.chunked_seq_QMARK_.call(null,inst_51082);
var state_51123__$1 = state_51123;
if(inst_51084){
var statearr_51154_51227 = state_51123__$1;
(statearr_51154_51227[(1)] = (36));

} else {
var statearr_51155_51228 = state_51123__$1;
(statearr_51155_51228[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51124 === (13))){
var inst_51014 = (state_51123[(26)]);
var inst_51017 = cljs.core.async.close_BANG_.call(null,inst_51014);
var state_51123__$1 = state_51123;
var statearr_51156_51229 = state_51123__$1;
(statearr_51156_51229[(2)] = inst_51017);

(statearr_51156_51229[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51124 === (22))){
var inst_51035 = (state_51123[(8)]);
var inst_51038 = cljs.core.async.close_BANG_.call(null,inst_51035);
var state_51123__$1 = state_51123;
var statearr_51157_51230 = state_51123__$1;
(statearr_51157_51230[(2)] = inst_51038);

(statearr_51157_51230[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51124 === (36))){
var inst_51082 = (state_51123[(25)]);
var inst_51086 = cljs.core.chunk_first.call(null,inst_51082);
var inst_51087 = cljs.core.chunk_rest.call(null,inst_51082);
var inst_51088 = cljs.core.count.call(null,inst_51086);
var inst_51063 = inst_51087;
var inst_51064 = inst_51086;
var inst_51065 = inst_51088;
var inst_51066 = (0);
var state_51123__$1 = (function (){var statearr_51158 = state_51123;
(statearr_51158[(10)] = inst_51064);

(statearr_51158[(20)] = inst_51063);

(statearr_51158[(21)] = inst_51065);

(statearr_51158[(12)] = inst_51066);

return statearr_51158;
})();
var statearr_51159_51231 = state_51123__$1;
(statearr_51159_51231[(2)] = null);

(statearr_51159_51231[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51124 === (41))){
var inst_51082 = (state_51123[(25)]);
var inst_51098 = (state_51123[(2)]);
var inst_51099 = cljs.core.next.call(null,inst_51082);
var inst_51063 = inst_51099;
var inst_51064 = null;
var inst_51065 = (0);
var inst_51066 = (0);
var state_51123__$1 = (function (){var statearr_51160 = state_51123;
(statearr_51160[(10)] = inst_51064);

(statearr_51160[(20)] = inst_51063);

(statearr_51160[(27)] = inst_51098);

(statearr_51160[(21)] = inst_51065);

(statearr_51160[(12)] = inst_51066);

return statearr_51160;
})();
var statearr_51161_51232 = state_51123__$1;
(statearr_51161_51232[(2)] = null);

(statearr_51161_51232[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51124 === (43))){
var state_51123__$1 = state_51123;
var statearr_51162_51233 = state_51123__$1;
(statearr_51162_51233[(2)] = null);

(statearr_51162_51233[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51124 === (29))){
var inst_51107 = (state_51123[(2)]);
var state_51123__$1 = state_51123;
var statearr_51163_51234 = state_51123__$1;
(statearr_51163_51234[(2)] = inst_51107);

(statearr_51163_51234[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51124 === (44))){
var inst_51116 = (state_51123[(2)]);
var state_51123__$1 = (function (){var statearr_51164 = state_51123;
(statearr_51164[(28)] = inst_51116);

return statearr_51164;
})();
var statearr_51165_51235 = state_51123__$1;
(statearr_51165_51235[(2)] = null);

(statearr_51165_51235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51124 === (6))){
var inst_51055 = (state_51123[(29)]);
var inst_51054 = cljs.core.deref.call(null,cs);
var inst_51055__$1 = cljs.core.keys.call(null,inst_51054);
var inst_51056 = cljs.core.count.call(null,inst_51055__$1);
var inst_51057 = cljs.core.reset_BANG_.call(null,dctr,inst_51056);
var inst_51062 = cljs.core.seq.call(null,inst_51055__$1);
var inst_51063 = inst_51062;
var inst_51064 = null;
var inst_51065 = (0);
var inst_51066 = (0);
var state_51123__$1 = (function (){var statearr_51166 = state_51123;
(statearr_51166[(10)] = inst_51064);

(statearr_51166[(20)] = inst_51063);

(statearr_51166[(30)] = inst_51057);

(statearr_51166[(21)] = inst_51065);

(statearr_51166[(29)] = inst_51055__$1);

(statearr_51166[(12)] = inst_51066);

return statearr_51166;
})();
var statearr_51167_51236 = state_51123__$1;
(statearr_51167_51236[(2)] = null);

(statearr_51167_51236[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51124 === (28))){
var inst_51063 = (state_51123[(20)]);
var inst_51082 = (state_51123[(25)]);
var inst_51082__$1 = cljs.core.seq.call(null,inst_51063);
var state_51123__$1 = (function (){var statearr_51168 = state_51123;
(statearr_51168[(25)] = inst_51082__$1);

return statearr_51168;
})();
if(inst_51082__$1){
var statearr_51169_51237 = state_51123__$1;
(statearr_51169_51237[(1)] = (33));

} else {
var statearr_51170_51238 = state_51123__$1;
(statearr_51170_51238[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51124 === (25))){
var inst_51065 = (state_51123[(21)]);
var inst_51066 = (state_51123[(12)]);
var inst_51068 = (inst_51066 < inst_51065);
var inst_51069 = inst_51068;
var state_51123__$1 = state_51123;
if(cljs.core.truth_(inst_51069)){
var statearr_51171_51239 = state_51123__$1;
(statearr_51171_51239[(1)] = (27));

} else {
var statearr_51172_51240 = state_51123__$1;
(statearr_51172_51240[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51124 === (34))){
var state_51123__$1 = state_51123;
var statearr_51173_51241 = state_51123__$1;
(statearr_51173_51241[(2)] = null);

(statearr_51173_51241[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51124 === (17))){
var state_51123__$1 = state_51123;
var statearr_51174_51242 = state_51123__$1;
(statearr_51174_51242[(2)] = null);

(statearr_51174_51242[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51124 === (3))){
var inst_51121 = (state_51123[(2)]);
var state_51123__$1 = state_51123;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51123__$1,inst_51121);
} else {
if((state_val_51124 === (12))){
var inst_51050 = (state_51123[(2)]);
var state_51123__$1 = state_51123;
var statearr_51175_51243 = state_51123__$1;
(statearr_51175_51243[(2)] = inst_51050);

(statearr_51175_51243[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51124 === (2))){
var state_51123__$1 = state_51123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51123__$1,(4),ch);
} else {
if((state_val_51124 === (23))){
var state_51123__$1 = state_51123;
var statearr_51176_51244 = state_51123__$1;
(statearr_51176_51244[(2)] = null);

(statearr_51176_51244[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51124 === (35))){
var inst_51105 = (state_51123[(2)]);
var state_51123__$1 = state_51123;
var statearr_51177_51245 = state_51123__$1;
(statearr_51177_51245[(2)] = inst_51105);

(statearr_51177_51245[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51124 === (19))){
var inst_51024 = (state_51123[(7)]);
var inst_51028 = cljs.core.chunk_first.call(null,inst_51024);
var inst_51029 = cljs.core.chunk_rest.call(null,inst_51024);
var inst_51030 = cljs.core.count.call(null,inst_51028);
var inst_51004 = inst_51029;
var inst_51005 = inst_51028;
var inst_51006 = inst_51030;
var inst_51007 = (0);
var state_51123__$1 = (function (){var statearr_51178 = state_51123;
(statearr_51178[(13)] = inst_51005);

(statearr_51178[(14)] = inst_51007);

(statearr_51178[(15)] = inst_51004);

(statearr_51178[(16)] = inst_51006);

return statearr_51178;
})();
var statearr_51179_51246 = state_51123__$1;
(statearr_51179_51246[(2)] = null);

(statearr_51179_51246[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51124 === (11))){
var inst_51024 = (state_51123[(7)]);
var inst_51004 = (state_51123[(15)]);
var inst_51024__$1 = cljs.core.seq.call(null,inst_51004);
var state_51123__$1 = (function (){var statearr_51180 = state_51123;
(statearr_51180[(7)] = inst_51024__$1);

return statearr_51180;
})();
if(inst_51024__$1){
var statearr_51181_51247 = state_51123__$1;
(statearr_51181_51247[(1)] = (16));

} else {
var statearr_51182_51248 = state_51123__$1;
(statearr_51182_51248[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51124 === (9))){
var inst_51052 = (state_51123[(2)]);
var state_51123__$1 = state_51123;
var statearr_51183_51249 = state_51123__$1;
(statearr_51183_51249[(2)] = inst_51052);

(statearr_51183_51249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51124 === (5))){
var inst_51002 = cljs.core.deref.call(null,cs);
var inst_51003 = cljs.core.seq.call(null,inst_51002);
var inst_51004 = inst_51003;
var inst_51005 = null;
var inst_51006 = (0);
var inst_51007 = (0);
var state_51123__$1 = (function (){var statearr_51184 = state_51123;
(statearr_51184[(13)] = inst_51005);

(statearr_51184[(14)] = inst_51007);

(statearr_51184[(15)] = inst_51004);

(statearr_51184[(16)] = inst_51006);

return statearr_51184;
})();
var statearr_51185_51250 = state_51123__$1;
(statearr_51185_51250[(2)] = null);

(statearr_51185_51250[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51124 === (14))){
var state_51123__$1 = state_51123;
var statearr_51186_51251 = state_51123__$1;
(statearr_51186_51251[(2)] = null);

(statearr_51186_51251[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51124 === (45))){
var inst_51113 = (state_51123[(2)]);
var state_51123__$1 = state_51123;
var statearr_51187_51252 = state_51123__$1;
(statearr_51187_51252[(2)] = inst_51113);

(statearr_51187_51252[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51124 === (26))){
var inst_51055 = (state_51123[(29)]);
var inst_51109 = (state_51123[(2)]);
var inst_51110 = cljs.core.seq.call(null,inst_51055);
var state_51123__$1 = (function (){var statearr_51188 = state_51123;
(statearr_51188[(31)] = inst_51109);

return statearr_51188;
})();
if(inst_51110){
var statearr_51189_51253 = state_51123__$1;
(statearr_51189_51253[(1)] = (42));

} else {
var statearr_51190_51254 = state_51123__$1;
(statearr_51190_51254[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51124 === (16))){
var inst_51024 = (state_51123[(7)]);
var inst_51026 = cljs.core.chunked_seq_QMARK_.call(null,inst_51024);
var state_51123__$1 = state_51123;
if(inst_51026){
var statearr_51191_51255 = state_51123__$1;
(statearr_51191_51255[(1)] = (19));

} else {
var statearr_51192_51256 = state_51123__$1;
(statearr_51192_51256[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51124 === (38))){
var inst_51102 = (state_51123[(2)]);
var state_51123__$1 = state_51123;
var statearr_51193_51257 = state_51123__$1;
(statearr_51193_51257[(2)] = inst_51102);

(statearr_51193_51257[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51124 === (30))){
var state_51123__$1 = state_51123;
var statearr_51194_51258 = state_51123__$1;
(statearr_51194_51258[(2)] = null);

(statearr_51194_51258[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51124 === (10))){
var inst_51005 = (state_51123[(13)]);
var inst_51007 = (state_51123[(14)]);
var inst_51013 = cljs.core._nth.call(null,inst_51005,inst_51007);
var inst_51014 = cljs.core.nth.call(null,inst_51013,(0),null);
var inst_51015 = cljs.core.nth.call(null,inst_51013,(1),null);
var state_51123__$1 = (function (){var statearr_51195 = state_51123;
(statearr_51195[(26)] = inst_51014);

return statearr_51195;
})();
if(cljs.core.truth_(inst_51015)){
var statearr_51196_51259 = state_51123__$1;
(statearr_51196_51259[(1)] = (13));

} else {
var statearr_51197_51260 = state_51123__$1;
(statearr_51197_51260[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51124 === (18))){
var inst_51048 = (state_51123[(2)]);
var state_51123__$1 = state_51123;
var statearr_51198_51261 = state_51123__$1;
(statearr_51198_51261[(2)] = inst_51048);

(statearr_51198_51261[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51124 === (42))){
var state_51123__$1 = state_51123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51123__$1,(45),dchan);
} else {
if((state_val_51124 === (37))){
var inst_50995 = (state_51123[(9)]);
var inst_51091 = (state_51123[(23)]);
var inst_51082 = (state_51123[(25)]);
var inst_51091__$1 = cljs.core.first.call(null,inst_51082);
var inst_51092 = cljs.core.async.put_BANG_.call(null,inst_51091__$1,inst_50995,done);
var state_51123__$1 = (function (){var statearr_51199 = state_51123;
(statearr_51199[(23)] = inst_51091__$1);

return statearr_51199;
})();
if(cljs.core.truth_(inst_51092)){
var statearr_51200_51262 = state_51123__$1;
(statearr_51200_51262[(1)] = (39));

} else {
var statearr_51201_51263 = state_51123__$1;
(statearr_51201_51263[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51124 === (8))){
var inst_51007 = (state_51123[(14)]);
var inst_51006 = (state_51123[(16)]);
var inst_51009 = (inst_51007 < inst_51006);
var inst_51010 = inst_51009;
var state_51123__$1 = state_51123;
if(cljs.core.truth_(inst_51010)){
var statearr_51202_51264 = state_51123__$1;
(statearr_51202_51264[(1)] = (10));

} else {
var statearr_51203_51265 = state_51123__$1;
(statearr_51203_51265[(1)] = (11));

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
});})(c__10448__auto___51211,cs,m,dchan,dctr,done))
;
return ((function (switch__10427__auto__,c__10448__auto___51211,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10428__auto__ = null;
var cljs$core$async$mult_$_state_machine__10428__auto____0 = (function (){
var statearr_51207 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51207[(0)] = cljs$core$async$mult_$_state_machine__10428__auto__);

(statearr_51207[(1)] = (1));

return statearr_51207;
});
var cljs$core$async$mult_$_state_machine__10428__auto____1 = (function (state_51123){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_51123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e51208){if((e51208 instanceof Object)){
var ex__10431__auto__ = e51208;
var statearr_51209_51266 = state_51123;
(statearr_51209_51266[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51267 = state_51123;
state_51123 = G__51267;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10428__auto__ = function(state_51123){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10428__auto____1.call(this,state_51123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10428__auto____0;
cljs$core$async$mult_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10428__auto____1;
return cljs$core$async$mult_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___51211,cs,m,dchan,dctr,done))
})();
var state__10450__auto__ = (function (){var statearr_51210 = f__10449__auto__.call(null);
(statearr_51210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___51211);

return statearr_51210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___51211,cs,m,dchan,dctr,done))
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
var args51268 = [];
var len__9158__auto___51271 = arguments.length;
var i__9159__auto___51272 = (0);
while(true){
if((i__9159__auto___51272 < len__9158__auto___51271)){
args51268.push((arguments[i__9159__auto___51272]));

var G__51273 = (i__9159__auto___51272 + (1));
i__9159__auto___51272 = G__51273;
continue;
} else {
}
break;
}

var G__51270 = args51268.length;
switch (G__51270) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51268.length)].join('')));

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
var len__9158__auto___51285 = arguments.length;
var i__9159__auto___51286 = (0);
while(true){
if((i__9159__auto___51286 < len__9158__auto___51285)){
args__9165__auto__.push((arguments[i__9159__auto___51286]));

var G__51287 = (i__9159__auto___51286 + (1));
i__9159__auto___51286 = G__51287;
continue;
} else {
}
break;
}

var argseq__9166__auto__ = ((((3) < args__9165__auto__.length))?(new cljs.core.IndexedSeq(args__9165__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9166__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__51279){
var map__51280 = p__51279;
var map__51280__$1 = ((((!((map__51280 == null)))?((((map__51280.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51280.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51280):map__51280);
var opts = map__51280__$1;
var statearr_51282_51288 = state;
(statearr_51282_51288[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__51280,map__51280__$1,opts){
return (function (val){
var statearr_51283_51289 = state;
(statearr_51283_51289[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__51280,map__51280__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_51284_51290 = state;
(statearr_51284_51290[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq51275){
var G__51276 = cljs.core.first.call(null,seq51275);
var seq51275__$1 = cljs.core.next.call(null,seq51275);
var G__51277 = cljs.core.first.call(null,seq51275__$1);
var seq51275__$2 = cljs.core.next.call(null,seq51275__$1);
var G__51278 = cljs.core.first.call(null,seq51275__$2);
var seq51275__$3 = cljs.core.next.call(null,seq51275__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__51276,G__51277,G__51278,seq51275__$3);
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
if(typeof cljs.core.async.t_cljs$core$async51454 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51454 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta51455){
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
this.meta51455 = meta51455;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async51454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_51456,meta51455__$1){
var self__ = this;
var _51456__$1 = this;
return (new cljs.core.async.t_cljs$core$async51454(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta51455__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51454.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_51456){
var self__ = this;
var _51456__$1 = this;
return self__.meta51455;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51454.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async51454.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51454.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async51454.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51454.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51454.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51454.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51454.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async51454.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta51455","meta51455",2138887621,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51454.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51454.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51454";

cljs.core.async.t_cljs$core$async51454.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8698__auto__,writer__8699__auto__,opt__8700__auto__){
return cljs.core._write.call(null,writer__8699__auto__,"cljs.core.async/t_cljs$core$async51454");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async51454 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async51454(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta51455){
return (new cljs.core.async.t_cljs$core$async51454(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta51455));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async51454(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10448__auto___51617 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___51617,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___51617,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_51554){
var state_val_51555 = (state_51554[(1)]);
if((state_val_51555 === (7))){
var inst_51472 = (state_51554[(2)]);
var state_51554__$1 = state_51554;
var statearr_51556_51618 = state_51554__$1;
(statearr_51556_51618[(2)] = inst_51472);

(statearr_51556_51618[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51555 === (20))){
var inst_51484 = (state_51554[(7)]);
var state_51554__$1 = state_51554;
var statearr_51557_51619 = state_51554__$1;
(statearr_51557_51619[(2)] = inst_51484);

(statearr_51557_51619[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51555 === (27))){
var state_51554__$1 = state_51554;
var statearr_51558_51620 = state_51554__$1;
(statearr_51558_51620[(2)] = null);

(statearr_51558_51620[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51555 === (1))){
var inst_51460 = (state_51554[(8)]);
var inst_51460__$1 = calc_state.call(null);
var inst_51462 = (inst_51460__$1 == null);
var inst_51463 = cljs.core.not.call(null,inst_51462);
var state_51554__$1 = (function (){var statearr_51559 = state_51554;
(statearr_51559[(8)] = inst_51460__$1);

return statearr_51559;
})();
if(inst_51463){
var statearr_51560_51621 = state_51554__$1;
(statearr_51560_51621[(1)] = (2));

} else {
var statearr_51561_51622 = state_51554__$1;
(statearr_51561_51622[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51555 === (24))){
var inst_51507 = (state_51554[(9)]);
var inst_51514 = (state_51554[(10)]);
var inst_51528 = (state_51554[(11)]);
var inst_51528__$1 = inst_51507.call(null,inst_51514);
var state_51554__$1 = (function (){var statearr_51562 = state_51554;
(statearr_51562[(11)] = inst_51528__$1);

return statearr_51562;
})();
if(cljs.core.truth_(inst_51528__$1)){
var statearr_51563_51623 = state_51554__$1;
(statearr_51563_51623[(1)] = (29));

} else {
var statearr_51564_51624 = state_51554__$1;
(statearr_51564_51624[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51555 === (4))){
var inst_51475 = (state_51554[(2)]);
var state_51554__$1 = state_51554;
if(cljs.core.truth_(inst_51475)){
var statearr_51565_51625 = state_51554__$1;
(statearr_51565_51625[(1)] = (8));

} else {
var statearr_51566_51626 = state_51554__$1;
(statearr_51566_51626[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51555 === (15))){
var inst_51501 = (state_51554[(2)]);
var state_51554__$1 = state_51554;
if(cljs.core.truth_(inst_51501)){
var statearr_51567_51627 = state_51554__$1;
(statearr_51567_51627[(1)] = (19));

} else {
var statearr_51568_51628 = state_51554__$1;
(statearr_51568_51628[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51555 === (21))){
var inst_51506 = (state_51554[(12)]);
var inst_51506__$1 = (state_51554[(2)]);
var inst_51507 = cljs.core.get.call(null,inst_51506__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51508 = cljs.core.get.call(null,inst_51506__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51509 = cljs.core.get.call(null,inst_51506__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_51554__$1 = (function (){var statearr_51569 = state_51554;
(statearr_51569[(13)] = inst_51508);

(statearr_51569[(9)] = inst_51507);

(statearr_51569[(12)] = inst_51506__$1);

return statearr_51569;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_51554__$1,(22),inst_51509);
} else {
if((state_val_51555 === (31))){
var inst_51536 = (state_51554[(2)]);
var state_51554__$1 = state_51554;
if(cljs.core.truth_(inst_51536)){
var statearr_51570_51629 = state_51554__$1;
(statearr_51570_51629[(1)] = (32));

} else {
var statearr_51571_51630 = state_51554__$1;
(statearr_51571_51630[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51555 === (32))){
var inst_51513 = (state_51554[(14)]);
var state_51554__$1 = state_51554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51554__$1,(35),out,inst_51513);
} else {
if((state_val_51555 === (33))){
var inst_51506 = (state_51554[(12)]);
var inst_51484 = inst_51506;
var state_51554__$1 = (function (){var statearr_51572 = state_51554;
(statearr_51572[(7)] = inst_51484);

return statearr_51572;
})();
var statearr_51573_51631 = state_51554__$1;
(statearr_51573_51631[(2)] = null);

(statearr_51573_51631[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51555 === (13))){
var inst_51484 = (state_51554[(7)]);
var inst_51491 = inst_51484.cljs$lang$protocol_mask$partition0$;
var inst_51492 = (inst_51491 & (64));
var inst_51493 = inst_51484.cljs$core$ISeq$;
var inst_51494 = (inst_51492) || (inst_51493);
var state_51554__$1 = state_51554;
if(cljs.core.truth_(inst_51494)){
var statearr_51574_51632 = state_51554__$1;
(statearr_51574_51632[(1)] = (16));

} else {
var statearr_51575_51633 = state_51554__$1;
(statearr_51575_51633[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51555 === (22))){
var inst_51514 = (state_51554[(10)]);
var inst_51513 = (state_51554[(14)]);
var inst_51512 = (state_51554[(2)]);
var inst_51513__$1 = cljs.core.nth.call(null,inst_51512,(0),null);
var inst_51514__$1 = cljs.core.nth.call(null,inst_51512,(1),null);
var inst_51515 = (inst_51513__$1 == null);
var inst_51516 = cljs.core._EQ_.call(null,inst_51514__$1,change);
var inst_51517 = (inst_51515) || (inst_51516);
var state_51554__$1 = (function (){var statearr_51576 = state_51554;
(statearr_51576[(10)] = inst_51514__$1);

(statearr_51576[(14)] = inst_51513__$1);

return statearr_51576;
})();
if(cljs.core.truth_(inst_51517)){
var statearr_51577_51634 = state_51554__$1;
(statearr_51577_51634[(1)] = (23));

} else {
var statearr_51578_51635 = state_51554__$1;
(statearr_51578_51635[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51555 === (36))){
var inst_51506 = (state_51554[(12)]);
var inst_51484 = inst_51506;
var state_51554__$1 = (function (){var statearr_51579 = state_51554;
(statearr_51579[(7)] = inst_51484);

return statearr_51579;
})();
var statearr_51580_51636 = state_51554__$1;
(statearr_51580_51636[(2)] = null);

(statearr_51580_51636[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51555 === (29))){
var inst_51528 = (state_51554[(11)]);
var state_51554__$1 = state_51554;
var statearr_51581_51637 = state_51554__$1;
(statearr_51581_51637[(2)] = inst_51528);

(statearr_51581_51637[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51555 === (6))){
var state_51554__$1 = state_51554;
var statearr_51582_51638 = state_51554__$1;
(statearr_51582_51638[(2)] = false);

(statearr_51582_51638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51555 === (28))){
var inst_51524 = (state_51554[(2)]);
var inst_51525 = calc_state.call(null);
var inst_51484 = inst_51525;
var state_51554__$1 = (function (){var statearr_51583 = state_51554;
(statearr_51583[(7)] = inst_51484);

(statearr_51583[(15)] = inst_51524);

return statearr_51583;
})();
var statearr_51584_51639 = state_51554__$1;
(statearr_51584_51639[(2)] = null);

(statearr_51584_51639[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51555 === (25))){
var inst_51550 = (state_51554[(2)]);
var state_51554__$1 = state_51554;
var statearr_51585_51640 = state_51554__$1;
(statearr_51585_51640[(2)] = inst_51550);

(statearr_51585_51640[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51555 === (34))){
var inst_51548 = (state_51554[(2)]);
var state_51554__$1 = state_51554;
var statearr_51586_51641 = state_51554__$1;
(statearr_51586_51641[(2)] = inst_51548);

(statearr_51586_51641[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51555 === (17))){
var state_51554__$1 = state_51554;
var statearr_51587_51642 = state_51554__$1;
(statearr_51587_51642[(2)] = false);

(statearr_51587_51642[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51555 === (3))){
var state_51554__$1 = state_51554;
var statearr_51588_51643 = state_51554__$1;
(statearr_51588_51643[(2)] = false);

(statearr_51588_51643[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51555 === (12))){
var inst_51552 = (state_51554[(2)]);
var state_51554__$1 = state_51554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51554__$1,inst_51552);
} else {
if((state_val_51555 === (2))){
var inst_51460 = (state_51554[(8)]);
var inst_51465 = inst_51460.cljs$lang$protocol_mask$partition0$;
var inst_51466 = (inst_51465 & (64));
var inst_51467 = inst_51460.cljs$core$ISeq$;
var inst_51468 = (inst_51466) || (inst_51467);
var state_51554__$1 = state_51554;
if(cljs.core.truth_(inst_51468)){
var statearr_51589_51644 = state_51554__$1;
(statearr_51589_51644[(1)] = (5));

} else {
var statearr_51590_51645 = state_51554__$1;
(statearr_51590_51645[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51555 === (23))){
var inst_51513 = (state_51554[(14)]);
var inst_51519 = (inst_51513 == null);
var state_51554__$1 = state_51554;
if(cljs.core.truth_(inst_51519)){
var statearr_51591_51646 = state_51554__$1;
(statearr_51591_51646[(1)] = (26));

} else {
var statearr_51592_51647 = state_51554__$1;
(statearr_51592_51647[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51555 === (35))){
var inst_51539 = (state_51554[(2)]);
var state_51554__$1 = state_51554;
if(cljs.core.truth_(inst_51539)){
var statearr_51593_51648 = state_51554__$1;
(statearr_51593_51648[(1)] = (36));

} else {
var statearr_51594_51649 = state_51554__$1;
(statearr_51594_51649[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51555 === (19))){
var inst_51484 = (state_51554[(7)]);
var inst_51503 = cljs.core.apply.call(null,cljs.core.hash_map,inst_51484);
var state_51554__$1 = state_51554;
var statearr_51595_51650 = state_51554__$1;
(statearr_51595_51650[(2)] = inst_51503);

(statearr_51595_51650[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51555 === (11))){
var inst_51484 = (state_51554[(7)]);
var inst_51488 = (inst_51484 == null);
var inst_51489 = cljs.core.not.call(null,inst_51488);
var state_51554__$1 = state_51554;
if(inst_51489){
var statearr_51596_51651 = state_51554__$1;
(statearr_51596_51651[(1)] = (13));

} else {
var statearr_51597_51652 = state_51554__$1;
(statearr_51597_51652[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51555 === (9))){
var inst_51460 = (state_51554[(8)]);
var state_51554__$1 = state_51554;
var statearr_51598_51653 = state_51554__$1;
(statearr_51598_51653[(2)] = inst_51460);

(statearr_51598_51653[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51555 === (5))){
var state_51554__$1 = state_51554;
var statearr_51599_51654 = state_51554__$1;
(statearr_51599_51654[(2)] = true);

(statearr_51599_51654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51555 === (14))){
var state_51554__$1 = state_51554;
var statearr_51600_51655 = state_51554__$1;
(statearr_51600_51655[(2)] = false);

(statearr_51600_51655[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51555 === (26))){
var inst_51514 = (state_51554[(10)]);
var inst_51521 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_51514);
var state_51554__$1 = state_51554;
var statearr_51601_51656 = state_51554__$1;
(statearr_51601_51656[(2)] = inst_51521);

(statearr_51601_51656[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51555 === (16))){
var state_51554__$1 = state_51554;
var statearr_51602_51657 = state_51554__$1;
(statearr_51602_51657[(2)] = true);

(statearr_51602_51657[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51555 === (38))){
var inst_51544 = (state_51554[(2)]);
var state_51554__$1 = state_51554;
var statearr_51603_51658 = state_51554__$1;
(statearr_51603_51658[(2)] = inst_51544);

(statearr_51603_51658[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51555 === (30))){
var inst_51508 = (state_51554[(13)]);
var inst_51507 = (state_51554[(9)]);
var inst_51514 = (state_51554[(10)]);
var inst_51531 = cljs.core.empty_QMARK_.call(null,inst_51507);
var inst_51532 = inst_51508.call(null,inst_51514);
var inst_51533 = cljs.core.not.call(null,inst_51532);
var inst_51534 = (inst_51531) && (inst_51533);
var state_51554__$1 = state_51554;
var statearr_51604_51659 = state_51554__$1;
(statearr_51604_51659[(2)] = inst_51534);

(statearr_51604_51659[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51555 === (10))){
var inst_51460 = (state_51554[(8)]);
var inst_51480 = (state_51554[(2)]);
var inst_51481 = cljs.core.get.call(null,inst_51480,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51482 = cljs.core.get.call(null,inst_51480,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51483 = cljs.core.get.call(null,inst_51480,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_51484 = inst_51460;
var state_51554__$1 = (function (){var statearr_51605 = state_51554;
(statearr_51605[(7)] = inst_51484);

(statearr_51605[(16)] = inst_51483);

(statearr_51605[(17)] = inst_51482);

(statearr_51605[(18)] = inst_51481);

return statearr_51605;
})();
var statearr_51606_51660 = state_51554__$1;
(statearr_51606_51660[(2)] = null);

(statearr_51606_51660[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51555 === (18))){
var inst_51498 = (state_51554[(2)]);
var state_51554__$1 = state_51554;
var statearr_51607_51661 = state_51554__$1;
(statearr_51607_51661[(2)] = inst_51498);

(statearr_51607_51661[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51555 === (37))){
var state_51554__$1 = state_51554;
var statearr_51608_51662 = state_51554__$1;
(statearr_51608_51662[(2)] = null);

(statearr_51608_51662[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51555 === (8))){
var inst_51460 = (state_51554[(8)]);
var inst_51477 = cljs.core.apply.call(null,cljs.core.hash_map,inst_51460);
var state_51554__$1 = state_51554;
var statearr_51609_51663 = state_51554__$1;
(statearr_51609_51663[(2)] = inst_51477);

(statearr_51609_51663[(1)] = (10));


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
});})(c__10448__auto___51617,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10427__auto__,c__10448__auto___51617,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10428__auto__ = null;
var cljs$core$async$mix_$_state_machine__10428__auto____0 = (function (){
var statearr_51613 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51613[(0)] = cljs$core$async$mix_$_state_machine__10428__auto__);

(statearr_51613[(1)] = (1));

return statearr_51613;
});
var cljs$core$async$mix_$_state_machine__10428__auto____1 = (function (state_51554){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_51554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e51614){if((e51614 instanceof Object)){
var ex__10431__auto__ = e51614;
var statearr_51615_51664 = state_51554;
(statearr_51615_51664[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51665 = state_51554;
state_51554 = G__51665;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10428__auto__ = function(state_51554){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10428__auto____1.call(this,state_51554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10428__auto____0;
cljs$core$async$mix_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10428__auto____1;
return cljs$core$async$mix_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___51617,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10450__auto__ = (function (){var statearr_51616 = f__10449__auto__.call(null);
(statearr_51616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___51617);

return statearr_51616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___51617,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args51666 = [];
var len__9158__auto___51669 = arguments.length;
var i__9159__auto___51670 = (0);
while(true){
if((i__9159__auto___51670 < len__9158__auto___51669)){
args51666.push((arguments[i__9159__auto___51670]));

var G__51671 = (i__9159__auto___51670 + (1));
i__9159__auto___51670 = G__51671;
continue;
} else {
}
break;
}

var G__51668 = args51666.length;
switch (G__51668) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51666.length)].join('')));

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
var args51674 = [];
var len__9158__auto___51799 = arguments.length;
var i__9159__auto___51800 = (0);
while(true){
if((i__9159__auto___51800 < len__9158__auto___51799)){
args51674.push((arguments[i__9159__auto___51800]));

var G__51801 = (i__9159__auto___51800 + (1));
i__9159__auto___51800 = G__51801;
continue;
} else {
}
break;
}

var G__51676 = args51674.length;
switch (G__51676) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51674.length)].join('')));

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
return (function (p1__51673_SHARP_){
if(cljs.core.truth_(p1__51673_SHARP_.call(null,topic))){
return p1__51673_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__51673_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__8100__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async51677 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51677 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta51678){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta51678 = meta51678;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async51677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_51679,meta51678__$1){
var self__ = this;
var _51679__$1 = this;
return (new cljs.core.async.t_cljs$core$async51677(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta51678__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51677.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_51679){
var self__ = this;
var _51679__$1 = this;
return self__.meta51678;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51677.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async51677.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51677.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async51677.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51677.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async51677.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51677.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51677.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta51678","meta51678",-1611821792,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51677.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51677.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51677";

cljs.core.async.t_cljs$core$async51677.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8698__auto__,writer__8699__auto__,opt__8700__auto__){
return cljs.core._write.call(null,writer__8699__auto__,"cljs.core.async/t_cljs$core$async51677");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async51677 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async51677(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51678){
return (new cljs.core.async.t_cljs$core$async51677(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51678));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async51677(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10448__auto___51803 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___51803,mults,ensure_mult,p){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___51803,mults,ensure_mult,p){
return (function (state_51751){
var state_val_51752 = (state_51751[(1)]);
if((state_val_51752 === (7))){
var inst_51747 = (state_51751[(2)]);
var state_51751__$1 = state_51751;
var statearr_51753_51804 = state_51751__$1;
(statearr_51753_51804[(2)] = inst_51747);

(statearr_51753_51804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51752 === (20))){
var state_51751__$1 = state_51751;
var statearr_51754_51805 = state_51751__$1;
(statearr_51754_51805[(2)] = null);

(statearr_51754_51805[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51752 === (1))){
var state_51751__$1 = state_51751;
var statearr_51755_51806 = state_51751__$1;
(statearr_51755_51806[(2)] = null);

(statearr_51755_51806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51752 === (24))){
var inst_51730 = (state_51751[(7)]);
var inst_51739 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_51730);
var state_51751__$1 = state_51751;
var statearr_51756_51807 = state_51751__$1;
(statearr_51756_51807[(2)] = inst_51739);

(statearr_51756_51807[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51752 === (4))){
var inst_51682 = (state_51751[(8)]);
var inst_51682__$1 = (state_51751[(2)]);
var inst_51683 = (inst_51682__$1 == null);
var state_51751__$1 = (function (){var statearr_51757 = state_51751;
(statearr_51757[(8)] = inst_51682__$1);

return statearr_51757;
})();
if(cljs.core.truth_(inst_51683)){
var statearr_51758_51808 = state_51751__$1;
(statearr_51758_51808[(1)] = (5));

} else {
var statearr_51759_51809 = state_51751__$1;
(statearr_51759_51809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51752 === (15))){
var inst_51724 = (state_51751[(2)]);
var state_51751__$1 = state_51751;
var statearr_51760_51810 = state_51751__$1;
(statearr_51760_51810[(2)] = inst_51724);

(statearr_51760_51810[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51752 === (21))){
var inst_51744 = (state_51751[(2)]);
var state_51751__$1 = (function (){var statearr_51761 = state_51751;
(statearr_51761[(9)] = inst_51744);

return statearr_51761;
})();
var statearr_51762_51811 = state_51751__$1;
(statearr_51762_51811[(2)] = null);

(statearr_51762_51811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51752 === (13))){
var inst_51706 = (state_51751[(10)]);
var inst_51708 = cljs.core.chunked_seq_QMARK_.call(null,inst_51706);
var state_51751__$1 = state_51751;
if(inst_51708){
var statearr_51763_51812 = state_51751__$1;
(statearr_51763_51812[(1)] = (16));

} else {
var statearr_51764_51813 = state_51751__$1;
(statearr_51764_51813[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51752 === (22))){
var inst_51736 = (state_51751[(2)]);
var state_51751__$1 = state_51751;
if(cljs.core.truth_(inst_51736)){
var statearr_51765_51814 = state_51751__$1;
(statearr_51765_51814[(1)] = (23));

} else {
var statearr_51766_51815 = state_51751__$1;
(statearr_51766_51815[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51752 === (6))){
var inst_51682 = (state_51751[(8)]);
var inst_51730 = (state_51751[(7)]);
var inst_51732 = (state_51751[(11)]);
var inst_51730__$1 = topic_fn.call(null,inst_51682);
var inst_51731 = cljs.core.deref.call(null,mults);
var inst_51732__$1 = cljs.core.get.call(null,inst_51731,inst_51730__$1);
var state_51751__$1 = (function (){var statearr_51767 = state_51751;
(statearr_51767[(7)] = inst_51730__$1);

(statearr_51767[(11)] = inst_51732__$1);

return statearr_51767;
})();
if(cljs.core.truth_(inst_51732__$1)){
var statearr_51768_51816 = state_51751__$1;
(statearr_51768_51816[(1)] = (19));

} else {
var statearr_51769_51817 = state_51751__$1;
(statearr_51769_51817[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51752 === (25))){
var inst_51741 = (state_51751[(2)]);
var state_51751__$1 = state_51751;
var statearr_51770_51818 = state_51751__$1;
(statearr_51770_51818[(2)] = inst_51741);

(statearr_51770_51818[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51752 === (17))){
var inst_51706 = (state_51751[(10)]);
var inst_51715 = cljs.core.first.call(null,inst_51706);
var inst_51716 = cljs.core.async.muxch_STAR_.call(null,inst_51715);
var inst_51717 = cljs.core.async.close_BANG_.call(null,inst_51716);
var inst_51718 = cljs.core.next.call(null,inst_51706);
var inst_51692 = inst_51718;
var inst_51693 = null;
var inst_51694 = (0);
var inst_51695 = (0);
var state_51751__$1 = (function (){var statearr_51771 = state_51751;
(statearr_51771[(12)] = inst_51695);

(statearr_51771[(13)] = inst_51693);

(statearr_51771[(14)] = inst_51694);

(statearr_51771[(15)] = inst_51692);

(statearr_51771[(16)] = inst_51717);

return statearr_51771;
})();
var statearr_51772_51819 = state_51751__$1;
(statearr_51772_51819[(2)] = null);

(statearr_51772_51819[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51752 === (3))){
var inst_51749 = (state_51751[(2)]);
var state_51751__$1 = state_51751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51751__$1,inst_51749);
} else {
if((state_val_51752 === (12))){
var inst_51726 = (state_51751[(2)]);
var state_51751__$1 = state_51751;
var statearr_51773_51820 = state_51751__$1;
(statearr_51773_51820[(2)] = inst_51726);

(statearr_51773_51820[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51752 === (2))){
var state_51751__$1 = state_51751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51751__$1,(4),ch);
} else {
if((state_val_51752 === (23))){
var state_51751__$1 = state_51751;
var statearr_51774_51821 = state_51751__$1;
(statearr_51774_51821[(2)] = null);

(statearr_51774_51821[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51752 === (19))){
var inst_51682 = (state_51751[(8)]);
var inst_51732 = (state_51751[(11)]);
var inst_51734 = cljs.core.async.muxch_STAR_.call(null,inst_51732);
var state_51751__$1 = state_51751;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51751__$1,(22),inst_51734,inst_51682);
} else {
if((state_val_51752 === (11))){
var inst_51706 = (state_51751[(10)]);
var inst_51692 = (state_51751[(15)]);
var inst_51706__$1 = cljs.core.seq.call(null,inst_51692);
var state_51751__$1 = (function (){var statearr_51775 = state_51751;
(statearr_51775[(10)] = inst_51706__$1);

return statearr_51775;
})();
if(inst_51706__$1){
var statearr_51776_51822 = state_51751__$1;
(statearr_51776_51822[(1)] = (13));

} else {
var statearr_51777_51823 = state_51751__$1;
(statearr_51777_51823[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51752 === (9))){
var inst_51728 = (state_51751[(2)]);
var state_51751__$1 = state_51751;
var statearr_51778_51824 = state_51751__$1;
(statearr_51778_51824[(2)] = inst_51728);

(statearr_51778_51824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51752 === (5))){
var inst_51689 = cljs.core.deref.call(null,mults);
var inst_51690 = cljs.core.vals.call(null,inst_51689);
var inst_51691 = cljs.core.seq.call(null,inst_51690);
var inst_51692 = inst_51691;
var inst_51693 = null;
var inst_51694 = (0);
var inst_51695 = (0);
var state_51751__$1 = (function (){var statearr_51779 = state_51751;
(statearr_51779[(12)] = inst_51695);

(statearr_51779[(13)] = inst_51693);

(statearr_51779[(14)] = inst_51694);

(statearr_51779[(15)] = inst_51692);

return statearr_51779;
})();
var statearr_51780_51825 = state_51751__$1;
(statearr_51780_51825[(2)] = null);

(statearr_51780_51825[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51752 === (14))){
var state_51751__$1 = state_51751;
var statearr_51784_51826 = state_51751__$1;
(statearr_51784_51826[(2)] = null);

(statearr_51784_51826[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51752 === (16))){
var inst_51706 = (state_51751[(10)]);
var inst_51710 = cljs.core.chunk_first.call(null,inst_51706);
var inst_51711 = cljs.core.chunk_rest.call(null,inst_51706);
var inst_51712 = cljs.core.count.call(null,inst_51710);
var inst_51692 = inst_51711;
var inst_51693 = inst_51710;
var inst_51694 = inst_51712;
var inst_51695 = (0);
var state_51751__$1 = (function (){var statearr_51785 = state_51751;
(statearr_51785[(12)] = inst_51695);

(statearr_51785[(13)] = inst_51693);

(statearr_51785[(14)] = inst_51694);

(statearr_51785[(15)] = inst_51692);

return statearr_51785;
})();
var statearr_51786_51827 = state_51751__$1;
(statearr_51786_51827[(2)] = null);

(statearr_51786_51827[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51752 === (10))){
var inst_51695 = (state_51751[(12)]);
var inst_51693 = (state_51751[(13)]);
var inst_51694 = (state_51751[(14)]);
var inst_51692 = (state_51751[(15)]);
var inst_51700 = cljs.core._nth.call(null,inst_51693,inst_51695);
var inst_51701 = cljs.core.async.muxch_STAR_.call(null,inst_51700);
var inst_51702 = cljs.core.async.close_BANG_.call(null,inst_51701);
var inst_51703 = (inst_51695 + (1));
var tmp51781 = inst_51693;
var tmp51782 = inst_51694;
var tmp51783 = inst_51692;
var inst_51692__$1 = tmp51783;
var inst_51693__$1 = tmp51781;
var inst_51694__$1 = tmp51782;
var inst_51695__$1 = inst_51703;
var state_51751__$1 = (function (){var statearr_51787 = state_51751;
(statearr_51787[(17)] = inst_51702);

(statearr_51787[(12)] = inst_51695__$1);

(statearr_51787[(13)] = inst_51693__$1);

(statearr_51787[(14)] = inst_51694__$1);

(statearr_51787[(15)] = inst_51692__$1);

return statearr_51787;
})();
var statearr_51788_51828 = state_51751__$1;
(statearr_51788_51828[(2)] = null);

(statearr_51788_51828[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51752 === (18))){
var inst_51721 = (state_51751[(2)]);
var state_51751__$1 = state_51751;
var statearr_51789_51829 = state_51751__$1;
(statearr_51789_51829[(2)] = inst_51721);

(statearr_51789_51829[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51752 === (8))){
var inst_51695 = (state_51751[(12)]);
var inst_51694 = (state_51751[(14)]);
var inst_51697 = (inst_51695 < inst_51694);
var inst_51698 = inst_51697;
var state_51751__$1 = state_51751;
if(cljs.core.truth_(inst_51698)){
var statearr_51790_51830 = state_51751__$1;
(statearr_51790_51830[(1)] = (10));

} else {
var statearr_51791_51831 = state_51751__$1;
(statearr_51791_51831[(1)] = (11));

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
});})(c__10448__auto___51803,mults,ensure_mult,p))
;
return ((function (switch__10427__auto__,c__10448__auto___51803,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10428__auto__ = null;
var cljs$core$async$state_machine__10428__auto____0 = (function (){
var statearr_51795 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51795[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_51795[(1)] = (1));

return statearr_51795;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_51751){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_51751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e51796){if((e51796 instanceof Object)){
var ex__10431__auto__ = e51796;
var statearr_51797_51832 = state_51751;
(statearr_51797_51832[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51796;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51833 = state_51751;
state_51751 = G__51833;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_51751){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_51751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___51803,mults,ensure_mult,p))
})();
var state__10450__auto__ = (function (){var statearr_51798 = f__10449__auto__.call(null);
(statearr_51798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___51803);

return statearr_51798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___51803,mults,ensure_mult,p))
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
var args51834 = [];
var len__9158__auto___51837 = arguments.length;
var i__9159__auto___51838 = (0);
while(true){
if((i__9159__auto___51838 < len__9158__auto___51837)){
args51834.push((arguments[i__9159__auto___51838]));

var G__51839 = (i__9159__auto___51838 + (1));
i__9159__auto___51838 = G__51839;
continue;
} else {
}
break;
}

var G__51836 = args51834.length;
switch (G__51836) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51834.length)].join('')));

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
var args51841 = [];
var len__9158__auto___51844 = arguments.length;
var i__9159__auto___51845 = (0);
while(true){
if((i__9159__auto___51845 < len__9158__auto___51844)){
args51841.push((arguments[i__9159__auto___51845]));

var G__51846 = (i__9159__auto___51845 + (1));
i__9159__auto___51845 = G__51846;
continue;
} else {
}
break;
}

var G__51843 = args51841.length;
switch (G__51843) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51841.length)].join('')));

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
var args51848 = [];
var len__9158__auto___51919 = arguments.length;
var i__9159__auto___51920 = (0);
while(true){
if((i__9159__auto___51920 < len__9158__auto___51919)){
args51848.push((arguments[i__9159__auto___51920]));

var G__51921 = (i__9159__auto___51920 + (1));
i__9159__auto___51920 = G__51921;
continue;
} else {
}
break;
}

var G__51850 = args51848.length;
switch (G__51850) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51848.length)].join('')));

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
var c__10448__auto___51923 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___51923,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___51923,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_51889){
var state_val_51890 = (state_51889[(1)]);
if((state_val_51890 === (7))){
var state_51889__$1 = state_51889;
var statearr_51891_51924 = state_51889__$1;
(statearr_51891_51924[(2)] = null);

(statearr_51891_51924[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51890 === (1))){
var state_51889__$1 = state_51889;
var statearr_51892_51925 = state_51889__$1;
(statearr_51892_51925[(2)] = null);

(statearr_51892_51925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51890 === (4))){
var inst_51853 = (state_51889[(7)]);
var inst_51855 = (inst_51853 < cnt);
var state_51889__$1 = state_51889;
if(cljs.core.truth_(inst_51855)){
var statearr_51893_51926 = state_51889__$1;
(statearr_51893_51926[(1)] = (6));

} else {
var statearr_51894_51927 = state_51889__$1;
(statearr_51894_51927[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51890 === (15))){
var inst_51885 = (state_51889[(2)]);
var state_51889__$1 = state_51889;
var statearr_51895_51928 = state_51889__$1;
(statearr_51895_51928[(2)] = inst_51885);

(statearr_51895_51928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51890 === (13))){
var inst_51878 = cljs.core.async.close_BANG_.call(null,out);
var state_51889__$1 = state_51889;
var statearr_51896_51929 = state_51889__$1;
(statearr_51896_51929[(2)] = inst_51878);

(statearr_51896_51929[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51890 === (6))){
var state_51889__$1 = state_51889;
var statearr_51897_51930 = state_51889__$1;
(statearr_51897_51930[(2)] = null);

(statearr_51897_51930[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51890 === (3))){
var inst_51887 = (state_51889[(2)]);
var state_51889__$1 = state_51889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51889__$1,inst_51887);
} else {
if((state_val_51890 === (12))){
var inst_51875 = (state_51889[(8)]);
var inst_51875__$1 = (state_51889[(2)]);
var inst_51876 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_51875__$1);
var state_51889__$1 = (function (){var statearr_51898 = state_51889;
(statearr_51898[(8)] = inst_51875__$1);

return statearr_51898;
})();
if(cljs.core.truth_(inst_51876)){
var statearr_51899_51931 = state_51889__$1;
(statearr_51899_51931[(1)] = (13));

} else {
var statearr_51900_51932 = state_51889__$1;
(statearr_51900_51932[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51890 === (2))){
var inst_51852 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_51853 = (0);
var state_51889__$1 = (function (){var statearr_51901 = state_51889;
(statearr_51901[(9)] = inst_51852);

(statearr_51901[(7)] = inst_51853);

return statearr_51901;
})();
var statearr_51902_51933 = state_51889__$1;
(statearr_51902_51933[(2)] = null);

(statearr_51902_51933[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51890 === (11))){
var inst_51853 = (state_51889[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_51889,(10),Object,null,(9));
var inst_51862 = chs__$1.call(null,inst_51853);
var inst_51863 = done.call(null,inst_51853);
var inst_51864 = cljs.core.async.take_BANG_.call(null,inst_51862,inst_51863);
var state_51889__$1 = state_51889;
var statearr_51903_51934 = state_51889__$1;
(statearr_51903_51934[(2)] = inst_51864);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51889__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51890 === (9))){
var inst_51853 = (state_51889[(7)]);
var inst_51866 = (state_51889[(2)]);
var inst_51867 = (inst_51853 + (1));
var inst_51853__$1 = inst_51867;
var state_51889__$1 = (function (){var statearr_51904 = state_51889;
(statearr_51904[(7)] = inst_51853__$1);

(statearr_51904[(10)] = inst_51866);

return statearr_51904;
})();
var statearr_51905_51935 = state_51889__$1;
(statearr_51905_51935[(2)] = null);

(statearr_51905_51935[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51890 === (5))){
var inst_51873 = (state_51889[(2)]);
var state_51889__$1 = (function (){var statearr_51906 = state_51889;
(statearr_51906[(11)] = inst_51873);

return statearr_51906;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51889__$1,(12),dchan);
} else {
if((state_val_51890 === (14))){
var inst_51875 = (state_51889[(8)]);
var inst_51880 = cljs.core.apply.call(null,f,inst_51875);
var state_51889__$1 = state_51889;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51889__$1,(16),out,inst_51880);
} else {
if((state_val_51890 === (16))){
var inst_51882 = (state_51889[(2)]);
var state_51889__$1 = (function (){var statearr_51907 = state_51889;
(statearr_51907[(12)] = inst_51882);

return statearr_51907;
})();
var statearr_51908_51936 = state_51889__$1;
(statearr_51908_51936[(2)] = null);

(statearr_51908_51936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51890 === (10))){
var inst_51857 = (state_51889[(2)]);
var inst_51858 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_51889__$1 = (function (){var statearr_51909 = state_51889;
(statearr_51909[(13)] = inst_51857);

return statearr_51909;
})();
var statearr_51910_51937 = state_51889__$1;
(statearr_51910_51937[(2)] = inst_51858);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51889__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51890 === (8))){
var inst_51871 = (state_51889[(2)]);
var state_51889__$1 = state_51889;
var statearr_51911_51938 = state_51889__$1;
(statearr_51911_51938[(2)] = inst_51871);

(statearr_51911_51938[(1)] = (5));


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
});})(c__10448__auto___51923,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10427__auto__,c__10448__auto___51923,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10428__auto__ = null;
var cljs$core$async$state_machine__10428__auto____0 = (function (){
var statearr_51915 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51915[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_51915[(1)] = (1));

return statearr_51915;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_51889){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_51889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e51916){if((e51916 instanceof Object)){
var ex__10431__auto__ = e51916;
var statearr_51917_51939 = state_51889;
(statearr_51917_51939[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51940 = state_51889;
state_51889 = G__51940;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_51889){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_51889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___51923,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10450__auto__ = (function (){var statearr_51918 = f__10449__auto__.call(null);
(statearr_51918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___51923);

return statearr_51918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___51923,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args51942 = [];
var len__9158__auto___51998 = arguments.length;
var i__9159__auto___51999 = (0);
while(true){
if((i__9159__auto___51999 < len__9158__auto___51998)){
args51942.push((arguments[i__9159__auto___51999]));

var G__52000 = (i__9159__auto___51999 + (1));
i__9159__auto___51999 = G__52000;
continue;
} else {
}
break;
}

var G__51944 = args51942.length;
switch (G__51944) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51942.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10448__auto___52002 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___52002,out){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___52002,out){
return (function (state_51974){
var state_val_51975 = (state_51974[(1)]);
if((state_val_51975 === (7))){
var inst_51953 = (state_51974[(7)]);
var inst_51954 = (state_51974[(8)]);
var inst_51953__$1 = (state_51974[(2)]);
var inst_51954__$1 = cljs.core.nth.call(null,inst_51953__$1,(0),null);
var inst_51955 = cljs.core.nth.call(null,inst_51953__$1,(1),null);
var inst_51956 = (inst_51954__$1 == null);
var state_51974__$1 = (function (){var statearr_51976 = state_51974;
(statearr_51976[(7)] = inst_51953__$1);

(statearr_51976[(8)] = inst_51954__$1);

(statearr_51976[(9)] = inst_51955);

return statearr_51976;
})();
if(cljs.core.truth_(inst_51956)){
var statearr_51977_52003 = state_51974__$1;
(statearr_51977_52003[(1)] = (8));

} else {
var statearr_51978_52004 = state_51974__$1;
(statearr_51978_52004[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51975 === (1))){
var inst_51945 = cljs.core.vec.call(null,chs);
var inst_51946 = inst_51945;
var state_51974__$1 = (function (){var statearr_51979 = state_51974;
(statearr_51979[(10)] = inst_51946);

return statearr_51979;
})();
var statearr_51980_52005 = state_51974__$1;
(statearr_51980_52005[(2)] = null);

(statearr_51980_52005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51975 === (4))){
var inst_51946 = (state_51974[(10)]);
var state_51974__$1 = state_51974;
return cljs.core.async.ioc_alts_BANG_.call(null,state_51974__$1,(7),inst_51946);
} else {
if((state_val_51975 === (6))){
var inst_51970 = (state_51974[(2)]);
var state_51974__$1 = state_51974;
var statearr_51981_52006 = state_51974__$1;
(statearr_51981_52006[(2)] = inst_51970);

(statearr_51981_52006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51975 === (3))){
var inst_51972 = (state_51974[(2)]);
var state_51974__$1 = state_51974;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51974__$1,inst_51972);
} else {
if((state_val_51975 === (2))){
var inst_51946 = (state_51974[(10)]);
var inst_51948 = cljs.core.count.call(null,inst_51946);
var inst_51949 = (inst_51948 > (0));
var state_51974__$1 = state_51974;
if(cljs.core.truth_(inst_51949)){
var statearr_51983_52007 = state_51974__$1;
(statearr_51983_52007[(1)] = (4));

} else {
var statearr_51984_52008 = state_51974__$1;
(statearr_51984_52008[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51975 === (11))){
var inst_51946 = (state_51974[(10)]);
var inst_51963 = (state_51974[(2)]);
var tmp51982 = inst_51946;
var inst_51946__$1 = tmp51982;
var state_51974__$1 = (function (){var statearr_51985 = state_51974;
(statearr_51985[(10)] = inst_51946__$1);

(statearr_51985[(11)] = inst_51963);

return statearr_51985;
})();
var statearr_51986_52009 = state_51974__$1;
(statearr_51986_52009[(2)] = null);

(statearr_51986_52009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51975 === (9))){
var inst_51954 = (state_51974[(8)]);
var state_51974__$1 = state_51974;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51974__$1,(11),out,inst_51954);
} else {
if((state_val_51975 === (5))){
var inst_51968 = cljs.core.async.close_BANG_.call(null,out);
var state_51974__$1 = state_51974;
var statearr_51987_52010 = state_51974__$1;
(statearr_51987_52010[(2)] = inst_51968);

(statearr_51987_52010[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51975 === (10))){
var inst_51966 = (state_51974[(2)]);
var state_51974__$1 = state_51974;
var statearr_51988_52011 = state_51974__$1;
(statearr_51988_52011[(2)] = inst_51966);

(statearr_51988_52011[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51975 === (8))){
var inst_51953 = (state_51974[(7)]);
var inst_51946 = (state_51974[(10)]);
var inst_51954 = (state_51974[(8)]);
var inst_51955 = (state_51974[(9)]);
var inst_51958 = (function (){var cs = inst_51946;
var vec__51951 = inst_51953;
var v = inst_51954;
var c = inst_51955;
return ((function (cs,vec__51951,v,c,inst_51953,inst_51946,inst_51954,inst_51955,state_val_51975,c__10448__auto___52002,out){
return (function (p1__51941_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__51941_SHARP_);
});
;})(cs,vec__51951,v,c,inst_51953,inst_51946,inst_51954,inst_51955,state_val_51975,c__10448__auto___52002,out))
})();
var inst_51959 = cljs.core.filterv.call(null,inst_51958,inst_51946);
var inst_51946__$1 = inst_51959;
var state_51974__$1 = (function (){var statearr_51989 = state_51974;
(statearr_51989[(10)] = inst_51946__$1);

return statearr_51989;
})();
var statearr_51990_52012 = state_51974__$1;
(statearr_51990_52012[(2)] = null);

(statearr_51990_52012[(1)] = (2));


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
});})(c__10448__auto___52002,out))
;
return ((function (switch__10427__auto__,c__10448__auto___52002,out){
return (function() {
var cljs$core$async$state_machine__10428__auto__ = null;
var cljs$core$async$state_machine__10428__auto____0 = (function (){
var statearr_51994 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51994[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_51994[(1)] = (1));

return statearr_51994;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_51974){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_51974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e51995){if((e51995 instanceof Object)){
var ex__10431__auto__ = e51995;
var statearr_51996_52013 = state_51974;
(statearr_51996_52013[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51995;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52014 = state_51974;
state_51974 = G__52014;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_51974){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_51974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___52002,out))
})();
var state__10450__auto__ = (function (){var statearr_51997 = f__10449__auto__.call(null);
(statearr_51997[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___52002);

return statearr_51997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___52002,out))
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
var args52015 = [];
var len__9158__auto___52064 = arguments.length;
var i__9159__auto___52065 = (0);
while(true){
if((i__9159__auto___52065 < len__9158__auto___52064)){
args52015.push((arguments[i__9159__auto___52065]));

var G__52066 = (i__9159__auto___52065 + (1));
i__9159__auto___52065 = G__52066;
continue;
} else {
}
break;
}

var G__52017 = args52015.length;
switch (G__52017) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52015.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10448__auto___52068 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___52068,out){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___52068,out){
return (function (state_52041){
var state_val_52042 = (state_52041[(1)]);
if((state_val_52042 === (7))){
var inst_52023 = (state_52041[(7)]);
var inst_52023__$1 = (state_52041[(2)]);
var inst_52024 = (inst_52023__$1 == null);
var inst_52025 = cljs.core.not.call(null,inst_52024);
var state_52041__$1 = (function (){var statearr_52043 = state_52041;
(statearr_52043[(7)] = inst_52023__$1);

return statearr_52043;
})();
if(inst_52025){
var statearr_52044_52069 = state_52041__$1;
(statearr_52044_52069[(1)] = (8));

} else {
var statearr_52045_52070 = state_52041__$1;
(statearr_52045_52070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52042 === (1))){
var inst_52018 = (0);
var state_52041__$1 = (function (){var statearr_52046 = state_52041;
(statearr_52046[(8)] = inst_52018);

return statearr_52046;
})();
var statearr_52047_52071 = state_52041__$1;
(statearr_52047_52071[(2)] = null);

(statearr_52047_52071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52042 === (4))){
var state_52041__$1 = state_52041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52041__$1,(7),ch);
} else {
if((state_val_52042 === (6))){
var inst_52036 = (state_52041[(2)]);
var state_52041__$1 = state_52041;
var statearr_52048_52072 = state_52041__$1;
(statearr_52048_52072[(2)] = inst_52036);

(statearr_52048_52072[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52042 === (3))){
var inst_52038 = (state_52041[(2)]);
var inst_52039 = cljs.core.async.close_BANG_.call(null,out);
var state_52041__$1 = (function (){var statearr_52049 = state_52041;
(statearr_52049[(9)] = inst_52038);

return statearr_52049;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52041__$1,inst_52039);
} else {
if((state_val_52042 === (2))){
var inst_52018 = (state_52041[(8)]);
var inst_52020 = (inst_52018 < n);
var state_52041__$1 = state_52041;
if(cljs.core.truth_(inst_52020)){
var statearr_52050_52073 = state_52041__$1;
(statearr_52050_52073[(1)] = (4));

} else {
var statearr_52051_52074 = state_52041__$1;
(statearr_52051_52074[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52042 === (11))){
var inst_52018 = (state_52041[(8)]);
var inst_52028 = (state_52041[(2)]);
var inst_52029 = (inst_52018 + (1));
var inst_52018__$1 = inst_52029;
var state_52041__$1 = (function (){var statearr_52052 = state_52041;
(statearr_52052[(10)] = inst_52028);

(statearr_52052[(8)] = inst_52018__$1);

return statearr_52052;
})();
var statearr_52053_52075 = state_52041__$1;
(statearr_52053_52075[(2)] = null);

(statearr_52053_52075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52042 === (9))){
var state_52041__$1 = state_52041;
var statearr_52054_52076 = state_52041__$1;
(statearr_52054_52076[(2)] = null);

(statearr_52054_52076[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52042 === (5))){
var state_52041__$1 = state_52041;
var statearr_52055_52077 = state_52041__$1;
(statearr_52055_52077[(2)] = null);

(statearr_52055_52077[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52042 === (10))){
var inst_52033 = (state_52041[(2)]);
var state_52041__$1 = state_52041;
var statearr_52056_52078 = state_52041__$1;
(statearr_52056_52078[(2)] = inst_52033);

(statearr_52056_52078[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52042 === (8))){
var inst_52023 = (state_52041[(7)]);
var state_52041__$1 = state_52041;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52041__$1,(11),out,inst_52023);
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
});})(c__10448__auto___52068,out))
;
return ((function (switch__10427__auto__,c__10448__auto___52068,out){
return (function() {
var cljs$core$async$state_machine__10428__auto__ = null;
var cljs$core$async$state_machine__10428__auto____0 = (function (){
var statearr_52060 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52060[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_52060[(1)] = (1));

return statearr_52060;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_52041){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_52041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e52061){if((e52061 instanceof Object)){
var ex__10431__auto__ = e52061;
var statearr_52062_52079 = state_52041;
(statearr_52062_52079[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52080 = state_52041;
state_52041 = G__52080;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_52041){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_52041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___52068,out))
})();
var state__10450__auto__ = (function (){var statearr_52063 = f__10449__auto__.call(null);
(statearr_52063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___52068);

return statearr_52063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___52068,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async52088 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52088 = (function (map_LT_,f,ch,meta52089){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta52089 = meta52089;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async52088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52090,meta52089__$1){
var self__ = this;
var _52090__$1 = this;
return (new cljs.core.async.t_cljs$core$async52088(self__.map_LT_,self__.f,self__.ch,meta52089__$1));
});

cljs.core.async.t_cljs$core$async52088.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52090){
var self__ = this;
var _52090__$1 = this;
return self__.meta52089;
});

cljs.core.async.t_cljs$core$async52088.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async52088.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async52088.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async52088.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async52088.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async52091 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52091 = (function (map_LT_,f,ch,meta52089,_,fn1,meta52092){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta52089 = meta52089;
this._ = _;
this.fn1 = fn1;
this.meta52092 = meta52092;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async52091.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_52093,meta52092__$1){
var self__ = this;
var _52093__$1 = this;
return (new cljs.core.async.t_cljs$core$async52091(self__.map_LT_,self__.f,self__.ch,self__.meta52089,self__._,self__.fn1,meta52092__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async52091.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_52093){
var self__ = this;
var _52093__$1 = this;
return self__.meta52092;
});})(___$1))
;

cljs.core.async.t_cljs$core$async52091.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async52091.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async52091.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async52091.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__52081_SHARP_){
return f1.call(null,(((p1__52081_SHARP_ == null))?null:self__.f.call(null,p1__52081_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async52091.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52089","meta52089",-527693808,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async52088","cljs.core.async/t_cljs$core$async52088",-765222189,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta52092","meta52092",1016978820,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async52091.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52091.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52091";

cljs.core.async.t_cljs$core$async52091.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8698__auto__,writer__8699__auto__,opt__8700__auto__){
return cljs.core._write.call(null,writer__8699__auto__,"cljs.core.async/t_cljs$core$async52091");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async52091 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async52091(map_LT___$1,f__$1,ch__$1,meta52089__$1,___$2,fn1__$1,meta52092){
return (new cljs.core.async.t_cljs$core$async52091(map_LT___$1,f__$1,ch__$1,meta52089__$1,___$2,fn1__$1,meta52092));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async52091(self__.map_LT_,self__.f,self__.ch,self__.meta52089,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async52088.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async52088.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async52088.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52089","meta52089",-527693808,null)], null);
});

cljs.core.async.t_cljs$core$async52088.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52088.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52088";

cljs.core.async.t_cljs$core$async52088.cljs$lang$ctorPrWriter = (function (this__8698__auto__,writer__8699__auto__,opt__8700__auto__){
return cljs.core._write.call(null,writer__8699__auto__,"cljs.core.async/t_cljs$core$async52088");
});

cljs.core.async.__GT_t_cljs$core$async52088 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async52088(map_LT___$1,f__$1,ch__$1,meta52089){
return (new cljs.core.async.t_cljs$core$async52088(map_LT___$1,f__$1,ch__$1,meta52089));
});

}

return (new cljs.core.async.t_cljs$core$async52088(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async52097 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52097 = (function (map_GT_,f,ch,meta52098){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta52098 = meta52098;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async52097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52099,meta52098__$1){
var self__ = this;
var _52099__$1 = this;
return (new cljs.core.async.t_cljs$core$async52097(self__.map_GT_,self__.f,self__.ch,meta52098__$1));
});

cljs.core.async.t_cljs$core$async52097.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52099){
var self__ = this;
var _52099__$1 = this;
return self__.meta52098;
});

cljs.core.async.t_cljs$core$async52097.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async52097.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async52097.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async52097.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async52097.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async52097.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async52097.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52098","meta52098",1581120683,null)], null);
});

cljs.core.async.t_cljs$core$async52097.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52097.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52097";

cljs.core.async.t_cljs$core$async52097.cljs$lang$ctorPrWriter = (function (this__8698__auto__,writer__8699__auto__,opt__8700__auto__){
return cljs.core._write.call(null,writer__8699__auto__,"cljs.core.async/t_cljs$core$async52097");
});

cljs.core.async.__GT_t_cljs$core$async52097 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async52097(map_GT___$1,f__$1,ch__$1,meta52098){
return (new cljs.core.async.t_cljs$core$async52097(map_GT___$1,f__$1,ch__$1,meta52098));
});

}

return (new cljs.core.async.t_cljs$core$async52097(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async52103 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52103 = (function (filter_GT_,p,ch,meta52104){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta52104 = meta52104;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async52103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52105,meta52104__$1){
var self__ = this;
var _52105__$1 = this;
return (new cljs.core.async.t_cljs$core$async52103(self__.filter_GT_,self__.p,self__.ch,meta52104__$1));
});

cljs.core.async.t_cljs$core$async52103.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52105){
var self__ = this;
var _52105__$1 = this;
return self__.meta52104;
});

cljs.core.async.t_cljs$core$async52103.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async52103.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async52103.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async52103.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async52103.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async52103.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async52103.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async52103.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52104","meta52104",2097478741,null)], null);
});

cljs.core.async.t_cljs$core$async52103.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52103.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52103";

cljs.core.async.t_cljs$core$async52103.cljs$lang$ctorPrWriter = (function (this__8698__auto__,writer__8699__auto__,opt__8700__auto__){
return cljs.core._write.call(null,writer__8699__auto__,"cljs.core.async/t_cljs$core$async52103");
});

cljs.core.async.__GT_t_cljs$core$async52103 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async52103(filter_GT___$1,p__$1,ch__$1,meta52104){
return (new cljs.core.async.t_cljs$core$async52103(filter_GT___$1,p__$1,ch__$1,meta52104));
});

}

return (new cljs.core.async.t_cljs$core$async52103(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args52106 = [];
var len__9158__auto___52150 = arguments.length;
var i__9159__auto___52151 = (0);
while(true){
if((i__9159__auto___52151 < len__9158__auto___52150)){
args52106.push((arguments[i__9159__auto___52151]));

var G__52152 = (i__9159__auto___52151 + (1));
i__9159__auto___52151 = G__52152;
continue;
} else {
}
break;
}

var G__52108 = args52106.length;
switch (G__52108) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52106.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10448__auto___52154 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___52154,out){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___52154,out){
return (function (state_52129){
var state_val_52130 = (state_52129[(1)]);
if((state_val_52130 === (7))){
var inst_52125 = (state_52129[(2)]);
var state_52129__$1 = state_52129;
var statearr_52131_52155 = state_52129__$1;
(statearr_52131_52155[(2)] = inst_52125);

(statearr_52131_52155[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52130 === (1))){
var state_52129__$1 = state_52129;
var statearr_52132_52156 = state_52129__$1;
(statearr_52132_52156[(2)] = null);

(statearr_52132_52156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52130 === (4))){
var inst_52111 = (state_52129[(7)]);
var inst_52111__$1 = (state_52129[(2)]);
var inst_52112 = (inst_52111__$1 == null);
var state_52129__$1 = (function (){var statearr_52133 = state_52129;
(statearr_52133[(7)] = inst_52111__$1);

return statearr_52133;
})();
if(cljs.core.truth_(inst_52112)){
var statearr_52134_52157 = state_52129__$1;
(statearr_52134_52157[(1)] = (5));

} else {
var statearr_52135_52158 = state_52129__$1;
(statearr_52135_52158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52130 === (6))){
var inst_52111 = (state_52129[(7)]);
var inst_52116 = p.call(null,inst_52111);
var state_52129__$1 = state_52129;
if(cljs.core.truth_(inst_52116)){
var statearr_52136_52159 = state_52129__$1;
(statearr_52136_52159[(1)] = (8));

} else {
var statearr_52137_52160 = state_52129__$1;
(statearr_52137_52160[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52130 === (3))){
var inst_52127 = (state_52129[(2)]);
var state_52129__$1 = state_52129;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52129__$1,inst_52127);
} else {
if((state_val_52130 === (2))){
var state_52129__$1 = state_52129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52129__$1,(4),ch);
} else {
if((state_val_52130 === (11))){
var inst_52119 = (state_52129[(2)]);
var state_52129__$1 = state_52129;
var statearr_52138_52161 = state_52129__$1;
(statearr_52138_52161[(2)] = inst_52119);

(statearr_52138_52161[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52130 === (9))){
var state_52129__$1 = state_52129;
var statearr_52139_52162 = state_52129__$1;
(statearr_52139_52162[(2)] = null);

(statearr_52139_52162[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52130 === (5))){
var inst_52114 = cljs.core.async.close_BANG_.call(null,out);
var state_52129__$1 = state_52129;
var statearr_52140_52163 = state_52129__$1;
(statearr_52140_52163[(2)] = inst_52114);

(statearr_52140_52163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52130 === (10))){
var inst_52122 = (state_52129[(2)]);
var state_52129__$1 = (function (){var statearr_52141 = state_52129;
(statearr_52141[(8)] = inst_52122);

return statearr_52141;
})();
var statearr_52142_52164 = state_52129__$1;
(statearr_52142_52164[(2)] = null);

(statearr_52142_52164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52130 === (8))){
var inst_52111 = (state_52129[(7)]);
var state_52129__$1 = state_52129;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52129__$1,(11),out,inst_52111);
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
});})(c__10448__auto___52154,out))
;
return ((function (switch__10427__auto__,c__10448__auto___52154,out){
return (function() {
var cljs$core$async$state_machine__10428__auto__ = null;
var cljs$core$async$state_machine__10428__auto____0 = (function (){
var statearr_52146 = [null,null,null,null,null,null,null,null,null];
(statearr_52146[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_52146[(1)] = (1));

return statearr_52146;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_52129){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_52129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e52147){if((e52147 instanceof Object)){
var ex__10431__auto__ = e52147;
var statearr_52148_52165 = state_52129;
(statearr_52148_52165[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52166 = state_52129;
state_52129 = G__52166;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_52129){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_52129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___52154,out))
})();
var state__10450__auto__ = (function (){var statearr_52149 = f__10449__auto__.call(null);
(statearr_52149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___52154);

return statearr_52149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___52154,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args52167 = [];
var len__9158__auto___52170 = arguments.length;
var i__9159__auto___52171 = (0);
while(true){
if((i__9159__auto___52171 < len__9158__auto___52170)){
args52167.push((arguments[i__9159__auto___52171]));

var G__52172 = (i__9159__auto___52171 + (1));
i__9159__auto___52171 = G__52172;
continue;
} else {
}
break;
}

var G__52169 = args52167.length;
switch (G__52169) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52167.length)].join('')));

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
return (function (state_52339){
var state_val_52340 = (state_52339[(1)]);
if((state_val_52340 === (7))){
var inst_52335 = (state_52339[(2)]);
var state_52339__$1 = state_52339;
var statearr_52341_52382 = state_52339__$1;
(statearr_52341_52382[(2)] = inst_52335);

(statearr_52341_52382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52340 === (20))){
var inst_52305 = (state_52339[(7)]);
var inst_52316 = (state_52339[(2)]);
var inst_52317 = cljs.core.next.call(null,inst_52305);
var inst_52291 = inst_52317;
var inst_52292 = null;
var inst_52293 = (0);
var inst_52294 = (0);
var state_52339__$1 = (function (){var statearr_52342 = state_52339;
(statearr_52342[(8)] = inst_52291);

(statearr_52342[(9)] = inst_52293);

(statearr_52342[(10)] = inst_52316);

(statearr_52342[(11)] = inst_52294);

(statearr_52342[(12)] = inst_52292);

return statearr_52342;
})();
var statearr_52343_52383 = state_52339__$1;
(statearr_52343_52383[(2)] = null);

(statearr_52343_52383[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52340 === (1))){
var state_52339__$1 = state_52339;
var statearr_52344_52384 = state_52339__$1;
(statearr_52344_52384[(2)] = null);

(statearr_52344_52384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52340 === (4))){
var inst_52280 = (state_52339[(13)]);
var inst_52280__$1 = (state_52339[(2)]);
var inst_52281 = (inst_52280__$1 == null);
var state_52339__$1 = (function (){var statearr_52345 = state_52339;
(statearr_52345[(13)] = inst_52280__$1);

return statearr_52345;
})();
if(cljs.core.truth_(inst_52281)){
var statearr_52346_52385 = state_52339__$1;
(statearr_52346_52385[(1)] = (5));

} else {
var statearr_52347_52386 = state_52339__$1;
(statearr_52347_52386[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52340 === (15))){
var state_52339__$1 = state_52339;
var statearr_52351_52387 = state_52339__$1;
(statearr_52351_52387[(2)] = null);

(statearr_52351_52387[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52340 === (21))){
var state_52339__$1 = state_52339;
var statearr_52352_52388 = state_52339__$1;
(statearr_52352_52388[(2)] = null);

(statearr_52352_52388[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52340 === (13))){
var inst_52291 = (state_52339[(8)]);
var inst_52293 = (state_52339[(9)]);
var inst_52294 = (state_52339[(11)]);
var inst_52292 = (state_52339[(12)]);
var inst_52301 = (state_52339[(2)]);
var inst_52302 = (inst_52294 + (1));
var tmp52348 = inst_52291;
var tmp52349 = inst_52293;
var tmp52350 = inst_52292;
var inst_52291__$1 = tmp52348;
var inst_52292__$1 = tmp52350;
var inst_52293__$1 = tmp52349;
var inst_52294__$1 = inst_52302;
var state_52339__$1 = (function (){var statearr_52353 = state_52339;
(statearr_52353[(8)] = inst_52291__$1);

(statearr_52353[(9)] = inst_52293__$1);

(statearr_52353[(11)] = inst_52294__$1);

(statearr_52353[(14)] = inst_52301);

(statearr_52353[(12)] = inst_52292__$1);

return statearr_52353;
})();
var statearr_52354_52389 = state_52339__$1;
(statearr_52354_52389[(2)] = null);

(statearr_52354_52389[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52340 === (22))){
var state_52339__$1 = state_52339;
var statearr_52355_52390 = state_52339__$1;
(statearr_52355_52390[(2)] = null);

(statearr_52355_52390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52340 === (6))){
var inst_52280 = (state_52339[(13)]);
var inst_52289 = f.call(null,inst_52280);
var inst_52290 = cljs.core.seq.call(null,inst_52289);
var inst_52291 = inst_52290;
var inst_52292 = null;
var inst_52293 = (0);
var inst_52294 = (0);
var state_52339__$1 = (function (){var statearr_52356 = state_52339;
(statearr_52356[(8)] = inst_52291);

(statearr_52356[(9)] = inst_52293);

(statearr_52356[(11)] = inst_52294);

(statearr_52356[(12)] = inst_52292);

return statearr_52356;
})();
var statearr_52357_52391 = state_52339__$1;
(statearr_52357_52391[(2)] = null);

(statearr_52357_52391[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52340 === (17))){
var inst_52305 = (state_52339[(7)]);
var inst_52309 = cljs.core.chunk_first.call(null,inst_52305);
var inst_52310 = cljs.core.chunk_rest.call(null,inst_52305);
var inst_52311 = cljs.core.count.call(null,inst_52309);
var inst_52291 = inst_52310;
var inst_52292 = inst_52309;
var inst_52293 = inst_52311;
var inst_52294 = (0);
var state_52339__$1 = (function (){var statearr_52358 = state_52339;
(statearr_52358[(8)] = inst_52291);

(statearr_52358[(9)] = inst_52293);

(statearr_52358[(11)] = inst_52294);

(statearr_52358[(12)] = inst_52292);

return statearr_52358;
})();
var statearr_52359_52392 = state_52339__$1;
(statearr_52359_52392[(2)] = null);

(statearr_52359_52392[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52340 === (3))){
var inst_52337 = (state_52339[(2)]);
var state_52339__$1 = state_52339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52339__$1,inst_52337);
} else {
if((state_val_52340 === (12))){
var inst_52325 = (state_52339[(2)]);
var state_52339__$1 = state_52339;
var statearr_52360_52393 = state_52339__$1;
(statearr_52360_52393[(2)] = inst_52325);

(statearr_52360_52393[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52340 === (2))){
var state_52339__$1 = state_52339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52339__$1,(4),in$);
} else {
if((state_val_52340 === (23))){
var inst_52333 = (state_52339[(2)]);
var state_52339__$1 = state_52339;
var statearr_52361_52394 = state_52339__$1;
(statearr_52361_52394[(2)] = inst_52333);

(statearr_52361_52394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52340 === (19))){
var inst_52320 = (state_52339[(2)]);
var state_52339__$1 = state_52339;
var statearr_52362_52395 = state_52339__$1;
(statearr_52362_52395[(2)] = inst_52320);

(statearr_52362_52395[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52340 === (11))){
var inst_52291 = (state_52339[(8)]);
var inst_52305 = (state_52339[(7)]);
var inst_52305__$1 = cljs.core.seq.call(null,inst_52291);
var state_52339__$1 = (function (){var statearr_52363 = state_52339;
(statearr_52363[(7)] = inst_52305__$1);

return statearr_52363;
})();
if(inst_52305__$1){
var statearr_52364_52396 = state_52339__$1;
(statearr_52364_52396[(1)] = (14));

} else {
var statearr_52365_52397 = state_52339__$1;
(statearr_52365_52397[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52340 === (9))){
var inst_52327 = (state_52339[(2)]);
var inst_52328 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_52339__$1 = (function (){var statearr_52366 = state_52339;
(statearr_52366[(15)] = inst_52327);

return statearr_52366;
})();
if(cljs.core.truth_(inst_52328)){
var statearr_52367_52398 = state_52339__$1;
(statearr_52367_52398[(1)] = (21));

} else {
var statearr_52368_52399 = state_52339__$1;
(statearr_52368_52399[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52340 === (5))){
var inst_52283 = cljs.core.async.close_BANG_.call(null,out);
var state_52339__$1 = state_52339;
var statearr_52369_52400 = state_52339__$1;
(statearr_52369_52400[(2)] = inst_52283);

(statearr_52369_52400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52340 === (14))){
var inst_52305 = (state_52339[(7)]);
var inst_52307 = cljs.core.chunked_seq_QMARK_.call(null,inst_52305);
var state_52339__$1 = state_52339;
if(inst_52307){
var statearr_52370_52401 = state_52339__$1;
(statearr_52370_52401[(1)] = (17));

} else {
var statearr_52371_52402 = state_52339__$1;
(statearr_52371_52402[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52340 === (16))){
var inst_52323 = (state_52339[(2)]);
var state_52339__$1 = state_52339;
var statearr_52372_52403 = state_52339__$1;
(statearr_52372_52403[(2)] = inst_52323);

(statearr_52372_52403[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52340 === (10))){
var inst_52294 = (state_52339[(11)]);
var inst_52292 = (state_52339[(12)]);
var inst_52299 = cljs.core._nth.call(null,inst_52292,inst_52294);
var state_52339__$1 = state_52339;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52339__$1,(13),out,inst_52299);
} else {
if((state_val_52340 === (18))){
var inst_52305 = (state_52339[(7)]);
var inst_52314 = cljs.core.first.call(null,inst_52305);
var state_52339__$1 = state_52339;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52339__$1,(20),out,inst_52314);
} else {
if((state_val_52340 === (8))){
var inst_52293 = (state_52339[(9)]);
var inst_52294 = (state_52339[(11)]);
var inst_52296 = (inst_52294 < inst_52293);
var inst_52297 = inst_52296;
var state_52339__$1 = state_52339;
if(cljs.core.truth_(inst_52297)){
var statearr_52373_52404 = state_52339__$1;
(statearr_52373_52404[(1)] = (10));

} else {
var statearr_52374_52405 = state_52339__$1;
(statearr_52374_52405[(1)] = (11));

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
var statearr_52378 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52378[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10428__auto__);

(statearr_52378[(1)] = (1));

return statearr_52378;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10428__auto____1 = (function (state_52339){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_52339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e52379){if((e52379 instanceof Object)){
var ex__10431__auto__ = e52379;
var statearr_52380_52406 = state_52339;
(statearr_52380_52406[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52379;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52407 = state_52339;
state_52339 = G__52407;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10428__auto__ = function(state_52339){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10428__auto____1.call(this,state_52339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10428__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10428__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto__))
})();
var state__10450__auto__ = (function (){var statearr_52381 = f__10449__auto__.call(null);
(statearr_52381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto__);

return statearr_52381;
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
var args52408 = [];
var len__9158__auto___52411 = arguments.length;
var i__9159__auto___52412 = (0);
while(true){
if((i__9159__auto___52412 < len__9158__auto___52411)){
args52408.push((arguments[i__9159__auto___52412]));

var G__52413 = (i__9159__auto___52412 + (1));
i__9159__auto___52412 = G__52413;
continue;
} else {
}
break;
}

var G__52410 = args52408.length;
switch (G__52410) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52408.length)].join('')));

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
var args52415 = [];
var len__9158__auto___52418 = arguments.length;
var i__9159__auto___52419 = (0);
while(true){
if((i__9159__auto___52419 < len__9158__auto___52418)){
args52415.push((arguments[i__9159__auto___52419]));

var G__52420 = (i__9159__auto___52419 + (1));
i__9159__auto___52419 = G__52420;
continue;
} else {
}
break;
}

var G__52417 = args52415.length;
switch (G__52417) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52415.length)].join('')));

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
var args52422 = [];
var len__9158__auto___52473 = arguments.length;
var i__9159__auto___52474 = (0);
while(true){
if((i__9159__auto___52474 < len__9158__auto___52473)){
args52422.push((arguments[i__9159__auto___52474]));

var G__52475 = (i__9159__auto___52474 + (1));
i__9159__auto___52474 = G__52475;
continue;
} else {
}
break;
}

var G__52424 = args52422.length;
switch (G__52424) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52422.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10448__auto___52477 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___52477,out){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___52477,out){
return (function (state_52448){
var state_val_52449 = (state_52448[(1)]);
if((state_val_52449 === (7))){
var inst_52443 = (state_52448[(2)]);
var state_52448__$1 = state_52448;
var statearr_52450_52478 = state_52448__$1;
(statearr_52450_52478[(2)] = inst_52443);

(statearr_52450_52478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52449 === (1))){
var inst_52425 = null;
var state_52448__$1 = (function (){var statearr_52451 = state_52448;
(statearr_52451[(7)] = inst_52425);

return statearr_52451;
})();
var statearr_52452_52479 = state_52448__$1;
(statearr_52452_52479[(2)] = null);

(statearr_52452_52479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52449 === (4))){
var inst_52428 = (state_52448[(8)]);
var inst_52428__$1 = (state_52448[(2)]);
var inst_52429 = (inst_52428__$1 == null);
var inst_52430 = cljs.core.not.call(null,inst_52429);
var state_52448__$1 = (function (){var statearr_52453 = state_52448;
(statearr_52453[(8)] = inst_52428__$1);

return statearr_52453;
})();
if(inst_52430){
var statearr_52454_52480 = state_52448__$1;
(statearr_52454_52480[(1)] = (5));

} else {
var statearr_52455_52481 = state_52448__$1;
(statearr_52455_52481[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52449 === (6))){
var state_52448__$1 = state_52448;
var statearr_52456_52482 = state_52448__$1;
(statearr_52456_52482[(2)] = null);

(statearr_52456_52482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52449 === (3))){
var inst_52445 = (state_52448[(2)]);
var inst_52446 = cljs.core.async.close_BANG_.call(null,out);
var state_52448__$1 = (function (){var statearr_52457 = state_52448;
(statearr_52457[(9)] = inst_52445);

return statearr_52457;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52448__$1,inst_52446);
} else {
if((state_val_52449 === (2))){
var state_52448__$1 = state_52448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52448__$1,(4),ch);
} else {
if((state_val_52449 === (11))){
var inst_52428 = (state_52448[(8)]);
var inst_52437 = (state_52448[(2)]);
var inst_52425 = inst_52428;
var state_52448__$1 = (function (){var statearr_52458 = state_52448;
(statearr_52458[(7)] = inst_52425);

(statearr_52458[(10)] = inst_52437);

return statearr_52458;
})();
var statearr_52459_52483 = state_52448__$1;
(statearr_52459_52483[(2)] = null);

(statearr_52459_52483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52449 === (9))){
var inst_52428 = (state_52448[(8)]);
var state_52448__$1 = state_52448;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52448__$1,(11),out,inst_52428);
} else {
if((state_val_52449 === (5))){
var inst_52425 = (state_52448[(7)]);
var inst_52428 = (state_52448[(8)]);
var inst_52432 = cljs.core._EQ_.call(null,inst_52428,inst_52425);
var state_52448__$1 = state_52448;
if(inst_52432){
var statearr_52461_52484 = state_52448__$1;
(statearr_52461_52484[(1)] = (8));

} else {
var statearr_52462_52485 = state_52448__$1;
(statearr_52462_52485[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52449 === (10))){
var inst_52440 = (state_52448[(2)]);
var state_52448__$1 = state_52448;
var statearr_52463_52486 = state_52448__$1;
(statearr_52463_52486[(2)] = inst_52440);

(statearr_52463_52486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52449 === (8))){
var inst_52425 = (state_52448[(7)]);
var tmp52460 = inst_52425;
var inst_52425__$1 = tmp52460;
var state_52448__$1 = (function (){var statearr_52464 = state_52448;
(statearr_52464[(7)] = inst_52425__$1);

return statearr_52464;
})();
var statearr_52465_52487 = state_52448__$1;
(statearr_52465_52487[(2)] = null);

(statearr_52465_52487[(1)] = (2));


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
});})(c__10448__auto___52477,out))
;
return ((function (switch__10427__auto__,c__10448__auto___52477,out){
return (function() {
var cljs$core$async$state_machine__10428__auto__ = null;
var cljs$core$async$state_machine__10428__auto____0 = (function (){
var statearr_52469 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52469[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_52469[(1)] = (1));

return statearr_52469;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_52448){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_52448);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e52470){if((e52470 instanceof Object)){
var ex__10431__auto__ = e52470;
var statearr_52471_52488 = state_52448;
(statearr_52471_52488[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52448);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52489 = state_52448;
state_52448 = G__52489;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_52448){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_52448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___52477,out))
})();
var state__10450__auto__ = (function (){var statearr_52472 = f__10449__auto__.call(null);
(statearr_52472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___52477);

return statearr_52472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___52477,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args52490 = [];
var len__9158__auto___52560 = arguments.length;
var i__9159__auto___52561 = (0);
while(true){
if((i__9159__auto___52561 < len__9158__auto___52560)){
args52490.push((arguments[i__9159__auto___52561]));

var G__52562 = (i__9159__auto___52561 + (1));
i__9159__auto___52561 = G__52562;
continue;
} else {
}
break;
}

var G__52492 = args52490.length;
switch (G__52492) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52490.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10448__auto___52564 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___52564,out){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___52564,out){
return (function (state_52530){
var state_val_52531 = (state_52530[(1)]);
if((state_val_52531 === (7))){
var inst_52526 = (state_52530[(2)]);
var state_52530__$1 = state_52530;
var statearr_52532_52565 = state_52530__$1;
(statearr_52532_52565[(2)] = inst_52526);

(statearr_52532_52565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52531 === (1))){
var inst_52493 = (new Array(n));
var inst_52494 = inst_52493;
var inst_52495 = (0);
var state_52530__$1 = (function (){var statearr_52533 = state_52530;
(statearr_52533[(7)] = inst_52494);

(statearr_52533[(8)] = inst_52495);

return statearr_52533;
})();
var statearr_52534_52566 = state_52530__$1;
(statearr_52534_52566[(2)] = null);

(statearr_52534_52566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52531 === (4))){
var inst_52498 = (state_52530[(9)]);
var inst_52498__$1 = (state_52530[(2)]);
var inst_52499 = (inst_52498__$1 == null);
var inst_52500 = cljs.core.not.call(null,inst_52499);
var state_52530__$1 = (function (){var statearr_52535 = state_52530;
(statearr_52535[(9)] = inst_52498__$1);

return statearr_52535;
})();
if(inst_52500){
var statearr_52536_52567 = state_52530__$1;
(statearr_52536_52567[(1)] = (5));

} else {
var statearr_52537_52568 = state_52530__$1;
(statearr_52537_52568[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52531 === (15))){
var inst_52520 = (state_52530[(2)]);
var state_52530__$1 = state_52530;
var statearr_52538_52569 = state_52530__$1;
(statearr_52538_52569[(2)] = inst_52520);

(statearr_52538_52569[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52531 === (13))){
var state_52530__$1 = state_52530;
var statearr_52539_52570 = state_52530__$1;
(statearr_52539_52570[(2)] = null);

(statearr_52539_52570[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52531 === (6))){
var inst_52495 = (state_52530[(8)]);
var inst_52516 = (inst_52495 > (0));
var state_52530__$1 = state_52530;
if(cljs.core.truth_(inst_52516)){
var statearr_52540_52571 = state_52530__$1;
(statearr_52540_52571[(1)] = (12));

} else {
var statearr_52541_52572 = state_52530__$1;
(statearr_52541_52572[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52531 === (3))){
var inst_52528 = (state_52530[(2)]);
var state_52530__$1 = state_52530;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52530__$1,inst_52528);
} else {
if((state_val_52531 === (12))){
var inst_52494 = (state_52530[(7)]);
var inst_52518 = cljs.core.vec.call(null,inst_52494);
var state_52530__$1 = state_52530;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52530__$1,(15),out,inst_52518);
} else {
if((state_val_52531 === (2))){
var state_52530__$1 = state_52530;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52530__$1,(4),ch);
} else {
if((state_val_52531 === (11))){
var inst_52510 = (state_52530[(2)]);
var inst_52511 = (new Array(n));
var inst_52494 = inst_52511;
var inst_52495 = (0);
var state_52530__$1 = (function (){var statearr_52542 = state_52530;
(statearr_52542[(7)] = inst_52494);

(statearr_52542[(8)] = inst_52495);

(statearr_52542[(10)] = inst_52510);

return statearr_52542;
})();
var statearr_52543_52573 = state_52530__$1;
(statearr_52543_52573[(2)] = null);

(statearr_52543_52573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52531 === (9))){
var inst_52494 = (state_52530[(7)]);
var inst_52508 = cljs.core.vec.call(null,inst_52494);
var state_52530__$1 = state_52530;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52530__$1,(11),out,inst_52508);
} else {
if((state_val_52531 === (5))){
var inst_52494 = (state_52530[(7)]);
var inst_52503 = (state_52530[(11)]);
var inst_52495 = (state_52530[(8)]);
var inst_52498 = (state_52530[(9)]);
var inst_52502 = (inst_52494[inst_52495] = inst_52498);
var inst_52503__$1 = (inst_52495 + (1));
var inst_52504 = (inst_52503__$1 < n);
var state_52530__$1 = (function (){var statearr_52544 = state_52530;
(statearr_52544[(12)] = inst_52502);

(statearr_52544[(11)] = inst_52503__$1);

return statearr_52544;
})();
if(cljs.core.truth_(inst_52504)){
var statearr_52545_52574 = state_52530__$1;
(statearr_52545_52574[(1)] = (8));

} else {
var statearr_52546_52575 = state_52530__$1;
(statearr_52546_52575[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52531 === (14))){
var inst_52523 = (state_52530[(2)]);
var inst_52524 = cljs.core.async.close_BANG_.call(null,out);
var state_52530__$1 = (function (){var statearr_52548 = state_52530;
(statearr_52548[(13)] = inst_52523);

return statearr_52548;
})();
var statearr_52549_52576 = state_52530__$1;
(statearr_52549_52576[(2)] = inst_52524);

(statearr_52549_52576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52531 === (10))){
var inst_52514 = (state_52530[(2)]);
var state_52530__$1 = state_52530;
var statearr_52550_52577 = state_52530__$1;
(statearr_52550_52577[(2)] = inst_52514);

(statearr_52550_52577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52531 === (8))){
var inst_52494 = (state_52530[(7)]);
var inst_52503 = (state_52530[(11)]);
var tmp52547 = inst_52494;
var inst_52494__$1 = tmp52547;
var inst_52495 = inst_52503;
var state_52530__$1 = (function (){var statearr_52551 = state_52530;
(statearr_52551[(7)] = inst_52494__$1);

(statearr_52551[(8)] = inst_52495);

return statearr_52551;
})();
var statearr_52552_52578 = state_52530__$1;
(statearr_52552_52578[(2)] = null);

(statearr_52552_52578[(1)] = (2));


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
});})(c__10448__auto___52564,out))
;
return ((function (switch__10427__auto__,c__10448__auto___52564,out){
return (function() {
var cljs$core$async$state_machine__10428__auto__ = null;
var cljs$core$async$state_machine__10428__auto____0 = (function (){
var statearr_52556 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52556[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_52556[(1)] = (1));

return statearr_52556;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_52530){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_52530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e52557){if((e52557 instanceof Object)){
var ex__10431__auto__ = e52557;
var statearr_52558_52579 = state_52530;
(statearr_52558_52579[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52580 = state_52530;
state_52530 = G__52580;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_52530){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_52530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___52564,out))
})();
var state__10450__auto__ = (function (){var statearr_52559 = f__10449__auto__.call(null);
(statearr_52559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___52564);

return statearr_52559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___52564,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args52581 = [];
var len__9158__auto___52655 = arguments.length;
var i__9159__auto___52656 = (0);
while(true){
if((i__9159__auto___52656 < len__9158__auto___52655)){
args52581.push((arguments[i__9159__auto___52656]));

var G__52657 = (i__9159__auto___52656 + (1));
i__9159__auto___52656 = G__52657;
continue;
} else {
}
break;
}

var G__52583 = args52581.length;
switch (G__52583) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52581.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10448__auto___52659 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___52659,out){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___52659,out){
return (function (state_52625){
var state_val_52626 = (state_52625[(1)]);
if((state_val_52626 === (7))){
var inst_52621 = (state_52625[(2)]);
var state_52625__$1 = state_52625;
var statearr_52627_52660 = state_52625__$1;
(statearr_52627_52660[(2)] = inst_52621);

(statearr_52627_52660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52626 === (1))){
var inst_52584 = [];
var inst_52585 = inst_52584;
var inst_52586 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_52625__$1 = (function (){var statearr_52628 = state_52625;
(statearr_52628[(7)] = inst_52585);

(statearr_52628[(8)] = inst_52586);

return statearr_52628;
})();
var statearr_52629_52661 = state_52625__$1;
(statearr_52629_52661[(2)] = null);

(statearr_52629_52661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52626 === (4))){
var inst_52589 = (state_52625[(9)]);
var inst_52589__$1 = (state_52625[(2)]);
var inst_52590 = (inst_52589__$1 == null);
var inst_52591 = cljs.core.not.call(null,inst_52590);
var state_52625__$1 = (function (){var statearr_52630 = state_52625;
(statearr_52630[(9)] = inst_52589__$1);

return statearr_52630;
})();
if(inst_52591){
var statearr_52631_52662 = state_52625__$1;
(statearr_52631_52662[(1)] = (5));

} else {
var statearr_52632_52663 = state_52625__$1;
(statearr_52632_52663[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52626 === (15))){
var inst_52615 = (state_52625[(2)]);
var state_52625__$1 = state_52625;
var statearr_52633_52664 = state_52625__$1;
(statearr_52633_52664[(2)] = inst_52615);

(statearr_52633_52664[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52626 === (13))){
var state_52625__$1 = state_52625;
var statearr_52634_52665 = state_52625__$1;
(statearr_52634_52665[(2)] = null);

(statearr_52634_52665[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52626 === (6))){
var inst_52585 = (state_52625[(7)]);
var inst_52610 = inst_52585.length;
var inst_52611 = (inst_52610 > (0));
var state_52625__$1 = state_52625;
if(cljs.core.truth_(inst_52611)){
var statearr_52635_52666 = state_52625__$1;
(statearr_52635_52666[(1)] = (12));

} else {
var statearr_52636_52667 = state_52625__$1;
(statearr_52636_52667[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52626 === (3))){
var inst_52623 = (state_52625[(2)]);
var state_52625__$1 = state_52625;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52625__$1,inst_52623);
} else {
if((state_val_52626 === (12))){
var inst_52585 = (state_52625[(7)]);
var inst_52613 = cljs.core.vec.call(null,inst_52585);
var state_52625__$1 = state_52625;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52625__$1,(15),out,inst_52613);
} else {
if((state_val_52626 === (2))){
var state_52625__$1 = state_52625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52625__$1,(4),ch);
} else {
if((state_val_52626 === (11))){
var inst_52593 = (state_52625[(10)]);
var inst_52589 = (state_52625[(9)]);
var inst_52603 = (state_52625[(2)]);
var inst_52604 = [];
var inst_52605 = inst_52604.push(inst_52589);
var inst_52585 = inst_52604;
var inst_52586 = inst_52593;
var state_52625__$1 = (function (){var statearr_52637 = state_52625;
(statearr_52637[(11)] = inst_52603);

(statearr_52637[(12)] = inst_52605);

(statearr_52637[(7)] = inst_52585);

(statearr_52637[(8)] = inst_52586);

return statearr_52637;
})();
var statearr_52638_52668 = state_52625__$1;
(statearr_52638_52668[(2)] = null);

(statearr_52638_52668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52626 === (9))){
var inst_52585 = (state_52625[(7)]);
var inst_52601 = cljs.core.vec.call(null,inst_52585);
var state_52625__$1 = state_52625;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52625__$1,(11),out,inst_52601);
} else {
if((state_val_52626 === (5))){
var inst_52593 = (state_52625[(10)]);
var inst_52589 = (state_52625[(9)]);
var inst_52586 = (state_52625[(8)]);
var inst_52593__$1 = f.call(null,inst_52589);
var inst_52594 = cljs.core._EQ_.call(null,inst_52593__$1,inst_52586);
var inst_52595 = cljs.core.keyword_identical_QMARK_.call(null,inst_52586,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_52596 = (inst_52594) || (inst_52595);
var state_52625__$1 = (function (){var statearr_52639 = state_52625;
(statearr_52639[(10)] = inst_52593__$1);

return statearr_52639;
})();
if(cljs.core.truth_(inst_52596)){
var statearr_52640_52669 = state_52625__$1;
(statearr_52640_52669[(1)] = (8));

} else {
var statearr_52641_52670 = state_52625__$1;
(statearr_52641_52670[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52626 === (14))){
var inst_52618 = (state_52625[(2)]);
var inst_52619 = cljs.core.async.close_BANG_.call(null,out);
var state_52625__$1 = (function (){var statearr_52643 = state_52625;
(statearr_52643[(13)] = inst_52618);

return statearr_52643;
})();
var statearr_52644_52671 = state_52625__$1;
(statearr_52644_52671[(2)] = inst_52619);

(statearr_52644_52671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52626 === (10))){
var inst_52608 = (state_52625[(2)]);
var state_52625__$1 = state_52625;
var statearr_52645_52672 = state_52625__$1;
(statearr_52645_52672[(2)] = inst_52608);

(statearr_52645_52672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52626 === (8))){
var inst_52593 = (state_52625[(10)]);
var inst_52589 = (state_52625[(9)]);
var inst_52585 = (state_52625[(7)]);
var inst_52598 = inst_52585.push(inst_52589);
var tmp52642 = inst_52585;
var inst_52585__$1 = tmp52642;
var inst_52586 = inst_52593;
var state_52625__$1 = (function (){var statearr_52646 = state_52625;
(statearr_52646[(7)] = inst_52585__$1);

(statearr_52646[(14)] = inst_52598);

(statearr_52646[(8)] = inst_52586);

return statearr_52646;
})();
var statearr_52647_52673 = state_52625__$1;
(statearr_52647_52673[(2)] = null);

(statearr_52647_52673[(1)] = (2));


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
});})(c__10448__auto___52659,out))
;
return ((function (switch__10427__auto__,c__10448__auto___52659,out){
return (function() {
var cljs$core$async$state_machine__10428__auto__ = null;
var cljs$core$async$state_machine__10428__auto____0 = (function (){
var statearr_52651 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52651[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_52651[(1)] = (1));

return statearr_52651;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_52625){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_52625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e52652){if((e52652 instanceof Object)){
var ex__10431__auto__ = e52652;
var statearr_52653_52674 = state_52625;
(statearr_52653_52674[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52675 = state_52625;
state_52625 = G__52675;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_52625){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_52625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___52659,out))
})();
var state__10450__auto__ = (function (){var statearr_52654 = f__10449__auto__.call(null);
(statearr_52654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___52659);

return statearr_52654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___52659,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map