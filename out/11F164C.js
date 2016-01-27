goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__303558__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__303558 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__303559__i = 0, G__303559__a = new Array(arguments.length -  0);
while (G__303559__i < G__303559__a.length) {G__303559__a[G__303559__i] = arguments[G__303559__i + 0]; ++G__303559__i;}
  args = new cljs.core.IndexedSeq(G__303559__a,0);
} 
return G__303558__delegate.call(this,args);};
G__303558.cljs$lang$maxFixedArity = 0;
G__303558.cljs$lang$applyTo = (function (arglist__303560){
var args = cljs.core.seq(arglist__303560);
return G__303558__delegate(args);
});
G__303558.cljs$core$IFn$_invoke$arity$variadic = G__303558__delegate;
return G__303558;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__303561__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__303561 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__303562__i = 0, G__303562__a = new Array(arguments.length -  0);
while (G__303562__i < G__303562__a.length) {G__303562__a[G__303562__i] = arguments[G__303562__i + 0]; ++G__303562__i;}
  args = new cljs.core.IndexedSeq(G__303562__a,0);
} 
return G__303561__delegate.call(this,args);};
G__303561.cljs$lang$maxFixedArity = 0;
G__303561.cljs$lang$applyTo = (function (arglist__303563){
var args = cljs.core.seq(arglist__303563);
return G__303561__delegate(args);
});
G__303561.cljs$core$IFn$_invoke$arity$variadic = G__303561__delegate;
return G__303561;
})()
;

return null;
});
