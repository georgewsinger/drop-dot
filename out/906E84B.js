goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__278680__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__278680 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__278681__i = 0, G__278681__a = new Array(arguments.length -  0);
while (G__278681__i < G__278681__a.length) {G__278681__a[G__278681__i] = arguments[G__278681__i + 0]; ++G__278681__i;}
  args = new cljs.core.IndexedSeq(G__278681__a,0);
} 
return G__278680__delegate.call(this,args);};
G__278680.cljs$lang$maxFixedArity = 0;
G__278680.cljs$lang$applyTo = (function (arglist__278682){
var args = cljs.core.seq(arglist__278682);
return G__278680__delegate(args);
});
G__278680.cljs$core$IFn$_invoke$arity$variadic = G__278680__delegate;
return G__278680;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__278683__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__278683 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__278684__i = 0, G__278684__a = new Array(arguments.length -  0);
while (G__278684__i < G__278684__a.length) {G__278684__a[G__278684__i] = arguments[G__278684__i + 0]; ++G__278684__i;}
  args = new cljs.core.IndexedSeq(G__278684__a,0);
} 
return G__278683__delegate.call(this,args);};
G__278683.cljs$lang$maxFixedArity = 0;
G__278683.cljs$lang$applyTo = (function (arglist__278685){
var args = cljs.core.seq(arglist__278685);
return G__278683__delegate(args);
});
G__278683.cljs$core$IFn$_invoke$arity$variadic = G__278683__delegate;
return G__278683;
})()
;

return null;
});
