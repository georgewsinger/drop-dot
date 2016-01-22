goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12886__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12886 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12887__i = 0, G__12887__a = new Array(arguments.length -  0);
while (G__12887__i < G__12887__a.length) {G__12887__a[G__12887__i] = arguments[G__12887__i + 0]; ++G__12887__i;}
  args = new cljs.core.IndexedSeq(G__12887__a,0);
} 
return G__12886__delegate.call(this,args);};
G__12886.cljs$lang$maxFixedArity = 0;
G__12886.cljs$lang$applyTo = (function (arglist__12888){
var args = cljs.core.seq(arglist__12888);
return G__12886__delegate(args);
});
G__12886.cljs$core$IFn$_invoke$arity$variadic = G__12886__delegate;
return G__12886;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12889__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12889 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12890__i = 0, G__12890__a = new Array(arguments.length -  0);
while (G__12890__i < G__12890__a.length) {G__12890__a[G__12890__i] = arguments[G__12890__i + 0]; ++G__12890__i;}
  args = new cljs.core.IndexedSeq(G__12890__a,0);
} 
return G__12889__delegate.call(this,args);};
G__12889.cljs$lang$maxFixedArity = 0;
G__12889.cljs$lang$applyTo = (function (arglist__12891){
var args = cljs.core.seq(arglist__12891);
return G__12889__delegate(args);
});
G__12889.cljs$core$IFn$_invoke$arity$variadic = G__12889__delegate;
return G__12889;
})()
;

return null;
});
