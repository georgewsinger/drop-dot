goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__278669__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__278669 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__278670__i = 0, G__278670__a = new Array(arguments.length -  0);
while (G__278670__i < G__278670__a.length) {G__278670__a[G__278670__i] = arguments[G__278670__i + 0]; ++G__278670__i;}
  args = new cljs.core.IndexedSeq(G__278670__a,0);
} 
return G__278669__delegate.call(this,args);};
G__278669.cljs$lang$maxFixedArity = 0;
G__278669.cljs$lang$applyTo = (function (arglist__278671){
var args = cljs.core.seq(arglist__278671);
return G__278669__delegate(args);
});
G__278669.cljs$core$IFn$_invoke$arity$variadic = G__278669__delegate;
return G__278669;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__278672__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__278672 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__278673__i = 0, G__278673__a = new Array(arguments.length -  0);
while (G__278673__i < G__278673__a.length) {G__278673__a[G__278673__i] = arguments[G__278673__i + 0]; ++G__278673__i;}
  args = new cljs.core.IndexedSeq(G__278673__a,0);
} 
return G__278672__delegate.call(this,args);};
G__278672.cljs$lang$maxFixedArity = 0;
G__278672.cljs$lang$applyTo = (function (arglist__278674){
var args = cljs.core.seq(arglist__278674);
return G__278672__delegate(args);
});
G__278672.cljs$core$IFn$_invoke$arity$variadic = G__278672__delegate;
return G__278672;
})()
;

return null;
});
