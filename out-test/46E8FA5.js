goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26471__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26471 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26472__i = 0, G__26472__a = new Array(arguments.length -  0);
while (G__26472__i < G__26472__a.length) {G__26472__a[G__26472__i] = arguments[G__26472__i + 0]; ++G__26472__i;}
  args = new cljs.core.IndexedSeq(G__26472__a,0);
} 
return G__26471__delegate.call(this,args);};
G__26471.cljs$lang$maxFixedArity = 0;
G__26471.cljs$lang$applyTo = (function (arglist__26473){
var args = cljs.core.seq(arglist__26473);
return G__26471__delegate(args);
});
G__26471.cljs$core$IFn$_invoke$arity$variadic = G__26471__delegate;
return G__26471;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26474__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26474 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26475__i = 0, G__26475__a = new Array(arguments.length -  0);
while (G__26475__i < G__26475__a.length) {G__26475__a[G__26475__i] = arguments[G__26475__i + 0]; ++G__26475__i;}
  args = new cljs.core.IndexedSeq(G__26475__a,0);
} 
return G__26474__delegate.call(this,args);};
G__26474.cljs$lang$maxFixedArity = 0;
G__26474.cljs$lang$applyTo = (function (arglist__26476){
var args = cljs.core.seq(arglist__26476);
return G__26474__delegate(args);
});
G__26474.cljs$core$IFn$_invoke$arity$variadic = G__26474__delegate;
return G__26474;
})()
;

return null;
});
