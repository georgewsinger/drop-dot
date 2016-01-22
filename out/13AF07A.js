goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20041__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20041 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20042__i = 0, G__20042__a = new Array(arguments.length -  0);
while (G__20042__i < G__20042__a.length) {G__20042__a[G__20042__i] = arguments[G__20042__i + 0]; ++G__20042__i;}
  args = new cljs.core.IndexedSeq(G__20042__a,0);
} 
return G__20041__delegate.call(this,args);};
G__20041.cljs$lang$maxFixedArity = 0;
G__20041.cljs$lang$applyTo = (function (arglist__20043){
var args = cljs.core.seq(arglist__20043);
return G__20041__delegate(args);
});
G__20041.cljs$core$IFn$_invoke$arity$variadic = G__20041__delegate;
return G__20041;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20044__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20044 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20045__i = 0, G__20045__a = new Array(arguments.length -  0);
while (G__20045__i < G__20045__a.length) {G__20045__a[G__20045__i] = arguments[G__20045__i + 0]; ++G__20045__i;}
  args = new cljs.core.IndexedSeq(G__20045__a,0);
} 
return G__20044__delegate.call(this,args);};
G__20044.cljs$lang$maxFixedArity = 0;
G__20044.cljs$lang$applyTo = (function (arglist__20046){
var args = cljs.core.seq(arglist__20046);
return G__20044__delegate(args);
});
G__20044.cljs$core$IFn$_invoke$arity$variadic = G__20044__delegate;
return G__20044;
})()
;

return null;
});
