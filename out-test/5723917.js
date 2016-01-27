goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__168272__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__168272 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__168273__i = 0, G__168273__a = new Array(arguments.length -  0);
while (G__168273__i < G__168273__a.length) {G__168273__a[G__168273__i] = arguments[G__168273__i + 0]; ++G__168273__i;}
  args = new cljs.core.IndexedSeq(G__168273__a,0);
} 
return G__168272__delegate.call(this,args);};
G__168272.cljs$lang$maxFixedArity = 0;
G__168272.cljs$lang$applyTo = (function (arglist__168274){
var args = cljs.core.seq(arglist__168274);
return G__168272__delegate(args);
});
G__168272.cljs$core$IFn$_invoke$arity$variadic = G__168272__delegate;
return G__168272;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__168275__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__168275 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__168276__i = 0, G__168276__a = new Array(arguments.length -  0);
while (G__168276__i < G__168276__a.length) {G__168276__a[G__168276__i] = arguments[G__168276__i + 0]; ++G__168276__i;}
  args = new cljs.core.IndexedSeq(G__168276__a,0);
} 
return G__168275__delegate.call(this,args);};
G__168275.cljs$lang$maxFixedArity = 0;
G__168275.cljs$lang$applyTo = (function (arglist__168277){
var args = cljs.core.seq(arglist__168277);
return G__168275__delegate(args);
});
G__168275.cljs$core$IFn$_invoke$arity$variadic = G__168275__delegate;
return G__168275;
})()
;

return null;
});
