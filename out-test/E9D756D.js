goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17450__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17450 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17451__i = 0, G__17451__a = new Array(arguments.length -  0);
while (G__17451__i < G__17451__a.length) {G__17451__a[G__17451__i] = arguments[G__17451__i + 0]; ++G__17451__i;}
  args = new cljs.core.IndexedSeq(G__17451__a,0);
} 
return G__17450__delegate.call(this,args);};
G__17450.cljs$lang$maxFixedArity = 0;
G__17450.cljs$lang$applyTo = (function (arglist__17452){
var args = cljs.core.seq(arglist__17452);
return G__17450__delegate(args);
});
G__17450.cljs$core$IFn$_invoke$arity$variadic = G__17450__delegate;
return G__17450;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17453__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17453 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17454__i = 0, G__17454__a = new Array(arguments.length -  0);
while (G__17454__i < G__17454__a.length) {G__17454__a[G__17454__i] = arguments[G__17454__i + 0]; ++G__17454__i;}
  args = new cljs.core.IndexedSeq(G__17454__a,0);
} 
return G__17453__delegate.call(this,args);};
G__17453.cljs$lang$maxFixedArity = 0;
G__17453.cljs$lang$applyTo = (function (arglist__17455){
var args = cljs.core.seq(arglist__17455);
return G__17453__delegate(args);
});
G__17453.cljs$core$IFn$_invoke$arity$variadic = G__17453__delegate;
return G__17453;
})()
;

return null;
});
