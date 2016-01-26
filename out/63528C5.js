goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19687__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19687 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19688__i = 0, G__19688__a = new Array(arguments.length -  0);
while (G__19688__i < G__19688__a.length) {G__19688__a[G__19688__i] = arguments[G__19688__i + 0]; ++G__19688__i;}
  args = new cljs.core.IndexedSeq(G__19688__a,0);
} 
return G__19687__delegate.call(this,args);};
G__19687.cljs$lang$maxFixedArity = 0;
G__19687.cljs$lang$applyTo = (function (arglist__19689){
var args = cljs.core.seq(arglist__19689);
return G__19687__delegate(args);
});
G__19687.cljs$core$IFn$_invoke$arity$variadic = G__19687__delegate;
return G__19687;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19690__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19690 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19691__i = 0, G__19691__a = new Array(arguments.length -  0);
while (G__19691__i < G__19691__a.length) {G__19691__a[G__19691__i] = arguments[G__19691__i + 0]; ++G__19691__i;}
  args = new cljs.core.IndexedSeq(G__19691__a,0);
} 
return G__19690__delegate.call(this,args);};
G__19690.cljs$lang$maxFixedArity = 0;
G__19690.cljs$lang$applyTo = (function (arglist__19692){
var args = cljs.core.seq(arglist__19692);
return G__19690__delegate(args);
});
G__19690.cljs$core$IFn$_invoke$arity$variadic = G__19690__delegate;
return G__19690;
})()
;

return null;
});
