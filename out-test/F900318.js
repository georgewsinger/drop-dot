goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__95413__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__95413 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__95414__i = 0, G__95414__a = new Array(arguments.length -  0);
while (G__95414__i < G__95414__a.length) {G__95414__a[G__95414__i] = arguments[G__95414__i + 0]; ++G__95414__i;}
  args = new cljs.core.IndexedSeq(G__95414__a,0);
} 
return G__95413__delegate.call(this,args);};
G__95413.cljs$lang$maxFixedArity = 0;
G__95413.cljs$lang$applyTo = (function (arglist__95415){
var args = cljs.core.seq(arglist__95415);
return G__95413__delegate(args);
});
G__95413.cljs$core$IFn$_invoke$arity$variadic = G__95413__delegate;
return G__95413;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__95416__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__95416 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__95417__i = 0, G__95417__a = new Array(arguments.length -  0);
while (G__95417__i < G__95417__a.length) {G__95417__a[G__95417__i] = arguments[G__95417__i + 0]; ++G__95417__i;}
  args = new cljs.core.IndexedSeq(G__95417__a,0);
} 
return G__95416__delegate.call(this,args);};
G__95416.cljs$lang$maxFixedArity = 0;
G__95416.cljs$lang$applyTo = (function (arglist__95418){
var args = cljs.core.seq(arglist__95418);
return G__95416__delegate(args);
});
G__95416.cljs$core$IFn$_invoke$arity$variadic = G__95416__delegate;
return G__95416;
})()
;

return null;
});
