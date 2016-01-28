goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__61202__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__61202 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61203__i = 0, G__61203__a = new Array(arguments.length -  0);
while (G__61203__i < G__61203__a.length) {G__61203__a[G__61203__i] = arguments[G__61203__i + 0]; ++G__61203__i;}
  args = new cljs.core.IndexedSeq(G__61203__a,0);
} 
return G__61202__delegate.call(this,args);};
G__61202.cljs$lang$maxFixedArity = 0;
G__61202.cljs$lang$applyTo = (function (arglist__61204){
var args = cljs.core.seq(arglist__61204);
return G__61202__delegate(args);
});
G__61202.cljs$core$IFn$_invoke$arity$variadic = G__61202__delegate;
return G__61202;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__61205__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__61205 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61206__i = 0, G__61206__a = new Array(arguments.length -  0);
while (G__61206__i < G__61206__a.length) {G__61206__a[G__61206__i] = arguments[G__61206__i + 0]; ++G__61206__i;}
  args = new cljs.core.IndexedSeq(G__61206__a,0);
} 
return G__61205__delegate.call(this,args);};
G__61205.cljs$lang$maxFixedArity = 0;
G__61205.cljs$lang$applyTo = (function (arglist__61207){
var args = cljs.core.seq(arglist__61207);
return G__61205__delegate(args);
});
G__61205.cljs$core$IFn$_invoke$arity$variadic = G__61205__delegate;
return G__61205;
})()
;

return null;
});
