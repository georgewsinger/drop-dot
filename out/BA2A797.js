goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14389__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14389 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14390__i = 0, G__14390__a = new Array(arguments.length -  0);
while (G__14390__i < G__14390__a.length) {G__14390__a[G__14390__i] = arguments[G__14390__i + 0]; ++G__14390__i;}
  args = new cljs.core.IndexedSeq(G__14390__a,0);
} 
return G__14389__delegate.call(this,args);};
G__14389.cljs$lang$maxFixedArity = 0;
G__14389.cljs$lang$applyTo = (function (arglist__14391){
var args = cljs.core.seq(arglist__14391);
return G__14389__delegate(args);
});
G__14389.cljs$core$IFn$_invoke$arity$variadic = G__14389__delegate;
return G__14389;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14392__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14392 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14393__i = 0, G__14393__a = new Array(arguments.length -  0);
while (G__14393__i < G__14393__a.length) {G__14393__a[G__14393__i] = arguments[G__14393__i + 0]; ++G__14393__i;}
  args = new cljs.core.IndexedSeq(G__14393__a,0);
} 
return G__14392__delegate.call(this,args);};
G__14392.cljs$lang$maxFixedArity = 0;
G__14392.cljs$lang$applyTo = (function (arglist__14394){
var args = cljs.core.seq(arglist__14394);
return G__14392__delegate(args);
});
G__14392.cljs$core$IFn$_invoke$arity$variadic = G__14392__delegate;
return G__14392;
})()
;

return null;
});
