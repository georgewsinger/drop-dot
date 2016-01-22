goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24593__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24593 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24594__i = 0, G__24594__a = new Array(arguments.length -  0);
while (G__24594__i < G__24594__a.length) {G__24594__a[G__24594__i] = arguments[G__24594__i + 0]; ++G__24594__i;}
  args = new cljs.core.IndexedSeq(G__24594__a,0);
} 
return G__24593__delegate.call(this,args);};
G__24593.cljs$lang$maxFixedArity = 0;
G__24593.cljs$lang$applyTo = (function (arglist__24595){
var args = cljs.core.seq(arglist__24595);
return G__24593__delegate(args);
});
G__24593.cljs$core$IFn$_invoke$arity$variadic = G__24593__delegate;
return G__24593;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24596__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24596 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24597__i = 0, G__24597__a = new Array(arguments.length -  0);
while (G__24597__i < G__24597__a.length) {G__24597__a[G__24597__i] = arguments[G__24597__i + 0]; ++G__24597__i;}
  args = new cljs.core.IndexedSeq(G__24597__a,0);
} 
return G__24596__delegate.call(this,args);};
G__24596.cljs$lang$maxFixedArity = 0;
G__24596.cljs$lang$applyTo = (function (arglist__24598){
var args = cljs.core.seq(arglist__24598);
return G__24596__delegate(args);
});
G__24596.cljs$core$IFn$_invoke$arity$variadic = G__24596__delegate;
return G__24596;
})()
;

return null;
});
