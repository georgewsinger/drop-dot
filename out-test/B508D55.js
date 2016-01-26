goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22875__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22875 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22876__i = 0, G__22876__a = new Array(arguments.length -  0);
while (G__22876__i < G__22876__a.length) {G__22876__a[G__22876__i] = arguments[G__22876__i + 0]; ++G__22876__i;}
  args = new cljs.core.IndexedSeq(G__22876__a,0);
} 
return G__22875__delegate.call(this,args);};
G__22875.cljs$lang$maxFixedArity = 0;
G__22875.cljs$lang$applyTo = (function (arglist__22877){
var args = cljs.core.seq(arglist__22877);
return G__22875__delegate(args);
});
G__22875.cljs$core$IFn$_invoke$arity$variadic = G__22875__delegate;
return G__22875;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22878__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22878 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22879__i = 0, G__22879__a = new Array(arguments.length -  0);
while (G__22879__i < G__22879__a.length) {G__22879__a[G__22879__i] = arguments[G__22879__i + 0]; ++G__22879__i;}
  args = new cljs.core.IndexedSeq(G__22879__a,0);
} 
return G__22878__delegate.call(this,args);};
G__22878.cljs$lang$maxFixedArity = 0;
G__22878.cljs$lang$applyTo = (function (arglist__22880){
var args = cljs.core.seq(arglist__22880);
return G__22878__delegate(args);
});
G__22878.cljs$core$IFn$_invoke$arity$variadic = G__22878__delegate;
return G__22878;
})()
;

return null;
});
