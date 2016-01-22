goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37328__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37328 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37329__i = 0, G__37329__a = new Array(arguments.length -  0);
while (G__37329__i < G__37329__a.length) {G__37329__a[G__37329__i] = arguments[G__37329__i + 0]; ++G__37329__i;}
  args = new cljs.core.IndexedSeq(G__37329__a,0);
} 
return G__37328__delegate.call(this,args);};
G__37328.cljs$lang$maxFixedArity = 0;
G__37328.cljs$lang$applyTo = (function (arglist__37330){
var args = cljs.core.seq(arglist__37330);
return G__37328__delegate(args);
});
G__37328.cljs$core$IFn$_invoke$arity$variadic = G__37328__delegate;
return G__37328;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37331__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37331 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37332__i = 0, G__37332__a = new Array(arguments.length -  0);
while (G__37332__i < G__37332__a.length) {G__37332__a[G__37332__i] = arguments[G__37332__i + 0]; ++G__37332__i;}
  args = new cljs.core.IndexedSeq(G__37332__a,0);
} 
return G__37331__delegate.call(this,args);};
G__37331.cljs$lang$maxFixedArity = 0;
G__37331.cljs$lang$applyTo = (function (arglist__37333){
var args = cljs.core.seq(arglist__37333);
return G__37331__delegate(args);
});
G__37331.cljs$core$IFn$_invoke$arity$variadic = G__37331__delegate;
return G__37331;
})()
;

return null;
});
