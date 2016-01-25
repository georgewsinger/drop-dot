goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__52537__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__52537 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52538__i = 0, G__52538__a = new Array(arguments.length -  0);
while (G__52538__i < G__52538__a.length) {G__52538__a[G__52538__i] = arguments[G__52538__i + 0]; ++G__52538__i;}
  args = new cljs.core.IndexedSeq(G__52538__a,0);
} 
return G__52537__delegate.call(this,args);};
G__52537.cljs$lang$maxFixedArity = 0;
G__52537.cljs$lang$applyTo = (function (arglist__52539){
var args = cljs.core.seq(arglist__52539);
return G__52537__delegate(args);
});
G__52537.cljs$core$IFn$_invoke$arity$variadic = G__52537__delegate;
return G__52537;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__52540__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__52540 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52541__i = 0, G__52541__a = new Array(arguments.length -  0);
while (G__52541__i < G__52541__a.length) {G__52541__a[G__52541__i] = arguments[G__52541__i + 0]; ++G__52541__i;}
  args = new cljs.core.IndexedSeq(G__52541__a,0);
} 
return G__52540__delegate.call(this,args);};
G__52540.cljs$lang$maxFixedArity = 0;
G__52540.cljs$lang$applyTo = (function (arglist__52542){
var args = cljs.core.seq(arglist__52542);
return G__52540__delegate(args);
});
G__52540.cljs$core$IFn$_invoke$arity$variadic = G__52540__delegate;
return G__52540;
})()
;

return null;
});
