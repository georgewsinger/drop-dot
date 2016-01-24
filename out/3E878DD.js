goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__61636__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__61636 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61637__i = 0, G__61637__a = new Array(arguments.length -  0);
while (G__61637__i < G__61637__a.length) {G__61637__a[G__61637__i] = arguments[G__61637__i + 0]; ++G__61637__i;}
  args = new cljs.core.IndexedSeq(G__61637__a,0);
} 
return G__61636__delegate.call(this,args);};
G__61636.cljs$lang$maxFixedArity = 0;
G__61636.cljs$lang$applyTo = (function (arglist__61638){
var args = cljs.core.seq(arglist__61638);
return G__61636__delegate(args);
});
G__61636.cljs$core$IFn$_invoke$arity$variadic = G__61636__delegate;
return G__61636;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__61639__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__61639 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61640__i = 0, G__61640__a = new Array(arguments.length -  0);
while (G__61640__i < G__61640__a.length) {G__61640__a[G__61640__i] = arguments[G__61640__i + 0]; ++G__61640__i;}
  args = new cljs.core.IndexedSeq(G__61640__a,0);
} 
return G__61639__delegate.call(this,args);};
G__61639.cljs$lang$maxFixedArity = 0;
G__61639.cljs$lang$applyTo = (function (arglist__61641){
var args = cljs.core.seq(arglist__61641);
return G__61639__delegate(args);
});
G__61639.cljs$core$IFn$_invoke$arity$variadic = G__61639__delegate;
return G__61639;
})()
;

return null;
});
