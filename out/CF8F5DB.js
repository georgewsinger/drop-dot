goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28495__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__28495 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28496__i = 0, G__28496__a = new Array(arguments.length -  0);
while (G__28496__i < G__28496__a.length) {G__28496__a[G__28496__i] = arguments[G__28496__i + 0]; ++G__28496__i;}
  args = new cljs.core.IndexedSeq(G__28496__a,0);
} 
return G__28495__delegate.call(this,args);};
G__28495.cljs$lang$maxFixedArity = 0;
G__28495.cljs$lang$applyTo = (function (arglist__28497){
var args = cljs.core.seq(arglist__28497);
return G__28495__delegate(args);
});
G__28495.cljs$core$IFn$_invoke$arity$variadic = G__28495__delegate;
return G__28495;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__28498__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__28498 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28499__i = 0, G__28499__a = new Array(arguments.length -  0);
while (G__28499__i < G__28499__a.length) {G__28499__a[G__28499__i] = arguments[G__28499__i + 0]; ++G__28499__i;}
  args = new cljs.core.IndexedSeq(G__28499__a,0);
} 
return G__28498__delegate.call(this,args);};
G__28498.cljs$lang$maxFixedArity = 0;
G__28498.cljs$lang$applyTo = (function (arglist__28500){
var args = cljs.core.seq(arglist__28500);
return G__28498__delegate(args);
});
G__28498.cljs$core$IFn$_invoke$arity$variadic = G__28498__delegate;
return G__28498;
})()
;

return null;
});
