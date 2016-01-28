goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__71721__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__71721 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__71722__i = 0, G__71722__a = new Array(arguments.length -  0);
while (G__71722__i < G__71722__a.length) {G__71722__a[G__71722__i] = arguments[G__71722__i + 0]; ++G__71722__i;}
  args = new cljs.core.IndexedSeq(G__71722__a,0);
} 
return G__71721__delegate.call(this,args);};
G__71721.cljs$lang$maxFixedArity = 0;
G__71721.cljs$lang$applyTo = (function (arglist__71723){
var args = cljs.core.seq(arglist__71723);
return G__71721__delegate(args);
});
G__71721.cljs$core$IFn$_invoke$arity$variadic = G__71721__delegate;
return G__71721;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__71724__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__71724 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__71725__i = 0, G__71725__a = new Array(arguments.length -  0);
while (G__71725__i < G__71725__a.length) {G__71725__a[G__71725__i] = arguments[G__71725__i + 0]; ++G__71725__i;}
  args = new cljs.core.IndexedSeq(G__71725__a,0);
} 
return G__71724__delegate.call(this,args);};
G__71724.cljs$lang$maxFixedArity = 0;
G__71724.cljs$lang$applyTo = (function (arglist__71726){
var args = cljs.core.seq(arglist__71726);
return G__71724__delegate(args);
});
G__71724.cljs$core$IFn$_invoke$arity$variadic = G__71724__delegate;
return G__71724;
})()
;

return null;
});
