goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18988__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18988 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18989__i = 0, G__18989__a = new Array(arguments.length -  0);
while (G__18989__i < G__18989__a.length) {G__18989__a[G__18989__i] = arguments[G__18989__i + 0]; ++G__18989__i;}
  args = new cljs.core.IndexedSeq(G__18989__a,0);
} 
return G__18988__delegate.call(this,args);};
G__18988.cljs$lang$maxFixedArity = 0;
G__18988.cljs$lang$applyTo = (function (arglist__18990){
var args = cljs.core.seq(arglist__18990);
return G__18988__delegate(args);
});
G__18988.cljs$core$IFn$_invoke$arity$variadic = G__18988__delegate;
return G__18988;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18991__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18991 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18992__i = 0, G__18992__a = new Array(arguments.length -  0);
while (G__18992__i < G__18992__a.length) {G__18992__a[G__18992__i] = arguments[G__18992__i + 0]; ++G__18992__i;}
  args = new cljs.core.IndexedSeq(G__18992__a,0);
} 
return G__18991__delegate.call(this,args);};
G__18991.cljs$lang$maxFixedArity = 0;
G__18991.cljs$lang$applyTo = (function (arglist__18993){
var args = cljs.core.seq(arglist__18993);
return G__18991__delegate(args);
});
G__18991.cljs$core$IFn$_invoke$arity$variadic = G__18991__delegate;
return G__18991;
})()
;

return null;
});
