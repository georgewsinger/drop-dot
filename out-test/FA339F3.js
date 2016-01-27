goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__68711__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__68711 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__68712__i = 0, G__68712__a = new Array(arguments.length -  0);
while (G__68712__i < G__68712__a.length) {G__68712__a[G__68712__i] = arguments[G__68712__i + 0]; ++G__68712__i;}
  args = new cljs.core.IndexedSeq(G__68712__a,0);
} 
return G__68711__delegate.call(this,args);};
G__68711.cljs$lang$maxFixedArity = 0;
G__68711.cljs$lang$applyTo = (function (arglist__68713){
var args = cljs.core.seq(arglist__68713);
return G__68711__delegate(args);
});
G__68711.cljs$core$IFn$_invoke$arity$variadic = G__68711__delegate;
return G__68711;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__68714__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__68714 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__68715__i = 0, G__68715__a = new Array(arguments.length -  0);
while (G__68715__i < G__68715__a.length) {G__68715__a[G__68715__i] = arguments[G__68715__i + 0]; ++G__68715__i;}
  args = new cljs.core.IndexedSeq(G__68715__a,0);
} 
return G__68714__delegate.call(this,args);};
G__68714.cljs$lang$maxFixedArity = 0;
G__68714.cljs$lang$applyTo = (function (arglist__68716){
var args = cljs.core.seq(arglist__68716);
return G__68714__delegate(args);
});
G__68714.cljs$core$IFn$_invoke$arity$variadic = G__68714__delegate;
return G__68714;
})()
;

return null;
});
