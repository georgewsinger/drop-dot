goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__70092__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__70092 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__70093__i = 0, G__70093__a = new Array(arguments.length -  0);
while (G__70093__i < G__70093__a.length) {G__70093__a[G__70093__i] = arguments[G__70093__i + 0]; ++G__70093__i;}
  args = new cljs.core.IndexedSeq(G__70093__a,0);
} 
return G__70092__delegate.call(this,args);};
G__70092.cljs$lang$maxFixedArity = 0;
G__70092.cljs$lang$applyTo = (function (arglist__70094){
var args = cljs.core.seq(arglist__70094);
return G__70092__delegate(args);
});
G__70092.cljs$core$IFn$_invoke$arity$variadic = G__70092__delegate;
return G__70092;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__70095__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__70095 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__70096__i = 0, G__70096__a = new Array(arguments.length -  0);
while (G__70096__i < G__70096__a.length) {G__70096__a[G__70096__i] = arguments[G__70096__i + 0]; ++G__70096__i;}
  args = new cljs.core.IndexedSeq(G__70096__a,0);
} 
return G__70095__delegate.call(this,args);};
G__70095.cljs$lang$maxFixedArity = 0;
G__70095.cljs$lang$applyTo = (function (arglist__70097){
var args = cljs.core.seq(arglist__70097);
return G__70095__delegate(args);
});
G__70095.cljs$core$IFn$_invoke$arity$variadic = G__70095__delegate;
return G__70095;
})()
;

return null;
});
