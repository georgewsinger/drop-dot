goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14378__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14378 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14379__i = 0, G__14379__a = new Array(arguments.length -  0);
while (G__14379__i < G__14379__a.length) {G__14379__a[G__14379__i] = arguments[G__14379__i + 0]; ++G__14379__i;}
  args = new cljs.core.IndexedSeq(G__14379__a,0);
} 
return G__14378__delegate.call(this,args);};
G__14378.cljs$lang$maxFixedArity = 0;
G__14378.cljs$lang$applyTo = (function (arglist__14380){
var args = cljs.core.seq(arglist__14380);
return G__14378__delegate(args);
});
G__14378.cljs$core$IFn$_invoke$arity$variadic = G__14378__delegate;
return G__14378;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14381__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14381 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14382__i = 0, G__14382__a = new Array(arguments.length -  0);
while (G__14382__i < G__14382__a.length) {G__14382__a[G__14382__i] = arguments[G__14382__i + 0]; ++G__14382__i;}
  args = new cljs.core.IndexedSeq(G__14382__a,0);
} 
return G__14381__delegate.call(this,args);};
G__14381.cljs$lang$maxFixedArity = 0;
G__14381.cljs$lang$applyTo = (function (arglist__14383){
var args = cljs.core.seq(arglist__14383);
return G__14381__delegate(args);
});
G__14381.cljs$core$IFn$_invoke$arity$variadic = G__14381__delegate;
return G__14381;
})()
;

return null;
});
