goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37468__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37468 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37469__i = 0, G__37469__a = new Array(arguments.length -  0);
while (G__37469__i < G__37469__a.length) {G__37469__a[G__37469__i] = arguments[G__37469__i + 0]; ++G__37469__i;}
  args = new cljs.core.IndexedSeq(G__37469__a,0);
} 
return G__37468__delegate.call(this,args);};
G__37468.cljs$lang$maxFixedArity = 0;
G__37468.cljs$lang$applyTo = (function (arglist__37470){
var args = cljs.core.seq(arglist__37470);
return G__37468__delegate(args);
});
G__37468.cljs$core$IFn$_invoke$arity$variadic = G__37468__delegate;
return G__37468;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37471__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37471 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37472__i = 0, G__37472__a = new Array(arguments.length -  0);
while (G__37472__i < G__37472__a.length) {G__37472__a[G__37472__i] = arguments[G__37472__i + 0]; ++G__37472__i;}
  args = new cljs.core.IndexedSeq(G__37472__a,0);
} 
return G__37471__delegate.call(this,args);};
G__37471.cljs$lang$maxFixedArity = 0;
G__37471.cljs$lang$applyTo = (function (arglist__37473){
var args = cljs.core.seq(arglist__37473);
return G__37471__delegate(args);
});
G__37471.cljs$core$IFn$_invoke$arity$variadic = G__37471__delegate;
return G__37471;
})()
;

return null;
});
