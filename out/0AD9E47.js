goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__368629__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__368629 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__368630__i = 0, G__368630__a = new Array(arguments.length -  0);
while (G__368630__i < G__368630__a.length) {G__368630__a[G__368630__i] = arguments[G__368630__i + 0]; ++G__368630__i;}
  args = new cljs.core.IndexedSeq(G__368630__a,0);
} 
return G__368629__delegate.call(this,args);};
G__368629.cljs$lang$maxFixedArity = 0;
G__368629.cljs$lang$applyTo = (function (arglist__368631){
var args = cljs.core.seq(arglist__368631);
return G__368629__delegate(args);
});
G__368629.cljs$core$IFn$_invoke$arity$variadic = G__368629__delegate;
return G__368629;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__368632__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__368632 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__368633__i = 0, G__368633__a = new Array(arguments.length -  0);
while (G__368633__i < G__368633__a.length) {G__368633__a[G__368633__i] = arguments[G__368633__i + 0]; ++G__368633__i;}
  args = new cljs.core.IndexedSeq(G__368633__a,0);
} 
return G__368632__delegate.call(this,args);};
G__368632.cljs$lang$maxFixedArity = 0;
G__368632.cljs$lang$applyTo = (function (arglist__368634){
var args = cljs.core.seq(arglist__368634);
return G__368632__delegate(args);
});
G__368632.cljs$core$IFn$_invoke$arity$variadic = G__368632__delegate;
return G__368632;
})()
;

return null;
});
