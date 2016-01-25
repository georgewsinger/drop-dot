goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22379__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22379 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22380__i = 0, G__22380__a = new Array(arguments.length -  0);
while (G__22380__i < G__22380__a.length) {G__22380__a[G__22380__i] = arguments[G__22380__i + 0]; ++G__22380__i;}
  args = new cljs.core.IndexedSeq(G__22380__a,0);
} 
return G__22379__delegate.call(this,args);};
G__22379.cljs$lang$maxFixedArity = 0;
G__22379.cljs$lang$applyTo = (function (arglist__22381){
var args = cljs.core.seq(arglist__22381);
return G__22379__delegate(args);
});
G__22379.cljs$core$IFn$_invoke$arity$variadic = G__22379__delegate;
return G__22379;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22382__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22382 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22383__i = 0, G__22383__a = new Array(arguments.length -  0);
while (G__22383__i < G__22383__a.length) {G__22383__a[G__22383__i] = arguments[G__22383__i + 0]; ++G__22383__i;}
  args = new cljs.core.IndexedSeq(G__22383__a,0);
} 
return G__22382__delegate.call(this,args);};
G__22382.cljs$lang$maxFixedArity = 0;
G__22382.cljs$lang$applyTo = (function (arglist__22384){
var args = cljs.core.seq(arglist__22384);
return G__22382__delegate(args);
});
G__22382.cljs$core$IFn$_invoke$arity$variadic = G__22382__delegate;
return G__22382;
})()
;

return null;
});
