goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__322040__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__322040 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__322041__i = 0, G__322041__a = new Array(arguments.length -  0);
while (G__322041__i < G__322041__a.length) {G__322041__a[G__322041__i] = arguments[G__322041__i + 0]; ++G__322041__i;}
  args = new cljs.core.IndexedSeq(G__322041__a,0);
} 
return G__322040__delegate.call(this,args);};
G__322040.cljs$lang$maxFixedArity = 0;
G__322040.cljs$lang$applyTo = (function (arglist__322042){
var args = cljs.core.seq(arglist__322042);
return G__322040__delegate(args);
});
G__322040.cljs$core$IFn$_invoke$arity$variadic = G__322040__delegate;
return G__322040;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__322043__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__322043 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__322044__i = 0, G__322044__a = new Array(arguments.length -  0);
while (G__322044__i < G__322044__a.length) {G__322044__a[G__322044__i] = arguments[G__322044__i + 0]; ++G__322044__i;}
  args = new cljs.core.IndexedSeq(G__322044__a,0);
} 
return G__322043__delegate.call(this,args);};
G__322043.cljs$lang$maxFixedArity = 0;
G__322043.cljs$lang$applyTo = (function (arglist__322045){
var args = cljs.core.seq(arglist__322045);
return G__322043__delegate(args);
});
G__322043.cljs$core$IFn$_invoke$arity$variadic = G__322043__delegate;
return G__322043;
})()
;

return null;
});
