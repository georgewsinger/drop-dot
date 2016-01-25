goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39411__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39411 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39412__i = 0, G__39412__a = new Array(arguments.length -  0);
while (G__39412__i < G__39412__a.length) {G__39412__a[G__39412__i] = arguments[G__39412__i + 0]; ++G__39412__i;}
  args = new cljs.core.IndexedSeq(G__39412__a,0);
} 
return G__39411__delegate.call(this,args);};
G__39411.cljs$lang$maxFixedArity = 0;
G__39411.cljs$lang$applyTo = (function (arglist__39413){
var args = cljs.core.seq(arglist__39413);
return G__39411__delegate(args);
});
G__39411.cljs$core$IFn$_invoke$arity$variadic = G__39411__delegate;
return G__39411;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39414__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39414 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39415__i = 0, G__39415__a = new Array(arguments.length -  0);
while (G__39415__i < G__39415__a.length) {G__39415__a[G__39415__i] = arguments[G__39415__i + 0]; ++G__39415__i;}
  args = new cljs.core.IndexedSeq(G__39415__a,0);
} 
return G__39414__delegate.call(this,args);};
G__39414.cljs$lang$maxFixedArity = 0;
G__39414.cljs$lang$applyTo = (function (arglist__39416){
var args = cljs.core.seq(arglist__39416);
return G__39414__delegate(args);
});
G__39414.cljs$core$IFn$_invoke$arity$variadic = G__39414__delegate;
return G__39414;
})()
;

return null;
});
