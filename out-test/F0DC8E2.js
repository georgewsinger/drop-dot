goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33175__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33175 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33176__i = 0, G__33176__a = new Array(arguments.length -  0);
while (G__33176__i < G__33176__a.length) {G__33176__a[G__33176__i] = arguments[G__33176__i + 0]; ++G__33176__i;}
  args = new cljs.core.IndexedSeq(G__33176__a,0);
} 
return G__33175__delegate.call(this,args);};
G__33175.cljs$lang$maxFixedArity = 0;
G__33175.cljs$lang$applyTo = (function (arglist__33177){
var args = cljs.core.seq(arglist__33177);
return G__33175__delegate(args);
});
G__33175.cljs$core$IFn$_invoke$arity$variadic = G__33175__delegate;
return G__33175;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33178__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33178 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33179__i = 0, G__33179__a = new Array(arguments.length -  0);
while (G__33179__i < G__33179__a.length) {G__33179__a[G__33179__i] = arguments[G__33179__i + 0]; ++G__33179__i;}
  args = new cljs.core.IndexedSeq(G__33179__a,0);
} 
return G__33178__delegate.call(this,args);};
G__33178.cljs$lang$maxFixedArity = 0;
G__33178.cljs$lang$applyTo = (function (arglist__33180){
var args = cljs.core.seq(arglist__33180);
return G__33178__delegate(args);
});
G__33178.cljs$core$IFn$_invoke$arity$variadic = G__33178__delegate;
return G__33178;
})()
;

return null;
});
