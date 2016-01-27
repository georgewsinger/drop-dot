goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__76520__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__76520 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__76521__i = 0, G__76521__a = new Array(arguments.length -  0);
while (G__76521__i < G__76521__a.length) {G__76521__a[G__76521__i] = arguments[G__76521__i + 0]; ++G__76521__i;}
  args = new cljs.core.IndexedSeq(G__76521__a,0);
} 
return G__76520__delegate.call(this,args);};
G__76520.cljs$lang$maxFixedArity = 0;
G__76520.cljs$lang$applyTo = (function (arglist__76522){
var args = cljs.core.seq(arglist__76522);
return G__76520__delegate(args);
});
G__76520.cljs$core$IFn$_invoke$arity$variadic = G__76520__delegate;
return G__76520;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__76523__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__76523 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__76524__i = 0, G__76524__a = new Array(arguments.length -  0);
while (G__76524__i < G__76524__a.length) {G__76524__a[G__76524__i] = arguments[G__76524__i + 0]; ++G__76524__i;}
  args = new cljs.core.IndexedSeq(G__76524__a,0);
} 
return G__76523__delegate.call(this,args);};
G__76523.cljs$lang$maxFixedArity = 0;
G__76523.cljs$lang$applyTo = (function (arglist__76525){
var args = cljs.core.seq(arglist__76525);
return G__76523__delegate(args);
});
G__76523.cljs$core$IFn$_invoke$arity$variadic = G__76523__delegate;
return G__76523;
})()
;

return null;
});
