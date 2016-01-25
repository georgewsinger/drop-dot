goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14038__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14038 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14039__i = 0, G__14039__a = new Array(arguments.length -  0);
while (G__14039__i < G__14039__a.length) {G__14039__a[G__14039__i] = arguments[G__14039__i + 0]; ++G__14039__i;}
  args = new cljs.core.IndexedSeq(G__14039__a,0);
} 
return G__14038__delegate.call(this,args);};
G__14038.cljs$lang$maxFixedArity = 0;
G__14038.cljs$lang$applyTo = (function (arglist__14040){
var args = cljs.core.seq(arglist__14040);
return G__14038__delegate(args);
});
G__14038.cljs$core$IFn$_invoke$arity$variadic = G__14038__delegate;
return G__14038;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14041__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14041 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14042__i = 0, G__14042__a = new Array(arguments.length -  0);
while (G__14042__i < G__14042__a.length) {G__14042__a[G__14042__i] = arguments[G__14042__i + 0]; ++G__14042__i;}
  args = new cljs.core.IndexedSeq(G__14042__a,0);
} 
return G__14041__delegate.call(this,args);};
G__14041.cljs$lang$maxFixedArity = 0;
G__14041.cljs$lang$applyTo = (function (arglist__14043){
var args = cljs.core.seq(arglist__14043);
return G__14041__delegate(args);
});
G__14041.cljs$core$IFn$_invoke$arity$variadic = G__14041__delegate;
return G__14041;
})()
;

return null;
});
