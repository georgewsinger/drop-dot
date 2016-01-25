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
var args74130 = [];
var len__9158__auto___74136 = arguments.length;
var i__9159__auto___74137 = (0);
while(true){
if((i__9159__auto___74137 < len__9158__auto___74136)){
args74130.push((arguments[i__9159__auto___74137]));

var G__74138 = (i__9159__auto___74137 + (1));
i__9159__auto___74137 = G__74138;
continue;
} else {
}
break;
}

var G__74132 = args74130.length;
switch (G__74132) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args74130.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async74133 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async74133 = (function (f,blockable,meta74134){
this.f = f;
this.blockable = blockable;
this.meta74134 = meta74134;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async74133.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74135,meta74134__$1){
var self__ = this;
var _74135__$1 = this;
return (new cljs.core.async.t_cljs$core$async74133(self__.f,self__.blockable,meta74134__$1));
});

cljs.core.async.t_cljs$core$async74133.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74135){
var self__ = this;
var _74135__$1 = this;
return self__.meta74134;
});

cljs.core.async.t_cljs$core$async74133.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async74133.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async74133.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async74133.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async74133.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta74134","meta74134",-1163244983,null)], null);
});

cljs.core.async.t_cljs$core$async74133.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async74133.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async74133";

cljs.core.async.t_cljs$core$async74133.cljs$lang$ctorPrWriter = (function (this__8698__auto__,writer__8699__auto__,opt__8700__auto__){
return cljs.core._write.call(null,writer__8699__auto__,"cljs.core.async/t_cljs$core$async74133");
});

cljs.core.async.__GT_t_cljs$core$async74133 = (function cljs$core$async$__GT_t_cljs$core$async74133(f__$1,blockable__$1,meta74134){
return (new cljs.core.async.t_cljs$core$async74133(f__$1,blockable__$1,meta74134));
});

}

return (new cljs.core.async.t_cljs$core$async74133(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args74142 = [];
var len__9158__auto___74145 = arguments.length;
var i__9159__auto___74146 = (0);
while(true){
if((i__9159__auto___74146 < len__9158__auto___74145)){
args74142.push((arguments[i__9159__auto___74146]));

var G__74147 = (i__9159__auto___74146 + (1));
i__9159__auto___74146 = G__74147;
continue;
} else {
}
break;
}

var G__74144 = args74142.length;
switch (G__74144) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args74142.length)].join('')));

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
var args74149 = [];
var len__9158__auto___74152 = arguments.length;
var i__9159__auto___74153 = (0);
while(true){
if((i__9159__auto___74153 < len__9158__auto___74152)){
args74149.push((arguments[i__9159__auto___74153]));

var G__74154 = (i__9159__auto___74153 + (1));
i__9159__auto___74153 = G__74154;
continue;
} else {
}
break;
}

var G__74151 = args74149.length;
switch (G__74151) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args74149.length)].join('')));

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
var args74156 = [];
var len__9158__auto___74159 = arguments.length;
var i__9159__auto___74160 = (0);
while(true){
if((i__9159__auto___74160 < len__9158__auto___74159)){
args74156.push((arguments[i__9159__auto___74160]));

var G__74161 = (i__9159__auto___74160 + (1));
i__9159__auto___74160 = G__74161;
continue;
} else {
}
break;
}

var G__74158 = args74156.length;
switch (G__74158) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args74156.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_74163 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_74163);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_74163,ret){
return (function (){
return fn1.call(null,val_74163);
});})(val_74163,ret))
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
var args74164 = [];
var len__9158__auto___74167 = arguments.length;
var i__9159__auto___74168 = (0);
while(true){
if((i__9159__auto___74168 < len__9158__auto___74167)){
args74164.push((arguments[i__9159__auto___74168]));

var G__74169 = (i__9159__auto___74168 + (1));
i__9159__auto___74168 = G__74169;
continue;
} else {
}
break;
}

var G__74166 = args74164.length;
switch (G__74166) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args74164.length)].join('')));

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
var n__9003__auto___74171 = n;
var x_74172 = (0);
while(true){
if((x_74172 < n__9003__auto___74171)){
(a[x_74172] = (0));

var G__74173 = (x_74172 + (1));
x_74172 = G__74173;
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

var G__74174 = (i + (1));
i = G__74174;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async74178 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async74178 = (function (alt_flag,flag,meta74179){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta74179 = meta74179;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async74178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_74180,meta74179__$1){
var self__ = this;
var _74180__$1 = this;
return (new cljs.core.async.t_cljs$core$async74178(self__.alt_flag,self__.flag,meta74179__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async74178.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_74180){
var self__ = this;
var _74180__$1 = this;
return self__.meta74179;
});})(flag))
;

cljs.core.async.t_cljs$core$async74178.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async74178.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async74178.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async74178.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async74178.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta74179","meta74179",365202449,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async74178.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async74178.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async74178";

cljs.core.async.t_cljs$core$async74178.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8698__auto__,writer__8699__auto__,opt__8700__auto__){
return cljs.core._write.call(null,writer__8699__auto__,"cljs.core.async/t_cljs$core$async74178");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async74178 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async74178(alt_flag__$1,flag__$1,meta74179){
return (new cljs.core.async.t_cljs$core$async74178(alt_flag__$1,flag__$1,meta74179));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async74178(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async74184 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async74184 = (function (alt_handler,flag,cb,meta74185){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta74185 = meta74185;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async74184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74186,meta74185__$1){
var self__ = this;
var _74186__$1 = this;
return (new cljs.core.async.t_cljs$core$async74184(self__.alt_handler,self__.flag,self__.cb,meta74185__$1));
});

cljs.core.async.t_cljs$core$async74184.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74186){
var self__ = this;
var _74186__$1 = this;
return self__.meta74185;
});

cljs.core.async.t_cljs$core$async74184.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async74184.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async74184.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async74184.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async74184.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta74185","meta74185",736682776,null)], null);
});

cljs.core.async.t_cljs$core$async74184.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async74184.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async74184";

cljs.core.async.t_cljs$core$async74184.cljs$lang$ctorPrWriter = (function (this__8698__auto__,writer__8699__auto__,opt__8700__auto__){
return cljs.core._write.call(null,writer__8699__auto__,"cljs.core.async/t_cljs$core$async74184");
});

cljs.core.async.__GT_t_cljs$core$async74184 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async74184(alt_handler__$1,flag__$1,cb__$1,meta74185){
return (new cljs.core.async.t_cljs$core$async74184(alt_handler__$1,flag__$1,cb__$1,meta74185));
});

}

return (new cljs.core.async.t_cljs$core$async74184(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__74187_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__74187_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__74188_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__74188_SHARP_,port], null));
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
var G__74189 = (i + (1));
i = G__74189;
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
var len__9158__auto___74195 = arguments.length;
var i__9159__auto___74196 = (0);
while(true){
if((i__9159__auto___74196 < len__9158__auto___74195)){
args__9165__auto__.push((arguments[i__9159__auto___74196]));

var G__74197 = (i__9159__auto___74196 + (1));
i__9159__auto___74196 = G__74197;
continue;
} else {
}
break;
}

var argseq__9166__auto__ = ((((1) < args__9165__auto__.length))?(new cljs.core.IndexedSeq(args__9165__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9166__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__74192){
var map__74193 = p__74192;
var map__74193__$1 = ((((!((map__74193 == null)))?((((map__74193.cljs$lang$protocol_mask$partition0$ & (64))) || (map__74193.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74193):map__74193);
var opts = map__74193__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq74190){
var G__74191 = cljs.core.first.call(null,seq74190);
var seq74190__$1 = cljs.core.next.call(null,seq74190);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__74191,seq74190__$1);
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
var args74198 = [];
var len__9158__auto___74248 = arguments.length;
var i__9159__auto___74249 = (0);
while(true){
if((i__9159__auto___74249 < len__9158__auto___74248)){
args74198.push((arguments[i__9159__auto___74249]));

var G__74250 = (i__9159__auto___74249 + (1));
i__9159__auto___74249 = G__74250;
continue;
} else {
}
break;
}

var G__74200 = args74198.length;
switch (G__74200) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args74198.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10448__auto___74252 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___74252){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___74252){
return (function (state_74224){
var state_val_74225 = (state_74224[(1)]);
if((state_val_74225 === (7))){
var inst_74220 = (state_74224[(2)]);
var state_74224__$1 = state_74224;
var statearr_74226_74253 = state_74224__$1;
(statearr_74226_74253[(2)] = inst_74220);

(statearr_74226_74253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74225 === (1))){
var state_74224__$1 = state_74224;
var statearr_74227_74254 = state_74224__$1;
(statearr_74227_74254[(2)] = null);

(statearr_74227_74254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74225 === (4))){
var inst_74203 = (state_74224[(7)]);
var inst_74203__$1 = (state_74224[(2)]);
var inst_74204 = (inst_74203__$1 == null);
var state_74224__$1 = (function (){var statearr_74228 = state_74224;
(statearr_74228[(7)] = inst_74203__$1);

return statearr_74228;
})();
if(cljs.core.truth_(inst_74204)){
var statearr_74229_74255 = state_74224__$1;
(statearr_74229_74255[(1)] = (5));

} else {
var statearr_74230_74256 = state_74224__$1;
(statearr_74230_74256[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74225 === (13))){
var state_74224__$1 = state_74224;
var statearr_74231_74257 = state_74224__$1;
(statearr_74231_74257[(2)] = null);

(statearr_74231_74257[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74225 === (6))){
var inst_74203 = (state_74224[(7)]);
var state_74224__$1 = state_74224;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_74224__$1,(11),to,inst_74203);
} else {
if((state_val_74225 === (3))){
var inst_74222 = (state_74224[(2)]);
var state_74224__$1 = state_74224;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74224__$1,inst_74222);
} else {
if((state_val_74225 === (12))){
var state_74224__$1 = state_74224;
var statearr_74232_74258 = state_74224__$1;
(statearr_74232_74258[(2)] = null);

(statearr_74232_74258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74225 === (2))){
var state_74224__$1 = state_74224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74224__$1,(4),from);
} else {
if((state_val_74225 === (11))){
var inst_74213 = (state_74224[(2)]);
var state_74224__$1 = state_74224;
if(cljs.core.truth_(inst_74213)){
var statearr_74233_74259 = state_74224__$1;
(statearr_74233_74259[(1)] = (12));

} else {
var statearr_74234_74260 = state_74224__$1;
(statearr_74234_74260[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74225 === (9))){
var state_74224__$1 = state_74224;
var statearr_74235_74261 = state_74224__$1;
(statearr_74235_74261[(2)] = null);

(statearr_74235_74261[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74225 === (5))){
var state_74224__$1 = state_74224;
if(cljs.core.truth_(close_QMARK_)){
var statearr_74236_74262 = state_74224__$1;
(statearr_74236_74262[(1)] = (8));

} else {
var statearr_74237_74263 = state_74224__$1;
(statearr_74237_74263[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74225 === (14))){
var inst_74218 = (state_74224[(2)]);
var state_74224__$1 = state_74224;
var statearr_74238_74264 = state_74224__$1;
(statearr_74238_74264[(2)] = inst_74218);

(statearr_74238_74264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74225 === (10))){
var inst_74210 = (state_74224[(2)]);
var state_74224__$1 = state_74224;
var statearr_74239_74265 = state_74224__$1;
(statearr_74239_74265[(2)] = inst_74210);

(statearr_74239_74265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74225 === (8))){
var inst_74207 = cljs.core.async.close_BANG_.call(null,to);
var state_74224__$1 = state_74224;
var statearr_74240_74266 = state_74224__$1;
(statearr_74240_74266[(2)] = inst_74207);

(statearr_74240_74266[(1)] = (10));


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
});})(c__10448__auto___74252))
;
return ((function (switch__10427__auto__,c__10448__auto___74252){
return (function() {
var cljs$core$async$state_machine__10428__auto__ = null;
var cljs$core$async$state_machine__10428__auto____0 = (function (){
var statearr_74244 = [null,null,null,null,null,null,null,null];
(statearr_74244[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_74244[(1)] = (1));

return statearr_74244;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_74224){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_74224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e74245){if((e74245 instanceof Object)){
var ex__10431__auto__ = e74245;
var statearr_74246_74267 = state_74224;
(statearr_74246_74267[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e74245;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74268 = state_74224;
state_74224 = G__74268;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_74224){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_74224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___74252))
})();
var state__10450__auto__ = (function (){var statearr_74247 = f__10449__auto__.call(null);
(statearr_74247[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___74252);

return statearr_74247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___74252))
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
return (function (p__74452){
var vec__74453 = p__74452;
var v = cljs.core.nth.call(null,vec__74453,(0),null);
var p = cljs.core.nth.call(null,vec__74453,(1),null);
var job = vec__74453;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__10448__auto___74635 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___74635,res,vec__74453,v,p,job,jobs,results){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___74635,res,vec__74453,v,p,job,jobs,results){
return (function (state_74458){
var state_val_74459 = (state_74458[(1)]);
if((state_val_74459 === (1))){
var state_74458__$1 = state_74458;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_74458__$1,(2),res,v);
} else {
if((state_val_74459 === (2))){
var inst_74455 = (state_74458[(2)]);
var inst_74456 = cljs.core.async.close_BANG_.call(null,res);
var state_74458__$1 = (function (){var statearr_74460 = state_74458;
(statearr_74460[(7)] = inst_74455);

return statearr_74460;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74458__$1,inst_74456);
} else {
return null;
}
}
});})(c__10448__auto___74635,res,vec__74453,v,p,job,jobs,results))
;
return ((function (switch__10427__auto__,c__10448__auto___74635,res,vec__74453,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0 = (function (){
var statearr_74464 = [null,null,null,null,null,null,null,null];
(statearr_74464[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__);

(statearr_74464[(1)] = (1));

return statearr_74464;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1 = (function (state_74458){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_74458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e74465){if((e74465 instanceof Object)){
var ex__10431__auto__ = e74465;
var statearr_74466_74636 = state_74458;
(statearr_74466_74636[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e74465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74637 = state_74458;
state_74458 = G__74637;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__ = function(state_74458){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1.call(this,state_74458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___74635,res,vec__74453,v,p,job,jobs,results))
})();
var state__10450__auto__ = (function (){var statearr_74467 = f__10449__auto__.call(null);
(statearr_74467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___74635);

return statearr_74467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___74635,res,vec__74453,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__74468){
var vec__74469 = p__74468;
var v = cljs.core.nth.call(null,vec__74469,(0),null);
var p = cljs.core.nth.call(null,vec__74469,(1),null);
var job = vec__74469;
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
var n__9003__auto___74638 = n;
var __74639 = (0);
while(true){
if((__74639 < n__9003__auto___74638)){
var G__74470_74640 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__74470_74640) {
case "compute":
var c__10448__auto___74642 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__74639,c__10448__auto___74642,G__74470_74640,n__9003__auto___74638,jobs,results,process,async){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (__74639,c__10448__auto___74642,G__74470_74640,n__9003__auto___74638,jobs,results,process,async){
return (function (state_74483){
var state_val_74484 = (state_74483[(1)]);
if((state_val_74484 === (1))){
var state_74483__$1 = state_74483;
var statearr_74485_74643 = state_74483__$1;
(statearr_74485_74643[(2)] = null);

(statearr_74485_74643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74484 === (2))){
var state_74483__$1 = state_74483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74483__$1,(4),jobs);
} else {
if((state_val_74484 === (3))){
var inst_74481 = (state_74483[(2)]);
var state_74483__$1 = state_74483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74483__$1,inst_74481);
} else {
if((state_val_74484 === (4))){
var inst_74473 = (state_74483[(2)]);
var inst_74474 = process.call(null,inst_74473);
var state_74483__$1 = state_74483;
if(cljs.core.truth_(inst_74474)){
var statearr_74486_74644 = state_74483__$1;
(statearr_74486_74644[(1)] = (5));

} else {
var statearr_74487_74645 = state_74483__$1;
(statearr_74487_74645[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74484 === (5))){
var state_74483__$1 = state_74483;
var statearr_74488_74646 = state_74483__$1;
(statearr_74488_74646[(2)] = null);

(statearr_74488_74646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74484 === (6))){
var state_74483__$1 = state_74483;
var statearr_74489_74647 = state_74483__$1;
(statearr_74489_74647[(2)] = null);

(statearr_74489_74647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74484 === (7))){
var inst_74479 = (state_74483[(2)]);
var state_74483__$1 = state_74483;
var statearr_74490_74648 = state_74483__$1;
(statearr_74490_74648[(2)] = inst_74479);

(statearr_74490_74648[(1)] = (3));


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
});})(__74639,c__10448__auto___74642,G__74470_74640,n__9003__auto___74638,jobs,results,process,async))
;
return ((function (__74639,switch__10427__auto__,c__10448__auto___74642,G__74470_74640,n__9003__auto___74638,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0 = (function (){
var statearr_74494 = [null,null,null,null,null,null,null];
(statearr_74494[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__);

(statearr_74494[(1)] = (1));

return statearr_74494;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1 = (function (state_74483){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_74483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e74495){if((e74495 instanceof Object)){
var ex__10431__auto__ = e74495;
var statearr_74496_74649 = state_74483;
(statearr_74496_74649[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e74495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74650 = state_74483;
state_74483 = G__74650;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__ = function(state_74483){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1.call(this,state_74483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__;
})()
;})(__74639,switch__10427__auto__,c__10448__auto___74642,G__74470_74640,n__9003__auto___74638,jobs,results,process,async))
})();
var state__10450__auto__ = (function (){var statearr_74497 = f__10449__auto__.call(null);
(statearr_74497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___74642);

return statearr_74497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(__74639,c__10448__auto___74642,G__74470_74640,n__9003__auto___74638,jobs,results,process,async))
);


break;
case "async":
var c__10448__auto___74651 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__74639,c__10448__auto___74651,G__74470_74640,n__9003__auto___74638,jobs,results,process,async){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (__74639,c__10448__auto___74651,G__74470_74640,n__9003__auto___74638,jobs,results,process,async){
return (function (state_74510){
var state_val_74511 = (state_74510[(1)]);
if((state_val_74511 === (1))){
var state_74510__$1 = state_74510;
var statearr_74512_74652 = state_74510__$1;
(statearr_74512_74652[(2)] = null);

(statearr_74512_74652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74511 === (2))){
var state_74510__$1 = state_74510;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74510__$1,(4),jobs);
} else {
if((state_val_74511 === (3))){
var inst_74508 = (state_74510[(2)]);
var state_74510__$1 = state_74510;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74510__$1,inst_74508);
} else {
if((state_val_74511 === (4))){
var inst_74500 = (state_74510[(2)]);
var inst_74501 = async.call(null,inst_74500);
var state_74510__$1 = state_74510;
if(cljs.core.truth_(inst_74501)){
var statearr_74513_74653 = state_74510__$1;
(statearr_74513_74653[(1)] = (5));

} else {
var statearr_74514_74654 = state_74510__$1;
(statearr_74514_74654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74511 === (5))){
var state_74510__$1 = state_74510;
var statearr_74515_74655 = state_74510__$1;
(statearr_74515_74655[(2)] = null);

(statearr_74515_74655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74511 === (6))){
var state_74510__$1 = state_74510;
var statearr_74516_74656 = state_74510__$1;
(statearr_74516_74656[(2)] = null);

(statearr_74516_74656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74511 === (7))){
var inst_74506 = (state_74510[(2)]);
var state_74510__$1 = state_74510;
var statearr_74517_74657 = state_74510__$1;
(statearr_74517_74657[(2)] = inst_74506);

(statearr_74517_74657[(1)] = (3));


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
});})(__74639,c__10448__auto___74651,G__74470_74640,n__9003__auto___74638,jobs,results,process,async))
;
return ((function (__74639,switch__10427__auto__,c__10448__auto___74651,G__74470_74640,n__9003__auto___74638,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0 = (function (){
var statearr_74521 = [null,null,null,null,null,null,null];
(statearr_74521[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__);

(statearr_74521[(1)] = (1));

return statearr_74521;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1 = (function (state_74510){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_74510);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e74522){if((e74522 instanceof Object)){
var ex__10431__auto__ = e74522;
var statearr_74523_74658 = state_74510;
(statearr_74523_74658[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e74522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74659 = state_74510;
state_74510 = G__74659;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__ = function(state_74510){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1.call(this,state_74510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__;
})()
;})(__74639,switch__10427__auto__,c__10448__auto___74651,G__74470_74640,n__9003__auto___74638,jobs,results,process,async))
})();
var state__10450__auto__ = (function (){var statearr_74524 = f__10449__auto__.call(null);
(statearr_74524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___74651);

return statearr_74524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(__74639,c__10448__auto___74651,G__74470_74640,n__9003__auto___74638,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__74660 = (__74639 + (1));
__74639 = G__74660;
continue;
} else {
}
break;
}

var c__10448__auto___74661 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___74661,jobs,results,process,async){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___74661,jobs,results,process,async){
return (function (state_74546){
var state_val_74547 = (state_74546[(1)]);
if((state_val_74547 === (1))){
var state_74546__$1 = state_74546;
var statearr_74548_74662 = state_74546__$1;
(statearr_74548_74662[(2)] = null);

(statearr_74548_74662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74547 === (2))){
var state_74546__$1 = state_74546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74546__$1,(4),from);
} else {
if((state_val_74547 === (3))){
var inst_74544 = (state_74546[(2)]);
var state_74546__$1 = state_74546;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74546__$1,inst_74544);
} else {
if((state_val_74547 === (4))){
var inst_74527 = (state_74546[(7)]);
var inst_74527__$1 = (state_74546[(2)]);
var inst_74528 = (inst_74527__$1 == null);
var state_74546__$1 = (function (){var statearr_74549 = state_74546;
(statearr_74549[(7)] = inst_74527__$1);

return statearr_74549;
})();
if(cljs.core.truth_(inst_74528)){
var statearr_74550_74663 = state_74546__$1;
(statearr_74550_74663[(1)] = (5));

} else {
var statearr_74551_74664 = state_74546__$1;
(statearr_74551_74664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74547 === (5))){
var inst_74530 = cljs.core.async.close_BANG_.call(null,jobs);
var state_74546__$1 = state_74546;
var statearr_74552_74665 = state_74546__$1;
(statearr_74552_74665[(2)] = inst_74530);

(statearr_74552_74665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74547 === (6))){
var inst_74532 = (state_74546[(8)]);
var inst_74527 = (state_74546[(7)]);
var inst_74532__$1 = cljs.core.async.chan.call(null,(1));
var inst_74533 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_74534 = [inst_74527,inst_74532__$1];
var inst_74535 = (new cljs.core.PersistentVector(null,2,(5),inst_74533,inst_74534,null));
var state_74546__$1 = (function (){var statearr_74553 = state_74546;
(statearr_74553[(8)] = inst_74532__$1);

return statearr_74553;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_74546__$1,(8),jobs,inst_74535);
} else {
if((state_val_74547 === (7))){
var inst_74542 = (state_74546[(2)]);
var state_74546__$1 = state_74546;
var statearr_74554_74666 = state_74546__$1;
(statearr_74554_74666[(2)] = inst_74542);

(statearr_74554_74666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74547 === (8))){
var inst_74532 = (state_74546[(8)]);
var inst_74537 = (state_74546[(2)]);
var state_74546__$1 = (function (){var statearr_74555 = state_74546;
(statearr_74555[(9)] = inst_74537);

return statearr_74555;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_74546__$1,(9),results,inst_74532);
} else {
if((state_val_74547 === (9))){
var inst_74539 = (state_74546[(2)]);
var state_74546__$1 = (function (){var statearr_74556 = state_74546;
(statearr_74556[(10)] = inst_74539);

return statearr_74556;
})();
var statearr_74557_74667 = state_74546__$1;
(statearr_74557_74667[(2)] = null);

(statearr_74557_74667[(1)] = (2));


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
});})(c__10448__auto___74661,jobs,results,process,async))
;
return ((function (switch__10427__auto__,c__10448__auto___74661,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0 = (function (){
var statearr_74561 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_74561[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__);

(statearr_74561[(1)] = (1));

return statearr_74561;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1 = (function (state_74546){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_74546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e74562){if((e74562 instanceof Object)){
var ex__10431__auto__ = e74562;
var statearr_74563_74668 = state_74546;
(statearr_74563_74668[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e74562;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74669 = state_74546;
state_74546 = G__74669;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__ = function(state_74546){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1.call(this,state_74546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___74661,jobs,results,process,async))
})();
var state__10450__auto__ = (function (){var statearr_74564 = f__10449__auto__.call(null);
(statearr_74564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___74661);

return statearr_74564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___74661,jobs,results,process,async))
);


var c__10448__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto__,jobs,results,process,async){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto__,jobs,results,process,async){
return (function (state_74602){
var state_val_74603 = (state_74602[(1)]);
if((state_val_74603 === (7))){
var inst_74598 = (state_74602[(2)]);
var state_74602__$1 = state_74602;
var statearr_74604_74670 = state_74602__$1;
(statearr_74604_74670[(2)] = inst_74598);

(statearr_74604_74670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74603 === (20))){
var state_74602__$1 = state_74602;
var statearr_74605_74671 = state_74602__$1;
(statearr_74605_74671[(2)] = null);

(statearr_74605_74671[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74603 === (1))){
var state_74602__$1 = state_74602;
var statearr_74606_74672 = state_74602__$1;
(statearr_74606_74672[(2)] = null);

(statearr_74606_74672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74603 === (4))){
var inst_74567 = (state_74602[(7)]);
var inst_74567__$1 = (state_74602[(2)]);
var inst_74568 = (inst_74567__$1 == null);
var state_74602__$1 = (function (){var statearr_74607 = state_74602;
(statearr_74607[(7)] = inst_74567__$1);

return statearr_74607;
})();
if(cljs.core.truth_(inst_74568)){
var statearr_74608_74673 = state_74602__$1;
(statearr_74608_74673[(1)] = (5));

} else {
var statearr_74609_74674 = state_74602__$1;
(statearr_74609_74674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74603 === (15))){
var inst_74580 = (state_74602[(8)]);
var state_74602__$1 = state_74602;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_74602__$1,(18),to,inst_74580);
} else {
if((state_val_74603 === (21))){
var inst_74593 = (state_74602[(2)]);
var state_74602__$1 = state_74602;
var statearr_74610_74675 = state_74602__$1;
(statearr_74610_74675[(2)] = inst_74593);

(statearr_74610_74675[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74603 === (13))){
var inst_74595 = (state_74602[(2)]);
var state_74602__$1 = (function (){var statearr_74611 = state_74602;
(statearr_74611[(9)] = inst_74595);

return statearr_74611;
})();
var statearr_74612_74676 = state_74602__$1;
(statearr_74612_74676[(2)] = null);

(statearr_74612_74676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74603 === (6))){
var inst_74567 = (state_74602[(7)]);
var state_74602__$1 = state_74602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74602__$1,(11),inst_74567);
} else {
if((state_val_74603 === (17))){
var inst_74588 = (state_74602[(2)]);
var state_74602__$1 = state_74602;
if(cljs.core.truth_(inst_74588)){
var statearr_74613_74677 = state_74602__$1;
(statearr_74613_74677[(1)] = (19));

} else {
var statearr_74614_74678 = state_74602__$1;
(statearr_74614_74678[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74603 === (3))){
var inst_74600 = (state_74602[(2)]);
var state_74602__$1 = state_74602;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74602__$1,inst_74600);
} else {
if((state_val_74603 === (12))){
var inst_74577 = (state_74602[(10)]);
var state_74602__$1 = state_74602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74602__$1,(14),inst_74577);
} else {
if((state_val_74603 === (2))){
var state_74602__$1 = state_74602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74602__$1,(4),results);
} else {
if((state_val_74603 === (19))){
var state_74602__$1 = state_74602;
var statearr_74615_74679 = state_74602__$1;
(statearr_74615_74679[(2)] = null);

(statearr_74615_74679[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74603 === (11))){
var inst_74577 = (state_74602[(2)]);
var state_74602__$1 = (function (){var statearr_74616 = state_74602;
(statearr_74616[(10)] = inst_74577);

return statearr_74616;
})();
var statearr_74617_74680 = state_74602__$1;
(statearr_74617_74680[(2)] = null);

(statearr_74617_74680[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74603 === (9))){
var state_74602__$1 = state_74602;
var statearr_74618_74681 = state_74602__$1;
(statearr_74618_74681[(2)] = null);

(statearr_74618_74681[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74603 === (5))){
var state_74602__$1 = state_74602;
if(cljs.core.truth_(close_QMARK_)){
var statearr_74619_74682 = state_74602__$1;
(statearr_74619_74682[(1)] = (8));

} else {
var statearr_74620_74683 = state_74602__$1;
(statearr_74620_74683[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74603 === (14))){
var inst_74580 = (state_74602[(8)]);
var inst_74582 = (state_74602[(11)]);
var inst_74580__$1 = (state_74602[(2)]);
var inst_74581 = (inst_74580__$1 == null);
var inst_74582__$1 = cljs.core.not.call(null,inst_74581);
var state_74602__$1 = (function (){var statearr_74621 = state_74602;
(statearr_74621[(8)] = inst_74580__$1);

(statearr_74621[(11)] = inst_74582__$1);

return statearr_74621;
})();
if(inst_74582__$1){
var statearr_74622_74684 = state_74602__$1;
(statearr_74622_74684[(1)] = (15));

} else {
var statearr_74623_74685 = state_74602__$1;
(statearr_74623_74685[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74603 === (16))){
var inst_74582 = (state_74602[(11)]);
var state_74602__$1 = state_74602;
var statearr_74624_74686 = state_74602__$1;
(statearr_74624_74686[(2)] = inst_74582);

(statearr_74624_74686[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74603 === (10))){
var inst_74574 = (state_74602[(2)]);
var state_74602__$1 = state_74602;
var statearr_74625_74687 = state_74602__$1;
(statearr_74625_74687[(2)] = inst_74574);

(statearr_74625_74687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74603 === (18))){
var inst_74585 = (state_74602[(2)]);
var state_74602__$1 = state_74602;
var statearr_74626_74688 = state_74602__$1;
(statearr_74626_74688[(2)] = inst_74585);

(statearr_74626_74688[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74603 === (8))){
var inst_74571 = cljs.core.async.close_BANG_.call(null,to);
var state_74602__$1 = state_74602;
var statearr_74627_74689 = state_74602__$1;
(statearr_74627_74689[(2)] = inst_74571);

(statearr_74627_74689[(1)] = (10));


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
var statearr_74631 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_74631[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__);

(statearr_74631[(1)] = (1));

return statearr_74631;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1 = (function (state_74602){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_74602);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e74632){if((e74632 instanceof Object)){
var ex__10431__auto__ = e74632;
var statearr_74633_74690 = state_74602;
(statearr_74633_74690[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e74632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74691 = state_74602;
state_74602 = G__74691;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__ = function(state_74602){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1.call(this,state_74602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10428__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto__,jobs,results,process,async))
})();
var state__10450__auto__ = (function (){var statearr_74634 = f__10449__auto__.call(null);
(statearr_74634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto__);

return statearr_74634;
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
var args74692 = [];
var len__9158__auto___74695 = arguments.length;
var i__9159__auto___74696 = (0);
while(true){
if((i__9159__auto___74696 < len__9158__auto___74695)){
args74692.push((arguments[i__9159__auto___74696]));

var G__74697 = (i__9159__auto___74696 + (1));
i__9159__auto___74696 = G__74697;
continue;
} else {
}
break;
}

var G__74694 = args74692.length;
switch (G__74694) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args74692.length)].join('')));

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
var args74699 = [];
var len__9158__auto___74702 = arguments.length;
var i__9159__auto___74703 = (0);
while(true){
if((i__9159__auto___74703 < len__9158__auto___74702)){
args74699.push((arguments[i__9159__auto___74703]));

var G__74704 = (i__9159__auto___74703 + (1));
i__9159__auto___74703 = G__74704;
continue;
} else {
}
break;
}

var G__74701 = args74699.length;
switch (G__74701) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args74699.length)].join('')));

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
var args74706 = [];
var len__9158__auto___74759 = arguments.length;
var i__9159__auto___74760 = (0);
while(true){
if((i__9159__auto___74760 < len__9158__auto___74759)){
args74706.push((arguments[i__9159__auto___74760]));

var G__74761 = (i__9159__auto___74760 + (1));
i__9159__auto___74760 = G__74761;
continue;
} else {
}
break;
}

var G__74708 = args74706.length;
switch (G__74708) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args74706.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__10448__auto___74763 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___74763,tc,fc){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___74763,tc,fc){
return (function (state_74734){
var state_val_74735 = (state_74734[(1)]);
if((state_val_74735 === (7))){
var inst_74730 = (state_74734[(2)]);
var state_74734__$1 = state_74734;
var statearr_74736_74764 = state_74734__$1;
(statearr_74736_74764[(2)] = inst_74730);

(statearr_74736_74764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74735 === (1))){
var state_74734__$1 = state_74734;
var statearr_74737_74765 = state_74734__$1;
(statearr_74737_74765[(2)] = null);

(statearr_74737_74765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74735 === (4))){
var inst_74711 = (state_74734[(7)]);
var inst_74711__$1 = (state_74734[(2)]);
var inst_74712 = (inst_74711__$1 == null);
var state_74734__$1 = (function (){var statearr_74738 = state_74734;
(statearr_74738[(7)] = inst_74711__$1);

return statearr_74738;
})();
if(cljs.core.truth_(inst_74712)){
var statearr_74739_74766 = state_74734__$1;
(statearr_74739_74766[(1)] = (5));

} else {
var statearr_74740_74767 = state_74734__$1;
(statearr_74740_74767[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74735 === (13))){
var state_74734__$1 = state_74734;
var statearr_74741_74768 = state_74734__$1;
(statearr_74741_74768[(2)] = null);

(statearr_74741_74768[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74735 === (6))){
var inst_74711 = (state_74734[(7)]);
var inst_74717 = p.call(null,inst_74711);
var state_74734__$1 = state_74734;
if(cljs.core.truth_(inst_74717)){
var statearr_74742_74769 = state_74734__$1;
(statearr_74742_74769[(1)] = (9));

} else {
var statearr_74743_74770 = state_74734__$1;
(statearr_74743_74770[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74735 === (3))){
var inst_74732 = (state_74734[(2)]);
var state_74734__$1 = state_74734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74734__$1,inst_74732);
} else {
if((state_val_74735 === (12))){
var state_74734__$1 = state_74734;
var statearr_74744_74771 = state_74734__$1;
(statearr_74744_74771[(2)] = null);

(statearr_74744_74771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74735 === (2))){
var state_74734__$1 = state_74734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74734__$1,(4),ch);
} else {
if((state_val_74735 === (11))){
var inst_74711 = (state_74734[(7)]);
var inst_74721 = (state_74734[(2)]);
var state_74734__$1 = state_74734;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_74734__$1,(8),inst_74721,inst_74711);
} else {
if((state_val_74735 === (9))){
var state_74734__$1 = state_74734;
var statearr_74745_74772 = state_74734__$1;
(statearr_74745_74772[(2)] = tc);

(statearr_74745_74772[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74735 === (5))){
var inst_74714 = cljs.core.async.close_BANG_.call(null,tc);
var inst_74715 = cljs.core.async.close_BANG_.call(null,fc);
var state_74734__$1 = (function (){var statearr_74746 = state_74734;
(statearr_74746[(8)] = inst_74714);

return statearr_74746;
})();
var statearr_74747_74773 = state_74734__$1;
(statearr_74747_74773[(2)] = inst_74715);

(statearr_74747_74773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74735 === (14))){
var inst_74728 = (state_74734[(2)]);
var state_74734__$1 = state_74734;
var statearr_74748_74774 = state_74734__$1;
(statearr_74748_74774[(2)] = inst_74728);

(statearr_74748_74774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74735 === (10))){
var state_74734__$1 = state_74734;
var statearr_74749_74775 = state_74734__$1;
(statearr_74749_74775[(2)] = fc);

(statearr_74749_74775[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74735 === (8))){
var inst_74723 = (state_74734[(2)]);
var state_74734__$1 = state_74734;
if(cljs.core.truth_(inst_74723)){
var statearr_74750_74776 = state_74734__$1;
(statearr_74750_74776[(1)] = (12));

} else {
var statearr_74751_74777 = state_74734__$1;
(statearr_74751_74777[(1)] = (13));

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
});})(c__10448__auto___74763,tc,fc))
;
return ((function (switch__10427__auto__,c__10448__auto___74763,tc,fc){
return (function() {
var cljs$core$async$state_machine__10428__auto__ = null;
var cljs$core$async$state_machine__10428__auto____0 = (function (){
var statearr_74755 = [null,null,null,null,null,null,null,null,null];
(statearr_74755[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_74755[(1)] = (1));

return statearr_74755;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_74734){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_74734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e74756){if((e74756 instanceof Object)){
var ex__10431__auto__ = e74756;
var statearr_74757_74778 = state_74734;
(statearr_74757_74778[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e74756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74779 = state_74734;
state_74734 = G__74779;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_74734){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_74734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___74763,tc,fc))
})();
var state__10450__auto__ = (function (){var statearr_74758 = f__10449__auto__.call(null);
(statearr_74758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___74763);

return statearr_74758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___74763,tc,fc))
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
return (function (state_74843){
var state_val_74844 = (state_74843[(1)]);
if((state_val_74844 === (7))){
var inst_74839 = (state_74843[(2)]);
var state_74843__$1 = state_74843;
var statearr_74845_74866 = state_74843__$1;
(statearr_74845_74866[(2)] = inst_74839);

(statearr_74845_74866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74844 === (1))){
var inst_74823 = init;
var state_74843__$1 = (function (){var statearr_74846 = state_74843;
(statearr_74846[(7)] = inst_74823);

return statearr_74846;
})();
var statearr_74847_74867 = state_74843__$1;
(statearr_74847_74867[(2)] = null);

(statearr_74847_74867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74844 === (4))){
var inst_74826 = (state_74843[(8)]);
var inst_74826__$1 = (state_74843[(2)]);
var inst_74827 = (inst_74826__$1 == null);
var state_74843__$1 = (function (){var statearr_74848 = state_74843;
(statearr_74848[(8)] = inst_74826__$1);

return statearr_74848;
})();
if(cljs.core.truth_(inst_74827)){
var statearr_74849_74868 = state_74843__$1;
(statearr_74849_74868[(1)] = (5));

} else {
var statearr_74850_74869 = state_74843__$1;
(statearr_74850_74869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74844 === (6))){
var inst_74826 = (state_74843[(8)]);
var inst_74823 = (state_74843[(7)]);
var inst_74830 = (state_74843[(9)]);
var inst_74830__$1 = f.call(null,inst_74823,inst_74826);
var inst_74831 = cljs.core.reduced_QMARK_.call(null,inst_74830__$1);
var state_74843__$1 = (function (){var statearr_74851 = state_74843;
(statearr_74851[(9)] = inst_74830__$1);

return statearr_74851;
})();
if(inst_74831){
var statearr_74852_74870 = state_74843__$1;
(statearr_74852_74870[(1)] = (8));

} else {
var statearr_74853_74871 = state_74843__$1;
(statearr_74853_74871[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74844 === (3))){
var inst_74841 = (state_74843[(2)]);
var state_74843__$1 = state_74843;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74843__$1,inst_74841);
} else {
if((state_val_74844 === (2))){
var state_74843__$1 = state_74843;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74843__$1,(4),ch);
} else {
if((state_val_74844 === (9))){
var inst_74830 = (state_74843[(9)]);
var inst_74823 = inst_74830;
var state_74843__$1 = (function (){var statearr_74854 = state_74843;
(statearr_74854[(7)] = inst_74823);

return statearr_74854;
})();
var statearr_74855_74872 = state_74843__$1;
(statearr_74855_74872[(2)] = null);

(statearr_74855_74872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74844 === (5))){
var inst_74823 = (state_74843[(7)]);
var state_74843__$1 = state_74843;
var statearr_74856_74873 = state_74843__$1;
(statearr_74856_74873[(2)] = inst_74823);

(statearr_74856_74873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74844 === (10))){
var inst_74837 = (state_74843[(2)]);
var state_74843__$1 = state_74843;
var statearr_74857_74874 = state_74843__$1;
(statearr_74857_74874[(2)] = inst_74837);

(statearr_74857_74874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74844 === (8))){
var inst_74830 = (state_74843[(9)]);
var inst_74833 = cljs.core.deref.call(null,inst_74830);
var state_74843__$1 = state_74843;
var statearr_74858_74875 = state_74843__$1;
(statearr_74858_74875[(2)] = inst_74833);

(statearr_74858_74875[(1)] = (10));


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
var statearr_74862 = [null,null,null,null,null,null,null,null,null,null];
(statearr_74862[(0)] = cljs$core$async$reduce_$_state_machine__10428__auto__);

(statearr_74862[(1)] = (1));

return statearr_74862;
});
var cljs$core$async$reduce_$_state_machine__10428__auto____1 = (function (state_74843){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_74843);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e74863){if((e74863 instanceof Object)){
var ex__10431__auto__ = e74863;
var statearr_74864_74876 = state_74843;
(statearr_74864_74876[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e74863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74877 = state_74843;
state_74843 = G__74877;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10428__auto__ = function(state_74843){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10428__auto____1.call(this,state_74843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10428__auto____0;
cljs$core$async$reduce_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10428__auto____1;
return cljs$core$async$reduce_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto__))
})();
var state__10450__auto__ = (function (){var statearr_74865 = f__10449__auto__.call(null);
(statearr_74865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto__);

return statearr_74865;
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
var args74878 = [];
var len__9158__auto___74930 = arguments.length;
var i__9159__auto___74931 = (0);
while(true){
if((i__9159__auto___74931 < len__9158__auto___74930)){
args74878.push((arguments[i__9159__auto___74931]));

var G__74932 = (i__9159__auto___74931 + (1));
i__9159__auto___74931 = G__74932;
continue;
} else {
}
break;
}

var G__74880 = args74878.length;
switch (G__74880) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args74878.length)].join('')));

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
return (function (state_74905){
var state_val_74906 = (state_74905[(1)]);
if((state_val_74906 === (7))){
var inst_74887 = (state_74905[(2)]);
var state_74905__$1 = state_74905;
var statearr_74907_74934 = state_74905__$1;
(statearr_74907_74934[(2)] = inst_74887);

(statearr_74907_74934[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74906 === (1))){
var inst_74881 = cljs.core.seq.call(null,coll);
var inst_74882 = inst_74881;
var state_74905__$1 = (function (){var statearr_74908 = state_74905;
(statearr_74908[(7)] = inst_74882);

return statearr_74908;
})();
var statearr_74909_74935 = state_74905__$1;
(statearr_74909_74935[(2)] = null);

(statearr_74909_74935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74906 === (4))){
var inst_74882 = (state_74905[(7)]);
var inst_74885 = cljs.core.first.call(null,inst_74882);
var state_74905__$1 = state_74905;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_74905__$1,(7),ch,inst_74885);
} else {
if((state_val_74906 === (13))){
var inst_74899 = (state_74905[(2)]);
var state_74905__$1 = state_74905;
var statearr_74910_74936 = state_74905__$1;
(statearr_74910_74936[(2)] = inst_74899);

(statearr_74910_74936[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74906 === (6))){
var inst_74890 = (state_74905[(2)]);
var state_74905__$1 = state_74905;
if(cljs.core.truth_(inst_74890)){
var statearr_74911_74937 = state_74905__$1;
(statearr_74911_74937[(1)] = (8));

} else {
var statearr_74912_74938 = state_74905__$1;
(statearr_74912_74938[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74906 === (3))){
var inst_74903 = (state_74905[(2)]);
var state_74905__$1 = state_74905;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74905__$1,inst_74903);
} else {
if((state_val_74906 === (12))){
var state_74905__$1 = state_74905;
var statearr_74913_74939 = state_74905__$1;
(statearr_74913_74939[(2)] = null);

(statearr_74913_74939[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74906 === (2))){
var inst_74882 = (state_74905[(7)]);
var state_74905__$1 = state_74905;
if(cljs.core.truth_(inst_74882)){
var statearr_74914_74940 = state_74905__$1;
(statearr_74914_74940[(1)] = (4));

} else {
var statearr_74915_74941 = state_74905__$1;
(statearr_74915_74941[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74906 === (11))){
var inst_74896 = cljs.core.async.close_BANG_.call(null,ch);
var state_74905__$1 = state_74905;
var statearr_74916_74942 = state_74905__$1;
(statearr_74916_74942[(2)] = inst_74896);

(statearr_74916_74942[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74906 === (9))){
var state_74905__$1 = state_74905;
if(cljs.core.truth_(close_QMARK_)){
var statearr_74917_74943 = state_74905__$1;
(statearr_74917_74943[(1)] = (11));

} else {
var statearr_74918_74944 = state_74905__$1;
(statearr_74918_74944[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74906 === (5))){
var inst_74882 = (state_74905[(7)]);
var state_74905__$1 = state_74905;
var statearr_74919_74945 = state_74905__$1;
(statearr_74919_74945[(2)] = inst_74882);

(statearr_74919_74945[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74906 === (10))){
var inst_74901 = (state_74905[(2)]);
var state_74905__$1 = state_74905;
var statearr_74920_74946 = state_74905__$1;
(statearr_74920_74946[(2)] = inst_74901);

(statearr_74920_74946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74906 === (8))){
var inst_74882 = (state_74905[(7)]);
var inst_74892 = cljs.core.next.call(null,inst_74882);
var inst_74882__$1 = inst_74892;
var state_74905__$1 = (function (){var statearr_74921 = state_74905;
(statearr_74921[(7)] = inst_74882__$1);

return statearr_74921;
})();
var statearr_74922_74947 = state_74905__$1;
(statearr_74922_74947[(2)] = null);

(statearr_74922_74947[(1)] = (2));


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
var statearr_74926 = [null,null,null,null,null,null,null,null];
(statearr_74926[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_74926[(1)] = (1));

return statearr_74926;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_74905){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_74905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e74927){if((e74927 instanceof Object)){
var ex__10431__auto__ = e74927;
var statearr_74928_74948 = state_74905;
(statearr_74928_74948[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e74927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74949 = state_74905;
state_74905 = G__74949;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_74905){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_74905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto__))
})();
var state__10450__auto__ = (function (){var statearr_74929 = f__10449__auto__.call(null);
(statearr_74929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto__);

return statearr_74929;
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
if(typeof cljs.core.async.t_cljs$core$async75171 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async75171 = (function (mult,ch,cs,meta75172){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta75172 = meta75172;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async75171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_75173,meta75172__$1){
var self__ = this;
var _75173__$1 = this;
return (new cljs.core.async.t_cljs$core$async75171(self__.mult,self__.ch,self__.cs,meta75172__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async75171.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_75173){
var self__ = this;
var _75173__$1 = this;
return self__.meta75172;
});})(cs))
;

cljs.core.async.t_cljs$core$async75171.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async75171.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async75171.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async75171.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async75171.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async75171.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async75171.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta75172","meta75172",-1366047436,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async75171.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async75171.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async75171";

cljs.core.async.t_cljs$core$async75171.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8698__auto__,writer__8699__auto__,opt__8700__auto__){
return cljs.core._write.call(null,writer__8699__auto__,"cljs.core.async/t_cljs$core$async75171");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async75171 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async75171(mult__$1,ch__$1,cs__$1,meta75172){
return (new cljs.core.async.t_cljs$core$async75171(mult__$1,ch__$1,cs__$1,meta75172));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async75171(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10448__auto___75392 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___75392,cs,m,dchan,dctr,done){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___75392,cs,m,dchan,dctr,done){
return (function (state_75304){
var state_val_75305 = (state_75304[(1)]);
if((state_val_75305 === (7))){
var inst_75300 = (state_75304[(2)]);
var state_75304__$1 = state_75304;
var statearr_75306_75393 = state_75304__$1;
(statearr_75306_75393[(2)] = inst_75300);

(statearr_75306_75393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75305 === (20))){
var inst_75205 = (state_75304[(7)]);
var inst_75215 = cljs.core.first.call(null,inst_75205);
var inst_75216 = cljs.core.nth.call(null,inst_75215,(0),null);
var inst_75217 = cljs.core.nth.call(null,inst_75215,(1),null);
var state_75304__$1 = (function (){var statearr_75307 = state_75304;
(statearr_75307[(8)] = inst_75216);

return statearr_75307;
})();
if(cljs.core.truth_(inst_75217)){
var statearr_75308_75394 = state_75304__$1;
(statearr_75308_75394[(1)] = (22));

} else {
var statearr_75309_75395 = state_75304__$1;
(statearr_75309_75395[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75305 === (27))){
var inst_75176 = (state_75304[(9)]);
var inst_75252 = (state_75304[(10)]);
var inst_75247 = (state_75304[(11)]);
var inst_75245 = (state_75304[(12)]);
var inst_75252__$1 = cljs.core._nth.call(null,inst_75245,inst_75247);
var inst_75253 = cljs.core.async.put_BANG_.call(null,inst_75252__$1,inst_75176,done);
var state_75304__$1 = (function (){var statearr_75310 = state_75304;
(statearr_75310[(10)] = inst_75252__$1);

return statearr_75310;
})();
if(cljs.core.truth_(inst_75253)){
var statearr_75311_75396 = state_75304__$1;
(statearr_75311_75396[(1)] = (30));

} else {
var statearr_75312_75397 = state_75304__$1;
(statearr_75312_75397[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75305 === (1))){
var state_75304__$1 = state_75304;
var statearr_75313_75398 = state_75304__$1;
(statearr_75313_75398[(2)] = null);

(statearr_75313_75398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75305 === (24))){
var inst_75205 = (state_75304[(7)]);
var inst_75222 = (state_75304[(2)]);
var inst_75223 = cljs.core.next.call(null,inst_75205);
var inst_75185 = inst_75223;
var inst_75186 = null;
var inst_75187 = (0);
var inst_75188 = (0);
var state_75304__$1 = (function (){var statearr_75314 = state_75304;
(statearr_75314[(13)] = inst_75222);

(statearr_75314[(14)] = inst_75187);

(statearr_75314[(15)] = inst_75186);

(statearr_75314[(16)] = inst_75185);

(statearr_75314[(17)] = inst_75188);

return statearr_75314;
})();
var statearr_75315_75399 = state_75304__$1;
(statearr_75315_75399[(2)] = null);

(statearr_75315_75399[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75305 === (39))){
var state_75304__$1 = state_75304;
var statearr_75319_75400 = state_75304__$1;
(statearr_75319_75400[(2)] = null);

(statearr_75319_75400[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75305 === (4))){
var inst_75176 = (state_75304[(9)]);
var inst_75176__$1 = (state_75304[(2)]);
var inst_75177 = (inst_75176__$1 == null);
var state_75304__$1 = (function (){var statearr_75320 = state_75304;
(statearr_75320[(9)] = inst_75176__$1);

return statearr_75320;
})();
if(cljs.core.truth_(inst_75177)){
var statearr_75321_75401 = state_75304__$1;
(statearr_75321_75401[(1)] = (5));

} else {
var statearr_75322_75402 = state_75304__$1;
(statearr_75322_75402[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75305 === (15))){
var inst_75187 = (state_75304[(14)]);
var inst_75186 = (state_75304[(15)]);
var inst_75185 = (state_75304[(16)]);
var inst_75188 = (state_75304[(17)]);
var inst_75201 = (state_75304[(2)]);
var inst_75202 = (inst_75188 + (1));
var tmp75316 = inst_75187;
var tmp75317 = inst_75186;
var tmp75318 = inst_75185;
var inst_75185__$1 = tmp75318;
var inst_75186__$1 = tmp75317;
var inst_75187__$1 = tmp75316;
var inst_75188__$1 = inst_75202;
var state_75304__$1 = (function (){var statearr_75323 = state_75304;
(statearr_75323[(14)] = inst_75187__$1);

(statearr_75323[(15)] = inst_75186__$1);

(statearr_75323[(16)] = inst_75185__$1);

(statearr_75323[(17)] = inst_75188__$1);

(statearr_75323[(18)] = inst_75201);

return statearr_75323;
})();
var statearr_75324_75403 = state_75304__$1;
(statearr_75324_75403[(2)] = null);

(statearr_75324_75403[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75305 === (21))){
var inst_75226 = (state_75304[(2)]);
var state_75304__$1 = state_75304;
var statearr_75328_75404 = state_75304__$1;
(statearr_75328_75404[(2)] = inst_75226);

(statearr_75328_75404[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75305 === (31))){
var inst_75252 = (state_75304[(10)]);
var inst_75256 = done.call(null,null);
var inst_75257 = cljs.core.async.untap_STAR_.call(null,m,inst_75252);
var state_75304__$1 = (function (){var statearr_75329 = state_75304;
(statearr_75329[(19)] = inst_75256);

return statearr_75329;
})();
var statearr_75330_75405 = state_75304__$1;
(statearr_75330_75405[(2)] = inst_75257);

(statearr_75330_75405[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75305 === (32))){
var inst_75246 = (state_75304[(20)]);
var inst_75244 = (state_75304[(21)]);
var inst_75247 = (state_75304[(11)]);
var inst_75245 = (state_75304[(12)]);
var inst_75259 = (state_75304[(2)]);
var inst_75260 = (inst_75247 + (1));
var tmp75325 = inst_75246;
var tmp75326 = inst_75244;
var tmp75327 = inst_75245;
var inst_75244__$1 = tmp75326;
var inst_75245__$1 = tmp75327;
var inst_75246__$1 = tmp75325;
var inst_75247__$1 = inst_75260;
var state_75304__$1 = (function (){var statearr_75331 = state_75304;
(statearr_75331[(20)] = inst_75246__$1);

(statearr_75331[(21)] = inst_75244__$1);

(statearr_75331[(11)] = inst_75247__$1);

(statearr_75331[(12)] = inst_75245__$1);

(statearr_75331[(22)] = inst_75259);

return statearr_75331;
})();
var statearr_75332_75406 = state_75304__$1;
(statearr_75332_75406[(2)] = null);

(statearr_75332_75406[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75305 === (40))){
var inst_75272 = (state_75304[(23)]);
var inst_75276 = done.call(null,null);
var inst_75277 = cljs.core.async.untap_STAR_.call(null,m,inst_75272);
var state_75304__$1 = (function (){var statearr_75333 = state_75304;
(statearr_75333[(24)] = inst_75276);

return statearr_75333;
})();
var statearr_75334_75407 = state_75304__$1;
(statearr_75334_75407[(2)] = inst_75277);

(statearr_75334_75407[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75305 === (33))){
var inst_75263 = (state_75304[(25)]);
var inst_75265 = cljs.core.chunked_seq_QMARK_.call(null,inst_75263);
var state_75304__$1 = state_75304;
if(inst_75265){
var statearr_75335_75408 = state_75304__$1;
(statearr_75335_75408[(1)] = (36));

} else {
var statearr_75336_75409 = state_75304__$1;
(statearr_75336_75409[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75305 === (13))){
var inst_75195 = (state_75304[(26)]);
var inst_75198 = cljs.core.async.close_BANG_.call(null,inst_75195);
var state_75304__$1 = state_75304;
var statearr_75337_75410 = state_75304__$1;
(statearr_75337_75410[(2)] = inst_75198);

(statearr_75337_75410[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75305 === (22))){
var inst_75216 = (state_75304[(8)]);
var inst_75219 = cljs.core.async.close_BANG_.call(null,inst_75216);
var state_75304__$1 = state_75304;
var statearr_75338_75411 = state_75304__$1;
(statearr_75338_75411[(2)] = inst_75219);

(statearr_75338_75411[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75305 === (36))){
var inst_75263 = (state_75304[(25)]);
var inst_75267 = cljs.core.chunk_first.call(null,inst_75263);
var inst_75268 = cljs.core.chunk_rest.call(null,inst_75263);
var inst_75269 = cljs.core.count.call(null,inst_75267);
var inst_75244 = inst_75268;
var inst_75245 = inst_75267;
var inst_75246 = inst_75269;
var inst_75247 = (0);
var state_75304__$1 = (function (){var statearr_75339 = state_75304;
(statearr_75339[(20)] = inst_75246);

(statearr_75339[(21)] = inst_75244);

(statearr_75339[(11)] = inst_75247);

(statearr_75339[(12)] = inst_75245);

return statearr_75339;
})();
var statearr_75340_75412 = state_75304__$1;
(statearr_75340_75412[(2)] = null);

(statearr_75340_75412[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75305 === (41))){
var inst_75263 = (state_75304[(25)]);
var inst_75279 = (state_75304[(2)]);
var inst_75280 = cljs.core.next.call(null,inst_75263);
var inst_75244 = inst_75280;
var inst_75245 = null;
var inst_75246 = (0);
var inst_75247 = (0);
var state_75304__$1 = (function (){var statearr_75341 = state_75304;
(statearr_75341[(27)] = inst_75279);

(statearr_75341[(20)] = inst_75246);

(statearr_75341[(21)] = inst_75244);

(statearr_75341[(11)] = inst_75247);

(statearr_75341[(12)] = inst_75245);

return statearr_75341;
})();
var statearr_75342_75413 = state_75304__$1;
(statearr_75342_75413[(2)] = null);

(statearr_75342_75413[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75305 === (43))){
var state_75304__$1 = state_75304;
var statearr_75343_75414 = state_75304__$1;
(statearr_75343_75414[(2)] = null);

(statearr_75343_75414[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75305 === (29))){
var inst_75288 = (state_75304[(2)]);
var state_75304__$1 = state_75304;
var statearr_75344_75415 = state_75304__$1;
(statearr_75344_75415[(2)] = inst_75288);

(statearr_75344_75415[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75305 === (44))){
var inst_75297 = (state_75304[(2)]);
var state_75304__$1 = (function (){var statearr_75345 = state_75304;
(statearr_75345[(28)] = inst_75297);

return statearr_75345;
})();
var statearr_75346_75416 = state_75304__$1;
(statearr_75346_75416[(2)] = null);

(statearr_75346_75416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75305 === (6))){
var inst_75236 = (state_75304[(29)]);
var inst_75235 = cljs.core.deref.call(null,cs);
var inst_75236__$1 = cljs.core.keys.call(null,inst_75235);
var inst_75237 = cljs.core.count.call(null,inst_75236__$1);
var inst_75238 = cljs.core.reset_BANG_.call(null,dctr,inst_75237);
var inst_75243 = cljs.core.seq.call(null,inst_75236__$1);
var inst_75244 = inst_75243;
var inst_75245 = null;
var inst_75246 = (0);
var inst_75247 = (0);
var state_75304__$1 = (function (){var statearr_75347 = state_75304;
(statearr_75347[(20)] = inst_75246);

(statearr_75347[(21)] = inst_75244);

(statearr_75347[(29)] = inst_75236__$1);

(statearr_75347[(30)] = inst_75238);

(statearr_75347[(11)] = inst_75247);

(statearr_75347[(12)] = inst_75245);

return statearr_75347;
})();
var statearr_75348_75417 = state_75304__$1;
(statearr_75348_75417[(2)] = null);

(statearr_75348_75417[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75305 === (28))){
var inst_75263 = (state_75304[(25)]);
var inst_75244 = (state_75304[(21)]);
var inst_75263__$1 = cljs.core.seq.call(null,inst_75244);
var state_75304__$1 = (function (){var statearr_75349 = state_75304;
(statearr_75349[(25)] = inst_75263__$1);

return statearr_75349;
})();
if(inst_75263__$1){
var statearr_75350_75418 = state_75304__$1;
(statearr_75350_75418[(1)] = (33));

} else {
var statearr_75351_75419 = state_75304__$1;
(statearr_75351_75419[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75305 === (25))){
var inst_75246 = (state_75304[(20)]);
var inst_75247 = (state_75304[(11)]);
var inst_75249 = (inst_75247 < inst_75246);
var inst_75250 = inst_75249;
var state_75304__$1 = state_75304;
if(cljs.core.truth_(inst_75250)){
var statearr_75352_75420 = state_75304__$1;
(statearr_75352_75420[(1)] = (27));

} else {
var statearr_75353_75421 = state_75304__$1;
(statearr_75353_75421[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75305 === (34))){
var state_75304__$1 = state_75304;
var statearr_75354_75422 = state_75304__$1;
(statearr_75354_75422[(2)] = null);

(statearr_75354_75422[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75305 === (17))){
var state_75304__$1 = state_75304;
var statearr_75355_75423 = state_75304__$1;
(statearr_75355_75423[(2)] = null);

(statearr_75355_75423[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75305 === (3))){
var inst_75302 = (state_75304[(2)]);
var state_75304__$1 = state_75304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_75304__$1,inst_75302);
} else {
if((state_val_75305 === (12))){
var inst_75231 = (state_75304[(2)]);
var state_75304__$1 = state_75304;
var statearr_75356_75424 = state_75304__$1;
(statearr_75356_75424[(2)] = inst_75231);

(statearr_75356_75424[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75305 === (2))){
var state_75304__$1 = state_75304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75304__$1,(4),ch);
} else {
if((state_val_75305 === (23))){
var state_75304__$1 = state_75304;
var statearr_75357_75425 = state_75304__$1;
(statearr_75357_75425[(2)] = null);

(statearr_75357_75425[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75305 === (35))){
var inst_75286 = (state_75304[(2)]);
var state_75304__$1 = state_75304;
var statearr_75358_75426 = state_75304__$1;
(statearr_75358_75426[(2)] = inst_75286);

(statearr_75358_75426[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75305 === (19))){
var inst_75205 = (state_75304[(7)]);
var inst_75209 = cljs.core.chunk_first.call(null,inst_75205);
var inst_75210 = cljs.core.chunk_rest.call(null,inst_75205);
var inst_75211 = cljs.core.count.call(null,inst_75209);
var inst_75185 = inst_75210;
var inst_75186 = inst_75209;
var inst_75187 = inst_75211;
var inst_75188 = (0);
var state_75304__$1 = (function (){var statearr_75359 = state_75304;
(statearr_75359[(14)] = inst_75187);

(statearr_75359[(15)] = inst_75186);

(statearr_75359[(16)] = inst_75185);

(statearr_75359[(17)] = inst_75188);

return statearr_75359;
})();
var statearr_75360_75427 = state_75304__$1;
(statearr_75360_75427[(2)] = null);

(statearr_75360_75427[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75305 === (11))){
var inst_75185 = (state_75304[(16)]);
var inst_75205 = (state_75304[(7)]);
var inst_75205__$1 = cljs.core.seq.call(null,inst_75185);
var state_75304__$1 = (function (){var statearr_75361 = state_75304;
(statearr_75361[(7)] = inst_75205__$1);

return statearr_75361;
})();
if(inst_75205__$1){
var statearr_75362_75428 = state_75304__$1;
(statearr_75362_75428[(1)] = (16));

} else {
var statearr_75363_75429 = state_75304__$1;
(statearr_75363_75429[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75305 === (9))){
var inst_75233 = (state_75304[(2)]);
var state_75304__$1 = state_75304;
var statearr_75364_75430 = state_75304__$1;
(statearr_75364_75430[(2)] = inst_75233);

(statearr_75364_75430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75305 === (5))){
var inst_75183 = cljs.core.deref.call(null,cs);
var inst_75184 = cljs.core.seq.call(null,inst_75183);
var inst_75185 = inst_75184;
var inst_75186 = null;
var inst_75187 = (0);
var inst_75188 = (0);
var state_75304__$1 = (function (){var statearr_75365 = state_75304;
(statearr_75365[(14)] = inst_75187);

(statearr_75365[(15)] = inst_75186);

(statearr_75365[(16)] = inst_75185);

(statearr_75365[(17)] = inst_75188);

return statearr_75365;
})();
var statearr_75366_75431 = state_75304__$1;
(statearr_75366_75431[(2)] = null);

(statearr_75366_75431[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75305 === (14))){
var state_75304__$1 = state_75304;
var statearr_75367_75432 = state_75304__$1;
(statearr_75367_75432[(2)] = null);

(statearr_75367_75432[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75305 === (45))){
var inst_75294 = (state_75304[(2)]);
var state_75304__$1 = state_75304;
var statearr_75368_75433 = state_75304__$1;
(statearr_75368_75433[(2)] = inst_75294);

(statearr_75368_75433[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75305 === (26))){
var inst_75236 = (state_75304[(29)]);
var inst_75290 = (state_75304[(2)]);
var inst_75291 = cljs.core.seq.call(null,inst_75236);
var state_75304__$1 = (function (){var statearr_75369 = state_75304;
(statearr_75369[(31)] = inst_75290);

return statearr_75369;
})();
if(inst_75291){
var statearr_75370_75434 = state_75304__$1;
(statearr_75370_75434[(1)] = (42));

} else {
var statearr_75371_75435 = state_75304__$1;
(statearr_75371_75435[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75305 === (16))){
var inst_75205 = (state_75304[(7)]);
var inst_75207 = cljs.core.chunked_seq_QMARK_.call(null,inst_75205);
var state_75304__$1 = state_75304;
if(inst_75207){
var statearr_75372_75436 = state_75304__$1;
(statearr_75372_75436[(1)] = (19));

} else {
var statearr_75373_75437 = state_75304__$1;
(statearr_75373_75437[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75305 === (38))){
var inst_75283 = (state_75304[(2)]);
var state_75304__$1 = state_75304;
var statearr_75374_75438 = state_75304__$1;
(statearr_75374_75438[(2)] = inst_75283);

(statearr_75374_75438[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75305 === (30))){
var state_75304__$1 = state_75304;
var statearr_75375_75439 = state_75304__$1;
(statearr_75375_75439[(2)] = null);

(statearr_75375_75439[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75305 === (10))){
var inst_75186 = (state_75304[(15)]);
var inst_75188 = (state_75304[(17)]);
var inst_75194 = cljs.core._nth.call(null,inst_75186,inst_75188);
var inst_75195 = cljs.core.nth.call(null,inst_75194,(0),null);
var inst_75196 = cljs.core.nth.call(null,inst_75194,(1),null);
var state_75304__$1 = (function (){var statearr_75376 = state_75304;
(statearr_75376[(26)] = inst_75195);

return statearr_75376;
})();
if(cljs.core.truth_(inst_75196)){
var statearr_75377_75440 = state_75304__$1;
(statearr_75377_75440[(1)] = (13));

} else {
var statearr_75378_75441 = state_75304__$1;
(statearr_75378_75441[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75305 === (18))){
var inst_75229 = (state_75304[(2)]);
var state_75304__$1 = state_75304;
var statearr_75379_75442 = state_75304__$1;
(statearr_75379_75442[(2)] = inst_75229);

(statearr_75379_75442[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75305 === (42))){
var state_75304__$1 = state_75304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75304__$1,(45),dchan);
} else {
if((state_val_75305 === (37))){
var inst_75176 = (state_75304[(9)]);
var inst_75272 = (state_75304[(23)]);
var inst_75263 = (state_75304[(25)]);
var inst_75272__$1 = cljs.core.first.call(null,inst_75263);
var inst_75273 = cljs.core.async.put_BANG_.call(null,inst_75272__$1,inst_75176,done);
var state_75304__$1 = (function (){var statearr_75380 = state_75304;
(statearr_75380[(23)] = inst_75272__$1);

return statearr_75380;
})();
if(cljs.core.truth_(inst_75273)){
var statearr_75381_75443 = state_75304__$1;
(statearr_75381_75443[(1)] = (39));

} else {
var statearr_75382_75444 = state_75304__$1;
(statearr_75382_75444[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75305 === (8))){
var inst_75187 = (state_75304[(14)]);
var inst_75188 = (state_75304[(17)]);
var inst_75190 = (inst_75188 < inst_75187);
var inst_75191 = inst_75190;
var state_75304__$1 = state_75304;
if(cljs.core.truth_(inst_75191)){
var statearr_75383_75445 = state_75304__$1;
(statearr_75383_75445[(1)] = (10));

} else {
var statearr_75384_75446 = state_75304__$1;
(statearr_75384_75446[(1)] = (11));

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
});})(c__10448__auto___75392,cs,m,dchan,dctr,done))
;
return ((function (switch__10427__auto__,c__10448__auto___75392,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10428__auto__ = null;
var cljs$core$async$mult_$_state_machine__10428__auto____0 = (function (){
var statearr_75388 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75388[(0)] = cljs$core$async$mult_$_state_machine__10428__auto__);

(statearr_75388[(1)] = (1));

return statearr_75388;
});
var cljs$core$async$mult_$_state_machine__10428__auto____1 = (function (state_75304){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_75304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e75389){if((e75389 instanceof Object)){
var ex__10431__auto__ = e75389;
var statearr_75390_75447 = state_75304;
(statearr_75390_75447[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_75304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e75389;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75448 = state_75304;
state_75304 = G__75448;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10428__auto__ = function(state_75304){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10428__auto____1.call(this,state_75304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10428__auto____0;
cljs$core$async$mult_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10428__auto____1;
return cljs$core$async$mult_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___75392,cs,m,dchan,dctr,done))
})();
var state__10450__auto__ = (function (){var statearr_75391 = f__10449__auto__.call(null);
(statearr_75391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___75392);

return statearr_75391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___75392,cs,m,dchan,dctr,done))
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
var args75449 = [];
var len__9158__auto___75452 = arguments.length;
var i__9159__auto___75453 = (0);
while(true){
if((i__9159__auto___75453 < len__9158__auto___75452)){
args75449.push((arguments[i__9159__auto___75453]));

var G__75454 = (i__9159__auto___75453 + (1));
i__9159__auto___75453 = G__75454;
continue;
} else {
}
break;
}

var G__75451 = args75449.length;
switch (G__75451) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args75449.length)].join('')));

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
var len__9158__auto___75466 = arguments.length;
var i__9159__auto___75467 = (0);
while(true){
if((i__9159__auto___75467 < len__9158__auto___75466)){
args__9165__auto__.push((arguments[i__9159__auto___75467]));

var G__75468 = (i__9159__auto___75467 + (1));
i__9159__auto___75467 = G__75468;
continue;
} else {
}
break;
}

var argseq__9166__auto__ = ((((3) < args__9165__auto__.length))?(new cljs.core.IndexedSeq(args__9165__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9166__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__75460){
var map__75461 = p__75460;
var map__75461__$1 = ((((!((map__75461 == null)))?((((map__75461.cljs$lang$protocol_mask$partition0$ & (64))) || (map__75461.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__75461):map__75461);
var opts = map__75461__$1;
var statearr_75463_75469 = state;
(statearr_75463_75469[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__75461,map__75461__$1,opts){
return (function (val){
var statearr_75464_75470 = state;
(statearr_75464_75470[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__75461,map__75461__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_75465_75471 = state;
(statearr_75465_75471[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq75456){
var G__75457 = cljs.core.first.call(null,seq75456);
var seq75456__$1 = cljs.core.next.call(null,seq75456);
var G__75458 = cljs.core.first.call(null,seq75456__$1);
var seq75456__$2 = cljs.core.next.call(null,seq75456__$1);
var G__75459 = cljs.core.first.call(null,seq75456__$2);
var seq75456__$3 = cljs.core.next.call(null,seq75456__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__75457,G__75458,G__75459,seq75456__$3);
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
if(typeof cljs.core.async.t_cljs$core$async75635 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async75635 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta75636){
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
this.meta75636 = meta75636;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async75635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_75637,meta75636__$1){
var self__ = this;
var _75637__$1 = this;
return (new cljs.core.async.t_cljs$core$async75635(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta75636__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async75635.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_75637){
var self__ = this;
var _75637__$1 = this;
return self__.meta75636;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async75635.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async75635.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async75635.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async75635.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async75635.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async75635.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async75635.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async75635.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async75635.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta75636","meta75636",882106131,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async75635.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async75635.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async75635";

cljs.core.async.t_cljs$core$async75635.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8698__auto__,writer__8699__auto__,opt__8700__auto__){
return cljs.core._write.call(null,writer__8699__auto__,"cljs.core.async/t_cljs$core$async75635");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async75635 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async75635(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta75636){
return (new cljs.core.async.t_cljs$core$async75635(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta75636));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async75635(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10448__auto___75798 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___75798,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___75798,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_75735){
var state_val_75736 = (state_75735[(1)]);
if((state_val_75736 === (7))){
var inst_75653 = (state_75735[(2)]);
var state_75735__$1 = state_75735;
var statearr_75737_75799 = state_75735__$1;
(statearr_75737_75799[(2)] = inst_75653);

(statearr_75737_75799[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75736 === (20))){
var inst_75665 = (state_75735[(7)]);
var state_75735__$1 = state_75735;
var statearr_75738_75800 = state_75735__$1;
(statearr_75738_75800[(2)] = inst_75665);

(statearr_75738_75800[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75736 === (27))){
var state_75735__$1 = state_75735;
var statearr_75739_75801 = state_75735__$1;
(statearr_75739_75801[(2)] = null);

(statearr_75739_75801[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75736 === (1))){
var inst_75641 = (state_75735[(8)]);
var inst_75641__$1 = calc_state.call(null);
var inst_75643 = (inst_75641__$1 == null);
var inst_75644 = cljs.core.not.call(null,inst_75643);
var state_75735__$1 = (function (){var statearr_75740 = state_75735;
(statearr_75740[(8)] = inst_75641__$1);

return statearr_75740;
})();
if(inst_75644){
var statearr_75741_75802 = state_75735__$1;
(statearr_75741_75802[(1)] = (2));

} else {
var statearr_75742_75803 = state_75735__$1;
(statearr_75742_75803[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75736 === (24))){
var inst_75695 = (state_75735[(9)]);
var inst_75688 = (state_75735[(10)]);
var inst_75709 = (state_75735[(11)]);
var inst_75709__$1 = inst_75688.call(null,inst_75695);
var state_75735__$1 = (function (){var statearr_75743 = state_75735;
(statearr_75743[(11)] = inst_75709__$1);

return statearr_75743;
})();
if(cljs.core.truth_(inst_75709__$1)){
var statearr_75744_75804 = state_75735__$1;
(statearr_75744_75804[(1)] = (29));

} else {
var statearr_75745_75805 = state_75735__$1;
(statearr_75745_75805[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75736 === (4))){
var inst_75656 = (state_75735[(2)]);
var state_75735__$1 = state_75735;
if(cljs.core.truth_(inst_75656)){
var statearr_75746_75806 = state_75735__$1;
(statearr_75746_75806[(1)] = (8));

} else {
var statearr_75747_75807 = state_75735__$1;
(statearr_75747_75807[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75736 === (15))){
var inst_75682 = (state_75735[(2)]);
var state_75735__$1 = state_75735;
if(cljs.core.truth_(inst_75682)){
var statearr_75748_75808 = state_75735__$1;
(statearr_75748_75808[(1)] = (19));

} else {
var statearr_75749_75809 = state_75735__$1;
(statearr_75749_75809[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75736 === (21))){
var inst_75687 = (state_75735[(12)]);
var inst_75687__$1 = (state_75735[(2)]);
var inst_75688 = cljs.core.get.call(null,inst_75687__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_75689 = cljs.core.get.call(null,inst_75687__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_75690 = cljs.core.get.call(null,inst_75687__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_75735__$1 = (function (){var statearr_75750 = state_75735;
(statearr_75750[(10)] = inst_75688);

(statearr_75750[(12)] = inst_75687__$1);

(statearr_75750[(13)] = inst_75689);

return statearr_75750;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_75735__$1,(22),inst_75690);
} else {
if((state_val_75736 === (31))){
var inst_75717 = (state_75735[(2)]);
var state_75735__$1 = state_75735;
if(cljs.core.truth_(inst_75717)){
var statearr_75751_75810 = state_75735__$1;
(statearr_75751_75810[(1)] = (32));

} else {
var statearr_75752_75811 = state_75735__$1;
(statearr_75752_75811[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75736 === (32))){
var inst_75694 = (state_75735[(14)]);
var state_75735__$1 = state_75735;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_75735__$1,(35),out,inst_75694);
} else {
if((state_val_75736 === (33))){
var inst_75687 = (state_75735[(12)]);
var inst_75665 = inst_75687;
var state_75735__$1 = (function (){var statearr_75753 = state_75735;
(statearr_75753[(7)] = inst_75665);

return statearr_75753;
})();
var statearr_75754_75812 = state_75735__$1;
(statearr_75754_75812[(2)] = null);

(statearr_75754_75812[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75736 === (13))){
var inst_75665 = (state_75735[(7)]);
var inst_75672 = inst_75665.cljs$lang$protocol_mask$partition0$;
var inst_75673 = (inst_75672 & (64));
var inst_75674 = inst_75665.cljs$core$ISeq$;
var inst_75675 = (inst_75673) || (inst_75674);
var state_75735__$1 = state_75735;
if(cljs.core.truth_(inst_75675)){
var statearr_75755_75813 = state_75735__$1;
(statearr_75755_75813[(1)] = (16));

} else {
var statearr_75756_75814 = state_75735__$1;
(statearr_75756_75814[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75736 === (22))){
var inst_75695 = (state_75735[(9)]);
var inst_75694 = (state_75735[(14)]);
var inst_75693 = (state_75735[(2)]);
var inst_75694__$1 = cljs.core.nth.call(null,inst_75693,(0),null);
var inst_75695__$1 = cljs.core.nth.call(null,inst_75693,(1),null);
var inst_75696 = (inst_75694__$1 == null);
var inst_75697 = cljs.core._EQ_.call(null,inst_75695__$1,change);
var inst_75698 = (inst_75696) || (inst_75697);
var state_75735__$1 = (function (){var statearr_75757 = state_75735;
(statearr_75757[(9)] = inst_75695__$1);

(statearr_75757[(14)] = inst_75694__$1);

return statearr_75757;
})();
if(cljs.core.truth_(inst_75698)){
var statearr_75758_75815 = state_75735__$1;
(statearr_75758_75815[(1)] = (23));

} else {
var statearr_75759_75816 = state_75735__$1;
(statearr_75759_75816[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75736 === (36))){
var inst_75687 = (state_75735[(12)]);
var inst_75665 = inst_75687;
var state_75735__$1 = (function (){var statearr_75760 = state_75735;
(statearr_75760[(7)] = inst_75665);

return statearr_75760;
})();
var statearr_75761_75817 = state_75735__$1;
(statearr_75761_75817[(2)] = null);

(statearr_75761_75817[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75736 === (29))){
var inst_75709 = (state_75735[(11)]);
var state_75735__$1 = state_75735;
var statearr_75762_75818 = state_75735__$1;
(statearr_75762_75818[(2)] = inst_75709);

(statearr_75762_75818[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75736 === (6))){
var state_75735__$1 = state_75735;
var statearr_75763_75819 = state_75735__$1;
(statearr_75763_75819[(2)] = false);

(statearr_75763_75819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75736 === (28))){
var inst_75705 = (state_75735[(2)]);
var inst_75706 = calc_state.call(null);
var inst_75665 = inst_75706;
var state_75735__$1 = (function (){var statearr_75764 = state_75735;
(statearr_75764[(7)] = inst_75665);

(statearr_75764[(15)] = inst_75705);

return statearr_75764;
})();
var statearr_75765_75820 = state_75735__$1;
(statearr_75765_75820[(2)] = null);

(statearr_75765_75820[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75736 === (25))){
var inst_75731 = (state_75735[(2)]);
var state_75735__$1 = state_75735;
var statearr_75766_75821 = state_75735__$1;
(statearr_75766_75821[(2)] = inst_75731);

(statearr_75766_75821[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75736 === (34))){
var inst_75729 = (state_75735[(2)]);
var state_75735__$1 = state_75735;
var statearr_75767_75822 = state_75735__$1;
(statearr_75767_75822[(2)] = inst_75729);

(statearr_75767_75822[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75736 === (17))){
var state_75735__$1 = state_75735;
var statearr_75768_75823 = state_75735__$1;
(statearr_75768_75823[(2)] = false);

(statearr_75768_75823[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75736 === (3))){
var state_75735__$1 = state_75735;
var statearr_75769_75824 = state_75735__$1;
(statearr_75769_75824[(2)] = false);

(statearr_75769_75824[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75736 === (12))){
var inst_75733 = (state_75735[(2)]);
var state_75735__$1 = state_75735;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_75735__$1,inst_75733);
} else {
if((state_val_75736 === (2))){
var inst_75641 = (state_75735[(8)]);
var inst_75646 = inst_75641.cljs$lang$protocol_mask$partition0$;
var inst_75647 = (inst_75646 & (64));
var inst_75648 = inst_75641.cljs$core$ISeq$;
var inst_75649 = (inst_75647) || (inst_75648);
var state_75735__$1 = state_75735;
if(cljs.core.truth_(inst_75649)){
var statearr_75770_75825 = state_75735__$1;
(statearr_75770_75825[(1)] = (5));

} else {
var statearr_75771_75826 = state_75735__$1;
(statearr_75771_75826[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75736 === (23))){
var inst_75694 = (state_75735[(14)]);
var inst_75700 = (inst_75694 == null);
var state_75735__$1 = state_75735;
if(cljs.core.truth_(inst_75700)){
var statearr_75772_75827 = state_75735__$1;
(statearr_75772_75827[(1)] = (26));

} else {
var statearr_75773_75828 = state_75735__$1;
(statearr_75773_75828[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75736 === (35))){
var inst_75720 = (state_75735[(2)]);
var state_75735__$1 = state_75735;
if(cljs.core.truth_(inst_75720)){
var statearr_75774_75829 = state_75735__$1;
(statearr_75774_75829[(1)] = (36));

} else {
var statearr_75775_75830 = state_75735__$1;
(statearr_75775_75830[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75736 === (19))){
var inst_75665 = (state_75735[(7)]);
var inst_75684 = cljs.core.apply.call(null,cljs.core.hash_map,inst_75665);
var state_75735__$1 = state_75735;
var statearr_75776_75831 = state_75735__$1;
(statearr_75776_75831[(2)] = inst_75684);

(statearr_75776_75831[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75736 === (11))){
var inst_75665 = (state_75735[(7)]);
var inst_75669 = (inst_75665 == null);
var inst_75670 = cljs.core.not.call(null,inst_75669);
var state_75735__$1 = state_75735;
if(inst_75670){
var statearr_75777_75832 = state_75735__$1;
(statearr_75777_75832[(1)] = (13));

} else {
var statearr_75778_75833 = state_75735__$1;
(statearr_75778_75833[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75736 === (9))){
var inst_75641 = (state_75735[(8)]);
var state_75735__$1 = state_75735;
var statearr_75779_75834 = state_75735__$1;
(statearr_75779_75834[(2)] = inst_75641);

(statearr_75779_75834[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75736 === (5))){
var state_75735__$1 = state_75735;
var statearr_75780_75835 = state_75735__$1;
(statearr_75780_75835[(2)] = true);

(statearr_75780_75835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75736 === (14))){
var state_75735__$1 = state_75735;
var statearr_75781_75836 = state_75735__$1;
(statearr_75781_75836[(2)] = false);

(statearr_75781_75836[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75736 === (26))){
var inst_75695 = (state_75735[(9)]);
var inst_75702 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_75695);
var state_75735__$1 = state_75735;
var statearr_75782_75837 = state_75735__$1;
(statearr_75782_75837[(2)] = inst_75702);

(statearr_75782_75837[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75736 === (16))){
var state_75735__$1 = state_75735;
var statearr_75783_75838 = state_75735__$1;
(statearr_75783_75838[(2)] = true);

(statearr_75783_75838[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75736 === (38))){
var inst_75725 = (state_75735[(2)]);
var state_75735__$1 = state_75735;
var statearr_75784_75839 = state_75735__$1;
(statearr_75784_75839[(2)] = inst_75725);

(statearr_75784_75839[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75736 === (30))){
var inst_75695 = (state_75735[(9)]);
var inst_75688 = (state_75735[(10)]);
var inst_75689 = (state_75735[(13)]);
var inst_75712 = cljs.core.empty_QMARK_.call(null,inst_75688);
var inst_75713 = inst_75689.call(null,inst_75695);
var inst_75714 = cljs.core.not.call(null,inst_75713);
var inst_75715 = (inst_75712) && (inst_75714);
var state_75735__$1 = state_75735;
var statearr_75785_75840 = state_75735__$1;
(statearr_75785_75840[(2)] = inst_75715);

(statearr_75785_75840[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75736 === (10))){
var inst_75641 = (state_75735[(8)]);
var inst_75661 = (state_75735[(2)]);
var inst_75662 = cljs.core.get.call(null,inst_75661,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_75663 = cljs.core.get.call(null,inst_75661,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_75664 = cljs.core.get.call(null,inst_75661,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_75665 = inst_75641;
var state_75735__$1 = (function (){var statearr_75786 = state_75735;
(statearr_75786[(7)] = inst_75665);

(statearr_75786[(16)] = inst_75663);

(statearr_75786[(17)] = inst_75662);

(statearr_75786[(18)] = inst_75664);

return statearr_75786;
})();
var statearr_75787_75841 = state_75735__$1;
(statearr_75787_75841[(2)] = null);

(statearr_75787_75841[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75736 === (18))){
var inst_75679 = (state_75735[(2)]);
var state_75735__$1 = state_75735;
var statearr_75788_75842 = state_75735__$1;
(statearr_75788_75842[(2)] = inst_75679);

(statearr_75788_75842[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75736 === (37))){
var state_75735__$1 = state_75735;
var statearr_75789_75843 = state_75735__$1;
(statearr_75789_75843[(2)] = null);

(statearr_75789_75843[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75736 === (8))){
var inst_75641 = (state_75735[(8)]);
var inst_75658 = cljs.core.apply.call(null,cljs.core.hash_map,inst_75641);
var state_75735__$1 = state_75735;
var statearr_75790_75844 = state_75735__$1;
(statearr_75790_75844[(2)] = inst_75658);

(statearr_75790_75844[(1)] = (10));


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
});})(c__10448__auto___75798,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10427__auto__,c__10448__auto___75798,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10428__auto__ = null;
var cljs$core$async$mix_$_state_machine__10428__auto____0 = (function (){
var statearr_75794 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75794[(0)] = cljs$core$async$mix_$_state_machine__10428__auto__);

(statearr_75794[(1)] = (1));

return statearr_75794;
});
var cljs$core$async$mix_$_state_machine__10428__auto____1 = (function (state_75735){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_75735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e75795){if((e75795 instanceof Object)){
var ex__10431__auto__ = e75795;
var statearr_75796_75845 = state_75735;
(statearr_75796_75845[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_75735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e75795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75846 = state_75735;
state_75735 = G__75846;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10428__auto__ = function(state_75735){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10428__auto____1.call(this,state_75735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10428__auto____0;
cljs$core$async$mix_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10428__auto____1;
return cljs$core$async$mix_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___75798,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10450__auto__ = (function (){var statearr_75797 = f__10449__auto__.call(null);
(statearr_75797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___75798);

return statearr_75797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___75798,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args75847 = [];
var len__9158__auto___75850 = arguments.length;
var i__9159__auto___75851 = (0);
while(true){
if((i__9159__auto___75851 < len__9158__auto___75850)){
args75847.push((arguments[i__9159__auto___75851]));

var G__75852 = (i__9159__auto___75851 + (1));
i__9159__auto___75851 = G__75852;
continue;
} else {
}
break;
}

var G__75849 = args75847.length;
switch (G__75849) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args75847.length)].join('')));

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
var args75855 = [];
var len__9158__auto___75980 = arguments.length;
var i__9159__auto___75981 = (0);
while(true){
if((i__9159__auto___75981 < len__9158__auto___75980)){
args75855.push((arguments[i__9159__auto___75981]));

var G__75982 = (i__9159__auto___75981 + (1));
i__9159__auto___75981 = G__75982;
continue;
} else {
}
break;
}

var G__75857 = args75855.length;
switch (G__75857) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args75855.length)].join('')));

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
return (function (p1__75854_SHARP_){
if(cljs.core.truth_(p1__75854_SHARP_.call(null,topic))){
return p1__75854_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__75854_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__8100__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async75858 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async75858 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta75859){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta75859 = meta75859;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async75858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_75860,meta75859__$1){
var self__ = this;
var _75860__$1 = this;
return (new cljs.core.async.t_cljs$core$async75858(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta75859__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async75858.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_75860){
var self__ = this;
var _75860__$1 = this;
return self__.meta75859;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async75858.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async75858.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async75858.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async75858.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async75858.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async75858.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async75858.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async75858.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta75859","meta75859",1103683267,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async75858.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async75858.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async75858";

cljs.core.async.t_cljs$core$async75858.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8698__auto__,writer__8699__auto__,opt__8700__auto__){
return cljs.core._write.call(null,writer__8699__auto__,"cljs.core.async/t_cljs$core$async75858");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async75858 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async75858(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta75859){
return (new cljs.core.async.t_cljs$core$async75858(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta75859));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async75858(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10448__auto___75984 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___75984,mults,ensure_mult,p){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___75984,mults,ensure_mult,p){
return (function (state_75932){
var state_val_75933 = (state_75932[(1)]);
if((state_val_75933 === (7))){
var inst_75928 = (state_75932[(2)]);
var state_75932__$1 = state_75932;
var statearr_75934_75985 = state_75932__$1;
(statearr_75934_75985[(2)] = inst_75928);

(statearr_75934_75985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75933 === (20))){
var state_75932__$1 = state_75932;
var statearr_75935_75986 = state_75932__$1;
(statearr_75935_75986[(2)] = null);

(statearr_75935_75986[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75933 === (1))){
var state_75932__$1 = state_75932;
var statearr_75936_75987 = state_75932__$1;
(statearr_75936_75987[(2)] = null);

(statearr_75936_75987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75933 === (24))){
var inst_75911 = (state_75932[(7)]);
var inst_75920 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_75911);
var state_75932__$1 = state_75932;
var statearr_75937_75988 = state_75932__$1;
(statearr_75937_75988[(2)] = inst_75920);

(statearr_75937_75988[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75933 === (4))){
var inst_75863 = (state_75932[(8)]);
var inst_75863__$1 = (state_75932[(2)]);
var inst_75864 = (inst_75863__$1 == null);
var state_75932__$1 = (function (){var statearr_75938 = state_75932;
(statearr_75938[(8)] = inst_75863__$1);

return statearr_75938;
})();
if(cljs.core.truth_(inst_75864)){
var statearr_75939_75989 = state_75932__$1;
(statearr_75939_75989[(1)] = (5));

} else {
var statearr_75940_75990 = state_75932__$1;
(statearr_75940_75990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75933 === (15))){
var inst_75905 = (state_75932[(2)]);
var state_75932__$1 = state_75932;
var statearr_75941_75991 = state_75932__$1;
(statearr_75941_75991[(2)] = inst_75905);

(statearr_75941_75991[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75933 === (21))){
var inst_75925 = (state_75932[(2)]);
var state_75932__$1 = (function (){var statearr_75942 = state_75932;
(statearr_75942[(9)] = inst_75925);

return statearr_75942;
})();
var statearr_75943_75992 = state_75932__$1;
(statearr_75943_75992[(2)] = null);

(statearr_75943_75992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75933 === (13))){
var inst_75887 = (state_75932[(10)]);
var inst_75889 = cljs.core.chunked_seq_QMARK_.call(null,inst_75887);
var state_75932__$1 = state_75932;
if(inst_75889){
var statearr_75944_75993 = state_75932__$1;
(statearr_75944_75993[(1)] = (16));

} else {
var statearr_75945_75994 = state_75932__$1;
(statearr_75945_75994[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75933 === (22))){
var inst_75917 = (state_75932[(2)]);
var state_75932__$1 = state_75932;
if(cljs.core.truth_(inst_75917)){
var statearr_75946_75995 = state_75932__$1;
(statearr_75946_75995[(1)] = (23));

} else {
var statearr_75947_75996 = state_75932__$1;
(statearr_75947_75996[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75933 === (6))){
var inst_75863 = (state_75932[(8)]);
var inst_75911 = (state_75932[(7)]);
var inst_75913 = (state_75932[(11)]);
var inst_75911__$1 = topic_fn.call(null,inst_75863);
var inst_75912 = cljs.core.deref.call(null,mults);
var inst_75913__$1 = cljs.core.get.call(null,inst_75912,inst_75911__$1);
var state_75932__$1 = (function (){var statearr_75948 = state_75932;
(statearr_75948[(7)] = inst_75911__$1);

(statearr_75948[(11)] = inst_75913__$1);

return statearr_75948;
})();
if(cljs.core.truth_(inst_75913__$1)){
var statearr_75949_75997 = state_75932__$1;
(statearr_75949_75997[(1)] = (19));

} else {
var statearr_75950_75998 = state_75932__$1;
(statearr_75950_75998[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75933 === (25))){
var inst_75922 = (state_75932[(2)]);
var state_75932__$1 = state_75932;
var statearr_75951_75999 = state_75932__$1;
(statearr_75951_75999[(2)] = inst_75922);

(statearr_75951_75999[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75933 === (17))){
var inst_75887 = (state_75932[(10)]);
var inst_75896 = cljs.core.first.call(null,inst_75887);
var inst_75897 = cljs.core.async.muxch_STAR_.call(null,inst_75896);
var inst_75898 = cljs.core.async.close_BANG_.call(null,inst_75897);
var inst_75899 = cljs.core.next.call(null,inst_75887);
var inst_75873 = inst_75899;
var inst_75874 = null;
var inst_75875 = (0);
var inst_75876 = (0);
var state_75932__$1 = (function (){var statearr_75952 = state_75932;
(statearr_75952[(12)] = inst_75876);

(statearr_75952[(13)] = inst_75873);

(statearr_75952[(14)] = inst_75898);

(statearr_75952[(15)] = inst_75874);

(statearr_75952[(16)] = inst_75875);

return statearr_75952;
})();
var statearr_75953_76000 = state_75932__$1;
(statearr_75953_76000[(2)] = null);

(statearr_75953_76000[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75933 === (3))){
var inst_75930 = (state_75932[(2)]);
var state_75932__$1 = state_75932;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_75932__$1,inst_75930);
} else {
if((state_val_75933 === (12))){
var inst_75907 = (state_75932[(2)]);
var state_75932__$1 = state_75932;
var statearr_75954_76001 = state_75932__$1;
(statearr_75954_76001[(2)] = inst_75907);

(statearr_75954_76001[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75933 === (2))){
var state_75932__$1 = state_75932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75932__$1,(4),ch);
} else {
if((state_val_75933 === (23))){
var state_75932__$1 = state_75932;
var statearr_75955_76002 = state_75932__$1;
(statearr_75955_76002[(2)] = null);

(statearr_75955_76002[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75933 === (19))){
var inst_75863 = (state_75932[(8)]);
var inst_75913 = (state_75932[(11)]);
var inst_75915 = cljs.core.async.muxch_STAR_.call(null,inst_75913);
var state_75932__$1 = state_75932;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_75932__$1,(22),inst_75915,inst_75863);
} else {
if((state_val_75933 === (11))){
var inst_75873 = (state_75932[(13)]);
var inst_75887 = (state_75932[(10)]);
var inst_75887__$1 = cljs.core.seq.call(null,inst_75873);
var state_75932__$1 = (function (){var statearr_75956 = state_75932;
(statearr_75956[(10)] = inst_75887__$1);

return statearr_75956;
})();
if(inst_75887__$1){
var statearr_75957_76003 = state_75932__$1;
(statearr_75957_76003[(1)] = (13));

} else {
var statearr_75958_76004 = state_75932__$1;
(statearr_75958_76004[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75933 === (9))){
var inst_75909 = (state_75932[(2)]);
var state_75932__$1 = state_75932;
var statearr_75959_76005 = state_75932__$1;
(statearr_75959_76005[(2)] = inst_75909);

(statearr_75959_76005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75933 === (5))){
var inst_75870 = cljs.core.deref.call(null,mults);
var inst_75871 = cljs.core.vals.call(null,inst_75870);
var inst_75872 = cljs.core.seq.call(null,inst_75871);
var inst_75873 = inst_75872;
var inst_75874 = null;
var inst_75875 = (0);
var inst_75876 = (0);
var state_75932__$1 = (function (){var statearr_75960 = state_75932;
(statearr_75960[(12)] = inst_75876);

(statearr_75960[(13)] = inst_75873);

(statearr_75960[(15)] = inst_75874);

(statearr_75960[(16)] = inst_75875);

return statearr_75960;
})();
var statearr_75961_76006 = state_75932__$1;
(statearr_75961_76006[(2)] = null);

(statearr_75961_76006[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75933 === (14))){
var state_75932__$1 = state_75932;
var statearr_75965_76007 = state_75932__$1;
(statearr_75965_76007[(2)] = null);

(statearr_75965_76007[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75933 === (16))){
var inst_75887 = (state_75932[(10)]);
var inst_75891 = cljs.core.chunk_first.call(null,inst_75887);
var inst_75892 = cljs.core.chunk_rest.call(null,inst_75887);
var inst_75893 = cljs.core.count.call(null,inst_75891);
var inst_75873 = inst_75892;
var inst_75874 = inst_75891;
var inst_75875 = inst_75893;
var inst_75876 = (0);
var state_75932__$1 = (function (){var statearr_75966 = state_75932;
(statearr_75966[(12)] = inst_75876);

(statearr_75966[(13)] = inst_75873);

(statearr_75966[(15)] = inst_75874);

(statearr_75966[(16)] = inst_75875);

return statearr_75966;
})();
var statearr_75967_76008 = state_75932__$1;
(statearr_75967_76008[(2)] = null);

(statearr_75967_76008[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75933 === (10))){
var inst_75876 = (state_75932[(12)]);
var inst_75873 = (state_75932[(13)]);
var inst_75874 = (state_75932[(15)]);
var inst_75875 = (state_75932[(16)]);
var inst_75881 = cljs.core._nth.call(null,inst_75874,inst_75876);
var inst_75882 = cljs.core.async.muxch_STAR_.call(null,inst_75881);
var inst_75883 = cljs.core.async.close_BANG_.call(null,inst_75882);
var inst_75884 = (inst_75876 + (1));
var tmp75962 = inst_75873;
var tmp75963 = inst_75874;
var tmp75964 = inst_75875;
var inst_75873__$1 = tmp75962;
var inst_75874__$1 = tmp75963;
var inst_75875__$1 = tmp75964;
var inst_75876__$1 = inst_75884;
var state_75932__$1 = (function (){var statearr_75968 = state_75932;
(statearr_75968[(12)] = inst_75876__$1);

(statearr_75968[(13)] = inst_75873__$1);

(statearr_75968[(15)] = inst_75874__$1);

(statearr_75968[(17)] = inst_75883);

(statearr_75968[(16)] = inst_75875__$1);

return statearr_75968;
})();
var statearr_75969_76009 = state_75932__$1;
(statearr_75969_76009[(2)] = null);

(statearr_75969_76009[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75933 === (18))){
var inst_75902 = (state_75932[(2)]);
var state_75932__$1 = state_75932;
var statearr_75970_76010 = state_75932__$1;
(statearr_75970_76010[(2)] = inst_75902);

(statearr_75970_76010[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75933 === (8))){
var inst_75876 = (state_75932[(12)]);
var inst_75875 = (state_75932[(16)]);
var inst_75878 = (inst_75876 < inst_75875);
var inst_75879 = inst_75878;
var state_75932__$1 = state_75932;
if(cljs.core.truth_(inst_75879)){
var statearr_75971_76011 = state_75932__$1;
(statearr_75971_76011[(1)] = (10));

} else {
var statearr_75972_76012 = state_75932__$1;
(statearr_75972_76012[(1)] = (11));

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
});})(c__10448__auto___75984,mults,ensure_mult,p))
;
return ((function (switch__10427__auto__,c__10448__auto___75984,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10428__auto__ = null;
var cljs$core$async$state_machine__10428__auto____0 = (function (){
var statearr_75976 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75976[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_75976[(1)] = (1));

return statearr_75976;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_75932){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_75932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e75977){if((e75977 instanceof Object)){
var ex__10431__auto__ = e75977;
var statearr_75978_76013 = state_75932;
(statearr_75978_76013[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_75932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e75977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76014 = state_75932;
state_75932 = G__76014;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_75932){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_75932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___75984,mults,ensure_mult,p))
})();
var state__10450__auto__ = (function (){var statearr_75979 = f__10449__auto__.call(null);
(statearr_75979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___75984);

return statearr_75979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___75984,mults,ensure_mult,p))
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
var args76015 = [];
var len__9158__auto___76018 = arguments.length;
var i__9159__auto___76019 = (0);
while(true){
if((i__9159__auto___76019 < len__9158__auto___76018)){
args76015.push((arguments[i__9159__auto___76019]));

var G__76020 = (i__9159__auto___76019 + (1));
i__9159__auto___76019 = G__76020;
continue;
} else {
}
break;
}

var G__76017 = args76015.length;
switch (G__76017) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args76015.length)].join('')));

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
var args76022 = [];
var len__9158__auto___76025 = arguments.length;
var i__9159__auto___76026 = (0);
while(true){
if((i__9159__auto___76026 < len__9158__auto___76025)){
args76022.push((arguments[i__9159__auto___76026]));

var G__76027 = (i__9159__auto___76026 + (1));
i__9159__auto___76026 = G__76027;
continue;
} else {
}
break;
}

var G__76024 = args76022.length;
switch (G__76024) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args76022.length)].join('')));

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
var args76029 = [];
var len__9158__auto___76100 = arguments.length;
var i__9159__auto___76101 = (0);
while(true){
if((i__9159__auto___76101 < len__9158__auto___76100)){
args76029.push((arguments[i__9159__auto___76101]));

var G__76102 = (i__9159__auto___76101 + (1));
i__9159__auto___76101 = G__76102;
continue;
} else {
}
break;
}

var G__76031 = args76029.length;
switch (G__76031) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args76029.length)].join('')));

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
var c__10448__auto___76104 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___76104,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___76104,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_76070){
var state_val_76071 = (state_76070[(1)]);
if((state_val_76071 === (7))){
var state_76070__$1 = state_76070;
var statearr_76072_76105 = state_76070__$1;
(statearr_76072_76105[(2)] = null);

(statearr_76072_76105[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76071 === (1))){
var state_76070__$1 = state_76070;
var statearr_76073_76106 = state_76070__$1;
(statearr_76073_76106[(2)] = null);

(statearr_76073_76106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76071 === (4))){
var inst_76034 = (state_76070[(7)]);
var inst_76036 = (inst_76034 < cnt);
var state_76070__$1 = state_76070;
if(cljs.core.truth_(inst_76036)){
var statearr_76074_76107 = state_76070__$1;
(statearr_76074_76107[(1)] = (6));

} else {
var statearr_76075_76108 = state_76070__$1;
(statearr_76075_76108[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76071 === (15))){
var inst_76066 = (state_76070[(2)]);
var state_76070__$1 = state_76070;
var statearr_76076_76109 = state_76070__$1;
(statearr_76076_76109[(2)] = inst_76066);

(statearr_76076_76109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76071 === (13))){
var inst_76059 = cljs.core.async.close_BANG_.call(null,out);
var state_76070__$1 = state_76070;
var statearr_76077_76110 = state_76070__$1;
(statearr_76077_76110[(2)] = inst_76059);

(statearr_76077_76110[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76071 === (6))){
var state_76070__$1 = state_76070;
var statearr_76078_76111 = state_76070__$1;
(statearr_76078_76111[(2)] = null);

(statearr_76078_76111[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76071 === (3))){
var inst_76068 = (state_76070[(2)]);
var state_76070__$1 = state_76070;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76070__$1,inst_76068);
} else {
if((state_val_76071 === (12))){
var inst_76056 = (state_76070[(8)]);
var inst_76056__$1 = (state_76070[(2)]);
var inst_76057 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_76056__$1);
var state_76070__$1 = (function (){var statearr_76079 = state_76070;
(statearr_76079[(8)] = inst_76056__$1);

return statearr_76079;
})();
if(cljs.core.truth_(inst_76057)){
var statearr_76080_76112 = state_76070__$1;
(statearr_76080_76112[(1)] = (13));

} else {
var statearr_76081_76113 = state_76070__$1;
(statearr_76081_76113[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76071 === (2))){
var inst_76033 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_76034 = (0);
var state_76070__$1 = (function (){var statearr_76082 = state_76070;
(statearr_76082[(9)] = inst_76033);

(statearr_76082[(7)] = inst_76034);

return statearr_76082;
})();
var statearr_76083_76114 = state_76070__$1;
(statearr_76083_76114[(2)] = null);

(statearr_76083_76114[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76071 === (11))){
var inst_76034 = (state_76070[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_76070,(10),Object,null,(9));
var inst_76043 = chs__$1.call(null,inst_76034);
var inst_76044 = done.call(null,inst_76034);
var inst_76045 = cljs.core.async.take_BANG_.call(null,inst_76043,inst_76044);
var state_76070__$1 = state_76070;
var statearr_76084_76115 = state_76070__$1;
(statearr_76084_76115[(2)] = inst_76045);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76070__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76071 === (9))){
var inst_76034 = (state_76070[(7)]);
var inst_76047 = (state_76070[(2)]);
var inst_76048 = (inst_76034 + (1));
var inst_76034__$1 = inst_76048;
var state_76070__$1 = (function (){var statearr_76085 = state_76070;
(statearr_76085[(10)] = inst_76047);

(statearr_76085[(7)] = inst_76034__$1);

return statearr_76085;
})();
var statearr_76086_76116 = state_76070__$1;
(statearr_76086_76116[(2)] = null);

(statearr_76086_76116[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76071 === (5))){
var inst_76054 = (state_76070[(2)]);
var state_76070__$1 = (function (){var statearr_76087 = state_76070;
(statearr_76087[(11)] = inst_76054);

return statearr_76087;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76070__$1,(12),dchan);
} else {
if((state_val_76071 === (14))){
var inst_76056 = (state_76070[(8)]);
var inst_76061 = cljs.core.apply.call(null,f,inst_76056);
var state_76070__$1 = state_76070;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76070__$1,(16),out,inst_76061);
} else {
if((state_val_76071 === (16))){
var inst_76063 = (state_76070[(2)]);
var state_76070__$1 = (function (){var statearr_76088 = state_76070;
(statearr_76088[(12)] = inst_76063);

return statearr_76088;
})();
var statearr_76089_76117 = state_76070__$1;
(statearr_76089_76117[(2)] = null);

(statearr_76089_76117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76071 === (10))){
var inst_76038 = (state_76070[(2)]);
var inst_76039 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_76070__$1 = (function (){var statearr_76090 = state_76070;
(statearr_76090[(13)] = inst_76038);

return statearr_76090;
})();
var statearr_76091_76118 = state_76070__$1;
(statearr_76091_76118[(2)] = inst_76039);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76070__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76071 === (8))){
var inst_76052 = (state_76070[(2)]);
var state_76070__$1 = state_76070;
var statearr_76092_76119 = state_76070__$1;
(statearr_76092_76119[(2)] = inst_76052);

(statearr_76092_76119[(1)] = (5));


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
});})(c__10448__auto___76104,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10427__auto__,c__10448__auto___76104,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10428__auto__ = null;
var cljs$core$async$state_machine__10428__auto____0 = (function (){
var statearr_76096 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_76096[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_76096[(1)] = (1));

return statearr_76096;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_76070){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_76070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e76097){if((e76097 instanceof Object)){
var ex__10431__auto__ = e76097;
var statearr_76098_76120 = state_76070;
(statearr_76098_76120[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e76097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76121 = state_76070;
state_76070 = G__76121;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_76070){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_76070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___76104,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10450__auto__ = (function (){var statearr_76099 = f__10449__auto__.call(null);
(statearr_76099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___76104);

return statearr_76099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___76104,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args76123 = [];
var len__9158__auto___76179 = arguments.length;
var i__9159__auto___76180 = (0);
while(true){
if((i__9159__auto___76180 < len__9158__auto___76179)){
args76123.push((arguments[i__9159__auto___76180]));

var G__76181 = (i__9159__auto___76180 + (1));
i__9159__auto___76180 = G__76181;
continue;
} else {
}
break;
}

var G__76125 = args76123.length;
switch (G__76125) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args76123.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10448__auto___76183 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___76183,out){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___76183,out){
return (function (state_76155){
var state_val_76156 = (state_76155[(1)]);
if((state_val_76156 === (7))){
var inst_76135 = (state_76155[(7)]);
var inst_76134 = (state_76155[(8)]);
var inst_76134__$1 = (state_76155[(2)]);
var inst_76135__$1 = cljs.core.nth.call(null,inst_76134__$1,(0),null);
var inst_76136 = cljs.core.nth.call(null,inst_76134__$1,(1),null);
var inst_76137 = (inst_76135__$1 == null);
var state_76155__$1 = (function (){var statearr_76157 = state_76155;
(statearr_76157[(7)] = inst_76135__$1);

(statearr_76157[(9)] = inst_76136);

(statearr_76157[(8)] = inst_76134__$1);

return statearr_76157;
})();
if(cljs.core.truth_(inst_76137)){
var statearr_76158_76184 = state_76155__$1;
(statearr_76158_76184[(1)] = (8));

} else {
var statearr_76159_76185 = state_76155__$1;
(statearr_76159_76185[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76156 === (1))){
var inst_76126 = cljs.core.vec.call(null,chs);
var inst_76127 = inst_76126;
var state_76155__$1 = (function (){var statearr_76160 = state_76155;
(statearr_76160[(10)] = inst_76127);

return statearr_76160;
})();
var statearr_76161_76186 = state_76155__$1;
(statearr_76161_76186[(2)] = null);

(statearr_76161_76186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76156 === (4))){
var inst_76127 = (state_76155[(10)]);
var state_76155__$1 = state_76155;
return cljs.core.async.ioc_alts_BANG_.call(null,state_76155__$1,(7),inst_76127);
} else {
if((state_val_76156 === (6))){
var inst_76151 = (state_76155[(2)]);
var state_76155__$1 = state_76155;
var statearr_76162_76187 = state_76155__$1;
(statearr_76162_76187[(2)] = inst_76151);

(statearr_76162_76187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76156 === (3))){
var inst_76153 = (state_76155[(2)]);
var state_76155__$1 = state_76155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76155__$1,inst_76153);
} else {
if((state_val_76156 === (2))){
var inst_76127 = (state_76155[(10)]);
var inst_76129 = cljs.core.count.call(null,inst_76127);
var inst_76130 = (inst_76129 > (0));
var state_76155__$1 = state_76155;
if(cljs.core.truth_(inst_76130)){
var statearr_76164_76188 = state_76155__$1;
(statearr_76164_76188[(1)] = (4));

} else {
var statearr_76165_76189 = state_76155__$1;
(statearr_76165_76189[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76156 === (11))){
var inst_76127 = (state_76155[(10)]);
var inst_76144 = (state_76155[(2)]);
var tmp76163 = inst_76127;
var inst_76127__$1 = tmp76163;
var state_76155__$1 = (function (){var statearr_76166 = state_76155;
(statearr_76166[(11)] = inst_76144);

(statearr_76166[(10)] = inst_76127__$1);

return statearr_76166;
})();
var statearr_76167_76190 = state_76155__$1;
(statearr_76167_76190[(2)] = null);

(statearr_76167_76190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76156 === (9))){
var inst_76135 = (state_76155[(7)]);
var state_76155__$1 = state_76155;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76155__$1,(11),out,inst_76135);
} else {
if((state_val_76156 === (5))){
var inst_76149 = cljs.core.async.close_BANG_.call(null,out);
var state_76155__$1 = state_76155;
var statearr_76168_76191 = state_76155__$1;
(statearr_76168_76191[(2)] = inst_76149);

(statearr_76168_76191[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76156 === (10))){
var inst_76147 = (state_76155[(2)]);
var state_76155__$1 = state_76155;
var statearr_76169_76192 = state_76155__$1;
(statearr_76169_76192[(2)] = inst_76147);

(statearr_76169_76192[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76156 === (8))){
var inst_76135 = (state_76155[(7)]);
var inst_76136 = (state_76155[(9)]);
var inst_76134 = (state_76155[(8)]);
var inst_76127 = (state_76155[(10)]);
var inst_76139 = (function (){var cs = inst_76127;
var vec__76132 = inst_76134;
var v = inst_76135;
var c = inst_76136;
return ((function (cs,vec__76132,v,c,inst_76135,inst_76136,inst_76134,inst_76127,state_val_76156,c__10448__auto___76183,out){
return (function (p1__76122_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__76122_SHARP_);
});
;})(cs,vec__76132,v,c,inst_76135,inst_76136,inst_76134,inst_76127,state_val_76156,c__10448__auto___76183,out))
})();
var inst_76140 = cljs.core.filterv.call(null,inst_76139,inst_76127);
var inst_76127__$1 = inst_76140;
var state_76155__$1 = (function (){var statearr_76170 = state_76155;
(statearr_76170[(10)] = inst_76127__$1);

return statearr_76170;
})();
var statearr_76171_76193 = state_76155__$1;
(statearr_76171_76193[(2)] = null);

(statearr_76171_76193[(1)] = (2));


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
});})(c__10448__auto___76183,out))
;
return ((function (switch__10427__auto__,c__10448__auto___76183,out){
return (function() {
var cljs$core$async$state_machine__10428__auto__ = null;
var cljs$core$async$state_machine__10428__auto____0 = (function (){
var statearr_76175 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_76175[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_76175[(1)] = (1));

return statearr_76175;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_76155){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_76155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e76176){if((e76176 instanceof Object)){
var ex__10431__auto__ = e76176;
var statearr_76177_76194 = state_76155;
(statearr_76177_76194[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e76176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76195 = state_76155;
state_76155 = G__76195;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_76155){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_76155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___76183,out))
})();
var state__10450__auto__ = (function (){var statearr_76178 = f__10449__auto__.call(null);
(statearr_76178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___76183);

return statearr_76178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___76183,out))
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
var args76196 = [];
var len__9158__auto___76245 = arguments.length;
var i__9159__auto___76246 = (0);
while(true){
if((i__9159__auto___76246 < len__9158__auto___76245)){
args76196.push((arguments[i__9159__auto___76246]));

var G__76247 = (i__9159__auto___76246 + (1));
i__9159__auto___76246 = G__76247;
continue;
} else {
}
break;
}

var G__76198 = args76196.length;
switch (G__76198) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args76196.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10448__auto___76249 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___76249,out){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___76249,out){
return (function (state_76222){
var state_val_76223 = (state_76222[(1)]);
if((state_val_76223 === (7))){
var inst_76204 = (state_76222[(7)]);
var inst_76204__$1 = (state_76222[(2)]);
var inst_76205 = (inst_76204__$1 == null);
var inst_76206 = cljs.core.not.call(null,inst_76205);
var state_76222__$1 = (function (){var statearr_76224 = state_76222;
(statearr_76224[(7)] = inst_76204__$1);

return statearr_76224;
})();
if(inst_76206){
var statearr_76225_76250 = state_76222__$1;
(statearr_76225_76250[(1)] = (8));

} else {
var statearr_76226_76251 = state_76222__$1;
(statearr_76226_76251[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76223 === (1))){
var inst_76199 = (0);
var state_76222__$1 = (function (){var statearr_76227 = state_76222;
(statearr_76227[(8)] = inst_76199);

return statearr_76227;
})();
var statearr_76228_76252 = state_76222__$1;
(statearr_76228_76252[(2)] = null);

(statearr_76228_76252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76223 === (4))){
var state_76222__$1 = state_76222;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76222__$1,(7),ch);
} else {
if((state_val_76223 === (6))){
var inst_76217 = (state_76222[(2)]);
var state_76222__$1 = state_76222;
var statearr_76229_76253 = state_76222__$1;
(statearr_76229_76253[(2)] = inst_76217);

(statearr_76229_76253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76223 === (3))){
var inst_76219 = (state_76222[(2)]);
var inst_76220 = cljs.core.async.close_BANG_.call(null,out);
var state_76222__$1 = (function (){var statearr_76230 = state_76222;
(statearr_76230[(9)] = inst_76219);

return statearr_76230;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76222__$1,inst_76220);
} else {
if((state_val_76223 === (2))){
var inst_76199 = (state_76222[(8)]);
var inst_76201 = (inst_76199 < n);
var state_76222__$1 = state_76222;
if(cljs.core.truth_(inst_76201)){
var statearr_76231_76254 = state_76222__$1;
(statearr_76231_76254[(1)] = (4));

} else {
var statearr_76232_76255 = state_76222__$1;
(statearr_76232_76255[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76223 === (11))){
var inst_76199 = (state_76222[(8)]);
var inst_76209 = (state_76222[(2)]);
var inst_76210 = (inst_76199 + (1));
var inst_76199__$1 = inst_76210;
var state_76222__$1 = (function (){var statearr_76233 = state_76222;
(statearr_76233[(8)] = inst_76199__$1);

(statearr_76233[(10)] = inst_76209);

return statearr_76233;
})();
var statearr_76234_76256 = state_76222__$1;
(statearr_76234_76256[(2)] = null);

(statearr_76234_76256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76223 === (9))){
var state_76222__$1 = state_76222;
var statearr_76235_76257 = state_76222__$1;
(statearr_76235_76257[(2)] = null);

(statearr_76235_76257[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76223 === (5))){
var state_76222__$1 = state_76222;
var statearr_76236_76258 = state_76222__$1;
(statearr_76236_76258[(2)] = null);

(statearr_76236_76258[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76223 === (10))){
var inst_76214 = (state_76222[(2)]);
var state_76222__$1 = state_76222;
var statearr_76237_76259 = state_76222__$1;
(statearr_76237_76259[(2)] = inst_76214);

(statearr_76237_76259[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76223 === (8))){
var inst_76204 = (state_76222[(7)]);
var state_76222__$1 = state_76222;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76222__$1,(11),out,inst_76204);
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
});})(c__10448__auto___76249,out))
;
return ((function (switch__10427__auto__,c__10448__auto___76249,out){
return (function() {
var cljs$core$async$state_machine__10428__auto__ = null;
var cljs$core$async$state_machine__10428__auto____0 = (function (){
var statearr_76241 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_76241[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_76241[(1)] = (1));

return statearr_76241;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_76222){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_76222);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e76242){if((e76242 instanceof Object)){
var ex__10431__auto__ = e76242;
var statearr_76243_76260 = state_76222;
(statearr_76243_76260[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e76242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76261 = state_76222;
state_76222 = G__76261;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_76222){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_76222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___76249,out))
})();
var state__10450__auto__ = (function (){var statearr_76244 = f__10449__auto__.call(null);
(statearr_76244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___76249);

return statearr_76244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___76249,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async76269 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async76269 = (function (map_LT_,f,ch,meta76270){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta76270 = meta76270;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async76269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76271,meta76270__$1){
var self__ = this;
var _76271__$1 = this;
return (new cljs.core.async.t_cljs$core$async76269(self__.map_LT_,self__.f,self__.ch,meta76270__$1));
});

cljs.core.async.t_cljs$core$async76269.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76271){
var self__ = this;
var _76271__$1 = this;
return self__.meta76270;
});

cljs.core.async.t_cljs$core$async76269.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async76269.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async76269.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async76269.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async76269.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async76272 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async76272 = (function (map_LT_,f,ch,meta76270,_,fn1,meta76273){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta76270 = meta76270;
this._ = _;
this.fn1 = fn1;
this.meta76273 = meta76273;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async76272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_76274,meta76273__$1){
var self__ = this;
var _76274__$1 = this;
return (new cljs.core.async.t_cljs$core$async76272(self__.map_LT_,self__.f,self__.ch,self__.meta76270,self__._,self__.fn1,meta76273__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async76272.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_76274){
var self__ = this;
var _76274__$1 = this;
return self__.meta76273;
});})(___$1))
;

cljs.core.async.t_cljs$core$async76272.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async76272.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async76272.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async76272.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__76262_SHARP_){
return f1.call(null,(((p1__76262_SHARP_ == null))?null:self__.f.call(null,p1__76262_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async76272.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta76270","meta76270",-1357667135,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async76269","cljs.core.async/t_cljs$core$async76269",1447564882,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta76273","meta76273",466863718,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async76272.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async76272.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async76272";

cljs.core.async.t_cljs$core$async76272.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8698__auto__,writer__8699__auto__,opt__8700__auto__){
return cljs.core._write.call(null,writer__8699__auto__,"cljs.core.async/t_cljs$core$async76272");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async76272 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async76272(map_LT___$1,f__$1,ch__$1,meta76270__$1,___$2,fn1__$1,meta76273){
return (new cljs.core.async.t_cljs$core$async76272(map_LT___$1,f__$1,ch__$1,meta76270__$1,___$2,fn1__$1,meta76273));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async76272(self__.map_LT_,self__.f,self__.ch,self__.meta76270,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async76269.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async76269.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async76269.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta76270","meta76270",-1357667135,null)], null);
});

cljs.core.async.t_cljs$core$async76269.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async76269.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async76269";

cljs.core.async.t_cljs$core$async76269.cljs$lang$ctorPrWriter = (function (this__8698__auto__,writer__8699__auto__,opt__8700__auto__){
return cljs.core._write.call(null,writer__8699__auto__,"cljs.core.async/t_cljs$core$async76269");
});

cljs.core.async.__GT_t_cljs$core$async76269 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async76269(map_LT___$1,f__$1,ch__$1,meta76270){
return (new cljs.core.async.t_cljs$core$async76269(map_LT___$1,f__$1,ch__$1,meta76270));
});

}

return (new cljs.core.async.t_cljs$core$async76269(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async76278 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async76278 = (function (map_GT_,f,ch,meta76279){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta76279 = meta76279;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async76278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76280,meta76279__$1){
var self__ = this;
var _76280__$1 = this;
return (new cljs.core.async.t_cljs$core$async76278(self__.map_GT_,self__.f,self__.ch,meta76279__$1));
});

cljs.core.async.t_cljs$core$async76278.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76280){
var self__ = this;
var _76280__$1 = this;
return self__.meta76279;
});

cljs.core.async.t_cljs$core$async76278.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async76278.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async76278.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async76278.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async76278.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async76278.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async76278.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta76279","meta76279",528640515,null)], null);
});

cljs.core.async.t_cljs$core$async76278.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async76278.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async76278";

cljs.core.async.t_cljs$core$async76278.cljs$lang$ctorPrWriter = (function (this__8698__auto__,writer__8699__auto__,opt__8700__auto__){
return cljs.core._write.call(null,writer__8699__auto__,"cljs.core.async/t_cljs$core$async76278");
});

cljs.core.async.__GT_t_cljs$core$async76278 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async76278(map_GT___$1,f__$1,ch__$1,meta76279){
return (new cljs.core.async.t_cljs$core$async76278(map_GT___$1,f__$1,ch__$1,meta76279));
});

}

return (new cljs.core.async.t_cljs$core$async76278(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async76284 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async76284 = (function (filter_GT_,p,ch,meta76285){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta76285 = meta76285;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async76284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76286,meta76285__$1){
var self__ = this;
var _76286__$1 = this;
return (new cljs.core.async.t_cljs$core$async76284(self__.filter_GT_,self__.p,self__.ch,meta76285__$1));
});

cljs.core.async.t_cljs$core$async76284.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76286){
var self__ = this;
var _76286__$1 = this;
return self__.meta76285;
});

cljs.core.async.t_cljs$core$async76284.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async76284.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async76284.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async76284.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async76284.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async76284.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async76284.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async76284.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta76285","meta76285",1259981351,null)], null);
});

cljs.core.async.t_cljs$core$async76284.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async76284.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async76284";

cljs.core.async.t_cljs$core$async76284.cljs$lang$ctorPrWriter = (function (this__8698__auto__,writer__8699__auto__,opt__8700__auto__){
return cljs.core._write.call(null,writer__8699__auto__,"cljs.core.async/t_cljs$core$async76284");
});

cljs.core.async.__GT_t_cljs$core$async76284 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async76284(filter_GT___$1,p__$1,ch__$1,meta76285){
return (new cljs.core.async.t_cljs$core$async76284(filter_GT___$1,p__$1,ch__$1,meta76285));
});

}

return (new cljs.core.async.t_cljs$core$async76284(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args76287 = [];
var len__9158__auto___76331 = arguments.length;
var i__9159__auto___76332 = (0);
while(true){
if((i__9159__auto___76332 < len__9158__auto___76331)){
args76287.push((arguments[i__9159__auto___76332]));

var G__76333 = (i__9159__auto___76332 + (1));
i__9159__auto___76332 = G__76333;
continue;
} else {
}
break;
}

var G__76289 = args76287.length;
switch (G__76289) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args76287.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10448__auto___76335 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___76335,out){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___76335,out){
return (function (state_76310){
var state_val_76311 = (state_76310[(1)]);
if((state_val_76311 === (7))){
var inst_76306 = (state_76310[(2)]);
var state_76310__$1 = state_76310;
var statearr_76312_76336 = state_76310__$1;
(statearr_76312_76336[(2)] = inst_76306);

(statearr_76312_76336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76311 === (1))){
var state_76310__$1 = state_76310;
var statearr_76313_76337 = state_76310__$1;
(statearr_76313_76337[(2)] = null);

(statearr_76313_76337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76311 === (4))){
var inst_76292 = (state_76310[(7)]);
var inst_76292__$1 = (state_76310[(2)]);
var inst_76293 = (inst_76292__$1 == null);
var state_76310__$1 = (function (){var statearr_76314 = state_76310;
(statearr_76314[(7)] = inst_76292__$1);

return statearr_76314;
})();
if(cljs.core.truth_(inst_76293)){
var statearr_76315_76338 = state_76310__$1;
(statearr_76315_76338[(1)] = (5));

} else {
var statearr_76316_76339 = state_76310__$1;
(statearr_76316_76339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76311 === (6))){
var inst_76292 = (state_76310[(7)]);
var inst_76297 = p.call(null,inst_76292);
var state_76310__$1 = state_76310;
if(cljs.core.truth_(inst_76297)){
var statearr_76317_76340 = state_76310__$1;
(statearr_76317_76340[(1)] = (8));

} else {
var statearr_76318_76341 = state_76310__$1;
(statearr_76318_76341[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76311 === (3))){
var inst_76308 = (state_76310[(2)]);
var state_76310__$1 = state_76310;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76310__$1,inst_76308);
} else {
if((state_val_76311 === (2))){
var state_76310__$1 = state_76310;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76310__$1,(4),ch);
} else {
if((state_val_76311 === (11))){
var inst_76300 = (state_76310[(2)]);
var state_76310__$1 = state_76310;
var statearr_76319_76342 = state_76310__$1;
(statearr_76319_76342[(2)] = inst_76300);

(statearr_76319_76342[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76311 === (9))){
var state_76310__$1 = state_76310;
var statearr_76320_76343 = state_76310__$1;
(statearr_76320_76343[(2)] = null);

(statearr_76320_76343[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76311 === (5))){
var inst_76295 = cljs.core.async.close_BANG_.call(null,out);
var state_76310__$1 = state_76310;
var statearr_76321_76344 = state_76310__$1;
(statearr_76321_76344[(2)] = inst_76295);

(statearr_76321_76344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76311 === (10))){
var inst_76303 = (state_76310[(2)]);
var state_76310__$1 = (function (){var statearr_76322 = state_76310;
(statearr_76322[(8)] = inst_76303);

return statearr_76322;
})();
var statearr_76323_76345 = state_76310__$1;
(statearr_76323_76345[(2)] = null);

(statearr_76323_76345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76311 === (8))){
var inst_76292 = (state_76310[(7)]);
var state_76310__$1 = state_76310;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76310__$1,(11),out,inst_76292);
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
});})(c__10448__auto___76335,out))
;
return ((function (switch__10427__auto__,c__10448__auto___76335,out){
return (function() {
var cljs$core$async$state_machine__10428__auto__ = null;
var cljs$core$async$state_machine__10428__auto____0 = (function (){
var statearr_76327 = [null,null,null,null,null,null,null,null,null];
(statearr_76327[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_76327[(1)] = (1));

return statearr_76327;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_76310){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_76310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e76328){if((e76328 instanceof Object)){
var ex__10431__auto__ = e76328;
var statearr_76329_76346 = state_76310;
(statearr_76329_76346[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e76328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76347 = state_76310;
state_76310 = G__76347;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_76310){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_76310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___76335,out))
})();
var state__10450__auto__ = (function (){var statearr_76330 = f__10449__auto__.call(null);
(statearr_76330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___76335);

return statearr_76330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___76335,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args76348 = [];
var len__9158__auto___76351 = arguments.length;
var i__9159__auto___76352 = (0);
while(true){
if((i__9159__auto___76352 < len__9158__auto___76351)){
args76348.push((arguments[i__9159__auto___76352]));

var G__76353 = (i__9159__auto___76352 + (1));
i__9159__auto___76352 = G__76353;
continue;
} else {
}
break;
}

var G__76350 = args76348.length;
switch (G__76350) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args76348.length)].join('')));

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
return (function (state_76520){
var state_val_76521 = (state_76520[(1)]);
if((state_val_76521 === (7))){
var inst_76516 = (state_76520[(2)]);
var state_76520__$1 = state_76520;
var statearr_76522_76563 = state_76520__$1;
(statearr_76522_76563[(2)] = inst_76516);

(statearr_76522_76563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76521 === (20))){
var inst_76486 = (state_76520[(7)]);
var inst_76497 = (state_76520[(2)]);
var inst_76498 = cljs.core.next.call(null,inst_76486);
var inst_76472 = inst_76498;
var inst_76473 = null;
var inst_76474 = (0);
var inst_76475 = (0);
var state_76520__$1 = (function (){var statearr_76523 = state_76520;
(statearr_76523[(8)] = inst_76497);

(statearr_76523[(9)] = inst_76473);

(statearr_76523[(10)] = inst_76472);

(statearr_76523[(11)] = inst_76475);

(statearr_76523[(12)] = inst_76474);

return statearr_76523;
})();
var statearr_76524_76564 = state_76520__$1;
(statearr_76524_76564[(2)] = null);

(statearr_76524_76564[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76521 === (1))){
var state_76520__$1 = state_76520;
var statearr_76525_76565 = state_76520__$1;
(statearr_76525_76565[(2)] = null);

(statearr_76525_76565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76521 === (4))){
var inst_76461 = (state_76520[(13)]);
var inst_76461__$1 = (state_76520[(2)]);
var inst_76462 = (inst_76461__$1 == null);
var state_76520__$1 = (function (){var statearr_76526 = state_76520;
(statearr_76526[(13)] = inst_76461__$1);

return statearr_76526;
})();
if(cljs.core.truth_(inst_76462)){
var statearr_76527_76566 = state_76520__$1;
(statearr_76527_76566[(1)] = (5));

} else {
var statearr_76528_76567 = state_76520__$1;
(statearr_76528_76567[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76521 === (15))){
var state_76520__$1 = state_76520;
var statearr_76532_76568 = state_76520__$1;
(statearr_76532_76568[(2)] = null);

(statearr_76532_76568[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76521 === (21))){
var state_76520__$1 = state_76520;
var statearr_76533_76569 = state_76520__$1;
(statearr_76533_76569[(2)] = null);

(statearr_76533_76569[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76521 === (13))){
var inst_76473 = (state_76520[(9)]);
var inst_76472 = (state_76520[(10)]);
var inst_76475 = (state_76520[(11)]);
var inst_76474 = (state_76520[(12)]);
var inst_76482 = (state_76520[(2)]);
var inst_76483 = (inst_76475 + (1));
var tmp76529 = inst_76473;
var tmp76530 = inst_76472;
var tmp76531 = inst_76474;
var inst_76472__$1 = tmp76530;
var inst_76473__$1 = tmp76529;
var inst_76474__$1 = tmp76531;
var inst_76475__$1 = inst_76483;
var state_76520__$1 = (function (){var statearr_76534 = state_76520;
(statearr_76534[(9)] = inst_76473__$1);

(statearr_76534[(10)] = inst_76472__$1);

(statearr_76534[(14)] = inst_76482);

(statearr_76534[(11)] = inst_76475__$1);

(statearr_76534[(12)] = inst_76474__$1);

return statearr_76534;
})();
var statearr_76535_76570 = state_76520__$1;
(statearr_76535_76570[(2)] = null);

(statearr_76535_76570[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76521 === (22))){
var state_76520__$1 = state_76520;
var statearr_76536_76571 = state_76520__$1;
(statearr_76536_76571[(2)] = null);

(statearr_76536_76571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76521 === (6))){
var inst_76461 = (state_76520[(13)]);
var inst_76470 = f.call(null,inst_76461);
var inst_76471 = cljs.core.seq.call(null,inst_76470);
var inst_76472 = inst_76471;
var inst_76473 = null;
var inst_76474 = (0);
var inst_76475 = (0);
var state_76520__$1 = (function (){var statearr_76537 = state_76520;
(statearr_76537[(9)] = inst_76473);

(statearr_76537[(10)] = inst_76472);

(statearr_76537[(11)] = inst_76475);

(statearr_76537[(12)] = inst_76474);

return statearr_76537;
})();
var statearr_76538_76572 = state_76520__$1;
(statearr_76538_76572[(2)] = null);

(statearr_76538_76572[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76521 === (17))){
var inst_76486 = (state_76520[(7)]);
var inst_76490 = cljs.core.chunk_first.call(null,inst_76486);
var inst_76491 = cljs.core.chunk_rest.call(null,inst_76486);
var inst_76492 = cljs.core.count.call(null,inst_76490);
var inst_76472 = inst_76491;
var inst_76473 = inst_76490;
var inst_76474 = inst_76492;
var inst_76475 = (0);
var state_76520__$1 = (function (){var statearr_76539 = state_76520;
(statearr_76539[(9)] = inst_76473);

(statearr_76539[(10)] = inst_76472);

(statearr_76539[(11)] = inst_76475);

(statearr_76539[(12)] = inst_76474);

return statearr_76539;
})();
var statearr_76540_76573 = state_76520__$1;
(statearr_76540_76573[(2)] = null);

(statearr_76540_76573[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76521 === (3))){
var inst_76518 = (state_76520[(2)]);
var state_76520__$1 = state_76520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76520__$1,inst_76518);
} else {
if((state_val_76521 === (12))){
var inst_76506 = (state_76520[(2)]);
var state_76520__$1 = state_76520;
var statearr_76541_76574 = state_76520__$1;
(statearr_76541_76574[(2)] = inst_76506);

(statearr_76541_76574[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76521 === (2))){
var state_76520__$1 = state_76520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76520__$1,(4),in$);
} else {
if((state_val_76521 === (23))){
var inst_76514 = (state_76520[(2)]);
var state_76520__$1 = state_76520;
var statearr_76542_76575 = state_76520__$1;
(statearr_76542_76575[(2)] = inst_76514);

(statearr_76542_76575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76521 === (19))){
var inst_76501 = (state_76520[(2)]);
var state_76520__$1 = state_76520;
var statearr_76543_76576 = state_76520__$1;
(statearr_76543_76576[(2)] = inst_76501);

(statearr_76543_76576[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76521 === (11))){
var inst_76472 = (state_76520[(10)]);
var inst_76486 = (state_76520[(7)]);
var inst_76486__$1 = cljs.core.seq.call(null,inst_76472);
var state_76520__$1 = (function (){var statearr_76544 = state_76520;
(statearr_76544[(7)] = inst_76486__$1);

return statearr_76544;
})();
if(inst_76486__$1){
var statearr_76545_76577 = state_76520__$1;
(statearr_76545_76577[(1)] = (14));

} else {
var statearr_76546_76578 = state_76520__$1;
(statearr_76546_76578[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76521 === (9))){
var inst_76508 = (state_76520[(2)]);
var inst_76509 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_76520__$1 = (function (){var statearr_76547 = state_76520;
(statearr_76547[(15)] = inst_76508);

return statearr_76547;
})();
if(cljs.core.truth_(inst_76509)){
var statearr_76548_76579 = state_76520__$1;
(statearr_76548_76579[(1)] = (21));

} else {
var statearr_76549_76580 = state_76520__$1;
(statearr_76549_76580[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76521 === (5))){
var inst_76464 = cljs.core.async.close_BANG_.call(null,out);
var state_76520__$1 = state_76520;
var statearr_76550_76581 = state_76520__$1;
(statearr_76550_76581[(2)] = inst_76464);

(statearr_76550_76581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76521 === (14))){
var inst_76486 = (state_76520[(7)]);
var inst_76488 = cljs.core.chunked_seq_QMARK_.call(null,inst_76486);
var state_76520__$1 = state_76520;
if(inst_76488){
var statearr_76551_76582 = state_76520__$1;
(statearr_76551_76582[(1)] = (17));

} else {
var statearr_76552_76583 = state_76520__$1;
(statearr_76552_76583[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76521 === (16))){
var inst_76504 = (state_76520[(2)]);
var state_76520__$1 = state_76520;
var statearr_76553_76584 = state_76520__$1;
(statearr_76553_76584[(2)] = inst_76504);

(statearr_76553_76584[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76521 === (10))){
var inst_76473 = (state_76520[(9)]);
var inst_76475 = (state_76520[(11)]);
var inst_76480 = cljs.core._nth.call(null,inst_76473,inst_76475);
var state_76520__$1 = state_76520;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76520__$1,(13),out,inst_76480);
} else {
if((state_val_76521 === (18))){
var inst_76486 = (state_76520[(7)]);
var inst_76495 = cljs.core.first.call(null,inst_76486);
var state_76520__$1 = state_76520;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76520__$1,(20),out,inst_76495);
} else {
if((state_val_76521 === (8))){
var inst_76475 = (state_76520[(11)]);
var inst_76474 = (state_76520[(12)]);
var inst_76477 = (inst_76475 < inst_76474);
var inst_76478 = inst_76477;
var state_76520__$1 = state_76520;
if(cljs.core.truth_(inst_76478)){
var statearr_76554_76585 = state_76520__$1;
(statearr_76554_76585[(1)] = (10));

} else {
var statearr_76555_76586 = state_76520__$1;
(statearr_76555_76586[(1)] = (11));

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
var statearr_76559 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_76559[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10428__auto__);

(statearr_76559[(1)] = (1));

return statearr_76559;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10428__auto____1 = (function (state_76520){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_76520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e76560){if((e76560 instanceof Object)){
var ex__10431__auto__ = e76560;
var statearr_76561_76587 = state_76520;
(statearr_76561_76587[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e76560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76588 = state_76520;
state_76520 = G__76588;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10428__auto__ = function(state_76520){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10428__auto____1.call(this,state_76520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10428__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10428__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto__))
})();
var state__10450__auto__ = (function (){var statearr_76562 = f__10449__auto__.call(null);
(statearr_76562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto__);

return statearr_76562;
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
var args76589 = [];
var len__9158__auto___76592 = arguments.length;
var i__9159__auto___76593 = (0);
while(true){
if((i__9159__auto___76593 < len__9158__auto___76592)){
args76589.push((arguments[i__9159__auto___76593]));

var G__76594 = (i__9159__auto___76593 + (1));
i__9159__auto___76593 = G__76594;
continue;
} else {
}
break;
}

var G__76591 = args76589.length;
switch (G__76591) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args76589.length)].join('')));

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
var args76596 = [];
var len__9158__auto___76599 = arguments.length;
var i__9159__auto___76600 = (0);
while(true){
if((i__9159__auto___76600 < len__9158__auto___76599)){
args76596.push((arguments[i__9159__auto___76600]));

var G__76601 = (i__9159__auto___76600 + (1));
i__9159__auto___76600 = G__76601;
continue;
} else {
}
break;
}

var G__76598 = args76596.length;
switch (G__76598) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args76596.length)].join('')));

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
var args76603 = [];
var len__9158__auto___76654 = arguments.length;
var i__9159__auto___76655 = (0);
while(true){
if((i__9159__auto___76655 < len__9158__auto___76654)){
args76603.push((arguments[i__9159__auto___76655]));

var G__76656 = (i__9159__auto___76655 + (1));
i__9159__auto___76655 = G__76656;
continue;
} else {
}
break;
}

var G__76605 = args76603.length;
switch (G__76605) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args76603.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10448__auto___76658 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___76658,out){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___76658,out){
return (function (state_76629){
var state_val_76630 = (state_76629[(1)]);
if((state_val_76630 === (7))){
var inst_76624 = (state_76629[(2)]);
var state_76629__$1 = state_76629;
var statearr_76631_76659 = state_76629__$1;
(statearr_76631_76659[(2)] = inst_76624);

(statearr_76631_76659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76630 === (1))){
var inst_76606 = null;
var state_76629__$1 = (function (){var statearr_76632 = state_76629;
(statearr_76632[(7)] = inst_76606);

return statearr_76632;
})();
var statearr_76633_76660 = state_76629__$1;
(statearr_76633_76660[(2)] = null);

(statearr_76633_76660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76630 === (4))){
var inst_76609 = (state_76629[(8)]);
var inst_76609__$1 = (state_76629[(2)]);
var inst_76610 = (inst_76609__$1 == null);
var inst_76611 = cljs.core.not.call(null,inst_76610);
var state_76629__$1 = (function (){var statearr_76634 = state_76629;
(statearr_76634[(8)] = inst_76609__$1);

return statearr_76634;
})();
if(inst_76611){
var statearr_76635_76661 = state_76629__$1;
(statearr_76635_76661[(1)] = (5));

} else {
var statearr_76636_76662 = state_76629__$1;
(statearr_76636_76662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76630 === (6))){
var state_76629__$1 = state_76629;
var statearr_76637_76663 = state_76629__$1;
(statearr_76637_76663[(2)] = null);

(statearr_76637_76663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76630 === (3))){
var inst_76626 = (state_76629[(2)]);
var inst_76627 = cljs.core.async.close_BANG_.call(null,out);
var state_76629__$1 = (function (){var statearr_76638 = state_76629;
(statearr_76638[(9)] = inst_76626);

return statearr_76638;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76629__$1,inst_76627);
} else {
if((state_val_76630 === (2))){
var state_76629__$1 = state_76629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76629__$1,(4),ch);
} else {
if((state_val_76630 === (11))){
var inst_76609 = (state_76629[(8)]);
var inst_76618 = (state_76629[(2)]);
var inst_76606 = inst_76609;
var state_76629__$1 = (function (){var statearr_76639 = state_76629;
(statearr_76639[(10)] = inst_76618);

(statearr_76639[(7)] = inst_76606);

return statearr_76639;
})();
var statearr_76640_76664 = state_76629__$1;
(statearr_76640_76664[(2)] = null);

(statearr_76640_76664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76630 === (9))){
var inst_76609 = (state_76629[(8)]);
var state_76629__$1 = state_76629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76629__$1,(11),out,inst_76609);
} else {
if((state_val_76630 === (5))){
var inst_76606 = (state_76629[(7)]);
var inst_76609 = (state_76629[(8)]);
var inst_76613 = cljs.core._EQ_.call(null,inst_76609,inst_76606);
var state_76629__$1 = state_76629;
if(inst_76613){
var statearr_76642_76665 = state_76629__$1;
(statearr_76642_76665[(1)] = (8));

} else {
var statearr_76643_76666 = state_76629__$1;
(statearr_76643_76666[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76630 === (10))){
var inst_76621 = (state_76629[(2)]);
var state_76629__$1 = state_76629;
var statearr_76644_76667 = state_76629__$1;
(statearr_76644_76667[(2)] = inst_76621);

(statearr_76644_76667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76630 === (8))){
var inst_76606 = (state_76629[(7)]);
var tmp76641 = inst_76606;
var inst_76606__$1 = tmp76641;
var state_76629__$1 = (function (){var statearr_76645 = state_76629;
(statearr_76645[(7)] = inst_76606__$1);

return statearr_76645;
})();
var statearr_76646_76668 = state_76629__$1;
(statearr_76646_76668[(2)] = null);

(statearr_76646_76668[(1)] = (2));


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
});})(c__10448__auto___76658,out))
;
return ((function (switch__10427__auto__,c__10448__auto___76658,out){
return (function() {
var cljs$core$async$state_machine__10428__auto__ = null;
var cljs$core$async$state_machine__10428__auto____0 = (function (){
var statearr_76650 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_76650[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_76650[(1)] = (1));

return statearr_76650;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_76629){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_76629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e76651){if((e76651 instanceof Object)){
var ex__10431__auto__ = e76651;
var statearr_76652_76669 = state_76629;
(statearr_76652_76669[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e76651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76670 = state_76629;
state_76629 = G__76670;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_76629){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_76629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___76658,out))
})();
var state__10450__auto__ = (function (){var statearr_76653 = f__10449__auto__.call(null);
(statearr_76653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___76658);

return statearr_76653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___76658,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args76671 = [];
var len__9158__auto___76741 = arguments.length;
var i__9159__auto___76742 = (0);
while(true){
if((i__9159__auto___76742 < len__9158__auto___76741)){
args76671.push((arguments[i__9159__auto___76742]));

var G__76743 = (i__9159__auto___76742 + (1));
i__9159__auto___76742 = G__76743;
continue;
} else {
}
break;
}

var G__76673 = args76671.length;
switch (G__76673) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args76671.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10448__auto___76745 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___76745,out){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___76745,out){
return (function (state_76711){
var state_val_76712 = (state_76711[(1)]);
if((state_val_76712 === (7))){
var inst_76707 = (state_76711[(2)]);
var state_76711__$1 = state_76711;
var statearr_76713_76746 = state_76711__$1;
(statearr_76713_76746[(2)] = inst_76707);

(statearr_76713_76746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76712 === (1))){
var inst_76674 = (new Array(n));
var inst_76675 = inst_76674;
var inst_76676 = (0);
var state_76711__$1 = (function (){var statearr_76714 = state_76711;
(statearr_76714[(7)] = inst_76676);

(statearr_76714[(8)] = inst_76675);

return statearr_76714;
})();
var statearr_76715_76747 = state_76711__$1;
(statearr_76715_76747[(2)] = null);

(statearr_76715_76747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76712 === (4))){
var inst_76679 = (state_76711[(9)]);
var inst_76679__$1 = (state_76711[(2)]);
var inst_76680 = (inst_76679__$1 == null);
var inst_76681 = cljs.core.not.call(null,inst_76680);
var state_76711__$1 = (function (){var statearr_76716 = state_76711;
(statearr_76716[(9)] = inst_76679__$1);

return statearr_76716;
})();
if(inst_76681){
var statearr_76717_76748 = state_76711__$1;
(statearr_76717_76748[(1)] = (5));

} else {
var statearr_76718_76749 = state_76711__$1;
(statearr_76718_76749[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76712 === (15))){
var inst_76701 = (state_76711[(2)]);
var state_76711__$1 = state_76711;
var statearr_76719_76750 = state_76711__$1;
(statearr_76719_76750[(2)] = inst_76701);

(statearr_76719_76750[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76712 === (13))){
var state_76711__$1 = state_76711;
var statearr_76720_76751 = state_76711__$1;
(statearr_76720_76751[(2)] = null);

(statearr_76720_76751[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76712 === (6))){
var inst_76676 = (state_76711[(7)]);
var inst_76697 = (inst_76676 > (0));
var state_76711__$1 = state_76711;
if(cljs.core.truth_(inst_76697)){
var statearr_76721_76752 = state_76711__$1;
(statearr_76721_76752[(1)] = (12));

} else {
var statearr_76722_76753 = state_76711__$1;
(statearr_76722_76753[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76712 === (3))){
var inst_76709 = (state_76711[(2)]);
var state_76711__$1 = state_76711;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76711__$1,inst_76709);
} else {
if((state_val_76712 === (12))){
var inst_76675 = (state_76711[(8)]);
var inst_76699 = cljs.core.vec.call(null,inst_76675);
var state_76711__$1 = state_76711;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76711__$1,(15),out,inst_76699);
} else {
if((state_val_76712 === (2))){
var state_76711__$1 = state_76711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76711__$1,(4),ch);
} else {
if((state_val_76712 === (11))){
var inst_76691 = (state_76711[(2)]);
var inst_76692 = (new Array(n));
var inst_76675 = inst_76692;
var inst_76676 = (0);
var state_76711__$1 = (function (){var statearr_76723 = state_76711;
(statearr_76723[(10)] = inst_76691);

(statearr_76723[(7)] = inst_76676);

(statearr_76723[(8)] = inst_76675);

return statearr_76723;
})();
var statearr_76724_76754 = state_76711__$1;
(statearr_76724_76754[(2)] = null);

(statearr_76724_76754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76712 === (9))){
var inst_76675 = (state_76711[(8)]);
var inst_76689 = cljs.core.vec.call(null,inst_76675);
var state_76711__$1 = state_76711;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76711__$1,(11),out,inst_76689);
} else {
if((state_val_76712 === (5))){
var inst_76684 = (state_76711[(11)]);
var inst_76676 = (state_76711[(7)]);
var inst_76675 = (state_76711[(8)]);
var inst_76679 = (state_76711[(9)]);
var inst_76683 = (inst_76675[inst_76676] = inst_76679);
var inst_76684__$1 = (inst_76676 + (1));
var inst_76685 = (inst_76684__$1 < n);
var state_76711__$1 = (function (){var statearr_76725 = state_76711;
(statearr_76725[(12)] = inst_76683);

(statearr_76725[(11)] = inst_76684__$1);

return statearr_76725;
})();
if(cljs.core.truth_(inst_76685)){
var statearr_76726_76755 = state_76711__$1;
(statearr_76726_76755[(1)] = (8));

} else {
var statearr_76727_76756 = state_76711__$1;
(statearr_76727_76756[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76712 === (14))){
var inst_76704 = (state_76711[(2)]);
var inst_76705 = cljs.core.async.close_BANG_.call(null,out);
var state_76711__$1 = (function (){var statearr_76729 = state_76711;
(statearr_76729[(13)] = inst_76704);

return statearr_76729;
})();
var statearr_76730_76757 = state_76711__$1;
(statearr_76730_76757[(2)] = inst_76705);

(statearr_76730_76757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76712 === (10))){
var inst_76695 = (state_76711[(2)]);
var state_76711__$1 = state_76711;
var statearr_76731_76758 = state_76711__$1;
(statearr_76731_76758[(2)] = inst_76695);

(statearr_76731_76758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76712 === (8))){
var inst_76684 = (state_76711[(11)]);
var inst_76675 = (state_76711[(8)]);
var tmp76728 = inst_76675;
var inst_76675__$1 = tmp76728;
var inst_76676 = inst_76684;
var state_76711__$1 = (function (){var statearr_76732 = state_76711;
(statearr_76732[(7)] = inst_76676);

(statearr_76732[(8)] = inst_76675__$1);

return statearr_76732;
})();
var statearr_76733_76759 = state_76711__$1;
(statearr_76733_76759[(2)] = null);

(statearr_76733_76759[(1)] = (2));


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
});})(c__10448__auto___76745,out))
;
return ((function (switch__10427__auto__,c__10448__auto___76745,out){
return (function() {
var cljs$core$async$state_machine__10428__auto__ = null;
var cljs$core$async$state_machine__10428__auto____0 = (function (){
var statearr_76737 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_76737[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_76737[(1)] = (1));

return statearr_76737;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_76711){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_76711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e76738){if((e76738 instanceof Object)){
var ex__10431__auto__ = e76738;
var statearr_76739_76760 = state_76711;
(statearr_76739_76760[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e76738;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76761 = state_76711;
state_76711 = G__76761;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_76711){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_76711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___76745,out))
})();
var state__10450__auto__ = (function (){var statearr_76740 = f__10449__auto__.call(null);
(statearr_76740[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___76745);

return statearr_76740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___76745,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args76762 = [];
var len__9158__auto___76836 = arguments.length;
var i__9159__auto___76837 = (0);
while(true){
if((i__9159__auto___76837 < len__9158__auto___76836)){
args76762.push((arguments[i__9159__auto___76837]));

var G__76838 = (i__9159__auto___76837 + (1));
i__9159__auto___76837 = G__76838;
continue;
} else {
}
break;
}

var G__76764 = args76762.length;
switch (G__76764) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args76762.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10448__auto___76840 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___76840,out){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___76840,out){
return (function (state_76806){
var state_val_76807 = (state_76806[(1)]);
if((state_val_76807 === (7))){
var inst_76802 = (state_76806[(2)]);
var state_76806__$1 = state_76806;
var statearr_76808_76841 = state_76806__$1;
(statearr_76808_76841[(2)] = inst_76802);

(statearr_76808_76841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76807 === (1))){
var inst_76765 = [];
var inst_76766 = inst_76765;
var inst_76767 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_76806__$1 = (function (){var statearr_76809 = state_76806;
(statearr_76809[(7)] = inst_76767);

(statearr_76809[(8)] = inst_76766);

return statearr_76809;
})();
var statearr_76810_76842 = state_76806__$1;
(statearr_76810_76842[(2)] = null);

(statearr_76810_76842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76807 === (4))){
var inst_76770 = (state_76806[(9)]);
var inst_76770__$1 = (state_76806[(2)]);
var inst_76771 = (inst_76770__$1 == null);
var inst_76772 = cljs.core.not.call(null,inst_76771);
var state_76806__$1 = (function (){var statearr_76811 = state_76806;
(statearr_76811[(9)] = inst_76770__$1);

return statearr_76811;
})();
if(inst_76772){
var statearr_76812_76843 = state_76806__$1;
(statearr_76812_76843[(1)] = (5));

} else {
var statearr_76813_76844 = state_76806__$1;
(statearr_76813_76844[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76807 === (15))){
var inst_76796 = (state_76806[(2)]);
var state_76806__$1 = state_76806;
var statearr_76814_76845 = state_76806__$1;
(statearr_76814_76845[(2)] = inst_76796);

(statearr_76814_76845[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76807 === (13))){
var state_76806__$1 = state_76806;
var statearr_76815_76846 = state_76806__$1;
(statearr_76815_76846[(2)] = null);

(statearr_76815_76846[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76807 === (6))){
var inst_76766 = (state_76806[(8)]);
var inst_76791 = inst_76766.length;
var inst_76792 = (inst_76791 > (0));
var state_76806__$1 = state_76806;
if(cljs.core.truth_(inst_76792)){
var statearr_76816_76847 = state_76806__$1;
(statearr_76816_76847[(1)] = (12));

} else {
var statearr_76817_76848 = state_76806__$1;
(statearr_76817_76848[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76807 === (3))){
var inst_76804 = (state_76806[(2)]);
var state_76806__$1 = state_76806;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76806__$1,inst_76804);
} else {
if((state_val_76807 === (12))){
var inst_76766 = (state_76806[(8)]);
var inst_76794 = cljs.core.vec.call(null,inst_76766);
var state_76806__$1 = state_76806;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76806__$1,(15),out,inst_76794);
} else {
if((state_val_76807 === (2))){
var state_76806__$1 = state_76806;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76806__$1,(4),ch);
} else {
if((state_val_76807 === (11))){
var inst_76774 = (state_76806[(10)]);
var inst_76770 = (state_76806[(9)]);
var inst_76784 = (state_76806[(2)]);
var inst_76785 = [];
var inst_76786 = inst_76785.push(inst_76770);
var inst_76766 = inst_76785;
var inst_76767 = inst_76774;
var state_76806__$1 = (function (){var statearr_76818 = state_76806;
(statearr_76818[(7)] = inst_76767);

(statearr_76818[(11)] = inst_76786);

(statearr_76818[(12)] = inst_76784);

(statearr_76818[(8)] = inst_76766);

return statearr_76818;
})();
var statearr_76819_76849 = state_76806__$1;
(statearr_76819_76849[(2)] = null);

(statearr_76819_76849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76807 === (9))){
var inst_76766 = (state_76806[(8)]);
var inst_76782 = cljs.core.vec.call(null,inst_76766);
var state_76806__$1 = state_76806;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76806__$1,(11),out,inst_76782);
} else {
if((state_val_76807 === (5))){
var inst_76774 = (state_76806[(10)]);
var inst_76770 = (state_76806[(9)]);
var inst_76767 = (state_76806[(7)]);
var inst_76774__$1 = f.call(null,inst_76770);
var inst_76775 = cljs.core._EQ_.call(null,inst_76774__$1,inst_76767);
var inst_76776 = cljs.core.keyword_identical_QMARK_.call(null,inst_76767,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_76777 = (inst_76775) || (inst_76776);
var state_76806__$1 = (function (){var statearr_76820 = state_76806;
(statearr_76820[(10)] = inst_76774__$1);

return statearr_76820;
})();
if(cljs.core.truth_(inst_76777)){
var statearr_76821_76850 = state_76806__$1;
(statearr_76821_76850[(1)] = (8));

} else {
var statearr_76822_76851 = state_76806__$1;
(statearr_76822_76851[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76807 === (14))){
var inst_76799 = (state_76806[(2)]);
var inst_76800 = cljs.core.async.close_BANG_.call(null,out);
var state_76806__$1 = (function (){var statearr_76824 = state_76806;
(statearr_76824[(13)] = inst_76799);

return statearr_76824;
})();
var statearr_76825_76852 = state_76806__$1;
(statearr_76825_76852[(2)] = inst_76800);

(statearr_76825_76852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76807 === (10))){
var inst_76789 = (state_76806[(2)]);
var state_76806__$1 = state_76806;
var statearr_76826_76853 = state_76806__$1;
(statearr_76826_76853[(2)] = inst_76789);

(statearr_76826_76853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76807 === (8))){
var inst_76774 = (state_76806[(10)]);
var inst_76770 = (state_76806[(9)]);
var inst_76766 = (state_76806[(8)]);
var inst_76779 = inst_76766.push(inst_76770);
var tmp76823 = inst_76766;
var inst_76766__$1 = tmp76823;
var inst_76767 = inst_76774;
var state_76806__$1 = (function (){var statearr_76827 = state_76806;
(statearr_76827[(7)] = inst_76767);

(statearr_76827[(8)] = inst_76766__$1);

(statearr_76827[(14)] = inst_76779);

return statearr_76827;
})();
var statearr_76828_76854 = state_76806__$1;
(statearr_76828_76854[(2)] = null);

(statearr_76828_76854[(1)] = (2));


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
});})(c__10448__auto___76840,out))
;
return ((function (switch__10427__auto__,c__10448__auto___76840,out){
return (function() {
var cljs$core$async$state_machine__10428__auto__ = null;
var cljs$core$async$state_machine__10428__auto____0 = (function (){
var statearr_76832 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_76832[(0)] = cljs$core$async$state_machine__10428__auto__);

(statearr_76832[(1)] = (1));

return statearr_76832;
});
var cljs$core$async$state_machine__10428__auto____1 = (function (state_76806){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_76806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e76833){if((e76833 instanceof Object)){
var ex__10431__auto__ = e76833;
var statearr_76834_76855 = state_76806;
(statearr_76834_76855[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e76833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76856 = state_76806;
state_76806 = G__76856;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
cljs$core$async$state_machine__10428__auto__ = function(state_76806){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10428__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10428__auto____1.call(this,state_76806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10428__auto____0;
cljs$core$async$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10428__auto____1;
return cljs$core$async$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___76840,out))
})();
var state__10450__auto__ = (function (){var statearr_76835 = f__10449__auto__.call(null);
(statearr_76835[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___76840);

return statearr_76835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___76840,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map