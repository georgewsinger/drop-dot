goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30986__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__30986 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30987__i = 0, G__30987__a = new Array(arguments.length -  0);
while (G__30987__i < G__30987__a.length) {G__30987__a[G__30987__i] = arguments[G__30987__i + 0]; ++G__30987__i;}
  args = new cljs.core.IndexedSeq(G__30987__a,0);
} 
return G__30986__delegate.call(this,args);};
G__30986.cljs$lang$maxFixedArity = 0;
G__30986.cljs$lang$applyTo = (function (arglist__30988){
var args = cljs.core.seq(arglist__30988);
return G__30986__delegate(args);
});
G__30986.cljs$core$IFn$_invoke$arity$variadic = G__30986__delegate;
return G__30986;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__30989__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__30989 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30990__i = 0, G__30990__a = new Array(arguments.length -  0);
while (G__30990__i < G__30990__a.length) {G__30990__a[G__30990__i] = arguments[G__30990__i + 0]; ++G__30990__i;}
  args = new cljs.core.IndexedSeq(G__30990__a,0);
} 
return G__30989__delegate.call(this,args);};
G__30989.cljs$lang$maxFixedArity = 0;
G__30989.cljs$lang$applyTo = (function (arglist__30991){
var args = cljs.core.seq(arglist__30991);
return G__30989__delegate(args);
});
G__30989.cljs$core$IFn$_invoke$arity$variadic = G__30989__delegate;
return G__30989;
})()
;

return null;
});
