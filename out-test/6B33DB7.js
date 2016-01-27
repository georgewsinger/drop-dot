goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19029__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19029 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19030__i = 0, G__19030__a = new Array(arguments.length -  0);
while (G__19030__i < G__19030__a.length) {G__19030__a[G__19030__i] = arguments[G__19030__i + 0]; ++G__19030__i;}
  args = new cljs.core.IndexedSeq(G__19030__a,0);
} 
return G__19029__delegate.call(this,args);};
G__19029.cljs$lang$maxFixedArity = 0;
G__19029.cljs$lang$applyTo = (function (arglist__19031){
var args = cljs.core.seq(arglist__19031);
return G__19029__delegate(args);
});
G__19029.cljs$core$IFn$_invoke$arity$variadic = G__19029__delegate;
return G__19029;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19032__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19032 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19033__i = 0, G__19033__a = new Array(arguments.length -  0);
while (G__19033__i < G__19033__a.length) {G__19033__a[G__19033__i] = arguments[G__19033__i + 0]; ++G__19033__i;}
  args = new cljs.core.IndexedSeq(G__19033__a,0);
} 
return G__19032__delegate.call(this,args);};
G__19032.cljs$lang$maxFixedArity = 0;
G__19032.cljs$lang$applyTo = (function (arglist__19034){
var args = cljs.core.seq(arglist__19034);
return G__19032__delegate(args);
});
G__19032.cljs$core$IFn$_invoke$arity$variadic = G__19032__delegate;
return G__19032;
})()
;

return null;
});
