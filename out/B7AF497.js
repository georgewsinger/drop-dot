goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__326862__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__326862 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__326863__i = 0, G__326863__a = new Array(arguments.length -  0);
while (G__326863__i < G__326863__a.length) {G__326863__a[G__326863__i] = arguments[G__326863__i + 0]; ++G__326863__i;}
  args = new cljs.core.IndexedSeq(G__326863__a,0);
} 
return G__326862__delegate.call(this,args);};
G__326862.cljs$lang$maxFixedArity = 0;
G__326862.cljs$lang$applyTo = (function (arglist__326864){
var args = cljs.core.seq(arglist__326864);
return G__326862__delegate(args);
});
G__326862.cljs$core$IFn$_invoke$arity$variadic = G__326862__delegate;
return G__326862;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__326865__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__326865 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__326866__i = 0, G__326866__a = new Array(arguments.length -  0);
while (G__326866__i < G__326866__a.length) {G__326866__a[G__326866__i] = arguments[G__326866__i + 0]; ++G__326866__i;}
  args = new cljs.core.IndexedSeq(G__326866__a,0);
} 
return G__326865__delegate.call(this,args);};
G__326865.cljs$lang$maxFixedArity = 0;
G__326865.cljs$lang$applyTo = (function (arglist__326867){
var args = cljs.core.seq(arglist__326867);
return G__326865__delegate(args);
});
G__326865.cljs$core$IFn$_invoke$arity$variadic = G__326865__delegate;
return G__326865;
})()
;

return null;
});
