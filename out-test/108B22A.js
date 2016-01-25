goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17243__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17243 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17244__i = 0, G__17244__a = new Array(arguments.length -  0);
while (G__17244__i < G__17244__a.length) {G__17244__a[G__17244__i] = arguments[G__17244__i + 0]; ++G__17244__i;}
  args = new cljs.core.IndexedSeq(G__17244__a,0);
} 
return G__17243__delegate.call(this,args);};
G__17243.cljs$lang$maxFixedArity = 0;
G__17243.cljs$lang$applyTo = (function (arglist__17245){
var args = cljs.core.seq(arglist__17245);
return G__17243__delegate(args);
});
G__17243.cljs$core$IFn$_invoke$arity$variadic = G__17243__delegate;
return G__17243;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17246__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17246 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17247__i = 0, G__17247__a = new Array(arguments.length -  0);
while (G__17247__i < G__17247__a.length) {G__17247__a[G__17247__i] = arguments[G__17247__i + 0]; ++G__17247__i;}
  args = new cljs.core.IndexedSeq(G__17247__a,0);
} 
return G__17246__delegate.call(this,args);};
G__17246.cljs$lang$maxFixedArity = 0;
G__17246.cljs$lang$applyTo = (function (arglist__17248){
var args = cljs.core.seq(arglist__17248);
return G__17246__delegate(args);
});
G__17246.cljs$core$IFn$_invoke$arity$variadic = G__17246__delegate;
return G__17246;
})()
;

return null;
});
