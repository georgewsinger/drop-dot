goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__273950__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__273950 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__273951__i = 0, G__273951__a = new Array(arguments.length -  0);
while (G__273951__i < G__273951__a.length) {G__273951__a[G__273951__i] = arguments[G__273951__i + 0]; ++G__273951__i;}
  args = new cljs.core.IndexedSeq(G__273951__a,0);
} 
return G__273950__delegate.call(this,args);};
G__273950.cljs$lang$maxFixedArity = 0;
G__273950.cljs$lang$applyTo = (function (arglist__273952){
var args = cljs.core.seq(arglist__273952);
return G__273950__delegate(args);
});
G__273950.cljs$core$IFn$_invoke$arity$variadic = G__273950__delegate;
return G__273950;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__273953__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__273953 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__273954__i = 0, G__273954__a = new Array(arguments.length -  0);
while (G__273954__i < G__273954__a.length) {G__273954__a[G__273954__i] = arguments[G__273954__i + 0]; ++G__273954__i;}
  args = new cljs.core.IndexedSeq(G__273954__a,0);
} 
return G__273953__delegate.call(this,args);};
G__273953.cljs$lang$maxFixedArity = 0;
G__273953.cljs$lang$applyTo = (function (arglist__273955){
var args = cljs.core.seq(arglist__273955);
return G__273953__delegate(args);
});
G__273953.cljs$core$IFn$_invoke$arity$variadic = G__273953__delegate;
return G__273953;
})()
;

return null;
});
