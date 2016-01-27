goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__71595__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__71595 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__71596__i = 0, G__71596__a = new Array(arguments.length -  0);
while (G__71596__i < G__71596__a.length) {G__71596__a[G__71596__i] = arguments[G__71596__i + 0]; ++G__71596__i;}
  args = new cljs.core.IndexedSeq(G__71596__a,0);
} 
return G__71595__delegate.call(this,args);};
G__71595.cljs$lang$maxFixedArity = 0;
G__71595.cljs$lang$applyTo = (function (arglist__71597){
var args = cljs.core.seq(arglist__71597);
return G__71595__delegate(args);
});
G__71595.cljs$core$IFn$_invoke$arity$variadic = G__71595__delegate;
return G__71595;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__71598__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__71598 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__71599__i = 0, G__71599__a = new Array(arguments.length -  0);
while (G__71599__i < G__71599__a.length) {G__71599__a[G__71599__i] = arguments[G__71599__i + 0]; ++G__71599__i;}
  args = new cljs.core.IndexedSeq(G__71599__a,0);
} 
return G__71598__delegate.call(this,args);};
G__71598.cljs$lang$maxFixedArity = 0;
G__71598.cljs$lang$applyTo = (function (arglist__71600){
var args = cljs.core.seq(arglist__71600);
return G__71598__delegate(args);
});
G__71598.cljs$core$IFn$_invoke$arity$variadic = G__71598__delegate;
return G__71598;
})()
;

return null;
});
