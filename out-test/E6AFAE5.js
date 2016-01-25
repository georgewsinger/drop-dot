goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__51809__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__51809 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51810__i = 0, G__51810__a = new Array(arguments.length -  0);
while (G__51810__i < G__51810__a.length) {G__51810__a[G__51810__i] = arguments[G__51810__i + 0]; ++G__51810__i;}
  args = new cljs.core.IndexedSeq(G__51810__a,0);
} 
return G__51809__delegate.call(this,args);};
G__51809.cljs$lang$maxFixedArity = 0;
G__51809.cljs$lang$applyTo = (function (arglist__51811){
var args = cljs.core.seq(arglist__51811);
return G__51809__delegate(args);
});
G__51809.cljs$core$IFn$_invoke$arity$variadic = G__51809__delegate;
return G__51809;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__51812__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__51812 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51813__i = 0, G__51813__a = new Array(arguments.length -  0);
while (G__51813__i < G__51813__a.length) {G__51813__a[G__51813__i] = arguments[G__51813__i + 0]; ++G__51813__i;}
  args = new cljs.core.IndexedSeq(G__51813__a,0);
} 
return G__51812__delegate.call(this,args);};
G__51812.cljs$lang$maxFixedArity = 0;
G__51812.cljs$lang$applyTo = (function (arglist__51814){
var args = cljs.core.seq(arglist__51814);
return G__51812__delegate(args);
});
G__51812.cljs$core$IFn$_invoke$arity$variadic = G__51812__delegate;
return G__51812;
})()
;

return null;
});
