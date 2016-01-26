goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__288216__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__288216 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__288217__i = 0, G__288217__a = new Array(arguments.length -  0);
while (G__288217__i < G__288217__a.length) {G__288217__a[G__288217__i] = arguments[G__288217__i + 0]; ++G__288217__i;}
  args = new cljs.core.IndexedSeq(G__288217__a,0);
} 
return G__288216__delegate.call(this,args);};
G__288216.cljs$lang$maxFixedArity = 0;
G__288216.cljs$lang$applyTo = (function (arglist__288218){
var args = cljs.core.seq(arglist__288218);
return G__288216__delegate(args);
});
G__288216.cljs$core$IFn$_invoke$arity$variadic = G__288216__delegate;
return G__288216;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__288219__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__288219 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__288220__i = 0, G__288220__a = new Array(arguments.length -  0);
while (G__288220__i < G__288220__a.length) {G__288220__a[G__288220__i] = arguments[G__288220__i + 0]; ++G__288220__i;}
  args = new cljs.core.IndexedSeq(G__288220__a,0);
} 
return G__288219__delegate.call(this,args);};
G__288219.cljs$lang$maxFixedArity = 0;
G__288219.cljs$lang$applyTo = (function (arglist__288221){
var args = cljs.core.seq(arglist__288221);
return G__288219__delegate(args);
});
G__288219.cljs$core$IFn$_invoke$arity$variadic = G__288219__delegate;
return G__288219;
})()
;

return null;
});
