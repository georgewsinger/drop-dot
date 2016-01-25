goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__65311__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__65311 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65312__i = 0, G__65312__a = new Array(arguments.length -  0);
while (G__65312__i < G__65312__a.length) {G__65312__a[G__65312__i] = arguments[G__65312__i + 0]; ++G__65312__i;}
  args = new cljs.core.IndexedSeq(G__65312__a,0);
} 
return G__65311__delegate.call(this,args);};
G__65311.cljs$lang$maxFixedArity = 0;
G__65311.cljs$lang$applyTo = (function (arglist__65313){
var args = cljs.core.seq(arglist__65313);
return G__65311__delegate(args);
});
G__65311.cljs$core$IFn$_invoke$arity$variadic = G__65311__delegate;
return G__65311;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__65314__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__65314 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65315__i = 0, G__65315__a = new Array(arguments.length -  0);
while (G__65315__i < G__65315__a.length) {G__65315__a[G__65315__i] = arguments[G__65315__i + 0]; ++G__65315__i;}
  args = new cljs.core.IndexedSeq(G__65315__a,0);
} 
return G__65314__delegate.call(this,args);};
G__65314.cljs$lang$maxFixedArity = 0;
G__65314.cljs$lang$applyTo = (function (arglist__65316){
var args = cljs.core.seq(arglist__65316);
return G__65314__delegate(args);
});
G__65314.cljs$core$IFn$_invoke$arity$variadic = G__65314__delegate;
return G__65314;
})()
;

return null;
});
