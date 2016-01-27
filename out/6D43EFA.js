goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__352527__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__352527 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__352528__i = 0, G__352528__a = new Array(arguments.length -  0);
while (G__352528__i < G__352528__a.length) {G__352528__a[G__352528__i] = arguments[G__352528__i + 0]; ++G__352528__i;}
  args = new cljs.core.IndexedSeq(G__352528__a,0);
} 
return G__352527__delegate.call(this,args);};
G__352527.cljs$lang$maxFixedArity = 0;
G__352527.cljs$lang$applyTo = (function (arglist__352529){
var args = cljs.core.seq(arglist__352529);
return G__352527__delegate(args);
});
G__352527.cljs$core$IFn$_invoke$arity$variadic = G__352527__delegate;
return G__352527;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__352530__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__352530 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__352531__i = 0, G__352531__a = new Array(arguments.length -  0);
while (G__352531__i < G__352531__a.length) {G__352531__a[G__352531__i] = arguments[G__352531__i + 0]; ++G__352531__i;}
  args = new cljs.core.IndexedSeq(G__352531__a,0);
} 
return G__352530__delegate.call(this,args);};
G__352530.cljs$lang$maxFixedArity = 0;
G__352530.cljs$lang$applyTo = (function (arglist__352532){
var args = cljs.core.seq(arglist__352532);
return G__352530__delegate(args);
});
G__352530.cljs$core$IFn$_invoke$arity$variadic = G__352530__delegate;
return G__352530;
})()
;

return null;
});
