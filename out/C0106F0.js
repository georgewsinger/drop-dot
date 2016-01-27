goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__331931__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__331931 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__331932__i = 0, G__331932__a = new Array(arguments.length -  0);
while (G__331932__i < G__331932__a.length) {G__331932__a[G__331932__i] = arguments[G__331932__i + 0]; ++G__331932__i;}
  args = new cljs.core.IndexedSeq(G__331932__a,0);
} 
return G__331931__delegate.call(this,args);};
G__331931.cljs$lang$maxFixedArity = 0;
G__331931.cljs$lang$applyTo = (function (arglist__331933){
var args = cljs.core.seq(arglist__331933);
return G__331931__delegate(args);
});
G__331931.cljs$core$IFn$_invoke$arity$variadic = G__331931__delegate;
return G__331931;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__331934__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__331934 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__331935__i = 0, G__331935__a = new Array(arguments.length -  0);
while (G__331935__i < G__331935__a.length) {G__331935__a[G__331935__i] = arguments[G__331935__i + 0]; ++G__331935__i;}
  args = new cljs.core.IndexedSeq(G__331935__a,0);
} 
return G__331934__delegate.call(this,args);};
G__331934.cljs$lang$maxFixedArity = 0;
G__331934.cljs$lang$applyTo = (function (arglist__331936){
var args = cljs.core.seq(arglist__331936);
return G__331934__delegate(args);
});
G__331934.cljs$core$IFn$_invoke$arity$variadic = G__331934__delegate;
return G__331934;
})()
;

return null;
});
