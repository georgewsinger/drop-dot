goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22744__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22744 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22745__i = 0, G__22745__a = new Array(arguments.length -  0);
while (G__22745__i < G__22745__a.length) {G__22745__a[G__22745__i] = arguments[G__22745__i + 0]; ++G__22745__i;}
  args = new cljs.core.IndexedSeq(G__22745__a,0);
} 
return G__22744__delegate.call(this,args);};
G__22744.cljs$lang$maxFixedArity = 0;
G__22744.cljs$lang$applyTo = (function (arglist__22746){
var args = cljs.core.seq(arglist__22746);
return G__22744__delegate(args);
});
G__22744.cljs$core$IFn$_invoke$arity$variadic = G__22744__delegate;
return G__22744;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22747__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22747 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22748__i = 0, G__22748__a = new Array(arguments.length -  0);
while (G__22748__i < G__22748__a.length) {G__22748__a[G__22748__i] = arguments[G__22748__i + 0]; ++G__22748__i;}
  args = new cljs.core.IndexedSeq(G__22748__a,0);
} 
return G__22747__delegate.call(this,args);};
G__22747.cljs$lang$maxFixedArity = 0;
G__22747.cljs$lang$applyTo = (function (arglist__22749){
var args = cljs.core.seq(arglist__22749);
return G__22747__delegate(args);
});
G__22747.cljs$core$IFn$_invoke$arity$variadic = G__22747__delegate;
return G__22747;
})()
;

return null;
});
