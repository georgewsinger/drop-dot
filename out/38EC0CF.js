goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__92119__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__92119 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__92120__i = 0, G__92120__a = new Array(arguments.length -  0);
while (G__92120__i < G__92120__a.length) {G__92120__a[G__92120__i] = arguments[G__92120__i + 0]; ++G__92120__i;}
  args = new cljs.core.IndexedSeq(G__92120__a,0);
} 
return G__92119__delegate.call(this,args);};
G__92119.cljs$lang$maxFixedArity = 0;
G__92119.cljs$lang$applyTo = (function (arglist__92121){
var args = cljs.core.seq(arglist__92121);
return G__92119__delegate(args);
});
G__92119.cljs$core$IFn$_invoke$arity$variadic = G__92119__delegate;
return G__92119;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__92122__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__92122 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__92123__i = 0, G__92123__a = new Array(arguments.length -  0);
while (G__92123__i < G__92123__a.length) {G__92123__a[G__92123__i] = arguments[G__92123__i + 0]; ++G__92123__i;}
  args = new cljs.core.IndexedSeq(G__92123__a,0);
} 
return G__92122__delegate.call(this,args);};
G__92122.cljs$lang$maxFixedArity = 0;
G__92122.cljs$lang$applyTo = (function (arglist__92124){
var args = cljs.core.seq(arglist__92124);
return G__92122__delegate(args);
});
G__92122.cljs$core$IFn$_invoke$arity$variadic = G__92122__delegate;
return G__92122;
})()
;

return null;
});
