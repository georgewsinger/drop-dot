goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__234928__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__234928 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__234929__i = 0, G__234929__a = new Array(arguments.length -  0);
while (G__234929__i < G__234929__a.length) {G__234929__a[G__234929__i] = arguments[G__234929__i + 0]; ++G__234929__i;}
  args = new cljs.core.IndexedSeq(G__234929__a,0);
} 
return G__234928__delegate.call(this,args);};
G__234928.cljs$lang$maxFixedArity = 0;
G__234928.cljs$lang$applyTo = (function (arglist__234930){
var args = cljs.core.seq(arglist__234930);
return G__234928__delegate(args);
});
G__234928.cljs$core$IFn$_invoke$arity$variadic = G__234928__delegate;
return G__234928;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__234931__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__234931 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__234932__i = 0, G__234932__a = new Array(arguments.length -  0);
while (G__234932__i < G__234932__a.length) {G__234932__a[G__234932__i] = arguments[G__234932__i + 0]; ++G__234932__i;}
  args = new cljs.core.IndexedSeq(G__234932__a,0);
} 
return G__234931__delegate.call(this,args);};
G__234931.cljs$lang$maxFixedArity = 0;
G__234931.cljs$lang$applyTo = (function (arglist__234933){
var args = cljs.core.seq(arglist__234933);
return G__234931__delegate(args);
});
G__234931.cljs$core$IFn$_invoke$arity$variadic = G__234931__delegate;
return G__234931;
})()
;

return null;
});
