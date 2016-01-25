goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__266811__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__266811 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__266812__i = 0, G__266812__a = new Array(arguments.length -  0);
while (G__266812__i < G__266812__a.length) {G__266812__a[G__266812__i] = arguments[G__266812__i + 0]; ++G__266812__i;}
  args = new cljs.core.IndexedSeq(G__266812__a,0);
} 
return G__266811__delegate.call(this,args);};
G__266811.cljs$lang$maxFixedArity = 0;
G__266811.cljs$lang$applyTo = (function (arglist__266813){
var args = cljs.core.seq(arglist__266813);
return G__266811__delegate(args);
});
G__266811.cljs$core$IFn$_invoke$arity$variadic = G__266811__delegate;
return G__266811;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__266814__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__266814 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__266815__i = 0, G__266815__a = new Array(arguments.length -  0);
while (G__266815__i < G__266815__a.length) {G__266815__a[G__266815__i] = arguments[G__266815__i + 0]; ++G__266815__i;}
  args = new cljs.core.IndexedSeq(G__266815__a,0);
} 
return G__266814__delegate.call(this,args);};
G__266814.cljs$lang$maxFixedArity = 0;
G__266814.cljs$lang$applyTo = (function (arglist__266816){
var args = cljs.core.seq(arglist__266816);
return G__266814__delegate(args);
});
G__266814.cljs$core$IFn$_invoke$arity$variadic = G__266814__delegate;
return G__266814;
})()
;

return null;
});
