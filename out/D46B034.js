goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__23535__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__23535 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23536__i = 0, G__23536__a = new Array(arguments.length -  0);
while (G__23536__i < G__23536__a.length) {G__23536__a[G__23536__i] = arguments[G__23536__i + 0]; ++G__23536__i;}
  args = new cljs.core.IndexedSeq(G__23536__a,0);
} 
return G__23535__delegate.call(this,args);};
G__23535.cljs$lang$maxFixedArity = 0;
G__23535.cljs$lang$applyTo = (function (arglist__23537){
var args = cljs.core.seq(arglist__23537);
return G__23535__delegate(args);
});
G__23535.cljs$core$IFn$_invoke$arity$variadic = G__23535__delegate;
return G__23535;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__23538__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__23538 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23539__i = 0, G__23539__a = new Array(arguments.length -  0);
while (G__23539__i < G__23539__a.length) {G__23539__a[G__23539__i] = arguments[G__23539__i + 0]; ++G__23539__i;}
  args = new cljs.core.IndexedSeq(G__23539__a,0);
} 
return G__23538__delegate.call(this,args);};
G__23538.cljs$lang$maxFixedArity = 0;
G__23538.cljs$lang$applyTo = (function (arglist__23540){
var args = cljs.core.seq(arglist__23540);
return G__23538__delegate(args);
});
G__23538.cljs$core$IFn$_invoke$arity$variadic = G__23538__delegate;
return G__23538;
})()
;

return null;
});
