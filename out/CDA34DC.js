goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__64714__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__64714 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64715__i = 0, G__64715__a = new Array(arguments.length -  0);
while (G__64715__i < G__64715__a.length) {G__64715__a[G__64715__i] = arguments[G__64715__i + 0]; ++G__64715__i;}
  args = new cljs.core.IndexedSeq(G__64715__a,0);
} 
return G__64714__delegate.call(this,args);};
G__64714.cljs$lang$maxFixedArity = 0;
G__64714.cljs$lang$applyTo = (function (arglist__64716){
var args = cljs.core.seq(arglist__64716);
return G__64714__delegate(args);
});
G__64714.cljs$core$IFn$_invoke$arity$variadic = G__64714__delegate;
return G__64714;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__64717__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__64717 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64718__i = 0, G__64718__a = new Array(arguments.length -  0);
while (G__64718__i < G__64718__a.length) {G__64718__a[G__64718__i] = arguments[G__64718__i + 0]; ++G__64718__i;}
  args = new cljs.core.IndexedSeq(G__64718__a,0);
} 
return G__64717__delegate.call(this,args);};
G__64717.cljs$lang$maxFixedArity = 0;
G__64717.cljs$lang$applyTo = (function (arglist__64719){
var args = cljs.core.seq(arglist__64719);
return G__64717__delegate(args);
});
G__64717.cljs$core$IFn$_invoke$arity$variadic = G__64717__delegate;
return G__64717;
})()
;

return null;
});
