goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19412__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19412 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19413__i = 0, G__19413__a = new Array(arguments.length -  0);
while (G__19413__i < G__19413__a.length) {G__19413__a[G__19413__i] = arguments[G__19413__i + 0]; ++G__19413__i;}
  args = new cljs.core.IndexedSeq(G__19413__a,0);
} 
return G__19412__delegate.call(this,args);};
G__19412.cljs$lang$maxFixedArity = 0;
G__19412.cljs$lang$applyTo = (function (arglist__19414){
var args = cljs.core.seq(arglist__19414);
return G__19412__delegate(args);
});
G__19412.cljs$core$IFn$_invoke$arity$variadic = G__19412__delegate;
return G__19412;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19415__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19415 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19416__i = 0, G__19416__a = new Array(arguments.length -  0);
while (G__19416__i < G__19416__a.length) {G__19416__a[G__19416__i] = arguments[G__19416__i + 0]; ++G__19416__i;}
  args = new cljs.core.IndexedSeq(G__19416__a,0);
} 
return G__19415__delegate.call(this,args);};
G__19415.cljs$lang$maxFixedArity = 0;
G__19415.cljs$lang$applyTo = (function (arglist__19417){
var args = cljs.core.seq(arglist__19417);
return G__19415__delegate(args);
});
G__19415.cljs$core$IFn$_invoke$arity$variadic = G__19415__delegate;
return G__19415;
})()
;

return null;
});
