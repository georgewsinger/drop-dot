goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__235488__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__235488 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__235489__i = 0, G__235489__a = new Array(arguments.length -  0);
while (G__235489__i < G__235489__a.length) {G__235489__a[G__235489__i] = arguments[G__235489__i + 0]; ++G__235489__i;}
  args = new cljs.core.IndexedSeq(G__235489__a,0);
} 
return G__235488__delegate.call(this,args);};
G__235488.cljs$lang$maxFixedArity = 0;
G__235488.cljs$lang$applyTo = (function (arglist__235490){
var args = cljs.core.seq(arglist__235490);
return G__235488__delegate(args);
});
G__235488.cljs$core$IFn$_invoke$arity$variadic = G__235488__delegate;
return G__235488;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__235491__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__235491 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__235492__i = 0, G__235492__a = new Array(arguments.length -  0);
while (G__235492__i < G__235492__a.length) {G__235492__a[G__235492__i] = arguments[G__235492__i + 0]; ++G__235492__i;}
  args = new cljs.core.IndexedSeq(G__235492__a,0);
} 
return G__235491__delegate.call(this,args);};
G__235491.cljs$lang$maxFixedArity = 0;
G__235491.cljs$lang$applyTo = (function (arglist__235493){
var args = cljs.core.seq(arglist__235493);
return G__235491__delegate(args);
});
G__235491.cljs$core$IFn$_invoke$arity$variadic = G__235491__delegate;
return G__235491;
})()
;

return null;
});
