goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__47413__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__47413 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47414__i = 0, G__47414__a = new Array(arguments.length -  0);
while (G__47414__i < G__47414__a.length) {G__47414__a[G__47414__i] = arguments[G__47414__i + 0]; ++G__47414__i;}
  args = new cljs.core.IndexedSeq(G__47414__a,0);
} 
return G__47413__delegate.call(this,args);};
G__47413.cljs$lang$maxFixedArity = 0;
G__47413.cljs$lang$applyTo = (function (arglist__47415){
var args = cljs.core.seq(arglist__47415);
return G__47413__delegate(args);
});
G__47413.cljs$core$IFn$_invoke$arity$variadic = G__47413__delegate;
return G__47413;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__47416__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__47416 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47417__i = 0, G__47417__a = new Array(arguments.length -  0);
while (G__47417__i < G__47417__a.length) {G__47417__a[G__47417__i] = arguments[G__47417__i + 0]; ++G__47417__i;}
  args = new cljs.core.IndexedSeq(G__47417__a,0);
} 
return G__47416__delegate.call(this,args);};
G__47416.cljs$lang$maxFixedArity = 0;
G__47416.cljs$lang$applyTo = (function (arglist__47418){
var args = cljs.core.seq(arglist__47418);
return G__47416__delegate(args);
});
G__47416.cljs$core$IFn$_invoke$arity$variadic = G__47416__delegate;
return G__47416;
})()
;

return null;
});
