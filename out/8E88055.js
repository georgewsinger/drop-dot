goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__60475__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__60475 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60476__i = 0, G__60476__a = new Array(arguments.length -  0);
while (G__60476__i < G__60476__a.length) {G__60476__a[G__60476__i] = arguments[G__60476__i + 0]; ++G__60476__i;}
  args = new cljs.core.IndexedSeq(G__60476__a,0);
} 
return G__60475__delegate.call(this,args);};
G__60475.cljs$lang$maxFixedArity = 0;
G__60475.cljs$lang$applyTo = (function (arglist__60477){
var args = cljs.core.seq(arglist__60477);
return G__60475__delegate(args);
});
G__60475.cljs$core$IFn$_invoke$arity$variadic = G__60475__delegate;
return G__60475;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__60478__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__60478 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60479__i = 0, G__60479__a = new Array(arguments.length -  0);
while (G__60479__i < G__60479__a.length) {G__60479__a[G__60479__i] = arguments[G__60479__i + 0]; ++G__60479__i;}
  args = new cljs.core.IndexedSeq(G__60479__a,0);
} 
return G__60478__delegate.call(this,args);};
G__60478.cljs$lang$maxFixedArity = 0;
G__60478.cljs$lang$applyTo = (function (arglist__60480){
var args = cljs.core.seq(arglist__60480);
return G__60478__delegate(args);
});
G__60478.cljs$core$IFn$_invoke$arity$variadic = G__60478__delegate;
return G__60478;
})()
;

return null;
});
