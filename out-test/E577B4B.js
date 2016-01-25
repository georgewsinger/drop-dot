goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14845__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14845 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14846__i = 0, G__14846__a = new Array(arguments.length -  0);
while (G__14846__i < G__14846__a.length) {G__14846__a[G__14846__i] = arguments[G__14846__i + 0]; ++G__14846__i;}
  args = new cljs.core.IndexedSeq(G__14846__a,0);
} 
return G__14845__delegate.call(this,args);};
G__14845.cljs$lang$maxFixedArity = 0;
G__14845.cljs$lang$applyTo = (function (arglist__14847){
var args = cljs.core.seq(arglist__14847);
return G__14845__delegate(args);
});
G__14845.cljs$core$IFn$_invoke$arity$variadic = G__14845__delegate;
return G__14845;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14848__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14848 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14849__i = 0, G__14849__a = new Array(arguments.length -  0);
while (G__14849__i < G__14849__a.length) {G__14849__a[G__14849__i] = arguments[G__14849__i + 0]; ++G__14849__i;}
  args = new cljs.core.IndexedSeq(G__14849__a,0);
} 
return G__14848__delegate.call(this,args);};
G__14848.cljs$lang$maxFixedArity = 0;
G__14848.cljs$lang$applyTo = (function (arglist__14850){
var args = cljs.core.seq(arglist__14850);
return G__14848__delegate(args);
});
G__14848.cljs$core$IFn$_invoke$arity$variadic = G__14848__delegate;
return G__14848;
})()
;

return null;
});
