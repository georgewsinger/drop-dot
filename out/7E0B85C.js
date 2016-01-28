goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__374612__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__374612 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__374613__i = 0, G__374613__a = new Array(arguments.length -  0);
while (G__374613__i < G__374613__a.length) {G__374613__a[G__374613__i] = arguments[G__374613__i + 0]; ++G__374613__i;}
  args = new cljs.core.IndexedSeq(G__374613__a,0);
} 
return G__374612__delegate.call(this,args);};
G__374612.cljs$lang$maxFixedArity = 0;
G__374612.cljs$lang$applyTo = (function (arglist__374614){
var args = cljs.core.seq(arglist__374614);
return G__374612__delegate(args);
});
G__374612.cljs$core$IFn$_invoke$arity$variadic = G__374612__delegate;
return G__374612;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__374615__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__374615 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__374616__i = 0, G__374616__a = new Array(arguments.length -  0);
while (G__374616__i < G__374616__a.length) {G__374616__a[G__374616__i] = arguments[G__374616__i + 0]; ++G__374616__i;}
  args = new cljs.core.IndexedSeq(G__374616__a,0);
} 
return G__374615__delegate.call(this,args);};
G__374615.cljs$lang$maxFixedArity = 0;
G__374615.cljs$lang$applyTo = (function (arglist__374617){
var args = cljs.core.seq(arglist__374617);
return G__374615__delegate(args);
});
G__374615.cljs$core$IFn$_invoke$arity$variadic = G__374615__delegate;
return G__374615;
})()
;

return null;
});
