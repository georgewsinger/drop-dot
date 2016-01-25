goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__268313__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__268313 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__268314__i = 0, G__268314__a = new Array(arguments.length -  0);
while (G__268314__i < G__268314__a.length) {G__268314__a[G__268314__i] = arguments[G__268314__i + 0]; ++G__268314__i;}
  args = new cljs.core.IndexedSeq(G__268314__a,0);
} 
return G__268313__delegate.call(this,args);};
G__268313.cljs$lang$maxFixedArity = 0;
G__268313.cljs$lang$applyTo = (function (arglist__268315){
var args = cljs.core.seq(arglist__268315);
return G__268313__delegate(args);
});
G__268313.cljs$core$IFn$_invoke$arity$variadic = G__268313__delegate;
return G__268313;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__268316__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__268316 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__268317__i = 0, G__268317__a = new Array(arguments.length -  0);
while (G__268317__i < G__268317__a.length) {G__268317__a[G__268317__i] = arguments[G__268317__i + 0]; ++G__268317__i;}
  args = new cljs.core.IndexedSeq(G__268317__a,0);
} 
return G__268316__delegate.call(this,args);};
G__268316.cljs$lang$maxFixedArity = 0;
G__268316.cljs$lang$applyTo = (function (arglist__268318){
var args = cljs.core.seq(arglist__268318);
return G__268316__delegate(args);
});
G__268316.cljs$core$IFn$_invoke$arity$variadic = G__268316__delegate;
return G__268316;
})()
;

return null;
});
