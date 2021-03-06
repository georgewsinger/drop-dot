goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28368__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__28368 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28369__i = 0, G__28369__a = new Array(arguments.length -  0);
while (G__28369__i < G__28369__a.length) {G__28369__a[G__28369__i] = arguments[G__28369__i + 0]; ++G__28369__i;}
  args = new cljs.core.IndexedSeq(G__28369__a,0);
} 
return G__28368__delegate.call(this,args);};
G__28368.cljs$lang$maxFixedArity = 0;
G__28368.cljs$lang$applyTo = (function (arglist__28370){
var args = cljs.core.seq(arglist__28370);
return G__28368__delegate(args);
});
G__28368.cljs$core$IFn$_invoke$arity$variadic = G__28368__delegate;
return G__28368;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__28371__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__28371 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28372__i = 0, G__28372__a = new Array(arguments.length -  0);
while (G__28372__i < G__28372__a.length) {G__28372__a[G__28372__i] = arguments[G__28372__i + 0]; ++G__28372__i;}
  args = new cljs.core.IndexedSeq(G__28372__a,0);
} 
return G__28371__delegate.call(this,args);};
G__28371.cljs$lang$maxFixedArity = 0;
G__28371.cljs$lang$applyTo = (function (arglist__28373){
var args = cljs.core.seq(arglist__28373);
return G__28371__delegate(args);
});
G__28371.cljs$core$IFn$_invoke$arity$variadic = G__28371__delegate;
return G__28371;
})()
;

return null;
});
