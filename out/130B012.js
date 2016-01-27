goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33722__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33722 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33723__i = 0, G__33723__a = new Array(arguments.length -  0);
while (G__33723__i < G__33723__a.length) {G__33723__a[G__33723__i] = arguments[G__33723__i + 0]; ++G__33723__i;}
  args = new cljs.core.IndexedSeq(G__33723__a,0);
} 
return G__33722__delegate.call(this,args);};
G__33722.cljs$lang$maxFixedArity = 0;
G__33722.cljs$lang$applyTo = (function (arglist__33724){
var args = cljs.core.seq(arglist__33724);
return G__33722__delegate(args);
});
G__33722.cljs$core$IFn$_invoke$arity$variadic = G__33722__delegate;
return G__33722;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33725__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33725 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33726__i = 0, G__33726__a = new Array(arguments.length -  0);
while (G__33726__i < G__33726__a.length) {G__33726__a[G__33726__i] = arguments[G__33726__i + 0]; ++G__33726__i;}
  args = new cljs.core.IndexedSeq(G__33726__a,0);
} 
return G__33725__delegate.call(this,args);};
G__33725.cljs$lang$maxFixedArity = 0;
G__33725.cljs$lang$applyTo = (function (arglist__33727){
var args = cljs.core.seq(arglist__33727);
return G__33725__delegate(args);
});
G__33725.cljs$core$IFn$_invoke$arity$variadic = G__33725__delegate;
return G__33725;
})()
;

return null;
});
