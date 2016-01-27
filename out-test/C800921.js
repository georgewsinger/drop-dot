goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__62359__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__62359 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62360__i = 0, G__62360__a = new Array(arguments.length -  0);
while (G__62360__i < G__62360__a.length) {G__62360__a[G__62360__i] = arguments[G__62360__i + 0]; ++G__62360__i;}
  args = new cljs.core.IndexedSeq(G__62360__a,0);
} 
return G__62359__delegate.call(this,args);};
G__62359.cljs$lang$maxFixedArity = 0;
G__62359.cljs$lang$applyTo = (function (arglist__62361){
var args = cljs.core.seq(arglist__62361);
return G__62359__delegate(args);
});
G__62359.cljs$core$IFn$_invoke$arity$variadic = G__62359__delegate;
return G__62359;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__62362__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__62362 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62363__i = 0, G__62363__a = new Array(arguments.length -  0);
while (G__62363__i < G__62363__a.length) {G__62363__a[G__62363__i] = arguments[G__62363__i + 0]; ++G__62363__i;}
  args = new cljs.core.IndexedSeq(G__62363__a,0);
} 
return G__62362__delegate.call(this,args);};
G__62362.cljs$lang$maxFixedArity = 0;
G__62362.cljs$lang$applyTo = (function (arglist__62364){
var args = cljs.core.seq(arglist__62364);
return G__62362__delegate(args);
});
G__62362.cljs$core$IFn$_invoke$arity$variadic = G__62362__delegate;
return G__62362;
})()
;

return null;
});
