goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__234985__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__234985 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__234986__i = 0, G__234986__a = new Array(arguments.length -  0);
while (G__234986__i < G__234986__a.length) {G__234986__a[G__234986__i] = arguments[G__234986__i + 0]; ++G__234986__i;}
  args = new cljs.core.IndexedSeq(G__234986__a,0);
} 
return G__234985__delegate.call(this,args);};
G__234985.cljs$lang$maxFixedArity = 0;
G__234985.cljs$lang$applyTo = (function (arglist__234987){
var args = cljs.core.seq(arglist__234987);
return G__234985__delegate(args);
});
G__234985.cljs$core$IFn$_invoke$arity$variadic = G__234985__delegate;
return G__234985;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__234988__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__234988 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__234989__i = 0, G__234989__a = new Array(arguments.length -  0);
while (G__234989__i < G__234989__a.length) {G__234989__a[G__234989__i] = arguments[G__234989__i + 0]; ++G__234989__i;}
  args = new cljs.core.IndexedSeq(G__234989__a,0);
} 
return G__234988__delegate.call(this,args);};
G__234988.cljs$lang$maxFixedArity = 0;
G__234988.cljs$lang$applyTo = (function (arglist__234990){
var args = cljs.core.seq(arglist__234990);
return G__234988__delegate(args);
});
G__234988.cljs$core$IFn$_invoke$arity$variadic = G__234988__delegate;
return G__234988;
})()
;

return null;
});
