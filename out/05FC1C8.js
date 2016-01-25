goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__223042__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__223042 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__223043__i = 0, G__223043__a = new Array(arguments.length -  0);
while (G__223043__i < G__223043__a.length) {G__223043__a[G__223043__i] = arguments[G__223043__i + 0]; ++G__223043__i;}
  args = new cljs.core.IndexedSeq(G__223043__a,0);
} 
return G__223042__delegate.call(this,args);};
G__223042.cljs$lang$maxFixedArity = 0;
G__223042.cljs$lang$applyTo = (function (arglist__223044){
var args = cljs.core.seq(arglist__223044);
return G__223042__delegate(args);
});
G__223042.cljs$core$IFn$_invoke$arity$variadic = G__223042__delegate;
return G__223042;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__223045__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__223045 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__223046__i = 0, G__223046__a = new Array(arguments.length -  0);
while (G__223046__i < G__223046__a.length) {G__223046__a[G__223046__i] = arguments[G__223046__i + 0]; ++G__223046__i;}
  args = new cljs.core.IndexedSeq(G__223046__a,0);
} 
return G__223045__delegate.call(this,args);};
G__223045.cljs$lang$maxFixedArity = 0;
G__223045.cljs$lang$applyTo = (function (arglist__223047){
var args = cljs.core.seq(arglist__223047);
return G__223045__delegate(args);
});
G__223045.cljs$core$IFn$_invoke$arity$variadic = G__223045__delegate;
return G__223045;
})()
;

return null;
});
