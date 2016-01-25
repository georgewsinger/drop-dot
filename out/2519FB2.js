goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__144593__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__144593 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__144594__i = 0, G__144594__a = new Array(arguments.length -  0);
while (G__144594__i < G__144594__a.length) {G__144594__a[G__144594__i] = arguments[G__144594__i + 0]; ++G__144594__i;}
  args = new cljs.core.IndexedSeq(G__144594__a,0);
} 
return G__144593__delegate.call(this,args);};
G__144593.cljs$lang$maxFixedArity = 0;
G__144593.cljs$lang$applyTo = (function (arglist__144595){
var args = cljs.core.seq(arglist__144595);
return G__144593__delegate(args);
});
G__144593.cljs$core$IFn$_invoke$arity$variadic = G__144593__delegate;
return G__144593;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__144596__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__144596 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__144597__i = 0, G__144597__a = new Array(arguments.length -  0);
while (G__144597__i < G__144597__a.length) {G__144597__a[G__144597__i] = arguments[G__144597__i + 0]; ++G__144597__i;}
  args = new cljs.core.IndexedSeq(G__144597__a,0);
} 
return G__144596__delegate.call(this,args);};
G__144596.cljs$lang$maxFixedArity = 0;
G__144596.cljs$lang$applyTo = (function (arglist__144598){
var args = cljs.core.seq(arglist__144598);
return G__144596__delegate(args);
});
G__144596.cljs$core$IFn$_invoke$arity$variadic = G__144596__delegate;
return G__144596;
})()
;

return null;
});
