goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__226013__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__226013 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__226014__i = 0, G__226014__a = new Array(arguments.length -  0);
while (G__226014__i < G__226014__a.length) {G__226014__a[G__226014__i] = arguments[G__226014__i + 0]; ++G__226014__i;}
  args = new cljs.core.IndexedSeq(G__226014__a,0);
} 
return G__226013__delegate.call(this,args);};
G__226013.cljs$lang$maxFixedArity = 0;
G__226013.cljs$lang$applyTo = (function (arglist__226015){
var args = cljs.core.seq(arglist__226015);
return G__226013__delegate(args);
});
G__226013.cljs$core$IFn$_invoke$arity$variadic = G__226013__delegate;
return G__226013;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__226016__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__226016 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__226017__i = 0, G__226017__a = new Array(arguments.length -  0);
while (G__226017__i < G__226017__a.length) {G__226017__a[G__226017__i] = arguments[G__226017__i + 0]; ++G__226017__i;}
  args = new cljs.core.IndexedSeq(G__226017__a,0);
} 
return G__226016__delegate.call(this,args);};
G__226016.cljs$lang$maxFixedArity = 0;
G__226016.cljs$lang$applyTo = (function (arglist__226018){
var args = cljs.core.seq(arglist__226018);
return G__226016__delegate(args);
});
G__226016.cljs$core$IFn$_invoke$arity$variadic = G__226016__delegate;
return G__226016;
})()
;

return null;
});
