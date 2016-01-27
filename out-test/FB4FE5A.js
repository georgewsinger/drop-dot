goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__46115__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__46115 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46116__i = 0, G__46116__a = new Array(arguments.length -  0);
while (G__46116__i < G__46116__a.length) {G__46116__a[G__46116__i] = arguments[G__46116__i + 0]; ++G__46116__i;}
  args = new cljs.core.IndexedSeq(G__46116__a,0);
} 
return G__46115__delegate.call(this,args);};
G__46115.cljs$lang$maxFixedArity = 0;
G__46115.cljs$lang$applyTo = (function (arglist__46117){
var args = cljs.core.seq(arglist__46117);
return G__46115__delegate(args);
});
G__46115.cljs$core$IFn$_invoke$arity$variadic = G__46115__delegate;
return G__46115;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__46118__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__46118 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46119__i = 0, G__46119__a = new Array(arguments.length -  0);
while (G__46119__i < G__46119__a.length) {G__46119__a[G__46119__i] = arguments[G__46119__i + 0]; ++G__46119__i;}
  args = new cljs.core.IndexedSeq(G__46119__a,0);
} 
return G__46118__delegate.call(this,args);};
G__46118.cljs$lang$maxFixedArity = 0;
G__46118.cljs$lang$applyTo = (function (arglist__46120){
var args = cljs.core.seq(arglist__46120);
return G__46118__delegate(args);
});
G__46118.cljs$core$IFn$_invoke$arity$variadic = G__46118__delegate;
return G__46118;
})()
;

return null;
});
