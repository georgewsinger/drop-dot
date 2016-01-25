goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16531__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16531 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16532__i = 0, G__16532__a = new Array(arguments.length -  0);
while (G__16532__i < G__16532__a.length) {G__16532__a[G__16532__i] = arguments[G__16532__i + 0]; ++G__16532__i;}
  args = new cljs.core.IndexedSeq(G__16532__a,0);
} 
return G__16531__delegate.call(this,args);};
G__16531.cljs$lang$maxFixedArity = 0;
G__16531.cljs$lang$applyTo = (function (arglist__16533){
var args = cljs.core.seq(arglist__16533);
return G__16531__delegate(args);
});
G__16531.cljs$core$IFn$_invoke$arity$variadic = G__16531__delegate;
return G__16531;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16534__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16534 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16535__i = 0, G__16535__a = new Array(arguments.length -  0);
while (G__16535__i < G__16535__a.length) {G__16535__a[G__16535__i] = arguments[G__16535__i + 0]; ++G__16535__i;}
  args = new cljs.core.IndexedSeq(G__16535__a,0);
} 
return G__16534__delegate.call(this,args);};
G__16534.cljs$lang$maxFixedArity = 0;
G__16534.cljs$lang$applyTo = (function (arglist__16536){
var args = cljs.core.seq(arglist__16536);
return G__16534__delegate(args);
});
G__16534.cljs$core$IFn$_invoke$arity$variadic = G__16534__delegate;
return G__16534;
})()
;

return null;
});
