goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__293796__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__293796 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__293797__i = 0, G__293797__a = new Array(arguments.length -  0);
while (G__293797__i < G__293797__a.length) {G__293797__a[G__293797__i] = arguments[G__293797__i + 0]; ++G__293797__i;}
  args = new cljs.core.IndexedSeq(G__293797__a,0);
} 
return G__293796__delegate.call(this,args);};
G__293796.cljs$lang$maxFixedArity = 0;
G__293796.cljs$lang$applyTo = (function (arglist__293798){
var args = cljs.core.seq(arglist__293798);
return G__293796__delegate(args);
});
G__293796.cljs$core$IFn$_invoke$arity$variadic = G__293796__delegate;
return G__293796;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__293799__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__293799 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__293800__i = 0, G__293800__a = new Array(arguments.length -  0);
while (G__293800__i < G__293800__a.length) {G__293800__a[G__293800__i] = arguments[G__293800__i + 0]; ++G__293800__i;}
  args = new cljs.core.IndexedSeq(G__293800__a,0);
} 
return G__293799__delegate.call(this,args);};
G__293799.cljs$lang$maxFixedArity = 0;
G__293799.cljs$lang$applyTo = (function (arglist__293801){
var args = cljs.core.seq(arglist__293801);
return G__293799__delegate(args);
});
G__293799.cljs$core$IFn$_invoke$arity$variadic = G__293799__delegate;
return G__293799;
})()
;

return null;
});
