goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27901__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__27901 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27902__i = 0, G__27902__a = new Array(arguments.length -  0);
while (G__27902__i < G__27902__a.length) {G__27902__a[G__27902__i] = arguments[G__27902__i + 0]; ++G__27902__i;}
  args = new cljs.core.IndexedSeq(G__27902__a,0);
} 
return G__27901__delegate.call(this,args);};
G__27901.cljs$lang$maxFixedArity = 0;
G__27901.cljs$lang$applyTo = (function (arglist__27903){
var args = cljs.core.seq(arglist__27903);
return G__27901__delegate(args);
});
G__27901.cljs$core$IFn$_invoke$arity$variadic = G__27901__delegate;
return G__27901;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__27904__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__27904 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27905__i = 0, G__27905__a = new Array(arguments.length -  0);
while (G__27905__i < G__27905__a.length) {G__27905__a[G__27905__i] = arguments[G__27905__i + 0]; ++G__27905__i;}
  args = new cljs.core.IndexedSeq(G__27905__a,0);
} 
return G__27904__delegate.call(this,args);};
G__27904.cljs$lang$maxFixedArity = 0;
G__27904.cljs$lang$applyTo = (function (arglist__27906){
var args = cljs.core.seq(arglist__27906);
return G__27904__delegate(args);
});
G__27904.cljs$core$IFn$_invoke$arity$variadic = G__27904__delegate;
return G__27904;
})()
;

return null;
});
