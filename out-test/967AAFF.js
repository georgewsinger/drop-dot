goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__79697__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__79697 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__79698__i = 0, G__79698__a = new Array(arguments.length -  0);
while (G__79698__i < G__79698__a.length) {G__79698__a[G__79698__i] = arguments[G__79698__i + 0]; ++G__79698__i;}
  args = new cljs.core.IndexedSeq(G__79698__a,0);
} 
return G__79697__delegate.call(this,args);};
G__79697.cljs$lang$maxFixedArity = 0;
G__79697.cljs$lang$applyTo = (function (arglist__79699){
var args = cljs.core.seq(arglist__79699);
return G__79697__delegate(args);
});
G__79697.cljs$core$IFn$_invoke$arity$variadic = G__79697__delegate;
return G__79697;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__79700__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__79700 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__79701__i = 0, G__79701__a = new Array(arguments.length -  0);
while (G__79701__i < G__79701__a.length) {G__79701__a[G__79701__i] = arguments[G__79701__i + 0]; ++G__79701__i;}
  args = new cljs.core.IndexedSeq(G__79701__a,0);
} 
return G__79700__delegate.call(this,args);};
G__79700.cljs$lang$maxFixedArity = 0;
G__79700.cljs$lang$applyTo = (function (arglist__79702){
var args = cljs.core.seq(arglist__79702);
return G__79700__delegate(args);
});
G__79700.cljs$core$IFn$_invoke$arity$variadic = G__79700__delegate;
return G__79700;
})()
;

return null;
});
