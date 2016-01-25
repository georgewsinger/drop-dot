goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18750__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18750 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18751__i = 0, G__18751__a = new Array(arguments.length -  0);
while (G__18751__i < G__18751__a.length) {G__18751__a[G__18751__i] = arguments[G__18751__i + 0]; ++G__18751__i;}
  args = new cljs.core.IndexedSeq(G__18751__a,0);
} 
return G__18750__delegate.call(this,args);};
G__18750.cljs$lang$maxFixedArity = 0;
G__18750.cljs$lang$applyTo = (function (arglist__18752){
var args = cljs.core.seq(arglist__18752);
return G__18750__delegate(args);
});
G__18750.cljs$core$IFn$_invoke$arity$variadic = G__18750__delegate;
return G__18750;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18753__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18753 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18754__i = 0, G__18754__a = new Array(arguments.length -  0);
while (G__18754__i < G__18754__a.length) {G__18754__a[G__18754__i] = arguments[G__18754__i + 0]; ++G__18754__i;}
  args = new cljs.core.IndexedSeq(G__18754__a,0);
} 
return G__18753__delegate.call(this,args);};
G__18753.cljs$lang$maxFixedArity = 0;
G__18753.cljs$lang$applyTo = (function (arglist__18755){
var args = cljs.core.seq(arglist__18755);
return G__18753__delegate(args);
});
G__18753.cljs$core$IFn$_invoke$arity$variadic = G__18753__delegate;
return G__18753;
})()
;

return null;
});
