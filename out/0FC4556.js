goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__70452__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__70452 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__70453__i = 0, G__70453__a = new Array(arguments.length -  0);
while (G__70453__i < G__70453__a.length) {G__70453__a[G__70453__i] = arguments[G__70453__i + 0]; ++G__70453__i;}
  args = new cljs.core.IndexedSeq(G__70453__a,0);
} 
return G__70452__delegate.call(this,args);};
G__70452.cljs$lang$maxFixedArity = 0;
G__70452.cljs$lang$applyTo = (function (arglist__70454){
var args = cljs.core.seq(arglist__70454);
return G__70452__delegate(args);
});
G__70452.cljs$core$IFn$_invoke$arity$variadic = G__70452__delegate;
return G__70452;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__70455__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__70455 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__70456__i = 0, G__70456__a = new Array(arguments.length -  0);
while (G__70456__i < G__70456__a.length) {G__70456__a[G__70456__i] = arguments[G__70456__i + 0]; ++G__70456__i;}
  args = new cljs.core.IndexedSeq(G__70456__a,0);
} 
return G__70455__delegate.call(this,args);};
G__70455.cljs$lang$maxFixedArity = 0;
G__70455.cljs$lang$applyTo = (function (arglist__70457){
var args = cljs.core.seq(arglist__70457);
return G__70455__delegate(args);
});
G__70455.cljs$core$IFn$_invoke$arity$variadic = G__70455__delegate;
return G__70455;
})()
;

return null;
});
