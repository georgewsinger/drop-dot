goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__70441__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__70441 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__70442__i = 0, G__70442__a = new Array(arguments.length -  0);
while (G__70442__i < G__70442__a.length) {G__70442__a[G__70442__i] = arguments[G__70442__i + 0]; ++G__70442__i;}
  args = new cljs.core.IndexedSeq(G__70442__a,0);
} 
return G__70441__delegate.call(this,args);};
G__70441.cljs$lang$maxFixedArity = 0;
G__70441.cljs$lang$applyTo = (function (arglist__70443){
var args = cljs.core.seq(arglist__70443);
return G__70441__delegate(args);
});
G__70441.cljs$core$IFn$_invoke$arity$variadic = G__70441__delegate;
return G__70441;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__70444__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__70444 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__70445__i = 0, G__70445__a = new Array(arguments.length -  0);
while (G__70445__i < G__70445__a.length) {G__70445__a[G__70445__i] = arguments[G__70445__i + 0]; ++G__70445__i;}
  args = new cljs.core.IndexedSeq(G__70445__a,0);
} 
return G__70444__delegate.call(this,args);};
G__70444.cljs$lang$maxFixedArity = 0;
G__70444.cljs$lang$applyTo = (function (arglist__70446){
var args = cljs.core.seq(arglist__70446);
return G__70444__delegate(args);
});
G__70444.cljs$core$IFn$_invoke$arity$variadic = G__70444__delegate;
return G__70444;
})()
;

return null;
});
