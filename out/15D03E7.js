goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__286193__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__286193 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__286194__i = 0, G__286194__a = new Array(arguments.length -  0);
while (G__286194__i < G__286194__a.length) {G__286194__a[G__286194__i] = arguments[G__286194__i + 0]; ++G__286194__i;}
  args = new cljs.core.IndexedSeq(G__286194__a,0);
} 
return G__286193__delegate.call(this,args);};
G__286193.cljs$lang$maxFixedArity = 0;
G__286193.cljs$lang$applyTo = (function (arglist__286195){
var args = cljs.core.seq(arglist__286195);
return G__286193__delegate(args);
});
G__286193.cljs$core$IFn$_invoke$arity$variadic = G__286193__delegate;
return G__286193;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__286196__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__286196 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__286197__i = 0, G__286197__a = new Array(arguments.length -  0);
while (G__286197__i < G__286197__a.length) {G__286197__a[G__286197__i] = arguments[G__286197__i + 0]; ++G__286197__i;}
  args = new cljs.core.IndexedSeq(G__286197__a,0);
} 
return G__286196__delegate.call(this,args);};
G__286196.cljs$lang$maxFixedArity = 0;
G__286196.cljs$lang$applyTo = (function (arglist__286198){
var args = cljs.core.seq(arglist__286198);
return G__286196__delegate(args);
});
G__286196.cljs$core$IFn$_invoke$arity$variadic = G__286196__delegate;
return G__286196;
})()
;

return null;
});
