goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__50803__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__50803 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50804__i = 0, G__50804__a = new Array(arguments.length -  0);
while (G__50804__i < G__50804__a.length) {G__50804__a[G__50804__i] = arguments[G__50804__i + 0]; ++G__50804__i;}
  args = new cljs.core.IndexedSeq(G__50804__a,0);
} 
return G__50803__delegate.call(this,args);};
G__50803.cljs$lang$maxFixedArity = 0;
G__50803.cljs$lang$applyTo = (function (arglist__50805){
var args = cljs.core.seq(arglist__50805);
return G__50803__delegate(args);
});
G__50803.cljs$core$IFn$_invoke$arity$variadic = G__50803__delegate;
return G__50803;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__50806__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__50806 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50807__i = 0, G__50807__a = new Array(arguments.length -  0);
while (G__50807__i < G__50807__a.length) {G__50807__a[G__50807__i] = arguments[G__50807__i + 0]; ++G__50807__i;}
  args = new cljs.core.IndexedSeq(G__50807__a,0);
} 
return G__50806__delegate.call(this,args);};
G__50806.cljs$lang$maxFixedArity = 0;
G__50806.cljs$lang$applyTo = (function (arglist__50808){
var args = cljs.core.seq(arglist__50808);
return G__50806__delegate(args);
});
G__50806.cljs$core$IFn$_invoke$arity$variadic = G__50806__delegate;
return G__50806;
})()
;

return null;
});
