// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true, :target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13013__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
};
var G__13013 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13014__i = 0, G__13014__a = new Array(arguments.length -  0);
while (G__13014__i < G__13014__a.length) {G__13014__a[G__13014__i] = arguments[G__13014__i + 0]; ++G__13014__i;}
  args = new cljs.core.IndexedSeq(G__13014__a,0);
} 
return G__13013__delegate.call(this,args);};
G__13013.cljs$lang$maxFixedArity = 0;
G__13013.cljs$lang$applyTo = (function (arglist__13015){
var args = cljs.core.seq(arglist__13015);
return G__13013__delegate(args);
});
G__13013.cljs$core$IFn$_invoke$arity$variadic = G__13013__delegate;
return G__13013;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13016__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
};
var G__13016 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13017__i = 0, G__13017__a = new Array(arguments.length -  0);
while (G__13017__i < G__13017__a.length) {G__13017__a[G__13017__i] = arguments[G__13017__i + 0]; ++G__13017__i;}
  args = new cljs.core.IndexedSeq(G__13017__a,0);
} 
return G__13016__delegate.call(this,args);};
G__13016.cljs$lang$maxFixedArity = 0;
G__13016.cljs$lang$applyTo = (function (arglist__13018){
var args = cljs.core.seq(arglist__13018);
return G__13016__delegate(args);
});
G__13016.cljs$core$IFn$_invoke$arity$variadic = G__13016__delegate;
return G__13016;
})()
;

return null;
});
