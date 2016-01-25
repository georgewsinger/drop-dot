goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__173711__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__173711 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__173712__i = 0, G__173712__a = new Array(arguments.length -  0);
while (G__173712__i < G__173712__a.length) {G__173712__a[G__173712__i] = arguments[G__173712__i + 0]; ++G__173712__i;}
  args = new cljs.core.IndexedSeq(G__173712__a,0);
} 
return G__173711__delegate.call(this,args);};
G__173711.cljs$lang$maxFixedArity = 0;
G__173711.cljs$lang$applyTo = (function (arglist__173713){
var args = cljs.core.seq(arglist__173713);
return G__173711__delegate(args);
});
G__173711.cljs$core$IFn$_invoke$arity$variadic = G__173711__delegate;
return G__173711;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__173714__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__173714 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__173715__i = 0, G__173715__a = new Array(arguments.length -  0);
while (G__173715__i < G__173715__a.length) {G__173715__a[G__173715__i] = arguments[G__173715__i + 0]; ++G__173715__i;}
  args = new cljs.core.IndexedSeq(G__173715__a,0);
} 
return G__173714__delegate.call(this,args);};
G__173714.cljs$lang$maxFixedArity = 0;
G__173714.cljs$lang$applyTo = (function (arglist__173716){
var args = cljs.core.seq(arglist__173716);
return G__173714__delegate(args);
});
G__173714.cljs$core$IFn$_invoke$arity$variadic = G__173714__delegate;
return G__173714;
})()
;

return null;
});
