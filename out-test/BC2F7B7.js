goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__187295__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__187295 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__187296__i = 0, G__187296__a = new Array(arguments.length -  0);
while (G__187296__i < G__187296__a.length) {G__187296__a[G__187296__i] = arguments[G__187296__i + 0]; ++G__187296__i;}
  args = new cljs.core.IndexedSeq(G__187296__a,0);
} 
return G__187295__delegate.call(this,args);};
G__187295.cljs$lang$maxFixedArity = 0;
G__187295.cljs$lang$applyTo = (function (arglist__187297){
var args = cljs.core.seq(arglist__187297);
return G__187295__delegate(args);
});
G__187295.cljs$core$IFn$_invoke$arity$variadic = G__187295__delegate;
return G__187295;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__187298__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__187298 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__187299__i = 0, G__187299__a = new Array(arguments.length -  0);
while (G__187299__i < G__187299__a.length) {G__187299__a[G__187299__i] = arguments[G__187299__i + 0]; ++G__187299__i;}
  args = new cljs.core.IndexedSeq(G__187299__a,0);
} 
return G__187298__delegate.call(this,args);};
G__187298.cljs$lang$maxFixedArity = 0;
G__187298.cljs$lang$applyTo = (function (arglist__187300){
var args = cljs.core.seq(arglist__187300);
return G__187298__delegate(args);
});
G__187298.cljs$core$IFn$_invoke$arity$variadic = G__187298__delegate;
return G__187298;
})()
;

return null;
});
