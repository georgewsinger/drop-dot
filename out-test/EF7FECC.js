goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18767__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18767 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18768__i = 0, G__18768__a = new Array(arguments.length -  0);
while (G__18768__i < G__18768__a.length) {G__18768__a[G__18768__i] = arguments[G__18768__i + 0]; ++G__18768__i;}
  args = new cljs.core.IndexedSeq(G__18768__a,0);
} 
return G__18767__delegate.call(this,args);};
G__18767.cljs$lang$maxFixedArity = 0;
G__18767.cljs$lang$applyTo = (function (arglist__18769){
var args = cljs.core.seq(arglist__18769);
return G__18767__delegate(args);
});
G__18767.cljs$core$IFn$_invoke$arity$variadic = G__18767__delegate;
return G__18767;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18770__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18770 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18771__i = 0, G__18771__a = new Array(arguments.length -  0);
while (G__18771__i < G__18771__a.length) {G__18771__a[G__18771__i] = arguments[G__18771__i + 0]; ++G__18771__i;}
  args = new cljs.core.IndexedSeq(G__18771__a,0);
} 
return G__18770__delegate.call(this,args);};
G__18770.cljs$lang$maxFixedArity = 0;
G__18770.cljs$lang$applyTo = (function (arglist__18772){
var args = cljs.core.seq(arglist__18772);
return G__18770__delegate(args);
});
G__18770.cljs$core$IFn$_invoke$arity$variadic = G__18770__delegate;
return G__18770;
})()
;

return null;
});
