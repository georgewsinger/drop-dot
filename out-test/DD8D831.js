goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25917__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__25917 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25918__i = 0, G__25918__a = new Array(arguments.length -  0);
while (G__25918__i < G__25918__a.length) {G__25918__a[G__25918__i] = arguments[G__25918__i + 0]; ++G__25918__i;}
  args = new cljs.core.IndexedSeq(G__25918__a,0);
} 
return G__25917__delegate.call(this,args);};
G__25917.cljs$lang$maxFixedArity = 0;
G__25917.cljs$lang$applyTo = (function (arglist__25919){
var args = cljs.core.seq(arglist__25919);
return G__25917__delegate(args);
});
G__25917.cljs$core$IFn$_invoke$arity$variadic = G__25917__delegate;
return G__25917;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__25920__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__25920 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25921__i = 0, G__25921__a = new Array(arguments.length -  0);
while (G__25921__i < G__25921__a.length) {G__25921__a[G__25921__i] = arguments[G__25921__i + 0]; ++G__25921__i;}
  args = new cljs.core.IndexedSeq(G__25921__a,0);
} 
return G__25920__delegate.call(this,args);};
G__25920.cljs$lang$maxFixedArity = 0;
G__25920.cljs$lang$applyTo = (function (arglist__25922){
var args = cljs.core.seq(arglist__25922);
return G__25920__delegate(args);
});
G__25920.cljs$core$IFn$_invoke$arity$variadic = G__25920__delegate;
return G__25920;
})()
;

return null;
});
