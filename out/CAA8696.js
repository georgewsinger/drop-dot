goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__382677__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__382677 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__382678__i = 0, G__382678__a = new Array(arguments.length -  0);
while (G__382678__i < G__382678__a.length) {G__382678__a[G__382678__i] = arguments[G__382678__i + 0]; ++G__382678__i;}
  args = new cljs.core.IndexedSeq(G__382678__a,0);
} 
return G__382677__delegate.call(this,args);};
G__382677.cljs$lang$maxFixedArity = 0;
G__382677.cljs$lang$applyTo = (function (arglist__382679){
var args = cljs.core.seq(arglist__382679);
return G__382677__delegate(args);
});
G__382677.cljs$core$IFn$_invoke$arity$variadic = G__382677__delegate;
return G__382677;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__382680__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__382680 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__382681__i = 0, G__382681__a = new Array(arguments.length -  0);
while (G__382681__i < G__382681__a.length) {G__382681__a[G__382681__i] = arguments[G__382681__i + 0]; ++G__382681__i;}
  args = new cljs.core.IndexedSeq(G__382681__a,0);
} 
return G__382680__delegate.call(this,args);};
G__382680.cljs$lang$maxFixedArity = 0;
G__382680.cljs$lang$applyTo = (function (arglist__382682){
var args = cljs.core.seq(arglist__382682);
return G__382680__delegate(args);
});
G__382680.cljs$core$IFn$_invoke$arity$variadic = G__382680__delegate;
return G__382680;
})()
;

return null;
});
