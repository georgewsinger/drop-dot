goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__252811__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__252811 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__252812__i = 0, G__252812__a = new Array(arguments.length -  0);
while (G__252812__i < G__252812__a.length) {G__252812__a[G__252812__i] = arguments[G__252812__i + 0]; ++G__252812__i;}
  args = new cljs.core.IndexedSeq(G__252812__a,0);
} 
return G__252811__delegate.call(this,args);};
G__252811.cljs$lang$maxFixedArity = 0;
G__252811.cljs$lang$applyTo = (function (arglist__252813){
var args = cljs.core.seq(arglist__252813);
return G__252811__delegate(args);
});
G__252811.cljs$core$IFn$_invoke$arity$variadic = G__252811__delegate;
return G__252811;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__252814__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__252814 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__252815__i = 0, G__252815__a = new Array(arguments.length -  0);
while (G__252815__i < G__252815__a.length) {G__252815__a[G__252815__i] = arguments[G__252815__i + 0]; ++G__252815__i;}
  args = new cljs.core.IndexedSeq(G__252815__a,0);
} 
return G__252814__delegate.call(this,args);};
G__252814.cljs$lang$maxFixedArity = 0;
G__252814.cljs$lang$applyTo = (function (arglist__252816){
var args = cljs.core.seq(arglist__252816);
return G__252814__delegate(args);
});
G__252814.cljs$core$IFn$_invoke$arity$variadic = G__252814__delegate;
return G__252814;
})()
;

return null;
});
