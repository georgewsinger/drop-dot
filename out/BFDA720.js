goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25756__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__25756 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25757__i = 0, G__25757__a = new Array(arguments.length -  0);
while (G__25757__i < G__25757__a.length) {G__25757__a[G__25757__i] = arguments[G__25757__i + 0]; ++G__25757__i;}
  args = new cljs.core.IndexedSeq(G__25757__a,0);
} 
return G__25756__delegate.call(this,args);};
G__25756.cljs$lang$maxFixedArity = 0;
G__25756.cljs$lang$applyTo = (function (arglist__25758){
var args = cljs.core.seq(arglist__25758);
return G__25756__delegate(args);
});
G__25756.cljs$core$IFn$_invoke$arity$variadic = G__25756__delegate;
return G__25756;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__25759__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__25759 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25760__i = 0, G__25760__a = new Array(arguments.length -  0);
while (G__25760__i < G__25760__a.length) {G__25760__a[G__25760__i] = arguments[G__25760__i + 0]; ++G__25760__i;}
  args = new cljs.core.IndexedSeq(G__25760__a,0);
} 
return G__25759__delegate.call(this,args);};
G__25759.cljs$lang$maxFixedArity = 0;
G__25759.cljs$lang$applyTo = (function (arglist__25761){
var args = cljs.core.seq(arglist__25761);
return G__25759__delegate(args);
});
G__25759.cljs$core$IFn$_invoke$arity$variadic = G__25759__delegate;
return G__25759;
})()
;

return null;
});
