goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25745__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__25745 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25746__i = 0, G__25746__a = new Array(arguments.length -  0);
while (G__25746__i < G__25746__a.length) {G__25746__a[G__25746__i] = arguments[G__25746__i + 0]; ++G__25746__i;}
  args = new cljs.core.IndexedSeq(G__25746__a,0);
} 
return G__25745__delegate.call(this,args);};
G__25745.cljs$lang$maxFixedArity = 0;
G__25745.cljs$lang$applyTo = (function (arglist__25747){
var args = cljs.core.seq(arglist__25747);
return G__25745__delegate(args);
});
G__25745.cljs$core$IFn$_invoke$arity$variadic = G__25745__delegate;
return G__25745;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__25748__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__25748 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25749__i = 0, G__25749__a = new Array(arguments.length -  0);
while (G__25749__i < G__25749__a.length) {G__25749__a[G__25749__i] = arguments[G__25749__i + 0]; ++G__25749__i;}
  args = new cljs.core.IndexedSeq(G__25749__a,0);
} 
return G__25748__delegate.call(this,args);};
G__25748.cljs$lang$maxFixedArity = 0;
G__25748.cljs$lang$applyTo = (function (arglist__25750){
var args = cljs.core.seq(arglist__25750);
return G__25748__delegate(args);
});
G__25748.cljs$core$IFn$_invoke$arity$variadic = G__25748__delegate;
return G__25748;
})()
;

return null;
});
