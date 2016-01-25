goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__234917__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__234917 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__234918__i = 0, G__234918__a = new Array(arguments.length -  0);
while (G__234918__i < G__234918__a.length) {G__234918__a[G__234918__i] = arguments[G__234918__i + 0]; ++G__234918__i;}
  args = new cljs.core.IndexedSeq(G__234918__a,0);
} 
return G__234917__delegate.call(this,args);};
G__234917.cljs$lang$maxFixedArity = 0;
G__234917.cljs$lang$applyTo = (function (arglist__234919){
var args = cljs.core.seq(arglist__234919);
return G__234917__delegate(args);
});
G__234917.cljs$core$IFn$_invoke$arity$variadic = G__234917__delegate;
return G__234917;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__234920__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__234920 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__234921__i = 0, G__234921__a = new Array(arguments.length -  0);
while (G__234921__i < G__234921__a.length) {G__234921__a[G__234921__i] = arguments[G__234921__i + 0]; ++G__234921__i;}
  args = new cljs.core.IndexedSeq(G__234921__a,0);
} 
return G__234920__delegate.call(this,args);};
G__234920.cljs$lang$maxFixedArity = 0;
G__234920.cljs$lang$applyTo = (function (arglist__234922){
var args = cljs.core.seq(arglist__234922);
return G__234920__delegate(args);
});
G__234920.cljs$core$IFn$_invoke$arity$variadic = G__234920__delegate;
return G__234920;
})()
;

return null;
});
