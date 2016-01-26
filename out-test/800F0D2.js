goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38688__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38688 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38689__i = 0, G__38689__a = new Array(arguments.length -  0);
while (G__38689__i < G__38689__a.length) {G__38689__a[G__38689__i] = arguments[G__38689__i + 0]; ++G__38689__i;}
  args = new cljs.core.IndexedSeq(G__38689__a,0);
} 
return G__38688__delegate.call(this,args);};
G__38688.cljs$lang$maxFixedArity = 0;
G__38688.cljs$lang$applyTo = (function (arglist__38690){
var args = cljs.core.seq(arglist__38690);
return G__38688__delegate(args);
});
G__38688.cljs$core$IFn$_invoke$arity$variadic = G__38688__delegate;
return G__38688;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38691__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38691 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38692__i = 0, G__38692__a = new Array(arguments.length -  0);
while (G__38692__i < G__38692__a.length) {G__38692__a[G__38692__i] = arguments[G__38692__i + 0]; ++G__38692__i;}
  args = new cljs.core.IndexedSeq(G__38692__a,0);
} 
return G__38691__delegate.call(this,args);};
G__38691.cljs$lang$maxFixedArity = 0;
G__38691.cljs$lang$applyTo = (function (arglist__38693){
var args = cljs.core.seq(arglist__38693);
return G__38691__delegate(args);
});
G__38691.cljs$core$IFn$_invoke$arity$variadic = G__38691__delegate;
return G__38691;
})()
;

return null;
});
