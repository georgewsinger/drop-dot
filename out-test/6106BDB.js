goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__75601__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__75601 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__75602__i = 0, G__75602__a = new Array(arguments.length -  0);
while (G__75602__i < G__75602__a.length) {G__75602__a[G__75602__i] = arguments[G__75602__i + 0]; ++G__75602__i;}
  args = new cljs.core.IndexedSeq(G__75602__a,0);
} 
return G__75601__delegate.call(this,args);};
G__75601.cljs$lang$maxFixedArity = 0;
G__75601.cljs$lang$applyTo = (function (arglist__75603){
var args = cljs.core.seq(arglist__75603);
return G__75601__delegate(args);
});
G__75601.cljs$core$IFn$_invoke$arity$variadic = G__75601__delegate;
return G__75601;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__75604__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__75604 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__75605__i = 0, G__75605__a = new Array(arguments.length -  0);
while (G__75605__i < G__75605__a.length) {G__75605__a[G__75605__i] = arguments[G__75605__i + 0]; ++G__75605__i;}
  args = new cljs.core.IndexedSeq(G__75605__a,0);
} 
return G__75604__delegate.call(this,args);};
G__75604.cljs$lang$maxFixedArity = 0;
G__75604.cljs$lang$applyTo = (function (arglist__75606){
var args = cljs.core.seq(arglist__75606);
return G__75604__delegate(args);
});
G__75604.cljs$core$IFn$_invoke$arity$variadic = G__75604__delegate;
return G__75604;
})()
;

return null;
});
