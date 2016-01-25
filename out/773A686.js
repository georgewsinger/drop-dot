goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__128978__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__128978 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__128979__i = 0, G__128979__a = new Array(arguments.length -  0);
while (G__128979__i < G__128979__a.length) {G__128979__a[G__128979__i] = arguments[G__128979__i + 0]; ++G__128979__i;}
  args = new cljs.core.IndexedSeq(G__128979__a,0);
} 
return G__128978__delegate.call(this,args);};
G__128978.cljs$lang$maxFixedArity = 0;
G__128978.cljs$lang$applyTo = (function (arglist__128980){
var args = cljs.core.seq(arglist__128980);
return G__128978__delegate(args);
});
G__128978.cljs$core$IFn$_invoke$arity$variadic = G__128978__delegate;
return G__128978;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__128981__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__128981 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__128982__i = 0, G__128982__a = new Array(arguments.length -  0);
while (G__128982__i < G__128982__a.length) {G__128982__a[G__128982__i] = arguments[G__128982__i + 0]; ++G__128982__i;}
  args = new cljs.core.IndexedSeq(G__128982__a,0);
} 
return G__128981__delegate.call(this,args);};
G__128981.cljs$lang$maxFixedArity = 0;
G__128981.cljs$lang$applyTo = (function (arglist__128983){
var args = cljs.core.seq(arglist__128983);
return G__128981__delegate(args);
});
G__128981.cljs$core$IFn$_invoke$arity$variadic = G__128981__delegate;
return G__128981;
})()
;

return null;
});
