goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__228976__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__228976 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__228977__i = 0, G__228977__a = new Array(arguments.length -  0);
while (G__228977__i < G__228977__a.length) {G__228977__a[G__228977__i] = arguments[G__228977__i + 0]; ++G__228977__i;}
  args = new cljs.core.IndexedSeq(G__228977__a,0);
} 
return G__228976__delegate.call(this,args);};
G__228976.cljs$lang$maxFixedArity = 0;
G__228976.cljs$lang$applyTo = (function (arglist__228978){
var args = cljs.core.seq(arglist__228978);
return G__228976__delegate(args);
});
G__228976.cljs$core$IFn$_invoke$arity$variadic = G__228976__delegate;
return G__228976;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__228979__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__228979 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__228980__i = 0, G__228980__a = new Array(arguments.length -  0);
while (G__228980__i < G__228980__a.length) {G__228980__a[G__228980__i] = arguments[G__228980__i + 0]; ++G__228980__i;}
  args = new cljs.core.IndexedSeq(G__228980__a,0);
} 
return G__228979__delegate.call(this,args);};
G__228979.cljs$lang$maxFixedArity = 0;
G__228979.cljs$lang$applyTo = (function (arglist__228981){
var args = cljs.core.seq(arglist__228981);
return G__228979__delegate(args);
});
G__228979.cljs$core$IFn$_invoke$arity$variadic = G__228979__delegate;
return G__228979;
})()
;

return null;
});
