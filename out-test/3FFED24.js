goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__67260__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__67260 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67261__i = 0, G__67261__a = new Array(arguments.length -  0);
while (G__67261__i < G__67261__a.length) {G__67261__a[G__67261__i] = arguments[G__67261__i + 0]; ++G__67261__i;}
  args = new cljs.core.IndexedSeq(G__67261__a,0);
} 
return G__67260__delegate.call(this,args);};
G__67260.cljs$lang$maxFixedArity = 0;
G__67260.cljs$lang$applyTo = (function (arglist__67262){
var args = cljs.core.seq(arglist__67262);
return G__67260__delegate(args);
});
G__67260.cljs$core$IFn$_invoke$arity$variadic = G__67260__delegate;
return G__67260;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__67263__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__67263 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67264__i = 0, G__67264__a = new Array(arguments.length -  0);
while (G__67264__i < G__67264__a.length) {G__67264__a[G__67264__i] = arguments[G__67264__i + 0]; ++G__67264__i;}
  args = new cljs.core.IndexedSeq(G__67264__a,0);
} 
return G__67263__delegate.call(this,args);};
G__67263.cljs$lang$maxFixedArity = 0;
G__67263.cljs$lang$applyTo = (function (arglist__67265){
var args = cljs.core.seq(arglist__67265);
return G__67263__delegate(args);
});
G__67263.cljs$core$IFn$_invoke$arity$variadic = G__67263__delegate;
return G__67263;
})()
;

return null;
});
