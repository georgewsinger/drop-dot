goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__71484__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__71484 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__71485__i = 0, G__71485__a = new Array(arguments.length -  0);
while (G__71485__i < G__71485__a.length) {G__71485__a[G__71485__i] = arguments[G__71485__i + 0]; ++G__71485__i;}
  args = new cljs.core.IndexedSeq(G__71485__a,0);
} 
return G__71484__delegate.call(this,args);};
G__71484.cljs$lang$maxFixedArity = 0;
G__71484.cljs$lang$applyTo = (function (arglist__71486){
var args = cljs.core.seq(arglist__71486);
return G__71484__delegate(args);
});
G__71484.cljs$core$IFn$_invoke$arity$variadic = G__71484__delegate;
return G__71484;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__71487__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__71487 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__71488__i = 0, G__71488__a = new Array(arguments.length -  0);
while (G__71488__i < G__71488__a.length) {G__71488__a[G__71488__i] = arguments[G__71488__i + 0]; ++G__71488__i;}
  args = new cljs.core.IndexedSeq(G__71488__a,0);
} 
return G__71487__delegate.call(this,args);};
G__71487.cljs$lang$maxFixedArity = 0;
G__71487.cljs$lang$applyTo = (function (arglist__71489){
var args = cljs.core.seq(arglist__71489);
return G__71487__delegate(args);
});
G__71487.cljs$core$IFn$_invoke$arity$variadic = G__71487__delegate;
return G__71487;
})()
;

return null;
});
