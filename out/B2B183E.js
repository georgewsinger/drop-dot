goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__351478__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__351478 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__351479__i = 0, G__351479__a = new Array(arguments.length -  0);
while (G__351479__i < G__351479__a.length) {G__351479__a[G__351479__i] = arguments[G__351479__i + 0]; ++G__351479__i;}
  args = new cljs.core.IndexedSeq(G__351479__a,0);
} 
return G__351478__delegate.call(this,args);};
G__351478.cljs$lang$maxFixedArity = 0;
G__351478.cljs$lang$applyTo = (function (arglist__351480){
var args = cljs.core.seq(arglist__351480);
return G__351478__delegate(args);
});
G__351478.cljs$core$IFn$_invoke$arity$variadic = G__351478__delegate;
return G__351478;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__351481__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__351481 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__351482__i = 0, G__351482__a = new Array(arguments.length -  0);
while (G__351482__i < G__351482__a.length) {G__351482__a[G__351482__i] = arguments[G__351482__i + 0]; ++G__351482__i;}
  args = new cljs.core.IndexedSeq(G__351482__a,0);
} 
return G__351481__delegate.call(this,args);};
G__351481.cljs$lang$maxFixedArity = 0;
G__351481.cljs$lang$applyTo = (function (arglist__351483){
var args = cljs.core.seq(arglist__351483);
return G__351481__delegate(args);
});
G__351481.cljs$core$IFn$_invoke$arity$variadic = G__351481__delegate;
return G__351481;
})()
;

return null;
});
