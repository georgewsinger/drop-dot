goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19593__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19593 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19594__i = 0, G__19594__a = new Array(arguments.length -  0);
while (G__19594__i < G__19594__a.length) {G__19594__a[G__19594__i] = arguments[G__19594__i + 0]; ++G__19594__i;}
  args = new cljs.core.IndexedSeq(G__19594__a,0);
} 
return G__19593__delegate.call(this,args);};
G__19593.cljs$lang$maxFixedArity = 0;
G__19593.cljs$lang$applyTo = (function (arglist__19595){
var args = cljs.core.seq(arglist__19595);
return G__19593__delegate(args);
});
G__19593.cljs$core$IFn$_invoke$arity$variadic = G__19593__delegate;
return G__19593;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19596__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19596 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19597__i = 0, G__19597__a = new Array(arguments.length -  0);
while (G__19597__i < G__19597__a.length) {G__19597__a[G__19597__i] = arguments[G__19597__i + 0]; ++G__19597__i;}
  args = new cljs.core.IndexedSeq(G__19597__a,0);
} 
return G__19596__delegate.call(this,args);};
G__19596.cljs$lang$maxFixedArity = 0;
G__19596.cljs$lang$applyTo = (function (arglist__19598){
var args = cljs.core.seq(arglist__19598);
return G__19596__delegate(args);
});
G__19596.cljs$core$IFn$_invoke$arity$variadic = G__19596__delegate;
return G__19596;
})()
;

return null;
});
