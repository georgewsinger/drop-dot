goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__255620__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__255620 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__255621__i = 0, G__255621__a = new Array(arguments.length -  0);
while (G__255621__i < G__255621__a.length) {G__255621__a[G__255621__i] = arguments[G__255621__i + 0]; ++G__255621__i;}
  args = new cljs.core.IndexedSeq(G__255621__a,0);
} 
return G__255620__delegate.call(this,args);};
G__255620.cljs$lang$maxFixedArity = 0;
G__255620.cljs$lang$applyTo = (function (arglist__255622){
var args = cljs.core.seq(arglist__255622);
return G__255620__delegate(args);
});
G__255620.cljs$core$IFn$_invoke$arity$variadic = G__255620__delegate;
return G__255620;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__255623__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__255623 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__255624__i = 0, G__255624__a = new Array(arguments.length -  0);
while (G__255624__i < G__255624__a.length) {G__255624__a[G__255624__i] = arguments[G__255624__i + 0]; ++G__255624__i;}
  args = new cljs.core.IndexedSeq(G__255624__a,0);
} 
return G__255623__delegate.call(this,args);};
G__255623.cljs$lang$maxFixedArity = 0;
G__255623.cljs$lang$applyTo = (function (arglist__255625){
var args = cljs.core.seq(arglist__255625);
return G__255623__delegate(args);
});
G__255623.cljs$core$IFn$_invoke$arity$variadic = G__255623__delegate;
return G__255623;
})()
;

return null;
});
