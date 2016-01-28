goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__90452__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__90452 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__90453__i = 0, G__90453__a = new Array(arguments.length -  0);
while (G__90453__i < G__90453__a.length) {G__90453__a[G__90453__i] = arguments[G__90453__i + 0]; ++G__90453__i;}
  args = new cljs.core.IndexedSeq(G__90453__a,0);
} 
return G__90452__delegate.call(this,args);};
G__90452.cljs$lang$maxFixedArity = 0;
G__90452.cljs$lang$applyTo = (function (arglist__90454){
var args = cljs.core.seq(arglist__90454);
return G__90452__delegate(args);
});
G__90452.cljs$core$IFn$_invoke$arity$variadic = G__90452__delegate;
return G__90452;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__90455__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__90455 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__90456__i = 0, G__90456__a = new Array(arguments.length -  0);
while (G__90456__i < G__90456__a.length) {G__90456__a[G__90456__i] = arguments[G__90456__i + 0]; ++G__90456__i;}
  args = new cljs.core.IndexedSeq(G__90456__a,0);
} 
return G__90455__delegate.call(this,args);};
G__90455.cljs$lang$maxFixedArity = 0;
G__90455.cljs$lang$applyTo = (function (arglist__90457){
var args = cljs.core.seq(arglist__90457);
return G__90455__delegate(args);
});
G__90455.cljs$core$IFn$_invoke$arity$variadic = G__90455__delegate;
return G__90455;
})()
;

return null;
});
