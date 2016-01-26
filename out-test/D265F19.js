goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__29157__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29157 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29158__i = 0, G__29158__a = new Array(arguments.length -  0);
while (G__29158__i < G__29158__a.length) {G__29158__a[G__29158__i] = arguments[G__29158__i + 0]; ++G__29158__i;}
  args = new cljs.core.IndexedSeq(G__29158__a,0);
} 
return G__29157__delegate.call(this,args);};
G__29157.cljs$lang$maxFixedArity = 0;
G__29157.cljs$lang$applyTo = (function (arglist__29159){
var args = cljs.core.seq(arglist__29159);
return G__29157__delegate(args);
});
G__29157.cljs$core$IFn$_invoke$arity$variadic = G__29157__delegate;
return G__29157;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__29160__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29160 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29161__i = 0, G__29161__a = new Array(arguments.length -  0);
while (G__29161__i < G__29161__a.length) {G__29161__a[G__29161__i] = arguments[G__29161__i + 0]; ++G__29161__i;}
  args = new cljs.core.IndexedSeq(G__29161__a,0);
} 
return G__29160__delegate.call(this,args);};
G__29160.cljs$lang$maxFixedArity = 0;
G__29160.cljs$lang$applyTo = (function (arglist__29162){
var args = cljs.core.seq(arglist__29162);
return G__29160__delegate(args);
});
G__29160.cljs$core$IFn$_invoke$arity$variadic = G__29160__delegate;
return G__29160;
})()
;

return null;
});
