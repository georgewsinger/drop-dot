goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__284194__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__284194 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__284195__i = 0, G__284195__a = new Array(arguments.length -  0);
while (G__284195__i < G__284195__a.length) {G__284195__a[G__284195__i] = arguments[G__284195__i + 0]; ++G__284195__i;}
  args = new cljs.core.IndexedSeq(G__284195__a,0);
} 
return G__284194__delegate.call(this,args);};
G__284194.cljs$lang$maxFixedArity = 0;
G__284194.cljs$lang$applyTo = (function (arglist__284196){
var args = cljs.core.seq(arglist__284196);
return G__284194__delegate(args);
});
G__284194.cljs$core$IFn$_invoke$arity$variadic = G__284194__delegate;
return G__284194;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__284197__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__284197 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__284198__i = 0, G__284198__a = new Array(arguments.length -  0);
while (G__284198__i < G__284198__a.length) {G__284198__a[G__284198__i] = arguments[G__284198__i + 0]; ++G__284198__i;}
  args = new cljs.core.IndexedSeq(G__284198__a,0);
} 
return G__284197__delegate.call(this,args);};
G__284197.cljs$lang$maxFixedArity = 0;
G__284197.cljs$lang$applyTo = (function (arglist__284199){
var args = cljs.core.seq(arglist__284199);
return G__284197__delegate(args);
});
G__284197.cljs$core$IFn$_invoke$arity$variadic = G__284197__delegate;
return G__284197;
})()
;

return null;
});
