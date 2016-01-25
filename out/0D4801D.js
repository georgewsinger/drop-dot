goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__64875__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__64875 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64876__i = 0, G__64876__a = new Array(arguments.length -  0);
while (G__64876__i < G__64876__a.length) {G__64876__a[G__64876__i] = arguments[G__64876__i + 0]; ++G__64876__i;}
  args = new cljs.core.IndexedSeq(G__64876__a,0);
} 
return G__64875__delegate.call(this,args);};
G__64875.cljs$lang$maxFixedArity = 0;
G__64875.cljs$lang$applyTo = (function (arglist__64877){
var args = cljs.core.seq(arglist__64877);
return G__64875__delegate(args);
});
G__64875.cljs$core$IFn$_invoke$arity$variadic = G__64875__delegate;
return G__64875;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__64878__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__64878 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64879__i = 0, G__64879__a = new Array(arguments.length -  0);
while (G__64879__i < G__64879__a.length) {G__64879__a[G__64879__i] = arguments[G__64879__i + 0]; ++G__64879__i;}
  args = new cljs.core.IndexedSeq(G__64879__a,0);
} 
return G__64878__delegate.call(this,args);};
G__64878.cljs$lang$maxFixedArity = 0;
G__64878.cljs$lang$applyTo = (function (arglist__64880){
var args = cljs.core.seq(arglist__64880);
return G__64878__delegate(args);
});
G__64878.cljs$core$IFn$_invoke$arity$variadic = G__64878__delegate;
return G__64878;
})()
;

return null;
});
