goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__341064__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__341064 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__341065__i = 0, G__341065__a = new Array(arguments.length -  0);
while (G__341065__i < G__341065__a.length) {G__341065__a[G__341065__i] = arguments[G__341065__i + 0]; ++G__341065__i;}
  args = new cljs.core.IndexedSeq(G__341065__a,0);
} 
return G__341064__delegate.call(this,args);};
G__341064.cljs$lang$maxFixedArity = 0;
G__341064.cljs$lang$applyTo = (function (arglist__341066){
var args = cljs.core.seq(arglist__341066);
return G__341064__delegate(args);
});
G__341064.cljs$core$IFn$_invoke$arity$variadic = G__341064__delegate;
return G__341064;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__341067__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__341067 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__341068__i = 0, G__341068__a = new Array(arguments.length -  0);
while (G__341068__i < G__341068__a.length) {G__341068__a[G__341068__i] = arguments[G__341068__i + 0]; ++G__341068__i;}
  args = new cljs.core.IndexedSeq(G__341068__a,0);
} 
return G__341067__delegate.call(this,args);};
G__341067.cljs$lang$maxFixedArity = 0;
G__341067.cljs$lang$applyTo = (function (arglist__341069){
var args = cljs.core.seq(arglist__341069);
return G__341067__delegate(args);
});
G__341067.cljs$core$IFn$_invoke$arity$variadic = G__341067__delegate;
return G__341067;
})()
;

return null;
});
