goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18389__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18389 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18390__i = 0, G__18390__a = new Array(arguments.length -  0);
while (G__18390__i < G__18390__a.length) {G__18390__a[G__18390__i] = arguments[G__18390__i + 0]; ++G__18390__i;}
  args = new cljs.core.IndexedSeq(G__18390__a,0);
} 
return G__18389__delegate.call(this,args);};
G__18389.cljs$lang$maxFixedArity = 0;
G__18389.cljs$lang$applyTo = (function (arglist__18391){
var args = cljs.core.seq(arglist__18391);
return G__18389__delegate(args);
});
G__18389.cljs$core$IFn$_invoke$arity$variadic = G__18389__delegate;
return G__18389;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18392__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18392 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18393__i = 0, G__18393__a = new Array(arguments.length -  0);
while (G__18393__i < G__18393__a.length) {G__18393__a[G__18393__i] = arguments[G__18393__i + 0]; ++G__18393__i;}
  args = new cljs.core.IndexedSeq(G__18393__a,0);
} 
return G__18392__delegate.call(this,args);};
G__18392.cljs$lang$maxFixedArity = 0;
G__18392.cljs$lang$applyTo = (function (arglist__18394){
var args = cljs.core.seq(arglist__18394);
return G__18392__delegate(args);
});
G__18392.cljs$core$IFn$_invoke$arity$variadic = G__18392__delegate;
return G__18392;
})()
;

return null;
});
