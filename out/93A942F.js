goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__343119__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__343119 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__343120__i = 0, G__343120__a = new Array(arguments.length -  0);
while (G__343120__i < G__343120__a.length) {G__343120__a[G__343120__i] = arguments[G__343120__i + 0]; ++G__343120__i;}
  args = new cljs.core.IndexedSeq(G__343120__a,0);
} 
return G__343119__delegate.call(this,args);};
G__343119.cljs$lang$maxFixedArity = 0;
G__343119.cljs$lang$applyTo = (function (arglist__343121){
var args = cljs.core.seq(arglist__343121);
return G__343119__delegate(args);
});
G__343119.cljs$core$IFn$_invoke$arity$variadic = G__343119__delegate;
return G__343119;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__343122__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__343122 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__343123__i = 0, G__343123__a = new Array(arguments.length -  0);
while (G__343123__i < G__343123__a.length) {G__343123__a[G__343123__i] = arguments[G__343123__i + 0]; ++G__343123__i;}
  args = new cljs.core.IndexedSeq(G__343123__a,0);
} 
return G__343122__delegate.call(this,args);};
G__343122.cljs$lang$maxFixedArity = 0;
G__343122.cljs$lang$applyTo = (function (arglist__343124){
var args = cljs.core.seq(arglist__343124);
return G__343122__delegate(args);
});
G__343122.cljs$core$IFn$_invoke$arity$variadic = G__343122__delegate;
return G__343122;
})()
;

return null;
});
