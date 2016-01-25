goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13909__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13909 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13910__i = 0, G__13910__a = new Array(arguments.length -  0);
while (G__13910__i < G__13910__a.length) {G__13910__a[G__13910__i] = arguments[G__13910__i + 0]; ++G__13910__i;}
  args = new cljs.core.IndexedSeq(G__13910__a,0);
} 
return G__13909__delegate.call(this,args);};
G__13909.cljs$lang$maxFixedArity = 0;
G__13909.cljs$lang$applyTo = (function (arglist__13911){
var args = cljs.core.seq(arglist__13911);
return G__13909__delegate(args);
});
G__13909.cljs$core$IFn$_invoke$arity$variadic = G__13909__delegate;
return G__13909;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13912__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13912 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13913__i = 0, G__13913__a = new Array(arguments.length -  0);
while (G__13913__i < G__13913__a.length) {G__13913__a[G__13913__i] = arguments[G__13913__i + 0]; ++G__13913__i;}
  args = new cljs.core.IndexedSeq(G__13913__a,0);
} 
return G__13912__delegate.call(this,args);};
G__13912.cljs$lang$maxFixedArity = 0;
G__13912.cljs$lang$applyTo = (function (arglist__13914){
var args = cljs.core.seq(arglist__13914);
return G__13912__delegate(args);
});
G__13912.cljs$core$IFn$_invoke$arity$variadic = G__13912__delegate;
return G__13912;
})()
;

return null;
});
