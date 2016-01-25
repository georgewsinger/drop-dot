goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__60499__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__60499 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60500__i = 0, G__60500__a = new Array(arguments.length -  0);
while (G__60500__i < G__60500__a.length) {G__60500__a[G__60500__i] = arguments[G__60500__i + 0]; ++G__60500__i;}
  args = new cljs.core.IndexedSeq(G__60500__a,0);
} 
return G__60499__delegate.call(this,args);};
G__60499.cljs$lang$maxFixedArity = 0;
G__60499.cljs$lang$applyTo = (function (arglist__60501){
var args = cljs.core.seq(arglist__60501);
return G__60499__delegate(args);
});
G__60499.cljs$core$IFn$_invoke$arity$variadic = G__60499__delegate;
return G__60499;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__60502__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__60502 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60503__i = 0, G__60503__a = new Array(arguments.length -  0);
while (G__60503__i < G__60503__a.length) {G__60503__a[G__60503__i] = arguments[G__60503__i + 0]; ++G__60503__i;}
  args = new cljs.core.IndexedSeq(G__60503__a,0);
} 
return G__60502__delegate.call(this,args);};
G__60502.cljs$lang$maxFixedArity = 0;
G__60502.cljs$lang$applyTo = (function (arglist__60504){
var args = cljs.core.seq(arglist__60504);
return G__60502__delegate(args);
});
G__60502.cljs$core$IFn$_invoke$arity$variadic = G__60502__delegate;
return G__60502;
})()
;

return null;
});
