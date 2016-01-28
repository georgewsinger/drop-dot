goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21286__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21286 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21287__i = 0, G__21287__a = new Array(arguments.length -  0);
while (G__21287__i < G__21287__a.length) {G__21287__a[G__21287__i] = arguments[G__21287__i + 0]; ++G__21287__i;}
  args = new cljs.core.IndexedSeq(G__21287__a,0);
} 
return G__21286__delegate.call(this,args);};
G__21286.cljs$lang$maxFixedArity = 0;
G__21286.cljs$lang$applyTo = (function (arglist__21288){
var args = cljs.core.seq(arglist__21288);
return G__21286__delegate(args);
});
G__21286.cljs$core$IFn$_invoke$arity$variadic = G__21286__delegate;
return G__21286;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21289__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21289 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21290__i = 0, G__21290__a = new Array(arguments.length -  0);
while (G__21290__i < G__21290__a.length) {G__21290__a[G__21290__i] = arguments[G__21290__i + 0]; ++G__21290__i;}
  args = new cljs.core.IndexedSeq(G__21290__a,0);
} 
return G__21289__delegate.call(this,args);};
G__21289.cljs$lang$maxFixedArity = 0;
G__21289.cljs$lang$applyTo = (function (arglist__21291){
var args = cljs.core.seq(arglist__21291);
return G__21289__delegate(args);
});
G__21289.cljs$core$IFn$_invoke$arity$variadic = G__21289__delegate;
return G__21289;
})()
;

return null;
});
