goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__275280__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__275280 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__275281__i = 0, G__275281__a = new Array(arguments.length -  0);
while (G__275281__i < G__275281__a.length) {G__275281__a[G__275281__i] = arguments[G__275281__i + 0]; ++G__275281__i;}
  args = new cljs.core.IndexedSeq(G__275281__a,0);
} 
return G__275280__delegate.call(this,args);};
G__275280.cljs$lang$maxFixedArity = 0;
G__275280.cljs$lang$applyTo = (function (arglist__275282){
var args = cljs.core.seq(arglist__275282);
return G__275280__delegate(args);
});
G__275280.cljs$core$IFn$_invoke$arity$variadic = G__275280__delegate;
return G__275280;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__275283__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__275283 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__275284__i = 0, G__275284__a = new Array(arguments.length -  0);
while (G__275284__i < G__275284__a.length) {G__275284__a[G__275284__i] = arguments[G__275284__i + 0]; ++G__275284__i;}
  args = new cljs.core.IndexedSeq(G__275284__a,0);
} 
return G__275283__delegate.call(this,args);};
G__275283.cljs$lang$maxFixedArity = 0;
G__275283.cljs$lang$applyTo = (function (arglist__275285){
var args = cljs.core.seq(arglist__275285);
return G__275283__delegate(args);
});
G__275283.cljs$core$IFn$_invoke$arity$variadic = G__275283__delegate;
return G__275283;
})()
;

return null;
});
