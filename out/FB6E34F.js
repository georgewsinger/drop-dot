goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__249547__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__249547 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__249548__i = 0, G__249548__a = new Array(arguments.length -  0);
while (G__249548__i < G__249548__a.length) {G__249548__a[G__249548__i] = arguments[G__249548__i + 0]; ++G__249548__i;}
  args = new cljs.core.IndexedSeq(G__249548__a,0);
} 
return G__249547__delegate.call(this,args);};
G__249547.cljs$lang$maxFixedArity = 0;
G__249547.cljs$lang$applyTo = (function (arglist__249549){
var args = cljs.core.seq(arglist__249549);
return G__249547__delegate(args);
});
G__249547.cljs$core$IFn$_invoke$arity$variadic = G__249547__delegate;
return G__249547;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__249550__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__249550 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__249551__i = 0, G__249551__a = new Array(arguments.length -  0);
while (G__249551__i < G__249551__a.length) {G__249551__a[G__249551__i] = arguments[G__249551__i + 0]; ++G__249551__i;}
  args = new cljs.core.IndexedSeq(G__249551__a,0);
} 
return G__249550__delegate.call(this,args);};
G__249550.cljs$lang$maxFixedArity = 0;
G__249550.cljs$lang$applyTo = (function (arglist__249552){
var args = cljs.core.seq(arglist__249552);
return G__249550__delegate(args);
});
G__249550.cljs$core$IFn$_invoke$arity$variadic = G__249550__delegate;
return G__249550;
})()
;

return null;
});
