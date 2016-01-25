goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__53254__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__53254 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53255__i = 0, G__53255__a = new Array(arguments.length -  0);
while (G__53255__i < G__53255__a.length) {G__53255__a[G__53255__i] = arguments[G__53255__i + 0]; ++G__53255__i;}
  args = new cljs.core.IndexedSeq(G__53255__a,0);
} 
return G__53254__delegate.call(this,args);};
G__53254.cljs$lang$maxFixedArity = 0;
G__53254.cljs$lang$applyTo = (function (arglist__53256){
var args = cljs.core.seq(arglist__53256);
return G__53254__delegate(args);
});
G__53254.cljs$core$IFn$_invoke$arity$variadic = G__53254__delegate;
return G__53254;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__53257__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__53257 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53258__i = 0, G__53258__a = new Array(arguments.length -  0);
while (G__53258__i < G__53258__a.length) {G__53258__a[G__53258__i] = arguments[G__53258__i + 0]; ++G__53258__i;}
  args = new cljs.core.IndexedSeq(G__53258__a,0);
} 
return G__53257__delegate.call(this,args);};
G__53257.cljs$lang$maxFixedArity = 0;
G__53257.cljs$lang$applyTo = (function (arglist__53259){
var args = cljs.core.seq(arglist__53259);
return G__53257__delegate(args);
});
G__53257.cljs$core$IFn$_invoke$arity$variadic = G__53257__delegate;
return G__53257;
})()
;

return null;
});
