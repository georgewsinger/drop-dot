goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__63215__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__63215 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63216__i = 0, G__63216__a = new Array(arguments.length -  0);
while (G__63216__i < G__63216__a.length) {G__63216__a[G__63216__i] = arguments[G__63216__i + 0]; ++G__63216__i;}
  args = new cljs.core.IndexedSeq(G__63216__a,0);
} 
return G__63215__delegate.call(this,args);};
G__63215.cljs$lang$maxFixedArity = 0;
G__63215.cljs$lang$applyTo = (function (arglist__63217){
var args = cljs.core.seq(arglist__63217);
return G__63215__delegate(args);
});
G__63215.cljs$core$IFn$_invoke$arity$variadic = G__63215__delegate;
return G__63215;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__63218__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__63218 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63219__i = 0, G__63219__a = new Array(arguments.length -  0);
while (G__63219__i < G__63219__a.length) {G__63219__a[G__63219__i] = arguments[G__63219__i + 0]; ++G__63219__i;}
  args = new cljs.core.IndexedSeq(G__63219__a,0);
} 
return G__63218__delegate.call(this,args);};
G__63218.cljs$lang$maxFixedArity = 0;
G__63218.cljs$lang$applyTo = (function (arglist__63220){
var args = cljs.core.seq(arglist__63220);
return G__63218__delegate(args);
});
G__63218.cljs$core$IFn$_invoke$arity$variadic = G__63218__delegate;
return G__63218;
})()
;

return null;
});
