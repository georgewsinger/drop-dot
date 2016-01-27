goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__35623__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__35623 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35624__i = 0, G__35624__a = new Array(arguments.length -  0);
while (G__35624__i < G__35624__a.length) {G__35624__a[G__35624__i] = arguments[G__35624__i + 0]; ++G__35624__i;}
  args = new cljs.core.IndexedSeq(G__35624__a,0);
} 
return G__35623__delegate.call(this,args);};
G__35623.cljs$lang$maxFixedArity = 0;
G__35623.cljs$lang$applyTo = (function (arglist__35625){
var args = cljs.core.seq(arglist__35625);
return G__35623__delegate(args);
});
G__35623.cljs$core$IFn$_invoke$arity$variadic = G__35623__delegate;
return G__35623;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__35626__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__35626 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35627__i = 0, G__35627__a = new Array(arguments.length -  0);
while (G__35627__i < G__35627__a.length) {G__35627__a[G__35627__i] = arguments[G__35627__i + 0]; ++G__35627__i;}
  args = new cljs.core.IndexedSeq(G__35627__a,0);
} 
return G__35626__delegate.call(this,args);};
G__35626.cljs$lang$maxFixedArity = 0;
G__35626.cljs$lang$applyTo = (function (arglist__35628){
var args = cljs.core.seq(arglist__35628);
return G__35626__delegate(args);
});
G__35626.cljs$core$IFn$_invoke$arity$variadic = G__35626__delegate;
return G__35626;
})()
;

return null;
});
