goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__41909__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__41909 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41910__i = 0, G__41910__a = new Array(arguments.length -  0);
while (G__41910__i < G__41910__a.length) {G__41910__a[G__41910__i] = arguments[G__41910__i + 0]; ++G__41910__i;}
  args = new cljs.core.IndexedSeq(G__41910__a,0);
} 
return G__41909__delegate.call(this,args);};
G__41909.cljs$lang$maxFixedArity = 0;
G__41909.cljs$lang$applyTo = (function (arglist__41911){
var args = cljs.core.seq(arglist__41911);
return G__41909__delegate(args);
});
G__41909.cljs$core$IFn$_invoke$arity$variadic = G__41909__delegate;
return G__41909;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__41912__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__41912 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41913__i = 0, G__41913__a = new Array(arguments.length -  0);
while (G__41913__i < G__41913__a.length) {G__41913__a[G__41913__i] = arguments[G__41913__i + 0]; ++G__41913__i;}
  args = new cljs.core.IndexedSeq(G__41913__a,0);
} 
return G__41912__delegate.call(this,args);};
G__41912.cljs$lang$maxFixedArity = 0;
G__41912.cljs$lang$applyTo = (function (arglist__41914){
var args = cljs.core.seq(arglist__41914);
return G__41912__delegate(args);
});
G__41912.cljs$core$IFn$_invoke$arity$variadic = G__41912__delegate;
return G__41912;
})()
;

return null;
});
