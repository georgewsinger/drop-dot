goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__279359__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__279359 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__279360__i = 0, G__279360__a = new Array(arguments.length -  0);
while (G__279360__i < G__279360__a.length) {G__279360__a[G__279360__i] = arguments[G__279360__i + 0]; ++G__279360__i;}
  args = new cljs.core.IndexedSeq(G__279360__a,0);
} 
return G__279359__delegate.call(this,args);};
G__279359.cljs$lang$maxFixedArity = 0;
G__279359.cljs$lang$applyTo = (function (arglist__279361){
var args = cljs.core.seq(arglist__279361);
return G__279359__delegate(args);
});
G__279359.cljs$core$IFn$_invoke$arity$variadic = G__279359__delegate;
return G__279359;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__279362__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__279362 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__279363__i = 0, G__279363__a = new Array(arguments.length -  0);
while (G__279363__i < G__279363__a.length) {G__279363__a[G__279363__i] = arguments[G__279363__i + 0]; ++G__279363__i;}
  args = new cljs.core.IndexedSeq(G__279363__a,0);
} 
return G__279362__delegate.call(this,args);};
G__279362.cljs$lang$maxFixedArity = 0;
G__279362.cljs$lang$applyTo = (function (arglist__279364){
var args = cljs.core.seq(arglist__279364);
return G__279362__delegate(args);
});
G__279362.cljs$core$IFn$_invoke$arity$variadic = G__279362__delegate;
return G__279362;
})()
;

return null;
});
