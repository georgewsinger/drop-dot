goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18683__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18683 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18684__i = 0, G__18684__a = new Array(arguments.length -  0);
while (G__18684__i < G__18684__a.length) {G__18684__a[G__18684__i] = arguments[G__18684__i + 0]; ++G__18684__i;}
  args = new cljs.core.IndexedSeq(G__18684__a,0);
} 
return G__18683__delegate.call(this,args);};
G__18683.cljs$lang$maxFixedArity = 0;
G__18683.cljs$lang$applyTo = (function (arglist__18685){
var args = cljs.core.seq(arglist__18685);
return G__18683__delegate(args);
});
G__18683.cljs$core$IFn$_invoke$arity$variadic = G__18683__delegate;
return G__18683;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18686__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18686 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18687__i = 0, G__18687__a = new Array(arguments.length -  0);
while (G__18687__i < G__18687__a.length) {G__18687__a[G__18687__i] = arguments[G__18687__i + 0]; ++G__18687__i;}
  args = new cljs.core.IndexedSeq(G__18687__a,0);
} 
return G__18686__delegate.call(this,args);};
G__18686.cljs$lang$maxFixedArity = 0;
G__18686.cljs$lang$applyTo = (function (arglist__18688){
var args = cljs.core.seq(arglist__18688);
return G__18686__delegate(args);
});
G__18686.cljs$core$IFn$_invoke$arity$variadic = G__18686__delegate;
return G__18686;
})()
;

return null;
});
