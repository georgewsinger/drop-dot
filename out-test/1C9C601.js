goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19233__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19233 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19234__i = 0, G__19234__a = new Array(arguments.length -  0);
while (G__19234__i < G__19234__a.length) {G__19234__a[G__19234__i] = arguments[G__19234__i + 0]; ++G__19234__i;}
  args = new cljs.core.IndexedSeq(G__19234__a,0);
} 
return G__19233__delegate.call(this,args);};
G__19233.cljs$lang$maxFixedArity = 0;
G__19233.cljs$lang$applyTo = (function (arglist__19235){
var args = cljs.core.seq(arglist__19235);
return G__19233__delegate(args);
});
G__19233.cljs$core$IFn$_invoke$arity$variadic = G__19233__delegate;
return G__19233;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19236__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19236 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19237__i = 0, G__19237__a = new Array(arguments.length -  0);
while (G__19237__i < G__19237__a.length) {G__19237__a[G__19237__i] = arguments[G__19237__i + 0]; ++G__19237__i;}
  args = new cljs.core.IndexedSeq(G__19237__a,0);
} 
return G__19236__delegate.call(this,args);};
G__19236.cljs$lang$maxFixedArity = 0;
G__19236.cljs$lang$applyTo = (function (arglist__19238){
var args = cljs.core.seq(arglist__19238);
return G__19236__delegate(args);
});
G__19236.cljs$core$IFn$_invoke$arity$variadic = G__19236__delegate;
return G__19236;
})()
;

return null;
});
