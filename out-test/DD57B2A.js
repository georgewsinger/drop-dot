goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__68971__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__68971 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__68972__i = 0, G__68972__a = new Array(arguments.length -  0);
while (G__68972__i < G__68972__a.length) {G__68972__a[G__68972__i] = arguments[G__68972__i + 0]; ++G__68972__i;}
  args = new cljs.core.IndexedSeq(G__68972__a,0);
} 
return G__68971__delegate.call(this,args);};
G__68971.cljs$lang$maxFixedArity = 0;
G__68971.cljs$lang$applyTo = (function (arglist__68973){
var args = cljs.core.seq(arglist__68973);
return G__68971__delegate(args);
});
G__68971.cljs$core$IFn$_invoke$arity$variadic = G__68971__delegate;
return G__68971;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__68974__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__68974 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__68975__i = 0, G__68975__a = new Array(arguments.length -  0);
while (G__68975__i < G__68975__a.length) {G__68975__a[G__68975__i] = arguments[G__68975__i + 0]; ++G__68975__i;}
  args = new cljs.core.IndexedSeq(G__68975__a,0);
} 
return G__68974__delegate.call(this,args);};
G__68974.cljs$lang$maxFixedArity = 0;
G__68974.cljs$lang$applyTo = (function (arglist__68976){
var args = cljs.core.seq(arglist__68976);
return G__68974__delegate(args);
});
G__68974.cljs$core$IFn$_invoke$arity$variadic = G__68974__delegate;
return G__68974;
})()
;

return null;
});
