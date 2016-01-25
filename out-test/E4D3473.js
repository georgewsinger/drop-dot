goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25928__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__25928 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25929__i = 0, G__25929__a = new Array(arguments.length -  0);
while (G__25929__i < G__25929__a.length) {G__25929__a[G__25929__i] = arguments[G__25929__i + 0]; ++G__25929__i;}
  args = new cljs.core.IndexedSeq(G__25929__a,0);
} 
return G__25928__delegate.call(this,args);};
G__25928.cljs$lang$maxFixedArity = 0;
G__25928.cljs$lang$applyTo = (function (arglist__25930){
var args = cljs.core.seq(arglist__25930);
return G__25928__delegate(args);
});
G__25928.cljs$core$IFn$_invoke$arity$variadic = G__25928__delegate;
return G__25928;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__25931__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__25931 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25932__i = 0, G__25932__a = new Array(arguments.length -  0);
while (G__25932__i < G__25932__a.length) {G__25932__a[G__25932__i] = arguments[G__25932__i + 0]; ++G__25932__i;}
  args = new cljs.core.IndexedSeq(G__25932__a,0);
} 
return G__25931__delegate.call(this,args);};
G__25931.cljs$lang$maxFixedArity = 0;
G__25931.cljs$lang$applyTo = (function (arglist__25933){
var args = cljs.core.seq(arglist__25933);
return G__25931__delegate(args);
});
G__25931.cljs$core$IFn$_invoke$arity$variadic = G__25931__delegate;
return G__25931;
})()
;

return null;
});
