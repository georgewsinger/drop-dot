goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27462__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__27462 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27463__i = 0, G__27463__a = new Array(arguments.length -  0);
while (G__27463__i < G__27463__a.length) {G__27463__a[G__27463__i] = arguments[G__27463__i + 0]; ++G__27463__i;}
  args = new cljs.core.IndexedSeq(G__27463__a,0);
} 
return G__27462__delegate.call(this,args);};
G__27462.cljs$lang$maxFixedArity = 0;
G__27462.cljs$lang$applyTo = (function (arglist__27464){
var args = cljs.core.seq(arglist__27464);
return G__27462__delegate(args);
});
G__27462.cljs$core$IFn$_invoke$arity$variadic = G__27462__delegate;
return G__27462;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__27465__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__27465 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27466__i = 0, G__27466__a = new Array(arguments.length -  0);
while (G__27466__i < G__27466__a.length) {G__27466__a[G__27466__i] = arguments[G__27466__i + 0]; ++G__27466__i;}
  args = new cljs.core.IndexedSeq(G__27466__a,0);
} 
return G__27465__delegate.call(this,args);};
G__27465.cljs$lang$maxFixedArity = 0;
G__27465.cljs$lang$applyTo = (function (arglist__27467){
var args = cljs.core.seq(arglist__27467);
return G__27465__delegate(args);
});
G__27465.cljs$core$IFn$_invoke$arity$variadic = G__27465__delegate;
return G__27465;
})()
;

return null;
});
