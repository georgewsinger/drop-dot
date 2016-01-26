goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__292354__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__292354 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__292355__i = 0, G__292355__a = new Array(arguments.length -  0);
while (G__292355__i < G__292355__a.length) {G__292355__a[G__292355__i] = arguments[G__292355__i + 0]; ++G__292355__i;}
  args = new cljs.core.IndexedSeq(G__292355__a,0);
} 
return G__292354__delegate.call(this,args);};
G__292354.cljs$lang$maxFixedArity = 0;
G__292354.cljs$lang$applyTo = (function (arglist__292356){
var args = cljs.core.seq(arglist__292356);
return G__292354__delegate(args);
});
G__292354.cljs$core$IFn$_invoke$arity$variadic = G__292354__delegate;
return G__292354;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__292357__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__292357 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__292358__i = 0, G__292358__a = new Array(arguments.length -  0);
while (G__292358__i < G__292358__a.length) {G__292358__a[G__292358__i] = arguments[G__292358__i + 0]; ++G__292358__i;}
  args = new cljs.core.IndexedSeq(G__292358__a,0);
} 
return G__292357__delegate.call(this,args);};
G__292357.cljs$lang$maxFixedArity = 0;
G__292357.cljs$lang$applyTo = (function (arglist__292359){
var args = cljs.core.seq(arglist__292359);
return G__292357__delegate(args);
});
G__292357.cljs$core$IFn$_invoke$arity$variadic = G__292357__delegate;
return G__292357;
})()
;

return null;
});
