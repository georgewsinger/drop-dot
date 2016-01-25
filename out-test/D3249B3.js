goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22154__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22154 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22155__i = 0, G__22155__a = new Array(arguments.length -  0);
while (G__22155__i < G__22155__a.length) {G__22155__a[G__22155__i] = arguments[G__22155__i + 0]; ++G__22155__i;}
  args = new cljs.core.IndexedSeq(G__22155__a,0);
} 
return G__22154__delegate.call(this,args);};
G__22154.cljs$lang$maxFixedArity = 0;
G__22154.cljs$lang$applyTo = (function (arglist__22156){
var args = cljs.core.seq(arglist__22156);
return G__22154__delegate(args);
});
G__22154.cljs$core$IFn$_invoke$arity$variadic = G__22154__delegate;
return G__22154;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22157__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22157 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22158__i = 0, G__22158__a = new Array(arguments.length -  0);
while (G__22158__i < G__22158__a.length) {G__22158__a[G__22158__i] = arguments[G__22158__i + 0]; ++G__22158__i;}
  args = new cljs.core.IndexedSeq(G__22158__a,0);
} 
return G__22157__delegate.call(this,args);};
G__22157.cljs$lang$maxFixedArity = 0;
G__22157.cljs$lang$applyTo = (function (arglist__22159){
var args = cljs.core.seq(arglist__22159);
return G__22157__delegate(args);
});
G__22157.cljs$core$IFn$_invoke$arity$variadic = G__22157__delegate;
return G__22157;
})()
;

return null;
});
