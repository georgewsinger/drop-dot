goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__77579__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__77579 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__77580__i = 0, G__77580__a = new Array(arguments.length -  0);
while (G__77580__i < G__77580__a.length) {G__77580__a[G__77580__i] = arguments[G__77580__i + 0]; ++G__77580__i;}
  args = new cljs.core.IndexedSeq(G__77580__a,0);
} 
return G__77579__delegate.call(this,args);};
G__77579.cljs$lang$maxFixedArity = 0;
G__77579.cljs$lang$applyTo = (function (arglist__77581){
var args = cljs.core.seq(arglist__77581);
return G__77579__delegate(args);
});
G__77579.cljs$core$IFn$_invoke$arity$variadic = G__77579__delegate;
return G__77579;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__77582__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__77582 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__77583__i = 0, G__77583__a = new Array(arguments.length -  0);
while (G__77583__i < G__77583__a.length) {G__77583__a[G__77583__i] = arguments[G__77583__i + 0]; ++G__77583__i;}
  args = new cljs.core.IndexedSeq(G__77583__a,0);
} 
return G__77582__delegate.call(this,args);};
G__77582.cljs$lang$maxFixedArity = 0;
G__77582.cljs$lang$applyTo = (function (arglist__77584){
var args = cljs.core.seq(arglist__77584);
return G__77582__delegate(args);
});
G__77582.cljs$core$IFn$_invoke$arity$variadic = G__77582__delegate;
return G__77582;
})()
;

return null;
});
