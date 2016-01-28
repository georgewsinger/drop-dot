goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__377673__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__377673 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__377674__i = 0, G__377674__a = new Array(arguments.length -  0);
while (G__377674__i < G__377674__a.length) {G__377674__a[G__377674__i] = arguments[G__377674__i + 0]; ++G__377674__i;}
  args = new cljs.core.IndexedSeq(G__377674__a,0);
} 
return G__377673__delegate.call(this,args);};
G__377673.cljs$lang$maxFixedArity = 0;
G__377673.cljs$lang$applyTo = (function (arglist__377675){
var args = cljs.core.seq(arglist__377675);
return G__377673__delegate(args);
});
G__377673.cljs$core$IFn$_invoke$arity$variadic = G__377673__delegate;
return G__377673;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__377676__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__377676 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__377677__i = 0, G__377677__a = new Array(arguments.length -  0);
while (G__377677__i < G__377677__a.length) {G__377677__a[G__377677__i] = arguments[G__377677__i + 0]; ++G__377677__i;}
  args = new cljs.core.IndexedSeq(G__377677__a,0);
} 
return G__377676__delegate.call(this,args);};
G__377676.cljs$lang$maxFixedArity = 0;
G__377676.cljs$lang$applyTo = (function (arglist__377678){
var args = cljs.core.seq(arglist__377678);
return G__377676__delegate(args);
});
G__377676.cljs$core$IFn$_invoke$arity$variadic = G__377676__delegate;
return G__377676;
})()
;

return null;
});
