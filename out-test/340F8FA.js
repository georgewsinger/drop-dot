goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__84915__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__84915 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__84916__i = 0, G__84916__a = new Array(arguments.length -  0);
while (G__84916__i < G__84916__a.length) {G__84916__a[G__84916__i] = arguments[G__84916__i + 0]; ++G__84916__i;}
  args = new cljs.core.IndexedSeq(G__84916__a,0);
} 
return G__84915__delegate.call(this,args);};
G__84915.cljs$lang$maxFixedArity = 0;
G__84915.cljs$lang$applyTo = (function (arglist__84917){
var args = cljs.core.seq(arglist__84917);
return G__84915__delegate(args);
});
G__84915.cljs$core$IFn$_invoke$arity$variadic = G__84915__delegate;
return G__84915;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__84918__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__84918 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__84919__i = 0, G__84919__a = new Array(arguments.length -  0);
while (G__84919__i < G__84919__a.length) {G__84919__a[G__84919__i] = arguments[G__84919__i + 0]; ++G__84919__i;}
  args = new cljs.core.IndexedSeq(G__84919__a,0);
} 
return G__84918__delegate.call(this,args);};
G__84918.cljs$lang$maxFixedArity = 0;
G__84918.cljs$lang$applyTo = (function (arglist__84920){
var args = cljs.core.seq(arglist__84920);
return G__84918__delegate(args);
});
G__84918.cljs$core$IFn$_invoke$arity$variadic = G__84918__delegate;
return G__84918;
})()
;

return null;
});
