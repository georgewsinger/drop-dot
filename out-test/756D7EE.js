goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__78114__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__78114 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__78115__i = 0, G__78115__a = new Array(arguments.length -  0);
while (G__78115__i < G__78115__a.length) {G__78115__a[G__78115__i] = arguments[G__78115__i + 0]; ++G__78115__i;}
  args = new cljs.core.IndexedSeq(G__78115__a,0);
} 
return G__78114__delegate.call(this,args);};
G__78114.cljs$lang$maxFixedArity = 0;
G__78114.cljs$lang$applyTo = (function (arglist__78116){
var args = cljs.core.seq(arglist__78116);
return G__78114__delegate(args);
});
G__78114.cljs$core$IFn$_invoke$arity$variadic = G__78114__delegate;
return G__78114;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__78117__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__78117 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__78118__i = 0, G__78118__a = new Array(arguments.length -  0);
while (G__78118__i < G__78118__a.length) {G__78118__a[G__78118__i] = arguments[G__78118__i + 0]; ++G__78118__i;}
  args = new cljs.core.IndexedSeq(G__78118__a,0);
} 
return G__78117__delegate.call(this,args);};
G__78117.cljs$lang$maxFixedArity = 0;
G__78117.cljs$lang$applyTo = (function (arglist__78119){
var args = cljs.core.seq(arglist__78119);
return G__78117__delegate(args);
});
G__78117.cljs$core$IFn$_invoke$arity$variadic = G__78117__delegate;
return G__78117;
})()
;

return null;
});
