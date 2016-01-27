goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__353576__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__353576 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__353577__i = 0, G__353577__a = new Array(arguments.length -  0);
while (G__353577__i < G__353577__a.length) {G__353577__a[G__353577__i] = arguments[G__353577__i + 0]; ++G__353577__i;}
  args = new cljs.core.IndexedSeq(G__353577__a,0);
} 
return G__353576__delegate.call(this,args);};
G__353576.cljs$lang$maxFixedArity = 0;
G__353576.cljs$lang$applyTo = (function (arglist__353578){
var args = cljs.core.seq(arglist__353578);
return G__353576__delegate(args);
});
G__353576.cljs$core$IFn$_invoke$arity$variadic = G__353576__delegate;
return G__353576;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__353579__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__353579 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__353580__i = 0, G__353580__a = new Array(arguments.length -  0);
while (G__353580__i < G__353580__a.length) {G__353580__a[G__353580__i] = arguments[G__353580__i + 0]; ++G__353580__i;}
  args = new cljs.core.IndexedSeq(G__353580__a,0);
} 
return G__353579__delegate.call(this,args);};
G__353579.cljs$lang$maxFixedArity = 0;
G__353579.cljs$lang$applyTo = (function (arglist__353581){
var args = cljs.core.seq(arglist__353581);
return G__353579__delegate(args);
});
G__353579.cljs$core$IFn$_invoke$arity$variadic = G__353579__delegate;
return G__353579;
})()
;

return null;
});
