goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25998__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__25998 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25999__i = 0, G__25999__a = new Array(arguments.length -  0);
while (G__25999__i < G__25999__a.length) {G__25999__a[G__25999__i] = arguments[G__25999__i + 0]; ++G__25999__i;}
  args = new cljs.core.IndexedSeq(G__25999__a,0);
} 
return G__25998__delegate.call(this,args);};
G__25998.cljs$lang$maxFixedArity = 0;
G__25998.cljs$lang$applyTo = (function (arglist__26000){
var args = cljs.core.seq(arglist__26000);
return G__25998__delegate(args);
});
G__25998.cljs$core$IFn$_invoke$arity$variadic = G__25998__delegate;
return G__25998;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26001__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26001 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26002__i = 0, G__26002__a = new Array(arguments.length -  0);
while (G__26002__i < G__26002__a.length) {G__26002__a[G__26002__i] = arguments[G__26002__i + 0]; ++G__26002__i;}
  args = new cljs.core.IndexedSeq(G__26002__a,0);
} 
return G__26001__delegate.call(this,args);};
G__26001.cljs$lang$maxFixedArity = 0;
G__26001.cljs$lang$applyTo = (function (arglist__26003){
var args = cljs.core.seq(arglist__26003);
return G__26001__delegate(args);
});
G__26001.cljs$core$IFn$_invoke$arity$variadic = G__26001__delegate;
return G__26001;
})()
;

return null;
});
