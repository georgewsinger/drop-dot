goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__92130__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__92130 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__92131__i = 0, G__92131__a = new Array(arguments.length -  0);
while (G__92131__i < G__92131__a.length) {G__92131__a[G__92131__i] = arguments[G__92131__i + 0]; ++G__92131__i;}
  args = new cljs.core.IndexedSeq(G__92131__a,0);
} 
return G__92130__delegate.call(this,args);};
G__92130.cljs$lang$maxFixedArity = 0;
G__92130.cljs$lang$applyTo = (function (arglist__92132){
var args = cljs.core.seq(arglist__92132);
return G__92130__delegate(args);
});
G__92130.cljs$core$IFn$_invoke$arity$variadic = G__92130__delegate;
return G__92130;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__92133__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__92133 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__92134__i = 0, G__92134__a = new Array(arguments.length -  0);
while (G__92134__i < G__92134__a.length) {G__92134__a[G__92134__i] = arguments[G__92134__i + 0]; ++G__92134__i;}
  args = new cljs.core.IndexedSeq(G__92134__a,0);
} 
return G__92133__delegate.call(this,args);};
G__92133.cljs$lang$maxFixedArity = 0;
G__92133.cljs$lang$applyTo = (function (arglist__92135){
var args = cljs.core.seq(arglist__92135);
return G__92133__delegate(args);
});
G__92133.cljs$core$IFn$_invoke$arity$variadic = G__92133__delegate;
return G__92133;
})()
;

return null;
});
