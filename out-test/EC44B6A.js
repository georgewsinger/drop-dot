goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__35046__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__35046 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35047__i = 0, G__35047__a = new Array(arguments.length -  0);
while (G__35047__i < G__35047__a.length) {G__35047__a[G__35047__i] = arguments[G__35047__i + 0]; ++G__35047__i;}
  args = new cljs.core.IndexedSeq(G__35047__a,0);
} 
return G__35046__delegate.call(this,args);};
G__35046.cljs$lang$maxFixedArity = 0;
G__35046.cljs$lang$applyTo = (function (arglist__35048){
var args = cljs.core.seq(arglist__35048);
return G__35046__delegate(args);
});
G__35046.cljs$core$IFn$_invoke$arity$variadic = G__35046__delegate;
return G__35046;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__35049__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__35049 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35050__i = 0, G__35050__a = new Array(arguments.length -  0);
while (G__35050__i < G__35050__a.length) {G__35050__a[G__35050__i] = arguments[G__35050__i + 0]; ++G__35050__i;}
  args = new cljs.core.IndexedSeq(G__35050__a,0);
} 
return G__35049__delegate.call(this,args);};
G__35049.cljs$lang$maxFixedArity = 0;
G__35049.cljs$lang$applyTo = (function (arglist__35051){
var args = cljs.core.seq(arglist__35051);
return G__35049__delegate(args);
});
G__35049.cljs$core$IFn$_invoke$arity$variadic = G__35049__delegate;
return G__35049;
})()
;

return null;
});
