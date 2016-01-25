goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__255631__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__255631 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__255632__i = 0, G__255632__a = new Array(arguments.length -  0);
while (G__255632__i < G__255632__a.length) {G__255632__a[G__255632__i] = arguments[G__255632__i + 0]; ++G__255632__i;}
  args = new cljs.core.IndexedSeq(G__255632__a,0);
} 
return G__255631__delegate.call(this,args);};
G__255631.cljs$lang$maxFixedArity = 0;
G__255631.cljs$lang$applyTo = (function (arglist__255633){
var args = cljs.core.seq(arglist__255633);
return G__255631__delegate(args);
});
G__255631.cljs$core$IFn$_invoke$arity$variadic = G__255631__delegate;
return G__255631;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__255634__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__255634 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__255635__i = 0, G__255635__a = new Array(arguments.length -  0);
while (G__255635__i < G__255635__a.length) {G__255635__a[G__255635__i] = arguments[G__255635__i + 0]; ++G__255635__i;}
  args = new cljs.core.IndexedSeq(G__255635__a,0);
} 
return G__255634__delegate.call(this,args);};
G__255634.cljs$lang$maxFixedArity = 0;
G__255634.cljs$lang$applyTo = (function (arglist__255636){
var args = cljs.core.seq(arglist__255636);
return G__255634__delegate(args);
});
G__255634.cljs$core$IFn$_invoke$arity$variadic = G__255634__delegate;
return G__255634;
})()
;

return null;
});
