goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15721__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15721 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15722__i = 0, G__15722__a = new Array(arguments.length -  0);
while (G__15722__i < G__15722__a.length) {G__15722__a[G__15722__i] = arguments[G__15722__i + 0]; ++G__15722__i;}
  args = new cljs.core.IndexedSeq(G__15722__a,0);
} 
return G__15721__delegate.call(this,args);};
G__15721.cljs$lang$maxFixedArity = 0;
G__15721.cljs$lang$applyTo = (function (arglist__15723){
var args = cljs.core.seq(arglist__15723);
return G__15721__delegate(args);
});
G__15721.cljs$core$IFn$_invoke$arity$variadic = G__15721__delegate;
return G__15721;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15724__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15724 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15725__i = 0, G__15725__a = new Array(arguments.length -  0);
while (G__15725__i < G__15725__a.length) {G__15725__a[G__15725__i] = arguments[G__15725__i + 0]; ++G__15725__i;}
  args = new cljs.core.IndexedSeq(G__15725__a,0);
} 
return G__15724__delegate.call(this,args);};
G__15724.cljs$lang$maxFixedArity = 0;
G__15724.cljs$lang$applyTo = (function (arglist__15726){
var args = cljs.core.seq(arglist__15726);
return G__15724__delegate(args);
});
G__15724.cljs$core$IFn$_invoke$arity$variadic = G__15724__delegate;
return G__15724;
})()
;

return null;
});
