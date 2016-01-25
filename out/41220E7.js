goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__61171__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__61171 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61172__i = 0, G__61172__a = new Array(arguments.length -  0);
while (G__61172__i < G__61172__a.length) {G__61172__a[G__61172__i] = arguments[G__61172__i + 0]; ++G__61172__i;}
  args = new cljs.core.IndexedSeq(G__61172__a,0);
} 
return G__61171__delegate.call(this,args);};
G__61171.cljs$lang$maxFixedArity = 0;
G__61171.cljs$lang$applyTo = (function (arglist__61173){
var args = cljs.core.seq(arglist__61173);
return G__61171__delegate(args);
});
G__61171.cljs$core$IFn$_invoke$arity$variadic = G__61171__delegate;
return G__61171;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__61174__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__61174 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61175__i = 0, G__61175__a = new Array(arguments.length -  0);
while (G__61175__i < G__61175__a.length) {G__61175__a[G__61175__i] = arguments[G__61175__i + 0]; ++G__61175__i;}
  args = new cljs.core.IndexedSeq(G__61175__a,0);
} 
return G__61174__delegate.call(this,args);};
G__61174.cljs$lang$maxFixedArity = 0;
G__61174.cljs$lang$applyTo = (function (arglist__61176){
var args = cljs.core.seq(arglist__61176);
return G__61174__delegate(args);
});
G__61174.cljs$core$IFn$_invoke$arity$variadic = G__61174__delegate;
return G__61174;
})()
;

return null;
});
