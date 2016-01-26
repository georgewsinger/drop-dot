goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20354__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20354 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20355__i = 0, G__20355__a = new Array(arguments.length -  0);
while (G__20355__i < G__20355__a.length) {G__20355__a[G__20355__i] = arguments[G__20355__i + 0]; ++G__20355__i;}
  args = new cljs.core.IndexedSeq(G__20355__a,0);
} 
return G__20354__delegate.call(this,args);};
G__20354.cljs$lang$maxFixedArity = 0;
G__20354.cljs$lang$applyTo = (function (arglist__20356){
var args = cljs.core.seq(arglist__20356);
return G__20354__delegate(args);
});
G__20354.cljs$core$IFn$_invoke$arity$variadic = G__20354__delegate;
return G__20354;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20357__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20357 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20358__i = 0, G__20358__a = new Array(arguments.length -  0);
while (G__20358__i < G__20358__a.length) {G__20358__a[G__20358__i] = arguments[G__20358__i + 0]; ++G__20358__i;}
  args = new cljs.core.IndexedSeq(G__20358__a,0);
} 
return G__20357__delegate.call(this,args);};
G__20357.cljs$lang$maxFixedArity = 0;
G__20357.cljs$lang$applyTo = (function (arglist__20359){
var args = cljs.core.seq(arglist__20359);
return G__20357__delegate(args);
});
G__20357.cljs$core$IFn$_invoke$arity$variadic = G__20357__delegate;
return G__20357;
})()
;

return null;
});
