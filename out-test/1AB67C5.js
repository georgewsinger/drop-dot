goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45471__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45471 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45472__i = 0, G__45472__a = new Array(arguments.length -  0);
while (G__45472__i < G__45472__a.length) {G__45472__a[G__45472__i] = arguments[G__45472__i + 0]; ++G__45472__i;}
  args = new cljs.core.IndexedSeq(G__45472__a,0);
} 
return G__45471__delegate.call(this,args);};
G__45471.cljs$lang$maxFixedArity = 0;
G__45471.cljs$lang$applyTo = (function (arglist__45473){
var args = cljs.core.seq(arglist__45473);
return G__45471__delegate(args);
});
G__45471.cljs$core$IFn$_invoke$arity$variadic = G__45471__delegate;
return G__45471;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45474__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45474 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45475__i = 0, G__45475__a = new Array(arguments.length -  0);
while (G__45475__i < G__45475__a.length) {G__45475__a[G__45475__i] = arguments[G__45475__i + 0]; ++G__45475__i;}
  args = new cljs.core.IndexedSeq(G__45475__a,0);
} 
return G__45474__delegate.call(this,args);};
G__45474.cljs$lang$maxFixedArity = 0;
G__45474.cljs$lang$applyTo = (function (arglist__45476){
var args = cljs.core.seq(arglist__45476);
return G__45474__delegate(args);
});
G__45474.cljs$core$IFn$_invoke$arity$variadic = G__45474__delegate;
return G__45474;
})()
;

return null;
});
