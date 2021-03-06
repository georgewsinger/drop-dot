goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18234__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18234 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18235__i = 0, G__18235__a = new Array(arguments.length -  0);
while (G__18235__i < G__18235__a.length) {G__18235__a[G__18235__i] = arguments[G__18235__i + 0]; ++G__18235__i;}
  args = new cljs.core.IndexedSeq(G__18235__a,0);
} 
return G__18234__delegate.call(this,args);};
G__18234.cljs$lang$maxFixedArity = 0;
G__18234.cljs$lang$applyTo = (function (arglist__18236){
var args = cljs.core.seq(arglist__18236);
return G__18234__delegate(args);
});
G__18234.cljs$core$IFn$_invoke$arity$variadic = G__18234__delegate;
return G__18234;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18237__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18237 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18238__i = 0, G__18238__a = new Array(arguments.length -  0);
while (G__18238__i < G__18238__a.length) {G__18238__a[G__18238__i] = arguments[G__18238__i + 0]; ++G__18238__i;}
  args = new cljs.core.IndexedSeq(G__18238__a,0);
} 
return G__18237__delegate.call(this,args);};
G__18237.cljs$lang$maxFixedArity = 0;
G__18237.cljs$lang$applyTo = (function (arglist__18239){
var args = cljs.core.seq(arglist__18239);
return G__18237__delegate(args);
});
G__18237.cljs$core$IFn$_invoke$arity$variadic = G__18237__delegate;
return G__18237;
})()
;

return null;
});
