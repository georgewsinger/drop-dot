goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33711__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33711 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33712__i = 0, G__33712__a = new Array(arguments.length -  0);
while (G__33712__i < G__33712__a.length) {G__33712__a[G__33712__i] = arguments[G__33712__i + 0]; ++G__33712__i;}
  args = new cljs.core.IndexedSeq(G__33712__a,0);
} 
return G__33711__delegate.call(this,args);};
G__33711.cljs$lang$maxFixedArity = 0;
G__33711.cljs$lang$applyTo = (function (arglist__33713){
var args = cljs.core.seq(arglist__33713);
return G__33711__delegate(args);
});
G__33711.cljs$core$IFn$_invoke$arity$variadic = G__33711__delegate;
return G__33711;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33714__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33714 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33715__i = 0, G__33715__a = new Array(arguments.length -  0);
while (G__33715__i < G__33715__a.length) {G__33715__a[G__33715__i] = arguments[G__33715__i + 0]; ++G__33715__i;}
  args = new cljs.core.IndexedSeq(G__33715__a,0);
} 
return G__33714__delegate.call(this,args);};
G__33714.cljs$lang$maxFixedArity = 0;
G__33714.cljs$lang$applyTo = (function (arglist__33716){
var args = cljs.core.seq(arglist__33716);
return G__33714__delegate(args);
});
G__33714.cljs$core$IFn$_invoke$arity$variadic = G__33714__delegate;
return G__33714;
})()
;

return null;
});
