goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__133047__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__133047 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__133048__i = 0, G__133048__a = new Array(arguments.length -  0);
while (G__133048__i < G__133048__a.length) {G__133048__a[G__133048__i] = arguments[G__133048__i + 0]; ++G__133048__i;}
  args = new cljs.core.IndexedSeq(G__133048__a,0);
} 
return G__133047__delegate.call(this,args);};
G__133047.cljs$lang$maxFixedArity = 0;
G__133047.cljs$lang$applyTo = (function (arglist__133049){
var args = cljs.core.seq(arglist__133049);
return G__133047__delegate(args);
});
G__133047.cljs$core$IFn$_invoke$arity$variadic = G__133047__delegate;
return G__133047;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__133050__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__133050 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__133051__i = 0, G__133051__a = new Array(arguments.length -  0);
while (G__133051__i < G__133051__a.length) {G__133051__a[G__133051__i] = arguments[G__133051__i + 0]; ++G__133051__i;}
  args = new cljs.core.IndexedSeq(G__133051__a,0);
} 
return G__133050__delegate.call(this,args);};
G__133050.cljs$lang$maxFixedArity = 0;
G__133050.cljs$lang$applyTo = (function (arglist__133052){
var args = cljs.core.seq(arglist__133052);
return G__133050__delegate(args);
});
G__133050.cljs$core$IFn$_invoke$arity$variadic = G__133050__delegate;
return G__133050;
})()
;

return null;
});
