goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__180708__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__180708 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__180709__i = 0, G__180709__a = new Array(arguments.length -  0);
while (G__180709__i < G__180709__a.length) {G__180709__a[G__180709__i] = arguments[G__180709__i + 0]; ++G__180709__i;}
  args = new cljs.core.IndexedSeq(G__180709__a,0);
} 
return G__180708__delegate.call(this,args);};
G__180708.cljs$lang$maxFixedArity = 0;
G__180708.cljs$lang$applyTo = (function (arglist__180710){
var args = cljs.core.seq(arglist__180710);
return G__180708__delegate(args);
});
G__180708.cljs$core$IFn$_invoke$arity$variadic = G__180708__delegate;
return G__180708;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__180711__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__180711 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__180712__i = 0, G__180712__a = new Array(arguments.length -  0);
while (G__180712__i < G__180712__a.length) {G__180712__a[G__180712__i] = arguments[G__180712__i + 0]; ++G__180712__i;}
  args = new cljs.core.IndexedSeq(G__180712__a,0);
} 
return G__180711__delegate.call(this,args);};
G__180711.cljs$lang$maxFixedArity = 0;
G__180711.cljs$lang$applyTo = (function (arglist__180713){
var args = cljs.core.seq(arglist__180713);
return G__180711__delegate(args);
});
G__180711.cljs$core$IFn$_invoke$arity$variadic = G__180711__delegate;
return G__180711;
})()
;

return null;
});
