goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__40357__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__40357 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40358__i = 0, G__40358__a = new Array(arguments.length -  0);
while (G__40358__i < G__40358__a.length) {G__40358__a[G__40358__i] = arguments[G__40358__i + 0]; ++G__40358__i;}
  args = new cljs.core.IndexedSeq(G__40358__a,0);
} 
return G__40357__delegate.call(this,args);};
G__40357.cljs$lang$maxFixedArity = 0;
G__40357.cljs$lang$applyTo = (function (arglist__40359){
var args = cljs.core.seq(arglist__40359);
return G__40357__delegate(args);
});
G__40357.cljs$core$IFn$_invoke$arity$variadic = G__40357__delegate;
return G__40357;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__40360__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__40360 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40361__i = 0, G__40361__a = new Array(arguments.length -  0);
while (G__40361__i < G__40361__a.length) {G__40361__a[G__40361__i] = arguments[G__40361__i + 0]; ++G__40361__i;}
  args = new cljs.core.IndexedSeq(G__40361__a,0);
} 
return G__40360__delegate.call(this,args);};
G__40360.cljs$lang$maxFixedArity = 0;
G__40360.cljs$lang$applyTo = (function (arglist__40362){
var args = cljs.core.seq(arglist__40362);
return G__40360__delegate(args);
});
G__40360.cljs$core$IFn$_invoke$arity$variadic = G__40360__delegate;
return G__40360;
})()
;

return null;
});
