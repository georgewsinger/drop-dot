goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__23127__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__23127 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23128__i = 0, G__23128__a = new Array(arguments.length -  0);
while (G__23128__i < G__23128__a.length) {G__23128__a[G__23128__i] = arguments[G__23128__i + 0]; ++G__23128__i;}
  args = new cljs.core.IndexedSeq(G__23128__a,0);
} 
return G__23127__delegate.call(this,args);};
G__23127.cljs$lang$maxFixedArity = 0;
G__23127.cljs$lang$applyTo = (function (arglist__23129){
var args = cljs.core.seq(arglist__23129);
return G__23127__delegate(args);
});
G__23127.cljs$core$IFn$_invoke$arity$variadic = G__23127__delegate;
return G__23127;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__23130__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__23130 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23131__i = 0, G__23131__a = new Array(arguments.length -  0);
while (G__23131__i < G__23131__a.length) {G__23131__a[G__23131__i] = arguments[G__23131__i + 0]; ++G__23131__i;}
  args = new cljs.core.IndexedSeq(G__23131__a,0);
} 
return G__23130__delegate.call(this,args);};
G__23130.cljs$lang$maxFixedArity = 0;
G__23130.cljs$lang$applyTo = (function (arglist__23132){
var args = cljs.core.seq(arglist__23132);
return G__23130__delegate(args);
});
G__23130.cljs$core$IFn$_invoke$arity$variadic = G__23130__delegate;
return G__23130;
})()
;

return null;
});
