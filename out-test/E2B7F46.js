goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21061__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21061 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21062__i = 0, G__21062__a = new Array(arguments.length -  0);
while (G__21062__i < G__21062__a.length) {G__21062__a[G__21062__i] = arguments[G__21062__i + 0]; ++G__21062__i;}
  args = new cljs.core.IndexedSeq(G__21062__a,0);
} 
return G__21061__delegate.call(this,args);};
G__21061.cljs$lang$maxFixedArity = 0;
G__21061.cljs$lang$applyTo = (function (arglist__21063){
var args = cljs.core.seq(arglist__21063);
return G__21061__delegate(args);
});
G__21061.cljs$core$IFn$_invoke$arity$variadic = G__21061__delegate;
return G__21061;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21064__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21064 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21065__i = 0, G__21065__a = new Array(arguments.length -  0);
while (G__21065__i < G__21065__a.length) {G__21065__a[G__21065__i] = arguments[G__21065__i + 0]; ++G__21065__i;}
  args = new cljs.core.IndexedSeq(G__21065__a,0);
} 
return G__21064__delegate.call(this,args);};
G__21064.cljs$lang$maxFixedArity = 0;
G__21064.cljs$lang$applyTo = (function (arglist__21066){
var args = cljs.core.seq(arglist__21066);
return G__21064__delegate(args);
});
G__21064.cljs$core$IFn$_invoke$arity$variadic = G__21064__delegate;
return G__21064;
})()
;

return null;
});
