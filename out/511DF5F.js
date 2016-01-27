goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__344129__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__344129 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__344130__i = 0, G__344130__a = new Array(arguments.length -  0);
while (G__344130__i < G__344130__a.length) {G__344130__a[G__344130__i] = arguments[G__344130__i + 0]; ++G__344130__i;}
  args = new cljs.core.IndexedSeq(G__344130__a,0);
} 
return G__344129__delegate.call(this,args);};
G__344129.cljs$lang$maxFixedArity = 0;
G__344129.cljs$lang$applyTo = (function (arglist__344131){
var args = cljs.core.seq(arglist__344131);
return G__344129__delegate(args);
});
G__344129.cljs$core$IFn$_invoke$arity$variadic = G__344129__delegate;
return G__344129;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__344132__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__344132 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__344133__i = 0, G__344133__a = new Array(arguments.length -  0);
while (G__344133__i < G__344133__a.length) {G__344133__a[G__344133__i] = arguments[G__344133__i + 0]; ++G__344133__i;}
  args = new cljs.core.IndexedSeq(G__344133__a,0);
} 
return G__344132__delegate.call(this,args);};
G__344132.cljs$lang$maxFixedArity = 0;
G__344132.cljs$lang$applyTo = (function (arglist__344134){
var args = cljs.core.seq(arglist__344134);
return G__344132__delegate(args);
});
G__344132.cljs$core$IFn$_invoke$arity$variadic = G__344132__delegate;
return G__344132;
})()
;

return null;
});
