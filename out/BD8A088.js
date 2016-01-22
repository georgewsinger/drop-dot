goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26482__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26482 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26483__i = 0, G__26483__a = new Array(arguments.length -  0);
while (G__26483__i < G__26483__a.length) {G__26483__a[G__26483__i] = arguments[G__26483__i + 0]; ++G__26483__i;}
  args = new cljs.core.IndexedSeq(G__26483__a,0);
} 
return G__26482__delegate.call(this,args);};
G__26482.cljs$lang$maxFixedArity = 0;
G__26482.cljs$lang$applyTo = (function (arglist__26484){
var args = cljs.core.seq(arglist__26484);
return G__26482__delegate(args);
});
G__26482.cljs$core$IFn$_invoke$arity$variadic = G__26482__delegate;
return G__26482;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26485__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26485 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26486__i = 0, G__26486__a = new Array(arguments.length -  0);
while (G__26486__i < G__26486__a.length) {G__26486__a[G__26486__i] = arguments[G__26486__i + 0]; ++G__26486__i;}
  args = new cljs.core.IndexedSeq(G__26486__a,0);
} 
return G__26485__delegate.call(this,args);};
G__26485.cljs$lang$maxFixedArity = 0;
G__26485.cljs$lang$applyTo = (function (arglist__26487){
var args = cljs.core.seq(arglist__26487);
return G__26485__delegate(args);
});
G__26485.cljs$core$IFn$_invoke$arity$variadic = G__26485__delegate;
return G__26485;
})()
;

return null;
});
