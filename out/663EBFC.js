goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__313960__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__313960 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__313961__i = 0, G__313961__a = new Array(arguments.length -  0);
while (G__313961__i < G__313961__a.length) {G__313961__a[G__313961__i] = arguments[G__313961__i + 0]; ++G__313961__i;}
  args = new cljs.core.IndexedSeq(G__313961__a,0);
} 
return G__313960__delegate.call(this,args);};
G__313960.cljs$lang$maxFixedArity = 0;
G__313960.cljs$lang$applyTo = (function (arglist__313962){
var args = cljs.core.seq(arglist__313962);
return G__313960__delegate(args);
});
G__313960.cljs$core$IFn$_invoke$arity$variadic = G__313960__delegate;
return G__313960;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__313963__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__313963 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__313964__i = 0, G__313964__a = new Array(arguments.length -  0);
while (G__313964__i < G__313964__a.length) {G__313964__a[G__313964__i] = arguments[G__313964__i + 0]; ++G__313964__i;}
  args = new cljs.core.IndexedSeq(G__313964__a,0);
} 
return G__313963__delegate.call(this,args);};
G__313963.cljs$lang$maxFixedArity = 0;
G__313963.cljs$lang$applyTo = (function (arglist__313965){
var args = cljs.core.seq(arglist__313965);
return G__313963__delegate(args);
});
G__313963.cljs$core$IFn$_invoke$arity$variadic = G__313963__delegate;
return G__313963;
})()
;

return null;
});
