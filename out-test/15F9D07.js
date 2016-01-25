goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19604__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19604 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19605__i = 0, G__19605__a = new Array(arguments.length -  0);
while (G__19605__i < G__19605__a.length) {G__19605__a[G__19605__i] = arguments[G__19605__i + 0]; ++G__19605__i;}
  args = new cljs.core.IndexedSeq(G__19605__a,0);
} 
return G__19604__delegate.call(this,args);};
G__19604.cljs$lang$maxFixedArity = 0;
G__19604.cljs$lang$applyTo = (function (arglist__19606){
var args = cljs.core.seq(arglist__19606);
return G__19604__delegate(args);
});
G__19604.cljs$core$IFn$_invoke$arity$variadic = G__19604__delegate;
return G__19604;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19607__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19607 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19608__i = 0, G__19608__a = new Array(arguments.length -  0);
while (G__19608__i < G__19608__a.length) {G__19608__a[G__19608__i] = arguments[G__19608__i + 0]; ++G__19608__i;}
  args = new cljs.core.IndexedSeq(G__19608__a,0);
} 
return G__19607__delegate.call(this,args);};
G__19607.cljs$lang$maxFixedArity = 0;
G__19607.cljs$lang$applyTo = (function (arglist__19609){
var args = cljs.core.seq(arglist__19609);
return G__19607__delegate(args);
});
G__19607.cljs$core$IFn$_invoke$arity$variadic = G__19607__delegate;
return G__19607;
})()
;

return null;
});
