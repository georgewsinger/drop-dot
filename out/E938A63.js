goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30666__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__30666 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30667__i = 0, G__30667__a = new Array(arguments.length -  0);
while (G__30667__i < G__30667__a.length) {G__30667__a[G__30667__i] = arguments[G__30667__i + 0]; ++G__30667__i;}
  args = new cljs.core.IndexedSeq(G__30667__a,0);
} 
return G__30666__delegate.call(this,args);};
G__30666.cljs$lang$maxFixedArity = 0;
G__30666.cljs$lang$applyTo = (function (arglist__30668){
var args = cljs.core.seq(arglist__30668);
return G__30666__delegate(args);
});
G__30666.cljs$core$IFn$_invoke$arity$variadic = G__30666__delegate;
return G__30666;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__30669__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__30669 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30670__i = 0, G__30670__a = new Array(arguments.length -  0);
while (G__30670__i < G__30670__a.length) {G__30670__a[G__30670__i] = arguments[G__30670__i + 0]; ++G__30670__i;}
  args = new cljs.core.IndexedSeq(G__30670__a,0);
} 
return G__30669__delegate.call(this,args);};
G__30669.cljs$lang$maxFixedArity = 0;
G__30669.cljs$lang$applyTo = (function (arglist__30671){
var args = cljs.core.seq(arglist__30671);
return G__30669__delegate(args);
});
G__30669.cljs$core$IFn$_invoke$arity$variadic = G__30669__delegate;
return G__30669;
})()
;

return null;
});
