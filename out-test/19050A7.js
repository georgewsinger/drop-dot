goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__184549__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__184549 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__184550__i = 0, G__184550__a = new Array(arguments.length -  0);
while (G__184550__i < G__184550__a.length) {G__184550__a[G__184550__i] = arguments[G__184550__i + 0]; ++G__184550__i;}
  args = new cljs.core.IndexedSeq(G__184550__a,0);
} 
return G__184549__delegate.call(this,args);};
G__184549.cljs$lang$maxFixedArity = 0;
G__184549.cljs$lang$applyTo = (function (arglist__184551){
var args = cljs.core.seq(arglist__184551);
return G__184549__delegate(args);
});
G__184549.cljs$core$IFn$_invoke$arity$variadic = G__184549__delegate;
return G__184549;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__184552__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__184552 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__184553__i = 0, G__184553__a = new Array(arguments.length -  0);
while (G__184553__i < G__184553__a.length) {G__184553__a[G__184553__i] = arguments[G__184553__i + 0]; ++G__184553__i;}
  args = new cljs.core.IndexedSeq(G__184553__a,0);
} 
return G__184552__delegate.call(this,args);};
G__184552.cljs$lang$maxFixedArity = 0;
G__184552.cljs$lang$applyTo = (function (arglist__184554){
var args = cljs.core.seq(arglist__184554);
return G__184552__delegate(args);
});
G__184552.cljs$core$IFn$_invoke$arity$variadic = G__184552__delegate;
return G__184552;
})()
;

return null;
});
