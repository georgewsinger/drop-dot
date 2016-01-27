goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__57240__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__57240 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57241__i = 0, G__57241__a = new Array(arguments.length -  0);
while (G__57241__i < G__57241__a.length) {G__57241__a[G__57241__i] = arguments[G__57241__i + 0]; ++G__57241__i;}
  args = new cljs.core.IndexedSeq(G__57241__a,0);
} 
return G__57240__delegate.call(this,args);};
G__57240.cljs$lang$maxFixedArity = 0;
G__57240.cljs$lang$applyTo = (function (arglist__57242){
var args = cljs.core.seq(arglist__57242);
return G__57240__delegate(args);
});
G__57240.cljs$core$IFn$_invoke$arity$variadic = G__57240__delegate;
return G__57240;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__57243__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__57243 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57244__i = 0, G__57244__a = new Array(arguments.length -  0);
while (G__57244__i < G__57244__a.length) {G__57244__a[G__57244__i] = arguments[G__57244__i + 0]; ++G__57244__i;}
  args = new cljs.core.IndexedSeq(G__57244__a,0);
} 
return G__57243__delegate.call(this,args);};
G__57243.cljs$lang$maxFixedArity = 0;
G__57243.cljs$lang$applyTo = (function (arglist__57245){
var args = cljs.core.seq(arglist__57245);
return G__57243__delegate(args);
});
G__57243.cljs$core$IFn$_invoke$arity$variadic = G__57243__delegate;
return G__57243;
})()
;

return null;
});
