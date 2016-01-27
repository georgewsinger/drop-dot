goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__143870__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__143870 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__143871__i = 0, G__143871__a = new Array(arguments.length -  0);
while (G__143871__i < G__143871__a.length) {G__143871__a[G__143871__i] = arguments[G__143871__i + 0]; ++G__143871__i;}
  args = new cljs.core.IndexedSeq(G__143871__a,0);
} 
return G__143870__delegate.call(this,args);};
G__143870.cljs$lang$maxFixedArity = 0;
G__143870.cljs$lang$applyTo = (function (arglist__143872){
var args = cljs.core.seq(arglist__143872);
return G__143870__delegate(args);
});
G__143870.cljs$core$IFn$_invoke$arity$variadic = G__143870__delegate;
return G__143870;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__143873__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__143873 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__143874__i = 0, G__143874__a = new Array(arguments.length -  0);
while (G__143874__i < G__143874__a.length) {G__143874__a[G__143874__i] = arguments[G__143874__i + 0]; ++G__143874__i;}
  args = new cljs.core.IndexedSeq(G__143874__a,0);
} 
return G__143873__delegate.call(this,args);};
G__143873.cljs$lang$maxFixedArity = 0;
G__143873.cljs$lang$applyTo = (function (arglist__143875){
var args = cljs.core.seq(arglist__143875);
return G__143873__delegate(args);
});
G__143873.cljs$core$IFn$_invoke$arity$variadic = G__143873__delegate;
return G__143873;
})()
;

return null;
});
