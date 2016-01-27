goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__75612__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__75612 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__75613__i = 0, G__75613__a = new Array(arguments.length -  0);
while (G__75613__i < G__75613__a.length) {G__75613__a[G__75613__i] = arguments[G__75613__i + 0]; ++G__75613__i;}
  args = new cljs.core.IndexedSeq(G__75613__a,0);
} 
return G__75612__delegate.call(this,args);};
G__75612.cljs$lang$maxFixedArity = 0;
G__75612.cljs$lang$applyTo = (function (arglist__75614){
var args = cljs.core.seq(arglist__75614);
return G__75612__delegate(args);
});
G__75612.cljs$core$IFn$_invoke$arity$variadic = G__75612__delegate;
return G__75612;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__75615__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__75615 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__75616__i = 0, G__75616__a = new Array(arguments.length -  0);
while (G__75616__i < G__75616__a.length) {G__75616__a[G__75616__i] = arguments[G__75616__i + 0]; ++G__75616__i;}
  args = new cljs.core.IndexedSeq(G__75616__a,0);
} 
return G__75615__delegate.call(this,args);};
G__75615.cljs$lang$maxFixedArity = 0;
G__75615.cljs$lang$applyTo = (function (arglist__75617){
var args = cljs.core.seq(arglist__75617);
return G__75615__delegate(args);
});
G__75615.cljs$core$IFn$_invoke$arity$variadic = G__75615__delegate;
return G__75615;
})()
;

return null;
});
