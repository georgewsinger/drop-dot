goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__138453__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__138453 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__138454__i = 0, G__138454__a = new Array(arguments.length -  0);
while (G__138454__i < G__138454__a.length) {G__138454__a[G__138454__i] = arguments[G__138454__i + 0]; ++G__138454__i;}
  args = new cljs.core.IndexedSeq(G__138454__a,0);
} 
return G__138453__delegate.call(this,args);};
G__138453.cljs$lang$maxFixedArity = 0;
G__138453.cljs$lang$applyTo = (function (arglist__138455){
var args = cljs.core.seq(arglist__138455);
return G__138453__delegate(args);
});
G__138453.cljs$core$IFn$_invoke$arity$variadic = G__138453__delegate;
return G__138453;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__138456__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__138456 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__138457__i = 0, G__138457__a = new Array(arguments.length -  0);
while (G__138457__i < G__138457__a.length) {G__138457__a[G__138457__i] = arguments[G__138457__i + 0]; ++G__138457__i;}
  args = new cljs.core.IndexedSeq(G__138457__a,0);
} 
return G__138456__delegate.call(this,args);};
G__138456.cljs$lang$maxFixedArity = 0;
G__138456.cljs$lang$applyTo = (function (arglist__138458){
var args = cljs.core.seq(arglist__138458);
return G__138456__delegate(args);
});
G__138456.cljs$core$IFn$_invoke$arity$variadic = G__138456__delegate;
return G__138456;
})()
;

return null;
});
