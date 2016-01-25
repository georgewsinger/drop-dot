goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__280046__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__280046 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__280047__i = 0, G__280047__a = new Array(arguments.length -  0);
while (G__280047__i < G__280047__a.length) {G__280047__a[G__280047__i] = arguments[G__280047__i + 0]; ++G__280047__i;}
  args = new cljs.core.IndexedSeq(G__280047__a,0);
} 
return G__280046__delegate.call(this,args);};
G__280046.cljs$lang$maxFixedArity = 0;
G__280046.cljs$lang$applyTo = (function (arglist__280048){
var args = cljs.core.seq(arglist__280048);
return G__280046__delegate(args);
});
G__280046.cljs$core$IFn$_invoke$arity$variadic = G__280046__delegate;
return G__280046;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__280049__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__280049 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__280050__i = 0, G__280050__a = new Array(arguments.length -  0);
while (G__280050__i < G__280050__a.length) {G__280050__a[G__280050__i] = arguments[G__280050__i + 0]; ++G__280050__i;}
  args = new cljs.core.IndexedSeq(G__280050__a,0);
} 
return G__280049__delegate.call(this,args);};
G__280049.cljs$lang$maxFixedArity = 0;
G__280049.cljs$lang$applyTo = (function (arglist__280051){
var args = cljs.core.seq(arglist__280051);
return G__280049__delegate(args);
});
G__280049.cljs$core$IFn$_invoke$arity$variadic = G__280049__delegate;
return G__280049;
})()
;

return null;
});
