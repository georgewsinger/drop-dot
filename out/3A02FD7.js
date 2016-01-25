goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__251672__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__251672 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__251673__i = 0, G__251673__a = new Array(arguments.length -  0);
while (G__251673__i < G__251673__a.length) {G__251673__a[G__251673__i] = arguments[G__251673__i + 0]; ++G__251673__i;}
  args = new cljs.core.IndexedSeq(G__251673__a,0);
} 
return G__251672__delegate.call(this,args);};
G__251672.cljs$lang$maxFixedArity = 0;
G__251672.cljs$lang$applyTo = (function (arglist__251674){
var args = cljs.core.seq(arglist__251674);
return G__251672__delegate(args);
});
G__251672.cljs$core$IFn$_invoke$arity$variadic = G__251672__delegate;
return G__251672;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__251675__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__251675 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__251676__i = 0, G__251676__a = new Array(arguments.length -  0);
while (G__251676__i < G__251676__a.length) {G__251676__a[G__251676__i] = arguments[G__251676__i + 0]; ++G__251676__i;}
  args = new cljs.core.IndexedSeq(G__251676__a,0);
} 
return G__251675__delegate.call(this,args);};
G__251675.cljs$lang$maxFixedArity = 0;
G__251675.cljs$lang$applyTo = (function (arglist__251677){
var args = cljs.core.seq(arglist__251677);
return G__251675__delegate(args);
});
G__251675.cljs$core$IFn$_invoke$arity$variadic = G__251675__delegate;
return G__251675;
})()
;

return null;
});
