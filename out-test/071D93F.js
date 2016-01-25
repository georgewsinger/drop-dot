goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31479__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__31479 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31480__i = 0, G__31480__a = new Array(arguments.length -  0);
while (G__31480__i < G__31480__a.length) {G__31480__a[G__31480__i] = arguments[G__31480__i + 0]; ++G__31480__i;}
  args = new cljs.core.IndexedSeq(G__31480__a,0);
} 
return G__31479__delegate.call(this,args);};
G__31479.cljs$lang$maxFixedArity = 0;
G__31479.cljs$lang$applyTo = (function (arglist__31481){
var args = cljs.core.seq(arglist__31481);
return G__31479__delegate(args);
});
G__31479.cljs$core$IFn$_invoke$arity$variadic = G__31479__delegate;
return G__31479;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__31482__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__31482 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31483__i = 0, G__31483__a = new Array(arguments.length -  0);
while (G__31483__i < G__31483__a.length) {G__31483__a[G__31483__i] = arguments[G__31483__i + 0]; ++G__31483__i;}
  args = new cljs.core.IndexedSeq(G__31483__a,0);
} 
return G__31482__delegate.call(this,args);};
G__31482.cljs$lang$maxFixedArity = 0;
G__31482.cljs$lang$applyTo = (function (arglist__31484){
var args = cljs.core.seq(arglist__31484);
return G__31482__delegate(args);
});
G__31482.cljs$core$IFn$_invoke$arity$variadic = G__31482__delegate;
return G__31482;
})()
;

return null;
});
