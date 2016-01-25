goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__60486__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__60486 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60487__i = 0, G__60487__a = new Array(arguments.length -  0);
while (G__60487__i < G__60487__a.length) {G__60487__a[G__60487__i] = arguments[G__60487__i + 0]; ++G__60487__i;}
  args = new cljs.core.IndexedSeq(G__60487__a,0);
} 
return G__60486__delegate.call(this,args);};
G__60486.cljs$lang$maxFixedArity = 0;
G__60486.cljs$lang$applyTo = (function (arglist__60488){
var args = cljs.core.seq(arglist__60488);
return G__60486__delegate(args);
});
G__60486.cljs$core$IFn$_invoke$arity$variadic = G__60486__delegate;
return G__60486;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__60489__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__60489 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60490__i = 0, G__60490__a = new Array(arguments.length -  0);
while (G__60490__i < G__60490__a.length) {G__60490__a[G__60490__i] = arguments[G__60490__i + 0]; ++G__60490__i;}
  args = new cljs.core.IndexedSeq(G__60490__a,0);
} 
return G__60489__delegate.call(this,args);};
G__60489.cljs$lang$maxFixedArity = 0;
G__60489.cljs$lang$applyTo = (function (arglist__60491){
var args = cljs.core.seq(arglist__60491);
return G__60489__delegate(args);
});
G__60489.cljs$core$IFn$_invoke$arity$variadic = G__60489__delegate;
return G__60489;
})()
;

return null;
});
