goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10785__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10785 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10786__i = 0, G__10786__a = new Array(arguments.length -  0);
while (G__10786__i < G__10786__a.length) {G__10786__a[G__10786__i] = arguments[G__10786__i + 0]; ++G__10786__i;}
  args = new cljs.core.IndexedSeq(G__10786__a,0);
} 
return G__10785__delegate.call(this,args);};
G__10785.cljs$lang$maxFixedArity = 0;
G__10785.cljs$lang$applyTo = (function (arglist__10787){
var args = cljs.core.seq(arglist__10787);
return G__10785__delegate(args);
});
G__10785.cljs$core$IFn$_invoke$arity$variadic = G__10785__delegate;
return G__10785;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10788__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10788 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10789__i = 0, G__10789__a = new Array(arguments.length -  0);
while (G__10789__i < G__10789__a.length) {G__10789__a[G__10789__i] = arguments[G__10789__i + 0]; ++G__10789__i;}
  args = new cljs.core.IndexedSeq(G__10789__a,0);
} 
return G__10788__delegate.call(this,args);};
G__10788.cljs$lang$maxFixedArity = 0;
G__10788.cljs$lang$applyTo = (function (arglist__10790){
var args = cljs.core.seq(arglist__10790);
return G__10788__delegate(args);
});
G__10788.cljs$core$IFn$_invoke$arity$variadic = G__10788__delegate;
return G__10788;
})()
;

return null;
});
