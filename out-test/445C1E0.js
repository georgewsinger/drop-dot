goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__72876__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__72876 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__72877__i = 0, G__72877__a = new Array(arguments.length -  0);
while (G__72877__i < G__72877__a.length) {G__72877__a[G__72877__i] = arguments[G__72877__i + 0]; ++G__72877__i;}
  args = new cljs.core.IndexedSeq(G__72877__a,0);
} 
return G__72876__delegate.call(this,args);};
G__72876.cljs$lang$maxFixedArity = 0;
G__72876.cljs$lang$applyTo = (function (arglist__72878){
var args = cljs.core.seq(arglist__72878);
return G__72876__delegate(args);
});
G__72876.cljs$core$IFn$_invoke$arity$variadic = G__72876__delegate;
return G__72876;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__72879__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__72879 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__72880__i = 0, G__72880__a = new Array(arguments.length -  0);
while (G__72880__i < G__72880__a.length) {G__72880__a[G__72880__i] = arguments[G__72880__i + 0]; ++G__72880__i;}
  args = new cljs.core.IndexedSeq(G__72880__a,0);
} 
return G__72879__delegate.call(this,args);};
G__72879.cljs$lang$maxFixedArity = 0;
G__72879.cljs$lang$applyTo = (function (arglist__72881){
var args = cljs.core.seq(arglist__72881);
return G__72879__delegate(args);
});
G__72879.cljs$core$IFn$_invoke$arity$variadic = G__72879__delegate;
return G__72879;
})()
;

return null;
});
