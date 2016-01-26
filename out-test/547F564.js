goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18672__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18672 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18673__i = 0, G__18673__a = new Array(arguments.length -  0);
while (G__18673__i < G__18673__a.length) {G__18673__a[G__18673__i] = arguments[G__18673__i + 0]; ++G__18673__i;}
  args = new cljs.core.IndexedSeq(G__18673__a,0);
} 
return G__18672__delegate.call(this,args);};
G__18672.cljs$lang$maxFixedArity = 0;
G__18672.cljs$lang$applyTo = (function (arglist__18674){
var args = cljs.core.seq(arglist__18674);
return G__18672__delegate(args);
});
G__18672.cljs$core$IFn$_invoke$arity$variadic = G__18672__delegate;
return G__18672;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18675__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18675 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18676__i = 0, G__18676__a = new Array(arguments.length -  0);
while (G__18676__i < G__18676__a.length) {G__18676__a[G__18676__i] = arguments[G__18676__i + 0]; ++G__18676__i;}
  args = new cljs.core.IndexedSeq(G__18676__a,0);
} 
return G__18675__delegate.call(this,args);};
G__18675.cljs$lang$maxFixedArity = 0;
G__18675.cljs$lang$applyTo = (function (arglist__18677){
var args = cljs.core.seq(arglist__18677);
return G__18675__delegate(args);
});
G__18675.cljs$core$IFn$_invoke$arity$variadic = G__18675__delegate;
return G__18675;
})()
;

return null;
});
