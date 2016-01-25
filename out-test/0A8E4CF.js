goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19850__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19850 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19851__i = 0, G__19851__a = new Array(arguments.length -  0);
while (G__19851__i < G__19851__a.length) {G__19851__a[G__19851__i] = arguments[G__19851__i + 0]; ++G__19851__i;}
  args = new cljs.core.IndexedSeq(G__19851__a,0);
} 
return G__19850__delegate.call(this,args);};
G__19850.cljs$lang$maxFixedArity = 0;
G__19850.cljs$lang$applyTo = (function (arglist__19852){
var args = cljs.core.seq(arglist__19852);
return G__19850__delegate(args);
});
G__19850.cljs$core$IFn$_invoke$arity$variadic = G__19850__delegate;
return G__19850;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19853__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19853 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19854__i = 0, G__19854__a = new Array(arguments.length -  0);
while (G__19854__i < G__19854__a.length) {G__19854__a[G__19854__i] = arguments[G__19854__i + 0]; ++G__19854__i;}
  args = new cljs.core.IndexedSeq(G__19854__a,0);
} 
return G__19853__delegate.call(this,args);};
G__19853.cljs$lang$maxFixedArity = 0;
G__19853.cljs$lang$applyTo = (function (arglist__19855){
var args = cljs.core.seq(arglist__19855);
return G__19853__delegate(args);
});
G__19853.cljs$core$IFn$_invoke$arity$variadic = G__19853__delegate;
return G__19853;
})()
;

return null;
});
