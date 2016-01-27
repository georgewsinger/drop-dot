goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25750__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__25750 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25751__i = 0, G__25751__a = new Array(arguments.length -  0);
while (G__25751__i < G__25751__a.length) {G__25751__a[G__25751__i] = arguments[G__25751__i + 0]; ++G__25751__i;}
  args = new cljs.core.IndexedSeq(G__25751__a,0);
} 
return G__25750__delegate.call(this,args);};
G__25750.cljs$lang$maxFixedArity = 0;
G__25750.cljs$lang$applyTo = (function (arglist__25752){
var args = cljs.core.seq(arglist__25752);
return G__25750__delegate(args);
});
G__25750.cljs$core$IFn$_invoke$arity$variadic = G__25750__delegate;
return G__25750;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__25753__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__25753 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25754__i = 0, G__25754__a = new Array(arguments.length -  0);
while (G__25754__i < G__25754__a.length) {G__25754__a[G__25754__i] = arguments[G__25754__i + 0]; ++G__25754__i;}
  args = new cljs.core.IndexedSeq(G__25754__a,0);
} 
return G__25753__delegate.call(this,args);};
G__25753.cljs$lang$maxFixedArity = 0;
G__25753.cljs$lang$applyTo = (function (arglist__25755){
var args = cljs.core.seq(arglist__25755);
return G__25753__delegate(args);
});
G__25753.cljs$core$IFn$_invoke$arity$variadic = G__25753__delegate;
return G__25753;
})()
;

return null;
});
