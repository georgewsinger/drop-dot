goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__60488__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__60488 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60489__i = 0, G__60489__a = new Array(arguments.length -  0);
while (G__60489__i < G__60489__a.length) {G__60489__a[G__60489__i] = arguments[G__60489__i + 0]; ++G__60489__i;}
  args = new cljs.core.IndexedSeq(G__60489__a,0);
} 
return G__60488__delegate.call(this,args);};
G__60488.cljs$lang$maxFixedArity = 0;
G__60488.cljs$lang$applyTo = (function (arglist__60490){
var args = cljs.core.seq(arglist__60490);
return G__60488__delegate(args);
});
G__60488.cljs$core$IFn$_invoke$arity$variadic = G__60488__delegate;
return G__60488;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__60491__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__60491 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60492__i = 0, G__60492__a = new Array(arguments.length -  0);
while (G__60492__i < G__60492__a.length) {G__60492__a[G__60492__i] = arguments[G__60492__i + 0]; ++G__60492__i;}
  args = new cljs.core.IndexedSeq(G__60492__a,0);
} 
return G__60491__delegate.call(this,args);};
G__60491.cljs$lang$maxFixedArity = 0;
G__60491.cljs$lang$applyTo = (function (arglist__60493){
var args = cljs.core.seq(arglist__60493);
return G__60491__delegate(args);
});
G__60491.cljs$core$IFn$_invoke$arity$variadic = G__60491__delegate;
return G__60491;
})()
;

return null;
});
