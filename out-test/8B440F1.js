goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22368__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22368 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22369__i = 0, G__22369__a = new Array(arguments.length -  0);
while (G__22369__i < G__22369__a.length) {G__22369__a[G__22369__i] = arguments[G__22369__i + 0]; ++G__22369__i;}
  args = new cljs.core.IndexedSeq(G__22369__a,0);
} 
return G__22368__delegate.call(this,args);};
G__22368.cljs$lang$maxFixedArity = 0;
G__22368.cljs$lang$applyTo = (function (arglist__22370){
var args = cljs.core.seq(arglist__22370);
return G__22368__delegate(args);
});
G__22368.cljs$core$IFn$_invoke$arity$variadic = G__22368__delegate;
return G__22368;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22371__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22371 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22372__i = 0, G__22372__a = new Array(arguments.length -  0);
while (G__22372__i < G__22372__a.length) {G__22372__a[G__22372__i] = arguments[G__22372__i + 0]; ++G__22372__i;}
  args = new cljs.core.IndexedSeq(G__22372__a,0);
} 
return G__22371__delegate.call(this,args);};
G__22371.cljs$lang$maxFixedArity = 0;
G__22371.cljs$lang$applyTo = (function (arglist__22373){
var args = cljs.core.seq(arglist__22373);
return G__22371__delegate(args);
});
G__22371.cljs$core$IFn$_invoke$arity$variadic = G__22371__delegate;
return G__22371;
})()
;

return null;
});
