goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11175__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11175 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11176__i = 0, G__11176__a = new Array(arguments.length -  0);
while (G__11176__i < G__11176__a.length) {G__11176__a[G__11176__i] = arguments[G__11176__i + 0]; ++G__11176__i;}
  args = new cljs.core.IndexedSeq(G__11176__a,0);
} 
return G__11175__delegate.call(this,args);};
G__11175.cljs$lang$maxFixedArity = 0;
G__11175.cljs$lang$applyTo = (function (arglist__11177){
var args = cljs.core.seq(arglist__11177);
return G__11175__delegate(args);
});
G__11175.cljs$core$IFn$_invoke$arity$variadic = G__11175__delegate;
return G__11175;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11178__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11178 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11179__i = 0, G__11179__a = new Array(arguments.length -  0);
while (G__11179__i < G__11179__a.length) {G__11179__a[G__11179__i] = arguments[G__11179__i + 0]; ++G__11179__i;}
  args = new cljs.core.IndexedSeq(G__11179__a,0);
} 
return G__11178__delegate.call(this,args);};
G__11178.cljs$lang$maxFixedArity = 0;
G__11178.cljs$lang$applyTo = (function (arglist__11180){
var args = cljs.core.seq(arglist__11180);
return G__11178__delegate(args);
});
G__11178.cljs$core$IFn$_invoke$arity$variadic = G__11178__delegate;
return G__11178;
})()
;

return null;
});
