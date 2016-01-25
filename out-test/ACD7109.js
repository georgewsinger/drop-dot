goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__61227__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__61227 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61228__i = 0, G__61228__a = new Array(arguments.length -  0);
while (G__61228__i < G__61228__a.length) {G__61228__a[G__61228__i] = arguments[G__61228__i + 0]; ++G__61228__i;}
  args = new cljs.core.IndexedSeq(G__61228__a,0);
} 
return G__61227__delegate.call(this,args);};
G__61227.cljs$lang$maxFixedArity = 0;
G__61227.cljs$lang$applyTo = (function (arglist__61229){
var args = cljs.core.seq(arglist__61229);
return G__61227__delegate(args);
});
G__61227.cljs$core$IFn$_invoke$arity$variadic = G__61227__delegate;
return G__61227;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__61230__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__61230 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61231__i = 0, G__61231__a = new Array(arguments.length -  0);
while (G__61231__i < G__61231__a.length) {G__61231__a[G__61231__i] = arguments[G__61231__i + 0]; ++G__61231__i;}
  args = new cljs.core.IndexedSeq(G__61231__a,0);
} 
return G__61230__delegate.call(this,args);};
G__61230.cljs$lang$maxFixedArity = 0;
G__61230.cljs$lang$applyTo = (function (arglist__61232){
var args = cljs.core.seq(arglist__61232);
return G__61230__delegate(args);
});
G__61230.cljs$core$IFn$_invoke$arity$variadic = G__61230__delegate;
return G__61230;
})()
;

return null;
});
