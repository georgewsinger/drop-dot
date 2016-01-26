goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__286226__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__286226 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__286227__i = 0, G__286227__a = new Array(arguments.length -  0);
while (G__286227__i < G__286227__a.length) {G__286227__a[G__286227__i] = arguments[G__286227__i + 0]; ++G__286227__i;}
  args = new cljs.core.IndexedSeq(G__286227__a,0);
} 
return G__286226__delegate.call(this,args);};
G__286226.cljs$lang$maxFixedArity = 0;
G__286226.cljs$lang$applyTo = (function (arglist__286228){
var args = cljs.core.seq(arglist__286228);
return G__286226__delegate(args);
});
G__286226.cljs$core$IFn$_invoke$arity$variadic = G__286226__delegate;
return G__286226;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__286229__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__286229 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__286230__i = 0, G__286230__a = new Array(arguments.length -  0);
while (G__286230__i < G__286230__a.length) {G__286230__a[G__286230__i] = arguments[G__286230__i + 0]; ++G__286230__i;}
  args = new cljs.core.IndexedSeq(G__286230__a,0);
} 
return G__286229__delegate.call(this,args);};
G__286229.cljs$lang$maxFixedArity = 0;
G__286229.cljs$lang$applyTo = (function (arglist__286231){
var args = cljs.core.seq(arglist__286231);
return G__286229__delegate(args);
});
G__286229.cljs$core$IFn$_invoke$arity$variadic = G__286229__delegate;
return G__286229;
})()
;

return null;
});
