goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__281912__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__281912 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__281913__i = 0, G__281913__a = new Array(arguments.length -  0);
while (G__281913__i < G__281913__a.length) {G__281913__a[G__281913__i] = arguments[G__281913__i + 0]; ++G__281913__i;}
  args = new cljs.core.IndexedSeq(G__281913__a,0);
} 
return G__281912__delegate.call(this,args);};
G__281912.cljs$lang$maxFixedArity = 0;
G__281912.cljs$lang$applyTo = (function (arglist__281914){
var args = cljs.core.seq(arglist__281914);
return G__281912__delegate(args);
});
G__281912.cljs$core$IFn$_invoke$arity$variadic = G__281912__delegate;
return G__281912;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__281915__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__281915 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__281916__i = 0, G__281916__a = new Array(arguments.length -  0);
while (G__281916__i < G__281916__a.length) {G__281916__a[G__281916__i] = arguments[G__281916__i + 0]; ++G__281916__i;}
  args = new cljs.core.IndexedSeq(G__281916__a,0);
} 
return G__281915__delegate.call(this,args);};
G__281915.cljs$lang$maxFixedArity = 0;
G__281915.cljs$lang$applyTo = (function (arglist__281917){
var args = cljs.core.seq(arglist__281917);
return G__281915__delegate(args);
});
G__281915.cljs$core$IFn$_invoke$arity$variadic = G__281915__delegate;
return G__281915;
})()
;

return null;
});
