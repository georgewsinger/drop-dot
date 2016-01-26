goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22799__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22799 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22800__i = 0, G__22800__a = new Array(arguments.length -  0);
while (G__22800__i < G__22800__a.length) {G__22800__a[G__22800__i] = arguments[G__22800__i + 0]; ++G__22800__i;}
  args = new cljs.core.IndexedSeq(G__22800__a,0);
} 
return G__22799__delegate.call(this,args);};
G__22799.cljs$lang$maxFixedArity = 0;
G__22799.cljs$lang$applyTo = (function (arglist__22801){
var args = cljs.core.seq(arglist__22801);
return G__22799__delegate(args);
});
G__22799.cljs$core$IFn$_invoke$arity$variadic = G__22799__delegate;
return G__22799;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22802__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22802 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22803__i = 0, G__22803__a = new Array(arguments.length -  0);
while (G__22803__i < G__22803__a.length) {G__22803__a[G__22803__i] = arguments[G__22803__i + 0]; ++G__22803__i;}
  args = new cljs.core.IndexedSeq(G__22803__a,0);
} 
return G__22802__delegate.call(this,args);};
G__22802.cljs$lang$maxFixedArity = 0;
G__22802.cljs$lang$applyTo = (function (arglist__22804){
var args = cljs.core.seq(arglist__22804);
return G__22802__delegate(args);
});
G__22802.cljs$core$IFn$_invoke$arity$variadic = G__22802__delegate;
return G__22802;
})()
;

return null;
});
