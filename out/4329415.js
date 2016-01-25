goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__219697__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__219697 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__219698__i = 0, G__219698__a = new Array(arguments.length -  0);
while (G__219698__i < G__219698__a.length) {G__219698__a[G__219698__i] = arguments[G__219698__i + 0]; ++G__219698__i;}
  args = new cljs.core.IndexedSeq(G__219698__a,0);
} 
return G__219697__delegate.call(this,args);};
G__219697.cljs$lang$maxFixedArity = 0;
G__219697.cljs$lang$applyTo = (function (arglist__219699){
var args = cljs.core.seq(arglist__219699);
return G__219697__delegate(args);
});
G__219697.cljs$core$IFn$_invoke$arity$variadic = G__219697__delegate;
return G__219697;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__219700__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__219700 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__219701__i = 0, G__219701__a = new Array(arguments.length -  0);
while (G__219701__i < G__219701__a.length) {G__219701__a[G__219701__i] = arguments[G__219701__i + 0]; ++G__219701__i;}
  args = new cljs.core.IndexedSeq(G__219701__a,0);
} 
return G__219700__delegate.call(this,args);};
G__219700.cljs$lang$maxFixedArity = 0;
G__219700.cljs$lang$applyTo = (function (arglist__219702){
var args = cljs.core.seq(arglist__219702);
return G__219700__delegate(args);
});
G__219700.cljs$core$IFn$_invoke$arity$variadic = G__219700__delegate;
return G__219700;
})()
;

return null;
});
