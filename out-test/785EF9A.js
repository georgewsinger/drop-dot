goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18223__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18223 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18224__i = 0, G__18224__a = new Array(arguments.length -  0);
while (G__18224__i < G__18224__a.length) {G__18224__a[G__18224__i] = arguments[G__18224__i + 0]; ++G__18224__i;}
  args = new cljs.core.IndexedSeq(G__18224__a,0);
} 
return G__18223__delegate.call(this,args);};
G__18223.cljs$lang$maxFixedArity = 0;
G__18223.cljs$lang$applyTo = (function (arglist__18225){
var args = cljs.core.seq(arglist__18225);
return G__18223__delegate(args);
});
G__18223.cljs$core$IFn$_invoke$arity$variadic = G__18223__delegate;
return G__18223;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18226__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18226 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18227__i = 0, G__18227__a = new Array(arguments.length -  0);
while (G__18227__i < G__18227__a.length) {G__18227__a[G__18227__i] = arguments[G__18227__i + 0]; ++G__18227__i;}
  args = new cljs.core.IndexedSeq(G__18227__a,0);
} 
return G__18226__delegate.call(this,args);};
G__18226.cljs$lang$maxFixedArity = 0;
G__18226.cljs$lang$applyTo = (function (arglist__18228){
var args = cljs.core.seq(arglist__18228);
return G__18226__delegate(args);
});
G__18226.cljs$core$IFn$_invoke$arity$variadic = G__18226__delegate;
return G__18226;
})()
;

return null;
});
