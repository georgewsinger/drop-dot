goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__128413__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__128413 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__128414__i = 0, G__128414__a = new Array(arguments.length -  0);
while (G__128414__i < G__128414__a.length) {G__128414__a[G__128414__i] = arguments[G__128414__i + 0]; ++G__128414__i;}
  args = new cljs.core.IndexedSeq(G__128414__a,0);
} 
return G__128413__delegate.call(this,args);};
G__128413.cljs$lang$maxFixedArity = 0;
G__128413.cljs$lang$applyTo = (function (arglist__128415){
var args = cljs.core.seq(arglist__128415);
return G__128413__delegate(args);
});
G__128413.cljs$core$IFn$_invoke$arity$variadic = G__128413__delegate;
return G__128413;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__128416__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__128416 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__128417__i = 0, G__128417__a = new Array(arguments.length -  0);
while (G__128417__i < G__128417__a.length) {G__128417__a[G__128417__i] = arguments[G__128417__i + 0]; ++G__128417__i;}
  args = new cljs.core.IndexedSeq(G__128417__a,0);
} 
return G__128416__delegate.call(this,args);};
G__128416.cljs$lang$maxFixedArity = 0;
G__128416.cljs$lang$applyTo = (function (arglist__128418){
var args = cljs.core.seq(arglist__128418);
return G__128416__delegate(args);
});
G__128416.cljs$core$IFn$_invoke$arity$variadic = G__128416__delegate;
return G__128416;
})()
;

return null;
});
