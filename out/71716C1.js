goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__184766__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__184766 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__184767__i = 0, G__184767__a = new Array(arguments.length -  0);
while (G__184767__i < G__184767__a.length) {G__184767__a[G__184767__i] = arguments[G__184767__i + 0]; ++G__184767__i;}
  args = new cljs.core.IndexedSeq(G__184767__a,0);
} 
return G__184766__delegate.call(this,args);};
G__184766.cljs$lang$maxFixedArity = 0;
G__184766.cljs$lang$applyTo = (function (arglist__184768){
var args = cljs.core.seq(arglist__184768);
return G__184766__delegate(args);
});
G__184766.cljs$core$IFn$_invoke$arity$variadic = G__184766__delegate;
return G__184766;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__184769__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__184769 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__184770__i = 0, G__184770__a = new Array(arguments.length -  0);
while (G__184770__i < G__184770__a.length) {G__184770__a[G__184770__i] = arguments[G__184770__i + 0]; ++G__184770__i;}
  args = new cljs.core.IndexedSeq(G__184770__a,0);
} 
return G__184769__delegate.call(this,args);};
G__184769.cljs$lang$maxFixedArity = 0;
G__184769.cljs$lang$applyTo = (function (arglist__184771){
var args = cljs.core.seq(arglist__184771);
return G__184769__delegate(args);
});
G__184769.cljs$core$IFn$_invoke$arity$variadic = G__184769__delegate;
return G__184769;
})()
;

return null;
});
