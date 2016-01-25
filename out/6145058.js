goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__268985__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__268985 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__268986__i = 0, G__268986__a = new Array(arguments.length -  0);
while (G__268986__i < G__268986__a.length) {G__268986__a[G__268986__i] = arguments[G__268986__i + 0]; ++G__268986__i;}
  args = new cljs.core.IndexedSeq(G__268986__a,0);
} 
return G__268985__delegate.call(this,args);};
G__268985.cljs$lang$maxFixedArity = 0;
G__268985.cljs$lang$applyTo = (function (arglist__268987){
var args = cljs.core.seq(arglist__268987);
return G__268985__delegate(args);
});
G__268985.cljs$core$IFn$_invoke$arity$variadic = G__268985__delegate;
return G__268985;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__268988__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__268988 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__268989__i = 0, G__268989__a = new Array(arguments.length -  0);
while (G__268989__i < G__268989__a.length) {G__268989__a[G__268989__i] = arguments[G__268989__i + 0]; ++G__268989__i;}
  args = new cljs.core.IndexedSeq(G__268989__a,0);
} 
return G__268988__delegate.call(this,args);};
G__268988.cljs$lang$maxFixedArity = 0;
G__268988.cljs$lang$applyTo = (function (arglist__268990){
var args = cljs.core.seq(arglist__268990);
return G__268988__delegate(args);
});
G__268988.cljs$core$IFn$_invoke$arity$variadic = G__268988__delegate;
return G__268988;
})()
;

return null;
});
