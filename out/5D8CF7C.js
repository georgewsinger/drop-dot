goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__202232__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__202232 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__202233__i = 0, G__202233__a = new Array(arguments.length -  0);
while (G__202233__i < G__202233__a.length) {G__202233__a[G__202233__i] = arguments[G__202233__i + 0]; ++G__202233__i;}
  args = new cljs.core.IndexedSeq(G__202233__a,0);
} 
return G__202232__delegate.call(this,args);};
G__202232.cljs$lang$maxFixedArity = 0;
G__202232.cljs$lang$applyTo = (function (arglist__202234){
var args = cljs.core.seq(arglist__202234);
return G__202232__delegate(args);
});
G__202232.cljs$core$IFn$_invoke$arity$variadic = G__202232__delegate;
return G__202232;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__202235__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__202235 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__202236__i = 0, G__202236__a = new Array(arguments.length -  0);
while (G__202236__i < G__202236__a.length) {G__202236__a[G__202236__i] = arguments[G__202236__i + 0]; ++G__202236__i;}
  args = new cljs.core.IndexedSeq(G__202236__a,0);
} 
return G__202235__delegate.call(this,args);};
G__202235.cljs$lang$maxFixedArity = 0;
G__202235.cljs$lang$applyTo = (function (arglist__202237){
var args = cljs.core.seq(arglist__202237);
return G__202235__delegate(args);
});
G__202235.cljs$core$IFn$_invoke$arity$variadic = G__202235__delegate;
return G__202235;
})()
;

return null;
});
