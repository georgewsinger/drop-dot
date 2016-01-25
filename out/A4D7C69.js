goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17478__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17478 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17479__i = 0, G__17479__a = new Array(arguments.length -  0);
while (G__17479__i < G__17479__a.length) {G__17479__a[G__17479__i] = arguments[G__17479__i + 0]; ++G__17479__i;}
  args = new cljs.core.IndexedSeq(G__17479__a,0);
} 
return G__17478__delegate.call(this,args);};
G__17478.cljs$lang$maxFixedArity = 0;
G__17478.cljs$lang$applyTo = (function (arglist__17480){
var args = cljs.core.seq(arglist__17480);
return G__17478__delegate(args);
});
G__17478.cljs$core$IFn$_invoke$arity$variadic = G__17478__delegate;
return G__17478;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17481__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17481 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17482__i = 0, G__17482__a = new Array(arguments.length -  0);
while (G__17482__i < G__17482__a.length) {G__17482__a[G__17482__i] = arguments[G__17482__i + 0]; ++G__17482__i;}
  args = new cljs.core.IndexedSeq(G__17482__a,0);
} 
return G__17481__delegate.call(this,args);};
G__17481.cljs$lang$maxFixedArity = 0;
G__17481.cljs$lang$applyTo = (function (arglist__17483){
var args = cljs.core.seq(arglist__17483);
return G__17481__delegate(args);
});
G__17481.cljs$core$IFn$_invoke$arity$variadic = G__17481__delegate;
return G__17481;
})()
;

return null;
});
