goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17638__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17638 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17639__i = 0, G__17639__a = new Array(arguments.length -  0);
while (G__17639__i < G__17639__a.length) {G__17639__a[G__17639__i] = arguments[G__17639__i + 0]; ++G__17639__i;}
  args = new cljs.core.IndexedSeq(G__17639__a,0);
} 
return G__17638__delegate.call(this,args);};
G__17638.cljs$lang$maxFixedArity = 0;
G__17638.cljs$lang$applyTo = (function (arglist__17640){
var args = cljs.core.seq(arglist__17640);
return G__17638__delegate(args);
});
G__17638.cljs$core$IFn$_invoke$arity$variadic = G__17638__delegate;
return G__17638;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17641__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17641 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17642__i = 0, G__17642__a = new Array(arguments.length -  0);
while (G__17642__i < G__17642__a.length) {G__17642__a[G__17642__i] = arguments[G__17642__i + 0]; ++G__17642__i;}
  args = new cljs.core.IndexedSeq(G__17642__a,0);
} 
return G__17641__delegate.call(this,args);};
G__17641.cljs$lang$maxFixedArity = 0;
G__17641.cljs$lang$applyTo = (function (arglist__17643){
var args = cljs.core.seq(arglist__17643);
return G__17641__delegate(args);
});
G__17641.cljs$core$IFn$_invoke$arity$variadic = G__17641__delegate;
return G__17641;
})()
;

return null;
});
