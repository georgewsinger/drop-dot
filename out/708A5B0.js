goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__257383__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__257383 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__257384__i = 0, G__257384__a = new Array(arguments.length -  0);
while (G__257384__i < G__257384__a.length) {G__257384__a[G__257384__i] = arguments[G__257384__i + 0]; ++G__257384__i;}
  args = new cljs.core.IndexedSeq(G__257384__a,0);
} 
return G__257383__delegate.call(this,args);};
G__257383.cljs$lang$maxFixedArity = 0;
G__257383.cljs$lang$applyTo = (function (arglist__257385){
var args = cljs.core.seq(arglist__257385);
return G__257383__delegate(args);
});
G__257383.cljs$core$IFn$_invoke$arity$variadic = G__257383__delegate;
return G__257383;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__257386__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__257386 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__257387__i = 0, G__257387__a = new Array(arguments.length -  0);
while (G__257387__i < G__257387__a.length) {G__257387__a[G__257387__i] = arguments[G__257387__i + 0]; ++G__257387__i;}
  args = new cljs.core.IndexedSeq(G__257387__a,0);
} 
return G__257386__delegate.call(this,args);};
G__257386.cljs$lang$maxFixedArity = 0;
G__257386.cljs$lang$applyTo = (function (arglist__257388){
var args = cljs.core.seq(arglist__257388);
return G__257386__delegate(args);
});
G__257386.cljs$core$IFn$_invoke$arity$variadic = G__257386__delegate;
return G__257386;
})()
;

return null;
});
