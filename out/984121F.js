goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10503__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10503 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10504__i = 0, G__10504__a = new Array(arguments.length -  0);
while (G__10504__i < G__10504__a.length) {G__10504__a[G__10504__i] = arguments[G__10504__i + 0]; ++G__10504__i;}
  args = new cljs.core.IndexedSeq(G__10504__a,0);
} 
return G__10503__delegate.call(this,args);};
G__10503.cljs$lang$maxFixedArity = 0;
G__10503.cljs$lang$applyTo = (function (arglist__10505){
var args = cljs.core.seq(arglist__10505);
return G__10503__delegate(args);
});
G__10503.cljs$core$IFn$_invoke$arity$variadic = G__10503__delegate;
return G__10503;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10506__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10506 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10507__i = 0, G__10507__a = new Array(arguments.length -  0);
while (G__10507__i < G__10507__a.length) {G__10507__a[G__10507__i] = arguments[G__10507__i + 0]; ++G__10507__i;}
  args = new cljs.core.IndexedSeq(G__10507__a,0);
} 
return G__10506__delegate.call(this,args);};
G__10506.cljs$lang$maxFixedArity = 0;
G__10506.cljs$lang$applyTo = (function (arglist__10508){
var args = cljs.core.seq(arglist__10508);
return G__10506__delegate(args);
});
G__10506.cljs$core$IFn$_invoke$arity$variadic = G__10506__delegate;
return G__10506;
})()
;

return null;
});
