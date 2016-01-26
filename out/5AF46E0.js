goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__284205__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__284205 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__284206__i = 0, G__284206__a = new Array(arguments.length -  0);
while (G__284206__i < G__284206__a.length) {G__284206__a[G__284206__i] = arguments[G__284206__i + 0]; ++G__284206__i;}
  args = new cljs.core.IndexedSeq(G__284206__a,0);
} 
return G__284205__delegate.call(this,args);};
G__284205.cljs$lang$maxFixedArity = 0;
G__284205.cljs$lang$applyTo = (function (arglist__284207){
var args = cljs.core.seq(arglist__284207);
return G__284205__delegate(args);
});
G__284205.cljs$core$IFn$_invoke$arity$variadic = G__284205__delegate;
return G__284205;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__284208__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__284208 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__284209__i = 0, G__284209__a = new Array(arguments.length -  0);
while (G__284209__i < G__284209__a.length) {G__284209__a[G__284209__i] = arguments[G__284209__i + 0]; ++G__284209__i;}
  args = new cljs.core.IndexedSeq(G__284209__a,0);
} 
return G__284208__delegate.call(this,args);};
G__284208.cljs$lang$maxFixedArity = 0;
G__284208.cljs$lang$applyTo = (function (arglist__284210){
var args = cljs.core.seq(arglist__284210);
return G__284208__delegate(args);
});
G__284208.cljs$core$IFn$_invoke$arity$variadic = G__284208__delegate;
return G__284208;
})()
;

return null;
});
