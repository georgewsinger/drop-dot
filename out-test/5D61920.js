goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__55988__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__55988 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55989__i = 0, G__55989__a = new Array(arguments.length -  0);
while (G__55989__i < G__55989__a.length) {G__55989__a[G__55989__i] = arguments[G__55989__i + 0]; ++G__55989__i;}
  args = new cljs.core.IndexedSeq(G__55989__a,0);
} 
return G__55988__delegate.call(this,args);};
G__55988.cljs$lang$maxFixedArity = 0;
G__55988.cljs$lang$applyTo = (function (arglist__55990){
var args = cljs.core.seq(arglist__55990);
return G__55988__delegate(args);
});
G__55988.cljs$core$IFn$_invoke$arity$variadic = G__55988__delegate;
return G__55988;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__55991__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__55991 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55992__i = 0, G__55992__a = new Array(arguments.length -  0);
while (G__55992__i < G__55992__a.length) {G__55992__a[G__55992__i] = arguments[G__55992__i + 0]; ++G__55992__i;}
  args = new cljs.core.IndexedSeq(G__55992__a,0);
} 
return G__55991__delegate.call(this,args);};
G__55991.cljs$lang$maxFixedArity = 0;
G__55991.cljs$lang$applyTo = (function (arglist__55993){
var args = cljs.core.seq(arglist__55993);
return G__55991__delegate(args);
});
G__55991.cljs$core$IFn$_invoke$arity$variadic = G__55991__delegate;
return G__55991;
})()
;

return null;
});
