goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__60120__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__60120 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60121__i = 0, G__60121__a = new Array(arguments.length -  0);
while (G__60121__i < G__60121__a.length) {G__60121__a[G__60121__i] = arguments[G__60121__i + 0]; ++G__60121__i;}
  args = new cljs.core.IndexedSeq(G__60121__a,0);
} 
return G__60120__delegate.call(this,args);};
G__60120.cljs$lang$maxFixedArity = 0;
G__60120.cljs$lang$applyTo = (function (arglist__60122){
var args = cljs.core.seq(arglist__60122);
return G__60120__delegate(args);
});
G__60120.cljs$core$IFn$_invoke$arity$variadic = G__60120__delegate;
return G__60120;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__60123__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__60123 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60124__i = 0, G__60124__a = new Array(arguments.length -  0);
while (G__60124__i < G__60124__a.length) {G__60124__a[G__60124__i] = arguments[G__60124__i + 0]; ++G__60124__i;}
  args = new cljs.core.IndexedSeq(G__60124__a,0);
} 
return G__60123__delegate.call(this,args);};
G__60123.cljs$lang$maxFixedArity = 0;
G__60123.cljs$lang$applyTo = (function (arglist__60125){
var args = cljs.core.seq(arglist__60125);
return G__60123__delegate(args);
});
G__60123.cljs$core$IFn$_invoke$arity$variadic = G__60123__delegate;
return G__60123;
})()
;

return null;
});
