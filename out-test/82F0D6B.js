goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__103623__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__103623 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__103624__i = 0, G__103624__a = new Array(arguments.length -  0);
while (G__103624__i < G__103624__a.length) {G__103624__a[G__103624__i] = arguments[G__103624__i + 0]; ++G__103624__i;}
  args = new cljs.core.IndexedSeq(G__103624__a,0);
} 
return G__103623__delegate.call(this,args);};
G__103623.cljs$lang$maxFixedArity = 0;
G__103623.cljs$lang$applyTo = (function (arglist__103625){
var args = cljs.core.seq(arglist__103625);
return G__103623__delegate(args);
});
G__103623.cljs$core$IFn$_invoke$arity$variadic = G__103623__delegate;
return G__103623;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__103626__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__103626 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__103627__i = 0, G__103627__a = new Array(arguments.length -  0);
while (G__103627__i < G__103627__a.length) {G__103627__a[G__103627__i] = arguments[G__103627__i + 0]; ++G__103627__i;}
  args = new cljs.core.IndexedSeq(G__103627__a,0);
} 
return G__103626__delegate.call(this,args);};
G__103626.cljs$lang$maxFixedArity = 0;
G__103626.cljs$lang$applyTo = (function (arglist__103628){
var args = cljs.core.seq(arglist__103628);
return G__103626__delegate(args);
});
G__103626.cljs$core$IFn$_invoke$arity$variadic = G__103626__delegate;
return G__103626;
})()
;

return null;
});
