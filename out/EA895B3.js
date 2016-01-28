goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__375656__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__375656 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__375657__i = 0, G__375657__a = new Array(arguments.length -  0);
while (G__375657__i < G__375657__a.length) {G__375657__a[G__375657__i] = arguments[G__375657__i + 0]; ++G__375657__i;}
  args = new cljs.core.IndexedSeq(G__375657__a,0);
} 
return G__375656__delegate.call(this,args);};
G__375656.cljs$lang$maxFixedArity = 0;
G__375656.cljs$lang$applyTo = (function (arglist__375658){
var args = cljs.core.seq(arglist__375658);
return G__375656__delegate(args);
});
G__375656.cljs$core$IFn$_invoke$arity$variadic = G__375656__delegate;
return G__375656;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__375659__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__375659 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__375660__i = 0, G__375660__a = new Array(arguments.length -  0);
while (G__375660__i < G__375660__a.length) {G__375660__a[G__375660__i] = arguments[G__375660__i + 0]; ++G__375660__i;}
  args = new cljs.core.IndexedSeq(G__375660__a,0);
} 
return G__375659__delegate.call(this,args);};
G__375659.cljs$lang$maxFixedArity = 0;
G__375659.cljs$lang$applyTo = (function (arglist__375661){
var args = cljs.core.seq(arglist__375661);
return G__375659__delegate(args);
});
G__375659.cljs$core$IFn$_invoke$arity$variadic = G__375659__delegate;
return G__375659;
})()
;

return null;
});
