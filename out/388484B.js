goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__266150__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__266150 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__266151__i = 0, G__266151__a = new Array(arguments.length -  0);
while (G__266151__i < G__266151__a.length) {G__266151__a[G__266151__i] = arguments[G__266151__i + 0]; ++G__266151__i;}
  args = new cljs.core.IndexedSeq(G__266151__a,0);
} 
return G__266150__delegate.call(this,args);};
G__266150.cljs$lang$maxFixedArity = 0;
G__266150.cljs$lang$applyTo = (function (arglist__266152){
var args = cljs.core.seq(arglist__266152);
return G__266150__delegate(args);
});
G__266150.cljs$core$IFn$_invoke$arity$variadic = G__266150__delegate;
return G__266150;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__266153__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__266153 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__266154__i = 0, G__266154__a = new Array(arguments.length -  0);
while (G__266154__i < G__266154__a.length) {G__266154__a[G__266154__i] = arguments[G__266154__i + 0]; ++G__266154__i;}
  args = new cljs.core.IndexedSeq(G__266154__a,0);
} 
return G__266153__delegate.call(this,args);};
G__266153.cljs$lang$maxFixedArity = 0;
G__266153.cljs$lang$applyTo = (function (arglist__266155){
var args = cljs.core.seq(arglist__266155);
return G__266153__delegate(args);
});
G__266153.cljs$core$IFn$_invoke$arity$variadic = G__266153__delegate;
return G__266153;
})()
;

return null;
});
