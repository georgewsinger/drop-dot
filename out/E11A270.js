goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__266139__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__266139 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__266140__i = 0, G__266140__a = new Array(arguments.length -  0);
while (G__266140__i < G__266140__a.length) {G__266140__a[G__266140__i] = arguments[G__266140__i + 0]; ++G__266140__i;}
  args = new cljs.core.IndexedSeq(G__266140__a,0);
} 
return G__266139__delegate.call(this,args);};
G__266139.cljs$lang$maxFixedArity = 0;
G__266139.cljs$lang$applyTo = (function (arglist__266141){
var args = cljs.core.seq(arglist__266141);
return G__266139__delegate(args);
});
G__266139.cljs$core$IFn$_invoke$arity$variadic = G__266139__delegate;
return G__266139;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__266142__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__266142 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__266143__i = 0, G__266143__a = new Array(arguments.length -  0);
while (G__266143__i < G__266143__a.length) {G__266143__a[G__266143__i] = arguments[G__266143__i + 0]; ++G__266143__i;}
  args = new cljs.core.IndexedSeq(G__266143__a,0);
} 
return G__266142__delegate.call(this,args);};
G__266142.cljs$lang$maxFixedArity = 0;
G__266142.cljs$lang$applyTo = (function (arglist__266144){
var args = cljs.core.seq(arglist__266144);
return G__266142__delegate(args);
});
G__266142.cljs$core$IFn$_invoke$arity$variadic = G__266142__delegate;
return G__266142;
})()
;

return null;
});
