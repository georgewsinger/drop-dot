goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28936__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__28936 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28937__i = 0, G__28937__a = new Array(arguments.length -  0);
while (G__28937__i < G__28937__a.length) {G__28937__a[G__28937__i] = arguments[G__28937__i + 0]; ++G__28937__i;}
  args = new cljs.core.IndexedSeq(G__28937__a,0);
} 
return G__28936__delegate.call(this,args);};
G__28936.cljs$lang$maxFixedArity = 0;
G__28936.cljs$lang$applyTo = (function (arglist__28938){
var args = cljs.core.seq(arglist__28938);
return G__28936__delegate(args);
});
G__28936.cljs$core$IFn$_invoke$arity$variadic = G__28936__delegate;
return G__28936;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__28939__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__28939 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28940__i = 0, G__28940__a = new Array(arguments.length -  0);
while (G__28940__i < G__28940__a.length) {G__28940__a[G__28940__i] = arguments[G__28940__i + 0]; ++G__28940__i;}
  args = new cljs.core.IndexedSeq(G__28940__a,0);
} 
return G__28939__delegate.call(this,args);};
G__28939.cljs$lang$maxFixedArity = 0;
G__28939.cljs$lang$applyTo = (function (arglist__28941){
var args = cljs.core.seq(arglist__28941);
return G__28939__delegate(args);
});
G__28939.cljs$core$IFn$_invoke$arity$variadic = G__28939__delegate;
return G__28939;
})()
;

return null;
});
