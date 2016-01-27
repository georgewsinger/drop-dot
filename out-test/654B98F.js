goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__44223__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__44223 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44224__i = 0, G__44224__a = new Array(arguments.length -  0);
while (G__44224__i < G__44224__a.length) {G__44224__a[G__44224__i] = arguments[G__44224__i + 0]; ++G__44224__i;}
  args = new cljs.core.IndexedSeq(G__44224__a,0);
} 
return G__44223__delegate.call(this,args);};
G__44223.cljs$lang$maxFixedArity = 0;
G__44223.cljs$lang$applyTo = (function (arglist__44225){
var args = cljs.core.seq(arglist__44225);
return G__44223__delegate(args);
});
G__44223.cljs$core$IFn$_invoke$arity$variadic = G__44223__delegate;
return G__44223;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__44226__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__44226 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44227__i = 0, G__44227__a = new Array(arguments.length -  0);
while (G__44227__i < G__44227__a.length) {G__44227__a[G__44227__i] = arguments[G__44227__i + 0]; ++G__44227__i;}
  args = new cljs.core.IndexedSeq(G__44227__a,0);
} 
return G__44226__delegate.call(this,args);};
G__44226.cljs$lang$maxFixedArity = 0;
G__44226.cljs$lang$applyTo = (function (arglist__44228){
var args = cljs.core.seq(arglist__44228);
return G__44226__delegate(args);
});
G__44226.cljs$core$IFn$_invoke$arity$variadic = G__44226__delegate;
return G__44226;
})()
;

return null;
});
