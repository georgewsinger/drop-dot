goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25632__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__25632 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25633__i = 0, G__25633__a = new Array(arguments.length -  0);
while (G__25633__i < G__25633__a.length) {G__25633__a[G__25633__i] = arguments[G__25633__i + 0]; ++G__25633__i;}
  args = new cljs.core.IndexedSeq(G__25633__a,0);
} 
return G__25632__delegate.call(this,args);};
G__25632.cljs$lang$maxFixedArity = 0;
G__25632.cljs$lang$applyTo = (function (arglist__25634){
var args = cljs.core.seq(arglist__25634);
return G__25632__delegate(args);
});
G__25632.cljs$core$IFn$_invoke$arity$variadic = G__25632__delegate;
return G__25632;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__25635__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__25635 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25636__i = 0, G__25636__a = new Array(arguments.length -  0);
while (G__25636__i < G__25636__a.length) {G__25636__a[G__25636__i] = arguments[G__25636__i + 0]; ++G__25636__i;}
  args = new cljs.core.IndexedSeq(G__25636__a,0);
} 
return G__25635__delegate.call(this,args);};
G__25635.cljs$lang$maxFixedArity = 0;
G__25635.cljs$lang$applyTo = (function (arglist__25637){
var args = cljs.core.seq(arglist__25637);
return G__25635__delegate(args);
});
G__25635.cljs$core$IFn$_invoke$arity$variadic = G__25635__delegate;
return G__25635;
})()
;

return null;
});
