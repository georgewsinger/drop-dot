goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__61216__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__61216 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61217__i = 0, G__61217__a = new Array(arguments.length -  0);
while (G__61217__i < G__61217__a.length) {G__61217__a[G__61217__i] = arguments[G__61217__i + 0]; ++G__61217__i;}
  args = new cljs.core.IndexedSeq(G__61217__a,0);
} 
return G__61216__delegate.call(this,args);};
G__61216.cljs$lang$maxFixedArity = 0;
G__61216.cljs$lang$applyTo = (function (arglist__61218){
var args = cljs.core.seq(arglist__61218);
return G__61216__delegate(args);
});
G__61216.cljs$core$IFn$_invoke$arity$variadic = G__61216__delegate;
return G__61216;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__61219__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__61219 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61220__i = 0, G__61220__a = new Array(arguments.length -  0);
while (G__61220__i < G__61220__a.length) {G__61220__a[G__61220__i] = arguments[G__61220__i + 0]; ++G__61220__i;}
  args = new cljs.core.IndexedSeq(G__61220__a,0);
} 
return G__61219__delegate.call(this,args);};
G__61219.cljs$lang$maxFixedArity = 0;
G__61219.cljs$lang$applyTo = (function (arglist__61221){
var args = cljs.core.seq(arglist__61221);
return G__61219__delegate(args);
});
G__61219.cljs$core$IFn$_invoke$arity$variadic = G__61219__delegate;
return G__61219;
})()
;

return null;
});
