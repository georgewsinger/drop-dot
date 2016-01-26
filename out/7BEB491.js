goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__288227__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__288227 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__288228__i = 0, G__288228__a = new Array(arguments.length -  0);
while (G__288228__i < G__288228__a.length) {G__288228__a[G__288228__i] = arguments[G__288228__i + 0]; ++G__288228__i;}
  args = new cljs.core.IndexedSeq(G__288228__a,0);
} 
return G__288227__delegate.call(this,args);};
G__288227.cljs$lang$maxFixedArity = 0;
G__288227.cljs$lang$applyTo = (function (arglist__288229){
var args = cljs.core.seq(arglist__288229);
return G__288227__delegate(args);
});
G__288227.cljs$core$IFn$_invoke$arity$variadic = G__288227__delegate;
return G__288227;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__288230__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__288230 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__288231__i = 0, G__288231__a = new Array(arguments.length -  0);
while (G__288231__i < G__288231__a.length) {G__288231__a[G__288231__i] = arguments[G__288231__i + 0]; ++G__288231__i;}
  args = new cljs.core.IndexedSeq(G__288231__a,0);
} 
return G__288230__delegate.call(this,args);};
G__288230.cljs$lang$maxFixedArity = 0;
G__288230.cljs$lang$applyTo = (function (arglist__288232){
var args = cljs.core.seq(arglist__288232);
return G__288230__delegate(args);
});
G__288230.cljs$core$IFn$_invoke$arity$variadic = G__288230__delegate;
return G__288230;
})()
;

return null;
});
