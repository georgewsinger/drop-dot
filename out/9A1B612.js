goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__63082__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__63082 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63083__i = 0, G__63083__a = new Array(arguments.length -  0);
while (G__63083__i < G__63083__a.length) {G__63083__a[G__63083__i] = arguments[G__63083__i + 0]; ++G__63083__i;}
  args = new cljs.core.IndexedSeq(G__63083__a,0);
} 
return G__63082__delegate.call(this,args);};
G__63082.cljs$lang$maxFixedArity = 0;
G__63082.cljs$lang$applyTo = (function (arglist__63084){
var args = cljs.core.seq(arglist__63084);
return G__63082__delegate(args);
});
G__63082.cljs$core$IFn$_invoke$arity$variadic = G__63082__delegate;
return G__63082;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__63085__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__63085 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63086__i = 0, G__63086__a = new Array(arguments.length -  0);
while (G__63086__i < G__63086__a.length) {G__63086__a[G__63086__i] = arguments[G__63086__i + 0]; ++G__63086__i;}
  args = new cljs.core.IndexedSeq(G__63086__a,0);
} 
return G__63085__delegate.call(this,args);};
G__63085.cljs$lang$maxFixedArity = 0;
G__63085.cljs$lang$applyTo = (function (arglist__63087){
var args = cljs.core.seq(arglist__63087);
return G__63085__delegate(args);
});
G__63085.cljs$core$IFn$_invoke$arity$variadic = G__63085__delegate;
return G__63085;
})()
;

return null;
});
