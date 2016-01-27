goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__23015__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__23015 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23016__i = 0, G__23016__a = new Array(arguments.length -  0);
while (G__23016__i < G__23016__a.length) {G__23016__a[G__23016__i] = arguments[G__23016__i + 0]; ++G__23016__i;}
  args = new cljs.core.IndexedSeq(G__23016__a,0);
} 
return G__23015__delegate.call(this,args);};
G__23015.cljs$lang$maxFixedArity = 0;
G__23015.cljs$lang$applyTo = (function (arglist__23017){
var args = cljs.core.seq(arglist__23017);
return G__23015__delegate(args);
});
G__23015.cljs$core$IFn$_invoke$arity$variadic = G__23015__delegate;
return G__23015;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__23018__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__23018 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23019__i = 0, G__23019__a = new Array(arguments.length -  0);
while (G__23019__i < G__23019__a.length) {G__23019__a[G__23019__i] = arguments[G__23019__i + 0]; ++G__23019__i;}
  args = new cljs.core.IndexedSeq(G__23019__a,0);
} 
return G__23018__delegate.call(this,args);};
G__23018.cljs$lang$maxFixedArity = 0;
G__23018.cljs$lang$applyTo = (function (arglist__23020){
var args = cljs.core.seq(arglist__23020);
return G__23018__delegate(args);
});
G__23018.cljs$core$IFn$_invoke$arity$variadic = G__23018__delegate;
return G__23018;
})()
;

return null;
});
