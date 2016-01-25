goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__23809__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__23809 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23810__i = 0, G__23810__a = new Array(arguments.length -  0);
while (G__23810__i < G__23810__a.length) {G__23810__a[G__23810__i] = arguments[G__23810__i + 0]; ++G__23810__i;}
  args = new cljs.core.IndexedSeq(G__23810__a,0);
} 
return G__23809__delegate.call(this,args);};
G__23809.cljs$lang$maxFixedArity = 0;
G__23809.cljs$lang$applyTo = (function (arglist__23811){
var args = cljs.core.seq(arglist__23811);
return G__23809__delegate(args);
});
G__23809.cljs$core$IFn$_invoke$arity$variadic = G__23809__delegate;
return G__23809;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__23812__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__23812 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23813__i = 0, G__23813__a = new Array(arguments.length -  0);
while (G__23813__i < G__23813__a.length) {G__23813__a[G__23813__i] = arguments[G__23813__i + 0]; ++G__23813__i;}
  args = new cljs.core.IndexedSeq(G__23813__a,0);
} 
return G__23812__delegate.call(this,args);};
G__23812.cljs$lang$maxFixedArity = 0;
G__23812.cljs$lang$applyTo = (function (arglist__23814){
var args = cljs.core.seq(arglist__23814);
return G__23812__delegate(args);
});
G__23812.cljs$core$IFn$_invoke$arity$variadic = G__23812__delegate;
return G__23812;
})()
;

return null;
});
