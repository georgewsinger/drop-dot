goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__235045__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__235045 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__235046__i = 0, G__235046__a = new Array(arguments.length -  0);
while (G__235046__i < G__235046__a.length) {G__235046__a[G__235046__i] = arguments[G__235046__i + 0]; ++G__235046__i;}
  args = new cljs.core.IndexedSeq(G__235046__a,0);
} 
return G__235045__delegate.call(this,args);};
G__235045.cljs$lang$maxFixedArity = 0;
G__235045.cljs$lang$applyTo = (function (arglist__235047){
var args = cljs.core.seq(arglist__235047);
return G__235045__delegate(args);
});
G__235045.cljs$core$IFn$_invoke$arity$variadic = G__235045__delegate;
return G__235045;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__235048__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__235048 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__235049__i = 0, G__235049__a = new Array(arguments.length -  0);
while (G__235049__i < G__235049__a.length) {G__235049__a[G__235049__i] = arguments[G__235049__i + 0]; ++G__235049__i;}
  args = new cljs.core.IndexedSeq(G__235049__a,0);
} 
return G__235048__delegate.call(this,args);};
G__235048.cljs$lang$maxFixedArity = 0;
G__235048.cljs$lang$applyTo = (function (arglist__235050){
var args = cljs.core.seq(arglist__235050);
return G__235048__delegate(args);
});
G__235048.cljs$core$IFn$_invoke$arity$variadic = G__235048__delegate;
return G__235048;
})()
;

return null;
});
