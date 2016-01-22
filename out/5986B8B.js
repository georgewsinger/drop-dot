goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19722__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19722 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19723__i = 0, G__19723__a = new Array(arguments.length -  0);
while (G__19723__i < G__19723__a.length) {G__19723__a[G__19723__i] = arguments[G__19723__i + 0]; ++G__19723__i;}
  args = new cljs.core.IndexedSeq(G__19723__a,0);
} 
return G__19722__delegate.call(this,args);};
G__19722.cljs$lang$maxFixedArity = 0;
G__19722.cljs$lang$applyTo = (function (arglist__19724){
var args = cljs.core.seq(arglist__19724);
return G__19722__delegate(args);
});
G__19722.cljs$core$IFn$_invoke$arity$variadic = G__19722__delegate;
return G__19722;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19725__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19725 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19726__i = 0, G__19726__a = new Array(arguments.length -  0);
while (G__19726__i < G__19726__a.length) {G__19726__a[G__19726__i] = arguments[G__19726__i + 0]; ++G__19726__i;}
  args = new cljs.core.IndexedSeq(G__19726__a,0);
} 
return G__19725__delegate.call(this,args);};
G__19725.cljs$lang$maxFixedArity = 0;
G__19725.cljs$lang$applyTo = (function (arglist__19727){
var args = cljs.core.seq(arglist__19727);
return G__19725__delegate(args);
});
G__19725.cljs$core$IFn$_invoke$arity$variadic = G__19725__delegate;
return G__19725;
})()
;

return null;
});
