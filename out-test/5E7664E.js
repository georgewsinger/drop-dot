goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__57295__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__57295 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57296__i = 0, G__57296__a = new Array(arguments.length -  0);
while (G__57296__i < G__57296__a.length) {G__57296__a[G__57296__i] = arguments[G__57296__i + 0]; ++G__57296__i;}
  args = new cljs.core.IndexedSeq(G__57296__a,0);
} 
return G__57295__delegate.call(this,args);};
G__57295.cljs$lang$maxFixedArity = 0;
G__57295.cljs$lang$applyTo = (function (arglist__57297){
var args = cljs.core.seq(arglist__57297);
return G__57295__delegate(args);
});
G__57295.cljs$core$IFn$_invoke$arity$variadic = G__57295__delegate;
return G__57295;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__57298__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__57298 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57299__i = 0, G__57299__a = new Array(arguments.length -  0);
while (G__57299__i < G__57299__a.length) {G__57299__a[G__57299__i] = arguments[G__57299__i + 0]; ++G__57299__i;}
  args = new cljs.core.IndexedSeq(G__57299__a,0);
} 
return G__57298__delegate.call(this,args);};
G__57298.cljs$lang$maxFixedArity = 0;
G__57298.cljs$lang$applyTo = (function (arglist__57300){
var args = cljs.core.seq(arglist__57300);
return G__57298__delegate(args);
});
G__57298.cljs$core$IFn$_invoke$arity$variadic = G__57298__delegate;
return G__57298;
})()
;

return null;
});
