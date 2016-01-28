goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__367338__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__367338 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__367339__i = 0, G__367339__a = new Array(arguments.length -  0);
while (G__367339__i < G__367339__a.length) {G__367339__a[G__367339__i] = arguments[G__367339__i + 0]; ++G__367339__i;}
  args = new cljs.core.IndexedSeq(G__367339__a,0);
} 
return G__367338__delegate.call(this,args);};
G__367338.cljs$lang$maxFixedArity = 0;
G__367338.cljs$lang$applyTo = (function (arglist__367340){
var args = cljs.core.seq(arglist__367340);
return G__367338__delegate(args);
});
G__367338.cljs$core$IFn$_invoke$arity$variadic = G__367338__delegate;
return G__367338;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__367341__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__367341 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__367342__i = 0, G__367342__a = new Array(arguments.length -  0);
while (G__367342__i < G__367342__a.length) {G__367342__a[G__367342__i] = arguments[G__367342__i + 0]; ++G__367342__i;}
  args = new cljs.core.IndexedSeq(G__367342__a,0);
} 
return G__367341__delegate.call(this,args);};
G__367341.cljs$lang$maxFixedArity = 0;
G__367341.cljs$lang$applyTo = (function (arglist__367343){
var args = cljs.core.seq(arglist__367343);
return G__367341__delegate(args);
});
G__367341.cljs$core$IFn$_invoke$arity$variadic = G__367341__delegate;
return G__367341;
})()
;

return null;
});
