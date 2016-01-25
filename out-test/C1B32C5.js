goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__51338__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__51338 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51339__i = 0, G__51339__a = new Array(arguments.length -  0);
while (G__51339__i < G__51339__a.length) {G__51339__a[G__51339__i] = arguments[G__51339__i + 0]; ++G__51339__i;}
  args = new cljs.core.IndexedSeq(G__51339__a,0);
} 
return G__51338__delegate.call(this,args);};
G__51338.cljs$lang$maxFixedArity = 0;
G__51338.cljs$lang$applyTo = (function (arglist__51340){
var args = cljs.core.seq(arglist__51340);
return G__51338__delegate(args);
});
G__51338.cljs$core$IFn$_invoke$arity$variadic = G__51338__delegate;
return G__51338;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__51341__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__51341 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51342__i = 0, G__51342__a = new Array(arguments.length -  0);
while (G__51342__i < G__51342__a.length) {G__51342__a[G__51342__i] = arguments[G__51342__i + 0]; ++G__51342__i;}
  args = new cljs.core.IndexedSeq(G__51342__a,0);
} 
return G__51341__delegate.call(this,args);};
G__51341.cljs$lang$maxFixedArity = 0;
G__51341.cljs$lang$applyTo = (function (arglist__51343){
var args = cljs.core.seq(arglist__51343);
return G__51341__delegate(args);
});
G__51341.cljs$core$IFn$_invoke$arity$variadic = G__51341__delegate;
return G__51341;
})()
;

return null;
});
