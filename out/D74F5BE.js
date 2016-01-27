goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__330898__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__330898 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__330899__i = 0, G__330899__a = new Array(arguments.length -  0);
while (G__330899__i < G__330899__a.length) {G__330899__a[G__330899__i] = arguments[G__330899__i + 0]; ++G__330899__i;}
  args = new cljs.core.IndexedSeq(G__330899__a,0);
} 
return G__330898__delegate.call(this,args);};
G__330898.cljs$lang$maxFixedArity = 0;
G__330898.cljs$lang$applyTo = (function (arglist__330900){
var args = cljs.core.seq(arglist__330900);
return G__330898__delegate(args);
});
G__330898.cljs$core$IFn$_invoke$arity$variadic = G__330898__delegate;
return G__330898;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__330901__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__330901 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__330902__i = 0, G__330902__a = new Array(arguments.length -  0);
while (G__330902__i < G__330902__a.length) {G__330902__a[G__330902__i] = arguments[G__330902__i + 0]; ++G__330902__i;}
  args = new cljs.core.IndexedSeq(G__330902__a,0);
} 
return G__330901__delegate.call(this,args);};
G__330901.cljs$lang$maxFixedArity = 0;
G__330901.cljs$lang$applyTo = (function (arglist__330903){
var args = cljs.core.seq(arglist__330903);
return G__330901__delegate(args);
});
G__330901.cljs$core$IFn$_invoke$arity$variadic = G__330901__delegate;
return G__330901;
})()
;

return null;
});
