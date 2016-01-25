goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11300__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11300 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11301__i = 0, G__11301__a = new Array(arguments.length -  0);
while (G__11301__i < G__11301__a.length) {G__11301__a[G__11301__i] = arguments[G__11301__i + 0]; ++G__11301__i;}
  args = new cljs.core.IndexedSeq(G__11301__a,0);
} 
return G__11300__delegate.call(this,args);};
G__11300.cljs$lang$maxFixedArity = 0;
G__11300.cljs$lang$applyTo = (function (arglist__11302){
var args = cljs.core.seq(arglist__11302);
return G__11300__delegate(args);
});
G__11300.cljs$core$IFn$_invoke$arity$variadic = G__11300__delegate;
return G__11300;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11303__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11303 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11304__i = 0, G__11304__a = new Array(arguments.length -  0);
while (G__11304__i < G__11304__a.length) {G__11304__a[G__11304__i] = arguments[G__11304__i + 0]; ++G__11304__i;}
  args = new cljs.core.IndexedSeq(G__11304__a,0);
} 
return G__11303__delegate.call(this,args);};
G__11303.cljs$lang$maxFixedArity = 0;
G__11303.cljs$lang$applyTo = (function (arglist__11305){
var args = cljs.core.seq(arglist__11305);
return G__11303__delegate(args);
});
G__11303.cljs$core$IFn$_invoke$arity$variadic = G__11303__delegate;
return G__11303;
})()
;

return null;
});
