goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11872__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11872 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11873__i = 0, G__11873__a = new Array(arguments.length -  0);
while (G__11873__i < G__11873__a.length) {G__11873__a[G__11873__i] = arguments[G__11873__i + 0]; ++G__11873__i;}
  args = new cljs.core.IndexedSeq(G__11873__a,0);
} 
return G__11872__delegate.call(this,args);};
G__11872.cljs$lang$maxFixedArity = 0;
G__11872.cljs$lang$applyTo = (function (arglist__11874){
var args = cljs.core.seq(arglist__11874);
return G__11872__delegate(args);
});
G__11872.cljs$core$IFn$_invoke$arity$variadic = G__11872__delegate;
return G__11872;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11875__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11875 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11876__i = 0, G__11876__a = new Array(arguments.length -  0);
while (G__11876__i < G__11876__a.length) {G__11876__a[G__11876__i] = arguments[G__11876__i + 0]; ++G__11876__i;}
  args = new cljs.core.IndexedSeq(G__11876__a,0);
} 
return G__11875__delegate.call(this,args);};
G__11875.cljs$lang$maxFixedArity = 0;
G__11875.cljs$lang$applyTo = (function (arglist__11877){
var args = cljs.core.seq(arglist__11877);
return G__11875__delegate(args);
});
G__11875.cljs$core$IFn$_invoke$arity$variadic = G__11875__delegate;
return G__11875;
})()
;

return null;
});
