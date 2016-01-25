goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14856__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14856 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14857__i = 0, G__14857__a = new Array(arguments.length -  0);
while (G__14857__i < G__14857__a.length) {G__14857__a[G__14857__i] = arguments[G__14857__i + 0]; ++G__14857__i;}
  args = new cljs.core.IndexedSeq(G__14857__a,0);
} 
return G__14856__delegate.call(this,args);};
G__14856.cljs$lang$maxFixedArity = 0;
G__14856.cljs$lang$applyTo = (function (arglist__14858){
var args = cljs.core.seq(arglist__14858);
return G__14856__delegate(args);
});
G__14856.cljs$core$IFn$_invoke$arity$variadic = G__14856__delegate;
return G__14856;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14859__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14859 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14860__i = 0, G__14860__a = new Array(arguments.length -  0);
while (G__14860__i < G__14860__a.length) {G__14860__a[G__14860__i] = arguments[G__14860__i + 0]; ++G__14860__i;}
  args = new cljs.core.IndexedSeq(G__14860__a,0);
} 
return G__14859__delegate.call(this,args);};
G__14859.cljs$lang$maxFixedArity = 0;
G__14859.cljs$lang$applyTo = (function (arglist__14861){
var args = cljs.core.seq(arglist__14861);
return G__14859__delegate(args);
});
G__14859.cljs$core$IFn$_invoke$arity$variadic = G__14859__delegate;
return G__14859;
})()
;

return null;
});
