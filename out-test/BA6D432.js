goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21295__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21295 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21296__i = 0, G__21296__a = new Array(arguments.length -  0);
while (G__21296__i < G__21296__a.length) {G__21296__a[G__21296__i] = arguments[G__21296__i + 0]; ++G__21296__i;}
  args = new cljs.core.IndexedSeq(G__21296__a,0);
} 
return G__21295__delegate.call(this,args);};
G__21295.cljs$lang$maxFixedArity = 0;
G__21295.cljs$lang$applyTo = (function (arglist__21297){
var args = cljs.core.seq(arglist__21297);
return G__21295__delegate(args);
});
G__21295.cljs$core$IFn$_invoke$arity$variadic = G__21295__delegate;
return G__21295;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21298__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21298 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21299__i = 0, G__21299__a = new Array(arguments.length -  0);
while (G__21299__i < G__21299__a.length) {G__21299__a[G__21299__i] = arguments[G__21299__i + 0]; ++G__21299__i;}
  args = new cljs.core.IndexedSeq(G__21299__a,0);
} 
return G__21298__delegate.call(this,args);};
G__21298.cljs$lang$maxFixedArity = 0;
G__21298.cljs$lang$applyTo = (function (arglist__21300){
var args = cljs.core.seq(arglist__21300);
return G__21298__delegate(args);
});
G__21298.cljs$core$IFn$_invoke$arity$variadic = G__21298__delegate;
return G__21298;
})()
;

return null;
});
