goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14251__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14251 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14252__i = 0, G__14252__a = new Array(arguments.length -  0);
while (G__14252__i < G__14252__a.length) {G__14252__a[G__14252__i] = arguments[G__14252__i + 0]; ++G__14252__i;}
  args = new cljs.core.IndexedSeq(G__14252__a,0);
} 
return G__14251__delegate.call(this,args);};
G__14251.cljs$lang$maxFixedArity = 0;
G__14251.cljs$lang$applyTo = (function (arglist__14253){
var args = cljs.core.seq(arglist__14253);
return G__14251__delegate(args);
});
G__14251.cljs$core$IFn$_invoke$arity$variadic = G__14251__delegate;
return G__14251;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14254__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14254 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14255__i = 0, G__14255__a = new Array(arguments.length -  0);
while (G__14255__i < G__14255__a.length) {G__14255__a[G__14255__i] = arguments[G__14255__i + 0]; ++G__14255__i;}
  args = new cljs.core.IndexedSeq(G__14255__a,0);
} 
return G__14254__delegate.call(this,args);};
G__14254.cljs$lang$maxFixedArity = 0;
G__14254.cljs$lang$applyTo = (function (arglist__14256){
var args = cljs.core.seq(arglist__14256);
return G__14254__delegate(args);
});
G__14254.cljs$core$IFn$_invoke$arity$variadic = G__14254__delegate;
return G__14254;
})()
;

return null;
});
