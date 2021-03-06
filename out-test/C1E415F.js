goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__23254__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__23254 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23255__i = 0, G__23255__a = new Array(arguments.length -  0);
while (G__23255__i < G__23255__a.length) {G__23255__a[G__23255__i] = arguments[G__23255__i + 0]; ++G__23255__i;}
  args = new cljs.core.IndexedSeq(G__23255__a,0);
} 
return G__23254__delegate.call(this,args);};
G__23254.cljs$lang$maxFixedArity = 0;
G__23254.cljs$lang$applyTo = (function (arglist__23256){
var args = cljs.core.seq(arglist__23256);
return G__23254__delegate(args);
});
G__23254.cljs$core$IFn$_invoke$arity$variadic = G__23254__delegate;
return G__23254;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__23257__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__23257 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23258__i = 0, G__23258__a = new Array(arguments.length -  0);
while (G__23258__i < G__23258__a.length) {G__23258__a[G__23258__i] = arguments[G__23258__i + 0]; ++G__23258__i;}
  args = new cljs.core.IndexedSeq(G__23258__a,0);
} 
return G__23257__delegate.call(this,args);};
G__23257.cljs$lang$maxFixedArity = 0;
G__23257.cljs$lang$applyTo = (function (arglist__23259){
var args = cljs.core.seq(arglist__23259);
return G__23257__delegate(args);
});
G__23257.cljs$core$IFn$_invoke$arity$variadic = G__23257__delegate;
return G__23257;
})()
;

return null;
});
