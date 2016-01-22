goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11846__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11846 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11847__i = 0, G__11847__a = new Array(arguments.length -  0);
while (G__11847__i < G__11847__a.length) {G__11847__a[G__11847__i] = arguments[G__11847__i + 0]; ++G__11847__i;}
  args = new cljs.core.IndexedSeq(G__11847__a,0);
} 
return G__11846__delegate.call(this,args);};
G__11846.cljs$lang$maxFixedArity = 0;
G__11846.cljs$lang$applyTo = (function (arglist__11848){
var args = cljs.core.seq(arglist__11848);
return G__11846__delegate(args);
});
G__11846.cljs$core$IFn$_invoke$arity$variadic = G__11846__delegate;
return G__11846;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11849__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11849 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11850__i = 0, G__11850__a = new Array(arguments.length -  0);
while (G__11850__i < G__11850__a.length) {G__11850__a[G__11850__i] = arguments[G__11850__i + 0]; ++G__11850__i;}
  args = new cljs.core.IndexedSeq(G__11850__a,0);
} 
return G__11849__delegate.call(this,args);};
G__11849.cljs$lang$maxFixedArity = 0;
G__11849.cljs$lang$applyTo = (function (arglist__11851){
var args = cljs.core.seq(arglist__11851);
return G__11849__delegate(args);
});
G__11849.cljs$core$IFn$_invoke$arity$variadic = G__11849__delegate;
return G__11849;
})()
;

return null;
});
