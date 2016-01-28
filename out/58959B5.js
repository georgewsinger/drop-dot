goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__369909__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__369909 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__369910__i = 0, G__369910__a = new Array(arguments.length -  0);
while (G__369910__i < G__369910__a.length) {G__369910__a[G__369910__i] = arguments[G__369910__i + 0]; ++G__369910__i;}
  args = new cljs.core.IndexedSeq(G__369910__a,0);
} 
return G__369909__delegate.call(this,args);};
G__369909.cljs$lang$maxFixedArity = 0;
G__369909.cljs$lang$applyTo = (function (arglist__369911){
var args = cljs.core.seq(arglist__369911);
return G__369909__delegate(args);
});
G__369909.cljs$core$IFn$_invoke$arity$variadic = G__369909__delegate;
return G__369909;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__369912__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__369912 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__369913__i = 0, G__369913__a = new Array(arguments.length -  0);
while (G__369913__i < G__369913__a.length) {G__369913__a[G__369913__i] = arguments[G__369913__i + 0]; ++G__369913__i;}
  args = new cljs.core.IndexedSeq(G__369913__a,0);
} 
return G__369912__delegate.call(this,args);};
G__369912.cljs$lang$maxFixedArity = 0;
G__369912.cljs$lang$applyTo = (function (arglist__369914){
var args = cljs.core.seq(arglist__369914);
return G__369912__delegate(args);
});
G__369912.cljs$core$IFn$_invoke$arity$variadic = G__369912__delegate;
return G__369912;
})()
;

return null;
});
