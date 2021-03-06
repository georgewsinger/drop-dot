goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12721__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12721 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12722__i = 0, G__12722__a = new Array(arguments.length -  0);
while (G__12722__i < G__12722__a.length) {G__12722__a[G__12722__i] = arguments[G__12722__i + 0]; ++G__12722__i;}
  args = new cljs.core.IndexedSeq(G__12722__a,0);
} 
return G__12721__delegate.call(this,args);};
G__12721.cljs$lang$maxFixedArity = 0;
G__12721.cljs$lang$applyTo = (function (arglist__12723){
var args = cljs.core.seq(arglist__12723);
return G__12721__delegate(args);
});
G__12721.cljs$core$IFn$_invoke$arity$variadic = G__12721__delegate;
return G__12721;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12724__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12724 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12725__i = 0, G__12725__a = new Array(arguments.length -  0);
while (G__12725__i < G__12725__a.length) {G__12725__a[G__12725__i] = arguments[G__12725__i + 0]; ++G__12725__i;}
  args = new cljs.core.IndexedSeq(G__12725__a,0);
} 
return G__12724__delegate.call(this,args);};
G__12724.cljs$lang$maxFixedArity = 0;
G__12724.cljs$lang$applyTo = (function (arglist__12726){
var args = cljs.core.seq(arglist__12726);
return G__12724__delegate(args);
});
G__12724.cljs$core$IFn$_invoke$arity$variadic = G__12724__delegate;
return G__12724;
})()
;

return null;
});
