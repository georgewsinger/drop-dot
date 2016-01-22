goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27497__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__27497 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27498__i = 0, G__27498__a = new Array(arguments.length -  0);
while (G__27498__i < G__27498__a.length) {G__27498__a[G__27498__i] = arguments[G__27498__i + 0]; ++G__27498__i;}
  args = new cljs.core.IndexedSeq(G__27498__a,0);
} 
return G__27497__delegate.call(this,args);};
G__27497.cljs$lang$maxFixedArity = 0;
G__27497.cljs$lang$applyTo = (function (arglist__27499){
var args = cljs.core.seq(arglist__27499);
return G__27497__delegate(args);
});
G__27497.cljs$core$IFn$_invoke$arity$variadic = G__27497__delegate;
return G__27497;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__27500__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__27500 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27501__i = 0, G__27501__a = new Array(arguments.length -  0);
while (G__27501__i < G__27501__a.length) {G__27501__a[G__27501__i] = arguments[G__27501__i + 0]; ++G__27501__i;}
  args = new cljs.core.IndexedSeq(G__27501__a,0);
} 
return G__27500__delegate.call(this,args);};
G__27500.cljs$lang$maxFixedArity = 0;
G__27500.cljs$lang$applyTo = (function (arglist__27502){
var args = cljs.core.seq(arglist__27502);
return G__27500__delegate(args);
});
G__27500.cljs$core$IFn$_invoke$arity$variadic = G__27500__delegate;
return G__27500;
})()
;

return null;
});
