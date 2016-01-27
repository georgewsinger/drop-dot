goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__179134__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__179134 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__179135__i = 0, G__179135__a = new Array(arguments.length -  0);
while (G__179135__i < G__179135__a.length) {G__179135__a[G__179135__i] = arguments[G__179135__i + 0]; ++G__179135__i;}
  args = new cljs.core.IndexedSeq(G__179135__a,0);
} 
return G__179134__delegate.call(this,args);};
G__179134.cljs$lang$maxFixedArity = 0;
G__179134.cljs$lang$applyTo = (function (arglist__179136){
var args = cljs.core.seq(arglist__179136);
return G__179134__delegate(args);
});
G__179134.cljs$core$IFn$_invoke$arity$variadic = G__179134__delegate;
return G__179134;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__179137__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__179137 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__179138__i = 0, G__179138__a = new Array(arguments.length -  0);
while (G__179138__i < G__179138__a.length) {G__179138__a[G__179138__i] = arguments[G__179138__i + 0]; ++G__179138__i;}
  args = new cljs.core.IndexedSeq(G__179138__a,0);
} 
return G__179137__delegate.call(this,args);};
G__179137.cljs$lang$maxFixedArity = 0;
G__179137.cljs$lang$applyTo = (function (arglist__179139){
var args = cljs.core.seq(arglist__179139);
return G__179137__delegate(args);
});
G__179137.cljs$core$IFn$_invoke$arity$variadic = G__179137__delegate;
return G__179137;
})()
;

return null;
});
