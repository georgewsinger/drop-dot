goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9907__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9907 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9908__i = 0, G__9908__a = new Array(arguments.length -  0);
while (G__9908__i < G__9908__a.length) {G__9908__a[G__9908__i] = arguments[G__9908__i + 0]; ++G__9908__i;}
  args = new cljs.core.IndexedSeq(G__9908__a,0);
} 
return G__9907__delegate.call(this,args);};
G__9907.cljs$lang$maxFixedArity = 0;
G__9907.cljs$lang$applyTo = (function (arglist__9909){
var args = cljs.core.seq(arglist__9909);
return G__9907__delegate(args);
});
G__9907.cljs$core$IFn$_invoke$arity$variadic = G__9907__delegate;
return G__9907;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9910__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9910 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9911__i = 0, G__9911__a = new Array(arguments.length -  0);
while (G__9911__i < G__9911__a.length) {G__9911__a[G__9911__i] = arguments[G__9911__i + 0]; ++G__9911__i;}
  args = new cljs.core.IndexedSeq(G__9911__a,0);
} 
return G__9910__delegate.call(this,args);};
G__9910.cljs$lang$maxFixedArity = 0;
G__9910.cljs$lang$applyTo = (function (arglist__9912){
var args = cljs.core.seq(arglist__9912);
return G__9910__delegate(args);
});
G__9910.cljs$core$IFn$_invoke$arity$variadic = G__9910__delegate;
return G__9910;
})()
;

return null;
});
