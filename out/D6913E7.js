goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__296724__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__296724 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__296725__i = 0, G__296725__a = new Array(arguments.length -  0);
while (G__296725__i < G__296725__a.length) {G__296725__a[G__296725__i] = arguments[G__296725__i + 0]; ++G__296725__i;}
  args = new cljs.core.IndexedSeq(G__296725__a,0);
} 
return G__296724__delegate.call(this,args);};
G__296724.cljs$lang$maxFixedArity = 0;
G__296724.cljs$lang$applyTo = (function (arglist__296726){
var args = cljs.core.seq(arglist__296726);
return G__296724__delegate(args);
});
G__296724.cljs$core$IFn$_invoke$arity$variadic = G__296724__delegate;
return G__296724;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__296727__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__296727 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__296728__i = 0, G__296728__a = new Array(arguments.length -  0);
while (G__296728__i < G__296728__a.length) {G__296728__a[G__296728__i] = arguments[G__296728__i + 0]; ++G__296728__i;}
  args = new cljs.core.IndexedSeq(G__296728__a,0);
} 
return G__296727__delegate.call(this,args);};
G__296727.cljs$lang$maxFixedArity = 0;
G__296727.cljs$lang$applyTo = (function (arglist__296729){
var args = cljs.core.seq(arglist__296729);
return G__296727__delegate(args);
});
G__296727.cljs$core$IFn$_invoke$arity$variadic = G__296727__delegate;
return G__296727;
})()
;

return null;
});
