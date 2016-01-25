goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__56771__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__56771 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56772__i = 0, G__56772__a = new Array(arguments.length -  0);
while (G__56772__i < G__56772__a.length) {G__56772__a[G__56772__i] = arguments[G__56772__i + 0]; ++G__56772__i;}
  args = new cljs.core.IndexedSeq(G__56772__a,0);
} 
return G__56771__delegate.call(this,args);};
G__56771.cljs$lang$maxFixedArity = 0;
G__56771.cljs$lang$applyTo = (function (arglist__56773){
var args = cljs.core.seq(arglist__56773);
return G__56771__delegate(args);
});
G__56771.cljs$core$IFn$_invoke$arity$variadic = G__56771__delegate;
return G__56771;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__56774__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__56774 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56775__i = 0, G__56775__a = new Array(arguments.length -  0);
while (G__56775__i < G__56775__a.length) {G__56775__a[G__56775__i] = arguments[G__56775__i + 0]; ++G__56775__i;}
  args = new cljs.core.IndexedSeq(G__56775__a,0);
} 
return G__56774__delegate.call(this,args);};
G__56774.cljs$lang$maxFixedArity = 0;
G__56774.cljs$lang$applyTo = (function (arglist__56776){
var args = cljs.core.seq(arglist__56776);
return G__56774__delegate(args);
});
G__56774.cljs$core$IFn$_invoke$arity$variadic = G__56774__delegate;
return G__56774;
})()
;

return null;
});
