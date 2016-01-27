goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__100943__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__100943 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__100944__i = 0, G__100944__a = new Array(arguments.length -  0);
while (G__100944__i < G__100944__a.length) {G__100944__a[G__100944__i] = arguments[G__100944__i + 0]; ++G__100944__i;}
  args = new cljs.core.IndexedSeq(G__100944__a,0);
} 
return G__100943__delegate.call(this,args);};
G__100943.cljs$lang$maxFixedArity = 0;
G__100943.cljs$lang$applyTo = (function (arglist__100945){
var args = cljs.core.seq(arglist__100945);
return G__100943__delegate(args);
});
G__100943.cljs$core$IFn$_invoke$arity$variadic = G__100943__delegate;
return G__100943;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__100946__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__100946 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__100947__i = 0, G__100947__a = new Array(arguments.length -  0);
while (G__100947__i < G__100947__a.length) {G__100947__a[G__100947__i] = arguments[G__100947__i + 0]; ++G__100947__i;}
  args = new cljs.core.IndexedSeq(G__100947__a,0);
} 
return G__100946__delegate.call(this,args);};
G__100946.cljs$lang$maxFixedArity = 0;
G__100946.cljs$lang$applyTo = (function (arglist__100948){
var args = cljs.core.seq(arglist__100948);
return G__100946__delegate(args);
});
G__100946.cljs$core$IFn$_invoke$arity$variadic = G__100946__delegate;
return G__100946;
})()
;

return null;
});
