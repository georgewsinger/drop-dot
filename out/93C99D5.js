goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__64325__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__64325 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64326__i = 0, G__64326__a = new Array(arguments.length -  0);
while (G__64326__i < G__64326__a.length) {G__64326__a[G__64326__i] = arguments[G__64326__i + 0]; ++G__64326__i;}
  args = new cljs.core.IndexedSeq(G__64326__a,0);
} 
return G__64325__delegate.call(this,args);};
G__64325.cljs$lang$maxFixedArity = 0;
G__64325.cljs$lang$applyTo = (function (arglist__64327){
var args = cljs.core.seq(arglist__64327);
return G__64325__delegate(args);
});
G__64325.cljs$core$IFn$_invoke$arity$variadic = G__64325__delegate;
return G__64325;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__64328__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__64328 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64329__i = 0, G__64329__a = new Array(arguments.length -  0);
while (G__64329__i < G__64329__a.length) {G__64329__a[G__64329__i] = arguments[G__64329__i + 0]; ++G__64329__i;}
  args = new cljs.core.IndexedSeq(G__64329__a,0);
} 
return G__64328__delegate.call(this,args);};
G__64328.cljs$lang$maxFixedArity = 0;
G__64328.cljs$lang$applyTo = (function (arglist__64330){
var args = cljs.core.seq(arglist__64330);
return G__64328__delegate(args);
});
G__64328.cljs$core$IFn$_invoke$arity$variadic = G__64328__delegate;
return G__64328;
})()
;

return null;
});
