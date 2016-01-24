goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30910__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__30910 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30911__i = 0, G__30911__a = new Array(arguments.length -  0);
while (G__30911__i < G__30911__a.length) {G__30911__a[G__30911__i] = arguments[G__30911__i + 0]; ++G__30911__i;}
  args = new cljs.core.IndexedSeq(G__30911__a,0);
} 
return G__30910__delegate.call(this,args);};
G__30910.cljs$lang$maxFixedArity = 0;
G__30910.cljs$lang$applyTo = (function (arglist__30912){
var args = cljs.core.seq(arglist__30912);
return G__30910__delegate(args);
});
G__30910.cljs$core$IFn$_invoke$arity$variadic = G__30910__delegate;
return G__30910;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__30913__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__30913 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30914__i = 0, G__30914__a = new Array(arguments.length -  0);
while (G__30914__i < G__30914__a.length) {G__30914__a[G__30914__i] = arguments[G__30914__i + 0]; ++G__30914__i;}
  args = new cljs.core.IndexedSeq(G__30914__a,0);
} 
return G__30913__delegate.call(this,args);};
G__30913.cljs$lang$maxFixedArity = 0;
G__30913.cljs$lang$applyTo = (function (arglist__30915){
var args = cljs.core.seq(arglist__30915);
return G__30913__delegate(args);
});
G__30913.cljs$core$IFn$_invoke$arity$variadic = G__30913__delegate;
return G__30913;
})()
;

return null;
});
