goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__40818__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__40818 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40819__i = 0, G__40819__a = new Array(arguments.length -  0);
while (G__40819__i < G__40819__a.length) {G__40819__a[G__40819__i] = arguments[G__40819__i + 0]; ++G__40819__i;}
  args = new cljs.core.IndexedSeq(G__40819__a,0);
} 
return G__40818__delegate.call(this,args);};
G__40818.cljs$lang$maxFixedArity = 0;
G__40818.cljs$lang$applyTo = (function (arglist__40820){
var args = cljs.core.seq(arglist__40820);
return G__40818__delegate(args);
});
G__40818.cljs$core$IFn$_invoke$arity$variadic = G__40818__delegate;
return G__40818;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__40821__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__40821 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40822__i = 0, G__40822__a = new Array(arguments.length -  0);
while (G__40822__i < G__40822__a.length) {G__40822__a[G__40822__i] = arguments[G__40822__i + 0]; ++G__40822__i;}
  args = new cljs.core.IndexedSeq(G__40822__a,0);
} 
return G__40821__delegate.call(this,args);};
G__40821.cljs$lang$maxFixedArity = 0;
G__40821.cljs$lang$applyTo = (function (arglist__40823){
var args = cljs.core.seq(arglist__40823);
return G__40821__delegate(args);
});
G__40821.cljs$core$IFn$_invoke$arity$variadic = G__40821__delegate;
return G__40821;
})()
;

return null;
});
