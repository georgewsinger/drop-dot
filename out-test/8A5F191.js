goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__35007__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__35007 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35008__i = 0, G__35008__a = new Array(arguments.length -  0);
while (G__35008__i < G__35008__a.length) {G__35008__a[G__35008__i] = arguments[G__35008__i + 0]; ++G__35008__i;}
  args = new cljs.core.IndexedSeq(G__35008__a,0);
} 
return G__35007__delegate.call(this,args);};
G__35007.cljs$lang$maxFixedArity = 0;
G__35007.cljs$lang$applyTo = (function (arglist__35009){
var args = cljs.core.seq(arglist__35009);
return G__35007__delegate(args);
});
G__35007.cljs$core$IFn$_invoke$arity$variadic = G__35007__delegate;
return G__35007;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__35010__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__35010 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35011__i = 0, G__35011__a = new Array(arguments.length -  0);
while (G__35011__i < G__35011__a.length) {G__35011__a[G__35011__i] = arguments[G__35011__i + 0]; ++G__35011__i;}
  args = new cljs.core.IndexedSeq(G__35011__a,0);
} 
return G__35010__delegate.call(this,args);};
G__35010.cljs$lang$maxFixedArity = 0;
G__35010.cljs$lang$applyTo = (function (arglist__35012){
var args = cljs.core.seq(arglist__35012);
return G__35010__delegate(args);
});
G__35010.cljs$core$IFn$_invoke$arity$variadic = G__35010__delegate;
return G__35010;
})()
;

return null;
});
