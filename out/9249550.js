goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30411__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__30411 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30412__i = 0, G__30412__a = new Array(arguments.length -  0);
while (G__30412__i < G__30412__a.length) {G__30412__a[G__30412__i] = arguments[G__30412__i + 0]; ++G__30412__i;}
  args = new cljs.core.IndexedSeq(G__30412__a,0);
} 
return G__30411__delegate.call(this,args);};
G__30411.cljs$lang$maxFixedArity = 0;
G__30411.cljs$lang$applyTo = (function (arglist__30413){
var args = cljs.core.seq(arglist__30413);
return G__30411__delegate(args);
});
G__30411.cljs$core$IFn$_invoke$arity$variadic = G__30411__delegate;
return G__30411;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__30414__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__30414 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30415__i = 0, G__30415__a = new Array(arguments.length -  0);
while (G__30415__i < G__30415__a.length) {G__30415__a[G__30415__i] = arguments[G__30415__i + 0]; ++G__30415__i;}
  args = new cljs.core.IndexedSeq(G__30415__a,0);
} 
return G__30414__delegate.call(this,args);};
G__30414.cljs$lang$maxFixedArity = 0;
G__30414.cljs$lang$applyTo = (function (arglist__30416){
var args = cljs.core.seq(arglist__30416);
return G__30414__delegate(args);
});
G__30414.cljs$core$IFn$_invoke$arity$variadic = G__30414__delegate;
return G__30414;
})()
;

return null;
});
