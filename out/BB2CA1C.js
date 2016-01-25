goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__112872__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__112872 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__112873__i = 0, G__112873__a = new Array(arguments.length -  0);
while (G__112873__i < G__112873__a.length) {G__112873__a[G__112873__i] = arguments[G__112873__i + 0]; ++G__112873__i;}
  args = new cljs.core.IndexedSeq(G__112873__a,0);
} 
return G__112872__delegate.call(this,args);};
G__112872.cljs$lang$maxFixedArity = 0;
G__112872.cljs$lang$applyTo = (function (arglist__112874){
var args = cljs.core.seq(arglist__112874);
return G__112872__delegate(args);
});
G__112872.cljs$core$IFn$_invoke$arity$variadic = G__112872__delegate;
return G__112872;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__112875__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__112875 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__112876__i = 0, G__112876__a = new Array(arguments.length -  0);
while (G__112876__i < G__112876__a.length) {G__112876__a[G__112876__i] = arguments[G__112876__i + 0]; ++G__112876__i;}
  args = new cljs.core.IndexedSeq(G__112876__a,0);
} 
return G__112875__delegate.call(this,args);};
G__112875.cljs$lang$maxFixedArity = 0;
G__112875.cljs$lang$applyTo = (function (arglist__112877){
var args = cljs.core.seq(arglist__112877);
return G__112875__delegate(args);
});
G__112875.cljs$core$IFn$_invoke$arity$variadic = G__112875__delegate;
return G__112875;
})()
;

return null;
});
