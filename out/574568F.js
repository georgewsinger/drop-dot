goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__285537__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__285537 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__285538__i = 0, G__285538__a = new Array(arguments.length -  0);
while (G__285538__i < G__285538__a.length) {G__285538__a[G__285538__i] = arguments[G__285538__i + 0]; ++G__285538__i;}
  args = new cljs.core.IndexedSeq(G__285538__a,0);
} 
return G__285537__delegate.call(this,args);};
G__285537.cljs$lang$maxFixedArity = 0;
G__285537.cljs$lang$applyTo = (function (arglist__285539){
var args = cljs.core.seq(arglist__285539);
return G__285537__delegate(args);
});
G__285537.cljs$core$IFn$_invoke$arity$variadic = G__285537__delegate;
return G__285537;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__285540__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__285540 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__285541__i = 0, G__285541__a = new Array(arguments.length -  0);
while (G__285541__i < G__285541__a.length) {G__285541__a[G__285541__i] = arguments[G__285541__i + 0]; ++G__285541__i;}
  args = new cljs.core.IndexedSeq(G__285541__a,0);
} 
return G__285540__delegate.call(this,args);};
G__285540.cljs$lang$maxFixedArity = 0;
G__285540.cljs$lang$applyTo = (function (arglist__285542){
var args = cljs.core.seq(arglist__285542);
return G__285540__delegate(args);
});
G__285540.cljs$core$IFn$_invoke$arity$variadic = G__285540__delegate;
return G__285540;
})()
;

return null;
});
