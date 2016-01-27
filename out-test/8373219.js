goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__69879__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__69879 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__69880__i = 0, G__69880__a = new Array(arguments.length -  0);
while (G__69880__i < G__69880__a.length) {G__69880__a[G__69880__i] = arguments[G__69880__i + 0]; ++G__69880__i;}
  args = new cljs.core.IndexedSeq(G__69880__a,0);
} 
return G__69879__delegate.call(this,args);};
G__69879.cljs$lang$maxFixedArity = 0;
G__69879.cljs$lang$applyTo = (function (arglist__69881){
var args = cljs.core.seq(arglist__69881);
return G__69879__delegate(args);
});
G__69879.cljs$core$IFn$_invoke$arity$variadic = G__69879__delegate;
return G__69879;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__69882__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__69882 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__69883__i = 0, G__69883__a = new Array(arguments.length -  0);
while (G__69883__i < G__69883__a.length) {G__69883__a[G__69883__i] = arguments[G__69883__i + 0]; ++G__69883__i;}
  args = new cljs.core.IndexedSeq(G__69883__a,0);
} 
return G__69882__delegate.call(this,args);};
G__69882.cljs$lang$maxFixedArity = 0;
G__69882.cljs$lang$applyTo = (function (arglist__69884){
var args = cljs.core.seq(arglist__69884);
return G__69882__delegate(args);
});
G__69882.cljs$core$IFn$_invoke$arity$variadic = G__69882__delegate;
return G__69882;
})()
;

return null;
});
