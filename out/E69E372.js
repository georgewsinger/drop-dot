goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10645__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10645 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10646__i = 0, G__10646__a = new Array(arguments.length -  0);
while (G__10646__i < G__10646__a.length) {G__10646__a[G__10646__i] = arguments[G__10646__i + 0]; ++G__10646__i;}
  args = new cljs.core.IndexedSeq(G__10646__a,0);
} 
return G__10645__delegate.call(this,args);};
G__10645.cljs$lang$maxFixedArity = 0;
G__10645.cljs$lang$applyTo = (function (arglist__10647){
var args = cljs.core.seq(arglist__10647);
return G__10645__delegate(args);
});
G__10645.cljs$core$IFn$_invoke$arity$variadic = G__10645__delegate;
return G__10645;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10648__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10648 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10649__i = 0, G__10649__a = new Array(arguments.length -  0);
while (G__10649__i < G__10649__a.length) {G__10649__a[G__10649__i] = arguments[G__10649__i + 0]; ++G__10649__i;}
  args = new cljs.core.IndexedSeq(G__10649__a,0);
} 
return G__10648__delegate.call(this,args);};
G__10648.cljs$lang$maxFixedArity = 0;
G__10648.cljs$lang$applyTo = (function (arglist__10650){
var args = cljs.core.seq(arglist__10650);
return G__10648__delegate(args);
});
G__10648.cljs$core$IFn$_invoke$arity$variadic = G__10648__delegate;
return G__10648;
})()
;

return null;
});
