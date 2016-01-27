goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__119638__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__119638 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__119639__i = 0, G__119639__a = new Array(arguments.length -  0);
while (G__119639__i < G__119639__a.length) {G__119639__a[G__119639__i] = arguments[G__119639__i + 0]; ++G__119639__i;}
  args = new cljs.core.IndexedSeq(G__119639__a,0);
} 
return G__119638__delegate.call(this,args);};
G__119638.cljs$lang$maxFixedArity = 0;
G__119638.cljs$lang$applyTo = (function (arglist__119640){
var args = cljs.core.seq(arglist__119640);
return G__119638__delegate(args);
});
G__119638.cljs$core$IFn$_invoke$arity$variadic = G__119638__delegate;
return G__119638;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__119641__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__119641 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__119642__i = 0, G__119642__a = new Array(arguments.length -  0);
while (G__119642__i < G__119642__a.length) {G__119642__a[G__119642__i] = arguments[G__119642__i + 0]; ++G__119642__i;}
  args = new cljs.core.IndexedSeq(G__119642__a,0);
} 
return G__119641__delegate.call(this,args);};
G__119641.cljs$lang$maxFixedArity = 0;
G__119641.cljs$lang$applyTo = (function (arglist__119643){
var args = cljs.core.seq(arglist__119643);
return G__119641__delegate(args);
});
G__119641.cljs$core$IFn$_invoke$arity$variadic = G__119641__delegate;
return G__119641;
})()
;

return null;
});
