goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__63411__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__63411 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63412__i = 0, G__63412__a = new Array(arguments.length -  0);
while (G__63412__i < G__63412__a.length) {G__63412__a[G__63412__i] = arguments[G__63412__i + 0]; ++G__63412__i;}
  args = new cljs.core.IndexedSeq(G__63412__a,0);
} 
return G__63411__delegate.call(this,args);};
G__63411.cljs$lang$maxFixedArity = 0;
G__63411.cljs$lang$applyTo = (function (arglist__63413){
var args = cljs.core.seq(arglist__63413);
return G__63411__delegate(args);
});
G__63411.cljs$core$IFn$_invoke$arity$variadic = G__63411__delegate;
return G__63411;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__63414__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__63414 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63415__i = 0, G__63415__a = new Array(arguments.length -  0);
while (G__63415__i < G__63415__a.length) {G__63415__a[G__63415__i] = arguments[G__63415__i + 0]; ++G__63415__i;}
  args = new cljs.core.IndexedSeq(G__63415__a,0);
} 
return G__63414__delegate.call(this,args);};
G__63414.cljs$lang$maxFixedArity = 0;
G__63414.cljs$lang$applyTo = (function (arglist__63416){
var args = cljs.core.seq(arglist__63416);
return G__63414__delegate(args);
});
G__63414.cljs$core$IFn$_invoke$arity$variadic = G__63414__delegate;
return G__63414;
})()
;

return null;
});
