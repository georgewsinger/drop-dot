goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10847__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10847 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10848__i = 0, G__10848__a = new Array(arguments.length -  0);
while (G__10848__i < G__10848__a.length) {G__10848__a[G__10848__i] = arguments[G__10848__i + 0]; ++G__10848__i;}
  args = new cljs.core.IndexedSeq(G__10848__a,0);
} 
return G__10847__delegate.call(this,args);};
G__10847.cljs$lang$maxFixedArity = 0;
G__10847.cljs$lang$applyTo = (function (arglist__10849){
var args = cljs.core.seq(arglist__10849);
return G__10847__delegate(args);
});
G__10847.cljs$core$IFn$_invoke$arity$variadic = G__10847__delegate;
return G__10847;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10850__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10850 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10851__i = 0, G__10851__a = new Array(arguments.length -  0);
while (G__10851__i < G__10851__a.length) {G__10851__a[G__10851__i] = arguments[G__10851__i + 0]; ++G__10851__i;}
  args = new cljs.core.IndexedSeq(G__10851__a,0);
} 
return G__10850__delegate.call(this,args);};
G__10850.cljs$lang$maxFixedArity = 0;
G__10850.cljs$lang$applyTo = (function (arglist__10852){
var args = cljs.core.seq(arglist__10852);
return G__10850__delegate(args);
});
G__10850.cljs$core$IFn$_invoke$arity$variadic = G__10850__delegate;
return G__10850;
})()
;

return null;
});
