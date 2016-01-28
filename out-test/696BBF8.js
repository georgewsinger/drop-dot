goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26959__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26959 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26960__i = 0, G__26960__a = new Array(arguments.length -  0);
while (G__26960__i < G__26960__a.length) {G__26960__a[G__26960__i] = arguments[G__26960__i + 0]; ++G__26960__i;}
  args = new cljs.core.IndexedSeq(G__26960__a,0);
} 
return G__26959__delegate.call(this,args);};
G__26959.cljs$lang$maxFixedArity = 0;
G__26959.cljs$lang$applyTo = (function (arglist__26961){
var args = cljs.core.seq(arglist__26961);
return G__26959__delegate(args);
});
G__26959.cljs$core$IFn$_invoke$arity$variadic = G__26959__delegate;
return G__26959;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26962__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26962 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26963__i = 0, G__26963__a = new Array(arguments.length -  0);
while (G__26963__i < G__26963__a.length) {G__26963__a[G__26963__i] = arguments[G__26963__i + 0]; ++G__26963__i;}
  args = new cljs.core.IndexedSeq(G__26963__a,0);
} 
return G__26962__delegate.call(this,args);};
G__26962.cljs$lang$maxFixedArity = 0;
G__26962.cljs$lang$applyTo = (function (arglist__26964){
var args = cljs.core.seq(arglist__26964);
return G__26962__delegate(args);
});
G__26962.cljs$core$IFn$_invoke$arity$variadic = G__26962__delegate;
return G__26962;
})()
;

return null;
});
