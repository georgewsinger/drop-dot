goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__357775__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__357775 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__357776__i = 0, G__357776__a = new Array(arguments.length -  0);
while (G__357776__i < G__357776__a.length) {G__357776__a[G__357776__i] = arguments[G__357776__i + 0]; ++G__357776__i;}
  args = new cljs.core.IndexedSeq(G__357776__a,0);
} 
return G__357775__delegate.call(this,args);};
G__357775.cljs$lang$maxFixedArity = 0;
G__357775.cljs$lang$applyTo = (function (arglist__357777){
var args = cljs.core.seq(arglist__357777);
return G__357775__delegate(args);
});
G__357775.cljs$core$IFn$_invoke$arity$variadic = G__357775__delegate;
return G__357775;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__357778__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__357778 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__357779__i = 0, G__357779__a = new Array(arguments.length -  0);
while (G__357779__i < G__357779__a.length) {G__357779__a[G__357779__i] = arguments[G__357779__i + 0]; ++G__357779__i;}
  args = new cljs.core.IndexedSeq(G__357779__a,0);
} 
return G__357778__delegate.call(this,args);};
G__357778.cljs$lang$maxFixedArity = 0;
G__357778.cljs$lang$applyTo = (function (arglist__357780){
var args = cljs.core.seq(arglist__357780);
return G__357778__delegate(args);
});
G__357778.cljs$core$IFn$_invoke$arity$variadic = G__357778__delegate;
return G__357778;
})()
;

return null;
});
