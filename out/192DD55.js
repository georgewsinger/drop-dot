goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__166736__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__166736 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__166737__i = 0, G__166737__a = new Array(arguments.length -  0);
while (G__166737__i < G__166737__a.length) {G__166737__a[G__166737__i] = arguments[G__166737__i + 0]; ++G__166737__i;}
  args = new cljs.core.IndexedSeq(G__166737__a,0);
} 
return G__166736__delegate.call(this,args);};
G__166736.cljs$lang$maxFixedArity = 0;
G__166736.cljs$lang$applyTo = (function (arglist__166738){
var args = cljs.core.seq(arglist__166738);
return G__166736__delegate(args);
});
G__166736.cljs$core$IFn$_invoke$arity$variadic = G__166736__delegate;
return G__166736;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__166739__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__166739 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__166740__i = 0, G__166740__a = new Array(arguments.length -  0);
while (G__166740__i < G__166740__a.length) {G__166740__a[G__166740__i] = arguments[G__166740__i + 0]; ++G__166740__i;}
  args = new cljs.core.IndexedSeq(G__166740__a,0);
} 
return G__166739__delegate.call(this,args);};
G__166739.cljs$lang$maxFixedArity = 0;
G__166739.cljs$lang$applyTo = (function (arglist__166741){
var args = cljs.core.seq(arglist__166741);
return G__166739__delegate(args);
});
G__166739.cljs$core$IFn$_invoke$arity$variadic = G__166739__delegate;
return G__166739;
})()
;

return null;
});
