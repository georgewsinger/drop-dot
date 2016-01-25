goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__270957__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__270957 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__270958__i = 0, G__270958__a = new Array(arguments.length -  0);
while (G__270958__i < G__270958__a.length) {G__270958__a[G__270958__i] = arguments[G__270958__i + 0]; ++G__270958__i;}
  args = new cljs.core.IndexedSeq(G__270958__a,0);
} 
return G__270957__delegate.call(this,args);};
G__270957.cljs$lang$maxFixedArity = 0;
G__270957.cljs$lang$applyTo = (function (arglist__270959){
var args = cljs.core.seq(arglist__270959);
return G__270957__delegate(args);
});
G__270957.cljs$core$IFn$_invoke$arity$variadic = G__270957__delegate;
return G__270957;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__270960__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__270960 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__270961__i = 0, G__270961__a = new Array(arguments.length -  0);
while (G__270961__i < G__270961__a.length) {G__270961__a[G__270961__i] = arguments[G__270961__i + 0]; ++G__270961__i;}
  args = new cljs.core.IndexedSeq(G__270961__a,0);
} 
return G__270960__delegate.call(this,args);};
G__270960.cljs$lang$maxFixedArity = 0;
G__270960.cljs$lang$applyTo = (function (arglist__270962){
var args = cljs.core.seq(arglist__270962);
return G__270960__delegate(args);
});
G__270960.cljs$core$IFn$_invoke$arity$variadic = G__270960__delegate;
return G__270960;
})()
;

return null;
});
