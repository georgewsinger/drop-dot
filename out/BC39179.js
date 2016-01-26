goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__290297__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__290297 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__290298__i = 0, G__290298__a = new Array(arguments.length -  0);
while (G__290298__i < G__290298__a.length) {G__290298__a[G__290298__i] = arguments[G__290298__i + 0]; ++G__290298__i;}
  args = new cljs.core.IndexedSeq(G__290298__a,0);
} 
return G__290297__delegate.call(this,args);};
G__290297.cljs$lang$maxFixedArity = 0;
G__290297.cljs$lang$applyTo = (function (arglist__290299){
var args = cljs.core.seq(arglist__290299);
return G__290297__delegate(args);
});
G__290297.cljs$core$IFn$_invoke$arity$variadic = G__290297__delegate;
return G__290297;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__290300__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__290300 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__290301__i = 0, G__290301__a = new Array(arguments.length -  0);
while (G__290301__i < G__290301__a.length) {G__290301__a[G__290301__i] = arguments[G__290301__i + 0]; ++G__290301__i;}
  args = new cljs.core.IndexedSeq(G__290301__a,0);
} 
return G__290300__delegate.call(this,args);};
G__290300.cljs$lang$maxFixedArity = 0;
G__290300.cljs$lang$applyTo = (function (arglist__290302){
var args = cljs.core.seq(arglist__290302);
return G__290300__delegate(args);
});
G__290300.cljs$core$IFn$_invoke$arity$variadic = G__290300__delegate;
return G__290300;
})()
;

return null;
});
