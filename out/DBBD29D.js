goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__151623__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__151623 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__151624__i = 0, G__151624__a = new Array(arguments.length -  0);
while (G__151624__i < G__151624__a.length) {G__151624__a[G__151624__i] = arguments[G__151624__i + 0]; ++G__151624__i;}
  args = new cljs.core.IndexedSeq(G__151624__a,0);
} 
return G__151623__delegate.call(this,args);};
G__151623.cljs$lang$maxFixedArity = 0;
G__151623.cljs$lang$applyTo = (function (arglist__151625){
var args = cljs.core.seq(arglist__151625);
return G__151623__delegate(args);
});
G__151623.cljs$core$IFn$_invoke$arity$variadic = G__151623__delegate;
return G__151623;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__151626__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__151626 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__151627__i = 0, G__151627__a = new Array(arguments.length -  0);
while (G__151627__i < G__151627__a.length) {G__151627__a[G__151627__i] = arguments[G__151627__i + 0]; ++G__151627__i;}
  args = new cljs.core.IndexedSeq(G__151627__a,0);
} 
return G__151626__delegate.call(this,args);};
G__151626.cljs$lang$maxFixedArity = 0;
G__151626.cljs$lang$applyTo = (function (arglist__151628){
var args = cljs.core.seq(arglist__151628);
return G__151626__delegate(args);
});
G__151626.cljs$core$IFn$_invoke$arity$variadic = G__151626__delegate;
return G__151626;
})()
;

return null;
});
