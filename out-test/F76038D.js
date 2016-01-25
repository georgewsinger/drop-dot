goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__49722__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__49722 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49723__i = 0, G__49723__a = new Array(arguments.length -  0);
while (G__49723__i < G__49723__a.length) {G__49723__a[G__49723__i] = arguments[G__49723__i + 0]; ++G__49723__i;}
  args = new cljs.core.IndexedSeq(G__49723__a,0);
} 
return G__49722__delegate.call(this,args);};
G__49722.cljs$lang$maxFixedArity = 0;
G__49722.cljs$lang$applyTo = (function (arglist__49724){
var args = cljs.core.seq(arglist__49724);
return G__49722__delegate(args);
});
G__49722.cljs$core$IFn$_invoke$arity$variadic = G__49722__delegate;
return G__49722;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__49725__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__49725 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49726__i = 0, G__49726__a = new Array(arguments.length -  0);
while (G__49726__i < G__49726__a.length) {G__49726__a[G__49726__i] = arguments[G__49726__i + 0]; ++G__49726__i;}
  args = new cljs.core.IndexedSeq(G__49726__a,0);
} 
return G__49725__delegate.call(this,args);};
G__49725.cljs$lang$maxFixedArity = 0;
G__49725.cljs$lang$applyTo = (function (arglist__49727){
var args = cljs.core.seq(arglist__49727);
return G__49725__delegate(args);
});
G__49725.cljs$core$IFn$_invoke$arity$variadic = G__49725__delegate;
return G__49725;
})()
;

return null;
});
