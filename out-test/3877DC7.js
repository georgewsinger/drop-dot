goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__47102__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__47102 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47103__i = 0, G__47103__a = new Array(arguments.length -  0);
while (G__47103__i < G__47103__a.length) {G__47103__a[G__47103__i] = arguments[G__47103__i + 0]; ++G__47103__i;}
  args = new cljs.core.IndexedSeq(G__47103__a,0);
} 
return G__47102__delegate.call(this,args);};
G__47102.cljs$lang$maxFixedArity = 0;
G__47102.cljs$lang$applyTo = (function (arglist__47104){
var args = cljs.core.seq(arglist__47104);
return G__47102__delegate(args);
});
G__47102.cljs$core$IFn$_invoke$arity$variadic = G__47102__delegate;
return G__47102;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__47105__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__47105 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47106__i = 0, G__47106__a = new Array(arguments.length -  0);
while (G__47106__i < G__47106__a.length) {G__47106__a[G__47106__i] = arguments[G__47106__i + 0]; ++G__47106__i;}
  args = new cljs.core.IndexedSeq(G__47106__a,0);
} 
return G__47105__delegate.call(this,args);};
G__47105.cljs$lang$maxFixedArity = 0;
G__47105.cljs$lang$applyTo = (function (arglist__47107){
var args = cljs.core.seq(arglist__47107);
return G__47105__delegate(args);
});
G__47105.cljs$core$IFn$_invoke$arity$variadic = G__47105__delegate;
return G__47105;
})()
;

return null;
});
