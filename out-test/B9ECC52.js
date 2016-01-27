goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__49606__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__49606 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49607__i = 0, G__49607__a = new Array(arguments.length -  0);
while (G__49607__i < G__49607__a.length) {G__49607__a[G__49607__i] = arguments[G__49607__i + 0]; ++G__49607__i;}
  args = new cljs.core.IndexedSeq(G__49607__a,0);
} 
return G__49606__delegate.call(this,args);};
G__49606.cljs$lang$maxFixedArity = 0;
G__49606.cljs$lang$applyTo = (function (arglist__49608){
var args = cljs.core.seq(arglist__49608);
return G__49606__delegate(args);
});
G__49606.cljs$core$IFn$_invoke$arity$variadic = G__49606__delegate;
return G__49606;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__49609__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__49609 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49610__i = 0, G__49610__a = new Array(arguments.length -  0);
while (G__49610__i < G__49610__a.length) {G__49610__a[G__49610__i] = arguments[G__49610__i + 0]; ++G__49610__i;}
  args = new cljs.core.IndexedSeq(G__49610__a,0);
} 
return G__49609__delegate.call(this,args);};
G__49609.cljs$lang$maxFixedArity = 0;
G__49609.cljs$lang$applyTo = (function (arglist__49611){
var args = cljs.core.seq(arglist__49611);
return G__49609__delegate(args);
});
G__49609.cljs$core$IFn$_invoke$arity$variadic = G__49609__delegate;
return G__49609;
})()
;

return null;
});
