goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__54572__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__54572 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54573__i = 0, G__54573__a = new Array(arguments.length -  0);
while (G__54573__i < G__54573__a.length) {G__54573__a[G__54573__i] = arguments[G__54573__i + 0]; ++G__54573__i;}
  args = new cljs.core.IndexedSeq(G__54573__a,0);
} 
return G__54572__delegate.call(this,args);};
G__54572.cljs$lang$maxFixedArity = 0;
G__54572.cljs$lang$applyTo = (function (arglist__54574){
var args = cljs.core.seq(arglist__54574);
return G__54572__delegate(args);
});
G__54572.cljs$core$IFn$_invoke$arity$variadic = G__54572__delegate;
return G__54572;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__54575__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__54575 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54576__i = 0, G__54576__a = new Array(arguments.length -  0);
while (G__54576__i < G__54576__a.length) {G__54576__a[G__54576__i] = arguments[G__54576__i + 0]; ++G__54576__i;}
  args = new cljs.core.IndexedSeq(G__54576__a,0);
} 
return G__54575__delegate.call(this,args);};
G__54575.cljs$lang$maxFixedArity = 0;
G__54575.cljs$lang$applyTo = (function (arglist__54577){
var args = cljs.core.seq(arglist__54577);
return G__54575__delegate(args);
});
G__54575.cljs$core$IFn$_invoke$arity$variadic = G__54575__delegate;
return G__54575;
})()
;

return null;
});
