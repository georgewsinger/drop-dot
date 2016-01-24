goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__32931__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__32931 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32932__i = 0, G__32932__a = new Array(arguments.length -  0);
while (G__32932__i < G__32932__a.length) {G__32932__a[G__32932__i] = arguments[G__32932__i + 0]; ++G__32932__i;}
  args = new cljs.core.IndexedSeq(G__32932__a,0);
} 
return G__32931__delegate.call(this,args);};
G__32931.cljs$lang$maxFixedArity = 0;
G__32931.cljs$lang$applyTo = (function (arglist__32933){
var args = cljs.core.seq(arglist__32933);
return G__32931__delegate(args);
});
G__32931.cljs$core$IFn$_invoke$arity$variadic = G__32931__delegate;
return G__32931;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__32934__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__32934 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32935__i = 0, G__32935__a = new Array(arguments.length -  0);
while (G__32935__i < G__32935__a.length) {G__32935__a[G__32935__i] = arguments[G__32935__i + 0]; ++G__32935__i;}
  args = new cljs.core.IndexedSeq(G__32935__a,0);
} 
return G__32934__delegate.call(this,args);};
G__32934.cljs$lang$maxFixedArity = 0;
G__32934.cljs$lang$applyTo = (function (arglist__32936){
var args = cljs.core.seq(arglist__32936);
return G__32934__delegate(args);
});
G__32934.cljs$core$IFn$_invoke$arity$variadic = G__32934__delegate;
return G__32934;
})()
;

return null;
});
