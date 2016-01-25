goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__61944__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__61944 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61945__i = 0, G__61945__a = new Array(arguments.length -  0);
while (G__61945__i < G__61945__a.length) {G__61945__a[G__61945__i] = arguments[G__61945__i + 0]; ++G__61945__i;}
  args = new cljs.core.IndexedSeq(G__61945__a,0);
} 
return G__61944__delegate.call(this,args);};
G__61944.cljs$lang$maxFixedArity = 0;
G__61944.cljs$lang$applyTo = (function (arglist__61946){
var args = cljs.core.seq(arglist__61946);
return G__61944__delegate(args);
});
G__61944.cljs$core$IFn$_invoke$arity$variadic = G__61944__delegate;
return G__61944;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__61947__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__61947 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61948__i = 0, G__61948__a = new Array(arguments.length -  0);
while (G__61948__i < G__61948__a.length) {G__61948__a[G__61948__i] = arguments[G__61948__i + 0]; ++G__61948__i;}
  args = new cljs.core.IndexedSeq(G__61948__a,0);
} 
return G__61947__delegate.call(this,args);};
G__61947.cljs$lang$maxFixedArity = 0;
G__61947.cljs$lang$applyTo = (function (arglist__61949){
var args = cljs.core.seq(arglist__61949);
return G__61947__delegate(args);
});
G__61947.cljs$core$IFn$_invoke$arity$variadic = G__61947__delegate;
return G__61947;
})()
;

return null;
});
