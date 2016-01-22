goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__43928__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__43928 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43929__i = 0, G__43929__a = new Array(arguments.length -  0);
while (G__43929__i < G__43929__a.length) {G__43929__a[G__43929__i] = arguments[G__43929__i + 0]; ++G__43929__i;}
  args = new cljs.core.IndexedSeq(G__43929__a,0);
} 
return G__43928__delegate.call(this,args);};
G__43928.cljs$lang$maxFixedArity = 0;
G__43928.cljs$lang$applyTo = (function (arglist__43930){
var args = cljs.core.seq(arglist__43930);
return G__43928__delegate(args);
});
G__43928.cljs$core$IFn$_invoke$arity$variadic = G__43928__delegate;
return G__43928;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__43931__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__43931 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43932__i = 0, G__43932__a = new Array(arguments.length -  0);
while (G__43932__i < G__43932__a.length) {G__43932__a[G__43932__i] = arguments[G__43932__i + 0]; ++G__43932__i;}
  args = new cljs.core.IndexedSeq(G__43932__a,0);
} 
return G__43931__delegate.call(this,args);};
G__43931.cljs$lang$maxFixedArity = 0;
G__43931.cljs$lang$applyTo = (function (arglist__43933){
var args = cljs.core.seq(arglist__43933);
return G__43931__delegate(args);
});
G__43931.cljs$core$IFn$_invoke$arity$variadic = G__43931__delegate;
return G__43931;
})()
;

return null;
});
