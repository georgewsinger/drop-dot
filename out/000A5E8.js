goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__63640__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__63640 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63641__i = 0, G__63641__a = new Array(arguments.length -  0);
while (G__63641__i < G__63641__a.length) {G__63641__a[G__63641__i] = arguments[G__63641__i + 0]; ++G__63641__i;}
  args = new cljs.core.IndexedSeq(G__63641__a,0);
} 
return G__63640__delegate.call(this,args);};
G__63640.cljs$lang$maxFixedArity = 0;
G__63640.cljs$lang$applyTo = (function (arglist__63642){
var args = cljs.core.seq(arglist__63642);
return G__63640__delegate(args);
});
G__63640.cljs$core$IFn$_invoke$arity$variadic = G__63640__delegate;
return G__63640;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__63643__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__63643 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63644__i = 0, G__63644__a = new Array(arguments.length -  0);
while (G__63644__i < G__63644__a.length) {G__63644__a[G__63644__i] = arguments[G__63644__i + 0]; ++G__63644__i;}
  args = new cljs.core.IndexedSeq(G__63644__a,0);
} 
return G__63643__delegate.call(this,args);};
G__63643.cljs$lang$maxFixedArity = 0;
G__63643.cljs$lang$applyTo = (function (arglist__63645){
var args = cljs.core.seq(arglist__63645);
return G__63643__delegate(args);
});
G__63643.cljs$core$IFn$_invoke$arity$variadic = G__63643__delegate;
return G__63643;
})()
;

return null;
});
