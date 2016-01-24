goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__63362__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__63362 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63363__i = 0, G__63363__a = new Array(arguments.length -  0);
while (G__63363__i < G__63363__a.length) {G__63363__a[G__63363__i] = arguments[G__63363__i + 0]; ++G__63363__i;}
  args = new cljs.core.IndexedSeq(G__63363__a,0);
} 
return G__63362__delegate.call(this,args);};
G__63362.cljs$lang$maxFixedArity = 0;
G__63362.cljs$lang$applyTo = (function (arglist__63364){
var args = cljs.core.seq(arglist__63364);
return G__63362__delegate(args);
});
G__63362.cljs$core$IFn$_invoke$arity$variadic = G__63362__delegate;
return G__63362;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__63365__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__63365 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63366__i = 0, G__63366__a = new Array(arguments.length -  0);
while (G__63366__i < G__63366__a.length) {G__63366__a[G__63366__i] = arguments[G__63366__i + 0]; ++G__63366__i;}
  args = new cljs.core.IndexedSeq(G__63366__a,0);
} 
return G__63365__delegate.call(this,args);};
G__63365.cljs$lang$maxFixedArity = 0;
G__63365.cljs$lang$applyTo = (function (arglist__63367){
var args = cljs.core.seq(arglist__63367);
return G__63365__delegate(args);
});
G__63365.cljs$core$IFn$_invoke$arity$variadic = G__63365__delegate;
return G__63365;
})()
;

return null;
});
