goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__70249__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__70249 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__70250__i = 0, G__70250__a = new Array(arguments.length -  0);
while (G__70250__i < G__70250__a.length) {G__70250__a[G__70250__i] = arguments[G__70250__i + 0]; ++G__70250__i;}
  args = new cljs.core.IndexedSeq(G__70250__a,0);
} 
return G__70249__delegate.call(this,args);};
G__70249.cljs$lang$maxFixedArity = 0;
G__70249.cljs$lang$applyTo = (function (arglist__70251){
var args = cljs.core.seq(arglist__70251);
return G__70249__delegate(args);
});
G__70249.cljs$core$IFn$_invoke$arity$variadic = G__70249__delegate;
return G__70249;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__70252__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__70252 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__70253__i = 0, G__70253__a = new Array(arguments.length -  0);
while (G__70253__i < G__70253__a.length) {G__70253__a[G__70253__i] = arguments[G__70253__i + 0]; ++G__70253__i;}
  args = new cljs.core.IndexedSeq(G__70253__a,0);
} 
return G__70252__delegate.call(this,args);};
G__70252.cljs$lang$maxFixedArity = 0;
G__70252.cljs$lang$applyTo = (function (arglist__70254){
var args = cljs.core.seq(arglist__70254);
return G__70252__delegate(args);
});
G__70252.cljs$core$IFn$_invoke$arity$variadic = G__70252__delegate;
return G__70252;
})()
;

return null;
});
