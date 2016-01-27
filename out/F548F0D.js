goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__350418__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__350418 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__350419__i = 0, G__350419__a = new Array(arguments.length -  0);
while (G__350419__i < G__350419__a.length) {G__350419__a[G__350419__i] = arguments[G__350419__i + 0]; ++G__350419__i;}
  args = new cljs.core.IndexedSeq(G__350419__a,0);
} 
return G__350418__delegate.call(this,args);};
G__350418.cljs$lang$maxFixedArity = 0;
G__350418.cljs$lang$applyTo = (function (arglist__350420){
var args = cljs.core.seq(arglist__350420);
return G__350418__delegate(args);
});
G__350418.cljs$core$IFn$_invoke$arity$variadic = G__350418__delegate;
return G__350418;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__350421__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__350421 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__350422__i = 0, G__350422__a = new Array(arguments.length -  0);
while (G__350422__i < G__350422__a.length) {G__350422__a[G__350422__i] = arguments[G__350422__i + 0]; ++G__350422__i;}
  args = new cljs.core.IndexedSeq(G__350422__a,0);
} 
return G__350421__delegate.call(this,args);};
G__350421.cljs$lang$maxFixedArity = 0;
G__350421.cljs$lang$applyTo = (function (arglist__350423){
var args = cljs.core.seq(arglist__350423);
return G__350421__delegate(args);
});
G__350421.cljs$core$IFn$_invoke$arity$variadic = G__350421__delegate;
return G__350421;
})()
;

return null;
});
