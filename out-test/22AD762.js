goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__29168__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29168 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29169__i = 0, G__29169__a = new Array(arguments.length -  0);
while (G__29169__i < G__29169__a.length) {G__29169__a[G__29169__i] = arguments[G__29169__i + 0]; ++G__29169__i;}
  args = new cljs.core.IndexedSeq(G__29169__a,0);
} 
return G__29168__delegate.call(this,args);};
G__29168.cljs$lang$maxFixedArity = 0;
G__29168.cljs$lang$applyTo = (function (arglist__29170){
var args = cljs.core.seq(arglist__29170);
return G__29168__delegate(args);
});
G__29168.cljs$core$IFn$_invoke$arity$variadic = G__29168__delegate;
return G__29168;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__29171__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29171 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29172__i = 0, G__29172__a = new Array(arguments.length -  0);
while (G__29172__i < G__29172__a.length) {G__29172__a[G__29172__i] = arguments[G__29172__i + 0]; ++G__29172__i;}
  args = new cljs.core.IndexedSeq(G__29172__a,0);
} 
return G__29171__delegate.call(this,args);};
G__29171.cljs$lang$maxFixedArity = 0;
G__29171.cljs$lang$applyTo = (function (arglist__29173){
var args = cljs.core.seq(arglist__29173);
return G__29171__delegate(args);
});
G__29171.cljs$core$IFn$_invoke$arity$variadic = G__29171__delegate;
return G__29171;
})()
;

return null;
});
