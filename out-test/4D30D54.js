goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14027__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14027 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14028__i = 0, G__14028__a = new Array(arguments.length -  0);
while (G__14028__i < G__14028__a.length) {G__14028__a[G__14028__i] = arguments[G__14028__i + 0]; ++G__14028__i;}
  args = new cljs.core.IndexedSeq(G__14028__a,0);
} 
return G__14027__delegate.call(this,args);};
G__14027.cljs$lang$maxFixedArity = 0;
G__14027.cljs$lang$applyTo = (function (arglist__14029){
var args = cljs.core.seq(arglist__14029);
return G__14027__delegate(args);
});
G__14027.cljs$core$IFn$_invoke$arity$variadic = G__14027__delegate;
return G__14027;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14030__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14030 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14031__i = 0, G__14031__a = new Array(arguments.length -  0);
while (G__14031__i < G__14031__a.length) {G__14031__a[G__14031__i] = arguments[G__14031__i + 0]; ++G__14031__i;}
  args = new cljs.core.IndexedSeq(G__14031__a,0);
} 
return G__14030__delegate.call(this,args);};
G__14030.cljs$lang$maxFixedArity = 0;
G__14030.cljs$lang$applyTo = (function (arglist__14032){
var args = cljs.core.seq(arglist__14032);
return G__14030__delegate(args);
});
G__14030.cljs$core$IFn$_invoke$arity$variadic = G__14030__delegate;
return G__14030;
})()
;

return null;
});
