goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__372491__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__372491 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__372492__i = 0, G__372492__a = new Array(arguments.length -  0);
while (G__372492__i < G__372492__a.length) {G__372492__a[G__372492__i] = arguments[G__372492__i + 0]; ++G__372492__i;}
  args = new cljs.core.IndexedSeq(G__372492__a,0);
} 
return G__372491__delegate.call(this,args);};
G__372491.cljs$lang$maxFixedArity = 0;
G__372491.cljs$lang$applyTo = (function (arglist__372493){
var args = cljs.core.seq(arglist__372493);
return G__372491__delegate(args);
});
G__372491.cljs$core$IFn$_invoke$arity$variadic = G__372491__delegate;
return G__372491;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__372494__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__372494 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__372495__i = 0, G__372495__a = new Array(arguments.length -  0);
while (G__372495__i < G__372495__a.length) {G__372495__a[G__372495__i] = arguments[G__372495__i + 0]; ++G__372495__i;}
  args = new cljs.core.IndexedSeq(G__372495__a,0);
} 
return G__372494__delegate.call(this,args);};
G__372494.cljs$lang$maxFixedArity = 0;
G__372494.cljs$lang$applyTo = (function (arglist__372496){
var args = cljs.core.seq(arglist__372496);
return G__372494__delegate(args);
});
G__372494.cljs$core$IFn$_invoke$arity$variadic = G__372494__delegate;
return G__372494;
})()
;

return null;
});
