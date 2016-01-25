goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__48272__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__48272 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48273__i = 0, G__48273__a = new Array(arguments.length -  0);
while (G__48273__i < G__48273__a.length) {G__48273__a[G__48273__i] = arguments[G__48273__i + 0]; ++G__48273__i;}
  args = new cljs.core.IndexedSeq(G__48273__a,0);
} 
return G__48272__delegate.call(this,args);};
G__48272.cljs$lang$maxFixedArity = 0;
G__48272.cljs$lang$applyTo = (function (arglist__48274){
var args = cljs.core.seq(arglist__48274);
return G__48272__delegate(args);
});
G__48272.cljs$core$IFn$_invoke$arity$variadic = G__48272__delegate;
return G__48272;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__48275__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__48275 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48276__i = 0, G__48276__a = new Array(arguments.length -  0);
while (G__48276__i < G__48276__a.length) {G__48276__a[G__48276__i] = arguments[G__48276__i + 0]; ++G__48276__i;}
  args = new cljs.core.IndexedSeq(G__48276__a,0);
} 
return G__48275__delegate.call(this,args);};
G__48275.cljs$lang$maxFixedArity = 0;
G__48275.cljs$lang$applyTo = (function (arglist__48277){
var args = cljs.core.seq(arglist__48277);
return G__48275__delegate(args);
});
G__48275.cljs$core$IFn$_invoke$arity$variadic = G__48275__delegate;
return G__48275;
})()
;

return null;
});
