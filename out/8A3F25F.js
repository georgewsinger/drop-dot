goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__331920__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__331920 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__331921__i = 0, G__331921__a = new Array(arguments.length -  0);
while (G__331921__i < G__331921__a.length) {G__331921__a[G__331921__i] = arguments[G__331921__i + 0]; ++G__331921__i;}
  args = new cljs.core.IndexedSeq(G__331921__a,0);
} 
return G__331920__delegate.call(this,args);};
G__331920.cljs$lang$maxFixedArity = 0;
G__331920.cljs$lang$applyTo = (function (arglist__331922){
var args = cljs.core.seq(arglist__331922);
return G__331920__delegate(args);
});
G__331920.cljs$core$IFn$_invoke$arity$variadic = G__331920__delegate;
return G__331920;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__331923__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__331923 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__331924__i = 0, G__331924__a = new Array(arguments.length -  0);
while (G__331924__i < G__331924__a.length) {G__331924__a[G__331924__i] = arguments[G__331924__i + 0]; ++G__331924__i;}
  args = new cljs.core.IndexedSeq(G__331924__a,0);
} 
return G__331923__delegate.call(this,args);};
G__331923.cljs$lang$maxFixedArity = 0;
G__331923.cljs$lang$applyTo = (function (arglist__331925){
var args = cljs.core.seq(arglist__331925);
return G__331923__delegate(args);
});
G__331923.cljs$core$IFn$_invoke$arity$variadic = G__331923__delegate;
return G__331923;
})()
;

return null;
});
