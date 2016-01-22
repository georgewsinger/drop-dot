goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19294__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19294 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19295__i = 0, G__19295__a = new Array(arguments.length -  0);
while (G__19295__i < G__19295__a.length) {G__19295__a[G__19295__i] = arguments[G__19295__i + 0]; ++G__19295__i;}
  args = new cljs.core.IndexedSeq(G__19295__a,0);
} 
return G__19294__delegate.call(this,args);};
G__19294.cljs$lang$maxFixedArity = 0;
G__19294.cljs$lang$applyTo = (function (arglist__19296){
var args = cljs.core.seq(arglist__19296);
return G__19294__delegate(args);
});
G__19294.cljs$core$IFn$_invoke$arity$variadic = G__19294__delegate;
return G__19294;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19297__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19297 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19298__i = 0, G__19298__a = new Array(arguments.length -  0);
while (G__19298__i < G__19298__a.length) {G__19298__a[G__19298__i] = arguments[G__19298__i + 0]; ++G__19298__i;}
  args = new cljs.core.IndexedSeq(G__19298__a,0);
} 
return G__19297__delegate.call(this,args);};
G__19297.cljs$lang$maxFixedArity = 0;
G__19297.cljs$lang$applyTo = (function (arglist__19299){
var args = cljs.core.seq(arglist__19299);
return G__19297__delegate(args);
});
G__19297.cljs$core$IFn$_invoke$arity$variadic = G__19297__delegate;
return G__19297;
})()
;

return null;
});
