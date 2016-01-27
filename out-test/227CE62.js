goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__50792__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__50792 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50793__i = 0, G__50793__a = new Array(arguments.length -  0);
while (G__50793__i < G__50793__a.length) {G__50793__a[G__50793__i] = arguments[G__50793__i + 0]; ++G__50793__i;}
  args = new cljs.core.IndexedSeq(G__50793__a,0);
} 
return G__50792__delegate.call(this,args);};
G__50792.cljs$lang$maxFixedArity = 0;
G__50792.cljs$lang$applyTo = (function (arglist__50794){
var args = cljs.core.seq(arglist__50794);
return G__50792__delegate(args);
});
G__50792.cljs$core$IFn$_invoke$arity$variadic = G__50792__delegate;
return G__50792;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__50795__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__50795 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50796__i = 0, G__50796__a = new Array(arguments.length -  0);
while (G__50796__i < G__50796__a.length) {G__50796__a[G__50796__i] = arguments[G__50796__i + 0]; ++G__50796__i;}
  args = new cljs.core.IndexedSeq(G__50796__a,0);
} 
return G__50795__delegate.call(this,args);};
G__50795.cljs$lang$maxFixedArity = 0;
G__50795.cljs$lang$applyTo = (function (arglist__50797){
var args = cljs.core.seq(arglist__50797);
return G__50795__delegate(args);
});
G__50795.cljs$core$IFn$_invoke$arity$variadic = G__50795__delegate;
return G__50795;
})()
;

return null;
});
