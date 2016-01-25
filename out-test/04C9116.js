goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__29794__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29794 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29795__i = 0, G__29795__a = new Array(arguments.length -  0);
while (G__29795__i < G__29795__a.length) {G__29795__a[G__29795__i] = arguments[G__29795__i + 0]; ++G__29795__i;}
  args = new cljs.core.IndexedSeq(G__29795__a,0);
} 
return G__29794__delegate.call(this,args);};
G__29794.cljs$lang$maxFixedArity = 0;
G__29794.cljs$lang$applyTo = (function (arglist__29796){
var args = cljs.core.seq(arglist__29796);
return G__29794__delegate(args);
});
G__29794.cljs$core$IFn$_invoke$arity$variadic = G__29794__delegate;
return G__29794;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__29797__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29797 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29798__i = 0, G__29798__a = new Array(arguments.length -  0);
while (G__29798__i < G__29798__a.length) {G__29798__a[G__29798__i] = arguments[G__29798__i + 0]; ++G__29798__i;}
  args = new cljs.core.IndexedSeq(G__29798__a,0);
} 
return G__29797__delegate.call(this,args);};
G__29797.cljs$lang$maxFixedArity = 0;
G__29797.cljs$lang$applyTo = (function (arglist__29799){
var args = cljs.core.seq(arglist__29799);
return G__29797__delegate(args);
});
G__29797.cljs$core$IFn$_invoke$arity$variadic = G__29797__delegate;
return G__29797;
})()
;

return null;
});
