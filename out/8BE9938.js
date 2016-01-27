goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__316941__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__316941 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__316942__i = 0, G__316942__a = new Array(arguments.length -  0);
while (G__316942__i < G__316942__a.length) {G__316942__a[G__316942__i] = arguments[G__316942__i + 0]; ++G__316942__i;}
  args = new cljs.core.IndexedSeq(G__316942__a,0);
} 
return G__316941__delegate.call(this,args);};
G__316941.cljs$lang$maxFixedArity = 0;
G__316941.cljs$lang$applyTo = (function (arglist__316943){
var args = cljs.core.seq(arglist__316943);
return G__316941__delegate(args);
});
G__316941.cljs$core$IFn$_invoke$arity$variadic = G__316941__delegate;
return G__316941;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__316944__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__316944 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__316945__i = 0, G__316945__a = new Array(arguments.length -  0);
while (G__316945__i < G__316945__a.length) {G__316945__a[G__316945__i] = arguments[G__316945__i + 0]; ++G__316945__i;}
  args = new cljs.core.IndexedSeq(G__316945__a,0);
} 
return G__316944__delegate.call(this,args);};
G__316944.cljs$lang$maxFixedArity = 0;
G__316944.cljs$lang$applyTo = (function (arglist__316946){
var args = cljs.core.seq(arglist__316946);
return G__316944__delegate(args);
});
G__316944.cljs$core$IFn$_invoke$arity$variadic = G__316944__delegate;
return G__316944;
})()
;

return null;
});
