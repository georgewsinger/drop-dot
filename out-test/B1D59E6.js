goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__90485__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__90485 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__90486__i = 0, G__90486__a = new Array(arguments.length -  0);
while (G__90486__i < G__90486__a.length) {G__90486__a[G__90486__i] = arguments[G__90486__i + 0]; ++G__90486__i;}
  args = new cljs.core.IndexedSeq(G__90486__a,0);
} 
return G__90485__delegate.call(this,args);};
G__90485.cljs$lang$maxFixedArity = 0;
G__90485.cljs$lang$applyTo = (function (arglist__90487){
var args = cljs.core.seq(arglist__90487);
return G__90485__delegate(args);
});
G__90485.cljs$core$IFn$_invoke$arity$variadic = G__90485__delegate;
return G__90485;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__90488__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__90488 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__90489__i = 0, G__90489__a = new Array(arguments.length -  0);
while (G__90489__i < G__90489__a.length) {G__90489__a[G__90489__i] = arguments[G__90489__i + 0]; ++G__90489__i;}
  args = new cljs.core.IndexedSeq(G__90489__a,0);
} 
return G__90488__delegate.call(this,args);};
G__90488.cljs$lang$maxFixedArity = 0;
G__90488.cljs$lang$applyTo = (function (arglist__90490){
var args = cljs.core.seq(arglist__90490);
return G__90488__delegate(args);
});
G__90488.cljs$core$IFn$_invoke$arity$variadic = G__90488__delegate;
return G__90488;
})()
;

return null;
});
