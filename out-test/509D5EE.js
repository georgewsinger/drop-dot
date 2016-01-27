goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__71606__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__71606 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__71607__i = 0, G__71607__a = new Array(arguments.length -  0);
while (G__71607__i < G__71607__a.length) {G__71607__a[G__71607__i] = arguments[G__71607__i + 0]; ++G__71607__i;}
  args = new cljs.core.IndexedSeq(G__71607__a,0);
} 
return G__71606__delegate.call(this,args);};
G__71606.cljs$lang$maxFixedArity = 0;
G__71606.cljs$lang$applyTo = (function (arglist__71608){
var args = cljs.core.seq(arglist__71608);
return G__71606__delegate(args);
});
G__71606.cljs$core$IFn$_invoke$arity$variadic = G__71606__delegate;
return G__71606;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__71609__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__71609 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__71610__i = 0, G__71610__a = new Array(arguments.length -  0);
while (G__71610__i < G__71610__a.length) {G__71610__a[G__71610__i] = arguments[G__71610__i + 0]; ++G__71610__i;}
  args = new cljs.core.IndexedSeq(G__71610__a,0);
} 
return G__71609__delegate.call(this,args);};
G__71609.cljs$lang$maxFixedArity = 0;
G__71609.cljs$lang$applyTo = (function (arglist__71611){
var args = cljs.core.seq(arglist__71611);
return G__71609__delegate(args);
});
G__71609.cljs$core$IFn$_invoke$arity$variadic = G__71609__delegate;
return G__71609;
})()
;

return null;
});
