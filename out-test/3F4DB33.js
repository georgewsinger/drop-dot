goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__66524__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__66524 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66525__i = 0, G__66525__a = new Array(arguments.length -  0);
while (G__66525__i < G__66525__a.length) {G__66525__a[G__66525__i] = arguments[G__66525__i + 0]; ++G__66525__i;}
  args = new cljs.core.IndexedSeq(G__66525__a,0);
} 
return G__66524__delegate.call(this,args);};
G__66524.cljs$lang$maxFixedArity = 0;
G__66524.cljs$lang$applyTo = (function (arglist__66526){
var args = cljs.core.seq(arglist__66526);
return G__66524__delegate(args);
});
G__66524.cljs$core$IFn$_invoke$arity$variadic = G__66524__delegate;
return G__66524;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__66527__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__66527 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66528__i = 0, G__66528__a = new Array(arguments.length -  0);
while (G__66528__i < G__66528__a.length) {G__66528__a[G__66528__i] = arguments[G__66528__i + 0]; ++G__66528__i;}
  args = new cljs.core.IndexedSeq(G__66528__a,0);
} 
return G__66527__delegate.call(this,args);};
G__66527.cljs$lang$maxFixedArity = 0;
G__66527.cljs$lang$applyTo = (function (arglist__66529){
var args = cljs.core.seq(arglist__66529);
return G__66527__delegate(args);
});
G__66527.cljs$core$IFn$_invoke$arity$variadic = G__66527__delegate;
return G__66527;
})()
;

return null;
});
