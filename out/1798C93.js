goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16155__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16155 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16156__i = 0, G__16156__a = new Array(arguments.length -  0);
while (G__16156__i < G__16156__a.length) {G__16156__a[G__16156__i] = arguments[G__16156__i + 0]; ++G__16156__i;}
  args = new cljs.core.IndexedSeq(G__16156__a,0);
} 
return G__16155__delegate.call(this,args);};
G__16155.cljs$lang$maxFixedArity = 0;
G__16155.cljs$lang$applyTo = (function (arglist__16157){
var args = cljs.core.seq(arglist__16157);
return G__16155__delegate(args);
});
G__16155.cljs$core$IFn$_invoke$arity$variadic = G__16155__delegate;
return G__16155;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16158__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16158 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16159__i = 0, G__16159__a = new Array(arguments.length -  0);
while (G__16159__i < G__16159__a.length) {G__16159__a[G__16159__i] = arguments[G__16159__i + 0]; ++G__16159__i;}
  args = new cljs.core.IndexedSeq(G__16159__a,0);
} 
return G__16158__delegate.call(this,args);};
G__16158.cljs$lang$maxFixedArity = 0;
G__16158.cljs$lang$applyTo = (function (arglist__16160){
var args = cljs.core.seq(arglist__16160);
return G__16158__delegate(args);
});
G__16158.cljs$core$IFn$_invoke$arity$variadic = G__16158__delegate;
return G__16158;
})()
;

return null;
});
