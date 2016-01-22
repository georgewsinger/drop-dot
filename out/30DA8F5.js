goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15530__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15530 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15531__i = 0, G__15531__a = new Array(arguments.length -  0);
while (G__15531__i < G__15531__a.length) {G__15531__a[G__15531__i] = arguments[G__15531__i + 0]; ++G__15531__i;}
  args = new cljs.core.IndexedSeq(G__15531__a,0);
} 
return G__15530__delegate.call(this,args);};
G__15530.cljs$lang$maxFixedArity = 0;
G__15530.cljs$lang$applyTo = (function (arglist__15532){
var args = cljs.core.seq(arglist__15532);
return G__15530__delegate(args);
});
G__15530.cljs$core$IFn$_invoke$arity$variadic = G__15530__delegate;
return G__15530;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15533__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15533 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15534__i = 0, G__15534__a = new Array(arguments.length -  0);
while (G__15534__i < G__15534__a.length) {G__15534__a[G__15534__i] = arguments[G__15534__i + 0]; ++G__15534__i;}
  args = new cljs.core.IndexedSeq(G__15534__a,0);
} 
return G__15533__delegate.call(this,args);};
G__15533.cljs$lang$maxFixedArity = 0;
G__15533.cljs$lang$applyTo = (function (arglist__15535){
var args = cljs.core.seq(arglist__15535);
return G__15533__delegate(args);
});
G__15533.cljs$core$IFn$_invoke$arity$variadic = G__15533__delegate;
return G__15533;
})()
;

return null;
});
