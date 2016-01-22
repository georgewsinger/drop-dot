goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__23484__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__23484 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23485__i = 0, G__23485__a = new Array(arguments.length -  0);
while (G__23485__i < G__23485__a.length) {G__23485__a[G__23485__i] = arguments[G__23485__i + 0]; ++G__23485__i;}
  args = new cljs.core.IndexedSeq(G__23485__a,0);
} 
return G__23484__delegate.call(this,args);};
G__23484.cljs$lang$maxFixedArity = 0;
G__23484.cljs$lang$applyTo = (function (arglist__23486){
var args = cljs.core.seq(arglist__23486);
return G__23484__delegate(args);
});
G__23484.cljs$core$IFn$_invoke$arity$variadic = G__23484__delegate;
return G__23484;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__23487__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__23487 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23488__i = 0, G__23488__a = new Array(arguments.length -  0);
while (G__23488__i < G__23488__a.length) {G__23488__a[G__23488__i] = arguments[G__23488__i + 0]; ++G__23488__i;}
  args = new cljs.core.IndexedSeq(G__23488__a,0);
} 
return G__23487__delegate.call(this,args);};
G__23487.cljs$lang$maxFixedArity = 0;
G__23487.cljs$lang$applyTo = (function (arglist__23489){
var args = cljs.core.seq(arglist__23489);
return G__23487__delegate(args);
});
G__23487.cljs$core$IFn$_invoke$arity$variadic = G__23487__delegate;
return G__23487;
})()
;

return null;
});
