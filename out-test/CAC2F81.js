goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__141157__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__141157 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__141158__i = 0, G__141158__a = new Array(arguments.length -  0);
while (G__141158__i < G__141158__a.length) {G__141158__a[G__141158__i] = arguments[G__141158__i + 0]; ++G__141158__i;}
  args = new cljs.core.IndexedSeq(G__141158__a,0);
} 
return G__141157__delegate.call(this,args);};
G__141157.cljs$lang$maxFixedArity = 0;
G__141157.cljs$lang$applyTo = (function (arglist__141159){
var args = cljs.core.seq(arglist__141159);
return G__141157__delegate(args);
});
G__141157.cljs$core$IFn$_invoke$arity$variadic = G__141157__delegate;
return G__141157;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__141160__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__141160 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__141161__i = 0, G__141161__a = new Array(arguments.length -  0);
while (G__141161__i < G__141161__a.length) {G__141161__a[G__141161__i] = arguments[G__141161__i + 0]; ++G__141161__i;}
  args = new cljs.core.IndexedSeq(G__141161__a,0);
} 
return G__141160__delegate.call(this,args);};
G__141160.cljs$lang$maxFixedArity = 0;
G__141160.cljs$lang$applyTo = (function (arglist__141162){
var args = cljs.core.seq(arglist__141162);
return G__141160__delegate(args);
});
G__141160.cljs$core$IFn$_invoke$arity$variadic = G__141160__delegate;
return G__141160;
})()
;

return null;
});
