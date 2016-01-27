goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__297838__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__297838 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__297839__i = 0, G__297839__a = new Array(arguments.length -  0);
while (G__297839__i < G__297839__a.length) {G__297839__a[G__297839__i] = arguments[G__297839__i + 0]; ++G__297839__i;}
  args = new cljs.core.IndexedSeq(G__297839__a,0);
} 
return G__297838__delegate.call(this,args);};
G__297838.cljs$lang$maxFixedArity = 0;
G__297838.cljs$lang$applyTo = (function (arglist__297840){
var args = cljs.core.seq(arglist__297840);
return G__297838__delegate(args);
});
G__297838.cljs$core$IFn$_invoke$arity$variadic = G__297838__delegate;
return G__297838;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__297841__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__297841 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__297842__i = 0, G__297842__a = new Array(arguments.length -  0);
while (G__297842__i < G__297842__a.length) {G__297842__a[G__297842__i] = arguments[G__297842__i + 0]; ++G__297842__i;}
  args = new cljs.core.IndexedSeq(G__297842__a,0);
} 
return G__297841__delegate.call(this,args);};
G__297841.cljs$lang$maxFixedArity = 0;
G__297841.cljs$lang$applyTo = (function (arglist__297843){
var args = cljs.core.seq(arglist__297843);
return G__297841__delegate(args);
});
G__297841.cljs$core$IFn$_invoke$arity$variadic = G__297841__delegate;
return G__297841;
})()
;

return null;
});
