goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__381685__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__381685 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__381686__i = 0, G__381686__a = new Array(arguments.length -  0);
while (G__381686__i < G__381686__a.length) {G__381686__a[G__381686__i] = arguments[G__381686__i + 0]; ++G__381686__i;}
  args = new cljs.core.IndexedSeq(G__381686__a,0);
} 
return G__381685__delegate.call(this,args);};
G__381685.cljs$lang$maxFixedArity = 0;
G__381685.cljs$lang$applyTo = (function (arglist__381687){
var args = cljs.core.seq(arglist__381687);
return G__381685__delegate(args);
});
G__381685.cljs$core$IFn$_invoke$arity$variadic = G__381685__delegate;
return G__381685;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__381688__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__381688 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__381689__i = 0, G__381689__a = new Array(arguments.length -  0);
while (G__381689__i < G__381689__a.length) {G__381689__a[G__381689__i] = arguments[G__381689__i + 0]; ++G__381689__i;}
  args = new cljs.core.IndexedSeq(G__381689__a,0);
} 
return G__381688__delegate.call(this,args);};
G__381688.cljs$lang$maxFixedArity = 0;
G__381688.cljs$lang$applyTo = (function (arglist__381690){
var args = cljs.core.seq(arglist__381690);
return G__381688__delegate(args);
});
G__381688.cljs$core$IFn$_invoke$arity$variadic = G__381688__delegate;
return G__381688;
})()
;

return null;
});
