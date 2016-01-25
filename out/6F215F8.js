goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__260407__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__260407 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__260408__i = 0, G__260408__a = new Array(arguments.length -  0);
while (G__260408__i < G__260408__a.length) {G__260408__a[G__260408__i] = arguments[G__260408__i + 0]; ++G__260408__i;}
  args = new cljs.core.IndexedSeq(G__260408__a,0);
} 
return G__260407__delegate.call(this,args);};
G__260407.cljs$lang$maxFixedArity = 0;
G__260407.cljs$lang$applyTo = (function (arglist__260409){
var args = cljs.core.seq(arglist__260409);
return G__260407__delegate(args);
});
G__260407.cljs$core$IFn$_invoke$arity$variadic = G__260407__delegate;
return G__260407;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__260410__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__260410 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__260411__i = 0, G__260411__a = new Array(arguments.length -  0);
while (G__260411__i < G__260411__a.length) {G__260411__a[G__260411__i] = arguments[G__260411__i + 0]; ++G__260411__i;}
  args = new cljs.core.IndexedSeq(G__260411__a,0);
} 
return G__260410__delegate.call(this,args);};
G__260410.cljs$lang$maxFixedArity = 0;
G__260410.cljs$lang$applyTo = (function (arglist__260412){
var args = cljs.core.seq(arglist__260412);
return G__260410__delegate(args);
});
G__260410.cljs$core$IFn$_invoke$arity$variadic = G__260410__delegate;
return G__260410;
})()
;

return null;
});
