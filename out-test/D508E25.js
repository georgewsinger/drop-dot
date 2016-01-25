goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20458__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20458 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20459__i = 0, G__20459__a = new Array(arguments.length -  0);
while (G__20459__i < G__20459__a.length) {G__20459__a[G__20459__i] = arguments[G__20459__i + 0]; ++G__20459__i;}
  args = new cljs.core.IndexedSeq(G__20459__a,0);
} 
return G__20458__delegate.call(this,args);};
G__20458.cljs$lang$maxFixedArity = 0;
G__20458.cljs$lang$applyTo = (function (arglist__20460){
var args = cljs.core.seq(arglist__20460);
return G__20458__delegate(args);
});
G__20458.cljs$core$IFn$_invoke$arity$variadic = G__20458__delegate;
return G__20458;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20461__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20461 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20462__i = 0, G__20462__a = new Array(arguments.length -  0);
while (G__20462__i < G__20462__a.length) {G__20462__a[G__20462__i] = arguments[G__20462__i + 0]; ++G__20462__i;}
  args = new cljs.core.IndexedSeq(G__20462__a,0);
} 
return G__20461__delegate.call(this,args);};
G__20461.cljs$lang$maxFixedArity = 0;
G__20461.cljs$lang$applyTo = (function (arglist__20463){
var args = cljs.core.seq(arglist__20463);
return G__20461__delegate(args);
});
G__20461.cljs$core$IFn$_invoke$arity$variadic = G__20461__delegate;
return G__20461;
})()
;

return null;
});
