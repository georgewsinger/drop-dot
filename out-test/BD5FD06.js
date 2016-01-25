goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22328__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22328 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22329__i = 0, G__22329__a = new Array(arguments.length -  0);
while (G__22329__i < G__22329__a.length) {G__22329__a[G__22329__i] = arguments[G__22329__i + 0]; ++G__22329__i;}
  args = new cljs.core.IndexedSeq(G__22329__a,0);
} 
return G__22328__delegate.call(this,args);};
G__22328.cljs$lang$maxFixedArity = 0;
G__22328.cljs$lang$applyTo = (function (arglist__22330){
var args = cljs.core.seq(arglist__22330);
return G__22328__delegate(args);
});
G__22328.cljs$core$IFn$_invoke$arity$variadic = G__22328__delegate;
return G__22328;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22331__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22331 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22332__i = 0, G__22332__a = new Array(arguments.length -  0);
while (G__22332__i < G__22332__a.length) {G__22332__a[G__22332__i] = arguments[G__22332__i + 0]; ++G__22332__i;}
  args = new cljs.core.IndexedSeq(G__22332__a,0);
} 
return G__22331__delegate.call(this,args);};
G__22331.cljs$lang$maxFixedArity = 0;
G__22331.cljs$lang$applyTo = (function (arglist__22333){
var args = cljs.core.seq(arglist__22333);
return G__22331__delegate(args);
});
G__22331.cljs$core$IFn$_invoke$arity$variadic = G__22331__delegate;
return G__22331;
})()
;

return null;
});
