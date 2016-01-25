goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__276594__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__276594 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__276595__i = 0, G__276595__a = new Array(arguments.length -  0);
while (G__276595__i < G__276595__a.length) {G__276595__a[G__276595__i] = arguments[G__276595__i + 0]; ++G__276595__i;}
  args = new cljs.core.IndexedSeq(G__276595__a,0);
} 
return G__276594__delegate.call(this,args);};
G__276594.cljs$lang$maxFixedArity = 0;
G__276594.cljs$lang$applyTo = (function (arglist__276596){
var args = cljs.core.seq(arglist__276596);
return G__276594__delegate(args);
});
G__276594.cljs$core$IFn$_invoke$arity$variadic = G__276594__delegate;
return G__276594;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__276597__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__276597 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__276598__i = 0, G__276598__a = new Array(arguments.length -  0);
while (G__276598__i < G__276598__a.length) {G__276598__a[G__276598__i] = arguments[G__276598__i + 0]; ++G__276598__i;}
  args = new cljs.core.IndexedSeq(G__276598__a,0);
} 
return G__276597__delegate.call(this,args);};
G__276597.cljs$lang$maxFixedArity = 0;
G__276597.cljs$lang$applyTo = (function (arglist__276599){
var args = cljs.core.seq(arglist__276599);
return G__276597__delegate(args);
});
G__276597.cljs$core$IFn$_invoke$arity$variadic = G__276597__delegate;
return G__276597;
})()
;

return null;
});
