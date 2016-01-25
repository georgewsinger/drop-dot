goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12272__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12272 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12273__i = 0, G__12273__a = new Array(arguments.length -  0);
while (G__12273__i < G__12273__a.length) {G__12273__a[G__12273__i] = arguments[G__12273__i + 0]; ++G__12273__i;}
  args = new cljs.core.IndexedSeq(G__12273__a,0);
} 
return G__12272__delegate.call(this,args);};
G__12272.cljs$lang$maxFixedArity = 0;
G__12272.cljs$lang$applyTo = (function (arglist__12274){
var args = cljs.core.seq(arglist__12274);
return G__12272__delegate(args);
});
G__12272.cljs$core$IFn$_invoke$arity$variadic = G__12272__delegate;
return G__12272;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12275__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12275 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12276__i = 0, G__12276__a = new Array(arguments.length -  0);
while (G__12276__i < G__12276__a.length) {G__12276__a[G__12276__i] = arguments[G__12276__i + 0]; ++G__12276__i;}
  args = new cljs.core.IndexedSeq(G__12276__a,0);
} 
return G__12275__delegate.call(this,args);};
G__12275.cljs$lang$maxFixedArity = 0;
G__12275.cljs$lang$applyTo = (function (arglist__12277){
var args = cljs.core.seq(arglist__12277);
return G__12275__delegate(args);
});
G__12275.cljs$core$IFn$_invoke$arity$variadic = G__12275__delegate;
return G__12275;
})()
;

return null;
});
