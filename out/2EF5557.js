goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__144604__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__144604 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__144605__i = 0, G__144605__a = new Array(arguments.length -  0);
while (G__144605__i < G__144605__a.length) {G__144605__a[G__144605__i] = arguments[G__144605__i + 0]; ++G__144605__i;}
  args = new cljs.core.IndexedSeq(G__144605__a,0);
} 
return G__144604__delegate.call(this,args);};
G__144604.cljs$lang$maxFixedArity = 0;
G__144604.cljs$lang$applyTo = (function (arglist__144606){
var args = cljs.core.seq(arglist__144606);
return G__144604__delegate(args);
});
G__144604.cljs$core$IFn$_invoke$arity$variadic = G__144604__delegate;
return G__144604;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__144607__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__144607 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__144608__i = 0, G__144608__a = new Array(arguments.length -  0);
while (G__144608__i < G__144608__a.length) {G__144608__a[G__144608__i] = arguments[G__144608__i + 0]; ++G__144608__i;}
  args = new cljs.core.IndexedSeq(G__144608__a,0);
} 
return G__144607__delegate.call(this,args);};
G__144607.cljs$lang$maxFixedArity = 0;
G__144607.cljs$lang$applyTo = (function (arglist__144609){
var args = cljs.core.seq(arglist__144609);
return G__144607__delegate(args);
});
G__144607.cljs$core$IFn$_invoke$arity$variadic = G__144607__delegate;
return G__144607;
})()
;

return null;
});
