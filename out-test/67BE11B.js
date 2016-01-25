goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13772__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13772 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13773__i = 0, G__13773__a = new Array(arguments.length -  0);
while (G__13773__i < G__13773__a.length) {G__13773__a[G__13773__i] = arguments[G__13773__i + 0]; ++G__13773__i;}
  args = new cljs.core.IndexedSeq(G__13773__a,0);
} 
return G__13772__delegate.call(this,args);};
G__13772.cljs$lang$maxFixedArity = 0;
G__13772.cljs$lang$applyTo = (function (arglist__13774){
var args = cljs.core.seq(arglist__13774);
return G__13772__delegate(args);
});
G__13772.cljs$core$IFn$_invoke$arity$variadic = G__13772__delegate;
return G__13772;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13775__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13775 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13776__i = 0, G__13776__a = new Array(arguments.length -  0);
while (G__13776__i < G__13776__a.length) {G__13776__a[G__13776__i] = arguments[G__13776__i + 0]; ++G__13776__i;}
  args = new cljs.core.IndexedSeq(G__13776__a,0);
} 
return G__13775__delegate.call(this,args);};
G__13775.cljs$lang$maxFixedArity = 0;
G__13775.cljs$lang$applyTo = (function (arglist__13777){
var args = cljs.core.seq(arglist__13777);
return G__13775__delegate(args);
});
G__13775.cljs$core$IFn$_invoke$arity$variadic = G__13775__delegate;
return G__13775;
})()
;

return null;
});
