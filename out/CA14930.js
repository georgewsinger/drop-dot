goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__44013__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__44013 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44014__i = 0, G__44014__a = new Array(arguments.length -  0);
while (G__44014__i < G__44014__a.length) {G__44014__a[G__44014__i] = arguments[G__44014__i + 0]; ++G__44014__i;}
  args = new cljs.core.IndexedSeq(G__44014__a,0);
} 
return G__44013__delegate.call(this,args);};
G__44013.cljs$lang$maxFixedArity = 0;
G__44013.cljs$lang$applyTo = (function (arglist__44015){
var args = cljs.core.seq(arglist__44015);
return G__44013__delegate(args);
});
G__44013.cljs$core$IFn$_invoke$arity$variadic = G__44013__delegate;
return G__44013;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__44016__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__44016 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44017__i = 0, G__44017__a = new Array(arguments.length -  0);
while (G__44017__i < G__44017__a.length) {G__44017__a[G__44017__i] = arguments[G__44017__i + 0]; ++G__44017__i;}
  args = new cljs.core.IndexedSeq(G__44017__a,0);
} 
return G__44016__delegate.call(this,args);};
G__44016.cljs$lang$maxFixedArity = 0;
G__44016.cljs$lang$applyTo = (function (arglist__44018){
var args = cljs.core.seq(arglist__44018);
return G__44016__delegate(args);
});
G__44016.cljs$core$IFn$_invoke$arity$variadic = G__44016__delegate;
return G__44016;
})()
;

return null;
});
