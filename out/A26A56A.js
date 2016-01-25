goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__256789__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__256789 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__256790__i = 0, G__256790__a = new Array(arguments.length -  0);
while (G__256790__i < G__256790__a.length) {G__256790__a[G__256790__i] = arguments[G__256790__i + 0]; ++G__256790__i;}
  args = new cljs.core.IndexedSeq(G__256790__a,0);
} 
return G__256789__delegate.call(this,args);};
G__256789.cljs$lang$maxFixedArity = 0;
G__256789.cljs$lang$applyTo = (function (arglist__256791){
var args = cljs.core.seq(arglist__256791);
return G__256789__delegate(args);
});
G__256789.cljs$core$IFn$_invoke$arity$variadic = G__256789__delegate;
return G__256789;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__256792__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__256792 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__256793__i = 0, G__256793__a = new Array(arguments.length -  0);
while (G__256793__i < G__256793__a.length) {G__256793__a[G__256793__i] = arguments[G__256793__i + 0]; ++G__256793__i;}
  args = new cljs.core.IndexedSeq(G__256793__a,0);
} 
return G__256792__delegate.call(this,args);};
G__256792.cljs$lang$maxFixedArity = 0;
G__256792.cljs$lang$applyTo = (function (arglist__256794){
var args = cljs.core.seq(arglist__256794);
return G__256792__delegate(args);
});
G__256792.cljs$core$IFn$_invoke$arity$variadic = G__256792__delegate;
return G__256792;
})()
;

return null;
});
