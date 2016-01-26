goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__288883__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__288883 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__288884__i = 0, G__288884__a = new Array(arguments.length -  0);
while (G__288884__i < G__288884__a.length) {G__288884__a[G__288884__i] = arguments[G__288884__i + 0]; ++G__288884__i;}
  args = new cljs.core.IndexedSeq(G__288884__a,0);
} 
return G__288883__delegate.call(this,args);};
G__288883.cljs$lang$maxFixedArity = 0;
G__288883.cljs$lang$applyTo = (function (arglist__288885){
var args = cljs.core.seq(arglist__288885);
return G__288883__delegate(args);
});
G__288883.cljs$core$IFn$_invoke$arity$variadic = G__288883__delegate;
return G__288883;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__288886__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__288886 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__288887__i = 0, G__288887__a = new Array(arguments.length -  0);
while (G__288887__i < G__288887__a.length) {G__288887__a[G__288887__i] = arguments[G__288887__i + 0]; ++G__288887__i;}
  args = new cljs.core.IndexedSeq(G__288887__a,0);
} 
return G__288886__delegate.call(this,args);};
G__288886.cljs$lang$maxFixedArity = 0;
G__288886.cljs$lang$applyTo = (function (arglist__288888){
var args = cljs.core.seq(arglist__288888);
return G__288886__delegate(args);
});
G__288886.cljs$core$IFn$_invoke$arity$variadic = G__288886__delegate;
return G__288886;
})()
;

return null;
});
