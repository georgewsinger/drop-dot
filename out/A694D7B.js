goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__362007__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__362007 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__362008__i = 0, G__362008__a = new Array(arguments.length -  0);
while (G__362008__i < G__362008__a.length) {G__362008__a[G__362008__i] = arguments[G__362008__i + 0]; ++G__362008__i;}
  args = new cljs.core.IndexedSeq(G__362008__a,0);
} 
return G__362007__delegate.call(this,args);};
G__362007.cljs$lang$maxFixedArity = 0;
G__362007.cljs$lang$applyTo = (function (arglist__362009){
var args = cljs.core.seq(arglist__362009);
return G__362007__delegate(args);
});
G__362007.cljs$core$IFn$_invoke$arity$variadic = G__362007__delegate;
return G__362007;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__362010__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__362010 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__362011__i = 0, G__362011__a = new Array(arguments.length -  0);
while (G__362011__i < G__362011__a.length) {G__362011__a[G__362011__i] = arguments[G__362011__i + 0]; ++G__362011__i;}
  args = new cljs.core.IndexedSeq(G__362011__a,0);
} 
return G__362010__delegate.call(this,args);};
G__362010.cljs$lang$maxFixedArity = 0;
G__362010.cljs$lang$applyTo = (function (arglist__362012){
var args = cljs.core.seq(arglist__362012);
return G__362010__delegate(args);
});
G__362010.cljs$core$IFn$_invoke$arity$variadic = G__362010__delegate;
return G__362010;
})()
;

return null;
});
