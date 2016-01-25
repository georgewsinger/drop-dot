goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__42410__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__42410 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42411__i = 0, G__42411__a = new Array(arguments.length -  0);
while (G__42411__i < G__42411__a.length) {G__42411__a[G__42411__i] = arguments[G__42411__i + 0]; ++G__42411__i;}
  args = new cljs.core.IndexedSeq(G__42411__a,0);
} 
return G__42410__delegate.call(this,args);};
G__42410.cljs$lang$maxFixedArity = 0;
G__42410.cljs$lang$applyTo = (function (arglist__42412){
var args = cljs.core.seq(arglist__42412);
return G__42410__delegate(args);
});
G__42410.cljs$core$IFn$_invoke$arity$variadic = G__42410__delegate;
return G__42410;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__42413__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__42413 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42414__i = 0, G__42414__a = new Array(arguments.length -  0);
while (G__42414__i < G__42414__a.length) {G__42414__a[G__42414__i] = arguments[G__42414__i + 0]; ++G__42414__i;}
  args = new cljs.core.IndexedSeq(G__42414__a,0);
} 
return G__42413__delegate.call(this,args);};
G__42413.cljs$lang$maxFixedArity = 0;
G__42413.cljs$lang$applyTo = (function (arglist__42415){
var args = cljs.core.seq(arglist__42415);
return G__42413__delegate(args);
});
G__42413.cljs$core$IFn$_invoke$arity$variadic = G__42413__delegate;
return G__42413;
})()
;

return null;
});
