goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__162678__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__162678 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__162679__i = 0, G__162679__a = new Array(arguments.length -  0);
while (G__162679__i < G__162679__a.length) {G__162679__a[G__162679__i] = arguments[G__162679__i + 0]; ++G__162679__i;}
  args = new cljs.core.IndexedSeq(G__162679__a,0);
} 
return G__162678__delegate.call(this,args);};
G__162678.cljs$lang$maxFixedArity = 0;
G__162678.cljs$lang$applyTo = (function (arglist__162680){
var args = cljs.core.seq(arglist__162680);
return G__162678__delegate(args);
});
G__162678.cljs$core$IFn$_invoke$arity$variadic = G__162678__delegate;
return G__162678;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__162681__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__162681 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__162682__i = 0, G__162682__a = new Array(arguments.length -  0);
while (G__162682__i < G__162682__a.length) {G__162682__a[G__162682__i] = arguments[G__162682__i + 0]; ++G__162682__i;}
  args = new cljs.core.IndexedSeq(G__162682__a,0);
} 
return G__162681__delegate.call(this,args);};
G__162681.cljs$lang$maxFixedArity = 0;
G__162681.cljs$lang$applyTo = (function (arglist__162683){
var args = cljs.core.seq(arglist__162683);
return G__162681__delegate(args);
});
G__162681.cljs$core$IFn$_invoke$arity$variadic = G__162681__delegate;
return G__162681;
})()
;

return null;
});
