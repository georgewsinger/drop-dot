goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__32338__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__32338 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32339__i = 0, G__32339__a = new Array(arguments.length -  0);
while (G__32339__i < G__32339__a.length) {G__32339__a[G__32339__i] = arguments[G__32339__i + 0]; ++G__32339__i;}
  args = new cljs.core.IndexedSeq(G__32339__a,0);
} 
return G__32338__delegate.call(this,args);};
G__32338.cljs$lang$maxFixedArity = 0;
G__32338.cljs$lang$applyTo = (function (arglist__32340){
var args = cljs.core.seq(arglist__32340);
return G__32338__delegate(args);
});
G__32338.cljs$core$IFn$_invoke$arity$variadic = G__32338__delegate;
return G__32338;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__32341__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__32341 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32342__i = 0, G__32342__a = new Array(arguments.length -  0);
while (G__32342__i < G__32342__a.length) {G__32342__a[G__32342__i] = arguments[G__32342__i + 0]; ++G__32342__i;}
  args = new cljs.core.IndexedSeq(G__32342__a,0);
} 
return G__32341__delegate.call(this,args);};
G__32341.cljs$lang$maxFixedArity = 0;
G__32341.cljs$lang$applyTo = (function (arglist__32343){
var args = cljs.core.seq(arglist__32343);
return G__32341__delegate(args);
});
G__32341.cljs$core$IFn$_invoke$arity$variadic = G__32341__delegate;
return G__32341;
})()
;

return null;
});
