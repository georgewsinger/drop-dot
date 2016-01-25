goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__279348__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__279348 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__279349__i = 0, G__279349__a = new Array(arguments.length -  0);
while (G__279349__i < G__279349__a.length) {G__279349__a[G__279349__i] = arguments[G__279349__i + 0]; ++G__279349__i;}
  args = new cljs.core.IndexedSeq(G__279349__a,0);
} 
return G__279348__delegate.call(this,args);};
G__279348.cljs$lang$maxFixedArity = 0;
G__279348.cljs$lang$applyTo = (function (arglist__279350){
var args = cljs.core.seq(arglist__279350);
return G__279348__delegate(args);
});
G__279348.cljs$core$IFn$_invoke$arity$variadic = G__279348__delegate;
return G__279348;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__279351__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__279351 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__279352__i = 0, G__279352__a = new Array(arguments.length -  0);
while (G__279352__i < G__279352__a.length) {G__279352__a[G__279352__i] = arguments[G__279352__i + 0]; ++G__279352__i;}
  args = new cljs.core.IndexedSeq(G__279352__a,0);
} 
return G__279351__delegate.call(this,args);};
G__279351.cljs$lang$maxFixedArity = 0;
G__279351.cljs$lang$applyTo = (function (arglist__279353){
var args = cljs.core.seq(arglist__279353);
return G__279351__delegate(args);
});
G__279351.cljs$core$IFn$_invoke$arity$variadic = G__279351__delegate;
return G__279351;
})()
;

return null;
});
