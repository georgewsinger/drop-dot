goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__64323__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__64323 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64324__i = 0, G__64324__a = new Array(arguments.length -  0);
while (G__64324__i < G__64324__a.length) {G__64324__a[G__64324__i] = arguments[G__64324__i + 0]; ++G__64324__i;}
  args = new cljs.core.IndexedSeq(G__64324__a,0);
} 
return G__64323__delegate.call(this,args);};
G__64323.cljs$lang$maxFixedArity = 0;
G__64323.cljs$lang$applyTo = (function (arglist__64325){
var args = cljs.core.seq(arglist__64325);
return G__64323__delegate(args);
});
G__64323.cljs$core$IFn$_invoke$arity$variadic = G__64323__delegate;
return G__64323;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__64326__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__64326 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64327__i = 0, G__64327__a = new Array(arguments.length -  0);
while (G__64327__i < G__64327__a.length) {G__64327__a[G__64327__i] = arguments[G__64327__i + 0]; ++G__64327__i;}
  args = new cljs.core.IndexedSeq(G__64327__a,0);
} 
return G__64326__delegate.call(this,args);};
G__64326.cljs$lang$maxFixedArity = 0;
G__64326.cljs$lang$applyTo = (function (arglist__64328){
var args = cljs.core.seq(arglist__64328);
return G__64326__delegate(args);
});
G__64326.cljs$core$IFn$_invoke$arity$variadic = G__64326__delegate;
return G__64326;
})()
;

return null;
});
