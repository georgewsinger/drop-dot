goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__390712__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__390712 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__390713__i = 0, G__390713__a = new Array(arguments.length -  0);
while (G__390713__i < G__390713__a.length) {G__390713__a[G__390713__i] = arguments[G__390713__i + 0]; ++G__390713__i;}
  args = new cljs.core.IndexedSeq(G__390713__a,0);
} 
return G__390712__delegate.call(this,args);};
G__390712.cljs$lang$maxFixedArity = 0;
G__390712.cljs$lang$applyTo = (function (arglist__390714){
var args = cljs.core.seq(arglist__390714);
return G__390712__delegate(args);
});
G__390712.cljs$core$IFn$_invoke$arity$variadic = G__390712__delegate;
return G__390712;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__390715__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__390715 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__390716__i = 0, G__390716__a = new Array(arguments.length -  0);
while (G__390716__i < G__390716__a.length) {G__390716__a[G__390716__i] = arguments[G__390716__i + 0]; ++G__390716__i;}
  args = new cljs.core.IndexedSeq(G__390716__a,0);
} 
return G__390715__delegate.call(this,args);};
G__390715.cljs$lang$maxFixedArity = 0;
G__390715.cljs$lang$applyTo = (function (arglist__390717){
var args = cljs.core.seq(arglist__390717);
return G__390715__delegate(args);
});
G__390715.cljs$core$IFn$_invoke$arity$variadic = G__390715__delegate;
return G__390715;
})()
;

return null;
});
