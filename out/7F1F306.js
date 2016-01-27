goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__296746__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__296746 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__296747__i = 0, G__296747__a = new Array(arguments.length -  0);
while (G__296747__i < G__296747__a.length) {G__296747__a[G__296747__i] = arguments[G__296747__i + 0]; ++G__296747__i;}
  args = new cljs.core.IndexedSeq(G__296747__a,0);
} 
return G__296746__delegate.call(this,args);};
G__296746.cljs$lang$maxFixedArity = 0;
G__296746.cljs$lang$applyTo = (function (arglist__296748){
var args = cljs.core.seq(arglist__296748);
return G__296746__delegate(args);
});
G__296746.cljs$core$IFn$_invoke$arity$variadic = G__296746__delegate;
return G__296746;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__296749__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__296749 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__296750__i = 0, G__296750__a = new Array(arguments.length -  0);
while (G__296750__i < G__296750__a.length) {G__296750__a[G__296750__i] = arguments[G__296750__i + 0]; ++G__296750__i;}
  args = new cljs.core.IndexedSeq(G__296750__a,0);
} 
return G__296749__delegate.call(this,args);};
G__296749.cljs$lang$maxFixedArity = 0;
G__296749.cljs$lang$applyTo = (function (arglist__296751){
var args = cljs.core.seq(arglist__296751);
return G__296749__delegate(args);
});
G__296749.cljs$core$IFn$_invoke$arity$variadic = G__296749__delegate;
return G__296749;
})()
;

return null;
});
