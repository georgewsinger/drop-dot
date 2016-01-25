goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16964__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16964 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16965__i = 0, G__16965__a = new Array(arguments.length -  0);
while (G__16965__i < G__16965__a.length) {G__16965__a[G__16965__i] = arguments[G__16965__i + 0]; ++G__16965__i;}
  args = new cljs.core.IndexedSeq(G__16965__a,0);
} 
return G__16964__delegate.call(this,args);};
G__16964.cljs$lang$maxFixedArity = 0;
G__16964.cljs$lang$applyTo = (function (arglist__16966){
var args = cljs.core.seq(arglist__16966);
return G__16964__delegate(args);
});
G__16964.cljs$core$IFn$_invoke$arity$variadic = G__16964__delegate;
return G__16964;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16967__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16967 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16968__i = 0, G__16968__a = new Array(arguments.length -  0);
while (G__16968__i < G__16968__a.length) {G__16968__a[G__16968__i] = arguments[G__16968__i + 0]; ++G__16968__i;}
  args = new cljs.core.IndexedSeq(G__16968__a,0);
} 
return G__16967__delegate.call(this,args);};
G__16967.cljs$lang$maxFixedArity = 0;
G__16967.cljs$lang$applyTo = (function (arglist__16969){
var args = cljs.core.seq(arglist__16969);
return G__16967__delegate(args);
});
G__16967.cljs$core$IFn$_invoke$arity$variadic = G__16967__delegate;
return G__16967;
})()
;

return null;
});
