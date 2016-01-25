goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30631__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__30631 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30632__i = 0, G__30632__a = new Array(arguments.length -  0);
while (G__30632__i < G__30632__a.length) {G__30632__a[G__30632__i] = arguments[G__30632__i + 0]; ++G__30632__i;}
  args = new cljs.core.IndexedSeq(G__30632__a,0);
} 
return G__30631__delegate.call(this,args);};
G__30631.cljs$lang$maxFixedArity = 0;
G__30631.cljs$lang$applyTo = (function (arglist__30633){
var args = cljs.core.seq(arglist__30633);
return G__30631__delegate(args);
});
G__30631.cljs$core$IFn$_invoke$arity$variadic = G__30631__delegate;
return G__30631;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__30634__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__30634 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30635__i = 0, G__30635__a = new Array(arguments.length -  0);
while (G__30635__i < G__30635__a.length) {G__30635__a[G__30635__i] = arguments[G__30635__i + 0]; ++G__30635__i;}
  args = new cljs.core.IndexedSeq(G__30635__a,0);
} 
return G__30634__delegate.call(this,args);};
G__30634.cljs$lang$maxFixedArity = 0;
G__30634.cljs$lang$applyTo = (function (arglist__30636){
var args = cljs.core.seq(arglist__30636);
return G__30634__delegate(args);
});
G__30634.cljs$core$IFn$_invoke$arity$variadic = G__30634__delegate;
return G__30634;
})()
;

return null;
});
