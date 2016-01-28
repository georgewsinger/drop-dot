goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__366249__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__366249 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__366250__i = 0, G__366250__a = new Array(arguments.length -  0);
while (G__366250__i < G__366250__a.length) {G__366250__a[G__366250__i] = arguments[G__366250__i + 0]; ++G__366250__i;}
  args = new cljs.core.IndexedSeq(G__366250__a,0);
} 
return G__366249__delegate.call(this,args);};
G__366249.cljs$lang$maxFixedArity = 0;
G__366249.cljs$lang$applyTo = (function (arglist__366251){
var args = cljs.core.seq(arglist__366251);
return G__366249__delegate(args);
});
G__366249.cljs$core$IFn$_invoke$arity$variadic = G__366249__delegate;
return G__366249;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__366252__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__366252 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__366253__i = 0, G__366253__a = new Array(arguments.length -  0);
while (G__366253__i < G__366253__a.length) {G__366253__a[G__366253__i] = arguments[G__366253__i + 0]; ++G__366253__i;}
  args = new cljs.core.IndexedSeq(G__366253__a,0);
} 
return G__366252__delegate.call(this,args);};
G__366252.cljs$lang$maxFixedArity = 0;
G__366252.cljs$lang$applyTo = (function (arglist__366254){
var args = cljs.core.seq(arglist__366254);
return G__366252__delegate(args);
});
G__366252.cljs$core$IFn$_invoke$arity$variadic = G__366252__delegate;
return G__366252;
})()
;

return null;
});
