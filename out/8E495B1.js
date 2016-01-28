goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__365194__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__365194 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__365195__i = 0, G__365195__a = new Array(arguments.length -  0);
while (G__365195__i < G__365195__a.length) {G__365195__a[G__365195__i] = arguments[G__365195__i + 0]; ++G__365195__i;}
  args = new cljs.core.IndexedSeq(G__365195__a,0);
} 
return G__365194__delegate.call(this,args);};
G__365194.cljs$lang$maxFixedArity = 0;
G__365194.cljs$lang$applyTo = (function (arglist__365196){
var args = cljs.core.seq(arglist__365196);
return G__365194__delegate(args);
});
G__365194.cljs$core$IFn$_invoke$arity$variadic = G__365194__delegate;
return G__365194;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__365197__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__365197 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__365198__i = 0, G__365198__a = new Array(arguments.length -  0);
while (G__365198__i < G__365198__a.length) {G__365198__a[G__365198__i] = arguments[G__365198__i + 0]; ++G__365198__i;}
  args = new cljs.core.IndexedSeq(G__365198__a,0);
} 
return G__365197__delegate.call(this,args);};
G__365197.cljs$lang$maxFixedArity = 0;
G__365197.cljs$lang$applyTo = (function (arglist__365199){
var args = cljs.core.seq(arglist__365199);
return G__365197__delegate(args);
});
G__365197.cljs$core$IFn$_invoke$arity$variadic = G__365197__delegate;
return G__365197;
})()
;

return null;
});
