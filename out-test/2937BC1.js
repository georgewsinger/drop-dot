goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__51128__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__51128 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51129__i = 0, G__51129__a = new Array(arguments.length -  0);
while (G__51129__i < G__51129__a.length) {G__51129__a[G__51129__i] = arguments[G__51129__i + 0]; ++G__51129__i;}
  args = new cljs.core.IndexedSeq(G__51129__a,0);
} 
return G__51128__delegate.call(this,args);};
G__51128.cljs$lang$maxFixedArity = 0;
G__51128.cljs$lang$applyTo = (function (arglist__51130){
var args = cljs.core.seq(arglist__51130);
return G__51128__delegate(args);
});
G__51128.cljs$core$IFn$_invoke$arity$variadic = G__51128__delegate;
return G__51128;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__51131__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__51131 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51132__i = 0, G__51132__a = new Array(arguments.length -  0);
while (G__51132__i < G__51132__a.length) {G__51132__a[G__51132__i] = arguments[G__51132__i + 0]; ++G__51132__i;}
  args = new cljs.core.IndexedSeq(G__51132__a,0);
} 
return G__51131__delegate.call(this,args);};
G__51131.cljs$lang$maxFixedArity = 0;
G__51131.cljs$lang$applyTo = (function (arglist__51133){
var args = cljs.core.seq(arglist__51133);
return G__51131__delegate(args);
});
G__51131.cljs$core$IFn$_invoke$arity$variadic = G__51131__delegate;
return G__51131;
})()
;

return null;
});
