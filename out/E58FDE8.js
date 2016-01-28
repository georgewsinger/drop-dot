goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__385686__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__385686 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__385687__i = 0, G__385687__a = new Array(arguments.length -  0);
while (G__385687__i < G__385687__a.length) {G__385687__a[G__385687__i] = arguments[G__385687__i + 0]; ++G__385687__i;}
  args = new cljs.core.IndexedSeq(G__385687__a,0);
} 
return G__385686__delegate.call(this,args);};
G__385686.cljs$lang$maxFixedArity = 0;
G__385686.cljs$lang$applyTo = (function (arglist__385688){
var args = cljs.core.seq(arglist__385688);
return G__385686__delegate(args);
});
G__385686.cljs$core$IFn$_invoke$arity$variadic = G__385686__delegate;
return G__385686;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__385689__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__385689 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__385690__i = 0, G__385690__a = new Array(arguments.length -  0);
while (G__385690__i < G__385690__a.length) {G__385690__a[G__385690__i] = arguments[G__385690__i + 0]; ++G__385690__i;}
  args = new cljs.core.IndexedSeq(G__385690__a,0);
} 
return G__385689__delegate.call(this,args);};
G__385689.cljs$lang$maxFixedArity = 0;
G__385689.cljs$lang$applyTo = (function (arglist__385691){
var args = cljs.core.seq(arglist__385691);
return G__385689__delegate(args);
});
G__385689.cljs$core$IFn$_invoke$arity$variadic = G__385689__delegate;
return G__385689;
})()
;

return null;
});
