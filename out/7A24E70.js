goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__296735__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__296735 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__296736__i = 0, G__296736__a = new Array(arguments.length -  0);
while (G__296736__i < G__296736__a.length) {G__296736__a[G__296736__i] = arguments[G__296736__i + 0]; ++G__296736__i;}
  args = new cljs.core.IndexedSeq(G__296736__a,0);
} 
return G__296735__delegate.call(this,args);};
G__296735.cljs$lang$maxFixedArity = 0;
G__296735.cljs$lang$applyTo = (function (arglist__296737){
var args = cljs.core.seq(arglist__296737);
return G__296735__delegate(args);
});
G__296735.cljs$core$IFn$_invoke$arity$variadic = G__296735__delegate;
return G__296735;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__296738__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__296738 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__296739__i = 0, G__296739__a = new Array(arguments.length -  0);
while (G__296739__i < G__296739__a.length) {G__296739__a[G__296739__i] = arguments[G__296739__i + 0]; ++G__296739__i;}
  args = new cljs.core.IndexedSeq(G__296739__a,0);
} 
return G__296738__delegate.call(this,args);};
G__296738.cljs$lang$maxFixedArity = 0;
G__296738.cljs$lang$applyTo = (function (arglist__296740){
var args = cljs.core.seq(arglist__296740);
return G__296738__delegate(args);
});
G__296738.cljs$core$IFn$_invoke$arity$variadic = G__296738__delegate;
return G__296738;
})()
;

return null;
});
