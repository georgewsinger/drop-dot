goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__304410__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__304410 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__304411__i = 0, G__304411__a = new Array(arguments.length -  0);
while (G__304411__i < G__304411__a.length) {G__304411__a[G__304411__i] = arguments[G__304411__i + 0]; ++G__304411__i;}
  args = new cljs.core.IndexedSeq(G__304411__a,0);
} 
return G__304410__delegate.call(this,args);};
G__304410.cljs$lang$maxFixedArity = 0;
G__304410.cljs$lang$applyTo = (function (arglist__304412){
var args = cljs.core.seq(arglist__304412);
return G__304410__delegate(args);
});
G__304410.cljs$core$IFn$_invoke$arity$variadic = G__304410__delegate;
return G__304410;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__304413__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__304413 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__304414__i = 0, G__304414__a = new Array(arguments.length -  0);
while (G__304414__i < G__304414__a.length) {G__304414__a[G__304414__i] = arguments[G__304414__i + 0]; ++G__304414__i;}
  args = new cljs.core.IndexedSeq(G__304414__a,0);
} 
return G__304413__delegate.call(this,args);};
G__304413.cljs$lang$maxFixedArity = 0;
G__304413.cljs$lang$applyTo = (function (arglist__304415){
var args = cljs.core.seq(arglist__304415);
return G__304413__delegate(args);
});
G__304413.cljs$core$IFn$_invoke$arity$variadic = G__304413__delegate;
return G__304413;
})()
;

return null;
});
