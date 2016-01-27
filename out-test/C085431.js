goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__103612__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__103612 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__103613__i = 0, G__103613__a = new Array(arguments.length -  0);
while (G__103613__i < G__103613__a.length) {G__103613__a[G__103613__i] = arguments[G__103613__i + 0]; ++G__103613__i;}
  args = new cljs.core.IndexedSeq(G__103613__a,0);
} 
return G__103612__delegate.call(this,args);};
G__103612.cljs$lang$maxFixedArity = 0;
G__103612.cljs$lang$applyTo = (function (arglist__103614){
var args = cljs.core.seq(arglist__103614);
return G__103612__delegate(args);
});
G__103612.cljs$core$IFn$_invoke$arity$variadic = G__103612__delegate;
return G__103612;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__103615__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__103615 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__103616__i = 0, G__103616__a = new Array(arguments.length -  0);
while (G__103616__i < G__103616__a.length) {G__103616__a[G__103616__i] = arguments[G__103616__i + 0]; ++G__103616__i;}
  args = new cljs.core.IndexedSeq(G__103616__a,0);
} 
return G__103615__delegate.call(this,args);};
G__103615.cljs$lang$maxFixedArity = 0;
G__103615.cljs$lang$applyTo = (function (arglist__103617){
var args = cljs.core.seq(arglist__103617);
return G__103615__delegate(args);
});
G__103615.cljs$core$IFn$_invoke$arity$variadic = G__103615__delegate;
return G__103615;
})()
;

return null;
});
