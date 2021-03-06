goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39216__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39216 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39217__i = 0, G__39217__a = new Array(arguments.length -  0);
while (G__39217__i < G__39217__a.length) {G__39217__a[G__39217__i] = arguments[G__39217__i + 0]; ++G__39217__i;}
  args = new cljs.core.IndexedSeq(G__39217__a,0);
} 
return G__39216__delegate.call(this,args);};
G__39216.cljs$lang$maxFixedArity = 0;
G__39216.cljs$lang$applyTo = (function (arglist__39218){
var args = cljs.core.seq(arglist__39218);
return G__39216__delegate(args);
});
G__39216.cljs$core$IFn$_invoke$arity$variadic = G__39216__delegate;
return G__39216;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39219__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39219 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39220__i = 0, G__39220__a = new Array(arguments.length -  0);
while (G__39220__i < G__39220__a.length) {G__39220__a[G__39220__i] = arguments[G__39220__i + 0]; ++G__39220__i;}
  args = new cljs.core.IndexedSeq(G__39220__a,0);
} 
return G__39219__delegate.call(this,args);};
G__39219.cljs$lang$maxFixedArity = 0;
G__39219.cljs$lang$applyTo = (function (arglist__39221){
var args = cljs.core.seq(arglist__39221);
return G__39219__delegate(args);
});
G__39219.cljs$core$IFn$_invoke$arity$variadic = G__39219__delegate;
return G__39219;
})()
;

return null;
});
