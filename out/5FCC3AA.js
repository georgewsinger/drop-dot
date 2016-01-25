goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__66839__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__66839 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66840__i = 0, G__66840__a = new Array(arguments.length -  0);
while (G__66840__i < G__66840__a.length) {G__66840__a[G__66840__i] = arguments[G__66840__i + 0]; ++G__66840__i;}
  args = new cljs.core.IndexedSeq(G__66840__a,0);
} 
return G__66839__delegate.call(this,args);};
G__66839.cljs$lang$maxFixedArity = 0;
G__66839.cljs$lang$applyTo = (function (arglist__66841){
var args = cljs.core.seq(arglist__66841);
return G__66839__delegate(args);
});
G__66839.cljs$core$IFn$_invoke$arity$variadic = G__66839__delegate;
return G__66839;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__66842__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__66842 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66843__i = 0, G__66843__a = new Array(arguments.length -  0);
while (G__66843__i < G__66843__a.length) {G__66843__a[G__66843__i] = arguments[G__66843__i + 0]; ++G__66843__i;}
  args = new cljs.core.IndexedSeq(G__66843__a,0);
} 
return G__66842__delegate.call(this,args);};
G__66842.cljs$lang$maxFixedArity = 0;
G__66842.cljs$lang$applyTo = (function (arglist__66844){
var args = cljs.core.seq(arglist__66844);
return G__66842__delegate(args);
});
G__66842.cljs$core$IFn$_invoke$arity$variadic = G__66842__delegate;
return G__66842;
})()
;

return null;
});
