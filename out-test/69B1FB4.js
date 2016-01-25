goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11775__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11775 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11776__i = 0, G__11776__a = new Array(arguments.length -  0);
while (G__11776__i < G__11776__a.length) {G__11776__a[G__11776__i] = arguments[G__11776__i + 0]; ++G__11776__i;}
  args = new cljs.core.IndexedSeq(G__11776__a,0);
} 
return G__11775__delegate.call(this,args);};
G__11775.cljs$lang$maxFixedArity = 0;
G__11775.cljs$lang$applyTo = (function (arglist__11777){
var args = cljs.core.seq(arglist__11777);
return G__11775__delegate(args);
});
G__11775.cljs$core$IFn$_invoke$arity$variadic = G__11775__delegate;
return G__11775;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11778__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11778 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11779__i = 0, G__11779__a = new Array(arguments.length -  0);
while (G__11779__i < G__11779__a.length) {G__11779__a[G__11779__i] = arguments[G__11779__i + 0]; ++G__11779__i;}
  args = new cljs.core.IndexedSeq(G__11779__a,0);
} 
return G__11778__delegate.call(this,args);};
G__11778.cljs$lang$maxFixedArity = 0;
G__11778.cljs$lang$applyTo = (function (arglist__11780){
var args = cljs.core.seq(arglist__11780);
return G__11778__delegate(args);
});
G__11778.cljs$core$IFn$_invoke$arity$variadic = G__11778__delegate;
return G__11778;
})()
;

return null;
});
