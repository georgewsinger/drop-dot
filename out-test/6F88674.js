goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__146583__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__146583 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__146584__i = 0, G__146584__a = new Array(arguments.length -  0);
while (G__146584__i < G__146584__a.length) {G__146584__a[G__146584__i] = arguments[G__146584__i + 0]; ++G__146584__i;}
  args = new cljs.core.IndexedSeq(G__146584__a,0);
} 
return G__146583__delegate.call(this,args);};
G__146583.cljs$lang$maxFixedArity = 0;
G__146583.cljs$lang$applyTo = (function (arglist__146585){
var args = cljs.core.seq(arglist__146585);
return G__146583__delegate(args);
});
G__146583.cljs$core$IFn$_invoke$arity$variadic = G__146583__delegate;
return G__146583;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__146586__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__146586 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__146587__i = 0, G__146587__a = new Array(arguments.length -  0);
while (G__146587__i < G__146587__a.length) {G__146587__a[G__146587__i] = arguments[G__146587__i + 0]; ++G__146587__i;}
  args = new cljs.core.IndexedSeq(G__146587__a,0);
} 
return G__146586__delegate.call(this,args);};
G__146586.cljs$lang$maxFixedArity = 0;
G__146586.cljs$lang$applyTo = (function (arglist__146588){
var args = cljs.core.seq(arglist__146588);
return G__146586__delegate(args);
});
G__146586.cljs$core$IFn$_invoke$arity$variadic = G__146586__delegate;
return G__146586;
})()
;

return null;
});
