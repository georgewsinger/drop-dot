goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__350429__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__350429 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__350430__i = 0, G__350430__a = new Array(arguments.length -  0);
while (G__350430__i < G__350430__a.length) {G__350430__a[G__350430__i] = arguments[G__350430__i + 0]; ++G__350430__i;}
  args = new cljs.core.IndexedSeq(G__350430__a,0);
} 
return G__350429__delegate.call(this,args);};
G__350429.cljs$lang$maxFixedArity = 0;
G__350429.cljs$lang$applyTo = (function (arglist__350431){
var args = cljs.core.seq(arglist__350431);
return G__350429__delegate(args);
});
G__350429.cljs$core$IFn$_invoke$arity$variadic = G__350429__delegate;
return G__350429;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__350432__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__350432 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__350433__i = 0, G__350433__a = new Array(arguments.length -  0);
while (G__350433__i < G__350433__a.length) {G__350433__a[G__350433__i] = arguments[G__350433__i + 0]; ++G__350433__i;}
  args = new cljs.core.IndexedSeq(G__350433__a,0);
} 
return G__350432__delegate.call(this,args);};
G__350432.cljs$lang$maxFixedArity = 0;
G__350432.cljs$lang$applyTo = (function (arglist__350434){
var args = cljs.core.seq(arglist__350434);
return G__350432__delegate(args);
});
G__350432.cljs$core$IFn$_invoke$arity$variadic = G__350432__delegate;
return G__350432;
})()
;

return null;
});
