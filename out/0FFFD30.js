goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11597__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11597 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11598__i = 0, G__11598__a = new Array(arguments.length -  0);
while (G__11598__i < G__11598__a.length) {G__11598__a[G__11598__i] = arguments[G__11598__i + 0]; ++G__11598__i;}
  args = new cljs.core.IndexedSeq(G__11598__a,0);
} 
return G__11597__delegate.call(this,args);};
G__11597.cljs$lang$maxFixedArity = 0;
G__11597.cljs$lang$applyTo = (function (arglist__11599){
var args = cljs.core.seq(arglist__11599);
return G__11597__delegate(args);
});
G__11597.cljs$core$IFn$_invoke$arity$variadic = G__11597__delegate;
return G__11597;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11600__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11600 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11601__i = 0, G__11601__a = new Array(arguments.length -  0);
while (G__11601__i < G__11601__a.length) {G__11601__a[G__11601__i] = arguments[G__11601__i + 0]; ++G__11601__i;}
  args = new cljs.core.IndexedSeq(G__11601__a,0);
} 
return G__11600__delegate.call(this,args);};
G__11600.cljs$lang$maxFixedArity = 0;
G__11600.cljs$lang$applyTo = (function (arglist__11602){
var args = cljs.core.seq(arglist__11602);
return G__11600__delegate(args);
});
G__11600.cljs$core$IFn$_invoke$arity$variadic = G__11600__delegate;
return G__11600;
})()
;

return null;
});
