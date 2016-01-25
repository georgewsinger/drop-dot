goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22819__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22819 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22820__i = 0, G__22820__a = new Array(arguments.length -  0);
while (G__22820__i < G__22820__a.length) {G__22820__a[G__22820__i] = arguments[G__22820__i + 0]; ++G__22820__i;}
  args = new cljs.core.IndexedSeq(G__22820__a,0);
} 
return G__22819__delegate.call(this,args);};
G__22819.cljs$lang$maxFixedArity = 0;
G__22819.cljs$lang$applyTo = (function (arglist__22821){
var args = cljs.core.seq(arglist__22821);
return G__22819__delegate(args);
});
G__22819.cljs$core$IFn$_invoke$arity$variadic = G__22819__delegate;
return G__22819;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22822__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22822 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22823__i = 0, G__22823__a = new Array(arguments.length -  0);
while (G__22823__i < G__22823__a.length) {G__22823__a[G__22823__i] = arguments[G__22823__i + 0]; ++G__22823__i;}
  args = new cljs.core.IndexedSeq(G__22823__a,0);
} 
return G__22822__delegate.call(this,args);};
G__22822.cljs$lang$maxFixedArity = 0;
G__22822.cljs$lang$applyTo = (function (arglist__22824){
var args = cljs.core.seq(arglist__22824);
return G__22822__delegate(args);
});
G__22822.cljs$core$IFn$_invoke$arity$variadic = G__22822__delegate;
return G__22822;
})()
;

return null;
});
