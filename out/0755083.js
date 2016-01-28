goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__371211__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__371211 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__371212__i = 0, G__371212__a = new Array(arguments.length -  0);
while (G__371212__i < G__371212__a.length) {G__371212__a[G__371212__i] = arguments[G__371212__i + 0]; ++G__371212__i;}
  args = new cljs.core.IndexedSeq(G__371212__a,0);
} 
return G__371211__delegate.call(this,args);};
G__371211.cljs$lang$maxFixedArity = 0;
G__371211.cljs$lang$applyTo = (function (arglist__371213){
var args = cljs.core.seq(arglist__371213);
return G__371211__delegate(args);
});
G__371211.cljs$core$IFn$_invoke$arity$variadic = G__371211__delegate;
return G__371211;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__371214__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__371214 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__371215__i = 0, G__371215__a = new Array(arguments.length -  0);
while (G__371215__i < G__371215__a.length) {G__371215__a[G__371215__i] = arguments[G__371215__i + 0]; ++G__371215__i;}
  args = new cljs.core.IndexedSeq(G__371215__a,0);
} 
return G__371214__delegate.call(this,args);};
G__371214.cljs$lang$maxFixedArity = 0;
G__371214.cljs$lang$applyTo = (function (arglist__371216){
var args = cljs.core.seq(arglist__371216);
return G__371214__delegate(args);
});
G__371214.cljs$core$IFn$_invoke$arity$variadic = G__371214__delegate;
return G__371214;
})()
;

return null;
});
