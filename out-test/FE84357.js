goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14441__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14441 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14442__i = 0, G__14442__a = new Array(arguments.length -  0);
while (G__14442__i < G__14442__a.length) {G__14442__a[G__14442__i] = arguments[G__14442__i + 0]; ++G__14442__i;}
  args = new cljs.core.IndexedSeq(G__14442__a,0);
} 
return G__14441__delegate.call(this,args);};
G__14441.cljs$lang$maxFixedArity = 0;
G__14441.cljs$lang$applyTo = (function (arglist__14443){
var args = cljs.core.seq(arglist__14443);
return G__14441__delegate(args);
});
G__14441.cljs$core$IFn$_invoke$arity$variadic = G__14441__delegate;
return G__14441;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14444__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14444 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14445__i = 0, G__14445__a = new Array(arguments.length -  0);
while (G__14445__i < G__14445__a.length) {G__14445__a[G__14445__i] = arguments[G__14445__i + 0]; ++G__14445__i;}
  args = new cljs.core.IndexedSeq(G__14445__a,0);
} 
return G__14444__delegate.call(this,args);};
G__14444.cljs$lang$maxFixedArity = 0;
G__14444.cljs$lang$applyTo = (function (arglist__14446){
var args = cljs.core.seq(arglist__14446);
return G__14444__delegate(args);
});
G__14444.cljs$core$IFn$_invoke$arity$variadic = G__14444__delegate;
return G__14444;
})()
;

return null;
});
