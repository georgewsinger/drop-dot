goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20573__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20573 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20574__i = 0, G__20574__a = new Array(arguments.length -  0);
while (G__20574__i < G__20574__a.length) {G__20574__a[G__20574__i] = arguments[G__20574__i + 0]; ++G__20574__i;}
  args = new cljs.core.IndexedSeq(G__20574__a,0);
} 
return G__20573__delegate.call(this,args);};
G__20573.cljs$lang$maxFixedArity = 0;
G__20573.cljs$lang$applyTo = (function (arglist__20575){
var args = cljs.core.seq(arglist__20575);
return G__20573__delegate(args);
});
G__20573.cljs$core$IFn$_invoke$arity$variadic = G__20573__delegate;
return G__20573;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20576__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20576 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20577__i = 0, G__20577__a = new Array(arguments.length -  0);
while (G__20577__i < G__20577__a.length) {G__20577__a[G__20577__i] = arguments[G__20577__i + 0]; ++G__20577__i;}
  args = new cljs.core.IndexedSeq(G__20577__a,0);
} 
return G__20576__delegate.call(this,args);};
G__20576.cljs$lang$maxFixedArity = 0;
G__20576.cljs$lang$applyTo = (function (arglist__20578){
var args = cljs.core.seq(arglist__20578);
return G__20576__delegate(args);
});
G__20576.cljs$core$IFn$_invoke$arity$variadic = G__20576__delegate;
return G__20576;
})()
;

return null;
});
