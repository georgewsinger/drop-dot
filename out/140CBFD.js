goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__328865__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__328865 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__328866__i = 0, G__328866__a = new Array(arguments.length -  0);
while (G__328866__i < G__328866__a.length) {G__328866__a[G__328866__i] = arguments[G__328866__i + 0]; ++G__328866__i;}
  args = new cljs.core.IndexedSeq(G__328866__a,0);
} 
return G__328865__delegate.call(this,args);};
G__328865.cljs$lang$maxFixedArity = 0;
G__328865.cljs$lang$applyTo = (function (arglist__328867){
var args = cljs.core.seq(arglist__328867);
return G__328865__delegate(args);
});
G__328865.cljs$core$IFn$_invoke$arity$variadic = G__328865__delegate;
return G__328865;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__328868__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__328868 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__328869__i = 0, G__328869__a = new Array(arguments.length -  0);
while (G__328869__i < G__328869__a.length) {G__328869__a[G__328869__i] = arguments[G__328869__i + 0]; ++G__328869__i;}
  args = new cljs.core.IndexedSeq(G__328869__a,0);
} 
return G__328868__delegate.call(this,args);};
G__328868.cljs$lang$maxFixedArity = 0;
G__328868.cljs$lang$applyTo = (function (arglist__328870){
var args = cljs.core.seq(arglist__328870);
return G__328868__delegate(args);
});
G__328868.cljs$core$IFn$_invoke$arity$variadic = G__328868__delegate;
return G__328868;
})()
;

return null;
});
