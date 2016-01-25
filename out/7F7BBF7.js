goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__278658__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__278658 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__278659__i = 0, G__278659__a = new Array(arguments.length -  0);
while (G__278659__i < G__278659__a.length) {G__278659__a[G__278659__i] = arguments[G__278659__i + 0]; ++G__278659__i;}
  args = new cljs.core.IndexedSeq(G__278659__a,0);
} 
return G__278658__delegate.call(this,args);};
G__278658.cljs$lang$maxFixedArity = 0;
G__278658.cljs$lang$applyTo = (function (arglist__278660){
var args = cljs.core.seq(arglist__278660);
return G__278658__delegate(args);
});
G__278658.cljs$core$IFn$_invoke$arity$variadic = G__278658__delegate;
return G__278658;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__278661__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__278661 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__278662__i = 0, G__278662__a = new Array(arguments.length -  0);
while (G__278662__i < G__278662__a.length) {G__278662__a[G__278662__i] = arguments[G__278662__i + 0]; ++G__278662__i;}
  args = new cljs.core.IndexedSeq(G__278662__a,0);
} 
return G__278661__delegate.call(this,args);};
G__278661.cljs$lang$maxFixedArity = 0;
G__278661.cljs$lang$applyTo = (function (arglist__278663){
var args = cljs.core.seq(arglist__278663);
return G__278661__delegate(args);
});
G__278661.cljs$core$IFn$_invoke$arity$variadic = G__278661__delegate;
return G__278661;
})()
;

return null;
});
