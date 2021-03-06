goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20155__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20155 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20156__i = 0, G__20156__a = new Array(arguments.length -  0);
while (G__20156__i < G__20156__a.length) {G__20156__a[G__20156__i] = arguments[G__20156__i + 0]; ++G__20156__i;}
  args = new cljs.core.IndexedSeq(G__20156__a,0);
} 
return G__20155__delegate.call(this,args);};
G__20155.cljs$lang$maxFixedArity = 0;
G__20155.cljs$lang$applyTo = (function (arglist__20157){
var args = cljs.core.seq(arglist__20157);
return G__20155__delegate(args);
});
G__20155.cljs$core$IFn$_invoke$arity$variadic = G__20155__delegate;
return G__20155;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20158__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20158 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20159__i = 0, G__20159__a = new Array(arguments.length -  0);
while (G__20159__i < G__20159__a.length) {G__20159__a[G__20159__i] = arguments[G__20159__i + 0]; ++G__20159__i;}
  args = new cljs.core.IndexedSeq(G__20159__a,0);
} 
return G__20158__delegate.call(this,args);};
G__20158.cljs$lang$maxFixedArity = 0;
G__20158.cljs$lang$applyTo = (function (arglist__20160){
var args = cljs.core.seq(arglist__20160);
return G__20158__delegate(args);
});
G__20158.cljs$core$IFn$_invoke$arity$variadic = G__20158__delegate;
return G__20158;
})()
;

return null;
});
