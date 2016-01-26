goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21311__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21311 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21312__i = 0, G__21312__a = new Array(arguments.length -  0);
while (G__21312__i < G__21312__a.length) {G__21312__a[G__21312__i] = arguments[G__21312__i + 0]; ++G__21312__i;}
  args = new cljs.core.IndexedSeq(G__21312__a,0);
} 
return G__21311__delegate.call(this,args);};
G__21311.cljs$lang$maxFixedArity = 0;
G__21311.cljs$lang$applyTo = (function (arglist__21313){
var args = cljs.core.seq(arglist__21313);
return G__21311__delegate(args);
});
G__21311.cljs$core$IFn$_invoke$arity$variadic = G__21311__delegate;
return G__21311;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21314__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21314 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21315__i = 0, G__21315__a = new Array(arguments.length -  0);
while (G__21315__i < G__21315__a.length) {G__21315__a[G__21315__i] = arguments[G__21315__i + 0]; ++G__21315__i;}
  args = new cljs.core.IndexedSeq(G__21315__a,0);
} 
return G__21314__delegate.call(this,args);};
G__21314.cljs$lang$maxFixedArity = 0;
G__21314.cljs$lang$applyTo = (function (arglist__21316){
var args = cljs.core.seq(arglist__21316);
return G__21314__delegate(args);
});
G__21314.cljs$core$IFn$_invoke$arity$variadic = G__21314__delegate;
return G__21314;
})()
;

return null;
});
