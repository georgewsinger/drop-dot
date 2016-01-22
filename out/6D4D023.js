goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10634__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10634 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10635__i = 0, G__10635__a = new Array(arguments.length -  0);
while (G__10635__i < G__10635__a.length) {G__10635__a[G__10635__i] = arguments[G__10635__i + 0]; ++G__10635__i;}
  args = new cljs.core.IndexedSeq(G__10635__a,0);
} 
return G__10634__delegate.call(this,args);};
G__10634.cljs$lang$maxFixedArity = 0;
G__10634.cljs$lang$applyTo = (function (arglist__10636){
var args = cljs.core.seq(arglist__10636);
return G__10634__delegate(args);
});
G__10634.cljs$core$IFn$_invoke$arity$variadic = G__10634__delegate;
return G__10634;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10637__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10637 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10638__i = 0, G__10638__a = new Array(arguments.length -  0);
while (G__10638__i < G__10638__a.length) {G__10638__a[G__10638__i] = arguments[G__10638__i + 0]; ++G__10638__i;}
  args = new cljs.core.IndexedSeq(G__10638__a,0);
} 
return G__10637__delegate.call(this,args);};
G__10637.cljs$lang$maxFixedArity = 0;
G__10637.cljs$lang$applyTo = (function (arglist__10639){
var args = cljs.core.seq(arglist__10639);
return G__10637__delegate(args);
});
G__10637.cljs$core$IFn$_invoke$arity$variadic = G__10637__delegate;
return G__10637;
})()
;

return null;
});
