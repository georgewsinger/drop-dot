goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__176421__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__176421 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__176422__i = 0, G__176422__a = new Array(arguments.length -  0);
while (G__176422__i < G__176422__a.length) {G__176422__a[G__176422__i] = arguments[G__176422__i + 0]; ++G__176422__i;}
  args = new cljs.core.IndexedSeq(G__176422__a,0);
} 
return G__176421__delegate.call(this,args);};
G__176421.cljs$lang$maxFixedArity = 0;
G__176421.cljs$lang$applyTo = (function (arglist__176423){
var args = cljs.core.seq(arglist__176423);
return G__176421__delegate(args);
});
G__176421.cljs$core$IFn$_invoke$arity$variadic = G__176421__delegate;
return G__176421;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__176424__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__176424 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__176425__i = 0, G__176425__a = new Array(arguments.length -  0);
while (G__176425__i < G__176425__a.length) {G__176425__a[G__176425__i] = arguments[G__176425__i + 0]; ++G__176425__i;}
  args = new cljs.core.IndexedSeq(G__176425__a,0);
} 
return G__176424__delegate.call(this,args);};
G__176424.cljs$lang$maxFixedArity = 0;
G__176424.cljs$lang$applyTo = (function (arglist__176426){
var args = cljs.core.seq(arglist__176426);
return G__176424__delegate(args);
});
G__176424.cljs$core$IFn$_invoke$arity$variadic = G__176424__delegate;
return G__176424;
})()
;

return null;
});
