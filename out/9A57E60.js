goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__326873__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__326873 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__326874__i = 0, G__326874__a = new Array(arguments.length -  0);
while (G__326874__i < G__326874__a.length) {G__326874__a[G__326874__i] = arguments[G__326874__i + 0]; ++G__326874__i;}
  args = new cljs.core.IndexedSeq(G__326874__a,0);
} 
return G__326873__delegate.call(this,args);};
G__326873.cljs$lang$maxFixedArity = 0;
G__326873.cljs$lang$applyTo = (function (arglist__326875){
var args = cljs.core.seq(arglist__326875);
return G__326873__delegate(args);
});
G__326873.cljs$core$IFn$_invoke$arity$variadic = G__326873__delegate;
return G__326873;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__326876__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__326876 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__326877__i = 0, G__326877__a = new Array(arguments.length -  0);
while (G__326877__i < G__326877__a.length) {G__326877__a[G__326877__i] = arguments[G__326877__i + 0]; ++G__326877__i;}
  args = new cljs.core.IndexedSeq(G__326877__a,0);
} 
return G__326876__delegate.call(this,args);};
G__326876.cljs$lang$maxFixedArity = 0;
G__326876.cljs$lang$applyTo = (function (arglist__326878){
var args = cljs.core.seq(arglist__326878);
return G__326876__delegate(args);
});
G__326876.cljs$core$IFn$_invoke$arity$variadic = G__326876__delegate;
return G__326876;
})()
;

return null;
});
