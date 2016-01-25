goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__49636__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__49636 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49637__i = 0, G__49637__a = new Array(arguments.length -  0);
while (G__49637__i < G__49637__a.length) {G__49637__a[G__49637__i] = arguments[G__49637__i + 0]; ++G__49637__i;}
  args = new cljs.core.IndexedSeq(G__49637__a,0);
} 
return G__49636__delegate.call(this,args);};
G__49636.cljs$lang$maxFixedArity = 0;
G__49636.cljs$lang$applyTo = (function (arglist__49638){
var args = cljs.core.seq(arglist__49638);
return G__49636__delegate(args);
});
G__49636.cljs$core$IFn$_invoke$arity$variadic = G__49636__delegate;
return G__49636;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__49639__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__49639 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49640__i = 0, G__49640__a = new Array(arguments.length -  0);
while (G__49640__i < G__49640__a.length) {G__49640__a[G__49640__i] = arguments[G__49640__i + 0]; ++G__49640__i;}
  args = new cljs.core.IndexedSeq(G__49640__a,0);
} 
return G__49639__delegate.call(this,args);};
G__49639.cljs$lang$maxFixedArity = 0;
G__49639.cljs$lang$applyTo = (function (arglist__49641){
var args = cljs.core.seq(arglist__49641);
return G__49639__delegate(args);
});
G__49639.cljs$core$IFn$_invoke$arity$variadic = G__49639__delegate;
return G__49639;
})()
;

return null;
});
