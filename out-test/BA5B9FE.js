goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__61295__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__61295 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61296__i = 0, G__61296__a = new Array(arguments.length -  0);
while (G__61296__i < G__61296__a.length) {G__61296__a[G__61296__i] = arguments[G__61296__i + 0]; ++G__61296__i;}
  args = new cljs.core.IndexedSeq(G__61296__a,0);
} 
return G__61295__delegate.call(this,args);};
G__61295.cljs$lang$maxFixedArity = 0;
G__61295.cljs$lang$applyTo = (function (arglist__61297){
var args = cljs.core.seq(arglist__61297);
return G__61295__delegate(args);
});
G__61295.cljs$core$IFn$_invoke$arity$variadic = G__61295__delegate;
return G__61295;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__61298__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__61298 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61299__i = 0, G__61299__a = new Array(arguments.length -  0);
while (G__61299__i < G__61299__a.length) {G__61299__a[G__61299__i] = arguments[G__61299__i + 0]; ++G__61299__i;}
  args = new cljs.core.IndexedSeq(G__61299__a,0);
} 
return G__61298__delegate.call(this,args);};
G__61298.cljs$lang$maxFixedArity = 0;
G__61298.cljs$lang$applyTo = (function (arglist__61300){
var args = cljs.core.seq(arglist__61300);
return G__61298__delegate(args);
});
G__61298.cljs$core$IFn$_invoke$arity$variadic = G__61298__delegate;
return G__61298;
})()
;

return null;
});
