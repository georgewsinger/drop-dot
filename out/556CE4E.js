goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30946__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__30946 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30947__i = 0, G__30947__a = new Array(arguments.length -  0);
while (G__30947__i < G__30947__a.length) {G__30947__a[G__30947__i] = arguments[G__30947__i + 0]; ++G__30947__i;}
  args = new cljs.core.IndexedSeq(G__30947__a,0);
} 
return G__30946__delegate.call(this,args);};
G__30946.cljs$lang$maxFixedArity = 0;
G__30946.cljs$lang$applyTo = (function (arglist__30948){
var args = cljs.core.seq(arglist__30948);
return G__30946__delegate(args);
});
G__30946.cljs$core$IFn$_invoke$arity$variadic = G__30946__delegate;
return G__30946;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__30949__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__30949 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30950__i = 0, G__30950__a = new Array(arguments.length -  0);
while (G__30950__i < G__30950__a.length) {G__30950__a[G__30950__i] = arguments[G__30950__i + 0]; ++G__30950__i;}
  args = new cljs.core.IndexedSeq(G__30950__a,0);
} 
return G__30949__delegate.call(this,args);};
G__30949.cljs$lang$maxFixedArity = 0;
G__30949.cljs$lang$applyTo = (function (arglist__30951){
var args = cljs.core.seq(arglist__30951);
return G__30949__delegate(args);
});
G__30949.cljs$core$IFn$_invoke$arity$variadic = G__30949__delegate;
return G__30949;
})()
;

return null;
});
