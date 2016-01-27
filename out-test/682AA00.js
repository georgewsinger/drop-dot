goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__176410__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__176410 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__176411__i = 0, G__176411__a = new Array(arguments.length -  0);
while (G__176411__i < G__176411__a.length) {G__176411__a[G__176411__i] = arguments[G__176411__i + 0]; ++G__176411__i;}
  args = new cljs.core.IndexedSeq(G__176411__a,0);
} 
return G__176410__delegate.call(this,args);};
G__176410.cljs$lang$maxFixedArity = 0;
G__176410.cljs$lang$applyTo = (function (arglist__176412){
var args = cljs.core.seq(arglist__176412);
return G__176410__delegate(args);
});
G__176410.cljs$core$IFn$_invoke$arity$variadic = G__176410__delegate;
return G__176410;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__176413__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__176413 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__176414__i = 0, G__176414__a = new Array(arguments.length -  0);
while (G__176414__i < G__176414__a.length) {G__176414__a[G__176414__i] = arguments[G__176414__i + 0]; ++G__176414__i;}
  args = new cljs.core.IndexedSeq(G__176414__a,0);
} 
return G__176413__delegate.call(this,args);};
G__176413.cljs$lang$maxFixedArity = 0;
G__176413.cljs$lang$applyTo = (function (arglist__176415){
var args = cljs.core.seq(arglist__176415);
return G__176413__delegate(args);
});
G__176413.cljs$core$IFn$_invoke$arity$variadic = G__176413__delegate;
return G__176413;
})()
;

return null;
});
