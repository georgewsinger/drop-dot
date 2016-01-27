goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__32116__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__32116 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32117__i = 0, G__32117__a = new Array(arguments.length -  0);
while (G__32117__i < G__32117__a.length) {G__32117__a[G__32117__i] = arguments[G__32117__i + 0]; ++G__32117__i;}
  args = new cljs.core.IndexedSeq(G__32117__a,0);
} 
return G__32116__delegate.call(this,args);};
G__32116.cljs$lang$maxFixedArity = 0;
G__32116.cljs$lang$applyTo = (function (arglist__32118){
var args = cljs.core.seq(arglist__32118);
return G__32116__delegate(args);
});
G__32116.cljs$core$IFn$_invoke$arity$variadic = G__32116__delegate;
return G__32116;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__32119__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__32119 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32120__i = 0, G__32120__a = new Array(arguments.length -  0);
while (G__32120__i < G__32120__a.length) {G__32120__a[G__32120__i] = arguments[G__32120__i + 0]; ++G__32120__i;}
  args = new cljs.core.IndexedSeq(G__32120__a,0);
} 
return G__32119__delegate.call(this,args);};
G__32119.cljs$lang$maxFixedArity = 0;
G__32119.cljs$lang$applyTo = (function (arglist__32121){
var args = cljs.core.seq(arglist__32121);
return G__32119__delegate(args);
});
G__32119.cljs$core$IFn$_invoke$arity$variadic = G__32119__delegate;
return G__32119;
})()
;

return null;
});
