goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__63914__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__63914 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63915__i = 0, G__63915__a = new Array(arguments.length -  0);
while (G__63915__i < G__63915__a.length) {G__63915__a[G__63915__i] = arguments[G__63915__i + 0]; ++G__63915__i;}
  args = new cljs.core.IndexedSeq(G__63915__a,0);
} 
return G__63914__delegate.call(this,args);};
G__63914.cljs$lang$maxFixedArity = 0;
G__63914.cljs$lang$applyTo = (function (arglist__63916){
var args = cljs.core.seq(arglist__63916);
return G__63914__delegate(args);
});
G__63914.cljs$core$IFn$_invoke$arity$variadic = G__63914__delegate;
return G__63914;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__63917__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__63917 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63918__i = 0, G__63918__a = new Array(arguments.length -  0);
while (G__63918__i < G__63918__a.length) {G__63918__a[G__63918__i] = arguments[G__63918__i + 0]; ++G__63918__i;}
  args = new cljs.core.IndexedSeq(G__63918__a,0);
} 
return G__63917__delegate.call(this,args);};
G__63917.cljs$lang$maxFixedArity = 0;
G__63917.cljs$lang$applyTo = (function (arglist__63919){
var args = cljs.core.seq(arglist__63919);
return G__63917__delegate(args);
});
G__63917.cljs$core$IFn$_invoke$arity$variadic = G__63917__delegate;
return G__63917;
})()
;

return null;
});
