goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__273287__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__273287 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__273288__i = 0, G__273288__a = new Array(arguments.length -  0);
while (G__273288__i < G__273288__a.length) {G__273288__a[G__273288__i] = arguments[G__273288__i + 0]; ++G__273288__i;}
  args = new cljs.core.IndexedSeq(G__273288__a,0);
} 
return G__273287__delegate.call(this,args);};
G__273287.cljs$lang$maxFixedArity = 0;
G__273287.cljs$lang$applyTo = (function (arglist__273289){
var args = cljs.core.seq(arglist__273289);
return G__273287__delegate(args);
});
G__273287.cljs$core$IFn$_invoke$arity$variadic = G__273287__delegate;
return G__273287;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__273290__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__273290 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__273291__i = 0, G__273291__a = new Array(arguments.length -  0);
while (G__273291__i < G__273291__a.length) {G__273291__a[G__273291__i] = arguments[G__273291__i + 0]; ++G__273291__i;}
  args = new cljs.core.IndexedSeq(G__273291__a,0);
} 
return G__273290__delegate.call(this,args);};
G__273290.cljs$lang$maxFixedArity = 0;
G__273290.cljs$lang$applyTo = (function (arglist__273292){
var args = cljs.core.seq(arglist__273292);
return G__273290__delegate(args);
});
G__273290.cljs$core$IFn$_invoke$arity$variadic = G__273290__delegate;
return G__273290;
})()
;

return null;
});
