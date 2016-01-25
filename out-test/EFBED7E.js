goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10444__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10444 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10445__i = 0, G__10445__a = new Array(arguments.length -  0);
while (G__10445__i < G__10445__a.length) {G__10445__a[G__10445__i] = arguments[G__10445__i + 0]; ++G__10445__i;}
  args = new cljs.core.IndexedSeq(G__10445__a,0);
} 
return G__10444__delegate.call(this,args);};
G__10444.cljs$lang$maxFixedArity = 0;
G__10444.cljs$lang$applyTo = (function (arglist__10446){
var args = cljs.core.seq(arglist__10446);
return G__10444__delegate(args);
});
G__10444.cljs$core$IFn$_invoke$arity$variadic = G__10444__delegate;
return G__10444;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10447__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10447 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10448__i = 0, G__10448__a = new Array(arguments.length -  0);
while (G__10448__i < G__10448__a.length) {G__10448__a[G__10448__i] = arguments[G__10448__i + 0]; ++G__10448__i;}
  args = new cljs.core.IndexedSeq(G__10448__a,0);
} 
return G__10447__delegate.call(this,args);};
G__10447.cljs$lang$maxFixedArity = 0;
G__10447.cljs$lang$applyTo = (function (arglist__10449){
var args = cljs.core.seq(arglist__10449);
return G__10447__delegate(args);
});
G__10447.cljs$core$IFn$_invoke$arity$variadic = G__10447__delegate;
return G__10447;
})()
;

return null;
});
