goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__294528__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__294528 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__294529__i = 0, G__294529__a = new Array(arguments.length -  0);
while (G__294529__i < G__294529__a.length) {G__294529__a[G__294529__i] = arguments[G__294529__i + 0]; ++G__294529__i;}
  args = new cljs.core.IndexedSeq(G__294529__a,0);
} 
return G__294528__delegate.call(this,args);};
G__294528.cljs$lang$maxFixedArity = 0;
G__294528.cljs$lang$applyTo = (function (arglist__294530){
var args = cljs.core.seq(arglist__294530);
return G__294528__delegate(args);
});
G__294528.cljs$core$IFn$_invoke$arity$variadic = G__294528__delegate;
return G__294528;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__294531__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__294531 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__294532__i = 0, G__294532__a = new Array(arguments.length -  0);
while (G__294532__i < G__294532__a.length) {G__294532__a[G__294532__i] = arguments[G__294532__i + 0]; ++G__294532__i;}
  args = new cljs.core.IndexedSeq(G__294532__a,0);
} 
return G__294531__delegate.call(this,args);};
G__294531.cljs$lang$maxFixedArity = 0;
G__294531.cljs$lang$applyTo = (function (arglist__294533){
var args = cljs.core.seq(arglist__294533);
return G__294531__delegate(args);
});
G__294531.cljs$core$IFn$_invoke$arity$variadic = G__294531__delegate;
return G__294531;
})()
;

return null;
});
