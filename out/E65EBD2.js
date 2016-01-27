goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__336987__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__336987 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__336988__i = 0, G__336988__a = new Array(arguments.length -  0);
while (G__336988__i < G__336988__a.length) {G__336988__a[G__336988__i] = arguments[G__336988__i + 0]; ++G__336988__i;}
  args = new cljs.core.IndexedSeq(G__336988__a,0);
} 
return G__336987__delegate.call(this,args);};
G__336987.cljs$lang$maxFixedArity = 0;
G__336987.cljs$lang$applyTo = (function (arglist__336989){
var args = cljs.core.seq(arglist__336989);
return G__336987__delegate(args);
});
G__336987.cljs$core$IFn$_invoke$arity$variadic = G__336987__delegate;
return G__336987;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__336990__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__336990 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__336991__i = 0, G__336991__a = new Array(arguments.length -  0);
while (G__336991__i < G__336991__a.length) {G__336991__a[G__336991__i] = arguments[G__336991__i + 0]; ++G__336991__i;}
  args = new cljs.core.IndexedSeq(G__336991__a,0);
} 
return G__336990__delegate.call(this,args);};
G__336990.cljs$lang$maxFixedArity = 0;
G__336990.cljs$lang$applyTo = (function (arglist__336992){
var args = cljs.core.seq(arglist__336992);
return G__336990__delegate(args);
});
G__336990.cljs$core$IFn$_invoke$arity$variadic = G__336990__delegate;
return G__336990;
})()
;

return null;
});
