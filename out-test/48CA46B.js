goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__49543__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__49543 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49544__i = 0, G__49544__a = new Array(arguments.length -  0);
while (G__49544__i < G__49544__a.length) {G__49544__a[G__49544__i] = arguments[G__49544__i + 0]; ++G__49544__i;}
  args = new cljs.core.IndexedSeq(G__49544__a,0);
} 
return G__49543__delegate.call(this,args);};
G__49543.cljs$lang$maxFixedArity = 0;
G__49543.cljs$lang$applyTo = (function (arglist__49545){
var args = cljs.core.seq(arglist__49545);
return G__49543__delegate(args);
});
G__49543.cljs$core$IFn$_invoke$arity$variadic = G__49543__delegate;
return G__49543;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__49546__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__49546 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49547__i = 0, G__49547__a = new Array(arguments.length -  0);
while (G__49547__i < G__49547__a.length) {G__49547__a[G__49547__i] = arguments[G__49547__i + 0]; ++G__49547__i;}
  args = new cljs.core.IndexedSeq(G__49547__a,0);
} 
return G__49546__delegate.call(this,args);};
G__49546.cljs$lang$maxFixedArity = 0;
G__49546.cljs$lang$applyTo = (function (arglist__49548){
var args = cljs.core.seq(arglist__49548);
return G__49546__delegate(args);
});
G__49546.cljs$core$IFn$_invoke$arity$variadic = G__49546__delegate;
return G__49546;
})()
;

return null;
});
