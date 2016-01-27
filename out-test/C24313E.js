goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__79708__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__79708 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__79709__i = 0, G__79709__a = new Array(arguments.length -  0);
while (G__79709__i < G__79709__a.length) {G__79709__a[G__79709__i] = arguments[G__79709__i + 0]; ++G__79709__i;}
  args = new cljs.core.IndexedSeq(G__79709__a,0);
} 
return G__79708__delegate.call(this,args);};
G__79708.cljs$lang$maxFixedArity = 0;
G__79708.cljs$lang$applyTo = (function (arglist__79710){
var args = cljs.core.seq(arglist__79710);
return G__79708__delegate(args);
});
G__79708.cljs$core$IFn$_invoke$arity$variadic = G__79708__delegate;
return G__79708;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__79711__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__79711 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__79712__i = 0, G__79712__a = new Array(arguments.length -  0);
while (G__79712__i < G__79712__a.length) {G__79712__a[G__79712__i] = arguments[G__79712__i + 0]; ++G__79712__i;}
  args = new cljs.core.IndexedSeq(G__79712__a,0);
} 
return G__79711__delegate.call(this,args);};
G__79711.cljs$lang$maxFixedArity = 0;
G__79711.cljs$lang$applyTo = (function (arglist__79713){
var args = cljs.core.seq(arglist__79713);
return G__79711__delegate(args);
});
G__79711.cljs$core$IFn$_invoke$arity$variadic = G__79711__delegate;
return G__79711;
})()
;

return null;
});
