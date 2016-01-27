goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__342086__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__342086 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__342087__i = 0, G__342087__a = new Array(arguments.length -  0);
while (G__342087__i < G__342087__a.length) {G__342087__a[G__342087__i] = arguments[G__342087__i + 0]; ++G__342087__i;}
  args = new cljs.core.IndexedSeq(G__342087__a,0);
} 
return G__342086__delegate.call(this,args);};
G__342086.cljs$lang$maxFixedArity = 0;
G__342086.cljs$lang$applyTo = (function (arglist__342088){
var args = cljs.core.seq(arglist__342088);
return G__342086__delegate(args);
});
G__342086.cljs$core$IFn$_invoke$arity$variadic = G__342086__delegate;
return G__342086;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__342089__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__342089 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__342090__i = 0, G__342090__a = new Array(arguments.length -  0);
while (G__342090__i < G__342090__a.length) {G__342090__a[G__342090__i] = arguments[G__342090__i + 0]; ++G__342090__i;}
  args = new cljs.core.IndexedSeq(G__342090__a,0);
} 
return G__342089__delegate.call(this,args);};
G__342089.cljs$lang$maxFixedArity = 0;
G__342089.cljs$lang$applyTo = (function (arglist__342091){
var args = cljs.core.seq(arglist__342091);
return G__342089__delegate(args);
});
G__342089.cljs$core$IFn$_invoke$arity$variadic = G__342089__delegate;
return G__342089;
})()
;

return null;
});
