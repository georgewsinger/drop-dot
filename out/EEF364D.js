goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__295260__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__295260 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__295261__i = 0, G__295261__a = new Array(arguments.length -  0);
while (G__295261__i < G__295261__a.length) {G__295261__a[G__295261__i] = arguments[G__295261__i + 0]; ++G__295261__i;}
  args = new cljs.core.IndexedSeq(G__295261__a,0);
} 
return G__295260__delegate.call(this,args);};
G__295260.cljs$lang$maxFixedArity = 0;
G__295260.cljs$lang$applyTo = (function (arglist__295262){
var args = cljs.core.seq(arglist__295262);
return G__295260__delegate(args);
});
G__295260.cljs$core$IFn$_invoke$arity$variadic = G__295260__delegate;
return G__295260;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__295263__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__295263 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__295264__i = 0, G__295264__a = new Array(arguments.length -  0);
while (G__295264__i < G__295264__a.length) {G__295264__a[G__295264__i] = arguments[G__295264__i + 0]; ++G__295264__i;}
  args = new cljs.core.IndexedSeq(G__295264__a,0);
} 
return G__295263__delegate.call(this,args);};
G__295263.cljs$lang$maxFixedArity = 0;
G__295263.cljs$lang$applyTo = (function (arglist__295265){
var args = cljs.core.seq(arglist__295265);
return G__295263__delegate(args);
});
G__295263.cljs$core$IFn$_invoke$arity$variadic = G__295263__delegate;
return G__295263;
})()
;

return null;
});
