goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__188249__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__188249 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__188250__i = 0, G__188250__a = new Array(arguments.length -  0);
while (G__188250__i < G__188250__a.length) {G__188250__a[G__188250__i] = arguments[G__188250__i + 0]; ++G__188250__i;}
  args = new cljs.core.IndexedSeq(G__188250__a,0);
} 
return G__188249__delegate.call(this,args);};
G__188249.cljs$lang$maxFixedArity = 0;
G__188249.cljs$lang$applyTo = (function (arglist__188251){
var args = cljs.core.seq(arglist__188251);
return G__188249__delegate(args);
});
G__188249.cljs$core$IFn$_invoke$arity$variadic = G__188249__delegate;
return G__188249;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__188252__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__188252 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__188253__i = 0, G__188253__a = new Array(arguments.length -  0);
while (G__188253__i < G__188253__a.length) {G__188253__a[G__188253__i] = arguments[G__188253__i + 0]; ++G__188253__i;}
  args = new cljs.core.IndexedSeq(G__188253__a,0);
} 
return G__188252__delegate.call(this,args);};
G__188252.cljs$lang$maxFixedArity = 0;
G__188252.cljs$lang$applyTo = (function (arglist__188254){
var args = cljs.core.seq(arglist__188254);
return G__188252__delegate(args);
});
G__188252.cljs$core$IFn$_invoke$arity$variadic = G__188252__delegate;
return G__188252;
})()
;

return null;
});
