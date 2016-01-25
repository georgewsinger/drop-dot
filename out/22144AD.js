goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__159174__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__159174 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__159175__i = 0, G__159175__a = new Array(arguments.length -  0);
while (G__159175__i < G__159175__a.length) {G__159175__a[G__159175__i] = arguments[G__159175__i + 0]; ++G__159175__i;}
  args = new cljs.core.IndexedSeq(G__159175__a,0);
} 
return G__159174__delegate.call(this,args);};
G__159174.cljs$lang$maxFixedArity = 0;
G__159174.cljs$lang$applyTo = (function (arglist__159176){
var args = cljs.core.seq(arglist__159176);
return G__159174__delegate(args);
});
G__159174.cljs$core$IFn$_invoke$arity$variadic = G__159174__delegate;
return G__159174;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__159177__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__159177 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__159178__i = 0, G__159178__a = new Array(arguments.length -  0);
while (G__159178__i < G__159178__a.length) {G__159178__a[G__159178__i] = arguments[G__159178__i + 0]; ++G__159178__i;}
  args = new cljs.core.IndexedSeq(G__159178__a,0);
} 
return G__159177__delegate.call(this,args);};
G__159177.cljs$lang$maxFixedArity = 0;
G__159177.cljs$lang$applyTo = (function (arglist__159179){
var args = cljs.core.seq(arglist__159179);
return G__159177__delegate(args);
});
G__159177.cljs$core$IFn$_invoke$arity$variadic = G__159177__delegate;
return G__159177;
})()
;

return null;
});
