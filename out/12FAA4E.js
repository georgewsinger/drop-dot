goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__184201__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__184201 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__184202__i = 0, G__184202__a = new Array(arguments.length -  0);
while (G__184202__i < G__184202__a.length) {G__184202__a[G__184202__i] = arguments[G__184202__i + 0]; ++G__184202__i;}
  args = new cljs.core.IndexedSeq(G__184202__a,0);
} 
return G__184201__delegate.call(this,args);};
G__184201.cljs$lang$maxFixedArity = 0;
G__184201.cljs$lang$applyTo = (function (arglist__184203){
var args = cljs.core.seq(arglist__184203);
return G__184201__delegate(args);
});
G__184201.cljs$core$IFn$_invoke$arity$variadic = G__184201__delegate;
return G__184201;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__184204__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__184204 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__184205__i = 0, G__184205__a = new Array(arguments.length -  0);
while (G__184205__i < G__184205__a.length) {G__184205__a[G__184205__i] = arguments[G__184205__i + 0]; ++G__184205__i;}
  args = new cljs.core.IndexedSeq(G__184205__a,0);
} 
return G__184204__delegate.call(this,args);};
G__184204.cljs$lang$maxFixedArity = 0;
G__184204.cljs$lang$applyTo = (function (arglist__184206){
var args = cljs.core.seq(arglist__184206);
return G__184204__delegate(args);
});
G__184204.cljs$core$IFn$_invoke$arity$variadic = G__184204__delegate;
return G__184204;
})()
;

return null;
});
