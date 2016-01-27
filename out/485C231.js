goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__308468__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__308468 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__308469__i = 0, G__308469__a = new Array(arguments.length -  0);
while (G__308469__i < G__308469__a.length) {G__308469__a[G__308469__i] = arguments[G__308469__i + 0]; ++G__308469__i;}
  args = new cljs.core.IndexedSeq(G__308469__a,0);
} 
return G__308468__delegate.call(this,args);};
G__308468.cljs$lang$maxFixedArity = 0;
G__308468.cljs$lang$applyTo = (function (arglist__308470){
var args = cljs.core.seq(arglist__308470);
return G__308468__delegate(args);
});
G__308468.cljs$core$IFn$_invoke$arity$variadic = G__308468__delegate;
return G__308468;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__308471__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__308471 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__308472__i = 0, G__308472__a = new Array(arguments.length -  0);
while (G__308472__i < G__308472__a.length) {G__308472__a[G__308472__i] = arguments[G__308472__i + 0]; ++G__308472__i;}
  args = new cljs.core.IndexedSeq(G__308472__a,0);
} 
return G__308471__delegate.call(this,args);};
G__308471.cljs$lang$maxFixedArity = 0;
G__308471.cljs$lang$applyTo = (function (arglist__308473){
var args = cljs.core.seq(arglist__308473);
return G__308471__delegate(args);
});
G__308471.cljs$core$IFn$_invoke$arity$variadic = G__308471__delegate;
return G__308471;
})()
;

return null;
});
