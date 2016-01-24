goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__32348__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__32348 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32349__i = 0, G__32349__a = new Array(arguments.length -  0);
while (G__32349__i < G__32349__a.length) {G__32349__a[G__32349__i] = arguments[G__32349__i + 0]; ++G__32349__i;}
  args = new cljs.core.IndexedSeq(G__32349__a,0);
} 
return G__32348__delegate.call(this,args);};
G__32348.cljs$lang$maxFixedArity = 0;
G__32348.cljs$lang$applyTo = (function (arglist__32350){
var args = cljs.core.seq(arglist__32350);
return G__32348__delegate(args);
});
G__32348.cljs$core$IFn$_invoke$arity$variadic = G__32348__delegate;
return G__32348;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__32351__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__32351 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32352__i = 0, G__32352__a = new Array(arguments.length -  0);
while (G__32352__i < G__32352__a.length) {G__32352__a[G__32352__i] = arguments[G__32352__i + 0]; ++G__32352__i;}
  args = new cljs.core.IndexedSeq(G__32352__a,0);
} 
return G__32351__delegate.call(this,args);};
G__32351.cljs$lang$maxFixedArity = 0;
G__32351.cljs$lang$applyTo = (function (arglist__32353){
var args = cljs.core.seq(arglist__32353);
return G__32351__delegate(args);
});
G__32351.cljs$core$IFn$_invoke$arity$variadic = G__32351__delegate;
return G__32351;
})()
;

return null;
});
