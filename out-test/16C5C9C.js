goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__106249__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__106249 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__106250__i = 0, G__106250__a = new Array(arguments.length -  0);
while (G__106250__i < G__106250__a.length) {G__106250__a[G__106250__i] = arguments[G__106250__i + 0]; ++G__106250__i;}
  args = new cljs.core.IndexedSeq(G__106250__a,0);
} 
return G__106249__delegate.call(this,args);};
G__106249.cljs$lang$maxFixedArity = 0;
G__106249.cljs$lang$applyTo = (function (arglist__106251){
var args = cljs.core.seq(arglist__106251);
return G__106249__delegate(args);
});
G__106249.cljs$core$IFn$_invoke$arity$variadic = G__106249__delegate;
return G__106249;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__106252__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__106252 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__106253__i = 0, G__106253__a = new Array(arguments.length -  0);
while (G__106253__i < G__106253__a.length) {G__106253__a[G__106253__i] = arguments[G__106253__i + 0]; ++G__106253__i;}
  args = new cljs.core.IndexedSeq(G__106253__a,0);
} 
return G__106252__delegate.call(this,args);};
G__106252.cljs$lang$maxFixedArity = 0;
G__106252.cljs$lang$applyTo = (function (arglist__106254){
var args = cljs.core.seq(arglist__106254);
return G__106252__delegate(args);
});
G__106252.cljs$core$IFn$_invoke$arity$variadic = G__106252__delegate;
return G__106252;
})()
;

return null;
});
