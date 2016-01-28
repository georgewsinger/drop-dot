goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__85535__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__85535 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__85536__i = 0, G__85536__a = new Array(arguments.length -  0);
while (G__85536__i < G__85536__a.length) {G__85536__a[G__85536__i] = arguments[G__85536__i + 0]; ++G__85536__i;}
  args = new cljs.core.IndexedSeq(G__85536__a,0);
} 
return G__85535__delegate.call(this,args);};
G__85535.cljs$lang$maxFixedArity = 0;
G__85535.cljs$lang$applyTo = (function (arglist__85537){
var args = cljs.core.seq(arglist__85537);
return G__85535__delegate(args);
});
G__85535.cljs$core$IFn$_invoke$arity$variadic = G__85535__delegate;
return G__85535;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__85538__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__85538 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__85539__i = 0, G__85539__a = new Array(arguments.length -  0);
while (G__85539__i < G__85539__a.length) {G__85539__a[G__85539__i] = arguments[G__85539__i + 0]; ++G__85539__i;}
  args = new cljs.core.IndexedSeq(G__85539__a,0);
} 
return G__85538__delegate.call(this,args);};
G__85538.cljs$lang$maxFixedArity = 0;
G__85538.cljs$lang$applyTo = (function (arglist__85540){
var args = cljs.core.seq(arglist__85540);
return G__85538__delegate(args);
});
G__85538.cljs$core$IFn$_invoke$arity$variadic = G__85538__delegate;
return G__85538;
})()
;

return null;
});
