goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__140458__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__140458 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__140459__i = 0, G__140459__a = new Array(arguments.length -  0);
while (G__140459__i < G__140459__a.length) {G__140459__a[G__140459__i] = arguments[G__140459__i + 0]; ++G__140459__i;}
  args = new cljs.core.IndexedSeq(G__140459__a,0);
} 
return G__140458__delegate.call(this,args);};
G__140458.cljs$lang$maxFixedArity = 0;
G__140458.cljs$lang$applyTo = (function (arglist__140460){
var args = cljs.core.seq(arglist__140460);
return G__140458__delegate(args);
});
G__140458.cljs$core$IFn$_invoke$arity$variadic = G__140458__delegate;
return G__140458;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__140461__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__140461 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__140462__i = 0, G__140462__a = new Array(arguments.length -  0);
while (G__140462__i < G__140462__a.length) {G__140462__a[G__140462__i] = arguments[G__140462__i + 0]; ++G__140462__i;}
  args = new cljs.core.IndexedSeq(G__140462__a,0);
} 
return G__140461__delegate.call(this,args);};
G__140461.cljs$lang$maxFixedArity = 0;
G__140461.cljs$lang$applyTo = (function (arglist__140463){
var args = cljs.core.seq(arglist__140463);
return G__140461__delegate(args);
});
G__140461.cljs$core$IFn$_invoke$arity$variadic = G__140461__delegate;
return G__140461;
})()
;

return null;
});
