goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__40368__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__40368 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40369__i = 0, G__40369__a = new Array(arguments.length -  0);
while (G__40369__i < G__40369__a.length) {G__40369__a[G__40369__i] = arguments[G__40369__i + 0]; ++G__40369__i;}
  args = new cljs.core.IndexedSeq(G__40369__a,0);
} 
return G__40368__delegate.call(this,args);};
G__40368.cljs$lang$maxFixedArity = 0;
G__40368.cljs$lang$applyTo = (function (arglist__40370){
var args = cljs.core.seq(arglist__40370);
return G__40368__delegate(args);
});
G__40368.cljs$core$IFn$_invoke$arity$variadic = G__40368__delegate;
return G__40368;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__40371__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__40371 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40372__i = 0, G__40372__a = new Array(arguments.length -  0);
while (G__40372__i < G__40372__a.length) {G__40372__a[G__40372__i] = arguments[G__40372__i + 0]; ++G__40372__i;}
  args = new cljs.core.IndexedSeq(G__40372__a,0);
} 
return G__40371__delegate.call(this,args);};
G__40371.cljs$lang$maxFixedArity = 0;
G__40371.cljs$lang$applyTo = (function (arglist__40373){
var args = cljs.core.seq(arglist__40373);
return G__40371__delegate(args);
});
G__40371.cljs$core$IFn$_invoke$arity$variadic = G__40371__delegate;
return G__40371;
})()
;

return null;
});
