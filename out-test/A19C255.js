goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__47677__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__47677 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47678__i = 0, G__47678__a = new Array(arguments.length -  0);
while (G__47678__i < G__47678__a.length) {G__47678__a[G__47678__i] = arguments[G__47678__i + 0]; ++G__47678__i;}
  args = new cljs.core.IndexedSeq(G__47678__a,0);
} 
return G__47677__delegate.call(this,args);};
G__47677.cljs$lang$maxFixedArity = 0;
G__47677.cljs$lang$applyTo = (function (arglist__47679){
var args = cljs.core.seq(arglist__47679);
return G__47677__delegate(args);
});
G__47677.cljs$core$IFn$_invoke$arity$variadic = G__47677__delegate;
return G__47677;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__47680__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__47680 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47681__i = 0, G__47681__a = new Array(arguments.length -  0);
while (G__47681__i < G__47681__a.length) {G__47681__a[G__47681__i] = arguments[G__47681__i + 0]; ++G__47681__i;}
  args = new cljs.core.IndexedSeq(G__47681__a,0);
} 
return G__47680__delegate.call(this,args);};
G__47680.cljs$lang$maxFixedArity = 0;
G__47680.cljs$lang$applyTo = (function (arglist__47682){
var args = cljs.core.seq(arglist__47682);
return G__47680__delegate(args);
});
G__47680.cljs$core$IFn$_invoke$arity$variadic = G__47680__delegate;
return G__47680;
})()
;

return null;
});
