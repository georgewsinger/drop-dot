goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__234996__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__234996 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__234997__i = 0, G__234997__a = new Array(arguments.length -  0);
while (G__234997__i < G__234997__a.length) {G__234997__a[G__234997__i] = arguments[G__234997__i + 0]; ++G__234997__i;}
  args = new cljs.core.IndexedSeq(G__234997__a,0);
} 
return G__234996__delegate.call(this,args);};
G__234996.cljs$lang$maxFixedArity = 0;
G__234996.cljs$lang$applyTo = (function (arglist__234998){
var args = cljs.core.seq(arglist__234998);
return G__234996__delegate(args);
});
G__234996.cljs$core$IFn$_invoke$arity$variadic = G__234996__delegate;
return G__234996;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__234999__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__234999 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__235000__i = 0, G__235000__a = new Array(arguments.length -  0);
while (G__235000__i < G__235000__a.length) {G__235000__a[G__235000__i] = arguments[G__235000__i + 0]; ++G__235000__i;}
  args = new cljs.core.IndexedSeq(G__235000__a,0);
} 
return G__234999__delegate.call(this,args);};
G__234999.cljs$lang$maxFixedArity = 0;
G__234999.cljs$lang$applyTo = (function (arglist__235001){
var args = cljs.core.seq(arglist__235001);
return G__234999__delegate(args);
});
G__234999.cljs$core$IFn$_invoke$arity$variadic = G__234999__delegate;
return G__234999;
})()
;

return null;
});
