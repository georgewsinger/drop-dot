goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__133080__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__133080 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__133081__i = 0, G__133081__a = new Array(arguments.length -  0);
while (G__133081__i < G__133081__a.length) {G__133081__a[G__133081__i] = arguments[G__133081__i + 0]; ++G__133081__i;}
  args = new cljs.core.IndexedSeq(G__133081__a,0);
} 
return G__133080__delegate.call(this,args);};
G__133080.cljs$lang$maxFixedArity = 0;
G__133080.cljs$lang$applyTo = (function (arglist__133082){
var args = cljs.core.seq(arglist__133082);
return G__133080__delegate(args);
});
G__133080.cljs$core$IFn$_invoke$arity$variadic = G__133080__delegate;
return G__133080;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__133083__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__133083 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__133084__i = 0, G__133084__a = new Array(arguments.length -  0);
while (G__133084__i < G__133084__a.length) {G__133084__a[G__133084__i] = arguments[G__133084__i + 0]; ++G__133084__i;}
  args = new cljs.core.IndexedSeq(G__133084__a,0);
} 
return G__133083__delegate.call(this,args);};
G__133083.cljs$lang$maxFixedArity = 0;
G__133083.cljs$lang$applyTo = (function (arglist__133085){
var args = cljs.core.seq(arglist__133085);
return G__133083__delegate(args);
});
G__133083.cljs$core$IFn$_invoke$arity$variadic = G__133083__delegate;
return G__133083;
})()
;

return null;
});
