goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__376670__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__376670 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__376671__i = 0, G__376671__a = new Array(arguments.length -  0);
while (G__376671__i < G__376671__a.length) {G__376671__a[G__376671__i] = arguments[G__376671__i + 0]; ++G__376671__i;}
  args = new cljs.core.IndexedSeq(G__376671__a,0);
} 
return G__376670__delegate.call(this,args);};
G__376670.cljs$lang$maxFixedArity = 0;
G__376670.cljs$lang$applyTo = (function (arglist__376672){
var args = cljs.core.seq(arglist__376672);
return G__376670__delegate(args);
});
G__376670.cljs$core$IFn$_invoke$arity$variadic = G__376670__delegate;
return G__376670;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__376673__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__376673 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__376674__i = 0, G__376674__a = new Array(arguments.length -  0);
while (G__376674__i < G__376674__a.length) {G__376674__a[G__376674__i] = arguments[G__376674__i + 0]; ++G__376674__i;}
  args = new cljs.core.IndexedSeq(G__376674__a,0);
} 
return G__376673__delegate.call(this,args);};
G__376673.cljs$lang$maxFixedArity = 0;
G__376673.cljs$lang$applyTo = (function (arglist__376675){
var args = cljs.core.seq(arglist__376675);
return G__376673__delegate(args);
});
G__376673.cljs$core$IFn$_invoke$arity$variadic = G__376673__delegate;
return G__376673;
})()
;

return null;
});
