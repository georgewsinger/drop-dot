goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31012__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__31012 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31013__i = 0, G__31013__a = new Array(arguments.length -  0);
while (G__31013__i < G__31013__a.length) {G__31013__a[G__31013__i] = arguments[G__31013__i + 0]; ++G__31013__i;}
  args = new cljs.core.IndexedSeq(G__31013__a,0);
} 
return G__31012__delegate.call(this,args);};
G__31012.cljs$lang$maxFixedArity = 0;
G__31012.cljs$lang$applyTo = (function (arglist__31014){
var args = cljs.core.seq(arglist__31014);
return G__31012__delegate(args);
});
G__31012.cljs$core$IFn$_invoke$arity$variadic = G__31012__delegate;
return G__31012;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__31015__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__31015 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31016__i = 0, G__31016__a = new Array(arguments.length -  0);
while (G__31016__i < G__31016__a.length) {G__31016__a[G__31016__i] = arguments[G__31016__i + 0]; ++G__31016__i;}
  args = new cljs.core.IndexedSeq(G__31016__a,0);
} 
return G__31015__delegate.call(this,args);};
G__31015.cljs$lang$maxFixedArity = 0;
G__31015.cljs$lang$applyTo = (function (arglist__31017){
var args = cljs.core.seq(arglist__31017);
return G__31015__delegate(args);
});
G__31015.cljs$core$IFn$_invoke$arity$variadic = G__31015__delegate;
return G__31015;
})()
;

return null;
});
