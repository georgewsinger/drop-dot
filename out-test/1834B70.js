goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__61191__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__61191 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61192__i = 0, G__61192__a = new Array(arguments.length -  0);
while (G__61192__i < G__61192__a.length) {G__61192__a[G__61192__i] = arguments[G__61192__i + 0]; ++G__61192__i;}
  args = new cljs.core.IndexedSeq(G__61192__a,0);
} 
return G__61191__delegate.call(this,args);};
G__61191.cljs$lang$maxFixedArity = 0;
G__61191.cljs$lang$applyTo = (function (arglist__61193){
var args = cljs.core.seq(arglist__61193);
return G__61191__delegate(args);
});
G__61191.cljs$core$IFn$_invoke$arity$variadic = G__61191__delegate;
return G__61191;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__61194__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__61194 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61195__i = 0, G__61195__a = new Array(arguments.length -  0);
while (G__61195__i < G__61195__a.length) {G__61195__a[G__61195__i] = arguments[G__61195__i + 0]; ++G__61195__i;}
  args = new cljs.core.IndexedSeq(G__61195__a,0);
} 
return G__61194__delegate.call(this,args);};
G__61194.cljs$lang$maxFixedArity = 0;
G__61194.cljs$lang$applyTo = (function (arglist__61196){
var args = cljs.core.seq(arglist__61196);
return G__61194__delegate(args);
});
G__61194.cljs$core$IFn$_invoke$arity$variadic = G__61194__delegate;
return G__61194;
})()
;

return null;
});
