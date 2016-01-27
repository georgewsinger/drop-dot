goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__44212__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__44212 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44213__i = 0, G__44213__a = new Array(arguments.length -  0);
while (G__44213__i < G__44213__a.length) {G__44213__a[G__44213__i] = arguments[G__44213__i + 0]; ++G__44213__i;}
  args = new cljs.core.IndexedSeq(G__44213__a,0);
} 
return G__44212__delegate.call(this,args);};
G__44212.cljs$lang$maxFixedArity = 0;
G__44212.cljs$lang$applyTo = (function (arglist__44214){
var args = cljs.core.seq(arglist__44214);
return G__44212__delegate(args);
});
G__44212.cljs$core$IFn$_invoke$arity$variadic = G__44212__delegate;
return G__44212;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__44215__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__44215 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44216__i = 0, G__44216__a = new Array(arguments.length -  0);
while (G__44216__i < G__44216__a.length) {G__44216__a[G__44216__i] = arguments[G__44216__i + 0]; ++G__44216__i;}
  args = new cljs.core.IndexedSeq(G__44216__a,0);
} 
return G__44215__delegate.call(this,args);};
G__44215.cljs$lang$maxFixedArity = 0;
G__44215.cljs$lang$applyTo = (function (arglist__44217){
var args = cljs.core.seq(arglist__44217);
return G__44215__delegate(args);
});
G__44215.cljs$core$IFn$_invoke$arity$variadic = G__44215__delegate;
return G__44215;
})()
;

return null;
});
