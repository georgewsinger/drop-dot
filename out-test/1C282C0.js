goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33791__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33791 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33792__i = 0, G__33792__a = new Array(arguments.length -  0);
while (G__33792__i < G__33792__a.length) {G__33792__a[G__33792__i] = arguments[G__33792__i + 0]; ++G__33792__i;}
  args = new cljs.core.IndexedSeq(G__33792__a,0);
} 
return G__33791__delegate.call(this,args);};
G__33791.cljs$lang$maxFixedArity = 0;
G__33791.cljs$lang$applyTo = (function (arglist__33793){
var args = cljs.core.seq(arglist__33793);
return G__33791__delegate(args);
});
G__33791.cljs$core$IFn$_invoke$arity$variadic = G__33791__delegate;
return G__33791;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33794__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33794 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33795__i = 0, G__33795__a = new Array(arguments.length -  0);
while (G__33795__i < G__33795__a.length) {G__33795__a[G__33795__i] = arguments[G__33795__i + 0]; ++G__33795__i;}
  args = new cljs.core.IndexedSeq(G__33795__a,0);
} 
return G__33794__delegate.call(this,args);};
G__33794.cljs$lang$maxFixedArity = 0;
G__33794.cljs$lang$applyTo = (function (arglist__33796){
var args = cljs.core.seq(arglist__33796);
return G__33794__delegate(args);
});
G__33794.cljs$core$IFn$_invoke$arity$variadic = G__33794__delegate;
return G__33794;
})()
;

return null;
});
