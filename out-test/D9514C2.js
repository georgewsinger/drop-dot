goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__60773__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__60773 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60774__i = 0, G__60774__a = new Array(arguments.length -  0);
while (G__60774__i < G__60774__a.length) {G__60774__a[G__60774__i] = arguments[G__60774__i + 0]; ++G__60774__i;}
  args = new cljs.core.IndexedSeq(G__60774__a,0);
} 
return G__60773__delegate.call(this,args);};
G__60773.cljs$lang$maxFixedArity = 0;
G__60773.cljs$lang$applyTo = (function (arglist__60775){
var args = cljs.core.seq(arglist__60775);
return G__60773__delegate(args);
});
G__60773.cljs$core$IFn$_invoke$arity$variadic = G__60773__delegate;
return G__60773;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__60776__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__60776 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60777__i = 0, G__60777__a = new Array(arguments.length -  0);
while (G__60777__i < G__60777__a.length) {G__60777__a[G__60777__i] = arguments[G__60777__i + 0]; ++G__60777__i;}
  args = new cljs.core.IndexedSeq(G__60777__a,0);
} 
return G__60776__delegate.call(this,args);};
G__60776.cljs$lang$maxFixedArity = 0;
G__60776.cljs$lang$applyTo = (function (arglist__60778){
var args = cljs.core.seq(arglist__60778);
return G__60776__delegate(args);
});
G__60776.cljs$core$IFn$_invoke$arity$variadic = G__60776__delegate;
return G__60776;
})()
;

return null;
});
