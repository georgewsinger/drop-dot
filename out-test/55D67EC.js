goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__98263__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__98263 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__98264__i = 0, G__98264__a = new Array(arguments.length -  0);
while (G__98264__i < G__98264__a.length) {G__98264__a[G__98264__i] = arguments[G__98264__i + 0]; ++G__98264__i;}
  args = new cljs.core.IndexedSeq(G__98264__a,0);
} 
return G__98263__delegate.call(this,args);};
G__98263.cljs$lang$maxFixedArity = 0;
G__98263.cljs$lang$applyTo = (function (arglist__98265){
var args = cljs.core.seq(arglist__98265);
return G__98263__delegate(args);
});
G__98263.cljs$core$IFn$_invoke$arity$variadic = G__98263__delegate;
return G__98263;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__98266__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__98266 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__98267__i = 0, G__98267__a = new Array(arguments.length -  0);
while (G__98267__i < G__98267__a.length) {G__98267__a[G__98267__i] = arguments[G__98267__i + 0]; ++G__98267__i;}
  args = new cljs.core.IndexedSeq(G__98267__a,0);
} 
return G__98266__delegate.call(this,args);};
G__98266.cljs$lang$maxFixedArity = 0;
G__98266.cljs$lang$applyTo = (function (arglist__98268){
var args = cljs.core.seq(arglist__98268);
return G__98266__delegate(args);
});
G__98266.cljs$core$IFn$_invoke$arity$variadic = G__98266__delegate;
return G__98266;
})()
;

return null;
});
