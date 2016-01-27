goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__313971__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__313971 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__313972__i = 0, G__313972__a = new Array(arguments.length -  0);
while (G__313972__i < G__313972__a.length) {G__313972__a[G__313972__i] = arguments[G__313972__i + 0]; ++G__313972__i;}
  args = new cljs.core.IndexedSeq(G__313972__a,0);
} 
return G__313971__delegate.call(this,args);};
G__313971.cljs$lang$maxFixedArity = 0;
G__313971.cljs$lang$applyTo = (function (arglist__313973){
var args = cljs.core.seq(arglist__313973);
return G__313971__delegate(args);
});
G__313971.cljs$core$IFn$_invoke$arity$variadic = G__313971__delegate;
return G__313971;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__313974__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__313974 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__313975__i = 0, G__313975__a = new Array(arguments.length -  0);
while (G__313975__i < G__313975__a.length) {G__313975__a[G__313975__i] = arguments[G__313975__i + 0]; ++G__313975__i;}
  args = new cljs.core.IndexedSeq(G__313975__a,0);
} 
return G__313974__delegate.call(this,args);};
G__313974.cljs$lang$maxFixedArity = 0;
G__313974.cljs$lang$applyTo = (function (arglist__313976){
var args = cljs.core.seq(arglist__313976);
return G__313974__delegate(args);
});
G__313974.cljs$core$IFn$_invoke$arity$variadic = G__313974__delegate;
return G__313974;
})()
;

return null;
});
