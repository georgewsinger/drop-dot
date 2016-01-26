goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26368__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26368 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26369__i = 0, G__26369__a = new Array(arguments.length -  0);
while (G__26369__i < G__26369__a.length) {G__26369__a[G__26369__i] = arguments[G__26369__i + 0]; ++G__26369__i;}
  args = new cljs.core.IndexedSeq(G__26369__a,0);
} 
return G__26368__delegate.call(this,args);};
G__26368.cljs$lang$maxFixedArity = 0;
G__26368.cljs$lang$applyTo = (function (arglist__26370){
var args = cljs.core.seq(arglist__26370);
return G__26368__delegate(args);
});
G__26368.cljs$core$IFn$_invoke$arity$variadic = G__26368__delegate;
return G__26368;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26371__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26371 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26372__i = 0, G__26372__a = new Array(arguments.length -  0);
while (G__26372__i < G__26372__a.length) {G__26372__a[G__26372__i] = arguments[G__26372__i + 0]; ++G__26372__i;}
  args = new cljs.core.IndexedSeq(G__26372__a,0);
} 
return G__26371__delegate.call(this,args);};
G__26371.cljs$lang$maxFixedArity = 0;
G__26371.cljs$lang$applyTo = (function (arglist__26373){
var args = cljs.core.seq(arglist__26373);
return G__26371__delegate(args);
});
G__26371.cljs$core$IFn$_invoke$arity$variadic = G__26371__delegate;
return G__26371;
})()
;

return null;
});
