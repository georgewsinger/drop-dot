goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__146594__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__146594 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__146595__i = 0, G__146595__a = new Array(arguments.length -  0);
while (G__146595__i < G__146595__a.length) {G__146595__a[G__146595__i] = arguments[G__146595__i + 0]; ++G__146595__i;}
  args = new cljs.core.IndexedSeq(G__146595__a,0);
} 
return G__146594__delegate.call(this,args);};
G__146594.cljs$lang$maxFixedArity = 0;
G__146594.cljs$lang$applyTo = (function (arglist__146596){
var args = cljs.core.seq(arglist__146596);
return G__146594__delegate(args);
});
G__146594.cljs$core$IFn$_invoke$arity$variadic = G__146594__delegate;
return G__146594;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__146597__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__146597 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__146598__i = 0, G__146598__a = new Array(arguments.length -  0);
while (G__146598__i < G__146598__a.length) {G__146598__a[G__146598__i] = arguments[G__146598__i + 0]; ++G__146598__i;}
  args = new cljs.core.IndexedSeq(G__146598__a,0);
} 
return G__146597__delegate.call(this,args);};
G__146597.cljs$lang$maxFixedArity = 0;
G__146597.cljs$lang$applyTo = (function (arglist__146599){
var args = cljs.core.seq(arglist__146599);
return G__146597__delegate(args);
});
G__146597.cljs$core$IFn$_invoke$arity$variadic = G__146597__delegate;
return G__146597;
})()
;

return null;
});
