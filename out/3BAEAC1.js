goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25636__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__25636 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25637__i = 0, G__25637__a = new Array(arguments.length -  0);
while (G__25637__i < G__25637__a.length) {G__25637__a[G__25637__i] = arguments[G__25637__i + 0]; ++G__25637__i;}
  args = new cljs.core.IndexedSeq(G__25637__a,0);
} 
return G__25636__delegate.call(this,args);};
G__25636.cljs$lang$maxFixedArity = 0;
G__25636.cljs$lang$applyTo = (function (arglist__25638){
var args = cljs.core.seq(arglist__25638);
return G__25636__delegate(args);
});
G__25636.cljs$core$IFn$_invoke$arity$variadic = G__25636__delegate;
return G__25636;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__25639__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__25639 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25640__i = 0, G__25640__a = new Array(arguments.length -  0);
while (G__25640__i < G__25640__a.length) {G__25640__a[G__25640__i] = arguments[G__25640__i + 0]; ++G__25640__i;}
  args = new cljs.core.IndexedSeq(G__25640__a,0);
} 
return G__25639__delegate.call(this,args);};
G__25639.cljs$lang$maxFixedArity = 0;
G__25639.cljs$lang$applyTo = (function (arglist__25641){
var args = cljs.core.seq(arglist__25641);
return G__25639__delegate(args);
});
G__25639.cljs$core$IFn$_invoke$arity$variadic = G__25639__delegate;
return G__25639;
})()
;

return null;
});
