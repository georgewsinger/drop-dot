goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__284859__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__284859 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__284860__i = 0, G__284860__a = new Array(arguments.length -  0);
while (G__284860__i < G__284860__a.length) {G__284860__a[G__284860__i] = arguments[G__284860__i + 0]; ++G__284860__i;}
  args = new cljs.core.IndexedSeq(G__284860__a,0);
} 
return G__284859__delegate.call(this,args);};
G__284859.cljs$lang$maxFixedArity = 0;
G__284859.cljs$lang$applyTo = (function (arglist__284861){
var args = cljs.core.seq(arglist__284861);
return G__284859__delegate(args);
});
G__284859.cljs$core$IFn$_invoke$arity$variadic = G__284859__delegate;
return G__284859;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__284862__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__284862 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__284863__i = 0, G__284863__a = new Array(arguments.length -  0);
while (G__284863__i < G__284863__a.length) {G__284863__a[G__284863__i] = arguments[G__284863__i + 0]; ++G__284863__i;}
  args = new cljs.core.IndexedSeq(G__284863__a,0);
} 
return G__284862__delegate.call(this,args);};
G__284862.cljs$lang$maxFixedArity = 0;
G__284862.cljs$lang$applyTo = (function (arglist__284864){
var args = cljs.core.seq(arglist__284864);
return G__284862__delegate(args);
});
G__284862.cljs$core$IFn$_invoke$arity$variadic = G__284862__delegate;
return G__284862;
})()
;

return null;
});
