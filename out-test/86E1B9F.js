goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30099__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__30099 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30100__i = 0, G__30100__a = new Array(arguments.length -  0);
while (G__30100__i < G__30100__a.length) {G__30100__a[G__30100__i] = arguments[G__30100__i + 0]; ++G__30100__i;}
  args = new cljs.core.IndexedSeq(G__30100__a,0);
} 
return G__30099__delegate.call(this,args);};
G__30099.cljs$lang$maxFixedArity = 0;
G__30099.cljs$lang$applyTo = (function (arglist__30101){
var args = cljs.core.seq(arglist__30101);
return G__30099__delegate(args);
});
G__30099.cljs$core$IFn$_invoke$arity$variadic = G__30099__delegate;
return G__30099;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__30102__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__30102 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30103__i = 0, G__30103__a = new Array(arguments.length -  0);
while (G__30103__i < G__30103__a.length) {G__30103__a[G__30103__i] = arguments[G__30103__i + 0]; ++G__30103__i;}
  args = new cljs.core.IndexedSeq(G__30103__a,0);
} 
return G__30102__delegate.call(this,args);};
G__30102.cljs$lang$maxFixedArity = 0;
G__30102.cljs$lang$applyTo = (function (arglist__30104){
var args = cljs.core.seq(arglist__30104);
return G__30102__delegate(args);
});
G__30102.cljs$core$IFn$_invoke$arity$variadic = G__30102__delegate;
return G__30102;
})()
;

return null;
});
