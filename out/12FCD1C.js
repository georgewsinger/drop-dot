goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__49796__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__49796 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49797__i = 0, G__49797__a = new Array(arguments.length -  0);
while (G__49797__i < G__49797__a.length) {G__49797__a[G__49797__i] = arguments[G__49797__i + 0]; ++G__49797__i;}
  args = new cljs.core.IndexedSeq(G__49797__a,0);
} 
return G__49796__delegate.call(this,args);};
G__49796.cljs$lang$maxFixedArity = 0;
G__49796.cljs$lang$applyTo = (function (arglist__49798){
var args = cljs.core.seq(arglist__49798);
return G__49796__delegate(args);
});
G__49796.cljs$core$IFn$_invoke$arity$variadic = G__49796__delegate;
return G__49796;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__49799__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__49799 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49800__i = 0, G__49800__a = new Array(arguments.length -  0);
while (G__49800__i < G__49800__a.length) {G__49800__a[G__49800__i] = arguments[G__49800__i + 0]; ++G__49800__i;}
  args = new cljs.core.IndexedSeq(G__49800__a,0);
} 
return G__49799__delegate.call(this,args);};
G__49799.cljs$lang$maxFixedArity = 0;
G__49799.cljs$lang$applyTo = (function (arglist__49801){
var args = cljs.core.seq(arglist__49801);
return G__49799__delegate(args);
});
G__49799.cljs$core$IFn$_invoke$arity$variadic = G__49799__delegate;
return G__49799;
})()
;

return null;
});
