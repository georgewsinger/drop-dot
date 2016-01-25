goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25415__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__25415 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25416__i = 0, G__25416__a = new Array(arguments.length -  0);
while (G__25416__i < G__25416__a.length) {G__25416__a[G__25416__i] = arguments[G__25416__i + 0]; ++G__25416__i;}
  args = new cljs.core.IndexedSeq(G__25416__a,0);
} 
return G__25415__delegate.call(this,args);};
G__25415.cljs$lang$maxFixedArity = 0;
G__25415.cljs$lang$applyTo = (function (arglist__25417){
var args = cljs.core.seq(arglist__25417);
return G__25415__delegate(args);
});
G__25415.cljs$core$IFn$_invoke$arity$variadic = G__25415__delegate;
return G__25415;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__25418__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__25418 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25419__i = 0, G__25419__a = new Array(arguments.length -  0);
while (G__25419__i < G__25419__a.length) {G__25419__a[G__25419__i] = arguments[G__25419__i + 0]; ++G__25419__i;}
  args = new cljs.core.IndexedSeq(G__25419__a,0);
} 
return G__25418__delegate.call(this,args);};
G__25418.cljs$lang$maxFixedArity = 0;
G__25418.cljs$lang$applyTo = (function (arglist__25420){
var args = cljs.core.seq(arglist__25420);
return G__25418__delegate(args);
});
G__25418.cljs$core$IFn$_invoke$arity$variadic = G__25418__delegate;
return G__25418;
})()
;

return null;
});
