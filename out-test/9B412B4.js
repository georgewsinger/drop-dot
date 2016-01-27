goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20623__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20623 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20624__i = 0, G__20624__a = new Array(arguments.length -  0);
while (G__20624__i < G__20624__a.length) {G__20624__a[G__20624__i] = arguments[G__20624__i + 0]; ++G__20624__i;}
  args = new cljs.core.IndexedSeq(G__20624__a,0);
} 
return G__20623__delegate.call(this,args);};
G__20623.cljs$lang$maxFixedArity = 0;
G__20623.cljs$lang$applyTo = (function (arglist__20625){
var args = cljs.core.seq(arglist__20625);
return G__20623__delegate(args);
});
G__20623.cljs$core$IFn$_invoke$arity$variadic = G__20623__delegate;
return G__20623;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20626__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20626 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20627__i = 0, G__20627__a = new Array(arguments.length -  0);
while (G__20627__i < G__20627__a.length) {G__20627__a[G__20627__i] = arguments[G__20627__i + 0]; ++G__20627__i;}
  args = new cljs.core.IndexedSeq(G__20627__a,0);
} 
return G__20626__delegate.call(this,args);};
G__20626.cljs$lang$maxFixedArity = 0;
G__20626.cljs$lang$applyTo = (function (arglist__20628){
var args = cljs.core.seq(arglist__20628);
return G__20626__delegate(args);
});
G__20626.cljs$core$IFn$_invoke$arity$variadic = G__20626__delegate;
return G__20626;
})()
;

return null;
});
