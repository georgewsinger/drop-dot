goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__253411__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__253411 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__253412__i = 0, G__253412__a = new Array(arguments.length -  0);
while (G__253412__i < G__253412__a.length) {G__253412__a[G__253412__i] = arguments[G__253412__i + 0]; ++G__253412__i;}
  args = new cljs.core.IndexedSeq(G__253412__a,0);
} 
return G__253411__delegate.call(this,args);};
G__253411.cljs$lang$maxFixedArity = 0;
G__253411.cljs$lang$applyTo = (function (arglist__253413){
var args = cljs.core.seq(arglist__253413);
return G__253411__delegate(args);
});
G__253411.cljs$core$IFn$_invoke$arity$variadic = G__253411__delegate;
return G__253411;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__253414__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__253414 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__253415__i = 0, G__253415__a = new Array(arguments.length -  0);
while (G__253415__i < G__253415__a.length) {G__253415__a[G__253415__i] = arguments[G__253415__i + 0]; ++G__253415__i;}
  args = new cljs.core.IndexedSeq(G__253415__a,0);
} 
return G__253414__delegate.call(this,args);};
G__253414.cljs$lang$maxFixedArity = 0;
G__253414.cljs$lang$applyTo = (function (arglist__253416){
var args = cljs.core.seq(arglist__253416);
return G__253414__delegate(args);
});
G__253414.cljs$core$IFn$_invoke$arity$variadic = G__253414__delegate;
return G__253414;
})()
;

return null;
});
