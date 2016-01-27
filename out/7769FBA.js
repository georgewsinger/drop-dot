goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__325877__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__325877 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__325878__i = 0, G__325878__a = new Array(arguments.length -  0);
while (G__325878__i < G__325878__a.length) {G__325878__a[G__325878__i] = arguments[G__325878__i + 0]; ++G__325878__i;}
  args = new cljs.core.IndexedSeq(G__325878__a,0);
} 
return G__325877__delegate.call(this,args);};
G__325877.cljs$lang$maxFixedArity = 0;
G__325877.cljs$lang$applyTo = (function (arglist__325879){
var args = cljs.core.seq(arglist__325879);
return G__325877__delegate(args);
});
G__325877.cljs$core$IFn$_invoke$arity$variadic = G__325877__delegate;
return G__325877;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__325880__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__325880 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__325881__i = 0, G__325881__a = new Array(arguments.length -  0);
while (G__325881__i < G__325881__a.length) {G__325881__a[G__325881__i] = arguments[G__325881__i + 0]; ++G__325881__i;}
  args = new cljs.core.IndexedSeq(G__325881__a,0);
} 
return G__325880__delegate.call(this,args);};
G__325880.cljs$lang$maxFixedArity = 0;
G__325880.cljs$lang$applyTo = (function (arglist__325882){
var args = cljs.core.seq(arglist__325882);
return G__325880__delegate(args);
});
G__325880.cljs$core$IFn$_invoke$arity$variadic = G__325880__delegate;
return G__325880;
})()
;

return null;
});
