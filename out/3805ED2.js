goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__261721__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__261721 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__261722__i = 0, G__261722__a = new Array(arguments.length -  0);
while (G__261722__i < G__261722__a.length) {G__261722__a[G__261722__i] = arguments[G__261722__i + 0]; ++G__261722__i;}
  args = new cljs.core.IndexedSeq(G__261722__a,0);
} 
return G__261721__delegate.call(this,args);};
G__261721.cljs$lang$maxFixedArity = 0;
G__261721.cljs$lang$applyTo = (function (arglist__261723){
var args = cljs.core.seq(arglist__261723);
return G__261721__delegate(args);
});
G__261721.cljs$core$IFn$_invoke$arity$variadic = G__261721__delegate;
return G__261721;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__261724__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__261724 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__261725__i = 0, G__261725__a = new Array(arguments.length -  0);
while (G__261725__i < G__261725__a.length) {G__261725__a[G__261725__i] = arguments[G__261725__i + 0]; ++G__261725__i;}
  args = new cljs.core.IndexedSeq(G__261725__a,0);
} 
return G__261724__delegate.call(this,args);};
G__261724.cljs$lang$maxFixedArity = 0;
G__261724.cljs$lang$applyTo = (function (arglist__261726){
var args = cljs.core.seq(arglist__261726);
return G__261724__delegate(args);
});
G__261724.cljs$core$IFn$_invoke$arity$variadic = G__261724__delegate;
return G__261724;
})()
;

return null;
});
