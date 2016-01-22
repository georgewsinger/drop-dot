goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13577__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13577 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13578__i = 0, G__13578__a = new Array(arguments.length -  0);
while (G__13578__i < G__13578__a.length) {G__13578__a[G__13578__i] = arguments[G__13578__i + 0]; ++G__13578__i;}
  args = new cljs.core.IndexedSeq(G__13578__a,0);
} 
return G__13577__delegate.call(this,args);};
G__13577.cljs$lang$maxFixedArity = 0;
G__13577.cljs$lang$applyTo = (function (arglist__13579){
var args = cljs.core.seq(arglist__13579);
return G__13577__delegate(args);
});
G__13577.cljs$core$IFn$_invoke$arity$variadic = G__13577__delegate;
return G__13577;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13580__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13580 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13581__i = 0, G__13581__a = new Array(arguments.length -  0);
while (G__13581__i < G__13581__a.length) {G__13581__a[G__13581__i] = arguments[G__13581__i + 0]; ++G__13581__i;}
  args = new cljs.core.IndexedSeq(G__13581__a,0);
} 
return G__13580__delegate.call(this,args);};
G__13580.cljs$lang$maxFixedArity = 0;
G__13580.cljs$lang$applyTo = (function (arglist__13582){
var args = cljs.core.seq(arglist__13582);
return G__13580__delegate(args);
});
G__13580.cljs$core$IFn$_invoke$arity$variadic = G__13580__delegate;
return G__13580;
})()
;

return null;
});
