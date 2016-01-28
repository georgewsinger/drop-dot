goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__393721__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__393721 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__393722__i = 0, G__393722__a = new Array(arguments.length -  0);
while (G__393722__i < G__393722__a.length) {G__393722__a[G__393722__i] = arguments[G__393722__i + 0]; ++G__393722__i;}
  args = new cljs.core.IndexedSeq(G__393722__a,0);
} 
return G__393721__delegate.call(this,args);};
G__393721.cljs$lang$maxFixedArity = 0;
G__393721.cljs$lang$applyTo = (function (arglist__393723){
var args = cljs.core.seq(arglist__393723);
return G__393721__delegate(args);
});
G__393721.cljs$core$IFn$_invoke$arity$variadic = G__393721__delegate;
return G__393721;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__393724__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__393724 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__393725__i = 0, G__393725__a = new Array(arguments.length -  0);
while (G__393725__i < G__393725__a.length) {G__393725__a[G__393725__i] = arguments[G__393725__i + 0]; ++G__393725__i;}
  args = new cljs.core.IndexedSeq(G__393725__a,0);
} 
return G__393724__delegate.call(this,args);};
G__393724.cljs$lang$maxFixedArity = 0;
G__393724.cljs$lang$applyTo = (function (arglist__393726){
var args = cljs.core.seq(arglist__393726);
return G__393724__delegate(args);
});
G__393724.cljs$core$IFn$_invoke$arity$variadic = G__393724__delegate;
return G__393724;
})()
;

return null;
});
